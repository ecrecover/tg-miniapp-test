import{i as I}from"./chunk-7DP5LYUM.js";import{a as h}from"./chunk-6Y7ULJF6.js";import{a as T}from"./chunk-6FOZGMAL.js";import{d as N}from"./chunk-RT4Y2U5N.js";import{Fa as C,Na as g,hb as S,m as B,q as f,t as l,xa as d,za as A}from"./chunk-X7YMANPZ.js";import{f as x,m as o,o as n}from"./chunk-EQYVU4XP.js";o();n();var r=x(B());A();o();n();S();A();var F=(s="")=>[C,g,f,l].includes(s)||N(s),u=F;var K=s=>{let i=I(s),k=h();return T(a=>{if((0,r.isEmpty)(i))return[];let{addressType:y={},account:m={}}=i,L=Object.entries(m).filter(([e])=>u(e)).map(([,e])=>e),c=[];d.forEach(e=>{let O=y?.[e]?.map(b=>b.address)||[];c.push(...O)});let w=(0,r.uniq)((0,r.union)(L,c));if((0,r.isEmpty)(a))return w;let t=k?.find(e=>e.chainId===Number(a))?.localType;if(!t||!u(t))return[];if(d.indexOf(t)>-1)return(0,r.uniq)(c);let p=m[t];return p?[p]:[]})};export{K as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-HSXLZU4O.js.map
