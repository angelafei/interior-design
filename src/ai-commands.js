import {z} from 'zod';
import * as T from 'three';
import {catalog,activeCatalog,furniture} from './models.js';
import {validateDesign} from './design-validation.js';
import {validateRoom,insideRoom} from './room.js';
const vec=z.array(z.number().finite()).length(3);
const color=z.string().regex(/^#[0-9a-fA-F]{6}$/);
const uid=z.string().min(1).max(120);
export const commandSchema=z.discriminatedUnion('action',[
 z.object({action:z.literal('addFurniture'),id:uid,catalogId:z.enum(activeCatalog.map(c=>c.id)),position:vec,rotation:z.number().finite().min(-360).max(360)}).strict(),
 z.object({action:z.literal('removeFurniture'),id:uid}).strict(),
 z.object({action:z.literal('moveFurniture'),id:uid,position:vec}).strict(),
 z.object({action:z.literal('rotateFurniture'),id:uid,degrees:z.number().finite().min(-360).max(360)}).strict(),
 z.object({action:z.literal('scaleFurniture'),id:uid,scale:z.number().min(.1).max(3)}).strict(),
 z.object({action:z.literal('changeColor'),id:uid,color}).strict(),
 z.object({action:z.literal('changeRoomColor'),target:z.enum(['wall','floor']),color}).strict()
]);
export const planSchema=z.object({summary:z.string().min(1).max(1200),commands:z.array(commandSchema).max(30)}).strict();
export const planJSONSchema=z.toJSONSchema(planSchema,{target:'draft-7'});
export function sceneInfo(design){validateDesign(design);return {room:validateRoom(design.room||{}),furniture:design.items.map(i=>({id:i.uid,catalogId:i.id||'imported',name:i.name,position:i.position,rotationDegrees:i.rotation*180/Math.PI,scale:i.scale,color:i.color,editable:!i.imported&&!i.locked&&!i.hidden,locked:!!i.locked,hidden:!!i.hidden})),catalog:activeCatalog.map(c=>({id:c.id,name:c.name,category:c.category}))};}
function bounds(item){const o=furniture(item.id);o.position.fromArray(item.position);o.rotation.y=item.rotation;o.scale.fromArray(item.scale);const b=new T.Box3().setFromObject(o);o.traverse(m=>{m.geometry?.dispose();if(m.material)(Array.isArray(m.material)?m.material:[m.material]).forEach(v=>v.dispose());});return b;}
const overlap=(a,b)=>['x','y','z'].every(k=>Math.min(a.max[k],b.max[k])-Math.max(a.min[k],b.min[k])>.025);
export function applyPlan(design,raw){
 validateDesign(design);const plan=planSchema.parse(raw),next=structuredClone(design);next.room=validateRoom(next.room||{});const spatial=new Set();
 for(const c of plan.commands){if(c.action==='changeRoomColor'){next.room[c.target]=c.color;continue;}
  if(c.action==='addFurniture'){if(next.items.some(i=>i.uid===c.id))throw Error('新增物件 ID 已存在');const def=catalog.find(d=>d.id===c.catalogId);next.items.push({id:c.catalogId,uid:c.id,name:def.name,color:def.color,position:[...c.position],rotation:c.rotation*Math.PI/180,scale:[1,1,1],imported:null});spatial.add(c.id);continue;}
  const item=next.items.find(i=>i.uid===c.id);if(!item)throw Error('找不到指令指定的家具：'+c.id);if(item.locked||item.hidden)throw Error('請先解鎖並顯示家具，再使用 AI 修改');if(item.imported)throw Error('AI 暫不修改匯入模型，請使用手動工具');
  if(c.action==='removeFurniture'){next.items=next.items.filter(i=>i.uid!==c.id);spatial.delete(c.id);}
  if(c.action==='moveFurniture'){item.position=[...c.position];spatial.add(c.id);}
  if(c.action==='rotateFurniture'){item.rotation=c.degrees*Math.PI/180;spatial.add(c.id);}
  if(c.action==='scaleFurniture'){item.scale=[c.scale,c.scale,c.scale];spatial.add(c.id);}
  if(c.action==='changeColor'){if(catalog.find(d=>d.id===item.id)?.fixedColor)throw Error('此家具使用固定造型配色，不能變更顏色');item.color=c.color;delete item.surface;}
 }
 validateDesign(next);
 if(spatial.size&&next.items.some(i=>i.imported))throw Error('場景含匯入模型，暫停 AI 空間移動以避免未檢查的碰撞；仍可修改內建家具顏色');
 const boxes=new Map(next.items.filter(i=>!i.imported).map(i=>[i.uid,bounds(i)]));
 for(const id of spatial){const item=next.items.find(i=>i.uid===id);if(!item)continue;const b=boxes.get(id),r=next.room;
  if(b.min.y<-.025||b.max.y>r.height+.025||![b.min.x,b.max.x].every(x=>[b.min.z,b.max.z].every(z=>insideRoom(r,x,z))))throw Error(item.name+' 超出房間邊界或 L 型可用區域');
  for(const other of next.items){if(other.uid===id||other.id==='rug'||item.id==='rug')continue;if(overlap(b,boxes.get(other.uid)))throw Error(item.name+' 與 '+other.name+' 的範圍重疊');}
  for(const s of r.structures){const sb=new T.Box3(new T.Vector3(s.x-s.width/2,s.type==='beam'?r.height-.25:0,s.z-s.depth/2),new T.Vector3(s.x+s.width/2,r.height,s.z+s.depth/2));if(overlap(b,sb))throw Error(item.name+' 與柱樑重疊');}
 }
 return {design:next,plan};
}
export function demoPlan(design){const commands=[{action:'changeRoomColor',target:'wall',color:'#F5F0E8'}];for(const i of design.items.filter(i=>['sofa','cloud'].includes(i.id)&&!i.locked&&!i.hidden))commands.push({action:'changeColor',id:i.uid,color:'#D3D3D3'});return {summary:'離線固定示範：牆面改米白、沙發改淺灰。這不是 LLM 生成結果。',commands};}
