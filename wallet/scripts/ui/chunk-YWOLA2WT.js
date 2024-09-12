import{b as i}from"./chunk-C5ZJZEPI.js";import{m as s,o as a}from"./chunk-REC7XVZY.js";s();a();s();a();async function o({action:t,params:r,maxSize:n=500}){try{let g=await i.log,e=await g.get(t)||{a:t,d:[]};Array.isArray(e?.d)||(e.d=[]);let c=e.d,p={t:new Date().toLocaleString(),p:r};c.unshift(p),n&&c.splice(n),await g.set(e)}catch{console.log("set data failed")}}async function u(t){return(await i.log).query(t)}async function l(t){return(await i.log).get(t)}var L=t=>o({action:"pv",params:t}),h=t=>o({action:"pms",params:t}),A=t=>o({action:"pc",params:t}),S=t=>o({action:"dch",params:t}),b=async t=>{let n=(await l("iwe")||{a:"iwe",d:[]}).d[0]?.p?.w;return o({action:"iwe",params:{w:Array.from(new Set([...n||[],...t.w]))},maxSize:1})},P=t=>o({action:"pr",params:t,maxSize:50}),C=t=>o({action:"dth",params:t});export{u as a,L as b,h as c,A as d,S as e,b as f,P as g,C as h};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-YWOLA2WT.js.map
