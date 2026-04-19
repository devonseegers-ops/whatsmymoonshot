(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var $u={exports:{}},Ka={},Ku={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function Zv(){if(xm)return St;xm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function _(F,Q,Ue){this.props=F,this.context=Q,this.refs=A,this.updater=Ue||S}_.prototype.isReactComponent={},_.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=_.prototype;function C(F,Q,Ue){this.props=F,this.context=Q,this.refs=A,this.updater=Ue||S}var P=C.prototype=new x;P.constructor=C,w(P,_.prototype),P.isPureReactComponent=!0;var I=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(F,Q,Ue){var We,Fe={},se=null,ve=null;if(Q!=null)for(We in Q.ref!==void 0&&(ve=Q.ref),Q.key!==void 0&&(se=""+Q.key),Q)z.call(Q,We)&&!k.hasOwnProperty(We)&&(Fe[We]=Q[We]);var ge=arguments.length-2;if(ge===1)Fe.children=Ue;else if(1<ge){for(var he=Array(ge),Me=0;Me<ge;Me++)he[Me]=arguments[Me+2];Fe.children=he}if(F&&F.defaultProps)for(We in ge=F.defaultProps,ge)Fe[We]===void 0&&(Fe[We]=ge[We]);return{$$typeof:s,type:F,key:se,ref:ve,props:Fe,_owner:D.current}}function N(F,Q){return{$$typeof:s,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function Y(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function U(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ue){return Q[Ue]})}var J=/\/+/g;function ce(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?U(""+F.key):Q.toString(36)}function de(F,Q,Ue,We,Fe){var se=typeof F;(se==="undefined"||se==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(se){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case s:case e:ve=!0}}if(ve)return ve=F,Fe=Fe(ve),F=We===""?"."+ce(ve,0):We,I(Fe)?(Ue="",F!=null&&(Ue=F.replace(J,"$&/")+"/"),de(Fe,Q,Ue,"",function(Me){return Me})):Fe!=null&&(Y(Fe)&&(Fe=N(Fe,Ue+(!Fe.key||ve&&ve.key===Fe.key?"":(""+Fe.key).replace(J,"$&/")+"/")+F)),Q.push(Fe)),1;if(ve=0,We=We===""?".":We+":",I(F))for(var ge=0;ge<F.length;ge++){se=F[ge];var he=We+ce(se,ge);ve+=de(se,Q,Ue,he,Fe)}else if(he=g(F),typeof he=="function")for(F=he.call(F),ge=0;!(se=F.next()).done;)se=se.value,he=We+ce(se,ge++),ve+=de(se,Q,Ue,he,Fe);else if(se==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ve}function G(F,Q,Ue){if(F==null)return F;var We=[],Fe=0;return de(F,We,"","",function(se){return Q.call(Ue,se,Fe++)}),We}function ee(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(Ue){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ue)},function(Ue){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ue)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var j={current:null},q={transition:null},le={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:q,ReactCurrentOwner:D};function oe(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:G,forEach:function(F,Q,Ue){G(F,function(){Q.apply(this,arguments)},Ue)},count:function(F){var Q=0;return G(F,function(){Q++}),Q},toArray:function(F){return G(F,function(Q){return Q})||[]},only:function(F){if(!Y(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=_,St.Fragment=t,St.Profiler=o,St.PureComponent=C,St.StrictMode=r,St.Suspense=m,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,St.act=oe,St.cloneElement=function(F,Q,Ue){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var We=w({},F.props),Fe=F.key,se=F.ref,ve=F._owner;if(Q!=null){if(Q.ref!==void 0&&(se=Q.ref,ve=D.current),Q.key!==void 0&&(Fe=""+Q.key),F.type&&F.type.defaultProps)var ge=F.type.defaultProps;for(he in Q)z.call(Q,he)&&!k.hasOwnProperty(he)&&(We[he]=Q[he]===void 0&&ge!==void 0?ge[he]:Q[he])}var he=arguments.length-2;if(he===1)We.children=Ue;else if(1<he){ge=Array(he);for(var Me=0;Me<he;Me++)ge[Me]=arguments[Me+2];We.children=ge}return{$$typeof:s,type:F.type,key:Fe,ref:se,props:We,_owner:ve}},St.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},St.createElement=T,St.createFactory=function(F){var Q=T.bind(null,F);return Q.type=F,Q},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:f,render:F}},St.isValidElement=Y,St.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ee}},St.memo=function(F,Q){return{$$typeof:p,type:F,compare:Q===void 0?null:Q}},St.startTransition=function(F){var Q=q.transition;q.transition={};try{F()}finally{q.transition=Q}},St.unstable_act=oe,St.useCallback=function(F,Q){return j.current.useCallback(F,Q)},St.useContext=function(F){return j.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return j.current.useDeferredValue(F)},St.useEffect=function(F,Q){return j.current.useEffect(F,Q)},St.useId=function(){return j.current.useId()},St.useImperativeHandle=function(F,Q,Ue){return j.current.useImperativeHandle(F,Q,Ue)},St.useInsertionEffect=function(F,Q){return j.current.useInsertionEffect(F,Q)},St.useLayoutEffect=function(F,Q){return j.current.useLayoutEffect(F,Q)},St.useMemo=function(F,Q){return j.current.useMemo(F,Q)},St.useReducer=function(F,Q,Ue){return j.current.useReducer(F,Q,Ue)},St.useRef=function(F){return j.current.useRef(F)},St.useState=function(F){return j.current.useState(F)},St.useSyncExternalStore=function(F,Q,Ue){return j.current.useSyncExternalStore(F,Q,Ue)},St.useTransition=function(){return j.current.useTransition()},St.version="18.3.1",St}var ym;function Lf(){return ym||(ym=1,Ku.exports=Zv()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Jv(){if(Sm)return Ka;Sm=1;var s=Lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var v,y={},g=null,S=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(S=m.ref);for(v in m)r.call(m,v)&&!l.hasOwnProperty(v)&&(y[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)y[v]===void 0&&(y[v]=m[v]);return{$$typeof:e,type:f,key:g,ref:S,props:y,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var Mm;function Qv(){return Mm||(Mm=1,$u.exports=Jv()),$u.exports}var X=Qv(),ln=Lf(),yl={},Zu={exports:{}},Yn={},Ju={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function e_(){return Em||(Em=1,(function(s){function e(q,le){var oe=q.length;q.push(le);e:for(;0<oe;){var F=oe-1>>>1,Q=q[F];if(0<o(Q,le))q[F]=le,q[oe]=Q,oe=F;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var le=q[0],oe=q.pop();if(oe!==le){q[0]=oe;e:for(var F=0,Q=q.length,Ue=Q>>>1;F<Ue;){var We=2*(F+1)-1,Fe=q[We],se=We+1,ve=q[se];if(0>o(Fe,oe))se<Q&&0>o(ve,Fe)?(q[F]=ve,q[se]=oe,F=se):(q[F]=Fe,q[We]=oe,F=We);else if(se<Q&&0>o(ve,oe))q[F]=ve,q[se]=oe,F=se;else break e}}return le}function o(q,le){var oe=q.sortIndex-le.sortIndex;return oe!==0?oe:q.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],p=[],v=1,y=null,g=3,S=!1,w=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(q){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=q)r(p),le.sortIndex=le.expirationTime,e(m,le);else break;le=t(p)}}function I(q){if(A=!1,P(q),!w)if(t(m)!==null)w=!0,ee(z);else{var le=t(p);le!==null&&j(I,le.startTime-q)}}function z(q,le){w=!1,A&&(A=!1,x(T),T=-1),S=!0;var oe=g;try{for(P(le),y=t(m);y!==null&&(!(y.expirationTime>le)||q&&!U());){var F=y.callback;if(typeof F=="function"){y.callback=null,g=y.priorityLevel;var Q=F(y.expirationTime<=le);le=s.unstable_now(),typeof Q=="function"?y.callback=Q:y===t(m)&&r(m),P(le)}else r(m);y=t(m)}if(y!==null)var Ue=!0;else{var We=t(p);We!==null&&j(I,We.startTime-le),Ue=!1}return Ue}finally{y=null,g=oe,S=!1}}var D=!1,k=null,T=-1,N=5,Y=-1;function U(){return!(s.unstable_now()-Y<N)}function J(){if(k!==null){var q=s.unstable_now();Y=q;var le=!0;try{le=k(!0,q)}finally{le?ce():(D=!1,k=null)}}else D=!1}var ce;if(typeof C=="function")ce=function(){C(J)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,G=de.port2;de.port1.onmessage=J,ce=function(){G.postMessage(null)}}else ce=function(){_(J,0)};function ee(q){k=q,D||(D=!0,ce())}function j(q,le){T=_(function(){q(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ee(z))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(q){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var oe=g;g=le;try{return q()}finally{g=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,le){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var oe=g;g=q;try{return le()}finally{g=oe}},s.unstable_scheduleCallback=function(q,le,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,q){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,q={id:v++,callback:le,priorityLevel:q,startTime:oe,expirationTime:Q,sortIndex:-1},oe>F?(q.sortIndex=oe,e(p,q),t(m)===null&&q===t(p)&&(A?(x(T),T=-1):A=!0,j(I,oe-F))):(q.sortIndex=Q,e(m,q),w||S||(w=!0,ee(z))),q},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(q){var le=g;return function(){var oe=g;g=le;try{return q.apply(this,arguments)}finally{g=oe}}}})(Qu)),Qu}var wm;function t_(){return wm||(wm=1,Ju.exports=e_()),Ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function n_(){if(Tm)return Yn;Tm=1;var s=Lf(),e=t_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function g(n){return m.call(y,n)?!0:m.call(v,n)?!1:p.test(n)?y[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,C);_[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,C);_[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,C);_[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),U=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),q=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function Q(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ue=!1;function We(n,i){if(!n||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var c=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){c=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){c=ae}n()}}catch(ae){if(ae&&c&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),h=c.stack.split(`
`),E=d.length-1,L=h.length-1;1<=E&&0<=L&&d[E]!==h[L];)L--;for(;1<=E&&0<=L;E--,L--)if(d[E]!==h[L]){if(E!==1||L!==1)do if(E--,L--,0>L||d[E]!==h[L]){var O=`
`+d[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=L);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function Fe(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case D:return"Portal";case N:return"Profiler";case T:return"StrictMode";case ce:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function he(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(n){var i=he(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,h.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function we(n){n._valueTracker||(n._valueTracker=Me(n))}function ze(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=he(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function bt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function at(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ut(n,i){at(n,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?_n(n,i.type,a):i.hasOwnProperty("defaultValue")&&_n(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function kt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function _n(n,i,a){(i!=="number"||et(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var H=Array.isArray;function Bt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function pt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function It(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(H(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function Ne(n,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ht(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function R(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?R(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,pe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function _e(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Le.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function ue(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function me(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ue(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ke=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Re(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ot=null,vt=null,B=null;function Ce(n){if(n=Fa(n)){if(typeof ot!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fo(i),ot(n.stateNode,n.type,i))}}function fe(n){vt?B?B.push(n):B=[n]:vt=n}function Be(){if(vt){var n=vt,i=B;if(B=vt=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function Ie(n,i){return n(i)}function xe(){}var qe=!1;function lt(n,i,a){if(qe)return n(i,a);qe=!0;try{return Ie(n,i,a)}finally{qe=!1,(vt!==null||B!==null)&&(xe(),Be())}}function Ot(n,i){var a=n.stateNode;if(a===null)return null;var c=Fo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ct=!1;if(f)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Ct=!1}function ni(n,i,a,c,d,h,E,L,O){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(Se){this.onError(Se)}}var Hi=!1,ps=null,Gr=!1,ms=null,Vi={onError:function(n){Hi=!0,ps=n}};function pa(n,i,a,c,d,h,E,L,O){Hi=!1,ps=null,ni.apply(Vi,arguments)}function _o(n,i,a,c,d,h,E,L,O){if(pa.apply(this,arguments),Hi){if(Hi){var ae=ps;Hi=!1,ps=null}else throw Error(t(198));Gr||(Gr=!0,ms=ae)}}function Ti(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Hr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ma(n){if(Ti(n)!==n)throw Error(t(188))}function gs(n){var i=n.alternate;if(!i){if(i=Ti(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return ma(d),n;if(h===c)return ma(d),i;h=h.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=h;else{for(var E=!1,L=d.child;L;){if(L===a){E=!0,a=d,c=h;break}if(L===c){E=!0,c=d,a=h;break}L=L.sibling}if(!E){for(L=h.child;L;){if(L===a){E=!0,a=h,c=d;break}if(L===c){E=!0,c=h,a=d;break}L=L.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ga(n){return n=gs(n),n!==null?va(n):null}function va(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=va(n);if(i!==null)return i;n=n.sibling}return null}var xo=e.unstable_scheduleCallback,yo=e.unstable_cancelCallback,_c=e.unstable_shouldYield,xc=e.unstable_requestPaint,Kt=e.unstable_now,yc=e.unstable_getCurrentPriorityLevel,_a=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,re=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,De=null;function Xe(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:ct,$e=Math.log,Qe=Math.LN2;function ct(n){return n>>>=0,n===0?32:31-($e(n)/Qe|0)|0}var ut=64,Ze=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,h=n.pingedLanes,E=a&268435455;if(E!==0){var L=E&~d;L!==0?c=Tt(L):(h&=E,h!==0&&(c=Tt(h)))}else E=a&~d,E!==0?c=Tt(E):h!==0&&(c=Tt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Pe(i),d=1<<a,c|=n[a],i&=~d;return c}function Yt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,h=n.pendingLanes;0<h;){var E=31-Pe(h),L=1<<E,O=d[E];O===-1?((L&a)===0||(L&c)!==0)&&(d[E]=Yt(L,i)):O<=i&&(n.expiredLanes|=L),h&=~L}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function He(){var n=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),n}function xn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function _t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Pe(i),n[i]=a}function zn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Pe(a),h=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~h}}function Gn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Pe(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var yt=0;function Wi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pt,Vt,fi,Lt,hi,bi=!1,Vr=[],ur=null,dr=null,fr=null,xa=new Map,ya=new Map,hr=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(n,i){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":xa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(i.pointerId)}}function Sa(n,i,a,c,d,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&Vt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function y0(n,i,a,c,d){switch(i){case"focusin":return ur=Sa(ur,n,i,a,c,d),!0;case"dragenter":return dr=Sa(dr,n,i,a,c,d),!0;case"mouseover":return fr=Sa(fr,n,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return xa.set(h,Sa(xa.get(h)||null,n,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,ya.set(h,Sa(ya.get(h)||null,n,i,a,c,d)),!0}return!1}function ih(n){var i=Wr(n.target);if(i!==null){var a=Ti(i);if(a!==null){if(i=a.tag,i===13){if(i=Hr(a),i!==null){n.blockedOn=i,hi(n.priority,function(){fi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Mc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);be=c,a.target.dispatchEvent(c),be=null}else return i=Fa(a),i!==null&&Vt(i),n.blockedOn=a,!1;i.shift()}return!0}function rh(n,i,a){So(n)&&a.delete(i)}function S0(){bi=!1,ur!==null&&So(ur)&&(ur=null),dr!==null&&So(dr)&&(dr=null),fr!==null&&So(fr)&&(fr=null),xa.forEach(rh),ya.forEach(rh)}function Ma(n,i){n.blockedOn===i&&(n.blockedOn=null,bi||(bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,S0)))}function Ea(n){function i(d){return Ma(d,n)}if(0<Vr.length){Ma(Vr[0],n);for(var a=1;a<Vr.length;a++){var c=Vr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ur!==null&&Ma(ur,n),dr!==null&&Ma(dr,n),fr!==null&&Ma(fr,n),xa.forEach(i),ya.forEach(i),a=0;a<hr.length;a++)c=hr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)ih(a),a.blockedOn===null&&hr.shift()}var vs=I.ReactCurrentBatchConfig,Mo=!0;function M0(n,i,a,c){var d=yt,h=vs.transition;vs.transition=null;try{yt=1,Sc(n,i,a,c)}finally{yt=d,vs.transition=h}}function E0(n,i,a,c){var d=yt,h=vs.transition;vs.transition=null;try{yt=4,Sc(n,i,a,c)}finally{yt=d,vs.transition=h}}function Sc(n,i,a,c){if(Mo){var d=Mc(n,i,a,c);if(d===null)Bc(n,i,c,Eo,a),nh(n,c);else if(y0(d,n,i,a,c))c.stopPropagation();else if(nh(n,c),i&4&&-1<x0.indexOf(n)){for(;d!==null;){var h=Fa(d);if(h!==null&&Pt(h),h=Mc(n,i,a,c),h===null&&Bc(n,i,c,Eo,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else Bc(n,i,c,null,a)}}var Eo=null;function Mc(n,i,a,c){if(Eo=null,n=it(c),n=Wr(n),n!==null)if(i=Ti(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Hr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Eo=n,null}function sh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yc()){case _a:return 1;case b:return 4;case W:case re:return 16;case ne:return 536870912;default:return 16}default:return 16}}var pr=null,Ec=null,wo=null;function ah(){if(wo)return wo;var n,i=Ec,a=i.length,c,d="value"in pr?pr.value:pr.textContent,h=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===d[h-c];c++);return wo=d.slice(n,1<c?1-c:void 0)}function To(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bo(){return!0}function oh(){return!1}function qn(n){function i(a,c,d,h,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?bo:oh,this.isPropagationStopped=oh,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),i}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=qn(_s),wa=oe({},_s,{view:0,detail:0}),w0=qn(wa),Tc,bc,Ta,Ao=oe({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(Tc=n.screenX-Ta.screenX,bc=n.screenY-Ta.screenY):bc=Tc=0,Ta=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:bc}}),lh=qn(Ao),T0=oe({},Ao,{dataTransfer:0}),b0=qn(T0),A0=oe({},wa,{relatedTarget:0}),Ac=qn(A0),C0=oe({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),R0=qn(C0),P0=oe({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),I0=qn(P0),D0=oe({},_s,{data:0}),ch=qn(D0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=F0[n])?!!i[n]:!1}function Cc(){return U0}var O0=oe({},wa,{key:function(n){if(n.key){var i=L0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=To(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?N0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(n){return n.type==="keypress"?To(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?To(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),k0=qn(O0),B0=oe({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=qn(B0),z0=oe({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),G0=qn(z0),H0=oe({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=qn(H0),W0=oe({},Ao,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=qn(W0),j0=[9,13,27,32],Rc=f&&"CompositionEvent"in window,ba=null;f&&"documentMode"in document&&(ba=document.documentMode);var Y0=f&&"TextEvent"in window&&!ba,dh=f&&(!Rc||ba&&8<ba&&11>=ba),fh=" ",hh=!1;function ph(n,i){switch(n){case"keyup":return j0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function q0(n,i){switch(n){case"compositionend":return mh(i);case"keypress":return i.which!==32?null:(hh=!0,fh);case"textInput":return n=i.data,n===fh&&hh?null:n;default:return null}}function $0(n,i){if(xs)return n==="compositionend"||!Rc&&ph(n,i)?(n=ah(),wo=Ec=pr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dh&&i.locale!=="ko"?null:i.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!K0[n.type]:i==="textarea"}function vh(n,i,a,c){fe(c),i=Do(i,"onChange"),0<i.length&&(a=new wc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Aa=null,Ca=null;function Z0(n){Fh(n,0)}function Co(n){var i=ws(n);if(ze(i))return n}function J0(n,i){if(n==="change")return i}var _h=!1;if(f){var Pc;if(f){var Ic="oninput"in document;if(!Ic){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),Ic=typeof xh.oninput=="function"}Pc=Ic}else Pc=!1;_h=Pc&&(!document.documentMode||9<document.documentMode)}function yh(){Aa&&(Aa.detachEvent("onpropertychange",Sh),Ca=Aa=null)}function Sh(n){if(n.propertyName==="value"&&Co(Ca)){var i=[];vh(i,Ca,n,it(n)),lt(Z0,i)}}function Q0(n,i,a){n==="focusin"?(yh(),Aa=i,Ca=a,Aa.attachEvent("onpropertychange",Sh)):n==="focusout"&&yh()}function ev(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Co(Ca)}function tv(n,i){if(n==="click")return Co(i)}function nv(n,i){if(n==="input"||n==="change")return Co(i)}function iv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var pi=typeof Object.is=="function"?Object.is:iv;function Ra(n,i){if(pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!pi(n[d],i[d]))return!1}return!0}function Mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eh(n,i){var a=Mh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mh(a)}}function wh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?wh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Th(){for(var n=window,i=et();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=et(n.document)}return i}function Dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function rv(n){var i=Th(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&wh(a.ownerDocument.documentElement,a)){if(c!==null&&Dc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!n.extend&&h>c&&(d=c,c=h,h=d),d=Eh(a,h);var E=Eh(a,c);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),h>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sv=f&&"documentMode"in document&&11>=document.documentMode,ys=null,Lc=null,Pa=null,Nc=!1;function bh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||ys==null||ys!==et(c)||(c=ys,"selectionStart"in c&&Dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Ra(Pa,c)||(Pa=c,c=Do(Lc,"onSelect"),0<c.length&&(i=new wc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ys)))}function Ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ss={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Fc={},Ah={};f&&(Ah=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Po(n){if(Fc[n])return Fc[n];if(!Ss[n])return n;var i=Ss[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ah)return Fc[n]=i[a];return n}var Ch=Po("animationend"),Rh=Po("animationiteration"),Ph=Po("animationstart"),Ih=Po("transitionend"),Dh=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,i){Dh.set(n,i),l(i,[n])}for(var Uc=0;Uc<Lh.length;Uc++){var Oc=Lh[Uc],av=Oc.toLowerCase(),ov=Oc[0].toUpperCase()+Oc.slice(1);mr(av,"on"+ov)}mr(Ch,"onAnimationEnd"),mr(Rh,"onAnimationIteration"),mr(Ph,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(Ih,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Nh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,_o(c,i,void 0,n),n.currentTarget=null}function Fh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var E=c.length-1;0<=E;E--){var L=c[E],O=L.instance,ae=L.currentTarget;if(L=L.listener,O!==h&&d.isPropagationStopped())break e;Nh(d,L,ae),h=O}else for(E=0;E<c.length;E++){if(L=c[E],O=L.instance,ae=L.currentTarget,L=L.listener,O!==h&&d.isPropagationStopped())break e;Nh(d,L,ae),h=O}}}if(Gr)throw n=ms,Gr=!1,ms=null,n}function Wt(n,i){var a=i[Xc];a===void 0&&(a=i[Xc]=new Set);var c=n+"__bubble";a.has(c)||(Uh(i,n,2,!1),a.add(c))}function kc(n,i,a){var c=0;i&&(c|=4),Uh(a,n,c,i)}var Io="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Io]){n[Io]=!0,r.forEach(function(a){a!=="selectionchange"&&(lv.has(a)||kc(a,!1,n),kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Io]||(i[Io]=!0,kc("selectionchange",!1,i))}}function Uh(n,i,a,c){switch(sh(i)){case 1:var d=M0;break;case 4:d=E0;break;default:d=Sc}a=d.bind(null,i,a,n),d=void 0,!Ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Bc(n,i,a,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var L=c.stateNode.containerInfo;if(L===d||L.nodeType===8&&L.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;L!==null;){if(E=Wr(L),E===null)return;if(O=E.tag,O===5||O===6){c=h=E;continue e}L=L.parentNode}}c=c.return}lt(function(){var ae=h,Se=it(a),Ee=[];e:{var ye=Dh.get(n);if(ye!==void 0){var Ve=wc,Ye=n;switch(n){case"keypress":if(To(a)===0)break e;case"keydown":case"keyup":Ve=k0;break;case"focusin":Ye="focus",Ve=Ac;break;case"focusout":Ye="blur",Ve=Ac;break;case"beforeblur":case"afterblur":Ve=Ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=G0;break;case Ch:case Rh:case Ph:Ve=R0;break;case Ih:Ve=V0;break;case"scroll":Ve=w0;break;case"wheel":Ve=X0;break;case"copy":case"cut":case"paste":Ve=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=uh}var Ke=(i&4)!==0,tn=!Ke&&n==="scroll",Z=Ke?ye!==null?ye+"Capture":null:ye;Ke=[];for(var V=ae,ie;V!==null;){ie=V;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,Z!==null&&(Ae=Ot(V,Z),Ae!=null&&Ke.push(La(V,Ae,ie)))),tn)break;V=V.return}0<Ke.length&&(ye=new Ve(ye,Ye,null,a,Se),Ee.push({event:ye,listeners:Ke}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",ye&&a!==be&&(Ye=a.relatedTarget||a.fromElement)&&(Wr(Ye)||Ye[Xi]))break e;if((Ve||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ve?(Ye=a.relatedTarget||a.toElement,Ve=ae,Ye=Ye?Wr(Ye):null,Ye!==null&&(tn=Ti(Ye),Ye!==tn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Ve=null,Ye=ae),Ve!==Ye)){if(Ke=lh,Ae="onMouseLeave",Z="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=uh,Ae="onPointerLeave",Z="onPointerEnter",V="pointer"),tn=Ve==null?ye:ws(Ve),ie=Ye==null?ye:ws(Ye),ye=new Ke(Ae,V+"leave",Ve,a,Se),ye.target=tn,ye.relatedTarget=ie,Ae=null,Wr(Se)===ae&&(Ke=new Ke(Z,V+"enter",Ye,a,Se),Ke.target=ie,Ke.relatedTarget=tn,Ae=Ke),tn=Ae,Ve&&Ye)t:{for(Ke=Ve,Z=Ye,V=0,ie=Ke;ie;ie=Ms(ie))V++;for(ie=0,Ae=Z;Ae;Ae=Ms(Ae))ie++;for(;0<V-ie;)Ke=Ms(Ke),V--;for(;0<ie-V;)Z=Ms(Z),ie--;for(;V--;){if(Ke===Z||Z!==null&&Ke===Z.alternate)break t;Ke=Ms(Ke),Z=Ms(Z)}Ke=null}else Ke=null;Ve!==null&&Oh(Ee,ye,Ve,Ke,!1),Ye!==null&&tn!==null&&Oh(Ee,tn,Ye,Ke,!0)}}e:{if(ye=ae?ws(ae):window,Ve=ye.nodeName&&ye.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ye.type==="file")var Je=J0;else if(gh(ye))if(_h)Je=nv;else{Je=ev;var tt=Q0}else(Ve=ye.nodeName)&&Ve.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Je=tv);if(Je&&(Je=Je(n,ae))){vh(Ee,Je,a,Se);break e}tt&&tt(n,ye,ae),n==="focusout"&&(tt=ye._wrapperState)&&tt.controlled&&ye.type==="number"&&_n(ye,"number",ye.value)}switch(tt=ae?ws(ae):window,n){case"focusin":(gh(tt)||tt.contentEditable==="true")&&(ys=tt,Lc=ae,Pa=null);break;case"focusout":Pa=Lc=ys=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,bh(Ee,a,Se);break;case"selectionchange":if(sv)break;case"keydown":case"keyup":bh(Ee,a,Se)}var nt;if(Rc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else xs?ph(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(dh&&a.locale!=="ko"&&(xs||st!=="onCompositionStart"?st==="onCompositionEnd"&&xs&&(nt=ah()):(pr=Se,Ec="value"in pr?pr.value:pr.textContent,xs=!0)),tt=Do(ae,st),0<tt.length&&(st=new ch(st,n,null,a,Se),Ee.push({event:st,listeners:tt}),nt?st.data=nt:(nt=mh(a),nt!==null&&(st.data=nt)))),(nt=Y0?q0(n,a):$0(n,a))&&(ae=Do(ae,"onBeforeInput"),0<ae.length&&(Se=new ch("onBeforeInput","beforeinput",null,a,Se),Ee.push({event:Se,listeners:ae}),Se.data=nt))}Fh(Ee,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Do(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Ot(n,a),h!=null&&c.unshift(La(n,h,d)),h=Ot(n,i),h!=null&&c.push(La(n,h,d))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Oh(n,i,a,c,d){for(var h=i._reactName,E=[];a!==null&&a!==c;){var L=a,O=L.alternate,ae=L.stateNode;if(O!==null&&O===c)break;L.tag===5&&ae!==null&&(L=ae,d?(O=Ot(a,h),O!=null&&E.unshift(La(a,O,L))):d||(O=Ot(a,h),O!=null&&E.push(La(a,O,L)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var cv=/\r\n?/g,uv=/\u0000|\uFFFD/g;function kh(n){return(typeof n=="string"?n:""+n).replace(cv,`
`).replace(uv,"")}function Lo(n,i,a){if(i=kh(i),kh(n)!==i&&a)throw Error(t(425))}function No(){}var zc=null,Gc=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(n){return Bh.resolve(null).then(n).catch(hv)}:Vc;function hv(n){setTimeout(function(){throw n})}function Wc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ea(i)}function gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function zh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Es,Na="__reactProps$"+Es,Xi="__reactContainer$"+Es,Xc="__reactEvents$"+Es,pv="__reactListeners$"+Es,mv="__reactHandles$"+Es;function Wr(n){var i=n[Ai];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xi]||a[Ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=zh(n);n!==null;){if(a=n[Ai])return a;n=zh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[Ai]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fo(n){return n[Na]||null}var jc=[],Ts=-1;function vr(n){return{current:n}}function Xt(n){0>Ts||(n.current=jc[Ts],jc[Ts]=null,Ts--)}function Gt(n,i){Ts++,jc[Ts]=n.current,n.current=i}var _r={},En=vr(_r),Hn=vr(!1),Xr=_r;function bs(n,i){var a=n.type.contextTypes;if(!a)return _r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Vn(n){return n=n.childContextTypes,n!=null}function Uo(){Xt(Hn),Xt(En)}function Gh(n,i,a){if(En.current!==_r)throw Error(t(168));Gt(En,i),Gt(Hn,a)}function Hh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return oe({},a,c)}function Oo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Xr=En.current,Gt(En,n),Gt(Hn,Hn.current),!0}function Vh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Hh(n,i,Xr),c.__reactInternalMemoizedMergedChildContext=n,Xt(Hn),Xt(En),Gt(En,n)):Xt(Hn),Gt(Hn,a)}var ji=null,ko=!1,Yc=!1;function Wh(n){ji===null?ji=[n]:ji.push(n)}function gv(n){ko=!0,Wh(n)}function xr(){if(!Yc&&ji!==null){Yc=!0;var n=0,i=yt;try{var a=ji;for(yt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ji=null,ko=!1}catch(d){throw ji!==null&&(ji=ji.slice(n+1)),xo(_a,xr),d}finally{yt=i,Yc=!1}}return null}var As=[],Cs=0,Bo=null,zo=0,ii=[],ri=0,jr=null,Yi=1,qi="";function Yr(n,i){As[Cs++]=zo,As[Cs++]=Bo,Bo=n,zo=i}function Xh(n,i,a){ii[ri++]=Yi,ii[ri++]=qi,ii[ri++]=jr,jr=n;var c=Yi;n=qi;var d=32-Pe(c)-1;c&=~(1<<d),a+=1;var h=32-Pe(i)+d;if(30<h){var E=d-d%5;h=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Yi=1<<32-Pe(i)+d|a<<d|c,qi=h+n}else Yi=1<<h|a<<d|c,qi=n}function qc(n){n.return!==null&&(Yr(n,1),Xh(n,1,0))}function $c(n){for(;n===Bo;)Bo=As[--Cs],As[Cs]=null,zo=As[--Cs],As[Cs]=null;for(;n===jr;)jr=ii[--ri],ii[ri]=null,qi=ii[--ri],ii[ri]=null,Yi=ii[--ri],ii[ri]=null}var $n=null,Kn=null,qt=!1,mi=null;function jh(n,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Yh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,Kn=gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=jr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,Kn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(qt){var i=Kn;if(i){var a=i;if(!Yh(n,i)){if(Kc(n))throw Error(t(418));i=gr(a.nextSibling);var c=$n;i&&Yh(n,i)?jh(c,a):(n.flags=n.flags&-4097|2,qt=!1,$n=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,$n=n}}}function qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function Go(n){if(n!==$n)return!1;if(!qt)return qh(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=Kn)){if(Kc(n))throw $h(),Error(t(418));for(;i;)jh(n,i),i=gr(i.nextSibling)}if(qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Kn=gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Kn=null}}else Kn=$n?gr(n.stateNode.nextSibling):null;return!0}function $h(){for(var n=Kn;n;)n=gr(n.nextSibling)}function Rs(){Kn=$n=null,qt=!1}function Jc(n){mi===null?mi=[n]:mi.push(n)}var vv=I.ReactCurrentBatchConfig;function Ua(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var L=d.refs;E===null?delete L[h]:L[h]=E},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Kh(n){var i=n._init;return i(n._payload)}function Zh(n){function i(Z,V){if(n){var ie=Z.deletions;ie===null?(Z.deletions=[V],Z.flags|=16):ie.push(V)}}function a(Z,V){if(!n)return null;for(;V!==null;)i(Z,V),V=V.sibling;return null}function c(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function d(Z,V){return Z=Ar(Z,V),Z.index=0,Z.sibling=null,Z}function h(Z,V,ie){return Z.index=ie,n?(ie=Z.alternate,ie!==null?(ie=ie.index,ie<V?(Z.flags|=2,V):ie):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function E(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function L(Z,V,ie,Ae){return V===null||V.tag!==6?(V=Vu(ie,Z.mode,Ae),V.return=Z,V):(V=d(V,ie),V.return=Z,V)}function O(Z,V,ie,Ae){var Je=ie.type;return Je===k?Se(Z,V,ie.props.children,Ae,ie.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ee&&Kh(Je)===V.type)?(Ae=d(V,ie.props),Ae.ref=Ua(Z,V,ie),Ae.return=Z,Ae):(Ae=fl(ie.type,ie.key,ie.props,null,Z.mode,Ae),Ae.ref=Ua(Z,V,ie),Ae.return=Z,Ae)}function ae(Z,V,ie,Ae){return V===null||V.tag!==4||V.stateNode.containerInfo!==ie.containerInfo||V.stateNode.implementation!==ie.implementation?(V=Wu(ie,Z.mode,Ae),V.return=Z,V):(V=d(V,ie.children||[]),V.return=Z,V)}function Se(Z,V,ie,Ae,Je){return V===null||V.tag!==7?(V=ts(ie,Z.mode,Ae,Je),V.return=Z,V):(V=d(V,ie),V.return=Z,V)}function Ee(Z,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Vu(""+V,Z.mode,ie),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case z:return ie=fl(V.type,V.key,V.props,null,Z.mode,ie),ie.ref=Ua(Z,null,V),ie.return=Z,ie;case D:return V=Wu(V,Z.mode,ie),V.return=Z,V;case ee:var Ae=V._init;return Ee(Z,Ae(V._payload),ie)}if(H(V)||le(V))return V=ts(V,Z.mode,ie,null),V.return=Z,V;Ho(Z,V)}return null}function ye(Z,V,ie,Ae){var Je=V!==null?V.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:L(Z,V,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:return ie.key===Je?O(Z,V,ie,Ae):null;case D:return ie.key===Je?ae(Z,V,ie,Ae):null;case ee:return Je=ie._init,ye(Z,V,Je(ie._payload),Ae)}if(H(ie)||le(ie))return Je!==null?null:Se(Z,V,ie,Ae,null);Ho(Z,ie)}return null}function Ve(Z,V,ie,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Z=Z.get(ie)||null,L(V,Z,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case z:return Z=Z.get(Ae.key===null?ie:Ae.key)||null,O(V,Z,Ae,Je);case D:return Z=Z.get(Ae.key===null?ie:Ae.key)||null,ae(V,Z,Ae,Je);case ee:var tt=Ae._init;return Ve(Z,V,ie,tt(Ae._payload),Je)}if(H(Ae)||le(Ae))return Z=Z.get(ie)||null,Se(V,Z,Ae,Je,null);Ho(V,Ae)}return null}function Ye(Z,V,ie,Ae){for(var Je=null,tt=null,nt=V,st=V=0,pn=null;nt!==null&&st<ie.length;st++){nt.index>st?(pn=nt,nt=null):pn=nt.sibling;var Rt=ye(Z,nt,ie[st],Ae);if(Rt===null){nt===null&&(nt=pn);break}n&&nt&&Rt.alternate===null&&i(Z,nt),V=h(Rt,V,st),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt,nt=pn}if(st===ie.length)return a(Z,nt),qt&&Yr(Z,st),Je;if(nt===null){for(;st<ie.length;st++)nt=Ee(Z,ie[st],Ae),nt!==null&&(V=h(nt,V,st),tt===null?Je=nt:tt.sibling=nt,tt=nt);return qt&&Yr(Z,st),Je}for(nt=c(Z,nt);st<ie.length;st++)pn=Ve(nt,Z,st,ie[st],Ae),pn!==null&&(n&&pn.alternate!==null&&nt.delete(pn.key===null?st:pn.key),V=h(pn,V,st),tt===null?Je=pn:tt.sibling=pn,tt=pn);return n&&nt.forEach(function(Cr){return i(Z,Cr)}),qt&&Yr(Z,st),Je}function Ke(Z,V,ie,Ae){var Je=le(ie);if(typeof Je!="function")throw Error(t(150));if(ie=Je.call(ie),ie==null)throw Error(t(151));for(var tt=Je=null,nt=V,st=V=0,pn=null,Rt=ie.next();nt!==null&&!Rt.done;st++,Rt=ie.next()){nt.index>st?(pn=nt,nt=null):pn=nt.sibling;var Cr=ye(Z,nt,Rt.value,Ae);if(Cr===null){nt===null&&(nt=pn);break}n&&nt&&Cr.alternate===null&&i(Z,nt),V=h(Cr,V,st),tt===null?Je=Cr:tt.sibling=Cr,tt=Cr,nt=pn}if(Rt.done)return a(Z,nt),qt&&Yr(Z,st),Je;if(nt===null){for(;!Rt.done;st++,Rt=ie.next())Rt=Ee(Z,Rt.value,Ae),Rt!==null&&(V=h(Rt,V,st),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt);return qt&&Yr(Z,st),Je}for(nt=c(Z,nt);!Rt.done;st++,Rt=ie.next())Rt=Ve(nt,Z,st,Rt.value,Ae),Rt!==null&&(n&&Rt.alternate!==null&&nt.delete(Rt.key===null?st:Rt.key),V=h(Rt,V,st),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt);return n&&nt.forEach(function(Kv){return i(Z,Kv)}),qt&&Yr(Z,st),Je}function tn(Z,V,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===k&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:e:{for(var Je=ie.key,tt=V;tt!==null;){if(tt.key===Je){if(Je=ie.type,Je===k){if(tt.tag===7){a(Z,tt.sibling),V=d(tt,ie.props.children),V.return=Z,Z=V;break e}}else if(tt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ee&&Kh(Je)===tt.type){a(Z,tt.sibling),V=d(tt,ie.props),V.ref=Ua(Z,tt,ie),V.return=Z,Z=V;break e}a(Z,tt);break}else i(Z,tt);tt=tt.sibling}ie.type===k?(V=ts(ie.props.children,Z.mode,Ae,ie.key),V.return=Z,Z=V):(Ae=fl(ie.type,ie.key,ie.props,null,Z.mode,Ae),Ae.ref=Ua(Z,V,ie),Ae.return=Z,Z=Ae)}return E(Z);case D:e:{for(tt=ie.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===ie.containerInfo&&V.stateNode.implementation===ie.implementation){a(Z,V.sibling),V=d(V,ie.children||[]),V.return=Z,Z=V;break e}else{a(Z,V);break}else i(Z,V);V=V.sibling}V=Wu(ie,Z.mode,Ae),V.return=Z,Z=V}return E(Z);case ee:return tt=ie._init,tn(Z,V,tt(ie._payload),Ae)}if(H(ie))return Ye(Z,V,ie,Ae);if(le(ie))return Ke(Z,V,ie,Ae);Ho(Z,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,V!==null&&V.tag===6?(a(Z,V.sibling),V=d(V,ie),V.return=Z,Z=V):(a(Z,V),V=Vu(ie,Z.mode,Ae),V.return=Z,Z=V),E(Z)):a(Z,V)}return tn}var Ps=Zh(!0),Jh=Zh(!1),Vo=vr(null),Wo=null,Is=null,Qc=null;function eu(){Qc=Is=Wo=null}function tu(n){var i=Vo.current;Xt(Vo),n._currentValue=i}function nu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ds(n,i){Wo=n,Qc=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if(Wo===null)throw Error(t(308));Is=n,Wo.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var qr=null;function iu(n){qr===null?qr=[n]:qr.push(n)}function Qh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,iu(i)):(a.next=d.next,d.next=a),i.interleaved=a,$i(n,c)}function $i(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var yr=!1;function ru(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ep(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Sr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,$i(n,a)}return d=c.interleaved,d===null?(i.next=i,iu(c)):(i.next=d.next,d.next=i),c.interleaved=i,$i(n,a)}function Xo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Gn(n,a)}}function tp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var d=n.updateQueue;yr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var O=L,ae=O.next;O.next=null,E===null?h=ae:E.next=ae,E=O;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,L=Se.lastBaseUpdate,L!==E&&(L===null?Se.firstBaseUpdate=ae:L.next=ae,Se.lastBaseUpdate=O))}if(h!==null){var Ee=d.baseState;E=0,Se=ae=O=null,L=h;do{var ye=L.lane,Ve=L.eventTime;if((c&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ve,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ye=n,Ke=L;switch(ye=i,Ve=a,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Ee=Ye.call(Ve,Ee,ye);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,ye=typeof Ye=="function"?Ye.call(Ve,Ee,ye):Ye,ye==null)break e;Ee=oe({},Ee,ye);break e;case 2:yr=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,ye=d.effects,ye===null?d.effects=[L]:ye.push(L))}else Ve={eventTime:Ve,lane:ye,tag:L.tag,payload:L.payload,callback:L.callback,next:null},Se===null?(ae=Se=Ve,O=Ee):Se=Se.next=Ve,E|=ye;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;ye=L,L=ye.next,ye.next=null,d.lastBaseUpdate=ye,d.shared.pending=null}}while(!0);if(Se===null&&(O=Ee),d.baseState=O,d.firstBaseUpdate=ae,d.lastBaseUpdate=Se,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Zr|=E,n.lanes=E,n.memoizedState=Ee}}function np(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Oa={},Ci=vr(Oa),ka=vr(Oa),Ba=vr(Oa);function $r(n){if(n===Oa)throw Error(t(174));return n}function su(n,i){switch(Gt(Ba,i),Gt(ka,n),Gt(Ci,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Xt(Ci),Gt(Ci,i)}function Ls(){Xt(Ci),Xt(ka),Xt(Ba)}function ip(n){$r(Ba.current);var i=$r(Ci.current),a=M(i,n.type);i!==a&&(Gt(ka,n),Gt(Ci,a))}function au(n){ka.current===n&&(Xt(Ci),Xt(ka))}var Zt=vr(0);function Yo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ou=[];function lu(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var qo=I.ReactCurrentDispatcher,cu=I.ReactCurrentBatchConfig,Kr=0,Jt=null,an=null,fn=null,$o=!1,za=!1,Ga=0,_v=0;function wn(){throw Error(t(321))}function uu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!pi(n[a],i[a]))return!1;return!0}function du(n,i,a,c,d,h){if(Kr=h,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qo.current=n===null||n.memoizedState===null?Mv:Ev,n=a(c,d),za){h=0;do{if(za=!1,Ga=0,25<=h)throw Error(t(301));h+=1,fn=an=null,i.updateQueue=null,qo.current=wv,n=a(c,d)}while(za)}if(qo.current=Jo,i=an!==null&&an.next!==null,Kr=0,fn=an=Jt=null,$o=!1,i)throw Error(t(300));return n}function fu(){var n=Ga!==0;return Ga=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Jt.memoizedState=fn=n:fn=fn.next=n,fn}function ai(){if(an===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var i=fn===null?Jt.memoizedState:fn.next;if(i!==null)fn=i,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},fn===null?Jt.memoizedState=fn=n:fn=fn.next=n}return fn}function Ha(n,i){return typeof i=="function"?i(n):i}function hu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=an,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var L=E=null,O=null,ae=h;do{var Se=ae.lane;if((Kr&Se)===Se)O!==null&&(O=O.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),c=ae.hasEagerState?ae.eagerState:n(c,ae.action);else{var Ee={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};O===null?(L=O=Ee,E=c):O=O.next=Ee,Jt.lanes|=Se,Zr|=Se}ae=ae.next}while(ae!==null&&ae!==h);O===null?E=c:O.next=L,pi(c,i.memoizedState)||(Wn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=O,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do h=d.lane,Jt.lanes|=h,Zr|=h,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do h=n(h,E.action),E=E.next;while(E!==d);pi(h,i.memoizedState)||(Wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function rp(){}function sp(n,i){var a=Jt,c=ai(),d=i(),h=!pi(c.memoizedState,d);if(h&&(c.memoizedState=d,Wn=!0),c=c.queue,mu(lp.bind(null,a,c,n),[n]),c.getSnapshot!==i||h||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Va(9,op.bind(null,a,c,d,i),void 0,null),hn===null)throw Error(t(349));(Kr&30)!==0||ap(a,i,d)}return d}function ap(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function op(n,i,a,c){i.value=a,i.getSnapshot=c,cp(i)&&up(n)}function lp(n,i,a){return a(function(){cp(i)&&up(n)})}function cp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!pi(n,a)}catch{return!0}}function up(n){var i=$i(n,1);i!==null&&xi(i,n,1,-1)}function dp(n){var i=Ri();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:n},i.queue=n,n=n.dispatch=Sv.bind(null,Jt,n),[i.memoizedState,n]}function Va(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function fp(){return ai().memoizedState}function Ko(n,i,a,c){var d=Ri();Jt.flags|=n,d.memoizedState=Va(1|i,a,void 0,c===void 0?null:c)}function Zo(n,i,a,c){var d=ai();c=c===void 0?null:c;var h=void 0;if(an!==null){var E=an.memoizedState;if(h=E.destroy,c!==null&&uu(c,E.deps)){d.memoizedState=Va(i,a,h,c);return}}Jt.flags|=n,d.memoizedState=Va(1|i,a,h,c)}function hp(n,i){return Ko(8390656,8,n,i)}function mu(n,i){return Zo(2048,8,n,i)}function pp(n,i){return Zo(4,2,n,i)}function mp(n,i){return Zo(4,4,n,i)}function gp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function vp(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4,4,gp.bind(null,i,n),a)}function gu(){}function _p(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function xp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function yp(n,i,a){return(Kr&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=a):(pi(a,i)||(a=He(),Jt.lanes|=a,Zr|=a,n.baseState=!0),i)}function xv(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var c=cu.transition;cu.transition={};try{n(!1),i()}finally{yt=a,cu.transition=c}}function Sp(){return ai().memoizedState}function yv(n,i,a){var c=Tr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Mp(n))Ep(i,a);else if(a=Qh(n,i,a,c),a!==null){var d=Fn();xi(a,n,c,d),wp(a,i,c)}}function Sv(n,i,a){var c=Tr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mp(n))Ep(i,d);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,L=h(E,a);if(d.hasEagerState=!0,d.eagerState=L,pi(L,E)){var O=i.interleaved;O===null?(d.next=d,iu(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}a=Qh(n,i,d,c),a!==null&&(d=Fn(),xi(a,n,c,d),wp(a,i,c))}}function Mp(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function Ep(n,i){za=$o=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function wp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Gn(n,a)}}var Jo={readContext:si,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},Mv={readContext:si,useCallback:function(n,i){return Ri().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:hp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4194308,4,gp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ko(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ko(4,2,n,i)},useMemo:function(n,i){var a=Ri();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ri();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=yv.bind(null,Jt,n),[c.memoizedState,n]},useRef:function(n){var i=Ri();return n={current:n},i.memoizedState=n},useState:dp,useDebugValue:gu,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=dp(!1),i=n[0];return n=xv.bind(null,n[1]),Ri().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Jt,d=Ri();if(qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(Kr&30)!==0||ap(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,hp(lp.bind(null,c,h,n),[n]),c.flags|=2048,Va(9,op.bind(null,c,h,a,i),void 0,null),a},useId:function(){var n=Ri(),i=hn.identifierPrefix;if(qt){var a=qi,c=Yi;a=(c&~(1<<32-Pe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_v++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ev={readContext:si,useCallback:_p,useContext:si,useEffect:mu,useImperativeHandle:vp,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:xp,useReducer:hu,useRef:fp,useState:function(){return hu(Ha)},useDebugValue:gu,useDeferredValue:function(n){var i=ai();return yp(i,an.memoizedState,n)},useTransition:function(){var n=hu(Ha)[0],i=ai().memoizedState;return[n,i]},useMutableSource:rp,useSyncExternalStore:sp,useId:Sp,unstable_isNewReconciler:!1},wv={readContext:si,useCallback:_p,useContext:si,useEffect:mu,useImperativeHandle:vp,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:xp,useReducer:pu,useRef:fp,useState:function(){return pu(Ha)},useDebugValue:gu,useDeferredValue:function(n){var i=ai();return an===null?i.memoizedState=n:yp(i,an.memoizedState,n)},useTransition:function(){var n=pu(Ha)[0],i=ai().memoizedState;return[n,i]},useMutableSource:rp,useSyncExternalStore:sp,useId:Sp,unstable_isNewReconciler:!1};function gi(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function vu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Tr(n),h=Ki(c,d);h.payload=i,a!=null&&(h.callback=a),i=Sr(n,h,d),i!==null&&(xi(i,n,d,c),Xo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Tr(n),h=Ki(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Sr(n,h,d),i!==null&&(xi(i,n,d,c),Xo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Fn(),c=Tr(n),d=Ki(a,c);d.tag=2,i!=null&&(d.callback=i),i=Sr(n,d,c),i!==null&&(xi(i,n,c,a),Xo(i,n,c))}};function Tp(n,i,a,c,d,h,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,h,E):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(d,h):!0}function bp(n,i,a){var c=!1,d=_r,h=i.contextType;return typeof h=="object"&&h!==null?h=si(h):(d=Vn(i)?Xr:En.current,c=i.contextTypes,h=(c=c!=null)?bs(n,d):_r),i=new i(a,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=h),i}function Ap(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function _u(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ru(n);var h=i.contextType;typeof h=="object"&&h!==null?d.context=si(h):(h=Vn(i)?Xr:En.current,d.context=bs(n,h)),d.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(vu(n,i,h,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qo.enqueueReplaceState(d,d.state,null),jo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var a="",c=i;do a+=Fe(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:d,digest:null}}function xu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function yu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Tv=typeof WeakMap=="function"?WeakMap:Map;function Cp(n,i,a){a=Ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){al||(al=!0,Fu=c),yu(n,i)},a}function Rp(n,i,a){a=Ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){yu(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){yu(n,i),typeof c!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Pp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Tv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Bv.bind(null,n,i,a),i.then(n,n))}function Ip(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ki(-1,1),i.tag=2,Sr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var bv=I.ReactCurrentOwner,Wn=!1;function Nn(n,i,a,c){i.child=n===null?Jh(i,null,a,c):Ps(i,n.child,a,c)}function Lp(n,i,a,c,d){a=a.render;var h=i.ref;return Ds(i,d),c=du(n,i,a,c,h,d),a=fu(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Zi(n,i,d)):(qt&&a&&qc(i),i.flags|=1,Nn(n,i,c,d),i.child)}function Np(n,i,a,c,d){if(n===null){var h=a.type;return typeof h=="function"&&!Hu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Fp(n,i,h,c,d)):(n=fl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&d)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(E,c)&&n.ref===i.ref)return Zi(n,i,d)}return i.flags|=1,n=Ar(h,c),n.ref=i.ref,n.return=i,i.child=n}function Fp(n,i,a,c,d){if(n!==null){var h=n.memoizedProps;if(Ra(h,c)&&n.ref===i.ref)if(Wn=!1,i.pendingProps=c=h,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wn=!0);else return i.lanes=n.lanes,Zi(n,i,d)}return Su(n,i,a,c,d)}function Up(n,i,a){var c=i.pendingProps,d=c.children,h=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Us,Zn),Zn|=a;else{if((a&1073741824)===0)return n=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Us,Zn),Zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,Gt(Us,Zn),Zn|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,Gt(Us,Zn),Zn|=c;return Nn(n,i,d,a),i.child}function Op(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Su(n,i,a,c,d){var h=Vn(a)?Xr:En.current;return h=bs(i,h),Ds(i,d),a=du(n,i,a,c,h,d),c=fu(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Zi(n,i,d)):(qt&&c&&qc(i),i.flags|=1,Nn(n,i,a,d),i.child)}function kp(n,i,a,c,d){if(Vn(a)){var h=!0;Oo(i)}else h=!1;if(Ds(i,d),i.stateNode===null)tl(n,i),bp(i,a,c),_u(i,a,c,d),c=!0;else if(n===null){var E=i.stateNode,L=i.memoizedProps;E.props=L;var O=E.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=si(ae):(ae=Vn(a)?Xr:En.current,ae=bs(i,ae));var Se=a.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==c||O!==ae)&&Ap(i,E,c,ae),yr=!1;var ye=i.memoizedState;E.state=ye,jo(i,c,E,d),O=i.memoizedState,L!==c||ye!==O||Hn.current||yr?(typeof Se=="function"&&(vu(i,a,Se,c),O=i.memoizedState),(L=yr||Tp(i,a,L,c,ye,O,ae))?(Ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),E.props=c,E.state=O,E.context=ae,c=L):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,ep(n,i),L=i.memoizedProps,ae=i.type===i.elementType?L:gi(i.type,L),E.props=ae,Ee=i.pendingProps,ye=E.context,O=a.contextType,typeof O=="object"&&O!==null?O=si(O):(O=Vn(a)?Xr:En.current,O=bs(i,O));var Ve=a.getDerivedStateFromProps;(Se=typeof Ve=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==Ee||ye!==O)&&Ap(i,E,c,O),yr=!1,ye=i.memoizedState,E.state=ye,jo(i,c,E,d);var Ye=i.memoizedState;L!==Ee||ye!==Ye||Hn.current||yr?(typeof Ve=="function"&&(vu(i,a,Ve,c),Ye=i.memoizedState),(ae=yr||Tp(i,a,ae,c,ye,Ye,O)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Ye,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Ye,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ye),E.props=c,E.state=Ye,E.context=O,c=ae):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return Mu(n,i,a,c,h,d)}function Mu(n,i,a,c,d,h){Op(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&Vh(i,a,!1),Zi(n,i,h);c=i.stateNode,bv.current=i;var L=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Ps(i,n.child,null,h),i.child=Ps(i,null,L,h)):Nn(n,i,L,h),i.memoizedState=c.state,d&&Vh(i,a,!0),i.child}function Bp(n){var i=n.stateNode;i.pendingContext?Gh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gh(n,i.context,!1),su(n,i.containerInfo)}function zp(n,i,a,c,d){return Rs(),Jc(d),i.flags|=256,Nn(n,i,a,c),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,i,a){var c=i.pendingProps,d=Zt.current,h=!1,E=(i.flags&128)!==0,L;if((L=E)||(L=n!==null&&n.memoizedState===null?!1:(d&2)!==0),L?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Gt(Zt,d&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,h?(c=i.mode,h=i.child,E={mode:"hidden",children:E},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=hl(E,c,0,null),n=ts(n,c,a,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=wu(a),i.memoizedState=Eu,n):Tu(i,E));if(d=n.memoizedState,d!==null&&(L=d.dehydrated,L!==null))return Av(n,i,E,c,L,d,a);if(h){h=c.fallback,E=i.mode,d=n.child,L=d.sibling;var O={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=Ar(d,O),c.subtreeFlags=d.subtreeFlags&14680064),L!==null?h=Ar(L,h):(h=ts(h,E,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,E=n.child.memoizedState,E=E===null?wu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=n.childLanes&~a,i.memoizedState=Eu,c}return h=n.child,n=h.sibling,c=Ar(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Tu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,a,c){return c!==null&&Jc(c),Ps(i,n.child,null,a),n=Tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Av(n,i,a,c,d,h,E){if(a)return i.flags&256?(i.flags&=-257,c=xu(Error(t(422))),el(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=hl({mode:"visible",children:c.children},d,0,null),h=ts(h,d,E,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&Ps(i,n.child,null,E),i.child.memoizedState=wu(E),i.memoizedState=Eu,h);if((i.mode&1)===0)return el(n,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var L=c.dgst;return c=L,h=Error(t(419)),c=xu(h,c,void 0),el(n,i,E,c)}if(L=(E&n.childLanes)!==0,Wn||L){if(c=hn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,$i(n,d),xi(c,n,d,-1))}return Gu(),c=xu(Error(t(421))),el(n,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=zv.bind(null,n),d._reactRetry=i,null):(n=h.treeContext,Kn=gr(d.nextSibling),$n=i,qt=!0,mi=null,n!==null&&(ii[ri++]=Yi,ii[ri++]=qi,ii[ri++]=jr,Yi=n.id,qi=n.overflow,jr=i),i=Tu(i,c.children),i.flags|=4096,i)}function Hp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),nu(n.return,i,a)}function bu(n,i,a,c,d){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function Vp(n,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Nn(n,i,c.children,a),c=Zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hp(n,a,i);else if(n.tag===19)Hp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(Zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Yo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),bu(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Yo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}bu(i,!0,a,null,h);break;case"together":bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ar(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ar(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Cv(n,i,a){switch(i.tag){case 3:Bp(i),Rs();break;case 5:ip(i);break;case 1:Vn(i.type)&&Oo(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Gt(Vo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Gp(n,i,a):(Gt(Zt,Zt.current&1),n=Zi(n,i,a),n!==null?n.sibling:null);Gt(Zt,Zt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Vp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Gt(Zt,Zt.current),c)break;return null;case 22:case 23:return i.lanes=0,Up(n,i,a)}return Zi(n,i,a)}var Wp,Au,Xp,jp;Wp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Au=function(){},Xp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,$r(Ci.current);var h=null;switch(a){case"input":d=dt(n,d),c=dt(n,c),h=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),h=[];break;case"textarea":d=pt(n,d),c=pt(n,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=No)}Ge(a,c);var E;a=null;for(ae in d)if(!c.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var L=d[ae];for(E in L)L.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?h||(h=[]):(h=h||[]).push(ae,null));for(ae in c){var O=c[ae];if(L=d!=null?d[ae]:void 0,c.hasOwnProperty(ae)&&O!==L&&(O!=null||L!=null))if(ae==="style")if(L){for(E in L)!L.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in O)O.hasOwnProperty(E)&&L[E]!==O[E]&&(a||(a={}),a[E]=O[E])}else a||(h||(h=[]),h.push(ae,a)),a=O;else ae==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(h=h||[]).push(ae,O)):ae==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ae,""+O):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(O!=null&&ae==="onScroll"&&Wt("scroll",n),h||L===O||(h=[])):(h=h||[]).push(ae,O))}a&&(h=h||[]).push("style",a);var ae=h;(i.updateQueue=ae)&&(i.flags|=4)}},jp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Rv(n,i,a){var c=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Vn(i.type)&&Uo(),Tn(i),null;case 3:return c=i.stateNode,Ls(),Xt(Hn),Xt(En),lu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Go(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mi!==null&&(ku(mi),mi=null))),Au(n,i),Tn(i),null;case 5:au(i);var d=$r(Ba.current);if(a=i.type,n!==null&&i.stateNode!=null)Xp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=$r(Ci.current),Go(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[Ai]=i,c[Na]=h,n=(i.mode&1)!==0,a){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)Wt(Ia[d],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":bt(c,h),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Wt("invalid",c);break;case"textarea":It(c,h),Wt("invalid",c)}Ge(a,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var L=h[E];E==="children"?typeof L=="string"?c.textContent!==L&&(h.suppressHydrationWarning!==!0&&Lo(c.textContent,L,n),d=["children",L]):typeof L=="number"&&c.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&Lo(c.textContent,L,n),d=["children",""+L]):o.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&Wt("scroll",c)}switch(a){case"input":we(c),kt(c,h,!0);break;case"textarea":we(c),Ht(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=No)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=R(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[Ai]=i,n[Na]=c,Wp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Re(a,c),a){case"dialog":Wt("cancel",n),Wt("close",n),d=c;break;case"iframe":case"object":case"embed":Wt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)Wt(Ia[d],n);d=c;break;case"source":Wt("error",n),d=c;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),d=c;break;case"details":Wt("toggle",n),d=c;break;case"input":bt(n,c),d=dt(n,c),Wt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Wt("invalid",n);break;case"textarea":It(n,c),d=pt(n,c),Wt("invalid",n);break;default:d=c}Ge(a,d),L=d;for(h in L)if(L.hasOwnProperty(h)){var O=L[h];h==="style"?me(n,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&pe(n,O)):h==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&_e(n,O):typeof O=="number"&&_e(n,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Wt("scroll",n):O!=null&&P(n,h,O,E))}switch(a){case"input":we(n),kt(n,c,!1);break;case"textarea":we(n),Ht(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ge(c.value));break;case"select":n.multiple=!!c.multiple,h=c.value,h!=null?Bt(n,!!c.multiple,h,!1):c.defaultValue!=null&&Bt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=No)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)jp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=$r(Ba.current),$r(Ci.current),Go(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ai]=i,(h=c.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:Lo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(c.nodeValue,a,(n.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ai]=i,i.stateNode=c}return Tn(i),null;case 13:if(Xt(Zt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)$h(),Rs(),i.flags|=98560,h=!1;else if(h=Go(i),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[Ai]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),h=!1}else mi!==null&&(ku(mi),mi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?on===0&&(on=3):Gu())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Ls(),Au(n,i),n===null&&Da(i.stateNode.containerInfo),Tn(i),null;case 10:return tu(i.type._context),Tn(i),null;case 17:return Vn(i.type)&&Uo(),Tn(i),null;case 19:if(Xt(Zt),h=i.memoizedState,h===null)return Tn(i),null;if(c=(i.flags&128)!==0,E=h.rendering,E===null)if(c)Wa(h,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Yo(n),E!==null){for(i.flags|=128,Wa(h,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,n=c,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,n=E.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Gt(Zt,Zt.current&1|2),i.child}n=n.sibling}h.tail!==null&&Kt()>Os&&(i.flags|=128,c=!0,Wa(h,!1),i.lanes=4194304)}else{if(!c)if(n=Yo(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!qt)return Tn(i),null}else 2*Kt()-h.renderingStartTime>Os&&a!==1073741824&&(i.flags|=128,c=!0,Wa(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Kt(),i.sibling=null,a=Zt.current,Gt(Zt,c?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return zu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Pv(n,i){switch($c(i),i.tag){case 1:return Vn(i.type)&&Uo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ls(),Xt(Hn),Xt(En),lu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(Xt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Zt),null;case 4:return Ls(),null;case 10:return tu(i.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var nl=!1,bn=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,je=null;function Fs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(n,i,c)}else a.current=null}function Cu(n,i,a){try{a()}catch(c){Qt(n,i,c)}}var Yp=!1;function Dv(n,i){if(zc=Mo,n=Th(),Dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,L=-1,O=-1,ae=0,Se=0,Ee=n,ye=null;t:for(;;){for(var Ve;Ee!==a||d!==0&&Ee.nodeType!==3||(L=E+d),Ee!==h||c!==0&&Ee.nodeType!==3||(O=E+c),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(Ve=Ee.firstChild)!==null;)ye=Ee,Ee=Ve;for(;;){if(Ee===n)break t;if(ye===a&&++ae===d&&(L=E),ye===h&&++Se===c&&(O=E),(Ve=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=Ve}a=L===-1||O===-1?null:{start:L,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:n,selectionRange:a},Mo=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,tn=Ye.memoizedState,Z=i.stateNode,V=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:gi(i.type,Ke),tn);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Qt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return Ye=Yp,Yp=!1,Ye}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var h=d.destroy;d.destroy=void 0,h!==void 0&&Cu(i,a,h)}d=d.next}while(d!==c)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ru(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function qp(n){var i=n.alternate;i!==null&&(n.alternate=null,qp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ai],delete i[Na],delete i[Xc],delete i[pv],delete i[mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $p(n){return n.tag===5||n.tag===3||n.tag===4}function Kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=No));else if(c!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}function Iu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Iu(n,i,a),n=n.sibling;n!==null;)Iu(n,i,a),n=n.sibling}var yn=null,vi=!1;function Mr(n,i,a){for(a=a.child;a!==null;)Zp(n,i,a),a=a.sibling}function Zp(n,i,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:bn||Fs(a,i);case 6:var c=yn,d=vi;yn=null,Mr(n,i,a),yn=c,vi=d,yn!==null&&(vi?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(vi?(n=yn,a=a.stateNode,n.nodeType===8?Wc(n.parentNode,a):n.nodeType===1&&Wc(n,a),Ea(n)):Wc(yn,a.stateNode));break;case 4:c=yn,d=vi,yn=a.stateNode.containerInfo,vi=!0,Mr(n,i,a),yn=c,vi=d;break;case 0:case 11:case 14:case 15:if(!bn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Cu(a,i,E),d=d.next}while(d!==c)}Mr(n,i,a);break;case 1:if(!bn&&(Fs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(L){Qt(a,i,L)}Mr(n,i,a);break;case 21:Mr(n,i,a);break;case 22:a.mode&1?(bn=(c=bn)||a.memoizedState!==null,Mr(n,i,a),bn=c):Mr(n,i,a);break;default:Mr(n,i,a)}}function Jp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Iv),i.forEach(function(c){var d=Gv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function _i(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=n,E=i,L=E;e:for(;L!==null;){switch(L.tag){case 5:yn=L.stateNode,vi=!1;break e;case 3:yn=L.stateNode.containerInfo,vi=!0;break e;case 4:yn=L.stateNode.containerInfo,vi=!0;break e}L=L.return}if(yn===null)throw Error(t(160));Zp(h,E,d),yn=null,vi=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(ae){Qt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qp(i,n),i=i.sibling}function Qp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(i,n),Pi(n),c&4){try{Xa(3,n,n.return),il(3,n)}catch(Ke){Qt(n,n.return,Ke)}try{Xa(5,n,n.return)}catch(Ke){Qt(n,n.return,Ke)}}break;case 1:_i(i,n),Pi(n),c&512&&a!==null&&Fs(a,a.return);break;case 5:if(_i(i,n),Pi(n),c&512&&a!==null&&Fs(a,a.return),n.flags&32){var d=n.stateNode;try{_e(d,"")}catch(Ke){Qt(n,n.return,Ke)}}if(c&4&&(d=n.stateNode,d!=null)){var h=n.memoizedProps,E=a!==null?a.memoizedProps:h,L=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&at(d,h),Re(L,E);var ae=Re(L,h);for(E=0;E<O.length;E+=2){var Se=O[E],Ee=O[E+1];Se==="style"?me(d,Ee):Se==="dangerouslySetInnerHTML"?pe(d,Ee):Se==="children"?_e(d,Ee):P(d,Se,Ee,ae)}switch(L){case"input":Ut(d,h);break;case"textarea":Ne(d,h);break;case"select":var ye=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ve=h.value;Ve!=null?Bt(d,!!h.multiple,Ve,!1):ye!==!!h.multiple&&(h.defaultValue!=null?Bt(d,!!h.multiple,h.defaultValue,!0):Bt(d,!!h.multiple,h.multiple?[]:"",!1))}d[Na]=h}catch(Ke){Qt(n,n.return,Ke)}}break;case 6:if(_i(i,n),Pi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,h=n.memoizedProps;try{d.nodeValue=h}catch(Ke){Qt(n,n.return,Ke)}}break;case 3:if(_i(i,n),Pi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ea(i.containerInfo)}catch(Ke){Qt(n,n.return,Ke)}break;case 4:_i(i,n),Pi(n);break;case 13:_i(i,n),Pi(n),d=n.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Nu=Kt())),c&4&&Jp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(bn=(ae=bn)||Se,_i(i,n),bn=ae):_i(i,n),Pi(n),c&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!Se&&(n.mode&1)!==0)for(je=n,Se=n.child;Se!==null;){for(Ee=je=Se;je!==null;){switch(ye=je,Ve=ye.child,ye.tag){case 0:case 11:case 14:case 15:Xa(4,ye,ye.return);break;case 1:Fs(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=ye,a=ye.return;try{i=c,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ke){Qt(c,a,Ke)}}break;case 5:Fs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){nm(Ee);continue}}Ve!==null?(Ve.return=ye,je=Ve):nm(Ee)}Se=Se.sibling}e:for(Se=null,Ee=n;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{d=Ee.stateNode,ae?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=Ee.stateNode,O=Ee.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=ue("display",E))}catch(Ke){Qt(n,n.return,Ke)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=ae?"":Ee.memoizedProps}catch(Ke){Qt(n,n.return,Ke)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:_i(i,n),Pi(n),c&4&&Jp(n);break;case 21:break;default:_i(i,n),Pi(n)}}function Pi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if($p(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(_e(d,""),c.flags&=-33);var h=Kp(n);Iu(n,h,d);break;case 3:case 4:var E=c.stateNode.containerInfo,L=Kp(n);Pu(n,L,E);break;default:throw Error(t(161))}}catch(O){Qt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Lv(n,i,a){je=n,em(n)}function em(n,i,a){for(var c=(n.mode&1)!==0;je!==null;){var d=je,h=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||nl;if(!E){var L=d.alternate,O=L!==null&&L.memoizedState!==null||bn;L=nl;var ae=bn;if(nl=E,(bn=O)&&!ae)for(je=d;je!==null;)E=je,O=E.child,E.tag===22&&E.memoizedState!==null?im(d):O!==null?(O.return=E,je=O):im(d);for(;h!==null;)je=h,em(h),h=h.sibling;je=d,nl=L,bn=ae}tm(n)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,je=h):tm(n)}}function tm(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||il(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:gi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&np(i,h,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}np(i,E,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&Ea(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||i.flags&512&&Ru(i)}catch(ye){Qt(i,i.return,ye)}}if(i===n){je=null;break}if(a=i.sibling,a!==null){a.return=i.return,je=a;break}je=i.return}}function nm(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,je=a;break}je=i.return}}function im(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{il(4,i)}catch(O){Qt(i,a,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(O){Qt(i,d,O)}}var h=i.return;try{Ru(i)}catch(O){Qt(i,h,O)}break;case 5:var E=i.return;try{Ru(i)}catch(O){Qt(i,E,O)}}}catch(O){Qt(i,i.return,O)}if(i===n){je=null;break}var L=i.sibling;if(L!==null){L.return=i.return,je=L;break}je=i.return}}var Nv=Math.ceil,rl=I.ReactCurrentDispatcher,Du=I.ReactCurrentOwner,oi=I.ReactCurrentBatchConfig,At=0,hn=null,rn=null,Sn=0,Zn=0,Us=vr(0),on=0,ja=null,Zr=0,sl=0,Lu=0,Ya=null,Xn=null,Nu=0,Os=1/0,Ji=null,al=!1,Fu=null,Er=null,ol=!1,wr=null,ll=0,qa=0,Uu=null,cl=-1,ul=0;function Fn(){return(At&6)!==0?Kt():cl!==-1?cl:cl=Kt()}function Tr(n){return(n.mode&1)===0?1:(At&2)!==0&&Sn!==0?Sn&-Sn:vv.transition!==null?(ul===0&&(ul=He()),ul):(n=yt,n!==0||(n=window.event,n=n===void 0?16:sh(n.type)),n)}function xi(n,i,a,c){if(50<qa)throw qa=0,Uu=null,Error(t(185));_t(n,a,c),((At&2)===0||n!==hn)&&(n===hn&&((At&2)===0&&(sl|=a),on===4&&br(n,Sn)),jn(n,c),a===1&&At===0&&(i.mode&1)===0&&(Os=Kt()+500,ko&&xr()))}function jn(n,i){var a=n.callbackNode;Dt(n,i);var c=zt(n,n===hn?Sn:0);if(c===0)a!==null&&yo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&yo(a),i===1)n.tag===0?gv(sm.bind(null,n)):Wh(sm.bind(null,n)),fv(function(){(At&6)===0&&xr()}),a=null;else{switch(Wi(c)){case 1:a=_a;break;case 4:a=b;break;case 16:a=W;break;case 536870912:a=ne;break;default:a=W}a=hm(a,rm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function rm(n,i){if(cl=-1,ul=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ks()&&n.callbackNode!==a)return null;var c=zt(n,n===hn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=dl(n,c);else{i=c;var d=At;At|=2;var h=om();(hn!==n||Sn!==i)&&(Ji=null,Os=Kt()+500,Qr(n,i));do try{Ov();break}catch(L){am(n,L)}while(!0);eu(),rl.current=h,At=d,rn!==null?i=0:(hn=null,Sn=0,i=on)}if(i!==0){if(i===2&&(d=nn(n),d!==0&&(c=d,i=Ou(n,d))),i===1)throw a=ja,Qr(n,0),br(n,c),jn(n,Kt()),a;if(i===6)br(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Fv(d)&&(i=dl(n,c),i===2&&(h=nn(n),h!==0&&(c=h,i=Ou(n,h))),i===1))throw a=ja,Qr(n,0),br(n,c),jn(n,Kt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:es(n,Xn,Ji);break;case 3:if(br(n,c),(c&130023424)===c&&(i=Nu+500-Kt(),10<i)){if(zt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Fn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Vc(es.bind(null,n,Xn,Ji),i);break}es(n,Xn,Ji);break;case 4:if(br(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var E=31-Pe(c);h=1<<E,E=i[E],E>d&&(d=E),c&=~h}if(c=d,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Nv(c/1960))-c,10<c){n.timeoutHandle=Vc(es.bind(null,n,Xn,Ji),c);break}es(n,Xn,Ji);break;case 5:es(n,Xn,Ji);break;default:throw Error(t(329))}}}return jn(n,Kt()),n.callbackNode===a?rm.bind(null,n):null}function Ou(n,i){var a=Ya;return n.current.memoizedState.isDehydrated&&(Qr(n,i).flags|=256),n=dl(n,i),n!==2&&(i=Xn,Xn=a,i!==null&&ku(i)),n}function ku(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function Fv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!pi(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(n,i){for(i&=~Lu,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Pe(i),c=1<<a;n[a]=-1,i&=~c}}function sm(n){if((At&6)!==0)throw Error(t(327));ks();var i=zt(n,0);if((i&1)===0)return jn(n,Kt()),null;var a=dl(n,i);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(i=c,a=Ou(n,c))}if(a===1)throw a=ja,Qr(n,0),br(n,i),jn(n,Kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,es(n,Xn,Ji),jn(n,Kt()),null}function Bu(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Os=Kt()+500,ko&&xr())}}function Jr(n){wr!==null&&wr.tag===0&&(At&6)===0&&ks();var i=At;At|=1;var a=oi.transition,c=yt;try{if(oi.transition=null,yt=1,n)return n()}finally{yt=c,oi.transition=a,At=i,(At&6)===0&&xr()}}function zu(){Zn=Us.current,Xt(Us)}function Qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,dv(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Uo();break;case 3:Ls(),Xt(Hn),Xt(En),lu();break;case 5:au(c);break;case 4:Ls();break;case 13:Xt(Zt);break;case 19:Xt(Zt);break;case 10:tu(c.type._context);break;case 22:case 23:zu()}a=a.return}if(hn=n,rn=n=Ar(n.current,null),Sn=Zn=i,on=0,ja=null,Lu=sl=Zr=0,Xn=Ya=null,qr!==null){for(i=0;i<qr.length;i++)if(a=qr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var E=h.next;h.next=d,c.next=E}a.pending=c}qr=null}return n}function am(n,i){do{var a=rn;try{if(eu(),qo.current=Jo,$o){for(var c=Jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$o=!1}if(Kr=0,fn=an=Jt=null,za=!1,Ga=0,Du.current=null,a===null||a.return===null){on=1,ja=i,rn=null;break}e:{var h=n,E=a.return,L=a,O=i;if(i=Sn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ae=O,Se=L,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ve=Ip(E);if(Ve!==null){Ve.flags&=-257,Dp(Ve,E,L,h,i),Ve.mode&1&&Pp(h,ae,i),i=Ve,O=ae;var Ye=i.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(O),i.updateQueue=Ke}else Ye.add(O);break e}else{if((i&1)===0){Pp(h,ae,i),Gu();break e}O=Error(t(426))}}else if(qt&&L.mode&1){var tn=Ip(E);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),Dp(tn,E,L,h,i),Jc(Ns(O,L));break e}}h=O=Ns(O,L),on!==4&&(on=2),Ya===null?Ya=[h]:Ya.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Cp(h,O,i);tp(h,Z);break e;case 1:L=O;var V=h.type,ie=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Er===null||!Er.has(ie)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ae=Rp(h,L,i);tp(h,Ae);break e}}h=h.return}while(h!==null)}cm(a)}catch(Je){i=Je,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function om(){var n=rl.current;return rl.current=Jo,n===null?Jo:n}function Gu(){(on===0||on===3||on===2)&&(on=4),hn===null||(Zr&268435455)===0&&(sl&268435455)===0||br(hn,Sn)}function dl(n,i){var a=At;At|=2;var c=om();(hn!==n||Sn!==i)&&(Ji=null,Qr(n,i));do try{Uv();break}catch(d){am(n,d)}while(!0);if(eu(),At=a,rl.current=c,rn!==null)throw Error(t(261));return hn=null,Sn=0,on}function Uv(){for(;rn!==null;)lm(rn)}function Ov(){for(;rn!==null&&!_c();)lm(rn)}function lm(n){var i=fm(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,i===null?cm(n):rn=i,Du.current=null}function cm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Rv(a,i,Zn),a!==null){rn=a;return}}else{if(a=Pv(a,i),a!==null){a.flags&=32767,rn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=n}while(i!==null);on===0&&(on=5)}function es(n,i,a){var c=yt,d=oi.transition;try{oi.transition=null,yt=1,kv(n,i,a,c)}finally{oi.transition=d,yt=c}return null}function kv(n,i,a,c){do ks();while(wr!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=a.lanes|a.childLanes;if(zn(n,h),n===hn&&(rn=hn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ol||(ol=!0,hm(W,function(){return ks(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=oi.transition,oi.transition=null;var E=yt;yt=1;var L=At;At|=4,Du.current=null,Dv(n,a),Qp(a,n),rv(Gc),Mo=!!zc,Gc=zc=null,n.current=a,Lv(a),xc(),At=L,yt=E,oi.transition=h}else n.current=a;if(ol&&(ol=!1,wr=n,ll=d),h=n.pendingLanes,h===0&&(Er=null),Xe(a.stateNode),jn(n,Kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(al)throw al=!1,n=Fu,Fu=null,n;return(ll&1)!==0&&n.tag!==0&&ks(),h=n.pendingLanes,(h&1)!==0?n===Uu?qa++:(qa=0,Uu=n):qa=0,xr(),null}function ks(){if(wr!==null){var n=Wi(ll),i=oi.transition,a=yt;try{if(oi.transition=null,yt=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,ll=0,(At&6)!==0)throw Error(t(331));var d=At;for(At|=4,je=n.current;je!==null;){var h=je,E=h.child;if((je.flags&16)!==0){var L=h.deletions;if(L!==null){for(var O=0;O<L.length;O++){var ae=L[O];for(je=ae;je!==null;){var Se=je;switch(Se.tag){case 0:case 11:case 15:Xa(8,Se,h)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,je=Ee;else for(;je!==null;){Se=je;var ye=Se.sibling,Ve=Se.return;if(qp(Se),Se===ae){je=null;break}if(ye!==null){ye.return=Ve,je=ye;break}je=Ve}}}var Ye=h.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var tn=Ke.sibling;Ke.sibling=null,Ke=tn}while(Ke!==null)}}je=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,je=E;else e:for(;je!==null;){if(h=je,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Xa(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,je=Z;break e}je=h.return}}var V=n.current;for(je=V;je!==null;){E=je;var ie=E.child;if((E.subtreeFlags&2064)!==0&&ie!==null)ie.return=E,je=ie;else e:for(E=V;je!==null;){if(L=je,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:il(9,L)}}catch(Je){Qt(L,L.return,Je)}if(L===E){je=null;break e}var Ae=L.sibling;if(Ae!==null){Ae.return=L.return,je=Ae;break e}je=L.return}}if(At=d,xr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{yt=a,oi.transition=i}}return!1}function um(n,i,a){i=Ns(a,i),i=Cp(n,i,1),n=Sr(n,i,1),i=Fn(),n!==null&&(_t(n,1,i),jn(n,i))}function Qt(n,i,a){if(n.tag===3)um(n,n,a);else for(;i!==null;){if(i.tag===3){um(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Er===null||!Er.has(c))){n=Ns(a,n),n=Rp(i,n,1),i=Sr(i,n,1),n=Fn(),i!==null&&(_t(i,1,n),jn(i,n));break}}i=i.return}}function Bv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(Sn&a)===a&&(on===4||on===3&&(Sn&130023424)===Sn&&500>Kt()-Nu?Qr(n,0):Lu|=a),jn(n,i)}function dm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=Fn();n=$i(n,i),n!==null&&(_t(n,i,a),jn(n,a))}function zv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),dm(n,a)}function Gv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),dm(n,a)}var fm;fm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Wn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,Cv(n,i,a);Wn=(n.flags&131072)!==0}else Wn=!1,qt&&(i.flags&1048576)!==0&&Xh(i,zo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;tl(n,i),n=i.pendingProps;var d=bs(i,En.current);Ds(i,a),d=du(null,i,c,n,d,a);var h=fu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Vn(c)?(h=!0,Oo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ru(i),d.updater=Qo,i.stateNode=d,d._reactInternals=i,_u(i,c,n,a),i=Mu(null,i,c,!0,h,a)):(i.tag=0,qt&&h&&qc(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Vv(c),n=gi(c,n),d){case 0:i=Su(null,i,c,n,a);break e;case 1:i=kp(null,i,c,n,a);break e;case 11:i=Lp(null,i,c,n,a);break e;case 14:i=Np(null,i,c,gi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),Su(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),kp(n,i,c,d,a);case 3:e:{if(Bp(i),n===null)throw Error(t(387));c=i.pendingProps,h=i.memoizedState,d=h.element,ep(n,i),jo(i,c,null,a);var E=i.memoizedState;if(c=E.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Ns(Error(t(423)),i),i=zp(n,i,c,a,d);break e}else if(c!==d){d=Ns(Error(t(424)),i),i=zp(n,i,c,a,d);break e}else for(Kn=gr(i.stateNode.containerInfo.firstChild),$n=i,qt=!0,mi=null,a=Jh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),c===d){i=Zi(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return ip(i),n===null&&Zc(i),c=i.type,d=i.pendingProps,h=n!==null?n.memoizedProps:null,E=d.children,Hc(c,d)?E=null:h!==null&&Hc(c,h)&&(i.flags|=32),Op(n,i),Nn(n,i,E,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return Gp(n,i,a);case 4:return su(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ps(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),Lp(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,Gt(Vo,c._currentValue),c._currentValue=E,h!==null)if(pi(h.value,E)){if(h.children===d.children&&!Hn.current){i=Zi(n,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){E=h.child;for(var O=L.firstContext;O!==null;){if(O.context===c){if(h.tag===1){O=Ki(-1,a&-a),O.tag=2;var ae=h.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?O.next=O:(O.next=Se.next,Se.next=O),ae.pending=O}}h.lanes|=a,O=h.alternate,O!==null&&(O.lanes|=a),nu(h.return,a,i),L.lanes|=a;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(t(341));E.lanes|=a,L=E.alternate,L!==null&&(L.lanes|=a),nu(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ds(i,a),d=si(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=gi(c,i.pendingProps),d=gi(c.type,d),Np(n,i,c,d,a);case 15:return Fp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),tl(n,i),i.tag=1,Vn(c)?(n=!0,Oo(i)):n=!1,Ds(i,a),bp(i,c,d),_u(i,c,d,a),Mu(null,i,c,!0,n,a);case 19:return Vp(n,i,a);case 22:return Up(n,i,a)}throw Error(t(156,i.tag))};function hm(n,i){return xo(n,i)}function Hv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,a,c){return new Hv(n,i,a,c)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Vv(n){if(typeof n=="function")return Hu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===G)return 14}return 2}function Ar(n,i){var a=n.alternate;return a===null?(a=li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fl(n,i,a,c,d,h){var E=2;if(c=n,typeof n=="function")Hu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case k:return ts(a.children,d,h,i);case T:E=8,d|=8;break;case N:return n=li(12,a,i,d|2),n.elementType=N,n.lanes=h,n;case ce:return n=li(13,a,i,d),n.elementType=ce,n.lanes=h,n;case de:return n=li(19,a,i,d),n.elementType=de,n.lanes=h,n;case j:return hl(a,d,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:E=10;break e;case U:E=9;break e;case J:E=11;break e;case G:E=14;break e;case ee:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(E,a,i,d),i.elementType=n,i.type=c,i.lanes=h,i}function ts(n,i,a,c){return n=li(7,n,c,i),n.lanes=a,n}function hl(n,i,a,c){return n=li(22,n,c,i),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function Vu(n,i,a){return n=li(6,n,null,i),n.lanes=a,n}function Wu(n,i,a){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Wv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xu(n,i,a,c,d,h,E,L,O){return n=new Wv(n,i,a,L,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=li(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(h),n}function Xv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function pm(n){if(!n)return _r;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Vn(a))return Hh(n,a,i)}return i}function mm(n,i,a,c,d,h,E,L,O){return n=Xu(a,c,!0,n,d,h,E,L,O),n.context=pm(null),a=n.current,c=Fn(),d=Tr(a),h=Ki(c,d),h.callback=i??null,Sr(a,h,d),n.current.lanes=d,_t(n,d,c),jn(n,c),n}function pl(n,i,a,c){var d=i.current,h=Fn(),E=Tr(d);return a=pm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ki(h,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Sr(d,i,E),n!==null&&(xi(n,d,E,h),Xo(n,d,E)),E}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ju(n,i){gm(n,i),(n=n.alternate)&&gm(n,i)}function jv(){return null}var vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yu(n){this._internalRoot=n}gl.prototype.render=Yu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Jr(function(){pl(null,n,null,null)}),i[Xi]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Lt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&ih(n)}};function qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _m(){}function Yv(n,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var ae=ml(E);h.call(ae)}}var E=mm(i,c,n,0,null,!1,!1,"",_m);return n._reactRootContainer=E,n[Xi]=E.current,Da(n.nodeType===8?n.parentNode:n),Jr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var L=c;c=function(){var ae=ml(O);L.call(ae)}}var O=Xu(n,0,!1,null,null,!1,!1,"",_m);return n._reactRootContainer=O,n[Xi]=O.current,Da(n.nodeType===8?n.parentNode:n),Jr(function(){pl(i,O,a,c)}),O}function _l(n,i,a,c,d){var h=a._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var L=d;d=function(){var O=ml(E);L.call(O)}}pl(i,E,n,d)}else E=Yv(a,i,n,d,c);return ml(E)}Pt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Tt(i.pendingLanes);a!==0&&(Gn(i,a|1),jn(i,Kt()),(At&6)===0&&(Os=Kt()+500,xr()))}break;case 13:Jr(function(){var c=$i(n,1);if(c!==null){var d=Fn();xi(c,n,1,d)}}),ju(n,1)}},Vt=function(n){if(n.tag===13){var i=$i(n,134217728);if(i!==null){var a=Fn();xi(i,n,134217728,a)}ju(n,134217728)}},fi=function(n){if(n.tag===13){var i=Tr(n),a=$i(n,i);if(a!==null){var c=Fn();xi(a,n,i,c)}ju(n,i)}},Lt=function(){return yt},hi=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},ot=function(n,i,a){switch(i){case"input":if(Ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Fo(c);if(!d)throw Error(t(90));ze(c),Ut(c,d)}}}break;case"textarea":Ne(n,a);break;case"select":i=a.value,i!=null&&Bt(n,!!a.multiple,i,!1)}},Ie=Bu,xe=Jr;var qv={usingClientEntryPoint:!1,Events:[Fa,ws,Fo,fe,Be,Bu]},$a={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$v={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ga(n),n===null?null:n.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{te=xl.inject($v),De=xl}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv,Yn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(i))throw Error(t(200));return Xv(n,i,null,a)},Yn.createRoot=function(n,i){if(!qu(n))throw Error(t(299));var a=!1,c="",d=vm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xu(n,1,!1,null,null,a,!1,c,d),n[Xi]=i.current,Da(n.nodeType===8?n.parentNode:n),new Yu(i)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ga(i),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return Jr(n)},Yn.hydrate=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,a)},Yn.hydrateRoot=function(n,i,a){if(!qu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",E=vm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=mm(i,null,n,1,a??null,d,!1,h,E),n[Xi]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new gl(i)},Yn.render=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,a)},Yn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(Jr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Yn.unstable_batchedUpdates=Bu,Yn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!vl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,c)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var bm;function i_(){if(bm)return Zu.exports;bm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zu.exports=n_(),Zu.exports}var Am;function r_(){if(Am)return yl;Am=1;var s=i_();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var s_=r_();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="184",a_=0,Cm=1,o_=2,Zl=1,l_=2,oo=3,or=0,Bn=1,Ni=2,sr=0,aa=1,ia=2,Rm=3,Pm=4,c_=5,os=100,u_=101,d_=102,f_=103,h_=104,p_=200,m_=201,g_=202,v_=203,Ud=204,Od=205,__=206,x_=207,y_=208,S_=209,M_=210,E_=211,w_=212,T_=213,b_=214,kd=0,Bd=1,zd=2,la=3,Gd=4,Hd=5,Vd=6,Wd=7,Ff=0,A_=1,C_=2,ki=0,Ng=1,Fg=2,Ug=3,Uf=4,Og=5,kg=6,Bg=7,zg=300,ds=301,ca=302,ed=303,td=304,hc=306,Xd=1e3,rr=1001,jd=1002,Mn=1003,R_=1004,Sl=1005,Pn=1006,nd=1007,cs=1008,ti=1009,Gg=1010,Hg=1011,fo=1012,Of=1013,zi=1014,Ui=1015,lr=1016,kf=1017,Bf=1018,ho=1020,Vg=35902,Wg=35899,Xg=1021,jg=1022,Ei=1023,cr=1026,us=1027,Yg=1028,zf=1029,fs=1030,Gf=1031,Hf=1033,Jl=33776,Ql=33777,ec=33778,tc=33779,Yd=35840,qd=35841,$d=35842,Kd=35843,Zd=36196,Jd=37492,Qd=37496,ef=37488,tf=37489,ic=37490,nf=37491,rf=37808,sf=37809,af=37810,of=37811,lf=37812,cf=37813,uf=37814,df=37815,ff=37816,hf=37817,pf=37818,mf=37819,gf=37820,vf=37821,_f=36492,xf=36494,yf=36495,Sf=36283,Mf=36284,rc=36285,Ef=36286,P_=3200,wf=0,I_=1,Ur="",ui="srgb",sc="srgb-linear",ac="linear",Nt="srgb",Bs=7680,Im=519,D_=512,L_=513,N_=514,Vf=515,F_=516,U_=517,Wf=518,O_=519,Tf=35044,Dm="300 es",Oi=2e3,po=2001;function k_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function B_(){const s=oc("canvas");return s.style.display="block",s}const Lm={};function lc(...s){const e="THREE."+s.shift();console.log(e,...s)}function qg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=qg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Mt(...s){s=qg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function bf(...s){const e=s.join(" ");e in Lm||(Lm[e]=!0,rt(...s))}function z_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const G_={[kd]:Bd,[zd]:Vd,[Gd]:Wd,[la]:Hd,[Bd]:kd,[Vd]:zd,[Wd]:Gd,[Hd]:la};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,Af=180/Math.PI;function kr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function H_(s,e){return(s%e+e)%e}function rd(s,e,t){return(1-t)*s+t*e}function Fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Zf=class Zf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zf.prototype.isVector2=!0;let gt=Zf;class fa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let m=r[o+0],p=r[o+1],v=r[o+2],y=r[o+3],g=l[u+0],S=l[u+1],w=l[u+2],A=l[u+3];if(y!==A||m!==g||p!==S||v!==w){let _=m*g+p*S+v*w+y*A;_<0&&(g=-g,S=-S,w=-w,A=-A,_=-_);let x=1-f;if(_<.9995){const C=Math.acos(_),P=Math.sin(C);x=Math.sin(x*C)/P,f=Math.sin(f*C)/P,m=m*x+g*f,p=p*x+S*f,v=v*x+w*f,y=y*x+A*f}else{m=m*x+g*f,p=p*x+S*f,v=v*x+w*f,y=y*x+A*f;const C=1/Math.sqrt(m*m+p*p+v*v+y*y);m*=C,p*=C,v*=C,y*=C}}e[t]=m,e[t+1]=p,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],m=r[o+1],p=r[o+2],v=r[o+3],y=l[u],g=l[u+1],S=l[u+2],w=l[u+3];return e[t]=f*w+v*y+m*S-p*g,e[t+1]=m*w+v*g+p*y-f*S,e[t+2]=p*w+v*S+f*g-m*y,e[t+3]=v*w-f*y-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(r/2),v=f(o/2),y=f(l/2),g=m(r/2),S=m(o/2),w=m(l/2);switch(u){case"XYZ":this._x=g*v*y+p*S*w,this._y=p*S*y-g*v*w,this._z=p*v*w+g*S*y,this._w=p*v*y-g*S*w;break;case"YXZ":this._x=g*v*y+p*S*w,this._y=p*S*y-g*v*w,this._z=p*v*w-g*S*y,this._w=p*v*y+g*S*w;break;case"ZXY":this._x=g*v*y-p*S*w,this._y=p*S*y+g*v*w,this._z=p*v*w+g*S*y,this._w=p*v*y-g*S*w;break;case"ZYX":this._x=g*v*y-p*S*w,this._y=p*S*y+g*v*w,this._z=p*v*w-g*S*y,this._w=p*v*y+g*S*w;break;case"YZX":this._x=g*v*y+p*S*w,this._y=p*S*y+g*v*w,this._z=p*v*w-g*S*y,this._w=p*v*y-g*S*w;break;case"XZY":this._x=g*v*y-p*S*w,this._y=p*S*y-g*v*w,this._z=p*v*w+g*S*y,this._w=p*v*y+g*S*w;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],v=t[6],y=t[10],g=r+f+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-m)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(v-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*m,this._y=o*v+u*m+l*f-r*p,this._z=l*v+u*p+r*m-o*f,this._w=u*v-r*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);m=Math.sin(m*p)/v,t=Math.sin(t*p)/v,this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jf=class Jf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),y=2*(l*r-u*t);return this.x=t+m*p+u*y-f*v,this.y=r+m*v+f*p-l*y,this.z=o+m*y+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-r*m,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jf.prototype.isVector3=!0;let $=Jf;const sd=new $,Nm=new fa,Qf=class Qf{constructor(e,t,r,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,m,p)}set(e,t,r,o,l,u,f,m,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=m,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],m=r[6],p=r[1],v=r[4],y=r[7],g=r[2],S=r[5],w=r[8],A=o[0],_=o[3],x=o[6],C=o[1],P=o[4],I=o[7],z=o[2],D=o[5],k=o[8];return l[0]=u*A+f*C+m*z,l[3]=u*_+f*P+m*D,l[6]=u*x+f*I+m*k,l[1]=p*A+v*C+y*z,l[4]=p*_+v*P+y*D,l[7]=p*x+v*I+y*k,l[2]=g*A+S*C+w*z,l[5]=g*_+S*P+w*D,l[8]=g*x+S*I+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],v=e[8],y=v*u-f*p,g=f*m-v*l,S=p*l-u*m,w=t*y+r*g+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(o*p-v*r)*A,e[2]=(f*r-o*u)*A,e[3]=g*A,e[4]=(v*t-o*m)*A,e[5]=(o*l-f*t)*A,e[6]=S*A,e[7]=(r*m-p*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ad.makeScale(e,t)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qf.prototype.isMatrix3=!0;let ft=Qf;const ad=new ft,Fm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V_(){const s={enabled:!0,workingColorSpace:sc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(o.r=ar(o.r),o.g=ar(o.g),o.b=ar(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(o.r=oa(o.r),o.g=oa(o.g),o.b=oa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?ac:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return bf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return bf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[sc]:{primaries:e,whitePoint:r,transfer:ac,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Et=V_();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class W_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=oc("canvas")),zs.width=e.width,zs.height=e.height;const o=zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X_=0;class Xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(od(o[u].image)):l.push(od(o[u]))}else l=od(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function od(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?W_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let j_=0;const ld=new $;class In extends hs{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=rr,o=rr,l=Pn,u=cs,f=Ei,m=ti,p=In.DEFAULT_ANISOTROPY,v=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=kr(),this.name="",this.source=new Xf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=zg;In.DEFAULT_ANISOTROPY=1;const eh=class eh{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const m=e.elements,p=m[0],v=m[4],y=m[8],g=m[1],S=m[5],w=m[9],A=m[2],_=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(y-A)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+A)<.1&&Math.abs(w+_)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,I=(S+1)/2,z=(x+1)/2,D=(v+g)/4,k=(y+A)/4,T=(w+_)/4;return P>I&&P>z?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=D/r,l=k/r):I>z?I<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(I),r=D/o,l=T/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=k/l,o=T/l),this.set(r,o,l,t),this}let C=Math.sqrt((_-w)*(_-w)+(y-A)*(y-A)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(_-w)/C,this.y=(y-A)/C,this.z=(g-v)/C,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eh.prototype.isVector4=!0;let en=eh;class Y_ extends hs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new In(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Xf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends Y_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $g extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class q_ extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=class fc{constructor(e,t,r,o,l,u,f,m,p,v,y,g,S,w,A,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,m,p,v,y,g,S,w,A,_)}set(e,t,r,o,l,u,f,m,p,v,y,g,S,w,A,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=m,x[2]=p,x[6]=v,x[10]=y,x[14]=g,x[3]=S,x[7]=w,x[11]=A,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Gs.setFromMatrixColumn(e,0).length(),l=1/Gs.setFromMatrixColumn(e,1).length(),u=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(o),p=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*y,w=f*v,A=f*y;t[0]=m*v,t[4]=-m*y,t[8]=p,t[1]=S+w*p,t[5]=g-A*p,t[9]=-f*m,t[2]=A-g*p,t[6]=w+S*p,t[10]=u*m}else if(e.order==="YXZ"){const g=m*v,S=m*y,w=p*v,A=p*y;t[0]=g+A*f,t[4]=w*f-S,t[8]=u*p,t[1]=u*y,t[5]=u*v,t[9]=-f,t[2]=S*f-w,t[6]=A+g*f,t[10]=u*m}else if(e.order==="ZXY"){const g=m*v,S=m*y,w=p*v,A=p*y;t[0]=g-A*f,t[4]=-u*y,t[8]=w+S*f,t[1]=S+w*f,t[5]=u*v,t[9]=A-g*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const g=u*v,S=u*y,w=f*v,A=f*y;t[0]=m*v,t[4]=w*p-S,t[8]=g*p+A,t[1]=m*y,t[5]=A*p+g,t[9]=S*p-w,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const g=u*m,S=u*p,w=f*m,A=f*p;t[0]=m*v,t[4]=A-g*y,t[8]=w*y+S,t[1]=y,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*y+w,t[10]=g-A*y}else if(e.order==="XZY"){const g=u*m,S=u*p,w=f*m,A=f*p;t[0]=m*v,t[4]=-y,t[8]=p*v,t[1]=g*y+A,t[5]=u*v,t[9]=S*y-w,t[2]=w*y-S,t[6]=f*v,t[10]=A*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($_,e,K_)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Rr.crossVectors(r,Jn),Rr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Rr.crossVectors(r,Jn)),Rr.normalize(),Ml.crossVectors(Jn,Rr),o[0]=Rr.x,o[4]=Ml.x,o[8]=Jn.x,o[1]=Rr.y,o[5]=Ml.y,o[9]=Jn.y,o[2]=Rr.z,o[6]=Ml.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],m=r[8],p=r[12],v=r[1],y=r[5],g=r[9],S=r[13],w=r[2],A=r[6],_=r[10],x=r[14],C=r[3],P=r[7],I=r[11],z=r[15],D=o[0],k=o[4],T=o[8],N=o[12],Y=o[1],U=o[5],J=o[9],ce=o[13],de=o[2],G=o[6],ee=o[10],j=o[14],q=o[3],le=o[7],oe=o[11],F=o[15];return l[0]=u*D+f*Y+m*de+p*q,l[4]=u*k+f*U+m*G+p*le,l[8]=u*T+f*J+m*ee+p*oe,l[12]=u*N+f*ce+m*j+p*F,l[1]=v*D+y*Y+g*de+S*q,l[5]=v*k+y*U+g*G+S*le,l[9]=v*T+y*J+g*ee+S*oe,l[13]=v*N+y*ce+g*j+S*F,l[2]=w*D+A*Y+_*de+x*q,l[6]=w*k+A*U+_*G+x*le,l[10]=w*T+A*J+_*ee+x*oe,l[14]=w*N+A*ce+_*j+x*F,l[3]=C*D+P*Y+I*de+z*q,l[7]=C*k+P*U+I*G+z*le,l[11]=C*T+P*J+I*ee+z*oe,l[15]=C*N+P*ce+I*j+z*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],v=e[2],y=e[6],g=e[10],S=e[14],w=e[3],A=e[7],_=e[11],x=e[15],C=m*S-p*g,P=f*S-p*y,I=f*g-m*y,z=u*S-p*v,D=u*g-m*v,k=u*y-f*v;return t*(A*C-_*P+x*I)-r*(w*C-_*z+x*D)+o*(w*P-A*z+x*k)-l*(w*I-A*D+_*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],v=e[8],y=e[9],g=e[10],S=e[11],w=e[12],A=e[13],_=e[14],x=e[15],C=t*f-r*u,P=t*m-o*u,I=t*p-l*u,z=r*m-o*f,D=r*p-l*f,k=o*p-l*m,T=v*A-y*w,N=v*_-g*w,Y=v*x-S*w,U=y*_-g*A,J=y*x-S*A,ce=g*x-S*_,de=C*ce-P*J+I*U+z*Y-D*N+k*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/de;return e[0]=(f*ce-m*J+p*U)*G,e[1]=(o*J-r*ce-l*U)*G,e[2]=(A*k-_*D+x*z)*G,e[3]=(g*D-y*k-S*z)*G,e[4]=(m*Y-u*ce-p*N)*G,e[5]=(t*ce-o*Y+l*N)*G,e[6]=(_*I-w*k-x*P)*G,e[7]=(v*k-g*I+S*P)*G,e[8]=(u*J-f*Y+p*T)*G,e[9]=(r*Y-t*J-l*T)*G,e[10]=(w*D-A*I+x*C)*G,e[11]=(y*I-v*D-S*C)*G,e[12]=(f*N-u*U-m*T)*G,e[13]=(t*U-r*N+o*T)*G,e[14]=(A*P-w*z-_*C)*G,e[15]=(v*z-y*P+g*C)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,m=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*m,p*m+o*f,0,p*f+o*m,v*f+r,v*m-o*u,0,p*m-o*f,v*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,v=u+u,y=f+f,g=l*p,S=l*v,w=l*y,A=u*v,_=u*y,x=f*y,C=m*p,P=m*v,I=m*y,z=r.x,D=r.y,k=r.z;return o[0]=(1-(A+x))*z,o[1]=(S+I)*z,o[2]=(w-P)*z,o[3]=0,o[4]=(S-I)*D,o[5]=(1-(g+x))*D,o[6]=(_+C)*D,o[7]=0,o[8]=(w+P)*k,o[9]=(_-C)*k,o[10]=(1-(g+A))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Gs.set(o[0],o[1],o[2]).length();const f=Gs.set(o[4],o[5],o[6]).length(),m=Gs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const p=1/u,v=1/f,y=1/m;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=y,yi.elements[9]*=y,yi.elements[10]*=y,t.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=m,this}makePerspective(e,t,r,o,l,u,f=Oi,m=!1){const p=this.elements,v=2*l/(t-e),y=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let w,A;if(m)w=l/(u-l),A=u*l/(u-l);else if(f===Oi)w=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===po)w=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Oi,m=!1){const p=this.elements,v=2/(t-e),y=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let w,A;if(m)w=1/(u-l),A=u/(u-l);else if(f===Oi)w=-2/(u-l),A=-(u+l)/(u-l);else if(f===po)w=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=w,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};fc.prototype.isMatrix4=!0;let jt=fc;const Gs=new $,yi=new jt,$_=new $(0,0,0),K_=new $(1,1,1),Rr=new $,Ml=new $,Jn=new $,Om=new jt,km=new fa;class Br{constructor(e=0,t=0,r=0,o=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],v=o[9],y=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-wt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z_=0;const Bm=new $,Hs=new fa,Qi=new jt,El=new $,Za=new $,J_=new $,Q_=new fa,zm=new $(1,0,0),Gm=new $(0,1,0),Hm=new $(0,0,1),Vm={type:"added"},ex={type:"removed"},Vs={type:"childadded",child:null},cd={type:"childremoved",child:null};class cn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new $,t=new Br,r=new fa,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Za,El,this.up):Qi.lookAt(El,Za,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const y=m[p];l(e.shapes,y)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const m=[];for(const p in f){const v=f[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}cn.DEFAULT_UP=new $(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ra extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const _=t.getJointPose(A,r),x=this._getHandJoint(p,A);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const v=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=v.position.distanceTo(y.position),S=.02,w=.005;p.inputState.pinching&&g>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function dd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=H_(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=dd(u,l,e+1/3),this.g=dd(u,l,e),this.b=dd(u,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=Kg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Et.workingToColorSpace(Cn.copy(this),e),Math.round(wt(Cn.r*255,0,255))*65536+Math.round(wt(Cn.g*255,0,255))*256+Math.round(wt(Cn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let m,p;const v=(f+u)/2;if(f===u)m=0,p=0;else{const y=u-f;switch(p=v<=.5?y/(u+f):y/(2-u-f),u){case r:m=(o-l)/y+(o<l?6:0);break;case o:m=(l-r)/y+2;break;case l:m=(r-o)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ui){Et.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(wl);const r=rd(Pr.h,wl.h,t),o=rd(Pr.s,wl.s,t),l=rd(Pr.l,wl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new xt;xt.NAMES=Kg;class nx extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new $,er=new $,fd=new $,tr=new $,Ws=new $,Xs=new $,Wm=new $,hd=new $,pd=new $,md=new $,gd=new en,vd=new en,_d=new en;class di{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Si.subVectors(e,t),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Si.subVectors(o,t),er.subVectors(r,t),fd.subVectors(e,t);const u=Si.dot(Si),f=Si.dot(er),m=Si.dot(fd),p=er.dot(er),v=er.dot(fd),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(p*m-f*v)*g,w=(u*v-f*m)*g;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,o,l,u,f,m){return this.getBarycoord(e,t,r,o,tr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,tr.x),m.addScaledVector(u,tr.y),m.addScaledVector(f,tr.z),m)}static getInterpolatedAttribute(e,t,r,o,l,u){return gd.setScalar(0),vd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(e,t),vd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(gd,l.x),u.addScaledVector(vd,l.y),u.addScaledVector(_d,l.z),u}static isFrontFacing(e,t,r,o){return Si.subVectors(r,t),er.subVectors(e,t),Si.cross(er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Si.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Ws.subVectors(o,r),Xs.subVectors(l,r),hd.subVectors(e,r);const m=Ws.dot(hd),p=Xs.dot(hd);if(m<=0&&p<=0)return t.copy(r);pd.subVectors(e,o);const v=Ws.dot(pd),y=Xs.dot(pd);if(v>=0&&y<=v)return t.copy(o);const g=m*y-v*p;if(g<=0&&m>=0&&v<=0)return u=m/(m-v),t.copy(r).addScaledVector(Ws,u);md.subVectors(e,l);const S=Ws.dot(md),w=Xs.dot(md);if(w>=0&&S<=w)return t.copy(l);const A=S*p-m*w;if(A<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(Xs,f);const _=v*w-S*y;if(_<=0&&y-v>=0&&S-w>=0)return Wm.subVectors(l,o),f=(y-v)/(y-v+(S-w)),t.copy(o).addScaledVector(Wm,f);const x=1/(_+A+g);return u=A*x,f=g*x,t.copy(r).addScaledVector(Ws,u).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Mi):Mi.fromBufferAttribute(l,u),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tl.copy(r.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),bl.subVectors(this.max,Ja),js.subVectors(e.a,Ja),Ys.subVectors(e.b,Ja),qs.subVectors(e.c,Ja),Ir.subVectors(Ys,js),Dr.subVectors(qs,Ys),ns.subVectors(js,qs);let t=[0,-Ir.z,Ir.y,0,-Dr.z,Dr.y,0,-ns.z,ns.y,Ir.z,0,-Ir.x,Dr.z,0,-Dr.x,ns.z,0,-ns.x,-Ir.y,Ir.x,0,-Dr.y,Dr.x,0,-ns.y,ns.x,0];return!xd(t,js,Ys,qs,bl)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,js,Ys,qs,bl))?!1:(Al.crossVectors(Ir,Dr),t=[Al.x,Al.y,Al.z],xd(t,js,Ys,qs,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new $,new $,new $,new $,new $,new $,new $,new $],Mi=new $,Tl=new mo,js=new $,Ys=new $,qs=new $,Ir=new $,Dr=new $,ns=new $,Ja=new $,bl=new $,Al=new $,is=new $;function xd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){is.fromArray(s,l);const f=o.x*Math.abs(is.x)+o.y*Math.abs(is.y)+o.z*Math.abs(is.z),m=e.dot(is),p=t.dot(is),v=r.dot(is);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>f)return!1}return!0}const sn=new $,Cl=new gt;let ix=0;class wi extends hs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Tf,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zg extends wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Jg extends wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class vn extends wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const rx=new mo,Qa=new $,yd=new $;class go{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):rx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Qa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(yd)),this.expandByPoint(Qa.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sx=0;const ci=new jt,Sd=new cn,$s=new $,Qn=new mo,eo=new mo,mn=new $;class Dn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?Jg:Zg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new vn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];eo.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Qn.min,eo.min),Qn.expandByPoint(mn),mn.addVectors(Qn.max,eo.max),Qn.expandByPoint(mn)):(Qn.expandByPoint(eo.min),Qn.expandByPoint(eo.max))}Qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(mn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)mn.fromBufferAttribute(f,p),m&&($s.fromBufferAttribute(e,p),mn.add($s)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let T=0;T<r.count;T++)f[T]=new $,m[T]=new $;const p=new $,v=new $,y=new $,g=new gt,S=new gt,w=new gt,A=new $,_=new $;function x(T,N,Y){p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,N),y.fromBufferAttribute(r,Y),g.fromBufferAttribute(l,T),S.fromBufferAttribute(l,N),w.fromBufferAttribute(l,Y),v.sub(p),y.sub(p),S.sub(g),w.sub(g);const U=1/(S.x*w.y-w.x*S.y);isFinite(U)&&(A.copy(v).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(U),_.copy(y).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(U),f[T].add(A),f[N].add(A),f[Y].add(A),m[T].add(_),m[N].add(_),m[Y].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,N=C.length;T<N;++T){const Y=C[T],U=Y.start,J=Y.count;for(let ce=U,de=U+J;ce<de;ce+=3)x(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new $,I=new $,z=new $,D=new $;function k(T){z.fromBufferAttribute(o,T),D.copy(z);const N=f[T];P.copy(N),P.sub(z.multiplyScalar(z.dot(N))).normalize(),I.crossVectors(D,N);const U=I.dot(m[T])<0?-1:1;u.setXYZW(T,P.x,P.y,P.z,U)}for(let T=0,N=C.length;T<N;++T){const Y=C[T],U=Y.start,J=Y.count;for(let ce=U,de=U+J;ce<de;ce+=3)k(e.getX(ce+0)),k(e.getX(ce+1)),k(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new $,l=new $,u=new $,f=new $,m=new $,p=new $,v=new $,y=new $;if(e)for(let g=0,S=e.count;g<S;g+=3){const w=e.getX(g+0),A=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,_),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,_),f.add(v),m.add(v),p.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,m){const p=f.array,v=f.itemSize,y=f.normalized,g=new p.constructor(m.length*v);let S=0,w=0;for(let A=0,_=m.length;A<_;A++){f.isInterleavedBufferAttribute?S=m[A]*f.data.stride+f.offset:S=m[A]*v;for(let x=0;x<v;x++)g[w++]=p[S++]}return new wi(g,v,y)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let v=0,y=p.length;v<y;v++){const g=p[v],S=e(g,r);m.push(S)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let y=0,g=p.length;y<g;y++){const S=p[y];v.push(S.toJSON(e.data))}v.length>0&&(o[m]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],y=l[p];for(let g=0,S=y.length;g<S;g++)v.push(y[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ax{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tf,this.updateRanges=[],this.version=0,this.uuid=kr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new $;class cc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),l=Ft(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){lc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new wi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){lc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ox=0;class zr extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=aa,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Od,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Od&&(r.blendDst=this.blendDst),this.blendEquation!==os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Im&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qg extends zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ks;const to=new $,Zs=new $,Js=new $,Qs=new gt,no=new gt,e0=new jt,Rl=new $,io=new $,Pl=new $,Xm=new gt,Md=new gt,jm=new gt;class lx extends cn{constructor(e=new Qg){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ax(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new cc(r,3,0,!1)),Ks.setAttribute("uv",new cc(r,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new gt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),e0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Il(Rl.set(-.5,-.5,0),Js,u,Zs,o,l),Il(io.set(.5,-.5,0),Js,u,Zs,o,l),Il(Pl.set(.5,.5,0),Js,u,Zs,o,l),Xm.set(0,0),Md.set(1,0),jm.set(1,1);let f=e.ray.intersectTriangle(Rl,io,Pl,!1,to);if(f===null&&(Il(io.set(-.5,.5,0),Js,u,Zs,o,l),Md.set(0,1),f=e.ray.intersectTriangle(Rl,Pl,io,!1,to),f===null))return;const m=e.ray.origin.distanceTo(to);m<e.near||m>e.far||t.push({distance:m,point:to.clone(),uv:di.getInterpolation(to,Rl,io,Pl,Xm,Md,jm,new gt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Il(s,e,t,r,o,l){Qs.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(no.x=l*Qs.x-o*Qs.y,no.y=o*Qs.x+l*Qs.y):no.copy(Qs),s.copy(e),s.x+=no.x,s.y+=no.y,s.applyMatrix4(e0)}const ir=new $,Ed=new $,Dl=new $,Lr=new $,wd=new $,Ll=new $,Td=new $;class pc{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ed.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Ed);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Dl),f=Lr.dot(this.direction),m=-Lr.dot(Dl),p=Lr.lengthSq(),v=Math.abs(1-u*u);let y,g,S,w;if(v>0)if(y=u*m-f,g=u*f-m,w=l*v,y>=0)if(g>=-w)if(g<=w){const A=1/v;y*=A,g*=A,S=y*(y+u*g+2*f)+g*(u*y+g+2*m)+p}else g=l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*m)+p;else g=-l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*m)+p;else g<=-w?(y=Math.max(0,-(-u*l+f)),g=y>0?-l:Math.min(Math.max(-l,-m),l),S=-y*y+g*(g+2*m)+p):g<=w?(y=0,g=Math.min(Math.max(-l,-m),l),S=g*(g+2*m)+p):(y=Math.max(0,-(u*l+f)),g=y>0?l:Math.min(Math.max(-l,-m),l),S=-y*y+g*(g+2*m)+p);else g=u>0?-l:l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Ed).addScaledVector(Dl,g),S}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),o=ir.dot(ir)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,m;const p=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-g.z)*y,m=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,m=(e.min.z-g.z)*y),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,r,o,l){wd.subVectors(t,e),Ll.subVectors(r,e),Td.crossVectors(wd,Ll);let u=this.direction.dot(Td),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Lr.subVectors(this.origin,e);const m=f*this.direction.dot(Ll.crossVectors(Lr,Ll));if(m<0)return null;const p=f*this.direction.dot(wd.cross(Lr));if(p<0||m+p>u)return null;const v=-f*Lr.dot(Td);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class co extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ym=new jt,rs=new pc,Nl=new go,qm=new $,Fl=new $,Ul=new $,Ol=new $,bd=new $,kl=new $,$m=new $,Bl=new $;class Rn extends cn{constructor(e=new Dn,t=new co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=f[m],y=l[m];v!==0&&(bd.fromBufferAttribute(y,e),u?kl.addScaledVector(bd,v):kl.addScaledVector(bd.sub(t),v))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(Nl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Nl,qm)===null||rs.origin.distanceToSquared(qm)>(e.far-e.near)**2))&&(Ym.copy(l).invert(),rs.copy(e.ray).applyMatrix4(Ym),!(r.boundingBox!==null&&rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,A=g.length;w<A;w++){const _=g[w],x=u[_.materialIndex],C=Math.max(_.start,S.start),P=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let I=C,z=P;I<z;I+=3){const D=f.getX(I),k=f.getX(I+1),T=f.getX(I+2);o=zl(this,x,e,r,p,v,y,D,k,T),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let _=w,x=A;_<x;_+=3){const C=f.getX(_),P=f.getX(_+1),I=f.getX(_+2);o=zl(this,u,e,r,p,v,y,C,P,I),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,A=g.length;w<A;w++){const _=g[w],x=u[_.materialIndex],C=Math.max(_.start,S.start),P=Math.min(m.count,Math.min(_.start+_.count,S.start+S.count));for(let I=C,z=P;I<z;I+=3){const D=I,k=I+1,T=I+2;o=zl(this,x,e,r,p,v,y,D,k,T),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let _=w,x=A;_<x;_+=3){const C=_,P=_+1,I=_+2;o=zl(this,u,e,r,p,v,y,C,P,I),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function cx(s,e,t,r,o,l,u,f){let m;if(e.side===Bn?m=r.intersectTriangle(u,l,o,!0,f):m=r.intersectTriangle(o,l,u,e.side===or,f),m===null)return null;Bl.copy(f),Bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Bl);return p<t.near||p>t.far?null:{distance:p,point:Bl.clone(),object:s}}function zl(s,e,t,r,o,l,u,f,m,p){s.getVertexPosition(f,Fl),s.getVertexPosition(m,Ul),s.getVertexPosition(p,Ol);const v=cx(s,e,t,r,Fl,Ul,Ol,$m);if(v){const y=new $;di.getBarycoord($m,Fl,Ul,Ol,y),o&&(v.uv=di.getInterpolatedAttribute(o,f,m,p,y,new gt)),l&&(v.uv1=di.getInterpolatedAttribute(l,f,m,p,y,new gt)),u&&(v.normal=di.getInterpolatedAttribute(u,f,m,p,y,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:m,c:p,normal:new $,materialIndex:0};di.getNormal(Fl,Ul,Ol,g.normal),v.face=g,v.barycoord=y}return v}class ux extends In{constructor(e=null,t=1,r=1,o,l,u,f,m,p=Mn,v=Mn,y,g){super(null,u,f,m,p,v,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new $,dx=new $,fx=new ft;class as{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ad.subVectors(r,t).cross(dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Ad),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||fx.getNormalMatrix(e),o=this.coplanarPoint(Ad).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new go,hx=new gt(.5,.5),Gl=new $;class Yf{constructor(e=new as,t=new as,r=new as,o=new as,l=new as,u=new as){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],v=l[4],y=l[5],g=l[6],S=l[7],w=l[8],A=l[9],_=l[10],x=l[11],C=l[12],P=l[13],I=l[14],z=l[15];if(o[0].setComponents(p-u,S-v,x-w,z-C).normalize(),o[1].setComponents(p+u,S+v,x+w,z+C).normalize(),o[2].setComponents(p+f,S+y,x+A,z+P).normalize(),o[3].setComponents(p-f,S-y,x-A,z-P).normalize(),r)o[4].setComponents(m,g,_,I).normalize(),o[5].setComponents(p-m,S-g,x-_,z-I).normalize();else if(o[4].setComponents(p-m,S-g,x-_,z-I).normalize(),t===Oi)o[5].setComponents(p+m,S+g,x+_,z+I).normalize();else if(t===po)o[5].setComponents(m,g,_,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=hx.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Gl.x=o.normal.x>0?e.max.x:e.min.x,Gl.y=o.normal.y>0?e.max.y:e.min.y,Gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t0 extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uc=new $,dc=new $,Km=new jt,ro=new pc,Hl=new go,Cd=new $,Zm=new $;class px extends cn{constructor(e=new Dn,t=new t0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)uc.fromBufferAttribute(t,o-1),dc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=uc.distanceTo(dc);e.setAttribute("lineDistance",new vn(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hl.copy(r.boundingSphere),Hl.applyMatrix4(o),Hl.radius+=l,e.ray.intersectsSphere(Hl)===!1)return;Km.copy(o).invert(),ro.copy(e.ray).applyMatrix4(Km);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let A=S,_=w-1;A<_;A+=p){const x=v.getX(A),C=v.getX(A+1),P=Vl(this,e,ro,m,x,C,A);P&&t.push(P)}if(this.isLineLoop){const A=v.getX(w-1),_=v.getX(S),x=Vl(this,e,ro,m,A,_,w-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let A=S,_=w-1;A<_;A+=p){const x=Vl(this,e,ro,m,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=Vl(this,e,ro,m,w-1,S,w-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Vl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(uc.fromBufferAttribute(f,o),dc.fromBufferAttribute(f,l),t.distanceSqToSegment(uc,dc,Cd,Zm)>r)return;Cd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Cd);if(!(p<e.near||p>e.far))return{distance:p,point:Zm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class n0 extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jm=new jt,Cf=new pc,Wl=new go,Xl=new $;class mx extends cn{constructor(e=new Dn,t=new n0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(o),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;Jm.copy(o).invert(),Cf.copy(e.ray).applyMatrix4(Jm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=r.index,y=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let w=g,A=S;w<A;w++){const _=p.getX(w);Xl.fromBufferAttribute(y,_),Qm(Xl,_,m,o,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let w=g,A=S;w<A;w++)Xl.fromBufferAttribute(y,w),Qm(Xl,w,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Qm(s,e,t,r,o,l,u){const f=Cf.distanceSqToPoint(s);if(f<t){const m=new $;Cf.closestPointToPoint(s,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class i0 extends In{constructor(e=[],t=ds,r,o,l,u,f,m,p,v){super(e,t,r,o,l,u,f,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eg extends In{constructor(e,t,r,o,l,u,f,m,p){super(e,t,r,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends In{constructor(e,t,r=zi,o,l,u,f=Mn,m=Mn,p,v=cr,y=1){if(v!==cr&&v!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,u,f,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gx extends ua{constructor(e,t=zi,r=ds,o,l,u=Mn,f=Mn,m,p=cr){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,m,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class r0 extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends Dn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],y=[];let g=0,S=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(y,2));function w(A,_,x,C,P,I,z,D,k,T,N){const Y=I/k,U=z/T,J=I/2,ce=z/2,de=D/2,G=k+1,ee=T+1;let j=0,q=0;const le=new $;for(let oe=0;oe<ee;oe++){const F=oe*U-ce;for(let Q=0;Q<G;Q++){const Ue=Q*Y-J;le[A]=Ue*C,le[_]=F*P,le[x]=de,p.push(le.x,le.y,le.z),le[A]=0,le[_]=0,le[x]=D>0?1:-1,v.push(le.x,le.y,le.z),y.push(Q/k),y.push(1-oe/T),j+=1}}for(let oe=0;oe<T;oe++)for(let F=0;F<k;F++){const Q=g+F+G*oe,Ue=g+F+G*(oe+1),We=g+(F+1)+G*(oe+1),Fe=g+(F+1)+G*oe;m.push(Q,Ue,Fe),m.push(Ue,We,Fe),q+=6}f.addGroup(S,q,N),S+=q,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mc extends Dn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),m=Math.floor(o),p=f+1,v=m+1,y=e/f,g=t/m,S=[],w=[],A=[],_=[];for(let x=0;x<v;x++){const C=x*g-u;for(let P=0;P<p;P++){const I=P*y-l;w.push(I,-C,0),A.push(0,0,1),_.push(P/f),_.push(1-x/m)}}for(let x=0;x<m;x++)for(let C=0;C<f;C++){const P=C+p*x,I=C+p*(x+1),z=C+1+p*(x+1),D=C+1+p*x;S.push(P,I,D),S.push(I,z,D)}this.setIndex(S),this.setAttribute("position",new vn(w,3)),this.setAttribute("normal",new vn(A,3)),this.setAttribute("uv",new vn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class qf extends Dn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],m=[],p=[],v=[];let y=e;const g=(t-e)/o,S=new $,w=new gt;for(let A=0;A<=o;A++){for(let _=0;_<=r;_++){const x=l+_/r*u;S.x=y*Math.cos(x),S.y=y*Math.sin(x),m.push(S.x,S.y,S.z),p.push(0,0,1),w.x=(S.x/t+1)/2,w.y=(S.y/t+1)/2,v.push(w.x,w.y)}y+=g}for(let A=0;A<o;A++){const _=A*(r+1);for(let x=0;x<r;x++){const C=x+_,P=C,I=C+r+1,z=C+r+2,D=C+1;f.push(P,I,D),f.push(I,z,D)}}this.setIndex(f),this.setAttribute("position",new vn(m,3)),this.setAttribute("normal",new vn(p,3)),this.setAttribute("uv",new vn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fr extends Dn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const m=Math.min(u+f,Math.PI);let p=0;const v=[],y=new $,g=new $,S=[],w=[],A=[],_=[];for(let x=0;x<=r;x++){const C=[],P=x/r;let I=0;x===0&&u===0?I=.5/t:x===r&&m===Math.PI&&(I=-.5/t);for(let z=0;z<=t;z++){const D=z/t;y.x=-e*Math.cos(o+D*l)*Math.sin(u+P*f),y.y=e*Math.cos(u+P*f),y.z=e*Math.sin(o+D*l)*Math.sin(u+P*f),w.push(y.x,y.y,y.z),g.copy(y).normalize(),A.push(g.x,g.y,g.z),_.push(D+I,1-P),C.push(p++)}v.push(C)}for(let x=0;x<r;x++)for(let C=0;C<t;C++){const P=v[x][C+1],I=v[x][C],z=v[x+1][C],D=v[x+1][C+1];(x!==0||u>0)&&S.push(P,I,D),(x!==r-1||m<Math.PI)&&S.push(I,z,D)}this.setIndex(S),this.setAttribute("position",new vn(w,3)),this.setAttribute("normal",new vn(A,3)),this.setAttribute("uv",new vn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function da(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(tg(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(tg(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const r=da(s[t]);for(const o in r)e[o]=r[o]}return e}function tg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function s0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const _x={clone:da,merge:On};var xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xx,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Sx extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jl extends zr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=Ff,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mx extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $f extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Rd=new jt,ng=new $,ig=new $;class a0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yf,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ig),t.updateMatrixWorld(),Rd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===po||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yl=new $,ql=new fa,Ii=new $;class o0 extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yl,ql,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,ql,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Yl,ql,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,ql,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new $,rg=new gt,sg=new gt;class ei extends o0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Af*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Af*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,rg,sg),t.subVectors(sg,rg)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(id*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wx extends a0{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0}}class Tx extends $f{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new wx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Kf extends o0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,m=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bx extends a0{constructor(){super(new Kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ag extends $f{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new bx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ax extends $f{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ea=-90,ta=1;class Cx extends cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(ea,ta,e,t);o.layers=this.layers,this.add(o);const l=new ei(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new ei(ea,ta,e,t);u.layers=this.layers,this.add(u);const f=new ei(ea,ta,e,t);f.layers=this.layers,this.add(f);const m=new ei(ea,ta,e,t);m.layers=this.layers,this.add(m);const p=new ei(ea,ta,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===po)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,g,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Rx extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const og=new jt;class Px{constructor(e,t,r=0,o=1/0){this.ray=new pc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return og.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(og),this}intersectObject(e,t=!0,r=[]){return Rf(e,this,r,t),r.sort(lg),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Rf(e[o],this,r,t);return r.sort(lg),r}}function lg(s,e){return s.distance-e.distance}function Rf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)Rf(l[u],e,t,!0)}}const th=class th{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};th.prototype.isMatrix2=!0;let cg=th;function ug(s,e,t,r){const o=Ix(r);switch(t){case Xg:return s*e;case Yg:return s*e/o.components*o.byteLength;case zf:return s*e/o.components*o.byteLength;case fs:return s*e*2/o.components*o.byteLength;case Gf:return s*e*2/o.components*o.byteLength;case jg:return s*e*3/o.components*o.byteLength;case Ei:return s*e*4/o.components*o.byteLength;case Hf:return s*e*4/o.components*o.byteLength;case Jl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:case Kd:return Math.max(s,16)*Math.max(e,8)/4;case Yd:case $d:return Math.max(s,8)*Math.max(e,8)/2;case Zd:case Jd:case ef:case tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qd:case ic:case nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case of:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _f:case xf:case yf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sf:case Mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rc:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(s){switch(s){case ti:case Gg:return{byteLength:1,components:1};case fo:case Hg:case lr:return{byteLength:2,components:1};case kf:case Bf:return{byteLength:2,components:4};case zi:case Of:case Ui:return{byteLength:4,components:1};case Vg:case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function l0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Dx(s){const e=new WeakMap;function t(f,m){const p=f.array,v=f.usage,y=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,m,p){const v=m.array,y=m.updateRanges;if(s.bindBuffer(p,f),y.length===0)s.bufferSubData(p,0,v);else{y.sort((S,w)=>S.start-w.start);let g=0;for(let S=1;S<y.length;S++){const w=y[g],A=y[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++g,y[g]=A)}y.length=g+1;for(let S=0,w=y.length;S<w;S++){const A=y[S];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
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
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
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
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Yx=`#ifdef USE_BUMPMAP
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ny=`#define PI 3.141592653589793
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ry=`vec3 transformedNormal = objectNormal;
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
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
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
}`,Sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ty=`#ifdef USE_ENVMAP
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
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
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
#endif`,Iy=`uniform sampler2D dfgLUT;
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
}`,Dy=`
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vy=`#if defined( USE_POINTS_UV )
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
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
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
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
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
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_S=`float getShadowMask() {
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
}`,xS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,SS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MS=`#ifdef USE_SKINNING
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
#endif`,ES=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,CS=`#ifdef USE_TRANSMISSION
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`#include <common>
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
}`,zS=`#if DEPTH_PACKING == 3200
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
}`,GS=`#define DISTANCE
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
}`,HS=`#define DISTANCE
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
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
}`,jS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,qS=`uniform vec3 diffuse;
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
}`,$S=`#define LAMBERT
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
}`,KS=`#define LAMBERT
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
}`,ZS=`#define MATCAP
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
}`,JS=`#define MATCAP
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
}`,QS=`#define NORMAL
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
}`,eM=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,nM=`#define PHONG
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
}`,iM=`#define STANDARD
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
}`,rM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,aM=`#define TOON
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
}`,oM=`uniform float size;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 color;
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
}`,dM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Lx,alphahash_pars_fragment:Nx,alphamap_fragment:Fx,alphamap_pars_fragment:Ux,alphatest_fragment:Ox,alphatest_pars_fragment:kx,aomap_fragment:Bx,aomap_pars_fragment:zx,batching_pars_vertex:Gx,batching_vertex:Hx,begin_vertex:Vx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:jx,bumpmap_pars_fragment:Yx,clipping_planes_fragment:qx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Zx,color_fragment:Jx,color_pars_fragment:Qx,color_pars_vertex:ey,color_vertex:ty,common:ny,cube_uv_reflection_fragment:iy,defaultnormal_vertex:ry,displacementmap_pars_vertex:sy,displacementmap_vertex:ay,emissivemap_fragment:oy,emissivemap_pars_fragment:ly,colorspace_fragment:cy,colorspace_pars_fragment:uy,envmap_fragment:dy,envmap_common_pars_fragment:fy,envmap_pars_fragment:hy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Ty,envmap_vertex:my,fog_vertex:gy,fog_pars_vertex:vy,fog_fragment:_y,fog_pars_fragment:xy,gradientmap_pars_fragment:yy,lightmap_pars_fragment:Sy,lights_lambert_fragment:My,lights_lambert_pars_fragment:Ey,lights_pars_begin:wy,lights_toon_fragment:by,lights_toon_pars_fragment:Ay,lights_phong_fragment:Cy,lights_phong_pars_fragment:Ry,lights_physical_fragment:Py,lights_physical_pars_fragment:Iy,lights_fragment_begin:Dy,lights_fragment_maps:Ly,lights_fragment_end:Ny,lightprobes_pars_fragment:Fy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:Oy,logdepthbuf_pars_vertex:ky,logdepthbuf_vertex:By,map_fragment:zy,map_pars_fragment:Gy,map_particle_fragment:Hy,map_particle_pars_fragment:Vy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:Xy,morphinstance_vertex:jy,morphcolor_vertex:Yy,morphnormal_vertex:qy,morphtarget_pars_vertex:$y,morphtarget_vertex:Ky,normal_fragment_begin:Zy,normal_fragment_maps:Jy,normal_pars_fragment:Qy,normal_pars_vertex:eS,normal_vertex:tS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:aS,opaque_fragment:oS,packing:lS,premultiplied_alpha_fragment:cS,project_vertex:uS,dithering_fragment:dS,dithering_pars_fragment:fS,roughnessmap_fragment:hS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:gS,shadowmap_vertex:vS,shadowmask_pars_fragment:_S,skinbase_vertex:xS,skinning_pars_vertex:yS,skinning_vertex:SS,skinnormal_vertex:MS,specularmap_fragment:ES,specularmap_pars_fragment:wS,tonemapping_fragment:TS,tonemapping_pars_fragment:bS,transmission_fragment:AS,transmission_pars_fragment:CS,uv_pars_fragment:RS,uv_pars_vertex:PS,uv_vertex:IS,worldpos_vertex:DS,background_vert:LS,background_frag:NS,backgroundCube_vert:FS,backgroundCube_frag:US,cube_vert:OS,cube_frag:kS,depth_vert:BS,depth_frag:zS,distance_vert:GS,distance_frag:HS,equirect_vert:VS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:jS,meshbasic_vert:YS,meshbasic_frag:qS,meshlambert_vert:$S,meshlambert_frag:KS,meshmatcap_vert:ZS,meshmatcap_frag:JS,meshnormal_vert:QS,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:aM,points_vert:oM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:dM,sprite_frag:fM},Oe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Li={basic:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:On([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:On([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:On([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:On([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:On([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:On([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:On([Oe.common,Oe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:On([Oe.lights,Oe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Li.physical={uniforms:On([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const $l={r:0,b:0,g:0},hM=new jt,c0=new ft;c0.set(-1,0,0,0,1,0,0,0,1);function pM(s,e,t,r,o,l){const u=new xt(0);let f=o===!0?0:1,m,p,v=null,y=0,g=null;function S(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const I=C.backgroundBlurriness>0;P=e.get(P,I)}return P}function w(C){let P=!1;const I=S(C);I===null?_(u,f):I&&I.isColor&&(_(I,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(C,P){const I=S(P);I&&(I.isCubeTexture||I.mapping===hc)?(p===void 0&&(p=new Rn(new vo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:da(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=I,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(P.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(c0),p.material.toneMapped=Et.getTransfer(I.colorSpace)!==Nt,(v!==I||y!==I.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=I,y=I.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new Rn(new mc(2,2),new Gi({name:"BackgroundMaterial",uniforms:da(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(I.colorSpace)!==Nt,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||y!==I.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,y=I.version,g=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function _(C,P){C.getRGB($l,s0(s)),t.buffers.color.setClear($l.r,$l.g,$l.b,P,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,P=1){u.set(C),f=P,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,_(u,f)},render:w,addToRenderList:A,dispose:x}}function mM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(U,J,ce,de,G){let ee=!1;const j=y(U,de,ce,J);l!==j&&(l=j,p(l.object)),ee=S(U,de,ce,G),ee&&w(U,de,ce,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,I(U,J,ce,de),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function m(){return s.createVertexArray()}function p(U){return s.bindVertexArray(U)}function v(U){return s.deleteVertexArray(U)}function y(U,J,ce,de){const G=de.wireframe===!0;let ee=r[J.id];ee===void 0&&(ee={},r[J.id]=ee);const j=U.isInstancedMesh===!0?U.id:0;let q=ee[j];q===void 0&&(q={},ee[j]=q);let le=q[ce.id];le===void 0&&(le={},q[ce.id]=le);let oe=le[G];return oe===void 0&&(oe=g(m()),le[G]=oe),oe}function g(U){const J=[],ce=[],de=[];for(let G=0;G<t;G++)J[G]=0,ce[G]=0,de[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ce,attributeDivisors:de,object:U,attributes:{},index:null}}function S(U,J,ce,de){const G=l.attributes,ee=J.attributes;let j=0;const q=ce.getAttributes();for(const le in q)if(q[le].location>=0){const F=G[le];let Q=ee[le];if(Q===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;j++}return l.attributesNum!==j||l.index!==de}function w(U,J,ce,de){const G={},ee=J.attributes;let j=0;const q=ce.getAttributes();for(const le in q)if(q[le].location>=0){let F=ee[le];F===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(F=U.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),G[le]=Q,j++}l.attributes=G,l.attributesNum=j,l.index=de}function A(){const U=l.newAttributes;for(let J=0,ce=U.length;J<ce;J++)U[J]=0}function _(U){x(U,0)}function x(U,J){const ce=l.newAttributes,de=l.enabledAttributes,G=l.attributeDivisors;ce[U]=1,de[U]===0&&(s.enableVertexAttribArray(U),de[U]=1),G[U]!==J&&(s.vertexAttribDivisor(U,J),G[U]=J)}function C(){const U=l.newAttributes,J=l.enabledAttributes;for(let ce=0,de=J.length;ce<de;ce++)J[ce]!==U[ce]&&(s.disableVertexAttribArray(ce),J[ce]=0)}function P(U,J,ce,de,G,ee,j){j===!0?s.vertexAttribIPointer(U,J,ce,G,ee):s.vertexAttribPointer(U,J,ce,de,G,ee)}function I(U,J,ce,de){A();const G=de.attributes,ee=ce.getAttributes(),j=J.defaultAttributeValues;for(const q in ee){const le=ee[q];if(le.location>=0){let oe=G[q];if(oe===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),oe!==void 0){const F=oe.normalized,Q=oe.itemSize,Ue=e.get(oe);if(Ue===void 0)continue;const We=Ue.buffer,Fe=Ue.type,se=Ue.bytesPerElement,ve=Fe===s.INT||Fe===s.UNSIGNED_INT||oe.gpuType===Of;if(oe.isInterleavedBufferAttribute){const ge=oe.data,he=ge.stride,Me=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let we=0;we<le.locationSize;we++)x(le.location+we,ge.meshPerAttribute);U.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let we=0;we<le.locationSize;we++)_(le.location+we);s.bindBuffer(s.ARRAY_BUFFER,We);for(let we=0;we<le.locationSize;we++)P(le.location+we,Q/le.locationSize,Fe,F,he*se,(Me+Q/le.locationSize*we)*se,ve)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<le.locationSize;ge++)x(le.location+ge,oe.meshPerAttribute);U.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<le.locationSize;ge++)_(le.location+ge);s.bindBuffer(s.ARRAY_BUFFER,We);for(let ge=0;ge<le.locationSize;ge++)P(le.location+ge,Q/le.locationSize,Fe,F,Q*se,Q/le.locationSize*ge*se,ve)}}else if(j!==void 0){const F=j[q];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(le.location,F);break;case 3:s.vertexAttrib3fv(le.location,F);break;case 4:s.vertexAttrib4fv(le.location,F);break;default:s.vertexAttrib1fv(le.location,F)}}}}C()}function z(){N();for(const U in r){const J=r[U];for(const ce in J){const de=J[ce];for(const G in de){const ee=de[G];for(const j in ee)v(ee[j].object),delete ee[j];delete de[G]}}delete r[U]}}function D(U){if(r[U.id]===void 0)return;const J=r[U.id];for(const ce in J){const de=J[ce];for(const G in de){const ee=de[G];for(const j in ee)v(ee[j].object),delete ee[j];delete de[G]}}delete r[U.id]}function k(U){for(const J in r){const ce=r[J];for(const de in ce){const G=ce[de];if(G[U.id]===void 0)continue;const ee=G[U.id];for(const j in ee)v(ee[j].object),delete ee[j];delete G[U.id]}}}function T(U){for(const J in r){const ce=r[J],de=U.isInstancedMesh===!0?U.id:0,G=ce[de];if(G!==void 0){for(const ee in G){const j=G[ee];for(const q in j)v(j[q].object),delete j[q];delete G[ee]}delete ce[de],Object.keys(ce).length===0&&delete r[J]}}}function N(){Y(),u=!0,l!==o&&(l=o,p(l.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:Y,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:_,disableUnusedAttributes:C}}function gM(s,e,t){let r;function o(m){r=m}function l(m,p){s.drawArrays(r,m,p),t.update(p,r,1)}function u(m,p,v){v!==0&&(s.drawArraysInstanced(r,m,p,v),t.update(p,r,v))}function f(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,v);let g=0;for(let S=0;S<v;S++)g+=p[S];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function vM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Ei&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const T=k===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ti&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ui&&!T)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=m(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const y=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:I,maxSamples:z,samples:D}}function _M(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new as,f=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||r!==0||o;return o=g,r=y.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=v(y,g,0)},this.setState=function(y,g,S){const w=y.clippingPlanes,A=y.clipIntersection,_=y.clipShadows,x=s.get(y);if(!o||w===null||w.length===0||l&&!_)l?v(null):p();else{const C=l?0:r,P=C*4;let I=x.clippingState||null;m.value=I,I=v(w,g,P,S);for(let z=0;z!==P;++z)I[z]=t[z];x.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,g,S,w){const A=y!==null?y.length:0;let _=null;if(A!==0){if(_=m.value,w!==!0||_===null){const x=S+A*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(_===null||_.length<x)&&(_=new Float32Array(x));for(let P=0,I=S;P!==A;++P,I+=4)u.copy(y[P]).applyMatrix4(C,f),u.normal.toArray(_,I),_[I+3]=u.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}const Or=4,dg=[.125,.215,.35,.446,.526,.582],ls=20,xM=256,so=new Kf,fg=new xt;let Pd=null,Id=0,Dd=0,Ld=!1;const yM=new $;class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=yM}=l;Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Id,Dd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:lr,format:Ei,colorSpace:sc,depthBuffer:!1},o=pg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SM(l)),this._blurMaterial=EM(l,e,t),this._ggxMaterial=MM(l,e,t)}return o}_compileMaterial(e){const t=new Rn(new Dn,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,r,o,l){const m=new ei(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(fg),y.toneMapping=ki,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new vo,new co({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,_=A.material;let x=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,x=!0):(_.color.copy(fg),x=!0);for(let P=0;P<6;P++){const I=P%3;I===0?(m.up.set(0,p[P],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[P],l.y,l.z)):I===1?(m.up.set(0,0,p[P]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[P],l.z)):(m.up.set(0,p[P],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[P]));const z=this._cubeSize;na(o,I*z,P>2?z:0,z,z),y.setRenderTarget(o),x&&y.render(A,m),y.render(e,m)}y.toneMapping=S,y.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ds||e.mapping===ca;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;na(t,0,0,3*m,2*m),r.setRenderTarget(t),r.render(u,so)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-v*v),g=0+p*1.25,S=y*g,{_lodMax:w}=this,A=this._sizeLods[r],_=3*A*(r>w-Or?r-w+Or:0),x=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=w-t,na(l,_,x,3*A,2*A),o.setRenderTarget(l),o.render(f,so),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=w-r,na(e,_,x,3*A,2*A),o.setRenderTarget(e),o.render(f,so)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[o];y.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ls-1),A=l/w,_=isFinite(l)?1+Math.floor(v*A):ls;_>ls&&rt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ls}`);const x=[];let C=0;for(let k=0;k<ls;++k){const T=k/A,N=Math.exp(-T*T/2);x.push(N),k===0?C+=N:k<_&&(C+=2*N)}for(let k=0;k<x.length;k++)x[k]=x[k]/C;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:P}=this;g.dTheta.value=w,g.mipInt.value=P-r;const I=this._sizeLods[o],z=3*I*(o>P-Or?o-P+Or:0),D=4*(this._cubeSize-I);na(t,z,D,3*I,2*I),m.setRenderTarget(t),m.render(y,so)}}function SM(s){const e=[],t=[],r=[];let o=s;const l=s-Or+1+dg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let m=1/f;u>s-Or?m=dg[u-s+Or-1]:u===0&&(m=0),t.push(m);const p=1/(f-2),v=-p,y=1+p,g=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,w=6,A=3,_=2,x=1,C=new Float32Array(A*w*S),P=new Float32Array(_*w*S),I=new Float32Array(x*w*S);for(let D=0;D<S;D++){const k=D%3*2/3-1,T=D>2?0:-1,N=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];C.set(N,A*w*D),P.set(g,_*w*D);const Y=[D,D,D,D,D,D];I.set(Y,x*w*D)}const z=new Dn;z.setAttribute("position",new wi(C,A)),z.setAttribute("uv",new wi(P,_)),z.setAttribute("faceIndex",new wi(I,x)),r.push(new Rn(z,null)),o>Or&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function pg(s,e,t){const r=new Bi(s,e,t);return r.texture.mapping=hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function na(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function MM(s,e,t){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function EM(s,e,t){const r=new Float32Array(ls),o=new $(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gc(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function mg(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function gg(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}class u0 extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new i0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),l=new Gi({name:"CubemapFromEquirect",uniforms:da(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:sr});l.uniforms.tEquirect.value=t;const u=new Rn(o,l),f=t.minFilter;return t.minFilter===cs&&(t.minFilter=Pn),new Cx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function wM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===ed||S===td)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const A=new u0(w.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",p),f(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,w=S===ed||S===td,A=S===ds||S===ca;if(w||A){let _=t.get(g);const x=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new hg(s)),_=w?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const C=g.image;return w&&C&&C.height>0||A&&C&&m(C)?(r===null&&(r=new hg(s)),_=w?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function f(g,S){return S===ed?g.mapping=ds:S===td&&(g.mapping=ca),g}function m(g){let S=0;const w=6;for(let A=0;A<w;A++)g[A]!==void 0&&S++;return S===w}function p(g){const S=g.target;S.removeEventListener("dispose",p);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function TM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&bf("WebGLRenderer: "+r+" extension not supported."),o}}}function bM(s,e,t,r){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function m(y){const g=y.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(y){const g=[],S=y.index,w=y.attributes.position;let A=0;if(w===void 0)return;if(S!==null){const C=S.array;A=S.version;for(let P=0,I=C.length;P<I;P+=3){const z=C[P+0],D=C[P+1],k=C[P+2];g.push(z,D,D,k,k,z)}}else{const C=w.array;A=w.version;for(let P=0,I=C.length/3-1;P<I;P+=3){const z=P+0,D=P+1,k=P+2;g.push(z,D,D,k,k,z)}}const _=new(w.count>=65535?Jg:Zg)(g,1);_.version=A;const x=l.get(y);x&&e.remove(x),l.set(y,_)}function v(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:m,getWireframeAttribute:v}}function AM(s,e,t){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function m(y,g){s.drawElements(r,g,l,y*u),t.update(g,r,1)}function p(y,g,S){S!==0&&(s.drawElementsInstanced(r,g,l,y*u,S),t.update(g,r,S))}function v(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,y,0,S);let A=0;for(let _=0;_<S;_++)A+=g[_];t.update(A,r,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function CM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Mt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function RM(s,e,t){const r=new WeakMap,o=new en;function l(u,f,m){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==y){let Y=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",Y)};var S=Y;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let I=0;w===!0&&(I=1),A===!0&&(I=2),_===!0&&(I=3);let z=f.attributes.position.count*I,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const k=new Float32Array(z*D*4*y),T=new $g(k,z,D,y);T.type=Ui,T.needsUpdate=!0;const N=I*4;for(let U=0;U<y;U++){const J=x[U],ce=C[U],de=P[U],G=z*D*4*U;for(let ee=0;ee<J.count;ee++){const j=ee*N;w===!0&&(o.fromBufferAttribute(J,ee),k[G+j+0]=o.x,k[G+j+1]=o.y,k[G+j+2]=o.z,k[G+j+3]=0),A===!0&&(o.fromBufferAttribute(ce,ee),k[G+j+4]=o.x,k[G+j+5]=o.y,k[G+j+6]=o.z,k[G+j+7]=0),_===!0&&(o.fromBufferAttribute(de,ee),k[G+j+8]=o.x,k[G+j+9]=o.y,k[G+j+10]=o.z,k[G+j+11]=de.itemSize===4?o.w:1)}}g={count:y,texture:T,size:new gt(z,D)},r.set(f,g),f.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let _=0;_<p.length;_++)w+=p[_];const A=f.morphTargetsRelative?1:1-w;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function PM(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,y=p.geometry,g=e.get(p,y);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const IM={[Ng]:"LINEAR_TONE_MAPPING",[Fg]:"REINHARD_TONE_MAPPING",[Ug]:"CINEON_TONE_MAPPING",[Uf]:"ACES_FILMIC_TONE_MAPPING",[kg]:"AGX_TONE_MAPPING",[Bg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};function DM(s,e,t,r,o){const l=new Bi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new ua(e,t):void 0}),u=new Bi(e,t,{type:lr,depthBuffer:!1,stencilBuffer:!1}),f=new Dn;f.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new vn([0,2,0,0,2,0],2));const m=new Sx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Rn(f,m),v=new Kf(-1,1,1,-1,0,1);let y=null,g=null,S=!1,w,A=null,_=[],x=!1;this.setSize=function(C,P){l.setSize(C,P),u.setSize(C,P);for(let I=0;I<_.length;I++){const z=_[I];z.setSize&&z.setSize(C,P)}},this.setEffects=function(C){_=C,x=_.length>0&&_[0].isRenderPass===!0;const P=l.width,I=l.height;for(let z=0;z<_.length;z++){const D=_[z];D.setSize&&D.setSize(P,I)}},this.begin=function(C,P){if(S||C.toneMapping===ki&&_.length===0)return!1;if(A=P,P!==null){const I=P.width,z=P.height;(l.width!==I||l.height!==z)&&this.setSize(I,z)}return x===!1&&C.setRenderTarget(l),w=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return x},this.end=function(C,P){C.toneMapping=w,S=!0;let I=l,z=u;for(let D=0;D<_.length;D++){const k=_[D];if(k.enabled!==!1&&(k.render(C,z,I,P),k.needsSwap!==!1)){const T=I;I=z,z=T}}if(y!==C.outputColorSpace||g!==C.toneMapping){y=C.outputColorSpace,g=C.toneMapping,m.defines={},Et.getTransfer(y)===Nt&&(m.defines.SRGB_TRANSFER="");const D=IM[g];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(A),C.render(p,v),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),m.dispose()}}const d0=new In,Pf=new ua(1,1),f0=new $g,h0=new q_,p0=new i0,vg=[],_g=[],xg=new Float32Array(16),yg=new Float32Array(9),Sg=new Float32Array(4);function ha(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=vg[o];if(l===void 0&&(l=new Float32Array(o),vg[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function vc(s,e){let t=_g[e];t===void 0&&(t=new Int32Array(e),_g[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function LM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function OM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;Sg.set(r),s.uniformMatrix2fv(this.addr,!1,Sg),dn(t,r)}}function kM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;yg.set(r),s.uniformMatrix3fv(this.addr,!1,yg),dn(t,r)}}function BM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;xg.set(r),s.uniformMatrix4fv(this.addr,!1,xg),dn(t,r)}}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function WM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function qM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Pf.compareFunction=t.isReversedDepthBuffer()?Wf:Vf,l=Pf):l=d0,t.setTexture2D(e||l,o)}function $M(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||h0,o)}function KM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||p0,o)}function ZM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||f0,o)}function JM(s){switch(s){case 5126:return LM;case 35664:return NM;case 35665:return FM;case 35666:return UM;case 35674:return OM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return GM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return WM;case 36294:return XM;case 36295:return jM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}function QM(s,e){s.uniform1fv(this.addr,e)}function eE(s,e){const t=ha(e,this.size,2);s.uniform2fv(this.addr,t)}function tE(s,e){const t=ha(e,this.size,3);s.uniform3fv(this.addr,t)}function nE(s,e){const t=ha(e,this.size,4);s.uniform4fv(this.addr,t)}function iE(s,e){const t=ha(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rE(s,e){const t=ha(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sE(s,e){const t=ha(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function aE(s,e){s.uniform1iv(this.addr,e)}function oE(s,e){s.uniform2iv(this.addr,e)}function lE(s,e){s.uniform3iv(this.addr,e)}function cE(s,e){s.uniform4iv(this.addr,e)}function uE(s,e){s.uniform1uiv(this.addr,e)}function dE(s,e){s.uniform2uiv(this.addr,e)}function fE(s,e){s.uniform3uiv(this.addr,e)}function hE(s,e){s.uniform4uiv(this.addr,e)}function pE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Pf:u=d0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function mE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||h0,l[u])}function gE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||p0,l[u])}function vE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||f0,l[u])}function _E(s){switch(s){case 5126:return QM;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return aE;case 35667:case 35671:return oE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return dE;case 36295:return fE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return vE}}class xE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}}class yE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_E(t.type)}}class SE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function Mg(s,e){s.seq.push(e),s.map[e.id]=e}function ME(s,e,t){const r=s.name,o=r.length;for(Nd.lastIndex=0;;){const l=Nd.exec(r),u=Nd.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){Mg(t,p===void 0?new xE(f,s,e):new yE(f,s,e));break}else{let y=t.map[f];y===void 0&&(y=new SE(f),Mg(t,y)),t=y}}}class nc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);ME(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Eg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const EE=37297;let wE=0;function TE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const wg=new ft;function bE(s){Et._getMatrix(wg,Et.workingColorSpace,s);const e=`mat3( ${wg.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case ac:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+TE(s.getShaderSource(e),f)}else return l}function AE(s,e){const t=bE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const CE={[Ng]:"Linear",[Fg]:"Reinhard",[Ug]:"Cineon",[Uf]:"ACESFilmic",[kg]:"AgX",[Bg]:"Neutral",[Og]:"Custom"};function RE(s,e){const t=CE[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kl=new $;function PE(){Et.getLuminanceCoefficients(Kl);const s=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function DE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function LE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function lo(s){return s!==""}function bg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ag(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NE=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(s){return s.replace(NE,UE)}const FE=new Map;function UE(s,e){let t=mt[e];if(t===void 0){const r=FE.get(e);if(r!==void 0)t=mt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return If(t)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cg(s){return s.replace(OE,kE)}function kE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Rg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const BE={[Zl]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function zE(s){return BE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GE={[ds]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE_UV"};function HE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":GE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const VE={[ca]:"ENVMAP_MODE_REFRACTION"};function WE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":VE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XE={[Ff]:"ENVMAP_BLENDING_MULTIPLY",[A_]:"ENVMAP_BLENDING_MIX",[C_]:"ENVMAP_BLENDING_ADD"};function jE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":XE[s.combine]||"ENVMAP_BLENDING_NONE"}function YE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function qE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=zE(t),p=HE(t),v=WE(t),y=jE(t),g=YE(t),S=IE(t),w=DE(l),A=o.createProgram();let _,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(lo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(lo).join(`
`),x.length>0&&(x+=`
`)):(_=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),x=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?mt.tonemapping_pars_fragment:"",t.toneMapping!==ki?RE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,AE("linearToOutputTexel",t.outputColorSpace),PE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),u=If(u),u=bg(u,t),u=Ag(u,t),f=If(f),f=bg(f,t),f=Ag(f,t),u=Cg(u),f=Cg(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=C+_+u,I=C+x+f,z=Eg(o,o.VERTEX_SHADER,P),D=Eg(o,o.FRAGMENT_SHADER,I);o.attachShader(A,z),o.attachShader(A,D),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function k(U){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(A)||"",ce=o.getShaderInfoLog(z)||"",de=o.getShaderInfoLog(D)||"",G=J.trim(),ee=ce.trim(),j=de.trim();let q=!0,le=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,z,D);else{const oe=Tg(o,z,"vertex"),F=Tg(o,D,"fragment");Mt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+oe+`
`+F)}else G!==""?rt("WebGLProgram: Program Info Log:",G):(ee===""||j==="")&&(le=!1);le&&(U.diagnostics={runnable:q,programLog:G,vertexShader:{log:ee,prefix:_},fragmentShader:{log:j,prefix:x}})}o.deleteShader(z),o.deleteShader(D),T=new nc(o,A),N=LE(o,A)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(A,EE)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=D,this}let $E=0;class KE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ZE(e),t.set(e,r)),r}}class ZE{constructor(e){this.id=$E++,this.code=e,this.usedTimes=0}}function JE(s){return s===fs||s===ic||s===rc}function QE(s,e,t,r,o,l){const u=new jf,f=new KE,m=new Set,p=[],v=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,N,Y,U,J,ce){const de=U.fog,G=J.geometry,ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,q=e.get(T.envMap||ee,j),le=q&&q.mapping===hc?q.image.height:null,oe=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const F=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Q=F!==void 0?F.length:0;let Ue=0;G.morphAttributes.position!==void 0&&(Ue=1),G.morphAttributes.normal!==void 0&&(Ue=2),G.morphAttributes.color!==void 0&&(Ue=3);let We,Fe,se,ve;if(oe){const lt=Li[oe];We=lt.vertexShader,Fe=lt.fragmentShader}else We=T.vertexShader,Fe=T.fragmentShader,f.update(T),se=f.getVertexShaderID(T),ve=f.getFragmentShaderID(T);const ge=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Me=J.isInstancedMesh===!0,we=J.isBatchedMesh===!0,ze=!!T.map,et=!!T.matcap,dt=!!q,bt=!!T.aoMap,at=!!T.lightMap,Ut=!!T.bumpMap,kt=!!T.normalMap,_n=!!T.displacementMap,H=!!T.emissiveMap,Bt=!!T.metalnessMap,pt=!!T.roughnessMap,It=T.anisotropy>0,Ne=T.clearcoat>0,Ht=T.dispersion>0,R=T.iridescence>0,M=T.sheen>0,K=T.transmission>0,pe=It&&!!T.anisotropyMap,_e=Ne&&!!T.clearcoatMap,Te=Ne&&!!T.clearcoatNormalMap,Le=Ne&&!!T.clearcoatRoughnessMap,ue=R&&!!T.iridescenceMap,me=R&&!!T.iridescenceThicknessMap,ke=M&&!!T.sheenColorMap,Ge=M&&!!T.sheenRoughnessMap,Re=!!T.specularMap,be=!!T.specularColorMap,it=!!T.specularIntensityMap,ot=K&&!!T.transmissionMap,vt=K&&!!T.thicknessMap,B=!!T.gradientMap,Ce=!!T.alphaMap,fe=T.alphaTest>0,Be=!!T.alphaHash,Ie=!!T.extensions;let xe=ki;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(xe=s.toneMapping);const qe={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:Fe,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:we,batchingColor:we&&J._colorsTexture!==null,instancing:Me,instancingColor:Me&&J.instanceColor!==null,instancingMorph:Me&&J.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ze,matcap:et,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:le,aoMap:bt,lightMap:at,bumpMap:Ut,normalMap:kt,displacementMap:_n,emissiveMap:H,normalMapObjectSpace:kt&&T.normalMapType===I_,normalMapTangentSpace:kt&&T.normalMapType===wf,packedNormalMap:kt&&T.normalMapType===wf&&JE(T.normalMap.format),metalnessMap:Bt,roughnessMap:pt,anisotropy:It,anisotropyMap:pe,clearcoat:Ne,clearcoatMap:_e,clearcoatNormalMap:Te,clearcoatRoughnessMap:Le,dispersion:Ht,iridescence:R,iridescenceMap:ue,iridescenceThicknessMap:me,sheen:M,sheenColorMap:ke,sheenRoughnessMap:Ge,specularMap:Re,specularColorMap:be,specularIntensityMap:it,transmission:K,transmissionMap:ot,thicknessMap:vt,gradientMap:B,opaque:T.transparent===!1&&T.blending===aa&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:Be,combine:T.combine,mapUv:ze&&w(T.map.channel),aoMapUv:bt&&w(T.aoMap.channel),lightMapUv:at&&w(T.lightMap.channel),bumpMapUv:Ut&&w(T.bumpMap.channel),normalMapUv:kt&&w(T.normalMap.channel),displacementMapUv:_n&&w(T.displacementMap.channel),emissiveMapUv:H&&w(T.emissiveMap.channel),metalnessMapUv:Bt&&w(T.metalnessMap.channel),roughnessMapUv:pt&&w(T.roughnessMap.channel),anisotropyMapUv:pe&&w(T.anisotropyMap.channel),clearcoatMapUv:_e&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(T.sheenRoughnessMap.channel),specularMapUv:Re&&w(T.specularMap.channel),specularColorMapUv:be&&w(T.specularColorMap.channel),specularIntensityMapUv:it&&w(T.specularIntensityMap.channel),transmissionMapUv:ot&&w(T.transmissionMap.channel),thicknessMapUv:vt&&w(T.thicknessMap.channel),alphaMapUv:Ce&&w(T.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(kt||It),vertexNormals:!!G.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(ze||Ce),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||G.attributes.normal===void 0&&kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:he,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ue,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:H&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ni,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function _(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)N.push(Y),N.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(x(N,T),C(N,T),N.push(s.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function x(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function C(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function P(T){const N=S[T.type];let Y;if(N){const U=Li[N];Y=_x.clone(U.uniforms)}else Y=T.uniforms;return Y}function I(T,N){let Y=v.get(N);return Y!==void 0?++Y.usedTimes:(Y=new qE(s,N,T,o),p.push(Y),v.set(N,Y)),Y}function z(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function D(T){f.remove(T)}function k(){f.dispose()}return{getParameters:A,getProgramCacheKey:_,getUniforms:P,acquireProgram:I,releaseProgram:z,releaseShaderCache:D,programs:p,dispose:k}}function e1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function t1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Pg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ig(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,w,A,_,x){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:S,material:w,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:_,group:x},s[e]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=w,C.materialVariant=u(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=_,C.group=x),e++,C}function m(g,S,w,A,_,x){const C=f(g,S,w,A,_,x);w.transmission>0?r.push(C):w.transparent===!0?o.push(C):t.push(C)}function p(g,S,w,A,_,x){const C=f(g,S,w,A,_,x);w.transmission>0?r.unshift(C):w.transparent===!0?o.unshift(C):t.unshift(C)}function v(g,S){t.length>1&&t.sort(g||t1),r.length>1&&r.sort(S||Pg),o.length>1&&o.sort(S||Pg)}function y(){for(let g=e,S=s.length;g<S;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:m,unshift:p,finish:y,sort:v}}function n1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Ig,s.set(r,[u])):o>=l.length?(u=new Ig,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function i1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new xt};break;case"SpotLight":t={position:new $,direction:new $,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function r1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let s1=0;function a1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o1(s){const e=new i1,t=r1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const o=new $,l=new jt,u=new jt;function f(p){let v=0,y=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,w=0,A=0,_=0,x=0,C=0,P=0,I=0,z=0,D=0,k=0;p.sort(a1);for(let N=0,Y=p.length;N<Y;N++){const U=p[N],J=U.color,ce=U.intensity,de=U.distance;let G=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===fs?G=U.shadow.map.texture:G=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)v+=J.r*ce,y+=J.g*ce,g+=J.b*ce;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(U.sh.coefficients[ee],ce);k++}else if(U.isDirectionalLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,q=t.get(U);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=G,r.directionalShadowMatrix[S]=U.shadow.matrix,C++}r.directional[S]=ee,S++}else if(U.isSpotLight){const ee=e.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(J).multiplyScalar(ce),ee.distance=de,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,r.spot[A]=ee;const j=U.shadow;if(U.map&&(r.spotLightMap[z]=U.map,z++,j.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[A]=j.matrix,U.castShadow){const q=t.get(U);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[A]=q,r.spotShadowMap[A]=G,I++}A++}else if(U.isRectAreaLight){const ee=e.get(U);ee.color.copy(J).multiplyScalar(ce),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=ee,_++}else if(U.isPointLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const j=U.shadow,q=t.get(U);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[w]=q,r.pointShadowMap[w]=G,r.pointShadowMatrix[w]=U.shadow.matrix,P++}r.point[w]=ee,w++}else if(U.isHemisphereLight){const ee=e.get(U);ee.skyColor.copy(U.color).multiplyScalar(ce),ee.groundColor.copy(U.groundColor).multiplyScalar(ce),r.hemi[x]=ee,x++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==w||T.spotLength!==A||T.rectAreaLength!==_||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==P||T.numSpotShadows!==I||T.numSpotMaps!==z||T.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=_,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=I+z-D,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=k,T.directionalLength=S,T.pointLength=w,T.spotLength=A,T.rectAreaLength=_,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=P,T.numSpotShadows=I,T.numSpotMaps=z,T.numLightProbes=k,r.version=s1++)}function m(p,v){let y=0,g=0,S=0,w=0,A=0;const _=v.matrixWorldInverse;for(let x=0,C=p.length;x<C;x++){const P=p[x];if(P.isDirectionalLight){const I=r.directional[y];I.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),y++}else if(P.isSpotLight){const I=r.spot[S];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),S++}else if(P.isRectAreaLight){const I=r.rectArea[w];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(_),u.identity(),l.copy(P.matrixWorld),l.premultiply(_),u.extractRotation(l),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),w++}else if(P.isPointLight){const I=r.point[g];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(_),g++}else if(P.isHemisphereLight){const I=r.hemi[A];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(_),A++}}}return{setup:f,setupView:m,state:r}}function Dg(s){const e=new o1(s),t=[],r=[],o=[];function l(g){y.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function l1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Dg(s),e.set(o,[f])):l>=u.length?(f=new Dg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`,d1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],f1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Lg=new jt,ao=new $,Fd=new $;function h1(s,e,t){let r=new Yf;const o=new gt,l=new gt,u=new en,f=new Mx,m=new Ex,p={},v=t.maxTextureSize,y={[or]:Bn,[Bn]:or,[Ni]:Ni},g=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const w=new Dn;w.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Rn(w,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let x=this.type;this.render=function(D,k,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===l_&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zl);const N=s.getRenderTarget(),Y=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),J=s.state;J.setBlending(sr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ce=x!==this.type;ce&&k.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(G=>G.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,G=D.length;de<G;de++){const ee=D[de],j=ee.shadow;if(j===void 0){rt("WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const q=j.getFrameExtents();o.multiply(q),l.copy(j.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/q.x),o.x=l.x*q.x,j.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/q.y),o.y=l.y*q.y,j.mapSize.y=l.y));const le=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=le,j.map===null||ce===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===oo){if(ee.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Bi(o.x,o.y,{format:fs,type:lr,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),j.map.texture.name=ee.name+".shadowMap",j.map.depthTexture=new ua(o.x,o.y,Ui),j.map.depthTexture.name=ee.name+".shadowMapDepth",j.map.depthTexture.format=cr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Mn,j.map.depthTexture.magFilter=Mn}else ee.isPointLight?(j.map=new u0(o.x),j.map.depthTexture=new gx(o.x,zi)):(j.map=new Bi(o.x,o.y),j.map.depthTexture=new ua(o.x,o.y,zi)),j.map.depthTexture.name=ee.name+".shadowMap",j.map.depthTexture.format=cr,this.type===Zl?(j.map.depthTexture.compareFunction=le?Wf:Vf,j.map.depthTexture.minFilter=Pn,j.map.depthTexture.magFilter=Pn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Mn,j.map.depthTexture.magFilter=Mn);j.camera.updateProjectionMatrix()}const oe=j.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<oe;F++){if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,F),s.clear();else{F===0&&(s.setRenderTarget(j.map),s.clear());const Q=j.getViewport(F);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),J.viewport(u)}if(ee.isPointLight){const Q=j.camera,Ue=j.matrix,We=ee.distance||Q.far;We!==Q.far&&(Q.far=We,Q.updateProjectionMatrix()),ao.setFromMatrixPosition(ee.matrixWorld),Q.position.copy(ao),Fd.copy(Q.position),Fd.add(d1[F]),Q.up.copy(f1[F]),Q.lookAt(Fd),Q.updateMatrixWorld(),Ue.makeTranslation(-ao.x,-ao.y,-ao.z),Lg.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Lg,Q.coordinateSystem,Q.reversedDepth)}else j.updateMatrices(ee);r=j.getFrustum(),I(k,T,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===oo&&C(j,T),j.needsUpdate=!1}x=this.type,_.needsUpdate=!1,s.setRenderTarget(N,Y,U)};function C(D,k){const T=e.update(A);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bi(o.x,o.y,{format:fs,type:lr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(k,null,T,g,A,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(k,null,T,S,A,null)}function P(D,k,T,N){let Y=null;const U=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)Y=U;else if(Y=T.isPointLight===!0?m:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const J=Y.uuid,ce=k.uuid;let de=p[J];de===void 0&&(de={},p[J]=de);let G=de[ce];G===void 0&&(G=Y.clone(),de[ce]=G,k.addEventListener("dispose",z)),Y=G}if(Y.visible=k.visible,Y.wireframe=k.wireframe,N===oo?Y.side=k.shadowSide!==null?k.shadowSide:k.side:Y.side=k.shadowSide!==null?k.shadowSide:y[k.side],Y.alphaMap=k.alphaMap,Y.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,Y.map=k.map,Y.clipShadows=k.clipShadows,Y.clippingPlanes=k.clippingPlanes,Y.clipIntersection=k.clipIntersection,Y.displacementMap=k.displacementMap,Y.displacementScale=k.displacementScale,Y.displacementBias=k.displacementBias,Y.wireframeLinewidth=k.wireframeLinewidth,Y.linewidth=k.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const J=s.properties.get(Y);J.light=T}return Y}function I(D,k,T,N,Y){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&Y===oo)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),de=D.material;if(Array.isArray(de)){const G=ce.groups;for(let ee=0,j=G.length;ee<j;ee++){const q=G[ee],le=de[q.materialIndex];if(le&&le.visible){const oe=P(D,le,N,Y);D.onBeforeShadow(s,D,k,T,ce,oe,q),s.renderBufferDirect(T,null,ce,oe,D,q),D.onAfterShadow(s,D,k,T,ce,oe,q)}}}else if(de.visible){const G=P(D,de,N,Y);D.onBeforeShadow(s,D,k,T,ce,G,null),s.renderBufferDirect(T,null,ce,G,D,null),D.onAfterShadow(s,D,k,T,ce,G,null)}}const J=D.children;for(let ce=0,de=J.length;ce<de;ce++)I(J[ce],k,T,N,Y)}function z(D){D.target.removeEventListener("dispose",z);for(const T in p){const N=p[T],Y=D.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function p1(s,e){function t(){let B=!1;const Ce=new en;let fe=null;const Be=new en(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!B&&(s.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){B=Ie},setClear:function(Ie,xe,qe,lt,Ot){Ot===!0&&(Ie*=lt,xe*=lt,qe*=lt),Ce.set(Ie,xe,qe,lt),Be.equals(Ce)===!1&&(s.clearColor(Ie,xe,qe,lt),Be.copy(Ce))},reset:function(){B=!1,fe=null,Be.set(-1,0,0,0)}}}function r(){let B=!1,Ce=!1,fe=null,Be=null,Ie=null;return{setReversed:function(xe){if(Ce!==xe){const qe=e.get("EXT_clip_control");xe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=xe;const lt=Ie;Ie=null,this.setClear(lt)}},getReversed:function(){return Ce},setTest:function(xe){xe?ge(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(xe){fe!==xe&&!B&&(s.depthMask(xe),fe=xe)},setFunc:function(xe){if(Ce&&(xe=G_[xe]),Be!==xe){switch(xe){case kd:s.depthFunc(s.NEVER);break;case Bd:s.depthFunc(s.ALWAYS);break;case zd:s.depthFunc(s.LESS);break;case la:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Hd:s.depthFunc(s.GEQUAL);break;case Vd:s.depthFunc(s.GREATER);break;case Wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=xe}},setLocked:function(xe){B=xe},setClear:function(xe){Ie!==xe&&(Ie=xe,Ce&&(xe=1-xe),s.clearDepth(xe))},reset:function(){B=!1,fe=null,Be=null,Ie=null,Ce=!1}}}function o(){let B=!1,Ce=null,fe=null,Be=null,Ie=null,xe=null,qe=null,lt=null,Ot=null;return{setTest:function(Ct){B||(Ct?ge(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(Ct){Ce!==Ct&&!B&&(s.stencilMask(Ct),Ce=Ct)},setFunc:function(Ct,Ln,ni){(fe!==Ct||Be!==Ln||Ie!==ni)&&(s.stencilFunc(Ct,Ln,ni),fe=Ct,Be=Ln,Ie=ni)},setOp:function(Ct,Ln,ni){(xe!==Ct||qe!==Ln||lt!==ni)&&(s.stencilOp(Ct,Ln,ni),xe=Ct,qe=Ln,lt=ni)},setLocked:function(Ct){B=Ct},setClear:function(Ct){Ot!==Ct&&(s.clearStencil(Ct),Ot=Ct)},reset:function(){B=!1,Ce=null,fe=null,Be=null,Ie=null,xe=null,qe=null,lt=null,Ot=null}}}const l=new t,u=new r,f=new o,m=new WeakMap,p=new WeakMap;let v={},y={},g={},S=new WeakMap,w=[],A=null,_=!1,x=null,C=null,P=null,I=null,z=null,D=null,k=null,T=new xt(0,0,0),N=0,Y=!1,U=null,J=null,ce=null,de=null,G=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(le)[1]),j=q>=1):le.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),j=q>=2);let oe=null,F={};const Q=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),We=new en().fromArray(Q),Fe=new en().fromArray(Ue);function se(B,Ce,fe,Be){const Ie=new Uint8Array(4),xe=s.createTexture();s.bindTexture(B,xe),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<fe;qe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ce+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return xe}const ve={};ve[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(la),Ut(!1),kt(Cm),ge(s.CULL_FACE),bt(sr);function ge(B){v[B]!==!0&&(s.enable(B),v[B]=!0)}function he(B){v[B]!==!1&&(s.disable(B),v[B]=!1)}function Me(B,Ce){return g[B]!==Ce?(s.bindFramebuffer(B,Ce),g[B]=Ce,B===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),B===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function we(B,Ce){let fe=w,Be=!1;if(B){fe=S.get(Ce),fe===void 0&&(fe=[],S.set(Ce,fe));const Ie=B.textures;if(fe.length!==Ie.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,qe=Ie.length;xe<qe;xe++)fe[xe]=s.COLOR_ATTACHMENT0+xe;fe.length=Ie.length,Be=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Be=!0);Be&&s.drawBuffers(fe)}function ze(B){return A!==B?(s.useProgram(B),A=B,!0):!1}const et={[os]:s.FUNC_ADD,[u_]:s.FUNC_SUBTRACT,[d_]:s.FUNC_REVERSE_SUBTRACT};et[f_]=s.MIN,et[h_]=s.MAX;const dt={[p_]:s.ZERO,[m_]:s.ONE,[g_]:s.SRC_COLOR,[Ud]:s.SRC_ALPHA,[M_]:s.SRC_ALPHA_SATURATE,[y_]:s.DST_COLOR,[__]:s.DST_ALPHA,[v_]:s.ONE_MINUS_SRC_COLOR,[Od]:s.ONE_MINUS_SRC_ALPHA,[S_]:s.ONE_MINUS_DST_COLOR,[x_]:s.ONE_MINUS_DST_ALPHA,[E_]:s.CONSTANT_COLOR,[w_]:s.ONE_MINUS_CONSTANT_COLOR,[T_]:s.CONSTANT_ALPHA,[b_]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(B,Ce,fe,Be,Ie,xe,qe,lt,Ot,Ct){if(B===sr){_===!0&&(he(s.BLEND),_=!1);return}if(_===!1&&(ge(s.BLEND),_=!0),B!==c_){if(B!==x||Ct!==Y){if((C!==os||z!==os)&&(s.blendEquation(s.FUNC_ADD),C=os,z=os),Ct)switch(B){case aa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ia:s.blendFunc(s.ONE,s.ONE);break;case Rm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Mt("WebGLState: Invalid blending: ",B);break}else switch(B){case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ia:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Rm:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pm:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",B);break}P=null,I=null,D=null,k=null,T.set(0,0,0),N=0,x=B,Y=Ct}return}Ie=Ie||Ce,xe=xe||fe,qe=qe||Be,(Ce!==C||Ie!==z)&&(s.blendEquationSeparate(et[Ce],et[Ie]),C=Ce,z=Ie),(fe!==P||Be!==I||xe!==D||qe!==k)&&(s.blendFuncSeparate(dt[fe],dt[Be],dt[xe],dt[qe]),P=fe,I=Be,D=xe,k=qe),(lt.equals(T)===!1||Ot!==N)&&(s.blendColor(lt.r,lt.g,lt.b,Ot),T.copy(lt),N=Ot),x=B,Y=!1}function at(B,Ce){B.side===Ni?he(s.CULL_FACE):ge(s.CULL_FACE);let fe=B.side===Bn;Ce&&(fe=!fe),Ut(fe),B.blending===aa&&B.transparent===!1?bt(sr):bt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Be=B.stencilWrite;f.setTest(Be),Be&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),H(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(B){U!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),U=B)}function kt(B){B!==a_?(ge(s.CULL_FACE),B!==J&&(B===Cm?s.cullFace(s.BACK):B===o_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),J=B}function _n(B){B!==ce&&(j&&s.lineWidth(B),ce=B)}function H(B,Ce,fe){B?(ge(s.POLYGON_OFFSET_FILL),(de!==Ce||G!==fe)&&(de=Ce,G=fe,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,fe))):he(s.POLYGON_OFFSET_FILL)}function Bt(B){B?ge(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function pt(B){B===void 0&&(B=s.TEXTURE0+ee-1),oe!==B&&(s.activeTexture(B),oe=B)}function It(B,Ce,fe){fe===void 0&&(oe===null?fe=s.TEXTURE0+ee-1:fe=oe);let Be=F[fe];Be===void 0&&(Be={type:void 0,texture:void 0},F[fe]=Be),(Be.type!==B||Be.texture!==Ce)&&(oe!==fe&&(s.activeTexture(fe),oe=fe),s.bindTexture(B,Ce||ve[B]),Be.type=B,Be.texture=Ce)}function Ne(){const B=F[oe];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ht(){try{s.compressedTexImage2D(...arguments)}catch(B){Mt("WebGLState:",B)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(B){Mt("WebGLState:",B)}}function M(){try{s.texSubImage2D(...arguments)}catch(B){Mt("WebGLState:",B)}}function K(){try{s.texSubImage3D(...arguments)}catch(B){Mt("WebGLState:",B)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Mt("WebGLState:",B)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Mt("WebGLState:",B)}}function Te(){try{s.texStorage2D(...arguments)}catch(B){Mt("WebGLState:",B)}}function Le(){try{s.texStorage3D(...arguments)}catch(B){Mt("WebGLState:",B)}}function ue(){try{s.texImage2D(...arguments)}catch(B){Mt("WebGLState:",B)}}function me(){try{s.texImage3D(...arguments)}catch(B){Mt("WebGLState:",B)}}function ke(B){return y[B]!==void 0?y[B]:s.getParameter(B)}function Ge(B,Ce){y[B]!==Ce&&(s.pixelStorei(B,Ce),y[B]=Ce)}function Re(B){We.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),We.copy(B))}function be(B){Fe.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Fe.copy(B))}function it(B,Ce){let fe=p.get(Ce);fe===void 0&&(fe=new WeakMap,p.set(Ce,fe));let Be=fe.get(B);Be===void 0&&(Be=s.getUniformBlockIndex(Ce,B.name),fe.set(B,Be))}function ot(B,Ce){const Be=p.get(Ce).get(B);m.get(Ce)!==Be&&(s.uniformBlockBinding(Ce,Be,B.__bindingPointIndex),m.set(Ce,Be))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},y={},oe=null,F={},g={},S=new WeakMap,w=[],A=null,_=!1,x=null,C=null,P=null,I=null,z=null,D=null,k=null,T=new xt(0,0,0),N=0,Y=!1,U=null,J=null,ce=null,de=null,G=null,We.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:he,bindFramebuffer:Me,drawBuffers:we,useProgram:ze,setBlending:bt,setMaterial:at,setFlipSided:Ut,setCullFace:kt,setLineWidth:_n,setPolygonOffset:H,setScissorTest:Bt,activeTexture:pt,bindTexture:It,unbindTexture:Ne,compressedTexImage2D:Ht,compressedTexImage3D:R,texImage2D:ue,texImage3D:me,pixelStorei:Ge,getParameter:ke,updateUBOMapping:it,uniformBlockBinding:ot,texStorage2D:Te,texStorage3D:Le,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Re,viewport:be,reset:vt}}function m1(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new gt,v=new WeakMap,y=new Set;let g;const S=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,M){return w?new OffscreenCanvas(R,M):oc("canvas")}function _(R,M,K){let pe=1;const _e=Ht(R);if((_e.width>K||_e.height>K)&&(pe=K/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Te=Math.floor(pe*_e.width),Le=Math.floor(pe*_e.height);g===void 0&&(g=A(Te,Le));const ue=M?A(Te,Le):g;return ue.width=Te,ue.height=Le,ue.getContext("2d").drawImage(R,0,0,Te,Le),rt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Te+"x"+Le+")."),ue}else return"data"in R&&rt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),R;return R}function x(R){return R.generateMipmaps}function C(R){s.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(R,M,K,pe,_e,Te=!1){if(R!==null){if(s[R]!==void 0)return s[R];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Le;pe&&(Le=e.get("EXT_texture_norm16"),Le||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===s.RED&&(K===s.FLOAT&&(ue=s.R32F),K===s.HALF_FLOAT&&(ue=s.R16F),K===s.UNSIGNED_BYTE&&(ue=s.R8),K===s.UNSIGNED_SHORT&&Le&&(ue=Le.R16_EXT),K===s.SHORT&&Le&&(ue=Le.R16_SNORM_EXT)),M===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.R8UI),K===s.UNSIGNED_SHORT&&(ue=s.R16UI),K===s.UNSIGNED_INT&&(ue=s.R32UI),K===s.BYTE&&(ue=s.R8I),K===s.SHORT&&(ue=s.R16I),K===s.INT&&(ue=s.R32I)),M===s.RG&&(K===s.FLOAT&&(ue=s.RG32F),K===s.HALF_FLOAT&&(ue=s.RG16F),K===s.UNSIGNED_BYTE&&(ue=s.RG8),K===s.UNSIGNED_SHORT&&Le&&(ue=Le.RG16_EXT),K===s.SHORT&&Le&&(ue=Le.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RG8UI),K===s.UNSIGNED_SHORT&&(ue=s.RG16UI),K===s.UNSIGNED_INT&&(ue=s.RG32UI),K===s.BYTE&&(ue=s.RG8I),K===s.SHORT&&(ue=s.RG16I),K===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),K===s.UNSIGNED_INT&&(ue=s.RGB32UI),K===s.BYTE&&(ue=s.RGB8I),K===s.SHORT&&(ue=s.RGB16I),K===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),K===s.UNSIGNED_INT&&(ue=s.RGBA32UI),K===s.BYTE&&(ue=s.RGBA8I),K===s.SHORT&&(ue=s.RGBA16I),K===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(K===s.UNSIGNED_SHORT&&Le&&(ue=Le.RGB16_EXT),K===s.SHORT&&Le&&(ue=Le.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const me=Te?ac:Et.getTransfer(_e);K===s.FLOAT&&(ue=s.RGBA32F),K===s.HALF_FLOAT&&(ue=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ue=me===Nt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Le&&(ue=Le.RGBA16_EXT),K===s.SHORT&&Le&&(ue=Le.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function z(R,M){let K;return R?M===null||M===zi||M===ho?K=s.DEPTH24_STENCIL8:M===Ui?K=s.DEPTH32F_STENCIL8:M===fo&&(K=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===ho?K=s.DEPTH_COMPONENT24:M===Ui?K=s.DEPTH_COMPONENT32F:M===fo&&(K=s.DEPTH_COMPONENT16),K}function D(R,M){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function k(R){const M=R.target;M.removeEventListener("dispose",k),N(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&y.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),U(M)}function N(R){const M=r.get(R);if(M.__webglInit===void 0)return;const K=R.source,pe=S.get(K);if(pe){const _e=pe[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Y(R),Object.keys(pe).length===0&&S.delete(K)}r.remove(R)}function Y(R){const M=r.get(R);s.deleteTexture(M.__webglTexture);const K=R.source,pe=S.get(K);delete pe[M.__cacheKey],u.memory.textures--}function U(R){const M=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let _e=0;_e<M.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(M.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)s.deleteFramebuffer(M.__webglFramebuffer[pe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=R.textures;for(let pe=0,_e=K.length;pe<_e;pe++){const Te=r.get(K[pe]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),u.memory.textures--),r.remove(K[pe])}r.remove(R)}let J=0;function ce(){J=0}function de(){return J}function G(R){J=R}function ee(){const R=J;return R>=o.maxTextures&&rt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),J+=1,R}function j(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const K=r.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const pe=R.image;if(pe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{he(K,R,M);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+M)}function le(R,M){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){he(K,R,M);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+M)}function oe(R,M){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){he(K,R,M);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+M)}function F(R,M){const K=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&K.__version!==R.version){Me(K,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+M)}const Q={[Xd]:s.REPEAT,[rr]:s.CLAMP_TO_EDGE,[jd]:s.MIRRORED_REPEAT},Ue={[Mn]:s.NEAREST,[R_]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[nd]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},We={[D_]:s.NEVER,[O_]:s.ALWAYS,[L_]:s.LESS,[Vf]:s.LEQUAL,[N_]:s.EQUAL,[Wf]:s.GEQUAL,[F_]:s.GREATER,[U_]:s.NOTEQUAL};function Fe(R,M){if(M.type===Ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===nd||M.magFilter===Sl||M.magFilter===cs||M.minFilter===Pn||M.minFilter===nd||M.minFilter===Sl||M.minFilter===cs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Q[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Ue[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Ue[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,We[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==Sl&&M.minFilter!==cs||M.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function se(R,M){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",k));const pe=M.source;let _e=S.get(pe);_e===void 0&&(_e={},S.set(pe,_e));const Te=j(M);if(Te!==R.__cacheKey){_e[Te]===void 0&&(_e[Te]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),_e[Te].usedTimes++;const Le=_e[R.__cacheKey];Le!==void 0&&(_e[R.__cacheKey].usedTimes--,Le.usedTimes===0&&Y(M)),R.__cacheKey=Te,R.__webglTexture=_e[Te].texture}return K}function ve(R,M,K){return Math.floor(Math.floor(R/K)/M)}function ge(R,M,K,pe){const Te=R.updateRanges;if(Te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,K,pe,M.data);else{Te.sort((Ge,Re)=>Ge.start-Re.start);let Le=0;for(let Ge=1;Ge<Te.length;Ge++){const Re=Te[Le],be=Te[Ge],it=Re.start+Re.count,ot=ve(be.start,M.width,4),vt=ve(Re.start,M.width,4);be.start<=it+1&&ot===vt&&ve(be.start+be.count-1,M.width,4)===ot?Re.count=Math.max(Re.count,be.start+be.count-Re.start):(++Le,Te[Le]=be)}Te.length=Le+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),me=t.getParameter(s.UNPACK_SKIP_PIXELS),ke=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,Re=Te.length;Ge<Re;Ge++){const be=Te[Ge],it=Math.floor(be.start/4),ot=Math.ceil(be.count/4),vt=it%M.width,B=Math.floor(it/M.width),Ce=ot,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,vt,B,Ce,fe,K,pe,M.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,me),t.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function he(R,M,K){let pe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=se(R,M),Te=M.source;t.bindTexture(pe,R.__webglTexture,s.TEXTURE0+K);const Le=r.get(Te);if(Te.version!==Le.__version||_e===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const fe=Et.getPrimaries(Et.workingColorSpace),Be=M.colorSpace===Ur?null:Et.getPrimaries(M.colorSpace),Ie=M.colorSpace===Ur||fe===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let me=_(M.image,!1,o.maxTextureSize);me=Ne(M,me);const ke=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let Re=I(M.internalFormat,ke,Ge,M.normalized,M.colorSpace,M.isVideoTexture);Fe(pe,M);let be;const it=M.mipmaps,ot=M.isVideoTexture!==!0,vt=Le.__version===void 0||_e===!0,B=Te.dataReady,Ce=D(M,me);if(M.isDepthTexture)Re=z(M.format===us,M.type),vt&&(ot?t.texStorage2D(s.TEXTURE_2D,1,Re,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Re,me.width,me.height,0,ke,Ge,null));else if(M.isDataTexture)if(it.length>0){ot&&vt&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,it[0].width,it[0].height);for(let fe=0,Be=it.length;fe<Be;fe++)be=it[fe],ot?B&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,be.width,be.height,ke,Ge,be.data):t.texImage2D(s.TEXTURE_2D,fe,Re,be.width,be.height,0,ke,Ge,be.data);M.generateMipmaps=!1}else ot?(vt&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,me.width,me.height),B&&ge(M,me,ke,Ge)):t.texImage2D(s.TEXTURE_2D,0,Re,me.width,me.height,0,ke,Ge,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ot&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Re,it[0].width,it[0].height,me.depth);for(let fe=0,Be=it.length;fe<Be;fe++)if(be=it[fe],M.format!==Ei)if(ke!==null)if(ot){if(B)if(M.layerUpdates.size>0){const Ie=ug(be.width,be.height,M.format,M.type);for(const xe of M.layerUpdates){const qe=be.data.subarray(xe*Ie/be.data.BYTES_PER_ELEMENT,(xe+1)*Ie/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,xe,be.width,be.height,1,ke,qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,me.depth,ke,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Re,be.width,be.height,me.depth,0,be.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,me.depth,ke,Ge,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,Re,be.width,be.height,me.depth,0,ke,Ge,be.data)}else{ot&&vt&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,it[0].width,it[0].height);for(let fe=0,Be=it.length;fe<Be;fe++)be=it[fe],M.format!==Ei?ke!==null?ot?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,be.width,be.height,ke,be.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,Re,be.width,be.height,0,be.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?B&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,be.width,be.height,ke,Ge,be.data):t.texImage2D(s.TEXTURE_2D,fe,Re,be.width,be.height,0,ke,Ge,be.data)}else if(M.isDataArrayTexture)if(ot){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Re,me.width,me.height,me.depth),B)if(M.layerUpdates.size>0){const fe=ug(me.width,me.height,M.format,M.type);for(const Be of M.layerUpdates){const Ie=me.data.subarray(Be*fe/me.data.BYTES_PER_ELEMENT,(Be+1)*fe/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Be,me.width,me.height,1,ke,Ge,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ke,Ge,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,me.width,me.height,me.depth,0,ke,Ge,me.data);else if(M.isData3DTexture)ot?(vt&&t.texStorage3D(s.TEXTURE_3D,Ce,Re,me.width,me.height,me.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ke,Ge,me.data)):t.texImage3D(s.TEXTURE_3D,0,Re,me.width,me.height,me.depth,0,ke,Ge,me.data);else if(M.isFramebufferTexture){if(vt)if(ot)t.texStorage2D(s.TEXTURE_2D,Ce,Re,me.width,me.height);else{let fe=me.width,Be=me.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,Re,fe,Be,0,ke,Ge,null),fe>>=1,Be>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),me.parentNode!==fe){fe.appendChild(me),y.add(M),fe.onpaint=lt=>{const Ot=lt.changedElements;for(const Ct of y)Ot.includes(Ct.image)&&(Ct.needsUpdate=!0)},fe.requestPaint();return}const Be=0,Ie=s.RGBA,xe=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Be,Ie,xe,qe,me),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(ot&&vt){const fe=Ht(it[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Re,fe.width,fe.height)}for(let fe=0,Be=it.length;fe<Be;fe++)be=it[fe],ot?B&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ke,Ge,be):t.texImage2D(s.TEXTURE_2D,fe,Re,ke,Ge,be);M.generateMipmaps=!1}else if(ot){if(vt){const fe=Ht(me);t.texStorage2D(s.TEXTURE_2D,Ce,Re,fe.width,fe.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ge,me)}else t.texImage2D(s.TEXTURE_2D,0,Re,ke,Ge,me);x(M)&&C(pe),Le.__version=Te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Me(R,M,K){if(M.image.length!==6)return;const pe=se(R,M),_e=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+K);const Te=r.get(_e);if(_e.version!==Te.__version||pe===!0){t.activeTexture(s.TEXTURE0+K);const Le=Et.getPrimaries(Et.workingColorSpace),ue=M.colorSpace===Ur?null:Et.getPrimaries(M.colorSpace),me=M.colorSpace===Ur||Le===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ke=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let xe=0;xe<6;xe++)!ke&&!Ge?Re[xe]=_(M.image[xe],!0,o.maxCubemapSize):Re[xe]=Ge?M.image[xe].image:M.image[xe],Re[xe]=Ne(M,Re[xe]);const be=Re[0],it=l.convert(M.format,M.colorSpace),ot=l.convert(M.type),vt=I(M.internalFormat,it,ot,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Ce=Te.__version===void 0||pe===!0,fe=_e.dataReady;let Be=D(M,be);Fe(s.TEXTURE_CUBE_MAP,M);let Ie;if(ke){B&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,be.width,be.height);for(let xe=0;xe<6;xe++){Ie=Re[xe].mipmaps;for(let qe=0;qe<Ie.length;qe++){const lt=Ie[qe];M.format!==Ei?it!==null?B?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,lt.width,lt.height,it,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,vt,lt.width,lt.height,0,lt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,lt.width,lt.height,it,ot,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,vt,lt.width,lt.height,0,it,ot,lt.data)}}}else{if(Ie=M.mipmaps,B&&Ce){Ie.length>0&&Be++;const xe=Ht(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ge){B?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Re[xe].width,Re[xe].height,it,ot,Re[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,vt,Re[xe].width,Re[xe].height,0,it,ot,Re[xe].data);for(let qe=0;qe<Ie.length;qe++){const Ot=Ie[qe].image[xe].image;B?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,Ot.width,Ot.height,it,ot,Ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,vt,Ot.width,Ot.height,0,it,ot,Ot.data)}}else{B?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,it,ot,Re[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,vt,it,ot,Re[xe]);for(let qe=0;qe<Ie.length;qe++){const lt=Ie[qe];B?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,it,ot,lt.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,vt,it,ot,lt.image[xe])}}}x(M)&&C(s.TEXTURE_CUBE_MAP),Te.__version=_e.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function we(R,M,K,pe,_e,Te){const Le=l.convert(K.format,K.colorSpace),ue=l.convert(K.type),me=I(K.internalFormat,Le,ue,K.normalized,K.colorSpace),ke=r.get(M),Ge=r.get(K);if(Ge.__renderTarget=M,!ke.__hasExternalTextures){const Re=Math.max(1,M.width>>Te),be=Math.max(1,M.height>>Te);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,Te,me,Re,be,M.depth,0,Le,ue,null):t.texImage2D(_e,Te,me,Re,be,0,Le,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),pt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,Ge.__webglTexture,0,Bt(M)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,Ge.__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(R,M,K){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const pe=M.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,Te=z(M.stencilBuffer,_e),Le=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt(M),Te,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt(M),Te,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Te,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,R)}else{const pe=M.textures;for(let _e=0;_e<pe.length;_e++){const Te=pe[_e],Le=l.convert(Te.format,Te.colorSpace),ue=l.convert(Te.type),me=I(Te.internalFormat,Le,ue,Te.normalized,Te.colorSpace);pt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt(M),me,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt(M),me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,me,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(R,M,K){const pe=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(M.depthTexture);if(_e.__renderTarget=M,(!_e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pe){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,M.depthTexture.addEventListener("dispose",k)),_e.__webglTexture===void 0){_e.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M.depthTexture);const ke=l.convert(M.depthTexture.format),Ge=l.convert(M.depthTexture.type);let Re;M.depthTexture.format===cr?Re=s.DEPTH_COMPONENT24:M.depthTexture.format===us&&(Re=s.DEPTH24_STENCIL8);for(let be=0;be<6;be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Re,M.width,M.height,0,ke,Ge,null)}}else q(M.depthTexture,0);const Te=_e.__webglTexture,Le=Bt(M),ue=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,me=M.depthTexture.format===us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===cr)pt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ue,Te,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,me,ue,Te,0);else if(M.depthTexture.format===us)pt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ue,Te,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,me,ue,Te,0);else throw new Error("Unknown depthTexture format")}function dt(R){const M=r.get(R),K=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const pe=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const _e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),M.__depthDisposeCallback=_e}M.__boundDepthTexture=pe}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let pe=0;pe<6;pe++)et(M.__webglFramebuffer[pe],R,pe);else{const pe=R.texture.mipmaps;pe&&pe.length>0?et(M.__webglFramebuffer[0],R,0):et(M.__webglFramebuffer,R,0)}else if(K){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=s.createRenderbuffer(),ze(M.__webglDepthbuffer[pe],R,!1);else{const _e=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Te)}}else{const pe=R.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ze(M.__webglDepthbuffer,R,!1);else{const _e=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(R,M,K){const pe=r.get(R);M!==void 0&&we(pe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&dt(R)}function at(R){const M=R.texture,K=r.get(R),pe=r.get(M);R.addEventListener("dispose",T);const _e=R.textures,Te=R.isWebGLCubeRenderTarget===!0,Le=_e.length>1;if(Le||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=M.version,u.memory.textures++),Te){K.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ue]=[];for(let me=0;me<M.mipmaps.length;me++)K.__webglFramebuffer[ue][me]=s.createFramebuffer()}else K.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)K.__webglFramebuffer[ue]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Le)for(let ue=0,me=_e.length;ue<me;ue++){const ke=r.get(_e[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&pt(R)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ue=0;ue<_e.length;ue++){const me=_e[ue];K.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ue]);const ke=l.convert(me.format,me.colorSpace),Ge=l.convert(me.type),Re=I(me.internalFormat,ke,Ge,me.normalized,me.colorSpace,R.isXRRenderTarget===!0),be=Bt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Re,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,K.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)we(K.__webglFramebuffer[ue][me],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else we(K.__webglFramebuffer[ue],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(M)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ue=0,me=_e.length;ue<me;ue++){const ke=_e[ue],Ge=r.get(ke);let Re=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Re=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,Ge.__webglTexture),Fe(Re,ke),we(K.__webglFramebuffer,R,ke,s.COLOR_ATTACHMENT0+ue,Re,0),x(ke)&&C(Re)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,pe.__webglTexture),Fe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)we(K.__webglFramebuffer[me],R,M,s.COLOR_ATTACHMENT0,ue,me);else we(K.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,ue,0);x(M)&&C(ue),t.unbindTexture()}R.depthBuffer&&dt(R)}function Ut(R){const M=R.textures;for(let K=0,pe=M.length;K<pe;K++){const _e=M[K];if(x(_e)){const Te=P(R),Le=r.get(_e).__webglTexture;t.bindTexture(Te,Le),C(Te),t.unbindTexture()}}}const kt=[],_n=[];function H(R){if(R.samples>0){if(pt(R)===!1){const M=R.textures,K=R.width,pe=R.height;let _e=s.COLOR_BUFFER_BIT;const Te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(R),ue=M.length>1;if(ue)for(let ke=0;ke<M.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const me=R.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ke=0;ke<M.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const Ge=r.get(M[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,K,pe,0,0,K,pe,_e,s.NEAREST),m===!0&&(kt.length=0,_n.length=0,kt.push(s.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(kt.push(Te),_n.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_n)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ke=0;ke<M.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Le.__webglColorRenderbuffer[ke]);const Ge=r.get(M[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&m){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Bt(R){return Math.min(o.maxSamples,R.samples)}function pt(R){const M=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function It(R){const M=u.render.frame;v.get(R)!==M&&(v.set(R,M),R.update())}function Ne(R,M){const K=R.colorSpace,pe=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==sc&&K!==Ur&&(Et.getTransfer(K)===Nt?(pe!==Ei||_e!==ti)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",K)),M}function Ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=ce,this.getTextureUnits=de,this.setTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=F,this.rebindTextures=bt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function g1(s,e){function t(r,o=Ur){let l;const u=Et.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===kf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Wg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Gg)return s.BYTE;if(r===Hg)return s.SHORT;if(r===fo)return s.UNSIGNED_SHORT;if(r===Of)return s.INT;if(r===zi)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===lr)return s.HALF_FLOAT;if(r===Xg)return s.ALPHA;if(r===jg)return s.RGB;if(r===Ei)return s.RGBA;if(r===cr)return s.DEPTH_COMPONENT;if(r===us)return s.DEPTH_STENCIL;if(r===Yg)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===fs)return s.RG;if(r===Gf)return s.RG_INTEGER;if(r===Hf)return s.RGBA_INTEGER;if(r===Jl||r===Ql||r===ec||r===tc)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yd||r===qd||r===$d||r===Kd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Yd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$d)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===ic||r===nf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Zd||r===Jd)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Qd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===ef)return l.COMPRESSED_R11_EAC;if(r===tf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ic)return l.COMPRESSED_RG11_EAC;if(r===nf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===vf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===rf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===af)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===of)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===df)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ff)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_f||r===xf||r===yf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===_f)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sf||r===Mf||r===rc||r===Ef)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Sf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ef)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ho?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`;class x1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new r0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Gi({vertexShader:v1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends hs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,v=null,y=null,g=null,S=null,w=null;const A=typeof XRWebGLBinding<"u",_=new x1,x={},C=t.getContextAttributes();let P=null,I=null;const z=[],D=[],k=new gt;let T=null;const N=new ei;N.viewport=new en;const Y=new ei;Y.viewport=new en;const U=[N,Y],J=new Rx;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ve=z[se];return ve===void 0&&(ve=new ud,z[se]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(se){let ve=z[se];return ve===void 0&&(ve=new ud,z[se]=ve),ve.getGripSpace()},this.getHand=function(se){let ve=z[se];return ve===void 0&&(ve=new ud,z[se]=ve),ve.getHandSpace()};function G(se){const ve=D.indexOf(se.inputSource);if(ve===-1)return;const ge=z[ve];ge!==void 0&&(ge.update(se.inputSource,se.frame,p||u),ge.dispatchEvent({type:se.type,data:se.inputSource}))}function ee(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",j);for(let se=0;se<z.length;se++){const ve=D[se];ve!==null&&(D[se]=null,z[se].disconnect(ve))}ce=null,de=null,_.reset();for(const se in x)delete x[se];e.setRenderTarget(P),S=null,g=null,y=null,o=null,I=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&A&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",j),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,he=null,Me=null;C.depth&&(Me=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=C.stencil?us:cr,he=C.stencil?ho:zi);const we={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(we),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new Bi(g.textureWidth,g.textureHeight,{format:Ei,type:ti,depthTexture:new ua(g.textureWidth,g.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ge={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Bi(S.framebufferWidth,S.framebufferHeight,{format:Ei,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(se){for(let ve=0;ve<se.removed.length;ve++){const ge=se.removed[ve],he=D.indexOf(ge);he>=0&&(D[he]=null,z[he].disconnect(ge))}for(let ve=0;ve<se.added.length;ve++){const ge=se.added[ve];let he=D.indexOf(ge);if(he===-1){for(let we=0;we<z.length;we++)if(we>=D.length){D.push(ge),he=we;break}else if(D[we]===null){D[we]=ge,he=we;break}if(he===-1)break}const Me=z[he];Me&&Me.connect(ge)}}const q=new $,le=new $;function oe(se,ve,ge){q.setFromMatrixPosition(ve.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);const he=q.distanceTo(le),Me=ve.projectionMatrix.elements,we=ge.projectionMatrix.elements,ze=Me[14]/(Me[10]-1),et=Me[14]/(Me[10]+1),dt=(Me[9]+1)/Me[5],bt=(Me[9]-1)/Me[5],at=(Me[8]-1)/Me[0],Ut=(we[8]+1)/we[0],kt=ze*at,_n=ze*Ut,H=he/(-at+Ut),Bt=H*-at;if(ve.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Bt),se.translateZ(H),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Me[10]===-1)se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const pt=ze+H,It=et+H,Ne=kt-Bt,Ht=_n+(he-Bt),R=dt*et/It*pt,M=bt*et/It*pt;se.projectionMatrix.makePerspective(Ne,Ht,R,M,pt,It),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function F(se,ve){ve===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ve.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ve=se.near,ge=se.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),J.near=Y.near=N.near=ve,J.far=Y.far=N.far=ge,(ce!==J.near||de!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),ce=J.near,de=J.far),J.layers.mask=se.layers.mask|6,N.layers.mask=J.layers.mask&-5,Y.layers.mask=J.layers.mask&-3;const he=se.parent,Me=J.cameras;F(J,he);for(let we=0;we<Me.length;we++)F(Me[we],he);Me.length===2?oe(J,N,Y):J.projectionMatrix.copy(N.projectionMatrix),Q(se,J,he)};function Q(se,ve,ge){ge===null?se.matrix.copy(ve.matrixWorld):(se.matrix.copy(ge.matrixWorld),se.matrix.invert(),se.matrix.multiply(ve.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Af*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(se){return x[se]};let Ue=null;function We(se,ve){if(v=ve.getViewerPose(p||u),w=ve,v!==null){const ge=v.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let he=!1;ge.length!==J.cameras.length&&(J.cameras.length=0,he=!0);for(let et=0;et<ge.length;et++){const dt=ge[et];let bt=null;if(S!==null)bt=S.getViewport(dt);else{const Ut=y.getViewSubImage(g,dt);bt=Ut.viewport,et===0&&(e.setRenderTargetTextures(I,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(I))}let at=U[et];at===void 0&&(at=new ei,at.layers.enable(et),at.viewport=new en,U[et]=at),at.matrix.fromArray(dt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(dt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(bt.x,bt.y,bt.width,bt.height),et===0&&(J.matrix.copy(at.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),he===!0&&J.cameras.push(at)}const Me=o.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){y=r.getBinding();const et=y.getDepthInformation(ge[0]);et&&et.isValid&&et.texture&&_.init(et,o.renderState)}if(Me&&Me.includes("camera-access")&&A){e.state.unbindTexture(),y=r.getBinding();for(let et=0;et<ge.length;et++){const dt=ge[et].camera;if(dt){let bt=x[dt];bt||(bt=new r0,x[dt]=bt);const at=y.getCameraImage(dt);bt.sourceTexture=at}}}}for(let ge=0;ge<z.length;ge++){const he=D[ge],Me=z[ge];he!==null&&Me!==void 0&&Me.update(he,ve,p||u)}Ue&&Ue(se,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const Fe=new l0;Fe.setAnimationLoop(We),this.setAnimationLoop=function(se){Ue=se},this.dispose=function(){}}}const S1=new jt,m0=new ft;m0.set(-1,0,0,0,1,0,0,0,1);function M1(s,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function r(_,x){x.color.getRGB(_.fogColor.value,s0(s)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function o(_,x,C,P,I){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(_,x):x.isMeshLambertMaterial?(l(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(_,x),y(_,x)):x.isMeshPhongMaterial?(l(_,x),v(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(_,x),g(_,x),x.isMeshPhysicalMaterial&&S(_,x,I)):x.isMeshMatcapMaterial?(l(_,x),w(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),A(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(u(_,x),x.isLineDashedMaterial&&f(_,x)):x.isPointsMaterial?m(_,x,C,P):x.isSpriteMaterial?p(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Bn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Bn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const C=e.get(x),P=C.envMap,I=C.envMapRotation;P&&(_.envMap.value=P,_.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(I)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(m0),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function u(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function f(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function m(_,x,C,P){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*C,_.scale.value=P*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function p(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function v(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function y(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function g(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,C){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,x){x.matcap&&(_.matcap.value=x.matcap)}function A(_,x){const C=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function E1(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const I=P.program;r.uniformBlockBinding(C,I)}function p(C,P){let I=o[C.id];I===void 0&&(w(C),I=v(C),o[C.id]=I,C.addEventListener("dispose",_));const z=P.program;r.updateUBOMapping(C,z);const D=e.render.frame;l[C.id]!==D&&(g(C),l[C.id]=D)}function v(C){const P=y();C.__bindingPointIndex=P;const I=s.createBuffer(),z=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,z,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,I),I}function y(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],I=C.uniforms,z=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let D=0,k=I.length;D<k;D++){const T=Array.isArray(I[D])?I[D]:[I[D]];for(let N=0,Y=T.length;N<Y;N++){const U=T[N];if(S(U,D,N,z)===!0){const J=U.__offset,ce=Array.isArray(U.value)?U.value:[U.value];let de=0;for(let G=0;G<ce.length;G++){const ee=ce[G],j=A(ee);typeof ee=="number"||typeof ee=="boolean"?(U.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,J+de,U.__data)):ee.isMatrix3?(U.__data[0]=ee.elements[0],U.__data[1]=ee.elements[1],U.__data[2]=ee.elements[2],U.__data[3]=0,U.__data[4]=ee.elements[3],U.__data[5]=ee.elements[4],U.__data[6]=ee.elements[5],U.__data[7]=0,U.__data[8]=ee.elements[6],U.__data[9]=ee.elements[7],U.__data[10]=ee.elements[8],U.__data[11]=0):ArrayBuffer.isView(ee)?U.__data.set(new ee.constructor(ee.buffer,ee.byteOffset,U.__data.length)):(ee.toArray(U.__data,de),de+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,P,I,z){const D=C.value,k=P+"_"+I;if(z[k]===void 0)return typeof D=="number"||typeof D=="boolean"?z[k]=D:ArrayBuffer.isView(D)?z[k]=D.slice():z[k]=D.clone(),!0;{const T=z[k];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return z[k]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(T.equals(D)===!1)return T.copy(D),!0}}return!1}function w(C){const P=C.uniforms;let I=0;const z=16;for(let k=0,T=P.length;k<T;k++){const N=Array.isArray(P[k])?P[k]:[P[k]];for(let Y=0,U=N.length;Y<U;Y++){const J=N[Y],ce=Array.isArray(J.value)?J.value:[J.value];for(let de=0,G=ce.length;de<G;de++){const ee=ce[de],j=A(ee),q=I%z,le=q%j.boundary,oe=q+le;I+=le,oe!==0&&z-oe<j.storage&&(I+=z-oe),J.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=I,I+=j.storage}}}const D=I%z;return D>0&&(I+=z-D),C.__size=I,C.__cache={},this}function A(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),P}function _(C){const P=C.target;P.removeEventListener("dispose",_);const I=u.indexOf(P.__bindingPointIndex);u.splice(I,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:m,update:p,dispose:x}}const w1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function T1(){return Di===null&&(Di=new ux(w1,16,16,fs,lr),Di.name="DFG_LUT",Di.minFilter=Pn,Di.magFilter=Pn,Di.wrapS=rr,Di.wrapT=rr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class b1{constructor(e={}){const{canvas:t=B_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ti}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const A=S,_=new Set([Hf,Gf,zf]),x=new Set([ti,zi,fo,ho,kf,Bf]),C=new Uint32Array(4),P=new Int32Array(4),I=new $;let z=null,D=null;const k=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let U=!1,J=null;this._outputColorSpace=ui;let ce=0,de=0,G=null,ee=-1,j=null;const q=new en,le=new en;let oe=null;const F=new xt(0);let Q=0,Ue=t.width,We=t.height,Fe=1,se=null,ve=null;const ge=new en(0,0,Ue,We),he=new en(0,0,Ue,We);let Me=!1;const we=new Yf;let ze=!1,et=!1;const dt=new jt,bt=new $,at=new en,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function _n(){return G===null?Fe:1}let H=r;function Bt(b,W){return t.getContext(b,W)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nf}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",lt,!1),H===null){const W="webgl2";if(H=Bt(W,b),H===null)throw Bt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Mt("WebGLRenderer: "+b.message),b}let pt,It,Ne,Ht,R,M,K,pe,_e,Te,Le,ue,me,ke,Ge,Re,be,it,ot,vt,B,Ce,fe;function Be(){pt=new TM(H),pt.init(),B=new g1(H,pt),It=new vM(H,pt,e,B),Ne=new p1(H,pt),It.reversedDepthBuffer&&g&&Ne.buffers.depth.setReversed(!0),Ht=new CM(H),R=new e1,M=new m1(H,pt,Ne,R,It,B,Ht),K=new wM(Y),pe=new Dx(H),Ce=new mM(H,pe),_e=new bM(H,pe,Ht,Ce),Te=new PM(H,_e,pe,Ce,Ht),it=new RM(H,It,M),Ge=new _M(R),Le=new QE(Y,K,pt,It,Ce,Ge),ue=new M1(Y,R),me=new n1,ke=new l1(pt),be=new pM(Y,K,Ne,Te,w,m),Re=new h1(Y,Te,It),fe=new E1(H,Ht,It,Ne),ot=new gM(H,pt,Ht),vt=new AM(H,pt,Ht),Ht.programs=Le.programs,Y.capabilities=It,Y.extensions=pt,Y.properties=R,Y.renderLists=me,Y.shadowMap=Re,Y.state=Ne,Y.info=Ht}Be(),A!==ti&&(N=new DM(A,t.width,t.height,o,l));const Ie=new y1(Y,H);this.xr=Ie,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(b){b!==void 0&&(Fe=b,this.setSize(Ue,We,!1))},this.getSize=function(b){return b.set(Ue,We)},this.setSize=function(b,W,re=!0){if(Ie.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=b,We=W,t.width=Math.floor(b*Fe),t.height=Math.floor(W*Fe),re===!0&&(t.style.width=b+"px",t.style.height=W+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(Ue*Fe,We*Fe).floor()},this.setDrawingBufferSize=function(b,W,re){Ue=b,We=W,Fe=re,t.width=Math.floor(b*re),t.height=Math.floor(W*re),this.setViewport(0,0,b,W)},this.setEffects=function(b){if(A===ti){Mt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let W=0;W<b.length;W++)if(b[W].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(q)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,W,re,ne){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,W,re,ne),Ne.viewport(q.copy(ge).multiplyScalar(Fe).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,W,re,ne){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,W,re,ne),Ne.scissor(le.copy(he).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(b){Ne.setScissorTest(Me=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,re=!0){let ne=0;if(b){let te=!1;if(G!==null){const De=G.texture.format;te=_.has(De)}if(te){const De=G.texture.type,Xe=x.has(De),Pe=be.getClearColor(),$e=be.getClearAlpha(),Qe=Pe.r,ct=Pe.g,ut=Pe.b;Xe?(C[0]=Qe,C[1]=ct,C[2]=ut,C[3]=$e,H.clearBufferuiv(H.COLOR,0,C)):(P[0]=Qe,P[1]=ct,P[2]=ut,P[3]=$e,H.clearBufferiv(H.COLOR,0,P))}else ne|=H.COLOR_BUFFER_BIT}W&&(ne|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),J=b},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),be.dispose(),me.dispose(),ke.dispose(),R.dispose(),K.dispose(),Te.dispose(),Ce.dispose(),fe.dispose(),Le.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Gr),Ie.removeEventListener("sessionend",ms),Vi.stop()};function xe(b){b.preventDefault(),lc("WebGLRenderer: Context Lost."),U=!0}function qe(){lc("WebGLRenderer: Context Restored."),U=!1;const b=Ht.autoReset,W=Re.enabled,re=Re.autoUpdate,ne=Re.needsUpdate,te=Re.type;Be(),Ht.autoReset=b,Re.enabled=W,Re.autoUpdate=re,Re.needsUpdate=ne,Re.type=te}function lt(b){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){const W=b.target;W.removeEventListener("dispose",Ot),Ct(W)}function Ct(b){Ln(b),R.remove(b)}function Ln(b){const W=R.get(b).programs;W!==void 0&&(W.forEach(function(re){Le.releaseProgram(re)}),b.isShaderMaterial&&Le.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,re,ne,te,De){W===null&&(W=Ut);const Xe=te.isMesh&&te.matrixWorld.determinant()<0,Pe=yo(b,W,re,ne,te);Ne.setMaterial(ne,Xe);let $e=re.index,Qe=1;if(ne.wireframe===!0){if($e=_e.getWireframeAttribute(re),$e===void 0)return;Qe=2}const ct=re.drawRange,ut=re.attributes.position;let Ze=ct.start*Qe,Tt=(ct.start+ct.count)*Qe;De!==null&&(Ze=Math.max(Ze,De.start*Qe),Tt=Math.min(Tt,(De.start+De.count)*Qe)),$e!==null?(Ze=Math.max(Ze,0),Tt=Math.min(Tt,$e.count)):ut!=null&&(Ze=Math.max(Ze,0),Tt=Math.min(Tt,ut.count));const zt=Tt-Ze;if(zt<0||zt===1/0)return;Ce.setup(te,ne,Pe,re,$e);let Yt,Dt=ot;if($e!==null&&(Yt=pe.get($e),Dt=vt,Dt.setIndex(Yt)),te.isMesh)ne.wireframe===!0?(Ne.setLineWidth(ne.wireframeLinewidth*_n()),Dt.setMode(H.LINES)):Dt.setMode(H.TRIANGLES);else if(te.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),Ne.setLineWidth(nn*_n()),te.isLineSegments?Dt.setMode(H.LINES):te.isLineLoop?Dt.setMode(H.LINE_LOOP):Dt.setMode(H.LINE_STRIP)}else te.isPoints?Dt.setMode(H.POINTS):te.isSprite&&Dt.setMode(H.TRIANGLES);if(te.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const nn=te._multiDrawStarts,He=te._multiDrawCounts,xn=te._multiDrawCount,_t=$e?pe.get($e).bytesPerElement:1,zn=R.get(ne).currentProgram.getUniforms();for(let Gn=0;Gn<xn;Gn++)zn.setValue(H,"_gl_DrawID",Gn),Dt.render(nn[Gn]/_t,He[Gn])}else if(te.isInstancedMesh)Dt.renderInstances(Ze,zt,te.count);else if(re.isInstancedBufferGeometry){const nn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,He=Math.min(re.instanceCount,nn);Dt.renderInstances(Ze,zt,He)}else Dt.render(Ze,zt)};function ni(b,W,re){b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=Bn,b.needsUpdate=!0,gs(b,W,re),b.side=or,b.needsUpdate=!0,gs(b,W,re),b.side=Ni):gs(b,W,re)}this.compile=function(b,W,re=null){re===null&&(re=b),D=ke.get(re),D.init(W),T.push(D),re.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),b!==re&&b.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights();const ne=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const De=te.material;if(De)if(Array.isArray(De))for(let Xe=0;Xe<De.length;Xe++){const Pe=De[Xe];ni(Pe,re,te),ne.add(Pe)}else ni(De,re,te),ne.add(De)}),D=T.pop(),ne},this.compileAsync=function(b,W,re=null){const ne=this.compile(b,W,re);return new Promise(te=>{function De(){if(ne.forEach(function(Xe){R.get(Xe).currentProgram.isReady()&&ne.delete(Xe)}),ne.size===0){te(b);return}setTimeout(De,10)}pt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Hi=null;function ps(b){Hi&&Hi(b)}function Gr(){Vi.stop()}function ms(){Vi.start()}const Vi=new l0;Vi.setAnimationLoop(ps),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){Hi=b,Ie.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},Ie.addEventListener("sessionstart",Gr),Ie.addEventListener("sessionend",ms),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;J!==null&&J.renderStart(b,W);const re=Ie.enabled===!0&&Ie.isPresenting===!0,ne=N!==null&&(G===null||re)&&N.begin(Y,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(W),W=Ie.getCamera()),b.isScene===!0&&b.onBeforeRender(Y,b,W,G),D=ke.get(b,T.length),D.init(W),D.state.textureUnits=M.getTextureUnits(),T.push(D),dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),we.setFromProjectionMatrix(dt,Oi,W.reversedDepth),et=this.localClippingEnabled,ze=Ge.init(this.clippingPlanes,et),z=me.get(b,k.length),z.init(),k.push(z),Ie.enabled===!0&&Ie.isPresenting===!0){const Xe=Y.xr.getDepthSensingMesh();Xe!==null&&pa(Xe,W,-1/0,Y.sortObjects)}pa(b,W,0,Y.sortObjects),z.finish(),Y.sortObjects===!0&&z.sort(se,ve),kt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,kt&&be.addToRenderList(z,b),this.info.render.frame++,ze===!0&&Ge.beginShadows();const te=D.state.shadowsArray;if(Re.render(te,b,W),ze===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&N.hasRenderPass())===!1){const Xe=z.opaque,Pe=z.transmissive;if(D.setupLights(),W.isArrayCamera){const $e=W.cameras;if(Pe.length>0)for(let Qe=0,ct=$e.length;Qe<ct;Qe++){const ut=$e[Qe];Ti(Xe,Pe,b,ut)}kt&&be.render(b);for(let Qe=0,ct=$e.length;Qe<ct;Qe++){const ut=$e[Qe];_o(z,b,ut,ut.viewport)}}else Pe.length>0&&Ti(Xe,Pe,b,W),kt&&be.render(b),_o(z,b,W)}G!==null&&de===0&&(M.updateMultisampleRenderTarget(G),M.updateRenderTargetMipmap(G)),ne&&N.end(Y),b.isScene===!0&&b.onAfterRender(Y,b,W),Ce.resetDefaultState(),ee=-1,j=null,T.pop(),T.length>0?(D=T[T.length-1],M.setTextureUnits(D.state.textureUnits),ze===!0&&Ge.setGlobalState(Y.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?z=k[k.length-1]:z=null,J!==null&&J.renderEnd()};function pa(b,W,re,ne){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)re=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||we.intersectsSprite(b)){ne&&at.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const Xe=Te.update(b),Pe=b.material;Pe.visible&&z.push(b,Xe,Pe,re,at.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||we.intersectsObject(b))){const Xe=Te.update(b),Pe=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),at.copy(b.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),at.copy(Xe.boundingSphere.center)),at.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(Pe)){const $e=Xe.groups;for(let Qe=0,ct=$e.length;Qe<ct;Qe++){const ut=$e[Qe],Ze=Pe[ut.materialIndex];Ze&&Ze.visible&&z.push(b,Xe,Ze,re,at.z,ut)}}else Pe.visible&&z.push(b,Xe,Pe,re,at.z,null)}}const De=b.children;for(let Xe=0,Pe=De.length;Xe<Pe;Xe++)pa(De[Xe],W,re,ne)}function _o(b,W,re,ne){const{opaque:te,transmissive:De,transparent:Xe}=b;D.setupLightsView(re),ze===!0&&Ge.setGlobalState(Y.clippingPlanes,re),ne&&Ne.viewport(q.copy(ne)),te.length>0&&Hr(te,W,re),De.length>0&&Hr(De,W,re),Xe.length>0&&Hr(Xe,W,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ti(b,W,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const Ze=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Bi(1,1,{generateMipmaps:!0,type:Ze?lr:ti,minFilter:cs,samples:Math.max(4,It.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const De=D.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||q;De.setSize(Xe.z*Y.transmissionResolutionScale,Xe.w*Y.transmissionResolutionScale);const Pe=Y.getRenderTarget(),$e=Y.getActiveCubeFace(),Qe=Y.getActiveMipmapLevel();Y.setRenderTarget(De),Y.getClearColor(F),Q=Y.getClearAlpha(),Q<1&&Y.setClearColor(16777215,.5),Y.clear(),kt&&be.render(re);const ct=Y.toneMapping;Y.toneMapping=ki;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),ze===!0&&Ge.setGlobalState(Y.clippingPlanes,ne),Hr(b,re,ne),M.updateMultisampleRenderTarget(De),M.updateRenderTargetMipmap(De),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Tt=0,zt=W.length;Tt<zt;Tt++){const Yt=W[Tt],{object:Dt,geometry:nn,material:He,group:xn}=Yt;if(He.side===Ni&&Dt.layers.test(ne.layers)){const _t=He.side;He.side=Bn,He.needsUpdate=!0,ma(Dt,re,ne,nn,He,xn),He.side=_t,He.needsUpdate=!0,Ze=!0}}Ze===!0&&(M.updateMultisampleRenderTarget(De),M.updateRenderTargetMipmap(De))}Y.setRenderTarget(Pe,$e,Qe),Y.setClearColor(F,Q),ut!==void 0&&(ne.viewport=ut),Y.toneMapping=ct}function Hr(b,W,re){const ne=W.isScene===!0?W.overrideMaterial:null;for(let te=0,De=b.length;te<De;te++){const Xe=b[te],{object:Pe,geometry:$e,group:Qe}=Xe;let ct=Xe.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),Pe.layers.test(re.layers)&&ma(Pe,W,re,$e,ct,Qe)}}function ma(b,W,re,ne,te,De){b.onBeforeRender(Y,W,re,ne,te,De),b.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(Y,W,re,ne,b,De),te.transparent===!0&&te.side===Ni&&te.forceSinglePass===!1?(te.side=Bn,te.needsUpdate=!0,Y.renderBufferDirect(re,W,ne,te,b,De),te.side=or,te.needsUpdate=!0,Y.renderBufferDirect(re,W,ne,te,b,De),te.side=Ni):Y.renderBufferDirect(re,W,ne,te,b,De),b.onAfterRender(Y,W,re,ne,te,De)}function gs(b,W,re){W.isScene!==!0&&(W=Ut);const ne=R.get(b),te=D.state.lights,De=D.state.shadowsArray,Xe=te.state.version,Pe=Le.getParameters(b,te.state,De,W,re,D.state.lightProbeGridArray),$e=Le.getProgramCacheKey(Pe);let Qe=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;const ct=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=K.get(b.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",Ot),Qe=new Map,ne.programs=Qe);let ut=Qe.get($e);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Xe)return va(b,Pe),ut}else Pe.uniforms=Le.getUniforms(b),J!==null&&b.isNodeMaterial&&J.build(b,re,Pe),b.onBeforeCompile(Pe,Y),ut=Le.acquireProgram(Pe,$e),Qe.set($e,ut),ne.uniforms=Pe.uniforms;const Ze=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=Ge.uniform),va(b,Pe),ne.needsLights=xc(b),ne.lightsStateVersion=Xe,ne.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function ga(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=nc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function va(b,W){const re=R.get(b);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function xo(b,W){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;I.setFromMatrixPosition(W.matrixWorld);for(let re=0,ne=b.length;re<ne;re++){const te=b[re];if(te.texture!==null&&te.boundingBox.containsPoint(I))return te}return null}function yo(b,W,re,ne,te){W.isScene!==!0&&(W=Ut),M.resetTextureUnits();const De=W.fog,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?W.environment:null,Pe=G===null?Y.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Et.workingColorSpace,$e=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=K.get(ne.envMap||Xe,$e),ct=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ut=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,zt=!!re.morphAttributes.color;let Yt=ki;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Yt=Y.toneMapping);const Dt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,nn=Dt!==void 0?Dt.length:0,He=R.get(ne),xn=D.state.lights;if(ze===!0&&(et===!0||b!==j)){const Lt=b===j&&ne.id===ee;Ge.setState(ne,b,Lt)}let _t=!1;ne.version===He.__version?(He.needsLights&&He.lightsStateVersion!==xn.state.version||He.outputColorSpace!==Pe||te.isBatchedMesh&&He.batching===!1||!te.isBatchedMesh&&He.batching===!0||te.isBatchedMesh&&He.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&He.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&He.instancing===!1||!te.isInstancedMesh&&He.instancing===!0||te.isSkinnedMesh&&He.skinning===!1||!te.isSkinnedMesh&&He.skinning===!0||te.isInstancedMesh&&He.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&He.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&He.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&He.instancingMorph===!1&&te.morphTexture!==null||He.envMap!==Qe||ne.fog===!0&&He.fog!==De||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ge.numPlanes||He.numIntersection!==Ge.numIntersection)||He.vertexAlphas!==ct||He.vertexTangents!==ut||He.morphTargets!==Ze||He.morphNormals!==Tt||He.morphColors!==zt||He.toneMapping!==Yt||He.morphTargetsCount!==nn||!!He.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,He.__version=ne.version);let zn=He.currentProgram;_t===!0&&(zn=gs(ne,W,te),J&&ne.isNodeMaterial&&J.onUpdateProgram(ne,zn,He));let Gn=!1,yt=!1,Wi=!1;const Pt=zn.getUniforms(),Vt=He.uniforms;if(Ne.useProgram(zn.program)&&(Gn=!0,yt=!0,Wi=!0),ne.id!==ee&&(ee=ne.id,yt=!0),He.needsLights){const Lt=xo(D.state.lightProbeGridArray,te);He.lightProbeGrid!==Lt&&(He.lightProbeGrid=Lt,yt=!0)}if(Gn||j!==b){Ne.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Pt.setValue(H,"projectionMatrix",b.projectionMatrix),Pt.setValue(H,"viewMatrix",b.matrixWorldInverse);const hi=Pt.map.cameraPosition;hi!==void 0&&hi.setValue(H,bt.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,yt=!0,Wi=!0)}if(He.needsLights&&(xn.state.directionalShadowMap.length>0&&Pt.setValue(H,"directionalShadowMap",xn.state.directionalShadowMap,M),xn.state.spotShadowMap.length>0&&Pt.setValue(H,"spotShadowMap",xn.state.spotShadowMap,M),xn.state.pointShadowMap.length>0&&Pt.setValue(H,"pointShadowMap",xn.state.pointShadowMap,M)),te.isSkinnedMesh){Pt.setOptional(H,te,"bindMatrix"),Pt.setOptional(H,te,"bindMatrixInverse");const Lt=te.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Pt.setValue(H,"boneTexture",Lt.boneTexture,M))}te.isBatchedMesh&&(Pt.setOptional(H,te,"batchingTexture"),Pt.setValue(H,"batchingTexture",te._matricesTexture,M),Pt.setOptional(H,te,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",te._indirectTexture,M),Pt.setOptional(H,te,"batchingColorTexture"),te._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",te._colorsTexture,M));const fi=re.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&it.update(te,re,zn),(yt||He.receiveShadow!==te.receiveShadow)&&(He.receiveShadow=te.receiveShadow,Pt.setValue(H,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&W.environment!==null&&(Vt.envMapIntensity.value=W.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=T1()),yt){if(Pt.setValue(H,"toneMappingExposure",Y.toneMappingExposure),He.needsLights&&_c(Vt,Wi),De&&ne.fog===!0&&ue.refreshFogUniforms(Vt,De),ue.refreshMaterialUniforms(Vt,ne,Fe,We,D.state.transmissionRenderTarget[b.id]),He.needsLights&&He.lightProbeGrid){const Lt=He.lightProbeGrid;Vt.probesSH.value=Lt.texture,Vt.probesMin.value.copy(Lt.boundingBox.min),Vt.probesMax.value.copy(Lt.boundingBox.max),Vt.probesResolution.value.copy(Lt.resolution)}nc.upload(H,ga(He),Vt,M)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(nc.upload(H,ga(He),Vt,M),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(H,"center",te.center),Pt.setValue(H,"modelViewMatrix",te.modelViewMatrix),Pt.setValue(H,"normalMatrix",te.normalMatrix),Pt.setValue(H,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Lt=ne.uniformsGroups;for(let hi=0,bi=Lt.length;hi<bi;hi++){const Vr=Lt[hi];fe.update(Vr,zn),fe.bind(Vr,zn)}}return zn}function _c(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function xc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,W,re){const ne=R.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),R.get(b.texture).__webglTexture=W,R.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const re=R.get(b);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Kt=H.createFramebuffer();this.setRenderTarget=function(b,W=0,re=0){G=b,ce=W,de=re;let ne=null,te=!1,De=!1;if(b){const Pe=R.get(b);if(Pe.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(H.FRAMEBUFFER,Pe.__webglFramebuffer),q.copy(b.viewport),le.copy(b.scissor),oe=b.scissorTest,Ne.viewport(q),Ne.scissor(le),Ne.setScissorTest(oe),ee=-1;return}else if(Pe.__webglFramebuffer===void 0)M.setupRenderTarget(b);else if(Pe.__hasExternalTextures)M.rebindTextures(b,R.get(b.texture).__webglTexture,R.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ct=b.depthTexture;if(Pe.__boundDepthTexture!==ct){if(ct!==null&&R.has(ct)&&(b.width!==ct.image.width||b.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(b)}}const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const Qe=R.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?ne=Qe[W][re]:ne=Qe[W],te=!0):b.samples>0&&M.useMultisampledRTT(b)===!1?ne=R.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[re]:ne=Qe,q.copy(b.viewport),le.copy(b.scissor),oe=b.scissorTest}else q.copy(ge).multiplyScalar(Fe).floor(),le.copy(he).multiplyScalar(Fe).floor(),oe=Me;if(re!==0&&(ne=Kt),Ne.bindFramebuffer(H.FRAMEBUFFER,ne)&&Ne.drawBuffers(b,ne),Ne.viewport(q),Ne.scissor(le),Ne.setScissorTest(oe),te){const Pe=R.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,re)}else if(De){const Pe=W;for(let $e=0;$e<b.textures.length;$e++){const Qe=R.get(b.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,Qe.__webglTexture,re,Pe)}}else if(b!==null&&re!==0){const Pe=R.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,re)}ee=-1},this.readRenderTargetPixels=function(b,W,re,ne,te,De,Xe,Pe=0){if(!(b&&b.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=R.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e){Ne.bindFramebuffer(H.FRAMEBUFFER,$e);try{const Qe=b.textures[Pe],ct=Qe.format,ut=Qe.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),!It.textureFormatReadable(ct)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ut)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-ne&&re>=0&&re<=b.height-te&&H.readPixels(W,re,ne,te,B.convert(ct),B.convert(ut),De)}finally{const Qe=G!==null?R.get(G).__webglFramebuffer:null;Ne.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,W,re,ne,te,De,Xe,Pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=R.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e)if(W>=0&&W<=b.width-ne&&re>=0&&re<=b.height-te){Ne.bindFramebuffer(H.FRAMEBUFFER,$e);const Qe=b.textures[Pe],ct=Qe.format,ut=Qe.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),!It.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.bufferData(H.PIXEL_PACK_BUFFER,De.byteLength,H.STREAM_READ),H.readPixels(W,re,ne,te,B.convert(ct),B.convert(ut),0);const Tt=G!==null?R.get(G).__webglFramebuffer:null;Ne.bindFramebuffer(H.FRAMEBUFFER,Tt);const zt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await z_(H,zt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,De),H.deleteBuffer(Ze),H.deleteSync(zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,re=0){const ne=Math.pow(2,-re),te=Math.floor(b.image.width*ne),De=Math.floor(b.image.height*ne),Xe=W!==null?W.x:0,Pe=W!==null?W.y:0;M.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Xe,Pe,te,De),Ne.unbindTexture()};const yc=H.createFramebuffer(),_a=H.createFramebuffer();this.copyTextureToTexture=function(b,W,re=null,ne=null,te=0,De=0){let Xe,Pe,$e,Qe,ct,ut,Ze,Tt,zt;const Yt=b.isCompressedTexture?b.mipmaps[De]:b.image;if(re!==null)Xe=re.max.x-re.min.x,Pe=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,Qe=re.min.x,ct=re.min.y,ut=re.isBox3?re.min.z:0;else{const Vt=Math.pow(2,-te);Xe=Math.floor(Yt.width*Vt),Pe=Math.floor(Yt.height*Vt),b.isDataArrayTexture?$e=Yt.depth:b.isData3DTexture?$e=Math.floor(Yt.depth*Vt):$e=1,Qe=0,ct=0,ut=0}ne!==null?(Ze=ne.x,Tt=ne.y,zt=ne.z):(Ze=0,Tt=0,zt=0);const Dt=B.convert(W.format),nn=B.convert(W.type);let He;W.isData3DTexture?(M.setTexture3D(W,0),He=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(M.setTexture2DArray(W,0),He=H.TEXTURE_2D_ARRAY):(M.setTexture2D(W,0),He=H.TEXTURE_2D),Ne.activeTexture(H.TEXTURE0),Ne.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),Ne.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ne.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const xn=Ne.getParameter(H.UNPACK_ROW_LENGTH),_t=Ne.getParameter(H.UNPACK_IMAGE_HEIGHT),zn=Ne.getParameter(H.UNPACK_SKIP_PIXELS),Gn=Ne.getParameter(H.UNPACK_SKIP_ROWS),yt=Ne.getParameter(H.UNPACK_SKIP_IMAGES);Ne.pixelStorei(H.UNPACK_ROW_LENGTH,Yt.width),Ne.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Yt.height),Ne.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),Ne.pixelStorei(H.UNPACK_SKIP_ROWS,ct),Ne.pixelStorei(H.UNPACK_SKIP_IMAGES,ut);const Wi=b.isDataArrayTexture||b.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const Vt=R.get(b),fi=R.get(W),Lt=R.get(Vt.__renderTarget),hi=R.get(fi.__renderTarget);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let bi=0;bi<$e;bi++)Wi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(b).__webglTexture,te,ut+bi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(W).__webglTexture,De,zt+bi)),H.blitFramebuffer(Qe,ct,Xe,Pe,Ze,Tt,Xe,Pe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||R.has(b)){const Vt=R.get(b),fi=R.get(W);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,yc),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,_a);for(let Lt=0;Lt<$e;Lt++)Wi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.__webglTexture,te,ut+Lt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vt.__webglTexture,te),Pt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fi.__webglTexture,De,zt+Lt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fi.__webglTexture,De),te!==0?H.blitFramebuffer(Qe,ct,Xe,Pe,Ze,Tt,Xe,Pe,H.COLOR_BUFFER_BIT,H.NEAREST):Pt?H.copyTexSubImage3D(He,De,Ze,Tt,zt+Lt,Qe,ct,Xe,Pe):H.copyTexSubImage2D(He,De,Ze,Tt,Qe,ct,Xe,Pe);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pt?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(He,De,Ze,Tt,zt,Xe,Pe,$e,Dt,nn,Yt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(He,De,Ze,Tt,zt,Xe,Pe,$e,Dt,Yt.data):H.texSubImage3D(He,De,Ze,Tt,zt,Xe,Pe,$e,Dt,nn,Yt):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,De,Ze,Tt,Xe,Pe,Dt,nn,Yt.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,De,Ze,Tt,Yt.width,Yt.height,Dt,Yt.data):H.texSubImage2D(H.TEXTURE_2D,De,Ze,Tt,Xe,Pe,Dt,nn,Yt);Ne.pixelStorei(H.UNPACK_ROW_LENGTH,xn),Ne.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_t),Ne.pixelStorei(H.UNPACK_SKIP_PIXELS,zn),Ne.pixelStorei(H.UNPACK_SKIP_ROWS,Gn),Ne.pixelStorei(H.UNPACK_SKIP_IMAGES,yt),De===0&&W.generateMipmaps&&H.generateMipmap(He),Ne.unbindTexture()},this.initRenderTarget=function(b){R.get(b).__webglFramebuffer===void 0&&M.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),Ne.unbindTexture()},this.resetState=function(){ce=0,de=0,G=null,Ne.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const gn="#FFCC00",uo=[{id:"consciousness",label:"Consciousness",fullLabel:"Consciousness & Culture",emoji:"🎭",hex:"#E040FB",r:235,a:0,tagline:"The Inner Renaissance",image:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1400&q=80&fit=crop",fieldNote:"FROM THE FIELD · Ojai, California",summary:"Art, music, and agentic presence awakening humanity to what it means to be fully alive. Every great Renaissance needs its artists first — they name the age before the scientists can measure it.",context:"A global loneliness epidemic (Cigna, 2023: 1 in 3 adults feel isolated), a mental health crisis affecting 970 million people (WHO, 2023), and unprecedented rates of burnout and disconnection are the shadow side of accelerating technology. The inner Renaissance is the corrective force — the civilizational immune response.",metrics:[{label:"People with mental disorders",value:"970M",source:"WHO, 2023",trend:"up"},{label:"Adults reporting loneliness",value:"33%",source:"Cigna Global Loneliness Index, 2023",trend:"up"},{label:"Global wellness economy",value:"$5.6T",source:"Global Wellness Institute, 2022",trend:"up"},{label:"Creative economy GDP contribution",value:"$2.25T",source:"UNCTAD Creative Economy Report, 2022",trend:"up"}],exponential:{phase:"Emergence",note:"Consciousness technologies are converging with AI, neuroscience, and immersive computing — the exponential curve is just beginning."},initiatives:[{id:"moonshot-mapping",name:"Moonshot Mapping™",org:"Devon Seegers",year:"2020",status:"Active",investment:"Bootstrapped",desc:"A 2-hour strategic clarity experience that collapses chaos into precision for visionary leaders. Cognitive cartography methodology producing a visual inner landscape — mapping identity, energy, gifts, and impact vectors.",fieldReport:"Working with founders, executives, and visionaries across 3 continents, Moonshot Mapping™ has emerged as the first systematic methodology for naming what Peter Diamandis calls 'Massively Transformative Purpose.' Every Second Renaissance needs navigators. Devon Seegers is building the compass.",founder:"Devon Seegers",founderBio:"Cognitive cartographer, musician, and systems architect. Creator of Reality Distortion immersive experiences. Building AI-powered purpose discovery tools at the intersection of consciousness and technology.",founderRole:"Cognitive Cartographer & Founder",milestones:[{year:"2020",event:"Moonshot Mapping™ methodology developed"},{year:"2024",event:"Reality Distortion immersive show launched"},{year:"2025",event:"WhatsMyMoonshot.ai deployed — AI scales the methodology globally"}],links:{website:"https://devonseegers.com",app:"https://devonseegers-ops.github.io/whatsmymoonshot/",ig:"https://instagram.com/devonseegers"},impact:"Thousands of visionaries oriented globally",tags:["Methodology","Coaching","AI-Powered"],convergence:["ai","life"]},{id:"whatsmymoonshot",name:"WhatsMyMoonshot.ai",org:"Devon Seegers",year:"2025",status:"Live",investment:"Open Source",desc:"Free, 15-minute AI-powered journey to discover and name your soul-level vision — your contribution to the Second Renaissance. Externalize → Visualize → Synthesize methodology. No account. No friction.",fieldReport:"The most underserved population in the exponential revolution is not the technologically illiterate — it's the millions of highly capable people who haven't yet named what they're here to build. WhatsMyMoonshot.ai closes that gap.",founder:"Devon Seegers",founderBio:"Creator of Moonshot Mapping™ methodology",founderRole:"Founder",milestones:[{year:"2025 Q1",event:"MVP built and deployed to GitHub Pages"},{year:"2025 Q2",event:"AI-generated moonshot statements, genius zones, 90-day roadmap"},{year:"2025 Q3",event:"Second Renaissance website and Dream 100 launched"}],links:{website:"https://devonseegers-ops.github.io/whatsmymoonshot/"},impact:"Free for all humanity",tags:["AI","Free","Purpose Discovery"],convergence:["ai"]},{id:"burning-man",name:"Burning Man Project",org:"Burning Man Project",year:"1986",status:"Active",investment:"$50M+ annual revenue",desc:"Annual experiment in radical self-expression, community, and gifting economy. 80,000 participants build Black Rock City — a temporary metropolis operating on 10 core principles including radical inclusion, gifting, self-reliance, and leaving no trace.",fieldReport:"In a world of passive consumption, Burning Man is one of the only large-scale experiments in radical co-creation. More than 100 regional events now operate globally, reaching 1M+ participants annually. The culture it generates is a living prototype for post-scarcity community.",founder:"Larry Harvey (1948–2018)",founderBio:"San Francisco artist and cultural provocateur who began the burn on a San Francisco beach in 1986 with 20 friends. Built a counter-cultural institution that influenced Silicon Valley's most ambitious builders.",founderRole:"Founder & Cultural Architect",milestones:[{year:"1986",event:"First burn, Baker Beach, San Francisco — 20 participants"},{year:"1998",event:"Relocated to Black Rock Desert, Nevada — 15,000 participants"},{year:"2019",event:"Peak attendance: 78,850 participants"},{year:"2024",event:"300+ global regional events; Global Leadership Conference"}],links:{website:"https://burningman.org",culture:"https://burningman.org/about/10-principles/"},impact:"80,000+ attendees, 100+ global regional events, 1M+ annual participants",tags:["Community","Art","Culture Lab","Global"],convergence:["flourishing"]},{id:"awe-research",name:"Awe & Collective Effervescence",org:"UC Berkeley Greater Good Science Center",year:"2003",status:"Active",investment:"Academic / Research",desc:"Dacher Keltner and Jonathan Haidt's foundational 2003 paper defined awe as the emotion experienced when encountering something vast that challenges one's mental framework. Subsequent research demonstrates measurable health benefits, reduction of narcissism, and increased prosocial behavior.",fieldReport:"Keltner's 2023 book 'Awe: The New Science of Everyday Wonder' synthesizes 20 years of research: people who regularly experience awe report lower inflammatory cytokines, greater life satisfaction, and stronger prosocial orientation. Awe is not a luxury — it is a biological imperative that the Renaissance is reviving.",founder:"Dacher Keltner & Jonathan Haidt",founderBio:"Keltner: Professor of Psychology, UC Berkeley; founder of Greater Good Science Center. Haidt: Professor of Ethical Leadership, NYU Stern School of Business.",founderRole:"Pioneer Researchers",milestones:[{year:"2003",event:"Keltner & Haidt define awe as distinct emotion (Cognition & Emotion)"},{year:"2018",event:"Yang et al.: awe reduces pro-inflammatory cytokines (Emotion)"},{year:"2021",event:"Stellar et al.: awe associated with greater prosocial behavior"},{year:"2023",event:"Keltner publishes 'Awe: The New Science of Everyday Wonder'"}],links:{website:"https://ggsc.berkeley.edu",book:"https://dacherkeltner.com/awe-book/",research:"https://ggsc.berkeley.edu/what_we_do/major_initiatives/awe_experiences"},impact:"Foundational research now applied in medicine, education, and design",tags:["Research","Neuroscience","Well-being","Evidence-based"],convergence:["life","consciousness"]}],people:["Devon Seegers","Brené Brown","Tim Ferriss","Chase Jarvis","Gabrielle Bernstein","Marianne Williamson"]},{id:"life",label:"Life Sciences",fullLabel:"Life Sciences & Longevity",emoji:"🧬",hex:"#00E5FF",r:210,a:51,tagline:"Rewriting the Code of Life",image:"https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1400&q=80&fit=crop",fieldNote:"FROM THE FIELD · Boston, Massachusetts",summary:"CRISPR, mRNA platforms, and longevity science are converging at a velocity unprecedented in the history of medicine. What was science fiction 10 years ago is clinical reality today.",context:"The foundational realization of 21st century biology: aging is not inevitable — it is a disease. The information theory of aging (Sinclair, Cell 2023) and epigenetic reprogramming (Yamanaka, 2006 Nobel) establish that biological age can be measured and potentially reversed. Combined with precision CRISPR editing and mRNA's versatile delivery platform, humanity has for the first time gained the technical capacity to address the root causes of disease.",metrics:[{label:"First CRISPR therapy FDA approved",value:"Dec 2023",source:"FDA: Casgevy for sickle cell disease",trend:"milestone"},{label:"Protein structures predicted by AlphaFold2",value:"200M+",source:"Nature, Jumper et al., 2021",trend:"milestone"},{label:"mRNA melanoma vaccine recurrence reduction",value:"78%",source:"Moderna/Merck Phase 2b, NEJM 2023",trend:"up"},{label:"Private longevity investment (2021–2024)",value:"$5B+",source:"Longevity Technology Report, 2024",trend:"up"}],exponential:{phase:"Inflection",note:"CRISPR editing costs dropped 99% since 2012 (MIT Technology Review, 2023). The convergence of AI, genomics, and synthetic biology is entering the acceleration phase of the exponential curve."},initiatives:[{id:"crispr",name:"CRISPR-Cas9 Gene Editing",org:"Innovative Genomics Institute / Multiple",year:"2012",status:"Clinical",investment:"$13.2B raised across CRISPR companies (Crunchbase, 2024)",desc:"Clustered Regularly Interspaced Short Palindromic Repeats — molecular scissors that can edit any DNA sequence with precision. The first CRISPR therapeutic, Casgevy (Vertex/CRISPR Therapeutics), received FDA approval in December 2023 for sickle cell disease and transfusion-dependent beta thalassemia. First in-vivo CRISPR treatment: NTLA-2001 for TTR amyloidosis (Intellia/Regeneron, NEJM 2021 Phase 1).",fieldReport:"Dr. Jennifer Doudna's UC Berkeley team published the foundational paper in Science in 2012. Twelve years later, the first approved therapy has transformed a life-threatening genetic disease into a functional cure. The CRISPR market is projected at $10.8B by 2030 (MarketsandMarkets, 2023). Base editing and prime editing (Liu Lab, Harvard) now allow single-nucleotide precision without double-strand breaks. The question is no longer whether we can edit genetics — it's how fast we can deploy this capability safely.",founder:"Jennifer Doudna & Emmanuelle Charpentier",founderBio:"Doudna: Professor of Chemistry & Molecular Biology, UC Berkeley; HHMI Investigator. Charpentier: Director, Max Planck Unit for the Science of Pathogens, Berlin. Both received the 2020 Nobel Prize in Chemistry.",founderRole:"Nobel Laureates in Chemistry, 2020",milestones:[{year:"2012",event:"CRISPR-Cas9 programmable genome editing (Science — Jinek et al.)"},{year:"2020",event:"Nobel Prize in Chemistry awarded to Doudna & Charpentier"},{year:"2021",event:"First in-vivo CRISPR results: NTLA-2001 in humans (NEJM — Gillmore et al.)"},{year:"2023",event:"FDA approval of Casgevy — first CRISPR therapy for sickle cell disease"},{year:"2025",event:"First personalized CRISPR therapy for KJ Muldoon (CHOP, Philadelphia)"}],links:{website:"https://innovativegenomics.org",fda:"https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/casgevy",chop:"https://www.chop.edu/news/worlds-first-patient-treated-personalized-crispr-gene-editing-therapy-childrens-hospital",trials:"https://clinicaltrials.gov/search?term=CRISPR"},impact:"50+ CRISPR trials active; sickle cell functionally cured",tags:["Nobel Prize 2020","FDA Approved","Clinical","Genetic Disease"],convergence:["ai","flourishing"]},{id:"xprize-healthspan",name:"XPRIZE Healthspan",org:"XPRIZE Foundation",year:"2023",status:"Active Competition",investment:"$101M prize pool",desc:"The largest longevity competition in history: $101M prize targeting interventions that restore muscle, cognition, and immune function by a minimum of 10 years in adults 65–80. Over 600 teams registered globally. Scientific advisory board includes David Sinclair, Aubrey de Grey, and George Church.",fieldReport:"Peter Diamandis launched XPRIZE Healthspan at his 62nd birthday — acknowledging the personal stakes. The competition has done something no regulatory framework could: created a globally coordinated sprint toward biological age reversal. At $101M, it's the second-largest XPRIZE in history. The competition framework is deliberately open — any modality qualifies, from pharmaceutical to genetic to digital therapeutics.",founder:"Peter Diamandis",founderBio:"Founder & Executive Chairman of XPRIZE Foundation; Co-Founder of Singularity University, Human Longevity, Inc., and Celularity. Author of 'Abundance' and 'The Future Is Faster Than You Think.' MD from Harvard Medical School.",founderRole:"Founder & Executive Chairman, XPRIZE",milestones:[{year:"2023 Feb",event:"XPRIZE Healthspan announced, $101M prize structure revealed"},{year:"2023 Q3",event:"600+ teams registered across 50+ countries"},{year:"2024",event:"Semi-finalist trials begin; testing muscle, cognitive, immune restoration"},{year:"2026+",event:"Winners announced; validated longevity protocols open-sourced"}],links:{website:"https://www.xprize.org/prizes/healthspan",register:"https://www.xprize.org",diamandis:"https://www.diamandis.com"},impact:"$101M prize; 600+ global teams",tags:["$101M Prize","Longevity","Competition","10x Health"],convergence:["ai","consciousness"]},{id:"mrna-platform",name:"mRNA Therapeutic Platform",org:"BioNTech / Moderna",year:"1961 (theory) / 2020 (deployed)",status:"Commercial + Clinical Pipeline",investment:"$20B+ platform investment",desc:"Messenger RNA therapeutics deliver a temporary genetic instruction to cells to produce a desired protein — a vaccine antigen, a cancer antigen, or a therapeutic protein. The COVID-19 vaccine deployment (2021) proved the platform at 5-billion-person scale. Now targeting cancer, HIV, autoimmune disease, and rare genetic disorders. Moderna/Merck Phase 2b mRNA-4157 + Keytruda showed 78% reduction in melanoma recurrence (NEJM, 2023).",fieldReport:"Katalin Karikó spent 40 years being dismissed, demoted, and defunded before her modified nucleoside research became the foundation of mRNA vaccines. Her story is the quintessential Second Renaissance narrative: a lone scientist working against institutional resistance on a technology that would eventually reach every human on Earth. The 2023 Nobel Prize in Physiology or Medicine vindicated her completely. The mRNA platform is now one of the most versatile therapeutic tools ever created.",founder:"Katalin Karikó & Drew Weissman",founderBio:"Karikó: Senior VP at BioNTech; Adjunct Professor at University of Pennsylvania. Weissman: Professor of Medicine, University of Pennsylvania. 2023 Nobel Prize in Physiology or Medicine.",founderRole:"Nobel Laureates in Physiology or Medicine, 2023",milestones:[{year:"2005",event:"Karikó & Weissman: modified nucleoside mRNA avoids immune response (Immunity)"},{year:"2018",event:"BioNTech and Moderna begin mRNA cancer vaccine human trials"},{year:"2021",event:"5B+ doses COVID mRNA vaccine administered globally (WHO)"},{year:"2023 Apr",event:"mRNA-4157 + Keytruda: 78% melanoma recurrence reduction (NEJM)"},{year:"2023 Oct",event:"Nobel Prize: Karikó & Weissman in Physiology or Medicine"}],links:{website:"https://www.biontech.com",moderna:"https://www.modernatx.com",cancer:"https://www.nejm.org/doi/10.1056/NEJMoa2302976",nobel:"https://www.nobelprize.org/prizes/medicine/2023/kariko/facts/"},impact:"5B+ COVID doses; cancer Phase 3 trials active",tags:["Nobel Prize 2023","Cancer","HIV","Platform Technology"],convergence:["ai","flourishing"]},{id:"longevity-science",name:"Biological Age Reversal",org:"Altos Labs / Harvard / Buck Institute",year:"2006 (Yamanaka factors)",status:"Pre-Clinical + Early Phase",investment:"$3.5B+ (Altos Labs alone: $3B raised, 2022)",desc:"Yamanaka's 2006 Nobel discovery that four transcription factors (Oct4, Sox2, Klf4, c-Myc) can reprogram adult cells to a pluripotent state opened the field. David Sinclair's 'Information Theory of Aging' (Cell, 2023) proposes that aging is fundamentally a loss of epigenetic information — and therefore reversible. Partial reprogramming (temporary Yamanaka factor expression) has reversed age markers in multiple model organisms without inducing cancer.",fieldReport:"The scientific narrative has shifted decisively in 5 years: from 'aging is inevitable' to 'aging is a disease' (American Medical Association recognized it as a disease in 2022). Altos Labs, backed by Jeff Bezos and Yuri Milner with $3B, employs more Nobel Laureates per square foot than almost any institution in history. The question has moved from 'can we slow aging?' to 'how fast can we make cellular reprogramming safe for humans?'",founder:"Shinya Yamanaka (discovery) / Richard Klausner, Hans Bishop (Altos Labs)",founderBio:"Yamanaka: Director, Center for iPS Cell Research, Kyoto University; Nobel Prize 2012. Klausner: Former NCI Director. Bishop: Biotech veteran. Scientific leaders: Steve Horvath (epigenetic clock), David Sinclair (Harvard).",founderRole:"Pioneer & Research Director",milestones:[{year:"2006",event:"Yamanaka factors reprogram adult cells to pluripotency (Cell — Nobel 2012)"},{year:"2020",event:"Harvard Sinclair lab: partial reprogramming reverses age in mouse eye cells (Nature)"},{year:"2022",event:"Altos Labs raises $3B — largest biotech launch in history"},{year:"2023",event:"Sinclair 'Information Theory of Aging' published (Cell)"},{year:"2024",event:"Multiple partial reprogramming trials initiated in model organisms"}],links:{website:"https://altoslabs.com",sinclair:"https://sinclair.hms.harvard.edu",buck:"https://www.buckinstitute.org",calico:"https://www.calicolabs.com"},impact:"Aging identified as treatable disease; $5B+ invested 2021–2024",tags:["Nobel Prize 2012","Longevity","Reprogramming","Age Reversal"],convergence:["ai"]}],people:["Jennifer Doudna","David Sinclair","Peter Diamandis","George Church","Katalin Karikó","Aubrey de Grey"]},{id:"energy",label:"Energy & Climate",fullLabel:"Energy & Climate Action",emoji:"⚡",hex:"#FFD60A",r:255,a:103,tagline:"The Last Energy Problem",image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80&fit=crop",fieldNote:"FROM THE FIELD · Cadarache, France & Cambridge, Massachusetts",summary:"Two converging energy moonshots: nuclear fusion from seawater promises unlimited, zero-carbon baseload power; carbon removal at scale promises to reverse 200 years of atmospheric damage. Both are measurably closer than most people realize.",context:"The physics of fusion has been understood since the 1950s. What changed: high-temperature superconducting magnets now allow compact reactor designs one-tenth the size of ITER at comparable plasma pressures. Meanwhile, the cost of solar has dropped 90% since 2010 (IRENA, 2023) — following its own Moore's Law — while renewable deployment outpaced all IEA projections for the fifth consecutive year.",metrics:[{label:"NIF fusion ignition achieved",value:"Dec 5, 2022",source:"Science — Abu-Shawareb et al., 2024",trend:"milestone"},{label:"Solar cost reduction since 2010",value:"90%",source:"IRENA Renewable Power Generation Costs, 2023",trend:"down-good"},{label:"Private fusion companies globally",value:"43",source:"Fusion Industry Association, 2023",trend:"up"},{label:"CO₂ removal cost target (commercial)",value:"$100/ton",source:"XPRIZE Carbon Removal; current best $500/ton",trend:"target"}],exponential:{phase:"Growth",note:"Solar and wind are fully on the exponential cost curve. Fusion is 5–10 years from the inflection point, with 43 companies now competing to get there first."},initiatives:[{id:"cfs-sparc",name:"Commonwealth Fusion Systems (SPARC)",org:"MIT Spinout",year:"2018",status:"Actively Building",investment:"$1.8B raised (2023)",desc:"Commonwealth Fusion Systems (CFS) is building SPARC — a compact tokamak fusion reactor using MIT's revolutionary high-temperature superconducting (HTS) magnets. In September 2021, MIT and CFS demonstrated a 20-tesla magnet using REBCO tape — the strongest magnet of its kind in history and the key enabling technology for compact fusion. SPARC is designed for a plasma volume 2% of ITER's while matching its expected performance.",fieldReport:"The SPARC team achieved their magnet milestone in September 2021, demonstrating 20 teslas — the most powerful superconducting fusion magnet ever built. CEO Bob Mumgaard, an MIT plasma physicist, raised $1.8 billion on the basis that compact HTS magnets change the fundamental economics of fusion. They broke ground on the SPARC facility in Devens, Massachusetts in 2021. If all goes to plan, SPARC will demonstrate net energy gain by 2025–2027, and ARC — the first commercial plant — will power the grid in the 2030s.",founder:"Bob Mumgaard",founderBio:"PhD, MIT Plasma Science and Fusion Center. Co-founded CFS with fellow MIT alumni Dennis Whyte and MIT Professor Zachary Hartwig. Former plasma researcher at Alcator C-Mod, MIT.",founderRole:"CEO & Co-Founder",milestones:[{year:"2018",event:"CFS spun out of MIT; initial seed funding"},{year:"2021 Sep",event:"MIT + CFS demonstrate 20T REBCO magnet — world record for fusion (Science)"},{year:"2021 Dec",event:"CFS raises $1.8B Series B led by Tiger Global, Eni, and Breakthrough Energy"},{year:"2025",event:"SPARC first plasma targeted (compact fusion demonstration)"},{year:"2030s",event:"ARC commercial pilot plant — target: 400MW to grid"}],links:{website:"https://cfs.energy",sparc:"https://cfs.energy/technology/sparc",magnet:"https://news.mit.edu/2021/MIT-CFS-major-advance-toward-fusion-energy-0908",paper:"https://www.science.org/doi/10.1126/sciadv.abc5229"},impact:"$1.8B raised; world-record magnet demonstrated",tags:["MIT","Fusion","$1.8B","Net Energy"],convergence:["ai","space"]},{id:"nif-ignition",name:"NIF Fusion Ignition",org:"National Ignition Facility, Lawrence Livermore National Laboratory",year:"2022",status:"Achieved",investment:"$3.5B+ (NIF total), DOE funded",desc:"On December 5, 2022, the National Ignition Facility achieved fusion ignition for the first time in history: 3.15 megajoules of energy output from 2.05 megajoules of laser input — a scientific milestone 60 years in the making. The result was published in Physical Review Letters (Abu-Shawareb et al., 2022) and confirmed in a comprehensive 2024 Science paper.",fieldReport:"The December 2022 result at NIF changed the public narrative from 'fusion is always 30 years away' to 'fusion ignition is a solved problem.' The challenge now is economic and engineering: inertial confinement is unlikely to be commercially viable at scale, but the physics proof fundamentally changes the investment case for all fusion approaches. The result was greeted by applause at DOE — the first time in history that a fusion facility produced more energy than the lasers delivered to the target.",founder:"Edward Moses (former director) / Kim Budil (current director)",founderBio:"Budil: 13th Director of Lawrence Livermore National Laboratory; former VP at National Ignition Facility. PhD Nuclear Physics, UC Davis.",founderRole:"LLNL Director",milestones:[{year:"2009",event:"NIF facility completed; ignition campaign begins"},{year:"2021 Aug",event:"8.4 MJ yield — first time fusion exceeded energy absorbed by fuel"},{year:"2022 Dec 5",event:"IGNITION ACHIEVED: 3.15 MJ output / 2.05 MJ input (Physical Review Letters)"},{year:"2024",event:"Full scientific results published (Science — Abu-Shawareb et al.)"}],links:{website:"https://lasers.llnl.gov",paper:"https://physics.aps.org/articles/v15/168",doe:"https://www.energy.gov/articles/doe-national-laboratory-makes-history-achieving-fusion-ignition",science:"https://www.science.org/doi/10.1126/science.adj2337"},impact:"First fusion ignition in history; physics proof validated",tags:["Ignition","DOE","Milestone","Physics Validated"],convergence:["space"]},{id:"xprize-carbon",name:"XPRIZE Carbon Removal",org:"XPRIZE Foundation / Elon Musk",year:"2021",status:"Active Competition",investment:"$100M prize (largest in XPRIZE history)",desc:"The $100M XPRIZE Carbon Removal competition, funded by Elon Musk, challenges teams to demonstrate carbon removal at gigaton scale with $100/ton or less cost. 1,133 teams from 78 countries registered. Four finalist categories: atmosphere, oceans, geological, and biomass. Current best demonstrated cost: ~$500/ton (Climeworks, 2023).",fieldReport:"The carbon removal challenge is a race against a ticking clock: IPCC AR6 (2023) makes clear that even with immediate emission reductions, carbon removal at gigaton scale is required to stay below 1.5°C. The XPRIZE structure has done something extraordinary — it has made this an innovation competition rather than a policy problem. 1,133 teams representing every conceivable removal approach are now competing. The prize window closes in 2025.",founder:"Elon Musk (funder) / Peter Diamandis (XPRIZE)",founderBio:"Musk committed $100M of his personal funds in April 2021, citing the urgency of climate change. XPRIZE Foundation manages the competition with a rigorous scientific advisory board.",founderRole:"Funder + Competition Architect",milestones:[{year:"2021 Apr",event:"Musk announces $100M XPRIZE Carbon Removal commitment"},{year:"2022",event:"1,133 teams registered from 78 countries"},{year:"2023",event:"Milestone prizes ($5M total) awarded to top 15 teams"},{year:"2025",event:"Final judging; grand prize winners announced"}],links:{website:"https://www.xprize.org/prizes/carbonremoval",teams:"https://www.xprize.org/prizes/carbonremoval/teams",ipcc:"https://www.ipcc.ch/report/ar6/wg3/"},impact:"$100M; 1,133 teams; 78 countries",tags:["$100M","Elon Musk","Carbon","Climate Emergency"],convergence:["ocean","flourishing"]},{id:"breakthrough-energy",name:"Breakthrough Energy Ventures",org:"Breakthrough Energy / Bill Gates",year:"2015",status:"Active Portfolio",investment:"$2B+ committed across all Breakthrough programs",desc:"Bill Gates's comprehensive climate technology initiative, comprising Breakthrough Energy Ventures (VC fund), Breakthrough Energy Catalyst (policy/government), and Breakthrough Energy Fellows (early-stage researchers). Portfolio includes fusion, long-duration storage, clean hydrogen, direct air capture, sustainable aviation fuel, and next-generation nuclear. 100+ portfolio companies. Mission: net-zero global economy by 2050.",fieldReport:"Gates spent 10 years studying climate science before launching Breakthrough Energy — his assessment is that government R&D funding alone cannot close the innovation gap. Breakthrough Energy Ventures bridges the 'valley of death' between laboratory results and commercial scale. The Catalyst program pairs private capital with government contracts to de-risk first commercial deployments. Notable investments: CFS, Form Energy (iron-air batteries), Malta (molten salt storage), and 100+ others.",founder:"Bill Gates",founderBio:"Co-founder, Microsoft. Committed his post-Microsoft career to global health and climate. Trustee of the Bill & Melinda Gates Foundation. Author of 'How to Avoid a Climate Disaster' (2021). MIT Visiting Committee member.",founderRole:"Founder",milestones:[{year:"2015",event:"Breakthrough Energy Ventures launched at COP21 Paris (Breakthrough Coalition)"},{year:"2017",event:"Fund I: $1B committed from Gates, Bezos, Branson, Ma, and others"},{year:"2021",event:"Breakthrough Energy Catalyst: $2B to de-risk first commercial deployments"},{year:"2022",event:"Fund II closed; 100+ portfolio companies"},{year:"2024",event:"US Inflation Reduction Act unlocks $369B in climate tech matching capital"}],links:{website:"https://www.breakthroughenergy.org",ventures:"https://www.breakthroughenergy.org/our-work/breakthrough-energy-ventures",book:"https://www.howtoavoidaclimatedisaster.com"},impact:"$2B+ committed; 100+ portfolio companies; net-zero 2050 goal",tags:["Gates","VC","Net-Zero","100+ Companies"],convergence:["ai","space"]}],people:["Bill Gates","Elon Musk","Mark Jacobson","Bob Mumgaard","Jigar Shah","Yvon Chouinard"]},{id:"ai",label:"Intelligence & AI",fullLabel:"Intelligence & Agentic Systems",emoji:"🧠",hex:"#9C27B0",r:228,a:154,tagline:"The First Non-Human Intelligence",image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80&fit=crop",fieldNote:"FROM THE FIELD · San Francisco & London",summary:"AI compute is doubling every 6 months (Epoch AI, 2023). Two Nobel Prizes in 2024 went to AI researchers. The most consequential technology in human history is accelerating faster than the public's capacity to adapt.",context:"The convergence of massive datasets, transformer architectures (Vaswani et al., NeurIPS 2017), and exponentially scaling compute has produced qualitative leaps in capability that most researchers did not predict. GPT-4 scored 90th percentile on the Bar Exam (OpenAI, 2023). AlphaFold 2 solved the 50-year protein folding problem (Nature, 2021). Google Willow achieved quantum computational advantage in error correction (Nature, December 2024). The compute underlying these systems doubles every 6 months.",metrics:[{label:"AI compute doubling time",value:"6 months",source:"Epoch AI, 2023",trend:"up"},{label:"Nobel Prizes 2024 won by AI researchers",value:"2 of 2",source:"Hinton: Physics; Hassabis: Chemistry",trend:"milestone"},{label:"AlphaFold2 protein structures predicted",value:"200M+",source:"Nature, Jumper et al., 2021",trend:"milestone"},{label:"AI market size by 2030",value:"$1.8T",source:"Bloomberg Intelligence, 2023",trend:"up"}],exponential:{phase:"Acceleration",note:"AI is the most rapidly advancing exponential technology in history. GPT-4 to GPT-5 represents more capability growth than the entire previous decade of AI. We are past the knee of the exponential curve."},initiatives:[{id:"openai-agi",name:"OpenAI — Path to AGI",org:"OpenAI",year:"2015",status:"Active Development",investment:"$11.3B+ raised; $157B valuation (2023)",desc:"OpenAI's stated mission: ensure AGI benefits all of humanity. ChatGPT reached 100 million users in 60 days — the fastest product adoption in history (UBS, 2023). GPT-4 scored in the top 10% on the bar exam, top 15% on LSAT, and demonstrated 'sparks of AGI' across multiple reasoning domains (Microsoft Research, Sparks of AGI paper, 2023). Sam Altman's public timeline: AGI systems 'smarter than humans in most domains' within 10 years.",fieldReport:"The release of ChatGPT in November 2022 marked the moment AI moved from research paper to planetary-scale cultural force. Anthropic's Constitutional AI, Google's Gemini, Meta's LLaMA, and dozens of open-source models followed. The field is advancing so rapidly that no single organization can track all developments. The critical question is no longer 'will AGI arrive?' but 'how do we ensure it's safe when it does?'",founder:"Sam Altman",founderBio:"CEO of OpenAI. Former President of Y Combinator. Founding OpenAI board included Elon Musk, Greg Brockman, Ilya Sutskever, and Sam Altman. Organized as a capped-profit company to balance mission and capital.",founderRole:"CEO",milestones:[{year:"2022 Nov",event:"ChatGPT: 100M users in 60 days (fastest product adoption in history — UBS)"},{year:"2023 Mar",event:"GPT-4: 90th percentile bar exam, 'Sparks of AGI' (Microsoft Research)"},{year:"2023 Nov",event:"Altman briefly ousted and reinstated in 5-day crisis; board reformed"},{year:"2024",event:"OpenAI revenue: $3.4B ARR Q4 2024; o3 model achieves frontier reasoning"},{year:"2025",event:"Operator / Agents: AI systems taking real-world actions autonomously"}],links:{website:"https://openai.com",agi:"https://openai.com/index/planning-for-agi-and-beyond/",sparks:"https://arxiv.org/abs/2303.12528",chatgpt:"https://chat.openai.com"},impact:"100M+ users; $157B valuation; leading AGI development",tags:["AGI","$157B","ChatGPT","Fastest Adoption Ever"],convergence:["life","consciousness","space"]},{id:"anthropic-claude",name:"Anthropic — Constitutional AI",org:"Anthropic",year:"2021",status:"Active Development",investment:"$7.3B+ raised (Google, Amazon, Spark Capital)",desc:"Founded by former OpenAI researchers including Dario and Daniela Amodei, Anthropic's core innovation is Constitutional AI — a training methodology where AI systems learn to evaluate their own outputs against a set of principles. Claude 3 Opus set state-of-the-art benchmarks on MMLU, HumanEval, and GSM8K (2024). Mission: AI safety research and deployment of beneficial AI systems.",fieldReport:"Anthropic represents the thesis that safety and capability are complementary, not competing. Constitutional AI — where models self-critique against explicit principles — is the most widely cited safety technique in the field. Dario Amodei has testified before Congress on AI safety. The company's funding from Amazon ($2.75B) and Google ($300M) at $4B+ rounds reflects enterprise confidence. Claude 3.5 Sonnet holds state-of-the-art status on multiple benchmarks as of April 2025.",founder:"Dario Amodei & Daniela Amodei",founderBio:"Dario: Former VP Research at OpenAI; PhD Physics, Princeton. Daniela: Former VP Operations at OpenAI; MBA Stanford. Co-founders include former OpenAI leadership: Tom Brown (GPT-3), Sam McCandlish, Jack Clark, Jared Kaplan.",founderRole:"CEO & President",milestones:[{year:"2021",event:"Anthropic founded; Constitutional AI paper published (Askell et al.)"},{year:"2022",event:"Constitutional AI: Harmlessness from AI Feedback (Bai et al.)"},{year:"2023",event:"Claude 2: 200K context window; $7B+ funding"},{year:"2024",event:"Claude 3 Opus: state-of-the-art across all benchmarks; $2.75B Amazon investment"},{year:"2025 Apr",event:"Claude 4.6 / Sonnet 4.6: leading reasoning and coding benchmarks"}],links:{website:"https://anthropic.com",claude:"https://claude.ai",safety:"https://www.anthropic.com/research/core-views-on-ai-safety",cai:"https://arxiv.org/abs/2212.08073"},impact:"$7.3B raised; Constitutional AI standard adopted across field",tags:["Safety-First","$7.3B","Constitutional AI","State-of-the-Art"],convergence:["consciousness","life"]},{id:"google-willow",name:"Google Willow Quantum Chip",org:"Google Quantum AI",year:"2024",status:"Research Breakthrough",investment:"$1B+ Quantum AI program",desc:"On December 9, 2024, Google published results in Nature showing that its Willow quantum processor (105 qubits) achieved two simultaneous milestones: (1) below-threshold quantum error correction — qubit errors decrease exponentially as you add more qubits, resolving a 30-year challenge; and (2) computation in under 5 minutes that would take today's fastest supercomputers 10 septillion years.",fieldReport:"Google's Willow breakthrough resolves the central obstacle to practical quantum computing: error correction. Previous quantum systems had errors that accumulated faster than qubits could be added. Willow demonstrates the opposite — the more qubits, the lower the error rate. This is the engineering proof of concept that quantum error correction is achievable. The path to cryptographically relevant quantum computing and drug discovery simulations is now visible, if not imminent.",founder:"Hartmut Neven",founderBio:"VP Engineering and Quantum AI lead at Google. Founded Google's quantum computing initiative in 2012. His 'Neven's Law' (quantum computing advances doubly exponentially) is now widely cited.",founderRole:"VP Engineering, Quantum AI",milestones:[{year:"2019 Oct",event:"Google claims quantum supremacy with Sycamore (Nature)"},{year:"2022",event:"IBM 433-qubit Osprey processor; quantum volume benchmarks progress"},{year:"2023 Nov",event:"IBM 1,000+ qubit Condor processor demonstrated"},{year:"2024 Dec 9",event:"Google Willow: below-threshold error correction + computational advantage (Nature)"}],links:{website:"https://quantumai.google",paper:"https://www.nature.com/articles/s41586-024-08309-8",blog:"https://blog.google/technology/research/google-willow-quantum-chip/",neven:"https://quantumai.google/team"},impact:"30-year quantum error problem solved; 10 septillion year computation in minutes",tags:["Nature Paper","Quantum Advantage","Error Correction","Breakthrough"],convergence:["life","energy"]},{id:"alphafold",name:"AlphaFold — Protein Structure",org:"Google DeepMind",year:"2018",status:"Deployed Globally",investment:"Part of $1B+ DeepMind program",desc:"AlphaFold 2 solved the 50-year protein folding problem — predicting 3D structure from amino acid sequence with accuracy comparable to experimental methods (Nature, Jumper et al., 2021). The European Bioinformatics Institute database now holds 200M+ predicted structures covering virtually all known proteins. Co-won the 2024 Nobel Prize in Chemistry for Demis Hassabis and John Jumper.",fieldReport:"The protein folding problem was considered one of the grand challenges of molecular biology — understanding how proteins achieve their 3D structure determines how drugs work, how diseases progress, and how enzymes can be engineered. AlphaFold 2 solved it. The freely available database of 200M+ structures has already accelerated drug discovery for neglected tropical diseases, novel enzyme design, and fundamental structural biology. This is arguably the most significant scientific achievement of the 2020s.",founder:"Demis Hassabis & John Jumper",founderBio:"Hassabis: CEO and Co-Founder, Google DeepMind; Chess prodigy; PhD Neuroscience, UCL; AI safety advocate. Jumper: Principal Research Scientist, DeepMind; PhD Chemistry, University of Chicago. 2024 Nobel Prize in Chemistry.",founderRole:"CEO DeepMind & Lead Researcher",milestones:[{year:"2018",event:"AlphaFold enters CASP13 competition; wins by wide margin"},{year:"2020",event:"AlphaFold 2 wins CASP14 decisively; human-level accuracy"},{year:"2021 Jul",event:"AlphaFold 2 published (Nature — Jumper et al.); database launched"},{year:"2022",event:"200M+ structures in public database — covers virtually all known proteins"},{year:"2024 Oct",event:"Nobel Prize in Chemistry: Hassabis & Jumper"}],links:{website:"https://deepmind.google/alphafold",database:"https://alphafold.ebi.ac.uk",paper:"https://www.nature.com/articles/s41586-021-03819-2",nobel:"https://www.nobelprize.org/prizes/chemistry/2024/hassabis/facts/"},impact:"200M+ protein structures; Nobel Prize 2024; drug discovery accelerated globally",tags:["Nobel Prize 2024","200M Structures","Drug Discovery","Solved Grand Challenge"],convergence:["life","energy"]}],people:["Sam Altman","Dario Amodei","Demis Hassabis","Yann LeCun","Fei-Fei Li","Geoffrey Hinton"]},{id:"space",label:"Space & Oceans",fullLabel:"Space, Ocean & Exploration",emoji:"🚀",hex:"#40C4FF",r:248,a:206,tagline:"The Final Frontiers",image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1400&q=80&fit=crop",fieldNote:"FROM THE FIELD · Boca Chica, Texas",summary:"We know more about the surface of Mars than the floor of our own oceans. Both frontiers are being mapped simultaneously. SpaceX has reduced the cost of access to space by 90%+. The era of multi-planetary humanity is beginning.",context:"In 2010, a kilogram to low Earth orbit cost $54,000 (Space Shuttle). In 2023, SpaceX Falcon 9 costs $2,720/kg (FAA, 2023). Starship, when fully operational, targets $100/kg — a 540x improvement in 20 years. This exponential cost reduction unlocks every space application simultaneously: communications, Earth observation, resource extraction, and eventually human settlement. Simultaneously, only 24.9% of the ocean floor has been mapped with modern sonar resolution (Seabed 2030 Progress Report, 2023).",metrics:[{label:"Cost reduction: Shuttle → Falcon 9 ($/kg to LEO)",value:"95%",source:"FAA Commercial Space Data, 2023",trend:"down-good"},{label:"Ocean floor mapped to modern resolution",value:"24.9%",source:"Seabed 2030 Annual Report, 2023",trend:"up"},{label:"SpaceX Starship IFT-5: booster caught",value:"Oct 13, 2024",source:"SpaceX",trend:"milestone"},{label:"Space economy projected 2040",value:"$1T+",source:"Morgan Stanley, 2020",trend:"up"}],exponential:{phase:"Growth",note:"SpaceX has achieved fully reusable orbital rockets — the key breakthrough analogous to the printing press for space economics. The cost curve is steepening, not flattening."},initiatives:[{id:"spacex-mars",name:"SpaceX Starship / Mars Colonization",org:"SpaceX",year:"2002",status:"Active Development",investment:"$9B+ raised; company valued at $175B (2024)",desc:"Starship is a fully reusable super heavy-lift launch vehicle designed to carry 100 metric tons to LEO, 21 tons to Mars, and eventually establish a self-sustaining city. It is the largest and most powerful rocket ever flown. IFT-5 (October 2024) demonstrated the first catch of the Super Heavy booster using the launch tower's 'Mechazilla' arms — a pivotal milestone for rapid reusability.",fieldReport:"The October 2024 catch of the Super Heavy booster was compared by Musk to catching a 70-meter skyscraper. Each Starship flight test advances the vehicle's capabilities substantially — IFT-3 reached orbit, IFT-4 landed the ship, IFT-5 caught the booster. Uncrewed Mars missions are planned for 2026 with Starship, using the trip as both proof-of-concept and cargo delivery for future crewed missions (2028–2030). The goal: a self-sustaining city of 1M by 2050.",founder:"Elon Musk",founderBio:"CEO SpaceX, Tesla, and Neuralink. Founded SpaceX in 2002 with $100M of his PayPal proceeds. PhD dropout (Stanford Physics, 2 days in). Stated goal: make humanity multi-planetary to preserve the light of consciousness.",founderRole:"Founder & Chief Engineer",milestones:[{year:"2008",event:"Falcon 1: first privately funded liquid-propellant rocket to reach orbit"},{year:"2015",event:"First Falcon 9 booster landing — proven reusability"},{year:"2021",event:"Starship SN15: first high-altitude flight and landing"},{year:"2024 Oct 13",event:"IFT-5: Super Heavy booster caught by Mechazilla — historic first"},{year:"2026",event:"First uncrewed Starship missions to Mars (planned)"}],links:{website:"https://www.spacex.com/vehicles/starship/",mars:"https://www.spacex.com/humanspaceflight/mars/",itf5:"https://www.spacex.com/launches/mission/?missionId=starship-flight-5"},impact:"98% cost reduction; first catch of orbital-class rocket",tags:["Mars","Reusable","$175B","Multi-planetary"],convergence:["energy","ai"]},{id:"seabed-2030",name:"Seabed 2030",org:"Nippon Foundation & GEBCO",year:"2017",status:"Active — 24.9% Complete",investment:"$100M+ committed (2017–2030)",desc:"A global collaborative project to produce a definitive map of the world ocean floor by 2030. Launched by the Nippon Foundation (Japan) and GEBCO (General Bathymetric Chart of the Oceans). As of 2023, 24.9% of the seafloor has been mapped to modern resolution (< 100m resolution). The ocean covers 71% of Earth's surface; ocean depth data is essential for climate modeling, tsunami warning, shipping safety, biodiversity, and cable infrastructure.",fieldReport:"The startling fact: we have better maps of the moon, Mars, and Venus than of our own ocean floor. Seabed 2030 is the largest coordinated mapping effort since the Apollo program. New technologies — autonomous underwater vehicles (AUVs), crowdsourced ship sonar data, and satellite altimetry — are accelerating the campaign. The 2023 progress report confirmed 24.9% coverage, up from 19% in 2021 — the curve is steepening as more nations and commercial shipping contribute data.",founder:"Nippon Foundation / GEBCO",founderBio:"Nippon Foundation: Japan's largest charitable organization; marine research and ocean policy focus. GEBCO: International authority on ocean floor mapping since 1903, operating under IOC-UNESCO and IHO.",founderRole:"International Partnership",milestones:[{year:"2017",event:"Seabed 2030 project launched at UN Ocean Conference"},{year:"2020",event:"Crowdsourced data program expanded — commercial shipping contributes"},{year:"2021",event:"19% of ocean floor mapped to modern resolution"},{year:"2023",event:"24.9% complete — 5.9% gain in 2 years"},{year:"2030",event:"Target: 100% ocean floor mapped"}],links:{website:"https://seabed2030.org",progress:"https://seabed2030.org/progress/",nippon:"https://www.nippon-foundation.or.jp/en/what/projects/seabed2030/",gebco:"https://www.gebco.net"},impact:"24.9% → 100% seafloor by 2030; foundation for all ocean science",tags:["Ocean","Mapping","71% of Earth","Climate Science"],convergence:["ocean","ai"]},{id:"artemis",name:"NASA Artemis Program",org:"NASA + ESA + JAXA + CSA",year:"2017",status:"Active",investment:"$93B+ total (NASA estimate through 2025)",desc:"NASA's Artemis program — named for Apollo's twin sister — is returning humans to the Moon as a proving ground for deep-space operations and a stepping stone to Mars. Artemis I (2022) completed an unmanned lunar flyby. Artemis II will carry the first crewed lunar flyby since Apollo 17 (1972), including the first woman in lunar orbit. Artemis III will land the first woman and first person of color on the Moon.",fieldReport:"Artemis represents a fundamentally different model than Apollo: international, commercial, and permanent. 14 countries signed the Artemis Accords establishing norms for lunar and space activities. The Lunar Gateway station will serve as a permanent cislunar outpost. SpaceX's HLS (Human Landing System) variant of Starship is the planned lunar lander. The long-term vision is a permanent lunar base by the early 2030s, generating operational knowledge for the Mars missions planned to follow.",founder:"NASA",founderBio:"NASA: National Aeronautics and Space Administration, established 1958. Artemis mission directed by Associate Administrator for Exploration Systems Development Jim Free. International partners: ESA, JAXA, CSA, UAE, and 14 Artemis Accords signatories.",founderRole:"International Space Agency Partnership",milestones:[{year:"2022 Nov",event:"Artemis I: unmanned Orion lunar flyby — 1.3M km from Earth"},{year:"2025",event:"Artemis II: first crewed lunar flyby since Apollo 17 (1972)"},{year:"2026",event:"Artemis III: first woman on Moon; first person of color on Moon"},{year:"2028+",event:"Lunar Gateway station assembly begins in cislunar orbit"}],links:{website:"https://www.nasa.gov/artemis/",accords:"https://www.nasa.gov/artemis-accords/",gateway:"https://www.nasa.gov/lunar-gateway/",hls:"https://www.nasa.gov/humans-in-space/commercial-space/human-landing-system/"},impact:"First woman on Moon; 14-nation international framework",tags:["Moon","International","$93B","Mars Gateway"],convergence:["ai","energy"]}],people:["Elon Musk","Jeff Bezos","Gwynne Shotwell","Mae Jemison","Sylvia Earle","Victor Vescovo"]},{id:"flourishing",label:"Human Flourishing",fullLabel:"Human Flourishing & Global Equity",emoji:"🌍",hex:"#00E676",r:220,a:257,tagline:"193 Nations, One Commitment",image:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1400&q=80&fit=crop",fieldNote:"FROM THE FIELD · New York, Geneva & Nairobi",summary:"The 17 UN Sustainable Development Goals are the most ambitious coordinated human effort in history — 193 nations committed to specific, measurable targets for ending poverty, achieving universal education, and creating a sustainable civilization by 2030.",context:"The SDG Progress Report 2023 confirmed that only 15% of SDG targets are on track for 2030. COVID-19 set back global poverty reduction by a decade. However, the baseline improvement since 1990 is extraordinary: extreme poverty fell from 36% to 9.2% of the world population (World Bank, 2023). The SDGs represent both the urgency of remaining work and the proof that coordinated global action produces measurable results.",metrics:[{label:"SDG targets currently on track (2030)",value:"15%",source:"UN SDG Progress Report, 2023",trend:"below-target"},{label:"People in extreme poverty (<$2.15/day)",value:"700M (9.2%)",source:"World Bank Poverty Data, 2023",trend:"down-good"},{label:"Girls out of school globally",value:"130M",source:"UNESCO Education Report, 2023",trend:"target"},{label:"Annual SDG financing gap",value:"$4T",source:"OECD, 2022",trend:"target"}],exponential:{phase:"Critical — Off Track",note:"The SDGs require exponential leverage — mobile banking, AI-powered education, and digital health are the tools that could close the gap. Technology convergence with social innovation is the key variable."},initiatives:[{id:"sdg-poverty",name:"SDG 1 — No Poverty",org:"United Nations / 193 Member States",year:"2015",status:"Off Track (2030)",investment:"$4T/year additional needed (OECD)",desc:"End extreme poverty (<$2.15/day) everywhere by 2030 and cut poverty by all national standards by half. Despite COVID-19 setbacks that pushed 70–100 million back into poverty (World Bank, 2020), the long-term trend is the most extraordinary poverty reduction in human history: from 36% in 1990 to 9.2% in 2023. Mobile banking (M-Pesa model) and conditional cash transfers are the proven breakthrough mechanisms.",fieldReport:"Between 1990 and 2015 — the Millennium Development Goal era — more people were lifted out of extreme poverty than in all of prior human history combined. The mechanism: economic growth amplified by mobile technology enabling financial inclusion. M-Pesa (2007) gave banking to 97% of Kenyan households within 5 years. Direct cash transfers — tested in 52 countries — consistently outperform food aid and in-kind support (GiveDirectly/J-PAL research, 2016–2023). The remaining 700 million in extreme poverty are concentrated in Sub-Saharan Africa and conflict zones.",founder:"193 UN Member States",founderBio:"SDG 1 architect: Jeffrey Sachs (Columbia SDSN Director), Amina J. Mohammed (UN DSG). Key implementers: World Bank, IFAD, UNDP, and 193 national governments.",founderRole:"Global Commitment",milestones:[{year:"1990",event:"Baseline: 36% of world population in extreme poverty (1.9B people)"},{year:"2015",event:"MDG-1 achieved: extreme poverty halved from 1990 levels"},{year:"2020",event:"COVID-19 first increase in extreme poverty in 20 years (+70–100M)"},{year:"2023",event:"9.2% (700M) in extreme poverty; off track for 2030 elimination"}],links:{website:"https://sdgs.un.org/goals/goal1",progress:"https://unstats.un.org/sdgs/report/2023/",worldbank:"https://www.worldbank.org/en/topic/poverty",sachs:"https://www.sdsnnetwork.org"},impact:"1.2B lifted from extreme poverty since 1990; 700M remaining",tags:["SDG","Poverty","Global","Off-Track 2030"],convergence:["life","consciousness","ocean"]},{id:"sdg-education",name:"SDG 4 — Quality Education",org:"United Nations / UNESCO",year:"2015",status:"Severely Off Track",investment:"$39B annual gap in low-income countries (UNESCO)",desc:"Universal access to quality education from early childhood through university. 300 million+ children still lack access to schools (UNESCO, 2023). The 2022 UNESCO Global Education Monitoring Report found COVID-19 caused learning losses equivalent to 1.8 trillion hours of instruction globally. AI-powered personalized learning is the most promising exponential lever — Khan Academy's Khanmigo, Duolingo's AI, and Synthesis (SpaceX school spinout) demonstrate what's possible.",fieldReport:"Malala Yousafzai was shot in the head by the Taliban for going to school. That same year — 2012 — 130 million girls globally were denied the right to education. A decade later, the number has barely changed. Simultaneously, Khan Academy has provided free world-class education to 120 million students. These two facts define the SDG 4 challenge: the technology to educate every human cheaply exists; the political will and infrastructure to deploy it in conflict zones and remote communities does not.",founder:"UNESCO / 193 Member States",founderBio:"SDG 4 lead agency: UNESCO. Malala Yousafzai's Malala Fund directly advocates for girls' education globally. Khan Academy (Sal Khan) and Duolingo (Luis von Ahn) are the highest-scale technology implementations.",founderRole:"Global Commitment",milestones:[{year:"2012",event:"Malala Yousafzai shot; her advocacy transforms global attention to girls' education"},{year:"2015",event:"SDG 4 adopted: universal quality education by 2030"},{year:"2022",event:"UNESCO: COVID-19 caused 1.8T hours of lost instruction globally"},{year:"2023",event:"Khan Academy: 120M users; Khanmigo AI tutor deployed"}],links:{website:"https://sdgs.un.org/goals/goal4",malala:"https://malala.org",khan:"https://www.khanacademy.org",unesco:"https://www.unesco.org/gem-report/"},impact:"120M Khan Academy users; 130M girls still denied education",tags:["SDG","Education","130M Girls","AI Opportunity"],convergence:["consciousness","ai"]},{id:"sdg-gender",name:"SDG 5 — Gender Equality",org:"United Nations / UN Women",year:"2015",status:"Off Track — Progress Reversed",investment:"$6.4T annual cost of gender inequality (McKinsey, 2023)",desc:"End all discrimination and violence against women globally, achieve equal participation in economic and political life, and eliminate child marriage and female genital mutilation. The World Economic Forum Gender Gap Report 2023 found it would take 131 years to close the global gender gap at the current rate — 36 years longer than pre-COVID projections.",fieldReport:"In 2023, the WEF reported that gender parity has not recovered to pre-pandemic levels. Women's labor force participation fell disproportionately during COVID. Yet the McKinsey Global Institute found that closing the gender gap would add $28 trillion to global GDP — the largest single economic opportunity on Earth. Malala Fund's research shows each additional year of girls' schooling reduces fertility rates, improves child health, and increases economic output. The economics are unambiguous; the barriers are cultural and political.",founder:"UN Women / 193 Member States",founderBio:"UN Women led by Sima Bahous. Malala Yousafzai (Malala Fund), Phumzile Mlambo-Ngcuka (former UN Women chief), and Melinda French Gates (Pivotal Ventures) are key advocates.",founderRole:"Global Commitment + Advocacy",milestones:[{year:"2015",event:"SDG 5 adopted; CEDAW has 189 state parties"},{year:"2021",event:"WEF: gender gap would take 135.6 years to close (post-COVID setback)"},{year:"2022",event:"Taliban ban on women's university education in Afghanistan"},{year:"2023",event:"WEF: 131 years to close global gender gap; $28T GDP opportunity"}],links:{website:"https://sdgs.un.org/goals/goal5",malala:"https://malala.org",unwomen:"https://www.unwomen.org",wef:"https://www.weforum.org/reports/global-gender-gap-report-2023/"},impact:"$28T GDP opportunity; 131-year timeline to close gap",tags:["SDG","Gender","$28T Opportunity","Off-Track"],convergence:["consciousness","flourishing"]},{id:"sdg-climate",name:"SDG 13 — Climate Action",org:"UN / IPCC / UNFCCC",year:"2015",status:"Critical — Off Track",investment:"$4.3T/year needed in clean energy investment (IEA, 2023)",desc:"Urgent action to combat climate change and its impacts. The IPCC Sixth Assessment Report (2023) — the most comprehensive climate assessment in history — confirmed that limiting warming to 1.5°C requires a 43% reduction in greenhouse gas emissions by 2030. Current trajectory: 2.7°C warming (UNEP Emissions Gap Report, 2023). The US Inflation Reduction Act ($369B), the EU Green Deal (€1T), and accelerating renewable deployment are the most significant policy responses in history.",fieldReport:"The science is unambiguous, the economics of clean energy are now competitive, and the gap remains between policy and action. The IRA has triggered a clean energy investment boom in the US — $303B in announced investments in 18 months (Clean Investment Monitor, 2023). Solar deployment in 2023 was 40% above IEA's base case projections. Meanwhile, 2023 was the hottest year in recorded history. The race is real, measurable, and unresolved.",founder:"IPCC / UNFCCC / 193 UN Member States",founderBio:"IPCC: Intergovernmental Panel on Climate Change, established 1988. UNFCCC: Framework for global climate agreements. Key advocates: António Guterres (UN Secretary-General), John Kerry (US Special Envoy for Climate).",founderRole:"Global Scientific & Policy Framework",milestones:[{year:"2015",event:"Paris Agreement: 196 nations commit to limit warming to 1.5–2°C"},{year:"2021",event:"Glasgow COP26: coal phase-down commitment; methane pledge"},{year:"2022",event:"US IRA: $369B climate and clean energy investment"},{year:"2023",event:"IPCC AR6: 43% emission reduction needed by 2030; hottest year on record"}],links:{website:"https://sdgs.un.org/goals/goal13",ipcc:"https://www.ipcc.ch/report/ar6/syr/",unfccc:"https://unfccc.int",ira:"https://www.whitehouse.gov/cleanenergy/"},impact:"Paris Agreement: 196 nations; $369B IRA; race to 1.5°C",tags:["SDG","1.5°C","Paris Agreement","Emergency"],convergence:["energy","ocean"]}],people:["Malala Yousafzai","Muhammad Yunus","MacKenzie Scott","Paul Farmer","Jeffrey Sachs","Jacinda Ardern"]},{id:"ocean",label:"Ocean & Earth",fullLabel:"Ocean, Biodiversity & Rewilding",emoji:"🌊",hex:"#0091EA",r:238,a:309,tagline:"The Living Systems of Earth",image:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1400&q=80&fit=crop",fieldNote:"FROM THE FIELD · Monterey Bay & Amazon Basin",summary:"We are in the sixth mass extinction — the first caused by a single species. 1 million species are threatened (IPBES, 2019). Simultaneously, ocean-based solutions could deliver 21% of the greenhouse gas emission reductions needed by 2050.",context:"The ocean is the climate system. It has absorbed 90% of excess heat from global warming (IPCC, 2021) and 25-30% of all CO₂ emissions. Coral bleaching, ocean acidification (30% more acidic since pre-industrial), and warming are destabilizing the foundation of marine food webs. The Amazon — at 17% deforestation — is approaching the 20-25% tipping point beyond which the forest cannot regenerate (Carlos Nobre, INPE). The biodiversity crisis is inseparable from the climate crisis.",metrics:[{label:"Species threatened with extinction",value:"1M+",source:"IPBES Global Assessment, 2019",trend:"up"},{label:"Coral reefs severely bleached 2024",value:"54%",source:"NOAA Coral Reef Watch, 2024",trend:"up"},{label:"Amazon deforestation (approaching tipping point)",value:"17%",source:"INPE, 2023; tipping point ~20-25%",trend:"up"},{label:"Ocean-based emission solutions potential",value:"21% of 2050 target",source:"High Level Panel for a Sustainable Ocean Economy, 2021",trend:"opportunity"}],exponential:{phase:"Critical Threshold",note:"Ecosystem tipping points are not linear — they are exponential collapses. The Amazon tipping point, coral bleaching, and ocean acidification are all approaching non-linear thresholds. AI-powered monitoring and eDNA technology are the exponential tools for rapid biodiversity assessment."},initiatives:[{id:"mission-blue",name:"Mission Blue / Hope Spots",org:"Mission Blue",year:"2010",status:"Active — 160+ Hope Spots",investment:"$50M+ (TED Prize + foundation funding)",desc:"Dr. Sylvia Earle's global movement to establish marine protected areas (MPAs) she calls 'Hope Spots' — places critical to the health of the ocean, based on their biodiversity, connectivity, and resilience. 160+ formally designated Hope Spots covering 10 million+ sq miles. Companion to the 30x30 initiative.",fieldReport:"Sylvia Earle spent 7,000+ hours underwater and holds the record for the deepest solo dive in history (1,000 meters, 1979 JIM suit). Her 2009 TED Prize wish — a 'Mission Blue' to protect the ocean — launched what is now the most extensive marine conservation network in history. The scientific basis: marine protected areas with strict no-take status show 21% higher fish biomass and faster ecosystem recovery than surrounding areas (Edgar et al., Nature 2014). The challenge: only 8.3% of oceans are currently protected vs. the 30x30 target.",founder:"Sylvia Earle",founderBio:"Marine biologist, oceanographer, author, and 'Her Deepness.' Former Chief Scientist of NOAA; National Geographic Explorer-in-Residence; 8 world records in diving. Over 100 expeditions and 7,000+ hours underwater. Time magazine: 'Hero of the Planet.'",founderRole:"Founder & Chief Scientist",milestones:[{year:"2009",event:"TED Prize: Earle's wish launches Mission Blue"},{year:"2010",event:"Mission Blue officially formed; first Hope Spots designated"},{year:"2014",event:"Edgar et al. (Nature): MPAs with strict protection show 21% higher fish biomass"},{year:"2022",event:"150+ Hope Spots; partner network expanded globally"},{year:"2023",event:"160+ Hope Spots; 10M+ sq miles under designation"}],links:{website:"https://missionblue.org",hopespots:"https://missionblue.org/hope-spots/",ted:"https://www.ted.com/talks/sylvia_earle_how_to_protect_the_oceans",edgar:"https://www.nature.com/articles/nature13022"},impact:"160+ Hope Spots; 10M+ sq miles; catalyzed 30x30",tags:["Marine Conservation","Hope Spots","TED Prize","Sylvia Earle"],convergence:["flourishing","energy"]},{id:"xprize-rainforest",name:"XPRIZE Rainforest",org:"XPRIZE Foundation",year:"2019",status:"Active Competition",investment:"$10M prize",desc:"A $10M global competition to develop technologies that rapidly assess and manage biodiversity in tropical forests. The winning approach must be able to survey a 100-hectare forest plot within 24 hours and autonomously characterize all species present — plants, animals, insects, and microorganisms — using a combination of drones, sensors, DNA sequencing, and AI.",fieldReport:"The Amazon is losing approximately 10,000 square kilometers per year (INPE, 2023). At that rate, surveying biodiversity with traditional methods is logistically impossible. XPRIZE Rainforest teams are using eDNA (environmental DNA, extracted from water and air), autonomous drones with hyperspectral cameras, acoustic monitoring, and AI classification to survey biodiversity at scales previously unimaginable. The technology being developed for rainforests will accelerate all ecological monitoring globally.",founder:"Peter Diamandis / XPRIZE Foundation",founderBio:"XPRIZE has now run 26+ competitions across energy, health, ocean, AI, and environment with over $400M in prizes deployed.",founderRole:"Founder & Competition Architect",milestones:[{year:"2019",event:"XPRIZE Rainforest announced; preliminary judging begins"},{year:"2021",event:"Field testing begins in Brazilian Amazon with finalist teams"},{year:"2022",event:"Semi-finals in Singapore; eDNA and acoustic AI methods validated"},{year:"2023",event:"Finals in Amazon Basin; winner selection ongoing"}],links:{website:"https://www.xprize.org/prizes/rainforest",teams:"https://www.xprize.org/prizes/rainforest/teams",inpe:"https://www.inpe.br"},impact:"$10M; eDNA + AI biodiversity monitoring at forest scale",tags:["Amazon","$10M","eDNA","AI Biodiversity"],convergence:["ai","flourishing"]},{id:"30x30",name:"30×30 Global Initiative",org:"Campaign for Nature / CBD (Convention on Biological Diversity)",year:"2020",status:"Committed — 100+ Nations",investment:"$30B/year nature finance commitment (Kunming-Montreal, 2022)",desc:"A global commitment to protect 30% of Earth's land and ocean by 2030, endorsed by 100+ nations and formalized in the Kunming-Montreal Global Biodiversity Framework (COP15, December 2022). Currently, 17% of land and 8.3% of ocean are protected (UNEP, 2023). Achieving 30x30 is considered the minimum necessary to halt and reverse the sixth mass extinction.",fieldReport:"COP15 in Montreal (December 2022) produced the 'Paris Moment for Nature': 196 nations agreed to the Kunming-Montreal Global Biodiversity Framework, including the 30x30 target. The US committed to 30x30 through the America the Beautiful executive initiative. The scientific basis: E.O. Wilson's 'Half-Earth' concept (his 2016 book arguing for protecting 50% of Earth) provides the intellectual foundation — protecting 30% protects ~80% of terrestrial biodiversity. The funding commitment of $30B/year represents the largest nature finance mobilization in history.",founder:"Campaign for Nature / CBD",founderBio:"Campaign for Nature: co-chaired by Inger Andersen (UNEP Director) and Christiana Figueres (former UNFCCC Executive Secretary). Scientific architect: E.O. Wilson (Harvard biologist) through Half-Earth Project.",founderRole:"Global Conservation Coalition",milestones:[{year:"2016",event:"E.O. Wilson publishes 'Half-Earth': 50% protected to save biodiversity"},{year:"2020",event:"Campaign for Nature launches 30x30 global push"},{year:"2021",event:"60+ nations endorse 30x30; Biden commits US to America the Beautiful"},{year:"2022 Dec",event:"Kunming-Montreal: 196 nations adopt 30x30 + $30B/year nature finance"},{year:"2023",event:"Currently: 17% land, 8.3% ocean protected"}],links:{website:"https://www.campaignfornature.org/30x30",cbd:"https://www.cbd.int/article/cop15-cbd-press-release-19dec2022",halfearth:"https://eowilsonfoundation.org/half-earth-project/",us:"https://www.whitehouse.gov/ceq/news-updates/2021/01/27/president-biden-signs-executive-order-on-tackling-the-climate-crisis-at-home-and-abroad/"},impact:"196 nations committed; $30B/year nature finance; 8.3% → 30% ocean",tags:["196 Nations","COP15","$30B/year","Sixth Extinction"],convergence:["energy","flourishing"]}],people:["Sylvia Earle","David Attenborough","Jane Goodall","Paul Watson","Enric Sala","E.O. Wilson"]}],g0=[{name:"Devon Seegers",domain:"consciousness",role:"Moonshot Mapping™ Founder",moonshot:"Move souls, raise consciousness of humanity through music, art & agentic systems",links:{web:"https://devonseegers.com"}},{name:"Brené Brown",domain:"consciousness",role:"Vulnerability Researcher, Author",moonshot:"A world where enough people are brave enough to be truly vulnerable",links:{web:"https://brenebrown.com"}},{name:"Tim Ferriss",domain:"consciousness",role:"Author, Tools of Titans",moonshot:"Deconstruct world-class performers to give their tools to the rest of us",links:{web:"https://tim.blog"}},{name:"Chase Jarvis",domain:"consciousness",role:"CreativeLive Founder",moonshot:"Democratize creative education globally — creative skills for all",links:{web:"https://chasejarvis.com"}},{name:"Gabrielle Bernstein",domain:"consciousness",role:"Spiritual Teacher & Author",moonshot:"Help millions release fear and choose love as their operating system",links:{web:"https://gabbybernstein.com"}},{name:"Marianne Williamson",domain:"consciousness",role:"Author & Activist",moonshot:"Politics of love — governance guided by moral force, not fear",links:{web:"https://marianne.com"}},{name:"Dacher Keltner",domain:"consciousness",role:"Awe Researcher, UC Berkeley",moonshot:"Restore awe as a biological and social imperative — the antidote to narcissism",links:{web:"https://ggsc.berkeley.edu"}},{name:"Oprah Winfrey",domain:"consciousness",role:"Media Mogul & Philanthropist",moonshot:"Help people live their best lives — self-actualization as global movement",links:{web:"https://www.oprah.com"}},{name:"Jennifer Doudna",domain:"life",role:"CRISPR Co-Inventor, Nobel Chemistry 2020",moonshot:"Eliminate genetic disease from the human species entirely",links:{web:"https://innovativegenomics.org"}},{name:"David Sinclair",domain:"life",role:"Longevity Researcher, Harvard Medical School",moonshot:"Treat aging as a disease — add 20 healthy years to every human life",links:{web:"https://sinclair.hms.harvard.edu"}},{name:"Peter Diamandis",domain:"life",role:"XPRIZE Founder, Singularity University Co-Founder",moonshot:"Democratize abundance — make what was scarce available to everyone",links:{web:"https://www.xprize.org"}},{name:"George Church",domain:"life",role:"Synthetic Biology Pioneer, Harvard Genetics",moonshot:"Engineer biology to solve every human disease and ecological crisis",links:{web:"https://arep.med.harvard.edu"}},{name:"Katalin Karikó",domain:"life",role:"mRNA Pioneer, Nobel Physiology 2023",moonshot:"End infectious disease using mRNA — cancer, HIV, malaria all curable",links:{web:"https://modernatx.com"}},{name:"Aubrey de Grey",domain:"life",role:"SENS Foundation Chief Science Officer",moonshot:"Develop therapies that keep people healthy indefinitely — defeat aging",links:{web:"https://www.sens.org"}},{name:"Shinya Yamanaka",domain:"life",role:"iPS Cell Pioneer, Nobel Physiology 2012",moonshot:"Reprogram adult cells — regenerative medicine that repairs any tissue",links:{web:"https://cira.kyoto-u.ac.jp/e/"}},{name:"Demis Hassabis",domain:"life",role:"Google DeepMind CEO, Nobel Chemistry 2024",moonshot:"Solve intelligence and use it to solve everything else — starting with protein folding",links:{web:"https://deepmind.google"}},{name:"Bill Gates",domain:"energy",role:"Breakthrough Energy Founder",moonshot:"Net-zero global economy by 2050 — every nation, every sector, every industry",links:{web:"https://breakthroughenergy.org"}},{name:"Elon Musk",domain:"energy",role:"Tesla & SpaceX Founder",moonshot:"Accelerate the world's transition to sustainable energy and multi-planetary life",links:{web:"https://tesla.com"}},{name:"Mark Jacobson",domain:"energy",role:"Stanford 100% Renewables Researcher",moonshot:"100% renewable energy in every country by 2035 — no nukes, no CCS",links:{web:"https://web.stanford.edu/group/efmh/jacobson"}},{name:"Jigar Shah",domain:"energy",role:"DOE Loan Programs Office Director",moonshot:"Deploy $400B in clean energy finance to decarbonize the US economy at scale",links:{web:"https://energy.gov/lpo"}},{name:"Yvon Chouinard",domain:"energy",role:"Patagonia Founder",moonshot:"Business as a force for nature — gave Patagonia to the Earth (2022)",links:{web:"https://patagonia.com"}},{name:"Bob Mumgaard",domain:"energy",role:"Commonwealth Fusion Systems CEO",moonshot:"First commercial fusion reactor — unlimited clean energy from seawater",links:{web:"https://cfs.energy"}},{name:"Sam Altman",domain:"ai",role:"OpenAI CEO",moonshot:"AGI that benefits all of humanity — transformative tool for collective flourishing",links:{web:"https://openai.com"}},{name:"Dario Amodei",domain:"ai",role:"Anthropic CEO",moonshot:"Build AI safely and beneficially — Constitutional AI aligned with human values",links:{web:"https://anthropic.com"}},{name:"Yann LeCun",domain:"ai",role:"Meta AI Chief Scientist",moonshot:"Human-level AI through self-supervised learning — open and beneficial for all",links:{web:"https://ai.meta.com"}},{name:"Fei-Fei Li",domain:"ai",role:"AI4ALL Co-Founder, Stanford HAI",moonshot:"Human-centered AI for all — diversity of thought shaping the future of intelligence",links:{web:"https://ai4all.org"}},{name:"Geoffrey Hinton",domain:"ai",role:"AI Safety Pioneer, Nobel Physics 2024",moonshot:"Ensure AI development doesn't destroy humanity — sound the alarm, demand governance",links:{web:"https://geoffreyhinton.ca"}},{name:"Daniela Amodei",domain:"ai",role:"Anthropic President",moonshot:"Scale beneficial AI responsibly — safety and capability as complementary goals",links:{web:"https://anthropic.com"}},{name:"Emad Mostaque",domain:"ai",role:"Stability AI Founder",moonshot:"Open-source AI for all of humanity — no single entity controls intelligence",links:{web:"https://stability.ai"}},{name:"Gwynne Shotwell",domain:"space",role:"SpaceX President & COO",moonshot:"Make humanity multi-planetary — preserve the light of consciousness",links:{web:"https://spacex.com"}},{name:"Jeff Bezos",domain:"space",role:"Blue Origin Founder",moonshot:"Move heavy industry to space — preserve Earth as a garden for humanity",links:{web:"https://blueorigin.com"}},{name:"Mae Jemison",domain:"space",role:"Astronaut & 100YSS Founder",moonshot:"Ensure human civilization continues in the stars — 100-year starship project",links:{web:"https://100yss.org"}},{name:"Sylvia Earle",domain:"space",role:"Marine Biologist, Mission Blue Founder",moonshot:"Protect the blue heart of the planet — 30% of ocean protected by 2030",links:{web:"https://missionblue.org"}},{name:"Victor Vescovo",domain:"space",role:"Explorer & Investor",moonshot:"Map and explore every extreme of Earth — poles, peaks, and hadal ocean trenches",links:{web:"https://victoresvescovo.com"}},{name:"Jill Tarter",domain:"space",role:"SETI Institute Co-Founder",moonshot:"Find extraterrestrial intelligence — we are not alone in the cosmos",links:{web:"https://www.seti.org"}},{name:"Malala Yousafzai",domain:"flourishing",role:"Nobel Peace Laureate 2014, Malala Fund Founder",moonshot:"12 years of free, quality education for every girl on Earth — no exceptions",links:{web:"https://malala.org"}},{name:"Muhammad Yunus",domain:"flourishing",role:"Grameen Bank Founder, Nobel Peace 2006",moonshot:"End poverty through microcredit — every human being as an entrepreneur",links:{web:"https://muhammadyunus.org"}},{name:"MacKenzie Scott",domain:"flourishing",role:"Philanthropist ($16B donated 2020–2023)",moonshot:"Accelerate equity through radical, trust-based philanthropy where traditional funders won't go",links:{web:"https://mackenziescott.com"}},{name:"Paul Farmer",domain:"flourishing",role:"Partners in Health Co-Founder",moonshot:"Global health equity — world-class care for the world's poorest patients",links:{web:"https://www.pih.org"}},{name:"Jeffrey Sachs",domain:"flourishing",role:"Columbia Economist, SDG Architect",moonshot:"End extreme poverty — it's the most achievable thing humanity has never fully tried",links:{web:"https://www.jeffrey-sachs.org"}},{name:"Jacinda Ardern",domain:"flourishing",role:"Former NZ Prime Minister",moonshot:"Governance as empathy — leadership centered on wellbeing, not GDP growth",links:{web:"https://www.labour.org.nz"}},{name:"Melinda French Gates",domain:"flourishing",role:"Pivotal Ventures Founder",moonshot:"Economic power and opportunity for every woman in the US and globally",links:{web:"https://pivotalventures.org"}},{name:"Leila Janah",domain:"flourishing",role:"Samasource & LXMI Founder",moonshot:"Give work to the world — end poverty by connecting underserved talent to tech jobs",links:{web:"https://samasource.com"}},{name:"David Attenborough",domain:"ocean",role:"Naturalist & Broadcaster",moonshot:"Inspire humanity to protect the living world before it's too late — at 97, still going",links:{web:"https://www.bbc.co.uk/programmes/profiles/3R2lSH0wNs1hMWfTFlb3V5t"}},{name:"Jane Goodall",domain:"ocean",role:"Primatologist, UN Messenger of Peace",moonshot:"Reconnect humans with nature — every individual makes a difference, every day",links:{web:"https://www.janegoodall.org"}},{name:"Paul Watson",domain:"ocean",role:"Sea Shepherd Founder",moonshot:"Direct action to protect marine wildlife — defend what the law won't and courts can't",links:{web:"https://seashepherd.org"}},{name:"Enric Sala",domain:"ocean",role:"Pristine Seas, National Geographic Explorer",moonshot:"Protect the last wild places in the ocean through science and storytelling",links:{web:"https://pristineseas.org"}},{name:"E.O. Wilson",domain:"ocean",role:"Biologist, Half-Earth Theorist",moonshot:"Protect half of Earth's surface for nature — the minimum to save biodiversity",links:{web:"https://eowilsonfoundation.org"}},{name:"Cristina Mittermeier",domain:"ocean",role:"SeaLegacy Co-Founder, Photographer",moonshot:"Photography as a weapon for ocean conservation — change what people see, change what they save",links:{web:"https://sealegacy.org"}}],A1=[{era:"Ancient",y:"~500 BCE",w:"Siddhartha Gautama",m:"Liberate all of humanity from suffering",c:"#CE93D8"},{era:"Ancient",y:"~4 BCE",w:"Jesus of Nazareth",m:"Awaken humanity to unconditional love",c:"#CE93D8"},{era:"Renaissance",y:"1440s",w:"Johannes Gutenberg",m:"Democratize knowledge — print for everyone",c:"#FFD54F"},{era:"Renaissance",y:"1492–1522",w:"Columbus & Magellan",m:"Map the entire surface of the Earth",c:"#FFD54F"},{era:"Industrial",y:"1879",w:"Edison & Tesla",m:"Electrify the world — banish darkness forever",c:"#80DEEA"},{era:"Industrial",y:"1903",w:"Wright Brothers",m:"Give humanity the power of flight",c:"#80DEEA"},{era:"Space Age",y:"1969",w:"NASA Apollo 11",m:"Touch the Moon — prove the impossible is real",c:"#B39DDB"},{era:"Digital",y:"1991",w:"Tim Berners-Lee",m:"Connect all of humanity's knowledge — the World Wide Web",c:"#80CBC4"},{era:"Now",y:"2012",w:"Doudna & Charpentier",m:"Rewrite the genetic code of all living things (Nobel 2020)",c:"#80CBC4"},{era:"Now",y:"2022 Dec",w:"NIF / LLNL",m:"First fusion ignition: more energy out than in",c:"#FFD60A"},{era:"Now",y:"2024 Oct",w:"Hinton & Hassabis",m:"Nobel Prizes awarded to AI researchers (Physics & Chemistry)",c:"#9C27B0"},{era:"Now",y:"You",w:"",m:"Your moonshot — yet to be named",c:"#FFCC00",isYou:!0}],Df=sessionStorage.getItem("srk")||"",sa=()=>!!Df;async function v0(s){var r;if(!Df)throw new Error("NO_KEY");const t=await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":Df,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1400,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:s}]})})).json();if(t.error)throw new Error(t.error.message);return((r=t.content)==null?void 0:r.filter(o=>o.type==="text").map(o=>o.text).join(""))||""}function C1(){ln.useEffect(()=>{const s=document.createElement("link");return s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Cinzel:wght@400;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap",document.head.appendChild(s),()=>{try{document.head.removeChild(s)}catch{}}},[])}const kn={fontFamily:"'Playfair Display',Georgia,serif"},ht={fontFamily:"'Cinzel',Georgia,serif"},$t={fontFamily:"'Source Serif 4',Georgia,serif"};function _0({status:s}){const t={Active:"#00E676",Clinical:"#00E5FF",Live:"#E040FB","Active Development":"#40C4FF",Achieved:"#FFD60A","Active Competition":"#FF6B35","Commercial + Clinical Pipeline":"#00E676","Pre-Clinical + Early Phase":"#9C27B0","Actively Building":"#40C4FF","Active — 160+ Hope Spots":"#00E676","Active — 24.9% Complete":"#40C4FF","Committed — 100+ Nations":"#00E676","Off Track (2030)":"#FF5252","Severely Off Track":"#FF5252","Off Track — Progress Reversed":"#FF5252","Critical — Off Track":"#FF5252","Research Breakthrough":"#FFD60A","Deployed Globally":"#00E676","Active Portfolio":"#00E676"}[s]||"#888";return X.jsx("span",{style:{...ht,fontSize:8,letterSpacing:"0.1em",padding:"3px 8px",background:`${t}20`,border:`1px solid ${t}60`,borderRadius:2,color:t,whiteSpace:"nowrap"},children:s.toUpperCase()})}function R1({metric:s,domainHex:e}){const t={up:"↑","down-good":"↓",milestone:"★",target:"◎","below-target":"⚠",opportunity:"◈",critical:"⚠"},r={up:"#FF5252","down-good":"#00E676",milestone:e,target:"#FFA726","below-target":"#FF5252",opportunity:"#00E676",critical:"#FF5252"};return X.jsxs("div",{style:{background:"#fff",border:"1px solid #e0d8cc",borderRadius:3,padding:"12px 14px",borderTop:`3px solid ${e}`},children:[X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8},children:[X.jsx("p",{style:{...$t,fontSize:20,fontWeight:600,color:"#111",margin:0,lineHeight:1.1},children:s.value}),X.jsx("span",{style:{fontSize:13,color:r[s.trend]||"#888",flexShrink:0},children:t[s.trend]||""})]}),X.jsx("p",{style:{...$t,fontSize:12,color:"#333",margin:"4px 0 2px",lineHeight:1.4},children:s.label}),X.jsx("p",{style:{...ht,fontSize:8,color:"#999",letterSpacing:"0.08em",margin:0},children:s.source})]})}function P1({init:s,domain:e,onClose:t}){const[r,o]=ln.useState(""),[l,u]=ln.useState(!1),f=ln.useCallback(async()=>{u(!0);try{const v=await v0(`You are a field correspondent for a National Geographic / Singularity University special. Research LATEST 2024-2025 developments for: "${s.name}" (${s.org}).

Provide: 1) Most recent breakthrough with specific date 2) Current status and scale 3) Concrete upcoming timeline 4) Key finding or expert quote. Cite sources, use exact numbers. Format as 3 concise paragraphs.`);o(v)}catch{o("Live research requires VITE_ANTHROPIC_API_KEY.")}u(!1)},[s]),m=e.hex,p=m==="#FFD60A"?"#000":"#fff";return X.jsx("div",{style:{position:"fixed",inset:0,zIndex:400,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:v=>{v.target===v.currentTarget&&t()},children:X.jsxs("div",{style:{width:"100%",maxWidth:820,background:"#faf7f0",maxHeight:"90vh",overflowY:"auto",borderRadius:"8px 8px 0 0",boxShadow:"0 -30px 80px rgba(0,0,0,0.5)"},children:[X.jsxs("div",{style:{background:m,padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12},children:[X.jsxs("div",{children:[X.jsxs("p",{style:{...ht,fontSize:9,letterSpacing:"0.3em",color:p,opacity:.75,margin:0},children:[e.fieldNote," · INITIATIVE SPOTLIGHT"]}),X.jsx("h2",{style:{...kn,fontSize:"clamp(18px,3vw,28px)",fontWeight:900,color:p,margin:0,lineHeight:1.1},children:s.name}),X.jsxs("p",{style:{...ht,fontSize:9,color:p,opacity:.7,margin:"2px 0 0",letterSpacing:"0.14em"},children:[s.org.toUpperCase()," · EST. ",s.year]})]}),X.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start",flexShrink:0},children:[X.jsx(_0,{status:s.status}),X.jsx("button",{onClick:t,style:{background:"none",border:`1px solid ${p}40`,color:p,width:32,height:32,borderRadius:"50%",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]})]}),X.jsxs("div",{style:{padding:"24px"},children:[X.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:20},children:[["Investment",s.investment],["Impact",s.impact],["Founded",s.year]].filter(([,v])=>v).map(([v,y])=>X.jsxs("div",{style:{background:"#fff",border:"1px solid #e0d8cc",borderRadius:3,padding:"10px 14px",flex:"1 1 140px"},children:[X.jsx("p",{style:{...ht,fontSize:8,letterSpacing:"0.18em",color:"#999",margin:0},children:v.toUpperCase()}),X.jsx("p",{style:{...$t,fontSize:12,fontWeight:600,color:"#111",margin:"3px 0 0",lineHeight:1.3},children:y})]},v))}),X.jsx("p",{style:{...$t,fontSize:15,lineHeight:1.85,color:"#222",marginBottom:20},children:s.desc}),X.jsxs("div",{style:{borderLeft:`5px solid ${gn}`,paddingLeft:18,marginBottom:24},children:[X.jsxs("p",{style:{...ht,fontSize:8,letterSpacing:"0.2em",color:"#888",marginBottom:6},children:[e.fieldNote," · FIELD REPORT"]}),X.jsx("p",{style:{...kn,fontSize:"clamp(14px,2vw,18px)",fontStyle:"italic",lineHeight:1.7,color:"#111",margin:0},children:s.fieldReport})]}),X.jsxs("div",{style:{background:"#fff",border:"1px solid #e0d8cc",borderRadius:3,padding:"16px 18px",marginBottom:20,display:"flex",gap:14,alignItems:"flex-start"},children:[X.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:m,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",...ht,fontSize:14,fontWeight:700,color:p},children:s.founder.split(" ").map(v=>v[0]).slice(0,2).join("")}),X.jsxs("div",{children:[X.jsx("p",{style:{...kn,fontSize:17,fontWeight:700,color:"#111",margin:0},children:s.founder}),X.jsx("p",{style:{...ht,fontSize:9,color:"#888",letterSpacing:"0.1em",margin:"2px 0 6px"},children:s.founderRole}),X.jsx("p",{style:{...$t,fontSize:13,color:"#555",lineHeight:1.6,margin:0},children:s.founderBio})]})]}),s.milestones&&X.jsxs("div",{style:{marginBottom:24},children:[X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.22em",color:"#888",marginBottom:12},children:"KEY MILESTONES"}),s.milestones.map((v,y)=>X.jsxs("div",{style:{display:"flex",gap:14,marginBottom:8,alignItems:"flex-start"},children:[X.jsx("div",{style:{...ht,fontSize:9,color:m,letterSpacing:"0.08em",minWidth:80,flexShrink:0,paddingTop:2},children:v.year}),X.jsxs("div",{children:[X.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:m,display:"inline-block",marginRight:8,marginBottom:2,verticalAlign:"middle"}}),X.jsx("span",{style:{...$t,fontSize:13,color:"#333",lineHeight:1.5},children:v.event})]})]},y))]}),X.jsxs("div",{style:{marginBottom:24},children:[X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.22em",color:"#888",marginBottom:10},children:"FURTHER READING"}),X.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:Object.entries(s.links).map(([v,y])=>X.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",style:{...ht,fontSize:9,letterSpacing:"0.1em",padding:"7px 14px",background:m,color:p,textDecoration:"none",borderRadius:2,textTransform:"uppercase"},children:v==="website"?"🌐 Website":v==="paper"?"📄 Research":v==="fda"?"🏛 FDA":"↗ "+v},v))})]}),X.jsxs("div",{style:{borderTop:"2px solid #e0d8cc",paddingTop:20},children:[X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:10,marginBottom:14},children:[X.jsxs("div",{children:[X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.22em",color:"#b38f00",margin:0},children:"⚡ LIVE FIELD DISPATCH"}),X.jsx("p",{style:{...kn,fontSize:20,fontWeight:700,color:"#111",margin:0},children:"Latest from the Field"})]}),!r&&!l&&sa()&&X.jsx("button",{onClick:f,style:{...ht,fontSize:9,letterSpacing:"0.15em",padding:"8px 18px",background:"#111",color:"#fff",border:"none",cursor:"pointer",borderRadius:2},children:"SEARCH LIVE DATA →"})]}),l&&X.jsxs("div",{style:{textAlign:"center",padding:"24px 0"},children:[X.jsx("div",{style:{width:32,height:32,border:"3px solid #e0d8cc",borderTopColor:"#111",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 8px"}}),X.jsx("p",{style:{...ht,fontSize:9,color:"#aaa",letterSpacing:"0.15em"},children:"SEARCHING…"})]}),r&&X.jsx("div",{style:{background:"#fff",border:"1px solid #e0d8cc",borderRadius:3,padding:"18px 20px",borderLeft:`4px solid ${m}`},children:r.split(`

`).filter(v=>v.trim()).map((v,y,g)=>X.jsx("p",{style:{...$t,fontSize:14,lineHeight:1.8,color:"#333",marginBottom:y<g.length-1?14:0},children:v},y))}),!sa()&&X.jsx("p",{style:{...$t,fontSize:13,color:"#999",fontStyle:"italic"},children:"Live research requires VITE_ANTHROPIC_API_KEY."})]})]})]})})}function I1({domain:s,onClose:e}){const[t,r]=ln.useState(null),[o,l]=ln.useState("field"),u=g0.filter(p=>p.domain===s.id),f=s.hex,m=f==="#FFD60A"?"#000":"#fff";return X.jsxs("div",{style:{position:"fixed",inset:0,zIndex:300,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:p=>{p.target===p.currentTarget&&e()},children:[X.jsxs("div",{style:{width:"100%",maxWidth:1e3,background:"#faf7f0",maxHeight:"90vh",overflowY:"auto",borderRadius:"8px 8px 0 0",boxShadow:"0 -30px 80px rgba(0,0,0,0.5)"},children:[X.jsxs("div",{style:{position:"relative",height:"clamp(180px,32vh,320px)",overflow:"hidden",flexShrink:0},children:[X.jsx("img",{src:s.image,alt:s.fullLabel,loading:"eager",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},onError:p=>p.target.style.display="none"}),X.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top,#faf7f0 0%,rgba(0,0,0,0.15) 60%,rgba(0,0,0,0.6) 100%)"}}),X.jsxs("div",{style:{position:"absolute",top:16,left:0,background:gn,padding:"8px 20px 8px 24px",display:"flex",alignItems:"center",gap:10},children:[X.jsx("span",{style:{fontSize:18},children:s.emoji}),X.jsxs("p",{style:{...ht,fontSize:9,letterSpacing:"0.35em",color:"#000",margin:0},children:[s.fullLabel.toUpperCase()," · SECOND RENAISSANCE"]})]}),X.jsx("div",{style:{position:"absolute",top:16,right:56,background:"rgba(0,0,0,0.6)",padding:"5px 10px"},children:X.jsx("p",{style:{...ht,fontSize:8,color:"rgba(255,255,255,0.8)",letterSpacing:"0.12em",margin:0},children:s.fieldNote})}),X.jsx("button",{onClick:e,style:{position:"absolute",top:12,right:16,background:"rgba(0,0,0,0.5)",border:"none",color:"#fff",width:36,height:36,borderRadius:"50%",cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"}),X.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"20px 28px 14px"},children:X.jsx("h2",{style:{...kn,fontSize:"clamp(24px,5vw,52px)",fontWeight:900,color:"#111",lineHeight:1,margin:0,letterSpacing:"-0.02em"},children:s.tagline})})]}),X.jsxs("div",{style:{padding:"0 28px 48px"},children:[X.jsx("blockquote",{style:{...kn,fontSize:"clamp(15px,2.5vw,21px)",fontStyle:"italic",lineHeight:1.65,color:"#111",borderLeft:`5px solid ${gn}`,paddingLeft:18,margin:"22px 0",fontWeight:400},children:s.quote}),X.jsx("p",{style:{...$t,fontSize:"clamp(13px,2vw,16px)",lineHeight:1.85,color:"#333",marginBottom:24,maxWidth:720},children:s.context}),s.exponential&&X.jsxs("div",{style:{background:"#111",borderRadius:3,padding:"14px 18px",marginBottom:28,display:"flex",gap:14,alignItems:"flex-start"},children:[X.jsxs("div",{style:{background:f,padding:"4px 10px",borderRadius:2,flexShrink:0},children:[X.jsx("p",{style:{...ht,fontSize:8,letterSpacing:"0.15em",color:m,margin:0},children:"EXPONENTIAL PHASE"}),X.jsx("p",{style:{...kn,fontSize:16,fontWeight:700,color:m,margin:0},children:s.exponential.phase})]}),X.jsx("p",{style:{...$t,fontSize:13,color:"rgba(255,255,255,0.8)",lineHeight:1.65,margin:0},children:s.exponential.note})]}),X.jsxs("div",{style:{marginBottom:28},children:[X.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[X.jsx("div",{style:{width:32,height:3,background:gn}}),X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.28em",color:"#888",margin:0},children:"KEY METRICS · CITED RESEARCH"})]}),X.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10},children:s.metrics.map((p,v)=>X.jsx(R1,{metric:p,domainHex:f},v))})]}),X.jsx("div",{style:{display:"flex",gap:0,marginBottom:24,borderBottom:"2px solid #e0d8cc"},children:[["field","Field Reports"],["people","Builders"]].map(([p,v])=>X.jsx("button",{onClick:()=>l(p),style:{...ht,fontSize:9,letterSpacing:"0.15em",padding:"10px 18px",background:"none",border:"none",cursor:"pointer",borderBottom:`2px solid ${o===p?gn:"transparent"}`,color:o===p?"#111":"#888",marginBottom:"-2px"},children:v.toUpperCase()},p))}),o==="field"&&X.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:14},children:s.initiatives.map(p=>X.jsxs("div",{onClick:()=>r(p),style:{background:"#fff",border:"1px solid #e0d8cc",borderRadius:3,overflow:"hidden",cursor:"pointer",transition:"all .15s"},onMouseEnter:v=>{v.currentTarget.style.borderColor=f,v.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:v=>{v.currentTarget.style.borderColor="#e0d8cc",v.currentTarget.style.transform="translateY(0)"},children:[X.jsx("div",{style:{height:4,background:f}}),X.jsxs("div",{style:{padding:"16px 18px"},children:[X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8,marginBottom:6},children:[X.jsx("p",{style:{...ht,fontSize:8,letterSpacing:"0.16em",color:f==="#FFD60A"?"#b38f00":f,margin:0},children:p.org.toUpperCase()}),X.jsx(_0,{status:p.status})]}),X.jsx("h4",{style:{...kn,fontSize:17,fontWeight:700,color:"#111",lineHeight:1.2,margin:"0 0 8px"},children:p.name}),X.jsxs("p",{style:{...$t,fontSize:13,color:"#555",lineHeight:1.6,marginBottom:12},children:[p.desc.substring(0,155),"…"]}),X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[X.jsx("p",{style:{...$t,fontSize:11,color:"#888",fontStyle:"italic",margin:0},children:p.impact}),X.jsx("span",{style:{...ht,fontSize:9,color:f,letterSpacing:"0.08em"},children:"READ MORE →"})]})]})]},p.id))}),o==="people"&&u.length>0&&X.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:10},children:u.map(p=>X.jsxs("a",{href:p.links.web,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"flex",gap:12,alignItems:"flex-start",background:"#fff",border:"1px solid #e0d8cc",borderRadius:3,padding:"12px 14px",transition:"background .15s",color:"inherit"},onMouseEnter:v=>v.currentTarget.style.background="#f0ece4",onMouseLeave:v=>v.currentTarget.style.background="#fff",children:[X.jsx("div",{style:{width:38,height:38,borderRadius:"50%",background:f,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",...ht,fontSize:12,fontWeight:700,color:m},children:p.name.split(" ").map(v=>v[0]).slice(0,2).join("")}),X.jsxs("div",{children:[X.jsx("p",{style:{...kn,fontSize:14,fontWeight:700,color:"#111",margin:0},children:p.name}),X.jsx("p",{style:{...ht,fontSize:8,color:"#888",letterSpacing:"0.06em",margin:"2px 0 4px"},children:p.role.split(",")[0].split("&")[0].trim()}),X.jsxs("p",{style:{...$t,fontSize:11,color:"#666",fontStyle:"italic",lineHeight:1.45,margin:0},children:['"',p.moonshot.substring(0,75),'…"']})]})]},p.name))})]})]}),t&&X.jsx(P1,{init:t,domain:s,onClose:()=>r(null)})]})}function D1(){const[s,e]=ln.useState("all"),[t,r]=ln.useState(""),[o,l]=ln.useState(""),[u,f]=ln.useState(""),[m,p]=ln.useState(!1),v=Object.fromEntries(uo.map(S=>[S.id,S.hex])),y=g0.filter(S=>(s==="all"||S.domain===s)&&S.name.toLowerCase().includes(t.toLowerCase())),g=ln.useCallback(async()=>{if(o.trim()){p(!0),f("");try{const S=await v0(`You are a National Geographic field correspondent covering the Second Renaissance for Singularity University. Research with rigor:

"${o}"

Provide: Specific data with sources and dates, key organizations/people, 2024-2025 milestones, concrete upcoming timeline. Cite exact numbers and institutions. Format as 3-4 paragraphs.`);f(S)}catch{f("Research engine requires VITE_ANTHROPIC_API_KEY.")}p(!1)}},[o]);return X.jsx("section",{style:{background:"#020810",padding:"80px 24px 100px",position:"relative",zIndex:1},children:X.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[X.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[X.jsx("div",{style:{display:"inline-block",background:gn,padding:"6px 20px",marginBottom:14},children:X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.38em",color:"#000",margin:0},children:"NATIONAL GEOGRAPHIC · SECOND RENAISSANCE SPECIAL"})}),X.jsx("h2",{style:{...kn,fontSize:"clamp(28px,5vw,54px)",fontWeight:900,lineHeight:1,color:"#EEF2FF",letterSpacing:"-0.02em",marginBottom:14},children:"Dream 100 Builders"}),X.jsx("p",{style:{...$t,color:"rgba(238,242,255,0.5)",fontSize:16,maxWidth:520,margin:"0 auto",lineHeight:1.8},children:"The architects of the Second Renaissance — scientists, founders, philosophers, and artists building the cathedrals of our age."})]}),X.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,padding:"20px 24px",marginBottom:40,borderTop:`3px solid ${gn}`},children:[X.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:14},children:[X.jsxs("div",{children:[X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.28em",color:gn,margin:0},children:"⚡ LIVE RESEARCH ENGINE · CLAUDE AI + WEB SEARCH"}),X.jsx("p",{style:{...kn,fontSize:18,fontWeight:700,color:"#EEF2FF",margin:"2px 0 0"},children:"Field Dispatch"})]}),!sa()&&X.jsx("p",{style:{...ht,fontSize:8,color:"rgba(238,242,255,0.3)",letterSpacing:"0.1em",margin:0,paddingTop:4},children:"SET VITE_ANTHROPIC_API_KEY TO ENABLE"})]}),X.jsxs("div",{style:{display:"flex",gap:8},children:[X.jsx("input",{value:o,onChange:S=>l(S.target.value),onKeyDown:S=>S.key==="Enter"&&g(),placeholder:'Search any moonshot, person, or initiative — e.g. "latest fusion breakthroughs 2025"',style:{flex:1,...$t,fontSize:14,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:3,padding:"11px 16px",color:"#EEF2FF",outline:"none"}}),X.jsx("button",{onClick:g,disabled:m||!sa(),style:{...ht,fontSize:9,letterSpacing:"0.18em",padding:"11px 20px",background:gn,color:"#000",border:"none",borderRadius:3,cursor:sa()?"pointer":"not-allowed",flexShrink:0,opacity:sa()?1:.45,whiteSpace:"nowrap"},children:m?"SEARCHING…":"DISPATCH →"})]}),u&&X.jsx("div",{style:{marginTop:18,borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:18},children:u.split(`

`).filter(S=>S.trim()).map((S,w,A)=>X.jsx("p",{style:{...$t,fontSize:14,lineHeight:1.8,color:"rgba(238,242,255,0.82)",marginBottom:w<A.length-1?12:0},children:S},w))})]}),X.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:28,alignItems:"center"},children:[[["all","All Domains"],...uo.map(S=>[S.id,S.label])].map(([S,w])=>{const A=S==="all"?gn:v[S]||"#888",_=s===S;return X.jsx("button",{onClick:()=>e(S),style:{...ht,fontSize:8,letterSpacing:"0.14em",padding:"6px 14px",border:`1px solid ${_?A:"rgba(255,255,255,0.1)"}`,background:_?`${A}22`:"rgba(255,255,255,0.03)",color:_?A:"rgba(238,242,255,0.5)",borderRadius:2,cursor:"pointer",whiteSpace:"nowrap"},children:w.toUpperCase()},S)}),X.jsx("input",{value:t,onChange:S=>r(S.target.value),placeholder:"Search name…",style:{...$t,flex:1,minWidth:160,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:2,padding:"6px 12px",color:"#EEF2FF",fontSize:13,outline:"none"}})]}),X.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12},children:y.map(S=>{const w=v[S.domain]||"#888",A=w==="#FFD60A";return X.jsxs("a",{href:S.links.web,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"block",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:3,overflow:"hidden",transition:"all .15s",color:"inherit"},onMouseEnter:_=>{_.currentTarget.style.background="rgba(255,255,255,0.07)",_.currentTarget.style.borderColor=w+"50"},onMouseLeave:_=>{_.currentTarget.style.background="rgba(255,255,255,0.03)",_.currentTarget.style.borderColor="rgba(255,255,255,0.06)"},children:[X.jsx("div",{style:{height:3,background:w}}),X.jsxs("div",{style:{padding:"14px 16px"},children:[X.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",marginBottom:10},children:[X.jsx("div",{style:{width:42,height:42,borderRadius:"50%",background:w,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",...ht,fontSize:13,fontWeight:700,color:A?"#000":"#fff"},children:S.name.split(" ").map(_=>_[0]).slice(0,2).join("")}),X.jsxs("div",{children:[X.jsx("p",{style:{...kn,fontSize:15,fontWeight:700,color:"#EEF2FF",margin:0,lineHeight:1.15},children:S.name}),X.jsx("p",{style:{...ht,fontSize:8,color:A?"#cca800":w,letterSpacing:"0.07em",margin:"3px 0 0",lineHeight:1.3},children:S.role})]})]}),X.jsxs("p",{style:{...$t,fontSize:12,color:"rgba(238,242,255,0.48)",lineHeight:1.55,fontStyle:"italic",margin:0},children:['"',S.moonshot.substring(0,100),S.moonshot.length>100?"…":"",'"']})]})]},S.name)})}),y.length===0&&X.jsx("p",{style:{...$t,textAlign:"center",color:"rgba(238,242,255,0.3)",fontSize:15,padding:"40px 0"},children:"No builders match your search."})]})})}function L1(){C1();const s=ln.useRef(null),e=ln.useRef({sel:null,setSel:null}),[t,r]=ln.useState(null),[o,l]=ln.useState(!1);ln.useEffect(()=>{e.current.sel=t,e.current.setSel=r}),ln.useEffect(()=>{const f=s.current;if(!f)return;const m=f.offsetWidth,p=f.offsetHeight,v=new b1({antialias:!0});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(m,p),v.toneMapping=Uf,v.toneMappingExposure=1.2,f.appendChild(v.domElement);const y=new nx;y.background=new xt(67092);const g=new ei(52,m/p,.1,500);g.position.set(0,1.4,5.2),g.lookAt(0,0,0),y.add(new Ax(1712708,.55));const S=new ag(16771248,2.2);S.position.set(7,3,2),y.add(S);const w=new ag(4487167,.55);w.position.set(-5,0,-3),y.add(w);const A=[],_=[];for(let he=0;he<7e3;he++){const Me=45+Math.random()*170,we=Math.random()*2*Math.PI,ze=Math.acos(2*Math.random()-1);A.push(Me*Math.sin(ze)*Math.cos(we),Me*Math.sin(ze)*Math.sin(we),Me*Math.cos(ze));const et=Math.random();et>.96?_.push(1,.85,.65):et>.92?_.push(.75,.85,1):_.push(1,1,1)}const x=new Dn;x.setAttribute("position",new vn(A,3)),x.setAttribute("color",new vn(_,3)),y.add(new mx(x,new n0({size:.07,vertexColors:!0,transparent:!0,opacity:.9})));const C=document.createElement("canvas");C.width=512,C.height=256;const P=C.getContext("2d"),I=P.createLinearGradient(0,0,512,256);I.addColorStop(0,"#06305a"),I.addColorStop(1,"#0a4070"),P.fillStyle=I,P.fillRect(0,0,512,256),P.fillStyle="#1b5e30",[[110,90,44,54,-.3],[148,172,26,44,.1],[260,78,25,34,.1],[268,162,32,52,0],[375,78,68,48,-.1],[418,174,28,20,.2]].forEach(([he,Me,we,ze,et])=>{P.save(),P.translate(he,Me),P.beginPath(),P.ellipse(0,0,we,ze,et,0,2*Math.PI),P.fill(),P.restore()}),P.fillStyle="rgba(200,228,255,.55)",P.fillRect(0,0,512,16),P.fillRect(0,242,512,14);const z=new jl({map:new eg(C),specular:new xt(3368601),shininess:80,emissive:new xt(3362)}),D=new Rn(new Fr(1,64,64),z);y.add(D);const k=new Rn(new Fr(1.04,32,32),new jl({color:5614335,transparent:!0,opacity:.09,side:or,depthWrite:!1,blending:ia}));y.add(k),y.add(new Rn(new Fr(1.13,32,32),new jl({color:2250188,transparent:!0,opacity:.04,side:Bn,depthWrite:!1,blending:ia})));const T=new ra;T.rotation.x=.24,y.add(T),T.add(new Rn(new qf(1.93,1.95,128),new co({color:3359846,transparent:!0,opacity:.22,side:Ni})));const N=he=>{const Me=document.createElement("canvas");Me.width=320,Me.height=56;const we=Me.getContext("2d");we.font="bold 14px 'Cinzel',sans-serif",we.fillStyle=he.hex,we.textAlign="center",we.shadowColor=he.hex,we.shadowBlur=8,we.fillText(he.emoji+"  "+he.label,160,36);const ze=new lx(new Qg({map:new eg(Me),transparent:!0,depthWrite:!1}));return ze.scale.set(1.55,.27,1),ze.position.y=.37,ze},Y=[];uo.forEach((he,Me)=>{const we=Me/uo.length*Math.PI*2,ze=new ra;ze.position.set(Math.cos(we)*2,0,Math.sin(we)*2),ze.userData.id=he.id;const et=new xt(he.hex),dt=new Rn(new Fr(.1,24,24),new jl({color:et,emissive:et,emissiveIntensity:.6,shininess:120}));ze.add(dt);const bt=new Rn(new Fr(.2,16,16),new co({color:et,transparent:!0,opacity:.13,depthWrite:!1,blending:ia}));ze.add(bt);const at=new Rn(new Fr(.32,12,12),new co({color:et,transparent:!0,opacity:.05,depthWrite:!1,blending:ia}));ze.add(at),ze.add(new Tx(he.hex,.4,2.8)),ze.add(N(he)),T.add(ze),Y.push({g:ze,d:he,core:dt,h1:bt,h2:at})});let U=null;const J=()=>{const he=e.current.sel,Me=Y.find(we=>we.d.id===he);if(Me&&!U){const we=new $;Me.g.getWorldPosition(we),U=new px(new Dn().setFromPoints([new $,we]),new t0({color:16777215,transparent:!0,opacity:.2})),y.add(U)}else if(!Me&&U)y.remove(U),U.geometry.dispose(),U.material.dispose(),U=null;else if(Me&&U){const we=new $;Me.g.getWorldPosition(we);const ze=U.geometry.attributes.position;ze.setXYZ(1,we.x,we.y,we.z),ze.needsUpdate=!0}},ce=new Px,de=new gt(-5,-5);let G=!1,ee={x:0,y:0},j={x:0},q=!0;const le=he=>{const Me=f.getBoundingClientRect();if(de.set((he.clientX-Me.left)/Me.width*2-1,-((he.clientY-Me.top)/Me.height)*2+1),G){const we=he.clientX-j.x;T.rotation.y+=we*.005,D.rotation.y+=we*.003,j={x:he.clientX,y:he.clientY},q=!1}},oe=he=>{G=!0,ee=j={x:he.clientX,y:he.clientY}},F=he=>{if(G&&(G=!1,Math.abs(he.clientX-ee.x)<6&&Math.abs(he.clientY-ee.y)<6)){ce.setFromCamera(de,g);const Me=ce.intersectObjects(Y.map(we=>we.core));if(Me.length){const we=Y.find(ze=>ze.core===Me[0].object);if(we){const ze=we.d.id;e.current.setSel(e.current.sel===ze?null:ze)}}else e.current.setSel(null)}},Q=he=>{he.touches.length===1&&(G=!0,ee=j={x:he.touches[0].clientX,y:he.touches[0].clientY})},Ue=he=>{if(he.touches.length===1&&G){const Me=he.touches[0].clientX-j.x;T.rotation.y+=Me*.005,D.rotation.y+=Me*.003,j={x:he.touches[0].clientX,y:he.touches[0].clientY},q=!1}},We=he=>{if(!G)return;G=!1;const Me=he.changedTouches[0];if(Math.abs(Me.clientX-ee.x)<12&&Math.abs(Me.clientY-ee.y)<12){const we=f.getBoundingClientRect();de.set((Me.clientX-we.left)/we.width*2-1,-((Me.clientY-we.top)/we.height)*2+1),ce.setFromCamera(de,g);const ze=ce.intersectObjects(Y.map(et=>et.core));if(ze.length){const et=Y.find(dt=>dt.core===ze[0].object);if(et){const dt=et.d.id;e.current.setSel(e.current.sel===dt?null:dt)}}else e.current.setSel(null)}};f.addEventListener("mousemove",le),f.addEventListener("mousedown",oe),f.addEventListener("mouseup",F),f.addEventListener("touchstart",Q,{passive:!0}),f.addEventListener("touchmove",Ue,{passive:!0}),f.addEventListener("touchend",We);const Fe=()=>{const he=f.offsetWidth,Me=f.offsetHeight;g.aspect=he/Me,g.updateProjectionMatrix(),v.setSize(he,Me)};window.addEventListener("resize",Fe);let se,ve=0;const ge=()=>{var we;se=requestAnimationFrame(ge),ve+=.012,q&&(T.rotation.y+=.0016),D.rotation.y+=7e-4,k.material.opacity=.07+Math.sin(ve*.4)*.02,S.intensity=2+Math.sin(ve*.15)*.2,ce.setFromCamera(de,g);const he=ce.intersectObjects(Y.map(ze=>ze.core)),Me=he.length?(we=Y.find(ze=>ze.core===he[0].object))==null?void 0:we.d.id:null;f.style.cursor=Me?"pointer":"grab",Y.forEach((ze,et)=>{const dt=ze.d.id===e.current.sel,bt=ze.d.id===Me,at=dt?1.9:bt?1.45:1,Ut=ze.core.scale.x+(at-ze.core.scale.x)*.1;ze.core.scale.setScalar(Ut),ze.h1.scale.setScalar(Ut),ze.h2.scale.setScalar(Ut),ze.core.material.emissiveIntensity=dt?.7+Math.sin(ve*3)*.25:.4+Math.sin(ve*.7+et*.8)*.12}),J(),v.render(y,g)};return ge(),setTimeout(()=>l(!0),300),()=>{cancelAnimationFrame(se),window.removeEventListener("resize",Fe),f.removeEventListener("mousemove",le),f.removeEventListener("mousedown",oe),f.removeEventListener("mouseup",F),f.removeEventListener("touchstart",Q),f.removeEventListener("touchmove",Ue),f.removeEventListener("touchend",We),v.dispose();try{f.removeChild(v.domElement)}catch{}}},[]);const u=uo.find(f=>f.id===t);return X.jsxs("div",{style:{background:"#010614",minHeight:"100vh",color:"#EEF2FF"},children:[X.jsx("style",{children:"@keyframes fadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#333;border-radius:2px}img{display:block}"}),X.jsxs("div",{style:{height:"100vh",position:"relative",overflow:"hidden"},children:[X.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),o&&X.jsxs(X.Fragment,{children:[X.jsxs("div",{style:{position:"absolute",top:"7%",left:0,right:0,textAlign:"center",zIndex:10,pointerEvents:"none",animation:"fadeIn 1.5s ease forwards"},children:[X.jsx("div",{style:{display:"inline-block",background:gn,padding:"6px 18px",marginBottom:14},children:X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.4em",color:"#000",margin:0},children:"NATIONAL GEOGRAPHIC · SECOND RENAISSANCE SPECIAL EDITION"})}),X.jsx("br",{}),X.jsxs("h1",{style:{...kn,fontSize:"clamp(26px,5.5vw,62px)",fontWeight:900,letterSpacing:"0.04em",lineHeight:1.05,background:"linear-gradient(135deg,#E040FB,#9C27B0 45%,#40C4FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",filter:"drop-shadow(0 0 50px rgba(156,39,176,0.55))"},children:["THE SECOND",X.jsx("br",{}),"RENAISSANCE"]}),X.jsx("p",{style:{...$t,color:"rgba(238,242,255,0.42)",fontSize:"clamp(12px,1.8vw,15px)",maxWidth:460,margin:"10px auto 0",lineHeight:1.85},children:"The civilizational map of our era. 7 domains. 28 initiatives. 48 builders. All converging toward a single inflection point. You are here."})]}),X.jsx("div",{style:{position:"absolute",bottom:"5%",left:0,right:0,textAlign:"center",zIndex:10,pointerEvents:"none"},children:X.jsx("p",{style:{...ht,fontSize:"clamp(7px,.9vw,9px)",letterSpacing:"0.3em",color:"rgba(238,242,255,0.22)"},children:"DRAG TO ROTATE  ·  CLICK A NODE TO EXPLORE  ·  SCROLL TO DISCOVER"})})]})]}),u&&X.jsx(I1,{domain:u,onClose:()=>r(null)}),X.jsx(D1,{}),X.jsx("section",{style:{background:"#020a1e",padding:"80px 24px",position:"relative",zIndex:1},children:X.jsxs("div",{style:{maxWidth:780,margin:"0 auto"},children:[X.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[X.jsx("div",{style:{display:"inline-block",background:gn,padding:"5px 16px",marginBottom:12},children:X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.3em",color:"#000",margin:0},children:"NATIONAL GEOGRAPHIC · THE LONG VIEW"})}),X.jsx("h2",{style:{...kn,fontSize:"clamp(22px,4vw,42px)",fontWeight:900,color:"#EEF2FF",lineHeight:1.05,marginBottom:12},children:"History's moonshots, mapped"}),X.jsx("p",{style:{...$t,color:"rgba(238,242,255,0.45)",fontSize:15,maxWidth:480,margin:"0 auto",lineHeight:1.8},children:"Not goals. Not KPIs. Every civilizational leap was driven by people who committed to something they couldn't fully imagine — before they knew it was possible."})]}),X.jsxs("div",{style:{position:"relative",paddingLeft:28},children:[X.jsx("div",{style:{position:"absolute",left:6,top:0,bottom:0,width:1,background:"linear-gradient(to bottom,transparent,rgba(255,204,0,0.5),rgba(64,196,255,0.4),rgba(224,64,251,0.5),transparent)"}}),A1.map((f,m)=>X.jsxs("div",{style:{position:"relative",marginBottom:22,paddingLeft:18},children:[X.jsx("div",{style:{position:"absolute",left:-27,top:9,width:8,height:8,borderRadius:"50%",background:f.c,boxShadow:`0 0 10px ${f.c}`}}),X.jsxs("div",{style:{background:f.isYou?`${gn}14`:"rgba(255,255,255,0.025)",border:`0.5px solid ${f.c}35`,borderRadius:3,padding:"11px 15px",borderLeft:f.isYou?`2px solid ${gn}`:"none"},children:[X.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:4,flexWrap:"wrap"},children:[X.jsx("span",{style:{...ht,fontSize:8,color:f.c,letterSpacing:"0.14em",background:`${f.c}1E`,padding:"2px 8px",borderRadius:2},children:f.era.toUpperCase()}),X.jsx("span",{style:{...$t,color:"rgba(238,242,255,0.35)",fontSize:11},children:f.y})]}),X.jsx("p",{style:{fontWeight:600,fontSize:13,color:f.isYou?gn:"#EEF2FF",marginBottom:3,...f.isYou?ht:{}},children:f.isYou?"YOUR NAME HERE":f.w}),X.jsx("p",{style:{...$t,fontSize:13,color:"rgba(238,242,255,0.55)",fontStyle:"italic",lineHeight:1.5,margin:0},children:f.m}),f.isYou&&X.jsx("a",{href:"https://devonseegers-ops.github.io/whatsmymoonshot/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",marginTop:8,background:gn,color:"#000",padding:"4px 14px",borderRadius:2,fontSize:9,textDecoration:"none",...ht,letterSpacing:"0.12em",fontWeight:700},children:"NAME IT NOW →"})]})]},m))]})]})}),X.jsxs("section",{style:{padding:"72px 24px 100px",textAlign:"center",background:"radial-gradient(ellipse at center,rgba(224,64,251,0.08) 0%,transparent 60%)"},children:[X.jsx("div",{style:{display:"inline-block",background:gn,padding:"6px 18px",marginBottom:16},children:X.jsx("p",{style:{...ht,fontSize:9,letterSpacing:"0.35em",color:"#000",margin:0},children:"YOUR ROLE IN THE RENAISSANCE"})}),X.jsxs("h2",{style:{...kn,fontSize:"clamp(24px,5vw,52px)",fontWeight:900,lineHeight:1.08,marginBottom:22,background:"linear-gradient(135deg,#E040FB,#9C27B0,#40C4FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:["The Second Renaissance",X.jsx("br",{}),"needs your moonshot."]}),X.jsxs("div",{style:{maxWidth:580,margin:"0 auto 30px",background:"rgba(255,255,255,0.025)",border:"0.5px solid rgba(224,64,251,0.22)",borderRadius:4,padding:"22px 28px"},children:[X.jsx("p",{style:{...ht,fontSize:8,letterSpacing:"0.22em",color:"rgba(224,64,251,0.65)",marginBottom:10},children:"DEVON SEEGERS  ·  FOUNDER  ·  SECOND RENAISSANCE BUILDER"}),X.jsx("p",{style:{...$t,fontStyle:"italic",fontSize:"clamp(15px,2.5vw,20px)",lineHeight:1.75,color:"rgba(238,242,255,0.9)"},children:'"I am here to move souls, unite hearts, and raise the consciousness of humanity through music, art, and agentic systems so that the world remembers what it feels like to be alive, connected, and free."'})]}),X.jsx("a",{href:"https://devonseegers-ops.github.io/whatsmymoonshot/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",background:gn,color:"#000",padding:"14px 36px",borderRadius:2,fontSize:11,textDecoration:"none",...ht,letterSpacing:"0.18em",fontWeight:700,marginBottom:12},children:"✦  DISCOVER YOUR MOONSHOT  →"}),X.jsx("br",{}),X.jsx("a",{href:"https://devonseegers.com",target:"_blank",rel:"noopener noreferrer",style:{...ht,color:"rgba(255,204,0,0.55)",fontSize:9,letterSpacing:"0.14em",textDecoration:"none"},children:"MOONSHOT MAPPING™ WITH DEVON SEEGERS →"})]})]})}s_.createRoot(document.getElementById("root")).render(X.jsx(ln.StrictMode,{children:X.jsx(L1,{})}));
