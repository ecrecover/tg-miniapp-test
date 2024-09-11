import{a as T,k as E}from"./chunk-7DP5LYUM.js";import{c as p,d,f as c}from"./chunk-TBBE7OKY.js";import{p as l,q as m}from"./chunk-2MV3WEYP.js";import{a as L}from"./chunk-NJ5CWPUY.js";import{e as i}from"./chunk-XCAARJ7Q.js";import{a as y}from"./chunk-6DDC4Y2S.js";import{f as o,m as a,o as s}from"./chunk-EQYVU4XP.js";a();s();var f=o(T()),u=o(L());var C=o(y());var _=()=>{let e=(0,u.useHistory)(),t=E();return(0,C.useCallback)(async r=>{let g=await c.hasConnectedLedger(),{walletName:h}=t(r),n=`${m}?${f.default.stringify({type:i.addChain,walletId:r})}`;g?e.push(n):d.openModal(p.hardWareNotConnected,{walletName:h,onButtonClick:()=>{globalThis.platform.openExtensionInBrowser(l)},onExtButtonClick:()=>{globalThis.platform.openExtensionInBrowser(`${n}&hideBack=1`)}})},[e,t])};export{_ as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-NZNUC4OV.js.map
