import{a as c}from"./chunk-H7DITLB3.js";import{c as s}from"./chunk-SOHTSUTI.js";import{I as l,w as n}from"./chunk-RPZQDAIQ.js";import{a as u}from"./chunk-6DDC4Y2S.js";import{f as p,m as o,o as r}from"./chunk-EQYVU4XP.js";o();r();l();var T=(e,t="")=>c.DEPLOY_CONTRACT===t?n("wallet_transfer_dapp_conncetion_subtitle_contracrt_deployment"):e?.contract?.[0]?.intentionTypeLanguageText||n("wallet_extension_transaction_page_title_unknown_transaction"),x=T;o();r();var _=p(u());l();var f=({loading:e,kysRet:t})=>{let a=t?.intention?.contract?.[0],i=!a||a?.supportIntentionFlag==="UNKNOWN";return(0,_.useCallback)(()=>!e&&i&&!t?.assetChange?.length?{type:s.TYPE.warn,message:n("wallet_extension_transaction_title_unknown_asset")}:null,[t?.assetChange?.length,i,e])},O=f;export{x as a,O as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-636MHS2Q.js.map
