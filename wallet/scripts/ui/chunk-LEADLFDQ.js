import{b as I,c as f,d as u}from"./chunk-TK6JYPIW.js";import{b as w}from"./chunk-OS6E6KVM.js";import{d as g}from"./chunk-WY46TT4P.js";import{db as W}from"./chunk-HPXM6RSK.js";import{z as T}from"./chunk-IUIJ46C3.js";import{d as c,f as M}from"./chunk-MAIAJ7GD.js";import{u as S}from"./chunk-XCAARJ7Q.js";import{Ca as p,Fa as m,hb as x}from"./chunk-X7YMANPZ.js";import{m as d,o as y}from"./chunk-EQYVU4XP.js";d();y();x();M();var _=(t,n=p)=>async(e,r)=>{let a=r(),{origin:s,from:i}=t,{walletId:o}=g(a,s,i);return await f({msgData:t,baseChain:n,walletId:o}),await c().signMessage(t,n,o)},k=(t,n=p)=>async(e,r)=>{let a=r(),{origin:s,from:i}=t,{walletId:o}=g(a,s,i);return await f({msgData:t,baseChain:n,walletId:o}),await c().signPersonalMessage(t,n,o)},v=(t,n=p)=>async(e,r)=>{let a=r(),{origin:s,from:i}=t,{walletId:o}=g(a,s,i);return await I({msgData:t,baseChain:n,walletId:o}),await c().signTypedMessage(t,n,o)},G=({txData:t,txParams:n,walletId:e,isRpcMode:r=!1,baseChain:a=p})=>async(s,i)=>{let o=i();e??(e=W(o));let l=await c().getWallet(e);w(l?.initialType)&&await u({walletInfo:l,txData:t,txParams:n,isRpcMode:r,baseChain:a})};async function N(t,n,e,r,{...a}={}){let s="";r??(r=await c().getWalletIdByAddress(n,e));let i=await c().getWallet(r);try{if(w(i?.initialType))return s=await u({walletInfo:i,txParams:t,baseChain:e}),s;s=await c().signTransaction(t,n,e,r,a)}catch(o){throw o?.message===S?o:new Error(T)}return s}function L(t,n,e){return async()=>N(t,n,m,e)}function j(t,n,e,r,a){return c().signPsbt(t,n,e,r,a)}export{_ as a,k as b,v as c,G as d,N as e,L as f,j as g};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-LEADLFDQ.js.map
