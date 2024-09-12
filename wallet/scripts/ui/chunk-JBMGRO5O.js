import{b as u}from"./chunk-7G3IOU2S.js";import{c as a}from"./chunk-FOB36UC7.js";import{y as R}from"./chunk-FK3ETA6I.js";import{a as N}from"./chunk-MNNY2ODL.js";import{m as B}from"./chunk-QG673PNL.js";import{a as h}from"./chunk-ADZWCU3Q.js";import{f as r,m as s,o as m}from"./chunk-REC7XVZY.js";s();m();var e=r(h()),f=r(R()),i=r(B()),p=r(N());var d=20*1e3,y=()=>{let b=(0,f.useDispatch)(),c=u(),o=(0,e.useRef)(null);(0,e.useEffect)(()=>{let l=()=>{clearInterval(o.current),o.current=null},n=async()=>{try{let t=await c();if((0,i.isEmpty)(t)){l();return}let k=await(0,p.default)(t.eth.getBlockNumber)();b(a(k))}catch(t){console.log(`fetch block failed 
${t}`)}};return n(),o.current=setInterval(()=>{n()},d),()=>{l()}},[c])},w=y;export{w as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-JBMGRO5O.js.map
