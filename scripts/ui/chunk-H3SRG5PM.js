import{b as a}from"./chunk-2GMLPDYZ.js";import{b as c}from"./chunk-MGLVPWSV.js";import{A as k,b as R,f as s,i as n,l as u,u as f}from"./chunk-TXKWPME2.js";import{a as P}from"./chunk-6DDC4Y2S.js";import{f as N,m,o as w}from"./chunk-EQYVU4XP.js";m();w();var r=N(P());var l=t=>{let[D,i]=(0,r.useState)({}),e=(0,r.useMemo)(()=>{switch(t){case s:case c["ethereum-provider"]:case c["okx6963-provider"]:return s;case n:case f:return n;case u:case k:return u;default:return t}},[t]);return(0,r.useEffect)(()=>{let o;return e&&(async()=>{o=(await R.current_networks).liveQuery().subscribe(async(b,A)=>{if(!A){let E=await a(e);i(E)}});let O=await a(e);i(O)})(),()=>{o&&o?.unsubscribe()}},[e]),D};export{l as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-H3SRG5PM.js.map
