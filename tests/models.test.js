import test from 'node:test';
import assert from 'node:assert/strict';
import {Box3} from 'three';
import {catalog,furniture,setFinish} from '../src/models.js';
test('catalog identifiers are unique with usable metadata',()=>{assert.equal(new Set(catalog.map(c=>c.id)).size,catalog.length);for(const c of catalog){assert(c.name&&c.en&&c.category&&c.size);assert.match(c.color,/^#[0-9a-f]{6}$/i);}});
for(const c of catalog)test(`${c.id}: valid model, independent finish, stable dimensions`,()=>{const a=furniture(c.id),b=furniture(c.id),bounds=new Box3().setFromObject(a);assert(!bounds.isEmpty());a.traverse(m=>{if(m.isMesh){assert([...m.geometry.attributes.position.array].every(Number.isFinite));assert(m.material);}});setFinish(a,'#586854',.4);assert.equal(b.userData.color,c.color);assert.equal(a.userData.color,'#586854');assert(bounds.equals(new Box3().setFromObject(a)));a.traverse(m=>{if(m.isMesh&&m.material.name==='finish'){assert.equal(m.material.color.getHexString(),'586854');assert.equal(m.material.roughness,.4);}});});
