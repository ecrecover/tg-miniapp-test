import{Ja as B,ga as M,kb as W,l as v,mb as H,nb as U,o as q,ya as j}from"./chunk-H33TTZT6.js";import{Ca as R,Ia as x,W as F}from"./chunk-4RARGC4D.js";import{A as C,M as D,O as k}from"./chunk-SOHTSUTI.js";import{M as h}from"./chunk-V4F2JFTP.js";import{a as y}from"./chunk-6DDC4Y2S.js";import{f as c,m as t,o}from"./chunk-EQYVU4XP.js";t();o();var G=c(y());t();o();var Y={"drawer-mask":"_drawer-mask_r7p9i_1",drawerMask:"_drawer-mask_r7p9i_1"};var Z=({visible:n,children:s})=>{let{Layout:r}=R.components;return n?G.default.createElement(r.Portal,{className:Y.drawerMask},s):null},lt=Z;t();o();var e=c(y()),P=c(W());t();o();var L={"text-ellipsis-tooltip":"_text-ellipsis-tooltip_19pja_1",textEllipsisTooltip:"_text-ellipsis-tooltip_19pja_1","text-ellipsis-content":"_text-ellipsis-content_19pja_4",textEllipsisContent:"_text-ellipsis-content_19pja_4"};function J({className:n,style:s,text:r,tipText:p,maxWidth:a,tooltipProps:d={},...S}){let E=x(),f=(0,e.useRef)(null),[u,g]=(0,e.useState)(!1),[T,i]=(0,e.useState)(0);(0,e.useEffect)(()=>{let _=f.current;if(!a&&_){let b=_.parentElement.parentElement;i(b?.getBoundingClientRect().width)}else i(a)},[a,r]),(0,e.useEffect)(()=>{let _=f.current;g(_&&j(_))},[r,T]);let A=(0,e.useMemo)(()=>a||!T?{maxWidth:a}:{maxWidth:T},[a,T]);return e.default.createElement(C,{disabled:!u,title:p||r,maxWidth:E?200:160,...d,prefixClassName:(0,P.default)(L.textEllipsisTooltip,d?.prefixClassName)},e.default.createElement("div",{className:(0,P.default)("truncate",L.textEllipsisContent,n),style:{...s||{},...A},ref:f,...S},r))}var At=(0,e.memo)(J);t();o();var N={SLOW:"SLOW",MODERATE:"MODERATE",FAST:"FAST",CUSTOM:"CUSTOM"},Ot={[N.SLOW]:"slow",[N.MODERATE]:"standard",[N.FAST]:"fast",[N.CUSTOM]:"custom"},It={TRANSACTION_HISTORY:1,SNAP_SWITCH:2,SHARE_BLINK:3},gt="IF_CLOSE_SNAP_SWITCH";t();o();var w=c(y());t();o();var z=c(y()),K=c(W());t();o();var X={text:"_text_r5aha_1"};var V=({computedTradeModeLocale:n,font14:s,font12:r})=>{let p=x();return n&&z.default.createElement("span",{className:(0,K.default)(" mr-4",X.text,s&&"font-14",r&&"font-12",p?"content-primary":"font-bold  ml-16 content-secondary")},M(n))},Q=V;var $=({font14:n,font12:s})=>{let{quoteStore:r,tradeModeStore:p}=q(),{bestPriceTag:a,snapModeSwitch:d,tradingModeType:S}=p,E=r?.quote?.bestRoute?.tradingModeType,f=F[E],u=a===S&&!r?.computedIsNoQuote;return d&&w.default.createElement(w.default.Fragment,null,w.default.createElement(Q,{computedTradeModeLocale:f,font14:n,font12:s}),u&&w.default.createElement(k,{size:D.SIZE.sm,className:"doc-tag mr-4",ellipsis:!0},M("swaptrade_quotecompare_label_best")))},Zt=v($);t();o();var m=c(y()),I=c(W());t();o();var O={"rate-wrap":"_rate-wrap_14nxu_1",rateWrap:"_rate-wrap_14nxu_1","rate-text":"_rate-text_14nxu_6",rateText:"_rate-text_14nxu_6"};function co({from:n,to:s,toFromRate:r,rate:p,className:a,hideExchangeBtn:d,contentClassName:S="",iconClassName:E="",IsAccordionTitle:f}){let[u,g]=(0,m.useState)(!0),T=x(),i=(0,m.useMemo)(()=>u?{from:n,to:s,price:p}:{from:s,to:n,price:r},[u,n,s,r,p]),A=H({fromAmount:1,fromSymbol:i.from,equal:"\u2248",toAmount:i.price,toSymbol:i.to}),_=U({fromAmount:1,fromSymbol:i.from,equal:"\u2248",toAmount:i.price,toSymbol:i.to});return m.default.createElement("div",{className:(0,I.default)("flex items-center",!f&&"justify-end",O.rateWrap,a)},m.default.createElement(C,{title:A,textOverflow:{text:A},maxWidth:300,noWrapper:!0},m.default.createElement("span",{className:(0,I.default)(T?"content-primary font-12":"content-secondary  font-14","font-bold",O.rateText,S),"data-testid":"rate-text"},_)),!d&&m.default.createElement(h,{"data-testid":"exchangeIcon",onClick:b=>{b.stopPropagation(),B({button_name:"rate"}),g(!u)},className:(0,I.default)("cursor-pointer okx-defi--exchange ml-2 content-secondary",O.iconColor,E)}))}export{lt as a,At as b,N as c,Ot as d,It as e,gt as f,Zt as g,co as h};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-X4EMSMG4.js.map
