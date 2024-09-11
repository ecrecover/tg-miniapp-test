import{a as V,b as N,c as X,d as Y}from"./chunk-GBSH5BA3.js";import{c as z,m as j,o as M}from"./chunk-EQYVU4XP.js";var t0=z(E=>{"use strict";j();M();Object.defineProperty(E,"__esModule",{value:!0});E.hmac=E.HMAC=void 0;var U=V(),Q=N(),G=class extends Q.Hash{constructor(e,l){super(),this.finished=!1,this.destroyed=!1,(0,U.hash)(e);let h=(0,Q.toBytes)(l);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let a=this.blockLen,d=new Uint8Array(a);d.set(h.length>a?e.create().update(h).digest():h);for(let c=0;c<d.length;c++)d[c]^=54;this.iHash.update(d),this.oHash=e.create();for(let c=0;c<d.length;c++)d[c]^=106;this.oHash.update(d),d.fill(0)}update(e){return(0,U.exists)(this),this.iHash.update(e),this}digestInto(e){(0,U.exists)(this),(0,U.bytes)(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:l,iHash:h,finished:a,destroyed:d,blockLen:c,outputLen:x}=this;return e=e,e.finished=a,e.destroyed=d,e.blockLen=c,e.outputLen=x,e.oHash=l._cloneInto(e.oHash),e.iHash=h._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};E.HMAC=G;var $=(o,e,l)=>new G(o,e).update(l).digest();E.hmac=$;E.hmac.create=(o,e)=>new G(o,e)});var a0=z(b=>{"use strict";j();M();Object.defineProperty(b,"__esModule",{value:!0});b.sha384=b.sha512_256=b.sha512_224=b.sha512=b.SHA512=void 0;var e0=X(),t=Y(),k=N(),[s0,h0]=(()=>t.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(o=>BigInt(o))))(),S=new Uint32Array(80),g=new Uint32Array(80),D=class extends e0.HashMD{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:l,Bh:h,Bl:a,Ch:d,Cl:c,Dh:x,Dl:r,Eh:L,El:_,Fh:i,Fl:f,Gh:n,Gl:u,Hh:H,Hl:p}=this;return[e,l,h,a,d,c,x,r,L,_,i,f,n,u,H,p]}set(e,l,h,a,d,c,x,r,L,_,i,f,n,u,H,p){this.Ah=e|0,this.Al=l|0,this.Bh=h|0,this.Bl=a|0,this.Ch=d|0,this.Cl=c|0,this.Dh=x|0,this.Dl=r|0,this.Eh=L|0,this.El=_|0,this.Fh=i|0,this.Fl=f|0,this.Gh=n|0,this.Gl=u|0,this.Hh=H|0,this.Hl=p|0}process(e,l){for(let s=0;s<16;s++,l+=4)S[s]=e.getUint32(l),g[s]=e.getUint32(l+=4);for(let s=16;s<80;s++){let C=S[s-15]|0,y=g[s-15]|0,W=t.default.rotrSH(C,y,1)^t.default.rotrSH(C,y,8)^t.default.shrSH(C,y,7),q=t.default.rotrSL(C,y,1)^t.default.rotrSL(C,y,8)^t.default.shrSL(C,y,7),A=S[s-2]|0,B=g[s-2]|0,m=t.default.rotrSH(A,B,19)^t.default.rotrBH(A,B,61)^t.default.shrSH(A,B,6),O=t.default.rotrSL(A,B,19)^t.default.rotrBL(A,B,61)^t.default.shrSL(A,B,6),I=t.default.add4L(q,O,g[s-7],g[s-16]),v=t.default.add4H(I,W,m,S[s-7],S[s-16]);S[s]=v|0,g[s]=I|0}let{Ah:h,Al:a,Bh:d,Bl:c,Ch:x,Cl:r,Dh:L,Dl:_,Eh:i,El:f,Fh:n,Fl:u,Gh:H,Gl:p,Hh:w,Hl:F}=this;for(let s=0;s<80;s++){let C=t.default.rotrSH(i,f,14)^t.default.rotrSH(i,f,18)^t.default.rotrBH(i,f,41),y=t.default.rotrSL(i,f,14)^t.default.rotrSL(i,f,18)^t.default.rotrBL(i,f,41),W=i&n^~i&H,q=f&u^~f&p,A=t.default.add5L(F,y,q,h0[s],g[s]),B=t.default.add5H(A,w,C,W,s0[s],S[s]),m=A|0,O=t.default.rotrSH(h,a,28)^t.default.rotrBH(h,a,34)^t.default.rotrBH(h,a,39),I=t.default.rotrSL(h,a,28)^t.default.rotrBL(h,a,34)^t.default.rotrBL(h,a,39),v=h&d^h&x^d&x,R=a&c^a&r^c&r;w=H|0,F=p|0,H=n|0,p=u|0,n=i|0,u=f|0,{h:i,l:f}=t.default.add(L|0,_|0,B|0,m|0),L=x|0,_=r|0,x=d|0,r=c|0,d=h|0,c=a|0;let K=t.default.add3L(m,I,R);h=t.default.add3H(K,B,O,v),a=K|0}({h,l:a}=t.default.add(this.Ah|0,this.Al|0,h|0,a|0)),{h:d,l:c}=t.default.add(this.Bh|0,this.Bl|0,d|0,c|0),{h:x,l:r}=t.default.add(this.Ch|0,this.Cl|0,x|0,r|0),{h:L,l:_}=t.default.add(this.Dh|0,this.Dl|0,L|0,_|0),{h:i,l:f}=t.default.add(this.Eh|0,this.El|0,i|0,f|0),{h:n,l:u}=t.default.add(this.Fh|0,this.Fl|0,n|0,u|0),{h:H,l:p}=t.default.add(this.Gh|0,this.Gl|0,H|0,p|0),{h:w,l:F}=t.default.add(this.Hh|0,this.Hl|0,w|0,F|0),this.set(h,a,d,c,x,r,L,_,i,f,n,u,H,p,w,F)}roundClean(){S.fill(0),g.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}};b.SHA512=D;var P=class extends D{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}},T=class extends D{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}},J=class extends D{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}};b.sha512=(0,k.wrapConstructor)(()=>new D);b.sha512_224=(0,k.wrapConstructor)(()=>new P);b.sha512_256=(0,k.wrapConstructor)(()=>new T);b.sha384=(0,k.wrapConstructor)(()=>new J)});export{t0 as a,a0 as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-LJWKNDPR.js.map
