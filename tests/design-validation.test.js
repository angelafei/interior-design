import test from 'node:test';
import assert from 'node:assert/strict';
import {validateDesign} from '../src/design-validation.js';
const item={id:'chair',uid:'a',name:'Chair',position:[0,0,0],scale:[1,1,1],rotation:0,color:'#abcdef'};
const design=()=>({version:1,items:[structuredClone(item)]});
test('valid and legacy designs pass without mutation',()=>{const d=design(),copy=structuredClone(d);assert.equal(validateDesign(d),d);assert.deepEqual(d,copy);assert.doesNotThrow(()=>validateDesign({version:1,items:[]}));});
for(const patch of [{position:[NaN,0,0]},{scale:[-1,1,1]},{scale:[4,1,1]},{rotation:Infinity},{id:'missing'},{color:'red'},{roughness:2},{uid:''},{name:null},{imported:'https://example.com/a.glb'}])test(`reject invalid item ${JSON.stringify(patch)}`,()=>{const d=design();Object.assign(d.items[0],patch);assert.throws(()=>validateDesign(d));});
test('reject invalid root, duplicate ids and excessive object count',()=>{for(const d of [null,{},[],{version:2,items:[]},{version:1,items:[item,item]},{version:1,items:Array(101).fill(item)}])assert.throws(()=>validateDesign(d));});
test('embedded model accepted; invalid room rejected before applying',()=>{const d=design();d.items[0].id=undefined;d.items[0].imported='data:model/gltf-binary;base64,AAAA';assert.doesNotThrow(()=>validateDesign(d));d.room={width:1};assert.throws(()=>validateDesign(d));});
