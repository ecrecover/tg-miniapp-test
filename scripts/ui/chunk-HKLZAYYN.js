import{g as K}from"./chunk-VCAWL4NW.js";import{p as u,q as h}from"./chunk-4X6ZAX3L.js";import{lc as m,m as T,o as A,q as d,za as B}from"./chunk-QG673PNL.js";import{a as P}from"./chunk-TBVIGR5T.js";import{f as l,m as f,o as g}from"./chunk-REC7XVZY.js";f();g();var b=l(P());B();var w=l(T());var C=(o,t)=>async(a,e,c)=>{let r=`0/${a}`,{extendedPublicKey:s}=(0,w.find)(c,{path:t})||{},{hardwareDerivePubKey:i,getAddressByPublicKey:p}=await m(),n=await i(s,r),y=await p(b.Currency.BTC,{publicKey:n,addressType:K[o]});e[d][o]={path:`${t}/${r}`,publicKey:n,address:y}},N=async(o,t,a)=>{t[d]={};for(let e=0;e<h.length;e++){let{type:c,basePath:r}=h[e];await C(c,r)(o,t,a)}},D=(o,t)=>async(a,e,c)=>{let r=t+a,{extendedPublicKey:s}=(0,w.find)(c,{path:u})||{},{hardwareDerivePubKey:i,getAddressByPublicKey:p}=await m(),n=await i(s,r),y=await p(b.Currency.ETH,{publicKey:n});e[A][o]={path:`${u}/${r}`,address:y}};export{N as a,D as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-HKLZAYYN.js.map
