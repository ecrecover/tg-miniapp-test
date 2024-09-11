import{c as U,m as A,o as y}from"./chunk-EQYVU4XP.js";var P=U((H,b)=>{"use strict";A();y();var v="qpzry9x8gf2tvdw0s3jn54khce6mua7l",w={};for(c=0;c<v.length;c++){if(l=v.charAt(c),w[l]!==void 0)throw new TypeError(l+" is ambiguous");w[l]=c}var l,c;function s(r){var e=r>>25;return(r&33554431)<<5^-(e>>0&1)&996825010^-(e>>1&1)&642813549^-(e>>2&1)&513874426^-(e>>3&1)&1027748829^-(e>>4&1)&705979059}function m(r){for(var e=1,o=0;o<r.length;++o){var a=r.charCodeAt(o);if(a<33||a>126)return"Invalid prefix ("+r+")";e=s(e)^a>>5}for(e=s(e),o=0;o<r.length;++o){var t=r.charCodeAt(o);e=s(e)^t&31}return e}function W(r,e,o){if(o=o||90,r.length+7+e.length>o)throw new TypeError("Exceeds length limit");r=r.toLowerCase();var a=m(r);if(typeof a=="string")throw new Error(a);for(var t=r+"1",n=0;n<e.length;++n){var f=e[n];if(f>>5!==0)throw new Error("Non 5-bit word");a=s(a)^f,t+=v.charAt(f)}for(n=0;n<6;++n)a=s(a);for(a^=1,n=0;n<6;++n){var u=a>>(5-n)*5&31;t+=v.charAt(u)}return t}function E(r,e){if(e=e||90,r.length<8)return r+" too short";if(r.length>e)return"Exceeds length limit";var o=r.toLowerCase(),a=r.toUpperCase();if(r!==o&&r!==a)return"Mixed-case string "+r;r=o;var t=r.lastIndexOf("1");if(t===-1)return"No separator character for "+r;if(t===0)return"Missing prefix for "+r;var n=r.slice(0,t),f=r.slice(t+1);if(f.length<6)return"Data too short";var u=m(n);if(typeof u=="string")return u;for(var d=[],h=0;h<f.length;++h){var p=f.charAt(h),g=w[p];if(g===void 0)return"Unknown character "+p;u=s(u)^g,!(h+6>=f.length)&&d.push(g)}return u!==1?"Invalid checksum for "+r:{prefix:n,words:d}}function k(){var r=E.apply(null,arguments);if(typeof r=="object")return r}function x(r){var e=E.apply(null,arguments);if(typeof e=="object")return e;throw new Error(e)}function i(r,e,o,a){for(var t=0,n=0,f=(1<<o)-1,u=[],d=0;d<r.length;++d)for(t=t<<e|r[d],n+=e;n>=o;)n-=o,u.push(t>>n&f);if(a)n>0&&u.push(t<<o-n&f);else{if(n>=e)return"Excess padding";if(t<<o-n&f)return"Non-zero padding"}return u}function C(r){var e=i(r,8,5,!0);if(Array.isArray(e))return e}function F(r){var e=i(r,8,5,!0);if(Array.isArray(e))return e;throw new Error(e)}function j(r){var e=i(r,5,8,!1);if(Array.isArray(e))return e}function N(r){var e=i(r,5,8,!1);if(Array.isArray(e))return e;throw new Error(e)}b.exports={decodeUnsafe:k,decode:x,encode:W,toWordsUnsafe:C,toWords:F,fromWordsUnsafe:j,fromWords:N}});export{P as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-WZLED2TE.js.map
