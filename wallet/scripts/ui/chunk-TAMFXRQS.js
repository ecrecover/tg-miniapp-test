import{Ca as u,D as k}from"./chunk-FK3ETA6I.js";import{f as p,m as a,o as l}from"./chunk-REC7XVZY.js";a();l();var f=p(k());function h(e){return e.metamask.addressBookList||[]}function y(e){return e.metamask.recentlyAddresses||{}}var I=(0,f.createSelector)(u,(e,t)=>{let{selectedWallet:r,keyringIdentities:s}=e.metamask;return{selectedWallet:r,keyringIdentities:s,chainId:t}},(e,{selectedWallet:t,keyringIdentities:r,chainId:s})=>{let m=(e||[]).find(n=>+n.chainId==+s)?.localType,d=[],c="";return r.forEach(n=>{n.walletIdentities.forEach(i=>{let o=i.account[m];i.walletId===t&&(c=o),o&&d.push(o)})}),{currentAddress:c,allAddress:d}});export{h as a,y as b,I as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-TAMFXRQS.js.map
