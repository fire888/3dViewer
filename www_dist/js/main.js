!function(){"use strict";function e(e){if(null===e||e===undefined)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
function t(e){return function(){return e}}function n(e,t){var n=e.constructor;Ga(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",t,t,n&&(n.displayName||n.name)||"ReactClass")}function o(e,t,n,o,r,a,i,s){if(ni(t),!e){var u;if(t===undefined)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,a,i,s],c=0;u=new Error(t.replace(/%s/g,function(){return l[c++]})),u.name="Invariant Violation"}// we don't care about invariant's own frame
throw u.framesToPop=1,u}}/**
	 * Base class helpers for the updating state of a component.
	 */
function r(e,t,n){this.props=e,this.context=t,this.refs=pi,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||li}/**
	 * Base class helpers for the updating state of a component.
	 */
function a(e,t,n){
// Duplicated from ReactComponent.
this.props=e,this.context=t,this.refs=pi,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||li}function i(){}function s(e){if(Bi.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==undefined}function u(e){if(Bi.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==undefined}function l(e,t){var n=function(){gi||(gi=!0,Li(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function c(e,t){var n=function(){yi||(yi=!0,Li(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}// Before Symbol spec.
/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
function p(e){var t=e&&(Yi&&e[Yi]||e[zi]);if("function"==typeof t)return t}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
function d(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
function f(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1))).replace(t,function(e){return n[e]})}/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
function h(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return e&&"object"==typeof e&&null!=e.key?ns.escape(e.key):t.toString(36)}/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
function m(e,t,n,o){var r=typeof e;if("undefined"!==r&&"boolean"!==r||(
// All of the above are perceived as null.
e=null),null===e||"string"===r||"number"===r||
// The following is inlined from ReactElement. This means we can optimize
// some checks. React Fiber also inlines this logic for similar purposes.
"object"===r&&e.$$typeof===Zi)
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
return n(o,e,""===t?rs+h(e,0):t),1;var a,i,s=0,u=""===t?rs:t+as;if(Array.isArray(e))for(var l=0;l<e.length;l++)a=e[l],i=u+h(a,l),s+=m(a,i,n,o);else{var c=es(e);if(c){var p,d=c.call(e);if(c!==e.entries)for(var f=0;!(p=d.next()).done;)a=p.value,i=u+h(a,f++),s+=m(a,i,n,o);else{var g="";if(Ji.current){var y=Ji.current.getName();y&&(g=" Check the render method of `"+y+"`.")}
// Iterator will provide entry [k,v] tuples rather than values.
for(os(is,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s",g),is=!0;!(p=d.next()).done;){var v=p.value;v&&(a=v[1],i=u+ns.escape(v[0])+as+h(a,0),s+=m(a,i,n,o))}}}else if("object"===r){var b="";if(b=" If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.",e._isReactElement&&(b=" It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),Ji.current){var _=Ji.current.getName();_&&(b+=" Check the render method of `"+_+"`.")}var C=String(e);ts(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===C?"object with keys {"+Object.keys(e).join(", ")+"}":C,b)}}return s}/**
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
	 */
function g(e,t,n){return null==e?0:m(e,"",t,n)}function y(e){return(""+e).replace(hs,"$&/")}/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
function v(e,t){this.func=e,this.context=t,this.count=0}function b(e,t,n){var o=e.func,r=e.context;o.call(r,t,e.count++)}/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
function _(e,t,n){if(null==e)return e;var o=v.getPooled(t,n);ps(e,b,o),v.release(o)}/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
function C(e,t,n,o){this.result=e,this.keyPrefix=t,this.func=n,this.context=o,this.count=0}function w(e,t,n){var o=e.result,r=e.keyPrefix,a=e.func,i=e.context,s=a.call(i,t,e.count++);Array.isArray(s)?E(s,o,n,cs.thatReturnsArgument):null!=s&&(ls.isValidElement(s)&&(s=ls.cloneAndReplaceKey(s,
// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
r+(!s.key||t&&t.key===s.key?"":y(s.key)+"/")+n)),o.push(s))}function E(e,t,n,o,r){var a="";null!=n&&(a=y(n)+"/");var i=C.getPooled(t,a,o,r);ps(e,w,i),C.release(i)}/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
function k(e,t,n){if(null==e)return e;var o=[];return E(e,o,null,t,n),o}function T(e,t,n){return null}/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
function S(e,t){return ps(e,T,null)}/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
function I(e){var t=[];return E(e,t,null,cs.thatReturnsArgument),t}function O(e){
// Based on isNative() from Lodash
var t=Function.prototype.toString,n=Object.prototype.hasOwnProperty,o=RegExp("^"+t.call(n).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");try{var r=t.call(e);return o.test(r)}catch(e){return!1}}function P(e){var t=gs(e);if(t){var n=t.childIDs;ys(e),n.forEach(P)}}function N(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")}function x(e){return null==e?"#empty":"string"==typeof e||"number"==typeof e?"#text":"string"==typeof e.type?e.type:e.type.displayName||e.type.name||"Unknown"}function M(e){var t,n=As.getDisplayName(e),o=As.getElement(e),r=As.getOwnerID(e);return r&&(t=As.getDisplayName(r)),Ss(o,"ReactComponentTreeHook: Missing React element for debugID %s when building stack",e),N(n,o&&o._source,t)}/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
function D(e,t,n,o,r,a){for(var i in e)if(e.hasOwnProperty(i)){var s;
// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
"function"!=typeof e[i]&&Ws(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",o||"React class",Bs[n],i),s=e[i](t,i,o,n,null,Hs)}catch(e){s=e}if(Vs(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",Bs[n],i,typeof s),s instanceof Error&&!(s.message in qs)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
qs[s.message]=!0;var u="";Ls||(Ls=Us),null!==a?u=Ls.getStackAddendumByID(a):null!==r&&(u=Ls.getCurrentStackAddendum(r)),Vs(!1,"Failed %s type: %s%s",n,s.message,u)}}}function R(){if(zs.current){var e=zs.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function A(e){if(null!==e&&e!==undefined&&e.__source!==undefined){var t=e.__source;return" Check your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}function U(e){var t=R();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t=" Check the top-level render call using <"+n+">.")}return t}/**
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
function j(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=eu.uniqueKey||(eu.uniqueKey={}),o=U(t);if(!n[o]){n[o]=!0;
// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==zs.current&&(
// Give the component that originally created this child.
r=" It was passed a child from "+e._owner.getName()+"."),Js(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',o,r,Ks.getCurrentStackAddendum(e))}}}/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
function L(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n];Gs.isValidElement(o)&&j(o,t)}else if(Gs.isValidElement(e))
// This element was passed in a valid location.
e._store&&(e._store.validated=!0);else if(e){var r=Qs(e);
// Entry iterators provide implicit keys.
if(r&&r!==e.entries)for(var a,i=r.call(e);!(a=i.next()).done;)Gs.isValidElement(a.value)&&j(a.value,t)}}/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
function F(e){var t=e.type;if("function"==typeof t){var n=t.displayName||t.name;t.propTypes&&Xs(t.propTypes,e.props,"prop",n,e,null),"function"==typeof t.getDefaultProps&&Js(t.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}/**
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
function B(e,t,n,o,r){for(var a in e)if(e.hasOwnProperty(a)){var i;
// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[a]){var s=Error((o||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw s.name="Invariant Violation",s}i=e[a](t,a,o,n,null,uu)}catch(e){i=e}if(!i||i instanceof Error||su((o||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in lu)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
lu[i.message]=!0;var u=r?r():"";su("Failed "+n+" type: "+i.message+(null!=u?u:""))}}}function H(){return null}
// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function W(e){return e}function V(e,t,n){function o(e,t,n){for(var o in t)t.hasOwnProperty(o)&&Su("function"==typeof t[o],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactClass",mu[n],o)}function r(e,t){var n=h.hasOwnProperty(t)?h[t]:null;
// Disallow overriding of base class methods unless explicitly allowed.
b.hasOwnProperty(t)&&Tu("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),
// Disallow defining methods more than once unless explicitly allowed.
e&&Tu("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}/**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
function a(e,n){if(!n){var o=typeof n;return void Su("object"===o&&null!==n,"%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",e.displayName||"ReactClass",null===n?null:o)}Tu("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),Tu(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,i=a.__reactAutoBindPairs;
// By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
n.hasOwnProperty(Iu)&&g.mixins(e,n.mixins);for(var s in n)if(n.hasOwnProperty(s)&&s!==Iu){var c=n[s],p=a.hasOwnProperty(s);if(r(p,s),g.hasOwnProperty(s))g[s](e,c);else{
// Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var d=h.hasOwnProperty(s),f="function"==typeof c,m=f&&!d&&!p&&!1!==n.autobind;if(m)i.push(s,c),a[s]=c;else if(p){var y=h[s];
// These cases should already be caught by validateMethodOverride.
Tu(d&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,s),
// For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
"DEFINE_MANY_MERGED"===y?a[s]=u(a[s],c):"DEFINE_MANY"===y&&(a[s]=l(a[s],c))}else a[s]=c,
// Add verbose displayName to the function, which helps when looking
// at profiling tools.
"function"==typeof c&&n.displayName&&(a[s].displayName=n.displayName+"_"+s)}}}function i(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in g;Tu(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var i=m.hasOwnProperty(n)?m[n]:null;return Tu("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=u(e[n],o))}e[n]=o}}}/**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
function s(e,t){Tu(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(Tu(e[n]===undefined,"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}/**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
function u(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return s(r,n),s(r,o),r}}/**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
function l(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}/**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
function c(e,t){var n=t.bind(e);n.__reactBoundContext=e,n.__reactBoundMethod=t,n.__reactBoundArguments=null;var o=e.constructor.displayName,r=n.bind;return n.bind=function(a){for(var i=arguments.length,s=Array(i>1?i-1:0),u=1;u<i;u++)s[u-1]=arguments[u];
// User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(a!==e&&null!==a)Su(!1,"bind(): React component methods may only be bound to the component instance. See %s",o);else if(!s.length)return Su(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",o),n;var l=r.apply(n,arguments);return l.__reactBoundContext=e,l.__reactBoundMethod=t,l.__reactBoundArguments=s,l},n}/**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
function p(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=c(e,r)}}/**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
function d(e){
// To keep our warnings more understandable, we'll use a little hack here to
// ensure that Constructor.name !== 'Constructor'. This makes sure we don't
// unnecessarily identify a class without displayName as 'Constructor'.
var t=W(function(e,o,r){Su(this instanceof t,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"),
// Wire up auto-binding
this.__reactAutoBindPairs.length&&p(this),this.props=e,this.context=o,this.refs=ku,this.updater=r||n,this.state=null;
// ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var a=this.getInitialState?this.getInitialState():null;
// We allow auto-mocks to proceed as if they're returning null.
a===undefined&&this.getInitialState._isMockFunction&&(
// This is probably bad practice. Consider warning here and
// deprecating this convenience.
a=null),Tu("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new _,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],f.forEach(a.bind(null,t)),a(t,y),a(t,e),a(t,v),
// Initialize the defaultProps property after all mixins have been merged.
t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),
// This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved={}),t.prototype.getInitialState&&(t.prototype.getInitialState.isReactClassApproved={}),Tu(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),Su(!t.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",e.displayName||"A component"),Su(!t.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",e.displayName||"A component"),Su(!t.prototype.UNSAFE_componentWillRecieveProps,"%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",e.displayName||"A component");
// Reduce time spent doing lookups by setting these on the prototype.
for(var o in h)t.prototype[o]||(t.prototype[o]=null);return t}/**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
var f=[],h={/**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
mixins:"DEFINE_MANY",/**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
statics:"DEFINE_MANY",/**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
propTypes:"DEFINE_MANY",/**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
contextTypes:"DEFINE_MANY",/**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
childContextTypes:"DEFINE_MANY",
// ==== Definition methods ====
/**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
getDefaultProps:"DEFINE_MANY_MERGED",/**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
getInitialState:"DEFINE_MANY_MERGED",/**
	     * @return {object}
	     * @optional
	     */
getChildContext:"DEFINE_MANY_MERGED",/**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
render:"DEFINE_ONCE",
// ==== Delegate methods ====
/**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
componentWillMount:"DEFINE_MANY",/**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
componentDidMount:"DEFINE_MANY",/**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
componentWillReceiveProps:"DEFINE_MANY",/**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
shouldComponentUpdate:"DEFINE_ONCE",/**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
componentWillUpdate:"DEFINE_MANY",/**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
componentDidUpdate:"DEFINE_MANY",/**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
componentWillUnmount:"DEFINE_MANY",/**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
UNSAFE_componentWillMount:"DEFINE_MANY",/**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
UNSAFE_componentWillReceiveProps:"DEFINE_MANY",/**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
UNSAFE_componentWillUpdate:"DEFINE_MANY",
// ==== Advanced methods ====
/**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
updateComponent:"OVERRIDE_BASE"},m={/**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
getDerivedStateFromProps:"DEFINE_MANY_MERGED"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){o(e,t,"childContext"),e.childContextTypes=Eu({},e.childContextTypes,t)},contextTypes:function(e,t){o(e,t,"context"),e.contextTypes=Eu({},e.contextTypes,t)},/**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){o(e,t,"prop"),e.propTypes=Eu({},e.propTypes,t)},statics:function(e,t){i(e,t)},autobind:function(){}},y={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},b={/**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},/**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
isMounted:function(){return Su(this.__didWarnIsMounted,"%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",this.constructor&&this.constructor.displayName||this.name||"Component"),this.__didWarnIsMounted=!0,!!this.__isMounted}},_=function(){};return Eu(_.prototype,e.prototype,b),d}/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
function q(e){return ju.isValidElement(e)||Lu(!1,"React.Children.only expected to receive a single React element child."),e}function Y(e,t){return(e&t)===t}/**
	 * Check if a given node should be cached.
	 */
function z(e,t){return 1===e.nodeType&&e.getAttribute(El)===String(t)||8===e.nodeType&&e.nodeValue===" react-text: "+t+" "||8===e.nodeType&&e.nodeValue===" react-empty: "+t+" "}/**
	 * Drill down (through composites and empty components) until we get a host or
	 * host text component.
	 *
	 * This is pretty polymorphic but unavoidable with the current structure we have
	 * for `_renderedChildren`.
	 */
function K(e){for(var t;t=e._renderedComponent;)e=t;return e}/**
	 * Populate `_hostNode` on the rendered host/text component with the given
	 * DOM node. The passed `inst` can be a composite.
	 */
function G(e,t){var n=K(e);n._hostNode=t,t[Tl]=n}function X(e){var t=e._hostNode;t&&(delete t[Tl],e._hostNode=null)}/**
	 * Populate `_hostNode` on each child of `inst`, assuming that the children
	 * match up with the DOM (element) children of `node`.
	 *
	 * We cache entire levels at once to avoid an n^2 problem where we access the
	 * children of a node sequentially and have to walk from the start to our target
	 * node every time.
	 *
	 * Since we update `_renderedChildren` and the actual DOM at (slightly)
	 * different times, we could race here and see a newer `_renderedChildren` than
	 * the DOM nodes we see. To avoid this, ReactMultiChild calls
	 * `prepareToManageChildren` before we change `_renderedChildren`, at which
	 * time the container's child nodes are always cached (until it unmounts).
	 */
function $(e,t){if(!(e._flags&kl.hasCachedChildNodes)){var n=e._renderedChildren,o=t.firstChild;e:for(var r in n)if(n.hasOwnProperty(r)){var a=n[r],i=K(a)._domID;if(0!==i){
// We assume the child nodes are in the same order as the child instances.
for(;null!==o;o=o.nextSibling)if(z(o,i)){G(a,o);continue e}
// We reached the end of the DOM children without finding an ID match.
wl(!1,"Unable to find element with ID %s.",i)}}e._flags|=kl.hasCachedChildNodes}}/**
	 * Given a DOM node, return the closest ReactDOMComponent or
	 * ReactDOMTextComponent instance ancestor.
	 */
function Q(e){if(e[Tl])return e[Tl];for(
// Walk up the tree until we find an ancestor whose instance we have cached.
var t=[];!e[Tl];){if(t.push(e),!e.parentNode)
// Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;e=e.parentNode}for(var n,o;e&&(o=e[Tl]);e=t.pop())n=o,t.length&&$(o,e);return n}/**
	 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
	 * instance, or null if the node was not rendered by this React.
	 */
function J(e){var t=Q(e);return null!=t&&t._hostNode===e?t:null}/**
	 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
	 * DOM node.
	 */
function Z(e){if(
// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
e._hostNode===undefined&&wl(!1,"getNodeFromInstance: Invalid argument."),e._hostNode)return e._hostNode;for(
// Walk up the tree until we find an ancestor whose DOM node we have cached.
var t=[];!e._hostNode;)t.push(e),e._hostParent||wl(!1,"React DOM tree root should always have a node reference."),e=e._hostParent;
// Now parents contains each ancestor that does *not* have a cached native
// node, and `inst` is the deepest ancestor that does.
for(;t.length;e=t.pop())$(e,e._hostNode);return e._hostNode}/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
function ee(){if(xl)for(var e in Ml){var t=Ml[e],n=xl.indexOf(e);if(n>-1||Nl(!1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",e),!Dl.plugins[n]){t.extractEvents||Nl(!1,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",e),Dl.plugins[n]=t;var o=t.eventTypes;for(var r in o)te(o[r],t,r)||Nl(!1,"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",r,e)}}}/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
function te(e,t,n){Dl.eventNameDispatchConfigs.hasOwnProperty(n)&&Nl(!1,"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",n),Dl.eventNameDispatchConfigs[n]=e;var o=e.phasedRegistrationNames;if(o){for(var r in o)if(o.hasOwnProperty(r)){var a=o[r];ne(a,t,n)}return!0}return!!e.registrationName&&(ne(e.registrationName,t,n),!0)}/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
function ne(e,t,n){Dl.registrationNameModules[e]&&Nl(!1,"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",e),Dl.registrationNameModules[e]=t,Dl.registrationNameDependencies[e]=t.eventTypes[n].dependencies;var o=e.toLowerCase();Dl.possibleRegistrationNames[o]=e,"onDoubleClick"===e&&(Dl.possibleRegistrationNames.ondblclick=e)}/**
	 * Call a function while guarding against errors that happens within it.
	 *
	 * @param {String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} a First argument
	 * @param {*} b Second argument
	 */
function oe(e,t,n){try{t(n)}catch(e){null===Al&&(Al=e)}}function re(e){return"topMouseUp"===e||"topTouchEnd"===e||"topTouchCancel"===e}function ae(e){return"topMouseMove"===e||"topTouchMove"===e}function ie(e){return"topMouseDown"===e||"topTouchStart"===e}/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {*} inst Internal component instance
	 */
function se(e,t,n,o){var r=e.type||"unknown-event";e.currentTarget=zl.getNodeFromInstance(o),t?Wl.invokeGuardedCallbackWithCatch(r,n,e):Wl.invokeGuardedCallback(r,n,e),e.currentTarget=null}/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
function ue(e,t){var n=e._dispatchListeners,o=e._dispatchInstances;if(Bl(e),Array.isArray(n))for(var r=0;r<n.length&&!e.isPropagationStopped();r++)
// Listeners and Instances are two parallel arrays that are always in sync.
se(e,t,n[r],o[r]);else n&&se(e,t,n,o);e._dispatchListeners=null,e._dispatchInstances=null}/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
function le(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Bl(e),Array.isArray(t)){for(var o=0;o<t.length&&!e.isPropagationStopped();o++)
// Listeners and Instances are two parallel arrays that are always in sync.
if(t[o](e,n[o]))return n[o]}else if(t&&t(e,n))return n;return null}/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
function ce(e){var t=le(e);return e._dispatchInstances=null,e._dispatchListeners=null,t}/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
function pe(e){Bl(e);var t=e._dispatchListeners,n=e._dispatchInstances;Array.isArray(t)&&Vl(!1,"executeDirectDispatch(...): Invalid `event`."),e.currentTarget=t?zl.getNodeFromInstance(n):null;var o=t?t(e):null;return e.currentTarget=null,e._dispatchListeners=null,e._dispatchInstances=null,o}/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */
function de(e){return!!e._dispatchListeners}/**
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
function fe(e,t){
// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
return null==t&&Gl(!1,"accumulateInto(...): Accumulated items must not be null or undefined."),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
function he(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}function me(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function ge(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":return!(!n.disabled||!me(t));default:return!1}}/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
function ye(e,t,n){var o=t.dispatchConfig.phasedRegistrationNames[n];return gc(e,o)}/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
function ve(e,t,n){mc(e,"Dispatching inst must not be null");var o=ye(e,n,t);o&&(n._dispatchListeners=fc(n._dispatchListeners,o),n._dispatchInstances=fc(n._dispatchInstances,e))}/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
function be(e){e&&e.dispatchConfig.phasedRegistrationNames&&dc.traverseTwoPhase(e._targetInst,ve,e)}/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
function _e(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst,n=t?dc.getParentInstance(t):null;dc.traverseTwoPhase(n,ve,e)}}/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
function Ce(e,t,n){if(n&&n.dispatchConfig.registrationName){var o=n.dispatchConfig.registrationName,r=gc(e,o);r&&(n._dispatchListeners=fc(n._dispatchListeners,r),n._dispatchInstances=fc(n._dispatchInstances,e))}}/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
function we(e){e&&e.dispatchConfig.registrationName&&Ce(e._targetInst,null,e)}function Ee(e){hc(e,be)}function ke(e){hc(e,_e)}function Te(e,t,n,o){dc.traverseEnterLeave(n,o,Ce,e,t)}function Se(e){hc(e,we)}/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
function Ie(){
// Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
return!Dc&&Mc.canUseDOM&&(Dc="textContent"in document.documentElement?"textContent":"innerText"),Dc}/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
function Oe(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}/**
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
	 */
function Pe(e,t,n,o){
// these have a getter/setter for warnings
delete this.nativeEvent,delete this.preventDefault,delete this.stopPropagation,this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var a in r)if(r.hasOwnProperty(a)){delete this[a];var i=r[a];i?this[a]=i(n):"target"===a?this.target=o:this[a]=n[a]}var s=null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue;return this.isDefaultPrevented=s?Hc.thatReturnsTrue:Hc.thatReturnsFalse,this.isPropagationStopped=Hc.thatReturnsFalse,this}/**
	  * Helper to nullify syntheticEvent instance properties when destructing
	  *
	  * @param {object} SyntheticEvent
	  * @param {String} propName
	  * @return {object} defineProperty object
	  */
function Ne(e,t){function n(e){return r(a?"setting the method":"setting the property","This is effectively a no-op"),e}function o(){return r(a?"accessing the method":"accessing the property",a?"This is a no-op function":"This is set to null"),t}function r(t,n){Wc(!1,"This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",t,e,n)}var a="function"==typeof t;return{configurable:!0,set:n,get:o}}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function xe(e,t,n,o){return Gc.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Me(e,t,n,o){return Qc.call(this,e,t,n,o)}/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
function De(e){
// ctrlKey && altKey is equivalent to AltGr, and is not a command.
return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
function Re(e){switch(e){case"topCompositionStart":return fp.compositionStart;case"topCompositionEnd":return fp.compositionEnd;case"topCompositionUpdate":return fp.compositionUpdate}}/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
function Ae(e,t){return"topKeyDown"===e&&t.keyCode===ip}/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
function Ue(e,t){switch(e){case"topKeyUp":
// Command keys insert or clear IME input.
return-1!==ap.indexOf(t.keyCode);case"topKeyDown":
// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return t.keyCode!==ip;case"topKeyPress":case"topMouseDown":case"topBlur":
// Events are not possible without cancelling IME.
return!0;default:return!1}}/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
function je(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}/**
	 * @return {?object} A SyntheticCompositionEvent.
	 */
function Le(e,t,n,o){var r,a;if(sp?r=Re(e):mp?Ue(e,n)&&(r=fp.compositionEnd):Ae(e,n)&&(r=fp.compositionStart),!r)return null;cp&&(
// The current composition is stored statically and must not be
// overwritten while composition continues.
mp||r!==fp.compositionStart?r===fp.compositionEnd&&mp&&(a=mp.getData()):mp=np.getPooled(o));var i=op.getPooled(r,t,n,o);if(a)
// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
i.data=a;else{var s=je(n);null!==s&&(i.data=s)}return ep.accumulateTwoPhaseDispatches(i),i}/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
function Fe(e,t){switch(e){case"topCompositionEnd":return je(t);case"topKeyPress":return t.which!==pp?null:(hp=!0,dp);case"topTextInput":
// Record the characters to be added to the DOM.
var n=t.data;
// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
return n===dp&&hp?null:n;default:
// For other native event types, do nothing.
return null}}/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
function Be(e,t){
// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(mp){if("topCompositionEnd"===e||!sp&&Ue(e,t)){var n=mp.getData();return np.release(mp),mp=null,n}return null}switch(e){case"topPaste":
// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case"topKeyPress":/**
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
return t.which&&!De(t)?String.fromCharCode(t.which):null;case"topCompositionEnd":return cp?null:t.data;default:return null}}/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @return {?object} A SyntheticInputEvent.
	 */
function He(e,t,n,o){var r;
// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!(r=lp?Fe(e,n):Be(e,n)))return null;var a=rp.getPooled(fp.beforeInput,t,n,o);return a.data=r,ep.accumulateTwoPhaseDispatches(a),a}function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid owner.
	 * @final
	 */
function Ve(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)}function qe(e,t,n){"function"==typeof e?e(t.getPublicInstance()):
// Legacy ref
Ip.addComponentAsRefTo(t,e,n)}function Ye(e,t,n){"function"==typeof e?e(null):
// Legacy ref
Ip.removeComponentAsRefFrom(t,e,n)}function ze(e,t,n,o,r,a,i,s){try{t.call(n,o,r,a,i,s)}catch(t){Jp(ed[e],"Exception thrown by hook while handling %s: %s",e,t+"\n"+t.stack),ed[e]=!0}}function Ke(e,t,n,o,r,a){for(var i=0;i<Zp.length;i++){var s=Zp[i],u=s[e];u&&ze(e,u,s,t,n,o,r,a)}}function Ge(){Xp.purgeUnmountedComponents(),Gp.clearHistory()}function Xe(e){return e.reduce(function(e,t){var n=Xp.getOwnerID(t),o=Xp.getParentID(t);return e[t]={displayName:Xp.getDisplayName(t),text:Xp.getText(t),updateCount:Xp.getUpdateCount(t),childIDs:Xp.getChildIDs(t),
// Text nodes don't have owners but this is close enough.
ownerID:n||o&&Xp.getOwnerID(o)||0,parentID:o},e},{})}function $e(){var e=id,t=ad,n=Gp.getHistory();if(0===rd)return id=0,ad=[],void Ge();if(t.length||n.length){var o=Xp.getRegisteredIDs();nd.push({duration:Qp()-e,measurements:t||[],operations:n||[],treeSnapshot:Xe(o)})}Ge(),id=Qp(),ad=[]}function Qe(e){arguments.length>1&&arguments[1]!==undefined&&arguments[1]&&0===e||e||Jp(!1,"ReactDebugTool: debugID may not be empty.")}function Je(e,t){0!==rd&&(cd&&!pd&&(Jp(!1,"There is an internal error in the React performance measurement code. Did not expect %s timer to start while %s timer is still in progress for %s instance.",t,cd||"no",e===sd?"the same":"another"),pd=!0),ud=Qp(),ld=0,sd=e,cd=t)}function Ze(e,t){0!==rd&&(cd===t||pd||(Jp(!1,"There is an internal error in the React performance measurement code. We did not expect %s timer to stop while %s timer is still in progress for %s instance. Please report this as a bug in React.",t,cd||"no",e===sd?"the same":"another"),pd=!0),td&&ad.push({timerType:t,instanceID:e,duration:Qp()-ud-ld}),ud=0,ld=0,sd=null,cd=null)}function et(){var e={startTime:ud,nestedFlushStartTime:Qp(),debugID:sd,timerType:cd};od.push(e),ud=0,ld=0,sd=null,cd=null}function tt(){var e=od.pop(),t=e.startTime,n=e.nestedFlushStartTime,o=e.debugID,r=e.timerType,a=Qp()-n;ud=t,ld+=a,sd=o,cd=r}function nt(e){if(!td||!fd)return!1;var t=Xp.getElement(e);return null!=t&&"object"==typeof t&&!("string"==typeof t.type)}function ot(e,t){if(nt(e)){var n=e+"::"+t;dd=Qp(),performance.mark(n)}}function rt(e,t){if(nt(e)){var n=e+"::"+t,o=Xp.getDisplayName(e)||"Unknown";if(Qp()-dd>.1){var r=o+" ["+t+"]";performance.measure(r,n)}performance.clearMarks(n),r&&performance.clearMeasures(r)}}/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
function at(){bd.attachRefs(this,this._currentElement)}function it(){zd.ReactReconcileTransaction&&Fd||Rd(!1,"ReactUpdates: must inject a reconcile transaction class and batching strategy")}function st(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=Pd.getPooled(),this.reconcileTransaction=zd.ReactReconcileTransaction.getPooled(/* useCreateElement */
!0)}function ut(e,t,n,o,r,a){return it(),Fd.batchedUpdates(e,t,n,o,r,a)}/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
function lt(e,t){return e._mountOrder-t._mountOrder}function ct(e){var t=e.dirtyComponentsLength;t!==Ad.length&&Rd(!1,"Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",t,Ad.length),
// Since reconciling a component higher in the owner hierarchy usually (not
// always -- see shouldComponentUpdate()) will reconcile children, reconcile
// them before their children by sorting the array.
Ad.sort(lt),
// Any updates enqueued while reconciling must be performed after this entire
// batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
// C, B could update twice in a single batch if C's render enqueues an update
// to B (since B would have already updated, we should skip it, and the only
// way we can know to do so is by checking the batch counter).
Ud++;for(var n=0;n<t;n++){
// If a component is unmounted before pending changes apply, it will still
// be here, but we assume that it has cleared its _pendingCallbacks and
// that performUpdateIfNecessary is a noop.
var o=Ad[n],r=o._pendingCallbacks;o._pendingCallbacks=null;var a;if(xd.logTopLevelRenders){var i=o;
// Duck type TopLevelWrapper. This is probably always true.
o._currentElement.type.isReactTopLevelWrapper&&(i=o._renderedComponent),a="React update: "+i.getName(),console.time(a)}if(Md.performUpdateIfNecessary(o,e.reconcileTransaction,Ud),a&&console.timeEnd(a),r)for(var s=0;s<r.length;s++)e.callbackQueue.enqueue(r[s],o.getPublicInstance())}}/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
function pt(e){
// Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (This is called by each top-level update
// function, like setState, forceUpdate, etc.; creation and
// destruction of top-level components is guarded in ReactMount.)
if(it(),!Fd.isBatchingUpdates)return void Fd.batchedUpdates(pt,e);Ad.push(e),null==e._updateBatchNumber&&(e._updateBatchNumber=Ud+1)}/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
function dt(e,t){Rd(Fd.isBatchingUpdates,"ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."),jd.enqueue(e,t),Ld=!0}function ft(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function ht(e){return e._wrapperState.valueTracker}function mt(e,t){e._wrapperState.valueTracker=t}function gt(e){e._wrapperState.valueTracker=null}function yt(e){var t;return e&&(t=ft(e)?""+e.checked:e.value),t}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
function vt(e){var t=e.target||e.srcElement||window;
// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
// Normalize SVG <use> element events #4963
return t.correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
function bt(e,t){if(!Jd.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,o=n in document;if(!o){var r=document.createElement("div");r.setAttribute(n,"return;"),o="function"==typeof r[n]}
// This is the only way to test support for the `wheel` event in IE9+.
return!o&&Vd&&"wheel"===e&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}function _t(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!ef[e.type]:"textarea"===t}function Ct(e,t,n){var o=uf.getPooled(ff.change,e,t,n);return o.type="change",of.accumulateTwoPhaseDispatches(o),o}/**
	 * SECTION: handle `change` event
	 */
function wt(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function Et(e){var t=Ct(mf,e,cf(e));
// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
sf.batchedUpdates(kt,t)}function kt(e){nf.enqueueEvents(e),nf.processEventQueue(!1)}function Tt(e,t){hf=e,mf=t,hf.attachEvent("onchange",Et)}function St(){hf&&(hf.detachEvent("onchange",Et),hf=null,mf=null)}function It(e,t){var n=lf.updateValueIfChanged(e),o=!0===t.simulated&&vf._allowSimulatedPassThrough;if(n||o)return e}function Ot(e,t){if("topChange"===e)return t}function Pt(e,t,n){"topFocus"===e?(
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
St(),Tt(t,n)):"topBlur"===e&&St()}/**
	 * (For IE <=9) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
function Nt(e,t){hf=e,mf=t,hf.attachEvent("onpropertychange",Mt)}/**
	 * (For IE <=9) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
function xt(){hf&&(hf.detachEvent("onpropertychange",Mt),hf=null,mf=null)}/**
	 * (For IE <=9) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
function Mt(e){"value"===e.propertyName&&It(mf,e)&&Et(e)}function Dt(e,t,n){"topFocus"===e?(
// In IE8, we can capture almost all .value changes by adding a
// propertychange handler and looking for events with propertyName
// equal to 'value'
// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
xt(),Nt(t,n)):"topBlur"===e&&xt()}
// For IE8 and IE9.
function Rt(e,t,n){if("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)
// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return It(mf,n)}/**
	 * SECTION: handle `click` event
	 */
function At(e){
// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function Ut(e,t,n){if("topClick"===e)return It(t,n)}function jt(e,t,n){if("topInput"===e||"topChange"===e)return It(t,n)}function Lt(e,t){
// TODO: In IE, inst is occasionally null. Why?
if(null!=e){
// Fiber and ReactDOM keep wrapper state in separate places
var n=e._wrapperState||t._wrapperState;if(n&&n.controlled&&"number"===t.type){
// If controlled, assign the value attribute to the current value on blur
var o=""+t.value;t.getAttribute("value")!==o&&t.setAttribute("value",o)}}}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
function Ft(e,t,n,o){return Ef.call(this,e,t,n,o)}
// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function Bt(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var o=Pf[e];return!!o&&!!n[o]}function Ht(e){return Bt}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Wt(e,t,n,o){return xf.call(this,e,t,n,o)}/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */
function Vt(e){var t=""+e,n=lh.exec(t);if(!n)return t;var o,r="",a=0,i=0;for(a=n.index;a<t.length;a++){switch(t.charCodeAt(a)){case 34:
// "
o="&quot;";break;case 38:
// &
o="&amp;";break;case 39:
// '
o="&#x27;";// modified from escape-html; used to be '&#39'
break;case 60:
// <
o="&lt;";break;case 62:
// >
o="&gt;";break;default:continue}i!==a&&(r+=t.substring(i,a)),i=a+1,r+=o}return i!==a?r+t.substring(i,a):r}
// end code copied and modified from escape-html
/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
function qt(e){return"boolean"==typeof e||"number"==typeof e?""+e:Vt(e)}function Yt(e){if(_h){var t=e.node,n=e.children;if(n.length)for(var o=0;o<n.length;o++)Ch(t,n[o],null);else null!=e.html?yh(t,e.html):null!=e.text&&bh(t,e.text)}}function zt(e,t){e.parentNode.replaceChild(t.node,e),Yt(t)}function Kt(e,t){_h?e.children.push(t):e.node.appendChild(t.node)}function Gt(e,t){_h?e.html=t:yh(e.node,t)}function Xt(e,t){_h?e.text=t:bh(e.node,t)}function $t(){return this.node.nodeName}function Qt(e){return{node:e,children:[],html:null,text:null,toString:$t}}/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
function Jt(e){var t=e.length;
// Old IE doesn't give collections access to hasOwnProperty. Assume inputs
// without method will throw during the slice call and skip straight to the
// fallback.
if(
// Some browsers builtin objects can report typeof 'function' (e.g. NodeList
// in old versions of Safari).
(Array.isArray(e)||"object"!=typeof e&&"function"!=typeof e)&&Eh(!1,"toArray: Array-like object expected"),"number"!=typeof t&&Eh(!1,"toArray: Object needs a length property"),0===t||t-1 in e||Eh(!1,"toArray: Object should have keys for indices"),"function"==typeof e.callee&&Eh(!1,"toArray: Object can't be `arguments`. Use rest params (function(...args) {}) or Array.from() instead."),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(e){}for(var n=Array(t),o=0;o<t;o++)n[o]=e[o];return n}/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
function Zt(e){
// not null/false
// arrays are objects, NodeLists are functions in Safari
// quacks like an array
// not window
// no DOM node should be considered an array-like
// a 'select' element has 'length' and 'item' properties on IE8
// a real array
// arguments
// HTMLCollection/NodeList
return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
function en(e){return Zt(e)?Array.isArray(e)?e.slice():Jt(e):[e]}/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
function tn(e){return Ih||Sh(!1,"Markup wrapping node not initialized"),Dh.hasOwnProperty(e)||(e="*"),Oh.hasOwnProperty(e)||(Ih.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",Oh[e]=!Ih.firstChild),Oh[e]?Dh[e]:null}/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
function nn(e){var t=e.match(Bh);return t&&t[1].toLowerCase()}/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
function on(e,t){var n=Fh;Fh||Lh(!1,"createNodesFromMarkup dummy not initialized");var o=nn(e),r=o&&jh(o);if(r){n.innerHTML=r[1]+e+r[2];for(var a=r[0];a--;)n=n.lastChild}else n.innerHTML=e;var i=n.getElementsByTagName("script");i.length&&(t||Lh(!1,"createNodesFromMarkup(...): Unexpected <script> element rendered."),Uh(i).forEach(t));for(var s=Array.from(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return s}function rn(e,t){
// Special case for text components, which return [open, close] comments
// from getHostNode.
return Array.isArray(t)&&(t=t[1]),t?t.nextSibling:e.firstChild}function an(e,t,n){Xh.insertTreeBefore(e,t,n)}function sn(e,t,n){Array.isArray(t)?ln(e,t[0],t[1],n):nm(e,t,n)}function un(e,t){if(Array.isArray(t)){var n=t[1];t=t[0],cn(e,t,n),e.removeChild(n)}e.removeChild(t)}function ln(e,t,n,o){for(var r=t;;){var a=r.nextSibling;if(nm(e,r,o),r===n)break;r=a}}function cn(e,t,n){for(;;){var o=t.nextSibling;if(o===n)
// The closing comment is removed by ReactMultiChild.
break;e.removeChild(o)}}function pn(e,t,n){var o=e.parentNode,r=e.nextSibling;r===t?
// There are no text nodes between the opening and closing comments; insert
// a new one if stringText isn't empty.
n&&nm(o,document.createTextNode(n),r):n?(
// Set the text content of the first node after the opening comment, and
// remove all following nodes up until the closing comment.
tm(r,n),cn(o,r,t)):cn(o,e,t),Jh.debugTool.onHostOperation({instanceID:Qh.getInstanceFromNode(e)._debugID,type:"replace text",payload:n})}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
/**
	 * @param {DOMElement} node input/textarea to focus
	 */
function dn(e){
// IE8 can throw "Can't move focus to the control because it is invisible,
// not enabled, or of a type that does not accept the focus." for all kinds of
// reasons that are too expensive and fragile to test.
try{e.focus()}catch(e){}}/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
function fn(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
function hn(e){return e.replace(Om,function(e,t){return t.toUpperCase()})}/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
function mn(e){return Nm(e.replace(xm,"ms-"))}/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
function gn(e,t,n,o){if(null==t||"boolean"==typeof t||""===t)return"";var r=isNaN(t);if(o||r||0===t||Am.hasOwnProperty(e)&&Am[e])return""+t;if("string"==typeof t){
// Allow '0' to pass through without warning. 0 is already special and
// doesn't require units, so we don't need to warn about it.
if(n&&"0"!==t){var a=n._currentElement._owner,i=a?a.getName():null;i&&!Um[i]&&(Um[i]={});var s=!1;if(i){var u=Um[i];s=u[e],s||(u[e]=!0)}s||Rm(!1,"a `%s` tag (owner: `%s`) was passed a numeric string value for CSS property `%s` (value: `%s`) which will be treated as a unitless number in a future version of React.",n._currentElement.type,i||"unknown",e,t)}t=t.trim()}return t+"px"}/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
function yn(e){return e.replace(Fm,"-$1").toLowerCase()}/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
function vn(e){return Vm(e).replace(qm,"-ms-")}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @typechecks static-only
	 */
/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */
function bn(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
function _n(e){return'"'+bg(e)+'"'}function Cn(e){return!!Og.hasOwnProperty(e)||!Ig.hasOwnProperty(e)&&(Sg.test(e)?(Og[e]=!0,!0):(Ig[e]=!0,Tg(!1,"Invalid attribute name: `%s`",e),!1))}function wn(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&t<1||e.hasOverloadedBooleanValue&&!1===t}function En(e){xg.enqueueEvents(e),xg.processEventQueue(!1)}/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */
function kn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */
function Tn(e){if(Ug[e])return Ug[e];if(!Ag[e])return e;var t=Ag[e];for(var n in t)if(t.hasOwnProperty(n)&&n in jg)return Ug[e]=t[n];return""}function Sn(e){
// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
return Object.prototype.hasOwnProperty.call(e,$g)||(e[$g]=Gg++,zg[e[$g]]={}),zg[e[$g]]}function In(e){null!=e.checkedLink&&null!=e.valueLink&&ny(!1,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.")}function On(e){In(e),(null!=e.value||null!=e.onChange)&&ny(!1,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.")}function Pn(e){In(e),(null!=e.checked||null!=e.onChange)&&ny(!1,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink")}function Nn(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}function xn(){this._rootNodeID&&
// DOM component is still mounted; update
wy.updateWrapper(this)}function Mn(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}function Dn(e){var t=this._currentElement.props,n=py.executeOnChange(t,e);
// Here we use asap to wait until all updates have propagated, which
// is important when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
fy.asap(xn,this);var o=t.name;if("radio"===t.type&&null!=o){for(var r=dy.getNodeFromInstance(this),a=r;a.parentNode;)a=a.parentNode;for(var i=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),s=0;s<i.length;s++){var u=i[s];if(u!==r&&u.form===r.form){
// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var l=dy.getInstanceFromNode(u);l||hy(!1,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."),
// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
fy.asap(xn,l)}}}return n}function Rn(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=!1;var e=this._currentElement.props,t=Ty.getValue(e);null!=t&&jn(this,Boolean(e.multiple),t)}}function An(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
function Un(e,t){var n=e._currentElement._owner;Ty.checkPropTypes("select",t,n),t.valueLink===undefined||Py||(Oy(!1,"`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead."),Py=!0);for(var o=0;o<xy.length;o++){var r=xy[o];if(null!=t[r]){var a=Array.isArray(t[r]);t.multiple&&!a?Oy(!1,"The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",r,An(n)):!t.multiple&&a&&Oy(!1,"The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",r,An(n))}}}/**
	 * @param {ReactDOMComponent} inst
	 * @param {boolean} multiple
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
function jn(e,t,n){var o,r,a=Sy.getNodeFromInstance(e).options;if(t){for(o={},r=0;r<n.length;r++)o[""+n[r]]=!0;for(r=0;r<a.length;r++){var i=o.hasOwnProperty(a[r].value);a[r].selected!==i&&(a[r].selected=i)}}else{for(
// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
o=""+n,r=0;r<a.length;r++)if(a[r].value===o)return void(a[r].selected=!0);a.length&&(a[0].selected=!0)}}function Ln(e){var t=this._currentElement.props,n=Ty.executeOnChange(t,e);return this._rootNodeID&&(this._wrapperState.pendingUpdate=!0),Iy.asap(Rn,this),n}function Fn(e){var t="";
// Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
return Ay.Children.forEach(e,function(e){null!=e&&("string"==typeof e||"number"==typeof e?t+=e:Fy||(Fy=!0,Ly(!1,"Only strings and numbers are supported as <option> children.")))}),t}function Bn(){this._rootNodeID&&
// DOM component is still mounted; update
$y.updateWrapper(this)}function Hn(e){var t=this._currentElement.props,n=Vy.executeOnChange(t,e);return Yy.asap(Bn,this),n}/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
function Wn(e,t,n,o,r,a){for(var i in e)if(e.hasOwnProperty(i)){var s;
// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
"function"!=typeof e[i]&&gv(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",o||"React class",hv[n],i),s=e[i](t,i,o,n,null,mv)}catch(e){s=e}if(yv(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",hv[n],i,typeof s),s instanceof Error&&!(s.message in vv)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
vv[s.message]=!0;var u="";dv||(dv=Us),null!==a?u=dv.getStackAddendumByID(a):null!==r&&(u=dv.getCurrentStackAddendum(r)),yv(!1,"Failed %s type: %s%s",n,s.message,u)}}}/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
function Vn(e,t){
// SameValue algorithm
// SameValue algorithm
return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
function qn(e,t){if(Vn(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;
// Test for A's keys different from B.
for(var r=0;r<n.length;r++)if(!_v.call(t,n[r])||!Vn(e[n[r]],t[n[r]]))return!1;return!0}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
function Yn(e,t){var n=null===e||!1===e,o=null===t||!1===t;if(n||o)return n===o;var r=typeof e,a=typeof t;return"string"===r||"number"===r?"string"===a||"number"===a:"object"===a&&e.type===t.type&&e.key===t.key}function zn(e){}function Kn(e,t){Fv(null===t||!1===t||Sv.isValidElement(t),"%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",e.displayName||e.name||"Component"),Fv(!e.childContextTypes,"%s(...): childContextTypes cannot be defined on a functional component.",e.displayName||e.name||"Component")}function Gn(e){return!(!e.prototype||!e.prototype.isReactComponent)}function Xn(e){return!(!e.prototype||!e.prototype.isPureReactComponent)}
// Separated into a function to contain deoptimizations caused by try/finally.
function $n(e,t,n){if(0===t)
// Top-level wrappers (see ReactMount) and empty components (see
// ReactDOMEmptyComponent) are invisible to hooks and devtools.
// Both are implementation details that should go away in the future.
return e();xv.debugTool.onBeginLifeCycleTimer(t,n);try{return e()}finally{xv.debugTool.onEndLifeCycleTimer(t,n)}}/**
	 * Get a host internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
function Qn(e){return Xv||Gv(!1,"There is no registered component for the tag %s",e.type),new Xv(e)}/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
function Jn(e){return new $v(e)}/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
function Zn(e){return e instanceof $v}function eo(){return eb++}function to(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
function no(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}/**
	 * Given a ReactNode, create an instance that will actually be mounted.
	 *
	 * @param {ReactNode} node
	 * @param {boolean} shouldHaveDebugID
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
function oo(e,t){var n;if(null===e||!1===e)n=rb.create(oo);else if("object"==typeof e){var o=e,r=o.type;if("function"!=typeof r&&"string"!=typeof r){var a="";(r===undefined||"object"==typeof r&&null!==r&&0===Object.keys(r).length)&&(a+=" You likely forgot to export your component from the file it's defined in."),a+=to(o._owner),sb(!1,"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==r?r:typeof r,a)}
// Special case string values
"string"==typeof o.type?n=ab.createInternalComponent(o):no(o.type)?(
// This is temporarily available for custom components that are not string
// representations. I.e. ART. Once those are updated to use the string
// representation, we can drop this code path.
n=new o.type(o),
// We renamed this. Allow the old name for compat. :(
n.getHostNode||(n.getHostNode=n.getNativeNode)):n=new lb(o)}else"string"==typeof e||"number"==typeof e?n=ab.createInstanceForText(e):sb(!1,"Encountered invalid React node of type %s",typeof e);
// These two fields are used by the DOM and ART diffing algorithms
// respectively. Instead of using expandos on components, we should be
// storing the state needed by the diffing algorithms elsewhere.
return ub("function"==typeof n.mountComponent&&"function"==typeof n.receiveComponent&&"function"==typeof n.getHostNode&&"function"==typeof n.unmountComponent,"Only React Components can be mounted."),n._mountIndex=0,n._mountImage=null,n._debugID=t?ib():0,Object.preventExtensions&&Object.preventExtensions(n),n}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
function ro(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
function ao(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1))).replace(t,function(e){return n[e]})}// Before Symbol spec.
/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
function io(e){var t=e&&(gb&&e[gb]||e[yb]);if("function"==typeof t)return t}/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
function so(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return e&&"object"==typeof e&&null!=e.key?Eb.escape(e.key):t.toString(36)}/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
function uo(e,t,n,o){var r=typeof e;if("undefined"!==r&&"boolean"!==r||(
// All of the above are perceived as null.
e=null),null===e||"string"===r||"number"===r||
// The following is inlined from ReactElement. This means we can optimize
// some checks. React Fiber also inlines this logic for similar purposes.
"object"===r&&e.$$typeof===_b)
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
return n(o,e,""===t?Tb+so(e,0):t),1;var a,i,s=0,u=""===t?Tb:t+Sb;if(Array.isArray(e))for(var l=0;l<e.length;l++)a=e[l],i=u+so(a,l),s+=uo(a,i,n,o);else{var c=Cb(e);if(c){var p,d=c.call(e);if(c!==e.entries)for(var f=0;!(p=d.next()).done;)a=p.value,i=u+so(a,f++),s+=uo(a,i,n,o);else{var h="";if(bb.current){var m=bb.current.getName();m&&(h=" Check the render method of `"+m+"`.")}
// Iterator will provide entry [k,v] tuples rather than values.
for(kb(Ib,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s",h),Ib=!0;!(p=d.next()).done;){var g=p.value;g&&(a=g[1],i=u+Eb.escape(g[0])+Sb+so(a,0),s+=uo(a,i,n,o))}}}else if("object"===r){var y="";if(y=" If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.",e._isReactElement&&(y=" It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),bb.current){var v=bb.current.getName();v&&(y+=" Check the render method of `"+v+"`.")}var b=String(e);wb(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===b?"object with keys {"+Object.keys(e).join(", ")+"}":b,y)}}return s}/**
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
	 */
function lo(e,t,n){return null==e?0:uo(e,"",t,n)}function co(e,t,n,o){
// We found a component instance.
var r=e[n]===undefined;cb||(cb=Us),r||Rb(!1,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.%s",xb.unescape(n),cb.getStackAddendumByID(o)),null!=t&&r&&(e[n]=Nb(t,!0))}/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 * @param {number=} selfDebugID Optional debugID of the current internal instance.
	 */
function po(e,t,n,o){
// We found a component instance.
if(e&&"object"==typeof e){var r=e,a=r[n]===undefined;Ab||(Ab=Us),a||Bb(!1,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.%s",Lb.unescape(n),Ab.getStackAddendumByID(o)),a&&null!=t&&(r[n]=t)}}/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
function fo(e,t){if(null==e)return e;var n={};return Fb(e,function(e,n,o){return po(e,n,o,t)},n),n}/**
	 * Make an update for markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
function ho(e,t,n){
// NOTE: Null values reduce hidden classes.
return{type:"INSERT_MARKUP",content:e,fromIndex:null,fromNode:null,toIndex:n,afterNode:t}}/**
	 * Make an update for moving an existing element to another index.
	 *
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
function mo(e,t,n){
// NOTE: Null values reduce hidden classes.
return{type:"MOVE_EXISTING",content:null,fromIndex:e._mountIndex,fromNode:zb.getHostNode(e),toIndex:n,afterNode:t}}/**
	 * Make an update for removing an element at an index.
	 *
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
function go(e,t){
// NOTE: Null values reduce hidden classes.
return{type:"REMOVE_NODE",content:null,fromIndex:e._mountIndex,fromNode:t,toIndex:null,afterNode:null}}/**
	 * Make an update for setting the markup of a node.
	 *
	 * @param {string} markup Markup that renders into an element.
	 * @private
	 */
function yo(e){
// NOTE: Null values reduce hidden classes.
return{type:"SET_MARKUP",content:e,fromIndex:null,fromNode:null,toIndex:null,afterNode:null}}/**
	 * Make an update for setting the text content.
	 *
	 * @param {string} textContent Text content to set.
	 * @private
	 */
function vo(e){
// NOTE: Null values reduce hidden classes.
return{type:"TEXT_CONTENT",content:e,fromIndex:null,fromNode:null,toIndex:null,afterNode:null}}/**
	 * Push an update, if any, onto the queue. Creates a new queue if none is
	 * passed and always returns the queue. Mutative.
	 */
function bo(e,t){return t&&(e=e||[],e.push(t)),e}/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
function _o(e,t){Wb.processChildrenUpdates(e,t)}function Co(e){r_.enqueueUpdate(e)}function wo(e){var t=typeof e;if("object"!==t)return t;var n=e.constructor&&e.constructor.name||t,o=Object.keys(e);return o.length>0&&o.length<20?n+" (keys: "+o.join(", ")+")":n}function Eo(e,t){var n=n_.get(e);if(!n){var o=e.constructor;
// Only warn when we have a callerName. Otherwise we should be silent.
// We're probably calling from enqueueCallback. We don't want to warn
// there because we already warned for the corresponding lifecycle method.
return i_(!t,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",t,t,o&&(o.displayName||o.name)||"ReactClass"),null}return i_(null==t_.current,"%s(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.",t),n}function ko(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function To(e,t){var n=e.constructor;c_(!1,"%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op. Please check the code for the %s component.",t,t,n&&(n.displayName||n.name)||"ReactClass")}/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
function So(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.useCreateElement=!1,this.updateQueue=new y_(this)}function Io(e){if(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" This DOM node was rendered by `"+n+"`."}}return""}function Oo(e){if("object"==typeof e){if(Array.isArray(e))return"["+e.map(Oo).join(", ")+"]";var t=[];for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=/^[a-z$_][\w$_]*$/i.test(n)?n:JSON.stringify(n);t.push(o+": "+Oo(e[n]))}return"{"+t.join(", ")+"}"}return"string"==typeof e?JSON.stringify(e):"function"==typeof e?"[function object]":String(e)}function Po(e,t,n){if(null!=e&&null!=t&&!sC(e,t)){var o,r=n._tag,a=n._currentElement._owner;a&&(o=a.getName());var i=o+"|"+r;_C.hasOwnProperty(i)||(_C[i]=!0,cC(!1,"`%s` was passed a style object that has previously been mutated. Mutating `style` is deprecated. Consider cloning it beforehand. Check the `render` %s. Previous style: %s. Mutated style: %s.",r,a?"of `"+o+"`":"using <"+r+">",Oo(e),Oo(t)))}}/**
	 * @param {object} component
	 * @param {?object} props
	 */
function No(e,t){t&&(
// Note the use of `==` which checks for null or undefined.
TC[e._tag]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&aC(!1,"%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s",e._tag,e._currentElement._owner?" Check the render method of "+e._currentElement._owner.getName()+".":""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&aC(!1,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."),"object"==typeof t.dangerouslySetInnerHTML&&yC in t.dangerouslySetInnerHTML||aC(!1,"`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")),cC(null==t.innerHTML,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),cC(t.suppressContentEditableWarning||!t.contentEditable||null==t.children,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),cC(null==t.onFocusIn&&null==t.onFocusOut,"React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),null!=t.style&&"object"!=typeof t.style&&aC(!1,"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s",Io(e)))}function xo(e,t,n,o){if(!(o instanceof nC)){
// IE8 has no API for event capturing and the `onScroll` event doesn't
// bubble.
cC("onScroll"!==t||iC("scroll",!0),"This browser doesn't support the `onScroll` event");var r=e._hostContainerInfo,a=r._node&&r._node.nodeType===bC,i=a?r._node:r._ownerDocument;hC(t,i),o.getReactMountReady().enqueue(Mo,{inst:e,registrationName:t,listener:n})}}function Mo(){var e=this;Y_.putListener(e.inst,e.registrationName,e.listener)}function Do(){var e=this;$_.postMountWrapper(e)}function Ro(){var e=this;Z_.postMountWrapper(e)}function Ao(){var e=this;Q_.postMountWrapper(e)}function Uo(){uC.track(this)}function jo(){var e=this;
// If a component renders to null or if another component fatals and causes
// the state of the tree to be corrupted, `node` here can be null.
e._rootNodeID||aC(!1,"Must be mounted to trap events");var t=fC(e);switch(t||aC(!1,"trapBubbledEvent(...): Requires node to be rendered."),e._tag){case"iframe":case"object":e._wrapperState.listeners=[K_.trapBubbledEvent("topLoad","load",t)];break;case"video":case"audio":e._wrapperState.listeners=[];
// Create listener for each media event
for(var n in wC)wC.hasOwnProperty(n)&&e._wrapperState.listeners.push(K_.trapBubbledEvent(n,wC[n],t));break;case"source":e._wrapperState.listeners=[K_.trapBubbledEvent("topError","error",t)];break;case"img":e._wrapperState.listeners=[K_.trapBubbledEvent("topError","error",t),K_.trapBubbledEvent("topLoad","load",t)];break;case"form":e._wrapperState.listeners=[K_.trapBubbledEvent("topReset","reset",t),K_.trapBubbledEvent("topSubmit","submit",t)];break;case"input":case"select":case"textarea":e._wrapperState.listeners=[K_.trapBubbledEvent("topInvalid","invalid",t)]}}function Lo(){J_.postUpdateWrapper(this)}function Fo(e){OC.call(IC,e)||(SC.test(e)||aC(!1,"Invalid tag: %s",e),IC[e]=!0)}function Bo(e,t){return e.indexOf("-")>=0||null!=t.is}/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
function Ho(e){var t=e.type;Fo(t),this._currentElement=e,this._tag=t.toLowerCase(),this._namespaceURI=null,this._renderedChildren=null,this._previousStyle=null,this._previousStyleCopy=null,this._hostNode=null,this._hostParent=null,this._rootNodeID=0,this._domID=0,this._hostContainerInfo=null,this._wrapperState=null,this._topLevelWrapper=null,this._flags=0,this._ancestorInfo=null,CC.call(this,null)}/**
	 * Return the lowest common ancestor of A and B, or null if they are in
	 * different trees.
	 */
function Wo(e,t){"_hostNode"in e||UC(!1,"getNodeFromInstance: Invalid argument."),"_hostNode"in t||UC(!1,"getNodeFromInstance: Invalid argument.");for(var n=0,o=e;o;o=o._hostParent)n++;for(var r=0,a=t;a;a=a._hostParent)r++;
// If A is deeper, crawl up.
for(;n-r>0;)e=e._hostParent,n--;
// If B is deeper, crawl up.
for(;r-n>0;)t=t._hostParent,r--;for(
// Walk in lockstep until we find a match.
var i=n;i--;){if(e===t)return e;e=e._hostParent,t=t._hostParent}return null}/**
	 * Return if A is an ancestor of B.
	 */
function Vo(e,t){"_hostNode"in e||UC(!1,"isAncestor: Invalid argument."),"_hostNode"in t||UC(!1,"isAncestor: Invalid argument.");for(;t;){if(t===e)return!0;t=t._hostParent}return!1}/**
	 * Return the parent instance of the passed-in instance.
	 */
function qo(e){return"_hostNode"in e||UC(!1,"getParentInstance: Invalid argument."),e._hostParent}/**
	 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	 */
function Yo(e,t,n){for(var o=[];e;)o.push(e),e=e._hostParent;var r;for(r=o.length;r-- >0;)t(o[r],"captured",n);for(r=0;r<o.length;r++)t(o[r],"bubbled",n)}/**
	 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	 * should would receive a `mouseEnter` or `mouseLeave` event.
	 *
	 * Does not invoke the callback on the nearest common ancestor because nothing
	 * "entered" or "left" that element.
	 */
function zo(e,t,n,o,r){for(var a=e&&t?Wo(e,t):null,i=[];e&&e!==a;)i.push(e),e=e._hostParent;for(var s=[];t&&t!==a;)s.push(t),t=t._hostParent;var u;for(u=0;u<i.length;u++)n(i[u],"bubbled",o);for(u=s.length;u-- >0;)n(s[u],"captured",r)}function Ko(){this.reinitializeTransaction()}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
function Go(e){return e.Window&&e instanceof e.Window?{x:e.pageXOffset||e.document.documentElement.scrollLeft,y:e.pageYOffset||e.document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}/**
	 * Find the deepest React component completely containing the root of the
	 * passed-in instance (for use when entire React trees are nested within each
	 * other). If React trees are not nested, returns null.
	 */
function Xo(e){
// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
for(;e._hostParent;)e=e._hostParent;var t=fw.getNodeFromInstance(e),n=t.parentNode;return fw.getClosestInstanceFromNode(n)}
// Used to store ancestor hierarchy in top level callback
function $o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function Qo(e){var t=mw(e.nativeEvent),n=fw.getClosestInstanceFromNode(t),o=n;do{e.ancestors.push(o),o=o&&Xo(o)}while(o);for(var r=0;r<e.ancestors.length;r++)n=e.ancestors[r],yw._handleTopLevel(e.topLevelType,n,e.nativeEvent,mw(e.nativeEvent))}function Jo(e){e(gw(window))}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
function Zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
function er(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
function tr(e,t){for(var n=Zo(e),o=0,r=0;n;){if(3===n.nodeType){if(r=o+n.textContent.length,o<=t&&r>=t)return{node:n,offset:t-o};o=r}n=Zo(er(n))}}/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
function nr(e,t,n,o){return e===n&&t===o}/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
function or(e){var t=document.selection,n=t.createRange(),o=n.text.length,r=n.duplicate();r.moveToElementText(e),r.setEndPoint("EndToStart",n);var a=r.text.length;return{start:a,end:a+o}}/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
function rr(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,r=t.focusNode,a=t.focusOffset,i=t.getRangeAt(0);
// In Firefox, range.startContainer and range.endContainer can be "anonymous
// divs", e.g. the up/down buttons on an <input type="number">. Anonymous
// divs do not seem to expose properties, triggering a "Permission denied
// error" if any of its properties are accessed. The only seemingly possible
// way to avoid erroring is to access a property that typically works for
// non-anonymous divs and catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */
i.startContainer.nodeType,i.endContainer.nodeType}catch(e){return null}
// If the node and offset values are the same, the selection is collapsed.
// `Selection.isCollapsed` is available natively, but IE sometimes gets
// this value wrong.
var s=nr(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),u=s?0:i.toString().length,l=i.cloneRange();l.selectNodeContents(e),l.setEnd(i.startContainer,i.startOffset);var c=nr(l.startContainer,l.startOffset,l.endContainer,l.endOffset),p=c?0:l.toString().length,d=p+u,f=document.createRange();f.setStart(n,o),f.setEnd(r,a);var h=f.collapsed;return{start:h?d:p,end:h?p:d}}/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
function ar(e,t){var n,o,r=document.selection.createRange().duplicate();t.end===undefined?(n=t.start,o=n):t.start>t.end?(n=t.end,o=t.start):(n=t.start,o=t.end),r.moveToElementText(e),r.moveStart("character",n),r.setEndPoint("EndToStart",r),r.moveEnd("character",o-n),r.select()}/**
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
	 */
function ir(e,t){if(window.getSelection){var n=window.getSelection(),o=e[Mw()].length,r=Math.min(t.start,o),a=t.end===undefined?r:Math.min(t.end,o);
// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!n.extend&&r>a){var i=a;a=r,r=i}var s=xw(e,r),u=xw(e,a);if(s&&u){var l=document.createRange();l.setStart(s.node,s.offset),n.removeAllRanges(),r>a?(n.addRange(l),n.extend(u.node,u.offset)):(l.setEnd(u.node,u.offset),n.addRange(l))}}}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
function sr(e){var t=e?e.ownerDocument||e:document,n=t.defaultView||window;return!(!e||!("function"==typeof n.Node?e instanceof n.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
function ur(e){return jw(e)&&3==e.nodeType}/*eslint-disable no-bitwise */
/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
function lr(e,t){return!(!e||!t)&&(e===t||!Fw(e)&&(Fw(t)?lr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
/* eslint-disable fb-www/typeof-undefined */
/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
function cr(e){if(void 0===(e=e||("undefined"!=typeof document?document:undefined)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function pr(e){return Vw(document.documentElement,e)}/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
function dr(e){this.reinitializeTransaction(),
// Only server-side rendering really needs this option (see
// `ReactServerRendering`), but server-side uses
// `ReactServerRenderingTransaction` instead. This option is here so that it's
// accessible and defaults to false when `ReactDOMComponent` and
// `ReactDOMTextComponent` checks it in `mountComponent`.`
this.renderToStaticMarkup=!1,this.reactMountReady=Xw.getPooled(null),this.useCreateElement=e}/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
function fr(e){if("selectionStart"in e&&mE.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
function hr(e,t){
// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(TE||null==wE||wE!==yE())return null;
// Only fire when selection has actually changed.
var n=fr(wE);if(!kE||!bE(kE,n)){kE=n;var o=gE.getPooled(CE.select,EE,e,t);return o.type="select",o.target=wE,dE.accumulateTwoPhaseDispatches(o),o}return null}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
function mr(e,t,n,o){return PE.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function gr(e,t,n,o){return ME.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function yr(e,t,n,o){return AE.call(this,e,t,n,o)}/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
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
function vr(e){var t,n=e.keyCode;
// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
// FF does not set `charCode` for the Enter-key, check against `keyCode`.
// IE8 does not implement `charCode`, but `keyCode` has the correct value.
// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
return"charCode"in e?0===(t=e.charCode)&&13===n&&(t=13):t=n,t>=32||13===t?t:0}/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
function br(e){if(e.key){
// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var t=BE[e.key]||e.key;if("Unidentified"!==t)return t}
// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var n=FE(e);
// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?HE[e.keyCode]||"Unidentified":""}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function _r(e,t,n,o){return YE.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Cr(e,t,n,o){return QE.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function wr(e,t,n,o){return ek.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
function Er(e,t,n,o){return rk.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
function kr(e,t,n,o){return sk.call(this,e,t,n,o)}function Tr(e){
// Prevents V8 performance issue:
// https://github.com/facebook/react/pull/7232
return"."+e._rootNodeID}function Sr(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function Ir(){Jk||(Jk=!0,Kk.EventEmitter.injectReactEventListener(zk),/**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
Kk.EventPluginHub.injectEventPluginOrder(Uk),Kk.EventPluginUtils.injectComponentTree(Hk),Kk.EventPluginUtils.injectTreeTraversal(Vk),/**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
Kk.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:Qk,EnterLeaveEventPlugin:jk,ChangeEventPlugin:Ak,SelectEventPlugin:$k,BeforeInputEventPlugin:Rk}),Kk.HostComponent.injectGenericComponentClass(Bk),Kk.HostComponent.injectTextComponentClass(qk),Kk.DOMProperty.injectDOMPropertyConfig(Dk),Kk.DOMProperty.injectDOMPropertyConfig(Lk),Kk.DOMProperty.injectDOMPropertyConfig(Xk),Kk.EmptyComponent.injectEmptyComponentFactory(function(e){return new Wk(e)}),Kk.Updates.injectReconcileTransaction(Gk),Kk.Updates.injectBatchingStrategy(Yk),Kk.Component.injectEnvironment(Fk))}function Or(e,t){var n={_topLevelWrapper:e,_idCounter:1,_ownerDocument:t?t.nodeType===tT?t:t.ownerDocument:null,_node:t,_tag:t?t.nodeName.toLowerCase():null,_namespaceURI:t?t.namespaceURI:null};return n._ancestorInfo=t?eT.updatedAncestorInfo(null,n._tag,null):null,n}
// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function Pr(e){for(var t=1,n=0,o=0,r=e.length,a=-4&r;o<a;){for(var i=Math.min(o+4096,a);o<i;o+=4)n+=(t+=e.charCodeAt(o))+(t+=e.charCodeAt(o+1))+(t+=e.charCodeAt(o+2))+(t+=e.charCodeAt(o+3));t%=aT,n%=aT}for(;o<r;o++)n+=t+=e.charCodeAt(o);return t%=aT,n%=aT,t|n<<16}/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
function Nr(e,t){for(var n=Math.min(e.length,t.length),o=0;o<n;o++)if(e.charAt(o)!==t.charAt(o))return o;return e.length===t.length?-1:n}/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 * a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
function xr(e){return e?e.nodeType===UT?e.documentElement:e.firstChild:null}function Mr(e){
// If node is something like a window, document, or text node, none of
// which support attributes or a .getAttribute method, gracefully return
// the empty string, as if the attribute were missing.
return e.getAttribute&&e.getAttribute(DT)||""}/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
function Dr(e,t,n,o,r){var a;if(_T.logTopLevelRenders){var i=e._currentElement.props.child,s=i.type;a="React mount: "+("string"==typeof s?s:s.displayName||s.name),console.time(a)}var u=kT.mountComponent(e,n,null,vT(e,t),r,0);a&&console.timeEnd(a),e._renderedComponent._topLevelWrapper=e,HT._mountImageIntoNode(u,t,e,o,n)}/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
function Rr(e,t,n,o){var r=ST.ReactReconcileTransaction.getPooled(/* useCreateElement */
!n&&bT.useCreateElement);r.perform(Dr,null,e,t,r,n,o),ST.ReactReconcileTransaction.release(r)}/**
	 * Unmounts a component and removes it from the DOM.
	 *
	 * @param {ReactComponent} instance React component instance.
	 * @param {DOMElement} container DOM element to unmount from.
	 * @final
	 * @internal
	 * @see {ReactMount.unmountComponentAtNode}
	 */
function Ar(e,t,n){
// http://jsperf.com/emptying-a-node
for(wT.debugTool.onBeginFlush(),kT.unmountComponent(e,n),wT.debugTool.onEndFlush(),t.nodeType===UT&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)}/**
	 * True if the supplied DOM node has a direct React-rendered child that is
	 * not a React root element. Useful for warning in `render`,
	 * `unmountComponentAtNode`, etc.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM element contains a direct child that was
	 * rendered by React but is not a root element.
	 * @internal
	 */
function Ur(e){var t=xr(e);if(t){var n=yT.getInstanceFromNode(t);return!(!n||!n._hostParent)}}/**
	 * True if the supplied DOM node is a React DOM element and
	 * it has been rendered by another copy of React.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM has been rendered by another copy of React
	 * @internal
	 */
function jr(e){var t=xr(e);return!(!t||!Fr(t)||yT.getInstanceFromNode(t))}/**
	 * True if the supplied DOM node is a valid node element.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM is a valid DOM node.
	 * @internal
	 */
function Lr(e){return!(!e||e.nodeType!==AT&&e.nodeType!==UT&&e.nodeType!==jT)}/**
	 * True if the supplied DOM node is a valid React node element.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM is a valid React DOM node.
	 * @internal
	 */
function Fr(e){return Lr(e)&&(e.hasAttribute(RT)||e.hasAttribute(DT))}function Br(e){var t=xr(e),n=t&&yT.getInstanceFromNode(t);return n&&!n._hostParent?n:null}function Hr(e){var t=Br(e);return t?t._hostContainerInfo._topLevelWrapper:null}function Wr(e){for(var t;(t=e._renderedNodeType)===VT.COMPOSITE;)e=e._renderedComponent;return t===VT.HOST?e._renderedComponent:t===VT.EMPTY?null:void 0}/**
	 * Returns the DOM node rendered by this element.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
function Vr(e){var t=YT.current;if(null!==t&&($T(t._warnedAboutRefsInRender,"%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",t.getName()||"A component"),t._warnedAboutRefsInRender=!0),null==e)return null;if(1===e.nodeType)return e;var n=KT.get(e);if(n)return n=GT(n),n?zT.getNodeFromInstance(n):null;"function"==typeof e.render?XT(!1,"findDOMNode was called on an unmounted component."):XT(!1,"Element appears to be neither ReactComponent nor DOMNode (keys: %s)",Object.keys(e))}function qr(e,t){null!=t&&"string"==typeof t.type&&(t.type.indexOf("-")>=0||t.props.is||sS(e,t))}function Yr(e,t){null!=t&&("input"!==t.type&&"textarea"!==t.type&&"select"!==t.type||null==t.props||null!==t.props.value||dS||(pS(!1,"`value` prop on `%s` should not be null. Consider using the empty string to clear the component or `undefined` for uncontrolled components.%s",t.type,cS.getStackAddendumByID(e)),dS=!0))}function zr(e,t,n){if(vS.hasOwnProperty(t)&&vS[t])return!0;if(bS.test(t)){var o=t.toLowerCase(),r=mS.getPossibleStandardName.hasOwnProperty(o)?mS.getPossibleStandardName[o]:null;
// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==r)return vS[t]=!0,!1;
// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==r)return yS(!1,"Unknown ARIA attribute %s. Did you mean %s?%s",t,r,gS.getStackAddendumByID(n)),vS[t]=!0,!0}return!0}function Kr(e,t){var n=[];for(var o in t.props){zr(t.type,o,e)||n.push(o)}var r=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?yS(!1,"Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop%s",r,t.type,gS.getStackAddendumByID(e)):n.length>1&&yS(!1,"Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop%s",r,t.type,gS.getStackAddendumByID(e))}function Gr(e,t){null!=t&&"string"==typeof t.type&&(t.type.indexOf("-")>=0||t.props.is||Kr(e,t))}/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
function Xr(e){var t=GS.call(e,$S),n=e[$S];try{e[$S]=undefined}catch(e){}var o=XS.call(e);return t?e[$S]=n:delete e[$S],o}/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
function $r(e){return JS.call(e)}/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
function Qr(e){return null==e?e===undefined?eI:ZS:tI&&tI in Object(e)?Xr(e):$r(e)}/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
function Jr(e){return null!=e&&"object"==typeof e}/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
function Zr(e){if(!Jr(e)||Qr(e)!=oI)return!1;var t=nI(e);if(null===t)return!0;var n=sI.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&iI.call(n)==uI}function ea(e,t,n){function o(){f===d&&(f=d.slice())}/**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
function r(){return p}/**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return o(),f.push(e),function(){if(t){t=!1,o();var n=f.indexOf(e);f.splice(n,1)}}}/**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
function i(e){if(!Zr(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,p=c(p,e)}finally{h=!1}for(var t=d=f,n=0;n<t.length;n++){(0,t[n])()}return e}/**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
function s(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,i({type:cI.INIT})}/**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
function u(){var e,t=a;return e={/**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
subscribe:function(e){function n(){e.next&&e.next(r())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[lI]=function(){return this},e}var l;if("function"==typeof t&&void 0===n&&(n=t,t=undefined),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(ea)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,p=t,d=[],f=d,h=!1;
// When a store is created, an "INIT" action is dispatched so that every
// reducer returns their initial state. This effectively populates
// the initial state tree.
return i({type:cI.INIT}),l={dispatch:i,subscribe:a,getState:r,replaceReducer:s},l[lI]=u,l}function ta(e,t){return function(){return t(e.apply(undefined,arguments))}}/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
function na(e,t){if("function"==typeof e)return ta(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),o={},r=0;r<n.length;r++){var a=n[r],i=e[a];"function"==typeof i&&(o[a]=ta(i,t))}return o}/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
function oa(){}/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
function ra(e){/* eslint-disable no-console */
"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);/* eslint-enable no-console */
try{
// This error was thrown as a convenience so that if you enable
// "break on all exceptions" in your console,
// it would pause the execution at this line.
throw new Error(e)}catch(e){}}function aa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ia(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function sa(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function ua(){hI||(hI=!0,ra("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions."))}function la(e,t,n){if("string"!=typeof t){// don't hoist over string (html) components
if(wI){var o=CI(t);o&&o!==wI&&la(e,o,n)}var r=vI(t);bI&&(r=r.concat(bI(t)));for(var a=0;a<r.length;++a){var i=r[a];if(!(mI[i]||gI[i]||n&&n[i])){var s=_I(t,i);try{// Avoid failures from read-only properties
yI(e,i,s)}catch(e){}}}return e}return e}function ca(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pa(){
// the current/next pattern is copied from redux's createStore code.
// TODO: refactor+expose that code to be reusable here?
var e=[],t=[];return{clear:function(){t=SI,e=SI},notify:function(){for(var n=e=t,o=0;o<n.length;o++)n[o]()},get:function(){return t},subscribe:function(n){var o=!0;return t===e&&(t=e.slice()),t.push(n),function(){o&&e!==SI&&(o=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}function da(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fa(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function ha(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function ma(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function ga(){}function ya(e,t){
// wrap the selector in an object that tracks its results between runs.
var n={run:function(o){try{var r=e(t.getState(),o);(r!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=r,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}function va(/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
e){var t,n,o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},r=o.getDisplayName,a=r===undefined?function(e){return"ConnectAdvanced("+e+")"}:r,i=o.methodName,s=i===undefined?"connectAdvanced":i,u=o.renderCountProp,l=u===undefined?undefined:u,c=o.shouldHandleStateChanges,p=c===undefined||c,d=o.storeKey,f=d===undefined?"store":d,h=o.withRef,m=h!==undefined&&h,g=ma(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),y=f+"Subscription",v=NI++,b=(t={},t[f]=fI,t[y]=dI,t),_=(n={},n[y]=dI,n);return function(t){TI("function"==typeof t,"You must pass a component to the function returned by "+s+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",o=a(n),r=PI({},g,{getDisplayName:a,methodName:s,renderCountProp:l,shouldHandleStateChanges:p,storeKey:f,withRef:m,displayName:o,wrappedComponentName:n,WrappedComponent:t}),i=function(n){function a(e,t){da(this,a);var r=fa(this,n.call(this,e,t));return r.version=v,r.state={},r.renderCount=0,r.store=e[f]||t[f],r.propsMode=Boolean(e[f]),r.setWrappedInstance=r.setWrappedInstance.bind(r),TI(r.store,'Could not find "'+f+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+f+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return ha(a,n),a.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return e={},e[y]=t||this.context[y],e},a.prototype.componentDidMount=function(){p&&(
// componentWillMount fires during server side rendering, but componentDidMount and
// componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
// Otherwise, unsubscription would never take place during SSR, causing a memory leak.
// To handle the case where a child component may have triggered a state change by
// dispatching an action in its componentWillMount, we have to re-run the select and maybe
// re-render.
this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},a.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},a.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},a.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=ga,this.store=null,this.selector.run=ga,this.selector.shouldComponentUpdate=!1},a.prototype.getWrappedInstance=function(){return TI(m,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+s+"() call."),this.wrappedInstance},a.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},a.prototype.initSelector=function(){var t=e(this.store.dispatch,r);this.selector=ya(t,this.store),this.selector.run(this.props)},a.prototype.initSubscription=function(){if(p){
// parentSub's source should match where store came from: props vs. context. A component
// connected to the store via props shouldn't use subscription from context, or vice versa.
var e=(this.propsMode?this.props:this.context)[y];this.subscription=new OI(this.store,e,this.onStateChange.bind(this)),
// `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
// the middle of the notification loop, where `this.subscription` will then be null. An
// extra null check every change can be avoided by copying the method onto `this` and then
// replacing it with a no-op on unmount. This can probably be avoided if Subscription's
// listeners logic is changed to not call listeners that have been unsubscribed in the
// middle of the notification loop.
this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},a.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(xI)):this.notifyNestedSubs()},a.prototype.notifyNestedSubsOnComponentDidUpdate=function(){
// `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
// needs to notify nested subs. Once called, it unimplements itself until further state
// changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
// a boolean check every time avoids an extra method call most of the time, resulting
// in some perf boost.
this.componentDidUpdate=undefined,this.notifyNestedSubs()},a.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},a.prototype.addExtraProps=function(e){if(!(m||l||this.propsMode&&this.subscription))return e;
// make a shallow copy so that fields added don't leak to the original selector.
// this is especially important for 'ref' since that's a reference back to the component
// instance. a singleton memoized selector would then be holding a reference to the
// instance, preventing the instance from being garbage collected, and that would be bad
var t=PI({},e);return m&&(t.ref=this.setWrappedInstance),l&&(t[l]=this.renderCount++),this.propsMode&&this.subscription&&(t[y]=this.subscription),t},a.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return cl(t,this.addExtraProps(e.props))},a}(dl);return i.WrappedComponent=t,i.displayName=o,i.childContextTypes=_,i.contextTypes=b,i.propTypes=b,i.prototype.componentWillUpdate=function(){var e=this;
// We are hot reloading!
if(this.version!==v){this.version=v,this.initSelector();
// If any connected descendants don't hot reload (and resubscribe in the process), their
// listeners will be lost when we unsubscribe. Unfortunately, by copying over all
// listeners, this does mean that the old versions of connected descendants will still be
// notified of state changes; however, their onStateChange function is a no-op so this
// isn't a huge deal.
var t=[];this.subscription&&(t=this.subscription.listeners.get(),this.subscription.tryUnsubscribe()),this.initSubscription(),p&&(this.subscription.trySubscribe(),t.forEach(function(t){return e.subscription.listeners.subscribe(t)}))}},EI(i,t)}}function ba(e,t,n){Zr(e)||ra(n+"() in "+t+" must return a plain object. Instead received "+e+".")}function _a(e){return function(t,n){function o(){return r}var r=e(t,n);return o.dependsOnOwnProps=!1,o}}
// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function Ca(e){return null!==e.dependsOnOwnProps&&e.dependsOnOwnProps!==undefined?Boolean(e.dependsOnOwnProps):1!==e.length}
// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wa(e,t){return function(n,o){var r=o.displayName,a=function(e,t){return a.dependsOnOwnProps?a.mapToProps(e,t):a.mapToProps(e)};
// allow detectFactoryAndVerify to get ownProps
return a.dependsOnOwnProps=!0,a.mapToProps=function(n,o){a.mapToProps=e,a.dependsOnOwnProps=Ca(e);var i=a(n,o);return"function"==typeof i&&(a.mapToProps=i,a.dependsOnOwnProps=Ca(i),i=a(n,o)),ba(i,r,t),i},a}}function Ea(e){return"function"==typeof e?wa(e,"mapDispatchToProps"):undefined}function ka(e){return e?undefined:_a(function(e){return{dispatch:e}})}function Ta(e){return e&&"object"==typeof e?_a(function(t){return na(e,t)}):undefined}function Sa(e){return"function"==typeof e?wa(e,"mapStateToProps"):undefined}function Ia(e){return e?undefined:_a(function(){return{}})}function Oa(e,t,n){return RI({},n,e,t)}function Pa(e){return function(t,n){var o=n.displayName,r=n.pure,a=n.areMergedPropsEqual,i=!1,s=void 0;return function(t,n,u){var l=e(t,n,u);return i?r&&a(l,s)||(s=l):(i=!0,s=l,ba(s,o,"mergeProps")),s}}}function Na(e){return"function"==typeof e?Pa(e):undefined}function xa(e){return e?undefined:function(){return Oa}}function Ma(e,t,n){if(!e)throw new Error("Unexpected value for "+t+" in "+n+".");"mapStateToProps"!==t&&"mapDispatchToProps"!==t||e.hasOwnProperty("dependsOnOwnProps")||ra("The selector for "+t+" of "+n+" did not specify a value for dependsOnOwnProps.")}function Da(e,t,n,o){Ma(e,"mapStateToProps",o),Ma(t,"mapDispatchToProps",o),Ma(n,"mergeProps",o)}function Ra(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function Aa(e,t,n,o){return function(r,a){return n(e(r,a),t(o,a),a)}}function Ua(e,t,n,o,r){function a(r,a){return h=r,m=a,g=e(h,m),y=t(o,m),v=n(g,y,m),f=!0,v}function i(){return g=e(h,m),t.dependsOnOwnProps&&(y=t(o,m)),v=n(g,y,m)}function s(){return e.dependsOnOwnProps&&(g=e(h,m)),t.dependsOnOwnProps&&(y=t(o,m)),v=n(g,y,m)}function u(){var t=e(h,m),o=!d(t,g);return g=t,o&&(v=n(g,y,m)),v}function l(e,t){var n=!p(t,m),o=!c(e,h);return h=e,m=t,n&&o?i():n?s():o?u():v}var c=r.areStatesEqual,p=r.areOwnPropsEqual,d=r.areStatePropsEqual,f=!1,h=void 0,m=void 0,g=void 0,y=void 0,v=void 0;return function(e,t){return f?l(e,t):a(e,t)}}
// TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.
function ja(e,t){var n=t.initMapStateToProps,o=t.initMapDispatchToProps,r=t.initMergeProps,a=Ra(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=n(e,a),s=o(e,a),u=r(e,a);return Da(i,s,u,a.displayName),(a.pure?Ua:Aa)(i,s,u,e,a)}/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
/* eslint-disable no-unused-vars */
var La=Object.getOwnPropertySymbols,Fa=Object.prototype.hasOwnProperty,Ba=Object.prototype.propertyIsEnumerable,Ha=function(){try{if(!Object.assign)return!1;
// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");if(// eslint-disable-line no-new-wrappers
e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(t,n){for(var o,r,a=e(t),i=1;i<arguments.length;i++){o=Object(arguments[i]);for(var s in o)Fa.call(o,s)&&(a[s]=o[s]);if(La){r=La(o);for(var u=0;u<r.length;u++)Ba.call(o,r[u])&&(a[r[u]]=o[r[u]])}}return a},Wa=function(){};Wa.thatReturns=t,Wa.thatReturnsFalse=t(!1),Wa.thatReturnsTrue=t(!0),Wa.thatReturnsNull=t(null),Wa.thatReturnsThis=function(){return this},Wa.thatReturnsArgument=function(e){return e};var Va=Wa,qa=Va,Ya=qa,za=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=0,a="Warning: "+e.replace(/%s/g,function(){return n[r++]});"undefined"!=typeof console&&console.error(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};Ya=function(e,t){if(t===undefined)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];za.apply(undefined,[t].concat(o))}};var Ka=Ya,Ga=Ka,Xa={/**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
isMounted:function(e){return!1},/**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
enqueueCallback:function(e,t){},/**
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
	   * @internal
	   */
enqueueForceUpdate:function(e){n(e,"forceUpdate")},/**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
enqueueReplaceState:function(e,t){n(e,"replaceState")},/**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
enqueueSetState:function(e,t){n(e,"setState")}},$a=Xa,Qa=!1;try{
// $FlowFixMe https://github.com/facebook/flow/issues/285
Object.defineProperty({},"x",{get:function(){}}),Qa=!0}catch(e){}var Ja=Qa,Za={};Object.freeze(Za);var ei=Za,ti=/*#__PURE__*/Object.freeze({default:ei,__moduleExports:ei}),ni=function(e){};ni=function(e){if(e===undefined)throw new Error("invariant requires an error message argument")};var oi=o,ri=function(){},ai=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=0,a="Warning: "+e.replace(/%s/g,function(){return n[r++]});"undefined"!=typeof console&&console.warn(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};ri=function(e,t){if(t===undefined)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];ai.apply(undefined,[t].concat(o))}};var ii=ri,si=ti&&ei||ti,ui=Ha,li=$a,ci=Ja,pi=si,di=oi,fi=ii;r.prototype.isReactComponent={},/**
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
r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&di(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},/**
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
r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")};var hi={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(var mi in hi)hi.hasOwnProperty(mi)&&function(e,t){ci&&Object.defineProperty(r.prototype,e,{get:function(){return fi(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1]),undefined}})}(mi,hi[mi]);i.prototype=r.prototype,a.prototype=new i,a.prototype.constructor=a,
// Avoid an extra prototype jump for these methods.
ui(a.prototype,r.prototype),a.prototype.isPureReactComponent=!0;var gi,yi,vi={Component:r,PureComponent:a},bi=/*#__PURE__*/Object.freeze({default:vi,__moduleExports:vi}),_i=oi,Ci=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},wi=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},Ei=function(e,t,n){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n),r}return new o(e,t,n)},ki=function(e,t,n,o){var r=this;if(r.instancePool.length){var a=r.instancePool.pop();return r.call(a,e,t,n,o),a}return new r(e,t,n,o)},Ti=function(e){var t=this;e instanceof t||_i(!1,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},Si=Ci,Ii=function(e,t){
// Casting as any so that flow ignores the actual implementation and trusts
// it to match the type we declared
var n=e;return n.instancePool=[],n.getPooled=t||Si,n.poolSize||(n.poolSize=10),n.release=Ti,n},Oi={addPoolingTo:Ii,oneArgumentPooler:Ci,twoArgumentPooler:wi,threeArgumentPooler:Ei,fourArgumentPooler:ki},Pi=Oi,Ni={/**
	   * @internal
	   * @type {ReactComponent}
	   */
current:null},xi=Ni,Mi="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,Di=Mi,Ri=/*#__PURE__*/Object.freeze({default:Di,__moduleExports:Di}),Ai=Ri&&Di||Ri,Ui=Ha,ji=xi,Li=Ka,Fi=Ja,Bi=Object.prototype.hasOwnProperty,Hi=Ai,Wi={key:!0,ref:!0,__self:!0,__source:!0},Vi=function(e,t,n,o,r,a,i){var s={
// This tag allow us to uniquely identify this as a React Element
$$typeof:Hi,
// Built-in properties that belong on the element
type:e,key:t,ref:n,props:i,
// Record the component responsible for creating this element.
_owner:a};
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
// self and source are DEV only properties.
// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
return s._store={},Fi?(Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:r})):(s._store.validated=!1,s._self=o,s._source=r),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
Vi.createElement=function(e,t,n){var o,r={},a=null,i=null,p=null,d=null;if(null!=t){s(t)&&(i=t.ref),u(t)&&(a=""+t.key),p=t.__self===undefined?null:t.__self,d=t.__source===undefined?null:t.__source;
// Remaining properties are added to a new props object
for(o in t)Bi.call(t,o)&&!Wi.hasOwnProperty(o)&&(r[o]=t[o])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var f=arguments.length-2;if(1===f)r.children=n;else if(f>1){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];Object.freeze&&Object.freeze(h),r.children=h}
// Resolve default props
if(e&&e.defaultProps){var g=e.defaultProps;for(o in g)r[o]===undefined&&(r[o]=g[o])}if((a||i)&&("undefined"==typeof r.$$typeof||r.$$typeof!==Hi)){var y="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&l(r,y),i&&c(r,y)}return Vi(e,a,i,p,d,ji.current,r)},/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
Vi.createFactory=function(e){var t=Vi.createElement.bind(null,e);
// Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. `<Foo />.type === Foo`.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
return t.type=e,t},Vi.cloneAndReplaceKey=function(e,t){return Vi(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
Vi.cloneElement=function(e,t,n){var o,r=Ui({},e.props),a=e.key,i=e.ref,l=e._self,c=e._source,p=e._owner;if(null!=t){s(t)&&(
// Silently steal the ref from the parent.
i=t.ref,p=ji.current),u(t)&&(a=""+t.key);
// Remaining properties override existing props
var d;e.type&&e.type.defaultProps&&(d=e.type.defaultProps);for(o in t)Bi.call(t,o)&&!Wi.hasOwnProperty(o)&&(t[o]===undefined&&d!==undefined?
// Resolve default props
r[o]=d[o]:r[o]=t[o])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var f=arguments.length-2;if(1===f)r.children=n;else if(f>1){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];r.children=h}return Vi(e.type,a,i,l,c,p,r)},/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
Vi.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Hi};var qi=Vi,Yi="function"==typeof Symbol&&Symbol.iterator,zi="@@iterator",Ki=p,Gi={escape:d,unescape:f},Xi=Gi,$i=/*#__PURE__*/Object.freeze({default:Xi,__moduleExports:Xi}),Qi=$i&&Xi||$i,Ji=xi,Zi=Ai,es=Ki,ts=oi,ns=Qi,os=Ka,rs=".",as=":",is=!1,ss=g,us=Pi,ls=qi,cs=Va,ps=ss,ds=us.twoArgumentPooler,fs=us.fourArgumentPooler,hs=/\/+/g;v.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},us.addPoolingTo(v,ds),C.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},us.addPoolingTo(C,fs);var ms,gs,ys,vs,bs,_s,Cs,ws={forEach:_,map:k,mapIntoWithKeyPrefixInternal:E,count:S,toArray:I},Es=ws,ks=xi,Ts=oi,Ss=Ka,Is=
// Array.from
"function"==typeof Array.from&&
// Map
"function"==typeof Map&&O(Map)&&
// Map.prototype.keys
null!=Map.prototype&&"function"==typeof Map.prototype.keys&&O(Map.prototype.keys)&&
// Set
"function"==typeof Set&&O(Set)&&
// Set.prototype.keys
null!=Set.prototype&&"function"==typeof Set.prototype.keys&&O(Set.prototype.keys);if(Is){var Os=new Map,Ps=new Set;ms=function(e,t){Os.set(e,t)},gs=function(e){return Os.get(e)},ys=function(e){Os["delete"](e)},vs=function(){return Array.from(Os.keys())},bs=function(e){Ps.add(e)},_s=function(e){Ps["delete"](e)},Cs=function(){return Array.from(Ps.keys())}}else{var Ns={},xs={},Ms=function(e){return"."+e},Ds=function(e){return parseInt(e.substr(1),10)};ms=function(e,t){var n=Ms(e);Ns[n]=t},gs=function(e){var t=Ms(e);return Ns[t]},ys=function(e){var t=Ms(e);delete Ns[t]},vs=function(){return Object.keys(Ns).map(Ds)},bs=function(e){var t=Ms(e);xs[t]=!0},_s=function(e){var t=Ms(e);delete xs[t]},Cs=function(){return Object.keys(xs).map(Ds)}}var Rs=[],As={onSetChildren:function(e,t){var n=gs(e);n||Ts(!1,"Item must have been set"),n.childIDs=t;for(var o=0;o<t.length;o++){var r=t[o],a=gs(r);a||Ts(!1,"Expected hook events to fire for the child before its parent includes it in onSetChildren()."),null==a.childIDs&&"object"==typeof a.element&&null!=a.element&&Ts(!1,"Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren()."),a.isMounted||Ts(!1,"Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren()."),null==a.parentID&&(a.parentID=e),a.parentID!==e&&Ts(!1,"Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).",r,a.parentID,e)}},onBeforeMountComponent:function(e,t,n){ms(e,{element:t,parentID:n,text:null,childIDs:[],isMounted:!1,updateCount:0})},onBeforeUpdateComponent:function(e,t){var n=gs(e);n&&n.isMounted&&(n.element=t)},onMountComponent:function(e){var t=gs(e);t||Ts(!1,"Item must have been set"),t.isMounted=!0,0===t.parentID&&bs(e)},onUpdateComponent:function(e){var t=gs(e);t&&t.isMounted&&t.updateCount++},onUnmountComponent:function(e){var t=gs(e);if(t){
// We need to check if it exists.
// `item` might not exist if it is inside an error boundary, and a sibling
// error boundary child threw while mounting. Then this instance never
// got a chance to mount, but it still gets an unmounting event during
// the error boundary cleanup.
t.isMounted=!1;0===t.parentID&&_s(e)}Rs.push(e)},purgeUnmountedComponents:function(){if(!As._preventPurging){for(var e=0;e<Rs.length;e++){P(Rs[e])}Rs.length=0}},isMounted:function(e){var t=gs(e);return!!t&&t.isMounted},getCurrentStackAddendum:function(e){var t="";if(e){var n=x(e),o=e._owner;t+=N(n,e._source,o&&o.getName())}var r=ks.current,a=r&&r._debugID;return t+=As.getStackAddendumByID(a)},getStackAddendumByID:function(e){for(var t="";e;)t+=M(e),e=As.getParentID(e);return t},getChildIDs:function(e){var t=gs(e);return t?t.childIDs:[]},getDisplayName:function(e){var t=As.getElement(e);return t?x(t):null},getElement:function(e){var t=gs(e);return t?t.element:null},getOwnerID:function(e){var t=As.getElement(e);return t&&t._owner?t._owner._debugID:null},getParentID:function(e){var t=gs(e);return t?t.parentID:null},getSource:function(e){var t=gs(e),n=t?t.element:null;return null!=n?n._source:null},getText:function(e){var t=As.getElement(e);return"string"==typeof t?t:"number"==typeof t?""+t:null},getUpdateCount:function(e){var t=gs(e);return t?t.updateCount:0},getRootIDs:Cs,getRegisteredIDs:vs,pushNonStandardWarningStack:function(e,t){if("function"==typeof console.reactStack){var n=[],o=ks.current,r=o&&o._debugID;try{for(e&&n.push({name:r?As.getDisplayName(r):null,fileName:t?t.fileName:null,lineNumber:t?t.lineNumber:null});r;){var a=As.getElement(r),i=As.getParentID(r),s=As.getOwnerID(r),u=s?As.getDisplayName(s):null,l=a&&a._source;n.push({name:u,fileName:l?l.fileName:null,lineNumber:l?l.lineNumber:null}),r=i}}catch(e){}console.reactStack(n)}},popNonStandardWarningStack:function(){"function"==typeof console.reactStackEnd&&console.reactStackEnd()}},Us=As,js={};js={prop:"prop",context:"context",childContext:"child context"};var Ls,Fs=js,Bs=Fs,Hs="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ws=oi,Vs=Ka;"undefined"!=typeof process&&process.env;var qs={},Ys=D,zs=xi,Ks=Us,Gs=qi,Xs=Ys,$s=Ja,Qs=Ki,Js=Ka,Zs=ii,eu={},tu={createElement:function(e,t,n){var o="string"==typeof e||"function"==typeof e;
// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!o&&"function"!=typeof e&&"string"!=typeof e){var r="";(e===undefined||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(r+=" You likely forgot to export your component from the file it's defined in.");var a=A(t);r+=a||R(),r+=Ks.getCurrentStackAddendum();var i=null!==t&&t!==undefined&&t.__source!==undefined?t.__source:null;Ks.pushNonStandardWarningStack(!0,i),Js(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==e?e:typeof e,r),Ks.popNonStandardWarningStack()}var s=Gs.createElement.apply(this,arguments);
// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==s)return s;
// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(o)for(var u=2;u<arguments.length;u++)L(arguments[u],e);return F(s),s},createFactory:function(e){var t=tu.createElement.bind(null,e);
// Legacy hook TODO: Warn if this is accessed
return t.type=e,$s&&Object.defineProperty(t,"type",{enumerable:!1,get:function(){return Zs(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},cloneElement:function(e,t,n){for(var o=Gs.cloneElement.apply(this,arguments),r=2;r<arguments.length;r++)L(arguments[r],o.type);return F(o),o}},nu=tu,ou=qi,ru=ou.createFactory;ru=nu.createFactory;/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 *
	 * @public
	 */
var au={a:ru("a"),abbr:ru("abbr"),address:ru("address"),area:ru("area"),article:ru("article"),aside:ru("aside"),audio:ru("audio"),b:ru("b"),base:ru("base"),bdi:ru("bdi"),bdo:ru("bdo"),big:ru("big"),blockquote:ru("blockquote"),body:ru("body"),br:ru("br"),button:ru("button"),canvas:ru("canvas"),caption:ru("caption"),cite:ru("cite"),code:ru("code"),col:ru("col"),colgroup:ru("colgroup"),data:ru("data"),datalist:ru("datalist"),dd:ru("dd"),del:ru("del"),details:ru("details"),dfn:ru("dfn"),dialog:ru("dialog"),div:ru("div"),dl:ru("dl"),dt:ru("dt"),em:ru("em"),embed:ru("embed"),fieldset:ru("fieldset"),figcaption:ru("figcaption"),figure:ru("figure"),footer:ru("footer"),form:ru("form"),h1:ru("h1"),h2:ru("h2"),h3:ru("h3"),h4:ru("h4"),h5:ru("h5"),h6:ru("h6"),head:ru("head"),header:ru("header"),hgroup:ru("hgroup"),hr:ru("hr"),html:ru("html"),i:ru("i"),iframe:ru("iframe"),img:ru("img"),input:ru("input"),ins:ru("ins"),kbd:ru("kbd"),keygen:ru("keygen"),label:ru("label"),legend:ru("legend"),li:ru("li"),link:ru("link"),main:ru("main"),map:ru("map"),mark:ru("mark"),menu:ru("menu"),menuitem:ru("menuitem"),meta:ru("meta"),meter:ru("meter"),nav:ru("nav"),noscript:ru("noscript"),object:ru("object"),ol:ru("ol"),optgroup:ru("optgroup"),option:ru("option"),output:ru("output"),p:ru("p"),param:ru("param"),picture:ru("picture"),pre:ru("pre"),progress:ru("progress"),q:ru("q"),rp:ru("rp"),rt:ru("rt"),ruby:ru("ruby"),s:ru("s"),samp:ru("samp"),script:ru("script"),section:ru("section"),select:ru("select"),small:ru("small"),source:ru("source"),span:ru("span"),strong:ru("strong"),style:ru("style"),sub:ru("sub"),summary:ru("summary"),sup:ru("sup"),table:ru("table"),tbody:ru("tbody"),td:ru("td"),textarea:ru("textarea"),tfoot:ru("tfoot"),th:ru("th"),thead:ru("thead"),time:ru("time"),title:ru("title"),tr:ru("tr"),track:ru("track"),u:ru("u"),ul:ru("ul"),var:ru("var"),video:ru("video"),wbr:ru("wbr"),
// SVG
circle:ru("circle"),clipPath:ru("clipPath"),defs:ru("defs"),ellipse:ru("ellipse"),g:ru("g"),image:ru("image"),line:ru("line"),linearGradient:ru("linearGradient"),mask:ru("mask"),path:ru("path"),pattern:ru("pattern"),polygon:ru("polygon"),polyline:ru("polyline"),radialGradient:ru("radialGradient"),rect:ru("rect"),stop:ru("stop"),svg:ru("svg"),text:ru("text"),tspan:ru("tspan")},iu=au,su=function(){},uu="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lu={};su=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(e){}};var cu=B,pu=Ha,du="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fu=cu,hu=function(){};hu=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(e){}};var mu,gu=function(e,t){// Before Symbol spec.
/**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
function n(e){var t=e&&(_&&e[_]||e[C]);if("function"==typeof t)return t}/**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
/*eslint-disable no-self-compare*/
function o(e,t){
// SameValue algorithm
// SameValue algorithm
return e===t?0!==e||1/e==1/t:e!==e&&t!==t}/*eslint-enable no-self-compare*/
/**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
function r(e){this.message=e,this.stack=""}function a(e){function n(n,i,s,u,l,c,p){if(u=u||w,c=c||s,p!==du){if(t){
// New behavior only for users of `prop-types` package
var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("undefined"!=typeof console){
// Old behavior for people using React.PropTypes
var f=u+":"+s;!o[f]&&
// Avoid spamming the console because they are often not actionable except for lib authors
a<3&&(hu("You are manually calling a React.PropTypes validation function for the `"+c+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[f]=!0,a++)}}return null==i[s]?n?new r(null===i[s]?"The "+l+" `"+c+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+l+" `"+c+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(i,s,u,l,c)}var o={},a=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function i(e){function t(t,n,o,a,i,s){var u=t[n];if(g(u)!==e)return new r("Invalid "+a+" `"+i+"` of type `"+y(u)+"` supplied to `"+o+"`, expected `"+e+"`.");return null}return a(t)}function s(e){function t(t,n,o,a,i){if("function"!=typeof e)return new r("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s)){return new r("Invalid "+a+" `"+i+"` of type `"+g(s)+"` supplied to `"+o+"`, expected an array.")}for(var u=0;u<s.length;u++){var l=e(s,u,o,a,i+"["+u+"]",du);if(l instanceof Error)return l}return null}return a(t)}function u(e){function t(t,n,o,a,i){if(!(t[n]instanceof e)){var s=e.name||w;return new r("Invalid "+a+" `"+i+"` of type `"+b(t[n])+"` supplied to `"+o+"`, expected instance of `"+s+"`.")}return null}return a(t)}function l(e){function t(t,n,a,i,s){for(var u=t[n],l=0;l<e.length;l++)if(o(u,e[l]))return null;return new r("Invalid "+i+" `"+s+"` of value `"+u+"` supplied to `"+a+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?a(t):(hu("Invalid argument supplied to oneOf, expected an instance of array."),H)}function c(e){function t(t,n,o,a,i){if("function"!=typeof e)return new r("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var s=t[n],u=g(s);if("object"!==u)return new r("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected an object.");for(var l in s)if(s.hasOwnProperty(l)){var c=e(s,l,o,a,i+"."+l,du);if(c instanceof Error)return c}return null}return a(t)}function p(e){function t(t,n,o,a,i){for(var s=0;s<e.length;s++){if(null==(0,e[s])(t,n,o,a,i,du))return null}return new r("Invalid "+a+" `"+i+"` supplied to `"+o+"`.")}if(!Array.isArray(e))return hu("Invalid argument supplied to oneOfType, expected an instance of array."),H;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return hu("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+v(o)+" at index "+n+"."),H}return a(t)}function d(e){function t(t,n,o,a,i){var s=t[n],u=g(s);if("object"!==u)return new r("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var l in e){var c=e[l];if(c){var p=c(s,l,o,a,i+"."+l,du);if(p)return p}}return null}return a(t)}function f(e){function t(t,n,o,a,i){var s=t[n],u=g(s);if("object"!==u)return new r("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");
// We need to check all keys in case some are required but missing from
// props.
var l=pu({},t[n],e);for(var c in l){var p=e[c];if(!p)return new r("Invalid "+a+" `"+i+"` key `"+c+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=p(s,c,o,a,i+"."+c,du);if(d)return d}return null}return a(t)}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var o=n(t);if(!o)return!1;var r,a=o.call(t);if(o!==t.entries){for(;!(r=a.next()).done;)if(!h(r.value))return!1}else
// Iterator will provide entry [k,v] tuples rather than values.
for(;!(r=a.next()).done;){var i=r.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function m(e,t){
// Native Symbol.
// Native Symbol.
// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}
// Equivalent of `typeof` but with special handling for array and regexp.
function g(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":m(t,e)?"symbol":t}
// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function y(e){if(void 0===e||null===e)return""+e;var t=g(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}
// Returns a string that is postfixed to a warning about an invalid type.
// For example, "undefined" or "of type array"
function v(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}
// Returns class name of the object, if any.
function b(e){return e.constructor&&e.constructor.name?e.constructor.name:w}/* global Symbol */
var _="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",w="<<anonymous>>",E={array:i("array"),bool:i("boolean"),func:i("function"),number:i("number"),object:i("object"),string:i("string"),symbol:i("symbol"),any:function(){return a(H)}(),arrayOf:s,element:function(){function t(t,n,o,a,i){var s=t[n];if(!e(s)){return new r("Invalid "+a+" `"+i+"` of type `"+g(s)+"` supplied to `"+o+"`, expected a single ReactElement.")}return null}return a(t)}(),instanceOf:u,node:function(){function e(e,t,n,o,a){return h(e[t])?null:new r("Invalid "+o+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")}return a(e)}(),objectOf:c,oneOf:l,oneOfType:p,shape:d,exact:f};
// Make `instanceof Error` still work for returned errors.
return r.prototype=Error.prototype,E.checkPropTypes=fu,E.PropTypes=E,E},yu=gu,vu=function(e){return yu(e,!1)},bu=qi,_u=bu.isValidElement,Cu=vu,wu=Cu(_u),Eu=Ha,ku=si,Tu=oi,Su=Ka,Iu="mixins";mu={prop:"prop",context:"context",childContext:"child context"};var Ou=V,Pu=bi&&vi||bi,Nu=Pu,xu=Nu.Component,Mu=qi,Du=Mu.isValidElement,Ru=$a,Au=Ou,Uu=Au(xu,Du,Ru),ju=qi,Lu=oi,Fu=q,Bu=Ha,Hu=Pu,Wu=Es,Vu=iu,qu=qi,Yu=wu,zu=Uu,Ku=Fu,Gu=qu.createElement,Xu=qu.createFactory,$u=qu.cloneElement,Qu=ii,Ju=Ja,Zu=nu,el=!1;Gu=Zu.createElement,Xu=Zu.createFactory,$u=Zu.cloneElement;var tl=Bu,nl=function(e){return e},ol=!1,rl=!1;tl=function(){return Qu(ol,"React.__spread is deprecated and should not be used. Use Object.assign directly or another helper function with similar semantics. You may be seeing this warning due to your compiler. See https://fb.me/react-spread-deprecation for more details."),ol=!0,Bu.apply(null,arguments)},nl=function(e){return Qu(rl,"React.createMixin is deprecated and should not be used. In React v16.0, it will be removed. You can use this mixin directly instead. See https://fb.me/createmixin-was-never-implemented for more info."),rl=!0,e};var al={
// Modern
Children:{map:Wu.map,forEach:Wu.forEach,count:Wu.count,toArray:Wu.toArray,only:Ku},Component:Hu.Component,PureComponent:Hu.PureComponent,createElement:Gu,cloneElement:$u,isValidElement:qu.isValidElement,
// Classic
PropTypes:Yu,createClass:zu,createFactory:Xu,createMixin:nl,
// This looks DOM specific but these are actually isomorphic helpers
// since they are just generating DOM strings.
DOM:Vu,version:"15.6.2",
// Deprecated hook for JSX spread, don't use this for anything.
__spread:tl},il=!1;Ju&&(Object.defineProperty(al,"PropTypes",{get:function(){return Qu(el,"Accessing PropTypes via the main React package is deprecated, and will be removed in  React v16.0. Use the latest available v15.* prop-types package from npm instead. For info on usage, compatibility, migration and more, see https://fb.me/prop-types-docs"),el=!0,Yu}}),Object.defineProperty(al,"createClass",{get:function(){return Qu(il,"Accessing createClass via the main React package is deprecated, and will be removed in React v16.0. Use a plain JavaScript class instead. If you're not yet ready to migrate, create-react-class v15.* is available on npm as a temporary, drop-in replacement. For more info see https://fb.me/react-create-class"),il=!0,zu}})),
// React.DOM factories are deprecated. Wrap these methods so that
// invocations of the React.DOM namespace and alert users to switch
// to the `react-dom-factories` package.
al.DOM={};var sl=!1;Object.keys(Vu).forEach(function(e){al.DOM[e]=function(){return sl||(Qu(!1,"Accessing factories like React.DOM.%s has been deprecated and will be removed in v16.0+. Use the react-dom-factories package instead.  Version 1.0 provides a drop-in replacement. For more info, see https://fb.me/react-dom-factories",e),sl=!0),Vu[e].apply(Vu,arguments)}});var ul=al,ll=ul,cl=ll.createElement,pl=ll.Children,dl=ll.Component,fl=oi,hl={/**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,/**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
injectDOMPropertyConfig:function(e){var t=hl,n=e.Properties||{},o=e.DOMAttributeNamespaces||{},r=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},i=e.DOMMutationMethods||{};e.isCustomAttribute&&gl._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var s in n){gl.properties.hasOwnProperty(s)&&fl(!1,"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",s);var u=s.toLowerCase(),l=n[s],c={attributeName:u,attributeNamespace:null,propertyName:s,mutationMethod:null,mustUseProperty:Y(l,t.MUST_USE_PROPERTY),hasBooleanValue:Y(l,t.HAS_BOOLEAN_VALUE),hasNumericValue:Y(l,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:Y(l,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:Y(l,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(c.hasBooleanValue+c.hasNumericValue+c.hasOverloadedBooleanValue<=1||fl(!1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",s),gl.getPossibleStandardName[u]=s,r.hasOwnProperty(s)){var p=r[s];c.attributeName=p,gl.getPossibleStandardName[p]=s}o.hasOwnProperty(s)&&(c.attributeNamespace=o[s]),a.hasOwnProperty(s)&&(c.propertyName=a[s]),i.hasOwnProperty(s)&&(c.mutationMethod=i[s]),gl.properties[s]=c}}},ml=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",gl={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:ml,ATTRIBUTE_NAME_CHAR:ml+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",/**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */
properties:{},/**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties. Available only in __DEV__.
	   *
	   * autofocus is predefined, because adding it to the property whitelist
	   * causes unintended side effects.
	   *
	   * @type {Object}
	   */
getPossibleStandardName:{autofocus:"autoFocus"},/**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
_isCustomAttributeFunctions:[],/**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
isCustomAttribute:function(e){for(var t=0;t<gl._isCustomAttributeFunctions.length;t++){if((0,gl._isCustomAttributeFunctions[t])(e))return!0}return!1},injection:hl},yl=gl,vl={hasCachedChildNodes:1},bl=vl,_l=yl,Cl=bl,wl=oi,El=_l.ID_ATTRIBUTE_NAME,kl=Cl,Tl="__reactInternalInstance$"+Math.random().toString(36).slice(2),Sl={getClosestInstanceFromNode:Q,getInstanceFromNode:J,getNodeFromInstance:Z,precacheChildNodes:$,precacheNode:G,uncacheNode:X},Il=Sl,Ol={Properties:{
// Global States and Properties
"aria-current":0,// state
"aria-details":0,"aria-disabled":0,// state
"aria-hidden":0,// state
"aria-invalid":0,// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,
// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,
// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,
// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,
// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},DOMAttributeNames:{},DOMPropertyNames:{}},Pl=Ol,Nl=oi,xl=null,Ml={},Dl={/**
	   * Ordered list of injected plugins.
	   */
plugins:[],/**
	   * Mapping from event name to dispatch config
	   */
eventNameDispatchConfigs:{},/**
	   * Mapping from registration name to plugin module
	   */
registrationNameModules:{},/**
	   * Mapping from registration name to event name
	   */
registrationNameDependencies:{},/**
	   * Mapping from lowercase registration names to the properly cased version,
	   * used to warn in the case of missing event handlers. Available
	   * only in __DEV__.
	   * @type {Object}
	   */
possibleRegistrationNames:{},
// Trust the developer to only use possibleRegistrationNames in __DEV__
/**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
injectEventPluginOrder:function(e){xl&&Nl(!1,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."),
// Clone the ordering so it cannot be dynamically mutated.
xl=Array.prototype.slice.call(e),ee()},/**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];Ml.hasOwnProperty(n)&&Ml[n]===o||(Ml[n]&&Nl(!1,"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",n),Ml[n]=o,t=!0)}t&&ee()},/**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return Dl.registrationNameModules[t.registrationName]||null;if(t.phasedRegistrationNames!==undefined){
// pulling phasedRegistrationNames out of dispatchConfig helps Flow see
// that it is not undefined.
var n=t.phasedRegistrationNames;for(var o in n)if(n.hasOwnProperty(o)){var r=Dl.registrationNameModules[n[o]];if(r)return r}}return null},/**
	   * Exposed for unit testing.
	   * @private
	   */
_resetEventPlugins:function(){xl=null;for(var e in Ml)Ml.hasOwnProperty(e)&&delete Ml[e];Dl.plugins.length=0;var t=Dl.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var o=Dl.registrationNameModules;for(var r in o)o.hasOwnProperty(r)&&delete o[r];var a=Dl.possibleRegistrationNames;for(var i in a)a.hasOwnProperty(i)&&delete a[i]}},Rl=Dl,Al=null,Ul={invokeGuardedCallback:oe,/**
	   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
	   * handler are sure to be rethrown by rethrowCaughtError.
	   */
invokeGuardedCallbackWithCatch:oe,/**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
rethrowCaughtError:function(){if(Al){var e=Al;throw Al=null,e}}};/**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
if("undefined"!=typeof window&&"function"==typeof window.dispatchEvent&&"undefined"!=typeof document&&"function"==typeof document.createEvent){var jl=document.createElement("react");Ul.invokeGuardedCallback=function(e,t,n){var o=function(){t(n)},r="react-"+e;jl.addEventListener(r,o,!1);var a=document.createEvent("Event");a.initEvent(r,!1,!1),jl.dispatchEvent(a),jl.removeEventListener(r,o,!1)}}var Ll,Fl,Bl,Hl=Ul,Wl=Hl,Vl=oi,ql=Ka,Yl={injectComponentTree:function(e){Ll=e,ql(e&&e.getNodeFromInstance&&e.getInstanceFromNode,"EventPluginUtils.injection.injectComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.")},injectTreeTraversal:function(e){Fl=e,ql(e&&e.isAncestor&&e.getLowestCommonAncestor,"EventPluginUtils.injection.injectTreeTraversal(...): Injected module is missing isAncestor or getLowestCommonAncestor.")}};Bl=function(e){var t=e._dispatchListeners,n=e._dispatchInstances,o=Array.isArray(t),r=o?t.length:t?1:0,a=Array.isArray(n),i=a?n.length:n?1:0;ql(a===o&&i===r,"EventPluginUtils: Invalid `event`.")};/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
var zl={isEndish:re,isMoveish:ae,isStartish:ie,executeDirectDispatch:pe,executeDispatchesInOrder:ue,executeDispatchesInOrderStopAtTrue:ce,hasDispatches:de,getInstanceFromNode:function(e){return Ll.getInstanceFromNode(e)},getNodeFromInstance:function(e){return Ll.getNodeFromInstance(e)},isAncestor:function(e,t){return Fl.isAncestor(e,t)},getLowestCommonAncestor:function(e,t){return Fl.getLowestCommonAncestor(e,t)},getParentInstance:function(e){return Fl.getParentInstance(e)},traverseTwoPhase:function(e,t,n){return Fl.traverseTwoPhase(e,t,n)},traverseEnterLeave:function(e,t,n,o,r){return Fl.traverseEnterLeave(e,t,n,o,r)},injection:Yl},Kl=zl,Gl=oi,Xl=fe,$l=he,Ql=Rl,Jl=Kl,Zl=Hl,ec=Xl,tc=$l,nc=oi,oc={},rc=null,ac=function(e,t){e&&(Jl.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},ic=function(e){return ac(e,!0)},sc=function(e){return ac(e,!1)},uc=function(e){
// Prevents V8 performance issue:
// https://github.com/facebook/react/pull/7232
return"."+e._rootNodeID},lc={/**
	   * Methods for injecting dependencies.
	   */
injection:{/**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
injectEventPluginOrder:Ql.injectEventPluginOrder,/**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
injectEventPluginsByName:Ql.injectEventPluginsByName},/**
	   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
	   *
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {function} listener The callback to store.
	   */
putListener:function(e,t,n){"function"!=typeof n&&nc(!1,"Expected %s listener to be a function, instead got type %s",t,typeof n);var o=uc(e);(oc[t]||(oc[t]={}))[o]=n;var r=Ql.registrationNameModules[t];r&&r.didPutListener&&r.didPutListener(e,t,n)},/**
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
getListener:function(e,t){
// TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
// live here; needs to be moved to a better place soon
var n=oc[t];if(ge(t,e._currentElement.type,e._currentElement.props))return null;var o=uc(e);return n&&n[o]},/**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
deleteListener:function(e,t){var n=Ql.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var o=oc[t];
// TODO: This should never be null -- when is it?
if(o){delete o[uc(e)]}},/**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {object} inst The instance, which is the source of events.
	   */
deleteAllListeners:function(e){var t=uc(e);for(var n in oc)if(oc.hasOwnProperty(n)&&oc[n][t]){var o=Ql.registrationNameModules[n];o&&o.willDeleteListener&&o.willDeleteListener(e,n),delete oc[n][t]}},/**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
extractEvents:function(e,t,n,o){for(var r,a=Ql.plugins,i=0;i<a.length;i++){
// Not every plugin in the ordering may be loaded at runtime.
var s=a[i];if(s){var u=s.extractEvents(e,t,n,o);u&&(r=ec(r,u))}}return r},/**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
enqueueEvents:function(e){e&&(rc=ec(rc,e))},/**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
processEventQueue:function(e){
// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var t=rc;rc=null,e?tc(t,ic):tc(t,sc),rc&&nc(!1,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."),
// This would be a good time to rethrow if any of the event handlers threw.
Zl.rethrowCaughtError()},/**
	   * These are needed for tests only. Do not use!
	   */
__purge:function(){oc={}},__getListenerBank:function(){return oc}},cc=lc,pc=cc,dc=Kl,fc=Xl,hc=$l,mc=Ka,gc=pc.getListener,yc={accumulateTwoPhaseDispatches:Ee,accumulateTwoPhaseDispatchesSkipTarget:ke,accumulateDirectDispatches:Se,accumulateEnterLeaveDispatches:Te},vc=yc,bc=!("undefined"==typeof window||!window.document||!window.document.createElement),_c={canUseDOM:bc,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:bc&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:bc&&!!window.screen,isInWorker:!bc},Cc=_c,wc=oi,Ec=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},kc=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},Tc=function(e,t,n){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n),r}return new o(e,t,n)},Sc=function(e,t,n,o){var r=this;if(r.instancePool.length){var a=r.instancePool.pop();return r.call(a,e,t,n,o),a}return new r(e,t,n,o)},Ic=function(e){var t=this;e instanceof t||wc(!1,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},Oc=Ec,Pc=function(e,t){
// Casting as any so that flow ignores the actual implementation and trusts
// it to match the type we declared
var n=e;return n.instancePool=[],n.getPooled=t||Oc,n.poolSize||(n.poolSize=10),n.release=Ic,n},Nc={addPoolingTo:Pc,oneArgumentPooler:Ec,twoArgumentPooler:kc,threeArgumentPooler:Tc,fourArgumentPooler:Sc},xc=Nc,Mc=Cc,Dc=null,Rc=Ie,Ac=Ha,Uc=xc,jc=Rc;Ac(Oe.prototype,{destructor:function(){this._root=null,this._startText=null,this._fallbackText=null},/**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
getText:function(){return"value"in this._root?this._root.value:this._root[jc()]},/**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,o=n.length,r=this.getText(),a=r.length;for(e=0;e<o&&n[e]===r[e];e++);var i=o-e;for(t=1;t<=i&&n[o-t]===r[a-t];t++);var s=t>1?1-t:undefined;return this._fallbackText=r.slice(e,s),this._fallbackText}}),Uc.addPoolingTo(Oe);var Lc=Oe,Fc=Ha,Bc=xc,Hc=Va,Wc=Ka,Vc=!1,qc="function"==typeof Proxy,Yc=["dispatchConfig","_targetInst","nativeEvent","isDefaultPrevented","isPropagationStopped","_dispatchListeners","_dispatchInstances"],zc={type:null,target:null,
// currentTarget is set when dispatching; no use in copying it here
currentTarget:Hc.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};Fc(Pe.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Hc.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(
// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
e.cancelBubble=!0),this.isPropagationStopped=Hc.thatReturnsTrue)},/**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
persist:function(){this.isPersistent=Hc.thatReturnsTrue},/**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
isPersistent:Hc.thatReturnsFalse,/**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
destructor:function(){var e=this.constructor.Interface;for(var t in e)Object.defineProperty(this,t,Ne(t,e[t]));for(var n=0;n<Yc.length;n++)this[Yc[n]]=null;Object.defineProperty(this,"nativeEvent",Ne("nativeEvent",null)),Object.defineProperty(this,"preventDefault",Ne("preventDefault",Hc)),Object.defineProperty(this,"stopPropagation",Ne("stopPropagation",Hc))}}),Pe.Interface=zc,/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
Pe.augmentClass=function(e,t){var n=this,o=function(){};o.prototype=n.prototype;var r=new o;Fc(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=Fc({},n.Interface,t),e.augmentClass=n.augmentClass,Bc.addPoolingTo(e,Bc.fourArgumentPooler)},qc&&(/*eslint-disable no-func-assign */
Pe=new Proxy(Pe,{construct:function(e,t){return this.apply(e,Object.create(e.prototype),t)},apply:function(e,t,n){return new Proxy(e.apply(t,n),{set:function(e,t,n){return"isPersistent"===t||e.constructor.Interface.hasOwnProperty(t)||-1!==Yc.indexOf(t)||(Wc(Vc||e.isPersistent(),"This synthetic event is reused for performance reasons. If you're seeing this, you're adding a new property in the synthetic event object. The property is never released. See https://fb.me/react-event-pooling for more information."),Vc=!0),e[t]=n,!0}})}})),Bc.addPoolingTo(Pe,Bc.fourArgumentPooler);var Kc=Pe,Gc=Kc,Xc={data:null};Gc.augmentClass(xe,Xc);var $c=xe,Qc=Kc,Jc={data:null};Qc.augmentClass(Me,Jc);var Zc=Me,ep=vc,tp=Cc,np=Lc,op=$c,rp=Zc,ap=[9,13,27,32],ip=229,sp=tp.canUseDOM&&"CompositionEvent"in window,up=null;tp.canUseDOM&&"documentMode"in document&&(up=document.documentMode);
// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var lp=tp.canUseDOM&&"TextEvent"in window&&!up&&!/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
function(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}(),cp=tp.canUseDOM&&(!sp||up&&up>8&&up<=11),pp=32,dp=String.fromCharCode(pp),fp={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:["topBlur","topCompositionEnd","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:["topBlur","topCompositionStart","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:["topBlur","topCompositionUpdate","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]}},hp=!1,mp=null,gp={eventTypes:fp,extractEvents:function(e,t,n,o){return[Le(e,t,n,o),He(e,t,n,o)]}},yp=gp,vp=xc,bp=oi,_p=function(){function e(t){We(this,e),this._callbacks=null,this._contexts=null,this._arg=t}/**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
/**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
/**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
/**
	   * `PooledClass` looks for this.
	   */
return e.prototype.enqueue=function(e,t){this._callbacks=this._callbacks||[],this._callbacks.push(e),this._contexts=this._contexts||[],this._contexts.push(t)},e.prototype.notifyAll=function(){var e=this._callbacks,t=this._contexts,n=this._arg;if(e&&t){e.length!==t.length&&bp(!1,"Mismatched list of contexts in callback queue"),this._callbacks=null,this._contexts=null;for(var o=0;o<e.length;o++)e[o].call(t[o],n);e.length=0,t.length=0}},e.prototype.checkpoint=function(){return this._callbacks?this._callbacks.length:0},e.prototype.rollback=function(e){this._callbacks&&this._contexts&&(this._callbacks.length=e,this._contexts.length=e)},e.prototype.reset=function(){this._callbacks=null,this._contexts=null},e.prototype.destructor=function(){this.reset()},e}(),Cp=vp.addPoolingTo(_p),wp={
// When true, call console.time() before and .timeEnd() after each top-level
// render (both initial renders and updates). Useful when looking at prod-mode
// timeline profiles in Chrome, for example.
logTopLevelRenders:!1},Ep=wp,kp=oi,Tp={/**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
addComponentAsRefTo:function(e,t,n){Ve(n)||kp(!1,"addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner)."),n.attachRef(t,e)},/**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
removeComponentAsRefFrom:function(e,t,n){Ve(n)||kp(!1,"removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).");var o=n.getPublicInstance();
// Check that `component`'s owner is still alive and that `component` is still the current ref
// because we do not want to detach the ref if another component stole it.
o&&o.refs[t]===e.getPublicInstance()&&n.detachRef(t)}},Sp=Tp,Ip=Sp,Op={};Op.attachRefs=function(e,t){if(null!==t&&"object"==typeof t){var n=t.ref;null!=n&&qe(n,e,t._owner)}},Op.shouldUpdateRefs=function(e,t){
// If either the owner or a `ref` has changed, make sure the newest owner
// has stored a reference to `this`, and the previous owner (if different)
// has forgotten the reference to `this`. We use the element instead
// of the public this.props because the post processing cannot determine
// a ref. The ref conceptually lives on the element.
// TODO: Should this even be possible? The owner cannot change because
// it's forbidden by shouldUpdateReactComponent. The ref can change
// if you swap the keys of but not the refs. Reconsider where this check
// is made. It probably belongs where the key checking and
// instantiateReactComponent is done.
var n=null,o=null;null!==e&&"object"==typeof e&&(n=e.ref,o=e._owner);var r=null,a=null;
// If owner changes but we have an unchanged function ref, don't update refs
return null!==t&&"object"==typeof t&&(r=t.ref,a=t._owner),n!==r||"string"==typeof r&&a!==o},Op.detachRefs=function(e,t){if(null!==t&&"object"==typeof t){var n=t.ref;null!=n&&Ye(n,e,t._owner)}};var Pp,Np=Op,xp=/*#__PURE__*/Object.freeze({default:Np,__moduleExports:Np}),Mp=Ka,Dp=!1,Rp=function(){Mp(!Dp,"setState(...): Cannot call setState() inside getChildContext()")},Ap={onBeginProcessingChildContext:function(){Dp=!0},onEndProcessingChildContext:function(){Dp=!1},onSetState:function(){Rp()}},Up=Ap,jp=[],Lp={onHostOperation:function(e){jp.push(e)},clearHistory:function(){Lp._preventClearing||(jp=[])},getHistory:function(){return jp}},Fp=Lp,Bp=Cc;Bp.canUseDOM&&(Pp=window.performance||window.msPerformance||window.webkitPerformance);var Hp,Wp=Pp||{},Vp=Wp;/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
Hp=Vp.now?function(){return Vp.now()}:function(){return Date.now()};var qp=Hp,Yp=/*#__PURE__*/Object.freeze({default:qp,__moduleExports:qp}),zp=Yp&&qp||Yp,Kp=Up,Gp=Fp,Xp=Us,$p=Cc,Qp=zp,Jp=Ka,Zp=[],ed={},td=!1,nd=[],od=[],rd=0,ad=[],id=0,sd=null,ud=0,ld=0,cd=null,pd=!1,dd=0,fd="undefined"!=typeof performance&&"function"==typeof performance.mark&&"function"==typeof performance.clearMarks&&"function"==typeof performance.measure&&"function"==typeof performance.clearMeasures,hd={addHook:function(e){Zp.push(e)},removeHook:function(e){for(var t=0;t<Zp.length;t++)Zp[t]===e&&(Zp.splice(t,1),t--)},isProfiling:function(){return td},beginProfiling:function(){td||(td=!0,nd.length=0,$e(),hd.addHook(Gp))},endProfiling:function(){td&&(td=!1,$e(),hd.removeHook(Gp))},getFlushHistory:function(){return nd},onBeginFlush:function(){rd++,$e(),et(),Ke("onBeginFlush")},onEndFlush:function(){$e(),rd--,tt(),Ke("onEndFlush")},onBeginLifeCycleTimer:function(e,t){Qe(e),Ke("onBeginLifeCycleTimer",e,t),ot(e,t),Je(e,t)},onEndLifeCycleTimer:function(e,t){Qe(e),Ze(e,t),rt(e,t),Ke("onEndLifeCycleTimer",e,t)},onBeginProcessingChildContext:function(){Ke("onBeginProcessingChildContext")},onEndProcessingChildContext:function(){Ke("onEndProcessingChildContext")},onHostOperation:function(e){Qe(e.instanceID),Ke("onHostOperation",e)},onSetState:function(){Ke("onSetState")},onSetChildren:function(e,t){Qe(e),t.forEach(Qe),Ke("onSetChildren",e,t)},onBeforeMountComponent:function(e,t,n){Qe(e),Qe(n,!0),Ke("onBeforeMountComponent",e,t,n),ot(e,"mount")},onMountComponent:function(e){Qe(e),rt(e,"mount"),Ke("onMountComponent",e)},onBeforeUpdateComponent:function(e,t){Qe(e),Ke("onBeforeUpdateComponent",e,t),ot(e,"update")},onUpdateComponent:function(e){Qe(e),rt(e,"update"),Ke("onUpdateComponent",e)},onBeforeUnmountComponent:function(e){Qe(e),Ke("onBeforeUnmountComponent",e),ot(e,"unmount")},onUnmountComponent:function(e){Qe(e),rt(e,"unmount"),Ke("onUnmountComponent",e)},onTestEvent:function(){Ke("onTestEvent")}};
// TODO remove these when RN/www gets updated
hd.addDevtool=hd.addHook,hd.removeDevtool=hd.removeHook,hd.addHook(Kp),hd.addHook(Xp),/[?&]react_perf\b/.test($p.canUseDOM&&window.location.href||"")&&hd.beginProfiling();var md=hd,gd=null;gd=md;var yd={debugTool:gd},vd=xp&&Np||xp,bd=vd,_d=yd,Cd=Ka,wd={/**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {?object} the containing host component instance
	   * @param {?object} info about the host container
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
mountComponent:function(e,t,n,o,r,a){0!==e._debugID&&_d.debugTool.onBeforeMountComponent(e._debugID,e._currentElement,a);var i=e.mountComponent(t,n,o,r,a);return e._currentElement&&null!=e._currentElement.ref&&t.getReactMountReady().enqueue(at,e),0!==e._debugID&&_d.debugTool.onMountComponent(e._debugID),i},/**
	   * Returns a value that can be passed to
	   * ReactComponentEnvironment.replaceNodeWithMarkup.
	   */
getHostNode:function(e){return e.getHostNode()},/**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
unmountComponent:function(e,t){0!==e._debugID&&_d.debugTool.onBeforeUnmountComponent(e._debugID),bd.detachRefs(e,e._currentElement),e.unmountComponent(t),0!==e._debugID&&_d.debugTool.onUnmountComponent(e._debugID)},/**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
receiveComponent:function(e,t,n,o){var r=e._currentElement;if(t!==r||o!==e._context){0!==e._debugID&&_d.debugTool.onBeforeUpdateComponent(e._debugID,t);var a=bd.shouldUpdateRefs(r,t);a&&bd.detachRefs(e,r),e.receiveComponent(t,n,o),a&&e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(at,e),0!==e._debugID&&_d.debugTool.onUpdateComponent(e._debugID)}},/**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
performUpdateIfNecessary:function(e,t,n){if(e._updateBatchNumber!==n)
// The component's enqueued batch number should always be the current
// batch or the following one.
return void Cd(null==e._updateBatchNumber||e._updateBatchNumber===n+1,"performUpdateIfNecessary: Unexpected batch number (current %s, pending %s)",n,e._updateBatchNumber);0!==e._debugID&&_d.debugTool.onBeforeUpdateComponent(e._debugID,e._currentElement),e.performUpdateIfNecessary(t),0!==e._debugID&&_d.debugTool.onUpdateComponent(e._debugID)}},Ed=wd,kd=oi,Td={},Sd={/**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,/**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},/* eslint-disable space-before-function-paren */
/**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked. The optional arguments helps prevent the need
	   * to bind in many cases.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} a Argument to pass to the method.
	   * @param {Object?=} b Argument to pass to the method.
	   * @param {Object?=} c Argument to pass to the method.
	   * @param {Object?=} d Argument to pass to the method.
	   * @param {Object?=} e Argument to pass to the method.
	   * @param {Object?=} f Argument to pass to the method.
	   *
	   * @return {*} Return value from `method`.
	   */
perform:function(e,t,n,o,r,a,i,s){/* eslint-enable space-before-function-paren */
this.isInTransaction()&&kd(!1,"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.");var u,l;try{this._isInTransaction=!0,
// Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// one of these calls threw.
u=!0,this.initializeAll(0),l=e.call(t,n,o,r,a,i,s),u=!1}finally{try{if(u)
// If `method` throws, prefer to show that stack trace over any thrown
// by invoking `closeAll`.
try{this.closeAll(0)}catch(e){}else
// Since `method` didn't throw, we don't want to silence the exception
// here.
this.closeAll(0)}finally{this._isInTransaction=!1}}return l},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o=t[n];try{
// Catching errors makes debugging more difficult, so we start with the
// OBSERVED_ERROR state before overwriting it with the real return value
// of initialize -- if it's still set to OBSERVED_ERROR in the finally
// block, it means wrapper.initialize threw.
this.wrapperInitData[n]=Td,this.wrapperInitData[n]=o.initialize?o.initialize.call(this):null}finally{if(this.wrapperInitData[n]===Td)
// The initializer for wrapper i threw an error; initialize the
// remaining wrappers but silence any exceptions from them to ensure
// that the first error is the one to bubble up.
try{this.initializeAll(n+1)}catch(e){}}}},/**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
closeAll:function(e){this.isInTransaction()||kd(!1,"Transaction.closeAll(): Cannot close transaction when none are open.");for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,r=t[n],a=this.wrapperInitData[n];try{
// Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// wrapper.close threw.
o=!0,a!==Td&&r.close&&r.close.call(this,a),o=!1}finally{if(o)
// The closer for wrapper i threw an error; close the remaining
// wrappers but silence any exceptions from them to ensure that the
// first error is the one to bubble up.
try{this.closeAll(n+1)}catch(e){}}}this.wrapperInitData.length=0}},Id=Sd,Od=Ha,Pd=Cp,Nd=xc,xd=Ep,Md=Ed,Dd=Id,Rd=oi,Ad=[],Ud=0,jd=Pd.getPooled(),Ld=!1,Fd=null,Bd={initialize:function(){this.dirtyComponentsLength=Ad.length},close:function(){this.dirtyComponentsLength!==Ad.length?(
// Additional updates were enqueued by componentDidUpdate handlers or
// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
// these new updates so that if A's componentDidUpdate calls setState on
// B, B will update before the callback A's updater provided when calling
// setState.
Ad.splice(0,this.dirtyComponentsLength),qd()):Ad.length=0}},Hd={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},Wd=[Bd,Hd];Od(st.prototype,Dd,{getTransactionWrappers:function(){return Wd},destructor:function(){this.dirtyComponentsLength=null,Pd.release(this.callbackQueue),this.callbackQueue=null,zd.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){
// Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
// with this transaction's wrappers around it.
return Dd.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),Nd.addPoolingTo(st);var Vd,qd=function(){
// ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
// array and perform any updates enqueued by mount-ready handlers (i.e.,
// componentDidUpdate) but we need to check here too in order to catch
// updates enqueued by setState callbacks and asap calls.
for(;Ad.length||Ld;){if(Ad.length){var e=st.getPooled();e.perform(ct,null,e),st.release(e)}if(Ld){Ld=!1;var t=jd;jd=Pd.getPooled(),t.notifyAll(),Pd.release(t)}}},Yd={injectReconcileTransaction:function(e){e||Rd(!1,"ReactUpdates: must provide a reconcile transaction class"),zd.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){e||Rd(!1,"ReactUpdates: must provide a batching strategy"),"function"!=typeof e.batchedUpdates&&Rd(!1,"ReactUpdates: must provide a batchedUpdates() function"),"boolean"!=typeof e.isBatchingUpdates&&Rd(!1,"ReactUpdates: must provide an isBatchingUpdates boolean attribute"),Fd=e}},zd={/**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
ReactReconcileTransaction:null,batchedUpdates:ut,enqueueUpdate:pt,flushBatchedUpdates:qd,injection:Yd,asap:dt},Kd=zd,Gd=Il,Xd={
// exposed for testing
_getTrackerFromNode:function(e){return ht(Gd.getInstanceFromNode(e))},track:function(e){if(!ht(e)){var t=Gd.getNodeFromInstance(e),n=ft(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),r=""+t[n];
// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
t.hasOwnProperty(n)||"function"!=typeof o.get||"function"!=typeof o.set||(Object.defineProperty(t,n,{enumerable:o.enumerable,configurable:!0,get:function(){return o.get.call(this)},set:function(e){r=""+e,o.set.call(this,e)}}),mt(e,{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){gt(e),delete t[n]}}))}},updateValueIfChanged:function(e){if(!e)return!1;var t=ht(e);if(!t)return Xd.track(e),!0;var n=t.getValue(),o=yt(Gd.getNodeFromInstance(e));return o!==n&&(t.setValue(o),!0)},stopTracking:function(e){var t=ht(e);t&&t.stopTracking()}},$d=Xd,Qd=vt,Jd=Cc;Jd.canUseDOM&&(Vd=document.implementation&&document.implementation.hasFeature&&
// always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
!0!==document.implementation.hasFeature("",""));var Zd=bt,ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},tf=_t,nf=cc,of=vc,rf=Cc,af=Il,sf=Kd,uf=Kc,lf=$d,cf=Qd,pf=Zd,df=tf,ff={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:["topBlur","topChange","topClick","topFocus","topInput","topKeyDown","topKeyUp","topSelectionChange"]}},hf=null,mf=null,gf=!1;rf.canUseDOM&&(
// See `handleChange` comment below
gf=pf("change")&&(!document.documentMode||document.documentMode>8));/**
	 * SECTION: handle `input` event
	 */
var yf=!1;rf.canUseDOM&&(
// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
yf=pf("input")&&(!document.documentMode||document.documentMode>9));/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
var vf={eventTypes:ff,_allowSimulatedPassThrough:!0,_isInputEventSupported:yf,extractEvents:function(e,t,n,o){var r,a,i=t?af.getNodeFromInstance(t):window;if(wt(i)?gf?r=Ot:a=Pt:df(i)?yf?r=jt:(r=Rt,a=Dt):At(i)&&(r=Ut),r){var s=r(e,t,n);if(s){return Ct(s,n,o)}}a&&a(e,i,t),
// When blurring, set the value attribute for number inputs
"topBlur"===e&&Lt(t,i)}},bf=vf,_f=/*#__PURE__*/Object.freeze({default:bf,__moduleExports:bf}),Cf=["ResponderEventPlugin","SimpleEventPlugin","TapEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin"],wf=Cf,Ef=Kc,kf=Qd,Tf={view:function(e){if(e.view)return e.view;var t=kf(e);if(t.window===t)
// target is a window object
return t;var n=t.ownerDocument;
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};Ef.augmentClass(Ft,Tf);var Sf=Ft,If={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){If.currentScrollLeft=e.x,If.currentScrollTop=e.y}},Of=If,Pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Nf=Ht,xf=Sf,Mf=Of,Df=Nf,Rf={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Df,button:function(e){
// Webkit, Firefox, IE9+
// which:  1 2 3
// button: 0 1 2 (standard)
var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},
// "Proprietary" Interface.
pageX:function(e){return"pageX"in e?e.pageX:e.clientX+Mf.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+Mf.currentScrollTop}};xf.augmentClass(Wt,Rf);var Af,Uf=Wt,jf=vc,Lf=Il,Ff=Uf,Bf={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},Hf={eventTypes:Bf,/**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   */
extractEvents:function(e,t,n,o){if("topMouseOver"===e&&(n.relatedTarget||n.fromElement))return null;if("topMouseOut"!==e&&"topMouseOver"!==e)
// Must not be a mouse in or mouse out - ignoring.
return null;var r;if(o.window===o)
// `nativeEventTarget` is probably a window object.
r=o;else{
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var a=o.ownerDocument;r=a?a.defaultView||a.parentWindow:window}var i,s;if("topMouseOut"===e){i=t;var u=n.relatedTarget||n.toElement;s=u?Lf.getClosestInstanceFromNode(u):null}else
// Moving to a node from outside the window.
i=null,s=t;if(i===s)
// Nothing pertains to our managed components.
return null;var l=null==i?r:Lf.getNodeFromInstance(i),c=null==s?r:Lf.getNodeFromInstance(s),p=Ff.getPooled(Bf.mouseLeave,i,n,o);p.type="mouseleave",p.target=l,p.relatedTarget=c;var d=Ff.getPooled(Bf.mouseEnter,s,n,o);return d.type="mouseenter",d.target=c,d.relatedTarget=l,jf.accumulateEnterLeaveDispatches(p,d,i,s),[p,d]}},Wf=Hf,Vf=yl,qf=Vf.injection.MUST_USE_PROPERTY,Yf=Vf.injection.HAS_BOOLEAN_VALUE,zf=Vf.injection.HAS_NUMERIC_VALUE,Kf=Vf.injection.HAS_POSITIVE_NUMERIC_VALUE,Gf=Vf.injection.HAS_OVERLOADED_BOOLEAN_VALUE,Xf={isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Vf.ATTRIBUTE_NAME_CHAR+"]*$")),Properties:{/**
	     * Standard Properties
	     */
accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:Yf,allowTransparency:0,alt:0,
// specifies target context for links with `preload` type
as:0,async:Yf,autoComplete:0,
// autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:Yf,capture:Yf,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:qf|Yf,cite:0,classID:0,className:0,cols:Kf,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:Yf,controlsList:0,coords:0,crossOrigin:0,data:0,// For `<object />` acts as `src`.
dateTime:0,default:Yf,defer:Yf,dir:0,disabled:Yf,download:Gf,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:Yf,formTarget:0,frameBorder:0,headers:0,height:0,hidden:Yf,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:Yf,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,
// Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
multiple:qf|Yf,muted:qf|Yf,name:0,nonce:0,noValidate:Yf,open:Yf,optimum:0,pattern:0,placeholder:0,playsInline:Yf,poster:0,preload:0,profile:0,radioGroup:0,readOnly:Yf,referrerPolicy:0,rel:0,required:Yf,reversed:Yf,role:0,rows:Kf,rowSpan:zf,sandbox:0,scope:0,scoped:Yf,scrolling:0,seamless:Yf,selected:qf|Yf,shape:0,size:Kf,sizes:0,span:Kf,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:zf,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,
// Setting .type throws on non-<input> tags
type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,/**
	     * RDFa Properties
	     */
about:0,datatype:0,inlist:0,prefix:0,
// property is also supported for OpenGraph in meta tags.
property:0,resource:0,typeof:0,vocab:0,/**
	     * Non-standard Properties
	     */
// autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
autoCapitalize:0,autoCorrect:0,
// autoSave allows WebKit/Blink to persist values of input fields on page reloads
autoSave:0,
// color is for Safari mask-icon link
color:0,
// itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
itemProp:0,itemScope:Yf,itemType:0,
// itemID and itemRef are for Microdata support as well but
// only specified in the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
itemID:0,itemRef:0,
// results show looking glass icon and recent searches on input
// search fields in WebKit/Blink
results:0,
// IE-only attribute that specifies security restrictions on an iframe
// as an alternative to the sandbox attribute on IE<10
security:0,
// IE-only attribute that controls focus behavior
unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");
// Number inputs get special treatment due to some edge cases in
// Chrome. Let everything else assign the value attribute as normal.
// https://github.com/facebook/react/issues/7253#issuecomment-236074326
"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&
// Don't assign an attribute if validation reports bad
// input. Chrome will clear the value. Additionally, don't
// operate on inputs that have focus, otherwise Chrome might
// strip off trailing decimal places and cause the user's
// cursor position to jump to the beginning of the input.
//
// In ReactDOMInput, we have an onBlur event that will trigger
// this function again when focus is lost.
e.setAttribute("value",""+t)}}},$f=Xf,Qf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},Jf=Qf,Zf=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e},eh=Zf,th=Cc,nh=Jf,oh=/^[ \r\n\t\f]/,rh=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,ah=eh,ih=ah(function(e,t){
// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
if(e.namespaceURI!==nh.svg||"innerHTML"in e)e.innerHTML=t;else{Af=Af||document.createElement("div"),Af.innerHTML="<svg>"+t+"</svg>";for(var n=Af.firstChild;n.firstChild;)e.appendChild(n.firstChild)}});if(th.canUseDOM){
// IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
// Feature detection; only IE8 is known to behave improperly like this.
var sh=document.createElement("div");sh.innerHTML=" ",""===sh.innerHTML&&(ih=function(e,t){
// We also implement a workaround for non-visible tags disappearing into
// thin air on IE8, this only happens if there is no visible text
// in-front of the non-visible tags. Piggyback on the whitespace fix
// and simply check if any non-visible tags appear in the source.
if(
// Magic theory: IE8 supposedly differentiates between added and updated
// nodes when processing innerHTML, innerHTML on updated nodes suffers
// from worse whitespace behavior. Re-adding a node like this triggers
// the initial and more favorable whitespace behavior.
// TODO: What to do on a detached node?
e.parentNode&&e.parentNode.replaceChild(e,e),oh.test(t)||"<"===t[0]&&rh.test(t)){
// Recover leading whitespace by temporarily prepending any character.
// \uFEFF has the potential advantage of being zero-width/invisible.
// UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
// in hopes that this is preserved even if "\uFEFF" is transformed to
// the actual Unicode character (by Babel, for example).
// https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
e.innerHTML=String.fromCharCode(65279)+t;
// deleteData leaves an empty `TextNode` which offsets the index of all
// children. Definitely want to avoid this.
var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t}),sh=null}var uh=ih,lh=/["'&<>]/,ch=qt,ph=Cc,dh=ch,fh=uh,hh=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t};ph.canUseDOM&&("textContent"in document.documentElement||(hh=function(e,t){if(3===e.nodeType)return void(e.nodeValue=t);fh(e,dh(t))}));var mh=hh,gh=Jf,yh=uh,vh=eh,bh=mh,_h="undefined"!=typeof document&&"number"==typeof document.documentMode||"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent&&/\bEdge\/\d/.test(navigator.userAgent),Ch=vh(function(e,t,n){
// DocumentFragments aren't actually part of the DOM after insertion so
// appending children won't update the DOM. We need to ensure the fragment
// is properly populated first, breaking out of our lazy approach for just
// this level. Also, some <object> plugins (like Flash Player) will read
// <param> nodes immediately upon insertion into the DOM, so <object>
// must also be populated prior to insertion into the DOM.
11===t.node.nodeType||1===t.node.nodeType&&"object"===t.node.nodeName.toLowerCase()&&(null==t.node.namespaceURI||t.node.namespaceURI===gh.html)?(Yt(t),e.insertBefore(t.node,n)):(e.insertBefore(t.node,n),Yt(t))});Qt.insertTreeBefore=Ch,Qt.replaceChildWithTree=zt,Qt.queueChild=Kt,Qt.queueHTML=Gt,Qt.queueText=Xt;var wh=Qt,Eh=oi,kh=en,Th=Cc,Sh=oi,Ih=Th.canUseDOM?document.createElement("div"):null,Oh={},Ph=[1,'<select multiple="true">',"</select>"],Nh=[1,"<table>","</table>"],xh=[3,"<table><tbody><tr>","</tr></tbody></table>"],Mh=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],Dh={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:Ph,option:Ph,caption:Nh,colgroup:Nh,tbody:Nh,tfoot:Nh,thead:Nh,td:xh,th:xh};["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"].forEach(function(e){Dh[e]=Mh,Oh[e]=!0});var Rh=tn,Ah=Cc,Uh=kh,jh=Rh,Lh=oi,Fh=Ah.canUseDOM?document.createElement("div"):null,Bh=/^\s*<(\w+)/,Hh=on,Wh=wh,Vh=Cc,qh=Hh,Yh=Va,zh=oi,Kh={/**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
dangerouslyReplaceNodeWithMarkup:function(e,t){if(Vh.canUseDOM||zh(!1,"dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering."),t||zh(!1,"dangerouslyReplaceNodeWithMarkup(...): Missing markup."),"HTML"===e.nodeName&&zh(!1,"dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString()."),"string"==typeof t){var n=qh(t,Yh)[0];e.parentNode.replaceChild(n,e)}else Wh.replaceChildWithTree(e,t)}},Gh=Kh,Xh=wh,$h=Gh,Qh=Il,Jh=yd,Zh=eh,em=uh,tm=mh,nm=Zh(function(e,t,n){
// We rely exclusively on `insertBefore(node, null)` instead of also using
// `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
// we are careful to use `null`.)
e.insertBefore(t,n)}),om=$h.dangerouslyReplaceNodeWithMarkup;om=function(e,t,n){if($h.dangerouslyReplaceNodeWithMarkup(e,t),0!==n._debugID)Jh.debugTool.onHostOperation({instanceID:n._debugID,type:"replace with",payload:t.toString()});else{var o=Qh.getInstanceFromNode(t.node);0!==o._debugID&&Jh.debugTool.onHostOperation({instanceID:o._debugID,type:"mount",payload:t.toString()})}};/**
	 * Operations for updating with DOM children.
	 */
var rm={dangerouslyReplaceNodeWithMarkup:om,replaceDelimitedText:pn,/**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @internal
	   */
processUpdates:function(e,t){for(var n=Qh.getInstanceFromNode(e)._debugID,o=0;o<t.length;o++){var r=t[o];switch(r.type){case"INSERT_MARKUP":an(e,r.content,rn(e,r.afterNode)),Jh.debugTool.onHostOperation({instanceID:n,type:"insert child",payload:{toIndex:r.toIndex,content:r.content.toString()}});break;case"MOVE_EXISTING":sn(e,r.fromNode,rn(e,r.afterNode)),Jh.debugTool.onHostOperation({instanceID:n,type:"move child",payload:{fromIndex:r.fromIndex,toIndex:r.toIndex}});break;case"SET_MARKUP":em(e,r.content),Jh.debugTool.onHostOperation({instanceID:n,type:"replace children",payload:r.content.toString()});break;case"TEXT_CONTENT":tm(e,r.content),Jh.debugTool.onHostOperation({instanceID:n,type:"replace text",payload:r.content.toString()});break;case"REMOVE_NODE":un(e,r.fromNode),Jh.debugTool.onHostOperation({instanceID:n,type:"remove child",payload:{fromIndex:r.fromIndex}})}}}},am=rm,im=/*#__PURE__*/Object.freeze({default:am,__moduleExports:am}),sm=im&&am||im,um=sm,lm=Il,cm={/**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @internal
	   */
dangerouslyProcessChildrenUpdates:function(e,t){var n=lm.getNodeFromInstance(e);um.processUpdates(n,t)}},pm=cm,dm=/*#__PURE__*/Object.freeze({default:pm,__moduleExports:pm}),fm=dm&&pm||dm,hm=sm,mm=fm,gm={processChildrenUpdates:mm.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkup:hm.dangerouslyReplaceNodeWithMarkup},ym=gm,vm=dn,bm=Il,_m=vm,Cm={focusDOMComponent:function(){_m(bm.getNodeFromInstance(this))}},wm=Cm,Em={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},km=["Webkit","ms","Moz","O"];
// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(Em).forEach(function(e){km.forEach(function(t){Em[fn(t,e)]=Em[e]})});/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
var Tm={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},Sm={isUnitlessNumber:Em,shorthandPropertyExpansions:Tm},Im=Sm,Om=/-(.)/g,Pm=hn,Nm=Pm,xm=/^-ms-/,Mm=mn,Dm=Im,Rm=Ka,Am=Dm.isUnitlessNumber,Um={},jm=gn,Lm=/*#__PURE__*/Object.freeze({default:jm,__moduleExports:jm}),Fm=/([A-Z])/g,Bm=yn,Hm=/*#__PURE__*/Object.freeze({default:Bm,__moduleExports:Bm}),Wm=Hm&&Bm||Hm,Vm=Wm,qm=/^ms-/,Ym=vn,zm=bn,Km=Lm&&jm||Lm,Gm=Im,Xm=Cc,$m=yd,Qm=Mm,Jm=Km,Zm=Ym,eg=zm,tg=Ka,ng=eg(function(e){return Zm(e)}),og=!1,rg="cssFloat";if(Xm.canUseDOM){var ag=document.createElement("div").style;try{
// IE8 throws "Invalid argument." if resetting shorthand style properties.
ag.font=""}catch(e){og=!0}
// IE8 only supports accessing cssFloat (standard) as styleFloat
document.documentElement.style.cssFloat===undefined&&(rg="styleFloat")}
// 'msTransform' is correct, but the other prefixes should be capitalized
var ig=/^(?:webkit|moz|o)[A-Z]/,sg=/;\s*$/,ug={},lg={},cg=!1,pg=function(e,t){ug.hasOwnProperty(e)&&ug[e]||(ug[e]=!0,tg(!1,"Unsupported style property %s. Did you mean %s?%s",e,Qm(e),mg(t)))},dg=function(e,t){ug.hasOwnProperty(e)&&ug[e]||(ug[e]=!0,tg(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?%s",e,e.charAt(0).toUpperCase()+e.slice(1),mg(t)))},fg=function(e,t,n){lg.hasOwnProperty(t)&&lg[t]||(lg[t]=!0,tg(!1,'Style property values shouldn\'t contain a semicolon.%s Try "%s: %s" instead.',mg(n),e,t.replace(sg,"")))},hg=function(e,t,n){cg||(cg=!0,tg(!1,"`NaN` is an invalid value for the `%s` css style property.%s",e,mg(n)))},mg=function(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""},gg=function(e,t,n){var o;n&&(o=n._currentElement._owner),e.indexOf("-")>-1?pg(e,o):ig.test(e)?dg(e,o):sg.test(t)&&fg(e,t,o),"number"==typeof t&&isNaN(t)&&hg(e,0,o)},yg={/**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */
createMarkupForStyles:function(e,t){var n="";for(var o in e)if(e.hasOwnProperty(o)){var r=0===o.indexOf("--"),a=e[o];r||gg(o,a,t),null!=a&&(n+=ng(o)+":",n+=Jm(o,a,t,r)+";")}return n||null},/**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */
setValueForStyles:function(e,t,n){$m.debugTool.onHostOperation({instanceID:n._debugID,type:"update styles",payload:t});var o=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=0===r.indexOf("--");a||gg(r,t[r],n);var i=Jm(r,t[r],n,a);if("float"!==r&&"cssFloat"!==r||(r=rg),a)o.setProperty(r,i);else if(i)o[r]=i;else{var s=og&&Gm.shorthandPropertyExpansions[r];if(s)
// Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var u in s)o[u]="";else o[r]=""}}}},vg=yg,bg=ch,_g=_n,Cg=yl,wg=Il,Eg=yd,kg=_g,Tg=Ka,Sg=new RegExp("^["+Cg.ATTRIBUTE_NAME_START_CHAR+"]["+Cg.ATTRIBUTE_NAME_CHAR+"]*$"),Ig={},Og={},Pg={/**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
createMarkupForID:function(e){return Cg.ID_ATTRIBUTE_NAME+"="+kg(e)},setAttributeForID:function(e,t){e.setAttribute(Cg.ID_ATTRIBUTE_NAME,t)},createMarkupForRoot:function(){return Cg.ROOT_ATTRIBUTE_NAME+'=""'},setAttributeForRoot:function(e){e.setAttribute(Cg.ROOT_ATTRIBUTE_NAME,"")},/**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
createMarkupForProperty:function(e,t){var n=Cg.properties.hasOwnProperty(e)?Cg.properties[e]:null;if(n){if(wn(n,t))return"";var o=n.attributeName;return n.hasBooleanValue||n.hasOverloadedBooleanValue&&!0===t?o+'=""':o+"="+kg(t)}return Cg.isCustomAttribute(e)?null==t?"":e+"="+kg(t):null},/**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */
createMarkupForCustomAttribute:function(e,t){return Cn(e)&&null!=t?e+"="+kg(t):""},/**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
setValueForProperty:function(e,t,n){var o=Cg.properties.hasOwnProperty(t)?Cg.properties[t]:null;if(o){var r=o.mutationMethod;if(r)r(e,n);else{if(wn(o,n))return void this.deleteValueForProperty(e,t);if(o.mustUseProperty)
// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
e[o.propertyName]=n;else{var a=o.attributeName,i=o.attributeNamespace;
// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
i?e.setAttributeNS(i,a,""+n):o.hasBooleanValue||o.hasOverloadedBooleanValue&&!0===n?e.setAttribute(a,""):e.setAttribute(a,""+n)}}}else if(Cg.isCustomAttribute(t))return void Pg.setValueForAttribute(e,t,n);var s={};s[t]=n,Eg.debugTool.onHostOperation({instanceID:wg.getInstanceFromNode(e)._debugID,type:"update attribute",payload:s})},setValueForAttribute:function(e,t,n){if(Cn(t)){null==n?e.removeAttribute(t):e.setAttribute(t,""+n);var o={};o[t]=n,Eg.debugTool.onHostOperation({instanceID:wg.getInstanceFromNode(e)._debugID,type:"update attribute",payload:o})}},/**
	   * Deletes an attributes from a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
deleteValueForAttribute:function(e,t){e.removeAttribute(t),Eg.debugTool.onHostOperation({instanceID:wg.getInstanceFromNode(e)._debugID,type:"remove attribute",payload:t})},/**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
deleteValueForProperty:function(e,t){var n=Cg.properties.hasOwnProperty(t)?Cg.properties[t]:null;if(n){var o=n.mutationMethod;if(o)o(e,undefined);else if(n.mustUseProperty){var r=n.propertyName;n.hasBooleanValue?e[r]=!1:e[r]=""}else e.removeAttribute(n.attributeName)}else Cg.isCustomAttribute(t)&&e.removeAttribute(t);Eg.debugTool.onHostOperation({instanceID:wg.getInstanceFromNode(e)._debugID,type:"remove attribute",payload:t})}},Ng=Pg,xg=cc,Mg={/**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   */
handleTopLevel:function(e,t,n,o){En(xg.extractEvents(e,t,n,o))}},Dg=Mg,Rg=Cc,Ag={animationend:kn("Animation","AnimationEnd"),animationiteration:kn("Animation","AnimationIteration"),animationstart:kn("Animation","AnimationStart"),transitionend:kn("Transition","TransitionEnd")},Ug={},jg={};/**
	 * Bootstrap if a DOM exists.
	 */
Rg.canUseDOM&&(jg=document.createElement("div").style,
// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
"AnimationEvent"in window||(delete Ag.animationend.animation,delete Ag.animationiteration.animation,delete Ag.animationstart.animation),
// Same as above
"TransitionEvent"in window||delete Ag.transitionend.transition);var Lg,Fg=Tn,Bg=Ha,Hg=Rl,Wg=Dg,Vg=Of,qg=Fg,Yg=Zd,zg={},Kg=!1,Gg=0,Xg={topAbort:"abort",topAnimationEnd:qg("animationend")||"animationend",topAnimationIteration:qg("animationiteration")||"animationiteration",topAnimationStart:qg("animationstart")||"animationstart",topBlur:"blur",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:qg("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},$g="_reactListenersID"+String(Math.random()).slice(2),Qg=Bg({},Wg,{/**
	   * Injectable event backend
	   */
ReactEventListener:null,injection:{/**
	     * @param {object} ReactEventListener
	     */
injectReactEventListener:function(e){e.setHandleTopLevel(Qg.handleTopLevel),Qg.ReactEventListener=e}},/**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
setEnabled:function(e){Qg.ReactEventListener&&Qg.ReactEventListener.setEnabled(e)},/**
	   * @return {boolean} True if callbacks are enabled.
	   */
isEnabled:function(){return!(!Qg.ReactEventListener||!Qg.ReactEventListener.isEnabled())},/**
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
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
listenTo:function(e,t){for(var n=t,o=Sn(n),r=Hg.registrationNameDependencies[e],a=0;a<r.length;a++){var i=r[a];o.hasOwnProperty(i)&&o[i]||("topWheel"===i?Yg("wheel")?Qg.ReactEventListener.trapBubbledEvent("topWheel","wheel",n):Yg("mousewheel")?Qg.ReactEventListener.trapBubbledEvent("topWheel","mousewheel",n):
// Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
Qg.ReactEventListener.trapBubbledEvent("topWheel","DOMMouseScroll",n):"topScroll"===i?Yg("scroll",!0)?Qg.ReactEventListener.trapCapturedEvent("topScroll","scroll",n):Qg.ReactEventListener.trapBubbledEvent("topScroll","scroll",Qg.ReactEventListener.WINDOW_HANDLE):"topFocus"===i||"topBlur"===i?(Yg("focus",!0)?(Qg.ReactEventListener.trapCapturedEvent("topFocus","focus",n),Qg.ReactEventListener.trapCapturedEvent("topBlur","blur",n)):Yg("focusin")&&(
// IE has `focusin` and `focusout` events which bubble.
// @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
Qg.ReactEventListener.trapBubbledEvent("topFocus","focusin",n),Qg.ReactEventListener.trapBubbledEvent("topBlur","focusout",n)),
// to make sure blur and focus event listeners are only attached once
o.topBlur=!0,o.topFocus=!0):Xg.hasOwnProperty(i)&&Qg.ReactEventListener.trapBubbledEvent(i,Xg[i],n),o[i]=!0)}},trapBubbledEvent:function(e,t,n){return Qg.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return Qg.ReactEventListener.trapCapturedEvent(e,t,n)},/**
	   * Protect against document.createEvent() returning null
	   * Some popup blocker extensions appear to do this:
	   * https://github.com/facebook/react/issues/6887
	   */
supportsEventPageXY:function(){if(!document.createEvent)return!1;var e=document.createEvent("MouseEvent");return null!=e&&"pageX"in e},/**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
	   * pageX/pageY isn't supported (legacy browsers).
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
ensureScrollValueMonitoring:function(){if(Lg===undefined&&(Lg=Qg.supportsEventPageXY()),!Lg&&!Kg){var e=Vg.refreshScrollValues;Qg.ReactEventListener.monitorScrollValue(e),Kg=!0}}}),Jg=Qg,Zg=vu,ey=ul,ty=Zg(ey.isValidElement),ny=oi,oy=Ka,ry={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},ay={value:function(e,t,n){return!e[t]||ry[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:ty.func},iy={},sy={checkPropTypes:function(e,t,n){for(var o in ay){if(ay.hasOwnProperty(o))var r=ay[o](t,o,e,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");if(r instanceof Error&&!(r.message in iy)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
iy[r.message]=!0;var a=Nn(n);oy(!1,"Failed form propType: %s%s",r.message,a)}}},/**
	   * @param {object} inputProps Props for form component
	   * @return {*} current value of the input either from value prop or link.
	   */
getValue:function(e){return e.valueLink?(On(e),e.valueLink.value):e.value},/**
	   * @param {object} inputProps Props for form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
getChecked:function(e){return e.checkedLink?(Pn(e),e.checkedLink.value):e.checked},/**
	   * @param {object} inputProps Props for form component
	   * @param {SyntheticEvent} event change event to handle
	   */
executeOnChange:function(e,t){return e.valueLink?(On(e),e.valueLink.requestChange(t.target.value)):e.checkedLink?(Pn(e),e.checkedLink.requestChange(t.target.checked)):e.onChange?e.onChange.call(undefined,t):void 0}},uy=sy,ly=Ha,cy=Ng,py=uy,dy=Il,fy=Kd,hy=oi,my=Ka,gy=!1,yy=!1,vy=!1,by=!1,_y=!1,Cy=!1,wy={getHostProps:function(e,t){var n=py.getValue(t),o=py.getChecked(t);return ly({
// Make sure we set .type before any other properties (setting .value
// before .type means .value is lost in IE11 and below)
type:undefined,
// Make sure we set .step before .value (setting .value before .step
// means .value is rounded on mount, based upon step precision)
step:undefined,
// Make sure we set .min & .max before .value (to ensure proper order
// in corner cases such as min or max deriving from value, e.g. Issue #7170)
min:undefined,max:undefined},t,{defaultChecked:undefined,defaultValue:undefined,value:null!=n?n:e._wrapperState.initialValue,checked:null!=o?o:e._wrapperState.initialChecked,onChange:e._wrapperState.onChange})},mountWrapper:function(e,t){py.checkPropTypes("input",t,e._currentElement._owner);var n=e._currentElement._owner;t.valueLink===undefined||gy||(my(!1,"`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead."),gy=!0),t.checkedLink===undefined||yy||(my(!1,"`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead."),yy=!0),t.checked===undefined||t.defaultChecked===undefined||by||(my(!1,"%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",n&&n.getName()||"A component",t.type),by=!0),t.value===undefined||t.defaultValue===undefined||vy||(my(!1,"%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",n&&n.getName()||"A component",t.type),vy=!0);var o=t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:null!=t.value?t.value:o,listeners:null,onChange:Dn.bind(e),controlled:Mn(t)}},updateWrapper:function(e){var t=e._currentElement.props,n=Mn(t),o=e._currentElement._owner;e._wrapperState.controlled||!n||Cy||(my(!1,"%s is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",o&&o.getName()||"A component",t.type),Cy=!0),!e._wrapperState.controlled||n||_y||(my(!1,"%s is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",o&&o.getName()||"A component",t.type),_y=!0);
// TODO: Shouldn't this be getChecked(props)?
var r=t.checked;null!=r&&cy.setValueForProperty(dy.getNodeFromInstance(e),"checked",r||!1);var a=dy.getNodeFromInstance(e),i=py.getValue(t);if(null!=i)if(0===i&&""===a.value)a.value="0";else if("number"===t.type){
// Simulate `input.valueAsNumber`. IE9 does not support it
var s=parseFloat(a.value,10)||0;(
// eslint-disable-next-line
i!=s||
// eslint-disable-next-line
i==s&&a.value!=i)&&(
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
a.value=""+i)}else a.value!==""+i&&(
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
a.value=""+i);else null==t.value&&null!=t.defaultValue&&a.defaultValue!==""+t.defaultValue&&(a.defaultValue=""+t.defaultValue),null==t.checked&&null!=t.defaultChecked&&(a.defaultChecked=!!t.defaultChecked)},postMountWrapper:function(e){var t=e._currentElement.props,n=dy.getNodeFromInstance(e);
// Detach value from defaultValue. We won't do anything if we're working on
// submit or reset inputs as those values & defaultValues are linked. They
// are not resetable nodes so this operation doesn't matter and actually
// removes browser-default values (eg "Submit Query") when no value is
// provided.
switch(t.type){case"submit":case"reset":break;case"color":case"date":case"datetime":case"datetime-local":case"month":case"time":case"week":
// This fixes the no-show issue on iOS Safari and Android Chrome:
// https://github.com/facebook/react/issues/7233
n.value="",n.value=n.defaultValue;break;default:n.value=n.value}
// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var o=n.name;""!==o&&(n.name=""),n.defaultChecked=!n.defaultChecked,n.defaultChecked=!n.defaultChecked,""!==o&&(n.name=o)}},Ey=wy,ky=Ha,Ty=uy,Sy=Il,Iy=Kd,Oy=Ka,Py=!1,Ny=!1,xy=["value","defaultValue"],My={getHostProps:function(e,t){return ky({},t,{onChange:e._wrapperState.onChange,value:undefined})},mountWrapper:function(e,t){Un(e,t);var n=Ty.getValue(t);e._wrapperState={pendingUpdate:!1,initialValue:null!=n?n:t.defaultValue,listeners:null,onChange:Ln.bind(e),wasMultiple:Boolean(t.multiple)},t.value===undefined||t.defaultValue===undefined||Ny||(Oy(!1,"Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"),Ny=!0)},getSelectValueContext:function(e){
// ReactDOMOption looks at this initial value so the initial generated
// markup has correct `selected` attributes
return e._wrapperState.initialValue},postUpdateWrapper:function(e){var t=e._currentElement.props;
// After the initial mount, we control selected-ness manually so don't pass
// this value down
e._wrapperState.initialValue=undefined;var n=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=Boolean(t.multiple);var o=Ty.getValue(t);null!=o?(e._wrapperState.pendingUpdate=!1,jn(e,Boolean(t.multiple),o)):n!==Boolean(t.multiple)&&(
// For simplicity, reapply `defaultValue` if `multiple` is toggled.
null!=t.defaultValue?jn(e,Boolean(t.multiple),t.defaultValue):
// Revert the select back to its default unselected state.
jn(e,Boolean(t.multiple),t.multiple?[]:""))}},Dy=My,Ry=Ha,Ay=ul,Uy=Il,jy=Dy,Ly=Ka,Fy=!1,By={mountWrapper:function(e,t,n){Ly(null==t.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
// Look up whether this option is 'selected'
var o=null;if(null!=n){var r=n;"optgroup"===r._tag&&(r=r._hostParent),null!=r&&"select"===r._tag&&(o=jy.getSelectValueContext(r))}
// If the value is null (e.g., no specified value or after initial mount)
// or missing (e.g., for <datalist>), we don't change props.selected
var a=null;if(null!=o){var i;if(i=null!=t.value?t.value+"":Fn(t.children),a=!1,Array.isArray(o)){
// multiple
for(var s=0;s<o.length;s++)if(""+o[s]===i){a=!0;break}}else a=""+o===i}e._wrapperState={selected:a}},postMountWrapper:function(e){
// value="" should make a value attribute (#6219)
var t=e._currentElement.props;if(null!=t.value){Uy.getNodeFromInstance(e).setAttribute("value",t.value)}},getHostProps:function(e,t){var n=Ry({selected:undefined,children:undefined},t);
// Read state only from initial mount because <select> updates value
// manually; we need the initial state only for server rendering
null!=e._wrapperState.selected&&(n.selected=e._wrapperState.selected);var o=Fn(t.children);return o&&(n.children=o),n}},Hy=By,Wy=Ha,Vy=uy,qy=Il,Yy=Kd,zy=oi,Ky=Ka,Gy=!1,Xy=!1,$y={getHostProps:function(e,t){return null!=t.dangerouslySetInnerHTML&&zy(!1,"`dangerouslySetInnerHTML` does not make sense on <textarea>."),Wy({},t,{value:undefined,defaultValue:undefined,children:""+e._wrapperState.initialValue,onChange:e._wrapperState.onChange})},mountWrapper:function(e,t){Vy.checkPropTypes("textarea",t,e._currentElement._owner),t.valueLink===undefined||Gy||(Ky(!1,"`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead."),Gy=!0),t.value===undefined||t.defaultValue===undefined||Xy||(Ky(!1,"Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components"),Xy=!0);var n=Vy.getValue(t),o=n;
// Only bother fetching default value if we're going to use it
if(null==n){var r=t.defaultValue,a=t.children;null!=a&&(Ky(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=r&&zy(!1,"If you supply `defaultValue` on a <textarea>, do not pass children."),Array.isArray(a)&&(a.length<=1||zy(!1,"<textarea> can only have at most one child."),a=a[0]),r=""+a),null==r&&(r=""),o=r}e._wrapperState={initialValue:""+o,listeners:null,onChange:Hn.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=qy.getNodeFromInstance(e),o=Vy.getValue(t);if(null!=o){
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var r=""+o;
// To avoid side effects (such as losing text selection), only set value if changed
r!==n.value&&(n.value=r),null==t.defaultValue&&(n.defaultValue=r)}null!=t.defaultValue&&(n.defaultValue=t.defaultValue)},postMountWrapper:function(e){
// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var t=qy.getNodeFromInstance(e),n=t.textContent;
// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
n===e._wrapperState.initialValue&&(t.value=n)}},Qy=$y,Jy=/*#__PURE__*/Object.freeze({default:Qy,__moduleExports:Qy}),Zy=oi,ev=!1,tv={/**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
replaceNodeWithMarkup:null,/**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
processChildrenUpdates:null,injection:{injectEnvironment:function(e){ev&&Zy(!1,"ReactCompositeComponent: injectEnvironment() can only be called once."),tv.replaceNodeWithMarkup=e.replaceNodeWithMarkup,tv.processChildrenUpdates=e.processChildrenUpdates,ev=!0}}},nv=tv,ov=/*#__PURE__*/Object.freeze({default:nv,__moduleExports:nv}),rv={/**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
remove:function(e){e._reactInternalInstance=undefined},get:function(e){return e._reactInternalInstance},has:function(e){return e._reactInternalInstance!==undefined},set:function(e,t){e._reactInternalInstance=t}},av=rv,iv=ul,sv=oi,uv={HOST:0,COMPOSITE:1,EMPTY:2,getType:function(e){return null===e||!1===e?uv.EMPTY:iv.isValidElement(e)?"function"==typeof e.type?uv.COMPOSITE:uv.HOST:void sv(!1,"Unexpected node: %s",e)}},lv=uv,cv=/*#__PURE__*/Object.freeze({default:lv,__moduleExports:lv}),pv={};pv={prop:"prop",context:"context",childContext:"child context"};var dv,fv=pv,hv=fv,mv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gv=oi,yv=Ka;"undefined"!=typeof process&&process.env;var vv={},bv=Wn,_v=Object.prototype.hasOwnProperty,Cv=qn,wv=Yn,Ev=ov&&nv||ov,kv=cv&&lv||cv,Tv=Ha,Sv=ul,Iv=Ev,Ov=xi,Pv=Hl,Nv=av,xv=yd,Mv=kv,Dv=Ed,Rv=bv,Av=si,Uv=oi,jv=Cv,Lv=wv,Fv=Ka,Bv={ImpureClass:0,PureClass:1,StatelessFunctional:2};zn.prototype.render=function(){var e=Nv.get(this)._currentElement.type,t=e(this.props,this.context,this.updater);return Kn(e,t),t};/**
	 * ------------------ The Life-Cycle of a Composite Component ------------------
	 *
	 * - constructor: Initialization of state. The instance is now retained.
	 *   - componentWillMount
	 *   - render
	 *   - [children's constructors]
	 *     - [children's componentWillMount and render]
	 *     - [children's componentDidMount]
	 *     - componentDidMount
	 *
	 *       Update Phases:
	 *       - componentWillReceiveProps (only called if parent updated)
	 *       - shouldComponentUpdate
	 *         - componentWillUpdate
	 *           - render
	 *           - [children's constructors or receive props phases]
	 *         - componentDidUpdate
	 *
	 *     - componentWillUnmount
	 *     - [children's componentWillUnmount]
	 *   - [children destroyed]
	 * - (destroyed): The instance is now blank, released by React and ready for GC.
	 *
	 * -----------------------------------------------------------------------------
	 */
/**
	 * An incrementing ID assigned to each component when it is mounted. This is
	 * used to enforce the order in which `ReactUpdates` updates dirty components.
	 *
	 * @private
	 */
var Hv,Wv=1,Vv={/**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
construct:function(e){this._currentElement=e,this._rootNodeID=0,this._compositeType=null,this._instance=null,this._hostParent=null,this._hostContainerInfo=null,
// See ReactUpdateQueue
this._updateBatchNumber=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedNodeType=null,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._topLevelWrapper=null,
// See ReactUpdates and ReactUpdateQueue.
this._pendingCallbacks=null,
// ComponentWillUnmount shall only be called once
this._calledComponentWillUnmount=!1,this._warnedAboutRefsInRender=!1},/**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {?object} hostParent
	   * @param {?object} hostContainerInfo
	   * @param {?object} context
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
mountComponent:function(e,t,n,o){var r=this;this._context=o,this._mountOrder=Wv++,this._hostParent=t,this._hostContainerInfo=n;var a,i=this._currentElement.props,s=this._processContext(o),u=this._currentElement.type,l=e.getUpdateQueue(),c=Gn(u),p=this._constructComponent(c,i,s,l);
// Support functional components
c||null!=p&&null!=p.render?Xn(u)?this._compositeType=Bv.PureClass:this._compositeType=Bv.ImpureClass:(a=p,Kn(u,a),null===p||!1===p||Sv.isValidElement(p)||Uv(!1,"%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",u.displayName||u.name||"Component"),p=new zn(u),this._compositeType=Bv.StatelessFunctional),
// This will throw later in _renderValidatedComponent, but add an early
// warning now to help debugging
null==p.render&&Fv(!1,"%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",u.displayName||u.name||"Component");var d=p.props!==i,f=u.displayName||u.name||"Component";Fv(p.props===undefined||!d,"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",f,f),
// These should be set up in the constructor, but as a convenience for
// simpler class abstractions, we set them up after the fact.
p.props=i,p.context=s,p.refs=Av,p.updater=l,this._instance=p,
// Store a reference from the instance back to the internal representation
Nv.set(p,this),
// Since plain JS classes are defined without any special initialization
// logic, we can not catch common errors early. Therefore, we have to
// catch them here, at initialization time, instead.
Fv(!p.getInitialState||p.getInitialState.isReactClassApproved||p.state,"getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",this.getName()||"a component"),Fv(!p.getDefaultProps||p.getDefaultProps.isReactClassApproved,"getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",this.getName()||"a component"),Fv(!p.propTypes,"propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",this.getName()||"a component"),Fv(!p.contextTypes,"contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",this.getName()||"a component"),Fv("function"!=typeof p.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",this.getName()||"A component"),Fv("function"!=typeof p.componentDidUnmount,"%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",this.getName()||"A component"),Fv("function"!=typeof p.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",this.getName()||"A component");var h=p.state;h===undefined&&(p.state=h=null),("object"!=typeof h||Array.isArray(h))&&Uv(!1,"%s.state: must be set to an object or null",this.getName()||"ReactCompositeComponent"),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var m;return m=p.unstable_handleError?this.performInitialMountWithErrorHandling(a,t,n,e,o):this.performInitialMount(a,t,n,e,o),p.componentDidMount&&e.getReactMountReady().enqueue(function(){$n(function(){return p.componentDidMount()},r._debugID,"componentDidMount")}),m},_constructComponent:function(e,t,n,o){if(e)return this._constructComponentWithoutOwner(e,t,n,o);Ov.current=this;try{return this._constructComponentWithoutOwner(e,t,n,o)}finally{Ov.current=null}},_constructComponentWithoutOwner:function(e,t,n,o){var r=this._currentElement.type;return e?$n(function(){return new r(t,n,o)},this._debugID,"ctor"):$n(function(){return r(t,n,o)},this._debugID,"render")},performInitialMountWithErrorHandling:function(e,t,n,o,r){var a,i=o.checkpoint();try{a=this.performInitialMount(e,t,n,o,r)}catch(s){
// Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
o.rollback(i),this._instance.unstable_handleError(s),this._pendingStateQueue&&(this._instance.state=this._processPendingState(this._instance.props,this._instance.context)),i=o.checkpoint(),this._renderedComponent.unmountComponent(!0),o.rollback(i),
// Try again - we've informed the component about the error, so they can render an error message this time.
// If this throws again, the error will bubble up (and can be caught by a higher error boundary).
a=this.performInitialMount(e,t,n,o,r)}return a},performInitialMount:function(e,t,n,o,r){var a=this._instance,i=0;i=this._debugID,a.componentWillMount&&($n(function(){return a.componentWillMount()},i,"componentWillMount"),
// When mounting, calls to `setState` by `componentWillMount` will set
// `this._pendingStateQueue` without triggering a re-render.
this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),
// If not a stateless component, we now render
e===undefined&&(e=this._renderValidatedComponent());var s=Mv.getType(e);this._renderedNodeType=s;var u=this._instantiateReactComponent(e,s!==Mv.EMPTY);this._renderedComponent=u;var l=Dv.mountComponent(u,o,t,n,this._processChildContext(r),i);if(0!==i){var c=0!==u._debugID?[u._debugID]:[];xv.debugTool.onSetChildren(i,c)}return l},getHostNode:function(){return Dv.getHostNode(this._renderedComponent)},/**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
unmountComponent:function(e){if(this._renderedComponent){var t=this._instance;if(t.componentWillUnmount&&!t._calledComponentWillUnmount)if(t._calledComponentWillUnmount=!0,e){var n=this.getName()+".componentWillUnmount()";Pv.invokeGuardedCallback(n,t.componentWillUnmount.bind(t))}else $n(function(){return t.componentWillUnmount()},this._debugID,"componentWillUnmount");this._renderedComponent&&(Dv.unmountComponent(this._renderedComponent,e),this._renderedNodeType=null,this._renderedComponent=null,this._instance=null),
// Reset pending fields
// Even if this component is scheduled for another update in ReactUpdates,
// it would still be ignored because these fields are reset.
this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,
// These fields do not really need to be reset since this object is no
// longer accessible.
this._context=null,this._rootNodeID=0,this._topLevelWrapper=null,
// Delete the reference from the instance to this internal representation
// which allow the internals to be properly cleaned up even if the user
// leaks a reference to the public instance.
Nv.remove(t)}},/**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
_maskContext:function(e){var t=this._currentElement.type,n=t.contextTypes;if(!n)return Av;var o={};for(var r in n)o[r]=e[r];return o},/**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
_processContext:function(e){var t=this._maskContext(e),n=this._currentElement.type;return n.contextTypes&&this._checkContextTypes(n.contextTypes,t,"context"),t},/**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
_processChildContext:function(e){var t,n=this._currentElement.type,o=this._instance;if(o.getChildContext){xv.debugTool.onBeginProcessingChildContext();try{t=o.getChildContext()}finally{xv.debugTool.onEndProcessingChildContext()}}if(t){"object"!=typeof n.childContextTypes&&Uv(!1,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",this.getName()||"ReactCompositeComponent"),this._checkContextTypes(n.childContextTypes,t,"child context");for(var r in t)r in n.childContextTypes||Uv(!1,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||"ReactCompositeComponent",r);return Tv({},e,t)}return e},/**
	   * Assert that the context types are valid
	   *
	   * @param {object} typeSpecs Map of context field to a ReactPropType
	   * @param {object} values Runtime values that need to be type-checked
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
_checkContextTypes:function(e,t,n){Rv(e,t,n,this.getName(),null,this._debugID)},receiveComponent:function(e,t,n){var o=this._currentElement,r=this._context;this._pendingElement=null,this.updateComponent(t,o,e,r,n)},/**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
performUpdateIfNecessary:function(e){null!=this._pendingElement?Dv.receiveComponent(this,this._pendingElement,e,this._context):null!==this._pendingStateQueue||this._pendingForceUpdate?this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context):this._updateBatchNumber=null},/**
	   * Perform an update to a mounted component. The componentWillReceiveProps and
	   * shouldComponentUpdate methods are called, then (assuming the update isn't
	   * skipped) the remaining update lifecycle methods are called and the DOM
	   * representation is updated.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevParentElement
	   * @param {ReactElement} nextParentElement
	   * @internal
	   * @overridable
	   */
updateComponent:function(e,t,n,o,r){var a=this._instance;null==a&&Uv(!1,"Attempted to update component `%s` that has already been unmounted (or failed to mount).",this.getName()||"ReactCompositeComponent");var i,s=!1;
// Determine if the context has changed or not
this._context===r?i=a.context:(i=this._processContext(r),s=!0);var u=t.props,l=n.props;
// Not a simple state update but a props update
t!==n&&(s=!0),
// An update here will schedule an update but immediately set
// _pendingStateQueue which will ensure that any state updates gets
// immediately reconciled instead of waiting for the next batch.
s&&a.componentWillReceiveProps&&$n(function(){return a.componentWillReceiveProps(l,i)},this._debugID,"componentWillReceiveProps");var c=this._processPendingState(l,i),p=!0;this._pendingForceUpdate||(a.shouldComponentUpdate?p=$n(function(){return a.shouldComponentUpdate(l,c,i)},this._debugID,"shouldComponentUpdate"):this._compositeType===Bv.PureClass&&(p=!jv(u,l)||!jv(a.state,c))),Fv(p!==undefined,"%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",this.getName()||"ReactCompositeComponent"),this._updateBatchNumber=null,p?(this._pendingForceUpdate=!1,
// Will set `this.props`, `this.state` and `this.context`.
this._performComponentUpdate(n,l,c,i,e,r)):(
// If it's determined that a component should not update, we still want
// to set props and state but we shortcut the rest of the update.
this._currentElement=n,this._context=r,a.props=l,a.state=c,a.context=i)},_processPendingState:function(e,t){var n=this._instance,o=this._pendingStateQueue,r=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!o)return n.state;if(r&&1===o.length)return o[0];for(var a=Tv({},r?o[0]:n.state),i=r?1:0;i<o.length;i++){var s=o[i];Tv(a,"function"==typeof s?s.call(n,a,e,t):s)}return a},/**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?object} unmaskedContext
	   * @private
	   */
_performComponentUpdate:function(e,t,n,o,r,a){var i,s,u,l=this,c=this._instance,p=Boolean(c.componentDidUpdate);p&&(i=c.props,s=c.state,u=c.context),c.componentWillUpdate&&$n(function(){return c.componentWillUpdate(t,n,o)},this._debugID,"componentWillUpdate"),this._currentElement=e,this._context=a,c.props=t,c.state=n,c.context=o,this._updateRenderedComponent(r,a),p&&r.getReactMountReady().enqueue(function(){$n(c.componentDidUpdate.bind(c,i,s,u),l._debugID,"componentDidUpdate")})},/**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
_updateRenderedComponent:function(e,t){var n=this._renderedComponent,o=n._currentElement,r=this._renderValidatedComponent(),a=0;if(a=this._debugID,Lv(o,r))Dv.receiveComponent(n,r,e,this._processChildContext(t));else{var i=Dv.getHostNode(n);Dv.unmountComponent(n,!1);var s=Mv.getType(r);this._renderedNodeType=s;var u=this._instantiateReactComponent(r,s!==Mv.EMPTY);this._renderedComponent=u;var l=Dv.mountComponent(u,e,this._hostParent,this._hostContainerInfo,this._processChildContext(t),a);if(0!==a){var c=0!==u._debugID?[u._debugID]:[];xv.debugTool.onSetChildren(a,c)}this._replaceNodeWithMarkup(i,l,n)}},/**
	   * Overridden in shallow rendering.
	   *
	   * @protected
	   */
_replaceNodeWithMarkup:function(e,t,n){Iv.replaceNodeWithMarkup(e,t,n)},/**
	   * @protected
	   */
_renderValidatedComponentWithoutOwnerOrContext:function(){var e,t=this._instance;
// We allow auto-mocks to proceed as if they're returning null.
// This is probably bad practice. Consider warning here and
// deprecating this convenience.
return e=$n(function(){return t.render()},this._debugID,"render"),e===undefined&&t.render._isMockFunction&&(e=null),e},/**
	   * @private
	   */
_renderValidatedComponent:function(){var e;Ov.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{Ov.current=null}
// TODO: An `isValidNode` function would probably be more appropriate
return null===e||!1===e||Sv.isValidElement(e)||Uv(!1,"%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",this.getName()||"ReactCompositeComponent"),e},/**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
attachRef:function(e,t){var n=this.getPublicInstance();null==n&&Uv(!1,"Stateless function components cannot have refs.");var o=t.getPublicInstance(),r=t&&t.getName?t.getName():"a component";Fv(null!=o||t._compositeType!==Bv.StatelessFunctional,'Stateless function components cannot be given refs (See ref "%s" in %s created by %s). Attempts to access this ref will fail.',e,r,this.getName()),(n.refs===Av?n.refs={}:n.refs)[e]=o},/**
	   * Detaches a reference name.
	   *
	   * @param {string} ref Name to dereference.
	   * @final
	   * @private
	   */
detachRef:function(e){delete this.getPublicInstance().refs[e]},/**
	   * Get a text description of the component that can be used to identify it
	   * in error messages.
	   * @return {string} The name or null.
	   * @internal
	   */
getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},/**
	   * Get the publicly accessible representation of this component - i.e. what
	   * is exposed by refs and returned by render. Can be null for stateless
	   * components.
	   *
	   * @return {ReactComponent} the public component instance.
	   * @internal
	   */
getPublicInstance:function(){var e=this._instance;return this._compositeType===Bv.StatelessFunctional?null:e},
// Stub
_instantiateReactComponent:null},qv=Vv,Yv={injectEmptyComponentFactory:function(e){Hv=e}},zv={create:function(e){return Hv(e)}};zv.injection=Yv;var Kv=zv,Gv=oi,Xv=null,$v=null,Qv={
// This accepts a class that receives the tag string. This is a catch all
// that can render any kind of tag.
injectGenericComponentClass:function(e){Xv=e},
// This accepts a text component class that takes the text string to be
// rendered as props.
injectTextComponentClass:function(e){$v=e}},Jv={createInternalComponent:Qn,createInstanceForText:Jn,isTextComponent:Zn,injection:Qv},Zv=Jv,eb=1,tb=eo,nb=Ha,ob=qv,rb=Kv,ab=Zv,ib=tb,sb=oi,ub=Ka,lb=function(e){this.construct(e)};nb(lb.prototype,ob,{_instantiateReactComponent:oo});var cb,pb=oo,db={escape:ro,unescape:ao},fb=db,hb="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,mb=hb,gb="function"==typeof Symbol&&Symbol.iterator,yb="@@iterator",vb=io,bb=xi,_b=mb,Cb=vb,wb=oi,Eb=fb,kb=Ka,Tb=".",Sb=":",Ib=!1,Ob=lo,Pb=Ed,Nb=pb,xb=fb,Mb=wv,Db=Ob,Rb=Ka;"undefined"!=typeof process&&process.env;/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
var Ab,Ub={/**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
instantiateChildren:function(e,t,n,o){if(null==e)return null;var r={};return Db(e,function(e,t,n){return co(e,t,n,o)},r),r},/**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextChildren Flat child element maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
updateChildren:function(e,t,n,o,r,a,i,s,u){
// We currently don't have a way to track moves here but if we use iterators
// instead of for..in we can zip the iterators and check if an item has
// moved.
// TODO: If nothing has changed, return the prevChildren object so that we
// can quickly bailout if nothing has changed.
if(t||e){var l,c;for(l in t)if(t.hasOwnProperty(l)){c=e&&e[l];var p=c&&c._currentElement,d=t[l];if(null!=c&&Mb(p,d))Pb.receiveComponent(c,d,r,s),t[l]=c;else{c&&(o[l]=Pb.getHostNode(c),Pb.unmountComponent(c,!1));
// The child must be instantiated before it's mounted.
var f=Nb(d,!0);t[l]=f;
// Creating mount image now ensures refs are resolved in right order
// (see https://github.com/facebook/react/pull/7101 for explanation).
var h=Pb.mountComponent(f,r,a,i,s,u);n.push(h)}}
// Unmount children that are no longer present.
for(l in e)!e.hasOwnProperty(l)||t&&t.hasOwnProperty(l)||(c=e[l],o[l]=Pb.getHostNode(c),Pb.unmountComponent(c,!1))}},/**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
unmountChildren:function(e,t){for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];Pb.unmountComponent(o,t)}}},jb=Ub,Lb=fb,Fb=Ob,Bb=Ka;"undefined"!=typeof process&&process.env;var Hb=fo,Wb=Ev,Vb=av,qb=yd,Yb=xi,zb=Ed,Kb=jb,Gb=Va,Xb=Hb,$b=oi,Qb=Gb,Jb=function(e){if(!e._debugID){
// Check for ART-like instances. TODO: This is silly/gross.
var t;(t=Vb.get(e))&&(e=t)}return e._debugID};Qb=function(e){var t=Jb(this);
// TODO: React Native empty components are also multichild.
// This means they still get into this method but don't have _debugID.
0!==t&&qb.debugTool.onSetChildren(t,e?Object.keys(e).map(function(t){return e[t]._debugID}):[])};/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
var Zb={/**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
Mixin:{_reconcilerInstantiateChildren:function(e,t,n){var o=Jb(this);if(this._currentElement)try{return Yb.current=this._currentElement._owner,Kb.instantiateChildren(e,t,n,o)}finally{Yb.current=null}return Kb.instantiateChildren(e,t,n)},_reconcilerUpdateChildren:function(e,t,n,o,r,a){var i,s=0;if(s=Jb(this),this._currentElement){try{Yb.current=this._currentElement._owner,i=Xb(t,s)}finally{Yb.current=null}return Kb.updateChildren(e,i,n,o,r,this,this._hostContainerInfo,a,s),i}return i=Xb(t,s),Kb.updateChildren(e,i,n,o,r,this,this._hostContainerInfo,a,s),i},/**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
mountChildren:function(e,t,n){var o=this._reconcilerInstantiateChildren(e,t,n);this._renderedChildren=o;var r=[],a=0;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i],u=0;u=Jb(this);var l=zb.mountComponent(s,t,this,this._hostContainerInfo,n,u);s._mountIndex=a++,r.push(l)}return Qb.call(this,o),r},/**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
updateTextContent:function(e){var t=this._renderedChildren;
// Remove any rendered children.
Kb.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&$b(!1,"updateTextContent called on non-empty component.");_o(this,[vo(e)])},/**
	     * Replaces any rendered children with a markup string.
	     *
	     * @param {string} nextMarkup String of markup.
	     * @internal
	     */
updateMarkup:function(e){var t=this._renderedChildren;
// Remove any rendered children.
Kb.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&$b(!1,"updateTextContent called on non-empty component.");_o(this,[yo(e)])},/**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
updateChildren:function(e,t,n){
// Hook used by React ART
this._updateChildren(e,t,n)},/**
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
_updateChildren:function(e,t,n){var o=this._renderedChildren,r={},a=[],i=this._reconcilerUpdateChildren(o,e,a,r,t,n);if(i||o){var s,u=null,l=0,c=0,p=0,d=null;for(s in i)if(i.hasOwnProperty(s)){var f=o&&o[s],h=i[s];f===h?(u=bo(u,this.moveChild(f,d,l,c)),c=Math.max(f._mountIndex,c),f._mountIndex=l):(f&&(
// Update `lastIndex` before `_mountIndex` gets unset by unmounting.
c=Math.max(f._mountIndex,c)),
// The child must be instantiated before it's mounted.
u=bo(u,this._mountChildAtIndex(h,a[p],d,l,t,n)),p++),l++,d=zb.getHostNode(h)}
// Remove children that are no longer present.
for(s in r)r.hasOwnProperty(s)&&(u=bo(u,this._unmountChild(o[s],r[s])));u&&_o(this,u),this._renderedChildren=i,Qb.call(this,i)}},/**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted. It does not actually perform any
	     * backend operations.
	     *
	     * @internal
	     */
unmountChildren:function(e){var t=this._renderedChildren;Kb.unmountChildren(t,e),this._renderedChildren=null},/**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
moveChild:function(e,t,n,o){
// If the index of `child` is less than `lastIndex`, then it needs to
// be moved. Otherwise, we do not need to move it because a child will be
// inserted or moved before `child`.
if(e._mountIndex<o)return mo(e,t,n)},/**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
createChild:function(e,t,n){return ho(n,t,e._mountIndex)},/**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
removeChild:function(e,t){return go(e,t)},/**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
_mountChildAtIndex:function(e,t,n,o,r,a){return e._mountIndex=o,this.createChild(e,n,t)},/**
	     * Unmounts a rendered child.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @private
	     */
_unmountChild:function(e,t){var n=this.removeChild(e,t);return e._mountIndex=null,n}}},e_=Zb,t_=xi,n_=av,o_=yd,r_=Kd,a_=oi,i_=Ka,s_={/**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
isMounted:function(e){var t=t_.current;null!==t&&(i_(t._warnedAboutRefsInRender,"%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",t.getName()||"A component"),t._warnedAboutRefsInRender=!0);var n=n_.get(e);return!!n&&!!n._renderedComponent},/**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @param {string} callerName Name of the calling function in the public API.
	   * @internal
	   */
enqueueCallback:function(e,t,n){s_.validateCallback(t,n);var o=Eo(e);
// Previously we would throw an error if we didn't have an internal
// instance. Since we want to make it a no-op instead, we mirror the same
// behavior we have in other enqueue* methods.
// We also need to ignore callbacks in componentWillMount. See
// enqueueUpdates.
if(!o)return null;o._pendingCallbacks?o._pendingCallbacks.push(t):o._pendingCallbacks=[t],
// TODO: The callback here is ignored when setState is called from
// componentWillMount. Either fix it or disallow doing so completely in
// favor of getInitialState. Alternatively, we can disallow
// componentWillMount during server-side rendering.
Co(o)},enqueueCallbackInternal:function(e,t){e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],Co(e)},/**
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
	   * @internal
	   */
enqueueForceUpdate:function(e){var t=Eo(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,Co(t))},/**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
enqueueReplaceState:function(e,t,n){var o=Eo(e,"replaceState");o&&(o._pendingStateQueue=[t],o._pendingReplaceState=!0,
// Future-proof 15.5
n!==undefined&&null!==n&&(s_.validateCallback(n,"replaceState"),o._pendingCallbacks?o._pendingCallbacks.push(n):o._pendingCallbacks=[n]),Co(o))},/**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
enqueueSetState:function(e,t){o_.debugTool.onSetState(),i_(null!=t,"setState(...): You passed an undefined or null state object; instead, use forceUpdate().");var n=Eo(e,"setState");if(n){(n._pendingStateQueue||(n._pendingStateQueue=[])).push(t),Co(n)}},enqueueElementInternal:function(e,t,n){e._pendingElement=t,
// TODO: introduce _pendingContext instead of setting it directly.
e._context=n,Co(e)},validateCallback:function(e,t){e&&"function"!=typeof e&&a_(!1,"%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,wo(e))}},u_=s_,l_=u_,c_=Ka,p_=function(){function e(t){ko(this,e),this.transaction=t}/**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
/**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
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
	   * @internal
	   */
/**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object|function} completeState Next state.
	   * @internal
	   */
/**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object|function} partialState Next partial state to be merged with state.
	   * @internal
	   */
return e.prototype.isMounted=function(e){return!1},e.prototype.enqueueCallback=function(e,t,n){this.transaction.isInTransaction()&&l_.enqueueCallback(e,t,n)},e.prototype.enqueueForceUpdate=function(e){this.transaction.isInTransaction()?l_.enqueueForceUpdate(e):To(e,"forceUpdate")},e.prototype.enqueueReplaceState=function(e,t){this.transaction.isInTransaction()?l_.enqueueReplaceState(e,t):To(e,"replaceState")},e.prototype.enqueueSetState=function(e,t){this.transaction.isInTransaction()?l_.enqueueSetState(e,t):To(e,"setState")},e}(),d_=p_,f_=Ha,h_=xc,m_=Id,g_=yd,y_=d_,v_=[];v_.push({initialize:g_.debugTool.onBeginFlush,close:g_.debugTool.onEndFlush});var b_={enqueue:function(){}},__={/**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap procedures.
	   */
getTransactionWrappers:function(){return v_},/**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
getReactMountReady:function(){return b_},/**
	   * @return {object} The queue to collect React async events.
	   */
getUpdateQueue:function(){return this.updateQueue},/**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
destructor:function(){},checkpoint:function(){},rollback:function(){}};f_(So.prototype,m_,__),h_.addPoolingTo(So);var C_=So,w_=Ha,E_=Va,k_=Ka,T_=E_,S_=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],I_=["applet","caption","html","table","td","th","marquee","object","template",
// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],O_=I_.concat(["button"]),P_=["dd","dt","li","option","optgroup","p","rp","rt"],N_={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null},x_=function(e,t,n){var o=w_({},e||N_),r={tag:t,instance:n};
// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
return-1!==I_.indexOf(t)&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),-1!==O_.indexOf(t)&&(o.pTagInButtonScope=null),-1!==S_.indexOf(t)&&"address"!==t&&"div"!==t&&"p"!==t&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=r,"form"===t&&(o.formTag=r),"a"===t&&(o.aTagInScope=r),"button"===t&&(o.buttonTagInScope=r),"nobr"===t&&(o.nobrTagInScope=r),"p"===t&&(o.pTagInButtonScope=r),"li"===t&&(o.listItemTagAutoclosing=r),"dd"!==t&&"dt"!==t||(o.dlItemTagAutoclosing=r),o},M_=function(e,t){
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
case"html":return"head"===e||"body"===e;case"#document":return"html"===e}
// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==t&&"h2"!==t&&"h3"!==t&&"h4"!==t&&"h5"!==t&&"h6"!==t;case"rp":case"rt":return-1===P_.indexOf(t);case"body":case"caption":case"col":case"colgroup":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":
// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==t}return!0},D_=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":
// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},R_=function(e){if(!e)return[];var t=[];do{t.push(e)}while(e=e._currentElement._owner);return t.reverse(),t},A_={};T_=function(e,t,n,o){o=o||N_;var r=o.current,a=r&&r.tag;null!=t&&(k_(null==e,"validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var i=M_(e,a)?null:r,s=i?null:D_(e,o),u=i||s;if(u){var l,c=u.tag,p=u.instance,d=n&&n._currentElement._owner,f=p&&p._currentElement._owner,h=R_(d),m=R_(f),g=Math.min(h.length,m.length),y=-1;for(l=0;l<g&&h[l]===m[l];l++)y=l;var v=h.slice(y+1).map(function(e){return e.getName()||"(unknown)"}),b=m.slice(y+1).map(function(e){return e.getName()||"(unknown)"}),_=[].concat(
// If the parent and child instances have a common owner ancestor, start
// with that -- otherwise we just start with the parent's owners.
-1!==y?h[y].getName()||"(unknown)":[],b,c,
// If we're warning about an invalid (non-parent) ancestry, add '...'
s?["..."]:[],v,e).join(" > "),C=!!i+"|"+e+"|"+c+"|"+_;if(A_[C])return;A_[C]=!0;var w=e,E="";if("#text"===e?/\S/.test(t)?w="Text nodes":(w="Whitespace text nodes",E=" Make sure you don't have any extra whitespace between tags on each line of your source code."):w="<"+e+">",i){var k="";"table"===c&&"tr"===e&&(k+=" Add a <tbody> to your code to match the DOM tree generated by the browser."),k_(!1,"validateDOMNesting(...): %s cannot appear as a child of <%s>.%s See %s.%s",w,c,E,_,k)}else k_(!1,"validateDOMNesting(...): %s cannot appear as a descendant of <%s>. See %s.",w,c,_)}},T_.updatedAncestorInfo=x_,
// For testing
T_.isTagValidInContext=function(e,t){t=t||N_;var n=t.current,o=n&&n.tag;return M_(e,o)&&!D_(e,t)};var U_=T_,j_=Jy&&Qy||Jy,L_=Ha,F_=wm,B_=vg,H_=wh,W_=Jf,V_=yl,q_=Ng,Y_=cc,z_=Rl,K_=Jg,G_=bl,X_=Il,$_=Ey,Q_=Hy,J_=Dy,Z_=j_,eC=yd,tC=e_,nC=C_,oC=Va,rC=ch,aC=oi,iC=Zd,sC=Cv,uC=$d,lC=U_,cC=Ka,pC=G_,dC=Y_.deleteListener,fC=X_.getNodeFromInstance,hC=K_.listenTo,mC=z_.registrationNameModules,gC={string:!0,number:!0},yC="__html",vC={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null},bC=11,_C={},CC=oC;CC=function(e){var t=null!=this._contentDebugID,n=this._debugID,o=-n;if(null==e)return t&&eC.debugTool.onUnmountComponent(this._contentDebugID),void(this._contentDebugID=null);lC(null,String(e),this,this._ancestorInfo),this._contentDebugID=o,t?(eC.debugTool.onBeforeUpdateComponent(o,e),eC.debugTool.onUpdateComponent(o)):(eC.debugTool.onBeforeMountComponent(o,e,n),eC.debugTool.onMountComponent(o),eC.debugTool.onSetChildren(n,[o]))};
// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var wC={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},EC={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},kC={listing:!0,pre:!0,textarea:!0},TC=L_({menuitem:!0},EC),SC=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,IC={},OC={}.hasOwnProperty,PC=1;Ho.displayName="ReactDOMComponent",Ho.Mixin={/**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {?ReactDOMComponent} the parent component instance
	   * @param {?object} info about the host container
	   * @param {object} context
	   * @return {string} The computed markup.
	   */
mountComponent:function(e,t,n,o){this._rootNodeID=PC++,this._domID=n._idCounter++,this._hostParent=t,this._hostContainerInfo=n;var r=this._currentElement.props;switch(this._tag){case"audio":case"form":case"iframe":case"img":case"link":case"object":case"source":case"video":this._wrapperState={listeners:null},e.getReactMountReady().enqueue(jo,this);break;case"input":$_.mountWrapper(this,r,t),r=$_.getHostProps(this,r),e.getReactMountReady().enqueue(Uo,this),e.getReactMountReady().enqueue(jo,this);break;case"option":Q_.mountWrapper(this,r,t),r=Q_.getHostProps(this,r);break;case"select":J_.mountWrapper(this,r,t),r=J_.getHostProps(this,r),e.getReactMountReady().enqueue(jo,this);break;case"textarea":Z_.mountWrapper(this,r,t),r=Z_.getHostProps(this,r),e.getReactMountReady().enqueue(Uo,this),e.getReactMountReady().enqueue(jo,this)}No(this,r);
// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
var a,i;null!=t?(a=t._namespaceURI,i=t._tag):n._tag&&(a=n._namespaceURI,i=n._tag),(null==a||a===W_.svg&&"foreignobject"===i)&&(a=W_.html),a===W_.html&&("svg"===this._tag?a=W_.svg:"math"===this._tag&&(a=W_.mathml)),this._namespaceURI=a;var s;null!=t?s=t._ancestorInfo:n._tag&&(s=n._ancestorInfo),s&&
// parentInfo should always be present except for the top-level
// component when server rendering
lC(this._tag,null,this,s),this._ancestorInfo=lC.updatedAncestorInfo(s,this._tag,this);var u;if(e.useCreateElement){var l,c=n._ownerDocument;if(a===W_.html)if("script"===this._tag){
// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var p=c.createElement("div"),d=this._currentElement.type;p.innerHTML="<"+d+"></"+d+">",l=p.removeChild(p.firstChild)}else l=r.is?c.createElement(this._currentElement.type,r.is):c.createElement(this._currentElement.type);else l=c.createElementNS(a,this._currentElement.type);X_.precacheNode(this,l),this._flags|=pC.hasCachedChildNodes,this._hostParent||q_.setAttributeForRoot(l),this._updateDOMProperties(null,r,e);var f=H_(l);this._createInitialChildren(e,r,o,f),u=f}else{var h=this._createOpenTagMarkupAndPutListeners(e,r),m=this._createContentMarkup(e,r,o);u=!m&&EC[this._tag]?h+"/>":h+">"+m+"</"+this._currentElement.type+">"}switch(this._tag){case"input":e.getReactMountReady().enqueue(Do,this),r.autoFocus&&e.getReactMountReady().enqueue(F_.focusDOMComponent,this);break;case"textarea":e.getReactMountReady().enqueue(Ro,this),r.autoFocus&&e.getReactMountReady().enqueue(F_.focusDOMComponent,this);break;case"select":case"button":r.autoFocus&&e.getReactMountReady().enqueue(F_.focusDOMComponent,this);break;case"option":e.getReactMountReady().enqueue(Ao,this)}return u},/**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @return {string} Markup of opening tag.
	   */
_createOpenTagMarkupAndPutListeners:function(e,t){var n="<"+this._currentElement.type;for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];if(null!=r)if(mC.hasOwnProperty(o))r&&xo(this,o,r,e);else{"style"===o&&(r&&(
// See `_updateDOMProperties`. style block
this._previousStyle=r,r=this._previousStyleCopy=L_({},t.style)),r=B_.createMarkupForStyles(r,this));var a=null;null!=this._tag&&Bo(this._tag,t)?vC.hasOwnProperty(o)||(a=q_.createMarkupForCustomAttribute(o,r)):a=q_.createMarkupForProperty(o,r),a&&(n+=" "+a)}}
// For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
// For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
return e.renderToStaticMarkup?n:(this._hostParent||(n+=" "+q_.createMarkupForRoot()),n+=" "+q_.createMarkupForID(this._domID))},/**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @param {object} context
	   * @return {string} Content markup.
	   */
_createContentMarkup:function(e,t,n){var o="",r=t.dangerouslySetInnerHTML;if(null!=r)null!=r.__html&&(o=r.__html);else{var a=gC[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)
// TODO: Validate that text is allowed as a child of this node
o=rC(a),CC.call(this,a);else if(null!=i){var s=this.mountChildren(i,e,n);o=s.join("")}}return kC[this._tag]&&"\n"===o.charAt(0)?"\n"+o:o},_createInitialChildren:function(e,t,n,o){
// Intentional use of != to avoid catching zero/false.
var r=t.dangerouslySetInnerHTML;if(null!=r)null!=r.__html&&H_.queueHTML(o,r.__html);else{var a=gC[typeof t.children]?t.children:null,i=null!=a?null:t.children;
// TODO: Validate that text is allowed as a child of this node
if(null!=a)
// Avoid setting textContent when the text is empty. In IE11 setting
// textContent on a text area will cause the placeholder to not
// show within the textarea until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
""!==a&&(CC.call(this,a),H_.queueText(o,a));else if(null!=i)for(var s=this.mountChildren(i,e,n),u=0;u<s.length;u++)H_.queueChild(o,s[u])}},/**
	   * Receives a next element and updates the component.
	   *
	   * @internal
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   */
receiveComponent:function(e,t,n){var o=this._currentElement;this._currentElement=e,this.updateComponent(t,o,e,n)},/**
	   * Updates a DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
updateComponent:function(e,t,n,o){var r=t.props,a=this._currentElement.props;switch(this._tag){case"input":r=$_.getHostProps(this,r),a=$_.getHostProps(this,a);break;case"option":r=Q_.getHostProps(this,r),a=Q_.getHostProps(this,a);break;case"select":r=J_.getHostProps(this,r),a=J_.getHostProps(this,a);break;case"textarea":r=Z_.getHostProps(this,r),a=Z_.getHostProps(this,a)}switch(No(this,a),this._updateDOMProperties(r,a,e),this._updateDOMChildren(r,a,e,o),this._tag){case"input":
// Update the wrapper around inputs *after* updating props. This has to
// happen after `_updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
$_.updateWrapper(this),
// We also check that we haven't missed a value update, such as a
// Radio group shifting the checked value to another named radio input.
uC.updateValueIfChanged(this);break;case"textarea":Z_.updateWrapper(this);break;case"select":
// <select> value update needs to occur after <option> children
// reconciliation
e.getReactMountReady().enqueue(Lo,this)}},/**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {?DOMElement} node
	   */
_updateDOMProperties:function(e,t,n){var o,r,a;for(o in e)if(!t.hasOwnProperty(o)&&e.hasOwnProperty(o)&&null!=e[o])if("style"===o){var i=this._previousStyleCopy;for(r in i)i.hasOwnProperty(r)&&(a=a||{},a[r]="");this._previousStyleCopy=null}else mC.hasOwnProperty(o)?e[o]&&
// Only call deleteListener if there was a listener previously or
// else willDeleteListener gets called when there wasn't actually a
// listener (e.g., onClick={null})
dC(this,o):Bo(this._tag,e)?vC.hasOwnProperty(o)||q_.deleteValueForAttribute(fC(this),o):(V_.properties[o]||V_.isCustomAttribute(o))&&q_.deleteValueForProperty(fC(this),o);for(o in t){var s=t[o],u="style"===o?this._previousStyleCopy:null!=e?e[o]:undefined;if(t.hasOwnProperty(o)&&s!==u&&(null!=s||null!=u))if("style"===o)if(s?(Po(this._previousStyleCopy,this._previousStyle,this),this._previousStyle=s,s=this._previousStyleCopy=L_({},s)):this._previousStyleCopy=null,u){
// Unset styles on `lastProp` but not on `nextProp`.
for(r in u)!u.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(a=a||{},a[r]="");
// Update styles that changed since `lastProp`.
for(r in s)s.hasOwnProperty(r)&&u[r]!==s[r]&&(a=a||{},a[r]=s[r])}else
// Relies on `updateStylesByID` not mutating `styleUpdates`.
a=s;else if(mC.hasOwnProperty(o))s?xo(this,o,s,n):u&&dC(this,o);else if(Bo(this._tag,t))vC.hasOwnProperty(o)||q_.setValueForAttribute(fC(this),o,s);else if(V_.properties[o]||V_.isCustomAttribute(o)){var l=fC(this);
// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
null!=s?q_.setValueForProperty(l,o,s):q_.deleteValueForProperty(l,o)}}a&&B_.setValueForStyles(fC(this),a,this)},/**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   */
_updateDOMChildren:function(e,t,n,o){var r=gC[typeof e.children]?e.children:null,a=gC[typeof t.children]?t.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,s=t.dangerouslySetInnerHTML&&t.dangerouslySetInnerHTML.__html,u=null!=r?null:e.children,l=null!=a?null:t.children,c=null!=r||null!=i,p=null!=a||null!=s;null!=u&&null==l?this.updateChildren(null,n,o):c&&!p&&(this.updateTextContent(""),eC.debugTool.onSetChildren(this._debugID,[])),null!=a?r!==a&&(this.updateTextContent(""+a),CC.call(this,a)):null!=s?(i!==s&&this.updateMarkup(""+s),eC.debugTool.onSetChildren(this._debugID,[])):null!=l&&(CC.call(this,null),this.updateChildren(l,n,o))},getHostNode:function(){return fC(this)},/**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
unmountComponent:function(e){switch(this._tag){case"audio":case"form":case"iframe":case"img":case"link":case"object":case"source":case"video":var t=this._wrapperState.listeners;if(t)for(var n=0;n<t.length;n++)t[n].remove();break;case"input":case"textarea":uC.stopTracking(this);break;case"html":case"head":case"body":/**
	         * Components like <html> <head> and <body> can't be removed or added
	         * easily in a cross-browser way, however it's valuable to be able to
	         * take advantage of React's reconciliation for styling and <title>
	         * management. So we just document it and throw in dangerous cases.
	         */
aC(!1,"<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this._tag)}this.unmountChildren(e),X_.uncacheNode(this),Y_.deleteAllListeners(this),this._rootNodeID=0,this._domID=0,this._wrapperState=null,CC.call(this,null)},getPublicInstance:function(){return fC(this)}},L_(Ho.prototype,Ho.Mixin,tC.Mixin);var NC=Ho,xC=Ha,MC=wh,DC=Il,RC=function(e){
// ReactCompositeComponent uses this:
this._currentElement=null,
// ReactDOMComponentTree uses these:
this._hostNode=null,this._hostParent=null,this._hostContainerInfo=null,this._domID=0};xC(RC.prototype,{mountComponent:function(e,t,n,o){var r=n._idCounter++;this._domID=r,this._hostParent=t,this._hostContainerInfo=n;var a=" react-empty: "+this._domID+" ";if(e.useCreateElement){var i=n._ownerDocument,s=i.createComment(a);return DC.precacheNode(this,s),MC(s)}return e.renderToStaticMarkup?"":"\x3c!--"+a+"--\x3e"},receiveComponent:function(){},getHostNode:function(){return DC.getNodeFromInstance(this)},unmountComponent:function(){DC.uncacheNode(this)}});var AC=RC,UC=oi,jC={isAncestor:Vo,getLowestCommonAncestor:Wo,getParentInstance:qo,traverseTwoPhase:Yo,traverseEnterLeave:zo},LC=Ha,FC=sm,BC=wh,HC=Il,WC=ch,VC=oi,qC=U_,YC=function(e){
// TODO: This is really a ReactText (ReactNode), not a ReactElement
this._currentElement=e,this._stringText=""+e,
// ReactDOMComponentTree uses these:
this._hostNode=null,this._hostParent=null,
// Properties
this._domID=0,this._mountIndex=0,this._closingComment=null,this._commentNodes=null};LC(YC.prototype,{/**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
mountComponent:function(e,t,n,o){var r;null!=t?r=t._ancestorInfo:null!=n&&(r=n._ancestorInfo),r&&
// parentInfo should always be present except for the top-level
// component when server rendering
qC(null,this._stringText,this,r);var a=n._idCounter++,i=" react-text: "+a+" ";if(this._domID=a,this._hostParent=t,e.useCreateElement){var s=n._ownerDocument,u=s.createComment(i),l=s.createComment(" /react-text "),c=BC(s.createDocumentFragment());return BC.queueChild(c,BC(u)),this._stringText&&BC.queueChild(c,BC(s.createTextNode(this._stringText))),BC.queueChild(c,BC(l)),HC.precacheNode(this,u),this._closingComment=l,c}var p=WC(this._stringText);return e.renderToStaticMarkup?p:"\x3c!--"+i+"--\x3e"+p+"\x3c!-- /react-text --\x3e"},/**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;if(n!==this._stringText){
// TODO: Save this as pending props and use performUpdateIfNecessary
// and/or updateComponent to do the actual update for consistency with
// other component types?
this._stringText=n;var o=this.getHostNode();FC.replaceDelimitedText(o[0],o[1],n)}}},getHostNode:function(){var e=this._commentNodes;if(e)return e;if(!this._closingComment)for(var t=HC.getNodeFromInstance(this),n=t.nextSibling;;){if(null==n&&VC(!1,"Missing closing comment for text component %s",this._domID),8===n.nodeType&&" /react-text "===n.nodeValue){this._closingComment=n;break}n=n.nextSibling}return e=[this._hostNode,this._closingComment],this._commentNodes=e,e},unmountComponent:function(){this._closingComment=null,this._commentNodes=null,HC.uncacheNode(this)}});var zC=YC,KC=Ha,GC=Kd,XC=Id,$C=Va,QC={initialize:$C,close:function(){tw.isBatchingUpdates=!1}},JC={initialize:$C,close:GC.flushBatchedUpdates.bind(GC)},ZC=[JC,QC];KC(Ko.prototype,XC,{getTransactionWrappers:function(){return ZC}});var ew=new Ko,tw={isBatchingUpdates:!1,/**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
batchedUpdates:function(e,t,n,o,r,a){var i=tw.isBatchingUpdates;
// The code is written this way to avoid extra allocations
// The code is written this way to avoid extra allocations
return tw.isBatchingUpdates=!0,i?e(t,n,o,r,a):ew.perform(e,null,t,n,o,r,a)}},nw=tw,ow=Va,rw={/**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},/**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):(console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:ow})},registerDefault:function(){}},aw=rw,iw=/*#__PURE__*/Object.freeze({default:aw,__moduleExports:aw}),sw=Go,uw=iw&&aw||iw,lw=Ha,cw=uw,pw=Cc,dw=xc,fw=Il,hw=Kd,mw=Qd,gw=sw;lw($o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),dw.addPoolingTo($o,dw.twoArgumentPooler);var yw={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:pw.canUseDOM?window:null,setHandleTopLevel:function(e){yw._handleTopLevel=e},setEnabled:function(e){yw._enabled=!!e},isEnabled:function(){return yw._enabled},/**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
trapBubbledEvent:function(e,t,n){return n?cw.listen(n,t,yw.dispatchEvent.bind(null,e)):null},/**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
trapCapturedEvent:function(e,t,n){return n?cw.capture(n,t,yw.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=Jo.bind(null,e);cw.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(yw._enabled){var n=$o.getPooled(e,t);try{
// Event queue being processed in the same cycle allows
// `preventDefault`.
hw.batchedUpdates(Qo,n)}finally{$o.release(n)}}}},vw=yw,bw=yl,_w=cc,Cw=Kl,ww=Ev,Ew=Kv,kw=Jg,Tw=Zv,Sw=Kd,Iw={Component:ww.injection,DOMProperty:bw.injection,EmptyComponent:Ew.injection,EventPluginHub:_w.injection,EventPluginUtils:Cw.injection,EventEmitter:kw.injection,HostComponent:Tw.injection,Updates:Sw.injection},Ow=Iw,Pw=tr,Nw=Cc,xw=Pw,Mw=Rc,Dw=Nw.canUseDOM&&"selection"in document&&!("getSelection"in window),Rw={/**
	   * @param {DOMElement} node
	   */
getOffsets:Dw?or:rr,/**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
setOffsets:Dw?ar:ir},Aw=Rw,Uw=sr,jw=Uw,Lw=ur,Fw=Lw,Bw=lr,Hw=cr,Ww=Aw,Vw=Bw,qw=vm,Yw=Hw,zw={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=Yw();return{focusedElem:e,selectionRange:zw.hasSelectionCapabilities(e)?zw.getSelection(e):null}},/**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
restoreSelection:function(e){var t=Yw(),n=e.focusedElem,o=e.selectionRange;t!==n&&pr(n)&&(zw.hasSelectionCapabilities(n)&&zw.setSelection(n,o),qw(n))},/**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
getSelection:function(e){var t;if("selectionStart"in e)
// Modern browser with input or textarea.
t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){
// IE8 input.
var n=document.selection.createRange();
// There can only be one selection per document in IE, so it must
// be in our element.
n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else
// Content editable or old IE textarea.
t=Ww.getOffsets(e);return t||{start:0,end:0}},/**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
setSelection:function(e,t){var n=t.start,o=t.end;if(o===undefined&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var r=e.createTextRange();r.collapse(!0),r.moveStart("character",n),r.moveEnd("character",o-n),r.select()}else Ww.setOffsets(e,t)}},Kw=zw,Gw=Ha,Xw=Cp,$w=xc,Qw=Jg,Jw=Kw,Zw=yd,eE=Id,tE=u_,nE={/**
	   * @return {Selection} Selection information.
	   */
initialize:Jw.getSelectionInformation,/**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
close:Jw.restoreSelection},oE={/**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
initialize:function(){var e=Qw.isEnabled();return Qw.setEnabled(!1),e},/**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
	   *   restores the previous value.
	   */
close:function(e){Qw.setEnabled(e)}},rE={/**
	   * Initializes the internal `onDOMReady` queue.
	   */
initialize:function(){this.reactMountReady.reset()},/**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
close:function(){this.reactMountReady.notifyAll()}},aE=[nE,oE,rE];aE.push({initialize:Zw.debugTool.onBeginFlush,close:Zw.debugTool.onEndFlush});var iE={/**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap procedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
getTransactionWrappers:function(){return aE},/**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
getReactMountReady:function(){return this.reactMountReady},/**
	   * @return {object} The queue to collect React async events.
	   */
getUpdateQueue:function(){return tE},/**
	   * Save current transaction state -- if the return value from this method is
	   * passed to `rollback`, the transaction will be reset to that state.
	   */
checkpoint:function(){
// reactMountReady is the our only stateful wrapper
return this.reactMountReady.checkpoint()},rollback:function(e){this.reactMountReady.rollback(e)},/**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
destructor:function(){Xw.release(this.reactMountReady),this.reactMountReady=null}};Gw(dr.prototype,eE,iE),$w.addPoolingTo(dr);var sE=dr,uE={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},lE={accentHeight:"accent-height",accumulate:0,additive:0,alignmentBaseline:"alignment-baseline",allowReorder:"allowReorder",alphabetic:0,amplitude:0,arabicForm:"arabic-form",ascent:0,attributeName:"attributeName",attributeType:"attributeType",autoReverse:"autoReverse",azimuth:0,baseFrequency:"baseFrequency",baseProfile:"baseProfile",baselineShift:"baseline-shift",bbox:0,begin:0,bias:0,by:0,calcMode:"calcMode",capHeight:"cap-height",clip:0,clipPath:"clip-path",clipRule:"clip-rule",clipPathUnits:"clipPathUnits",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",contentScriptType:"contentScriptType",contentStyleType:"contentStyleType",cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:"diffuseConstant",direction:0,display:0,divisor:0,dominantBaseline:"dominant-baseline",dur:0,dx:0,dy:0,edgeMode:"edgeMode",elevation:0,enableBackground:"enable-background",end:0,exponent:0,externalResourcesRequired:"externalResourcesRequired",fill:0,fillOpacity:"fill-opacity",fillRule:"fill-rule",filter:0,filterRes:"filterRes",filterUnits:"filterUnits",floodColor:"flood-color",floodOpacity:"flood-opacity",focusable:0,fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",glyphRef:"glyphRef",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",hanging:0,horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",ideographic:0,imageRendering:"image-rendering",in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:"kernelMatrix",kernelUnitLength:"kernelUnitLength",kerning:0,keyPoints:"keyPoints",keySplines:"keySplines",keyTimes:"keyTimes",lengthAdjust:"lengthAdjust",letterSpacing:"letter-spacing",lightingColor:"lighting-color",limitingConeAngle:"limitingConeAngle",local:0,markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",markerHeight:"markerHeight",markerUnits:"markerUnits",markerWidth:"markerWidth",mask:0,maskContentUnits:"maskContentUnits",maskUnits:"maskUnits",mathematical:0,mode:0,numOctaves:"numOctaves",offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pathLength:"pathLength",patternContentUnits:"patternContentUnits",patternTransform:"patternTransform",patternUnits:"patternUnits",pointerEvents:"pointer-events",points:0,pointsAtX:"pointsAtX",pointsAtY:"pointsAtY",pointsAtZ:"pointsAtZ",preserveAlpha:"preserveAlpha",preserveAspectRatio:"preserveAspectRatio",primitiveUnits:"primitiveUnits",r:0,radius:0,refX:"refX",refY:"refY",renderingIntent:"rendering-intent",repeatCount:"repeatCount",repeatDur:"repeatDur",requiredExtensions:"requiredExtensions",requiredFeatures:"requiredFeatures",restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:"shape-rendering",slope:0,spacing:0,specularConstant:"specularConstant",specularExponent:"specularExponent",speed:0,spreadMethod:"spreadMethod",startOffset:"startOffset",stdDeviation:"stdDeviation",stemh:0,stemv:0,stitchTiles:"stitchTiles",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",string:0,stroke:0,strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",surfaceScale:"surfaceScale",systemLanguage:"systemLanguage",tableValues:"tableValues",targetX:"targetX",targetY:"targetY",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",textLength:"textLength",to:0,transform:0,u1:0,u2:0,underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicode:0,unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",values:0,vectorEffect:"vector-effect",version:0,vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",viewBox:"viewBox",viewTarget:"viewTarget",visibility:0,widths:0,wordSpacing:"word-spacing",writingMode:"writing-mode",x:0,xHeight:"x-height",x1:0,x2:0,xChannelSelector:"xChannelSelector",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlns:0,xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space",y:0,y1:0,y2:0,yChannelSelector:"yChannelSelector",z:0,zoomAndPan:"zoomAndPan"},cE={Properties:{},DOMAttributeNamespaces:{xlinkActuate:uE.xlink,xlinkArcrole:uE.xlink,xlinkHref:uE.xlink,xlinkRole:uE.xlink,xlinkShow:uE.xlink,xlinkTitle:uE.xlink,xlinkType:uE.xlink,xmlBase:uE.xml,xmlLang:uE.xml,xmlSpace:uE.xml},DOMAttributeNames:{}};Object.keys(lE).forEach(function(e){cE.Properties[e]=0,lE[e]&&(cE.DOMAttributeNames[e]=lE[e])});var pE=cE,dE=vc,fE=Cc,hE=Il,mE=Kw,gE=Kc,yE=Hw,vE=tf,bE=Cv,_E=fE.canUseDOM&&"documentMode"in document&&document.documentMode<=11,CE={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:["topBlur","topContextMenu","topFocus","topKeyDown","topKeyUp","topMouseDown","topMouseUp","topSelectionChange"]}},wE=null,EE=null,kE=null,TE=!1,SE=!1,IE={eventTypes:CE,extractEvents:function(e,t,n,o){if(!SE)return null;var r=t?hE.getNodeFromInstance(t):window;switch(e){
// Track the input node that has focus.
case"topFocus":(vE(r)||"true"===r.contentEditable)&&(wE=r,EE=t,kE=null);break;case"topBlur":wE=null,EE=null,kE=null;break;
// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case"topMouseDown":TE=!0;break;case"topContextMenu":case"topMouseUp":return TE=!1,hr(n,o);
// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case"topSelectionChange":if(_E)break;
// falls through
case"topKeyDown":case"topKeyUp":return hr(n,o)}return null},didPutListener:function(e,t,n){"onSelect"===t&&(SE=!0)}},OE=IE,PE=Kc,NE={animationName:null,elapsedTime:null,pseudoElement:null};PE.augmentClass(mr,NE);var xE=mr,ME=Kc,DE={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};ME.augmentClass(gr,DE);var RE=gr,AE=Sf,UE={relatedTarget:null};AE.augmentClass(yr,UE);var jE=yr,LE=vr,FE=LE,BE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WE=br,VE=/*#__PURE__*/Object.freeze({default:WE,__moduleExports:WE}),qE=VE&&WE||VE,YE=Sf,zE=LE,KE=qE,GE=Nf,XE={key:KE,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:GE,
// Legacy Interface
charCode:function(e){
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
return"keypress"===e.type?zE(e):0},keyCode:function(e){
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
return"keypress"===e.type?zE(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};YE.augmentClass(_r,XE);var $E=_r,QE=Uf,JE={dataTransfer:null};QE.augmentClass(Cr,JE);var ZE=Cr,ek=Sf,tk=Nf,nk={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:tk};ek.augmentClass(wr,nk);var ok=wr,rk=Kc,ak={propertyName:null,elapsedTime:null,pseudoElement:null};rk.augmentClass(Er,ak);var ik=Er,sk=Uf,uk={deltaX:function(e){// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,
// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null};sk.augmentClass(kr,uk);var lk=kr,ck=uw,pk=vc,dk=Il,fk=xE,hk=RE,mk=Kc,gk=jE,yk=$E,vk=Uf,bk=ZE,_k=ok,Ck=ik,wk=Sf,Ek=lk,kk=Va,Tk=LE,Sk=oi,Ik={},Ok={};["abort","animationEnd","animationIteration","animationStart","blur","canPlay","canPlayThrough","click","contextMenu","copy","cut","doubleClick","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","focus","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","progress","rateChange","reset","scroll","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchMove","touchStart","transitionEnd","volumeChange","waiting","wheel"].forEach(function(e){var t=e[0].toUpperCase()+e.slice(1),n="on"+t,o="top"+t,r={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[o]};Ik[e]=r,Ok[o]=r});var Pk={},Nk={eventTypes:Ik,extractEvents:function(e,t,n,o){var r=Ok[e];if(!r)return null;var a;switch(e){case"topAbort":case"topCanPlay":case"topCanPlayThrough":case"topDurationChange":case"topEmptied":case"topEncrypted":case"topEnded":case"topError":case"topInput":case"topInvalid":case"topLoad":case"topLoadedData":case"topLoadedMetadata":case"topLoadStart":case"topPause":case"topPlay":case"topPlaying":case"topProgress":case"topRateChange":case"topReset":case"topSeeked":case"topSeeking":case"topStalled":case"topSubmit":case"topSuspend":case"topTimeUpdate":case"topVolumeChange":case"topWaiting":
// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
a=mk;break;case"topKeyPress":
// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===Tk(n))return null;/* falls through */
case"topKeyDown":case"topKeyUp":a=yk;break;case"topBlur":case"topFocus":a=gk;break;case"topClick":
// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===n.button)return null;/* falls through */
case"topDoubleClick":case"topMouseDown":case"topMouseMove":case"topMouseUp":
// TODO: Disabled elements should not respond to mouse events
/* falls through */
case"topMouseOut":case"topMouseOver":case"topContextMenu":a=vk;break;case"topDrag":case"topDragEnd":case"topDragEnter":case"topDragExit":case"topDragLeave":case"topDragOver":case"topDragStart":case"topDrop":a=bk;break;case"topTouchCancel":case"topTouchEnd":case"topTouchMove":case"topTouchStart":a=_k;break;case"topAnimationEnd":case"topAnimationIteration":case"topAnimationStart":a=fk;break;case"topTransitionEnd":a=Ck;break;case"topScroll":a=wk;break;case"topWheel":a=Ek;break;case"topCopy":case"topCut":case"topPaste":a=hk}a||Sk(!1,"SimpleEventPlugin: Unhandled event type, `%s`.",e);var i=a.getPooled(r,t,n,o);return pk.accumulateTwoPhaseDispatches(i),i},didPutListener:function(e,t,n){
// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
if("onClick"===t&&!Sr(e._tag)){var o=Tr(e),r=dk.getNodeFromInstance(e);Pk[o]||(Pk[o]=ck.listen(r,"click",kk))}},willDeleteListener:function(e,t){if("onClick"===t&&!Sr(e._tag)){var n=Tr(e);Pk[n].remove(),delete Pk[n]}}},xk=Nk,Mk=_f&&bf||_f,Dk=Pl,Rk=yp,Ak=Mk,Uk=wf,jk=Wf,Lk=$f,Fk=ym,Bk=NC,Hk=Il,Wk=AC,Vk=jC,qk=zC,Yk=nw,zk=vw,Kk=Ow,Gk=sE,Xk=pE,$k=OE,Qk=xk,Jk=!1,Zk={inject:Ir},eT=U_,tT=9,nT=Or,oT={useCreateElement:!0,useFiber:!1},rT=oT,aT=65521,iT=Pr,sT=iT,uT=/\/?>/,lT=/^<\!\-\-/,cT={CHECKSUM_ATTR_NAME:"data-react-checksum",/**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
addChecksumToMarkup:function(e){var t=sT(e);
// Add checksum (handle both parent tags, comments and self-closing tags)
// Add checksum (handle both parent tags, comments and self-closing tags)
return lT.test(e)?e:e.replace(uT," "+cT.CHECKSUM_ATTR_NAME+'="'+t+'"$&')},/**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
canReuseMarkup:function(e,t){var n=t.getAttribute(cT.CHECKSUM_ATTR_NAME);return n=n&&parseInt(n,10),sT(e)===n}},pT=cT,dT=wh,fT=yl,hT=ul,mT=Jg,gT=xi,yT=Il,vT=nT,bT=rT,_T=Ep,CT=av,wT=yd,ET=pT,kT=Ed,TT=u_,ST=Kd,IT=si,OT=pb,PT=oi,NT=uh,xT=wv,MT=Ka,DT=fT.ID_ATTRIBUTE_NAME,RT=fT.ROOT_ATTRIBUTE_NAME,AT=1,UT=9,jT=11,LT={},FT=1,BT=function(){this.rootID=FT++};BT.prototype.isReactComponent={},BT.displayName="TopLevelWrapper",BT.prototype.render=function(){return this.props.child},BT.isReactTopLevelWrapper=!0;/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
var HT={TopLevelWrapper:BT,/**
	   * Used by devtools. The keys are not important.
	   */
_instancesByReactRootID:LT,/**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
scrollMonitor:function(e,t){t()},/**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
_updateRootComponent:function(e,t,n,o,r){return HT.scrollMonitor(o,function(){TT.enqueueElementInternal(e,t,n),r&&TT.enqueueCallbackInternal(e,r)}),e},/**
	   * Render a new component into the DOM. Hooked by hooks!
	   *
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
_renderNewRootComponent:function(e,t,n,o){
// Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case.
MT(null==gT.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",gT.current&&gT.current.getName()||"ReactCompositeComponent"),Lr(t)||PT(!1,"_registerComponent(...): Target container is not a DOM element."),mT.ensureScrollValueMonitoring();var r=OT(e,!1);
// The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
ST.batchedUpdates(Rr,r,t,n,o);var a=r._instance.rootID;return LT[a]=r,r},/**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
renderSubtreeIntoContainer:function(e,t,n,o){return null!=e&&CT.has(e)||PT(!1,"parentComponent must be a valid React Component"),HT._renderSubtreeIntoContainer(e,t,n,o)},_renderSubtreeIntoContainer:function(e,t,n,o){TT.validateCallback(o,"ReactDOM.render"),hT.isValidElement(t)||PT(!1,"ReactDOM.render(): Invalid component element.%s","string"==typeof t?" Instead of passing a string like 'div', pass React.createElement('div') or <div />.":"function"==typeof t?" Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.":// Check if it quacks like an element
null!=t&&t.props!==undefined?" This may be caused by unintentionally loading two independent copies of React.":""),MT(!n||!n.tagName||"BODY"!==n.tagName.toUpperCase(),"render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");var r,a=hT.createElement(BT,{child:t});if(e){var i=CT.get(e);r=i._processChildContext(i._context)}else r=IT;var s=Hr(n);if(s){var u=s._currentElement,l=u.props.child;if(xT(l,t)){var c=s._renderedComponent.getPublicInstance(),p=o&&function(){o.call(c)};return HT._updateRootComponent(s,a,r,n,p),c}HT.unmountComponentAtNode(n)}var d=xr(n),f=d&&!!Mr(d),h=Ur(n);if(MT(!h,"render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),!f||d.nextSibling)for(var m=d;m;){if(Mr(m)){MT(!1,"render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.");break}m=m.nextSibling}var g=f&&!s&&!h,y=HT._renderNewRootComponent(a,n,g,r)._renderedComponent.getPublicInstance();return o&&o.call(y),y},/**
	   * Renders a React component into the DOM in the supplied `container`.
	   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
render:function(e,t,n){return HT._renderSubtreeIntoContainer(null,e,t,n)},/**
	   * Unmounts and destroys the React component rendered in the `container`.
	   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
unmountComponentAtNode:function(e){
// Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (Strictly speaking, unmounting won't cause a
// render but we still don't expect to be in a render call here.)
MT(null==gT.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",gT.current&&gT.current.getName()||"ReactCompositeComponent"),Lr(e)||PT(!1,"unmountComponentAtNode(...): Target container is not a DOM element."),MT(!jr(e),"unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");var t=Hr(e);if(!t){
// Check if the node being unmounted was rendered by React, but isn't a
// root node.
var n=Ur(e),o=1===e.nodeType&&e.hasAttribute(RT);return MT(!n,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",o?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1}return delete LT[t._instance.rootID],ST.batchedUpdates(Ar,t,e,!1),!0},_mountImageIntoNode:function(e,t,n,o,r){if(Lr(t)||PT(!1,"mountComponentIntoNode(...): Target container is not valid."),o){var a=xr(t);if(ET.canReuseMarkup(e,a))return void yT.precacheNode(n,a);var i=a.getAttribute(ET.CHECKSUM_ATTR_NAME);a.removeAttribute(ET.CHECKSUM_ATTR_NAME);var s=a.outerHTML;a.setAttribute(ET.CHECKSUM_ATTR_NAME,i);var u,l=e;t.nodeType===AT?(u=document.createElement("div"),u.innerHTML=e,l=u.innerHTML):(u=document.createElement("iframe"),document.body.appendChild(u),u.contentDocument.write(e),l=u.contentDocument.documentElement.outerHTML,document.body.removeChild(u));var c=Nr(l,s),p=" (client) "+l.substring(c-20,c+20)+"\n (server) "+s.substring(c-20,c+20);t.nodeType===UT&&PT(!1,"You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",p),MT(!1,"React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:\n%s",p)}if(t.nodeType===UT&&PT(!1,"You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering."),r.useCreateElement){for(;t.lastChild;)t.removeChild(t.lastChild);dT.insertTreeBefore(t,e,null)}else NT(t,e),yT.precacheNode(n,t.firstChild);var d=yT.getInstanceFromNode(t.firstChild);0!==d._debugID&&wT.debugTool.onHostOperation({instanceID:d._debugID,type:"mount",payload:e.toString()})}},WT=HT,VT=kv,qT=Wr,YT=xi,zT=Il,KT=av,GT=qT,XT=oi,$T=Ka,QT=Vr,JT=WT,ZT=JT.renderSubtreeIntoContainer,eS=yl,tS=Rl,nS=Us,oS=Ka,rS={children:!0,dangerouslySetInnerHTML:!0,key:!0,ref:!0,autoFocus:!0,defaultValue:!0,valueLink:!0,defaultChecked:!0,checkedLink:!0,innerHTML:!0,suppressContentEditableWarning:!0,onFocusIn:!0,onFocusOut:!0},aS={},iS=function(e,t,n){if(eS.properties.hasOwnProperty(t)||eS.isCustomAttribute(t))return!0;if(rS.hasOwnProperty(t)&&rS[t]||aS.hasOwnProperty(t)&&aS[t])return!0;if(tS.registrationNameModules.hasOwnProperty(t))return!0;aS[t]=!0;var o=t.toLowerCase(),r=eS.isCustomAttribute(o)?o:eS.getPossibleStandardName.hasOwnProperty(o)?eS.getPossibleStandardName[o]:null,a=tS.possibleRegistrationNames.hasOwnProperty(o)?tS.possibleRegistrationNames[o]:null;return null!=r?(oS(!1,"Unknown DOM property %s. Did you mean %s?%s",t,r,nS.getStackAddendumByID(n)),!0):null!=a&&(oS(!1,"Unknown event handler property %s. Did you mean `%s`?%s",t,a,nS.getStackAddendumByID(n)),!0)},sS=function(e,t){var n=[];for(var o in t.props){iS(t.type,o,e)||n.push(o)}var r=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?oS(!1,"Unknown prop %s on <%s> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop%s",r,t.type,nS.getStackAddendumByID(e)):n.length>1&&oS(!1,"Unknown props %s on <%s> tag. Remove these props from the element. For details, see https://fb.me/react-unknown-prop%s",r,t.type,nS.getStackAddendumByID(e))},uS={onBeforeMountComponent:function(e,t){qr(e,t)},onBeforeUpdateComponent:function(e,t){qr(e,t)}},lS=uS,cS=Us,pS=Ka,dS=!1,fS={onBeforeMountComponent:function(e,t){Yr(e,t)},onBeforeUpdateComponent:function(e,t){Yr(e,t)}},hS=fS,mS=yl,gS=Us,yS=Ka,vS={},bS=new RegExp("^(aria)-["+mS.ATTRIBUTE_NAME_CHAR+"]*$"),_S={onBeforeMountComponent:function(e,t){Gr(e,t)},onBeforeUpdateComponent:function(e,t){Gr(e,t)}},CS=_S,wS=Il,ES=Zk,kS=WT,TS=Ed,SS=Kd,IS=QT,OS=qT,PS=ZT,NS=Ka;ES.inject();var xS={findDOMNode:IS,render:kS.render,unmountComponentAtNode:kS.unmountComponentAtNode,version:"15.6.2",/* eslint-disable camelcase */
unstable_batchedUpdates:SS.batchedUpdates,unstable_renderSubtreeIntoContainer:PS};if(
// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ComponentTree:{getClosestInstanceFromNode:wS.getClosestInstanceFromNode,getNodeFromInstance:function(e){
// inst is an internal instance (but could be a composite)
return e._renderedComponent&&(e=OS(e)),e?wS.getNodeFromInstance(e):null}},Mount:kS,Reconciler:TS}),Cc.canUseDOM&&window.top===window.self){
// First check if devtools is not installed
if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){
// Firefox does not have the issue with devtools loaded over file://
var MS=-1===window.location.protocol.indexOf("http")&&-1===navigator.userAgent.indexOf("Firefox");console.debug("Download the React DevTools "+(MS?"and use an HTTP server (instead of a file: URL) ":"")+"for a better development experience: https://fb.me/react-devtools")}var DS=function(){};NS(-1!==(DS.name||DS.toString()).indexOf("testFn"),"It looks like you're using a minified copy of the development build of React. When deploying React apps to production, make sure to use the production build which skips development warnings and is faster. See https://fb.me/react-minification for more details."),NS(!(document.documentMode&&document.documentMode<8),'Internet Explorer is running in compatibility mode; please add the following tag to your HTML to prevent this from happening: <meta http-equiv="X-UA-Compatible" content="IE=edge" />');for(var RS=[
// shims
Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.trim],AS=0;AS<RS.length;AS++)if(!RS[AS]){NS(!1,"One or more ES5 shims expected by React are not available: https://fb.me/react-warning-polyfills");break}}var US=yd,jS=lS,LS=hS,FS=CS;US.debugTool.addHook(jS),US.debugTool.addHook(LS),US.debugTool.addHook(FS);var BS,HS=xS,WS=HS,VS="object"==typeof global&&global&&global.Object===Object&&global,qS="object"==typeof self&&self&&self.Object===Object&&self,YS=VS||qS||Function("return this")(),zS=YS.Symbol,KS=Object.prototype,GS=KS.hasOwnProperty,XS=KS.toString,$S=zS?zS.toStringTag:undefined,QS=Object.prototype,JS=QS.toString,ZS="[object Null]",eI="[object Undefined]",tI=zS?zS.toStringTag:undefined,nI=/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
function(e,t){return function(n){return e(t(n))}}(Object.getPrototypeOf,Object),oI="[object Object]",rI=Function.prototype,aI=Object.prototype,iI=rI.toString,sI=aI.hasOwnProperty,uI=iI.call(Object);BS="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")();var lI=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}(BS),cI={INIT:"@@redux/INIT"};"string"==typeof oa.name&&"isCrushed"!==oa.name&&/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
function(e){/* eslint-disable no-console */
"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);/* eslint-enable no-console */
try{
// This error was thrown as a convenience so that if you enable
// "break on all exceptions" in your console,
// it would pause the execution at this line.
throw new Error(e)}catch(e){}}("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");var pI=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,n=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t};e.exports=gu(n,!0)}),dI=pI.shape({trySubscribe:pI.func.isRequired,tryUnsubscribe:pI.func.isRequired,notifyNestedSubs:pI.func.isRequired,isSubscribed:pI.func.isRequired}),fI=pI.shape({subscribe:pI.func.isRequired,dispatch:pI.func.isRequired,getState:pI.func.isRequired}),hI=!1;!function(){var e,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"store",n=arguments[1],o=n||t+"Subscription",r=function(e){function n(o,r){aa(this,n);var a=ia(this,e.call(this,o,r));return a[t]=o.store,a}return sa(n,e),n.prototype.getChildContext=function(){var e;return e={},e[t]=this[t],e[o]=null,e},n.prototype.render=function(){return pl.only(this.props.children)},n}(dl);r.prototype.componentWillReceiveProps=function(e){this[t]!==e.store&&ua()},r.propTypes={store:fI.isRequired,children:pI.element.isRequired},r.childContextTypes=(e={},e[t]=fI.isRequired,e[o]=dI,e)}();/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
var mI={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yI=Object.defineProperty,vI=Object.getOwnPropertyNames,bI=Object.getOwnPropertySymbols,_I=Object.getOwnPropertyDescriptor,CI=Object.getPrototypeOf,wI=CI&&CI(Object),EI=la,kI=function(e,t,n,o,r,a,i,s){if(t===undefined)throw new Error("invariant requires an error message argument");if(!e){var u;if(t===undefined)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,a,i,s],c=0;u=new Error(t.replace(/%s/g,function(){return l[c++]})),u.name="Invariant Violation"}// we don't care about invariant's own frame
throw u.framesToPop=1,u}},TI=kI,SI=null,II={notify:function(){}},OI=function(){function e(t,n,o){ca(this,e),this.store=t,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=II}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=pa())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=II)},e}(),PI=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},NI=0,xI={},MI=(Object.prototype.hasOwnProperty,[Ea,ka,Ta]),DI=[Sa,Ia],RI=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},AI=[Na,xa];Object.assign;!
// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},t=e.connectHOC,n=t===undefined?va:t,o=e.mapStateToPropsFactories,r=o===undefined?DI:o,a=e.mapDispatchToPropsFactories,i=a===undefined?MI:a,s=e.mergePropsFactories,u=s===undefined?AI:s,l=e.selectorFactory,c=l===undefined?ja:l}();var UI=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},jI=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),LI=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},FI=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},BI=void 0,HI=void 0,WI=void 0,VI=void 0,qI=void 0,YI=void 0,zI=void 0,KI={init:function(){return cO()},setClickGetNameScene:function(e){return HI=e},setClickGetNameHideModel:function(e){return WI=e},setClickGetNameShowModel:function(e){return VI=e},setClickGetNameTranspModel:function(e){return qI=e},setClickGetNameRedModel:function(e){return YI=e},setClickGetNameNormalModel:function(e){return zI=e}},GI=function(e){return HI(e)},XI=function(e,t){return WI(e,t)},$I=function(e,t){VI(e,t)},QI=function(e,t){qI(e,t)},JI=function(e,t){return YI(e,t)},ZI=function(e,t){return zI(e,t)},eO=function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return LI(t,e),jI(t,[{key:"render",value:function(){return ll.createElement("div",null,ll.createElement(tO,null),ll.createElement(nO,null))}}]),t}(ll.Component),tO=function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return LI(t,e),jI(t,[{key:"render",value:function(){return ll.createElement("div",{className:"logo"}," 3D Viewer ")}}]),t}(ll.Component),nO=function(e){function t(){UI(this,t);var e=FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isAllLayersShow:!1},e}return LI(t,e),jI(t,[{key:"clickFunction",value:function(){this.setState({isAllLayersShow:!1})}},{key:"render",value:function(){this.arrProj=dO();var e=this.arrProj.map(function(e,t){return ll.createElement(oO,{key:t,name:e})});return ll.createElement("div",{className:"tree",onClick:this.clickFunction.bind(this)},e)}}]),t}(ll.Component),oO=function(e){function t(){UI(this,t);var e=FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isShowScenes:!1},e}return LI(t,e),jI(t,[{key:"roll",value:function(){var e=void 0;e=!this.state.isShowScenes,this.setState({isShowScenes:e})}},{key:"render",value:function(){var e=this,t=ll.createElement("span",null,"развернуть");this.state.isShowScenes&&(t=ll.createElement("span",null,"свернуть")),this.arrScenes=fO(this.props.name);var n=this.arrScenes.map(function(t,n){return ll.createElement(rO,{key:n,name:t,isShow:e.state.isShowScenes})});return ll.createElement("div",{className:"project"},this.props.name,ll.createElement("div",{className:"cornerIcon",onClick:this.roll.bind(this)}," ",t," "),n,ll.createElement("hr",null))}}]),t}(ll.Component),rO=function(e){function t(){UI(this,t);var e=FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isShowLayers:!1},e}return LI(t,e),jI(t,[{key:"clickFunction",value:function(){GI(this.props.name),this.setState({isShowLayers:!0})}},{key:"render",value:function(){var e=this;if(this.props.isShow)var t="assets/"+hO(this.props.name),n=ll.createElement("img",{className:"previewScene",src:t,onClick:this.clickFunction.bind(this)}),o=ll.createElement("p",{onClick:this.clickFunction.bind(this)}," ",this.props.name," "),r=mO(this.props.name),a=r.map(function(t,n){return ll.createElement(aO,{key:n,name:t,scene:e.props.name,isShow:e.state.isShowLayers})});return ll.createElement("div",{className:"scene"},n,o,a)}}]),t}(ll.Component),aO=function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return LI(t,e),jI(t,[{key:"render",value:function(){if(this.props.isShow)var e=this.props.name,t=ll.createElement(iO,{name:this.props.name,scene:this.props.scene}),n=ll.createElement(sO,{name:this.props.name,scene:this.props.scene}),o=ll.createElement(uO,{name:this.props.name,scene:this.props.scene}),r=ll.createElement(lO,{name:this.props.name,scene:this.props.scene});return ll.createElement("div",{className:"model"},e,t,n,o,r)}}]),t}(ll.Component),iO=function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return LI(t,e),jI(t,[{key:"clickFunction",value:function(){XI(this.props.name,this.props.scene)}},{key:"render",value:function(){return ll.createElement("div",{className:"hideModelButton",onClick:this.clickFunction.bind(this)},"hide")}}]),t}(ll.Component),sO=function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return LI(t,e),jI(t,[{key:"clickFunction",value:function(){$I(this.props.name,this.props.scene)}},{key:"render",value:function(){return ll.createElement("div",{className:"showModelButton",onClick:this.clickFunction.bind(this)},"show")}}]),t}(ll.Component),uO=function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return LI(t,e),jI(t,[{key:"clickFunction",value:function(){QI(this.props.name,this.props.scene)}},{key:"render",value:function(){return ll.createElement("div",{className:"transpModelButton",onClick:this.clickFunction.bind(this)},"transp")}}]),t}(ll.Component),lO=function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return LI(t,e),jI(t,[{key:"clickFunction",value:function(){JI(this.props.name,this.props.scene)}},{key:"render",value:function(){return ll.createElement("div",{className:"redModelButton",onClick:this.clickFunction.bind(this)},"red")}}]),t}(ll.Component),cO=(function(e){function t(){return UI(this,t),FI(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}LI(t,e),jI(t,[{key:"clickFunction",value:function(){ZI(this.props.name,this.props.scene)}},{key:"render",value:function(){return ll.createElement("div",{className:"normalModelButton",onClick:this.clickFunction.bind(this)},"normal")}}])}(ll.Component),function(){pO(),WS.render(ll.createElement(eO,null),document.getElementById("ui"))}),pO=function(){BI=ea(function(e,t){return e===undefined&&(e=[]),"ADD_USER"===t.type&&e.push(t.user),e}),BI.dispatch({type:"ADD_USER",user:{name:"Dan"}}),console.log(BI.getState())},dO=function(){var e=[];for(var t in MODELS)!function(t){var n=!1;e.forEach(function(e,o,r){n=r[o]==MODELS[t].project}),0==n&&e.push(MODELS[t].project)}(t);return e},fO=function(e){var t=[];for(var n in MODELS)e==MODELS[n].project&&t.push(MODELS[n].name);return t},hO=function(e){var t="";for(var n in MODELS)MODELS[n].name==e&&(t=MODELS[n].preview);return t},mO=function(e){var t=[];for(var n in MODELS)if(MODELS[n].name==e)for(var o in MODELS[n].layers)t.push(o);return t},gO={init:function(){return EO()},loadScene:function(e){return TO(e)},hideModel:function(e){return xO(e)},showModel:function(e){return MO(e)},transpModel:function(e){return DO(e)},redModel:function(e){return RO(e)},normalModel:function(e){return AO(e)}},yO=void 0,vO=void 0,bO=void 0,_O=void 0,CO=[],wO=[],EO=function(){vO=new THREE.Scene,bO=new THREE.PerspectiveCamera(10,window.innerWidth/window.innerHeight,3.5,15e3),bO.position.set(-150,200,300),bO.lookAt(vO.position),yO=new THREE.OrbitControls(bO);var e=new THREE.PointLight(16777215,2);e.position.set(-400,300,1600),vO.add(e);var t=new THREE.AmbientLight(11392747,.3);vO.add(t),_O=new THREE.WebGLRenderer({alpha:!0}),_O.setPixelRatio(window.devicePixelRatio),_O.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(_O.domElement),kO()},kO=function e(){_O.render(vO,bO),yO.update(),requestAnimationFrame(e)},TO=function(e){SO(),IO(e),OO()},SO=function(){CO.forEach(function(e,t,n){vO.remove(e.geom),e.geom=null,e.name=null,e.mtl=null}),CO=[]},IO=function(e){wO=[];for(var t in e.layers)wO.push(Object.assign({},e.layers[t],{name:t}))},OO=function(){PO(0)},PO=function e(t){t>=wO.length||(NO(wO[t]),t++,e(t))},NO=function(e){(new THREE.MTLLoader).load("assets/"+e.mtl,function(t){var n={};n.mtl=t,n.mtl.preload(),(new THREE.OBJLoader).setMaterials(n.mtl).load("assets/"+e.obj,function(t){n.geom=t,vO.add(n.geom),n.name=e.name,CO.push(n)},function(){},function(){})})},xO=function(e){UO(e).geom.position.y=1e4},MO=function(e){UO(e).geom.position.y=0},DO=function(e){for(var t=UO(e),n=new THREE.MeshPhongMaterial({color:10066329,transparent:!0,opacity:.3}),o=0;o<t.geom.children.length;o++)t.geom.children[o].material=n},RO=function(e){for(var t=UO(e),n=new THREE.MeshPhongMaterial({color:16711680,transparent:!0,opacity:1}),o=0;o<t.geom.children.length;o++)t.geom.children[o].material=n},AO=function(e){console.log("!");var t=UO(e);t.geom.setMaterials(t.mtl)},UO=function(e){for(var t=0;t<CO.length;t++)if(CO[t].name==e)return CO[t]};/*******************************************************************/
window.onload=function(){KI.init(),gO.init(),LO(),FO(),BO(),HO(),WO(),VO(),qO()};/*******************************************************************/
var jO=null,LO=function(){jO="Многобашенный замок";var e=YO(jO);gO.loadScene(e)},FO=function(){KI.setClickGetNameScene(function(e){jO=e;var t=YO(jO);gO.loadScene(t)})},BO=function(){KI.setClickGetNameHideModel(function(e,t){jO==t&&gO.hideModel(e)})},HO=function(){KI.setClickGetNameShowModel(function(e,t){jO==t&&gO.showModel(e)})},WO=function(){KI.setClickGetNameTranspModel(function(e,t){jO==t&&gO.transpModel(e)})},VO=function(){KI.setClickGetNameRedModel(function(e,t){jO==t&&gO.redModel(e)})},qO=function(){KI.setClickGetNameNormalModel(function(e,t){jO==t&&gO.normalModel(e)})},YO=function(e){var t=null;for(var n in MODELS)MODELS[n].name==e&&(t=MODELS[n]);return t}}();
