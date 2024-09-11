import{La as c}from"./chunk-HPXM6RSK.js";import{c as P}from"./chunk-TXKWPME2.js";import{jc as m,lc as o}from"./chunk-X7YMANPZ.js";import{f as d,m as s,o as n}from"./chunk-EQYVU4XP.js";s();n();var i=d(P());m();var h=async(t,e,r,a)=>{try{return await a(t,{privateKey:e,hrp:r}),!0}catch{return!1}},x=async(t,e)=>{let r=[],a=c(e),{getNewAddress:f}=await o();return await Promise.all(a.map(({coinType:p,cosmosPrefix:l,baseChain:u})=>h(p,t,l,f).then(y=>{y&&r.push(u)}))),r};var v=async(t,e)=>await x(t,e),C=async(t,e)=>{let r=await v(t,e);return Boolean(r[0])};export{v as a,C as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-54QDX26E.js.map
