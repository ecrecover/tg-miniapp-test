import{a as T,k as E}from"./chunk-JZYFGUUR.js";import{c as p,d,f as c}from"./chunk-ITV6J4J2.js";import{p as l,q as m}from"./chunk-4Z4GXCHB.js";import{a as L}from"./chunk-EJQOS3F4.js";import{e as i}from"./chunk-4X6ZAX3L.js";import{a as y}from"./chunk-ADZWCU3Q.js";import{f as o,m as a,o as s}from"./chunk-REC7XVZY.js";a();s();var f=o(T()),u=o(L());var C=o(y());var _=()=>{let e=(0,u.useHistory)(),t=E();return(0,C.useCallback)(async r=>{let g=await c.hasConnectedLedger(),{walletName:h}=t(r),n=`${m}?${f.default.stringify({type:i.addChain,walletId:r})}`;g?e.push(n):d.openModal(p.hardWareNotConnected,{walletName:h,onButtonClick:()=>{globalThis.platform.openExtensionInBrowser(l)},onExtButtonClick:()=>{globalThis.platform.openExtensionInBrowser(`${n}&hideBack=1`)}})},[e,t])};export{_ as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-4XGNES4Z.js.map
