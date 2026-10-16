import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {translationBlocked,constrainCollision,pathBlocked} from '../src/collisions.js';
import {translateTogether} from '../src/object-editing.js';
import {transformSnapshot} from '../src/room-boundary.js';
import {defaultRoom} from '../src/room.js';
function box(x=0,y=0,z=0,w=1){const o=new T.Mesh(new T.BoxGeometry(w,1,1),new T.MeshBasicMaterial());o.position.set(x,y+.5,z);return o;}
test('fast movement cannot tunnel through furniture',()=>{const o=box(-2),other=box(0,0,0,.05);assert.equal(translationBlocked(o,new T.Vector3(4,0,0),[other]),true);});
test('furniture above or alongside path does not block',()=>{const o=box(-2);assert.equal(translationBlocked(o,new T.Vector3(4,0,0),[box(0,2),box(0,0,2)]),false);});
test('touching surfaces allow tabletop sliding and movement away',()=>{assert.equal(translationBlocked(box(-2,1),new T.Vector3(4,0,0),[box()]),false);assert.equal(translationBlocked(box(-1),new T.Vector3(-1,0,0),[box()]),false);});
test('rugs allow placement above and movement across them',()=>{const rug=box();rug.userData.catalogId='rug';assert.equal(translationBlocked(box(-2),new T.Vector3(4,0,0),[rug]),false);assert.equal(translationBlocked(rug,new T.Vector3(2,0,0),[box(1)]),false);});
test('locked and hidden furniture remain physical obstacles',()=>{const o=box();o.visible=false;o.userData.locked=true;assert.equal(translationBlocked(box(-2),new T.Vector3(4,0,0),[o]),true);});
test('single move restores previous transform on collision',()=>{const o=box(-2),before=transformSnapshot(o);o.position.x=2;assert.equal(constrainCollision(o,before,[box()]),false);assert.equal(o.position.x,-2);});
test('group collision rejects entire movement and ignores selected members',()=>{const a=box(-2),b=box(-2,0,1.5),block=box();assert.equal(translateTogether([a,b],new T.Vector3(4,0,0),defaultRoom,[a,b,block]),false);assert.equal(a.position.x,-2);assert.equal(b.position.x,-2);assert.equal(translateTogether([a,b],new T.Vector3(.1,0,0),defaultRoom,[a,b]),true);});
test('existing overlap can escape outward but cannot cross through obstacle',()=>{const o=box(-.5),other=box();assert.equal(translationBlocked(o,new T.Vector3(-1,0,0),[other]),false);assert.equal(translationBlocked(o,new T.Vector3(2,0,0),[other]),true);});
