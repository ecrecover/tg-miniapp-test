import{Aa as N,Ba as k,R as _,S as m,T as O,U as y,V as S,W as M,X as U,m as w,o as u,u as d,x as T,y as A,z as I,za as D}from"./chunk-X7YMANPZ.js";import{a as R}from"./chunk-TEKDZ77C.js";import{f,m as E,o as p}from"./chunk-EQYVU4XP.js";E();p();var l=f(R()),e=f(w());k();D();var W=(n,r,a=[])=>{if(!n?.length)return console.warn("Not Update. New chain not validate or empty."),"NO_UPDATE";if(n.length!==r.length)return console.warn(`Update. New validate chainList amount ${n.length}  is different from ${r.length}`),"CORE_UPDATE";let o="NO_UPDATE",P=r.reduce((i,t)=>(i.set(t.coinId,t),i),new Map);for(let i=0;i<n.length;i++){let t=n[i],s=P.get(t.coinId);if(!s){console.warn(`new chain: ${t.chainName}`),o="CORE_UPDATE";break}let c={...t,localType:t.chain,providerType:t.chain},h={...s,localType:s.chain,providerType:s.chain};if(!(0,e.isEqualWith)((0,e.omit)(c,a),(0,e.omit)(h,a))){console.warn("Something different need update."),console.warn(`new chain: ${JSON.stringify(c)}`),console.warn(`old chain: ${JSON.stringify(h)}`),o="CORE_UPDATE";break}if(!(0,e.isEqualWith)((0,e.pick)(c,a),(0,e.pick)(h,a))){console.warn("Something different need update."),console.warn(`new chain: ${JSON.stringify({...t,localType:t.chain,providerType:t.chain})}`),console.warn(`old chain: ${JSON.stringify(s)}`),o="UPDATE";break}}return console.warn(`need update chain, UpdateType: ${o}`),o},V=["chain","coinId","ticker","netWorkId","chainId","rpcUrl","blockExplorerUrl"],L=["chain","coinId","netWorkId","cosmosChainId","appBaseChain","baseChain"],C=["chain","coinId","netWorkId","baseChain"],b=C,g=C,v=n=>!(n.coinType!==l.Currency.ETH||n.baseChain!==u&&n.baseChain!==T&&n.baseChain!==A||n.appBaseChain!==_.ETHEREUM||V.some(r=>(0,e.isUndefined)(n[r]))),H=n=>!(!U.includes(n.baseChain)&&(n.coinType!==l.Currency.ATOM||!n.cosmosPrefix)||L.some(r=>(0,e.isUndefined)(n[r]))),$=n=>!((0,e.isUndefined)(l.Currency[n.coinType])||C.some(r=>(0,e.isUndefined)(n[r]))||!N.has(n.chain));function x(n){return n.baseChain!==I?!1:!g.some(r=>(0,e.isUndefined)(n[r]))}function Y(n){return n.baseChain!==d?!1:!b.some(r=>(0,e.isUndefined)(n[r]))}var F=n=>({safeChainList:n.filter(a=>{switch(a?.factionType){case O:return v(a);case m:return H(a);case y:return $(a);case M:return x(a);case S:return Y(a);default:return!1}})}),q=(n=[])=>{let[r,a]=(0,e.partition)(n,"isHotNetwork"),o=(0,e.orderBy)(r,["hotNetworkRank"],["asc"]);return[o.concat(a),o,a]};export{W as a,F as b,q as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-IINHHLHP.js.map
