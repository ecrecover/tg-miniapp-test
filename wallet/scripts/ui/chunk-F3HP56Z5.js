import{a as ue}from"./chunk-A77VZBWT.js";import{d as q}from"./chunk-IYL2DA3V.js";import{c as w,m as u,n as o,o as l}from"./chunk-EQYVU4XP.js";var K=w(O=>{"use strict";u();l();Object.defineProperty(O,"__esModule",{value:!0});O.validate=void 0;function le(t,e){if(!t)throw new Error(e)}O.validate=le});var F=w(S=>{"use strict";u();l();Object.defineProperty(S,"__esModule",{value:!0});S.convert=void 0;var D=K();function he(t,e,r,n){for(var s=n?Math.floor(t.length*e/r):Math.ceil(t.length*e/r),i=(1<<r)-1,c=new Uint8Array(s),h=0,g=0,d=0,B=0;B<t.length;++B){var m=t[B];for((0,D.validate)(0<=m&&m>>e===0,"Invalid value: "+m+"."),g=g<<e|m,d+=e;d>=r;)d-=r,c[h]=g>>d&i,++h}return n?(0,D.validate)(d<e&&(g<<r-d&i)===0,"Input cannot be converted to "+r+" bits without padding, but strict mode was used."):d>0&&(c[h]=g<<r-d&i,++h),c}S.convert=he});var W=w(I=>{"use strict";u();l();Object.defineProperty(I,"__esModule",{value:!0});I.decode=I.encode=void 0;var R=K(),de="qpzry9x8gf2tvdw0s3jn54khce6mua7l",G={q:0,p:1,z:2,r:3,y:4,9:5,x:6,8:7,g:8,f:9,2:10,t:11,v:12,d:13,w:14,0:15,s:16,3:17,j:18,n:19,5:20,4:21,k:22,h:23,c:24,e:25,6:26,m:27,u:28,a:29,7:30,l:31};function fe(t){for(var e="",r=0;r<t.length;++r){var n=t[r];(0,R.validate)(0<=n&&n<32,"Invalid value: "+n+"."),e+=de[n]}return e}I.encode=fe;function ve(t){for(var e=new Uint8Array(t.length),r=0;r<t.length;++r){var n=t[r];(0,R.validate)(n in G,"Invalid value: "+n+"."),e[r]=G[n]}return e}I.decode=ve});var M=w(f=>{"use strict";u();l();var ge=f&&f.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var s=Object.getOwnPropertyDescriptor(e,r);(!s||("get"in s?!e.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,s)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),be=f&&f.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),pe=f&&f.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&ge(e,t,r);return be(e,t),e};Object.defineProperty(f,"__esModule",{value:!0});f.decodeAddress=f.encodePubKeyAddress=void 0;var H=K(),Y=F(),X=pe(W()),ye=q();function we(t,e){let r=[0,0,0,0,0,0,0,0],n=$(e).concat([0]),s=0,i=Array.prototype.slice.call(ye.base.fromHex(t),0),c=(0,Y.convert)(new Uint8Array([s].concat(i)),8,5,!1),h=new Uint8Array(n.length+c.length+r.length);h.set(n),h.set(c,n.length),h.set(r,n.length+c.length);let g=_e(Q(h)),d=new Uint8Array(c.length+g.length);return d.set(c),d.set(g,c.length),"kaspa:"+X.encode(d)}f.encodePubKeyAddress=we;function Ie(t){(0,H.validate)(He(t),"Mixed case"),t=t.toLowerCase();let e=t.split(":");(0,H.validate)(e.length===2,"Invalid format: "+t);let r=e[0];(0,H.validate)(r==="kaspa","Invalid prefix: "+t);let n=e[1],s=X.decode(n);(0,H.validate)(Pe(r,s),"Invalid checksum: "+t);let i=(0,Y.convert)(s.slice(0,-8),5,8,!0),c=i[0],h=i.slice(1);c===1?(0,H.validate)(h.length*8===264,"Invalid hash size: "+t):(0,H.validate)(h.length*8===256,"Invalid hash size: "+t);let g=Ee(c);return{payload:o.Buffer.from(h),prefix:r,type:g}}f.decodeAddress=Ie;function He(t){return t===t.toLowerCase()||t===t.toUpperCase()}function $(t){let e=[];for(let r=0;r<t.length;r++)e.push(t.charCodeAt(r)&31);return e}function _e(t){let e=[];for(let r=0;r<8;++r)e.push(t&31),t/=32;return e.reverse()}function Pe(t,e){let r=$(t),n=new Uint8Array(t.length+1+e.length);return n.set(r),n.set([0],r.length),n.set(e,r.length+1),Q(n)===0}function Ee(t){switch(t&120){case 0:return"pubkey";case 8:return"scripthash";default:throw new Error("Invalid address type in version byte:"+t)}}var J=[152,121,243,174,30],me=[4072443489,3077413346,1046459332,783016616,1329849456];function Q(t){for(var e=0,r=1,n=0,s=0;s<t.length;s++){n=e>>>3,e&=7,e<<=5,e|=r>>>27,r&=134217727,r<<=5,r^=t[s];for(var i=0;i<J.length;++i)n&1<<i&&(e^=J[i],r^=me[i])}return r^=1,r<0&&(r^=1<<31,r+=(1<<30)*2),e*(1<<30)*4+r}});var T=w(v=>{"use strict";u();l();Object.defineProperty(v,"__esModule",{value:!0});v.validateAddress=v.addressFromPrvKey=v.addressFromPubKey=v.checkPrvKey=v.pubKeyFromPrvKey=void 0;var E=q(),V=M();function Z(t){if(!ee(t))throw new Error("invalid key");return E.base.toHex(E.signUtil.secp256k1.publicKeyCreate(E.base.fromHex(t.toLowerCase()),!0).slice(1))}v.pubKeyFromPrvKey=Z;function ee(t){return E.base.validateHexString(t)?E.base.fromHex(t.toLowerCase()).length==32:!1}v.checkPrvKey=ee;function te(t){return(0,V.encodePubKeyAddress)(t,"kaspa")}v.addressFromPubKey=te;function Oe(t){return te(Z(t))}v.addressFromPrvKey=Oe;function Ke(t){try{(0,V.decodeAddress)(t)}catch{return!1}return!0}v.validateAddress=Ke});var k=w(b=>{"use strict";u();l();Object.defineProperty(b,"__esModule",{value:!0});b.Transaction=b.signMessage=b.calcTxHash=b.transfer=void 0;var a=q(),Se=M(),Ae=o.Buffer.from("TransactionSigningHash"),xe=o.Buffer.from("TransactionID"),Ue=o.Buffer.from("PersonalMessageSigningHash");function Le(t,e){return _.fromTxData(t).sign(e).getMessage()}b.transfer=Le;function Be(t){let e=new p;return e.writeUInt16LE(t.version),e.writeUInt64LE(BigInt(t.inputs.length)),t.inputs.forEach(r=>{e.writeHash(a.base.fromHex(r.previousOutpoint.transactionId)),e.writeUInt32LE(r.previousOutpoint.index),e.writeVarBytes(o.Buffer.alloc(0)),e.writeUInt64LE(BigInt(r.sequence))}),e.writeUInt64LE(BigInt(t.outputs.length)),t.outputs.forEach(r=>{e.writeUInt64LE(BigInt(r.amount)),e.writeUInt16LE(r.scriptPublicKey.version),e.writeVarBytes(a.base.fromHex(r.scriptPublicKey.scriptPublicKey))}),e.writeUInt64LE(BigInt(t.lockTime)),e.writeHash(a.base.fromHex(t.subnetworkId)),e.writeUInt64LE(0n),e.writeVarBytes(o.Buffer.alloc(0)),a.base.toHex(a.base.blake2(e.toBuffer(),256,xe))}b.calcTxHash=Be;function qe(t,e){let r=a.base.blake2(o.Buffer.from(t),256,Ue),n=a.signUtil.schnorr.secp256k1.schnorr.sign(r,a.base.toHex(a.base.fromHex(e)));return a.base.toHex(n)}b.signMessage=qe;var _=class{static fromTxData(e){return new _(e)}constructor(e){this.version=0,this.inputs=[],this.outputs=[],this.lockTime="0",this.subnetworkId="0000000000000000000000000000000000000000",this.utxos=[];let r=0n;e.inputs.forEach(i=>{this.inputs.push({previousOutpoint:{transactionId:i.txId,index:i.vOut},signatureScript:"",sequence:"0",sigOpCount:1}),this.utxos.push({pkScript:j(i.address),amount:i.amount}),r+=BigInt(i.amount)});let n=0n;e.outputs.forEach(i=>{this.outputs.push({scriptPublicKey:{version:0,scriptPublicKey:a.base.toHex(j(i.address))},amount:i.amount}),n+=BigInt(i.amount)});let s=r-n-BigInt(e.fee);s>=BigInt(e.dustSize||546)&&this.outputs.push({scriptPublicKey:{version:0,scriptPublicKey:a.base.toHex(j(e.address))},amount:s.toString()})}sign(e){return this.inputs.forEach((r,n)=>{let s=je(this,re,n,{}),i=a.signUtil.schnorr.secp256k1.schnorr.sign(s,a.base.toHex(a.base.fromHex(e)));r.signatureScript=a.base.toHex(o.Buffer.concat([o.Buffer.from([65]),i,o.Buffer.from([re])]))}),this}getMessage(){return JSON.stringify({transaction:{version:this.version,inputs:this.inputs,outputs:this.outputs,lockTime:this.lockTime,subnetworkId:this.subnetworkId},allowOrphan:!1})}};b.Transaction=_;function j(t){let{payload:e}=(0,Se.decodeAddress)(t);return o.Buffer.concat([o.Buffer.from([32]),e,o.Buffer.from([172])],34)}var re=1,Me=2,Te=4,ne=128,se=7;function ie(t){return(t&se)===Me}function oe(t){return(t&se)===Te}function C(t){return(t&ne)===ne}function je(t,e,r,n={}){let s=new p;s.writeUInt16LE(t.version),s.writeHash(ke(t,e,n)),s.writeHash(ze(t,e,n)),s.writeHash(Ne(t,e,n));let i=t.inputs[r],c=t.utxos[r];return ae(s,i),s.writeUInt16LE(0),s.writeVarBytes(c.pkScript),s.writeUInt64LE(BigInt(c.amount)),s.writeUInt64LE(BigInt(i.sequence)),s.writeUInt8(1),s.writeHash(De(t,r,e,n)),s.writeUInt64LE(BigInt(t.lockTime)),s.writeHash(Ce()),s.writeUInt64LE(0n),s.writeHash(P()),s.writeUInt8(e),s.finalize()}function P(){return o.Buffer.alloc(32)}function Ce(){return o.Buffer.alloc(20)}function ke(t,e,r){if(C(e))return P();if(!r.previousOutputsHash){let n=new p;t.inputs.forEach(s=>ae(n,s)),r.previousOutputsHash=n.finalize()}return r.previousOutputsHash}function ze(t,e,r){if(oe(e)||C(e)||ie(e))return P();if(!r.sequencesHash){let n=new p;t.inputs.forEach(s=>n.writeUInt64LE(BigInt(s.sequence))),r.sequencesHash=n.finalize()}return r.sequencesHash}function Ne(t,e,r){if(C(e))return P();if(!r.sigOpCountsHash){let n=new p;t.inputs.forEach(s=>n.writeUInt8(1)),r.sigOpCountsHash=n.finalize()}return r.sigOpCountsHash}function De(t,e,r,n){if(ie(r))return P();if(oe(r))return e>=t.outputs.length?P():new p().finalize();if(!n.outputsHash){let s=new p;t.outputs.forEach(i=>Fe(s,i)),n.outputsHash=s.finalize()}return n.outputsHash}function ae(t,e){t.writeHash(a.base.fromHex(e.previousOutpoint.transactionId)),t.writeUInt32LE(e.previousOutpoint.index)}function Fe(t,e){t.writeUInt64LE(BigInt(e.amount)),t.writeUInt16LE(0),t.writeVarBytes(a.base.fromHex(e.scriptPublicKey.scriptPublicKey))}var p=class{constructor(){this.bufLen=0,this.bufs=[]}toBuffer(){return this.concat()}concat(){return o.Buffer.concat(this.bufs,this.bufLen)}write(e){return this.bufs.push(e),this.bufLen+=e.length,this}writeReverse(e){return this.bufs.push(e.reverse()),this.bufLen+=e.length,this}writeHash(e){return this.write(e),this}writeVarBytes(e){return this.writeUInt64LE(BigInt(e.length)),this.write(e),this}writeUInt8(e){let r=o.Buffer.alloc(1);return r.writeUInt8(e),this.write(r),this}writeUInt16LE(e){let r=o.Buffer.alloc(2);return r.writeUInt16LE(e),this.write(r),this}writeUInt32LE(e){let r=o.Buffer.alloc(4);return r.writeUInt32LE(e,0),this.write(r),this}writeUInt64LE(e){let r=o.Buffer.alloc(8);return r.writeBigUInt64LE(e),this.write(r),this}finalize(){return a.base.blake2(this.toBuffer(),256,Ae)}}});var ce=w(L=>{"use strict";u();l();Object.defineProperty(L,"__esModule",{value:!0});L.KaspaWallet=void 0;var A=ue(),x=T(),U=k(),z=class extends A.BaseWallet{async getDerivedPath(e){return`m/44'/111111'/0'/0/${e.index}`}async getNewAddress(e){return Promise.resolve({address:(0,x.addressFromPrvKey)(e.privateKey),publicKey:(0,x.pubKeyFromPrvKey)(e.privateKey)})}async validPrivateKey(e){let n={isValid:(0,x.checkPrvKey)(e.privateKey),privateKey:e.privateKey};return Promise.resolve(n)}async validAddress(e){return Promise.resolve({isValid:(0,x.validateAddress)(e.address),address:e.address})}async signTransaction(e){try{return Promise.resolve((0,U.transfer)(e.data,e.privateKey))}catch{return Promise.reject(A.SignTxError)}}async calcTxHash(e){try{return typeof e.data=="string"?Promise.resolve((0,U.calcTxHash)(JSON.parse(e.data).transaction)):Promise.resolve((0,U.calcTxHash)(e.data.transaction))}catch{return Promise.reject(A.CalcTxHashError)}}async signMessage(e){try{return Promise.resolve((0,U.signMessage)(e.data.message,e.privateKey))}catch{return Promise.reject(A.SignTxError)}}};L.KaspaWallet=z});var Re=w(y=>{u();l();var Ge=y&&y.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var s=Object.getOwnPropertyDescriptor(e,r);(!s||("get"in s?!e.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,s)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),N=y&&y.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Ge(e,t,r)};Object.defineProperty(y,"__esModule",{value:!0});N(ce(),y);N(T(),y);N(k(),y)});export{Re as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-F3HP56Z5.js.map
