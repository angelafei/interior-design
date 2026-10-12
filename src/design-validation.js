import {catalog} from './models.js';
import {validateRoom} from './room.js';
export function validateDesign(data){
 if(!data||data.version!==1||!Array.isArray(data.items)||data.items.length>100)throw Error('方案格式不正確或物件超過 100 件');
 validateRoom(data.room||{});const ids=new Set();
 for(const item of data.items){
  if(!item||typeof item.uid!=='string'||!item.uid||ids.has(item.uid)||typeof item.name!=='string')throw Error('方案物件識別或名稱不正確');ids.add(item.uid);
  if(!Array.isArray(item.position)||item.position.length!==3||!item.position.every(n=>Number.isFinite(n)&&Math.abs(n)<=100)||!Array.isArray(item.scale)||item.scale.length!==3||!item.scale.every(n=>Number.isFinite(n)&&n>=.1&&n<=3)||!Number.isFinite(item.rotation))throw Error('方案物件位置、旋轉或縮放不正確');
  if(item.surface!=null&&!['plain','wood','fabric','stone'].includes(item.surface))throw Error('方案材質種類不正確');
  if(item.color!=null&&!/^#[0-9a-f]{6}$/i.test(item.color))throw Error('方案物件顏色不正確');
  if(item.roughness!=null&&(!Number.isFinite(item.roughness)||item.roughness<0||item.roughness>1))throw Error('方案材質粗糙度不正確');
  if(item.imported){if(typeof item.imported!=='string'||!/^data:[^,]*;base64,/.test(item.imported))throw Error('匯入模型必須包含在方案檔案中');}
  else if(!catalog.some(c=>c.id===item.id))throw Error('方案包含不支援的傢具');
 }
 return data;
}
