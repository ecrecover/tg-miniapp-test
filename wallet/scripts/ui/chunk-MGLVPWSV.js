import{$ as b,A as G,D as W,G as y,J as U,M as k,P as B,S as K,V as H,Y,b as T,ca as X,f as E,fa as Q,i as M,ia as j,l as v,o as L,r as a,u as w,x as F}from"./chunk-TXKWPME2.js";import{A as N,E as C,F as P,G as l,H as u,I as V,J as x,K as f,M as g,N as h,o as i,q as O,r as d,s as p,t as m,u as A,v as D,z as I,za as tt}from"./chunk-X7YMANPZ.js";import{m as e,o}from"./chunk-EQYVU4XP.js";e();o();e();o();e();o();async function J(r){try{await(await T.connect_records).set(r)}catch{console.log("set data failed")}}async function st(r){return(await T.connect_records).query(r)}var et=["eth_requestAccounts","wallet_requestWallets","wallet_requestPermissions","wallet_switchEthereumChain","eth_sendTransaction","signTransaction","signAndSubmitTransaction","signAmino","signAndExecuteTransaction","signAndSendTransaction","signAllTransactions"],n={"okx6963-provider":"okx6963-provider","ethereum-provider":"ethereum-provider"};function ot({origin:r}){return function(t,rt,_){try{let{method:s,params:Z}=t,$=s==="wallet_wallets"&&Z?.isInit,q=t.params?.providerType||t.providerType||E,c=t?.calledThroughEthereum?n["ethereum-provider"]:q;t?.calledThrough6963&&(c=n["okx6963-provider"]);let S={dappUrl:r,lastConnectTime:Date.now(),provider:c,method:s};c===a&&(S.exts=t.params?.exts),!$&&et.includes(s)&&J(S),_()}catch{_()}}}tt();var dt="static/images/default-img.svg",pt="static/images/default-img/default-chain.svg",mt="static/images/default-img/default-coin.svg",Dt="static/images/default-img/default-dapp.svg",Nt="/static/images/tx-history/default-nft.svg",Ct="Unknown",Pt="/static/images/default-img.svg",lt={[E]:i,[M]:A,[v]:I,[L]:D,[a]:N,[w]:A,[F]:C,[G]:I,[W]:O,[y]:P,[U]:u,[B]:d,[K]:p,[H]:m,[k]:V,[Y]:x,[b]:f,[X]:g,[Q]:l,[j]:h,[n["ethereum-provider"]]:i,[n["okx6963-provider"]]:i},ut={SEND:"send",RECEIVE:"receive"};export{st as a,n as b,ot as c,dt as d,pt as e,mt as f,Dt as g,Nt as h,Ct as i,Pt as j,lt as k,ut as l};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-MGLVPWSV.js.map
