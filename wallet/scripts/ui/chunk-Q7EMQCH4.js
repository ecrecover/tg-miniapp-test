import{a as c}from"./chunk-3OA7XW3I.js";import{c as s}from"./chunk-6MTHEPGF.js";import{I as l,w as n}from"./chunk-ZQQ7HNWV.js";import{a as u}from"./chunk-ADZWCU3Q.js";import{f as p,m as o,o as r}from"./chunk-REC7XVZY.js";o();r();l();var T=(e,t="")=>c.DEPLOY_CONTRACT===t?n("wallet_transfer_dapp_conncetion_subtitle_contracrt_deployment"):e?.contract?.[0]?.intentionTypeLanguageText||n("wallet_extension_transaction_page_title_unknown_transaction"),x=T;o();r();var _=p(u());l();var f=({loading:e,kysRet:t})=>{let a=t?.intention?.contract?.[0],i=!a||a?.supportIntentionFlag==="UNKNOWN";return(0,_.useCallback)(()=>!e&&i&&!t?.assetChange?.length?{type:s.TYPE.warn,message:n("wallet_extension_transaction_title_unknown_asset")}:null,[t?.assetChange?.length,i,e])},O=f;export{x as a,O as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-Q7EMQCH4.js.map
