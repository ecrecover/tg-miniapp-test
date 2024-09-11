import{d as o,f as A}from"./chunk-MAIAJ7GD.js";import{b as c,c as y}from"./chunk-AOA7NX2Y.js";import{g as a,j as n,m as x}from"./chunk-HXZH2DHB.js";import{m as s,o as u}from"./chunk-EQYVU4XP.js";s();u();x();y();A();var l=async(t={})=>{let{data:e}=await a(c.queryAccountExist,t);return e},q=async t=>{let{data:e}=await a(c.queryAccountInfo,t);return e},w=async(t,e)=>{let r=await o().getSignRequestHeaders({walletId:e});return await n(c.createWaxAccount,t,{headers:r})||{}},g=async(t,e)=>{let r=await o().getSignRequestHeaders({walletId:e});return await n(c.createFreeWaxAccount,t,{headers:r})||{}},W=async t=>{let{data:e}=await a(c.queryAccountStatus,t);return e||{}},h=async t=>{let{data:e}=await a(c.checkAccountPattern,t);return e??!1};export{l as a,q as b,w as c,g as d,W as e,h as f};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-TNL4ZLYC.js.map
