import{B as c,C as u}from"./chunk-FK3ETA6I.js";import{b as o}from"./chunk-C5ZJZEPI.js";import{m as l,o as n}from"./chunk-REC7XVZY.js";l();n();var i=c({name:"wallet",initialState:{avatarMap:{},currentWalletId:""},reducers:{updateAvatarMap(a,t){a.avatarMap=t.payload},updateCurrentWalletId(a,t){a.currentWalletId=t.payload}}}),{actions:v,reducer:M}=i,{updateAvatarMap:w,updateCurrentWalletId:y}=v;var f=a=>a.wallet.avatarMap,m=()=>async a=>{(await o.wallet_avatar).liveQuery().subscribe(async(s,d)=>{if(!d){let p=s.reduce((e,r)=>(e[r.walletId]=r.walletAvatar,e),{});a(w(p))}})},W=M;export{f as a,m as b,W as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-JAOKIOBW.js.map
