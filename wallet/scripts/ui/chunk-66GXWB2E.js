import{a as c}from"./chunk-OR3IMHNP.js";import{a as u}from"./chunk-FCCCJLF6.js";import{aa as r}from"./chunk-QZDHFNHK.js";import{Kb as E,rb as m}from"./chunk-QG673PNL.js";import{I as h,w as o}from"./chunk-ZQQ7HNWV.js";import{m as s,o as n}from"./chunk-REC7XVZY.js";s();n();h();E();function w(){let l=c();return u(async({from:L,chainId:f,simulateTransactionParam:p={},...T})=>{let e=(await l({checkTypes:[r.TX_ANALYZE],from:L,chainId:f,bizLine:6,simulateTransactionParamList:[{sigVerify:!1,replaceRecentBlockhash:!0,...p}],...T}))?.[r.TX_ANALYZE]||{},[a]=e.simulateTransactionResultList||[],i=(e.simulateTransactionResultList||[]).find(t=>t?.msg||m(t?.unitGasLimit,"0"));if(i?.msg)throw new Error(i?.msg);if(!a||!!i)throw new Error(o("wallet_extension_alert_estimate_unavailable"));return{firstUnitLimit:a?.unitGasLimit,unitLimits:(e.simulateTransactionResultList||[]).map(t=>t?.unitGasLimit)}})}var F=w;export{F as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-66GXWB2E.js.map
