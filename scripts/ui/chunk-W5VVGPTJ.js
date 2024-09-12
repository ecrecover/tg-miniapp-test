import{b as r}from"./chunk-C5ZJZEPI.js";import{m as o,o as s}from"./chunk-REC7XVZY.js";o();s();var p={CAN:"1",CANT:"0"},u={EVM:"0"},w={init:"INIT",loading:"LOADING",success:"SUCCESS",failed:"FAILED"},m=(e,t)=>e?.uniqueId===t?.uniqueId;o();s();async function d(e){try{return await(await Promise.resolve(r.rpc_networks)).set(e,{clear:!0}),!0}catch{return!1}}async function f(e){try{return await(await Promise.resolve(r.rpc_networks)).set(e),!0}catch{return!1}}async function R(e){try{return(await(await Promise.resolve(r.rpc_networks)).query(e)||[]).sort((c,n)=>c.order-n.order)}catch{return[]}}async function h(e){try{return await(await Promise.resolve(r.rpc_networks)).get(e)}catch{return{}}}async function S(e){try{return await(await Promise.resolve(r.rpc_networks)).delete(e),!0}catch{return!1}}export{p as a,u as b,w as c,m as d,d as e,f,R as g,h,S as i};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-W5VVGPTJ.js.map
