import{I as E,w as o}from"./chunk-RPZQDAIQ.js";import{a as x}from"./chunk-6DDC4Y2S.js";import{f,m as a,o as i}from"./chunk-EQYVU4XP.js";a();i();var e=f(x());E();a();i();var n={root:"_root_6ynv3_1",text:"_text_6ynv3_7",red:"_red_6ynv3_12",orange:"_orange_6ynv3_15",green:"_green_6ynv3_18",grey:"_grey_6ynv3_21",divide:"_divide_6ynv3_24"};var s={ERROR:"ERROR",WEAK:"WEAK",GOOD:"GOOD",STRONG:"STRONG"},_=8,G=({password:t})=>{let[l,O]=(0,e.useState)("");(0,e.useEffect)(()=>{let r="",c=/\d/.test(t),d=/[A-Z]/.test(t),u=/[a-z]/.test(t),v=/[@$!%*?&]/.test(t),p=t&&t.length>=_&&c&&d&&u&&v,N=t&&t.length>=_&&c&&d&&u;t?p?r=s.STRONG:N?r=s.GOOD:t.length>=_?r=s.WEAK:r=s.ERROR:r="",O(r)},[t]);let g=(0,e.useCallback)(()=>{switch(l){case s.ERROR:case s.WEAK:return e.default.createElement("span",{className:n.red},o("wallet_extension_desc_password_weak"));case s.GOOD:return e.default.createElement("span",{className:n.orange},o("wallet_extension_desc_password_mid"));case s.STRONG:return e.default.createElement("span",{className:n.green},o("wallet_extension_desc_password_strong"));default:return null}},[l]),m=(0,e.useCallback)(()=>{switch(l){case s.ERROR:return e.default.createElement("div",{className:n.red},o("wallet_extension_desc_password_at_least"));case s.WEAK:case s.GOOD:case s.STRONG:return e.default.createElement("div",{className:n.grey},o("wallet_extension_desc_password_requirement"));default:return null}},[l]);return l?e.default.createElement("div",{className:n.root},e.default.createElement("div",{className:n.text},e.default.createElement(g,null),e.default.createElement("div",{className:n.divide}),e.default.createElement(m,null))):null},W=e.default.memo(G);export{_ as a,W as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-VCB5OJ3D.js.map
