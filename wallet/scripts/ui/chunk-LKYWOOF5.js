import{c as ee}from"./chunk-YUXYCITH.js";import{a as $,z as H}from"./chunk-NC54RUAI.js";import{c as q,m as E,n as l,o as m}from"./chunk-EQYVU4XP.js";var z=q((xe,V)=>{"use strict";E();m();var N=$().Buffer;function te(t){if(t.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),n=0;n<e.length;n++)e[n]=255;for(var c=0;c<t.length;c++){var d=t.charAt(c),x=d.charCodeAt(0);if(e[x]!==255)throw new TypeError(d+" is ambiguous");e[x]=c}var b=t.length,I=t.charAt(0),O=Math.log(b)/Math.log(256),T=Math.log(256)/Math.log(b);function M(s){if((Array.isArray(s)||s instanceof Uint8Array)&&(s=N.from(s)),!N.isBuffer(s))throw new TypeError("Expected Buffer");if(s.length===0)return"";for(var u=0,y=0,f=0,A=s.length;f!==A&&s[f]===0;)f++,u++;for(var v=(A-f)*T+1>>>0,a=new Uint8Array(v);f!==A;){for(var g=s[f],P=0,h=v-1;(g!==0||P<y)&&h!==-1;h--,P++)g+=256*a[h]>>>0,a[h]=g%b>>>0,g=g/b>>>0;if(g!==0)throw new Error("Non-zero carry");y=P,f++}for(var p=v-y;p!==v&&a[p]===0;)p++;for(var S=I.repeat(u);p<v;++p)S+=t.charAt(a[p]);return S}function _(s){if(typeof s!="string")throw new TypeError("Expected String");if(s.length===0)return N.alloc(0);for(var u=0,y=0,f=0;s[u]===I;)y++,u++;for(var A=(s.length-u)*O+1>>>0,v=new Uint8Array(A);s[u];){var a=e[s.charCodeAt(u)];if(a===255)return;for(var g=0,P=A-1;(a!==0||g<f)&&P!==-1;P--,g++)a+=b*v[P]>>>0,v[P]=a%256>>>0,a=a/256>>>0;if(a!==0)throw new Error("Non-zero carry");f=g,u++}for(var h=A-f;h!==A&&v[h]===0;)h++;var p=N.allocUnsafe(y+(A-h));p.fill(0,0,y);for(var S=y;h!==A;)p[S++]=v[h++];return p}function D(s){var u=_(s);if(u)return u;throw new Error("Non-base"+b+" character")}return{encode:M,decodeUnsafe:_,decode:D}}V.exports=te});var R=q(C=>{"use strict";E();m();Object.defineProperty(C,"__esModule",{value:!0});C.concatArgs=C.seqEqual=void 0;function ne(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}C.seqEqual=ne;function re(t){return typeof t!="number"}function ce(...t){let e=[];return t.forEach(n=>{if(re(n))for(let c of n)e.push(c);else e.push(n)}),e}C.concatArgs=ce});var J=q(o=>{"use strict";E();m();Object.defineProperty(o,"__esModule",{value:!0});o.isValidClassicAddress=o.decodeAccountPublic=o.encodeAccountPublic=o.encodeNodePublic=o.decodeNodePublic=o.decodeAddress=o.decodeAccountID=o.encodeAddress=o.encodeAccountID=o.decodeSeed=o.encodeSeed=o.codec=void 0;var oe=z(),de=H(),j=R(),L=class{constructor(e){this._sha256=e.sha256,this._alphabet=e.alphabet,this._codec=oe(this._alphabet)}encode(e,n){let c=n.versions;return this._encodeVersioned(e,c,n.expectedLength)}decode(e,n){var c;let d=n.versions,x=n.versionTypes,b=this.decodeChecked(e);if(d.length>1&&!n.expectedLength)throw new Error("expectedLength is required because there are >= 2 possible versions");let I=typeof d[0]=="number"?1:d[0].length,O=(c=n.expectedLength)!==null&&c!==void 0?c:b.length-I,T=b.slice(0,-O),M=b.slice(-O);for(let _=0;_<d.length;_++){let D=Array.isArray(d[_])?d[_]:[d[_]];if((0,j.seqEqual)(T,D))return{version:D,bytes:M,type:x?x[_]:null}}throw new Error("version_invalid: version bytes do not match any of the provided version(s)")}encodeChecked(e){let n=this._sha256(this._sha256(e)).slice(0,4);return this._encodeRaw(l.Buffer.from((0,j.concatArgs)(e,n)))}decodeChecked(e){let n=this._decodeRaw(e);if(n.length<5)throw new Error("invalid_input_size: decoded data must have length >= 5");if(!this._verifyCheckSum(n))throw new Error("checksum_invalid");return n.slice(0,-4)}_encodeVersioned(e,n,c){if(c&&e.length!==c)throw new Error("unexpected_payload_length: bytes.length does not match expectedLength. Ensure that the bytes are a Buffer.");return this.encodeChecked(l.Buffer.from((0,j.concatArgs)(n,e)))}_encodeRaw(e){return this._codec.encode(e)}_decodeRaw(e){return this._codec.decode(e)}_verifyCheckSum(e){let n=this._sha256(this._sha256(e.slice(0,-4))).slice(0,4),c=e.slice(-4);return(0,j.seqEqual)(n,c)}},F=0,k=35,Y=33,G=28,K=[1,225,75],se={sha256(t){return de("sha256").update(l.Buffer.from(t)).digest()},alphabet:"rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"},w=new L(se);o.codec=w;function ie(t,e){if(t.length!==16)throw new Error("entropy must have length 16");let n={expectedLength:16,versions:e==="ed25519"?K:[Y]};return w.encode(t,n)}o.encodeSeed=ie;function ue(t,e={versionTypes:["ed25519","secp256k1"],versions:[K,Y],expectedLength:16}){return w.decode(t,e)}o.decodeSeed=ue;function W(t){let e={versions:[F],expectedLength:20};return w.encode(t,e)}o.encodeAccountID=W;o.encodeAddress=W;function U(t){let e={versions:[F],expectedLength:20};return w.decode(t,e).bytes}o.decodeAccountID=U;o.decodeAddress=U;function ae(t){let e={versions:[G],expectedLength:33};return w.decode(t,e).bytes}o.decodeNodePublic=ae;function le(t){let e={versions:[G],expectedLength:33};return w.encode(t,e)}o.encodeNodePublic=le;function fe(t){let e={versions:[k],expectedLength:33};return w.encode(t,e)}o.encodeAccountPublic=fe;function he(t){let e={versions:[k],expectedLength:33};return w.decode(t,e).bytes}o.decodeAccountPublic=he;function be(t){try{U(t)}catch{return!1}return!0}o.isValidClassicAddress=be});var me=q(r=>{"use strict";E();m();var Ae=r&&r.__createBinding||(Object.create?function(t,e,n,c){c===void 0&&(c=n);var d=Object.getOwnPropertyDescriptor(e,n);(!d||("get"in d?!e.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,c,d)}:function(t,e,n,c){c===void 0&&(c=n),t[c]=e[n]}),ve=r&&r.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),ge=r&&r.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&Ae(e,t,n);return ve(e,t),e};Object.defineProperty(r,"__esModule",{value:!0});r.isValidXAddress=r.decodeXAddress=r.xAddressToClassicAddress=r.encodeXAddress=r.classicAddressToXAddress=r.isValidClassicAddress=r.decodeAccountPublic=r.encodeAccountPublic=r.decodeNodePublic=r.encodeNodePublic=r.decodeAccountID=r.encodeAccountID=r.decodeSeed=r.encodeSeed=r.codec=void 0;var Q=ge(ee()),i=J();Object.defineProperty(r,"codec",{enumerable:!0,get:function(){return i.codec}});Object.defineProperty(r,"encodeSeed",{enumerable:!0,get:function(){return i.encodeSeed}});Object.defineProperty(r,"decodeSeed",{enumerable:!0,get:function(){return i.decodeSeed}});Object.defineProperty(r,"encodeAccountID",{enumerable:!0,get:function(){return i.encodeAccountID}});Object.defineProperty(r,"decodeAccountID",{enumerable:!0,get:function(){return i.decodeAccountID}});Object.defineProperty(r,"encodeNodePublic",{enumerable:!0,get:function(){return i.encodeNodePublic}});Object.defineProperty(r,"decodeNodePublic",{enumerable:!0,get:function(){return i.decodeNodePublic}});Object.defineProperty(r,"encodeAccountPublic",{enumerable:!0,get:function(){return i.encodeAccountPublic}});Object.defineProperty(r,"decodeAccountPublic",{enumerable:!0,get:function(){return i.decodeAccountPublic}});Object.defineProperty(r,"isValidClassicAddress",{enumerable:!0,get:function(){return i.isValidClassicAddress}});var X={main:l.Buffer.from([5,68]),test:l.Buffer.from([4,147])},pe=4294967295;function _e(t,e,n){let c=(0,i.decodeAccountID)(t);return Z(c,e,n)}r.classicAddressToXAddress=_e;function Z(t,e,n){if(t.length!==20)throw new Error("Account ID must be 20 bytes");if(e>pe)throw new Error("Invalid tag");let c=e||0,d=e===!1||e==null?0:1,x=l.Buffer.concat([n?X.test:X.main,t,l.Buffer.from([d,c&255,c>>8&255,c>>16&255,c>>24&255,0,0,0,0])]);return i.codec.encodeChecked(x)}r.encodeXAddress=Z;function we(t){let{accountId:e,tag:n,test:c}=B(t);return{classicAddress:(0,i.encodeAccountID)(e),tag:n,test:c}}r.xAddressToClassicAddress=we;function B(t){let e=i.codec.decodeChecked(t),n=ye(e),c=e.slice(2,22),d=Pe(e);return{accountId:c,tag:d,test:n}}r.decodeXAddress=B;function ye(t){let e=t.slice(0,2);if(X.main.equals(e))return!1;if(X.test.equals(e))return!0;throw new Error("Invalid X-address: bad prefix")}function Pe(t){let e=t[22];if(e>=2)throw new Error("Unsupported X-address");return e===1?t[23]+t[24]*256+t[25]*65536+t[26]*16777216:(Q.strictEqual(e,0,"flag must be zero to indicate no tag"),Q.ok(l.Buffer.from("0000000000000000","hex").equals(t.slice(23,23+8)),"remaining bytes must be zero"),!1)}function Ee(t){try{B(t)}catch{return!1}return!0}r.isValidXAddress=Ee});export{me as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-LKYWOOF5.js.map
