/******/!function(){// webpackBootstrap
/******/var n={
/***/"./src/components/App/App.js":
/***/function(n,r,i){"use strict";i.r(r);
/* harmony import */var u=i("./src/components/Demo/Demo.js"),l=(i("./src/components/App/App.css"),i("../node_modules/react/jsx-runtime.js"));
/* harmony import */ /* harmony default export */r.default=function App(){return(0,l.jsxs)("div",{className:"app",children:[(0,l.jsxs)("div",{className:"app-container",children:[(0,l.jsxs)("header",{className:"app-header",children:[(0,l.jsx)("h1",{className:"title",children:"@bit-about/state"}),(0,l.jsx)("small",{children:"\ud83d\ude80 Tiny and powerful React hook-based state management library."}),(0,l.jsxs)("ul",{className:"menu",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"link",href:"https://github.com/bit-about/state",target:"_blank",rel:"noopener noreferrer",children:"github"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"link",href:"https://www.npmjs.com/package/@bit-about/state",target:"_blank",rel:"noopener noreferrer",children:"npm"})})]})]}),(0,l.jsx)(u.default,{})]}),(0,l.jsx)("p",{className:"footer",children:"\ud83c\udf89 Redux DevTools works on this page"})]})}},
/***/"./src/components/Demo/Demo.js":
/***/function(n,r,i){"use strict";i.r(r);
/* harmony import */var u=i("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=i("../node_modules/react/index.js"),d=i("../dist/index.js"),p=(i("./src/components/Demo/Demo.css"),i("../node_modules/react/jsx-runtime.js")),f=(0,d.state)((function useCustomState(n){var r=n.alice,i=(0,l.useState)(r),d=(0,u.default)(i,2),p=d[0],f=d[1],m=(0,l.useState)(0),h=(0,u.default)(m,2);return{aliceValue:p,setAliceValue:f,bobValue:h[0],setBobValue:h[1]}})),m=(0,u.default)(f,2),h=m[0],v=(m[1],function useForceUpdate(){var n=(0,l.useState)(),r=(0,u.default)(n,2)[1];return function(){return r({})}}),g=function RenderCounter(){var n=(0,l.useRef)(0);return n.current=n.current+1,(0,p.jsxs)("span",{className:"container-info",children:["render count: ",n.current]})};
/* harmony import */
/**
 * COMPONENT_1
 */
function AliceBox(){var n=(0,l.useState)(10),r=(0,u.default)(n,2);r[0],r[1],v();return(0,p.jsxs)("div",{className:"container column ",children:[(0,p.jsx)("span",{className:"container-title",children:"component_1"}),(0,p.jsx)(g,{})]})}
/**
 * main component aka APP
 */ /* harmony default export */r.default=function Demo(){var n=(0,l.useState)(10),r=(0,u.default)(n,2),i=r[0],d=(r[1],v());return(0,p.jsxs)("div",{className:"container column demo",children:[(0,p.jsx)("span",{className:"container-title",children:"app"}),(0,p.jsx)(g,{}),(0,p.jsxs)("div",{className:"row desktop-right forced",children:[(0,p.jsx)("button",{className:"button",children:"Change state props"}),(0,p.jsx)("button",{className:"button",onClick:d,children:"Rerender"})]}),(0,p.jsx)(h,{alice:i,children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)(AliceBox,{}),(0,p.jsx)("div",{className:"container"})]})})]})}},
/***/"./src/reportWebVitals.js":
/***/function(n,r,i){"use strict";i.r(r);/* harmony default export */r.default=function reportWebVitals(n){n&&n instanceof Function&&i.e(/* import() */"node_modules_web-vitals_dist_web-vitals_js").then(i.bind(i,"./node_modules/web-vitals/dist/web-vitals.js")).then((function(r){var i=r.getCLS,u=r.getFID,l=r.getFCP,d=r.getLCP,p=r.getTTFB;i(n),u(n),l(n),d(n),p(n)}))}},
/***/"../dist/index.js":
/***/function(n,r,i){var u=i("../node_modules/react/index.js"),l=i("../node_modules/scheduler/index.js");function t(n){if(n&&n.__esModule)return n;var r=Object.create(null);return n&&Object.keys(n).forEach((function(i){if("default"!==i){var u=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(r,i,u.get?u:{enumerable:!0,get:function get(){return n[i]}})}})),r.default=n,r}var d=t(u),p=function o(n){var r={};return n(r)!=n(r)},f="function"==typeof Object.is?Object.is:function(n,r){return n===r&&(0!==n||1/n==1/r)||n!=n&&r!=r},m=function c(n){return"object"==typeof n&&!!n},h=function a(n,r){if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!f(n[i],r[i]))return!1;return!0},v=function s(n,r){return n===r||(Array.isArray(n)&&Array.isArray(r)?h(n,r):m(n)&&m(r)?!!h(Object.keys(n),Object.keys(r))&&!!h(Object.values(n),Object.values(r)):f(n,r))},g=f,y="undefined"!=typeof window&&window.document&&window.document.createElement?d.useLayoutEffect:d.useEffect,b=["children"],C=u.createContext({name:{current:"@bit-about/state"},actionsQueue:{current:[]}});"undefined"!=typeof window&&Boolean(window.__REDUX_DEVTOOLS_EXTENSION__),r.state=function(n){var r=[],i={state:void 0},u=function(n,r){var i=d.createContext({value:{current:{}},version:{current:-1},listeners:n});return i.Provider=function(n,r){var i=function o(i){var o=d.useRef(i.value),u=d.useRef(0),p=d.useRef();return p.current||(p.current={value:o,version:u,listeners:n}),y((function(){o.current=i.value,u.current+=1,l.unstable_runWithPriority(l.unstable_NormalPriority,(function(){p.current.listeners.forEach((function(n){n([u.current,i.value])}))}))}),[i.value]),d.createElement(r,{value:p.current},i.children)};return i.displayName="BitAboutState.Provider",i}(n,i.Provider),delete i.Consumer,i}(r);return[function(r){var l=r.children,p=function(n,r){if(null==n)return{};var i,u,l={},d=Object.keys(n);for(u=0;u<d.length;u++)r.indexOf(i=d[u])>=0||(l[i]=n[i]);return l}(r,b),f=n(p);return i.state=f,d.createElement(u.Provider,{value:f},l)},function(n){return void 0===n&&(n=function e(n){return n}),function(n,r){var i=d.useContext(n),u=i.value.current,l=i.version.current,f=i.listeners;-1===l&&console.warn("The context hook must be used in component wrapped with its corresponding Provider");var m=r(u),h=p(r)?v:g,b=g,C=d.useReducer((function(n,i){var d=[u,m],p=n;if(!i)return d;var f=n[0],v=n[1],g=i[1];if(i[0]<=l)return h(v,m)?p:d;try{if(b(f,g))return p;var y=r(g);return h(v,y)?p:[g,y]}catch(n){}return console.warn("Library discovered stale props issue"),[f,v]}),[u,m]),k=C[1];return h(C[0][1],m)||k(void 0),y((function(){return f.push(k),function(){var n=f.indexOf(k);f.splice(n,1)}}),[f]),m}(u,n)},function e(n){return{get:function get(){return void 0!==i.state?n(i.state):void 0},select:function select(r){return e((function(i){return r(n(i))}))},subscribe:function subscribe(u){var l={current:void 0!==i.state?n(i.state):void 0},d=p(n)?v:g,f=function c(r){var i=n(r[1]);d(l.current,i)||(l.current=i,u(i))};return r.push(f),{unsubscribe:function unsubscribe(){var n=r.indexOf(f);r.splice(n,1)}}}}}((function(n){return n}))]},r.useSideEffect=function(n,r){var i=u.useContext(C).actionsQueue;return u.useCallback((function(){var u=[].slice.call(arguments);return i.current.push({type:"ACTION/"+r,payload:u}),n.apply(void 0,u)}),[])},r.useStoreName=function(n){u.useContext(C).name.current=n}},
/***/"../node_modules/object-assign/index.js":
/***/function(n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function toObject(n){if(null===n||void 0===n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}n.exports=function shouldUseNative(){try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var n=new String("abc");// eslint-disable-line no-new-wrappers
if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var r={},i=0;i<10;i++)r["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(n){return r[n]})).join(""))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var u={};return"abcdefghijklmnopqrst".split("").forEach((function(n){u[n]=n})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},u)).join("")}catch(l){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(n,l){for(var d,p,f=toObject(n),m=1;m<arguments.length;m++){for(var h in d=Object(arguments[m]))i.call(d,h)&&(f[h]=d[h]);if(r){p=r(d);for(var v=0;v<p.length;v++)u.call(d,p[v])&&(f[p[v]]=d[p[v]])}}return f}},
/***/"../node_modules/prop-types/checkPropTypes.js":
/***/function(n,r,i){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=function printWarning(){},l=i("../node_modules/prop-types/lib/ReactPropTypesSecret.js"),d={},p=i("../node_modules/prop-types/lib/has.js");
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(n,r,i,f,m){for(var h in n)if(p(n,h)){var v;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!==typeof n[h]){var g=Error((f||"React class")+": "+i+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw g.name="Invariant Violation",g}v=n[h](r,h,f,i,null,l)}catch(b){v=b}if(!v||v instanceof Error||u((f||"React class")+": type specification of "+i+" `"+h+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof v+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),v instanceof Error&&!(v.message in d)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
d[v.message]=!0;var y=m?m():"";u("Failed "+i+" type: "+v.message+(null!=y?y:""))}}}
/**
 * Resets warning cache when testing.
 *
 * @private
 */u=function printWarning(n){var r="Warning: "+n;"undefined"!==typeof console&&console.error(r);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(r)}catch(i){
}},checkPropTypes.resetWarningCache=function(){d={}},n.exports=checkPropTypes},
/***/"../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/function(n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},
/***/"../node_modules/prop-types/lib/has.js":
/***/function(n){n.exports=Function.call.bind(Object.prototype.hasOwnProperty);
/***/},
/***/"../node_modules/react-dom/cjs/react-dom.development.js":
/***/function(n,r,i){"use strict";
/** @license React v16.14.0
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n=i("../node_modules/react/index.js"),u=i("../node_modules/object-assign/index.js"),l=i("../node_modules/react-dom/node_modules/scheduler/index.js"),d=i("../node_modules/prop-types/checkPropTypes.js"),p=i("../node_modules/react-dom/node_modules/scheduler/tracing.js"),f=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;// by calls to these methods by a Babel plugin.
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function warn(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];printWarning("warn",n,i)}function error(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];printWarning("error",n,i)}function printWarning(n,r,i){if(!(i.length>0&&"string"===typeof i[i.length-1]&&0===i[i.length-1].indexOf("\n    in"))){var u=f.ReactDebugCurrentFrame.getStackAddendum();""!==u&&(r+="%s",i=i.concat([u]))}var l=i.map((function(n){return""+n}));// Careful: RN currently depends on this prefix
l.unshift("Warning: "+r),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[n],console,l);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var d=0,p="Warning: "+r.replace(/%s/g,(function(){return i[d++]}));throw new Error(p)}catch(m){}}if(// Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.
f.hasOwnProperty("ReactCurrentDispatcher")||(f.ReactCurrentDispatcher={current:null}),f.hasOwnProperty("ReactCurrentBatchConfig")||(f.ReactCurrentBatchConfig={suspense:null}),!n)throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");var m=function invokeGuardedCallbackImpl(n,r,i,u,l,d,p,f,m){var h=Array.prototype.slice.call(arguments,3);try{r.apply(i,h)}catch(error){this.onError(error)}};
// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if("undefined"!==typeof window&&"function"===typeof window.dispatchEvent&&"undefined"!==typeof document&&"function"===typeof document.createEvent){var h=document.createElement("react");m=function invokeGuardedCallbackDev(n,r,i,u,l,d,p,f,m){
// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebookincubator/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if("undefined"===typeof document)throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var v,g=document.createEvent("Event"),y=!0,b=window.event,C=Object.getOwnPropertyDescriptor(window,"event"),k=Array.prototype.slice.call(arguments,3);// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
function callCallback(){
// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
h.removeEventListener(x,callCallback,!1),// We check for window.hasOwnProperty('event') to prevent the
// window.event assignment in both IE <= 10 as they throw an error
// "Member not found" in strict mode, and in Firefox which does not
// support window.event.
"undefined"!==typeof window.event&&window.hasOwnProperty("event")&&(window.event=b),r.apply(i,k),y=!1}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
// Use this to track whether the error event is ever called.
var w=!1,T=!1;function handleWindowError(n){if(v=n.error,w=!0,null===v&&0===n.colno&&0===n.lineno&&(T=!0),n.defaultPrevented&&null!=v&&"object"===typeof v)try{v._suppressLogging=!0}catch(r){// Ignore.
}}// Create a fake event type.
var x="react-"+(n||"invokeguardedcallback");// Attach our event handlers
window.addEventListener("error",handleWindowError),h.addEventListener(x,callCallback,!1),// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
g.initEvent(x,!1,!1),h.dispatchEvent(g),C&&Object.defineProperty(window,"event",C),y&&(w?T&&(v=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")):
// The callback errored, but the error event never fired.
v=new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),this.onError(v)),// Remove our event listeners
window.removeEventListener("error",handleWindowError)}}var v=m,g=!1,y=null,b=!1,C=null,k={onError:function onError(n){g=!0,y=n}};
/**
     * Call a function while guarding against errors that happens within it.
     * Returns an error if it throws, otherwise null.
     *
     * In production, this is implemented using a try-catch. The reason we don't
     * use a try-catch directly is so that we can swap out a different
     * implementation in DEV mode.
     *
     * @param {String} name of the guard to use for logging or debugging
     * @param {Function} func The function to invoke
     * @param {*} context The context to use when calling the function
     * @param {...*} args Arguments for function
     */
function invokeGuardedCallback(n,r,i,u,l,d,p,f,m){g=!1,y=null,v.apply(k,arguments)}
/**
     * Same as invokeGuardedCallback, but instead of returning an error, it stores
     * it in a global so it can be rethrown by `rethrowCaughtError` later.
     * TODO: See if caughtError and rethrowError can be unified.
     *
     * @param {String} name of the guard to use for logging or debugging
     * @param {Function} func The function to invoke
     * @param {*} context The context to use when calling the function
     * @param {...*} args Arguments for function
     */function hasCaughtError(){return g}function clearCaughtError(){if(g){var n=y;return g=!1,y=null,n}throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}var w,T=null,x=null,S=null;
/**
     * Dispatch the event to the listener.
     * @param {SyntheticEvent} event SyntheticEvent to handle
     * @param {function} listener Application-level callback
     * @param {*} inst Internal component instance
     */
function executeDispatch(n,r,i){var u=n.type||"unknown-event";n.currentTarget=S(i),function invokeGuardedCallbackAndCatchFirstError(n,r,i,u,l,d,p,f,m){if(invokeGuardedCallback.apply(this,arguments),g){var h=clearCaughtError();b||(b=!0,C=h)}}
/**
     * During execution of guarded functions we will capture the first error which
     * we will rethrow to be handled by the top level error handler.
     */(u,r,void 0,n),n.currentTarget=null}
/**
     * Standard/simple iteration through an event's collected dispatches.
     */w=function validateEventDispatches(n){var r=n._dispatchListeners,i=n._dispatchInstances,u=Array.isArray(r),l=u?r.length:r?1:0,d=Array.isArray(i),p=d?i.length:i?1:0;d===u&&p===l||error("EventPluginUtils: Invalid `event`.")};var P=10,R=11,I=12,_=13,D=14,F=15,N=17,O=19,A=22,H=null,W={};
/**
     * Recomputes the plugin list using the injected plugins and plugin ordering.
     *
     * @private
     */
function recomputePluginOrdering(){if(H)for(var n in W){var r=W[n],i=H.indexOf(n);if(!(i>-1))throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `"+n+"`.");if(!U[i]){if(!r.extractEvents)throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `"+n+"` does not.");U[i]=r;var u=r.eventTypes;for(var l in u)if(!publishEventForPlugin(u[l],r,l))throw Error("EventPluginRegistry: Failed to publish event `"+l+"` for plugin `"+n+"`.")}}}
/**
     * Publishes an event so that it can be dispatched by the supplied plugin.
     *
     * @param {object} dispatchConfig Dispatch configuration for the event.
     * @param {object} PluginModule Plugin publishing the event.
     * @return {boolean} True if the event was successfully published.
     * @private
     */function publishEventForPlugin(n,r,i){if(M.hasOwnProperty(i))throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `"+i+"`.");M[i]=n;var u=n.phasedRegistrationNames;if(u){for(var l in u){if(u.hasOwnProperty(l))publishRegistrationName(u[l],r,i)}return!0}return!!n.registrationName&&(publishRegistrationName(n.registrationName,r,i),!0)}
/**
     * Publishes a registration name that is used to identify dispatched events.
     *
     * @param {string} registrationName Registration name to add.
     * @param {object} PluginModule Plugin publishing the event.
     * @private
     */function publishRegistrationName(n,r,i){if(L[n])throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `"+n+"`.");L[n]=r,j[n]=r.eventTypes[i].dependencies;var u=n.toLowerCase();z[u]=n,"onDoubleClick"===n&&(z.ondblclick=n)}
/**
     * Registers plugins so that they can extract and dispatch events.
     */
/**
     * Ordered list of injected plugins.
     */var U=[],M={},L={},j={},z={};
/**
     * Mapping from event name to dispatch config
     */
/**
     * Injects plugins to be used by plugin event system. The plugin names must be
     * in the ordering injected by `injectEventPluginOrder`.
     *
     * Plugins can be injected as part of page initialization or on-the-fly.
     *
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     * @internal
     */
function injectEventPluginsByName(n){var r=!1;for(var i in n)if(n.hasOwnProperty(i)){var u=n[i];if(!W.hasOwnProperty(i)||W[i]!==u){if(W[i])throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `"+i+"`.");W[i]=u,r=!0}}r&&recomputePluginOrdering()}var V=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),B=null,$=null,q=null;function restoreStateOfTarget(n){
// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var r=x(n);if(r){if("function"!==typeof B)throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var i=r.stateNode;// Guard against Fiber being unmounted.
if(i){var u=T(i);B(r.stateNode,r.type,u)}}}function enqueueStateRestore(n){$?q?q.push(n):q=[n]:$=n}function restoreStateIfNeeded(){if($){var n=$,r=q;if($=null,q=null,restoreStateOfTarget(n),r)for(var i=0;i<r.length;i++)restoreStateOfTarget(r[i])}}var Q=function batchedUpdatesImpl(n,r){return n(r)},K=function discreteUpdatesImpl(n,r,i,u,l){return n(r,i,u,l)},Y=function flushDiscreteUpdatesImpl(){},G=Q,X=!1,J=!1;// Trace which interactions trigger each commit.
function finishEventHandler(){(function needsStateRestore(){return null!==$||null!==q})()&&(
// If a controlled event was fired, we may need to restore the state of
// the DOM node back to the controlled value. This is necessary when React
// bails out of the update without touching the DOM.
Y(),restoreStateIfNeeded())}var Z=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ee=Z+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",te="data-reactroot",ne=new RegExp("^["+Z+"]["+ee+"]*$"),re=Object.prototype.hasOwnProperty,oe={},ae={};function isAttributeNameSafe(n){return!!re.call(ae,n)||!re.call(oe,n)&&(ne.test(n)?(ae[n]=!0,!0):(oe[n]=!0,error("Invalid attribute name: `%s`",n),!1))}function shouldIgnoreAttribute(n,r,i){return null!==r?0===r.type:!i&&(n.length>2&&("o"===n[0]||"O"===n[0])&&("n"===n[1]||"N"===n[1]))}function shouldRemoveAttributeWithWarning(n,r,i,u){if(null!==i&&0===i.type)return!1;switch(typeof r){case"function":// $FlowIssue symbol is perfectly valid here
case"symbol":
// eslint-disable-line
return!0;case"boolean":if(u)return!1;if(null!==i)return!i.acceptsBooleans;var l=n.toLowerCase().slice(0,5);return"data-"!==l&&"aria-"!==l;default:return!1}}function shouldRemoveAttribute(n,r,i,u){if(null===r||"undefined"===typeof r)return!0;if(shouldRemoveAttributeWithWarning(n,r,i,u))return!0;if(u)return!1;if(null!==i)switch(i.type){case 3:return!r;case 4:return!1===r;case 5:return isNaN(r);case 6:return isNaN(r)||r<1}return!1}function getPropertyInfo(n){return ie.hasOwnProperty(n)?ie[n]:null}function PropertyInfoRecord(n,r,i,u,l,d){this.acceptsBooleans=2===r||3===r||4===r,this.attributeName=u,this.attributeNamespace=l,this.mustUseProperty=i,this.propertyName=n,this.type=r,this.sanitizeURL=d}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var ie={};// These props are reserved by React. They shouldn't be written to the DOM.
["children","dangerouslySetInnerHTML",// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
"defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,0,!1,// mustUseProperty
n,// attributeName
null,// attributeNamespace
!1)})),// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(n){var r=n[0],i=n[1];ie[r]=new PropertyInfoRecord(r,1,!1,// mustUseProperty
i,// attributeName
null,// attributeNamespace
!1)})),// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
["contentEditable","draggable","spellCheck","value"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,2,!1,// mustUseProperty
n.toLowerCase(),// attributeName
null,// attributeNamespace
!1)})),// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,2,!1,// mustUseProperty
n,// attributeName
null,// attributeNamespace
!1)})),// These are HTML boolean attributes.
["allowFullScreen","async",// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
"autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless",// Microdata
"itemScope"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,3,!1,// mustUseProperty
n.toLowerCase(),// attributeName
null,// attributeNamespace
!1)})),// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
["checked",// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
"multiple","muted","selected"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,3,!0,// mustUseProperty
n,// attributeName
null,// attributeNamespace
!1)})),// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
["capture","download"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,4,!1,// mustUseProperty
n,// attributeName
null,// attributeNamespace
!1)})),// These are HTML attributes that must be positive numbers.
["cols","rows","size","span"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,6,!1,// mustUseProperty
n,// attributeName
null,// attributeNamespace
!1)})),// These are HTML attributes that must be numbers.
["rowSpan","start"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,5,!1,// mustUseProperty
n.toLowerCase(),// attributeName
null,// attributeNamespace
!1)}));var ue=/[\-\:]([a-z])/g,le=function capitalize(n){return n[1].toUpperCase()};// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((function(n){var r=n.replace(ue,le);ie[r]=new PropertyInfoRecord(r,1,!1,// mustUseProperty
n,null,// attributeNamespace
!1)})),// String SVG attributes with the xlink namespace.
["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((function(n){var r=n.replace(ue,le);ie[r]=new PropertyInfoRecord(r,1,!1,// mustUseProperty
n,"http://www.w3.org/1999/xlink",!1)})),// String SVG attributes with the xml namespace.
["xml:base","xml:lang","xml:space"].forEach((function(n){var r=n.replace(ue,le);ie[r]=new PropertyInfoRecord(r,1,!1,// mustUseProperty
n,"http://www.w3.org/XML/1998/namespace",!1)})),// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
["tabIndex","crossOrigin"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,1,!1,// mustUseProperty
n.toLowerCase(),// attributeName
null,// attributeNamespace
!1)}));ie.xlinkHref=new PropertyInfoRecord("xlinkHref",1,!1,// mustUseProperty
"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(n){ie[n]=new PropertyInfoRecord(n,1,!1,// mustUseProperty
n.toLowerCase(),// attributeName
null,// attributeNamespace
!0)}));f.ReactDebugCurrentFrame;// A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */
var se=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,ce=!1;function sanitizeURL(n){!ce&&se.test(n)&&(ce=!0,error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(n)))}
/**
     * Get the value for a property on a node. Only used in DEV for SSR validation.
     * The "expected" argument is used as a hint of what the expected value is.
     * Some properties have multiple equivalent values.
     */function getValueForProperty(n,r,i,u){if(u.mustUseProperty)return n[u.propertyName];u.sanitizeURL&&
// If we haven't fully disabled javascript: URLs, and if
// the hydration is successful of a javascript: URL, we
// still want to warn on the client.
sanitizeURL(""+i);var l=u.attributeName,d=null;if(4===u.type){if(n.hasAttribute(l)){var p=n.getAttribute(l);return""===p||(shouldRemoveAttribute(r,i,u,!1)?p:p===""+i?i:p)}}else if(n.hasAttribute(l)){if(shouldRemoveAttribute(r,i,u,!1))
// We had an attribute but shouldn't have had one, so read it
// for the error message.
return n.getAttribute(l);if(3===u.type)
// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return i;// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
d=n.getAttribute(l)}return shouldRemoveAttribute(r,i,u,!1)?null===d?i:d:d===""+i?i:d}
/**
     * Get the value for a attribute on a node. Only used in DEV for SSR validation.
     * The third argument is used as a hint of what the expected value is. Some
     * attributes have multiple equivalent values.
     */function getValueForAttribute(n,r,i){if(isAttributeNameSafe(r)){if(!n.hasAttribute(r))return void 0===i?void 0:null;var u=n.getAttribute(r);return u===""+i?i:u}}
/**
     * Sets the value for a property on a node.
     *
     * @param {DOMElement} node
     * @param {string} name
     * @param {*} value
     */function setValueForProperty(n,r,i,u){var l=getPropertyInfo(r);if(!shouldIgnoreAttribute(r,l,u))// If the prop isn't in the special list, treat it as a simple attribute.
if(shouldRemoveAttribute(r,i,l,u)&&(i=null),u||null===l){if(isAttributeNameSafe(r)){var d=r;null===i?n.removeAttribute(d):n.setAttribute(d,""+i)}}else if(l.mustUseProperty){var p=l.propertyName;if(null===i){var f=l.type;n[p]=3!==f&&""}else
// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
n[p]=i}// The rest are treated as attributes with special cases.
else{var m=l.attributeName,h=l.attributeNamespace;if(null===i)n.removeAttribute(m);else{var v,g=l.type;3===g||4===g&&!0===i?
// If attribute type is boolean, we know for sure it won't be an execution sink
// and we won't require Trusted Type here.
v="":(v=""+i,l.sanitizeURL&&sanitizeURL(v.toString())),h?n.setAttributeNS(h,m,v):n.setAttribute(m,v)}}}var de=/^(.*)[\\\/]/;// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var pe="function"===typeof Symbol&&Symbol.for,fe=pe?Symbol.for("react.element"):60103,me=pe?Symbol.for("react.portal"):60106,he=pe?Symbol.for("react.fragment"):60107,ve=pe?Symbol.for("react.strict_mode"):60108,ge=pe?Symbol.for("react.profiler"):60114,ye=pe?Symbol.for("react.provider"):60109,be=pe?Symbol.for("react.context"):60110,Ce=pe?Symbol.for("react.concurrent_mode"):60111,ke=pe?Symbol.for("react.forward_ref"):60112,we=pe?Symbol.for("react.suspense"):60113,Te=pe?Symbol.for("react.suspense_list"):60120,xe=pe?Symbol.for("react.memo"):60115,Ee=pe?Symbol.for("react.lazy"):60116,Se=pe?Symbol.for("react.block"):60121,Pe="function"===typeof Symbol&&Symbol.iterator;function getIteratorFn(n){if(null===n||"object"!==typeof n)return null;var r=Pe&&n[Pe]||n["@@iterator"];return"function"===typeof r?r:null}function refineResolvedLazyComponent(n){return 1===n._status?n._result:null}function getComponentName(n){if(null==n)
// Host root, text node or just invalid type.
return null;if("number"===typeof n.tag&&error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof n)return n.displayName||n.name||null;if("string"===typeof n)return n;switch(n){case he:return"Fragment";case me:return"Portal";case ge:return"Profiler";case ve:return"StrictMode";case we:return"Suspense";case Te:return"SuspenseList"}if("object"===typeof n)switch(n.$$typeof){case be:return"Context.Consumer";case ye:return"Context.Provider";case ke:return function getWrappedName(n,r,i){var u=r.displayName||r.name||"";return n.displayName||(""!==u?i+"("+u+")":i)}(n,n.render,"ForwardRef");case xe:return getComponentName(n.type);case Se:return getComponentName(n.render);case Ee:var r=refineResolvedLazyComponent(n);if(r)return getComponentName(r)}return null}var Re=f.ReactDebugCurrentFrame;function describeFiber(n){switch(n.tag){case 3:case 4:case 6:case 7:case P:case 9:return"";default:var r=n._debugOwner,i=n._debugSource,u=getComponentName(n.type),l=null;return r&&(l=getComponentName(r.type)),function describeComponentFrame(n,r,i){var u="";if(r){var l=r.fileName,d=l.replace(de,"");
// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(d)){var p=l.match(de);if(p){var f=p[1];f&&(d=f.replace(de,"")+"/"+d)}}u=" (at "+d+":"+r.lineNumber+")"}else i&&(u=" (created by "+i+")");return"\n    in "+(n||"Unknown")+u}(u,i,l)}}function getStackByFiberInDevAndProd(n){var r="",i=n;do{r+=describeFiber(i),i=i.return}while(i);return r}var Ie=null,_e=!1;function getCurrentFiberOwnerNameInDevOrNull(){if(null===Ie)return null;var n=Ie._debugOwner;return null!==n&&"undefined"!==typeof n?getComponentName(n.type):null}function getCurrentFiberStackInDev(){return null===Ie?"":getStackByFiberInDevAndProd(Ie);// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
}function resetCurrentFiber(){Re.getCurrentStack=null,Ie=null,_e=!1}function setCurrentFiber(n){Re.getCurrentStack=getCurrentFiberStackInDev,Ie=n,_e=!1}function setIsRendering(n){_e=n}// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function toString(n){return""+n}function getToStringValue(n){switch(typeof n){case"boolean":case"number":case"object":case"string":case"undefined":return n;default:
// function, symbol are assigned as empty strings
return""}}var De,Fe={checkPropTypes:null};De=f.ReactDebugCurrentFrame;var Ne={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},Oe={value:function value(n,r,i){return Ne[n.type]||n.onChange||n.readOnly||n.disabled||null==n[r]?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function checked(n,r,i){return n.onChange||n.readOnly||n.disabled||null==n[r]?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}};function isCheckable(n){var r=n.type,i=n.nodeName;return i&&"input"===i.toLowerCase()&&("checkbox"===r||"radio"===r)}function getTracker(n){return n._valueTracker}function track(n){getTracker(n)||(// TODO: Once it's just Fiber we can move this to node._wrapperState
n._valueTracker=function trackValueOnNode(n){var r=isCheckable(n)?"checked":"value",i=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(!n.hasOwnProperty(r)&&"undefined"!==typeof i&&"function"===typeof i.get&&"function"===typeof i.set){var l=i.get,d=i.set;Object.defineProperty(n,r,{configurable:!0,get:function get(){return l.call(this)},set:function set(n){u=""+n,d.call(this,n)}}),// We could've passed this the first time
// but it triggers a bug in IE11 and Edge 14/15.
// Calling defineProperty() again should be equivalent.
// https://github.com/facebook/react/issues/11768
Object.defineProperty(n,r,{enumerable:i.enumerable});var p={getValue:function getValue(){return u},setValue:function setValue(n){u=""+n},stopTracking:function stopTracking(){!function detachTracker(n){n._valueTracker=null}(n),delete n[r]}};return p}}(n))}function updateValueIfChanged(n){if(!n)return!1;var r=getTracker(n);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!r)return!0;var i=r.getValue(),u=function getValueFromNode(n){var r="";return n?r=isCheckable(n)?n.checked?"true":"false":n.value:r}(n);return u!==i&&(r.setValue(u),!0)}
/**
       * Provide a linked `value` attribute for controlled forms. You should not use
       * this outside of the ReactDOM controlled form components.
       */
Fe.checkPropTypes=function(n,r){d(Oe,r,"prop",n,De.getStackAddendum)};var Ae=!1,He=!1,We=!1,Ue=!1;function isControlled(n){return"checkbox"===n.type||"radio"===n.type?null!=n.checked:null!=n.value}
/**
     * Implements an <input> host component that allows setting these optional
     * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
     *
     * If `checked` or `value` are not supplied (or null/undefined), user actions
     * that affect the checked state or value will trigger updates to the element.
     *
     * If they are supplied (and not null/undefined), the rendered element will not
     * trigger updates to the element. Instead, the props must change in order for
     * the rendered element to be updated.
     *
     * The rendered element will be initialized as unchecked (or `defaultChecked`)
     * with an empty value (or `defaultValue`).
     *
     * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
     */function getHostProps(n,r){var i=n,l=r.checked;return u({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=l?l:i._wrapperState.initialChecked})}function initWrapperState(n,r){Fe.checkPropTypes("input",r),void 0===r.checked||void 0===r.defaultChecked||He||(error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component",r.type),He=!0),void 0===r.value||void 0===r.defaultValue||Ae||(error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component",r.type),Ae=!0);var i=n,u=null==r.defaultValue?"":r.defaultValue;i._wrapperState={initialChecked:null!=r.checked?r.checked:r.defaultChecked,initialValue:getToStringValue(null!=r.value?r.value:u),controlled:isControlled(r)}}function updateChecked(n,r){var i=n,u=r.checked;null!=u&&setValueForProperty(i,"checked",u,!1)}function updateWrapper(n,r){var i=n,u=isControlled(r);i._wrapperState.controlled||!u||Ue||(error("A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",r.type),Ue=!0),!i._wrapperState.controlled||u||We||(error("A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",r.type),We=!0),updateChecked(n,r);var l=getToStringValue(r.value),d=r.type;if(null!=l)"number"===d?(0===l&&""===i.value||// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
i.value!=l)&&(i.value=toString(l)):i.value!==toString(l)&&(i.value=toString(l));else if("submit"===d||"reset"===d)
// Submit/reset inputs need the attribute removed completely to avoid
// blank-text buttons.
return void i.removeAttribute("value");
// When syncing the value attribute, the value comes from a cascade of
// properties:
//  1. The value React property
//  2. The defaultValue React property
//  3. Otherwise there should be no change
r.hasOwnProperty("value")?setDefaultValue(i,r.type,l):r.hasOwnProperty("defaultValue")&&setDefaultValue(i,r.type,getToStringValue(r.defaultValue)),
// When syncing the checked attribute, it only changes when it needs
// to be removed, such as transitioning from a checkbox into a text input
null==r.checked&&null!=r.defaultChecked&&(i.defaultChecked=!!r.defaultChecked)}function postMountWrapper(n,r,i){var u=n;// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;// Avoid setting value attribute on submit/reset inputs as it overrides the
// default value provided by the browser. See: #12872
if(("submit"===l||"reset"===l)&&(void 0===r.value||null===r.value))return;var d=toString(u._wrapperState.initialValue);// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
i||
// When syncing the value attribute, the value property should use
// the wrapperState._initialValue property. This uses:
//   1. The value React property when present
//   2. The defaultValue React property when present
//   3. An empty string
d!==u.value&&(u.value=d),
// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
u.defaultValue=d}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var p=u.name;""!==p&&(u.name=""),
// When syncing the checked attribute, both the checked property and
// attribute are assigned at the same time using defaultChecked. This uses:
//   1. The checked React property when present
//   2. The defaultChecked React property when present
//   3. Otherwise, false
u.defaultChecked=!u.defaultChecked,u.defaultChecked=!!u._wrapperState.initialChecked,""!==p&&(u.name=p)}function restoreControlledState(n,r){var i=n;updateWrapper(i,r),function updateNamedCousins(n,r){var i=r.name;if("radio"===r.type&&null!=i){for(var u=n;u.parentNode;)u=u.parentNode;// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
for(var l=u.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),d=0;d<l.length;d++){var p=l[d];if(p!==n&&p.form===n.form){// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var f=getFiberCurrentPropsFromNode$1(p);if(!f)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
updateValueIfChanged(p),// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
updateWrapper(p,f)}}}}// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".

// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text

// https://github.com/facebook/react/issues/7253
(i,r)}function setDefaultValue(n,r,i){// Focused number inputs synchronize on blur. See ChangeEventPlugin.js
"number"===r&&n.ownerDocument.activeElement===n||(null==i?n.defaultValue=toString(n._wrapperState.initialValue):n.defaultValue!==toString(i)&&(n.defaultValue=toString(i)))}var Me,Le=!1,je=!1;
/**
     * Implements an <option> host component that warns when `selected` is set.
     */
function validateProps(r,i){
// This mirrors the codepath above, but runs for hydration too.
// Warn about invalid children here so that client and hydration are consistent.
// TODO: this seems like it could cause a DEV-only throw for hydration
// if children contains a non-element object. We should try to avoid that.
"object"===typeof i.children&&null!==i.children&&n.Children.forEach(i.children,(function(n){null!=n&&"string"!==typeof n&&"number"!==typeof n&&"string"===typeof n.type&&(je||(je=!0,error("Only strings and numbers are supported as <option> children.")))})),// TODO: Remove support for `selected` in <option>.
null==i.selected||Le||(error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),Le=!0)}function getHostProps$1(r,i){var l=u({children:void 0},i),d=function flattenChildren(r){var i="";// Flatten children. We'll warn if they are invalid
// during validateProps() which runs for hydration too.
// Note that this would throw on non-element objects.
// Elements are stringified (which is normally irrelevant
// but matters for <fbt>).
return n.Children.forEach(r,(function(n){null!=n&&(i+=n)})),i}(i.children);return d&&(l.children=d),l}function getDeclarationErrorAddendum(){var n=getCurrentFiberOwnerNameInDevOrNull();return n?"\n\nCheck the render method of `"+n+"`.":""}Me=!1;var ze=["value","defaultValue"];
/**
     * Validation function for `value` and `defaultValue`.
     */function updateOptions(n,r,i,u){var l=n.options;if(r){for(var d=i,p={},f=0;f<d.length;f++)
// Prefix to avoid chaos with special keys.
p["$"+d[f]]=!0;for(var m=0;m<l.length;m++){var h=p.hasOwnProperty("$"+l[m].value);l[m].selected!==h&&(l[m].selected=h),h&&u&&(l[m].defaultSelected=!0)}}else{for(
// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
var v=toString(getToStringValue(i)),g=null,y=0;y<l.length;y++){if(l[y].value===v)return l[y].selected=!0,void(u&&(l[y].defaultSelected=!0));null!==g||l[y].disabled||(g=l[y])}null!==g&&(g.selected=!0)}}
/**
     * Implements a <select> host component that allows optionally setting the
     * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
     * stringable. If `multiple` is true, the prop must be an array of stringables.
     *
     * If `value` is not supplied (or null/undefined), user actions that change the
     * selected option will trigger updates to the rendered options.
     *
     * If it is supplied (and not null/undefined), the rendered options will not
     * update in response to user actions. Instead, the `value` prop must change in
     * order for the rendered options to update.
     *
     * If `defaultValue` is provided, any options with the supplied values will be
     * selected.
     */function getHostProps$2(n,r){return u({},r,{value:void 0})}function initWrapperState$1(n,r){var i=n;!function checkSelectPropTypes(n){Fe.checkPropTypes("select",n);for(var r=0;r<ze.length;r++){var i=ze[r];if(null!=n[i]){var u=Array.isArray(n[i]);n.multiple&&!u?error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",i,getDeclarationErrorAddendum()):!n.multiple&&u&&error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",i,getDeclarationErrorAddendum())}}}(r),i._wrapperState={wasMultiple:!!r.multiple},void 0===r.value||void 0===r.defaultValue||Me||(error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"),Me=!0)}var Ve=!1;
/**
     * Implements a <textarea> host component that allows setting `value`, and
     * `defaultValue`. This differs from the traditional DOM API because value is
     * usually set as PCDATA children.
     *
     * If `value` is not supplied (or null/undefined), user actions that affect the
     * value will trigger updates to the element.
     *
     * If `value` is supplied (and not null/undefined), the rendered element will
     * not trigger updates to the element. Instead, the `value` prop must change in
     * order for the rendered element to be updated.
     *
     * The rendered element will be initialized with an empty value, the prop
     * `defaultValue` if specified, or the children content (deprecated).
     */function getHostProps$3(n,r){var i=n;if(null!=r.dangerouslySetInnerHTML)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
// solution. The value can be a boolean or object so that's why it's forced
// to be a string.
return u({},r,{value:void 0,defaultValue:void 0,children:toString(i._wrapperState.initialValue)})}function initWrapperState$2(n,r){var i=n;Fe.checkPropTypes("textarea",r),void 0===r.value||void 0===r.defaultValue||Ve||(error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component"),Ve=!0);var u=r.value;// Only bother fetching default value if we're going to use it
if(null==u){var l=r.children,d=r.defaultValue;if(null!=l){if(error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=d)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Array.isArray(l)){if(!(l.length<=1))throw Error("<textarea> can only have at most one child.");l=l[0]}d=l}null==d&&(d=""),u=d}i._wrapperState={initialValue:getToStringValue(u)}}function updateWrapper$1(n,r){var i=n,u=getToStringValue(r.value),l=getToStringValue(r.defaultValue);if(null!=u){
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var d=toString(u);// To avoid side effects (such as losing text selection), only set value if changed
d!==i.value&&(i.value=d),null==r.defaultValue&&i.defaultValue!==d&&(i.defaultValue=d)}null!=l&&(i.defaultValue=toString(l))}function postMountWrapper$3(n,r){var i=n,u=i.textContent;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
u===i._wrapperState.initialValue&&""!==u&&null!==u&&(i.value=u)}var Be="http://www.w3.org/1999/xhtml",$e="http://www.w3.org/1998/Math/MathML",qe="http://www.w3.org/2000/svg",Qe=Be,Ke=qe;// Assumes there is no parent namespace.
function getIntrinsicNamespace(n){switch(n){case"svg":return qe;case"math":return $e;default:return Be}}function getChildNamespace(n,r){return null==n||n===Be?getIntrinsicNamespace(r):n===qe&&"foreignObject"===r?Be:n}
/* globals MSApp */
/**
     * Create a function which has 'unsafe' privileges (required by windows8 apps)
     */var Ye,Ge=function createMicrosoftUnsafeLocalFunction(n){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(r,i,u,l){MSApp.execUnsafeLocalFunction((function(){return n(r,i,u,l)}))}:n}((function(n,r){if(n.namespaceURI!==Ke||"innerHTML"in n)n.innerHTML=r;else{(
// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
Ye=Ye||document.createElement("div")).innerHTML="<svg>"+r.valueOf().toString()+"</svg>";for(var i=Ye.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}})),Xe=function setTextContent(n,r){if(r){var i=n.firstChild;if(i&&i===n.lastChild&&3===i.nodeType)return void(i.nodeValue=r)}n.textContent=r};
/**
     * Generate a mapping of standard vendor prefixes using the defined style property and event name.
     *
     * @param {string} styleProp
     * @param {string} eventName
     * @returns {object}
     */
function makePrefixMap(n,r){var i={};return i[n.toLowerCase()]=r.toLowerCase(),i["Webkit"+n]="webkit"+r,i["Moz"+n]="moz"+r,i}
/**
     * A list of event names to a configurable list of vendor prefixes.
     */var Je={animationend:makePrefixMap("Animation","AnimationEnd"),animationiteration:makePrefixMap("Animation","AnimationIteration"),animationstart:makePrefixMap("Animation","AnimationStart"),transitionend:makePrefixMap("Transition","TransitionEnd")},Ze={},et={};
/**
     * Event names that have already been detected and prefixed (if applicable).
     */
/**
     * Attempts to determine the correct vendor prefixed event name.
     *
     * @param {string} eventName
     * @returns {string}
     */
function getVendorPrefixedEventName(n){if(Ze[n])return Ze[n];if(!Je[n])return n;var r=Je[n];for(var i in r)if(r.hasOwnProperty(i)&&i in et)return Ze[n]=r[i];return n}
/**
     * To identify top level events in ReactDOM, we use constants defined by this
     * module. This is the only module that uses the unsafe* methods to express
     * that the constants actually correspond to the browser event names. This lets
     * us save some bundle size by avoiding a top level type -> event name map.
     * The rest of ReactDOM code should import top level types from this file.
     */
/**
     * Bootstrap if a DOM exists.
     */
V&&(et=document.createElement("div").style,// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
"AnimationEvent"in window||(delete Je.animationend.animation,delete Je.animationiteration.animation,delete Je.animationstart.animation),// Same as above
"TransitionEvent"in window||delete Je.transitionend.transition);var tt="abort",nt=getVendorPrefixedEventName("animationend"),rt=getVendorPrefixedEventName("animationiteration"),ot=getVendorPrefixedEventName("animationstart"),at="blur",it="canplay",ut="canplaythrough",lt="cancel",st="change",ct="click",dt="close",pt="compositionend",ft="compositionstart",mt="compositionupdate",ht="contextmenu",vt="copy",gt="cut",yt="dblclick",bt="auxclick",Ct="drag",kt="dragend",wt="dragenter",Tt="dragexit",xt="dragleave",Et="dragover",St="dragstart",Pt="drop",Rt="durationchange",It="emptied",_t="encrypted",Dt="ended",Ft="error",Nt="focus",Ot="gotpointercapture",At="input",Ht="invalid",Wt="keydown",Ut="keypress",Mt="keyup",Lt="load",jt="loadstart",zt="loadeddata",Vt="loadedmetadata",Bt="lostpointercapture",$t="mousedown",qt="mousemove",Qt="mouseout",Kt="mouseover",Yt="mouseup",Gt="paste",Xt="pause",Jt="play",Zt="playing",en="pointercancel",tn="pointerdown",nn="pointermove",rn="pointerout",on="pointerover",an="pointerup",un="progress",ln="ratechange",sn="reset",cn="scroll",dn="seeked",pn="seeking",fn="selectionchange",mn="stalled",hn="submit",vn="suspend",gn="textInput",yn="timeupdate",bn="toggle",Cn="touchcancel",kn="touchend",wn="touchmove",Tn="touchstart",xn=getVendorPrefixedEventName("transitionend"),En="volumechange",Sn="waiting",Pn="wheel",Rn=[tt,it,ut,Rt,It,_t,Dt,Ft,zt,Vt,jt,Xt,Jt,Zt,un,ln,dn,pn,mn,vn,yn,En,Sn];var In=new("function"===typeof WeakMap?WeakMap:Map);// prettier-ignore
function getListenerMapForElement(n){var r=In.get(n);return void 0===r&&(r=new Map,In.set(n,r)),r}
/**
     * `ReactInstanceMap` maintains a mapping from a public facing stateful
     * instance (key) and the internal representation (value). This allows public
     * methods to accept the user facing instance as an argument and map them back
     * to internal methods.
     *
     * Note that this module is currently shared and assumed to be stateless.
     * If this becomes an actual Map, that will break.
     */function get(n){return n._reactInternalFiber}// Don't change these two values. They're used by React Dev Tools.
var _n=

64,Dn=

128,Fn=

256,Nn=

512,On=

1024,An=

2048,Hn=

4096,Wn=f.ReactCurrentOwner;function getNearestMountedFiber(n){var r=n,i=n;if(n.alternate)for(;r.return;)r=r.return;else{
// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var u=r;do{

0!==(1026&(r=u).effectTag)&&(
// This is an insertion or in-progress hydration. The nearest possible
// mounted fiber is the parent but we need to continue to figure out
// if that one is still mounted.
i=r.return),u=r.return}while(u)}return 3===r.tag?i:null;// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
}function getSuspenseInstanceFromFiber(n){if(n.tag===_){var r=n.memoizedState;if(null===r){var i=n.alternate;null!==i&&(r=i.memoizedState)}if(null!==r)return r.dehydrated}return null}function getContainerFromFiber(n){return 3===n.tag?n.stateNode.containerInfo:null}function assertIsMounted(n){if(getNearestMountedFiber(n)!==n)throw Error("Unable to find node on an unmounted component.")}function findCurrentFiberUsingSlowPath(n){var r=n.alternate;if(!r){
// If there is no alternate, then we only need to check if it is mounted.
var i=getNearestMountedFiber(n);if(null===i)throw Error("Unable to find node on an unmounted component.");return i!==n?null:n}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
for(var u=n,l=r;;){var d=u.return;if(null===d)
// We're at the root.
break;var p=d.alternate;if(null===p){
// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var f=d.return;if(null!==f){u=l=f;continue}// If there's no parent, we're at the root.
break}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(d.child===p.child){for(var m=d.child;m;){if(m===u)
// We've determined that A is the current branch.
return assertIsMounted(d),n;if(m===l)
// We've determined that B is the current branch.
return assertIsMounted(d),r;m=m.sibling}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
throw Error("Unable to find node on an unmounted component.")}if(u.return!==l.return)
// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
u=d,l=p;else{for(
// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
// Search parent A's child set
var h=!1,v=d.child;v;){if(v===u){h=!0,u=d,l=p;break}if(v===l){h=!0,l=d,u=p;break}v=v.sibling}if(!h){for(
// Search parent B's child set
v=p.child;v;){if(v===u){h=!0,u=p,l=d;break}if(v===l){h=!0,l=p,u=d;break}v=v.sibling}if(!h)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(u.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(3!==u.tag)throw Error("Unable to find node on an unmounted component.");return u.stateNode.current===u?n:r;// Otherwise B has to be current branch.
}function findCurrentHostFiber(n){var r=findCurrentFiberUsingSlowPath(n);if(!r)return null;// Next we'll drill down this component to find the first HostComponent/Text.
for(var i=r;;){if(5===i.tag||6===i.tag)return i;if(i.child)i.child.return=i,i=i.child;else{if(i===r)return null;for(;!i.sibling;){if(!i.return||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}
/**
     * Accumulates items that must not be null or undefined into the first one. This
     * is used to conserve memory by avoiding array allocations, and thus sacrifices
     * API cleanness. Since `current` can be null before being passed in and not
     * null after this function, make sure to assign it back to `current`:
     *
     * `a = accumulateInto(a, b);`
     *
     * This API should be sparingly used. Try `accumulate` for something cleaner.
     *
     * @return {*|array<*>} An accumulation of items.
     */
function accumulateInto(n,r){if(null==r)throw Error("accumulateInto(...): Accumulated items must not be null or undefined.");return null==n?r:// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
Array.isArray(n)?Array.isArray(r)?(n.push.apply(n,r),n):(n.push(r),n):Array.isArray(r)?[n].concat(r):[n,r]}
/**
     * @param {array} arr an "accumulation" of items which is either an Array or
     * a single item. Useful when paired with the `accumulate` module. This is a
     * simple utility that allows us to reason about a collection of items, but
     * handling the case when there is exactly one item (and we do not need to
     * allocate an array).
     * @param {function} cb Callback invoked with each element or a collection.
     * @param {?} [scope] Scope used as `this` in a callback.
     */function forEachAccumulated(n,r,i){Array.isArray(n)?n.forEach(r,i):n&&r.call(i,n)}
/**
     * Internal queue of events that have accumulated their dispatches and are
     * waiting to have their dispatches executed.
     */var Un=null,Mn=function executeDispatchesAndRelease(n){n&&(!function executeDispatchesInOrder(n){var r=n._dispatchListeners,i=n._dispatchInstances;if(w(n),Array.isArray(r))for(var u=0;u<r.length&&!n.isPropagationStopped();u++)// Listeners and Instances are two parallel arrays that are always in sync.
executeDispatch(n,r[u],i[u]);else r&&executeDispatch(n,r,i);n._dispatchListeners=null,n._dispatchInstances=null}(n),n.isPersistent()||n.constructor.release(n))},Ln=function executeDispatchesAndReleaseTopLevel(n){return Mn(n)};
/**
     * Dispatches an event and releases it back into the pool, unless persistent.
     *
     * @param {?object} event Synthetic event to be dispatched.
     * @private
     */function runEventsInBatch(n){null!==n&&(Un=accumulateInto(Un,n));// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var r=Un;if(Un=null,r){if(forEachAccumulated(r,Ln),Un)throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");// This would be a good time to rethrow if any of the event handlers threw.
!function rethrowCaughtError(){if(b){var n=C;throw b=!1,C=null,n}}()}}
/**
     * Gets the target node from a native browser event by accounting for
     * inconsistencies in browser DOM APIs.
     *
     * @param {object} nativeEvent Native browser event.
     * @return {DOMEventTarget} Target node.
     */function getEventTarget(n){
// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var r=n.target||n.srcElement||window;// Normalize SVG <use> element events #4963
// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return r.correspondingUseElement&&(r=r.correspondingUseElement),3===r.nodeType?r.parentNode:r}
/**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */function isEventSupported(n){if(!V)return!1;var r="on"+n,i=r in document;if(!i){var u=document.createElement("div");u.setAttribute(r,"return;"),i="function"===typeof u[r]}return i}
/**
     * Summary of `DOMEventPluginSystem` event handling:
     *
     *  - Top-level delegation is used to trap most native browser events. This
     *    may only occur in the main thread and is the responsibility of
     *    ReactDOMEventListener, which is injected and can therefore support
     *    pluggable event sources. This is the only work that occurs in the main
     *    thread.
     *
     *  - We normalize and de-duplicate events to account for browser quirks. This
     *    may be done in the worker thread.
     *
     *  - Forward these native events (with the associated top-level type used to
     *    trap it) to `EventPluginRegistry`, which in turn will ask plugins if they want
     *    to extract any synthetic events.
     *
     *  - The `EventPluginRegistry` will then process each event by annotating them with
     *    "dispatches", a sequence of listeners and IDs that care about that event.
     *
     *  - The `EventPluginRegistry` then dispatches the events.
     *
     * Overview of React and the event system:
     *
     * +------------+    .
     * |    DOM     |    .
     * +------------+    .
     *       |           .
     *       v           .
     * +------------+    .
     * | ReactEvent |    .
     * |  Listener  |    .
     * +------------+    .                         +-----------+
     *       |           .               +--------+|SimpleEvent|
     *       |           .               |         |Plugin     |
     * +-----|------+    .               v         +-----------+
     * |     |      |    .    +--------------+                    +------------+
     * |     +-----------.--->|PluginRegistry|                    |    Event   |
     * |            |    .    |              |     +-----------+  | Propagators|
     * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
     * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
     * |            |    .    |              |     +-----------+  |  utilities |
     * |     +-----------.--->|              |                    +------------+
     * |     |      |    .    +--------------+
     * +-----|------+    .                ^        +-----------+
     *       |           .                |        |Enter/Leave|
     *       +           .                +-------+|Plugin     |
     * +-------------+   .                         +-----------+
     * | application |   .
     * |-------------|   .
     * |             |   .
     * |             |   .
     * +-------------+   .
     *                   .
     *    React Core     .  General Purpose Event Plugin System
     */var jn,zn,Vn,Bn=[];
/**
     * Find the deepest React component completely containing the root of the
     * passed-in instance (for use when entire React trees are nested within each
     * other). If React trees are not nested, returns null.
     */
function findRootContainerNode(n){if(3===n.tag)return n.stateNode.containerInfo;// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
for(;n.return;)n=n.return;return 3!==n.tag?null:n.stateNode.containerInfo}
/**
     * Allows registered plugins an opportunity to extract events from top-level
     * native browser events.
     *
     * @return {*} An accumulation of synthetic events.
     * @internal
     */function runExtractedPluginEventsInBatch(n,r,i,u,l){var d=function extractPluginEvents(n,r,i,u,l){for(var d=null,p=0;p<U.length;p++){
// Not every plugin in the ordering may be loaded at runtime.
var f=U[p];if(f){var m=f.extractEvents(n,r,i,u,l);m&&(d=accumulateInto(d,m))}}return d}(n,r,i,u,l);runEventsInBatch(d)}function handleTopLevel(n){var r=n.targetInst,i=r;// Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
do{if(!i){n.ancestors.push(i);break}var u=findRootContainerNode(i);if(!u)break;var l=i.tag;5!==l&&6!==l||n.ancestors.push(i),i=getClosestInstanceFromNode(u)}while(i);for(var d=0;d<n.ancestors.length;d++){r=n.ancestors[d];var p=getEventTarget(n.nativeEvent),f=n.topLevelType,m=n.nativeEvent,h=n.eventSystemFlags;// If this is the first ancestor, we mark it on the system flags
0===d&&(h|=64),runExtractedPluginEventsInBatch(f,r,m,p,h)}}function dispatchEventForLegacyPluginEventSystem(n,r,i,u){var l=// Used to store ancestor hierarchy in top level callback
function getTopLevelCallbackBookKeeping(n,r,i,u){if(Bn.length){var l=Bn.pop();return l.topLevelType=n,l.eventSystemFlags=u,l.nativeEvent=r,l.targetInst=i,l}return{topLevelType:n,eventSystemFlags:u,nativeEvent:r,targetInst:i,ancestors:[]}}(n,i,u,r);try{
// Event queue being processed in the same cycle allows
// `preventDefault`.
!function batchedEventUpdates(n,r,i){if(J)
// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return n(r,i);J=!0;try{return G(n,r,i)}finally{J=!1,finishEventHandler()}}// This is for the React Flare event system
(handleTopLevel,l)}finally{!function releaseTopLevelCallbackBookKeeping(n){n.topLevelType=null,n.nativeEvent=null,n.targetInst=null,n.ancestors.length=0,Bn.length<10&&Bn.push(n)}(l)}}
/**
     * We listen for bubbled touch events on the document object.
     *
     * Firefox v8.01 (and possibly others) exhibited strange behavior when
     * mounting `onmousemove` events at some node that was not the document
     * element. The symptoms were that if your mouse is not moving over something
     * contained within that mount point (for example on the background) the
     * top-level listeners for `onmousemove` won't be called. However, if you
     * register the `mousemove` on the document object, then it will of course
     * catch all `mousemove`s. This along with iOS quirks, justifies restricting
     * top-level listeners to the document object only, at least for these
     * movement types of events and possibly all events.
     *
     * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
     *
     * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
     * they bubble to document.
     *
     * @param {string} registrationName Name of listener (e.g. `onClick`).
     * @param {object} mountAt Container where to mount the listener
     */function legacyListenToTopLevelEvent(n,r,i){if(!i.has(n)){switch(n){case cn:trapCapturedEvent(cn,r);break;case Nt:case at:trapCapturedEvent(Nt,r),trapCapturedEvent(at,r),// We set the flag for a single dependency later in this function,
// but this ensures we mark both as attached rather than just one.
i.set(at,null),i.set(Nt,null);break;case lt:case dt:isEventSupported(n)&&trapCapturedEvent(n,r);break;case Ht:case hn:case sn:
// We listen to them on the target DOM elements.
// Some of them bubble so we don't want them to fire twice.
break;default:-1!==Rn.indexOf(n)||trapBubbledEvent(n,r)}i.set(n,null)}}// TODO: Upgrade this definition once we're on a newer version of Flow that
var $n=!1,qn=[],Qn=null,Kn=null,Yn=null,Gn=new Map,Xn=new Map,Jn=[];// The queue of discrete events to be replayed.
var Zn=[$t,Yt,Cn,kn,Tn,bt,yt,en,tn,an,kt,St,Pt,pt,ft,Wt,Ut,Mt,At,gn,dt,lt,vt,gt,Gt,ct,st,ht,sn,hn],er=[Nt,at,wt,xt,Kt,Qt,on,rn,Ot,Bt];function isReplayableDiscreteEvent(n){return Zn.indexOf(n)>-1}function trapReplayableEventForDocument(n,r,i){legacyListenToTopLevelEvent(n,r,i)}function createQueuedReplayableEvent(n,r,i,u,l){return{blockedOn:n,topLevelType:r,eventSystemFlags:32|i,nativeEvent:l,container:u}}function queueDiscreteEvent(n,r,i,u,l){var d=createQueuedReplayableEvent(n,r,i,u,l);qn.push(d)}// Resets the replaying for this type of continuous event to no event.
function clearIfContinuousEvent(n,r){switch(n){case Nt:case at:Qn=null;break;case wt:case xt:Kn=null;break;case Kt:case Qt:Yn=null;break;case on:case rn:var i=r.pointerId;Gn.delete(i);break;case Ot:case Bt:var u=r.pointerId;Xn.delete(u)}}function accumulateOrCreateContinuousQueuedReplayableEvent(n,r,i,u,l,d){if(null===n||n.nativeEvent!==d){var p=createQueuedReplayableEvent(r,i,u,l,d);if(null!==r){var f=getInstanceFromNode$1(r);null!==f&&
// Attempt to increase the priority of this target.
zn(f)}return p}// If we have already queued this exact event, then it's because
// the different event systems have different DOM event listeners.
// We can accumulate the flags and store a single event to be
// replayed.
return n.eventSystemFlags|=u,n}// Check if this target is unblocked. Returns true if it's unblocked.
function attemptExplicitHydrationTarget(n){
// TODO: This function shares a lot of logic with attemptToDispatchEvent.
// Try to unify them. It's a bit tricky since it would require two return
// values.
var r=getClosestInstanceFromNode(n.target);if(null!==r){var i=getNearestMountedFiber(r);if(null!==i){var u=i.tag;if(u===_){var d=getSuspenseInstanceFromFiber(i);if(null!==d)
// We're blocked on hydrating this boundary.
// Increase its priority.
return n.blockedOn=d,void l.unstable_runWithPriority(n.priority,(function(){Vn(i)}))}else if(3===u){if(i.stateNode.hydrate)// We don't currently have a way to increase the priority of
// a root other than sync.
return void(n.blockedOn=getContainerFromFiber(i))}}}n.blockedOn=null}function attemptReplayContinuousQueuedEvent(n){if(null!==n.blockedOn)return!1;var r=attemptToDispatchEvent(n.topLevelType,n.eventSystemFlags,n.container,n.nativeEvent);if(null!==r){
// We're still blocked. Try again later.
var i=getInstanceFromNode$1(r);return null!==i&&zn(i),n.blockedOn=r,!1}return!0}function attemptReplayContinuousQueuedEventInMap(n,r,i){attemptReplayContinuousQueuedEvent(n)&&i.delete(r)}function replayUnblockedEvents(){// First replay discrete events.
for($n=!1;qn.length>0;){var n=qn[0];if(null!==n.blockedOn){
// We're still blocked.
// Increase the priority of this boundary to unblock
// the next discrete event.
var r=getInstanceFromNode$1(n.blockedOn);null!==r&&jn(r);break}var i=attemptToDispatchEvent(n.topLevelType,n.eventSystemFlags,n.container,n.nativeEvent);null!==i?
// We're still blocked. Try again later.
n.blockedOn=i:
// We've successfully replayed the first event. Let's try the next one.
qn.shift()}// Next replay any continuous events.
null!==Qn&&attemptReplayContinuousQueuedEvent(Qn)&&(Qn=null),null!==Kn&&attemptReplayContinuousQueuedEvent(Kn)&&(Kn=null),null!==Yn&&attemptReplayContinuousQueuedEvent(Yn)&&(Yn=null),Gn.forEach(attemptReplayContinuousQueuedEventInMap),Xn.forEach(attemptReplayContinuousQueuedEventInMap)}function scheduleCallbackIfUnblocked(n,r){n.blockedOn===r&&(n.blockedOn=null,$n||($n=!0,// Schedule a callback to attempt replaying as many events as are
// now unblocked. This first might not actually be unblocked yet.
// We could check it early to avoid scheduling an unnecessary callback.
l.unstable_scheduleCallback(l.unstable_NormalPriority,replayUnblockedEvents)))}function retryIfBlockedOn(n){
// Mark anything that was blocked on this as no longer blocked
// and eligible for a replay.
if(qn.length>0){scheduleCallbackIfUnblocked(qn[0],n);// This is a exponential search for each boundary that commits. I think it's
// worth it because we expect very few discrete events to queue up and once
// we are actually fully unblocked it will be fast to replay them.
for(var r=1;r<qn.length;r++){var i=qn[r];i.blockedOn===n&&(i.blockedOn=null)}}null!==Qn&&scheduleCallbackIfUnblocked(Qn,n),null!==Kn&&scheduleCallbackIfUnblocked(Kn,n),null!==Yn&&scheduleCallbackIfUnblocked(Yn,n);var u=function unblock(r){return scheduleCallbackIfUnblocked(r,n)};Gn.forEach(u),Xn.forEach(u);for(var l=0;l<Jn.length;l++){var d=Jn[l];d.blockedOn===n&&(d.blockedOn=null)}for(;Jn.length>0;){var p=Jn[0];if(null!==p.blockedOn)
// We're still blocked.
break;attemptExplicitHydrationTarget(p),null===p.blockedOn&&
// We're unblocked.
Jn.shift()}}// do it in two places, which duplicates logic
// and increases the bundle size, we do it all
// here once. If we remove or refactor the
// SimpleEventPlugin, we should also remove or
// update the below line.
var tr={},nr=new Map,rr=new Map,or=[st,fn,gn,ft,pt,mt],ar=[Ct,"drag",wt,"dragEnter",Tt,"dragExit",xt,"dragLeave",Et,"dragOver",qt,"mouseMove",Qt,"mouseOut",Kt,"mouseOver",nn,"pointerMove",rn,"pointerOut",on,"pointerOver",cn,"scroll",bn,"toggle",wn,"touchMove",Pn,"wheel"],ir=[tt,"abort",nt,"animationEnd",rt,"animationIteration",ot,"animationStart",it,"canPlay",ut,"canPlayThrough",Rt,"durationChange",It,"emptied",_t,"encrypted",Dt,"ended",Ft,"error",Ot,"gotPointerCapture",Lt,"load",zt,"loadedData",Vt,"loadedMetadata",jt,"loadStart",Bt,"lostPointerCapture",Zt,"playing",un,"progress",pn,"seeking",mn,"stalled",vn,"suspend",yn,"timeUpdate",xn,"transitionEnd",Sn,"waiting"];
/**
     * Turns
     * ['abort', ...]
     * into
     * eventTypes = {
     *   'abort': {
     *     phasedRegistrationNames: {
     *       bubbled: 'onAbort',
     *       captured: 'onAbortCapture',
     *     },
     *     dependencies: [TOP_ABORT],
     *   },
     *   ...
     * };
     * topLevelEventsToDispatchConfig = new Map([
     *   [TOP_ABORT, { sameConfig }],
     * ]);
     */
function processSimpleEventPluginPairsByPriority(n,r){
// As the event types are in pairs of two, we need to iterate
// through in twos. The events are in pairs of two to save code
// and improve init perf of processing this array, as it will
// result in far fewer object allocations and property accesses
// if we only use three arrays to process all the categories of
// instead of tuples.
for(var i=0;i<n.length;i+=2){var u=n[i],l=n[i+1],d="on"+(l[0].toUpperCase()+l.slice(1)),p={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[u],eventPriority:r};rr.set(u,r),nr.set(u,p),tr[l]=p}}// SimpleEventPlugin
processSimpleEventPluginPairsByPriority([at,"blur",lt,"cancel",ct,"click",dt,"close",ht,"contextMenu",vt,"copy",gt,"cut",bt,"auxClick",yt,"doubleClick",kt,"dragEnd",St,"dragStart",Pt,"drop",Nt,"focus",At,"input",Ht,"invalid",Wt,"keyDown",Ut,"keyPress",Mt,"keyUp",$t,"mouseDown",Yt,"mouseUp",Gt,"paste",Xt,"pause",Jt,"play",en,"pointerCancel",tn,"pointerDown",an,"pointerUp",ln,"rateChange",sn,"reset",dn,"seeked",hn,"submit",Cn,"touchCancel",kn,"touchEnd",Tn,"touchStart",En,"volumeChange"],0),processSimpleEventPluginPairsByPriority(ar,1),processSimpleEventPluginPairsByPriority(ir,2),// Not used by SimpleEventPlugin
function processTopEventPairsByPriority(n,r){for(var i=0;i<n.length;i++)rr.set(n[i],r)}(or,0);// Intentionally not named imports because Rollup would use dynamic dispatch for
var ur=l.unstable_UserBlockingPriority,lr=l.unstable_runWithPriority,sr=!0;// TODO: can we stop exporting these?
function setEnabled(n){sr=!!n}function trapBubbledEvent(n,r){trapEventForPluginEventSystem(r,n,!1)}function trapCapturedEvent(n,r){trapEventForPluginEventSystem(r,n,!0)}function trapEventForPluginEventSystem(n,r,i){var u;switch(function getEventPriorityForPluginSystem(n){var r=rr.get(n);// Default to a ContinuousEvent. Note: we might
// want to warn if we can't detect the priority
// for the event.
return void 0===r?2:r}(r)){case 0:u=dispatchDiscreteEvent.bind(null,r,1,n);break;case 1:u=dispatchUserBlockingUpdate.bind(null,r,1,n);break;default:u=dispatchEvent.bind(null,r,1,n)}var l=r;i?function addEventCaptureListener(n,r,i){n.addEventListener(r,i,!0)}(n,l,u):function addEventBubbleListener(n,r,i){n.addEventListener(r,i,!1)}(n,l,u)}function dispatchDiscreteEvent(n,r,i,u){!function flushDiscreteUpdatesIfNeeded(n){
// event.timeStamp isn't overly reliable due to inconsistencies in
// how different browsers have historically provided the time stamp.
// Some browsers provide high-resolution time stamps for all events,
// some provide low-resolution time stamps for all events. FF < 52
// even mixes both time stamps together. Some browsers even report
// negative time stamps or time stamps that are 0 (iOS9) in some cases.
// Given we are only comparing two time stamps with equality (!==),
// we are safe from the resolution differences. If the time stamp is 0
// we bail-out of preventing the flush, which can affect semantics,
// such as if an earlier flush removes or adds event listeners that
// are fired in the subsequent flush. However, this is the same
// behaviour as we had before this change, so the risks are low.
X||Y()}(u.timeStamp),function discreteUpdates(n,r,i,u,l){var d=X;X=!0;try{return K(n,r,i,u,l)}finally{(X=d)||finishEventHandler()}}(dispatchEvent,n,r,i,u)}function dispatchUserBlockingUpdate(n,r,i,u){lr(ur,dispatchEvent.bind(null,n,r,i,u))}function dispatchEvent(n,r,i,u){if(sr)if(function hasQueuedDiscreteEvents(){return qn.length>0}()&&isReplayableDiscreteEvent(n))
// If we already have a queue of discrete events, and this is another discrete
// event, then we can't dispatch it regardless of its target, since they
// need to dispatch in order.
queueDiscreteEvent(null,// Flags that we're not actually blocked on anything as far as we know.
n,r,i,u);else{var l=attemptToDispatchEvent(n,r,i,u);null!==l?isReplayableDiscreteEvent(n)?
// This this to be replayed later once the target is available.
queueDiscreteEvent(l,n,r,i,u):function queueIfContinuousEvent(n,r,i,u,l){
// These set relatedTarget to null because the replayed event will be treated as if we
// moved from outside the window (no target) onto the target once it hydrates.
// Instead of mutating we could clone the event.
switch(r){case Nt:return Qn=accumulateOrCreateContinuousQueuedReplayableEvent(Qn,n,r,i,u,l),!0;case wt:return Kn=accumulateOrCreateContinuousQueuedReplayableEvent(Kn,n,r,i,u,l),!0;case Kt:return Yn=accumulateOrCreateContinuousQueuedReplayableEvent(Yn,n,r,i,u,l),!0;case on:var d=l,p=d.pointerId;return Gn.set(p,accumulateOrCreateContinuousQueuedReplayableEvent(Gn.get(p)||null,n,r,i,u,d)),!0;case Ot:var f=l,m=f.pointerId;return Xn.set(m,accumulateOrCreateContinuousQueuedReplayableEvent(Xn.get(m)||null,n,r,i,u,f)),!0}return!1}(l,n,r,i,u)||(// We need to clear only if we didn't queue because
// queueing is accummulative.
clearIfContinuousEvent(n,u),dispatchEventForLegacyPluginEventSystem(n,r,u,null)):
// We successfully dispatched this event.
clearIfContinuousEvent(n,u)}}// Attempt dispatching an event. Returns a SuspenseInstance or Container if it's blocked.
function attemptToDispatchEvent(n,r,i,u){
// TODO: Warn if _enabled is false.
var l=getClosestInstanceFromNode(getEventTarget(u));if(null!==l){var d=getNearestMountedFiber(l);if(null===d)
// This tree has been unmounted already. Dispatch without a target.
l=null;else{var p=d.tag;if(p===_){var f=getSuspenseInstanceFromFiber(d);if(null!==f)
// Queue the event to be replayed later. Abort dispatching since we
// don't want this event dispatched twice through the event system.
// TODO: If this is the first discrete event in the queue. Schedule an increased
// priority for this boundary.
return f;// This shouldn't happen, something went wrong but to avoid blocking
// the whole system, dispatch the event without a target.
// TODO: Warn.
l=null}else if(3===p){if(d.stateNode.hydrate)
// If this happens during a replay something went wrong and it might block
// the whole system.
return getContainerFromFiber(d);l=null}else d!==l&&(
// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
l=null)}}// We're not blocked on anything.
return dispatchEventForLegacyPluginEventSystem(n,r,u,l),null}// List derived from Gecko source code:
// https://github.com/mozilla/gecko-dev/blob/4e638efc71/layout/style/test/property_database.js
var cr={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},dr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};
/**
     * CSS properties which accept numbers but are not in units of "px".
     */
/**
     * Support style names that may come passed in prefixed by adding permutations
     * of vendor prefixes.
     */
var pr=["Webkit","ms","Moz","O"];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
/**
     * Convert a value into the proper css writable value. The style name `name`
     * should be logical (no hyphens), as specified
     * in `CSSProperty.isUnitlessNumber`.
     *
     * @param {string} name CSS property name such as `topMargin`.
     * @param {*} value CSS property value such as `10px`.
     * @return {string} Normalized style value with dimensions applied.
     */
function dangerousStyleValue(n,r,i){return null==r||"boolean"===typeof r||""===r?"":i||"number"!==typeof r||0===r||dr.hasOwnProperty(n)&&dr[n]?(""+r).trim():r+"px"}Object.keys(dr).forEach((function(n){pr.forEach((function(r){dr[
/**
     * @param {string} prefix vendor-specific prefix, eg: Webkit
     * @param {string} key style name, eg: transitionDuration
     * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
     * WebkitTransitionDuration
     */
function prefixKey(n,r){return n+r.charAt(0).toUpperCase()+r.substring(1)}(r,n)]=dr[n]}))}));var fr=/([A-Z])/g,mr=/^ms-/;var hr=/^(?:webkit|moz|o)[A-Z]/,vr=/^-ms-/,gr=/-(.)/g,yr=/;\s*$/,br={},Cr={},kr=!1,wr=!1,Tr=function warnHyphenatedStyleName(n){br.hasOwnProperty(n)&&br[n]||(br[n]=!0,error("Unsupported style property %s. Did you mean %s?",n,// As Andi Smith suggests
// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
// is converted to lowercase `ms`.
function camelize(n){return n.replace(gr,(function(n,r){return r.toUpperCase()}))}(n.replace(vr,"ms-"))))},xr=function warnValidStyle(n,r){n.indexOf("-")>-1?Tr(n):hr.test(n)?function warnBadVendoredStyleName(n){br.hasOwnProperty(n)&&br[n]||(br[n]=!0,error("Unsupported vendor-prefixed style property %s. Did you mean %s?",n,n.charAt(0).toUpperCase()+n.slice(1)))}(n):yr.test(r)&&function warnStyleValueWithSemicolon(n,r){Cr.hasOwnProperty(r)&&Cr[r]||(Cr[r]=!0,error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',n,r.replace(yr,"")))}(n,r),"number"===typeof r&&(isNaN(r)?function warnStyleValueIsNaN(n,r){kr||(kr=!0,error("`NaN` is an invalid value for the `%s` css style property.",n))}(n):isFinite(r)||function warnStyleValueIsInfinity(n,r){wr||(wr=!0,error("`Infinity` is an invalid value for the `%s` css style property.",n))}(n))};
/**
     * Operations for dealing with CSS properties.
     */
/**
     * This creates a string that is expected to be equivalent to the style
     * attribute generated by server-side rendering. It by-passes warnings and
     * security checks so it's not safe to use this value for anything other than
     * comparison. It is only used in DEV for SSR validation.
     */
function createDangerousStringForStyles(n){var r="",i="";for(var u in n)if(n.hasOwnProperty(u)){var l=n[u];if(null!=l){var d=0===u.indexOf("--");r+=i+(d?u:u.replace(fr,"-$1").toLowerCase().replace(mr,"-ms-"))+":",r+=dangerousStyleValue(u,l,d),i=";"}}return r||null}
/**
     * Sets the value for multiple styles on a node.  If a value is specified as
     * '' (empty string), the corresponding style property will be unset.
     *
     * @param {DOMElement} node
     * @param {object} styles
     */function setValueForStyles(n,r){var i=n.style;for(var u in r)if(r.hasOwnProperty(u)){var l=0===u.indexOf("--");l||xr(u,r[u]);var d=dangerousStyleValue(u,r[u],l);"float"===u&&(u="cssFloat"),l?i.setProperty(u,d):i[u]=d}}
/**
     * Given {color: 'red', overflow: 'hidden'} returns {
     *   color: 'color',
     *   overflowX: 'overflow',
     *   overflowY: 'overflow',
     * }. This can be read as "the overflowY property was set by the overflow
     * shorthand". That is, the values are the property that each was derived from.
     */
function expandShorthandMap(n){var r={};for(var i in n)for(var u=cr[i]||[i],l=0;l<u.length;l++)r[u[l]]=i;return r}
/**
     * When mixing shorthand and longhand property names, we warn during updates if
     * we expect an incorrect result to occur. In particular, we warn for:
     *
     * Updating a shorthand property (longhand gets overwritten):
     *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
     *   becomes .style.font = 'baz'
     * Removing a shorthand property (longhand gets lost too):
     *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
     *   becomes .style.font = ''
     * Removing a longhand property (should revert to shorthand; doesn't):
     *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
     *   becomes .style.fontVariant = ''
     */ // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var Er=u({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),Sr=null;// `omittedCloseTags` except that `menuitem` should still have its closing tag.
function assertValidProps(n,r){if(r){// Note the use of `==` which checks for null or undefined.
if(Er[n]&&(null!=r.children||null!=r.dangerouslySetInnerHTML))throw Error(n+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."+Sr.getStackAddendum());if(null!=r.dangerouslySetInnerHTML){if(null!=r.children)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof r.dangerouslySetInnerHTML||!("__html"in r.dangerouslySetInnerHTML))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")}if(!r.suppressContentEditableWarning&&r.contentEditable&&null!=r.children&&error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),null!=r.style&&"object"!==typeof r.style)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."+Sr.getStackAddendum())}}function isCustomComponent(n,r){if(-1===n.indexOf("-"))return"string"===typeof r.is;switch(n){
// These are reserved SVG and MathML elements.
// We don't mind this whitelist too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
Sr=f.ReactDebugCurrentFrame;var Pr={
// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",download:"download",draggable:"draggable",enctype:"encType",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",
// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},Rr={"aria-current":0,
// state
"aria-details":0,"aria-disabled":0,
// state
"aria-hidden":0,
// state
"aria-invalid":0,
// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,
// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,
// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,
// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,
// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Ir={},_r=new RegExp("^(aria)-["+ee+"]*$"),Dr=new RegExp("^(aria)[A-Z]["+ee+"]*$"),Fr=Object.prototype.hasOwnProperty;function validateProperty(n,r){if(Fr.call(Ir,r)&&Ir[r])return!0;if(Dr.test(r)){var i="aria-"+r.slice(4).toLowerCase(),u=Rr.hasOwnProperty(i)?i:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==u)return error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",r),Ir[r]=!0,!0;// aria-* attributes should be lowercase; suggest the lowercase version.
if(r!==u)return error("Invalid ARIA attribute `%s`. Did you mean `%s`?",r,u),Ir[r]=!0,!0}if(_r.test(r)){var l=r.toLowerCase(),d=Rr.hasOwnProperty(l)?l:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==d)return Ir[r]=!0,!1;// aria-* attributes should be lowercase; suggest the lowercase version.
if(r!==d)return error("Unknown ARIA attribute `%s`. Did you mean `%s`?",r,d),Ir[r]=!0,!0}return!0}function validateProperties(n,r){isCustomComponent(n,r)||function warnInvalidARIAProps(n,r){var i=[];for(var u in r)validateProperty(0,u)||i.push(u);var l=i.map((function(n){return"`"+n+"`"})).join(", ");1===i.length?error("Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",l,n):i.length>1&&error("Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",l,n)}(n,r)}var Nr=!1;var Or,Ar={},Hr=Object.prototype.hasOwnProperty,Wr=/^on./,Ur=/^on[^A-Z]/,Mr=new RegExp("^(aria)-["+ee+"]*$"),Lr=new RegExp("^(aria)[A-Z]["+ee+"]*$");Or=function validateProperty$1(n,r,i,u){if(Hr.call(Ar,r)&&Ar[r])return!0;var l=r.toLowerCase();if("onfocusin"===l||"onfocusout"===l)return error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Ar[r]=!0,!0;// We can't rely on the event system being injected on the server.
if(u){if(L.hasOwnProperty(r))return!0;var d=z.hasOwnProperty(l)?z[l]:null;if(null!=d)return error("Invalid event handler property `%s`. Did you mean `%s`?",r,d),Ar[r]=!0,!0;if(Wr.test(r))return error("Unknown event handler property `%s`. It will be ignored.",r),Ar[r]=!0,!0}else if(Wr.test(r))
// If no event plugins have been injected, we are in a server environment.
// So we can't tell if the event name is correct for sure, but we can filter
// out known bad ones like `onclick`. We can't suggest a specific replacement though.
return Ur.test(r)&&error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",r),Ar[r]=!0,!0;// Let the ARIA attribute hook validate ARIA attributes
if(Mr.test(r)||Lr.test(r))return!0;if("innerhtml"===l)return error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Ar[r]=!0,!0;if("aria"===l)return error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Ar[r]=!0,!0;if("is"===l&&null!==i&&void 0!==i&&"string"!==typeof i)return error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof i),Ar[r]=!0,!0;if("number"===typeof i&&isNaN(i))return error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",r),Ar[r]=!0,!0;var p=getPropertyInfo(r),f=null!==p&&0===p.type;// Known attributes should match the casing specified in the property config.
if(Pr.hasOwnProperty(l)){var m=Pr[l];if(m!==r)return error("Invalid DOM property `%s`. Did you mean `%s`?",r,m),Ar[r]=!0,!0}else if(!f&&r!==l)
// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
return error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",r,l),Ar[r]=!0,!0;return"boolean"===typeof i&&shouldRemoveAttributeWithWarning(r,i,p,!1)?(i?error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',i,r,r,i,r):error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',i,r,r,i,r,r,r),Ar[r]=!0,!0):// Now that we've validated casing, do not validate
// data types for reserved props
!!f||(// Warn when a known attribute is a bad type
shouldRemoveAttributeWithWarning(r,i,p,!1)?(Ar[r]=!0,!1):(// Warn when passing the strings 'false' or 'true' into a boolean prop
"false"!==i&&"true"!==i||null===p||3!==p.type||(error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",i,r,"false"===i?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',r,i),Ar[r]=!0),!0))};function validateProperties$2(n,r,i){isCustomComponent(n,r)||function warnUnknownProperties(n,r,i){var u=[];for(var l in r)Or(0,l,r[l],i)||u.push(l);var d=u.map((function(n){return"`"+n+"`"})).join(", ");1===u.length?error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior",d,n):u.length>1&&error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior",d,n)}(n,r,i)}var jr,zr,Vr,Br,$r,qr,Qr,Kr,Yr,Gr,Xr=!1,Jr="dangerouslySetInnerHTML",Zr="suppressContentEditableWarning",eo="suppressHydrationWarning",to="autoFocus",no="children",ro="style",oo=Qe;jr={
// Chrome is the only major browser not shipping <time>. But as of July
// 2017 it intends to ship it due to widespread usage. We intentionally
// *don't* warn for <time> even if it's unrecognized by Chrome because
// it soon will be, and many apps have been using it anyway.
time:!0,
// There are working polyfills for <dialog>. Let people use it.
dialog:!0,
// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:!0},Vr=function validatePropertiesInDevelopment(n,r){validateProperties(n,r),function validateProperties$1(n,r){"input"!==n&&"textarea"!==n&&"select"!==n||null==r||null!==r.value||Nr||(Nr=!0,"select"===n&&r.multiple?error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",n):error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",n))}(n,r),validateProperties$2(n,r,
/* canUseEventSystem */
!0)},// IE 11 parses & normalizes the style attribute as opposed to other
// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
Kr=V&&!document.documentMode;// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var ao=/\r\n?/g,io=/\u0000|\uFFFD/g;function ensureListeningTo(n,r){!function legacyListenToEvent(n,r){for(var i=getListenerMapForElement(r),u=j[n],l=0;l<u.length;l++)legacyListenToTopLevelEvent(u[l],r,i)}(r,9===n.nodeType||11===n.nodeType?n:n.ownerDocument)}function getOwnerDocumentFromRootContainer(n){return 9===n.nodeType?n:n.ownerDocument}function noop(){}function trapClickOnNonInteractiveElement(n){
// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
n.onclick=noop}function setInitialProperties(n,r,i,u){var l,d=isCustomComponent(r,i);switch(Vr(r,i),r){case"iframe":case"object":case"embed":trapBubbledEvent(Lt,n),l=i;break;case"video":case"audio":
// Create listener for each media event
for(var p=0;p<Rn.length;p++)trapBubbledEvent(Rn[p],n);l=i;break;case"source":trapBubbledEvent(Ft,n),l=i;break;case"img":case"image":case"link":trapBubbledEvent(Ft,n),trapBubbledEvent(Lt,n),l=i;break;case"form":trapBubbledEvent(sn,n),trapBubbledEvent(hn,n),l=i;break;case"details":trapBubbledEvent(bn,n),l=i;break;case"input":initWrapperState(n,i),l=getHostProps(n,i),trapBubbledEvent(Ht,n),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(u,"onChange");break;case"option":validateProps(0,i),l=getHostProps$1(0,i);break;case"select":initWrapperState$1(n,i),l=getHostProps$2(0,i),trapBubbledEvent(Ht,n),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(u,"onChange");break;case"textarea":initWrapperState$2(n,i),l=getHostProps$3(n,i),trapBubbledEvent(Ht,n),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(u,"onChange");break;default:l=i}switch(assertValidProps(r,l),function setInitialDOMProperties(n,r,i,u,l){for(var d in u)if(u.hasOwnProperty(d)){var p=u[d];if(d===ro)p&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(p),// Relies on `updateStylesByID` not mutating `styleUpdates`.
setValueForStyles(r,p);else if(d===Jr){var f=p?p.__html:void 0;null!=f&&Ge(r,f)}else d===no?"string"===typeof p?("textarea"!==n||""!==p)&&Xe(r,p):"number"===typeof p&&Xe(r,""+p):d===Zr||d===eo||d===to||(L.hasOwnProperty(d)?null!=p&&("function"!==typeof p&&Qr(d,p),ensureListeningTo(i,d)):null!=p&&setValueForProperty(r,d,p,l))}}(r,n,u,l,d),r){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(n),postMountWrapper(n,i,!1);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(n),postMountWrapper$3(n);break;case"option":!function postMountWrapper$1(n,r){
// value="" should make a value attribute (#6219)
null!=r.value&&n.setAttribute("value",toString(getToStringValue(r.value)))}(n,i);break;case"select":!function postMountWrapper$2(n,r){var i=n;i.multiple=!!r.multiple;var u=r.value;null!=u?updateOptions(i,!!r.multiple,u,!1):null!=r.defaultValue&&updateOptions(i,!!r.multiple,r.defaultValue,!0)}(n,i);break;default:"function"===typeof l.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(n)}}// Calculate the diff between the two objects.
function diffProperties(n,r,i,u,l){Vr(r,u);var d,p,f,m,h=null;switch(r){case"input":d=getHostProps(n,i),p=getHostProps(n,u),h=[];break;case"option":d=getHostProps$1(0,i),p=getHostProps$1(0,u),h=[];break;case"select":d=getHostProps$2(0,i),p=getHostProps$2(0,u),h=[];break;case"textarea":d=getHostProps$3(n,i),p=getHostProps$3(n,u),h=[];break;default:p=u,"function"!==typeof(d=i).onClick&&"function"===typeof p.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(n)}assertValidProps(r,p);var v=null;for(f in d)if(!p.hasOwnProperty(f)&&d.hasOwnProperty(f)&&null!=d[f])if(f===ro){var g=d[f];for(m in g)g.hasOwnProperty(m)&&(v||(v={}),v[m]="")}else f===Jr||f===no||f===Zr||f===eo||f===to||(L.hasOwnProperty(f)?
// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
h||(h=[]):
// For all other deleted properties we add it to the queue. We use
// the whitelist in the commit phase instead.
(h=h||[]).push(f,null));for(f in p){var y=p[f],b=null!=d?d[f]:void 0;if(p.hasOwnProperty(f)&&y!==b&&(null!=y||null!=b))if(f===ro)if(y&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(y),b){
// Unset styles on `lastProp` but not on `nextProp`.
for(m in b)!b.hasOwnProperty(m)||y&&y.hasOwnProperty(m)||(v||(v={}),v[m]="");// Update styles that changed since `lastProp`.
for(m in y)y.hasOwnProperty(m)&&b[m]!==y[m]&&(v||(v={}),v[m]=y[m])}else
// Relies on `updateStylesByID` not mutating `styleUpdates`.
v||(h||(h=[]),h.push(f,v)),v=y;else if(f===Jr){var C=y?y.__html:void 0,k=b?b.__html:void 0;null!=C&&k!==C&&(h=h||[]).push(f,C)}else f===no?b===y||"string"!==typeof y&&"number"!==typeof y||(h=h||[]).push(f,""+y):f===Zr||f===eo||(L.hasOwnProperty(f)?(null!=y&&(
// We eagerly listen to this even though we haven't committed yet.
"function"!==typeof y&&Qr(f,y),ensureListeningTo(l,f)),h||b===y||(
// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
h=[])):
// For any other property we always add it to the queue and then we
// filter it out using the whitelist during the commit.
(h=h||[]).push(f,y))}return v&&(!function validateShorthandPropertyCollisionInDev(n,r){if(r){var i,u=expandShorthandMap(n),l=expandShorthandMap(r),d={};for(var p in u){var f=u[p],m=l[p];if(m&&f!==m){var h=f+","+m;if(d[h])continue;d[h]=!0,error("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",null==(i=n[f])||"boolean"===typeof i||""===i?"Removing":"Updating",f,m)}}}}(v,p.style),(h=h||[]).push(ro,v)),h}// Apply the diff.
function updateProperties(n,r,i,u,l){
// Update checked *before* name.
// In the middle of an update, it is possible to have multiple checked.
// When a checked radio tries to change name, browser makes another radio's checked false.
"input"===i&&"radio"===l.type&&null!=l.name&&updateChecked(n,l);isCustomComponent(i,u);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(// Apply the diff.
function updateDOMProperties(n,r,i,u){
// TODO: Handle wasCustomComponentTag
for(var l=0;l<r.length;l+=2){var d=r[l],p=r[l+1];d===ro?setValueForStyles(n,p):d===Jr?Ge(n,p):d===no?Xe(n,p):setValueForProperty(n,d,p,u)}}(n,r,0,isCustomComponent(i,l)),i){case"input":
// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
updateWrapper(n,l);break;case"textarea":updateWrapper$1(n,l);break;case"select":
// <select> value update needs to occur after <option> children
// reconciliation
!function postUpdateWrapper(n,r){var i=n,u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var l=r.value;null!=l?updateOptions(i,!!r.multiple,l,!1):u!==!!r.multiple&&(
// For simplicity, reapply `defaultValue` if `multiple` is toggled.
null!=r.defaultValue?updateOptions(i,!!r.multiple,r.defaultValue,!0):
// Revert the select back to its default unselected state.
updateOptions(i,!!r.multiple,r.multiple?[]:"",!1))}(n,l)}}function getPossibleStandardName(n){var r=n.toLowerCase();return Pr.hasOwnProperty(r)&&Pr[r]||null}function warnForUnmatchedText(n,r){Br(n.nodeValue,r)}function warnForDeletedHydratableElement(n,r){Xr||(Xr=!0,error("Did not expect server HTML to contain a <%s> in <%s>.",r.nodeName.toLowerCase(),n.nodeName.toLowerCase()))}function warnForDeletedHydratableText(n,r){Xr||(Xr=!0,error('Did not expect server HTML to contain the text node "%s" in <%s>.',r.nodeValue,n.nodeName.toLowerCase()))}function warnForInsertedHydratedElement(n,r,i){Xr||(Xr=!0,error("Expected server HTML to contain a matching <%s> in <%s>.",r,n.nodeName.toLowerCase()))}function warnForInsertedHydratedText(n,r){""!==r&&(Xr||(Xr=!0,error('Expected server HTML to contain a matching text node for "%s" in <%s>.',r,n.nodeName.toLowerCase())))}function getActiveElement(n){if("undefined"===typeof(n=n||("undefined"!==typeof document?document:void 0)))return null;try{return n.activeElement||n.body}catch(r){return n.body}}
/**
     * Given any node return the first leaf node without children.
     *
     * @param {DOMElement|DOMTextNode} node
     * @return {DOMElement|DOMTextNode}
     */function getLeafNode(n){for(;n&&n.firstChild;)n=n.firstChild;return n}
/**
     * Get the next sibling within a container. This will walk up the
     * DOM if a node's siblings have been exhausted.
     *
     * @param {DOMElement|DOMTextNode} node
     * @return {?DOMElement|DOMTextNode}
     */function getSiblingNode(n){for(;n;){if(n.nextSibling)return n.nextSibling;n=n.parentNode}}
/**
     * Get object describing the nodes which contain characters at offset.
     *
     * @param {DOMElement|DOMTextNode} root
     * @param {number} offset
     * @return {?object}
     */function getNodeForCharacterOffset(n,r){for(var i=getLeafNode(n),u=0,l=0;i;){if(3===i.nodeType){if(l=u+i.textContent.length,u<=r&&l>=r)return{node:i,offset:r-u};u=l}i=getLeafNode(getSiblingNode(i))}}
/**
     * @param {DOMElement} outerNode
     * @return {?object}
     */function getOffsets(n){var r=n.ownerDocument,i=r&&r.defaultView||window,u=i.getSelection&&i.getSelection();if(!u||0===u.rangeCount)return null;var l=u.anchorNode,d=u.anchorOffset,p=u.focusNode,f=u.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{
/* eslint-disable no-unused-expressions */
l.nodeType,p.nodeType}catch(m){return null}
/**
     * Returns {start, end} where `start` is the character/codepoint index of
     * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
     * `end` is the index of (focusNode, focusOffset).
     *
     * Returns null if you pass in garbage input but we should probably just crash.
     *
     * Exported only for testing.
     */
return function getModernOffsetsFromPoints(n,r,i,u,l){var d=0,p=-1,f=-1,m=0,h=0,v=n,g=null;e:for(;;){for(var y=null;v!==r||0!==i&&3!==v.nodeType||(p=d+i),v!==u||0!==l&&3!==v.nodeType||(f=d+l),3===v.nodeType&&(d+=v.nodeValue.length),null!==(y=v.firstChild);)// Moving from `node` to its first child `next`.
g=v,v=y;for(;;){if(v===n)
// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break e;if(g===r&&++m===i&&(p=d),g===u&&++h===l&&(f=d),null!==(y=v.nextSibling))break;g=(v=g).parentNode}// Moving from `node` to its next sibling `next`.
v=y}if(-1===p||-1===f)
// This should never happen. (Would happen if the anchor/focus nodes aren't
// actually inside the passed-in node.)
return null;return{start:p,end:f}}
/**
     * In modern non-IE browsers, we can support both forward and backward
     * selections.
     *
     * Note: IE10+ supports the Selection object, but it does not support
     * the `extend` method, which means that even in modern IE, it's not possible
     * to programmatically create a backward selection. Thus, for all IE
     * versions, we use the old IE API to create our selections.
     *
     * @param {DOMElement|DOMTextNode} node
     * @param {object} offsets
     */(n,l,d,p,f)}function isTextNode(n){return n&&3===n.nodeType}function containsNode(n,r){return!(!n||!r)&&(n===r||!isTextNode(n)&&(isTextNode(r)?containsNode(n,r.parentNode):"contains"in n?n.contains(r):!!n.compareDocumentPosition&&!!(16&n.compareDocumentPosition(r))))}function isInDocument(n){return n&&n.ownerDocument&&containsNode(n.ownerDocument.documentElement,n)}function isSameOriginFrame(n){try{
// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return"string"===typeof n.contentWindow.location.href}catch(r){return!1}}function getActiveElementDeep(){for(var n=window,r=getActiveElement();r instanceof n.HTMLIFrameElement;){if(!isSameOriginFrame(r))return r;r=getActiveElement((n=r.contentWindow).document)}return r}
/**
     * @ReactInputSelection: React input selection module. Based on Selection.js,
     * but modified to be suitable for react and has a couple of bug fixes (doesn't
     * assume buttons have range selections allowed).
     * Input selection module for React.
     */
/**
     * @hasSelectionCapabilities: we get the element types that support selection
     * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
     * and `selectionEnd` rows.
     */function hasSelectionCapabilities(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&("input"===r&&("text"===n.type||"search"===n.type||"tel"===n.type||"url"===n.type||"password"===n.type)||"textarea"===r||"true"===n.contentEditable)}
/**
     * @restoreSelection: If any selection information was potentially lost,
     * restore it. This is useful when performing operations that could remove dom
     * nodes and place them back in, resulting in focus being lost.
     */
function restoreSelection(n){var r=getActiveElementDeep(),i=n.focusedElem,u=n.selectionRange;if(r!==i&&isInDocument(i)){null!==u&&hasSelectionCapabilities(i)&&
/**
     * @setSelection: Sets the selection bounds of a textarea or input and focuses
     * the input.
     * -@input     Set selection bounds of this input or textarea
     * -@offsets   Object of same form that is returned from get*
     */
function setSelection(n,r){var i=r.start,u=r.end;void 0===u&&(u=i);"selectionStart"in n?(n.selectionStart=i,n.selectionEnd=Math.min(u,n.value.length)):function setOffsets(n,r){var i=n.ownerDocument||document,u=i&&i.defaultView||window;// Edge fails with "Object expected" in some scenarios.
// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(u.getSelection){var l=u.getSelection(),d=n.textContent.length,p=Math.min(r.start,d),f=void 0===r.end?p:Math.min(r.end,d);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!l.extend&&p>f){var m=f;f=p,p=m}var h=getNodeForCharacterOffset(n,p),v=getNodeForCharacterOffset(n,f);if(h&&v){if(1===l.rangeCount&&l.anchorNode===h.node&&l.anchorOffset===h.offset&&l.focusNode===v.node&&l.focusOffset===v.offset)return;var g=i.createRange();g.setStart(h.node,h.offset),l.removeAllRanges(),p>f?(l.addRange(g),l.extend(v.node,v.offset)):(g.setEnd(v.node,v.offset),l.addRange(g))}}}(n,r)}(i,u);// Focusing a node can change the scroll position, which is undesirable
for(var l=[],d=i;d=d.parentNode;)1===d.nodeType&&l.push({element:d,left:d.scrollLeft,top:d.scrollTop});"function"===typeof i.focus&&i.focus();for(var p=0;p<l.length;p++){var f=l[p];f.element.scrollLeft=f.left,f.element.scrollTop=f.top}}}
/**
     * @getSelection: Gets the selection bounds of a focused textarea, input or
     * contentEditable node.
     * -@input: Look up selection bounds of this input
     * -@return {start: selectionStart, end: selectionEnd}
     */function getSelection(n){return("selectionStart"in n?{start:n.selectionStart,end:n.selectionEnd}:getOffsets(n))||{start:0,end:0}}Yr=function normalizeMarkupForTextOrAttribute(n){return("string"===typeof n?n:""+n).replace(ao,"\n").replace(io,"")},Br=function warnForTextDifference(n,r){if(!Xr){var i=Yr(r),u=Yr(n);u!==i&&(Xr=!0,error('Text content did not match. Server: "%s" Client: "%s"',u,i))}},$r=function warnForPropDifference(n,r,i){if(!Xr){var u=Yr(i),l=Yr(r);l!==u&&(Xr=!0,error("Prop `%s` did not match. Server: %s Client: %s",n,JSON.stringify(l),JSON.stringify(u)))}},qr=function warnForExtraAttributes(n){if(!Xr){Xr=!0;var r=[];n.forEach((function(n){r.push(n)})),error("Extra attributes from the server: %s",r)}},Qr=function warnForInvalidEventListener(n,r){!1===r?error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",n,n,n):error("Expected `%s` listener to be a function, instead got a value of `%s` type.",n,typeof r)},// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
Gr=function normalizeHTML(n,r){
// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var i=n.namespaceURI===oo?n.ownerDocument.createElement(n.tagName):n.ownerDocument.createElementNS(n.namespaceURI,n.tagName);return i.innerHTML=r,i.innerHTML};var uo,lo,so=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],co=["applet","caption","html","table","td","th","marquee","object","template",// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],po=co.concat(["button"]),fo=["dd","dt","li","option","optgroup","p","rp","rt"],mo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};lo=function updatedAncestorInfo(n,r){var i=u({},n||mo),l={tag:r};return-1!==co.indexOf(r)&&(i.aTagInScope=null,i.buttonTagInScope=null,i.nobrTagInScope=null),-1!==po.indexOf(r)&&(i.pTagInButtonScope=null),// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
-1!==so.indexOf(r)&&"address"!==r&&"div"!==r&&"p"!==r&&(i.listItemTagAutoclosing=null,i.dlItemTagAutoclosing=null),i.current=l,"form"===r&&(i.formTag=l),"a"===r&&(i.aTagInScope=l),"button"===r&&(i.buttonTagInScope=l),"nobr"===r&&(i.nobrTagInScope=l),"p"===r&&(i.pTagInButtonScope=l),"li"===r&&(i.listItemTagAutoclosing=l),"dd"!==r&&"dt"!==r||(i.dlItemTagAutoclosing=l),i};
/**
       * Returns whether
       */
var ho={};
/**
       * Returns whether
       */uo=function validateDOMNesting(n,r,i){var u=(i=i||mo).current,l=u&&u.tag;null!=r&&(null!=n&&error("validateDOMNesting: when childText is passed, childTag should be null"),n="#text");var d=function isTagValidWithParent(n,r){
// First, let's check if we're in an unusual parsing mode...
switch(r){
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case"select":return"option"===n||"optgroup"===n||"#text"===n;case"optgroup":return"option"===n||"#text"===n;
// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case"option":return"#text"===n;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case"tr":return"th"===n||"td"===n||"style"===n||"script"===n||"template"===n;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case"tbody":case"thead":case"tfoot":return"tr"===n||"style"===n||"script"===n||"template"===n;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case"colgroup":return"col"===n||"template"===n;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case"table":return"caption"===n||"colgroup"===n||"tbody"===n||"tfoot"===n||"thead"===n||"style"===n||"script"===n||"template"===n;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case"head":return"base"===n||"basefont"===n||"bgsound"===n||"link"===n||"meta"===n||"title"===n||"noscript"===n||"noframes"===n||"style"===n||"script"===n||"template"===n;
// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case"html":return"head"===n||"body"===n||"frameset"===n;case"frameset":return"frame"===n;case"#document":return"html"===n}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(n){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==r&&"h2"!==r&&"h3"!==r&&"h4"!==r&&"h5"!==r&&"h6"!==r;case"rp":case"rt":return-1===fo.indexOf(r);case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":
// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==r}return!0}(n,l)?null:u,p=d?null:function findInvalidAncestorForTag(n,r){switch(n){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return r.pTagInButtonScope;case"form":return r.formTag||r.pTagInButtonScope;case"li":return r.listItemTagAutoclosing;case"dd":case"dt":return r.dlItemTagAutoclosing;case"button":return r.buttonTagInScope;case"a":
// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return r.aTagInScope;case"nobr":return r.nobrTagInScope}return null}(n,i),f=d||p;if(f){var m=f.tag,h=!!d+"|"+n+"|"+m+"|"+getCurrentFiberStackInDev();if(!ho[h]){ho[h]=!0;var v=n,g="";if("#text"===n?/\S/.test(r)?v="Text nodes":(v="Whitespace text nodes",g=" Make sure you don't have any extra whitespace between tags on each line of your source code."):v="<"+n+">",d){var y="";"table"===m&&"tr"===n&&(y+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),error("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",v,m,g,y)}else error("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",v,m)}}};var vo="$?",go="$!",yo=null,bo=null;function shouldAutoFocusHostComponent(n,r){switch(n){case"button":case"input":case"select":case"textarea":return!!r.autoFocus}return!1}function prepareForCommit(n){yo=function isEnabled(){return sr}(),bo=function getSelectionInformation(){var n=getActiveElementDeep();return{
// Used by Flare
activeElementDetached:null,focusedElem:n,selectionRange:hasSelectionCapabilities(n)?getSelection(n):null}}(),setEnabled(!1)}function createInstance(n,r,i,u,l){var d=u;if(uo(n,null,d.ancestorInfo),"string"===typeof r.children||"number"===typeof r.children){var p=""+r.children,f=lo(d.ancestorInfo,n);uo(null,p,f)}var m=function createElement(n,r,i,u){var l,d,p=getOwnerDocumentFromRootContainer(i),f=u;// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
if(f===oo&&(f=getIntrinsicNamespace(n)),f===oo){if(// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
(l=isCustomComponent(n,r))||n===n.toLowerCase()||error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",n),"script"===n){
// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var m=p.createElement("div");m.innerHTML="<script><\/script>";// eslint-disable-line
// This is guaranteed to yield a script element.
var h=m.firstChild;d=m.removeChild(h)}else if("string"===typeof r.is)
// $FlowIssue `createElement` should be updated for Web Components
d=p.createElement(n,{is:r.is});else// Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
// attributes on `select`s needs to be added before `option`s are inserted.
// This prevents:
// - a bug where the `select` does not scroll to the correct option because singular
//  `select` elements automatically pick the first item #13222
// - a bug where the `select` set the first item as selected despite the `size` attribute #14239
// See https://github.com/facebook/react/issues/13222
// and https://github.com/facebook/react/issues/14239
if(
// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
d=p.createElement(n),"select"===n){var v=d;r.multiple?v.multiple=!0:r.size&&(
// Setting a size greater than 1 causes a select to behave like `multiple=true`, where
// it is possible that no option is selected.
// This is only necessary when a select in "single selection mode".
v.size=r.size)}}else d=p.createElementNS(f,n);return f===oo&&(l||"[object HTMLUnknownElement]"!==Object.prototype.toString.call(d)||Object.prototype.hasOwnProperty.call(jr,n)||(jr[n]=!0,error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",n))),d}(n,r,i,d.namespace);return precacheFiberNode(l,m),updateFiberProps(m,r),m}function shouldSetTextContent(n,r){return"textarea"===n||"option"===n||"noscript"===n||"string"===typeof r.children||"number"===typeof r.children||"object"===typeof r.dangerouslySetInnerHTML&&null!==r.dangerouslySetInnerHTML&&null!=r.dangerouslySetInnerHTML.__html}function shouldDeprioritizeSubtree(n,r){return!!r.hidden}function createTextInstance(n,r,i,u){uo(null,n,i.ancestorInfo);var l=function createTextNode(n,r){return getOwnerDocumentFromRootContainer(r).createTextNode(n)}(n,r);return precacheFiberNode(u,l),l}// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
var Co="function"===typeof setTimeout?setTimeout:void 0,ko="function"===typeof clearTimeout?clearTimeout:void 0;function resetTextContent(n){Xe(n,"")}function removeChild(n,r){n.removeChild(r)}function hideInstance(n){var r=n.style;"function"===typeof r.setProperty?r.setProperty("display","none","important"):r.display="none"}function unhideInstance(n,r){var i=r.style,u=void 0!==i&&null!==i&&i.hasOwnProperty("display")?i.display:null;n.style.display=dangerousStyleValue("display",u)}function unhideTextInstance(n,r){n.nodeValue=r}// -------------------
function isSuspenseInstanceFallback(n){return n.data===go}function getNextHydratable(n){
// Skip non-hydratable nodes.
for(;null!=n;n=n.nextSibling){var r=n.nodeType;if(1===r||3===r)break}return n}function getNextHydratableSibling(n){return getNextHydratable(n.nextSibling)}function getFirstHydratableChild(n){return getNextHydratable(n.firstChild)}function hydrateInstance(n,r,i,u,l,d){return precacheFiberNode(d,n),// TODO: Possibly defer this until the commit phase where all the events
// get attached.
updateFiberProps(n,i),function diffHydratedProperties(n,r,i,u,l){var d,p;// TODO: Make sure that we check isMounted before firing any of these events.
switch(zr=!0===i.suppressHydrationWarning,d=isCustomComponent(r,i),Vr(r,i),r){case"iframe":case"object":case"embed":trapBubbledEvent(Lt,n);break;case"video":case"audio":
// Create listener for each media event
for(var f=0;f<Rn.length;f++)trapBubbledEvent(Rn[f],n);break;case"source":trapBubbledEvent(Ft,n);break;case"img":case"image":case"link":trapBubbledEvent(Ft,n),trapBubbledEvent(Lt,n);break;case"form":trapBubbledEvent(sn,n),trapBubbledEvent(hn,n);break;case"details":trapBubbledEvent(bn,n);break;case"input":initWrapperState(n,i),trapBubbledEvent(Ht,n),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(l,"onChange");break;case"option":validateProps(0,i);break;case"select":initWrapperState$1(n,i),trapBubbledEvent(Ht,n),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(l,"onChange");break;case"textarea":initWrapperState$2(n,i),trapBubbledEvent(Ht,n),// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(l,"onChange")}assertValidProps(r,i),p=new Set;for(var m=n.attributes,h=0;h<m.length;h++)switch(m[h].name.toLowerCase()){
// Built-in SSR attribute is whitelisted
case"data-reactroot":
// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case"value":case"checked":case"selected":break;default:
// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
p.add(m[h].name)}var v=null;for(var g in i)if(i.hasOwnProperty(g)){var y=i[g];if(g===no)
// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
"string"===typeof y?n.textContent!==y&&(zr||Br(n.textContent,y),v=[no,y]):"number"===typeof y&&n.textContent!==""+y&&(zr||Br(n.textContent,y),v=[no,""+y]);else if(L.hasOwnProperty(g))null!=y&&("function"!==typeof y&&Qr(g,y),ensureListeningTo(l,g));else if(// Convince Flow we've calculated it (it's DEV-only in this method.)
"boolean"===typeof d){
// Validate that the properties correspond to their expected values.
var b=void 0,C=getPropertyInfo(g);if(zr);else if(g===Zr||g===eo||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
"value"===g||"checked"===g||"selected"===g);else if(g===Jr){var k=n.innerHTML,w=y?y.__html:void 0,T=Gr(n,null!=w?w:"");T!==k&&$r(g,k,T)}else if(g===ro){if(
// $FlowFixMe - Should be inferred as not undefined.
p.delete(g),Kr){var x=createDangerousStringForStyles(y);x!==(b=n.getAttribute("style"))&&$r(g,b,x)}}else if(d)
// $FlowFixMe - Should be inferred as not undefined.
p.delete(g.toLowerCase()),y!==(b=getValueForAttribute(n,g,y))&&$r(g,b,y);else if(!shouldIgnoreAttribute(g,C,d)&&!shouldRemoveAttribute(g,y,C,d)){var S=!1;if(null!==C)
// $FlowFixMe - Should be inferred as not undefined.
p.delete(C.attributeName),b=getValueForProperty(n,g,y,C);else{var P=u;if(P===oo&&(P=getIntrinsicNamespace(r)),P===oo)
// $FlowFixMe - Should be inferred as not undefined.
p.delete(g.toLowerCase());else{var R=getPossibleStandardName(g);null!==R&&R!==g&&(
// If an SVG prop is supplied with bad casing, it will
// be successfully parsed from HTML, but will produce a mismatch
// (and would be incorrectly rendered on the client).
// However, we already warn about bad casing elsewhere.
// So we'll skip the misleading extra mismatch warning in this case.
S=!0,// $FlowFixMe - Should be inferred as not undefined.
p.delete(R)),// $FlowFixMe - Should be inferred as not undefined.
p.delete(g)}b=getValueForAttribute(n,g,y)}y===b||S||$r(g,b,y)}}}switch(
// $FlowFixMe - Should be inferred as not undefined.
p.size>0&&!zr&&
// $FlowFixMe - Should be inferred as not undefined.
qr(p),r){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(n),postMountWrapper(n,i,!0);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(n),postMountWrapper$3(n);break;case"select":case"option":
// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:"function"===typeof i.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(n)}return v}(n,r,i,l.namespace,u)}// Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.
function getParentSuspenseInstance(n){for(var r=n.previousSibling,i=0// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
;r;){if(8===r.nodeType){var u=r.data;if("$"===u||u===go||u===vo){if(0===i)return r;i--}else"/$"===u&&i++}r=r.previousSibling}return null}var wo=Math.random().toString(36).slice(2),To="__reactInternalInstance$"+wo,xo="__reactEventHandlers$"+wo,Eo="__reactContainere$"+wo;function precacheFiberNode(n,r){r[To]=n}function unmarkContainerAsRoot(n){n[Eo]=null}function isContainerMarkedAsRoot(n){return!!n[Eo]}// Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.
function getClosestInstanceFromNode(n){var r=n[To];if(r)
// Don't return HostRoot or SuspenseComponent here.
return r;// If the direct event target isn't a React owned DOM node, we need to look
// to see if one of its parents is a React owned DOM node.
for(var i=n.parentNode;i;){if(
// We'll check if this is a container root that could include
// React nodes in the future. We need to check this first because
// if we're a child of a dehydrated container, we need to first
// find that inner container before moving on to finding the parent
// instance. Note that we don't check this field on  the targetNode
// itself because the fibers are conceptually between the container
// node and the first child. It isn't surrounding the container node.
// If it's not a container, we check if it's an instance.
r=i[Eo]||i[To]){
// Since this wasn't the direct target of the event, we might have
// stepped past dehydrated DOM nodes to get here. However they could
// also have been non-React nodes. We need to answer which one.
// If we the instance doesn't have any children, then there can't be
// a nested suspense boundary within it. So we can use this as a fast
// bailout. Most of the time, when people add non-React children to
// the tree, it is using a ref to a child-less DOM node.
// Normally we'd only need to check one of the fibers because if it
// has ever gone from having children to deleting them or vice versa
// it would have deleted the dehydrated boundary nested inside already.
// However, since the HostRoot starts out with an alternate it might
// have one on the alternate so we need to check in case this was a
// root.
var u=r.alternate;if(null!==r.child||null!==u&&null!==u.child)for(
// Next we need to figure out if the node that skipped past is
// nested within a dehydrated boundary and if so, which one.
var l=getParentSuspenseInstance(n);null!==l;){
// We found a suspense instance. That means that we haven't
// hydrated it yet. Even though we leave the comments in the
// DOM after hydrating, and there are boundaries in the DOM
// that could already be hydrated, we wouldn't have found them
// through this pass since if the target is hydrated it would
// have had an internalInstanceKey on it.
// Let's get the fiber associated with the SuspenseComponent
// as the deepest instance.
var d=l[To];if(d)return d;// If we don't find a Fiber on the comment, it might be because
// we haven't gotten to hydrate it yet. There might still be a
// parent boundary that hasn't above this one so we need to find
// the outer most that is known.
l=getParentSuspenseInstance(l)}return r}i=(n=i).parentNode}return null}
/**
     * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
     * instance, or null if the node was not rendered by this React.
     */function getInstanceFromNode$1(n){var r=n[To]||n[Eo];return r&&(5===r.tag||6===r.tag||r.tag===_||3===r.tag)?r:null}
/**
     * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
     * DOM node.
     */function getNodeFromInstance$1(n){if(5===n.tag||6===n.tag)
// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return n.stateNode;// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
throw Error("getNodeFromInstance: Invalid argument.")}function getFiberCurrentPropsFromNode$1(n){return n[xo]||null}function updateFiberProps(n,r){n[xo]=r}function getParent(n){do{n=n.return;// TODO: If this is a HostRoot we might want to bail out.
// That is depending on if we want nested subtrees (layers) to bubble
// events to their parent. We could also go through parentNode on the
// host node but that wouldn't work for React Native and doesn't let us
// do the portal feature.
}while(n&&5!==n.tag);return n||null}
/**
     * Return the lowest common ancestor of A and B, or null if they are in
     * different trees.
     */
/**
     * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
     * should would receive a `mouseEnter` or `mouseLeave` event.
     *
     * Does not invoke the callback on the nearest common ancestor because nothing
     * "entered" or "left" that element.
     */
function traverseEnterLeave(n,r,i,u,l){for(var d=n&&r?function getLowestCommonAncestor(n,r){for(var i=0,u=n;u;u=getParent(u))i++;for(var l=0,d=r;d;d=getParent(d))l++;// If A is deeper, crawl up.
for(;i-l>0;)n=getParent(n),i--;// If B is deeper, crawl up.
for(;l-i>0;)r=getParent(r),l--;// Walk in lockstep until we find a match.
for(var p=i;p--;){if(n===r||n===r.alternate)return n;n=getParent(n),r=getParent(r)}return null}
/**
     * Simulates the traversal of a two-phase, capture/bubble event dispatch.
     */(n,r):null,p=[];n&&n!==d;){var f=n.alternate;if(null!==f&&f===d)break;p.push(n),n=getParent(n)}for(var m=[];r&&r!==d;){var h=r.alternate;if(null!==h&&h===d)break;m.push(r),r=getParent(r)}for(var v=0;v<p.length;v++)i(p[v],"bubbled",u);for(var g=m.length;g-- >0;)i(m[g],"captured",l)}
/**
     * @param {object} inst The instance, which is the source of events.
     * @param {string} registrationName Name of listener (e.g. `onClick`).
     * @return {?function} The stored callback.
     */
function getListener(n,r){var i,u=n.stateNode;// TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
// live here; needs to be moved to a better place soon
if(!u)
// Work in progress (ex: onload events in incremental mode).
return null;var l=T(u);if(!l)
// Work in progress.
return null;if(i=l[r],function shouldPreventMouseEvent(n,r,i){switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!(!i.disabled||!function isInteractive(n){return"button"===n||"input"===n||"select"===n||"textarea"===n}(r));default:return!1}}(r,n.type,l))return null;if(i&&"function"!==typeof i)throw Error("Expected `"+r+"` listener to be a function, instead got a value of `"+typeof i+"` type.");return i}
/**
     * Some event types have a notion of different registration names for different
     * "phases" of propagation. This finds listeners by a given phase.
     */
/**
     * A small set of propagation patterns, each of which will accept a small amount
     * of information, and generate a set of "dispatch ready event objects" - which
     * are sets of events that have already been annotated with a set of dispatched
     * listener functions/ids. The API is designed this way to discourage these
     * propagation strategies from actually executing the dispatches, since we
     * always want to collect the entire set of dispatches before executing even a
     * single one.
     */
/**
     * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
     * here, allows us to not have to bind or create functions for each event.
     * Mutating the event's members allows us to not have to create a wrapping
     * "dispatch" object that pairs the event with the listener.
     */
function accumulateDirectionalDispatches(n,r,i){n||error("Dispatching inst must not be null");var u=function listenerAtPhase(n,r,i){return getListener(n,r.dispatchConfig.phasedRegistrationNames[i])}(n,i,r);u&&(i._dispatchListeners=accumulateInto(i._dispatchListeners,u),i._dispatchInstances=accumulateInto(i._dispatchInstances,n))}
/**
     * Collect dispatches (must be entirely collected before dispatching - see unit
     * tests). Lazily allocate the array to conserve memory.  We must loop through
     * each event and perform the traversal for each one. We cannot perform a
     * single traversal for the entire collection of events because each event may
     * have a different target.
     */function accumulateTwoPhaseDispatchesSingle(n){n&&n.dispatchConfig.phasedRegistrationNames&&function traverseTwoPhase(n,r,i){for(var u,l=[];n;)l.push(n),n=getParent(n);for(u=l.length;u-- >0;)r(l[u],"captured",i);for(u=0;u<l.length;u++)r(l[u],"bubbled",i)}(n._targetInst,accumulateDirectionalDispatches,n)}
/**
     * Accumulates without regard to direction, does not look for phased
     * registration names. Same as `accumulateDirectDispatchesSingle` but without
     * requiring that the `dispatchMarker` be the same as the dispatched ID.
     */function accumulateDispatches(n,r,i){if(n&&i&&i.dispatchConfig.registrationName){var u=getListener(n,i.dispatchConfig.registrationName);u&&(i._dispatchListeners=accumulateInto(i._dispatchListeners,u),i._dispatchInstances=accumulateInto(i._dispatchInstances,n))}}
/**
     * Accumulates dispatches on an `SyntheticEvent`, but only for the
     * `dispatchMarker`.
     * @param {SyntheticEvent} event
     */function accumulateDirectDispatchesSingle(n){n&&n.dispatchConfig.registrationName&&accumulateDispatches(n._targetInst,0,n)}function accumulateTwoPhaseDispatches(n){forEachAccumulated(n,accumulateTwoPhaseDispatchesSingle)}
/**
     * These variables store information about text content of a target node,
     * allowing comparison of content before and after a given event.
     *
     * Identify the node where selection currently begins, then observe
     * both its text content and its current position in the DOM. Since the
     * browser may natively replace the target node during composition, we can
     * use its position to find its replacement.
     *
     *
     */
var So=null,Po=null,Ro=null;function getData(){if(Ro)return Ro;var n,r,i=Po,u=i.length,l=getText(),d=l.length;for(n=0;n<u&&i[n]===l[n];n++);var p=u-n;for(r=1;r<=p&&i[u-r]===l[d-r];r++);var f=r>1?1-r:void 0;return Ro=l.slice(n,f)}function getText(){return"value"in So?So.value:So.textContent}var Io={type:null,target:null,
// currentTarget is set when dispatching; no use in copying it here
currentTarget:function currentTarget(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function timeStamp(n){return n.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
/**
     * @interface Event
     * @see http://www.w3.org/TR/DOM-Level-3-Events/
     */function functionThatReturnsTrue(){return!0}function functionThatReturnsFalse(){return!1}
/**
     * Synthetic events are dispatched by event plugins, typically in response to a
     * top-level event delegation handler.
     *
     * These systems should generally use pooling to reduce the frequency of garbage
     * collection. The system should check `isPersistent` to determine whether the
     * event should be released into the pool after being dispatched. Users that
     * need a persisted event should invoke `persist`.
     *
     * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
     * normalizing browser quirks. Subclasses do not necessarily have to implement a
     * DOM interface; custom application-specific events can also subclass this.
     *
     * @param {object} dispatchConfig Configuration used to dispatch this event.
     * @param {*} targetInst Marker identifying the event target.
     * @param {object} nativeEvent Native browser event.
     * @param {DOMEventTarget} nativeEventTarget Target node.
     */function SyntheticEvent(n,r,i,u){
// these have a getter/setter for warnings
delete this.nativeEvent,delete this.preventDefault,delete this.stopPropagation,delete this.isDefaultPrevented,delete this.isPropagationStopped,this.dispatchConfig=n,this._targetInst=r,this.nativeEvent=i;var l=this.constructor.Interface;for(var d in l)if(l.hasOwnProperty(d)){delete this[d];var p=l[d];p?this[d]=p(i):"target"===d?this.target=u:this[d]=i[d]}var f=null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue;return this.isDefaultPrevented=f?functionThatReturnsTrue:functionThatReturnsFalse,this.isPropagationStopped=functionThatReturnsFalse,this}
/**
     * Helper to nullify syntheticEvent instance properties when destructing
     *
     * @param {String} propName
     * @param {?object} getVal
     * @return {object} defineProperty object
     */
function getPooledWarningPropertyDefinition(n,r){var i="function"===typeof r;return{configurable:!0,set:function set(n){return warn(i?"setting the method":"setting the property","This is effectively a no-op"),n},get:function get(){return warn(i?"accessing the method":"accessing the property",i?"This is a no-op function":"This is set to null"),r}};function warn(r,i){error("This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",r,n,i)}}function getPooledEvent(n,r,i,u){var l=this;if(l.eventPool.length){var d=l.eventPool.pop();return l.call(d,n,r,i,u),d}return new l(n,r,i,u)}function releasePooledEvent(n){var r=this;if(!(n instanceof r))throw Error("Trying to release an event instance into a pool of a different type.");n.destructor(),r.eventPool.length<10&&r.eventPool.push(n)}function addEventPoolingTo(n){n.eventPool=[],n.getPooled=getPooledEvent,n.release=releasePooledEvent}
/**
     * @interface Event
     * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
     */u(SyntheticEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():"unknown"!==typeof n.returnValue&&(n.returnValue=!1),this.isDefaultPrevented=functionThatReturnsTrue)},stopPropagation:function stopPropagation(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():"unknown"!==typeof n.cancelBubble&&(
// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
n.cancelBubble=!0),this.isPropagationStopped=functionThatReturnsTrue)},
/**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
persist:function persist(){this.isPersistent=functionThatReturnsTrue},
/**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
isPersistent:functionThatReturnsFalse,
/**
       * `PooledClass` looks for `destructor` on each instance it releases.
       */
destructor:function destructor(){var n=this.constructor.Interface;for(var r in n)Object.defineProperty(this,r,getPooledWarningPropertyDefinition(r,n[r]));this.dispatchConfig=null,this._targetInst=null,this.nativeEvent=null,this.isDefaultPrevented=functionThatReturnsFalse,this.isPropagationStopped=functionThatReturnsFalse,this._dispatchListeners=null,this._dispatchInstances=null,Object.defineProperty(this,"nativeEvent",getPooledWarningPropertyDefinition("nativeEvent",null)),Object.defineProperty(this,"isDefaultPrevented",getPooledWarningPropertyDefinition("isDefaultPrevented",functionThatReturnsFalse)),Object.defineProperty(this,"isPropagationStopped",getPooledWarningPropertyDefinition("isPropagationStopped",functionThatReturnsFalse)),Object.defineProperty(this,"preventDefault",getPooledWarningPropertyDefinition("preventDefault",(function(){}))),Object.defineProperty(this,"stopPropagation",getPooledWarningPropertyDefinition("stopPropagation",(function(){})))}}),SyntheticEvent.Interface=Io,
/**
     * Helper to reduce boilerplate when creating subclasses.
     */
SyntheticEvent.extend=function(n){var r=this,i=function E(){};i.prototype=r.prototype;var l=new i;function Class(){return r.apply(this,arguments)}return u(l,Class.prototype),Class.prototype=l,Class.prototype.constructor=Class,Class.Interface=u({},r.Interface,n),Class.extend=r.extend,addEventPoolingTo(Class),Class},addEventPoolingTo(SyntheticEvent);var _o=SyntheticEvent.extend({data:null}),Do=SyntheticEvent.extend({data:null}),Fo=[9,13,27,32],No=V&&"CompositionEvent"in window,Oo=null;
/**
     * @interface Event
     * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
     *      /#events-inputevents
     */V&&"documentMode"in document&&(Oo=document.documentMode);// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var Ao=V&&"TextEvent"in window&&!Oo,Ho=V&&(!No||Oo&&Oo>8&&Oo<=11),Wo=String.fromCharCode(32),Uo={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:[pt,Ut,gn,Gt]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:[at,pt,Wt,Ut,Mt,$t]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:[at,ft,Wt,Ut,Mt,$t]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:[at,mt,Wt,Ut,Mt,$t]}},Mo=!1;// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
/**
     * Does our fallback mode think that this event is the end of composition?
     *
     * @param {string} topLevelType
     * @param {object} nativeEvent
     * @return {boolean}
     */
function isFallbackCompositionEnd(n,r){switch(n){case Mt:
// Command keys insert or clear IME input.
return-1!==Fo.indexOf(r.keyCode);case Wt:
// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return 229!==r.keyCode;case Ut:case $t:case at:
// Events are not possible without cancelling IME.
return!0;default:return!1}}
/**
     * Google Input Tools provides composition data via a CustomEvent,
     * with the `data` property populated in the `detail` object. If this
     * is available on the event object, use it. If not, this is a plain
     * composition event and we have nothing special to extract.
     *
     * @param {object} nativeEvent
     * @return {?string}
     */function getDataFromCustomEvent(n){var r=n.detail;return"object"===typeof r&&"data"in r?r.data:null}
/**
     * Check if a composition event was triggered by Korean IME.
     * Our fallback mode does not work well with IE's Korean IME,
     * so just use native composition events when Korean IME is used.
     * Although CompositionEvent.locale property is deprecated,
     * it is available in IE, where our fallback mode is enabled.
     *
     * @param {object} nativeEvent
     * @return {boolean}
     */function isUsingKoreanIME(n){return"ko"===n.locale}// Track the current IME composition status, if any.
var Lo=!1;
/**
     * @return {?object} A SyntheticCompositionEvent.
     */function extractCompositionEvent(n,r,i,u){var l,d;if(No?l=
/**
     * Translate native top level events into event types.
     *
     * @param {string} topLevelType
     * @return {object}
     */
function getCompositionEventType(n){switch(n){case ft:return Uo.compositionStart;case pt:return Uo.compositionEnd;case mt:return Uo.compositionUpdate}}
/**
     * Does our fallback best-guess model think this event signifies that
     * composition has begun?
     *
     * @param {string} topLevelType
     * @param {object} nativeEvent
     * @return {boolean}
     */(n):Lo?isFallbackCompositionEnd(n,i)&&(l=Uo.compositionEnd):function isFallbackCompositionStart(n,r){return n===Wt&&229===r.keyCode}(n,i)&&(l=Uo.compositionStart),!l)return null;Ho&&!isUsingKoreanIME(i)&&(
// The current composition is stored statically and must not be
// overwritten while composition continues.
Lo||l!==Uo.compositionStart?l===Uo.compositionEnd&&Lo&&(d=getData()):Lo=function initialize(n){return So=n,Po=getText(),!0}(u));var p=_o.getPooled(l,r,i,u);if(d)
// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
p.data=d;else{var f=getDataFromCustomEvent(i);null!==f&&(p.data=f)}return accumulateTwoPhaseDispatches(p),p}
/**
     * @param {TopLevelType} topLevelType Number from `TopLevelType`.
     * @param {object} nativeEvent Native browser event.
     * @return {?string} The string corresponding to this `beforeInput` event.
     */
/**
     * For browsers that do not provide the `textInput` event, extract the
     * appropriate string to use for SyntheticInputEvent.
     *
     * @param {number} topLevelType Number from `TopLevelEventTypes`.
     * @param {object} nativeEvent Native browser event.
     * @return {?string} The fallback string for this `beforeInput` event.
     */
function getFallbackBeforeInputChars(n,r){
// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(Lo){if(n===pt||!No&&isFallbackCompositionEnd(n,r)){var i=getData();return function reset(){So=null,Po=null,Ro=null}(),Lo=!1,i}return null}switch(n){case Gt:
// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case Ut:
/**
           * As of v27, Firefox may fire keypress events even when no character
           * will be inserted. A few possibilities:
           *
           * - `which` is `0`. Arrow keys, Esc key, etc.
           *
           * - `which` is the pressed key code, but no char is available.
           *   Ex: 'AltGr + d` in Polish. There is no modified character for
           *   this key combination and no character is inserted into the
           *   document, but FF fires the keypress for char code `100` anyway.
           *   No `input` event will occur.
           *
           * - `which` is the pressed key code, but a command combination is
           *   being used. Ex: `Cmd+C`. No character is inserted, and no
           *   `input` event will occur.
           */
if(!
/**
     * Return whether a native keypress event is assumed to be a command.
     * This is required because Firefox fires `keypress` events for key commands
     * (cut, copy, select-all, etc.) even though no character is inserted.
     */
function isKeypressCommand(n){return(n.ctrlKey||n.altKey||n.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(n.ctrlKey&&n.altKey)}(r)){
// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(r.char&&r.char.length>1)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case pt:return Ho&&!isUsingKoreanIME(r)?null:r.data;default:return null}}
/**
     * Extract a SyntheticInputEvent for `beforeInput`, based on either native
     * `textInput` or fallback behavior.
     *
     * @return {?object} A SyntheticInputEvent.
     */function extractBeforeInputEvent(n,r,i,u){var l;// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!(l=Ao?function getNativeBeforeInputChars(n,r){switch(n){case pt:return getDataFromCustomEvent(r);case Ut:return 32!==r.which?null:(Mo=!0,Wo);case gn:
// Record the characters to be added to the DOM.
var i=r.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
return i===Wo&&Mo?null:i;default:
// For other native event types, do nothing.
return null}}(n,i):getFallbackBeforeInputChars(n,i)))return null;var d=Do.getPooled(Uo.beforeInput,r,i,u);return d.data=l,accumulateTwoPhaseDispatches(d),d}
/**
     * Create an `onBeforeInput` event to match
     * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
     *
     * This event plugin is based on the native `textInput` event
     * available in Chrome, Safari, Opera, and IE. This event fires after
     * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
     *
     * `beforeInput` is spec'd but not implemented in any browsers, and
     * the `input` event does not provide any useful information about what has
     * actually been added, contrary to the spec. Thus, `textInput` is the best
     * available event to identify the characters that have actually been inserted
     * into the target node.
     *
     * This plugin is also responsible for emitting `composition` events, thus
     * allowing us to share composition fallback code for both `beforeInput` and
     * `composition` event types.
     */var jo={eventTypes:Uo,extractEvents:function extractEvents(n,r,i,u,l){var d=extractCompositionEvent(n,r,i,u),p=extractBeforeInputEvent(n,r,i,u);return null===d?p:null===p?d:[d,p]}},zo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};
/**
     * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
     */function isTextInputElement(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return"input"===r?!!zo[n.type]:"textarea"===r}var Vo={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:[at,st,ct,Nt,At,Wt,Mt,fn]}};function createAndAccumulateChangeEvent(n,r,i){var u=SyntheticEvent.getPooled(Vo.change,n,r,i);return u.type="change",// Flag this event loop as needing state restore.
enqueueStateRestore(i),accumulateTwoPhaseDispatches(u),u}
/**
     * For IE shims
     */var Bo=null,$o=null;function manualDispatchChangeEvent(n){// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
!function batchedUpdates(n,r){if(X)
// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return n(r);X=!0;try{return Q(n,r)}finally{X=!1,finishEventHandler()}}(runEventInBatch,createAndAccumulateChangeEvent($o,n,getEventTarget(n)))}function runEventInBatch(n){runEventsInBatch(n)}function getInstIfValueChanged(n){if(updateValueIfChanged(getNodeFromInstance$1(n)))return n}function getTargetInstForChangeEvent(n,r){if(n===st)return r}
/**
     * SECTION: handle `input` event
     */var qo=!1;
/**
     * (For IE <=9) Removes the event listeners from the currently-tracked element,
     * if any exists.
     */
function stopWatchingForValueChange(){Bo&&(Bo.detachEvent("onpropertychange",handlePropertyChange),Bo=null,$o=null)}
/**
     * (For IE <=9) Handles a propertychange event, sending a `change` event if
     * the value of the active element has changed.
     */function handlePropertyChange(n){"value"===n.propertyName&&getInstIfValueChanged($o)&&manualDispatchChangeEvent(n)}function handleEventsForInputEventPolyfill(n,r,i){n===Nt?(
// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange(),
/**
     * (For IE <=9) Starts tracking propertychange events on the passed-in element
     * and override the value property so that we can distinguish user events from
     * value changes in JS.
     */
function startWatchingForValueChange(n,r){$o=r,(Bo=n).attachEvent("onpropertychange",handlePropertyChange)}(r,i)):n===at&&stopWatchingForValueChange()}// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(n,r){if(n===fn||n===Mt||n===Wt)
// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return getInstIfValueChanged($o)}
/**
     * SECTION: handle `click` event
     */function getTargetInstForClickEvent(n,r){if(n===ct)return getInstIfValueChanged(r)}function getTargetInstForInputOrChangeEvent(n,r){if(n===At||n===st)return getInstIfValueChanged(r)}V&&(
// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
qo=isEventSupported("input")&&(!document.documentMode||document.documentMode>9));
/**
     * This plugin creates an `onChange` event that normalizes change events
     * across form elements. This event fires at a time when it's possible to
     * change the element's value without seeing a flicker.
     *
     * Supported elements are:
     * - input (see `isTextInputElement`)
     * - textarea
     * - select
     */
var Qo={eventTypes:Vo,_isInputEventSupported:qo,extractEvents:function extractEvents(n,r,i,u,l){var d,p,f=r?getNodeFromInstance$1(r):window;if(!
/**
     * SECTION: handle `change` event
     */
function shouldUseChangeEvent(n){var r=n.nodeName&&n.nodeName.toLowerCase();return"select"===r||"input"===r&&"file"===n.type}(f)?isTextInputElement(f)?qo?d=getTargetInstForInputOrChangeEvent:(d=getTargetInstForInputEventPolyfill,p=handleEventsForInputEventPolyfill):function shouldUseClickEvent(n){
// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var r=n.nodeName;return r&&"input"===r.toLowerCase()&&("checkbox"===n.type||"radio"===n.type)}(f)&&(d=getTargetInstForClickEvent):d=getTargetInstForChangeEvent,d){var m=d(n,r);if(m)return createAndAccumulateChangeEvent(m,i,u)}p&&p(n,f,r),// When blurring, set the value attribute for number inputs
n===at&&function handleControlledInputBlur(n){var r=n._wrapperState;r&&r.controlled&&"number"===n.type&&
// If controlled, assign the value attribute to the current value on blur
setDefaultValue(n,"number",n.value)}(f)}},Ko=SyntheticEvent.extend({view:null,detail:null}),Yo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};// Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
function modifierStateGetter(n){var r=this.nativeEvent;if(r.getModifierState)return r.getModifierState(n);var i=Yo[n];return!!i&&!!r[i]}function getEventModifierState(n){return modifierStateGetter}var Go=0,Xo=0,Jo=!1,Zo=!1,ea=Ko.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:null,buttons:null,relatedTarget:function relatedTarget(n){return n.relatedTarget||(n.fromElement===n.srcElement?n.toElement:n.fromElement)},movementX:function movementX(n){if("movementX"in n)return n.movementX;var r=Go;return Go=n.screenX,Jo?"mousemove"===n.type?n.screenX-r:0:(Jo=!0,0)},movementY:function movementY(n){if("movementY"in n)return n.movementY;var r=Xo;return Xo=n.screenY,Zo?"mousemove"===n.type?n.screenY-r:0:(Zo=!0,0)}}),ta=ea.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),na={mouseEnter:{registrationName:"onMouseEnter",dependencies:[Qt,Kt]},mouseLeave:{registrationName:"onMouseLeave",dependencies:[Qt,Kt]},pointerEnter:{registrationName:"onPointerEnter",dependencies:[rn,on]},pointerLeave:{registrationName:"onPointerLeave",dependencies:[rn,on]}},ra={eventTypes:na,
/**
       * For almost every interaction we care about, there will be both a top-level
       * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
       * we do not extract duplicate events. However, moving the mouse into the
       * browser from outside will not fire a `mouseout` event. In this case, we use
       * the `mouseover` top-level event.
       */
extractEvents:function extractEvents(n,r,i,u,l){var d,p,f,m,h,v,g,y=n===Kt||n===on,b=n===Qt||n===rn;if(y&&0===(32&l)&&(i.relatedTarget||i.fromElement))
// If this is an over event with a target, then we've already dispatched
// the event in the out event of the other target. If this is replayed,
// then it's because we couldn't dispatch against this target previously
// so we have to do it now instead.
return null;if(!b&&!y)
// Must not be a mouse or pointer in or out - ignoring.
return null;if(u.window===u)
// `nativeEventTarget` is probably a window object.
d=u;else{
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var C=u.ownerDocument;d=C?C.defaultView||C.parentWindow:window}if(b){p=r;var k=i.relatedTarget||i.toElement;if(null!==(f=k?getClosestInstanceFromNode(k):null))(f!==getNearestMountedFiber(f)||5!==f.tag&&6!==f.tag)&&(f=null)}else
// Moving to a node from outside the window.
p=null,f=r;if(p===f)
// Nothing pertains to our managed components.
return null;n===Qt||n===Kt?(m=ea,h=na.mouseLeave,v=na.mouseEnter,g="mouse"):n!==rn&&n!==on||(m=ta,h=na.pointerLeave,v=na.pointerEnter,g="pointer");var w=null==p?d:getNodeFromInstance$1(p),T=null==f?d:getNodeFromInstance$1(f),x=m.getPooled(h,p,i,u);x.type=g+"leave",x.target=w,x.relatedTarget=T;var S=m.getPooled(v,f,i,u);// If we are not processing the first ancestor, then we
// should not process the same nativeEvent again, as we
// will have already processed it in the first ancestor.
return S.type=g+"enter",S.target=T,S.relatedTarget=w,function accumulateEnterLeaveDispatches(n,r,i,u){traverseEnterLeave(i,u,accumulateDispatches,n,r)}(x,S,p,f),0===(64&l)?[x]:[x,S]}};var oa="function"===typeof Object.is?Object.is:
/**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
function is(n,r){return n===r&&(0!==n||1/n===1/r)||n!==n&&r!==r},aa=Object.prototype.hasOwnProperty;
/**
     * Performs equality by iterating through keys on an object and returning false
     * when any key has values which are not strictly equal between the arguments.
     * Returns true when the values of all keys are strictly equal.
     */
function shallowEqual(n,r){if(oa(n,r))return!0;if("object"!==typeof n||null===n||"object"!==typeof r||null===r)return!1;var i=Object.keys(n),u=Object.keys(r);if(i.length!==u.length)return!1;// Test for A's keys different from B.
for(var l=0;l<i.length;l++)if(!aa.call(r,i[l])||!oa(n[i[l]],r[i[l]]))return!1;return!0}var ia=V&&"documentMode"in document&&document.documentMode<=11,ua={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:[at,ht,kt,Nt,Wt,Mt,$t,Yt,fn]}},la=null,sa=null,ca=null,da=!1;
/**
     * Get document associated with the event target.
     *
     * @param {object} nativeEventTarget
     * @return {Document}
     */
function getEventTargetDocument(n){return n.window===n?n.document:9===n.nodeType?n:n.ownerDocument}
/**
     * Poll selection to see whether it's changed.
     *
     * @param {object} nativeEvent
     * @param {object} nativeEventTarget
     * @return {?SyntheticEvent}
     */function constructSelectEvent(n,r){
// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var i=getEventTargetDocument(r);if(da||null==la||la!==getActiveElement(i))return null;// Only fire when selection has actually changed.
var u=
/**
     * Get an object which is a unique representation of the current selection.
     *
     * The return value will not be consistent across nodes or browsers, but
     * two identical selections on the same node will return identical objects.
     *
     * @param {DOMElement} node
     * @return {object}
     */
function getSelection$1(n){if("selectionStart"in n&&hasSelectionCapabilities(n))return{start:n.selectionStart,end:n.selectionEnd};var r=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection();return{anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}}(la);if(!ca||!shallowEqual(ca,u)){ca=u;var l=SyntheticEvent.getPooled(ua.select,sa,n,r);return l.type="select",l.target=la,accumulateTwoPhaseDispatches(l),l}return null}
/**
     * This plugin creates an `onSelect` event that normalizes select events
     * across form elements.
     *
     * Supported elements are:
     * - input (see `isTextInputElement`)
     * - textarea
     * - contentEditable
     *
     * This differs from native browser implementations in the following ways:
     * - Fires on contentEditable fields as well as inputs.
     * - Fires for collapsed selection.
     * - Fires after user input.
     */var pa={eventTypes:ua,extractEvents:function extractEvents(n,r,i,u,l,d){var p=d||getEventTargetDocument(u);// Track whether all listeners exists for this plugin. If none exist, we do
// not extract events. See #3639.
if(!p||!function isListeningToAllDependencies(n,r){for(var i=getListenerMapForElement(r),u=j[n],l=0;l<u.length;l++){var d=u[l];if(!i.has(d))return!1}return!0}("onSelect",p))return null;var f=r?getNodeFromInstance$1(r):window;switch(n){
// Track the input node that has focus.
case Nt:(isTextInputElement(f)||"true"===f.contentEditable)&&(la=f,sa=r,ca=null);break;case at:la=null,sa=null,ca=null;break;
// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case $t:da=!0;break;case ht:case Yt:case kt:return da=!1,constructSelectEvent(i,u);
// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.

// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case fn:if(ia)break;
// falls through
case Wt:case Mt:return constructSelectEvent(i,u)}return null}},fa=SyntheticEvent.extend({animationName:null,elapsedTime:null,pseudoElement:null}),ma=SyntheticEvent.extend({clipboardData:function clipboardData(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ha=Ko.extend({relatedTarget:null});
/**
     * @interface Event
     * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
     */
/**
     * `charCode` represents the actual "character code" and is safe to use with
     * `String.fromCharCode`. As such, only keys that correspond to printable
     * characters produce a valid `charCode`, the only exception to this is Enter.
     * The Tab-key is considered non-printable and does not have a `charCode`,
     * presumably because it does not produce a tab-character in browsers.
     *
     * @param {object} nativeEvent Native browser event.
     * @return {number} Normalized `charCode` property.
     */
function getEventCharCode(n){var r,i=n.keyCode;// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
return"charCode"in n?// FF does not set `charCode` for the Enter-key, check against `keyCode`.
0===(r=n.charCode)&&13===i&&(r=13):
// IE8 does not implement `charCode`, but `keyCode` has the correct value.
r=i,// IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
// report Enter as charCode 10 when ctrl is pressed.
10===r&&(r=13),r>=32||13===r?r:0}
/**
     * Normalization of deprecated HTML5 `key` values
     * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
     */var va={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ga={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};
/**
     * Translation from legacy `keyCode` to HTML5 `key`
     * Only special keys supported, all others depend on keyboard layout or browser
     * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
     */
/**
     * @interface KeyboardEvent
     * @see http://www.w3.org/TR/DOM-Level-3-Events/
     */
var ya=Ko.extend({key:
/**
     * @param {object} nativeEvent Native browser event.
     * @return {string} Normalized `key` property.
     */
function getEventKey(n){if(n.key){
// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var r=va[n.key]||n.key;if("Unidentified"!==r)return r}// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===n.type){var i=getEventCharCode(n);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===i?"Enter":String.fromCharCode(i)}return"keydown"===n.type||"keyup"===n.type?ga[n.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState,
// Legacy Interface
charCode:function charCode(n){
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
return"keypress"===n.type?getEventCharCode(n):0},keyCode:function keyCode(n){
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
return"keydown"===n.type||"keyup"===n.type?n.keyCode:0},which:function which(n){
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
return"keypress"===n.type?getEventCharCode(n):"keydown"===n.type||"keyup"===n.type?n.keyCode:0}}),ba=ea.extend({dataTransfer:null}),Ca=Ko.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState}),ka=SyntheticEvent.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),wa=ea.extend({deltaX:function deltaX(n){return"deltaX"in n?n.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function deltaY(n){return"deltaY"in n?n.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
"wheelDeltaY"in n?-n.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
"wheelDelta"in n?-n.wheelDelta:0},deltaZ:null,
// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null}),Ta=[tt,lt,it,ut,dt,Rt,It,_t,Dt,Ft,At,Ht,Lt,zt,Vt,jt,Xt,Jt,Zt,un,ln,sn,dn,pn,mn,hn,vn,yn,bn,En,Sn],xa={
// simpleEventPluginEventTypes gets populated from
// the DOMEventProperties module.
eventTypes:tr,extractEvents:function extractEvents(n,r,i,u,l){var d,p=nr.get(n);if(!p)return null;switch(n){case Ut:
// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===getEventCharCode(i))return null;
/* falls through */case Wt:case Mt:d=ya;break;case at:case Nt:d=ha;break;case ct:
// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===i.button)return null;
/* falls through */case bt:case yt:case $t:case qt:case Yt:// TODO: Disabled elements should not respond to mouse events
/* falls through */case Qt:case Kt:case ht:d=ea;break;case Ct:case kt:case wt:case Tt:case xt:case Et:case St:case Pt:d=ba;break;case Cn:case kn:case wn:case Tn:d=Ca;break;case nt:case rt:case ot:d=fa;break;case xn:d=ka;break;case cn:d=Ko;break;case Pn:d=wa;break;case vt:case gt:case Gt:d=ma;break;case Ot:case Bt:case en:case tn:case nn:case rn:case on:case an:d=ta;break;default:-1===Ta.indexOf(n)&&error("SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.",n),// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
d=SyntheticEvent}var f=d.getPooled(p,r,i,u);return accumulateTwoPhaseDispatches(f),f}};
/**
     * @interface DragEvent
     * @see http://www.w3.org/TR/DOM-Level-3-Events/
     */
/**
     * Inject modules for resolving DOM hierarchy and plugin ordering.
     */
!// Trust the developer to only use possibleRegistrationNames in true
/**
     * Injects an ordering of plugins (by plugin name). This allows the ordering
     * to be decoupled from injection of the actual plugins so that ordering is
     * always deterministic regardless of packaging, on-the-fly injection, etc.
     *
     * @param {array} InjectedEventPluginOrder
     * @internal
     */
function injectEventPluginOrder(n){if(H)throw Error("EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.");// Clone the ordering so it cannot be dynamically mutated.
H=Array.prototype.slice.call(n),recomputePluginOrdering()}(["ResponderEventPlugin","SimpleEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin"]),function setComponentTree(n,r,i){T=n,x=r,(S=i)&&x||error("EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.")}(getFiberCurrentPropsFromNode$1,getInstanceFromNode$1,getNodeFromInstance$1),
/**
     * Some important event plugins included by default (without having to require
     * them).
     */
injectEventPluginsByName({SimpleEventPlugin:xa,EnterLeaveEventPlugin:ra,ChangeEventPlugin:Qo,SelectEventPlugin:pa,BeforeInputEventPlugin:jo});// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var Ea="undefined"!==typeof performance&&"function"===typeof performance.mark&&"function"===typeof performance.clearMarks&&"function"===typeof performance.measure&&"function"===typeof performance.clearMeasures,Sa=null,Pa=null,Ra=null,Ia=!1,_a=!1,Da=!1,Fa=0,Na=0,Oa=new Set,Aa=function formatMarkName(n){return"\u269b "+n},Ha=function beginMark(n){performance.mark(Aa(n))},Wa=function endMark(n,r,i){var u=Aa(r),l=function formatLabel(n,r){return(r?"\u26d4 ":"\u269b ")+n+(r?" Warning: "+r:"")}(n,i);try{performance.measure(l,u)}catch(d){}// If previous mark was missing for some reason, this will throw.
// This could only happen if React crashed in an unexpected place earlier.
// Don't pile on with more errors.
// Clear marks immediately to avoid growing buffer.
performance.clearMarks(u),performance.clearMeasures(l)},Ua=function getFiberMarkName(n,r){return n+" (#"+r+")"},Ma=function getFiberLabel(n,r,i){return null===i?n+" ["+(r?"update":"mount")+"]":n+"."+i},La=function beginFiberMark(n,r){var i=getComponentName(n.type)||"Unknown",u=n._debugID,l=null!==n.alternate,d=Ma(i,l,r);if(Ia&&Oa.has(d))
// During the commit phase, we don't show duplicate labels because
// there is a fixed overhead for every measurement, and we don't
// want to stretch the commit phase beyond necessary.
return!1;Oa.add(d);var p=Ua(d,u);return Ha(p),!0},ja=function clearFiberMark(n,r){var i=getComponentName(n.type)||"Unknown",u=n._debugID,l=null!==n.alternate,d=Ma(i,l,r);!function clearMark(n){performance.clearMarks(Aa(n))}(Ua(d,u))},za=function endFiberMark(n,r,i){var u=getComponentName(n.type)||"Unknown",l=n._debugID,d=null!==n.alternate,p=Ma(u,d,r),f=Ua(p,l);Wa(p,f,i)},Va=function shouldIgnoreFiber(n){
// Host components should be skipped in the timeline.
// We could check typeof fiber.type, but does this work with RN?
switch(n.tag){case 3:case 5:case 6:case 4:case 7:case P:case 9:case 8:return!0;default:return!1}},Ba=function resumeTimersRecursively(n){null!==n.return&&resumeTimersRecursively(n.return),n._debugIsCurrentlyTiming&&La(n,null)},$a=function resumeTimers(){
// Resumes all measurements that were active during the last deferred loop.
null!==Sa&&Ba(Sa)};function recordEffect(){Na++}function startWorkTimer(n){Ea&&!Va(n)&&(// If we pause, this is the fiber to unwind from.
Sa=n,La(n,null)&&(n._debugIsCurrentlyTiming=!0))}function cancelWorkTimer(n){Ea&&!Va(n)&&(// Remember we shouldn't complete measurement for this fiber.
// Otherwise flamechart will be deep even for small updates.
n._debugIsCurrentlyTiming=!1,ja(n,null))}function stopWorkTimer(n){Ea&&!Va(n)&&(// If we pause, its parent is the fiber to unwind from.
Sa=n.return,n._debugIsCurrentlyTiming&&(n._debugIsCurrentlyTiming=!1,za(n,null,null)))}function stopFailedWorkTimer(n){if(Ea&&!Va(n)&&(// If we pause, its parent is the fiber to unwind from.
Sa=n.return,n._debugIsCurrentlyTiming)){n._debugIsCurrentlyTiming=!1;var r=n.tag===_?"Rendering was suspended":"An error was thrown inside this error boundary";za(n,null,r)}}function startPhaseTimer(n,r){Ea&&(function clearPendingPhaseMeasurement(){null!==Pa&&null!==Ra&&ja(Ra,Pa),Ra=null,Pa=null,Da=!1}(),La(n,r)&&(Ra=n,Pa=r))}function stopPhaseTimer(){Ea&&(null!==Pa&&null!==Ra&&za(Ra,Pa,Da?"Scheduled a cascading update":null),Pa=null,Ra=null)}function startWorkLoopTimer(n){Sa=n,Ea&&(Fa=0,// This is top level call.
// Any other measurements are performed within.
Ha("(React Tree Reconciliation)"),// Resume any measurements that were in progress during the last loop.
$a())}function stopWorkLoopTimer(n,r){if(Ea){var i=null;null!==n?i=3===n.tag?"A top-level update interrupted the previous render":"An update to "+(getComponentName(n.type)||"Unknown")+" interrupted the previous render":Fa>1&&(i="There were cascading updates"),Fa=0;var u=r?"(React Tree Reconciliation: Completed Root)":"(React Tree Reconciliation: Yielded)";// Pause any measurements until the next loop.
!function pauseTimers(){for(
// Stops all currently active measurements so that they can be resumed
// if we continue in a later deferred loop from the same unit of work.
var n=Sa;n;)n._debugIsCurrentlyTiming&&za(n,null,null),n=n.return}(),Wa(u,"(React Tree Reconciliation)",i)}}function startCommitSnapshotEffectsTimer(){Ea&&(Na=0,Ha("(Committing Snapshot Effects)"))}function stopCommitSnapshotEffectsTimer(){if(Ea){var n=Na;Na=0,Wa("(Committing Snapshot Effects: "+n+" Total)","(Committing Snapshot Effects)",null)}}function startCommitHostEffectsTimer(){Ea&&(Na=0,Ha("(Committing Host Effects)"))}function stopCommitHostEffectsTimer(){if(Ea){var n=Na;Na=0,Wa("(Committing Host Effects: "+n+" Total)","(Committing Host Effects)",null)}}function startCommitLifeCyclesTimer(){Ea&&(Na=0,Ha("(Calling Lifecycle Methods)"))}function stopCommitLifeCyclesTimer(){if(Ea){var n=Na;Na=0,Wa("(Calling Lifecycle Methods: "+n+" Total)","(Calling Lifecycle Methods)",null)}}var qa,Qa=[];qa=[];var Ka,Ya=-1;function createCursor(n){return{current:n}}function pop(n,r){Ya<0?error("Unexpected pop."):(r!==qa[Ya]&&error("Unexpected Fiber popped."),n.current=Qa[Ya],Qa[Ya]=null,qa[Ya]=null,Ya--)}function push(n,r,i){Ya++,Qa[Ya]=n.current,qa[Ya]=i,n.current=r}Ka={};var Ga={};Object.freeze(Ga);// A cursor to the current merged context object on the stack.
var Xa=createCursor(Ga),Ja=createCursor(!1),Za=Ga;// A cursor to a boolean indicating whether the context has changed.
function getUnmaskedContext(n,r,i){return i&&isContextProvider(r)?Za:Xa.current}function cacheContext(n,r,i){var u=n.stateNode;u.__reactInternalMemoizedUnmaskedChildContext=r,u.__reactInternalMemoizedMaskedChildContext=i}function getMaskedContext(n,r){var i=n.type,u=i.contextTypes;if(!u)return Ga;// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var p={};for(var f in u)p[f]=r[f];var m=getComponentName(i)||"Unknown";return d(u,p,"context",m,getCurrentFiberStackInDev),// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
l&&cacheContext(n,r,p),p}function hasContextChanged(){return Ja.current}function isContextProvider(n){var r=n.childContextTypes;return null!==r&&void 0!==r}function popContext(n){pop(Ja,n),pop(Xa,n)}function popTopLevelContextObject(n){pop(Ja,n),pop(Xa,n)}function pushTopLevelContextObject(n,r,i){if(Xa.current!==Ga)throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");push(Xa,r,n),push(Ja,i,n)}function processChildContext(n,r,i){var l,p=n.stateNode,f=r.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if("function"!==typeof p.getChildContext){var m=getComponentName(r)||"Unknown";return Ka[m]||(Ka[m]=!0,error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",m,m)),i}for(var h in startPhaseTimer(n,"getChildContext"),l=p.getChildContext(),stopPhaseTimer(),l)if(!(h in f))throw Error((getComponentName(r)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');var v=getComponentName(r)||"Unknown";return d(f,l,"child context",v,// In practice, there is one case in which we won't get a stack. It's when
// somebody calls unstable_renderSubtreeIntoContainer() and we process
// context from the parent component instance. The stack will be missing
// because it's outside of the reconciliation, and so the pointer has not
// been set. This is rare and doesn't matter. We'll also remove that API.
getCurrentFiberStackInDev),u({},i,{},l)}function pushContextProvider(n){var r=n.stateNode,i=r&&r.__reactInternalMemoizedMergedChildContext||Ga;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
return Za=Xa.current,push(Xa,i,n),push(Ja,Ja.current,n),!0}function invalidateContextProvider(n,r,i){var u=n.stateNode;if(!u)throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(i){
// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var l=processChildContext(n,r,Za);u.__reactInternalMemoizedMergedChildContext=l,// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(Ja,n),pop(Xa,n),// Now push the new context and mark that it has changed.
push(Xa,l,n),push(Ja,i,n)}else pop(Ja,n),push(Ja,i,n)}function findCurrentUnmaskedContext(n){
// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(!function isFiberMounted(n){return getNearestMountedFiber(n)===n}(n)||1!==n.tag)throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var r=n;do{switch(r.tag){case 3:return r.stateNode.context;case 1:if(isContextProvider(r.type))return r.stateNode.__reactInternalMemoizedMergedChildContext}r=r.return}while(null!==r);throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}var ei=l.unstable_runWithPriority,ti=l.unstable_scheduleCallback,ni=l.unstable_cancelCallback,ri=l.unstable_shouldYield,oi=l.unstable_requestPaint,ai=l.unstable_now,ii=l.unstable_getCurrentPriorityLevel,ui=l.unstable_ImmediatePriority,li=l.unstable_UserBlockingPriority,si=l.unstable_NormalPriority,ci=l.unstable_LowPriority,di=l.unstable_IdlePriority;
// Provide explicit error message when production+profiling bundle of e.g.
// react-dom is used with production (non-profiling) bundle of
// scheduler/tracing
if(null==p.__interactionsRef||null==p.__interactionsRef.current)throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling");var pi={},fi=99,mi=98,hi=97,vi=90,gi=ri,yi=// Fall back gracefully if we're running an older version of Scheduler.
void 0!==oi?oi:function(){},bi=null,Ci=null,ki=!1,wi=ai(),Ti=wi<1e4?ai:function(){return ai()-wi};// Except for NoPriority, these correspond to Scheduler priorities. We use
// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.
function getCurrentPriorityLevel(){switch(ii()){case ui:return fi;case li:return mi;case si:return hi;case ci:return 96;case di:return 95;default:throw Error("Unknown priority level.")}}function reactPriorityToSchedulerPriority(n){switch(n){case fi:return ui;case mi:return li;case hi:return si;case 96:return ci;case 95:return di;default:throw Error("Unknown priority level.")}}function runWithPriority$1(n,r){var i=reactPriorityToSchedulerPriority(n);return ei(i,r)}function scheduleCallback(n,r,i){var u=reactPriorityToSchedulerPriority(n);return ti(u,r,i)}function scheduleSyncCallback(n){
// Push this callback into an internal queue. We'll flush these either in
// the next tick, or earlier if something calls `flushSyncCallbackQueue`.
return null===bi?(bi=[n],// Flush the queue in the next tick, at the earliest.
Ci=ti(ui,flushSyncCallbackQueueImpl)):
// Push onto existing queue. Don't need to schedule a callback because
// we already scheduled one when we created the queue.
bi.push(n),pi}function flushSyncCallbackQueue(){if(null!==Ci){var n=Ci;Ci=null,ni(n)}flushSyncCallbackQueueImpl()}function flushSyncCallbackQueueImpl(){if(!ki&&null!==bi){
// Prevent re-entrancy.
ki=!0;var n=0;try{var r=bi;runWithPriority$1(fi,(function(){for(;n<r.length;n++){var i=r[n];do{i=i(true)}while(null!==i)}})),bi=null}catch(error){
// If something throws, leave the remaining callbacks on the queue.
throw null!==bi&&(bi=bi.slice(n+1)),// Resume flushing in the next tick
ti(ui,flushSyncCallbackQueue),error}finally{ki=!1}}}var xi=1073741823,Ei=xi,Si=Ei-1,Pi=Si-1;// 1 unit of expiration time represents 10ms.
function msToExpirationTime(n){
// Always subtract from the offset so that we don't clash with the magic number for NoWork.
return Pi-(n/10|0)}function expirationTimeToMs(n){return 10*(Pi-n)}function computeExpirationBucket(n,r,i){return Pi-function ceiling(n,r){return(1+(n/r|0))*r}(Pi-n+r/10,i/10)}// TODO: This corresponds to Scheduler's NormalPriority, not LowPriority. Update
// the names to reflect.
var Ri=5e3;function computeInteractiveExpiration(n){return computeExpirationBucket(n,500,100)}function inferPriorityFromExpirationTime(n,r){if(r===Ei)return fi;if(1===r||2===r)return 95;var i=expirationTimeToMs(r)-expirationTimeToMs(n);return i<=0?fi:i<=600?mi:i<=5250?hi:95}var Ii={recordUnsafeLifecycleWarnings:function recordUnsafeLifecycleWarnings(n,r){},flushPendingUnsafeLifecycleWarnings:function flushPendingUnsafeLifecycleWarnings(){},recordLegacyContextWarning:function recordLegacyContextWarning(n,r){},flushLegacyContextWarning:function flushLegacyContextWarning(){},discardPendingWarnings:function discardPendingWarnings(){}},_i=function setToSortedString(n){var r=[];return n.forEach((function(n){r.push(n)})),r.sort().join(", ")},Di=[],Fi=[],Ni=[],Oi=[],Ai=[],Hi=[],Wi=new Set;Ii.recordUnsafeLifecycleWarnings=function(n,r){
// Dedup strategy: Warn once per component.
Wi.has(n.type)||("function"===typeof r.componentWillMount&&// Don't warn about react-lifecycles-compat polyfilled components.
!0!==r.componentWillMount.__suppressDeprecationWarning&&Di.push(n),1&n.mode&&"function"===typeof r.UNSAFE_componentWillMount&&Fi.push(n),"function"===typeof r.componentWillReceiveProps&&!0!==r.componentWillReceiveProps.__suppressDeprecationWarning&&Ni.push(n),1&n.mode&&"function"===typeof r.UNSAFE_componentWillReceiveProps&&Oi.push(n),"function"===typeof r.componentWillUpdate&&!0!==r.componentWillUpdate.__suppressDeprecationWarning&&Ai.push(n),1&n.mode&&"function"===typeof r.UNSAFE_componentWillUpdate&&Hi.push(n))},Ii.flushPendingUnsafeLifecycleWarnings=function(){
// We do an initial pass to gather component names
var n=new Set;Di.length>0&&(Di.forEach((function(r){n.add(getComponentName(r.type)||"Component"),Wi.add(r.type)})),Di=[]);var r=new Set;Fi.length>0&&(Fi.forEach((function(n){r.add(getComponentName(n.type)||"Component"),Wi.add(n.type)})),Fi=[]);var i=new Set;Ni.length>0&&(Ni.forEach((function(n){i.add(getComponentName(n.type)||"Component"),Wi.add(n.type)})),Ni=[]);var u=new Set;Oi.length>0&&(Oi.forEach((function(n){u.add(getComponentName(n.type)||"Component"),Wi.add(n.type)})),Oi=[]);var l=new Set;Ai.length>0&&(Ai.forEach((function(n){l.add(getComponentName(n.type)||"Component"),Wi.add(n.type)})),Ai=[]);var d=new Set;// Finally, we flush all the warnings
// UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
(Hi.length>0&&(Hi.forEach((function(n){d.add(getComponentName(n.type)||"Component"),Wi.add(n.type)})),Hi=[]),r.size>0)&&error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",_i(r));u.size>0&&error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n\nPlease update the following components: %s",_i(u));d.size>0&&error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",_i(d));n.size>0&&warn("componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",_i(n));i.size>0&&warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",_i(i));l.size>0&&warn("componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",_i(l))};var Ui=new Map,Mi=new Set;// Tracks components we have already warned about.
Ii.recordLegacyContextWarning=function(n,r){var i=function findStrictRoot(n){for(var r=null,i=n;null!==i;)1&i.mode&&(r=i),i=i.return;return r}(n);if(null!==i){// Dedup strategy: Warn once per component.
if(!Mi.has(n.type)){var u=Ui.get(i);(null!=n.type.contextTypes||null!=n.type.childContextTypes||null!==r&&"function"===typeof r.getChildContext)&&(void 0===u&&(u=[],Ui.set(i,u)),u.push(n))}}else error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.")},Ii.flushLegacyContextWarning=function(){Ui.forEach((function(n,r){if(0!==n.length){var i=n[0],u=new Set;n.forEach((function(n){u.add(getComponentName(n.type)||"Component"),Mi.add(n.type)})),error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://fb.me/react-legacy-context%s",_i(u),getStackByFiberInDevAndProd(i))}}))},Ii.discardPendingWarnings=function(){Di=[],Fi=[],Ni=[],Oi=[],Ai=[],Hi=[],Ui=new Map};var Li=null,ji=null,zi=function setRefreshHandler(n){Li=n};// $FlowFixMe Flow gets confused by a WeakSet feature check below.
function resolveFunctionForHotReloading(n){if(null===Li)
// Hot reloading is disabled.
return n;var r=Li(n);return void 0===r?n:r.current;// Use the latest known implementation.
}function resolveClassForHotReloading(n){
// No implementation differences.
return resolveFunctionForHotReloading(n)}function resolveForwardRefForHotReloading(n){if(null===Li)
// Hot reloading is disabled.
return n;var r=Li(n);if(void 0===r){
// Check if we're dealing with a real forwardRef. Don't want to crash early.
if(null!==n&&void 0!==n&&"function"===typeof n.render){
// ForwardRef is special because its resolved .type is an object,
// but it's possible that we only have its inner render function in the map.
// If that inner render function is different, we'll build a new forwardRef type.
var i=resolveFunctionForHotReloading(n.render);if(n.render!==i){var u={$$typeof:ke,render:i};return void 0!==n.displayName&&(u.displayName=n.displayName),u}}return n}// Use the latest known implementation.
return r.current}function isCompatibleFamilyForHotReloading(n,r){if(null===Li)
// Hot reloading is disabled.
return!1;var i=n.elementType,u=r.type,l=!1,d="object"===typeof u&&null!==u?u.$$typeof:null;switch(n.tag){case 1:"function"===typeof u&&(l=!0);break;case 0:("function"===typeof u||d===Ee)&&(l=!0);break;case R:(d===ke||d===Ee)&&(l=!0);break;case D:case F:(d===xe||d===Ee)&&(
// TODO: if it was but can no longer be simple,
// we shouldn't set this.
l=!0);break;default:return!1}// Check if both types have a family and it's the same one.
if(l){
// Note: memo() and forwardRef() we'll compare outer rather than inner type.
// This means both of them need to be registered to preserve state.
// If we unwrapped and compared the inner types for wrappers instead,
// then we would risk falsely saying two separate memo(Foo)
// calls are equivalent because they wrap the same Foo function.
var p=Li(i);if(void 0!==p&&p===Li(u))return!0}return!1}function markFailedErrorBoundaryForHotReloading(n){null!==Li&&"function"===typeof WeakSet&&(null===ji&&(ji=new WeakSet),ji.add(n))}var Vi=function scheduleRefresh(n,r){if(null!==Li){var i=r.staleFamilies,u=r.updatedFamilies;flushPassiveEffects(),flushSync((function(){scheduleFibersWithFamiliesRecursively(n.current,u,i)}))}},Bi=function scheduleRoot(n,r){n.context===Ga&&(flushPassiveEffects(),function syncUpdates(n,r,i,u){return runWithPriority$1(fi,n.bind(null,r,i,u))}((function(){updateContainer(r,n,null,null)})))};function scheduleFibersWithFamiliesRecursively(n,r,i){var u=n.alternate,l=n.child,d=n.sibling,p=n.tag,f=n.type,m=null;switch(p){case 0:case F:case 1:m=f;break;case R:m=f.render}if(null===Li)throw new Error("Expected resolveFamily to be set during hot reload.");var h=!1,v=!1;if(null!==m){var g=Li(m);void 0!==g&&(i.has(g)?v=!0:r.has(g)&&(1===p?v=!0:h=!0))}null!==ji&&(ji.has(n)||null!==u&&ji.has(u))&&(v=!0),v&&(n._debugNeedsRemount=!0),(v||h)&&as(n,Ei),null===l||v||scheduleFibersWithFamiliesRecursively(l,r,i),null!==d&&scheduleFibersWithFamiliesRecursively(d,r,i)}var $i=function findHostInstancesForRefresh(n,r){var i=new Set,u=new Set(r.map((function(n){return n.current})));return findHostInstancesForMatchingFibersRecursively(n.current,u,i),i};function findHostInstancesForMatchingFibersRecursively(n,r,i){var u=n.child,l=n.sibling,d=n.tag,p=n.type,f=null;switch(d){case 0:case F:case 1:f=p;break;case R:f=p.render}var m=!1;null!==f&&r.has(f)&&(m=!0),m?
// We have a match. This only drills down to the closest host components.
// There's no need to search deeper because for the purpose of giving
// visual feedback, "flashing" outermost parent rectangles is sufficient.
function findHostInstancesForFiberShallowly(n,r){if(function findChildHostInstancesForFiberShallowly(n,r){var i=n,u=!1;for(;;){if(5===i.tag)
// We got a match.
u=!0,r.add(i.stateNode);else if(null!==i.child){i.child.return=i,i=i.child;continue}if(i===n)return u;for(;null===i.sibling;){if(null===i.return||i.return===n)return u;i=i.return}i.sibling.return=i.return,i=i.sibling}return!1}(n,r))return;// If we didn't find any host children, fallback to closest host parent.
var i=n;for(;;){switch(i.tag){case 5:return void r.add(i.stateNode);case 4:case 3:return void r.add(i.stateNode.containerInfo)}if(null===i.return)throw new Error("Expected to reach root first.");i=i.return}}(n,i):
// If there's no match, maybe there will be one further down in the child tree.
null!==u&&findHostInstancesForMatchingFibersRecursively(u,r,i),null!==l&&findHostInstancesForMatchingFibersRecursively(l,r,i)}function resolveDefaultProps(n,r){if(n&&n.defaultProps){
// Resolve default props. Taken from ReactElement
var i=u({},r),l=n.defaultProps;for(var d in l)void 0===i[d]&&(i[d]=l[d]);return i}return r}function readLazyComponentType(n){if(function initializeLazyComponentType(n){if(-1===n._status){n._status=0;var r=(0,n._ctor)();n._result=r,r.then((function(r){if(0===n._status){var i=r.default;void 0===i&&error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",r),n._status=1,n._result=i}}),(function(r){0===n._status&&(n._status=2,n._result=r)}))}}(n),1!==n._status)throw n._result;return n._result}var qi,Qi=createCursor(null);
// Use this to detect multiple renderers using the same context
qi={};var Ki=null,Yi=null,Gi=null,Xi=!1;function resetContextDependencies(){
// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
Ki=null,Yi=null,Gi=null,Xi=!1}function enterDisallowedContextReadInDEV(){Xi=!0}function exitDisallowedContextReadInDEV(){Xi=!1}function pushProvider(n,r){var i=n.type._context;push(Qi,i._currentValue,n),i._currentValue=r,void 0!==i._currentRenderer&&null!==i._currentRenderer&&i._currentRenderer!==qi&&error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),i._currentRenderer=qi}function popProvider(n){var r=Qi.current;pop(Qi,n),n.type._context._currentValue=r}function scheduleWorkOnParentPath(n,r){for(
// Update the child expiration time of all the ancestors, including
// the alternates.
var i=n;null!==i;){var u=i.alternate;if(i.childExpirationTime<r)i.childExpirationTime=r,null!==u&&u.childExpirationTime<r&&(u.childExpirationTime=r);else{if(!(null!==u&&u.childExpirationTime<r))
// Neither alternate was updated, which means the rest of the
// ancestor path already has sufficient priority.
break;u.childExpirationTime=r}i=i.return}}function prepareToReadContext(n,r){Ki=n,Yi=null,Gi=null;var i=n.dependencies;null!==i&&(null!==i.firstContext&&(i.expirationTime>=r&&
// Context list has a pending update. Mark that this fiber performed work.
markWorkInProgressReceivedUpdate(),// Reset the work-in-progress list
i.firstContext=null))}function _readContext(n,r){if(
// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
Xi&&error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),Gi===n);else if(!1===r||0===r);else{var i;// Avoid deopting on observable arguments or heterogeneous types.
"number"!==typeof r||r===xi?(
// Observe all updates.
Gi=n,i=xi):i=r;var u={context:n,observedBits:i,next:null};if(null===Yi){if(null===Ki)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");// This is the first dependency for this component. Create a new list.
Yi=u,Ki.dependencies={expirationTime:0,firstContext:u,responders:null}}else
// Append a new context item.
Yi=Yi.next=u}return n._currentValue}var Ji,Zi,eu=2,tu=!1;function initializeUpdateQueue(n){var r={baseState:n.memoizedState,baseQueue:null,shared:{pending:null},effects:null};n.updateQueue=r}function cloneUpdateQueue(n,r){
// Clone the update queue from current. Unless it's already a clone.
var i=r.updateQueue,u=n.updateQueue;if(i===u){var l={baseState:u.baseState,baseQueue:u.baseQueue,shared:u.shared,effects:u.effects};r.updateQueue=l}}function createUpdate(n,r){var i={expirationTime:n,suspenseConfig:r,tag:0,payload:null,callback:null,next:null};return i.next=i,i.priority=getCurrentPriorityLevel(),i}function enqueueUpdate(n,r){var i=n.updateQueue;if(null!==i){var u=i.shared,l=u.pending;null===l?
// This is the first update. Create a circular list.
r.next=r:(r.next=l.next,l.next=r),u.pending=r,Zi!==u||Ji||(error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),Ji=!0)}}function enqueueCapturedUpdate(n,r){var i=n.alternate;null!==i&&
// Ensure the work-in-progress queue is a clone
cloneUpdateQueue(i,n);// Captured updates go only on the work-in-progress queue.
var u=n.updateQueue,l=u.baseQueue;// Append the update to the end of the list.
null===l?(u.baseQueue=r.next=r,r.next=r):(r.next=l.next,l.next=r)}function getStateFromUpdate(n,r,i,l,d,p){switch(i.tag){case 1:var f=i.payload;if("function"===typeof f){enterDisallowedContextReadInDEV(),1&n.mode&&f.call(p,l,d);var m=f.call(p,l,d);return exitDisallowedContextReadInDEV(),m}// State object
return f;case 3:n.effectTag=-4097&n.effectTag|_n;
// Intentional fallthrough
case 0:var h,v=i.payload;return"function"===typeof v?(enterDisallowedContextReadInDEV(),1&n.mode&&v.call(p,l,d),h=v.call(p,l,d),exitDisallowedContextReadInDEV()):
// Partial state object
h=v,null===h||void 0===h?l:u({},l,h);// Merge the partial state and the previous state.
case eu:return tu=!0,l}return l}function processUpdateQueue(n,r,i,u){
// This is always non-null on a ClassComponent or HostRoot
var l=n.updateQueue;tu=!1,Zi=l.shared;// The last rebase update that is NOT part of the base state.
var d=l.baseQueue,p=l.shared.pending;// The last pending update that hasn't been processed yet.
if(null!==p){
// We have new updates that haven't been processed yet.
// We'll add them to the base queue.
if(null!==d){
// Merge the pending queue and the base queue.
var f=d.next,m=p.next;d.next=m,p.next=f}d=p,l.shared.pending=null;// TODO: Pass `current` as argument
var h=n.alternate;if(null!==h){var v=h.updateQueue;null!==v&&(v.baseQueue=p)}}// These values may change as we process the queue.
if(null!==d){var g=d.next,y=l.baseState,b=0,C=null,k=null,w=null;// Iterate through the list of updates to compute the result.
if(null!==g)for(var T=g;;){var x=T.expirationTime;if(x<u){
// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var S={expirationTime:T.expirationTime,suspenseConfig:T.suspenseConfig,tag:T.tag,payload:T.payload,callback:T.callback,next:null};null===w?(k=w=S,C=y):w=w.next=S,// Update the remaining priority in the queue.
x>b&&(b=x)}else{
// This update does have sufficient priority.
if(null!==w){var P={expirationTime:Ei,
// This update is going to be committed so we never want uncommit it.
suspenseConfig:T.suspenseConfig,tag:T.tag,payload:T.payload,callback:T.callback,next:null};w=w.next=P}// Mark the event time of this update as relevant to this render pass.
// TODO: This should ideally use the true event time of this update rather than
// its priority which is a derived and not reverseable value.
// TODO: We should skip this update if it was already committed but currently
// we have no way of detecting the difference between a committed and suspended
// update here.
if(markRenderEventTimeAndConfig(x,T.suspenseConfig),// Process this update.
y=getStateFromUpdate(n,0,T,y,r,i),null!==T.callback){n.effectTag|=

32;var R=l.effects;null===R?l.effects=[T]:R.push(T)}}if(null===(T=T.next)||T===g){if(null===(p=l.shared.pending))break;
// An update was scheduled from inside a reducer. Add the new
// pending updates to the end of the list and keep processing.
T=d.next=p.next,p.next=g,l.baseQueue=d=p,l.shared.pending=null}}null===w?C=y:w.next=k,l.baseState=C,l.baseQueue=w,// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
markUnprocessedUpdateTime(b),n.expirationTime=b,n.memoizedState=y}Zi=null}function callCallback(n,r){if("function"!==typeof n)throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+n);n.call(r)}function resetHasForceUpdateBeforeProcessing(){tu=!1}function checkHasForceUpdateAfterProcessing(){return tu}function commitUpdateQueue(n,r,i){
// Commit the effects
var u=r.effects;if(r.effects=null,null!==u)for(var l=0;l<u.length;l++){var d=u[l],p=d.callback;null!==p&&(d.callback=null,callCallback(p,i))}}Ji=!1,Zi=null;var nu=f.ReactCurrentBatchConfig;function requestCurrentSuspenseConfig(){return nu.suspense}var ru,ou,au,iu,uu,lu,su,cu,du,pu,fu={},mu=Array.isArray,hu=(new n.Component).refs;ru=new Set,ou=new Set,au=new Set,iu=new Set,cu=new Set,uu=new Set,du=new Set,pu=new Set;var vu=new Set;function applyDerivedStateFromProps(n,r,i,l){var d=n.memoizedState;1&n.mode&&
// Invoke the function an extra time to help detect side-effects.
i(l,d);var p=i(l,d);lu(r,p);// Merge the partial state and the previous state.
var f=null===p||void 0===p?d:u({},d,p);// Once the update queue is empty, persist the derived state onto the
// base state.
(n.memoizedState=f,0===n.expirationTime)&&(n.updateQueue.baseState=f)}su=function warnOnInvalidCallback(n,r){if(null!==n&&"function"!==typeof n){var i=r+"_"+n;vu.has(i)||(vu.add(i),error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r,n))}},lu=function warnOnUndefinedDerivedState(n,r){if(void 0===r){var i=getComponentName(n)||"Component";uu.has(i)||(uu.add(i),error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",i))}},// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(fu,"_processChildContext",{enumerable:!1,value:function value(){throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(fu);var gu,yu,bu,Cu,ku,wu={isMounted:function isMounted(n){var r=Wn.current;if(null!==r&&1===r.tag){var i=r,u=i.stateNode;u._warnedAboutRefsInRender||error("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",getComponentName(i.type)||"A component"),u._warnedAboutRefsInRender=!0}var l=get(n);return!!l&&getNearestMountedFiber(l)===l},enqueueSetState:function enqueueSetState(n,r,i){var u=get(n),l=requestCurrentTimeForUpdate(),d=requestCurrentSuspenseConfig(),p=computeExpirationForFiber(l,u,d),f=createUpdate(p,d);f.payload=r,void 0!==i&&null!==i&&(su(i,"setState"),f.callback=i),enqueueUpdate(u,f),as(u,p)},enqueueReplaceState:function enqueueReplaceState(n,r,i){var u=get(n),l=requestCurrentTimeForUpdate(),d=requestCurrentSuspenseConfig(),p=computeExpirationForFiber(l,u,d),f=createUpdate(p,d);f.tag=1,f.payload=r,void 0!==i&&null!==i&&(su(i,"replaceState"),f.callback=i),enqueueUpdate(u,f),as(u,p)},enqueueForceUpdate:function enqueueForceUpdate(n,r){var i=get(n),u=requestCurrentTimeForUpdate(),l=requestCurrentSuspenseConfig(),d=computeExpirationForFiber(u,i,l),p=createUpdate(d,l);p.tag=eu,void 0!==r&&null!==r&&(su(r,"forceUpdate"),p.callback=r),enqueueUpdate(i,p),as(i,d)}};function checkShouldComponentUpdate(n,r,i,u,l,d,p){var f=n.stateNode;if("function"===typeof f.shouldComponentUpdate){1&n.mode&&
// Invoke the function an extra time to help detect side-effects.
f.shouldComponentUpdate(u,d,p),startPhaseTimer(n,"shouldComponentUpdate");var m=f.shouldComponentUpdate(u,d,p);return stopPhaseTimer(),void 0===m&&error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",getComponentName(r)||"Component"),m}return!r.prototype||!r.prototype.isPureReactComponent||(!shallowEqual(i,u)||!shallowEqual(l,d))}function adoptClassInstance(n,r){r.updater=wu,n.stateNode=r,// The instance needs access to the fiber so that it can schedule updates
function set(n,r){n._reactInternalFiber=r}(r,n),r._reactInternalInstance=fu}function constructClassInstance(n,r,i){var u=!1,l=Ga,d=Ga,p=r.contextType;if("contextType"in r&&(!(// Allow null for conditional declaration
null===p||void 0!==p&&p.$$typeof===be&&void 0===p._context)&&!pu.has(r))){pu.add(r);var f="";f=void 0===p?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":"object"!==typeof p?" However, it is set to a "+typeof p+".":p.$$typeof===ye?" Did you accidentally pass the Context.Provider instead?":void 0!==p._context?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(p).join(", ")+"}.",error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",getComponentName(r)||"Component",f)}if("object"===typeof p&&null!==p)d=_readContext(p);else{l=getUnmaskedContext(0,r,!0);var m=r.contextTypes;d=(u=null!==m&&void 0!==m)?getMaskedContext(n,l):Ga}// Instantiate twice to help detect side-effects.
1&n.mode&&new r(i,d);var h=new r(i,d),v=n.memoizedState=null!==h.state&&void 0!==h.state?h.state:null;if(adoptClassInstance(n,h),"function"===typeof r.getDerivedStateFromProps&&null===v){var g=getComponentName(r)||"Component";ou.has(g)||(ou.add(g),error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",g,null===h.state?"null":"undefined",g))}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if("function"===typeof r.getDerivedStateFromProps||"function"===typeof h.getSnapshotBeforeUpdate){var y=null,b=null,C=null;if("function"===typeof h.componentWillMount&&!0!==h.componentWillMount.__suppressDeprecationWarning?y="componentWillMount":"function"===typeof h.UNSAFE_componentWillMount&&(y="UNSAFE_componentWillMount"),"function"===typeof h.componentWillReceiveProps&&!0!==h.componentWillReceiveProps.__suppressDeprecationWarning?b="componentWillReceiveProps":"function"===typeof h.UNSAFE_componentWillReceiveProps&&(b="UNSAFE_componentWillReceiveProps"),"function"===typeof h.componentWillUpdate&&!0!==h.componentWillUpdate.__suppressDeprecationWarning?C="componentWillUpdate":"function"===typeof h.UNSAFE_componentWillUpdate&&(C="UNSAFE_componentWillUpdate"),null!==y||null!==b||null!==C){var k=getComponentName(r)||"Component",w="function"===typeof r.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";iu.has(k)||(iu.add(k),error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-unsafe-component-lifecycles",k,w,null!==y?"\n  "+y:"",null!==b?"\n  "+b:"",null!==C?"\n  "+C:""))}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
return u&&cacheContext(n,l,d),h}function callComponentWillReceiveProps(n,r,i,u){var l=r.state;if(startPhaseTimer(n,"componentWillReceiveProps"),"function"===typeof r.componentWillReceiveProps&&r.componentWillReceiveProps(i,u),"function"===typeof r.UNSAFE_componentWillReceiveProps&&r.UNSAFE_componentWillReceiveProps(i,u),stopPhaseTimer(),r.state!==l){var d=getComponentName(n.type)||"Component";ru.has(d)||(ru.add(d),error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",d)),wu.enqueueReplaceState(r,r.state,null)}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(n,r,i,u){!function checkClassInstance(n,r,i){var u=n.stateNode,l=getComponentName(r)||"Component";u.render||(r.prototype&&"function"===typeof r.prototype.render?error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",l):error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",l)),!u.getInitialState||u.getInitialState.isReactClassApproved||u.state||error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",l),u.getDefaultProps&&!u.getDefaultProps.isReactClassApproved&&error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",l),u.propTypes&&error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",l),u.contextType&&error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",l),u.contextTypes&&error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",l),r.contextType&&r.contextTypes&&!du.has(r)&&(du.add(r),error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",l)),"function"===typeof u.componentShouldUpdate&&error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",l),r.prototype&&r.prototype.isPureReactComponent&&"undefined"!==typeof u.shouldComponentUpdate&&error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",getComponentName(r)||"A pure component"),"function"===typeof u.componentDidUnmount&&error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",l),"function"===typeof u.componentDidReceiveProps&&error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",l),"function"===typeof u.componentWillRecieveProps&&error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",l),"function"===typeof u.UNSAFE_componentWillRecieveProps&&error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",l);var d=u.props!==i;void 0!==u.props&&d&&error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",l,l),u.defaultProps&&error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",l,l),"function"!==typeof u.getSnapshotBeforeUpdate||"function"===typeof u.componentDidUpdate||au.has(r)||(au.add(r),error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",getComponentName(r))),"function"===typeof u.getDerivedStateFromProps&&error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",l),"function"===typeof u.getDerivedStateFromError&&error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",l),"function"===typeof r.getSnapshotBeforeUpdate&&error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",l);var p=u.state;p&&("object"!==typeof p||mu(p))&&error("%s.state: must be set to an object or null",l),"function"===typeof u.getChildContext&&"object"!==typeof r.childContextTypes&&error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",l)}(n,r,i);var l=n.stateNode;l.props=i,l.state=n.memoizedState,l.refs=hu,initializeUpdateQueue(n);var d=r.contextType;if("object"===typeof d&&null!==d)l.context=_readContext(d);else{var p=getUnmaskedContext(0,r,!0);l.context=getMaskedContext(n,p)}if(l.state===i){var f=getComponentName(r)||"Component";cu.has(f)||(cu.add(f),error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",f))}1&n.mode&&Ii.recordLegacyContextWarning(n,l),Ii.recordUnsafeLifecycleWarnings(n,l),processUpdateQueue(n,i,l,u),l.state=n.memoizedState;var m=r.getDerivedStateFromProps;"function"===typeof m&&(applyDerivedStateFromProps(n,r,m,i),l.state=n.memoizedState),// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
"function"===typeof r.getDerivedStateFromProps||"function"===typeof l.getSnapshotBeforeUpdate||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||(!function callComponentWillMount(n,r){startPhaseTimer(n,"componentWillMount");var i=r.state;"function"===typeof r.componentWillMount&&r.componentWillMount(),"function"===typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),stopPhaseTimer(),i!==r.state&&(error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",getComponentName(n.type)||"Component"),wu.enqueueReplaceState(r,r.state,null))}(n,l),// If we had additional state updates during this life-cycle, let's
// process them now.
processUpdateQueue(n,i,l,u),l.state=n.memoizedState),"function"===typeof l.componentDidMount&&(n.effectTag|=

4)}var Tu;gu=!1,yu=!1,bu={},
/**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */
Cu={},ku={},Tu=function warnForMissingKey(n){if(null!==n&&"object"===typeof n&&n._store&&!n._store.validated&&null==n.key){if("object"!==typeof n._store)throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");n._store.validated=!0;var r='Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'+getCurrentFiberStackInDev();Cu[r]||(Cu[r]=!0,error('Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'))}};var xu=Array.isArray;function coerceRef(n,r,i){var u=i.ref;if(null!==u&&"function"!==typeof u&&"object"!==typeof u){
// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if(1&n.mode&&(!i._owner||!i._self||i._owner.stateNode===i._self)){var l=getComponentName(n.type)||"Component";bu[l]||(error('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s',u,getStackByFiberInDevAndProd(n)),bu[l]=!0)}if(i._owner){var d,p=i._owner;if(p){var f=p;if(1!==f.tag)throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref");d=f.stateNode}if(!d)throw Error("Missing owner for string ref "+u+". This error is likely caused by a bug in React. Please file an issue.");var m=""+u;// Check if previous string ref matches new string ref
if(null!==r&&null!==r.ref&&"function"===typeof r.ref&&r.ref._stringRef===m)return r.ref;var h=function ref(n){var r=d.refs;r===hu&&(
// This is a lazy pooled frozen object, so we need to initialize.
r=d.refs={}),null===n?delete r[m]:r[m]=n};return h._stringRef=m,h}if("string"!==typeof u)throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!i._owner)throw Error("Element ref was specified as a string ("+u+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.")}return u}function throwOnInvalidObjectType(n,r){if("textarea"!==n.type){var i;throw i=" If you meant to render a collection of children, use an array instead."+getCurrentFiberStackInDev(),Error("Objects are not valid as a React child (found: "+("[object Object]"===Object.prototype.toString.call(r)?"object with keys {"+Object.keys(r).join(", ")+"}":r)+")."+i)}}function warnOnFunctionType(){var n="Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."+getCurrentFiberStackInDev();ku[n]||(ku[n]=!0,error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."))}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(n){function deleteChild(r,i){if(n){// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var u=r.lastEffect;null!==u?(u.nextEffect=i,r.lastEffect=i):r.firstEffect=r.lastEffect=i,i.nextEffect=null,i.effectTag=

8}}function deleteRemainingChildren(r,i){if(!n)
// Noop.
return null;// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
for(var u=i;null!==u;)deleteChild(r,u),u=u.sibling;return null}function mapRemainingChildren(n,r){for(
// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
var i=new Map,u=r;null!==u;)null!==u.key?i.set(u.key,u):i.set(u.index,u),u=u.sibling;return i}function useFiber(n,r){
// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var i=createWorkInProgress(n,r);return i.index=0,i.sibling=null,i}function placeChild(r,i,u){if(r.index=u,!n)
// Noop.
return i;var l=r.alternate;if(null!==l){var d=l.index;return d<i?(
// This is a move.
r.effectTag=

2,i):d}
// This is an insertion.
return r.effectTag=2,i}function placeSingleChild(r){
// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
return n&&null===r.alternate&&(r.effectTag=2),r}function updateTextNode(n,r,i,u){if(null===r||6!==r.tag){
// Insert
var l=createFiberFromText(i,n.mode,u);return l.return=n,l}
// Update
var d=useFiber(r,i);return d.return=n,d}function updateElement(n,r,i,u){if(null!==r&&(r.elementType===i.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(r,i))){
// Move based on index
var l=useFiber(r,i.props);return l.ref=coerceRef(n,r,i),l.return=n,l._debugSource=i._source,l._debugOwner=i._owner,l}// Insert
var d=createFiberFromElement(i,n.mode,u);return d.ref=coerceRef(n,r,i),d.return=n,d}function updatePortal(n,r,i,u){if(null===r||4!==r.tag||r.stateNode.containerInfo!==i.containerInfo||r.stateNode.implementation!==i.implementation){
// Insert
var l=createFiberFromPortal(i,n.mode,u);return l.return=n,l}
// Update
var d=useFiber(r,i.children||[]);return d.return=n,d}function updateFragment(n,r,i,u,l){if(null===r||7!==r.tag){
// Insert
var d=createFiberFromFragment(i,n.mode,u,l);return d.return=n,d}
// Update
var p=useFiber(r,i);return p.return=n,p}function createChild(n,r,i){if("string"===typeof r||"number"===typeof r){
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var u=createFiberFromText(""+r,n.mode,i);return u.return=n,u}if("object"===typeof r&&null!==r){switch(r.$$typeof){case fe:var l=createFiberFromElement(r,n.mode,i);return l.ref=coerceRef(n,null,r),l.return=n,l;case me:var d=createFiberFromPortal(r,n.mode,i);return d.return=n,d}if(xu(r)||getIteratorFn(r)){var p=createFiberFromFragment(r,n.mode,i,null);return p.return=n,p}throwOnInvalidObjectType(n,r)}return"function"===typeof r&&warnOnFunctionType(),null}function updateSlot(n,r,i,u){
// Update the fiber if the keys match, otherwise return null.
var l=null!==r?r.key:null;if("string"===typeof i||"number"===typeof i)
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
return null!==l?null:updateTextNode(n,r,""+i,u);if("object"===typeof i&&null!==i){switch(i.$$typeof){case fe:return i.key===l?i.type===he?updateFragment(n,r,i.props.children,u,l):updateElement(n,r,i,u):null;case me:return i.key===l?updatePortal(n,r,i,u):null}if(xu(i)||getIteratorFn(i))return null!==l?null:updateFragment(n,r,i,u,null);throwOnInvalidObjectType(n,i)}return"function"===typeof i&&warnOnFunctionType(),null}function updateFromMap(n,r,i,u,l){if("string"===typeof u||"number"===typeof u)return updateTextNode(r,n.get(i)||null,""+u,l);if("object"===typeof u&&null!==u){switch(u.$$typeof){case fe:var d=n.get(null===u.key?i:u.key)||null;return u.type===he?updateFragment(r,d,u.props.children,l,u.key):updateElement(r,d,u,l);case me:return updatePortal(r,n.get(null===u.key?i:u.key)||null,u,l)}if(xu(u)||getIteratorFn(u))return updateFragment(r,n.get(i)||null,u,l,null);throwOnInvalidObjectType(r,u)}return"function"===typeof u&&warnOnFunctionType(),null}
/**
       * Warns if there is a duplicate or missing key
       */function warnOnInvalidKey(n,r){if("object"!==typeof n||null===n)return r;switch(n.$$typeof){case fe:case me:Tu(n);var i=n.key;if("string"!==typeof i)break;if(null===r){(r=new Set).add(i);break}if(!r.has(i)){r.add(i);break}error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",i)}return r}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
return function reconcileChildFibers(r,i,u,l){
// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var d="object"===typeof u&&null!==u&&u.type===he&&null===u.key;d&&(u=u.props.children);// Handle object types
var p="object"===typeof u&&null!==u;if(p)switch(u.$$typeof){case fe:return placeSingleChild(function reconcileSingleElement(n,r,i,u){for(var l=i.key,d=r;null!==d;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(d.key===l){if(7===d.tag){if(i.type===he){deleteRemainingChildren(n,d.sibling);var p=useFiber(d,i.props.children);return p.return=n,p._debugSource=i._source,p._debugOwner=i._owner,p}}else if(d.elementType===i.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(d,i)){deleteRemainingChildren(n,d.sibling);var f=useFiber(d,i.props);return f.ref=coerceRef(n,d,i),f.return=n,f._debugSource=i._source,f._debugOwner=i._owner,f}// Didn't match.
deleteRemainingChildren(n,d);break}deleteChild(n,d),d=d.sibling}if(i.type===he){var m=createFiberFromFragment(i.props.children,n.mode,u,i.key);return m.return=n,m}var h=createFiberFromElement(i,n.mode,u);return h.ref=coerceRef(n,r,i),h.return=n,h}(r,i,u,l));case me:return placeSingleChild(function reconcileSinglePortal(n,r,i,u){for(var l=i.key,d=r;null!==d;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(d.key===l){if(4===d.tag&&d.stateNode.containerInfo===i.containerInfo&&d.stateNode.implementation===i.implementation){deleteRemainingChildren(n,d.sibling);var p=useFiber(d,i.children||[]);return p.return=n,p}deleteRemainingChildren(n,d);break}deleteChild(n,d),d=d.sibling}var f=createFiberFromPortal(i,n.mode,u);return f.return=n,f}(r,i,u,l))}if("string"===typeof u||"number"===typeof u)return placeSingleChild(function reconcileSingleTextNode(n,r,i,u){
// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(null!==r&&6===r.tag){
// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(n,r.sibling);var l=useFiber(r,i);return l.return=n,l}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(n,r);var d=createFiberFromText(i,n.mode,u);return d.return=n,d}(r,i,""+u,l));if(xu(u))return function reconcileChildrenArray(r,i,u,l){for(
// First, validate keys.
var d=null,p=0;p<u.length;p++)d=warnOnInvalidKey(u[p],d);for(var f=null,m=null,h=i,v=0,g=0,y=null;null!==h&&g<u.length;g++){h.index>g?(y=h,h=null):y=h.sibling;var b=updateSlot(r,h,u[g],l);if(null===b){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===h&&(h=y);break}n&&h&&null===b.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(r,h),v=placeChild(b,v,g),null===m?
// TODO: Move out of the loop. This only happens for the first run.
f=b:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
m.sibling=b,m=b,h=y}if(g===u.length)
// We've reached the end of the new children. We can delete the rest.
return deleteRemainingChildren(r,h),f;if(null===h){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;g<u.length;g++){var C=createChild(r,u[g],l);null!==C&&(v=placeChild(C,v,g),null===m?
// TODO: Move out of the loop. This only happens for the first run.
f=C:m.sibling=C,m=C)}return f}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var k=mapRemainingChildren(0,h);g<u.length;g++){var w=updateFromMap(k,r,g,u[g],l);null!==w&&(n&&null!==w.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
k.delete(null===w.key?g:w.key),v=placeChild(w,v,g),null===m?f=w:m.sibling=w,m=w)}return n&&
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
k.forEach((function(n){return deleteChild(r,n)})),f}(r,i,u,l);if(getIteratorFn(u))return function reconcileChildrenIterator(r,i,u,l){
// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var d=getIteratorFn(u);if("function"!==typeof d)throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
// We don't support rendering Generators because it's a mutation.
// See https://github.com/facebook/react/issues/12995
"function"===typeof Symbol&&// $FlowFixMe Flow doesn't know about toStringTag
"Generator"===u[Symbol.toStringTag]&&(yu||error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),yu=!0),// Warn about using Maps as children
u.entries===d&&(gu||error("Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."),gu=!0);// First, validate keys.
// We'll get a different iterator later for the main pass.
var p=d.call(u);if(p)for(var f=null,m=p.next();!m.done;m=p.next())f=warnOnInvalidKey(m.value,f);var h=d.call(u);if(null==h)throw Error("An iterable object provided no iterator.");for(var v=null,g=null,y=i,b=0,C=0,k=null,w=h.next();null!==y&&!w.done;C++,w=h.next()){y.index>C?(k=y,y=null):k=y.sibling;var T=updateSlot(r,y,w.value,l);if(null===T){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===y&&(y=k);break}n&&y&&null===T.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(r,y),b=placeChild(T,b,C),null===g?
// TODO: Move out of the loop. This only happens for the first run.
v=T:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
g.sibling=T,g=T,y=k}if(w.done)
// We've reached the end of the new children. We can delete the rest.
return deleteRemainingChildren(r,y),v;if(null===y){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!w.done;C++,w=h.next()){var x=createChild(r,w.value,l);null!==x&&(b=placeChild(x,b,C),null===g?
// TODO: Move out of the loop. This only happens for the first run.
v=x:g.sibling=x,g=x)}return v}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var S=mapRemainingChildren(0,y);!w.done;C++,w=h.next()){var P=updateFromMap(S,r,C,w.value,l);null!==P&&(n&&null!==P.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
S.delete(null===P.key?C:P.key),b=placeChild(P,b,C),null===g?v=P:g.sibling=P,g=P)}return n&&
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
S.forEach((function(n){return deleteChild(r,n)})),v}(r,i,u,l);if(p&&throwOnInvalidObjectType(r,u),"function"===typeof u&&warnOnFunctionType(),"undefined"===typeof u&&!d)
// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(r.tag){case 1:if(r.stateNode.render._isMockFunction)
// We allow auto-mocks to proceed as if they're returning null.
break;
// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case 0:var f=r.type;throw Error((f.displayName||f.name||"Component")+"(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.")}// Remaining cases are all treated as empty.
return deleteRemainingChildren(r,i)}}var Eu=ChildReconciler(!0),Su=ChildReconciler(!1);// Reset a workInProgress child set to prepare it for a second pass.
function resetChildFibers(n,r){for(var i=n.child;null!==i;)resetWorkInProgress(i,r),i=i.sibling}var Pu={},Ru=createCursor(Pu),Iu=createCursor(Pu),_u=createCursor(Pu);function requiredContext(n){if(n===Pu)throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return n}function getRootHostContainer(){return requiredContext(_u.current)}function pushHostContainer(n,r){
// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push(_u,r,n),// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(Iu,n,n),// Finally, we need to push the host context to the stack.
// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
push(Ru,Pu,n);var i=function getRootHostContext(n){var r,i,u=n.nodeType;switch(u){case 9:case 11:r=9===u?"#document":"#fragment";var l=n.documentElement;i=l?l.namespaceURI:getChildNamespace(null,"");break;default:var d=8===u?n.parentNode:n;i=getChildNamespace(d.namespaceURI||null,r=d.tagName)}var p=r.toLowerCase();return{namespace:i,ancestorInfo:lo(null,p)}}(r);// Now that we know this function doesn't throw, replace it.
pop(Ru,n),push(Ru,i,n)}function popHostContainer(n){pop(Ru,n),pop(Iu,n),pop(_u,n)}function getHostContext(){return requiredContext(Ru.current)}function pushHostContext(n){requiredContext(_u.current);var r=requiredContext(Ru.current),i=function getChildHostContext(n,r,i){var u=n;return{namespace:getChildNamespace(u.namespace,r),ancestorInfo:lo(u.ancestorInfo,r)}}(r,n.type);// Don't push this Fiber's context unless it's unique.
r!==i&&(// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(Iu,n,n),push(Ru,i,n))}function popHostContext(n){
// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
Iu.current===n&&(pop(Ru,n),pop(Iu,n))}var Du=createCursor(0);// The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.
function hasSuspenseContext(n,r){return 0!==(n&r)}function setDefaultShallowSuspenseContext(n){return 1&n}function setShallowSuspenseContext(n,r){return 1&n|r}function pushSuspenseContext(n,r){push(Du,r,n)}function popSuspenseContext(n){pop(Du,n)}function shouldCaptureSuspense(n,r){
// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var i=n.memoizedState;if(null!==i)return null!==i.dehydrated;var u=n.memoizedProps;// In order to capture, the Suspense component must have a fallback prop.
return void 0!==u.fallback&&(// Regular boundaries always capture.
!0!==u.unstable_avoidThisFallback||!r)}function findFirstSuspended(n){for(var r=n;null!==r;){if(r.tag===_){var i=r.memoizedState;if(null!==i){var u=i.dehydrated;if(null===u||u.data===vo||isSuspenseInstanceFallback(u))return r}}else if(r.tag===O&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
void 0!==r.memoizedProps.revealOrder){if(0!==(r.effectTag&_n))return r}else if(null!==r.child){r.child.return=r,r=r.child;continue}if(r===n)return null;for(;null===r.sibling;){if(null===r.return||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function createDeprecatedResponderListener(n,r){var i={responder:n,props:r};return Object.freeze(i),i}var Fu,Nu=f.ReactCurrentDispatcher,Ou=f.ReactCurrentBatchConfig;// Represents the phase in which the effect (not the clean-up) fires.
Fu=new Set;// These are set right before calling the component.
var Au=0,Hu=null,Wu=null,Uu=null,Mu=!1,Lu=null,ju=null,zu=-1,Vu=!1;// The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.
function mountHookTypesDev(){var n=Lu;null===ju?ju=[n]:ju.push(n)}function updateHookTypesDev(){var n=Lu;null!==ju&&(zu++,ju[zu]!==n&&function warnOnHookMismatchInDev(n){var r=getComponentName(Hu.type);if(!Fu.has(r)&&(Fu.add(r),null!==ju)){for(var i="",u=30,l=0;l<=zu;l++){// Extra space so second column lines up
// lol @ IE not supporting String#repeat
for(var d=ju[l],p=l===zu?n:d,f=l+1+". "+d;f.length<u;)f+=" ";i+=f+=p+"\n"}error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",r,i)}}(n))}function checkDepsAreArrayDev(n){void 0===n||null===n||Array.isArray(n)||
// Verify deps, but only on mount to avoid extra checks.
// It's unlikely their type would change as usually you define them inline.
error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",Lu,typeof n)}function throwInvalidHookError(){throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.")}function areHookInputsEqual(n,r){if(Vu)
// Only true when this component is being hot reloaded.
return!1;if(null===r)return error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",Lu),!1;
// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
n.length!==r.length&&error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",Lu,"["+r.join(", ")+"]","["+n.join(", ")+"]");for(var i=0;i<r.length&&i<n.length;i++)if(!oa(n[i],r[i]))return!1;return!0}function renderWithHooks(n,r,i,u,l,d){Au=d,Hu=r,ju=null!==n?n._debugHookTypes:null,zu=-1,// Used for hot reloading:
Vu=null!==n&&n.type!==r.type,r.memoizedState=null,r.updateQueue=null,r.expirationTime=0,null!==n&&null!==n.memoizedState?Nu.current=Ku:
// This dispatcher handles an edge case where a component is updating,
// but no stateful hooks have been used.
// We want to match the production code behavior (which will use HooksDispatcherOnMount),
// but with the extra DEV validation to ensure hooks ordering hasn't changed.
// This dispatcher does that.
Nu.current=null!==ju?Qu:qu;var p=i(u,l);// Check if there was a render phase update
if(r.expirationTime===Au){
// Keep rendering in a loop for as long as render phase updates continue to
// be scheduled. Use a counter to prevent infinite loops.
var f=0;do{if(r.expirationTime=0,!(f<25))throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");f+=1,
// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
Vu=!1,// Start over from the beginning of the list
Wu=null,Uu=null,r.updateQueue=null,
// Also validate hook order for cascading updates.
zu=-1,Nu.current=Yu,p=i(u,l)}while(r.expirationTime===Au)}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
Nu.current=$u,r._debugHookTypes=ju;// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var m=null!==Wu&&null!==Wu.next;if(Au=0,Hu=null,Wu=null,Uu=null,Lu=null,ju=null,zu=-1,Mu=!1,m)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return p}function bailoutHooks(n,r,i){r.updateQueue=n.updateQueue,r.effectTag&=-517,n.expirationTime<=i&&(n.expirationTime=0)}function resetHooksAfterThrow(){if(
// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
Nu.current=$u,Mu)for(
// There were render phase updates. These are only valid for this render
// phase, which we are now aborting. Remove the updates from the queues so
// they do not persist to the next render. Do not remove updates from hooks
// that weren't processed.
// Only reset the updates from the queue if it has a clone. If it does
// not have a clone, that means it wasn't processed, and the updates were
// scheduled before we entered the render phase.
var n=Hu.memoizedState;null!==n;){var r=n.queue;null!==r&&(r.pending=null),n=n.next}Au=0,Hu=null,Wu=null,Uu=null,ju=null,zu=-1,Lu=null,Mu=!1}function mountWorkInProgressHook(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Uu?
// This is the first hook in the list
Hu.memoizedState=Uu=n:
// Append to the end of the list
Uu=Uu.next=n,Uu}function updateWorkInProgressHook(){
// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
var n,r;if(null===Wu){var i=Hu.alternate;n=null!==i?i.memoizedState:null}else n=Wu.next;if(null!==(r=null===Uu?Hu.memoizedState:Uu.next))
// There's already a work-in-progress. Reuse it.
r=(Uu=r).next,Wu=n;else{
// Clone from the current hook.
if(null===n)throw Error("Rendered more hooks than during the previous render.");var u={memoizedState:(Wu=n).memoizedState,baseState:Wu.baseState,baseQueue:Wu.baseQueue,queue:Wu.queue,next:null};null===Uu?
// This is the first hook in the list.
Hu.memoizedState=Uu=u:
// Append to the end of the list.
Uu=Uu.next=u}return Uu}function basicStateReducer(n,r){
// $FlowFixMe: Flow doesn't like mixed types
return"function"===typeof r?r(n):r}function mountReducer(n,r,i){var u,l=mountWorkInProgressHook();u=void 0!==i?i(r):r,l.memoizedState=l.baseState=u;var d=l.queue={pending:null,dispatch:null,lastRenderedReducer:n,lastRenderedState:u},p=d.dispatch=dispatchAction.bind(null,Hu,d);return[l.memoizedState,p]}function updateReducer(n,r,i){var u=updateWorkInProgressHook(),l=u.queue;if(null===l)throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");l.lastRenderedReducer=n;var d=Wu,p=d.baseQueue,f=l.pending;// The last rebase update that is NOT part of the base state.
if(null!==f){
// We have new updates that haven't been processed yet.
// We'll add them to the base queue.
if(null!==p){
// Merge the pending queue and the base queue.
var m=p.next,h=f.next;p.next=h,f.next=m}d.baseQueue=p=f,l.pending=null}if(null!==p){
// We have a queue to process.
var v=p.next,g=d.baseState,y=null,b=null,C=null,k=v;do{var w=k.expirationTime;if(w<Au){
// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var T={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===C?(b=C=T,y=g):C=C.next=T,// Update the remaining priority in the queue.
w>Hu.expirationTime&&(Hu.expirationTime=w,markUnprocessedUpdateTime(w))}else{
// This update does have sufficient priority.
if(null!==C){var x={expirationTime:Ei,
// This update is going to be committed so we never want uncommit it.
suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};C=C.next=x}// Mark the event time of this update as relevant to this render pass.
// TODO: This should ideally use the true event time of this update rather than
// its priority which is a derived and not reverseable value.
// TODO: We should skip this update if it was already committed but currently
// we have no way of detecting the difference between a committed and suspended
// update here.
// Process this update.
if(markRenderEventTimeAndConfig(w,k.suspenseConfig),k.eagerReducer===n)
// If this update was processed eagerly, and its reducer matches the
// current reducer, we can use the eagerly computed state.
g=k.eagerState;else g=n(g,k.action)}k=k.next}while(null!==k&&k!==v);null===C?y=g:C.next=b,// Mark that the fiber performed work, but only if the new state is
// different from the current state.
oa(g,u.memoizedState)||markWorkInProgressReceivedUpdate(),u.memoizedState=g,u.baseState=y,u.baseQueue=C,l.lastRenderedState=g}var S=l.dispatch;return[u.memoizedState,S]}function rerenderReducer(n,r,i){var u=updateWorkInProgressHook(),l=u.queue;if(null===l)throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");l.lastRenderedReducer=n;// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var d=l.dispatch,p=l.pending,f=u.memoizedState;if(null!==p){
// The queue doesn't persist past this render pass.
l.pending=null;var m=p.next,h=m;do{f=n(f,h.action),h=h.next}while(h!==m);// Mark that the fiber performed work, but only if the new state is
// different from the current state.
oa(f,u.memoizedState)||markWorkInProgressReceivedUpdate(),u.memoizedState=f,// Don't persist the state accumulated from the render phase updates to
// the base state unless the queue is empty.
// TODO: Not sure if this is the desired semantics, but it's what we
// do for gDSFP. I can't remember why.
null===u.baseQueue&&(u.baseState=f),l.lastRenderedState=f}return[f,d]}function mountState(n){var r=mountWorkInProgressHook();"function"===typeof n&&(
// $FlowFixMe: Flow doesn't like mixed types
n=n()),r.memoizedState=r.baseState=n;var i=r.queue={pending:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:n},u=i.dispatch=dispatchAction.bind(null,Hu,i);return[r.memoizedState,u]}function updateState(n){return updateReducer(basicStateReducer)}function rerenderState(n){return rerenderReducer(basicStateReducer)}function pushEffect(n,r,i,u){var l={tag:n,create:r,destroy:i,deps:u,
// Circular
next:null},d=Hu.updateQueue;if(null===d)d={lastEffect:null},Hu.updateQueue=d,d.lastEffect=l.next=l;else{var p=d.lastEffect;if(null===p)d.lastEffect=l.next=l;else{var f=p.next;p.next=l,l.next=f,d.lastEffect=l}}return l}function mountRef(n){var r=mountWorkInProgressHook(),i={current:n};return Object.seal(i),r.memoizedState=i,i}function updateRef(n){return updateWorkInProgressHook().memoizedState}function mountEffectImpl(n,r,i,u){var l=mountWorkInProgressHook(),d=void 0===u?null:u;Hu.effectTag|=n,l.memoizedState=pushEffect(

1|r,i,void 0,d)}function updateEffectImpl(n,r,i,u){var l=updateWorkInProgressHook(),d=void 0===u?null:u,p=void 0;if(null!==Wu){var f=Wu.memoizedState;if(p=f.destroy,null!==d)if(areHookInputsEqual(d,f.deps))return void pushEffect(r,i,p,d)}Hu.effectTag|=n,l.memoizedState=pushEffect(1|r,i,p,d)}function mountEffect(n,r){
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
return"undefined"!==typeof jest&&warnIfNotCurrentlyActingEffectsInDEV(Hu),mountEffectImpl(516,

4,n,r)}function updateEffect(n,r){
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
return"undefined"!==typeof jest&&warnIfNotCurrentlyActingEffectsInDEV(Hu),updateEffectImpl(516,4,n,r)}function mountLayoutEffect(n,r){return mountEffectImpl(4,

2,n,r)}function updateLayoutEffect(n,r){return updateEffectImpl(4,2,n,r)}function imperativeHandleEffect(n,r){if("function"===typeof r){var i=r,u=n();return i(u),function(){i(null)}}if(null!==r&&void 0!==r){var l=r;l.hasOwnProperty("current")||error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(l).join(", ")+"}");var d=n();return l.current=d,function(){l.current=null}}}function mountImperativeHandle(n,r,i){"function"!==typeof r&&error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==r?typeof r:"null");// TODO: If deps are provided, should we skip comparing the ref itself?
var u=null!==i&&void 0!==i?i.concat([n]):null;return mountEffectImpl(4,2,imperativeHandleEffect.bind(null,r,n),u)}function updateImperativeHandle(n,r,i){"function"!==typeof r&&error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==r?typeof r:"null");// TODO: If deps are provided, should we skip comparing the ref itself?
var u=null!==i&&void 0!==i?i.concat([n]):null;return updateEffectImpl(4,2,imperativeHandleEffect.bind(null,r,n),u)}function mountDebugValue(n,r){// This hook is normally a no-op.
// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}var Bu=mountDebugValue;function mountCallback(n,r){var i=void 0===r?null:r;return mountWorkInProgressHook().memoizedState=[n,i],n}function updateCallback(n,r){var i=updateWorkInProgressHook(),u=void 0===r?null:r,l=i.memoizedState;if(null!==l&&(null!==u&&areHookInputsEqual(u,l[1])))return l[0];return i.memoizedState=[n,u],n}function mountMemo(n,r){var i=mountWorkInProgressHook(),u=void 0===r?null:r,l=n();return i.memoizedState=[l,u],l}function updateMemo(n,r){var i=updateWorkInProgressHook(),u=void 0===r?null:r,l=i.memoizedState;if(null!==l&&(null!==u&&areHookInputsEqual(u,l[1])))return l[0];var d=n();return i.memoizedState=[d,u],d}function mountDeferredValue(n,r){var i=mountState(n),u=i[0],l=i[1];return mountEffect((function(){var i=Ou.suspense;Ou.suspense=void 0===r?null:r;try{l(n)}finally{Ou.suspense=i}}),[n,r]),u}function updateDeferredValue(n,r){var i=updateState(),u=i[0],l=i[1];return updateEffect((function(){var i=Ou.suspense;Ou.suspense=void 0===r?null:r;try{l(n)}finally{Ou.suspense=i}}),[n,r]),u}function rerenderDeferredValue(n,r){var i=rerenderState(),u=i[0],l=i[1];return updateEffect((function(){var i=Ou.suspense;Ou.suspense=void 0===r?null:r;try{l(n)}finally{Ou.suspense=i}}),[n,r]),u}function startTransition(n,r,i){var u=getCurrentPriorityLevel();runWithPriority$1(u<mi?mi:u,(function(){n(!0)})),runWithPriority$1(u>hi?hi:u,(function(){var u=Ou.suspense;Ou.suspense=void 0===r?null:r;try{n(!1),i()}finally{Ou.suspense=u}}))}function mountTransition(n){var r=mountState(!1),i=r[0],u=r[1];return[mountCallback(startTransition.bind(null,u,n),[u,n]),i]}function updateTransition(n){var r=updateState(),i=r[0],u=r[1];return[updateCallback(startTransition.bind(null,u,n),[u,n]),i]}function rerenderTransition(n){var r=rerenderState(),i=r[0],u=r[1];return[updateCallback(startTransition.bind(null,u,n),[u,n]),i]}function dispatchAction(n,r,i){"function"===typeof arguments[3]&&error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var u=requestCurrentTimeForUpdate(),l=requestCurrentSuspenseConfig(),d=computeExpirationForFiber(u,n,l),p={expirationTime:d,suspenseConfig:l,action:i,eagerReducer:null,eagerState:null,next:null};p.priority=getCurrentPriorityLevel();// Append the update to the end of the list.
var f=r.pending;null===f?
// This is the first update. Create a circular list.
p.next=p:(p.next=f.next,f.next=p),r.pending=p;var m=n.alternate;if(n===Hu||null!==m&&m===Hu)
// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
Mu=!0,p.expirationTime=Au,Hu.expirationTime=Au;else{if(0===n.expirationTime&&(null===m||0===m.expirationTime)){
// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var h=r.lastRenderedReducer;if(null!==h){var v;v=Nu.current,Nu.current=Xu;try{var g=r.lastRenderedState,y=h(g,i);if(// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
p.eagerReducer=h,p.eagerState=y,oa(y,g))
// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
return}catch(error){// Suppress the error. It will throw again in the render phase.
}finally{Nu.current=v}}}
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
"undefined"!==typeof jest&&(warnIfNotScopedWithMatchingAct(n),fs(n)),as(n,d)}}var $u={readContext:_readContext,useCallback:throwInvalidHookError,useContext:throwInvalidHookError,useEffect:throwInvalidHookError,useImperativeHandle:throwInvalidHookError,useLayoutEffect:throwInvalidHookError,useMemo:throwInvalidHookError,useReducer:throwInvalidHookError,useRef:throwInvalidHookError,useState:throwInvalidHookError,useDebugValue:throwInvalidHookError,useResponder:throwInvalidHookError,useDeferredValue:throwInvalidHookError,useTransition:throwInvalidHookError},qu=null,Qu=null,Ku=null,Yu=null,Gu=null,Xu=null,Ju=null,Zu=function warnInvalidContextAccess(){error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},el=function warnInvalidHookAccess(){error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks")};qu={readContext:function readContext(n,r){return _readContext(n,r)},useCallback:function useCallback(n,r){return Lu="useCallback",mountHookTypesDev(),checkDepsAreArrayDev(r),mountCallback(n,r)},useContext:function useContext(n,r){return Lu="useContext",mountHookTypesDev(),_readContext(n,r)},useEffect:function useEffect(n,r){return Lu="useEffect",mountHookTypesDev(),checkDepsAreArrayDev(r),mountEffect(n,r)},useImperativeHandle:function useImperativeHandle(n,r,i){return Lu="useImperativeHandle",mountHookTypesDev(),checkDepsAreArrayDev(i),mountImperativeHandle(n,r,i)},useLayoutEffect:function useLayoutEffect(n,r){return Lu="useLayoutEffect",mountHookTypesDev(),checkDepsAreArrayDev(r),mountLayoutEffect(n,r)},useMemo:function useMemo(n,r){Lu="useMemo",mountHookTypesDev(),checkDepsAreArrayDev(r);var i=Nu.current;Nu.current=Gu;try{return mountMemo(n,r)}finally{Nu.current=i}},useReducer:function useReducer(n,r,i){Lu="useReducer",mountHookTypesDev();var u=Nu.current;Nu.current=Gu;try{return mountReducer(n,r,i)}finally{Nu.current=u}},useRef:function useRef(n){return Lu="useRef",mountHookTypesDev(),mountRef(n)},useState:function useState(n){Lu="useState",mountHookTypesDev();var r=Nu.current;Nu.current=Gu;try{return mountState(n)}finally{Nu.current=r}},useDebugValue:function useDebugValue(n,r){Lu="useDebugValue",mountHookTypesDev()},useResponder:function useResponder(n,r){return Lu="useResponder",mountHookTypesDev(),createDeprecatedResponderListener(n,r)},useDeferredValue:function useDeferredValue(n,r){return Lu="useDeferredValue",mountHookTypesDev(),mountDeferredValue(n,r)},useTransition:function useTransition(n){return Lu="useTransition",mountHookTypesDev(),mountTransition(n)}},Qu={readContext:function readContext(n,r){return _readContext(n,r)},useCallback:function useCallback(n,r){return Lu="useCallback",updateHookTypesDev(),mountCallback(n,r)},useContext:function useContext(n,r){return Lu="useContext",updateHookTypesDev(),_readContext(n,r)},useEffect:function useEffect(n,r){return Lu="useEffect",updateHookTypesDev(),mountEffect(n,r)},useImperativeHandle:function useImperativeHandle(n,r,i){return Lu="useImperativeHandle",updateHookTypesDev(),mountImperativeHandle(n,r,i)},useLayoutEffect:function useLayoutEffect(n,r){return Lu="useLayoutEffect",updateHookTypesDev(),mountLayoutEffect(n,r)},useMemo:function useMemo(n,r){Lu="useMemo",updateHookTypesDev();var i=Nu.current;Nu.current=Gu;try{return mountMemo(n,r)}finally{Nu.current=i}},useReducer:function useReducer(n,r,i){Lu="useReducer",updateHookTypesDev();var u=Nu.current;Nu.current=Gu;try{return mountReducer(n,r,i)}finally{Nu.current=u}},useRef:function useRef(n){return Lu="useRef",updateHookTypesDev(),mountRef(n)},useState:function useState(n){Lu="useState",updateHookTypesDev();var r=Nu.current;Nu.current=Gu;try{return mountState(n)}finally{Nu.current=r}},useDebugValue:function useDebugValue(n,r){Lu="useDebugValue",updateHookTypesDev()},useResponder:function useResponder(n,r){return Lu="useResponder",updateHookTypesDev(),createDeprecatedResponderListener(n,r)},useDeferredValue:function useDeferredValue(n,r){return Lu="useDeferredValue",updateHookTypesDev(),mountDeferredValue(n,r)},useTransition:function useTransition(n){return Lu="useTransition",updateHookTypesDev(),mountTransition(n)}},Ku={readContext:function readContext(n,r){return _readContext(n,r)},useCallback:function useCallback(n,r){return Lu="useCallback",updateHookTypesDev(),updateCallback(n,r)},useContext:function useContext(n,r){return Lu="useContext",updateHookTypesDev(),_readContext(n,r)},useEffect:function useEffect(n,r){return Lu="useEffect",updateHookTypesDev(),updateEffect(n,r)},useImperativeHandle:function useImperativeHandle(n,r,i){return Lu="useImperativeHandle",updateHookTypesDev(),updateImperativeHandle(n,r,i)},useLayoutEffect:function useLayoutEffect(n,r){return Lu="useLayoutEffect",updateHookTypesDev(),updateLayoutEffect(n,r)},useMemo:function useMemo(n,r){Lu="useMemo",updateHookTypesDev();var i=Nu.current;Nu.current=Xu;try{return updateMemo(n,r)}finally{Nu.current=i}},useReducer:function useReducer(n,r,i){Lu="useReducer",updateHookTypesDev();var u=Nu.current;Nu.current=Xu;try{return updateReducer(n)}finally{Nu.current=u}},useRef:function useRef(n){return Lu="useRef",updateHookTypesDev(),updateRef()},useState:function useState(n){Lu="useState",updateHookTypesDev();var r=Nu.current;Nu.current=Xu;try{return updateState()}finally{Nu.current=r}},useDebugValue:function useDebugValue(n,r){return Lu="useDebugValue",updateHookTypesDev(),Bu()},useResponder:function useResponder(n,r){return Lu="useResponder",updateHookTypesDev(),createDeprecatedResponderListener(n,r)},useDeferredValue:function useDeferredValue(n,r){return Lu="useDeferredValue",updateHookTypesDev(),updateDeferredValue(n,r)},useTransition:function useTransition(n){return Lu="useTransition",updateHookTypesDev(),updateTransition(n)}},Yu={readContext:function readContext(n,r){return _readContext(n,r)},useCallback:function useCallback(n,r){return Lu="useCallback",updateHookTypesDev(),updateCallback(n,r)},useContext:function useContext(n,r){return Lu="useContext",updateHookTypesDev(),_readContext(n,r)},useEffect:function useEffect(n,r){return Lu="useEffect",updateHookTypesDev(),updateEffect(n,r)},useImperativeHandle:function useImperativeHandle(n,r,i){return Lu="useImperativeHandle",updateHookTypesDev(),updateImperativeHandle(n,r,i)},useLayoutEffect:function useLayoutEffect(n,r){return Lu="useLayoutEffect",updateHookTypesDev(),updateLayoutEffect(n,r)},useMemo:function useMemo(n,r){Lu="useMemo",updateHookTypesDev();var i=Nu.current;Nu.current=Ju;try{return updateMemo(n,r)}finally{Nu.current=i}},useReducer:function useReducer(n,r,i){Lu="useReducer",updateHookTypesDev();var u=Nu.current;Nu.current=Ju;try{return rerenderReducer(n)}finally{Nu.current=u}},useRef:function useRef(n){return Lu="useRef",updateHookTypesDev(),updateRef()},useState:function useState(n){Lu="useState",updateHookTypesDev();var r=Nu.current;Nu.current=Ju;try{return rerenderState()}finally{Nu.current=r}},useDebugValue:function useDebugValue(n,r){return Lu="useDebugValue",updateHookTypesDev(),Bu()},useResponder:function useResponder(n,r){return Lu="useResponder",updateHookTypesDev(),createDeprecatedResponderListener(n,r)},useDeferredValue:function useDeferredValue(n,r){return Lu="useDeferredValue",updateHookTypesDev(),rerenderDeferredValue(n,r)},useTransition:function useTransition(n){return Lu="useTransition",updateHookTypesDev(),rerenderTransition(n)}},Gu={readContext:function readContext(n,r){return Zu(),_readContext(n,r)},useCallback:function useCallback(n,r){return Lu="useCallback",el(),mountHookTypesDev(),mountCallback(n,r)},useContext:function useContext(n,r){return Lu="useContext",el(),mountHookTypesDev(),_readContext(n,r)},useEffect:function useEffect(n,r){return Lu="useEffect",el(),mountHookTypesDev(),mountEffect(n,r)},useImperativeHandle:function useImperativeHandle(n,r,i){return Lu="useImperativeHandle",el(),mountHookTypesDev(),mountImperativeHandle(n,r,i)},useLayoutEffect:function useLayoutEffect(n,r){return Lu="useLayoutEffect",el(),mountHookTypesDev(),mountLayoutEffect(n,r)},useMemo:function useMemo(n,r){Lu="useMemo",el(),mountHookTypesDev();var i=Nu.current;Nu.current=Gu;try{return mountMemo(n,r)}finally{Nu.current=i}},useReducer:function useReducer(n,r,i){Lu="useReducer",el(),mountHookTypesDev();var u=Nu.current;Nu.current=Gu;try{return mountReducer(n,r,i)}finally{Nu.current=u}},useRef:function useRef(n){return Lu="useRef",el(),mountHookTypesDev(),mountRef(n)},useState:function useState(n){Lu="useState",el(),mountHookTypesDev();var r=Nu.current;Nu.current=Gu;try{return mountState(n)}finally{Nu.current=r}},useDebugValue:function useDebugValue(n,r){Lu="useDebugValue",el(),mountHookTypesDev()},useResponder:function useResponder(n,r){return Lu="useResponder",el(),mountHookTypesDev(),createDeprecatedResponderListener(n,r)},useDeferredValue:function useDeferredValue(n,r){return Lu="useDeferredValue",el(),mountHookTypesDev(),mountDeferredValue(n,r)},useTransition:function useTransition(n){return Lu="useTransition",el(),mountHookTypesDev(),mountTransition(n)}},Xu={readContext:function readContext(n,r){return Zu(),_readContext(n,r)},useCallback:function useCallback(n,r){return Lu="useCallback",el(),updateHookTypesDev(),updateCallback(n,r)},useContext:function useContext(n,r){return Lu="useContext",el(),updateHookTypesDev(),_readContext(n,r)},useEffect:function useEffect(n,r){return Lu="useEffect",el(),updateHookTypesDev(),updateEffect(n,r)},useImperativeHandle:function useImperativeHandle(n,r,i){return Lu="useImperativeHandle",el(),updateHookTypesDev(),updateImperativeHandle(n,r,i)},useLayoutEffect:function useLayoutEffect(n,r){return Lu="useLayoutEffect",el(),updateHookTypesDev(),updateLayoutEffect(n,r)},useMemo:function useMemo(n,r){Lu="useMemo",el(),updateHookTypesDev();var i=Nu.current;Nu.current=Xu;try{return updateMemo(n,r)}finally{Nu.current=i}},useReducer:function useReducer(n,r,i){Lu="useReducer",el(),updateHookTypesDev();var u=Nu.current;Nu.current=Xu;try{return updateReducer(n)}finally{Nu.current=u}},useRef:function useRef(n){return Lu="useRef",el(),updateHookTypesDev(),updateRef()},useState:function useState(n){Lu="useState",el(),updateHookTypesDev();var r=Nu.current;Nu.current=Xu;try{return updateState()}finally{Nu.current=r}},useDebugValue:function useDebugValue(n,r){return Lu="useDebugValue",el(),updateHookTypesDev(),Bu()},useResponder:function useResponder(n,r){return Lu="useResponder",el(),updateHookTypesDev(),createDeprecatedResponderListener(n,r)},useDeferredValue:function useDeferredValue(n,r){return Lu="useDeferredValue",el(),updateHookTypesDev(),updateDeferredValue(n,r)},useTransition:function useTransition(n){return Lu="useTransition",el(),updateHookTypesDev(),updateTransition(n)}},Ju={readContext:function readContext(n,r){return Zu(),_readContext(n,r)},useCallback:function useCallback(n,r){return Lu="useCallback",el(),updateHookTypesDev(),updateCallback(n,r)},useContext:function useContext(n,r){return Lu="useContext",el(),updateHookTypesDev(),_readContext(n,r)},useEffect:function useEffect(n,r){return Lu="useEffect",el(),updateHookTypesDev(),updateEffect(n,r)},useImperativeHandle:function useImperativeHandle(n,r,i){return Lu="useImperativeHandle",el(),updateHookTypesDev(),updateImperativeHandle(n,r,i)},useLayoutEffect:function useLayoutEffect(n,r){return Lu="useLayoutEffect",el(),updateHookTypesDev(),updateLayoutEffect(n,r)},useMemo:function useMemo(n,r){Lu="useMemo",el(),updateHookTypesDev();var i=Nu.current;Nu.current=Xu;try{return updateMemo(n,r)}finally{Nu.current=i}},useReducer:function useReducer(n,r,i){Lu="useReducer",el(),updateHookTypesDev();var u=Nu.current;Nu.current=Xu;try{return rerenderReducer(n)}finally{Nu.current=u}},useRef:function useRef(n){return Lu="useRef",el(),updateHookTypesDev(),updateRef()},useState:function useState(n){Lu="useState",el(),updateHookTypesDev();var r=Nu.current;Nu.current=Xu;try{return rerenderState()}finally{Nu.current=r}},useDebugValue:function useDebugValue(n,r){return Lu="useDebugValue",el(),updateHookTypesDev(),Bu()},useResponder:function useResponder(n,r){return Lu="useResponder",el(),updateHookTypesDev(),createDeprecatedResponderListener(n,r)},useDeferredValue:function useDeferredValue(n,r){return Lu="useDeferredValue",el(),updateHookTypesDev(),rerenderDeferredValue(n,r)},useTransition:function useTransition(n){return Lu="useTransition",el(),updateHookTypesDev(),rerenderTransition(n)}};var tl=l.unstable_now,nl=0,rl=-1;function recordCommitTime(){nl=tl()}function startProfilerTimer(n){rl=tl(),n.actualStartTime<0&&(n.actualStartTime=tl())}function stopProfilerTimerIfRunning(n){rl=-1}function stopProfilerTimerIfRunningAndRecordDelta(n,r){if(rl>=0){var i=tl()-rl;n.actualDuration+=i,r&&(n.selfBaseDuration=i),rl=-1}}// This may have been an insertion or a hydration.
var ol=null,al=null,il=!1;function deleteHydratableInstance(n,r){switch(n.tag){case 3:!function didNotHydrateContainerInstance(n,r){1===r.nodeType?warnForDeletedHydratableElement(n,r):8===r.nodeType||warnForDeletedHydratableText(n,r)}(n.stateNode.containerInfo,r);break;case 5:!function didNotHydrateInstance(n,r,i,u){!0!==r.suppressHydrationWarning&&(1===u.nodeType?warnForDeletedHydratableElement(i,u):8===u.nodeType||warnForDeletedHydratableText(i,u))}(n.type,n.memoizedProps,n.stateNode,r)}var i=function createFiberFromHostInstanceForDeletion(){var n=Ps(5,null,null,0);// TODO: These should not need a type.
return n.elementType="DELETED",n.type="DELETED",n}();i.stateNode=r,i.return=n,i.effectTag=8,// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
null!==n.lastEffect?(n.lastEffect.nextEffect=i,n.lastEffect=i):n.firstEffect=n.lastEffect=i}function insertNonHydratedInstance(n,r){switch(r.effectTag=-1025&r.effectTag|2,n.tag){case 3:var i=n.stateNode.containerInfo;switch(r.tag){case 5:var u=r.type;r.pendingProps;!function didNotFindHydratableContainerInstance(n,r,i){warnForInsertedHydratedElement(n,r)}(i,u);break;case 6:!function didNotFindHydratableContainerTextInstance(n,r){warnForInsertedHydratedText(n,r)}(i,r.pendingProps)}break;case 5:n.type;var l=n.memoizedProps,d=n.stateNode;switch(r.tag){case 5:var p=r.type;r.pendingProps;!function didNotFindHydratableInstance(n,r,i,u,l){!0!==r.suppressHydrationWarning&&warnForInsertedHydratedElement(i,u)}(0,l,d,p);break;case 6:!function didNotFindHydratableTextInstance(n,r,i,u){!0!==r.suppressHydrationWarning&&warnForInsertedHydratedText(i,u)}(0,l,d,r.pendingProps);break;case _:!function didNotFindHydratableSuspenseInstance(n,r,i){r.suppressHydrationWarning}(0,l)}break;default:return}}function tryHydrate(n,r){switch(n.tag){case 5:var i=n.type,u=(n.pendingProps,function canHydrateInstance(n,r,i){return 1!==n.nodeType||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n;// This has now been refined to an element node.
}(r,i));return null!==u&&(n.stateNode=u,!0);case 6:var l=function canHydrateTextInstance(n,r){return""===r||3!==n.nodeType?null:n;// This has now been refined to a text node.
}(r,n.pendingProps);return null!==l&&(n.stateNode=l,!0);default:return!1}}function tryToClaimNextHydratableInstance(n){if(il){var r=al;if(!r)
// Nothing to hydrate. Make it an insertion.
return insertNonHydratedInstance(ol,n),il=!1,void(ol=n);var i=r;if(!tryHydrate(n,r)){if(!(
// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
r=getNextHydratableSibling(i))||!tryHydrate(n,r))
// Nothing to hydrate. Make it an insertion.
return insertNonHydratedInstance(ol,n),il=!1,void(ol=n);// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(ol,i)}ol=n,al=getFirstHydratableChild(r)}}function prepareToHydrateHostTextInstance(n){var r=n.stateNode,i=n.memoizedProps,u=function hydrateTextInstance(n,r,i){return precacheFiberNode(i,n),function diffHydratedText(n,r){return n.nodeValue!==r}(n,r)}(r,i,n);if(u){
// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var l=ol;if(null!==l)switch(l.tag){case 3:l.stateNode.containerInfo;!function didNotMatchHydratedContainerTextInstance(n,r,i){warnForUnmatchedText(r,i)}(0,r,i);break;case 5:l.type;var d=l.memoizedProps;l.stateNode;!function didNotMatchHydratedTextInstance(n,r,i,u,l){!0!==r.suppressHydrationWarning&&warnForUnmatchedText(u,l)}(0,d,0,r,i)}}return u}function skipPastDehydratedSuspenseInstance(n){var r=n.memoizedState,i=null!==r?r.dehydrated:null;if(!i)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return function getNextHydratableInstanceAfterSuspenseInstance(n){for(var r=n.nextSibling,i=0// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
;r;){if(8===r.nodeType){var u=r.data;if("/$"===u){if(0===i)return getNextHydratableSibling(r);i--}else"$"!==u&&u!==go&&u!==vo||i++}r=r.nextSibling}// TODO: Warn, we didn't find the end comment boundary.
return null}(i)}function popToNextHostParent(n){for(var r=n.return;null!==r&&5!==r.tag&&3!==r.tag&&r.tag!==_;)r=r.return;ol=r}function popHydrationState(n){if(n!==ol)
// We're deeper than the current hydration context, inside an inserted
// tree.
return!1;if(!il)
// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
return popToNextHostParent(n),il=!0,!1;var r=n.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(5!==n.tag||"head"!==r&&"body"!==r&&!shouldSetTextContent(r,n.memoizedProps))for(var i=al;i;)deleteHydratableInstance(n,i),i=getNextHydratableSibling(i);return popToNextHostParent(n),al=n.tag===_?skipPastDehydratedSuspenseInstance(n):ol?getNextHydratableSibling(n.stateNode):null,!0}function resetHydrationState(){ol=null,al=null,il=!1}var ul,ll,sl,cl,dl,pl,fl,ml,hl=f.ReactCurrentOwner,vl=!1;function reconcileChildren(n,r,i,u){
// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
r.child=null===n?Su(r,null,i,u):Eu(r,n.child,i,u)}function updateForwardRef(n,r,i,u,l){if(r.type!==r.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var p=i.propTypes;p&&d(p,u,// Resolved props
"prop",getComponentName(i),getCurrentFiberStackInDev)}var f,m=i.render,h=r.ref;return prepareToReadContext(r,l),hl.current=r,setIsRendering(!0),f=renderWithHooks(n,r,m,u,h,l),1&r.mode&&null!==r.memoizedState&&(f=renderWithHooks(n,r,m,u,h,l)),setIsRendering(!1),null===n||vl?(// React DevTools reads this flag.
r.effectTag|=

1,reconcileChildren(n,r,f,l),r.child):(bailoutHooks(n,r,l),bailoutOnAlreadyFinishedWork(n,r,l))}function updateMemoComponent(n,r,i,u,l,p){if(null===n){var f=i.type;if(function isSimpleFunctionComponent(n){return"function"===typeof n&&!shouldConstruct(n)&&void 0===n.defaultProps}(f)&&null===i.compare&&// SimpleMemoComponent codepath doesn't resolve outer props either.
void 0===i.defaultProps){var m;return m=resolveFunctionForHotReloading(f),// If this is a plain function component without default props,
// and with only the default shallow comparison, we upgrade it
// to a SimpleMemoComponent to allow fast path updates.
r.tag=F,r.type=m,validateFunctionComponentInDev(r,f),updateSimpleMemoComponent(n,r,m,u,l,p)}var h=f.propTypes;h&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
d(h,u,// Resolved props
"prop",getComponentName(f),getCurrentFiberStackInDev);var v=createFiberFromTypeAndProps(i.type,null,u,null,r.mode,p);return v.ref=r.ref,v.return=r,r.child=v,v}var g=i.type,y=g.propTypes;y&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
d(y,u,// Resolved props
"prop",getComponentName(g),getCurrentFiberStackInDev);var b=n.child;// This is always exactly one child
if(l<p){
// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var C=b.memoizedProps,k=i.compare;// Default to shallow comparison
if((k=null!==k?k:shallowEqual)(C,u)&&n.ref===r.ref)return bailoutOnAlreadyFinishedWork(n,r,p)}// React DevTools reads this flag.
r.effectTag|=1;var w=createWorkInProgress(b,u);return w.ref=r.ref,w.return=r,r.child=w,w}function updateSimpleMemoComponent(n,r,i,u,l,p){if(r.type!==r.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var f=r.elementType;f.$$typeof===Ee&&(
// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
f=refineResolvedLazyComponent(f));var m=f&&f.propTypes;m&&d(m,u,// Resolved (SimpleMemoComponent has no defaultProps)
"prop",getComponentName(f),getCurrentFiberStackInDev);// Inner propTypes will be validated in the function component path.
}if(null!==n&&(shallowEqual(n.memoizedProps,u)&&n.ref===r.ref&&// Prevent bailout if the implementation changed due to hot reload.
r.type===n.type&&(vl=!1,l<p)))
// The pending update priority was cleared at the beginning of
// beginWork. We're about to bail out, but there might be additional
// updates at a lower priority. Usually, the priority level of the
// remaining updates is accumlated during the evaluation of the
// component (i.e. when processing the update queue). But since since
// we're bailing out early *without* evaluating the component, we need
// to account for it here, too. Reset to the value of the current fiber.
// NOTE: This only applies to SimpleMemoComponent, not MemoComponent,
// because a MemoComponent fiber does not have hooks or an update queue;
// rather, it wraps around an inner component, which may or may not
// contains hooks.
// TODO: Move the reset at in beginWork out of the common path so that
// this is no longer necessary.
return r.expirationTime=n.expirationTime,bailoutOnAlreadyFinishedWork(n,r,p);return updateFunctionComponent(n,r,i,u,p)}function markRef(n,r){var i=r.ref;(null===n&&null!==i||null!==n&&n.ref!==i)&&(
// Schedule a Ref effect
r.effectTag|=Dn)}function updateFunctionComponent(n,r,i,u,l){if(r.type!==r.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var p=i.propTypes;p&&d(p,u,// Resolved props
"prop",getComponentName(i),getCurrentFiberStackInDev)}var f,m;return f=getMaskedContext(r,getUnmaskedContext(0,i,!0)),prepareToReadContext(r,l),hl.current=r,setIsRendering(!0),m=renderWithHooks(n,r,i,u,f,l),1&r.mode&&null!==r.memoizedState&&(m=renderWithHooks(n,r,i,u,f,l)),setIsRendering(!1),null===n||vl?(// React DevTools reads this flag.
r.effectTag|=1,reconcileChildren(n,r,m,l),r.child):(bailoutHooks(n,r,l),bailoutOnAlreadyFinishedWork(n,r,l))}function updateClassComponent(n,r,i,u,l){if(r.type!==r.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var p=i.propTypes;p&&d(p,u,// Resolved props
"prop",getComponentName(i),getCurrentFiberStackInDev)}// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var f,m;isContextProvider(i)?(f=!0,pushContextProvider(r)):f=!1,prepareToReadContext(r,l),null===r.stateNode?(null!==n&&(
// A class component without an instance only mounts if it suspended
// inside a non-concurrent tree, in an inconsistent state. We want to
// treat it like a new mount, even though an empty version of it already
// committed. Disconnect the alternate pointers.
n.alternate=null,r.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
r.effectTag|=2),// In the initial pass we might need to construct the instance.
constructClassInstance(r,i,u),mountClassInstance(r,i,u,l),m=!0):
// In a resume, we'll already have an instance we can reuse.
m=null===n?function resumeMountClassInstance(n,r,i,u){var l=n.stateNode,d=n.memoizedProps;l.props=d;var p=l.context,f=r.contextType,m=Ga;m="object"===typeof f&&null!==f?_readContext(f):getMaskedContext(n,getUnmaskedContext(0,r,!0));var h=r.getDerivedStateFromProps,v="function"===typeof h||"function"===typeof l.getSnapshotBeforeUpdate;// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
v||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||d===i&&p===m||callComponentWillReceiveProps(n,l,i,m),resetHasForceUpdateBeforeProcessing();var g=n.memoizedState,y=l.state=g;if(processUpdateQueue(n,i,l,u),y=n.memoizedState,d===i&&g===y&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"===typeof l.componentDidMount&&(n.effectTag|=4),!1;"function"===typeof h&&(applyDerivedStateFromProps(n,r,h,i),y=n.memoizedState);var b=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(n,r,d,i,g,y,m);return b?(
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
v||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||(startPhaseTimer(n,"componentWillMount"),"function"===typeof l.componentWillMount&&l.componentWillMount(),"function"===typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount(),stopPhaseTimer()),"function"===typeof l.componentDidMount&&(n.effectTag|=4)):(
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
"function"===typeof l.componentDidMount&&(n.effectTag|=4),// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
n.memoizedProps=i,n.memoizedState=y),// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
l.props=i,l.state=y,l.context=m,b}// Invokes the update life-cycles and returns false if it shouldn't rerender.
(r,i,u,l):function updateClassInstance(n,r,i,u,l){var d=r.stateNode;cloneUpdateQueue(n,r);var p=r.memoizedProps;d.props=r.type===r.elementType?p:resolveDefaultProps(r.type,p);var f=d.context,m=i.contextType,h=Ga;h="object"===typeof m&&null!==m?_readContext(m):getMaskedContext(r,getUnmaskedContext(0,i,!0));var v=i.getDerivedStateFromProps,g="function"===typeof v||"function"===typeof d.getSnapshotBeforeUpdate;// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
g||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||p===u&&f===h||callComponentWillReceiveProps(r,d,u,h),resetHasForceUpdateBeforeProcessing();var y=r.memoizedState,b=d.state=y;if(processUpdateQueue(r,u,d,l),b=r.memoizedState,p===u&&y===b&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"===typeof d.componentDidUpdate&&(p===n.memoizedProps&&y===n.memoizedState||(r.effectTag|=4)),"function"===typeof d.getSnapshotBeforeUpdate&&(p===n.memoizedProps&&y===n.memoizedState||(r.effectTag|=Fn)),!1;"function"===typeof v&&(applyDerivedStateFromProps(r,i,v,u),b=r.memoizedState);var C=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(r,i,p,u,y,b,h);return C?(
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
g||"function"!==typeof d.UNSAFE_componentWillUpdate&&"function"!==typeof d.componentWillUpdate||(startPhaseTimer(r,"componentWillUpdate"),"function"===typeof d.componentWillUpdate&&d.componentWillUpdate(u,b,h),"function"===typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(u,b,h),stopPhaseTimer()),"function"===typeof d.componentDidUpdate&&(r.effectTag|=4),"function"===typeof d.getSnapshotBeforeUpdate&&(r.effectTag|=Fn)):(
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
"function"===typeof d.componentDidUpdate&&(p===n.memoizedProps&&y===n.memoizedState||(r.effectTag|=4)),"function"===typeof d.getSnapshotBeforeUpdate&&(p===n.memoizedProps&&y===n.memoizedState||(r.effectTag|=Fn)),// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
r.memoizedProps=u,r.memoizedState=b),// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
d.props=u,d.state=b,d.context=h,C}(n,r,i,u,l);var h=finishClassComponent(n,r,i,m,f,l);return r.stateNode.props!==u&&(pl||error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",getComponentName(r.type)||"a component"),pl=!0),h}function finishClassComponent(n,r,i,u,l,d){
// Refs should update even if shouldComponentUpdate returns false
markRef(n,r);var p=0!==(r.effectTag&_n);if(!u&&!p)
// Context providers should defer to sCU for rendering
return l&&invalidateContextProvider(r,i,!1),bailoutOnAlreadyFinishedWork(n,r,d);var f,m=r.stateNode;// Rerender
return hl.current=r,p&&"function"!==typeof i.getDerivedStateFromError?(
// If we captured an error, but getDerivedStateFromError is not defined,
// unmount all the children. componentDidCatch will schedule an update to
// re-render a fallback. This is temporary until we migrate everyone to
// the new API.
// TODO: Warn in a future release.
f=null,stopProfilerTimerIfRunning()):(setIsRendering(!0),f=m.render(),1&r.mode&&m.render(),setIsRendering(!1)),// React DevTools reads this flag.
r.effectTag|=1,null!==n&&p?
// If we're recovering from an error, reconcile without reusing any of
// the existing children. Conceptually, the normal children and the children
// that are shown on error are two different sets, so we shouldn't reuse
// normal children even if their identities match.
function forceUnmountCurrentAndReconcile(n,r,i,u){
// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
r.child=Eu(r,n.child,null,u),// In the second pass, we mount the new children. The trick here is that we
// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their
// identities match.
r.child=Eu(r,null,i,u)}(n,r,f,d):reconcileChildren(n,r,f,d),// Memoize state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
r.memoizedState=m.state,// The context might have changed so we need to recalculate it.
l&&invalidateContextProvider(r,i,!0),r.child}function pushHostRootContext(n){var r=n.stateNode;r.pendingContext?pushTopLevelContextObject(n,r.pendingContext,r.pendingContext!==r.context):r.context&&
// Should always be set
pushTopLevelContextObject(n,r.context,!1),pushHostContainer(n,r.containerInfo)}function updateHostRoot(n,r,i){pushHostRootContext(r);var u=r.updateQueue;if(null===n||null===u)throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");var l=r.pendingProps,d=r.memoizedState,p=null!==d?d.element:null;cloneUpdateQueue(n,r),processUpdateQueue(r,l,null,i);var f=r.memoizedState.element;// Caution: React DevTools currently depends on this property
// being called "element".
if(f===p)
// If the state is the same as before, that's a bailout because we had
// no work that expires at this time.
return resetHydrationState(),bailoutOnAlreadyFinishedWork(n,r,i);if(r.stateNode.hydrate&&function enterHydrationState(n){var r=n.stateNode.containerInfo;return al=getFirstHydratableChild(r),ol=n,il=!0,!0}(r)){
// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
var m=Su(r,null,f,i);r.child=m;for(var h=m;h;)
// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
h.effectTag=-3&h.effectTag|On,h=h.sibling}else
// Otherwise reset hydration state in case we aborted and resumed another
// root.
reconcileChildren(n,r,f,i),resetHydrationState();return r.child}function mountLazyComponent(n,r,i,u,l){null!==n&&(
// A lazy component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
n.alternate=null,r.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
r.effectTag|=2);var p=r.pendingProps;// We can't start a User Timing measurement with correct label yet.
// Cancel and resume right after we know the tag.
cancelWorkTimer(r);var f=readLazyComponentType(i);// Store the unwrapped component in the type.
r.type=f;var m=r.tag=function resolveLazyComponentTag(n){if("function"===typeof n)return shouldConstruct(n)?1:0;if(void 0!==n&&null!==n){var r=n.$$typeof;if(r===ke)return R;if(r===xe)return D}return 2}// This is used to create an alternate fiber to do work on.
(f);startWorkTimer(r);var h=resolveDefaultProps(f,p);switch(m){case 0:return validateFunctionComponentInDev(r,f),r.type=f=resolveFunctionForHotReloading(f),updateFunctionComponent(null,r,f,h,l);case 1:return r.type=f=resolveClassForHotReloading(f),updateClassComponent(null,r,f,h,l);case R:return r.type=f=resolveForwardRefForHotReloading(f),updateForwardRef(null,r,f,h,l);case D:if(r.type!==r.elementType){var v=f.propTypes;v&&d(v,h,// Resolved for outer only
"prop",getComponentName(f),getCurrentFiberStackInDev)}return updateMemoComponent(null,r,f,resolveDefaultProps(f.type,h),// The inner type can have defaults too
u,l)}var g="";throw null!==f&&"object"===typeof f&&f.$$typeof===Ee&&(g=" Did you wrap a component in React.lazy() more than once?"),Error("Element type is invalid. Received a promise that resolves to: "+f+". Lazy element type must resolve to a class or function."+g)}function validateFunctionComponentInDev(n,r){if(r&&r.childContextTypes&&error("%s(...): childContextTypes cannot be defined on a function component.",r.displayName||r.name||"Component"),null!==n.ref){var i="",u=getCurrentFiberOwnerNameInDevOrNull();u&&(i+="\n\nCheck the render method of `"+u+"`.");var l=u||n._debugID||"",d=n._debugSource;d&&(l=d.fileName+":"+d.lineNumber),dl[l]||(dl[l]=!0,error("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",i))}if("function"===typeof r.getDerivedStateFromProps){var p=getComponentName(r)||"Unknown";cl[p]||(error("%s: Function components do not support getDerivedStateFromProps.",p),cl[p]=!0)}if("object"===typeof r.contextType&&null!==r.contextType){var f=getComponentName(r)||"Unknown";sl[f]||(error("%s: Function components do not support contextType.",f),sl[f]=!0)}}ul={},ll={},sl={},cl={},dl={},pl=!1,fl={},ml={};var gl={dehydrated:null,retryTime:0};function updateSuspenseComponent(n,r,i){var u=r.mode,l=r.pendingProps;(function shouldSuspend(n){return Rs(n)})(r)&&(r.effectTag|=_n);var d=Du.current,p=!1;// This next part is a bit confusing. If the children timeout, we switch to
// showing the fallback children in place of the "primary" children.
// However, we don't want to delete the primary children because then their
// state will be lost (both the React state and the host state, e.g.
// uncontrolled form inputs). Instead we keep them mounted and hide them.
// Both the fallback children AND the primary children are rendered at the
// same time. Once the primary children are un-suspended, we can delete
// the fallback children — don't need to preserve their state.
// The two sets of children are siblings in the host environment, but
// semantically, for purposes of reconciliation, they are two separate sets.
// So we store them using two fragment fibers.
// However, we want to avoid allocating extra fibers for every placeholder.
// They're only necessary when the children time out, because that's the
// only time when both sets are mounted.
// So, the extra fragment fibers are only used if the children time out.
// Otherwise, we render the primary children directly. This requires some
// custom reconciliation logic to preserve the state of the primary
// children. It's essentially a very basic form of re-parenting.
if(0!==(r.effectTag&_n)||function shouldRemainOnFallback(n,r,i){
// If the context is telling us that we should show a fallback, and we're not
// already showing content, then we should show the fallback instead.
return hasSuspenseContext(n,2)&&(null===r||null!==r.memoizedState)}(d,n)?(
// Something in this boundary's subtree already suspended. Switch to
// rendering the fallback children.
p=!0,r.effectTag&=-65):
// Attempting the main content
null!==n&&null===n.memoizedState||
// This is a new mount or this boundary is already showing a fallback state.
// Mark this subtree context as having at least one invisible parent that could
// handle the fallback state.
// Boundaries without fallbacks or should be avoided are not considered since
// they cannot handle preferred fallback states.
void 0!==l.fallback&&!0!==l.unstable_avoidThisFallback&&(d=function addSubtreeSuspenseContext(n,r){return n|r}(d,1)),pushSuspenseContext(r,d=setDefaultShallowSuspenseContext(d)),null===n){// This is the initial mount. This branch is pretty simple because there's
// no previous state that needs to be preserved.
if(
// If we're currently hydrating, try to hydrate this boundary.
// But only if this has a fallback.
void 0!==l.fallback&&tryToClaimNextHydratableInstance(r),p){
// Mount separate fragments for primary and fallback children.
var f=l.fallback,m=createFiberFromFragment(null,u,0,null);if(m.return=r,0===(2&r.mode)){
// Outside of blocking mode, we commit the effects from the
// partially completed, timed-out tree, too.
var h=null!==r.memoizedState?r.child.child:r.child;m.child=h;for(var v=h;null!==v;)v.return=m,v=v.sibling}var g=createFiberFromFragment(f,u,i,null);return g.return=r,m.sibling=g,// Skip the primary children, and continue working on the
// fallback children.
r.memoizedState=gl,r.child=m,g}
// Mount the primary children without an intermediate fragment fiber.
var y=l.children;return r.memoizedState=null,r.child=Su(r,null,y,i)}if(null!==n.memoizedState){
// wrapped in a fragment fiber.
var b=n.child,C=b.sibling;if(p){
// Still timed out. Reuse the current primary children by cloning
// its fragment. We're going to skip over these entirely.
var k=l.fallback,w=createWorkInProgress(b,b.pendingProps);if(w.return=r,0===(2&r.mode)){
// Outside of blocking mode, we commit the effects from the
// partially completed, timed-out tree, too.
var T=null!==r.memoizedState?r.child.child:r.child;if(T!==b.child){w.child=T;for(var x=T;null!==x;)x.return=w,x=x.sibling}}// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(8&r.mode){for(
// treeBaseDuration is the sum of all the child tree base durations.
var S=0,P=w.child;null!==P;)S+=P.treeBaseDuration,P=P.sibling;w.treeBaseDuration=S}// Clone the fallback child fragment, too. These we'll continue
// working on.
var R=createWorkInProgress(C,k);return R.return=r,w.sibling=R,w.childExpirationTime=0,// Skip the primary children, and continue working on the
// fallback children.
r.memoizedState=gl,r.child=w,R}
// No longer suspended. Switch back to showing the primary children,
// and remove the intermediate fragment fiber.
var I=l.children,_=b.child,D=Eu(r,_,I,i);// If this render doesn't suspend, we need to delete the fallback
// children. Wait until the complete phase, after we've confirmed the
// fallback is no longer needed.
// TODO: Would it be better to store the fallback fragment on
// the stateNode?
// Continue rendering the children, like we normally do.
return r.memoizedState=null,r.child=D}
// The current tree has not already timed out. That means the primary
// children are not wrapped in a fragment fiber.
var F=n.child;if(p){
// Timed out. Wrap the children in a fragment fiber to keep them
// separate from the fallback children.
var N=l.fallback,O=createFiberFromFragment(// It shouldn't matter what the pending props are because we aren't
// going to render this fragment.
null,u,0,null);// Even though we're creating a new fiber, there are no new children,
// because we're reusing an already mounted tree. So we don't need to
// schedule a placement.
// primaryChildFragment.effectTag |= Placement;
if(O.return=r,O.child=F,null!==F&&(F.return=O),0===(2&r.mode)){
// Outside of blocking mode, we commit the effects from the
// partially completed, timed-out tree, too.
var A=null!==r.memoizedState?r.child.child:r.child;O.child=A;for(var H=A;null!==H;)H.return=O,H=H.sibling}// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(8&r.mode){for(
// treeBaseDuration is the sum of all the child tree base durations.
var W=0,U=O.child;null!==U;)W+=U.treeBaseDuration,U=U.sibling;O.treeBaseDuration=W}// Create a fragment from the fallback children, too.
var M=createFiberFromFragment(N,u,i,null);return M.return=r,O.sibling=M,M.effectTag|=2,O.childExpirationTime=0,// Skip the primary children, and continue working on the
// fallback children.
r.memoizedState=gl,r.child=O,M}
// Still haven't timed out. Continue rendering the children, like we
// normally do.
r.memoizedState=null;var L=l.children;return r.child=Eu(r,F,L,i)}function scheduleWorkOnFiber(n,r){n.expirationTime<r&&(n.expirationTime=r);var i=n.alternate;null!==i&&i.expirationTime<r&&(i.expirationTime=r),scheduleWorkOnParentPath(n.return,r)}function validateSuspenseListNestedChild(n,r){var i=Array.isArray(n),u=!i&&"function"===typeof getIteratorFn(n);if(i||u){var l=i?"array":"iterable";return error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",l,r,l),!1}return!0}function initSuspenseListRenderState(n,r,i,u,l,d){var p=n.memoizedState;null===p?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:i,tailExpiration:0,tailMode:l,lastEffect:d}:(
// We can reuse the existing object from previous renders.
p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=i,p.tailExpiration=0,p.tailMode=l,p.lastEffect=d)}// This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phase without going back to beginWork.
function updateSuspenseListComponent(n,r,i){var u=r.pendingProps,l=u.revealOrder,d=u.tail,p=u.children;!function validateRevealOrder(n){if(void 0!==n&&"forwards"!==n&&"backwards"!==n&&"together"!==n&&!fl[n])if(fl[n]=!0,"string"===typeof n)switch(n.toLowerCase()){case"together":case"forwards":case"backwards":error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',n,n.toLowerCase());break;case"forward":case"backward":error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',n,n.toLowerCase());break;default:error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',n)}else error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',n)}(l),function validateTailOptions(n,r){void 0===n||ml[n]||("collapsed"!==n&&"hidden"!==n?(ml[n]=!0,error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',n)):"forwards"!==r&&"backwards"!==r&&(ml[n]=!0,error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',n)))}(d,l),function validateSuspenseListChildren(n,r){if(("forwards"===r||"backwards"===r)&&void 0!==n&&null!==n&&!1!==n)if(Array.isArray(n)){for(var i=0;i<n.length;i++)if(!validateSuspenseListNestedChild(n[i],i))return}else{var u=getIteratorFn(n);if("function"===typeof u){var l=u.call(n);if(l)for(var d=l.next(),p=0;!d.done;d=l.next()){if(!validateSuspenseListNestedChild(d.value,p))return;p++}}else error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',r)}}(p,l),reconcileChildren(n,r,p,i);var f=Du.current;hasSuspenseContext(f,2)?(f=setShallowSuspenseContext(f,2),r.effectTag|=_n):(null!==n&&0!==(n.effectTag&_n)&&
// If we previously forced a fallback, we need to schedule work
// on any nested boundaries to let them know to try to render
// again. This is the same as context updating.
function propagateSuspenseContextChange(n,r,i){for(
// Mark any Suspense boundaries with fallbacks as having work to do.
// If they were previously forced into fallbacks, they may now be able
// to unblock.
var u=r;null!==u;){if(u.tag===_)null!==u.memoizedState&&scheduleWorkOnFiber(u,i);else if(u.tag===O)
// If the tail is hidden there might not be an Suspense boundaries
// to schedule work on. In this case we have to schedule it on the
// list itself.
// We don't have to traverse to the children of the list since
// the list will propagate the change when it rerenders.
scheduleWorkOnFiber(u,i);else if(null!==u.child){u.child.return=u,u=u.child;continue}if(u===n)return;for(;null===u.sibling;){if(null===u.return||u.return===n)return;u=u.return}u.sibling.return=u.return,u=u.sibling}}(r,r.child,i),f=setDefaultShallowSuspenseContext(f));if(pushSuspenseContext(r,f),0===(2&r.mode))
// Outside of blocking mode, SuspenseList doesn't work so we just
// use make it a noop by treating it as the default revealOrder.
r.memoizedState=null;else switch(l){case"forwards":var m,h=function findLastContentRow(n){for(
// This is going to find the last row among these children that is already
// showing content on the screen, as opposed to being in fallback state or
// new. If a row has multiple Suspense boundaries, any of them being in the
// fallback state, counts as the whole row being in a fallback state.
// Note that the "rows" will be workInProgress, but any nested children
// will still be current since we haven't rendered them yet. The mounted
// order may not be the same as the new order. We use the new order.
var r=n,i=null;null!==r;){var u=r.alternate;// New rows can't be content rows.
null!==u&&null===findFirstSuspended(u)&&(i=r),r=r.sibling}return i}(r.child);null===h?(
// The whole list is part of the tail.
// TODO: We could fast path by just rendering the tail now.
m=r.child,r.child=null):(
// Disconnect the tail rows after the content row.
// We're going to render them separately later.
m=h.sibling,h.sibling=null),initSuspenseListRenderState(r,!1,// isBackwards
m,h,d,r.lastEffect);break;case"backwards":
// We're going to find the first row that has existing content.
// At the same time we're going to reverse the list of everything
// we pass in the meantime. That's going to be our tail in reverse
// order.
var v=null,g=r.child;for(r.child=null;null!==g;){var y=g.alternate;// New rows can't be content rows.
if(null!==y&&null===findFirstSuspended(y)){
// This is the beginning of the main content.
r.child=g;break}var b=g.sibling;g.sibling=v,v=g,g=b}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
initSuspenseListRenderState(r,!0,// isBackwards
v,null,// last
d,r.lastEffect);break;case"together":initSuspenseListRenderState(r,!1,// isBackwards
null,// tail
null,// last
void 0,r.lastEffect);break;default:
// The default reveal order is the same as not having
// a boundary.
r.memoizedState=null}return r.child}function updateContextProvider(n,r,i){var u=r.type._context,l=r.pendingProps,p=r.memoizedProps,f=l.value,m=r.type.propTypes;if(m&&d(m,l,"prop","Context.Provider",getCurrentFiberStackInDev),pushProvider(r,f),null!==p){var h=function calculateChangedBits(n,r,i){if(oa(i,r))
// No change
return 0;var u="function"===typeof n._calculateChangedBits?n._calculateChangedBits(i,r):xi;return(u&xi)!==u&&error("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s",u),0|u}(u,f,p.value);if(0===h){
// No change. Bailout early if children are the same.
if(p.children===l.children&&!hasContextChanged())return bailoutOnAlreadyFinishedWork(n,r,i)}else
// The context value changed. Search for matching consumers and schedule
// them to update.
!function propagateContextChange(n,r,i,u){var l=n.child;for(null!==l&&(
// Set the return pointer of the child to the work-in-progress fiber.
l.return=n);null!==l;){var d=void 0,p=l.dependencies;// Visit this fiber.
if(null!==p){d=l.child;for(var f=p.firstContext;null!==f;){
// Check if the context matches.
if(f.context===r&&0!==(f.observedBits&i)){
// Match! Schedule an update on this fiber.
if(1===l.tag){
// Schedule a force update on the work-in-progress.
var m=createUpdate(u,null);m.tag=eu,// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
enqueueUpdate(l,m)}l.expirationTime<u&&(l.expirationTime=u);var h=l.alternate;null!==h&&h.expirationTime<u&&(h.expirationTime=u),scheduleWorkOnParentPath(l.return,u),// Mark the expiration time on the list, too.
p.expirationTime<u&&(p.expirationTime=u);// Since we already found a match, we can stop traversing the
// dependency list.
break}f=f.next}}else
// Don't scan deeper if this is a matching provider
d=l.tag===P&&l.type===n.type?null:l.child;if(null!==d)
// Set the return pointer of the child to the work-in-progress fiber.
d.return=l;else for(
// No child. Traverse to next sibling.
d=l;null!==d;){if(d===n){
// We're back to the root of this subtree. Exit.
d=null;break}var v=d.sibling;if(null!==v){
// Set the return pointer of the sibling to the work-in-progress fiber.
v.return=d.return,d=v;break}// No more siblings. Traverse up.
d=d.return}l=d}}(r,u,h,i)}return reconcileChildren(n,r,l.children,i),r.child}var yl,bl,Cl,kl=!1;function markWorkInProgressReceivedUpdate(){vl=!0}function bailoutOnAlreadyFinishedWork(n,r,i){cancelWorkTimer(r),null!==n&&(
// Reuse previous dependencies
r.dependencies=n.dependencies),
// Don't update "base" render times for bailouts.
stopProfilerTimerIfRunning();var u=r.expirationTime;return 0!==u&&markUnprocessedUpdateTime(u),r.childExpirationTime<i?null:(
// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
function cloneChildFibers(n,r){if(null!==n&&r.child!==n.child)throw Error("Resuming work not yet implemented.");if(null!==r.child){var i=r.child,u=createWorkInProgress(i,i.pendingProps);for(r.child=u,u.return=r;null!==i.sibling;)i=i.sibling,(u=u.sibling=createWorkInProgress(i,i.pendingProps)).return=r;u.sibling=null}}(n,r),r.child)}function beginWork(n,r,i){var u=r.expirationTime;if(r._debugNeedsRemount&&null!==n)
// This will restart the begin phase with a new fiber.
return function remountFiber(n,r,i){var u=r.return;if(null===u)throw new Error("Cannot swap the root fiber.");// Disconnect from the old current.
// It will get deleted.
// Replace the child/sibling pointers above it.
if(n.alternate=null,r.alternate=null,// Connect to the new tree.
i.index=r.index,i.sibling=r.sibling,i.return=r.return,i.ref=r.ref,r===u.child)u.child=i;else{var l=u.child;if(null===l)throw new Error("Expected parent to have a child.");for(;l.sibling!==r;)if(null===(l=l.sibling))throw new Error("Expected to find the previous sibling.");l.sibling=i}// Delete the old fiber and place the new one.
// Since the old fiber is disconnected, we have to schedule it manually.
var d=u.lastEffect;// Restart work from the new fiber.
return null!==d?(d.nextEffect=n,u.lastEffect=n):u.firstEffect=u.lastEffect=n,n.nextEffect=null,n.effectTag=8,i.effectTag|=2,i}(n,r,createFiberFromTypeAndProps(r.type,r.key,r.pendingProps,r._debugOwner||null,r.mode,r.expirationTime));if(null!==n){var l=n.memoizedProps,p=r.pendingProps;if(l!==p||hasContextChanged()||// Force a re-render if the implementation changed due to hot reload:
r.type!==n.type)
// If props or context changed, mark the fiber as having performed work.
// This may be unset if the props are determined to be equal later (memo).
vl=!0;else{if(u<i){// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(vl=!1,r.tag){case 3:pushHostRootContext(r),resetHydrationState();break;case 5:if(pushHostContext(r),4&r.mode&&1!==i&&shouldDeprioritizeSubtree(r.type,p))return markSpawnedWork(1),// Schedule this fiber to re-render at offscreen priority. Then bailout.
r.expirationTime=r.childExpirationTime=1,null;break;case 1:isContextProvider(r.type)&&pushContextProvider(r);break;case 4:pushHostContainer(r,r.stateNode.containerInfo);break;case P:pushProvider(r,r.memoizedProps.value);break;case I:r.childExpirationTime>=i&&(r.effectTag|=4);break;case _:if(null!==r.memoizedState){
// whether to retry the primary children, or to skip over it and
// go straight to the fallback. Check the priority of the primary
// child fragment.
var f=r.child.childExpirationTime;if(0!==f&&f>=i)
// The primary children have pending work. Use the normal path
// to attempt to render the primary children again.
return updateSuspenseComponent(n,r,i);pushSuspenseContext(r,setDefaultShallowSuspenseContext(Du.current));// The primary children do not have pending work with sufficient
// priority. Bailout.
var m=bailoutOnAlreadyFinishedWork(n,r,i);return null!==m?m.sibling:null}pushSuspenseContext(r,setDefaultShallowSuspenseContext(Du.current));break;case O:var h=0!==(n.effectTag&_n),v=r.childExpirationTime>=i;if(h){if(v)
// If something was in fallback state last time, and we have all the
// same children then we're still in progressive loading state.
// Something might get unblocked by state updates or retries in the
// tree which will affect the tail. So we need to use the normal
// path to compute the correct tail.
return updateSuspenseListComponent(n,r,i);// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
r.effectTag|=_n}// If nothing suspended before and we're rendering the same children,
// then the tail doesn't matter. Anything new that suspends will work
// in the "together" mode, so we can continue from the state we had.
var g=r.memoizedState;if(null!==g&&(
// Reset to the "together" mode in case we've started a different
// update in the past but didn't complete it.
g.rendering=null,g.tail=null),pushSuspenseContext(r,Du.current),v)break;
// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
return null}return bailoutOnAlreadyFinishedWork(n,r,i)}
// An update was scheduled on this fiber, but there are no new props
// nor legacy context. Set this to false. If an update queue or context
// consumer produces a changed value, it will set this to true. Otherwise,
// the component will assume the children have not changed and bail out.
vl=!1}}else vl=!1;// Before entering the begin phase, clear pending update priority.
// TODO: This assumes that we're about to evaluate the component and process
// the update queue. However, there's an exception: SimpleMemoComponent
// sometimes bails out later in the begin phase. This indicates that we should
// move this assignment out of the common path and into each branch.
switch(r.expirationTime=0,r.tag){case 2:return function mountIndeterminateComponent(n,r,i,u){null!==n&&(
// An indeterminate component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
n.alternate=null,r.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
r.effectTag|=2);var l,d,p=r.pendingProps;if(l=getMaskedContext(r,getUnmaskedContext(0,i,!1)),prepareToReadContext(r,u),i.prototype&&"function"===typeof i.prototype.render){var f=getComponentName(i)||"Unknown";ul[f]||(error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",f,f),ul[f]=!0)}if(1&r.mode&&Ii.recordLegacyContextWarning(r,null),setIsRendering(!0),hl.current=r,d=renderWithHooks(null,r,i,p,l,u),setIsRendering(!1),// React DevTools reads this flag.
r.effectTag|=1,"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof){var m=getComponentName(i)||"Unknown";ll[m]||(error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",m,m,m),ll[m]=!0),// Proceed under the assumption that this is a class instance
r.tag=1,// Throw out any hooks that were used.
r.memoizedState=null,r.updateQueue=null;// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var h=!1;isContextProvider(i)?(h=!0,pushContextProvider(r)):h=!1,r.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,initializeUpdateQueue(r);var v=i.getDerivedStateFromProps;return"function"===typeof v&&applyDerivedStateFromProps(r,i,v,p),adoptClassInstance(r,d),mountClassInstance(r,i,p,u),finishClassComponent(null,r,i,!0,h,u)}
// Proceed under the assumption that this is a function component
return r.tag=0,1&r.mode&&null!==r.memoizedState&&(d=renderWithHooks(null,r,i,p,l,u)),reconcileChildren(null,r,d,u),validateFunctionComponentInDev(r,i),r.child}(n,r,r.type,i);case 16:return mountLazyComponent(n,r,r.elementType,u,i);case 0:var y=r.type,b=r.pendingProps;return updateFunctionComponent(n,r,y,r.elementType===y?b:resolveDefaultProps(y,b),i);case 1:var C=r.type,k=r.pendingProps;return updateClassComponent(n,r,C,r.elementType===C?k:resolveDefaultProps(C,k),i);case 3:return updateHostRoot(n,r,i);case 5:return function updateHostComponent(n,r,i){pushHostContext(r),null===n&&tryToClaimNextHydratableInstance(r);var u=r.type,l=r.pendingProps,d=null!==n?n.memoizedProps:null,p=l.children;// Check the host config to see if the children are offscreen/hidden.
return shouldSetTextContent(u,l)?
// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also has access to this prop. That
// avoids allocating another HostText fiber and traversing it.
p=null:null!==d&&shouldSetTextContent(u,d)&&(
// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
r.effectTag|=

16),markRef(n,r),4&r.mode&&1!==i&&shouldDeprioritizeSubtree(0,l)?(markSpawnedWork(1),// Schedule this fiber to re-render at offscreen priority. Then bailout.
r.expirationTime=r.childExpirationTime=1,null):(reconcileChildren(n,r,p,i),r.child)}(n,r,i);case 6:return function updateHostText(n,r){// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null===n&&tryToClaimNextHydratableInstance(r),null}(n,r);case _:return updateSuspenseComponent(n,r,i);case 4:return function updatePortalComponent(n,r,i){pushHostContainer(r,r.stateNode.containerInfo);var u=r.pendingProps;return null===n?
// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
r.child=Eu(r,null,u,i):reconcileChildren(n,r,u,i),r.child}(n,r,i);case R:var w=r.type,T=r.pendingProps;return updateForwardRef(n,r,w,r.elementType===w?T:resolveDefaultProps(w,T),i);case 7:return function updateFragment(n,r,i){return reconcileChildren(n,r,r.pendingProps,i),r.child}(n,r,i);case 8:return function updateMode(n,r,i){return reconcileChildren(n,r,r.pendingProps.children,i),r.child}(n,r,i);case I:return function updateProfiler(n,r,i){return r.effectTag|=4,reconcileChildren(n,r,r.pendingProps.children,i),r.child}(n,r,i);case P:return updateContextProvider(n,r,i);case 9:return function updateContextConsumer(n,r,i){var u=r.type;// The logic below for Context differs depending on PROD or DEV mode. In
// DEV mode, we create a separate object for Context.Consumer that acts
// like a proxy to Context. This proxy object adds unnecessary code in PROD
// so we use the old behaviour (Context.Consumer references Context) to
// reduce size and overhead. The separate object references context via
// a property called "_context", which also gives us the ability to check
// in DEV mode if this property exists or not and warn if it does not.
void 0===u._context?
// This may be because it's a Context (rather than a Consumer).
// Or it may be because it's older React where they're the same thing.
// We only want to warn if we're sure it's a new React.
u!==u.Consumer&&(kl||(kl=!0,error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):u=u._context;var l=r.pendingProps,d=l.children;"function"!==typeof d&&error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),prepareToReadContext(r,i);var p,f=_readContext(u,l.unstable_observedBits);return hl.current=r,setIsRendering(!0),p=d(f),setIsRendering(!1),// React DevTools reads this flag.
r.effectTag|=1,reconcileChildren(n,r,p,i),r.child}(n,r,i);case D:var x=r.type,S=resolveDefaultProps(x,r.pendingProps);if(r.type!==r.elementType){var A=x.propTypes;A&&d(A,S,// Resolved for outer only
"prop",getComponentName(x),getCurrentFiberStackInDev)}return updateMemoComponent(n,r,x,S=resolveDefaultProps(x.type,S),u,i);case F:return updateSimpleMemoComponent(n,r,r.type,r.pendingProps,u,i);case N:var H=r.type,W=r.pendingProps;return function mountIncompleteClassComponent(n,r,i,u,l){// The rest of this function is a fork of `updateClassComponent`
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var d;return null!==n&&(
// An incomplete component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
n.alternate=null,r.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
r.effectTag|=2),// Promote the fiber to a class and try rendering again.
r.tag=1,isContextProvider(i)?(d=!0,pushContextProvider(r)):d=!1,prepareToReadContext(r,l),constructClassInstance(r,i,u),mountClassInstance(r,i,u,l),finishClassComponent(null,r,i,!0,d,l)}(n,r,H,r.elementType===H?W:resolveDefaultProps(H,W),i);case O:return updateSuspenseListComponent(n,r,i)}throw Error("Unknown unit of work tag ("+r.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function markUpdate(n){
// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
n.effectTag|=4}function markRef$1(n){n.effectTag|=Dn}function cutOffTailIfNeeded(n,r){switch(n.tailMode){case"hidden":for(
// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var i=n.tail,u=null;null!==i;)null!==i.alternate&&(u=i),i=i.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===u?
// All remaining items in the tail are insertions.
n.tail=null:
// Detach the insertion after the last node that was already
// inserted.
u.sibling=null;break;case"collapsed":for(
// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var l=n.tail,d=null;null!==l;)null!==l.alternate&&(d=l),l=l.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===d?
// All remaining items in the tail are insertions.
r||null===n.tail?n.tail=null:
// We suspended during the head. We want to show at least one
// row at the tail. So we'll keep on and cut off the rest.
n.tail.sibling=null:
// Detach the insertion after the last node that was already
// inserted.
d.sibling=null}}function completeWork(n,r,i){var u=r.pendingProps;switch(r.tag){case 2:case 16:case F:case 0:case R:case 7:case 8:case I:case 9:case D:return null;case 1:return isContextProvider(r.type)&&popContext(r),null;case 3:popHostContainer(r),popTopLevelContextObject(r);var l=r.stateNode;if(l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),null===n||null===n.child)popHydrationState(r)&&
// If we hydrated, then we'll need to schedule an update for
// the commit side-effects on the root.
markUpdate(r);return null;case 5:popHostContext(r);var d=getRootHostContainer(),p=r.type;if(null!==n&&null!=r.stateNode)bl(n,r,p,u,d),n.ref!==r.ref&&markRef$1(r);else{if(!u){if(null===r.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");// This can happen when we abort work.
return null}var f=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on whether we want to add them top->down or
// bottom->up. Top->down is faster in IE11.
if(popHydrationState(r))
// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
(function prepareToHydrateHostInstance(n,r,i){var u=hydrateInstance(n.stateNode,n.type,n.memoizedProps,r,i,n);// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
// TODO: Type this specific to this type of component.
return n.updateQueue=u,null!==u})(r,d,f)&&
// If changes to the hydrated node need to be applied at the
// commit-phase we mark this as such.
markUpdate(r);else{var m=createInstance(p,u,d,f,r);yl(m,r),// This needs to be set before we mount Flare event listeners
r.stateNode=m,// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
function finalizeInitialChildren(n,r,i,u,l){return setInitialProperties(n,r,i,u),shouldAutoFocusHostComponent(r,i)}(m,p,u,d)&&markUpdate(r)}null!==r.ref&&
// If there is a ref on a host node we need to schedule a callback
markRef$1(r)}return null;case 6:var h=u;if(n&&null!=r.stateNode){var v=n.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
Cl(0,r,v,h)}else{if("string"!==typeof h&&null===r.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var g=getRootHostContainer(),y=getHostContext();popHydrationState(r)?prepareToHydrateHostTextInstance(r)&&markUpdate(r):r.stateNode=createTextInstance(h,g,y,r)}return null;case _:popSuspenseContext(r);var b=r.memoizedState;if(0!==(r.effectTag&_n))// Do not reset the effect list.
// Something suspended. Re-render with the fallback children.
return r.expirationTime=i,r;var C=null!==b,k=!1;if(null===n)void 0!==r.memoizedProps.fallback&&popHydrationState(r);else{var w=n.memoizedState;if(k=null!==w,!C&&null!==w){
// We just switched from the fallback to the normal children.
// Delete the fallback.
// TODO: Would it be better to store the fallback fragment on
// the stateNode during the begin phase?
var T=n.child.sibling;if(null!==T){
// Deletions go at the beginning of the return fiber's effect list
var x=r.firstEffect;null!==x?(r.firstEffect=T,T.nextEffect=x):(r.firstEffect=r.lastEffect=T,T.nextEffect=null),T.effectTag=8}}}if(C&&!k)
// If this subtreee is running in blocking mode we can suspend,
// otherwise we won't suspend.
// TODO: This will still suspend a synchronous tree if anything
// in the concurrent tree already suspended during this render.
// This is a known bug.
if(0!==(2&r.mode))null===n&&!0!==r.memoizedProps.unstable_avoidThisFallback||hasSuspenseContext(Du.current,1)?
// If this was in an invisible tree or a new render, then showing
// this boundary is ok.
function renderDidSuspend(){0===Hl&&(Hl=3)}():
// Otherwise, we're going to have to hide content so we should
// suspend for longer if possible.
function renderDidSuspendDelayIfPossible(){0!==Hl&&3!==Hl||(Hl=4);// Check if there's a lower priority update somewhere else in the tree.
0!==jl&&null!==Nl&&(
// Mark the current render as suspended, and then mark that there's a
// pending update.
// TODO: This should immediately interrupt the current render, instead
// of waiting until the next time we yield.
markRootSuspendedAtTime(Nl,Al),markRootUpdatedAtTime(Nl,jl))}();
// TODO: Only schedule updates if these values are non equal, i.e. it changed.
return(C||k)&&(
// If this boundary just timed out, schedule an effect to attach a
// retry listener to the promise. This flag is also used to hide the
// primary children. In mutation mode, we also need the flag to
// *unhide* children that were previously hidden, so check if this
// is currently timed out, too.
r.effectTag|=4),null;case 4:return popHostContainer(r),null;case P:
// Pop provider fiber
return popProvider(r),null;case N:return isContextProvider(r.type)&&popContext(r),null;case O:popSuspenseContext(r);var S=r.memoizedState;if(null===S)
// We're running in the default, "independent" mode.
// We don't do anything in this mode.
return null;var A=0!==(r.effectTag&_n),H=S.rendering;if(null===H){
// We just rendered the head.
if(A)cutOffTailIfNeeded(S,!1);else if(!(// Called during render to determine if anything has suspended.
// Returns false if we're not sure.
function renderHasNotSuspendedYet(){
// If something errored or completed, we can't really be sure,
// so those are false.
return 0===Hl}()&&(null===n||0===(n.effectTag&_n))))for(var W=r.child;null!==W;){var U=findFirstSuspended(W);if(null!==U){A=!0,r.effectTag|=_n,cutOffTailIfNeeded(S,!1);// If this is a newly suspended tree, it might not get committed as
// part of the second pass. In that case nothing will subscribe to
// its thennables. Instead, we'll transfer its thennables to the
// SuspenseList so that it can retry if they resolve.
// There might be multiple of these in the list but since we're
// going to wait for all of them anyway, it doesn't really matter
// which ones gets to ping. In theory we could get clever and keep
// track of how many dependencies remain but it gets tricky because
// in the meantime, we can add/remove/change items and dependencies.
// We might bail out of the loop before finding any but that
// doesn't matter since that means that the other boundaries that
// we did find already has their listeners attached.
var M=U.updateQueue;return null!==M&&(r.updateQueue=M,r.effectTag|=4),// Rerender the whole list, but this time, we'll force fallbacks
// to stay in place.
// Reset the effect list before doing the second pass since that's now invalid.
null===S.lastEffect&&(r.firstEffect=null),r.lastEffect=S.lastEffect,// Reset the child fibers to their original state.
resetChildFibers(r,i),// Set up the Suspense Context to force suspense and immediately
// rerender the children.
pushSuspenseContext(r,setShallowSuspenseContext(Du.current,2)),r.child}W=W.sibling}// Next we're going to render the tail.
}else{
// Append the rendered row to the child list.
if(!A){var L=findFirstSuspended(H);if(null!==L){r.effectTag|=_n,A=!0;// Ensure we transfer the update queue to the parent so that it doesn't
// get lost if this row ends up dropped during a second pass.
var j=L.updateQueue;// This might have been modified.
if(null!==j&&(r.updateQueue=j,r.effectTag|=4),cutOffTailIfNeeded(S,!0),null===S.tail&&"hidden"===S.tailMode&&!H.alternate){
// We need to delete the row we just rendered.
// Reset the effect list to what it was before we rendered this
// child. The nested children have already appended themselves.
var z=r.lastEffect=S.lastEffect;// Remove any effects that were appended after this point.
// We're done.
return null!==z&&(z.nextEffect=null),null}}else if(// The time it took to render last row is greater than time until
// the expiration.
2*Ti()-S.renderingStartTime>S.tailExpiration&&i>1){
// We have now passed our CPU deadline and we'll just give up further
// attempts to render the main content and only render fallbacks.
// The assumption is that this is usually faster.
r.effectTag|=_n,A=!0,cutOffTailIfNeeded(S,!1);// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. If we can show
// them, then they really have the same priority as this render.
// So we'll pick it back up the very next render pass once we've had
// an opportunity to yield for paint.
var V=i-1;r.expirationTime=r.childExpirationTime=V,markSpawnedWork(V)}}if(S.isBackwards)
// The effect list of the backwards tail will have been added
// to the end. This breaks the guarantee that life-cycles fire in
// sibling order but that isn't a strong guarantee promised by React.
// Especially since these might also just pop in during future commits.
// Append to the beginning of the list.
H.sibling=r.child,r.child=H;else{var B=S.last;null!==B?B.sibling=H:r.child=H,S.last=H}}if(null!==S.tail){
// We still have tail rows to render.
if(0===S.tailExpiration){S.tailExpiration=Ti()+500}// Pop a row.
var $=S.tail;S.rendering=$,S.tail=$.sibling,S.lastEffect=r.lastEffect,S.renderingStartTime=Ti(),$.sibling=null;// Restore the context.
// TODO: We can probably just avoid popping it instead and only
// setting it the first time we go from not suspended to suspended.
var q=Du.current;// Do a pass over the next row.
return pushSuspenseContext(r,q=A?setShallowSuspenseContext(q,2):setDefaultShallowSuspenseContext(q)),$}return null}throw Error("Unknown unit of work tag ("+r.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function unwindWork(n,r){switch(n.tag){case 1:isContextProvider(n.type)&&popContext(n);var i=n.effectTag;return i&Hn?(n.effectTag=-4097&i|_n,n):null;case 3:popHostContainer(n),popTopLevelContextObject(n);var u=n.effectTag;if(0!==(u&_n))throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");return n.effectTag=-4097&u|_n,n;case 5:
// TODO: popHydrationState
return popHostContext(n),null;case _:popSuspenseContext(n);var l=n.effectTag;return l&Hn?(n.effectTag=-4097&l|_n,n):null;case O:// SuspenseList doesn't actually catch anything. It should've been
// caught by a nested boundary. If not, it should bubble through.
return popSuspenseContext(n),null;case 4:return popHostContainer(n),null;case P:return popProvider(n),null;default:return null}}function unwindInterruptedWork(n){switch(n.tag){case 1:var r=n.type.childContextTypes;null!==r&&void 0!==r&&popContext(n);break;case 3:popHostContainer(n),popTopLevelContextObject(n);break;case 5:popHostContext(n);break;case 4:popHostContainer(n);break;case _:case O:popSuspenseContext(n);break;case P:popProvider(n)}}function createCapturedValue(n,r){
// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:n,source:r,stack:getStackByFiberInDevAndProd(r)}}
// Mutation mode
yl=function appendAllChildren(n,r,i,u){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var l,d,p=r.child;null!==p;){if(5===p.tag||6===p.tag)l=n,d=p.stateNode,l.appendChild(d);else if(4===p.tag);else if(null!==p.child){p.child.return=p,p=p.child;continue}if(p===r)return;for(;null===p.sibling;){if(null===p.return||p.return===r)return;p=p.return}p.sibling.return=p.return,p=p.sibling}},bl=function updateHostComponent$1(n,r,i,u,l){
// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var d=n.memoizedProps;if(d!==u){// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var p=function prepareUpdate(n,r,i,u,l,d){var p=d;if(typeof u.children!==typeof i.children&&("string"===typeof u.children||"number"===typeof u.children)){var f=""+u.children,m=lo(p.ancestorInfo,r);uo(null,f,m)}return diffProperties(n,r,i,u,l)}(r.stateNode,i,d,u,l,getHostContext());// TODO: Type this specific to this type of component.
r.updateQueue=p,// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
p&&markUpdate(r)}},Cl=function updateHostText$1(n,r,i,u){
// If the text differs, mark it as an update. All the work in done in commitWork.
i!==u&&markUpdate(r)};var wl;wl=new Set;var Tl="function"===typeof WeakSet?WeakSet:Set;function logError(n,r){var i=r.source,u=r.stack;null===u&&null!==i&&(u=getStackByFiberInDevAndProd(i));var l={componentName:null!==i?getComponentName(i.type):null,componentStack:null!==u?u:"",error:r.value,errorBoundary:null,errorBoundaryName:null,errorBoundaryFound:!1,willRetry:!1};null!==n&&1===n.tag&&(l.errorBoundary=n.stateNode,l.errorBoundaryName=getComponentName(n.type),l.errorBoundaryFound=!0,l.willRetry=!0);try{!function logCapturedError(n){var r=n.error,i=n.componentName,u=n.componentStack,l=n.errorBoundaryName,d=n.errorBoundaryFound,p=n.willRetry;// Browsers support silencing uncaught errors by calling
// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(null!=r&&r._suppressLogging){if(d&&p)
// The error is recoverable and was silenced.
// Ignore it and don't print the stack addendum.
// This is handy for testing error boundaries without noise.
return;// The error is fatal. Since the silencing might have
// been accidental, we'll surface it anyway.
// However, the browser would have silenced the original error
// so we'll print it first, and then print the stack addendum.
console.error(r)}var f=(i?"The above error occurred in the <"+i+"> component:":"The above error occurred in one of your React components:")+u+"\n\n"+(// errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
d&&l?p?"React will try to recreate this component tree from scratch using the error boundary you provided, "+l+".":"This error was initially handled by the error boundary "+l+".\nRecreating the tree from scratch failed so React will unmount the tree.":"Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://fb.me/react-error-boundaries to learn more about error boundaries.");// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(f)}(l)}catch(d){
// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout((function(){throw d}))}}var xl=function callComponentWillUnmountWithTimer(n,r){startPhaseTimer(n,"componentWillUnmount"),r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount(),stopPhaseTimer()};// Capture errors so they don't interrupt unmounting.
function safelyDetachRef(n){var r=n.ref;null!==r&&("function"===typeof r?(invokeGuardedCallback(null,r,null,null),hasCaughtError()&&captureCommitPhaseError(n,clearCaughtError())):r.current=null)}function safelyCallDestroy(n,r){(invokeGuardedCallback(null,r,null),hasCaughtError())&&captureCommitPhaseError(n,clearCaughtError())}function commitBeforeMutationLifeCycles(n,r){switch(r.tag){case 0:case R:case F:case A:return;case 1:if(r.effectTag&Fn&&null!==n){var i=n.memoizedProps,u=n.memoizedState;startPhaseTimer(r,"getSnapshotBeforeUpdate");var l=r.stateNode;// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
r.type!==r.elementType||pl||(l.props!==r.memoizedProps&&error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(r.type)||"instance"),l.state!==r.memoizedState&&error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(r.type)||"instance"));var d=l.getSnapshotBeforeUpdate(r.elementType===r.type?i:resolveDefaultProps(r.type,i),u),p=wl;void 0!==d||p.has(r.type)||(p.add(r.type),error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",getComponentName(r.type))),l.__reactInternalSnapshotBeforeUpdate=d,stopPhaseTimer()}return;case 3:case 5:case 6:case 4:case N:
// Nothing to do for these component types
return}throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}function commitHookEffectListUnmount(n,r){var i=r.updateQueue,u=null!==i?i.lastEffect:null;if(null!==u){var l=u.next,d=l;do{if((d.tag&n)===n){
// Unmount
var p=d.destroy;d.destroy=void 0,void 0!==p&&p()}d=d.next}while(d!==l)}}function commitHookEffectListMount(n,r){var i=r.updateQueue,u=null!==i?i.lastEffect:null;if(null!==u){var l=u.next,d=l;do{if((d.tag&n)===n){
// Mount
var p=d.create;d.destroy=p();var f=d.destroy;if(void 0!==f&&"function"!==typeof f){error("An effect function must not return anything besides a function, which is used for clean-up.%s%s",null===f?" You returned null. If your effect does not require clean up, return undefined (or nothing).":"function"===typeof f.then?"\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching":" You returned: "+f,getStackByFiberInDevAndProd(r))}}d=d.next}while(d!==l)}}function commitPassiveHookEffects(n){if(0!==(n.effectTag&Nn))switch(n.tag){case 0:case R:case F:case A:
// TODO (#17945) We should call all passive destroy functions (for all fibers)
// before calling any create functions. The current approach only serializes
// these for a single fiber.
commitHookEffectListUnmount(5,n),commitHookEffectListMount(5,n)}}function commitLifeCycles(n,r,i,u){switch(i.tag){case 0:case R:case F:case A:
// At this point layout effects have already been destroyed (during mutation phase).
// This is done to prevent sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
return void commitHookEffectListMount(3,i);case 1:var l=i.stateNode;if(4&i.effectTag)if(null===r)startPhaseTimer(i,"componentDidMount"),i.type!==i.elementType||pl||(l.props!==i.memoizedProps&&error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(i.type)||"instance"),l.state!==i.memoizedState&&error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(i.type)||"instance")),l.componentDidMount(),stopPhaseTimer();else{var d=i.elementType===i.type?r.memoizedProps:resolveDefaultProps(i.type,r.memoizedProps),p=r.memoizedState;startPhaseTimer(i,"componentDidUpdate"),i.type!==i.elementType||pl||(l.props!==i.memoizedProps&&error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(i.type)||"instance"),l.state!==i.memoizedState&&error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(i.type)||"instance")),l.componentDidUpdate(d,p,l.__reactInternalSnapshotBeforeUpdate),stopPhaseTimer()}var f=i.updateQueue;return void(null!==f&&(i.type!==i.elementType||pl||(l.props!==i.memoizedProps&&error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(i.type)||"instance"),l.state!==i.memoizedState&&error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(i.type)||"instance")),// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
commitUpdateQueue(0,f,l)));case 3:var m=i.updateQueue;if(null!==m){var h=null;if(null!==i.child)switch(i.child.tag){case 5:case 1:h=i.child.stateNode}commitUpdateQueue(0,m,h)}return;case 5:var v=i.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(null===r&&4&i.effectTag)!// -------------------
function commitMount(n,r,i,u){
// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
shouldAutoFocusHostComponent(r,i)&&n.focus()}(v,i.type,i.memoizedProps);return;case 6:case 4:
// We have no life-cycles associated with portals.
return;case I:var g=i.memoizedProps.onRender;return void("function"===typeof g&&g(i.memoizedProps.id,null===r?"mount":"update",i.actualDuration,i.treeBaseDuration,i.actualStartTime,function getCommitTime(){return nl}(),n.memoizedInteractions));case _:return void function commitSuspenseHydrationCallbacks(n,r){if(null===r.memoizedState){var i=r.alternate;if(null!==i){var u=i.memoizedState;if(null!==u){var l=u.dehydrated;null!==l&&function commitHydratedSuspenseInstance(n){
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(n)}(l)}}}}(0,i);case O:case N:case 20:case 21:return}throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}function commitAttachRef(n){var r=n.ref;if(null!==r){var i,u=n.stateNode;n.tag,i=u,// Moved outside to ensure DCE works with this flag
"function"===typeof r?r(i):(r.hasOwnProperty("current")||error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s",getComponentName(n.type),getStackByFiberInDevAndProd(n)),r.current=i)}}function commitDetachRef(n){var r=n.ref;null!==r&&("function"===typeof r?r(null):r.current=null)}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(n,r,i){switch(function onCommitUnmount(n){"function"===typeof ys&&ys(n)}(r),r.tag){case 0:case R:case D:case F:case A:var u=r.updateQueue;if(null!==u){var l=u.lastEffect;if(null!==l){var d=l.next;runWithPriority$1(i>hi?hi:i,(function(){var n=d;do{var i=n.destroy;void 0!==i&&safelyCallDestroy(r,i),n=n.next}while(n!==d)}))}}return;case 1:safelyDetachRef(r);var p=r.stateNode;return void("function"===typeof p.componentWillUnmount&&function safelyCallComponentWillUnmount(n,r){invokeGuardedCallback(null,xl,null,n,r),hasCaughtError()&&captureCommitPhaseError(n,clearCaughtError())}(r,p));case 5:return void safelyDetachRef(r);case 4:return void unmountHostComponents(n,r,i);case 20:case 18:case 21:return}}function commitNestedUnmounts(n,r,i){for(
// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
// we do an inner loop while we're still inside the host node.
var u=r;;)// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(commitUnmount(n,u,i),null===u.child||// If we use mutation we drill down into portals using commitUnmount above.
// If we don't use mutation we drill down into portals here instead.
4===u.tag){if(u===r)return;for(;null===u.sibling;){if(null===u.return||u.return===r)return;u=u.return}u.sibling.return=u.return,u=u.sibling}else u.child.return=u,u=u.child}function detachFiber(n){var r=n.alternate;// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
n.return=null,n.child=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.alternate=null,n.firstEffect=null,n.lastEffect=null,n.pendingProps=null,n.memoizedProps=null,n.stateNode=null,null!==r&&detachFiber(r)}function isHostParent(n){return 5===n.tag||3===n.tag||4===n.tag}function commitPlacement(n){var r,i,u=function getHostParentFiber(n){for(var r=n.return;null!==r;){if(isHostParent(r))return r;r=r.return}throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}(n),l=u.stateNode;// Note: these two variables *must* always be updated together.
switch(u.tag){case 5:r=l,i=!1;break;case 3:case 4:r=l.containerInfo,i=!0;break;// eslint-disable-next-line-no-fallthrough
default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}16&u.effectTag&&(
// Reset the text content of the parent before doing any insertions
resetTextContent(r),// Clear ContentReset from the effect tag
u.effectTag&=-17);var d=function getHostSibling(n){
// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
// TODO: Find a more efficient way to do this.
var r=n;e:for(;;){
// If we didn't find anything, let's try the next sibling.
for(;null===r.sibling;){if(null===r.return||isHostParent(r.return))
// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;5!==r.tag&&6!==r.tag&&18!==r.tag;){
// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(2&r.effectTag)
// If we don't have a child, try the siblings instead.
continue e;// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(null===r.child||4===r.tag)continue e;r.child.return=r,r=r.child}// Check if this host node is stable or about to be placed.
if(!(2&r.effectTag))
// Found it!
return r.stateNode}}(n);// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
i?insertOrAppendPlacementNodeIntoContainer(n,d,r):insertOrAppendPlacementNode(n,d,r)}function insertOrAppendPlacementNodeIntoContainer(n,r,i){var u=n.tag,l=5===u||6===u;if(l){var d=l?n.stateNode:n.stateNode.instance;r?function insertInContainerBefore(n,r,i){8===n.nodeType?n.parentNode.insertBefore(r,i):n.insertBefore(r,i)}(i,d,r):function appendChildToContainer(n,r){var i;8===n.nodeType?(i=n.parentNode).insertBefore(r,n):(i=n).appendChild(r);// This container might be used for a portal.
// If something inside a portal is clicked, that click should bubble
// through the React tree. However, on Mobile Safari the click would
// never bubble through the *DOM* tree unless an ancestor with onclick
// event exists. So we wouldn't see it and dispatch it.
// This is why we ensure that non React root containers have inline onclick
// defined.
// https://github.com/facebook/react/issues/11918
var u=n._reactRootContainer;null!==u&&void 0!==u||null!==i.onclick||
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(i)}(i,d)}else if(4===u);else{var p=n.child;if(null!==p){insertOrAppendPlacementNodeIntoContainer(p,r,i);for(var f=p.sibling;null!==f;)insertOrAppendPlacementNodeIntoContainer(f,r,i),f=f.sibling}}}function insertOrAppendPlacementNode(n,r,i){var u=n.tag,l=5===u||6===u;if(l){var d=l?n.stateNode:n.stateNode.instance;r?function insertBefore(n,r,i){n.insertBefore(r,i)}(i,d,r):function appendChild(n,r){n.appendChild(r)}(i,d)}else if(4===u);else{var p=n.child;if(null!==p){insertOrAppendPlacementNode(p,r,i);for(var f=p.sibling;null!==f;)insertOrAppendPlacementNode(f,r,i),f=f.sibling}}}function unmountHostComponents(n,r,i){for(
// We only have the top Fiber that was deleted but we need to recurse down its
// children to find all the terminal nodes.
var u,l,d,p,f=r,m=!1// Each iteration, currentParent is populated with node's host parent if not
// currentParentIsValid.
;;){if(!m){var h=f.return;e:for(;;){if(null===h)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");var v=h.stateNode;switch(h.tag){case 5:u=v,l=!1;break e;case 3:case 4:u=v.containerInfo,l=!0;break e}h=h.return}m=!0}if(5===f.tag||6===f.tag)commitNestedUnmounts(n,f,i),// After all the children have unmounted, it is now safe to remove the
// node from the tree.
l?(d=u,p=f.stateNode,8===d.nodeType?d.parentNode.removeChild(p):d.removeChild(p)):removeChild(u,f.stateNode);else if(4===f.tag){if(null!==f.child){
// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
u=f.stateNode.containerInfo,l=!0,// Visit children because portals might contain host components.
f.child.return=f,f=f.child;continue}}else// Visit children because we may find more host components below.
if(commitUnmount(n,f,i),null!==f.child){f.child.return=f,f=f.child;continue}if(f===r)return;for(;null===f.sibling;){if(null===f.return||f.return===r)return;4===(f=f.return).tag&&(
// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
m=!1)}f.sibling.return=f.return,f=f.sibling}}function commitDeletion(n,r,i){
// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
unmountHostComponents(n,r,i),detachFiber(r)}function commitWork(n,r){switch(r.tag){case 0:case R:case D:case F:case A:
// Layout effects are destroyed during the mutation phase so that all
// destroy functions for all fibers are called before any create functions.
// This prevents sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
return void commitHookEffectListUnmount(3,r);case 1:return;case 5:var i=r.stateNode;if(null!=i){
// Commit the work prepared earlier.
var u=r.memoizedProps,l=null!==n?n.memoizedProps:u,d=r.type,p=r.updateQueue;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
r.updateQueue=null,null!==p&&function commitUpdate(n,r,i,u,l,d){
// Update the props handle so that we know which props are the ones with
// with current event handlers.
updateFiberProps(n,l),// Apply the diff to the DOM node.
updateProperties(n,r,i,u,l)}(i,p,d,l,u)}return;case 6:if(null===r.stateNode)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var f=r.stateNode,m=r.memoizedProps;null!==n&&n.memoizedProps;return void function commitTextUpdate(n,r,i){n.nodeValue=i}(f,0,m);case 3:var h=r.stateNode;return void(h.hydrate&&(
// We've just hydrated. No need to hydrate again.
h.hydrate=!1,function commitHydratedContainer(n){
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(n)}(h.containerInfo)));case I:return;case _:return function commitSuspenseComponent(n){var r,i=n.memoizedState,u=n;null===i?r=!1:(r=!0,u=n.child,function markCommitTimeOfFallback(){Vl=Ti()}());null!==u&&function hideOrUnhideAllChildren(n,r){for(
// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
var i=n;;){if(5===i.tag){var u=i.stateNode;r?hideInstance(u):unhideInstance(i.stateNode,i.memoizedProps)}else if(6===i.tag){var l=i.stateNode;r?l.nodeValue="":unhideTextInstance(l,i.memoizedProps)}else{if(i.tag===_&&null!==i.memoizedState&&null===i.memoizedState.dehydrated){
// Found a nested Suspense component that timed out. Skip over the
// primary child fragment, which should remain hidden.
var d=i.child.sibling;d.return=i,i=d;continue}if(null!==i.child){i.child.return=i,i=i.child;continue}}if(i===n)return;for(;null===i.sibling;){if(null===i.return||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}}(u,r)}(r),void attachSuspenseRetryListeners(r);case O:return void attachSuspenseRetryListeners(r);case N:return}throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}function attachSuspenseRetryListeners(n){
// If this boundary just timed out, then it will have a set of thenables.
// For each thenable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var r=n.updateQueue;if(null!==r){n.updateQueue=null;var i=n.stateNode;null===i&&(i=n.stateNode=new Tl),r.forEach((function(r){
// Memoize using the boundary fiber to prevent redundant listeners.
var u=resolveRetryThenable.bind(null,n,r);i.has(r)||(!0!==r.__reactDoNotTraceInteractions&&(u=p.unstable_wrap(u)),i.add(r),r.then(u,u))}))}}function commitResetTextContent(n){resetTextContent(n.stateNode)}var El="function"===typeof WeakMap?WeakMap:Map;function createRootErrorUpdate(n,r,i){var u=createUpdate(i,null);// Unmount the root by rendering null.
u.tag=3,// Caution: React DevTools currently depends on this property
// being called "element".
u.payload={element:null};var l=r.value;return u.callback=function(){us(l),logError(n,r)},u}function createClassErrorUpdate(n,r,i){var u=createUpdate(i,null);u.tag=3;var l=n.type.getDerivedStateFromError;if("function"===typeof l){var d=r.value;u.payload=function(){return logError(n,r),l(d)}}var p=n.stateNode;return null!==p&&"function"===typeof p.componentDidCatch?u.callback=function callback(){markFailedErrorBoundaryForHotReloading(n),"function"!==typeof l&&(
// To preserve the preexisting retry behavior of error boundaries,
// we keep track of which ones already failed during this batch.
// This gets reset before we yield back to the browser.
// TODO: Warn in strict mode if getDerivedStateFromError is
// not defined.
!function markLegacyErrorBoundaryAsFailed(n){null===Ql?Ql=new Set([n]):Ql.add(n)}(this),// Only log here if componentDidCatch is the only error boundary method defined
logError(n,r));var i=r.value,u=r.stack;this.componentDidCatch(i,{componentStack:null!==u?u:""}),"function"!==typeof l&&n.expirationTime!==Ei&&error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",getComponentName(n.type)||"Unknown")}:u.callback=function(){markFailedErrorBoundaryForHotReloading(n)},u}function attachPingListener(n,r,i){
// Attach a listener to the promise to "ping" the root and retry. But
// only if one does not already exist for the current render expiration
// time (which acts like a "thread ID" here).
var u,l=n.pingCache;if(null===l?(l=n.pingCache=new El,u=new Set,l.set(i,u)):void 0===(u=l.get(i))&&(u=new Set,l.set(i,u)),!u.has(r)){
// Memoize using the thread ID to prevent redundant listeners.
u.add(r);var d=pingSuspendedRoot.bind(null,n,i,r);i.then(d,d)}}function throwException(n,r,i,u,l){if(
// The source fiber did not complete.
i.effectTag|=An,// Its effect list is no longer valid.
i.firstEffect=i.lastEffect=null,null!==u&&"object"===typeof u&&"function"===typeof u.then){
// This is a thenable.
var d=u;if(0===(2&i.mode)){
// Reset the memoizedState to what it was before we attempted
// to render it.
var p=i.alternate;p?(i.updateQueue=p.updateQueue,i.memoizedState=p.memoizedState,i.expirationTime=p.expirationTime):(i.updateQueue=null,i.memoizedState=null)}var f=hasSuspenseContext(Du.current,1),m=r;// Schedule the nearest Suspense to re-render the timed out view.
do{if(m.tag===_&&shouldCaptureSuspense(m,f)){
// Found the nearest boundary.
// Stash the promise on the boundary fiber. If the boundary times out, we'll
// attach another listener to flip the boundary back to its normal state.
var h=m.updateQueue;if(null===h){var v=new Set;v.add(d),m.updateQueue=v}else h.add(d);// If the boundary is outside of blocking mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. In the commit phase, we'll schedule a
// subsequent synchronous update to re-render the Suspense.

// Note: It doesn't matter whether the component that suspended was
// inside a blocking mode tree. If the Suspense is outside of it, we
// should *not* suspend the commit.
if(0===(2&m.mode)){if(m.effectTag|=_n,// We're going to commit this fiber even though it didn't complete.
// But we shouldn't call any lifecycle methods or callbacks. Remove
// all lifecycle effect tags.
i.effectTag&=-2981,1===i.tag)if(null===i.alternate)
// This is a new mount. Change the tag so it's not mistaken for a
// completed class component. For example, we should not call
// componentWillUnmount if it is deleted.
i.tag=N;else{
// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force update to
// prevent a bail out.
var g=createUpdate(Ei,null);g.tag=eu,enqueueUpdate(i,g)}// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
// Exit without suspending.
return void(i.expirationTime=Ei)}// Confirmed that the boundary is in a concurrent mode tree. Continue
// with the normal suspend path.

// After this we'll use a set of heuristics to determine whether this
// render pass will run to completion or restart or "suspend" the commit.
// The actual logic for this is spread out in different places.

// This first principle is that if we're going to suspend when we complete
// a root, then we should also restart if we get an update or ping that
// might unsuspend it, and vice versa. The only reason to suspend is
// because you think you might want to restart before committing. However,
// it doesn't make sense to restart only while in the period we're suspended.

// Restarting too aggressively is also not good because it starves out any
// intermediate loading state. So we use heuristics to determine when.
// Suspense Heuristics

// If nothing threw a Promise or all the same fallbacks are already showing,
// then don't suspend/restart.

// If this is an initial render of a new tree of Suspense boundaries and
// those trigger a fallback, then don't suspend/restart. We want to ensure
// that we can show the initial loading state as quickly as possible.

// If we hit a "Delayed" case, such as when we'd switch from content back into
// a fallback, then we should always suspend/restart. SuspenseConfig applies to
// this case. If none is defined, JND is used instead.

// If we're already showing a fallback and it gets "retried", allowing us to show
// another level, but there's still an inner boundary that would show a fallback,
// then we suspend/restart for 500ms since the last time we showed a fallback
// anywhere in the tree. This effectively throttles progressive loading into a
// consistent train of commits. This also gives us an opportunity to restart to
// get to the completed state slightly earlier.

// If there's ambiguity due to batching it's resolved in preference of:
// 1) "delayed", 2) "initial render", 3) "retry".

// We want to ensure that a "busy" state doesn't get force committed. We want to
// ensure that new initial loading states can commit as soon as possible.
return attachPingListener(n,l,d),m.effectTag|=Hn,void(m.expirationTime=l)}// This boundary already captured during this render. Continue to the next
// boundary.
m=m.return}while(null!==m);// No boundary was found. Fallthrough to error mode.
// TODO: Use invariant so the message is stripped in prod?
u=new Error((getComponentName(i.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+getStackByFiberInDevAndProd(i))}// We didn't find a boundary that could handle this type of exception. Start
// over and traverse parent path again, this time treating the exception
// as an error.
!function renderDidError(){5!==Hl&&(Hl=2)}(),u=createCapturedValue(u,i);var y=r;do{switch(y.tag){case 3:var b=u;return y.effectTag|=Hn,y.expirationTime=l,void enqueueCapturedUpdate(y,createRootErrorUpdate(y,b,l));case 1:
// Capture and retry
var C=u,k=y.type,w=y.stateNode;if(0===(y.effectTag&_n)&&("function"===typeof k.getDerivedStateFromError||null!==w&&"function"===typeof w.componentDidCatch&&!isAlreadyFailedLegacyErrorBoundary(w)))return y.effectTag|=Hn,y.expirationTime=l,void enqueueCapturedUpdate(y,createClassErrorUpdate(y,C,l))}y=y.return}while(null!==y)}var Sl=Math.ceil,Pl=f.ReactCurrentDispatcher,Rl=f.ReactCurrentOwner,Il=f.IsSomeRendererActing,_l=

16,Dl=

32,Fl=

0,Nl=null,Ol=null,Al=0,Hl=0,Wl=null,Ul=Ei,Ml=Ei,Ll=null,jl=0,zl=!1,Vl=0,Bl=null,$l=!1,ql=null,Ql=null,Kl=!1,Yl=null,Gl=vi,Xl=0,Jl=null,Zl=0,es=null,ts=0,ns=null,rs=null,os=0;function requestCurrentTimeForUpdate(){return 0!==(48&Fl)?msToExpirationTime(Ti()):// We're not inside React, so we may be in the middle of a browser event.
0!==os?os:// This is the first update since React yielded. Compute a new start time.
os=msToExpirationTime(Ti())}function computeExpirationForFiber(n,r,i){var u=r.mode;if(0===(2&u))return Ei;var l,d=getCurrentPriorityLevel();if(0===(4&u))return d===fi?Ei:Si;if(0!==(Fl&_l))
// Use whatever time we're already rendering
// TODO: Should there be a way to opt out, like with `runWithPriority`?
return Al;if(null!==i)
// Compute an expiration time based on the Suspense timeout.
l=function computeSuspenseExpiration(n,r){
// TODO: Should we warn if timeoutMs is lower than the normal pri expiration time?
return computeExpirationBucket(n,r,250)}// We intentionally set a higher expiration time for interactive updates in
// dev than in production.

// If the main thread is being blocked so long that you hit the expiration,
// it's a problem that could be solved with better scheduling.

// People will be more likely to notice this and fix it with the long
// expiration time in development.

// In production we opt for better UX at the risk of masking scheduling
// problems, by expiring fast.
(n,0|i.timeoutMs||Ri);else
// Compute an expiration time based on the Scheduler priority.
switch(d){case fi:l=Ei;break;case mi:
// TODO: Rename this to computeUserBlockingExpiration
l=computeInteractiveExpiration(n);break;case hi:case 96:
// TODO: Handle LowPriority
// TODO: Rename this to... something better.
l=function computeAsyncExpiration(n){return computeExpirationBucket(n,Ri,250)}(n);break;case 95:l=2;break;default:throw Error("Expected a valid priority level")}// If we're in the middle of rendering a tree, do not update at the same
// expiration time that is already rendering.
// TODO: We shouldn't have to do this if the update is on a different root.
// Refactor computeExpirationForFiber + scheduleUpdate so we have access to
// the root when we check for this condition.
return null!==Nl&&l===Al&&(
// This is a trick to move this update into a separate batch
l-=1),l}var as=function scheduleUpdateOnFiber(n,r){!function checkForNestedUpdates(){if(Zl>50)throw Zl=0,es=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");ts>50&&(ts=0,error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}(),function warnAboutRenderPhaseUpdatesInDEV(n){if(_e&&0!==(Fl&_l))switch(n.tag){case 0:case R:case F:var r=Ol&&getComponentName(Ol.type)||"Unknown",i=r;// Dedupe by the rendering component because it's the one that needs to be fixed.
if(!cs.has(i))cs.add(i),error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://fb.me/setstate-in-render",getComponentName(n.type)||"Unknown",r,r);break;case 1:ds||(error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),ds=!0)}}// a 'shared' variable that changes when act() opens/closes in tests.
(n);var i=markUpdateTimeFromFiberToRoot(n,r);if(null!==i){!function checkForInterruption(n,r){null!==Nl&&r>Al&&(ns=n)}(n,r),function recordScheduleUpdate(){Ia&&(_a=!0),null!==Pa&&"componentWillMount"!==Pa&&"componentWillReceiveProps"!==Pa&&(Da=!0)}();// TODO: computeExpirationForFiber also reads the priority. Pass the
// priority as an argument to that function and this one.
var u=getCurrentPriorityLevel();if(r===Ei?// Check if we're inside unbatchedUpdates
0!==(

8&Fl)&&// Check if we're not already rendering
0===(48&Fl)?(
// Register pending interactions on the root to avoid losing traced interaction data.
schedulePendingInteractions(i,r),// This is a legacy edge case. The initial mount of a ReactDOM.render-ed
// root inside of batchedUpdates should be synchronous, but layout updates
// should be deferred until the end of the batch.
performSyncWorkOnRoot(i)):(ensureRootIsScheduled(i),schedulePendingInteractions(i,r),0===Fl&&
// Flush the synchronous work now, unless we're already working or inside
// a batch. This is intentionally inside scheduleUpdateOnFiber instead of
// scheduleCallbackForFiber to preserve the ability to schedule a callback
// without immediately flushing it. We only do this for user-initiated
// updates, to preserve historical behavior of legacy mode.
flushSyncCallbackQueue()):(ensureRootIsScheduled(i),schedulePendingInteractions(i,r)),0!==(

4&Fl)&&(// Only updates at user-blocking priority or greater are considered
// discrete, even inside a discrete event.
u===mi||u===fi))
// This is the result of a discrete event. Track the lowest priority
// discrete update per root so we can flush them early, if needed.
if(null===Jl)Jl=new Map([[i,r]]);else{var l=Jl.get(i);(void 0===l||l>r)&&Jl.set(i,r)}}else(function warnAboutUpdateOnUnmountedFiberInDEV(n){var r=n.tag;if(3!==r&&1!==r&&0!==r&&r!==R&&r!==D&&r!==F&&r!==A)
// Only warn for user-defined components, not internal ones like Suspense.
return;// the problematic code almost always lies inside that component.
var i=getComponentName(n.type)||"ReactComponent";if(null!==ss){if(ss.has(i))return;ss.add(i)}else ss=new Set([i]);error("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s",1===r?"the componentWillUnmount method":"a useEffect cleanup function",getStackByFiberInDevAndProd(n))})(n)};// This is split into a separate function so we can mark a fiber with pending
// work without treating it as a typical update that originates from an event;
// e.g. retrying a Suspense boundary isn't an update, but it does schedule work
// on a fiber.
function markUpdateTimeFromFiberToRoot(n,r){
// Update the source fiber's expiration time
n.expirationTime<r&&(n.expirationTime=r);var i=n.alternate;null!==i&&i.expirationTime<r&&(i.expirationTime=r);// Walk the parent path to the root and update the child expiration time.
var u=n.return,l=null;if(null===u&&3===n.tag)l=n.stateNode;else for(;null!==u;){if(i=u.alternate,u.childExpirationTime<r?(u.childExpirationTime=r,null!==i&&i.childExpirationTime<r&&(i.childExpirationTime=r)):null!==i&&i.childExpirationTime<r&&(i.childExpirationTime=r),null===u.return&&3===u.tag){l=u.stateNode;break}u=u.return}return null!==l&&(Nl===l&&(
// Received an update to a tree that's in the middle of rendering. Mark
// that's unprocessed work on this root.
markUnprocessedUpdateTime(r),4===Hl&&
// The root already suspended with a delay, which means this render
// definitely won't finish. Since we have a new update, let's mark it as
// suspended now, right before marking the incoming update. This has the
// effect of interrupting the current render and switching to the update.
// TODO: This happens to work when receiving an update during the render
// phase, because of the trick inside computeExpirationForFiber to
// subtract 1 from `renderExpirationTime` to move it into a
// separate bucket. But we should probably model it with an exception,
// using the same mechanism we use to force hydration of a subtree.
// TODO: This does not account for low pri updates that were already
// scheduled before the root started rendering. Need to track the next
// pending expiration time (perhaps by backtracking the return path) and
// then trigger a restart in the `renderDidSuspendDelayIfPossible` path.
markRootSuspendedAtTime(l,Al)),// Mark that the root has a pending update.
markRootUpdatedAtTime(l,r)),l}function getNextRootExpirationTimeToWorkOn(n){
// Determines the next expiration time that the root should render, taking
// into account levels that may be suspended, or levels that may have
// received a ping.
var r=n.lastExpiredTime;if(0!==r)return r;// "Pending" refers to any update that hasn't committed yet, including if it
// suspended. The "suspended" range is therefore a subset.
var i=n.firstPendingTime;if(!isRootSuspendedAtTime(n,i))
// The highest priority pending time is not suspended. Let's work on that.
return i;// If the first pending time is suspended, check if there's a lower priority
// pending level that we know about. Or check if we received a ping. Work
// on whichever is higher priority.
var u=n.lastPingedTime,l=n.nextKnownPendingLevel,d=u>l?u:l;return d<=2&&i!==d?0:d}// Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the
// expiration time of the existing task is the same as the expiration time of
// the next level that the root has work on. This function is called on every
// update, and right before exiting a task.
function ensureRootIsScheduled(n){if(0!==n.lastExpiredTime)
// Special case: Expired work should flush synchronously.
return n.callbackExpirationTime=Ei,n.callbackPriority=fi,void(n.callbackNode=scheduleSyncCallback(performSyncWorkOnRoot.bind(null,n)));var r=getNextRootExpirationTimeToWorkOn(n),i=n.callbackNode;if(0!==r){// TODO: If this is an update, we already read the current time. Pass the
// time as an argument.
var u,l=inferPriorityFromExpirationTime(requestCurrentTimeForUpdate(),r);// If there's an existing render task, confirm it has the correct priority and
// expiration time. Otherwise, we'll cancel it and schedule a new one.
if(null!==i){var d=n.callbackPriority;if(// Callback must have the exact same expiration time.
n.callbackExpirationTime===r&&// Callback must have greater or equal priority.
d>=l)
// Existing callback is sufficient.
return;// Need to schedule a new task.
// TODO: Instead of scheduling a new task, we should be able to change the
// priority of the existing one.
!function cancelCallback(n){n!==pi&&ni(n)}(i)}n.callbackExpirationTime=r,n.callbackPriority=l,
// Sync React callbacks are scheduled on a special internal queue
u=r===Ei?scheduleSyncCallback(performSyncWorkOnRoot.bind(null,n)):scheduleCallback(l,performConcurrentWorkOnRoot.bind(null,n),// Compute a task timeout based on the expiration time. This also affects
// ordering because tasks are processed in timeout order.
{timeout:expirationTimeToMs(r)-Ti()}),n.callbackNode=u}else
// There's nothing to work on.
null!==i&&(n.callbackNode=null,n.callbackExpirationTime=0,n.callbackPriority=vi)}// This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.
function performConcurrentWorkOnRoot(n,r){if(
// Since we know we're in a React event, we can clear the current
// event time. The next update will compute a new event time.
os=0,r)return markRootExpiredAtTime(n,requestCurrentTimeForUpdate()),// This will schedule a synchronous callback.
ensureRootIsScheduled(n),null;// Determine the next expiration time to work on, using the fields stored
// on the root.
var i=getNextRootExpirationTimeToWorkOn(n);if(0!==i){var u=n.callbackNode;if(0!==(48&Fl))throw Error("Should not already be working.");// If we have a work-in-progress fiber, it means there's still work to do
// in this root.
if(flushPassiveEffects(),// If the root or expiration time have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
n===Nl&&i===Al||(prepareFreshStack(n,i),startWorkOnPendingInteractions(n,i)),null!==Ol){var l=Fl;Fl|=_l;var d=pushDispatcher(),p=pushInteractions(n);for(startWorkLoopTimer(Ol);;)try{workLoopConcurrent();break}catch(h){handleError(n,h)}if(resetContextDependencies(),Fl=l,popDispatcher(d),popInteractions(p),1===Hl){var f=Wl;throw stopInterruptedWorkLoopTimer(),prepareFreshStack(n,i),markRootSuspendedAtTime(n,i),ensureRootIsScheduled(n),f}if(null!==Ol)
// There's still work left over. Exit without committing.
stopInterruptedWorkLoopTimer();else{
// We now have a consistent tree. The next step is either to commit it,
// or, if something suspended, wait to commit it after a timeout.
stopFinishedWorkLoopTimer();var m=n.finishedWork=n.current.alternate;n.finishedExpirationTime=i,function finishConcurrentRender(n,r,i,u){switch(
// Set this to null to indicate there's no in-progress render.
Nl=null,i){case 0:case 1:throw Error("Root did not complete. This is a bug in React.");
// Flow knows about invariant, so it complains if I add a break
// statement, but eslint doesn't know about invariant, so it complains
// if I do. eslint-disable-next-line no-fallthrough
case 2:
// If this was an async render, the error may have happened due to
// a mutation in a concurrent event. Try rendering one more time,
// synchronously, to see if the error goes away. If there are
// lower priority updates, let's include those, too, in case they
// fix the inconsistency. Render at Idle to include all updates.
// If it was Idle or Never or some not-yet-invented time, render
// at that time.
markRootExpiredAtTime(n,u>2?2:u);// We assume that this second render pass will be synchronous
// and therefore not hit this path again.
break;case 3:markRootSuspendedAtTime(n,u);var l=n.lastSuspendedTime;if(u===l&&(n.nextKnownPendingLevel=getRemainingExpirationTime(r)),Ul===Ei&&// do not delay if we're inside an act() scope
!ps.current){
// If we have not processed any new updates during this pass, then
// this is either a retry of an existing fallback state or a
// hidden tree. Hidden trees shouldn't be batched with other work
// and after that's fixed it can only be a retry. We're going to
// throttle committing retries so that we don't show too many
// loading states too quickly.
var d=Vl+500-Ti();// Don't bother with a very short suspense time.
if(d>10){if(zl){var p=n.lastPingedTime;if(0===p||p>=u){
// This render was pinged but we didn't get to restart
// earlier so try restarting now instead.
n.lastPingedTime=u,prepareFreshStack(n,u);break}}var f=getNextRootExpirationTimeToWorkOn(n);if(0!==f&&f!==u)
// There's additional work on this root.
break;if(0!==l&&l!==u){
// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
n.lastPingedTime=l;break}// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
n.timeoutHandle=Co(commitRoot.bind(null,n),d);break}}// The work expired. Commit immediately.
commitRoot(n);break;case 4:markRootSuspendedAtTime(n,u);var m=n.lastSuspendedTime;if(u===m&&(n.nextKnownPendingLevel=getRemainingExpirationTime(r)),// do not delay if we're inside an act() scope
!ps.current){
// We're suspended in a state that should be avoided. We'll try to
// avoid committing it for as long as the timeouts let us.
if(zl){var h=n.lastPingedTime;if(0===h||h>=u){
// This render was pinged but we didn't get to restart earlier
// so try restarting now instead.
n.lastPingedTime=u,prepareFreshStack(n,u);break}}var v,g=getNextRootExpirationTimeToWorkOn(n);if(0!==g&&g!==u)
// There's additional work on this root.
break;if(0!==m&&m!==u){
// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
n.lastPingedTime=m;break}if(Ml!==Ei)
// We have processed a suspense config whose expiration time we
// can use as the timeout.
v=expirationTimeToMs(Ml)-Ti();else if(Ul===Ei)
// This should never normally happen because only new updates
// cause delayed states, so we should have processed something.
// However, this could also happen in an offscreen tree.
v=0;else{
// If we don't have a suspense config, we're going to use a
// heuristic to determine how long we can suspend.
var y=function inferTimeFromExpirationTime(n){return expirationTimeToMs(n)-Ri}(Ul),b=Ti(),C=expirationTimeToMs(u)-b,k=b-y;k<0&&(
// We get this wrong some time since we estimate the time.
k=0),// Clamp the timeout to the expiration time. TODO: Once the
// event time is exact instead of inferred from expiration time
// we don't need this.
C<(v=// Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates. We expect to adjust them based on research.
function jnd(n){return n<120?120:n<480?480:n<1080?1080:n<1920?1920:n<3e3?3e3:n<4320?4320:1960*Sl(n/1960)}(k)-k)&&(v=C)}// Don't bother with a very short suspense time.
if(v>10){
// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
n.timeoutHandle=Co(commitRoot.bind(null,n),v);break}}// The work expired. Commit immediately.
commitRoot(n);break;case 5:
// The work completed. Ready to commit.
if(// do not delay if we're inside an act() scope
!ps.current&&Ul!==Ei&&null!==Ll){
// If we have exceeded the minimum loading delay, which probably
// means we have shown a spinner already, we might have to suspend
// a bit longer to ensure that the spinner is shown for
// enough time.
var w=function computeMsUntilSuspenseLoadingDelay(n,r,i){var u=0|i.busyMinDurationMs;if(u<=0)return 0;var l=0|i.busyDelayMs,d=Ti(),p=function inferTimeFromExpirationTimeWithSuspenseConfig(n,r){return expirationTimeToMs(n)-(0|r.timeoutMs||Ri)}// The work loop is an extremely hot path. Tell Closure not to inline it.
/** @noinline */(n,i),f=d-p;// Compute the time until this render pass would expire.
if(f<=l)
// If we haven't yet waited longer than the initial delay, we don't
// have to wait any additional time.
return 0;// This is the value that is passed to `setTimeout`.
return l+u-f}(Ul,0,Ll);if(w>10){markRootSuspendedAtTime(n,u),n.timeoutHandle=Co(commitRoot.bind(null,n),w);break}}commitRoot(n);break;default:throw Error("Unknown root exit status.")}}// This is the entry point for synchronous tasks that don't go
// through Scheduler
(n,m,Hl,i)}if(ensureRootIsScheduled(n),n.callbackNode===u)
// The task node scheduled for this root is the same one that's
// currently executed. Need to return a continuation.
return performConcurrentWorkOnRoot.bind(null,n)}}return null}function performSyncWorkOnRoot(n){
// Check if there's expired work on this root. Otherwise, render at Sync.
var r=n.lastExpiredTime,i=0!==r?r:Ei;if(0!==(48&Fl))throw Error("Should not already be working.");// If we have a work-in-progress fiber, it means there's still work to do
// in this root.
if(flushPassiveEffects(),// If the root or expiration time have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
n===Nl&&i===Al||(prepareFreshStack(n,i),startWorkOnPendingInteractions(n,i)),null!==Ol){var u=Fl;Fl|=_l;var l=pushDispatcher(),d=pushInteractions(n);for(startWorkLoopTimer(Ol);;)try{workLoopSync();break}catch(f){handleError(n,f)}if(resetContextDependencies(),Fl=u,popDispatcher(l),popInteractions(d),1===Hl){var p=Wl;throw stopInterruptedWorkLoopTimer(),prepareFreshStack(n,i),markRootSuspendedAtTime(n,i),ensureRootIsScheduled(n),p}if(null!==Ol)throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");// Before exiting, make sure there's a callback scheduled for the next
// pending level.
// We now have a consistent tree. Because this is a sync render, we
// will commit it even if something suspended.
stopFinishedWorkLoopTimer(),n.finishedWork=n.current.alternate,n.finishedExpirationTime=i,function finishSyncRender(n){
// Set this to null to indicate there's no in-progress render.
Nl=null,commitRoot(n)}(n),ensureRootIsScheduled(n)}return null}function batchedUpdates$1(n,r){var i=Fl;Fl|=

1;try{return n(r)}finally{0===(Fl=i)&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}function unbatchedUpdates(n,r){var i=Fl;Fl&=-2,Fl|=8;try{return n(r)}finally{0===(Fl=i)&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}function flushSync(n,r){if(0!==(48&Fl))throw Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");var i=Fl;Fl|=1;try{return runWithPriority$1(fi,n.bind(null,r))}finally{Fl=i,// Flush the immediate callbacks that were scheduled during this batch.
// Note that this will happen even if batchedUpdates is higher up
// the stack.
flushSyncCallbackQueue()}}function prepareFreshStack(n,r){n.finishedWork=null,n.finishedExpirationTime=0;var i=n.timeoutHandle;if(-1!==i&&(
// The root previous suspended and scheduled a timeout to commit a fallback
// state. Now that we have additional work, cancel the timeout.
n.timeoutHandle=-1,// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
ko(i)),null!==Ol)for(var u=Ol.return;null!==u;)unwindInterruptedWork(u),u=u.return;Nl=n,Ol=createWorkInProgress(n.current,null),Al=r,Hl=0,Wl=null,Ul=Ei,Ml=Ei,Ll=null,jl=0,zl=!1,rs=null,Ii.discardPendingWarnings()}function handleError(n,r){for(;;){try{if(
// Reset module-level state that was set during the render phase.
resetContextDependencies(),resetHooksAfterThrow(),resetCurrentFiber(),null===Ol||null===Ol.return)
// Expected to be working on a non-root fiber. This is a fatal error
// because there's no ancestor that can handle it; the root is
// supposed to capture all errors that weren't caught by an error
// boundary.
return Hl=1,Wl=r,// Set `workInProgress` to null. This represents advancing to the next
// sibling, or the parent if there are no siblings. But since the root
// has no siblings nor a parent, we set it to null. Usually this is
// handled by `completeUnitOfWork` or `unwindWork`, but since we're
// interntionally not calling those, we need set it here.
// TODO: Consider calling `unwindWork` to pop the contexts.
Ol=null,null;8&Ol.mode&&
// Record the time spent rendering before an error was thrown. This
// avoids inaccurate Profiler durations in the case of a
// suspended render.
stopProfilerTimerIfRunningAndRecordDelta(Ol,!0),throwException(n,Ol.return,Ol,r,Al),Ol=completeUnitOfWork(Ol)}catch(i){
// Something in the return path also threw.
r=i;continue}// Return to the normal work loop.
return}}function pushDispatcher(n){var r=Pl.current;return Pl.current=$u,null===r?$u:r}function popDispatcher(n){Pl.current=n}function pushInteractions(n){var r=p.__interactionsRef.current;return p.__interactionsRef.current=n.memoizedInteractions,r}function popInteractions(n){p.__interactionsRef.current=n}function markRenderEventTimeAndConfig(n,r){n<Ul&&n>2&&(Ul=n),null!==r&&n<Ml&&n>2&&(Ml=n,// Most of the time we only have one config and getting wrong is not bad.
Ll=r)}function markUnprocessedUpdateTime(n){n>jl&&(jl=n)}function workLoopSync(){
// Already timed out, so perform work without checking if we need to yield.
for(;null!==Ol;)Ol=performUnitOfWork(Ol)}
/** @noinline */function workLoopConcurrent(){
// Perform work until Scheduler asks us to yield
for(;null!==Ol&&!gi();)Ol=performUnitOfWork(Ol)}function performUnitOfWork(n){
// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var r,i=n.alternate;return startWorkTimer(n),setCurrentFiber(n),0!==(8&n.mode)?(startProfilerTimer(n),r=ls(i,n,Al),stopProfilerTimerIfRunningAndRecordDelta(n,!0)):r=ls(i,n,Al),resetCurrentFiber(),n.memoizedProps=n.pendingProps,null===r&&(
// If this doesn't spawn new work, complete the current work.
r=completeUnitOfWork(n)),Rl.current=null,r}function completeUnitOfWork(n){
// Attempt to complete the current unit of work, then move to the next
// sibling. If there are no more siblings, return to the parent fiber.
Ol=n;do{
// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var r=Ol.alternate,i=Ol.return;// Check if the work completed or if something threw.
if(0===(Ol.effectTag&An)){setCurrentFiber(Ol);var u=void 0;if(0===(8&Ol.mode)?u=completeWork(r,Ol,Al):(startProfilerTimer(Ol),u=completeWork(r,Ol,Al),// Update render duration assuming we didn't error.
stopProfilerTimerIfRunningAndRecordDelta(Ol,!1)),stopWorkTimer(Ol),resetCurrentFiber(),resetChildExpirationTime(Ol),null!==u)
// Completing this fiber spawned new work. Work on that next.
return u;if(null!==i&&// Do not append effects to parents if a sibling failed to complete
0===(i.effectTag&An))
// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
null===i.firstEffect&&(i.firstEffect=Ol.firstEffect),null!==Ol.lastEffect&&(null!==i.lastEffect&&(i.lastEffect.nextEffect=Ol.firstEffect),i.lastEffect=Ol.lastEffect),// Skip both NoWork and PerformedWork tags when creating the effect
// list. PerformedWork effect is read by React DevTools but shouldn't be
// committed.
Ol.effectTag>1&&(null!==i.lastEffect?i.lastEffect.nextEffect=Ol:i.firstEffect=Ol,i.lastEffect=Ol)}else{
// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var l=unwindWork(Ol);// Because this fiber did not complete, don't reset its expiration time.
if(0!==(8&Ol.mode)){
// Record the render duration for the fiber that errored.
stopProfilerTimerIfRunningAndRecordDelta(Ol,!1);for(// Include the time spent working on failed children before continuing.
var d=Ol.actualDuration,p=Ol.child;null!==p;)d+=p.actualDuration,p=p.sibling;Ol.actualDuration=d}if(null!==l)
// If completing this work spawned new work, do that next. We'll come
// back here again.
// Since we're restarting, remove anything that is not a host effect
// from the effect tag.
// TODO: The name stopFailedWorkTimer is misleading because Suspense
// also captures and restarts.
return stopFailedWorkTimer(Ol),l.effectTag&=

2047,l;stopWorkTimer(Ol),null!==i&&(
// Mark the parent fiber as incomplete and clear its effect list.
i.firstEffect=i.lastEffect=null,i.effectTag|=An)}var f=Ol.sibling;if(null!==f)
// If there is more work to do in this returnFiber, do that next.
return f;// Otherwise, return to the parent
Ol=i}while(null!==Ol);// We've reached the root.
return 0===Hl&&(Hl=5),null}function getRemainingExpirationTime(n){var r=n.expirationTime,i=n.childExpirationTime;return r>i?r:i}function resetChildExpirationTime(n){if(1===Al||1!==n.childExpirationTime){var r=0;// Bubble up the earliest expiration time.
if(0!==(8&n.mode)){for(
// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
var i=n.actualDuration,u=n.selfBaseDuration,l=null===n.alternate||n.child!==n.alternate.child,d=n.child;null!==d;){var p=d.expirationTime,f=d.childExpirationTime;p>r&&(r=p),f>r&&(r=f),l&&(i+=d.actualDuration),u+=d.treeBaseDuration,d=d.sibling}n.actualDuration=i,n.treeBaseDuration=u}else for(var m=n.child;null!==m;){var h=m.expirationTime,v=m.childExpirationTime;h>r&&(r=h),v>r&&(r=v),m=m.sibling}n.childExpirationTime=r}}function commitRoot(n){var r=getCurrentPriorityLevel();return runWithPriority$1(fi,commitRootImpl.bind(null,n,r)),null}function commitRootImpl(n,r){do{
// `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
// means `flushPassiveEffects` will sometimes result in additional
// passive effects. So we need to keep flushing in a loop until there are
// no more pending effects.
// TODO: Might be better if `flushPassiveEffects` did not automatically
// flush synchronous work at the end, to avoid factoring hazards like this.
flushPassiveEffects()}while(null!==Yl);if(function flushRenderPhaseStrictModeWarningsInDEV(){Ii.flushLegacyContextWarning(),Ii.flushPendingUnsafeLifecycleWarnings()}(),0!==(48&Fl))throw Error("Should not already be working.");var i,u=n.finishedWork,l=n.finishedExpirationTime;if(null===u)return null;if(n.finishedWork=null,n.finishedExpirationTime=0,u===n.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");// commitRoot never returns a continuation; it always finishes synchronously.
// So we can clear these now to allow a new callback to be scheduled.
if(n.callbackNode=null,n.callbackExpirationTime=0,n.callbackPriority=vi,n.nextKnownPendingLevel=0,function startCommitTimer(){Ea&&(Ia=!0,_a=!1,Oa.clear(),Ha("(Committing Changes)"))}(),function markRootFinishedAtTime(n,r,i){// Update the range of suspended times. Treat everything higher priority or
// equal to this update as unsuspended.
// Update the range of pending times
n.firstPendingTime=i,r<=n.lastSuspendedTime?
// The entire suspended range is now unsuspended.
n.firstSuspendedTime=n.lastSuspendedTime=n.nextKnownPendingLevel=0:r<=n.firstSuspendedTime&&(
// Part of the suspended range is now unsuspended. Narrow the range to
// include everything between the unsuspended time (non-inclusive) and the
// last suspended time.
n.firstSuspendedTime=r-1);r<=n.lastPingedTime&&(
// Clear the pinged time
n.lastPingedTime=0);r<=n.lastExpiredTime&&(
// Clear the expired time
n.lastExpiredTime=0)}(n,l,getRemainingExpirationTime(u)),n===Nl&&(
// We can reset these now that they are finished.
Nl=null,Ol=null,Al=0),u.effectTag>1?
// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if it
// had one; that is, all the effects in the tree including the root.
null!==u.lastEffect?(u.lastEffect.nextEffect=u,i=u.firstEffect):i=u:
// There is no effect on the root.
i=u.firstEffect,null!==i){var d=Fl;Fl|=Dl;var p=pushInteractions(n);// Reset this to null before calling lifecycles
Rl.current=null,// The commit phase is broken into several sub-phases. We do a separate pass
// of the effect list for each phase: all mutation effects come before all
// layout effects, and so on.
// The first phase a "before mutation" phase. We use this phase to read the
// state of the host tree right before we mutate it. This is where
// getSnapshotBeforeUpdate is called.
startCommitSnapshotEffectsTimer(),prepareForCommit(n.containerInfo),Bl=i;do{if(invokeGuardedCallback(null,commitBeforeMutationEffects,null),hasCaughtError()){if(null===Bl)throw Error("Should be working on an effect.");var f=clearCaughtError();captureCommitPhaseError(Bl,f),Bl=Bl.nextEffect}}while(null!==Bl);stopCommitSnapshotEffectsTimer(),
// Mark the current commit time to be shared by all Profilers in this
// batch. This enables them to be grouped later.
recordCommitTime(),// The next phase is the mutation phase, where we mutate the host tree.
startCommitHostEffectsTimer(),Bl=i;do{if(invokeGuardedCallback(null,commitMutationEffects,null,n,r),hasCaughtError()){if(null===Bl)throw Error("Should be working on an effect.");var m=clearCaughtError();captureCommitPhaseError(Bl,m),Bl=Bl.nextEffect}}while(null!==Bl);stopCommitHostEffectsTimer(),function resetAfterCommit(n){restoreSelection(bo),setEnabled(yo),yo=null,bo=null}(n.containerInfo),// The work-in-progress tree is now the current tree. This must come after
// the mutation phase, so that the previous tree is still current during
// componentWillUnmount, but before the layout phase, so that the finished
// work is current during componentDidMount/Update.
n.current=u,// The next phase is the layout phase, where we call effects that read
// the host tree after it's been mutated. The idiomatic use case for this is
// layout, but class component lifecycles also fire here for legacy reasons.
startCommitLifeCyclesTimer(),Bl=i;do{if(invokeGuardedCallback(null,commitLayoutEffects,null,n,l),hasCaughtError()){if(null===Bl)throw Error("Should be working on an effect.");var h=clearCaughtError();captureCommitPhaseError(Bl,h),Bl=Bl.nextEffect}}while(null!==Bl);stopCommitLifeCyclesTimer(),Bl=null,// Tell Scheduler to yield at the end of the frame, so the browser has an
// opportunity to paint.
yi(),popInteractions(p),Fl=d}else
// No effects.
n.current=u,// Measure these anyway so the flamegraph explicitly shows that there were
// no effects.
// TODO: Maybe there's a better way to report this.
startCommitSnapshotEffectsTimer(),stopCommitSnapshotEffectsTimer(),recordCommitTime(),startCommitHostEffectsTimer(),stopCommitHostEffectsTimer(),startCommitLifeCyclesTimer(),stopCommitLifeCyclesTimer();!function stopCommitTimer(){if(Ea){var n=null;_a?n="Lifecycle hook scheduled a cascading update":Fa>0&&(n="Caused by a cascading update in earlier commit"),_a=!1,Fa++,Ia=!1,Oa.clear(),Wa("(Committing Changes)","(Committing Changes)",n)}}();var v=Kl;if(Kl)
// This commit has passive effects. Stash a reference to them. But don't
// schedule a callback until after flushing layout work.
Kl=!1,Yl=n,Xl=l,Gl=r;else for(
// We are done with the effect chain at this point so let's clear the
// nextEffect pointers to assist with GC. If we have passive effects, we'll
// clear this in flushPassiveEffects.
Bl=i;null!==Bl;){var g=Bl.nextEffect;Bl.nextEffect=null,Bl=g}// Check if there's remaining work on this root
var y=n.firstPendingTime;if(0!==y){if(null!==rs){var b=rs;rs=null;for(var C=0;C<b.length;C++)scheduleInteractions(n,b[C],n.memoizedInteractions)}schedulePendingInteractions(n,y)}else
// If there's no remaining work, we can clear the set of already failed
// error boundaries.
Ql=null;if(v||
// If there are no passive effects, then we can complete the pending interactions.
// Otherwise, we'll wait until after the passive effects are flushed.
// Wait to do this until after remaining work has been scheduled,
// so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
finishPendingInteractions(n,l),y===Ei?
// Count the number of times the root synchronously re-renders without
// finishing. If there are too many, it indicates an infinite update loop.
n===es?Zl++:(Zl=0,es=n):Zl=0,function onCommitRoot(n,r){"function"===typeof gs&&gs(n,r)}(u.stateNode,l),// Always call this before exiting `commitRoot`, to ensure that any
// additional work on this root is scheduled.
ensureRootIsScheduled(n),$l){$l=!1;var k=ql;throw ql=null,k}return 0!==(8&Fl)||// If layout work was scheduled, flush it now.
flushSyncCallbackQueue(),null}function commitBeforeMutationEffects(){for(;null!==Bl;){var n=Bl.effectTag;if(0!==(n&Fn))setCurrentFiber(Bl),recordEffect(),commitBeforeMutationLifeCycles(Bl.alternate,Bl),resetCurrentFiber();0!==(n&Nn)&&(
// If there are passive effects, schedule a callback to flush at
// the earliest opportunity.
Kl||(Kl=!0,scheduleCallback(hi,(function(){return flushPassiveEffects(),null})))),Bl=Bl.nextEffect}}function commitMutationEffects(n,r){
// TODO: Should probably move the bulk of this function to commitWork.
for(;null!==Bl;){setCurrentFiber(Bl);var i=Bl.effectTag;if(16&i&&commitResetTextContent(Bl),i&Dn){var u=Bl.alternate;null!==u&&commitDetachRef(u)}// The following switch statement is only concerned about placement,
// updates, and deletions. To avoid needing to add a case for every possible
// bitmap value, we remove the secondary effects from the effect tag and
// switch on that value.
switch(1038&i){case 2:commitPlacement(Bl),// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted does
// and isMounted is deprecated anyway so we should be able to kill this.
Bl.effectTag&=-3;break;case

6:
// Placement
commitPlacement(Bl),// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
Bl.effectTag&=-3,commitWork(Bl.alternate,Bl);break;case On:Bl.effectTag&=-1025;break;case

1028:Bl.effectTag&=-1025,commitWork(Bl.alternate,Bl);break;case 4:commitWork(Bl.alternate,Bl);break;case 8:commitDeletion(n,Bl,r)}// TODO: Only record a mutation effect if primaryEffectTag is non-zero.
recordEffect(),resetCurrentFiber(),Bl=Bl.nextEffect}}function commitLayoutEffects(n,r){
// TODO: Should probably move the bulk of this function to commitWork.
for(;null!==Bl;){setCurrentFiber(Bl);var i=Bl.effectTag;if(36&i)recordEffect(),commitLifeCycles(n,Bl.alternate,Bl);i&Dn&&(recordEffect(),commitAttachRef(Bl)),resetCurrentFiber(),Bl=Bl.nextEffect}}function flushPassiveEffects(){if(Gl!==vi){var n=Gl>hi?hi:Gl;return Gl=vi,runWithPriority$1(n,flushPassiveEffectsImpl)}}function flushPassiveEffectsImpl(){if(null===Yl)return!1;var n=Yl,r=Xl;if(Yl=null,Xl=0,0!==(48&Fl))throw Error("Cannot flush passive effects while already rendering.");var i=Fl;Fl|=Dl;for(var u=pushInteractions(n),l=n.current.firstEffect;null!==l;){if(setCurrentFiber(l),invokeGuardedCallback(null,commitPassiveHookEffects,null,l),hasCaughtError()){if(null===l)throw Error("Should be working on an effect.");captureCommitPhaseError(l,clearCaughtError())}resetCurrentFiber();var d=l.nextEffect;// Remove nextEffect pointer to assist GC
l.nextEffect=null,l=d}return popInteractions(u),finishPendingInteractions(n,r),Fl=i,flushSyncCallbackQueue(),// If additional passive effects were scheduled, increment a counter. If this
// exceeds the limit, we'll fire a warning.
ts=null===Yl?0:ts+1,!0}function isAlreadyFailedLegacyErrorBoundary(n){return null!==Ql&&Ql.has(n)}var us=function prepareToThrowUncaughtError(n){$l||($l=!0,ql=n)};function captureCommitPhaseErrorOnRoot(n,r,i){enqueueUpdate(n,createRootErrorUpdate(n,createCapturedValue(i,r),Ei));var u=markUpdateTimeFromFiberToRoot(n,Ei);null!==u&&(ensureRootIsScheduled(u),schedulePendingInteractions(u,Ei))}function captureCommitPhaseError(n,r){if(3!==n.tag)for(var i=n.return;null!==i;){if(3===i.tag)return void captureCommitPhaseErrorOnRoot(i,n,r);if(1===i.tag){var u=i.type,l=i.stateNode;if("function"===typeof u.getDerivedStateFromError||"function"===typeof l.componentDidCatch&&!isAlreadyFailedLegacyErrorBoundary(l)){enqueueUpdate(i,createClassErrorUpdate(i,createCapturedValue(r,n),// TODO: This is always sync
Ei));var d=markUpdateTimeFromFiberToRoot(i,Ei);return void(null!==d&&(ensureRootIsScheduled(d),schedulePendingInteractions(d,Ei)))}}i=i.return}else
// Error was thrown at the root. There is no parent, so the root
// itself should capture it.
captureCommitPhaseErrorOnRoot(n,n,r)}function pingSuspendedRoot(n,r,i){var u=n.pingCache;if(null!==u&&
// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
u.delete(r),Nl!==n||Al!==i){if(isRootSuspendedAtTime(n,i)){var l=n.lastPingedTime;0!==l&&l<i||(// Mark the time at which this ping was scheduled.
n.lastPingedTime=i,ensureRootIsScheduled(n),schedulePendingInteractions(n,i))}}else
// Received a ping at the same priority level at which we're currently
// rendering. We might want to restart this render. This should mirror
// the logic of whether or not a root suspends once it completes.
// TODO: If we're rendering sync either due to Sync, Batched or expired,
// we should probably never restart.
// If we're suspended with delay, we'll always suspend so we can always
// restart. If we're suspended without any updates, it might be a retry.
// If it's early in the retry we can restart. We can't know for sure
// whether we'll eventually process an update during this render pass,
// but it's somewhat unlikely that we get to a ping before that, since
// getting to the root most update is usually very fast.
4===Hl||3===Hl&&Ul===Ei&&Ti()-Vl<500?
// Restart from the root. Don't need to schedule a ping because
// we're already working on this tree.
prepareFreshStack(n,Al):
// Even though we can't restart right now, we might get an
// opportunity later. So we mark this render as having a ping.
zl=!0}function resolveRetryThenable(n,r){var i;// Default
null!==(i=n.stateNode)&&
// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
i.delete(r),function retryTimedOutBoundary(n,r){
// The boundary fiber (a Suspense component or SuspenseList component)
// previously was rendered in its fallback state. One of the promises that
// suspended it has resolved, which means at least part of the tree was
// likely unblocked. Try rendering again, at a new expiration time.
0===r&&(r=computeExpirationForFiber(requestCurrentTimeForUpdate(),n,null));// TODO: Special case idle priority?
var i=markUpdateTimeFromFiberToRoot(n,r);null!==i&&(ensureRootIsScheduled(i),schedulePendingInteractions(i,r))}(n,0)}function stopFinishedWorkLoopTimer(){stopWorkLoopTimer(ns,!0),ns=null}function stopInterruptedWorkLoopTimer(){stopWorkLoopTimer(ns,!1),ns=null}var ls,ss=null;ls=function beginWork$1(n,r,i){
// If a component throws an error, we replay it again in a synchronously
// dispatched event, so that the debugger will treat it as an uncaught
// error See ReactErrorUtils for more information.
// Before entering the begin phase, copy the work-in-progress onto a dummy
// fiber. If beginWork throws, we'll use this to reset the state.
var u=assignFiberPropertiesInDEV(null,r);try{return beginWork(n,r,i)}catch(l){if(null!==l&&"object"===typeof l&&"function"===typeof l.then)
// Don't replay promises. Treat everything else like an error.
throw l;// Keep this code in sync with handleError; any changes here must have
// corresponding changes there.
if(resetContextDependencies(),resetHooksAfterThrow(),// Don't reset current debug fiber, since we're about to work on the
// same fiber again.
// Unwind the failed stack frame
unwindInterruptedWork(r),// Restore the original properties of the fiber.
assignFiberPropertiesInDEV(r,u),8&r.mode&&
// Reset the profiler timer.
startProfilerTimer(r),// Run beginWork again.
invokeGuardedCallback(null,beginWork,null,n,r,i),hasCaughtError())// `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
// Rethrow this error instead of the original one.
throw clearCaughtError();
// This branch is reachable if the render phase is impure.
throw l}};var cs,ds=!1;cs=new Set;var ps={current:!1};function warnIfNotScopedWithMatchingAct(n){!0===Il.current&&!0!==ps.current&&error("It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from 'react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);%s",getStackByFiberInDevAndProd(n))}function warnIfNotCurrentlyActingEffectsInDEV(n){0!==(1&n.mode)&&!1===Il.current&&!1===ps.current&&error("An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s",getComponentName(n.type),getStackByFiberInDevAndProd(n))}var fs=function warnIfNotCurrentlyActingUpdatesInDEV(n){0===Fl&&!1===Il.current&&!1===ps.current&&error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s",getComponentName(n.type),getStackByFiberInDevAndProd(n))},ms=!1;// In tests, we want to enforce a mocked scheduler.
function computeThreadID(n,r){
// Interaction threads are unique per root and expiration time.
return 1e3*r+n.interactionThreadID}function markSpawnedWork(n){null===rs?rs=[n]:rs.push(n)}function scheduleInteractions(n,r,i){if(i.size>0){var u=n.pendingInteractionMap,l=u.get(r);null!=l?i.forEach((function(n){l.has(n)||
// Update the pending async work count for previously unscheduled interaction.
n.__count++,l.add(n)})):(u.set(r,new Set(i)),// Update the pending async work count for the current interactions.
i.forEach((function(n){n.__count++})));var d=p.__subscriberRef.current;if(null!==d){var f=computeThreadID(n,r);d.onWorkScheduled(i,f)}}}function schedulePendingInteractions(n,r){scheduleInteractions(n,r,p.__interactionsRef.current)}function startWorkOnPendingInteractions(n,r){
// we can accurately attribute time spent working on it, And so that cascading
// work triggered during the render phase will be associated with it.
var i=new Set;if(n.pendingInteractionMap.forEach((function(n,u){u>=r&&n.forEach((function(n){return i.add(n)}))})),// Store the current set of interactions on the FiberRoot for a few reasons:
// We can re-use it in hot functions like performConcurrentWorkOnRoot()
// without having to recalculate it. We will also use it in commitWork() to
// pass to any Profiler onRender() hooks. This also provides DevTools with a
// way to access it when the onCommitRoot() hook is called.
n.memoizedInteractions=i,i.size>0){var u=p.__subscriberRef.current;if(null!==u){var l=computeThreadID(n,r);try{u.onWorkStarted(i,l)}catch(error){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(fi,(function(){throw error}))}}}}function finishPendingInteractions(n,r){var i,u=n.firstPendingTime;try{if(null!==(i=p.__subscriberRef.current)&&n.memoizedInteractions.size>0){var l=computeThreadID(n,r);i.onWorkStopped(n.memoizedInteractions,l)}}catch(error){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(fi,(function(){throw error}))}finally{
// Clear completed interactions from the pending Map.
// Unless the render was suspended or cascading work was scheduled,
// In which case– leave pending interactions until the subsequent render.
var d=n.pendingInteractionMap;d.forEach((function(n,r){
// Only decrement the pending interaction count if we're done.
// If there's still work at the current priority,
// That indicates that we are waiting for suspense data.
r>u&&(d.delete(r),n.forEach((function(n){if(n.__count--,null!==i&&0===n.__count)try{i.onInteractionScheduledWorkCompleted(n)}catch(error){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(fi,(function(){throw error}))}})))}))}}var hs,vs=null,gs=null,ys=null,bs=!1,Cs="undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;function injectInternals(n){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
// No DevTools
return!1;var r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(r.isDisabled)
// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return!0;if(!r.supportsFiber)// DevTools exists, even though it doesn't support Fiber.
return error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"),!0;try{var i=r.inject(n);// We have successfully injected, so now it is safe to set up hooks.
// Only used by Fast Refresh
"function"===typeof r.onScheduleFiberRoot&&(vs=function onScheduleFiberRoot(n,u){try{r.onScheduleFiberRoot(i,n,u)}catch(l){bs||(bs=!0,error("React instrumentation encountered an error: %s",l))}}),gs=function onCommitFiberRoot(n,u){try{var l=(n.current.effectTag&_n)===_n,d=inferPriorityFromExpirationTime(function getCurrentTime(){return msToExpirationTime(Ti())}(),u);r.onCommitFiberRoot(i,n,d,l)}catch(p){bs||(bs=!0,error("React instrumentation encountered an error: %s",p))}},ys=function onCommitFiberUnmount(n){try{r.onCommitFiberUnmount(i,n)}catch(u){bs||(bs=!0,error("React instrumentation encountered an error: %s",u))}}}catch(u){error("React instrumentation encountered an error: %s.",u)}// DevTools exists
return!0}hs=!1;try{var ks=Object.preventExtensions({}),ws=new Map([[ks,null]]),Ts=new Set([ks]);// This is necessary for Rollup to not consider these unused.
// https://github.com/rollup/rollup/issues/1771
// TODO: we can remove these if Rollup fixes the bug.
ws.set(0,0),Ts.add(0)}catch(Vs){
// TODO: Consider warning about bad polyfills
hs=!0}var xs=1;function FiberNode(n,r,i,u){
// Instance
this.tag=n,this.key=i,this.elementType=null,this.type=null,this.stateNode=null,// Fiber
this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=r,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=u,// Effects
this.effectTag=0,this.nextEffect=null,this.firstEffect=null,this.lastEffect=null,this.expirationTime=0,this.childExpirationTime=0,this.alternate=null,
// Note: The following is done to avoid a v8 performance cliff.
// Initializing the fields below to smis and later updating them with
// double values will cause Fibers to end up having separate shapes.
// This behavior/bug has something to do with Object.preventExtension().
// Fortunately this only impacts DEV builds.
// Unfortunately it makes React unusably slow for some applications.
// To work around this, initialize the fields below with doubles.
// Learn more about this here:
// https://github.com/facebook/react/issues/14365
// https://bugs.chromium.org/p/v8/issues/detail?id=8538
this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,// It's okay to replace the initial doubles with smis after initialization.
// This won't trigger the performance cliff mentioned above,
// and it simplifies other profiler code (including DevTools).
this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugID=xs++,this._debugIsCurrentlyTiming=!1,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,hs||"function"!==typeof Object.preventExtensions||Object.preventExtensions(this)}// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var Es,Ss,Ps=function createFiber(n,r,i,u){
// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new FiberNode(n,r,i,u)};function shouldConstruct(n){var r=n.prototype;return!(!r||!r.isReactComponent)}function createWorkInProgress(n,r){var i=n.alternate;null===i?(
// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
(i=Ps(n.tag,r,n.key,n.mode)).elementType=n.elementType,i.type=n.type,i.stateNode=n.stateNode,i._debugID=n._debugID,i._debugSource=n._debugSource,i._debugOwner=n._debugOwner,i._debugHookTypes=n._debugHookTypes,i.alternate=n,n.alternate=i):(i.pendingProps=r,// We already have an alternate.
// Reset the effect tag.
i.effectTag=0,// The effect list is no longer valid.
i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,
// We intentionally reset, rather than copy, actualDuration & actualStartTime.
// This prevents time from endlessly accumulating in new commits.
// This has the downside of resetting values for different priority renders,
// But works for yielding (the common case) and should support resuming.
i.actualDuration=0,i.actualStartTime=-1),i.childExpirationTime=n.childExpirationTime,i.expirationTime=n.expirationTime,i.child=n.child,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var u=n.dependencies;switch(i.dependencies=null===u?null:{expirationTime:u.expirationTime,firstContext:u.firstContext,responders:u.responders},// These will be overridden during the parent's reconciliation
i.sibling=n.sibling,i.index=n.index,i.ref=n.ref,i.selfBaseDuration=n.selfBaseDuration,i.treeBaseDuration=n.treeBaseDuration,i._debugNeedsRemount=n._debugNeedsRemount,i.tag){case 2:case 0:case F:i.type=resolveFunctionForHotReloading(n.type);break;case 1:i.type=resolveClassForHotReloading(n.type);break;case R:i.type=resolveForwardRefForHotReloading(n.type)}return i}// Used to reuse a Fiber for a second pass.
function resetWorkInProgress(n,r){
// This resets the Fiber to what createFiber or createWorkInProgress would
// have set the values to before during the first pass. Ideally this wouldn't
// be necessary but unfortunately many code paths reads from the workInProgress
// when they should be reading from current and writing to workInProgress.
// We assume pendingProps, index, key, ref, return are still untouched to
// avoid doing another reconciliation.
// Reset the effect tag but keep any Placement tags, since that's something
// that child fiber is setting, not the reconciliation.
n.effectTag&=2,// The effect list is no longer valid.
n.nextEffect=null,n.firstEffect=null,n.lastEffect=null;var i=n.alternate;if(null===i)
// Reset to createFiber's initial values.
n.childExpirationTime=0,n.expirationTime=r,n.child=null,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,
// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
n.selfBaseDuration=0,n.treeBaseDuration=0;else{
// Reset to the cloned values that createWorkInProgress would've.
n.childExpirationTime=i.childExpirationTime,n.expirationTime=i.expirationTime,n.child=i.child,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var u=i.dependencies;n.dependencies=null===u?null:{expirationTime:u.expirationTime,firstContext:u.firstContext,responders:u.responders},
// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
n.selfBaseDuration=i.selfBaseDuration,n.treeBaseDuration=i.treeBaseDuration}return n}function createFiberFromTypeAndProps(n,// React$ElementType
r,i,u,l,d){var p,f=2,m=n;if("function"===typeof n)shouldConstruct(n)?(f=1,m=resolveClassForHotReloading(m)):m=resolveFunctionForHotReloading(m);else if("string"===typeof n)f=5;else e:switch(n){case he:return createFiberFromFragment(i.children,l,d,r);case Ce:f=8,l|=7;break;case ve:f=8,l|=1;break;case ge:return function createFiberFromProfiler(n,r,i,u){"string"===typeof n.id&&"function"===typeof n.onRender||error('Profiler must specify an "id" string and "onRender" function as props');var l=Ps(I,n,u,8|r);// TODO: The Profiler fiber shouldn't have a type. It has a tag.
return l.elementType=ge,l.type=ge,l.expirationTime=i,l}(i,l,d,r);case we:return function createFiberFromSuspense(n,r,i,u){var l=Ps(_,n,u,r);// TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return l.type=we,l.elementType=we,l.expirationTime=i,l}(i,l,d,r);case Te:return function createFiberFromSuspenseList(n,r,i,u){var l=Ps(O,n,u,r);
// TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return l.type=Te,l.elementType=Te,l.expirationTime=i,l}(i,l,d,r);default:if("object"===typeof n&&null!==n)switch(n.$$typeof){case ye:f=P;break e;case be:
// This is a consumer
f=9;break e;case ke:f=R,m=resolveForwardRefForHotReloading(m);break e;case xe:f=D;break e;case Ee:f=16,m=null;break e;case Se:f=A;break e}var h="";(void 0===n||"object"===typeof n&&null!==n&&0===Object.keys(n).length)&&(h+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=u?getComponentName(u.type):null;throw v&&(h+="\n\nCheck the render method of `"+v+"`."),Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(null==n?n:typeof n)+"."+h)}return(p=Ps(f,i,r,l)).elementType=n,p.type=m,p.expirationTime=d,p}function createFiberFromElement(n,r,i){var u;u=n._owner;var l=createFiberFromTypeAndProps(n.type,n.key,n.props,u,r,i);return l._debugSource=n._source,l._debugOwner=n._owner,l}function createFiberFromFragment(n,r,i,u){var l=Ps(7,n,u,r);return l.expirationTime=i,l}function createFiberFromText(n,r,i){var u=Ps(6,n,null,r);return u.expirationTime=i,u}function createFiberFromPortal(n,r,i){var u=null!==n.children?n.children:[],l=Ps(4,u,n.key,r);return l.expirationTime=i,l.stateNode={containerInfo:n.containerInfo,pendingChildren:null,
// Used by persistent updates
implementation:n.implementation},l}// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(n,r){return null===n&&(
// This Fiber's initial properties will always be overwritten.
// We only use a Fiber to ensure the same hidden class so DEV isn't slow.
n=Ps(2,null,null,0)),// This is intentionally written as a list of all properties.
// We tried to use Object.assign() instead but this is called in
// the hottest path, and Object.assign() was too slow:
// https://github.com/facebook/react/issues/12502
// This code is DEV-only so size is not a concern.
n.tag=r.tag,n.key=r.key,n.elementType=r.elementType,n.type=r.type,n.stateNode=r.stateNode,n.return=r.return,n.child=r.child,n.sibling=r.sibling,n.index=r.index,n.ref=r.ref,n.pendingProps=r.pendingProps,n.memoizedProps=r.memoizedProps,n.updateQueue=r.updateQueue,n.memoizedState=r.memoizedState,n.dependencies=r.dependencies,n.mode=r.mode,n.effectTag=r.effectTag,n.nextEffect=r.nextEffect,n.firstEffect=r.firstEffect,n.lastEffect=r.lastEffect,n.expirationTime=r.expirationTime,n.childExpirationTime=r.childExpirationTime,n.alternate=r.alternate,n.actualDuration=r.actualDuration,n.actualStartTime=r.actualStartTime,n.selfBaseDuration=r.selfBaseDuration,n.treeBaseDuration=r.treeBaseDuration,n._debugID=r._debugID,n._debugSource=r._debugSource,n._debugOwner=r._debugOwner,n._debugIsCurrentlyTiming=r._debugIsCurrentlyTiming,n._debugNeedsRemount=r._debugNeedsRemount,n._debugHookTypes=r._debugHookTypes,n}function FiberRootNode(n,r,i){this.tag=r,this.current=null,this.containerInfo=n,this.pendingChildren=null,this.pingCache=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.context=null,this.pendingContext=null,this.hydrate=i,this.callbackNode=null,this.callbackPriority=vi,this.firstPendingTime=0,this.firstSuspendedTime=0,this.lastSuspendedTime=0,this.nextKnownPendingLevel=0,this.lastPingedTime=0,this.lastExpiredTime=0,this.interactionThreadID=p.unstable_getThreadID(),this.memoizedInteractions=new Set,this.pendingInteractionMap=new Map}function createFiberRoot(n,r,i,u){var l=new FiberRootNode(n,r,i),d=function createHostRootFiber(n){var r;return r=2===n?7:1===n?3:0,Cs&&(
// Always collect profile timings when DevTools are present.
// This enables DevTools to start capturing timing at any point–
// Without some nodes in the tree having empty base times.
r|=8),Ps(3,null,null,r)}(r);// stateNode is any.
return l.current=d,d.stateNode=l,initializeUpdateQueue(d),l}function isRootSuspendedAtTime(n,r){var i=n.firstSuspendedTime,u=n.lastSuspendedTime;return 0!==i&&i>=r&&u<=r}function markRootSuspendedAtTime(n,r){var i=n.firstSuspendedTime,u=n.lastSuspendedTime;i<r&&(n.firstSuspendedTime=r),(u>r||0===i)&&(n.lastSuspendedTime=r),r<=n.lastPingedTime&&(n.lastPingedTime=0),r<=n.lastExpiredTime&&(n.lastExpiredTime=0)}function markRootUpdatedAtTime(n,r){r>n.firstPendingTime&&(n.firstPendingTime=r);// Update the range of suspended times. Treat everything lower priority or
// equal to this update as unsuspended.
var i=n.firstSuspendedTime;0!==i&&(r>=i?
// The entire suspended range is now unsuspended.
n.firstSuspendedTime=n.lastSuspendedTime=n.nextKnownPendingLevel=0:r>=n.lastSuspendedTime&&(n.lastSuspendedTime=r+1),// This is a pending level. Check if it's higher priority than the next
// known pending level.
r>n.nextKnownPendingLevel&&(n.nextKnownPendingLevel=r))}function markRootExpiredAtTime(n,r){var i=n.lastExpiredTime;(0===i||i>r)&&(n.lastExpiredTime=r)}function updateContainer(n,r,i,u){!function onScheduleRoot(n,r){"function"===typeof vs&&vs(n,r)}(r,n);var d=r.current,p=requestCurrentTimeForUpdate();
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
"undefined"!==typeof jest&&(!// TODO Before we release concurrent mode, revisit this and decide whether a mocked
// scheduler is the actual recommendation. The alternative could be a testing build,
// a new lib, or whatever; we dunno just yet. This message is for early adopters
// to get their tests right.
function warnIfUnmockedScheduler(n){!1===ms&&void 0===l.unstable_flushAllWithoutAsserting&&(2&n.mode||4&n.mode)&&(ms=!0,error("In Concurrent or Sync modes, the \"scheduler\" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: \njest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\nFor more info, visit https://fb.me/react-mock-scheduler"))}(d),warnIfNotScopedWithMatchingAct(d));var f=requestCurrentSuspenseConfig(),m=computeExpirationForFiber(p,d,f),h=function getContextForSubtree(n){if(!n)return Ga;var r=get(n),i=findCurrentUnmaskedContext(r);if(1===r.tag){var u=r.type;if(isContextProvider(u))return processChildContext(r,u,i)}return i}(i);null===r.context?r.context=h:r.pendingContext=h,_e&&null!==Ie&&!Es&&(Es=!0,error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",getComponentName(Ie.type)||"Unknown"));var v=createUpdate(m,f);// Caution: React DevTools currently depends on this property
// being called "element".
return v.payload={element:n},null!==(u=void 0===u?null:u)&&("function"!==typeof u&&error("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",u),v.callback=u),enqueueUpdate(d,v),as(d,m),m}function getPublicRootInstance(n){var r=n.current;return r.child?(r.child.tag,r.child.stateNode):null}function markRetryTimeImpl(n,r){var i=n.memoizedState;null!==i&&null!==i.dehydrated&&i.retryTime<r&&(i.retryTime=r)}// Increases the priority of thennables when they resolve within this boundary.
function markRetryTimeIfNotHydrated(n,r){markRetryTimeImpl(n,r);var i=n.alternate;i&&markRetryTimeImpl(i,r)}function findHostInstanceWithNoPortals(n){var r=function findCurrentHostFiberWithNoPortals(n){var r=findCurrentFiberUsingSlowPath(n);if(!r)return null;// Next we'll drill down this component to find the first HostComponent/Text.
for(var i=r;;){if(5===i.tag||6===i.tag)return i;if(i.child&&4!==i.tag)i.child.return=i,i=i.child;else{if(i===r)return null;for(;!i.sibling;){if(!i.return||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}(n);return null===r?null:20===r.tag?r.stateNode.instance:r.stateNode}Es=!1,Ss={};var Rs=function shouldSuspendImpl(n){return!1};var Is,_s,Ds,Fs,Ns=function copyWithSetImpl(n,r,i,l){if(i>=r.length)return l;var d=r[i],p=Array.isArray(n)?n.slice():u({},n);// $FlowFixMe number or string is fine here
return p[d]=copyWithSetImpl(n[d],r,i+1,l),p},Os=function copyWithSet(n,r,i){return Ns(n,r,0,i)};// Support DevTools editable values for useState and useReducer.
Is=function overrideHookState(n,r,i,l){for(
// For now, the "id" of stateful hooks is just the stateful hook index.
// This may change in the future with e.g. nested hooks.
var d=n.memoizedState;null!==d&&r>0;)d=d.next,r--;if(null!==d){var p=Os(d.memoizedState,i,l);d.memoizedState=p,d.baseState=p,// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
n.memoizedProps=u({},n.memoizedProps),as(n,Ei)}},// Support DevTools props for function components, forwardRef, memo, host components, etc.
_s=function overrideProps(n,r,i){n.pendingProps=Os(n.memoizedProps,r,i),n.alternate&&(n.alternate.pendingProps=n.pendingProps),as(n,Ei)},Ds=function scheduleUpdate(n){as(n,Ei)},Fs=function setSuspenseHandler(n){Rs=n};f.IsSomeRendererActing;function ReactDOMRoot(n,r){this._internalRoot=createRootImpl(n,2,r)}function ReactDOMBlockingRoot(n,r,i){this._internalRoot=createRootImpl(n,r,i)}function createRootImpl(n,r,i){
// Tag is either LegacyRoot or Concurrent Root
var u=null!=i&&!0===i.hydrate,l=(null!=i&&i.hydrationOptions,function createContainer(n,r,i,u){return createFiberRoot(n,r,i)}(n,r,u));(function markContainerAsRoot(n,r){r[Eo]=n}(l.current,n),u&&0!==r)&&function eagerlyTrapReplayableEvents(n,r){var i=getListenerMapForElement(r);// Discrete
Zn.forEach((function(n){trapReplayableEventForDocument(n,r,i)})),// Continuous
er.forEach((function(n){trapReplayableEventForDocument(n,r,i)}))}(0,9===n.nodeType?n:n.ownerDocument);return l}function isValidContainer(n){return!(!n||1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType&&(8!==n.nodeType||" react-mount-point-unstable "!==n.nodeValue))}ReactDOMRoot.prototype.render=ReactDOMBlockingRoot.prototype.render=function(n){var r=this._internalRoot;"function"===typeof arguments[1]&&error("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var i=r.containerInfo;if(8!==i.nodeType){var u=findHostInstanceWithNoPortals(r.current);u&&u.parentNode!==i&&error("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}updateContainer(n,r,null,null)},ReactDOMRoot.prototype.unmount=ReactDOMBlockingRoot.prototype.unmount=function(){"function"===typeof arguments[0]&&error("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var n=this._internalRoot,r=n.containerInfo;updateContainer(null,n,null,(function(){unmarkContainerAsRoot(r)}))};var As,Hs=f.ReactCurrentOwner,Ws=!1;function getReactRootElementInContainer(n){return n?9===n.nodeType?n.documentElement:n.firstChild:null}function legacyCreateRootFromDOMContainer(n,r){var i=r||function shouldHydrateDueToLegacyHeuristic(n){var r=getReactRootElementInContainer(n);return!(!r||1!==r.nodeType||!r.hasAttribute(te))}(n);// First clear any existing content.
if(!i)for(var u,l=!1;u=n.lastChild;)!l&&1===u.nodeType&&u.hasAttribute(te)&&(l=!0,error("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")),n.removeChild(u);return!i||r||Ws||(Ws=!0,warn("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")),function createLegacyRoot(n,r){return new ReactDOMBlockingRoot(n,0,r)}(n,i?{hydrate:!0}:void 0)}function legacyRenderSubtreeIntoContainer(n,r,i,u,l){As(i),function warnOnInvalidCallback$1(n,r){null!==n&&"function"!==typeof n&&error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r,n)}(void 0===l?null:l,"render");// TODO: Without `any` type, Flow says "Property cannot be accessed on any
// member of intersection type." Whyyyyyy.
var d,p=i._reactRootContainer;if(p){if(d=p._internalRoot,"function"===typeof l){var f=l;l=function callback(){var n=getPublicRootInstance(d);f.call(n)}}// Update
updateContainer(r,d,n,l)}else{if(
// Initial mount
p=i._reactRootContainer=legacyCreateRootFromDOMContainer(i,u),d=p._internalRoot,"function"===typeof l){var m=l;l=function callback(){var n=getPublicRootInstance(d);m.call(n)}}// Initial mount should not be batched.
unbatchedUpdates((function(){updateContainer(r,d,n,l)}))}return getPublicRootInstance(d)}function createPortal(n,r,// TODO: figure out the API for cross-renderer implementation.
i){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{
// This tag allow us to uniquely identify this as a React Portal
$$typeof:me,key:null==u?null:""+u,children:n,containerInfo:r,implementation:i}}As=function topLevelUpdateWarnings(n){if(n._reactRootContainer&&8!==n.nodeType){var r=findHostInstanceWithNoPortals(n._reactRootContainer._internalRoot.current);r&&r.parentNode!==n&&error("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var i=!!n._reactRootContainer,u=getReactRootElementInContainer(n);!(!u||!getInstanceFromNode$1(u))&&!i&&error("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),1===n.nodeType&&n.tagName&&"BODY"===n.tagName.toUpperCase()&&error("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")};var Us="16.14.0";!function setAttemptUserBlockingHydration(n){jn=n}((function attemptUserBlockingHydration$1(n){if(n.tag===_){var r=computeInteractiveExpiration(requestCurrentTimeForUpdate());as(n,r),markRetryTimeIfNotHydrated(n,r)}})),function setAttemptContinuousHydration(n){zn=n}((function attemptContinuousHydration$1(n){n.tag===_&&(as(n,3),markRetryTimeIfNotHydrated(n,3))})),function setAttemptHydrationAtCurrentPriority(n){Vn=n}((function attemptHydrationAtCurrentPriority$1(n){if(n.tag===_){var r=computeExpirationForFiber(requestCurrentTimeForUpdate(),n,null);as(n,r),markRetryTimeIfNotHydrated(n,r)}}));var Ms=!1;function createPortal$1(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!isValidContainer(r))throw Error("Target container is not a DOM element.");// TODO: pass ReactDOM portal implementation as third argument
// $FlowFixMe The Flow type is opaque but there's no way to actually create it.
return createPortal(n,r,null,i)}"function"===typeof Map&&// $FlowIssue Flow incorrectly thinks Map has no prototype
null!=Map.prototype&&"function"===typeof Map.prototype.forEach&&"function"===typeof Set&&// $FlowIssue Flow incorrectly thinks Set has no prototype
null!=Set.prototype&&"function"===typeof Set.prototype.clear&&"function"===typeof Set.prototype.forEach||error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),function setRestoreImplementation(n){B=n}((function restoreControlledState$3(n,r,i){switch(r){case"input":return void restoreControlledState(n,i);case"textarea":return void function restoreControlledState$2(n,r){
// DOM component is still mounted; update
updateWrapper$1(n,r)}(n,i);case"select":return void function restoreControlledState$1(n,r){var i=n,u=r.value;null!=u&&updateOptions(i,!!r.multiple,u,!1)}(n,i)}})),function setBatchingImplementation(n,r,i,u){Q=n,K=r,Y=i,G=u}(batchedUpdates$1,(function discreteUpdates$1(n,r,i,u,l){var d=Fl;Fl|=4;try{
// Should this
return runWithPriority$1(mi,n.bind(null,r,i,u,l))}finally{0===(Fl=d)&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}),(function flushDiscreteUpdates(){
// TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
// However, `act` uses `batchedUpdates`, so there's no way to distinguish
// those two cases. Need to fix this before exposing flushDiscreteUpdates
// as a public API.
0===(49&Fl)?(!function flushPendingDiscreteUpdates(){if(null!==Jl){
// For each root with pending discrete updates, schedule a callback to
// immediately flush them.
var n=Jl;Jl=null,n.forEach((function(n,r){markRootExpiredAtTime(r,n),ensureRootIsScheduled(r)})),// Now flush the immediate queue.
flushSyncCallbackQueue()}}(),// If the discrete updates scheduled passive effects, flush them now so that
// they fire before the next serial event.
flushPassiveEffects()):0!==(Fl&_l)&&error("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.")}),(function batchedEventUpdates$1(n,r){var i=Fl;Fl|=

2;try{return n(r)}finally{0===(Fl=i)&&
// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue()}}));var Ls={
// Keep in sync with ReactDOMUnstableNativeDependencies.js
// ReactTestUtils.js, and ReactTestUtilsAct.js. This is an array for better minification.
Events:[getInstanceFromNode$1,getNodeFromInstance$1,getFiberCurrentPropsFromNode$1,injectEventPluginsByName,M,accumulateTwoPhaseDispatches,function accumulateDirectDispatches(n){forEachAccumulated(n,accumulateDirectDispatchesSingle)},enqueueStateRestore,restoreStateIfNeeded,dispatchEvent,runEventsInBatch,flushPassiveEffects,ps]},js=function injectIntoDevTools(n){var r=n.findFiberByHostInstance,i=f.ReactCurrentDispatcher;return injectInternals(u({},n,{overrideHookState:Is,overrideProps:_s,setSuspenseHandler:Fs,scheduleUpdate:Ds,currentDispatcherRef:i,findHostInstanceByFiber:function findHostInstanceByFiber(n){var r=findCurrentHostFiber(n);return null===r?null:r.stateNode},findFiberByHostInstance:function findFiberByHostInstance(n){return r?r(n):null},
// React Refresh
findHostInstancesForRefresh:$i,scheduleRefresh:Vi,scheduleRoot:Bi,setRefreshHandler:zi,
// Enables DevTools to append owner stacks to error messages in DEV mode.
getCurrentFiber:function getCurrentFiber(){return Ie}}))}({findFiberByHostInstance:getClosestInstanceFromNode,bundleType:1,version:Us,rendererPackageName:"react-dom"});if(!js&&V&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){var zs=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
/^(https?|file):$/.test(zs)&&
// eslint-disable-next-line react-internal/no-production-logging
console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools"+("file:"===zs?"\nYou might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq":""),"font-weight:bold")}r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ls,r.createPortal=createPortal$1,r.findDOMNode=function findDOMNode(n){var r=Hs.current;return null!==r&&null!==r.stateNode&&(r.stateNode._warnedAboutRefsInRender||error("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",getComponentName(r.type)||"A component"),r.stateNode._warnedAboutRefsInRender=!0),null==n?null:1===n.nodeType?n:function findHostInstanceWithWarning(n,r){var i=get(n);if(void 0===i)throw"function"===typeof n.render?Error("Unable to find node on an unmounted component."):Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(n));var u=findCurrentHostFiber(i);if(null===u)return null;if(1&u.mode){var l=getComponentName(i.type)||"Component";Ss[l]||(Ss[l]=!0,1&i.mode?error("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s",r,r,l,getStackByFiberInDevAndProd(u)):error("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s",r,r,l,getStackByFiberInDevAndProd(u)))}return u.stateNode}(n,"findDOMNode")},r.flushSync=flushSync,r.hydrate=function hydrate(n,r,i){if(!isValidContainer(r))throw Error("Target container is not a DOM element.");// TODO: throw or warn if we couldn't hydrate?
return isContainerMarkedAsRoot(r)&&void 0===r._reactRootContainer&&error("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?"),legacyRenderSubtreeIntoContainer(null,n,r,!0,i)},r.render=function render(n,r,i){if(!isValidContainer(r))throw Error("Target container is not a DOM element.");return isContainerMarkedAsRoot(r)&&void 0===r._reactRootContainer&&error("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?"),legacyRenderSubtreeIntoContainer(null,n,r,!1,i)},r.unmountComponentAtNode=function unmountComponentAtNode(n){if(!isValidContainer(n))throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");if(isContainerMarkedAsRoot(n)&&void 0===n._reactRootContainer&&error("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?"),n._reactRootContainer){var r=getReactRootElementInContainer(n);// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
return r&&!getInstanceFromNode$1(r)&&error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."),// Unmount should not be batched.
unbatchedUpdates((function(){legacyRenderSubtreeIntoContainer(null,null,n,!1,(function(){
// $FlowFixMe This should probably use `delete container._reactRootContainer`
n._reactRootContainer=null,unmarkContainerAsRoot(n)}))})),!0}var i=getReactRootElementInContainer(n),u=!(!i||!getInstanceFromNode$1(i)),l=1===n.nodeType&&isValidContainer(n.parentNode)&&!!n.parentNode._reactRootContainer;return u&&error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",l?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1},r.unstable_batchedUpdates=batchedUpdates$1,r.unstable_createPortal=function unstable_createPortal(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Ms||(Ms=!0,warn('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')),createPortal$1(n,r,i)},r.unstable_renderSubtreeIntoContainer=function renderSubtreeIntoContainer(n,r,i,u){return function unstable_renderSubtreeIntoContainer(n,r,i,u){if(!isValidContainer(i))throw Error("Target container is not a DOM element.");if(null==n||!function has(n){return void 0!==n._reactInternalFiber}(n))throw Error("parentComponent must be a valid React Component");return legacyRenderSubtreeIntoContainer(n,r,i,!1,u)}(n,r,i,u)},r.version=Us})()},
/***/"../node_modules/react-dom/index.js":
/***/function(n,r,i){"use strict";n.exports=i("../node_modules/react-dom/cjs/react-dom.development.js")},
/***/"../node_modules/react-dom/node_modules/scheduler/cjs/scheduler-tracing.development.js":
/***/function(n,r){"use strict";
/** @license React v0.19.1
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n=0,i=0;// Counters used to generate unique IDs.
// Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.
r.__interactionsRef=null,// Listener(s) to notify when interactions begin and end.
r.__subscriberRef=null,r.__interactionsRef={current:new Set},r.__subscriberRef={current:null};var u=null;function onInteractionTraced(n){var r=!1,i=null;if(u.forEach((function(u){try{u.onInteractionTraced(n)}catch(l){r||(r=!0,i=l)}})),r)throw i}function onInteractionScheduledWorkCompleted(n){var r=!1,i=null;if(u.forEach((function(u){try{u.onInteractionScheduledWorkCompleted(n)}catch(l){r||(r=!0,i=l)}})),r)throw i}function onWorkScheduled(n,r){var i=!1,l=null;if(u.forEach((function(u){try{u.onWorkScheduled(n,r)}catch(d){i||(i=!0,l=d)}})),i)throw l}function onWorkStarted(n,r){var i=!1,l=null;if(u.forEach((function(u){try{u.onWorkStarted(n,r)}catch(d){i||(i=!0,l=d)}})),i)throw l}function onWorkStopped(n,r){var i=!1,l=null;if(u.forEach((function(u){try{u.onWorkStopped(n,r)}catch(d){i||(i=!0,l=d)}})),i)throw l}function onWorkCanceled(n,r){var i=!1,l=null;if(u.forEach((function(u){try{u.onWorkCanceled(n,r)}catch(d){i||(i=!0,l=d)}})),i)throw l}u=new Set,r.unstable_clear=function unstable_clear(n){var i=r.__interactionsRef.current;r.__interactionsRef.current=new Set;try{return n()}finally{r.__interactionsRef.current=i}},r.unstable_getCurrent=function unstable_getCurrent(){return r.__interactionsRef.current},r.unstable_getThreadID=function unstable_getThreadID(){return++i},r.unstable_subscribe=function unstable_subscribe(n){u.add(n),1===u.size&&(r.__subscriberRef.current={onInteractionScheduledWorkCompleted:onInteractionScheduledWorkCompleted,onInteractionTraced:onInteractionTraced,onWorkCanceled:onWorkCanceled,onWorkScheduled:onWorkScheduled,onWorkStarted:onWorkStarted,onWorkStopped:onWorkStopped})},r.unstable_trace=function unstable_trace(i,u,l){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,p={__count:1,id:n++,name:i,timestamp:u},f=r.__interactionsRef.current,m=new Set(f);m.add(p),r.__interactionsRef.current=m;var h,v=r.__subscriberRef.current;try{null!==v&&v.onInteractionTraced(p)}finally{try{null!==v&&v.onWorkStarted(m,d)}finally{try{h=l()}finally{r.__interactionsRef.current=f;try{null!==v&&v.onWorkStopped(m,d)}finally{p.__count--,// If no async work was scheduled for this interaction,
// Notify subscribers that it's completed.
null!==v&&0===p.__count&&v.onInteractionScheduledWorkCompleted(p)}}}}return h},r.unstable_unsubscribe=function unstable_unsubscribe(n){u.delete(n),0===u.size&&(r.__subscriberRef.current=null)},r.unstable_wrap=function unstable_wrap(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=r.__interactionsRef.current,l=r.__subscriberRef.current;null!==l&&l.onWorkScheduled(u,i),// Update the pending async work count for the current interactions.
// Update after calling subscribers in case of error.
u.forEach((function(n){n.__count++}));var d=!1;function wrapped(){var p=r.__interactionsRef.current;r.__interactionsRef.current=u,l=r.__subscriberRef.current;try{var f;try{null!==l&&l.onWorkStarted(u,i)}finally{try{f=n.apply(void 0,arguments)}finally{r.__interactionsRef.current=p,null!==l&&l.onWorkStopped(u,i)}}return f}finally{d||(
// We only expect a wrapped function to be executed once,
// But in the event that it's executed more than once–
// Only decrement the outstanding interaction counts once.
d=!0,// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
u.forEach((function(n){n.__count--,null!==l&&0===n.__count&&l.onInteractionScheduledWorkCompleted(n)})))}}return wrapped.cancel=function cancel(){l=r.__subscriberRef.current;try{null!==l&&l.onWorkCanceled(u,i)}finally{
// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
u.forEach((function(n){n.__count--,l&&0===n.__count&&l.onInteractionScheduledWorkCompleted(n)}))}},wrapped}})()},
/***/"../node_modules/react-dom/node_modules/scheduler/cjs/scheduler.development.js":
/***/function(n,r){"use strict";
/** @license React v0.19.1
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n,i,u,l,d;if(// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
"undefined"===typeof window||// Check if MessageChannel is supported, too.
"function"!==typeof MessageChannel){
// If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
// fallback to a naive implementation.
var p=null,f=null,m=function _flushCallback(){if(null!==p)try{var n=r.unstable_now();p(!0,n),p=null}catch(i){throw setTimeout(_flushCallback,0),i}},h=Date.now();r.unstable_now=function(){return Date.now()-h},n=function requestHostCallback(r){null!==p?
// Protect against re-entrancy.
setTimeout(n,0,r):(p=r,setTimeout(m,0))},i=function requestHostTimeout(n,r){f=setTimeout(n,r)},u=function cancelHostTimeout(){clearTimeout(f)},l=function shouldYieldToHost(){return!1},d=r.unstable_forceFrameRate=function(){}}else{
// Capture local references to native APIs, in case a polyfill overrides them.
var v=window.performance,g=window.Date,y=window.setTimeout,b=window.clearTimeout;if("undefined"!==typeof console){
// TODO: Scheduler no longer requires these methods to be polyfilled. But
// maybe we want to continue warning if they don't exist, to preserve the
// option to rely on it in the future?
var C=window.requestAnimationFrame,k=window.cancelAnimationFrame;// TODO: Remove fb.me link
"function"!==typeof C&&
// Using console['error'] to evade Babel and ESLint
console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof k&&
// Using console['error'] to evade Babel and ESLint
console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===typeof v&&"function"===typeof v.now)r.unstable_now=function(){return v.now()};else{var w=g.now();r.unstable_now=function(){return g.now()-w}}var T=!1,x=null,S=-1,P=5,R=0;
// `isInputPending` is not available. Since we have no way of knowing if
// there's pending input, always yield at the end of the frame.
l=function shouldYieldToHost(){return r.unstable_now()>=R},// Since we yield every frame regardless, `requestPaint` has no effect.
d=function requestPaint(){},r.unstable_forceFrameRate=function(n){n<0||n>125?
// Using console['error'] to evade Babel and ESLint
console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):P=n>0?Math.floor(1e3/n):5};var I=new MessageChannel,_=I.port2;I.port1.onmessage=function performWorkUntilDeadline(){if(null!==x){var n=r.unstable_now();// Yield after `yieldInterval` ms, regardless of where we are in the vsync
// cycle. This means there's always time remaining at the beginning of
// the message event.
R=n+P;try{x(!0,n)?
// If there's more work, schedule the next message event at the end
// of the preceding one.
_.postMessage(null):(T=!1,x=null)}catch(i){
// If a scheduler task throws, exit the current browser task so the
// error can be observed.
throw _.postMessage(null),i}}else T=!1;// Yielding to the browser will give it a chance to paint, so we can
},n=function _requestHostCallback(n){x=n,T||(T=!0,_.postMessage(null))},i=function requestHostTimeout(n,i){S=y((function(){n(r.unstable_now())}),i)},u=function cancelHostTimeout(){b(S),S=-1}}function push(n,r){var i=n.length;n.push(r),function siftUp(n,r,i){var u=i;for(;;){var l=u-1>>>1,d=n[l];if(!(void 0!==d&&compare(d,r)>0))
// The parent is smaller. Exit.
return;
// The parent is larger. Swap positions.
n[l]=r,n[u]=d,u=l}}(n,r,i)}function peek(n){var r=n[0];return void 0===r?null:r}function pop(n){var r=n[0];if(void 0!==r){var i=n.pop();return i!==r&&(n[0]=i,function siftDown(n,r,i){var u=i,l=n.length;for(;u<l;){var d=2*(u+1)-1,p=n[d],f=d+1,m=n[f];// If the left or right node is smaller, swap with the smaller of those.
if(void 0!==p&&compare(p,r)<0)void 0!==m&&compare(m,p)<0?(n[u]=m,n[f]=r,u=f):(n[u]=p,n[d]=r,u=d);else{if(!(void 0!==m&&compare(m,r)<0))
// Neither child is smaller. Exit.
return;n[u]=m,n[f]=r,u=f}}}(n,i,0)),r}return null}function compare(n,r){
// Compare sort index first, then task id.
var i=n.sortIndex-r.sortIndex;return 0!==i?i:n.id-r.id}// TODO: Use symbols?
var D=0,F=0,N=// $FlowFixMe Flow doesn't know about SharedArrayBuffer
"function"===typeof SharedArrayBuffer?new SharedArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):// $FlowFixMe Flow doesn't know about ArrayBuffer
"function"===typeof ArrayBuffer?new ArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):null,O=null!==N?new Int32Array(N):[];O[0]=0,// This is maintained with a counter, because the size of the priority queue
// array might include canceled tasks.
O[3]=0,O[1]=0;// Bytes per element is 4
var A=0,H=null,W=null,U=0;function logEvent(n){if(null!==W){var r=U;if((U+=n.length)+1>A){if((A*=2)>524288)
// Using console['error'] to evade Babel and ESLint
return console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."),void stopLoggingProfilingEvents();var i=new Int32Array(4*A);i.set(W),H=i.buffer,W=i}W.set(n,r)}}function stopLoggingProfilingEvents(){var n=H;return A=0,H=null,W=null,U=0,n}function markTaskStart(n,r){O[3]++,null!==W&&
// performance.now returns a float, representing milliseconds. When the
// event is logged, it's coerced to an int. Convert to microseconds to
// maintain extra degrees of precision.
logEvent([1,1e3*r,n.id,n.priorityLevel])}function markTaskCompleted(n,r){O[0]=0,O[1]=0,O[3]--,null!==W&&logEvent([2,1e3*r,n.id])}function markTaskYield(n,r){O[0]=0,O[1]=0,O[2]=0,null!==W&&logEvent([6,1e3*r,n.id,D])}
/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var M=[],L=[],j=1,z=null,V=3,B=!1,$=!1,q=!1;// Times out immediately
function advanceTimers(n){for(
// Check for tasks that are no longer delayed and add them to the queue.
var r=peek(L);null!==r;){if(null===r.callback)
// Timer was cancelled.
pop(L);else{if(!(r.startTime<=n))
// Remaining timers are pending.
return;
// Timer fired. Transfer to the task queue.
pop(L),r.sortIndex=r.expirationTime,push(M,r),markTaskStart(r,n),r.isQueued=!0}r=peek(L)}}function handleTimeout(r){if(q=!1,advanceTimers(r),!$)if(null!==peek(M))$=!0,n(flushWork);else{var u=peek(L);null!==u&&i(handleTimeout,u.startTime-r)}}function flushWork(n,i){!function markSchedulerUnsuspended(n){null!==W&&logEvent([8,1e3*n,F])}(i),// We'll need a host callback the next time work is scheduled.
$=!1,q&&(
// We scheduled a timeout but it's no longer needed. Cancel it.
q=!1,u()),B=!0;var l=V;try{try{return workLoop(n,i)}catch(p){if(null!==z){var d=r.unstable_now();!function markTaskErrored(n,r){O[0]=0,O[1]=0,O[3]--,null!==W&&logEvent([3,1e3*r,n.id])}(z,d),z.isQueued=!1}throw p}}finally{z=null,V=l,B=!1,function markSchedulerSuspended(n){F++,null!==W&&logEvent([7,1e3*n,F])}(r.unstable_now())}}function workLoop(n,u){var d,p,f=u;for(advanceTimers(f),z=peek(M);null!==z&&(!(z.expirationTime>f)||n&&!l());){var m=z.callback;if(null!==m){z.callback=null,V=z.priorityLevel;var h=z.expirationTime<=f;d=z,p=f,D++,O[0]=d.priorityLevel,O[1]=d.id,O[2]=D,null!==W&&logEvent([5,1e3*p,d.id,D]);var v=m(h);f=r.unstable_now(),"function"===typeof v?(z.callback=v,markTaskYield(z,f)):(markTaskCompleted(z,f),z.isQueued=!1,z===peek(M)&&pop(M)),advanceTimers(f)}else pop(M);z=peek(M)}// Return whether there's additional work
if(null!==z)return!0;var g=peek(L);return null!==g&&i(handleTimeout,g.startTime-f),!1}function timeoutForPriorityLevel(n){switch(n){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var Q=d,K={startLoggingProfilingEvents:function startLoggingProfilingEvents(){A=131072,H=new ArrayBuffer(4*A),W=new Int32Array(H),U=0},stopLoggingProfilingEvents:stopLoggingProfilingEvents,sharedProfilingBuffer:N};r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=K,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function unstable_cancelCallback(n){n.isQueued&&(!function markTaskCanceled(n,r){O[3]--,null!==W&&logEvent([4,1e3*r,n.id])}(n,r.unstable_now()),n.isQueued=!1),// Null out the callback to indicate the task has been canceled. (Can't
// remove from the queue because you can't remove arbitrary nodes from an
// array based heap, only the first one.)
n.callback=null},r.unstable_continueExecution=function unstable_continueExecution(){$||B||($=!0,n(flushWork))},r.unstable_getCurrentPriorityLevel=function unstable_getCurrentPriorityLevel(){return V},r.unstable_getFirstCallbackNode=function unstable_getFirstCallbackNode(){return peek(M)},r.unstable_next=function unstable_next(n){var r;switch(V){case 1:case 2:case 3:
// Shift down to normal priority
r=3;break;default:
// Anything lower than normal priority should remain at the current level.
r=V}var i=V;V=r;try{return n()}finally{V=i}},r.unstable_pauseExecution=function unstable_pauseExecution(){},r.unstable_requestPaint=Q,r.unstable_runWithPriority=function unstable_runWithPriority(n,r){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var i=V;V=n;try{return r()}finally{V=i}},r.unstable_scheduleCallback=function unstable_scheduleCallback(l,d,p){var f,m,h=r.unstable_now();if("object"===typeof p&&null!==p){var v=p.delay;f="number"===typeof v&&v>0?h+v:h,m="number"===typeof p.timeout?p.timeout:timeoutForPriorityLevel(l)}else m=timeoutForPriorityLevel(l),f=h;var g=f+m,y={id:j++,callback:d,priorityLevel:l,startTime:f,expirationTime:g,sortIndex:-1,isQueued:!1};return f>h?(
// This is a delayed task.
y.sortIndex=f,push(L,y),null===peek(M)&&y===peek(L)&&(
// All tasks are delayed, and this is the task with the earliest delay.
q?
// Cancel an existing timeout.
u():q=!0,// Schedule a timeout.
i(handleTimeout,f-h))):(y.sortIndex=g,push(M,y),markTaskStart(y,h),y.isQueued=!0,// Schedule a host callback, if needed. If we're already performing work,
// wait until the next time we yield.
$||B||($=!0,n(flushWork))),y},r.unstable_shouldYield=function unstable_shouldYield(){var n=r.unstable_now();advanceTimers(n);var i=peek(M);return i!==z&&null!==z&&null!==i&&null!==i.callback&&i.startTime<=n&&i.expirationTime<z.expirationTime||l()},r.unstable_wrapCallback=function unstable_wrapCallback(n){var r=V;return function(){
// This is a fork of runWithPriority, inlined for performance.
var i=V;V=r;try{return n.apply(this,arguments)}finally{V=i}}}})()},
/***/"../node_modules/react-dom/node_modules/scheduler/index.js":
/***/function(n,r,i){"use strict";n.exports=i("../node_modules/react-dom/node_modules/scheduler/cjs/scheduler.development.js")},
/***/"../node_modules/react-dom/node_modules/scheduler/tracing.js":
/***/function(n,r,i){"use strict";n.exports=i("../node_modules/react-dom/node_modules/scheduler/cjs/scheduler-tracing.development.js")},
/***/"../node_modules/react/cjs/react-jsx-runtime.development.js":
/***/function(n,r,i){"use strict";
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n=i("../node_modules/react/index.js"),u=60103,l=60106;// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
r.Fragment=60107;var d=60108,p=60114,f=60109,m=60110,h=60112,v=60113,g=60120,y=60115,b=60116,C=60121,k=60122,w=60117,T=60129,x=60131;if("function"===typeof Symbol&&Symbol.for){var S=Symbol.for;u=S("react.element"),l=S("react.portal"),r.Fragment=S("react.fragment"),d=S("react.strict_mode"),p=S("react.profiler"),f=S("react.provider"),m=S("react.context"),h=S("react.forward_ref"),v=S("react.suspense"),g=S("react.suspense_list"),y=S("react.memo"),b=S("react.lazy"),C=S("react.block"),k=S("react.server.block"),w=S("react.fundamental"),S("react.scope"),S("react.opaque.id"),T=S("react.debug_trace_mode"),S("react.offscreen"),x=S("react.legacy_hidden")}var P="function"===typeof Symbol&&Symbol.iterator;var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function error(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];printWarning("error",n,i)}function printWarning(n,r,i){var u=R.ReactDebugCurrentFrame,l="";if(D){var d=getComponentName(D.type),p=D._owner;l+=function describeComponentFrame(n,r,i){var u="";if(r){var l=r.fileName,d=l.replace(I,"");
// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(d)){var p=l.match(I);if(p){var f=p[1];if(f)d=f.replace(I,"")+"/"+d}}u=" (at "+d+":"+r.lineNumber+")"}else i&&(u=" (created by "+i+")");return"\n    in "+(n||"Unknown")+u}(d,D._source,p&&getComponentName(p.type))}""!==(l+=u.getStackAddendum())&&(r+="%s",i=i.concat([l]));var f=i.map((function(n){return""+n}));// Careful: RN currently depends on this prefix
f.unshift("Warning: "+r),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[n],console,f)}// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
var I=/^(.*)[\\\/]/;function getComponentName(n){if(null==n)
// Host root, text node or just invalid type.
return null;if("number"===typeof n.tag&&error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof n)return n.displayName||n.name||null;if("string"===typeof n)return n;switch(n){case r.Fragment:return"Fragment";case l:return"Portal";case p:return"Profiler";case d:return"StrictMode";case v:return"Suspense";case g:return"SuspenseList"}if("object"===typeof n)switch(n.$$typeof){case m:return"Context.Consumer";case f:return"Context.Provider";case h:return function getWrappedName(n,r,i){var u=r.displayName||r.name||"";return n.displayName||(""!==u?i+"("+u+")":i)}(n,n.render,"ForwardRef");case y:return getComponentName(n.type);case C:return getComponentName(n.render);case b:var i=function refineResolvedLazyComponent(n){return 1===n._status?n._result:null}(n);if(i)return getComponentName(i)}return null}var _={},D=(R.ReactDebugCurrentFrame,null);function setCurrentlyValidatingElement(n){D=n}var F,N,O,A=R.ReactCurrentOwner,H=Object.prototype.hasOwnProperty,W={key:!0,ref:!0,__self:!0,__source:!0};O={};
/**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */
function jsxDEV(n,r,i,l,d){var p,f={},m=null,h=null;// Reserved names are extracted
// Remaining properties are added to a new props object
for(p in// Currently, key can be spread in as a prop. This causes a potential
// issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
// or <div key="Hi" {...props} /> ). We want to deprecate key spread,
// but as an intermediary step, we will use jsxDEV for everything except
// <div {...props} key="Hi" />, because we aren't currently able to tell if
// key is explicitly declared to be undefined or not.
void 0!==i&&(m=""+i),function hasValidKey(n){if(H.call(n,"key")){var r=Object.getOwnPropertyDescriptor(n,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==n.key}(r)&&(m=""+r.key),function hasValidRef(n){if(H.call(n,"ref")){var r=Object.getOwnPropertyDescriptor(n,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==n.ref}(r)&&(h=r.ref,function warnIfStringRefCannotBeAutoConverted(n,r){if("string"===typeof n.ref&&A.current&&r&&A.current.stateNode!==r){var i=getComponentName(A.current.type);O[i]||(error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',getComponentName(A.current.type),n.ref),O[i]=!0)}}(r,d)),r)H.call(r,p)&&!W.hasOwnProperty(p)&&(f[p]=r[p]);// Resolve default props
if(n&&n.defaultProps){var v=n.defaultProps;for(p in v)void 0===f[p]&&(f[p]=v[p])}if(m||h){var g="function"===typeof n?n.displayName||n.name||"Unknown":n;m&&function defineKeyPropWarningGetter(n,r){var i=function warnAboutAccessingKey(){F||(F=!0,error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(n,"key",{get:i,configurable:!0})}(f,g),h&&function defineRefPropWarningGetter(n,r){var i=function warnAboutAccessingRef(){N||(N=!0,error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(n,"ref",{get:i,configurable:!0})}
/**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */(f,g)}return function ReactElement(n,r,i,l,d,p,f){var m={
// This tag allows us to uniquely identify this as a React Element
$$typeof:u,
// Built-in properties that belong on the element
type:n,key:r,ref:i,props:f,
// Record the component responsible for creating this element.
_owner:p,
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
_store:{}};// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
return Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),// self and source are DEV only properties.
Object.defineProperty(m,"_self",{configurable:!1,enumerable:!1,writable:!1,value:l}),// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(m,"_source",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m}(n,m,h,d,l,A.current,f)}var U,M=R.ReactCurrentOwner;R.ReactDebugCurrentFrame;function setCurrentlyValidatingElement$1(n){D=n}
/**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */
function isValidElement(n){return"object"===typeof n&&null!==n&&n.$$typeof===u}function getDeclarationErrorAddendum(){if(M.current){var n=getComponentName(M.current.type);if(n)return"\n\nCheck the render method of `"+n+"`."}return""}U=!1;
/**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */
var L={};
/**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
function validateExplicitKey(n,r){if(n._store&&!n._store.validated&&null==n.key){n._store.validated=!0;var i=function getCurrentComponentErrorInfo(n){var r=getDeclarationErrorAddendum();if(!r){var i="string"===typeof n?n:n.displayName||n.name;i&&(r="\n\nCheck the top-level render call using <"+i+">.")}return r}(r);if(!L[i]){L[i]=!0;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var u="";n&&n._owner&&n._owner!==M.current&&(
// Give the component that originally created this child.
u=" It was passed a child from "+getComponentName(n._owner.type)+"."),setCurrentlyValidatingElement$1(n),error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,u),setCurrentlyValidatingElement$1(null)}}}
/**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */function validateChildKeys(n,r){if("object"===typeof n)if(Array.isArray(n))for(var i=0;i<n.length;i++){var u=n[i];isValidElement(u)&&validateExplicitKey(u,r)}else if(isValidElement(n))
// This element was passed in a valid location.
n._store&&(n._store.validated=!0);else if(n){var l=function getIteratorFn(n){if(null===n||"object"!==typeof n)return null;var r=P&&n[P]||n["@@iterator"];return"function"===typeof r?r:null}(n);if("function"===typeof l&&l!==n.entries)for(var d,p=l.call(n);!(d=p.next()).done;)isValidElement(d.value)&&validateExplicitKey(d.value,r)}}
/**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */function validatePropTypes(n){var r,i=n.type;if(null!==i&&void 0!==i&&"string"!==typeof i){if("function"===typeof i)r=i.propTypes;else{if("object"!==typeof i||i.$$typeof!==h&&// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
i.$$typeof!==y)return;r=i.propTypes}if(r){
// Intentionally inside to avoid triggering lazy initializers:
var u=getComponentName(i);!function checkPropTypes(n,r,i,u,l){
// $FlowFixMe This is okay but Flow doesn't know it.
var d=Function.call.bind(Object.prototype.hasOwnProperty);for(var p in n)if(d(n,p)){var f=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!==typeof n[p]){var m=Error((u||"React class")+": "+i+" type `"+p+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[p]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}f=n[p](r,p,u,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(h){f=h}!f||f instanceof Error||(setCurrentlyValidatingElement(l),error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",i,p,typeof f),setCurrentlyValidatingElement(null)),f instanceof Error&&!(f.message in _)&&(
// Only monitor this failure once because there tends to be a lot of the
// same error.
_[f.message]=!0,setCurrentlyValidatingElement(l),error("Failed %s type: %s",i,f.message),setCurrentlyValidatingElement(null))}}(r,n.props,"prop",u,n)}else if(void 0!==i.PropTypes&&!U){U=!0,error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",getComponentName(i)||"Unknown")}"function"!==typeof i.getDefaultProps||i.getDefaultProps.isReactClassApproved||error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}
/**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */function jsxWithValidation(n,i,l,S,P,R){var I=// Experimental Create Event Handle API.
function isValidElementType(n){return"string"===typeof n||"function"===typeof n||n===r.Fragment||n===p||n===T||n===d||n===v||n===g||n===x||"object"===typeof n&&null!==n&&(n.$$typeof===b||n.$$typeof===y||n.$$typeof===f||n.$$typeof===m||n.$$typeof===h||n.$$typeof===w||n.$$typeof===C||n[0]===k);// Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
}(n);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!I){var _="";(void 0===n||"object"===typeof n&&null!==n&&0===Object.keys(n).length)&&(_+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var D,F=function getSourceInfoErrorAddendum(n){return void 0!==n?"\n\nCheck your code at "+n.fileName.replace(/^.*[\\\/]/,"")+":"+n.lineNumber+".":""}(P);_+=F||getDeclarationErrorAddendum(),null===n?D="null":Array.isArray(n)?D="array":void 0!==n&&n.$$typeof===u?(D="<"+(getComponentName(n.type)||"Unknown")+" />",_=" Did you accidentally export a JSX literal instead of a component?"):D=typeof n,error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",D,_)}var N=jsxDEV(n,i,l,P,R);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==N)return N;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(I){var O=i.children;if(void 0!==O)if(S)if(Array.isArray(O)){for(var A=0;A<O.length;A++)validateChildKeys(O[A],n);Object.freeze&&Object.freeze(O)}else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else validateChildKeys(O,n)}return n===r.Fragment?function validateFragmentProps(n){for(var r=Object.keys(n.props),i=0;i<r.length;i++){var u=r[i];if("children"!==u&&"key"!==u){setCurrentlyValidatingElement$1(n),error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",u),setCurrentlyValidatingElement$1(null);break}}null!==n.ref&&(setCurrentlyValidatingElement$1(n),error("Invalid attribute `ref` supplied to `React.Fragment`."),setCurrentlyValidatingElement$1(null))}(N):validatePropTypes(N),N}// These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.
var j=function jsxWithValidationDynamic(n,r,i){return jsxWithValidation(n,r,i,!1)},z=function jsxWithValidationStatic(n,r,i){return jsxWithValidation(n,r,i,!0)};// we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions
r.jsx=j,r.jsxs=z})()},
/***/"../node_modules/react/cjs/react.development.js":
/***/function(n,r,i){"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n=i("../node_modules/object-assign/index.js"),u=i("../node_modules/prop-types/checkPropTypes.js"),l="function"===typeof Symbol&&Symbol.for,d=l?Symbol.for("react.element"):60103,p=l?Symbol.for("react.portal"):60106,f=l?Symbol.for("react.fragment"):60107,m=l?Symbol.for("react.strict_mode"):60108,h=l?Symbol.for("react.profiler"):60114,v=l?Symbol.for("react.provider"):60109,g=l?Symbol.for("react.context"):60110,y=l?Symbol.for("react.concurrent_mode"):60111,b=l?Symbol.for("react.forward_ref"):60112,C=l?Symbol.for("react.suspense"):60113,k=l?Symbol.for("react.suspense_list"):60120,w=l?Symbol.for("react.memo"):60115,T=l?Symbol.for("react.lazy"):60116,x=l?Symbol.for("react.block"):60121,S=l?Symbol.for("react.fundamental"):60117,P=l?Symbol.for("react.responder"):60118,R=l?Symbol.for("react.scope"):60119,I="function"===typeof Symbol&&Symbol.iterator;function getIteratorFn(n){if(null===n||"object"!==typeof n)return null;var r=I&&n[I]||n["@@iterator"];return"function"===typeof r?r:null}
/**
     * Keeps track of the current dispatcher.
     */var _={
/**
       * @internal
       * @type {ReactComponent}
       */
current:null},D={
/**
       * @internal
       * @type {ReactComponent}
       */
current:null},F=/^(.*)[\\\/]/;
/**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */function getComponentName(n){if(null==n)
// Host root, text node or just invalid type.
return null;if("number"===typeof n.tag&&error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof n)return n.displayName||n.name||null;if("string"===typeof n)return n;switch(n){case f:return"Fragment";case p:return"Portal";case h:return"Profiler";case m:return"StrictMode";case C:return"Suspense";case k:return"SuspenseList"}if("object"===typeof n)switch(n.$$typeof){case g:return"Context.Consumer";case v:return"Context.Provider";case b:return function getWrappedName(n,r,i){var u=r.displayName||r.name||"";return n.displayName||(""!==u?i+"("+u+")":i)}(n,n.render,"ForwardRef");case w:return getComponentName(n.type);case x:return getComponentName(n.render);case T:var r=function refineResolvedLazyComponent(n){return 1===n._status?n._result:null}(n);if(r)return getComponentName(r)}return null}var N={},O=null;function setCurrentlyValidatingElement(n){O=n}
// Stack implementation injected by the current renderer.
N.getCurrentStack=null,N.getStackAddendum=function(){var n="";// Add an extra top frame while an element is being validated
if(O){var r=getComponentName(O.type),i=O._owner;n+=function describeComponentFrame(n,r,i){var u="";if(r){var l=r.fileName,d=l.replace(F,"");
// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(d)){var p=l.match(F);if(p){var f=p[1];f&&(d=f.replace(F,"")+"/"+d)}}u=" (at "+d+":"+r.lineNumber+")"}else i&&(u=" (created by "+i+")");return"\n    in "+(n||"Unknown")+u}(r,O._source,i&&getComponentName(i.type))}// Delegate to the injected renderer-specific implementation
var u=N.getCurrentStack;return u&&(n+=u()||""),n};
/**
     * Used by act() to track whether you're inside an act() scope.
     */
var A={ReactCurrentDispatcher:_,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:D,IsSomeRendererActing:{current:!1},
// Used by renderers to avoid bundling object-assign twice in UMD bundles:
assign:n};// by calls to these methods by a Babel plugin.
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function warn(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];printWarning("warn",n,i)}function error(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];printWarning("error",n,i)}function printWarning(n,r,i){if(!(i.length>0&&"string"===typeof i[i.length-1]&&0===i[i.length-1].indexOf("\n    in"))){var u=A.ReactDebugCurrentFrame.getStackAddendum();""!==u&&(r+="%s",i=i.concat([u]))}var l=i.map((function(n){return""+n}));// Careful: RN currently depends on this prefix
l.unshift("Warning: "+r),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[n],console,l);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var d=0,p="Warning: "+r.replace(/%s/g,(function(){return i[d++]}));throw new Error(p)}catch(f){}}n(A,{
// These should not be included in production.
ReactDebugCurrentFrame:N,
// Shim for React DOM 16.0.0 which still destructured (but not used) this.
// TODO: remove in React 17.0.
ReactComponentTreeHook:{}});var H={};function warnNoop(n,r){var i=n.constructor,u=i&&(i.displayName||i.name)||"ReactClass",l=u+"."+r;H[l]||(error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",r,u),H[l]=!0)}
/**
     * This is the abstract API for an update queue.
     */var W={
/**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
isMounted:function isMounted(n){return!1},
/**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
enqueueForceUpdate:function enqueueForceUpdate(n,r,i){warnNoop(n,"forceUpdate")},
/**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
enqueueReplaceState:function enqueueReplaceState(n,r,i,u){warnNoop(n,"replaceState")},
/**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
enqueueSetState:function enqueueSetState(n,r,i,u){warnNoop(n,"setState")}},U={};
/**
     * Base class helpers for the updating state of a component.
     */
function Component(n,r,i){this.props=n,this.context=r,// If a component has string refs, we will assign a different object later.
this.refs=U,// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=i||W}Object.freeze(U),Component.prototype.isReactComponent={},
/**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */
Component.prototype.setState=function(n,r){if("object"!==typeof n&&"function"!==typeof n&&null!=n)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,r,"setState")},
/**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */
Component.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};var M={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},L=function defineDeprecationWarning(n,r){Object.defineProperty(Component.prototype,n,{get:function get(){warn("%s(...) is deprecated in plain JavaScript React classes. %s",r[0],r[1])}})};for(var j in M)M.hasOwnProperty(j)&&L(j,M[j]);function ComponentDummy(){}
/**
     * Convenience component with default shallow equality check for sCU.
     */
function PureComponent(n,r,i){this.props=n,this.context=r,// If a component has string refs, we will assign a different object later.
this.refs=U,this.updater=i||W}ComponentDummy.prototype=Component.prototype;var z=PureComponent.prototype=new ComponentDummy;z.constructor=PureComponent,// Avoid an extra prototype jump for these methods.
n(z,Component.prototype),z.isPureReactComponent=!0;var V,B,$,q=Object.prototype.hasOwnProperty,Q={key:!0,ref:!0,__self:!0,__source:!0};function hasValidRef(n){if(q.call(n,"ref")){var r=Object.getOwnPropertyDescriptor(n,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==n.ref}function hasValidKey(n){if(q.call(n,"key")){var r=Object.getOwnPropertyDescriptor(n,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==n.key}function defineKeyPropWarningGetter(n,r){var i=function warnAboutAccessingKey(){V||(V=!0,error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",r))};i.isReactWarning=!0,Object.defineProperty(n,"key",{get:i,configurable:!0})}function defineRefPropWarningGetter(n,r){var i=function warnAboutAccessingRef(){B||(B=!0,error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",r))};i.isReactWarning=!0,Object.defineProperty(n,"ref",{get:i,configurable:!0})}function warnIfStringRefCannotBeAutoConverted(n){if("string"===typeof n.ref&&D.current&&n.__self&&D.current.stateNode!==n.__self){var r=getComponentName(D.current.type);$[r]||(error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref',getComponentName(D.current.type),n.ref),$[r]=!0)}}
/**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */$={};var K=function ReactElement(n,r,i,u,l,p,f){var m={
// This tag allows us to uniquely identify this as a React Element
$$typeof:d,
// Built-in properties that belong on the element
type:n,key:r,ref:i,props:f,
// Record the component responsible for creating this element.
_owner:p,
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
_store:{}};// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
return Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),// self and source are DEV only properties.
Object.defineProperty(m,"_self",{configurable:!1,enumerable:!1,writable:!1,value:u}),// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(m,"_source",{configurable:!1,enumerable:!1,writable:!1,value:l}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m};
/**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */function createElement(n,r,i){var u,l={},d=null,p=null,f=null,m=null;// Reserved names are extracted
if(null!=r)// Remaining properties are added to a new props object
for(u in hasValidRef(r)&&(p=r.ref,warnIfStringRefCannotBeAutoConverted(r)),hasValidKey(r)&&(d=""+r.key),f=void 0===r.__self?null:r.__self,m=void 0===r.__source?null:r.__source,r)q.call(r,u)&&!Q.hasOwnProperty(u)&&(l[u]=r[u]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var h=arguments.length-2;if(1===h)l.children=i;else if(h>1){for(var v=Array(h),g=0;g<h;g++)v[g]=arguments[g+2];Object.freeze&&Object.freeze(v),l.children=v}// Resolve default props
if(n&&n.defaultProps){var y=n.defaultProps;for(u in y)void 0===l[u]&&(l[u]=y[u])}if(d||p){var b="function"===typeof n?n.displayName||n.name||"Unknown":n;d&&defineKeyPropWarningGetter(l,b),p&&defineRefPropWarningGetter(l,b)}return K(n,d,p,f,m,D.current,l)}
/**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */
function cloneElement(r,i,u){if(null===r||void 0===r)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var l,d,p=n({},r.props),f=r.key,m=r.ref,h=r._self,v=r._source,g=r._owner;// Original props are copied
if(null!=i)for(l in hasValidRef(i)&&(
// Silently steal the ref from the parent.
m=i.ref,g=D.current),hasValidKey(i)&&(f=""+i.key),r.type&&r.type.defaultProps&&(d=r.type.defaultProps),i)q.call(i,l)&&!Q.hasOwnProperty(l)&&(void 0===i[l]&&void 0!==d?
// Resolve default props
p[l]=d[l]:p[l]=i[l]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var y=arguments.length-2;if(1===y)p.children=u;else if(y>1){for(var b=Array(y),C=0;C<y;C++)b[C]=arguments[C+2];p.children=b}return K(r.type,f,m,h,v,g,p)}
/**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */function isValidElement(n){return"object"===typeof n&&null!==n&&n.$$typeof===d}
/**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */
var Y=!1,G=/\/+/g;function escapeUserProvidedKey(n){return(""+n).replace(G,"$&/")}var X,J=[];function getPooledTraverseContext(n,r,i,u){if(J.length){var l=J.pop();return l.result=n,l.keyPrefix=r,l.func=i,l.context=u,l.count=0,l}return{result:n,keyPrefix:r,func:i,context:u,count:0}}function releaseTraverseContext(n){n.result=null,n.keyPrefix=null,n.func=null,n.context=null,n.count=0,J.length<10&&J.push(n)}
/**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */function traverseAllChildrenImpl(n,r,i,u){var l=typeof n;"undefined"!==l&&"boolean"!==l||(
// All of the above are perceived as null.
n=null);var f,m=!1;if(null===n)m=!0;else switch(l){case"string":case"number":m=!0;break;case"object":switch(n.$$typeof){case d:case p:m=!0}}if(m)return i(u,n,// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
""===r?"."+getComponentKey(n,0):r),1;var h=0,v=""===r?".":r+":";// Count of children found in the current subtree.
if(Array.isArray(n))for(var g=0;g<n.length;g++)h+=traverseAllChildrenImpl(f=n[g],v+getComponentKey(f,g),i,u);else{var y=getIteratorFn(n);if("function"===typeof y){
// Warn about using Maps as children
y===n.entries&&(Y||warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead."),Y=!0);for(var b,C=y.call(n),k=0;!(b=C.next()).done;)h+=traverseAllChildrenImpl(f=b.value,v+getComponentKey(f,k++),i,u)}else if("object"===l){var w;w=" If you meant to render a collection of children, use an array instead."+N.getStackAddendum();var T=""+n;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===T?"object with keys {"+Object.keys(n).join(", ")+"}":T)+")."+w)}}return h}
/**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */function traverseAllChildren(n,r,i){return null==n?0:traverseAllChildrenImpl(n,"",r,i)}
/**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */function getComponentKey(n,r){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return"object"===typeof n&&null!==n&&null!=n.key?
/**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */
function escape(n){var r={"=":"=0",":":"=2"};return"$"+(""+n).replace(/[=:]/g,(function(n){return r[n]}))}(n.key):r.toString(36);// Implicit key determined by the index in the set
}function forEachSingleChild(n,r,i){var u=n.func,l=n.context;u.call(l,r,n.count++)}
/**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */function mapSingleChildIntoContext(n,r,i){var u=n.result,l=n.keyPrefix,d=n.func,p=n.context,f=d.call(p,r,n.count++);Array.isArray(f)?mapIntoWithKeyPrefixInternal(f,u,i,(function(n){return n})):null!=f&&(isValidElement(f)&&(f=function cloneAndReplaceKey(n,r){return K(n.type,r,n.ref,n._self,n._source,n._owner,n.props)}(f,// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
l+(!f.key||r&&r.key===f.key?"":escapeUserProvidedKey(f.key)+"/")+i)),u.push(f))}function mapIntoWithKeyPrefixInternal(n,r,i,u,l){var d="";null!=i&&(d=escapeUserProvidedKey(i)+"/");var p=getPooledTraverseContext(r,d,u,l);traverseAllChildren(n,mapSingleChildIntoContext,p),releaseTraverseContext(p)}
/**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */function isValidElementType(n){return"string"===typeof n||"function"===typeof n||// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
n===f||n===y||n===h||n===m||n===C||n===k||"object"===typeof n&&null!==n&&(n.$$typeof===T||n.$$typeof===w||n.$$typeof===v||n.$$typeof===g||n.$$typeof===b||n.$$typeof===S||n.$$typeof===P||n.$$typeof===R||n.$$typeof===x)}function resolveDispatcher(){var n=_.current;if(null===n)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");return n}function getDeclarationErrorAddendum(){if(D.current){var n=getComponentName(D.current.type);if(n)return"\n\nCheck the render method of `"+n+"`."}return""}function getSourceInfoErrorAddendumForProps(n){return null!==n&&void 0!==n?function getSourceInfoErrorAddendum(n){return void 0!==n?"\n\nCheck your code at "+n.fileName.replace(/^.*[\\\/]/,"")+":"+n.lineNumber+".":""}(n.__source):""}
/**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */X=!1;var Z={};
/**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
function validateExplicitKey(n,r){if(n._store&&!n._store.validated&&null==n.key){n._store.validated=!0;var i=function getCurrentComponentErrorInfo(n){var r=getDeclarationErrorAddendum();if(!r){var i="string"===typeof n?n:n.displayName||n.name;i&&(r="\n\nCheck the top-level render call using <"+i+">.")}return r}(r);if(!Z[i]){Z[i]=!0;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var u="";n&&n._owner&&n._owner!==D.current&&(
// Give the component that originally created this child.
u=" It was passed a child from "+getComponentName(n._owner.type)+"."),setCurrentlyValidatingElement(n),error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',i,u),setCurrentlyValidatingElement(null)}}}
/**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */function validateChildKeys(n,r){if("object"===typeof n)if(Array.isArray(n))for(var i=0;i<n.length;i++){var u=n[i];isValidElement(u)&&validateExplicitKey(u,r)}else if(isValidElement(n))
// This element was passed in a valid location.
n._store&&(n._store.validated=!0);else if(n){var l=getIteratorFn(n);if("function"===typeof l&&l!==n.entries)for(var d,p=l.call(n);!(d=p.next()).done;)isValidElement(d.value)&&validateExplicitKey(d.value,r)}}
/**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */function validatePropTypes(n){var r=n.type;if(null!==r&&void 0!==r&&"string"!==typeof r){var i,l=getComponentName(r);if("function"===typeof r)i=r.propTypes;else{if("object"!==typeof r||r.$$typeof!==b&&// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
r.$$typeof!==w)return;i=r.propTypes}i?(setCurrentlyValidatingElement(n),u(i,n.props,"prop",l,N.getStackAddendum),setCurrentlyValidatingElement(null)):void 0===r.PropTypes||X||(X=!0,error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",l||"Unknown")),"function"!==typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}
/**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */function validateFragmentProps(n){setCurrentlyValidatingElement(n);for(var r=Object.keys(n.props),i=0;i<r.length;i++){var u=r[i];if("children"!==u&&"key"!==u){error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",u);break}}null!==n.ref&&error("Invalid attribute `ref` supplied to `React.Fragment`."),setCurrentlyValidatingElement(null)}function createElementWithValidation(n,r,i){var u=isValidElementType(n);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!u){var l="";(void 0===n||"object"===typeof n&&null!==n&&0===Object.keys(n).length)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p,m=getSourceInfoErrorAddendumForProps(r);l+=m||getDeclarationErrorAddendum(),null===n?p="null":Array.isArray(n)?p="array":void 0!==n&&n.$$typeof===d?(p="<"+(getComponentName(n.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):p=typeof n,error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",p,l)}var h=createElement.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==h)return h;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(u)for(var v=2;v<arguments.length;v++)validateChildKeys(arguments[v],n);return n===f?validateFragmentProps(h):validatePropTypes(h),h}var ee=!1;try{var te=Object.freeze({}),ne=new Map([[te,null]]),re=new Set([te]);// This is necessary for Rollup to not consider these unused.
// https://github.com/rollup/rollup/issues/1771
// TODO: we can remove these if Rollup fixes the bug.
ne.set(0,0),re.add(0)}catch(le){}var oe=createElementWithValidation,ae=function cloneElementWithValidation(n,r,i){for(var u=cloneElement.apply(this,arguments),l=2;l<arguments.length;l++)validateChildKeys(arguments[l],u.type);return validatePropTypes(u),u},ie=function createFactoryWithValidation(n){var r=createElementWithValidation.bind(null,n);return r.type=n,ee||(ee=!0,warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),// Legacy hook: remove it
Object.defineProperty(r,"type",{enumerable:!1,get:function get(){return warn("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:n}),n}}),r},ue={map:function mapChildren(n,r,i){if(null==n)return n;var u=[];return mapIntoWithKeyPrefixInternal(n,u,null,r,i),u}
/**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */,forEach:function forEachChildren(n,r,i){if(null==n)return n;var u=getPooledTraverseContext(null,null,r,i);traverseAllChildren(n,forEachSingleChild,u),releaseTraverseContext(u)},count:function countChildren(n){return traverseAllChildren(n,(function(){return null}),null)}
/**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */,toArray:function toArray(n){var r=[];return mapIntoWithKeyPrefixInternal(n,r,null,(function(n){return n})),r}
/**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */,only:function onlyChild(n){if(!isValidElement(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};r.Children=ue,r.Component=Component,r.Fragment=f,r.Profiler=h,r.PureComponent=PureComponent,r.StrictMode=m,r.Suspense=C,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=ae,r.createContext=function createContext(n,r){void 0===r?r=null:null!==r&&"function"!==typeof r&&error("createContext: Expected the optional second argument to be a function. Instead received: %s",r);var i={$$typeof:g,_calculateChangedBits:r,
// As a workaround to support multiple concurrent renderers, we categorize
// some renderers as primary and others as secondary. We only expect
// there to be two concurrent renderers at most: React Native (primary) and
// Fabric (secondary); React DOM (primary) and React ART (secondary).
// Secondary renderers store their context values on separate fields.
_currentValue:n,_currentValue2:n,
// Used to track how many concurrent renderers this context currently
// supports within in a single renderer. Such as parallel server rendering.
_threadCount:0,
// These are circular
Provider:null,Consumer:null};i.Provider={$$typeof:v,_context:i};var u=!1,l=!1,d={$$typeof:g,_context:i,_calculateChangedBits:i._calculateChangedBits};// $FlowFixMe: Flow complains about not setting a value, which is intentional here
return Object.defineProperties(d,{Provider:{get:function get(){return l||(l=!0,error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),i.Provider},set:function set(n){i.Provider=n}},_currentValue:{get:function get(){return i._currentValue},set:function set(n){i._currentValue=n}},_currentValue2:{get:function get(){return i._currentValue2},set:function set(n){i._currentValue2=n}},_threadCount:{get:function get(){return i._threadCount},set:function set(n){i._threadCount=n}},Consumer:{get:function get(){return u||(u=!0,error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),i.Consumer}}}),// $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
i.Consumer=d,i._currentRenderer=null,i._currentRenderer2=null,i},r.createElement=oe,r.createFactory=ie,r.createRef=// an immutable object with a single mutable value
function createRef(){var n={current:null};return Object.seal(n),n},r.forwardRef=function forwardRef(n){return null!=n&&n.$$typeof===w?error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!==typeof n?error("forwardRef requires a render function but was given %s.",null===n?"null":typeof n):0!==n.length&&2!==n.length&&error("forwardRef render functions accept exactly two parameters: props and ref. %s",1===n.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=n&&(null==n.defaultProps&&null==n.propTypes||error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?")),{$$typeof:b,render:n}},r.isValidElement=isValidElement,r.lazy=function lazy(n){var r,i,u={$$typeof:T,_ctor:n,
// React uses these fields to store the result.
_status:-1,_result:null};return Object.defineProperties(u,{defaultProps:{configurable:!0,get:function get(){return r},set:function set(n){error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=n,// Match production behavior more closely:
Object.defineProperty(u,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function get(){return i},set:function set(n){error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),i=n,// Match production behavior more closely:
Object.defineProperty(u,"propTypes",{enumerable:!0})}}}),u},r.memo=function memo(n,r){return isValidElementType(n)||error("memo: The first argument must be a component. Instead received: %s",null===n?"null":typeof n),{$$typeof:w,type:n,compare:void 0===r?null:r}},r.useCallback=function useCallback(n,r){return resolveDispatcher().useCallback(n,r)},r.useContext=function useContext(n,r){var i=resolveDispatcher();// TODO: add a more generic warning for invalid values.
if(void 0!==r&&error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",r,"number"===typeof r&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==n._context){var u=n._context;// Don't deduplicate because this legitimately causes bugs
// and nobody should be using this in existing code.
u.Consumer===n?error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):u.Provider===n&&error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return i.useContext(n,r)},r.useDebugValue=function useDebugValue(n,r){return resolveDispatcher().useDebugValue(n,r)},r.useEffect=function useEffect(n,r){return resolveDispatcher().useEffect(n,r)},r.useImperativeHandle=function useImperativeHandle(n,r,i){return resolveDispatcher().useImperativeHandle(n,r,i)},r.useLayoutEffect=function useLayoutEffect(n,r){return resolveDispatcher().useLayoutEffect(n,r)},r.useMemo=function useMemo(n,r){return resolveDispatcher().useMemo(n,r)},r.useReducer=function useReducer(n,r,i){return resolveDispatcher().useReducer(n,r,i)},r.useRef=function useRef(n){return resolveDispatcher().useRef(n)},r.useState=function useState(n){return resolveDispatcher().useState(n)},r.version="16.14.0"})()},
/***/"../node_modules/react/index.js":
/***/function(n,r,i){"use strict";n.exports=i("../node_modules/react/cjs/react.development.js")},
/***/"../node_modules/react/jsx-runtime.js":
/***/function(n,r,i){"use strict";n.exports=i("../node_modules/react/cjs/react-jsx-runtime.development.js")},
/***/"../node_modules/scheduler/cjs/scheduler.development.js":
/***/function(n,r){"use strict";
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n,i,u,l;if("object"===typeof performance&&"function"===typeof performance.now){var d=performance;r.unstable_now=function(){return d.now()}}else{var p=Date,f=p.now();r.unstable_now=function(){return p.now()-f}}if(// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
"undefined"===typeof window||// Check if MessageChannel is supported, too.
"function"!==typeof MessageChannel){
// If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
// fallback to a naive implementation.
var m=null,h=null,v=function _flushCallback(){if(null!==m)try{var n=r.unstable_now();m(!0,n),m=null}catch(i){throw setTimeout(_flushCallback,0),i}};n=function requestHostCallback(r){null!==m?
// Protect against re-entrancy.
setTimeout(n,0,r):(m=r,setTimeout(v,0))},i=function requestHostTimeout(n,r){h=setTimeout(n,r)},u=function cancelHostTimeout(){clearTimeout(h)},r.unstable_shouldYield=function(){return!1},l=r.unstable_forceFrameRate=function(){}}else{
// Capture local references to native APIs, in case a polyfill overrides them.
var g=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){
// TODO: Scheduler no longer requires these methods to be polyfilled. But
// maybe we want to continue warning if they don't exist, to preserve the
// option to rely on it in the future?
var b=window.requestAnimationFrame,C=window.cancelAnimationFrame;"function"!==typeof b&&
// Using console['error'] to evade Babel and ESLint
console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof C&&
// Using console['error'] to evade Babel and ESLint
console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var k=!1,w=null,T=-1,x=5,S=0;
// `isInputPending` is not available. Since we have no way of knowing if
// there's pending input, always yield at the end of the frame.
r.unstable_shouldYield=function(){return r.unstable_now()>=S},// Since we yield every frame regardless, `requestPaint` has no effect.
l=function requestPaint(){},r.unstable_forceFrameRate=function(n){n<0||n>125?
// Using console['error'] to evade Babel and ESLint
console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=n>0?Math.floor(1e3/n):5};var P=new MessageChannel,R=P.port2;P.port1.onmessage=function performWorkUntilDeadline(){if(null!==w){var n=r.unstable_now();// Yield after `yieldInterval` ms, regardless of where we are in the vsync
// cycle. This means there's always time remaining at the beginning of
// the message event.
S=n+x;try{w(!0,n)?
// If there's more work, schedule the next message event at the end
// of the preceding one.
R.postMessage(null):(k=!1,w=null)}catch(i){
// If a scheduler task throws, exit the current browser task so the
// error can be observed.
throw R.postMessage(null),i}}else k=!1;// Yielding to the browser will give it a chance to paint, so we can
},n=function _requestHostCallback(n){w=n,k||(k=!0,R.postMessage(null))},i=function requestHostTimeout(n,i){T=g((function(){n(r.unstable_now())}),i)},u=function cancelHostTimeout(){y(T),T=-1}}function push(n,r){var i=n.length;n.push(r),function siftUp(n,r,i){var u=i;for(;;){var l=u-1>>>1,d=n[l];if(!(void 0!==d&&compare(d,r)>0))
// The parent is smaller. Exit.
return;
// The parent is larger. Swap positions.
n[l]=r,n[u]=d,u=l}}(n,r,i)}function peek(n){var r=n[0];return void 0===r?null:r}function pop(n){var r=n[0];if(void 0!==r){var i=n.pop();return i!==r&&(n[0]=i,function siftDown(n,r,i){var u=i,l=n.length;for(;u<l;){var d=2*(u+1)-1,p=n[d],f=d+1,m=n[f];// If the left or right node is smaller, swap with the smaller of those.
if(void 0!==p&&compare(p,r)<0)void 0!==m&&compare(m,p)<0?(n[u]=m,n[f]=r,u=f):(n[u]=p,n[d]=r,u=d);else{if(!(void 0!==m&&compare(m,r)<0))
// Neither child is smaller. Exit.
return;n[u]=m,n[f]=r,u=f}}}(n,i,0)),r}return null}function compare(n,r){
// Compare sort index first, then task id.
var i=n.sortIndex-r.sortIndex;return 0!==i?i:n.id-r.id}// TODO: Use symbols?
/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var I=[],_=[],D=1,F=null,N=3,O=!1,A=!1,H=!1;// Times out immediately
function advanceTimers(n){for(
// Check for tasks that are no longer delayed and add them to the queue.
var r=peek(_);null!==r;){if(null===r.callback)
// Timer was cancelled.
pop(_);else{if(!(r.startTime<=n))
// Remaining timers are pending.
return;
// Timer fired. Transfer to the task queue.
pop(_),r.sortIndex=r.expirationTime,push(I,r)}r=peek(_)}}function handleTimeout(r){if(H=!1,advanceTimers(r),!A)if(null!==peek(I))A=!0,n(flushWork);else{var u=peek(_);null!==u&&i(handleTimeout,u.startTime-r)}}function flushWork(n,r){A=!1,H&&(
// We scheduled a timeout but it's no longer needed. Cancel it.
H=!1,u()),O=!0;var i=N;try{
// No catch in prod code path.
return workLoop(n,r)}finally{F=null,N=i,O=!1}}function workLoop(n,u){var l=u;for(advanceTimers(l),F=peek(I);null!==F&&(!(F.expirationTime>l)||n&&!r.unstable_shouldYield());){var d=F.callback;if("function"===typeof d){F.callback=null,N=F.priorityLevel;var p=d(F.expirationTime<=l);l=r.unstable_now(),"function"===typeof p?F.callback=p:F===peek(I)&&pop(I),advanceTimers(l)}else pop(I);F=peek(I)}// Return whether there's additional work
if(null!==F)return!0;var f=peek(_);return null!==f&&i(handleTimeout,f.startTime-l),!1}var W=l;r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function unstable_cancelCallback(n){
// remove from the queue because you can't remove arbitrary nodes from an
// array based heap, only the first one.)
n.callback=null},r.unstable_continueExecution=function unstable_continueExecution(){A||O||(A=!0,n(flushWork))},r.unstable_getCurrentPriorityLevel=function unstable_getCurrentPriorityLevel(){return N},r.unstable_getFirstCallbackNode=function unstable_getFirstCallbackNode(){return peek(I)},r.unstable_next=function unstable_next(n){var r;switch(N){case 1:case 2:case 3:
// Shift down to normal priority
r=3;break;default:
// Anything lower than normal priority should remain at the current level.
r=N}var i=N;N=r;try{return n()}finally{N=i}},r.unstable_pauseExecution=function unstable_pauseExecution(){},r.unstable_requestPaint=W,r.unstable_runWithPriority=function unstable_runWithPriority(n,r){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var i=N;N=n;try{return r()}finally{N=i}},r.unstable_scheduleCallback=function unstable_scheduleCallback(l,d,p){var f,m,h=r.unstable_now();if("object"===typeof p&&null!==p){var v=p.delay;f="number"===typeof v&&v>0?h+v:h}else f=h;switch(l){case 1:m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}var g=f+m,y={id:D++,callback:d,priorityLevel:l,startTime:f,expirationTime:g,sortIndex:-1};return f>h?(
// This is a delayed task.
y.sortIndex=f,push(_,y),null===peek(I)&&y===peek(_)&&(
// All tasks are delayed, and this is the task with the earliest delay.
H?
// Cancel an existing timeout.
u():H=!0,// Schedule a timeout.
i(handleTimeout,f-h))):(y.sortIndex=g,push(I,y),// wait until the next time we yield.
A||O||(A=!0,n(flushWork))),y},r.unstable_wrapCallback=function unstable_wrapCallback(n){var r=N;return function(){
// This is a fork of runWithPriority, inlined for performance.
var i=N;N=r;try{return n.apply(this,arguments)}finally{N=i}}}})()},
/***/"../node_modules/scheduler/index.js":
/***/function(n,r,i){"use strict";n.exports=i("../node_modules/scheduler/cjs/scheduler.development.js")},
/***/"./src/components/App/App.css":
/***/function(n,r,i){"use strict";i.r(r),
// extracted by mini-css-extract-plugin
/* harmony default export */r.default={}},
/***/"./src/components/Demo/Demo.css":
/***/function(n,r,i){"use strict";i.r(r),
// extracted by mini-css-extract-plugin
/* harmony default export */r.default={}},
/***/"./src/index.css":
/***/function(n,r,i){"use strict";i.r(r),
// extracted by mini-css-extract-plugin
/* harmony default export */r.default={}},
/***/"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/***/function(n,r,i){"use strict";function _arrayLikeToArray(n,r){(null==r||r>n.length)&&(r=n.length);for(var i=0,u=new Array(r);i<r;i++)u[i]=n[i];return u}
/***/i.r(r),
/* harmony export */i.d(r,{
/* harmony export */default:function(){/* binding */return _arrayLikeToArray}
/* harmony export */})},
/***/"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/function(n,r,i){"use strict";function _arrayWithHoles(n){if(Array.isArray(n))return n}
/***/i.r(r),
/* harmony export */i.d(r,{
/* harmony export */default:function(){/* binding */return _arrayWithHoles}
/* harmony export */})},
/***/"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/***/function(n,r,i){"use strict";function _iterableToArrayLimit(n,r){var i=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=i){var u,l,d=[],p=!0,f=!1;try{for(i=i.call(n);!(p=(u=i.next()).done)&&(d.push(u.value),!r||d.length!==r);p=!0);}catch(m){f=!0,l=m}finally{try{p||null==i.return||i.return()}finally{if(f)throw l}}return d}}
/***/i.r(r),
/* harmony export */i.d(r,{
/* harmony export */default:function(){/* binding */return _iterableToArrayLimit}
/* harmony export */})},
/***/"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/***/function(n,r,i){"use strict";function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/i.r(r),
/* harmony export */i.d(r,{
/* harmony export */default:function(){/* binding */return _nonIterableRest}
/* harmony export */})},
/***/"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/***/function(n,r,i){"use strict";i.r(r),
/* harmony export */i.d(r,{
/* harmony export */default:function(){/* binding */return _slicedToArray}
/* harmony export */});
/* harmony import */var u=i("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),l=i("./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js"),d=i("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),p=i("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");
/* harmony import */function _slicedToArray(n,r){return(0,u.default)(n)||(0,l.default)(n,r)||(0,d.default)(n,r)||(0,p.default)()}
/***/},
/***/"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/***/function(n,r,i){"use strict";i.r(r),
/* harmony export */i.d(r,{
/* harmony export */default:function(){/* binding */return _unsupportedIterableToArray}
/* harmony export */});
/* harmony import */var u=i("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(n,r){if(n){if("string"===typeof n)return(0,u.default)(n,r);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,u.default)(n,r):void 0}}
/***/}
/******/},r={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function __webpack_require__(i){
/******/ // Check if module is in cache
/******/var u=r[i];
/******/if(void 0!==u)
/******/return u.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var l=r[i]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[i](l,l.exports,__webpack_require__),l.exports;
/******/}
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=n,
/******/ // define getter functions for harmony exports
/******/__webpack_require__.d=function(n,r){
/******/for(var i in r)
/******/__webpack_require__.o(r,i)&&!__webpack_require__.o(n,i)&&
/******/Object.defineProperty(n,i,{enumerable:!0,get:r[i]})
/******/;
/******/},
/******/__webpack_require__.f={},
/******/ // This file contains only the entry chunk.
/******/ // The chunk loading function for additional chunks
/******/__webpack_require__.e=function(n){
/******/return Promise.all(Object.keys(__webpack_require__.f).reduce((function(r,i){
/******/
/******/return __webpack_require__.f[i](n,r),r;
/******/}),[]));
/******/},
/******/ // This function allow to reference async chunks
/******/__webpack_require__.u=function(n){
/******/ // return url for filenames based on template
/******/return"static/js/"+n+".d4fd698b.chunk.js";
/******/},
/******/ // This function allow to reference async chunks
/******/__webpack_require__.miniCssF=function(n){
/******/},
/******/__webpack_require__.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}
/******/,function(){
/******/var n={},r="example:";
/******/
/******/ // loadScript function to load a script via script tag
/******/__webpack_require__.l=function(i,u,l,d){
/******/if(n[i])n[i].push(u);else{
/******/var p,f;
/******/if(void 0!==l)
/******/for(
/******/var m=document.getElementsByTagName("script"),h=0;h<m.length;h++){
/******/var v=m[h];
/******/if(v.getAttribute("src")==i||v.getAttribute("data-webpack")==r+l){p=v;break}
/******/}
/******/
/******/p||(
/******/f=!0,
/******/
/******/(
/******/p=document.createElement("script")).charset="utf-8",
/******/p.timeout=120,
/******/__webpack_require__.nc&&
/******/p.setAttribute("nonce",__webpack_require__.nc)
/******/,p.setAttribute("data-webpack",r+l),
/******/p.src=i)
/******/,n[i]=[u];
/******/var onScriptComplete=function(r,u){
/******/ // avoid mem leaks in IE.
/******/p.onerror=p.onload=null,
/******/clearTimeout(g);
/******/var l=n[i];
/******/
/******/if(delete n[i],
/******/p.parentNode&&p.parentNode.removeChild(p),
/******/l&&l.forEach((function(n){return n(u)})),r)return r(u);
/******/}
/******/,g=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:p}),12e4);
/******/
/******/p.onerror=onScriptComplete.bind(null,p.onerror),
/******/p.onload=onScriptComplete.bind(null,p.onload),
/******/f&&document.head.appendChild(p)}}}(),
/******/ // define __esModule on exports
/******/__webpack_require__.r=function(n){
/******/"undefined"!==typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(n,"__esModule",{value:!0})},
/******/__webpack_require__.p="/state/",function(){
/******/ // no baseURI
/******/
/******/ // object to store loaded and loading chunks
/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/var n={
/******/main:0
/******/};
/******/
/******/__webpack_require__.f.j=function(r,i){
/******/ // JSONP chunk loading for javascript
/******/var u=__webpack_require__.o(n,r)?n[r]:void 0;
/******/if(0!==u)// 0 means "already installed".
/******/
/******/ // a Promise means "currently loading".
/******/if(u)
/******/i.push(u[2]);
/******/else{// all chunks have JS
/******/ // setup Promise in chunk cache
/******/var l=new Promise((function(i,l){u=n[r]=[i,l]}));
/******/i.push(u[2]=l);
/******/
/******/ // start chunk loading
/******/var d=__webpack_require__.p+__webpack_require__.u(r),p=new Error;
/******/ // create error before stack unwound to get useful stacktrace later
/******/
/******/__webpack_require__.l(d,(function(i){
/******/if(__webpack_require__.o(n,r)&&(
/******/
/******/0!==(u=n[r])&&(n[r]=void 0)
/******/,u)){
/******/var l=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.src;
/******/
/******/p.message="Loading chunk "+r+" failed.\n("+l+": "+d+")",
/******/p.name="ChunkLoadError",
/******/p.type=l,
/******/p.request=d,
/******/u[1](p)}
/******/
/******/}),"chunk-"+r,r)}
/******/
/******/};
/******/
/******/ // no prefetching
/******/
/******/ // no preloaded
/******/
/******/ // no HMR
/******/
/******/ // no HMR manifest
/******/
/******/ // no on chunks loaded
/******/
/******/ // install a JSONP callback for chunk loading
/******/var webpackJsonpCallback=function(r,i){
/******/var u,l,d=i[0],p=i[1],f=i[2],m=0;
/******/
/******/if(d.some((function(r){return 0!==n[r]}))){
/******/for(u in p)
/******/__webpack_require__.o(p,u)&&(
/******/__webpack_require__.m[u]=p[u])
/******/;
/******/if(f)f(__webpack_require__);
/******/}
/******/
/******/for(r&&r(i);m<d.length;m++)
/******/l=d[m],
/******/__webpack_require__.o(n,l)&&n[l]&&
/******/n[l][0]()
/******/,n[l]=0;
/******/
/******/}
/******/
/******/,r=self.webpackChunkexample=self.webpackChunkexample||[];
/******/r.forEach(webpackJsonpCallback.bind(null,0)),
/******/r.push=webpackJsonpCallback.bind(null,r.push.bind(r))}();
/******/
/************************************************************************/
var i={};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function(){"use strict";__webpack_require__.r(i);
/* harmony import */__webpack_require__("../node_modules/react/index.js");
/* harmony import */var n=__webpack_require__("../node_modules/react-dom/index.js"),r=(__webpack_require__("./src/index.css"),__webpack_require__("./src/components/App/App.js")),u=__webpack_require__("./src/reportWebVitals.js"),l=__webpack_require__("../node_modules/react/jsx-runtime.js"),d=document.getElementById("root");d.hasChildNodes()?n.hydrate((0,l.jsx)(r.default,{}),d):n.render((0,l.jsx)(r.default,{}),d),// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,u.default)(console.log)}()}();
//# sourceMappingURL=main.ab555e88.js.map