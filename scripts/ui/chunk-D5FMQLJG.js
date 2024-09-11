import{B as i,C as m,z as c}from"./chunk-HPXM6RSK.js";import{b as o}from"./chunk-TXKWPME2.js";import{m as r,o as a}from"./chunk-EQYVU4XP.js";r();a();var S=i({name:"assetsSlice",initialState:{assets:[]},reducers:{setAssets:(e,s)=>{e.assets=s.payload}}}),{actions:l,reducer:p}=S,u=[],h=c(e=>e.assetsSlice.assets??u,e=>e.reduce((s,t)=>s.set(t.walletId,t),new Map)),y=()=>async e=>{(await o.assets).liveQuery().subscribe((t,n)=>{n||e(l.setAssets(t))})},x=p;export{h as a,y as b,x as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-D5FMQLJG.js.map
