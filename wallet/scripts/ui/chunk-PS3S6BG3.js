import{d as p}from"./chunk-RT4Y2U5N.js";import{La as u,Ma as f,Ta as m,hb as v}from"./chunk-X7YMANPZ.js";import{b as A}from"./chunk-SF2LTPAC.js";import{f as E,m as r,n as i,o as e}from"./chunk-EQYVU4XP.js";r();e();v();r();e();var c=E(A());function g(t){return/^0x[0-9a-fA-F]{40}$/.test(t)}function l(t){try{let o=(0,c.toBech32)("one",i.Buffer.from(t.slice(2),"hex"));return o.length===42?o:t}catch{return t}}function s(t){try{let o=`0x${(0,c.fromBech32)(t)[1].toString("hex")}`;return g(o)?o:t}catch{return t}}r();e();function x(t){return/^0x[0-9a-fA-F]{40}$/.test(t)}function h(t){return x(t)?t.replace("0x","ronin:"):t}function T(t){let o=t.replace("ronin:","0x");return x(o)?o:t}var I=t=>!!p(t),w=(t,o,n={})=>{let a=typeof t=="string"&&typeof o=="string",C=n.baseCoinId||n.localType;if(!a||!C)return!1;let y=n.localType||m({coinId:n.baseCoinId})?.localType;return I(y)?t.toLowerCase()===o.toLowerCase():t===o},B=(t,o)=>o===u?T(t):o===f?s(t):t,F=(t,o)=>o===u?h(t):o===f?l(t):t;function S(t=""){return t.length<11?t:`${t.slice(0,6)}...${t.slice(-4)}`}export{w as a,B as b,F as c,S as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-PS3S6BG3.js.map
