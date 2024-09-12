import{h as C}from"./chunk-JZYFGUUR.js";import{e as y}from"./chunk-MYLTZKPJ.js";import{c as A,h as T}from"./chunk-RAK5MQVM.js";import{c}from"./chunk-FCCCJLF6.js";import{t as f}from"./chunk-FK3ETA6I.js";import{m as b,xc as I}from"./chunk-QG673PNL.js";import{f as w,m as p,o as m}from"./chunk-REC7XVZY.js";p();m();var i=w(b());var q=(e,g)=>{let B=C(),s=g??B,d=y(s),a=c(()=>d.find(t=>t.coinId===e?.coinId),[d,e?.coinId])?.childrenCoin??[],o=A(e?.localType,s),l=T(e?.localType,s);return c(()=>{if(!e||!f(e)||!Array.isArray(a)||!Array.isArray(o)||!o.length)return[];let t=a.filter(r=>r.coinId===+e.coinId).map(r=>({...r})),u=[],n=(0,i.cloneDeep)(t[0]||e),h=t.map(r=>l[r.addressType]);return o.forEach(({address:r,addressType:W})=>{h.includes(r)||(n.address=r,n.addressType=I[e.localType][W],n.coinAmount=0,n.coinAmountInt=0,n.currencyAmount=0,u.push((0,i.cloneDeep)(n)))}),t.concat(u).filter(r=>Boolean(l[r.addressType]))},[e,a,o,l])};export{q as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-XFTOQRZM.js.map
