import{b as s}from"./chunk-C5ZJZEPI.js";import{a as u}from"./chunk-ADZWCU3Q.js";import{f as g,m as r,o as f}from"./chunk-REC7XVZY.js";r();f();var t=g(u());var b=n=>{let[a,i]=(0,t.useState)({});return(0,t.useEffect)(()=>{let e;return(async()=>{let o=await Promise.resolve(s.extension_config),p=await o.get(n);i(p||{}),e=o.liveQuery({extensionKey:n}).subscribe((c,x)=>{!x&&c?.length&&i(c[0])})})(),()=>{e&&e?.unsubscribe()}},[n]),{extensionConfig:a,setExtensionConfig:async e=>{try{await(await Promise.resolve(s.extension_config)).set({...e,extensionKey:n})}catch{console.log("setRpcInfo fail")}}}};export{b as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-EYUJFPID.js.map
