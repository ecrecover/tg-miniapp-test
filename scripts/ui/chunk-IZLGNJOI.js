import{i as I}from"./chunk-JZYFGUUR.js";import{a as h}from"./chunk-AWV3UGPG.js";import{a as T}from"./chunk-FCCCJLF6.js";import{d as N}from"./chunk-YZ3HCB4K.js";import{Fa as C,Na as g,hb as S,m as B,q as f,t as l,xa as d,za as A}from"./chunk-QG673PNL.js";import{f as x,m as o,o as n}from"./chunk-REC7XVZY.js";o();n();var r=x(B());A();o();n();S();A();var F=(s="")=>[C,g,f,l].includes(s)||N(s),u=F;var K=s=>{let i=I(s),k=h();return T(a=>{if((0,r.isEmpty)(i))return[];let{addressType:y={},account:m={}}=i,L=Object.entries(m).filter(([e])=>u(e)).map(([,e])=>e),c=[];d.forEach(e=>{let O=y?.[e]?.map(b=>b.address)||[];c.push(...O)});let w=(0,r.uniq)((0,r.union)(L,c));if((0,r.isEmpty)(a))return w;let t=k?.find(e=>e.chainId===Number(a))?.localType;if(!t||!u(t))return[];if(d.indexOf(t)>-1)return(0,r.uniq)(c);let p=m[t];return p?[p]:[]})};export{K as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-IZLGNJOI.js.map
