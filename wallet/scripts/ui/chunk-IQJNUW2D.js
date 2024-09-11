import{c as g}from"./chunk-DY2YURLY.js";import{B as y,C as F}from"./chunk-HPXM6RSK.js";import{Wa as b,hb as D,m as T}from"./chunk-X7YMANPZ.js";import{c as v,f as N,m as U,o as x}from"./chunk-EQYVU4XP.js";var H=v((pr,C)=>{U();x();(function(r){"use strict";r.exports.is_uri=e,r.exports.is_http_uri=n,r.exports.is_https_uri=o,r.exports.is_web_uri=h,r.exports.isUri=e,r.exports.isHttpUri=n,r.exports.isHttpsUri=o,r.exports.isWebUri=h;var t=function(i){var l=i.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);return l};function e(i){if(!!i&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(i)&&!/%[^0-9a-f]/i.test(i)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(i)){var l=[],a="",p="",s="",m="",f="",c="";if(l=t(i),a=l[1],p=l[2],s=l[3],m=l[4],f=l[5],!!(a&&a.length&&s.length>=0)){if(p&&p.length){if(!(s.length===0||/^\//.test(s)))return}else if(/^\/\//.test(s))return;if(!!/^[a-z][a-z0-9\+\-\.]*$/.test(a.toLowerCase()))return c+=a+":",p&&p.length&&(c+="//"+p),c+=s,m&&m.length&&(c+="?"+m),f&&f.length&&(c+="#"+f),c}}}function n(i,l){if(!!e(i)){var a=[],p="",s="",m="",f="",c="",E="",u="";if(a=t(i),p=a[1],s=a[2],m=a[3],c=a[4],E=a[5],!!p){if(l){if(p.toLowerCase()!="https")return}else if(p.toLowerCase()!="http")return;if(!!s)return/:(\d+)$/.test(s)&&(f=s.match(/:(\d+)$/)[0],s=s.replace(/:\d+$/,"")),u+=p+":",u+="//"+s,f&&(u+=f),u+=m,c&&c.length&&(u+="?"+c),E&&E.length&&(u+="#"+E),u}}}function o(i){return n(i,!0)}function h(i){return n(i)||o(i)}})(C)});U();x();var I=N(T());var d=g("form"),_={name:"",nameErr:"",rpcUrl:"",rpcUrlErr:"",chainId:"",chainIdErr:"",chainIdTip:"",symbol:"",symbolErr:"",symbolTip:"",explorerUrl:"",explorerUrlErr:"",fieldUpdated:!1},$=y({name:d,initialState:_,reducers:{setName:(r,{payload:t})=>{r.name=t,r.fieldUpdated=!0},setNameErr:(r,{payload:t})=>{r.nameErr=t},setRpcUrl:(r,{payload:t})=>{r.rpcUrl=t,r.fieldUpdated=!0},setRpcUrlErr:(r,{payload:t})=>{r.rpcUrlErr=t},setChainId:(r,{payload:t})=>{r.chainId=t,r.fieldUpdated=!0},setChainIdErr:(r,{payload:t})=>{let{chainId:e}=r,{validChainId:n,err:o}=t;e===n&&(r.chainIdErr=o)},setChainIdTip:(r,{payload:t})=>{let{chainId:e}=r,{validChainId:n,tip:o}=t;e===n&&(r.chainIdTip=o)},setSymbol:(r,{payload:t})=>{r.symbol=t,r.fieldUpdated=!0},setSymbolErr:(r,{payload:t})=>{r.symbolErr=t},setSymbolTip:(r,{payload:t})=>{r.symbolTip=t},setExplorerUrl:(r,{payload:t})=>{r.explorerUrl=t,r.fieldUpdated=!0},setExplorerUrlErr:(r,{payload:t})=>{r.explorerUrlErr=t},updateFormData:(r,{payload:t})=>{(0,I.forEach)(t,(e,n)=>{r[n]=e})},resetFormData:r=>{(0,I.forEach)(_,(t,e)=>{r[e]=t})}}}),A=r=>{let{name:t,nameErr:e}=r[d];return{name:t,nameErr:e}},L=r=>{let{rpcUrl:t,rpcUrlErr:e}=r[d];return{rpcUrl:t,rpcUrlErr:e}},M=r=>{let{chainId:t,chainIdErr:e,chainIdTip:n,fieldUpdated:o}=r[d];return{chainId:t,chainIdErr:e,chainIdTip:n,fieldUpdated:o}},B=r=>{let{symbol:t,symbolErr:e,symbolTip:n,fieldUpdated:o}=r[d];return{symbol:t,symbolErr:e,symbolTip:n,fieldUpdated:o}},P=r=>{let{explorerUrl:t,explorerUrlErr:e}=r[d];return{explorerUrl:t,explorerUrlErr:e}},W=r=>{let{name:t,rpcUrl:e,symbol:n,chainId:o,explorerUrl:h,uniqueId:i}=r[d];return{name:t,rpcUrl:e,symbol:n,chainId:o,explorerUrl:h,uniqueId:i}},X=r=>{let{name:t,rpcUrl:e,symbol:n,chainId:o,nameErr:h,rpcUrlErr:i,symbolErr:l,chainIdErr:a,fieldUpdated:p,explorerUrlErr:s}=r[d];return!!(!t||!e||!n||!o||h||i||l||a||s||!p)},{actions:w,reducer:R}=$,{setName:j,setNameErr:k,setRpcUrl:G,setRpcUrlErr:J,setChainId:K,setChainIdErr:O,setChainIdTip:Q,setSymbol:V,setSymbolErr:Y,setSymbolTip:Z,setExplorerUrl:rr,setExplorerUrlErr:tr,updateFormData:er,resetFormData:ir}=w,nr=R;U();x();D();function dr(r){return Number.isSafeInteger(r)&&r>0&&r<=b}function mr(r){return typeof r!="string"?!1:/^0x[1-9a-f]+[0-9a-f]*$/iu.test(r)}export{d as a,A as b,L as c,M as d,B as e,P as f,W as g,X as h,j as i,k as j,G as k,J as l,K as m,O as n,Q as o,V as p,Y as q,Z as r,rr as s,tr as t,er as u,ir as v,nr as w,H as x,dr as y,mr as z};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-IQJNUW2D.js.map
