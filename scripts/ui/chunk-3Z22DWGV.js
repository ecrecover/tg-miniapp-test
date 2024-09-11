import{a as C,b as w}from"./chunk-6UYK5TIR.js";import{b as a}from"./chunk-PS3S6BG3.js";import{a as g}from"./chunk-RIMU4JTV.js";import{c as y}from"./chunk-TXKWPME2.js";import{Ta as s,Xa as u,hb as x,m as l}from"./chunk-X7YMANPZ.js";import{f as r,m as f,o as T}from"./chunk-EQYVU4XP.js";f();T();x();var i=r(y()),c=r(C()),d=r(w());var m=r(l());var B=o=>{(0,i.isHexString)((0,m.toString)(o.chainId))&&(o.chainId=(0,m.toNumber)(g(o.chainId)));let n=s({netWorkId:o.chainId})?.baseChain,t=()=>{let b=a(o.from,n),k=a(o.to,n);return{...o,from:b,to:k,gasLimit:o.gas||o.gasLimit}},e=s({netWorkId:o.chainId})?.localType||"custom-net",h=u(e)?.networkId||"custom-net",p={chainId:o.chainId,networkId:h,name:e},I={common:c.default.custom(p,{baseChain:n,hardfork:c.Hardfork.London})};return d.TransactionFactory.fromTxData(t(),I)},E=(o,n)=>{let t=o.toJSON();t.type=o.type;let e=d.TransactionFactory.fromTxData({...t,...n},{common:o.common,freeze:Object.isFrozen(o)});return(0,i.bufferToHex)(e.serialize())};export{B as a,E as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-3Z22DWGV.js.map
