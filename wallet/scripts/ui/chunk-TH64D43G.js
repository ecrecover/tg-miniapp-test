import{f as H}from"./chunk-2K7DYI6B.js";import{c as l}from"./chunk-4QAFBCO2.js";import{a as k}from"./chunk-5DVBM2WJ.js";import{e as R}from"./chunk-VTLNAOHG.js";import{b as _}from"./chunk-7PVSIZ6H.js";import{X as D}from"./chunk-VQBK6IHT.js";import{i as A}from"./chunk-7KCWBFQ2.js";import{a as N}from"./chunk-6FOZGMAL.js";import{m as h}from"./chunk-IUIJ46C3.js";import{b as E}from"./chunk-PS3S6BG3.js";import{b as w}from"./chunk-RIMU4JTV.js";import{Xa as O,ac as C,hb as V,jc as K,m as v,o as b,za as I}from"./chunk-X7YMANPZ.js";import{f as j,m as f,o as P}from"./chunk-EQYVU4XP.js";f();P();V();K();var a=e=>_(e)?e:C(w(e)),J=({value:e,toAddr:t,contractAddress:r})=>!r||!D(t)?"":k(t,e),U="0x0",S=({data:e,value:t,nonce:r,walletId:s,gasPrice:n,gasLimit:F,localType:o,to:i,maxFeePerGas:T,from:m,supportEip1559:d,maxPriorityFeePerGas:y,chainId:G,contractAddress:c})=>{let g=m&&E(m,o),u=i&&E(i,o),L=G||O(o)?.realChainIdHex,p=e||J({value:t,toAddr:u,contractAddress:c}),x={from:g,walletId:s,data:p,nonce:a(r),chainId:a(L),gasLimit:a(F)};return d?Object.assign(x,{type:h.FEE_MARKET,maxFeePerGas:a(T),maxPriorityFeePerGas:a(y)}):Object.assign(x,{type:h.LEGACY,gasPrice:a(n)}),c?Object.assign(x,{data:p,value:U,to:E(c,o)}):Object.assign(x,{to:u,value:a(t)}),x};var z=["low","medium","high"],B=(e={})=>z.map(t=>t==="low"?{level:t,gasPrice:e?.min,maxFeePerGas:e?.min,baseFeePerGas:e?.baseFee,maxPriorityFeePerGas:e?.safePriorityFee}:t==="medium"?{level:t,gasPrice:e?.normal,maxFeePerGas:e?.normal,baseFeePerGas:e?.baseFee,maxPriorityFeePerGas:e?.proposePriorityFee}:{level:t,gasPrice:e?.max,maxFeePerGas:e?.max,baseFeePerGas:e?.baseFee,maxPriorityFeePerGas:e?.fastPriorityFee});f();P();var M=j(v());I();var Ee=()=>N(async e=>{let{coinId:t}=e,r=S(e),n=H((0,M.pick)(r,["to","data","from","value","gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas"]));return await A({coinId:t},{inputData:n})}),Te=({coinId:e,fromAddr:t,walletId:r})=>{let s=R(e),n=s?.localType,F=l({fromAddr:t,walletId:r,localType:b});return N(async({data:o,from:i,to:T,value:m,gasPrice:d,maxFeePerGas:y,maxPriorityFeePerGas:G,needCapture:c,systemToken:g,...u})=>{let L=S({to:T,data:o,from:i,value:m,gasPrice:d,coinId:e,walletId:r,localType:n,systemToken:g,maxFeePerGas:y,maxPriorityFeePerGas:G,contractAddress:s?.address,...u}),p=await F({needCapture:c,params:L});return p.rawTxResult||p})};export{S as a,B as b,Ee as c,Te as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-TH64D43G.js.map
