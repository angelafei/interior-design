import * as T from 'three';
import {objectBounds,transformSnapshot,restoreTransform} from './room-boundary.js';
const EPS=1e-5;
const depth=(a,b)=>['x','y','z'].map(k=>Math.min(a.max[k],b.max[k])-Math.max(a.min[k],b.min[k]));
const intersects=(a,b)=>depth(a,b).every(v=>v>EPS);
// Continuous swept AABB: tests the entire segment, including jumps over thin objects.
export function pathBlocked(start,end,obstacle){
 const delta=end.getCenter(new T.Vector3()).sub(start.getCenter(new T.Vector3()));
 if(intersects(start,obstacle)){
  const away=start.getCenter(new T.Vector3()).sub(obstacle.getCenter(new T.Vector3()));
  const before=depth(start,obstacle).reduce((a,b)=>a*Math.max(0,b),1),after=depth(end,obstacle).reduce((a,b)=>a*Math.max(0,b),1);
  return delta.lengthSq()>EPS*EPS ? !(delta.dot(away)>0&&after<before-EPS) : after>before+EPS;
 }
 let entry=0,exit=1;
 for(const k of ['x','y','z']){
  if(Math.abs(delta[k])<EPS){if(start.max[k]<=obstacle.min[k]+EPS||start.min[k]>=obstacle.max[k]-EPS)return false;continue;}
  const a=(obstacle.min[k]+EPS-start.max[k])/delta[k],b=(obstacle.max[k]-EPS-start.min[k])/delta[k];
  entry=Math.max(entry,Math.min(a,b));exit=Math.min(exit,Math.max(a,b));if(entry>=exit)return false;
 }
 return entry<1&&exit>0;
}
export function translationBlocked(o,delta,obstacles){
 if(o.userData.catalogId==='rug')return false;
 const start=objectBounds(o),end=start.clone().translate(delta);
 return obstacles.some(other=>other!==o&&other.userData.catalogId!=='rug'&&pathBlocked(start,end,objectBounds(other)));
}
export function constrainCollision(o,previous,obstacles){
 if(!previous||o.userData.catalogId==='rug')return true;
 const next=transformSnapshot(o),end=objectBounds(o);restoreTransform(o,previous);const start=objectBounds(o);restoreTransform(o,next);
 const translating=next.quaternion.equals(previous.quaternion)&&next.scale.equals(previous.scale);
 const blocked=obstacles.some(other=>other!==o&&other.userData.catalogId!=='rug'&&(translating?pathBlocked(start,end,objectBounds(other)):intersects(end,objectBounds(other))));
 if(blocked)restoreTransform(o,previous);return !blocked;
}
