import * as T from 'three';
const EPS=1e-6;
export const transformSnapshot=o=>({position:o.position.clone(),quaternion:o.quaternion.clone(),scale:o.scale.clone()});
export function restoreTransform(o,s){o.position.copy(s.position);o.quaternion.copy(s.quaternion);o.scale.copy(s.scale);o.updateMatrixWorld(true);}
function regions(r){const full={minX:-r.width/2,maxX:r.width/2,minZ:-r.depth/2,maxZ:r.depth/2};return r.shape==='l'?[{...full,maxX:r.width/2-r.cutWidth},{...full,maxZ:r.depth/2-r.cutDepth}]:[full];}
export function objectBounds(o){o.updateWorldMatrix(true,true);const b=new T.Box3().setFromObject(o);if(b.isEmpty())b.set(o.position,o.position);return b;}
export function boundsInside(b,r){return b.min.y>=-EPS&&b.max.y<=r.height+EPS&&regions(r).some(a=>b.min.x>=a.minX-EPS&&b.max.x<=a.maxX+EPS&&b.min.z>=a.minZ-EPS&&b.max.z<=a.maxZ+EPS);}
// Project the complete transformed bounds into the nearest usable rectangle of the room.
// Do not resize oversized furniture; callers can restore the last valid transform.
export function fitInside(o,r){const b=objectBounds(o),size=b.getSize(new T.Vector3());if(![...b.min.toArray(),...b.max.toArray()].every(Number.isFinite)||size.y>r.height+EPS)return false;
 const candidates=regions(r).filter(a=>size.x<=a.maxX-a.minX+EPS&&size.z<=a.maxZ-a.minZ+EPS).map(a=>new T.Vector3(T.MathUtils.clamp(0,a.minX-b.min.x,a.maxX-b.max.x),T.MathUtils.clamp(0,-b.min.y,r.height-b.max.y),T.MathUtils.clamp(0,a.minZ-b.min.z,a.maxZ-b.max.z))).sort((a,b)=>a.lengthSq()-b.lengthSq());
 if(!candidates.length)return false;o.position.add(candidates[0]);o.updateMatrixWorld(true);return true;
}
