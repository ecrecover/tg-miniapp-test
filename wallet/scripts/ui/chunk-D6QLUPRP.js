import{o as So}from"./chunk-T4GCTTFD.js";import{a as Mo}from"./chunk-4T2UKPH7.js";import{a as Ao}from"./chunk-XQL7T4TZ.js";import{a as Po}from"./chunk-SCZBCO2U.js";import{a as ho,b as ko}from"./chunk-NYT3QVML.js";import{h as bo}from"./chunk-2P6KMQ6R.js";import{a as A}from"./chunk-PVE3B4RU.js";import{i as xo,j as Eo,k as Et}from"./chunk-XE2F6LDQ.js";import{c as Co,d as Y}from"./chunk-Q4CU3DV4.js";import{a as M}from"./chunk-DSYZP5KR.js";import{a as wt}from"./chunk-B553FNEQ.js";import{a as Io}from"./chunk-7XFZKU6W.js";import{a as I,c as wo,d,e as it,g as O}from"./chunk-35PGDXR7.js";import{e as u}from"./chunk-CDLW656Z.js";import{b as xt}from"./chunk-5EZVDCYS.js";import{a as To}from"./chunk-IHPHPUUG.js";import{d as yo}from"./chunk-ZPFBKNRM.js";import{b as uo}from"./chunk-ADKEXOTG.js";import{f as mo,g as po,h as co,i as lo,j as fo,k as Tt}from"./chunk-5NXPDYL5.js";import{h as io,i as no,j as ao,k as so,l as gt}from"./chunk-LQAOHG2H.js";import{a as _o}from"./chunk-6Y7ULJF6.js";import{a as ro}from"./chunk-WY46TT4P.js";import{c as eo}from"./chunk-MTMUCMTY.js";import{e as Ct,f as go}from"./chunk-S6N4IJX7.js";import{a as G}from"./chunk-KZ2PCELG.js";import{b as Gt}from"./chunk-C7ZG4INB.js";import{a as W}from"./chunk-J5ANWCEO.js";import{o as Xt,v as Qt,w as h}from"./chunk-VMO2INN3.js";import{o as oo}from"./chunk-6FOZGMAL.js";import{Ub as to,Wa as rt,db as $t,jb as Rt,y as q}from"./chunk-HPXM6RSK.js";import{aa as et}from"./chunk-IUIJ46C3.js";import{l as E,p as dt}from"./chunk-UMJMJOW4.js";import{d as Vt,f as fe}from"./chunk-MAIAJ7GD.js";import{a as yt}from"./chunk-RIMU4JTV.js";import{f as Jt,i as qt}from"./chunk-MGLVPWSV.js";import{c as ue}from"./chunk-TXKWPME2.js";import{c as y}from"./chunk-JXCCIV3J.js";import{Ca as ut,Tb as w,Wb as _t,aa as ft,hb as le,m as Dt,za as Zt}from"./chunk-X7YMANPZ.js";import{F as Wt,c as R,d as jt,n as Lt}from"./chunk-SOHTSUTI.js";import{I as P,w as r}from"./chunk-RPZQDAIQ.js";import{M as Ut,Y as T,c as Kt}from"./chunk-V4F2JFTP.js";import{a as x}from"./chunk-6DDC4Y2S.js";import{f as l,m as a,n as f,o as s}from"./chunk-EQYVU4XP.js";a();s();var Bt=l(x());_t();a();s();var j=l(x()),Do=l(q()),Lo=l(ue()),Wo=l(Dt());P();_t();Zt();a();s();var No=l(q()),_e=()=>{let t=(0,No.useSelector)(rt);return _o().find(e=>e.localType===t.type)||{}},S=_e;a();s();var Yt=l(q());dt();_t();a();s();var st=l(q());le();var K=(t,o)=>{let e=(0,st.useSelector)(Rt),n=(0,st.useSelector)(eo),i=(0,st.useSelector)($t),m=g=>({...g,address:o}),p=(0,st.useSelector)(to);if(n[t]?.includes(i)&&e[i].account[ut]===o)return m(e[i]||{});let c=ro(t,p);if(n[t]?.includes(c)&&e[c].account[ut]===o)return m(e[c]);let _=n[t]?.find(g=>e[g]?.account[ut]===o);return _?m(e[_]):{}};var Ot=t=>{let o=(0,Yt.useDispatch)(),e={async[w.ETH_SIGN](){await o(io(t)),await E(o)},async[w.PERSONAL_SIGN](){await o(no(t)),await E(o)},async[w.ETH_SIGN_TYPED_DATA](){await o(gt(t)),await E(o)}},{type:n}=t,{walletId:i}=K(t.origin,t.msgParams?.from),m=M(i),p=S();return async()=>{m({all_confirmation:"cancel",trade:"sign",dapp_url:t.origin,network:p?.chainName}),await e[n]?.()}},de=t=>{let o=(0,Yt.useDispatch)(),{type:e,msgParams:n,id:i}=t,m={...n,metamaskId:i},p={async[w.ETH_SIGN](){await o(mo(m)),await E(o)},async[w.PERSONAL_SIGN](){await o(po(m)),await E(o)},async[w.ETH_SIGN_TYPED_DATA](){await o(Tt(m)),await E(o)}},c=Ot(t),{walletId:_}=K(t.origin,t.msgParams?.from),g=M(_),B=S();return async()=>{g({all_confirmation:"confirm",trade:"sign",dapp_url:t.origin,network:B?.chainName}),await xt({walletId:_,callback:async()=>{await c(),await E(o)}})&&await p[e]?.()}},ye=(t,o=!1,e={})=>{let n=Ot(t),i={actionType:u.ACTION_TYPE.CANCEL,onClick:Ot(t)},m={actionType:u.ACTION_TYPE.CONFIRM,disabled:o||e?.causeRiskItem?.includes(Eo),onClick:de(t)};return{buttonGroup:[i,m],handleCancel:n}},Bo=ye;var ge=t=>{let{unapproved:o={}}=t,[e,n]=(0,j.useState)({}),[i,m]=(0,j.useState)(!0),{buttonGroup:p,handleCancel:c}=Bo(o,i,e),_=(0,j.useMemo)(()=>{let J=o.msgParams?.data,$=o.type,tt={[w.ETH_SIGN](){return[{value:J}]},[w.PERSONAL_SIGN](){return[{value:(ot=>{try{let pt=(0,Lo.stripHexPrefix)(ot),ct=f.Buffer.from(pt,"hex"),lt=ct.length===32?ot:ct.toString("utf8");return/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\x80-\x9F]/.test(lt)?ot:lt}catch{return ot}})(J)}]},[w.ETH_SIGN_TYPED_DATA](){return J}};return(0,Wo.isFunction)(tt[$])?tt[$]():[]},[o]),{chainId:g}=(0,Do.useSelector)(rt),B=S(),v=wt(),{type:H,msgParams:{data:V,from:D}}=o,z=async J=>{let $=await v({checkTypes:[et.KYS],from:D,chainId:+yt(J),host:origin,inputData:V,coinId:B?.coinId||ft,additionalData:{evmData:JSON.stringify({type:H})}});n($?.[et.KYS]||{}),m(!1)};(0,j.useEffect)(()=>{g&&z(g)},[g]);let L=(0,j.useMemo)(()=>o.type===w.ETH_SIGN?{type:R.TYPE.error,message:r("wallet_extension_eth_sign")}:{},[o]);return Et({kysRet:e,handleCancel:c}),j.default.createElement(Ao,{loading:i,message:_,unapproved:o,tipMessage:L,customButtonGroup:p})},Go=ge;a();s();var Z=l(x()),Xo=l(q());Zt();a();s();var C=l(x());P();a();s();var ht=l(x());a();s();var It={root:"_root_szca8_1",icon:"_icon_szca8_5",showValue:"_showValue_szca8_11"};var Te=({icon:t,amount:o,symbol:e})=>ht.default.createElement(y.Box,{className:It.root},ht.default.createElement(jt,{src:t,className:It.icon}),ht.default.createElement(h.AdaptiveText,{autoSize:Ct,ellipsis:{tooltip:!0},className:It.showValue},"- ",o," ",e)),Oo=Te;a();s();var Ft=l(x()),vo=l(q()),Ho=l(Dt());P();a();s();var Yo=l(x());P();var Ce=({text:t})=>(0,Yo.useCallback)(()=>new Promise((o,e)=>{Lt.prompt({title:r("extension_signature_text_at_risk"),infoType:Lt.Prompt.INFO_TYPE.warn,text:t,alignBottom:!1,hideCloseBtn:!0,confirmBtnProps:{size:T.SIZE.lg,type:T.TYPE.highlight,category:T.CATEGORY.fill},cancelBtnProps:{size:T.SIZE.lg,category:T.CATEGORY.outline},onCancel(n){o(),n.destroy()},cancelText:r("extension_signature_text_continue"),onConfirm(n){e(),n.destroy()},confirmText:r("extension_signature_text_reject")})}),[t]),we=({text:t,handleConfirm:o,handleCancel:e})=>{let n=Ce({text:t});return{actionType:u.ACTION_TYPE.CONFIRM,type:T.TYPE.red,async onClick(){try{await n(),await o()}catch{await e()}}}},Fo=we;dt();a();s();var mt={permit:"Permit",permit2:"Permit2"},nt={eip712NotStandard:"eip712NotStandard",longSignText:"longSignText"},kt={[nt.eip712NotStandard]:"wallet_extension_transfer_text_address_tampered",[nt.longSignText]:"extension_signature_text_error_data"};var xe=({unapproved:t,checkRet:o={}})=>{let e=(0,vo.useDispatch)(),{walletId:n}=Io(t),i=M(n),m=S(),p=(0,Ft.useCallback)(async()=>{i({trade:"sign",all_confirmation:"cancel",network:m?.chainName,dapp_url:t?.origin}),await e(gt(t)),await E(e)},[m?.chainName,i,e,t]),c=(0,Ft.useCallback)(async()=>{let{msgParams:V,id:D}=t,z={...V,metamaskId:D};i({trade:"sign",all_confirmation:"confirm",network:m?.chainName,dapp_url:t?.origin}),await xt({walletId:n,callback:async()=>{await p()}})&&(await e(Tt(z)),await E(e))},[t,i,n,e,p,m?.chainName]),_={actionType:u.ACTION_TYPE.CANCEL,onClick:p},g={actionType:u.ACTION_TYPE.CONFIRM,type:T.TYPE.highlight,onClick:c},{causeRiskItem:B=[]}=o,v=Fo({handleConfirm:c,handleCancel:p,text:r(kt[B[0]])}),H=[_,g];return(0,Ho.intersection)(B,Object.values(nt)).length&&(H=[_,v]),{buttonGroup:H,handleCancel:p}},bt=xe;a();s();var St=l(x()),zo=l(Kt());a();s();var Pt={root:"_root_1wji9_1",price:"_price_1wji9_4",switchIcon:"_switchIcon_1wji9_11"};var Ee=({fromSymbol:t,toSymbol:o,price:e,reversePrice:n})=>{let[i,{toggle:m}]=oo(!1),p=i?o:t,c=i?t:o,_=i?n:e;return St.default.createElement(y.FlexBox,{className:Pt.root},St.default.createElement(h.Text,{size:h.SIZE.sm,ellipsis:{tooltip:!0},className:Pt.price},"1 ",p," = ",_," ",c),St.default.createElement(Gt,{size:Gt.SIZE.xs,className:(0,zo.default)("okx-wallet-plugin-switch",Pt.switchIcon),onClick:m}))},vt=Ee;var Ie={CREATE:"10",REVOCATION:"20"},he=({unapproved:t={}})=>{let o=S(),{dexExtraData:e}=JSON.parse(t.msgParams.data),n=A(t),i=K(t.origin,t.msgParams?.from),{buttonGroup:m}=bt({unapproved:t}),{expiration:p,order:c,predictPriceFormat:_,reversePredictPrice:g,sellTokenAmountFormat:B,sellTokenImage:v,sellTokenSymbol:H,type:V}=e,D={icon:v,symbol:H,amount:B},{fromSymbol:z,toSymbol:L,priceFormat:J,reversePrice:$}=c,tt=M(i.walletId);return C.default.createElement(y.Container,null,C.default.createElement(G,{title:V===Ie.CREATE?r("swaptrade_limit_title_place_limit_order"):r("swaptrade_limit_title_cancel_limit_order"),closeable:!1,backable:!1}),C.default.createElement(d,null,C.default.createElement(I,{title:r("extension_contract_interaction_maintitle_asset_changes"),tooltip:r("extension_infor_tooltip_asset_changestips")},C.default.createElement(Oo,{...D})),C.default.createElement(Y,{...n})),C.default.createElement(d,null,C.default.createElement(it,{title:r("wallet_extension_network_address_title_walletused"),address:i.address,walletId:i.walletId,onCopyCallback:()=>{tt({trade:"contract_interaction",all_confirmation:"wallet_used_address"})}})),C.default.createElement(d,{bordered:!1},C.default.createElement(I,{title:r("swaptrade_limit_text_limit_price")},C.default.createElement(vt,{toSymbol:L,price:J,fromSymbol:z,reversePrice:$})),C.default.createElement(I,{title:r("swaptrade_limit_text_est_execution_price"),tooltip:r("swaptrade_limit_tooltip_estimated_price")},C.default.createElement(vt,{toSymbol:L,fromSymbol:z,price:_,reversePrice:g})),C.default.createElement(I,{title:r("swaptrade_limit_text_expiry_time")},C.default.createElement(Qt,{size:Xt.sm,dateTime:p,format:"yyyyMMddHHmm"})),C.default.createElement(Mo,{coinId:o?.coinId})),C.default.createElement(W,{placeholder:!0,offsetBottom:0,borderTop:!0},C.default.createElement(u,{buttonGroup:m})))},Ko=he;a();s();var N=l(x());P();a();s();P();var jo=l(Dt());a();s();var ke=()=>o=>{for(let e=0;e<o.length;e++){let n=o[e],i=n();if(i&&i.break)return null;if(i)return i}return null},Uo=ke;var be=({checkRet:t})=>{let o=Uo(),e=bo({kysRet:t});return o([e,()=>{let{causeRiskItem:i}=t;return(0,jo.intersection)(i,Object.values(nt)).length?{type:R.TYPE.error,message:r(kt[i[0]])}:null}])},At=be;a();s();var Mt=l(x());P();var Pe=({approveInfo:t})=>{let o=t.addressType===xo.eoa?h.TYPE.danger:h.TYPE.default;return Mt.default.createElement(d,null,Mt.default.createElement(I,{title:r("wallet_extension_permitapproval_text_approved")},Mt.default.createElement(h.Text,{size:h.SIZE.sm,forceWrap:!0,type:o},t.address||"")))},Zo=Pe;var Se=({unapproved:t,checkRet:o,buttonGroup:e})=>{let n=o.approveList||[],{message:i}=JSON.parse(t?.msgParams?.data||"{}"),{origin:m,msgParams:{from:p}}=t,c=A(t),_=K(m,p)||{},g=At({checkRet:o}),B={[mt.permit]:"wallet_extension_permitapproval_title_permitapproval",[mt.permit2]:"wallet_extension_permitapproval_title_permit2"};return N.default.createElement(y.Container,null,N.default.createElement(G,{title:r(B[o.strategy]),closeable:!1,backable:!1}),N.default.createElement(d,null,N.default.createElement(wo,{title:r("extension_approve_maintitle_approve"),summaryList:n.map(v=>{let{symbol:H,decimals:V,imageUrl:D}=v?.asset||{},{approvalRaw:z,expiration:L}=v||{};return{title:go({amount:z,symbol:H||qt,decimals:V||0}),desc:r("wallet_extension_permitapproval_variable_days",{num:L}),icon:{src:D||Jt},descSize:h.SIZE.xs,autoSize:Ct}})}),N.default.createElement(Y,{...c})),N.default.createElement(d,null,N.default.createElement(it,{title:r("wallet_extension_network_address_title_walletused"),address:_.address,walletId:_.walletId})),N.default.createElement(Zo,{approveInfo:n[0]||{}}),N.default.createElement(ko,{message:i}),N.default.createElement(W,{placeholder:!0,offsetBottom:0,borderTop:!0},N.default.createElement(O,{...g}),N.default.createElement(u,{buttonGroup:e})))},Vo=Se;a();s();var X=l(x());P();a();s();var Jo={root:"_root_1dye6_1"};var Ae=({unapproved:t,checkRet:o,buttonGroup:e})=>{let n=A(t),{message:i}=JSON.parse(t?.msgParams?.data||"{}"),m=At({checkRet:o});return X.default.createElement(y.Container,{className:Jo.root},X.default.createElement(G,{title:r("wallet_dapp_conncetion_notify_signature_request"),closeable:!1,backable:!1}),X.default.createElement(d,null,X.default.createElement(Y,{...n})),X.default.createElement(ho,{message:i}),X.default.createElement(W,{placeholder:!0,offsetBottom:0,borderTop:!0},X.default.createElement(O,{...m}),X.default.createElement(u,{buttonGroup:e})))},qo=Ae;var Me=({unapproved:t})=>{let{chainId:o}=(0,Xo.useSelector)(rt),{msgParams:{version:e,data:n,from:i}}=t,[m,p]=(0,Z.useState)(!0),[c,_]=(0,Z.useState)({}),g=wt(),B=S(),v=async D=>{let L=(await g({checkTypes:[et.TYPED_DATA_CHECKER],from:i,chainId:+yt(D),host:origin,inputData:n,coinId:B?.coinId||ft}))?.[et.TYPED_DATA_CHECKER]||{},J=L.causeRiskItem||[],tt=(L.exposures?.[i]||[]).reduce((ot,pt)=>{let{spenders:ct,asset:lt,expiration:me}=pt,zt=[];return Object.entries(ct).forEach(([pe,ce])=>{zt.push({asset:lt,address:pe,expiration:me,...ce})}),[...ot,...zt]},[]),Ht=L.blackAddressWarning||{};_({approveList:tt,blackAddress:Ht,causeRiskItem:J,strategy:L.strategy}),p(!1)},{buttonGroup:H,handleCancel:V}=bt({unapproved:t,checkRet:c});if(Et({kysRet:c,handleCancel:V}),(0,Z.useEffect)(()=>{o&&v(o)},[o]),m)return Z.default.createElement(uo,null);if(e==="V4"){let D={};try{D=JSON.parse(n)}catch(z){console.log(z)}if(D.dexExtraData)return Z.default.createElement(Ko,{unapproved:t})}return Object.values(mt).includes(c?.strategy)?Z.default.createElement(Vo,{checkRet:c,unapproved:t,buttonGroup:H}):Z.default.createElement(qo,{checkRet:c,unapproved:t,buttonGroup:H})},Qo=Me;a();s();P();var F=l(x());a();s();P();var $o=l(q());dt();var Ne=(t,o)=>{let e=(0,$o.useDispatch)(),n=M(o?.walletId),i=S(),m={actionType:u.ACTION_TYPE.CANCEL,btnText:r("wallet_dapp_connection_btn_reject"),async onClick(){n({all_confirmation:"cancel",trade:"decrypt_message",dapp_url:t.origin,network:i?.chainName}),await e(ao(t)),await E(e)}},p={actionType:u.ACTION_TYPE.CONFIRM,async onClick(){try{n({all_confirmation:"confirm",trade:"decrypt_message",dapp_url:t.origin,network:i?.chainName});let c={...t.msgParams,metamaskId:t.id};await e(lo(c)),await E(e)}catch(c){console.log(c)}}};return[m,p]},Ro=Ne;a();s();var Q=l(x());P();var Be=({walletAccount:t,children:o})=>{let[e]=yo(),{walletAsset:n}=To(t.walletId),i=M(t.walletId);return Q.default.createElement(Q.default.Fragment,null,Q.default.createElement(d,null,Q.default.createElement(it,{title:r("wallet_extension_network_address_title_walletused"),address:t.address,walletId:t.walletId,onCopyCallback:()=>{i({trade:"contract_interaction",all_confirmation:"wallet_used_address"})}})),Q.default.createElement(d,{bordered:!1},Q.default.createElement(I,{title:r("wallet_dapp_connection_subtitle_balance")},Q.default.createElement(h.DisplayAmount,{ellipsis:!0,size:h.SIZE.sm,mode:h.LEGAL,useApproximate:!1,hidden:e?"***":!1},n)),o))},Nt=Be;a();s();var te=l(Kt());P();var oe=l(q());var k=l(x());a();s();var at={root:"_root_1xv1e_1",msgWrap:"_msgWrap_1xv1e_12",decrypted:"_decrypted_1xv1e_20",copyMsg:"_copyMsg_1xv1e_23",decryptMsg:"_decryptMsg_1xv1e_28"};var De=({rawData:t})=>{let o=Co({showDesc:!1});return k.default.createElement(T,{rect:!0,size:T.SIZE.xxs,type:T.TYPE.primary,category:T.CATEGORY.outline,className:at.copyMsg,onClick:()=>{o(t)}},k.default.createElement(Ut,{className:"okx-wallet-plugin-copy"}),k.default.createElement(y.Box,null,r("wallet_extension_encrypted_text_copy")))},Le=({unapproved:t,decryptCb:o})=>{let e=(0,oe.useDispatch)(),n=(0,k.useCallback)(async()=>{let{msgParams:i,id:m}=t,p=await e(co({...i,metamaskId:m}));o(p)},[e,o,t]);return k.default.createElement(T,{className:at.decryptMsg,size:T.SIZE.sm,type:T.TYPE.primary,category:T.CATEGORY.outline,icon:"okds-locked",iconType:T.ICON_POSITION.leading,onClick:n},r("wallet_dapp_conncetion_subtitle_decrypt_metamask_information"))},We=({unapproved:t={}})=>{let[o,e]=(0,k.useState)(!1),[n,i]=(0,k.useState)(t.msgParams?.data),[m,p]=(0,k.useState)(!1),c=_=>{_.error?(p(!0),i(r("wallet_dapp_conncetion_errortip_decrypt_error",{errorMessage:_.error}))):i(_.rawData),e(!0)};return k.default.createElement(I,{title:r("wallet_extension_encrypted_text_encrypted_message")},k.default.createElement(y.Box,{className:at.root},k.default.createElement(y.Box,{className:(0,te.default)(at.msgWrap,{[at.decrypted]:o})},n),o?!m&&k.default.createElement(De,{rawData:n}):k.default.createElement(Le,{unapproved:t,decryptCb:c})))},ee=We;var Ge=({unapproved:t})=>{let o=A(t),e=K(t.origin,t.msgParams?.from),n=A(t),i=Ro(t,e),m=(0,F.useMemo)(()=>({type:O.TIP_TYPE.NORMAL,message:r("wallet_dapp_conncetion_notify_decrypt_message",{siteName:n.name||n.host})}),[n]);return F.default.createElement(y.Container,null,F.default.createElement(G,{title:r("wallet_dapp_conncetion_subtitle_decrypt_request"),closeable:!1,backable:!1}),F.default.createElement(d,null,F.default.createElement(Y,{...o})),F.default.createElement(Nt,{walletAccount:e},F.default.createElement(ee,{unapproved:t})),F.default.createElement(W,{placeholder:!0,offsetBottom:0,borderTop:!0},F.default.createElement(O,{...m}),F.default.createElement(u,{buttonGroup:i})))},re=Ge;a();s();P();var U=l(x());a();s();P();var ie=l(q());dt();var Oe=(t,o)=>{let e=(0,ie.useDispatch)(),n=M(o?.walletId),i=S(),m={actionType:u.ACTION_TYPE.CANCEL,btnText:r("wallet_dapp_connection_btn_reject"),async onClick(){n({all_confirmation:"cancel",trade:"get_public_key",dapp_url:t?.origin,network:i?.chainName}),await e(so(t)),await E(e)}},p={actionType:u.ACTION_TYPE.CONFIRM,btnText:r("wallet_dapp_conncetion_btn_provide"),async onClick(){try{n({all_confirmation:"confirm",trade:"get_public_key",dapp_url:t?.origin,network:i?.chainName});let c={data:t.msgParams,metamaskId:t.id};await e(fo(c)),await E(e)}catch(c){console.log(c)}}};return[m,p]},ne=Oe;var Ye=({unapproved:t})=>{let o=K(t.origin,t.msgParams),e=ne(t,o),n=A(t),i=A(t),m=(0,U.useMemo)(()=>({type:O.TIP_TYPE.NORMAL,message:r("wallet_dapp_conncetion_notify_public_key_notice",{siteName:i.name||i.host})}),[i]);return U.default.createElement(y.Container,null,U.default.createElement(G,{title:r("wallet_dapp_conncetion_notify_public_key_request"),closeable:!1,backable:!1}),U.default.createElement(d,null,U.default.createElement(Y,{...n})),U.default.createElement(Nt,{walletAccount:o}),U.default.createElement(W,{placeholder:!0,offsetBottom:0,borderTop:!0},U.default.createElement(O,{...m}),U.default.createElement(u,{buttonGroup:e})))},ae=Ye;var Fe=t=>{let{msgParams:{version:o},type:e}=t;return e===w.ETH_GET_ENCRYPTION_PUBLIC_KEY?ae:e===w.ETH_DECRYPT?re:e===w.ETH_SIGN_TYPED_DATA&&["V3","V4"].includes(o)?Qo:Go},ve=(0,Bt.memo)(t=>{let{unapproved:o={}}=t,e=Fe(o);return Bt.default.createElement(e,{unapproved:o})}),qs=ve;a();s();var b=l(x());P();_t();var He=({unapproved:t})=>{let[o,{cancel:e,approve:n}]=So(t),i=A(o),{customNets:m}=Po(),p=m.find(_=>_.rpcUrl===o.rpcUrl),c=(0,b.useMemo)(()=>{let _={actionType:u.ACTION_TYPE.CANCEL,onClick:e},g={disabled:!!p,actionType:u.ACTION_TYPE.CONFIRM,btnText:r("developer_mode_add_network_btn_approve"),async onClick(){await n(),Wt.success({duration:1.5,title:r("developer_mode_home_toast_added"),placement:Wt.DIRECTION.top})}};return[_,g]},[n,e]);return b.default.createElement(y.Container,null,b.default.createElement(G,{title:r("developer_mode_add_network_maintitle_add_network"),backable:!1,closeable:!1}),b.default.createElement(d,null,b.default.createElement(Y,{...i})),b.default.createElement(d,{bordered:!1},b.default.createElement(I,{title:r("developer_mode_add_network_title_network_name"),tooltip:r("wallet_dapp_conncetion_add_network_subtitle_network_name_tips")},o.type||o.chainName),o.switchType===w.ADD_ETHEREUM_CHAIN&&[b.default.createElement(I,{title:r("developer_mode_add_network_title_networkurl"),tooltip:r("wallet_dapp_conncetion_add_network_subtitle_network_url_tips")},o.rpcUrl),b.default.createElement(I,{title:r("developer_mode_add_network_title_chainid"),tooltip:r("wallet_dapp_conncetion_add_network_subtitle_chain_id_tips")},o.chainIdToDisplay),b.default.createElement(I,{title:r("developer_mode_add_network_title_currency_symbol"),tooltip:r("wallet_dapp_conncetion_add_network_subtitle_currency_symbol_tips")},o.ticker),b.default.createElement(I,{title:r("developer_mode_add_network_title_block_explorerurl"),tooltip:r("wallet_dapp_conncetion_add_network_subtitle_explorer_url_tips")},o.explorers||o.blockExplorerUrl)]),b.default.createElement(W,{placeholder:!0,offsetBottom:0,borderTop:!0},b.default.createElement(O,{type:p?R.TYPE.error:R.TYPE.warn,message:p?r("developer_mode_infor_errortip_used_network",{network:p.name}):r("developer_mode_add_network_errortip_risk_aware")}),b.default.createElement(u,{buttonGroup:c})))},um=He;a();s();var se=l(x());fe();var ze=()=>(0,se.useCallback)(async(t,o)=>{await Vt().handleErc20Token(t,o)},[]),Tm=ze;export{K as a,Tm as b,S as c,qs as d,um as e};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-D6QLUPRP.js.map
