import{a as f}from"./chunk-DGK7TBBE.js";import{b as p,d as r}from"./chunk-6FR2UIE7.js";import{a as s,c as m}from"./chunk-6FOZGMAL.js";import{Ib as i,Kb as C,jb as l}from"./chunk-X7YMANPZ.js";import{m as c,o as u}from"./chunk-EQYVU4XP.js";c();u();C();function d(n,t,e){let o={coinId:t,coinAmount:0,coinAmountInt:0,currencyAmount:0};return!Array.isArray(n)||!n?.length||(e?o=n.find(a=>+a.coinId==+t&&+a.addressType==+e)||{}:o=n.find(a=>+a.coinId==+t)||{}),o}function I(n,t){let e=r();return m(()=>d(e,n,t),[e,n,t])}var B=(n={})=>{let t=n.coinAmountInt||0;return String(t)},F=n=>{let t=I(n);return B(t)},M=(n,t)=>f(l,i)(n,10**t),x=(n,t)=>(p(n)?.coins||[]).find(b=>b.coinId===+t)||{},y=(n,t)=>{let e=x(n,t);return B(e)},D=()=>{let n=r();return s(t=>n.find(o=>o.coinId===+t)||{})},v=n=>{let t=r();return n.map(o=>t.find(a=>a.coinId===+o)||{})};export{d as a,I as b,F as c,M as d,y as e,D as f,v as g};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-3K3KMGWB.js.map
