import{M as d,X as S}from"./chunk-QO3243S4.js";import{a as c,b as x,d as n,e as m,g as l,h as b,k as s,l as C}from"./chunk-X7YMANPZ.js";import{I as E,a as g}from"./chunk-RPZQDAIQ.js";import{l as process,m as o,o as r}from"./chunk-EQYVU4XP.js";o();r();x();C();b();m();var i=l[process.env.ASSETS_BUILD_TYPE],u={countryCode:"",setCountryCode:e=>{u.countryCode=e,n.set({countryCode:e})}};(async()=>{let{countryCode:e}=await n.get("countryCode")||"";u.countryCode=e})();var _={environment:i,release:process.env.APP_VERSION,tracesSampleRate:.2,defaultIntegrations:!1,beforeSend:e=>(!e.exception||!e.exception.values||(e.tags||(e.tags={}),Array.isArray(e.exception.values)&&(e.exception.values[0].type=`${e.exception.values[0].type} ${process.env.APP_VERSION}`),e.tags.os=navigator.vendor||"Firefox",e.tags.browserName=navigator.language,e.tags.language=navigator.language,e.tags.device=navigator.product,e.tags.browser=navigator.userAgent,e.tags.environment=i,e.tags.countryCode=u.countryCode),e),hideBreadcrumb:!0,noDefaultReport:!0,sendClientReports:!1},p=`https://b25a7d61802a41b6bf564e64acff1b50@${s.getUrl()}/apmfe/120`;async function y(){{let{devid:e}=await n.get("devid");await s.setUrlFromLocalAsync(),p=`https://b25a7d61802a41b6bf564e64acff1b50@${s.getUrl()}/apmfe/120`,c.init({dsn:p,devId:e,..._})}return c}o();r();o();r();E();var R=g()?()=>{}:()=>document.body,I=g()?void 0:window.getComputedStyle;o();r();o();r();o();r();S();function A(e={},{type:f,value:a}){switch(f){case d:return{...e,current:a.messages,okdCurrent:a.okdMessages,dexCurrent:a.dexMessages};default:return e}}var ne=e=>e.localeMessages.current,se=e=>e.localeMessages.okdCurrent,ae=e=>e.localeMessages.dexCurrent;export{u as a,_ as b,p as c,y as d,A as e,ne as f,se as g,ae as h};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-XWSNF46G.js.map
