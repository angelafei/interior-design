import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Box3} from 'three';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {furniture,setFinish} from '../src/models.js';
// Node lacks FileReader; preserve the browser's asynchronous result/loadend contract.
class NodeFileReader {
 readAsArrayBuffer(blob){blob.arrayBuffer().then(v=>{this.result=v;this.onload?.();this.onloadend?.();});}
 readAsDataURL(blob){blob.arrayBuffer().then(v=>{this.result=`data:${blob.type};base64,${Buffer.from(v).toString('base64')}`;this.onload?.();this.onloadend?.();});}
}
test('GLB export and import preserve scene bounds, objects and finish color',async()=>{
 const previous=globalThis.FileReader;globalThis.FileReader=NodeFileReader;
 try{const group=new Group();for(const [i,id] of ['sofa','sink','books'].entries()){const o=furniture(id);o.position.x=i*2;o.rotation.y=.3;o.scale.setScalar(.8);setFinish(o,'#586854',.4);group.add(o);}const bounds=new Box3().setFromObject(group);
 const data=await new GLTFExporter().parseAsync(group,{binary:true});assert(data instanceof ArrayBuffer);assert.equal(new DataView(data).getUint32(0,true),0x46546c67);
 const loaded=(await new GLTFLoader().parseAsync(data,'')).scene;const after=new Box3().setFromObject(loaded);assert(bounds.min.distanceTo(after.min)<.0001);assert(bounds.max.distanceTo(after.max)<.0001);const ids=[];loaded.traverse(o=>{if(o.userData.catalogId)ids.push(o.userData.catalogId);if(o.isMesh&&o.material.name==='finish')assert.equal(o.material.color.getHexString(),'586854');});assert.deepEqual(ids.sort(),['books','sink','sofa']);
 }finally{globalThis.FileReader=previous;}
});
test('invalid GLB is rejected by asset loader',async()=>{await assert.rejects(new GLTFLoader().parseAsync(new Uint8Array([1,2,3,4]).buffer,''));});
