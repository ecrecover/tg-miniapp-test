import{cc as w,jc as g}from"./chunk-X7YMANPZ.js";import{a as d}from"./chunk-LDRI4AYU.js";import{f as a,m as k,o as p}from"./chunk-EQYVU4XP.js";k();p();var l=a(d());g();var c={},h=class{constructor(r){this.worker=null,this.processing={},this.url=r,this.setUpWorker()}onMessage(r){let{id:s,payload:o,error:t}=r.data,i=this.processing[s];delete this.processing[s];let{resolve:n,reject:u}=i;t?u(t):n(o)}onError(r){console.log(r)}setUpWorker(){this.worker||(this.worker=new Worker(this.url),this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=this.onError.bind(this))}exec(r,s=void 0){let o=s?.id||w(),t=new Promise((i,n)=>{this.processing[o]={resolve:i,reject:n}});return this.worker.postMessage({id:o,method:r,args:s}),t}},M=()=>{let e=l.default.runtime.getURL("worker.js");if(c[e])return c[e];let r=new h(e);return c[e]=r,r};export{M as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-S2GMXONU.js.map
