import{h as T}from"./chunk-7DP5LYUM.js";import{e as C}from"./chunk-6FR2UIE7.js";import{c as y,i as g}from"./chunk-5GMHHIH5.js";import{c as u}from"./chunk-6FOZGMAL.js";import{u as A}from"./chunk-HPXM6RSK.js";import{M as s,m as N,xc as I,za as R}from"./chunk-X7YMANPZ.js";import{f as w,m as p,o as f}from"./chunk-EQYVU4XP.js";p();f();var d=w(N());R();var q=(n,h)=>{let B=T(),a=h??B,l=C(a),i=u(()=>l.find(t=>t.coinId===n?.coinId),[l,n?.coinId])?.childrenCoin??[],o=y(s,a),c=g(s,a);return u(()=>{if(!n||!A(n)||!Array.isArray(i)||!Array.isArray(o)||!o.length)return[];let t=i.filter(r=>r.coinId===+n.coinId).map(r=>({...r})),m=[],e=(0,d.cloneDeep)(t[0]||n),E=t.map(r=>c[r.addressType]);return o.forEach(({address:r,addressType:W})=>{E.includes(r)||(e.address=r,e.addressType=I[s][W],e.coinAmount=0,e.coinAmountInt=0,e.currencyAmount=0,e.currencyAmountUSD=0,m.push((0,d.cloneDeep)(e)))}),t.concat(m).filter(r=>Boolean(c[r.addressType]))},[n,i,o,c])};export{q as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-ZCMXJKLF.js.map
