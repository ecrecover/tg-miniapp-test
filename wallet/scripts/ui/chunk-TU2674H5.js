import{b as a}from"./chunk-DJZDNU23.js";import{b as c}from"./chunk-C3FJ2D4V.js";import{A as k,b as R,f as s,i as n,l as u,u as f}from"./chunk-C5ZJZEPI.js";import{a as P}from"./chunk-ADZWCU3Q.js";import{f as N,m,o as w}from"./chunk-REC7XVZY.js";m();w();var r=N(P());var l=t=>{let[D,i]=(0,r.useState)({}),e=(0,r.useMemo)(()=>{switch(t){case s:case c["ethereum-provider"]:case c["okx6963-provider"]:return s;case n:case f:return n;case u:case k:return u;default:return t}},[t]);return(0,r.useEffect)(()=>{let o;return e&&(async()=>{o=(await R.current_networks).liveQuery().subscribe(async(b,A)=>{if(!A){let E=await a(e);i(E)}});let O=await a(e);i(O)})(),()=>{o&&o?.unsubscribe()}},[e]),D};export{l as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-TU2674H5.js.map
