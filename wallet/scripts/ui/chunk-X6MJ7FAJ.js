import{f as p,g as M}from"./chunk-FTJCOLFJ.js";import{Xb as u,Yb as D,m as v}from"./chunk-QG673PNL.js";import{a as E}from"./chunk-ADZWCU3Q.js";import{f as d,l as process,m as c,o as g}from"./chunk-REC7XVZY.js";c();g();M();var e=d(E()),f=d(v());D();var S=(t,a={})=>{let[s,w]=(0,e.useState)(null),[T,y]=(0,e.useState)(null),[o,b]=(0,e.useState)(a);return(0,e.useEffect)(()=>{(0,f.isEqual)(a,o)||b(a)},[a]),(0,e.useEffect)(()=>{let r=document.getElementById("sandbox"),l,i=n=>{n.data.chanel===t&&y(n.data)},m=n=>{n.data.status===201&&(window.removeEventListener("message",m),clearInterval(l),window.addEventListener("message",i),w(r))};return l=setInterval(()=>{r.contentWindow?.postMessage({status:200,buildType:process.env.ASSETS_BUILD_TYPE,cdn:p(),browser:u()},"*")},1e3),window.addEventListener("message",m),()=>{window.removeEventListener("message",i)}},[]),(0,e.useEffect)(()=>{t&&s&&s.contentWindow?.postMessage({chanel:t,data:o},"*")},[t,s,o]),T};export{S as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-X6MJ7FAJ.js.map
