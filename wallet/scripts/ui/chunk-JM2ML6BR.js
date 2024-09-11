import{a as q,b as j,c as v,d as W}from"./chunk-GBSH5BA3.js";import{c as T,m as g,o as B}from"./chunk-EQYVU4XP.js";var V=T(O=>{"use strict";g();B();Object.defineProperty(O,"__esModule",{value:!0});O.sha224=O.sha256=void 0;var F=v(),u=j(),K=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),k=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),_=new Uint32Array(64),H=class extends F.HashMD{constructor(){super(64,32,8,!1),this.A=k[0]|0,this.B=k[1]|0,this.C=k[2]|0,this.D=k[3]|0,this.E=k[4]|0,this.F=k[5]|0,this.G=k[6]|0,this.H=k[7]|0}get(){let{A:t,B:s,C:i,D:c,E:o,F:e,G:r,H:x}=this;return[t,s,i,c,o,e,r,x]}set(t,s,i,c,o,e,r,x){this.A=t|0,this.B=s|0,this.C=i|0,this.D=c|0,this.E=o|0,this.F=e|0,this.G=r|0,this.H=x|0}process(t,s){for(let a=0;a<16;a++,s+=4)_[a]=t.getUint32(s,!1);for(let a=16;a<64;a++){let w=_[a-15],d=_[a-2],E=(0,u.rotr)(w,7)^(0,u.rotr)(w,18)^w>>>3,C=(0,u.rotr)(d,17)^(0,u.rotr)(d,19)^d>>>10;_[a]=C+_[a-7]+E+_[a-16]|0}let{A:i,B:c,C:o,D:e,E:r,F:x,G:l,H:f}=this;for(let a=0;a<64;a++){let w=(0,u.rotr)(r,6)^(0,u.rotr)(r,11)^(0,u.rotr)(r,25),d=f+w+(0,F.Chi)(r,x,l)+K[a]+_[a]|0,C=((0,u.rotr)(i,2)^(0,u.rotr)(i,13)^(0,u.rotr)(i,22))+(0,F.Maj)(i,c,o)|0;f=l,l=x,x=r,r=e+d|0,e=o,o=c,c=i,i=d+C|0}i=i+this.A|0,c=c+this.B|0,o=o+this.C|0,e=e+this.D|0,r=r+this.E|0,x=x+this.F|0,l=l+this.G|0,f=f+this.H|0,this.set(i,c,o,e,r,x,l,f)}roundClean(){_.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},S=class extends H{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};O.sha256=(0,u.wrapConstructor)(()=>new H);O.sha224=(0,u.wrapConstructor)(()=>new S)});var tt=T(h=>{"use strict";g();B();Object.defineProperty(h,"__esModule",{value:!0});h.shake256=h.shake128=h.keccak_512=h.keccak_384=h.keccak_256=h.keccak_224=h.sha3_512=h.sha3_384=h.sha3_256=h.sha3_224=h.Keccak=h.keccakP=void 0;var A=q(),L=W(),b=j(),D=[],P=[],G=[],z=BigInt(0),I=BigInt(1),J=BigInt(2),N=BigInt(7),Q=BigInt(256),Y=BigInt(113);for(let n=0,t=I,s=1,i=0;n<24;n++){[s,i]=[i,(2*s+3*i)%5],D.push(2*(5*i+s)),P.push((n+1)*(n+2)/2%64);let c=z;for(let o=0;o<7;o++)t=(t<<I^(t>>N)*Y)%Q,t&J&&(c^=I<<(I<<BigInt(o))-I);G.push(c)}var[Z,$]=(0,L.split)(G,!0),m=(n,t,s)=>s>32?(0,L.rotlBH)(n,t,s):(0,L.rotlSH)(n,t,s),U=(n,t,s)=>s>32?(0,L.rotlBL)(n,t,s):(0,L.rotlSL)(n,t,s);function M(n,t=24){let s=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let e=0;e<10;e++)s[e]=n[e]^n[e+10]^n[e+20]^n[e+30]^n[e+40];for(let e=0;e<10;e+=2){let r=(e+8)%10,x=(e+2)%10,l=s[x],f=s[x+1],a=m(l,f,1)^s[r],w=U(l,f,1)^s[r+1];for(let d=0;d<50;d+=10)n[e+d]^=a,n[e+d+1]^=w}let c=n[2],o=n[3];for(let e=0;e<24;e++){let r=P[e],x=m(c,o,r),l=U(c,o,r),f=D[e];c=n[f],o=n[f+1],n[f]=x,n[f+1]=l}for(let e=0;e<50;e+=10){for(let r=0;r<10;r++)s[r]=n[e+r];for(let r=0;r<10;r++)n[e+r]^=~s[(r+2)%10]&s[(r+4)%10]}n[0]^=Z[i],n[1]^=$[i]}s.fill(0)}h.keccakP=M;var y=class extends b.Hash{constructor(t,s,i,c=!1,o=24){if(super(),this.blockLen=t,this.suffix=s,this.outputLen=i,this.enableXOF=c,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,A.number)(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,b.u32)(this.state)}keccak(){b.isLE||(0,b.byteSwap32)(this.state32),M(this.state32,this.rounds),b.isLE||(0,b.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(t){(0,A.exists)(this);let{blockLen:s,state:i}=this;t=(0,b.toBytes)(t);let c=t.length;for(let o=0;o<c;){let e=Math.min(s-this.pos,c-o);for(let r=0;r<e;r++)i[this.pos++]^=t[o++];this.pos===s&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:s,pos:i,blockLen:c}=this;t[i]^=s,(s&128)!==0&&i===c-1&&this.keccak(),t[c-1]^=128,this.keccak()}writeInto(t){(0,A.exists)(this,!1),(0,A.bytes)(t),this.finish();let s=this.state,{blockLen:i}=this;for(let c=0,o=t.length;c<o;){this.posOut>=i&&this.keccak();let e=Math.min(i-this.posOut,o-c);t.set(s.subarray(this.posOut,this.posOut+e),c),this.posOut+=e,c+=e}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return(0,A.number)(t),this.xofInto(new Uint8Array(t))}digestInto(t){if((0,A.output)(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:s,suffix:i,outputLen:c,rounds:o,enableXOF:e}=this;return t||(t=new y(s,i,c,e,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=i,t.outputLen=c,t.enableXOF=e,t.destroyed=this.destroyed,t}};h.Keccak=y;var p=(n,t,s)=>(0,b.wrapConstructor)(()=>new y(t,n,s));h.sha3_224=p(6,144,224/8);h.sha3_256=p(6,136,256/8);h.sha3_384=p(6,104,384/8);h.sha3_512=p(6,72,512/8);h.keccak_224=p(1,144,224/8);h.keccak_256=p(1,136,256/8);h.keccak_384=p(1,104,384/8);h.keccak_512=p(1,72,512/8);var X=(n,t,s)=>(0,b.wrapXOFConstructorWithOpts)((i={})=>new y(t,n,i.dkLen===void 0?s:i.dkLen,!0));h.shake128=X(31,168,128/8);h.shake256=X(31,136,256/8)});export{V as a,tt as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-JM2ML6BR.js.map
