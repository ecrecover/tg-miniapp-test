import{m as a,o as i}from"./chunk-EQYVU4XP.js";a();i();function r(n){return n instanceof Uint8Array?n:Uint8Array.from(Object.values(n))}function o(n){return n.signDoc?(n.signDoc.bodyBytes&&(n.signDoc.bodyBytes=r(n.signDoc.bodyBytes)),n.signDoc.authInfoBytes&&(n.signDoc.authInfoBytes=r(n.signDoc.authInfoBytes)),n):n.tx?(!n.tx.signatures&&n.tx[0]&&(n.tx=r(n.tx)),n):(n.data&&(n.data=typeof n.data=="string"?n.data:r(n.data)),n)}export{r as a,o as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-CABO2JBZ.js.map
