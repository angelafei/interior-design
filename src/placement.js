import * as T from 'three';
import {fitInside,objectBounds,transformSnapshot,restoreTransform} from './room-boundary.js';
import {snapObject} from './editor-features.js';
const overlaps=(a,b)=>['x','y','z'].every(k=>Math.min(a.max[k],b.max[k])-Math.max(a.min[k],b.min[k])>1e-5);
export function findPlacement(object,obstacles,room,options={}){
 const original=transformSnapshot(object),auto=object.userData.autoSurface;
 const others=obstacles.filter(o=>o!==object),boxes=others.filter(o=>o.userData.catalogId!=='rug').map(objectBounds);
 const detailBoxes=others.filter(o=>o.userData.catalogId!=='rug').map(o=>{const result=[];o.updateWorldMatrix(true,true);o.traverse(m=>{if(m.isMesh){m.geometry.computeBoundingBox();result.push(m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld));}});return result;});
 const origin=original.position,points=[{x:origin.x,z:origin.z}],xs=new Set([origin.x]),zs=new Set([origin.z]);
 const initial=objectBounds(object),left=origin.x-initial.min.x,right=initial.max.x-origin.x,back=origin.z-initial.min.z,front=initial.max.z-origin.z;
 // Include obstacle edges as well as a 20 cm grid, so narrow gaps are not missed by the grid alone.
 for(const b of boxes){xs.add(b.min.x-right-.03);xs.add(b.max.x+left+.03);zs.add(b.min.z-front-.03);zs.add(b.max.z+back+.03);}
 for(let x=-room.width/2;x<=room.width/2+.001;x+=.2)xs.add(x);
 for(let z=-room.depth/2;z<=room.depth/2+.001;z+=.2)zs.add(z);
 for(const x of xs)for(const z of zs)points.push({x,z});
 points.sort((a,b)=>(a.x-origin.x)**2+(a.z-origin.z)**2-((b.x-origin.x)**2+(b.z-origin.z)**2));
 for(const p of points){restoreTransform(object,original);object.userData.autoSurface=auto;object.position.x=p.x;object.position.z=p.z;
  if(!fitInside(object,room))continue;
  snapObject(object,{children:others},room,options);
  if(!fitInside(object,room))continue;
  const bounds=objectBounds(object);
  if(object.userData.catalogId==='rug'||!boxes.some((b,i)=>overlaps(bounds,b)&&(!object.userData.autoSurface||detailBoxes[i].some(part=>overlaps(bounds,part)))))return true;
 }
 restoreTransform(object,original);if(auto===undefined)delete object.userData.autoSurface;else object.userData.autoSurface=auto;return false;
}
