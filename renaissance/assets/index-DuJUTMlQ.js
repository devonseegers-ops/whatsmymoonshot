(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var jc={exports:{}},qo={},Yc={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Yv(){if(gm)return St;gm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function _(N,J,Fe){this.props=N,this.context=J,this.refs=b,this.updater=Fe||S}_.prototype.isReactComponent={},_.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=_.prototype;function C(N,J,Fe){this.props=N,this.context=J,this.refs=b,this.updater=Fe||S}var L=C.prototype=new x;L.constructor=C,w(L,_.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(N,J,Fe){var We,Ne={},ae=null,xe=null;if(J!=null)for(We in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(ae=""+J.key),J)z.call(J,We)&&!F.hasOwnProperty(We)&&(Ne[We]=J[We]);var me=arguments.length-2;if(me===1)Ne.children=Fe;else if(1<me){for(var Ue=Array(me),Qe=0;Qe<me;Qe++)Ue[Qe]=arguments[Qe+2];Ne.children=Ue}if(N&&N.defaultProps)for(We in me=N.defaultProps,me)Ne[We]===void 0&&(Ne[We]=me[We]);return{$$typeof:s,type:N,key:ae,ref:xe,props:Ne,_owner:D.current}}function U(N,J){return{$$typeof:s,type:N.type,key:J,ref:N.ref,props:N.props,_owner:N._owner}}function j(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function O(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Fe){return J[Fe]})}var $=/\/+/g;function ue(N,J){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):J.toString(36)}function ce(N,J,Fe,We,Ne){var ae=typeof N;(ae==="undefined"||ae==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(ae){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case s:case e:xe=!0}}if(xe)return xe=N,Ne=Ne(xe),N=We===""?"."+ue(xe,0):We,P(Ne)?(Fe="",N!=null&&(Fe=N.replace($,"$&/")+"/"),ce(Ne,J,Fe,"",function(Qe){return Qe})):Ne!=null&&(j(Ne)&&(Ne=U(Ne,Fe+(!Ne.key||xe&&xe.key===Ne.key?"":(""+Ne.key).replace($,"$&/")+"/")+N)),J.push(Ne)),1;if(xe=0,We=We===""?".":We+":",P(N))for(var me=0;me<N.length;me++){ae=N[me];var Ue=We+ue(ae,me);xe+=ce(ae,J,Fe,Ue,Ne)}else if(Ue=g(N),typeof Ue=="function")for(N=Ue.call(N),me=0;!(ae=N.next()).done;)ae=ae.value,Ue=We+ue(ae,me++),xe+=ce(ae,J,Fe,Ue,Ne);else if(ae==="object")throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function H(N,J,Fe){if(N==null)return N;var We=[],Ne=0;return ce(N,We,"","",function(ae){return J.call(Fe,ae,Ne++)}),We}function ne(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(Fe){(N._status===0||N._status===-1)&&(N._status=1,N._result=Fe)},function(Fe){(N._status===0||N._status===-1)&&(N._status=2,N._result=Fe)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var X={current:null},Y={transition:null},re={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function se(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:H,forEach:function(N,J,Fe){H(N,function(){J.apply(this,arguments)},Fe)},count:function(N){var J=0;return H(N,function(){J++}),J},toArray:function(N){return H(N,function(J){return J})||[]},only:function(N){if(!j(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},St.Component=_,St.Fragment=t,St.Profiler=a,St.PureComponent=C,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,St.act=se,St.cloneElement=function(N,J,Fe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var We=w({},N.props),Ne=N.key,ae=N.ref,xe=N._owner;if(J!=null){if(J.ref!==void 0&&(ae=J.ref,xe=D.current),J.key!==void 0&&(Ne=""+J.key),N.type&&N.type.defaultProps)var me=N.type.defaultProps;for(Ue in J)z.call(J,Ue)&&!F.hasOwnProperty(Ue)&&(We[Ue]=J[Ue]===void 0&&me!==void 0?me[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)We.children=Fe;else if(1<Ue){me=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)me[Qe]=arguments[Qe+2];We.children=me}return{$$typeof:s,type:N.type,key:Ne,ref:ae,props:We,_owner:xe}},St.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},St.createElement=T,St.createFactory=function(N){var J=T.bind(null,N);return J.type=N,J},St.createRef=function(){return{current:null}},St.forwardRef=function(N){return{$$typeof:d,render:N}},St.isValidElement=j,St.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ne}},St.memo=function(N,J){return{$$typeof:m,type:N,compare:J===void 0?null:J}},St.startTransition=function(N){var J=Y.transition;Y.transition={};try{N()}finally{Y.transition=J}},St.unstable_act=se,St.useCallback=function(N,J){return X.current.useCallback(N,J)},St.useContext=function(N){return X.current.useContext(N)},St.useDebugValue=function(){},St.useDeferredValue=function(N){return X.current.useDeferredValue(N)},St.useEffect=function(N,J){return X.current.useEffect(N,J)},St.useId=function(){return X.current.useId()},St.useImperativeHandle=function(N,J,Fe){return X.current.useImperativeHandle(N,J,Fe)},St.useInsertionEffect=function(N,J){return X.current.useInsertionEffect(N,J)},St.useLayoutEffect=function(N,J){return X.current.useLayoutEffect(N,J)},St.useMemo=function(N,J){return X.current.useMemo(N,J)},St.useReducer=function(N,J,Fe){return X.current.useReducer(N,J,Fe)},St.useRef=function(N){return X.current.useRef(N)},St.useState=function(N){return X.current.useState(N)},St.useSyncExternalStore=function(N,J,Fe){return X.current.useSyncExternalStore(N,J,Fe)},St.useTransition=function(){return X.current.useTransition()},St.version="18.3.1",St}var vm;function Pd(){return vm||(vm=1,Yc.exports=Yv()),Yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function qv(){if(_m)return qo;_m=1;var s=Pd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var y,v={},g=null,S=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(y in p)r.call(p,y)&&!l.hasOwnProperty(y)&&(v[y]=p[y]);if(d&&d.defaultProps)for(y in p=d.defaultProps,p)v[y]===void 0&&(v[y]=p[y]);return{$$typeof:e,type:d,key:g,ref:S,props:v,_owner:a.current}}return qo.Fragment=t,qo.jsx=c,qo.jsxs=c,qo}var xm;function Kv(){return xm||(xm=1,jc.exports=qv()),jc.exports}var ie=Kv(),sn=Pd(),vl={},qc={exports:{}},Vn={},Kc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function $v(){return ym||(ym=1,(function(s){function e(Y,re){var se=Y.length;Y.push(re);e:for(;0<se;){var N=se-1>>>1,J=Y[N];if(0<a(J,re))Y[N]=re,Y[se]=J,se=N;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var re=Y[0],se=Y.pop();if(se!==re){Y[0]=se;e:for(var N=0,J=Y.length,Fe=J>>>1;N<Fe;){var We=2*(N+1)-1,Ne=Y[We],ae=We+1,xe=Y[ae];if(0>a(Ne,se))ae<J&&0>a(xe,Ne)?(Y[N]=xe,Y[ae]=se,N=ae):(Y[N]=Ne,Y[We]=se,N=We);else if(ae<J&&0>a(xe,se))Y[N]=xe,Y[ae]=se,N=ae;else break e}}return re}function a(Y,re){var se=Y.sortIndex-re.sortIndex;return se!==0?se:Y.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],y=1,v=null,g=3,S=!1,w=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Y){for(var re=t(m);re!==null;){if(re.callback===null)r(m);else if(re.startTime<=Y)r(m),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(m)}}function P(Y){if(b=!1,L(Y),!w)if(t(p)!==null)w=!0,ne(z);else{var re=t(m);re!==null&&X(P,re.startTime-Y)}}function z(Y,re){w=!1,b&&(b=!1,x(T),T=-1),S=!0;var se=g;try{for(L(re),v=t(p);v!==null&&(!(v.expirationTime>re)||Y&&!O());){var N=v.callback;if(typeof N=="function"){v.callback=null,g=v.priorityLevel;var J=N(v.expirationTime<=re);re=s.unstable_now(),typeof J=="function"?v.callback=J:v===t(p)&&r(p),L(re)}else r(p);v=t(p)}if(v!==null)var Fe=!0;else{var We=t(m);We!==null&&X(P,We.startTime-re),Fe=!1}return Fe}finally{v=null,g=se,S=!1}}var D=!1,F=null,T=-1,U=5,j=-1;function O(){return!(s.unstable_now()-j<U)}function $(){if(F!==null){var Y=s.unstable_now();j=Y;var re=!0;try{re=F(!0,Y)}finally{re?ue():(D=!1,F=null)}}else D=!1}var ue;if(typeof C=="function")ue=function(){C($)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,H=ce.port2;ce.port1.onmessage=$,ue=function(){H.postMessage(null)}}else ue=function(){_($,0)};function ne(Y){F=Y,D||(D=!0,ue())}function X(Y,re){T=_(function(){Y(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ne(z))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var re=3;break;default:re=g}var se=g;g=re;try{return Y()}finally{g=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,re){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var se=g;g=Y;try{return re()}finally{g=se}},s.unstable_scheduleCallback=function(Y,re,se){var N=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=se+J,Y={id:y++,callback:re,priorityLevel:Y,startTime:se,expirationTime:J,sortIndex:-1},se>N?(Y.sortIndex=se,e(m,Y),t(p)===null&&Y===t(m)&&(b?(x(T),T=-1):b=!0,X(P,se-N))):(Y.sortIndex=J,e(p,Y),w||S||(w=!0,ne(z))),Y},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(Y){var re=g;return function(){var se=g;g=re;try{return Y.apply(this,arguments)}finally{g=se}}}})($c)),$c}var Sm;function Zv(){return Sm||(Sm=1,Kc.exports=$v()),Kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Jv(){if(Mm)return Vn;Mm=1;var s=Pd(),e=Zv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function g(n){return p.call(v,n)?!0:p.call(y,n)?!1:m.test(n)?v[n]=!0:(y[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,o,u,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,C);_[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,C);_[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,C);_[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,u)&&(o=null),u||f===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),O=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),Y=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,N;function J(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Fe=!1;function We(n,i){if(!n||Fe)return"";Fe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var u=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){u=le}n.call(i.prototype)}else{try{throw Error()}catch(le){u=le}n()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var f=le.stack.split(`
`),h=u.stack.split(`
`),E=f.length-1,I=h.length-1;1<=E&&0<=I&&f[E]!==h[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==h[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==h[I]){var k=`
`+f[E].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=E&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?J(n):""}function Ne(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case D:return"Portal";case U:return"Profiler";case T:return"StrictMode";case ue:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,h.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tt(n){n._valueTracker||(n._valueTracker=Qe(n))}function Lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Ee(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ke(n,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Xe(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=me(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Pe(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ht(n,i){Pe(n,i);var o=me(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Zt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Zt(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Mt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Zt(n,i,o){(i!=="number"||Ee(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var G=Array.isArray;function Pt(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+me(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function pt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function It(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(G(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:me(o)}}function Ie(n,i){var o=me(i.value),u=me(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Gt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function R(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?R(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Le.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function fe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=fe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function st(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lt=null,vt=null,B=null;function Ae(n){if(n=Io(n)){if(typeof lt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=La(i),lt(n.stateNode,n.type,i))}}function de(n){vt?B?B.push(n):B=[n]:vt=n}function ze(){if(vt){var n=vt,i=B;if(B=vt=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function Re(n,i){return n(i)}function ve(){}var Ke=!1;function ut(n,i,o){if(Ke)return n(i,o);Ke=!0;try{return Re(n,i,o)}finally{Ke=!1,(vt!==null||B!==null)&&(ve(),ze())}}function kt(n,i){var o=n.stateNode;if(o===null)return null;var u=La(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Ct=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Ct=!1}function Qn(n,i,o,u,f,h,E,I,k){var le=Array.prototype.slice.call(arguments,3);try{i.apply(o,le)}catch(ye){this.onError(ye)}}var Bi=!1,fs=null,kr=!1,ds=null,zi={onError:function(n){Bi=!0,fs=n}};function fo(n,i,o,u,f,h,E,I,k){Bi=!1,fs=null,Qn.apply(zi,arguments)}function ma(n,i,o,u,f,h,E,I,k){if(fo.apply(this,arguments),Bi){if(Bi){var le=fs;Bi=!1,fs=null}else throw Error(t(198));kr||(kr=!0,ds=le)}}function Mi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Br(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ho(n){if(Mi(n)!==n)throw Error(t(188))}function hs(n){var i=n.alternate;if(!i){if(i=Mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return ho(f),n;if(h===u)return ho(f),i;h=h.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=h;else{for(var E=!1,I=f.child;I;){if(I===o){E=!0,o=f,u=h;break}if(I===u){E=!0,u=f,o=h;break}I=I.sibling}if(!E){for(I=h.child;I;){if(I===o){E=!0,o=h,u=f;break}if(I===u){E=!0,u=h,o=f;break}I=I.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function po(n){return n=hs(n),n!==null?mo(n):null}function mo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=mo(n);if(i!==null)return i;n=n.sibling}return null}var ga=e.unstable_scheduleCallback,va=e.unstable_cancelCallback,mu=e.unstable_shouldYield,gu=e.unstable_requestPaint,qt=e.unstable_now,vu=e.unstable_getCurrentPriorityLevel,go=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,oe=e.unstable_LowPriority,ee=e.unstable_IdlePriority,Q=null,De=null;function je(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:ct,$e=Math.log,nt=Math.LN2;function ct(n){return n>>>=0,n===0?32:31-($e(n)/nt|0)|0}var ft=64,Je=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,h=n.pingedLanes,E=o&268435455;if(E!==0){var I=E&~f;I!==0?u=At(I):(h&=E,h!==0&&(u=At(h)))}else E=o&~f,E!==0?u=At(E):h!==0&&(u=At(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Ce(i),f=1<<o,u|=n[o],i&=~f;return u}function jt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes;0<h;){var E=31-Ce(h),I=1<<E,k=f[E];k===-1?((I&o)===0||(I&u)!==0)&&(f[E]=jt(I,i)):k<=i&&(n.expiredLanes|=I),h&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function He(){var n=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),n}function gn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function _t(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ce(i),n[i]=o}function Fn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Ce(o),h=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~h}}function On(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Ce(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var yt=0;function Gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dt,Ht,ui,Ut,ci,Ei=!1,zr=[],ar=null,lr=null,ur=null,vo=new Map,_o=new Map,cr=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,i){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(i.pointerId)}}function xo(n,i,o,u,f,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Io(i),i!==null&&Ht(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function g0(n,i,o,u,f){switch(i){case"focusin":return ar=xo(ar,n,i,o,u,f),!0;case"dragenter":return lr=xo(lr,n,i,o,u,f),!0;case"mouseover":return ur=xo(ur,n,i,o,u,f),!0;case"pointerover":var h=f.pointerId;return vo.set(h,xo(vo.get(h)||null,n,i,o,u,f)),!0;case"gotpointercapture":return h=f.pointerId,_o.set(h,xo(_o.get(h)||null,n,i,o,u,f)),!0}return!1}function eh(n){var i=Gr(n.target);if(i!==null){var o=Mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Br(o),i!==null){n.blockedOn=i,ci(n.priority,function(){ui(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _a(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=xu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);we=u,o.target.dispatchEvent(u),we=null}else return i=Io(o),i!==null&&Ht(i),n.blockedOn=o,!1;i.shift()}return!0}function th(n,i,o){_a(n)&&o.delete(i)}function v0(){Ei=!1,ar!==null&&_a(ar)&&(ar=null),lr!==null&&_a(lr)&&(lr=null),ur!==null&&_a(ur)&&(ur=null),vo.forEach(th),_o.forEach(th)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,Ei||(Ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,v0)))}function So(n){function i(f){return yo(f,n)}if(0<zr.length){yo(zr[0],n);for(var o=1;o<zr.length;o++){var u=zr[o];u.blockedOn===n&&(u.blockedOn=null)}}for(ar!==null&&yo(ar,n),lr!==null&&yo(lr,n),ur!==null&&yo(ur,n),vo.forEach(i),_o.forEach(i),o=0;o<cr.length;o++)u=cr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)eh(o),o.blockedOn===null&&cr.shift()}var ps=P.ReactCurrentBatchConfig,xa=!0;function _0(n,i,o,u){var f=yt,h=ps.transition;ps.transition=null;try{yt=1,_u(n,i,o,u)}finally{yt=f,ps.transition=h}}function x0(n,i,o,u){var f=yt,h=ps.transition;ps.transition=null;try{yt=4,_u(n,i,o,u)}finally{yt=f,ps.transition=h}}function _u(n,i,o,u){if(xa){var f=xu(n,i,o,u);if(f===null)Fu(n,i,u,ya,o),Qd(n,u);else if(g0(f,n,i,o,u))u.stopPropagation();else if(Qd(n,u),i&4&&-1<m0.indexOf(n)){for(;f!==null;){var h=Io(f);if(h!==null&&Dt(h),h=xu(n,i,o,u),h===null&&Fu(n,i,u,ya,o),h===f)break;f=h}f!==null&&u.stopPropagation()}else Fu(n,i,u,null,o)}}var ya=null;function xu(n,i,o,u){if(ya=null,n=st(u),n=Gr(n),n!==null)if(i=Mi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Br(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ya=n,null}function nh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vu()){case go:return 1;case A:return 4;case W:case oe:return 16;case ee:return 536870912;default:return 16}default:return 16}}var fr=null,yu=null,Sa=null;function ih(){if(Sa)return Sa;var n,i=yu,o=i.length,u,f="value"in fr?fr.value:fr.textContent,h=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===f[h-u];u++);return Sa=f.slice(n,1<u?1-u:void 0)}function Ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function rh(){return!1}function Wn(n){function i(o,u,f,h,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ea:rh,this.isPropagationStopped=rh,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=Wn(ms),Mo=se({},ms,{view:0,detail:0}),y0=Wn(Mo),Mu,Eu,Eo,wa=se({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Eo&&(Eo&&n.type==="mousemove"?(Mu=n.screenX-Eo.screenX,Eu=n.screenY-Eo.screenY):Eu=Mu=0,Eo=n),Mu)},movementY:function(n){return"movementY"in n?n.movementY:Eu}}),sh=Wn(wa),S0=se({},wa,{dataTransfer:0}),M0=Wn(S0),E0=se({},Mo,{relatedTarget:0}),wu=Wn(E0),w0=se({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=Wn(w0),A0=se({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),b0=Wn(A0),C0=se({},ms,{data:0}),oh=Wn(C0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=D0[n])?!!i[n]:!1}function Tu(){return L0}var I0=se({},Mo,{key:function(n){if(n.key){var i=R0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?P0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(n){return n.type==="keypress"?Ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),N0=Wn(I0),U0=se({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Wn(U0),F0=se({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),O0=Wn(F0),k0=se({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=Wn(k0),z0=se({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Wn(z0),H0=[9,13,27,32],Au=d&&"CompositionEvent"in window,wo=null;d&&"documentMode"in document&&(wo=document.documentMode);var V0=d&&"TextEvent"in window&&!wo,lh=d&&(!Au||wo&&8<wo&&11>=wo),uh=" ",ch=!1;function fh(n,i){switch(n){case"keyup":return H0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function W0(n,i){switch(n){case"compositionend":return dh(i);case"keypress":return i.which!==32?null:(ch=!0,uh);case"textInput":return n=i.data,n===uh&&ch?null:n;default:return null}}function X0(n,i){if(gs)return n==="compositionend"||!Au&&fh(n,i)?(n=ih(),Sa=yu=fr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lh&&i.locale!=="ko"?null:i.data;default:return null}}var j0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!j0[n.type]:i==="textarea"}function ph(n,i,o,u){de(u),i=Ra(i,"onChange"),0<i.length&&(o=new Su("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var To=null,Ao=null;function Y0(n){Lh(n,0)}function Ta(n){var i=Ss(n);if(Lt(i))return n}function q0(n,i){if(n==="change")return i}var mh=!1;if(d){var bu;if(d){var Cu="oninput"in document;if(!Cu){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Cu=typeof gh.oninput=="function"}bu=Cu}else bu=!1;mh=bu&&(!document.documentMode||9<document.documentMode)}function vh(){To&&(To.detachEvent("onpropertychange",_h),Ao=To=null)}function _h(n){if(n.propertyName==="value"&&Ta(Ao)){var i=[];ph(i,Ao,n,st(n)),ut(Y0,i)}}function K0(n,i,o){n==="focusin"?(vh(),To=i,Ao=o,To.attachEvent("onpropertychange",_h)):n==="focusout"&&vh()}function $0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ta(Ao)}function Z0(n,i){if(n==="click")return Ta(i)}function J0(n,i){if(n==="input"||n==="change")return Ta(i)}function Q0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var fi=typeof Object.is=="function"?Object.is:Q0;function bo(n,i){if(fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!p.call(i,f)||!fi(n[f],i[f]))return!1}return!0}function xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yh(n,i){var o=xh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xh(o)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=Ee();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Ee(n.document)}return i}function Ru(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ev(n){var i=Mh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Sh(o.ownerDocument.documentElement,o)){if(u!==null&&Ru(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,h=Math.min(u.start,f);u=u.end===void 0?h:Math.min(u.end,f),!n.extend&&h>u&&(f=u,u=h,h=f),f=yh(o,h);var E=yh(o,u);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),h>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var tv=d&&"documentMode"in document&&11>=document.documentMode,vs=null,Pu=null,Co=null,Du=!1;function Eh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Du||vs==null||vs!==Ee(u)||(u=vs,"selectionStart"in u&&Ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Co&&bo(Co,u)||(Co=u,u=Ra(Pu,"onSelect"),0<u.length&&(i=new Su("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=vs)))}function Aa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var _s={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Lu={},wh={};d&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function ba(n){if(Lu[n])return Lu[n];if(!_s[n])return n;var i=_s[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in wh)return Lu[n]=i[o];return n}var Th=ba("animationend"),Ah=ba("animationiteration"),bh=ba("animationstart"),Ch=ba("transitionend"),Rh=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,i){Rh.set(n,i),l(i,[n])}for(var Iu=0;Iu<Ph.length;Iu++){var Nu=Ph[Iu],nv=Nu.toLowerCase(),iv=Nu[0].toUpperCase()+Nu.slice(1);dr(nv,"on"+iv)}dr(Th,"onAnimationEnd"),dr(Ah,"onAnimationIteration"),dr(bh,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(Ch,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Dh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ma(u,i,void 0,n),n.currentTarget=null}function Lh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var E=u.length-1;0<=E;E--){var I=u[E],k=I.instance,le=I.currentTarget;if(I=I.listener,k!==h&&f.isPropagationStopped())break e;Dh(f,I,le),h=k}else for(E=0;E<u.length;E++){if(I=u[E],k=I.instance,le=I.currentTarget,I=I.listener,k!==h&&f.isPropagationStopped())break e;Dh(f,I,le),h=k}}}if(kr)throw n=ds,kr=!1,ds=null,n}function Vt(n,i){var o=i[Hu];o===void 0&&(o=i[Hu]=new Set);var u=n+"__bubble";o.has(u)||(Ih(i,n,2,!1),o.add(u))}function Uu(n,i,o){var u=0;i&&(u|=4),Ih(o,n,u,i)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[Ca]){n[Ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(rv.has(o)||Uu(o,!1,n),Uu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ca]||(i[Ca]=!0,Uu("selectionchange",!1,i))}}function Ih(n,i,o,u){switch(nh(i)){case 1:var f=_0;break;case 4:f=x0;break;default:f=_u}o=f.bind(null,i,o,n),f=void 0,!Ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Fu(n,i,o,u,f){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Gr(I),E===null)return;if(k=E.tag,k===5||k===6){u=h=E;continue e}I=I.parentNode}}u=u.return}ut(function(){var le=h,ye=st(o),Se=[];e:{var _e=Rh.get(n);if(_e!==void 0){var Ve=Su,qe=n;switch(n){case"keypress":if(Ma(o)===0)break e;case"keydown":case"keyup":Ve=N0;break;case"focusin":qe="focus",Ve=wu;break;case"focusout":qe="blur",Ve=wu;break;case"beforeblur":case"afterblur":Ve=wu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=O0;break;case Th:case Ah:case bh:Ve=T0;break;case Ch:Ve=B0;break;case"scroll":Ve=y0;break;case"wheel":Ve=G0;break;case"copy":case"cut":case"paste":Ve=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=ah}var Ze=(i&4)!==0,en=!Ze&&n==="scroll",Z=Ze?_e!==null?_e+"Capture":null:_e;Ze=[];for(var V=le,te;V!==null;){te=V;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,Z!==null&&(Te=kt(V,Z),Te!=null&&Ze.push(Do(V,Te,te)))),en)break;V=V.return}0<Ze.length&&(_e=new Ve(_e,qe,null,o,ye),Se.push({event:_e,listeners:Ze}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",_e&&o!==we&&(qe=o.relatedTarget||o.fromElement)&&(Gr(qe)||qe[Hi]))break e;if((Ve||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ve?(qe=o.relatedTarget||o.toElement,Ve=le,qe=qe?Gr(qe):null,qe!==null&&(en=Mi(qe),qe!==en||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Ve=null,qe=le),Ve!==qe)){if(Ze=sh,Te="onMouseLeave",Z="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=ah,Te="onPointerLeave",Z="onPointerEnter",V="pointer"),en=Ve==null?_e:Ss(Ve),te=qe==null?_e:Ss(qe),_e=new Ze(Te,V+"leave",Ve,o,ye),_e.target=en,_e.relatedTarget=te,Te=null,Gr(ye)===le&&(Ze=new Ze(Z,V+"enter",qe,o,ye),Ze.target=te,Ze.relatedTarget=en,Te=Ze),en=Te,Ve&&qe)t:{for(Ze=Ve,Z=qe,V=0,te=Ze;te;te=xs(te))V++;for(te=0,Te=Z;Te;Te=xs(Te))te++;for(;0<V-te;)Ze=xs(Ze),V--;for(;0<te-V;)Z=xs(Z),te--;for(;V--;){if(Ze===Z||Z!==null&&Ze===Z.alternate)break t;Ze=xs(Ze),Z=xs(Z)}Ze=null}else Ze=null;Ve!==null&&Nh(Se,_e,Ve,Ze,!1),qe!==null&&en!==null&&Nh(Se,en,qe,Ze,!0)}}e:{if(_e=le?Ss(le):window,Ve=_e.nodeName&&_e.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&_e.type==="file")var et=q0;else if(hh(_e))if(mh)et=J0;else{et=$0;var it=K0}else(Ve=_e.nodeName)&&Ve.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(et=Z0);if(et&&(et=et(n,le))){ph(Se,et,o,ye);break e}it&&it(n,_e,le),n==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&Zt(_e,"number",_e.value)}switch(it=le?Ss(le):window,n){case"focusin":(hh(it)||it.contentEditable==="true")&&(vs=it,Pu=le,Co=null);break;case"focusout":Co=Pu=vs=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Eh(Se,o,ye);break;case"selectionchange":if(tv)break;case"keydown":case"keyup":Eh(Se,o,ye)}var rt;if(Au)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else gs?fh(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(lh&&o.locale!=="ko"&&(gs||at!=="onCompositionStart"?at==="onCompositionEnd"&&gs&&(rt=ih()):(fr=ye,yu="value"in fr?fr.value:fr.textContent,gs=!0)),it=Ra(le,at),0<it.length&&(at=new oh(at,n,null,o,ye),Se.push({event:at,listeners:it}),rt?at.data=rt:(rt=dh(o),rt!==null&&(at.data=rt)))),(rt=V0?W0(n,o):X0(n,o))&&(le=Ra(le,"onBeforeInput"),0<le.length&&(ye=new oh("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:le}),ye.data=rt))}Lh(Se,i)})}function Do(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ra(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=kt(n,o),h!=null&&u.unshift(Do(n,h,f)),h=kt(n,i),h!=null&&u.push(Do(n,h,f))),n=n.return}return u}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,o,u,f){for(var h=i._reactName,E=[];o!==null&&o!==u;){var I=o,k=I.alternate,le=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&le!==null&&(I=le,f?(k=kt(o,h),k!=null&&E.unshift(Do(o,k,I))):f||(k=kt(o,h),k!=null&&E.push(Do(o,k,I)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var sv=/\r\n?/g,ov=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(sv,`
`).replace(ov,"")}function Pa(n,i,o){if(i=Uh(i),Uh(n)!==i&&o)throw Error(t(425))}function Da(){}var Ou=null,ku=null;function Bu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,av=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,lv=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(n){return Fh.resolve(null).then(n).catch(uv)}:zu;function uv(n){setTimeout(function(){throw n})}function Gu(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),So(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);So(i)}function hr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),wi="__reactFiber$"+ys,Lo="__reactProps$"+ys,Hi="__reactContainer$"+ys,Hu="__reactEvents$"+ys,cv="__reactListeners$"+ys,fv="__reactHandles$"+ys;function Gr(n){var i=n[wi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Hi]||o[wi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Oh(n);n!==null;){if(o=n[wi])return o;n=Oh(n)}return i}n=o,o=n.parentNode}return null}function Io(n){return n=n[wi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function La(n){return n[Lo]||null}var Vu=[],Ms=-1;function pr(n){return{current:n}}function Wt(n){0>Ms||(n.current=Vu[Ms],Vu[Ms]=null,Ms--)}function zt(n,i){Ms++,Vu[Ms]=n.current,n.current=i}var mr={},yn=pr(mr),kn=pr(!1),Hr=mr;function Es(n,i){var o=n.type.contextTypes;if(!o)return mr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Bn(n){return n=n.childContextTypes,n!=null}function Ia(){Wt(kn),Wt(yn)}function kh(n,i,o){if(yn.current!==mr)throw Error(t(168));zt(yn,i),zt(kn,o)}function Bh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,xe(n)||"Unknown",f));return se({},o,u)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,Hr=yn.current,zt(yn,n),zt(kn,kn.current),!0}function zh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Bh(n,i,Hr),u.__reactInternalMemoizedMergedChildContext=n,Wt(kn),Wt(yn),zt(yn,n)):Wt(kn),zt(kn,o)}var Vi=null,Ua=!1,Wu=!1;function Gh(n){Vi===null?Vi=[n]:Vi.push(n)}function dv(n){Ua=!0,Gh(n)}function gr(){if(!Wu&&Vi!==null){Wu=!0;var n=0,i=yt;try{var o=Vi;for(yt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Vi=null,Ua=!1}catch(f){throw Vi!==null&&(Vi=Vi.slice(n+1)),ga(go,gr),f}finally{yt=i,Wu=!1}}return null}var ws=[],Ts=0,Fa=null,Oa=0,ei=[],ti=0,Vr=null,Wi=1,Xi="";function Wr(n,i){ws[Ts++]=Oa,ws[Ts++]=Fa,Fa=n,Oa=i}function Hh(n,i,o){ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Vr,Vr=n;var u=Wi;n=Xi;var f=32-Ce(u)-1;u&=~(1<<f),o+=1;var h=32-Ce(i)+f;if(30<h){var E=f-f%5;h=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Wi=1<<32-Ce(i)+f|o<<f|u,Xi=h+n}else Wi=1<<h|o<<f|u,Xi=n}function Xu(n){n.return!==null&&(Wr(n,1),Hh(n,1,0))}function ju(n){for(;n===Fa;)Fa=ws[--Ts],ws[Ts]=null,Oa=ws[--Ts],ws[Ts]=null;for(;n===Vr;)Vr=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var Xn=null,jn=null,Yt=!1,di=null;function Vh(n,i){var o=si(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Wh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,jn=hr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Vr!==null?{id:Wi,overflow:Xi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=si(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Xn=n,jn=null,!0):!1;default:return!1}}function Yu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qu(n){if(Yt){var i=jn;if(i){var o=i;if(!Wh(n,i)){if(Yu(n))throw Error(t(418));i=hr(o.nextSibling);var u=Xn;i&&Wh(n,i)?Vh(u,o):(n.flags=n.flags&-4097|2,Yt=!1,Xn=n)}}else{if(Yu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Xn=n}}}function Xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function ka(n){if(n!==Xn)return!1;if(!Yt)return Xh(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bu(n.type,n.memoizedProps)),i&&(i=jn)){if(Yu(n))throw jh(),Error(t(418));for(;i;)Vh(n,i),i=hr(i.nextSibling)}if(Xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){jn=hr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Xn?hr(n.stateNode.nextSibling):null;return!0}function jh(){for(var n=jn;n;)n=hr(n.nextSibling)}function As(){jn=Xn=null,Yt=!1}function Ku(n){di===null?di=[n]:di.push(n)}var hv=P.ReactCurrentBatchConfig;function No(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var I=f.refs;E===null?delete I[h]:I[h]=E},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ba(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yh(n){var i=n._init;return i(n._payload)}function qh(n){function i(Z,V){if(n){var te=Z.deletions;te===null?(Z.deletions=[V],Z.flags|=16):te.push(V)}}function o(Z,V){if(!n)return null;for(;V!==null;)i(Z,V),V=V.sibling;return null}function u(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function f(Z,V){return Z=wr(Z,V),Z.index=0,Z.sibling=null,Z}function h(Z,V,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<V?(Z.flags|=2,V):te):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function E(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,V,te,Te){return V===null||V.tag!==6?(V=zc(te,Z.mode,Te),V.return=Z,V):(V=f(V,te),V.return=Z,V)}function k(Z,V,te,Te){var et=te.type;return et===F?ye(Z,V,te.props.children,Te,te.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ne&&Yh(et)===V.type)?(Te=f(V,te.props),Te.ref=No(Z,V,te),Te.return=Z,Te):(Te=ul(te.type,te.key,te.props,null,Z.mode,Te),Te.ref=No(Z,V,te),Te.return=Z,Te)}function le(Z,V,te,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=Gc(te,Z.mode,Te),V.return=Z,V):(V=f(V,te.children||[]),V.return=Z,V)}function ye(Z,V,te,Te,et){return V===null||V.tag!==7?(V=Jr(te,Z.mode,Te,et),V.return=Z,V):(V=f(V,te),V.return=Z,V)}function Se(Z,V,te){if(typeof V=="string"&&V!==""||typeof V=="number")return V=zc(""+V,Z.mode,te),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case z:return te=ul(V.type,V.key,V.props,null,Z.mode,te),te.ref=No(Z,null,V),te.return=Z,te;case D:return V=Gc(V,Z.mode,te),V.return=Z,V;case ne:var Te=V._init;return Se(Z,Te(V._payload),te)}if(G(V)||re(V))return V=Jr(V,Z.mode,te,null),V.return=Z,V;Ba(Z,V)}return null}function _e(Z,V,te,Te){var et=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return et!==null?null:I(Z,V,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case z:return te.key===et?k(Z,V,te,Te):null;case D:return te.key===et?le(Z,V,te,Te):null;case ne:return et=te._init,_e(Z,V,et(te._payload),Te)}if(G(te)||re(te))return et!==null?null:ye(Z,V,te,Te,null);Ba(Z,te)}return null}function Ve(Z,V,te,Te,et){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(te)||null,I(V,Z,""+Te,et);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case z:return Z=Z.get(Te.key===null?te:Te.key)||null,k(V,Z,Te,et);case D:return Z=Z.get(Te.key===null?te:Te.key)||null,le(V,Z,Te,et);case ne:var it=Te._init;return Ve(Z,V,te,it(Te._payload),et)}if(G(Te)||re(Te))return Z=Z.get(te)||null,ye(V,Z,Te,et,null);Ba(V,Te)}return null}function qe(Z,V,te,Te){for(var et=null,it=null,rt=V,at=V=0,hn=null;rt!==null&&at<te.length;at++){rt.index>at?(hn=rt,rt=null):hn=rt.sibling;var Rt=_e(Z,rt,te[at],Te);if(Rt===null){rt===null&&(rt=hn);break}n&&rt&&Rt.alternate===null&&i(Z,rt),V=h(Rt,V,at),it===null?et=Rt:it.sibling=Rt,it=Rt,rt=hn}if(at===te.length)return o(Z,rt),Yt&&Wr(Z,at),et;if(rt===null){for(;at<te.length;at++)rt=Se(Z,te[at],Te),rt!==null&&(V=h(rt,V,at),it===null?et=rt:it.sibling=rt,it=rt);return Yt&&Wr(Z,at),et}for(rt=u(Z,rt);at<te.length;at++)hn=Ve(rt,Z,at,te[at],Te),hn!==null&&(n&&hn.alternate!==null&&rt.delete(hn.key===null?at:hn.key),V=h(hn,V,at),it===null?et=hn:it.sibling=hn,it=hn);return n&&rt.forEach(function(Tr){return i(Z,Tr)}),Yt&&Wr(Z,at),et}function Ze(Z,V,te,Te){var et=re(te);if(typeof et!="function")throw Error(t(150));if(te=et.call(te),te==null)throw Error(t(151));for(var it=et=null,rt=V,at=V=0,hn=null,Rt=te.next();rt!==null&&!Rt.done;at++,Rt=te.next()){rt.index>at?(hn=rt,rt=null):hn=rt.sibling;var Tr=_e(Z,rt,Rt.value,Te);if(Tr===null){rt===null&&(rt=hn);break}n&&rt&&Tr.alternate===null&&i(Z,rt),V=h(Tr,V,at),it===null?et=Tr:it.sibling=Tr,it=Tr,rt=hn}if(Rt.done)return o(Z,rt),Yt&&Wr(Z,at),et;if(rt===null){for(;!Rt.done;at++,Rt=te.next())Rt=Se(Z,Rt.value,Te),Rt!==null&&(V=h(Rt,V,at),it===null?et=Rt:it.sibling=Rt,it=Rt);return Yt&&Wr(Z,at),et}for(rt=u(Z,rt);!Rt.done;at++,Rt=te.next())Rt=Ve(rt,Z,at,Rt.value,Te),Rt!==null&&(n&&Rt.alternate!==null&&rt.delete(Rt.key===null?at:Rt.key),V=h(Rt,V,at),it===null?et=Rt:it.sibling=Rt,it=Rt);return n&&rt.forEach(function(jv){return i(Z,jv)}),Yt&&Wr(Z,at),et}function en(Z,V,te,Te){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case z:e:{for(var et=te.key,it=V;it!==null;){if(it.key===et){if(et=te.type,et===F){if(it.tag===7){o(Z,it.sibling),V=f(it,te.props.children),V.return=Z,Z=V;break e}}else if(it.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ne&&Yh(et)===it.type){o(Z,it.sibling),V=f(it,te.props),V.ref=No(Z,it,te),V.return=Z,Z=V;break e}o(Z,it);break}else i(Z,it);it=it.sibling}te.type===F?(V=Jr(te.props.children,Z.mode,Te,te.key),V.return=Z,Z=V):(Te=ul(te.type,te.key,te.props,null,Z.mode,Te),Te.ref=No(Z,V,te),Te.return=Z,Z=Te)}return E(Z);case D:e:{for(it=te.key;V!==null;){if(V.key===it)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){o(Z,V.sibling),V=f(V,te.children||[]),V.return=Z,Z=V;break e}else{o(Z,V);break}else i(Z,V);V=V.sibling}V=Gc(te,Z.mode,Te),V.return=Z,Z=V}return E(Z);case ne:return it=te._init,en(Z,V,it(te._payload),Te)}if(G(te))return qe(Z,V,te,Te);if(re(te))return Ze(Z,V,te,Te);Ba(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,V!==null&&V.tag===6?(o(Z,V.sibling),V=f(V,te),V.return=Z,Z=V):(o(Z,V),V=zc(te,Z.mode,Te),V.return=Z,Z=V),E(Z)):o(Z,V)}return en}var bs=qh(!0),Kh=qh(!1),za=pr(null),Ga=null,Cs=null,$u=null;function Zu(){$u=Cs=Ga=null}function Ju(n){var i=za.current;Wt(za),n._currentValue=i}function Qu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Rs(n,i){Ga=n,$u=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(zn=!0),n.firstContext=null)}function ni(n){var i=n._currentValue;if($u!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Ga===null)throw Error(t(308));Cs=n,Ga.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Xr=null;function ec(n){Xr===null?Xr=[n]:Xr.push(n)}function $h(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,ec(i)):(o.next=f.next,f.next=o),i.interleaved=o,ji(n,u)}function ji(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var vr=!1;function tc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,ji(n,o)}return f=u.interleaved,f===null?(i.next=i,ec(u)):(i.next=f.next,f.next=i),u.interleaved=i,ji(n,o)}function Ha(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,On(n,o)}}function Jh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Va(n,i,o,u){var f=n.updateQueue;vr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var k=I,le=k.next;k.next=null,E===null?h=le:E.next=le,E=k;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==E&&(I===null?ye.firstBaseUpdate=le:I.next=le,ye.lastBaseUpdate=k))}if(h!==null){var Se=f.baseState;E=0,ye=le=k=null,I=h;do{var _e=I.lane,Ve=I.eventTime;if((u&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var qe=n,Ze=I;switch(_e=i,Ve=o,Ze.tag){case 1:if(qe=Ze.payload,typeof qe=="function"){Se=qe.call(Ve,Se,_e);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ze.payload,_e=typeof qe=="function"?qe.call(Ve,Se,_e):qe,_e==null)break e;Se=se({},Se,_e);break e;case 2:vr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[I]:_e.push(I))}else Ve={eventTime:Ve,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(le=ye=Ve,k=Se):ye=ye.next=Ve,E|=_e;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(ye===null&&(k=Se),f.baseState=k,f.firstBaseUpdate=le,f.lastBaseUpdate=ye,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);qr|=E,n.lanes=E,n.memoizedState=Se}}function Qh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Uo={},Ti=pr(Uo),Fo=pr(Uo),Oo=pr(Uo);function jr(n){if(n===Uo)throw Error(t(174));return n}function nc(n,i){switch(zt(Oo,i),zt(Fo,n),zt(Ti,Uo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Wt(Ti),zt(Ti,i)}function Ps(){Wt(Ti),Wt(Fo),Wt(Oo)}function ep(n){jr(Oo.current);var i=jr(Ti.current),o=M(i,n.type);i!==o&&(zt(Fo,n),zt(Ti,o))}function ic(n){Fo.current===n&&(Wt(Ti),Wt(Fo))}var Kt=pr(0);function Wa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rc=[];function sc(){for(var n=0;n<rc.length;n++)rc[n]._workInProgressVersionPrimary=null;rc.length=0}var Xa=P.ReactCurrentDispatcher,oc=P.ReactCurrentBatchConfig,Yr=0,$t=null,on=null,fn=null,ja=!1,ko=!1,Bo=0,pv=0;function Sn(){throw Error(t(321))}function ac(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!fi(n[o],i[o]))return!1;return!0}function lc(n,i,o,u,f,h){if(Yr=h,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xa.current=n===null||n.memoizedState===null?_v:xv,n=o(u,f),ko){h=0;do{if(ko=!1,Bo=0,25<=h)throw Error(t(301));h+=1,fn=on=null,i.updateQueue=null,Xa.current=yv,n=o(u,f)}while(ko)}if(Xa.current=Ka,i=on!==null&&on.next!==null,Yr=0,fn=on=$t=null,ja=!1,i)throw Error(t(300));return n}function uc(){var n=Bo!==0;return Bo=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?$t.memoizedState=fn=n:fn=fn.next=n,fn}function ii(){if(on===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=fn===null?$t.memoizedState:fn.next;if(i!==null)fn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},fn===null?$t.memoizedState=fn=n:fn=fn.next=n}return fn}function zo(n,i){return typeof i=="function"?i(n):i}function cc(n){var i=ii(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=on,f=u.baseQueue,h=o.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}u.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,u=u.baseState;var I=E=null,k=null,le=h;do{var ye=le.lane;if((Yr&ye)===ye)k!==null&&(k=k.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:n(u,le.action);else{var Se={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};k===null?(I=k=Se,E=u):k=k.next=Se,$t.lanes|=ye,qr|=ye}le=le.next}while(le!==null&&le!==h);k===null?E=u:k.next=I,fi(u,i.memoizedState)||(zn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do h=f.lane,$t.lanes|=h,qr|=h,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(n){var i=ii(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do h=n(h,E.action),E=E.next;while(E!==f);fi(h,i.memoizedState)||(zn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,u]}function tp(){}function np(n,i){var o=$t,u=ii(),f=i(),h=!fi(u.memoizedState,f);if(h&&(u.memoizedState=f,zn=!0),u=u.queue,dc(sp.bind(null,o,u,n),[n]),u.getSnapshot!==i||h||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Go(9,rp.bind(null,o,u,f,i),void 0,null),dn===null)throw Error(t(349));(Yr&30)!==0||ip(o,i,f)}return f}function ip(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function rp(n,i,o,u){i.value=o,i.getSnapshot=u,op(i)&&ap(n)}function sp(n,i,o){return o(function(){op(i)&&ap(n)})}function op(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!fi(n,o)}catch{return!0}}function ap(n){var i=ji(n,1);i!==null&&gi(i,n,1,-1)}function lp(n){var i=Ai();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},i.queue=n,n=n.dispatch=vv.bind(null,$t,n),[i.memoizedState,n]}function Go(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function up(){return ii().memoizedState}function Ya(n,i,o,u){var f=Ai();$t.flags|=n,f.memoizedState=Go(1|i,o,void 0,u===void 0?null:u)}function qa(n,i,o,u){var f=ii();u=u===void 0?null:u;var h=void 0;if(on!==null){var E=on.memoizedState;if(h=E.destroy,u!==null&&ac(u,E.deps)){f.memoizedState=Go(i,o,h,u);return}}$t.flags|=n,f.memoizedState=Go(1|i,o,h,u)}function cp(n,i){return Ya(8390656,8,n,i)}function dc(n,i){return qa(2048,8,n,i)}function fp(n,i){return qa(4,2,n,i)}function dp(n,i){return qa(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pp(n,i,o){return o=o!=null?o.concat([n]):null,qa(4,4,hp.bind(null,i,n),o)}function hc(){}function mp(n,i){var o=ii();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function gp(n,i){var o=ii();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function vp(n,i,o){return(Yr&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=o):(fi(o,i)||(o=He(),$t.lanes|=o,qr|=o,n.baseState=!0),i)}function mv(n,i){var o=yt;yt=o!==0&&4>o?o:4,n(!0);var u=oc.transition;oc.transition={};try{n(!1),i()}finally{yt=o,oc.transition=u}}function _p(){return ii().memoizedState}function gv(n,i,o){var u=Mr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},xp(n))yp(i,o);else if(o=$h(n,i,o,u),o!==null){var f=Ln();gi(o,n,u,f),Sp(o,i,u)}}function vv(n,i,o){var u=Mr(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(xp(n))yp(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,I=h(E,o);if(f.hasEagerState=!0,f.eagerState=I,fi(I,E)){var k=i.interleaved;k===null?(f.next=f,ec(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=$h(n,i,f,u),o!==null&&(f=Ln(),gi(o,n,u,f),Sp(o,i,u))}}function xp(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function yp(n,i){ko=ja=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Sp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,On(n,o)}}var Ka={readContext:ni,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},_v={readContext:ni,useCallback:function(n,i){return Ai().memoizedState=[n,i===void 0?null:i],n},useContext:ni,useEffect:cp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ya(4194308,4,hp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ya(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ya(4,2,n,i)},useMemo:function(n,i){var o=Ai();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ai();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=gv.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=Ai();return n={current:n},i.memoizedState=n},useState:lp,useDebugValue:hc,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=lp(!1),i=n[0];return n=mv.bind(null,n[1]),Ai().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=$t,f=Ai();if(Yt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),dn===null)throw Error(t(349));(Yr&30)!==0||ip(u,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,cp(sp.bind(null,u,h,n),[n]),u.flags|=2048,Go(9,rp.bind(null,u,h,o,i),void 0,null),o},useId:function(){var n=Ai(),i=dn.identifierPrefix;if(Yt){var o=Xi,u=Wi;o=(u&~(1<<32-Ce(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=pv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},xv={readContext:ni,useCallback:mp,useContext:ni,useEffect:dc,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:cc,useRef:up,useState:function(){return cc(zo)},useDebugValue:hc,useDeferredValue:function(n){var i=ii();return vp(i,on.memoizedState,n)},useTransition:function(){var n=cc(zo)[0],i=ii().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:_p,unstable_isNewReconciler:!1},yv={readContext:ni,useCallback:mp,useContext:ni,useEffect:dc,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:fc,useRef:up,useState:function(){return fc(zo)},useDebugValue:hc,useDeferredValue:function(n){var i=ii();return on===null?i.memoizedState=n:vp(i,on.memoizedState,n)},useTransition:function(){var n=fc(zo)[0],i=ii().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:_p,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function pc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var $a={isMounted:function(n){return(n=n._reactInternals)?Mi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Ln(),f=Mr(n),h=Yi(u,f);h.payload=i,o!=null&&(h.callback=o),i=_r(n,h,f),i!==null&&(gi(i,n,f,u),Ha(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Ln(),f=Mr(n),h=Yi(u,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=_r(n,h,f),i!==null&&(gi(i,n,f,u),Ha(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ln(),u=Mr(n),f=Yi(o,u);f.tag=2,i!=null&&(f.callback=i),i=_r(n,f,u),i!==null&&(gi(i,n,u,o),Ha(i,n,u))}};function Mp(n,i,o,u,f,h,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,h,E):i.prototype&&i.prototype.isPureReactComponent?!bo(o,u)||!bo(f,h):!0}function Ep(n,i,o){var u=!1,f=mr,h=i.contextType;return typeof h=="object"&&h!==null?h=ni(h):(f=Bn(i)?Hr:yn.current,u=i.contextTypes,h=(u=u!=null)?Es(n,f):mr),i=new i(o,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$a,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=h),i}function wp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&$a.enqueueReplaceState(i,i.state,null)}function mc(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},tc(n);var h=i.contextType;typeof h=="object"&&h!==null?f.context=ni(h):(h=Bn(i)?Hr:yn.current,f.context=Es(n,h)),f.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(pc(n,i,h,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&$a.enqueueReplaceState(f,f.state,null),Va(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ds(n,i){try{var o="",u=i;do o+=Ne(u),u=u.return;while(u);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:f,digest:null}}function gc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function vc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Sv=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,o){o=Yi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){il||(il=!0,Lc=u),vc(n,i)},o}function Ap(n,i,o){o=Yi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){vc(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vc(n,i),typeof u!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function bp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Sv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=Uv.bind(null,n,i,o),i.then(n,n))}function Cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Yi(-1,1),i.tag=2,_r(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Mv=P.ReactCurrentOwner,zn=!1;function Dn(n,i,o,u){i.child=n===null?Kh(i,null,o,u):bs(i,n.child,o,u)}function Pp(n,i,o,u,f){o=o.render;var h=i.ref;return Rs(i,f),u=lc(n,i,o,u,h,f),o=uc(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,qi(n,i,f)):(Yt&&o&&Xu(i),i.flags|=1,Dn(n,i,u,f),i.child)}function Dp(n,i,o,u,f){if(n===null){var h=o.type;return typeof h=="function"&&!Bc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Lp(n,i,h,u,f)):(n=ul(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&f)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:bo,o(E,u)&&n.ref===i.ref)return qi(n,i,f)}return i.flags|=1,n=wr(h,u),n.ref=i.ref,n.return=i,i.child=n}function Lp(n,i,o,u,f){if(n!==null){var h=n.memoizedProps;if(bo(h,u)&&n.ref===i.ref)if(zn=!1,i.pendingProps=u=h,(n.lanes&f)!==0)(n.flags&131072)!==0&&(zn=!0);else return i.lanes=n.lanes,qi(n,i,f)}return _c(n,i,o,u,f)}function Ip(n,i,o){var u=i.pendingProps,f=u.children,h=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Is,Yn),Yn|=o;else{if((o&1073741824)===0)return n=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(Is,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:o,zt(Is,Yn),Yn|=u}else h!==null?(u=h.baseLanes|o,i.memoizedState=null):u=o,zt(Is,Yn),Yn|=u;return Dn(n,i,f,o),i.child}function Np(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function _c(n,i,o,u,f){var h=Bn(o)?Hr:yn.current;return h=Es(i,h),Rs(i,f),o=lc(n,i,o,u,h,f),u=uc(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,qi(n,i,f)):(Yt&&u&&Xu(i),i.flags|=1,Dn(n,i,o,f),i.child)}function Up(n,i,o,u,f){if(Bn(o)){var h=!0;Na(i)}else h=!1;if(Rs(i,f),i.stateNode===null)Ja(n,i),Ep(i,o,u),mc(i,o,u,f),u=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var k=E.context,le=o.contextType;typeof le=="object"&&le!==null?le=ni(le):(le=Bn(o)?Hr:yn.current,le=Es(i,le));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||k!==le)&&wp(i,E,u,le),vr=!1;var _e=i.memoizedState;E.state=_e,Va(i,u,E,f),k=i.memoizedState,I!==u||_e!==k||kn.current||vr?(typeof ye=="function"&&(pc(i,o,ye,u),k=i.memoizedState),(I=vr||Mp(i,o,I,u,_e,k,le))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),E.props=u,E.state=k,E.context=le,u=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Zh(n,i),I=i.memoizedProps,le=i.type===i.elementType?I:hi(i.type,I),E.props=le,Se=i.pendingProps,_e=E.context,k=o.contextType,typeof k=="object"&&k!==null?k=ni(k):(k=Bn(o)?Hr:yn.current,k=Es(i,k));var Ve=o.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Se||_e!==k)&&wp(i,E,u,k),vr=!1,_e=i.memoizedState,E.state=_e,Va(i,u,E,f);var qe=i.memoizedState;I!==Se||_e!==qe||kn.current||vr?(typeof Ve=="function"&&(pc(i,o,Ve,u),qe=i.memoizedState),(le=vr||Mp(i,o,le,u,_e,qe,k)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,qe,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,qe,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=qe),E.props=u,E.state=qe,E.context=k,u=le):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return xc(n,i,o,u,h,f)}function xc(n,i,o,u,f,h){Np(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return f&&zh(i,o,!1),qi(n,i,h);u=i.stateNode,Mv.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=bs(i,n.child,null,h),i.child=bs(i,null,I,h)):Dn(n,i,I,h),i.memoizedState=u.state,f&&zh(i,o,!0),i.child}function Fp(n){var i=n.stateNode;i.pendingContext?kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kh(n,i.context,!1),nc(n,i.containerInfo)}function Op(n,i,o,u,f){return As(),Ku(f),i.flags|=256,Dn(n,i,o,u),i.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Sc(n){return{baseLanes:n,cachePool:null,transitions:null}}function kp(n,i,o){var u=i.pendingProps,f=Kt.current,h=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),zt(Kt,f&1),n===null)return qu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,h?(u=i.mode,h=i.child,E={mode:"hidden",children:E},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=cl(E,u,0,null),n=Jr(n,u,o,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=Sc(o),i.memoizedState=yc,n):Mc(i,E));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return Ev(n,i,E,u,I,f,o);if(h){h=u.fallback,E=i.mode,f=n.child,I=f.sibling;var k={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=wr(f,k),u.subtreeFlags=f.subtreeFlags&14680064),I!==null?h=wr(I,h):(h=Jr(h,E,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,E=n.child.memoizedState,E=E===null?Sc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=n.childLanes&~o,i.memoizedState=yc,u}return h=n.child,n=h.sibling,u=wr(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Mc(n,i){return i=cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Za(n,i,o,u){return u!==null&&Ku(u),bs(i,n.child,null,o),n=Mc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ev(n,i,o,u,f,h,E){if(o)return i.flags&256?(i.flags&=-257,u=gc(Error(t(422))),Za(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=u.fallback,f=i.mode,u=cl({mode:"visible",children:u.children},f,0,null),h=Jr(h,f,E,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&bs(i,n.child,null,E),i.child.memoizedState=Sc(E),i.memoizedState=yc,h);if((i.mode&1)===0)return Za(n,i,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var I=u.dgst;return u=I,h=Error(t(419)),u=gc(h,u,void 0),Za(n,i,E,u)}if(I=(E&n.childLanes)!==0,zn||I){if(u=dn,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,ji(n,f),gi(u,n,f,-1))}return kc(),u=gc(Error(t(421))),Za(n,i,E,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Fv.bind(null,n),f._reactRetry=i,null):(n=h.treeContext,jn=hr(f.nextSibling),Xn=i,Yt=!0,di=null,n!==null&&(ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Vr,Wi=n.id,Xi=n.overflow,Vr=i),i=Mc(i,u.children),i.flags|=4096,i)}function Bp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Qu(n.return,i,o)}function Ec(n,i,o,u,f){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=o,h.tailMode=f)}function zp(n,i,o){var u=i.pendingProps,f=u.revealOrder,h=u.tail;if(Dn(n,i,u.children,o),u=Kt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,o,i);else if(n.tag===19)Bp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(zt(Kt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Wa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ec(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Wa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Ec(i,!0,o,null,h);break;case"together":Ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function qi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),qr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=wr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=wr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function wv(n,i,o){switch(i.tag){case 3:Fp(i),As();break;case 5:ep(i);break;case 1:Bn(i.type)&&Na(i);break;case 4:nc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;zt(za,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(zt(Kt,Kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?kp(n,i,o):(zt(Kt,Kt.current&1),n=qi(n,i,o),n!==null?n.sibling:null);zt(Kt,Kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return zp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),zt(Kt,Kt.current),u)break;return null;case 22:case 23:return i.lanes=0,Ip(n,i,o)}return qi(n,i,o)}var Gp,wc,Hp,Vp;Gp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wc=function(){},Hp=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,jr(Ti.current);var h=null;switch(o){case"input":f=ke(n,f),u=ke(n,u),h=[];break;case"select":f=se({},f,{value:void 0}),u=se({},u,{value:void 0}),h=[];break;case"textarea":f=pt(n,f),u=pt(n,u),h=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Da)}Ge(o,u);var E;o=null;for(le in f)if(!u.hasOwnProperty(le)&&f.hasOwnProperty(le)&&f[le]!=null)if(le==="style"){var I=f[le];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?h||(h=[]):(h=h||[]).push(le,null));for(le in u){var k=u[le];if(I=f!=null?f[le]:void 0,u.hasOwnProperty(le)&&k!==I&&(k!=null||I!=null))if(le==="style")if(I){for(E in I)!I.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in k)k.hasOwnProperty(E)&&I[E]!==k[E]&&(o||(o={}),o[E]=k[E])}else o||(h||(h=[]),h.push(le,o)),o=k;else le==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(h=h||[]).push(le,k)):le==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(le,""+k):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(k!=null&&le==="onScroll"&&Vt("scroll",n),h||I===k||(h=[])):(h=h||[]).push(le,k))}o&&(h=h||[]).push("style",o);var le=h;(i.updateQueue=le)&&(i.flags|=4)}},Vp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Ho(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Tv(n,i,o){var u=i.pendingProps;switch(ju(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Bn(i.type)&&Ia(),Mn(i),null;case 3:return u=i.stateNode,Ps(),Wt(kn),Wt(yn),sc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ka(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(Uc(di),di=null))),wc(n,i),Mn(i),null;case 5:ic(i);var f=jr(Oo.current);if(o=i.type,n!==null&&i.stateNode!=null)Hp(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=jr(Ti.current),ka(i)){u=i.stateNode,o=i.type;var h=i.memoizedProps;switch(u[wi]=i,u[Lo]=h,n=(i.mode&1)!==0,o){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(f=0;f<Ro.length;f++)Vt(Ro[f],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":Xe(u,h),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Vt("invalid",u);break;case"textarea":It(u,h),Vt("invalid",u)}Ge(o,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var I=h[E];E==="children"?typeof I=="string"?u.textContent!==I&&(h.suppressHydrationWarning!==!0&&Pa(u.textContent,I,n),f=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&Pa(u.textContent,I,n),f=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Vt("scroll",u)}switch(o){case"input":tt(u),Mt(u,h,!0);break;case"textarea":tt(u),Gt(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=Da)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=R(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[wi]=i,n[Lo]=u,Gp(n,i,!1,!1),i.stateNode=n;e:{switch(E=be(o,u),o){case"dialog":Vt("cancel",n),Vt("close",n),f=u;break;case"iframe":case"object":case"embed":Vt("load",n),f=u;break;case"video":case"audio":for(f=0;f<Ro.length;f++)Vt(Ro[f],n);f=u;break;case"source":Vt("error",n),f=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),f=u;break;case"details":Vt("toggle",n),f=u;break;case"input":Xe(n,u),f=ke(n,u),Vt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=se({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":It(n,u),f=pt(n,u),Vt("invalid",n);break;default:f=u}Ge(o,f),I=f;for(h in I)if(I.hasOwnProperty(h)){var k=I[h];h==="style"?pe(n,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&he(n,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ge(n,k):typeof k=="number"&&ge(n,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Vt("scroll",n):k!=null&&L(n,h,k,E))}switch(o){case"input":tt(n),Mt(n,u,!1);break;case"textarea":tt(n),Gt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+me(u.value));break;case"select":n.multiple=!!u.multiple,h=u.value,h!=null?Pt(n,!!u.multiple,h,!1):u.defaultValue!=null&&Pt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Da)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=jr(Oo.current),jr(Ti.current),ka(i)){if(u=i.stateNode,o=i.memoizedProps,u[wi]=i,(h=u.nodeValue!==o)&&(n=Xn,n!==null))switch(n.tag){case 3:Pa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pa(u.nodeValue,o,(n.mode&1)!==0)}h&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[wi]=i,i.stateNode=u}return Mn(i),null;case 13:if(Wt(Kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jh(),As(),i.flags|=98560,h=!1;else if(h=ka(i),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[wi]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),h=!1}else di!==null&&(Uc(di),di=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Kt.current&1)!==0?an===0&&(an=3):kc())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Ps(),wc(n,i),n===null&&Po(i.stateNode.containerInfo),Mn(i),null;case 10:return Ju(i.type._context),Mn(i),null;case 17:return Bn(i.type)&&Ia(),Mn(i),null;case 19:if(Wt(Kt),h=i.memoizedState,h===null)return Mn(i),null;if(u=(i.flags&128)!==0,E=h.rendering,E===null)if(u)Ho(h,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Wa(n),E!==null){for(i.flags|=128,Ho(h,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)h=o,n=u,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,n=E.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return zt(Kt,Kt.current&1|2),i.child}n=n.sibling}h.tail!==null&&qt()>Ns&&(i.flags|=128,u=!0,Ho(h,!1),i.lanes=4194304)}else{if(!u)if(n=Wa(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ho(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Yt)return Mn(i),null}else 2*qt()-h.renderingStartTime>Ns&&o!==1073741824&&(i.flags|=128,u=!0,Ho(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=qt(),i.sibling=null,o=Kt.current,zt(Kt,u?o&1|2:o&1),i):(Mn(i),null);case 22:case 23:return Oc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Av(n,i){switch(ju(i),i.tag){case 1:return Bn(i.type)&&Ia(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Wt(kn),Wt(yn),sc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ic(i),null;case 13:if(Wt(Kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Wt(Kt),null;case 4:return Ps(),null;case 10:return Ju(i.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var Qa=!1,En=!1,bv=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Ls(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Jt(n,i,u)}else o.current=null}function Tc(n,i,o){try{o()}catch(u){Jt(n,i,u)}}var Wp=!1;function Cv(n,i){if(Ou=xa,n=Mh(),Ru(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,I=-1,k=-1,le=0,ye=0,Se=n,_e=null;t:for(;;){for(var Ve;Se!==o||f!==0&&Se.nodeType!==3||(I=E+f),Se!==h||u!==0&&Se.nodeType!==3||(k=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ve=Se.firstChild)!==null;)_e=Se,Se=Ve;for(;;){if(Se===n)break t;if(_e===o&&++le===f&&(I=E),_e===h&&++ye===u&&(k=E),(Ve=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Ve}o=I===-1||k===-1?null:{start:I,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(ku={focusedElem:n,selectionRange:o},xa=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ze=qe.memoizedProps,en=qe.memoizedState,Z=i.stateNode,V=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:hi(i.type,Ze),en);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Jt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return qe=Wp,Wp=!1,qe}function Vo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var h=f.destroy;f.destroy=void 0,h!==void 0&&Tc(i,o,h)}f=f.next}while(f!==u)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ac(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Xp(n){var i=n.alternate;i!==null&&(n.alternate=null,Xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[wi],delete i[Lo],delete i[Hu],delete i[cv],delete i[fv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Da));else if(u!==4&&(n=n.child,n!==null))for(bc(n,i,o),n=n.sibling;n!==null;)bc(n,i,o),n=n.sibling}function Cc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Cc(n,i,o),n=n.sibling;n!==null;)Cc(n,i,o),n=n.sibling}var vn=null,pi=!1;function xr(n,i,o){for(o=o.child;o!==null;)qp(n,i,o),o=o.sibling}function qp(n,i,o){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Q,o)}catch{}switch(o.tag){case 5:En||Ls(o,i);case 6:var u=vn,f=pi;vn=null,xr(n,i,o),vn=u,pi=f,vn!==null&&(pi?(n=vn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):vn.removeChild(o.stateNode));break;case 18:vn!==null&&(pi?(n=vn,o=o.stateNode,n.nodeType===8?Gu(n.parentNode,o):n.nodeType===1&&Gu(n,o),So(n)):Gu(vn,o.stateNode));break;case 4:u=vn,f=pi,vn=o.stateNode.containerInfo,pi=!0,xr(n,i,o),vn=u,pi=f;break;case 0:case 11:case 14:case 15:if(!En&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Tc(o,i,E),f=f.next}while(f!==u)}xr(n,i,o);break;case 1:if(!En&&(Ls(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Jt(o,i,I)}xr(n,i,o);break;case 21:xr(n,i,o);break;case 22:o.mode&1?(En=(u=En)||o.memoizedState!==null,xr(n,i,o),En=u):xr(n,i,o);break;default:xr(n,i,o)}}function Kp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new bv),i.forEach(function(u){var f=Ov.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function mi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var h=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:vn=I.stateNode,pi=!1;break e;case 3:vn=I.stateNode.containerInfo,pi=!0;break e;case 4:vn=I.stateNode.containerInfo,pi=!0;break e}I=I.return}if(vn===null)throw Error(t(160));qp(h,E,f),vn=null,pi=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(le){Jt(f,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$p(i,n),i=i.sibling}function $p(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(i,n),bi(n),u&4){try{Vo(3,n,n.return),el(3,n)}catch(Ze){Jt(n,n.return,Ze)}try{Vo(5,n,n.return)}catch(Ze){Jt(n,n.return,Ze)}}break;case 1:mi(i,n),bi(n),u&512&&o!==null&&Ls(o,o.return);break;case 5:if(mi(i,n),bi(n),u&512&&o!==null&&Ls(o,o.return),n.flags&32){var f=n.stateNode;try{ge(f,"")}catch(Ze){Jt(n,n.return,Ze)}}if(u&4&&(f=n.stateNode,f!=null)){var h=n.memoizedProps,E=o!==null?o.memoizedProps:h,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&Pe(f,h),be(I,E);var le=be(I,h);for(E=0;E<k.length;E+=2){var ye=k[E],Se=k[E+1];ye==="style"?pe(f,Se):ye==="dangerouslySetInnerHTML"?he(f,Se):ye==="children"?ge(f,Se):L(f,ye,Se,le)}switch(I){case"input":ht(f,h);break;case"textarea":Ie(f,h);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ve=h.value;Ve!=null?Pt(f,!!h.multiple,Ve,!1):_e!==!!h.multiple&&(h.defaultValue!=null?Pt(f,!!h.multiple,h.defaultValue,!0):Pt(f,!!h.multiple,h.multiple?[]:"",!1))}f[Lo]=h}catch(Ze){Jt(n,n.return,Ze)}}break;case 6:if(mi(i,n),bi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,h=n.memoizedProps;try{f.nodeValue=h}catch(Ze){Jt(n,n.return,Ze)}}break;case 3:if(mi(i,n),bi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(Ze){Jt(n,n.return,Ze)}break;case 4:mi(i,n),bi(n);break;case 13:mi(i,n),bi(n),f=n.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(Dc=qt())),u&4&&Kp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(En=(le=En)||ye,mi(i,n),En=le):mi(i,n),bi(n),u&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ye&&(n.mode&1)!==0)for(Ye=n,ye=n.child;ye!==null;){for(Se=Ye=ye;Ye!==null;){switch(_e=Ye,Ve=_e.child,_e.tag){case 0:case 11:case 14:case 15:Vo(4,_e,_e.return);break;case 1:Ls(_e,_e.return);var qe=_e.stateNode;if(typeof qe.componentWillUnmount=="function"){u=_e,o=_e.return;try{i=u,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Ze){Jt(u,o,Ze)}}break;case 5:Ls(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Qp(Se);continue}}Ve!==null?(Ve.return=_e,Ye=Ve):Qp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{f=Se.stateNode,le?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=Se.stateNode,k=Se.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=fe("display",E))}catch(Ze){Jt(n,n.return,Ze)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch(Ze){Jt(n,n.return,Ze)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:mi(i,n),bi(n),u&4&&Kp(n);break;case 21:break;default:mi(i,n),bi(n)}}function bi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(jp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ge(f,""),u.flags&=-33);var h=Yp(n);Cc(n,h,f);break;case 3:case 4:var E=u.stateNode.containerInfo,I=Yp(n);bc(n,I,E);break;default:throw Error(t(161))}}catch(k){Jt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Rv(n,i,o){Ye=n,Zp(n)}function Zp(n,i,o){for(var u=(n.mode&1)!==0;Ye!==null;){var f=Ye,h=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||Qa;if(!E){var I=f.alternate,k=I!==null&&I.memoizedState!==null||En;I=Qa;var le=En;if(Qa=E,(En=k)&&!le)for(Ye=f;Ye!==null;)E=Ye,k=E.child,E.tag===22&&E.memoizedState!==null?em(f):k!==null?(k.return=E,Ye=k):em(f);for(;h!==null;)Ye=h,Zp(h),h=h.sibling;Ye=f,Qa=I,En=le}Jp(n)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ye=h):Jp(n)}}function Jp(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||el(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!En)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qh(i,h,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qh(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&So(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||i.flags&512&&Ac(i)}catch(_e){Jt(i,i.return,_e)}}if(i===n){Ye=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function Qp(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function em(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{el(4,i)}catch(k){Jt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(k){Jt(i,f,k)}}var h=i.return;try{Ac(i)}catch(k){Jt(i,h,k)}break;case 5:var E=i.return;try{Ac(i)}catch(k){Jt(i,E,k)}}}catch(k){Jt(i,i.return,k)}if(i===n){Ye=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ye=I;break}Ye=i.return}}var Pv=Math.ceil,tl=P.ReactCurrentDispatcher,Rc=P.ReactCurrentOwner,ri=P.ReactCurrentBatchConfig,bt=0,dn=null,nn=null,_n=0,Yn=0,Is=pr(0),an=0,Wo=null,qr=0,nl=0,Pc=0,Xo=null,Gn=null,Dc=0,Ns=1/0,Ki=null,il=!1,Lc=null,yr=null,rl=!1,Sr=null,sl=0,jo=0,Ic=null,ol=-1,al=0;function Ln(){return(bt&6)!==0?qt():ol!==-1?ol:ol=qt()}function Mr(n){return(n.mode&1)===0?1:(bt&2)!==0&&_n!==0?_n&-_n:hv.transition!==null?(al===0&&(al=He()),al):(n=yt,n!==0||(n=window.event,n=n===void 0?16:nh(n.type)),n)}function gi(n,i,o,u){if(50<jo)throw jo=0,Ic=null,Error(t(185));_t(n,o,u),((bt&2)===0||n!==dn)&&(n===dn&&((bt&2)===0&&(nl|=o),an===4&&Er(n,_n)),Hn(n,u),o===1&&bt===0&&(i.mode&1)===0&&(Ns=qt()+500,Ua&&gr()))}function Hn(n,i){var o=n.callbackNode;Nt(n,i);var u=Bt(n,n===dn?_n:0);if(u===0)o!==null&&va(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&va(o),i===1)n.tag===0?dv(nm.bind(null,n)):Gh(nm.bind(null,n)),lv(function(){(bt&6)===0&&gr()}),o=null;else{switch(Gi(u)){case 1:o=go;break;case 4:o=A;break;case 16:o=W;break;case 536870912:o=ee;break;default:o=W}o=cm(o,tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function tm(n,i){if(ol=-1,al=0,(bt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Us()&&n.callbackNode!==o)return null;var u=Bt(n,n===dn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ll(n,u);else{i=u;var f=bt;bt|=2;var h=rm();(dn!==n||_n!==i)&&(Ki=null,Ns=qt()+500,$r(n,i));do try{Iv();break}catch(I){im(n,I)}while(!0);Zu(),tl.current=h,bt=f,nn!==null?i=0:(dn=null,_n=0,i=an)}if(i!==0){if(i===2&&(f=tn(n),f!==0&&(u=f,i=Nc(n,f))),i===1)throw o=Wo,$r(n,0),Er(n,u),Hn(n,qt()),o;if(i===6)Er(n,u);else{if(f=n.current.alternate,(u&30)===0&&!Dv(f)&&(i=ll(n,u),i===2&&(h=tn(n),h!==0&&(u=h,i=Nc(n,h))),i===1))throw o=Wo,$r(n,0),Er(n,u),Hn(n,qt()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,Gn,Ki);break;case 3:if(Er(n,u),(u&130023424)===u&&(i=Dc+500-qt(),10<i)){if(Bt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Ln(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=zu(Zr.bind(null,n,Gn,Ki),i);break}Zr(n,Gn,Ki);break;case 4:if(Er(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var E=31-Ce(u);h=1<<E,E=i[E],E>f&&(f=E),u&=~h}if(u=f,u=qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Pv(u/1960))-u,10<u){n.timeoutHandle=zu(Zr.bind(null,n,Gn,Ki),u);break}Zr(n,Gn,Ki);break;case 5:Zr(n,Gn,Ki);break;default:throw Error(t(329))}}}return Hn(n,qt()),n.callbackNode===o?tm.bind(null,n):null}function Nc(n,i){var o=Xo;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=ll(n,i),n!==2&&(i=Gn,Gn=o,i!==null&&Uc(i)),n}function Uc(n){Gn===null?Gn=n:Gn.push.apply(Gn,n)}function Dv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],h=f.getSnapshot;f=f.value;try{if(!fi(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~Pc,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ce(i),u=1<<o;n[o]=-1,i&=~u}}function nm(n){if((bt&6)!==0)throw Error(t(327));Us();var i=Bt(n,0);if((i&1)===0)return Hn(n,qt()),null;var o=ll(n,i);if(n.tag!==0&&o===2){var u=tn(n);u!==0&&(i=u,o=Nc(n,u))}if(o===1)throw o=Wo,$r(n,0),Er(n,i),Hn(n,qt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,Gn,Ki),Hn(n,qt()),null}function Fc(n,i){var o=bt;bt|=1;try{return n(i)}finally{bt=o,bt===0&&(Ns=qt()+500,Ua&&gr())}}function Kr(n){Sr!==null&&Sr.tag===0&&(bt&6)===0&&Us();var i=bt;bt|=1;var o=ri.transition,u=yt;try{if(ri.transition=null,yt=1,n)return n()}finally{yt=u,ri.transition=o,bt=i,(bt&6)===0&&gr()}}function Oc(){Yn=Is.current,Wt(Is)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,av(o)),nn!==null)for(o=nn.return;o!==null;){var u=o;switch(ju(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ia();break;case 3:Ps(),Wt(kn),Wt(yn),sc();break;case 5:ic(u);break;case 4:Ps();break;case 13:Wt(Kt);break;case 19:Wt(Kt);break;case 10:Ju(u.type._context);break;case 22:case 23:Oc()}o=o.return}if(dn=n,nn=n=wr(n.current,null),_n=Yn=i,an=0,Wo=null,Pc=nl=qr=0,Gn=Xo=null,Xr!==null){for(i=0;i<Xr.length;i++)if(o=Xr[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,h=o.pending;if(h!==null){var E=h.next;h.next=f,u.next=E}o.pending=u}Xr=null}return n}function im(n,i){do{var o=nn;try{if(Zu(),Xa.current=Ka,ja){for(var u=$t.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}ja=!1}if(Yr=0,fn=on=$t=null,ko=!1,Bo=0,Rc.current=null,o===null||o.return===null){an=1,Wo=i,nn=null;break}e:{var h=n,E=o.return,I=o,k=i;if(i=_n,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var le=k,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=Cp(E);if(Ve!==null){Ve.flags&=-257,Rp(Ve,E,I,h,i),Ve.mode&1&&bp(h,le,i),i=Ve,k=le;var qe=i.updateQueue;if(qe===null){var Ze=new Set;Ze.add(k),i.updateQueue=Ze}else qe.add(k);break e}else{if((i&1)===0){bp(h,le,i),kc();break e}k=Error(t(426))}}else if(Yt&&I.mode&1){var en=Cp(E);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),Rp(en,E,I,h,i),Ku(Ds(k,I));break e}}h=k=Ds(k,I),an!==4&&(an=2),Xo===null?Xo=[h]:Xo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Tp(h,k,i);Jh(h,Z);break e;case 1:I=k;var V=h.type,te=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(yr===null||!yr.has(te)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Ap(h,I,i);Jh(h,Te);break e}}h=h.return}while(h!==null)}om(o)}catch(et){i=et,nn===o&&o!==null&&(nn=o=o.return);continue}break}while(!0)}function rm(){var n=tl.current;return tl.current=Ka,n===null?Ka:n}function kc(){(an===0||an===3||an===2)&&(an=4),dn===null||(qr&268435455)===0&&(nl&268435455)===0||Er(dn,_n)}function ll(n,i){var o=bt;bt|=2;var u=rm();(dn!==n||_n!==i)&&(Ki=null,$r(n,i));do try{Lv();break}catch(f){im(n,f)}while(!0);if(Zu(),bt=o,tl.current=u,nn!==null)throw Error(t(261));return dn=null,_n=0,an}function Lv(){for(;nn!==null;)sm(nn)}function Iv(){for(;nn!==null&&!mu();)sm(nn)}function sm(n){var i=um(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?om(n):nn=i,Rc.current=null}function om(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Tv(o,i,Yn),o!==null){nn=o;return}}else{if(o=Av(o,i),o!==null){o.flags&=32767,nn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=n}while(i!==null);an===0&&(an=5)}function Zr(n,i,o){var u=yt,f=ri.transition;try{ri.transition=null,yt=1,Nv(n,i,o,u)}finally{ri.transition=f,yt=u}return null}function Nv(n,i,o,u){do Us();while(Sr!==null);if((bt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=o.lanes|o.childLanes;if(Fn(n,h),n===dn&&(nn=dn=null,_n=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||rl||(rl=!0,cm(W,function(){return Us(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=ri.transition,ri.transition=null;var E=yt;yt=1;var I=bt;bt|=4,Rc.current=null,Cv(n,o),$p(o,n),ev(ku),xa=!!Ou,ku=Ou=null,n.current=o,Rv(o),gu(),bt=I,yt=E,ri.transition=h}else n.current=o;if(rl&&(rl=!1,Sr=n,sl=f),h=n.pendingLanes,h===0&&(yr=null),je(o.stateNode),Hn(n,qt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(il)throw il=!1,n=Lc,Lc=null,n;return(sl&1)!==0&&n.tag!==0&&Us(),h=n.pendingLanes,(h&1)!==0?n===Ic?jo++:(jo=0,Ic=n):jo=0,gr(),null}function Us(){if(Sr!==null){var n=Gi(sl),i=ri.transition,o=yt;try{if(ri.transition=null,yt=16>n?16:n,Sr===null)var u=!1;else{if(n=Sr,Sr=null,sl=0,(bt&6)!==0)throw Error(t(331));var f=bt;for(bt|=4,Ye=n.current;Ye!==null;){var h=Ye,E=h.child;if((Ye.flags&16)!==0){var I=h.deletions;if(I!==null){for(var k=0;k<I.length;k++){var le=I[k];for(Ye=le;Ye!==null;){var ye=Ye;switch(ye.tag){case 0:case 11:case 15:Vo(8,ye,h)}var Se=ye.child;if(Se!==null)Se.return=ye,Ye=Se;else for(;Ye!==null;){ye=Ye;var _e=ye.sibling,Ve=ye.return;if(Xp(ye),ye===le){Ye=null;break}if(_e!==null){_e.return=Ve,Ye=_e;break}Ye=Ve}}}var qe=h.alternate;if(qe!==null){var Ze=qe.child;if(Ze!==null){qe.child=null;do{var en=Ze.sibling;Ze.sibling=null,Ze=en}while(Ze!==null)}}Ye=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Ye=E;else e:for(;Ye!==null;){if(h=Ye,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Vo(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,Ye=Z;break e}Ye=h.return}}var V=n.current;for(Ye=V;Ye!==null;){E=Ye;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,Ye=te;else e:for(E=V;Ye!==null;){if(I=Ye,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:el(9,I)}}catch(et){Jt(I,I.return,et)}if(I===E){Ye=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Ye=Te;break e}Ye=I.return}}if(bt=f,gr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Q,n)}catch{}u=!0}return u}finally{yt=o,ri.transition=i}}return!1}function am(n,i,o){i=Ds(o,i),i=Tp(n,i,1),n=_r(n,i,1),i=Ln(),n!==null&&(_t(n,1,i),Hn(n,i))}function Jt(n,i,o){if(n.tag===3)am(n,n,o);else for(;i!==null;){if(i.tag===3){am(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(yr===null||!yr.has(u))){n=Ds(o,n),n=Ap(i,n,1),i=_r(i,n,1),n=Ln(),i!==null&&(_t(i,1,n),Hn(i,n));break}}i=i.return}}function Uv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&o,dn===n&&(_n&o)===o&&(an===4||an===3&&(_n&130023424)===_n&&500>qt()-Dc?$r(n,0):Pc|=o),Hn(n,i)}function lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var o=Ln();n=ji(n,i),n!==null&&(_t(n,i,o),Hn(n,o))}function Fv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),lm(n,o)}function Ov(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),lm(n,o)}var um;um=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||kn.current)zn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return zn=!1,wv(n,i,o);zn=(n.flags&131072)!==0}else zn=!1,Yt&&(i.flags&1048576)!==0&&Hh(i,Oa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ja(n,i),n=i.pendingProps;var f=Es(i,yn.current);Rs(i,o),f=lc(null,i,u,n,f,o);var h=uc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Bn(u)?(h=!0,Na(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,tc(i),f.updater=$a,i.stateNode=f,f._reactInternals=i,mc(i,u,n,o),i=xc(null,i,u,!0,h,o)):(i.tag=0,Yt&&h&&Xu(i),Dn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ja(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=Bv(u),n=hi(u,n),f){case 0:i=_c(null,i,u,n,o);break e;case 1:i=Up(null,i,u,n,o);break e;case 11:i=Pp(null,i,u,n,o);break e;case 14:i=Dp(null,i,u,hi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),_c(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),Up(n,i,u,f,o);case 3:e:{if(Fp(i),n===null)throw Error(t(387));u=i.pendingProps,h=i.memoizedState,f=h.element,Zh(n,i),Va(i,u,null,o);var E=i.memoizedState;if(u=E.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ds(Error(t(423)),i),i=Op(n,i,u,o,f);break e}else if(u!==f){f=Ds(Error(t(424)),i),i=Op(n,i,u,o,f);break e}else for(jn=hr(i.stateNode.containerInfo.firstChild),Xn=i,Yt=!0,di=null,o=Kh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(As(),u===f){i=qi(n,i,o);break e}Dn(n,i,u,o)}i=i.child}return i;case 5:return ep(i),n===null&&qu(i),u=i.type,f=i.pendingProps,h=n!==null?n.memoizedProps:null,E=f.children,Bu(u,f)?E=null:h!==null&&Bu(u,h)&&(i.flags|=32),Np(n,i),Dn(n,i,E,o),i.child;case 6:return n===null&&qu(i),null;case 13:return kp(n,i,o);case 4:return nc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=bs(i,null,u,o):Dn(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),Pp(n,i,u,f,o);case 7:return Dn(n,i,i.pendingProps,o),i.child;case 8:return Dn(n,i,i.pendingProps.children,o),i.child;case 12:return Dn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,zt(za,u._currentValue),u._currentValue=E,h!==null)if(fi(h.value,E)){if(h.children===f.children&&!kn.current){i=qi(n,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){E=h.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(h.tag===1){k=Yi(-1,o&-o),k.tag=2;var le=h.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),le.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),Qu(h.return,o,i),I.lanes|=o;break}k=k.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(t(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Qu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Dn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Rs(i,o),f=ni(f),u=u(f),i.flags|=1,Dn(n,i,u,o),i.child;case 14:return u=i.type,f=hi(u,i.pendingProps),f=hi(u.type,f),Dp(n,i,u,f,o);case 15:return Lp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),Ja(n,i),i.tag=1,Bn(u)?(n=!0,Na(i)):n=!1,Rs(i,o),Ep(i,u,f),mc(i,u,f,o),xc(null,i,u,!0,n,o);case 19:return zp(n,i,o);case 22:return Ip(n,i,o)}throw Error(t(156,i.tag))};function cm(n,i){return ga(n,i)}function kv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,i,o,u){return new kv(n,i,o,u)}function Bc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Bv(n){if(typeof n=="function")return Bc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===H)return 14}return 2}function wr(n,i){var o=n.alternate;return o===null?(o=si(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ul(n,i,o,u,f,h){var E=2;if(u=n,typeof n=="function")Bc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case F:return Jr(o.children,f,h,i);case T:E=8,f|=8;break;case U:return n=si(12,o,i,f|2),n.elementType=U,n.lanes=h,n;case ue:return n=si(13,o,i,f),n.elementType=ue,n.lanes=h,n;case ce:return n=si(19,o,i,f),n.elementType=ce,n.lanes=h,n;case X:return cl(o,f,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:E=10;break e;case O:E=9;break e;case $:E=11;break e;case H:E=14;break e;case ne:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=si(E,o,i,f),i.elementType=n,i.type=u,i.lanes=h,i}function Jr(n,i,o,u){return n=si(7,n,u,i),n.lanes=o,n}function cl(n,i,o,u){return n=si(22,n,u,i),n.elementType=X,n.lanes=o,n.stateNode={isHidden:!1},n}function zc(n,i,o){return n=si(6,n,null,i),n.lanes=o,n}function Gc(n,i,o){return i=si(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function zv(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hc(n,i,o,u,f,h,E,I,k){return n=new zv(n,i,o,I,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=si(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(h),n}function Gv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function fm(n){if(!n)return mr;n=n._reactInternals;e:{if(Mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Bn(o))return Bh(n,o,i)}return i}function dm(n,i,o,u,f,h,E,I,k){return n=Hc(o,u,!0,n,f,h,E,I,k),n.context=fm(null),o=n.current,u=Ln(),f=Mr(o),h=Yi(u,f),h.callback=i??null,_r(o,h,f),n.current.lanes=f,_t(n,f,u),Hn(n,u),n}function fl(n,i,o,u){var f=i.current,h=Ln(),E=Mr(f);return o=fm(o),i.context===null?i.context=o:i.pendingContext=o,i=Yi(h,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=_r(f,i,E),n!==null&&(gi(n,f,E,h),Ha(n,f,E)),E}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Vc(n,i){hm(n,i),(n=n.alternate)&&hm(n,i)}function Hv(){return null}var pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wc(n){this._internalRoot=n}hl.prototype.render=Wc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},hl.prototype.unmount=Wc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){fl(null,n,null,null)}),i[Hi]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ut();n={blockedOn:null,target:n,priority:i};for(var o=0;o<cr.length&&i!==0&&i<cr[o].priority;o++);cr.splice(o,0,n),o===0&&eh(n)}};function Xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mm(){}function Vv(n,i,o,u,f){if(f){if(typeof u=="function"){var h=u;u=function(){var le=dl(E);h.call(le)}}var E=dm(i,u,n,0,null,!1,!1,"",mm);return n._reactRootContainer=E,n[Hi]=E.current,Po(n.nodeType===8?n.parentNode:n),Kr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var I=u;u=function(){var le=dl(k);I.call(le)}}var k=Hc(n,0,!1,null,null,!1,!1,"",mm);return n._reactRootContainer=k,n[Hi]=k.current,Po(n.nodeType===8?n.parentNode:n),Kr(function(){fl(i,k,o,u)}),k}function ml(n,i,o,u,f){var h=o._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var I=f;f=function(){var k=dl(E);I.call(k)}}fl(i,E,n,f)}else E=Vv(o,i,n,f,u);return dl(E)}Dt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=At(i.pendingLanes);o!==0&&(On(i,o|1),Hn(i,qt()),(bt&6)===0&&(Ns=qt()+500,gr()))}break;case 13:Kr(function(){var u=ji(n,1);if(u!==null){var f=Ln();gi(u,n,1,f)}}),Vc(n,1)}},Ht=function(n){if(n.tag===13){var i=ji(n,134217728);if(i!==null){var o=Ln();gi(i,n,134217728,o)}Vc(n,134217728)}},ui=function(n){if(n.tag===13){var i=Mr(n),o=ji(n,i);if(o!==null){var u=Ln();gi(o,n,i,u)}Vc(n,i)}},Ut=function(){return yt},ci=function(n,i){var o=yt;try{return yt=n,i()}finally{yt=o}},lt=function(n,i,o){switch(i){case"input":if(ht(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=La(u);if(!f)throw Error(t(90));Lt(u),ht(u,f)}}}break;case"textarea":Ie(n,o);break;case"select":i=o.value,i!=null&&Pt(n,!!o.multiple,i,!1)}},Re=Fc,ve=Kr;var Wv={usingClientEntryPoint:!1,Events:[Io,Ss,La,de,ze,Fc]},Yo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xv={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=po(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||Hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Q=gl.inject(Xv),De=gl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv,Vn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(i))throw Error(t(200));return Gv(n,i,null,o)},Vn.createRoot=function(n,i){if(!Xc(n))throw Error(t(299));var o=!1,u="",f=pm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hc(n,1,!1,null,null,o,!1,u,f),n[Hi]=i.current,Po(n.nodeType===8?n.parentNode:n),new Wc(i)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=po(i),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return Kr(n)},Vn.hydrate=function(n,i,o){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,o)},Vn.hydrateRoot=function(n,i,o){if(!Xc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,h="",E=pm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=dm(i,null,n,1,o??null,f,!1,h,E),n[Hi]=i.current,Po(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new hl(i)},Vn.render=function(n,i,o){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,o)},Vn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Fc,Vn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!pl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,o,!1,u)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Em;function Qv(){if(Em)return qc.exports;Em=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),qc.exports=Jv(),qc.exports}var wm;function e_(){if(wm)return vl;wm=1;var s=Qv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var t_=e_();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="184",n_=0,Tm=1,i_=2,ql=1,r_=2,sa=3,rr=0,Un=1,Di=2,nr=0,io=1,eo=2,Am=3,bm=4,s_=5,rs=100,o_=101,a_=102,l_=103,u_=104,c_=200,f_=201,d_=202,h_=203,Nf=204,Uf=205,p_=206,m_=207,g_=208,v_=209,__=210,x_=211,y_=212,S_=213,M_=214,Ff=0,Of=1,kf=2,so=3,Bf=4,zf=5,Gf=6,Hf=7,Ld=0,E_=1,w_=2,Ui=0,Dg=1,Lg=2,Ig=3,Id=4,Ng=5,Ug=6,Fg=7,Og=300,ls=301,oo=302,Zc=303,Jc=304,cu=306,Vf=1e3,tr=1001,Wf=1002,xn=1003,T_=1004,_l=1005,bn=1006,Qc=1007,os=1008,Zn=1009,kg=1010,Bg=1011,ua=1012,Nd=1013,Oi=1014,Ii=1015,sr=1016,Ud=1017,Fd=1018,ca=1020,zg=35902,Gg=35899,Hg=1021,Vg=1022,yi=1023,or=1026,as=1027,Wg=1028,Od=1029,us=1030,kd=1031,Bd=1033,Kl=33776,$l=33777,Zl=33778,Jl=33779,Xf=35840,jf=35841,Yf=35842,qf=35843,Kf=36196,$f=37492,Zf=37496,Jf=37488,Qf=37489,eu=37490,ed=37491,td=37808,nd=37809,id=37810,rd=37811,sd=37812,od=37813,ad=37814,ld=37815,ud=37816,cd=37817,fd=37818,dd=37819,hd=37820,pd=37821,md=36492,gd=36494,vd=36495,_d=36283,xd=36284,tu=36285,yd=36286,A_=3200,Sd=0,b_=1,Ir="",ai="srgb",nu="srgb-linear",iu="linear",Ft="srgb",Fs=7680,Cm=519,C_=512,R_=513,P_=514,zd=515,D_=516,L_=517,Gd=518,I_=519,Md=35044,Rm="300 es",Ni=2e3,fa=2001;function N_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function U_(){const s=ru("canvas");return s.style.display="block",s}const Pm={};function su(...s){const e="THREE."+s.shift();console.log(e,...s)}function Xg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=Xg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Et(...s){s=Xg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ed(...s){const e=s.join(" ");e in Pm||(Pm[e]=!0,ot(...s))}function F_(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const O_={[Ff]:Of,[kf]:Gf,[Bf]:Hf,[so]:zf,[Of]:Ff,[Gf]:kf,[Hf]:Bf,[zf]:so};class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=Math.PI/180,wd=180/Math.PI;function Ur(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function k_(s,e){return(s%e+e)%e}function tf(s,e,t){return(1-t)*s+t*e}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qd=class qd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qd.prototype.isVector2=!0;let gt=qd;class uo{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let p=r[a+0],m=r[a+1],y=r[a+2],v=r[a+3],g=l[c+0],S=l[c+1],w=l[c+2],b=l[c+3];if(v!==b||p!==g||m!==S||y!==w){let _=p*g+m*S+y*w+v*b;_<0&&(g=-g,S=-S,w=-w,b=-b,_=-_);let x=1-d;if(_<.9995){const C=Math.acos(_),L=Math.sin(C);x=Math.sin(x*C)/L,d=Math.sin(d*C)/L,p=p*x+g*d,m=m*x+S*d,y=y*x+w*d,v=v*x+b*d}else{p=p*x+g*d,m=m*x+S*d,y=y*x+w*d,v=v*x+b*d;const C=1/Math.sqrt(p*p+m*m+y*y+v*v);p*=C,m*=C,y*=C,v*=C}}e[t]=p,e[t+1]=m,e[t+2]=y,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],p=r[a+1],m=r[a+2],y=r[a+3],v=l[c],g=l[c+1],S=l[c+2],w=l[c+3];return e[t]=d*w+y*v+p*S-m*g,e[t+1]=p*w+y*g+m*v-d*S,e[t+2]=m*w+y*S+d*g-p*v,e[t+3]=y*w-d*v-p*g-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),y=d(a/2),v=d(l/2),g=p(r/2),S=p(a/2),w=p(l/2);switch(c){case"XYZ":this._x=g*y*v+m*S*w,this._y=m*S*v-g*y*w,this._z=m*y*w+g*S*v,this._w=m*y*v-g*S*w;break;case"YXZ":this._x=g*y*v+m*S*w,this._y=m*S*v-g*y*w,this._z=m*y*w-g*S*v,this._w=m*y*v+g*S*w;break;case"ZXY":this._x=g*y*v-m*S*w,this._y=m*S*v+g*y*w,this._z=m*y*w+g*S*v,this._w=m*y*v-g*S*w;break;case"ZYX":this._x=g*y*v-m*S*w,this._y=m*S*v+g*y*w,this._z=m*y*w-g*S*v,this._w=m*y*v+g*S*w;break;case"YZX":this._x=g*y*v+m*S*w,this._y=m*S*v+g*y*w,this._z=m*y*w-g*S*v,this._w=m*y*v-g*S*w;break;case"XZY":this._x=g*y*v-m*S*w,this._y=m*S*v-g*y*w,this._z=m*y*w+g*S*v,this._w=m*y*v+g*S*w;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],p=t[9],m=t[2],y=t[6],v=t[10],g=r+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(y-p)*S,this._y=(l-m)*S,this._z=(c-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(y-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+y)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(c-a)/S,this._x=(l+m)/S,this._y=(p+y)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,p=t._y,m=t._z,y=t._w;return this._x=r*y+c*d+a*m-l*p,this._y=a*y+c*p+l*d-r*m,this._z=l*y+c*m+r*p-a*d,this._w=c*y-r*d-a*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),y=Math.sin(m);p=Math.sin(p*m)/y,t=Math.sin(t*m)/y,this._x=this._x*p+r*t,this._y=this._y*p+a*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+a*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kd=class Kd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*a-d*r),y=2*(d*t-l*a),v=2*(l*r-c*t);return this.x=t+p*m+c*v-d*y,this.y=r+p*y+d*m-l*v,this.z=a+p*v+l*y-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,p=t.z;return this.x=a*p-l*d,this.y=l*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kd.prototype.isVector3=!0;let q=Kd;const nf=new q,Dm=new uo,$d=class $d{constructor(e,t,r,a,l,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,p,m)}set(e,t,r,a,l,c,d,p,m){const y=this.elements;return y[0]=e,y[1]=a,y[2]=d,y[3]=t,y[4]=l,y[5]=p,y[6]=r,y[7]=c,y[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],y=r[4],v=r[7],g=r[2],S=r[5],w=r[8],b=a[0],_=a[3],x=a[6],C=a[1],L=a[4],P=a[7],z=a[2],D=a[5],F=a[8];return l[0]=c*b+d*C+p*z,l[3]=c*_+d*L+p*D,l[6]=c*x+d*P+p*F,l[1]=m*b+y*C+v*z,l[4]=m*_+y*L+v*D,l[7]=m*x+y*P+v*F,l[2]=g*b+S*C+w*z,l[5]=g*_+S*L+w*D,l[8]=g*x+S*P+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],y=e[8];return t*c*y-t*d*m-r*l*y+r*d*p+a*l*m-a*c*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],y=e[8],v=y*c-d*m,g=d*p-y*l,S=m*l-c*p,w=t*v+r*g+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=v*b,e[1]=(a*m-y*r)*b,e[2]=(d*r-a*c)*b,e[3]=g*b,e[4]=(y*t-a*p)*b,e[5]=(a*l-d*t)*b,e[6]=S*b,e[7]=(r*p-m*t)*b,e[8]=(c*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-a*m,a*p,-a*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$d.prototype.isMatrix3=!0;let dt=$d;const rf=new dt,Lm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B_(){const s={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(a.r=ir(a.r),a.g=ir(a.g),a.b=ir(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(a.r=ro(a.r),a.g=ro(a.g),a.b=ro(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ir?iu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ed("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ed("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[nu]:{primaries:e,whitePoint:r,transfer:iu,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const wt=B_();function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class z_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Os===void 0&&(Os=ru("canvas")),Os.width=e.width,Os.height=e.height;const a=Os.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Os}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ir(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ir(t[r]/255)*255):t[r]=ir(t[r]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(sf(a[c].image)):l.push(sf(a[c]))}else l=sf(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function sf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?z_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let H_=0;const of=new q;class Cn extends cs{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,r=tr,a=tr,l=bn,c=os,d=yi,p=Zn,m=Cn.DEFAULT_ANISOTROPY,y=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Ur(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(of).x}get height(){return this.source.getSize(of).y}get depth(){return this.source.getSize(of).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vf:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vf:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Og;Cn.DEFAULT_ANISOTROPY=1;const Zd=class Zd{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const p=e.elements,m=p[0],y=p[4],v=p[8],g=p[1],S=p[5],w=p[9],b=p[2],_=p[6],x=p[10];if(Math.abs(y-g)<.01&&Math.abs(v-b)<.01&&Math.abs(w-_)<.01){if(Math.abs(y+g)<.1&&Math.abs(v+b)<.1&&Math.abs(w+_)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,P=(S+1)/2,z=(x+1)/2,D=(y+g)/4,F=(v+b)/4,T=(w+_)/4;return L>P&&L>z?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=D/r,l=F/r):P>z?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=D/a,l=T/a):z<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),r=F/l,a=T/l),this.set(r,a,l,t),this}let C=Math.sqrt((_-w)*(_-w)+(v-b)*(v-b)+(g-y)*(g-y));return Math.abs(C)<.001&&(C=1),this.x=(_-w)/C,this.y=(v-b)/C,this.z=(g-y)/C,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zd.prototype.isVector4=!0;let Qt=Zd;class V_ extends cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Cn(a),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Hd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends V_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class jg extends Cn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W_ extends Cn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=class uu{constructor(e,t,r,a,l,c,d,p,m,y,v,g,S,w,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,p,m,y,v,g,S,w,b,_)}set(e,t,r,a,l,c,d,p,m,y,v,g,S,w,b,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=c,x[9]=d,x[13]=p,x[2]=m,x[6]=y,x[10]=v,x[14]=g,x[3]=S,x[7]=w,x[11]=b,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),c=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),y=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=c*y,S=c*v,w=d*y,b=d*v;t[0]=p*y,t[4]=-p*v,t[8]=m,t[1]=S+w*m,t[5]=g-b*m,t[9]=-d*p,t[2]=b-g*m,t[6]=w+S*m,t[10]=c*p}else if(e.order==="YXZ"){const g=p*y,S=p*v,w=m*y,b=m*v;t[0]=g+b*d,t[4]=w*d-S,t[8]=c*m,t[1]=c*v,t[5]=c*y,t[9]=-d,t[2]=S*d-w,t[6]=b+g*d,t[10]=c*p}else if(e.order==="ZXY"){const g=p*y,S=p*v,w=m*y,b=m*v;t[0]=g-b*d,t[4]=-c*v,t[8]=w+S*d,t[1]=S+w*d,t[5]=c*y,t[9]=b-g*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const g=c*y,S=c*v,w=d*y,b=d*v;t[0]=p*y,t[4]=w*m-S,t[8]=g*m+b,t[1]=p*v,t[5]=b*m+g,t[9]=S*m-w,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const g=c*p,S=c*m,w=d*p,b=d*m;t[0]=p*y,t[4]=b-g*v,t[8]=w*v+S,t[1]=v,t[5]=c*y,t[9]=-d*y,t[2]=-m*y,t[6]=S*v+w,t[10]=g-b*v}else if(e.order==="XZY"){const g=c*p,S=c*m,w=d*p,b=d*m;t[0]=p*y,t[4]=-v,t[8]=m*y,t[1]=g*v+b,t[5]=c*y,t[9]=S*v-w,t[2]=w*v-S,t[6]=d*y,t[10]=b*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,j_)}lookAt(e,t,r){const a=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ar.crossVectors(r,qn),Ar.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ar.crossVectors(r,qn)),Ar.normalize(),xl.crossVectors(qn,Ar),a[0]=Ar.x,a[4]=xl.x,a[8]=qn.x,a[1]=Ar.y,a[5]=xl.y,a[9]=qn.y,a[2]=Ar.z,a[6]=xl.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],y=r[1],v=r[5],g=r[9],S=r[13],w=r[2],b=r[6],_=r[10],x=r[14],C=r[3],L=r[7],P=r[11],z=r[15],D=a[0],F=a[4],T=a[8],U=a[12],j=a[1],O=a[5],$=a[9],ue=a[13],ce=a[2],H=a[6],ne=a[10],X=a[14],Y=a[3],re=a[7],se=a[11],N=a[15];return l[0]=c*D+d*j+p*ce+m*Y,l[4]=c*F+d*O+p*H+m*re,l[8]=c*T+d*$+p*ne+m*se,l[12]=c*U+d*ue+p*X+m*N,l[1]=y*D+v*j+g*ce+S*Y,l[5]=y*F+v*O+g*H+S*re,l[9]=y*T+v*$+g*ne+S*se,l[13]=y*U+v*ue+g*X+S*N,l[2]=w*D+b*j+_*ce+x*Y,l[6]=w*F+b*O+_*H+x*re,l[10]=w*T+b*$+_*ne+x*se,l[14]=w*U+b*ue+_*X+x*N,l[3]=C*D+L*j+P*ce+z*Y,l[7]=C*F+L*O+P*H+z*re,l[11]=C*T+L*$+P*ne+z*se,l[15]=C*U+L*ue+P*X+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],p=e[9],m=e[13],y=e[2],v=e[6],g=e[10],S=e[14],w=e[3],b=e[7],_=e[11],x=e[15],C=p*S-m*g,L=d*S-m*v,P=d*g-p*v,z=c*S-m*y,D=c*g-p*y,F=c*v-d*y;return t*(b*C-_*L+x*P)-r*(w*C-_*z+x*D)+a*(w*L-b*z+x*F)-l*(w*P-b*D+_*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],y=e[8],v=e[9],g=e[10],S=e[11],w=e[12],b=e[13],_=e[14],x=e[15],C=t*d-r*c,L=t*p-a*c,P=t*m-l*c,z=r*p-a*d,D=r*m-l*d,F=a*m-l*p,T=y*b-v*w,U=y*_-g*w,j=y*x-S*w,O=v*_-g*b,$=v*x-S*b,ue=g*x-S*_,ce=C*ue-L*$+P*O+z*j-D*U+F*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/ce;return e[0]=(d*ue-p*$+m*O)*H,e[1]=(a*$-r*ue-l*O)*H,e[2]=(b*F-_*D+x*z)*H,e[3]=(g*D-v*F-S*z)*H,e[4]=(p*j-c*ue-m*U)*H,e[5]=(t*ue-a*j+l*U)*H,e[6]=(_*P-w*F-x*L)*H,e[7]=(y*F-g*P+S*L)*H,e[8]=(c*$-d*j+m*T)*H,e[9]=(r*j-t*$-l*T)*H,e[10]=(w*D-b*P+x*C)*H,e[11]=(v*P-y*D-S*C)*H,e[12]=(d*U-c*O-p*T)*H,e[13]=(t*O-r*U+a*T)*H,e[14]=(b*L-w*z-_*C)*H,e[15]=(y*z-v*L+g*C)*H,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,p=e.z,m=l*c,y=l*d;return this.set(m*c+r,m*d-a*p,m*p+a*d,0,m*d+a*p,y*d+r,y*p-a*c,0,m*p-a*d,y*p+a*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,p=t._w,m=l+l,y=c+c,v=d+d,g=l*m,S=l*y,w=l*v,b=c*y,_=c*v,x=d*v,C=p*m,L=p*y,P=p*v,z=r.x,D=r.y,F=r.z;return a[0]=(1-(b+x))*z,a[1]=(S+P)*z,a[2]=(w-L)*z,a[3]=0,a[4]=(S-P)*D,a[5]=(1-(g+x))*D,a[6]=(_+C)*D,a[7]=0,a[8]=(w+L)*F,a[9]=(_-C)*F,a[10]=(1-(g+b))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=ks.set(a[0],a[1],a[2]).length();const d=ks.set(a[4],a[5],a[6]).length(),p=ks.set(a[8],a[9],a[10]).length();l<0&&(c=-c),vi.copy(this);const m=1/c,y=1/d,v=1/p;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=y,vi.elements[5]*=y,vi.elements[6]*=y,vi.elements[8]*=v,vi.elements[9]*=v,vi.elements[10]*=v,t.setFromRotationMatrix(vi),r.x=c,r.y=d,r.z=p,this}makePerspective(e,t,r,a,l,c,d=Ni,p=!1){const m=this.elements,y=2*l/(t-e),v=2*l/(r-a),g=(t+e)/(t-e),S=(r+a)/(r-a);let w,b;if(p)w=l/(c-l),b=c*l/(c-l);else if(d===Ni)w=-(c+l)/(c-l),b=-2*c*l/(c-l);else if(d===fa)w=-c/(c-l),b=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=y,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=Ni,p=!1){const m=this.elements,y=2/(t-e),v=2/(r-a),g=-(t+e)/(t-e),S=-(r+a)/(r-a);let w,b;if(p)w=1/(c-l),b=c/(c-l);else if(d===Ni)w=-2/(c-l),b=-(c+l)/(c-l);else if(d===fa)w=-1/(c-l),b=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=y,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=w,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};uu.prototype.isMatrix4=!0;let Xt=uu;const ks=new q,vi=new Xt,X_=new q(0,0,0),j_=new q(1,1,1),Ar=new q,xl=new q,qn=new q,Nm=new Xt,Um=new uo;class Fr{constructor(e=0,t=0,r=0,a=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],p=a[1],m=a[5],y=a[9],v=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-y,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-y,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class Vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y_=0;const Fm=new q,Bs=new uo,$i=new Xt,yl=new q,Ko=new q,q_=new q,K_=new uo,Om=new q(1,0,0),km=new q(0,1,0),Bm=new q(0,0,1),zm={type:"added"},$_={type:"removed"},zs={type:"childadded",child:null},af={type:"childremoved",child:null};class ln extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new q,t=new Fr,r=new uo,a=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new dt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ko,yl,this.up):$i.lookAt(yl,Ko,this.up),this.quaternion.setFromRotationMatrix($i),a&&($i.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix($i),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),zs.child=e,this.dispatchEvent(zs),zs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($_),af.child=e,this.dispatchEvent(af),af.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,y=p.length;m<y;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(l(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),y=c(e.images),v=c(e.shapes),g=c(e.skeletons),S=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),y.length>0&&(r.images=y),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function c(d){const p=[];for(const m in d){const y=d[m];delete y.metadata,p.push(y)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new q(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class to extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,r),x=this._getHandJoint(m,b);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const y=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],g=y.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&g>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new to;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function uf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=wt.workingColorSpace){if(e=k_(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=uf(c,l,e+1/3),this.g=uf(c,l,e),this.b=uf(c,l,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,t=ai){function r(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=Yg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return wt.workingToColorSpace(Tn.copy(this),e),Math.round(Tt(Tn.r*255,0,255))*65536+Math.round(Tt(Tn.g*255,0,255))*256+Math.round(Tt(Tn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Tn.copy(this),t);const r=Tn.r,a=Tn.g,l=Tn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let p,m;const y=(d+c)/2;if(d===c)p=0,m=0;else{const v=c-d;switch(m=y<=.5?v/(c+d):v/(2-c-d),c){case r:p=(a-l)/v+(a<l?6:0);break;case a:p=(l-r)/v+2;break;case l:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=y,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ai){wt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,a=Tn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Sl);const r=tf(br.h,Sl.h,t),a=tf(br.s,Sl.s,t),l=tf(br.l,Sl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new xt;xt.NAMES=Yg;class J_ extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new q,Zi=new q,cf=new q,Ji=new q,Gs=new q,Hs=new q,Gm=new q,ff=new q,df=new q,hf=new q,pf=new Qt,mf=new Qt,gf=new Qt;class li{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),_i.subVectors(e,t),a.cross(_i);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){_i.subVectors(a,t),Zi.subVectors(r,t),cf.subVectors(e,t);const c=_i.dot(_i),d=_i.dot(Zi),p=_i.dot(cf),m=Zi.dot(Zi),y=Zi.dot(cf),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const g=1/v,S=(m*p-d*y)*g,w=(c*y-d*p)*g;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,r,a,l,c,d,p){return this.getBarycoord(e,t,r,a,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ji.x),p.addScaledVector(c,Ji.y),p.addScaledVector(d,Ji.z),p)}static getInterpolatedAttribute(e,t,r,a,l,c){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,t),mf.fromBufferAttribute(e,r),gf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(pf,l.x),c.addScaledVector(mf,l.y),c.addScaledVector(gf,l.z),c}static isFrontFacing(e,t,r,a){return _i.subVectors(r,t),Zi.subVectors(e,t),_i.cross(Zi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),_i.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return li.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;Gs.subVectors(a,r),Hs.subVectors(l,r),ff.subVectors(e,r);const p=Gs.dot(ff),m=Hs.dot(ff);if(p<=0&&m<=0)return t.copy(r);df.subVectors(e,a);const y=Gs.dot(df),v=Hs.dot(df);if(y>=0&&v<=y)return t.copy(a);const g=p*v-y*m;if(g<=0&&p>=0&&y<=0)return c=p/(p-y),t.copy(r).addScaledVector(Gs,c);hf.subVectors(e,l);const S=Gs.dot(hf),w=Hs.dot(hf);if(w>=0&&S<=w)return t.copy(l);const b=S*m-p*w;if(b<=0&&m>=0&&w<=0)return d=m/(m-w),t.copy(r).addScaledVector(Hs,d);const _=y*w-S*v;if(_<=0&&v-y>=0&&S-w>=0)return Gm.subVectors(l,a),d=(v-y)/(v-y+(S-w)),t.copy(a).addScaledVector(Gm,d);const x=1/(_+b+g);return c=b*x,d=g*x,t.copy(r).addScaledVector(Gs,c).addScaledVector(Hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,xi):xi.fromBufferAttribute(l,c),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),El.subVectors(this.max,$o),Vs.subVectors(e.a,$o),Ws.subVectors(e.b,$o),Xs.subVectors(e.c,$o),Cr.subVectors(Ws,Vs),Rr.subVectors(Xs,Ws),Qr.subVectors(Vs,Xs);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-Qr.z,Qr.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,Qr.z,0,-Qr.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-Qr.y,Qr.x,0];return!vf(t,Vs,Ws,Xs,El)||(t=[1,0,0,0,1,0,0,0,1],!vf(t,Vs,Ws,Xs,El))?!1:(wl.crossVectors(Cr,Rr),t=[wl.x,wl.y,wl.z],vf(t,Vs,Ws,Xs,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new q,new q,new q,new q,new q,new q,new q,new q],xi=new q,Ml=new da,Vs=new q,Ws=new q,Xs=new q,Cr=new q,Rr=new q,Qr=new q,$o=new q,El=new q,wl=new q,es=new q;function vf(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){es.fromArray(s,l);const d=a.x*Math.abs(es.x)+a.y*Math.abs(es.y)+a.z*Math.abs(es.z),p=e.dot(es),m=t.dot(es),y=r.dot(es);if(Math.max(-Math.max(p,m,y),Math.min(p,m,y))>d)return!1}return!0}const rn=new q,Tl=new gt;let Q_=0;class Si extends cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Md,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Li(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ot(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),a=Ot(a,this.array),l=Ot(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Md&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class qg extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Kg extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class mn extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ex=new da,Zo=new q,_f=new q;class ha{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ex.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(_f)),this.expandByPoint(Zo.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tx=0;const oi=new Xt,xf=new ln,js=new q,Kn=new da,Jo=new da,pn=new q;class Rn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N_(e)?Kg:qg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new mn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];Jo.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Kn.min,Jo.min),Kn.expandByPoint(pn),pn.addVectors(Kn.max,Jo.max),Kn.expandByPoint(pn)):(Kn.expandByPoint(Jo.min),Kn.expandByPoint(Jo.max))}Kn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)pn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(pn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,y=d.count;m<y;m++)pn.fromBufferAttribute(d,m),p&&(js.fromBufferAttribute(e,m),pn.add(js)),a=Math.max(a,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let T=0;T<r.count;T++)d[T]=new q,p[T]=new q;const m=new q,y=new q,v=new q,g=new gt,S=new gt,w=new gt,b=new q,_=new q;function x(T,U,j){m.fromBufferAttribute(r,T),y.fromBufferAttribute(r,U),v.fromBufferAttribute(r,j),g.fromBufferAttribute(l,T),S.fromBufferAttribute(l,U),w.fromBufferAttribute(l,j),y.sub(m),v.sub(m),S.sub(g),w.sub(g);const O=1/(S.x*w.y-w.x*S.y);isFinite(O)&&(b.copy(y).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(O),_.copy(v).multiplyScalar(S.x).addScaledVector(y,-w.x).multiplyScalar(O),d[T].add(b),d[U].add(b),d[j].add(b),p[T].add(_),p[U].add(_),p[j].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,U=C.length;T<U;++T){const j=C[T],O=j.start,$=j.count;for(let ue=O,ce=O+$;ue<ce;ue+=3)x(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new q,P=new q,z=new q,D=new q;function F(T){z.fromBufferAttribute(a,T),D.copy(z);const U=d[T];L.copy(U),L.sub(z.multiplyScalar(z.dot(U))).normalize(),P.crossVectors(D,U);const O=P.dot(p[T])<0?-1:1;c.setXYZW(T,L.x,L.y,L.z,O)}for(let T=0,U=C.length;T<U;++T){const j=C[T],O=j.start,$=j.count;for(let ue=O,ce=O+$;ue<ce;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const a=new q,l=new q,c=new q,d=new q,p=new q,m=new q,y=new q,v=new q;if(e)for(let g=0,S=e.count;g<S;g+=3){const w=e.getX(g+0),b=e.getX(g+1),_=e.getX(g+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),c.fromBufferAttribute(t,_),y.subVectors(c,l),v.subVectors(a,l),y.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,_),d.add(y),p.add(y),m.add(y),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),y.subVectors(c,l),v.subVectors(a,l),y.cross(v),r.setXYZ(g+0,y.x,y.y,y.z),r.setXYZ(g+1,y.x,y.y,y.z),r.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,p){const m=d.array,y=d.itemSize,v=d.normalized,g=new m.constructor(p.length*y);let S=0,w=0;for(let b=0,_=p.length;b<_;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*y;for(let x=0;x<y;x++)g[w++]=m[S++]}return new Si(g,y,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let y=0,v=m.length;y<v;y++){const g=m[y],S=e(g,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],y=[];for(let v=0,g=m.length;v<g;v++){const S=m[v];y.push(S.toJSON(e.data))}y.length>0&&(a[p]=y,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const y=a[m];this.setAttribute(m,y.clone(t))}const l=e.morphAttributes;for(const m in l){const y=[],v=l[m];for(let g=0,S=v.length;g<S;g++)y.push(v[g].clone(t));this.morphAttributes[m]=y}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,y=c.length;m<y;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Md,this.updateRanges=[],this.version=0,this.uuid=Ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new q;class ou{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Li(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ot(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),a=Ot(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),r=Ot(r,this.array),a=Ot(a,this.array),l=Ot(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){su("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new Si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ou(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){su("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ix=0;class Or extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=io,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Uf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nf&&(r.blendSrc=this.blendSrc),this.blendDst!==Uf&&(r.blendDst=this.blendDst),this.blendEquation!==rs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const p=l[d];delete p.metadata,c.push(p)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $g extends Or{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ys;const Qo=new q,qs=new q,Ks=new q,$s=new gt,ea=new gt,Zg=new Xt,Al=new q,ta=new q,bl=new q,Hm=new gt,yf=new gt,Vm=new gt;class rx extends ln{constructor(e=new $g){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new Rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new nx(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new ou(r,3,0,!1)),Ys.setAttribute("uv",new ou(r,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new gt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Zg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ks.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const c=this.center;Cl(Al.set(-.5,-.5,0),Ks,c,qs,a,l),Cl(ta.set(.5,-.5,0),Ks,c,qs,a,l),Cl(bl.set(.5,.5,0),Ks,c,qs,a,l),Hm.set(0,0),yf.set(1,0),Vm.set(1,1);let d=e.ray.intersectTriangle(Al,ta,bl,!1,Qo);if(d===null&&(Cl(ta.set(-.5,.5,0),Ks,c,qs,a,l),yf.set(0,1),d=e.ray.intersectTriangle(Al,bl,ta,!1,Qo),d===null))return;const p=e.ray.origin.distanceTo(Qo);p<e.near||p>e.far||t.push({distance:p,point:Qo.clone(),uv:li.getInterpolation(Qo,Al,ta,bl,Hm,yf,Vm,new gt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cl(s,e,t,r,a,l){$s.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(ea.x=l*$s.x-a*$s.y,ea.y=a*$s.x+l*$s.y):ea.copy($s),s.copy(e),s.x+=ea.x,s.y+=ea.y,s.applyMatrix4(Zg)}const er=new q,Sf=new q,Rl=new q,Pr=new q,Mf=new q,Pl=new q,Ef=new q;class fu{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Sf.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Sf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Rl),d=Pr.dot(this.direction),p=-Pr.dot(Rl),m=Pr.lengthSq(),y=Math.abs(1-c*c);let v,g,S,w;if(y>0)if(v=c*p-d,g=c*d-p,w=l*y,v>=0)if(g>=-w)if(g<=w){const b=1/y;v*=b,g*=b,S=v*(v+c*g+2*d)+g*(c*v+g+2*p)+m}else g=l,v=Math.max(0,-(c*g+d)),S=-v*v+g*(g+2*p)+m;else g=-l,v=Math.max(0,-(c*g+d)),S=-v*v+g*(g+2*p)+m;else g<=-w?(v=Math.max(0,-(-c*l+d)),g=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+g*(g+2*p)+m):g<=w?(v=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+m):(v=Math.max(0,-(c*l+d)),g=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+g*(g+2*p)+m);else g=c>0?-l:l,v=Math.max(0,-(c*g+d)),S=-v*v+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Sf).addScaledVector(Rl,g),S}intersectSphere(e,t){er.subVectors(e.center,this.origin);const r=er.dot(this.direction),a=er.dot(er)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,p;const m=1/this.direction.x,y=1/this.direction.y,v=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),y>=0?(l=(e.min.y-g.y)*y,c=(e.max.y-g.y)*y):(l=(e.max.y-g.y)*y,c=(e.min.y-g.y)*y),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-g.z)*v,p=(e.max.z-g.z)*v):(d=(e.max.z-g.z)*v,p=(e.min.z-g.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,r,a,l){Mf.subVectors(t,e),Pl.subVectors(r,e),Ef.crossVectors(Mf,Pl);let c=this.direction.dot(Ef),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Pr.subVectors(this.origin,e);const p=d*this.direction.dot(Pl.crossVectors(Pr,Pl));if(p<0)return null;const m=d*this.direction.dot(Mf.cross(Pr));if(m<0||p+m>c)return null;const y=-d*Pr.dot(Ef);return y<0?null:this.at(y/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class aa extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wm=new Xt,ts=new fu,Dl=new ha,Xm=new q,Ll=new q,Il=new q,Nl=new q,wf=new q,Ul=new q,jm=new q,Fl=new q;class An extends ln{constructor(e=new Rn,t=new aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Ul.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const y=d[p],v=l[p];y!==0&&(wf.fromBufferAttribute(v,e),c?Ul.addScaledVector(wf,y):Ul.addScaledVector(wf.sub(t),y))}t.add(Ul)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Dl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Dl,Xm)===null||ts.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(l).invert(),ts.copy(e.ray).applyMatrix4(Wm),!(r.boundingBox!==null&&ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,y=l.attributes.uv1,v=l.attributes.normal,g=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,b=g.length;w<b;w++){const _=g[w],x=c[_.materialIndex],C=Math.max(_.start,S.start),L=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let P=C,z=L;P<z;P+=3){const D=d.getX(P),F=d.getX(P+1),T=d.getX(P+2);a=Ol(this,x,e,r,m,y,v,D,F,T),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let _=w,x=b;_<x;_+=3){const C=d.getX(_),L=d.getX(_+1),P=d.getX(_+2);a=Ol(this,c,e,r,m,y,v,C,L,P),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let w=0,b=g.length;w<b;w++){const _=g[w],x=c[_.materialIndex],C=Math.max(_.start,S.start),L=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let P=C,z=L;P<z;P+=3){const D=P,F=P+1,T=P+2;a=Ol(this,x,e,r,m,y,v,D,F,T),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let _=w,x=b;_<x;_+=3){const C=_,L=_+1,P=_+2;a=Ol(this,c,e,r,m,y,v,C,L,P),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function sx(s,e,t,r,a,l,c,d){let p;if(e.side===Un?p=r.intersectTriangle(c,l,a,!0,d):p=r.intersectTriangle(a,l,c,e.side===rr,d),p===null)return null;Fl.copy(d),Fl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Fl);return m<t.near||m>t.far?null:{distance:m,point:Fl.clone(),object:s}}function Ol(s,e,t,r,a,l,c,d,p,m){s.getVertexPosition(d,Ll),s.getVertexPosition(p,Il),s.getVertexPosition(m,Nl);const y=sx(s,e,t,r,Ll,Il,Nl,jm);if(y){const v=new q;li.getBarycoord(jm,Ll,Il,Nl,v),a&&(y.uv=li.getInterpolatedAttribute(a,d,p,m,v,new gt)),l&&(y.uv1=li.getInterpolatedAttribute(l,d,p,m,v,new gt)),c&&(y.normal=li.getInterpolatedAttribute(c,d,p,m,v,new q),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new q,materialIndex:0};li.getNormal(Ll,Il,Nl,g.normal),y.face=g,y.barycoord=v}return y}class ox extends Cn{constructor(e=null,t=1,r=1,a,l,c,d,p,m=xn,y=xn,v,g){super(null,c,d,p,m,y,a,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new q,ax=new q,lx=new dt;class is{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Tf.subVectors(r,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Tf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||lx.getNormalMatrix(e),a=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new ha,ux=new gt(.5,.5),kl=new q;class Wd{constructor(e=new is,t=new is,r=new is,a=new is,l=new is,c=new is){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ni,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],p=l[2],m=l[3],y=l[4],v=l[5],g=l[6],S=l[7],w=l[8],b=l[9],_=l[10],x=l[11],C=l[12],L=l[13],P=l[14],z=l[15];if(a[0].setComponents(m-c,S-y,x-w,z-C).normalize(),a[1].setComponents(m+c,S+y,x+w,z+C).normalize(),a[2].setComponents(m+d,S+v,x+b,z+L).normalize(),a[3].setComponents(m-d,S-v,x-b,z-L).normalize(),r)a[4].setComponents(p,g,_,P).normalize(),a[5].setComponents(m-p,S-g,x-_,z-P).normalize();else if(a[4].setComponents(m-p,S-g,x-_,z-P).normalize(),t===Ni)a[5].setComponents(m+p,S+g,x+_,z+P).normalize();else if(t===fa)a[5].setComponents(p,g,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=ux.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(kl.x=a.normal.x>0?e.max.x:e.min.x,kl.y=a.normal.y>0?e.max.y:e.min.y,kl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jg extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const au=new q,lu=new q,Ym=new Xt,na=new fu,Bl=new ha,Af=new q,qm=new q;class cx extends ln{constructor(e=new Rn,t=new Jg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)au.fromBufferAttribute(t,a-1),lu.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=au.distanceTo(lu);e.setAttribute("lineDistance",new mn(r,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(a),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;Ym.copy(a).invert(),na.copy(e.ray).applyMatrix4(Ym);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,y=r.index,g=r.attributes.position;if(y!==null){const S=Math.max(0,c.start),w=Math.min(y.count,c.start+c.count);for(let b=S,_=w-1;b<_;b+=m){const x=y.getX(b),C=y.getX(b+1),L=zl(this,e,na,p,x,C,b);L&&t.push(L)}if(this.isLineLoop){const b=y.getX(w-1),_=y.getX(S),x=zl(this,e,na,p,b,_,w-1);x&&t.push(x)}}else{const S=Math.max(0,c.start),w=Math.min(g.count,c.start+c.count);for(let b=S,_=w-1;b<_;b+=m){const x=zl(this,e,na,p,b,b+1,b);x&&t.push(x)}if(this.isLineLoop){const b=zl(this,e,na,p,w-1,S,w-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function zl(s,e,t,r,a,l,c){const d=s.geometry.attributes.position;if(au.fromBufferAttribute(d,a),lu.fromBufferAttribute(d,l),t.distanceSqToSegment(au,lu,Af,qm)>r)return;Af.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Af);if(!(m<e.near||m>e.far))return{distance:m,point:qm.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}class Qg extends Or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new Xt,Td=new fu,Gl=new ha,Hl=new q;class fx extends ln{constructor(e=new Rn,t=new Qg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(a),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;Km.copy(a).invert(),Td.copy(e.ray).applyMatrix4(Km);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,v=r.attributes.position;if(m!==null){const g=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let w=g,b=S;w<b;w++){const _=m.getX(w);Hl.fromBufferAttribute(v,_),$m(Hl,_,p,a,e,t,this)}}else{const g=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let w=g,b=S;w<b;w++)Hl.fromBufferAttribute(v,w),$m(Hl,w,p,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function $m(s,e,t,r,a,l,c){const d=Td.distanceSqToPoint(s);if(d<t){const p=new q;Td.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class e0 extends Cn{constructor(e=[],t=ls,r,a,l,c,d,p,m,y){super(e,t,r,a,l,c,d,p,m,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zm extends Cn{constructor(e,t,r,a,l,c,d,p,m){super(e,t,r,a,l,c,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends Cn{constructor(e,t,r=Oi,a,l,c,d=xn,p=xn,m,y=or,v=1){if(y!==or&&y!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,a,l,c,d,p,y,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dx extends ao{constructor(e,t=Oi,r=ls,a,l,c=xn,d=xn,p,m=or){const y={width:e,height:e,depth:1},v=[y,y,y,y,y,y];super(e,e,t,r,a,l,c,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class t0 extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pa extends Rn{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],m=[],y=[],v=[];let g=0,S=0;w("z","y","x",-1,-1,r,t,e,c,l,0),w("z","y","x",1,-1,r,t,-e,c,l,1),w("x","z","y",1,1,e,r,t,a,c,2),w("x","z","y",1,-1,e,r,-t,a,c,3),w("x","y","z",1,-1,e,t,r,a,l,4),w("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(v,2));function w(b,_,x,C,L,P,z,D,F,T,U){const j=P/F,O=z/T,$=P/2,ue=z/2,ce=D/2,H=F+1,ne=T+1;let X=0,Y=0;const re=new q;for(let se=0;se<ne;se++){const N=se*O-ue;for(let J=0;J<H;J++){const Fe=J*j-$;re[b]=Fe*C,re[_]=N*L,re[x]=ce,m.push(re.x,re.y,re.z),re[b]=0,re[_]=0,re[x]=D>0?1:-1,y.push(re.x,re.y,re.z),v.push(J/F),v.push(1-se/T),X+=1}}for(let se=0;se<T;se++)for(let N=0;N<F;N++){const J=g+N+H*se,Fe=g+N+H*(se+1),We=g+(N+1)+H*(se+1),Ne=g+(N+1)+H*se;p.push(J,Fe,Ne),p.push(Fe,We,Ne),Y+=6}d.addGroup(S,Y,U),S+=Y,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends Rn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),p=Math.floor(a),m=d+1,y=p+1,v=e/d,g=t/p,S=[],w=[],b=[],_=[];for(let x=0;x<y;x++){const C=x*g-c;for(let L=0;L<m;L++){const P=L*v-l;w.push(P,-C,0),b.push(0,0,1),_.push(L/d),_.push(1-x/p)}}for(let x=0;x<p;x++)for(let C=0;C<d;C++){const L=C+m*x,P=C+m*(x+1),z=C+1+m*(x+1),D=C+1+m*x;S.push(L,P,D),S.push(P,z,D)}this.setIndex(S),this.setAttribute("position",new mn(w,3)),this.setAttribute("normal",new mn(b,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xd extends Rn{constructor(e=.5,t=1,r=32,a=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const d=[],p=[],m=[],y=[];let v=e;const g=(t-e)/a,S=new q,w=new gt;for(let b=0;b<=a;b++){for(let _=0;_<=r;_++){const x=l+_/r*c;S.x=v*Math.cos(x),S.y=v*Math.sin(x),p.push(S.x,S.y,S.z),m.push(0,0,1),w.x=(S.x/t+1)/2,w.y=(S.y/t+1)/2,y.push(w.x,w.y)}v+=g}for(let b=0;b<a;b++){const _=b*(r+1);for(let x=0;x<r;x++){const C=x+_,L=C,P=C+r+1,z=C+r+2,D=C+1;d.push(L,P,D),d.push(P,z,D)}}this.setIndex(d),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Lr extends Rn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(c+d,Math.PI);let m=0;const y=[],v=new q,g=new q,S=[],w=[],b=[],_=[];for(let x=0;x<=r;x++){const C=[],L=x/r;let P=0;x===0&&c===0?P=.5/t:x===r&&p===Math.PI&&(P=-.5/t);for(let z=0;z<=t;z++){const D=z/t;v.x=-e*Math.cos(a+D*l)*Math.sin(c+L*d),v.y=e*Math.cos(c+L*d),v.z=e*Math.sin(a+D*l)*Math.sin(c+L*d),w.push(v.x,v.y,v.z),g.copy(v).normalize(),b.push(g.x,g.y,g.z),_.push(D+P,1-L),C.push(m++)}y.push(C)}for(let x=0;x<r;x++)for(let C=0;C<t;C++){const L=y[x][C+1],P=y[x][C],z=y[x+1][C],D=y[x+1][C+1];(x!==0||c>0)&&S.push(L,P,D),(x!==r-1||p<Math.PI)&&S.push(P,z,D)}this.setIndex(S),this.setAttribute("position",new mn(w,3)),this.setAttribute("normal",new mn(b,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function lo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(Jm(a))a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Jm(a[0])){const l=[];for(let c=0,d=a.length;c<d;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Nn(s){const e={};for(let t=0;t<s.length;t++){const r=lo(s[t]);for(const a in r)e[a]=r[a]}return e}function Jm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function n0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const px={clone:lo,merge:Nn};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class vx extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vl extends Or{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=Ld,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _x extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xx extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jd extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const bf=new Xt,Qm=new q,eg=new q;class i0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Qm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qm),eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eg),t.updateMatrixWorld(),bf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fa||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new q,Xl=new uo,Ci=new q;class r0 extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Wl,Xl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new q,tg=new gt,ng=new gt;class $n extends r0{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,tg,ng),t.subVectors(ng,tg)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ef*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/p,t-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yx extends i0{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class Sx extends jd{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yd extends r0{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=y*this.view.offsetY,p=d-y*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mx extends i0{constructor(){super(new Yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ig extends jd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Mx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ex extends jd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Zs=-90,Js=1;class wx extends ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Zs,Js,e,t);a.layers=this.layers,this.add(a);const l=new $n(Zs,Js,e,t);l.layers=this.layers,this.add(l);const c=new $n(Zs,Js,e,t);c.layers=this.layers,this.add(c);const d=new $n(Zs,Js,e,t);d.layers=this.layers,this.add(d);const p=new $n(Zs,Js,e,t);p.layers=this.layers,this.add(p);const m=new $n(Zs,Js,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,p]=t;for(const m of t)this.remove(m);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===fa)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,p,m,y]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(v,g,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Tx extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rg=new Xt;class Ax{constructor(e,t,r=0,a=1/0){this.ray=new fu(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rg),this}intersectObject(e,t=!0,r=[]){return Ad(e,this,r,t),r.sort(sg),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Ad(e[a],this,r,t);return r.sort(sg),r}}function sg(s,e){return s.distance-e.distance}function Ad(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,d=l.length;c<d;c++)Ad(l[c],e,t,!0)}}const Jd=class Jd{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Jd.prototype.isMatrix2=!0;let og=Jd;function ag(s,e,t,r){const a=bx(r);switch(t){case Hg:return s*e;case Wg:return s*e/a.components*a.byteLength;case Od:return s*e/a.components*a.byteLength;case us:return s*e*2/a.components*a.byteLength;case kd:return s*e*2/a.components*a.byteLength;case Vg:return s*e*3/a.components*a.byteLength;case yi:return s*e*4/a.components*a.byteLength;case Bd:return s*e*4/a.components*a.byteLength;case Kl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jf:case qf:return Math.max(s,16)*Math.max(e,8)/4;case Xf:case Yf:return Math.max(s,8)*Math.max(e,8)/2;case Kf:case $f:case Jf:case Qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zf:case eu:case ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ld:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case md:case gd:case vd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _d:case xd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tu:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bx(s){switch(s){case Zn:case kg:return{byteLength:1,components:1};case ua:case Bg:case sr:return{byteLength:2,components:1};case Ud:case Fd:return{byteLength:2,components:4};case Oi:case Nd:case Ii:return{byteLength:4,components:1};case zg:case Gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function s0(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Cx(s){const e=new WeakMap;function t(d,p){const m=d.array,y=d.usage,v=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,y),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const y=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,y);else{v.sort((S,w)=>S.start-w.start);let g=0;for(let S=1;S<v.length;S++){const w=v[g],b=v[S];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++g,v[g]=b)}v.length=g+1;for(let S=0,w=v.length;S<w;S++){const b=v[S];s.bufferSubData(m,b.start*y.BYTES_PER_ELEMENT,y,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const y=e.get(d);(!y||y.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:l,update:c}}var Rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ey=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,by=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,By=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ES=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Rx,alphahash_pars_fragment:Px,alphamap_fragment:Dx,alphamap_pars_fragment:Lx,alphatest_fragment:Ix,alphatest_pars_fragment:Nx,aomap_fragment:Ux,aomap_pars_fragment:Fx,batching_pars_vertex:Ox,batching_vertex:kx,begin_vertex:Bx,beginnormal_vertex:zx,bsdfs:Gx,iridescence_fragment:Hx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:jx,clipping_planes_vertex:Yx,color_fragment:qx,color_pars_fragment:Kx,color_pars_vertex:$x,color_vertex:Zx,common:Jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:ry,colorspace_fragment:sy,colorspace_pars_fragment:oy,envmap_fragment:ay,envmap_common_pars_fragment:ly,envmap_pars_fragment:uy,envmap_pars_vertex:cy,envmap_physical_pars_fragment:Sy,envmap_vertex:fy,fog_vertex:dy,fog_pars_vertex:hy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_pars_fragment:vy,lights_lambert_fragment:_y,lights_lambert_pars_fragment:xy,lights_pars_begin:yy,lights_toon_fragment:My,lights_toon_pars_fragment:Ey,lights_phong_fragment:wy,lights_phong_pars_fragment:Ty,lights_physical_fragment:Ay,lights_physical_pars_fragment:by,lights_fragment_begin:Cy,lights_fragment_maps:Ry,lights_fragment_end:Py,lightprobes_pars_fragment:Dy,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Uy,map_fragment:Fy,map_pars_fragment:Oy,map_particle_fragment:ky,map_particle_pars_fragment:By,metalnessmap_fragment:zy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Hy,morphcolor_vertex:Vy,morphnormal_vertex:Wy,morphtarget_pars_vertex:Xy,morphtarget_vertex:jy,normal_fragment_begin:Yy,normal_fragment_maps:qy,normal_pars_fragment:Ky,normal_pars_vertex:$y,normal_vertex:Zy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:Qy,clearcoat_normal_fragment_maps:eS,clearcoat_pars_fragment:tS,iridescence_pars_fragment:nS,opaque_fragment:iS,packing:rS,premultiplied_alpha_fragment:sS,project_vertex:oS,dithering_fragment:aS,dithering_pars_fragment:lS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:dS,shadowmap_vertex:hS,shadowmask_pars_fragment:pS,skinbase_vertex:mS,skinning_pars_vertex:gS,skinning_vertex:vS,skinnormal_vertex:_S,specularmap_fragment:xS,specularmap_pars_fragment:yS,tonemapping_fragment:SS,tonemapping_pars_fragment:MS,transmission_fragment:ES,transmission_pars_fragment:wS,uv_pars_fragment:TS,uv_pars_vertex:AS,uv_vertex:bS,worldpos_vertex:CS,background_vert:RS,background_frag:PS,backgroundCube_vert:DS,backgroundCube_frag:LS,cube_vert:IS,cube_frag:NS,depth_vert:US,depth_frag:FS,distance_vert:OS,distance_frag:kS,equirect_vert:BS,equirect_frag:zS,linedashed_vert:GS,linedashed_frag:HS,meshbasic_vert:VS,meshbasic_frag:WS,meshlambert_vert:XS,meshlambert_frag:jS,meshmatcap_vert:YS,meshmatcap_frag:qS,meshnormal_vert:KS,meshnormal_frag:$S,meshphong_vert:ZS,meshphong_frag:JS,meshphysical_vert:QS,meshphysical_frag:eM,meshtoon_vert:tM,meshtoon_frag:nM,points_vert:iM,points_frag:rM,shadow_vert:sM,shadow_frag:oM,sprite_vert:aM,sprite_frag:lM},Oe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Pi={basic:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Nn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Nn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Nn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Nn([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Nn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Nn([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Nn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Nn([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Nn([Oe.common,Oe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Nn([Oe.lights,Oe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Pi.physical={uniforms:Nn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const jl={r:0,b:0,g:0},uM=new Xt,o0=new dt;o0.set(-1,0,0,0,1,0,0,0,1);function cM(s,e,t,r,a,l){const c=new xt(0);let d=a===!0?0:1,p,m,y=null,v=0,g=null;function S(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const P=C.backgroundBlurriness>0;L=e.get(L,P)}return L}function w(C){let L=!1;const P=S(C);P===null?_(c,d):P&&P.isColor&&(_(P,1),L=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(C,L){const P=S(L);P&&(P.isCubeTexture||P.mapping===cu)?(m===void 0&&(m=new An(new pa(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:lo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(o0),m.material.toneMapped=wt.getTransfer(P.colorSpace)!==Ft,(y!==P||v!==P.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,y=P,v=P.version,g=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new An(new du(2,2),new ki({name:"BackgroundMaterial",uniforms:lo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=wt.getTransfer(P.colorSpace)!==Ft,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||v!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,y=P,v=P.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,L){C.getRGB(jl,n0(s)),t.buffers.color.setClear(jl.r,jl.g,jl.b,L,l)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,L=1){c.set(C),d=L,_(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,_(c,d)},render:w,addToRenderList:b,dispose:x}}function fM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,c=!1;function d(O,$,ue,ce,H){let ne=!1;const X=v(O,ce,ue,$);l!==X&&(l=X,m(l.object)),ne=S(O,ce,ue,H),ne&&w(O,ce,ue,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,P(O,$,ue,ce),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return s.createVertexArray()}function m(O){return s.bindVertexArray(O)}function y(O){return s.deleteVertexArray(O)}function v(O,$,ue,ce){const H=ce.wireframe===!0;let ne=r[$.id];ne===void 0&&(ne={},r[$.id]=ne);const X=O.isInstancedMesh===!0?O.id:0;let Y=ne[X];Y===void 0&&(Y={},ne[X]=Y);let re=Y[ue.id];re===void 0&&(re={},Y[ue.id]=re);let se=re[H];return se===void 0&&(se=g(p()),re[H]=se),se}function g(O){const $=[],ue=[],ce=[];for(let H=0;H<t;H++)$[H]=0,ue[H]=0,ce[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ue,attributeDivisors:ce,object:O,attributes:{},index:null}}function S(O,$,ue,ce){const H=l.attributes,ne=$.attributes;let X=0;const Y=ue.getAttributes();for(const re in Y)if(Y[re].location>=0){const N=H[re];let J=ne[re];if(J===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;X++}return l.attributesNum!==X||l.index!==ce}function w(O,$,ue,ce){const H={},ne=$.attributes;let X=0;const Y=ue.getAttributes();for(const re in Y)if(Y[re].location>=0){let N=ne[re];N===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(N=O.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),H[re]=J,X++}l.attributes=H,l.attributesNum=X,l.index=ce}function b(){const O=l.newAttributes;for(let $=0,ue=O.length;$<ue;$++)O[$]=0}function _(O){x(O,0)}function x(O,$){const ue=l.newAttributes,ce=l.enabledAttributes,H=l.attributeDivisors;ue[O]=1,ce[O]===0&&(s.enableVertexAttribArray(O),ce[O]=1),H[O]!==$&&(s.vertexAttribDivisor(O,$),H[O]=$)}function C(){const O=l.newAttributes,$=l.enabledAttributes;for(let ue=0,ce=$.length;ue<ce;ue++)$[ue]!==O[ue]&&(s.disableVertexAttribArray(ue),$[ue]=0)}function L(O,$,ue,ce,H,ne,X){X===!0?s.vertexAttribIPointer(O,$,ue,H,ne):s.vertexAttribPointer(O,$,ue,ce,H,ne)}function P(O,$,ue,ce){b();const H=ce.attributes,ne=ue.getAttributes(),X=$.defaultAttributeValues;for(const Y in ne){const re=ne[Y];if(re.location>=0){let se=H[Y];if(se===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){const N=se.normalized,J=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const We=Fe.buffer,Ne=Fe.type,ae=Fe.bytesPerElement,xe=Ne===s.INT||Ne===s.UNSIGNED_INT||se.gpuType===Nd;if(se.isInterleavedBufferAttribute){const me=se.data,Ue=me.stride,Qe=se.offset;if(me.isInstancedInterleavedBuffer){for(let tt=0;tt<re.locationSize;tt++)x(re.location+tt,me.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let tt=0;tt<re.locationSize;tt++)_(re.location+tt);s.bindBuffer(s.ARRAY_BUFFER,We);for(let tt=0;tt<re.locationSize;tt++)L(re.location+tt,J/re.locationSize,Ne,N,Ue*ae,(Qe+J/re.locationSize*tt)*ae,xe)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<re.locationSize;me++)x(re.location+me,se.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<re.locationSize;me++)_(re.location+me);s.bindBuffer(s.ARRAY_BUFFER,We);for(let me=0;me<re.locationSize;me++)L(re.location+me,J/re.locationSize,Ne,N,J*ae,J/re.locationSize*me*ae,xe)}}else if(X!==void 0){const N=X[Y];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(re.location,N);break;case 3:s.vertexAttrib3fv(re.location,N);break;case 4:s.vertexAttrib4fv(re.location,N);break;default:s.vertexAttrib1fv(re.location,N)}}}}C()}function z(){U();for(const O in r){const $=r[O];for(const ue in $){const ce=$[ue];for(const H in ce){const ne=ce[H];for(const X in ne)y(ne[X].object),delete ne[X];delete ce[H]}}delete r[O]}}function D(O){if(r[O.id]===void 0)return;const $=r[O.id];for(const ue in $){const ce=$[ue];for(const H in ce){const ne=ce[H];for(const X in ne)y(ne[X].object),delete ne[X];delete ce[H]}}delete r[O.id]}function F(O){for(const $ in r){const ue=r[$];for(const ce in ue){const H=ue[ce];if(H[O.id]===void 0)continue;const ne=H[O.id];for(const X in ne)y(ne[X].object),delete ne[X];delete H[O.id]}}}function T(O){for(const $ in r){const ue=r[$],ce=O.isInstancedMesh===!0?O.id:0,H=ue[ce];if(H!==void 0){for(const ne in H){const X=H[ne];for(const Y in X)y(X[Y].object),delete X[Y];delete H[ne]}delete ue[ce],Object.keys(ue).length===0&&delete r[$]}}}function U(){j(),c=!0,l!==a&&(l=a,m(l.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:U,resetDefaultState:j,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:_,disableUnusedAttributes:C}}function dM(s,e,t){let r;function a(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function c(p,m,y){y!==0&&(s.drawArraysInstanced(r,p,m,y),t.update(m,r,y))}function d(p,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,y);let g=0;for(let S=0;S<y;S++)g+=m[S];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function hM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==yi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Zn&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!T)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const y=p(m);y!==m&&(ot("WebGLRenderer:",m,"not supported, using",y,"instead."),m=y);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:P,maxSamples:z,samples:D}}function pM(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new is,d=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||a;return a=g,r=v.length,S},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=y(v,g,0)},this.setState=function(v,g,S){const w=v.clippingPlanes,b=v.clipIntersection,_=v.clipShadows,x=s.get(v);if(!a||w===null||w.length===0||l&&!_)l?y(null):m();else{const C=l?0:r,L=C*4;let P=x.clippingState||null;p.value=P,P=y(w,g,L,S);for(let z=0;z!==L;++z)P[z]=t[z];x.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(v,g,S,w){const b=v!==null?v.length:0;let _=null;if(b!==0){if(_=p.value,w!==!0||_===null){const x=S+b*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(_===null||_.length<x)&&(_=new Float32Array(x));for(let L=0,P=S;L!==b;++L,P+=4)c.copy(v[L]).applyMatrix4(C,d),c.normal.toArray(_,P),_[P+3]=c.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}const Nr=4,lg=[.125,.215,.35,.446,.526,.582],ss=20,mM=256,ia=new Yd,ug=new xt;let Cf=null,Rf=0,Pf=0,Df=!1;const gM=new q;class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=gM}=l;Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,Pf),this._renderer.xr.enabled=Df,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:sr,format:yi,colorSpace:nu,depthBuffer:!1},a=fg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vM(l)),this._blurMaterial=xM(l,e,t),this._ggxMaterial=_M(l,e,t)}return a}_compileMaterial(e){const t=new An(new Rn,e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,r,a,l){const p=new $n(90,1,t,r),m=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(ug),v.toneMapping=Ui,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new pa,new aa({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let x=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,x=!0):(_.color.copy(ug),x=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+y[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+y[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+y[L]));const z=this._cubeSize;Qs(a,P*z,L>2?z:0,z,z),v.setRenderTarget(a),x&&v.render(b,p),v.render(e,p)}v.toneMapping=S,v.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ls||e.mapping===oo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Qs(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,ia)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const p=c.uniforms,m=r/(this._lodMeshes.length-1),y=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-y*y),g=0+m*1.25,S=v*g,{_lodMax:w}=this,b=this._sizeLods[r],_=3*b*(r>w-Nr?r-w+Nr:0),x=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=w-t,Qs(l,_,x,3*b,2*b),a.setRenderTarget(l),a.render(d,ia),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=w-r,Qs(e,_,x,3*b,2*b),a.setRenderTarget(e),a.render(d,ia)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const y=3,v=this._lodMeshes[a];v.material=m;const g=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ss-1),b=l/w,_=isFinite(l)?1+Math.floor(y*b):ss;_>ss&&ot(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ss}`);const x=[];let C=0;for(let F=0;F<ss;++F){const T=F/b,U=Math.exp(-T*T/2);x.push(U),F===0?C+=U:F<_&&(C+=2*U)}for(let F=0;F<x.length;F++)x[F]=x[F]/C;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=x,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=w,g.mipInt.value=L-r;const P=this._sizeLods[a],z=3*P*(a>L-Nr?a-L+Nr:0),D=4*(this._cubeSize-P);Qs(t,z,D,3*P,2*P),p.setRenderTarget(t),p.render(v,ia)}}function vM(s){const e=[],t=[],r=[];let a=s;const l=s-Nr+1+lg.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let p=1/d;c>s-Nr?p=lg[c-s+Nr-1]:c===0&&(p=0),t.push(p);const m=1/(d-2),y=-m,v=1+m,g=[y,y,v,y,v,v,y,y,v,v,y,v],S=6,w=6,b=3,_=2,x=1,C=new Float32Array(b*w*S),L=new Float32Array(_*w*S),P=new Float32Array(x*w*S);for(let D=0;D<S;D++){const F=D%3*2/3-1,T=D>2?0:-1,U=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];C.set(U,b*w*D),L.set(g,_*w*D);const j=[D,D,D,D,D,D];P.set(j,x*w*D)}const z=new Rn;z.setAttribute("position",new Si(C,b)),z.setAttribute("uv",new Si(L,_)),z.setAttribute("faceIndex",new Si(P,x)),r.push(new An(z,null)),a>Nr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function fg(s,e,t){const r=new Fi(s,e,t);return r.texture.mapping=cu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Qs(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function _M(s,e,t){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function xM(s,e,t){const r=new Float32Array(ss),a=new q(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function dg(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function hg(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class a0 extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new e0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new pa(5,5,5),l=new ki({name:"CubemapFromEquirect",uniforms:lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:nr});l.uniforms.tEquirect.value=t;const c=new An(a,l),d=t.minFilter;return t.minFilter===os&&(t.minFilter=bn),new wx(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function yM(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,S=!1){return g==null?null:S?c(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Zc||S===Jc)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const b=new a0(w.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",m),d(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,w=S===Zc||S===Jc,b=S===ls||S===oo;if(w||b){let _=t.get(g);const x=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new cg(s)),_=w?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const C=g.image;return w&&C&&C.height>0||b&&C&&p(C)?(r===null&&(r=new cg(s)),_=w?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",y),_.texture):null}}}return g}function d(g,S){return S===Zc?g.mapping=ls:S===Jc&&(g.mapping=oo),g}function p(g){let S=0;const w=6;for(let b=0;b<w;b++)g[b]!==void 0&&S++;return S===w}function m(g){const S=g.target;S.removeEventListener("dispose",m);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function y(g){const S=g.target;S.removeEventListener("dispose",y);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:v}}function SM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ed("WebGLRenderer: "+r+" extension not supported."),a}}}function MM(s,e,t,r){const a={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",c),delete a[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(v,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function p(v){const g=v.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function m(v){const g=[],S=v.index,w=v.attributes.position;let b=0;if(w===void 0)return;if(S!==null){const C=S.array;b=S.version;for(let L=0,P=C.length;L<P;L+=3){const z=C[L+0],D=C[L+1],F=C[L+2];g.push(z,D,D,F,F,z)}}else{const C=w.array;b=w.version;for(let L=0,P=C.length/3-1;L<P;L+=3){const z=L+0,D=L+1,F=L+2;g.push(z,D,D,F,F,z)}}const _=new(w.count>=65535?Kg:qg)(g,1);_.version=b;const x=l.get(v);x&&e.remove(x),l.set(v,_)}function y(v){const g=l.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:y}}function EM(s,e,t){let r;function a(v){r=v}let l,c;function d(v){l=v.type,c=v.bytesPerElement}function p(v,g){s.drawElements(r,g,l,v*c),t.update(g,r,1)}function m(v,g,S){S!==0&&(s.drawElementsInstanced(r,g,l,v*c,S),t.update(g,r,S))}function y(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,v,0,S);let b=0;for(let _=0;_<S;_++)b+=g[_];t.update(b,r,1)}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=y}function wM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Et("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function TM(s,e,t){const r=new WeakMap,a=new Qt;function l(c,d,p){const m=c.morphTargetInfluences,y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=y!==void 0?y.length:0;let g=r.get(d);if(g===void 0||g.count!==v){let j=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",j)};var S=j;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;w===!0&&(P=1),b===!0&&(P=2),_===!0&&(P=3);let z=d.attributes.position.count*P,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*D*4*v),T=new jg(F,z,D,v);T.type=Ii,T.needsUpdate=!0;const U=P*4;for(let O=0;O<v;O++){const $=x[O],ue=C[O],ce=L[O],H=z*D*4*O;for(let ne=0;ne<$.count;ne++){const X=ne*U;w===!0&&(a.fromBufferAttribute($,ne),F[H+X+0]=a.x,F[H+X+1]=a.y,F[H+X+2]=a.z,F[H+X+3]=0),b===!0&&(a.fromBufferAttribute(ue,ne),F[H+X+4]=a.x,F[H+X+5]=a.y,F[H+X+6]=a.z,F[H+X+7]=0),_===!0&&(a.fromBufferAttribute(ce,ne),F[H+X+8]=a.x,F[H+X+9]=a.y,F[H+X+10]=a.z,F[H+X+11]=ce.itemSize===4?a.w:1)}}g={count:v,texture:T,size:new gt(z,D)},r.set(d,g),d.addEventListener("dispose",j)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const b=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function AM(s,e,t,r,a){let l=new WeakMap;function c(m){const y=a.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==y&&(e.update(g),l.set(g,y)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==y&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,y))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==y&&(S.update(),l.set(S,y))}return g}function d(){l=new WeakMap}function p(m){const y=m.target;y.removeEventListener("dispose",p),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:c,dispose:d}}const bM={[Dg]:"LINEAR_TONE_MAPPING",[Lg]:"REINHARD_TONE_MAPPING",[Ig]:"CINEON_TONE_MAPPING",[Id]:"ACES_FILMIC_TONE_MAPPING",[Ug]:"AGX_TONE_MAPPING",[Fg]:"NEUTRAL_TONE_MAPPING",[Ng]:"CUSTOM_TONE_MAPPING"};function CM(s,e,t,r,a){const l=new Fi(e,t,{type:s,depthBuffer:r,stencilBuffer:a,depthTexture:r?new ao(e,t):void 0}),c=new Fi(e,t,{type:sr,depthBuffer:!1,stencilBuffer:!1}),d=new Rn;d.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new mn([0,2,0,0,2,0],2));const p=new vx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new An(d,p),y=new Yd(-1,1,1,-1,0,1);let v=null,g=null,S=!1,w,b=null,_=[],x=!1;this.setSize=function(C,L){l.setSize(C,L),c.setSize(C,L);for(let P=0;P<_.length;P++){const z=_[P];z.setSize&&z.setSize(C,L)}},this.setEffects=function(C){_=C,x=_.length>0&&_[0].isRenderPass===!0;const L=l.width,P=l.height;for(let z=0;z<_.length;z++){const D=_[z];D.setSize&&D.setSize(L,P)}},this.begin=function(C,L){if(S||C.toneMapping===Ui&&_.length===0)return!1;if(b=L,L!==null){const P=L.width,z=L.height;(l.width!==P||l.height!==z)&&this.setSize(P,z)}return x===!1&&C.setRenderTarget(l),w=C.toneMapping,C.toneMapping=Ui,!0},this.hasRenderPass=function(){return x},this.end=function(C,L){C.toneMapping=w,S=!0;let P=l,z=c;for(let D=0;D<_.length;D++){const F=_[D];if(F.enabled!==!1&&(F.render(C,z,P,L),F.needsSwap!==!1)){const T=P;P=z,z=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,p.defines={},wt.getTransfer(v)===Ft&&(p.defines.SRGB_TRANSFER="");const D=bM[g];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(b),C.render(m,y),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),d.dispose(),p.dispose()}}const l0=new Cn,bd=new ao(1,1),u0=new jg,c0=new W_,f0=new e0,pg=[],mg=[],gg=new Float32Array(16),vg=new Float32Array(9),_g=new Float32Array(4);function co(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=pg[a];if(l===void 0&&(l=new Float32Array(a),pg[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function pu(s,e){let t=mg[e];t===void 0&&(t=new Int32Array(e),mg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function RM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function IM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;_g.set(r),s.uniformMatrix2fv(this.addr,!1,_g),cn(t,r)}}function NM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;vg.set(r),s.uniformMatrix3fv(this.addr,!1,vg),cn(t,r)}}function UM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;gg.set(r),s.uniformMatrix4fv(this.addr,!1,gg),cn(t,r)}}function FM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function WM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(bd.compareFunction=t.isReversedDepthBuffer()?Gd:zd,l=bd):l=l0,t.setTexture2D(e||l,a)}function XM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||c0,a)}function jM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||f0,a)}function YM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||u0,a)}function qM(s){switch(s){case 5126:return RM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return kM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return GM;case 36295:return HM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return YM}}function KM(s,e){s.uniform1fv(this.addr,e)}function $M(s,e){const t=co(e,this.size,2);s.uniform2fv(this.addr,t)}function ZM(s,e){const t=co(e,this.size,3);s.uniform3fv(this.addr,t)}function JM(s,e){const t=co(e,this.size,4);s.uniform4fv(this.addr,t)}function QM(s,e){const t=co(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function eE(s,e){const t=co(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tE(s,e){const t=co(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nE(s,e){s.uniform1iv(this.addr,e)}function iE(s,e){s.uniform2iv(this.addr,e)}function rE(s,e){s.uniform3iv(this.addr,e)}function sE(s,e){s.uniform4iv(this.addr,e)}function oE(s,e){s.uniform1uiv(this.addr,e)}function aE(s,e){s.uniform2uiv(this.addr,e)}function lE(s,e){s.uniform3uiv(this.addr,e)}function uE(s,e){s.uniform4uiv(this.addr,e)}function cE(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=bd:c=l0;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function fE(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||c0,l[c])}function dE(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||f0,l[c])}function hE(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||u0,l[c])}function pE(s){switch(s){case 5126:return KM;case 35664:return $M;case 35665:return ZM;case 35666:return JM;case 35674:return QM;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return oE;case 36294:return aE;case 36295:return lE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return hE}}class mE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=qM(t.type)}}class gE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pE(t.type)}}class vE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function xg(s,e){s.seq.push(e),s.map[e.id]=e}function _E(s,e,t){const r=s.name,a=r.length;for(Lf.lastIndex=0;;){const l=Lf.exec(r),c=Lf.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===a){xg(t,m===void 0?new mE(d,s,e):new gE(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new vE(d),xg(t,v)),t=v}}}class Ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),p=e.getUniformLocation(t,d.name);_E(d,p,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function yg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const xE=37297;let yE=0;function SE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Sg=new dt;function ME(s){wt._getMatrix(Sg,wt.workingColorSpace,s);const e=`mat3( ${Sg.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case iu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+SE(s.getShaderSource(e),d)}else return l}function EE(s,e){const t=ME(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const wE={[Dg]:"Linear",[Lg]:"Reinhard",[Ig]:"Cineon",[Id]:"ACESFilmic",[Ug]:"AgX",[Fg]:"Neutral",[Ng]:"Custom"};function TE(s,e){const t=wE[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yl=new q;function AE(){wt.getLuminanceCoefficients(Yl);const s=Yl.x.toFixed(4),e=Yl.y.toFixed(4),t=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function CE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function RE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function oa(s){return s!==""}function Eg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(s){return s.replace(PE,LE)}const DE=new Map;function LE(s,e){let t=mt[e];if(t===void 0){const r=DE.get(e);if(r!==void 0)t=mt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cd(t)}const IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(s){return s.replace(IE,NE)}function NE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Ag(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UE={[ql]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function FE(s){return UE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OE={[ls]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function kE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":OE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const BE={[oo]:"ENVMAP_MODE_REFRACTION"};function zE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":BE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GE={[Ld]:"ENVMAP_BLENDING_MULTIPLY",[E_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function HE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":GE[s.combine]||"ENVMAP_BLENDING_NONE"}function VE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function WE(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=FE(t),m=kE(t),y=zE(t),v=HE(t),g=VE(t),S=bE(t),w=CE(l),b=a.createProgram();let _,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oa).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oa).join(`
`),x.length>0&&(x+=`
`)):(_=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),x=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+y:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?TE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,EE("linearToOutputTexel",t.outputColorSpace),AE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),c=Cd(c),c=Eg(c,t),c=wg(c,t),d=Cd(d),d=Eg(d,t),d=wg(d,t),c=Tg(c),d=Tg(d),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=C+_+c,P=C+x+d,z=yg(a,a.VERTEX_SHADER,L),D=yg(a,a.FRAGMENT_SHADER,P);a.attachShader(b,z),a.attachShader(b,D),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function F(O){if(s.debug.checkShaderErrors){const $=a.getProgramInfoLog(b)||"",ue=a.getShaderInfoLog(z)||"",ce=a.getShaderInfoLog(D)||"",H=$.trim(),ne=ue.trim(),X=ce.trim();let Y=!0,re=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,z,D);else{const se=Mg(a,z,"vertex"),N=Mg(a,D,"fragment");Et("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+se+`
`+N)}else H!==""?ot("WebGLProgram: Program Info Log:",H):(ne===""||X==="")&&(re=!1);re&&(O.diagnostics={runnable:Y,programLog:H,vertexShader:{log:ne,prefix:_},fragmentShader:{log:X,prefix:x}})}a.deleteShader(z),a.deleteShader(D),T=new Ql(a,b),U=RE(a,b)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(b,xE)),j},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=D,this}let XE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new YE(e),t.set(e,r)),r}}class YE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function qE(s){return s===us||s===eu||s===tu}function KE(s,e,t,r,a,l){const c=new Vd,d=new jE,p=new Set,m=[],y=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,U,j,O,$,ue){const ce=O.fog,H=$.geometry,ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Y=e.get(T.envMap||ne,X),re=Y&&Y.mapping===cu?Y.image.height:null,se=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,J=N!==void 0?N.length:0;let Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let We,Ne,ae,xe;if(se){const ut=Pi[se];We=ut.vertexShader,Ne=ut.fragmentShader}else We=T.vertexShader,Ne=T.fragmentShader,d.update(T),ae=d.getVertexShaderID(T),xe=d.getFragmentShaderID(T);const me=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Qe=$.isInstancedMesh===!0,tt=$.isBatchedMesh===!0,Lt=!!T.map,Ee=!!T.matcap,ke=!!Y,Xe=!!T.aoMap,Pe=!!T.lightMap,ht=!!T.bumpMap,Mt=!!T.normalMap,Zt=!!T.displacementMap,G=!!T.emissiveMap,Pt=!!T.metalnessMap,pt=!!T.roughnessMap,It=T.anisotropy>0,Ie=T.clearcoat>0,Gt=T.dispersion>0,R=T.iridescence>0,M=T.sheen>0,K=T.transmission>0,he=It&&!!T.anisotropyMap,ge=Ie&&!!T.clearcoatMap,Me=Ie&&!!T.clearcoatNormalMap,Le=Ie&&!!T.clearcoatRoughnessMap,fe=R&&!!T.iridescenceMap,pe=R&&!!T.iridescenceThicknessMap,Be=M&&!!T.sheenColorMap,Ge=M&&!!T.sheenRoughnessMap,be=!!T.specularMap,we=!!T.specularColorMap,st=!!T.specularIntensityMap,lt=K&&!!T.transmissionMap,vt=K&&!!T.thicknessMap,B=!!T.gradientMap,Ae=!!T.alphaMap,de=T.alphaTest>0,ze=!!T.alphaHash,Re=!!T.extensions;let ve=Ui;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Ke={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:Ne,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:tt,batchingColor:tt&&$._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&$.instanceColor!==null,instancingMorph:Qe&&$.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Lt,matcap:Ee,envMap:ke,envMapMode:ke&&Y.mapping,envMapCubeUVHeight:re,aoMap:Xe,lightMap:Pe,bumpMap:ht,normalMap:Mt,displacementMap:Zt,emissiveMap:G,normalMapObjectSpace:Mt&&T.normalMapType===b_,normalMapTangentSpace:Mt&&T.normalMapType===Sd,packedNormalMap:Mt&&T.normalMapType===Sd&&qE(T.normalMap.format),metalnessMap:Pt,roughnessMap:pt,anisotropy:It,anisotropyMap:he,clearcoat:Ie,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Le,dispersion:Gt,iridescence:R,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:M,sheenColorMap:Be,sheenRoughnessMap:Ge,specularMap:be,specularColorMap:we,specularIntensityMap:st,transmission:K,transmissionMap:lt,thicknessMap:vt,gradientMap:B,opaque:T.transparent===!1&&T.blending===io&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:de,alphaHash:ze,combine:T.combine,mapUv:Lt&&w(T.map.channel),aoMapUv:Xe&&w(T.aoMap.channel),lightMapUv:Pe&&w(T.lightMap.channel),bumpMapUv:ht&&w(T.bumpMap.channel),normalMapUv:Mt&&w(T.normalMap.channel),displacementMapUv:Zt&&w(T.displacementMap.channel),emissiveMapUv:G&&w(T.emissiveMap.channel),metalnessMapUv:Pt&&w(T.metalnessMap.channel),roughnessMapUv:pt&&w(T.roughnessMap.channel),anisotropyMapUv:he&&w(T.anisotropyMap.channel),clearcoatMapUv:ge&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(T.sheenRoughnessMap.channel),specularMapUv:be&&w(T.specularMap.channel),specularColorMapUv:we&&w(T.specularColorMap.channel),specularIntensityMapUv:st&&w(T.specularIntensityMap.channel),transmissionMapUv:lt&&w(T.transmissionMap.channel),thicknessMapUv:vt&&w(T.thicknessMap.channel),alphaMapUv:Ae&&w(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Mt||It),vertexNormals:!!H.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!H.attributes.uv&&(Lt||Ae),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||H.attributes.normal===void 0&&Mt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:$.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Fe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:Lt&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:G&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Di,flipSided:T.side===Un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Re&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&T.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=p.has(1),Ke.vertexUv2s=p.has(2),Ke.vertexUv3s=p.has(3),p.clear(),Ke}function _(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const j in T.defines)U.push(j),U.push(T.defines[j]);return T.isRawShaderMaterial===!1&&(x(U,T),C(U,T),U.push(s.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function C(T,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function L(T){const U=S[T.type];let j;if(U){const O=Pi[U];j=px.clone(O.uniforms)}else j=T.uniforms;return j}function P(T,U){let j=y.get(U);return j!==void 0?++j.usedTimes:(j=new WE(s,U,T,a),m.push(j),y.set(U,j)),j}function z(T){if(--T.usedTimes===0){const U=m.indexOf(T);m[U]=m[m.length-1],m.pop(),y.delete(T.cacheKey),T.destroy()}}function D(T){d.remove(T)}function F(){d.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:L,acquireProgram:P,releaseProgram:z,releaseShaderCache:D,programs:m,dispose:F}}function $E(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function ZE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function bg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,w,b,_,x){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:S,material:w,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:_,group:x},s[e]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=w,C.materialVariant=c(g),C.groupOrder=b,C.renderOrder=g.renderOrder,C.z=_,C.group=x),e++,C}function p(g,S,w,b,_,x){const C=d(g,S,w,b,_,x);w.transmission>0?r.push(C):w.transparent===!0?a.push(C):t.push(C)}function m(g,S,w,b,_,x){const C=d(g,S,w,b,_,x);w.transmission>0?r.unshift(C):w.transparent===!0?a.unshift(C):t.unshift(C)}function y(g,S){t.length>1&&t.sort(g||ZE),r.length>1&&r.sort(S||bg),a.length>1&&a.sort(S||bg)}function v(){for(let g=e,S=s.length;g<S;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:p,unshift:m,finish:v,sort:y}}function JE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Cg,s.set(r,[c])):a>=l.length?(c=new Cg,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function QE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new xt};break;case"SpotLight":t={position:new q,direction:new q,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function e1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let t1=0;function n1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i1(s){const e=new QE,t=e1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const a=new q,l=new Xt,c=new Xt;function d(m){let y=0,v=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,w=0,b=0,_=0,x=0,C=0,L=0,P=0,z=0,D=0,F=0;m.sort(n1);for(let U=0,j=m.length;U<j;U++){const O=m[U],$=O.color,ue=O.intensity,ce=O.distance;let H=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===us?H=O.shadow.map.texture:H=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)y+=$.r*ue,v+=$.g*ue,g+=$.b*ue;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(O.sh.coefficients[ne],ue);F++}else if(O.isDirectionalLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const X=O.shadow,Y=t.get(O);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=H,r.directionalShadowMatrix[S]=O.shadow.matrix,C++}r.directional[S]=ne,S++}else if(O.isSpotLight){const ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy($).multiplyScalar(ue),ne.distance=ce,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,r.spot[b]=ne;const X=O.shadow;if(O.map&&(r.spotLightMap[z]=O.map,z++,X.updateMatrices(O),O.castShadow&&D++),r.spotLightMatrix[b]=X.matrix,O.castShadow){const Y=t.get(O);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=H,P++}b++}else if(O.isRectAreaLight){const ne=e.get(O);ne.color.copy($).multiplyScalar(ue),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),r.rectArea[_]=ne,_++}else if(O.isPointLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){const X=O.shadow,Y=t.get(O);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,r.pointShadow[w]=Y,r.pointShadowMap[w]=H,r.pointShadowMatrix[w]=O.shadow.matrix,L++}r.point[w]=ne,w++}else if(O.isHemisphereLight){const ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(ue),ne.groundColor.copy(O.groundColor).multiplyScalar(ue),r.hemi[x]=ne,x++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==w||T.spotLength!==b||T.rectAreaLength!==_||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==P||T.numSpotMaps!==z||T.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=_,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+z-D,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=F,T.directionalLength=S,T.pointLength=w,T.spotLength=b,T.rectAreaLength=_,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=P,T.numSpotMaps=z,T.numLightProbes=F,r.version=t1++)}function p(m,y){let v=0,g=0,S=0,w=0,b=0;const _=y.matrixWorldInverse;for(let x=0,C=m.length;x<C;x++){const L=m[x];if(L.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),v++}else if(L.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),S++}else if(L.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),c.identity(),l.copy(L.matrixWorld),l.premultiply(_),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),w++}else if(L.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const P=r.hemi[b];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(_),b++}}}return{setup:d,setupView:p,state:r}}function Rg(s){const e=new i1(s),t=[],r=[],a=[];function l(g){v.camera=g,t.length=0,r.length=0,a.length=0}function c(g){t.push(g)}function d(g){r.push(g)}function p(g){a.push(g)}function m(){e.setup(t)}function y(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:m,setupLightsView:y,pushLight:c,pushShadow:d,pushLightProbeGrid:p}}function r1(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Rg(s),e.set(a,[d])):l>=c.length?(d=new Rg(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a1=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],l1=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Pg=new Xt,ra=new q,If=new q;function u1(s,e,t){let r=new Wd;const a=new gt,l=new gt,c=new Qt,d=new _x,p=new xx,m={},y=t.maxTextureSize,v={[rr]:Un,[Un]:rr,[Di]:Di},g=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:s1,fragmentShader:o1}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const w=new Rn;w.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new An(w,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let x=this.type;this.render=function(D,F,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===r_&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);const U=s.getRenderTarget(),j=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),$=s.state;$.setBlending(nr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ue=x!==this.type;ue&&F.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(H=>H.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,H=D.length;ce<H;ce++){const ne=D[ce],X=ne.shadow;if(X===void 0){ot("WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const Y=X.getFrameExtents();a.multiply(Y),l.copy(X.mapSize),(a.x>y||a.y>y)&&(a.x>y&&(l.x=Math.floor(y/Y.x),a.x=l.x*Y.x,X.mapSize.x=l.x),a.y>y&&(l.y=Math.floor(y/Y.y),a.y=l.y*Y.y,X.mapSize.y=l.y));const re=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=re,X.map===null||ue===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===sa){if(ne.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Fi(a.x,a.y,{format:us,type:sr,minFilter:bn,magFilter:bn,generateMipmaps:!1}),X.map.texture.name=ne.name+".shadowMap",X.map.depthTexture=new ao(a.x,a.y,Ii),X.map.depthTexture.name=ne.name+".shadowMapDepth",X.map.depthTexture.format=or,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=xn,X.map.depthTexture.magFilter=xn}else ne.isPointLight?(X.map=new a0(a.x),X.map.depthTexture=new dx(a.x,Oi)):(X.map=new Fi(a.x,a.y),X.map.depthTexture=new ao(a.x,a.y,Oi)),X.map.depthTexture.name=ne.name+".shadowMap",X.map.depthTexture.format=or,this.type===ql?(X.map.depthTexture.compareFunction=re?Gd:zd,X.map.depthTexture.minFilter=bn,X.map.depthTexture.magFilter=bn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=xn,X.map.depthTexture.magFilter=xn);X.camera.updateProjectionMatrix()}const se=X.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<se;N++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,N),s.clear();else{N===0&&(s.setRenderTarget(X.map),s.clear());const J=X.getViewport(N);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),$.viewport(c)}if(ne.isPointLight){const J=X.camera,Fe=X.matrix,We=ne.distance||J.far;We!==J.far&&(J.far=We,J.updateProjectionMatrix()),ra.setFromMatrixPosition(ne.matrixWorld),J.position.copy(ra),If.copy(J.position),If.add(a1[N]),J.up.copy(l1[N]),J.lookAt(If),J.updateMatrixWorld(),Fe.makeTranslation(-ra.x,-ra.y,-ra.z),Pg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Pg,J.coordinateSystem,J.reversedDepth)}else X.updateMatrices(ne);r=X.getFrustum(),P(F,T,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===sa&&C(X,T),X.needsUpdate=!1}x=this.type,_.needsUpdate=!1,s.setRenderTarget(U,j,O)};function C(D,F){const T=e.update(b);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Fi(a.x,a.y,{format:us,type:sr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(F,null,T,g,b,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(F,null,T,S,b,null)}function L(D,F,T,U){let j=null;const O=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)j=O;else if(j=T.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=j.uuid,ue=F.uuid;let ce=m[$];ce===void 0&&(ce={},m[$]=ce);let H=ce[ue];H===void 0&&(H=j.clone(),ce[ue]=H,F.addEventListener("dispose",z)),j=H}if(j.visible=F.visible,j.wireframe=F.wireframe,U===sa?j.side=F.shadowSide!==null?F.shadowSide:F.side:j.side=F.shadowSide!==null?F.shadowSide:v[F.side],j.alphaMap=F.alphaMap,j.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,j.map=F.map,j.clipShadows=F.clipShadows,j.clippingPlanes=F.clippingPlanes,j.clipIntersection=F.clipIntersection,j.displacementMap=F.displacementMap,j.displacementScale=F.displacementScale,j.displacementBias=F.displacementBias,j.wireframeLinewidth=F.wireframeLinewidth,j.linewidth=F.linewidth,T.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const $=s.properties.get(j);$.light=T}return j}function P(D,F,T,U,j){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===sa)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const ue=e.update(D),ce=D.material;if(Array.isArray(ce)){const H=ue.groups;for(let ne=0,X=H.length;ne<X;ne++){const Y=H[ne],re=ce[Y.materialIndex];if(re&&re.visible){const se=L(D,re,U,j);D.onBeforeShadow(s,D,F,T,ue,se,Y),s.renderBufferDirect(T,null,ue,se,D,Y),D.onAfterShadow(s,D,F,T,ue,se,Y)}}}else if(ce.visible){const H=L(D,ce,U,j);D.onBeforeShadow(s,D,F,T,ue,H,null),s.renderBufferDirect(T,null,ue,H,D,null),D.onAfterShadow(s,D,F,T,ue,H,null)}}const $=D.children;for(let ue=0,ce=$.length;ue<ce;ue++)P($[ue],F,T,U,j)}function z(D){D.target.removeEventListener("dispose",z);for(const T in m){const U=m[T],j=D.target.uuid;j in U&&(U[j].dispose(),delete U[j])}}}function c1(s,e){function t(){let B=!1;const Ae=new Qt;let de=null;const ze=new Qt(0,0,0,0);return{setMask:function(Re){de!==Re&&!B&&(s.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){B=Re},setClear:function(Re,ve,Ke,ut,kt){kt===!0&&(Re*=ut,ve*=ut,Ke*=ut),Ae.set(Re,ve,Ke,ut),ze.equals(Ae)===!1&&(s.clearColor(Re,ve,Ke,ut),ze.copy(Ae))},reset:function(){B=!1,de=null,ze.set(-1,0,0,0)}}}function r(){let B=!1,Ae=!1,de=null,ze=null,Re=null;return{setReversed:function(ve){if(Ae!==ve){const Ke=e.get("EXT_clip_control");ve?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const ut=Re;Re=null,this.setClear(ut)}},getReversed:function(){return Ae},setTest:function(ve){ve?me(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(ve){de!==ve&&!B&&(s.depthMask(ve),de=ve)},setFunc:function(ve){if(Ae&&(ve=O_[ve]),ze!==ve){switch(ve){case Ff:s.depthFunc(s.NEVER);break;case Of:s.depthFunc(s.ALWAYS);break;case kf:s.depthFunc(s.LESS);break;case so:s.depthFunc(s.LEQUAL);break;case Bf:s.depthFunc(s.EQUAL);break;case zf:s.depthFunc(s.GEQUAL);break;case Gf:s.depthFunc(s.GREATER);break;case Hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=ve}},setLocked:function(ve){B=ve},setClear:function(ve){Re!==ve&&(Re=ve,Ae&&(ve=1-ve),s.clearDepth(ve))},reset:function(){B=!1,de=null,ze=null,Re=null,Ae=!1}}}function a(){let B=!1,Ae=null,de=null,ze=null,Re=null,ve=null,Ke=null,ut=null,kt=null;return{setTest:function(Ct){B||(Ct?me(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(Ct){Ae!==Ct&&!B&&(s.stencilMask(Ct),Ae=Ct)},setFunc:function(Ct,Pn,Qn){(de!==Ct||ze!==Pn||Re!==Qn)&&(s.stencilFunc(Ct,Pn,Qn),de=Ct,ze=Pn,Re=Qn)},setOp:function(Ct,Pn,Qn){(ve!==Ct||Ke!==Pn||ut!==Qn)&&(s.stencilOp(Ct,Pn,Qn),ve=Ct,Ke=Pn,ut=Qn)},setLocked:function(Ct){B=Ct},setClear:function(Ct){kt!==Ct&&(s.clearStencil(Ct),kt=Ct)},reset:function(){B=!1,Ae=null,de=null,ze=null,Re=null,ve=null,Ke=null,ut=null,kt=null}}}const l=new t,c=new r,d=new a,p=new WeakMap,m=new WeakMap;let y={},v={},g={},S=new WeakMap,w=[],b=null,_=!1,x=null,C=null,L=null,P=null,z=null,D=null,F=null,T=new xt(0,0,0),U=0,j=!1,O=null,$=null,ue=null,ce=null,H=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(re)[1]),X=Y>=1):re.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),X=Y>=2);let se=null,N={};const J=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),We=new Qt().fromArray(J),Ne=new Qt().fromArray(Fe);function ae(B,Ae,de,ze){const Re=new Uint8Array(4),ve=s.createTexture();s.bindTexture(B,ve),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<de;Ke++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Ae+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return ve}const xe={};xe[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(s.DEPTH_TEST),c.setFunc(so),ht(!1),Mt(Tm),me(s.CULL_FACE),Xe(nr);function me(B){y[B]!==!0&&(s.enable(B),y[B]=!0)}function Ue(B){y[B]!==!1&&(s.disable(B),y[B]=!1)}function Qe(B,Ae){return g[B]!==Ae?(s.bindFramebuffer(B,Ae),g[B]=Ae,B===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),B===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function tt(B,Ae){let de=w,ze=!1;if(B){de=S.get(Ae),de===void 0&&(de=[],S.set(Ae,de));const Re=B.textures;if(de.length!==Re.length||de[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Ke=Re.length;ve<Ke;ve++)de[ve]=s.COLOR_ATTACHMENT0+ve;de.length=Re.length,ze=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,ze=!0);ze&&s.drawBuffers(de)}function Lt(B){return b!==B?(s.useProgram(B),b=B,!0):!1}const Ee={[rs]:s.FUNC_ADD,[o_]:s.FUNC_SUBTRACT,[a_]:s.FUNC_REVERSE_SUBTRACT};Ee[l_]=s.MIN,Ee[u_]=s.MAX;const ke={[c_]:s.ZERO,[f_]:s.ONE,[d_]:s.SRC_COLOR,[Nf]:s.SRC_ALPHA,[__]:s.SRC_ALPHA_SATURATE,[g_]:s.DST_COLOR,[p_]:s.DST_ALPHA,[h_]:s.ONE_MINUS_SRC_COLOR,[Uf]:s.ONE_MINUS_SRC_ALPHA,[v_]:s.ONE_MINUS_DST_COLOR,[m_]:s.ONE_MINUS_DST_ALPHA,[x_]:s.CONSTANT_COLOR,[y_]:s.ONE_MINUS_CONSTANT_COLOR,[S_]:s.CONSTANT_ALPHA,[M_]:s.ONE_MINUS_CONSTANT_ALPHA};function Xe(B,Ae,de,ze,Re,ve,Ke,ut,kt,Ct){if(B===nr){_===!0&&(Ue(s.BLEND),_=!1);return}if(_===!1&&(me(s.BLEND),_=!0),B!==s_){if(B!==x||Ct!==j){if((C!==rs||z!==rs)&&(s.blendEquation(s.FUNC_ADD),C=rs,z=rs),Ct)switch(B){case io:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFunc(s.ONE,s.ONE);break;case Am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",B);break}else switch(B){case io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Am:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",B);break}L=null,P=null,D=null,F=null,T.set(0,0,0),U=0,x=B,j=Ct}return}Re=Re||Ae,ve=ve||de,Ke=Ke||ze,(Ae!==C||Re!==z)&&(s.blendEquationSeparate(Ee[Ae],Ee[Re]),C=Ae,z=Re),(de!==L||ze!==P||ve!==D||Ke!==F)&&(s.blendFuncSeparate(ke[de],ke[ze],ke[ve],ke[Ke]),L=de,P=ze,D=ve,F=Ke),(ut.equals(T)===!1||kt!==U)&&(s.blendColor(ut.r,ut.g,ut.b,kt),T.copy(ut),U=kt),x=B,j=!1}function Pe(B,Ae){B.side===Di?Ue(s.CULL_FACE):me(s.CULL_FACE);let de=B.side===Un;Ae&&(de=!de),ht(de),B.blending===io&&B.transparent===!1?Xe(nr):Xe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);const ze=B.stencilWrite;d.setTest(ze),ze&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),G(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(B){O!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),O=B)}function Mt(B){B!==n_?(me(s.CULL_FACE),B!==$&&(B===Tm?s.cullFace(s.BACK):B===i_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),$=B}function Zt(B){B!==ue&&(X&&s.lineWidth(B),ue=B)}function G(B,Ae,de){B?(me(s.POLYGON_OFFSET_FILL),(ce!==Ae||H!==de)&&(ce=Ae,H=de,c.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,de))):Ue(s.POLYGON_OFFSET_FILL)}function Pt(B){B?me(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function pt(B){B===void 0&&(B=s.TEXTURE0+ne-1),se!==B&&(s.activeTexture(B),se=B)}function It(B,Ae,de){de===void 0&&(se===null?de=s.TEXTURE0+ne-1:de=se);let ze=N[de];ze===void 0&&(ze={type:void 0,texture:void 0},N[de]=ze),(ze.type!==B||ze.texture!==Ae)&&(se!==de&&(s.activeTexture(de),se=de),s.bindTexture(B,Ae||xe[B]),ze.type=B,ze.texture=Ae)}function Ie(){const B=N[se];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Gt(){try{s.compressedTexImage2D(...arguments)}catch(B){Et("WebGLState:",B)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(B){Et("WebGLState:",B)}}function M(){try{s.texSubImage2D(...arguments)}catch(B){Et("WebGLState:",B)}}function K(){try{s.texSubImage3D(...arguments)}catch(B){Et("WebGLState:",B)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Et("WebGLState:",B)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Et("WebGLState:",B)}}function Me(){try{s.texStorage2D(...arguments)}catch(B){Et("WebGLState:",B)}}function Le(){try{s.texStorage3D(...arguments)}catch(B){Et("WebGLState:",B)}}function fe(){try{s.texImage2D(...arguments)}catch(B){Et("WebGLState:",B)}}function pe(){try{s.texImage3D(...arguments)}catch(B){Et("WebGLState:",B)}}function Be(B){return v[B]!==void 0?v[B]:s.getParameter(B)}function Ge(B,Ae){v[B]!==Ae&&(s.pixelStorei(B,Ae),v[B]=Ae)}function be(B){We.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),We.copy(B))}function we(B){Ne.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Ne.copy(B))}function st(B,Ae){let de=m.get(Ae);de===void 0&&(de=new WeakMap,m.set(Ae,de));let ze=de.get(B);ze===void 0&&(ze=s.getUniformBlockIndex(Ae,B.name),de.set(B,ze))}function lt(B,Ae){const ze=m.get(Ae).get(B);p.get(Ae)!==ze&&(s.uniformBlockBinding(Ae,ze,B.__bindingPointIndex),p.set(Ae,ze))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},v={},se=null,N={},g={},S=new WeakMap,w=[],b=null,_=!1,x=null,C=null,L=null,P=null,z=null,D=null,F=null,T=new xt(0,0,0),U=0,j=!1,O=null,$=null,ue=null,ce=null,H=null,We.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:me,disable:Ue,bindFramebuffer:Qe,drawBuffers:tt,useProgram:Lt,setBlending:Xe,setMaterial:Pe,setFlipSided:ht,setCullFace:Mt,setLineWidth:Zt,setPolygonOffset:G,setScissorTest:Pt,activeTexture:pt,bindTexture:It,unbindTexture:Ie,compressedTexImage2D:Gt,compressedTexImage3D:R,texImage2D:fe,texImage3D:pe,pixelStorei:Ge,getParameter:Be,updateUBOMapping:st,uniformBlockBinding:lt,texStorage2D:Me,texStorage3D:Le,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:be,viewport:we,reset:vt}}function f1(s,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,y=new WeakMap,v=new Set;let g;const S=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,M){return w?new OffscreenCanvas(R,M):ru("canvas")}function _(R,M,K){let he=1;const ge=Gt(R);if((ge.width>K||ge.height>K)&&(he=K/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Me=Math.floor(he*ge.width),Le=Math.floor(he*ge.height);g===void 0&&(g=b(Me,Le));const fe=M?b(Me,Le):g;return fe.width=Me,fe.height=Le,fe.getContext("2d").drawImage(R,0,0,Me,Le),ot("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Le+")."),fe}else return"data"in R&&ot("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),R;return R}function x(R){return R.generateMipmaps}function C(R){s.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(R,M,K,he,ge,Me=!1){if(R!==null){if(s[R]!==void 0)return s[R];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Le;he&&(Le=e.get("EXT_texture_norm16"),Le||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=M;if(M===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8),K===s.UNSIGNED_SHORT&&Le&&(fe=Le.R16_EXT),K===s.SHORT&&Le&&(fe=Le.R16_SNORM_EXT)),M===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),M===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8),K===s.UNSIGNED_SHORT&&Le&&(fe=Le.RG16_EXT),K===s.SHORT&&Le&&(fe=Le.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),M===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),M===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),M===s.RGB&&(K===s.UNSIGNED_SHORT&&Le&&(fe=Le.RGB16_EXT),K===s.SHORT&&Le&&(fe=Le.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),M===s.RGBA){const pe=Me?iu:wt.getTransfer(ge);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=pe===Ft?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Le&&(fe=Le.RGBA16_EXT),K===s.SHORT&&Le&&(fe=Le.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function z(R,M){let K;return R?M===null||M===Oi||M===ca?K=s.DEPTH24_STENCIL8:M===Ii?K=s.DEPTH32F_STENCIL8:M===ua&&(K=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===ca?K=s.DEPTH_COMPONENT24:M===Ii?K=s.DEPTH_COMPONENT32F:M===ua&&(K=s.DEPTH_COMPONENT16),K}function D(R,M){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function F(R){const M=R.target;M.removeEventListener("dispose",F),U(M),M.isVideoTexture&&y.delete(M),M.isHTMLTexture&&v.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),O(M)}function U(R){const M=r.get(R);if(M.__webglInit===void 0)return;const K=R.source,he=S.get(K);if(he){const ge=he[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&j(R),Object.keys(he).length===0&&S.delete(K)}r.remove(R)}function j(R){const M=r.get(R);s.deleteTexture(M.__webglTexture);const K=R.source,he=S.get(K);delete he[M.__cacheKey],c.memory.textures--}function O(R){const M=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let ge=0;ge<M.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=R.textures;for(let he=0,ge=K.length;he<ge;he++){const Me=r.get(K[he]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(K[he])}r.remove(R)}let $=0;function ue(){$=0}function ce(){return $}function H(R){$=R}function ne(){const R=$;return R>=a.maxTextures&&ot("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),$+=1,R}function X(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const K=r.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const he=R.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(K,R,M);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+M)}function re(R,M){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Ue(K,R,M);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+M)}function se(R,M){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Ue(K,R,M);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+M)}function N(R,M){const K=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&K.__version!==R.version){Qe(K,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+M)}const J={[Vf]:s.REPEAT,[tr]:s.CLAMP_TO_EDGE,[Wf]:s.MIRRORED_REPEAT},Fe={[xn]:s.NEAREST,[T_]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[Qc]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},We={[C_]:s.NEVER,[I_]:s.ALWAYS,[R_]:s.LESS,[zd]:s.LEQUAL,[P_]:s.EQUAL,[Gd]:s.GEQUAL,[D_]:s.GREATER,[L_]:s.NOTEQUAL};function Ne(R,M){if(M.type===Ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===Qc||M.magFilter===_l||M.magFilter===os||M.minFilter===bn||M.minFilter===Qc||M.minFilter===_l||M.minFilter===os)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,J[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Fe[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Fe[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,We[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xn||M.minFilter!==_l&&M.minFilter!==os||M.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ae(R,M){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",F));const he=M.source;let ge=S.get(he);ge===void 0&&(ge={},S.set(he,ge));const Me=X(M);if(Me!==R.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ge[Me].usedTimes++;const Le=ge[R.__cacheKey];Le!==void 0&&(ge[R.__cacheKey].usedTimes--,Le.usedTimes===0&&j(M)),R.__cacheKey=Me,R.__webglTexture=ge[Me].texture}return K}function xe(R,M,K){return Math.floor(Math.floor(R/K)/M)}function me(R,M,K,he){const Me=R.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,K,he,M.data);else{Me.sort((Ge,be)=>Ge.start-be.start);let Le=0;for(let Ge=1;Ge<Me.length;Ge++){const be=Me[Le],we=Me[Ge],st=be.start+be.count,lt=xe(we.start,M.width,4),vt=xe(be.start,M.width,4);we.start<=st+1&&lt===vt&&xe(we.start+we.count-1,M.width,4)===lt?be.count=Math.max(be.count,we.start+we.count-be.start):(++Le,Me[Le]=we)}Me.length=Le+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Be=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,be=Me.length;Ge<be;Ge++){const we=Me[Ge],st=Math.floor(we.start/4),lt=Math.ceil(we.count/4),vt=st%M.width,B=Math.floor(st/M.width),Ae=lt,de=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,vt,B,Ae,de,K,he,M.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function Ue(R,M,K){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const ge=ae(R,M),Me=M.source;t.bindTexture(he,R.__webglTexture,s.TEXTURE0+K);const Le=r.get(Me);if(Me.version!==Le.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const de=wt.getPrimaries(wt.workingColorSpace),ze=M.colorSpace===Ir?null:wt.getPrimaries(M.colorSpace),Re=M.colorSpace===Ir||de===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let pe=_(M.image,!1,a.maxTextureSize);pe=Ie(M,pe);const Be=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let be=P(M.internalFormat,Be,Ge,M.normalized,M.colorSpace,M.isVideoTexture);Ne(he,M);let we;const st=M.mipmaps,lt=M.isVideoTexture!==!0,vt=Le.__version===void 0||ge===!0,B=Me.dataReady,Ae=D(M,pe);if(M.isDepthTexture)be=z(M.format===as,M.type),vt&&(lt?t.texStorage2D(s.TEXTURE_2D,1,be,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,be,pe.width,pe.height,0,Be,Ge,null));else if(M.isDataTexture)if(st.length>0){lt&&vt&&t.texStorage2D(s.TEXTURE_2D,Ae,be,st[0].width,st[0].height);for(let de=0,ze=st.length;de<ze;de++)we=st[de],lt?B&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,we.width,we.height,Be,Ge,we.data):t.texImage2D(s.TEXTURE_2D,de,be,we.width,we.height,0,Be,Ge,we.data);M.generateMipmaps=!1}else lt?(vt&&t.texStorage2D(s.TEXTURE_2D,Ae,be,pe.width,pe.height),B&&me(M,pe,Be,Ge)):t.texImage2D(s.TEXTURE_2D,0,be,pe.width,pe.height,0,Be,Ge,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){lt&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,be,st[0].width,st[0].height,pe.depth);for(let de=0,ze=st.length;de<ze;de++)if(we=st[de],M.format!==yi)if(Be!==null)if(lt){if(B)if(M.layerUpdates.size>0){const Re=ag(we.width,we.height,M.format,M.type);for(const ve of M.layerUpdates){const Ke=we.data.subarray(ve*Re/we.data.BYTES_PER_ELEMENT,(ve+1)*Re/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,ve,we.width,we.height,1,Be,Ke)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,pe.depth,Be,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,be,we.width,we.height,pe.depth,0,we.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,pe.depth,Be,Ge,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,be,we.width,we.height,pe.depth,0,Be,Ge,we.data)}else{lt&&vt&&t.texStorage2D(s.TEXTURE_2D,Ae,be,st[0].width,st[0].height);for(let de=0,ze=st.length;de<ze;de++)we=st[de],M.format!==yi?Be!==null?lt?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,we.width,we.height,Be,we.data):t.compressedTexImage2D(s.TEXTURE_2D,de,be,we.width,we.height,0,we.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?B&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,we.width,we.height,Be,Ge,we.data):t.texImage2D(s.TEXTURE_2D,de,be,we.width,we.height,0,Be,Ge,we.data)}else if(M.isDataArrayTexture)if(lt){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,be,pe.width,pe.height,pe.depth),B)if(M.layerUpdates.size>0){const de=ag(pe.width,pe.height,M.format,M.type);for(const ze of M.layerUpdates){const Re=pe.data.subarray(ze*de/pe.data.BYTES_PER_ELEMENT,(ze+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,pe.width,pe.height,1,Be,Ge,Re)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Be,Ge,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,pe.width,pe.height,pe.depth,0,Be,Ge,pe.data);else if(M.isData3DTexture)lt?(vt&&t.texStorage3D(s.TEXTURE_3D,Ae,be,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Be,Ge,pe.data)):t.texImage3D(s.TEXTURE_3D,0,be,pe.width,pe.height,pe.depth,0,Be,Ge,pe.data);else if(M.isFramebufferTexture){if(vt)if(lt)t.texStorage2D(s.TEXTURE_2D,Ae,be,pe.width,pe.height);else{let de=pe.width,ze=pe.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(s.TEXTURE_2D,Re,be,de,ze,0,Be,Ge,null),de>>=1,ze>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),v.add(M),de.onpaint=ut=>{const kt=ut.changedElements;for(const Ct of v)kt.includes(Ct.image)&&(Ct.needsUpdate=!0)},de.requestPaint();return}const ze=0,Re=s.RGBA,ve=s.RGBA,Ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ze,Re,ve,Ke,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(st.length>0){if(lt&&vt){const de=Gt(st[0]);t.texStorage2D(s.TEXTURE_2D,Ae,be,de.width,de.height)}for(let de=0,ze=st.length;de<ze;de++)we=st[de],lt?B&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Be,Ge,we):t.texImage2D(s.TEXTURE_2D,de,be,Be,Ge,we);M.generateMipmaps=!1}else if(lt){if(vt){const de=Gt(pe);t.texStorage2D(s.TEXTURE_2D,Ae,be,de.width,de.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Ge,pe)}else t.texImage2D(s.TEXTURE_2D,0,be,Be,Ge,pe);x(M)&&C(he),Le.__version=Me.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Qe(R,M,K){if(M.image.length!==6)return;const he=ae(R,M),ge=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+K);const Me=r.get(ge);if(ge.version!==Me.__version||he===!0){t.activeTexture(s.TEXTURE0+K);const Le=wt.getPrimaries(wt.workingColorSpace),fe=M.colorSpace===Ir?null:wt.getPrimaries(M.colorSpace),pe=M.colorSpace===Ir||Le===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,be=[];for(let ve=0;ve<6;ve++)!Be&&!Ge?be[ve]=_(M.image[ve],!0,a.maxCubemapSize):be[ve]=Ge?M.image[ve].image:M.image[ve],be[ve]=Ie(M,be[ve]);const we=be[0],st=l.convert(M.format,M.colorSpace),lt=l.convert(M.type),vt=P(M.internalFormat,st,lt,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Ae=Me.__version===void 0||he===!0,de=ge.dataReady;let ze=D(M,we);Ne(s.TEXTURE_CUBE_MAP,M);let Re;if(Be){B&&Ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,vt,we.width,we.height);for(let ve=0;ve<6;ve++){Re=be[ve].mipmaps;for(let Ke=0;Ke<Re.length;Ke++){const ut=Re[Ke];M.format!==yi?st!==null?B?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,0,0,ut.width,ut.height,st,ut.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,vt,ut.width,ut.height,0,ut.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,0,0,ut.width,ut.height,st,lt,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,vt,ut.width,ut.height,0,st,lt,ut.data)}}}else{if(Re=M.mipmaps,B&&Ae){Re.length>0&&ze++;const ve=Gt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,vt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ge){B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,be[ve].width,be[ve].height,st,lt,be[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,vt,be[ve].width,be[ve].height,0,st,lt,be[ve].data);for(let Ke=0;Ke<Re.length;Ke++){const kt=Re[Ke].image[ve].image;B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,0,0,kt.width,kt.height,st,lt,kt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,vt,kt.width,kt.height,0,st,lt,kt.data)}}else{B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,st,lt,be[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,vt,st,lt,be[ve]);for(let Ke=0;Ke<Re.length;Ke++){const ut=Re[Ke];B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,0,0,st,lt,ut.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,vt,st,lt,ut.image[ve])}}}x(M)&&C(s.TEXTURE_CUBE_MAP),Me.__version=ge.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function tt(R,M,K,he,ge,Me){const Le=l.convert(K.format,K.colorSpace),fe=l.convert(K.type),pe=P(K.internalFormat,Le,fe,K.normalized,K.colorSpace),Be=r.get(M),Ge=r.get(K);if(Ge.__renderTarget=M,!Be.__hasExternalTextures){const be=Math.max(1,M.width>>Me),we=Math.max(1,M.height>>Me);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,pe,be,we,M.depth,0,Le,fe,null):t.texImage2D(ge,Me,pe,be,we,0,Le,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),pt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,Ge.__webglTexture,0,Pt(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,Ge.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(R,M,K){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const he=M.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=z(M.stencilBuffer,ge),Le=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(M),Me,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(M),Me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Me,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,R)}else{const he=M.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],Le=l.convert(Me.format,Me.colorSpace),fe=l.convert(Me.type),pe=P(Me.internalFormat,Le,fe,Me.normalized,Me.colorSpace);pt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(M),pe,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(M),pe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,pe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(R,M,K){const he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M.depthTexture);const Be=l.convert(M.depthTexture.format),Ge=l.convert(M.depthTexture.type);let be;M.depthTexture.format===or?be=s.DEPTH_COMPONENT24:M.depthTexture.format===as&&(be=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,be,M.width,M.height,0,Be,Ge,null)}}else Y(M.depthTexture,0);const Me=ge.__webglTexture,Le=Pt(M),fe=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,pe=M.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===or)pt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Me,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Me,0);else if(M.depthTexture.format===as)pt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Me,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Me,0);else throw new Error("Unknown depthTexture format")}function ke(R){const M=r.get(R),K=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const he=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=he}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let he=0;he<6;he++)Ee(M.__webglFramebuffer[he],R,he);else{const he=R.texture.mipmaps;he&&he.length>0?Ee(M.__webglFramebuffer[0],R,0):Ee(M.__webglFramebuffer,R,0)}else if(K){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),Lt(M.__webglDepthbuffer[he],R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}else{const he=R.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Lt(M.__webglDepthbuffer,R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(R,M,K){const he=r.get(R);M!==void 0&&tt(he.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ke(R)}function Pe(R){const M=R.texture,K=r.get(R),he=r.get(M);R.addEventListener("dispose",T);const ge=R.textures,Me=R.isWebGLCubeRenderTarget===!0,Le=ge.length>1;if(Le||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,c.memory.textures++),Me){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let pe=0;pe<M.mipmaps.length;pe++)K.__webglFramebuffer[fe][pe]=s.createFramebuffer()}else K.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)K.__webglFramebuffer[fe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Le)for(let fe=0,pe=ge.length;fe<pe;fe++){const Be=r.get(ge[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),c.memory.textures++)}if(R.samples>0&&pt(R)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const pe=ge[fe];K.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const Be=l.convert(pe.format,pe.colorSpace),Ge=l.convert(pe.type),be=P(pe.internalFormat,Be,Ge,pe.normalized,pe.colorSpace,R.isXRRenderTarget===!0),we=Pt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,be,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)tt(K.__webglFramebuffer[fe][pe],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else tt(K.__webglFramebuffer[fe],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(M)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let fe=0,pe=ge.length;fe<pe;fe++){const Be=ge[fe],Ge=r.get(Be);let be=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,Ge.__webglTexture),Ne(be,Be),tt(K.__webglFramebuffer,R,Be,s.COLOR_ATTACHMENT0+fe,be,0),x(Be)&&C(be)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,he.__webglTexture),Ne(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)tt(K.__webglFramebuffer[pe],R,M,s.COLOR_ATTACHMENT0,fe,pe);else tt(K.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,fe,0);x(M)&&C(fe),t.unbindTexture()}R.depthBuffer&&ke(R)}function ht(R){const M=R.textures;for(let K=0,he=M.length;K<he;K++){const ge=M[K];if(x(ge)){const Me=L(R),Le=r.get(ge).__webglTexture;t.bindTexture(Me,Le),C(Me),t.unbindTexture()}}}const Mt=[],Zt=[];function G(R){if(R.samples>0){if(pt(R)===!1){const M=R.textures,K=R.width,he=R.height;let ge=s.COLOR_BUFFER_BIT;const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(R),fe=M.length>1;if(fe)for(let Be=0;Be<M.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const pe=R.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Be=0;Be<M.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);const Ge=r.get(M[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,K,he,0,0,K,he,ge,s.NEAREST),p===!0&&(Mt.length=0,Zt.length=0,Mt.push(s.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Mt.push(Me),Zt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Be=0;Be<M.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);const Ge=r.get(M[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Pt(R){return Math.min(a.maxSamples,R.samples)}function pt(R){const M=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function It(R){const M=c.render.frame;y.get(R)!==M&&(y.set(R,M),R.update())}function Ie(R,M){const K=R.colorSpace,he=R.format,ge=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==nu&&K!==Ir&&(wt.getTransfer(K)===Ft?(he!==yi||ge!==Zn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",K)),M}function Gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=ue,this.getTextureUnits=ce,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=re,this.setTexture3D=se,this.setTextureCube=N,this.rebindTextures=Xe,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d1(s,e){function t(r,a=Ir){let l;const c=wt.getTransfer(a);if(r===Zn)return s.UNSIGNED_BYTE;if(r===Ud)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Gg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===kg)return s.BYTE;if(r===Bg)return s.SHORT;if(r===ua)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===Oi)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===sr)return s.HALF_FLOAT;if(r===Hg)return s.ALPHA;if(r===Vg)return s.RGB;if(r===yi)return s.RGBA;if(r===or)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===Wg)return s.RED;if(r===Od)return s.RED_INTEGER;if(r===us)return s.RG;if(r===kd)return s.RG_INTEGER;if(r===Bd)return s.RGBA_INTEGER;if(r===Kl||r===$l||r===Zl||r===Jl)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xf||r===jf||r===Yf||r===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Xf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kf||r===$f||r===Zf||r===Jf||r===Qf||r===eu||r===ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Kf||r===$f)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Zf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Jf)return l.COMPRESSED_R11_EAC;if(r===Qf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===eu)return l.COMPRESSED_RG11_EAC;if(r===ed)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===ud||r===cd||r===fd||r===dd||r===hd||r===pd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===td)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===id)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===od)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ad)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ld)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ud)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===md||r===gd||r===vd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===md)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_d||r===xd||r===tu||r===yd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===_d)return l.COMPRESSED_RED_RGTC1_EXT;if(r===xd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ca?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new t0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ki({vertexShader:h1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g1 extends cs{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",p=1,m=null,y=null,v=null,g=null,S=null,w=null;const b=typeof XRWebGLBinding<"u",_=new m1,x={},C=t.getContextAttributes();let L=null,P=null;const z=[],D=[],F=new gt;let T=null;const U=new $n;U.viewport=new Qt;const j=new $n;j.viewport=new Qt;const O=[U,j],$=new Tx;let ue=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let xe=z[ae];return xe===void 0&&(xe=new lf,z[ae]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ae){let xe=z[ae];return xe===void 0&&(xe=new lf,z[ae]=xe),xe.getGripSpace()},this.getHand=function(ae){let xe=z[ae];return xe===void 0&&(xe=new lf,z[ae]=xe),xe.getHandSpace()};function H(ae){const xe=D.indexOf(ae.inputSource);if(xe===-1)return;const me=z[xe];me!==void 0&&(me.update(ae.inputSource,ae.frame,m||c),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ne(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",X);for(let ae=0;ae<z.length;ae++){const xe=D[ae];xe!==null&&(D[ae]=null,z[ae].disconnect(xe))}ue=null,ce=null,_.reset();for(const ae in x)delete x[ae];e.setRenderTarget(L),S=null,g=null,v=null,a=null,P=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",X),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Qe=null;C.depth&&(Qe=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?as:or,Ue=C.stencil?ca:Oi);const tt={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(tt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Fi(g.textureWidth,g.textureHeight,{format:yi,type:Zn,depthTexture:new ao(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Fi(S.framebufferWidth,S.framebufferHeight,{format:yi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(d),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(ae){for(let xe=0;xe<ae.removed.length;xe++){const me=ae.removed[xe],Ue=D.indexOf(me);Ue>=0&&(D[Ue]=null,z[Ue].disconnect(me))}for(let xe=0;xe<ae.added.length;xe++){const me=ae.added[xe];let Ue=D.indexOf(me);if(Ue===-1){for(let tt=0;tt<z.length;tt++)if(tt>=D.length){D.push(me),Ue=tt;break}else if(D[tt]===null){D[tt]=me,Ue=tt;break}if(Ue===-1)break}const Qe=z[Ue];Qe&&Qe.connect(me)}}const Y=new q,re=new q;function se(ae,xe,me){Y.setFromMatrixPosition(xe.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const Ue=Y.distanceTo(re),Qe=xe.projectionMatrix.elements,tt=me.projectionMatrix.elements,Lt=Qe[14]/(Qe[10]-1),Ee=Qe[14]/(Qe[10]+1),ke=(Qe[9]+1)/Qe[5],Xe=(Qe[9]-1)/Qe[5],Pe=(Qe[8]-1)/Qe[0],ht=(tt[8]+1)/tt[0],Mt=Lt*Pe,Zt=Lt*ht,G=Ue/(-Pe+ht),Pt=G*-Pe;if(xe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Pt),ae.translateZ(G),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Qe[10]===-1)ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const pt=Lt+G,It=Ee+G,Ie=Mt-Pt,Gt=Zt+(Ue-Pt),R=ke*Ee/It*pt,M=Xe*Ee/It*pt;ae.projectionMatrix.makePerspective(Ie,Gt,R,M,pt,It),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function N(ae,xe){xe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(xe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let xe=ae.near,me=ae.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(me=_.depthFar)),$.near=j.near=U.near=xe,$.far=j.far=U.far=me,(ue!==$.near||ce!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),ue=$.near,ce=$.far),$.layers.mask=ae.layers.mask|6,U.layers.mask=$.layers.mask&-5,j.layers.mask=$.layers.mask&-3;const Ue=ae.parent,Qe=$.cameras;N($,Ue);for(let tt=0;tt<Qe.length;tt++)N(Qe[tt],Ue);Qe.length===2?se($,U,j):$.projectionMatrix.copy(U.projectionMatrix),J(ae,$,Ue)};function J(ae,xe,me){me===null?ae.matrix.copy(xe.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(xe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=wd*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh($)},this.getCameraTexture=function(ae){return x[ae]};let Fe=null;function We(ae,xe){if(y=xe.getViewerPose(m||c),w=xe,y!==null){const me=y.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ue=!1;me.length!==$.cameras.length&&($.cameras.length=0,Ue=!0);for(let Ee=0;Ee<me.length;Ee++){const ke=me[Ee];let Xe=null;if(S!==null)Xe=S.getViewport(ke);else{const ht=v.getViewSubImage(g,ke);Xe=ht.viewport,Ee===0&&(e.setRenderTargetTextures(P,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(P))}let Pe=O[Ee];Pe===void 0&&(Pe=new $n,Pe.layers.enable(Ee),Pe.viewport=new Qt,O[Ee]=Pe),Pe.matrix.fromArray(ke.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ke.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ee===0&&($.matrix.copy(Pe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ue===!0&&$.cameras.push(Pe)}const Qe=a.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const Ee=v.getDepthInformation(me[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(Ee,a.renderState)}if(Qe&&Qe.includes("camera-access")&&b){e.state.unbindTexture(),v=r.getBinding();for(let Ee=0;Ee<me.length;Ee++){const ke=me[Ee].camera;if(ke){let Xe=x[ke];Xe||(Xe=new t0,x[ke]=Xe);const Pe=v.getCameraImage(ke);Xe.sourceTexture=Pe}}}}for(let me=0;me<z.length;me++){const Ue=D[me],Qe=z[me];Ue!==null&&Qe!==void 0&&Qe.update(Ue,xe,m||c)}Fe&&Fe(ae,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),w=null}const Ne=new s0;Ne.setAnimationLoop(We),this.setAnimationLoop=function(ae){Fe=ae},this.dispose=function(){}}}const v1=new Xt,d0=new dt;d0.set(-1,0,0,0,1,0,0,0,1);function _1(s,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function r(_,x){x.color.getRGB(_.fogColor.value,n0(s)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function a(_,x,C,L,P){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(_,x):x.isMeshLambertMaterial?(l(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(_,x),v(_,x)):x.isMeshPhongMaterial?(l(_,x),y(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(_,x),g(_,x),x.isMeshPhysicalMaterial&&S(_,x,P)):x.isMeshMatcapMaterial?(l(_,x),w(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),b(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(c(_,x),x.isLineDashedMaterial&&d(_,x)):x.isPointsMaterial?p(_,x,C,L):x.isSpriteMaterial?m(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Un&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Un&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const C=e.get(x),L=C.envMap,P=C.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(d0),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function c(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function d(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function p(_,x,C,L){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*C,_.scale.value=L*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function m(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function y(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function v(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function g(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,C){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,x){x.matcap&&(_.matcap.value=x.matcap)}function b(_,x){const C=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function x1(s,e,t,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function m(C,L){let P=a[C.id];P===void 0&&(w(C),P=y(C),a[C.id]=P,C.addEventListener("dispose",_));const z=L.program;r.updateUBOMapping(C,z);const D=e.render.frame;l[C.id]!==D&&(g(C),l[C.id]=D)}function y(C){const L=v();C.__bindingPointIndex=L;const P=s.createBuffer(),z=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function v(){for(let C=0;C<d;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=a[C.id],P=C.uniforms,z=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,F=P.length;D<F;D++){const T=Array.isArray(P[D])?P[D]:[P[D]];for(let U=0,j=T.length;U<j;U++){const O=T[U];if(S(O,D,U,z)===!0){const $=O.__offset,ue=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let H=0;H<ue.length;H++){const ne=ue[H],X=b(ne);typeof ne=="number"||typeof ne=="boolean"?(O.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,$+ce,O.__data)):ne.isMatrix3?(O.__data[0]=ne.elements[0],O.__data[1]=ne.elements[1],O.__data[2]=ne.elements[2],O.__data[3]=0,O.__data[4]=ne.elements[3],O.__data[5]=ne.elements[4],O.__data[6]=ne.elements[5],O.__data[7]=0,O.__data[8]=ne.elements[6],O.__data[9]=ne.elements[7],O.__data[10]=ne.elements[8],O.__data[11]=0):ArrayBuffer.isView(ne)?O.__data.set(new ne.constructor(ne.buffer,ne.byteOffset,O.__data.length)):(ne.toArray(O.__data,ce),ce+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,L,P,z){const D=C.value,F=L+"_"+P;if(z[F]===void 0)return typeof D=="number"||typeof D=="boolean"?z[F]=D:ArrayBuffer.isView(D)?z[F]=D.slice():z[F]=D.clone(),!0;{const T=z[F];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return z[F]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(T.equals(D)===!1)return T.copy(D),!0}}return!1}function w(C){const L=C.uniforms;let P=0;const z=16;for(let F=0,T=L.length;F<T;F++){const U=Array.isArray(L[F])?L[F]:[L[F]];for(let j=0,O=U.length;j<O;j++){const $=U[j],ue=Array.isArray($.value)?$.value:[$.value];for(let ce=0,H=ue.length;ce<H;ce++){const ne=ue[ce],X=b(ne),Y=P%z,re=Y%X.boundary,se=Y+re;P+=re,se!==0&&z-se<X.storage&&(P+=z-se),$.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=X.storage}}}const D=P%z;return D>0&&(P+=z-D),C.__size=P,C.__cache={},this}function b(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",C),L}function _(C){const L=C.target;L.removeEventListener("dispose",_);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function x(){for(const C in a)s.deleteBuffer(a[C]);c=[],a={},l={}}return{bind:p,update:m,dispose:x}}const y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function S1(){return Ri===null&&(Ri=new ox(y1,16,16,us,sr),Ri.name="DFG_LUT",Ri.minFilter=bn,Ri.magFilter=bn,Ri.wrapS=tr,Ri.wrapT=tr,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class M1{constructor(e={}){const{canvas:t=U_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Zn}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const b=S,_=new Set([Bd,kd,Od]),x=new Set([Zn,Oi,ua,ca,Ud,Fd]),C=new Uint32Array(4),L=new Int32Array(4),P=new q;let z=null,D=null;const F=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let O=!1,$=null;this._outputColorSpace=ai;let ue=0,ce=0,H=null,ne=-1,X=null;const Y=new Qt,re=new Qt;let se=null;const N=new xt(0);let J=0,Fe=t.width,We=t.height,Ne=1,ae=null,xe=null;const me=new Qt(0,0,Fe,We),Ue=new Qt(0,0,Fe,We);let Qe=!1;const tt=new Wd;let Lt=!1,Ee=!1;const ke=new Xt,Xe=new q,Pe=new Qt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Zt(){return H===null?Ne:1}let G=r;function Pt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:y,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dd}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",ut,!1),G===null){const W="webgl2";if(G=Pt(W,A),G===null)throw Pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let pt,It,Ie,Gt,R,M,K,he,ge,Me,Le,fe,pe,Be,Ge,be,we,st,lt,vt,B,Ae,de;function ze(){pt=new SM(G),pt.init(),B=new d1(G,pt),It=new hM(G,pt,e,B),Ie=new c1(G,pt),It.reversedDepthBuffer&&g&&Ie.buffers.depth.setReversed(!0),Gt=new wM(G),R=new $E,M=new f1(G,pt,Ie,R,It,B,Gt),K=new yM(j),he=new Cx(G),Ae=new fM(G,he),ge=new MM(G,he,Gt,Ae),Me=new AM(G,ge,he,Ae,Gt),st=new TM(G,It,M),Ge=new pM(R),Le=new KE(j,K,pt,It,Ae,Ge),fe=new _1(j,R),pe=new JE,Be=new r1(pt),we=new cM(j,K,Ie,Me,w,p),be=new u1(j,Me,It),de=new x1(G,Gt,It,Ie),lt=new dM(G,pt,Gt),vt=new EM(G,pt,Gt),Gt.programs=Le.programs,j.capabilities=It,j.extensions=pt,j.properties=R,j.renderLists=pe,j.shadowMap=be,j.state=Ie,j.info=Gt}ze(),b!==Zn&&(U=new CM(b,t.width,t.height,a,l));const Re=new g1(j,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(Fe,We,!1))},this.getSize=function(A){return A.set(Fe,We)},this.setSize=function(A,W,oe=!0){if(Re.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,We=W,t.width=Math.floor(A*Ne),t.height=Math.floor(W*Ne),oe===!0&&(t.style.width=A+"px",t.style.height=W+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Fe*Ne,We*Ne).floor()},this.setDrawingBufferSize=function(A,W,oe){Fe=A,We=W,Ne=oe,t.width=Math.floor(A*oe),t.height=Math.floor(W*oe),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(b===Zn){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ot("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,W,oe,ee){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,W,oe,ee),Ie.viewport(Y.copy(me).multiplyScalar(Ne).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,W,oe,ee){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,W,oe,ee),Ie.scissor(re.copy(Ue).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){Ie.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,oe=!0){let ee=0;if(A){let Q=!1;if(H!==null){const De=H.texture.format;Q=_.has(De)}if(Q){const De=H.texture.type,je=x.has(De),Ce=we.getClearColor(),$e=we.getClearAlpha(),nt=Ce.r,ct=Ce.g,ft=Ce.b;je?(C[0]=nt,C[1]=ct,C[2]=ft,C[3]=$e,G.clearBufferuiv(G.COLOR,0,C)):(L[0]=nt,L[1]=ct,L[2]=ft,L[3]=$e,G.clearBufferiv(G.COLOR,0,L))}else ee|=G.COLOR_BUFFER_BIT}W&&(ee|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),we.dispose(),pe.dispose(),Be.dispose(),R.dispose(),K.dispose(),Me.dispose(),Ae.dispose(),de.dispose(),Le.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",kr),Re.removeEventListener("sessionend",ds),zi.stop()};function ve(A){A.preventDefault(),su("WebGLRenderer: Context Lost."),O=!0}function Ke(){su("WebGLRenderer: Context Restored."),O=!1;const A=Gt.autoReset,W=be.enabled,oe=be.autoUpdate,ee=be.needsUpdate,Q=be.type;ze(),Gt.autoReset=A,be.enabled=W,be.autoUpdate=oe,be.needsUpdate=ee,be.type=Q}function ut(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function kt(A){const W=A.target;W.removeEventListener("dispose",kt),Ct(W)}function Ct(A){Pn(A),R.remove(A)}function Pn(A){const W=R.get(A).programs;W!==void 0&&(W.forEach(function(oe){Le.releaseProgram(oe)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,oe,ee,Q,De){W===null&&(W=ht);const je=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=va(A,W,oe,ee,Q);Ie.setMaterial(ee,je);let $e=oe.index,nt=1;if(ee.wireframe===!0){if($e=ge.getWireframeAttribute(oe),$e===void 0)return;nt=2}const ct=oe.drawRange,ft=oe.attributes.position;let Je=ct.start*nt,At=(ct.start+ct.count)*nt;De!==null&&(Je=Math.max(Je,De.start*nt),At=Math.min(At,(De.start+De.count)*nt)),$e!==null?(Je=Math.max(Je,0),At=Math.min(At,$e.count)):ft!=null&&(Je=Math.max(Je,0),At=Math.min(At,ft.count));const Bt=At-Je;if(Bt<0||Bt===1/0)return;Ae.setup(Q,ee,Ce,oe,$e);let jt,Nt=lt;if($e!==null&&(jt=he.get($e),Nt=vt,Nt.setIndex(jt)),Q.isMesh)ee.wireframe===!0?(Ie.setLineWidth(ee.wireframeLinewidth*Zt()),Nt.setMode(G.LINES)):Nt.setMode(G.TRIANGLES);else if(Q.isLine){let tn=ee.linewidth;tn===void 0&&(tn=1),Ie.setLineWidth(tn*Zt()),Q.isLineSegments?Nt.setMode(G.LINES):Q.isLineLoop?Nt.setMode(G.LINE_LOOP):Nt.setMode(G.LINE_STRIP)}else Q.isPoints?Nt.setMode(G.POINTS):Q.isSprite&&Nt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const tn=Q._multiDrawStarts,He=Q._multiDrawCounts,gn=Q._multiDrawCount,_t=$e?he.get($e).bytesPerElement:1,Fn=R.get(ee).currentProgram.getUniforms();for(let On=0;On<gn;On++)Fn.setValue(G,"_gl_DrawID",On),Nt.render(tn[On]/_t,He[On])}else if(Q.isInstancedMesh)Nt.renderInstances(Je,Bt,Q.count);else if(oe.isInstancedBufferGeometry){const tn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,He=Math.min(oe.instanceCount,tn);Nt.renderInstances(Je,Bt,He)}else Nt.render(Je,Bt)};function Qn(A,W,oe){A.transparent===!0&&A.side===Di&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,hs(A,W,oe),A.side=rr,A.needsUpdate=!0,hs(A,W,oe),A.side=Di):hs(A,W,oe)}this.compile=function(A,W,oe=null){oe===null&&(oe=A),D=Be.get(oe),D.init(W),T.push(D),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),A!==oe&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights();const ee=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const De=Q.material;if(De)if(Array.isArray(De))for(let je=0;je<De.length;je++){const Ce=De[je];Qn(Ce,oe,Q),ee.add(Ce)}else Qn(De,oe,Q),ee.add(De)}),D=T.pop(),ee},this.compileAsync=function(A,W,oe=null){const ee=this.compile(A,W,oe);return new Promise(Q=>{function De(){if(ee.forEach(function(je){R.get(je).currentProgram.isReady()&&ee.delete(je)}),ee.size===0){Q(A);return}setTimeout(De,10)}pt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Bi=null;function fs(A){Bi&&Bi(A)}function kr(){zi.stop()}function ds(){zi.start()}const zi=new s0;zi.setAnimationLoop(fs),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(A){Bi=A,Re.setAnimationLoop(A),A===null?zi.stop():zi.start()},Re.addEventListener("sessionstart",kr),Re.addEventListener("sessionend",ds),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;$!==null&&$.renderStart(A,W);const oe=Re.enabled===!0&&Re.isPresenting===!0,ee=U!==null&&(H===null||oe)&&U.begin(j,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,W,H),D=Be.get(A,T.length),D.init(W),D.state.textureUnits=M.getTextureUnits(),T.push(D),ke.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(ke,Ni,W.reversedDepth),Ee=this.localClippingEnabled,Lt=Ge.init(this.clippingPlanes,Ee),z=pe.get(A,F.length),z.init(),F.push(z),Re.enabled===!0&&Re.isPresenting===!0){const je=j.xr.getDepthSensingMesh();je!==null&&fo(je,W,-1/0,j.sortObjects)}fo(A,W,0,j.sortObjects),z.finish(),j.sortObjects===!0&&z.sort(ae,xe),Mt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Mt&&we.addToRenderList(z,A),this.info.render.frame++,Lt===!0&&Ge.beginShadows();const Q=D.state.shadowsArray;if(be.render(Q,A,W),Lt===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&U.hasRenderPass())===!1){const je=z.opaque,Ce=z.transmissive;if(D.setupLights(),W.isArrayCamera){const $e=W.cameras;if(Ce.length>0)for(let nt=0,ct=$e.length;nt<ct;nt++){const ft=$e[nt];Mi(je,Ce,A,ft)}Mt&&we.render(A);for(let nt=0,ct=$e.length;nt<ct;nt++){const ft=$e[nt];ma(z,A,ft,ft.viewport)}}else Ce.length>0&&Mi(je,Ce,A,W),Mt&&we.render(A),ma(z,A,W)}H!==null&&ce===0&&(M.updateMultisampleRenderTarget(H),M.updateRenderTargetMipmap(H)),ee&&U.end(j),A.isScene===!0&&A.onAfterRender(j,A,W),Ae.resetDefaultState(),ne=-1,X=null,T.pop(),T.length>0?(D=T[T.length-1],M.setTextureUnits(D.state.textureUnits),Lt===!0&&Ge.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?z=F[F.length-1]:z=null,$!==null&&$.renderEnd()};function fo(A,W,oe,ee){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||tt.intersectsSprite(A)){ee&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ke);const je=Me.update(A),Ce=A.material;Ce.visible&&z.push(A,je,Ce,oe,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||tt.intersectsObject(A))){const je=Me.update(A),Ce=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Pe.copy(je.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(ke)),Array.isArray(Ce)){const $e=je.groups;for(let nt=0,ct=$e.length;nt<ct;nt++){const ft=$e[nt],Je=Ce[ft.materialIndex];Je&&Je.visible&&z.push(A,je,Je,oe,Pe.z,ft)}}else Ce.visible&&z.push(A,je,Ce,oe,Pe.z,null)}}const De=A.children;for(let je=0,Ce=De.length;je<Ce;je++)fo(De[je],W,oe,ee)}function ma(A,W,oe,ee){const{opaque:Q,transmissive:De,transparent:je}=A;D.setupLightsView(oe),Lt===!0&&Ge.setGlobalState(j.clippingPlanes,oe),ee&&Ie.viewport(Y.copy(ee)),Q.length>0&&Br(Q,W,oe),De.length>0&&Br(De,W,oe),je.length>0&&Br(je,W,oe),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Mi(A,W,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ee.id]===void 0){const Je=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ee.id]=new Fi(1,1,{generateMipmaps:!0,type:Je?sr:Zn,minFilter:os,samples:Math.max(4,It.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const De=D.state.transmissionRenderTarget[ee.id],je=ee.viewport||Y;De.setSize(je.z*j.transmissionResolutionScale,je.w*j.transmissionResolutionScale);const Ce=j.getRenderTarget(),$e=j.getActiveCubeFace(),nt=j.getActiveMipmapLevel();j.setRenderTarget(De),j.getClearColor(N),J=j.getClearAlpha(),J<1&&j.setClearColor(16777215,.5),j.clear(),Mt&&we.render(oe);const ct=j.toneMapping;j.toneMapping=Ui;const ft=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),D.setupLightsView(ee),Lt===!0&&Ge.setGlobalState(j.clippingPlanes,ee),Br(A,oe,ee),M.updateMultisampleRenderTarget(De),M.updateRenderTargetMipmap(De),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let At=0,Bt=W.length;At<Bt;At++){const jt=W[At],{object:Nt,geometry:tn,material:He,group:gn}=jt;if(He.side===Di&&Nt.layers.test(ee.layers)){const _t=He.side;He.side=Un,He.needsUpdate=!0,ho(Nt,oe,ee,tn,He,gn),He.side=_t,He.needsUpdate=!0,Je=!0}}Je===!0&&(M.updateMultisampleRenderTarget(De),M.updateRenderTargetMipmap(De))}j.setRenderTarget(Ce,$e,nt),j.setClearColor(N,J),ft!==void 0&&(ee.viewport=ft),j.toneMapping=ct}function Br(A,W,oe){const ee=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,De=A.length;Q<De;Q++){const je=A[Q],{object:Ce,geometry:$e,group:nt}=je;let ct=je.material;ct.allowOverride===!0&&ee!==null&&(ct=ee),Ce.layers.test(oe.layers)&&ho(Ce,W,oe,$e,ct,nt)}}function ho(A,W,oe,ee,Q,De){A.onBeforeRender(j,W,oe,ee,Q,De),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(j,W,oe,ee,A,De),Q.transparent===!0&&Q.side===Di&&Q.forceSinglePass===!1?(Q.side=Un,Q.needsUpdate=!0,j.renderBufferDirect(oe,W,ee,Q,A,De),Q.side=rr,Q.needsUpdate=!0,j.renderBufferDirect(oe,W,ee,Q,A,De),Q.side=Di):j.renderBufferDirect(oe,W,ee,Q,A,De),A.onAfterRender(j,W,oe,ee,Q,De)}function hs(A,W,oe){W.isScene!==!0&&(W=ht);const ee=R.get(A),Q=D.state.lights,De=D.state.shadowsArray,je=Q.state.version,Ce=Le.getParameters(A,Q.state,De,W,oe,D.state.lightProbeGridArray),$e=Le.getProgramCacheKey(Ce);let nt=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;const ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=K.get(A.envMap||ee.environment,ct),ee.envMapRotation=ee.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",kt),nt=new Map,ee.programs=nt);let ft=nt.get($e);if(ft!==void 0){if(ee.currentProgram===ft&&ee.lightsStateVersion===je)return mo(A,Ce),ft}else Ce.uniforms=Le.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,oe,Ce),A.onBeforeCompile(Ce,j),ft=Le.acquireProgram(Ce,$e),nt.set($e,ft),ee.uniforms=Ce.uniforms;const Je=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ge.uniform),mo(A,Ce),ee.needsLights=gu(A),ee.lightsStateVersion=je,ee.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ee.lightProbeGrid=D.state.lightProbeGridArray.length>0,ee.currentProgram=ft,ee.uniformsList=null,ft}function po(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ql.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function mo(A,W){const oe=R.get(A);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function ga(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(W.matrixWorld);for(let oe=0,ee=A.length;oe<ee;oe++){const Q=A[oe];if(Q.texture!==null&&Q.boundingBox.containsPoint(P))return Q}return null}function va(A,W,oe,ee,Q){W.isScene!==!0&&(W=ht),M.resetTextureUnits();const De=W.fog,je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,Ce=H===null?j.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:wt.workingColorSpace,$e=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,nt=K.get(ee.envMap||je,$e),ct=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Je=!!oe.morphAttributes.position,At=!!oe.morphAttributes.normal,Bt=!!oe.morphAttributes.color;let jt=Ui;ee.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(jt=j.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,tn=Nt!==void 0?Nt.length:0,He=R.get(ee),gn=D.state.lights;if(Lt===!0&&(Ee===!0||A!==X)){const Ut=A===X&&ee.id===ne;Ge.setState(ee,A,Ut)}let _t=!1;ee.version===He.__version?(He.needsLights&&He.lightsStateVersion!==gn.state.version||He.outputColorSpace!==Ce||Q.isBatchedMesh&&He.batching===!1||!Q.isBatchedMesh&&He.batching===!0||Q.isBatchedMesh&&He.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&He.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&He.instancing===!1||!Q.isInstancedMesh&&He.instancing===!0||Q.isSkinnedMesh&&He.skinning===!1||!Q.isSkinnedMesh&&He.skinning===!0||Q.isInstancedMesh&&He.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&He.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&He.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&He.instancingMorph===!1&&Q.morphTexture!==null||He.envMap!==nt||ee.fog===!0&&He.fog!==De||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ge.numPlanes||He.numIntersection!==Ge.numIntersection)||He.vertexAlphas!==ct||He.vertexTangents!==ft||He.morphTargets!==Je||He.morphNormals!==At||He.morphColors!==Bt||He.toneMapping!==jt||He.morphTargetsCount!==tn||!!He.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,He.__version=ee.version);let Fn=He.currentProgram;_t===!0&&(Fn=hs(ee,W,Q),$&&ee.isNodeMaterial&&$.onUpdateProgram(ee,Fn,He));let On=!1,yt=!1,Gi=!1;const Dt=Fn.getUniforms(),Ht=He.uniforms;if(Ie.useProgram(Fn.program)&&(On=!0,yt=!0,Gi=!0),ee.id!==ne&&(ne=ee.id,yt=!0),He.needsLights){const Ut=ga(D.state.lightProbeGridArray,Q);He.lightProbeGrid!==Ut&&(He.lightProbeGrid=Ut,yt=!0)}if(On||X!==A){Ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(G,"projectionMatrix",A.projectionMatrix),Dt.setValue(G,"viewMatrix",A.matrixWorldInverse);const ci=Dt.map.cameraPosition;ci!==void 0&&ci.setValue(G,Xe.setFromMatrixPosition(A.matrixWorld)),It.logarithmicDepthBuffer&&Dt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Dt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,yt=!0,Gi=!0)}if(He.needsLights&&(gn.state.directionalShadowMap.length>0&&Dt.setValue(G,"directionalShadowMap",gn.state.directionalShadowMap,M),gn.state.spotShadowMap.length>0&&Dt.setValue(G,"spotShadowMap",gn.state.spotShadowMap,M),gn.state.pointShadowMap.length>0&&Dt.setValue(G,"pointShadowMap",gn.state.pointShadowMap,M)),Q.isSkinnedMesh){Dt.setOptional(G,Q,"bindMatrix"),Dt.setOptional(G,Q,"bindMatrixInverse");const Ut=Q.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Dt.setValue(G,"boneTexture",Ut.boneTexture,M))}Q.isBatchedMesh&&(Dt.setOptional(G,Q,"batchingTexture"),Dt.setValue(G,"batchingTexture",Q._matricesTexture,M),Dt.setOptional(G,Q,"batchingIdTexture"),Dt.setValue(G,"batchingIdTexture",Q._indirectTexture,M),Dt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Dt.setValue(G,"batchingColorTexture",Q._colorsTexture,M));const ui=oe.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&st.update(Q,oe,Fn),(yt||He.receiveShadow!==Q.receiveShadow)&&(He.receiveShadow=Q.receiveShadow,Dt.setValue(G,"receiveShadow",Q.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(Ht.envMapIntensity.value=W.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=S1()),yt){if(Dt.setValue(G,"toneMappingExposure",j.toneMappingExposure),He.needsLights&&mu(Ht,Gi),De&&ee.fog===!0&&fe.refreshFogUniforms(Ht,De),fe.refreshMaterialUniforms(Ht,ee,Ne,We,D.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Ut=He.lightProbeGrid;Ht.probesSH.value=Ut.texture,Ht.probesMin.value.copy(Ut.boundingBox.min),Ht.probesMax.value.copy(Ut.boundingBox.max),Ht.probesResolution.value.copy(Ut.resolution)}Ql.upload(G,po(He),Ht,M)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ql.upload(G,po(He),Ht,M),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Dt.setValue(G,"center",Q.center),Dt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Dt.setValue(G,"normalMatrix",Q.normalMatrix),Dt.setValue(G,"modelMatrix",Q.matrixWorld),ee.uniformsGroups!==void 0){const Ut=ee.uniformsGroups;for(let ci=0,Ei=Ut.length;ci<Ei;ci++){const zr=Ut[ci];de.update(zr,Fn),de.bind(zr,Fn)}}return Fn}function mu(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function gu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,oe){const ee=R.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=W,R.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const oe=R.get(A);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const qt=G.createFramebuffer();this.setRenderTarget=function(A,W=0,oe=0){H=A,ue=W,ce=oe;let ee=null,Q=!1,De=!1;if(A){const Ce=R.get(A);if(Ce.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(G.FRAMEBUFFER,Ce.__webglFramebuffer),Y.copy(A.viewport),re.copy(A.scissor),se=A.scissorTest,Ie.viewport(Y),Ie.scissor(re),Ie.setScissorTest(se),ne=-1;return}else if(Ce.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Ce.__hasExternalTextures)M.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ct=A.depthTexture;if(Ce.__boundDepthTexture!==ct){if(ct!==null&&R.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const nt=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?ee=nt[W][oe]:ee=nt[W],Q=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ee=R.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?ee=nt[oe]:ee=nt,Y.copy(A.viewport),re.copy(A.scissor),se=A.scissorTest}else Y.copy(me).multiplyScalar(Ne).floor(),re.copy(Ue).multiplyScalar(Ne).floor(),se=Qe;if(oe!==0&&(ee=qt),Ie.bindFramebuffer(G.FRAMEBUFFER,ee)&&Ie.drawBuffers(A,ee),Ie.viewport(Y),Ie.scissor(re),Ie.setScissorTest(se),Q){const Ce=R.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,oe)}else if(De){const Ce=W;for(let $e=0;$e<A.textures.length;$e++){const nt=R.get(A.textures[$e]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+$e,nt.__webglTexture,oe,Ce)}}else if(A!==null&&oe!==0){const Ce=R.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ce.__webglTexture,oe)}ne=-1},this.readRenderTargetPixels=function(A,W,oe,ee,Q,De,je,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){Ie.bindFramebuffer(G.FRAMEBUFFER,$e);try{const nt=A.textures[Ce],ct=nt.format,ft=nt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!It.textureFormatReadable(ct)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ft)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ee&&oe>=0&&oe<=A.height-Q&&G.readPixels(W,oe,ee,Q,B.convert(ct),B.convert(ft),De)}finally{const nt=H!==null?R.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,W,oe,ee,Q,De,je,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e)if(W>=0&&W<=A.width-ee&&oe>=0&&oe<=A.height-Q){Ie.bindFramebuffer(G.FRAMEBUFFER,$e);const nt=A.textures[Ce],ct=nt.format,ft=nt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!It.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Je),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(W,oe,ee,Q,B.convert(ct),B.convert(ft),0);const At=H!==null?R.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,At);const Bt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await F_(G,Bt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Je),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.deleteBuffer(Je),G.deleteSync(Bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,oe=0){const ee=Math.pow(2,-oe),Q=Math.floor(A.image.width*ee),De=Math.floor(A.image.height*ee),je=W!==null?W.x:0,Ce=W!==null?W.y:0;M.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,je,Ce,Q,De),Ie.unbindTexture()};const vu=G.createFramebuffer(),go=G.createFramebuffer();this.copyTextureToTexture=function(A,W,oe=null,ee=null,Q=0,De=0){let je,Ce,$e,nt,ct,ft,Je,At,Bt;const jt=A.isCompressedTexture?A.mipmaps[De]:A.image;if(oe!==null)je=oe.max.x-oe.min.x,Ce=oe.max.y-oe.min.y,$e=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,ct=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const Ht=Math.pow(2,-Q);je=Math.floor(jt.width*Ht),Ce=Math.floor(jt.height*Ht),A.isDataArrayTexture?$e=jt.depth:A.isData3DTexture?$e=Math.floor(jt.depth*Ht):$e=1,nt=0,ct=0,ft=0}ee!==null?(Je=ee.x,At=ee.y,Bt=ee.z):(Je=0,At=0,Bt=0);const Nt=B.convert(W.format),tn=B.convert(W.type);let He;W.isData3DTexture?(M.setTexture3D(W,0),He=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(M.setTexture2DArray(W,0),He=G.TEXTURE_2D_ARRAY):(M.setTexture2D(W,0),He=G.TEXTURE_2D),Ie.activeTexture(G.TEXTURE0),Ie.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),Ie.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ie.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const gn=Ie.getParameter(G.UNPACK_ROW_LENGTH),_t=Ie.getParameter(G.UNPACK_IMAGE_HEIGHT),Fn=Ie.getParameter(G.UNPACK_SKIP_PIXELS),On=Ie.getParameter(G.UNPACK_SKIP_ROWS),yt=Ie.getParameter(G.UNPACK_SKIP_IMAGES);Ie.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),Ie.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),Ie.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),Ie.pixelStorei(G.UNPACK_SKIP_ROWS,ct),Ie.pixelStorei(G.UNPACK_SKIP_IMAGES,ft);const Gi=A.isDataArrayTexture||A.isData3DTexture,Dt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Ht=R.get(A),ui=R.get(W),Ut=R.get(Ht.__renderTarget),ci=R.get(ui.__renderTarget);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Ei=0;Ei<$e;Ei++)Gi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,R.get(A).__webglTexture,Q,ft+Ei),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,R.get(W).__webglTexture,De,Bt+Ei)),G.blitFramebuffer(nt,ct,je,Ce,Je,At,je,Ce,G.DEPTH_BUFFER_BIT,G.NEAREST);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||R.has(A)){const Ht=R.get(A),ui=R.get(W);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,vu),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,go);for(let Ut=0;Ut<$e;Ut++)Gi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.__webglTexture,Q,ft+Ut):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ht.__webglTexture,Q),Dt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ui.__webglTexture,De,Bt+Ut):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ui.__webglTexture,De),Q!==0?G.blitFramebuffer(nt,ct,je,Ce,Je,At,je,Ce,G.COLOR_BUFFER_BIT,G.NEAREST):Dt?G.copyTexSubImage3D(He,De,Je,At,Bt+Ut,nt,ct,je,Ce):G.copyTexSubImage2D(He,De,Je,At,nt,ct,je,Ce);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(He,De,Je,At,Bt,je,Ce,$e,Nt,tn,jt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(He,De,Je,At,Bt,je,Ce,$e,Nt,jt.data):G.texSubImage3D(He,De,Je,At,Bt,je,Ce,$e,Nt,tn,jt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,Je,At,je,Ce,Nt,tn,jt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,Je,At,jt.width,jt.height,Nt,jt.data):G.texSubImage2D(G.TEXTURE_2D,De,Je,At,je,Ce,Nt,tn,jt);Ie.pixelStorei(G.UNPACK_ROW_LENGTH,gn),Ie.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_t),Ie.pixelStorei(G.UNPACK_SKIP_PIXELS,Fn),Ie.pixelStorei(G.UNPACK_SKIP_ROWS,On),Ie.pixelStorei(G.UNPACK_SKIP_IMAGES,yt),De===0&&W.generateMipmaps&&G.generateMipmap(He),Ie.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Ie.unbindTexture()},this.resetState=function(){ue=0,ce=0,H=null,Ie.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const Rd=sessionStorage.getItem("srk")||"";function no(){return!!Rd}async function h0(s,e=!1){var l;if(!Rd)throw new Error("NO_KEY");const t={model:"claude-sonnet-4-20250514",max_tokens:1200,messages:[{role:"user",content:s}]};e&&(t.tools=[{type:"web_search_20250305",name:"web_search"}]);const a=await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":Rd,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(t)})).json();if(a.error)throw new Error(a.error.message);return((l=a.content)==null?void 0:l.filter(c=>c.type==="text").map(c=>c.text).join(""))||""}const Jn="#FFCC00",la=[{id:"consciousness",label:"Consciousness",emoji:"🎭",hex:"#E040FB",r:235,a:0,tagline:"The Inner Renaissance",image:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1400&q=85&fit=crop",desc:"Art, music, and agentic presence awakening humanity to what it means to be fully alive. Every great Renaissance needs its artists first.",quote:"The most radical thing you can do is be present. Fully, dangerously, unapologetically present.",initiatives:[{id:"moonshot-mapping",name:"Moonshot Mapping™",org:"Devon Seegers",year:"2020",desc:"2-hour strategic clarity experience collapsing chaos into precision for visionary leaders. Cognitive cartography that produces a visual inner landscape.",founder:"Devon Seegers",founderRole:"Cognitive Cartographer",links:{website:"https://devonseegers.com",app:"https://devonseegers-ops.github.io/whatsmymoonshot/",ig:"https://instagram.com/devonseegers"},impact:"Thousands of visionaries oriented",tags:["Clarity","Coaching","Methodology"]},{id:"reality-distortion",name:"Reality Distortion",org:"Devon Seegers & Sister",year:"2024",desc:"Sober-psychedelic immersive show bending minds, opening hearts, reviving awe through music, light, and transformative experience.",founder:"Devon Seegers",founderRole:"Artist & Creator",links:{website:"https://devonseegers.com"},impact:"New genre of immersive art",tags:["Music","Immersive","Art"]},{id:"whatsmymoonshot",name:"WhatsMyMoonshot.ai",org:"Devon Seegers",year:"2025",desc:"AI-powered 15-minute journey to discover and name your soul-level vision — your contribution to the Second Renaissance.",founder:"Devon Seegers",founderRole:"Founder",links:{website:"https://devonseegers-ops.github.io/whatsmymoonshot/"},impact:"Free for all humanity",tags:["AI","Purpose","Free"]},{id:"burning-man",name:"Burning Man Project",org:"Burning Man Project",year:"1986",desc:"Annual experiment in radical self-expression, community, and gifting economy. 80,000 people building Black Rock City and leaving no trace.",founder:"Larry Harvey",founderRole:"Founder",links:{website:"https://burningman.org",tickets:"https://tickets.burningman.org"},impact:"80,000+ attendees, global regional events",tags:["Community","Art","Experiment"]}],people:["Devon Seegers","Brené Brown","Russell Brand","Marianne Williamson","Tim Ferriss","Chase Jarvis"]},{id:"life",label:"Life Sciences",emoji:"🧬",hex:"#00E5FF",r:210,a:51,tagline:"Rewriting the Code of Life",image:"https://images.unsplash.com/photo-1532094349884-543559059a5e?w=1400&q=85&fit=crop",desc:"CRISPR, mRNA, longevity science — humanity gaining the power to cure genetic disease, reverse aging, and reimagine health for all of civilization.",quote:"We are living through the most profound transformation in the history of medicine. What was science fiction a decade ago is clinical reality today.",initiatives:[{id:"crispr",name:"CRISPR Gene Editing",org:"Innovative Genomics Institute",year:"2012",desc:"Molecular scissors that precisely edit DNA — the first personalized CRISPR therapy administered at CHOP in May 2025. FDA approvals for sickle cell disease.",founder:"Jennifer Doudna & Emmanuelle Charpentier",founderRole:"Nobel Laureates 2020",links:{website:"https://innovativegenomics.org",news:"https://www.chop.edu/news/worlds-first-patient-treated-personalized-crispr-gene-editing-therapy-childrens-hospital",nih:"https://clinicaltrials.gov/search?term=CRISPR"},impact:"Hundreds of active clinical trials",tags:["Nobel Prize","Genetics","Medicine"]},{id:"xprize-healthspan",name:"XPRIZE Healthspan",org:"XPRIZE Foundation",year:"2023",desc:"$101M prize — the largest longevity competition in history — targeting 10+ years of healthy lifespan extension using biological interventions.",founder:"Peter Diamandis",founderRole:"XPRIZE Founder & Executive Chairman",links:{website:"https://www.xprize.org/prizes/healthspan",apply:"https://www.xprize.org"},impact:"$101M prize, global teams competing",tags:["Longevity","Prize","Competition"]},{id:"mrna-platform",name:"mRNA Platform",org:"BioNTech / Moderna",year:"2020",desc:"Proved at scale during COVID-19. Now targeting cancer, HIV, autoimmune disease, rare genetic disorders. The most adaptable medical platform ever created.",founder:"Katalin Karikó & Drew Weissman",founderRole:"Nobel Laureates 2023",links:{website:"https://www.biontech.com",moderna:"https://www.modernatx.com"},impact:"Billions vaccinated, cancer trials active",tags:["Nobel Prize","Cancer","Platform"]},{id:"longevity",name:"Longevity Research",org:"Altos Labs / Calico",year:"2021",desc:"Biological age reversal through epigenetic reprogramming. $3B+ invested. Yamanaka factors could reset cells to younger states within 10 years.",founder:"Richard Klausner & Hans Bishop",founderRole:"Co-Founders, Altos Labs",links:{website:"https://altoslabs.com",calico:"https://www.calicolabs.com"},impact:"$3B+ invested in age reversal",tags:["Aging","Reprogramming","Longevity"]}],people:["Jennifer Doudna","David Sinclair","Peter Diamandis","George Church","Katalin Karikó","Aubrey de Grey"]},{id:"energy",label:"Energy & Climate",emoji:"⚡",hex:"#FFD60A",r:255,a:103,tagline:"Unlimited Clean Energy",image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1400&q=85&fit=crop",desc:"Nuclear fusion from seawater. Gigatons of carbon removed. The energy transformation that determines whether civilization survives this century.",quote:"Fusion energy is not 30 years away anymore. It's 10 years away. And it will change everything.",initiatives:[{id:"cfs",name:"Commonwealth Fusion Systems",org:"MIT Spinout",year:"2018",desc:"Compact SPARC tokamak fusion reactor. MIT magnet world record 2021. ARC commercial plant targeted early 2030s. 400+ MW from a device that fits in a parking lot.",founder:"Bob Mumgaard",founderRole:"CEO & Co-Founder",links:{website:"https://cfs.energy",arc:"https://cfs.energy/technology/arc/",breakthrough:"https://news.mit.edu/2021/MIT-CFS-major-advance-toward-fusion-energy-0908"},impact:"$2B raised, SPARC test reactor active",tags:["Fusion","MIT","Clean Energy"]},{id:"iter",name:"ITER",org:"35-Nation Collaboration",year:"2007",desc:"The world's largest fusion experiment in Cadarache, France. First plasma 2025. Blueprint for global commercial fusion deployment. 35 nations collaborating.",founder:"IAEA / 35 Nations",founderRole:"International Partnership",links:{website:"https://www.iter.org",live:"https://www.iter.org/proj/construction"},impact:"35 nations, €20B investment",tags:["International","Fusion","Blueprint"]},{id:"xprize-carbon",name:"XPRIZE Carbon Removal",org:"XPRIZE Foundation",year:"2021",desc:"$100M — the largest incentive prize in history. Remove gigatons of CO₂ from atmosphere and oceans. Funded by Elon Musk. Launched the circular carbon market.",founder:"Elon Musk (funder) / Peter Diamandis",founderRole:"XPRIZE Founder",links:{website:"https://www.xprize.org/prizes/carbonremoval",market:"https://www.xprize.org/news/circularcarbonmarket"},impact:"$100M, gigatons CO₂ target",tags:["Carbon","Prize","Climate"]},{id:"breakthrough-energy",name:"Breakthrough Energy",org:"Breakthrough Energy",year:"2015",desc:"Bill Gates' $1B+ climate tech portfolio. Ventures, Catalyst, Fellows programs. Goal: net-zero global economy by 2050. 100+ portfolio companies.",founder:"Bill Gates",founderRole:"Founder",links:{website:"https://www.breakthroughenergy.org",ventures:"https://www.breakthroughenergy.org/our-work/breakthrough-energy-ventures"},impact:"$1B+, 100+ companies, net-zero mission",tags:["Venture","Gates","Portfolio"]}],people:["Bill Gates","Elon Musk","Mark Jacobson","Bob Mumgaard","Jigar Shah","Yvon Chouinard"]},{id:"ai",label:"Intelligence & AI",emoji:"🧠",hex:"#9C27B0",r:228,a:154,tagline:"The First Non-Human Mind",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=85&fit=crop",desc:"AGI, quantum computing, agentic systems — the most transformative and consequential technology in human history, arriving now.",quote:"We are building the printing press, the steam engine, and the atomic bomb at the same time. We need more people who understand what's at stake.",initiatives:[{id:"openai-agi",name:"OpenAI — Path to AGI",org:"OpenAI",year:"2015",desc:'"AI generally smarter than humans — for all of humanity." ChatGPT reached 100M users in 60 days. GPT-5 and o3 show early AGI-like reasoning. Timeline: 2025–2028.',founder:"Sam Altman",founderRole:"CEO",links:{website:"https://openai.com",agi:"https://openai.com/index/planning-for-agi-and-beyond/",chatgpt:"https://chat.openai.com"},impact:"100M+ users, $157B valuation",tags:["AGI","Language","Safety"]},{id:"anthropic",name:"Anthropic / Claude",org:"Anthropic",year:"2021",desc:"Safety-focused frontier AI. Constitutional AI. The model helping you name your moonshot. Claude 3.5 Sonnet sets benchmarks. $7.3B funding. Mission: beneficial AI for humanity.",founder:"Dario Amodei & Daniela Amodei",founderRole:"CEO & President",links:{website:"https://anthropic.com",claude:"https://claude.ai",research:"https://www.anthropic.com/research"},impact:"$7.3B raised, safety-first mission",tags:["Safety","Claude","Constitutional"]},{id:"google-willow",name:"Google Willow Quantum",org:"Google DeepMind",year:"2024",desc:"Quantum error correction breakthrough, December 2024. First verifiable quantum advantage. Willow chip: computations in minutes that would take classical computers 10 septillion years.",founder:"Hartmut Neven",founderRole:"Quantum AI Lead, Google",links:{website:"https://quantumai.google",paper:"https://blog.google/technology/research/google-willow-quantum-chip/",deepmind:"https://deepmind.google"},impact:"First verifiable quantum advantage",tags:["Quantum","Breakthrough","Google"]},{id:"agentic-systems",name:"Agentic AI Systems",org:"Multiple Labs",year:"2024",desc:"AI that acts autonomously in the world — booking flights, writing code, running experiments. The next civilizational operating layer. Claude Code, Devin, AutoGPT, and more.",founder:"Multiple Founders",founderRole:"OpenAI / Anthropic / Google",links:{website:"https://www.anthropic.com/claude-code",devin:"https://cognition.ai",autogpt:"https://agpt.co"},impact:"Arriving 2025–2030",tags:["Agents","Autonomous","Future"]}],people:["Sam Altman","Dario Amodei","Demis Hassabis","Yann LeCun","Fei-Fei Li","Geoffrey Hinton"]},{id:"space",label:"Space & Oceans",emoji:"🚀",hex:"#40C4FF",r:248,a:206,tagline:"Multi-Planetary Species",image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1400&q=85&fit=crop",desc:"Mars colonization, ocean floor mapping — humanity completing its knowledge of the solar system and finally seeing the full geography of its own home.",quote:"We know more about the surface of Mars than about the floor of our own oceans. Both frontiers are calling us now.",initiatives:[{id:"spacex-mars",name:"SpaceX Starship / Mars",org:"SpaceX",year:"2002",desc:"First uncrewed missions to Mars 2026. Self-sustaining city of 1M planned. Starship: fully reusable, 100 metric tons to surface. The most ambitious engineering project in human history.",founder:"Elon Musk",founderRole:"Founder & CEO",links:{website:"https://www.spacex.com/humanspaceflight/mars/",starship:"https://www.spacex.com/vehicles/starship/",manifest:"https://www.spacex.com"},impact:"Uncrewed Mars 2026, city planned",tags:["Mars","Rockets","Multi-planetary"]},{id:"seabed-2030",name:"Seabed 2030",org:"Nippon Foundation + GEBCO",year:"2017",desc:"Map 100% of the ocean floor by 2030. Currently <25% mapped. We have better maps of Mars than our own oceans. Critical for climate, shipping, biodiversity, and hazard understanding.",founder:"Nippon Foundation & GEBCO",founderRole:"International Partnership",links:{website:"https://seabed2030.org",progress:"https://www.nippon-foundation.or.jp/en/what/projects/seabed2030/",gebco:"https://www.gebco.net"},impact:"25%→100% ocean mapping by 2030",tags:["Ocean","Mapping","Partnership"]},{id:"artemis",name:"Artemis Moon Program",org:"NASA + Partners",year:"2017",desc:"Return humans to the Moon. First woman on Moon. Lunar Gateway station. Permanent presence as proving ground for Mars. International partners: ESA, JAXA, CSA.",founder:"NASA",founderRole:"International Space Partnership",links:{website:"https://www.nasa.gov/artemis/",gateway:"https://www.nasa.gov/lunar-gateway/",esa:"https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion"},impact:"First woman on Moon, Mars gateway",tags:["Moon","NASA","International"]},{id:"space-solar",name:"Space-Based Solar Power",org:"Aetherflux / Breakthrough Energy",year:"2023",desc:"Harvest solar energy in orbit 24/7 regardless of weather and beam it to Earth via microwave. Unlimited clean power for any location on Earth. Aetherflux leading commercial development.",founder:"Baiju Bhatt",founderRole:"CEO, Aetherflux",links:{website:"https://aetherflux.com",esa:"https://www.esa.int/Enabling_Support/Space_Engineering_Technology/SOLARIS",nrl:"https://www.nrl.navy.mil/Media/News/Article/3048016"},impact:"First commercial SBSP demonstration",tags:["Solar","Orbit","Clean Energy"]}],people:["Elon Musk","Jeff Bezos","Gwynne Shotwell","Mae Jemison","Sylvia Earle","Victor Vescovo"]},{id:"flourishing",label:"Human Flourishing",emoji:"🌍",hex:"#00E676",r:220,a:257,tagline:"193 Nations, One Commitment",image:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1400&q=85&fit=crop",desc:"The 17 UN SDGs — the most ambitious coordinated human effort in history. Every major global challenge mapped to a concrete, time-bound moonshot.",quote:"The SDGs are the cathedral of our age — multi-generational, audacious, requiring every human on Earth to participate in building something none of us will see completed.",initiatives:[{id:"sdg-poverty",name:"SDG 1 — No Poverty",org:"United Nations",year:"2015",desc:"End extreme poverty (<$2.15/day) everywhere by 2030. 9.2% of world population still in extreme poverty. COVID set back a decade of progress. Requires $4T/year additional investment.",founder:"193 UN Member States",founderRole:"Global Commitment",links:{website:"https://sdgs.un.org/goals/goal1",progress:"https://unstats.un.org/sdgs/report/2024/",data:"https://data.worldbank.org/topic/poverty"},impact:"9.2% still in extreme poverty",tags:["Poverty","SDGs","Global"]},{id:"sdg-education",name:"SDG 4 — Quality Education",org:"United Nations",year:"2015",desc:"Universal access from early childhood through university. 300M+ children still without school access. Digital divide remains the greatest barrier. Khan Academy, Duolingo as moonshot vehicles.",founder:"193 UN Member States",founderRole:"Global Commitment",links:{website:"https://sdgs.un.org/goals/goal4",khan:"https://www.khanacademy.org",duolingo:"https://www.duolingo.com/mission"},impact:"300M+ children without school access",tags:["Education","Access","Digital"]},{id:"sdg-gender",name:"SDG 5 — Gender Equality",org:"United Nations",year:"2015",desc:"End all discrimination and violence against women globally. Progress has reversed in some regions since 2020. Women's economic empowerment could add $28T to global GDP.",founder:"193 UN Member States",founderRole:"Global Commitment",links:{website:"https://sdgs.un.org/goals/goal5",malala:"https://malala.org",unwomen:"https://www.unwomen.org"},impact:"$28T GDP potential from equality",tags:["Gender","Equality","Rights"]},{id:"sdg-climate",name:"SDG 13 — Climate Action",org:"United Nations / IPCC",year:"2015",desc:"Urgent coordinated climate response. 1.5°C limit requires 45% emissions reduction by 2030. Deep synergies with energy, health, cities, consumption, and ocean goals.",founder:"193 UN Member States / IPCC",founderRole:"Global Commitment",links:{website:"https://sdgs.un.org/goals/goal13",ipcc:"https://www.ipcc.ch",unfccc:"https://unfccc.int"},impact:"1.5°C limit, 45% reduction by 2030",tags:["Climate","IPCC","Emergency"]}],people:["Malala Yousafzai","Muhammad Yunus","Paul Farmer","MacKenzie Scott","Jacinda Ardern","Jeffrey Sachs"]},{id:"ocean",label:"Ocean & Earth",emoji:"🌊",hex:"#0091EA",r:238,a:309,tagline:"Reversing the Sixth Extinction",image:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1400&q=85&fit=crop",desc:"Oceans cover 71% of Earth. We've mapped less than 25% of the floor. The biodiversity crisis is the silent twin of climate change — and equally urgent.",quote:"The ocean is the life support system of our planet. Every second breath you take comes from the sea. And we are only beginning to understand it.",initiatives:[{id:"mission-blue",name:"Mission Blue / Hope Spots",org:"Mission Blue",year:"2010",desc:"Dr. Sylvia Earle's global movement to establish marine protected areas — Hope Spots — critical to ocean health. 160+ Hope Spots covering millions of square miles.",founder:"Sylvia Earle",founderRole:"Marine Biologist & Explorer",links:{website:"https://missionblue.org",hopespots:"https://missionblue.org/hope-spots/",ted:"https://www.ted.com/talks/sylvia_earle_how_to_protect_the_oceans"},impact:"160+ Hope Spots, millions of sq miles",tags:["Ocean","Protection","Exploration"]},{id:"xprize-rainforest",name:"XPRIZE Rainforest",org:"XPRIZE Foundation",year:"2019",desc:"$10M prize to develop AI-powered biodiversity monitoring at scale. Racing to catalog species before they're gone. Autonomous drones, eDNA, acoustic monitoring.",founder:"Peter Diamandis",founderRole:"XPRIZE Founder",links:{website:"https://www.xprize.org/prizes/rainforest",compete:"https://www.xprize.org/prizes/rainforest/teams"},impact:"$10M, AI biodiversity at scale",tags:["Biodiversity","AI","Prize"]},{id:"30x30",name:"30×30 Global Initiative",org:"Campaign for Nature",year:"2020",desc:"Protect 30% of Earth's land and ocean by 2030. 100+ nations committed. Most critical single intervention for the biodiversity crisis. Endorsed at COP15.",founder:"Campaign for Nature Coalition",founderRole:"Global Coalition",links:{website:"https://www.campaignfornature.org/30x30",un:"https://www.cbd.int/article/cop15-cbd-press-release-19dec2022",national:"https://www.nationalgeographic.com/environment/article/30x30-initiative"},impact:"100+ nations, 30% by 2030",tags:["Biodiversity","Land","Ocean"]},{id:"xprize-wildfire",name:"XPRIZE Wildfire",org:"XPRIZE Foundation",year:"2023",desc:"$11M prize to end destructive wildfires through autonomous detection, prediction, and coordinated response technology. AI-powered fire suppression at scale.",founder:"Peter Diamandis",founderRole:"XPRIZE Founder",links:{website:"https://www.xprize.org/prizes/wildfire",compete:"https://www.xprize.org"},impact:"$11M, autonomous wildfire response",tags:["Wildfire","AI","Climate"]}],people:["Sylvia Earle","David Attenborough","Jane Goodall","Paul Watson","Jack Ma","Leonardo DiCaprio"]}],p0=[{name:"Devon Seegers",domain:"consciousness",role:"Moonshot Mapping™ Founder",moonshot:"Move souls, raise consciousness through music, art & agentic systems",links:{web:"https://devonseegers.com"}},{name:"Brené Brown",domain:"consciousness",role:"Vulnerability Researcher",moonshot:"A world where enough people are brave enough to be truly vulnerable",links:{web:"https://brenebrown.com"}},{name:"Tim Ferriss",domain:"consciousness",role:"Author & Podcaster",moonshot:"Deconstruct world-class performers to give tools to the rest of us",links:{web:"https://tim.blog"}},{name:"Chase Jarvis",domain:"consciousness",role:"CreativeLive Founder",moonshot:"Creative skills for all — democratize creative education globally",links:{web:"https://chasejarvis.com"}},{name:"Gabrielle Bernstein",domain:"consciousness",role:"Spiritual Teacher & Author",moonshot:"Help millions release fear and choose love as their operating system",links:{web:"https://gabbybernstein.com"}},{name:"Marianne Williamson",domain:"consciousness",role:"Author & Activist",moonshot:"Politics of love — a government guided by moral force, not fear",links:{web:"https://marianne.com"}},{name:"Jennifer Doudna",domain:"life",role:"CRISPR Co-Inventor, Nobel Laureate",moonshot:"Eliminate genetic disease from the human species entirely",links:{web:"https://innovativegenomics.org"}},{name:"David Sinclair",domain:"life",role:"Longevity Researcher, Harvard",moonshot:"Treat aging as a disease — add 20 healthy years to every human life",links:{web:"https://sinclair.hms.harvard.edu"}},{name:"Peter Diamandis",domain:"life",role:"XPRIZE Founder",moonshot:"Democratize abundance — make what was scarce available to everyone",links:{web:"https://www.xprize.org"}},{name:"George Church",domain:"life",role:"Synthetic Biology Pioneer, Harvard",moonshot:"Engineer biology to solve every human disease and ecological crisis",links:{web:"https://arep.med.harvard.edu"}},{name:"Katalin Karikó",domain:"life",role:"mRNA Pioneer, Nobel Laureate",moonshot:"End all infectious disease using mRNA — cancer, HIV, malaria all curable",links:{web:"https://modernatx.com"}},{name:"Aubrey de Grey",domain:"life",role:"SENS Foundation Founder",moonshot:"Develop therapies that keep people healthy indefinitely — defeat aging",links:{web:"https://www.sens.org"}},{name:"Bill Gates",domain:"energy",role:"Breakthrough Energy Founder",moonshot:"Net-zero global economy by 2050 — every nation, every sector",links:{web:"https://breakthroughenergy.org"}},{name:"Elon Musk",domain:"energy",role:"Tesla / SpaceX Founder",moonshot:"Accelerate the world's transition to sustainable energy",links:{web:"https://tesla.com"}},{name:"Mark Jacobson",domain:"energy",role:"Stanford 100% Renewables Researcher",moonshot:"100% renewable energy in every country by 2035 — all sectors",links:{web:"https://web.stanford.edu/group/efmh/jacobson"}},{name:"Jigar Shah",domain:"energy",role:"DOE Loan Programs Director",moonshot:"Deploy $400B in clean energy finance to decarbonize the US economy",links:{web:"https://energy.gov/lpo"}},{name:"Yvon Chouinard",domain:"energy",role:"Patagonia Founder",moonshot:"Business as a force for nature — give the planet a seat at the table",links:{web:"https://patagonia.com"}},{name:"Kiran Mazumdar-Shaw",domain:"energy",role:"Biocon Founder",moonshot:"Affordable biologics for all — make life-saving drugs accessible globally",links:{web:"https://biocon.com"}},{name:"Sam Altman",domain:"ai",role:"OpenAI CEO",moonshot:"AGI that benefits all of humanity — the most transformative tool ever built",links:{web:"https://openai.com"}},{name:"Dario Amodei",domain:"ai",role:"Anthropic CEO",moonshot:"Build AI safely — interpretable, steerable, aligned with human values",links:{web:"https://anthropic.com"}},{name:"Demis Hassabis",domain:"ai",role:"Google DeepMind CEO",moonshot:"Solve intelligence and use it to solve everything else",links:{web:"https://deepmind.google"}},{name:"Yann LeCun",domain:"ai",role:"Meta AI Chief Scientist",moonshot:"Human-level AI through self-supervised learning — open and beneficial",links:{web:"https://ai.meta.com"}},{name:"Fei-Fei Li",domain:"ai",role:"AI4ALL Co-Founder, Stanford",moonshot:"Human-centered AI for all — diversity of thought building the future",links:{web:"https://ai4all.org"}},{name:"Geoffrey Hinton",domain:"ai",role:"AI Safety Pioneer, Nobel 2024",moonshot:"Ensure AI development doesn't destroy humanity — sound the alarm loudly",links:{web:"https://geoffreyhinton.ca"}},{name:"Gwynne Shotwell",domain:"space",role:"SpaceX President & COO",moonshot:"Make humanity multi-planetary — redundancy for the light of consciousness",links:{web:"https://spacex.com"}},{name:"Jeff Bezos",domain:"space",role:"Blue Origin Founder",moonshot:"Move heavy industry to space — preserve Earth as a garden for humanity",links:{web:"https://blueorigin.com"}},{name:"Mae Jemison",domain:"space",role:"Astronaut & 100YSS Founder",moonshot:"Ensure human civilization continues in the stars — 100-year starship",links:{web:"https://100yss.org"}},{name:"Sylvia Earle",domain:"space",role:"Marine Biologist & Mission Blue Founder",moonshot:"Protect the blue heart of the planet — 30% of ocean protected by 2030",links:{web:"https://missionblue.org"}},{name:"Victor Vescovo",domain:"space",role:"Explorer & Investor",moonshot:"Map and explore every extreme of Earth — poles, peaks, and deep trenches",links:{web:"https://victoresvescovo.com"}},{name:"Jill Tarter",domain:"space",role:"SETI Institute Co-Founder",moonshot:"Find evidence of extraterrestrial intelligence — we are not alone",links:{web:"https://www.seti.org"}},{name:"Malala Yousafzai",domain:"flourishing",role:"Nobel Laureate & Education Activist",moonshot:"12 years of free, quality education for every girl on Earth",links:{web:"https://malala.org"}},{name:"Muhammad Yunus",domain:"flourishing",role:"Grameen Bank Founder, Nobel Laureate",moonshot:"End poverty through microcredit — every human as an entrepreneur",links:{web:"https://muhammadyunus.org"}},{name:"MacKenzie Scott",domain:"flourishing",role:"Philanthropist",moonshot:"Accelerate equity — deploy billions where traditional philanthropy ignores",links:{web:"https://mackenziescott.com"}},{name:"Paul Farmer",domain:"flourishing",role:"Partners in Health Co-Founder",moonshot:"Global health equity — world-class care for the world's poorest patients",links:{web:"https://www.pih.org"}},{name:"Jeffrey Sachs",domain:"flourishing",role:"Columbia Economist, SDG Architect",moonshot:"End extreme poverty — it's the easiest thing we've never tried to do",links:{web:"https://www.jeffrey-sachs.org"}},{name:"Jacinda Ardern",domain:"flourishing",role:"Former NZ Prime Minister",moonshot:"Governance as empathy — leadership centered on wellbeing, not GDP",links:{web:"https://www.labour.org.nz"}},{name:"David Attenborough",domain:"ocean",role:"Naturalist & Broadcaster",moonshot:"Inspire humanity to protect the living world before it's too late",links:{web:"https://www.bbc.co.uk/programmes/b04vqx27"}},{name:"Jane Goodall",domain:"ocean",role:"Primatologist & UN Messenger of Peace",moonshot:"Reconnect humans with nature — every individual can make a difference",links:{web:"https://www.janegoodall.org"}},{name:"Paul Watson",domain:"ocean",role:"Sea Shepherd Founder",moonshot:"Direct action to protect marine wildlife — defend what the law won't",links:{web:"https://seashepherd.org"}},{name:"Enric Sala",domain:"ocean",role:"Pristine Seas, National Geographic",moonshot:"Protect the last wild places in the ocean through science and storytelling",links:{web:"https://pristineseas.org"}},{name:"Harrison Ford",domain:"ocean",role:"Conservation International Board",moonshot:"Conservation as identity — use celebrity to protect the natural world",links:{web:"https://www.conservation.org"}},{name:"Edward O. Wilson",domain:"ocean",role:"Naturalist & Half-Earth Theorist",moonshot:"Protect half of Earth's surface for nature — save biodiversity from collapse",links:{web:"https://eowilsonfoundation.org"}}];function E1(){sn.useEffect(()=>{const s=document.createElement("link");return s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap",document.head.appendChild(s),()=>{try{document.head.removeChild(s)}catch{}}},[])}function w1({init:s,domainHex:e,onOpen:t}){return ie.jsxs("div",{onClick:()=>t(s),style:{background:"#fff",border:"1px solid #e8e0d0",borderRadius:4,overflow:"hidden",cursor:"pointer",transition:"transform .15s",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"},onMouseEnter:r=>r.currentTarget.style.transform="translateY(-3px)",onMouseLeave:r=>r.currentTarget.style.transform="translateY(0)",children:[ie.jsx("div",{style:{height:4,background:e}}),ie.jsxs("div",{style:{padding:"16px 18px"},children:[ie.jsx("p",{style:{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:"0.2em",color:e,marginBottom:6},children:s.org.toUpperCase()}),ie.jsx("h4",{style:{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,color:"#1a1a1a",lineHeight:1.25,marginBottom:8},children:s.name}),ie.jsxs("p",{style:{fontFamily:"'Source Serif 4',serif",fontSize:13,color:"#555",lineHeight:1.6,marginBottom:12},children:[s.desc.substring(0,120),"…"]}),ie.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:s.tags.map(r=>ie.jsx("span",{style:{fontSize:10,padding:"2px 8px",background:`${e}18`,color:e==="#FFD60A"?"#7a6000":e,border:`1px solid ${e}40`,borderRadius:2,fontFamily:"'Cinzel',serif",letterSpacing:"0.05em"},children:r},r))})]})]})}function T1({init:s,domain:e,onClose:t}){const[r,a]=sn.useState(""),[l,c]=sn.useState(!1),d=sn.useCallback(async()=>{c(!0);try{const v=await h0(`What are the LATEST developments, breakthroughs, and news about "${s.name}" (${s.org}) in 2024–2025? Include specific dates, milestones, and key figures. Be concise but specific. Format as 3–4 short paragraphs.`,!0);a(v)}catch{a("Research engine unavailable. Check console.anthropic.com for your API key.")}c(!1)},[s]),p={fontFamily:"'Source Serif 4',serif"},m={fontFamily:"'Cinzel',serif"},y={fontFamily:"'Playfair Display',serif"};return ie.jsx("div",{style:{position:"fixed",inset:0,zIndex:400,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:v=>{v.target===v.currentTarget&&t()},children:ie.jsxs("div",{style:{width:"100%",maxWidth:800,background:"#faf7f0",maxHeight:"90vh",overflowY:"auto",borderRadius:"8px 8px 0 0",boxShadow:"0 -20px 60px rgba(0,0,0,0.4)"},children:[ie.jsxs("div",{style:{background:e.hex,padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[ie.jsx("span",{style:{fontSize:24},children:e.emoji}),ie.jsxs("div",{children:[ie.jsxs("p",{style:{...m,fontSize:10,letterSpacing:"0.25em",color:e.hex==="#FFD60A"?"#000":"rgba(255,255,255,0.75)",margin:0},children:[e.label.toUpperCase()," · SPOTLIGHT"]}),ie.jsx("h2",{style:{...y,fontSize:"clamp(18px,3vw,26px)",fontWeight:900,color:e.hex==="#FFD60A"?"#000":"#fff",margin:0,lineHeight:1.1},children:s.name})]})]}),ie.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:e.hex==="#FFD60A"?"#000":"#fff",fontSize:20,padding:8},children:"✕"})]}),ie.jsxs("div",{style:{padding:"24px"},children:[ie.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap",marginBottom:20},children:[["Founded",s.year],["Organization",s.org],["Impact",s.impact]].map(([v,g])=>g&&ie.jsxs("div",{style:{background:"#fff",border:"1px solid #e8e0d0",borderRadius:4,padding:"10px 14px",minWidth:120},children:[ie.jsx("p",{style:{...m,fontSize:8,letterSpacing:"0.18em",color:"#888",margin:0},children:v.toUpperCase()}),ie.jsx("p",{style:{...p,fontSize:13,fontWeight:600,color:"#1a1a1a",margin:"2px 0 0"},children:g})]},v))}),ie.jsx("p",{style:{...p,fontSize:16,lineHeight:1.75,color:"#222",marginBottom:20},children:s.desc}),ie.jsxs("div",{style:{background:"#fff",border:"1px solid #e8e0d0",borderRadius:4,padding:"16px 18px",marginBottom:20,display:"flex",gap:16,alignItems:"center"},children:[ie.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:e.hex,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:18,fontWeight:700,color:e.hex==="#FFD60A"?"#000":"#fff",fontFamily:"'Cinzel',serif"},children:s.founder.split(" ").map(v=>v[0]).join("").substring(0,2)}),ie.jsxs("div",{children:[ie.jsx("p",{style:{...y,fontSize:16,fontWeight:700,color:"#1a1a1a",margin:0},children:s.founder}),ie.jsx("p",{style:{...m,fontSize:10,color:"#888",letterSpacing:"0.1em",margin:"2px 0 0"},children:s.founderRole})]})]}),ie.jsxs("div",{style:{marginBottom:24},children:[ie.jsx("p",{style:{...m,fontSize:9,letterSpacing:"0.22em",color:"#888",marginBottom:10},children:"KEY LINKS"}),ie.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:Object.entries(s.links).map(([v,g])=>ie.jsx("a",{href:g,target:"_blank",rel:"noopener noreferrer",style:{...m,fontSize:10,letterSpacing:"0.1em",padding:"7px 14px",background:e.hex,color:e.hex==="#FFD60A"?"#000":"#fff",textDecoration:"none",borderRadius:2,textTransform:"uppercase"},children:v==="website"?"🌐 Website":v==="news"?"📰 News":v==="paper"?"📄 Research":v==="apply"?"✋ Apply":`↗ ${v}`},v))})]}),ie.jsxs("div",{style:{borderTop:"2px solid #e8e0d0",paddingTop:20},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,flexWrap:"wrap",gap:10},children:[ie.jsxs("div",{children:[ie.jsx("p",{style:{...m,fontSize:9,letterSpacing:"0.22em",color:"#888",margin:0},children:"FIELD DISPATCH"}),ie.jsx("p",{style:{...y,fontSize:18,fontWeight:700,color:"#1a1a1a",margin:0},children:"Latest from the Field"})]}),!r&&!l&&no()&&ie.jsx("button",{onClick:d,style:{...m,fontSize:10,letterSpacing:"0.15em",padding:"8px 18px",background:"#1a1a1a",color:"#fff",border:"none",cursor:"pointer",borderRadius:2},children:"⚡ SEARCH LATEST NEWS"})]}),l&&ie.jsxs("div",{style:{textAlign:"center",padding:"24px 0"},children:[ie.jsx("div",{style:{width:32,height:32,border:"3px solid #e8e0d0",borderTopColor:"#1a1a1a",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto 8px"}}),ie.jsx("p",{style:{...m,fontSize:10,color:"#888",letterSpacing:"0.1em"},children:"SEARCHING LIVE DATA…"})]}),r&&ie.jsx("div",{style:{background:"#fff",border:"1px solid #e8e0d0",borderRadius:4,padding:"18px 20px",borderLeft:`4px solid ${e.hex}`},children:r.split(`

`).filter(v=>v.trim()).map((v,g)=>ie.jsx("p",{style:{...p,fontSize:14,lineHeight:1.75,color:"#333",marginBottom:g<r.split(`

`).length-1?14:0},children:v},g))}),!no()&&ie.jsxs("p",{style:{...p,fontSize:13,color:"#888",fontStyle:"italic"},children:["Live research requires an API key. Visit"," ",ie.jsx("a",{href:"https://console.anthropic.com",target:"_blank",rel:"noopener noreferrer",style:{color:"#1a1a1a"},children:"console.anthropic.com"})," to get one."]})]})]})]})})}function A1({domain:s,onClose:e}){const[t,r]=sn.useState(null),a={fontFamily:"'Source Serif 4',serif"},l={fontFamily:"'Cinzel',serif"},c={fontFamily:"'Playfair Display',serif"},d=p0.filter(p=>p.domain===s.id);return ie.jsxs("div",{style:{position:"fixed",inset:0,zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.65)"},onClick:p=>{p.target===p.currentTarget&&e()},children:[ie.jsxs("div",{style:{width:"100%",maxWidth:1e3,background:"#faf7f0",maxHeight:"88vh",overflowY:"auto",borderRadius:"8px 8px 0 0",boxShadow:"0 -30px 80px rgba(0,0,0,0.5)"},children:[ie.jsxs("div",{style:{position:"relative",height:"clamp(200px,35vh,380px)",overflow:"hidden"},children:[ie.jsx("img",{src:s.image,alt:s.label,loading:"eager",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},onError:p=>{p.target.style.background=s.hex,p.target.style.display="none"}}),ie.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(250,247,240,1) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)"}}),ie.jsxs("div",{style:{position:"absolute",top:20,left:0,background:Jn,padding:"8px 20px 8px 28px",display:"flex",alignItems:"center",gap:12},children:[ie.jsx("span",{style:{fontSize:18},children:s.emoji}),ie.jsxs("p",{style:{...l,fontSize:10,letterSpacing:"0.35em",color:"#000",margin:0},children:[s.label.toUpperCase()," · SECOND RENAISSANCE"]})]}),ie.jsx("button",{onClick:e,style:{position:"absolute",top:16,right:20,background:"rgba(0,0,0,0.5)",border:"none",color:"#fff",width:36,height:36,borderRadius:"50%",cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"}),ie.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"24px 28px"},children:ie.jsx("h2",{style:{...c,fontSize:"clamp(28px,5vw,56px)",fontWeight:900,color:"#1a1a1a",lineHeight:1,margin:0,letterSpacing:"-0.02em"},children:s.tagline})})]}),ie.jsxs("div",{style:{padding:"0 28px 40px"},children:[ie.jsx("blockquote",{style:{...c,fontSize:"clamp(16px,2.5vw,22px)",fontStyle:"italic",lineHeight:1.6,color:"#222",borderLeft:`5px solid ${Jn}`,paddingLeft:20,margin:"24px 0",fontWeight:400},children:s.quote}),ie.jsx("p",{style:{...a,fontSize:"clamp(14px,2vw,17px)",lineHeight:1.8,color:"#333",marginBottom:28,columns:"1",maxWidth:680},children:s.desc}),ie.jsxs("div",{style:{borderTop:"2px solid #e8e0d0",paddingTop:24,marginBottom:32},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:16},children:[ie.jsx("div",{style:{width:32,height:4,background:Jn}}),ie.jsx("p",{style:{...l,fontSize:10,letterSpacing:"0.28em",color:"#888",margin:0},children:"KEY MOONSHOTS IN THIS DOMAIN"})]}),ie.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:14},children:s.initiatives.map(p=>ie.jsx(w1,{init:p,domainHex:s.hex,onOpen:r},p.id))})]}),d.length>0&&ie.jsxs("div",{style:{borderTop:"2px solid #e8e0d0",paddingTop:24},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:16},children:[ie.jsx("div",{style:{width:32,height:4,background:Jn}}),ie.jsx("p",{style:{...l,fontSize:10,letterSpacing:"0.28em",color:"#888",margin:0},children:"SECOND RENAISSANCE BUILDERS IN THIS DOMAIN"})]}),ie.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:10},children:d.map(p=>ie.jsxs("a",{href:p.links.web,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"flex",gap:10,alignItems:"center",background:"#fff",border:"1px solid #e8e0d0",borderRadius:4,padding:"10px 12px",transition:"background .15s",color:"inherit"},onMouseEnter:m=>m.currentTarget.style.background="#f0ece4",onMouseLeave:m=>m.currentTarget.style.background="#fff",children:[ie.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:s.hex,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:12,fontWeight:700,color:s.hex==="#FFD60A"?"#000":"#fff",fontFamily:"'Cinzel',serif"},children:p.name.split(" ").map(m=>m[0]).join("").substring(0,2)}),ie.jsxs("div",{children:[ie.jsx("p",{style:{...a,fontSize:13,fontWeight:600,color:"#1a1a1a",margin:0},children:p.name}),ie.jsx("p",{style:{...l,fontSize:9,color:"#888",letterSpacing:"0.05em",margin:0},children:p.role.split(",")[0]})]})]},p.name))})]})]})]}),t&&ie.jsx(T1,{init:t,domain:s,onClose:()=>r(null)})]})}function b1(){const[s,e]=sn.useState("all"),[t,r]=sn.useState(""),[a,l]=sn.useState(""),[c,d]=sn.useState(""),[p,m]=sn.useState(!1),y={fontFamily:"'Source Serif 4',serif"},v={fontFamily:"'Cinzel',serif"},g={fontFamily:"'Playfair Display',serif"},S=p0.filter(_=>(s==="all"||_.domain===s)&&_.name.toLowerCase().includes(t.toLowerCase())),w=sn.useCallback(async()=>{if(a.trim()){m(!0),d("");try{const _=await h0(`Research this Second Renaissance topic and give a concise, factual update with specific recent developments: "${a}"

Include: What's happening NOW (2024-2025), key people, recent milestones, and where to learn more. Be specific with dates and facts. Format with short paragraphs.`,!0);d(_)}catch{d("Research engine unavailable. Ensure your Anthropic API key is set.")}m(!1)}},[a]),b=Object.fromEntries(la.map(_=>[_.id,_.hex]));return ie.jsx("section",{style:{background:"#020810",padding:"80px 24px 100px",position:"relative",zIndex:1},children:ie.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[ie.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[ie.jsx("div",{style:{display:"inline-block",background:Jn,padding:"6px 20px",marginBottom:16},children:ie.jsx("p",{style:{...v,fontSize:9,letterSpacing:"0.35em",color:"#000",margin:0},children:"THE SECOND RENAISSANCE"})}),ie.jsx("h2",{style:{...g,fontSize:"clamp(28px,5vw,52px)",fontWeight:900,lineHeight:1.05,color:"#EEF2FF",letterSpacing:"-0.02em",marginBottom:14},children:"Dream 100 Builders"}),ie.jsx("p",{style:{...y,color:"rgba(238,242,255,0.5)",fontSize:16,maxWidth:520,margin:"0 auto",lineHeight:1.75},children:"The people building the cathedrals of our age. Every domain. Every scale. Every moonshot."})]}),ie.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,padding:"20px 24px",marginBottom:40},children:[ie.jsx("p",{style:{...v,fontSize:9,letterSpacing:"0.25em",color:"rgba(255,204,0,0.8)",marginBottom:10},children:"⚡ LIVE RESEARCH ENGINE — POWERED BY CLAUDE AI"}),ie.jsxs("div",{style:{display:"flex",gap:8},children:[ie.jsx("input",{value:a,onChange:_=>l(_.target.value),onKeyDown:_=>_.key==="Enter"&&w(),placeholder:"Ask about any initiative, person, or moonshot...",style:{flex:1,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:4,padding:"11px 16px",color:"#EEF2FF",fontSize:14,outline:"none",fontFamily:"'Source Serif 4',serif"}}),ie.jsx("button",{onClick:w,disabled:p||!no(),style:{...v,fontSize:10,letterSpacing:"0.15em",padding:"11px 20px",background:Jn,color:"#000",border:"none",borderRadius:4,cursor:no()?"pointer":"not-allowed",flexShrink:0,opacity:no()?1:.5},children:p?"SEARCHING…":"SEARCH"})]}),!no()&&ie.jsx("p",{style:{...v,fontSize:9,color:"rgba(238,242,255,0.3)",letterSpacing:"0.1em",marginTop:8},children:"API KEY REQUIRED · SET VITE_ANTHROPIC_API_KEY"}),c&&ie.jsx("div",{style:{marginTop:16,borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:16},children:c.split(`

`).filter(_=>_.trim()).map((_,x)=>ie.jsx("p",{style:{...y,fontSize:14,lineHeight:1.75,color:"rgba(238,242,255,0.82)",marginBottom:x<c.split(`

`).length-1?12:0},children:_},x))})]}),ie.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:28},children:[[["all","All Domains"],...la.map(_=>[_.id,_.label])].map(([_,x])=>ie.jsx("button",{onClick:()=>e(_),style:{...v,fontSize:9,letterSpacing:"0.15em",padding:"6px 14px",border:`1px solid ${s===_?Jn:"rgba(255,255,255,0.12)"}`,background:s===_?Jn:"rgba(255,255,255,0.04)",color:s===_?"#000":"rgba(238,242,255,0.6)",borderRadius:2,cursor:"pointer"},children:x.toUpperCase()},_)),ie.jsx("input",{value:t,onChange:_=>r(_.target.value),placeholder:"Search name...",style:{...y,flex:1,minWidth:160,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:2,padding:"6px 12px",color:"#EEF2FF",fontSize:13,outline:"none"}})]}),ie.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12},children:S.map(_=>{const x=b[_.domain]||"#888";return ie.jsxs("a",{href:_.links.web,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"block",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:4,overflow:"hidden",transition:"all .15s",color:"inherit"},onMouseEnter:C=>{C.currentTarget.style.background="rgba(255,255,255,0.07)",C.currentTarget.style.borderColor=x+"50"},onMouseLeave:C=>{C.currentTarget.style.background="rgba(255,255,255,0.03)",C.currentTarget.style.borderColor="rgba(255,255,255,0.07)"},children:[ie.jsx("div",{style:{height:3,background:x}}),ie.jsxs("div",{style:{padding:"14px 16px"},children:[ie.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",marginBottom:10},children:[ie.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:x,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:14,fontWeight:700,color:x==="#FFD60A"?"#000":"#fff",fontFamily:"'Cinzel',serif"},children:_.name.split(" ").map(C=>C[0]).join("").substring(0,2)}),ie.jsxs("div",{children:[ie.jsx("p",{style:{...g,fontSize:15,fontWeight:700,color:"#EEF2FF",margin:0,lineHeight:1.2},children:_.name}),ie.jsx("p",{style:{...v,fontSize:9,color:x==="#FFD60A"?"#cca800":x,letterSpacing:"0.07em",margin:"3px 0 0"},children:_.role})]})]}),ie.jsxs("p",{style:{...y,fontSize:12,color:"rgba(238,242,255,0.5)",lineHeight:1.55,fontStyle:"italic",margin:0},children:['"',_.moonshot,'"']})]})]},_.name)})}),S.length===0&&ie.jsx("p",{style:{...y,textAlign:"center",color:"rgba(238,242,255,0.35)",fontSize:15,padding:"40px 0"},children:"No builders match your search."})]})})}function C1(){E1();const s=sn.useRef(null),e=sn.useRef({sel:null,hov:null,setSel:null,setHov:null}),[t,r]=sn.useState(null),[a,l]=sn.useState(!1),[c,d]=sn.useState(null);sn.useEffect(()=>{e.current.sel=t,e.current.setSel=r}),sn.useEffect(()=>{d(t?la.find(v=>v.id===t):null)},[t]),sn.useEffect(()=>{const v=s.current;if(!v)return;const g=v.offsetWidth,S=v.offsetHeight,w=new M1({antialias:!0});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(g,S),w.toneMapping=Id,w.toneMappingExposure=1.2,v.appendChild(w.domElement);const b=new J_;b.background=new xt(67092);const _=new $n(52,g/S,.1,500);_.position.set(0,1.4,5.2),_.lookAt(0,0,0),b.add(new Ex(1712708,.55));const x=new ig(16771248,2.2);x.position.set(7,3,2),b.add(x);const C=new ig(4487167,.55);C.position.set(-5,0,-3),b.add(C);const L=[],P=[];for(let Ee=0;Ee<7e3;Ee++){const ke=45+Math.random()*170,Xe=Math.random()*2*Math.PI,Pe=Math.acos(2*Math.random()-1);L.push(ke*Math.sin(Pe)*Math.cos(Xe),ke*Math.sin(Pe)*Math.sin(Xe),ke*Math.cos(Pe));const ht=Math.random();ht>.96?P.push(1,.85,.65):ht>.92?P.push(.75,.85,1):P.push(1,1,1)}const z=new Rn;z.setAttribute("position",new mn(L,3)),z.setAttribute("color",new mn(P,3)),b.add(new fx(z,new Qg({size:.07,vertexColors:!0,transparent:!0,opacity:.9})));const D=document.createElement("canvas");D.width=512,D.height=256;const F=D.getContext("2d"),T=F.createLinearGradient(0,0,512,256);T.addColorStop(0,"#06305a"),T.addColorStop(1,"#0a4070"),F.fillStyle=T,F.fillRect(0,0,512,256),F.fillStyle="#1b5e30",[[110,90,44,54,-.3],[148,172,26,44,.1],[260,78,25,34,.1],[268,162,32,52,0],[375,78,68,48,-.1],[418,174,28,20,.2]].forEach(([Ee,ke,Xe,Pe,ht])=>{F.save(),F.translate(Ee,ke),F.beginPath(),F.ellipse(0,0,Xe,Pe,ht,0,2*Math.PI),F.fill(),F.restore()}),F.fillStyle="rgba(200,228,255,.55)",F.fillRect(0,0,512,16),F.fillRect(0,242,512,14);const U=new Vl({map:new Zm(D),specular:new xt(3368601),shininess:80,emissive:new xt(3362)}),j=new An(new Lr(1,64,64),U);b.add(j);const O=new An(new Lr(1.04,32,32),new Vl({color:5614335,transparent:!0,opacity:.09,side:rr,depthWrite:!1,blending:eo}));b.add(O),b.add(new An(new Lr(1.13,32,32),new Vl({color:2250188,transparent:!0,opacity:.04,side:Un,depthWrite:!1,blending:eo})));const $=new to;$.rotation.x=.24,b.add($),$.add(new An(new Xd(1.93,1.95,128),new aa({color:3359846,transparent:!0,opacity:.22,side:Di})));const ue=Ee=>{const ke=document.createElement("canvas");ke.width=320,ke.height=56;const Xe=ke.getContext("2d");Xe.font="bold 15px 'Cinzel', sans-serif",Xe.fillStyle=Ee.hex,Xe.textAlign="center",Xe.shadowColor=Ee.hex,Xe.shadowBlur=8,Xe.fillText(Ee.emoji+"  "+Ee.label,160,38);const Pe=new rx(new $g({map:new Zm(ke),transparent:!0,depthWrite:!1}));return Pe.scale.set(1.6,.28,1),Pe.position.y=.38,Pe},ce=[];la.forEach((Ee,ke)=>{const Xe=ke/la.length*Math.PI*2,Pe=new to;Pe.position.set(Math.cos(Xe)*2,0,Math.sin(Xe)*2),Pe.userData.id=Ee.id;const ht=new xt(Ee.hex),Mt=new An(new Lr(.1,24,24),new Vl({color:ht,emissive:ht,emissiveIntensity:.6,shininess:120}));Pe.add(Mt);const Zt=new An(new Lr(.2,16,16),new aa({color:ht,transparent:!0,opacity:.13,depthWrite:!1,blending:eo}));Pe.add(Zt);const G=new An(new Lr(.32,12,12),new aa({color:ht,transparent:!0,opacity:.05,depthWrite:!1,blending:eo}));Pe.add(G),Pe.add(new Sx(Ee.hex,.4,2.8)),Pe.add(ue(Ee)),$.add(Pe),ce.push({g:Pe,d:Ee,core:Mt,h1:Zt,h2:G})});let H=null;const ne=()=>{const Ee=e.current.sel,ke=ce.find(Xe=>Xe.d.id===Ee);if(ke&&!H){const Xe=new q;ke.g.getWorldPosition(Xe),H=new cx(new Rn().setFromPoints([new q,Xe]),new Jg({color:16777215,transparent:!0,opacity:.2})),b.add(H)}else if(!ke&&H)b.remove(H),H.geometry.dispose(),H.material.dispose(),H=null;else if(ke&&H){const Xe=new q;ke.g.getWorldPosition(Xe);const Pe=H.geometry.attributes.position;Pe.setXYZ(1,Xe.x,Xe.y,Xe.z),Pe.needsUpdate=!0}},X=new Ax,Y=new gt(-5,-5);let re=!1,se={x:0,y:0},N={x:0},J=!0;const Fe=Ee=>{const ke=v.getBoundingClientRect();if(Y.set((Ee.clientX-ke.left)/ke.width*2-1,-((Ee.clientY-ke.top)/ke.height)*2+1),re){const Xe=Ee.clientX-N.x;$.rotation.y+=Xe*.005,j.rotation.y+=Xe*.003,N={x:Ee.clientX,y:Ee.clientY},J=!1}},We=Ee=>{re=!0,se=N={x:Ee.clientX,y:Ee.clientY}},Ne=Ee=>{if(re&&(re=!1,Math.abs(Ee.clientX-se.x)<6&&Math.abs(Ee.clientY-se.y)<6)){X.setFromCamera(Y,_);const ke=X.intersectObjects(ce.map(Xe=>Xe.core));if(ke.length){const Xe=ce.find(Pe=>Pe.core===ke[0].object);if(Xe){const Pe=Xe.d.id;e.current.setSel(e.current.sel===Pe?null:Pe)}}else e.current.setSel(null)}},ae=Ee=>{Ee.touches.length===1&&(re=!0,se=N={x:Ee.touches[0].clientX,y:Ee.touches[0].clientY})},xe=Ee=>{if(Ee.touches.length===1&&re){const ke=Ee.touches[0].clientX-N.x;$.rotation.y+=ke*.005,j.rotation.y+=ke*.003,N={x:Ee.touches[0].clientX,y:Ee.touches[0].clientY},J=!1}},me=Ee=>{if(!re)return;re=!1;const ke=Ee.changedTouches[0];if(Math.abs(ke.clientX-se.x)<12&&Math.abs(ke.clientY-se.y)<12){const Xe=v.getBoundingClientRect();Y.set((ke.clientX-Xe.left)/Xe.width*2-1,-((ke.clientY-Xe.top)/Xe.height)*2+1),X.setFromCamera(Y,_);const Pe=X.intersectObjects(ce.map(ht=>ht.core));if(Pe.length){const ht=ce.find(Mt=>Mt.core===Pe[0].object);if(ht){const Mt=ht.d.id;e.current.setSel(e.current.sel===Mt?null:Mt)}}else e.current.setSel(null)}};v.addEventListener("mousemove",Fe),v.addEventListener("mousedown",We),v.addEventListener("mouseup",Ne),v.addEventListener("touchstart",ae,{passive:!0}),v.addEventListener("touchmove",xe,{passive:!0}),v.addEventListener("touchend",me);const Ue=()=>{const Ee=v.offsetWidth,ke=v.offsetHeight;_.aspect=Ee/ke,_.updateProjectionMatrix(),w.setSize(Ee,ke)};window.addEventListener("resize",Ue);let Qe,tt=0;const Lt=()=>{var Xe;Qe=requestAnimationFrame(Lt),tt+=.012,J&&($.rotation.y+=.0016),j.rotation.y+=7e-4,O.material.opacity=.07+Math.sin(tt*.4)*.02,x.intensity=2+Math.sin(tt*.15)*.2,X.setFromCamera(Y,_);const Ee=X.intersectObjects(ce.map(Pe=>Pe.core)),ke=Ee.length?(Xe=ce.find(Pe=>Pe.core===Ee[0].object))==null?void 0:Xe.d.id:null;ke!==void 0&&(v.style.cursor=ke?"pointer":"grab"),ce.forEach((Pe,ht)=>{const Mt=Pe.d.id===e.current.sel,Zt=Pe.d.id===ke,G=Mt?1.9:Zt?1.45:1,Pt=Pe.core.scale.x+(G-Pe.core.scale.x)*.1;Pe.core.scale.setScalar(Pt),Pe.h1.scale.setScalar(Pt),Pe.h2.scale.setScalar(Pt),Pe.core.material.emissiveIntensity=Mt?.7+Math.sin(tt*3)*.25:.4+Math.sin(tt*.7+ht*.8)*.12}),ne(),w.render(b,_)};return Lt(),setTimeout(()=>l(!0),300),()=>{cancelAnimationFrame(Qe),window.removeEventListener("resize",Ue),v.removeEventListener("mousemove",Fe),v.removeEventListener("mousedown",We),v.removeEventListener("mouseup",Ne),v.removeEventListener("touchstart",ae),v.removeEventListener("touchmove",xe),v.removeEventListener("touchend",me),w.dispose();try{v.removeChild(w.domElement)}catch{}}},[]);const p={fontFamily:"'Cinzel',Georgia,serif"},m={fontFamily:"'Cormorant Garamond',Georgia,serif"},y={fontFamily:"'Playfair Display',Georgia,serif"};return ie.jsxs("div",{style:{background:"#010614",minHeight:"100vh",color:"#EEF2FF"},children:[ie.jsx("style",{children:`
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:#333;border-radius:2px}
        img{display:block}
      `}),ie.jsxs("div",{style:{height:"100vh",position:"relative",overflow:"hidden"},children:[ie.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),a&&ie.jsxs(ie.Fragment,{children:[ie.jsxs("div",{style:{position:"absolute",top:"7%",left:0,right:0,textAlign:"center",zIndex:10,pointerEvents:"none",animation:"fadeIn 1.5s ease forwards"},children:[ie.jsx("div",{style:{display:"inline-block",background:Jn,padding:"6px 18px",marginBottom:14},children:ie.jsx("p",{style:{...p,fontSize:9,letterSpacing:"0.4em",color:"#000",margin:0},children:"WE ARE LIVING THROUGH"})}),ie.jsx("br",{}),ie.jsxs("h1",{style:{...y,fontSize:"clamp(26px,5.5vw,62px)",fontWeight:900,letterSpacing:"0.04em",lineHeight:1.05,background:"linear-gradient(135deg,#E040FB,#9C27B0 45%,#40C4FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",filter:"drop-shadow(0 0 50px rgba(156,39,176,0.55))"},children:["THE SECOND",ie.jsx("br",{}),"RENAISSANCE"]}),ie.jsx("p",{style:{...m,color:"rgba(238,242,255,0.42)",fontSize:"clamp(12px,1.8vw,15px)",maxWidth:440,margin:"10px auto 0",lineHeight:1.8},children:"100 years from now, historians will look back at this era the way we see Renaissance cathedrals — as proof of a civilization that reached for something greater than itself."})]}),ie.jsx("div",{style:{position:"absolute",bottom:"5%",left:0,right:0,textAlign:"center",zIndex:10,pointerEvents:"none"},children:ie.jsx("p",{style:{...p,fontSize:"clamp(7px,.9vw,9px)",letterSpacing:"0.3em",color:"rgba(238,242,255,0.22)"},children:"DRAG TO ROTATE  ·  CLICK A NODE TO EXPLORE  ·  SCROLL TO DISCOVER"})})]})]}),c&&ie.jsx(A1,{domain:c,onClose:()=>{r(null),d(null)}}),ie.jsx(b1,{}),ie.jsx("section",{style:{background:"#020a1e",padding:"80px 24px",position:"relative",zIndex:1},children:ie.jsxs("div",{style:{maxWidth:760,margin:"0 auto"},children:[ie.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[ie.jsx("div",{style:{display:"inline-block",background:Jn,padding:"5px 16px",marginBottom:12},children:ie.jsx("p",{style:{...p,fontSize:9,letterSpacing:"0.3em",color:"#000",margin:0},children:"THE LONG VIEW"})}),ie.jsxs("h2",{style:{...y,fontSize:"clamp(22px,3.5vw,42px)",fontWeight:900,color:"#EEF2FF",lineHeight:1.05,marginBottom:12},children:["History has always been",ie.jsx("br",{}),"shaped by moonshots"]}),ie.jsx("p",{style:{...m,color:"rgba(238,242,255,0.45)",fontSize:16,maxWidth:420,margin:"0 auto",lineHeight:1.75},children:"Not goals. Not KPIs. The people who changed civilization were playing a completely different game."})]}),ie.jsxs("div",{style:{position:"relative",paddingLeft:28},children:[ie.jsx("div",{style:{position:"absolute",left:6,top:0,bottom:0,width:1,background:"linear-gradient(to bottom,transparent,rgba(255,204,0,0.5),rgba(64,196,255,0.4),rgba(224,64,251,0.5),transparent)"}}),[{era:"Ancient",y:"~500 BCE",w:"Siddhartha Gautama",m:"Liberate all of humanity from suffering",c:"#CE93D8"},{era:"Ancient",y:"~4 BCE",w:"Jesus of Nazareth",m:"Awaken humanity to unconditional love",c:"#CE93D8"},{era:"Renaissance",y:"1440s",w:"Johannes Gutenberg",m:"Democratize knowledge — print for everyone",c:"#FFD54F"},{era:"Industrial",y:"1879",w:"Edison & Tesla",m:"Electrify the world — banish darkness forever",c:"#80DEEA"},{era:"Space Age",y:"1969",w:"NASA Apollo 11",m:"Touch the Moon — prove the impossible is real",c:"#B39DDB"},{era:"Now",y:"2012–",w:"Doudna & Charpentier",m:"Rewrite the genetic code of all living things",c:"#80CBC4"},{era:"Now",y:"2022–",w:"OpenAI / Anthropic",m:"Build the first non-human intelligence on Earth",c:"#CE93D8"},{era:"Now",y:"You",w:"",m:"Your moonshot — yet to be named",c:"#FFCC00",isYou:!0}].map((v,g)=>ie.jsxs("div",{style:{position:"relative",marginBottom:22,paddingLeft:18},children:[ie.jsx("div",{style:{position:"absolute",left:-27,top:9,width:8,height:8,borderRadius:"50%",background:v.c,boxShadow:`0 0 10px ${v.c}`}}),ie.jsxs("div",{style:{background:v.isYou?"rgba(255,204,0,0.08)":"rgba(255,255,255,0.025)",border:`0.5px solid ${v.c}35`,borderRadius:4,padding:"11px 15px",borderLeft:v.isYou?`2px solid ${v.c}`:"none"},children:[ie.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:4,flexWrap:"wrap"},children:[ie.jsx("span",{style:{...p,fontSize:8,color:v.c,letterSpacing:"0.14em",background:`${v.c}1E`,padding:"2px 8px",borderRadius:2},children:v.era.toUpperCase()}),ie.jsx("span",{style:{...m,color:"rgba(238,242,255,0.35)",fontSize:11},children:v.y})]}),ie.jsx("p",{style:{fontWeight:600,fontSize:13,color:v.isYou?v.c:"#EEF2FF",marginBottom:3,...v.isYou?p:{}},children:v.isYou?"YOUR NAME HERE":v.w}),ie.jsx("p",{style:{...m,fontSize:13,color:"rgba(238,242,255,0.55)",fontStyle:"italic",lineHeight:1.5},children:v.m}),v.isYou&&ie.jsx("a",{href:"https://devonseegers-ops.github.io/whatsmymoonshot/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",marginTop:8,background:Jn,color:"#000",padding:"4px 14px",borderRadius:2,fontSize:9,textDecoration:"none",...p,letterSpacing:"0.12em",fontWeight:700},children:"NAME IT NOW →"})]})]},g))]})]})}),ie.jsxs("section",{style:{padding:"72px 24px 100px",textAlign:"center",background:"radial-gradient(ellipse at center,rgba(224,64,251,0.08) 0%,transparent 60%)"},children:[ie.jsx("div",{style:{display:"inline-block",background:Jn,padding:"6px 18px",marginBottom:16},children:ie.jsx("p",{style:{...p,fontSize:9,letterSpacing:"0.35em",color:"#000",margin:0},children:"YOUR ROLE IN THE RENAISSANCE"})}),ie.jsxs("h2",{style:{...y,fontSize:"clamp(24px,5vw,52px)",fontWeight:900,lineHeight:1.08,marginBottom:22,background:"linear-gradient(135deg,#E040FB,#9C27B0,#40C4FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:["The Second Renaissance",ie.jsx("br",{}),"needs your moonshot."]}),ie.jsxs("div",{style:{maxWidth:560,margin:"0 auto 30px",background:"rgba(255,255,255,0.025)",border:"0.5px solid rgba(224,64,251,0.22)",borderRadius:4,padding:"22px 28px"},children:[ie.jsx("p",{style:{...p,fontSize:8,letterSpacing:"0.22em",color:"rgba(224,64,251,0.65)",marginBottom:10},children:"DEVON SEEGERS  ·  FOUNDER  ·  SECOND RENAISSANCE BUILDER"}),ie.jsx("p",{style:{...m,fontStyle:"italic",fontSize:"clamp(15px,2.5vw,20px)",lineHeight:1.72,color:"rgba(238,242,255,0.88)"},children:'"I am here to move souls, unite hearts, and raise the consciousness of humanity through music, art, and agentic systems so that the world remembers what it feels like to be alive, connected, and free."'})]}),ie.jsx("a",{href:"https://devonseegers-ops.github.io/whatsmymoonshot/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",background:Jn,color:"#000",padding:"14px 36px",borderRadius:2,fontSize:12,textDecoration:"none",...p,letterSpacing:"0.16em",fontWeight:700,marginBottom:12},children:"✦  DISCOVER YOUR MOONSHOT  →"}),ie.jsx("br",{}),ie.jsx("a",{href:"https://devonseegers.com",target:"_blank",rel:"noopener noreferrer",style:{...p,color:"rgba(255,204,0,0.6)",fontSize:10,letterSpacing:"0.14em",textDecoration:"none"},children:"MOONSHOT MAPPING™ WITH DEVON SEEGERS →"})]})]})}t_.createRoot(document.getElementById("root")).render(ie.jsx(sn.StrictMode,{children:ie.jsx(C1,{})}));
