import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
export const catalog = [
 {id:'cat-tree-solid',name:'森階 實木攀爬塔',en:'GROVE WOOD CAT TOWER',category:'寵物',price:5880,color:'#c29b68',size:'51 × 40 × 112 cm',fixedColor:true},
 {id:'cat-tree-macaron',name:'星糖 矮階探索塔',en:'STARDROP LOW-STEP TOWER',category:'寵物',price:8290,color:'#91a9dc',size:'75 × 90 × 110 cm',fixedColor:true},
 {id:'cat-tree-christmas',name:'絨雪 樹屋貓塔',en:'SNOWPLUSH TREE HOUSE',category:'寵物',price:6980,color:'#e7a9bd',size:'56 × 56 × 120 cm',fixedColor:true},
 {id:'cat-tree-venus',name:'緋花 植境貓塔',en:'BLOOM GARDEN CAT TOWER',category:'寵物',price:9680,color:'#739653',size:'70 × 70 × 150 cm',fixedColor:true},
 {id:'cat-barrel-lime',name:'青柚 雙層貓抓屋',en:'CITRUS DOUBLE CAT DEN',category:'寵物',price:4980,color:'#b8cf63',size:'38 × 38 × 90 cm',fixedColor:true},
 {id:'cat-tree',name:'枝 木質貓跳台',en:'BRANCH CAT TREE',category:'寵物',price:12800,color:'#b79a75',size:'80 × 65 × 150 cm'},
 {id:'cat-side-table',name:'拱 貓屋邊几',en:'ARCH CAT SIDE TABLE',category:'寵物',price:8600,color:'#c6b18f',size:'60 × 50 × 55 cm'},
 {id:'litter-cabinet',name:'隱 貓砂盆收納櫃',en:'HIDE LITTER CABINET',category:'寵物',price:14800,color:'#b6a084',size:'100 × 55 × 65 cm'},
 {id:'pet-bed',name:'巢 圓角寵物床',en:'NEST PET BED',category:'寵物',price:4200,color:'#aaa892',size:'90 × 65 × 24 cm'},
 {id:'pet-feeder',name:'食 高架雙碗餵食台',en:'DUO PET FEEDER',category:'寵物',price:2800,color:'#ad8d64',size:'60 × 30 × 25 cm'},
 {id:'pet-bench',name:'伴 人寵共用長凳',en:'TOGETHER PET BENCH',category:'寵物',price:16800,color:'#b49a78',size:'120 × 45 × 48 cm'},
 {id:'curve-wood-chair',name:'弦木 低背休閒椅',en:'STRING WOOD LOUNGE CHAIR',category:'椅凳',price:13800,color:'#b98f67',size:'60 × 59 × 70 cm'},
 {id:'frame-lounge-chair',name:'框影 木構布椅',en:'FRAME WOOD LOUNGE CHAIR',category:'椅凳',price:16800,color:'#d7c9b5',size:'73 × 65 × 71 cm'},
 {id:'soft-arc-chair',name:'雲丘 圓弧單人椅',en:'CLOUDHILL LOUNGE CHAIR',category:'椅凳',price:22800,color:'#aeb8a4',size:'105 × 95 × 70 cm'},
 {id:'lean-side-table',name:'倚線 C 型邊桌',en:'LEAN C SIDE TABLE',category:'桌几',price:7200,color:'#59655b',size:'56 × 34 × 61 cm'},
 {id:'tier-trolley',name:'層行 雙層推車',en:'TIER MOBILE TROLLEY',category:'收納',price:9800,color:'#ddd7c8',size:'50 × 35 × 64 cm'},
 {id:'sink',name:'水槽流理台',en:'SINK CABINET',category:'廚房',price:18000,color:'#c7c2b4',size:'120 × 62 × 90 cm'},
 {id:'hob',name:'爐台與烤箱',en:'COOKING UNIT',category:'廚房',price:24000,color:'#c7c2b4',size:'90 × 62 × 90 cm'},
 {id:'fridge',name:'雙門冰箱',en:'REFRIGERATOR',category:'廚房',price:28000,color:'#b8bbb7',size:'76 × 72 × 185 cm'},
 {id:'island',name:'橡木中島',en:'KITCHEN ISLAND',category:'廚房',price:32000,color:'#a78964',size:'160 × 80 × 92 cm'},
 {id:'barstool',name:'高腳吧台椅',en:'COUNTER STOOL',category:'廚房',price:4200,color:'#a7835d',size:'42 × 42 × 76 cm'},
 {id:'pantry',name:'餐具高櫃',en:'PANTRY CABINET',category:'廚房',price:16800,color:'#c4baa6',size:'80 × 45 × 200 cm'},

 {id:'tray',name:'岸 橢圓置物盤',en:'SHORE OBJECT TRAY',category:'裝飾',price:1280,color:'#c7b69b',size:'38 × 22 × 4 cm'},
 {id:'candles',name:'暮光 雙燭台',en:'DUSK CANDLE HOLDERS',category:'裝飾',price:1980,color:'#93654d',size:'28 × 12 × 35 cm'},
 {id:'books',name:'閱讀角 藝術書組',en:'ART BOOK COLLECTION',category:'裝飾',price:1680,color:'#8a947c',size:'30 × 23 × 10 cm'},
 {id:'clock',name:'刻 木質座鐘',en:'TOKI DESK CLOCK',category:'裝飾',price:2400,color:'#aa8562',size:'24 × 9 × 27 cm'},
 {id:'bonsai',name:'小景 桌上盆栽',en:'MINIATURE GARDEN',category:'裝飾',price:1880,color:'#b5a489',size:'35 × 25 × 43 cm'},
 {id:'frame',name:'留白 桌上畫框',en:'STILL ART FRAME',category:'裝飾',price:1480,color:'#785b44',size:'24 × 12 × 32 cm'},
 {id:'bowl',name:'漣 陶製果盤',en:'RIPPLE CERAMIC BOWL',category:'裝飾',price:2200,color:'#c7b5a6',size:'32 × 32 × 13 cm'},
 {id:'cushion',name:'格 織紋靠枕',en:'GRID WOVEN CUSHION',category:'裝飾',price:980,color:'#b18566',size:'43 × 16 × 43 cm'},

 {id:'cloud',name:'Cloud 雲朵雙人椅',en:'CLOUD LOVESEAT',category:'沙發',price:26800,color:'#e1d6c6',size:'180 × 90 × 78 cm'},
 {id:'ribbon',name:'Ribbon 緞帶休閒椅',en:'RIBBON CHAIR',category:'椅凳',price:15800,color:'#8a5546',size:'76 × 82 × 80 cm'},
 {id:'donut',name:'Loop 環形軟凳',en:'LOOP OTTOMAN',category:'椅凳',price:6200,color:'#8c956e',size:'70 × 70 × 40 cm'},
 {id:'stone',name:'臺地 洞石邊几',en:'TERRA SIDE TABLE',category:'桌几',price:9400,color:'#c9b897',size:'48 × 48 × 52 cm'},
 {id:'petal',name:'Petal 花瓣茶几',en:'PETAL COFFEE TABLE',category:'桌几',price:14200,color:'#7c4839',size:'110 × 100 × 36 cm'},
 {id:'mushroom',name:'Amanita 蘑菇桌燈',en:'AMANITA TABLE LAMP',category:'燈飾',price:4800,color:'#b6643e',size:'40 × 40 × 46 cm'},
 {id:'orb',name:'月相 球形落地燈',en:'LUNA FLOOR LIGHT',category:'燈飾',price:11200,color:'#d8c7a4',size:'38 × 38 × 150 cm'},
 {id:'arch',name:'Arc 拱門展示架',en:'ARC DISPLAY SHELF',category:'收納',price:22600,color:'#b59a78',size:'90 × 34 × 190 cm'},
 {id:'wave',name:'Ripple 波浪立鏡',en:'RIPPLE FLOOR MIRROR',category:'裝飾',price:8800,color:'#845f4d',size:'72 × 30 × 170 cm'},
 {id:'vase',name:'結 陶藝花器',en:'KNOT CERAMIC VASE',category:'裝飾',price:2600,color:'#c9b49e',size:'32 × 18 × 42 cm'},
 {id:'mobile',name:'Balance 平衡雕塑',en:'BALANCE SCULPTURE',category:'裝飾',price:3600,color:'#3d4641',size:'58 × 22 × 65 cm'},
 {id:'screen',name:'Fold 百褶屏風',en:'FOLD ROOM DIVIDER',category:'裝飾',price:16800,color:'#bfaa86',size:'150 × 36 × 170 cm'},
 {id:'sofa',name:'Noma 三人沙發',en:'NOMA SOFA',category:'沙發',price:32800,color:'#d4c8b2',size:'220 × 88 × 76 cm',tag:'人氣精選'},
 {id:'chair',name:'弧線休閒椅',en:'ARC LOUNGE CHAIR',category:'椅凳',price:12800,color:'#ad7555',size:'78 × 76 × 78 cm'},
 {id:'table',name:'Pebble 圓角茶几',en:'PEBBLE COFFEE TABLE',category:'桌几',price:8600,color:'#92714f',size:'120 × 66 × 36 cm'},
 {id:'lamp',name:'Halo 落地燈',en:'HALO FLOOR LAMP',category:'燈飾',price:6800,color:'#eee4cd',size:'48 × 48 × 165 cm'},
 {id:'cabinet',name:'橡木邊櫃',en:'OAK SIDEBOARD',category:'收納',price:18900,color:'#b39064',size:'160 × 40 × 72 cm'},
 {id:'plant',name:'綠意植栽',en:'BOTANICAL PLANT',category:'裝飾',price:2400,color:'#d2c3ae',size:'60 × 60 × 140 cm'},
 {id:'rug',name:'編織羊毛地毯',en:'WOOL AREA RUG',category:'裝飾',price:7800,color:'#d6cbb7',size:'280 × 200 cm'},
 {id:'stool',name:'原木小圓凳',en:'SOLID WOOD STOOL',category:'椅凳',price:3200,color:'#ae8860',size:'38 × 38 × 44 cm'},
];
// Retain retired models for loading existing designs, but do not offer new additions.
const retiredIds=new Set(['cat-tree','tray','candles','books','clock','bonsai','frame','bowl','cushion','vase','mobile','mushroom']);
export const activeCatalog=catalog.filter(item=>!retiredIds.has(item.id));
export const isAvailable=id=>activeCatalog.some(item=>item.id===id);
export const finishes=[
 {group:'柔和中性',name:'柔霧白',color:'#eeeae1',roughness:.88},
 {group:'柔和中性',name:'象牙白',color:'#e1d8c8',roughness:.88},
 {group:'柔和中性',name:'燕麥米',color:'#cdbda5',roughness:.88},
 {group:'柔和中性',name:'沙岩米',color:'#b6a388',roughness:.88},
 {group:'柔和中性',name:'暖灰',color:'#969187',roughness:.88},
 {group:'柔和中性',name:'石墨黑',color:'#444844',roughness:.88},
 {group:'溫暖色調',name:'杏桃',color:'#d3a17f',roughness:.88},
 {group:'溫暖色調',name:'焦糖',color:'#b57752',roughness:.88},
 {group:'溫暖色調',name:'陶土',color:'#a7624c',roughness:.88},
 {group:'溫暖色調',name:'栗棕',color:'#7b5947',roughness:.88},
 {group:'溫暖色調',name:'霧粉',color:'#c49c98',roughness:.88},
 {group:'溫暖色調',name:'酒紅',color:'#70484c',roughness:.88},
 {group:'自然沉靜',name:'鼠尾草',color:'#7f8a75',roughness:.88},
 {group:'自然沉靜',name:'橄欖綠',color:'#85835f',roughness:.88},
 {group:'自然沉靜',name:'森林綠',color:'#506251',roughness:.88},
 {group:'自然沉靜',name:'霧藍',color:'#81949b',roughness:.88},
 {group:'自然沉靜',name:'深海藍',color:'#455d68',roughness:.88},
 {group:'自然沉靜',name:'靛青',color:'#4c536c',roughness:.88}
];
export function furniture(id,color){
 const root=new T.Group(); const def=catalog.find(d=>d.id===id)||catalog[0];
 const main=new T.MeshStandardMaterial({color:def.fixedColor?def.color:color||def.color,roughness:def.roughness??.86});main.name='finish';
 const wood=new T.MeshStandardMaterial({color:'#826244',roughness:.75});const dark=new T.MeshStandardMaterial({color:'#383b34',roughness:.7});
 const add=(geo,mat,x,y,z,rot)=>{const m=new T.Mesh(geo,mat);m.position.set(x,y,z);if(rot)m.rotation.set(...rot);m.castShadow=true;m.receiveShadow=true;root.add(m);return m;};
 const box=(w,h,d,x,y,z,mat=main,r=.04)=>add(new RoundedBoxGeometry(w,h,d,3,r),mat,x,y,z);
 const cyl=(r,h,x,y,z,mat=wood,r2=r)=>add(new T.CylinderGeometry(r,r2,h,32),mat,x,y,z);
 if(id==='sofa'||id==='chair'){
  const w=id==='sofa'?2.2:.82;box(w,.19,.84,0,.26,0);box(w,.48,.18,0,.57,-.34);box(.16,.43,.8,-w/2+.08,.48,0);box(.16,.43,.8,w/2-.08,.48,0);
  const count=id==='sofa'?3:1;for(let i=0;i<count;i++){box((w-.36)/count-.02,.16,.61,-(w-.36)/2+(i+.5)*(w-.36)/count,.42,.045);const back=box((w-.36)/count-.025,.35,.15,-(w-.36)/2+(i+.5)*(w-.36)/count,.65,-.235);back.rotation.x=-.12;}
  for(const x of [-w/2+.16,w/2-.16])for(const z of [-.27,.27])cyl(.035,.2,x,.1,z,wood);
  if(id==='sofa'){const cushion=new T.MeshStandardMaterial({color:'#77816a',roughness:1});const p=box(.38,.36,.15,.68,.64,-.04,cushion,.08);p.rotation.set(-.2,0,-.14);}
 }
 if(id==='table'){box(1.2,.09,.66,0,.36,0,main,.15);for(const x of [-.4,.4])for(const z of [-.18,.18])cyl(.055,.32,x,.16,z,wood);box(.23,.035,.18,.24,.42,.05,new T.MeshStandardMaterial({color:'#ddd5c2'}),.005);cyl(.06,.09,-.26,.45,.03,new T.MeshStandardMaterial({color:'#ede9db'}));}
 if(id==='stool'){cyl(.2,.06,0,.44,0,main);for(const x of [-.12,.12])for(const z of [-.12,.12])cyl(.025,.41,x,.205,z,wood);}
 if(id==='cabinet'){box(1.6,.56,.4,0,.42,0);for(let i=0;i<4;i++){box(.38,.49,.015,-.6+i*.4,.42,.207,main,.005);box(.015,.09,.023,-.47+i*.4,.45,.23,dark,.004);}for(const x of [-.65,.65])for(const z of [-.13,.13])cyl(.03,.15,x,.075,z,dark);}
 if(id==='lamp'){cyl(.21,.04,0,.02,0,dark);cyl(.018,1.38,0,.72,0,dark);cyl(.2,.32,0,1.5,0,main,.29);cyl(.19,.015,0,1.338,0,new T.MeshStandardMaterial({color:'#fff5d2',emissive:'#e5c894',emissiveIntensity:.5}));}
 if(id==='plant'){cyl(.19,.35,0,.175,0,main,.14);const green=new T.MeshStandardMaterial({color:'#536c42',roughness:1});for(let i=0;i<10;i++){const a=i*2.4;const h=.65+(i%4)*.19;const x=Math.sin(a)*.21,z=Math.cos(a)*.2;const stem=cyl(.012,h, x/2,h/2+.2,z/2,wood);stem.rotation.z=-x;const leaf=add(new T.SphereGeometry(1,12,8),green,x,h+.16,z);leaf.scale.set(.15,.28,.065);leaf.rotation.set(.4,a,.5);}}
 if(id==='rug'){box(2.8,.018,2,0,.015,0,main,.02);const stripe=new T.MeshStandardMaterial({color:'#b5a891',roughness:1});for(let i=0;i<15;i++)box(2.68,.001,.009,0,.025,-.9+i*.13,stripe,.001);}

 const sphere=(rx,ry,rz,x,y,z,mat=main)=>{const m=add(new T.SphereGeometry(1,32,20),mat,x,y,z);m.scale.set(rx,ry,rz);return m;};
 const tube=(points,r,mat=main)=>add(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),64,r,10,false),mat,0,0,0);
 const brass=new T.MeshStandardMaterial({color:'#a99161',metalness:.65,roughness:.35});

 if(id==='curve-wood-chair'){
  // A low, continuous veneer shell with a light four-leg frame.
  const shell=box(.6,.075,.51,0,.405,.03,main,.075);shell.rotation.x=-.08;
  const back=box(.6,.32,.075,0,.52,-.22,main,.085);back.rotation.x=-.24;
  for(const x of [-.255,.255])for(const z of [-.19,.19]){const leg=cyl(.022,.39,x,.195,z,wood);leg.rotation.z=x<0?-.055:.055;leg.rotation.x=z<0?-.05:.05;}
  box(.43,.025,.025,0,.23,-.19,wood,.01);box(.43,.025,.025,0,.23,.19,wood,.01);
 }
 if(id==='frame-lounge-chair'){
  const frame=new T.MeshStandardMaterial({color:'#4b4037',roughness:.78});
  const seat=box(.59,.13,.55,0,.405,.035,main,.07);seat.rotation.x=-.07;
  const back=box(.62,.32,.12,0,.535,-.235,main,.065);back.rotation.x=-.18;
  for(const x of [-.3375,.3375]){
   for(const z of [-.245,.245]){const leg=cyl(.025,.43,x,.215,z,frame);leg.rotation.z=x<0?-.055:.055;leg.rotation.x=z<0?-.045:.045;}
   const arm=box(.035,.035,.54,x,.57,.015,frame,.014);arm.rotation.x=-.04;
   box(.035,.23,.035,x,.455,.22,frame,.014);
  }
  box(.675,.035,.035,0,.68,-.285,frame,.014);
 }
 if(id==='soft-arc-chair'){
  box(.82,.22,.72,0,.28,.07,main,.16);
  const back=box(.82,.41,.22,0,.48,-.28,main,.17);back.rotation.x=-.14;
  sphere(.115,.27,.36,-.405,.42,.03,main);sphere(.115,.27,.36,.405,.42,.03,main);
  box(.64,.13,.55,0,.43,.07,new T.MeshStandardMaterial({color:'#e4ddd0',roughness:1}),.11);
  for(const x of [-.31,.31])for(const z of [-.24,.24])cyl(.035,.11,x,.055,z,wood);
 }
 if(id==='lean-side-table'){
  main.roughness=.48;main.metalness=.12;
  box(.562,.035,.34,0,.592,0,main,.025);box(.562,.035,.34,0,.0175,0,main,.025);
  box(.035,.575,.29,-.2635,.305,0,main,.015);
  box(.36,.018,.025,-.08,.315,-.14,main,.007);box(.36,.018,.025,-.08,.315,.14,main,.007);
 }
 if(id==='tier-trolley'){
  const rail=new T.MeshStandardMaterial({color:'#8b765d',roughness:.62});
  box(.5,.045,.35,0,.14,0,main,.045);box(.5,.045,.35,0,.48,0,main,.045);
  for(const x of [-.225,.225])for(const z of [-.15,.15])cyl(.018,.43,x,.31,z,rail);
  for(const x of [-.17,.17]){const handle=cyl(.018,.12,x,.575,-.15,rail);handle.rotation.z=x<0?-.22:.22;}
  box(.34,.025,.025,0,.627,-.15,rail,.01);
  for(const x of [-.19,.19])for(const z of [-.13,.13]){
   const wheel=add(new T.CylinderGeometry(.038,.038,.022,20),dark,x,.038,z);wheel.rotation.z=Math.PI/2;
  }
 }


 const counter=new T.MeshStandardMaterial({color:'#e1ddcf',roughness:.55});
 const steel=new T.MeshStandardMaterial({color:'#a5aca9',metalness:.65,roughness:.3});
 if(id==='sink'||id==='hob'){
  const w=id==='sink'?1.2:.9;box(w,.78,.6,0,.45,0);box(w-.06,.07,.53,0,.055,0,dark);for(const x of [-w/4,w/4]){box(w/2-.014,.73,.014,x,.46,.306,main,.004);box(.15,.014,.025,x,.75,.325,steel,.004);}
  if(id==='sink'){
   // Separate countertop pieces leave a real recessed basin.
   box(.32,.05,.62,-.44,.875,0,counter,.009);box(.32,.05,.62,.44,.875,0,counter,.009);box(.56,.05,.12,0,.875,-.25,counter,.009);box(.56,.05,.12,0,.875,.25,counter,.009);
   box(.56,.025,.38,0,.73,0,steel,.01);for(const x of [-.27,.27])box(.02,.15,.4,x,.8,0,steel,.006);for(const z of [-.19,.19])box(.56,.15,.02,0,.8,z,steel,.006);
   tube([[.33,.9,-.23],[.33,1.14,-.23],[.12,1.16,-.23],[.09,1.07,-.08]],.018,steel);
  }else{
   box(w+.02,.05,.62,0,.875,0,counter,.008);box(.72,.012,.47,0,.907,0,dark,.025);
   for(const x of [-.19,.19])for(const z of [-.12,.12]){const ring=add(new T.TorusGeometry(.078,.004,8,32),steel,x,.917,z);ring.rotation.x=Math.PI/2;}
   box(.63,.37,.025,0,.42,.323,dark,.025);box(.45,.018,.04,0,.65,.347,steel,.005);
  }
 }
 if(id==='fridge'){
  main.roughness=.4;main.metalness=.25;box(.76,1.85,.72,0,.925,0,main,.025);box(.73,1.18,.035,0,1.23,.367,main,.015);box(.73,.6,.035,0,.325,.367,main,.015);for(const y of [.55,1.12])box(.023,.3,.045,-.27,y,.4,steel,.01);
 }
 if(id==='island'){
  box(1.42,.82,.65,0,.44,0,main,.02);box(1.6,.07,.8,0,.885,0,counter,.025);box(1.32,.04,.55,0,.03,0,dark);for(let i=0;i<18;i++)box(.016,.76,.025,-.66+i*.078,.45,.334,wood,.004);
 }
 if(id==='barstool'){
  cyl(.21,.07,0,.725,0,main);for(const x of [-.14,.14])for(const z of [-.14,.14])cyl(.022,.69,x,.345,z,dark);const foot=add(new T.TorusGeometry(.18,.012,8,32),dark,0,.24,0);foot.rotation.x=Math.PI/2;
 }
 if(id==='pantry'){
  box(.8,2,.45,0,1,0);for(const x of [-.2,.2]){box(.39,1.9,.016,x,1.025,.232,main,.006);box(.014,.25,.028,x<0?-.035:.035,1,.254,steel,.004);}
 }
 if(id==='tray'){
  const base=cyl(.15,.018,0,.009,0,main);base.scale.set(1.25,1,.7);
  const edge=add(new T.TorusGeometry(.146,.012,12,48),main,0,.027,0);edge.rotation.x=Math.PI/2;edge.scale.set(1.25,.7,1);
 }
 if(id==='candles'){
  const wax=new T.MeshStandardMaterial({color:'#f2e4c8',roughness:.95});
  for(let i=0;i<2;i++){const x=i? .085:-.085,h=i?.12:.2;cyl(.055,.02,x,.01,0,main);cyl(.016,h,x,h/2+.02,0,main);cyl(.036,.018,x,h+.03,0,main);cyl(.02,.12,x,h+.095,0,wax);cyl(.002,.012,x,h+.161,0,dark);}
 }
 if(id==='books'){
  const paper=new T.MeshStandardMaterial({color:'#e6dfcd',roughness:1});
  for(let i=0;i<3;i++){const cover=i===1?wood:main;const start=root.children.length;box(.29,.005,.22,0,.006+i*.03,0,cover,.002);box(.278,.022,.211,.004,.019+i*.03,0,paper,.002);box(.29,.005,.22,0,.032+i*.03,0,cover,.002);box(.006,.03,.22,-.142,.018+i*.03,0,cover,.002);const group=new T.Group();for(const m of root.children.slice(start))group.add(m);group.rotation.y=(i-1)*.11;root.add(group);}
 }
 if(id==='clock'){
  const rim=add(new T.CylinderGeometry(.12,.12,.055,48),main,0,.15,0);rim.rotation.x=Math.PI/2;
  const face=add(new T.CircleGeometry(.103,48),new T.MeshStandardMaterial({color:'#eee7d6'}),0,.15,.029);
  for(let i=0;i<12;i++){const a=i*Math.PI/6;const mark=box(.003,.012,.002,Math.sin(a)*.087,.15+Math.cos(a)*.087,.032,dark,.001);mark.rotation.z=-a;}
  const hand=box(.004,.06,.003,-.017,.17,.035,dark,.001);hand.rotation.z=.7;const minute=box(.003,.082,.003,.023,.174,.037,dark,.001);minute.rotation.z=-.75;box(.17,.03,.09,0,.015,0,main,.012);
 }
 if(id==='bonsai'){
  const pot=cyl(.12,.075,0,.04,0,main,.095);pot.scale.z=.75;cyl(.1,.006,0,.08,0,new T.MeshStandardMaterial({color:'#66503b'}));
  tube([[0,.08,0],[-.025,.2,0],[.04,.3,0],[.025,.37,0]],.014,wood);
  const leaf=new T.MeshStandardMaterial({color:'#5c7349',roughness:1});sphere(.11,.055,.085,.035,.37,0,leaf);sphere(.12,.055,.09,-.07,.27,.01,leaf);sphere(.085,.04,.07,.1,.25,0,leaf);
 }
 if(id==='frame'){
  box(.24,.32,.025,0,.16,0,main,.004);box(.211,.289,.004,0,.16,.015,new T.MeshStandardMaterial({color:'#ede4d1'}),.002);
  const disk=add(new T.CircleGeometry(.053,32),new T.MeshStandardMaterial({color:'#b97d56'}),.012,.2,.019);box(.085,.08,.003,-.019,.101,.02,new T.MeshStandardMaterial({color:'#78816a'}),.001);
  const stand=box(.03,.2,.016,0,.1,-.055,wood,.003);stand.rotation.x=-.5;
 }
 if(id==='bowl'){
  const points=[new T.Vector2(0,.02),new T.Vector2(.065,.02),new T.Vector2(.105,.04),new T.Vector2(.145,.085),new T.Vector2(.16,.12),new T.Vector2(.15,.126),new T.Vector2(.135,.09),new T.Vector2(.095,.052),new T.Vector2(.055,.034),new T.Vector2(0,.034)];add(new T.LatheGeometry(points,48),main,0,0,0);
  const fruit=new T.MeshStandardMaterial({color:'#b79845',roughness:.8});sphere(.039,.045,.037,-.045,.087,0,fruit);sphere(.037,.04,.035,.037,.084,.019,fruit);
 }
 if(id==='cushion'){
  box(.43,.43,.16,0,.215,0,main,.075);const thread=new T.MeshStandardMaterial({color:'#e0c9aa',roughness:1});for(let i=-2;i<=2;i++){box(.003,.32,.003,i*.064,.215,.081,thread,.001);box(.32,.003,.003,0,.215+i*.064,.082,thread,.001);}
 }
 if(id==='cloud'){
  for(const x of [-.43,.43]){box(.94,.36,.88,x,.34,0,main,.17);box(.96,.47,.3,x,.59,-.3,main,.14);}
  sphere(.17,.24,.4,-.78,.48,0);sphere(.17,.24,.4,.78,.48,0);
  for(const x of [-.6,.6])for(const z of [-.25,.25])cyl(.055,.16,x,.08,z,dark);
 }
 if(id==='ribbon'){
  box(.66,.14,.62,0,.4,.07,main,.065);const back=box(.68,.43,.12,0,.63,-.25,main,.055);back.rotation.x=-.2;
  for(const x of [-.34,.34])tube([[x,.04,.31],[x,.05,-.3],[x,.38,-.34],[x,.73,-.29],[x,.7,.24],[x,.42,.34]],.032,brass);
 }
 if(id==='donut'){
  cyl(.27,.2,0,.12,0,main);const ring=add(new T.TorusGeometry(.235,.115,20,48),main,0,.28,0);ring.rotation.x=Math.PI/2;sphere(.16,.04,.16,0,.29,0);
 }
 if(id==='stone'){
  main.roughness=1;cyl(.24,.065,0,.485,0,main);cyl(.14,.46,0,.23,0,main);
  const pores=new T.MeshStandardMaterial({color:'#a08c6c',roughness:1});for(let i=0;i<55;i++){const a=i*2.3999,r=.23*Math.sqrt((i+.5)/55);const dot=add(new T.CircleGeometry(.0015+(i%3)*.0009,6),pores,Math.cos(a)*r,.518,Math.sin(a)*r);dot.rotation.x=-Math.PI/2;}
 }
 if(id==='petal'){
  for(let i=0;i<3;i++){const a=i*Math.PI*2/3;sphere(.32,.045,.32,Math.sin(a)*.24,.36,Math.cos(a)*.24);cyl(.065,.32,Math.sin(a)*.26,.16,Math.cos(a)*.26,main);}
 }
 if(id==='mushroom'){
  main.roughness=.33;cyl(.105,.28,0,.14,0,main,.14);const dome=add(new T.SphereGeometry(.2,40,20,0,Math.PI*2,0,Math.PI/2),main,0,.29,0);dome.scale.y=.85;
  cyl(.194,.013,0,.29,0,new T.MeshStandardMaterial({color:'#fff0cc',emissive:'#ffd29b',emissiveIntensity:.35}));
 }
 if(id==='orb'){
  cyl(.18,.05,0,.025,0,main);cyl(.018,1.18,0,.62,0,brass);sphere(.19,.19,.19,0,1.31,0,new T.MeshStandardMaterial({color:'#f5ebd7',emissive:'#f9dba6',emissiveIntensity:.16,roughness:.6}));
 }
 if(id==='arch'){
  box(.065,1.45,.34,-.415,.725,0);box(.065,1.45,.34,.415,.725,0);
  const shape=new T.Shape();shape.absarc(0,0,.45,0,Math.PI,false);shape.lineTo(-.385,0);shape.absarc(0,0,.385,Math.PI,0,true);shape.closePath();add(new T.ExtrudeGeometry(shape,{depth:.34,bevelEnabled:false,curveSegments:32}),main,0,1.45,-.17);
  for(const y of [.06,.51,.96,1.41])box(.84,.055,.34,0,y,0,main,.012);
  const paper=new T.MeshStandardMaterial({color:'#e0d6c2'});for(let i=0;i<4;i++)box(.055,.22+i*.013,.2,-.24+i*.065,.65+i*.0065,0,i%2?paper:wood,.006);
  sphere(.105,.13,.105,.18,1.11,0,new T.MeshStandardMaterial({color:'#a97b60'}));
 }
 if(id==='wave'){
  const shape=new T.Shape();shape.moveTo(-.27,.08);shape.bezierCurveTo(-.4,.4,-.18,.65,-.31,.94);shape.bezierCurveTo(-.42,1.25,-.3,1.64,0,1.65);shape.bezierCurveTo(.38,1.68,.34,1.37,.27,1.15);shape.bezierCurveTo(.17,.85,.41,.48,.27,.08);shape.closePath();
  add(new T.ExtrudeGeometry(shape,{depth:.06,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.02,bevelThickness:.01}),main,0,0,-.03);
  const silver=new T.MeshStandardMaterial({color:'#b9c9c6',metalness:.7,roughness:.19});const glass=add(new T.ShapeGeometry(shape,40),silver,0,.075,.045);glass.scale.set(.82,.91,1);box(.4,.045,.3,0,.025,-.04,wood);
 }
 if(id==='vase'){
  const ring=add(new T.TorusGeometry(.115,.052,20,48),main,0,.21,0);ring.scale.y=1.25;cyl(.075,.065,0,.035,0,main);cyl(.04,.13,0,.355,0,main,.052);cyl(.029,.003,0,.421,0,dark);
 }
 if(id==='mobile'){
  cyl(.11,.045,0,.023,0,main);cyl(.009,.52,0,.285,0,brass);tube([[-.24,.47,0],[0,.55,0],[.24,.61,0]],.008,brass);tube([[-.12,.3,.02],[0,.36,.02],[.2,.4,.02]],.007,brass);
  sphere(.095,.06,.018,-.23,.44,0);sphere(.065,.075,.018,.23,.57,0,new T.MeshStandardMaterial({color:'#b97150'}));sphere(.075,.045,.02,.19,.37,.02);sphere(.07,.04,.02,-.12,.28,.02,new T.MeshStandardMaterial({color:'#c6b28b'}));
 }
 if(id==='screen'){
  for(let panel=0;panel<3;panel++){const x=(panel-1)*.49,angle=panel%2?-.22:.22;const group=new T.Group();root.add(group);const start=root.children.length;
   box(.48,1.65,.045,x,.85,0,main,.02);for(let i=0;i<10;i++)box(.014,1.54,.027,x-.211+i*.047,.85,.036,wood,.006);
   const parts=root.children.slice(start);parts.forEach(m=>{m.position.x-=x;group.add(m);});group.position.x=x;group.rotation.y=angle;
   for(const z of [-.13,.13])box(.07,.04,.08,x,.02,z,wood,.008);
  }
 }
 // Floor-standing pet furniture: open interiors are built from individual panels.
 if(id==='cat-tree'){
  box(.8,.06,.65,0,.03,0,main,.05);
  const rope=new T.MeshStandardMaterial({color:'#d4c4a6',roughness:1});
  for(const [x,z,h] of [[-.22,-.16,1.38],[.23,.16,.82]]){cyl(.055,h,x,.06+h/2,z,rope);for(let y=.1;y<h;y+=.07)add(new T.TorusGeometry(.056,.004,6,24),rope,x,y,z,[Math.PI/2,0,0]);}
  const rightShelf=box(.46,.045,.4,.2,.72,.13,main,.06);rightShelf.name='cat-tree-right-shelf';box(.48,.045,.42,-.19,1.03,-.12,main,.06);
  box(.48,.05,.42,-.19,1.46,-.12,main,.07);box(.4,.025,.34,-.19,1.495,-.12,new T.MeshStandardMaterial({color:'#e3d9c6',roughness:1}),.06);
  box(.38,.32,.035,.15,.23,-.19,main,.02);box(.035,.32,.38,-.022,.23,0,main,.02);box(.035,.32,.38,.322,.23,0,main,.02);const houseRoof=box(.38,.04,.4,.15,.41,0,main,.03);houseRoof.name='cat-tree-house-roof';
 }
 if(id==='cat-tree-solid'){
  const rope=new T.MeshStandardMaterial({color:'#d7c39e',roughness:1}),pad=new T.MeshStandardMaterial({color:'#d4d69a',roughness:1}),clear=new T.MeshPhysicalMaterial({color:'#d9eff2',transparent:true,opacity:.28,roughness:.12,side:T.DoubleSide});
  box(.51,.045,.4,0,.0225,0,main,.035);
  for(const [x,z,h] of [[-.14,0,1.02],[.15,.02,.77]]){cyl(.035,h,x,.045+h/2,z,rope);for(let y=.09;y<h;y+=.055)add(new T.TorusGeometry(.036,.0028,6,18),rope,x,y,z,[Math.PI/2,0,0]);}
  box(.47,.04,.32,-.02,.38,0,main,.07);box(.42,.04,.34,.02,.7,0,main,.07);cyl(.205,.04,0,.99,0,main);cyl(.18,.025,0,1.017,0,pad);
  const bowl=add(new T.SphereGeometry(.18,28,14,0,Math.PI*2,Math.PI/2,Math.PI/2),clear,-.14,.58,0);bowl.scale.y=.62;const rim=add(new T.TorusGeometry(.18,.014,10,36),main,-.14,.69,0);rim.rotation.x=Math.PI/2;
 }
 if(id==='cat-tree-macaron'){
  const pink=new T.MeshStandardMaterial({color:'#e8abc0',roughness:.95}),blue=new T.MeshStandardMaterial({color:'#91a9dc',roughness:.9}),yellow=new T.MeshStandardMaterial({color:'#e8cf72',roughness:1}),rope=new T.MeshStandardMaterial({color:'#d5c5a9',roughness:1}),darkHole=new T.MeshStandardMaterial({color:'#50526b',roughness:1});
  box(.75,.045,.7,0,.0225,0,pink,.05);box(.52,.36,.43,-.06,.22,0,blue,.11);add(new T.CircleGeometry(.13,32),darkHole,-.06,.24,.218);
  for(const [x,z,h,y] of [[-.24,.05,.48,.43],[.2,.02,.7,.4],[.22,-.08,.38,.72]])cyl(.04,h,x,y,z,rope);
  cyl(.27,.055,-.12,.47,0,yellow);cyl(.22,.045,.23,.67,.02,blue);cyl(.28,.055,0,.82,0,pink);cyl(.2,.045,-.18,1.075,0,pink);
  const clear=new T.MeshPhysicalMaterial({color:'#d9eff2',transparent:true,opacity:.3,roughness:.1,side:T.DoubleSide});const bowl=add(new T.SphereGeometry(.18,28,14,0,Math.PI*2,Math.PI/2,Math.PI/2),clear,-.31,.62,0);bowl.scale.y=.65;
 }
 if(id==='cat-tree-christmas'){
  const pink=new T.MeshStandardMaterial({color:'#eba9bf',roughness:1}),deep=new T.MeshStandardMaterial({color:'#7b394c',roughness:1}),trunk=new T.MeshStandardMaterial({color:'#6d4938',roughness:1}),gold=new T.MeshStandardMaterial({color:'#d6b14d',metalness:.35,roughness:.55});
  cyl(.09,.3,0,.15,0,trunk);for(const [r,y,h] of [[.28,.43,.38],[.235,.7,.34],[.18,.95,.3]])add(new T.ConeGeometry(r,h,32),pink,0,y,0);
  for(const y of [.48,.75]){add(new T.CircleGeometry(.105,32),deep,0,y,.235);add(new T.TorusGeometry(.11,.018,10,32),pink,0,y,.238);}
  const star=new T.Shape();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?.045:.1;(i?star.lineTo:star.moveTo).call(star,Math.cos(a)*r,Math.sin(a)*r);}star.closePath();add(new T.ExtrudeGeometry(star,{depth:.018,bevelEnabled:false}),gold,0,1.19,0);
  for(const [x,y,z] of [[-.24,.42,.04],[.21,.66,.03],[-.15,.9,.06]])sphere(.035,.035,.035,x,y,z,new T.MeshStandardMaterial({color:'#f4e9e7',roughness:1}));
 }
 if(id==='cat-tree-venus'){
  const green=new T.MeshStandardMaterial({color:'#72964c',roughness:1}),leaf=new T.MeshStandardMaterial({color:'#8aaa57',roughness:1}),red=new T.MeshStandardMaterial({color:'#a83f48',roughness:1}),inside=new T.MeshStandardMaterial({color:'#6d2532',roughness:1});
  box(.7,.055,.7,0,.0275,0,green,.08);tube([[0,.05,0],[-.03,.45,0],[.03,.85,0],[0,1.35,0]],.045,green);
  const branches=[[[-.01,.32,0],[-.28,.52,0]],[[-.01,.58,0],[.28,.78,0]],[[.01,.9,0],[-.25,1.08,0]],[[.01,1.12,0],[.23,1.28,0]]];for(const p of branches)tube(p,.035,green);
  for(const [x,y,z,s,c] of [[-.28,.54,0,.17,red],[.29,.8,0,.2,red],[-.24,1.1,0,.16,leaf],[.02,1.42,0,.23,red]]){const bed=add(new T.TorusGeometry(s,.055,14,40),c,x,y,z);bed.rotation.x=Math.PI/2;const base=sphere(s*.9,.045,s*.75,x,y,z,inside);}
  const pod=add(new T.SphereGeometry(.19,28,18),red,.3,.78,0);pod.scale.set(1,.85,.72);add(new T.CircleGeometry(.12,32),inside,.3,.8,.142);
  for(const [x,y,z,a] of [[-.17,.32,.05,-.4],[.2,.18,.02,.5],[-.19,.88,.03,-.6]]){const l=sphere(.13,.025,.065,x,y,z,leaf);l.rotation.z=a;}
 }
 if(id==='cat-barrel-lime'){
  const lime=new T.MeshStandardMaterial({color:'#b8cf63',roughness:1}),cream=new T.MeshStandardMaterial({color:'#eef0c8',roughness:1}),inside=new T.MeshStandardMaterial({color:'#46552f',roughness:1});
  box(.38,.86,.38,0,.43,0,lime,.1);for(const y of [.23,.64]){add(new T.CircleGeometry(.105,32),inside,0,y,.198);add(new T.TorusGeometry(.11,.018,10,32),lime,0,y,.201);}
  for(const [y,r] of [[.43,.09],[.84,.075]]){const slice=add(new T.CylinderGeometry(r,r,.026,32),cream,.1,y,.205);slice.rotation.x=Math.PI/2;for(let i=0;i<8;i++){const a=i*Math.PI/4;const spoke=box(.008,r*.8,.01,.1+Math.cos(a)*r*.38,y+Math.sin(a)*r*.38,.222,cream,.002);spoke.rotation.z=a;}}
  const straw=cyl(.018,.25,-.12,.96,0,cream);straw.rotation.z=-.22;sphere(.035,.055,.025,0,.56,.215,cream);
 }
 if(id==='cat-side-table'){
  box(.6,.045,.5,0,.5275,0,main,.045);box(.6,.035,.5,0,.0175,0,main,.03);
  box(.035,.48,.45,-.28,.275,0,main,.02);box(.035,.48,.45,.28,.275,0,main,.02);box(.54,.48,.025,0,.275,-.225,main,.01);
  const shape=new T.Shape();shape.moveTo(-.28,.035);shape.lineTo(.28,.035);shape.lineTo(.28,.505);shape.lineTo(-.28,.505);shape.closePath();
  const hole=new T.Path();hole.moveTo(-.17,.04);hole.lineTo(-.17,.27);hole.absarc(0,.27,.17,Math.PI,0,true);hole.lineTo(.17,.04);hole.closePath();shape.holes.push(hole);
  add(new T.ExtrudeGeometry(shape,{depth:.025,bevelEnabled:false,curveSegments:24}),main,0,0,.21);
  box(.44,.055,.36,0,.065,0,new T.MeshStandardMaterial({color:'#ddd2bf',roughness:1}),.05);
 }
 if(id==='litter-cabinet'){
  box(1,.04,.55,0,.63,0,main,.025);box(1,.04,.55,0,.07,0,main,.02);
  box(.035,.52,.51,-.482,.35,0,main,.015);box(.94,.52,.025,0,.35,-.25,main,.01);
  // Right side entrance: two uprights and a lintel leave a genuine opening.
  box(.035,.52,.085,.482,.35,-.21,main,.01);box(.035,.52,.085,.482,.35,.21,main,.01);box(.035,.15,.35,.482,.535,0,main,.01);
  for(const x of [-.24,.24]){box(.465,.5,.025,x,.35,.255,main,.012);cyl(.012,.09,x+.14,.4,.278,dark,.012).rotation.x=Math.PI/2;}
  for(const x of [-.4,.4])for(const z of [-.19,.19])cyl(.025,.05,x,.025,z,wood);
  box(.65,.06,.36,0,.13,0,new T.MeshStandardMaterial({color:'#e1d8ca',roughness:.8}),.04);
 }
 if(id==='pet-bed'){
  box(.9,.075,.65,0,.0375,0,main,.1);box(.9,.17,.12,0,.155,-.265,main,.06);box(.12,.17,.49,-.39,.155,.04,main,.06);box(.12,.17,.49,.39,.155,.04,main,.06);
  box(.67,.09,.45,0,.11,.035,new T.MeshStandardMaterial({color:'#e1d6c5',roughness:1}),.085);
 }
 if(id==='pet-feeder'){
  const top=new T.Shape();top.moveTo(-.3,-.15);top.lineTo(.3,-.15);top.lineTo(.3,.15);top.lineTo(-.3,.15);top.closePath();
  for(const x of [-.145,.145]){const hole=new T.Path();hole.absarc(x,0,.105,0,Math.PI*2,true);top.holes.push(hole);}
  const geo=new T.ExtrudeGeometry(top,{depth:.035,bevelEnabled:false,curveSegments:32});add(geo,main,0,.225,0,[-Math.PI/2,0,0]);
  box(.035,.225,.26,-.25,.1125,0,main,.015);box(.035,.225,.26,.25,.1125,0,main,.015);
  const steel=new T.MeshStandardMaterial({color:'#afb5b3',metalness:.65,roughness:.3,side:T.DoubleSide});
  for(const x of [-.145,.145]){add(new T.LatheGeometry([new T.Vector2(.025,0),new T.Vector2(.065,.005),new T.Vector2(.09,.035),new T.Vector2(.102,.075)],32),steel,x,.175,0);add(new T.TorusGeometry(.102,.005,8,32),steel,x,.25,0,[Math.PI/2,0,0]);}
 }
 if(id==='pet-bench'){
  box(1.2,.055,.45,0,.415,0,main,.035);box(1.12,.065,.4,0,.4625,0,new T.MeshStandardMaterial({color:'#d9d0bc',roughness:1}),.05);
  box(.045,.39,.4,-.56,.195,0,main,.02);box(.045,.39,.4,.56,.195,0,main,.02);box(1.08,.035,.38,0,.05,0,main,.02);
  box(.55,.055,.32,-.22,.095,0,new T.MeshStandardMaterial({color:'#9b9c86',roughness:1}),.05);box(.035,.33,.38,.17,.23,0,main,.015);
  for(let x=.23;x<.54;x+=.07)box(.025,.23,.025,x,.19,.18,wood,.008);
 }
 root.userData={catalogId:id,name:def.name,color:def.fixedColor?def.color:color||def.color,fixedColor:!!def.fixedColor};return root;
}
export function setFinish(obj,color,roughness=.88){if(obj.userData.fixedColor)return false;obj.traverse(m=>{if(m.isMesh){const mats=Array.isArray(m.material)?m.material:[m.material];mats.forEach(mat=>{if(mat.name==='finish'||obj.userData.imported){mat.color?.set(color);mat.roughness=roughness;if(mat.name==='finish'){mat.map=null;mat.bumpMap=null;mat.normalMap=null;}mat.needsUpdate=true;}});}});obj.userData.color=color;obj.userData.roughness=roughness;delete obj.userData.surface;return true;}
