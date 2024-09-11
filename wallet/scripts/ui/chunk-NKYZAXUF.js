import{g as i}from"./chunk-7KCWBFQ2.js";import{db as s,mb as c}from"./chunk-HPXM6RSK.js";import{d as a,f as I}from"./chunk-MAIAJ7GD.js";import{Jc as n}from"./chunk-X7YMANPZ.js";import{m as r,o}from"./chunk-EQYVU4XP.js";r();o();I();var W=l=>async(x,d)=>{let e=d(),t=s(e),m=c(e,t)?.serverWalletType,p=await a().getSignRequestHeaders({walletId:t}),u={txSource:n.NORMAL,accountId:t,walletType:m,...l};return await i(u,{headers:p})};export{W as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-NKYZAXUF.js.map
