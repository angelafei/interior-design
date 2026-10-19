import * as T from 'three';
export function lightColor(k){return new T.Color(k<3500?'#ffd09a':k<5000?'#ffe6c4':'#f2f5ff');}
export function updateAtmosphere(scene,sun,objects,settings){const l=settings.lighting,night=l.period==='night';scene.background.set(night?'#252b35':'#eeece7');const ambient=scene.children.find(o=>o.isHemisphereLight);ambient.intensity=night?.3:2.2;sun.intensity=night?.15:3.6;sun.color.set(night?'#b1c6e7':'#fff4df');
 const ids={lamp:1.35,orb:1.3,mushroom:.32};let count=0;objects.children.forEach(o=>{let light=o.children.find(c=>c.userData.fixtureLight);if(ids[o.userData.catalogId]){if(!light){light=new T.PointLight();light.userData.fixtureLight=true;o.add(light);}light.position.set(0,ids[o.userData.catalogId],0);light.color.copy(lightColor(l.kelvin));light.intensity=count++<12?l.brightness*(night?12:4):0;light.distance=6;light.decay=2;light.castShadow=false;}});
}
export function inventory(items){const map=new Map();for(const i of items){const key=[i.id,i.name,i.color].join('|');if(!map.has(key))map.set(key,{name:i.name,color:i.color||'原始',quantity:0});map.get(key).quantity++;}return [...map.values()];}
const escape=s=>`"${String(s).replace(/^[=+@-]/,"'$&").replaceAll('"','""')}"`;
export function inventoryCSV(items){return '\ufeff'+[['品項','顏色','數量'],...inventory(items).map(i=>[i.name,i.color,i.quantity])].map(row=>row.map(escape).join(',')).join('\r\n');}
