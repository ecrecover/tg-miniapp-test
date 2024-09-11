import{h as Fe,i as Ne}from"./chunk-T4GCTTFD.js";import{k as M}from"./chunk-2N725U3P.js";import{a as ke}from"./chunk-SCZBCO2U.js";import{a as ge,d as he}from"./chunk-UFQZJGJ2.js";import{a as Te}from"./chunk-I3U7CKFC.js";import{e as H}from"./chunk-CDLW656Z.js";import{a as le}from"./chunk-4VLUHY4K.js";import{e as _e,g as xe,k as be}from"./chunk-IHPHPUUG.js";import{a as me}from"./chunk-ZEWK7OGU.js";import{a as ue}from"./chunk-QVA4WXOQ.js";import{b as fe}from"./chunk-NHGZUGLZ.js";import{b as Pe,c as Ge,f as ye,i as Ce,m as ve,w as Ee,x as W}from"./chunk-JBYIJGSA.js";import{b as we}from"./chunk-KUI26AZJ.js";import{d as I}from"./chunk-E2XQ2FKN.js";import{b as pe,m as de}from"./chunk-DY2YURLY.js";import{D as ce}from"./chunk-QEPBNPHF.js";import{a as ae}from"./chunk-KZ2PCELG.js";import{a as re}from"./chunk-J5ANWCEO.js";import{b as ne}from"./chunk-6FOZGMAL.js";import{qb as se,y as ie}from"./chunk-HPXM6RSK.js";import{c as B}from"./chunk-JXCCIV3J.js";import{Bb as ee,Db as oe,Ib as te,Kb as z,ib as V,kb as X,vb as C,xb as G,yb as R}from"./chunk-X7YMANPZ.js";import{n as J,p as w,q as Q}from"./chunk-SOHTSUTI.js";import{I as Z,m as K,w as n}from"./chunk-RPZQDAIQ.js";import{M as j,c as Ue}from"./chunk-V4F2JFTP.js";import{a as S}from"./chunk-6DDC4Y2S.js";import{f as k,m as c,o as l}from"./chunk-EQYVU4XP.js";c();l();var v=k(S()),p=k(ie());z();c();l();z();Z();function Le(i,{symbol:t,decimals:o}={}){let s;return i=te(oe(i,o||18)),i==="0"?s="0":s=K.thousandFormat(i),t&&(s+=` ${t}`),s}function Ae(i){let t=(0,p.useSelector)(ve),o=i||t,s=o?.isSupportEip1559?o?.maxFeePerGas||0:o?.gasPrice||0,u=o?.gasLimit||0;return ge(ee,R)(s,u)}function De(i){let t=_e(),{symbol:o,usdToThisRate:s}=(0,p.useSelector)(se),u=V(t?.price,s),d=Le(i,{symbol:t?.symbol,decimals:t?.decimals}),_=he({amount:i,rate:u,symbol:o},{useApproximate:!0});return`${d} ${_}`}function co(){let i=(0,p.useDispatch)(),t=fe(),o=(0,p.useSelector)(Ge),s=(0,p.useSelector)(ye),u=(0,p.useSelector)(Ce),d=(0,p.useSelector)(Pe),{chainGasPrice:_,chainGasLimit:m,chainGasLoading:F,chainGasLoadFailed:x,stopPollingGasPrice:N,chainGasLimitLoading:b,chainGasLimitLoadFailed:g}=Ne({to:o,from:t,value:s,data:u,tokenAddress:d});return(0,v.useEffect)(()=>{i(W(_))},[_]),(0,v.useEffect)(()=>{i(W({gasLimit:m}))},[m]),{chainGasLoading:F,chainGasLoadFailed:x,stopPollingGasPrice:N,chainGasLimitLoading:b,chainGasLimitLoadFailed:g}}function lo(){let i=(0,p.useDispatch)(),{nonce:t,suggestedNonce:o,request:s}=Fe();return(0,v.useEffect)(()=>{i(Ee(o))},[t,o]),{nonce:t,suggestedNonce:o,request:s}}c();l();var e=k(S()),ze=k(Ue());Z();c();l();var $e=()=>{let i=le();return()=>globalThis.platform.openTab({url:i.rpcGasUrl})},Se=$e;z();c();l();var r={RpcEvmSendEditNetworkFee:"_RpcEvmSendEditNetworkFee_d35zb_1",rpcEvmSendEditNetworkFee:"_RpcEvmSendEditNetworkFee_d35zb_1",content:"_content_d35zb_6",title:"_title_d35zb_9","info-icon":"_info-icon_d35zb_13",infoIcon:"_info-icon_d35zb_13",box:"_box_d35zb_18",customize:"_customize_d35zb_23",money:"_money_d35zb_36",row:"_row_d35zb_39",defaultTip:"_defaultTip_d35zb_42",checkBoxWrap:"_checkBoxWrap_d35zb_48"};function Ye({onBack:i,rpcInfo:t={},customGasInfo:o={},chainGasInfo:s={},updateCustomGasInfo:u,stopPollingGasPrice:d,chainGasLimitLoadFailed:_=!1}){let{isSupportEip1559:m}=o,F=G(m?s.baseFeePerGas:s.gasPrice),[x,N]=(0,e.useState)(G(m?o.baseFeePerGas:o.gasPrice)),[b,g]=(0,e.useState)(G(o.maxPriorityFeePerGas)),[h,A]=(0,e.useState)(o.gasLimit),[D,O]=(0,e.useState)(o.isDefault),f=(0,e.useMemo)(()=>{let a={gasLimit:h,isDefault:D};return m?(a.baseFeePerGas=C(x),a.maxPriorityFeePerGas=C(b),a.maxFeePerGas=X(a.baseFeePerGas,a.maxPriorityFeePerGas)):a.gasPrice=C(x),{...o,...a}},[h,x,D,o,m,b]),Be=Ae(f),He=De(Be),{updateRpcNetwork:U}=ke(),{extensionConfig:$,setExtensionConfig:Y}=ue("rpc_info"),Ie=Se(),Me=(0,e.useMemo)(()=>{let a=!Number(f.gasPrice);return f.isSupportEip1559&&(a=!(Number(f.baseFeePerGas)&&Number(f.maxPriorityFeePerGas))),a||!Number(f.gasLimit)},[f]),We=[{actionType:H.ACTION_TYPE.CONFIRM,disabled:Me,async onClick(){let{gasLimit:a,...T}=f;if(T.isDefault){d();let P={...t,defaultGasForRpc:{[M.singleTx]:T}};await U(P),I(t,$)&&await Y(P)}u(f)}}],Oe=async a=>{let T=a.target.checked;if(T)O(T),ce();else{let P=J.tip({children:n("wallet_extension_mid_alert_checkbox_setting_uncheck"),confirmText:n("wallet_extension_btn_general_confirm"),cancelText:n("wallet_extension_btn_general_cancel"),btnFull:!1,async onConfirm(){let q={...t,defaultGasForRpc:{[M.singleTx]:null}};await U(q),I(t,$)&&await Y(q),O(T),P.destroy()},onCancel(){P.destroy()}})}};return e.default.createElement(B.Portal,null,e.default.createElement("div",{className:r.RpcEvmSendEditNetworkFee},e.default.createElement(ae,{title:n("wallet_transfer_subtitle_network_fee"),onBack:i,closeable:!1}),e.default.createElement("div",{className:r.content},e.default.createElement(w.Label,{title:e.default.createElement("div",{className:r.title},n("wallet_extension_transaction_input_label_network_fee"),e.default.createElement(j,{className:(0,ze.default)("okx-wallet-plugin-information-circle",r["info-icon"]),onClick:Ie}))}),e.default.createElement("div",{className:r.box},e.default.createElement("div",{className:r.customize},e.default.createElement("div",{className:r.title},n("wallet_transfer_gasfee_subtitle_custom_gas_fee")),e.default.createElement("div",null,e.default.createElement("div",{className:r.money},e.default.createElement(Te,{text:He,maxWidth:"215px"})))),e.default.createElement("div",{className:r.row},e.default.createElement(w.Number,{placeholder:F,title:m?n("extension_wallet_transaction_text_maxbase_fee"):n("wallet_transfer_gasfee_subtitle_gas_price"),enableMinus:!1,precision:9,value:x,onChange:N})),m?e.default.createElement("div",{className:r.row},e.default.createElement(w.Number,{placeholder:G(s.maxPriorityFeePerGas),title:n("extension_wallet_transaction_text_priority_fee"),enableMinus:!1,precision:9,value:b,onChange:g})):null,e.default.createElement("div",{className:r.row},e.default.createElement(w.Number,{placeholder:s.gasLimit,title:n("wallet_transfer_gasfee_subtitle_custom_gas_limit"),errorType:w.TIP_TYPE.always,error:_&&n("developer_mode_send_input_gaslimit_failure"),enableMinus:!1,precision:0,value:h,onChange:A}))),e.default.createElement("div",{className:r.defaultTip},n("wallet_extension_mid_checkbox_setting_default"))),e.default.createElement(re,{placeholder:!0,offsetBottom:0},e.default.createElement(B.Box,{className:r.checkBoxWrap},e.default.createElement(Q,{onChange:Oe,checked:D},n("wallet_extension_bot_alert_default_gas",{networkName:t.name}))),e.default.createElement(H,{buttonGroup:We}))))}var Uo=e.default.memo(Ye);c();l();var E=k(S()),L=k(ie());var qe={mainTokens:[],chainTokens:[]},Ke=i=>{let t=(0,E.useRef)(qe),o=(0,L.useDispatch)(),s=(0,L.useSelector)(we),u=be(),d=xe(),_=me(),m=i||_,F=()=>{let{chainTokens:x}=t.current;x.forEach(async({rpcUrl:N,chainId:b,account:g,address:h})=>{if(m!==g)return;let A=await d(h,g,h?null:await pe(N));o(de({chainId:b,account:g,address:h,balance:A}))})};(0,E.useEffect)(()=>{t.current=u},[u]),ne(()=>{s!==0&&F()},[s])},Xo=Ke;export{Le as a,Ae as b,De as c,co as d,lo as e,Uo as f,Xo as g};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-4EURYJGL.js.map
