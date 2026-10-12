import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
export const catalog = [
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
export const finishes=[{name:'亞麻米白',color:'#d4c8b2',roughness:1},{name:'暖灰織物',color:'#8e9188',roughness:1},{name:'焦糖皮革',color:'#ad7555',roughness:.48},{name:'森林綠',color:'#586854',roughness:.9},{name:'炭黑',color:'#3c4240',roughness:.65},{name:'霧粉',color:'#bc9590',roughness:.9}];
export function furniture(id,color){
 const root=new T.Group(); const def=catalog.find(d=>d.id===id)||catalog[0];
 const main=new T.MeshStandardMaterial({color:color||def.color,roughness:def.roughness??.86});main.name='finish';
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
 root.userData={catalogId:id,name:def.name,color:color||def.color};return root;
}
export function setFinish(obj,color,roughness=.85){obj.traverse(m=>{if(m.isMesh){const mats=Array.isArray(m.material)?m.material:[m.material];mats.forEach(mat=>{if(mat.name==='finish'||obj.userData.imported){mat.color?.set(color);mat.roughness=roughness;}});}});obj.userData.color=color;obj.userData.roughness=roughness;}
