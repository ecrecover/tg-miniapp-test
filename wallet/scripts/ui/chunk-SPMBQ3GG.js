import{B as i,C as m,z as c}from"./chunk-FK3ETA6I.js";import{b as o}from"./chunk-C5ZJZEPI.js";import{m as r,o as a}from"./chunk-REC7XVZY.js";r();a();var S=i({name:"assetsSlice",initialState:{assets:[]},reducers:{setAssets:(e,s)=>{e.assets=s.payload}}}),{actions:l,reducer:p}=S,u=[],h=c(e=>e.assetsSlice.assets??u,e=>e.reduce((s,t)=>s.set(t.walletId,t),new Map)),y=()=>async e=>{(await o.assets).liveQuery().subscribe((t,n)=>{n||e(l.setAssets(t))})},x=p;export{h as a,y as b,x as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-SPMBQ3GG.js.map
