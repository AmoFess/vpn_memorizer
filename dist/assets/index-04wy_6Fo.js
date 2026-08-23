(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))N(j);new MutationObserver(j=>{for(const O of j)if(O.type==="childList")for(const G of O.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&N(G)}).observe(document,{childList:!0,subtree:!0});function p(j){const O={};return j.integrity&&(O.integrity=j.integrity),j.referrerPolicy&&(O.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?O.credentials="include":j.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function N(j){if(j.ep)return;j.ep=!0;const O=p(j);fetch(j.href,O)}})();function ec(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Ls={exports:{}},_r={},Ds={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu;function Jd(){if(Vu)return H;Vu=1;var c=Symbol.for("react.element"),y=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),G=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),U=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Y=Symbol.iterator;function D(f){return f===null||typeof f!="object"?null:(f=Y&&f[Y]||f["@@iterator"],typeof f=="function"?f:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ce=Object.assign,q={};function te(f,x,$){this.props=f,this.context=x,this.refs=q,this.updater=$||S}te.prototype.isReactComponent={},te.prototype.setState=function(f,x){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,x,"setState")},te.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function un(){}un.prototype=te.prototype;function nn(f,x,$){this.props=f,this.context=x,this.refs=q,this.updater=$||S}var Ke=nn.prototype=new un;Ke.constructor=nn,ce(Ke,te.prototype),Ke.isPureReactComponent=!0;var _e=Array.isArray,Oe=Object.prototype.hasOwnProperty,I={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function X(f,x,$){var W,Z={},J=null,se=null;if(x!=null)for(W in x.ref!==void 0&&(se=x.ref),x.key!==void 0&&(J=""+x.key),x)Oe.call(x,W)&&!Q.hasOwnProperty(W)&&(Z[W]=x[W]);var le=arguments.length-2;if(le===1)Z.children=$;else if(1<le){for(var de=Array(le),qe=0;qe<le;qe++)de[qe]=arguments[qe+2];Z.children=de}if(f&&f.defaultProps)for(W in le=f.defaultProps,le)Z[W]===void 0&&(Z[W]=le[W]);return{$$typeof:c,type:f,key:J,ref:se,props:Z,_owner:I.current}}function re(f,x){return{$$typeof:c,type:f.type,key:x,ref:f.ref,props:f.props,_owner:f._owner}}function Ge(f){return typeof f=="object"&&f!==null&&f.$$typeof===c}function cn(f){var x={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function($){return x[$]})}var Ue=/\/+/g;function Re(f,x){return typeof f=="object"&&f!==null&&f.key!=null?cn(""+f.key):x.toString(36)}function be(f,x,$,W,Z){var J=typeof f;(J==="undefined"||J==="boolean")&&(f=null);var se=!1;if(f===null)se=!0;else switch(J){case"string":case"number":se=!0;break;case"object":switch(f.$$typeof){case c:case y:se=!0}}if(se)return se=f,Z=Z(se),f=W===""?"."+Re(se,0):W,_e(Z)?($="",f!=null&&($=f.replace(Ue,"$&/")+"/"),be(Z,x,$,"",function(qe){return qe})):Z!=null&&(Ge(Z)&&(Z=re(Z,$+(!Z.key||se&&se.key===Z.key?"":(""+Z.key).replace(Ue,"$&/")+"/")+f)),x.push(Z)),1;if(se=0,W=W===""?".":W+":",_e(f))for(var le=0;le<f.length;le++){J=f[le];var de=W+Re(J,le);se+=be(J,x,$,de,Z)}else if(de=D(f),typeof de=="function")for(f=de.call(f),le=0;!(J=f.next()).done;)J=J.value,de=W+Re(J,le++),se+=be(J,x,$,de,Z);else if(J==="object")throw x=String(f),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return se}function gn(f,x,$){if(f==null)return f;var W=[],Z=0;return be(f,W,"","",function(J){return x.call($,J,Z++)}),W}function Ae(f){if(f._status===-1){var x=f._result;x=x(),x.then(function($){(f._status===0||f._status===-1)&&(f._status=1,f._result=$)},function($){(f._status===0||f._status===-1)&&(f._status=2,f._result=$)}),f._status===-1&&(f._status=0,f._result=x)}if(f._status===1)return f._result.default;throw f._result}var he={current:null},E={transition:null},b={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:E,ReactCurrentOwner:I};function T(){throw Error("act(...) is not supported in production builds of React.")}return H.Children={map:gn,forEach:function(f,x,$){gn(f,function(){x.apply(this,arguments)},$)},count:function(f){var x=0;return gn(f,function(){x++}),x},toArray:function(f){return gn(f,function(x){return x})||[]},only:function(f){if(!Ge(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},H.Component=te,H.Fragment=p,H.Profiler=j,H.PureComponent=nn,H.StrictMode=N,H.Suspense=L,H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b,H.act=T,H.cloneElement=function(f,x,$){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var W=ce({},f.props),Z=f.key,J=f.ref,se=f._owner;if(x!=null){if(x.ref!==void 0&&(J=x.ref,se=I.current),x.key!==void 0&&(Z=""+x.key),f.type&&f.type.defaultProps)var le=f.type.defaultProps;for(de in x)Oe.call(x,de)&&!Q.hasOwnProperty(de)&&(W[de]=x[de]===void 0&&le!==void 0?le[de]:x[de])}var de=arguments.length-2;if(de===1)W.children=$;else if(1<de){le=Array(de);for(var qe=0;qe<de;qe++)le[qe]=arguments[qe+2];W.children=le}return{$$typeof:c,type:f.type,key:Z,ref:J,props:W,_owner:se}},H.createContext=function(f){return f={$$typeof:G,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:O,_context:f},f.Consumer=f},H.createElement=X,H.createFactory=function(f){var x=X.bind(null,f);return x.type=f,x},H.createRef=function(){return{current:null}},H.forwardRef=function(f){return{$$typeof:B,render:f}},H.isValidElement=Ge,H.lazy=function(f){return{$$typeof:ne,_payload:{_status:-1,_result:f},_init:Ae}},H.memo=function(f,x){return{$$typeof:U,type:f,compare:x===void 0?null:x}},H.startTransition=function(f){var x=E.transition;E.transition={};try{f()}finally{E.transition=x}},H.unstable_act=T,H.useCallback=function(f,x){return he.current.useCallback(f,x)},H.useContext=function(f){return he.current.useContext(f)},H.useDebugValue=function(){},H.useDeferredValue=function(f){return he.current.useDeferredValue(f)},H.useEffect=function(f,x){return he.current.useEffect(f,x)},H.useId=function(){return he.current.useId()},H.useImperativeHandle=function(f,x,$){return he.current.useImperativeHandle(f,x,$)},H.useInsertionEffect=function(f,x){return he.current.useInsertionEffect(f,x)},H.useLayoutEffect=function(f,x){return he.current.useLayoutEffect(f,x)},H.useMemo=function(f,x){return he.current.useMemo(f,x)},H.useReducer=function(f,x,$){return he.current.useReducer(f,x,$)},H.useRef=function(f){return he.current.useRef(f)},H.useState=function(f){return he.current.useState(f)},H.useSyncExternalStore=function(f,x,$){return he.current.useSyncExternalStore(f,x,$)},H.useTransition=function(){return he.current.useTransition()},H.version="18.3.1",H}var Fu;function As(){return Fu||(Fu=1,Ds.exports=Jd()),Ds.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function ef(){if(Uu)return _r;Uu=1;var c=As(),y=Symbol.for("react.element"),p=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,j=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function G(B,L,U){var ne,Y={},D=null,S=null;U!==void 0&&(D=""+U),L.key!==void 0&&(D=""+L.key),L.ref!==void 0&&(S=L.ref);for(ne in L)N.call(L,ne)&&!O.hasOwnProperty(ne)&&(Y[ne]=L[ne]);if(B&&B.defaultProps)for(ne in L=B.defaultProps,L)Y[ne]===void 0&&(Y[ne]=L[ne]);return{$$typeof:y,type:B,key:D,ref:S,props:Y,_owner:j.current}}return _r.Fragment=p,_r.jsx=G,_r.jsxs=G,_r}var bu;function nf(){return bu||(bu=1,Ls.exports=ef()),Ls.exports}var s=nf(),ye=As();const tf=ec(ye);var zl={},zs={exports:{}},Ye={},Ms={exports:{}},Os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function rf(){return Au||(Au=1,(function(c){function y(E,b){var T=E.length;E.push(b);e:for(;0<T;){var f=T-1>>>1,x=E[f];if(0<j(x,b))E[f]=b,E[T]=x,T=f;else break e}}function p(E){return E.length===0?null:E[0]}function N(E){if(E.length===0)return null;var b=E[0],T=E.pop();if(T!==b){E[0]=T;e:for(var f=0,x=E.length,$=x>>>1;f<$;){var W=2*(f+1)-1,Z=E[W],J=W+1,se=E[J];if(0>j(Z,T))J<x&&0>j(se,Z)?(E[f]=se,E[J]=T,f=J):(E[f]=Z,E[W]=T,f=W);else if(J<x&&0>j(se,T))E[f]=se,E[J]=T,f=J;else break e}}return b}function j(E,b){var T=E.sortIndex-b.sortIndex;return T!==0?T:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var O=performance;c.unstable_now=function(){return O.now()}}else{var G=Date,B=G.now();c.unstable_now=function(){return G.now()-B}}var L=[],U=[],ne=1,Y=null,D=3,S=!1,ce=!1,q=!1,te=typeof setTimeout=="function"?setTimeout:null,un=typeof clearTimeout=="function"?clearTimeout:null,nn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ke(E){for(var b=p(U);b!==null;){if(b.callback===null)N(U);else if(b.startTime<=E)N(U),b.sortIndex=b.expirationTime,y(L,b);else break;b=p(U)}}function _e(E){if(q=!1,Ke(E),!ce)if(p(L)!==null)ce=!0,Ae(Oe);else{var b=p(U);b!==null&&he(_e,b.startTime-E)}}function Oe(E,b){ce=!1,q&&(q=!1,un(X),X=-1),S=!0;var T=D;try{for(Ke(b),Y=p(L);Y!==null&&(!(Y.expirationTime>b)||E&&!cn());){var f=Y.callback;if(typeof f=="function"){Y.callback=null,D=Y.priorityLevel;var x=f(Y.expirationTime<=b);b=c.unstable_now(),typeof x=="function"?Y.callback=x:Y===p(L)&&N(L),Ke(b)}else N(L);Y=p(L)}if(Y!==null)var $=!0;else{var W=p(U);W!==null&&he(_e,W.startTime-b),$=!1}return $}finally{Y=null,D=T,S=!1}}var I=!1,Q=null,X=-1,re=5,Ge=-1;function cn(){return!(c.unstable_now()-Ge<re)}function Ue(){if(Q!==null){var E=c.unstable_now();Ge=E;var b=!0;try{b=Q(!0,E)}finally{b?Re():(I=!1,Q=null)}}else I=!1}var Re;if(typeof nn=="function")Re=function(){nn(Ue)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,gn=be.port2;be.port1.onmessage=Ue,Re=function(){gn.postMessage(null)}}else Re=function(){te(Ue,0)};function Ae(E){Q=E,I||(I=!0,Re())}function he(E,b){X=te(function(){E(c.unstable_now())},b)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(E){E.callback=null},c.unstable_continueExecution=function(){ce||S||(ce=!0,Ae(Oe))},c.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<E?Math.floor(1e3/E):5},c.unstable_getCurrentPriorityLevel=function(){return D},c.unstable_getFirstCallbackNode=function(){return p(L)},c.unstable_next=function(E){switch(D){case 1:case 2:case 3:var b=3;break;default:b=D}var T=D;D=b;try{return E()}finally{D=T}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=D;D=E;try{return b()}finally{D=T}},c.unstable_scheduleCallback=function(E,b,T){var f=c.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?f+T:f):T=f,E){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=T+x,E={id:ne++,callback:b,priorityLevel:E,startTime:T,expirationTime:x,sortIndex:-1},T>f?(E.sortIndex=T,y(U,E),p(L)===null&&E===p(U)&&(q?(un(X),X=-1):q=!0,he(_e,T-f))):(E.sortIndex=x,y(L,E),ce||S||(ce=!0,Ae(Oe))),E},c.unstable_shouldYield=cn,c.unstable_wrapCallback=function(E){var b=D;return function(){var T=D;D=b;try{return E.apply(this,arguments)}finally{D=T}}}})(Os)),Os}var Bu;function lf(){return Bu||(Bu=1,Ms.exports=rf()),Ms.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function of(){if($u)return Ye;$u=1;var c=As(),y=lf();function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N=new Set,j={};function O(e,n){G(e,n),G(e+"Capture",n)}function G(e,n){for(j[e]=n,e=0;e<n.length;e++)N.add(n[e])}var B=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ne={},Y={};function D(e){return L.call(Y,e)?!0:L.call(ne,e)?!1:U.test(e)?Y[e]=!0:(ne[e]=!0,!1)}function S(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ce(e,n,t,r){if(n===null||typeof n>"u"||S(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function q(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new q(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){te[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){te[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){te[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){te[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var un=/[\-:]([a-z])/g;function nn(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(un,nn);te[n]=new q(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(un,nn);te[n]=new q(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(un,nn);te[n]=new q(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){te[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),te.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){te[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ke(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ce(n,t,l,r)&&(t=null),r||l===null?D(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var _e=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),I=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),Ge=Symbol.for("react.provider"),cn=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),gn=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),E=Symbol.iterator;function b(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,f;function x(e){if(f===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);f=n&&n[1]||""}return`
`+f+e}var $=!1;function W(e,n){if(!e||$)return"";$=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var r=v}Reflect.construct(e,[],n)}else{try{n.call()}catch(v){r=v}e.call(n.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var l=v.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{$=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?x(e):""}function Z(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1),e;case 11:return e=W(e.type.render,!1),e;case 1:return e=W(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case I:return"Portal";case re:return"Profiler";case X:return"StrictMode";case Re:return"Suspense";case be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cn:return(e.displayName||"Context")+".Consumer";case Ge:return(e._context.displayName||"Context")+".Provider";case Ue:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gn:return n=e.displayName||null,n!==null?n:J(e.type)||"Memo";case Ae:n=e._payload,e=e._init;try{return J(e(n))}catch{}}return null}function se(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(n);case 8:return n===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e){var n=de(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sr(e){e._valueTracker||(e._valueTracker=qe(e))}function $s(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=de(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,n){var t=n.checked;return T({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Hs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=le(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ws(e,n){n=n.checked,n!=null&&Ke(e,"checked",n,!1)}function Fl(e,n){Ws(e,n);var t=le(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ul(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ul(e,n.type,le(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Qs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ul(e,n,t){(n!=="number"||Nr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ot=Array.isArray;function ct(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+le(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function bl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(p(91));return T({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ys(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(p(92));if(Ot(t)){if(1<t.length)throw Error(p(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:le(t)}}function Ks(e,n){var t=le(n.value),r=le(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Xs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function It(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rc=["Webkit","ms","Moz","O"];Object.keys(Vt).forEach(function(e){rc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Vt[n]=Vt[e]})});function Zs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Vt.hasOwnProperty(e)&&Vt[e]?(""+n).trim():n+"px"}function Js(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Zs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var lc=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,n){if(n){if(lc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(p(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(p(61))}if(n.style!=null&&typeof n.style!="object")throw Error(p(62))}}function $l(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=null;function Wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,dt=null,ft=null;function ei(e){if(e=or(e)){if(typeof Ql!="function")throw Error(p(280));var n=e.stateNode;n&&(n=Kr(n),Ql(e.stateNode,e.type,n))}}function ni(e){dt?ft?ft.push(e):ft=[e]:dt=e}function ti(){if(dt){var e=dt,n=ft;if(ft=dt=null,ei(e),n)for(e=0;e<n.length;e++)ei(n[e])}}function ri(e,n){return e(n)}function li(){}var Yl=!1;function oi(e,n,t){if(Yl)return e(n,t);Yl=!0;try{return ri(e,n,t)}finally{Yl=!1,(dt!==null||ft!==null)&&(li(),ti())}}function Ft(e,n){var t=e.stateNode;if(t===null)return null;var r=Kr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(p(231,n,typeof t));return t}var Kl=!1;if(B)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{Kl=!1}function oc(e,n,t,r,l,o,i,a,u){var v=Array.prototype.slice.call(arguments,3);try{n.apply(t,v)}catch(_){this.onError(_)}}var bt=!1,Er=null,Cr=!1,Gl=null,sc={onError:function(e){bt=!0,Er=e}};function ic(e,n,t,r,l,o,i,a,u){bt=!1,Er=null,oc.apply(sc,arguments)}function ac(e,n,t,r,l,o,i,a,u){if(ic.apply(this,arguments),bt){if(bt){var v=Er;bt=!1,Er=null}else throw Error(p(198));Cr||(Cr=!0,Gl=v)}}function Xn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function si(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ii(e){if(Xn(e)!==e)throw Error(p(188))}function uc(e){var n=e.alternate;if(!n){if(n=Xn(e),n===null)throw Error(p(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return ii(l),e;if(o===r)return ii(l),n;o=o.sibling}throw Error(p(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i)throw Error(p(189))}}if(t.alternate!==r)throw Error(p(190))}if(t.tag!==3)throw Error(p(188));return t.stateNode.current===t?e:n}function ai(e){return e=uc(e),e!==null?ui(e):null}function ui(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ui(e);if(n!==null)return n;e=e.sibling}return null}var ci=y.unstable_scheduleCallback,di=y.unstable_cancelCallback,cc=y.unstable_shouldYield,dc=y.unstable_requestPaint,ge=y.unstable_now,fc=y.unstable_getCurrentPriorityLevel,ql=y.unstable_ImmediatePriority,fi=y.unstable_UserBlockingPriority,Pr=y.unstable_NormalPriority,pc=y.unstable_LowPriority,pi=y.unstable_IdlePriority,Tr=null,xn=null;function mc(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:yc,hc=Math.log,vc=Math.LN2;function yc(e){return e>>>=0,e===0?32:31-(hc(e)/vc|0)|0}var Rr=64,Lr=4194304;function At(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~l;a!==0?r=At(a):(o&=i,o!==0&&(r=At(o)))}else i=t&~l,i!==0?r=At(i):o!==0&&(r=At(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&l)===0&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-dn(n),l=1<<t,r|=e[t],n&=~l;return r}function gc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-dn(o),a=1<<i,u=l[i];u===-1?((a&t)===0||(a&r)!==0)&&(l[i]=gc(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function Xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mi(){var e=Rr;return Rr<<=1,(Rr&4194240)===0&&(Rr=64),e}function Zl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Bt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=t}function _c(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-dn(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function Jl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var oe=0;function hi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vi,eo,yi,gi,xi,no=!1,zr=[],Dn=null,zn=null,Mn=null,$t=new Map,Ht=new Map,On=[],wc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _i(e,n){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":$t.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(n.pointerId)}}function Wt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=or(n),n!==null&&eo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function kc(e,n,t,r,l){switch(n){case"focusin":return Dn=Wt(Dn,e,n,t,r,l),!0;case"dragenter":return zn=Wt(zn,e,n,t,r,l),!0;case"mouseover":return Mn=Wt(Mn,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return $t.set(o,Wt($t.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Ht.set(o,Wt(Ht.get(o)||null,e,n,t,r,l)),!0}return!1}function wi(e){var n=Zn(e.target);if(n!==null){var t=Xn(n);if(t!==null){if(n=t.tag,n===13){if(n=si(t),n!==null){e.blockedOn=n,xi(e.priority,function(){yi(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ro(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Hl=r,t.target.dispatchEvent(r),Hl=null}else return n=or(t),n!==null&&eo(n),e.blockedOn=t,!1;n.shift()}return!0}function ki(e,n,t){Mr(e)&&t.delete(n)}function Sc(){no=!1,Dn!==null&&Mr(Dn)&&(Dn=null),zn!==null&&Mr(zn)&&(zn=null),Mn!==null&&Mr(Mn)&&(Mn=null),$t.forEach(ki),Ht.forEach(ki)}function Qt(e,n){e.blockedOn===n&&(e.blockedOn=null,no||(no=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Sc)))}function Yt(e){function n(l){return Qt(l,e)}if(0<zr.length){Qt(zr[0],e);for(var t=1;t<zr.length;t++){var r=zr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&Qt(Dn,e),zn!==null&&Qt(zn,e),Mn!==null&&Qt(Mn,e),$t.forEach(n),Ht.forEach(n),t=0;t<On.length;t++)r=On[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)wi(t),t.blockedOn===null&&On.shift()}var pt=_e.ReactCurrentBatchConfig,Or=!0;function Nc(e,n,t,r){var l=oe,o=pt.transition;pt.transition=null;try{oe=1,to(e,n,t,r)}finally{oe=l,pt.transition=o}}function jc(e,n,t,r){var l=oe,o=pt.transition;pt.transition=null;try{oe=4,to(e,n,t,r)}finally{oe=l,pt.transition=o}}function to(e,n,t,r){if(Or){var l=ro(e,n,t,r);if(l===null)wo(e,n,r,Ir,t),_i(e,r);else if(kc(l,e,n,t,r))r.stopPropagation();else if(_i(e,r),n&4&&-1<wc.indexOf(e)){for(;l!==null;){var o=or(l);if(o!==null&&vi(o),o=ro(e,n,t,r),o===null&&wo(e,n,r,Ir,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else wo(e,n,r,null,t)}}var Ir=null;function ro(e,n,t,r){if(Ir=null,e=Wl(r),e=Zn(e),e!==null)if(n=Xn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=si(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ir=e,null}function Si(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case ql:return 1;case fi:return 4;case Pr:case pc:return 16;case pi:return 536870912;default:return 16}default:return 16}}var In=null,lo=null,Vr=null;function Ni(){if(Vr)return Vr;var e,n=lo,t=n.length,r,l="value"in In?In.value:In.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return Vr=l.slice(e,1<r?1-r:void 0)}function Fr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function ji(){return!1}function Xe(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ur:ji,this.isPropagationStopped=ji,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),n}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=Xe(mt),Kt=T({},mt,{view:0,detail:0}),Ec=Xe(Kt),so,io,Gt,br=T({},Kt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gt&&(Gt&&e.type==="mousemove"?(so=e.screenX-Gt.screenX,io=e.screenY-Gt.screenY):io=so=0,Gt=e),so)},movementY:function(e){return"movementY"in e?e.movementY:io}}),Ei=Xe(br),Cc=T({},br,{dataTransfer:0}),Pc=Xe(Cc),Tc=T({},Kt,{relatedTarget:0}),ao=Xe(Tc),Rc=T({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lc=Xe(Rc),Dc=T({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zc=Xe(Dc),Mc=T({},mt,{data:0}),Ci=Xe(Mc),Oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ic={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vc[e])?!!n[e]:!1}function uo(){return Fc}var Uc=T({},Kt,{key:function(e){if(e.key){var n=Oc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ic[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bc=Xe(Uc),Ac=T({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pi=Xe(Ac),Bc=T({},Kt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),$c=Xe(Bc),Hc=T({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wc=Xe(Hc),Qc=T({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yc=Xe(Qc),Kc=[9,13,27,32],co=B&&"CompositionEvent"in window,qt=null;B&&"documentMode"in document&&(qt=document.documentMode);var Gc=B&&"TextEvent"in window&&!qt,Ti=B&&(!co||qt&&8<qt&&11>=qt),Ri=" ",Li=!1;function Di(e,n){switch(e){case"keyup":return Kc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ht=!1;function qc(e,n){switch(e){case"compositionend":return zi(n);case"keypress":return n.which!==32?null:(Li=!0,Ri);case"textInput":return e=n.data,e===Ri&&Li?null:e;default:return null}}function Xc(e,n){if(ht)return e==="compositionend"||!co&&Di(e,n)?(e=Ni(),Vr=lo=In=null,ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ti&&n.locale!=="ko"?null:n.data;default:return null}}var Zc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zc[e.type]:n==="textarea"}function Oi(e,n,t,r){ni(r),n=Wr(n,"onChange"),0<n.length&&(t=new oo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Xt=null,Zt=null;function Jc(e){Ji(e,0)}function Ar(e){var n=_t(e);if($s(n))return e}function ed(e,n){if(e==="change")return n}var Ii=!1;if(B){var fo;if(B){var po="oninput"in document;if(!po){var Vi=document.createElement("div");Vi.setAttribute("oninput","return;"),po=typeof Vi.oninput=="function"}fo=po}else fo=!1;Ii=fo&&(!document.documentMode||9<document.documentMode)}function Fi(){Xt&&(Xt.detachEvent("onpropertychange",Ui),Zt=Xt=null)}function Ui(e){if(e.propertyName==="value"&&Ar(Zt)){var n=[];Oi(n,Zt,e,Wl(e)),oi(Jc,n)}}function nd(e,n,t){e==="focusin"?(Fi(),Xt=n,Zt=t,Xt.attachEvent("onpropertychange",Ui)):e==="focusout"&&Fi()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Zt)}function rd(e,n){if(e==="click")return Ar(n)}function ld(e,n){if(e==="input"||e==="change")return Ar(n)}function od(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:od;function Jt(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!L.call(n,l)||!fn(e[l],n[l]))return!1}return!0}function bi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ai(e,n){var t=bi(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bi(t)}}function Bi(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bi(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $i(){for(var e=window,n=Nr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Nr(e.document)}return n}function mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sd(e){var n=$i(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Bi(t.ownerDocument.documentElement,t)){if(r!==null&&mo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ai(t,o);var i=Ai(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var id=B&&"documentMode"in document&&11>=document.documentMode,vt=null,ho=null,er=null,vo=!1;function Hi(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vo||vt==null||vt!==Nr(r)||(r=vt,"selectionStart"in r&&mo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&Jt(er,r)||(er=r,r=Wr(ho,"onSelect"),0<r.length&&(n=new oo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=vt)))}function Br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var yt={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},yo={},Wi={};B&&(Wi=document.createElement("div").style,"AnimationEvent"in window||(delete yt.animationend.animation,delete yt.animationiteration.animation,delete yt.animationstart.animation),"TransitionEvent"in window||delete yt.transitionend.transition);function $r(e){if(yo[e])return yo[e];if(!yt[e])return e;var n=yt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Wi)return yo[e]=n[t];return e}var Qi=$r("animationend"),Yi=$r("animationiteration"),Ki=$r("animationstart"),Gi=$r("transitionend"),qi=new Map,Xi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,n){qi.set(e,n),O(n,[e])}for(var go=0;go<Xi.length;go++){var xo=Xi[go],ad=xo.toLowerCase(),ud=xo[0].toUpperCase()+xo.slice(1);Vn(ad,"on"+ud)}Vn(Qi,"onAnimationEnd"),Vn(Yi,"onAnimationIteration"),Vn(Ki,"onAnimationStart"),Vn("dblclick","onDoubleClick"),Vn("focusin","onFocus"),Vn("focusout","onBlur"),Vn(Gi,"onTransitionEnd"),G("onMouseEnter",["mouseout","mouseover"]),G("onMouseLeave",["mouseout","mouseover"]),G("onPointerEnter",["pointerout","pointerover"]),G("onPointerLeave",["pointerout","pointerover"]),O("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),O("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),O("onBeforeInput",["compositionend","keypress","textInput","paste"]),O("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cd=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function Zi(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ac(r,n,void 0,e),e.currentTarget=null}function Ji(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,v=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;Zi(l,a,v),o=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,v=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;Zi(l,a,v),o=u}}}if(Cr)throw e=Gl,Cr=!1,Gl=null,e}function ae(e,n){var t=n[Co];t===void 0&&(t=n[Co]=new Set);var r=e+"__bubble";t.has(r)||(ea(n,e,2,!1),t.add(r))}function _o(e,n,t){var r=0;n&&(r|=4),ea(t,e,r,n)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Hr]){e[Hr]=!0,N.forEach(function(t){t!=="selectionchange"&&(cd.has(t)||_o(t,!1,e),_o(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hr]||(n[Hr]=!0,_o("selectionchange",!1,n))}}function ea(e,n,t,r){switch(Si(n)){case 1:var l=Nc;break;case 4:l=jc;break;default:l=to}t=l.bind(null,n,t,e),l=void 0,!Kl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function wo(e,n,t,r,l){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Zn(a),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}a=a.parentNode}}r=r.return}oi(function(){var v=o,_=Wl(t),w=[];e:{var g=qi.get(e);if(g!==void 0){var C=oo,R=e;switch(e){case"keypress":if(Fr(t)===0)break e;case"keydown":case"keyup":C=bc;break;case"focusin":R="focus",C=ao;break;case"focusout":R="blur",C=ao;break;case"beforeblur":case"afterblur":C=ao;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Pc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=$c;break;case Qi:case Yi:case Ki:C=Lc;break;case Gi:C=Wc;break;case"scroll":C=Ec;break;case"wheel":C=Yc;break;case"copy":case"cut":case"paste":C=zc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Pi}var z=(n&4)!==0,xe=!z&&e==="scroll",m=z?g!==null?g+"Capture":null:g;z=[];for(var d=v,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,m!==null&&(k=Ft(d,m),k!=null&&z.push(rr(d,k,h)))),xe)break;d=d.return}0<z.length&&(g=new C(g,R,null,t,_),w.push({event:g,listeners:z}))}}if((n&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&t!==Hl&&(R=t.relatedTarget||t.fromElement)&&(Zn(R)||R[Nn]))break e;if((C||g)&&(g=_.window===_?_:(g=_.ownerDocument)?g.defaultView||g.parentWindow:window,C?(R=t.relatedTarget||t.toElement,C=v,R=R?Zn(R):null,R!==null&&(xe=Xn(R),R!==xe||R.tag!==5&&R.tag!==6)&&(R=null)):(C=null,R=v),C!==R)){if(z=Ei,k="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(z=Pi,k="onPointerLeave",m="onPointerEnter",d="pointer"),xe=C==null?g:_t(C),h=R==null?g:_t(R),g=new z(k,d+"leave",C,t,_),g.target=xe,g.relatedTarget=h,k=null,Zn(_)===v&&(z=new z(m,d+"enter",R,t,_),z.target=h,z.relatedTarget=xe,k=z),xe=k,C&&R)n:{for(z=C,m=R,d=0,h=z;h;h=gt(h))d++;for(h=0,k=m;k;k=gt(k))h++;for(;0<d-h;)z=gt(z),d--;for(;0<h-d;)m=gt(m),h--;for(;d--;){if(z===m||m!==null&&z===m.alternate)break n;z=gt(z),m=gt(m)}z=null}else z=null;C!==null&&na(w,g,C,z,!1),R!==null&&xe!==null&&na(w,xe,R,z,!0)}}e:{if(g=v?_t(v):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var M=ed;else if(Mi(g))if(Ii)M=ld;else{M=td;var V=nd}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=rd);if(M&&(M=M(e,v))){Oi(w,M,t,_);break e}V&&V(e,g,v),e==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Ul(g,"number",g.value)}switch(V=v?_t(v):window,e){case"focusin":(Mi(V)||V.contentEditable==="true")&&(vt=V,ho=v,er=null);break;case"focusout":er=ho=vt=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,Hi(w,t,_);break;case"selectionchange":if(id)break;case"keydown":case"keyup":Hi(w,t,_)}var F;if(co)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ht?Di(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(Ti&&t.locale!=="ko"&&(ht||A!=="onCompositionStart"?A==="onCompositionEnd"&&ht&&(F=Ni()):(In=_,lo="value"in In?In.value:In.textContent,ht=!0)),V=Wr(v,A),0<V.length&&(A=new Ci(A,e,null,t,_),w.push({event:A,listeners:V}),F?A.data=F:(F=zi(t),F!==null&&(A.data=F)))),(F=Gc?qc(e,t):Xc(e,t))&&(v=Wr(v,"onBeforeInput"),0<v.length&&(_=new Ci("onBeforeInput","beforeinput",null,t,_),w.push({event:_,listeners:v}),_.data=F))}Ji(w,n)})}function rr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Wr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Ft(e,t),o!=null&&r.unshift(rr(e,o,l)),o=Ft(e,n),o!=null&&r.push(rr(e,o,l))),e=e.return}return r}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function na(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var a=t,u=a.alternate,v=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&v!==null&&(a=v,l?(u=Ft(t,o),u!=null&&i.unshift(rr(t,u,a))):l||(u=Ft(t,o),u!=null&&i.push(rr(t,u,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var dd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function ta(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(fd,"")}function Qr(e,n,t){if(n=ta(n),ta(e)!==n&&t)throw Error(p(425))}function Yr(){}var ko=null,So=null;function No(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,pd=typeof clearTimeout=="function"?clearTimeout:void 0,ra=typeof Promise=="function"?Promise:void 0,md=typeof queueMicrotask=="function"?queueMicrotask:typeof ra<"u"?function(e){return ra.resolve(null).then(e).catch(hd)}:jo;function hd(e){setTimeout(function(){throw e})}function Eo(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Yt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Yt(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function la(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xt=Math.random().toString(36).slice(2),_n="__reactFiber$"+xt,lr="__reactProps$"+xt,Nn="__reactContainer$"+xt,Co="__reactEvents$"+xt,vd="__reactListeners$"+xt,yd="__reactHandles$"+xt;function Zn(e){var n=e[_n];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Nn]||t[_n]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=la(e);e!==null;){if(t=e[_n])return t;e=la(e)}return n}e=t,t=e.parentNode}return null}function or(e){return e=e[_n]||e[Nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Kr(e){return e[lr]||null}var Po=[],wt=-1;function Un(e){return{current:e}}function ue(e){0>wt||(e.current=Po[wt],Po[wt]=null,wt--)}function ie(e,n){wt++,Po[wt]=e.current,e.current=n}var bn={},Le=Un(bn),Be=Un(!1),Jn=bn;function kt(e,n){var t=e.type.contextTypes;if(!t)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function $e(e){return e=e.childContextTypes,e!=null}function Gr(){ue(Be),ue(Le)}function oa(e,n,t){if(Le.current!==bn)throw Error(p(168));ie(Le,n),ie(Be,t)}function sa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(p(108,se(e)||"Unknown",l));return T({},t,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Jn=Le.current,ie(Le,e),ie(Be,Be.current),!0}function ia(e,n,t){var r=e.stateNode;if(!r)throw Error(p(169));t?(e=sa(e,n,Jn),r.__reactInternalMemoizedMergedChildContext=e,ue(Be),ue(Le),ie(Le,e)):ue(Be),ie(Be,t)}var jn=null,Xr=!1,To=!1;function aa(e){jn===null?jn=[e]:jn.push(e)}function gd(e){Xr=!0,aa(e)}function An(){if(!To&&jn!==null){To=!0;var e=0,n=oe;try{var t=jn;for(oe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}jn=null,Xr=!1}catch(l){throw jn!==null&&(jn=jn.slice(e+1)),ci(ql,An),l}finally{oe=n,To=!1}}return null}var St=[],Nt=0,Zr=null,Jr=0,tn=[],rn=0,et=null,En=1,Cn="";function nt(e,n){St[Nt++]=Jr,St[Nt++]=Zr,Zr=e,Jr=n}function ua(e,n,t){tn[rn++]=En,tn[rn++]=Cn,tn[rn++]=et,et=e;var r=En;e=Cn;var l=32-dn(r)-1;r&=~(1<<l),t+=1;var o=32-dn(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,En=1<<32-dn(n)+l|t<<l|r,Cn=o+e}else En=1<<o|t<<l|r,Cn=e}function Ro(e){e.return!==null&&(nt(e,1),ua(e,1,0))}function Lo(e){for(;e===Zr;)Zr=St[--Nt],St[Nt]=null,Jr=St[--Nt],St[Nt]=null;for(;e===et;)et=tn[--rn],tn[rn]=null,Cn=tn[--rn],tn[rn]=null,En=tn[--rn],tn[rn]=null}var Ze=null,Je=null,fe=!1,pn=null;function ca(e,n){var t=an(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function da(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ze=e,Je=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ze=e,Je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=et!==null?{id:En,overflow:Cn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=an(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ze=e,Je=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(fe){var n=Je;if(n){var t=n;if(!da(e,n)){if(Do(e))throw Error(p(418));n=Fn(t.nextSibling);var r=Ze;n&&da(e,n)?ca(r,t):(e.flags=e.flags&-4097|2,fe=!1,Ze=e)}}else{if(Do(e))throw Error(p(418));e.flags=e.flags&-4097|2,fe=!1,Ze=e}}}function fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function el(e){if(e!==Ze)return!1;if(!fe)return fa(e),fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!No(e.type,e.memoizedProps)),n&&(n=Je)){if(Do(e))throw pa(),Error(p(418));for(;n;)ca(e,n),n=Fn(n.nextSibling)}if(fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Je=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Je=null}}else Je=Ze?Fn(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=Je;e;)e=Fn(e.nextSibling)}function jt(){Je=Ze=null,fe=!1}function Mo(e){pn===null?pn=[e]:pn.push(e)}var xd=_e.ReactCurrentBatchConfig;function sr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(p(309));var r=t.stateNode}if(!r)throw Error(p(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(p(284));if(!t._owner)throw Error(p(290,e))}return e}function nl(e,n){throw e=Object.prototype.toString.call(n),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ma(e){var n=e._init;return n(e._payload)}function ha(e){function n(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function l(m,d){return m=Gn(m,d),m.index=0,m.sibling=null,m}function o(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,h,k){return d===null||d.tag!==6?(d=js(h,m.mode,k),d.return=m,d):(d=l(d,h),d.return=m,d)}function u(m,d,h,k){var M=h.type;return M===Q?_(m,d,h.props.children,k,h.key):d!==null&&(d.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ae&&ma(M)===d.type)?(k=l(d,h.props),k.ref=sr(m,d,h),k.return=m,k):(k=jl(h.type,h.key,h.props,null,m.mode,k),k.ref=sr(m,d,h),k.return=m,k)}function v(m,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Es(h,m.mode,k),d.return=m,d):(d=l(d,h.children||[]),d.return=m,d)}function _(m,d,h,k,M){return d===null||d.tag!==7?(d=ut(h,m.mode,k,M),d.return=m,d):(d=l(d,h),d.return=m,d)}function w(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=js(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oe:return h=jl(d.type,d.key,d.props,null,m.mode,h),h.ref=sr(m,null,d),h.return=m,h;case I:return d=Es(d,m.mode,h),d.return=m,d;case Ae:var k=d._init;return w(m,k(d._payload),h)}if(Ot(d)||b(d))return d=ut(d,m.mode,h,null),d.return=m,d;nl(m,d)}return null}function g(m,d,h,k){var M=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return M!==null?null:a(m,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Oe:return h.key===M?u(m,d,h,k):null;case I:return h.key===M?v(m,d,h,k):null;case Ae:return M=h._init,g(m,d,M(h._payload),k)}if(Ot(h)||b(h))return M!==null?null:_(m,d,h,k,null);nl(m,h)}return null}function C(m,d,h,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(h)||null,a(d,m,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Oe:return m=m.get(k.key===null?h:k.key)||null,u(d,m,k,M);case I:return m=m.get(k.key===null?h:k.key)||null,v(d,m,k,M);case Ae:var V=k._init;return C(m,d,h,V(k._payload),M)}if(Ot(k)||b(k))return m=m.get(h)||null,_(d,m,k,M,null);nl(d,k)}return null}function R(m,d,h,k){for(var M=null,V=null,F=d,A=d=0,Ce=null;F!==null&&A<h.length;A++){F.index>A?(Ce=F,F=null):Ce=F.sibling;var ee=g(m,F,h[A],k);if(ee===null){F===null&&(F=Ce);break}e&&F&&ee.alternate===null&&n(m,F),d=o(ee,d,A),V===null?M=ee:V.sibling=ee,V=ee,F=Ce}if(A===h.length)return t(m,F),fe&&nt(m,A),M;if(F===null){for(;A<h.length;A++)F=w(m,h[A],k),F!==null&&(d=o(F,d,A),V===null?M=F:V.sibling=F,V=F);return fe&&nt(m,A),M}for(F=r(m,F);A<h.length;A++)Ce=C(F,m,A,h[A],k),Ce!==null&&(e&&Ce.alternate!==null&&F.delete(Ce.key===null?A:Ce.key),d=o(Ce,d,A),V===null?M=Ce:V.sibling=Ce,V=Ce);return e&&F.forEach(function(qn){return n(m,qn)}),fe&&nt(m,A),M}function z(m,d,h,k){var M=b(h);if(typeof M!="function")throw Error(p(150));if(h=M.call(h),h==null)throw Error(p(151));for(var V=M=null,F=d,A=d=0,Ce=null,ee=h.next();F!==null&&!ee.done;A++,ee=h.next()){F.index>A?(Ce=F,F=null):Ce=F.sibling;var qn=g(m,F,ee.value,k);if(qn===null){F===null&&(F=Ce);break}e&&F&&qn.alternate===null&&n(m,F),d=o(qn,d,A),V===null?M=qn:V.sibling=qn,V=qn,F=Ce}if(ee.done)return t(m,F),fe&&nt(m,A),M;if(F===null){for(;!ee.done;A++,ee=h.next())ee=w(m,ee.value,k),ee!==null&&(d=o(ee,d,A),V===null?M=ee:V.sibling=ee,V=ee);return fe&&nt(m,A),M}for(F=r(m,F);!ee.done;A++,ee=h.next())ee=C(F,m,A,ee.value,k),ee!==null&&(e&&ee.alternate!==null&&F.delete(ee.key===null?A:ee.key),d=o(ee,d,A),V===null?M=ee:V.sibling=ee,V=ee);return e&&F.forEach(function(Zd){return n(m,Zd)}),fe&&nt(m,A),M}function xe(m,d,h,k){if(typeof h=="object"&&h!==null&&h.type===Q&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Oe:e:{for(var M=h.key,V=d;V!==null;){if(V.key===M){if(M=h.type,M===Q){if(V.tag===7){t(m,V.sibling),d=l(V,h.props.children),d.return=m,m=d;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ae&&ma(M)===V.type){t(m,V.sibling),d=l(V,h.props),d.ref=sr(m,V,h),d.return=m,m=d;break e}t(m,V);break}else n(m,V);V=V.sibling}h.type===Q?(d=ut(h.props.children,m.mode,k,h.key),d.return=m,m=d):(k=jl(h.type,h.key,h.props,null,m.mode,k),k.ref=sr(m,d,h),k.return=m,m=k)}return i(m);case I:e:{for(V=h.key;d!==null;){if(d.key===V)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(m,d.sibling),d=l(d,h.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else n(m,d);d=d.sibling}d=Es(h,m.mode,k),d.return=m,m=d}return i(m);case Ae:return V=h._init,xe(m,d,V(h._payload),k)}if(Ot(h))return R(m,d,h,k);if(b(h))return z(m,d,h,k);nl(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(m,d.sibling),d=l(d,h),d.return=m,m=d):(t(m,d),d=js(h,m.mode,k),d.return=m,m=d),i(m)):t(m,d)}return xe}var Et=ha(!0),va=ha(!1),tl=Un(null),rl=null,Ct=null,Oo=null;function Io(){Oo=Ct=rl=null}function Vo(e){var n=tl.current;ue(tl),e._currentValue=n}function Fo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Pt(e,n){rl=e,Oo=Ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(He=!0),e.firstContext=null)}function ln(e){var n=e._currentValue;if(Oo!==e)if(e={context:e,memoizedValue:n,next:null},Ct===null){if(rl===null)throw Error(p(308));Ct=e,rl.dependencies={lanes:0,firstContext:e}}else Ct=Ct.next=e;return n}var tt=null;function Uo(e){tt===null?tt=[e]:tt.push(e)}function ya(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Uo(n)):(t.next=l.next,l.next=t),n.interleaved=t,Pn(e,r)}function Pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Bn=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ga(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function $n(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Pn(e,t)}return l=r.interleaved,l===null?(n.next=n,Uo(r)):(n.next=l.next,l.next=n),r.interleaved=n,Pn(e,t)}function ll(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Jl(e,t)}}function xa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ol(e,n,t,r){var l=e.updateQueue;Bn=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,v=u.next;u.next=null,i===null?o=v:i.next=v,i=u;var _=e.alternate;_!==null&&(_=_.updateQueue,a=_.lastBaseUpdate,a!==i&&(a===null?_.firstBaseUpdate=v:a.next=v,_.lastBaseUpdate=u))}if(o!==null){var w=l.baseState;i=0,_=v=u=null,a=o;do{var g=a.lane,C=a.eventTime;if((r&g)===g){_!==null&&(_=_.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=e,z=a;switch(g=n,C=t,z.tag){case 1:if(R=z.payload,typeof R=="function"){w=R.call(C,w,g);break e}w=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=z.payload,g=typeof R=="function"?R.call(C,w,g):R,g==null)break e;w=T({},w,g);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else C={eventTime:C,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},_===null?(v=_=C,u=w):_=_.next=C,i|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(_===null&&(u=w),l.baseState=u,l.firstBaseUpdate=v,l.lastBaseUpdate=_,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);ot|=i,e.lanes=i,e.memoizedState=w}}function _a(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(p(191,l));l.call(r)}}}var ir={},wn=Un(ir),ar=Un(ir),ur=Un(ir);function rt(e){if(e===ir)throw Error(p(174));return e}function Ao(e,n){switch(ie(ur,n),ie(ar,e),ie(wn,ir),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Al(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Al(n,e)}ue(wn),ie(wn,n)}function Tt(){ue(wn),ue(ar),ue(ur)}function wa(e){rt(ur.current);var n=rt(wn.current),t=Al(n,e.type);n!==t&&(ie(ar,e),ie(wn,t))}function Bo(e){ar.current===e&&(ue(wn),ue(ar))}var pe=Un(0);function sl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $o=[];function Ho(){for(var e=0;e<$o.length;e++)$o[e]._workInProgressVersionPrimary=null;$o.length=0}var il=_e.ReactCurrentDispatcher,Wo=_e.ReactCurrentBatchConfig,lt=0,me=null,Se=null,je=null,al=!1,cr=!1,dr=0,_d=0;function De(){throw Error(p(321))}function Qo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!fn(e[t],n[t]))return!1;return!0}function Yo(e,n,t,r,l,o){if(lt=o,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,il.current=e===null||e.memoizedState===null?Nd:jd,e=t(r,l),cr){o=0;do{if(cr=!1,dr=0,25<=o)throw Error(p(301));o+=1,je=Se=null,n.updateQueue=null,il.current=Ed,e=t(r,l)}while(cr)}if(il.current=dl,n=Se!==null&&Se.next!==null,lt=0,je=Se=me=null,al=!1,n)throw Error(p(300));return e}function Ko(){var e=dr!==0;return dr=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?me.memoizedState=je=e:je=je.next=e,je}function on(){if(Se===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var n=je===null?me.memoizedState:je.next;if(n!==null)je=n,Se=e;else{if(e===null)throw Error(p(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},je===null?me.memoizedState=je=e:je=je.next=e}return je}function fr(e,n){return typeof n=="function"?n(e):n}function Go(e){var n=on(),t=n.queue;if(t===null)throw Error(p(311));t.lastRenderedReducer=e;var r=Se,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,u=null,v=o;do{var _=v.lane;if((lt&_)===_)u!==null&&(u=u.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var w={lane:_,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};u===null?(a=u=w,i=r):u=u.next=w,me.lanes|=_,ot|=_}v=v.next}while(v!==null&&v!==o);u===null?i=r:u.next=a,fn(r,n.memoizedState)||(He=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,me.lanes|=o,ot|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function qo(e){var n=on(),t=n.queue;if(t===null)throw Error(p(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);fn(o,n.memoizedState)||(He=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ka(){}function Sa(e,n){var t=me,r=on(),l=n(),o=!fn(r.memoizedState,l);if(o&&(r.memoizedState=l,He=!0),r=r.queue,Xo(Ea.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||je!==null&&je.memoizedState.tag&1){if(t.flags|=2048,pr(9,ja.bind(null,t,r,l,n),void 0,null),Ee===null)throw Error(p(349));(lt&30)!==0||Na(t,n,l)}return l}function Na(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ja(e,n,t,r){n.value=t,n.getSnapshot=r,Ca(n)&&Pa(e)}function Ea(e,n,t){return t(function(){Ca(n)&&Pa(e)})}function Ca(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!fn(e,t)}catch{return!0}}function Pa(e){var n=Pn(e,1);n!==null&&yn(n,e,1,-1)}function Ta(e){var n=kn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},n.queue=e,e=e.dispatch=Sd.bind(null,me,e),[n.memoizedState,e]}function pr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ra(){return on().memoizedState}function ul(e,n,t,r){var l=kn();me.flags|=e,l.memoizedState=pr(1|n,t,void 0,r===void 0?null:r)}function cl(e,n,t,r){var l=on();r=r===void 0?null:r;var o=void 0;if(Se!==null){var i=Se.memoizedState;if(o=i.destroy,r!==null&&Qo(r,i.deps)){l.memoizedState=pr(n,t,o,r);return}}me.flags|=e,l.memoizedState=pr(1|n,t,o,r)}function La(e,n){return ul(8390656,8,e,n)}function Xo(e,n){return cl(2048,8,e,n)}function Da(e,n){return cl(4,2,e,n)}function za(e,n){return cl(4,4,e,n)}function Ma(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Oa(e,n,t){return t=t!=null?t.concat([e]):null,cl(4,4,Ma.bind(null,n,e),t)}function Zo(){}function Ia(e,n){var t=on();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Qo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Va(e,n){var t=on();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Qo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Fa(e,n,t){return(lt&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=t):(fn(t,n)||(t=mi(),me.lanes|=t,ot|=t,e.baseState=!0),n)}function wd(e,n){var t=oe;oe=t!==0&&4>t?t:4,e(!0);var r=Wo.transition;Wo.transition={};try{e(!1),n()}finally{oe=t,Wo.transition=r}}function Ua(){return on().memoizedState}function kd(e,n,t){var r=Yn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ba(e))Aa(n,t);else if(t=ya(e,n,t,r),t!==null){var l=Ve();yn(t,e,r,l),Ba(t,n,r)}}function Sd(e,n,t){var r=Yn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ba(e))Aa(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,a=o(i,t);if(l.hasEagerState=!0,l.eagerState=a,fn(a,i)){var u=n.interleaved;u===null?(l.next=l,Uo(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=ya(e,n,l,r),t!==null&&(l=Ve(),yn(t,e,r,l),Ba(t,n,r))}}function ba(e){var n=e.alternate;return e===me||n!==null&&n===me}function Aa(e,n){cr=al=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ba(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Jl(e,t)}}var dl={readContext:ln,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Nd={readContext:ln,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:La,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ul(4194308,4,Ma.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ul(4194308,4,e,n)},useInsertionEffect:function(e,n){return ul(4,2,e,n)},useMemo:function(e,n){var t=kn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=kn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=kd.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:Ta,useDebugValue:Zo,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=Ta(!1),n=e[0];return e=wd.bind(null,e[1]),kn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=me,l=kn();if(fe){if(t===void 0)throw Error(p(407));t=t()}else{if(t=n(),Ee===null)throw Error(p(349));(lt&30)!==0||Na(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,La(Ea.bind(null,r,o,e),[e]),r.flags|=2048,pr(9,ja.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=kn(),n=Ee.identifierPrefix;if(fe){var t=Cn,r=En;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=dr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_d++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},jd={readContext:ln,useCallback:Ia,useContext:ln,useEffect:Xo,useImperativeHandle:Oa,useInsertionEffect:Da,useLayoutEffect:za,useMemo:Va,useReducer:Go,useRef:Ra,useState:function(){return Go(fr)},useDebugValue:Zo,useDeferredValue:function(e){var n=on();return Fa(n,Se.memoizedState,e)},useTransition:function(){var e=Go(fr)[0],n=on().memoizedState;return[e,n]},useMutableSource:ka,useSyncExternalStore:Sa,useId:Ua,unstable_isNewReconciler:!1},Ed={readContext:ln,useCallback:Ia,useContext:ln,useEffect:Xo,useImperativeHandle:Oa,useInsertionEffect:Da,useLayoutEffect:za,useMemo:Va,useReducer:qo,useRef:Ra,useState:function(){return qo(fr)},useDebugValue:Zo,useDeferredValue:function(e){var n=on();return Se===null?n.memoizedState=e:Fa(n,Se.memoizedState,e)},useTransition:function(){var e=qo(fr)[0],n=on().memoizedState;return[e,n]},useMutableSource:ka,useSyncExternalStore:Sa,useId:Ua,unstable_isNewReconciler:!1};function mn(e,n){if(e&&e.defaultProps){n=T({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Jo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:T({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var fl={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ve(),l=Yn(e),o=Tn(r,l);o.payload=n,t!=null&&(o.callback=t),n=$n(e,o,l),n!==null&&(yn(n,e,l,r),ll(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ve(),l=Yn(e),o=Tn(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=$n(e,o,l),n!==null&&(yn(n,e,l,r),ll(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ve(),r=Yn(e),l=Tn(t,r);l.tag=2,n!=null&&(l.callback=n),n=$n(e,l,r),n!==null&&(yn(n,e,r,t),ll(n,e,r))}};function $a(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Jt(t,r)||!Jt(l,o):!0}function Ha(e,n,t){var r=!1,l=bn,o=n.contextType;return typeof o=="object"&&o!==null?o=ln(o):(l=$e(n)?Jn:Le.current,r=n.contextTypes,o=(r=r!=null)?kt(e,l):bn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Wa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&fl.enqueueReplaceState(n,n.state,null)}function es(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},bo(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=ln(o):(o=$e(n)?Jn:Le.current,l.context=kt(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Jo(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&fl.enqueueReplaceState(l,l.state,null),ol(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n){try{var t="",r=n;do t+=Z(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function ns(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ts(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cd=typeof WeakMap=="function"?WeakMap:Map;function Qa(e,n,t){t=Tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){xl||(xl=!0,ys=r),ts(e,n)},t}function Ya(e,n,t){t=Tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){ts(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ts(e,n),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ka(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Cd;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Ad.bind(null,e,n,t),n.then(e,e))}function Ga(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qa(e,n,t,r,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Tn(-1,1),n.tag=2,$n(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Pd=_e.ReactCurrentOwner,He=!1;function Ie(e,n,t,r){n.child=e===null?va(n,null,t,r):Et(n,e.child,t,r)}function Xa(e,n,t,r,l){t=t.render;var o=n.ref;return Pt(n,l),r=Yo(e,n,t,r,o,l),t=Ko(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Rn(e,n,l)):(fe&&t&&Ro(n),n.flags|=1,Ie(e,n,r,l),n.child)}function Za(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Ns(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ja(e,n,o,r,l)):(e=jl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Jt,t(i,r)&&e.ref===n.ref)return Rn(e,n,l)}return n.flags|=1,e=Gn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ja(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Jt(o,r)&&e.ref===n.ref)if(He=!1,n.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(He=!0);else return n.lanes=e.lanes,Rn(e,n,l)}return rs(e,n,t,r,l)}function eu(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Dt,en),en|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ie(Dt,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ie(Dt,en),en|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ie(Dt,en),en|=r;return Ie(e,n,l,t),n.child}function nu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function rs(e,n,t,r,l){var o=$e(t)?Jn:Le.current;return o=kt(n,o),Pt(n,l),t=Yo(e,n,t,r,o,l),r=Ko(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Rn(e,n,l)):(fe&&r&&Ro(n),n.flags|=1,Ie(e,n,t,l),n.child)}function tu(e,n,t,r,l){if($e(t)){var o=!0;qr(n)}else o=!1;if(Pt(n,l),n.stateNode===null)ml(e,n),Ha(n,t,r),es(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var u=i.context,v=t.contextType;typeof v=="object"&&v!==null?v=ln(v):(v=$e(t)?Jn:Le.current,v=kt(n,v));var _=t.getDerivedStateFromProps,w=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function";w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==v)&&Wa(n,i,r,v),Bn=!1;var g=n.memoizedState;i.state=g,ol(n,r,i,l),u=n.memoizedState,a!==r||g!==u||Be.current||Bn?(typeof _=="function"&&(Jo(n,t,_,r),u=n.memoizedState),(a=Bn||$a(n,t,a,r,g,u,v))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),i.props=r,i.state=u,i.context=v,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,ga(e,n),a=n.memoizedProps,v=n.type===n.elementType?a:mn(n.type,a),i.props=v,w=n.pendingProps,g=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=$e(t)?Jn:Le.current,u=kt(n,u));var C=t.getDerivedStateFromProps;(_=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==w||g!==u)&&Wa(n,i,r,u),Bn=!1,g=n.memoizedState,i.state=g,ol(n,r,i,l);var R=n.memoizedState;a!==w||g!==R||Be.current||Bn?(typeof C=="function"&&(Jo(n,t,C,r),R=n.memoizedState),(v=Bn||$a(n,t,v,r,g,R,u)||!1)?(_||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,R,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,R,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=R),i.props=r,i.state=R,i.context=u,r=v):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return ls(e,n,t,r,o,l)}function ls(e,n,t,r,l,o){nu(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&ia(n,t,!1),Rn(e,n,o);r=n.stateNode,Pd.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Et(n,e.child,null,o),n.child=Et(n,null,a,o)):Ie(e,n,a,o),n.memoizedState=r.state,l&&ia(n,t,!0),n.child}function ru(e){var n=e.stateNode;n.pendingContext?oa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&oa(e,n.context,!1),Ao(e,n.containerInfo)}function lu(e,n,t,r,l){return jt(),Mo(l),n.flags|=256,Ie(e,n,t,r),n.child}var os={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function ou(e,n,t){var r=n.pendingProps,l=pe.current,o=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ie(pe,l&1),e===null)return zo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=El(i,r,0,null),e=ut(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ss(t),n.memoizedState=os,e):is(n,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Td(e,n,i,r,a,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Gn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=Gn(a,o):(o=ut(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?ss(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=os,r}return o=e.child,e=o.sibling,r=Gn(o,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function is(e,n){return n=El({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pl(e,n,t,r){return r!==null&&Mo(r),Et(n,e.child,null,t),e=is(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Td(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=ns(Error(p(422))),pl(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=El({mode:"visible",children:r.children},l,0,null),o=ut(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&Et(n,e.child,null,i),n.child.memoizedState=ss(i),n.memoizedState=os,o);if((n.mode&1)===0)return pl(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(p(419)),r=ns(o,r,void 0),pl(e,n,i,r)}if(a=(i&e.childLanes)!==0,He||a){if(r=Ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Pn(e,l),yn(r,e,l,-1))}return Ss(),r=ns(Error(p(421))),pl(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Bd.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,Je=Fn(l.nextSibling),Ze=n,fe=!0,pn=null,e!==null&&(tn[rn++]=En,tn[rn++]=Cn,tn[rn++]=et,En=e.id,Cn=e.overflow,et=n),n=is(n,r.children),n.flags|=4096,n)}function su(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fo(e.return,n,t)}function as(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function iu(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(Ie(e,n,r.children,t),r=pe.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&su(e,t,n);else if(e.tag===19)su(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(pe,r),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&sl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),as(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}as(n,!0,t,null,o);break;case"together":as(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ml(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ot|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(p(153));if(n.child!==null){for(e=n.child,t=Gn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Gn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Rd(e,n,t){switch(n.tag){case 3:ru(n),jt();break;case 5:wa(n);break;case 1:$e(n.type)&&qr(n);break;case 4:Ao(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;ie(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ie(pe,pe.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ou(e,n,t):(ie(pe,pe.current&1),e=Rn(e,n,t),e!==null?e.sibling:null);ie(pe,pe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return iu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ie(pe,pe.current),r)break;return null;case 22:case 23:return n.lanes=0,eu(e,n,t)}return Rn(e,n,t)}var au,us,uu,cu;au=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},us=function(){},uu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,rt(wn.current);var o=null;switch(t){case"input":l=Vl(e,l),r=Vl(e,r),o=[];break;case"select":l=T({},l,{value:void 0}),r=T({},r,{value:void 0}),o=[];break;case"textarea":l=bl(e,l),r=bl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}Bl(t,r);var i;t=null;for(v in l)if(!r.hasOwnProperty(v)&&l.hasOwnProperty(v)&&l[v]!=null)if(v==="style"){var a=l[v];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(j.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in r){var u=r[v];if(a=l!=null?l[v]:void 0,r.hasOwnProperty(v)&&u!==a&&(u!=null||a!=null))if(v==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(o||(o=[]),o.push(v,t)),t=u;else v==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(v,u)):v==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(v,""+u):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(j.hasOwnProperty(v)?(u!=null&&v==="onScroll"&&ae("scroll",e),o||a===u||(o=[])):(o=o||[]).push(v,u))}t&&(o=o||[]).push("style",t);var v=o;(n.updateQueue=v)&&(n.flags|=4)}},cu=function(e,n,t,r){t!==r&&(n.flags|=4)};function mr(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ld(e,n,t){var r=n.pendingProps;switch(Lo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(n),null;case 1:return $e(n.type)&&Gr(),ze(n),null;case 3:return r=n.stateNode,Tt(),ue(Be),ue(Le),Ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(el(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pn!==null&&(_s(pn),pn=null))),us(e,n),ze(n),null;case 5:Bo(n);var l=rt(ur.current);if(t=n.type,e!==null&&n.stateNode!=null)uu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(p(166));return ze(n),null}if(e=rt(wn.current),el(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[_n]=n,r[lr]=o,e=(n.mode&1)!==0,t){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(l=0;l<nr.length;l++)ae(nr[l],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Hs(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":Ys(r,o),ae("invalid",r)}Bl(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),l=["children",""+a]):j.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&ae("scroll",r)}switch(t){case"input":Sr(r),Qs(r,o,!0);break;case"textarea":Sr(r),Gs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[_n]=n,e[lr]=r,au(e,n,!1,!1),n.stateNode=e;e:{switch(i=$l(t,r),t){case"dialog":ae("cancel",e),ae("close",e),l=r;break;case"iframe":case"object":case"embed":ae("load",e),l=r;break;case"video":case"audio":for(l=0;l<nr.length;l++)ae(nr[l],e);l=r;break;case"source":ae("error",e),l=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),l=r;break;case"details":ae("toggle",e),l=r;break;case"input":Hs(e,r),l=Vl(e,r),ae("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=T({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Ys(e,r),l=bl(e,r),ae("invalid",e);break;default:l=r}Bl(t,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Js(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xs(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&It(e,u):typeof u=="number"&&It(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(j.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ae("scroll",e):u!=null&&Ke(e,o,u,i))}switch(t){case"input":Sr(e),Qs(e,r,!1);break;case"textarea":Sr(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ct(e,!!r.multiple,o,!1):r.defaultValue!=null&&ct(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ze(n),null;case 6:if(e&&n.stateNode!=null)cu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(p(166));if(t=rt(ur.current),rt(wn.current),el(n)){if(r=n.stateNode,t=n.memoizedProps,r[_n]=n,(o=r.nodeValue!==t)&&(e=Ze,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[_n]=n,n.stateNode=r}return ze(n),null;case 13:if(ue(pe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Je!==null&&(n.mode&1)!==0&&(n.flags&128)===0)pa(),jt(),n.flags|=98560,o=!1;else if(o=el(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(p(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(p(317));o[_n]=n}else jt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ze(n),o=!1}else pn!==null&&(_s(pn),pn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(pe.current&1)!==0?Ne===0&&(Ne=3):Ss())),n.updateQueue!==null&&(n.flags|=4),ze(n),null);case 4:return Tt(),us(e,n),e===null&&tr(n.stateNode.containerInfo),ze(n),null;case 10:return Vo(n.type._context),ze(n),null;case 17:return $e(n.type)&&Gr(),ze(n),null;case 19:if(ue(pe),o=n.memoizedState,o===null)return ze(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)mr(o,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=sl(e),i!==null){for(n.flags|=128,mr(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ie(pe,pe.current&1|2),n.child}e=e.sibling}o.tail!==null&&ge()>zt&&(n.flags|=128,r=!0,mr(o,!1),n.lanes=4194304)}else{if(!r)if(e=sl(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!fe)return ze(n),null}else 2*ge()-o.renderingStartTime>zt&&t!==1073741824&&(n.flags|=128,r=!0,mr(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ge(),n.sibling=null,t=pe.current,ie(pe,r?t&1|2:t&1),n):(ze(n),null);case 22:case 23:return ks(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(en&1073741824)!==0&&(ze(n),n.subtreeFlags&6&&(n.flags|=8192)):ze(n),null;case 24:return null;case 25:return null}throw Error(p(156,n.tag))}function Dd(e,n){switch(Lo(n),n.tag){case 1:return $e(n.type)&&Gr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Tt(),ue(Be),ue(Le),Ho(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Bo(n),null;case 13:if(ue(pe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(p(340));jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(pe),null;case 4:return Tt(),null;case 10:return Vo(n.type._context),null;case 22:case 23:return ks(),null;case 24:return null;default:return null}}var hl=!1,Me=!1,zd=typeof WeakSet=="function"?WeakSet:Set,P=null;function Lt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ve(e,n,r)}else t.current=null}function cs(e,n,t){try{t()}catch(r){ve(e,n,r)}}var du=!1;function Md(e,n){if(ko=Or,e=$i(),mo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,a=-1,u=-1,v=0,_=0,w=e,g=null;n:for(;;){for(var C;w!==t||l!==0&&w.nodeType!==3||(a=i+l),w!==o||r!==0&&w.nodeType!==3||(u=i+r),w.nodeType===3&&(i+=w.nodeValue.length),(C=w.firstChild)!==null;)g=w,w=C;for(;;){if(w===e)break n;if(g===t&&++v===l&&(a=i),g===o&&++_===r&&(u=i),(C=w.nextSibling)!==null)break;w=g,g=w.parentNode}w=C}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(So={focusedElem:e,selectionRange:t},Or=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var R=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var z=R.memoizedProps,xe=R.memoizedState,m=n.stateNode,d=m.getSnapshotBeforeUpdate(n.elementType===n.type?z:mn(n.type,z),xe);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(k){ve(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return R=du,du=!1,R}function hr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&cs(n,t,o)}l=l.next}while(l!==r)}}function vl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ds(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function fu(e){var n=e.alternate;n!==null&&(e.alternate=null,fu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_n],delete n[lr],delete n[Co],delete n[vd],delete n[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pu(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(fs(e,n,t),e=e.sibling;e!==null;)fs(e,n,t),e=e.sibling}function ps(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ps(e,n,t),e=e.sibling;e!==null;)ps(e,n,t),e=e.sibling}var Pe=null,hn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)hu(e,n,t),t=t.sibling}function hu(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Tr,t)}catch{}switch(t.tag){case 5:Me||Lt(t,n);case 6:var r=Pe,l=hn;Pe=null,Hn(e,n,t),Pe=r,hn=l,Pe!==null&&(hn?(e=Pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Pe.removeChild(t.stateNode));break;case 18:Pe!==null&&(hn?(e=Pe,t=t.stateNode,e.nodeType===8?Eo(e.parentNode,t):e.nodeType===1&&Eo(e,t),Yt(e)):Eo(Pe,t.stateNode));break;case 4:r=Pe,l=hn,Pe=t.stateNode.containerInfo,hn=!0,Hn(e,n,t),Pe=r,hn=l;break;case 0:case 11:case 14:case 15:if(!Me&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&cs(t,n,i),l=l.next}while(l!==r)}Hn(e,n,t);break;case 1:if(!Me&&(Lt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){ve(t,n,a)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(Me=(r=Me)||t.memoizedState!==null,Hn(e,n,t),Me=r):Hn(e,n,t);break;default:Hn(e,n,t)}}function vu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zd),n.forEach(function(r){var l=$d.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,hn=!1;break e;case 3:Pe=a.stateNode.containerInfo,hn=!0;break e;case 4:Pe=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(Pe===null)throw Error(p(160));hu(o,i,l),Pe=null,hn=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(v){ve(l,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)yu(n,e),n=n.sibling}function yu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Sn(e),r&4){try{hr(3,e,e.return),vl(3,e)}catch(z){ve(e,e.return,z)}try{hr(5,e,e.return)}catch(z){ve(e,e.return,z)}}break;case 1:vn(n,e),Sn(e),r&512&&t!==null&&Lt(t,t.return);break;case 5:if(vn(n,e),Sn(e),r&512&&t!==null&&Lt(t,t.return),e.flags&32){var l=e.stateNode;try{It(l,"")}catch(z){ve(e,e.return,z)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ws(l,o),$l(a,i);var v=$l(a,o);for(i=0;i<u.length;i+=2){var _=u[i],w=u[i+1];_==="style"?Js(l,w):_==="dangerouslySetInnerHTML"?Xs(l,w):_==="children"?It(l,w):Ke(l,_,w,v)}switch(a){case"input":Fl(l,o);break;case"textarea":Ks(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?ct(l,!!o.multiple,C,!1):g!==!!o.multiple&&(o.defaultValue!=null?ct(l,!!o.multiple,o.defaultValue,!0):ct(l,!!o.multiple,o.multiple?[]:"",!1))}l[lr]=o}catch(z){ve(e,e.return,z)}}break;case 6:if(vn(n,e),Sn(e),r&4){if(e.stateNode===null)throw Error(p(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(z){ve(e,e.return,z)}}break;case 3:if(vn(n,e),Sn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yt(n.containerInfo)}catch(z){ve(e,e.return,z)}break;case 4:vn(n,e),Sn(e);break;case 13:vn(n,e),Sn(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(vs=ge())),r&4&&vu(e);break;case 22:if(_=t!==null&&t.memoizedState!==null,e.mode&1?(Me=(v=Me)||_,vn(n,e),Me=v):vn(n,e),Sn(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!_&&(e.mode&1)!==0)for(P=e,_=e.child;_!==null;){for(w=P=_;P!==null;){switch(g=P,C=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Lt(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,R.props=n.memoizedProps,R.state=n.memoizedState,R.componentWillUnmount()}catch(z){ve(r,t,z)}}break;case 5:Lt(g,g.return);break;case 22:if(g.memoizedState!==null){_u(w);continue}}C!==null?(C.return=g,P=C):_u(w)}_=_.sibling}e:for(_=null,w=e;;){if(w.tag===5){if(_===null){_=w;try{l=w.stateNode,v?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=w.stateNode,u=w.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Zs("display",i))}catch(z){ve(e,e.return,z)}}}else if(w.tag===6){if(_===null)try{w.stateNode.nodeValue=v?"":w.memoizedProps}catch(z){ve(e,e.return,z)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;_===w&&(_=null),w=w.return}_===w&&(_=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:vn(n,e),Sn(e),r&4&&vu(e);break;case 21:break;default:vn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(pu(t)){var r=t;break e}t=t.return}throw Error(p(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(It(l,""),r.flags&=-33);var o=mu(e);ps(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=mu(e);fs(e,a,i);break;default:throw Error(p(161))}}catch(u){ve(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Od(e,n,t){P=e,gu(e)}function gu(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var l=P,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||hl;if(!i){var a=l.alternate,u=a!==null&&a.memoizedState!==null||Me;a=hl;var v=Me;if(hl=i,(Me=u)&&!v)for(P=l;P!==null;)i=P,u=i.child,i.tag===22&&i.memoizedState!==null?wu(l):u!==null?(u.return=i,P=u):wu(l);for(;o!==null;)P=o,gu(o),o=o.sibling;P=l,hl=a,Me=v}xu(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,P=o):xu(e)}}function xu(e){for(;P!==null;){var n=P;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Me||vl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Me)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:mn(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&_a(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_a(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var _=v.memoizedState;if(_!==null){var w=_.dehydrated;w!==null&&Yt(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Me||n.flags&512&&ds(n)}catch(g){ve(n,n.return,g)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function _u(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function wu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{vl(4,n)}catch(u){ve(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){ve(n,l,u)}}var o=n.return;try{ds(n)}catch(u){ve(n,o,u)}break;case 5:var i=n.return;try{ds(n)}catch(u){ve(n,i,u)}}}catch(u){ve(n,n.return,u)}if(n===e){P=null;break}var a=n.sibling;if(a!==null){a.return=n.return,P=a;break}P=n.return}}var Id=Math.ceil,yl=_e.ReactCurrentDispatcher,ms=_e.ReactCurrentOwner,sn=_e.ReactCurrentBatchConfig,K=0,Ee=null,we=null,Te=0,en=0,Dt=Un(0),Ne=0,vr=null,ot=0,gl=0,hs=0,yr=null,We=null,vs=0,zt=1/0,Ln=null,xl=!1,ys=null,Wn=null,_l=!1,Qn=null,wl=0,gr=0,gs=null,kl=-1,Sl=0;function Ve(){return(K&6)!==0?ge():kl!==-1?kl:kl=ge()}function Yn(e){return(e.mode&1)===0?1:(K&2)!==0&&Te!==0?Te&-Te:xd.transition!==null?(Sl===0&&(Sl=mi()),Sl):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Si(e.type)),e)}function yn(e,n,t,r){if(50<gr)throw gr=0,gs=null,Error(p(185));Bt(e,t,r),((K&2)===0||e!==Ee)&&(e===Ee&&((K&2)===0&&(gl|=t),Ne===4&&Kn(e,Te)),Qe(e,r),t===1&&K===0&&(n.mode&1)===0&&(zt=ge()+500,Xr&&An()))}function Qe(e,n){var t=e.callbackNode;xc(e,n);var r=Dr(e,e===Ee?Te:0);if(r===0)t!==null&&di(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&di(t),n===1)e.tag===0?gd(Su.bind(null,e)):aa(Su.bind(null,e)),md(function(){(K&6)===0&&An()}),t=null;else{switch(hi(r)){case 1:t=ql;break;case 4:t=fi;break;case 16:t=Pr;break;case 536870912:t=pi;break;default:t=Pr}t=Lu(t,ku.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ku(e,n){if(kl=-1,Sl=0,(K&6)!==0)throw Error(p(327));var t=e.callbackNode;if(Mt()&&e.callbackNode!==t)return null;var r=Dr(e,e===Ee?Te:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Nl(e,r);else{n=r;var l=K;K|=2;var o=ju();(Ee!==e||Te!==n)&&(Ln=null,zt=ge()+500,it(e,n));do try{Ud();break}catch(a){Nu(e,a)}while(!0);Io(),yl.current=o,K=l,we!==null?n=0:(Ee=null,Te=0,n=Ne)}if(n!==0){if(n===2&&(l=Xl(e),l!==0&&(r=l,n=xs(e,l))),n===1)throw t=vr,it(e,0),Kn(e,r),Qe(e,ge()),t;if(n===6)Kn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Vd(l)&&(n=Nl(e,r),n===2&&(o=Xl(e),o!==0&&(r=o,n=xs(e,o))),n===1))throw t=vr,it(e,0),Kn(e,r),Qe(e,ge()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(p(345));case 2:at(e,We,Ln);break;case 3:if(Kn(e,r),(r&130023424)===r&&(n=vs+500-ge(),10<n)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jo(at.bind(null,e,We,Ln),n);break}at(e,We,Ln);break;case 4:if(Kn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-dn(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Id(r/1960))-r,10<r){e.timeoutHandle=jo(at.bind(null,e,We,Ln),r);break}at(e,We,Ln);break;case 5:at(e,We,Ln);break;default:throw Error(p(329))}}}return Qe(e,ge()),e.callbackNode===t?ku.bind(null,e):null}function xs(e,n){var t=yr;return e.current.memoizedState.isDehydrated&&(it(e,n).flags|=256),e=Nl(e,n),e!==2&&(n=We,We=t,n!==null&&_s(n)),e}function _s(e){We===null?We=e:We.push.apply(We,e)}function Vd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!fn(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Kn(e,n){for(n&=~hs,n&=~gl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-dn(n),r=1<<t;e[t]=-1,n&=~r}}function Su(e){if((K&6)!==0)throw Error(p(327));Mt();var n=Dr(e,0);if((n&1)===0)return Qe(e,ge()),null;var t=Nl(e,n);if(e.tag!==0&&t===2){var r=Xl(e);r!==0&&(n=r,t=xs(e,r))}if(t===1)throw t=vr,it(e,0),Kn(e,n),Qe(e,ge()),t;if(t===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,at(e,We,Ln),Qe(e,ge()),null}function ws(e,n){var t=K;K|=1;try{return e(n)}finally{K=t,K===0&&(zt=ge()+500,Xr&&An())}}function st(e){Qn!==null&&Qn.tag===0&&(K&6)===0&&Mt();var n=K;K|=1;var t=sn.transition,r=oe;try{if(sn.transition=null,oe=1,e)return e()}finally{oe=r,sn.transition=t,K=n,(K&6)===0&&An()}}function ks(){en=Dt.current,ue(Dt)}function it(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pd(t)),we!==null)for(t=we.return;t!==null;){var r=t;switch(Lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:Tt(),ue(Be),ue(Le),Ho();break;case 5:Bo(r);break;case 4:Tt();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:Vo(r.type._context);break;case 22:case 23:ks()}t=t.return}if(Ee=e,we=e=Gn(e.current,null),Te=en=n,Ne=0,vr=null,hs=gl=ot=0,We=yr=null,tt!==null){for(n=0;n<tt.length;n++)if(t=tt[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}tt=null}return e}function Nu(e,n){do{var t=we;try{if(Io(),il.current=dl,al){for(var r=me.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}al=!1}if(lt=0,je=Se=me=null,cr=!1,dr=0,ms.current=null,t===null||t.return===null){Ne=1,vr=n,we=null;break}e:{var o=e,i=t.return,a=t,u=n;if(n=Te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var v=u,_=a,w=_.tag;if((_.mode&1)===0&&(w===0||w===11||w===15)){var g=_.alternate;g?(_.updateQueue=g.updateQueue,_.memoizedState=g.memoizedState,_.lanes=g.lanes):(_.updateQueue=null,_.memoizedState=null)}var C=Ga(i);if(C!==null){C.flags&=-257,qa(C,i,a,o,n),C.mode&1&&Ka(o,v,n),n=C,u=v;var R=n.updateQueue;if(R===null){var z=new Set;z.add(u),n.updateQueue=z}else R.add(u);break e}else{if((n&1)===0){Ka(o,v,n),Ss();break e}u=Error(p(426))}}else if(fe&&a.mode&1){var xe=Ga(i);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),qa(xe,i,a,o,n),Mo(Rt(u,a));break e}}o=u=Rt(u,a),Ne!==4&&(Ne=2),yr===null?yr=[o]:yr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=Qa(o,u,n);xa(o,m);break e;case 1:a=u;var d=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Wn===null||!Wn.has(h)))){o.flags|=65536,n&=-n,o.lanes|=n;var k=Ya(o,a,n);xa(o,k);break e}}o=o.return}while(o!==null)}Cu(t)}catch(M){n=M,we===t&&t!==null&&(we=t=t.return);continue}break}while(!0)}function ju(){var e=yl.current;return yl.current=dl,e===null?dl:e}function Ss(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ee===null||(ot&268435455)===0&&(gl&268435455)===0||Kn(Ee,Te)}function Nl(e,n){var t=K;K|=2;var r=ju();(Ee!==e||Te!==n)&&(Ln=null,it(e,n));do try{Fd();break}catch(l){Nu(e,l)}while(!0);if(Io(),K=t,yl.current=r,we!==null)throw Error(p(261));return Ee=null,Te=0,Ne}function Fd(){for(;we!==null;)Eu(we)}function Ud(){for(;we!==null&&!cc();)Eu(we)}function Eu(e){var n=Ru(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?Cu(e):we=n,ms.current=null}function Cu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Ld(t,n,en),t!==null){we=t;return}}else{if(t=Dd(t,n),t!==null){t.flags&=32767,we=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,we=null;return}}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Ne===0&&(Ne=5)}function at(e,n,t){var r=oe,l=sn.transition;try{sn.transition=null,oe=1,bd(e,n,t,r)}finally{sn.transition=l,oe=r}return null}function bd(e,n,t,r){do Mt();while(Qn!==null);if((K&6)!==0)throw Error(p(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(_c(e,o),e===Ee&&(we=Ee=null,Te=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||_l||(_l=!0,Lu(Pr,function(){return Mt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=sn.transition,sn.transition=null;var i=oe;oe=1;var a=K;K|=4,ms.current=null,Md(e,t),yu(t,e),sd(So),Or=!!ko,So=ko=null,e.current=t,Od(t),dc(),K=a,oe=i,sn.transition=o}else e.current=t;if(_l&&(_l=!1,Qn=e,wl=l),o=e.pendingLanes,o===0&&(Wn=null),mc(t.stateNode),Qe(e,ge()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(xl)throw xl=!1,e=ys,ys=null,e;return(wl&1)!==0&&e.tag!==0&&Mt(),o=e.pendingLanes,(o&1)!==0?e===gs?gr++:(gr=0,gs=e):gr=0,An(),null}function Mt(){if(Qn!==null){var e=hi(wl),n=sn.transition,t=oe;try{if(sn.transition=null,oe=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,wl=0,(K&6)!==0)throw Error(p(331));var l=K;for(K|=4,P=e.current;P!==null;){var o=P,i=o.child;if((P.flags&16)!==0){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var v=a[u];for(P=v;P!==null;){var _=P;switch(_.tag){case 0:case 11:case 15:hr(8,_,o)}var w=_.child;if(w!==null)w.return=_,P=w;else for(;P!==null;){_=P;var g=_.sibling,C=_.return;if(fu(_),_===v){P=null;break}if(g!==null){g.return=C,P=g;break}P=C}}}var R=o.alternate;if(R!==null){var z=R.child;if(z!==null){R.child=null;do{var xe=z.sibling;z.sibling=null,z=xe}while(z!==null)}}P=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,P=m;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){i=P;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,P=h;else e:for(i=d;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(M){ve(a,a.return,M)}if(a===i){P=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,P=k;break e}P=a.return}}if(K=l,An(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Tr,e)}catch{}r=!0}return r}finally{oe=t,sn.transition=n}}return!1}function Pu(e,n,t){n=Rt(t,n),n=Qa(e,n,1),e=$n(e,n,1),n=Ve(),e!==null&&(Bt(e,1,n),Qe(e,n))}function ve(e,n,t){if(e.tag===3)Pu(e,e,t);else for(;n!==null;){if(n.tag===3){Pu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){e=Rt(t,e),e=Ya(n,e,1),n=$n(n,e,1),e=Ve(),n!==null&&(Bt(n,1,e),Qe(n,e));break}}n=n.return}}function Ad(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ve(),e.pingedLanes|=e.suspendedLanes&t,Ee===e&&(Te&t)===t&&(Ne===4||Ne===3&&(Te&130023424)===Te&&500>ge()-vs?it(e,0):hs|=t),Qe(e,n)}function Tu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var t=Ve();e=Pn(e,n),e!==null&&(Bt(e,n,t),Qe(e,t))}function Bd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Tu(e,t)}function $d(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(n),Tu(e,t)}var Ru;Ru=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Be.current)He=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return He=!1,Rd(e,n,t);He=(e.flags&131072)!==0}else He=!1,fe&&(n.flags&1048576)!==0&&ua(n,Jr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ml(e,n),e=n.pendingProps;var l=kt(n,Le.current);Pt(n,t),l=Yo(null,n,r,e,l,t);var o=Ko();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,$e(r)?(o=!0,qr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,bo(n),l.updater=fl,n.stateNode=l,l._reactInternals=n,es(n,r,e,t),n=ls(null,n,r,!0,o,t)):(n.tag=0,fe&&o&&Ro(n),Ie(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ml(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Wd(r),e=mn(r,e),l){case 0:n=rs(null,n,r,e,t);break e;case 1:n=tu(null,n,r,e,t);break e;case 11:n=Xa(null,n,r,e,t);break e;case 14:n=Za(null,n,r,mn(r.type,e),t);break e}throw Error(p(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:mn(r,l),rs(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:mn(r,l),tu(e,n,r,l,t);case 3:e:{if(ru(n),e===null)throw Error(p(387));r=n.pendingProps,o=n.memoizedState,l=o.element,ga(e,n),ol(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Rt(Error(p(423)),n),n=lu(e,n,r,t,l);break e}else if(r!==l){l=Rt(Error(p(424)),n),n=lu(e,n,r,t,l);break e}else for(Je=Fn(n.stateNode.containerInfo.firstChild),Ze=n,fe=!0,pn=null,t=va(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),r===l){n=Rn(e,n,t);break e}Ie(e,n,r,t)}n=n.child}return n;case 5:return wa(n),e===null&&zo(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,No(r,l)?i=null:o!==null&&No(r,o)&&(n.flags|=32),nu(e,n),Ie(e,n,i,t),n.child;case 6:return e===null&&zo(n),null;case 13:return ou(e,n,t);case 4:return Ao(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Et(n,null,r,t):Ie(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:mn(r,l),Xa(e,n,r,l,t);case 7:return Ie(e,n,n.pendingProps,t),n.child;case 8:return Ie(e,n,n.pendingProps.children,t),n.child;case 12:return Ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,ie(tl,r._currentValue),r._currentValue=i,o!==null)if(fn(o.value,i)){if(o.children===l.children&&!Be.current){n=Rn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Tn(-1,t&-t),u.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var _=v.pending;_===null?u.next=u:(u.next=_.next,_.next=u),v.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Fo(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(p(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Fo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ie(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Pt(n,t),l=ln(l),r=r(l),n.flags|=1,Ie(e,n,r,t),n.child;case 14:return r=n.type,l=mn(r,n.pendingProps),l=mn(r.type,l),Za(e,n,r,l,t);case 15:return Ja(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:mn(r,l),ml(e,n),n.tag=1,$e(r)?(e=!0,qr(n)):e=!1,Pt(n,t),Ha(n,r,l),es(n,r,l,t),ls(null,n,r,!0,e,t);case 19:return iu(e,n,t);case 22:return eu(e,n,t)}throw Error(p(156,n.tag))};function Lu(e,n){return ci(e,n)}function Hd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,t,r){return new Hd(e,n,t,r)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wd(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ue)return 11;if(e===gn)return 14}return 2}function Gn(e,n){var t=e.alternate;return t===null?(t=an(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function jl(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Ns(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Q:return ut(t.children,l,o,n);case X:i=8,l|=8;break;case re:return e=an(12,t,n,l|2),e.elementType=re,e.lanes=o,e;case Re:return e=an(13,t,n,l),e.elementType=Re,e.lanes=o,e;case be:return e=an(19,t,n,l),e.elementType=be,e.lanes=o,e;case he:return El(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ge:i=10;break e;case cn:i=9;break e;case Ue:i=11;break e;case gn:i=14;break e;case Ae:i=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return n=an(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function ut(e,n,t,r){return e=an(7,e,r,n),e.lanes=t,e}function El(e,n,t,r){return e=an(22,e,r,n),e.elementType=he,e.lanes=t,e.stateNode={isHidden:!1},e}function js(e,n,t){return e=an(6,e,null,n),e.lanes=t,e}function Es(e,n,t){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Qd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Cs(e,n,t,r,l,o,i,a,u){return e=new Qd(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=an(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bo(o),e}function Yd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Du(e){if(!e)return bn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(p(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if($e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(p(171))}if(e.tag===1){var t=e.type;if($e(t))return sa(e,t,n)}return n}function zu(e,n,t,r,l,o,i,a,u){return e=Cs(t,r,!0,e,l,o,i,a,u),e.context=Du(null),t=e.current,r=Ve(),l=Yn(t),o=Tn(r,l),o.callback=n??null,$n(t,o,l),e.current.lanes=l,Bt(e,l,r),Qe(e,r),e}function Cl(e,n,t,r){var l=n.current,o=Ve(),i=Yn(l);return t=Du(t),n.context===null?n.context=t:n.pendingContext=t,n=Tn(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=$n(l,n,i),e!==null&&(yn(e,l,i,o),ll(e,l,i)),i}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ps(e,n){Mu(e,n),(e=e.alternate)&&Mu(e,n)}function Kd(){return null}var Ou=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}Tl.prototype.render=Ts.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(p(409));Cl(e,n,null,null)},Tl.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;st(function(){Cl(null,e,null,null)}),n[Nn]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var n=gi();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&wi(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function Gd(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var v=Pl(i);o.call(v)}}var i=zu(n,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=i,e[Nn]=i.current,tr(e.nodeType===8?e.parentNode:e),st(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var v=Pl(u);a.call(v)}}var u=Cs(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=u,e[Nn]=u.current,tr(e.nodeType===8?e.parentNode:e),st(function(){Cl(n,u,t,r)}),u}function Ll(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var u=Pl(i);a.call(u)}}Cl(n,i,e,l)}else i=Gd(t,n,e,l,r);return Pl(i)}vi=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=At(n.pendingLanes);t!==0&&(Jl(n,t|1),Qe(n,ge()),(K&6)===0&&(zt=ge()+500,An()))}break;case 13:st(function(){var r=Pn(e,1);if(r!==null){var l=Ve();yn(r,e,1,l)}}),Ps(e,1)}},eo=function(e){if(e.tag===13){var n=Pn(e,134217728);if(n!==null){var t=Ve();yn(n,e,134217728,t)}Ps(e,134217728)}},yi=function(e){if(e.tag===13){var n=Yn(e),t=Pn(e,n);if(t!==null){var r=Ve();yn(t,e,n,r)}Ps(e,n)}},gi=function(){return oe},xi=function(e,n){var t=oe;try{return oe=e,n()}finally{oe=t}},Ql=function(e,n,t){switch(n){case"input":if(Fl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Kr(r);if(!l)throw Error(p(90));$s(r),Fl(r,l)}}}break;case"textarea":Ks(e,t);break;case"select":n=t.value,n!=null&&ct(e,!!t.multiple,n,!1)}},ri=ws,li=st;var qd={usingClientEntryPoint:!1,Events:[or,_t,Kr,ni,ti,ws]},xr={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xd={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ai(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Kd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{Tr=Dl.inject(Xd),xn=Dl}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qd,Ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(n))throw Error(p(200));return Yd(e,n,null,t)},Ye.createRoot=function(e,n){if(!Rs(e))throw Error(p(299));var t=!1,r="",l=Ou;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Cs(e,1,!1,null,null,t,!1,r,l),e[Nn]=n.current,tr(e.nodeType===8?e.parentNode:e),new Ts(n)},Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=ai(n),e=e===null?null:e.stateNode,e},Ye.flushSync=function(e){return st(e)},Ye.hydrate=function(e,n,t){if(!Rl(n))throw Error(p(200));return Ll(null,e,n,!0,t)},Ye.hydrateRoot=function(e,n,t){if(!Rs(e))throw Error(p(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Ou;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=zu(n,null,e,1,t??null,l,!1,o,i),e[Nn]=n.current,tr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Tl(n)},Ye.render=function(e,n,t){if(!Rl(n))throw Error(p(200));return Ll(null,e,n,!1,t)},Ye.unmountComponentAtNode=function(e){if(!Rl(e))throw Error(p(40));return e._reactRootContainer?(st(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Nn]=null})}),!0):!1},Ye.unstable_batchedUpdates=ws,Ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Rl(t))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Ll(e,n,t,!1,r)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var Hu;function sf(){if(Hu)return zs.exports;Hu=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(y){console.error(y)}}return c(),zs.exports=of(),zs.exports}var Wu;function af(){if(Wu)return zl;Wu=1;var c=sf();return zl.createRoot=c.createRoot,zl.hydrateRoot=c.hydrateRoot,zl}var uf=af();const cf=ec(uf),Vs="vpn-registry:v1";function Il(){return[{id:1,host_name:"Aeza",login_url:"https://aeza.net/login",login:"d.ivanov@gmail.com",login_method:"Google",vpn_system:"Remnawave panel",country_name:"Нидерланды",country_flag:"🇳🇱",domain:"nl1.aeza-vpn.example",ip:"185.174.101.24",server_login:"root",server_password:"Zx9!mK2pQ7",payment_period:"ежемесячно",payment_cost:5.6,payment_currency:"USD",payment_day:12},{id:2,host_name:"Timeweb Cloud",login_url:"https://timeweb.cloud/login",login:"ivanov@corp.ru",login_method:"",vpn_system:"3x-ui",country_name:"Германия",country_flag:"🇩🇪",domain:"de.tw-vpn.example",ip:"92.53.120.77",server_login:"root",server_password:"Tb4#kL0s",payment_period:"ежемесячно",payment_cost:2.5,payment_currency:"EUR",payment_day:3},{id:3,host_name:"VDSina",login_url:"https://vdsina.ru/login",login:"ivanov_d",login_method:"ВКонтакте",vpn_system:"Wireguard",country_name:"Россия",country_flag:"🇷🇺",domain:"",ip:"91.243.60.11",server_login:"admin",server_password:"Vd5$plQw2",payment_period:"ежемесячно",payment_cost:320,payment_currency:"RUB",payment_day:27},{id:4,host_name:"FirstVDS",login_url:"https://firstvds.ru/login",login:"",login_method:"Телеграм",vpn_system:"Remnawave node",country_name:"Финляндия",country_flag:"🇫🇮",domain:"fi.remnw.example",ip:"45.147.196.8",server_login:"root",server_password:"Fn7@rtYe1",payment_period:"ежемесячно",payment_cost:190,payment_currency:"RUB",payment_day:8},{id:5,host_name:"Hetzner",login_url:"https://accounts.hetzner.com/login",login:"d.ivanov@gmail.com",login_method:"Google",vpn_system:"Amnezia",country_name:"Германия",country_flag:"🇩🇪",domain:"amnez.hetz.example",ip:"116.203.88.140",server_login:"root",server_password:"Hz2&vcBn9",payment_period:"ежеквартально",payment_cost:11.7,payment_currency:"EUR",payment_day:15},{id:6,host_name:"DigitalOcean",login_url:"https://cloud.digitalocean.com/login",login:"ivanov.dev@proton.me",login_method:"Google",vpn_system:"3x-ui pro",country_name:"США",country_flag:"🇺🇸",domain:"us.do-vpn.example",ip:"143.198.52.210",server_login:"root",server_password:"Do8!zxTr4",payment_period:"ежемесячно",payment_cost:6,payment_currency:"USD",payment_day:1}]}function df(){try{const c=localStorage.getItem(Vs);if(!c){const p=Il();return localStorage.setItem(Vs,JSON.stringify(p)),p}const y=JSON.parse(c);return Array.isArray(y)?y:Il()}catch{return Il()}}function ff(c){try{localStorage.setItem(Vs,JSON.stringify(c))}catch{}}function pf(c){return c.reduce((y,p)=>Math.max(y,p.id),0)+1}const nc=[{ru:"Россия",en:"Russia",flag:"🇷🇺"},{ru:"Германия",en:"Germany",flag:"🇩🇪"},{ru:"Нидерланды",en:"Netherlands",flag:"🇳🇱"},{ru:"США",en:"United States",flag:"🇺🇸"},{ru:"Великобритания",en:"United Kingdom",flag:"🇬🇧"},{ru:"Франция",en:"France",flag:"🇫🇷"},{ru:"Финляндия",en:"Finland",flag:"🇫🇮"},{ru:"Швеция",en:"Sweden",flag:"🇸🇪"},{ru:"Польша",en:"Poland",flag:"🇵🇱"},{ru:"Латвия",en:"Latvia",flag:"🇱🇻"},{ru:"Молдова",en:"Moldova",flag:"🇲🇩"},{ru:"Украина",en:"Ukraine",flag:"🇺🇦"},{ru:"Казахстан",en:"Kazakhstan",flag:"🇰🇿"},{ru:"Узбекистан",en:"Uzbekistan",flag:"🇺🇿"},{ru:"Грузия",en:"Georgia",flag:"🇬🇪"},{ru:"Турция",en:"Turkey",flag:"🇹🇷"},{ru:"ОАЭ",en:"United Arab Emirates",flag:"🇦🇪"},{ru:"Сингапур",en:"Singapore",flag:"🇸🇬"},{ru:"Япония",en:"Japan",flag:"🇯🇵"},{ru:"Канада",en:"Canada",flag:"🇨🇦"}],mf=["Remnawave panel","Remnawave node","3x-ui","3x-ui pro","Amnezia","Wireguard","Другое"],hf=["Google","ВКонтакте","Телеграм","Логин пароль"],vf=["ежемесячно","ежеквартально","раз в полгода","ежегодно"],yf=["RUB","USD","EUR","UAH","BYN","KZT","UZS","TRY","AED","THB","CNY","GBP"],gf={ежемесячно:1,ежеквартально:3,"раз в полгода":6,ежегодно:12},xf={"Remnawave panel":"bg-sea-400","Remnawave node":"bg-ember-400","3x-ui":"bg-glacier-400","3x-ui pro":"bg-coral-400",Amnezia:"bg-sea-300",Wireguard:"bg-mist-300"};function Qu(c){var y;return((y=nc.find(p=>p.ru===c))==null?void 0:y.flag)??""}const _f=["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];function wf(c){return Math.abs(c-Math.round(c))<.005?String(Math.round(c)):c.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function kf(c){const y=new Date,p=new Date(y.getFullYear(),y.getMonth(),y.getDate()),N=new Date(y.getFullYear(),y.getMonth()+1,0).getDate();let j=new Date(y.getFullYear(),y.getMonth(),Math.min(c,N));if(j<p){const O=new Date(y.getFullYear(),y.getMonth()+2,0).getDate();j=new Date(y.getFullYear(),y.getMonth()+1,Math.min(c,O))}return{date:j,diff:Math.round((j.getTime()-p.getTime())/864e5)}}function Sf({locations:c}){const y=ye.useMemo(()=>{const N=new Set(c.map(L=>L.country_name)).size,j=new Set(c.map(L=>L.vpn_system)).size,O=new Map;for(const L of c){if(L.payment_cost==null||!L.payment_currency)continue;const U=gf[L.payment_period]??1;O.set(L.payment_currency,(O.get(L.payment_currency)??0)+L.payment_cost/U)}const G=[...O.entries()].sort((L,U)=>U[1]-L[1]).slice(0,3).map(([L,U])=>`${wf(U)} ${L}`).join(" · ");let B=null;for(const L of c){if(L.payment_day==null)continue;const{date:U,diff:ne}=kf(L.payment_day);(!B||ne<B.diff)&&(B={host:L.host_name,day:L.payment_day,diff:ne,date:U})}return{total:c.length,countries:N,systems:j,monthly:G,nearest:B}},[c]),p=[{label:"Локаций в реестре",value:String(y.total),sub:"data/vpn_locations.csv",dot:!0},{label:"Стран",value:String(y.countries),sub:y.countries===0?"—":"география серверов"},{label:"VPN-систем",value:String(y.systems),sub:"remnawave · 3x-ui · …"},{label:"≈ Расход в месяц",value:y.monthly||"—",sub:"по всем валютам",accent:"text-ember-300"},{label:"Ближайшая оплата",value:y.nearest?`${y.nearest.date.getDate()} ${_f[y.nearest.date.getMonth()]}`:"—",sub:y.nearest?`${y.nearest.host} · через ${y.nearest.diff} дн.`:"нет дат оплаты",accent:y.nearest&&y.nearest.diff<=3?"text-coral-300":"text-sea-300"}];return s.jsx("div",{className:"anim-rise grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-abyss-700 bg-abyss-700 sm:grid-cols-3 lg:grid-cols-5",children:p.map((N,j)=>s.jsxs("div",{className:"anim-rise bg-abyss-850 px-4 py-3.5 transition-colors duration-200 hover:bg-abyss-800",style:{animationDelay:`${80+j*70}ms`},children:[s.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mist-600",children:[N.dot&&s.jsx("span",{className:"pulse-dot h-1.5 w-1.5 rounded-full bg-sea-400"}),N.label]}),s.jsx("div",{className:`mt-1.5 font-display text-lg leading-tight font-semibold ${N.accent??"text-mist-100"}`,children:N.value}),s.jsx("div",{className:"mt-0.5 truncate font-mono text-[11px] text-mist-600",children:N.sub})]},N.label))})}const ke={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"},Nf=c=>s.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",...c,children:[s.jsx("circle",{cx:"16",cy:"16",r:"11",stroke:"#3ecfb2",strokeWidth:"2"}),s.jsx("ellipse",{cx:"16",cy:"16",rx:"5",ry:"11",stroke:"#3ecfb2",strokeWidth:"1.2",opacity:".6"}),s.jsx("path",{d:"M5 16h22",stroke:"#3ecfb2",strokeWidth:"1.2",opacity:".6"}),s.jsx("circle",{cx:"16",cy:"5",r:"2.6",fill:"#ffb454"}),s.jsx("circle",{cx:"26.5",cy:"20",r:"2.1",fill:"#6fb3ff"}),s.jsx("circle",{cx:"6.5",cy:"22",r:"1.8",fill:"#ff6f61"})]}),Fs=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M12 5v14M5 12h14"})}),Yu=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("path",{d:"M4 20l4.5-1 11-11a2.12 2.12 0 0 0-3-3l-11 11L4 20Z"}),s.jsx("path",{d:"M13.5 6.5l3 3"})]}),Us=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("path",{d:"M4 7h16"}),s.jsx("path",{d:"M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}),s.jsx("path",{d:"M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12"}),s.jsx("path",{d:"M10 11v6M14 11v6"})]}),Bs=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),s.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),kr=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M5 13l4 4L19 7"})}),Ku=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M7 17 17 7M9 7h8v8"})}),jf=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("path",{d:"M20 20l-3.2-3.2"})]}),Ef=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M6 15l6-6 6 6"})}),Cf=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M6 9l6 6 6-6"})}),Pf=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("path",{d:"M8 5v14M5 8l3-3 3 3"}),s.jsx("path",{d:"M16 19V5M13 16l3 3 3-3"})]}),bs=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M6 6l12 12M18 6L6 18"})}),Gu=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("path",{d:"M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.6"})]}),qu=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("path",{d:"M2 12s3.5-6.5 10-6.5c2 0 3.7.6 5.1 1.4M22 12s-3.5 6.5-10 6.5c-2 0-3.7-.6-5.1-1.4"}),s.jsx("path",{d:"M4 4l16 16"})]}),Tf=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("rect",{x:"3",y:"4",width:"18",height:"7",rx:"2"}),s.jsx("rect",{x:"3",y:"13",width:"18",height:"7",rx:"2"}),s.jsx("circle",{cx:"7",cy:"7.5",r:"0.9",fill:"currentColor",stroke:"none"}),s.jsx("circle",{cx:"7",cy:"16.5",r:"0.9",fill:"currentColor",stroke:"none"})]}),tc=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M8 6l-6 6 6 6M16 6l6 6-6 6"})}),Rf=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),s.jsx("path",{d:"M7 9l3 3-3 3M12.5 15H17"})]}),Lf=c=>s.jsx("svg",{...ke,...c,children:s.jsx("path",{d:"M12 6.5C10.5 5 8.5 4.5 3.5 4.5v14c5 0 7 .5 8.5 2 1.5-1.5 3.5-2 8.5-2v-14c-5 0-7 .5-8.5 2v14"})}),Df=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("path",{d:"M12 3l9 5-9 5-9-5 9-5Z"}),s.jsx("path",{d:"M3 13l9 5 9-5"}),s.jsx("path",{d:"M3 17.5l9 5 9-5",opacity:".5"})]}),zf=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("path",{d:"M12 3l7 3v5.2c0 4.4-3 8-7 9.3-4-1.3-7-4.9-7-9.3V6l7-3Z"}),s.jsx("circle",{cx:"12",cy:"11",r:"1.6"}),s.jsx("path",{d:"M12 12.6v2.6"})]}),Mf=c=>s.jsxs("svg",{...ke,...c,children:[s.jsx("ellipse",{cx:"12",cy:"5.5",rx:"7.5",ry:"3"}),s.jsx("path",{d:"M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13"}),s.jsx("path",{d:"M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"})]}),Xu={ежемесячно:"ежемес.",ежеквартально:"квартал","раз в полгода":"полгода",ежегодно:"год"};function wr({field:c,label:y,sort:p,onSort:N,className:j=""}){const O=p.field===c;return s.jsx("th",{className:`px-4 py-3 ${j}`,children:s.jsxs("button",{onClick:()=>N(c),className:`group inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${O?"text-sea-300":"text-mist-600 hover:text-mist-300"}`,title:`Сортировать по «${y}»`,children:[y,O?p.dir==="asc"?s.jsx(Ef,{className:"h-3 w-3"}):s.jsx(Cf,{className:"h-3 w-3"}):s.jsx(Pf,{className:"h-3 w-3 opacity-40 transition-opacity group-hover:opacity-80"})]})})}function Zu({system:c}){return s.jsxs("span",{className:"inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-abyss-600 bg-abyss-850 px-2.5 py-0.5 text-xs text-mist-300",children:[s.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${xf[c]??"bg-mist-500"}`}),c]})}function Of({rows:c,totalCount:y,sort:p,onSort:N,onEdit:j,onDelete:O,onCopy:G,onAdd:B,onResetDemo:L}){const[U,ne]=ye.useState(null),Y=ye.useRef(null),D=S=>{G(S.server_password,S.host_name),ne(S.id),Y.current&&window.clearTimeout(Y.current),Y.current=window.setTimeout(()=>ne(null),1500)};return y===0?s.jsxs("div",{className:"anim-rise rounded-lg border border-dashed border-abyss-600 bg-abyss-850/60 px-6 py-16 text-center",children:[s.jsx(Mf,{className:"mx-auto h-10 w-10 text-mist-600"}),s.jsx("h3",{className:"mt-4 font-display text-lg font-semibold text-mist-100",children:"Реестр пуст"}),s.jsx("p",{className:"mx-auto mt-1 max-w-sm text-sm text-mist-500",children:"В CSV пока нет ни одной записи. Добавьте первую VPN-локацию или верните демо-данные."}),s.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-3",children:[s.jsxs("button",{onClick:B,className:"inline-flex items-center gap-2 rounded-md bg-sea-500 px-4 py-2 text-sm font-semibold text-abyss-950 transition-all hover:bg-sea-400 hover:shadow-[0_0_24px_rgba(62,207,178,0.25)]",children:[s.jsx(Fs,{className:"h-4 w-4"})," Добавить локацию"]}),s.jsx("button",{onClick:L,className:"rounded-md border border-abyss-600 px-4 py-2 text-sm text-mist-300 transition-colors hover:border-sea-600 hover:text-sea-300",children:"Вернуть демо-данные"})]})]}):c.length===0?s.jsxs("div",{className:"anim-rise rounded-lg border border-dashed border-abyss-600 bg-abyss-850/60 px-6 py-12 text-center",children:[s.jsx("p",{className:"font-display text-base font-semibold text-mist-300",children:"Ничего не найдено"}),s.jsx("p",{className:"mt-1 text-sm text-mist-500",children:"Попробуйте изменить поисковый запрос."})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"anim-rise hidden overflow-hidden rounded-lg border border-abyss-700 bg-abyss-850/70 lg:block",children:s.jsxs("table",{className:"w-full border-collapse text-left",children:[s.jsx("thead",{className:"border-b border-abyss-700 bg-abyss-900/80",children:s.jsxs("tr",{children:[s.jsx(wr,{field:"id",label:"ID",sort:p,onSort:N,className:"w-14"}),s.jsx(wr,{field:"host_name",label:"Хостер",sort:p,onSort:N}),s.jsx(wr,{field:"country_name",label:"Страна",sort:p,onSort:N}),s.jsx(wr,{field:"vpn_system",label:"VPN-система",sort:p,onSort:N}),s.jsx("th",{className:"px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-mist-600",children:"Домен / IP"}),s.jsx(wr,{field:"payment_cost",label:"Оплата",sort:p,onSort:N}),s.jsx("th",{className:"px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-mist-600",children:"Пароль"}),s.jsx("th",{className:"w-24 px-4 py-3"})]})}),s.jsx("tbody",{children:c.map((S,ce)=>s.jsxs("tr",{className:"anim-rise group border-b border-abyss-800 last:border-0 transition-colors duration-150 hover:bg-sea-500/[0.045]",style:{animationDelay:`${Math.min(ce*45,400)}ms`},children:[s.jsx("td",{className:"px-4 py-3 font-mono text-xs text-mist-600",children:S.id}),s.jsxs("td",{className:"px-4 py-3",children:[s.jsxs("a",{href:S.login_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 font-semibold text-mist-100 decoration-sea-600/50 underline-offset-4 transition-colors hover:text-sea-300 hover:underline",title:S.login_url,children:[S.host_name,s.jsx(Ku,{className:"h-3 w-3 text-mist-600 transition-colors group-hover:text-sea-400"})]}),s.jsxs("div",{className:"mt-0.5 text-xs text-mist-500",children:[S.login||"—",S.login_method&&s.jsxs("span",{className:"text-mist-600",children:[" · через ",S.login_method]})]})]}),s.jsxs("td",{className:"whitespace-nowrap px-4 py-3 text-sm",children:[s.jsx("span",{className:"mr-1.5",children:S.country_flag}),S.country_name]}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(Zu,{system:S.vpn_system})}),s.jsxs("td",{className:"px-4 py-3 font-mono text-xs leading-relaxed",children:[S.domain&&s.jsx("div",{className:"text-mist-300",children:S.domain}),S.ip&&s.jsx("div",{className:"text-mist-600",children:S.ip}),!S.domain&&!S.ip&&s.jsx("span",{className:"text-mist-600",children:"—"})]}),s.jsx("td",{className:"px-4 py-3",children:S.payment_cost!=null?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"font-mono text-sm font-semibold text-ember-300",children:[S.payment_cost," ",S.payment_currency]}),s.jsxs("div",{className:"mt-0.5 text-xs text-mist-500",children:[Xu[S.payment_period]||S.payment_period||"разово",S.payment_day!=null&&` · ${S.payment_day}-е число`]})]}):s.jsx("span",{className:"text-mist-600",children:"—"})}),s.jsx("td",{className:"px-4 py-3",children:S.server_password?s.jsx("button",{onClick:()=>D(S),className:`inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-xs tracking-[0.14em] transition-all duration-150 ${U===S.id?"border-sea-500 bg-sea-500/10 text-sea-300":"border-dashed border-abyss-600 text-mist-300 hover:border-sea-600 hover:text-mist-100"}`,title:"Кликните, чтобы скопировать пароль",children:U===S.id?s.jsxs(s.Fragment,{children:[s.jsx(kr,{className:"h-3.5 w-3.5"})," скопировано"]}):s.jsxs(s.Fragment,{children:["••••••••",s.jsx(Bs,{className:"h-3.5 w-3.5 opacity-40 transition-opacity group-hover:opacity-90"})]})}):s.jsx("span",{className:"text-mist-600",children:"—"})}),s.jsx("td",{className:"px-4 py-3",children:s.jsxs("div",{className:"flex justify-end gap-1.5",children:[s.jsx("button",{onClick:()=>j(S),className:"rounded-md border border-abyss-600 p-1.5 text-mist-500 transition-all hover:border-sea-600 hover:bg-sea-500/10 hover:text-sea-300",title:"Редактировать",children:s.jsx(Yu,{className:"h-3.5 w-3.5"})}),s.jsx("button",{onClick:()=>O(S),className:"rounded-md border border-abyss-600 p-1.5 text-mist-500 transition-all hover:border-coral-500 hover:bg-coral-500/10 hover:text-coral-300",title:"Удалить",children:s.jsx(Us,{className:"h-3.5 w-3.5"})})]})})]},S.id))})]})}),s.jsx("div",{className:"space-y-3 lg:hidden",children:c.map((S,ce)=>s.jsxs("div",{className:"anim-rise rounded-lg border border-abyss-700 bg-abyss-850/80 p-4",style:{animationDelay:`${Math.min(ce*60,420)}ms`},children:[s.jsxs("div",{className:"flex items-start justify-between gap-3",children:[s.jsxs("div",{className:"min-w-0",children:[s.jsxs("a",{href:S.login_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 font-semibold text-mist-100 hover:text-sea-300",children:[S.country_flag," ",S.host_name,s.jsx(Ku,{className:"h-3 w-3 text-mist-600"})]}),s.jsxs("div",{className:"mt-0.5 text-xs text-mist-500",children:[S.country_name," · ",s.jsxs("span",{className:"font-mono",children:["#",S.id]})]})]}),s.jsxs("div",{className:"flex shrink-0 gap-1.5",children:[s.jsx("button",{onClick:()=>j(S),className:"rounded-md border border-abyss-600 p-1.5 text-mist-500 hover:border-sea-600 hover:text-sea-300",title:"Редактировать",children:s.jsx(Yu,{className:"h-3.5 w-3.5"})}),s.jsx("button",{onClick:()=>O(S),className:"rounded-md border border-abyss-600 p-1.5 text-mist-500 hover:border-coral-500 hover:text-coral-300",title:"Удалить",children:s.jsx(Us,{className:"h-3.5 w-3.5"})})]})]}),s.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2 text-xs",children:[s.jsx(Zu,{system:S.vpn_system}),S.payment_cost!=null&&s.jsxs("span",{className:"font-mono font-semibold text-ember-300",children:[S.payment_cost," ",S.payment_currency]}),S.payment_period&&s.jsx("span",{className:"text-mist-500",children:Xu[S.payment_period]}),S.payment_day!=null&&s.jsxs("span",{className:"text-mist-500",children:["· ",S.payment_day,"-е"]})]}),(S.domain||S.ip)&&s.jsxs("div",{className:"mt-2 font-mono text-xs text-mist-500",children:[S.domain&&s.jsx("span",{className:"text-mist-300",children:S.domain}),S.domain&&S.ip&&s.jsx("span",{className:"mx-1.5 text-mist-600",children:"·"}),S.ip&&s.jsx("span",{children:S.ip})]}),S.server_password&&s.jsx("button",{onClick:()=>D(S),className:`mt-3 inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-xs tracking-[0.14em] transition-all ${U===S.id?"border-sea-500 bg-sea-500/10 text-sea-300":"border-dashed border-abyss-600 text-mist-300"}`,children:U===S.id?s.jsxs(s.Fragment,{children:[s.jsx(kr,{className:"h-3.5 w-3.5"})," скопировано"]}):s.jsxs(s.Fragment,{children:["•••••••• ",s.jsx("span",{className:"tracking-normal text-sea-400",children:"копировать"})]})})]},S.id))})]})}const If={host_name:"",login_url:"",login:"",login_method:"",login_password:"",vpn_system:"",country_name:"",domain:"",ip:"",server_login:"",server_password:"",payment_period:"",payment_cost:"",payment_currency:"",payment_day:""};function Vf(c){return{host_name:c.host_name,login_url:c.login_url,login:c.login,login_method:c.login_method,login_password:"",vpn_system:c.vpn_system,country_name:c.country_name,domain:c.domain,ip:c.ip,server_login:c.server_login,server_password:c.server_password,payment_period:c.payment_period,payment_cost:c.payment_cost==null?"":String(c.payment_cost),payment_currency:c.payment_currency,payment_day:c.payment_day==null?"":String(c.payment_day)}}function Ff(c){const y={};if(c.host_name.trim()||(y.host_name="Укажите название хостера"),!c.login_url.trim())y.login_url="Укажите ссылку на страницу логина";else try{const p=new URL(c.login_url.trim());if(p.protocol!=="http:"&&p.protocol!=="https:")throw new Error}catch{y.login_url="Некорректный URL (пример: https://example.com/login)"}if(c.country_name||(y.country_name="Выберите страну"),c.vpn_system||(y.vpn_system="Выберите систему VPN из списка"),c.payment_cost!==""){const p=Number(c.payment_cost.replace(",","."));(Number.isNaN(p)||p<0)&&(y.payment_cost="Неотрицательное число")}if(c.payment_day!==""){const p=Number(c.payment_day);(!Number.isInteger(p)||p<1||p>31)&&(y.payment_day="Число от 1 до 31")}return y}function Fe({label:c,required:y,error:p,children:N,className:j=""}){return s.jsxs("label",{className:`block ${j}`,children:[s.jsxs("span",{className:"mb-1.5 block text-xs font-medium text-mist-500",children:[c," ",y&&s.jsx("span",{className:"text-coral-400",children:"*"})]}),N,p&&s.jsx("span",{className:"mt-1 block text-xs text-coral-300",children:p})]})}function Is({num:c,title:y}){return s.jsxs("div",{className:"mb-3 mt-7 flex items-center gap-3 border-b border-abyss-700 pb-2 first:mt-0",children:[s.jsx("span",{className:"font-mono text-[11px] tracking-[0.14em] text-sea-400",children:c}),s.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.16em] text-mist-500",children:y})]})}function Uf({initial:c,onSave:y,onClose:p}){const[N,j]=ye.useState(c?Vf(c):If),[O,G]=ye.useState({}),[B,L]=ye.useState(!1);ye.useEffect(()=>{const D=S=>S.key==="Escape"&&p();return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[p]);const U=D=>S=>{j(ce=>({...ce,[D]:S.target.value})),G(ce=>({...ce,[D]:void 0}))},ne=Qu(N.country_name),Y=D=>{D.preventDefault();const S=Ff(N);if(G(S),Object.keys(S).length>0)return;const ce=N.payment_cost===""?null:Number(N.payment_cost.replace(",",".")),q=N.payment_day===""?null:Number(N.payment_day);y({host_name:N.host_name.trim(),login_url:N.login_url.trim(),login:N.login.trim(),login_method:N.login_method,login_password:N.login_password,vpn_system:N.vpn_system,country_name:N.country_name,country_flag:Qu(N.country_name),domain:N.domain.trim(),ip:N.ip.trim(),server_login:N.server_login.trim(),server_password:N.server_password,payment_period:N.payment_period,payment_cost:ce,payment_currency:N.payment_currency,payment_day:q},c==null?void 0:c.id)};return s.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:[s.jsx("div",{className:"anim-fade fixed inset-0 bg-abyss-950/75 backdrop-blur-[2px]",onClick:p}),s.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:s.jsxs("form",{onSubmit:Y,className:"anim-pop relative w-full max-w-2xl rounded-lg border border-abyss-600 bg-abyss-900 shadow-[0_24px_80px_rgba(0,0,0,0.55)]",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-abyss-700 px-6 py-4",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"font-display text-base font-semibold text-mist-100",children:c?`Редактирование · ID ${c.id}`:"Новая VPN-локация"}),s.jsxs("p",{className:"mt-0.5 font-mono text-[11px] text-mist-600",children:[c?"POST /edit/"+c.id:"POST /create"," → data/vpn_locations.csv"]})]}),s.jsx("button",{type:"button",onClick:p,className:"rounded-md border border-abyss-600 p-1.5 text-mist-500 transition-colors hover:border-coral-500 hover:text-coral-300",title:"Закрыть (Esc)",children:s.jsx(bs,{className:"h-4 w-4"})})]}),s.jsxs("div",{className:"max-h-[68vh] overflow-y-auto px-6 py-5",children:[s.jsx(Is,{num:"01",title:"Хостер и доступ"}),s.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[s.jsx(Fe,{label:"Название хостера",required:!0,error:O.host_name,children:s.jsx("input",{autoFocus:!0,className:`input ${O.host_name?"err":""}`,value:N.host_name,onChange:U("host_name"),placeholder:"Например: Aeza"})}),s.jsx(Fe,{label:"Ссылка на страницу логина",required:!0,error:O.login_url,children:s.jsx("input",{className:`input font-mono text-[13px] ${O.login_url?"err":""}`,value:N.login_url,onChange:U("login_url"),placeholder:"https://example.com/login"})}),s.jsx(Fe,{label:"Логин",children:s.jsx("input",{className:"input",value:N.login,onChange:U("login"),placeholder:"email или имя пользователя"})}),s.jsx(Fe,{label:"Пароль",children:s.jsxs("div",{className:"relative",children:[s.jsx("input",{type:B?"text":"password",className:"input pr-10",value:N.login_password,onChange:U("login_password"),autoComplete:"new-password",placeholder:"пароль от хостера"}),s.jsx("button",{type:"button",onClick:()=>L(D=>!D),className:"absolute right-2 top-1/2 -translate-y-1/2 text-mist-600 transition-colors hover:text-sea-300",title:B?"Скрыть пароль":"Показать пароль",children:B?s.jsx(qu,{className:"h-4 w-4"}):s.jsx(Gu,{className:"h-4 w-4"})})]})}),s.jsx(Fe,{label:"Способ логина в хостере",children:s.jsxs("select",{className:"input",value:N.login_method,onChange:U("login_method"),children:[s.jsx("option",{value:"",children:"— не выбран —"}),hf.map(D=>s.jsx("option",{value:D,children:D},D))]})})]}),s.jsx(Is,{num:"02",title:"VPN-сервер"}),s.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[s.jsx(Fe,{label:"Система VPN",required:!0,error:O.vpn_system,children:s.jsxs("select",{className:`input ${O.vpn_system?"err":""}`,value:N.vpn_system,onChange:U("vpn_system"),children:[s.jsx("option",{value:"",children:"— выберите систему —"}),mf.map(D=>s.jsx("option",{value:D,children:D},D))]})}),s.jsx(Fe,{label:"Страна",required:!0,error:O.country_name,children:s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("select",{className:`input flex-1 ${O.country_name?"err":""}`,value:N.country_name,onChange:U("country_name"),children:[s.jsx("option",{value:"",children:"— выберите страну —"}),nc.map(D=>s.jsxs("option",{value:D.ru,children:[D.ru," (",D.en,")"]},D.ru))]}),s.jsx("span",{className:"flex w-12 shrink-0 items-center justify-center rounded-md border border-abyss-600 bg-abyss-850 text-xl transition-transform duration-200",style:{animation:ne?"swapin .25s ease both":void 0},title:"Флаг подставляется автоматически",children:ne||"🏳️"},ne||"none")]})}),s.jsx(Fe,{label:"Доменное имя VPN",children:s.jsx("input",{className:"input font-mono text-[13px]",value:N.domain,onChange:U("domain"),placeholder:"vpn.example.com"})}),s.jsx(Fe,{label:"IP-адрес VPN",children:s.jsx("input",{className:"input font-mono text-[13px]",value:N.ip,onChange:U("ip"),placeholder:"203.0.113.10"})}),s.jsx(Fe,{label:"Логин на сервер",children:s.jsx("input",{className:"input font-mono text-[13px]",value:N.server_login,onChange:U("server_login"),placeholder:"root"})}),s.jsx(Fe,{label:"Пароль на сервер",children:s.jsxs("div",{className:"relative",children:[s.jsx("input",{type:B?"text":"password",className:"input pr-10 font-mono text-[13px]",value:N.server_password,onChange:U("server_password"),autoComplete:"new-password"}),s.jsx("button",{type:"button",onClick:()=>L(D=>!D),className:"absolute right-2 top-1/2 -translate-y-1/2 text-mist-600 transition-colors hover:text-sea-300",title:B?"Скрыть пароль":"Показать пароль",children:B?s.jsx(qu,{className:"h-4 w-4"}):s.jsx(Gu,{className:"h-4 w-4"})})]})})]}),s.jsx(Is,{num:"03",title:"Оплата"}),s.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[s.jsx(Fe,{label:"Периодичность",error:O.payment_period,children:s.jsxs("select",{className:"input",value:N.payment_period,onChange:U("payment_period"),children:[s.jsx("option",{value:"",children:"— не указана —"}),vf.map(D=>s.jsx("option",{value:D,children:D},D))]})}),s.jsx(Fe,{label:"Стоимость периода",error:O.payment_cost,children:s.jsx("input",{inputMode:"decimal",className:`input font-mono text-[13px] ${O.payment_cost?"err":""}`,value:N.payment_cost,onChange:U("payment_cost"),placeholder:"0.00"})}),s.jsx(Fe,{label:"Валюта",children:s.jsxs("select",{className:"input",value:N.payment_currency,onChange:U("payment_currency"),children:[s.jsx("option",{value:"",children:"—"}),yf.map(D=>s.jsx("option",{value:D,children:D},D))]})}),s.jsx(Fe,{label:"Число оплаты",error:O.payment_day,children:s.jsx("input",{inputMode:"numeric",className:`input font-mono text-[13px] ${O.payment_day?"err":""}`,value:N.payment_day,onChange:U("payment_day"),placeholder:"1–31"})})]}),Object.values(O).some(Boolean)&&s.jsx("p",{className:"mt-4 rounded-md border border-coral-500/40 bg-coral-500/10 px-3 py-2 text-xs text-coral-300",children:"Форма содержит ошибки — проверьте поля, отмеченные красным."})]}),s.jsxs("div",{className:"flex items-center gap-3 border-t border-abyss-700 px-6 py-4",children:[s.jsx("button",{type:"submit",className:"rounded-md bg-sea-500 px-5 py-2 text-sm font-semibold text-abyss-950 transition-all hover:bg-sea-400 hover:shadow-[0_0_24px_rgba(62,207,178,0.3)]",children:"Сохранить"}),s.jsx("button",{type:"button",onClick:p,className:"rounded-md border border-abyss-600 px-4 py-2 text-sm text-mist-300 transition-colors hover:border-mist-600 hover:text-mist-100",children:"Отмена"}),s.jsxs("span",{className:"ml-auto hidden text-[11px] text-mist-600 sm:block",children:["поля со ",s.jsx("span",{className:"text-coral-400",children:"*"})," обязательны"]})]})]})})]})}function bf({item:c,onConfirm:y,onClose:p}){return ye.useEffect(()=>{const N=j=>j.key==="Escape"&&p();return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[p]),s.jsxs("div",{className:"fixed inset-0 z-50",children:[s.jsx("div",{className:"anim-fade fixed inset-0 bg-abyss-950/75 backdrop-blur-[2px]",onClick:p}),s.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:s.jsxs("div",{className:"anim-pop w-full max-w-md rounded-lg border border-coral-500/40 bg-abyss-900 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)]",children:[s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("span",{className:"mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-coral-500/40 bg-coral-500/10 text-coral-300",children:s.jsx(Us,{className:"h-5 w-5"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h2",{className:"font-display text-base font-semibold text-mist-100",children:"Удалить локацию?"}),s.jsxs("p",{className:"mt-1.5 text-sm leading-relaxed text-mist-500",children:["Запись"," ",s.jsxs("span",{className:"font-semibold text-mist-100",children:[c.country_flag," «",c.host_name,"»"]})," ",s.jsxs("span",{className:"font-mono text-xs text-mist-600",children:["(ID ",c.id,")"]})," будет удалена из CSV без возможности восстановления."]})]})]}),s.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[s.jsx("button",{onClick:p,className:"rounded-md border border-abyss-600 px-4 py-2 text-sm text-mist-300 transition-colors hover:border-mist-600 hover:text-mist-100",children:"Отмена"}),s.jsx("button",{onClick:()=>y(c.id),className:"rounded-md bg-coral-500 px-4 py-2 text-sm font-semibold text-abyss-950 transition-all hover:bg-coral-400 hover:shadow-[0_0_24px_rgba(240,78,64,0.3)]",children:"Удалить"})]})]})})]})}const Af=`# -*- coding: utf-8 -*-
"""
Менеджер VPN-локаций — Flask + CSV (отладочный вариант БД).

Маршруты:
    GET  /                — список записей (сортировка: ?sort=<поле>&order=asc|desc)
    GET  /create          — форма создания
    POST /create          — сохранение новой записи
    GET  /edit/<int:id>   — форма редактирования
    POST /edit/<int:id>   — обновление записи
    POST /delete/<int:id> — удаление записи

Запуск:  python app.py   →  http://localhost:5000
"""

import os

from flask import (
    Flask,
    flash,
    redirect,
    render_template,
    request,
    url_for,
)
import validators

from csv_store import CsvStore, CsvCorruptedError

# --------------------------------------------------------------------- #
# Настройка приложения
# --------------------------------------------------------------------- #
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.environ.get(
    "CSV_PATH", os.path.join(BASE_DIR, "data", "vpn_locations.csv")
)

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "change-me-in-production")

store = CsvStore(CSV_PATH)

# --------------------------------------------------------------------- #
# Справочники (хардкод для отладочной версии)
# --------------------------------------------------------------------- #
LOGIN_METHODS = ["Google", "ВКонтакте", "Телеграм", "Логин пароль"]

VPN_SYSTEMS = [
    "Remnawave panel",
    "Remnawave node",
    "3x-ui",
    "3x-ui pro",
    "Amnezia",
    "Wireguard",
    "Другое",
]

PAYMENT_PERIODS = ["ежемесячно", "ежеквартально", "раз в полгода", "ежегодно"]

CURRENCIES = ["RUB", "USD", "EUR", "UAH", "BYN", "KZT", "UZS", "TRY", "AED", "THB", "CNY", "GBP"]

# (русское название, английское название, эмодзи-флаг)
COUNTRIES = [
    ("Россия", "Russia", "🇷🇺"),
    ("Германия", "Germany", "🇩🇪"),
    ("Нидерланды", "Netherlands", "🇳🇱"),
    ("США", "United States", "🇺🇸"),
    ("Великобритания", "United Kingdom", "🇬🇧"),
    ("Франция", "France", "🇫🇷"),
    ("Финляндия", "Finland", "🇫🇮"),
    ("Швеция", "Sweden", "🇸🇪"),
    ("Польша", "Poland", "🇵🇱"),
    ("Латвия", "Latvia", "🇱🇻"),
    ("Молдова", "Moldova", "🇲🇩"),
    ("Украина", "Ukraine", "🇺🇦"),
    ("Казахстан", "Kazakhstan", "🇰🇿"),
    ("Узбекистан", "Uzbekistan", "🇺🇿"),
    ("Грузия", "Georgia", "🇬🇪"),
    ("Турция", "Turkey", "🇹🇷"),
    ("ОАЭ", "United Arab Emirates", "🇦🇪"),
    ("Сингапур", "Singapore", "🇸🇬"),
    ("Япония", "Japan", "🇯🇵"),
    ("Канада", "Canada", "🇨🇦"),
]


def country_flag(name: str) -> str:
    """Возвращает эмодзи-флаг по русскому названию страны."""
    return next((flag for ru, _en, flag in COUNTRIES if ru == name), "")


# --------------------------------------------------------------------- #
# Сортировка (серверная, через query-параметры ?sort=...&order=...)
# --------------------------------------------------------------------- #
def _as_int(row, key):
    try:
        return int(float(row.get(key) or 0))
    except ValueError:
        return 0


def _as_float(row, key):
    try:
        return float(row.get(key) or 0)
    except ValueError:
        return 0.0


def _as_str(row, key):
    return (row.get(key) or "").strip().lower()


SORT_KEYS = {
    "id": lambda r: _as_int(r, "id"),
    "host_name": lambda r: _as_str(r, "host_name"),
    "country_name": lambda r: _as_str(r, "country_name"),
    "vpn_system": lambda r: _as_str(r, "vpn_system"),
    "payment_cost": lambda r: _as_float(r, "payment_cost"),
    "payment_day": lambda r: _as_int(r, "payment_day"),
}


# --------------------------------------------------------------------- #
# Валидация формы
# --------------------------------------------------------------------- #
def parse_form(form) -> dict:
    """Вытаскивает и нормализует поля из request.form."""

    def s(name: str) -> str:
        return (form.get(name) or "").strip()

    return {
        "host_name": s("host_name"),
        "login_url": s("login_url"),
        "login": s("login"),
        "login_method": s("login_method"),
        "login_password": s("login_password"),
        "vpn_system": s("vpn_system"),
        "country_name": s("country_name"),
        "country_flag": "",  # вычисляется по стране при сохранении
        "domain": s("domain"),
        "ip": s("ip"),
        "server_login": s("server_login"),
        "server_password": s("server_password"),
        "payment_period": s("payment_period"),
        "payment_cost": s("payment_cost").replace(",", "."),
        "payment_currency": s("payment_currency"),
        "payment_day": s("payment_day"),
    }


def validate(data: dict) -> dict:
    """Возвращает словарь ошибок {поле: сообщение}. Пустой — всё ок."""
    errors = {}

    if not data["host_name"]:
        errors["host_name"] = "Укажите название хостера"

    if not data["login_url"]:
        errors["login_url"] = "Укажите ссылку на страницу логина"
    elif validators.url(data["login_url"]) is not True:
        errors["login_url"] = "Это не похоже на корректный URL (пример: https://example.com/login)"

    if not data["country_name"]:
        errors["country_name"] = "Выберите страну"

    if data["vpn_system"] not in VPN_SYSTEMS:
        errors["vpn_system"] = "Выберите систему VPN из списка"

    if data["payment_cost"]:
        try:
            if float(data["payment_cost"]) < 0:
                raise ValueError
        except ValueError:
            errors["payment_cost"] = "Стоимость — неотрицательное число"

    if data["payment_day"]:
        try:
            day = int(data["payment_day"])
            if not 1 <= day <= 31:
                raise ValueError
        except ValueError:
            errors["payment_day"] = "День оплаты — целое число от 1 до 31"

    return errors


def normalize(data: dict) -> dict:
    """Приводит числовые поля к каноническому виду перед записью в CSV."""
    result = dict(data)
    try:
        cost = float(result["payment_cost"]) if result["payment_cost"] else None
        result["payment_cost"] = f"{cost:.2f}".rstrip("0").rstrip(".") if cost is not None else ""
    except ValueError:
        result["payment_cost"] = ""
    try:
        result["payment_day"] = str(int(result["payment_day"])) if result["payment_day"] else ""
    except ValueError:
        result["payment_day"] = ""
    return result


# --------------------------------------------------------------------- #
# Маршруты
# --------------------------------------------------------------------- #
@app.route("/")
def index():
    """Список всех VPN-локаций с серверной сортировкой."""
    sort = request.args.get("sort", "id")
    order = request.args.get("order", "asc")
    if sort not in SORT_KEYS:
        sort = "id"
    if order not in ("asc", "desc"):
        order = "asc"

    try:
        rows = store.read_all()
    except CsvCorruptedError:
        flash("CSV-файл повреждён и не может быть прочитан. Проверьте data/vpn_locations.csv", "danger")
        rows = []

    rows.sort(key=SORT_KEYS[sort], reverse=(order == "desc"))
    return render_template("list.html", rows=rows, sort=sort, order=order)


@app.route("/create", methods=["GET", "POST"])
def create():
    """Создание новой записи."""
    if request.method == "POST":
        data = parse_form(request.form)
        errors = validate(data)
        if errors:
            return render_template(
                "form.html",
                title="Новая VPN-локация",
                action=url_for("create"),
                data=data,
                errors=errors,
                countries=COUNTRIES,
                login_methods=LOGIN_METHODS,
                vpn_systems=VPN_SYSTEMS,
                payment_periods=PAYMENT_PERIODS,
                currencies=CURRENCIES,
            )
        data = normalize(data)
        data["country_flag"] = country_flag(data["country_name"])
        new_id = store.create(data)
        flash(f"Локация «{data['host_name']}» создана (ID {new_id})", "success")
        return redirect(url_for("index"))

    empty = {h: "" for h in
             ["host_name", "login_url", "login", "login_method", "login_password", "vpn_system",
              "country_name", "country_flag", "domain", "ip", "server_login",
              "server_password", "payment_period", "payment_cost",
              "payment_currency", "payment_day"]}
    return render_template(
        "form.html",
        title="Новая VPN-локация",
        action=url_for("create"),
        data=empty,
        errors={},
        countries=COUNTRIES,
        login_methods=LOGIN_METHODS,
        vpn_systems=VPN_SYSTEMS,
        payment_periods=PAYMENT_PERIODS,
        currencies=CURRENCIES,
    )


@app.route("/edit/<int:item_id>", methods=["GET", "POST"])
def edit(item_id: int):
    """Редактирование существующей записи."""
    if request.method == "POST":
        data = parse_form(request.form)
        errors = validate(data)
        if errors:
            data["id"] = item_id
            return render_template(
                "form.html",
                title=f"Редактирование · ID {item_id}",
                action=url_for("edit", item_id=item_id),
                data=data,
                errors=errors,
                countries=COUNTRIES,
                login_methods=LOGIN_METHODS,
                vpn_systems=VPN_SYSTEMS,
                payment_periods=PAYMENT_PERIODS,
                currencies=CURRENCIES,
            )
        data = normalize(data)
        data["country_flag"] = country_flag(data["country_name"])
        updated = store.update(item_id, data)
        if updated is None:
            flash(f"Запись с ID {item_id} не найдена", "danger")
            return redirect(url_for("index"))
        flash(f"Локация «{data['host_name']}» обновлена", "success")
        return redirect(url_for("index"))

    row = store.get(item_id)
    if row is None:
        flash(f"Запись с ID {item_id} не найдена", "danger")
        return redirect(url_for("index"))
    return render_template(
        "form.html",
        title=f"Редактирование · ID {item_id}",
        action=url_for("edit", item_id=item_id),
        data=row,
        errors={},
        countries=COUNTRIES,
        login_methods=LOGIN_METHODS,
        vpn_systems=VPN_SYSTEMS,
        payment_periods=PAYMENT_PERIODS,
        currencies=CURRENCIES,
    )


@app.route("/delete/<int:item_id>", methods=["POST"])
def delete(item_id: int):
    """Удаление записи (только POST — защита от случайных GET)."""
    removed = store.delete(item_id)
    if removed is None:
        flash(f"Запись с ID {item_id} не найдена", "danger")
    else:
        flash(f"Запись «{removed['host_name']}» (ID {item_id}) удалена", "warning")
    return redirect(url_for("index"))


# --------------------------------------------------------------------- #
# Точка входа
# --------------------------------------------------------------------- #
if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=os.environ.get("FLASK_DEBUG") == "1")
`,Bf=`# -*- coding: utf-8 -*-
"""
Потокобезопасное CSV-хранилище VPN-локаций.

Особенности:
    * Файл создаётся автоматически (с заголовками) при первом запуске.
    * Все операции выполняются под блокировкой (threading.RLock) —
      это отладочный вариант БД, для production лучше взять SQLite.
    * Запись атомарная: данные сначала пишутся во временный файл,
      затем os.replace() подменяет основной — файл не повреждается
      даже при падении процесса во время записи.
"""

import csv
import os
import threading
from typing import Dict, List, Optional

# Порядок колонок в CSV (он же — список полей записи)
CSV_HEADERS = [
    "id",
    "host_name",
    "login_url",
    "login",
    "login_method",
    "login_password",
    "vpn_system",
    "country_name",
    "country_flag",
    "domain",
    "ip",
    "server_login",
    "server_password",
    "payment_period",
    "payment_cost",
    "payment_currency",
    "payment_day",
]


class CsvCorruptedError(Exception):
    """Выбрасывается, когда CSV-файл не удаётся разобрать."""


class CsvStore:
    """Простейшая «БД» поверх одного CSV-файла (CRUD по id)."""

    def __init__(self, path: str):
        self.path = path
        self._lock = threading.RLock()
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        self._ensure_file()

    # ------------------------------------------------------------------ #
    # Служебное
    # ------------------------------------------------------------------ #
    def _ensure_file(self) -> None:
        """Создаёт CSV с заголовками, если файла ещё нет."""
        if not os.path.exists(self.path):
            with open(self.path, "w", newline="", encoding="utf-8") as fh:
                csv.writer(fh).writerow(CSV_HEADERS)

    def _read_unlocked(self) -> List[Dict[str, str]]:
        """Чтение без захвата блокировки (вызывать уже под lock)."""
        try:
            with open(self.path, newline="", encoding="utf-8") as fh:
                reader = csv.DictReader(fh)
                rows: List[Dict[str, str]] = []
                for row in reader:
                    # Пропускаем пустые/мусорные строки без id
                    if not row or not (row.get("id") or "").strip():
                        continue
                    rows.append({h: (row.get(h) or "") for h in CSV_HEADERS})
                return rows
        except csv.Error as exc:  # повреждённый файл
            raise CsvCorruptedError(str(exc)) from exc

    def _write_unlocked(self, rows: List[Dict[str, str]]) -> None:
        """Атомарная запись: временный файл + os.replace()."""
        tmp_path = self.path + ".tmp"
        with open(tmp_path, "w", newline="", encoding="utf-8") as fh:
            writer = csv.DictWriter(fh, fieldnames=CSV_HEADERS, extrasaction="ignore")
            writer.writeheader()
            for row in rows:
                writer.writerow({h: row.get(h, "") for h in CSV_HEADERS})
        os.replace(tmp_path, self.path)  # атомарная подмена файла

    @staticmethod
    def _row_id(row: Dict[str, str]) -> int:
        try:
            return int(row.get("id") or 0)
        except ValueError:
            return 0

    # ------------------------------------------------------------------ #
    # Публичный CRUD-интерфейс
    # ------------------------------------------------------------------ #
    def read_all(self) -> List[Dict[str, str]]:
        """Все записи (список словарей со строковыми значениями)."""
        with self._lock:
            return self._read_unlocked()

    def get(self, item_id: int) -> Optional[Dict[str, str]]:
        """Одна запись по id или None."""
        with self._lock:
            for row in self._read_unlocked():
                if self._row_id(row) == item_id:
                    return row
        return None

    def create(self, data: Dict[str, str]) -> int:
        """Добавляет запись, id = max(id) + 1. Возвращает новый id."""
        with self._lock:
            rows = self._read_unlocked()
            new_id = max((self._row_id(r) for r in rows), default=0) + 1
            row = {h: str(data.get(h, "")) for h in CSV_HEADERS}
            row["id"] = str(new_id)
            rows.append(row)
            self._write_unlocked(rows)
            return new_id

    def update(self, item_id: int, data: Dict[str, str]) -> Optional[Dict[str, str]]:
        """Обновляет запись по id. Возвращает обновлённую строку или None."""
        with self._lock:
            rows = self._read_unlocked()
            for i, row in enumerate(rows):
                if self._row_id(row) == item_id:
                    merged = {**row, **{h: str(data.get(h, "")) for h in CSV_HEADERS}}
                    merged["id"] = str(item_id)  # id менять нельзя
                    rows[i] = merged
                    self._write_unlocked(rows)
                    return merged
        return None

    def delete(self, item_id: int) -> Optional[Dict[str, str]]:
        """Удаляет запись по id. Возвращает удалённую строку или None."""
        with self._lock:
            rows = self._read_unlocked()
            removed = next((r for r in rows if self._row_id(r) == item_id), None)
            if removed is None:
                return None
            self._write_unlocked([r for r in rows if r is not removed])
            return removed
`,$f=`<!doctype html>
<html lang="ru" data-bs-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{% block title %}VPN Реестр{% endblock %}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    /* ---- фирменные стили поверх Bootstrap (тёмная тема) ---- */
    :root {
      --ink: #0f141b;
      --panel: #161d26;
      --line: #26303c;
      --sea: #3ecfb2;
      --ember: #ffb454;
      --coral: #ff6f61;
    }
    body {
      background: var(--ink);
      font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
      min-height: 100vh;
    }
    .navbar { background: #121922; border-color: var(--line) !important; }
    .navbar-brand { font-weight: 700; letter-spacing: .02em; }
    .navbar-brand b { color: var(--sea); font-weight: 700; }
    .csv-path {
      font-family: ui-monospace, "Cascadia Mono", Consolas, monospace;
      font-size: .72rem;
      color: #8fa6ad;
      border: 1px solid var(--line);
      background: #0d131a;
      padding: .35em .7em;
      border-radius: 6px;
    }
    .csv-path::before {
      content: "";
      display: inline-block;
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--sea);
      margin-right: .55em;
      animation: blink 2.4s infinite;
    }
    @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: .3; } }

    h1 { letter-spacing: -.01em; }

    .vpn-table { --bs-table-bg: transparent; border-color: var(--line); }
    .vpn-table thead th {
      background: #121922;
      border-color: var(--line);
      font-size: .72rem;
      text-transform: uppercase;
      letter-spacing: .09em;
      color: #8fa6ad;
      white-space: nowrap;
    }
    .sort-link {
      color: inherit; text-decoration: none;
      display: inline-flex; align-items: center; gap: .35em;
    }
    .sort-link:hover { color: var(--sea); }
    .sort-link.active { color: var(--sea); }
    .sort-link .arrow { font-size: .62rem; }

    .vpn-row { transition: background .15s ease; }
    .vpn-row:hover { background: rgba(62, 207, 178, .05); }

    .mono { font-family: ui-monospace, "Cascadia Mono", Consolas, monospace; font-size: .86em; }
    .muted { color: #5d7880; }
    .host-link {
      color: #eaf5f4; font-weight: 600; text-decoration: none;
      border-bottom: 1px dashed rgba(62, 207, 178, .45);
    }
    .host-link:hover { color: var(--sea); border-bottom-color: var(--sea); }
    .host-link svg { opacity: .55; margin-left: .2em; }
    .flag { font-size: 1.15em; margin-right: .15em; }
    .cost { color: var(--ember); font-weight: 600; }

    .chip {
      display: inline-flex; align-items: center; gap: .45em;
      font-size: .78rem; padding: .22em .7em;
      border: 1px solid var(--line); border-radius: 999px;
      background: #121a23; white-space: nowrap;
    }
    .chip::before {
      content: ""; width: 7px; height: 7px; border-radius: 50%;
      background: var(--sea);
    }
    .chip.c1::before { background: var(--ember); }
    .chip.c2::before { background: #6fb3ff; }
    .chip.c3::before { background: var(--coral); }

    .pw-btn {
      font-family: ui-monospace, Consolas, monospace;
      background: #0d131a; color: #b9cfd2;
      border: 1px dashed var(--line); border-radius: 6px;
      padding: .28em .7em; letter-spacing: .12em;
      cursor: pointer; transition: all .15s ease;
    }
    .pw-btn:hover { border-color: var(--sea); color: #eaf5f4; }
    .pw-btn .pw-hint {
      letter-spacing: 0; font-size: .68rem; color: var(--sea);
      opacity: 0; transition: opacity .15s ease; margin-left: .4em;
    }
    .pw-btn:hover .pw-hint { opacity: 1; }
    .pw-btn.copied { border-style: solid; border-color: var(--sea); color: var(--sea); }

    .vpn-form { background: var(--panel); border: 1px solid var(--line) !important; border-radius: 12px; }
    .form-section {
      font-size: .72rem; text-transform: uppercase; letter-spacing: .12em;
      color: var(--sea); margin: 1.4rem 0 .8rem; padding-bottom: .4rem;
      border-bottom: 1px solid var(--line);
    }
    .form-section:first-child { margin-top: 0; }
    .req { color: var(--coral); }
    .form-control, .form-select { background: #0d131a; border-color: var(--line); }
    .form-control:focus, .form-select:focus {
      background: #0d131a; border-color: var(--sea);
      box-shadow: 0 0 0 .2rem rgba(62, 207, 178, .15);
    }
    .flag-preview { font-size: 1.3rem; min-width: 3.2rem; justify-content: center; }

    .empty-state {
      border: 1px dashed var(--line); border-radius: 12px;
      padding: 3.5rem 1rem; text-align: center; color: #8fa6ad;
    }
    footer.app-footer {
      color: #5d7880; font-size: .8rem;
      border-top: 1px solid var(--line); margin-top: 3rem;
    }
  </style>
</head>
<body>
  <nav class="navbar border-bottom mb-4">
    <div class="container d-flex align-items-center gap-2">
      <a class="navbar-brand me-3" href="{{ url_for('index') }}">🛰 VPN<b>Реестр</b></a>
      <span class="csv-path d-none d-md-inline">data/vpn_locations.csv</span>
      <div class="ms-auto d-flex align-items-center gap-2">
        <a class="btn btn-sm btn-outline-light" href="{{ url_for('index') }}">Реестр</a>
        <a class="btn btn-sm text-dark fw-semibold" style="background: var(--sea);" href="{{ url_for('create') }}">+ Новая локация</a>
      </div>
    </div>
  </nav>

  <main class="container pb-2">
    {% with messages = get_flashed_messages(with_categories=true) %}
      {% if messages %}
        {% for category, message in messages %}
          <div class="alert alert-{{ category }} alert-dismissible fade show" role="alert">
            {{ message }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
          </div>
        {% endfor %}
      {% endif %}
    {% endwith %}

    {% block content %}{% endblock %}
  </main>

  <footer class="app-footer">
    <div class="container py-3 d-flex flex-wrap gap-2">
      <span>Менеджер VPN-локаций · Flask + CSV (отладочная БД)</span>
      <span class="ms-auto mono">GET / · /create · /edit/&lt;id&gt; · POST /delete/&lt;id&gt;</span>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"><\/script>
  {% block scripts %}{% endblock %}
</body>
</html>
`,Hf=`{% extends "base.html" %}
{% block title %}VPN Реестр — список локаций{% endblock %}

{# Ссылка-заголовок для серверной сортировки (?sort=...&order=...) #}
{% macro sort_link(field, label) -%}
  {%- set next_order = 'desc' if sort == field and order == 'asc' else 'asc' -%}
  <a class="sort-link {{ 'active' if sort == field }}"
     href="{{ url_for('index', sort=field, order=next_order) }}">
    {{ label }}<span class="arrow">{% if sort == field %}{{ '▲' if order == 'asc' else '▼' }}{% endif %}</span>
  </a>
{%- endmacro %}

{% block content %}
<div class="d-flex flex-wrap align-items-end gap-3 mb-3">
  <div>
    <h1 class="h3 mb-1">VPN-локации</h1>
    <div class="text-secondary small">
      Записей: <b class="text-light">{{ rows|length }}</b>
      · сортировка: <span class="mono">{{ sort }}</span> ({{ order }})
    </div>
  </div>
  <div class="ms-auto d-flex gap-2">
    <input id="quick-filter" type="search" class="form-control form-control-sm"
           placeholder="Быстрый фильтр…" style="max-width: 240px;">
    <a class="btn btn-sm text-dark fw-semibold" style="background: var(--sea);"
       href="{{ url_for('create') }}">+ Новая локация</a>
  </div>
</div>

{% if rows %}
<div class="table-responsive">
  <table class="table table-dark align-middle vpn-table mb-0">
    <thead>
      <tr>
        <th>{{ sort_link('id', 'ID') }}</th>
        <th>{{ sort_link('host_name', 'Хостер') }}</th>
        <th>{{ sort_link('country_name', 'Страна') }}</th>
        <th>{{ sort_link('vpn_system', 'VPN-система') }}</th>
        <th>Домен / IP</th>
        <th>{{ sort_link('payment_cost', 'Оплата') }} · {{ sort_link('payment_day', 'день') }}</th>
        <th>Пароль</th>
        <th class="text-end">Действия</th>
      </tr>
    </thead>
    <tbody>
      {% for row in rows %}
      <tr class="vpn-row"
          data-search="{{ (row.host_name ~ ' ' ~ row.country_name ~ ' ' ~ row.domain ~ ' ' ~ row.ip ~ ' ' ~ row.vpn_system)|lower }}">
        <td class="mono muted">{{ row.id }}</td>

        <td>
          <a class="host-link" href="{{ row.login_url }}" target="_blank" rel="noopener">
            {{ row.host_name }}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </a>
          <div class="small text-secondary">
            {{ row.login or '—' }}{% if row.login_method %} · вход через {{ row.login_method }}{% endif %}
          </div>
        </td>

        <td class="text-nowrap">
          <span class="flag">{{ row.country_flag }}</span>{{ row.country_name }}
        </td>

        <td><span class="chip c{{ loop.index0 % 4 }}">{{ row.vpn_system }}</span></td>

        <td class="mono">
          {%- if row.domain %}{{ row.domain }}{% endif -%}
          {%- if row.domain and row.ip %}<br>{% endif -%}
          {%- if row.ip %}<span class="text-secondary">{{ row.ip }}</span>{% endif -%}
          {%- if not row.domain and not row.ip %}<span class="muted">—</span>{% endif -%}
        </td>

        <td>
          {% if row.payment_cost %}
            <span class="mono cost">{{ row.payment_cost }} {{ row.payment_currency }}</span>
            <div class="small text-secondary">
              {{ row.payment_period or 'разово' }}{% if row.payment_day %} · {{ row.payment_day }}-е число{% endif %}
            </div>
          {% else %}<span class="muted">—</span>{% endif %}
        </td>

        <td>
          {% if row.server_password %}
            <button type="button" class="pw-btn" data-copy="{{ row.server_password }}"
                    title="Кликните, чтобы скопировать пароль">
              ••••••••<span class="pw-hint">копировать</span>
            </button>
          {% else %}<span class="muted">—</span>{% endif %}
        </td>

        <td class="text-end text-nowrap">
          <a class="btn btn-sm btn-outline-light" href="{{ url_for('edit', item_id=row.id) }}">Изменить</a>
          <form class="d-inline" method="post" action="{{ url_for('delete', item_id=row.id) }}"
                onsubmit="return confirm('Удалить локацию «{{ row.host_name }}» (ID {{ row.id }})?');">
            <button type="submit" class="btn btn-sm btn-outline-danger">Удалить</button>
          </form>
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
<p class="text-secondary small mt-3">
  Клик по паролю копирует его в буфер обмена · клик по заголовку колонки сортирует список (серверная сортировка).
</p>

{% else %}
<div class="empty-state">
  <div style="font-size: 2.4rem;">🗂</div>
  <h2 class="h5 mt-2 text-light">Пока нет ни одной VPN-локации</h2>
  <p class="mb-3">CSV-файл пуст — добавьте первую запись.</p>
  <a class="btn text-dark fw-semibold" style="background: var(--sea);" href="{{ url_for('create') }}">+ Добавить локацию</a>
</div>
{% endif %}
{% endblock %}

{% block scripts %}
<script>
  /* Копирование пароля в буфер обмена (с фолбэком для старых браузеров) */
  document.querySelectorAll('.pw-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      var text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      var prev = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = 'скопировано ✓';
      setTimeout(function () {
        btn.classList.remove('copied');
        btn.innerHTML = prev;
      }, 1300);
    });
  });

  /* Быстрый клиентский фильтр по строкам таблицы */
  var filterInput = document.getElementById('quick-filter');
  if (filterInput) {
    filterInput.addEventListener('input', function () {
      var q = filterInput.value.trim().toLowerCase();
      document.querySelectorAll('.vpn-row').forEach(function (tr) {
        tr.style.display = tr.getAttribute('data-search').indexOf(q) !== -1 ? '' : 'none';
      });
    });
  }
<\/script>
{% endblock %}
`,Wf=`{% extends "base.html" %}
{% block title %}{{ title }} — VPN Реестр{% endblock %}

{% block content %}
<div class="row justify-content-center">
  <div class="col-lg-10 col-xl-9">
    <div class="d-flex align-items-center gap-3 mb-3">
      <a href="{{ url_for('index') }}" class="btn btn-sm btn-outline-light">← К списку</a>
      <h1 class="h4 mb-0">{{ title }}</h1>
    </div>

    <form method="post" action="{{ action }}" class="vpn-form card border-0 p-4">

      {# ================= Хостер и доступ ================= #}
      <div class="form-section">01 · Хостер и доступ</div>
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Название хостера <span class="req">*</span></label>
          <input type="text" name="host_name" class="form-control {{ 'is-invalid' if errors.host_name }}"
                 value="{{ data.host_name }}" placeholder="Например: Aeza" required>
          {% if errors.host_name %}<div class="invalid-feedback">{{ errors.host_name }}</div>{% endif %}
        </div>

        <div class="col-md-6">
          <label class="form-label">Ссылка на страницу логина <span class="req">*</span></label>
          <input type="text" name="login_url" class="form-control {{ 'is-invalid' if errors.login_url }}"
                 value="{{ data.login_url }}" placeholder="https://example.com/login" required>
          {% if errors.login_url %}<div class="invalid-feedback">{{ errors.login_url }}</div>{% endif %}
        </div>

        <div class="col-md-6">
          <label class="form-label">Логин</label>
          <input type="text" name="login" class="form-control"
                 value="{{ data.login }}" placeholder="email или имя пользователя">
        </div>

        <div class="col-md-6">
          <label class="form-label">Пароль</label>
          <div class="input-group">
            <input type="password" name="login_password" id="login-password"
                   class="form-control" value="{{ data.get('login_password', '') }}" autocomplete="new-password"
                   placeholder="пароль от хостера">
            <button type="button" class="btn btn-outline-secondary" id="toggle-login-password"
                    title="Показать / скрыть пароль">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/>
                <circle cx="12" cy="12" r="2.6"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="col-md-6">
          <label class="form-label">Способ логина в хостере</label>
          <select name="login_method" class="form-select">
            <option value="" {{ 'selected' if not data.login_method }}>— не выбран —</option>
            {% for m in login_methods %}
              <option value="{{ m }}" {{ 'selected' if data.login_method == m }}>{{ m }}</option>
            {% endfor %}
          </select>
        </div>
      </div>

      {# ================= VPN-сервер ================= #}
      <div class="form-section">02 · VPN-сервер</div>
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Система VPN <span class="req">*</span></label>
          <select name="vpn_system" class="form-select {{ 'is-invalid' if errors.vpn_system }}" required>
            <option value="" disabled {{ 'selected' if not data.vpn_system }}>— выберите систему —</option>
            {% for s in vpn_systems %}
              <option value="{{ s }}" {{ 'selected' if data.vpn_system == s }}>{{ s }}</option>
            {% endfor %}
          </select>
          {% if errors.vpn_system %}<div class="invalid-feedback">{{ errors.vpn_system }}</div>{% endif %}
        </div>

        <div class="col-md-6">
          <label class="form-label">Страна <span class="req">*</span></label>
          <div class="input-group">
            <select name="country_name" id="country-select"
                    class="form-select {{ 'is-invalid' if errors.country_name }}" required>
              <option value="" disabled {{ 'selected' if not data.country_name }}>— выберите страну —</option>
              {% for ru, en, flag in countries %}
                <option value="{{ ru }}" data-flag="{{ flag }}"
                        {{ 'selected' if data.country_name == ru }}>{{ ru }} ({{ en }})</option>
              {% endfor %}
            </select>
            <span class="input-group-text flag-preview" id="flag-preview"
                  title="Флаг подставляется автоматически">{{ data.country_flag or '🏳️' }}</span>
          </div>
          {% if errors.country_name %}<div class="invalid-feedback d-block">{{ errors.country_name }}</div>{% endif %}
        </div>

        <div class="col-md-6">
          <label class="form-label">Доменное имя VPN</label>
          <input type="text" name="domain" class="form-control"
                 value="{{ data.domain }}" placeholder="vpn.example.com">
        </div>

        <div class="col-md-6">
          <label class="form-label">IP-адрес VPN</label>
          <input type="text" name="ip" class="form-control"
                 value="{{ data.ip }}" placeholder="203.0.113.10">
        </div>

        <div class="col-md-6">
          <label class="form-label">Логин на сервер</label>
          <input type="text" name="server_login" class="form-control"
                 value="{{ data.server_login }}" placeholder="root">
        </div>

        <div class="col-md-6">
          <label class="form-label">Пароль на сервер</label>
          <div class="input-group">
            <input type="password" name="server_password" id="server-password"
                   class="form-control" value="{{ data.server_password }}" autocomplete="new-password">
            <button type="button" class="btn btn-outline-secondary" id="toggle-password"
                    title="Показать / скрыть пароль">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/>
                <circle cx="12" cy="12" r="2.6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {# ================= Оплата ================= #}
      <div class="form-section">03 · Оплата</div>
      <div class="row g-3">
        <div class="col-md-4">
          <label class="form-label">Периодичность оплаты</label>
          <select name="payment_period" class="form-select">
            <option value="" {{ 'selected' if not data.payment_period }}>— не указана —</option>
            {% for p in payment_periods %}
              <option value="{{ p }}" {{ 'selected' if data.payment_period == p }}>{{ p }}</option>
            {% endfor %}
          </select>
        </div>

        <div class="col-md-4">
          <label class="form-label">Стоимость периода</label>
          <input type="number" step="0.01" min="0" name="payment_cost"
                 class="form-control {{ 'is-invalid' if errors.payment_cost }}"
                 value="{{ data.payment_cost }}" placeholder="0.00">
          {% if errors.payment_cost %}<div class="invalid-feedback">{{ errors.payment_cost }}</div>{% endif %}
        </div>

        <div class="col-md-2">
          <label class="form-label">Валюта</label>
          <select name="payment_currency" class="form-select">
            <option value="" {{ 'selected' if not data.payment_currency }}>—</option>
            {% for c in currencies %}
              <option value="{{ c }}" {{ 'selected' if data.payment_currency == c }}>{{ c }}</option>
            {% endfor %}
          </select>
        </div>

        <div class="col-md-2">
          <label class="form-label">Число оплаты</label>
          <input type="number" min="1" max="31" name="payment_day"
                 class="form-control {{ 'is-invalid' if errors.payment_day }}"
                 value="{{ data.payment_day }}" placeholder="1–31">
          {% if errors.payment_day %}<div class="invalid-feedback">{{ errors.payment_day }}</div>{% endif %}
        </div>
      </div>

      <div class="d-flex gap-2 mt-4">
        <button type="submit" class="btn text-dark fw-semibold px-4" style="background: var(--sea);">
          Сохранить
        </button>
        <a href="{{ url_for('index') }}" class="btn btn-outline-light">Отмена</a>
        {% if errors %}
          <span class="align-self-center text-danger small">Форма содержит ошибки — проверьте поля, отмеченные красным.</span>
        {% endif %}
      </div>
    </form>
  </div>
</div>
{% endblock %}

{% block scripts %}
<script>
  /* Автоматическая подстановка флага при выборе страны */
  var countrySelect = document.getElementById('country-select');
  var flagPreview = document.getElementById('flag-preview');
  if (countrySelect && flagPreview) {
    countrySelect.addEventListener('change', function () {
      var opt = countrySelect.options[countrySelect.selectedIndex];
      flagPreview.textContent = (opt && opt.dataset.flag) ? opt.dataset.flag : '🏳️';
    });
  }

  /* Показать / скрыть пароль сервера */
  var toggleBtn = document.getElementById('toggle-password');
  var passwordInput = document.getElementById('server-password');
  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener('click', function () {
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });
  }

  /* Показать / скрыть пароль логина */
  var toggleLoginBtn = document.getElementById('toggle-login-password');
  var loginPasswordInput = document.getElementById('login-password');
  if (toggleLoginBtn && loginPasswordInput) {
    toggleLoginBtn.addEventListener('click', function () {
      loginPasswordInput.type = loginPasswordInput.type === 'password' ? 'text' : 'password';
    });
  }
<\/script>
{% endblock %}
`,Qf=`Flask==3.0.3
validators==0.34.0
python-dotenv==1.0.1
`,Yf=`# ---------------------------------------------------------------
# Менеджер VPN-локаций (Flask + CSV)
# Простой одноступенчатый образ на slim-версии Python.
# ---------------------------------------------------------------
FROM python:3.11-slim

# Не буферизуем вывод — логи видны сразу в docker logs
ENV PYTHONUNBUFFERED=1 \\
    PYTHONDONTWRITEBYTECODE=1 \\
    PORT=5000

WORKDIR /app

# Сначала зависимости — слой будет кешироваться,
# пока requirements.txt не изменится
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Затем код приложения
COPY . .

# Порт можно переопределить переменной окружения PORT
EXPOSE 5000

# Том для CSV: данные переживают пересоздание контейнера
VOLUME ["/app/data"]

CMD ["python", "app.py"]
`,Kf=`__pycache__/
*.pyc
*.pyo
.venv/
venv/
.env
data/
data/*.csv
data/*.tmp
.git/
.gitignore
*.md
`,Gf=`# Запуск:  docker compose up -d --build
# Приложение будет доступно на http://localhost:5000
services:
  vpn-registry:
    build: .
    container_name: vpn-registry
    restart: unless-stopped
    ports:
      # «хост:контейнер»; порт контейнера берётся из ENV PORT
      - "5000:5000"
    environment:
      - PORT=5000
      # В production обязательно задайте свой ключ:
      - SECRET_KEY=change-me-in-production
    volumes:
      # CSV-файл живёт на хосте и сохраняется между перезапусками
      - ./data:/app/data
`,qf=`# Менеджер VPN-локаций (Flask + CSV)

Небольшое веб-приложение для учёта VPN-локаций: хостеры, ссылки на логин,
способы входа, VPN-системы, страны с флагами, домены/IP, серверные логины
и пароли, периодичность и стоимость оплаты.

Данные хранятся в обычном CSV-файле \`data/vpn_locations.csv\` (отладочный
вариант БД) — файл создаётся автоматически при первом запуске.

## Структура проекта

\`\`\`
flask-app/
├── app.py              # маршруты, валидация, сортировка, справочники
├── csv_store.py        # потокобезопасное CSV-хранилище (CRUD, атомарная запись)
├── requirements.txt    # зависимости
├── Dockerfile          # образ python:3.11-slim
├── docker-compose.yml  # запуск одной командой + volume для данных
├── data/               # сюда кладётся vpn_locations.csv (создаётся сама)
└── templates/
    ├── base.html       # базовый шаблон (Bootstrap 5, тёмная тема)
    ├── list.html       # список с серверной сортировкой и копированием пароля
    └── form.html       # общая форма создания/редактирования
\`\`\`

## Запуск локально

\`\`\`bash
cd flask-app
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
python app.py
\`\`\`

Откройте <http://localhost:5000>. Порт можно поменять переменной \`PORT\`,
путь к CSV — переменной \`CSV_PATH\`.

## Запуск через Docker

\`\`\`bash
docker build -t vpn-registry .
docker run -d --name vpn-registry -p 5000:5000 \\
  -v "$(pwd)/data:/app/data" vpn-registry
\`\`\`

## Запуск через Docker Compose

\`\`\`bash
docker compose up -d --build
docker compose logs -f          # смотреть логи
docker compose down             # остановить
\`\`\`

CSV-файл монтируется из \`./data\` — данные сохраняются между перезапусками.

## Как это работает

* **CRUD-маршруты**: \`GET /\` (список), \`GET/POST /create\`,
  \`GET/POST /edit/<id>\`, \`POST /delete/<id>\` (только POST — защита от
  случайного удаления по GET; подтверждение — через \`confirm()\` в JS).
* **Сортировка — серверная**: клик по заголовку колонки ведёт на
  \`/?sort=<поле>&order=asc|desc\`; ключи сортировки приведены к числам
  там, где это нужно (id, стоимость, день оплаты).
* **Валидация** на сервере: обязательные поля (хостер, ссылка, страна,
  система VPN), проверка URL пакетом \`validators\`, стоимость ≥ 0,
  день оплаты 1–31. Ошибки показываются под полями формы.
* **CSV-хранилище**: чтение/запись под \`threading.RLock\`, запись
  атомарная (временный файл + \`os.replace\`). Повреждённый файл не
  роняет приложение — показывается flash-сообщение.
* **Флаги стран** — эмодзи, хранятся в CSV; в форме при выборе страны
  флаг подставляется рядом (JS), сервер пересчитывает его сам.
* **Копирование пароля** — \`navigator.clipboard.writeText()\` с фолбэком
  через \`execCommand\` для старых браузеров.

## Возможные улучшения

1. Переехать с CSV на **SQLite + SQLAlchemy** (CSV — только отладка).
2. Добавить **аутентификацию** (Flask-Login) и шифрование паролей в
   хранилище (например, Fernet из \`cryptography\`).
3. Пагинация и полнотекстовый поиск по списку.
4. Экспорт/импорт в JSON, резервные копии CSV по расписанию.
5. Продакшен-сборка: \`gunicorn\` + nginx вторым сервисом в compose,
   multi-stage Dockerfile, тесты на \`pytest\`.
`,Ju=[{path:"app.py",lang:"python",note:"Flask-приложение: маршруты, валидация, серверная сортировка, справочники",content:Af},{path:"csv_store.py",lang:"python",note:"CSV-хранилище: CRUD по id, блокировки, атомарная запись",content:Bf},{path:"templates/base.html",lang:"jinja",note:"Базовый шаблон: Bootstrap 5, тёмная тема, flash-сообщения",content:$f},{path:"templates/list.html",lang:"jinja",note:"Список: сортировка по заголовкам, копирование пароля, confirm-удаление",content:Hf},{path:"templates/form.html",lang:"jinja",note:"Общая форма создания/редактирования, превью флага страны",content:Wf},{path:"requirements.txt",lang:"text",note:"Зависимости Python",content:Qf},{path:"Dockerfile",lang:"docker",note:"Образ python:3.11-slim, порт 5000, volume для данных",content:Yf},{path:"docker-compose.yml",lang:"yaml",note:"Запуск одной командой, CSV монтируется с хоста",content:Gf},{path:".dockerignore",lang:"text",note:"Исключения для сборки образа",content:Kf},{path:"README.md",lang:"markdown",note:"Инструкции по запуску и описание работы",content:qf}],Xf={python:"Python",jinja:"Jinja2",text:"Text",docker:"Docker",yaml:"YAML",markdown:"Markdown"};function Zf(){const[c,y]=ye.useState(0),[p,N]=ye.useState(!1),j=Ju[c],O=j.content.replace(/\n$/,"").split(`
`),G=async()=>{try{await navigator.clipboard.writeText(j.content)}catch{const B=document.createElement("textarea");B.value=j.content,document.body.appendChild(B),B.select(),document.execCommand("copy"),B.remove()}N(!0),window.setTimeout(()=>N(!1),1600)};return s.jsxs("div",{className:"anim-rise",children:[s.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"font-display text-xl font-semibold text-mist-100 sm:text-2xl",children:"Исходный код Flask-приложения"}),s.jsxs("p",{className:"mt-1.5 max-w-2xl text-sm leading-relaxed text-mist-500",children:["Полный проект лежит в папке ",s.jsx("span",{className:"font-mono text-sea-300",children:"flask-app/"})," — 10 файлов: бэкенд, Jinja-шаблоны, зависимости и Docker. Этот интерфейс — живое демо того, что рендерят шаблоны."]})]}),s.jsxs("button",{onClick:G,className:`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-all ${p?"border-sea-500 bg-sea-500/10 text-sea-300":"border-abyss-600 text-mist-300 hover:border-sea-600 hover:text-sea-300"}`,children:[p?s.jsx(kr,{className:"h-4 w-4"}):s.jsx(Bs,{className:"h-4 w-4"}),p?"Скопировано":"Копировать файл"]})]}),s.jsxs("div",{className:"mt-5 grid gap-4 md:grid-cols-[250px_1fr]",children:[s.jsx("div",{className:"anim-rise flex gap-1.5 overflow-x-auto rounded-lg border border-abyss-700 bg-abyss-850/70 p-2 md:flex-col md:overflow-visible",style:{animationDelay:"80ms"},children:Ju.map((B,L)=>s.jsxs("button",{onClick:()=>{y(L),N(!1)},className:`group shrink-0 rounded-md border-l-2 px-3 py-2 text-left transition-all duration-150 ${L===c?"border-sea-400 bg-sea-500/10":"border-transparent hover:border-abyss-600 hover:bg-abyss-800"}`,children:[s.jsx("span",{className:`block whitespace-nowrap font-mono text-xs ${L===c?"text-sea-300":"text-mist-300 group-hover:text-mist-100"}`,children:B.path}),s.jsx("span",{className:"mt-0.5 hidden max-w-[210px] truncate text-[11px] text-mist-600 md:block",children:B.note})]},B.path))}),s.jsxs("div",{className:"anim-rise overflow-hidden rounded-lg border border-abyss-700 bg-abyss-900",style:{animationDelay:"140ms"},children:[s.jsxs("div",{className:"flex items-center gap-3 border-b border-abyss-700 bg-abyss-850/80 px-4 py-2.5",children:[s.jsx(tc,{className:"h-4 w-4 text-sea-400"}),s.jsx("span",{className:"font-mono text-xs text-mist-100",children:j.path}),s.jsx("span",{className:"rounded border border-abyss-600 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mist-500",children:Xf[j.lang]??j.lang}),s.jsxs("span",{className:"ml-auto font-mono text-[11px] text-mist-600",children:[O.length," строк · ",new Blob([j.content]).size," Б"]})]}),s.jsx("div",{className:"anim-swap max-h-[62vh] overflow-auto py-2 font-mono text-[12.5px] leading-[1.6]",children:O.map((B,L)=>s.jsxs("div",{className:"codeline",children:[s.jsx("span",{className:"select-none pr-3 text-right text-mist-600/70",children:L+1}),s.jsx("span",{className:"whitespace-pre pr-4 text-mist-300",children:B||" "})]},L))},j.path)]})]})]})}function Ml({code:c}){const[y,p]=ye.useState(!1),N=async()=>{try{await navigator.clipboard.writeText(c)}catch{const j=document.createElement("textarea");j.value=c,document.body.appendChild(j),j.select(),document.execCommand("copy"),j.remove()}p(!0),window.setTimeout(()=>p(!1),1500)};return s.jsxs("div",{className:"group relative mt-3 overflow-hidden rounded-md border border-abyss-700 bg-abyss-900",children:[s.jsxs("button",{onClick:N,className:`absolute right-2 top-2 inline-flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-wider transition-all ${y?"border-sea-500 bg-sea-500/10 text-sea-300":"border-abyss-600 bg-abyss-850 text-mist-600 opacity-0 hover:text-sea-300 group-hover:opacity-100"}`,children:[y?s.jsx(kr,{className:"h-3 w-3"}):s.jsx(Bs,{className:"h-3 w-3"}),y?"ок":"copy"]}),s.jsx("pre",{className:"overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-mist-300",children:s.jsx("code",{children:c})})]})}function Ol({num:c,children:y}){return s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"font-mono text-xs tracking-[0.14em] text-sea-400",children:c}),s.jsx("h3",{className:"font-display text-base font-semibold text-mist-100",children:y})]})}const Jf=`flask-app/
├── app.py              # маршруты, валидация, серверная сортировка
├── csv_store.py        # CSV-хранилище: CRUD, блокировки, атомарная запись
├── requirements.txt    # Flask, validators, python-dotenv
├── Dockerfile          # python:3.11-slim, порт 5000
├── docker-compose.yml  # запуск + volume ./data:/app/data
├── data/               # сюда создаётся vpn_locations.csv
└── templates/
    ├── base.html       # Bootstrap 5, тёмная тема, flash-сообщения
    ├── list.html       # список: сортировка, копирование пароля
    └── form.html       # создание / редактирование`,ep=`cd flask-app
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
python app.py`,np=`docker build -t vpn-registry .
docker run -d --name vpn-registry -p 5000:5000 \\
  -v "$(pwd)/data:/app/data" vpn-registry`,tp=`docker compose up -d --build     # собрать и запустить
docker compose logs -f           # смотреть логи
docker compose down              # остановить`,rp=[["CRUD-маршруты","GET / (список), GET/POST /create, GET/POST /edit/<id>, POST /delete/<id> — удаление только через POST, в интерфейсе подтверждение через JS confirm()."],["CSV как БД","data/vpn_locations.csv создаётся автоматически со всеми 16 заголовками. Запись потокобезопасна (RLock) и атомарна: временный файл + os.replace()."],["Серверная сортировка","Клик по заголовку ведёт на /?sort=<поле>&order=asc|desc; id, стоимость и день оплаты сортируются как числа, остальное — как строки."],["Валидация","Обязательные поля (хостер, ссылка, страна, система VPN), проверка URL пакетом validators, стоимость ≥ 0, день оплаты 1–31. Ошибки выводятся под полями."],["JS-мелочи","Клик по паролю копирует его через navigator.clipboard.writeText (с фолбэком), флаг страны подставляется при выборе из выпадающего списка."],["Обработка ошибок","Повреждённый CSV не роняет приложение — показывается flash-сообщение, пустые и несуществующие ID обрабатываются явно."]],lp=["Переехать с CSV на SQLite + SQLAlchemy — CSV оставить только для отладки.","Аутентификация (Flask-Login) и шифрование серверных паролей в хранилище (Fernet из cryptography).","Пагинация и полнотекстовый поиск на сервере вместо клиентского фильтра.","Экспорт/импорт JSON и резервное копирование CSV по расписанию.","Продакшен: gunicorn + nginx вторым сервисом в compose, multi-stage Dockerfile, тесты на pytest."];function op(){return s.jsxs("div",{className:"mx-auto max-w-3xl",children:[s.jsxs("div",{className:"anim-rise",children:[s.jsx("h2",{className:"font-display text-xl font-semibold text-mist-100 sm:text-2xl",children:"Запуск и описание"}),s.jsx("p",{className:"mt-1.5 text-sm leading-relaxed text-mist-500",children:"Всё, что нужно, чтобы поднять Flask-приложение у себя: локально, в Docker или через Compose. Этот сайт — интерактивное демо интерфейса; данные в нём живут в localStorage вашего браузера."})]}),s.jsxs("div",{className:"anim-rise mt-8",style:{animationDelay:"80ms"},children:[s.jsx(Ol,{num:"01",children:"Структура проекта"}),s.jsx(Ml,{code:Jf})]}),s.jsxs("div",{className:"anim-rise mt-8",style:{animationDelay:"140ms"},children:[s.jsx(Ol,{num:"02",children:"Локально"}),s.jsx(Ml,{code:ep}),s.jsxs("p",{className:"mt-2 text-sm text-mist-500",children:["Приложение откроется на ",s.jsx("span",{className:"font-mono text-sea-300",children:"http://localhost:5000"}),". Порт меняется переменной ",s.jsx("span",{className:"font-mono text-mist-300",children:"PORT"}),", путь к CSV —"," ",s.jsx("span",{className:"font-mono text-mist-300",children:"CSV_PATH"}),"."]})]}),s.jsxs("div",{className:"anim-rise mt-8",style:{animationDelay:"200ms"},children:[s.jsx(Ol,{num:"03",children:"Docker"}),s.jsx(Ml,{code:np})]}),s.jsxs("div",{className:"anim-rise mt-8",style:{animationDelay:"260ms"},children:[s.jsx(Ol,{num:"04",children:"Docker Compose"}),s.jsx(Ml,{code:tp}),s.jsxs("p",{className:"mt-2 text-sm text-mist-500",children:["CSV монтируется из ",s.jsx("span",{className:"font-mono text-mist-300",children:"./data"})," — данные переживают пересоздание контейнера."]})]}),s.jsxs("div",{className:"anim-rise mt-10",style:{animationDelay:"320ms"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(Df,{className:"h-4 w-4 text-sea-400"}),s.jsx("h3",{className:"font-display text-base font-semibold text-mist-100",children:"Как это работает"})]}),s.jsx("div",{className:"mt-4 space-y-3",children:rp.map(([c,y])=>s.jsxs("div",{className:"rounded-md border border-abyss-700 bg-abyss-850/70 px-4 py-3 transition-colors hover:border-abyss-600",children:[s.jsx("div",{className:"font-mono text-[11px] uppercase tracking-[0.12em] text-sea-300",children:c}),s.jsx("p",{className:"mt-1 text-sm leading-relaxed text-mist-500",children:y})]},c))})]}),s.jsxs("div",{className:"anim-rise mt-10 mb-4",style:{animationDelay:"380ms"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(zf,{className:"h-4 w-4 text-ember-400"}),s.jsx("h3",{className:"font-display text-base font-semibold text-mist-100",children:"Возможные улучшения"})]}),s.jsx("ul",{className:"mt-4 space-y-2.5",children:lp.map(c=>s.jsxs("li",{className:"flex gap-3 text-sm leading-relaxed text-mist-500",children:[s.jsx(Rf,{className:"mt-0.5 h-4 w-4 shrink-0 text-ember-400/70"}),c]},c))})]})]})}async function sp(c){try{return await navigator.clipboard.writeText(c),!0}catch{try{const y=document.createElement("textarea");return y.value=c,y.style.position="fixed",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove(),!0}catch{return!1}}}const ip=[{id:"registry",label:"Реестр",icon:Tf},{id:"code",label:"Исходный код",icon:tc},{id:"docs",label:"Запуск",icon:Lf}];function ap(){const[c,y]=ye.useState(()=>df()),[p,N]=ye.useState("registry"),[j,O]=ye.useState({field:"id",dir:"asc"}),[G,B]=ye.useState(""),[L,U]=ye.useState(null),[ne,Y]=ye.useState(null),[D,S]=ye.useState([]),ce=ye.useRef(0);ye.useEffect(()=>{ff(c)},[c]);const q=(I,Q="success")=>{const X=++ce.current;S(re=>[...re.slice(-3),{id:X,text:I,tone:Q}]),window.setTimeout(()=>S(re=>re.filter(Ge=>Ge.id!==X)),2800)},te=(I,Q)=>{if(Q!=null)y(X=>X.map(re=>re.id===Q?{...I,id:Q}:re)),q(`Локация «${I.host_name}» обновлена`);else{const X=pf(c);y(re=>[...re,{...I,id:X}]),q(`Локация «${I.host_name}» создана · ID ${X}`)}U(null)},un=I=>{const Q=c.find(X=>X.id===I);y(X=>X.filter(re=>re.id!==I)),Y(null),q(Q?`«${Q.host_name}» (ID ${I}) удалена`:"Запись удалена","info")},nn=async(I,Q)=>{const X=await sp(I);q(X?`Пароль «${Q}» скопирован в буфер`:"Не удалось скопировать",X?"success":"danger")},Ke=I=>O(Q=>Q.field===I?{field:I,dir:Q.dir==="asc"?"desc":"asc"}:{field:I,dir:"asc"}),_e=ye.useMemo(()=>{const I=G.trim().toLowerCase();let Q=c;I&&(Q=Q.filter(re=>[re.host_name,re.country_name,re.domain,re.ip,re.vpn_system,re.login,re.login_method].join(" ").toLowerCase().includes(I)));const X=j.dir==="asc"?1:-1;return[...Q].sort((re,Ge)=>{const cn=re[j.field],Ue=Ge[j.field],Re=typeof cn=="number"?cn:null,be=typeof Ue=="number"?Ue:null;return Re!=null||be!=null?((Re??-1/0)-(be??-1/0))*X:String(cn??"").toLowerCase().localeCompare(String(Ue??"").toLowerCase(),"ru")*X})},[c,G,j]),Oe=()=>{N("registry"),U({item:null})};return s.jsxs("div",{className:"relative min-h-screen",children:[s.jsx("div",{className:"scene-grid","aria-hidden":!0}),s.jsx("div",{className:"scene-glow","aria-hidden":!0}),s.jsx("header",{className:"sticky top-0 z-40 border-b border-abyss-700 bg-abyss-950/85 backdrop-blur-sm",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-5 sm:px-6",children:[s.jsxs("button",{onClick:()=>N("registry"),className:"flex items-center gap-2.5 text-left",children:[s.jsx(Nf,{className:"h-8 w-8 shrink-0"}),s.jsxs("span",{children:[s.jsxs("span",{className:"block font-display text-sm font-bold leading-tight tracking-wide text-mist-100",children:["VPN",s.jsx("span",{className:"text-sea-400",children:"·"}),"РЕЕСТР"]}),s.jsx("span",{className:"block font-mono text-[10px] leading-tight text-mist-600",children:"flask · csv · docker"})]})]}),s.jsx("nav",{className:"ml-auto flex items-center gap-1 sm:gap-1.5",children:ip.map(I=>{const Q=I.icon,X=p===I.id;return s.jsxs("button",{onClick:()=>N(I.id),className:`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150 sm:px-3 ${X?"bg-sea-500/10 text-sea-300 shadow-[inset_0_0_0_1px_rgba(62,207,178,0.3)]":"text-mist-500 hover:bg-abyss-800 hover:text-mist-300"}`,children:[s.jsx(Q,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:I.label})]},I.id)})}),s.jsxs("button",{onClick:Oe,className:"ml-1 hidden items-center gap-1.5 rounded-md bg-sea-500 px-3.5 py-1.5 text-[13px] font-semibold text-abyss-950 transition-all duration-150 hover:bg-sea-400 hover:shadow-[0_0_22px_rgba(62,207,178,0.3)] md:inline-flex sm:ml-2",children:[s.jsx(Fs,{className:"h-4 w-4"}),"Новая локация"]})]})}),s.jsxs("main",{className:"relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8",children:[p==="registry"&&s.jsxs("div",{className:"space-y-5",children:[s.jsx(Sf,{locations:c}),s.jsxs("div",{className:"anim-rise flex flex-wrap items-end justify-between gap-4",style:{animationDelay:"120ms"},children:[s.jsxs("div",{children:[s.jsx("h1",{className:"font-display text-xl font-semibold text-mist-100 sm:text-2xl",children:"Реестр локаций"}),s.jsxs("p",{className:"mt-1 text-sm text-mist-500",children:[_e.length===c.length?`Всего записей: ${c.length}`:`Найдено ${_e.length} из ${c.length}`,s.jsx("span",{className:"mx-2 text-mist-600",children:"·"}),s.jsxs("span",{className:"font-mono text-xs text-mist-600",children:["сортировка: ",j.field," ",j.dir==="asc"?"↑":"↓"]})]})]}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[s.jsxs("span",{className:"hidden items-center gap-1.5 rounded-md border border-abyss-700 bg-abyss-850 px-2.5 py-1.5 font-mono text-[11px] text-mist-600 lg:inline-flex",children:[s.jsx("span",{className:"pulse-dot h-1.5 w-1.5 rounded-full bg-sea-400"}),"демо: localStorage · в Flask — CSV"]}),s.jsxs("div",{className:"relative",children:[s.jsx(jf,{className:"pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mist-600"}),s.jsx("input",{value:G,onChange:I=>B(I.target.value),placeholder:"Хостер, страна, домен, IP…",className:"input w-56 pl-8 sm:w-64"}),G&&s.jsx("button",{onClick:()=>B(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-mist-600 hover:text-mist-300",title:"Очистить",children:s.jsx(bs,{className:"h-3.5 w-3.5"})})]}),s.jsxs("button",{onClick:Oe,className:"inline-flex items-center gap-1.5 rounded-md bg-sea-500 px-3.5 py-2 text-[13px] font-semibold text-abyss-950 transition-all duration-150 hover:bg-sea-400 hover:shadow-[0_0_22px_rgba(62,207,178,0.3)] md:hidden",children:[s.jsx(Fs,{className:"h-4 w-4"}),"Добавить"]})]})]}),s.jsx(Of,{rows:_e,totalCount:c.length,sort:j,onSort:Ke,onEdit:I=>U({item:I}),onDelete:I=>Y(I),onCopy:nn,onAdd:Oe,onResetDemo:()=>{y(Il()),q("Демо-данные восстановлены","info")}}),s.jsx("p",{className:"hidden text-center font-mono text-[11px] text-mist-600 lg:block",children:"клик по заголовку колонки — сортировка · клик по паролю — копирование в буфер · название хостера открывает страницу логина"})]}),p==="code"&&s.jsx(Zf,{}),p==="docs"&&s.jsx(op,{})]}),s.jsx("footer",{className:"relative z-10 mt-10 border-t border-abyss-700",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-xs text-mist-600 sm:px-6",children:[s.jsx("span",{children:"Демо-интерфейс Flask-приложения · полный код — во вкладке «Исходный код» (папка flask-app/)"}),s.jsx("span",{className:"ml-auto hidden font-mono sm:inline",children:"GET / · /create · /edit/<id> · POST /delete/<id>"})]})}),L&&s.jsx(Uf,{initial:L.item,onSave:te,onClose:()=>U(null)}),ne&&s.jsx(bf,{item:ne,onConfirm:un,onClose:()=>Y(null)}),s.jsx("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-2",children:D.map(I=>s.jsxs("div",{className:`anim-toast pointer-events-auto flex items-center gap-2.5 rounded-md border bg-abyss-850 px-4 py-2.5 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${I.tone==="success"?"border-sea-600 text-sea-300":I.tone==="danger"?"border-coral-500 text-coral-300":"border-glacier-400/40 text-glacier-300"}`,children:[I.tone==="success"?s.jsx(kr,{className:"h-4 w-4 shrink-0"}):I.tone==="danger"?s.jsx(bs,{className:"h-4 w-4 shrink-0"}):s.jsx("span",{className:"h-1.5 w-1.5 shrink-0 rounded-full bg-glacier-400"}),I.text]},I.id))})]})}cf.createRoot(document.getElementById("root")).render(s.jsx(tf.StrictMode,{children:s.jsx(ap,{})}));
