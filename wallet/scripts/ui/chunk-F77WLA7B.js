import{a as ft}from"./chunk-G2V3XEUQ.js";import{a as mt,b as gt}from"./chunk-QR2WOQMM.js";import{b as it}from"./chunk-NYT3QVML.js";import{a as O,b as ut,c as lt,d as dt,e as pt,f as xt,h as Tt,i as Et,j as _t,k as yt}from"./chunk-2P6KMQ6R.js";import{a as ct}from"./chunk-PVE3B4RU.js";import{a as at}from"./chunk-ZB7DRNAH.js";import{k as nt}from"./chunk-XE2F6LDQ.js";import{a as ot}from"./chunk-B553FNEQ.js";import{a as I}from"./chunk-7XFZKU6W.js";import{a as st,d as L}from"./chunk-35PGDXR7.js";import{e as et,g as rt}from"./chunk-VTLNAOHG.js";import{d as zt}from"./chunk-IQKWUGIV.js";import{t as tt}from"./chunk-7KCWBFQ2.js";import{w as T}from"./chunk-VMO2INN3.js";import{aa as A,k as X}from"./chunk-IUIJ46C3.js";import{e as $}from"./chunk-4PGNX6E2.js";import{c as U}from"./chunk-JXCCIV3J.js";import{Kb as Vt,cb as Y,ea as J,hb as Ht,lb as j,m as K,qb as B,rb as Q,za as Ot}from"./chunk-X7YMANPZ.js";import{c as M}from"./chunk-SOHTSUTI.js";import{I as v,w as k}from"./chunk-RPZQDAIQ.js";import{a as G}from"./chunk-6DDC4Y2S.js";import{f as g,m as i,o as c}from"./chunk-EQYVU4XP.js";i();c();var u=g(G());v();Ht();i();c();var At=g(K());v();var E=g(G());i();c();var S={root:"_root_ap48w_1",title:"_title_ap48w_1",detail:"_detail_ap48w_4",detailText:"_detailText_ap48w_7"};var Zt=({permission:t})=>{let e=(0,E.useMemo)(()=>{let r=[];try{t.forEach(({after:m})=>{m.detail.forEach(({authGrous:l})=>{l.forEach(s=>{r.push(s.address)})})})}catch{}return(0,At.uniq)(r)},[t]);return e.length?E.default.createElement(L,{className:S.root},E.default.createElement(st,{titleType:T.TYPE.danger,title:E.default.createElement(T.Text,{size:T.SIZE.xs,className:S.title},k("wallet_extension_tronsettings_title_authorize_address"))},e.map((r,m)=>E.default.createElement(U.Box,{className:S.detail},E.default.createElement(T.Text,{size:T.SIZE.sm,className:S.detailText,type:T.TYPE.secondary},k("wallet_extension_tronsettings_subtitle_addressnum",{num:m+1})),E.default.createElement(T.Text,{forceWrap:!0,size:T.SIZE.sm,className:S.detailText},r))))):null},Ft=Zt;i();c();var V=g(K());i();c();i();c();var h=g(G());Ot();async function qt(t){let e={fromAddr:t.address,scenario:X.SCENARIO_INTERACTION,inputData:t.inputData,toAddr:t.toAddr,dataLength:t.inputData.length};t.value&&(e.value=t.value);let{info:{fee:r}}=await tt({coinId:J,address:t.address},e);return r}var It=(t={},e=!1)=>{let[r,m]=(0,h.useState)("0"),[l,s]=(0,h.useState)(!0),[o,f]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{(async()=>{try{let n=await qt(t);n&&m(n),f(!1)}catch{f(!0)}finally{s(!1)}})()},[t.inputData,t.toAddr,t.address,t.coinId]),e?{error:o,trxFee:r,loading:l}:r};Vt();i();c();var H=g(zt()),vt=t=>{let e=t.params.transaction.raw_data||{contract:[{parameter:{value:{contract_address:""}}}]},r=t?.params?.transaction?.raw_data_hex||"",{data:m="",amount:l=0,to_address:s,contract_address:o,call_value:f=0}=e.contract[0].parameter.value,p=e.contract[0].type,n=f||l,d=o,x=o||s;try{d=H.default.address.fromHex(d),x=H.default.address.fromHex(x)}catch(a){console.log(a)}return{data:m,callValue:f,finalAmount:n,contractAddress:d,finalAddress:x,tronHexData:r,txType:p}},w=vt;var Kt=({coinId:t,unapproved:e,verifyGasLimitRet:r})=>{let{data:m,callValue:l,finalAmount:s,contractAddress:o}=w(e),f=I(e),{loading:p,trxFee:n=0,error:d}=It({coinId:t,address:f.address,inputData:m,toAddr:o,value:s},!0),{isOffline:x=!1}=e.params,a=rt(t,e.walletId)?.coinAmountInt,P=x||(0,V.isNil)(a)||B(a,n)&&!ut(r),y=!0;return Q(l,0)||(y=(0,V.isNil)(a)||B(j(a,n),l)),{loading:p,networkFee:n,networkFeeProps:{coinId:t,loading:p,estimateFailed:d,networkFee:p?void 0:n},isSufficientGas:P,estimateFailed:d,isSufficientBalance:y}},St=Kt;i();c();var _=g(G());var Jt=({unapproved:t})=>{let e=ot(),[r,m]=(0,_.useState)(!0),{host:l}=ct(t),s=I(t),[o,f]=(0,_.useState)({}),{data:p,finalAmount:n,finalAddress:d,tronHexData:x}=w(t),a=(0,_.useCallback)(async D=>{let{coinId:b,chainId:N}=D,W=await e({coinId:b,checkTypes:[A.VERIFY_GAS_LIMIT,A.TRON_PERMISSTION,A.KYS],amount:n,from:s.address,to:d,txType:3,domain:l,tokenAddress:d,inputData:p,chainId:N,additionalData:{tronHexData:x}});f(W),m(!1)},[n,d,p,l,e,s.address,x]),P=(0,_.useMemo)(()=>o[A.VERIFY_GAS_LIMIT]||{},[o]),y=(0,_.useMemo)(()=>o[A.TRON_PERMISSTION]||{},[o]);return{kysRet:(0,_.useMemo)(()=>({loading:r,...o[A.KYS]||{}}),[r,o]),loading:r,preExecute:a,setLoading:m,preExecuteRet:o,verifyGasLimitRet:P,tronPermisstionRet:y}},ht=Jt;var jt=(0,u.memo)(({unapproved:t,onCancel:e,onConfirm:r})=>{let{extraData:m,isOffline:l=!1}=t.params||{},s=et(Y)||{},o=s?.coinId||Y,{contractAddress:f,txType:p,data:n}=w(t),{initialType:d}=I(t),x=ht({unapproved:t,coinId:o,baseCoin:s}),{kysRet:a,preExecute:P,verifyGasLimitRet:y,tronPermisstionRet:C}=x;(0,u.useEffect)(()=>{s?.coinId&&P(s)},[s?.coinId]);let{networkFee:D,networkFeeProps:b,isSufficientGas:N,estimateFailed:W,isSufficientBalance:z,loading:wt}=St({coinId:o,unapproved:t,verifyGasLimitRet:y}),Pt=dt({unapproved:t}),Z=p==="TriggerSmartContract"&&!f,Ct=()=>Z?{type:M.TYPE.warn,message:k("wallet_extension_confirmation_toast_not_compatible")}:null,kt=()=>O(C)?{type:M.TYPE.error,message:C.msg}:null,{permissionMsg:R}=a,Dt=()=>R?{type:M.TYPE.error,message:R}:null,Nt=pt({estimateFailed:W}),Wt=xt({verifyGasLimitRet:y}),Gt=Tt({kysRet:a}),Mt=Et({kysRet:a}),Lt=_t({baseCoin:s,isSufficientGas:N}),bt=yt({isSufficientBalance:z}),Rt=gt({},{custom:[Ct,Pt,kt,Nt,Wt,Lt,bt,Dt,Gt,Mt]}),{buttonGroup:Yt,handleCancel:Bt}=ft({coinId:o,preExecuteRet:x,unapproved:t,feeLoading:wt,onCancel:e,onConfirm:r,networkFee:D,estimateFailed:W,isSufficientGas:N,isSufficientBalance:z,extParams:l?{...m,serviceCharge:D}:{},needCheckMpc:!0,chainConfirmDisabled:Z||$(d)||O(C)||lt(y)}),{permission:q}=a;return nt({kysRet:a,handleCancel:Bt,coinId:o}),u.default.createElement(mt,{kysRet:a,unapproved:t,tipMessage:Rt,buttonGroup:Yt,networkFee:b,contractAddress:f,chainTxDetailSlot:u.default.createElement(u.default.Fragment,null,R?u.default.createElement(u.default.Fragment,null,u.default.createElement(Ft,{permission:q}),u.default.createElement(it,{message:q})):null,n?u.default.createElement(L,{bordered:!1},u.default.createElement(at,{data:n,kysRet:a,copyable:{hideDesc:!0},tooltipZIndex:101})):null)})}),ar=jt;export{qt as a,ar as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-F77WLA7B.js.map
