import{a as A}from"./chunk-2Z67QKK5.js";import{c as M}from"./chunk-EX22SDGB.js";import"./chunk-G5LEAVCY.js";import"./chunk-ACHWU2H6.js";import"./chunk-ZPFBKNRM.js";import{q as P}from"./chunk-7DP5LYUM.js";import{a as h}from"./chunk-BVXKJJ4A.js";import"./chunk-TBBE7OKY.js";import"./chunk-7HJDVUH5.js";import"./chunk-D5FMQLJG.js";import{d as T}from"./chunk-3I7UBQEQ.js";import"./chunk-S6TPD26J.js";import"./chunk-QEPBNPHF.js";import"./chunk-3JLS3TGD.js";import"./chunk-KDP5Z4RF.js";import"./chunk-W234FNSM.js";import{c as w}from"./chunk-TUYGHQPT.js";import"./chunk-CLWWTOKP.js";import{a as f}from"./chunk-KZ2PCELG.js";import"./chunk-C7ZG4INB.js";import"./chunk-J5ANWCEO.js";import{w as l}from"./chunk-VMO2INN3.js";import"./chunk-J4TF3RT7.js";import"./chunk-6FOZGMAL.js";import{ea as N}from"./chunk-2MV3WEYP.js";import"./chunk-HPXM6RSK.js";import"./chunk-IUIJ46C3.js";import"./chunk-KZ3ZU675.js";import"./chunk-NJ5CWPUY.js";import"./chunk-UMJMJOW4.js";import"./chunk-YTJBYVBO.js";import"./chunk-QO3243S4.js";import"./chunk-O5JCC6KG.js";import"./chunk-MAIAJ7GD.js";import"./chunk-4PGNX6E2.js";import"./chunk-MGLVPWSV.js";import"./chunk-TXKWPME2.js";import"./chunk-4D3M2I6W.js";import"./chunk-AMVK42SC.js";import"./chunk-D6RIE45O.js";import"./chunk-XCAARJ7Q.js";import{c as s}from"./chunk-JXCCIV3J.js";import"./chunk-AOA7NX2Y.js";import"./chunk-HXZH2DHB.js";import"./chunk-MZG4RHXJ.js";import"./chunk-VTST2UXT.js";import{Hc as d}from"./chunk-X7YMANPZ.js";import"./chunk-IRITFTWC.js";import{L as i}from"./chunk-SOHTSUTI.js";import{I as v,w as n}from"./chunk-RPZQDAIQ.js";import"./chunk-LDRI4AYU.js";import"./chunk-E24EBHFY.js";import"./chunk-V4F2JFTP.js";import{a as K}from"./chunk-6DDC4Y2S.js";import"./chunk-KJOC4LFM.js";import"./chunk-6FDO4Y56.js";import"./chunk-NNZ5SU5W.js";import"./chunk-YUXYCITH.js";import"./chunk-TEKDZ77C.js";import"./chunk-NC54RUAI.js";import"./chunk-YR74Q3QD.js";import{f as O,m as r,o as a}from"./chunk-EQYVU4XP.js";r();a();var e=O(K());v();r();a();var m={MNEMONIC:"MNEMONIC",PRIVATEKEY:"PRIVATEKEY"};r();a();var t={root:"_root_12r79_1",title:"_title_12r79_4","sub-title":"_sub-title_12r79_9",subTitle:"_sub-title_12r79_9",list:"_list_12r79_13",tabs:"_tabs_12r79_16","tabs-header":"_tabs-header_12r79_19",tabsHeader:"_tabs-header_12r79_19"};var x=()=>{let c=h(),p=c.get("type"),o=M(c.get("keyringId")),b=P(o?.keyringId),u=o?.keyringIdentityType===d.PRIVATE_KEY,E=o?.keyringIdentityType===d.TON_MNEMONIC,S=![m.MNEMONIC,m.PRIVATEKEY].includes(p)&&!u&&!E,k=(0,e.useCallback)(y=>{try{let _=o?.keyringId;y&&_&&w({k:_})}catch{}},[]),I=e.default.createElement(s.Space,{className:t.root,direction:s.DIRECTION.vertical,space:0},e.default.createElement(s.Space,{space:8,direction:s.DIRECTION.vertical},e.default.createElement(l.Text,{strong:700,className:t.title},n("wallet_backup_wallet_subtitle_write_down_the_seed_phase")),e.default.createElement(l.Text,{size:l.SIZE.sm,className:t.subTitle},n("wallet_backup_wallet_subtitle_write_down_seed_phase"))),b&&e.default.createElement(A,{words:b,onToggleShow:k})),g=e.default.createElement(T,{className:t.list,dataSource:o?.walletIdentities,renderItem:({walletName:y,walletAsset:_,walletId:L})=>e.default.createElement(T.Cell,{isLink:!0,title:y,to:`${N}?walletId=${L}`,desc:e.default.createElement(l.DisplayAmount,{noStyle:!0,useApproximate:!1,mode:l.LEGAL},_)})});return e.default.createElement(s.Container,null,e.default.createElement(f,{title:o?.keyringName}),S&&e.default.createElement(i.Segmented,{average:!0,className:t.tabs,headerClassName:t.tabsHeader,size:i.SIZE.sm,color:i.COLOR.grey},e.default.createElement(i.TabPane,{id:"1",tab:n("wallet_addwallet_btn_import_seed_phase")},I),e.default.createElement(i.TabPane,{id:"2",tab:n("wallet_addwallet_btn_import_private_key")},g)),(p===m.MNEMONIC||E)&&I,(p===m.PRIVATEKEY||u)&&g)},se=e.default.memo(x);export{se as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=WalletMnemonicAndPrivateKey-NU5G5PV2.js.map
