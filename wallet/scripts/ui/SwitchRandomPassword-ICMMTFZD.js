import{a as x}from"./chunk-KZ2PCELG.js";import"./chunk-C7ZG4INB.js";import"./chunk-J5ANWCEO.js";import{w as s}from"./chunk-VMO2INN3.js";import"./chunk-J4TF3RT7.js";import{a as _,o as w}from"./chunk-6FOZGMAL.js";import"./chunk-2MV3WEYP.js";import{Ob as d,y as C}from"./chunk-HPXM6RSK.js";import"./chunk-IUIJ46C3.js";import"./chunk-KZ3ZU675.js";import"./chunk-NJ5CWPUY.js";import"./chunk-QO3243S4.js";import"./chunk-O5JCC6KG.js";import{d as p,f as B}from"./chunk-MAIAJ7GD.js";import"./chunk-MGLVPWSV.js";import"./chunk-TXKWPME2.js";import"./chunk-4D3M2I6W.js";import{c as n}from"./chunk-JXCCIV3J.js";import"./chunk-MZG4RHXJ.js";import"./chunk-X7YMANPZ.js";import{G as f,z as m}from"./chunk-SOHTSUTI.js";import{I as N,w as a}from"./chunk-RPZQDAIQ.js";import"./chunk-LDRI4AYU.js";import"./chunk-E24EBHFY.js";import"./chunk-V4F2JFTP.js";import{a as F}from"./chunk-6DDC4Y2S.js";import"./chunk-KJOC4LFM.js";import"./chunk-6FDO4Y56.js";import"./chunk-NNZ5SU5W.js";import"./chunk-YUXYCITH.js";import"./chunk-TEKDZ77C.js";import"./chunk-NC54RUAI.js";import"./chunk-YR74Q3QD.js";import{f as c,m as e,o as i}from"./chunk-EQYVU4XP.js";e();i();var t=c(F()),g=c(C());N();B();e();i();var r={actionRow:"_actionRow_6expi_1",title:"_title_6expi_4",notificationText:"_notificationText_6expi_8"};var M=()=>{let h=(0,g.useSelector)(d),[u,{setTrue:y,setFalse:T}]=w(!1),[b,S]=(0,t.useState)(h),L=!b,l=()=>{f.error({title:a("wallet_extension_alertbanner_unlock_fail")})},k=async()=>{try{let o=await p().switchEnableRandom();typeof o=="boolean"?S(o):l()}catch(o){console.log(o),l()}},E=_(async()=>{y(),await k(),T()});return t.default.createElement(n.Container,null,t.default.createElement(x,{bordered:!1}),t.default.createElement(n.FlexBox,{justify:"space-between",align:n.ALIGN.center,className:r.actionRow},t.default.createElement(s.Text,{strong:700,className:r.title},a("wallet_extension_settings_not_affected")),t.default.createElement(m,{loading:u,checked:L,onClick:E})),t.default.createElement(s.Text,{className:r.notificationText},a("wallet_extension_settings_notification_not_affected")))},V=M;export{V as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=SwitchRandomPassword-ICMMTFZD.js.map
