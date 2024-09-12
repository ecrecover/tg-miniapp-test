import{a as C,b as w}from"./chunk-Q277JDUA.js";import{b as a}from"./chunk-KCITCUTL.js";import{a as g}from"./chunk-T2OWRX3Y.js";import{c as y}from"./chunk-C5ZJZEPI.js";import{Ta as s,Xa as u,hb as x,m as l}from"./chunk-QG673PNL.js";import{f as r,m as f,o as T}from"./chunk-REC7XVZY.js";f();T();x();var i=r(y()),c=r(C()),d=r(w());var m=r(l());var B=o=>{(0,i.isHexString)((0,m.toString)(o.chainId))&&(o.chainId=(0,m.toNumber)(g(o.chainId)));let n=s({netWorkId:o.chainId})?.baseChain,t=()=>{let b=a(o.from,n),k=a(o.to,n);return{...o,from:b,to:k,gasLimit:o.gas||o.gasLimit}},e=s({netWorkId:o.chainId})?.localType||"custom-net",h=u(e)?.networkId||"custom-net",p={chainId:o.chainId,networkId:h,name:e},I={common:c.default.custom(p,{baseChain:n,hardfork:c.Hardfork.London})};return d.TransactionFactory.fromTxData(t(),I)},E=(o,n)=>{let t=o.toJSON();t.type=o.type;let e=d.TransactionFactory.fromTxData({...t,...n},{common:o.common,freeze:Object.isFrozen(o)});return(0,i.bufferToHex)(e.serialize())};export{B as a,E as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-UHHZIQ2V.js.map
