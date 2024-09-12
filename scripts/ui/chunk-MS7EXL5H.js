import{e as w}from"./chunk-ILYGYWTN.js";import{ia as f,ja as g}from"./chunk-QZDHFNHK.js";import{d as l,f as _}from"./chunk-MNNY2ODL.js";import{qc as m}from"./chunk-QG673PNL.js";import{m as e,o as i}from"./chunk-REC7XVZY.js";e();i();_();var h=async({nonce:t=0,localType:a="",fromAddr:n="",walletId:r="",messages:o="",network:p,validUntil:d})=>{if(a){let{TonWallet:y}=await m(),P=new y,W=await l().getPublicKeyByWalletId(r,a),T={workChain:g,publicKey:W,walletVersion:f},c=await P.getWalletInformation(T),u={messages:o,seqno:t||0,network:p,valid_until:d},{transaction:k}=await l().simulateMultiTransaction(n,r,u),s={address:n,body:k,ignore_chksig:!0};return t===0&&(s.init_code=c.initCode,s.init_data=c.initData),{transactionParams:u,stringInputParams:s}}return{}},B=h;e();i();var x=async({fromAddr:t,chainId:a,coinId:n,inputData:r=""})=>{if(r&&t&&a&&n)try{return await w({address:t,chainId:a,coinId:n,value:"0",inputData:r})}catch(o){return{error:!0,...o}}return{}},q=x;export{B as a,q as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-MS7EXL5H.js.map
