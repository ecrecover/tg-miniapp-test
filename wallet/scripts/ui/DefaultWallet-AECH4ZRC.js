import{b as d,c as b}from"./chunk-ZPFBKNRM.js";import"./chunk-LBJYBJBE.js";import{g as y}from"./chunk-QEPBNPHF.js";import"./chunk-3JLS3TGD.js";import{b as f}from"./chunk-CLWWTOKP.js";import{a as T}from"./chunk-KZ2PCELG.js";import"./chunk-C7ZG4INB.js";import"./chunk-J5ANWCEO.js";import{w as l}from"./chunk-VMO2INN3.js";import"./chunk-J4TF3RT7.js";import"./chunk-6FOZGMAL.js";import"./chunk-2MV3WEYP.js";import{y as N}from"./chunk-HPXM6RSK.js";import"./chunk-IUIJ46C3.js";import"./chunk-KZ3ZU675.js";import"./chunk-NJ5CWPUY.js";import"./chunk-UMJMJOW4.js";import"./chunk-YTJBYVBO.js";import"./chunk-QO3243S4.js";import"./chunk-O5JCC6KG.js";import"./chunk-MAIAJ7GD.js";import"./chunk-MGLVPWSV.js";import"./chunk-TXKWPME2.js";import"./chunk-4D3M2I6W.js";import{c as t}from"./chunk-JXCCIV3J.js";import"./chunk-AOA7NX2Y.js";import"./chunk-HXZH2DHB.js";import"./chunk-MZG4RHXJ.js";import"./chunk-VTST2UXT.js";import"./chunk-X7YMANPZ.js";import"./chunk-IRITFTWC.js";import{q as m}from"./chunk-SOHTSUTI.js";import{I as h,w as a}from"./chunk-RPZQDAIQ.js";import"./chunk-LDRI4AYU.js";import"./chunk-E24EBHFY.js";import{c as w}from"./chunk-V4F2JFTP.js";import{a as O}from"./chunk-6DDC4Y2S.js";import"./chunk-KJOC4LFM.js";import"./chunk-6FDO4Y56.js";import"./chunk-NNZ5SU5W.js";import"./chunk-YUXYCITH.js";import"./chunk-TEKDZ77C.js";import"./chunk-NC54RUAI.js";import"./chunk-YR74Q3QD.js";import{f as _,m as r,o as n}from"./chunk-EQYVU4XP.js";r();n();var e=_(O());var v=_(w());var C=_(N());h();r();n();var i={textWrapper:"_textWrapper_v8s21_1",title:"_title_v8s21_4",subTitle:"_subTitle_v8s21_9",content:"_content_v8s21_12",option:"_option_v8s21_15",left:"_left_v8s21_23",optionTitle:"_optionTitle_v8s21_26",optionSubTitle:"_optionSubTitle_v8s21_29",select:"_select_v8s21_32",active:"_active_v8s21_37"};var I=()=>{let p=(0,C.useDispatch)(),[x]=b(d.defaultWallet),k=[{title:a("wallet_extension_default_radio_okx_wallet"),subTitle:a("wallet_extension_default_radio_okx_preferred"),type:"OKX"},{title:a("wallet_extension_default_radio_other_wallet"),subTitle:a("wallet_extension_default_radio_no_okx"),type:"OTHER"},{title:a("wallet_extension_default_radio_always_ask"),subTitle:a("wallet_extension_default_radio_reselect"),type:"HIJACK"}],u=(0,e.useCallback)(o=>{let s;switch(o){case"OKX":s="okx";break;case"OTHER":s="otherwallet";break;case"HIJACK":s="askeverytime";break;default:break}y({button_name:s}),p(f(o))},[p]),E=(0,e.useCallback)((o,s)=>{let c=x===o.type;return e.default.createElement(t.FlexBox,{key:s,className:(0,v.default)(i.option,{[i.active]:c}),onClick:()=>u(o.type),align:t.ALIGN.center},e.default.createElement(t.FlexBox,{className:i.left,direction:t.DIRECTION.vertical},e.default.createElement(l.Text,{size:l.SIZE.md,strong:500,className:i.optionTitle},o.title),o.subTitle&&e.default.createElement(l.Text,{size:l.SIZE.xs,type:l.TYPE.secondary,className:i.optionSubTitle},o.subTitle)),c&&e.default.createElement(t.FlexBox,null,e.default.createElement(m.Circle,{checked:!0})))},[x,u]);return e.default.createElement(t.Container,null,e.default.createElement(T,{closeable:!1,bordered:!1}),e.default.createElement(t.FlexBox,{className:i.textWrapper,direction:t.DIRECTION.vertical},e.default.createElement(l.Text,{strong:700,className:i.title},a("wallet_extension_default_title_set_as_default")),e.default.createElement(l.Text,{size:l.SIZE.sm,type:l.TYPE.secondary,className:i.subTitle},a("wallet_extension_default_subtitle_set_as_default"))),e.default.createElement(t.FlexBox,{direction:t.DIRECTION.vertical,className:i.content},k.map((o,s)=>E(o,s))))},U=I;export{U as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=DefaultWallet-AECH4ZRC.js.map
