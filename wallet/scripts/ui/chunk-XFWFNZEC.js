import{a as p}from"./chunk-SCZBCO2U.js";import{d}from"./chunk-E2XQ2FKN.js";import{d as a}from"./chunk-6HXVFU7V.js";import{y as v}from"./chunk-HPXM6RSK.js";import{G as r,n as m}from"./chunk-SOHTSUTI.js";import{I as g,w as e}from"./chunk-RPZQDAIQ.js";import{Y as o}from"./chunk-V4F2JFTP.js";import{a as x}from"./chunk-6DDC4Y2S.js";import{f as s,m as _,o as c}from"./chunk-EQYVU4XP.js";_();c();var f=s(x()),t=s(v());g();function S(){let w=(0,t.useDispatch)(),{currentNetworkUniqueId:n}=(0,t.useSelector)(a),{deleteRpcNetwork:u}=p();return(0,f.useCallback)(({editRpcInfo:l,onDeleted:i})=>{if(d(l,{uniqueId:n})){r.error({title:e("developer_mode_network_toast_cannot_delete"),top:16});return}let k=m.warn({title:e("extension_wallet_network_modaltitle_delete_confirm"),text:e("extension_wallet_network_modaldesc_delete_confirm"),confirmText:e("extension_wallet_network_text_remove_network"),confirmBtnProps:{type:o.TYPE.red,size:o.SIZE.lg},cancelText:e("developer_mode_network_btn_botcancel"),alignBottom:!1,onConfirm:async()=>{await u(l),r.success(e("developer_mode_network_toast_delete_done")),k.destroy(),i&&i()}})},[w,n])}export{S as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-XFWFNZEC.js.map
