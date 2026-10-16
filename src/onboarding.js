const KEY='forma-onboarding-v1';
export function setupOnboarding(){
 const steps=[['加入第一件家具','點選左側素材庫的家具，即可加入空間；桌面也能拖入擺放。','#cards'],['換上喜歡的材質','選取家具後，在物件屬性調整顏色與木紋、織布或石材。','.swatches'],['分享你的空間','從「分享成果」下載空間圖片、平面圖或可繼續編輯的方案。','#share-results']];let index=0,target;
 const panel=document.createElement('section');panel.id='onboarding';panel.setAttribute('aria-label','首次使用引導');panel.innerHTML='<div class="tour-heading"><span id="tour-progress"></span><button id="tour-skip">略過引導</button></div><h2 id="tour-title"></h2><p id="tour-copy"></p><div class="tour-actions"><button class="btn" id="tour-back">上一步</button><button class="btn primary" id="tour-next">下一步</button></div>';document.body.append(panel);
 const $=s=>panel.querySelector(s);const remember=()=>{try{localStorage.setItem(KEY,'done');}catch{}};
 function finish(){remember();target?.classList.remove('tour-target');panel.hidden=true;}
 function show(){target?.classList.remove('tour-target');const [title,copy,selector]=steps[index];if(index===1)document.querySelector('.inspector').classList.add('mobile-open');target=document.querySelector(selector);target?.classList.add('tour-target');$('#tour-title').textContent=title;$('#tour-copy').textContent=copy;$('#tour-progress').textContent=`快速上手 · ${index+1} / 3`;$('#tour-back').disabled=index===0;$('#tour-next').textContent=index===2?'開始設計':'下一步';}
 $('#tour-skip').onclick=finish;$('#tour-back').onclick=()=>{index--;show();};$('#tour-next').onclick=()=>{if(index===2)finish();else{index++;show();}};
 document.querySelector('#help-dialog').insertAdjacentHTML('beforeend','<button class="btn" id="replay-tour">重新觀看引導</button>');document.querySelector('#replay-tour').onclick=()=>{document.querySelector('#help-dialog').close();index=0;panel.hidden=false;show();};
 let seen=false;try{seen=localStorage.getItem(KEY)==='done';}catch{}panel.hidden=seen;if(!seen){remember();show();}
}
