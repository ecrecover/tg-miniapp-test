import{a as k}from"./chunk-PPNKCZDH.js";import{a as M}from"./chunk-LEKCTZRC.js";import"./chunk-PCT6WF3F.js";import"./chunk-X6MJ7FAJ.js";import"./chunk-W3BHXSAD.js";import{Q as h}from"./chunk-WWF4GAYE.js";import"./chunk-YITM3H6Z.js";import"./chunk-IQFXZKFW.js";import{a as g,b as W}from"./chunk-7BFUGHAL.js";import{d as C}from"./chunk-JVN7YJ6W.js";import"./chunk-V4V6C6NY.js";import"./chunk-ZQ5A3KPQ.js";import"./chunk-BGUY7SH3.js";import{g as E}from"./chunk-MJYAUOKI.js";import"./chunk-LI3NFLG3.js";import"./chunk-FCCCJLF6.js";import{_ as L,ia as R,p as T}from"./chunk-4Z4GXCHB.js";import{y as G}from"./chunk-FK3ETA6I.js";import{ha as o}from"./chunk-QZDHFNHK.js";import"./chunk-6KPQELH2.js";import{a as K}from"./chunk-EJQOS3F4.js";import"./chunk-LHHZ5TAA.js";import"./chunk-PI6QLVMS.js";import"./chunk-QY4HIIR3.js";import"./chunk-XFWUEPSK.js";import"./chunk-MNNY2ODL.js";import"./chunk-C3FJ2D4V.js";import"./chunk-C5ZJZEPI.js";import"./chunk-LGHM3MOC.js";import"./chunk-4QSQKIBZ.js";import"./chunk-OXVQDEZW.js";import"./chunk-X3G52GGX.js";import"./chunk-WUKT6J7S.js";import"./chunk-FTJCOLFJ.js";import{Rb as w,Wb as v,Xb as A,jc as F}from"./chunk-QG673PNL.js";import"./chunk-ZUFARSFM.js";import{G as i}from"./chunk-6MTHEPGF.js";import{I as B,w as n}from"./chunk-ZQQ7HNWV.js";import"./chunk-Y62GSKHT.js";import"./chunk-2BXFMFMK.js";import"./chunk-ZOQTSYT4.js";import{a as H}from"./chunk-ADZWCU3Q.js";import"./chunk-FDI7TLXH.js";import"./chunk-L4HTIIR6.js";import"./chunk-733NI6T7.js";import"./chunk-EYWGNJVY.js";import"./chunk-TBVIGR5T.js";import"./chunk-FHQVMQUK.js";import"./chunk-XNS2NFYY.js";import{f as l,m as p,o as f}from"./chunk-REC7XVZY.js";p();f();var r=l(H()),a=l(G()),x=l(K());B();F();v();var c=t=>{h({tx_trminal:"web",wallet_type:t})},lt=()=>{let t=(0,x.useHistory)(),y=(0,a.useDispatch)(),[b,s]=(0,r.useState)(!1),I=()=>y(C()),_=(0,a.useSelector)(E),{canAddAccount:d}=M(),e=!d||_,N=()=>_?"wallet_extension_addaccount_text_feature_unavailable":d?"":"wallet_extension_addaccount_text_max_accounts",O=async()=>{c(o.NEW),await(async()=>{try{s(!0),await I(),t.push(R)}catch(u){u.message===g&&i.error(n("wallet_home_toast_network_error")),u.message===W&&i.error(n("extension_wallet_addwallet_toast_wallets_added",{amount:500}))}finally{s(!1)}})()},D=()=>{c(o.IMPORT),t.push(L)},P=()=>{c(o.HARD_WALLET),globalThis.platform.openExtensionInBrowser(T)},S="wallet_add_wallet_maintitle_add_wallet",m=[{isLink:!0,loading:b,icon:"okx-wallet-plugin-perpetual",title:"wallet_addwallet_btn_create_wallet",onClick:async()=>e?void 0:await O()},{isLink:!0,icon:"okx-wallet-plugin-import",title:"wallet_addwallet_btn_import_wallet",onClick:()=>{if(!e)return D()}}];return A()!==w&&m.push({isLink:!0,icon:"okx-wallet-plugin-hardware",title:"wallet_add_wallet_btn_conncet_hardware_wallet",onClick:()=>{if(!e)return P()}}),r.default.createElement(k,{title:S,tooltip:N(),disabled:e,list:m,closeable:!0})};export{lt as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=wallet-add-page-KUBH6VO3.js.map
