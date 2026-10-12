// Dependency injection keeps API failures testable without a live backend.
export function createApi({base,fetcher=(...args)=>fetch(...args),storage}={}){
 const local=()=>storage||globalThis.localStorage;
 return {
  async loadCatalog(fallback){if(!base)return fallback;const r=await fetcher(`${base}/furniture`);if(!r.ok)throw new Error('商品資料讀取失敗');const data=await r.json();if(!Array.isArray(data))throw new Error('商品資料格式錯誤');return data;},
  async saveDesign(design){if(base){const r=await fetcher(`${base}/designs`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(design)});if(!r.ok)throw new Error('雲端儲存失敗');return r.json();}local().setItem('forma-design',JSON.stringify(design));return {local:true};},
  async readDesign(){if(base){const r=await fetcher(`${base}/designs/latest`);if(r.status===404)return null;if(!r.ok)throw new Error('方案讀取失敗');return r.json();}return JSON.parse(local().getItem('forma-design')||'null');}
 };
}
export const {loadCatalog,saveDesign,readDesign}=createApi({base:import.meta.env?.VITE_API_BASE_URL});
