/******/!function(){// webpackBootstrap
/******/"use strict";
/******/var e={
/***/"./src/components/App/App.js":
/***/function(e,t,n){n.r(t);
/* harmony import */var r=n("./src/components/Demo/Demo.js"),o=(n("./src/components/App/App.css"),n("./node_modules/react/jsx-runtime.js"));
/* harmony import */ /* harmony default export */t.default=function App(){return(0,o.jsx)("div",{className:"app",children:(0,o.jsxs)("div",{className:"app-container",children:[(0,o.jsxs)("header",{className:"app-header",children:[(0,o.jsx)("h1",{className:"title",children:"@bit-about/state"}),(0,o.jsx)("small",{children:"\ud83d\ude80 Tiny and powerful React hook-based state management library."}),(0,o.jsxs)("ul",{className:"menu",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"link",href:"https://github.com/bit-about/state",target:"_blank",rel:"noopener noreferrer",children:"github"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"link",href:"https://www.npmjs.com/package/@bit-about/state",target:"_blank",rel:"noopener noreferrer",children:"npm"})})]})]}),(0,o.jsx)(r.default,{})]})})}},
/***/"./src/components/Demo/Demo.js":
/***/function(e,t,n){n.r(t);
/* harmony import */n("./src/components/Demo/Demo.css");
/* harmony import */var r=n("./node_modules/react/jsx-runtime.js");/* harmony default export */t.default=function Demo(){return console.log({NODE_ENV:"development",PUBLIC_URL:"/state",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),(0,r.jsx)("div",{className:"demo-container",children:"dev"})}},
/***/"./src/reportWebVitals.js":
/***/function(e,t,n){n.r(t);/* harmony default export */t.default=function reportWebVitals(e){e&&e instanceof Function&&n.e(/* import() */"node_modules_web-vitals_dist_web-vitals_js").then(n.bind(n,"./node_modules/web-vitals/dist/web-vitals.js")).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)}))}},
/***/"./node_modules/object-assign/index.js":
/***/function(e){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function toObject(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function shouldUseNative(){try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");// eslint-disable-line no-new-wrappers
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(e,o){for(var a,i,s=toObject(e),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))n.call(a,l)&&(s[l]=a[l]);if(t){i=t(a);for(var c=0;c<i.length;c++)r.call(a,i[c])&&(s[i[c]]=a[i[c]])}}return s}},
/***/"./node_modules/react-dom/cjs/react-dom.development.js":
/***/function(e,t,n){(function(){var e=n("./node_modules/react/index.js"),r=n("./node_modules/object-assign/index.js"),o=n("./node_modules/scheduler/index.js"),a=n("./node_modules/scheduler/tracing.js"),i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;// by calls to these methods by a Babel plugin.
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function warn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];printWarning("warn",e,n)}function error(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];printWarning("error",e,n)}function printWarning(e,t,n){var r=i.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(t+="%s",n=n.concat([r]));var o=n.map((function(e){return""+e}));// Careful: RN currently depends on this prefix
o.unshift("Warning: "+t),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[e],console,o)}if(!e)throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");var s=10,u=11,l=12,c=13,d=14,p=15,f=17,m=19,h=20,g=22,v=23,y=24,b=!1,k=new Set,C={},w={};// Trust the developer to only use possibleRegistrationNames in true
function registerTwoPhaseEvent(e,t){registerDirectEvent(e,t),registerDirectEvent(e+"Capture",t)}function registerDirectEvent(e,t){C[e]&&error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),C[e]=t;var n=e.toLowerCase();w[n]=e,"onDoubleClick"===e&&(w.ondblclick=e);for(var r=0;r<t.length;r++)k.add(t[r])}var S=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),E=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",R=E+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",x="data-reactroot",T=new RegExp("^["+E+"]["+R+"]*$"),P=Object.prototype.hasOwnProperty,I={},_={};// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
function isAttributeNameSafe(e){return!!P.call(_,e)||!P.call(I,e)&&(T.test(e)?(_[e]=!0,!0):(I[e]=!0,error("Invalid attribute name: `%s`",e),!1))}function shouldIgnoreAttribute(e,t,n){return null!==t?0===t.type:!n&&(e.length>2&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))}function shouldRemoveAttributeWithWarning(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":// $FlowIssue symbol is perfectly valid here
case"symbol":
// eslint-disable-line
return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;var o=e.toLowerCase().slice(0,5);return"data-"!==o&&"aria-"!==o;default:return!1}}function shouldRemoveAttribute(e,t,n,r){if(null===t||"undefined"===typeof t)return!0;if(shouldRemoveAttributeWithWarning(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||t<1}return!1}function getPropertyInfo(e){return F.hasOwnProperty(e)?F[e]:null}function PropertyInfoRecord(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var F={};// These props are reserved by React. They shouldn't be written to the DOM.
["children","dangerouslySetInnerHTML",// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
"defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((function(e){F[e]=new PropertyInfoRecord(e,0,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0],n=e[1];F[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
n,// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
["contentEditable","draggable","spellCheck","value"].forEach((function(e){F[e]=new PropertyInfoRecord(e,2,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){F[e]=new PropertyInfoRecord(e,2,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// These are HTML boolean attributes.
["allowFullScreen","async",// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
"autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless",// Microdata
"itemScope"].forEach((function(e){F[e]=new PropertyInfoRecord(e,3,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
["checked",// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
"multiple","muted","selected"].forEach((function(e){F[e]=new PropertyInfoRecord(e,3,!0,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
["capture","download"].forEach((function(e){F[e]=new PropertyInfoRecord(e,4,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// These are HTML attributes that must be positive numbers.
["cols","rows","size","span"].forEach((function(e){F[e]=new PropertyInfoRecord(e,6,!1,// mustUseProperty
e,// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)})),// These are HTML attributes that must be numbers.
["rowSpan","start"].forEach((function(e){F[e]=new PropertyInfoRecord(e,5,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)}));var D=/[\-\:]([a-z])/g,N=function capitalize(e){return e[1].toUpperCase()};// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((function(e){var t=e.replace(D,N);F[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
e,null,// attributeNamespace
!1,// sanitizeURL
!1)})),// String SVG attributes with the xlink namespace.
["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((function(e){var t=e.replace(D,N);F[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
e,"http://www.w3.org/1999/xlink",!1,// sanitizeURL
!1)})),// String SVG attributes with the xml namespace.
["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(D,N);F[t]=new PropertyInfoRecord(t,1,!1,// mustUseProperty
e,"http://www.w3.org/XML/1998/namespace",!1,// sanitizeURL
!1)})),// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
["tabIndex","crossOrigin"].forEach((function(e){F[e]=new PropertyInfoRecord(e,1,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!1,// sanitizeURL
!1)}));F.xlinkHref=new PropertyInfoRecord("xlinkHref",1,!1,// mustUseProperty
"xlink:href","http://www.w3.org/1999/xlink",!0,// sanitizeURL
!1),["src","href","action","formAction"].forEach((function(e){F[e]=new PropertyInfoRecord(e,1,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,// attributeNamespace
!0,// sanitizeURL
!0)}));// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */
var O=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,L=!1;function sanitizeURL(e){!L&&O.test(e)&&(L=!0,error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}
/**
     * Get the value for a property on a node. Only used in DEV for SSR validation.
     * The "expected" argument is used as a hint of what the expected value is.
     * Some properties have multiple equivalent values.
     */function getValueForProperty(e,t,n,r){if(r.mustUseProperty)return e[r.propertyName];r.sanitizeURL&&
// If we haven't fully disabled javascript: URLs, and if
// the hydration is successful of a javascript: URL, we
// still want to warn on the client.
sanitizeURL(""+n);var o=r.attributeName,a=null;if(4===r.type){if(e.hasAttribute(o)){var i=e.getAttribute(o);return""===i||(shouldRemoveAttribute(t,n,r,!1)?i:i===""+n?n:i)}}else if(e.hasAttribute(o)){if(shouldRemoveAttribute(t,n,r,!1))
// We had an attribute but shouldn't have had one, so read it
// for the error message.
return e.getAttribute(o);if(3===r.type)
// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return n;// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
a=e.getAttribute(o)}return shouldRemoveAttribute(t,n,r,!1)?null===a?n:a:a===""+n?n:a}
/**
     * Get the value for a attribute on a node. Only used in DEV for SSR validation.
     * The third argument is used as a hint of what the expected value is. Some
     * attributes have multiple equivalent values.
     */function getValueForAttribute(e,t,n){if(isAttributeNameSafe(t)){// If the object is an opaque reference ID, it's expected that
// the next prop is different than the server value, so just return
// expected
if(function isOpaqueHydratingObject(e){return null!==e&&"object"===typeof e&&e.$$typeof===K}(n))return n;if(!e.hasAttribute(t))return void 0===n?void 0:null;var r=e.getAttribute(t);return r===""+n?n:r}}
/**
     * Sets the value for a property on a node.
     *
     * @param {DOMElement} node
     * @param {string} name
     * @param {*} value
     */function setValueForProperty(e,t,n,r){var o=getPropertyInfo(t);if(!shouldIgnoreAttribute(t,o,r))// If the prop isn't in the special list, treat it as a simple attribute.
if(shouldRemoveAttribute(t,n,o,r)&&(n=null),r||null===o){if(isAttributeNameSafe(t)){var a=t;null===n?e.removeAttribute(a):e.setAttribute(a,""+n)}}else if(o.mustUseProperty){var i=o.propertyName;if(null===n){var s=o.type;e[i]=3!==s&&""}else
// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
e[i]=n}// The rest are treated as attributes with special cases.
else{var u=o.attributeName,l=o.attributeNamespace;if(null===n)e.removeAttribute(u);else{var c,d=o.type;3===d||4===d&&!0===n?
// If attribute type is boolean, we know for sure it won't be an execution sink
// and we won't require Trusted Type here.
c="":(c=""+n,o.sanitizeURL&&sanitizeURL(c.toString())),l?e.setAttributeNS(l,u,c):e.setAttribute(u,c)}}}// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var H=60103,U=60106,A=60107,M=60108,W=60114,j=60109,V=60110,z=60112,B=60113,$=60120,q=60115,Q=60116,Y=60121,K=60128,G=60129,X=60130,J=60131;if("function"===typeof Symbol&&Symbol.for){var Z=Symbol.for;H=Z("react.element"),U=Z("react.portal"),A=Z("react.fragment"),M=Z("react.strict_mode"),W=Z("react.profiler"),j=Z("react.provider"),V=Z("react.context"),z=Z("react.forward_ref"),B=Z("react.suspense"),$=Z("react.suspense_list"),q=Z("react.memo"),Q=Z("react.lazy"),Y=Z("react.block"),Z("react.server.block"),Z("react.fundamental"),Z("react.scope"),K=Z("react.opaque.id"),G=Z("react.debug_trace_mode"),X=Z("react.offscreen"),J=Z("react.legacy_hidden")}var ee="function"===typeof Symbol&&Symbol.iterator;function getIteratorFn(e){if(null===e||"object"!==typeof e)return null;var t=ee&&e[ee]||e["@@iterator"];return"function"===typeof t?t:null}// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var te,ne,re,oe,ae,ie,se,ue=0;function disabledLog(){}function disableLogs(){if(0===ue){
/* eslint-disable react-internal/no-production-logging */
te=console.log,ne=console.info,re=console.warn,oe=console.error,ae=console.group,ie=console.groupCollapsed,se=console.groupEnd;// https://github.com/facebook/react/issues/19099
var e={configurable:!0,enumerable:!0,value:disabledLog,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ue++}function reenableLogs(){if(0===--ue){
/* eslint-disable react-internal/no-production-logging */
var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:r({},e,{value:te}),info:r({},e,{value:ne}),warn:r({},e,{value:re}),error:r({},e,{value:oe}),group:r({},e,{value:ae}),groupCollapsed:r({},e,{value:ie}),groupEnd:r({},e,{value:se})})}ue<0&&error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}disabledLog.__reactDisabledLog=!0;var le,ce=i.ReactCurrentDispatcher;function describeBuiltInComponentFrame(e,t,n){if(void 0===le)
// Extract the VM specific prefix used by each line.
try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);le=r&&r[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+le+e}var de,pe=!1,fe="function"===typeof WeakMap?WeakMap:Map;function describeNativeComponentFrame(e,t){
// If something asked for a stack inside a fake render, it should get ignored.
if(!e||pe)return"";var n,r=de.get(e);if(void 0!==r)return r;pe=!0;var o,a=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0,o=ce.current,// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
ce.current=null,disableLogs();try{
// This should throw.
if(t){
// Something should be setting the props in the constructor.
var i=function Fake(){throw Error()};// $FlowFixMe
if(Object.defineProperty(i.prototype,"props",{set:function set(){
// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"===typeof Reflect&&Reflect.construct){
// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(i,[])}catch(m){n=m}Reflect.construct(e,[],i)}else{try{i.call()}catch(m){n=m}e.call(i.prototype)}}else{try{throw Error()}catch(m){n=m}e()}}catch(h){
// This is inlined manually because closure doesn't do it for us.
if(h&&n&&"string"===typeof h.stack){for(
// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var s=h.stack.split("\n"),u=n.stack.split("\n"),l=s.length-1,c=u.length-1;l>=1&&c>=0&&s[l]!==u[c];)
// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
c--;for(;l>=1&&c>=0;l--,c--)
// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(s[l]!==u[c]){
// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==l||1!==c)do{// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(l--,--c<0||s[l]!==u[c]){
// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var d="\n"+s[l].replace(" at new "," at ");// Return the line we found.
return"function"===typeof e&&de.set(e,d),d}}while(l>=1&&c>=0);break}}}finally{pe=!1,ce.current=o,reenableLogs(),Error.prepareStackTrace=a}// Fallback to just using the name if we couldn't make it throw.
var p=e?e.displayName||e.name:"",f=p?describeBuiltInComponentFrame(p):"";return"function"===typeof e&&de.set(e,f),f}function describeFunctionComponentFrame(e,t,n){return describeNativeComponentFrame(e,!1)}function describeUnknownElementTypeFrameInDEV(e,t,n){if(null==e)return"";if("function"===typeof e)return describeNativeComponentFrame(e,function shouldConstruct(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"===typeof e)return describeBuiltInComponentFrame(e);switch(e){case B:return describeBuiltInComponentFrame("Suspense");case $:return describeBuiltInComponentFrame("SuspenseList")}if("object"===typeof e)switch(e.$$typeof){case z:return describeFunctionComponentFrame(e.render);case q:
// Memo may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(e.type,t,n);case Y:return describeFunctionComponentFrame(e._render);case Q:var r=e,o=r._payload,a=r._init;try{
// Lazy may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(a(o),t,n)}catch(i){}}return""}function describeFiber(e){e._debugOwner&&e._debugOwner.type,e._debugSource;switch(e.tag){case 5:return describeBuiltInComponentFrame(e.type);case 16:return describeBuiltInComponentFrame("Lazy");case c:return describeBuiltInComponentFrame("Suspense");case m:return describeBuiltInComponentFrame("SuspenseList");case 0:case 2:case p:return describeFunctionComponentFrame(e.type);case u:return describeFunctionComponentFrame(e.type.render);case g:return describeFunctionComponentFrame(e.type._render);case 1:return function describeClassComponentFrame(e,t,n){return describeNativeComponentFrame(e,!0)}(e.type);default:return""}}function getStackByFiberInDevAndProd(e){try{var t="",n=e;do{t+=describeFiber(n),n=n.return}while(n);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}function getContextName(e){return e.displayName||"Context"}function getComponentName(e){if(null==e)
// Host root, text node or just invalid type.
return null;if("number"===typeof e.tag&&error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case A:return"Fragment";case U:return"Portal";case W:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case $:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case V:return getContextName(e)+".Consumer";case j:return getContextName(e._context)+".Provider";case z:return function getWrappedName(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(""!==r?n+"("+r+")":n)}(e,e.render,"ForwardRef");case q:return getComponentName(e.type);case Y:return getComponentName(e._render);case Q:var t=e,n=t._payload,r=t._init;try{return getComponentName(r(n))}catch(o){return null}}return null}de=new fe;var me=i.ReactDebugCurrentFrame,he=null,ge=!1;function getCurrentFiberOwnerNameInDevOrNull(){if(null===he)return null;var e=he._debugOwner;return null!==e&&"undefined"!==typeof e?getComponentName(e.type):null}function getCurrentFiberStackInDev(){return null===he?"":getStackByFiberInDevAndProd(he);// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
}function resetCurrentFiber(){me.getCurrentStack=null,he=null,ge=!1}function setCurrentFiber(e){me.getCurrentStack=getCurrentFiberStackInDev,he=e,ge=!1}function setIsRendering(e){ge=e}// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function toString(e){return""+e}function getToStringValue(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:
// function, symbol are assigned as empty strings
return""}}var ve={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0};function checkControlledValueProps(e,t){ve[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||null==t.value||error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||null==t.checked||error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function isCheckable(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function getTracker(e){return e._valueTracker}function track(e){getTracker(e)||(// TODO: Once it's just Fiber we can move this to node._wrapperState
e._valueTracker=function trackValueOnNode(e){var t=isCheckable(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;Object.defineProperty(e,t,{configurable:!0,get:function get(){return o.call(this)},set:function set(e){r=""+e,a.call(this,e)}}),// We could've passed this the first time
// but it triggers a bug in IE11 and Edge 14/15.
// Calling defineProperty() again should be equivalent.
// https://github.com/facebook/react/issues/11768
Object.defineProperty(e,t,{enumerable:n.enumerable});var i={getValue:function getValue(){return r},setValue:function setValue(e){r=""+e},stopTracking:function stopTracking(){!function detachTracker(e){e._valueTracker=null}(e),delete e[t]}};return i}}(e))}function updateValueIfChanged(e){if(!e)return!1;var t=getTracker(e);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!t)return!0;var n=t.getValue(),r=function getValueFromNode(e){var t="";return e?t=isCheckable(e)?e.checked?"true":"false":e.value:t}(e);return r!==n&&(t.setValue(r),!0)}function getActiveElement(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ye=!1,be=!1,ke=!1,Ce=!1;function isControlled(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}
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
     */function getHostProps(e,t){var n=e,o=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=o?o:n._wrapperState.initialChecked})}function initWrapperState(e,t){checkControlledValueProps(0,t),void 0===t.checked||void 0===t.defaultChecked||be||(error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component",t.type),be=!0),void 0===t.value||void 0===t.defaultValue||ye||(error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component",t.type),ye=!0);var n=e,r=null==t.defaultValue?"":t.defaultValue;n._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:getToStringValue(null!=t.value?t.value:r),controlled:isControlled(t)}}function updateChecked(e,t){var n=e,r=t.checked;null!=r&&setValueForProperty(n,"checked",r,!1)}function updateWrapper(e,t){var n=e,r=isControlled(t);n._wrapperState.controlled||!r||Ce||(error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),Ce=!0),!n._wrapperState.controlled||r||ke||(error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),ke=!0),updateChecked(e,t);var o=getToStringValue(t.value),a=t.type;if(null!=o)"number"===a?(0===o&&""===n.value||// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
n.value!=o)&&(n.value=toString(o)):n.value!==toString(o)&&(n.value=toString(o));else if("submit"===a||"reset"===a)
// Submit/reset inputs need the attribute removed completely to avoid
// blank-text buttons.
return void n.removeAttribute("value");
// When syncing the value attribute, the value comes from a cascade of
// properties:
//  1. The value React property
//  2. The defaultValue React property
//  3. Otherwise there should be no change
t.hasOwnProperty("value")?setDefaultValue(n,t.type,o):t.hasOwnProperty("defaultValue")&&setDefaultValue(n,t.type,getToStringValue(t.defaultValue)),
// When syncing the checked attribute, it only changes when it needs
// to be removed, such as transitioning from a checkbox into a text input
null==t.checked&&null!=t.defaultChecked&&(n.defaultChecked=!!t.defaultChecked)}function postMountWrapper(e,t,n){var r=e;// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;// Avoid setting value attribute on submit/reset inputs as it overrides the
// default value provided by the browser. See: #12872
if(("submit"===o||"reset"===o)&&(void 0===t.value||null===t.value))return;var a=toString(r._wrapperState.initialValue);// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
n||
// When syncing the value attribute, the value property should use
// the wrapperState._initialValue property. This uses:
//   1. The value React property when present
//   2. The defaultValue React property when present
//   3. An empty string
a!==r.value&&(r.value=a),
// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
r.defaultValue=a}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var i=r.name;""!==i&&(r.name=""),
// When syncing the checked attribute, both the checked property and
// attribute are assigned at the same time using defaultChecked. This uses:
//   1. The checked React property when present
//   2. The defaultChecked React property when present
//   3. Otherwise, false
r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!r._wrapperState.initialChecked,""!==i&&(r.name=i)}function restoreControlledState(e,t){var n=e;updateWrapper(n,t),function updateNamedCousins(e,t){var n=t.name;if("radio"===t.type&&null!=n){for(var r=e;r.parentNode;)r=r.parentNode;// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),a=0;a<o.length;a++){var i=o[a];if(i!==e&&i.form===e.form){// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var s=getFiberCurrentPropsFromNode(i);if(!s)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
updateValueIfChanged(i),// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
updateWrapper(i,s)}}}}// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".

// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text

// https://github.com/facebook/react/issues/7253
(n,t)}function setDefaultValue(e,t,n){// Focused number inputs synchronize on blur. See ChangeEventPlugin.js
"number"===t&&getActiveElement(e.ownerDocument)===e||(null==n?e.defaultValue=toString(e._wrapperState.initialValue):e.defaultValue!==toString(n)&&(e.defaultValue=toString(n)))}var we,Se=!1,Ee=!1;
/**
     * Implements an <option> host component that warns when `selected` is set.
     */
function validateProps(t,n){
// This mirrors the code path above, but runs for hydration too.
// Warn about invalid children here so that client and hydration are consistent.
// TODO: this seems like it could cause a DEV-only throw for hydration
// if children contains a non-element object. We should try to avoid that.
"object"===typeof n.children&&null!==n.children&&e.Children.forEach(n.children,(function(e){null!=e&&"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&(Ee||(Ee=!0,error("Only strings and numbers are supported as <option> children.")))})),// TODO: Remove support for `selected` in <option>.
null==n.selected||Se||(error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),Se=!0)}function getHostProps$1(t,n){var o=r({children:void 0},n),a=function flattenChildren(t){var n="";// Flatten children. We'll warn if they are invalid
// during validateProps() which runs for hydration too.
// Note that this would throw on non-element objects.
// Elements are stringified (which is normally irrelevant
// but matters for <fbt>).
return e.Children.forEach(t,(function(e){null!=e&&(n+=e)})),n}(n.children);return a&&(o.children=a),o}function getDeclarationErrorAddendum(){var e=getCurrentFiberOwnerNameInDevOrNull();return e?"\n\nCheck the render method of `"+e+"`.":""}we=!1;var Re=["value","defaultValue"];
/**
     * Validation function for `value` and `defaultValue`.
     */function updateOptions(e,t,n,r){var o=e.options;if(t){for(var a=n,i={},s=0;s<a.length;s++)
// Prefix to avoid chaos with special keys.
i["$"+a[s]]=!0;for(var u=0;u<o.length;u++){var l=i.hasOwnProperty("$"+o[u].value);o[u].selected!==l&&(o[u].selected=l),l&&r&&(o[u].defaultSelected=!0)}}else{for(
// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
var c=toString(getToStringValue(n)),d=null,p=0;p<o.length;p++){if(o[p].value===c)return o[p].selected=!0,void(r&&(o[p].defaultSelected=!0));null!==d||o[p].disabled||(d=o[p])}null!==d&&(d.selected=!0)}}
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
     */function getHostProps$2(e,t){return r({},t,{value:void 0})}function initWrapperState$1(e,t){var n=e;!function checkSelectPropTypes(e){checkControlledValueProps(0,e);for(var t=0;t<Re.length;t++){var n=Re[t];if(null!=e[n]){var r=Array.isArray(e[n]);e.multiple&&!r?error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,getDeclarationErrorAddendum()):!e.multiple&&r&&error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,getDeclarationErrorAddendum())}}}(t),n._wrapperState={wasMultiple:!!t.multiple},void 0===t.value||void 0===t.defaultValue||we||(error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),we=!0)}var xe=!1;
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
     */function getHostProps$3(e,t){var n=e;if(null!=t.dangerouslySetInnerHTML)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
// solution. The value can be a boolean or object so that's why it's forced
// to be a string.
return r({},t,{value:void 0,defaultValue:void 0,children:toString(n._wrapperState.initialValue)})}function initWrapperState$2(e,t){var n=e;checkControlledValueProps(0,t),void 0===t.value||void 0===t.defaultValue||xe||(error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",getCurrentFiberOwnerNameInDevOrNull()||"A component"),xe=!0);var r=t.value;// Only bother fetching default value if we're going to use it
if(null==r){var o=t.children,a=t.defaultValue;if(null!=o){if(error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=a)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Array.isArray(o)){if(!(o.length<=1))throw Error("<textarea> can only have at most one child.");o=o[0]}a=o}null==a&&(a=""),r=a}n._wrapperState={initialValue:getToStringValue(r)}}function updateWrapper$1(e,t){var n=e,r=getToStringValue(t.value),o=getToStringValue(t.defaultValue);if(null!=r){
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var a=toString(r);// To avoid side effects (such as losing text selection), only set value if changed
a!==n.value&&(n.value=a),null==t.defaultValue&&n.defaultValue!==a&&(n.defaultValue=a)}null!=o&&(n.defaultValue=toString(o))}function postMountWrapper$3(e,t){var n=e,r=n.textContent;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
r===n._wrapperState.initialValue&&""!==r&&null!==r&&(n.value=r)}var Te="http://www.w3.org/1999/xhtml",Pe="http://www.w3.org/1998/Math/MathML",Ie="http://www.w3.org/2000/svg",_e=Te,Fe=Ie;// Assumes there is no parent namespace.
function getIntrinsicNamespace(e){switch(e){case"svg":return Ie;case"math":return Pe;default:return Te}}function getChildNamespace(e,t){return null==e||e===Te?getIntrinsicNamespace(t):e===Ie&&"foreignObject"===t?Te:e}
/* globals MSApp */
/**
     * Create a function which has 'unsafe' privileges (required by windows8 apps)
     */var De,Ne=function createMicrosoftUnsafeLocalFunction(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction((function(){return e(t,n,r,o)}))}:e}((function(e,t){if(e.namespaceURI!==Fe||"innerHTML"in e)e.innerHTML=t;else{(
// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
De=De||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var n=De.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}})),Oe=function setTextContent(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t},Le={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},He={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};
/**
     * Support style names that may come passed in prefixed by adding permutations
     * of vendor prefixes.
     */
var Ue=["Webkit","ms","Moz","O"];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
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
function dangerousStyleValue(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||He.hasOwnProperty(e)&&He[e]?(""+t).trim():t+"px"}Object.keys(He).forEach((function(e){Ue.forEach((function(t){He[
/**
     * @param {string} prefix vendor-specific prefix, eg: Webkit
     * @param {string} key style name, eg: transitionDuration
     * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
     * WebkitTransitionDuration
     */
function prefixKey(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=He[e]}))}));var Ae=/([A-Z])/g,Me=/^ms-/;var We=/^(?:webkit|moz|o)[A-Z]/,je=/^-ms-/,Ve=/-(.)/g,ze=/;\s*$/,Be={},$e={},qe=!1,Qe=!1,Ye=function warnHyphenatedStyleName(e){Be.hasOwnProperty(e)&&Be[e]||(Be[e]=!0,error("Unsupported style property %s. Did you mean %s?",e,// As Andi Smith suggests
// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
// is converted to lowercase `ms`.
function camelize(e){return e.replace(Ve,(function(e,t){return t.toUpperCase()}))}(e.replace(je,"ms-"))))},Ke=function warnValidStyle(e,t){e.indexOf("-")>-1?Ye(e):We.test(e)?function warnBadVendoredStyleName(e){Be.hasOwnProperty(e)&&Be[e]||(Be[e]=!0,error("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))}(e):ze.test(t)&&function warnStyleValueWithSemicolon(e,t){$e.hasOwnProperty(t)&&$e[t]||($e[t]=!0,error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',e,t.replace(ze,"")))}(e,t),"number"===typeof t&&(isNaN(t)?function warnStyleValueIsNaN(e,t){qe||(qe=!0,error("`NaN` is an invalid value for the `%s` css style property.",e))}(e):isFinite(t)||function warnStyleValueIsInfinity(e,t){Qe||(Qe=!0,error("`Infinity` is an invalid value for the `%s` css style property.",e))}(e))};
/**
     * Operations for dealing with CSS properties.
     */
/**
     * This creates a string that is expected to be equivalent to the style
     * attribute generated by server-side rendering. It by-passes warnings and
     * security checks so it's not safe to use this value for anything other than
     * comparison. It is only used in DEV for SSR validation.
     */
function createDangerousStringForStyles(e){var t="",n="";for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];if(null!=o){var a=0===r.indexOf("--");t+=n+(a?r:r.replace(Ae,"-$1").toLowerCase().replace(Me,"-ms-"))+":",t+=dangerousStyleValue(r,o,a),n=";"}}return t||null}
/**
     * Sets the value for multiple styles on a node.  If a value is specified as
     * '' (empty string), the corresponding style property will be unset.
     *
     * @param {DOMElement} node
     * @param {object} styles
     */function setValueForStyles(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=0===r.indexOf("--");o||Ke(r,t[r]);var a=dangerousStyleValue(r,t[r],o);"float"===r&&(r="cssFloat"),o?n.setProperty(r,a):n[r]=a}}
/**
     * Given {color: 'red', overflow: 'hidden'} returns {
     *   color: 'color',
     *   overflowX: 'overflow',
     *   overflowY: 'overflow',
     * }. This can be read as "the overflowY property was set by the overflow
     * shorthand". That is, the values are the property that each was derived from.
     */
function expandShorthandMap(e){var t={};for(var n in e)for(var r=Le[n]||[n],o=0;o<r.length;o++)t[r[o]]=n;return t}
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
     */ // For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var Ge=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});// `omittedCloseTags` except that `menuitem` should still have its closing tag.
function assertValidProps(e,t){if(t){// Note the use of `==` which checks for null or undefined.
if(Ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&null!=t.children&&error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),null!=t.style&&"object"!==typeof t.style)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function isCustomComponent(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){
// These are reserved SVG and MathML elements.
// We don't mind this list too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var Xe={
// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",
// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},Je={"aria-current":0,
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
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Ze={},et=new RegExp("^(aria)-["+R+"]*$"),tt=new RegExp("^(aria)[A-Z]["+R+"]*$"),nt=Object.prototype.hasOwnProperty;function validateProperty(e,t){if(nt.call(Ze,t)&&Ze[t])return!0;if(tt.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=Je.hasOwnProperty(n)?n:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==r)return error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Ze[t]=!0,!0;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==r)return error("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),Ze[t]=!0,!0}if(et.test(t)){var o=t.toLowerCase(),a=Je.hasOwnProperty(o)?o:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==a)return Ze[t]=!0,!1;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==a)return error("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,a),Ze[t]=!0,!0}return!0}function validateProperties(e,t){isCustomComponent(e,t)||function warnInvalidARIAProps(e,t){var n=[];for(var r in t)validateProperty(0,r)||n.push(r);var o=n.map((function(e){return"`"+e+"`"})).join(", ");1===n.length?error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",o,e):n.length>1&&error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",o,e)}(e,t)}var rt=!1;var ot,at={},it=Object.prototype.hasOwnProperty,st=/^on./,ut=/^on[^A-Z]/,lt=new RegExp("^(aria)-["+R+"]*$"),ct=new RegExp("^(aria)[A-Z]["+R+"]*$");ot=function validateProperty$1(e,t,n,r){if(it.call(at,t)&&at[t])return!0;var o=t.toLowerCase();if("onfocusin"===o||"onfocusout"===o)return error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),at[t]=!0,!0;// We can't rely on the event system being injected on the server.
if(null!=r){var a=r.registrationNameDependencies,i=r.possibleRegistrationNames;if(a.hasOwnProperty(t))return!0;var s=i.hasOwnProperty(o)?i[o]:null;if(null!=s)return error("Invalid event handler property `%s`. Did you mean `%s`?",t,s),at[t]=!0,!0;if(st.test(t))return error("Unknown event handler property `%s`. It will be ignored.",t),at[t]=!0,!0}else if(st.test(t))
// If no event plugins have been injected, we are in a server environment.
// So we can't tell if the event name is correct for sure, but we can filter
// out known bad ones like `onclick`. We can't suggest a specific replacement though.
return ut.test(t)&&error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),at[t]=!0,!0;// Let the ARIA attribute hook validate ARIA attributes
if(lt.test(t)||ct.test(t))return!0;if("innerhtml"===o)return error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),at[t]=!0,!0;if("aria"===o)return error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),at[t]=!0,!0;if("is"===o&&null!==n&&void 0!==n&&"string"!==typeof n)return error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),at[t]=!0,!0;if("number"===typeof n&&isNaN(n))return error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),at[t]=!0,!0;var u=getPropertyInfo(t),l=null!==u&&0===u.type;// Known attributes should match the casing specified in the property config.
if(Xe.hasOwnProperty(o)){var c=Xe[o];if(c!==t)return error("Invalid DOM property `%s`. Did you mean `%s`?",t,c),at[t]=!0,!0}else if(!l&&t!==o)
// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
return error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,o),at[t]=!0,!0;return"boolean"===typeof n&&shouldRemoveAttributeWithWarning(t,n,u,!1)?(n?error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),at[t]=!0,!0):// Now that we've validated casing, do not validate
// data types for reserved props
!!l||(// Warn when a known attribute is a bad type
shouldRemoveAttributeWithWarning(t,n,u,!1)?(at[t]=!0,!1):(// Warn when passing the strings 'false' or 'true' into a boolean prop
"false"!==n&&"true"!==n||null===u||3!==u.type||(error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,"false"===n?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),at[t]=!0),!0))};function validateProperties$2(e,t,n){isCustomComponent(e,t)||function warnUnknownProperties(e,t,n){var r=[];for(var o in t)ot(0,o,t[o],n)||r.push(o);var a=r.map((function(e){return"`"+e+"`"})).join(", ");1===r.length?error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",a,e):r.length>1&&error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",a,e)}(e,t,n)}
/**
     * Gets the target node from a native browser event by accounting for
     * inconsistencies in browser DOM APIs.
     *
     * @param {object} nativeEvent Native browser event.
     * @return {DOMEventTarget} Target node.
     */
function getEventTarget(e){
// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var t=e.target||e.srcElement||window;// Normalize SVG <use> element events #4963
// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return t.correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}var dt=null,pt=null,ft=null;function restoreStateOfTarget(e){
// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var t=getInstanceFromNode(e);if(t){if("function"!==typeof dt)throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=t.stateNode;// Guard against Fiber being unmounted.
if(n){var r=getFiberCurrentPropsFromNode(n);dt(t.stateNode,t.type,r)}}}function enqueueStateRestore(e){pt?ft?ft.push(e):ft=[e]:pt=e}function restoreStateIfNeeded(){if(pt){var e=pt,t=ft;if(pt=null,ft=null,restoreStateOfTarget(e),t)for(var n=0;n<t.length;n++)restoreStateOfTarget(t[n])}}// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults
var mt=function batchedUpdatesImpl(e,t){return e(t)},ht=function discreteUpdatesImpl(e,t,n,r,o){return e(t,n,r,o)},gt=function flushDiscreteUpdatesImpl(){},vt=mt,yt=!1,bt=!1;function finishEventHandler(){(function needsStateRestore(){return null!==pt||null!==ft})()&&(
// If a controlled event was fired, we may need to restore the state of
// the DOM node back to the controlled value. This is necessary when React
// bails out of the update without touching the DOM.
gt(),restoreStateIfNeeded())}
/**
     * @param {object} inst The instance, which is the source of events.
     * @param {string} registrationName Name of listener (e.g. `onClick`).
     * @return {?function} The stored callback.
     */
function getListener(e,t){var n=e.stateNode;if(null===n)
// Work in progress (ex: onload events in incremental mode).
return null;var r=getFiberCurrentPropsFromNode(n);if(null===r)
// Work in progress.
return null;var o=r[t];if(function shouldPreventMouseEvent(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!(!n.disabled||!function isInteractive(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}(t));default:return!1}}(t,e.type,r))return null;if(o&&"function"!==typeof o)throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}var kt=!1;// Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
if(S)try{var Ct={};// $FlowFixMe: Ignore Flow complaining about needing a value
Object.defineProperty(Ct,"passive",{get:function get(){kt=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch(Nu){kt=!1}function invokeGuardedCallbackProd(e,t,n,r,o,a,i,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(error){this.onError(error)}}var wt=invokeGuardedCallbackProd;
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
if("undefined"!==typeof window&&"function"===typeof window.dispatchEvent&&"undefined"!==typeof document&&"function"===typeof document.createEvent){var St=document.createElement("react");wt=function invokeGuardedCallbackDev(e,t,n,r,o,a,i,s,u){
// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebookincubator/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if("undefined"===typeof document)throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var l=document.createEvent("Event"),c=!1,d=!0,p=window.event,f=Object.getOwnPropertyDescriptor(window,"event");function restoreAfterDispatch(){
// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
St.removeEventListener(y,callCallback,!1),// We check for window.hasOwnProperty('event') to prevent the
// window.event assignment in both IE <= 10 as they throw an error
// "Member not found" in strict mode, and in Firefox which does not
// support window.event.
"undefined"!==typeof window.event&&window.hasOwnProperty("event")&&(window.event=p)}// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
var m,h=Array.prototype.slice.call(arguments,3);function callCallback(){c=!0,restoreAfterDispatch(),t.apply(n,h),d=!1}// Create a global error event handler. We use this to capture the value
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
var g=!1,v=!1;function handleWindowError(e){if(m=e.error,g=!0,null===m&&0===e.colno&&0===e.lineno&&(v=!0),e.defaultPrevented&&null!=m&&"object"===typeof m)try{m._suppressLogging=!0}catch(t){// Ignore.
}}// Create a fake event type.
var y="react-"+(e||"invokeguardedcallback");// Attach our event handlers
if(window.addEventListener("error",handleWindowError),St.addEventListener(y,callCallback,!1),// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
l.initEvent(y,!1,!1),St.dispatchEvent(l),f&&Object.defineProperty(window,"event",f),c&&d&&(g?v&&(m=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):
// The callback errored, but the error event never fired.
m=new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),this.onError(m)),// Remove our event listeners
window.removeEventListener("error",handleWindowError),!c)
// Something went really wrong, and our event was not dispatched.
// https://github.com/facebook/react/issues/16734
// https://github.com/facebook/react/issues/16585
// Fall back to the production implementation.
return restoreAfterDispatch(),invokeGuardedCallbackProd.apply(this,arguments)}}var Et=wt,Rt=!1,xt=null,Tt=!1,Pt=null,It={onError:function onError(e){Rt=!0,xt=e}};
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
function invokeGuardedCallback(e,t,n,r,o,a,i,s,u){Rt=!1,xt=null,Et.apply(It,arguments)}
/**
     * Same as invokeGuardedCallback, but instead of returning an error, it stores
     * it in a global so it can be rethrown by `rethrowCaughtError` later.
     * TODO: See if caughtError and rethrowError can be unified.
     *
     * @param {String} name of the guard to use for logging or debugging
     * @param {Function} func The function to invoke
     * @param {*} context The context to use when calling the function
     * @param {...*} args Arguments for function
     */function hasCaughtError(){return Rt}function clearCaughtError(){if(Rt){var e=xt;return Rt=!1,xt=null,e}throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}
/**
     * `ReactInstanceMap` maintains a mapping from a public facing stateful
     * instance (key) and the internal representation (value). This allows public
     * methods to accept the user facing instance as an argument and map them back
     * to internal methods.
     *
     * Note that this module is currently shared and assumed to be stateless.
     * If this becomes an actual Map, that will break.
     */function get(e){return e._reactInternals}// Don't change these two values. They're used by React Dev Tools.
var _t,Ft,Dt,Nt,Ot=

64,Lt=

128,Ht=

256,Ut=

512,At=

8192,Mt=

1024,Wt=

2048,jt=

4096,Vt=

16384,zt=i.ReactCurrentOwner;function getNearestMountedFiber(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{
// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var r=t;do{

0!==(1026&(t=r).flags)&&(
// This is an insertion or in-progress hydration. The nearest possible
// mounted fiber is the parent but we need to continue to figure out
// if that one is still mounted.
n=t.return),r=t.return}while(r)}return 3===t.tag?n:null;// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
}function getSuspenseInstanceFromFiber(e){if(e.tag===c){var t=e.memoizedState;if(null===t){var n=e.alternate;null!==n&&(t=n.memoizedState)}if(null!==t)return t.dehydrated}return null}function getContainerFromFiber(e){return 3===e.tag?e.stateNode.containerInfo:null}function assertIsMounted(e){if(getNearestMountedFiber(e)!==e)throw Error("Unable to find node on an unmounted component.")}function findCurrentFiberUsingSlowPath(e){var t=e.alternate;if(!t){
// If there is no alternate, then we only need to check if it is mounted.
var n=getNearestMountedFiber(e);if(null===n)throw Error("Unable to find node on an unmounted component.");return n!==e?null:e}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
for(var r=e,o=t;;){var a=r.return;if(null===a)
// We're at the root.
break;var i=a.alternate;if(null===i){
// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var s=a.return;if(null!==s){r=o=s;continue}// If there's no parent, we're at the root.
break}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(a.child===i.child){for(var u=a.child;u;){if(u===r)
// We've determined that A is the current branch.
return assertIsMounted(a),e;if(u===o)
// We've determined that B is the current branch.
return assertIsMounted(a),t;u=u.sibling}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
throw Error("Unable to find node on an unmounted component.")}if(r.return!==o.return)
// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
r=a,o=i;else{for(
// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
// Search parent A's child set
var l=!1,c=a.child;c;){if(c===r){l=!0,r=a,o=i;break}if(c===o){l=!0,o=a,r=i;break}c=c.sibling}if(!l){for(
// Search parent B's child set
c=i.child;c;){if(c===r){l=!0,r=i,o=a;break}if(c===o){l=!0,o=i,r=a;break}c=c.sibling}if(!l)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==o)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(3!==r.tag)throw Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t;// Otherwise B has to be current branch.
}function findCurrentHostFiber(e){var t=findCurrentFiberUsingSlowPath(e);if(!t)return null;// Next we'll drill down this component to find the first HostComponent/Text.
for(var n=t;;){if(5===n.tag||6===n.tag)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}function doesFiberContain(e,t){for(var n=t,r=e.alternate;null!==n;){if(n===e||n===r)return!0;n=n.return}return!1}// TODO: Upgrade this definition once we're on a newer version of Flow that
var Bt=!1,$t=[],qt=null,Qt=null,Yt=null,Kt=new Map,Gt=new Map,Xt=[];// The queue of discrete events to be replayed.
var Jt=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput",// Intentionally camelCase
"copy","cut","paste","click","change","contextmenu","reset","submit"];function isReplayableDiscreteEvent(e){return Jt.indexOf(e)>-1}function createQueuedReplayableEvent(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:o,targetContainers:[r]}}function queueDiscreteEvent(e,t,n,r,o){var a=createQueuedReplayableEvent(e,t,n,r,o);$t.push(a)}// Resets the replaying for this type of continuous event to no event.
function clearIfContinuousEvent(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":var n=t.pointerId;Kt.delete(n);break;case"gotpointercapture":case"lostpointercapture":var r=t.pointerId;Gt.delete(r)}}function accumulateOrCreateContinuousQueuedReplayableEvent(e,t,n,r,o,a){if(null===e||e.nativeEvent!==a){var i=createQueuedReplayableEvent(t,n,r,o,a);if(null!==t){var s=getInstanceFromNode(t);null!==s&&
// Attempt to increase the priority of this target.
Ft(s)}return i}// If we have already queued this exact event, then it's because
// the different event systems have different DOM event listeners.
// We can accumulate the flags, and the targetContainers, and
// store a single event to be replayed.
e.eventSystemFlags|=r;var u=e.targetContainers;return null!==o&&-1===u.indexOf(o)&&u.push(o),e}// Check if this target is unblocked. Returns true if it's unblocked.
function attemptExplicitHydrationTarget(e){
// TODO: This function shares a lot of logic with attemptToDispatchEvent.
// Try to unify them. It's a bit tricky since it would require two return
// values.
var t=getClosestInstanceFromNode(e.target);if(null!==t){var n=getNearestMountedFiber(t);if(null!==n){var r=n.tag;if(r===c){var a=getSuspenseInstanceFromFiber(n);if(null!==a)
// We're blocked on hydrating this boundary.
// Increase its priority.
return e.blockedOn=a,void Nt(e.lanePriority,(function(){o.unstable_runWithPriority(e.priority,(function(){Dt(n)}))}))}else if(3===r){if(n.stateNode.hydrate)// We don't currently have a way to increase the priority of
// a root other than sync.
return void(e.blockedOn=getContainerFromFiber(n))}}}e.blockedOn=null}function attemptReplayContinuousQueuedEvent(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;t.length>0;){var n=t[0],r=attemptToDispatchEvent(e.domEventName,e.eventSystemFlags,n,e.nativeEvent);if(null!==r){
// We're still blocked. Try again later.
var o=getInstanceFromNode(r);return null!==o&&Ft(o),e.blockedOn=r,!1}// This target container was successfully dispatched. Try the next.
t.shift()}return!0}function attemptReplayContinuousQueuedEventInMap(e,t,n){attemptReplayContinuousQueuedEvent(e)&&n.delete(t)}function replayUnblockedEvents(){// First replay discrete events.
for(Bt=!1;$t.length>0;){var e=$t[0];if(null!==e.blockedOn){
// We're still blocked.
// Increase the priority of this boundary to unblock
// the next discrete event.
var t=getInstanceFromNode(e.blockedOn);null!==t&&_t(t);break}for(var n=e.targetContainers;n.length>0;){var r=n[0],o=attemptToDispatchEvent(e.domEventName,e.eventSystemFlags,r,e.nativeEvent);if(null!==o){
// We're still blocked. Try again later.
e.blockedOn=o;break}// This target container was successfully dispatched. Try the next.
n.shift()}null===e.blockedOn&&
// We've successfully replayed the first event. Let's try the next one.
$t.shift()}// Next replay any continuous events.
null!==qt&&attemptReplayContinuousQueuedEvent(qt)&&(qt=null),null!==Qt&&attemptReplayContinuousQueuedEvent(Qt)&&(Qt=null),null!==Yt&&attemptReplayContinuousQueuedEvent(Yt)&&(Yt=null),Kt.forEach(attemptReplayContinuousQueuedEventInMap),Gt.forEach(attemptReplayContinuousQueuedEventInMap)}function scheduleCallbackIfUnblocked(e,t){e.blockedOn===t&&(e.blockedOn=null,Bt||(Bt=!0,// Schedule a callback to attempt replaying as many events as are
// now unblocked. This first might not actually be unblocked yet.
// We could check it early to avoid scheduling an unnecessary callback.
o.unstable_scheduleCallback(o.unstable_NormalPriority,replayUnblockedEvents)))}function retryIfBlockedOn(e){
// Mark anything that was blocked on this as no longer blocked
// and eligible for a replay.
if($t.length>0){scheduleCallbackIfUnblocked($t[0],e);// This is a exponential search for each boundary that commits. I think it's
// worth it because we expect very few discrete events to queue up and once
// we are actually fully unblocked it will be fast to replay them.
for(var t=1;t<$t.length;t++){var n=$t[t];n.blockedOn===e&&(n.blockedOn=null)}}null!==qt&&scheduleCallbackIfUnblocked(qt,e),null!==Qt&&scheduleCallbackIfUnblocked(Qt,e),null!==Yt&&scheduleCallbackIfUnblocked(Yt,e);var r=function unblock(t){return scheduleCallbackIfUnblocked(t,e)};Kt.forEach(r),Gt.forEach(r);for(var o=0;o<Xt.length;o++){var a=Xt[o];a.blockedOn===e&&(a.blockedOn=null)}for(;Xt.length>0;){var i=Xt[0];if(null!==i.blockedOn)
// We're still blocked.
break;attemptExplicitHydrationTarget(i),null===i.blockedOn&&
// We're unblocked.
Xt.shift()}}
/**
     * Generate a mapping of standard vendor prefixes using the defined style property and event name.
     *
     * @param {string} styleProp
     * @param {string} eventName
     * @returns {object}
     */
function makePrefixMap(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}
/**
     * A list of event names to a configurable list of vendor prefixes.
     */var Zt={animationend:makePrefixMap("Animation","AnimationEnd"),animationiteration:makePrefixMap("Animation","AnimationIteration"),animationstart:makePrefixMap("Animation","AnimationStart"),transitionend:makePrefixMap("Transition","TransitionEnd")},en={},tn={};
/**
     * Event names that have already been detected and prefixed (if applicable).
     */
/**
     * Attempts to determine the correct vendor prefixed event name.
     *
     * @param {string} eventName
     * @returns {string}
     */
function getVendorPrefixedEventName(e){if(en[e])return en[e];if(!Zt[e])return e;var t=Zt[e];for(var n in t)if(t.hasOwnProperty(n)&&n in tn)return en[e]=t[n];return e}
/**
     * Bootstrap if a DOM exists.
     */
S&&(tn=document.createElement("div").style,// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),// Same as above
"TransitionEvent"in window||delete Zt.transitionend.transition);var nn=getVendorPrefixedEventName("animationend"),rn=getVendorPrefixedEventName("animationiteration"),on=getVendorPrefixedEventName("animationstart"),an=getVendorPrefixedEventName("transitionend"),sn=new Map,un=new Map,ln=["cancel","cancel","click","click","close","close","contextmenu","contextMenu","copy","copy","cut","cut","auxclick","auxClick","dblclick","doubleClick",// Careful!
"dragend","dragEnd","dragstart","dragStart","drop","drop","focusin","focus",// Careful!
"focusout","blur",// Careful!
"input","input","invalid","invalid","keydown","keyDown","keypress","keyPress","keyup","keyUp","mousedown","mouseDown","mouseup","mouseUp","paste","paste","pause","pause","play","play","pointercancel","pointerCancel","pointerdown","pointerDown","pointerup","pointerUp","ratechange","rateChange","reset","reset","seeked","seeked","submit","submit","touchcancel","touchCancel","touchend","touchEnd","touchstart","touchStart","volumechange","volumeChange"],cn=["change","selectionchange","textInput","compositionstart","compositionend","compositionupdate"],dn=["drag","drag","dragenter","dragEnter","dragexit","dragExit","dragleave","dragLeave","dragover","dragOver","mousemove","mouseMove","mouseout","mouseOut","mouseover","mouseOver","pointermove","pointerMove","pointerout","pointerOut","pointerover","pointerOver","scroll","scroll","toggle","toggle","touchmove","touchMove","wheel","wheel"],pn=["abort","abort",nn,"animationEnd",rn,"animationIteration",on,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",an,"transitionEnd","waiting","waiting"];
/**
     * Turns
     * ['abort', ...]
     *
     * into
     *
     * topLevelEventsToReactNames = new Map([
     *   ['abort', 'onAbort'],
     * ]);
     *
     * and registers them.
     */
function registerSimplePluginEventsAndSetTheirPriorities(e,t){
// As the event types are in pairs of two, we need to iterate
// through in twos. The events are in pairs of two to save code
// and improve init perf of processing this array, as it will
// result in far fewer object allocations and property accesses
// if we only use three arrays to process all the categories of
// instead of tuples.
for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1],a="on"+(o[0].toUpperCase()+o.slice(1));un.set(r,t),sn.set(r,a),registerTwoPhaseEvent(a,[r])}}var fn=o.unstable_now;
// Provide explicit error message when production+profiling bundle of e.g.
// react-dom is used with production (non-profiling) bundle of
// scheduler/tracing
if(null==a.__interactionsRef||null==a.__interactionsRef.current)throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.
fn();var mn=15,hn=10,gn=

3584,vn=

4186112,yn=

62914560,bn=

33554432,kn=

67108864,Cn=

134217727,wn=

134217728,Sn=

805306368,En=

1073741824,Rn=-1;// "Registers" used to "return" multiple values
// Used by getHighestPriorityLanes and getNextLanes:
var xn=8;function getHighestPriorityLanes(e){if(

0!==(

1&e))return xn=mn,1;if(0!==(

2&e))return xn=14,2;if(0!==(

4&e))return xn=13,4;var t=

24&e;if(0!==t)return xn=12,t;if(0!==(

32&e))return xn=11,32;var n=

192&e;if(0!==n)return xn=hn,n;if(0!==(

256&e))return xn=9,256;var r=gn&e;if(0!==r)return xn=8,r;if(0!==(

4096&e))return xn=7,4096;var o=vn&e;if(0!==o)return xn=6,o;var a=yn&e;if(0!==a)return xn=5,a;if(e&kn)return xn=4,kn;if(0!==(e&wn))return xn=3,wn;var i=Sn&e;return 0!==i?(xn=2,i):0!==(En&e)?(xn=1,En):(error("Should have found matching lanes. This is a bug in React."),// This shouldn't be reachable, but as a fallback, return the entire bitmask.
xn=8,e)}function getNextLanes(e,t){
// Early bailout if there's no pending work left.
var n=e.pendingLanes;if(0===n)return xn=0,0;var r=0,o=0,a=e.expiredLanes,i=e.suspendedLanes,s=e.pingedLanes;// Check if any work has expired.
if(0!==a)r=a,o=xn=mn;else{
// Do not work on any idle work until all the non-idle work has finished,
// even if the work is suspended.
var u=n&Cn;if(0!==u){var l=u&~i;if(0!==l)r=getHighestPriorityLanes(l),o=xn;else{var c=u&s;0!==c&&(r=getHighestPriorityLanes(c),o=xn)}}else{
// The only remaining work is Idle.
var d=n&~i;0!==d?(r=getHighestPriorityLanes(d),o=xn):0!==s&&(r=getHighestPriorityLanes(s),o=xn)}}if(0===r)
// This should only be reachable if we're suspended
// TODO: Consider warning in this path if a fallback timer is not scheduled.
return 0;// If there are higher priority lanes, we'll include them even if they
// are suspended.
// If we're already in the middle of a render, switching lanes will interrupt
// it and we'll lose our progress. We should only do this if the new lanes are
// higher priority.
if(r=n&function getEqualOrHigherPriorityLanes(e){return(function getLowestPriorityLane(e){
// This finds the most significant non-zero bit.
var t=31-Tn(e);return t<0?0:1<<t}(e)<<1)-1}(r),0!==t&&t!==r&&// If we already suspended with a delay, then interrupting is fine. Don't
// bother waiting until the root is complete.
0===(t&i)){if(getHighestPriorityLanes(t),o<=xn)return t;xn=o}// Check for entangled lanes and add them to the batch.

// A lane is said to be entangled with another when it's not allowed to render
// in a batch that does not also include the other lane. Typically we do this
// when multiple updates have the same source, and we only want to respond to
// the most recent event from that source.

// Note that we apply entanglements *after* checking for partial work above.
// This means that if a lane is entangled during an interleaved event while
// it's already rendering, we won't interrupt it. This is intentional, since
// entanglement is usually "best effort": we'll try our best to render the
// lanes in the same batch, but it's not worth throwing out partially
// completed work in order to do it.

// For those exceptions where entanglement is semantically important, like
// useMutableSource, we should ensure that there is no partial work at the
// time we apply the entanglement.
var p=e.entangledLanes;if(0!==p)for(var f=e.entanglements,m=r&p;m>0;){var h=pickArbitraryLaneIndex(m),g=1<<h;r|=f[h],m&=~g}return r}function computeExpirationTime(e,t){
// TODO: Expiration heuristic is constant per lane, so could use a map.
getHighestPriorityLanes(e);return xn>=hn?t+250:xn>=6?t+5e3:Rn}// This returns the highest priority pending lanes regardless of whether they
function getLanesToRetrySynchronouslyOnError(e){var t=-1073741825&e.pendingLanes;return 0!==t?t:t&En?En:0}function includesNonIdleWork(e){return 0!==(e&Cn)}function includesOnlyRetries(e){return(e&yn)===e}// To ensure consistency across multiple updates in the same event, this should
// be a pure function, so that it always returns the same lane for given inputs.
function findUpdateLane(e,t){switch(e){case 0:break;case mn:return 1;case 14:return 2;case 12:var n=pickArbitraryLane(24&~t);

return 0===n?findUpdateLane(hn,t):n;case hn:var r=pickArbitraryLane(192&~t);return 0===r?findUpdateLane(8,t):r;case 8:var o=pickArbitraryLane(gn&~t);return 0===o&&0===(
// If all the default lanes are already being worked on, look for a
// lane in the transition range.
o=pickArbitraryLane(vn&~t))&&(
// All the transition lanes are taken, too. This should be very
// rare, but as a last resort, pick a default lane. This will have
// the effect of interrupting the current work-in-progress render.
o=pickArbitraryLane(gn)),o;case 6:// Should be handled by findTransitionLane instead
case 5:
// Should be handled by findRetryLane instead
break;case 2:var a=pickArbitraryLane(Sn&~t);return 0===a&&(a=pickArbitraryLane(Sn)),a}throw Error("Invalid update priority: "+e+". This is a bug in React.")}// To ensure consistency across multiple updates in the same event, this should
// be pure function, so that it always returns the same lane for given inputs.
function pickArbitraryLane(e){
// This wrapper function gets inlined. Only exists so to communicate that it
// doesn't matter which bit is selected; you can pick any bit without
// affecting the algorithms where its used. Here I'm using
// getHighestPriorityLane because it requires the fewest operations.
return function getHighestPriorityLane(e){return e&-e}(e)}function pickArbitraryLaneIndex(e){return 31-Tn(e)}function includesSomeLane(e,t){return 0!==(e&t)}function isSubsetOfLanes(e,t){return(e&t)===t}function mergeLanes(e,t){return e|t}function removeLanes(e,t){return e&~t}// Seems redundant, but it changes the type from a single lane (used for
// updates) to a group of lanes (used for flushing work).
function createLaneMap(e){for(
// Intentionally pushing one by one.
// https://v8.dev/blog/elements-kinds#avoid-creating-holes
var t=[],n=0;n<31;n++)t.push(e);return t}function markRootUpdated(e,t,n){e.pendingLanes|=t;// TODO: Theoretically, any update to any lane can unblock any other lane. But
// it's not practical to try every single possible combination. We need a
// heuristic to decide which lanes to attempt to render, and in which batches.
// For now, we use the same heuristic as in the old ExpirationTimes model:
// retry any lane at equal or lower priority, but don't try updates at higher
// priority without also including the lower priority updates. This works well
// when considering updates across different priority levels, but isn't
// sufficient for updates within the same priority, since we want to treat
// those updates as parallel.
// Unsuspend any update at equal or lower priority.
var r=t-1;// Turns 0b1000 into 0b0111
e.suspendedLanes&=r,e.pingedLanes&=r,// We can always overwrite an existing timestamp because we prefer the most
// recent event, and we assume time is monotonically increasing.
e.eventTimes[function laneToIndex(e){return pickArbitraryLaneIndex(e)}(t)]=n}function markRootPinged(e,t,n){e.pingedLanes|=e.suspendedLanes&t}function markRootMutableRead(e,t){e.mutableReadLanes|=t&e.pendingLanes}var Tn=Math.clz32?Math.clz32:function clz32Fallback(e){if(0===e)return 32;return 31-(Pn(e)/In|0)|0}// Intentionally not named imports because Rollup would use dynamic dispatch for
,Pn=Math.log,In=Math.LN2;// Count leading zeros. Only used on lanes, so assume input is an integer.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
var _n=o.unstable_UserBlockingPriority,Fn=o.unstable_runWithPriority,Dn=!0;// TODO: can we stop exporting these?
// This is exported in FB builds for use by legacy FB layer infra.
// We'd like to remove this but it's not clear if this is safe.
function setEnabled(e){Dn=!!e}function createEventListenerWrapperWithPriority(e,t,n){var r,o=function getEventPriorityForPluginSystem(e){var t=un.get(e);// Default to a ContinuousEvent. Note: we might
// want to warn if we can't detect the priority
// for the event.
return void 0===t?2:t}(t);switch(o){case 0:r=dispatchDiscreteEvent;break;case 1:r=dispatchUserBlockingUpdate;break;default:r=dispatchEvent}return r.bind(null,t,n,e)}function dispatchDiscreteEvent(e,t,n,r){!function flushDiscreteUpdatesIfNeeded(e){yt||gt()}(r.timeStamp),function discreteUpdates(e,t,n,r,o){var a=yt;yt=!0;try{return ht(e,t,n,r,o)}finally{(yt=a)||finishEventHandler()}}(dispatchEvent,e,t,n,r)}function dispatchUserBlockingUpdate(e,t,n,r){Fn(_n,dispatchEvent.bind(null,e,t,n,r))}function dispatchEvent(e,t,n,r){if(Dn){var o;if((
// TODO: replaying capture phase events is currently broken
// because we used to do it during top-level native bubble handlers
// but now we use different bubble and capture handlers.
// In eager mode, we attach capture listeners early, so we need
// to filter them out until we fix the logic to handle them correctly.
// This could've been outside the flag but I put it inside to reduce risk.
o=0===(4&t))&&function hasQueuedDiscreteEvents(){return $t.length>0}()&&isReplayableDiscreteEvent(e))
// If we already have a queue of discrete events, and this is another discrete
// event, then we can't dispatch it regardless of its target, since they
// need to dispatch in order.
queueDiscreteEvent(null,// Flags that we're not actually blocked on anything as far as we know.
e,t,n,r);else{var a=attemptToDispatchEvent(e,t,n,r);if(null!==a){if(o){if(isReplayableDiscreteEvent(e))
// This this to be replayed later once the target is available.
return void queueDiscreteEvent(a,e,t,n,r);if(function queueIfContinuousEvent(e,t,n,r,o){
// These set relatedTarget to null because the replayed event will be treated as if we
// moved from outside the window (no target) onto the target once it hydrates.
// Instead of mutating we could clone the event.
switch(t){case"focusin":return qt=accumulateOrCreateContinuousQueuedReplayableEvent(qt,e,t,n,r,o),!0;case"dragenter":return Qt=accumulateOrCreateContinuousQueuedReplayableEvent(Qt,e,t,n,r,o),!0;case"mouseover":return Yt=accumulateOrCreateContinuousQueuedReplayableEvent(Yt,e,t,n,r,o),!0;case"pointerover":var a=o,i=a.pointerId;return Kt.set(i,accumulateOrCreateContinuousQueuedReplayableEvent(Kt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":var s=o,u=s.pointerId;return Gt.set(u,accumulateOrCreateContinuousQueuedReplayableEvent(Gt.get(u)||null,e,t,n,r,s)),!0}return!1}(a,e,t,n,r))return;// We need to clear only if we didn't queue because
// queueing is accummulative.
clearIfContinuousEvent(e,r)}// This is not replayable so we'll invoke it but without a target,
// in case the event system needs to trace it.
dispatchEventForPluginEventSystem(e,t,r,null,n)}else
// We successfully dispatched this event.
o&&clearIfContinuousEvent(e,r)}}}// Attempt dispatching an event. Returns a SuspenseInstance or Container if it's blocked.
function attemptToDispatchEvent(e,t,n,r){
// TODO: Warn if _enabled is false.
var o=getClosestInstanceFromNode(getEventTarget(r));if(null!==o){var a=getNearestMountedFiber(o);if(null===a)
// This tree has been unmounted already. Dispatch without a target.
o=null;else{var i=a.tag;if(i===c){var s=getSuspenseInstanceFromFiber(a);if(null!==s)
// Queue the event to be replayed later. Abort dispatching since we
// don't want this event dispatched twice through the event system.
// TODO: If this is the first discrete event in the queue. Schedule an increased
// priority for this boundary.
return s;// This shouldn't happen, something went wrong but to avoid blocking
// the whole system, dispatch the event without a target.
// TODO: Warn.
o=null}else if(3===i){if(a.stateNode.hydrate)
// If this happens during a replay something went wrong and it might block
// the whole system.
return getContainerFromFiber(a);o=null}else a!==o&&(
// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
o=null)}}// We're not blocked on anything.
return dispatchEventForPluginEventSystem(e,t,r,o,n),null}
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
var Nn=null,On=null,Ln=null;function getData(){if(Ln)return Ln;var e,t,n=On,r=n.length,o=getText(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);var s=t>1?1-t:void 0;return Ln=o.slice(e,s)}function getText(){return"value"in Nn?Nn.value:Nn.textContent}
/**
     * `charCode` represents the actual "character code" and is safe to use with
     * `String.fromCharCode`. As such, only keys that correspond to printable
     * characters produce a valid `charCode`, the only exception to this is Enter.
     * The Tab-key is considered non-printable and does not have a `charCode`,
     * presumably because it does not produce a tab-character in browsers.
     *
     * @param {object} nativeEvent Native browser event.
     * @return {number} Normalized `charCode` property.
     */function getEventCharCode(e){var t,n=e.keyCode;// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
return"charCode"in e?// FF does not set `charCode` for the Enter-key, check against `keyCode`.
0===(t=e.charCode)&&13===n&&(t=13):
// IE8 does not implement `charCode`, but `keyCode` has the correct value.
t=n,// IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
// report Enter as charCode 10 when ctrl is pressed.
10===t&&(t=13),t>=32||13===t?t:0}function functionThatReturnsTrue(){return!0}function functionThatReturnsFalse(){return!1}// This is intentionally a factory so that we have different returned constructors.
// If we had a single constructor, it would be megamorphic and engines would deopt.
function createSyntheticEvent(e){
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
       */
function SyntheticBaseEvent(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)if(e.hasOwnProperty(i)){var s=e[i];this[i]=s?s(o):o[i]}var u=null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue;return this.isDefaultPrevented=u?functionThatReturnsTrue:functionThatReturnsFalse,this.isPropagationStopped=functionThatReturnsFalse,this}return r(SyntheticBaseEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=functionThatReturnsTrue)},stopPropagation:function stopPropagation(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(
// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
e.cancelBubble=!0),this.isPropagationStopped=functionThatReturnsTrue)},
/**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
persist:function persist(){// Modern event system doesn't use pooling.
},
/**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
isPersistent:functionThatReturnsTrue}),SyntheticBaseEvent}
/**
     * @interface Event
     * @see http://www.w3.org/TR/DOM-Level-3-Events/
     */var Hn,Un,An,Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function timeStamp(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=createSyntheticEvent(Mn),jn=r({},Mn,{view:0,detail:0}),Vn=createSyntheticEvent(jn);
/**
     * @interface MouseEvent
     * @see http://www.w3.org/TR/DOM-Level-3-Events/
     */
var zn=r({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:getEventModifierState,button:0,buttons:0,relatedTarget:function relatedTarget(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function movementX(e){return"movementX"in e?e.movementX:(function updateMouseMovementPolyfillState(e){e!==An&&(An&&"mousemove"===e.type?(Hn=e.screenX-An.screenX,Un=e.screenY-An.screenY):(Hn=0,Un=0),An=e)}(e),Hn)},movementY:function movementY(e){return"movementY"in e?e.movementY:Un;// Don't need to call updateMouseMovementPolyfillState() here
// because it's guaranteed to have already run when movementX
// was copied.
}}),Bn=createSyntheticEvent(zn),$n=createSyntheticEvent(r({},zn,{dataTransfer:0})),qn=createSyntheticEvent(r({},jn,{relatedTarget:0})),Qn=createSyntheticEvent(r({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0})),Yn=createSyntheticEvent(r({},Mn,{clipboardData:function clipboardData(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),Kn=createSyntheticEvent(r({},Mn,{data:0})),Gn=Kn,Xn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};
/**
     * Translation from modifier key to the associated property in the event.
     * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
     */
var Zn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};// Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
function modifierStateGetter(e){var t=this.nativeEvent;if(t.getModifierState)return t.getModifierState(e);var n=Zn[e];return!!n&&!!t[n]}function getEventModifierState(e){return modifierStateGetter}
/**
     * @interface KeyboardEvent
     * @see http://www.w3.org/TR/DOM-Level-3-Events/
     */var er=createSyntheticEvent(r({},jn,{key:
/**
     * @param {object} nativeEvent Native browser event.
     * @return {string} Normalized `key` property.
     */
function getEventKey(e){if(e.key){
// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var t=Xn[e.key]||e.key;if("Unidentified"!==t)return t}// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var n=getEventCharCode(e);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?Jn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:getEventModifierState,
// Legacy Interface
charCode:function charCode(e){
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
return"keypress"===e.type?getEventCharCode(e):0},keyCode:function keyCode(e){
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function which(e){
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
return"keypress"===e.type?getEventCharCode(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),tr=createSyntheticEvent(r({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nr=createSyntheticEvent(r({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:getEventModifierState})),rr=createSyntheticEvent(r({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),or=createSyntheticEvent(r({},zn,{deltaX:function deltaX(e){return"deltaX"in e?e.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function deltaY(e){return"deltaY"in e?e.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
"wheelDeltaY"in e?-e.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,
// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:0})),ar=[9,13,27,32],ir=S&&"CompositionEvent"in window,sr=null;S&&"documentMode"in document&&(sr=document.documentMode);// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var ur=S&&"TextEvent"in window&&!sr,lr=S&&(!ir||sr&&sr>8&&sr<=11),cr=String.fromCharCode(32);// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
// Track whether we've ever handled a keypress on the space key.
var dr=!1;
/**
     * Return whether a native keypress event is assumed to be a command.
     * This is required because Firefox fires `keypress` events for key commands
     * (cut, copy, select-all, etc.) even though no character is inserted.
     */
/**
     * Does our fallback mode think that this event is the end of composition?
     */
function isFallbackCompositionEnd(e,t){switch(e){case"keyup":
// Command keys insert or clear IME input.
return-1!==ar.indexOf(t.keyCode);case"keydown":
// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":
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
     */function getDataFromCustomEvent(e){var t=e.detail;return"object"===typeof t&&"data"in t?t.data:null}
/**
     * Check if a composition event was triggered by Korean IME.
     * Our fallback mode does not work well with IE's Korean IME,
     * so just use native composition events when Korean IME is used.
     * Although CompositionEvent.locale property is deprecated,
     * it is available in IE, where our fallback mode is enabled.
     *
     * @param {object} nativeEvent
     * @return {boolean}
     */function isUsingKoreanIME(e){return"ko"===e.locale}// Track the current IME composition status, if any.
var pr=!1;
/**
     * @return {?object} A SyntheticCompositionEvent.
     */function extractCompositionEvent(e,t,n,r,o){var a,i;if(ir?a=
/**
     * Translate native top level events into event types.
     */
function getCompositionEventType(e){switch(e){case"compositionstart":return"onCompositionStart";case"compositionend":return"onCompositionEnd";case"compositionupdate":return"onCompositionUpdate"}}
/**
     * Does our fallback best-guess model think this event signifies that
     * composition has begun?
     */(t):pr?isFallbackCompositionEnd(t,r)&&(a="onCompositionEnd"):function isFallbackCompositionStart(e,t){return"keydown"===e&&229===t.keyCode}(t,r)&&(a="onCompositionStart"),!a)return null;lr&&!isUsingKoreanIME(r)&&(
// The current composition is stored statically and must not be
// overwritten while composition continues.
pr||"onCompositionStart"!==a?"onCompositionEnd"===a&&pr&&(i=getData()):pr=function initialize(e){return Nn=e,On=getText(),!0}(o));var s=accumulateTwoPhaseListeners(n,a);if(s.length>0){var u=new Kn(a,t,null,r,o);if(e.push({event:u,listeners:s}),i)
// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
u.data=i;else{var l=getDataFromCustomEvent(r);null!==l&&(u.data=l)}}}
/**
     * For browsers that do not provide the `textInput` event, extract the
     * appropriate string to use for SyntheticInputEvent.
     */
function getFallbackBeforeInputChars(e,t){
// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(pr){if("compositionend"===e||!ir&&isFallbackCompositionEnd(e,t)){var n=getData();return function reset(){Nn=null,On=null,Ln=null}(),pr=!1,n}return null}switch(e){case"paste":default:return null;case"keypress":
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
if(!function isKeypressCommand(e){return(e.ctrlKey||e.altKey||e.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(e.ctrlKey&&e.altKey)}(t)){
// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lr&&!isUsingKoreanIME(t)?null:t.data}}
/**
     * Extract a SyntheticInputEvent for `beforeInput`, based on either native
     * `textInput` or fallback behavior.
     *
     * @return {?object} A SyntheticInputEvent.
     */function extractBeforeInputEvent(e,t,n,r,o){var a;// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!(a=ur?function getNativeBeforeInputChars(e,t){switch(e){case"compositionend":return getDataFromCustomEvent(t);case"keypress":return 32!==t.which?null:(dr=!0,cr);case"textInput":
// Record the characters to be added to the DOM.
var n=t.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
return n===cr&&dr?null:n;default:
// For other native event types, do nothing.
return null}}(t,r):getFallbackBeforeInputChars(t,r)))return null;var i=accumulateTwoPhaseListeners(n,"onBeforeInput");if(i.length>0){var s=new Gn("onBeforeInput","beforeinput",null,r,o);e.push({event:s,listeners:i}),s.data=a}}
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
     */
/**
     * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
     */
var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function isTextInputElement(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!fr[e.type]:"textarea"===t}
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
     */function createAndAccumulateChangeEvent(e,t,n,r){
// Flag this event loop as needing state restore.
enqueueStateRestore(r);var o=accumulateTwoPhaseListeners(t,"onChange");if(o.length>0){var a=new Wn("onChange","change",null,n,r);e.push({event:a,listeners:o})}}
/**
     * For IE shims
     */var mr=null,hr=null;function manualDispatchChangeEvent(e){var t=[];createAndAccumulateChangeEvent(t,hr,e,getEventTarget(e)),// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
function batchedUpdates(e,t){if(yt)
// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return e(t);yt=!0;try{return mt(e,t)}finally{yt=!1,finishEventHandler()}}(runEventInBatch,t)}function runEventInBatch(e){processDispatchQueue(e,0)}function getInstIfValueChanged(e){if(updateValueIfChanged(getNodeFromInstance(e)))return e}function getTargetInstForChangeEvent(e,t){if("change"===e)return t}
/**
     * SECTION: handle `input` event
     */var gr=!1;
/**
     * (For IE <=9) Removes the event listeners from the currently-tracked element,
     * if any exists.
     */
function stopWatchingForValueChange(){mr&&(mr.detachEvent("onpropertychange",handlePropertyChange),mr=null,hr=null)}
/**
     * (For IE <=9) Handles a propertychange event, sending a `change` event if
     * the value of the active element has changed.
     */function handlePropertyChange(e){"value"===e.propertyName&&getInstIfValueChanged(hr)&&manualDispatchChangeEvent(e)}function handleEventsForInputEventPolyfill(e,t,n){"focusin"===e?(
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
function startWatchingForValueChange(e,t){hr=t,(mr=e).attachEvent("onpropertychange",handlePropertyChange)}(t,n)):"focusout"===e&&stopWatchingForValueChange()}// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(e,t){if("selectionchange"===e||"keyup"===e||"keydown"===e)
// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return getInstIfValueChanged(hr)}
/**
     * SECTION: handle `click` event
     */function getTargetInstForClickEvent(e,t){if("click"===e)return getInstIfValueChanged(t)}function getTargetInstForInputOrChangeEvent(e,t){if("input"===e||"change"===e)return getInstIfValueChanged(t)}
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
function extractEvents$1(e,t,n,r,o,a,i){var s,u,l=n?getNodeFromInstance(n):window;if(!
/**
     * SECTION: handle `change` event
     */
function shouldUseChangeEvent(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}(l)?isTextInputElement(l)?gr?s=getTargetInstForInputOrChangeEvent:(s=getTargetInstForInputEventPolyfill,u=handleEventsForInputEventPolyfill):function shouldUseClickEvent(e){
// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}(l)&&(s=getTargetInstForClickEvent):s=getTargetInstForChangeEvent,s){var c=s(t,n);if(c)return void createAndAccumulateChangeEvent(e,c,r,o)}u&&u(t,l,n),// When blurring, set the value attribute for number inputs
"focusout"===t&&function handleControlledInputBlur(e){var t=e._wrapperState;t&&t.controlled&&"number"===e.type&&
// If controlled, assign the value attribute to the current value on blur
setDefaultValue(e,"number",e.value)}(l)}
/**
     * For almost every interaction we care about, there will be both a top-level
     * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
     * we do not extract duplicate events. However, moving the mouse into the
     * browser from outside will not fire a `mouseout` event. In this case, we use
     * the `mouseover` top-level event.
     */
function extractEvents$2(e,t,n,r,o,a,i){var s="mouseover"===t||"pointerover"===t,u="mouseout"===t||"pointerout"===t;if(s&&0===(16&a)){
// If this is an over event with a target, we might have already dispatched
// the event in the out event of the other target. If this is replayed,
// then it's because we couldn't dispatch against this target previously
// so we have to do it now instead.
var l=r.relatedTarget||r.fromElement;if(l&&(getClosestInstanceFromNode(l)||isContainerMarkedAsRoot(l)))return}if(u||s){var c,d,p;// TODO: why is this nullable in the types but we read from it?
if(o.window===o)
// `nativeEventTarget` is probably a window object.
c=o;else{
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var f=o.ownerDocument;c=f?f.defaultView||f.parentWindow:window}if(u){var m=r.relatedTarget||r.toElement;if(d=n,null!==(p=m?getClosestInstanceFromNode(m):null))(p!==getNearestMountedFiber(p)||5!==p.tag&&6!==p.tag)&&(p=null)}else
// Moving to a node from outside the window.
d=null,p=n;if(d!==p){var h=Bn,g="onMouseLeave",v="onMouseEnter",y="mouse";"pointerout"!==t&&"pointerover"!==t||(h=tr,g="onPointerLeave",v="onPointerEnter",y="pointer");var b=null==d?c:getNodeFromInstance(d),k=null==p?c:getNodeFromInstance(p),C=new h(g,y+"leave",d,r,o);C.target=b,C.relatedTarget=k;var w=null;// We should only process this nativeEvent if we are processing
// the first ancestor. Next time, we will ignore the event.
if(getClosestInstanceFromNode(o)===n){var S=new h(v,y+"enter",p,r,o);S.target=k,S.relatedTarget=b,w=S}!// We should only use this function for:
// - EnterLeaveEventPlugin
// This is because we only process this plugin
// in the bubble phase, so we need to accumulate two
// phase event listeners.
function accumulateEnterLeaveTwoPhaseListeners(e,t,n,r,o){var a=r&&o?
/**
     * Return the lowest common ancestor of A and B, or null if they are in
     * different trees.
     */
function getLowestCommonAncestor(e,t){for(var n=e,r=t,o=0,a=n;a;a=getParent(a))o++;for(var i=0,s=r;s;s=getParent(s))i++;// If A is deeper, crawl up.
for(;o-i>0;)n=getParent(n),o--;// If B is deeper, crawl up.
for(;i-o>0;)r=getParent(r),i--;// Walk in lockstep until we find a match.
var u=o;for(;u--;){if(n===r||null!==r&&n===r.alternate)return n;n=getParent(n),r=getParent(r)}return null}(r,o):null;null!==r&&accumulateEnterLeaveListenersForEvent(e,t,r,a,!1);null!==o&&null!==n&&accumulateEnterLeaveListenersForEvent(e,n,o,a,!0)}(e,C,w,d,p)}}}
/**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */S&&(
// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
gr=function isEventSupported(e){if(!S)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n="function"===typeof r[t]}return n}("input")&&(!document.documentMode||document.documentMode>9));var vr="function"===typeof Object.is?Object.is:function is(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},yr=Object.prototype.hasOwnProperty;
/**
     * Performs equality by iterating through keys on an object and returning false
     * when any key has values which are not strictly equal between the arguments.
     * Returns true when the values of all keys are strictly equal.
     */
function shallowEqual(e,t){if(vr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;// Test for A's keys different from B.
for(var o=0;o<n.length;o++)if(!yr.call(t,n[o])||!vr(e[n[o]],t[n[o]]))return!1;return!0}
/**
     * Given any node return the first leaf node without children.
     *
     * @param {DOMElement|DOMTextNode} node
     * @return {DOMElement|DOMTextNode}
     */function getLeafNode(e){for(;e&&e.firstChild;)e=e.firstChild;return e}
/**
     * Get the next sibling within a container. This will walk up the
     * DOM if a node's siblings have been exhausted.
     *
     * @param {DOMElement|DOMTextNode} node
     * @return {?DOMElement|DOMTextNode}
     */function getSiblingNode(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}
/**
     * Get object describing the nodes which contain characters at offset.
     *
     * @param {DOMElement|DOMTextNode} root
     * @param {number} offset
     * @return {?object}
     */function getNodeForCharacterOffset(e,t){for(var n=getLeafNode(e),r=0,o=0;n;){if(3===n.nodeType){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=getLeafNode(getSiblingNode(n))}}
/**
     * @param {DOMElement} outerNode
     * @return {?object}
     */function getOffsets(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||0===r.rangeCount)return null;var o=r.anchorNode,a=r.anchorOffset,i=r.focusNode,s=r.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{
/* eslint-disable no-unused-expressions */
o.nodeType,i.nodeType}catch(Nu){return null}
/**
     * Returns {start, end} where `start` is the character/codepoint index of
     * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
     * `end` is the index of (focusNode, focusOffset).
     *
     * Returns null if you pass in garbage input but we should probably just crash.
     *
     * Exported only for testing.
     */
return function getModernOffsetsFromPoints(e,t,n,r,o){var a=0,i=-1,s=-1,u=0,l=0,c=e,d=null;e:for(;;){for(var p=null;c!==t||0!==n&&3!==c.nodeType||(i=a+n),c!==r||0!==o&&3!==c.nodeType||(s=a+o),3===c.nodeType&&(a+=c.nodeValue.length),null!==(p=c.firstChild);)// Moving from `node` to its first child `next`.
d=c,c=p;for(;;){if(c===e)
// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break e;if(d===t&&++u===n&&(i=a),d===r&&++l===o&&(s=a),null!==(p=c.nextSibling))break;d=(c=d).parentNode}// Moving from `node` to its next sibling `next`.
c=p}if(-1===i||-1===s)
// This should never happen. (Would happen if the anchor/focus nodes aren't
// actually inside the passed-in node.)
return null;return{start:i,end:s}}
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
     */(e,o,a,i,s)}function isTextNode(e){return e&&3===e.nodeType}function containsNode(e,t){return!(!e||!t)&&(e===t||!isTextNode(e)&&(isTextNode(t)?containsNode(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function isInDocument(e){return e&&e.ownerDocument&&containsNode(e.ownerDocument.documentElement,e)}function isSameOriginFrame(e){try{
// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return"string"===typeof e.contentWindow.location.href}catch(t){return!1}}function getActiveElementDeep(){for(var e=window,t=getActiveElement();t instanceof e.HTMLIFrameElement;){if(!isSameOriginFrame(t))return t;t=getActiveElement((e=t.contentWindow).document)}return t}
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
     */function hasSelectionCapabilities(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}
/**
     * @restoreSelection: If any selection information was potentially lost,
     * restore it. This is useful when performing operations that could remove dom
     * nodes and place them back in, resulting in focus being lost.
     */
function restoreSelection(e){var t=getActiveElementDeep(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&isInDocument(n)){null!==r&&hasSelectionCapabilities(n)&&
/**
     * @setSelection: Sets the selection bounds of a textarea or input and focuses
     * the input.
     * -@input     Set selection bounds of this input or textarea
     * -@offsets   Object of same form that is returned from get*
     */
function setSelection(e,t){var n=t.start,r=t.end;void 0===r&&(r=n);"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):function setOffsets(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;// Edge fails with "Object expected" in some scenarios.
// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(r.getSelection){var o=r.getSelection(),a=e.textContent.length,i=Math.min(t.start,a),s=void 0===t.end?i:Math.min(t.end,a);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!o.extend&&i>s){var u=s;s=i,i=u}var l=getNodeForCharacterOffset(e,i),c=getNodeForCharacterOffset(e,s);if(l&&c){if(1===o.rangeCount&&o.anchorNode===l.node&&o.anchorOffset===l.offset&&o.focusNode===c.node&&o.focusOffset===c.offset)return;var d=n.createRange();d.setStart(l.node,l.offset),o.removeAllRanges(),i>s?(o.addRange(d),o.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),o.addRange(d))}}}(e,t)}(n,r);// Focusing a node can change the scroll position, which is undesirable
for(var o=[],a=n;a=a.parentNode;)1===a.nodeType&&o.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof n.focus&&n.focus();for(var i=0;i<o.length;i++){var s=o[i];s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}}
/**
     * @getSelection: Gets the selection bounds of a focused textarea, input or
     * contentEditable node.
     * -@input: Look up selection bounds of this input
     * -@return {start: selectionStart, end: selectionEnd}
     */function getSelection(e){return("selectionStart"in e?{start:e.selectionStart,end:e.selectionEnd}:getOffsets(e))||{start:0,end:0}}var br=S&&"documentMode"in document&&document.documentMode<=11;var kr=null,Cr=null,wr=null,Sr=!1;
/**
     * Poll selection to see whether it's changed.
     *
     * @param {object} nativeEvent
     * @param {object} nativeEventTarget
     * @return {?SyntheticEvent}
     */
function constructSelectEvent(e,t,n){
// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var r=
/**
     * Get document associated with the event target.
     */
function getEventTargetDocument(e){return e.window===e?e.document:9===e.nodeType?e:e.ownerDocument}(n);if(!Sr&&null!=kr&&kr===getActiveElement(r)){// Only fire when selection has actually changed.
var o=
/**
     * Get an object which is a unique representation of the current selection.
     *
     * The return value will not be consistent across nodes or browsers, but
     * two identical selections on the same node will return identical objects.
     */
function getSelection$1(e){if("selectionStart"in e&&hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};var t=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}(kr);if(!wr||!shallowEqual(wr,o)){wr=o;var a=accumulateTwoPhaseListeners(Cr,"onSelect");if(a.length>0){var i=new Wn("onSelect","select",null,t,n);e.push({event:i,listeners:a}),i.target=kr}}}}
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
     */function extractEvents$4(e,t,n,r,o,a,i){var s=sn.get(t);if(void 0!==s){var u=Wn,l=t;switch(t){case"keypress":
// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===getEventCharCode(r))return;
/* falls through */case"keydown":case"keyup":u=er;break;case"focusin":l="focus",u=qn;break;case"focusout":l="blur",u=qn;break;case"beforeblur":case"afterblur":u=qn;break;case"click":
// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===r.button)return;
/* falls through */case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":// TODO: Disabled elements should not respond to mouse events
/* falls through */case"mouseout":case"mouseover":case"contextmenu":u=Bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=$n;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=nr;break;case nn:case rn:case on:u=Qn;break;case an:u=rr;break;case"scroll":u=Vn;break;case"wheel":u=or;break;case"copy":case"cut":case"paste":u=Yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=tr}var c=0!==(4&a),d=!c&&// TODO: ideally, we'd eventually add all events from
// nonDelegatedEvents list in DOMPluginEventSystem.
// Then we can remove this special list.
// This is a breaking change that can wait until React 18.
"scroll"===t,p=function accumulateSinglePhaseListeners(e,t,n,r,o){var a=null!==t?t+"Capture":null,i=r?a:t,s=[],u=e,l=null;// Accumulate all instances and listeners via the target -> root path.
for(;null!==u;){var c=u,d=c.stateNode;// Handle listeners that are on HostComponents (i.e. <div>)
if(5===c.tag&&null!==d&&(l=d,null!==i)){var p=getListener(u,i);null!=p&&s.push(createDispatchListener(u,p,l))}// If we are only accumulating events for the target, then we don't
// continue to propagate through the React fiber tree to find other
// listeners.
if(o)break;u=u.return}return s}// We should only use this function for:
// - BeforeInputEventPlugin
// - ChangeEventPlugin
// - SelectEventPlugin
// This is because we only process these plugins
// in the bubble phase, so we need to accumulate two
// phase event listeners (via emulation).
(n,s,r.type,c,d);if(p.length>0){
// Intentionally create event lazily.
var f=new u(s,l,null,r,o);e.push({event:f,listeners:p})}}}// TODO: remove top-level side effect.
function extractEvents$5(e,t,n,r,o,a,i){
// TODO: we should remove the concept of a "SimpleEventPlugin".
// This is the basic functionality of the event system. All
// the other plugins are essentially polyfills. So the plugin
// should probably be inlined somewhere and have its logic
// be core the to event system. This would potentially allow
// us to ship builds of React without the polyfilled plugins below.
extractEvents$4(e,t,n,r,o,a),// We don't process these events unless we are in the
// event's native "bubble" phase, which means that we're
// not in the capture phase. That's because we emulate
// the capture phase here still. This is a trade-off,
// because in an ideal world we would not emulate and use
// the phases properly, like we do with the SimpleEvent
// plugin. However, the plugins below either expect
// emulation (EnterLeave) or use state localized to that
// plugin (BeforeInput, Change, Select). The state in
// these modules complicates things, as you'll essentially
// get the case where the capture phase event might change
// state, only for the following bubble event to come in
// later and not trigger anything as the state now
// invalidates the heuristics of the event plugin. We
// could alter all these plugins to work in such ways, but
// that might cause other unknown side-effects that we
// can't forsee right now.
0===(7&a)&&(extractEvents$2(e,t,n,r,o,a),extractEvents$1(e,t,n,r,o),function extractEvents$3(e,t,n,r,o,a,i){var s=n?getNodeFromInstance(n):window;switch(t){
// Track the input node that has focus.
case"focusin":(isTextInputElement(s)||"true"===s.contentEditable)&&(kr=s,Cr=n,wr=null);break;case"focusout":kr=null,Cr=null,wr=null;break;
// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case"mousedown":Sr=!0;break;case"contextmenu":case"mouseup":case"dragend":Sr=!1,constructSelectEvent(e,r,o);break;
// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.

// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case"selectionchange":if(br)break;
// falls through
case"keydown":case"keyup":constructSelectEvent(e,r,o)}}(e,t,n,r,o),function extractEvents(e,t,n,r,o,a,i){extractCompositionEvent(e,t,n,r,o),extractBeforeInputEvent(e,t,n,r,o)}(e,t,n,r,o))}// List of events that need to be individually attached to media elements.
!function registerSimpleEvents(){registerSimplePluginEventsAndSetTheirPriorities(ln,0),registerSimplePluginEventsAndSetTheirPriorities(dn,1),registerSimplePluginEventsAndSetTheirPriorities(pn,2),function setEventPriorities(e,t){for(var n=0;n<e.length;n++)un.set(e[n],t)}(cn,0)}(),function registerEvents$2(){registerDirectEvent("onMouseEnter",["mouseout","mouseover"]),registerDirectEvent("onMouseLeave",["mouseout","mouseover"]),registerDirectEvent("onPointerEnter",["pointerout","pointerover"]),registerDirectEvent("onPointerLeave",["pointerout","pointerover"])}(),function registerEvents$1(){registerTwoPhaseEvent("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"])}(),function registerEvents$3(){registerTwoPhaseEvent("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"])}(),function registerEvents(){registerTwoPhaseEvent("onBeforeInput",["compositionend","keypress","textInput","paste"]),registerTwoPhaseEvent("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),registerTwoPhaseEvent("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),registerTwoPhaseEvent("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"])}();var Er=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],Rr=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(Er));// We should not delegate these events to the container, but rather
// set them on the actual target element itself. This is primarily
// because these events do not consistently bubble in the DOM.
function executeDispatch(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function invokeGuardedCallbackAndCatchFirstError(e,t,n,r,o,a,i,s,u){if(invokeGuardedCallback.apply(this,arguments),Rt){var l=clearCaughtError();Tt||(Tt=!0,Pt=l)}}
/**
     * During execution of guarded functions we will capture the first error which
     * we will rethrow to be handled by the top level error handler.
     */(r,t,void 0,e),e.currentTarget=null}function processDispatchQueueItemsInOrder(e,t,n){var r;if(n)for(var o=t.length-1;o>=0;o--){var a=t[o],i=a.instance,s=a.currentTarget,u=a.listener;if(i!==r&&e.isPropagationStopped())return;executeDispatch(e,u,s),r=i}else for(var l=0;l<t.length;l++){var c=t[l],d=c.instance,p=c.currentTarget,f=c.listener;if(d!==r&&e.isPropagationStopped())return;executeDispatch(e,f,p),r=d}}function processDispatchQueue(e,t){for(var n=0!==(4&t),r=0;r<e.length;r++){var o=e[r];processDispatchQueueItemsInOrder(o.event,o.listeners,n)}// This would be a good time to rethrow if any of the event handlers threw.
!function rethrowCaughtError(){if(Tt){var e=Pt;throw Tt=!1,Pt=null,e}}()}function listenToNonDelegatedEvent(e,t){var n=getEventListenerSet(t),r=getListenerSetKey(e,false);n.has(r)||(addTrappedEventListener(t,e,2,false),n.add(r))}var xr="_reactListening"+Math.random().toString(36).slice(2);function listenToAllSupportedEvents(e){e[xr]||(e[xr]=!0,k.forEach((function(t){Rr.has(t)||listenToNativeEvent(t,!1,e,null),listenToNativeEvent(t,!0,e,null)})))}function listenToNativeEvent(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=n;// If the event can be delegated (or is capture phase), we can
// register it to the root container. Otherwise, we should
// register the event to the target element and mark it as
// a non-delegated event.
if(// selectionchange needs to be attached to the document
// otherwise it won't capture incoming events that are only
// triggered on the document directly.
"selectionchange"===e&&9!==n.nodeType&&(a=n.ownerDocument),null!==r&&!t&&Rr.has(e)){
// For all non-delegated events, apart from scroll, we attach
// their event listeners to the respective elements that their
// events fire on. That means we can skip this step, as event
// listener has already been added previously. However, we
// special case the scroll event because the reality is that any
// element can scroll.
// TODO: ideally, we'd eventually apply the same logic to all
// events from the nonDelegatedEvents list. Then we can remove
// this special case and use the same logic for all events.
if("scroll"!==e)return;o|=2,a=r}var i=getEventListenerSet(a),s=getListenerSetKey(e,t);// If the listener entry is empty or we should upgrade, then
// we need to trap an event listener onto the target.
i.has(s)||(t&&(o|=4),addTrappedEventListener(a,e,o,t),i.add(s))}function addTrappedEventListener(e,t,n,r,o){var a=createEventListenerWrapperWithPriority(e,t,n),i=void 0;// If passive option is not supported, then the event will be
// active and not passive.
kt&&(
// Browsers introduced an intervention, making these events
// passive by default on document. React doesn't bind them
// to document anymore, but changing this now would undo
// the performance wins from the change. So we emulate
// the existing behavior manually on the roots now.
// https://github.com/facebook/react/issues/19651
"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0)),// When legacyFBSupport is enabled, it's for when we
r?void 0!==i?function addEventCaptureListenerWithPassiveFlag(e,t,n,r){return e.addEventListener(t,n,{capture:!0,passive:r}),n}(e,t,a,i):function addEventCaptureListener(e,t,n){return e.addEventListener(t,n,!0),n}(e,t,a):void 0!==i?function addEventBubbleListenerWithPassiveFlag(e,t,n,r){return e.addEventListener(t,n,{passive:r}),n}(e,t,a,i):function addEventBubbleListener(e,t,n){return e.addEventListener(t,n,!1),n}(e,t,a)}function isMatchingRootContainer(e,t){return e===t||8===e.nodeType&&e.parentNode===t}function dispatchEventForPluginEventSystem(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)){var i=o;// If we are using the legacy FB support flag, we
if(null!==r){
// The below logic attempts to work out if we need to change
// the target fiber to a different ancestor. We had similar logic
// in the legacy event system, except the big difference between
// systems is that the modern event system now has an event listener
// attached to each React Root and React Portal Root. Together,
// the DOM nodes representing these roots are the "rootContainer".
// To figure out which ancestor instance we should use, we traverse
// up the fiber tree from the target instance and attempt to find
// root boundaries that match that of our current "rootContainer".
// If we find that "rootContainer", we find the parent fiber
// sub-tree for that root and make that our ancestor instance.
var s=r;e:for(;;){if(null===s)return;var u=s.tag;if(3===u||4===u){var l=s.stateNode.containerInfo;if(isMatchingRootContainer(l,i))break;if(4===u)for(
// The target is a portal, but it's not the rootContainer we're looking for.
// Normally portals handle their own events all the way down to the root.
// So we should be able to stop now. However, we don't know if this portal
// was part of *our* root.
var c=s.return;null!==c;){var d=c.tag;if(3===d||4===d)if(isMatchingRootContainer(c.stateNode.containerInfo,i))
// This is the rootContainer we're looking for and we found it as
// a parent of the Portal. That means we can ignore it because the
// Portal will bubble through to us.
return;c=c.return}// Now we need to find it's corresponding host fiber in the other
// tree. To do this we can use getClosestInstanceFromNode, but we
// need to validate that the fiber is a host instance, otherwise
// we need to traverse up through the DOM till we find the correct
// node that is from the other tree.
for(;null!==l;){var p=getClosestInstanceFromNode(l);if(null===p)return;var f=p.tag;if(5===f||6===f){s=a=p;continue e}l=l.parentNode}}s=s.return}}}!function batchedEventUpdates(e,t,n){if(bt)
// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return e(t,n);bt=!0;try{return vt(e,t,n)}finally{bt=!1,finishEventHandler()}}((function(){return function dispatchEventsForPlugins(e,t,n,r,o){var a=[];extractEvents$5(a,e,r,n,getEventTarget(n),t),processDispatchQueue(a,t)}(e,t,n,a)}))}function createDispatchListener(e,t,n){return{instance:e,listener:t,currentTarget:n}}function accumulateTwoPhaseListeners(e,t){// Accumulate all instances and listeners via the target -> root path.
for(var n=t+"Capture",r=[],o=e;null!==o;){var a=o,i=a.stateNode;// Handle listeners that are on HostComponents (i.e. <div>)
if(5===a.tag&&null!==i){var s=i,u=getListener(o,n);null!=u&&r.unshift(createDispatchListener(o,u,s));var l=getListener(o,t);null!=l&&r.push(createDispatchListener(o,l,s))}o=o.return}return r}function getParent(e){if(null===e)return null;do{e=e.return;// TODO: If this is a HostRoot we might want to bail out.
// That is depending on if we want nested subtrees (layers) to bubble
// events to their parent. We could also go through parentNode on the
// host node but that wouldn't work for React Native and doesn't let us
// do the portal feature.
}while(e&&5!==e.tag);return e||null}function accumulateEnterLeaveListenersForEvent(e,t,n,r,o){for(var a=t._reactName,i=[],s=n;null!==s&&s!==r;){var u=s,l=u.alternate,c=u.stateNode,d=u.tag;if(null!==l&&l===r)break;if(5===d&&null!==c){var p=c;if(o){var f=getListener(s,a);null!=f&&i.unshift(createDispatchListener(s,f,p))}else if(!o){var m=getListener(s,a);null!=m&&i.push(createDispatchListener(s,m,p))}}s=s.return}0!==i.length&&e.push({event:t,listeners:i})}function getListenerSetKey(e,t){return e+"__"+(t?"capture":"bubble")}var Tr,Pr,Ir,_r,Fr,Dr,Nr,Or,Lr,Hr,Ur=!1,Ar="dangerouslySetInnerHTML",Mr="suppressContentEditableWarning",Wr="suppressHydrationWarning",jr="autoFocus",Vr="children",zr="style",Br=_e;Tr={
// There are working polyfills for <dialog>. Let people use it.
dialog:!0,
// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:!0},Ir=function validatePropertiesInDevelopment(e,t){validateProperties(e,t),function validateProperties$1(e,t){"input"!==e&&"textarea"!==e&&"select"!==e||null==t||null!==t.value||rt||(rt=!0,"select"===e&&t.multiple?error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}(e,t),validateProperties$2(e,t,{registrationNameDependencies:C,possibleRegistrationNames:w})},// IE 11 parses & normalizes the style attribute as opposed to other
// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
Or=S&&!document.documentMode;// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var $r=/\r\n?/g,qr=/\u0000|\uFFFD/g;function getOwnerDocumentFromRootContainer(e){return 9===e.nodeType?e:e.ownerDocument}function noop(){}function trapClickOnNonInteractiveElement(e){
// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
e.onclick=noop}function setInitialProperties(e,t,n,r){var o,a=isCustomComponent(t,n);switch(Ir(t,n),t){case"dialog":listenToNonDelegatedEvent("cancel",e),listenToNonDelegatedEvent("close",e),o=n;break;case"iframe":case"object":case"embed":
// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
listenToNonDelegatedEvent("load",e),o=n;break;case"video":case"audio":
// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var i=0;i<Er.length;i++)listenToNonDelegatedEvent(Er[i],e);o=n;break;case"source":
// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
listenToNonDelegatedEvent("error",e),o=n;break;case"img":case"image":case"link":
// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
listenToNonDelegatedEvent("error",e),listenToNonDelegatedEvent("load",e),o=n;break;case"details":
// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
listenToNonDelegatedEvent("toggle",e),o=n;break;case"input":initWrapperState(e,n),o=getHostProps(e,n),// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent("invalid",e);break;case"option":validateProps(0,n),o=getHostProps$1(0,n);break;case"select":initWrapperState$1(e,n),o=getHostProps$2(0,n),// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent("invalid",e);break;case"textarea":initWrapperState$2(e,n),o=getHostProps$3(e,n),// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent("invalid",e);break;default:o=n}switch(assertValidProps(t,o),function setInitialDOMProperties(e,t,n,r,o){for(var a in r)if(r.hasOwnProperty(a)){var i=r[a];if(a===zr)i&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(i),// Relies on `updateStylesByID` not mutating `styleUpdates`.
setValueForStyles(t,i);else if(a===Ar){var s=i?i.__html:void 0;null!=s&&Ne(t,s)}else a===Vr?"string"===typeof i?("textarea"!==e||""!==i)&&Oe(t,i):"number"===typeof i&&Oe(t,""+i):a===Mr||a===Wr||a===jr||(C.hasOwnProperty(a)?null!=i&&("function"!==typeof i&&Nr(a,i),"onScroll"===a&&listenToNonDelegatedEvent("scroll",t)):null!=i&&setValueForProperty(t,a,i,o))}}(t,e,0,o,a),t){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper(e,n,!1);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper$3(e);break;case"option":!function postMountWrapper$1(e,t){
// value="" should make a value attribute (#6219)
null!=t.value&&e.setAttribute("value",toString(getToStringValue(t.value)))}(e,n);break;case"select":!function postMountWrapper$2(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;null!=r?updateOptions(n,!!t.multiple,r,!1):null!=t.defaultValue&&updateOptions(n,!!t.multiple,t.defaultValue,!0)}(e,n);break;default:"function"===typeof o.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(e)}}// Calculate the diff between the two objects.
function diffProperties(e,t,n,r,o){Ir(t,r);var a,i,s,u,l=null;switch(t){case"input":a=getHostProps(e,n),i=getHostProps(e,r),l=[];break;case"option":a=getHostProps$1(0,n),i=getHostProps$1(0,r),l=[];break;case"select":a=getHostProps$2(0,n),i=getHostProps$2(0,r),l=[];break;case"textarea":a=getHostProps$3(e,n),i=getHostProps$3(e,r),l=[];break;default:i=r,"function"!==typeof(a=n).onClick&&"function"===typeof i.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(e)}assertValidProps(t,i);var c=null;for(s in a)if(!i.hasOwnProperty(s)&&a.hasOwnProperty(s)&&null!=a[s])if(s===zr){var d=a[s];for(u in d)d.hasOwnProperty(u)&&(c||(c={}),c[u]="")}else s===Ar||s===Vr||s===Mr||s===Wr||s===jr||(C.hasOwnProperty(s)?
// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
l||(l=[]):
// For all other deleted properties we add it to the queue. We use
// the allowed property list in the commit phase instead.
(l=l||[]).push(s,null));for(s in i){var p=i[s],f=null!=a?a[s]:void 0;if(i.hasOwnProperty(s)&&p!==f&&(null!=p||null!=f))if(s===zr)if(p&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(p),f){
// Unset styles on `lastProp` but not on `nextProp`.
for(u in f)!f.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(c||(c={}),c[u]="");// Update styles that changed since `lastProp`.
for(u in p)p.hasOwnProperty(u)&&f[u]!==p[u]&&(c||(c={}),c[u]=p[u])}else
// Relies on `updateStylesByID` not mutating `styleUpdates`.
c||(l||(l=[]),l.push(s,c)),c=p;else if(s===Ar){var m=p?p.__html:void 0,h=f?f.__html:void 0;null!=m&&h!==m&&(l=l||[]).push(s,m)}else s===Vr?"string"!==typeof p&&"number"!==typeof p||(l=l||[]).push(s,""+p):s===Mr||s===Wr||(C.hasOwnProperty(s)?(null!=p&&(
// We eagerly listen to this even though we haven't committed yet.
"function"!==typeof p&&Nr(s,p),"onScroll"===s&&listenToNonDelegatedEvent("scroll",e)),l||f===p||(
// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
l=[])):"object"===typeof p&&null!==p&&p.$$typeof===K?
// If we encounter useOpaqueReference's opaque object, this means we are hydrating.
// In this case, call the opaque object's toString function which generates a new client
// ID so client and server IDs match and throws to rerender.
p.toString():
// For any other property we always add it to the queue and then we
// filter it out using the allowed property list during the commit.
(l=l||[]).push(s,p))}return c&&(!function validateShorthandPropertyCollisionInDev(e,t){if(t){var n,r=expandShorthandMap(e),o=expandShorthandMap(t),a={};for(var i in r){var s=r[i],u=o[i];if(u&&s!==u){var l=s+","+u;if(a[l])continue;a[l]=!0,error("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",null==(n=e[s])||"boolean"===typeof n||""===n?"Removing":"Updating",s,u)}}}}(c,i.style),(l=l||[]).push(zr,c)),l}// Apply the diff.
function updateProperties(e,t,n,r,o){
// Update checked *before* name.
// In the middle of an update, it is possible to have multiple checked.
// When a checked radio tries to change name, browser makes another radio's checked false.
"input"===n&&"radio"===o.type&&null!=o.name&&updateChecked(e,o);isCustomComponent(n,r);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(// Apply the diff.
function updateDOMProperties(e,t,n,r){
// TODO: Handle wasCustomComponentTag
for(var o=0;o<t.length;o+=2){var a=t[o],i=t[o+1];a===zr?setValueForStyles(e,i):a===Ar?Ne(e,i):a===Vr?Oe(e,i):setValueForProperty(e,a,i,r)}}(e,t,0,isCustomComponent(n,o)),n){case"input":
// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
updateWrapper(e,o);break;case"textarea":updateWrapper$1(e,o);break;case"select":
// <select> value update needs to occur after <option> children
// reconciliation
!function postUpdateWrapper(e,t){var n=e,r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;null!=o?updateOptions(n,!!t.multiple,o,!1):r!==!!t.multiple&&(
// For simplicity, reapply `defaultValue` if `multiple` is toggled.
null!=t.defaultValue?updateOptions(n,!!t.multiple,t.defaultValue,!0):
// Revert the select back to its default unselected state.
updateOptions(n,!!t.multiple,t.multiple?[]:"",!1))}(e,o)}}function getPossibleStandardName(e){var t=e.toLowerCase();return Xe.hasOwnProperty(t)&&Xe[t]||null}function warnForUnmatchedText(e,t){_r(e.nodeValue,t)}function warnForDeletedHydratableElement(e,t){Ur||(Ur=!0,error("Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase()))}function warnForDeletedHydratableText(e,t){Ur||(Ur=!0,error('Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase()))}function warnForInsertedHydratedElement(e,t,n){Ur||(Ur=!0,error("Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase()))}function warnForInsertedHydratedText(e,t){""!==t&&(Ur||(Ur=!0,error('Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())))}Lr=function normalizeMarkupForTextOrAttribute(e){return("string"===typeof e?e:""+e).replace($r,"\n").replace(qr,"")},_r=function warnForTextDifference(e,t){if(!Ur){var n=Lr(t),r=Lr(e);r!==n&&(Ur=!0,error('Text content did not match. Server: "%s" Client: "%s"',r,n))}},Fr=function warnForPropDifference(e,t,n){if(!Ur){var r=Lr(n),o=Lr(t);o!==r&&(Ur=!0,error("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(o),JSON.stringify(r)))}},Dr=function warnForExtraAttributes(e){if(!Ur){Ur=!0;var t=[];e.forEach((function(e){t.push(e)})),error("Extra attributes from the server: %s",t)}},Nr=function warnForInvalidEventListener(e,t){!1===t?error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):error("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
Hr=function normalizeHTML(e,t){
// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var n=e.namespaceURI===Br?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML};var Qr,Yr,Kr=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],Gr=["applet","caption","html","table","td","th","marquee","object","template",// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],Xr=Gr.concat(["button"]),Jr=["dd","dt","li","option","optgroup","p","rp","rt"],Zr={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};Yr=function updatedAncestorInfo(e,t){var n=r({},e||Zr),o={tag:t};return-1!==Gr.indexOf(t)&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),-1!==Xr.indexOf(t)&&(n.pTagInButtonScope=null),// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
-1!==Kr.indexOf(t)&&"address"!==t&&"div"!==t&&"p"!==t&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=o,"form"===t&&(n.formTag=o),"a"===t&&(n.aTagInScope=o),"button"===t&&(n.buttonTagInScope=o),"nobr"===t&&(n.nobrTagInScope=o),"p"===t&&(n.pTagInButtonScope=o),"li"===t&&(n.listItemTagAutoclosing=o),"dd"!==t&&"dt"!==t||(n.dlItemTagAutoclosing=o),n};
/**
       * Returns whether
       */
var eo={};
/**
       * Returns whether
       */Qr=function validateDOMNesting(e,t,n){var r=(n=n||Zr).current,o=r&&r.tag;null!=t&&(null!=e&&error("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var a=function isTagValidWithParent(e,t){
// First, let's check if we're in an unusual parsing mode...
switch(t){
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case"select":return"option"===e||"optgroup"===e||"#text"===e;case"optgroup":return"option"===e||"#text"===e;
// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case"option":return"#text"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case"tr":return"th"===e||"td"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case"tbody":case"thead":case"tfoot":return"tr"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case"colgroup":return"col"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case"table":return"caption"===e||"colgroup"===e||"tbody"===e||"tfoot"===e||"thead"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case"head":return"base"===e||"basefont"===e||"bgsound"===e||"link"===e||"meta"===e||"title"===e||"noscript"===e||"noframes"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case"html":return"head"===e||"body"===e||"frameset"===e;case"frameset":return"frame"===e;case"#document":return"html"===e}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==t&&"h2"!==t&&"h3"!==t&&"h4"!==t&&"h5"!==t&&"h6"!==t;case"rp":case"rt":return-1===Jr.indexOf(t);case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":
// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==t}return!0}(e,o)?null:r,i=a?null:function findInvalidAncestorForTag(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":
// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null}(e,n),s=a||i;if(s){var u=s.tag,l=!!a+"|"+e+"|"+u;if(!eo[l]){eo[l]=!0;var c=e,d="";if("#text"===e?/\S/.test(t)?c="Text nodes":(c="Whitespace text nodes",d=" Make sure you don't have any extra whitespace between tags on each line of your source code."):c="<"+e+">",a){var p="";"table"===u&&"tr"===e&&(p+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),error("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",c,u,d,p)}else error("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",c,u)}}};var to="$?",no="$!",ro=null,oo=null;function shouldAutoFocusHostComponent(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function prepareForCommit(e){ro=function isEnabled(){return Dn}(),oo=function getSelectionInformation(){var e=getActiveElementDeep();return{focusedElem:e,selectionRange:hasSelectionCapabilities(e)?getSelection(e):null}}();return setEnabled(!1),null}function createInstance(e,t,n,r,o){var a=r;if(Qr(e,null,a.ancestorInfo),"string"===typeof t.children||"number"===typeof t.children){var i=""+t.children,s=Yr(a.ancestorInfo,e);Qr(null,i,s)}var u=function createElement(e,t,n,r){var o,a,i=getOwnerDocumentFromRootContainer(n),s=r;// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
if(s===Br&&(s=getIntrinsicNamespace(e)),s===Br){if(// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
(o=isCustomComponent(e,t))||e===e.toLowerCase()||error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),"script"===e){
// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var u=i.createElement("div");u.innerHTML="<script><\/script>";// eslint-disable-line
// This is guaranteed to yield a script element.
var l=u.firstChild;a=u.removeChild(l)}else if("string"===typeof t.is)
// $FlowIssue `createElement` should be updated for Web Components
a=i.createElement(e,{is:t.is});else// Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
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
a=i.createElement(e),"select"===e){var c=a;t.multiple?c.multiple=!0:t.size&&(
// Setting a size greater than 1 causes a select to behave like `multiple=true`, where
// it is possible that no option is selected.
// This is only necessary when a select in "single selection mode".
c.size=t.size)}}else a=i.createElementNS(s,e);return s===Br&&(o||"[object HTMLUnknownElement]"!==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(Tr,e)||(Tr[e]=!0,error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e))),a}(e,t,n,a.namespace);return precacheFiberNode(o,u),updateFiberProps(u,t),u}function shouldSetTextContent(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function createTextInstance(e,t,n,r){Qr(null,e,n.ancestorInfo);var o=function createTextNode(e,t){return getOwnerDocumentFromRootContainer(t).createTextNode(e)}(e,t);return precacheFiberNode(r,o),o}// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
var ao="function"===typeof setTimeout?setTimeout:void 0,io="function"===typeof clearTimeout?clearTimeout:void 0;function resetTextContent(e){Oe(e,"")}function removeChild(e,t){e.removeChild(t)}function hideInstance(e){var t=e.style;"function"===typeof t.setProperty?t.setProperty("display","none","important"):t.display="none"}function unhideInstance(e,t){var n=t.style,r=void 0!==n&&null!==n&&n.hasOwnProperty("display")?n.display:null;e.style.display=dangerousStyleValue("display",r)}function unhideTextInstance(e,t){e.nodeValue=t}function clearContainer(e){if(1===e.nodeType)e.textContent="";else if(9===e.nodeType){var t=e.body;null!=t&&(t.textContent="")}}// -------------------
function isSuspenseInstanceFallback(e){return e.data===no}function getNextHydratable(e){
// Skip non-hydratable nodes.
for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function getNextHydratableSibling(e){return getNextHydratable(e.nextSibling)}function getFirstHydratableChild(e){return getNextHydratable(e.firstChild)}function hydrateInstance(e,t,n,r,o,a){return precacheFiberNode(a,e),// TODO: Possibly defer this until the commit phase where all the events
// get attached.
updateFiberProps(e,n),function diffHydratedProperties(e,t,n,r,o){var a,i;// TODO: Make sure that we check isMounted before firing any of these events.
switch(Pr=!0===n.suppressHydrationWarning,a=isCustomComponent(t,n),Ir(t,n),t){case"dialog":listenToNonDelegatedEvent("cancel",e),listenToNonDelegatedEvent("close",e);break;case"iframe":case"object":case"embed":
// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
listenToNonDelegatedEvent("load",e);break;case"video":case"audio":
// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var s=0;s<Er.length;s++)listenToNonDelegatedEvent(Er[s],e);break;case"source":
// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
listenToNonDelegatedEvent("error",e);break;case"img":case"image":case"link":
// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
listenToNonDelegatedEvent("error",e),listenToNonDelegatedEvent("load",e);break;case"details":
// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
listenToNonDelegatedEvent("toggle",e);break;case"input":initWrapperState(e,n),// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent("invalid",e);break;case"option":validateProps(0,n);break;case"select":initWrapperState$1(e,n),// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent("invalid",e);break;case"textarea":initWrapperState$2(e,n),// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent("invalid",e)}assertValidProps(t,n),i=new Set;for(var u=e.attributes,l=0;l<u.length;l++)switch(u[l].name.toLowerCase()){
// Built-in SSR attribute is allowed
case"data-reactroot":
// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case"value":case"checked":case"selected":break;default:
// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
i.add(u[l].name)}var c=null;for(var d in n)if(n.hasOwnProperty(d)){var p=n[d];if(d===Vr)
// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
"string"===typeof p?e.textContent!==p&&(Pr||_r(e.textContent,p),c=[Vr,p]):"number"===typeof p&&e.textContent!==""+p&&(Pr||_r(e.textContent,p),c=[Vr,""+p]);else if(C.hasOwnProperty(d))null!=p&&("function"!==typeof p&&Nr(d,p),"onScroll"===d&&listenToNonDelegatedEvent("scroll",e));else if(// Convince Flow we've calculated it (it's DEV-only in this method.)
"boolean"===typeof a){
// Validate that the properties correspond to their expected values.
var f=void 0,m=getPropertyInfo(d);if(Pr);else if(d===Mr||d===Wr||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
"value"===d||"checked"===d||"selected"===d);else if(d===Ar){var h=e.innerHTML,g=p?p.__html:void 0;if(null!=g){var v=Hr(e,g);v!==h&&Fr(d,h,v)}}else if(d===zr){if(
// $FlowFixMe - Should be inferred as not undefined.
i.delete(d),Or){var y=createDangerousStringForStyles(p);y!==(f=e.getAttribute("style"))&&Fr(d,f,y)}}else if(a)
// $FlowFixMe - Should be inferred as not undefined.
i.delete(d.toLowerCase()),p!==(f=getValueForAttribute(e,d,p))&&Fr(d,f,p);else if(!shouldIgnoreAttribute(d,m,a)&&!shouldRemoveAttribute(d,p,m,a)){var b=!1;if(null!==m)
// $FlowFixMe - Should be inferred as not undefined.
i.delete(m.attributeName),f=getValueForProperty(e,d,p,m);else{var k=r;if(k===Br&&(k=getIntrinsicNamespace(t)),k===Br)
// $FlowFixMe - Should be inferred as not undefined.
i.delete(d.toLowerCase());else{var w=getPossibleStandardName(d);null!==w&&w!==d&&(
// If an SVG prop is supplied with bad casing, it will
// be successfully parsed from HTML, but will produce a mismatch
// (and would be incorrectly rendered on the client).
// However, we already warn about bad casing elsewhere.
// So we'll skip the misleading extra mismatch warning in this case.
b=!0,// $FlowFixMe - Should be inferred as not undefined.
i.delete(w)),// $FlowFixMe - Should be inferred as not undefined.
i.delete(d)}f=getValueForAttribute(e,d,p)}p===f||b||Fr(d,f,p)}}}switch(
// $FlowFixMe - Should be inferred as not undefined.
i.size>0&&!Pr&&
// $FlowFixMe - Should be inferred as not undefined.
Dr(i),t){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper(e,n,!0);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(e),postMountWrapper$3(e);break;case"select":case"option":
// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:"function"===typeof n.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(e)}return c}(e,t,n,o.namespace)}// Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.
function getParentSuspenseInstance(e){for(var t=e.previousSibling,n=0// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
;t;){if(8===t.nodeType){var r=t.data;if("$"===r||r===no||r===to){if(0===n)return t;n--}else"/$"===r&&n++}t=t.previousSibling}return null}var so=0;function makeClientIdInDEV(e){var t="r:"+(so++).toString(36);return{toString:function toString(){return e(),t},valueOf:function valueOf(){return e(),t}}}var uo=Math.random().toString(36).slice(2),lo="__reactFiber$"+uo,co="__reactProps$"+uo,po="__reactContainer$"+uo,fo="__reactEvents$"+uo;function precacheFiberNode(e,t){t[lo]=e}function unmarkContainerAsRoot(e){e[po]=null}function isContainerMarkedAsRoot(e){return!!e[po]}// Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.
function getClosestInstanceFromNode(e){var t=e[lo];if(t)
// Don't return HostRoot or SuspenseComponent here.
return t;// If the direct event target isn't a React owned DOM node, we need to look
// to see if one of its parents is a React owned DOM node.
for(var n=e.parentNode;n;){if(
// We'll check if this is a container root that could include
// React nodes in the future. We need to check this first because
// if we're a child of a dehydrated container, we need to first
// find that inner container before moving on to finding the parent
// instance. Note that we don't check this field on  the targetNode
// itself because the fibers are conceptually between the container
// node and the first child. It isn't surrounding the container node.
// If it's not a container, we check if it's an instance.
t=n[po]||n[lo]){
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
var r=t.alternate;if(null!==t.child||null!==r&&null!==r.child)for(
// Next we need to figure out if the node that skipped past is
// nested within a dehydrated boundary and if so, which one.
var o=getParentSuspenseInstance(e);null!==o;){
// We found a suspense instance. That means that we haven't
// hydrated it yet. Even though we leave the comments in the
// DOM after hydrating, and there are boundaries in the DOM
// that could already be hydrated, we wouldn't have found them
// through this pass since if the target is hydrated it would
// have had an internalInstanceKey on it.
// Let's get the fiber associated with the SuspenseComponent
// as the deepest instance.
var a=o[lo];if(a)return a;// If we don't find a Fiber on the comment, it might be because
// we haven't gotten to hydrate it yet. There might still be a
// parent boundary that hasn't above this one so we need to find
// the outer most that is known.
o=getParentSuspenseInstance(o)}return t}n=(e=n).parentNode}return null}
/**
     * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
     * instance, or null if the node was not rendered by this React.
     */function getInstanceFromNode(e){var t=e[lo]||e[po];return t&&(5===t.tag||6===t.tag||t.tag===c||3===t.tag)?t:null}
/**
     * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
     * DOM node.
     */function getNodeFromInstance(e){if(5===e.tag||6===e.tag)
// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return e.stateNode;// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
throw Error("getNodeFromInstance: Invalid argument.")}function getFiberCurrentPropsFromNode(e){return e[co]||null}function updateFiberProps(e,t){e[co]=t}function getEventListenerSet(e){var t=e[fo];return void 0===t&&(t=e[fo]=new Set),t}var mo={},ho=i.ReactDebugCurrentFrame;function setCurrentlyValidatingElement(e){if(e){var t=e._owner,n=describeUnknownElementTypeFrameInDEV(e.type,e._source,t?t.type:null);ho.setExtraStackFrame(n)}else ho.setExtraStackFrame(null)}function checkPropTypes(e,t,n,r,o){
// $FlowFixMe This is okay but Flow doesn't know it.
var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var i in e)if(a(e,i)){var s=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!==typeof e[i]){var u=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}s=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){s=l}!s||s instanceof Error||(setCurrentlyValidatingElement(o),error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof s),setCurrentlyValidatingElement(null)),s instanceof Error&&!(s.message in mo)&&(
// Only monitor this failure once because there tends to be a lot of the
// same error.
mo[s.message]=!0,setCurrentlyValidatingElement(o),error("Failed %s type: %s",n,s.message),setCurrentlyValidatingElement(null))}}var go,vo=[];go=[];var yo,bo=-1;function createCursor(e){return{current:e}}function pop(e,t){bo<0?error("Unexpected pop."):(t!==go[bo]&&error("Unexpected Fiber popped."),e.current=vo[bo],vo[bo]=null,go[bo]=null,bo--)}function push(e,t,n){bo++,vo[bo]=e.current,go[bo]=n,e.current=t}yo={};var ko={};Object.freeze(ko);// A cursor to the current merged context object on the stack.
var Co=createCursor(ko),wo=createCursor(!1),So=ko;// A cursor to a boolean indicating whether the context has changed.
function getUnmaskedContext(e,t,n){return n&&isContextProvider(t)?So:Co.current}function cacheContext(e,t,n){var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}function getMaskedContext(e,t){var n=e.type,r=n.contextTypes;if(!r)return ko;// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={};for(var i in r)a[i]=t[i];return checkPropTypes(r,a,"context",getComponentName(n)||"Unknown"),// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
o&&cacheContext(e,t,a),a}function hasContextChanged(){return wo.current}function isContextProvider(e){var t=e.childContextTypes;return null!==t&&void 0!==t}function popContext(e){pop(wo,e),pop(Co,e)}function popTopLevelContextObject(e){pop(wo,e),pop(Co,e)}function pushTopLevelContextObject(e,t,n){if(Co.current!==ko)throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");push(Co,t,e),push(wo,n,e)}function processChildContext(e,t,n){var o=e.stateNode,a=t.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if("function"!==typeof o.getChildContext){var i=getComponentName(t)||"Unknown";return yo[i]||(yo[i]=!0,error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",i,i)),n}var s=o.getChildContext();for(var u in s)if(!(u in a))throw Error((getComponentName(t)||"Unknown")+'.getChildContext(): key "'+u+'" is not defined in childContextTypes.');return checkPropTypes(a,s,"child context",getComponentName(t)||"Unknown"),r({},n,s)}function pushContextProvider(e){var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||ko;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
return So=Co.current,push(Co,n,e),push(wo,wo.current,e),!0}function invalidateContextProvider(e,t,n){var r=e.stateNode;if(!r)throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){
// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var o=processChildContext(e,t,So);r.__reactInternalMemoizedMergedChildContext=o,// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(wo,e),pop(Co,e),// Now push the new context and mark that it has changed.
push(Co,o,e),push(wo,n,e)}else pop(wo,e),push(wo,n,e)}function findCurrentUnmaskedContext(e){
// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(!function isFiberMounted(e){return getNearestMountedFiber(e)===e}(e)||1!==e.tag)throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case 3:return t.stateNode.context;case 1:if(isContextProvider(t.type))return t.stateNode.__reactInternalMemoizedMergedChildContext}t=t.return}while(null!==t);throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}var Eo=null,Ro=null,xo=!1,To="undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;function onCommitRoot(e,t){if(Ro&&"function"===typeof Ro.onCommitFiberRoot)try{var n=(e.current.flags&Ot)===Ot;Ro.onCommitFiberRoot(Eo,e,t,n)}catch(r){xo||(xo=!0,error("React instrumentation encountered an error: %s",r))}}var Po=o.unstable_runWithPriority,Io=o.unstable_scheduleCallback,_o=o.unstable_cancelCallback,Fo=o.unstable_shouldYield,Do=o.unstable_requestPaint,No=o.unstable_now,Oo=o.unstable_getCurrentPriorityLevel,Lo=o.unstable_ImmediatePriority,Ho=o.unstable_UserBlockingPriority,Uo=o.unstable_NormalPriority,Ao=o.unstable_LowPriority,Mo=o.unstable_IdlePriority;
// Provide explicit error message when production+profiling bundle of e.g.
// react-dom is used with production (non-profiling) bundle of
// scheduler/tracing
if(null==a.__interactionsRef||null==a.__interactionsRef.current)throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");var Wo={},jo=99,Vo=98,zo=97,Bo=Fo,$o=// Fall back gracefully if we're running an older version of Scheduler.
void 0!==Do?Do:function(){},qo=null,Qo=null,Yo=!1,Ko=No(),Go=Ko<1e4?No:function(){return No()-Ko};// Except for NoPriority, these correspond to Scheduler priorities. We use
// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.
function getCurrentPriorityLevel(){switch(Oo()){case Lo:return jo;case Ho:return Vo;case Uo:return zo;case Ao:return 96;case Mo:return 95;default:throw Error("Unknown priority level.")}}function reactPriorityToSchedulerPriority(e){switch(e){case jo:return Lo;case Vo:return Ho;case zo:return Uo;case 96:return Ao;case 95:return Mo;default:throw Error("Unknown priority level.")}}function runWithPriority$1(e,t){var n=reactPriorityToSchedulerPriority(e);return Po(n,t)}function scheduleCallback(e,t,n){var r=reactPriorityToSchedulerPriority(e);return Io(r,t,n)}function cancelCallback(e){e!==Wo&&_o(e)}function flushSyncCallbackQueue(){if(null!==Qo){var e=Qo;Qo=null,_o(e)}flushSyncCallbackQueueImpl()}function flushSyncCallbackQueueImpl(){if(!Yo&&null!==qo){
// Prevent re-entrancy.
Yo=!0;var e=0;try{var t=qo;runWithPriority$1(jo,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(true)}while(null!==n)}})),qo=null}catch(error){
// If something throws, leave the remaining callbacks on the queue.
throw null!==qo&&(qo=qo.slice(e+1)),// Resume flushing in the next tick
Io(Lo,flushSyncCallbackQueue),error}finally{Yo=!1}}}// TODO: this is special because it gets imported during build.
var Xo="17.0.2",Jo=i.ReactCurrentBatchConfig;var Zo={recordUnsafeLifecycleWarnings:function recordUnsafeLifecycleWarnings(e,t){},flushPendingUnsafeLifecycleWarnings:function flushPendingUnsafeLifecycleWarnings(){},recordLegacyContextWarning:function recordLegacyContextWarning(e,t){},flushLegacyContextWarning:function flushLegacyContextWarning(){},discardPendingWarnings:function discardPendingWarnings(){}},ea=function setToSortedString(e){var t=[];return e.forEach((function(e){t.push(e)})),t.sort().join(", ")},ta=[],na=[],ra=[],oa=[],aa=[],ia=[],sa=new Set;Zo.recordUnsafeLifecycleWarnings=function(e,t){
// Dedup strategy: Warn once per component.
sa.has(e.type)||("function"===typeof t.componentWillMount&&// Don't warn about react-lifecycles-compat polyfilled components.
!0!==t.componentWillMount.__suppressDeprecationWarning&&ta.push(e),1&e.mode&&"function"===typeof t.UNSAFE_componentWillMount&&na.push(e),"function"===typeof t.componentWillReceiveProps&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning&&ra.push(e),1&e.mode&&"function"===typeof t.UNSAFE_componentWillReceiveProps&&oa.push(e),"function"===typeof t.componentWillUpdate&&!0!==t.componentWillUpdate.__suppressDeprecationWarning&&aa.push(e),1&e.mode&&"function"===typeof t.UNSAFE_componentWillUpdate&&ia.push(e))},Zo.flushPendingUnsafeLifecycleWarnings=function(){
// We do an initial pass to gather component names
var e=new Set;ta.length>0&&(ta.forEach((function(t){e.add(getComponentName(t.type)||"Component"),sa.add(t.type)})),ta=[]);var t=new Set;na.length>0&&(na.forEach((function(e){t.add(getComponentName(e.type)||"Component"),sa.add(e.type)})),na=[]);var n=new Set;ra.length>0&&(ra.forEach((function(e){n.add(getComponentName(e.type)||"Component"),sa.add(e.type)})),ra=[]);var r=new Set;oa.length>0&&(oa.forEach((function(e){r.add(getComponentName(e.type)||"Component"),sa.add(e.type)})),oa=[]);var o=new Set;aa.length>0&&(aa.forEach((function(e){o.add(getComponentName(e.type)||"Component"),sa.add(e.type)})),aa=[]);var a=new Set;// Finally, we flush all the warnings
// UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
(ia.length>0&&(ia.forEach((function(e){a.add(getComponentName(e.type)||"Component"),sa.add(e.type)})),ia=[]),t.size>0)&&error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",ea(t));r.size>0&&error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s",ea(r));a.size>0&&error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",ea(a));e.size>0&&warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",ea(e));n.size>0&&warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",ea(n));o.size>0&&warn("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",ea(o))};var ua=new Map,la=new Set;// Tracks components we have already warned about.
function resolveDefaultProps(e,t){if(e&&e.defaultProps){
// Resolve default props. Taken from ReactElement
var n=r({},t),o=e.defaultProps;for(var a in o)void 0===n[a]&&(n[a]=o[a]);return n}return t}// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
Zo.recordLegacyContextWarning=function(e,t){var n=function findStrictRoot(e){for(var t=null,n=e;null!==n;)1&n.mode&&(t=n),n=n.return;return t}(e);if(null!==n){// Dedup strategy: Warn once per component.
if(!la.has(e.type)){var r=ua.get(n);(null!=e.type.contextTypes||null!=e.type.childContextTypes||null!==t&&"function"===typeof t.getChildContext)&&(void 0===r&&(r=[],ua.set(n,r)),r.push(e))}}else error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.")},Zo.flushLegacyContextWarning=function(){ua.forEach((function(e,t){if(0!==e.length){var n=e[0],r=new Set;e.forEach((function(e){r.add(getComponentName(e.type)||"Component"),la.add(e.type)}));var o=ea(r);try{setCurrentFiber(n),error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context",o)}finally{resetCurrentFiber()}}}))},Zo.discardPendingWarnings=function(){ta=[],na=[],ra=[],oa=[],aa=[],ia=[],ua=new Map};var ca,da=1073741823,pa=createCursor(null);
// Use this to detect multiple renderers using the same context
ca={};var fa=null,ma=null,ha=null,ga=!1;function resetContextDependencies(){
// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
fa=null,ma=null,ha=null,ga=!1}function enterDisallowedContextReadInDEV(){ga=!0}function exitDisallowedContextReadInDEV(){ga=!1}function pushProvider(e,t){var n=e.type._context;push(pa,n._currentValue,e),n._currentValue=t,void 0!==n._currentRenderer&&null!==n._currentRenderer&&n._currentRenderer!==ca&&error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),n._currentRenderer=ca}function popProvider(e){var t=pa.current;pop(pa,e),e.type._context._currentValue=t}function scheduleWorkOnParentPath(e,t){for(
// Update the child lanes of all the ancestors, including the alternates.
var n=e;null!==n;){var r=n.alternate;if(isSubsetOfLanes(n.childLanes,t)){if(null===r||isSubsetOfLanes(r.childLanes,t))
// Neither alternate was updated, which means the rest of the
// ancestor path already has sufficient priority.
break;r.childLanes=mergeLanes(r.childLanes,t)}else n.childLanes=mergeLanes(n.childLanes,t),null!==r&&(r.childLanes=mergeLanes(r.childLanes,t));n=n.return}}function prepareToReadContext(e,t){fa=e,ma=null,ha=null;var n=e.dependencies;null!==n&&(null!==n.firstContext&&(includesSomeLane(n.lanes,t)&&
// Context list has a pending update. Mark that this fiber performed work.
markWorkInProgressReceivedUpdate(),// Reset the work-in-progress list
n.firstContext=null))}function _readContext(e,t){if(
// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
ga&&error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),ha===e);else if(!1===t||0===t);else{var n;// Avoid deopting on observable arguments or heterogeneous types.
"number"!==typeof t||t===da?(
// Observe all updates.
ha=e,n=da):n=t;var r={context:e,observedBits:n,next:null};if(null===ma){if(null===fa)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");// This is the first dependency for this component. Create a new list.
ma=r,fa.dependencies={lanes:0,firstContext:r,responders:null}}else
// Append a new context item.
ma=ma.next=r}return e._currentValue}var va,ya,ba=2,ka=!1;function initializeUpdateQueue(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};e.updateQueue=t}function cloneUpdateQueue(e,t){
// Clone the update queue from current. Unless it's already a clone.
var n=t.updateQueue,r=e.updateQueue;if(n===r){var o={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects};t.updateQueue=o}}function createUpdate(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function enqueueUpdate(e,t){var n=e.updateQueue;if(null!==n){var r=n.shared,o=r.pending;null===o?
// This is the first update. Create a circular list.
t.next=t:(t.next=o.next,o.next=t),r.pending=t,ya!==r||va||(error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),va=!0)}}function enqueueCapturedUpdate(e,t){
// Captured updates are updates that are thrown by a child during the render
// phase. They should be discarded if the render is aborted. Therefore,
// we should only put them on the work-in-progress queue, not the current one.
var n=e.updateQueue,r=e.alternate;// Check if the work-in-progress queue is a clone.
if(null!==r){var o=r.updateQueue;if(n===o){
// The work-in-progress queue is the same as current. This happens when
// we bail out on a parent fiber that then captures an error thrown by
// a child. Since we want to append the update only to the work-in
// -progress queue, we need to clone the updates. We usually clone during
// processUpdateQueue, but that didn't happen in this case because we
// skipped over the parent when we bailed out.
var a=null,i=null,s=n.firstBaseUpdate;if(null!==s){
// Loop through the updates and clone them.
var u=s;do{var l={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};null===i?a=i=l:(i.next=l,i=l),u=u.next}while(null!==u);// Append the captured update the end of the cloned list.
null===i?a=i=t:(i.next=t,i=t)}else
// There are no base updates.
a=i=t;return n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:o.shared,effects:o.effects},void(e.updateQueue=n)}}// Append the update to the end of the list.
var c=n.lastBaseUpdate;null===c?n.firstBaseUpdate=t:c.next=t,n.lastBaseUpdate=t}function getStateFromUpdate(e,t,n,o,a,i){switch(n.tag){case 1:var s=n.payload;if("function"===typeof s){enterDisallowedContextReadInDEV();var u=s.call(i,o,a);if(1&e.mode){disableLogs();try{s.call(i,o,a)}finally{reenableLogs()}}return exitDisallowedContextReadInDEV(),u}// State object
return s;case 3:e.flags=-4097&e.flags|Ot;
// Intentional fallthrough
case 0:var l,c=n.payload;if("function"===typeof c){if(enterDisallowedContextReadInDEV(),l=c.call(i,o,a),1&e.mode){disableLogs();try{c.call(i,o,a)}finally{reenableLogs()}}exitDisallowedContextReadInDEV()}else
// Partial state object
l=c;return null===l||void 0===l?o:r({},o,l);// Merge the partial state and the previous state.
case ba:return ka=!0,o}return o}function processUpdateQueue(e,t,n,r){
// This is always non-null on a ClassComponent or HostRoot
var o=e.updateQueue;ka=!1,ya=o.shared;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;// The pending queue is circular. Disconnect the pointer between first
// and last so that it's non-circular.
var u=s,l=u.next;u.next=null,// Append pending updates to base queue
null===i?a=l:i.next=l,i=u;// If there's a current queue, and it's different from the base queue, then
// we need to transfer the updates to that queue, too. Because the base
// queue is a singly-linked list with no cycles, we can append to both
// lists and take advantage of structural sharing.
// TODO: Pass `current` as argument
var c=e.alternate;if(null!==c){
// This is always non-null on a ClassComponent or HostRoot
var d=c.updateQueue,p=d.lastBaseUpdate;p!==i&&(null===p?d.firstBaseUpdate=l:p.next=l,d.lastBaseUpdate=u)}}// These values may change as we process the queue.
if(null!==a){for(
// Iterate through the list of updates to compute the result.
var f=o.baseState,m=0,h=null,g=null,v=null,y=a// TODO: Don't need to accumulate this. Instead, we can remove renderLanes
// from the original lanes.
;;){var b=y.lane,k=y.eventTime;if(isSubsetOfLanes(r,b)){
// This update does have sufficient priority.
if(null!==v){var C={eventTime:k,
// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null};v=v.next=C}// Process this update.
if(f=getStateFromUpdate(e,0,y,f,t,n),null!==y.callback){e.flags|=

32;var w=o.effects;null===w?o.effects=[y]:w.push(y)}}else{
// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var S={eventTime:k,lane:b,tag:y.tag,payload:y.payload,callback:y.callback,next:null};null===v?(g=v=S,h=f):v=v.next=S,// Update the remaining priority in the queue.
m=mergeLanes(m,b)}if(null===(y=y.next)){if(null===(s=o.shared.pending))break;
// An update was scheduled from inside a reducer. Add the new
// pending updates to the end of the list and keep processing.
var E=s,R=E.next;// Intentionally unsound. Pending updates form a circular list, but we
// unravel them when transferring them to the base queue.
E.next=null,y=R,o.lastBaseUpdate=E,o.shared.pending=null}}null===v&&(h=f),o.baseState=h,o.firstBaseUpdate=g,o.lastBaseUpdate=v,// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
markSkippedUpdateLanes(m),e.lanes=m,e.memoizedState=f}ya=null}function callCallback(e,t){if("function"!==typeof e)throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+e);e.call(t)}function resetHasForceUpdateBeforeProcessing(){ka=!1}function checkHasForceUpdateAfterProcessing(){return ka}function commitUpdateQueue(e,t,n){
// Commit the effects
var r=t.effects;if(t.effects=null,null!==r)for(var o=0;o<r.length;o++){var a=r[o],i=a.callback;null!==i&&(a.callback=null,callCallback(i,n))}}va=!1,ya=null;var Ca,wa,Sa,Ea,Ra,xa,Ta,Pa,Ia,_a,Fa={},Da=Array.isArray,Na=(new e.Component).refs;Ca=new Set,wa=new Set,Sa=new Set,Ea=new Set,Pa=new Set,Ra=new Set,Ia=new Set,_a=new Set;var Oa=new Set;function applyDerivedStateFromProps(e,t,n,o){var a=e.memoizedState;if(1&e.mode){disableLogs();try{
// Invoke the function an extra time to help detect side-effects.
n(o,a)}finally{reenableLogs()}}var i=n(o,a);xa(t,i);// Merge the partial state and the previous state.
var s=null===i||void 0===i?a:r({},a,i);// Once the update queue is empty, persist the derived state onto the
// base state.
(e.memoizedState=s,0===e.lanes)&&(e.updateQueue.baseState=s)}Ta=function warnOnInvalidCallback(e,t){if(null!==e&&"function"!==typeof e){var n=t+"_"+e;Oa.has(n)||(Oa.add(n),error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},xa=function warnOnUndefinedDerivedState(e,t){if(void 0===t){var n=getComponentName(e)||"Component";Ra.has(n)||(Ra.add(n),error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(Fa,"_processChildContext",{enumerable:!1,value:function value(){throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(Fa);var La,Ha,Ua,Aa,Ma,Wa={isMounted:function isMounted(e){var t=zt.current;if(null!==t&&1===t.tag){var n=t,r=n.stateNode;r._warnedAboutRefsInRender||error("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",getComponentName(n.type)||"A component"),r._warnedAboutRefsInRender=!0}var o=get(e);return!!o&&getNearestMountedFiber(o)===o},enqueueSetState:function enqueueSetState(e,t,n){var r=get(e),o=requestEventTime(),a=requestUpdateLane(r),i=createUpdate(o,a);i.payload=t,void 0!==n&&null!==n&&(Ta(n,"setState"),i.callback=n),enqueueUpdate(r,i),scheduleUpdateOnFiber(r,a,o)},enqueueReplaceState:function enqueueReplaceState(e,t,n){var r=get(e),o=requestEventTime(),a=requestUpdateLane(r),i=createUpdate(o,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(Ta(n,"replaceState"),i.callback=n),enqueueUpdate(r,i),scheduleUpdateOnFiber(r,a,o)},enqueueForceUpdate:function enqueueForceUpdate(e,t){var n=get(e),r=requestEventTime(),o=requestUpdateLane(n),a=createUpdate(r,o);a.tag=ba,void 0!==t&&null!==t&&(Ta(t,"forceUpdate"),a.callback=t),enqueueUpdate(n,a),scheduleUpdateOnFiber(n,o,r)}};function checkShouldComponentUpdate(e,t,n,r,o,a,i){var s=e.stateNode;if("function"===typeof s.shouldComponentUpdate){if(1&e.mode){disableLogs();try{
// Invoke the function an extra time to help detect side-effects.
s.shouldComponentUpdate(r,a,i)}finally{reenableLogs()}}var u=s.shouldComponentUpdate(r,a,i);return void 0===u&&error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",getComponentName(t)||"Component"),u}return!t.prototype||!t.prototype.isPureReactComponent||(!shallowEqual(n,r)||!shallowEqual(o,a))}function adoptClassInstance(e,t){t.updater=Wa,e.stateNode=t,// The instance needs access to the fiber so that it can schedule updates
function set(e,t){e._reactInternals=t}(t,e),t._reactInternalInstance=Fa}function constructClassInstance(e,t,n){var r=!1,o=ko,a=ko,i=t.contextType;if("contextType"in t&&(!(// Allow null for conditional declaration
null===i||void 0!==i&&i.$$typeof===V&&void 0===i._context)&&!_a.has(t))){_a.add(t);var s="";s=void 0===i?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":"object"!==typeof i?" However, it is set to a "+typeof i+".":i.$$typeof===j?" Did you accidentally pass the Context.Provider instead?":void 0!==i._context?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(i).join(", ")+"}.",error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",getComponentName(t)||"Component",s)}if("object"===typeof i&&null!==i)a=_readContext(i);else{o=getUnmaskedContext(0,t,!0);var u=t.contextTypes;a=(r=null!==u&&void 0!==u)?getMaskedContext(e,o):ko}// Instantiate twice to help detect side-effects.
if(1&e.mode){disableLogs();try{new t(n,a);// eslint-disable-line no-new
}finally{reenableLogs()}}var l=new t(n,a),c=e.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;if(adoptClassInstance(e,l),"function"===typeof t.getDerivedStateFromProps&&null===c){var d=getComponentName(t)||"Component";wa.has(d)||(wa.add(d),error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",d,null===l.state?"null":"undefined",d))}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if("function"===typeof t.getDerivedStateFromProps||"function"===typeof l.getSnapshotBeforeUpdate){var p=null,f=null,m=null;if("function"===typeof l.componentWillMount&&!0!==l.componentWillMount.__suppressDeprecationWarning?p="componentWillMount":"function"===typeof l.UNSAFE_componentWillMount&&(p="UNSAFE_componentWillMount"),"function"===typeof l.componentWillReceiveProps&&!0!==l.componentWillReceiveProps.__suppressDeprecationWarning?f="componentWillReceiveProps":"function"===typeof l.UNSAFE_componentWillReceiveProps&&(f="UNSAFE_componentWillReceiveProps"),"function"===typeof l.componentWillUpdate&&!0!==l.componentWillUpdate.__suppressDeprecationWarning?m="componentWillUpdate":"function"===typeof l.UNSAFE_componentWillUpdate&&(m="UNSAFE_componentWillUpdate"),null!==p||null!==f||null!==m){var h=getComponentName(t)||"Component",g="function"===typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";Ea.has(h)||(Ea.add(h),error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles",h,g,null!==p?"\n  "+p:"",null!==f?"\n  "+f:"",null!==m?"\n  "+m:""))}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
return r&&cacheContext(e,o,a),l}function callComponentWillReceiveProps(e,t,n,r){var o=t.state;if("function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==o){var a=getComponentName(e.type)||"Component";Ca.has(a)||(Ca.add(a),error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",a)),Wa.enqueueReplaceState(t,t.state,null)}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(e,t,n,r){!function checkClassInstance(e,t,n){var r=e.stateNode,o=getComponentName(t)||"Component";r.render||(t.prototype&&"function"===typeof t.prototype.render?error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o)),!r.getInitialState||r.getInitialState.isReactClassApproved||r.state||error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o),r.getDefaultProps&&!r.getDefaultProps.isReactClassApproved&&error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o),r.propTypes&&error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o),r.contextType&&error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",o),r.contextTypes&&error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o),t.contextType&&t.contextTypes&&!Ia.has(t)&&(Ia.add(t),error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",o)),"function"===typeof r.componentShouldUpdate&&error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),t.prototype&&t.prototype.isPureReactComponent&&"undefined"!==typeof r.shouldComponentUpdate&&error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",getComponentName(t)||"A pure component"),"function"===typeof r.componentDidUnmount&&error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o),"function"===typeof r.componentDidReceiveProps&&error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o),"function"===typeof r.componentWillRecieveProps&&error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o),"function"===typeof r.UNSAFE_componentWillRecieveProps&&error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",o);var a=r.props!==n;void 0!==r.props&&a&&error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o),r.defaultProps&&error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o),"function"!==typeof r.getSnapshotBeforeUpdate||"function"===typeof r.componentDidUpdate||Sa.has(t)||(Sa.add(t),error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",getComponentName(t))),"function"===typeof r.getDerivedStateFromProps&&error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"===typeof r.getDerivedStateFromError&&error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"===typeof t.getSnapshotBeforeUpdate&&error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",o);var i=r.state;i&&("object"!==typeof i||Da(i))&&error("%s.state: must be set to an object or null",o),"function"===typeof r.getChildContext&&"object"!==typeof t.childContextTypes&&error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",o)}(e,t,n);var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Na,initializeUpdateQueue(e);var a=t.contextType;if("object"===typeof a&&null!==a)o.context=_readContext(a);else{var i=getUnmaskedContext(0,t,!0);o.context=getMaskedContext(e,i)}if(o.state===n){var s=getComponentName(t)||"Component";Pa.has(s)||(Pa.add(s),error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",s))}1&e.mode&&Zo.recordLegacyContextWarning(e,o),Zo.recordUnsafeLifecycleWarnings(e,o),processUpdateQueue(e,n,o,r),o.state=e.memoizedState;var u=t.getDerivedStateFromProps;"function"===typeof u&&(applyDerivedStateFromProps(e,t,u,n),o.state=e.memoizedState),// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(!function callComponentWillMount(e,t){var n=t.state;"function"===typeof t.componentWillMount&&t.componentWillMount(),"function"===typeof t.UNSAFE_componentWillMount&&t.UNSAFE_componentWillMount(),n!==t.state&&(error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",getComponentName(e.type)||"Component"),Wa.enqueueReplaceState(t,t.state,null))}(e,o),// If we had additional state updates during this life-cycle, let's
// process them now.
processUpdateQueue(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=

4)}var ja;La=!1,Ha=!1,Ua={},
/**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */
Aa={},Ma={},ja=function warnForMissingKey(e,t){if(null!==e&&"object"===typeof e&&e._store&&!e._store.validated&&null==e.key){if("object"!==typeof e._store)throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var n=getComponentName(t.type)||"Component";Aa[n]||(Aa[n]=!0,error('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};var Va=Array.isArray;function coerceRef(e,t,n){var r=n.ref;if(null!==r&&"function"!==typeof r&&"object"!==typeof r){
// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if(1&e.mode&&(!n._owner||!n._self||n._owner.stateNode===n._self)){var o=getComponentName(e.type)||"Component";Ua[o]||(error('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',r),Ua[o]=!0)}if(n._owner){var a,i=n._owner;if(i){var s=i;if(1!==s.tag)throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");a=s.stateNode}if(!a)throw Error("Missing owner for string ref "+r+". This error is likely caused by a bug in React. Please file an issue.");var u=""+r;// Check if previous string ref matches new string ref
if(null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===u)return t.ref;var l=function ref(e){var t=a.refs;t===Na&&(
// This is a lazy pooled frozen object, so we need to initialize.
t=a.refs={}),null===e?delete t[u]:t[u]=e};return l._stringRef=u,l}if("string"!==typeof r)throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw Error("Element ref was specified as a string ("+r+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.")}return r}function throwOnInvalidObjectType(e,t){if("textarea"!==e.type)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}function warnOnFunctionType(e){var t=getComponentName(e.type)||"Component";Ma[t]||(Ma[t]=!0,error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."))}// We avoid inlining this to avoid potential deopts from using try/catch.
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(e){function deleteChild(t,n){if(e){// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=

8}}function deleteRemainingChildren(t,n){if(!e)
// Noop.
return null;// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
for(var r=n;null!==r;)deleteChild(t,r),r=r.sibling;return null}function mapRemainingChildren(e,t){for(
// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
var n=new Map,r=t;null!==r;)null!==r.key?n.set(r.key,r):n.set(r.index,r),r=r.sibling;return n}function useFiber(e,t){
// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var n=createWorkInProgress(e,t);return n.index=0,n.sibling=null,n}function placeChild(t,n,r){if(t.index=r,!e)
// Noop.
return n;var o=t.alternate;if(null!==o){var a=o.index;return a<n?(
// This is a move.
t.flags=

2,n):a}
// This is an insertion.
return t.flags=2,n}function placeSingleChild(t){
// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
return e&&null===t.alternate&&(t.flags=2),t}function updateTextNode(e,t,n,r){if(null===t||6!==t.tag){
// Insert
var o=createFiberFromText(n,e.mode,r);return o.return=e,o}
// Update
var a=useFiber(t,n);return a.return=e,a}function updateElement(e,t,n,r){if(null!==t&&(t.elementType===n.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(t,n))){
// Move based on index
var o=useFiber(t,n.props);return o.ref=coerceRef(e,t,n),o.return=e,o._debugSource=n._source,o._debugOwner=n._owner,o}// Insert
var a=createFiberFromElement(n,e.mode,r);return a.ref=coerceRef(e,t,n),a.return=e,a}function updatePortal(e,t,n,r){if(null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation){
// Insert
var o=createFiberFromPortal(n,e.mode,r);return o.return=e,o}
// Update
var a=useFiber(t,n.children||[]);return a.return=e,a}function updateFragment(e,t,n,r,o){if(null===t||7!==t.tag){
// Insert
var a=createFiberFromFragment(n,e.mode,r,o);return a.return=e,a}
// Update
var i=useFiber(t,n);return i.return=e,i}function createChild(e,t,n){if("string"===typeof t||"number"===typeof t){
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var r=createFiberFromText(""+t,e.mode,n);return r.return=e,r}if("object"===typeof t&&null!==t){switch(t.$$typeof){case H:var o=createFiberFromElement(t,e.mode,n);return o.ref=coerceRef(e,null,t),o.return=e,o;case U:var a=createFiberFromPortal(t,e.mode,n);return a.return=e,a}if(Va(t)||getIteratorFn(t)){var i=createFiberFromFragment(t,e.mode,n,null);return i.return=e,i}throwOnInvalidObjectType(e,t)}return"function"===typeof t&&warnOnFunctionType(e),null}function updateSlot(e,t,n,r){
// Update the fiber if the keys match, otherwise return null.
var o=null!==t?t.key:null;if("string"===typeof n||"number"===typeof n)
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
return null!==o?null:updateTextNode(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case H:return n.key===o?n.type===A?updateFragment(e,t,n.props.children,r,o):updateElement(e,t,n,r):null;case U:return n.key===o?updatePortal(e,t,n,r):null}if(Va(n)||getIteratorFn(n))return null!==o?null:updateFragment(e,t,n,r,null);throwOnInvalidObjectType(e,n)}return"function"===typeof n&&warnOnFunctionType(e),null}function updateFromMap(e,t,n,r,o){if("string"===typeof r||"number"===typeof r)return updateTextNode(t,e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case H:var a=e.get(null===r.key?n:r.key)||null;return r.type===A?updateFragment(t,a,r.props.children,o,r.key):updateElement(t,a,r,o);case U:return updatePortal(t,e.get(null===r.key?n:r.key)||null,r,o)}if(Va(r)||getIteratorFn(r))return updateFragment(t,e.get(n)||null,r,o,null);throwOnInvalidObjectType(t,r)}return"function"===typeof r&&warnOnFunctionType(t),null}
/**
       * Warns if there is a duplicate or missing key
       */function warnOnInvalidKey(e,t,n){if("object"!==typeof e||null===e)return t;switch(e.$$typeof){case H:case U:ja(e,n);var r=e.key;if("string"!==typeof r)break;if(null===t){(t=new Set).add(r);break}if(!t.has(r)){t.add(r);break}error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",r)}return t}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
return function reconcileChildFibers(t,n,r,o){
// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var a="object"===typeof r&&null!==r&&r.type===A&&null===r.key;a&&(r=r.props.children);// Handle object types
var i="object"===typeof r&&null!==r;if(i)switch(r.$$typeof){case H:return placeSingleChild(function reconcileSingleElement(e,t,n,r){for(var o=n.key,a=t;null!==a;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(a.key===o){if(7===a.tag){if(n.type===A){deleteRemainingChildren(e,a.sibling);var i=useFiber(a,n.props.children);return i.return=e,i._debugSource=n._source,i._debugOwner=n._owner,i}}else if(a.elementType===n.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(a,n)){deleteRemainingChildren(e,a.sibling);var s=useFiber(a,n.props);return s.ref=coerceRef(e,a,n),s.return=e,s._debugSource=n._source,s._debugOwner=n._owner,s}// Didn't match.
deleteRemainingChildren(e,a);break}deleteChild(e,a),a=a.sibling}if(n.type===A){var u=createFiberFromFragment(n.props.children,e.mode,r,n.key);return u.return=e,u}var l=createFiberFromElement(n,e.mode,r);return l.ref=coerceRef(e,t,n),l.return=e,l}(t,n,r,o));case U:return placeSingleChild(function reconcileSinglePortal(e,t,n,r){for(var o=n.key,a=t;null!==a;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(a.key===o){if(4===a.tag&&a.stateNode.containerInfo===n.containerInfo&&a.stateNode.implementation===n.implementation){deleteRemainingChildren(e,a.sibling);var i=useFiber(a,n.children||[]);return i.return=e,i}deleteRemainingChildren(e,a);break}deleteChild(e,a),a=a.sibling}var s=createFiberFromPortal(n,e.mode,r);return s.return=e,s}(t,n,r,o))}if("string"===typeof r||"number"===typeof r)return placeSingleChild(function reconcileSingleTextNode(e,t,n,r){
// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(null!==t&&6===t.tag){
// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(e,t.sibling);var o=useFiber(t,n);return o.return=e,o}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(e,t);var a=createFiberFromText(n,e.mode,r);return a.return=e,a}(t,n,""+r,o));if(Va(r))return function reconcileChildrenArray(t,n,r,o){for(
// First, validate keys.
var a=null,i=0;i<r.length;i++)a=warnOnInvalidKey(r[i],a,t);for(var s=null,u=null,l=n,c=0,d=0,p=null;null!==l&&d<r.length;d++){l.index>d?(p=l,l=null):p=l.sibling;var f=updateSlot(t,l,r[d],o);if(null===f){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===l&&(l=p);break}e&&l&&null===f.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(t,l),c=placeChild(f,c,d),null===u?
// TODO: Move out of the loop. This only happens for the first run.
s=f:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
u.sibling=f,u=f,l=p}if(d===r.length)
// We've reached the end of the new children. We can delete the rest.
return deleteRemainingChildren(t,l),s;if(null===l){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;d<r.length;d++){var m=createChild(t,r[d],o);null!==m&&(c=placeChild(m,c,d),null===u?
// TODO: Move out of the loop. This only happens for the first run.
s=m:u.sibling=m,u=m)}return s}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var h=mapRemainingChildren(0,l);d<r.length;d++){var g=updateFromMap(h,t,d,r[d],o);null!==g&&(e&&null!==g.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
h.delete(null===g.key?d:g.key),c=placeChild(g,c,d),null===u?s=g:u.sibling=g,u=g)}return e&&
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
h.forEach((function(e){return deleteChild(t,e)})),s}(t,n,r,o);if(getIteratorFn(r))return function reconcileChildrenIterator(t,n,r,o){
// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var a=getIteratorFn(r);if("function"!==typeof a)throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
// We don't support rendering Generators because it's a mutation.
// See https://github.com/facebook/react/issues/12995
"function"===typeof Symbol&&// $FlowFixMe Flow doesn't know about toStringTag
"Generator"===r[Symbol.toStringTag]&&(Ha||error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),Ha=!0),// Warn about using Maps as children
r.entries===a&&(La||error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),La=!0);// First, validate keys.
// We'll get a different iterator later for the main pass.
var i=a.call(r);if(i)for(var s=null,u=i.next();!u.done;u=i.next())s=warnOnInvalidKey(u.value,s,t);var l=a.call(r);if(null==l)throw Error("An iterable object provided no iterator.");for(var c=null,d=null,p=n,f=0,m=0,h=null,g=l.next();null!==p&&!g.done;m++,g=l.next()){p.index>m?(h=p,p=null):h=p.sibling;var v=updateSlot(t,p,g.value,o);if(null===v){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===p&&(p=h);break}e&&p&&null===v.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(t,p),f=placeChild(v,f,m),null===d?
// TODO: Move out of the loop. This only happens for the first run.
c=v:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
d.sibling=v,d=v,p=h}if(g.done)
// We've reached the end of the new children. We can delete the rest.
return deleteRemainingChildren(t,p),c;if(null===p){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!g.done;m++,g=l.next()){var y=createChild(t,g.value,o);null!==y&&(f=placeChild(y,f,m),null===d?
// TODO: Move out of the loop. This only happens for the first run.
c=y:d.sibling=y,d=y)}return c}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var b=mapRemainingChildren(0,p);!g.done;m++,g=l.next()){var k=updateFromMap(b,t,m,g.value,o);null!==k&&(e&&null!==k.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
b.delete(null===k.key?m:k.key),f=placeChild(k,f,m),null===d?c=k:d.sibling=k,d=k)}return e&&
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
b.forEach((function(e){return deleteChild(t,e)})),c}(t,n,r,o);if(i&&throwOnInvalidObjectType(t,r),"function"===typeof r&&warnOnFunctionType(t),"undefined"===typeof r&&!a)
// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(t.tag){case 1:if(t.stateNode.render._isMockFunction)
// We allow auto-mocks to proceed as if they're returning null.
break;
// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case g:case 0:case u:case p:throw Error((getComponentName(t.type)||"Component")+"(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.")}// Remaining cases are all treated as empty.
return deleteRemainingChildren(t,n)}}var za=ChildReconciler(!0),Ba=ChildReconciler(!1);// Reset a workInProgress child set to prepare it for a second pass.
function resetChildFibers(e,t){for(var n=e.child;null!==n;)resetWorkInProgress(n,t),n=n.sibling}var $a={},qa=createCursor($a),Qa=createCursor($a),Ya=createCursor($a);function requiredContext(e){if(e===$a)throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function getRootHostContainer(){return requiredContext(Ya.current)}function pushHostContainer(e,t){
// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push(Ya,t,e),// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(Qa,e,e),// Finally, we need to push the host context to the stack.
// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
push(qa,$a,e);var n=function getRootHostContext(e){var t,n,r=e.nodeType;switch(r){case 9:case 11:t=9===r?"#document":"#fragment";var o=e.documentElement;n=o?o.namespaceURI:getChildNamespace(null,"");break;default:var a=8===r?e.parentNode:e;n=getChildNamespace(a.namespaceURI||null,t=a.tagName)}var i=t.toLowerCase();return{namespace:n,ancestorInfo:Yr(null,i)}}(t);// Now that we know this function doesn't throw, replace it.
pop(qa,e),push(qa,n,e)}function popHostContainer(e){pop(qa,e),pop(Qa,e),pop(Ya,e)}function getHostContext(){return requiredContext(qa.current)}function pushHostContext(e){requiredContext(Ya.current);var t=requiredContext(qa.current),n=function getChildHostContext(e,t,n){var r=e;return{namespace:getChildNamespace(r.namespace,t),ancestorInfo:Yr(r.ancestorInfo,t)}}(t,e.type);// Don't push this Fiber's context unless it's unique.
t!==n&&(// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(Qa,e,e),push(qa,n,e))}function popHostContext(e){
// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
Qa.current===e&&(pop(qa,e),pop(Qa,e))}var Ka=createCursor(0);// The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.
function hasSuspenseContext(e,t){return 0!==(e&t)}function setDefaultShallowSuspenseContext(e){return 1&e}function setShallowSuspenseContext(e,t){return 1&e|t}function pushSuspenseContext(e,t){push(Ka,t,e)}function popSuspenseContext(e){pop(Ka,e)}function shouldCaptureSuspense(e,t){
// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var n=e.memoizedState;if(null!==n)return null!==n.dehydrated;var r=e.memoizedProps;// In order to capture, the Suspense component must have a fallback prop.
return void 0!==r.fallback&&(// Regular boundaries always capture.
!0!==r.unstable_avoidThisFallback||!t)}function findFirstSuspended(e){for(var t=e;null!==t;){if(t.tag===c){var n=t.memoizedState;if(null!==n){var r=n.dehydrated;if(null===r||r.data===to||isSuspenseInstanceFallback(r))return t}}else if(t.tag===m&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
void 0!==t.memoizedProps.revealOrder){if(0!==(t.flags&Ot))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ga=null,Xa=null,Ja=!1;// Represents whether effect should fire.
function deleteHydratableInstance(e,t){switch(e.tag){case 3:!function didNotHydrateContainerInstance(e,t){1===t.nodeType?warnForDeletedHydratableElement(e,t):8===t.nodeType||warnForDeletedHydratableText(e,t)}(e.stateNode.containerInfo,t);break;case 5:!function didNotHydrateInstance(e,t,n,r){!0!==t.suppressHydrationWarning&&(1===r.nodeType?warnForDeletedHydratableElement(n,r):8===r.nodeType||warnForDeletedHydratableText(n,r))}(e.type,e.memoizedProps,e.stateNode,t)}var n=function createFiberFromHostInstanceForDeletion(){var e=lu(5,null,null,0);// TODO: These should not need a type.
return e.elementType="DELETED",e.type="DELETED",e}();n.stateNode=t,n.return=e,n.flags=8,// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function insertNonHydratedInstance(e,t){switch(t.flags=-1025&t.flags|2,e.tag){case 3:var n=e.stateNode.containerInfo;switch(t.tag){case 5:var r=t.type;t.pendingProps;!function didNotFindHydratableContainerInstance(e,t,n){warnForInsertedHydratedElement(e,t)}(n,r);break;case 6:!function didNotFindHydratableContainerTextInstance(e,t){warnForInsertedHydratedText(e,t)}(n,t.pendingProps)}break;case 5:e.type;var o=e.memoizedProps,a=e.stateNode;switch(t.tag){case 5:var i=t.type;t.pendingProps;!function didNotFindHydratableInstance(e,t,n,r,o){!0!==t.suppressHydrationWarning&&warnForInsertedHydratedElement(n,r)}(0,o,a,i);break;case 6:!function didNotFindHydratableTextInstance(e,t,n,r){!0!==t.suppressHydrationWarning&&warnForInsertedHydratedText(n,r)}(0,o,a,t.pendingProps);break;case c:!function didNotFindHydratableSuspenseInstance(e,t,n){t.suppressHydrationWarning}(0,o)}break;default:return}}function tryHydrate(e,t){switch(e.tag){case 5:var n=e.type,r=(e.pendingProps,function canHydrateInstance(e,t,n){return 1!==e.nodeType||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e;// This has now been refined to an element node.
}(t,n));return null!==r&&(e.stateNode=r,!0);case 6:var o=function canHydrateTextInstance(e,t){return""===t||3!==e.nodeType?null:e;// This has now been refined to a text node.
}(t,e.pendingProps);return null!==o&&(e.stateNode=o,!0);default:return!1}}function tryToClaimNextHydratableInstance(e){if(Ja){var t=Xa;if(!t)
// Nothing to hydrate. Make it an insertion.
return insertNonHydratedInstance(Ga,e),Ja=!1,void(Ga=e);var n=t;if(!tryHydrate(e,t)){if(!(
// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
t=getNextHydratableSibling(n))||!tryHydrate(e,t))
// Nothing to hydrate. Make it an insertion.
return insertNonHydratedInstance(Ga,e),Ja=!1,void(Ga=e);// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(Ga,n)}Ga=e,Xa=getFirstHydratableChild(t)}}function prepareToHydrateHostTextInstance(e){var t=e.stateNode,n=e.memoizedProps,r=function hydrateTextInstance(e,t,n){return precacheFiberNode(n,e),function diffHydratedText(e,t){return e.nodeValue!==t}(e,t)}(t,n,e);if(r){
// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var o=Ga;if(null!==o)switch(o.tag){case 3:o.stateNode.containerInfo;!function didNotMatchHydratedContainerTextInstance(e,t,n){warnForUnmatchedText(t,n)}(0,t,n);break;case 5:o.type;var a=o.memoizedProps;o.stateNode;!function didNotMatchHydratedTextInstance(e,t,n,r,o){!0!==t.suppressHydrationWarning&&warnForUnmatchedText(r,o)}(0,a,0,t,n)}}return r}function skipPastDehydratedSuspenseInstance(e){var t=e.memoizedState,n=null!==t?t.dehydrated:null;if(!n)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return function getNextHydratableInstanceAfterSuspenseInstance(e){for(var t=e.nextSibling,n=0// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
;t;){if(8===t.nodeType){var r=t.data;if("/$"===r){if(0===n)return getNextHydratableSibling(t);n--}else"$"!==r&&r!==no&&r!==to||n++}t=t.nextSibling}// TODO: Warn, we didn't find the end comment boundary.
return null}(n)}function popToNextHostParent(e){for(var t=e.return;null!==t&&5!==t.tag&&3!==t.tag&&t.tag!==c;)t=t.return;Ga=t}function popHydrationState(e){if(e!==Ga)
// We're deeper than the current hydration context, inside an inserted
// tree.
return!1;if(!Ja)
// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
return popToNextHostParent(e),Ja=!0,!1;var t=e.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(5!==e.tag||"head"!==t&&"body"!==t&&!shouldSetTextContent(t,e.memoizedProps))for(var n=Xa;n;)deleteHydratableInstance(e,n),n=getNextHydratableSibling(n);return popToNextHostParent(e),Xa=e.tag===c?skipPastDehydratedSuspenseInstance(e):Ga?getNextHydratableSibling(e.stateNode):null,!0}function resetHydrationState(){Ga=null,Xa=null,Ja=!1}function getIsHydrating(){return Ja}// and should be reset before starting a new render.
// This tracks which mutable sources need to be reset after a render.
var Za,ei=[];function resetWorkInProgressVersions(){for(var e=0;e<ei.length;e++){ei[e]._workInProgressVersionPrimary=null}ei.length=0}function setWorkInProgressVersion(e,t){e._workInProgressVersionPrimary=t,ei.push(e)}
// Used to detect multiple renderers using the same mutable source.
Za={};// Eager reads the version of a mutable source and stores it on the root.
var ti,ni,ri=i.ReactCurrentDispatcher,oi=i.ReactCurrentBatchConfig;ni={},ti=new Set;// These are set right before calling the component.
var ai=0,ii=null,si=null,ui=null,li=!1,ci=!1,di=null,pi=null,fi=-1,mi=!1;// The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.
function mountHookTypesDev(){var e=di;null===pi?pi=[e]:pi.push(e)}function updateHookTypesDev(){var e=di;null!==pi&&(fi++,pi[fi]!==e&&function warnOnHookMismatchInDev(e){var t=getComponentName(ii.type);if(!ti.has(t)&&(ti.add(t),null!==pi)){for(var n="",r=30,o=0;o<=fi;o++){// Extra space so second column lines up
// lol @ IE not supporting String#repeat
for(var a=pi[o],i=o===fi?e:a,s=o+1+". "+a;s.length<r;)s+=" ";n+=s+=i+"\n"}error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",t,n)}}(e))}function checkDepsAreArrayDev(e){void 0===e||null===e||Array.isArray(e)||
// Verify deps, but only on mount to avoid extra checks.
// It's unlikely their type would change as usually you define them inline.
error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",di,typeof e)}function throwInvalidHookError(){throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.")}function areHookInputsEqual(e,t){if(mi)
// Only true when this component is being hot reloaded.
return!1;if(null===t)return error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",di),!1;
// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
e.length!==t.length&&error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",di,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function renderWithHooks(e,t,n,r,o,a){ai=a,ii=t,pi=null!==e?e._debugHookTypes:null,fi=-1,// Used for hot reloading:
mi=null!==e&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=0,null!==e&&null!==e.memoizedState?ri.current=ki:
// This dispatcher handles an edge case where a component is updating,
// but no stateful hooks have been used.
// We want to match the production code behavior (which will use HooksDispatcherOnMount),
// but with the extra DEV validation to ensure hooks ordering hasn't changed.
// This dispatcher does that.
ri.current=null!==pi?bi:yi;var i=n(r,o);// Check if there was a render phase update
if(ci){
// Keep rendering in a loop for as long as render phase updates continue to
// be scheduled. Use a counter to prevent infinite loops.
var s=0;do{if(ci=!1,!(s<25))throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");s+=1,
// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
mi=!1,// Start over from the beginning of the list
si=null,ui=null,t.updateQueue=null,
// Also validate hook order for cascading updates.
fi=-1,ri.current=Ci,i=n(r,o)}while(ci)}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
ri.current=vi,t._debugHookTypes=pi;// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var u=null!==si&&null!==si.next;if(ai=0,ii=null,si=null,ui=null,di=null,pi=null,fi=-1,li=!1,u)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return i}function bailoutHooks(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes=removeLanes(e.lanes,n)}function resetHooksAfterThrow(){if(
// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
ri.current=vi,li){for(
// There were render phase updates. These are only valid for this render
// phase, which we are now aborting. Remove the updates from the queues so
// they do not persist to the next render. Do not remove updates from hooks
// that weren't processed.
// Only reset the updates from the queue if it has a clone. If it does
// not have a clone, that means it wasn't processed, and the updates were
// scheduled before we entered the render phase.
var e=ii.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}li=!1}ai=0,ii=null,si=null,ui=null,pi=null,fi=-1,di=null,gi=!1,ci=!1}function mountWorkInProgressHook(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?
// This is the first hook in the list
ii.memoizedState=ui=e:
// Append to the end of the list
ui=ui.next=e,ui}function updateWorkInProgressHook(){
// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
var e,t;if(null===si){var n=ii.alternate;e=null!==n?n.memoizedState:null}else e=si.next;if(null!==(t=null===ui?ii.memoizedState:ui.next))
// There's already a work-in-progress. Reuse it.
t=(ui=t).next,si=e;else{
// Clone from the current hook.
if(null===e)throw Error("Rendered more hooks than during the previous render.");var r={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null};null===ui?
// This is the first hook in the list.
ii.memoizedState=ui=r:
// Append to the end of the list.
ui=ui.next=r}return ui}function basicStateReducer(e,t){
// $FlowFixMe: Flow doesn't like mixed types
return"function"===typeof t?t(e):t}function mountReducer(e,t,n){var r,o=mountWorkInProgressHook();r=void 0!==n?n(t):t,o.memoizedState=o.baseState=r;var a=o.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i=a.dispatch=dispatchAction.bind(null,ii,a);return[o.memoizedState,i]}function updateReducer(e,t,n){var r=updateWorkInProgressHook(),o=r.queue;if(null===o)throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;var a=si,i=a.baseQueue,s=o.pending;// The last rebase update that is NOT part of the base state.
if(null!==s){
// We have new updates that haven't been processed yet.
// We'll add them to the base queue.
if(null!==i){
// Merge the pending queue and the base queue.
var u=i.next,l=s.next;i.next=l,s.next=u}a.baseQueue!==i&&
// Internal invariant that should never happen, but feasibly could in
// the future if we implement resuming, or some form of that.
error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),a.baseQueue=i=s,o.pending=null}if(null!==i){
// We have a queue to process.
var c=i.next,d=a.baseState,p=null,f=null,m=null,h=c;do{var g=h.lane;if(isSubsetOfLanes(ai,g)){
// This update does have sufficient priority.
if(null!==m){var v={
// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:0,action:h.action,eagerReducer:h.eagerReducer,eagerState:h.eagerState,next:null};m=m.next=v}// Process this update.
if(h.eagerReducer===e)
// If this update was processed eagerly, and its reducer matches the
// current reducer, we can use the eagerly computed state.
d=h.eagerState;else d=e(d,h.action)}else{
// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var y={lane:g,action:h.action,eagerReducer:h.eagerReducer,eagerState:h.eagerState,next:null};null===m?(f=m=y,p=d):m=m.next=y,// Update the remaining priority in the queue.
// TODO: Don't need to accumulate this. Instead, we can remove
// renderLanes from the original lanes.
ii.lanes=mergeLanes(ii.lanes,g),markSkippedUpdateLanes(g)}h=h.next}while(null!==h&&h!==c);null===m?p=d:m.next=f,// Mark that the fiber performed work, but only if the new state is
// different from the current state.
vr(d,r.memoizedState)||markWorkInProgressReceivedUpdate(),r.memoizedState=d,r.baseState=p,r.baseQueue=m,o.lastRenderedState=d}var b=o.dispatch;return[r.memoizedState,b]}function rerenderReducer(e,t,n){var r=updateWorkInProgressHook(),o=r.queue;if(null===o)throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var a=o.dispatch,i=o.pending,s=r.memoizedState;if(null!==i){
// The queue doesn't persist past this render pass.
o.pending=null;var u=i.next,l=u;do{s=e(s,l.action),l=l.next}while(l!==u);// Mark that the fiber performed work, but only if the new state is
// different from the current state.
vr(s,r.memoizedState)||markWorkInProgressReceivedUpdate(),r.memoizedState=s,// Don't persist the state accumulated from the render phase updates to
// the base state unless the queue is empty.
// TODO: Not sure if this is the desired semantics, but it's what we
// do for gDSFP. I can't remember why.
null===r.baseQueue&&(r.baseState=s),o.lastRenderedState=s}return[s,a]}function readFromUnsubcribedMutableSource(e,t,n){!function warnAboutMultipleRenderersDEV(e){null==e._currentPrimaryRenderer?e._currentPrimaryRenderer=Za:e._currentPrimaryRenderer!==Za&&error("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.")}(t);var r=(0,t._getVersion)(t._source),o=!1,a=function getWorkInProgressVersion(e){return e._workInProgressVersionPrimary}(t);if(null!==a?
// It's safe to read if the store hasn't been mutated since the last time
// we read something.
o=a===r:(
// If there's no version, then this is the first time we've read from the
// source during the current render pass, so we need to do a bit more work.
// What we need to determine is if there are any hooks that already
// subscribed to the source, and if so, whether there are any pending
// mutations that haven't been synchronized yet.
// If there are no pending mutations, then `root.mutableReadLanes` will be
// empty, and we know we can safely read.
// If there *are* pending mutations, we may still be able to safely read
// if the currently rendering lanes are inclusive of the pending mutation
// lanes, since that guarantees that the value we're about to read from
// the source is consistent with the values that we read during the most
// recent mutation.
o=isSubsetOfLanes(ai,e.mutableReadLanes))&&
// If it's safe to read from this source during the current render,
// store the version in case other components read from it.
// A changed version number will let those components know to throw and restart the render.
setWorkInProgressVersion(t,r),o){var i=n(t._source);return"function"===typeof i&&error("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."),i}
// This handles the special case of a mutable source being shared between renderers.
// In that case, if the source is mutated between the first and second renderer,
// The second renderer don't know that it needs to reset the WIP version during unwind,
// (because the hook only marks sources as dirty if it's written to their WIP version).
// That would cause this tear check to throw again and eventually be visible to the user.
// We can avoid this infinite loop by explicitly marking the source as dirty.
// This can lead to tearing in the first renderer when it resumes,
// but there's nothing we can do about that (short of throwing here and refusing to continue the render).
throw function markSourceAsDirty(e){ei.push(e)}(t),Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.")}function useMutableSource(e,t,n,r){var o=function getWorkInProgressRoot(){return ss}();if(null===o)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");var a=t._getVersion,i=a(t._source),s=ri.current,u=s.useState((function(){return readFromUnsubcribedMutableSource(o,t,n)})),l=u[0],c=u[1],d=l,p=ui,f=e.memoizedState,m=f.refs,h=m.getSnapshot,g=f.source,v=f.subscribe,y=ii;// If any of the inputs to useMutableSource change, reading is potentially unsafe.
// If either the source or the subscription have changed we can't can't trust the update queue.
// Maybe the source changed in a way that the old subscription ignored but the new one depends on.
// If the getSnapshot function changed, we also shouldn't rely on the update queue.
// It's possible that the underlying source was mutated between the when the last "change" event fired,
// and when the current render (with the new getSnapshot function) is processed.
// In both cases, we need to throw away pending updates (since they are no longer relevant)
// and treat reading from the source as we do in the mount case.
if(e.memoizedState={refs:m,source:t,subscribe:r},// Sync the values needed by our subscription handler after each commit.
s.useEffect((function(){m.getSnapshot=n,// Normally the dispatch function for a state hook never changes,
// but this hook recreates the queue in certain cases  to avoid updates from stale sources.
// handleChange() below needs to reference the dispatch function without re-subscribing,
// so we use a ref to ensure that it always has the latest version.
m.setSnapshot=c;// Check for a possible change between when we last rendered now.
var e=a(t._source);if(!vr(i,e)){var r=n(t._source);if("function"===typeof r&&error("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."),!vr(d,r)){c(r);var s=requestUpdateLane(y);markRootMutableRead(o,s)}// If the source mutated between render and now,
// there may be state updates already scheduled from the old source.
// Entangle the updates so that they render in the same batch.
!function markRootEntangled(e,t){e.entangledLanes|=t;for(var n=e.entanglements,r=t;r>0;){var o=pickArbitraryLaneIndex(r),a=1<<o;n[o]|=t,r&=~a}}(o,o.mutableReadLanes)}}),[n,t,r]),// If we got a new source or subscribe function, re-subscribe in a passive effect.
s.useEffect((function(){var e=r(t._source,(function handleChange(){var e=m.getSnapshot,n=m.setSnapshot;try{n(e(t._source));// Record a pending mutable source update with the same expiration time.
var r=requestUpdateLane(y);markRootMutableRead(o,r)}catch(error){
// A selector might throw after a source mutation.
// e.g. it might try to read from a part of the store that no longer exists.
// In this case we should still schedule an update with React.
// Worst case the selector will throw again and then an error boundary will handle it.
n((function(){throw error}))}}));return"function"!==typeof e&&error("Mutable source subscribe function must return an unsubscribe function."),e}),[t,r]),!vr(h,n)||!vr(g,t)||!vr(v,r)){
// Create a new queue and setState method,
// So if there are interleaved updates, they get pushed to the older queue.
// When this becomes current, the previous queue and dispatch method will be discarded,
// including any interleaving updates that occur.
var b={pending:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:d};b.dispatch=c=dispatchAction.bind(null,ii,b),p.queue=b,p.baseQueue=null,d=readFromUnsubcribedMutableSource(o,t,n),p.memoizedState=p.baseState=d}return d}function mountMutableSource(e,t,n){var r=mountWorkInProgressHook();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},useMutableSource(r,e,t,n)}function updateMutableSource(e,t,n){return useMutableSource(updateWorkInProgressHook(),e,t,n)}function mountState(e){var t=mountWorkInProgressHook();"function"===typeof e&&(
// $FlowFixMe: Flow doesn't like mixed types
e=e()),t.memoizedState=t.baseState=e;var n=t.queue={pending:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:e},r=n.dispatch=dispatchAction.bind(null,ii,n);return[t.memoizedState,r]}function updateState(e){return updateReducer(basicStateReducer)}function rerenderState(e){return rerenderReducer(basicStateReducer)}function pushEffect(e,t,n,r){var o={tag:e,create:t,destroy:n,deps:r,
// Circular
next:null},a=ii.updateQueue;if(null===a)a={lastEffect:null},ii.updateQueue=a,a.lastEffect=o.next=o;else{var i=a.lastEffect;if(null===i)a.lastEffect=o.next=o;else{var s=i.next;i.next=o,o.next=s,a.lastEffect=o}}return o}function mountRef(e){var t=mountWorkInProgressHook(),n={current:e};return Object.seal(n),t.memoizedState=n,n}function updateRef(e){return updateWorkInProgressHook().memoizedState}function mountEffectImpl(e,t,n,r){var o=mountWorkInProgressHook(),a=void 0===r?null:r;ii.flags|=e,o.memoizedState=pushEffect(

1|t,n,void 0,a)}function updateEffectImpl(e,t,n,r){var o=updateWorkInProgressHook(),a=void 0===r?null:r,i=void 0;if(null!==si){var s=si.memoizedState;if(i=s.destroy,null!==a)if(areHookInputsEqual(a,s.deps))return void pushEffect(t,n,i,a)}ii.flags|=e,o.memoizedState=pushEffect(1|t,n,i,a)}function mountEffect(e,t){
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
return"undefined"!==typeof jest&&warnIfNotCurrentlyActingEffectsInDEV(ii),mountEffectImpl(516,

4,e,t)}function updateEffect(e,t){
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
return"undefined"!==typeof jest&&warnIfNotCurrentlyActingEffectsInDEV(ii),updateEffectImpl(516,4,e,t)}function mountLayoutEffect(e,t){return mountEffectImpl(4,

2,e,t)}function updateLayoutEffect(e,t){return updateEffectImpl(4,2,e,t)}function imperativeHandleEffect(e,t){if("function"===typeof t){var n=t,r=e();return n(r),function(){n(null)}}if(null!==t&&void 0!==t){var o=t;o.hasOwnProperty("current")||error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}");var a=e();return o.current=a,function(){o.current=null}}}function mountImperativeHandle(e,t,n){"function"!==typeof t&&error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");// TODO: If deps are provided, should we skip comparing the ref itself?
var r=null!==n&&void 0!==n?n.concat([e]):null;return mountEffectImpl(4,2,imperativeHandleEffect.bind(null,t,e),r)}function updateImperativeHandle(e,t,n){"function"!==typeof t&&error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");// TODO: If deps are provided, should we skip comparing the ref itself?
var r=null!==n&&void 0!==n?n.concat([e]):null;return updateEffectImpl(4,2,imperativeHandleEffect.bind(null,t,e),r)}function mountDebugValue(e,t){// This hook is normally a no-op.
// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}var hi=mountDebugValue;function mountCallback(e,t){var n=void 0===t?null:t;return mountWorkInProgressHook().memoizedState=[e,n],e}function updateCallback(e,t){var n=updateWorkInProgressHook(),r=void 0===t?null:t,o=n.memoizedState;if(null!==o&&(null!==r&&areHookInputsEqual(r,o[1])))return o[0];return n.memoizedState=[e,r],e}function mountMemo(e,t){var n=mountWorkInProgressHook(),r=void 0===t?null:t,o=e();return n.memoizedState=[o,r],o}function updateMemo(e,t){var n=updateWorkInProgressHook(),r=void 0===t?null:t,o=n.memoizedState;if(null!==o&&(null!==r&&areHookInputsEqual(r,o[1])))return o[0];var a=e();return n.memoizedState=[a,r],a}function mountDeferredValue(e){var t=mountState(e),n=t[0],r=t[1];return mountEffect((function(){var t=oi.transition;oi.transition=1;try{r(e)}finally{oi.transition=t}}),[e]),n}function updateDeferredValue(e){var t=updateState(),n=t[0],r=t[1];return updateEffect((function(){var t=oi.transition;oi.transition=1;try{r(e)}finally{oi.transition=t}}),[e]),n}function rerenderDeferredValue(e){var t=rerenderState(),n=t[0],r=t[1];return updateEffect((function(){var t=oi.transition;oi.transition=1;try{r(e)}finally{oi.transition=t}}),[e]),n}function startTransition(e,t){var n=getCurrentPriorityLevel();runWithPriority$1(n<Vo?Vo:n,(function(){e(!0)})),runWithPriority$1(n>zo?zo:n,(function(){var n=oi.transition;oi.transition=1;try{e(!1),t()}finally{oi.transition=n}}))}function mountTransition(){var e=mountState(!1),t=e[0],n=e[1],r=startTransition.bind(null,n);// The `start` method can be stored on a ref, since `setPending`
// never changes.
return mountRef(r),[r,t]}function updateTransition(){var e=updateState()[0];return[updateRef().current,e]}function rerenderTransition(){var e=rerenderState()[0];return[updateRef().current,e]}var gi=!1;function warnOnOpaqueIdentifierAccessInDEV(e){
// TODO: Should warn in effects and callbacks, too
var t=getComponentName(e.type)||"Unknown";(function getIsRendering(){return ge})()&&!ni[t]&&(error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."),ni[t]=!0)}function mountOpaqueIdentifier(){var e=makeClientIdInDEV.bind(null,warnOnOpaqueIdentifierAccessInDEV.bind(null,ii));if(getIsHydrating()){var t=!1,n=ii,r=function makeOpaqueHydratingObject(e){return{$$typeof:K,toString:e,valueOf:e}}((function readValue(){throw t||(
// Only upgrade once. This works even inside the render phase because
// the update is added to a shared queue, which outlasts the
// in-progress render.
t=!0,gi=!0,o(e()),gi=!1,warnOnOpaqueIdentifierAccessInDEV(n)),Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.")})),o=mountState(r)[1];return 0===(2&ii.mode)&&(ii.flags|=516,pushEffect(5,(function(){o(e())}),void 0,null)),r}var a=e();return mountState(a),a}function updateOpaqueIdentifier(){return updateState()[0]}function rerenderOpaqueIdentifier(){return rerenderState()[0]}function dispatchAction(e,t,n){"function"===typeof arguments[3]&&error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=requestEventTime(),o=requestUpdateLane(e),a={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},i=t.pending;null===i?
// This is the first update. Create a circular list.
a.next=a:(a.next=i.next,i.next=a),t.pending=a;var s=e.alternate;if(e===ii||null!==s&&s===ii)
// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
ci=li=!0;else{if(0===e.lanes&&(null===s||0===s.lanes)){
// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var u=t.lastRenderedReducer;if(null!==u){var l;l=ri.current,ri.current=Si;try{var c=t.lastRenderedState,d=u(c,n);if(// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
a.eagerReducer=u,a.eagerState=d,vr(d,c))
// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
return}catch(error){// Suppress the error. It will throw again in the render phase.
}finally{ri.current=l}}}
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
"undefined"!==typeof jest&&(warnIfNotScopedWithMatchingAct(e),Ks(e)),scheduleUpdateOnFiber(e,o,r)}}var vi={readContext:_readContext,useCallback:throwInvalidHookError,useContext:throwInvalidHookError,useEffect:throwInvalidHookError,useImperativeHandle:throwInvalidHookError,useLayoutEffect:throwInvalidHookError,useMemo:throwInvalidHookError,useReducer:throwInvalidHookError,useRef:throwInvalidHookError,useState:throwInvalidHookError,useDebugValue:throwInvalidHookError,useDeferredValue:throwInvalidHookError,useTransition:throwInvalidHookError,useMutableSource:throwInvalidHookError,useOpaqueIdentifier:throwInvalidHookError,unstable_isNewReconciler:b},yi=null,bi=null,ki=null,Ci=null,wi=null,Si=null,Ei=null,Ri=function warnInvalidContextAccess(){error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},xi=function warnInvalidHookAccess(){error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};yi={readContext:function readContext(e,t){return _readContext(e,t)},useCallback:function useCallback(e,t){return di="useCallback",mountHookTypesDev(),checkDepsAreArrayDev(t),mountCallback(e,t)},useContext:function useContext(e,t){return di="useContext",mountHookTypesDev(),_readContext(e,t)},useEffect:function useEffect(e,t){return di="useEffect",mountHookTypesDev(),checkDepsAreArrayDev(t),mountEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return di="useImperativeHandle",mountHookTypesDev(),checkDepsAreArrayDev(n),mountImperativeHandle(e,t,n)},useLayoutEffect:function useLayoutEffect(e,t){return di="useLayoutEffect",mountHookTypesDev(),checkDepsAreArrayDev(t),mountLayoutEffect(e,t)},useMemo:function useMemo(e,t){di="useMemo",mountHookTypesDev(),checkDepsAreArrayDev(t);var n=ri.current;ri.current=wi;try{return mountMemo(e,t)}finally{ri.current=n}},useReducer:function useReducer(e,t,n){di="useReducer",mountHookTypesDev();var r=ri.current;ri.current=wi;try{return mountReducer(e,t,n)}finally{ri.current=r}},useRef:function useRef(e){return di="useRef",mountHookTypesDev(),mountRef(e)},useState:function useState(e){di="useState",mountHookTypesDev();var t=ri.current;ri.current=wi;try{return mountState(e)}finally{ri.current=t}},useDebugValue:function useDebugValue(e,t){di="useDebugValue",mountHookTypesDev()},useDeferredValue:function useDeferredValue(e){return di="useDeferredValue",mountHookTypesDev(),mountDeferredValue(e)},useTransition:function useTransition(){return di="useTransition",mountHookTypesDev(),mountTransition()},useMutableSource:function useMutableSource(e,t,n){return di="useMutableSource",mountHookTypesDev(),mountMutableSource(e,t,n)},useOpaqueIdentifier:function useOpaqueIdentifier(){return di="useOpaqueIdentifier",mountHookTypesDev(),mountOpaqueIdentifier()},unstable_isNewReconciler:b},bi={readContext:function readContext(e,t){return _readContext(e,t)},useCallback:function useCallback(e,t){return di="useCallback",updateHookTypesDev(),mountCallback(e,t)},useContext:function useContext(e,t){return di="useContext",updateHookTypesDev(),_readContext(e,t)},useEffect:function useEffect(e,t){return di="useEffect",updateHookTypesDev(),mountEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return di="useImperativeHandle",updateHookTypesDev(),mountImperativeHandle(e,t,n)},useLayoutEffect:function useLayoutEffect(e,t){return di="useLayoutEffect",updateHookTypesDev(),mountLayoutEffect(e,t)},useMemo:function useMemo(e,t){di="useMemo",updateHookTypesDev();var n=ri.current;ri.current=wi;try{return mountMemo(e,t)}finally{ri.current=n}},useReducer:function useReducer(e,t,n){di="useReducer",updateHookTypesDev();var r=ri.current;ri.current=wi;try{return mountReducer(e,t,n)}finally{ri.current=r}},useRef:function useRef(e){return di="useRef",updateHookTypesDev(),mountRef(e)},useState:function useState(e){di="useState",updateHookTypesDev();var t=ri.current;ri.current=wi;try{return mountState(e)}finally{ri.current=t}},useDebugValue:function useDebugValue(e,t){di="useDebugValue",updateHookTypesDev()},useDeferredValue:function useDeferredValue(e){return di="useDeferredValue",updateHookTypesDev(),mountDeferredValue(e)},useTransition:function useTransition(){return di="useTransition",updateHookTypesDev(),mountTransition()},useMutableSource:function useMutableSource(e,t,n){return di="useMutableSource",updateHookTypesDev(),mountMutableSource(e,t,n)},useOpaqueIdentifier:function useOpaqueIdentifier(){return di="useOpaqueIdentifier",updateHookTypesDev(),mountOpaqueIdentifier()},unstable_isNewReconciler:b},ki={readContext:function readContext(e,t){return _readContext(e,t)},useCallback:function useCallback(e,t){return di="useCallback",updateHookTypesDev(),updateCallback(e,t)},useContext:function useContext(e,t){return di="useContext",updateHookTypesDev(),_readContext(e,t)},useEffect:function useEffect(e,t){return di="useEffect",updateHookTypesDev(),updateEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return di="useImperativeHandle",updateHookTypesDev(),updateImperativeHandle(e,t,n)},useLayoutEffect:function useLayoutEffect(e,t){return di="useLayoutEffect",updateHookTypesDev(),updateLayoutEffect(e,t)},useMemo:function useMemo(e,t){di="useMemo",updateHookTypesDev();var n=ri.current;ri.current=Si;try{return updateMemo(e,t)}finally{ri.current=n}},useReducer:function useReducer(e,t,n){di="useReducer",updateHookTypesDev();var r=ri.current;ri.current=Si;try{return updateReducer(e)}finally{ri.current=r}},useRef:function useRef(e){return di="useRef",updateHookTypesDev(),updateRef()},useState:function useState(e){di="useState",updateHookTypesDev();var t=ri.current;ri.current=Si;try{return updateState()}finally{ri.current=t}},useDebugValue:function useDebugValue(e,t){return di="useDebugValue",updateHookTypesDev(),hi()},useDeferredValue:function useDeferredValue(e){return di="useDeferredValue",updateHookTypesDev(),updateDeferredValue(e)},useTransition:function useTransition(){return di="useTransition",updateHookTypesDev(),updateTransition()},useMutableSource:function useMutableSource(e,t,n){return di="useMutableSource",updateHookTypesDev(),updateMutableSource(e,t,n)},useOpaqueIdentifier:function useOpaqueIdentifier(){return di="useOpaqueIdentifier",updateHookTypesDev(),updateOpaqueIdentifier()},unstable_isNewReconciler:b},Ci={readContext:function readContext(e,t){return _readContext(e,t)},useCallback:function useCallback(e,t){return di="useCallback",updateHookTypesDev(),updateCallback(e,t)},useContext:function useContext(e,t){return di="useContext",updateHookTypesDev(),_readContext(e,t)},useEffect:function useEffect(e,t){return di="useEffect",updateHookTypesDev(),updateEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return di="useImperativeHandle",updateHookTypesDev(),updateImperativeHandle(e,t,n)},useLayoutEffect:function useLayoutEffect(e,t){return di="useLayoutEffect",updateHookTypesDev(),updateLayoutEffect(e,t)},useMemo:function useMemo(e,t){di="useMemo",updateHookTypesDev();var n=ri.current;ri.current=Ei;try{return updateMemo(e,t)}finally{ri.current=n}},useReducer:function useReducer(e,t,n){di="useReducer",updateHookTypesDev();var r=ri.current;ri.current=Ei;try{return rerenderReducer(e)}finally{ri.current=r}},useRef:function useRef(e){return di="useRef",updateHookTypesDev(),updateRef()},useState:function useState(e){di="useState",updateHookTypesDev();var t=ri.current;ri.current=Ei;try{return rerenderState()}finally{ri.current=t}},useDebugValue:function useDebugValue(e,t){return di="useDebugValue",updateHookTypesDev(),hi()},useDeferredValue:function useDeferredValue(e){return di="useDeferredValue",updateHookTypesDev(),rerenderDeferredValue(e)},useTransition:function useTransition(){return di="useTransition",updateHookTypesDev(),rerenderTransition()},useMutableSource:function useMutableSource(e,t,n){return di="useMutableSource",updateHookTypesDev(),updateMutableSource(e,t,n)},useOpaqueIdentifier:function useOpaqueIdentifier(){return di="useOpaqueIdentifier",updateHookTypesDev(),rerenderOpaqueIdentifier()},unstable_isNewReconciler:b},wi={readContext:function readContext(e,t){return Ri(),_readContext(e,t)},useCallback:function useCallback(e,t){return di="useCallback",xi(),mountHookTypesDev(),mountCallback(e,t)},useContext:function useContext(e,t){return di="useContext",xi(),mountHookTypesDev(),_readContext(e,t)},useEffect:function useEffect(e,t){return di="useEffect",xi(),mountHookTypesDev(),mountEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return di="useImperativeHandle",xi(),mountHookTypesDev(),mountImperativeHandle(e,t,n)},useLayoutEffect:function useLayoutEffect(e,t){return di="useLayoutEffect",xi(),mountHookTypesDev(),mountLayoutEffect(e,t)},useMemo:function useMemo(e,t){di="useMemo",xi(),mountHookTypesDev();var n=ri.current;ri.current=wi;try{return mountMemo(e,t)}finally{ri.current=n}},useReducer:function useReducer(e,t,n){di="useReducer",xi(),mountHookTypesDev();var r=ri.current;ri.current=wi;try{return mountReducer(e,t,n)}finally{ri.current=r}},useRef:function useRef(e){return di="useRef",xi(),mountHookTypesDev(),mountRef(e)},useState:function useState(e){di="useState",xi(),mountHookTypesDev();var t=ri.current;ri.current=wi;try{return mountState(e)}finally{ri.current=t}},useDebugValue:function useDebugValue(e,t){di="useDebugValue",xi(),mountHookTypesDev()},useDeferredValue:function useDeferredValue(e){return di="useDeferredValue",xi(),mountHookTypesDev(),mountDeferredValue(e)},useTransition:function useTransition(){return di="useTransition",xi(),mountHookTypesDev(),mountTransition()},useMutableSource:function useMutableSource(e,t,n){return di="useMutableSource",xi(),mountHookTypesDev(),mountMutableSource(e,t,n)},useOpaqueIdentifier:function useOpaqueIdentifier(){return di="useOpaqueIdentifier",xi(),mountHookTypesDev(),mountOpaqueIdentifier()},unstable_isNewReconciler:b},Si={readContext:function readContext(e,t){return Ri(),_readContext(e,t)},useCallback:function useCallback(e,t){return di="useCallback",xi(),updateHookTypesDev(),updateCallback(e,t)},useContext:function useContext(e,t){return di="useContext",xi(),updateHookTypesDev(),_readContext(e,t)},useEffect:function useEffect(e,t){return di="useEffect",xi(),updateHookTypesDev(),updateEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return di="useImperativeHandle",xi(),updateHookTypesDev(),updateImperativeHandle(e,t,n)},useLayoutEffect:function useLayoutEffect(e,t){return di="useLayoutEffect",xi(),updateHookTypesDev(),updateLayoutEffect(e,t)},useMemo:function useMemo(e,t){di="useMemo",xi(),updateHookTypesDev();var n=ri.current;ri.current=Si;try{return updateMemo(e,t)}finally{ri.current=n}},useReducer:function useReducer(e,t,n){di="useReducer",xi(),updateHookTypesDev();var r=ri.current;ri.current=Si;try{return updateReducer(e)}finally{ri.current=r}},useRef:function useRef(e){return di="useRef",xi(),updateHookTypesDev(),updateRef()},useState:function useState(e){di="useState",xi(),updateHookTypesDev();var t=ri.current;ri.current=Si;try{return updateState()}finally{ri.current=t}},useDebugValue:function useDebugValue(e,t){return di="useDebugValue",xi(),updateHookTypesDev(),hi()},useDeferredValue:function useDeferredValue(e){return di="useDeferredValue",xi(),updateHookTypesDev(),updateDeferredValue(e)},useTransition:function useTransition(){return di="useTransition",xi(),updateHookTypesDev(),updateTransition()},useMutableSource:function useMutableSource(e,t,n){return di="useMutableSource",xi(),updateHookTypesDev(),updateMutableSource(e,t,n)},useOpaqueIdentifier:function useOpaqueIdentifier(){return di="useOpaqueIdentifier",xi(),updateHookTypesDev(),updateOpaqueIdentifier()},unstable_isNewReconciler:b},Ei={readContext:function readContext(e,t){return Ri(),_readContext(e,t)},useCallback:function useCallback(e,t){return di="useCallback",xi(),updateHookTypesDev(),updateCallback(e,t)},useContext:function useContext(e,t){return di="useContext",xi(),updateHookTypesDev(),_readContext(e,t)},useEffect:function useEffect(e,t){return di="useEffect",xi(),updateHookTypesDev(),updateEffect(e,t)},useImperativeHandle:function useImperativeHandle(e,t,n){return di="useImperativeHandle",xi(),updateHookTypesDev(),updateImperativeHandle(e,t,n)},useLayoutEffect:function useLayoutEffect(e,t){return di="useLayoutEffect",xi(),updateHookTypesDev(),updateLayoutEffect(e,t)},useMemo:function useMemo(e,t){di="useMemo",xi(),updateHookTypesDev();var n=ri.current;ri.current=Si;try{return updateMemo(e,t)}finally{ri.current=n}},useReducer:function useReducer(e,t,n){di="useReducer",xi(),updateHookTypesDev();var r=ri.current;ri.current=Si;try{return rerenderReducer(e)}finally{ri.current=r}},useRef:function useRef(e){return di="useRef",xi(),updateHookTypesDev(),updateRef()},useState:function useState(e){di="useState",xi(),updateHookTypesDev();var t=ri.current;ri.current=Si;try{return rerenderState()}finally{ri.current=t}},useDebugValue:function useDebugValue(e,t){return di="useDebugValue",xi(),updateHookTypesDev(),hi()},useDeferredValue:function useDeferredValue(e){return di="useDeferredValue",xi(),updateHookTypesDev(),rerenderDeferredValue(e)},useTransition:function useTransition(){return di="useTransition",xi(),updateHookTypesDev(),rerenderTransition()},useMutableSource:function useMutableSource(e,t,n){return di="useMutableSource",xi(),updateHookTypesDev(),updateMutableSource(e,t,n)},useOpaqueIdentifier:function useOpaqueIdentifier(){return di="useOpaqueIdentifier",xi(),updateHookTypesDev(),rerenderOpaqueIdentifier()},unstable_isNewReconciler:b};var Ti=o.unstable_now,Pi=0,Ii=-1;function getCommitTime(){return Pi}function recordCommitTime(){Pi=Ti()}function startProfilerTimer(e){Ii=Ti(),e.actualStartTime<0&&(e.actualStartTime=Ti())}function stopProfilerTimerIfRunning(e){Ii=-1}function stopProfilerTimerIfRunningAndRecordDelta(e,t){if(Ii>=0){var n=Ti()-Ii;e.actualDuration+=n,t&&(e.selfBaseDuration=n),Ii=-1}}function transferActualDuration(e){for(
// Transfer time spent rendering these children so we don't lose it
// after we rerender. This is used as a helper in special cases
// where we should count the work of multiple passes.
var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}var _i,Fi,Di,Ni,Oi,Li,Hi,Ui,Ai=i.ReactCurrentOwner,Mi=!1;function reconcileChildren(e,t,n,r){
// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
t.child=null===e?Ba(t,null,n,r):za(t,e.child,n,r)}function updateForwardRef(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var a=n.propTypes;a&&checkPropTypes(a,r,// Resolved props
"prop",getComponentName(n))}var i,s=n.render,u=t.ref;if(prepareToReadContext(t,o),Ai.current=t,setIsRendering(!0),i=renderWithHooks(e,t,s,r,u,o),1&t.mode){disableLogs();try{i=renderWithHooks(e,t,s,r,u,o)}finally{reenableLogs()}}return setIsRendering(!1),null===e||Mi?(// React DevTools reads this flag.
t.flags|=

1,reconcileChildren(e,t,i,o),t.child):(bailoutHooks(e,t,o),bailoutOnAlreadyFinishedWork(e,t,o))}function updateMemoComponent(e,t,n,r,o,a){if(null===e){var i=n.type;if(function isSimpleFunctionComponent(e){return"function"===typeof e&&!shouldConstruct$1(e)&&void 0===e.defaultProps}(i)&&null===n.compare&&// SimpleMemoComponent codepath doesn't resolve outer props either.
void 0===n.defaultProps){var s;return s=resolveFunctionForHotReloading(i),// If this is a plain function component without default props,
// and with only the default shallow comparison, we upgrade it
// to a SimpleMemoComponent to allow fast path updates.
t.tag=p,t.type=s,validateFunctionComponentInDev(t,i),updateSimpleMemoComponent(e,t,s,r,o,a)}var u=i.propTypes;u&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
checkPropTypes(u,r,// Resolved props
"prop",getComponentName(i));var l=createFiberFromTypeAndProps(n.type,null,r,t,t.mode,a);return l.ref=t.ref,l.return=t,t.child=l,l}var c=n.type,d=c.propTypes;d&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
checkPropTypes(d,r,// Resolved props
"prop",getComponentName(c));var f=e.child;// This is always exactly one child
if(!includesSomeLane(o,a)){
// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var m=f.memoizedProps,h=n.compare;// Default to shallow comparison
if((h=null!==h?h:shallowEqual)(m,r)&&e.ref===t.ref)return bailoutOnAlreadyFinishedWork(e,t,a)}// React DevTools reads this flag.
t.flags|=1;var g=createWorkInProgress(f,r);return g.ref=t.ref,g.return=t,t.child=g,g}function updateSimpleMemoComponent(e,t,n,r,o,a){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var i=t.elementType;if(i.$$typeof===Q){
// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
var s=i,u=s._payload,l=s._init;try{i=l(u)}catch(d){i=null}// Inner propTypes will be validated in the function component path.
var c=i&&i.propTypes;c&&checkPropTypes(c,r,// Resolved (SimpleMemoComponent has no defaultProps)
"prop",getComponentName(i))}}if(null!==e&&(shallowEqual(e.memoizedProps,r)&&e.ref===t.ref&&// Prevent bailout if the implementation changed due to hot reload.
t.type===e.type)){if(Mi=!1,!includesSomeLane(a,o))
// The pending lanes were cleared at the beginning of beginWork. We're
// about to bail out, but there might be other lanes that weren't
// included in the current render. Usually, the priority level of the
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
return t.lanes=e.lanes,bailoutOnAlreadyFinishedWork(e,t,a);0!==(e.flags&Vt)&&(
// This is a special case that only exists for legacy mode.
// See https://github.com/facebook/react/pull/19216.
Mi=!0)}return updateFunctionComponent(e,t,n,r,a)}function updateOffscreenComponent(e,t,n){var r,o=t.pendingProps,a=o.children,i=null!==e?e.memoizedState:null;if("hidden"===o.mode||"unstable-defer-without-hiding"===o.mode)if(0===(4&t.mode)){
// In legacy sync mode, don't defer the subtree. Render it now.
// TODO: Figure out what we should do in Blocking mode.
var s={baseLanes:0};t.memoizedState=s,pushRenderLanes(t,n)}else{if(!includesSomeLane(n,En)){var u;if(null!==i)u=mergeLanes(i.baseLanes,n);else u=n;// Schedule this fiber to re-render at offscreen priority. Then bailout.
markSpawnedWork(En),t.lanes=t.childLanes=En;var l={baseLanes:u};return t.memoizedState=l,// We're about to bail out, but we need to push this to the stack anyway
// to avoid a push/pop misalignment.
pushRenderLanes(t,u),null}
// Rendering at offscreen, so we can clear the base lanes.
var c={baseLanes:0};t.memoizedState=c,pushRenderLanes(t,null!==i?i.baseLanes:n)}else null!==i?(r=mergeLanes(i.baseLanes,n),// Since we're not hidden anymore, reset the state
t.memoizedState=null):
// We weren't previously hidden, and we still aren't, so there's nothing
// special to do. Need to push to the stack regardless, though, to avoid
// a push/pop misalignment.
r=n,pushRenderLanes(t,r);return reconcileChildren(e,t,a,n),t.child}// Note: These happen to have identical begin phases, for now. We shouldn't hold
// ourselves to this constraint, though. If the behavior diverges, we should
// fork the function.
_i={},Fi={},Di={},Ni={},Oi={},Li=!1,Hi={},Ui={};var Wi=updateOffscreenComponent;function markRef(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(
// Schedule a Ref effect
t.flags|=Lt)}function updateFunctionComponent(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var a=n.propTypes;a&&checkPropTypes(a,r,// Resolved props
"prop",getComponentName(n))}var i,s;if(i=getMaskedContext(t,getUnmaskedContext(0,n,!0)),prepareToReadContext(t,o),Ai.current=t,setIsRendering(!0),s=renderWithHooks(e,t,n,r,i,o),1&t.mode){disableLogs();try{s=renderWithHooks(e,t,n,r,i,o)}finally{reenableLogs()}}return setIsRendering(!1),null===e||Mi?(// React DevTools reads this flag.
t.flags|=1,reconcileChildren(e,t,s,o),t.child):(bailoutHooks(e,t,o),bailoutOnAlreadyFinishedWork(e,t,o))}function updateClassComponent(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var a=n.propTypes;a&&checkPropTypes(a,r,// Resolved props
"prop",getComponentName(n))}// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var i,s;isContextProvider(n)?(i=!0,pushContextProvider(t)):i=!1,prepareToReadContext(t,o),null===t.stateNode?(null!==e&&(
// A class component without an instance only mounts if it suspended
// inside a non-concurrent tree, in an inconsistent state. We want to
// treat it like a new mount, even though an empty version of it already
// committed. Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.flags|=2),// In the initial pass we might need to construct the instance.
constructClassInstance(t,n,r),mountClassInstance(t,n,r,o),s=!0):
// In a resume, we'll already have an instance we can reuse.
s=null===e?function resumeMountClassInstance(e,t,n,r){var o=e.stateNode,a=e.memoizedProps;o.props=a;var i=o.context,s=t.contextType,u=ko;u="object"===typeof s&&null!==s?_readContext(s):getMaskedContext(e,getUnmaskedContext(0,t,!0));var l=t.getDerivedStateFromProps,c="function"===typeof l||"function"===typeof o.getSnapshotBeforeUpdate;// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
c||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||a===n&&i===u||callComponentWillReceiveProps(e,o,n,u),resetHasForceUpdateBeforeProcessing();var d=e.memoizedState,p=o.state=d;if(processUpdateQueue(e,n,o,r),p=e.memoizedState,a===n&&d===p&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"===typeof o.componentDidMount&&(e.flags|=4),!1;"function"===typeof l&&(applyDerivedStateFromProps(e,t,l,n),p=e.memoizedState);var f=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(e,t,a,n,d,p,u);return f?(
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
c||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(e.flags|=4)):(
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
"function"===typeof o.componentDidMount&&(e.flags|=4),// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
e.memoizedProps=n,e.memoizedState=p),// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
o.props=n,o.state=p,o.context=u,f}// Invokes the update life-cycles and returns false if it shouldn't rerender.
(t,n,r,o):function updateClassInstance(e,t,n,r,o){var a=t.stateNode;cloneUpdateQueue(e,t);var i=t.memoizedProps,s=t.type===t.elementType?i:resolveDefaultProps(t.type,i);a.props=s;var u=t.pendingProps,l=a.context,c=n.contextType,d=ko;d="object"===typeof c&&null!==c?_readContext(c):getMaskedContext(t,getUnmaskedContext(0,n,!0));var p=n.getDerivedStateFromProps,f="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate;// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
f||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||i===u&&l===d||callComponentWillReceiveProps(t,a,r,d),resetHasForceUpdateBeforeProcessing();var m=t.memoizedState,h=a.state=m;if(processUpdateQueue(t,r,a,o),h=t.memoizedState,i===u&&m===h&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"===typeof a.componentDidUpdate&&(i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4)),"function"===typeof a.getSnapshotBeforeUpdate&&(i===e.memoizedProps&&m===e.memoizedState||(t.flags|=Ht)),!1;"function"===typeof p&&(applyDerivedStateFromProps(t,n,p,r),h=t.memoizedState);var g=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(t,n,s,r,m,h,d);return g?(
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
f||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,d),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,d)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=Ht)):(
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
"function"===typeof a.componentDidUpdate&&(i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4)),"function"===typeof a.getSnapshotBeforeUpdate&&(i===e.memoizedProps&&m===e.memoizedState||(t.flags|=Ht)),// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
t.memoizedProps=r,t.memoizedState=h),// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
a.props=r,a.state=h,a.context=d,g}(e,t,n,r,o);var u=finishClassComponent(e,t,n,s,i,o),l=t.stateNode;return s&&l.props!==r&&(Li||error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",getComponentName(t.type)||"a component"),Li=!0),u}function finishClassComponent(e,t,n,r,o,a){
// Refs should update even if shouldComponentUpdate returns false
markRef(e,t);var i=0!==(t.flags&Ot);if(!r&&!i)
// Context providers should defer to sCU for rendering
return o&&invalidateContextProvider(t,n,!1),bailoutOnAlreadyFinishedWork(e,t,a);var s,u=t.stateNode;// Rerender
if(Ai.current=t,i&&"function"!==typeof n.getDerivedStateFromError)
// If we captured an error, but getDerivedStateFromError is not defined,
// unmount all the children. componentDidCatch will schedule an update to
// re-render a fallback. This is temporary until we migrate everyone to
// the new API.
// TODO: Warn in a future release.
s=null,stopProfilerTimerIfRunning();else{if(setIsRendering(!0),s=u.render(),1&t.mode){disableLogs();try{u.render()}finally{reenableLogs()}}setIsRendering(!1)}// React DevTools reads this flag.
return t.flags|=1,null!==e&&i?
// If we're recovering from an error, reconcile without reusing any of
// the existing children. Conceptually, the normal children and the children
// that are shown on error are two different sets, so we shouldn't reuse
// normal children even if their identities match.
function forceUnmountCurrentAndReconcile(e,t,n,r){
// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
t.child=za(t,e.child,null,r),// In the second pass, we mount the new children. The trick here is that we
// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their
// identities match.
t.child=za(t,null,n,r)}(e,t,s,a):reconcileChildren(e,t,s,a),// Memoize state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
t.memoizedState=u.state,// The context might have changed so we need to recalculate it.
o&&invalidateContextProvider(t,n,!0),t.child}function pushHostRootContext(e){var t=e.stateNode;t.pendingContext?pushTopLevelContextObject(e,t.pendingContext,t.pendingContext!==t.context):t.context&&
// Should always be set
pushTopLevelContextObject(e,t.context,!1),pushHostContainer(e,t.containerInfo)}function updateHostRoot(e,t,n){pushHostRootContext(t);var r=t.updateQueue;if(null===e||null===r)throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");var o=t.pendingProps,a=t.memoizedState,i=null!==a?a.element:null;cloneUpdateQueue(e,t),processUpdateQueue(t,o,null,n);var s=t.memoizedState.element;// Caution: React DevTools currently depends on this property
// being called "element".
if(s===i)return resetHydrationState(),bailoutOnAlreadyFinishedWork(e,t,n);var u=t.stateNode;if(u.hydrate&&function enterHydrationState(e){var t=e.stateNode.containerInfo;return Xa=getFirstHydratableChild(t),Ga=e,Ja=!0,!0}(t)){var l=u.mutableSourceEagerHydrationData;if(null!=l)for(var c=0;c<l.length;c+=2){setWorkInProgressVersion(l[c],l[c+1])}var d=Ba(t,null,s,n);t.child=d;for(var p=d;p;)
// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
p.flags=-3&p.flags|Mt,p=p.sibling}else
// Otherwise reset hydration state in case we aborted and resumed another
// root.
reconcileChildren(e,t,s,n),resetHydrationState();return t.child}function mountLazyComponent(e,t,n,r,o){null!==e&&(
// A lazy component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.flags|=2);var a=t.pendingProps,i=n,s=i._payload,l=(0,i._init)(s);// Store the unwrapped component in the type.
t.type=l;var c=t.tag=function resolveLazyComponentTag(e){if("function"===typeof e)return shouldConstruct$1(e)?1:0;if(void 0!==e&&null!==e){var t=e.$$typeof;if(t===z)return u;if(t===q)return d}return 2}// This is used to create an alternate fiber to do work on.
(l),p=resolveDefaultProps(l,a);switch(c){case 0:return validateFunctionComponentInDev(t,l),t.type=l=resolveFunctionForHotReloading(l),updateFunctionComponent(null,t,l,p,o);case 1:return t.type=l=resolveClassForHotReloading(l),updateClassComponent(null,t,l,p,o);case u:return t.type=l=resolveForwardRefForHotReloading(l),updateForwardRef(null,t,l,p,o);case d:if(t.type!==t.elementType){var f=l.propTypes;f&&checkPropTypes(f,p,// Resolved for outer only
"prop",getComponentName(l))}return updateMemoComponent(null,t,l,resolveDefaultProps(l.type,p),// The inner type can have defaults too
r,o)}var m="";throw null!==l&&"object"===typeof l&&l.$$typeof===Q&&(m=" Did you wrap a component in React.lazy() more than once?"),Error("Element type is invalid. Received a promise that resolves to: "+l+". Lazy element type must resolve to a class or function."+m)}function validateFunctionComponentInDev(e,t){if(t&&t.childContextTypes&&error("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),null!==e.ref){var n="",r=getCurrentFiberOwnerNameInDevOrNull();r&&(n+="\n\nCheck the render method of `"+r+"`.");var o=r||e._debugID||"",a=e._debugSource;a&&(o=a.fileName+":"+a.lineNumber),Oi[o]||(Oi[o]=!0,error("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if("function"===typeof t.getDerivedStateFromProps){var i=getComponentName(t)||"Unknown";Ni[i]||(error("%s: Function components do not support getDerivedStateFromProps.",i),Ni[i]=!0)}if("object"===typeof t.contextType&&null!==t.contextType){var s=getComponentName(t)||"Unknown";Di[s]||(error("%s: Function components do not support contextType.",s),Di[s]=!0)}}var ji={dehydrated:null,retryLane:0};function mountSuspenseOffscreenState(e){return{baseLanes:e}}function updateSuspenseOffscreenState(e,t){return{baseLanes:mergeLanes(e.baseLanes,t)}}// TODO: Probably should inline this back
function getRemainingWorkInPrimaryTree(e,t){
// TODO: Should not remove render lanes that were pinged during this render
return removeLanes(e.childLanes,t)}function updateSuspenseComponent(e,t,n){var r=t.pendingProps;// This is used by DevTools to force a boundary to suspend.
(function shouldSuspend(e){return cu(e)})(t)&&(t.flags|=Ot);var o=Ka.current,a=!1;// OK, the next part is confusing. We're about to reconcile the Suspense
// boundary's children. This involves some custom reconcilation logic. Two
// main reasons this is so complicated.
// First, Legacy Mode has different semantics for backwards compatibility. The
// primary tree will commit in an inconsistent state, so when we do the
// second pass to render the fallback, we do some exceedingly, uh, clever
// hacks to make that not totally break. Like transferring effects and
// deletions from hidden tree. In Concurrent Mode, it's much simpler,
// because we bailout on the primary tree completely and leave it in its old
// state, no effects. Same as what we do for Offscreen (except that
// Offscreen doesn't have the first render pass).
// Second is hydration. During hydration, the Suspense fiber has a slightly
// different layout, where the child points to a dehydrated fragment, which
// contains the DOM rendered by the server.
// Third, even if you set all that aside, Suspense is like error boundaries in
// that we first we try to render one tree, and if that fails, we render again
// and switch to a different tree. Like a try/catch block. So we have to track
// which branch we're currently rendering. Ideally we would model this using
// a stack.
if(0!==(t.flags&Ot)||function shouldRemainOnFallback(e,t,n,r){
// If we're already showing a fallback, there are cases where we need to
// remain on that fallback regardless of whether the content has resolved.
// For example, SuspenseList coordinates when nested content appears.
return(null===t||null!==t.memoizedState)&&hasSuspenseContext(e,2);// Not currently showing content. Consult the Suspense context.
}(o,e)?(
// Something in this boundary's subtree already suspended. Switch to
// rendering the fallback children.
a=!0,t.flags&=-65):
// Attempting the main content
null!==e&&null===e.memoizedState||
// This is a new mount or this boundary is already showing a fallback state.
// Mark this subtree context as having at least one invisible parent that could
// handle the fallback state.
// Boundaries without fallbacks or should be avoided are not considered since
// they cannot handle preferred fallback states.
void 0!==r.fallback&&!0!==r.unstable_avoidThisFallback&&(o=function addSubtreeSuspenseContext(e,t){return e|t}(o,1)),pushSuspenseContext(t,o=setDefaultShallowSuspenseContext(o)),null===e){
// Initial mount
// If we're currently hydrating, try to hydrate this boundary.
// But only if this has a fallback.
void 0!==r.fallback&&tryToClaimNextHydratableInstance(t);var i=r.children,s=r.fallback;if(a){var u=mountSuspenseFallbackChildren(t,i,s,n);return t.child.memoizedState=mountSuspenseOffscreenState(n),t.memoizedState=ji,u}if("number"===typeof r.unstable_expectedLoadTime){
// This is a CPU-bound tree. Skip this tree and show a placeholder to
// unblock the surrounding content. Then immediately retry after the
// initial commit.
var l=mountSuspenseFallbackChildren(t,i,s,n);return t.child.memoizedState=mountSuspenseOffscreenState(n),t.memoizedState=ji,// Since nothing actually suspended, there will nothing to ping this to
// get it started back up to attempt the next item. While in terms of
// priority this work has the same priority as this current render, it's
// not part of the same transition once the transition has committed. If
// it's sync, we still want to yield so that it can be painted.
// Conceptually, this is really the same as pinging. We can use any
// RetryLane even if it's the one currently rendering since we're leaving
// it behind on this node.
t.lanes=bn,markSpawnedWork(bn),l}return function mountSuspensePrimaryChildren(e,t,n){var r=e.mode,o=createFiberFromOffscreen({mode:"visible",children:t},r,n,null);return o.return=e,e.child=o,o}(t,i,n)}if(null!==e.memoizedState){if(a){var c=r.fallback,d=updateSuspenseFallbackChildren(e,t,r.children,c,n),p=t.child,f=e.child.memoizedState;return p.memoizedState=null===f?mountSuspenseOffscreenState(n):updateSuspenseOffscreenState(f,n),p.childLanes=getRemainingWorkInPrimaryTree(e,n),t.memoizedState=ji,d}var m=updateSuspensePrimaryChildren(e,t,r.children,n);return t.memoizedState=null,m}
// The current tree is not already showing a fallback.
if(a){
// Timed out.
var h=r.fallback,g=updateSuspenseFallbackChildren(e,t,r.children,h,n),v=t.child,y=e.child.memoizedState;return v.memoizedState=null===y?mountSuspenseOffscreenState(n):updateSuspenseOffscreenState(y,n),v.childLanes=getRemainingWorkInPrimaryTree(e,n),// Skip the primary children, and continue working on the
// fallback children.
t.memoizedState=ji,g}
// Still haven't timed out. Continue rendering the children, like we
// normally do.
var b=updateSuspensePrimaryChildren(e,t,r.children,n);return t.memoizedState=null,b}function mountSuspenseFallbackChildren(e,t,n,r){var o,a,i=e.mode,s=e.child,u={mode:"hidden",children:t};return 0===(2&i)&&null!==s?(
// In legacy mode, we commit the primary tree as if it successfully
// completed, even though it's in an inconsistent state.
(o=s).childLanes=0,o.pendingProps=u,8&e.mode&&(
// Reset the durations from the first pass so they aren't included in the
// final amounts. This seems counterintuitive, since we're intentionally
// not measuring part of the render phase, but this makes it match what we
// do in Concurrent Mode.
o.actualDuration=0,o.actualStartTime=-1,o.selfBaseDuration=0,o.treeBaseDuration=0),a=createFiberFromFragment(n,i,r,null)):(o=createFiberFromOffscreen(u,i,0,null),a=createFiberFromFragment(n,i,r,null)),o.return=e,a.return=e,o.sibling=a,e.child=o,a}function createWorkInProgressOffscreenFiber(e,t){
// The props argument to `createWorkInProgress` is `any` typed, so we use this
// wrapper function to constrain it.
return createWorkInProgress(e,t)}function updateSuspensePrimaryChildren(e,t,n,r){var o=e.child,a=o.sibling,i=createWorkInProgressOffscreenFiber(o,{mode:"visible",children:n});return 0===(2&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==a&&(
// Delete the fallback child fragment
a.nextEffect=null,a.flags=8,t.firstEffect=t.lastEffect=a),t.child=i,i}function updateSuspenseFallbackChildren(e,t,n,r,o){var a,i,s=t.mode,u=e.child,l=u.sibling,c={mode:"hidden",children:n};if(// In legacy mode, we commit the primary tree as if it successfully
// completed, even though it's in an inconsistent state.
0===(2&s)&&// Make sure we're on the second pass, i.e. the primary child fragment was
// already cloned. In legacy mode, the only case where this isn't true is
// when DevTools forces us to display a fallback; we skip the first render
// pass entirely and go straight to rendering the fallback. (In Concurrent
// Mode, SuspenseList can also trigger this scenario, but this is a legacy-
// only codepath.)
t.child!==u){(a=t.child).childLanes=0,a.pendingProps=c,8&t.mode&&(
// Reset the durations from the first pass so they aren't included in the
// final amounts. This seems counterintuitive, since we're intentionally
// not measuring part of the render phase, but this makes it match what we
// do in Concurrent Mode.
a.actualDuration=0,a.actualStartTime=-1,a.selfBaseDuration=u.selfBaseDuration,a.treeBaseDuration=u.treeBaseDuration);// The fallback fiber was added as a deletion effect during the first pass.
// However, since we're going to remain on the fallback, we no longer want
// to delete it. So we need to remove it from the list. Deletions are stored
// on the same list as effects. We want to keep the effects from the primary
// tree. So we copy the primary child fragment's effect list, which does not
// include the fallback deletion effect.
var d=a.lastEffect;null!==d?(t.firstEffect=a.firstEffect,t.lastEffect=d,d.nextEffect=null):
// TODO: Reset this somewhere else? Lol legacy mode is so weird.
t.firstEffect=t.lastEffect=null}else a=createWorkInProgressOffscreenFiber(u,c);return null!==l?i=createWorkInProgress(l,r):// Needs a placement effect because the parent (the Suspense boundary) already
// mounted but this is a new fiber.
(i=createFiberFromFragment(r,s,o,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,i}function scheduleWorkOnFiber(e,t){e.lanes=mergeLanes(e.lanes,t);var n=e.alternate;null!==n&&(n.lanes=mergeLanes(n.lanes,t)),scheduleWorkOnParentPath(e.return,t)}function validateSuspenseListNestedChild(e,t){var n=Array.isArray(e),r=!n&&"function"===typeof getIteratorFn(e);if(n||r){var o=n?"array":"iterable";return error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,t,o),!1}return!0}function initSuspenseListRenderState(e,t,n,r,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:a}:(
// We can reuse the existing object from previous renders.
i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o,i.lastEffect=a)}// This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phase without going back to beginWork.
function updateSuspenseListComponent(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail,i=r.children;!function validateRevealOrder(e){if(void 0!==e&&"forwards"!==e&&"backwards"!==e&&"together"!==e&&!Hi[e])if(Hi[e]=!0,"string"===typeof e)switch(e.toLowerCase()){case"together":case"forwards":case"backwards":error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break;case"forward":case"backward":error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break;default:error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}else error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}(o),function validateTailOptions(e,t){void 0===e||Ui[e]||("collapsed"!==e&&"hidden"!==e?(Ui[e]=!0,error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):"forwards"!==t&&"backwards"!==t&&(Ui[e]=!0,error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}(a,o),function validateSuspenseListChildren(e,t){if(("forwards"===t||"backwards"===t)&&void 0!==e&&null!==e&&!1!==e)if(Array.isArray(e)){for(var n=0;n<e.length;n++)if(!validateSuspenseListNestedChild(e[n],n))return}else{var r=getIteratorFn(e);if("function"===typeof r){var o=r.call(e);if(o)for(var a=o.next(),i=0;!a.done;a=o.next()){if(!validateSuspenseListNestedChild(a.value,i))return;i++}}else error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}(i,o),reconcileChildren(e,t,i,n);var s=Ka.current;hasSuspenseContext(s,2)?(s=setShallowSuspenseContext(s,2),t.flags|=Ot):(null!==e&&0!==(e.flags&Ot)&&
// If we previously forced a fallback, we need to schedule work
// on any nested boundaries to let them know to try to render
// again. This is the same as context updating.
function propagateSuspenseContextChange(e,t,n){for(
// Mark any Suspense boundaries with fallbacks as having work to do.
// If they were previously forced into fallbacks, they may now be able
// to unblock.
var r=t;null!==r;){if(r.tag===c)null!==r.memoizedState&&scheduleWorkOnFiber(r,n);else if(r.tag===m)
// If the tail is hidden there might not be an Suspense boundaries
// to schedule work on. In this case we have to schedule it on the
// list itself.
// We don't have to traverse to the children of the list since
// the list will propagate the change when it rerenders.
scheduleWorkOnFiber(r,n);else if(null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)return;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}(t,t.child,n),s=setDefaultShallowSuspenseContext(s));if(pushSuspenseContext(t,s),0===(2&t.mode))
// In legacy mode, SuspenseList doesn't work so we just
// use make it a noop by treating it as the default revealOrder.
t.memoizedState=null;else switch(o){case"forwards":var u,l=function findLastContentRow(e){for(
// This is going to find the last row among these children that is already
// showing content on the screen, as opposed to being in fallback state or
// new. If a row has multiple Suspense boundaries, any of them being in the
// fallback state, counts as the whole row being in a fallback state.
// Note that the "rows" will be workInProgress, but any nested children
// will still be current since we haven't rendered them yet. The mounted
// order may not be the same as the new order. We use the new order.
var t=e,n=null;null!==t;){var r=t.alternate;// New rows can't be content rows.
null!==r&&null===findFirstSuspended(r)&&(n=t),t=t.sibling}return n}(t.child);null===l?(
// The whole list is part of the tail.
// TODO: We could fast path by just rendering the tail now.
u=t.child,t.child=null):(
// Disconnect the tail rows after the content row.
// We're going to render them separately later.
u=l.sibling,l.sibling=null),initSuspenseListRenderState(t,!1,// isBackwards
u,l,a,t.lastEffect);break;case"backwards":
// We're going to find the first row that has existing content.
// At the same time we're going to reverse the list of everything
// we pass in the meantime. That's going to be our tail in reverse
// order.
var d=null,p=t.child;for(t.child=null;null!==p;){var f=p.alternate;// New rows can't be content rows.
if(null!==f&&null===findFirstSuspended(f)){
// This is the beginning of the main content.
t.child=p;break}var h=p.sibling;p.sibling=d,d=p,p=h}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
initSuspenseListRenderState(t,!0,// isBackwards
d,null,// last
a,t.lastEffect);break;case"together":initSuspenseListRenderState(t,!1,// isBackwards
null,// tail
null,// last
void 0,t.lastEffect);break;default:
// The default reveal order is the same as not having
// a boundary.
t.memoizedState=null}return t.child}var Vi=!1;function updateContextProvider(e,t,n){var r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value;"value"in o||Vi||(Vi=!0,error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var u=t.type.propTypes;if(u&&checkPropTypes(u,o,"prop","Context.Provider"),pushProvider(t,i),null!==a){var l=function calculateChangedBits(e,t,n){if(vr(n,t))
// No change
return 0;var r="function"===typeof e._calculateChangedBits?e._calculateChangedBits(n,t):da;return(r&da)!==r&&error("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s",r),0|r}(r,i,a.value);if(0===l){
// No change. Bailout early if children are the same.
if(a.children===o.children&&!hasContextChanged())return bailoutOnAlreadyFinishedWork(e,t,n)}else
// The context value changed. Search for matching consumers and schedule
// them to update.
!function propagateContextChange(e,t,n,r){var o=e.child;for(null!==o&&(
// Set the return pointer of the child to the work-in-progress fiber.
o.return=e);null!==o;){var a=void 0,i=o.dependencies;// Visit this fiber.
if(null!==i){a=o.child;for(var u=i.firstContext;null!==u;){
// Check if the context matches.
if(u.context===t&&0!==(u.observedBits&n)){
// Match! Schedule an update on this fiber.
if(1===o.tag){
// Schedule a force update on the work-in-progress.
var l=createUpdate(Rn,pickArbitraryLane(r));l.tag=ba,// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
enqueueUpdate(o,l)}o.lanes=mergeLanes(o.lanes,r);var c=o.alternate;null!==c&&(c.lanes=mergeLanes(c.lanes,r)),scheduleWorkOnParentPath(o.return,r),// Mark the updated lanes on the list, too.
i.lanes=mergeLanes(i.lanes,r);// Since we already found a match, we can stop traversing the
// dependency list.
break}u=u.next}}else
// Don't scan deeper if this is a matching provider
a=o.tag===s&&o.type===e.type?null:o.child;if(null!==a)
// Set the return pointer of the child to the work-in-progress fiber.
a.return=o;else for(
// No child. Traverse to next sibling.
a=o;null!==a;){if(a===e){
// We're back to the root of this subtree. Exit.
a=null;break}var d=a.sibling;if(null!==d){
// Set the return pointer of the sibling to the work-in-progress fiber.
d.return=a.return,a=d;break}// No more siblings. Traverse up.
a=a.return}o=a}}(t,r,l,n)}return reconcileChildren(e,t,o.children,n),t.child}var zi,Bi,$i,qi=!1;function markWorkInProgressReceivedUpdate(){Mi=!0}function bailoutOnAlreadyFinishedWork(e,t,n){// Check if the children have any pending work.
return null!==e&&(
// Reuse previous dependencies
t.dependencies=e.dependencies),
// Don't update "base" render times for bailouts.
stopProfilerTimerIfRunning(),markSkippedUpdateLanes(t.lanes),includesSomeLane(n,t.childLanes)?(
// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
function cloneChildFibers(e,t){if(null!==e&&t.child!==e.child)throw Error("Resuming work not yet implemented.");if(null!==t.child){var n=t.child,r=createWorkInProgress(n,n.pendingProps);for(t.child=r,r.return=t;null!==n.sibling;)n=n.sibling,(r=r.sibling=createWorkInProgress(n,n.pendingProps)).return=t;r.sibling=null}}(e,t),t.child):null}function beginWork(e,t,n){var r=t.lanes;if(t._debugNeedsRemount&&null!==e)
// This will restart the begin phase with a new fiber.
return function remountFiber(e,t,n){var r=t.return;if(null===r)throw new Error("Cannot swap the root fiber.");// Disconnect from the old current.
// It will get deleted.
// Replace the child/sibling pointers above it.
if(e.alternate=null,t.alternate=null,// Connect to the new tree.
n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===r.child)r.child=n;else{var o=r.child;if(null===o)throw new Error("Expected parent to have a child.");for(;o.sibling!==t;)if(null===(o=o.sibling))throw new Error("Expected to find the previous sibling.");o.sibling=n}// Delete the old fiber and place the new one.
// Since the old fiber is disconnected, we have to schedule it manually.
var a=r.lastEffect;// Restart work from the new fiber.
return null!==a?(a.nextEffect=e,r.lastEffect=e):r.firstEffect=r.lastEffect=e,e.nextEffect=null,e.flags=8,n.flags|=2,n}(e,t,createFiberFromTypeAndProps(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(null!==e)if(e.memoizedProps!==t.pendingProps||hasContextChanged()||// Force a re-render if the implementation changed due to hot reload:
t.type!==e.type)
// If props or context changed, mark the fiber as having performed work.
// This may be unset if the props are determined to be equal later (memo).
Mi=!0;else{if(!includesSomeLane(n,r)){// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(Mi=!1,t.tag){case 3:pushHostRootContext(t),resetHydrationState();break;case 5:pushHostContext(t);break;case 1:isContextProvider(t.type)&&pushContextProvider(t);break;case 4:pushHostContainer(t,t.stateNode.containerInfo);break;case s:pushProvider(t,t.memoizedProps.value);break;case l:includesSomeLane(n,t.childLanes)&&(t.flags|=4);// Reset effect durations for the next eventual effect phase.
// These are reset during render to allow the DevTools commit hook a chance to read them,
var o=t.stateNode;o.effectDuration=0,o.passiveEffectDuration=0;break;case c:if(null!==t.memoizedState){if(includesSomeLane(n,t.child.childLanes))
// The primary children have pending work. Use the normal path
// to attempt to render the primary children again.
return updateSuspenseComponent(e,t,n);
// The primary child fragment does not have pending work marked
// on it
pushSuspenseContext(t,setDefaultShallowSuspenseContext(Ka.current));// The primary children do not have pending work with sufficient
// priority. Bailout.
var a=bailoutOnAlreadyFinishedWork(e,t,n);return null!==a?a.sibling:null}pushSuspenseContext(t,setDefaultShallowSuspenseContext(Ka.current));break;case m:var i=0!==(e.flags&Ot),b=includesSomeLane(n,t.childLanes);if(i){if(b)
// If something was in fallback state last time, and we have all the
// same children then we're still in progressive loading state.
// Something might get unblocked by state updates or retries in the
// tree which will affect the tail. So we need to use the normal
// path to compute the correct tail.
return updateSuspenseListComponent(e,t,n);// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
t.flags|=Ot}// If nothing suspended before and we're rendering the same children,
// then the tail doesn't matter. Anything new that suspends will work
// in the "together" mode, so we can continue from the state we had.
var k=t.memoizedState;if(null!==k&&(
// Reset to the "together" mode in case we've started a different
// update in the past but didn't complete it.
k.rendering=null,k.tail=null,k.lastEffect=null),pushSuspenseContext(t,Ka.current),b)break;
// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
return null;case v:case y:
// Need to check if the tree still needs to be deferred. This is
// almost identical to the logic used in the normal update path,
// so we'll just enter that. The only difference is we'll bail out
// at the next level instead of this one, because the child props
// have not changed. Which is fine.
// TODO: Probably should refactor `beginWork` to split the bailout
// path from the normal path. I'm tempted to do a labeled break here
// but I won't :)
return t.lanes=0,updateOffscreenComponent(e,t,n)}return bailoutOnAlreadyFinishedWork(e,t,n)}
// This is a special case that only exists for legacy mode.
// See https://github.com/facebook/react/pull/19216.
Mi=0!==(e.flags&Vt)}else Mi=!1;// Before entering the begin phase, clear pending update priority.
// TODO: This assumes that we're about to evaluate the component and process
// the update queue. However, there's an exception: SimpleMemoComponent
// sometimes bails out later in the begin phase. This indicates that we should
// move this assignment out of the common path and into each branch.
switch(t.lanes=0,t.tag){case 2:return function mountIndeterminateComponent(e,t,n,r){null!==e&&(
// An indeterminate component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.flags|=2);var o,a,i=t.pendingProps;if(o=getMaskedContext(t,getUnmaskedContext(0,n,!1)),prepareToReadContext(t,r),n.prototype&&"function"===typeof n.prototype.render){var s=getComponentName(n)||"Unknown";_i[s]||(error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",s,s),_i[s]=!0)}
// Support for module components is deprecated and is removed behind a flag.
// Whether or not it would crash later, we want to show a good message in DEV first.
if(1&t.mode&&Zo.recordLegacyContextWarning(t,null),setIsRendering(!0),Ai.current=t,a=renderWithHooks(null,t,n,i,o,r),setIsRendering(!1),// React DevTools reads this flag.
t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof){var u=getComponentName(n)||"Unknown";Fi[u]||(error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",u,u,u),Fi[u]=!0)}if(// Run these checks in production only if the flag is off.
// Eventually we'll delete this branch altogether.
"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof){var l=getComponentName(n)||"Unknown";Fi[l]||(error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",l,l,l),Fi[l]=!0),// Proceed under the assumption that this is a class instance
t.tag=1,// Throw out any hooks that were used.
t.memoizedState=null,t.updateQueue=null;// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var c=!1;isContextProvider(n)?(c=!0,pushContextProvider(t)):c=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,initializeUpdateQueue(t);var d=n.getDerivedStateFromProps;return"function"===typeof d&&applyDerivedStateFromProps(t,n,d,i),adoptClassInstance(t,a),mountClassInstance(t,n,i,r),finishClassComponent(null,t,n,!0,c,r)}if(
// Proceed under the assumption that this is a function component
t.tag=0,1&t.mode){disableLogs();try{a=renderWithHooks(null,t,n,i,o,r)}finally{reenableLogs()}}return reconcileChildren(null,t,a,r),validateFunctionComponentInDev(t,n),t.child}(e,t,t.type,n);case 16:return mountLazyComponent(e,t,t.elementType,r,n);case 0:var C=t.type,w=t.pendingProps;return updateFunctionComponent(e,t,C,t.elementType===C?w:resolveDefaultProps(C,w),n);case 1:var S=t.type,E=t.pendingProps;return updateClassComponent(e,t,S,t.elementType===S?E:resolveDefaultProps(S,E),n);case 3:return updateHostRoot(e,t,n);case 5:return function updateHostComponent(e,t,n){pushHostContext(t),null===e&&tryToClaimNextHydratableInstance(t);var r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,i=o.children;return shouldSetTextContent(r,o)?
// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also has access to this prop. That
// avoids allocating another HostText fiber and traversing it.
i=null:null!==a&&shouldSetTextContent(r,a)&&(
// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
t.flags|=

16),markRef(e,t),reconcileChildren(e,t,i,n),t.child}(e,t,n);case 6:return function updateHostText(e,t){// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null===e&&tryToClaimNextHydratableInstance(t),null}(e,t);case c:return updateSuspenseComponent(e,t,n);case 4:return function updatePortalComponent(e,t,n){pushHostContainer(t,t.stateNode.containerInfo);var r=t.pendingProps;return null===e?
// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
t.child=za(t,null,r,n):reconcileChildren(e,t,r,n),t.child}(e,t,n);case u:var R=t.type,x=t.pendingProps;return updateForwardRef(e,t,R,t.elementType===R?x:resolveDefaultProps(R,x),n);case 7:return function updateFragment(e,t,n){return reconcileChildren(e,t,t.pendingProps,n),t.child}(e,t,n);case 8:return function updateMode(e,t,n){return reconcileChildren(e,t,t.pendingProps.children,n),t.child}(e,t,n);case l:return function updateProfiler(e,t,n){t.flags|=4;// Reset effect durations for the next eventual effect phase.
// These are reset during render to allow the DevTools commit hook a chance to read them,
var r=t.stateNode;return r.effectDuration=0,r.passiveEffectDuration=0,reconcileChildren(e,t,t.pendingProps.children,n),t.child}(e,t,n);case s:return updateContextProvider(e,t,n);case 9:return function updateContextConsumer(e,t,n){var r=t.type;// The logic below for Context differs depending on PROD or DEV mode. In
// DEV mode, we create a separate object for Context.Consumer that acts
// like a proxy to Context. This proxy object adds unnecessary code in PROD
// so we use the old behaviour (Context.Consumer references Context) to
// reduce size and overhead. The separate object references context via
// a property called "_context", which also gives us the ability to check
// in DEV mode if this property exists or not and warn if it does not.
void 0===r._context?
// This may be because it's a Context (rather than a Consumer).
// Or it may be because it's older React where they're the same thing.
// We only want to warn if we're sure it's a new React.
r!==r.Consumer&&(qi||(qi=!0,error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):r=r._context;var o=t.pendingProps,a=o.children;"function"!==typeof a&&error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),prepareToReadContext(t,n);var i,s=_readContext(r,o.unstable_observedBits);return Ai.current=t,setIsRendering(!0),i=a(s),setIsRendering(!1),// React DevTools reads this flag.
t.flags|=1,reconcileChildren(e,t,i,n),t.child}(e,t,n);case d:var T=t.type,P=resolveDefaultProps(T,t.pendingProps);if(t.type!==t.elementType){var I=T.propTypes;I&&checkPropTypes(I,P,// Resolved for outer only
"prop",getComponentName(T))}return updateMemoComponent(e,t,T,P=resolveDefaultProps(T.type,P),r,n);case p:return updateSimpleMemoComponent(e,t,t.type,t.pendingProps,r,n);case f:var _=t.type,F=t.pendingProps;return function mountIncompleteClassComponent(e,t,n,r,o){// The rest of this function is a fork of `updateClassComponent`
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var a;return null!==e&&(
// An incomplete component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,// Since this is conceptually a new fiber, schedule a Placement effect
t.flags|=2),// Promote the fiber to a class and try rendering again.
t.tag=1,isContextProvider(n)?(a=!0,pushContextProvider(t)):a=!1,prepareToReadContext(t,o),constructClassInstance(t,n,r),mountClassInstance(t,n,r,o),finishClassComponent(null,t,n,!0,a,o)}(e,t,_,t.elementType===_?F:resolveDefaultProps(_,F),n);case m:return updateSuspenseListComponent(e,t,n);case h:case 21:case g:break;case v:return updateOffscreenComponent(e,t,n);case y:return Wi(e,t,n)}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function markUpdate(e){
// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
e.flags|=4}function markRef$1(e){e.flags|=Lt}function cutOffTailIfNeeded(e,t){if(!getIsHydrating())switch(e.tailMode){case"hidden":for(
// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===r?
// All remaining items in the tail are insertions.
e.tail=null:
// Detach the insertion after the last node that was already
// inserted.
r.sibling=null;break;case"collapsed":for(
// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var o=e.tail,a=null;null!==o;)null!==o.alternate&&(a=o),o=o.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===a?
// All remaining items in the tail are insertions.
t||null===e.tail?e.tail=null:
// We suspended during the head. We want to show at least one
// row at the tail. So we'll keep on and cut off the rest.
e.tail.sibling=null:
// Detach the insertion after the last node that was already
// inserted.
a.sibling=null}}function completeWork(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case p:case 0:case u:case 7:case 8:case l:case 9:case d:return null;case 1:return isContextProvider(t.type)&&popContext(t),null;case 3:popHostContainer(t),popTopLevelContextObject(t),resetWorkInProgressVersions();var o=t.stateNode;if(o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null===e||null===e.child)popHydrationState(t)?
// If we hydrated, then we'll need to schedule an update for
// the commit side-effects on the root.
markUpdate(t):o.hydrate||(
// Schedule an effect to clear this container at the start of the next commit.
// This handles the case of React rendering into a container with previous children.
// It's also safe to do for updates too, because current.child would only be null
// if the previous render was null (so the the container would already be empty).
t.flags|=Ht);return null;case 5:popHostContext(t);var a=getRootHostContainer(),i=t.type;if(null!==e&&null!=t.stateNode)Bi(e,t,i,r),e.ref!==t.ref&&markRef$1(t);else{if(!r){if(null===t.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");// This can happen when we abort work.
return null}var b=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on whether we want to add them top->down or
// bottom->up. Top->down is faster in IE11.
if(popHydrationState(t))
// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
(function prepareToHydrateHostInstance(e,t,n){var r=hydrateInstance(e.stateNode,e.type,e.memoizedProps,0,n,e);// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
// TODO: Type this specific to this type of component.
return e.updateQueue=r,null!==r})(t,0,b)&&
// If changes to the hydrated node need to be applied at the
// commit-phase we mark this as such.
markUpdate(t);else{var k=createInstance(i,r,a,b,t);zi(k,t),t.stateNode=k,// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
function finalizeInitialChildren(e,t,n,r,o){return setInitialProperties(e,t,n),shouldAutoFocusHostComponent(t,n)}(k,i,r)&&markUpdate(t)}null!==t.ref&&
// If there is a ref on a host node we need to schedule a callback
markRef$1(t)}return null;case 6:var C=r;if(e&&null!=t.stateNode){var w=e.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
$i(0,t,w,C)}else{if("string"!==typeof C&&null===t.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var S=getRootHostContainer(),E=getHostContext();popHydrationState(t)?prepareToHydrateHostTextInstance(t)&&markUpdate(t):t.stateNode=createTextInstance(C,S,E,t)}return null;case c:popSuspenseContext(t);var R=t.memoizedState;if(0!==(t.flags&Ot))
// Something suspended. Re-render with the fallback children.
return t.lanes=n,// Do not reset the effect list.
0!==(8&t.mode)&&transferActualDuration(t),t;var x=null!==R,T=!1;if(null===e)void 0!==t.memoizedProps.fallback&&popHydrationState(t);else T=null!==e.memoizedState;if(x&&!T)
// If this subtreee is running in blocking mode we can suspend,
// otherwise we won't suspend.
// TODO: This will still suspend a synchronous tree if anything
// in the concurrent tree already suspended during this render.
// This is a known bug.
if(0!==(2&t.mode))null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||hasSuspenseContext(Ka.current,1)?
// If this was in an invisible tree or a new render, then showing
// this boundary is ok.
function renderDidSuspend(){0===ps&&(ps=3)}():
// Otherwise, we're going to have to hide content so we should
// suspend for longer if possible.
function renderDidSuspendDelayIfPossible(){0!==ps&&3!==ps||(ps=4);// Check if there are updates that we skipped tree that might have unblocked
// this render.
null!==ss&&(includesNonIdleWork(hs)||includesNonIdleWork(gs))&&
// Mark the current render as suspended so that we switch to working on
// the updates that were skipped. Usually we only suspend at the end of
// the render phase.
// TODO: We should probably always mark the root as suspended immediately
// (inside this function), since by suspending at the end of the render
// phase introduces a potential mistake where we suspend lanes that were
// pinged or updated while we were rendering.
markRootSuspended$1(ss,ls)}();
// TODO: Only schedule updates if these values are non equal, i.e. it changed.
return(x||T)&&(
// If this boundary just timed out, schedule an effect to attach a
// retry listener to the promise. This flag is also used to hide the
// primary children. In mutation mode, we also need the flag to
// *unhide* children that were previously hidden, so check if this
// is currently timed out, too.
t.flags|=4),null;case 4:return popHostContainer(t),null===e&&function preparePortalMount(e){listenToAllSupportedEvents(e)}(t.stateNode.containerInfo),null;case s:
// Pop provider fiber
return popProvider(t),null;case f:return isContextProvider(t.type)&&popContext(t),null;case m:popSuspenseContext(t);var P=t.memoizedState;if(null===P)
// We're running in the default, "independent" mode.
// We don't do anything in this mode.
return null;var I=0!==(t.flags&Ot),_=P.rendering;if(null===_)
// We just rendered the head.
if(I)cutOffTailIfNeeded(P,!1);else{if(!(// Called during render to determine if anything has suspended.
// Returns false if we're not sure.
function renderHasNotSuspendedYet(){
// If something errored or completed, we can't really be sure,
// so those are false.
return 0===ps}()&&(null===e||0===(e.flags&Ot))))for(var F=t.child;null!==F;){var D=findFirstSuspended(F);if(null!==D){I=!0,t.flags|=Ot,cutOffTailIfNeeded(P,!1);// If this is a newly suspended tree, it might not get committed as
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
var N=D.updateQueue;return null!==N&&(t.updateQueue=N,t.flags|=4),// Rerender the whole list, but this time, we'll force fallbacks
// to stay in place.
// Reset the effect list before doing the second pass since that's now invalid.
null===P.lastEffect&&(t.firstEffect=null),t.lastEffect=P.lastEffect,// Reset the child fibers to their original state.
resetChildFibers(t,n),// Set up the Suspense Context to force suspense and immediately
// rerender the children.
pushSuspenseContext(t,setShallowSuspenseContext(Ka.current,2)),t.child}F=F.sibling}null!==P.tail&&Go()>getRenderTargetTime()&&(
// We have already passed our CPU deadline but we still have rows
// left in the tail. We'll just give up further attempts to render
// the main content and only render fallbacks.
t.flags|=Ot,I=!0,cutOffTailIfNeeded(P,!1),// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. While in terms
// of priority this work has the same priority as this current render,
// it's not part of the same transition once the transition has
// committed. If it's sync, we still want to yield so that it can be
// painted. Conceptually, this is really the same as pinging.
// We can use any RetryLane even if it's the one currently rendering
// since we're leaving it behind on this node.
t.lanes=bn,markSpawnedWork(bn))}// Next we're going to render the tail.
else{
// Append the rendered row to the child list.
if(!I){var O=findFirstSuspended(_);if(null!==O){t.flags|=Ot,I=!0;// Ensure we transfer the update queue to the parent so that it doesn't
// get lost if this row ends up dropped during a second pass.
var L=O.updateQueue;// This might have been modified.
if(null!==L&&(t.updateQueue=L,t.flags|=4),cutOffTailIfNeeded(P,!0),null===P.tail&&"hidden"===P.tailMode&&!_.alternate&&!getIsHydrating()){
// We need to delete the row we just rendered.
// Reset the effect list to what it was before we rendered this
// child. The nested children have already appended themselves.
var H=t.lastEffect=P.lastEffect;// Remove any effects that were appended after this point.
// We're done.
return null!==H&&(H.nextEffect=null),null}}else// The time it took to render last row is greater than the remaining
// time we have to render. So rendering one more row would likely
// exceed it.
2*Go()-P.renderingStartTime>getRenderTargetTime()&&n!==En&&(
// We have now passed our CPU deadline and we'll just give up further
// attempts to render the main content and only render fallbacks.
// The assumption is that this is usually faster.
t.flags|=Ot,I=!0,cutOffTailIfNeeded(P,!1),// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. While in terms
// of priority this work has the same priority as this current render,
// it's not part of the same transition once the transition has
// committed. If it's sync, we still want to yield so that it can be
// painted. Conceptually, this is really the same as pinging.
// We can use any RetryLane even if it's the one currently rendering
// since we're leaving it behind on this node.
t.lanes=bn,markSpawnedWork(bn))}if(P.isBackwards)
// The effect list of the backwards tail will have been added
// to the end. This breaks the guarantee that life-cycles fire in
// sibling order but that isn't a strong guarantee promised by React.
// Especially since these might also just pop in during future commits.
// Append to the beginning of the list.
_.sibling=t.child,t.child=_;else{var U=P.last;null!==U?U.sibling=_:t.child=_,P.last=_}}if(null!==P.tail){
// We still have tail rows to render.
// Pop a row.
var A=P.tail;P.rendering=A,P.tail=A.sibling,P.lastEffect=t.lastEffect,P.renderingStartTime=Go(),A.sibling=null;// Restore the context.
// TODO: We can probably just avoid popping it instead and only
// setting it the first time we go from not suspended to suspended.
var M=Ka.current;// Do a pass over the next row.
return pushSuspenseContext(t,M=I?setShallowSuspenseContext(M,2):setDefaultShallowSuspenseContext(M)),A}return null;case h:case 21:case g:break;case v:case y:if(popRenderLanes(t),null!==e){var W=t.memoizedState;null!==e.memoizedState!==(null!==W)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4)}return null}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function unwindWork(e,t){switch(e.tag){case 1:isContextProvider(e.type)&&popContext(e);var n=e.flags;return n&jt?(e.flags=-4097&n|Ot,0!==(8&e.mode)&&transferActualDuration(e),e):null;case 3:popHostContainer(e),popTopLevelContextObject(e),resetWorkInProgressVersions();var r=e.flags;if(0!==(r&Ot))throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");return e.flags=-4097&r|Ot,e;case 5:
// TODO: popHydrationState
return popHostContext(e),null;case c:popSuspenseContext(e);var o=e.flags;return o&jt?(e.flags=-4097&o|Ot,// Captured a suspense effect. Re-render the boundary.
0!==(8&e.mode)&&transferActualDuration(e),e):null;case m:// SuspenseList doesn't actually catch anything. It should've been
// caught by a nested boundary. If not, it should bubble through.
return popSuspenseContext(e),null;case 4:return popHostContainer(e),null;case s:return popProvider(e),null;case v:case y:return popRenderLanes(e),null;default:return null}}function unwindInterruptedWork(e){switch(e.tag){case 1:var t=e.type.childContextTypes;null!==t&&void 0!==t&&popContext(e);break;case 3:popHostContainer(e),popTopLevelContextObject(e),resetWorkInProgressVersions();break;case 5:popHostContext(e);break;case 4:popHostContainer(e);break;case c:case m:popSuspenseContext(e);break;case s:popProvider(e);break;case v:case y:popRenderLanes(e)}}function createCapturedValue(e,t){
// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:e,source:t,stack:getStackByFiberInDevAndProd(t)}}// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function logCapturedError(e,t){try{0;var n=t.value,r=t.source,o=t.stack,a=null!==o?o:"";// Browsers support silencing uncaught errors by calling
// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(null!=n&&n._suppressLogging){if(1===e.tag)
// The error is recoverable and was silenced.
// Ignore it and don't print the stack addendum.
// This is handy for testing error boundaries without noise.
return;// The error is fatal. Since the silencing might have
// been accidental, we'll surface it anyway.
// However, the browser would have silenced the original error
// so we'll print it first, and then print the stack addendum.
console.error(n)}var i=r?getComponentName(r.type):null,s=i?"The above error occurred in the <"+i+"> component:":"The above error occurred in one of your React components:",u=getComponentName(e.type),l=s+"\n"+a+"\n\n"+(u?"React will try to recreate this component tree from scratch using the error boundary you provided, "+u+".":"Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.");// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(l)}catch(Nu){
// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout((function(){throw Nu}))}}
// Mutation mode
zi=function appendAllChildren(e,t,n,r){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var o,a,i=t.child;null!==i;){if(5===i.tag||6===i.tag)o=e,a=i.stateNode,o.appendChild(a);else if(4===i.tag);else if(null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)return;for(;null===i.sibling;){if(null===i.return||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Bi=function updateHostComponent$1(e,t,n,r,o){
// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var a=e.memoizedProps;if(a!==r){// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var i=function prepareUpdate(e,t,n,r,o,a){var i=a;if(typeof r.children!==typeof n.children&&("string"===typeof r.children||"number"===typeof r.children)){var s=""+r.children,u=Yr(i.ancestorInfo,t);Qr(null,s,u)}return diffProperties(e,t,n,r)}(t.stateNode,n,a,r,0,getHostContext());// TODO: Type this specific to this type of component.
t.updateQueue=i,// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
i&&markUpdate(t)}},$i=function updateHostText$1(e,t,n,r){
// If the text differs, mark it as an update. All the work in done in commitWork.
n!==r&&markUpdate(t)};var Qi="function"===typeof WeakMap?WeakMap:Map;function createRootErrorUpdate(e,t,n){var r=createUpdate(Rn,n);// Unmount the root by rendering null.
r.tag=3,// Caution: React DevTools currently depends on this property
// being called "element".
r.payload={element:null};var o=t.value;return r.callback=function(){Vs(o),logCapturedError(e,t)},r}function createClassErrorUpdate(e,t,n){var r=createUpdate(Rn,n);r.tag=3;var o=e.type.getDerivedStateFromError;if("function"===typeof o){var a=t.value;r.payload=function(){return logCapturedError(e,t),o(a)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch?r.callback=function callback(){markFailedErrorBoundaryForHotReloading(e),"function"!==typeof o&&(
// To preserve the preexisting retry behavior of error boundaries,
// we keep track of which ones already failed during this batch.
// This gets reset before we yield back to the browser.
// TODO: Warn in strict mode if getDerivedStateFromError is
// not defined.
!function markLegacyErrorBoundaryAsFailed(e){null===Es?Es=new Set([e]):Es.add(e)}(this),// Only log here if componentDidCatch is the only error boundary method defined
logCapturedError(e,t));var n=t.value,r=t.stack;this.componentDidCatch(n,{componentStack:null!==r?r:""}),"function"!==typeof o&&(
// If componentDidCatch is the only error boundary method defined,
// then it needs to call setState to recover from errors.
// If no state update is scheduled then the boundary will swallow the error.
includesSomeLane(e.lanes,1)||error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",getComponentName(e.type)||"Unknown"))}:r.callback=function(){markFailedErrorBoundaryForHotReloading(e)},r}function attachPingListener(e,t,n){
// Attach a listener to the promise to "ping" the root and retry. But only if
// one does not already exist for the lanes we're currently rendering (which
// acts like a "thread ID" here).
var r,o=e.pingCache;if(null===o?(o=e.pingCache=new Qi,r=new Set,o.set(t,r)):void 0===(r=o.get(t))&&(r=new Set,o.set(t,r)),!r.has(n)){
// Memoize using the thread ID to prevent redundant listeners.
r.add(n);var a=pingSuspendedRoot.bind(null,e,t,n);t.then(a,a)}}function throwException(e,t,n,r,o){if(
// The source fiber did not complete.
n.flags|=Wt,// Its effect list is no longer valid.
n.firstEffect=n.lastEffect=null,null!==r&&"object"===typeof r&&"function"===typeof r.then){
// This is a wakeable.
var a=r;if(0===(2&n.mode)){
// Reset the memoizedState to what it was before we attempted
// to render it.
var i=n.alternate;i?(n.updateQueue=i.updateQueue,n.memoizedState=i.memoizedState,n.lanes=i.lanes):(n.updateQueue=null,n.memoizedState=null)}var s=hasSuspenseContext(Ka.current,1),u=t;// Schedule the nearest Suspense to re-render the timed out view.
do{if(u.tag===c&&shouldCaptureSuspense(u,s)){
// Found the nearest boundary.
// Stash the promise on the boundary fiber. If the boundary times out, we'll
// attach another listener to flip the boundary back to its normal state.
var l=u.updateQueue;if(null===l){var d=new Set;d.add(a),u.updateQueue=d}else l.add(a);// If the boundary is outside of blocking mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. In the commit phase, we'll schedule a
// subsequent synchronous update to re-render the Suspense.

// Note: It doesn't matter whether the component that suspended was
// inside a blocking mode tree. If the Suspense is outside of it, we
// should *not* suspend the commit.
if(0===(2&u.mode)){if(u.flags|=Ot,n.flags|=Vt,// We're going to commit this fiber even though it didn't complete.
// But we shouldn't call any lifecycle methods or callbacks. Remove
// all lifecycle effect tags.
n.flags&=-2981,1===n.tag)if(null===n.alternate)
// This is a new mount. Change the tag so it's not mistaken for a
// completed class component. For example, we should not call
// componentWillUnmount if it is deleted.
n.tag=f;else{
// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force update to
// prevent a bail out.
var p=createUpdate(Rn,1);p.tag=ba,enqueueUpdate(n,p)}// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
// Exit without suspending.
return void(n.lanes=mergeLanes(n.lanes,1))}// Confirmed that the boundary is in a concurrent mode tree. Continue
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
// a fallback, then we should always suspend/restart. Transitions apply
// to this case. If none is defined, JND is used instead.

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
return attachPingListener(e,a,o),u.flags|=jt,void(u.lanes=o)}// This boundary already captured during this render. Continue to the next
// boundary.
u=u.return}while(null!==u);// No boundary was found. Fallthrough to error mode.
// TODO: Use invariant so the message is stripped in prod?
r=new Error((getComponentName(n.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}// We didn't find a boundary that could handle this type of exception. Start
// over and traverse parent path again, this time treating the exception
// as an error.
!function renderDidError(){5!==ps&&(ps=2)}(),r=createCapturedValue(r,n);var m=t;do{switch(m.tag){case 3:var h=r;m.flags|=jt;var g=pickArbitraryLane(o);return m.lanes=mergeLanes(m.lanes,g),void enqueueCapturedUpdate(m,createRootErrorUpdate(m,h,g));case 1:
// Capture and retry
var v=r,y=m.type,b=m.stateNode;if(0===(m.flags&Ot)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&!isAlreadyFailedLegacyErrorBoundary(b))){m.flags|=jt;var k=pickArbitraryLane(o);return m.lanes=mergeLanes(m.lanes,k),void enqueueCapturedUpdate(m,createClassErrorUpdate(m,v,k))}}m=m.return}while(null!==m)}var Yi;Yi=new Set;var Ki="function"===typeof WeakSet?WeakSet:Set,Gi=function callComponentWillUnmountWithTimer(e,t){t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()};function safelyDetachRef(e){var t=e.ref;null!==t&&("function"===typeof t?(invokeGuardedCallback(null,t,null,null),hasCaughtError()&&captureCommitPhaseError(e,clearCaughtError())):t.current=null)}function safelyCallDestroy(e,t){(invokeGuardedCallback(null,t,null),hasCaughtError())&&captureCommitPhaseError(e,clearCaughtError())}function commitBeforeMutationLifeCycles(e,t){switch(t.tag){case 0:case u:case p:case g:return;case 1:if(t.flags&Ht&&null!==e){var n=e.memoizedProps,r=e.memoizedState,o=t.stateNode;t.type!==t.elementType||Li||(o.props!==t.memoizedProps&&error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(t.type)||"instance"),o.state!==t.memoizedState&&error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",getComponentName(t.type)||"instance"));var a=o.getSnapshotBeforeUpdate(t.elementType===t.type?n:resolveDefaultProps(t.type,n),r),i=Yi;void 0!==a||i.has(t.type)||(i.add(t.type),error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",getComponentName(t.type))),o.__reactInternalSnapshotBeforeUpdate=a}return;case 3:if(t.flags&Ht)clearContainer(t.stateNode.containerInfo);return;case 5:case 6:case 4:case f:
// Nothing to do for these component types
return}throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}function commitLifeCycles(e,t,n,r){switch(n.tag){case 0:case u:case p:case g:return function commitHookEffectListMount(e,t){var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next,a=o;do{if((a.tag&e)===e){
// Mount
var i=a.create;a.destroy=i();var s=a.destroy;void 0!==s&&"function"!==typeof s&&error("An effect function must not return anything besides a function, which is used for clean-up.%s",null===s?" You returned null. If your effect does not require clean up, return undefined (or nothing).":"function"===typeof s.then?"\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching":" You returned: "+s)}a=a.next}while(a!==o)}}(3,n),void function schedulePassiveEffects(e){var t=e.updateQueue,n=null!==t?t.lastEffect:null;if(null!==n){var r=n.next,o=r;do{var a=o,i=a.next,s=a.tag;

0!==(4&s)&&0!==(1&s)&&(enqueuePendingPassiveHookEffectUnmount(e,o),enqueuePendingPassiveHookEffectMount(e,o)),o=i}while(o!==r)}}(n);case 1:var o=n.stateNode;if(4&n.flags)if(null===t)n.type!==n.elementType||Li||(o.props!==n.memoizedProps&&error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance"),o.state!==n.memoizedState&&error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",getComponentName(n.type)||"instance")),o.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:resolveDefaultProps(n.type,t.memoizedProps),i=t.memoizedState;n.type!==n.elementType||Li||(o.props!==n.memoizedProps&&error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance"),o.state!==n.memoizedState&&error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",getComponentName(n.type)||"instance")),o.componentDidUpdate(a,i,o.__reactInternalSnapshotBeforeUpdate)}// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var s=n.updateQueue;return void(null!==s&&(n.type!==n.elementType||Li||(o.props!==n.memoizedProps&&error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",getComponentName(n.type)||"instance"),o.state!==n.memoizedState&&error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",getComponentName(n.type)||"instance")),// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
commitUpdateQueue(0,s,o)));case 3:
// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var d=n.updateQueue;if(null!==d){var b=null;if(null!==n.child)switch(n.child.tag){case 5:case 1:b=n.child.stateNode}commitUpdateQueue(0,d,b)}return;case 5:var k=n.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(null===t&&4&n.flags)!// -------------------
function commitMount(e,t,n,r){
// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
shouldAutoFocusHostComponent(t,n)&&e.focus()}(k,n.type,n.memoizedProps);return;case 6:case 4:
// We have no life-cycles associated with portals.
return;case l:var C=n.memoizedProps,w=(C.onCommit,C.onRender),S=(n.stateNode.effectDuration,getCommitTime());return void("function"===typeof w&&w(n.memoizedProps.id,null===t?"mount":"update",n.actualDuration,n.treeBaseDuration,n.actualStartTime,S,e.memoizedInteractions));case c:return void function commitSuspenseHydrationCallbacks(e,t){if(null===t.memoizedState){var n=t.alternate;if(null!==n){var r=n.memoizedState;if(null!==r){var o=r.dehydrated;null!==o&&function commitHydratedSuspenseInstance(e){
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(e)}(o)}}}}(0,n);case m:case f:case h:case 21:case v:case y:return}throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}function hideOrUnhideAllChildren(e,t){for(
// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
var n=e;;){if(5===n.tag){var r=n.stateNode;t?hideInstance(r):unhideInstance(n.stateNode,n.memoizedProps)}else if(6===n.tag){var o=n.stateNode;t?o.nodeValue="":unhideTextInstance(o,n.memoizedProps)}else if(n.tag!==v&&n.tag!==y||null===n.memoizedState||n===e){if(null!==n.child){n.child.return=n,n=n.child;continue}}else;if(n===e)return;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function commitAttachRef(e){var t=e.ref;if(null!==t){var n,r=e.stateNode;e.tag,n=r,// Moved outside to ensure DCE works with this flag
"function"===typeof t?t(n):(t.hasOwnProperty("current")||error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",getComponentName(e.type)),t.current=n)}}function commitDetachRef(e){var t=e.ref;null!==t&&("function"===typeof t?t(null):t.current=null)}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(e,t,n){switch(function onCommitUnmount(e){if(Ro&&"function"===typeof Ro.onCommitFiberUnmount)try{Ro.onCommitFiberUnmount(Eo,e)}catch(t){xo||(xo=!0,error("React instrumentation encountered an error: %s",t))}}(t),t.tag){case 0:case u:case d:case p:case g:var r=t.updateQueue;if(null!==r){var o=r.lastEffect;if(null!==o){var a=o.next,i=a;do{var s=i,l=s.destroy,c=s.tag;void 0!==l&&(0!==(4&c)?enqueuePendingPassiveHookEffectUnmount(t,i):safelyCallDestroy(t,l)),i=i.next}while(i!==a)}}return;case 1:safelyDetachRef(t);var f=t.stateNode;return void("function"===typeof f.componentWillUnmount&&// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(e,t){invokeGuardedCallback(null,Gi,null,e,t),hasCaughtError()&&captureCommitPhaseError(e,clearCaughtError())}(t,f));case 5:return void safelyDetachRef(t);case 4:return void unmountHostComponents(e,t);case h:case 18:case 21:return}}function commitNestedUnmounts(e,t,n){for(
// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
// we do an inner loop while we're still inside the host node.
var r=t;;)// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(commitUnmount(e,r),null===r.child||// If we use mutation we drill down into portals using commitUnmount above.
// If we don't use mutation we drill down into portals here instead.
4===r.tag){if(r===t)return;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}else r.child.return=r,r=r.child}function detachFiberMutation(e){
// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
// Note: we cannot null out sibling here, otherwise it can cause issues
// with findDOMNode and how it requires the sibling field to carry out
// traversal in a later effect. See PR #16820. We now clear the sibling
// field after effects, see: detachFiberAfterEffects.
// Don't disconnect stateNode now; it will be detached in detachFiberAfterEffects.
// It may be required if the current component is an error boundary,
// and one of its descendants throws while unmounting a passive effect.
e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null,e._debugOwner=null}function isHostParent(e){return 5===e.tag||3===e.tag||4===e.tag}function commitPlacement(e){var t,n,r=function getHostParentFiber(e){for(var t=e.return;null!==t;){if(isHostParent(t))return t;t=t.return}throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}(e),o=r.stateNode;// Note: these two variables *must* always be updated together.
switch(r.tag){case 5:t=o,n=!1;break;case 3:case 4:t=o.containerInfo,n=!0;break;// eslint-disable-next-line-no-fallthrough
default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}16&r.flags&&(
// Reset the text content of the parent before doing any insertions
resetTextContent(t),// Clear ContentReset from the effect tag
r.flags&=-17);var a=function getHostSibling(e){
// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
// TODO: Find a more efficient way to do this.
var t=e;e:for(;;){
// If we didn't find anything, let's try the next sibling.
for(;null===t.sibling;){if(null===t.return||isHostParent(t.return))
// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;5!==t.tag&&6!==t.tag&&18!==t.tag;){
// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(2&t.flags)
// If we don't have a child, try the siblings instead.
continue e;// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(null===t.child||4===t.tag)continue e;t.child.return=t,t=t.child}// Check if this host node is stable or about to be placed.
if(!(2&t.flags))
// Found it!
return t.stateNode}}(e);// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
n?insertOrAppendPlacementNodeIntoContainer(e,a,t):insertOrAppendPlacementNode(e,a,t)}function insertOrAppendPlacementNodeIntoContainer(e,t,n){var r=e.tag,o=5===r||6===r;if(o){var a=o?e.stateNode:e.stateNode.instance;t?function insertInContainerBefore(e,t,n){8===e.nodeType?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)}(n,a,t):function appendChildToContainer(e,t){var n;8===e.nodeType?(n=e.parentNode).insertBefore(t,e):(n=e).appendChild(t);// This container might be used for a portal.
// If something inside a portal is clicked, that click should bubble
// through the React tree. However, on Mobile Safari the click would
// never bubble through the *DOM* tree unless an ancestor with onclick
// event exists. So we wouldn't see it and dispatch it.
// This is why we ensure that non React root containers have inline onclick
// defined.
// https://github.com/facebook/react/issues/11918
var r=e._reactRootContainer;null!==r&&void 0!==r||null!==n.onclick||
// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(n)}(n,a)}else if(4===r);else{var i=e.child;if(null!==i){insertOrAppendPlacementNodeIntoContainer(i,t,n);for(var s=i.sibling;null!==s;)insertOrAppendPlacementNodeIntoContainer(s,t,n),s=s.sibling}}}function insertOrAppendPlacementNode(e,t,n){var r=e.tag,o=5===r||6===r;if(o){var a=o?e.stateNode:e.stateNode.instance;t?function insertBefore(e,t,n){e.insertBefore(t,n)}(n,a,t):function appendChild(e,t){e.appendChild(t)}(n,a)}else if(4===r);else{var i=e.child;if(null!==i){insertOrAppendPlacementNode(i,t,n);for(var s=i.sibling;null!==s;)insertOrAppendPlacementNode(s,t,n),s=s.sibling}}}function unmountHostComponents(e,t,n){for(
// We only have the top Fiber that was deleted but we need to recurse down its
// children to find all the terminal nodes.
var r,o,a,i,s=t,u=!1// Each iteration, currentParent is populated with node's host parent if not
// currentParentIsValid.
;;){if(!u){var l=s.return;e:for(;;){if(null===l)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");var c=l.stateNode;switch(l.tag){case 5:r=c,o=!1;break e;case 3:case 4:r=c.containerInfo,o=!0;break e}l=l.return}u=!0}if(5===s.tag||6===s.tag)commitNestedUnmounts(e,s),// After all the children have unmounted, it is now safe to remove the
// node from the tree.
o?(a=r,i=s.stateNode,8===a.nodeType?a.parentNode.removeChild(i):a.removeChild(i)):removeChild(r,s.stateNode);else if(4===s.tag){if(null!==s.child){
// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
r=s.stateNode.containerInfo,o=!0,// Visit children because portals might contain host components.
s.child.return=s,s=s.child;continue}}else// Visit children because we may find more host components below.
if(commitUnmount(e,s),null!==s.child){s.child.return=s,s=s.child;continue}if(s===t)return;for(;null===s.sibling;){if(null===s.return||s.return===t)return;4===(s=s.return).tag&&(
// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
u=!1)}s.sibling.return=s.return,s=s.sibling}}function commitDeletion(e,t,n){
// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
unmountHostComponents(e,t);var r=t.alternate;detachFiberMutation(t),null!==r&&detachFiberMutation(r)}function commitWork(e,t){switch(t.tag){case 0:case u:case d:case p:case g:return void function commitHookEffectListUnmount(e,t){var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next,a=o;do{if((a.tag&e)===e){
// Unmount
var i=a.destroy;a.destroy=void 0,void 0!==i&&i()}a=a.next}while(a!==o)}}(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){
// Commit the work prepared earlier.
var r=t.memoizedProps,o=null!==e?e.memoizedProps:r,a=t.type,i=t.updateQueue;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
t.updateQueue=null,null!==i&&function commitUpdate(e,t,n,r,o,a){
// Update the props handle so that we know which props are the ones with
// with current event handlers.
updateFiberProps(e,o),// Apply the diff to the DOM node.
updateProperties(e,t,n,r,o)}(n,i,a,o,r)}return;case 6:if(null===t.stateNode)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var s=t.stateNode,b=t.memoizedProps;null!==e&&e.memoizedProps;return void function commitTextUpdate(e,t,n){e.nodeValue=n}(s,0,b);case 3:var k=t.stateNode;return void(k.hydrate&&(
// We've just hydrated. No need to hydrate again.
k.hydrate=!1,function commitHydratedContainer(e){
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(e)}(k.containerInfo)));case l:return;case c:return function commitSuspenseComponent(e){if(null!==e.memoizedState){!function markCommitTimeOfFallback(){bs=Go()}(),hideOrUnhideAllChildren(e.child,!0)}}(t),void attachSuspenseRetryListeners(t);case m:return void attachSuspenseRetryListeners(t);case f:return;case h:case 21:break;case v:case y:return void hideOrUnhideAllChildren(t,null!==t.memoizedState)}throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}function attachSuspenseRetryListeners(e){
// If this boundary just timed out, then it will have a set of wakeables.
// For each wakeable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ki),t.forEach((function(t){
// Memoize using the boundary fiber to prevent redundant listeners.
var r=resolveRetryWakeable.bind(null,e,t);n.has(t)||(!0!==t.__reactDoNotTraceInteractions&&(r=a.unstable_wrap(r)),n.add(t),t.then(r,r))}))}}// This function detects when a Suspense boundary goes from visible to hidden.
// It returns false if the boundary is already hidden.
// TODO: Use an effect tag.
function isSuspenseBoundaryBeingHidden(e,t){if(null!==e){var n=e.memoizedState;if(null===n||null!==n.dehydrated){var r=t.memoizedState;return null!==r&&null===r.dehydrated}}return!1}function commitResetTextContent(e){resetTextContent(e.stateNode)}if("function"===typeof Symbol&&Symbol.for){var Xi=Symbol.for;Xi("selector.component"),Xi("selector.has_pseudo_class"),Xi("selector.role"),Xi("selector.test_id"),Xi("selector.text")}var Ji=[];var Zi=Math.ceil,es=i.ReactCurrentDispatcher,ts=i.ReactCurrentOwner,ns=i.IsSomeRendererActing,rs=

16,os=

32,as=

0,ss=null,us=null,ls=0,cs=0,ds=createCursor(0),ps=0,fs=null,ms=0,hs=0,gs=0,vs=0,ys=null,bs=0,ks=1/0;function resetRenderTimer(){ks=Go()+500}function getRenderTargetTime(){return ks}var Cs=null,ws=!1,Ss=null,Es=null,Rs=!1,xs=null,Ts=90,Ps=0,Is=[],_s=[],Fs=null,Ds=0,Ns=null,Os=0,Ls=null,Hs=Rn,Us=0,As=0,Ms=!1,Ws=null,js=!1;function requestEventTime(){return 0!==(48&as)?Go():// We're not inside React, so we may be in the middle of a browser event.
Hs!==Rn?Hs:// This is the first update since React yielded. Compute a new start time.
Hs=Go()}function requestUpdateLane(e){
// Special cases
var t=e.mode;if(0===(2&t))return 1;// The algorithm for assigning an update to a lane should be stable for all
// updates at the same priority within the same event. To do this, the inputs
// to the algorithm must be the same. For example, we use the `renderLanes`
// to avoid choosing a lane that is already in the middle of rendering.

// However, the "included" lanes could be mutated in between updates in the
// same event, like if you perform an update inside `flushSync`. Or any other
// code path that might call `prepareFreshStack`.

// The trick we use is to cache the first of each of these inputs within an
// event. Then reset the cached values once we can be sure the event is over.
// Our heuristic for that is whenever we enter a concurrent work loop.

// We'll do the same for `currentEventPendingLanes` below.
if(0===(4&t))return getCurrentPriorityLevel()===jo?1:2;if(0===Us&&(Us=ms),0!==function requestCurrentTransition(){return Jo.transition}())return 0!==As&&(As=null!==ys?ys.pendingLanes:0),function findTransitionLane(e,t){
// First look for lanes that are completely unclaimed, i.e. have no
// pending work.
var n=pickArbitraryLane(vn&~t);return 0===n&&0===(
// If all lanes have pending work, look for a lane that isn't currently
// being worked on.
n=pickArbitraryLane(vn&~e))&&(
// If everything is being worked on, pick any lane. This has the
// effect of interrupting the current work-in-progress.
n=pickArbitraryLane(vn)),n}// To ensure consistency across multiple updates in the same event, this should
// be pure function, so that it always returns the same lane for given inputs.
(Us,As);// TODO: Remove this dependency on the Scheduler priority.
// To do that, we're replacing it with an update lane priority.
var n,r=getCurrentPriorityLevel();// The old behavior was using the priority level of the Scheduler.
// This couples React to the Scheduler internals, so we're replacing it
// with the currentUpdateLanePriority above. As an example of how this
// could be problematic, if we're not inside `Scheduler.runWithPriority`,
// then we'll get the priority of the current running Scheduler task,
// which is probably not what we want.
// TODO: Temporary. We're removing the concept of discrete updates.
0!==(

4&as)&&r===Vo?n=findUpdateLane(12,Us):n=findUpdateLane(function schedulerPriorityToLanePriority(e){switch(e){case 99:return mn;case 98:return hn;case 97:case 96:
// TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
return 8;case 95:return 2;default:return 0}}(r),Us);return n}function requestRetryLane(e){
// This is a fork of `requestUpdateLane` designed specifically for Suspense
// "retries" — a special update that attempts to flip a Suspense boundary
// from its placeholder state to its primary/resolved state.
// Special cases
var t=e.mode;return 0===(2&t)?1:0===(4&t)?getCurrentPriorityLevel()===jo?1:2:(// See `requestUpdateLane` for explanation of `currentEventWipLanes`
0===Us&&(Us=ms),function findRetryLane(e){
// This is a fork of `findUpdateLane` designed specifically for Suspense
// "retries" — a special update that attempts to flip a Suspense boundary
// from its placeholder state to its primary/resolved state.
var t=pickArbitraryLane(yn&~e);return 0===t&&(t=pickArbitraryLane(yn)),t}(Us))}function scheduleUpdateOnFiber(e,t,n){!function checkForNestedUpdates(){if(Ds>50)throw Ds=0,Ns=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Os>50&&(Os=0,error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}(),function warnAboutRenderPhaseUpdatesInDEV(e){if(ge&&0!==(as&rs)&&!function getIsUpdatingOpaqueValueInRenderPhaseInDEV(){return gi}())switch(e.tag){case 0:case u:case p:var t=us&&getComponentName(us.type)||"Unknown",n=t;// Dedupe by the rendering component because it's the one that needs to be fixed.
if(!qs.has(n))qs.add(n),error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",getComponentName(e.type)||"Unknown",t,t);break;case 1:Qs||(error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),Qs=!0)}}// a 'shared' variable that changes when act() opens/closes in tests.
(e);var r=markUpdateLaneFromFiberToRoot(e,t);if(null===r)return function warnAboutUpdateOnUnmountedFiberInDEV(e){var t=e.tag;if(3!==t&&1!==t&&0!==t&&t!==u&&t!==d&&t!==p&&t!==g)
// Only warn for user-defined components, not internal ones like Suspense.
return;// If there are pending passive effects unmounts for this Fiber,
// we can assume that they would have prevented this update.
if(0!==(e.flags&At))return;// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var n=getComponentName(e.type)||"ReactComponent";if(null!==$s){if($s.has(n))return;$s.add(n)}else $s=new Set([n]);if(Ms);else{var r=he;try{setCurrentFiber(e),error("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.",1===t?"the componentWillUnmount method":"a useEffect cleanup function")}finally{r?setCurrentFiber(e):resetCurrentFiber()}}}(e),null;// Mark that the root has a pending update.
markRootUpdated(r,t,n),r===ss&&(gs=mergeLanes(gs,t),4===ps&&
// The root already suspended with a delay, which means this render
// definitely won't finish. Since we have a new update, let's mark it as
// suspended now, right before marking the incoming update. This has the
// effect of interrupting the current render and switching to the update.
// TODO: Make sure this doesn't override pings that happen while we've
// already started rendering.
markRootSuspended$1(r,ls));// TODO: requestUpdateLanePriority also reads the priority. Pass the
// priority as an argument to that function and this one.
var o=getCurrentPriorityLevel();1===t?// Check if we're inside unbatchedUpdates
0!==(

8&as)&&// Check if we're not already rendering
0===(48&as)?(
// Register pending interactions on the root to avoid losing traced interaction data.
schedulePendingInteractions(r,t),// This is a legacy edge case. The initial mount of a ReactDOM.render-ed
// root inside of batchedUpdates should be synchronous, but layout updates
// should be deferred until the end of the batch.
performSyncWorkOnRoot(r)):(ensureRootIsScheduled(r,n),schedulePendingInteractions(r,t),0===as&&(
// Flush the synchronous work now, unless we're already working or inside
// a batch. This is intentionally inside scheduleUpdateOnFiber instead of
// scheduleCallbackForFiber to preserve the ability to schedule a callback
// without immediately flushing it. We only do this for user-initiated
// updates, to preserve historical behavior of legacy mode.
resetRenderTimer(),flushSyncCallbackQueue())):(
// Schedule a discrete update but only if it's not Sync.
0===(4&as)||// Only updates at user-blocking priority or greater are considered
// discrete, even inside a discrete event.
o!==Vo&&o!==jo||(
// This is the result of a discrete event. Track the lowest priority
// discrete update per root so we can flush them early, if needed.
null===Fs?Fs=new Set([r]):Fs.add(r)),// Schedule other updates after in case the callback is sync.
ensureRootIsScheduled(r,n),schedulePendingInteractions(r,t)),// We use this when assigning a lane for a transition inside
// `requestUpdateLane`. We assume it's the same as the root being updated,
// since in the common case of a single root app it probably is. If it's not
// the same root, then it's not a huge deal, we just might batch more stuff
// together more than necessary.
ys=r}// This is split into a separate function so we can mark a fiber with pending
// work without treating it as a typical update that originates from an event;
// e.g. retrying a Suspense boundary isn't an update, but it does schedule work
// on a fiber.
function markUpdateLaneFromFiberToRoot(e,t){
// Update the source fiber's lanes
e.lanes=mergeLanes(e.lanes,t);var n=e.alternate;null!==n&&(n.lanes=mergeLanes(n.lanes,t)),null===n&&0!==(1026&e.flags)&&warnAboutUpdateOnNotYetMountedFiberInDEV(e);for(// Walk the parent path to the root and update the child expiration time.
var r=e,o=e.return;null!==o;)o.childLanes=mergeLanes(o.childLanes,t),null!==(n=o.alternate)?n.childLanes=mergeLanes(n.childLanes,t):0!==(1026&o.flags)&&warnAboutUpdateOnNotYetMountedFiberInDEV(e),r=o,o=o.return;return 3===r.tag?r.stateNode:null}// Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the priority
// of the existing task is the same as the priority of the next level that the
// root has work on. This function is called on every update, and right before
// exiting a task.
function ensureRootIsScheduled(e,t){var n=e.callbackNode;// Check if any lanes are being starved by other work. If so, mark them as
// expired so we know to work on those next.
!function markStarvedLanesAsExpired(e,t){for(
// TODO: This gets called every time we yield. We can optimize by storing
// the earliest expiration time on the root. Then use that to quickly bail out
// of this function.
var n=e.pendingLanes,r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,i=n;i>0;){var s=pickArbitraryLaneIndex(i),u=1<<s,l=a[s];l===Rn?
// Found a pending lane with no expiration time. If it's not suspended, or
// if it's pinged, assume it's CPU-bound. Compute a new expiration time
// using the current time.
0!==(u&r)&&0===(u&o)||(
// Assumes timestamps are monotonically increasing.
a[s]=computeExpirationTime(u,t)):l<=t&&(
// This lane expired
e.expiredLanes|=u),i&=~u}}(e,t);// Determine the next lanes to work on, and their priority.
var r=getNextLanes(e,e===ss?ls:0),o=function returnNextLanesPriority(){return xn}();// This returns the priority level computed during the `getNextLanes` call.
if(0!==r){// Check if there's an existing task. We may be able to reuse it.
if(null!==n){if(e.callbackPriority===o)
// The priority hasn't changed. We can reuse the existing task. Exit.
return;// The priority changed. Cancel the existing callback. We'll schedule a new
// one below.
cancelCallback(n)}// Schedule a new callback.
var a;if(o===mn)
// Special case: Sync React callbacks are scheduled on a special
// internal queue
a=function scheduleSyncCallback(e){
// Push this callback into an internal queue. We'll flush these either in
// the next tick, or earlier if something calls `flushSyncCallbackQueue`.
return null===qo?(qo=[e],// Flush the queue in the next tick, at the earliest.
Qo=Io(Lo,flushSyncCallbackQueueImpl)):
// Push onto existing queue. Don't need to schedule a callback because
// we already scheduled one when we created the queue.
qo.push(e),Wo}(performSyncWorkOnRoot.bind(null,e));else if(14===o)a=scheduleCallback(jo,performSyncWorkOnRoot.bind(null,e));else{a=scheduleCallback(function lanePriorityToSchedulerPriority(e){switch(e){case mn:case 14:return 99;case 13:case 12:case 11:case hn:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error("Invalid update priority: "+e+". This is a bug in React.")}}(o),performConcurrentWorkOnRoot.bind(null,e))}e.callbackPriority=o,e.callbackNode=a}else
// Special case: There's nothing to work on.
null!==n&&(cancelCallback(n),e.callbackNode=null,e.callbackPriority=0)}// This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.
function performConcurrentWorkOnRoot(e){if(
// Since we know we're in a React event, we can clear the current
// event time. The next update will compute a new event time.
Hs=Rn,Us=0,As=0,0!==(48&as))throw Error("Should not already be working.");// Flush any pending passive effects before deciding which lanes to work on,
// in case they schedule additional work.
var t=e.callbackNode;if(flushPassiveEffects()&&e.callbackNode!==t)
// The current task was canceled. Exit. We don't need to call
// `ensureRootIsScheduled` because the check above implies either that
// there's a new task, or that there's no remaining work on this root.
return null;// Determine the next expiration time to work on, using the fields stored
// on the root.
var n=getNextLanes(e,e===ss?ls:0);if(0===n)
// Defensive coding. This is never expected to happen.
return null;var r=function renderRootConcurrent(e,t){var n=as;as|=rs;var r=pushDispatcher();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
ss===e&&ls===t||(resetRenderTimer(),prepareFreshStack(e,t),startWorkOnPendingInteractions(e,t));var o=pushInteractions(e);for(;;)try{workLoopConcurrent();break}catch(a){handleError(e,a)}return resetContextDependencies(),popInteractions(o),popDispatcher(r),as=n,null!==us?0:(ss=null,ls=0,ps)}
/** @noinline */(e,n);if(includesSomeLane(ms,gs))
// The render included lanes that were updated during the render phase.
// For example, when unhiding a hidden tree, we include all the lanes
// that were previously skipped when the tree was hidden. That set of
// lanes is a superset of the lanes we started rendering with.
// So we'll throw out the current work and restart.
prepareFreshStack(e,0);else if(0!==r){if(2===r&&(as|=

64,// If an error occurred during hydration,
// discard server response and fall back to client side render.
e.hydrate&&(e.hydrate=!1,clearContainer(e.containerInfo)),0!==(// If something threw an error, try rendering one more time. We'll render
// synchronously to block concurrent data mutations, and we'll includes
// all pending updates are included. If it still fails after the second
// attempt, we'll give up and commit the resulting tree.
n=getLanesToRetrySynchronouslyOnError(e))&&(r=renderRootSync(e,n))),1===r){var o=fs;throw prepareFreshStack(e,0),markRootSuspended$1(e,n),ensureRootIsScheduled(e,Go()),o}// We now have a consistent tree. The next step is either to commit it,
// or, if something suspended, wait to commit it after a timeout.
var a=e.current.alternate;e.finishedWork=a,e.finishedLanes=n,function finishConcurrentRender(e,t,n){switch(t){case 0:case 1:throw Error("Root did not complete. This is a bug in React.");
// Flow knows about invariant, so it complains if I add a break
// statement, but eslint doesn't know about invariant, so it complains
// if I do. eslint-disable-next-line no-fallthrough
case 2:case 5:
// The work completed. Ready to commit.
commitRoot(e);break;case 3:// We have an acceptable loading state. We need to figure out if we
// should immediately commit it or wait a bit.
if(markRootSuspended$1(e,n),includesOnlyRetries(n)&&// do not delay if we're inside an act() scope
!shouldForceFlushFallbacksInDEV()){
// This render only included retries, no updates. Throttle committing
// retries so that we don't show too many loading states too quickly.
var r=bs+500-Go();// Don't bother with a very short suspense time.
if(r>10){if(0!==getNextLanes(e,0))
// There's additional work on this root.
break;var o=e.suspendedLanes;if(!isSubsetOfLanes(o,n)){
// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
// FIXME: What if the suspended lanes are Idle? Should not restart.
requestEventTime();markRootPinged(e,o);break}// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
e.timeoutHandle=ao(commitRoot.bind(null,e),r);break}}// The work expired. Commit immediately.
commitRoot(e);break;case 4:if(markRootSuspended$1(e,n),function includesOnlyTransitions(e){return(e&vn)===e}(n))
// This is a transition, so we should exit without committing a
// placeholder and without scheduling a timeout. Delay indefinitely
// until we receive more data.
break;if(!shouldForceFlushFallbacksInDEV()){
// This is not a transition, but we did trigger an avoided state.
// Schedule a placeholder to display after a short delay, using the Just
// Noticeable Difference.
// TODO: Is the JND optimization worth the added complexity? If this is
// the only reason we track the event time, then probably not.
// Consider removing.
var a=function getMostRecentEventTime(e,t){for(var n=e.eventTimes,r=Rn;t>0;){var o=pickArbitraryLaneIndex(t),a=1<<o,i=n[o];i>r&&(r=i),t&=~a}return r}(e,n),i=a,s=Go()-i,u=// Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates. We expect to adjust them based on research.
function jnd(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:1960*Zi(e/1960)}(s)-s;// Don't bother with a very short suspense time.
if(u>10){
// Instead of committing the fallback immediately, wait for more data
// to arrive.
e.timeoutHandle=ao(commitRoot.bind(null,e),u);break}}// Commit the placeholder.
commitRoot(e);break;default:throw Error("Unknown root exit status.")}}(e,r,n)}return ensureRootIsScheduled(e,Go()),e.callbackNode===t?performConcurrentWorkOnRoot.bind(null,e):null}function markRootSuspended$1(e,t){
// When suspending, we should always exclude lanes that were pinged or (more
// rarely, since we try to avoid it) updated during the render phase.
// TODO: Lol maybe there's a better way to factor this besides this
// obnoxiously named function :)
t=removeLanes(t,vs),function markRootSuspended(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(// The suspended lanes are no longer CPU-bound. Clear their expiration times.
var n=e.expirationTimes,r=t;r>0;){var o=pickArbitraryLaneIndex(r),a=1<<o;n[o]=Rn,r&=~a}}(e,t=removeLanes(t,gs))}// This is the entry point for synchronous tasks that don't go
// through Scheduler
function performSyncWorkOnRoot(e){if(0!==(48&as))throw Error("Should not already be working.");var t,n;if(flushPassiveEffects(),e===ss&&includesSomeLane(e.expiredLanes,ls)?(
// There's a partial tree, and at least one of its lanes has expired. Finish
// rendering it before rendering the rest of the expired work.
n=renderRootSync(e,t=ls),includesSomeLane(ms,gs)&&(n=renderRootSync(e,
// The render included lanes that were updated during the render phase.
// For example, when unhiding a hidden tree, we include all the lanes
// that were previously skipped when the tree was hidden. That set of
// lanes is a superset of the lanes we started rendering with.
// Note that this only happens when part of the tree is rendered
// concurrently. If the whole tree is rendered synchronously, then there
// are no interleaved events.
t=getNextLanes(e,t)))):n=renderRootSync(e,t=getNextLanes(e,0)),0!==e.tag&&2===n&&(as|=64,// If an error occurred during hydration,
// discard server response and fall back to client side render.
e.hydrate&&(e.hydrate=!1,clearContainer(e.containerInfo)),0!==(// If something threw an error, try rendering one more time. We'll render
// synchronously to block concurrent data mutations, and we'll includes
// all pending updates are included. If it still fails after the second
// attempt, we'll give up and commit the resulting tree.
t=getLanesToRetrySynchronouslyOnError(e))&&(n=renderRootSync(e,t))),1===n){var r=fs;throw prepareFreshStack(e,0),markRootSuspended$1(e,t),ensureRootIsScheduled(e,Go()),r}// We now have a consistent tree. Because this is a sync render, we
// will commit it even if something suspended.
var o=e.current.alternate;return e.finishedWork=o,e.finishedLanes=t,commitRoot(e),// Before exiting, make sure there's a callback scheduled for the next
// pending level.
ensureRootIsScheduled(e,Go()),null}function batchedUpdates$1(e,t){var n=as;as|=

1;try{return e(t)}finally{0===(as=n)&&(
// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer(),flushSyncCallbackQueue())}}function unbatchedUpdates(e,t){var n=as;as&=-2,as|=8;try{return e(t)}finally{0===(as=n)&&(
// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer(),flushSyncCallbackQueue())}}function flushSync(e,t){var n=as;if(0!==(48&n))return error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),e(t);as|=1;try{return e?runWithPriority$1(jo,e.bind(null,t)):void 0}finally{as=n,// Flush the immediate callbacks that were scheduled during this batch.
// Note that this will happen even if batchedUpdates is higher up
// the stack.
flushSyncCallbackQueue()}}function pushRenderLanes(e,t){push(ds,cs,e),cs=mergeLanes(cs,t),ms=mergeLanes(ms,t)}function popRenderLanes(e){cs=ds.current,pop(ds,e)}function prepareFreshStack(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(
// The root previous suspended and scheduled a timeout to commit a fallback
// state. Now that we have additional work, cancel the timeout.
e.timeoutHandle=-1,// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
io(n)),null!==us)for(var r=us.return;null!==r;)unwindInterruptedWork(r),r=r.return;ss=e,us=createWorkInProgress(e.current,null),ls=cs=ms=t,ps=0,fs=null,hs=0,gs=0,vs=0,Ls=null,Zo.discardPendingWarnings()}function handleError(e,t){for(;;){var n=us;try{if(
// Reset module-level state that was set during the render phase.
resetContextDependencies(),resetHooksAfterThrow(),resetCurrentFiber(),// TODO: I found and added this missing line while investigating a
// separate issue. Write a regression test using string refs.
ts.current=null,null===n||null===n.return)
// Expected to be working on a non-root fiber. This is a fatal error
// because there's no ancestor that can handle it; the root is
// supposed to capture all errors that weren't caught by an error
// boundary.
return ps=1,fs=t,void(// Set `workInProgress` to null. This represents advancing to the next
// sibling, or the parent if there are no siblings. But since the root
// has no siblings nor a parent, we set it to null. Usually this is
// handled by `completeUnitOfWork` or `unwindWork`, but since we're
// intentionally not calling those, we need set it here.
// TODO: Consider calling `unwindWork` to pop the contexts.
us=null);8&n.mode&&
// Record the time spent rendering before an error was thrown. This
// avoids inaccurate Profiler durations in the case of a
// suspended render.
stopProfilerTimerIfRunningAndRecordDelta(n,!0),throwException(e,n.return,n,t,ls),completeUnitOfWork(n)}catch(r){
// Something in the return path also threw.
t=r,us===n&&null!==n?(
// If this boundary has already errored, then we had trouble processing
// the error. Bubble it to the next boundary.
n=n.return,us=n):n=us;continue}// Return to the normal work loop.
return}}function pushDispatcher(){var e=es.current;return es.current=vi,null===e?vi:e}function popDispatcher(e){es.current=e}function pushInteractions(e){var t=a.__interactionsRef.current;return a.__interactionsRef.current=e.memoizedInteractions,t}function popInteractions(e){a.__interactionsRef.current=e}function markSkippedUpdateLanes(e){hs=mergeLanes(e,hs)}function renderRootSync(e,t){var n=as;as|=rs;var r=pushDispatcher();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
ss===e&&ls===t||(prepareFreshStack(e,t),startWorkOnPendingInteractions(e,t));for(var o=pushInteractions(e);;)try{workLoopSync();break}catch(a){handleError(e,a)}if(resetContextDependencies(),popInteractions(o),as=n,popDispatcher(r),null!==us)throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return ss=null,ls=0,ps}// The work loop is an extremely hot path. Tell Closure not to inline it.
/** @noinline */function workLoopSync(){
// Already timed out, so perform work without checking if we need to yield.
for(;null!==us;)performUnitOfWork(us)}function workLoopConcurrent(){
// Perform work until Scheduler asks us to yield
for(;null!==us&&!Bo();)performUnitOfWork(us)}function performUnitOfWork(e){
// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var t,n=e.alternate;setCurrentFiber(e),0!==(8&e.mode)?(startProfilerTimer(e),t=Bs(n,e,cs),stopProfilerTimerIfRunningAndRecordDelta(e,!0)):t=Bs(n,e,cs),resetCurrentFiber(),e.memoizedProps=e.pendingProps,null===t?
// If this doesn't spawn new work, complete the current work.
completeUnitOfWork(e):us=t,ts.current=null}function completeUnitOfWork(e){
// Attempt to complete the current unit of work, then move to the next
// sibling. If there are no more siblings, return to the parent fiber.
var t=e;do{
// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var n=t.alternate,r=t.return;// Check if the work completed or if something threw.
if(0===(t.flags&Wt)){setCurrentFiber(t);var o=void 0;if(0===(8&t.mode)?o=completeWork(n,t,cs):(startProfilerTimer(t),o=completeWork(n,t,cs),// Update render duration assuming we didn't error.
stopProfilerTimerIfRunningAndRecordDelta(t,!1)),resetCurrentFiber(),null!==o)
// Completing this fiber spawned new work. Work on that next.
return void(us=o);if(resetChildLanes(t),null!==r&&// Do not append effects to parents if a sibling failed to complete
0===(r.flags&Wt))
// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
null===r.firstEffect&&(r.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==r.lastEffect&&(r.lastEffect.nextEffect=t.firstEffect),r.lastEffect=t.lastEffect),// Skip both NoWork and PerformedWork tags when creating the effect
// list. PerformedWork effect is read by React DevTools but shouldn't be
// committed.
t.flags>1&&(null!==r.lastEffect?r.lastEffect.nextEffect=t:r.firstEffect=t,r.lastEffect=t)}else{
// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var a=unwindWork(t);// Because this fiber did not complete, don't reset its expiration time.
if(null!==a)
// If completing this work spawned new work, do that next. We'll come
// back here again.
// Since we're restarting, remove anything that is not a host effect
// from the effect tag.
return a.flags&=

2047,void(us=a);if(0!==(8&t.mode)){
// Record the render duration for the fiber that errored.
stopProfilerTimerIfRunningAndRecordDelta(t,!1);for(// Include the time spent working on failed children before continuing.
var i=t.actualDuration,s=t.child;null!==s;)i+=s.actualDuration,s=s.sibling;t.actualDuration=i}null!==r&&(
// Mark the parent fiber as incomplete and clear its effect list.
r.firstEffect=r.lastEffect=null,r.flags|=Wt)}var u=t.sibling;if(null!==u)
// If there is more work to do in this returnFiber, do that next.
return void(us=u);// Otherwise, return to the parent
// Update the next thing we're working on in case something throws.
us=t=r}while(null!==t);// We've reached the root.
0===ps&&(ps=5)}function resetChildLanes(e){if(// TODO: Move this check out of the hot path by moving `resetChildLanes`
// to switch statement in `completeWork`.
e.tag!==y&&e.tag!==v||null===e.memoizedState||includesSomeLane(cs,En)||0===(4&e.mode)){var t=0;// Bubble up the earliest expiration time.
if(0!==(8&e.mode)){for(
// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
var n=e.actualDuration,r=e.selfBaseDuration,o=null===e.alternate||e.child!==e.alternate.child,a=e.child;null!==a;)t=mergeLanes(t,mergeLanes(a.lanes,a.childLanes)),o&&(n+=a.actualDuration),r+=a.treeBaseDuration,a=a.sibling;if(e.tag===c&&null!==e.memoizedState){
// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var i=e.child;null!==i&&(r-=i.treeBaseDuration)}e.actualDuration=n,e.treeBaseDuration=r}else for(var s=e.child;null!==s;)t=mergeLanes(t,mergeLanes(s.lanes,s.childLanes)),s=s.sibling;e.childLanes=t}}function commitRoot(e){var t=getCurrentPriorityLevel();return runWithPriority$1(jo,commitRootImpl.bind(null,e,t)),null}function commitRootImpl(e,t){do{
// `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
// means `flushPassiveEffects` will sometimes result in additional
// passive effects. So we need to keep flushing in a loop until there are
// no more pending effects.
// TODO: Might be better if `flushPassiveEffects` did not automatically
// flush synchronous work at the end, to avoid factoring hazards like this.
flushPassiveEffects()}while(null!==xs);if(function flushRenderPhaseStrictModeWarningsInDEV(){Zo.flushLegacyContextWarning(),Zo.flushPendingUnsafeLifecycleWarnings()}(),0!==(48&as))throw Error("Should not already be working.");var n=e.finishedWork,r=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");// commitRoot never returns a continuation; it always finishes synchronously.
// So we can clear these now to allow a new callback to be scheduled.
e.callbackNode=null;// Update the first and last pending times on this root. The new first
// pending time is whatever is left on the root fiber.
var o,a=mergeLanes(n.lanes,n.childLanes);if(function markRootFinished(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,// Let's try everything again
e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var r=e.entanglements,o=e.eventTimes,a=e.expirationTimes,i=n;i>0;){var s=pickArbitraryLaneIndex(i),u=1<<s;r[s]=0,o[s]=Rn,a[s]=Rn,i&=~u}}(e,a),// Clear already finished discrete updates in case that a later call of
// `flushDiscreteUpdates` starts a useless render pass which may cancels
// a scheduled timeout.
null!==Fs&&!function hasDiscreteLanes(e){return 0!==(24&e)}(a)&&Fs.has(e)&&Fs.delete(e),e===ss&&(
// We can reset these now that they are finished.
ss=null,us=null,ls=0),n.flags>1?
// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if it
// had one; that is, all the effects in the tree including the root.
null!==n.lastEffect?(n.lastEffect.nextEffect=n,o=n.firstEffect):o=n:
// There is no effect on the root.
o=n.firstEffect,null!==o){var i=as;as|=os;var s=pushInteractions(e);// Reset this to null before calling lifecycles
ts.current=null,// The commit phase is broken into several sub-phases. We do a separate pass
// of the effect list for each phase: all mutation effects come before all
// layout effects, and so on.
// The first phase a "before mutation" phase. We use this phase to read the
// state of the host tree right before we mutate it. This is where
// getSnapshotBeforeUpdate is called.
Ws=prepareForCommit(e.containerInfo),js=!1,Cs=o;do{if(invokeGuardedCallback(null,commitBeforeMutationEffects,null),hasCaughtError()){if(null===Cs)throw Error("Should be working on an effect.");var u=clearCaughtError();captureCommitPhaseError(Cs,u),Cs=Cs.nextEffect}}while(null!==Cs);// We no longer need to track the active instance fiber
Ws=null,
// Mark the current commit time to be shared by all Profilers in this
// batch. This enables them to be grouped later.
recordCommitTime(),// The next phase is the mutation phase, where we mutate the host tree.
Cs=o;do{if(invokeGuardedCallback(null,commitMutationEffects,null,e,t),hasCaughtError()){if(null===Cs)throw Error("Should be working on an effect.");var l=clearCaughtError();captureCommitPhaseError(Cs,l),Cs=Cs.nextEffect}}while(null!==Cs);!function resetAfterCommit(e){restoreSelection(oo),setEnabled(ro),ro=null,oo=null}(e.containerInfo),// The work-in-progress tree is now the current tree. This must come after
// the mutation phase, so that the previous tree is still current during
// componentWillUnmount, but before the layout phase, so that the finished
// work is current during componentDidMount/Update.
e.current=n,// The next phase is the layout phase, where we call effects that read
// the host tree after it's been mutated. The idiomatic use case for this is
// layout, but class component lifecycles also fire here for legacy reasons.
Cs=o;do{if(invokeGuardedCallback(null,commitLayoutEffects,null,e,r),hasCaughtError()){if(null===Cs)throw Error("Should be working on an effect.");var c=clearCaughtError();captureCommitPhaseError(Cs,c),Cs=Cs.nextEffect}}while(null!==Cs);Cs=null,// Tell Scheduler to yield at the end of the frame, so the browser has an
// opportunity to paint.
$o(),popInteractions(s),as=i}else
// No effects.
e.current=n,recordCommitTime();var d=Rs;if(Rs)
// This commit has passive effects. Stash a reference to them. But don't
// schedule a callback until after flushing layout work.
Rs=!1,xs=e,Ps=r,Ts=t;else for(
// We are done with the effect chain at this point so let's clear the
// nextEffect pointers to assist with GC. If we have passive effects, we'll
// clear this in flushPassiveEffects.
Cs=o;null!==Cs;){var p=Cs.nextEffect;Cs.nextEffect=null,8&Cs.flags&&detachFiberAfterEffects(Cs),Cs=p}// Read this again, since an effect might have updated it
// Check if there's remaining work on this root
if(0!==(a=e.pendingLanes)){if(null!==Ls){var f=Ls;Ls=null;for(var m=0;m<f.length;m++)scheduleInteractions(e,f[m],e.memoizedInteractions)}schedulePendingInteractions(e,a)}else
// If there's no remaining work, we can clear the set of already failed
// error boundaries.
Es=null;if(d||
// If there are no passive effects, then we can complete the pending interactions.
// Otherwise, we'll wait until after the passive effects are flushed.
// Wait to do this until after remaining work has been scheduled,
// so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
finishPendingInteractions(e,r),1===a?
// Count the number of times the root synchronously re-renders without
// finishing. If there are too many, it indicates an infinite update loop.
e===Ns?Ds++:(Ds=0,Ns=e):Ds=0,onCommitRoot(n.stateNode,t),function onCommitRoot$1(){Ji.forEach((function(e){return e()}))}(),// Always call this before exiting `commitRoot`, to ensure that any
// additional work on this root is scheduled.
ensureRootIsScheduled(e,Go()),ws){ws=!1;var h=Ss;throw Ss=null,h}return 0!==(8&as)||// If layout work was scheduled, flush it now.
flushSyncCallbackQueue(),null}function commitBeforeMutationEffects(){for(;null!==Cs;){var e=Cs.alternate;js||null===Ws||(0!==(8&Cs.flags)?doesFiberContain(Cs,Ws)&&(js=!0):
// TODO: Move this out of the hot path using a dedicated effect tag.
Cs.tag===c&&isSuspenseBoundaryBeingHidden(e,Cs)&&doesFiberContain(Cs,Ws)&&(js=!0));var t=Cs.flags;0!==(t&Ht)&&(setCurrentFiber(Cs),commitBeforeMutationLifeCycles(e,Cs),resetCurrentFiber()),0!==(t&Ut)&&(
// If there are passive effects, schedule a callback to flush at
// the earliest opportunity.
Rs||(Rs=!0,scheduleCallback(zo,(function(){return flushPassiveEffects(),null})))),Cs=Cs.nextEffect}}function commitMutationEffects(e,t){
// TODO: Should probably move the bulk of this function to commitWork.
for(;null!==Cs;){setCurrentFiber(Cs);var n=Cs.flags;if(16&n&&commitResetTextContent(Cs),n&Lt){var r=Cs.alternate;null!==r&&commitDetachRef(r)}// The following switch statement is only concerned about placement,
// updates, and deletions. To avoid needing to add a case for every possible
// bitmap value, we remove the secondary effects from the effect tag and
// switch on that value.
switch(1038&n){case 2:commitPlacement(Cs),// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted does
// and isMounted is deprecated anyway so we should be able to kill this.
Cs.flags&=-3;break;case

6:
// Placement
commitPlacement(Cs),// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
Cs.flags&=-3,commitWork(Cs.alternate,Cs);break;case Mt:Cs.flags&=-1025;break;case

1028:Cs.flags&=-1025,commitWork(Cs.alternate,Cs);break;case 4:commitWork(Cs.alternate,Cs);break;case 8:commitDeletion(e,Cs)}resetCurrentFiber(),Cs=Cs.nextEffect}}function commitLayoutEffects(e,t){for(;null!==Cs;){setCurrentFiber(Cs);var n=Cs.flags;if(36&n)commitLifeCycles(e,Cs.alternate,Cs);n&Lt&&commitAttachRef(Cs),resetCurrentFiber(),Cs=Cs.nextEffect}}function flushPassiveEffects(){
// Returns whether passive effects were flushed.
if(90!==Ts){var e=Ts>zo?zo:Ts;return Ts=90,runWithPriority$1(e,flushPassiveEffectsImpl)}return!1}function enqueuePendingPassiveHookEffectMount(e,t){Is.push(t,e),Rs||(Rs=!0,scheduleCallback(zo,(function(){return flushPassiveEffects(),null})))}function enqueuePendingPassiveHookEffectUnmount(e,t){_s.push(t,e),e.flags|=At;var n=e.alternate;null!==n&&(n.flags|=At),Rs||(Rs=!0,scheduleCallback(zo,(function(){return flushPassiveEffects(),null})))}function invokePassiveEffectCreate(e){var t=e.create;e.destroy=t()}function flushPassiveEffectsImpl(){if(null===xs)return!1;var e=xs,t=Ps;if(xs=null,Ps=0,0!==(48&as))throw Error("Cannot flush passive effects while already rendering.");Ms=!0;var n=as;as|=os;var r=pushInteractions(e),o=_s;// It's important that ALL pending passive effect destroy functions are called
// before ANY passive effect create functions are called.
// Otherwise effects in sibling components might interfere with each other.
// e.g. a destroy function in one component may unintentionally override a ref
// value set by a create function in another component.
// Layout effects have the same constraint.
// First pass: Destroy stale passive effects.
_s=[];for(var a=0;a<o.length;a+=2){var i=o[a],s=o[a+1],u=i.destroy;i.destroy=void 0,s.flags&=-8193;var l=s.alternate;if(null!==l&&(l.flags&=-8193),"function"===typeof u){if(setCurrentFiber(s),invokeGuardedCallback(null,u,null),hasCaughtError()){if(null===s)throw Error("Should be working on an effect.");captureCommitPhaseError(s,clearCaughtError())}resetCurrentFiber()}}// Second pass: Create new passive effects.
var c=Is;Is=[];for(var d=0;d<c.length;d+=2){var p=c[d],f=c[d+1];if(setCurrentFiber(f),invokeGuardedCallback(null,invokePassiveEffectCreate,null,p),hasCaughtError()){if(null===f)throw Error("Should be working on an effect.");captureCommitPhaseError(f,clearCaughtError())}resetCurrentFiber()}// Note: This currently assumes there are no passive effects on the root fiber
// because the root is not part of its own effect list.
// This could change in the future.
for(var m=e.current.firstEffect;null!==m;){var h=m.nextEffect;// Remove nextEffect pointer to assist GC
m.nextEffect=null,8&m.flags&&detachFiberAfterEffects(m),m=h}return popInteractions(r),finishPendingInteractions(e,t),Ms=!1,as=n,flushSyncCallbackQueue(),// If additional passive effects were scheduled, increment a counter. If this
// exceeds the limit, we'll fire a warning.
Os=null===xs?0:Os+1,!0}function isAlreadyFailedLegacyErrorBoundary(e){return null!==Es&&Es.has(e)}var Vs=function prepareToThrowUncaughtError(e){ws||(ws=!0,Ss=e)};function captureCommitPhaseErrorOnRoot(e,t,n){enqueueUpdate(e,createRootErrorUpdate(e,createCapturedValue(n,t),1));var r=requestEventTime(),o=markUpdateLaneFromFiberToRoot(e,1);null!==o&&(markRootUpdated(o,1,r),ensureRootIsScheduled(o,r),schedulePendingInteractions(o,1))}function captureCommitPhaseError(e,t){if(3!==e.tag)for(var n=e.return;null!==n;){if(3===n.tag)return void captureCommitPhaseErrorOnRoot(n,e,t);if(1===n.tag){var r=n.type,o=n.stateNode;if("function"===typeof r.getDerivedStateFromError||"function"===typeof o.componentDidCatch&&!isAlreadyFailedLegacyErrorBoundary(o)){var a=createCapturedValue(t,e);enqueueUpdate(n,createClassErrorUpdate(n,a,1));var i=requestEventTime(),s=markUpdateLaneFromFiberToRoot(n,1);if(null!==s)markRootUpdated(s,1,i),ensureRootIsScheduled(s,i),schedulePendingInteractions(s,1);else
// This component has already been unmounted.
// We can't schedule any follow up work for the root because the fiber is already unmounted,
// but we can still call the log-only boundary so the error isn't swallowed.
// TODO This is only a temporary bandaid for the old reconciler fork.
// We can delete this special case once the new fork is merged.
if("function"===typeof o.componentDidCatch&&!isAlreadyFailedLegacyErrorBoundary(o))try{o.componentDidCatch(t,a)}catch(u){// TODO Ignore this error? Rethrow it?
// This is kind of an edge case.
}return}}n=n.return}else
// Error was thrown at the root. There is no parent, so the root
// itself should capture it.
captureCommitPhaseErrorOnRoot(e,e,t)}function pingSuspendedRoot(e,t,n){var r=e.pingCache;null!==r&&
// The wakeable resolved, so we no longer need to memoize, because it will
// never be thrown again.
r.delete(t);var o=requestEventTime();markRootPinged(e,n),ss===e&&isSubsetOfLanes(ls,n)&&(
// Received a ping at the same priority level at which we're currently
// rendering. We might want to restart this render. This should mirror
// the logic of whether or not a root suspends once it completes.
// TODO: If we're rendering sync either due to Sync, Batched or expired,
// we should probably never restart.
// If we're suspended with delay, or if it's a retry, we'll always suspend
// so we can always restart.
4===ps||3===ps&&includesOnlyRetries(ls)&&Go()-bs<500?
// Restart from the root.
prepareFreshStack(e,0):
// Even though we can't restart right now, we might get an
// opportunity later. So we mark this render as having a ping.
vs=mergeLanes(vs,n)),ensureRootIsScheduled(e,o),schedulePendingInteractions(e,n)}function resolveRetryWakeable(e,t){var n;// Default
null!==(n=e.stateNode)&&
// The wakeable resolved, so we no longer need to memoize, because it will
// never be thrown again.
n.delete(t),function retryTimedOutBoundary(e,t){
// The boundary fiber (a Suspense component or SuspenseList component)
// previously was rendered in its fallback state. One of the promises that
// suspended it has resolved, which means at least part of the tree was
// likely unblocked. Try rendering again, at a new expiration time.
0===t&&(t=requestRetryLane(e));// TODO: Special case idle priority?
var n=requestEventTime(),r=markUpdateLaneFromFiberToRoot(e,t);null!==r&&(markRootUpdated(r,t,n),ensureRootIsScheduled(r,n),schedulePendingInteractions(r,t))}(e,0)}var zs=null;function warnAboutUpdateOnNotYetMountedFiberInDEV(e){if(0===(as&rs)&&6&e.mode){var t=e.tag;if(2===t||3===t||1===t||0===t||t===u||t===d||t===p||t===g){// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var n=getComponentName(e.type)||"ReactComponent";if(null!==zs){if(zs.has(n))return;zs.add(n)}else zs=new Set([n]);var r=he;try{setCurrentFiber(e),error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{r?setCurrentFiber(e):resetCurrentFiber()}}}}var Bs,$s=null;Bs=function beginWork$1(e,t,n){
// If a component throws an error, we replay it again in a synchronously
// dispatched event, so that the debugger will treat it as an uncaught
// error See ReactErrorUtils for more information.
// Before entering the begin phase, copy the work-in-progress onto a dummy
// fiber. If beginWork throws, we'll use this to reset the state.
var r=assignFiberPropertiesInDEV(null,t);try{return beginWork(e,t,n)}catch(o){if(null!==o&&"object"===typeof o&&"function"===typeof o.then)
// Don't replay promises. Treat everything else like an error.
throw o;// Keep this code in sync with handleError; any changes here must have
// corresponding changes there.
if(resetContextDependencies(),resetHooksAfterThrow(),// Don't reset current debug fiber, since we're about to work on the
// same fiber again.
// Unwind the failed stack frame
unwindInterruptedWork(t),// Restore the original properties of the fiber.
assignFiberPropertiesInDEV(t,r),8&t.mode&&
// Reset the profiler timer.
startProfilerTimer(t),// Run beginWork again.
invokeGuardedCallback(null,beginWork,null,e,t,n),hasCaughtError())// `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
// Rethrow this error instead of the original one.
throw clearCaughtError();
// This branch is reachable if the render phase is impure.
throw o}};var qs,Qs=!1;qs=new Set;var Ys={current:!1};function warnIfNotScopedWithMatchingAct(e){if(!0===ns.current&&!0!==Ys.current){var t=he;try{setCurrentFiber(e),error("It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);")}finally{t?setCurrentFiber(e):resetCurrentFiber()}}}function warnIfNotCurrentlyActingEffectsInDEV(e){0!==(1&e.mode)&&!1===ns.current&&!1===Ys.current&&error("An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",getComponentName(e.type))}var Ks=function warnIfNotCurrentlyActingUpdatesInDEV(e){if(0===as&&!1===ns.current&&!1===Ys.current){var t=he;try{setCurrentFiber(e),error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",getComponentName(e.type))}finally{t?setCurrentFiber(e):resetCurrentFiber()}}},Gs=!1;// In tests, we want to enforce a mocked scheduler.
function computeThreadID(e,t){
// Interaction threads are unique per root and expiration time.
// NOTE: Intentionally unsound cast. All that matters is that it's a number
// and it represents a batch of work. Could make a helper function instead,
// but meh this is fine for now.
return 1e3*t+e.interactionThreadID}function markSpawnedWork(e){null===Ls?Ls=[e]:Ls.push(e)}function scheduleInteractions(e,t,n){if(n.size>0){var r=e.pendingInteractionMap,o=r.get(t);null!=o?n.forEach((function(e){o.has(e)||
// Update the pending async work count for previously unscheduled interaction.
e.__count++,o.add(e)})):(r.set(t,new Set(n)),// Update the pending async work count for the current interactions.
n.forEach((function(e){e.__count++})));var i=a.__subscriberRef.current;if(null!==i){var s=computeThreadID(e,t);i.onWorkScheduled(n,s)}}}function schedulePendingInteractions(e,t){scheduleInteractions(e,t,a.__interactionsRef.current)}function startWorkOnPendingInteractions(e,t){
// we can accurately attribute time spent working on it, And so that cascading
// work triggered during the render phase will be associated with it.
var n=new Set;if(e.pendingInteractionMap.forEach((function(e,r){includesSomeLane(t,r)&&e.forEach((function(e){return n.add(e)}))})),// Store the current set of interactions on the FiberRoot for a few reasons:
// We can re-use it in hot functions like performConcurrentWorkOnRoot()
// without having to recalculate it. We will also use it in commitWork() to
// pass to any Profiler onRender() hooks. This also provides DevTools with a
// way to access it when the onCommitRoot() hook is called.
e.memoizedInteractions=n,n.size>0){var r=a.__subscriberRef.current;if(null!==r){var o=computeThreadID(e,t);try{r.onWorkStarted(n,o)}catch(error){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(jo,(function(){throw error}))}}}}function finishPendingInteractions(e,t){var n,r=e.pendingLanes;try{if(null!==(n=a.__subscriberRef.current)&&e.memoizedInteractions.size>0){
// FIXME: More than one lane can finish in a single commit.
var o=computeThreadID(e,t);n.onWorkStopped(e.memoizedInteractions,o)}}catch(error){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(jo,(function(){throw error}))}finally{
// Clear completed interactions from the pending Map.
// Unless the render was suspended or cascading work was scheduled,
// In which case– leave pending interactions until the subsequent render.
var i=e.pendingInteractionMap;i.forEach((function(e,t){
// Only decrement the pending interaction count if we're done.
// If there's still work at the current priority,
// That indicates that we are waiting for suspense data.
includesSomeLane(r,t)||(i.delete(t),e.forEach((function(e){if(e.__count--,null!==n&&0===e.__count)try{n.onInteractionScheduledWorkCompleted(e)}catch(error){
// If the subscriber throws, rethrow it in a separate task
scheduleCallback(jo,(function(){throw error}))}})))}))}}// `act` testing API
function shouldForceFlushFallbacksInDEV(){
// Never force flush in production. This function should get stripped out.
return Xs>0}// so we can tell if any async act() calls try to run in parallel.
var Xs=0;function detachFiberAfterEffects(e){e.sibling=null,e.stateNode=null}var Js=null,Zs=null,eu=function setRefreshHandler(e){Js=e};// $FlowFixMe Flow gets confused by a WeakSet feature check below.
function resolveFunctionForHotReloading(e){if(null===Js)
// Hot reloading is disabled.
return e;var t=Js(e);return void 0===t?e:t.current;// Use the latest known implementation.
}function resolveClassForHotReloading(e){
// No implementation differences.
return resolveFunctionForHotReloading(e)}function resolveForwardRefForHotReloading(e){if(null===Js)
// Hot reloading is disabled.
return e;var t=Js(e);if(void 0===t){
// Check if we're dealing with a real forwardRef. Don't want to crash early.
if(null!==e&&void 0!==e&&"function"===typeof e.render){
// ForwardRef is special because its resolved .type is an object,
// but it's possible that we only have its inner render function in the map.
// If that inner render function is different, we'll build a new forwardRef type.
var n=resolveFunctionForHotReloading(e.render);if(e.render!==n){var r={$$typeof:z,render:n};return void 0!==e.displayName&&(r.displayName=e.displayName),r}}return e}// Use the latest known implementation.
return t.current}function isCompatibleFamilyForHotReloading(e,t){if(null===Js)
// Hot reloading is disabled.
return!1;var n=e.elementType,r=t.type,o=!1,a="object"===typeof r&&null!==r?r.$$typeof:null;switch(e.tag){case 1:"function"===typeof r&&(o=!0);break;case 0:("function"===typeof r||a===Q)&&(o=!0);break;case u:(a===z||a===Q)&&(o=!0);break;case d:case p:(a===q||a===Q)&&(
// TODO: if it was but can no longer be simple,
// we shouldn't set this.
o=!0);break;default:return!1}// Check if both types have a family and it's the same one.
if(o){
// Note: memo() and forwardRef() we'll compare outer rather than inner type.
// This means both of them need to be registered to preserve state.
// If we unwrapped and compared the inner types for wrappers instead,
// then we would risk falsely saying two separate memo(Foo)
// calls are equivalent because they wrap the same Foo function.
var i=Js(n);if(void 0!==i&&i===Js(r))return!0}return!1}function markFailedErrorBoundaryForHotReloading(e){null!==Js&&"function"===typeof WeakSet&&(null===Zs&&(Zs=new WeakSet),Zs.add(e))}var tu=function scheduleRefresh(e,t){if(null!==Js){var n=t.staleFamilies,r=t.updatedFamilies;flushPassiveEffects(),flushSync((function(){scheduleFibersWithFamiliesRecursively(e.current,r,n)}))}},nu=function scheduleRoot(e,t){e.context===ko&&(flushPassiveEffects(),flushSync((function(){updateContainer(t,e,null,null)})))};function scheduleFibersWithFamiliesRecursively(e,t,n){var r=e.alternate,o=e.child,a=e.sibling,i=e.tag,s=e.type,l=null;switch(i){case 0:case p:case 1:l=s;break;case u:l=s.render}if(null===Js)throw new Error("Expected resolveFamily to be set during hot reload.");var c=!1,d=!1;if(null!==l){var f=Js(l);void 0!==f&&(n.has(f)?d=!0:t.has(f)&&(1===i?d=!0:c=!0))}null!==Zs&&(Zs.has(e)||null!==r&&Zs.has(r))&&(d=!0),d&&(e._debugNeedsRemount=!0),(d||c)&&scheduleUpdateOnFiber(e,1,Rn),null===o||d||scheduleFibersWithFamiliesRecursively(o,t,n),null!==a&&scheduleFibersWithFamiliesRecursively(a,t,n)}var ru,ou=function findHostInstancesForRefresh(e,t){var n=new Set,r=new Set(t.map((function(e){return e.current})));return findHostInstancesForMatchingFibersRecursively(e.current,r,n),n};function findHostInstancesForMatchingFibersRecursively(e,t,n){var r=e.child,o=e.sibling,a=e.tag,i=e.type,s=null;switch(a){case 0:case p:case 1:s=i;break;case u:s=i.render}var l=!1;null!==s&&t.has(s)&&(l=!0),l?
// We have a match. This only drills down to the closest host components.
// There's no need to search deeper because for the purpose of giving
// visual feedback, "flashing" outermost parent rectangles is sufficient.
function findHostInstancesForFiberShallowly(e,t){if(function findChildHostInstancesForFiberShallowly(e,t){var n=e,r=!1;for(;;){if(5===n.tag)
// We got a match.
r=!0,t.add(n.stateNode);else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)return r;for(;null===n.sibling;){if(null===n.return||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}(e,t))return;// If we didn't find any host children, fallback to closest host parent.
var n=e;for(;;){switch(n.tag){case 5:return void t.add(n.stateNode);case 4:case 3:return void t.add(n.stateNode.containerInfo)}if(null===n.return)throw new Error("Expected to reach root first.");n=n.return}}(e,n):
// If there's no match, maybe there will be one further down in the child tree.
null!==r&&findHostInstancesForMatchingFibersRecursively(r,t,n),null!==o&&findHostInstancesForMatchingFibersRecursively(o,t,n)}ru=!1;try{var au=Object.preventExtensions({});
/* eslint-disable no-new */new Map([[au,null]]),new Set([au])}catch(Nu){
// TODO: Consider warning about bad polyfills
ru=!0}var iu=1;function FiberNode(e,t,n,r){
// Instance
this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,// Fiber
this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=r,// Effects
this.flags=0,this.nextEffect=null,this.firstEffect=null,this.lastEffect=null,this.lanes=0,this.childLanes=0,this.alternate=null,
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
this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,
// This isn't directly used but is handy for debugging internals:
this._debugID=iu++,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,ru||"function"!==typeof Object.preventExtensions||Object.preventExtensions(this)}// This is a constructor function, rather than a POJO constructor, still
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
var su,uu,lu=function createFiber(e,t,n,r){
// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new FiberNode(e,t,n,r)};function shouldConstruct$1(e){var t=e.prototype;return!(!t||!t.isReactComponent)}function createWorkInProgress(e,t){var n=e.alternate;null===n?(
// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
(n=lu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,
// DEV-only fields
n._debugID=e._debugID,n._debugSource=e._debugSource,n._debugOwner=e._debugOwner,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,// Needed because Blocks store data on type.
n.type=e.type,// We already have an alternate.
// Reset the effect tag.
n.flags=0,// The effect list is no longer valid.
n.nextEffect=null,n.firstEffect=null,n.lastEffect=null,
// We intentionally reset, rather than copy, actualDuration & actualStartTime.
// This prevents time from endlessly accumulating in new commits.
// This has the downside of resetting values for different priority renders,
// But works for yielding (the common case) and should support resuming.
n.actualDuration=0,n.actualStartTime=-1),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var r=e.dependencies;switch(n.dependencies=null===r?null:{lanes:r.lanes,firstContext:r.firstContext},// These will be overridden during the parent's reconciliation
n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case 2:case 0:case p:n.type=resolveFunctionForHotReloading(e.type);break;case 1:n.type=resolveClassForHotReloading(e.type);break;case u:n.type=resolveForwardRefForHotReloading(e.type)}return n}// Used to reuse a Fiber for a second pass.
function resetWorkInProgress(e,t){
// This resets the Fiber to what createFiber or createWorkInProgress would
// have set the values to before during the first pass. Ideally this wouldn't
// be necessary but unfortunately many code paths reads from the workInProgress
// when they should be reading from current and writing to workInProgress.
// We assume pendingProps, index, key, ref, return are still untouched to
// avoid doing another reconciliation.
// Reset the effect tag but keep any Placement tags, since that's something
// that child fiber is setting, not the reconciliation.
e.flags&=2,// The effect list is no longer valid.
e.nextEffect=null,e.firstEffect=null,e.lastEffect=null;var n=e.alternate;if(null===n)
// Reset to createFiber's initial values.
e.childLanes=0,e.lanes=t,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,
// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
e.selfBaseDuration=0,e.treeBaseDuration=0;else{
// Reset to the cloned values that createWorkInProgress would've.
e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,// Needed because Blocks store data on type.
e.type=n.type;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var r=n.dependencies;e.dependencies=null===r?null:{lanes:r.lanes,firstContext:r.firstContext},
// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration}return e}function createFiberFromTypeAndProps(e,// React$ElementType
t,n,r,o,a){var i=2,p=e;// The resolved type is set if we know what the final type will be. I.e. it's not lazy.
if("function"===typeof e)shouldConstruct$1(e)?(i=1,p=resolveClassForHotReloading(p)):p=resolveFunctionForHotReloading(p);else if("string"===typeof e)i=5;else e:switch(e){case A:return createFiberFromFragment(n.children,o,a,t);case G:i=8,o|=16;break;case M:i=8,o|=1;break;case W:return function createFiberFromProfiler(e,t,n,r){"string"!==typeof e.id&&error('Profiler must specify an "id" as a prop');var o=lu(l,e,r,8|t);// TODO: The Profiler fiber shouldn't have a type. It has a tag.
return o.elementType=W,o.type=W,o.lanes=n,o.stateNode={effectDuration:0,passiveEffectDuration:0},o}(n,o,a,t);case B:return function createFiberFromSuspense(e,t,n,r){var o=lu(c,e,r,t);// TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return o.type=B,o.elementType=B,o.lanes=n,o}(n,o,a,t);case $:return function createFiberFromSuspenseList(e,t,n,r){var o=lu(m,e,r,t);
// TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return o.type=$,o.elementType=$,o.lanes=n,o}(n,o,a,t);case X:return createFiberFromOffscreen(n,o,a,t);case J:return function createFiberFromLegacyHidden(e,t,n,r){var o=lu(y,e,r,t);// TODO: The LegacyHidden fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return o.type=J,o.elementType=J,o.lanes=n,o}(n,o,a,t);// eslint-disable-next-line no-fallthrough
default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:i=s;break e;case V:
// This is a consumer
i=9;break e;case z:i=u,p=resolveForwardRefForHotReloading(p);break e;case q:i=d;break e;case Q:i=16,p=null;break e;case Y:i=g;break e}var f="";(void 0===e||"object"===typeof e&&null!==e&&0===Object.keys(e).length)&&(f+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var h=r?getComponentName(r.type):null;throw h&&(f+="\n\nCheck the render method of `"+h+"`."),Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(null==e?e:typeof e)+"."+f)}var v=lu(i,n,t,o);return v.elementType=e,v.type=p,v.lanes=a,v._debugOwner=r,v}function createFiberFromElement(e,t,n){var r;r=e._owner;var o=createFiberFromTypeAndProps(e.type,e.key,e.props,r,t,n);return o._debugSource=e._source,o._debugOwner=e._owner,o}function createFiberFromFragment(e,t,n,r){var o=lu(7,e,r,t);return o.lanes=n,o}function createFiberFromOffscreen(e,t,n,r){var o=lu(v,e,r,t);// TODO: The OffscreenComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
return o.type=X,o.elementType=X,o.lanes=n,o}function createFiberFromText(e,t,n){var r=lu(6,e,null,t);return r.lanes=n,r}function createFiberFromPortal(e,t,n){var r=null!==e.children?e.children:[],o=lu(4,r,e.key,t);return o.lanes=n,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,
// Used by persistent updates
implementation:e.implementation},o}// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(e,t){return null===e&&(
// This Fiber's initial properties will always be overwritten.
// We only use a Fiber to ensure the same hidden class so DEV isn't slow.
e=lu(2,null,null,0)),// This is intentionally written as a list of all properties.
// We tried to use Object.assign() instead but this is called in
// the hottest path, and Object.assign() was too slow:
// https://github.com/facebook/react/issues/12502
// This code is DEV-only so size is not a concern.
e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.nextEffect=t.nextEffect,e.firstEffect=t.firstEffect,e.lastEffect=t.lastEffect,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugID=t._debugID,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function FiberRootNode(e,t,n){switch(this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=-1,this.context=null,this.pendingContext=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=createLaneMap(0),this.expirationTimes=createLaneMap(Rn),this.pendingLanes=0,this.suspendedLanes=0,this.pingedLanes=0,this.expiredLanes=0,this.mutableReadLanes=0,this.finishedLanes=0,this.entangledLanes=0,this.entanglements=createLaneMap(0),this.mutableSourceEagerHydrationData=null,this.interactionThreadID=a.unstable_getThreadID(),this.memoizedInteractions=new Set,this.pendingInteractionMap=new Map,t){case 1:this._debugRootType="createBlockingRoot()";break;case 2:this._debugRootType="createRoot()";break;case 0:this._debugRootType="createLegacyRoot()"}}function createFiberRoot(e,t,n,r){var o=new FiberRootNode(e,t,n),a=function createHostRootFiber(e){var t;return t=2===e?7:1===e?3:0,To&&(
// Always collect profile timings when DevTools are present.
// This enables DevTools to start capturing timing at any point–
// Without some nodes in the tree having empty base times.
t|=8),lu(3,null,null,t)}(t);// stateNode is any.
return o.current=a,a.stateNode=o,initializeUpdateQueue(a),o}// This ensures that the version used for server rendering matches the one
// that is eventually read during hydration.
// If they don't match there's a potential tear and a full deopt render is required.
function registerMutableSourceForHydration(e,t){var n=(0,t._getVersion)(t._source);// TODO Clear this data once all pending hydration work is finished.
// Retaining it forever may interfere with GC.
null==e.mutableSourceEagerHydrationData?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n)}function createPortal(e,t,// TODO: figure out the API for cross-renderer implementation.
n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{
// This tag allow us to uniquely identify this as a React Portal
$$typeof:U,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function updateContainer(e,t,n,r){!function onScheduleRoot(e,t){if(Ro&&"function"===typeof Ro.onScheduleFiberRoot)try{Ro.onScheduleFiberRoot(Eo,e,t)}catch(n){xo||(xo=!0,error("React instrumentation encountered an error: %s",n))}}(t,e);var a=t.current,i=requestEventTime();
// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
"undefined"!==typeof jest&&(!// TODO Before we release concurrent mode, revisit this and decide whether a mocked
// scheduler is the actual recommendation. The alternative could be a testing build,
// a new lib, or whatever; we dunno just yet. This message is for early adopters
// to get their tests right.
function warnIfUnmockedScheduler(e){!1===Gs&&void 0===o.unstable_flushAllWithoutAsserting&&(2&e.mode||4&e.mode)&&(Gs=!0,error("In Concurrent or Sync modes, the \"scheduler\" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: \njest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\nFor more info, visit https://reactjs.org/link/mock-scheduler"))}(a),warnIfNotScopedWithMatchingAct(a));var s=requestUpdateLane(a),u=function getContextForSubtree(e){if(!e)return ko;var t=get(e),n=findCurrentUnmaskedContext(t);if(1===t.tag){var r=t.type;if(isContextProvider(r))return processChildContext(t,r,n)}return n}(n);null===t.context?t.context=u:t.pendingContext=u,ge&&null!==he&&!su&&(su=!0,error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",getComponentName(he.type)||"Unknown"));var l=createUpdate(i,s);// Caution: React DevTools currently depends on this property
// being called "element".
return l.payload={element:e},null!==(r=void 0===r?null:r)&&("function"!==typeof r&&error("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),l.callback=r),enqueueUpdate(a,l),scheduleUpdateOnFiber(a,s,i),s}function getPublicRootInstance(e){var t=e.current;return t.child?(t.child.tag,t.child.stateNode):null}function markRetryLaneImpl(e,t){var n=e.memoizedState;null!==n&&null!==n.dehydrated&&(n.retryLane=function higherPriorityLane(e,t){
// This works because the bit ranges decrease in priority as you go left.
return 0!==e&&e<t?e:t}(n.retryLane,t))}// Increases the priority of thennables when they resolve within this boundary.
function markRetryLaneIfNotHydrated(e,t){markRetryLaneImpl(e,t);var n=e.alternate;n&&markRetryLaneImpl(n,t)}function findHostInstanceWithNoPortals(e){var t=function findCurrentHostFiberWithNoPortals(e){var t=findCurrentFiberUsingSlowPath(e);if(!t)return null;// Next we'll drill down this component to find the first HostComponent/Text.
for(var n=t;;){if(5===n.tag||6===n.tag)return n;if(n.child&&4!==n.tag)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}(e);return null===t?null:t.tag===h?t.stateNode.instance:t.stateNode}su=!1,uu={};var cu=function shouldSuspendImpl(e){return!1};var du,pu,fu,mu,hu,gu,vu,yu,bu=function copyWithDeleteImpl(e,t,n){var o=t[n],a=Array.isArray(e)?e.slice():r({},e);return n+1===t.length?(Array.isArray(a)?a.splice(o,1):delete a[o],a):(// $FlowFixMe number or string is fine here
a[o]=copyWithDeleteImpl(e[o],t,n+1),a)},ku=function copyWithDelete(e,t){return bu(e,t,0)},Cu=function copyWithRenameImpl(e,t,n,o){var a=t[o],i=Array.isArray(e)?e.slice():r({},e);o+1===t.length?(// $FlowFixMe number or string is fine here
i[n[o]]=i[a],Array.isArray(i)?i.splice(a,1):delete i[a]):
// $FlowFixMe number or string is fine here
i[a]=copyWithRenameImpl(// $FlowFixMe number or string is fine here
e[a],t,n,o+1);return i},wu=function copyWithRename(e,t,n){if(t.length===n.length){for(var r=0;r<n.length-1;r++)if(t[r]!==n[r])return void warn("copyWithRename() expects paths to be the same except for the deepest key");return Cu(e,t,n,0)}warn("copyWithRename() expects paths of the same length")},Su=function copyWithSetImpl(e,t,n,o){if(n>=t.length)return o;var a=t[n],i=Array.isArray(e)?e.slice():r({},e);// $FlowFixMe number or string is fine here
return i[a]=copyWithSetImpl(e[a],t,n+1,o),i},Eu=function copyWithSet(e,t,n){return Su(e,t,0,n)},Ru=function findHook(e,t){for(
// For now, the "id" of stateful hooks is just the stateful hook index.
// This may change in the future with e.g. nested hooks.
var n=e.memoizedState;null!==n&&t>0;)n=n.next,t--;return n};function findHostInstanceByFiber(e){var t=findCurrentHostFiber(e);return null===t?null:t.stateNode}function emptyFindFiberByHostInstance(e){return null}function getCurrentFiberForDevTools(){return he}function ReactDOMRoot(e,t){this._internalRoot=createRootImpl(e,2,t)}function ReactDOMBlockingRoot(e,t,n){this._internalRoot=createRootImpl(e,t,n)}function createRootImpl(e,t,n){
// Tag is either LegacyRoot or Concurrent Root
var r=null!=n&&!0===n.hydrate,o=(null!=n&&n.hydrationOptions,null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null),a=function createContainer(e,t,n,r){return createFiberRoot(e,t,n)}(e,t,r);!function markContainerAsRoot(e,t){t[po]=e}(a.current,e);e.nodeType;if(listenToAllSupportedEvents(8===e.nodeType?e.parentNode:e),o)for(var i=0;i<o.length;i++){registerMutableSourceForHydration(a,o[i])}return a}function isValidContainer(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}// Support DevTools editable values for useState and useReducer.
du=function overrideHookState(e,t,n,o){var a=Ru(e,t);if(null!==a){var i=Eu(a.memoizedState,n,o);a.memoizedState=i,a.baseState=i,// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
e.memoizedProps=r({},e.memoizedProps),scheduleUpdateOnFiber(e,1,Rn)}},pu=function overrideHookStateDeletePath(e,t,n){var o=Ru(e,t);if(null!==o){var a=ku(o.memoizedState,n);o.memoizedState=a,o.baseState=a,// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
e.memoizedProps=r({},e.memoizedProps),scheduleUpdateOnFiber(e,1,Rn)}},fu=function overrideHookStateRenamePath(e,t,n,o){var a=Ru(e,t);if(null!==a){var i=wu(a.memoizedState,n,o);a.memoizedState=i,a.baseState=i,// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
e.memoizedProps=r({},e.memoizedProps),scheduleUpdateOnFiber(e,1,Rn)}},// Support DevTools props for function components, forwardRef, memo, host components, etc.
mu=function overrideProps(e,t,n){e.pendingProps=Eu(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),scheduleUpdateOnFiber(e,1,Rn)},hu=function overridePropsDeletePath(e,t){e.pendingProps=ku(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps),scheduleUpdateOnFiber(e,1,Rn)},gu=function overridePropsRenamePath(e,t,n){e.pendingProps=wu(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),scheduleUpdateOnFiber(e,1,Rn)},vu=function scheduleUpdate(e){scheduleUpdateOnFiber(e,1,Rn)},yu=function setSuspenseHandler(e){cu=e},ReactDOMRoot.prototype.render=ReactDOMBlockingRoot.prototype.render=function(e){var t=this._internalRoot;"function"===typeof arguments[1]&&error("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var n=t.containerInfo;if(8!==n.nodeType){var r=findHostInstanceWithNoPortals(t.current);r&&r.parentNode!==n&&error("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}updateContainer(e,t,null,null)},ReactDOMRoot.prototype.unmount=ReactDOMBlockingRoot.prototype.unmount=function(){"function"===typeof arguments[0]&&error("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot,t=e.containerInfo;updateContainer(null,e,null,(function(){unmarkContainerAsRoot(t)}))};var xu,Tu=i.ReactCurrentOwner,Pu=!1;function getReactRootElementInContainer(e){return e?9===e.nodeType?e.documentElement:e.firstChild:null}function legacyCreateRootFromDOMContainer(e,t){var n=t||function shouldHydrateDueToLegacyHeuristic(e){var t=getReactRootElementInContainer(e);return!(!t||1!==t.nodeType||!t.hasAttribute(x))}(e);// First clear any existing content.
if(!n)for(var r,o=!1;r=e.lastChild;)!o&&1===r.nodeType&&r.hasAttribute(x)&&(o=!0,error("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")),e.removeChild(r);return!n||t||Pu||(Pu=!0,warn("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")),function createLegacyRoot(e,t){return new ReactDOMBlockingRoot(e,0,t)}(e,n?{hydrate:!0}:void 0)}function legacyRenderSubtreeIntoContainer(e,t,n,r,o){xu(n),function warnOnInvalidCallback$1(e,t){null!==e&&"function"!==typeof e&&error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)}(void 0===o?null:o,"render");// TODO: Without `any` type, Flow says "Property cannot be accessed on any
// member of intersection type." Whyyyyyy.
var a,i=n._reactRootContainer;if(i){if(a=i._internalRoot,"function"===typeof o){var s=o;o=function callback(){var e=getPublicRootInstance(a);s.call(e)}}// Update
updateContainer(t,a,e,o)}else{if(
// Initial mount
i=n._reactRootContainer=legacyCreateRootFromDOMContainer(n,r),a=i._internalRoot,"function"===typeof o){var u=o;o=function callback(){var e=getPublicRootInstance(a);u.call(e)}}// Initial mount should not be batched.
unbatchedUpdates((function(){updateContainer(t,a,e,o)}))}return getPublicRootInstance(a)}xu=function topLevelUpdateWarnings(e){if(e._reactRootContainer&&8!==e.nodeType){var t=findHostInstanceWithNoPortals(e._reactRootContainer._internalRoot.current);t&&t.parentNode!==e&&error("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=getReactRootElementInContainer(e);!(!r||!getInstanceFromNode(r))&&!n&&error("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),1===e.nodeType&&e.tagName&&"BODY"===e.tagName.toUpperCase()&&error("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")},function setAttemptUserBlockingHydration(e){_t=e}((function attemptUserBlockingHydration$1(e){if(e.tag===c){scheduleUpdateOnFiber(e,4,requestEventTime()),markRetryLaneIfNotHydrated(e,4)}})),function setAttemptContinuousHydration(e){Ft=e}((function attemptContinuousHydration$1(e){if(e.tag===c){var t=requestEventTime(),n=kn;scheduleUpdateOnFiber(e,n,t),markRetryLaneIfNotHydrated(e,n)}})),function setAttemptHydrationAtCurrentPriority(e){Dt=e}((function attemptHydrationAtCurrentPriority$1(e){if(e.tag===c){var t=requestEventTime(),n=requestUpdateLane(e);scheduleUpdateOnFiber(e,n,t),markRetryLaneIfNotHydrated(e,n)}})),function setAttemptHydrationAtPriority(e){Nt=e}((function runWithPriority$2(e,t){try{return t()}finally{}}));var Iu=!1;function createPortal$1(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!isValidContainer(t))throw Error("Target container is not a DOM element.");// TODO: pass ReactDOM portal implementation as third argument
// $FlowFixMe The Flow type is opaque but there's no way to actually create it.
return createPortal(e,t,null,n)}"function"===typeof Map&&// $FlowIssue Flow incorrectly thinks Map has no prototype
null!=Map.prototype&&"function"===typeof Map.prototype.forEach&&"function"===typeof Set&&// $FlowIssue Flow incorrectly thinks Set has no prototype
null!=Set.prototype&&"function"===typeof Set.prototype.clear&&"function"===typeof Set.prototype.forEach||error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),function setRestoreImplementation(e){dt=e}((function restoreControlledState$3(e,t,n){switch(t){case"input":return void restoreControlledState(e,n);case"textarea":return void function restoreControlledState$2(e,t){
// DOM component is still mounted; update
updateWrapper$1(e,t)}(e,n);case"select":return void function restoreControlledState$1(e,t){var n=e,r=t.value;null!=r&&updateOptions(n,!!t.multiple,r,!1)}(e,n)}})),function setBatchingImplementation(e,t,n,r){mt=e,ht=t,gt=n,vt=r}(batchedUpdates$1,(function discreteUpdates$1(e,t,n,r,o){var a=as;as|=4;try{return runWithPriority$1(Vo,e.bind(null,t,n,r,o))}finally{0===(as=a)&&(
// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer(),flushSyncCallbackQueue())}}),(function flushDiscreteUpdates(){
// TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
// However, `act` uses `batchedUpdates`, so there's no way to distinguish
// those two cases. Need to fix this before exposing flushDiscreteUpdates
// as a public API.
0===(49&as)?(!function flushPendingDiscreteUpdates(){if(null!==Fs){
// For each root with pending discrete updates, schedule a callback to
// immediately flush them.
var e=Fs;Fs=null,e.forEach((function(e){!function markDiscreteUpdatesExpired(e){e.expiredLanes|=24&e.pendingLanes}(e),ensureRootIsScheduled(e,Go())}))}// Now flush the immediate queue.
flushSyncCallbackQueue()}(),// If the discrete updates scheduled passive effects, flush them now so that
// they fire before the next serial event.
flushPassiveEffects()):0!==(as&rs)&&error("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.")}),(function batchedEventUpdates$1(e,t){var n=as;as|=

2;try{return e(t)}finally{0===(as=n)&&(
// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer(),flushSyncCallbackQueue())}}));var _u={
// Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
// This is an array for better minification.
Events:[getInstanceFromNode,getNodeFromInstance,getFiberCurrentPropsFromNode,enqueueStateRestore,restoreStateIfNeeded,flushPassiveEffects,// TODO: This is related to `act`, not events. Move to separate key?
Ys]},Fu=function injectIntoDevTools(e){var t=e.findFiberByHostInstance,n=i.ReactCurrentDispatcher;return function injectInternals(e){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
// No DevTools
return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)
// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return!0;if(!t.supportsFiber)// DevTools exists, even though it doesn't support Fiber.
return error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{Eo=t.inject(e),// We have successfully injected, so now it is safe to set up hooks.
Ro=t}catch(n){error("React instrumentation encountered an error: %s.",n)}// DevTools exists
return!0}({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:du,overrideHookStateDeletePath:pu,overrideHookStateRenamePath:fu,overrideProps:mu,overridePropsDeletePath:hu,overridePropsRenamePath:gu,setSuspenseHandler:yu,scheduleUpdate:vu,currentDispatcherRef:n,findHostInstanceByFiber:findHostInstanceByFiber,findFiberByHostInstance:t||emptyFindFiberByHostInstance,
// React Refresh
findHostInstancesForRefresh:ou,scheduleRefresh:tu,scheduleRoot:nu,setRefreshHandler:eu,
// Enables DevTools to append owner stacks to error messages in DEV mode.
getCurrentFiber:getCurrentFiberForDevTools})}({findFiberByHostInstance:getClosestInstanceFromNode,bundleType:1,version:Xo,rendererPackageName:"react-dom"});if(!Fu&&S&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){var Du=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
/^(https?|file):$/.test(Du)&&
// eslint-disable-next-line react-internal/no-production-logging
console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+("file:"===Du?"\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq":""),"font-weight:bold")}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_u,t.createPortal=createPortal$1,t.findDOMNode=function findDOMNode(e){var t=Tu.current;return null!==t&&null!==t.stateNode&&(t.stateNode._warnedAboutRefsInRender||error("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",getComponentName(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0),null==e?null:1===e.nodeType?e:function findHostInstanceWithWarning(e,t){var n=get(e);if(void 0===n)throw"function"===typeof e.render?Error("Unable to find node on an unmounted component."):Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(e));var r=findCurrentHostFiber(n);if(null===r)return null;if(1&r.mode){var o=getComponentName(n.type)||"Component";if(!uu[o]){uu[o]=!0;var a=he;try{setCurrentFiber(r),1&n.mode?error("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,o):error("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,o)}finally{
// Ideally this should reset to previous but this shouldn't be called in
// render and there's another warning for that anyway.
a?setCurrentFiber(a):resetCurrentFiber()}}}return r.stateNode}(e,"findDOMNode")},t.flushSync=flushSync,t.hydrate=function hydrate(e,t,n){if(!isValidContainer(t))throw Error("Target container is not a DOM element.");// TODO: throw or warn if we couldn't hydrate?
return isContainerMarkedAsRoot(t)&&void 0===t._reactRootContainer&&error("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?"),legacyRenderSubtreeIntoContainer(null,e,t,!0,n)},t.render=function render(e,t,n){if(!isValidContainer(t))throw Error("Target container is not a DOM element.");return isContainerMarkedAsRoot(t)&&void 0===t._reactRootContainer&&error("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?"),legacyRenderSubtreeIntoContainer(null,e,t,!1,n)},t.unmountComponentAtNode=function unmountComponentAtNode(e){if(!isValidContainer(e))throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");if(isContainerMarkedAsRoot(e)&&void 0===e._reactRootContainer&&error("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?"),e._reactRootContainer){var t=getReactRootElementInContainer(e);// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
return t&&!getInstanceFromNode(t)&&error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."),// Unmount should not be batched.
unbatchedUpdates((function(){legacyRenderSubtreeIntoContainer(null,null,e,!1,(function(){
// $FlowFixMe This should probably use `delete container._reactRootContainer`
e._reactRootContainer=null,unmarkContainerAsRoot(e)}))})),!0}var n=getReactRootElementInContainer(e),r=!(!n||!getInstanceFromNode(n)),o=1===e.nodeType&&isValidContainer(e.parentNode)&&!!e.parentNode._reactRootContainer;return r&&error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",o?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1},t.unstable_batchedUpdates=batchedUpdates$1,t.unstable_createPortal=function unstable_createPortal(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Iu||(Iu=!0,warn('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')),createPortal$1(e,t,n)},t.unstable_renderSubtreeIntoContainer=function renderSubtreeIntoContainer(e,t,n,r){return function unstable_renderSubtreeIntoContainer(e,t,n,r){if(!isValidContainer(n))throw Error("Target container is not a DOM element.");if(null==e||!function has(e){return void 0!==e._reactInternals}(e))throw Error("parentComponent must be a valid React Component");return legacyRenderSubtreeIntoContainer(e,t,n,!1,r)}(e,t,n,r)},t.version=Xo})()},
/***/"./node_modules/react-dom/index.js":
/***/function(e,t,n){e.exports=n("./node_modules/react-dom/cjs/react-dom.development.js")},
/***/"./node_modules/react/cjs/react-jsx-runtime.development.js":
/***/function(e,t,n){(function(){var e=n("./node_modules/react/index.js"),r=n("./node_modules/object-assign/index.js"),o=60103,a=60106;t.Fragment=60107;var i=60108,s=60114,u=60109,l=60110,c=60112,d=60113,p=60120,f=60115,m=60116,h=60121,g=60122,v=60117,y=60129,b=60131;if("function"===typeof Symbol&&Symbol.for){var k=Symbol.for;o=k("react.element"),a=k("react.portal"),t.Fragment=k("react.fragment"),i=k("react.strict_mode"),s=k("react.profiler"),u=k("react.provider"),l=k("react.context"),c=k("react.forward_ref"),d=k("react.suspense"),p=k("react.suspense_list"),f=k("react.memo"),m=k("react.lazy"),h=k("react.block"),g=k("react.server.block"),v=k("react.fundamental"),k("react.scope"),k("react.opaque.id"),y=k("react.debug_trace_mode"),k("react.offscreen"),b=k("react.legacy_hidden")}var C="function"===typeof Symbol&&Symbol.iterator;var w=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function error(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];printWarning("error",e,n)}function printWarning(e,t,n){var r=w.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(t+="%s",n=n.concat([r]));var o=n.map((function(e){return""+e}));// Careful: RN currently depends on this prefix
o.unshift("Warning: "+t),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[e],console,o)}// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
function getContextName(e){return e.displayName||"Context"}function getComponentName(e){if(null==e)
// Host root, text node or just invalid type.
return null;if("number"===typeof e.tag&&error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case t.Fragment:return"Fragment";case a:return"Portal";case s:return"Profiler";case i:return"StrictMode";case d:return"Suspense";case p:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case l:return getContextName(e)+".Consumer";case u:return getContextName(e._context)+".Provider";case c:return function getWrappedName(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(""!==r?n+"("+r+")":n)}(e,e.render,"ForwardRef");case f:return getComponentName(e.type);case h:return getComponentName(e._render);case m:var n=e,r=n._payload,o=n._init;try{return getComponentName(o(r))}catch(g){return null}}return null}// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var S,E,R,x,T,P,I,_=0;function disabledLog(){}disabledLog.__reactDisabledLog=!0;var F,D=w.ReactCurrentDispatcher;function describeBuiltInComponentFrame(e,t,n){if(void 0===F)
// Extract the VM specific prefix used by each line.
try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+F+e}var N,O=!1,L="function"===typeof WeakMap?WeakMap:Map;function describeNativeComponentFrame(e,t){
// If something asked for a stack inside a fake render, it should get ignored.
if(!e||O)return"";var n,o=N.get(e);if(void 0!==o)return o;O=!0;var a,i=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0,a=D.current,// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
D.current=null,function disableLogs(){if(0===_){
/* eslint-disable react-internal/no-production-logging */
S=console.log,E=console.info,R=console.warn,x=console.error,T=console.group,P=console.groupCollapsed,I=console.groupEnd;// https://github.com/facebook/react/issues/19099
var e={configurable:!0,enumerable:!0,value:disabledLog,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}_++}();try{
// This should throw.
if(t){
// Something should be setting the props in the constructor.
var s=function Fake(){throw Error()};// $FlowFixMe
if(Object.defineProperty(s.prototype,"props",{set:function set(){
// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"===typeof Reflect&&Reflect.construct){
// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(s,[])}catch(h){n=h}Reflect.construct(e,[],s)}else{try{s.call()}catch(h){n=h}e.call(s.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(g){
// This is inlined manually because closure doesn't do it for us.
if(g&&n&&"string"===typeof g.stack){for(
// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var u=g.stack.split("\n"),l=n.stack.split("\n"),c=u.length-1,d=l.length-1;c>=1&&d>=0&&u[c]!==l[d];)
// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
d--;for(;c>=1&&d>=0;c--,d--)
// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(u[c]!==l[d]){
// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==c||1!==d)do{// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(c--,--d<0||u[c]!==l[d]){
// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var p="\n"+u[c].replace(" at new "," at ");// Return the line we found.
return"function"===typeof e&&N.set(e,p),p}}while(c>=1&&d>=0);break}}}finally{O=!1,D.current=a,function reenableLogs(){if(0===--_){
/* eslint-disable react-internal/no-production-logging */
var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:r({},e,{value:S}),info:r({},e,{value:E}),warn:r({},e,{value:R}),error:r({},e,{value:x}),group:r({},e,{value:T}),groupCollapsed:r({},e,{value:P}),groupEnd:r({},e,{value:I})})}_<0&&error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=i}// Fallback to just using the name if we couldn't make it throw.
var f=e?e.displayName||e.name:"",m=f?describeBuiltInComponentFrame(f):"";return"function"===typeof e&&N.set(e,m),m}function describeFunctionComponentFrame(e,t,n){return describeNativeComponentFrame(e,!1)}function describeUnknownElementTypeFrameInDEV(e,t,n){if(null==e)return"";if("function"===typeof e)return describeNativeComponentFrame(e,function shouldConstruct(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"===typeof e)return describeBuiltInComponentFrame(e);switch(e){case d:return describeBuiltInComponentFrame("Suspense");case p:return describeBuiltInComponentFrame("SuspenseList")}if("object"===typeof e)switch(e.$$typeof){case c:return describeFunctionComponentFrame(e.render);case f:
// Memo may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(e.type,t,n);case h:return describeFunctionComponentFrame(e._render);case m:var r=e,o=r._payload,a=r._init;try{
// Lazy may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(a(o),t,n)}catch(i){}}return""}N=new L;var H={},U=w.ReactDebugCurrentFrame;function setCurrentlyValidatingElement(e){if(e){var t=e._owner,n=describeUnknownElementTypeFrameInDEV(e.type,e._source,t?t.type:null);U.setExtraStackFrame(n)}else U.setExtraStackFrame(null)}var A,M,W,j=w.ReactCurrentOwner,V=Object.prototype.hasOwnProperty,z={key:!0,ref:!0,__self:!0,__source:!0};W={};
/**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */
function jsxDEV(e,t,n,r,a){var i,s={},u=null,l=null;// Reserved names are extracted
// Remaining properties are added to a new props object
for(i in// Currently, key can be spread in as a prop. This causes a potential
// issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
// or <div key="Hi" {...props} /> ). We want to deprecate key spread,
// but as an intermediary step, we will use jsxDEV for everything except
// <div {...props} key="Hi" />, because we aren't currently able to tell if
// key is explicitly declared to be undefined or not.
void 0!==n&&(u=""+n),function hasValidKey(e){if(V.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(t)&&(u=""+t.key),function hasValidRef(e){if(V.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(t)&&(l=t.ref,function warnIfStringRefCannotBeAutoConverted(e,t){if("string"===typeof e.ref&&j.current&&t&&j.current.stateNode!==t){var n=getComponentName(j.current.type);W[n]||(error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',getComponentName(j.current.type),e.ref),W[n]=!0)}}(t,a)),t)V.call(t,i)&&!z.hasOwnProperty(i)&&(s[i]=t[i]);// Resolve default props
if(e&&e.defaultProps){var c=e.defaultProps;for(i in c)void 0===s[i]&&(s[i]=c[i])}if(u||l){var d="function"===typeof e?e.displayName||e.name||"Unknown":e;u&&function defineKeyPropWarningGetter(e,t){var n=function warnAboutAccessingKey(){A||(A=!0,error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}(s,d),l&&function defineRefPropWarningGetter(e,t){var n=function warnAboutAccessingRef(){M||(M=!0,error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}
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
     */(s,d)}return function ReactElement(e,t,n,r,a,i,s){var u={
// This tag allows us to uniquely identify this as a React Element
$$typeof:o,
// Built-in properties that belong on the element
type:e,key:t,ref:n,props:s,
// Record the component responsible for creating this element.
_owner:i,
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
_store:{}};// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
return Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),// self and source are DEV only properties.
Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u}(e,u,l,a,r,j.current,s)}var B,$=w.ReactCurrentOwner,q=w.ReactDebugCurrentFrame;function setCurrentlyValidatingElement$1(e){if(e){var t=e._owner,n=describeUnknownElementTypeFrameInDEV(e.type,e._source,t?t.type:null);q.setExtraStackFrame(n)}else q.setExtraStackFrame(null)}
/**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */
function isValidElement(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}function getDeclarationErrorAddendum(){if($.current){var e=getComponentName($.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}B=!1;
/**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */
var Q={};
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
function validateExplicitKey(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function getCurrentComponentErrorInfo(e){var t=getDeclarationErrorAddendum();if(!t){var n="string"===typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!Q[n]){Q[n]=!0;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==$.current&&(
// Give the component that originally created this child.
r=" It was passed a child from "+getComponentName(e._owner.type)+"."),setCurrentlyValidatingElement$1(e),error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,r),setCurrentlyValidatingElement$1(null)}}}
/**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */function validateChildKeys(e,t){if("object"===typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];isValidElement(r)&&validateExplicitKey(r,t)}else if(isValidElement(e))
// This element was passed in a valid location.
e._store&&(e._store.validated=!0);else if(e){var o=function getIteratorFn(e){if(null===e||"object"!==typeof e)return null;var t=C&&e[C]||e["@@iterator"];return"function"===typeof t?t:null}(e);if("function"===typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)isValidElement(a.value)&&validateExplicitKey(a.value,t)}}
/**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */function validatePropTypes(e){var t,n=e.type;if(null!==n&&void 0!==n&&"string"!==typeof n){if("function"===typeof n)t=n.propTypes;else{if("object"!==typeof n||n.$$typeof!==c&&// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
n.$$typeof!==f)return;t=n.propTypes}if(t){
// Intentionally inside to avoid triggering lazy initializers:
var r=getComponentName(n);!function checkPropTypes(e,t,n,r,o){
// $FlowFixMe This is okay but Flow doesn't know it.
var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var i in e)if(a(e,i)){var s=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!==typeof e[i]){var u=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}s=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){s=l}!s||s instanceof Error||(setCurrentlyValidatingElement(o),error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof s),setCurrentlyValidatingElement(null)),s instanceof Error&&!(s.message in H)&&(
// Only monitor this failure once because there tends to be a lot of the
// same error.
H[s.message]=!0,setCurrentlyValidatingElement(o),error("Failed %s type: %s",n,s.message),setCurrentlyValidatingElement(null))}}(t,e.props,"prop",r,e)}else if(void 0!==n.PropTypes&&!B){B=!0,error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",getComponentName(n)||"Unknown")}"function"!==typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}
/**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */function jsxWithValidation(e,n,r,a,k,C){var w=// Experimental Create Event Handle API.
function isValidElementType(e){return"string"===typeof e||"function"===typeof e||e===t.Fragment||e===s||e===y||e===i||e===d||e===p||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===u||e.$$typeof===l||e.$$typeof===c||e.$$typeof===v||e.$$typeof===h||e[0]===g);// Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
}(e);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!w){var S="";(void 0===e||"object"===typeof e&&null!==e&&0===Object.keys(e).length)&&(S+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E,R=function getSourceInfoErrorAddendum(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(k);S+=R||getDeclarationErrorAddendum(),null===e?E="null":Array.isArray(e)?E="array":void 0!==e&&e.$$typeof===o?(E="<"+(getComponentName(e.type)||"Unknown")+" />",S=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,S)}var x=jsxDEV(e,n,r,k,C);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==x)return x;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(w){var T=n.children;if(void 0!==T)if(a)if(Array.isArray(T)){for(var P=0;P<T.length;P++)validateChildKeys(T[P],e);Object.freeze&&Object.freeze(T)}else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else validateChildKeys(T,e)}return e===t.Fragment?function validateFragmentProps(e){for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){setCurrentlyValidatingElement$1(e),error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),setCurrentlyValidatingElement$1(null);break}}null!==e.ref&&(setCurrentlyValidatingElement$1(e),error("Invalid attribute `ref` supplied to `React.Fragment`."),setCurrentlyValidatingElement$1(null))}(x):validatePropTypes(x),x}// These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.
var Y=function jsxWithValidationDynamic(e,t,n){return jsxWithValidation(e,t,n,!1)},K=function jsxWithValidationStatic(e,t,n){return jsxWithValidation(e,t,n,!0)};// we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions
t.jsx=Y,t.jsxs=K})()},
/***/"./node_modules/react/cjs/react.development.js":
/***/function(e,t,n){(function(){var e=n("./node_modules/object-assign/index.js"),r=60103,o=60106;// TODO: this is special because it gets imported during build.
t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,s=60112;t.Suspense=60113;var u=60120,l=60115,c=60116,d=60121,p=60122,f=60117,m=60129,h=60131;if("function"===typeof Symbol&&Symbol.for){var g=Symbol.for;r=g("react.element"),o=g("react.portal"),t.Fragment=g("react.fragment"),t.StrictMode=g("react.strict_mode"),t.Profiler=g("react.profiler"),a=g("react.provider"),i=g("react.context"),s=g("react.forward_ref"),t.Suspense=g("react.suspense"),u=g("react.suspense_list"),l=g("react.memo"),c=g("react.lazy"),d=g("react.block"),p=g("react.server.block"),f=g("react.fundamental"),g("react.scope"),g("react.opaque.id"),m=g("react.debug_trace_mode"),g("react.offscreen"),h=g("react.legacy_hidden")}var v="function"===typeof Symbol&&Symbol.iterator;function getIteratorFn(e){if(null===e||"object"!==typeof e)return null;var t=v&&e[v]||e["@@iterator"];return"function"===typeof t?t:null}
/**
     * Keeps track of the current dispatcher.
     */var y={
/**
       * @internal
       * @type {ReactComponent}
       */
current:null},b={
/**
       * @internal
       * @type {ReactComponent}
       */
current:null},k={},C=null;
/**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */function setExtraStackFrame(e){C=e}k.setExtraStackFrame=function(e){C=e},// Stack implementation injected by the current renderer.
k.getCurrentStack=null,k.getStackAddendum=function(){var e="";// Add an extra top frame while an element is being validated
C&&(e+=C);// Delegate to the injected renderer-specific implementation
var t=k.getCurrentStack;return t&&(e+=t()||""),e};
/**
     * Used by act() to track whether you're inside an act() scope.
     */
var w={ReactCurrentDispatcher:y,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},
// Used by renderers to avoid bundling object-assign twice in UMD bundles:
assign:e};// by calls to these methods by a Babel plugin.
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function warn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];printWarning("warn",e,n)}function error(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];printWarning("error",e,n)}function printWarning(e,t,n){var r=w.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(t+="%s",n=n.concat([r]));var o=n.map((function(e){return""+e}));// Careful: RN currently depends on this prefix
o.unshift("Warning: "+t),// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[e],console,o)}w.ReactDebugCurrentFrame=k;var S={};function warnNoop(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;S[o]||(error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,r),S[o]=!0)}
/**
     * This is the abstract API for an update queue.
     */var E={
/**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
isMounted:function isMounted(e){return!1},
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
enqueueForceUpdate:function enqueueForceUpdate(e,t,n){warnNoop(e,"forceUpdate")},
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
enqueueReplaceState:function enqueueReplaceState(e,t,n,r){warnNoop(e,"replaceState")},
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
enqueueSetState:function enqueueSetState(e,t,n,r){warnNoop(e,"setState")}},R={};
/**
     * Base class helpers for the updating state of a component.
     */
function Component(e,t,n){this.props=e,this.context=t,// If a component has string refs, we will assign a different object later.
this.refs=R,// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||E}Object.freeze(R),Component.prototype.isReactComponent={},
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
Component.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},
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
Component.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var x={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},T=function defineDeprecationWarning(e,t){Object.defineProperty(Component.prototype,e,{get:function get(){warn("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var P in x)x.hasOwnProperty(P)&&T(P,x[P]);function ComponentDummy(){}
/**
     * Convenience component with default shallow equality check for sCU.
     */
function PureComponent(e,t,n){this.props=e,this.context=t,// If a component has string refs, we will assign a different object later.
this.refs=R,this.updater=n||E}ComponentDummy.prototype=Component.prototype;var I=PureComponent.prototype=new ComponentDummy;function getContextName(e){return e.displayName||"Context"}function getComponentName(e){if(null==e)
// Host root, text node or just invalid type.
return null;if("number"===typeof e.tag&&error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case t.Fragment:return"Fragment";case o:return"Portal";case t.Profiler:return"Profiler";case t.StrictMode:return"StrictMode";case t.Suspense:return"Suspense";case u:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case i:return getContextName(e)+".Consumer";case a:return getContextName(e._context)+".Provider";case s:return function getWrappedName(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(""!==r?n+"("+r+")":n)}(e,e.render,"ForwardRef");case l:return getComponentName(e.type);case d:return getComponentName(e._render);case c:var n=e,r=n._payload,p=n._init;try{return getComponentName(p(r))}catch(f){return null}}return null}I.constructor=PureComponent,// Avoid an extra prototype jump for these methods.
e(I,Component.prototype),I.isPureReactComponent=!0;var _,F,D,N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function hasValidRef(e){if(N.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function hasValidKey(e){if(N.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function defineKeyPropWarningGetter(e,t){var n=function warnAboutAccessingKey(){_||(_=!0,error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function defineRefPropWarningGetter(e,t){var n=function warnAboutAccessingRef(){F||(F=!0,error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}function warnIfStringRefCannotBeAutoConverted(e){if("string"===typeof e.ref&&b.current&&e.__self&&b.current.stateNode!==e.__self){var t=getComponentName(b.current.type);D[t]||(error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),D[t]=!0)}}
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
     */D={};var L=function ReactElement(e,t,n,o,a,i,s){var u={
// This tag allows us to uniquely identify this as a React Element
$$typeof:r,
// Built-in properties that belong on the element
type:e,key:t,ref:n,props:s,
// Record the component responsible for creating this element.
_owner:i,
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
_store:{}};// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
return Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),// self and source are DEV only properties.
Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};
/**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */function createElement(e,t,n){var r,o={},a=null,i=null,s=null,u=null;// Reserved names are extracted
if(null!=t)// Remaining properties are added to a new props object
for(r in hasValidRef(t)&&(i=t.ref,warnIfStringRefCannotBeAutoConverted(t)),hasValidKey(t)&&(a=""+t.key),s=void 0===t.__self?null:t.__self,u=void 0===t.__source?null:t.__source,t)N.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var l=arguments.length-2;if(1===l)o.children=n;else if(l>1){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];Object.freeze&&Object.freeze(c),o.children=c}// Resolve default props
if(e&&e.defaultProps){var p=e.defaultProps;for(r in p)void 0===o[r]&&(o[r]=p[r])}if(a||i){var f="function"===typeof e?e.displayName||e.name||"Unknown":e;a&&defineKeyPropWarningGetter(o,f),i&&defineRefPropWarningGetter(o,f)}return L(e,a,i,s,u,b.current,o)}
/**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */
function cloneElement(t,n,r){if(null===t||void 0===t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,a,i=e({},t.props),s=t.key,u=t.ref,l=t._self,c=t._source,d=t._owner;// Original props are copied
if(null!=n)for(o in hasValidRef(n)&&(
// Silently steal the ref from the parent.
u=n.ref,d=b.current),hasValidKey(n)&&(s=""+n.key),t.type&&t.type.defaultProps&&(a=t.type.defaultProps),n)N.call(n,o)&&!O.hasOwnProperty(o)&&(void 0===n[o]&&void 0!==a?
// Resolve default props
i[o]=a[o]:i[o]=n[o]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var p=arguments.length-2;if(1===p)i.children=r;else if(p>1){for(var f=Array(p),m=0;m<p;m++)f[m]=arguments[m+2];i.children=f}return L(t.type,s,u,l,c,d,i)}
/**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */function isValidElement(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}
/**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */
var H=!1,U=/\/+/g;function escapeUserProvidedKey(e){return e.replace(U,"$&/")}
/**
     * Generate a key string that identifies a element within a set.
     *
     * @param {*} element A element that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */function getElementKey(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return"object"===typeof e&&null!==e&&null!=e.key?
/**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */
function escape(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36);// Implicit key determined by the index in the set
}function mapIntoArray(e,t,n,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(
// All of the above are perceived as null.
e=null);var u,l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l){var c=e,d=i(c),p=""===a?"."+getElementKey(c,0):a;if(Array.isArray(d)){var f="";null!=p&&(f=escapeUserProvidedKey(p)+"/"),mapIntoArray(d,t,f,"",(function(e){return e}))}else null!=d&&(isValidElement(d)&&(d=function cloneAndReplaceKey(e,t){return L(e.type,t,e.ref,e._self,e._source,e._owner,e.props)}(d,// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
n+(// $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
!d.key||c&&c.key===d.key?"":// $FlowFixMe Flow incorrectly thinks existing element's key can be a number
escapeUserProvidedKey(""+d.key)+"/")+p)),t.push(d));return 1}var m=0,h=""===a?".":a+":";// Count of children found in the current subtree.
if(Array.isArray(e))for(var g=0;g<e.length;g++)m+=mapIntoArray(u=e[g],t,n,h+getElementKey(u,g),i);else{var v=getIteratorFn(e);if("function"===typeof v){var y=e;
// Warn about using Maps as children
v===y.entries&&(H||warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),H=!0);for(var b,k=v.call(y),C=0;!(b=k.next()).done;)m+=mapIntoArray(u=b.value,t,n,h+getElementKey(u,C++),i)}else if("object"===s){var w=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===w?"object with keys {"+Object.keys(e).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}}return m}
/**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */function mapChildren(e,t,n){if(null==e)return e;var r=[],o=0;return mapIntoArray(e,r,"","",(function(e){return t.call(n,e,o++)})),r}
/**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */function lazyInitializer(e){if(-1===e._status){var t=(0,e._result)(),n=e;n._status=0,n._result=t,t.then((function(t){if(0===e._status){var n=t.default;void 0===n&&error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t);// Transition to the next state.
var r=e;r._status=1,r._result=n}}),(function(t){if(0===e._status){
// Transition to the next state.
var n=e;n._status=2,n._result=t}}))}if(1===e._status)return e._result;throw e._result}// Experimental Create Event Handle API.
function isValidElementType(e){return"string"===typeof e||"function"===typeof e||(// Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
e===t.Fragment||e===t.Profiler||e===m||e===t.StrictMode||e===t.Suspense||e===u||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===c||e.$$typeof===l||e.$$typeof===a||e.$$typeof===i||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e[0]===p))}function resolveDispatcher(){var e=y.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return e}// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var A,M,W,j,V,z,B,$=0;function disabledLog(){}disabledLog.__reactDisabledLog=!0;var q,Q=w.ReactCurrentDispatcher;function describeBuiltInComponentFrame(e,t,n){if(void 0===q)
// Extract the VM specific prefix used by each line.
try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);q=r&&r[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+q+e}var Y,K=!1,G="function"===typeof WeakMap?WeakMap:Map;function describeNativeComponentFrame(t,n){
// If something asked for a stack inside a fake render, it should get ignored.
if(!t||K)return"";var r,o=Y.get(t);if(void 0!==o)return o;K=!0;var a,i=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0,a=Q.current,// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
Q.current=null,function disableLogs(){if(0===$){
/* eslint-disable react-internal/no-production-logging */
A=console.log,M=console.info,W=console.warn,j=console.error,V=console.group,z=console.groupCollapsed,B=console.groupEnd;// https://github.com/facebook/react/issues/19099
var e={configurable:!0,enumerable:!0,value:disabledLog,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}();try{
// This should throw.
if(n){
// Something should be setting the props in the constructor.
var s=function Fake(){throw Error()};// $FlowFixMe
if(Object.defineProperty(s.prototype,"props",{set:function set(){
// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"===typeof Reflect&&Reflect.construct){
// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(s,[])}catch(h){r=h}Reflect.construct(t,[],s)}else{try{s.call()}catch(h){r=h}t.call(s.prototype)}}else{try{throw Error()}catch(h){r=h}t()}}catch(g){
// This is inlined manually because closure doesn't do it for us.
if(g&&r&&"string"===typeof g.stack){for(
// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var u=g.stack.split("\n"),l=r.stack.split("\n"),c=u.length-1,d=l.length-1;c>=1&&d>=0&&u[c]!==l[d];)
// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
d--;for(;c>=1&&d>=0;c--,d--)
// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(u[c]!==l[d]){
// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==c||1!==d)do{// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(c--,--d<0||u[c]!==l[d]){
// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var p="\n"+u[c].replace(" at new "," at ");// Return the line we found.
return"function"===typeof t&&Y.set(t,p),p}}while(c>=1&&d>=0);break}}}finally{K=!1,Q.current=a,function reenableLogs(){if(0===--$){
/* eslint-disable react-internal/no-production-logging */
var t={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:e({},t,{value:A}),info:e({},t,{value:M}),warn:e({},t,{value:W}),error:e({},t,{value:j}),group:e({},t,{value:V}),groupCollapsed:e({},t,{value:z}),groupEnd:e({},t,{value:B})})}$<0&&error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=i}// Fallback to just using the name if we couldn't make it throw.
var f=t?t.displayName||t.name:"",m=f?describeBuiltInComponentFrame(f):"";return"function"===typeof t&&Y.set(t,m),m}function describeFunctionComponentFrame(e,t,n){return describeNativeComponentFrame(e,!1)}function describeUnknownElementTypeFrameInDEV(e,n,r){if(null==e)return"";if("function"===typeof e)return describeNativeComponentFrame(e,function shouldConstruct(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"===typeof e)return describeBuiltInComponentFrame(e);switch(e){case t.Suspense:return describeBuiltInComponentFrame("Suspense");case u:return describeBuiltInComponentFrame("SuspenseList")}if("object"===typeof e)switch(e.$$typeof){case s:return describeFunctionComponentFrame(e.render);case l:
// Memo may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(e.type,n,r);case d:return describeFunctionComponentFrame(e._render);case c:var o=e,a=o._payload,i=o._init;try{
// Lazy may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(i(a),n,r)}catch(p){}}return""}Y=new G;var X,J={},Z=w.ReactDebugCurrentFrame;function setCurrentlyValidatingElement(e){if(e){var t=e._owner,n=describeUnknownElementTypeFrameInDEV(e.type,e._source,t?t.type:null);Z.setExtraStackFrame(n)}else Z.setExtraStackFrame(null)}function setCurrentlyValidatingElement$1(e){if(e){var t=e._owner;setExtraStackFrame(describeUnknownElementTypeFrameInDEV(e.type,e._source,t?t.type:null))}else setExtraStackFrame(null)}function getDeclarationErrorAddendum(){if(b.current){var e=getComponentName(b.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function getSourceInfoErrorAddendumForProps(e){return null!==e&&void 0!==e?function getSourceInfoErrorAddendum(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(e.__source):""}
/**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */X=!1;var ee={};
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
function validateExplicitKey(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function getCurrentComponentErrorInfo(e){var t=getDeclarationErrorAddendum();if(!t){var n="string"===typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!ee[n]){ee[n]=!0;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==b.current&&(
// Give the component that originally created this child.
r=" It was passed a child from "+getComponentName(e._owner.type)+"."),setCurrentlyValidatingElement$1(e),error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,r),setCurrentlyValidatingElement$1(null)}}}
/**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */function validateChildKeys(e,t){if("object"===typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];isValidElement(r)&&validateExplicitKey(r,t)}else if(isValidElement(e))
// This element was passed in a valid location.
e._store&&(e._store.validated=!0);else if(e){var o=getIteratorFn(e);if("function"===typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)isValidElement(a.value)&&validateExplicitKey(a.value,t)}}
/**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */function validatePropTypes(e){var t,n=e.type;if(null!==n&&void 0!==n&&"string"!==typeof n){if("function"===typeof n)t=n.propTypes;else{if("object"!==typeof n||n.$$typeof!==s&&// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
n.$$typeof!==l)return;t=n.propTypes}if(t){
// Intentionally inside to avoid triggering lazy initializers:
var r=getComponentName(n);!function checkPropTypes(e,t,n,r,o){
// $FlowFixMe This is okay but Flow doesn't know it.
var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var i in e)if(a(e,i)){var s=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!==typeof e[i]){var u=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}s=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){s=l}!s||s instanceof Error||(setCurrentlyValidatingElement(o),error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof s),setCurrentlyValidatingElement(null)),s instanceof Error&&!(s.message in J)&&(
// Only monitor this failure once because there tends to be a lot of the
// same error.
J[s.message]=!0,setCurrentlyValidatingElement(o),error("Failed %s type: %s",n,s.message),setCurrentlyValidatingElement(null))}}(t,e.props,"prop",r,e)}else if(void 0!==n.PropTypes&&!X){X=!0,error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",getComponentName(n)||"Unknown")}"function"!==typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}
/**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */function validateFragmentProps(e){for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){setCurrentlyValidatingElement$1(e),error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),setCurrentlyValidatingElement$1(null);break}}null!==e.ref&&(setCurrentlyValidatingElement$1(e),error("Invalid attribute `ref` supplied to `React.Fragment`."),setCurrentlyValidatingElement$1(null))}function createElementWithValidation(e,n,o){var a=isValidElementType(e);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!a){var i="";(void 0===e||"object"===typeof e&&null!==e&&0===Object.keys(e).length)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var s,u=getSourceInfoErrorAddendumForProps(n);i+=u||getDeclarationErrorAddendum(),null===e?s="null":Array.isArray(e)?s="array":void 0!==e&&e.$$typeof===r?(s="<"+(getComponentName(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,i)}var l=createElement.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==l)return l;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(a)for(var c=2;c<arguments.length;c++)validateChildKeys(arguments[c],e);return e===t.Fragment?validateFragmentProps(l):validatePropTypes(l),l}var te=!1;try{var ne=Object.freeze({});
/* eslint-disable no-new */new Map([[ne,null]]),new Set([ne])}catch(se){}var re=createElementWithValidation,oe=function cloneElementWithValidation(e,t,n){for(var r=cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)validateChildKeys(arguments[o],r.type);return validatePropTypes(r),r},ae=function createFactoryWithValidation(e){var t=createElementWithValidation.bind(null,e);return t.type=e,te||(te=!0,warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),// Legacy hook: remove it
Object.defineProperty(t,"type",{enumerable:!1,get:function get(){return warn("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ie={map:mapChildren,forEach:
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
     */
function forEachChildren(e,t,n){mapChildren(e,(function(){t.apply(this,arguments);// Don't return anything.
}),n)}
/**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */,count:function countChildren(e){var t=0;return mapChildren(e,(function(){t++;// Don't return anything
})),t},toArray:function toArray(e){return mapChildren(e,(function(e){return e}))||[]}
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
     */,only:function onlyChild(e){if(!isValidElement(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=ie,t.Component=Component,t.PureComponent=PureComponent,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w,t.cloneElement=oe,t.createContext=function createContext(e,t){void 0===t?t=null:null!==t&&"function"!==typeof t&&error("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var n={$$typeof:i,_calculateChangedBits:t,
// As a workaround to support multiple concurrent renderers, we categorize
// some renderers as primary and others as secondary. We only expect
// there to be two concurrent renderers at most: React Native (primary) and
// Fabric (secondary); React DOM (primary) and React ART (secondary).
// Secondary renderers store their context values on separate fields.
_currentValue:e,_currentValue2:e,
// Used to track how many concurrent renderers this context currently
// supports within in a single renderer. Such as parallel server rendering.
_threadCount:0,
// These are circular
Provider:null,Consumer:null};n.Provider={$$typeof:a,_context:n};var r=!1,o=!1,s=!1,u={$$typeof:i,_context:n,_calculateChangedBits:n._calculateChangedBits};// $FlowFixMe: Flow complains about not setting a value, which is intentional here
return Object.defineProperties(u,{Provider:{get:function get(){return o||(o=!0,error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),n.Provider},set:function set(e){n.Provider=e}},_currentValue:{get:function get(){return n._currentValue},set:function set(e){n._currentValue=e}},_currentValue2:{get:function get(){return n._currentValue2},set:function set(e){n._currentValue2=e}},_threadCount:{get:function get(){return n._threadCount},set:function set(e){n._threadCount=e}},Consumer:{get:function get(){return r||(r=!0,error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),n.Consumer}},displayName:{get:function get(){return n.displayName},set:function set(e){s||(warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),s=!0)}}}),// $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
n.Consumer=u,n._currentRenderer=null,n._currentRenderer2=null,n},t.createElement=re,t.createFactory=ae,t.createRef=// an immutable object with a single mutable value
function createRef(){var e={current:null};return Object.seal(e),e},t.forwardRef=function forwardRef(e){null!=e&&e.$$typeof===l?error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!==typeof e?error("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&error("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,n={$$typeof:s,render:e};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function get(){return t},set:function set(n){t=n,null==e.displayName&&(e.displayName=n)}}),n}// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
,t.isValidElement=isValidElement,t.lazy=function lazy(e){var t,n,r={$$typeof:c,_payload:{
// We use these fields to store the result.
_status:-1,_result:e},_init:lazyInitializer};// $FlowFixMe
return Object.defineProperties(r,{defaultProps:{configurable:!0,get:function get(){return t},set:function set(e){error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,// Match production behavior more closely:
// $FlowFixMe
Object.defineProperty(r,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function get(){return n},set:function set(e){error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=e,// Match production behavior more closely:
// $FlowFixMe
Object.defineProperty(r,"propTypes",{enumerable:!0})}}}),r},t.memo=function memo(e,t){isValidElementType(e)||error("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var n,r={$$typeof:l,type:e,compare:void 0===t?null:t};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function get(){return n},set:function set(t){n=t,null==e.displayName&&(e.displayName=t)}}),r},t.useCallback=function useCallback(e,t){return resolveDispatcher().useCallback(e,t)},t.useContext=function useContext(e,t){var n=resolveDispatcher();// TODO: add a more generic warning for invalid values.
if(void 0!==t&&error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"===typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks":""),void 0!==e._context){var r=e._context;// Don't deduplicate because this legitimately causes bugs
// and nobody should be using this in existing code.
r.Consumer===e?error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return n.useContext(e,t)},t.useDebugValue=function useDebugValue(e,t){return resolveDispatcher().useDebugValue(e,t)},t.useEffect=function useEffect(e,t){return resolveDispatcher().useEffect(e,t)},t.useImperativeHandle=function useImperativeHandle(e,t,n){return resolveDispatcher().useImperativeHandle(e,t,n)},t.useLayoutEffect=function useLayoutEffect(e,t){return resolveDispatcher().useLayoutEffect(e,t)},t.useMemo=function useMemo(e,t){return resolveDispatcher().useMemo(e,t)},t.useReducer=function useReducer(e,t,n){return resolveDispatcher().useReducer(e,t,n)},t.useRef=function useRef(e){return resolveDispatcher().useRef(e)},t.useState=function useState(e){return resolveDispatcher().useState(e)},t.version="17.0.2"})()},
/***/"./node_modules/react/index.js":
/***/function(e,t,n){e.exports=n("./node_modules/react/cjs/react.development.js")},
/***/"./node_modules/react/jsx-runtime.js":
/***/function(e,t,n){e.exports=n("./node_modules/react/cjs/react-jsx-runtime.development.js")},
/***/"./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/***/function(e,t){(function(){var e=0,n=0;// Counters used to generate unique IDs.
// Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.
t.__interactionsRef=null,// Listener(s) to notify when interactions begin and end.
t.__subscriberRef=null,t.__interactionsRef={current:new Set},t.__subscriberRef={current:null};var r=null;function onInteractionTraced(e){var t=!1,n=null;if(r.forEach((function(r){try{r.onInteractionTraced(e)}catch(o){t||(t=!0,n=o)}})),t)throw n}function onInteractionScheduledWorkCompleted(e){var t=!1,n=null;if(r.forEach((function(r){try{r.onInteractionScheduledWorkCompleted(e)}catch(o){t||(t=!0,n=o)}})),t)throw n}function onWorkScheduled(e,t){var n=!1,o=null;if(r.forEach((function(r){try{r.onWorkScheduled(e,t)}catch(a){n||(n=!0,o=a)}})),n)throw o}function onWorkStarted(e,t){var n=!1,o=null;if(r.forEach((function(r){try{r.onWorkStarted(e,t)}catch(a){n||(n=!0,o=a)}})),n)throw o}function onWorkStopped(e,t){var n=!1,o=null;if(r.forEach((function(r){try{r.onWorkStopped(e,t)}catch(a){n||(n=!0,o=a)}})),n)throw o}function onWorkCanceled(e,t){var n=!1,o=null;if(r.forEach((function(r){try{r.onWorkCanceled(e,t)}catch(a){n||(n=!0,o=a)}})),n)throw o}r=new Set,t.unstable_clear=function unstable_clear(e){var n=t.__interactionsRef.current;t.__interactionsRef.current=new Set;try{return e()}finally{t.__interactionsRef.current=n}},t.unstable_getCurrent=function unstable_getCurrent(){return t.__interactionsRef.current},t.unstable_getThreadID=function unstable_getThreadID(){return++n},t.unstable_subscribe=function unstable_subscribe(e){r.add(e),1===r.size&&(t.__subscriberRef.current={onInteractionScheduledWorkCompleted:onInteractionScheduledWorkCompleted,onInteractionTraced:onInteractionTraced,onWorkCanceled:onWorkCanceled,onWorkScheduled:onWorkScheduled,onWorkStarted:onWorkStarted,onWorkStopped:onWorkStopped})},t.unstable_trace=function unstable_trace(n,r,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i={__count:1,id:e++,name:n,timestamp:r},s=t.__interactionsRef.current,u=new Set(s);u.add(i),t.__interactionsRef.current=u;var l,c=t.__subscriberRef.current;try{null!==c&&c.onInteractionTraced(i)}finally{try{null!==c&&c.onWorkStarted(u,a)}finally{try{l=o()}finally{t.__interactionsRef.current=s;try{null!==c&&c.onWorkStopped(u,a)}finally{i.__count--,// If no async work was scheduled for this interaction,
// Notify subscribers that it's completed.
null!==c&&0===i.__count&&c.onInteractionScheduledWorkCompleted(i)}}}}return l},t.unstable_unsubscribe=function unstable_unsubscribe(e){r.delete(e),0===r.size&&(t.__subscriberRef.current=null)},t.unstable_wrap=function unstable_wrap(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=t.__interactionsRef.current,o=t.__subscriberRef.current;null!==o&&o.onWorkScheduled(r,n),// Update the pending async work count for the current interactions.
// Update after calling subscribers in case of error.
r.forEach((function(e){e.__count++}));var a=!1;function wrapped(){var i=t.__interactionsRef.current;t.__interactionsRef.current=r,o=t.__subscriberRef.current;try{var s;try{null!==o&&o.onWorkStarted(r,n)}finally{try{s=e.apply(void 0,arguments)}finally{t.__interactionsRef.current=i,null!==o&&o.onWorkStopped(r,n)}}return s}finally{a||(
// We only expect a wrapped function to be executed once,
// But in the event that it's executed more than once–
// Only decrement the outstanding interaction counts once.
a=!0,// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
r.forEach((function(e){e.__count--,null!==o&&0===e.__count&&o.onInteractionScheduledWorkCompleted(e)})))}}return wrapped.cancel=function cancel(){o=t.__subscriberRef.current;try{null!==o&&o.onWorkCanceled(r,n)}finally{
// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
r.forEach((function(e){e.__count--,o&&0===e.__count&&o.onInteractionScheduledWorkCompleted(e)}))}},wrapped}})()},
/***/"./node_modules/scheduler/cjs/scheduler.development.js":
/***/function(e,t){(function(){var e,n,r,o;if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}if(// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
"undefined"===typeof window||// Check if MessageChannel is supported, too.
"function"!==typeof MessageChannel){
// If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
// fallback to a naive implementation.
var u=null,l=null,c=function _flushCallback(){if(null!==u)try{var e=t.unstable_now();u(!0,e),u=null}catch(n){throw setTimeout(_flushCallback,0),n}};e=function requestHostCallback(t){null!==u?
// Protect against re-entrancy.
setTimeout(e,0,t):(u=t,setTimeout(c,0))},n=function requestHostTimeout(e,t){l=setTimeout(e,t)},r=function cancelHostTimeout(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},o=t.unstable_forceFrameRate=function(){}}else{
// Capture local references to native APIs, in case a polyfill overrides them.
var d=window.setTimeout,p=window.clearTimeout;if("undefined"!==typeof console){
// TODO: Scheduler no longer requires these methods to be polyfilled. But
// maybe we want to continue warning if they don't exist, to preserve the
// option to rely on it in the future?
var f=window.requestAnimationFrame,m=window.cancelAnimationFrame;"function"!==typeof f&&
// Using console['error'] to evade Babel and ESLint
console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof m&&
// Using console['error'] to evade Babel and ESLint
console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var h=!1,g=null,v=-1,y=5,b=0;
// `isInputPending` is not available. Since we have no way of knowing if
// there's pending input, always yield at the end of the frame.
t.unstable_shouldYield=function(){return t.unstable_now()>=b},// Since we yield every frame regardless, `requestPaint` has no effect.
o=function requestPaint(){},t.unstable_forceFrameRate=function(e){e<0||e>125?
// Using console['error'] to evade Babel and ESLint
console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=e>0?Math.floor(1e3/e):5};var k=new MessageChannel,C=k.port2;k.port1.onmessage=function performWorkUntilDeadline(){if(null!==g){var e=t.unstable_now();// Yield after `yieldInterval` ms, regardless of where we are in the vsync
// cycle. This means there's always time remaining at the beginning of
// the message event.
b=e+y;try{g(!0,e)?
// If there's more work, schedule the next message event at the end
// of the preceding one.
C.postMessage(null):(h=!1,g=null)}catch(n){
// If a scheduler task throws, exit the current browser task so the
// error can be observed.
throw C.postMessage(null),n}}else h=!1;// Yielding to the browser will give it a chance to paint, so we can
},e=function _requestHostCallback(e){g=e,h||(h=!0,C.postMessage(null))},n=function requestHostTimeout(e,n){v=d((function(){e(t.unstable_now())}),n)},r=function cancelHostTimeout(){p(v),v=-1}}function push(e,t){var n=e.length;e.push(t),function siftUp(e,t,n){var r=n;for(;;){var o=r-1>>>1,a=e[o];if(!(void 0!==a&&compare(a,t)>0))
// The parent is smaller. Exit.
return;
// The parent is larger. Swap positions.
e[o]=t,e[r]=a,r=o}}(e,t,n)}function peek(e){var t=e[0];return void 0===t?null:t}function pop(e){var t=e[0];if(void 0!==t){var n=e.pop();return n!==t&&(e[0]=n,function siftDown(e,t,n){var r=n,o=e.length;for(;r<o;){var a=2*(r+1)-1,i=e[a],s=a+1,u=e[s];// If the left or right node is smaller, swap with the smaller of those.
if(void 0!==i&&compare(i,t)<0)void 0!==u&&compare(u,i)<0?(e[r]=u,e[s]=t,r=s):(e[r]=i,e[a]=t,r=a);else{if(!(void 0!==u&&compare(u,t)<0))
// Neither child is smaller. Exit.
return;e[r]=u,e[s]=t,r=s}}}(e,n,0)),t}return null}function compare(e,t){
// Compare sort index first, then task id.
var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}// TODO: Use symbols?
/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var w=[],S=[],E=1,R=null,x=3,T=!1,P=!1,I=!1;// Times out immediately
function advanceTimers(e){for(
// Check for tasks that are no longer delayed and add them to the queue.
var t=peek(S);null!==t;){if(null===t.callback)
// Timer was cancelled.
pop(S);else{if(!(t.startTime<=e))
// Remaining timers are pending.
return;
// Timer fired. Transfer to the task queue.
pop(S),t.sortIndex=t.expirationTime,push(w,t)}t=peek(S)}}function handleTimeout(t){if(I=!1,advanceTimers(t),!P)if(null!==peek(w))P=!0,e(flushWork);else{var r=peek(S);null!==r&&n(handleTimeout,r.startTime-t)}}function flushWork(e,t){P=!1,I&&(
// We scheduled a timeout but it's no longer needed. Cancel it.
I=!1,r()),T=!0;var n=x;try{
// No catch in prod code path.
return workLoop(e,t)}finally{R=null,x=n,T=!1}}function workLoop(e,r){var o=r;for(advanceTimers(o),R=peek(w);null!==R&&(!(R.expirationTime>o)||e&&!t.unstable_shouldYield());){var a=R.callback;if("function"===typeof a){R.callback=null,x=R.priorityLevel;var i=a(R.expirationTime<=o);o=t.unstable_now(),"function"===typeof i?R.callback=i:R===peek(w)&&pop(w),advanceTimers(o)}else pop(w);R=peek(w)}// Return whether there's additional work
if(null!==R)return!0;var s=peek(S);return null!==s&&n(handleTimeout,s.startTime-o),!1}var _=o;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function unstable_cancelCallback(e){
// remove from the queue because you can't remove arbitrary nodes from an
// array based heap, only the first one.)
e.callback=null},t.unstable_continueExecution=function unstable_continueExecution(){P||T||(P=!0,e(flushWork))},t.unstable_getCurrentPriorityLevel=function unstable_getCurrentPriorityLevel(){return x},t.unstable_getFirstCallbackNode=function unstable_getFirstCallbackNode(){return peek(w)},t.unstable_next=function unstable_next(e){var t;switch(x){case 1:case 2:case 3:
// Shift down to normal priority
t=3;break;default:
// Anything lower than normal priority should remain at the current level.
t=x}var n=x;x=t;try{return e()}finally{x=n}},t.unstable_pauseExecution=function unstable_pauseExecution(){},t.unstable_requestPaint=_,t.unstable_runWithPriority=function unstable_runWithPriority(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=x;x=e;try{return t()}finally{x=n}},t.unstable_scheduleCallback=function unstable_scheduleCallback(o,a,i){var s,u,l=t.unstable_now();if("object"===typeof i&&null!==i){var c=i.delay;s="number"===typeof c&&c>0?l+c:l}else s=l;switch(o){case 1:u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}var d=s+u,p={id:E++,callback:a,priorityLevel:o,startTime:s,expirationTime:d,sortIndex:-1};return s>l?(
// This is a delayed task.
p.sortIndex=s,push(S,p),null===peek(w)&&p===peek(S)&&(
// All tasks are delayed, and this is the task with the earliest delay.
I?
// Cancel an existing timeout.
r():I=!0,// Schedule a timeout.
n(handleTimeout,s-l))):(p.sortIndex=d,push(w,p),// wait until the next time we yield.
P||T||(P=!0,e(flushWork))),p},t.unstable_wrapCallback=function unstable_wrapCallback(e){var t=x;return function(){
// This is a fork of runWithPriority, inlined for performance.
var n=x;x=t;try{return e.apply(this,arguments)}finally{x=n}}}})()},
/***/"./node_modules/scheduler/index.js":
/***/function(e,t,n){e.exports=n("./node_modules/scheduler/cjs/scheduler.development.js")},
/***/"./node_modules/scheduler/tracing.js":
/***/function(e,t,n){e.exports=n("./node_modules/scheduler/cjs/scheduler-tracing.development.js")},
/***/"./src/components/App/App.css":
/***/function(e,t,n){n.r(t),
// extracted by mini-css-extract-plugin
/* harmony default export */t.default={}},
/***/"./src/components/Demo/Demo.css":
/***/function(e,t,n){n.r(t),
// extracted by mini-css-extract-plugin
/* harmony default export */t.default={}},
/***/"./src/index.css":
/***/function(e,t,n){n.r(t),
// extracted by mini-css-extract-plugin
/* harmony default export */t.default={}}
/******/},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function __webpack_require__(n){
/******/ // Check if module is in cache
/******/var r=t[n];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](o,o.exports,__webpack_require__),o.exports;
/******/}
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=e,
/******/ // define getter functions for harmony exports
/******/__webpack_require__.d=function(e,t){
/******/for(var n in t)
/******/__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/__webpack_require__.f={},
/******/ // This file contains only the entry chunk.
/******/ // The chunk loading function for additional chunks
/******/__webpack_require__.e=function(e){
/******/return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,n){
/******/
/******/return __webpack_require__.f[n](e,t),t;
/******/}),[]));
/******/},
/******/ // This function allow to reference async chunks
/******/__webpack_require__.u=function(e){
/******/ // return url for filenames based on template
/******/return"static/js/"+e+".d4fd698b.chunk.js";
/******/},
/******/ // This function allow to reference async chunks
/******/__webpack_require__.miniCssF=function(e){
/******/},
/******/__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/******/,function(){
/******/var e={},t="example:";
/******/
/******/ // loadScript function to load a script via script tag
/******/__webpack_require__.l=function(n,r,o,a){
/******/if(e[n])e[n].push(r);else{
/******/var i,s;
/******/if(void 0!==o)
/******/for(
/******/var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){
/******/var c=u[l];
/******/if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+o){i=c;break}
/******/}
/******/
/******/i||(
/******/s=!0,
/******/
/******/(
/******/i=document.createElement("script")).charset="utf-8",
/******/i.timeout=120,
/******/__webpack_require__.nc&&
/******/i.setAttribute("nonce",__webpack_require__.nc)
/******/,i.setAttribute("data-webpack",t+o),
/******/i.src=n)
/******/,e[n]=[r];
/******/var onScriptComplete=function(t,r){
/******/ // avoid mem leaks in IE.
/******/i.onerror=i.onload=null,
/******/clearTimeout(d);
/******/var o=e[n];
/******/
/******/if(delete e[n],
/******/i.parentNode&&i.parentNode.removeChild(i),
/******/o&&o.forEach((function(e){return e(r)})),t)return t(r);
/******/}
/******/,d=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:i}),12e4);
/******/
/******/i.onerror=onScriptComplete.bind(null,i.onerror),
/******/i.onload=onScriptComplete.bind(null,i.onload),
/******/s&&document.head.appendChild(i)}}}(),
/******/ // define __esModule on exports
/******/__webpack_require__.r=function(e){
/******/"undefined"!==typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/__webpack_require__.p="/state/",function(){
/******/ // no baseURI
/******/
/******/ // object to store loaded and loading chunks
/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/var e={
/******/main:0
/******/};
/******/
/******/__webpack_require__.f.j=function(t,n){
/******/ // JSONP chunk loading for javascript
/******/var r=__webpack_require__.o(e,t)?e[t]:void 0;
/******/if(0!==r)// 0 means "already installed".
/******/
/******/ // a Promise means "currently loading".
/******/if(r)
/******/n.push(r[2]);
/******/else{// all chunks have JS
/******/ // setup Promise in chunk cache
/******/var o=new Promise((function(n,o){r=e[t]=[n,o]}));
/******/n.push(r[2]=o);
/******/
/******/ // start chunk loading
/******/var a=__webpack_require__.p+__webpack_require__.u(t),i=new Error;
/******/ // create error before stack unwound to get useful stacktrace later
/******/
/******/__webpack_require__.l(a,(function(n){
/******/if(__webpack_require__.o(e,t)&&(
/******/
/******/0!==(r=e[t])&&(e[t]=void 0)
/******/,r)){
/******/var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;
/******/
/******/i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",
/******/i.name="ChunkLoadError",
/******/i.type=o,
/******/i.request=a,
/******/r[1](i)}
/******/
/******/}),"chunk-"+t,t)}
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
/******/var webpackJsonpCallback=function(t,n){
/******/var r,o,a=n[0],i=n[1],s=n[2],u=0;
/******/
/******/if(a.some((function(t){return 0!==e[t]}))){
/******/for(r in i)
/******/__webpack_require__.o(i,r)&&(
/******/__webpack_require__.m[r]=i[r])
/******/;
/******/if(s)s(__webpack_require__);
/******/}
/******/
/******/for(t&&t(n);u<a.length;u++)
/******/o=a[u],
/******/__webpack_require__.o(e,o)&&e[o]&&
/******/e[o][0]()
/******/,e[o]=0;
/******/
/******/}
/******/
/******/,t=self.webpackChunkexample=self.webpackChunkexample||[];
/******/t.forEach(webpackJsonpCallback.bind(null,0)),
/******/t.push=webpackJsonpCallback.bind(null,t.push.bind(t))}();
/******/
/************************************************************************/
var n={};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function(){__webpack_require__.r(n);
/* harmony import */__webpack_require__("./node_modules/react/index.js");
/* harmony import */var e=__webpack_require__("./node_modules/react-dom/index.js"),t=(__webpack_require__("./src/index.css"),__webpack_require__("./src/components/App/App.js")),r=__webpack_require__("./src/reportWebVitals.js"),o=__webpack_require__("./node_modules/react/jsx-runtime.js");e.hydrate((0,o.jsx)(t.default,{}),document.getElementById("root")),// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,r.default)(console.log)}()}();
//# sourceMappingURL=main.9d7b23cf.js.map