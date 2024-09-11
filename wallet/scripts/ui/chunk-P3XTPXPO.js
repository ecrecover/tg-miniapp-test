import{a as p}from"./chunk-FQWGOLDH.js";import{s as u}from"./chunk-HPXM6RSK.js";import{c as d,f as c}from"./chunk-4PGNX6E2.js";import{Tc as g,Uc as W,ba as f,ka as m,za as B}from"./chunk-X7YMANPZ.js";import{m as C,o as I}from"./chunk-EQYVU4XP.js";C();I();B();function b({coin:e,walletId:n,walletIdentityMap:o,options:l={}}){let{needFilterBaseCoin:t=!1,isKeystone:r,isMPC:s,isHardWallet:a}=l,i=o[n],F=r??d(i?.initialType),P=a??c(i?.keyringIdentityType),y=s??p(i?.keyringIdentityType);return!y&&!P?!0:t&&u(e)?!!y:F&&e.baseCoinId===f&&e.coinId===m?!1:y?!Object.values(W).includes(e.protocolId):!Object.values(g).includes(e.protocolId)}function O({coins:e=[],walletId:n,walletIdentityMap:o,options:l={}}){let t=o[n],r=d(t?.initialType),s=c(t?.keyringIdentityType),a=p(t?.keyringIdentityType);return e.filter(i=>b({coin:i,walletId:n,walletIdentityMap:o,options:{...l,isMPC:a,isHardWallet:s,isKeystone:r}}))}export{b as a,O as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-P3XTPXPO.js.map
