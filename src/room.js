import * as T from 'three';
import {surfaceTypes,surfaceTexture} from './surfaces.js';
export const defaultRoom={width:6,depth:5,height:2.6,shape:'rectangle',cutWidth:2,cutDepth:2,wall:'#edece3',floor:'#cdbb99',floorSurface:'wood',floorDirection:0,structures:[],lighting:{period:'day',brightness:1,kelvin:2700},openings:[{type:'window',wall:'left',offset:2.05,width:2,height:1.5,bottom:.8}]};
export function outline(r){const w=r.width/2,d=r.depth/2;return r.shape==='l'?[[-w,-d],[w,-d],[w,d-r.cutDepth],[w-r.cutWidth,d-r.cutDepth],[w-r.cutWidth,d],[-w,d]]:[[-w,-d],[w,-d],[w,d],[-w,d]];}
export function roomArea(r){return r.width*r.depth-(r.shape==='l'?r.cutWidth*r.cutDepth:0);}
export function insideRoom(r,x,z){return x>=-r.width/2&&x<=r.width/2&&z>=-r.depth/2&&z<=r.depth/2&&!(r.shape==='l'&&x>r.width/2-r.cutWidth&&z>r.depth/2-r.cutDepth);}
export function wallSegments(r){const p=outline(r),names=r.shape==='l'?['back','right','innerBack','innerRight','front','left']:['back','right','front','left'];return p.map((a,i)=>{const b=p[(i+1)%p.length],length=Math.hypot(b[0]-a[0],b[1]-a[1]);return {id:names[i],a,b,length};});}
export function validateRoom(input){
 const r={...defaultRoom,...input,openings:input.openings??structuredClone(defaultRoom.openings),structures:input.structures??[],lighting:{...defaultRoom.lighting,...input.lighting}};
 for(const [k,min,max] of [['width',3,12],['depth',3,12],['height',2.2,5]])if(!Number.isFinite(r[k])||r[k]<min||r[k]>max)throw Error('房間寬深須為 3–12 m，高度須為 2.2–5 m');
 if(!['rectangle','l'].includes(r.shape))throw Error('不支援的房型');
 if(r.shape==='l'&&(![r.cutWidth,r.cutDepth].every(Number.isFinite)||r.cutWidth<.5||r.cutDepth<.5||r.cutWidth>r.width-1.5||r.cutDepth>r.depth-1.5))throw Error('L 型缺角至少 0.5 m，兩側走道至少留 1.5 m');
 if(!surfaceTypes.includes(r.floorSurface)||![0,90].includes(r.floorDirection))throw Error('地板設定不正確');
 if(!['day','night'].includes(r.lighting.period)||!Number.isFinite(r.lighting.brightness)||r.lighting.brightness<0||r.lighting.brightness>2||!Number.isFinite(r.lighting.kelvin)||r.lighting.kelvin<2200||r.lighting.kelvin>6500)throw Error('光線設定不正確');
 if(!Array.isArray(r.structures)||r.structures.length>8)throw Error('最多可設定 8 個柱樑');
 for(const s of r.structures){if(!['column','beam'].includes(s.type)||![s.x,s.z,s.width,s.depth].every(Number.isFinite)||s.width<.1||s.depth<.1||![s.x-s.width/2,s.x+s.width/2].every(x=>[s.z-s.depth/2,s.z+s.depth/2].every(z=>insideRoom(r,x,z))))throw Error('柱樑必須完整位於房間內，寬深至少 0.1 m');}
 if(!Array.isArray(r.openings)||r.openings.length>8)throw Error('最多可設定 8 個門窗');
 r.openings=r.openings.map(o=>({...o,bottom:o.type==='door'?0:o.bottom,hinge:o.hinge||'left',angle:o.angle??0}));
 for(const o of r.openings){const length=wallSegments(r).find(s=>s.id===o.wall)?.length;
  if(!length||!['window','door'].includes(o.type)||![o.offset,o.width,o.height,o.bottom,o.angle].every(Number.isFinite)||!['left','right'].includes(o.hinge)||o.angle<0||o.angle>110||o.width<.4||o.height<.4||o.bottom<0||o.offset-o.width/2<.1||o.offset+o.width/2>length-.1||o.bottom+o.height>r.height-.1)throw Error('門窗須完整位於牆內，邊緣與牆頂至少留 10 cm；開門角度 0–110°');
 }
 for(let i=0;i<r.openings.length;i++)for(let j=0;j<i;j++){const a=r.openings[i],b=r.openings[j];if(a.wall===b.wall&&Math.abs(a.offset-b.offset)<(a.width+b.width)/2+.08&&a.bottom<b.bottom+b.height+.08&&b.bottom<a.bottom+a.height+.08)throw Error('同一面牆的門窗不可重疊，請保留至少 8 cm 間距');}
 for(const key of ['wall','floor'])if(!/^#[0-9a-f]{6}$/i.test(r[key]))r[key]=defaultRoom[key];return r;
}
export function buildRoom(room,walls,r){
 const clear=g=>{for(const child of [...g.children]){if(child===walls)continue;child.traverse(m=>{m.geometry?.dispose();if(m.material){m.material.map?.userData.owned&&m.material.map.dispose();m.material.dispose();}});g.remove(child);}};clear(room);clear(walls);
 const box=(w,h,d,x,y,z,color,parent=room)=>{if(Math.min(w,h,d)<=0)return;const m=new T.Mesh(new T.BoxGeometry(w,h,d),new T.MeshStandardMaterial({color,roughness:.9}));m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;parent.add(m);return m;};
 const shape=new T.Shape(outline(r).map(([x,z])=>new T.Vector2(x,-z)));const slab=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.14,bevelEnabled:false}),new T.MeshStandardMaterial({color:r.floor}));slab.rotation.x=-Math.PI/2;slab.position.y=-.14;slab.receiveShadow=true;room.add(slab);
 const xs=[...Array(Math.ceil(r.width/.3)+1)].map((_,i)=>-r.width/2+i*r.width/Math.ceil(r.width/.3));const zs=[...Array(Math.ceil(r.depth)+1)].map((_,i)=>-r.depth/2+i*r.depth/Math.ceil(r.depth));if(r.shape==='l'){xs.push(r.width/2-r.cutWidth);zs.push(r.depth/2-r.cutDepth);}xs.sort((a,b)=>a-b);zs.sort((a,b)=>a-b);
 for(let i=1;i<xs.length;i++)for(let j=1;j<zs.length;j++){const x=(xs[i]+xs[i-1])/2,z=(zs[j]+zs[j-1])/2;if(!insideRoom(r,x,z))continue;const m=box(xs[i]-xs[i-1]-.003,.018,zs[j]-zs[j-1]-.003,x,.002,z,new T.Color(r.floor).multiplyScalar(.97+(i%3)*.02));if(m){const t=surfaceTexture(r.floorSurface);if(t){m.material.map=t.clone();m.material.map.userData.owned=true;m.material.map.rotation=r.floorDirection*Math.PI/180;m.material.map.needsUpdate=true;m.material.bumpMap=m.material.map;m.material.bumpScale=.006;}}}
 for(const s of r.structures){const m=box(s.width,s.type==='beam'?.25:r.height,s.depth,s.x,s.type==='beam'?r.height-.125:r.height/2,s.z,r.wall);m.userData.structure=s.type;}
 for(const segment of wallSegments(r)){
  const {id:wall,a,b,length}=segment,holes=r.openings.filter(o=>o.wall===wall),angle=Math.atan2(-(b[1]-a[1]),b[0]-a[0]);
  const group=new T.Group();walls.add(group);group.rotation.y=angle;group.position.set((a[0]+b[0])/2,0,(a[1]+b[1])/2);group.userData={wall,normal:[Math.sin(angle),Math.cos(angle)]};
  const draw=(w,h,d,u,y,z,color,parent=group)=>box(w,h,d,u-length/2,y,z,color,parent);
  const xs=[0,length,...holes.flatMap(o=>[o.offset-o.width/2,o.offset+o.width/2])].sort((a,b)=>a-b),ys=[0,r.height,...holes.flatMap(o=>[o.bottom,o.bottom+o.height])].sort((a,b)=>a-b);
  for(let i=1;i<xs.length;i++)for(let j=1;j<ys.length;j++){const x=(xs[i]+xs[i-1])/2,y=(ys[j]+ys[j-1])/2;if(!holes.some(o=>Math.abs(x-o.offset)<o.width/2&&y>o.bottom&&y<o.bottom+o.height))draw(xs[i]-xs[i-1],ys[j]-ys[j-1],.12,x,y,-.06,r.wall);}
  holes.forEach(o=>{const y=o.bottom+o.height/2,trim=o.type==='door'?'#b39a77':'#f4f0e6';for(const x of [o.offset-o.width/2+.025,o.offset+o.width/2-.025])draw(.05,o.height,.17,x,y,0,trim);draw(o.width,.05,.17,o.offset,o.bottom+o.height-.025,0,trim);
   if(o.type==='window'){draw(o.width,.05,.22,o.offset,o.bottom+.025,.03,trim);draw(.035,o.height,.12,o.offset,y,0,trim);const pane=draw(o.width-.1,o.height-.1,.015,o.offset,y,-.05,'#c9dedc');pane.material.transparent=true;pane.material.opacity=.32;pane.castShadow=false;}
   else {const hinge=new T.Group(),sign=o.hinge==='left'?1:-1;hinge.position.set(o.offset-length/2-sign*(o.width-.1)/2,0,0);hinge.rotation.y=-sign*o.angle*Math.PI/180;group.add(hinge);box(o.width-.1,o.height-.05,.045,sign*(o.width-.1)/2,y,0,'#c6b496',hinge);box(.035,.13,.035,sign*(o.width-.18),1,.04,'#655d4c',hinge);}
  });
 }
}
export function updateWallVisibility(walls,camera,top=false){walls.visible=!top;for(const g of walls.children){const n=g.userData.normal;g.visible=!n||(camera.position.x-g.position.x)*n[0]+(camera.position.z-g.position.z)*n[1]>0;}}
