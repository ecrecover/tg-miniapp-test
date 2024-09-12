import{c as i}from"./chunk-7BFUGHAL.js";import{d as s,f as n}from"./chunk-MNNY2ODL.js";import{F as o}from"./chunk-6MTHEPGF.js";import{m as a,o as d}from"./chunk-REC7XVZY.js";a();d();n();async function y(e){try{return await s().addAddressBook(e)}catch(r){throw r?.message!==i&&o.error({title:r?.message}),r}}async function p(e,r){try{return await s().updateAddressBook(e,r)}catch(t){return o.error({title:t?.message}),t}}async function A(e){try{return await s().removeAddressBook(e)}catch(r){throw o.error({title:r?.message}),r}}async function g(e,r){try{return await s().addRecentlyAddress(e,r)}catch(t){return o.error({title:t?.message}),t}}export{y as a,p as b,A as c,g as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-H2MP374E.js.map
