import{I as u,m as c}from"./chunk-RPZQDAIQ.js";import{m as o,o as l}from"./chunk-EQYVU4XP.js";o();l();u();var s=(e,r=2,i="")=>{if(!e)return`${i}${c.ceilShort("0.00",2)}`;let n=c.ceilShort(e,r);return`${i}${n}`},m=e=>{if(e){let r="",i=new c.BigNumber(`${e.price??0}`);if(i.lt(1e-4))r=`< ${c.ceilShort("0.0001",4)}`;else{let n=i.toFixed(4),t=new c.BigNumber(`${n}`);t.eq(t.toFixed(0,1))?r=s(t.toString()):r=s(e.price,Math.min(t.decimalPlaces(),4))}return{currency:e.currency,currencyUrl:e.currencyUrl,price:e.price,priceDisplay:r,usdPrice:e.usdPrice}}return null};export{s as a,m as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-REOQ3O2A.js.map
