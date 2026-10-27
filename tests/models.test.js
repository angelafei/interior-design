import test from 'node:test';
import assert from 'node:assert/strict';
import {Box3} from 'three';
import {catalog,activeCatalog,furniture,setFinish} from '../src/models.js';
test('catalog identifiers are unique with usable metadata',()=>{assert.equal(new Set(catalog.map(c=>c.id)).size,catalog.length);for(const c of catalog){assert(c.name&&c.en&&c.category&&c.size);assert.match(c.color,/^#[0-9a-f]{6}$/i);}});
test('selected Nordic furniture is available in the library',()=>{const ids=new Set(activeCatalog.map(c=>c.id));for(const id of ['curve-wood-chair','frame-lounge-chair','soft-arc-chair','lean-side-table','tier-trolley'])assert(ids.has(id));});
for(const c of catalog)test(`${c.id}: valid model, independent finish, stable dimensions`,()=>{const a=furniture(c.id),b=furniture(c.id),bounds=new Box3().setFromObject(a);assert(!bounds.isEmpty());a.traverse(m=>{if(m.isMesh){assert([...m.geometry.attributes.position.array].every(Number.isFinite));assert(m.material);}});const changed=setFinish(a,'#586854',.4);assert.equal(b.userData.color,c.color);assert.equal(changed,!c.fixedColor);assert.equal(a.userData.color,c.fixedColor?c.color:'#586854');assert(bounds.equals(new Box3().setFromObject(a)));a.traverse(m=>{if(m.isMesh&&m.material.name==='finish'&&!c.fixedColor){assert.equal(m.material.color.getHexString(),'586854');assert.equal(m.material.roughness,.4);}});});

test('cat tree right shelf clears the house roof',()=>{const tree=furniture('cat-tree'),shelf=tree.getObjectByName('cat-tree-right-shelf'),roof=tree.getObjectByName('cat-tree-house-roof');assert(shelf&&roof);const shelfBounds=new Box3().setFromObject(shelf),roofBounds=new Box3().setFromObject(roof);assert(shelfBounds.min.y>roofBounds.max.y+.2);});
