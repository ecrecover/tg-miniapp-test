import{a as E,c as J,d as Ue,e as Q,h as tt,i as nt,j as xe,k as Le}from"./chunk-6FOZGMAL.js";import{d as A,e as rt}from"./chunk-X7YMANPZ.js";import{a as O}from"./chunk-6DDC4Y2S.js";import{c as b,f as w,m as d,o as v}from"./chunk-EQYVU4XP.js";var D=b((Bn,V)=>{d();v();function at(o){return o&&o.__esModule?o:{default:o}}V.exports=at,V.exports.__esModule=!0,V.exports.default=V.exports});var B=b((Ln,K)=>{d();v();var Ve,Ge,ze,Ie,$e,Je,Qe,Xe,Ye,Ze,Ke,ke,er,Y,be,rr,tr,nr,F,ar,ir,ur,or,sr,fr,cr,lr,dr,Z,vr,pr;(function(o){var n=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(c){o(s(n,s(c)))}):typeof K=="object"&&typeof K.exports=="object"?o(s(n,s(K.exports))):o(s(n));function s(c,e){return c!==n&&(typeof Object.create=="function"?Object.defineProperty(c,"__esModule",{value:!0}):c.__esModule=!0),function(r,t){return c[r]=e?e(r,t):t}}})(function(o){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])};Ve=function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");n(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)},Ge=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},ze=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(e);u<a.length;u++)r.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(e,a[u])&&(t[a[u]]=e[a[u]]);return t},Ie=function(e,r,t,a){var u=arguments.length,i=u<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,t):a,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,r,t,a);else for(var l=e.length-1;l>=0;l--)(f=e[l])&&(i=(u<3?f(i):u>3?f(r,t,i):f(r,t))||i);return u>3&&i&&Object.defineProperty(r,t,i),i},$e=function(e,r){return function(t,a){r(t,a,e)}},Je=function(e,r,t,a,u,i){function f(H){if(H!==void 0&&typeof H!="function")throw new TypeError("Function expected");return H}for(var l=a.kind,_=l==="getter"?"get":l==="setter"?"set":"value",p=!r&&e?a.static?e:e.prototype:null,y=r||(p?Object.getOwnPropertyDescriptor(p,a.name):{}),g,h=!1,T=t.length-1;T>=0;T--){var R={};for(var j in a)R[j]=j==="access"?{}:a[j];for(var j in a.access)R.access[j]=a.access[j];R.addInitializer=function(H){if(h)throw new TypeError("Cannot add initializers after decoration has completed");i.push(f(H||null))};var q=(0,t[T])(l==="accessor"?{get:y.get,set:y.set}:y[_],R);if(l==="accessor"){if(q===void 0)continue;if(q===null||typeof q!="object")throw new TypeError("Object expected");(g=f(q.get))&&(y.get=g),(g=f(q.set))&&(y.set=g),(g=f(q.init))&&u.unshift(g)}else(g=f(q))&&(l==="field"?u.unshift(g):y[_]=g)}p&&Object.defineProperty(p,a.name,y),h=!0},Qe=function(e,r,t){for(var a=arguments.length>2,u=0;u<r.length;u++)t=a?r[u].call(e,t):r[u].call(e);return a?t:void 0},Xe=function(e){return typeof e=="symbol"?e:"".concat(e)},Ye=function(e,r,t){return typeof r=="symbol"&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",r):r})},Ze=function(e,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,r)},Ke=function(e,r,t,a){function u(i){return i instanceof t?i:new t(function(f){f(i)})}return new(t||(t=Promise))(function(i,f){function l(y){try{p(a.next(y))}catch(g){f(g)}}function _(y){try{p(a.throw(y))}catch(g){f(g)}}function p(y){y.done?i(y.value):u(y.value).then(l,_)}p((a=a.apply(e,r||[])).next())})},ke=function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,u,i,f;return f={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function l(p){return function(y){return _([p,y])}}function _(p){if(a)throw new TypeError("Generator is already executing.");for(;f&&(f=0,p[0]&&(t=0)),t;)try{if(a=1,u&&(i=p[0]&2?u.return:p[0]?u.throw||((i=u.return)&&i.call(u),0):u.next)&&!(i=i.call(u,p[1])).done)return i;switch(u=0,i&&(p=[p[0]&2,i.value]),p[0]){case 0:case 1:i=p;break;case 4:return t.label++,{value:p[1],done:!1};case 5:t.label++,u=p[1],p=[0];continue;case 7:p=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(p[0]===6||p[0]===2)){t=0;continue}if(p[0]===3&&(!i||p[1]>i[0]&&p[1]<i[3])){t.label=p[1];break}if(p[0]===6&&t.label<i[1]){t.label=i[1],i=p;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(p);break}i[2]&&t.ops.pop(),t.trys.pop();continue}p=r.call(e,t)}catch(y){p=[6,y],u=0}finally{a=i=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},er=function(e,r){for(var t in e)t!=="default"&&!Object.prototype.hasOwnProperty.call(r,t)&&Z(r,e,t)},Z=Object.create?function(e,r,t,a){a===void 0&&(a=t);var u=Object.getOwnPropertyDescriptor(r,t);(!u||("get"in u?!r.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,a,u)}:function(e,r,t,a){a===void 0&&(a=t),e[a]=r[t]},Y=function(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],a=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},be=function(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var a=t.call(e),u,i=[],f;try{for(;(r===void 0||r-- >0)&&!(u=a.next()).done;)i.push(u.value)}catch(l){f={error:l}}finally{try{u&&!u.done&&(t=a.return)&&t.call(a)}finally{if(f)throw f.error}}return i},rr=function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(be(arguments[r]));return e},tr=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var a=Array(e),u=0,r=0;r<t;r++)for(var i=arguments[r],f=0,l=i.length;f<l;f++,u++)a[u]=i[f];return a},nr=function(e,r,t){if(t||arguments.length===2)for(var a=0,u=r.length,i;a<u;a++)(i||!(a in r))&&(i||(i=Array.prototype.slice.call(r,0,a)),i[a]=r[a]);return e.concat(i||Array.prototype.slice.call(r))},F=function(e){return this instanceof F?(this.v=e,this):new F(e)},ar=function(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=t.apply(e,r||[]),u,i=[];return u={},f("next"),f("throw"),f("return"),u[Symbol.asyncIterator]=function(){return this},u;function f(h){a[h]&&(u[h]=function(T){return new Promise(function(R,j){i.push([h,T,R,j])>1||l(h,T)})})}function l(h,T){try{_(a[h](T))}catch(R){g(i[0][3],R)}}function _(h){h.value instanceof F?Promise.resolve(h.value.v).then(p,y):g(i[0][2],h)}function p(h){l("next",h)}function y(h){l("throw",h)}function g(h,T){h(T),i.shift(),i.length&&l(i[0][0],i[0][1])}},ir=function(e){var r,t;return r={},a("next"),a("throw",function(u){throw u}),a("return"),r[Symbol.iterator]=function(){return this},r;function a(u,i){r[u]=e[u]?function(f){return(t=!t)?{value:F(e[u](f)),done:!1}:i?i(f):f}:i}},ur=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],t;return r?r.call(e):(e=typeof Y=="function"?Y(e):e[Symbol.iterator](),t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t);function a(i){t[i]=e[i]&&function(f){return new Promise(function(l,_){f=e[i](f),u(l,_,f.done,f.value)})}}function u(i,f,l,_){Promise.resolve(_).then(function(p){i({value:p,done:l})},f)}},or=function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e};var s=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r};sr=function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&Z(r,e,t);return s(r,e),r},fr=function(e){return e&&e.__esModule?e:{default:e}},cr=function(e,r,t,a){if(t==="a"&&!a)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?e!==r||!a:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?a:t==="a"?a.call(e):a?a.value:r.get(e)},lr=function(e,r,t,a,u){if(a==="m")throw new TypeError("Private method is not writable");if(a==="a"&&!u)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?e!==r||!u:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return a==="a"?u.call(e,t):u?u.value=t:r.set(e,t),t},dr=function(e,r){if(r===null||typeof r!="object"&&typeof r!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?r===e:e.has(r)},vr=function(e,r,t){if(r!=null){if(typeof r!="object"&&typeof r!="function")throw new TypeError("Object expected.");var a;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=r[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=r[Symbol.dispose]}if(typeof a!="function")throw new TypeError("Object not disposable.");e.stack.push({value:r,dispose:a,async:t})}else t&&e.stack.push({async:!0});return r};var c=typeof SuppressedError=="function"?SuppressedError:function(e,r,t){var a=new Error(t);return a.name="SuppressedError",a.error=e,a.suppressed=r,a};pr=function(e){function r(a){e.error=e.hasError?new c(a,e.error,"An error was suppressed during disposal."):a,e.hasError=!0}function t(){for(;e.stack.length;){var a=e.stack.pop();try{var u=a.dispose&&a.dispose.call(a.value);if(a.async)return Promise.resolve(u).then(t,function(i){return r(i),t()})}catch(i){r(i)}}if(e.hasError)throw e.error}return t()},o("__extends",Ve),o("__assign",Ge),o("__rest",ze),o("__decorate",Ie),o("__param",$e),o("__esDecorate",Je),o("__runInitializers",Qe),o("__propKey",Xe),o("__setFunctionName",Ye),o("__metadata",Ze),o("__awaiter",Ke),o("__generator",ke),o("__exportStar",er),o("__createBinding",Z),o("__values",Y),o("__read",be),o("__spread",rr),o("__spreadArrays",tr),o("__spreadArray",nr),o("__await",F),o("__asyncGenerator",ar),o("__asyncDelegator",ir),o("__asyncValues",ur),o("__makeTemplateObject",or),o("__importStar",sr),o("__importDefault",fr),o("__classPrivateFieldGet",cr),o("__classPrivateFieldSet",lr),o("__classPrivateFieldIn",dr),o("__addDisposableResource",vr),o("__disposeResources",pr)})});var mr=b(U=>{"use strict";d();v();Object.defineProperty(U,"__esModule",{value:!0});U.default=U.createUpdateEffect=void 0;var it=O(),_r=function(n){return function(s,c){var e=(0,it.useRef)(!1);n(function(){return function(){e.current=!1}},[]),n(function(){if(!e.current)e.current=!0;else return s()},c)}};U.createUpdateEffect=_r;var ut=_r;U.default=ut});var he=b(k=>{"use strict";d();v();Object.defineProperty(k,"__esModule",{value:!0});k.default=void 0;var ot=O(),st=mr(),ft=(0,st.createUpdateEffect)(ot.useEffect);k.default=ft});var hr=b(re=>{"use strict";d();v();var ct=D();Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var ee=B(),lt=O(),yr=ct(he()),br=function(n,s){var c=s.manual,e=s.ready,r=e===void 0?!0:e,t=s.defaultParams,a=t===void 0?[]:t,u=s.refreshDeps,i=u===void 0?[]:u,f=s.refreshDepsAction,l=(0,lt.useRef)(!1);return l.current=!1,(0,yr.default)(function(){!c&&r&&(l.current=!0,n.run.apply(n,(0,ee.__spreadArray)([],(0,ee.__read)(a),!1)))},[r]),(0,yr.default)(function(){l.current||c||(l.current=!0,f?f():n.refresh())},(0,ee.__spreadArray)([],(0,ee.__read)(i),!1)),{onBefore:function(){if(!r)return{stopNow:!0}}}};br.onInit=function(o){var n=o.ready,s=n===void 0?!0:n,c=o.manual;return{loading:!c&&s}};var dt=br;re.default=dt});var Pr=b(te=>{"use strict";d();v();var vt=D();Object.defineProperty(te,"__esModule",{value:!0});te.default=void 0;var gr=B(),pt=vt(tt()),ge=O(),_t=function(n,s){var c=s.debounceWait,e=s.debounceLeading,r=s.debounceTrailing,t=s.debounceMaxWait,a=(0,ge.useRef)(),u=(0,ge.useMemo)(function(){var i={};return e!==void 0&&(i.leading=e),r!==void 0&&(i.trailing=r),t!==void 0&&(i.maxWait=t),i},[e,r,t]);return(0,ge.useEffect)(function(){if(c){var i=n.runAsync.bind(n);return a.current=(0,pt.default)(function(f){f()},c,u),n.runAsync=function(){for(var f=[],l=0;l<arguments.length;l++)f[l]=arguments[l];return new Promise(function(_,p){var y;(y=a.current)===null||y===void 0||y.call(a,function(){i.apply(void 0,(0,gr.__spreadArray)([],(0,gr.__read)(f),!1)).then(_).catch(p)})})},function(){var f;(f=a.current)===null||f===void 0||f.cancel(),n.runAsync=i}}},[c,u]),c?{onCancel:function(){var f;(f=a.current)===null||f===void 0||f.cancel()}}:{}},mt=_t;te.default=mt});var wr=b(ne=>{"use strict";d();v();Object.defineProperty(ne,"__esModule",{value:!0});ne.default=void 0;var yt=O(),bt=function(n,s){var c=s.loadingDelay,e=s.ready,r=(0,yt.useRef)();if(!c)return{};var t=function(){r.current&&clearTimeout(r.current)};return{onBefore:function(){return t(),e!==!1&&(r.current=setTimeout(function(){n.setState({loading:!0})},c)),{loading:!1}},onFinally:function(){t()},onCancel:function(){t()}}},ht=bt;ne.default=ht});var G=b(ae=>{"use strict";d();v();Object.defineProperty(ae,"__esModule",{value:!0});ae.default=void 0;var gt=!!(typeof window<"u"&&window.document&&window.document.createElement),Pt=gt;ae.default=Pt});var ie=b(Pe=>{"use strict";d();v();var wt=D();Object.defineProperty(Pe,"__esModule",{value:!0});Pe.default=Dt;var Ot=wt(G());function Dt(){return Ot.default?document.visibilityState!=="hidden":!0}});var Tr=b(ue=>{"use strict";d();v();var Dr=D();Object.defineProperty(ue,"__esModule",{value:!0});ue.default=void 0;var Tt=Dr(G()),St=Dr(ie()),z=[];function Rt(o){return z.push(o),function(){var s=z.indexOf(o);z.splice(s,1)}}Tt.default&&(Or=function(){if(!!(0,St.default)())for(var n=0;n<z.length;n++){var s=z[n];s()}},window.addEventListener("visibilitychange",Or,!1));var Or,jt=Rt;ue.default=jt});var Sr=b(oe=>{"use strict";d();v();var Oe=D();Object.defineProperty(oe,"__esModule",{value:!0});oe.default=void 0;var we=O(),Ct=Oe(he()),qt=Oe(ie()),Et=Oe(Tr()),Mt=function(n,s){var c=s.pollingInterval,e=s.pollingWhenHidden,r=e===void 0?!0:e,t=s.pollingErrorRetryCount,a=t===void 0?-1:t,u=(0,we.useRef)(),i=(0,we.useRef)(),f=(0,we.useRef)(0),l=function(){var p;u.current&&clearTimeout(u.current),(p=i.current)===null||p===void 0||p.call(i)};return(0,Ct.default)(function(){c||l()},[c]),c?{onBefore:function(){l()},onError:function(){f.current+=1},onSuccess:function(){f.current=0},onFinally:function(){a===-1||a!==-1&&f.current<=a?u.current=setTimeout(function(){!r&&!(0,qt.default)()?i.current=(0,Et.default)(function(){n.refresh()}):n.refresh()},c):f.current=0},onCancel:function(){l()}}:{}},At=Mt;oe.default=At});var Te=b((pa,S)=>{d();v();function De(o){return S.exports=De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S.exports.__esModule=!0,S.exports.default=S.exports,De(o)}S.exports=De,S.exports.__esModule=!0,S.exports.default=S.exports});var Rr=b(se=>{"use strict";d();v();Object.defineProperty(se,"__esModule",{value:!0});se.default=void 0;var Ft=O();function Bt(o){var n=(0,Ft.useRef)(o);return n.current=o,n}var Ut=Bt;se.default=Ut});var Se=b(P=>{"use strict";d();v();var xt=D();Object.defineProperty(P,"__esModule",{value:!0});P.isUndef=P.isString=P.isObject=P.isNumber=P.isFunction=P.isBoolean=void 0;var Lt=xt(Te()),Nt=function(n){return n!==null&&(0,Lt.default)(n)==="object"};P.isObject=Nt;var Wt=function(n){return typeof n=="function"};P.isFunction=Wt;var Ht=function(n){return typeof n=="string"};P.isString=Ht;var Vt=function(n){return typeof n=="boolean"};P.isBoolean=Vt;var Gt=function(n){return typeof n=="number"};P.isNumber=Gt;var zt=function(n){return typeof n>"u"};P.isUndef=zt});var Re=b(fe=>{"use strict";d();v();Object.defineProperty(fe,"__esModule",{value:!0});fe.default=void 0;var It=!1,$t=It;fe.default=$t});var jr=b(ce=>{"use strict";d();v();var je=D();Object.defineProperty(ce,"__esModule",{value:!0});ce.default=void 0;var Jt=je(Te()),Qt=O(),Xt=je(Rr()),Yt=Se(),Zt=je(Re()),Kt=function(n){Zt.default&&((0,Yt.isFunction)(n)||console.error("useUnmount expected parameter is a function, got ".concat((0,Jt.default)(n))));var s=(0,Xt.default)(n);(0,Qt.useEffect)(function(){return function(){s.current()}},[])},kt=Kt;ce.default=kt});var qr=b(Ce=>{"use strict";d();v();Object.defineProperty(Ce,"__esModule",{value:!0});Ce.default=en;var Cr=B();function en(o,n){var s=!1;return function(){for(var c=[],e=0;e<arguments.length;e++)c[e]=arguments[e];s||(s=!0,o.apply(void 0,(0,Cr.__spreadArray)([],(0,Cr.__read)(c),!1)),setTimeout(function(){s=!1},n))}}});var Er=b(qe=>{"use strict";d();v();var rn=D();Object.defineProperty(qe,"__esModule",{value:!0});qe.default=nn;var tn=rn(G());function nn(){return tn.default&&typeof navigator.onLine<"u"?navigator.onLine:!0}});var Mr=b(le=>{"use strict";d();v();var Me=D();Object.defineProperty(le,"__esModule",{value:!0});le.default=void 0;var an=Me(G()),un=Me(ie()),on=Me(Er()),I=[];function sn(o){return I.push(o),function(){var s=I.indexOf(o);s>-1&&I.splice(s,1)}}an.default&&(Ee=function(){if(!(!(0,un.default)()||!(0,on.default)()))for(var n=0;n<I.length;n++){var s=I[n];s()}},window.addEventListener("visibilitychange",Ee,!1),window.addEventListener("focus",Ee,!1));var Ee,fn=sn;le.default=fn});var Fr=b(de=>{"use strict";d();v();var Ae=D();Object.defineProperty(de,"__esModule",{value:!0});de.default=void 0;var Ar=O(),cn=Ae(jr()),ln=Ae(qr()),dn=Ae(Mr()),vn=function(n,s){var c=s.refreshOnWindowFocus,e=s.focusTimespan,r=e===void 0?5e3:e,t=(0,Ar.useRef)(),a=function(){var i;(i=t.current)===null||i===void 0||i.call(t)};return(0,Ar.useEffect)(function(){if(c){var u=(0,ln.default)(n.refresh.bind(n),r);t.current=(0,dn.default)(function(){u()})}return function(){a()}},[c,r]),(0,cn.default)(function(){a()}),{}},pn=vn;de.default=pn});var Br=b(ve=>{"use strict";d();v();Object.defineProperty(ve,"__esModule",{value:!0});ve.default=void 0;var Fe=O(),_n=function(n,s){var c=s.retryInterval,e=s.retryCount,r=(0,Fe.useRef)(),t=(0,Fe.useRef)(0),a=(0,Fe.useRef)(!1);return e?{onBefore:function(){a.current||(t.current=0),a.current=!1,r.current&&clearTimeout(r.current)},onSuccess:function(){t.current=0},onError:function(){if(t.current+=1,e===-1||t.current<=e){var i=c??Math.min(1e3*Math.pow(2,t.current),3e4);r.current=setTimeout(function(){a.current=!0,n.refresh()},i)}else t.current=0},onCancel:function(){t.current=0,r.current&&clearTimeout(r.current)}}:{}},mn=_n;ve.default=mn});var Lr=b(pe=>{"use strict";d();v();var yn=D();Object.defineProperty(pe,"__esModule",{value:!0});pe.default=void 0;var Ur=B(),bn=yn(nt()),xr=O(),hn=function(n,s){var c=s.throttleWait,e=s.throttleLeading,r=s.throttleTrailing,t=(0,xr.useRef)(),a={};return e!==void 0&&(a.leading=e),r!==void 0&&(a.trailing=r),(0,xr.useEffect)(function(){if(c){var u=n.runAsync.bind(n);return t.current=(0,bn.default)(function(i){i()},c,a),n.runAsync=function(){for(var i=[],f=0;f<arguments.length;f++)i[f]=arguments[f];return new Promise(function(l,_){var p;(p=t.current)===null||p===void 0||p.call(t,function(){u.apply(void 0,(0,Ur.__spreadArray)([],(0,Ur.__read)(i),!1)).then(l).catch(_)})})},function(){var i;n.runAsync=u,(i=t.current)===null||i===void 0||i.cancel()}}},[c,e,r]),c?{onCancel:function(){var i;(i=t.current)===null||i===void 0||i.cancel()}}:{}},gn=hn;pe.default=gn});var Wr=b(C=>{"use strict";d();v();Object.defineProperty(C,"__esModule",{value:!0});C.setCache=C.getCache=C.clearCache=void 0;var Nr=B(),x=new Map,Pn=function(n,s,c){var e=x.get(n);e?.timer&&clearTimeout(e.timer);var r=void 0;s>-1&&(r=setTimeout(function(){x.delete(n)},s)),x.set(n,(0,Nr.__assign)((0,Nr.__assign)({},c),{timer:r}))};C.setCache=Pn;var wn=function(n){return x.get(n)};C.getCache=wn;var On=function(n){if(n){var s=Array.isArray(n)?n:[n];s.forEach(function(c){return x.delete(c)})}else x.clear()};C.clearCache=On});var Hr=b(L=>{"use strict";d();v();Object.defineProperty(L,"__esModule",{value:!0});L.setCachePromise=L.getCachePromise=void 0;var _e=new Map,Dn=function(n){return _e.get(n)};L.getCachePromise=Dn;var Tn=function(n,s){_e.set(n,s),s.then(function(c){return _e.delete(n),c}).catch(function(){_e.delete(n)})};L.setCachePromise=Tn});var Vr=b(N=>{"use strict";d();v();Object.defineProperty(N,"__esModule",{value:!0});N.trigger=N.subscribe=void 0;var M={},Sn=function(n,s){M[n]&&M[n].forEach(function(c){return c(s)})};N.trigger=Sn;var Rn=function(n,s){return M[n]||(M[n]=[]),M[n].push(s),function(){var e=M[n].indexOf(s);M[n].splice(e,1)}};N.subscribe=Rn});d();v();d();v();rt();var Ne=!1,X=new Map;async function We(o,n,s){let{uiData:c}=await A.get("uiData"),e=c?.[o];e?.timer&&clearTimeout(e.timer);let r;n&&n>-1&&(r=+setTimeout(async()=>{let{uiData:a}=await A.get("uiData");a?.[o]&&(delete c?.[o],X.delete(o),await A.set({uiData:c}))},n));let t={...s,timer:r};return X.set(o,t),A.set({uiData:{...c??{},[o]:t}})}async function He(o){let n=X.get(o);if(n)return n;let{uiData:s}=await A.get("uiData"),c=s?.[o];return!Ne&&s&&(Object.entries(s).forEach(([e,r])=>{X.set(e,r)}),Ne=!0),c}d();v();var Jr=w(hr()),Qr=w(Pr()),Xr=w(wr()),Yr=w(Sr()),Zr=w(Fr()),Kr=w(Br()),kr=w(Lr());d();v();var Be=w(O());var me=w(Wr()),ye=w(Hr()),W=w(Vr()),jn=(o,{cacheKey:n,cacheTime:s=5*60*1e3,staleTime:c=0,setCache:e,getCache:r})=>{let t=(0,Be.useRef)(),a=(0,Be.useRef)(),u=async(f,l)=>{e?await e(l):(0,me.setCache)(f,s,l),(0,W.trigger)(f,l.data)},i=(f,l=[])=>r?r(l):(0,me.getCache)(f);return J(async()=>{if(!n)return;let f=await i(n);f&&Object.hasOwnProperty.call(f,"data")&&(o.state.data=f.data,o.state.params=f.params,(c===-1||new Date().getTime()-f.time<=c)&&(o.state.loading=!1)),t.current=(0,W.subscribe)(n,l=>{o.setState({data:l})})},[]),Q(()=>{t.current?.()}),n?{onBefore:async f=>{let l=await i(n,f);return!l||!Object.hasOwnProperty.call(l,"data")?{}:c===-1||new Date().getTime()-l.time<=c?{loading:!1,data:l?.data,error:void 0,returnNow:!0}:{data:l?.data,error:void 0}},onRequest:(f,l)=>{let _=(0,ye.getCachePromise)(n);return _&&_!==a.current?{servicePromise:_}:(_=f(...l),a.current=_,(0,ye.setCachePromise)(n,_),{servicePromise:_})},onSuccess:async(f,l)=>{n&&(t.current?.(),await u(n,{data:f,params:l,time:new Date().getTime()}),t.current=(0,W.subscribe)(n,_=>{o.setState({data:_})}))},onMutate:f=>{n&&(t.current?.(),u(n,{data:f,params:o.state.params,time:new Date().getTime()}),t.current=(0,W.subscribe)(n,l=>{o.setState({data:l})}))}}:{}},Gr=jn;d();v();var Ir=w(Re());d();v();var zr=w(Se()),$=class{constructor(n,s,c,e={}){this.serviceRef=n;this.options=s;this.subscribe=c;this.initState=e;this.count=0;this.state={loading:!1,params:void 0,data:void 0,error:void 0};this.state={...this.state,loading:!s.manual,...e}}setState(n={}){this.state={...this.state,...n},this.subscribe()}async runPluginHandler(n,...s){let e=(await Promise.allSettled(this.pluginImpls.map(r=>r[n]?.(...s)))).filter(r=>r.status==="fulfilled").map(r=>r.value).filter(Boolean);return Object.assign({},...e)}async runAsync(...n){this.count+=1;let s=this.count,{stopNow:c=!1,returnNow:e=!1,...r}=await this.runPluginHandler("onBefore",n);if(c)return new Promise(()=>{});if(this.setState({loading:!0,params:n,...r}),e)return Promise.resolve(r.data);this.options.onBefore?.(n);try{let{servicePromise:t}=await this.runPluginHandler("onRequest",this.serviceRef.current,n);t||(t=this.serviceRef.current(...n));let a=await t;return s!==this.count?await new Promise(()=>{}):(this.setState({data:a,error:void 0,loading:!1}),this.options.onSuccess?.(a,n),this.runPluginHandler("onSuccess",a,n),this.options.onFinally?.(n,a,void 0),s===this.count&&this.runPluginHandler("onFinally",n,a,void 0),a)}catch(t){if(s!==this.count)return new Promise(()=>{});throw this.setState({error:t,loading:!1}),this.options.onError?.(t,n),this.runPluginHandler("onError",t,n),this.options.onFinally?.(n,void 0,t),s===this.count&&this.runPluginHandler("onFinally",n,void 0,t),t}}run(...n){this.runAsync(...n).catch(s=>{this.options.onError||console.error(s)})}cancel(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")}refresh(){this.run(...this.state.params||[])}refreshAsync(){return this.runAsync(...this.state.params||[])}mutate(n){let s=(0,zr.isFunction)(n)?n(this.state.data):n;this.runPluginHandler("onMutate",s),this.setState({data:s})}};function Cn(o,n={},s=[]){let{manual:c=!1,...e}=n;Ir.default&&n.defaultParams&&!Array.isArray(n.defaultParams)&&console.warn(`expected defaultParams is array, got ${typeof n.defaultParams}`);let r={manual:c,...e},t=Ue(o),a=Le(),u=J(()=>{let i=s.map(f=>f?.onInit?.(r)).filter(Boolean);return new $(t,r,a,Object.assign({},...i))},[]);return u.options=r,u.pluginImpls=s.map(i=>i(u,r)),xe(()=>{if(!c){let i=u.state.params||n.defaultParams||[];u.run(...i)}}),Q(()=>{u.cancel()}),{loading:u.state.loading,data:u.state.data,error:u.state.error,params:u.state.params||[],cancel:E(u.cancel.bind(u)),refresh:E(u.refresh.bind(u)),refreshAsync:E(u.refreshAsync.bind(u)),run:E(u.run.bind(u)),runAsync:E(u.runAsync.bind(u)),mutate:E(u.mutate.bind(u))}}var $r=Cn;function qn(o,n,s){return $r(o,n,[...s||[],Qr.default,Xr.default,Yr.default,Zr.default,kr.default,Jr.default,Gr,Kr.default])}var et=qn;function Pi(o,n,s){let c=n?.cacheKey;return et(o,{...n??{},setCache:async e=>c?We(c,n?.cacheTime,e):!1,getCache:async()=>{if(c)return He(c)}},s)}export{Pi as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "prepub";

//# sourceMappingURL=chunk-J66MHRNB.js.map
