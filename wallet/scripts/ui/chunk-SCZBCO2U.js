import{b as R,i as h}from"./chunk-E2XQ2FKN.js";import{b as f}from"./chunk-RIMU4JTV.js";import{b as n}from"./chunk-TXKWPME2.js";import{b as l,c as P}from"./chunk-AOA7NX2Y.js";import{g as k,m as q}from"./chunk-HXZH2DHB.js";import{cc as y,jc as x}from"./chunk-X7YMANPZ.js";import{a as g}from"./chunk-6DDC4Y2S.js";import{f as v,m as d,o as m}from"./chunk-EQYVU4XP.js";d();m();var a=v(g());x();P();q();var T=i=>{let s={...i};return s?.chainId.startsWith("0x")||(s.chainId=`0x${f(s.chainId)}`),s},G=()=>{let[i,s]=(0,a.useState)({rpcNetworks:[],customNets:[],defaultNets:[]}),u=async e=>{let t=e,o=Number.parseInt(t.chainId,16);try{let{data:r}=await k(l.getRpcNetworkByChainId,{chainIds:[o]});if(Array.isArray(r)){let c=r.find(p=>p.chainId===o);t.faucetUrl=c?.faucets?.[0]||""}}catch{t.faucetUrl=""}return t},w=e=>{let t=e.filter(r=>r.isCustom),o=e.filter(r=>!r.isCustom).sort((r,c)=>r.order-c.order);return{rpcNetworks:[...o,...t],customNets:t,defaultNets:o}},I=async e=>{try{let t=await Promise.resolve(n.rpc_networks),o={...e,uniqueId:e.uniqueId||y(),type:R.EVM,isCustom:!0},r=await u(T(o));return await t.set(r),r}catch{return{}}},C=async e=>{try{let t=await Promise.resolve(n.rpc_networks),o=await u(T(e));return await t.get(e.uniqueId)&&await t.set(o),o}catch{return{}}},N=async e=>{try{let o=await(await Promise.resolve(n.rpc_networks)).query(e);return w(o)}catch{return{rpcNetworks:[],customNets:[],defaultNets:[]}}},b=async e=>{try{await h(e.uniqueId)}catch(t){console.log(t)}};return(0,a.useEffect)(()=>{let e;return(async()=>{let t=await N({});s(t),e=(await Promise.resolve(n.rpc_networks)).liveQuery().subscribe((r,c)=>{if(!c){let p=w(r);s(p)}})})(),()=>{e&&e?.unsubscribe()}},[]),{addRpcNetwork:I,updateRpcNetwork:C,getRpcNetworks:N,deleteRpcNetwork:b,...i}};export{G as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-SCZBCO2U.js.map
