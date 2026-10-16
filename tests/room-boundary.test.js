import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {fitInside,objectBounds,boundsInside,transformSnapshot,restoreTransform} from '../src/room-boundary.js';
import {translateTogether} from '../src/object-editing.js';
import {defaultRoom} from '../src/room.js';
import {furniture} from '../src/models.js';
import {snapObject} from '../src/editor-features.js';
const room={...defaultRoom,width:6,depth:5,height:2.6};
function box(w=2,h=1,d=1){const o=new T.Group(),m=new T.Mesh(new T.BoxGeometry(w,h,d),new T.MeshBasicMaterial());m.position.y=h/2;o.add(m);return o;}
test('furniture edge stays inside all four walls even when center is inside',()=>{for(const [x,z] of [[2.9,0],[-2.9,0],[0,2.4],[0,-2.4]]){const o=box();o.position.set(x,0,z);assert.equal(boundsInside(objectBounds(o),room),false);assert.equal(fitInside(o,room),true);assert.ok(boundsInside(objectBounds(o),room));}});
test('rotated scaled furniture fits complete bounds',()=>{const o=furniture('sofa');o.rotation.y=Math.PI/4;o.scale.setScalar(1.5);o.position.set(2.9,0,2.4);assert.ok(fitInside(o,room));assert.ok(boundsInside(objectBounds(o),room));});
test('L shape excludes whole bounding box, not only the origin',()=>{const r={...room,shape:'l',cutWidth:2,cutDepth:2},o=box();o.position.set(.9,0,1.5);assert.equal(boundsInside(objectBounds(o),r),false);assert.ok(fitInside(o,r));assert.ok(boundsInside(objectBounds(o),r));});
test('floor and ceiling account for actual vertical geometry',()=>{const o=box();for(const y of [-2,2.5]){o.position.y=y;assert.ok(fitInside(o,room));assert.ok(boundsInside(objectBounds(o),room));}});
test('oversized furniture fails without mutation and can restore last valid transform',()=>{const o=box(),old=transformSnapshot(o);o.scale.setScalar(5);const before=o.position.clone();assert.equal(fitInside(o,room),false);assert.ok(o.position.equals(before));restoreTransform(o,old);assert.ok(boundsInside(objectBounds(o),room));});
test('group edge crossing rejects all items without changing relative positions',()=>{const a=box(),b=box();b.position.x=1.9;const before=[a.position.clone(),b.position.clone()];assert.equal(translateTogether([a,b],new T.Vector3(.2,0,0),room),false);assert.ok(a.position.equals(before[0]));assert.ok(b.position.equals(before[1]));assert.ok(translateTogether([a,b],new T.Vector3(-.2,0,0),room));});
test('nested imported geometry uses offset mesh bounds',()=>{const o=new T.Group(),inner=box();inner.position.x=2;o.add(inner);o.position.x=1;assert.ok(fitInside(o,room));assert.ok(boundsInside(objectBounds(o),room));assert.ok(o.position.x<1);});
test('room shrinking and post-snap placement stay inside',()=>{const o=furniture('sofa'),group=new T.Group();group.add(o);o.position.set(2.5,0,2);const small={...room,width:3,depth:3};assert.ok(fitInside(o,small));snapObject(o,group,small);assert.ok(fitInside(o,small));assert.ok(boundsInside(objectBounds(o),small));});
