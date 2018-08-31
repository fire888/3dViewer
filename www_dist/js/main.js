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
function t(e){return function(){return e}}function n(e,t){var n=e.constructor;Ga(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",t,t,n&&(n.displayName||n.name)||"ReactClass")}function o(e,t,n,o,r,a,i,s){if(ti(t),!e){var u;if(t===undefined)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,a,i,s],l=0;u=new Error(t.replace(/%s/g,function(){return c[l++]})),u.name="Invariant Violation"}// we don't care about invariant's own frame
throw u.framesToPop=1,u}}/**
	 * Base class helpers for the updating state of a component.
	 */
function r(e,t,n){this.props=e,this.context=t,this.refs=ci,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||si}/**
	 * Base class helpers for the updating state of a component.
	 */
function a(e,t,n){
// Duplicated from ReactComponent.
this.props=e,this.context=t,this.refs=ci,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||si}function i(){}function s(e){if(ji.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==undefined}function u(e){if(ji.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==undefined}function c(e,t){var n=function(){hi||(hi=!0,Di(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function l(e,t){var n=function(){mi||(mi=!0,Di(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}// Before Symbol spec.
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
function p(e){var t=e&&(Hi&&e[Hi]||e[Wi]);if("function"==typeof t)return t}/**
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
return e&&"object"==typeof e&&null!=e.key?Ji.escape(e.key):t.toString(36)}/**
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
"object"===r&&e.$$typeof===Xi)
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
return n(o,e,""===t?es+h(e,0):t),1;var a,i,s=0,u=""===t?es:t+ts;if(Array.isArray(e))for(var c=0;c<e.length;c++)a=e[c],i=u+h(a,c),s+=m(a,i,n,o);else{var l=$i(e);if(l){var p,d=l.call(e);if(l!==e.entries)for(var f=0;!(p=d.next()).done;)a=p.value,i=u+h(a,f++),s+=m(a,i,n,o);else{var g="";if(Gi.current){var y=Gi.current.getName();y&&(g=" Check the render method of `"+y+"`.")}
// Iterator will provide entry [k,v] tuples rather than values.
for(Zi(ns,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s",g),ns=!0;!(p=d.next()).done;){var v=p.value;v&&(a=v[1],i=u+Ji.escape(v[0])+ts+h(a,0),s+=m(a,i,n,o))}}}else if("object"===r){var b="";if(b=" If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.",e._isReactElement&&(b=" It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),Gi.current){var _=Gi.current.getName();_&&(b+=" Check the render method of `"+_+"`.")}var C=String(e);Qi(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===C?"object with keys {"+Object.keys(e).join(", ")+"}":C,b)}}return s}/**
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
function g(e,t,n){return null==e?0:m(e,"",t,n)}function y(e){return(""+e).replace(ps,"$&/")}/**
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
function _(e,t,n){if(null==e)return e;var o=v.getPooled(t,n);us(e,b,o),v.release(o)}/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
function C(e,t,n,o){this.result=e,this.keyPrefix=t,this.func=n,this.context=o,this.count=0}function E(e,t,n){var o=e.result,r=e.keyPrefix,a=e.func,i=e.context,s=a.call(i,t,e.count++);Array.isArray(s)?w(s,o,n,ss.thatReturnsArgument):null!=s&&(is.isValidElement(s)&&(s=is.cloneAndReplaceKey(s,
// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
r+(!s.key||t&&t.key===s.key?"":y(s.key)+"/")+n)),o.push(s))}function w(e,t,n,o,r){var a="";null!=n&&(a=y(n)+"/");var i=C.getPooled(t,a,o,r);us(e,E,i),C.release(i)}/**
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
function T(e,t,n){if(null==e)return e;var o=[];return w(e,o,null,t,n),o}function k(e,t,n){return null}/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
function I(e,t){return us(e,k,null)}/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
function S(e){var t=[];return w(e,t,null,ss.thatReturnsArgument),t}function O(e){
// Based on isNative() from Lodash
var t=Function.prototype.toString,n=Object.prototype.hasOwnProperty,o=RegExp("^"+t.call(n).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");try{var r=t.call(e);return o.test(r)}catch(e){return!1}}function P(e){var t=fs(e);if(t){var n=t.childIDs;hs(e),n.forEach(P)}}function x(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")}function N(e){return null==e?"#empty":"string"==typeof e||"number"==typeof e?"#text":"string"==typeof e.type?e.type:e.type.displayName||e.type.name||"Unknown"}function M(e){var t,n=Ms.getDisplayName(e),o=Ms.getElement(e),r=Ms.getOwnerID(e);return r&&(t=Ms.getDisplayName(r)),ws(o,"ReactComponentTreeHook: Missing React element for debugID %s when building stack",e),x(n,o&&o._source,t)}/**
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
function R(e,t,n,o,r,a){for(var i in e)if(e.hasOwnProperty(i)){var s;
// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
"function"!=typeof e[i]&&Fs(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",o||"React class",Us[n],i),s=e[i](t,i,o,n,null,Ls)}catch(e){s=e}if(Bs(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",Us[n],i,typeof s),s instanceof Error&&!(s.message in Hs)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
Hs[s.message]=!0;var u="";As||(As=Rs),null!==a?u=As.getStackAddendumByID(a):null!==r&&(u=As.getCurrentStackAddendum(r)),Bs(!1,"Failed %s type: %s%s",n,s.message,u)}}}function D(){if(Vs.current){var e=Vs.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function A(e){if(null!==e&&e!==undefined&&e.__source!==undefined){var t=e.__source;return" Check your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}function j(e){var t=D();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t=" Check the top-level render call using <"+n+">.")}return t}/**
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
function U(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=Qs.uniqueKey||(Qs.uniqueKey={}),o=j(t);if(!n[o]){n[o]=!0;
// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==Vs.current&&(
// Give the component that originally created this child.
r=" It was passed a child from "+e._owner.getName()+"."),Xs(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',o,r,qs.getCurrentStackAddendum(e))}}}/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
function L(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n];Ys.isValidElement(o)&&U(o,t)}else if(Ys.isValidElement(e))
// This element was passed in a valid location.
e._store&&(e._store.validated=!0);else if(e){var r=Gs(e);
// Entry iterators provide implicit keys.
if(r&&r!==e.entries)for(var a,i=r.call(e);!(a=i.next()).done;)Ys.isValidElement(a.value)&&U(a.value,t)}}/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
function F(e){var t=e.type;if("function"==typeof t){var n=t.displayName||t.name;t.propTypes&&zs(t.propTypes,e.props,"prop",n,e,null),"function"==typeof t.getDefaultProps&&Xs(t.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}/**
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
if("function"!=typeof e[a]){var s=Error((o||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw s.name="Invariant Violation",s}i=e[a](t,a,o,n,null,su)}catch(e){i=e}if(!i||i instanceof Error||iu((o||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in uu)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
uu[i.message]=!0;var u=r?r():"";iu("Failed "+n+" type: "+i.message+(null!=u?u:""))}}}function H(){return null}
// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function W(e){return e}function V(e,t,n){function o(e,t,n){for(var o in t)t.hasOwnProperty(o)&&Su("function"==typeof t[o],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactClass",hu[n],o)}function r(e,t){var n=h.hasOwnProperty(t)?h[t]:null;
// Disallow overriding of base class methods unless explicitly allowed.
b.hasOwnProperty(t)&&Iu("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),
// Disallow defining methods more than once unless explicitly allowed.
e&&Iu("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}/**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
function a(e,n){if(!n){var o=typeof n;return void Su("object"===o&&null!==n,"%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",e.displayName||"ReactClass",null===n?null:o)}Iu("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),Iu(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,i=a.__reactAutoBindPairs;
// By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
n.hasOwnProperty(Ou)&&g.mixins(e,n.mixins);for(var s in n)if(n.hasOwnProperty(s)&&s!==Ou){var l=n[s],p=a.hasOwnProperty(s);if(r(p,s),g.hasOwnProperty(s))g[s](e,l);else{
// Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var d=h.hasOwnProperty(s),f="function"==typeof l,m=f&&!d&&!p&&!1!==n.autobind;if(m)i.push(s,l),a[s]=l;else if(p){var y=h[s];
// These cases should already be caught by validateMethodOverride.
Iu(d&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,s),
// For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
"DEFINE_MANY_MERGED"===y?a[s]=u(a[s],l):"DEFINE_MANY"===y&&(a[s]=c(a[s],l))}else a[s]=l,
// Add verbose displayName to the function, which helps when looking
// at profiling tools.
"function"==typeof l&&n.displayName&&(a[s].displayName=n.displayName+"_"+s)}}}function i(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in g;Iu(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var i=m.hasOwnProperty(n)?m[n]:null;return Iu("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=u(e[n],o))}e[n]=o}}}/**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
function s(e,t){Iu(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(Iu(e[n]===undefined,"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}/**
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
function c(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}/**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
function l(e,t){var n=t.bind(e);n.__reactBoundContext=e,n.__reactBoundMethod=t,n.__reactBoundArguments=null;var o=e.constructor.displayName,r=n.bind;return n.bind=function(a){for(var i=arguments.length,s=Array(i>1?i-1:0),u=1;u<i;u++)s[u-1]=arguments[u];
// User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(a!==e&&null!==a)Su(!1,"bind(): React component methods may only be bound to the component instance. See %s",o);else if(!s.length)return Su(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",o),n;var c=r.apply(n,arguments);return c.__reactBoundContext=e,c.__reactBoundMethod=t,c.__reactBoundArguments=s,c},n}/**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
function p(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=l(e,r)}}/**
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
a=null),Iu("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new _,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],f.forEach(a.bind(null,t)),a(t,y),a(t,e),a(t,v),
// Initialize the defaultProps property after all mixins have been merged.
t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),
// This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved={}),t.prototype.getInitialState&&(t.prototype.getInitialState.isReactClassApproved={}),Iu(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),Su(!t.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",e.displayName||"A component"),Su(!t.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",e.displayName||"A component"),Su(!t.prototype.UNSAFE_componentWillRecieveProps,"%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",e.displayName||"A component");
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
getDerivedStateFromProps:"DEFINE_MANY_MERGED"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){o(e,t,"childContext"),e.childContextTypes=Tu({},e.childContextTypes,t)},contextTypes:function(e,t){o(e,t,"context"),e.contextTypes=Tu({},e.contextTypes,t)},/**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){o(e,t,"prop"),e.propTypes=Tu({},e.propTypes,t)},statics:function(e,t){i(e,t)},autobind:function(){}},y={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},b={/**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},/**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
isMounted:function(){return Su(this.__didWarnIsMounted,"%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",this.constructor&&this.constructor.displayName||this.name||"Component"),this.__didWarnIsMounted=!0,!!this.__isMounted}},_=function(){};return Tu(_.prototype,e.prototype,b),d}/**
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
function q(e){return Fu.isValidElement(e)||Bu(!1,"React.Children.only expected to receive a single React element child."),e}function Y(e,t){return(e&t)===t}/**
	 * Check if a given node should be cached.
	 */
function z(e,t){return 1===e.nodeType&&e.getAttribute(kc)===String(t)||8===e.nodeType&&e.nodeValue===" react-text: "+t+" "||8===e.nodeType&&e.nodeValue===" react-empty: "+t+" "}/**
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
function G(e,t){var n=K(e);n._hostNode=t,t[Sc]=n}function X(e){var t=e._hostNode;t&&(delete t[Sc],e._hostNode=null)}/**
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
function $(e,t){if(!(e._flags&Ic.hasCachedChildNodes)){var n=e._renderedChildren,o=t.firstChild;e:for(var r in n)if(n.hasOwnProperty(r)){var a=n[r],i=K(a)._domID;if(0!==i){
// We assume the child nodes are in the same order as the child instances.
for(;null!==o;o=o.nextSibling)if(z(o,i)){G(a,o);continue e}
// We reached the end of the DOM children without finding an ID match.
Tc(!1,"Unable to find element with ID %s.",i)}}e._flags|=Ic.hasCachedChildNodes}}/**
	 * Given a DOM node, return the closest ReactDOMComponent or
	 * ReactDOMTextComponent instance ancestor.
	 */
function Q(e){if(e[Sc])return e[Sc];for(
// Walk up the tree until we find an ancestor whose instance we have cached.
var t=[];!e[Sc];){if(t.push(e),!e.parentNode)
// Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;e=e.parentNode}for(var n,o;e&&(o=e[Sc]);e=t.pop())n=o,t.length&&$(o,e);return n}/**
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
e._hostNode===undefined&&Tc(!1,"getNodeFromInstance: Invalid argument."),e._hostNode)return e._hostNode;for(
// Walk up the tree until we find an ancestor whose DOM node we have cached.
var t=[];!e._hostNode;)t.push(e),e._hostParent||Tc(!1,"React DOM tree root should always have a node reference."),e=e._hostParent;
// Now parents contains each ancestor that does *not* have a cached native
// node, and `inst` is the deepest ancestor that does.
for(;t.length;e=t.pop())$(e,e._hostNode);return e._hostNode}/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
function ee(){if(Rc)for(var e in Dc){var t=Dc[e],n=Rc.indexOf(e);if(n>-1||Mc(!1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",e),!Ac.plugins[n]){t.extractEvents||Mc(!1,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",e),Ac.plugins[n]=t;var o=t.eventTypes;for(var r in o)te(o[r],t,r)||Mc(!1,"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",r,e)}}}/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
function te(e,t,n){Ac.eventNameDispatchConfigs.hasOwnProperty(n)&&Mc(!1,"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",n),Ac.eventNameDispatchConfigs[n]=e;var o=e.phasedRegistrationNames;if(o){for(var r in o)if(o.hasOwnProperty(r)){var a=o[r];ne(a,t,n)}return!0}return!!e.registrationName&&(ne(e.registrationName,t,n),!0)}/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
function ne(e,t,n){Ac.registrationNameModules[e]&&Mc(!1,"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",e),Ac.registrationNameModules[e]=t,Ac.registrationNameDependencies[e]=t.eventTypes[n].dependencies;var o=e.toLowerCase();Ac.possibleRegistrationNames[o]=e,"onDoubleClick"===e&&(Ac.possibleRegistrationNames.ondblclick=e)}/**
	 * Call a function while guarding against errors that happens within it.
	 *
	 * @param {String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} a First argument
	 * @param {*} b Second argument
	 */
function oe(e,t,n){try{t(n)}catch(e){null===Uc&&(Uc=e)}}function re(e){return"topMouseUp"===e||"topTouchEnd"===e||"topTouchCancel"===e}function ae(e){return"topMouseMove"===e||"topTouchMove"===e}function ie(e){return"topMouseDown"===e||"topTouchStart"===e}/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {*} inst Internal component instance
	 */
function se(e,t,n,o){var r=e.type||"unknown-event";e.currentTarget=Gc.getNodeFromInstance(o),t?qc.invokeGuardedCallbackWithCatch(r,n,e):qc.invokeGuardedCallback(r,n,e),e.currentTarget=null}/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
function ue(e,t){var n=e._dispatchListeners,o=e._dispatchInstances;if(Wc(e),Array.isArray(n))for(var r=0;r<n.length&&!e.isPropagationStopped();r++)
// Listeners and Instances are two parallel arrays that are always in sync.
se(e,t,n[r],o[r]);else n&&se(e,t,n,o);e._dispatchListeners=null,e._dispatchInstances=null}/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
function ce(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Wc(e),Array.isArray(t)){for(var o=0;o<t.length&&!e.isPropagationStopped();o++)
// Listeners and Instances are two parallel arrays that are always in sync.
if(t[o](e,n[o]))return n[o]}else if(t&&t(e,n))return n;return null}/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
function le(e){var t=ce(e);return e._dispatchInstances=null,e._dispatchListeners=null,t}/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
function pe(e){Wc(e);var t=e._dispatchListeners,n=e._dispatchInstances;Array.isArray(t)&&Yc(!1,"executeDirectDispatch(...): Invalid `event`."),e.currentTarget=t?Gc.getNodeFromInstance(n):null;var o=t?t(e):null;return e.currentTarget=null,e._dispatchListeners=null,e._dispatchInstances=null,o}/**
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
return null==t&&$c(!1,"accumulateInto(...): Accumulated items must not be null or undefined."),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}/**
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
function ye(e,t,n){var o=t.dispatchConfig.phasedRegistrationNames[n];return vl(e,o)}/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
function ve(e,t,n){yl(e,"Dispatching inst must not be null");var o=ye(e,n,t);o&&(n._dispatchListeners=ml(n._dispatchListeners,o),n._dispatchInstances=ml(n._dispatchInstances,e))}/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
function be(e){e&&e.dispatchConfig.phasedRegistrationNames&&hl.traverseTwoPhase(e._targetInst,ve,e)}/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
function _e(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst,n=t?hl.getParentInstance(t):null;hl.traverseTwoPhase(n,ve,e)}}/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
function Ce(e,t,n){if(n&&n.dispatchConfig.registrationName){var o=n.dispatchConfig.registrationName,r=vl(e,o);r&&(n._dispatchListeners=ml(n._dispatchListeners,r),n._dispatchInstances=ml(n._dispatchInstances,e))}}/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
function Ee(e){e&&e.dispatchConfig.registrationName&&Ce(e._targetInst,null,e)}function we(e){gl(e,be)}function Te(e){gl(e,_e)}function ke(e,t,n,o){hl.traverseEnterLeave(n,o,Ce,e,t)}function Ie(e){gl(e,Ee)}/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
function Se(){
// Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
return!Ul&&jl.canUseDOM&&(Ul="textContent"in document.documentElement?"textContent":"innerText"),Ul}/**
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
delete this.nativeEvent,delete this.preventDefault,delete this.stopPropagation,this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var a in r)if(r.hasOwnProperty(a)){delete this[a];var i=r[a];i?this[a]=i(n):"target"===a?this.target=o:this[a]=n[a]}var s=null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue;return this.isDefaultPrevented=s?zl.thatReturnsTrue:zl.thatReturnsFalse,this.isPropagationStopped=zl.thatReturnsFalse,this}/**
	  * Helper to nullify syntheticEvent instance properties when destructing
	  *
	  * @param {object} SyntheticEvent
	  * @param {String} propName
	  * @return {object} defineProperty object
	  */
function xe(e,t){function n(e){return r(a?"setting the method":"setting the property","This is effectively a no-op"),e}function o(){return r(a?"accessing the method":"accessing the property",a?"This is a no-op function":"This is set to null"),t}function r(t,n){Kl(!1,"This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",t,e,n)}var a="function"==typeof t;return{configurable:!0,set:n,get:o}}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Ne(e,t,n,o){return Zl.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Me(e,t,n,o){return np.call(this,e,t,n,o)}/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
function Re(e){
// ctrlKey && altKey is equivalent to AltGr, and is not a command.
return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
function De(e){switch(e){case"topCompositionStart":return bp.compositionStart;case"topCompositionEnd":return bp.compositionEnd;case"topCompositionUpdate":return bp.compositionUpdate}}/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
function Ae(e,t){return"topKeyDown"===e&&t.keyCode===dp}/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
function je(e,t){switch(e){case"topKeyUp":
// Command keys insert or clear IME input.
return-1!==pp.indexOf(t.keyCode);case"topKeyDown":
// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return t.keyCode!==dp;case"topKeyPress":case"topMouseDown":case"topBlur":
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
function Ue(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}/**
	 * @return {?object} A SyntheticCompositionEvent.
	 */
function Le(e,t,n,o){var r,a;if(fp?r=De(e):Cp?je(e,n)&&(r=bp.compositionEnd):Ae(e,n)&&(r=bp.compositionStart),!r)return null;gp&&(
// The current composition is stored statically and must not be
// overwritten while composition continues.
Cp||r!==bp.compositionStart?r===bp.compositionEnd&&Cp&&(a=Cp.getData()):Cp=up.getPooled(o));var i=cp.getPooled(r,t,n,o);if(a)
// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
i.data=a;else{var s=Ue(n);null!==s&&(i.data=s)}return ip.accumulateTwoPhaseDispatches(i),i}/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
function Fe(e,t){switch(e){case"topCompositionEnd":return Ue(t);case"topKeyPress":return t.which!==yp?null:(_p=!0,vp);case"topTextInput":
// Record the characters to be added to the DOM.
var n=t.data;
// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
return n===vp&&_p?null:n;default:
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
if(Cp){if("topCompositionEnd"===e||!fp&&je(e,t)){var n=Cp.getData();return up.release(Cp),Cp=null,n}return null}switch(e){case"topPaste":
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
return t.which&&!Re(t)?String.fromCharCode(t.which):null;case"topCompositionEnd":return gp?null:t.data;default:return null}}/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @return {?object} A SyntheticInputEvent.
	 */
function He(e,t,n,o){var r;
// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!(r=mp?Fe(e,n):Be(e,n)))return null;var a=lp.getPooled(bp.beforeInput,t,n,o);return a.data=r,ip.accumulateTwoPhaseDispatches(a),a}function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid owner.
	 * @final
	 */
function Ve(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)}function qe(e,t,n){"function"==typeof e?e(t.getPublicInstance()):
// Legacy ref
Rp.addComponentAsRefTo(t,e,n)}function Ye(e,t,n){"function"==typeof e?e(null):
// Legacy ref
Rp.removeComponentAsRefFrom(t,e,n)}function ze(e,t,n,o,r,a,i,s){try{t.call(n,o,r,a,i,s)}catch(t){nd(rd[e],"Exception thrown by hook while handling %s: %s",e,t+"\n"+t.stack),rd[e]=!0}}function Ke(e,t,n,o,r,a){for(var i=0;i<od.length;i++){var s=od[i],u=s[e];u&&ze(e,u,s,t,n,o,r,a)}}function Ge(){Zp.purgeUnmountedComponents(),Jp.clearHistory()}function Xe(e){return e.reduce(function(e,t){var n=Zp.getOwnerID(t),o=Zp.getParentID(t);return e[t]={displayName:Zp.getDisplayName(t),text:Zp.getText(t),updateCount:Zp.getUpdateCount(t),childIDs:Zp.getChildIDs(t),
// Text nodes don't have owners but this is close enough.
ownerID:n||o&&Zp.getOwnerID(o)||0,parentID:o},e},{})}function $e(){var e=ld,t=cd,n=Jp.getHistory();if(0===ud)return ld=0,cd=[],void Ge();if(t.length||n.length){var o=Zp.getRegisteredIDs();id.push({duration:td()-e,measurements:t||[],operations:n||[],treeSnapshot:Xe(o)})}Ge(),ld=td(),cd=[]}function Qe(e){arguments.length>1&&arguments[1]!==undefined&&arguments[1]&&0===e||e||nd(!1,"ReactDebugTool: debugID may not be empty.")}function Je(e,t){0!==ud&&(hd&&!md&&(nd(!1,"There is an internal error in the React performance measurement code. Did not expect %s timer to start while %s timer is still in progress for %s instance.",t,hd||"no",e===pd?"the same":"another"),md=!0),dd=td(),fd=0,pd=e,hd=t)}function Ze(e,t){0!==ud&&(hd===t||md||(nd(!1,"There is an internal error in the React performance measurement code. We did not expect %s timer to stop while %s timer is still in progress for %s instance. Please report this as a bug in React.",t,hd||"no",e===pd?"the same":"another"),md=!0),ad&&cd.push({timerType:t,instanceID:e,duration:td()-dd-fd}),dd=0,fd=0,pd=null,hd=null)}function et(){var e={startTime:dd,nestedFlushStartTime:td(),debugID:pd,timerType:hd};sd.push(e),dd=0,fd=0,pd=null,hd=null}function tt(){var e=sd.pop(),t=e.startTime,n=e.nestedFlushStartTime,o=e.debugID,r=e.timerType,a=td()-n;dd=t,fd+=a,pd=o,hd=r}function nt(e){if(!ad||!yd)return!1;var t=Zp.getElement(e);return null!=t&&"object"==typeof t&&!("string"==typeof t.type)}function ot(e,t){if(nt(e)){var n=e+"::"+t;gd=td(),performance.mark(n)}}function rt(e,t){if(nt(e)){var n=e+"::"+t,o=Zp.getDisplayName(e)||"Unknown";if(td()-gd>.1){var r=o+" ["+t+"]";performance.measure(r,n)}performance.clearMarks(n),r&&performance.clearMeasures(r)}}/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
function at(){wd.attachRefs(this,this._currentElement)}function it(){$d.ReactReconcileTransaction&&Vd||Ld(!1,"ReactUpdates: must inject a reconcile transaction class and batching strategy")}function st(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=Rd.getPooled(),this.reconcileTransaction=$d.ReactReconcileTransaction.getPooled(/* useCreateElement */
!0)}function ut(e,t,n,o,r,a){return it(),Vd.batchedUpdates(e,t,n,o,r,a)}/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
function ct(e,t){return e._mountOrder-t._mountOrder}function lt(e){var t=e.dirtyComponentsLength;t!==Fd.length&&Ld(!1,"Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",t,Fd.length),
// Since reconciling a component higher in the owner hierarchy usually (not
// always -- see shouldComponentUpdate()) will reconcile children, reconcile
// them before their children by sorting the array.
Fd.sort(ct),
// Any updates enqueued while reconciling must be performed after this entire
// batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
// C, B could update twice in a single batch if C's render enqueues an update
// to B (since B would have already updated, we should skip it, and the only
// way we can know to do so is by checking the batch counter).
Bd++;for(var n=0;n<t;n++){
// If a component is unmounted before pending changes apply, it will still
// be here, but we assume that it has cleared its _pendingCallbacks and
// that performUpdateIfNecessary is a noop.
var o=Fd[n],r=o._pendingCallbacks;o._pendingCallbacks=null;var a;if(Ad.logTopLevelRenders){var i=o;
// Duck type TopLevelWrapper. This is probably always true.
o._currentElement.type.isReactTopLevelWrapper&&(i=o._renderedComponent),a="React update: "+i.getName(),console.time(a)}if(jd.performUpdateIfNecessary(o,e.reconcileTransaction,Bd),a&&console.timeEnd(a),r)for(var s=0;s<r.length;s++)e.callbackQueue.enqueue(r[s],o.getPublicInstance())}}/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
function pt(e){
// Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (This is called by each top-level update
// function, like setState, forceUpdate, etc.; creation and
// destruction of top-level components is guarded in ReactMount.)
if(it(),!Vd.isBatchingUpdates)return void Vd.batchedUpdates(pt,e);Fd.push(e),null==e._updateBatchNumber&&(e._updateBatchNumber=Bd+1)}/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
function dt(e,t){Ld(Vd.isBatchingUpdates,"ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."),Hd.enqueue(e,t),Wd=!0}function ft(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function ht(e){return e._wrapperState.valueTracker}function mt(e,t){e._wrapperState.valueTracker=t}function gt(e){e._wrapperState.valueTracker=null}function yt(e){var t;return e&&(t=ft(e)?""+e.checked:e.value),t}/**
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
function bt(e,t){if(!nf.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,o=n in document;if(!o){var r=document.createElement("div");r.setAttribute(n,"return;"),o="function"==typeof r[n]}
// This is the only way to test support for the `wheel` event in IE9+.
return!o&&Kd&&"wheel"===e&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}function _t(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rf[e.type]:"textarea"===t}function Ct(e,t,n){var o=df.getPooled(yf.change,e,t,n);return o.type="change",uf.accumulateTwoPhaseDispatches(o),o}/**
	 * SECTION: handle `change` event
	 */
function Et(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function wt(e){var t=Ct(bf,e,hf(e));
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
pf.batchedUpdates(Tt,t)}function Tt(e){sf.enqueueEvents(e),sf.processEventQueue(!1)}function kt(e,t){vf=e,bf=t,vf.attachEvent("onchange",wt)}function It(){vf&&(vf.detachEvent("onchange",wt),vf=null,bf=null)}function St(e,t){var n=ff.updateValueIfChanged(e),o=!0===t.simulated&&Ef._allowSimulatedPassThrough;if(n||o)return e}function Ot(e,t){if("topChange"===e)return t}function Pt(e,t,n){"topFocus"===e?(
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
It(),kt(t,n)):"topBlur"===e&&It()}/**
	 * (For IE <=9) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
function xt(e,t){vf=e,bf=t,vf.attachEvent("onpropertychange",Mt)}/**
	 * (For IE <=9) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
function Nt(){vf&&(vf.detachEvent("onpropertychange",Mt),vf=null,bf=null)}/**
	 * (For IE <=9) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
function Mt(e){"value"===e.propertyName&&St(bf,e)&&wt(e)}function Rt(e,t,n){"topFocus"===e?(
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
Nt(),xt(t,n)):"topBlur"===e&&Nt()}
// For IE8 and IE9.
function Dt(e,t,n){if("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)
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
return St(bf,n)}/**
	 * SECTION: handle `click` event
	 */
function At(e){
// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function jt(e,t,n){if("topClick"===e)return St(t,n)}function Ut(e,t,n){if("topInput"===e||"topChange"===e)return St(t,n)}function Lt(e,t){
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
function Ft(e,t,n,o){return If.call(this,e,t,n,o)}
// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function Bt(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var o=Rf[e];return!!o&&!!n[o]}function Ht(e){return Bt}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Wt(e,t,n,o){return jf.call(this,e,t,n,o)}/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */
function Vt(e){var t=""+e,n=mh.exec(t);if(!n)return t;var o,r="",a=0,i=0;for(a=n.index;a<t.length;a++){switch(t.charCodeAt(a)){case 34:
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
function qt(e){return"boolean"==typeof e||"number"==typeof e?""+e:Vt(e)}function Yt(e){if(Ih){var t=e.node,n=e.children;if(n.length)for(var o=0;o<n.length;o++)Sh(t,n[o],null);else null!=e.html?wh(t,e.html):null!=e.text&&kh(t,e.text)}}function zt(e,t){e.parentNode.replaceChild(t.node,e),Yt(t)}function Kt(e,t){Ih?e.children.push(t):e.node.appendChild(t.node)}function Gt(e,t){Ih?e.html=t:wh(e.node,t)}function Xt(e,t){Ih?e.text=t:kh(e.node,t)}function $t(){return this.node.nodeName}function Qt(e){return{node:e,children:[],html:null,text:null,toString:$t}}/**
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
(Array.isArray(e)||"object"!=typeof e&&"function"!=typeof e)&&Ph(!1,"toArray: Array-like object expected"),"number"!=typeof t&&Ph(!1,"toArray: Object needs a length property"),0===t||t-1 in e||Ph(!1,"toArray: Object should have keys for indices"),"function"==typeof e.callee&&Ph(!1,"toArray: Object can't be `arguments`. Use rest params (function(...args) {}) or Array.from() instead."),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(e){}for(var n=Array(t),o=0;o<t;o++)n[o]=e[o];return n}/**
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
function tn(e){return Rh||Mh(!1,"Markup wrapping node not initialized"),Fh.hasOwnProperty(e)||(e="*"),Dh.hasOwnProperty(e)||(Rh.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",Dh[e]=!Rh.firstChild),Dh[e]?Fh[e]:null}/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
function nn(e){var t=e.match(zh);return t&&t[1].toLowerCase()}/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
function on(e,t){var n=Yh;Yh||qh(!1,"createNodesFromMarkup dummy not initialized");var o=nn(e),r=o&&Vh(o);if(r){n.innerHTML=r[1]+e+r[2];for(var a=r[0];a--;)n=n.lastChild}else n.innerHTML=e;var i=n.getElementsByTagName("script");i.length&&(t||qh(!1,"createNodesFromMarkup(...): Unexpected <script> element rendered."),Wh(i).forEach(t));for(var s=Array.from(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return s}function rn(e,t){
// Special case for text components, which return [open, close] comments
// from getHostNode.
return Array.isArray(t)&&(t=t[1]),t?t.nextSibling:e.firstChild}function an(e,t,n){tm.insertTreeBefore(e,t,n)}function sn(e,t,n){Array.isArray(t)?cn(e,t[0],t[1],n):um(e,t,n)}function un(e,t){if(Array.isArray(t)){var n=t[1];t=t[0],ln(e,t,n),e.removeChild(n)}e.removeChild(t)}function cn(e,t,n,o){for(var r=t;;){var a=r.nextSibling;if(um(e,r,o),r===n)break;r=a}}function ln(e,t,n){for(;;){var o=t.nextSibling;if(o===n)
// The closing comment is removed by ReactMultiChild.
break;e.removeChild(o)}}function pn(e,t,n){var o=e.parentNode,r=e.nextSibling;r===t?
// There are no text nodes between the opening and closing comments; insert
// a new one if stringText isn't empty.
n&&um(o,document.createTextNode(n),r):n?(
// Set the text content of the first node after the opening comment, and
// remove all following nodes up until the closing comment.
sm(r,n),ln(o,r,t)):ln(o,e,t),rm.debugTool.onHostOperation({instanceID:om.getInstanceFromNode(e)._debugID,type:"replace text",payload:n})}/**
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
function hn(e){return e.replace(Mm,function(e,t){return t.toUpperCase()})}/**
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
function mn(e){return jm(e.replace(Um,"ms-"))}/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
function gn(e,t,n,o){if(null==t||"boolean"==typeof t||""===t)return"";var r=isNaN(t);if(o||r||0===t||Hm.hasOwnProperty(e)&&Hm[e])return""+t;if("string"==typeof t){
// Allow '0' to pass through without warning. 0 is already special and
// doesn't require units, so we don't need to warn about it.
if(n&&"0"!==t){var a=n._currentElement._owner,i=a?a.getName():null;i&&!Wm[i]&&(Wm[i]={});var s=!1;if(i){var u=Wm[i];s=u[e],s||(u[e]=!0)}s||Bm(!1,"a `%s` tag (owner: `%s`) was passed a numeric string value for CSS property `%s` (value: `%s`) which will be treated as a unitless number in a future version of React.",n._currentElement.type,i||"unknown",e,t)}t=t.trim()}return t+"px"}/**
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
function yn(e){return e.replace(qm,"-$1").toLowerCase()}/**
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
function vn(e){return zm(e).replace(Km,"-ms-")}/**
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
function _n(e){return'"'+Cg(e)+'"'}function Cn(e){return!!Mg.hasOwnProperty(e)||!Ng.hasOwnProperty(e)&&(xg.test(e)?(Mg[e]=!0,!0):(Ng[e]=!0,Pg(!1,"Invalid attribute name: `%s`",e),!1))}function En(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&t<1||e.hasOverloadedBooleanValue&&!1===t}function wn(e){Ag.enqueueEvents(e),Ag.processEventQueue(!1)}/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */
function Tn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */
function kn(e){if(Bg[e])return Bg[e];if(!Fg[e])return e;var t=Fg[e];for(var n in t)if(t.hasOwnProperty(n)&&n in Hg)return Bg[e]=t[n];return""}function In(e){
// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
return Object.prototype.hasOwnProperty.call(e,ey)||(e[ey]=Jg++,$g[e[ey]]={}),$g[e[ey]]}function Sn(e){null!=e.checkedLink&&null!=e.valueLink&&iy(!1,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.")}function On(e){Sn(e),(null!=e.value||null!=e.onChange)&&iy(!1,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.")}function Pn(e){Sn(e),(null!=e.checked||null!=e.onChange)&&iy(!1,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink")}function xn(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}function Nn(){this._rootNodeID&&
// DOM component is still mounted; update
Iy.updateWrapper(this)}function Mn(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}function Rn(e){var t=this._currentElement.props,n=my.executeOnChange(t,e);
// Here we use asap to wait until all updates have propagated, which
// is important when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
yy.asap(Nn,this);var o=t.name;if("radio"===t.type&&null!=o){for(var r=gy.getNodeFromInstance(this),a=r;a.parentNode;)a=a.parentNode;for(var i=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),s=0;s<i.length;s++){var u=i[s];if(u!==r&&u.form===r.form){
// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var c=gy.getInstanceFromNode(u);c||vy(!1,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."),
// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
yy.asap(Nn,c)}}}return n}function Dn(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=!1;var e=this._currentElement.props,t=Py.getValue(e);null!=t&&Un(this,Boolean(e.multiple),t)}}function An(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
function jn(e,t){var n=e._currentElement._owner;Py.checkPropTypes("select",t,n),t.valueLink===undefined||Ry||(My(!1,"`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead."),Ry=!0);for(var o=0;o<Ay.length;o++){var r=Ay[o];if(null!=t[r]){var a=Array.isArray(t[r]);t.multiple&&!a?My(!1,"The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",r,An(n)):!t.multiple&&a&&My(!1,"The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",r,An(n))}}}/**
	 * @param {ReactDOMComponent} inst
	 * @param {boolean} multiple
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
function Un(e,t,n){var o,r,a=xy.getNodeFromInstance(e).options;if(t){for(o={},r=0;r<n.length;r++)o[""+n[r]]=!0;for(r=0;r<a.length;r++){var i=o.hasOwnProperty(a[r].value);a[r].selected!==i&&(a[r].selected=i)}}else{for(
// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
o=""+n,r=0;r<a.length;r++)if(a[r].value===o)return void(a[r].selected=!0);a.length&&(a[0].selected=!0)}}function Ln(e){var t=this._currentElement.props,n=Py.executeOnChange(t,e);return this._rootNodeID&&(this._wrapperState.pendingUpdate=!0),Ny.asap(Dn,this),n}function Fn(e){var t="";
// Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
return Fy.Children.forEach(e,function(e){null!=e&&("string"==typeof e||"number"==typeof e?t+=e:Vy||(Vy=!0,Wy(!1,"Only strings and numbers are supported as <option> children.")))}),t}function Bn(){this._rootNodeID&&
// DOM component is still mounted; update
ev.updateWrapper(this)}function Hn(e){var t=this._currentElement.props,n=Ky.executeOnChange(t,e);return Xy.asap(Bn,this),n}/**
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
"function"!=typeof e[i]&&vv(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",o||"React class",gv[n],i),s=e[i](t,i,o,n,null,yv)}catch(e){s=e}if(bv(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",gv[n],i,typeof s),s instanceof Error&&!(s.message in _v)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
_v[s.message]=!0;var u="";hv||(hv=Rs),null!==a?u=hv.getStackAddendumByID(a):null!==r&&(u=hv.getCurrentStackAddendum(r)),bv(!1,"Failed %s type: %s%s",n,s.message,u)}}}/**
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
for(var r=0;r<n.length;r++)if(!Ev.call(t,n[r])||!Vn(e[n[r]],t[n[r]]))return!1;return!0}/**
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
function Yn(e,t){var n=null===e||!1===e,o=null===t||!1===t;if(n||o)return n===o;var r=typeof e,a=typeof t;return"string"===r||"number"===r?"string"===a||"number"===a:"object"===a&&e.type===t.type&&e.key===t.key}function zn(e){}function Kn(e,t){Wv(null===t||!1===t||Pv.isValidElement(t),"%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",e.displayName||e.name||"Component"),Wv(!e.childContextTypes,"%s(...): childContextTypes cannot be defined on a functional component.",e.displayName||e.name||"Component")}function Gn(e){return!(!e.prototype||!e.prototype.isReactComponent)}function Xn(e){return!(!e.prototype||!e.prototype.isPureReactComponent)}
// Separated into a function to contain deoptimizations caused by try/finally.
function $n(e,t,n){if(0===t)
// Top-level wrappers (see ReactMount) and empty components (see
// ReactDOMEmptyComponent) are invisible to hooks and devtools.
// Both are implementation details that should go away in the future.
return e();Dv.debugTool.onBeginLifeCycleTimer(t,n);try{return e()}finally{Dv.debugTool.onEndLifeCycleTimer(t,n)}}/**
	 * Get a host internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
function Qn(e){return Jv||Qv(!1,"There is no registered component for the tag %s",e.type),new Jv(e)}/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
function Jn(e){return new Zv(e)}/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
function Zn(e){return e instanceof Zv}function eo(){return rb++}function to(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}/**
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
function oo(e,t){var n;if(null===e||!1===e)n=cb.create(oo);else if("object"==typeof e){var o=e,r=o.type;if("function"!=typeof r&&"string"!=typeof r){var a="";(r===undefined||"object"==typeof r&&null!==r&&0===Object.keys(r).length)&&(a+=" You likely forgot to export your component from the file it's defined in."),a+=to(o._owner),db(!1,"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==r?r:typeof r,a)}
// Special case string values
"string"==typeof o.type?n=lb.createInternalComponent(o):no(o.type)?(
// This is temporarily available for custom components that are not string
// representations. I.e. ART. Once those are updated to use the string
// representation, we can drop this code path.
n=new o.type(o),
// We renamed this. Allow the old name for compat. :(
n.getHostNode||(n.getHostNode=n.getNativeNode)):n=new hb(o)}else"string"==typeof e||"number"==typeof e?n=lb.createInstanceForText(e):db(!1,"Encountered invalid React node of type %s",typeof e);
// These two fields are used by the DOM and ART diffing algorithms
// respectively. Instead of using expandos on components, we should be
// storing the state needed by the diffing algorithms elsewhere.
return fb("function"==typeof n.mountComponent&&"function"==typeof n.receiveComponent&&"function"==typeof n.getHostNode&&"function"==typeof n.unmountComponent,"Only React Components can be mounted."),n._mountIndex=0,n._mountImage=null,n._debugID=t?pb():0,Object.preventExtensions&&Object.preventExtensions(n),n}/**
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
function io(e){var t=e&&(Cb&&e[Cb]||e[Eb]);if("function"==typeof t)return t}/**
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
return e&&"object"==typeof e&&null!=e.key?Ob.escape(e.key):t.toString(36)}/**
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
"object"===r&&e.$$typeof===kb)
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
return n(o,e,""===t?xb+so(e,0):t),1;var a,i,s=0,u=""===t?xb:t+Nb;if(Array.isArray(e))for(var c=0;c<e.length;c++)a=e[c],i=u+so(a,c),s+=uo(a,i,n,o);else{var l=Ib(e);if(l){var p,d=l.call(e);if(l!==e.entries)for(var f=0;!(p=d.next()).done;)a=p.value,i=u+so(a,f++),s+=uo(a,i,n,o);else{var h="";if(Tb.current){var m=Tb.current.getName();m&&(h=" Check the render method of `"+m+"`.")}
// Iterator will provide entry [k,v] tuples rather than values.
for(Pb(Mb,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s",h),Mb=!0;!(p=d.next()).done;){var g=p.value;g&&(a=g[1],i=u+Ob.escape(g[0])+Nb+so(a,0),s+=uo(a,i,n,o))}}}else if("object"===r){var y="";if(y=" If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.",e._isReactElement&&(y=" It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),Tb.current){var v=Tb.current.getName();v&&(y+=" Check the render method of `"+v+"`.")}var b=String(e);Sb(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===b?"object with keys {"+Object.keys(e).join(", ")+"}":b,y)}}return s}/**
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
function co(e,t,n){return null==e?0:uo(e,"",t,n)}function lo(e,t,n,o){
// We found a component instance.
var r=e[n]===undefined;mb||(mb=Rs),r||Fb(!1,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.%s",jb.unescape(n),mb.getStackAddendumByID(o)),null!=t&&r&&(e[n]=Ab(t,!0))}/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 * @param {number=} selfDebugID Optional debugID of the current internal instance.
	 */
function po(e,t,n,o){
// We found a component instance.
if(e&&"object"==typeof e){var r=e,a=r[n]===undefined;Bb||(Bb=Rs),a||Yb(!1,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.%s",Vb.unescape(n),Bb.getStackAddendumByID(o)),a&&null!=t&&(r[n]=t)}}/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
function fo(e,t){if(null==e)return e;var n={};return qb(e,function(e,n,o){return po(e,n,o,t)},n),n}/**
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
return{type:"MOVE_EXISTING",content:null,fromIndex:e._mountIndex,fromNode:Qb.getHostNode(e),toIndex:n,afterNode:t}}/**
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
function _o(e,t){Kb.processChildrenUpdates(e,t)}function Co(e){c_.enqueueUpdate(e)}function Eo(e){var t=typeof e;if("object"!==t)return t;var n=e.constructor&&e.constructor.name||t,o=Object.keys(e);return o.length>0&&o.length<20?n+" (keys: "+o.join(", ")+")":n}function wo(e,t){var n=s_.get(e);if(!n){var o=e.constructor;
// Only warn when we have a callerName. Otherwise we should be silent.
// We're probably calling from enqueueCallback. We don't want to warn
// there because we already warned for the corresponding lifecycle method.
return p_(!t,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",t,t,o&&(o.displayName||o.name)||"ReactClass"),null}return p_(null==i_.current,"%s(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.",t),n}function To(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ko(e,t){var n=e.constructor;m_(!1,"%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op. Please check the code for the %s component.",t,t,n&&(n.displayName||n.name)||"ReactClass")}/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
function Io(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.useCreateElement=!1,this.updateQueue=new E_(this)}function So(e){if(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" This DOM node was rendered by `"+n+"`."}}return""}function Oo(e){if("object"==typeof e){if(Array.isArray(e))return"["+e.map(Oo).join(", ")+"]";var t=[];for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=/^[a-z$_][\w$_]*$/i.test(n)?n:JSON.stringify(n);t.push(o+": "+Oo(e[n]))}return"{"+t.join(", ")+"}"}return"string"==typeof e?JSON.stringify(e):"function"==typeof e?"[function object]":String(e)}function Po(e,t,n){if(null!=e&&null!=t&&!pC(e,t)){var o,r=n._tag,a=n._currentElement._owner;a&&(o=a.getName());var i=o+"|"+r;TC.hasOwnProperty(i)||(TC[i]=!0,hC(!1,"`%s` was passed a style object that has previously been mutated. Mutating `style` is deprecated. Consider cloning it beforehand. Check the `render` %s. Previous style: %s. Mutated style: %s.",r,a?"of `"+o+"`":"using <"+r+">",Oo(e),Oo(t)))}}/**
	 * @param {object} component
	 * @param {?object} props
	 */
function xo(e,t){t&&(
// Note the use of `==` which checks for null or undefined.
PC[e._tag]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&cC(!1,"%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s",e._tag,e._currentElement._owner?" Check the render method of "+e._currentElement._owner.getName()+".":""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&cC(!1,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."),"object"==typeof t.dangerouslySetInnerHTML&&CC in t.dangerouslySetInnerHTML||cC(!1,"`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")),hC(null==t.innerHTML,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),hC(t.suppressContentEditableWarning||!t.contentEditable||null==t.children,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),hC(null==t.onFocusIn&&null==t.onFocusOut,"React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),null!=t.style&&"object"!=typeof t.style&&cC(!1,"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s",So(e)))}function No(e,t,n,o){if(!(o instanceof iC)){
// IE8 has no API for event capturing and the `onScroll` event doesn't
// bubble.
hC("onScroll"!==t||lC("scroll",!0),"This browser doesn't support the `onScroll` event");var r=e._hostContainerInfo,a=r._node&&r._node.nodeType===wC,i=a?r._node:r._ownerDocument;vC(t,i),o.getReactMountReady().enqueue(Mo,{inst:e,registrationName:t,listener:n})}}function Mo(){var e=this;X_.putListener(e.inst,e.registrationName,e.listener)}function Ro(){var e=this;eC.postMountWrapper(e)}function Do(){var e=this;oC.postMountWrapper(e)}function Ao(){var e=this;tC.postMountWrapper(e)}function jo(){dC.track(this)}function Uo(){var e=this;
// If a component renders to null or if another component fatals and causes
// the state of the tree to be corrupted, `node` here can be null.
e._rootNodeID||cC(!1,"Must be mounted to trap events");var t=yC(e);switch(t||cC(!1,"trapBubbledEvent(...): Requires node to be rendered."),e._tag){case"iframe":case"object":e._wrapperState.listeners=[Q_.trapBubbledEvent("topLoad","load",t)];break;case"video":case"audio":e._wrapperState.listeners=[];
// Create listener for each media event
for(var n in IC)IC.hasOwnProperty(n)&&e._wrapperState.listeners.push(Q_.trapBubbledEvent(n,IC[n],t));break;case"source":e._wrapperState.listeners=[Q_.trapBubbledEvent("topError","error",t)];break;case"img":e._wrapperState.listeners=[Q_.trapBubbledEvent("topError","error",t),Q_.trapBubbledEvent("topLoad","load",t)];break;case"form":e._wrapperState.listeners=[Q_.trapBubbledEvent("topReset","reset",t),Q_.trapBubbledEvent("topSubmit","submit",t)];break;case"input":case"select":case"textarea":e._wrapperState.listeners=[Q_.trapBubbledEvent("topInvalid","invalid",t)]}}function Lo(){nC.postUpdateWrapper(this)}function Fo(e){MC.call(NC,e)||(xC.test(e)||cC(!1,"Invalid tag: %s",e),NC[e]=!0)}function Bo(e,t){return e.indexOf("-")>=0||null!=t.is}/**
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
function Ho(e){var t=e.type;Fo(t),this._currentElement=e,this._tag=t.toLowerCase(),this._namespaceURI=null,this._renderedChildren=null,this._previousStyle=null,this._previousStyleCopy=null,this._hostNode=null,this._hostParent=null,this._rootNodeID=0,this._domID=0,this._hostContainerInfo=null,this._wrapperState=null,this._topLevelWrapper=null,this._flags=0,this._ancestorInfo=null,kC.call(this,null)}/**
	 * Return the lowest common ancestor of A and B, or null if they are in
	 * different trees.
	 */
function Wo(e,t){"_hostNode"in e||BC(!1,"getNodeFromInstance: Invalid argument."),"_hostNode"in t||BC(!1,"getNodeFromInstance: Invalid argument.");for(var n=0,o=e;o;o=o._hostParent)n++;for(var r=0,a=t;a;a=a._hostParent)r++;
// If A is deeper, crawl up.
for(;n-r>0;)e=e._hostParent,n--;
// If B is deeper, crawl up.
for(;r-n>0;)t=t._hostParent,r--;for(
// Walk in lockstep until we find a match.
var i=n;i--;){if(e===t)return e;e=e._hostParent,t=t._hostParent}return null}/**
	 * Return if A is an ancestor of B.
	 */
function Vo(e,t){"_hostNode"in e||BC(!1,"isAncestor: Invalid argument."),"_hostNode"in t||BC(!1,"isAncestor: Invalid argument.");for(;t;){if(t===e)return!0;t=t._hostParent}return!1}/**
	 * Return the parent instance of the passed-in instance.
	 */
function qo(e){return"_hostNode"in e||BC(!1,"getParentInstance: Invalid argument."),e._hostParent}/**
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
for(;e._hostParent;)e=e._hostParent;var t=yE.getNodeFromInstance(e),n=t.parentNode;return yE.getClosestInstanceFromNode(n)}
// Used to store ancestor hierarchy in top level callback
function $o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function Qo(e){var t=bE(e.nativeEvent),n=yE.getClosestInstanceFromNode(t),o=n;do{e.ancestors.push(o),o=o&&Xo(o)}while(o);for(var r=0;r<e.ancestors.length;r++)n=e.ancestors[r],CE._handleTopLevel(e.topLevelType,n,e.nativeEvent,bE(e.nativeEvent))}function Jo(e){e(_E(window))}/**
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
var s=nr(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),u=s?0:i.toString().length,c=i.cloneRange();c.selectNodeContents(e),c.setEnd(i.startContainer,i.startOffset);var l=nr(c.startContainer,c.startOffset,c.endContainer,c.endOffset),p=l?0:c.toString().length,d=p+u,f=document.createRange();f.setStart(n,o),f.setEnd(r,a);var h=f.collapsed;return{start:h?d:p,end:h?p:d}}/**
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
function ir(e,t){if(window.getSelection){var n=window.getSelection(),o=e[jE()].length,r=Math.min(t.start,o),a=t.end===undefined?r:Math.min(t.end,o);
// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!n.extend&&r>a){var i=a;a=r,r=i}var s=AE(e,r),u=AE(e,a);if(s&&u){var c=document.createRange();c.setStart(s.node,s.offset),n.removeAllRanges(),r>a?(n.addRange(c),n.extend(u.node,u.offset)):(c.setEnd(u.node,u.offset),n.addRange(c))}}}/**
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
function ur(e){return WE(e)&&3==e.nodeType}/*eslint-disable no-bitwise */
/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
function cr(e,t){return!(!e||!t)&&(e===t||!qE(e)&&(qE(t)?cr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}/**
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
function lr(e){if(void 0===(e=e||("undefined"!=typeof document?document:undefined)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function pr(e){return XE(document.documentElement,e)}/**
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
this.renderToStaticMarkup=!1,this.reactMountReady=tw.getPooled(null),this.useCreateElement=e}/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
function fr(e){if("selectionStart"in e&&Cw.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}/**
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
if(Nw||null==Ow||Ow!==ww())return null;
// Only fire when selection has actually changed.
var n=fr(Ow);if(!xw||!kw(xw,n)){xw=n;var o=Ew.getPooled(Sw.select,Pw,e,t);return o.type="select",o.target=Ow,vw.accumulateTwoPhaseDispatches(o),o}return null}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
function mr(e,t,n,o){return Aw.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function gr(e,t,n,o){return Lw.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function yr(e,t,n,o){return Ww.call(this,e,t,n,o)}/**
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
var t=Kw[e.key]||e.key;if("Unidentified"!==t)return t}
// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var n=zw(e);
// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?Gw[e.keyCode]||"Unidentified":""}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function _r(e,t,n,o){return Jw.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Cr(e,t,n,o){return rT.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
function Er(e,t,n,o){return sT.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
function wr(e,t,n,o){return pT.call(this,e,t,n,o)}/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
function Tr(e,t,n,o){return hT.call(this,e,t,n,o)}function kr(e){
// Prevents V8 performance issue:
// https://github.com/facebook/react/pull/7232
return"."+e._rootNodeID}function Ir(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function Sr(){ik||(ik=!0,tk.EventEmitter.injectReactEventListener(ek),/**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
tk.EventPluginHub.injectEventPluginOrder(qT),tk.EventPluginUtils.injectComponentTree(XT),tk.EventPluginUtils.injectTreeTraversal(QT),/**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
tk.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:ak,EnterLeaveEventPlugin:YT,ChangeEventPlugin:VT,SelectEventPlugin:rk,BeforeInputEventPlugin:WT}),tk.HostComponent.injectGenericComponentClass(GT),tk.HostComponent.injectTextComponentClass(JT),tk.DOMProperty.injectDOMPropertyConfig(HT),tk.DOMProperty.injectDOMPropertyConfig(zT),tk.DOMProperty.injectDOMPropertyConfig(ok),tk.EmptyComponent.injectEmptyComponentFactory(function(e){return new $T(e)}),tk.Updates.injectReconcileTransaction(nk),tk.Updates.injectBatchingStrategy(ZT),tk.Component.injectEnvironment(KT))}function Or(e,t){var n={_topLevelWrapper:e,_idCounter:1,_ownerDocument:t?t.nodeType===ck?t:t.ownerDocument:null,_node:t,_tag:t?t.nodeName.toLowerCase():null,_namespaceURI:t?t.namespaceURI:null};return n._ancestorInfo=t?uk.updatedAncestorInfo(null,n._tag,null):null,n}
// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function Pr(e){for(var t=1,n=0,o=0,r=e.length,a=-4&r;o<a;){for(var i=Math.min(o+4096,a);o<i;o+=4)n+=(t+=e.charCodeAt(o))+(t+=e.charCodeAt(o+1))+(t+=e.charCodeAt(o+2))+(t+=e.charCodeAt(o+3));t%=fk,n%=fk}for(;o<r;o++)n+=t+=e.charCodeAt(o);return t%=fk,n%=fk,t|n<<16}/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
function xr(e,t){for(var n=Math.min(e.length,t.length),o=0;o<n;o++)if(e.charAt(o)!==t.charAt(o))return o;return e.length===t.length?-1:n}/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 * a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
function Nr(e){return e?e.nodeType===zk?e.documentElement:e.firstChild:null}function Mr(e){
// If node is something like a window, document, or text node, none of
// which support attributes or a .getAttribute method, gracefully return
// the empty string, as if the attribute were missing.
return e.getAttribute&&e.getAttribute(Vk)||""}/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
function Rr(e,t,n,o,r){var a;if(xk.logTopLevelRenders){var i=e._currentElement.props.child,s=i.type;a="React mount: "+("string"==typeof s?s:s.displayName||s.name),console.time(a)}var u=Dk.mountComponent(e,n,null,Ok(e,t),r,0);a&&console.timeEnd(a),e._renderedComponent._topLevelWrapper=e,Qk._mountImageIntoNode(u,t,e,o,n)}/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
function Dr(e,t,n,o){var r=jk.ReactReconcileTransaction.getPooled(/* useCreateElement */
!n&&Pk.useCreateElement);r.perform(Rr,null,e,t,r,n,o),jk.ReactReconcileTransaction.release(r)}/**
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
for(Mk.debugTool.onBeginFlush(),Dk.unmountComponent(e,n),Mk.debugTool.onEndFlush(),t.nodeType===zk&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)}/**
	 * True if the supplied DOM node has a direct React-rendered child that is
	 * not a React root element. Useful for warning in `render`,
	 * `unmountComponentAtNode`, etc.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM element contains a direct child that was
	 * rendered by React but is not a root element.
	 * @internal
	 */
function jr(e){var t=Nr(e);if(t){var n=Sk.getInstanceFromNode(t);return!(!n||!n._hostParent)}}/**
	 * True if the supplied DOM node is a React DOM element and
	 * it has been rendered by another copy of React.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM has been rendered by another copy of React
	 * @internal
	 */
function Ur(e){var t=Nr(e);return!(!t||!Fr(t)||Sk.getInstanceFromNode(t))}/**
	 * True if the supplied DOM node is a valid node element.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM is a valid DOM node.
	 * @internal
	 */
function Lr(e){return!(!e||e.nodeType!==Yk&&e.nodeType!==zk&&e.nodeType!==Kk)}/**
	 * True if the supplied DOM node is a valid React node element.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM is a valid React DOM node.
	 * @internal
	 */
function Fr(e){return Lr(e)&&(e.hasAttribute(qk)||e.hasAttribute(Vk))}function Br(e){var t=Nr(e),n=t&&Sk.getInstanceFromNode(t);return n&&!n._hostParent?n:null}function Hr(e){var t=Br(e);return t?t._hostContainerInfo._topLevelWrapper:null}function Wr(e){for(var t;(t=e._renderedNodeType)===Zk.COMPOSITE;)e=e._renderedComponent;return t===Zk.HOST?e._renderedComponent:t===Zk.EMPTY?null:void 0}/**
	 * Returns the DOM node rendered by this element.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
function Vr(e){var t=tI.current;if(null!==t&&(iI(t._warnedAboutRefsInRender,"%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",t.getName()||"A component"),t._warnedAboutRefsInRender=!0),null==e)return null;if(1===e.nodeType)return e;var n=oI.get(e);if(n)return n=rI(n),n?nI.getNodeFromInstance(n):null;"function"==typeof e.render?aI(!1,"findDOMNode was called on an unmounted component."):aI(!1,"Element appears to be neither ReactComponent nor DOMNode (keys: %s)",Object.keys(e))}function qr(e,t){null!=t&&"string"==typeof t.type&&(t.type.indexOf("-")>=0||t.props.is||yI(e,t))}function Yr(e,t){null!=t&&("input"!==t.type&&"textarea"!==t.type&&"select"!==t.type||null==t.props||null!==t.props.value||EI||(CI(!1,"`value` prop on `%s` should not be null. Consider using the empty string to clear the component or `undefined` for uncontrolled components.%s",t.type,_I.getStackAddendumByID(e)),EI=!0))}function zr(e,t,n){if(OI.hasOwnProperty(t)&&OI[t])return!0;if(PI.test(t)){var o=t.toLowerCase(),r=kI.getPossibleStandardName.hasOwnProperty(o)?kI.getPossibleStandardName[o]:null;
// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==r)return OI[t]=!0,!1;
// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==r)return SI(!1,"Unknown ARIA attribute %s. Did you mean %s?%s",t,r,II.getStackAddendumByID(n)),OI[t]=!0,!0}return!0}function Kr(e,t){var n=[];for(var o in t.props){zr(t.type,o,e)||n.push(o)}var r=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?SI(!1,"Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop%s",r,t.type,II.getStackAddendumByID(e)):n.length>1&&SI(!1,"Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop%s",r,t.type,II.getStackAddendumByID(e))}function Gr(e,t){null!=t&&"string"==typeof t.type&&(t.type.indexOf("-")>=0||t.props.is||Kr(e,t))}/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
function Xr(e){var t=rS.call(e,iS),n=e[iS];try{e[iS]=undefined}catch(e){}var o=aS.call(e);return t?e[iS]=n:delete e[iS],o}/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
function $r(e){return uS.call(e)}/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
function Qr(e){return null==e?e===undefined?lS:cS:pS&&pS in Object(e)?Xr(e):$r(e)}/**
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
function Zr(e){if(!Jr(e)||Qr(e)!=fS)return!1;var t=dS(e);if(null===t)return!0;var n=yS.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&gS.call(n)==vS}function ea(e,t,n){function o(){f===d&&(f=d.slice())}/**
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
function i(e){if(!Zr(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,p=l(p,e)}finally{h=!1}for(var t=d=f,n=0;n<t.length;n++){(0,t[n])()}return e}/**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
function s(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,i({type:_S.INIT})}/**
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
subscribe:function(e){function n(){e.next&&e.next(r())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[bS]=function(){return this},e}var c;if("function"==typeof t&&void 0===n&&(n=t,t=undefined),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(ea)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,p=t,d=[],f=d,h=!1;
// When a store is created, an "INIT" action is dispatched so that every
// reducer returns their initial state. This effectively populates
// the initial state tree.
return i({type:_S.INIT}),c={dispatch:i,subscribe:a,getState:r,replaceReducer:s},c[bS]=u,c}function ta(e,t){return function(){return t(e.apply(undefined,arguments))}}/**
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
throw new Error(e)}catch(e){}}function aa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ia(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function sa(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function ua(){TS||(TS=!0,ra("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions."))}function ca(e,t,n){if("string"!=typeof t){// don't hoist over string (html) components
if(MS){var o=NS(t);o&&o!==MS&&ca(e,o,n)}var r=OS(t);PS&&(r=r.concat(PS(t)));for(var a=0;a<r.length;++a){var i=r[a];if(!(kS[i]||IS[i]||n&&n[i])){var s=xS(t,i);try{// Avoid failures from read-only properties
SS(e,i,s)}catch(e){}}}return e}return e}function la(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pa(){
// the current/next pattern is copied from redux's createStore code.
// TODO: refactor+expose that code to be reusable here?
var e=[],t=[];return{clear:function(){t=jS,e=jS},notify:function(){for(var n=e=t,o=0;o<n.length;o++)n[o]()},get:function(){return t},subscribe:function(n){var o=!0;return t===e&&(t=e.slice()),t.push(n),function(){o&&e!==jS&&(o=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}function da(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fa(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function ha(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function ma(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function ga(){}function ya(e,t){
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
e){var t,n,o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},r=o.getDisplayName,a=r===undefined?function(e){return"ConnectAdvanced("+e+")"}:r,i=o.methodName,s=i===undefined?"connectAdvanced":i,u=o.renderCountProp,c=u===undefined?undefined:u,l=o.shouldHandleStateChanges,p=l===undefined||l,d=o.storeKey,f=d===undefined?"store":d,h=o.withRef,m=h!==undefined&&h,g=ma(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),y=f+"Subscription",v=BS++,b=(t={},t[f]=wS,t[y]=ES,t),_=(n={},n[y]=ES,n);return function(t){AS("function"==typeof t,"You must pass a component to the function returned by "+s+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",o=a(n),r=FS({},g,{getDisplayName:a,methodName:s,renderCountProp:c,shouldHandleStateChanges:p,storeKey:f,withRef:m,displayName:o,wrappedComponentName:n,WrappedComponent:t}),i=function(n){function a(e,t){da(this,a);var r=fa(this,n.call(this,e,t));return r.version=v,r.state={},r.renderCount=0,r.store=e[f]||t[f],r.propsMode=Boolean(e[f]),r.setWrappedInstance=r.setWrappedInstance.bind(r),AS(r.store,'Could not find "'+f+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+f+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return ha(a,n),a.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return e={},e[y]=t||this.context[y],e},a.prototype.componentDidMount=function(){p&&(
// componentWillMount fires during server side rendering, but componentDidMount and
// componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
// Otherwise, unsubscription would never take place during SSR, causing a memory leak.
// To handle the case where a child component may have triggered a state change by
// dispatching an action in its componentWillMount, we have to re-run the select and maybe
// re-render.
this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},a.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},a.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},a.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=ga,this.store=null,this.selector.run=ga,this.selector.shouldComponentUpdate=!1},a.prototype.getWrappedInstance=function(){return AS(m,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+s+"() call."),this.wrappedInstance},a.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},a.prototype.initSelector=function(){var t=e(this.store.dispatch,r);this.selector=ya(t,this.store),this.selector.run(this.props)},a.prototype.initSubscription=function(){if(p){
// parentSub's source should match where store came from: props vs. context. A component
// connected to the store via props shouldn't use subscription from context, or vice versa.
var e=(this.propsMode?this.props:this.context)[y];this.subscription=new LS(this.store,e,this.onStateChange.bind(this)),
// `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
// the middle of the notification loop, where `this.subscription` will then be null. An
// extra null check every change can be avoided by copying the method onto `this` and then
// replacing it with a no-op on unmount. This can probably be avoided if Subscription's
// listeners logic is changed to not call listeners that have been unsubscribed in the
// middle of the notification loop.
this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},a.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(HS)):this.notifyNestedSubs()},a.prototype.notifyNestedSubsOnComponentDidUpdate=function(){
// `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
// needs to notify nested subs. Once called, it unimplements itself until further state
// changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
// a boolean check every time avoids an extra method call most of the time, resulting
// in some perf boost.
this.componentDidUpdate=undefined,this.notifyNestedSubs()},a.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},a.prototype.addExtraProps=function(e){if(!(m||c||this.propsMode&&this.subscription))return e;
// make a shallow copy so that fields added don't leak to the original selector.
// this is especially important for 'ref' since that's a reference back to the component
// instance. a singleton memoized selector would then be holding a reference to the
// instance, preventing the instance from being garbage collected, and that would be bad
var t=FS({},e);return m&&(t.ref=this.setWrappedInstance),c&&(t[c]=this.renderCount++),this.propsMode&&this.subscription&&(t[y]=this.subscription),t},a.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return dc(t,this.addExtraProps(e.props))},a}(hc);return i.WrappedComponent=t,i.displayName=o,i.childContextTypes=_,i.contextTypes=b,i.propTypes=b,i.prototype.componentWillUpdate=function(){var e=this;
// We are hot reloading!
if(this.version!==v){this.version=v,this.initSelector();
// If any connected descendants don't hot reload (and resubscribe in the process), their
// listeners will be lost when we unsubscribe. Unfortunately, by copying over all
// listeners, this does mean that the old versions of connected descendants will still be
// notified of state changes; however, their onStateChange function is a no-op so this
// isn't a huge deal.
var t=[];this.subscription&&(t=this.subscription.listeners.get(),this.subscription.tryUnsubscribe()),this.initSubscription(),p&&(this.subscription.trySubscribe(),t.forEach(function(t){return e.subscription.listeners.subscribe(t)}))}},RS(i,t)}}function ba(e,t,n){Zr(e)||ra(n+"() in "+t+" must return a plain object. Instead received "+e+".")}function _a(e){return function(t,n){function o(){return r}var r=e(t,n);return o.dependsOnOwnProps=!1,o}}
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
function Ea(e,t){return function(n,o){var r=o.displayName,a=function(e,t){return a.dependsOnOwnProps?a.mapToProps(e,t):a.mapToProps(e)};
// allow detectFactoryAndVerify to get ownProps
return a.dependsOnOwnProps=!0,a.mapToProps=function(n,o){a.mapToProps=e,a.dependsOnOwnProps=Ca(e);var i=a(n,o);return"function"==typeof i&&(a.mapToProps=i,a.dependsOnOwnProps=Ca(i),i=a(n,o)),ba(i,r,t),i},a}}function wa(e){return"function"==typeof e?Ea(e,"mapDispatchToProps"):undefined}function Ta(e){return e?undefined:_a(function(e){return{dispatch:e}})}function ka(e){return e&&"object"==typeof e?_a(function(t){return na(e,t)}):undefined}function Ia(e){return"function"==typeof e?Ea(e,"mapStateToProps"):undefined}function Sa(e){return e?undefined:_a(function(){return{}})}function Oa(e,t,n){return qS({},n,e,t)}function Pa(e){return function(t,n){var o=n.displayName,r=n.pure,a=n.areMergedPropsEqual,i=!1,s=void 0;return function(t,n,u){var c=e(t,n,u);return i?r&&a(c,s)||(s=c):(i=!0,s=c,ba(s,o,"mergeProps")),s}}}function xa(e){return"function"==typeof e?Pa(e):undefined}function Na(e){return e?undefined:function(){return Oa}}function Ma(e,t,n){if(!e)throw new Error("Unexpected value for "+t+" in "+n+".");"mapStateToProps"!==t&&"mapDispatchToProps"!==t||e.hasOwnProperty("dependsOnOwnProps")||ra("The selector for "+t+" of "+n+" did not specify a value for dependsOnOwnProps.")}function Ra(e,t,n,o){Ma(e,"mapStateToProps",o),Ma(t,"mapDispatchToProps",o),Ma(n,"mergeProps",o)}function Da(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function Aa(e,t,n,o){return function(r,a){return n(e(r,a),t(o,a),a)}}function ja(e,t,n,o,r){function a(r,a){return h=r,m=a,g=e(h,m),y=t(o,m),v=n(g,y,m),f=!0,v}function i(){return g=e(h,m),t.dependsOnOwnProps&&(y=t(o,m)),v=n(g,y,m)}function s(){return e.dependsOnOwnProps&&(g=e(h,m)),t.dependsOnOwnProps&&(y=t(o,m)),v=n(g,y,m)}function u(){var t=e(h,m),o=!d(t,g);return g=t,o&&(v=n(g,y,m)),v}function c(e,t){var n=!p(t,m),o=!l(e,h);return h=e,m=t,n&&o?i():n?s():o?u():v}var l=r.areStatesEqual,p=r.areOwnPropsEqual,d=r.areStatePropsEqual,f=!1,h=void 0,m=void 0,g=void 0,y=void 0,v=void 0;return function(e,t){return f?c(e,t):a(e,t)}}
// TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.
function Ua(e,t){var n=t.initMapStateToProps,o=t.initMapDispatchToProps,r=t.initMergeProps,a=Da(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=n(e,a),s=o(e,a),u=r(e,a);return Ra(i,s,u,a.displayName),(a.pure?ja:Aa)(i,s,u,e,a)}/*
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
Object.defineProperty({},"x",{get:function(){}}),Qa=!0}catch(e){}var Ja=Qa,Za={};Object.freeze(Za);var ei=Za,ti=function(e){};ti=function(e){if(e===undefined)throw new Error("invariant requires an error message argument")};var ni=o,oi=function(){},ri=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=0,a="Warning: "+e.replace(/%s/g,function(){return n[r++]});"undefined"!=typeof console&&console.warn(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(e){}};oi=function(e,t){if(t===undefined)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];ri.apply(undefined,[t].concat(o))}};var ai=oi,ii=Ha,si=$a,ui=Ja,ci=ei,li=ni,pi=ai;r.prototype.isReactComponent={},/**
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
r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&li(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},/**
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
r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")};var di={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(var fi in di)di.hasOwnProperty(fi)&&function(e,t){ui&&Object.defineProperty(r.prototype,e,{get:function(){return pi(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1]),undefined}})}(fi,di[fi]);i.prototype=r.prototype,a.prototype=new i,a.prototype.constructor=a,
// Avoid an extra prototype jump for these methods.
ii(a.prototype,r.prototype),a.prototype.isPureReactComponent=!0;var hi,mi,gi={Component:r,PureComponent:a},yi=ni,vi=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},bi=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},_i=function(e,t,n){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n),r}return new o(e,t,n)},Ci=function(e,t,n,o){var r=this;if(r.instancePool.length){var a=r.instancePool.pop();return r.call(a,e,t,n,o),a}return new r(e,t,n,o)},Ei=function(e){var t=this;e instanceof t||yi(!1,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},wi=vi,Ti=function(e,t){
// Casting as any so that flow ignores the actual implementation and trusts
// it to match the type we declared
var n=e;return n.instancePool=[],n.getPooled=t||wi,n.poolSize||(n.poolSize=10),n.release=Ei,n},ki={addPoolingTo:Ti,oneArgumentPooler:vi,twoArgumentPooler:bi,threeArgumentPooler:_i,fourArgumentPooler:Ci},Ii=ki,Si=/*#__PURE__*/Object.freeze({default:Ii,__moduleExports:Ii}),Oi={/**
	   * @internal
	   * @type {ReactComponent}
	   */
current:null},Pi=Oi,xi="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,Ni=xi,Mi=Ha,Ri=Pi,Di=Ka,Ai=Ja,ji=Object.prototype.hasOwnProperty,Ui=Ni,Li={key:!0,ref:!0,__self:!0,__source:!0},Fi=function(e,t,n,o,r,a,i){var s={
// This tag allow us to uniquely identify this as a React Element
$$typeof:Ui,
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
return s._store={},Ai?(Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:r})):(s._store.validated=!1,s._self=o,s._source=r),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
Fi.createElement=function(e,t,n){var o,r={},a=null,i=null,p=null,d=null;if(null!=t){s(t)&&(i=t.ref),u(t)&&(a=""+t.key),p=t.__self===undefined?null:t.__self,d=t.__source===undefined?null:t.__source;
// Remaining properties are added to a new props object
for(o in t)ji.call(t,o)&&!Li.hasOwnProperty(o)&&(r[o]=t[o])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var f=arguments.length-2;if(1===f)r.children=n;else if(f>1){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];Object.freeze&&Object.freeze(h),r.children=h}
// Resolve default props
if(e&&e.defaultProps){var g=e.defaultProps;for(o in g)r[o]===undefined&&(r[o]=g[o])}if((a||i)&&("undefined"==typeof r.$$typeof||r.$$typeof!==Ui)){var y="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&c(r,y),i&&l(r,y)}return Fi(e,a,i,p,d,Ri.current,r)},/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
Fi.createFactory=function(e){var t=Fi.createElement.bind(null,e);
// Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. `<Foo />.type === Foo`.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
return t.type=e,t},Fi.cloneAndReplaceKey=function(e,t){return Fi(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
Fi.cloneElement=function(e,t,n){var o,r=Mi({},e.props),a=e.key,i=e.ref,c=e._self,l=e._source,p=e._owner;if(null!=t){s(t)&&(
// Silently steal the ref from the parent.
i=t.ref,p=Ri.current),u(t)&&(a=""+t.key);
// Remaining properties override existing props
var d;e.type&&e.type.defaultProps&&(d=e.type.defaultProps);for(o in t)ji.call(t,o)&&!Li.hasOwnProperty(o)&&(t[o]===undefined&&d!==undefined?
// Resolve default props
r[o]=d[o]:r[o]=t[o])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var f=arguments.length-2;if(1===f)r.children=n;else if(f>1){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];r.children=h}return Fi(e.type,a,i,c,l,p,r)},/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
Fi.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Ui};var Bi=Fi,Hi="function"==typeof Symbol&&Symbol.iterator,Wi="@@iterator",Vi=p,qi=/*#__PURE__*/Object.freeze({default:Vi,__moduleExports:Vi}),Yi={escape:d,unescape:f},zi=Yi,Ki=qi&&Vi||qi,Gi=Pi,Xi=Ni,$i=Ki,Qi=ni,Ji=zi,Zi=Ka,es=".",ts=":",ns=!1,os=g,rs=Si&&Ii||Si,as=rs,is=Bi,ss=Va,us=os,cs=as.twoArgumentPooler,ls=as.fourArgumentPooler,ps=/\/+/g;v.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},as.addPoolingTo(v,cs),C.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},as.addPoolingTo(C,ls);var ds,fs,hs,ms,gs,ys,vs,bs={forEach:_,map:T,mapIntoWithKeyPrefixInternal:w,count:I,toArray:S},_s=bs,Cs=Pi,Es=ni,ws=Ka,Ts=
// Array.from
"function"==typeof Array.from&&
// Map
"function"==typeof Map&&O(Map)&&
// Map.prototype.keys
null!=Map.prototype&&"function"==typeof Map.prototype.keys&&O(Map.prototype.keys)&&
// Set
"function"==typeof Set&&O(Set)&&
// Set.prototype.keys
null!=Set.prototype&&"function"==typeof Set.prototype.keys&&O(Set.prototype.keys);if(Ts){var ks=new Map,Is=new Set;ds=function(e,t){ks.set(e,t)},fs=function(e){return ks.get(e)},hs=function(e){ks["delete"](e)},ms=function(){return Array.from(ks.keys())},gs=function(e){Is.add(e)},ys=function(e){Is["delete"](e)},vs=function(){return Array.from(Is.keys())}}else{var Ss={},Os={},Ps=function(e){return"."+e},xs=function(e){return parseInt(e.substr(1),10)};ds=function(e,t){var n=Ps(e);Ss[n]=t},fs=function(e){var t=Ps(e);return Ss[t]},hs=function(e){var t=Ps(e);delete Ss[t]},ms=function(){return Object.keys(Ss).map(xs)},gs=function(e){var t=Ps(e);Os[t]=!0},ys=function(e){var t=Ps(e);delete Os[t]},vs=function(){return Object.keys(Os).map(xs)}}var Ns=[],Ms={onSetChildren:function(e,t){var n=fs(e);n||Es(!1,"Item must have been set"),n.childIDs=t;for(var o=0;o<t.length;o++){var r=t[o],a=fs(r);a||Es(!1,"Expected hook events to fire for the child before its parent includes it in onSetChildren()."),null==a.childIDs&&"object"==typeof a.element&&null!=a.element&&Es(!1,"Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren()."),a.isMounted||Es(!1,"Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren()."),null==a.parentID&&(a.parentID=e),a.parentID!==e&&Es(!1,"Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).",r,a.parentID,e)}},onBeforeMountComponent:function(e,t,n){ds(e,{element:t,parentID:n,text:null,childIDs:[],isMounted:!1,updateCount:0})},onBeforeUpdateComponent:function(e,t){var n=fs(e);n&&n.isMounted&&(n.element=t)},onMountComponent:function(e){var t=fs(e);t||Es(!1,"Item must have been set"),t.isMounted=!0,0===t.parentID&&gs(e)},onUpdateComponent:function(e){var t=fs(e);t&&t.isMounted&&t.updateCount++},onUnmountComponent:function(e){var t=fs(e);if(t){
// We need to check if it exists.
// `item` might not exist if it is inside an error boundary, and a sibling
// error boundary child threw while mounting. Then this instance never
// got a chance to mount, but it still gets an unmounting event during
// the error boundary cleanup.
t.isMounted=!1;0===t.parentID&&ys(e)}Ns.push(e)},purgeUnmountedComponents:function(){if(!Ms._preventPurging){for(var e=0;e<Ns.length;e++){P(Ns[e])}Ns.length=0}},isMounted:function(e){var t=fs(e);return!!t&&t.isMounted},getCurrentStackAddendum:function(e){var t="";if(e){var n=N(e),o=e._owner;t+=x(n,e._source,o&&o.getName())}var r=Cs.current,a=r&&r._debugID;return t+=Ms.getStackAddendumByID(a)},getStackAddendumByID:function(e){for(var t="";e;)t+=M(e),e=Ms.getParentID(e);return t},getChildIDs:function(e){var t=fs(e);return t?t.childIDs:[]},getDisplayName:function(e){var t=Ms.getElement(e);return t?N(t):null},getElement:function(e){var t=fs(e);return t?t.element:null},getOwnerID:function(e){var t=Ms.getElement(e);return t&&t._owner?t._owner._debugID:null},getParentID:function(e){var t=fs(e);return t?t.parentID:null},getSource:function(e){var t=fs(e),n=t?t.element:null;return null!=n?n._source:null},getText:function(e){var t=Ms.getElement(e);return"string"==typeof t?t:"number"==typeof t?""+t:null},getUpdateCount:function(e){var t=fs(e);return t?t.updateCount:0},getRootIDs:vs,getRegisteredIDs:ms,pushNonStandardWarningStack:function(e,t){if("function"==typeof console.reactStack){var n=[],o=Cs.current,r=o&&o._debugID;try{for(e&&n.push({name:r?Ms.getDisplayName(r):null,fileName:t?t.fileName:null,lineNumber:t?t.lineNumber:null});r;){var a=Ms.getElement(r),i=Ms.getParentID(r),s=Ms.getOwnerID(r),u=s?Ms.getDisplayName(s):null,c=a&&a._source;n.push({name:u,fileName:c?c.fileName:null,lineNumber:c?c.lineNumber:null}),r=i}}catch(e){}console.reactStack(n)}},popNonStandardWarningStack:function(){"function"==typeof console.reactStackEnd&&console.reactStackEnd()}},Rs=Ms,Ds={};Ds={prop:"prop",context:"context",childContext:"child context"};var As,js=Ds,Us=js,Ls="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Fs=ni,Bs=Ka;"undefined"!=typeof process&&process.env;var Hs={},Ws=R,Vs=Pi,qs=Rs,Ys=Bi,zs=Ws,Ks=Ja,Gs=Ki,Xs=Ka,$s=ai,Qs={},Js={createElement:function(e,t,n){var o="string"==typeof e||"function"==typeof e;
// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!o&&"function"!=typeof e&&"string"!=typeof e){var r="";(e===undefined||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(r+=" You likely forgot to export your component from the file it's defined in.");var a=A(t);r+=a||D(),r+=qs.getCurrentStackAddendum();var i=null!==t&&t!==undefined&&t.__source!==undefined?t.__source:null;qs.pushNonStandardWarningStack(!0,i),Xs(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==e?e:typeof e,r),qs.popNonStandardWarningStack()}var s=Ys.createElement.apply(this,arguments);
// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==s)return s;
// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(o)for(var u=2;u<arguments.length;u++)L(arguments[u],e);return F(s),s},createFactory:function(e){var t=Js.createElement.bind(null,e);
// Legacy hook TODO: Warn if this is accessed
return t.type=e,Ks&&Object.defineProperty(t,"type",{enumerable:!1,get:function(){return $s(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},cloneElement:function(e,t,n){for(var o=Ys.cloneElement.apply(this,arguments),r=2;r<arguments.length;r++)L(arguments[r],o.type);return F(o),o}},Zs=Js,eu=Bi,tu=eu.createFactory;tu=Zs.createFactory;/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 *
	 * @public
	 */
var nu={a:tu("a"),abbr:tu("abbr"),address:tu("address"),area:tu("area"),article:tu("article"),aside:tu("aside"),audio:tu("audio"),b:tu("b"),base:tu("base"),bdi:tu("bdi"),bdo:tu("bdo"),big:tu("big"),blockquote:tu("blockquote"),body:tu("body"),br:tu("br"),button:tu("button"),canvas:tu("canvas"),caption:tu("caption"),cite:tu("cite"),code:tu("code"),col:tu("col"),colgroup:tu("colgroup"),data:tu("data"),datalist:tu("datalist"),dd:tu("dd"),del:tu("del"),details:tu("details"),dfn:tu("dfn"),dialog:tu("dialog"),div:tu("div"),dl:tu("dl"),dt:tu("dt"),em:tu("em"),embed:tu("embed"),fieldset:tu("fieldset"),figcaption:tu("figcaption"),figure:tu("figure"),footer:tu("footer"),form:tu("form"),h1:tu("h1"),h2:tu("h2"),h3:tu("h3"),h4:tu("h4"),h5:tu("h5"),h6:tu("h6"),head:tu("head"),header:tu("header"),hgroup:tu("hgroup"),hr:tu("hr"),html:tu("html"),i:tu("i"),iframe:tu("iframe"),img:tu("img"),input:tu("input"),ins:tu("ins"),kbd:tu("kbd"),keygen:tu("keygen"),label:tu("label"),legend:tu("legend"),li:tu("li"),link:tu("link"),main:tu("main"),map:tu("map"),mark:tu("mark"),menu:tu("menu"),menuitem:tu("menuitem"),meta:tu("meta"),meter:tu("meter"),nav:tu("nav"),noscript:tu("noscript"),object:tu("object"),ol:tu("ol"),optgroup:tu("optgroup"),option:tu("option"),output:tu("output"),p:tu("p"),param:tu("param"),picture:tu("picture"),pre:tu("pre"),progress:tu("progress"),q:tu("q"),rp:tu("rp"),rt:tu("rt"),ruby:tu("ruby"),s:tu("s"),samp:tu("samp"),script:tu("script"),section:tu("section"),select:tu("select"),small:tu("small"),source:tu("source"),span:tu("span"),strong:tu("strong"),style:tu("style"),sub:tu("sub"),summary:tu("summary"),sup:tu("sup"),table:tu("table"),tbody:tu("tbody"),td:tu("td"),textarea:tu("textarea"),tfoot:tu("tfoot"),th:tu("th"),thead:tu("thead"),time:tu("time"),title:tu("title"),tr:tu("tr"),track:tu("track"),u:tu("u"),ul:tu("ul"),var:tu("var"),video:tu("video"),wbr:tu("wbr"),
// SVG
circle:tu("circle"),clipPath:tu("clipPath"),defs:tu("defs"),ellipse:tu("ellipse"),g:tu("g"),image:tu("image"),line:tu("line"),linearGradient:tu("linearGradient"),mask:tu("mask"),path:tu("path"),pattern:tu("pattern"),polygon:tu("polygon"),polyline:tu("polyline"),radialGradient:tu("radialGradient"),rect:tu("rect"),stop:tu("stop"),svg:tu("svg"),text:tu("text"),tspan:tu("tspan")},ou=nu,ru=/*#__PURE__*/Object.freeze({default:"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",__moduleExports:"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),au=ru&&"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"||ru,iu=function(){},su=au,uu={};iu=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(e){}};var cu=B,lu=Ha,pu=au,du=cu,fu=function(){};fu=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(e){}};var hu,mu=function(e,t){// Before Symbol spec.
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
function r(e){this.message=e,this.stack=""}function a(e){function n(n,i,s,u,c,l,p){if(u=u||E,l=l||s,p!==pu){if(t){
// New behavior only for users of `prop-types` package
var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("undefined"!=typeof console){
// Old behavior for people using React.PropTypes
var f=u+":"+s;!o[f]&&
// Avoid spamming the console because they are often not actionable except for lib authors
a<3&&(fu("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[f]=!0,a++)}}return null==i[s]?n?new r(null===i[s]?"The "+c+" `"+l+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+c+" `"+l+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(i,s,u,c,l)}var o={},a=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function i(e){function t(t,n,o,a,i,s){var u=t[n];if(g(u)!==e)return new r("Invalid "+a+" `"+i+"` of type `"+y(u)+"` supplied to `"+o+"`, expected `"+e+"`.");return null}return a(t)}function s(e){function t(t,n,o,a,i){if("function"!=typeof e)return new r("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s)){return new r("Invalid "+a+" `"+i+"` of type `"+g(s)+"` supplied to `"+o+"`, expected an array.")}for(var u=0;u<s.length;u++){var c=e(s,u,o,a,i+"["+u+"]",pu);if(c instanceof Error)return c}return null}return a(t)}function u(e){function t(t,n,o,a,i){if(!(t[n]instanceof e)){var s=e.name||E;return new r("Invalid "+a+" `"+i+"` of type `"+b(t[n])+"` supplied to `"+o+"`, expected instance of `"+s+"`.")}return null}return a(t)}function c(e){function t(t,n,a,i,s){for(var u=t[n],c=0;c<e.length;c++)if(o(u,e[c]))return null;return new r("Invalid "+i+" `"+s+"` of value `"+u+"` supplied to `"+a+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?a(t):(fu("Invalid argument supplied to oneOf, expected an instance of array."),H)}function l(e){function t(t,n,o,a,i){if("function"!=typeof e)return new r("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var s=t[n],u=g(s);if("object"!==u)return new r("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected an object.");for(var c in s)if(s.hasOwnProperty(c)){var l=e(s,c,o,a,i+"."+c,pu);if(l instanceof Error)return l}return null}return a(t)}function p(e){function t(t,n,o,a,i){for(var s=0;s<e.length;s++){if(null==(0,e[s])(t,n,o,a,i,pu))return null}return new r("Invalid "+a+" `"+i+"` supplied to `"+o+"`.")}if(!Array.isArray(e))return fu("Invalid argument supplied to oneOfType, expected an instance of array."),H;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return fu("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+v(o)+" at index "+n+"."),H}return a(t)}function d(e){function t(t,n,o,a,i){var s=t[n],u=g(s);if("object"!==u)return new r("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var l=e[c];if(l){var p=l(s,c,o,a,i+"."+c,pu);if(p)return p}}return null}return a(t)}function f(e){function t(t,n,o,a,i){var s=t[n],u=g(s);if("object"!==u)return new r("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");
// We need to check all keys in case some are required but missing from
// props.
var c=lu({},t[n],e);for(var l in c){var p=e[l];if(!p)return new r("Invalid "+a+" `"+i+"` key `"+l+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=p(s,l,o,a,i+"."+l,pu);if(d)return d}return null}return a(t)}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var o=n(t);if(!o)return!1;var r,a=o.call(t);if(o!==t.entries){for(;!(r=a.next()).done;)if(!h(r.value))return!1}else
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
function b(e){return e.constructor&&e.constructor.name?e.constructor.name:E}/* global Symbol */
var _="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",E="<<anonymous>>",w={array:i("array"),bool:i("boolean"),func:i("function"),number:i("number"),object:i("object"),string:i("string"),symbol:i("symbol"),any:function(){return a(H)}(),arrayOf:s,element:function(){function t(t,n,o,a,i){var s=t[n];if(!e(s)){return new r("Invalid "+a+" `"+i+"` of type `"+g(s)+"` supplied to `"+o+"`, expected a single ReactElement.")}return null}return a(t)}(),instanceOf:u,node:function(){function e(e,t,n,o,a){return h(e[t])?null:new r("Invalid "+o+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")}return a(e)}(),objectOf:l,oneOf:c,oneOfType:p,shape:d,exact:f};
// Make `instanceof Error` still work for returned errors.
return r.prototype=Error.prototype,w.checkPropTypes=du,w.PropTypes=w,w},gu=mu,yu=function(e){return gu(e,!1)},vu=/*#__PURE__*/Object.freeze({default:yu,__moduleExports:yu}),bu=vu&&yu||vu,_u=Bi,Cu=_u.isValidElement,Eu=bu,wu=Eu(Cu),Tu=Ha,ku=ei,Iu=ni,Su=Ka,Ou="mixins";hu={prop:"prop",context:"context",childContext:"child context"};var Pu=V,xu=/*#__PURE__*/Object.freeze({default:Pu,__moduleExports:Pu}),Nu=xu&&Pu||xu,Mu=gi,Ru=Mu.Component,Du=Bi,Au=Du.isValidElement,ju=$a,Uu=Nu,Lu=Uu(Ru,Au,ju),Fu=Bi,Bu=ni,Hu=q,Wu=Ha,Vu=gi,qu=_s,Yu=ou,zu=Bi,Ku=wu,Gu=Lu,Xu=Hu,$u=zu.createElement,Qu=zu.createFactory,Ju=zu.cloneElement,Zu=ai,ec=Ja,tc=Zs,nc=!1;$u=tc.createElement,Qu=tc.createFactory,Ju=tc.cloneElement;var oc=Wu,rc=function(e){return e},ac=!1,ic=!1;oc=function(){return Zu(ac,"React.__spread is deprecated and should not be used. Use Object.assign directly or another helper function with similar semantics. You may be seeing this warning due to your compiler. See https://fb.me/react-spread-deprecation for more details."),ac=!0,Wu.apply(null,arguments)},rc=function(e){return Zu(ic,"React.createMixin is deprecated and should not be used. In React v16.0, it will be removed. You can use this mixin directly instead. See https://fb.me/createmixin-was-never-implemented for more info."),ic=!0,e};var sc={
// Modern
Children:{map:qu.map,forEach:qu.forEach,count:qu.count,toArray:qu.toArray,only:Xu},Component:Vu.Component,PureComponent:Vu.PureComponent,createElement:$u,cloneElement:Ju,isValidElement:zu.isValidElement,
// Classic
PropTypes:Ku,createClass:Gu,createFactory:Qu,createMixin:rc,
// This looks DOM specific but these are actually isomorphic helpers
// since they are just generating DOM strings.
DOM:Yu,version:"15.6.2",
// Deprecated hook for JSX spread, don't use this for anything.
__spread:oc},uc=!1;ec&&(Object.defineProperty(sc,"PropTypes",{get:function(){return Zu(nc,"Accessing PropTypes via the main React package is deprecated, and will be removed in  React v16.0. Use the latest available v15.* prop-types package from npm instead. For info on usage, compatibility, migration and more, see https://fb.me/prop-types-docs"),nc=!0,Ku}}),Object.defineProperty(sc,"createClass",{get:function(){return Zu(uc,"Accessing createClass via the main React package is deprecated, and will be removed in React v16.0. Use a plain JavaScript class instead. If you're not yet ready to migrate, create-react-class v15.* is available on npm as a temporary, drop-in replacement. For more info see https://fb.me/react-create-class"),uc=!0,Gu}})),
// React.DOM factories are deprecated. Wrap these methods so that
// invocations of the React.DOM namespace and alert users to switch
// to the `react-dom-factories` package.
sc.DOM={};var cc=!1;Object.keys(Yu).forEach(function(e){sc.DOM[e]=function(){return cc||(Zu(!1,"Accessing factories like React.DOM.%s has been deprecated and will be removed in v16.0+. Use the react-dom-factories package instead.  Version 1.0 provides a drop-in replacement. For more info, see https://fb.me/react-dom-factories",e),cc=!0),Yu[e].apply(Yu,arguments)}});var lc=sc,pc=lc,dc=pc.createElement,fc=pc.Children,hc=pc.Component,mc=ni,gc={/**
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
injectDOMPropertyConfig:function(e){var t=gc,n=e.Properties||{},o=e.DOMAttributeNamespaces||{},r=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},i=e.DOMMutationMethods||{};e.isCustomAttribute&&vc._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var s in n){vc.properties.hasOwnProperty(s)&&mc(!1,"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",s);var u=s.toLowerCase(),c=n[s],l={attributeName:u,attributeNamespace:null,propertyName:s,mutationMethod:null,mustUseProperty:Y(c,t.MUST_USE_PROPERTY),hasBooleanValue:Y(c,t.HAS_BOOLEAN_VALUE),hasNumericValue:Y(c,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:Y(c,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:Y(c,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(l.hasBooleanValue+l.hasNumericValue+l.hasOverloadedBooleanValue<=1||mc(!1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",s),vc.getPossibleStandardName[u]=s,r.hasOwnProperty(s)){var p=r[s];l.attributeName=p,vc.getPossibleStandardName[p]=s}o.hasOwnProperty(s)&&(l.attributeNamespace=o[s]),a.hasOwnProperty(s)&&(l.propertyName=a[s]),i.hasOwnProperty(s)&&(l.mutationMethod=i[s]),vc.properties[s]=l}}},yc=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",vc={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:yc,ATTRIBUTE_NAME_CHAR:yc+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",/**
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
isCustomAttribute:function(e){for(var t=0;t<vc._isCustomAttributeFunctions.length;t++){if((0,vc._isCustomAttributeFunctions[t])(e))return!0}return!1},injection:gc},bc=vc,_c={hasCachedChildNodes:1},Cc=_c,Ec=bc,wc=Cc,Tc=ni,kc=Ec.ID_ATTRIBUTE_NAME,Ic=wc,Sc="__reactInternalInstance$"+Math.random().toString(36).slice(2),Oc={getClosestInstanceFromNode:Q,getInstanceFromNode:J,getNodeFromInstance:Z,precacheChildNodes:$,precacheNode:G,uncacheNode:X},Pc=Oc,xc={Properties:{
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
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},DOMAttributeNames:{},DOMPropertyNames:{}},Nc=xc,Mc=ni,Rc=null,Dc={},Ac={/**
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
injectEventPluginOrder:function(e){Rc&&Mc(!1,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."),
// Clone the ordering so it cannot be dynamically mutated.
Rc=Array.prototype.slice.call(e),ee()},/**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];Dc.hasOwnProperty(n)&&Dc[n]===o||(Dc[n]&&Mc(!1,"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",n),Dc[n]=o,t=!0)}t&&ee()},/**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return Ac.registrationNameModules[t.registrationName]||null;if(t.phasedRegistrationNames!==undefined){
// pulling phasedRegistrationNames out of dispatchConfig helps Flow see
// that it is not undefined.
var n=t.phasedRegistrationNames;for(var o in n)if(n.hasOwnProperty(o)){var r=Ac.registrationNameModules[n[o]];if(r)return r}}return null},/**
	   * Exposed for unit testing.
	   * @private
	   */
_resetEventPlugins:function(){Rc=null;for(var e in Dc)Dc.hasOwnProperty(e)&&delete Dc[e];Ac.plugins.length=0;var t=Ac.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var o=Ac.registrationNameModules;for(var r in o)o.hasOwnProperty(r)&&delete o[r];var a=Ac.possibleRegistrationNames;for(var i in a)a.hasOwnProperty(i)&&delete a[i]}},jc=Ac,Uc=null,Lc={invokeGuardedCallback:oe,/**
	   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
	   * handler are sure to be rethrown by rethrowCaughtError.
	   */
invokeGuardedCallbackWithCatch:oe,/**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
rethrowCaughtError:function(){if(Uc){var e=Uc;throw Uc=null,e}}};/**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
if("undefined"!=typeof window&&"function"==typeof window.dispatchEvent&&"undefined"!=typeof document&&"function"==typeof document.createEvent){var Fc=document.createElement("react");Lc.invokeGuardedCallback=function(e,t,n){var o=function(){t(n)},r="react-"+e;Fc.addEventListener(r,o,!1);var a=document.createEvent("Event");a.initEvent(r,!1,!1),Fc.dispatchEvent(a),Fc.removeEventListener(r,o,!1)}}var Bc,Hc,Wc,Vc=Lc,qc=Vc,Yc=ni,zc=Ka,Kc={injectComponentTree:function(e){Bc=e,zc(e&&e.getNodeFromInstance&&e.getInstanceFromNode,"EventPluginUtils.injection.injectComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.")},injectTreeTraversal:function(e){Hc=e,zc(e&&e.isAncestor&&e.getLowestCommonAncestor,"EventPluginUtils.injection.injectTreeTraversal(...): Injected module is missing isAncestor or getLowestCommonAncestor.")}};Wc=function(e){var t=e._dispatchListeners,n=e._dispatchInstances,o=Array.isArray(t),r=o?t.length:t?1:0,a=Array.isArray(n),i=a?n.length:n?1:0;zc(a===o&&i===r,"EventPluginUtils: Invalid `event`.")};/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
var Gc={isEndish:re,isMoveish:ae,isStartish:ie,executeDirectDispatch:pe,executeDispatchesInOrder:ue,executeDispatchesInOrderStopAtTrue:le,hasDispatches:de,getInstanceFromNode:function(e){return Bc.getInstanceFromNode(e)},getNodeFromInstance:function(e){return Bc.getNodeFromInstance(e)},isAncestor:function(e,t){return Hc.isAncestor(e,t)},getLowestCommonAncestor:function(e,t){return Hc.getLowestCommonAncestor(e,t)},getParentInstance:function(e){return Hc.getParentInstance(e)},traverseTwoPhase:function(e,t,n){return Hc.traverseTwoPhase(e,t,n)},traverseEnterLeave:function(e,t,n,o,r){return Hc.traverseEnterLeave(e,t,n,o,r)},injection:Kc},Xc=Gc,$c=ni,Qc=fe,Jc=he,Zc=jc,el=Xc,tl=Vc,nl=Qc,ol=Jc,rl=ni,al={},il=null,sl=function(e,t){e&&(el.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},ul=function(e){return sl(e,!0)},cl=function(e){return sl(e,!1)},ll=function(e){
// Prevents V8 performance issue:
// https://github.com/facebook/react/pull/7232
return"."+e._rootNodeID},pl={/**
	   * Methods for injecting dependencies.
	   */
injection:{/**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
injectEventPluginOrder:Zc.injectEventPluginOrder,/**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
injectEventPluginsByName:Zc.injectEventPluginsByName},/**
	   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
	   *
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {function} listener The callback to store.
	   */
putListener:function(e,t,n){"function"!=typeof n&&rl(!1,"Expected %s listener to be a function, instead got type %s",t,typeof n);var o=ll(e);(al[t]||(al[t]={}))[o]=n;var r=Zc.registrationNameModules[t];r&&r.didPutListener&&r.didPutListener(e,t,n)},/**
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
getListener:function(e,t){
// TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
// live here; needs to be moved to a better place soon
var n=al[t];if(ge(t,e._currentElement.type,e._currentElement.props))return null;var o=ll(e);return n&&n[o]},/**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
deleteListener:function(e,t){var n=Zc.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var o=al[t];
// TODO: This should never be null -- when is it?
if(o){delete o[ll(e)]}},/**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {object} inst The instance, which is the source of events.
	   */
deleteAllListeners:function(e){var t=ll(e);for(var n in al)if(al.hasOwnProperty(n)&&al[n][t]){var o=Zc.registrationNameModules[n];o&&o.willDeleteListener&&o.willDeleteListener(e,n),delete al[n][t]}},/**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
extractEvents:function(e,t,n,o){for(var r,a=Zc.plugins,i=0;i<a.length;i++){
// Not every plugin in the ordering may be loaded at runtime.
var s=a[i];if(s){var u=s.extractEvents(e,t,n,o);u&&(r=nl(r,u))}}return r},/**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
enqueueEvents:function(e){e&&(il=nl(il,e))},/**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
processEventQueue:function(e){
// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var t=il;il=null,e?ol(t,ul):ol(t,cl),il&&rl(!1,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."),
// This would be a good time to rethrow if any of the event handlers threw.
tl.rethrowCaughtError()},/**
	   * These are needed for tests only. Do not use!
	   */
__purge:function(){al={}},__getListenerBank:function(){return al}},dl=pl,fl=dl,hl=Xc,ml=Qc,gl=Jc,yl=Ka,vl=fl.getListener,bl={accumulateTwoPhaseDispatches:we,accumulateTwoPhaseDispatchesSkipTarget:Te,accumulateDirectDispatches:Ie,accumulateEnterLeaveDispatches:ke},_l=bl,Cl=!("undefined"==typeof window||!window.document||!window.document.createElement),El={canUseDOM:Cl,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:Cl&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:Cl&&!!window.screen,isInWorker:!Cl},wl=El,Tl=/*#__PURE__*/Object.freeze({default:wl,__moduleExports:wl}),kl=ni,Il=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},Sl=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},Ol=function(e,t,n){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n),r}return new o(e,t,n)},Pl=function(e,t,n,o){var r=this;if(r.instancePool.length){var a=r.instancePool.pop();return r.call(a,e,t,n,o),a}return new r(e,t,n,o)},xl=function(e){var t=this;e instanceof t||kl(!1,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},Nl=Il,Ml=function(e,t){
// Casting as any so that flow ignores the actual implementation and trusts
// it to match the type we declared
var n=e;return n.instancePool=[],n.getPooled=t||Nl,n.poolSize||(n.poolSize=10),n.release=xl,n},Rl={addPoolingTo:Ml,oneArgumentPooler:Il,twoArgumentPooler:Sl,threeArgumentPooler:Ol,fourArgumentPooler:Pl},Dl=Rl,Al=Tl&&wl||Tl,jl=Al,Ul=null,Ll=Se,Fl=Ha,Bl=Dl,Hl=Ll;Fl(Oe.prototype,{destructor:function(){this._root=null,this._startText=null,this._fallbackText=null},/**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
getText:function(){return"value"in this._root?this._root.value:this._root[Hl()]},/**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,o=n.length,r=this.getText(),a=r.length;for(e=0;e<o&&n[e]===r[e];e++);var i=o-e;for(t=1;t<=i&&n[o-t]===r[a-t];t++);var s=t>1?1-t:undefined;return this._fallbackText=r.slice(e,s),this._fallbackText}}),Bl.addPoolingTo(Oe);var Wl=Oe,Vl=/*#__PURE__*/Object.freeze({default:Wl,__moduleExports:Wl}),ql=Ha,Yl=Dl,zl=Va,Kl=Ka,Gl=!1,Xl="function"==typeof Proxy,$l=["dispatchConfig","_targetInst","nativeEvent","isDefaultPrevented","isPropagationStopped","_dispatchListeners","_dispatchInstances"],Ql={type:null,target:null,
// currentTarget is set when dispatching; no use in copying it here
currentTarget:zl.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};ql(Pe.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=zl.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(
// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
e.cancelBubble=!0),this.isPropagationStopped=zl.thatReturnsTrue)},/**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
persist:function(){this.isPersistent=zl.thatReturnsTrue},/**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
isPersistent:zl.thatReturnsFalse,/**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
destructor:function(){var e=this.constructor.Interface;for(var t in e)Object.defineProperty(this,t,xe(t,e[t]));for(var n=0;n<$l.length;n++)this[$l[n]]=null;Object.defineProperty(this,"nativeEvent",xe("nativeEvent",null)),Object.defineProperty(this,"preventDefault",xe("preventDefault",zl)),Object.defineProperty(this,"stopPropagation",xe("stopPropagation",zl))}}),Pe.Interface=Ql,/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
Pe.augmentClass=function(e,t){var n=this,o=function(){};o.prototype=n.prototype;var r=new o;ql(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=ql({},n.Interface,t),e.augmentClass=n.augmentClass,Yl.addPoolingTo(e,Yl.fourArgumentPooler)},Xl&&(/*eslint-disable no-func-assign */
Pe=new Proxy(Pe,{construct:function(e,t){return this.apply(e,Object.create(e.prototype),t)},apply:function(e,t,n){return new Proxy(e.apply(t,n),{set:function(e,t,n){return"isPersistent"===t||e.constructor.Interface.hasOwnProperty(t)||-1!==$l.indexOf(t)||(Kl(Gl||e.isPersistent(),"This synthetic event is reused for performance reasons. If you're seeing this, you're adding a new property in the synthetic event object. The property is never released. See https://fb.me/react-event-pooling for more information."),Gl=!0),e[t]=n,!0}})}})),Yl.addPoolingTo(Pe,Yl.fourArgumentPooler);var Jl=Pe,Zl=Jl,ep={data:null};Zl.augmentClass(Ne,ep);var tp=Ne,np=Jl,op={data:null};np.augmentClass(Me,op);var rp=Me,ap=Vl&&Wl||Vl,ip=_l,sp=Al,up=ap,cp=tp,lp=rp,pp=[9,13,27,32],dp=229,fp=sp.canUseDOM&&"CompositionEvent"in window,hp=null;sp.canUseDOM&&"documentMode"in document&&(hp=document.documentMode);
// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var mp=sp.canUseDOM&&"TextEvent"in window&&!hp&&!/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
function(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}(),gp=sp.canUseDOM&&(!fp||hp&&hp>8&&hp<=11),yp=32,vp=String.fromCharCode(yp),bp={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:["topBlur","topCompositionEnd","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:["topBlur","topCompositionStart","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:["topBlur","topCompositionUpdate","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]}},_p=!1,Cp=null,Ep={eventTypes:bp,extractEvents:function(e,t,n,o){return[Le(e,t,n,o),He(e,t,n,o)]}},wp=Ep,Tp=Dl,kp=ni,Ip=function(){function e(t){We(this,e),this._callbacks=null,this._contexts=null,this._arg=t}/**
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
return e.prototype.enqueue=function(e,t){this._callbacks=this._callbacks||[],this._callbacks.push(e),this._contexts=this._contexts||[],this._contexts.push(t)},e.prototype.notifyAll=function(){var e=this._callbacks,t=this._contexts,n=this._arg;if(e&&t){e.length!==t.length&&kp(!1,"Mismatched list of contexts in callback queue"),this._callbacks=null,this._contexts=null;for(var o=0;o<e.length;o++)e[o].call(t[o],n);e.length=0,t.length=0}},e.prototype.checkpoint=function(){return this._callbacks?this._callbacks.length:0},e.prototype.rollback=function(e){this._callbacks&&this._contexts&&(this._callbacks.length=e,this._contexts.length=e)},e.prototype.reset=function(){this._callbacks=null,this._contexts=null},e.prototype.destructor=function(){this.reset()},e}(),Sp=Tp.addPoolingTo(Ip),Op={
// When true, call console.time() before and .timeEnd() after each top-level
// render (both initial renders and updates). Useful when looking at prod-mode
// timeline profiles in Chrome, for example.
logTopLevelRenders:!1},Pp=Op,xp=ni,Np={/**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
addComponentAsRefTo:function(e,t,n){Ve(n)||xp(!1,"addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner)."),n.attachRef(t,e)},/**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
removeComponentAsRefFrom:function(e,t,n){Ve(n)||xp(!1,"removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).");var o=n.getPublicInstance();
// Check that `component`'s owner is still alive and that `component` is still the current ref
// because we do not want to detach the ref if another component stole it.
o&&o.refs[t]===e.getPublicInstance()&&n.detachRef(t)}},Mp=Np,Rp=Mp,Dp={};Dp.attachRefs=function(e,t){if(null!==t&&"object"==typeof t){var n=t.ref;null!=n&&qe(n,e,t._owner)}},Dp.shouldUpdateRefs=function(e,t){
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
return null!==t&&"object"==typeof t&&(r=t.ref,a=t._owner),n!==r||"string"==typeof r&&a!==o},Dp.detachRefs=function(e,t){if(null!==t&&"object"==typeof t){var n=t.ref;null!=n&&Ye(n,e,t._owner)}};var Ap,jp=Dp,Up=/*#__PURE__*/Object.freeze({default:jp,__moduleExports:jp}),Lp=Ka,Fp=!1,Bp=function(){Lp(!Fp,"setState(...): Cannot call setState() inside getChildContext()")},Hp={onBeginProcessingChildContext:function(){Fp=!0},onEndProcessingChildContext:function(){Fp=!1},onSetState:function(){Bp()}},Wp=Hp,Vp=[],qp={onHostOperation:function(e){Vp.push(e)},clearHistory:function(){qp._preventClearing||(Vp=[])},getHistory:function(){return Vp}},Yp=qp,zp=Al;zp.canUseDOM&&(Ap=window.performance||window.msPerformance||window.webkitPerformance);var Kp,Gp=Ap||{},Xp=Gp;/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
Kp=Xp.now?function(){return Xp.now()}:function(){return Date.now()};var $p=Kp,Qp=Wp,Jp=Yp,Zp=Rs,ed=Al,td=$p,nd=Ka,od=[],rd={},ad=!1,id=[],sd=[],ud=0,cd=[],ld=0,pd=null,dd=0,fd=0,hd=null,md=!1,gd=0,yd="undefined"!=typeof performance&&"function"==typeof performance.mark&&"function"==typeof performance.clearMarks&&"function"==typeof performance.measure&&"function"==typeof performance.clearMeasures,vd={addHook:function(e){od.push(e)},removeHook:function(e){for(var t=0;t<od.length;t++)od[t]===e&&(od.splice(t,1),t--)},isProfiling:function(){return ad},beginProfiling:function(){ad||(ad=!0,id.length=0,$e(),vd.addHook(Jp))},endProfiling:function(){ad&&(ad=!1,$e(),vd.removeHook(Jp))},getFlushHistory:function(){return id},onBeginFlush:function(){ud++,$e(),et(),Ke("onBeginFlush")},onEndFlush:function(){$e(),ud--,tt(),Ke("onEndFlush")},onBeginLifeCycleTimer:function(e,t){Qe(e),Ke("onBeginLifeCycleTimer",e,t),ot(e,t),Je(e,t)},onEndLifeCycleTimer:function(e,t){Qe(e),Ze(e,t),rt(e,t),Ke("onEndLifeCycleTimer",e,t)},onBeginProcessingChildContext:function(){Ke("onBeginProcessingChildContext")},onEndProcessingChildContext:function(){Ke("onEndProcessingChildContext")},onHostOperation:function(e){Qe(e.instanceID),Ke("onHostOperation",e)},onSetState:function(){Ke("onSetState")},onSetChildren:function(e,t){Qe(e),t.forEach(Qe),Ke("onSetChildren",e,t)},onBeforeMountComponent:function(e,t,n){Qe(e),Qe(n,!0),Ke("onBeforeMountComponent",e,t,n),ot(e,"mount")},onMountComponent:function(e){Qe(e),rt(e,"mount"),Ke("onMountComponent",e)},onBeforeUpdateComponent:function(e,t){Qe(e),Ke("onBeforeUpdateComponent",e,t),ot(e,"update")},onUpdateComponent:function(e){Qe(e),rt(e,"update"),Ke("onUpdateComponent",e)},onBeforeUnmountComponent:function(e){Qe(e),Ke("onBeforeUnmountComponent",e),ot(e,"unmount")},onUnmountComponent:function(e){Qe(e),rt(e,"unmount"),Ke("onUnmountComponent",e)},onTestEvent:function(){Ke("onTestEvent")}};
// TODO remove these when RN/www gets updated
vd.addDevtool=vd.addHook,vd.removeDevtool=vd.removeHook,vd.addHook(Qp),vd.addHook(Zp),/[?&]react_perf\b/.test(ed.canUseDOM&&window.location.href||"")&&vd.beginProfiling();var bd=vd,_d=null;_d=bd;var Cd={debugTool:_d},Ed=Up&&jp||Up,wd=Ed,Td=Cd,kd=Ka,Id={/**
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
mountComponent:function(e,t,n,o,r,a){0!==e._debugID&&Td.debugTool.onBeforeMountComponent(e._debugID,e._currentElement,a);var i=e.mountComponent(t,n,o,r,a);return e._currentElement&&null!=e._currentElement.ref&&t.getReactMountReady().enqueue(at,e),0!==e._debugID&&Td.debugTool.onMountComponent(e._debugID),i},/**
	   * Returns a value that can be passed to
	   * ReactComponentEnvironment.replaceNodeWithMarkup.
	   */
getHostNode:function(e){return e.getHostNode()},/**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
unmountComponent:function(e,t){0!==e._debugID&&Td.debugTool.onBeforeUnmountComponent(e._debugID),wd.detachRefs(e,e._currentElement),e.unmountComponent(t),0!==e._debugID&&Td.debugTool.onUnmountComponent(e._debugID)},/**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
receiveComponent:function(e,t,n,o){var r=e._currentElement;if(t!==r||o!==e._context){0!==e._debugID&&Td.debugTool.onBeforeUpdateComponent(e._debugID,t);var a=wd.shouldUpdateRefs(r,t);a&&wd.detachRefs(e,r),e.receiveComponent(t,n,o),a&&e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(at,e),0!==e._debugID&&Td.debugTool.onUpdateComponent(e._debugID)}},/**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
performUpdateIfNecessary:function(e,t,n){if(e._updateBatchNumber!==n)
// The component's enqueued batch number should always be the current
// batch or the following one.
return void kd(null==e._updateBatchNumber||e._updateBatchNumber===n+1,"performUpdateIfNecessary: Unexpected batch number (current %s, pending %s)",n,e._updateBatchNumber);0!==e._debugID&&Td.debugTool.onBeforeUpdateComponent(e._debugID,e._currentElement),e.performUpdateIfNecessary(t),0!==e._debugID&&Td.debugTool.onUpdateComponent(e._debugID)}},Sd=Id,Od=ni,Pd={},xd={/**
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
this.isInTransaction()&&Od(!1,"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.");var u,c;try{this._isInTransaction=!0,
// Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// one of these calls threw.
u=!0,this.initializeAll(0),c=e.call(t,n,o,r,a,i,s),u=!1}finally{try{if(u)
// If `method` throws, prefer to show that stack trace over any thrown
// by invoking `closeAll`.
try{this.closeAll(0)}catch(e){}else
// Since `method` didn't throw, we don't want to silence the exception
// here.
this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o=t[n];try{
// Catching errors makes debugging more difficult, so we start with the
// OBSERVED_ERROR state before overwriting it with the real return value
// of initialize -- if it's still set to OBSERVED_ERROR in the finally
// block, it means wrapper.initialize threw.
this.wrapperInitData[n]=Pd,this.wrapperInitData[n]=o.initialize?o.initialize.call(this):null}finally{if(this.wrapperInitData[n]===Pd)
// The initializer for wrapper i threw an error; initialize the
// remaining wrappers but silence any exceptions from them to ensure
// that the first error is the one to bubble up.
try{this.initializeAll(n+1)}catch(e){}}}},/**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
closeAll:function(e){this.isInTransaction()||Od(!1,"Transaction.closeAll(): Cannot close transaction when none are open.");for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,r=t[n],a=this.wrapperInitData[n];try{
// Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// wrapper.close threw.
o=!0,a!==Pd&&r.close&&r.close.call(this,a),o=!1}finally{if(o)
// The closer for wrapper i threw an error; close the remaining
// wrappers but silence any exceptions from them to ensure that the
// first error is the one to bubble up.
try{this.closeAll(n+1)}catch(e){}}}this.wrapperInitData.length=0}},Nd=xd,Md=Ha,Rd=Sp,Dd=Dl,Ad=Pp,jd=Sd,Ud=Nd,Ld=ni,Fd=[],Bd=0,Hd=Rd.getPooled(),Wd=!1,Vd=null,qd={initialize:function(){this.dirtyComponentsLength=Fd.length},close:function(){this.dirtyComponentsLength!==Fd.length?(
// Additional updates were enqueued by componentDidUpdate handlers or
// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
// these new updates so that if A's componentDidUpdate calls setState on
// B, B will update before the callback A's updater provided when calling
// setState.
Fd.splice(0,this.dirtyComponentsLength),Gd()):Fd.length=0}},Yd={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},zd=[qd,Yd];Md(st.prototype,Ud,{getTransactionWrappers:function(){return zd},destructor:function(){this.dirtyComponentsLength=null,Rd.release(this.callbackQueue),this.callbackQueue=null,$d.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){
// Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
// with this transaction's wrappers around it.
return Ud.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),Dd.addPoolingTo(st);var Kd,Gd=function(){
// ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
// array and perform any updates enqueued by mount-ready handlers (i.e.,
// componentDidUpdate) but we need to check here too in order to catch
// updates enqueued by setState callbacks and asap calls.
for(;Fd.length||Wd;){if(Fd.length){var e=st.getPooled();e.perform(lt,null,e),st.release(e)}if(Wd){Wd=!1;var t=Hd;Hd=Rd.getPooled(),t.notifyAll(),Rd.release(t)}}},Xd={injectReconcileTransaction:function(e){e||Ld(!1,"ReactUpdates: must provide a reconcile transaction class"),$d.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){e||Ld(!1,"ReactUpdates: must provide a batching strategy"),"function"!=typeof e.batchedUpdates&&Ld(!1,"ReactUpdates: must provide a batchedUpdates() function"),"boolean"!=typeof e.isBatchingUpdates&&Ld(!1,"ReactUpdates: must provide an isBatchingUpdates boolean attribute"),Vd=e}},$d={/**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
ReactReconcileTransaction:null,batchedUpdates:ut,enqueueUpdate:pt,flushBatchedUpdates:Gd,injection:Xd,asap:dt},Qd=$d,Jd=Pc,Zd={
// exposed for testing
_getTrackerFromNode:function(e){return ht(Jd.getInstanceFromNode(e))},track:function(e){if(!ht(e)){var t=Jd.getNodeFromInstance(e),n=ft(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),r=""+t[n];
// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
t.hasOwnProperty(n)||"function"!=typeof o.get||"function"!=typeof o.set||(Object.defineProperty(t,n,{enumerable:o.enumerable,configurable:!0,get:function(){return o.get.call(this)},set:function(e){r=""+e,o.set.call(this,e)}}),mt(e,{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){gt(e),delete t[n]}}))}},updateValueIfChanged:function(e){if(!e)return!1;var t=ht(e);if(!t)return Zd.track(e),!0;var n=t.getValue(),o=yt(Jd.getNodeFromInstance(e));return o!==n&&(t.setValue(o),!0)},stopTracking:function(e){var t=ht(e);t&&t.stopTracking()}},ef=Zd,tf=vt,nf=Al;nf.canUseDOM&&(Kd=document.implementation&&document.implementation.hasFeature&&
// always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
!0!==document.implementation.hasFeature("",""));var of=bt,rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},af=_t,sf=dl,uf=_l,cf=Al,lf=Pc,pf=Qd,df=Jl,ff=ef,hf=tf,mf=of,gf=af,yf={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:["topBlur","topChange","topClick","topFocus","topInput","topKeyDown","topKeyUp","topSelectionChange"]}},vf=null,bf=null,_f=!1;cf.canUseDOM&&(
// See `handleChange` comment below
_f=mf("change")&&(!document.documentMode||document.documentMode>8));/**
	 * SECTION: handle `input` event
	 */
var Cf=!1;cf.canUseDOM&&(
// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
Cf=mf("input")&&(!document.documentMode||document.documentMode>9));/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
var Ef={eventTypes:yf,_allowSimulatedPassThrough:!0,_isInputEventSupported:Cf,extractEvents:function(e,t,n,o){var r,a,i=t?lf.getNodeFromInstance(t):window;if(Et(i)?_f?r=Ot:a=Pt:gf(i)?Cf?r=Ut:(r=Dt,a=Rt):At(i)&&(r=jt),r){var s=r(e,t,n);if(s){return Ct(s,n,o)}}a&&a(e,i,t),
// When blurring, set the value attribute for number inputs
"topBlur"===e&&Lt(t,i)}},wf=Ef,Tf=["ResponderEventPlugin","SimpleEventPlugin","TapEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin"],kf=Tf,If=Jl,Sf=tf,Of={view:function(e){if(e.view)return e.view;var t=Sf(e);if(t.window===t)
// target is a window object
return t;var n=t.ownerDocument;
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};If.augmentClass(Ft,Of);var Pf=Ft,xf=/*#__PURE__*/Object.freeze({default:Pf,__moduleExports:Pf}),Nf={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){Nf.currentScrollLeft=e.x,Nf.currentScrollTop=e.y}},Mf=Nf,Rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Df=Ht,Af=xf&&Pf||xf,jf=Af,Uf=Mf,Lf=Df,Ff={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Lf,button:function(e){
// Webkit, Firefox, IE9+
// which:  1 2 3
// button: 0 1 2 (standard)
var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},
// "Proprietary" Interface.
pageX:function(e){return"pageX"in e?e.pageX:e.clientX+Uf.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+Uf.currentScrollTop}};jf.augmentClass(Wt,Ff);var Bf,Hf=Wt,Wf=_l,Vf=Pc,qf=Hf,Yf={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},zf={eventTypes:Yf,/**
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
var a=o.ownerDocument;r=a?a.defaultView||a.parentWindow:window}var i,s;if("topMouseOut"===e){i=t;var u=n.relatedTarget||n.toElement;s=u?Vf.getClosestInstanceFromNode(u):null}else
// Moving to a node from outside the window.
i=null,s=t;if(i===s)
// Nothing pertains to our managed components.
return null;var c=null==i?r:Vf.getNodeFromInstance(i),l=null==s?r:Vf.getNodeFromInstance(s),p=qf.getPooled(Yf.mouseLeave,i,n,o);p.type="mouseleave",p.target=c,p.relatedTarget=l;var d=qf.getPooled(Yf.mouseEnter,s,n,o);return d.type="mouseenter",d.target=l,d.relatedTarget=c,Wf.accumulateEnterLeaveDispatches(p,d,i,s),[p,d]}},Kf=zf,Gf=bc,Xf=Gf.injection.MUST_USE_PROPERTY,$f=Gf.injection.HAS_BOOLEAN_VALUE,Qf=Gf.injection.HAS_NUMERIC_VALUE,Jf=Gf.injection.HAS_POSITIVE_NUMERIC_VALUE,Zf=Gf.injection.HAS_OVERLOADED_BOOLEAN_VALUE,eh={isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Gf.ATTRIBUTE_NAME_CHAR+"]*$")),Properties:{/**
	     * Standard Properties
	     */
accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:$f,allowTransparency:0,alt:0,
// specifies target context for links with `preload` type
as:0,async:$f,autoComplete:0,
// autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:$f,capture:$f,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:Xf|$f,cite:0,classID:0,className:0,cols:Jf,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:$f,controlsList:0,coords:0,crossOrigin:0,data:0,// For `<object />` acts as `src`.
dateTime:0,default:$f,defer:$f,dir:0,disabled:$f,download:Zf,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:$f,formTarget:0,frameBorder:0,headers:0,height:0,hidden:$f,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:$f,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,
// Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
multiple:Xf|$f,muted:Xf|$f,name:0,nonce:0,noValidate:$f,open:$f,optimum:0,pattern:0,placeholder:0,playsInline:$f,poster:0,preload:0,profile:0,radioGroup:0,readOnly:$f,referrerPolicy:0,rel:0,required:$f,reversed:$f,role:0,rows:Jf,rowSpan:Qf,sandbox:0,scope:0,scoped:$f,scrolling:0,seamless:$f,selected:Xf|$f,shape:0,size:Jf,sizes:0,span:Jf,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:Qf,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,
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
itemProp:0,itemScope:$f,itemType:0,
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
e.setAttribute("value",""+t)}}},th=eh,nh=/*#__PURE__*/Object.freeze({default:th,__moduleExports:th}),oh={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},rh=oh,ah=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e},ih=ah,sh=Al,uh=rh,ch=/^[ \r\n\t\f]/,lh=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,ph=ih,dh=ph(function(e,t){
// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
if(e.namespaceURI!==uh.svg||"innerHTML"in e)e.innerHTML=t;else{Bf=Bf||document.createElement("div"),Bf.innerHTML="<svg>"+t+"</svg>";for(var n=Bf.firstChild;n.firstChild;)e.appendChild(n.firstChild)}});if(sh.canUseDOM){
// IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
// Feature detection; only IE8 is known to behave improperly like this.
var fh=document.createElement("div");fh.innerHTML=" ",""===fh.innerHTML&&(dh=function(e,t){
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
e.parentNode&&e.parentNode.replaceChild(e,e),ch.test(t)||"<"===t[0]&&lh.test(t)){
// Recover leading whitespace by temporarily prepending any character.
// \uFEFF has the potential advantage of being zero-width/invisible.
// UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
// in hopes that this is preserved even if "\uFEFF" is transformed to
// the actual Unicode character (by Babel, for example).
// https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
e.innerHTML=String.fromCharCode(65279)+t;
// deleteData leaves an empty `TextNode` which offsets the index of all
// children. Definitely want to avoid this.
var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t}),fh=null}var hh=dh,mh=/["'&<>]/,gh=qt,yh=Al,vh=gh,bh=hh,_h=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t};yh.canUseDOM&&("textContent"in document.documentElement||(_h=function(e,t){if(3===e.nodeType)return void(e.nodeValue=t);bh(e,vh(t))}));var Ch=_h,Eh=rh,wh=hh,Th=ih,kh=Ch,Ih="undefined"!=typeof document&&"number"==typeof document.documentMode||"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent&&/\bEdge\/\d/.test(navigator.userAgent),Sh=Th(function(e,t,n){
// DocumentFragments aren't actually part of the DOM after insertion so
// appending children won't update the DOM. We need to ensure the fragment
// is properly populated first, breaking out of our lazy approach for just
// this level. Also, some <object> plugins (like Flash Player) will read
// <param> nodes immediately upon insertion into the DOM, so <object>
// must also be populated prior to insertion into the DOM.
11===t.node.nodeType||1===t.node.nodeType&&"object"===t.node.nodeName.toLowerCase()&&(null==t.node.namespaceURI||t.node.namespaceURI===Eh.html)?(Yt(t),e.insertBefore(t.node,n)):(e.insertBefore(t.node,n),Yt(t))});Qt.insertTreeBefore=Sh,Qt.replaceChildWithTree=zt,Qt.queueChild=Kt,Qt.queueHTML=Gt,Qt.queueText=Xt;var Oh=Qt,Ph=ni,xh=en,Nh=Al,Mh=ni,Rh=Nh.canUseDOM?document.createElement("div"):null,Dh={},Ah=[1,'<select multiple="true">',"</select>"],jh=[1,"<table>","</table>"],Uh=[3,"<table><tbody><tr>","</tr></tbody></table>"],Lh=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],Fh={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:Ah,option:Ah,caption:jh,colgroup:jh,tbody:jh,tfoot:jh,thead:jh,td:Uh,th:Uh};["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"].forEach(function(e){Fh[e]=Lh,Dh[e]=!0});var Bh=tn,Hh=Al,Wh=xh,Vh=Bh,qh=ni,Yh=Hh.canUseDOM?document.createElement("div"):null,zh=/^\s*<(\w+)/,Kh=on,Gh=Oh,Xh=Al,$h=Kh,Qh=Va,Jh=ni,Zh={/**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
dangerouslyReplaceNodeWithMarkup:function(e,t){if(Xh.canUseDOM||Jh(!1,"dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering."),t||Jh(!1,"dangerouslyReplaceNodeWithMarkup(...): Missing markup."),"HTML"===e.nodeName&&Jh(!1,"dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString()."),"string"==typeof t){var n=$h(t,Qh)[0];e.parentNode.replaceChild(n,e)}else Gh.replaceChildWithTree(e,t)}},em=Zh,tm=Oh,nm=em,om=Pc,rm=Cd,am=ih,im=hh,sm=Ch,um=am(function(e,t,n){
// We rely exclusively on `insertBefore(node, null)` instead of also using
// `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
// we are careful to use `null`.)
e.insertBefore(t,n)}),cm=nm.dangerouslyReplaceNodeWithMarkup;cm=function(e,t,n){if(nm.dangerouslyReplaceNodeWithMarkup(e,t),0!==n._debugID)rm.debugTool.onHostOperation({instanceID:n._debugID,type:"replace with",payload:t.toString()});else{var o=om.getInstanceFromNode(t.node);0!==o._debugID&&rm.debugTool.onHostOperation({instanceID:o._debugID,type:"mount",payload:t.toString()})}};/**
	 * Operations for updating with DOM children.
	 */
var lm={dangerouslyReplaceNodeWithMarkup:cm,replaceDelimitedText:pn,/**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @internal
	   */
processUpdates:function(e,t){for(var n=om.getInstanceFromNode(e)._debugID,o=0;o<t.length;o++){var r=t[o];switch(r.type){case"INSERT_MARKUP":an(e,r.content,rn(e,r.afterNode)),rm.debugTool.onHostOperation({instanceID:n,type:"insert child",payload:{toIndex:r.toIndex,content:r.content.toString()}});break;case"MOVE_EXISTING":sn(e,r.fromNode,rn(e,r.afterNode)),rm.debugTool.onHostOperation({instanceID:n,type:"move child",payload:{fromIndex:r.fromIndex,toIndex:r.toIndex}});break;case"SET_MARKUP":im(e,r.content),rm.debugTool.onHostOperation({instanceID:n,type:"replace children",payload:r.content.toString()});break;case"TEXT_CONTENT":sm(e,r.content),rm.debugTool.onHostOperation({instanceID:n,type:"replace text",payload:r.content.toString()});break;case"REMOVE_NODE":un(e,r.fromNode),rm.debugTool.onHostOperation({instanceID:n,type:"remove child",payload:{fromIndex:r.fromIndex}})}}}},pm=lm,dm=pm,fm=Pc,hm={/**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @internal
	   */
dangerouslyProcessChildrenUpdates:function(e,t){var n=fm.getNodeFromInstance(e);dm.processUpdates(n,t)}},mm=hm,gm=/*#__PURE__*/Object.freeze({default:mm,__moduleExports:mm}),ym=gm&&mm||gm,vm=pm,bm=ym,_m={processChildrenUpdates:bm.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkup:vm.dangerouslyReplaceNodeWithMarkup},Cm=_m,Em=dn,wm=Pc,Tm=Em,km={focusDOMComponent:function(){Tm(wm.getNodeFromInstance(this))}},Im=km,Sm={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Om=["Webkit","ms","Moz","O"];
// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(Sm).forEach(function(e){Om.forEach(function(t){Sm[fn(t,e)]=Sm[e]})});/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
var Pm={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},xm={isUnitlessNumber:Sm,shorthandPropertyExpansions:Pm},Nm=xm,Mm=/-(.)/g,Rm=hn,Dm=/*#__PURE__*/Object.freeze({default:Rm,__moduleExports:Rm}),Am=Dm&&Rm||Dm,jm=Am,Um=/^-ms-/,Lm=mn,Fm=Nm,Bm=Ka,Hm=Fm.isUnitlessNumber,Wm={},Vm=gn,qm=/([A-Z])/g,Ym=yn,zm=Ym,Km=/^ms-/,Gm=vn,Xm=bn,$m=Nm,Qm=Al,Jm=Cd,Zm=Lm,eg=Vm,tg=Gm,ng=Xm,og=Ka,rg=ng(function(e){return tg(e)}),ag=!1,ig="cssFloat";if(Qm.canUseDOM){var sg=document.createElement("div").style;try{
// IE8 throws "Invalid argument." if resetting shorthand style properties.
sg.font=""}catch(e){ag=!0}
// IE8 only supports accessing cssFloat (standard) as styleFloat
document.documentElement.style.cssFloat===undefined&&(ig="styleFloat")}
// 'msTransform' is correct, but the other prefixes should be capitalized
var ug=/^(?:webkit|moz|o)[A-Z]/,cg=/;\s*$/,lg={},pg={},dg=!1,fg=function(e,t){lg.hasOwnProperty(e)&&lg[e]||(lg[e]=!0,og(!1,"Unsupported style property %s. Did you mean %s?%s",e,Zm(e),yg(t)))},hg=function(e,t){lg.hasOwnProperty(e)&&lg[e]||(lg[e]=!0,og(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?%s",e,e.charAt(0).toUpperCase()+e.slice(1),yg(t)))},mg=function(e,t,n){pg.hasOwnProperty(t)&&pg[t]||(pg[t]=!0,og(!1,'Style property values shouldn\'t contain a semicolon.%s Try "%s: %s" instead.',yg(n),e,t.replace(cg,"")))},gg=function(e,t,n){dg||(dg=!0,og(!1,"`NaN` is an invalid value for the `%s` css style property.%s",e,yg(n)))},yg=function(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""},vg=function(e,t,n){var o;n&&(o=n._currentElement._owner),e.indexOf("-")>-1?fg(e,o):ug.test(e)?hg(e,o):cg.test(t)&&mg(e,t,o),"number"==typeof t&&isNaN(t)&&gg(e,0,o)},bg={/**
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
createMarkupForStyles:function(e,t){var n="";for(var o in e)if(e.hasOwnProperty(o)){var r=0===o.indexOf("--"),a=e[o];r||vg(o,a,t),null!=a&&(n+=rg(o)+":",n+=eg(o,a,t,r)+";")}return n||null},/**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */
setValueForStyles:function(e,t,n){Jm.debugTool.onHostOperation({instanceID:n._debugID,type:"update styles",payload:t});var o=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=0===r.indexOf("--");a||vg(r,t[r],n);var i=eg(r,t[r],n,a);if("float"!==r&&"cssFloat"!==r||(r=ig),a)o.setProperty(r,i);else if(i)o[r]=i;else{var s=ag&&$m.shorthandPropertyExpansions[r];if(s)
// Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var u in s)o[u]="";else o[r]=""}}}},_g=bg,Cg=gh,Eg=_n,wg=/*#__PURE__*/Object.freeze({default:Eg,__moduleExports:Eg}),Tg=wg&&Eg||wg,kg=bc,Ig=Pc,Sg=Cd,Og=Tg,Pg=Ka,xg=new RegExp("^["+kg.ATTRIBUTE_NAME_START_CHAR+"]["+kg.ATTRIBUTE_NAME_CHAR+"]*$"),Ng={},Mg={},Rg={/**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
createMarkupForID:function(e){return kg.ID_ATTRIBUTE_NAME+"="+Og(e)},setAttributeForID:function(e,t){e.setAttribute(kg.ID_ATTRIBUTE_NAME,t)},createMarkupForRoot:function(){return kg.ROOT_ATTRIBUTE_NAME+'=""'},setAttributeForRoot:function(e){e.setAttribute(kg.ROOT_ATTRIBUTE_NAME,"")},/**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
createMarkupForProperty:function(e,t){var n=kg.properties.hasOwnProperty(e)?kg.properties[e]:null;if(n){if(En(n,t))return"";var o=n.attributeName;return n.hasBooleanValue||n.hasOverloadedBooleanValue&&!0===t?o+'=""':o+"="+Og(t)}return kg.isCustomAttribute(e)?null==t?"":e+"="+Og(t):null},/**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */
createMarkupForCustomAttribute:function(e,t){return Cn(e)&&null!=t?e+"="+Og(t):""},/**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
setValueForProperty:function(e,t,n){var o=kg.properties.hasOwnProperty(t)?kg.properties[t]:null;if(o){var r=o.mutationMethod;if(r)r(e,n);else{if(En(o,n))return void this.deleteValueForProperty(e,t);if(o.mustUseProperty)
// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
e[o.propertyName]=n;else{var a=o.attributeName,i=o.attributeNamespace;
// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
i?e.setAttributeNS(i,a,""+n):o.hasBooleanValue||o.hasOverloadedBooleanValue&&!0===n?e.setAttribute(a,""):e.setAttribute(a,""+n)}}}else if(kg.isCustomAttribute(t))return void Rg.setValueForAttribute(e,t,n);var s={};s[t]=n,Sg.debugTool.onHostOperation({instanceID:Ig.getInstanceFromNode(e)._debugID,type:"update attribute",payload:s})},setValueForAttribute:function(e,t,n){if(Cn(t)){null==n?e.removeAttribute(t):e.setAttribute(t,""+n);var o={};o[t]=n,Sg.debugTool.onHostOperation({instanceID:Ig.getInstanceFromNode(e)._debugID,type:"update attribute",payload:o})}},/**
	   * Deletes an attributes from a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
deleteValueForAttribute:function(e,t){e.removeAttribute(t),Sg.debugTool.onHostOperation({instanceID:Ig.getInstanceFromNode(e)._debugID,type:"remove attribute",payload:t})},/**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
deleteValueForProperty:function(e,t){var n=kg.properties.hasOwnProperty(t)?kg.properties[t]:null;if(n){var o=n.mutationMethod;if(o)o(e,undefined);else if(n.mustUseProperty){var r=n.propertyName;n.hasBooleanValue?e[r]=!1:e[r]=""}else e.removeAttribute(n.attributeName)}else kg.isCustomAttribute(t)&&e.removeAttribute(t);Sg.debugTool.onHostOperation({instanceID:Ig.getInstanceFromNode(e)._debugID,type:"remove attribute",payload:t})}},Dg=Rg,Ag=dl,jg={/**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   */
handleTopLevel:function(e,t,n,o){wn(Ag.extractEvents(e,t,n,o))}},Ug=jg,Lg=Al,Fg={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Bg={},Hg={};/**
	 * Bootstrap if a DOM exists.
	 */
Lg.canUseDOM&&(Hg=document.createElement("div").style,
// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
"AnimationEvent"in window||(delete Fg.animationend.animation,delete Fg.animationiteration.animation,delete Fg.animationstart.animation),
// Same as above
"TransitionEvent"in window||delete Fg.transitionend.transition);var Wg,Vg=kn,qg=Ha,Yg=jc,zg=Ug,Kg=Mf,Gg=Vg,Xg=of,$g={},Qg=!1,Jg=0,Zg={topAbort:"abort",topAnimationEnd:Gg("animationend")||"animationend",topAnimationIteration:Gg("animationiteration")||"animationiteration",topAnimationStart:Gg("animationstart")||"animationstart",topBlur:"blur",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:Gg("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},ey="_reactListenersID"+String(Math.random()).slice(2),ty=qg({},zg,{/**
	   * Injectable event backend
	   */
ReactEventListener:null,injection:{/**
	     * @param {object} ReactEventListener
	     */
injectReactEventListener:function(e){e.setHandleTopLevel(ty.handleTopLevel),ty.ReactEventListener=e}},/**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
setEnabled:function(e){ty.ReactEventListener&&ty.ReactEventListener.setEnabled(e)},/**
	   * @return {boolean} True if callbacks are enabled.
	   */
isEnabled:function(){return!(!ty.ReactEventListener||!ty.ReactEventListener.isEnabled())},/**
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
listenTo:function(e,t){for(var n=t,o=In(n),r=Yg.registrationNameDependencies[e],a=0;a<r.length;a++){var i=r[a];o.hasOwnProperty(i)&&o[i]||("topWheel"===i?Xg("wheel")?ty.ReactEventListener.trapBubbledEvent("topWheel","wheel",n):Xg("mousewheel")?ty.ReactEventListener.trapBubbledEvent("topWheel","mousewheel",n):
// Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ty.ReactEventListener.trapBubbledEvent("topWheel","DOMMouseScroll",n):"topScroll"===i?Xg("scroll",!0)?ty.ReactEventListener.trapCapturedEvent("topScroll","scroll",n):ty.ReactEventListener.trapBubbledEvent("topScroll","scroll",ty.ReactEventListener.WINDOW_HANDLE):"topFocus"===i||"topBlur"===i?(Xg("focus",!0)?(ty.ReactEventListener.trapCapturedEvent("topFocus","focus",n),ty.ReactEventListener.trapCapturedEvent("topBlur","blur",n)):Xg("focusin")&&(
// IE has `focusin` and `focusout` events which bubble.
// @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
ty.ReactEventListener.trapBubbledEvent("topFocus","focusin",n),ty.ReactEventListener.trapBubbledEvent("topBlur","focusout",n)),
// to make sure blur and focus event listeners are only attached once
o.topBlur=!0,o.topFocus=!0):Zg.hasOwnProperty(i)&&ty.ReactEventListener.trapBubbledEvent(i,Zg[i],n),o[i]=!0)}},trapBubbledEvent:function(e,t,n){return ty.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return ty.ReactEventListener.trapCapturedEvent(e,t,n)},/**
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
ensureScrollValueMonitoring:function(){if(Wg===undefined&&(Wg=ty.supportsEventPageXY()),!Wg&&!Qg){var e=Kg.refreshScrollValues;ty.ReactEventListener.monitorScrollValue(e),Qg=!0}}}),ny=ty,oy=bu,ry=lc,ay=oy(ry.isValidElement),iy=ni,sy=Ka,uy={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},cy={value:function(e,t,n){return!e[t]||uy[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:ay.func},ly={},py={checkPropTypes:function(e,t,n){for(var o in cy){if(cy.hasOwnProperty(o))var r=cy[o](t,o,e,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");if(r instanceof Error&&!(r.message in ly)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
ly[r.message]=!0;var a=xn(n);sy(!1,"Failed form propType: %s%s",r.message,a)}}},/**
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
executeOnChange:function(e,t){return e.valueLink?(On(e),e.valueLink.requestChange(t.target.value)):e.checkedLink?(Pn(e),e.checkedLink.requestChange(t.target.checked)):e.onChange?e.onChange.call(undefined,t):void 0}},dy=py,fy=Ha,hy=Dg,my=dy,gy=Pc,yy=Qd,vy=ni,by=Ka,_y=!1,Cy=!1,Ey=!1,wy=!1,Ty=!1,ky=!1,Iy={getHostProps:function(e,t){var n=my.getValue(t),o=my.getChecked(t);return fy({
// Make sure we set .type before any other properties (setting .value
// before .type means .value is lost in IE11 and below)
type:undefined,
// Make sure we set .step before .value (setting .value before .step
// means .value is rounded on mount, based upon step precision)
step:undefined,
// Make sure we set .min & .max before .value (to ensure proper order
// in corner cases such as min or max deriving from value, e.g. Issue #7170)
min:undefined,max:undefined},t,{defaultChecked:undefined,defaultValue:undefined,value:null!=n?n:e._wrapperState.initialValue,checked:null!=o?o:e._wrapperState.initialChecked,onChange:e._wrapperState.onChange})},mountWrapper:function(e,t){my.checkPropTypes("input",t,e._currentElement._owner);var n=e._currentElement._owner;t.valueLink===undefined||_y||(by(!1,"`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead."),_y=!0),t.checkedLink===undefined||Cy||(by(!1,"`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead."),Cy=!0),t.checked===undefined||t.defaultChecked===undefined||wy||(by(!1,"%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",n&&n.getName()||"A component",t.type),wy=!0),t.value===undefined||t.defaultValue===undefined||Ey||(by(!1,"%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",n&&n.getName()||"A component",t.type),Ey=!0);var o=t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:null!=t.value?t.value:o,listeners:null,onChange:Rn.bind(e),controlled:Mn(t)}},updateWrapper:function(e){var t=e._currentElement.props,n=Mn(t),o=e._currentElement._owner;e._wrapperState.controlled||!n||ky||(by(!1,"%s is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",o&&o.getName()||"A component",t.type),ky=!0),!e._wrapperState.controlled||n||Ty||(by(!1,"%s is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",o&&o.getName()||"A component",t.type),Ty=!0);
// TODO: Shouldn't this be getChecked(props)?
var r=t.checked;null!=r&&hy.setValueForProperty(gy.getNodeFromInstance(e),"checked",r||!1);var a=gy.getNodeFromInstance(e),i=my.getValue(t);if(null!=i)if(0===i&&""===a.value)a.value="0";else if("number"===t.type){
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
a.value=""+i);else null==t.value&&null!=t.defaultValue&&a.defaultValue!==""+t.defaultValue&&(a.defaultValue=""+t.defaultValue),null==t.checked&&null!=t.defaultChecked&&(a.defaultChecked=!!t.defaultChecked)},postMountWrapper:function(e){var t=e._currentElement.props,n=gy.getNodeFromInstance(e);
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
var o=n.name;""!==o&&(n.name=""),n.defaultChecked=!n.defaultChecked,n.defaultChecked=!n.defaultChecked,""!==o&&(n.name=o)}},Sy=Iy,Oy=Ha,Py=dy,xy=Pc,Ny=Qd,My=Ka,Ry=!1,Dy=!1,Ay=["value","defaultValue"],jy={getHostProps:function(e,t){return Oy({},t,{onChange:e._wrapperState.onChange,value:undefined})},mountWrapper:function(e,t){jn(e,t);var n=Py.getValue(t);e._wrapperState={pendingUpdate:!1,initialValue:null!=n?n:t.defaultValue,listeners:null,onChange:Ln.bind(e),wasMultiple:Boolean(t.multiple)},t.value===undefined||t.defaultValue===undefined||Dy||(My(!1,"Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"),Dy=!0)},getSelectValueContext:function(e){
// ReactDOMOption looks at this initial value so the initial generated
// markup has correct `selected` attributes
return e._wrapperState.initialValue},postUpdateWrapper:function(e){var t=e._currentElement.props;
// After the initial mount, we control selected-ness manually so don't pass
// this value down
e._wrapperState.initialValue=undefined;var n=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=Boolean(t.multiple);var o=Py.getValue(t);null!=o?(e._wrapperState.pendingUpdate=!1,Un(e,Boolean(t.multiple),o)):n!==Boolean(t.multiple)&&(
// For simplicity, reapply `defaultValue` if `multiple` is toggled.
null!=t.defaultValue?Un(e,Boolean(t.multiple),t.defaultValue):
// Revert the select back to its default unselected state.
Un(e,Boolean(t.multiple),t.multiple?[]:""))}},Uy=jy,Ly=Ha,Fy=lc,By=Pc,Hy=Uy,Wy=Ka,Vy=!1,qy={mountWrapper:function(e,t,n){Wy(null==t.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
// Look up whether this option is 'selected'
var o=null;if(null!=n){var r=n;"optgroup"===r._tag&&(r=r._hostParent),null!=r&&"select"===r._tag&&(o=Hy.getSelectValueContext(r))}
// If the value is null (e.g., no specified value or after initial mount)
// or missing (e.g., for <datalist>), we don't change props.selected
var a=null;if(null!=o){var i;if(i=null!=t.value?t.value+"":Fn(t.children),a=!1,Array.isArray(o)){
// multiple
for(var s=0;s<o.length;s++)if(""+o[s]===i){a=!0;break}}else a=""+o===i}e._wrapperState={selected:a}},postMountWrapper:function(e){
// value="" should make a value attribute (#6219)
var t=e._currentElement.props;if(null!=t.value){By.getNodeFromInstance(e).setAttribute("value",t.value)}},getHostProps:function(e,t){var n=Ly({selected:undefined,children:undefined},t);
// Read state only from initial mount because <select> updates value
// manually; we need the initial state only for server rendering
null!=e._wrapperState.selected&&(n.selected=e._wrapperState.selected);var o=Fn(t.children);return o&&(n.children=o),n}},Yy=qy,zy=Ha,Ky=dy,Gy=Pc,Xy=Qd,$y=ni,Qy=Ka,Jy=!1,Zy=!1,ev={getHostProps:function(e,t){return null!=t.dangerouslySetInnerHTML&&$y(!1,"`dangerouslySetInnerHTML` does not make sense on <textarea>."),zy({},t,{value:undefined,defaultValue:undefined,children:""+e._wrapperState.initialValue,onChange:e._wrapperState.onChange})},mountWrapper:function(e,t){Ky.checkPropTypes("textarea",t,e._currentElement._owner),t.valueLink===undefined||Jy||(Qy(!1,"`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead."),Jy=!0),t.value===undefined||t.defaultValue===undefined||Zy||(Qy(!1,"Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components"),Zy=!0);var n=Ky.getValue(t),o=n;
// Only bother fetching default value if we're going to use it
if(null==n){var r=t.defaultValue,a=t.children;null!=a&&(Qy(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=r&&$y(!1,"If you supply `defaultValue` on a <textarea>, do not pass children."),Array.isArray(a)&&(a.length<=1||$y(!1,"<textarea> can only have at most one child."),a=a[0]),r=""+a),null==r&&(r=""),o=r}e._wrapperState={initialValue:""+o,listeners:null,onChange:Hn.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=Gy.getNodeFromInstance(e),o=Ky.getValue(t);if(null!=o){
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var r=""+o;
// To avoid side effects (such as losing text selection), only set value if changed
r!==n.value&&(n.value=r),null==t.defaultValue&&(n.defaultValue=r)}null!=t.defaultValue&&(n.defaultValue=t.defaultValue)},postMountWrapper:function(e){
// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var t=Gy.getNodeFromInstance(e),n=t.textContent;
// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
n===e._wrapperState.initialValue&&(t.value=n)}},tv=ev,nv=ni,ov=!1,rv={/**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
replaceNodeWithMarkup:null,/**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
processChildrenUpdates:null,injection:{injectEnvironment:function(e){ov&&nv(!1,"ReactCompositeComponent: injectEnvironment() can only be called once."),rv.replaceNodeWithMarkup=e.replaceNodeWithMarkup,rv.processChildrenUpdates=e.processChildrenUpdates,ov=!0}}},av=rv,iv={/**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
remove:function(e){e._reactInternalInstance=undefined},get:function(e){return e._reactInternalInstance},has:function(e){return e._reactInternalInstance!==undefined},set:function(e,t){e._reactInternalInstance=t}},sv=iv,uv=lc,cv=ni,lv={HOST:0,COMPOSITE:1,EMPTY:2,getType:function(e){return null===e||!1===e?lv.EMPTY:uv.isValidElement(e)?"function"==typeof e.type?lv.COMPOSITE:lv.HOST:void cv(!1,"Unexpected node: %s",e)}},pv=lv,dv=/*#__PURE__*/Object.freeze({default:pv,__moduleExports:pv}),fv={};fv={prop:"prop",context:"context",childContext:"child context"};var hv,mv=fv,gv=mv,yv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vv=ni,bv=Ka;"undefined"!=typeof process&&process.env;var _v={},Cv=Wn,Ev=Object.prototype.hasOwnProperty,wv=qn,Tv=Yn,kv=/*#__PURE__*/Object.freeze({default:Tv,__moduleExports:Tv}),Iv=dv&&pv||dv,Sv=kv&&Tv||kv,Ov=Ha,Pv=lc,xv=av,Nv=Pi,Mv=Vc,Rv=sv,Dv=Cd,Av=Iv,jv=Sd,Uv=Cv,Lv=ei,Fv=ni,Bv=wv,Hv=Sv,Wv=Ka,Vv={ImpureClass:0,PureClass:1,StatelessFunctional:2};zn.prototype.render=function(){var e=Rv.get(this)._currentElement.type,t=e(this.props,this.context,this.updater);return Kn(e,t),t};/**
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
var qv,Yv=1,zv={/**
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
mountComponent:function(e,t,n,o){var r=this;this._context=o,this._mountOrder=Yv++,this._hostParent=t,this._hostContainerInfo=n;var a,i=this._currentElement.props,s=this._processContext(o),u=this._currentElement.type,c=e.getUpdateQueue(),l=Gn(u),p=this._constructComponent(l,i,s,c);
// Support functional components
l||null!=p&&null!=p.render?Xn(u)?this._compositeType=Vv.PureClass:this._compositeType=Vv.ImpureClass:(a=p,Kn(u,a),null===p||!1===p||Pv.isValidElement(p)||Fv(!1,"%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",u.displayName||u.name||"Component"),p=new zn(u),this._compositeType=Vv.StatelessFunctional),
// This will throw later in _renderValidatedComponent, but add an early
// warning now to help debugging
null==p.render&&Wv(!1,"%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",u.displayName||u.name||"Component");var d=p.props!==i,f=u.displayName||u.name||"Component";Wv(p.props===undefined||!d,"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",f,f),
// These should be set up in the constructor, but as a convenience for
// simpler class abstractions, we set them up after the fact.
p.props=i,p.context=s,p.refs=Lv,p.updater=c,this._instance=p,
// Store a reference from the instance back to the internal representation
Rv.set(p,this),
// Since plain JS classes are defined without any special initialization
// logic, we can not catch common errors early. Therefore, we have to
// catch them here, at initialization time, instead.
Wv(!p.getInitialState||p.getInitialState.isReactClassApproved||p.state,"getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",this.getName()||"a component"),Wv(!p.getDefaultProps||p.getDefaultProps.isReactClassApproved,"getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",this.getName()||"a component"),Wv(!p.propTypes,"propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",this.getName()||"a component"),Wv(!p.contextTypes,"contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",this.getName()||"a component"),Wv("function"!=typeof p.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",this.getName()||"A component"),Wv("function"!=typeof p.componentDidUnmount,"%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",this.getName()||"A component"),Wv("function"!=typeof p.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",this.getName()||"A component");var h=p.state;h===undefined&&(p.state=h=null),("object"!=typeof h||Array.isArray(h))&&Fv(!1,"%s.state: must be set to an object or null",this.getName()||"ReactCompositeComponent"),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var m;return m=p.unstable_handleError?this.performInitialMountWithErrorHandling(a,t,n,e,o):this.performInitialMount(a,t,n,e,o),p.componentDidMount&&e.getReactMountReady().enqueue(function(){$n(function(){return p.componentDidMount()},r._debugID,"componentDidMount")}),m},_constructComponent:function(e,t,n,o){if(e)return this._constructComponentWithoutOwner(e,t,n,o);Nv.current=this;try{return this._constructComponentWithoutOwner(e,t,n,o)}finally{Nv.current=null}},_constructComponentWithoutOwner:function(e,t,n,o){var r=this._currentElement.type;return e?$n(function(){return new r(t,n,o)},this._debugID,"ctor"):$n(function(){return r(t,n,o)},this._debugID,"render")},performInitialMountWithErrorHandling:function(e,t,n,o,r){var a,i=o.checkpoint();try{a=this.performInitialMount(e,t,n,o,r)}catch(s){
// Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
o.rollback(i),this._instance.unstable_handleError(s),this._pendingStateQueue&&(this._instance.state=this._processPendingState(this._instance.props,this._instance.context)),i=o.checkpoint(),this._renderedComponent.unmountComponent(!0),o.rollback(i),
// Try again - we've informed the component about the error, so they can render an error message this time.
// If this throws again, the error will bubble up (and can be caught by a higher error boundary).
a=this.performInitialMount(e,t,n,o,r)}return a},performInitialMount:function(e,t,n,o,r){var a=this._instance,i=0;i=this._debugID,a.componentWillMount&&($n(function(){return a.componentWillMount()},i,"componentWillMount"),
// When mounting, calls to `setState` by `componentWillMount` will set
// `this._pendingStateQueue` without triggering a re-render.
this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),
// If not a stateless component, we now render
e===undefined&&(e=this._renderValidatedComponent());var s=Av.getType(e);this._renderedNodeType=s;var u=this._instantiateReactComponent(e,s!==Av.EMPTY);this._renderedComponent=u;var c=jv.mountComponent(u,o,t,n,this._processChildContext(r),i);if(0!==i){var l=0!==u._debugID?[u._debugID]:[];Dv.debugTool.onSetChildren(i,l)}return c},getHostNode:function(){return jv.getHostNode(this._renderedComponent)},/**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
unmountComponent:function(e){if(this._renderedComponent){var t=this._instance;if(t.componentWillUnmount&&!t._calledComponentWillUnmount)if(t._calledComponentWillUnmount=!0,e){var n=this.getName()+".componentWillUnmount()";Mv.invokeGuardedCallback(n,t.componentWillUnmount.bind(t))}else $n(function(){return t.componentWillUnmount()},this._debugID,"componentWillUnmount");this._renderedComponent&&(jv.unmountComponent(this._renderedComponent,e),this._renderedNodeType=null,this._renderedComponent=null,this._instance=null),
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
Rv.remove(t)}},/**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
_maskContext:function(e){var t=this._currentElement.type,n=t.contextTypes;if(!n)return Lv;var o={};for(var r in n)o[r]=e[r];return o},/**
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
_processChildContext:function(e){var t,n=this._currentElement.type,o=this._instance;if(o.getChildContext){Dv.debugTool.onBeginProcessingChildContext();try{t=o.getChildContext()}finally{Dv.debugTool.onEndProcessingChildContext()}}if(t){"object"!=typeof n.childContextTypes&&Fv(!1,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",this.getName()||"ReactCompositeComponent"),this._checkContextTypes(n.childContextTypes,t,"child context");for(var r in t)r in n.childContextTypes||Fv(!1,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||"ReactCompositeComponent",r);return Ov({},e,t)}return e},/**
	   * Assert that the context types are valid
	   *
	   * @param {object} typeSpecs Map of context field to a ReactPropType
	   * @param {object} values Runtime values that need to be type-checked
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
_checkContextTypes:function(e,t,n){Uv(e,t,n,this.getName(),null,this._debugID)},receiveComponent:function(e,t,n){var o=this._currentElement,r=this._context;this._pendingElement=null,this.updateComponent(t,o,e,r,n)},/**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
performUpdateIfNecessary:function(e){null!=this._pendingElement?jv.receiveComponent(this,this._pendingElement,e,this._context):null!==this._pendingStateQueue||this._pendingForceUpdate?this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context):this._updateBatchNumber=null},/**
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
updateComponent:function(e,t,n,o,r){var a=this._instance;null==a&&Fv(!1,"Attempted to update component `%s` that has already been unmounted (or failed to mount).",this.getName()||"ReactCompositeComponent");var i,s=!1;
// Determine if the context has changed or not
this._context===r?i=a.context:(i=this._processContext(r),s=!0);var u=t.props,c=n.props;
// Not a simple state update but a props update
t!==n&&(s=!0),
// An update here will schedule an update but immediately set
// _pendingStateQueue which will ensure that any state updates gets
// immediately reconciled instead of waiting for the next batch.
s&&a.componentWillReceiveProps&&$n(function(){return a.componentWillReceiveProps(c,i)},this._debugID,"componentWillReceiveProps");var l=this._processPendingState(c,i),p=!0;this._pendingForceUpdate||(a.shouldComponentUpdate?p=$n(function(){return a.shouldComponentUpdate(c,l,i)},this._debugID,"shouldComponentUpdate"):this._compositeType===Vv.PureClass&&(p=!Bv(u,c)||!Bv(a.state,l))),Wv(p!==undefined,"%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",this.getName()||"ReactCompositeComponent"),this._updateBatchNumber=null,p?(this._pendingForceUpdate=!1,
// Will set `this.props`, `this.state` and `this.context`.
this._performComponentUpdate(n,c,l,i,e,r)):(
// If it's determined that a component should not update, we still want
// to set props and state but we shortcut the rest of the update.
this._currentElement=n,this._context=r,a.props=c,a.state=l,a.context=i)},_processPendingState:function(e,t){var n=this._instance,o=this._pendingStateQueue,r=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!o)return n.state;if(r&&1===o.length)return o[0];for(var a=Ov({},r?o[0]:n.state),i=r?1:0;i<o.length;i++){var s=o[i];Ov(a,"function"==typeof s?s.call(n,a,e,t):s)}return a},/**
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
_performComponentUpdate:function(e,t,n,o,r,a){var i,s,u,c=this,l=this._instance,p=Boolean(l.componentDidUpdate);p&&(i=l.props,s=l.state,u=l.context),l.componentWillUpdate&&$n(function(){return l.componentWillUpdate(t,n,o)},this._debugID,"componentWillUpdate"),this._currentElement=e,this._context=a,l.props=t,l.state=n,l.context=o,this._updateRenderedComponent(r,a),p&&r.getReactMountReady().enqueue(function(){$n(l.componentDidUpdate.bind(l,i,s,u),c._debugID,"componentDidUpdate")})},/**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
_updateRenderedComponent:function(e,t){var n=this._renderedComponent,o=n._currentElement,r=this._renderValidatedComponent(),a=0;if(a=this._debugID,Hv(o,r))jv.receiveComponent(n,r,e,this._processChildContext(t));else{var i=jv.getHostNode(n);jv.unmountComponent(n,!1);var s=Av.getType(r);this._renderedNodeType=s;var u=this._instantiateReactComponent(r,s!==Av.EMPTY);this._renderedComponent=u;var c=jv.mountComponent(u,e,this._hostParent,this._hostContainerInfo,this._processChildContext(t),a);if(0!==a){var l=0!==u._debugID?[u._debugID]:[];Dv.debugTool.onSetChildren(a,l)}this._replaceNodeWithMarkup(i,c,n)}},/**
	   * Overridden in shallow rendering.
	   *
	   * @protected
	   */
_replaceNodeWithMarkup:function(e,t,n){xv.replaceNodeWithMarkup(e,t,n)},/**
	   * @protected
	   */
_renderValidatedComponentWithoutOwnerOrContext:function(){var e,t=this._instance;
// We allow auto-mocks to proceed as if they're returning null.
// This is probably bad practice. Consider warning here and
// deprecating this convenience.
return e=$n(function(){return t.render()},this._debugID,"render"),e===undefined&&t.render._isMockFunction&&(e=null),e},/**
	   * @private
	   */
_renderValidatedComponent:function(){var e;Nv.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{Nv.current=null}
// TODO: An `isValidNode` function would probably be more appropriate
return null===e||!1===e||Pv.isValidElement(e)||Fv(!1,"%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.",this.getName()||"ReactCompositeComponent"),e},/**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
attachRef:function(e,t){var n=this.getPublicInstance();null==n&&Fv(!1,"Stateless function components cannot have refs.");var o=t.getPublicInstance(),r=t&&t.getName?t.getName():"a component";Wv(null!=o||t._compositeType!==Vv.StatelessFunctional,'Stateless function components cannot be given refs (See ref "%s" in %s created by %s). Attempts to access this ref will fail.',e,r,this.getName()),(n.refs===Lv?n.refs={}:n.refs)[e]=o},/**
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
getPublicInstance:function(){var e=this._instance;return this._compositeType===Vv.StatelessFunctional?null:e},
// Stub
_instantiateReactComponent:null},Kv=zv,Gv={injectEmptyComponentFactory:function(e){qv=e}},Xv={create:function(e){return qv(e)}};Xv.injection=Gv;var $v=Xv,Qv=ni,Jv=null,Zv=null,eb={
// This accepts a class that receives the tag string. This is a catch all
// that can render any kind of tag.
injectGenericComponentClass:function(e){Jv=e},
// This accepts a text component class that takes the text string to be
// rendered as props.
injectTextComponentClass:function(e){Zv=e}},tb={createInternalComponent:Qn,createInstanceForText:Jn,isTextComponent:Zn,injection:eb},nb=tb,ob=/*#__PURE__*/Object.freeze({default:nb,__moduleExports:nb}),rb=1,ab=eo,ib=ob&&nb||ob,sb=Ha,ub=Kv,cb=$v,lb=ib,pb=ab,db=ni,fb=Ka,hb=function(e){this.construct(e)};sb(hb.prototype,ub,{_instantiateReactComponent:oo});var mb,gb=oo,yb={escape:ro,unescape:ao},vb=yb,bb="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,_b=bb,Cb="function"==typeof Symbol&&Symbol.iterator,Eb="@@iterator",wb=io,Tb=Pi,kb=_b,Ib=wb,Sb=ni,Ob=vb,Pb=Ka,xb=".",Nb=":",Mb=!1,Rb=co,Db=Sd,Ab=gb,jb=vb,Ub=Sv,Lb=Rb,Fb=Ka;"undefined"!=typeof process&&process.env;/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
var Bb,Hb={/**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
instantiateChildren:function(e,t,n,o){if(null==e)return null;var r={};return Lb(e,function(e,t,n){return lo(e,t,n,o)},r),r},/**
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
if(t||e){var c,l;for(c in t)if(t.hasOwnProperty(c)){l=e&&e[c];var p=l&&l._currentElement,d=t[c];if(null!=l&&Ub(p,d))Db.receiveComponent(l,d,r,s),t[c]=l;else{l&&(o[c]=Db.getHostNode(l),Db.unmountComponent(l,!1));
// The child must be instantiated before it's mounted.
var f=Ab(d,!0);t[c]=f;
// Creating mount image now ensures refs are resolved in right order
// (see https://github.com/facebook/react/pull/7101 for explanation).
var h=Db.mountComponent(f,r,a,i,s,u);n.push(h)}}
// Unmount children that are no longer present.
for(c in e)!e.hasOwnProperty(c)||t&&t.hasOwnProperty(c)||(l=e[c],o[c]=Db.getHostNode(l),Db.unmountComponent(l,!1))}},/**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
unmountChildren:function(e,t){for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];Db.unmountComponent(o,t)}}},Wb=Hb,Vb=vb,qb=Rb,Yb=Ka;"undefined"!=typeof process&&process.env;var zb=fo,Kb=av,Gb=sv,Xb=Cd,$b=Pi,Qb=Sd,Jb=Wb,Zb=Va,e_=zb,t_=ni,n_=Zb,o_=function(e){if(!e._debugID){
// Check for ART-like instances. TODO: This is silly/gross.
var t;(t=Gb.get(e))&&(e=t)}return e._debugID};n_=function(e){var t=o_(this);
// TODO: React Native empty components are also multichild.
// This means they still get into this method but don't have _debugID.
0!==t&&Xb.debugTool.onSetChildren(t,e?Object.keys(e).map(function(t){return e[t]._debugID}):[])};/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
var r_={/**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
Mixin:{_reconcilerInstantiateChildren:function(e,t,n){var o=o_(this);if(this._currentElement)try{return $b.current=this._currentElement._owner,Jb.instantiateChildren(e,t,n,o)}finally{$b.current=null}return Jb.instantiateChildren(e,t,n)},_reconcilerUpdateChildren:function(e,t,n,o,r,a){var i,s=0;if(s=o_(this),this._currentElement){try{$b.current=this._currentElement._owner,i=e_(t,s)}finally{$b.current=null}return Jb.updateChildren(e,i,n,o,r,this,this._hostContainerInfo,a,s),i}return i=e_(t,s),Jb.updateChildren(e,i,n,o,r,this,this._hostContainerInfo,a,s),i},/**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
mountChildren:function(e,t,n){var o=this._reconcilerInstantiateChildren(e,t,n);this._renderedChildren=o;var r=[],a=0;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i],u=0;u=o_(this);var c=Qb.mountComponent(s,t,this,this._hostContainerInfo,n,u);s._mountIndex=a++,r.push(c)}return n_.call(this,o),r},/**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
updateTextContent:function(e){var t=this._renderedChildren;
// Remove any rendered children.
Jb.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&t_(!1,"updateTextContent called on non-empty component.");_o(this,[vo(e)])},/**
	     * Replaces any rendered children with a markup string.
	     *
	     * @param {string} nextMarkup String of markup.
	     * @internal
	     */
updateMarkup:function(e){var t=this._renderedChildren;
// Remove any rendered children.
Jb.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&t_(!1,"updateTextContent called on non-empty component.");_o(this,[yo(e)])},/**
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
_updateChildren:function(e,t,n){var o=this._renderedChildren,r={},a=[],i=this._reconcilerUpdateChildren(o,e,a,r,t,n);if(i||o){var s,u=null,c=0,l=0,p=0,d=null;for(s in i)if(i.hasOwnProperty(s)){var f=o&&o[s],h=i[s];f===h?(u=bo(u,this.moveChild(f,d,c,l)),l=Math.max(f._mountIndex,l),f._mountIndex=c):(f&&(
// Update `lastIndex` before `_mountIndex` gets unset by unmounting.
l=Math.max(f._mountIndex,l)),
// The child must be instantiated before it's mounted.
u=bo(u,this._mountChildAtIndex(h,a[p],d,c,t,n)),p++),c++,d=Qb.getHostNode(h)}
// Remove children that are no longer present.
for(s in r)r.hasOwnProperty(s)&&(u=bo(u,this._unmountChild(o[s],r[s])));u&&_o(this,u),this._renderedChildren=i,n_.call(this,i)}},/**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted. It does not actually perform any
	     * backend operations.
	     *
	     * @internal
	     */
unmountChildren:function(e){var t=this._renderedChildren;Jb.unmountChildren(t,e),this._renderedChildren=null},/**
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
_unmountChild:function(e,t){var n=this.removeChild(e,t);return e._mountIndex=null,n}}},a_=r_,i_=Pi,s_=sv,u_=Cd,c_=Qd,l_=ni,p_=Ka,d_={/**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
isMounted:function(e){var t=i_.current;null!==t&&(p_(t._warnedAboutRefsInRender,"%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",t.getName()||"A component"),t._warnedAboutRefsInRender=!0);var n=s_.get(e);return!!n&&!!n._renderedComponent},/**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @param {string} callerName Name of the calling function in the public API.
	   * @internal
	   */
enqueueCallback:function(e,t,n){d_.validateCallback(t,n);var o=wo(e);
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
enqueueForceUpdate:function(e){var t=wo(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,Co(t))},/**
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
enqueueReplaceState:function(e,t,n){var o=wo(e,"replaceState");o&&(o._pendingStateQueue=[t],o._pendingReplaceState=!0,
// Future-proof 15.5
n!==undefined&&null!==n&&(d_.validateCallback(n,"replaceState"),o._pendingCallbacks?o._pendingCallbacks.push(n):o._pendingCallbacks=[n]),Co(o))},/**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
enqueueSetState:function(e,t){u_.debugTool.onSetState(),p_(null!=t,"setState(...): You passed an undefined or null state object; instead, use forceUpdate().");var n=wo(e,"setState");if(n){(n._pendingStateQueue||(n._pendingStateQueue=[])).push(t),Co(n)}},enqueueElementInternal:function(e,t,n){e._pendingElement=t,
// TODO: introduce _pendingContext instead of setting it directly.
e._context=n,Co(e)},validateCallback:function(e,t){e&&"function"!=typeof e&&l_(!1,"%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,Eo(e))}},f_=d_,h_=f_,m_=Ka,g_=function(){function e(t){To(this,e),this.transaction=t}/**
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
return e.prototype.isMounted=function(e){return!1},e.prototype.enqueueCallback=function(e,t,n){this.transaction.isInTransaction()&&h_.enqueueCallback(e,t,n)},e.prototype.enqueueForceUpdate=function(e){this.transaction.isInTransaction()?h_.enqueueForceUpdate(e):ko(e,"forceUpdate")},e.prototype.enqueueReplaceState=function(e,t){this.transaction.isInTransaction()?h_.enqueueReplaceState(e,t):ko(e,"replaceState")},e.prototype.enqueueSetState=function(e,t){this.transaction.isInTransaction()?h_.enqueueSetState(e,t):ko(e,"setState")},e}(),y_=g_,v_=Ha,b_=Dl,__=Nd,C_=Cd,E_=y_,w_=[];w_.push({initialize:C_.debugTool.onBeginFlush,close:C_.debugTool.onEndFlush});var T_={enqueue:function(){}},k_={/**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap procedures.
	   */
getTransactionWrappers:function(){return w_},/**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
getReactMountReady:function(){return T_},/**
	   * @return {object} The queue to collect React async events.
	   */
getUpdateQueue:function(){return this.updateQueue},/**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
destructor:function(){},checkpoint:function(){},rollback:function(){}};v_(Io.prototype,__,k_),b_.addPoolingTo(Io);var I_=Io,S_=Ha,O_=Va,P_=Ka,x_=O_,N_=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],M_=["applet","caption","html","table","td","th","marquee","object","template",
// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],R_=M_.concat(["button"]),D_=["dd","dt","li","option","optgroup","p","rp","rt"],A_={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null},j_=function(e,t,n){var o=S_({},e||A_),r={tag:t,instance:n};
// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
return-1!==M_.indexOf(t)&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),-1!==R_.indexOf(t)&&(o.pTagInButtonScope=null),-1!==N_.indexOf(t)&&"address"!==t&&"div"!==t&&"p"!==t&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=r,"form"===t&&(o.formTag=r),"a"===t&&(o.aTagInScope=r),"button"===t&&(o.buttonTagInScope=r),"nobr"===t&&(o.nobrTagInScope=r),"p"===t&&(o.pTagInButtonScope=r),"li"===t&&(o.listItemTagAutoclosing=r),"dd"!==t&&"dt"!==t||(o.dlItemTagAutoclosing=r),o},U_=function(e,t){
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
switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==t&&"h2"!==t&&"h3"!==t&&"h4"!==t&&"h5"!==t&&"h6"!==t;case"rp":case"rt":return-1===D_.indexOf(t);case"body":case"caption":case"col":case"colgroup":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":
// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==t}return!0},L_=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":
// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},F_=function(e){if(!e)return[];var t=[];do{t.push(e)}while(e=e._currentElement._owner);return t.reverse(),t},B_={};x_=function(e,t,n,o){o=o||A_;var r=o.current,a=r&&r.tag;null!=t&&(P_(null==e,"validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var i=U_(e,a)?null:r,s=i?null:L_(e,o),u=i||s;if(u){var c,l=u.tag,p=u.instance,d=n&&n._currentElement._owner,f=p&&p._currentElement._owner,h=F_(d),m=F_(f),g=Math.min(h.length,m.length),y=-1;for(c=0;c<g&&h[c]===m[c];c++)y=c;var v=h.slice(y+1).map(function(e){return e.getName()||"(unknown)"}),b=m.slice(y+1).map(function(e){return e.getName()||"(unknown)"}),_=[].concat(
// If the parent and child instances have a common owner ancestor, start
// with that -- otherwise we just start with the parent's owners.
-1!==y?h[y].getName()||"(unknown)":[],b,l,
// If we're warning about an invalid (non-parent) ancestry, add '...'
s?["..."]:[],v,e).join(" > "),C=!!i+"|"+e+"|"+l+"|"+_;if(B_[C])return;B_[C]=!0;var E=e,w="";if("#text"===e?/\S/.test(t)?E="Text nodes":(E="Whitespace text nodes",w=" Make sure you don't have any extra whitespace between tags on each line of your source code."):E="<"+e+">",i){var T="";"table"===l&&"tr"===e&&(T+=" Add a <tbody> to your code to match the DOM tree generated by the browser."),P_(!1,"validateDOMNesting(...): %s cannot appear as a child of <%s>.%s See %s.%s",E,l,w,_,T)}else P_(!1,"validateDOMNesting(...): %s cannot appear as a descendant of <%s>. See %s.",E,l,_)}},x_.updatedAncestorInfo=j_,
// For testing
x_.isTagValidInContext=function(e,t){t=t||A_;var n=t.current,o=n&&n.tag;return U_(e,o)&&!L_(e,t)};var H_=x_,W_=Ha,V_=Im,q_=_g,Y_=Oh,z_=rh,K_=bc,G_=Dg,X_=dl,$_=jc,Q_=ny,J_=Cc,Z_=Pc,eC=Sy,tC=Yy,nC=Uy,oC=tv,rC=Cd,aC=a_,iC=I_,sC=Va,uC=gh,cC=ni,lC=of,pC=wv,dC=ef,fC=H_,hC=Ka,mC=J_,gC=X_.deleteListener,yC=Z_.getNodeFromInstance,vC=Q_.listenTo,bC=$_.registrationNameModules,_C={string:!0,number:!0},CC="__html",EC={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null},wC=11,TC={},kC=sC;kC=function(e){var t=null!=this._contentDebugID,n=this._debugID,o=-n;if(null==e)return t&&rC.debugTool.onUnmountComponent(this._contentDebugID),void(this._contentDebugID=null);fC(null,String(e),this,this._ancestorInfo),this._contentDebugID=o,t?(rC.debugTool.onBeforeUpdateComponent(o,e),rC.debugTool.onUpdateComponent(o)):(rC.debugTool.onBeforeMountComponent(o,e,n),rC.debugTool.onMountComponent(o),rC.debugTool.onSetChildren(n,[o]))};
// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var IC={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},SC={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},OC={listing:!0,pre:!0,textarea:!0},PC=W_({menuitem:!0},SC),xC=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,NC={},MC={}.hasOwnProperty,RC=1;Ho.displayName="ReactDOMComponent",Ho.Mixin={/**
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
mountComponent:function(e,t,n,o){this._rootNodeID=RC++,this._domID=n._idCounter++,this._hostParent=t,this._hostContainerInfo=n;var r=this._currentElement.props;switch(this._tag){case"audio":case"form":case"iframe":case"img":case"link":case"object":case"source":case"video":this._wrapperState={listeners:null},e.getReactMountReady().enqueue(Uo,this);break;case"input":eC.mountWrapper(this,r,t),r=eC.getHostProps(this,r),e.getReactMountReady().enqueue(jo,this),e.getReactMountReady().enqueue(Uo,this);break;case"option":tC.mountWrapper(this,r,t),r=tC.getHostProps(this,r);break;case"select":nC.mountWrapper(this,r,t),r=nC.getHostProps(this,r),e.getReactMountReady().enqueue(Uo,this);break;case"textarea":oC.mountWrapper(this,r,t),r=oC.getHostProps(this,r),e.getReactMountReady().enqueue(jo,this),e.getReactMountReady().enqueue(Uo,this)}xo(this,r);
// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
var a,i;null!=t?(a=t._namespaceURI,i=t._tag):n._tag&&(a=n._namespaceURI,i=n._tag),(null==a||a===z_.svg&&"foreignobject"===i)&&(a=z_.html),a===z_.html&&("svg"===this._tag?a=z_.svg:"math"===this._tag&&(a=z_.mathml)),this._namespaceURI=a;var s;null!=t?s=t._ancestorInfo:n._tag&&(s=n._ancestorInfo),s&&
// parentInfo should always be present except for the top-level
// component when server rendering
fC(this._tag,null,this,s),this._ancestorInfo=fC.updatedAncestorInfo(s,this._tag,this);var u;if(e.useCreateElement){var c,l=n._ownerDocument;if(a===z_.html)if("script"===this._tag){
// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var p=l.createElement("div"),d=this._currentElement.type;p.innerHTML="<"+d+"></"+d+">",c=p.removeChild(p.firstChild)}else c=r.is?l.createElement(this._currentElement.type,r.is):l.createElement(this._currentElement.type);else c=l.createElementNS(a,this._currentElement.type);Z_.precacheNode(this,c),this._flags|=mC.hasCachedChildNodes,this._hostParent||G_.setAttributeForRoot(c),this._updateDOMProperties(null,r,e);var f=Y_(c);this._createInitialChildren(e,r,o,f),u=f}else{var h=this._createOpenTagMarkupAndPutListeners(e,r),m=this._createContentMarkup(e,r,o);u=!m&&SC[this._tag]?h+"/>":h+">"+m+"</"+this._currentElement.type+">"}switch(this._tag){case"input":e.getReactMountReady().enqueue(Ro,this),r.autoFocus&&e.getReactMountReady().enqueue(V_.focusDOMComponent,this);break;case"textarea":e.getReactMountReady().enqueue(Do,this),r.autoFocus&&e.getReactMountReady().enqueue(V_.focusDOMComponent,this);break;case"select":case"button":r.autoFocus&&e.getReactMountReady().enqueue(V_.focusDOMComponent,this);break;case"option":e.getReactMountReady().enqueue(Ao,this)}return u},/**
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
_createOpenTagMarkupAndPutListeners:function(e,t){var n="<"+this._currentElement.type;for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];if(null!=r)if(bC.hasOwnProperty(o))r&&No(this,o,r,e);else{"style"===o&&(r&&(
// See `_updateDOMProperties`. style block
this._previousStyle=r,r=this._previousStyleCopy=W_({},t.style)),r=q_.createMarkupForStyles(r,this));var a=null;null!=this._tag&&Bo(this._tag,t)?EC.hasOwnProperty(o)||(a=G_.createMarkupForCustomAttribute(o,r)):a=G_.createMarkupForProperty(o,r),a&&(n+=" "+a)}}
// For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
// For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
return e.renderToStaticMarkup?n:(this._hostParent||(n+=" "+G_.createMarkupForRoot()),n+=" "+G_.createMarkupForID(this._domID))},/**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @param {object} context
	   * @return {string} Content markup.
	   */
_createContentMarkup:function(e,t,n){var o="",r=t.dangerouslySetInnerHTML;if(null!=r)null!=r.__html&&(o=r.__html);else{var a=_C[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)
// TODO: Validate that text is allowed as a child of this node
o=uC(a),kC.call(this,a);else if(null!=i){var s=this.mountChildren(i,e,n);o=s.join("")}}return OC[this._tag]&&"\n"===o.charAt(0)?"\n"+o:o},_createInitialChildren:function(e,t,n,o){
// Intentional use of != to avoid catching zero/false.
var r=t.dangerouslySetInnerHTML;if(null!=r)null!=r.__html&&Y_.queueHTML(o,r.__html);else{var a=_C[typeof t.children]?t.children:null,i=null!=a?null:t.children;
// TODO: Validate that text is allowed as a child of this node
if(null!=a)
// Avoid setting textContent when the text is empty. In IE11 setting
// textContent on a text area will cause the placeholder to not
// show within the textarea until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
""!==a&&(kC.call(this,a),Y_.queueText(o,a));else if(null!=i)for(var s=this.mountChildren(i,e,n),u=0;u<s.length;u++)Y_.queueChild(o,s[u])}},/**
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
updateComponent:function(e,t,n,o){var r=t.props,a=this._currentElement.props;switch(this._tag){case"input":r=eC.getHostProps(this,r),a=eC.getHostProps(this,a);break;case"option":r=tC.getHostProps(this,r),a=tC.getHostProps(this,a);break;case"select":r=nC.getHostProps(this,r),a=nC.getHostProps(this,a);break;case"textarea":r=oC.getHostProps(this,r),a=oC.getHostProps(this,a)}switch(xo(this,a),this._updateDOMProperties(r,a,e),this._updateDOMChildren(r,a,e,o),this._tag){case"input":
// Update the wrapper around inputs *after* updating props. This has to
// happen after `_updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
eC.updateWrapper(this),
// We also check that we haven't missed a value update, such as a
// Radio group shifting the checked value to another named radio input.
dC.updateValueIfChanged(this);break;case"textarea":oC.updateWrapper(this);break;case"select":
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
_updateDOMProperties:function(e,t,n){var o,r,a;for(o in e)if(!t.hasOwnProperty(o)&&e.hasOwnProperty(o)&&null!=e[o])if("style"===o){var i=this._previousStyleCopy;for(r in i)i.hasOwnProperty(r)&&(a=a||{},a[r]="");this._previousStyleCopy=null}else bC.hasOwnProperty(o)?e[o]&&
// Only call deleteListener if there was a listener previously or
// else willDeleteListener gets called when there wasn't actually a
// listener (e.g., onClick={null})
gC(this,o):Bo(this._tag,e)?EC.hasOwnProperty(o)||G_.deleteValueForAttribute(yC(this),o):(K_.properties[o]||K_.isCustomAttribute(o))&&G_.deleteValueForProperty(yC(this),o);for(o in t){var s=t[o],u="style"===o?this._previousStyleCopy:null!=e?e[o]:undefined;if(t.hasOwnProperty(o)&&s!==u&&(null!=s||null!=u))if("style"===o)if(s?(Po(this._previousStyleCopy,this._previousStyle,this),this._previousStyle=s,s=this._previousStyleCopy=W_({},s)):this._previousStyleCopy=null,u){
// Unset styles on `lastProp` but not on `nextProp`.
for(r in u)!u.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(a=a||{},a[r]="");
// Update styles that changed since `lastProp`.
for(r in s)s.hasOwnProperty(r)&&u[r]!==s[r]&&(a=a||{},a[r]=s[r])}else
// Relies on `updateStylesByID` not mutating `styleUpdates`.
a=s;else if(bC.hasOwnProperty(o))s?No(this,o,s,n):u&&gC(this,o);else if(Bo(this._tag,t))EC.hasOwnProperty(o)||G_.setValueForAttribute(yC(this),o,s);else if(K_.properties[o]||K_.isCustomAttribute(o)){var c=yC(this);
// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
null!=s?G_.setValueForProperty(c,o,s):G_.deleteValueForProperty(c,o)}}a&&q_.setValueForStyles(yC(this),a,this)},/**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   */
_updateDOMChildren:function(e,t,n,o){var r=_C[typeof e.children]?e.children:null,a=_C[typeof t.children]?t.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,s=t.dangerouslySetInnerHTML&&t.dangerouslySetInnerHTML.__html,u=null!=r?null:e.children,c=null!=a?null:t.children,l=null!=r||null!=i,p=null!=a||null!=s;null!=u&&null==c?this.updateChildren(null,n,o):l&&!p&&(this.updateTextContent(""),rC.debugTool.onSetChildren(this._debugID,[])),null!=a?r!==a&&(this.updateTextContent(""+a),kC.call(this,a)):null!=s?(i!==s&&this.updateMarkup(""+s),rC.debugTool.onSetChildren(this._debugID,[])):null!=c&&(kC.call(this,null),this.updateChildren(c,n,o))},getHostNode:function(){return yC(this)},/**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
unmountComponent:function(e){switch(this._tag){case"audio":case"form":case"iframe":case"img":case"link":case"object":case"source":case"video":var t=this._wrapperState.listeners;if(t)for(var n=0;n<t.length;n++)t[n].remove();break;case"input":case"textarea":dC.stopTracking(this);break;case"html":case"head":case"body":/**
	         * Components like <html> <head> and <body> can't be removed or added
	         * easily in a cross-browser way, however it's valuable to be able to
	         * take advantage of React's reconciliation for styling and <title>
	         * management. So we just document it and throw in dangerous cases.
	         */
cC(!1,"<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this._tag)}this.unmountChildren(e),Z_.uncacheNode(this),X_.deleteAllListeners(this),this._rootNodeID=0,this._domID=0,this._wrapperState=null,kC.call(this,null)},getPublicInstance:function(){return yC(this)}},W_(Ho.prototype,Ho.Mixin,aC.Mixin);var DC=Ho,AC=Ha,jC=Oh,UC=Pc,LC=function(e){
// ReactCompositeComponent uses this:
this._currentElement=null,
// ReactDOMComponentTree uses these:
this._hostNode=null,this._hostParent=null,this._hostContainerInfo=null,this._domID=0};AC(LC.prototype,{mountComponent:function(e,t,n,o){var r=n._idCounter++;this._domID=r,this._hostParent=t,this._hostContainerInfo=n;var a=" react-empty: "+this._domID+" ";if(e.useCreateElement){var i=n._ownerDocument,s=i.createComment(a);return UC.precacheNode(this,s),jC(s)}return e.renderToStaticMarkup?"":"\x3c!--"+a+"--\x3e"},receiveComponent:function(){},getHostNode:function(){return UC.getNodeFromInstance(this)},unmountComponent:function(){UC.uncacheNode(this)}});var FC=LC,BC=ni,HC={isAncestor:Vo,getLowestCommonAncestor:Wo,getParentInstance:qo,traverseTwoPhase:Yo,traverseEnterLeave:zo},WC=Ha,VC=pm,qC=Oh,YC=Pc,zC=gh,KC=ni,GC=H_,XC=function(e){
// TODO: This is really a ReactText (ReactNode), not a ReactElement
this._currentElement=e,this._stringText=""+e,
// ReactDOMComponentTree uses these:
this._hostNode=null,this._hostParent=null,
// Properties
this._domID=0,this._mountIndex=0,this._closingComment=null,this._commentNodes=null};WC(XC.prototype,{/**
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
GC(null,this._stringText,this,r);var a=n._idCounter++,i=" react-text: "+a+" ";if(this._domID=a,this._hostParent=t,e.useCreateElement){var s=n._ownerDocument,u=s.createComment(i),c=s.createComment(" /react-text "),l=qC(s.createDocumentFragment());return qC.queueChild(l,qC(u)),this._stringText&&qC.queueChild(l,qC(s.createTextNode(this._stringText))),qC.queueChild(l,qC(c)),YC.precacheNode(this,u),this._closingComment=c,l}var p=zC(this._stringText);return e.renderToStaticMarkup?p:"\x3c!--"+i+"--\x3e"+p+"\x3c!-- /react-text --\x3e"},/**
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
this._stringText=n;var o=this.getHostNode();VC.replaceDelimitedText(o[0],o[1],n)}}},getHostNode:function(){var e=this._commentNodes;if(e)return e;if(!this._closingComment)for(var t=YC.getNodeFromInstance(this),n=t.nextSibling;;){if(null==n&&KC(!1,"Missing closing comment for text component %s",this._domID),8===n.nodeType&&" /react-text "===n.nodeValue){this._closingComment=n;break}n=n.nextSibling}return e=[this._hostNode,this._closingComment],this._commentNodes=e,e},unmountComponent:function(){this._closingComment=null,this._commentNodes=null,YC.uncacheNode(this)}});var $C=XC,QC=Ha,JC=Qd,ZC=Nd,eE=Va,tE={initialize:eE,close:function(){aE.isBatchingUpdates=!1}},nE={initialize:eE,close:JC.flushBatchedUpdates.bind(JC)},oE=[nE,tE];QC(Ko.prototype,ZC,{getTransactionWrappers:function(){return oE}});var rE=new Ko,aE={isBatchingUpdates:!1,/**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
batchedUpdates:function(e,t,n,o,r,a){var i=aE.isBatchingUpdates;
// The code is written this way to avoid extra allocations
// The code is written this way to avoid extra allocations
return aE.isBatchingUpdates=!0,i?e(t,n,o,r,a):rE.perform(e,null,t,n,o,r,a)}},iE=aE,sE=Va,uE={/**
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
capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):(console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:sE})},registerDefault:function(){}},cE=uE,lE=/*#__PURE__*/Object.freeze({default:cE,__moduleExports:cE}),pE=Go,dE=lE&&cE||lE,fE=Ha,hE=dE,mE=Al,gE=Dl,yE=Pc,vE=Qd,bE=tf,_E=pE;fE($o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),gE.addPoolingTo($o,gE.twoArgumentPooler);var CE={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:mE.canUseDOM?window:null,setHandleTopLevel:function(e){CE._handleTopLevel=e},setEnabled:function(e){CE._enabled=!!e},isEnabled:function(){return CE._enabled},/**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
trapBubbledEvent:function(e,t,n){return n?hE.listen(n,t,CE.dispatchEvent.bind(null,e)):null},/**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
trapCapturedEvent:function(e,t,n){return n?hE.capture(n,t,CE.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=Jo.bind(null,e);hE.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(CE._enabled){var n=$o.getPooled(e,t);try{
// Event queue being processed in the same cycle allows
// `preventDefault`.
vE.batchedUpdates(Qo,n)}finally{$o.release(n)}}}},EE=CE,wE=bc,TE=dl,kE=Xc,IE=av,SE=$v,OE=ny,PE=ib,xE=Qd,NE={Component:IE.injection,DOMProperty:wE.injection,EmptyComponent:SE.injection,EventPluginHub:TE.injection,EventPluginUtils:kE.injection,EventEmitter:OE.injection,HostComponent:PE.injection,Updates:xE.injection},ME=NE,RE=tr,DE=Al,AE=RE,jE=Ll,UE=DE.canUseDOM&&"selection"in document&&!("getSelection"in window),LE={/**
	   * @param {DOMElement} node
	   */
getOffsets:UE?or:rr,/**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
setOffsets:UE?ar:ir},FE=LE,BE=/*#__PURE__*/Object.freeze({default:FE,__moduleExports:FE}),HE=sr,WE=HE,VE=ur,qE=VE,YE=cr,zE=lr,KE=BE&&FE||BE,GE=KE,XE=YE,$E=Em,QE=zE,JE={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=QE();return{focusedElem:e,selectionRange:JE.hasSelectionCapabilities(e)?JE.getSelection(e):null}},/**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
restoreSelection:function(e){var t=QE(),n=e.focusedElem,o=e.selectionRange;t!==n&&pr(n)&&(JE.hasSelectionCapabilities(n)&&JE.setSelection(n,o),$E(n))},/**
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
t=GE.getOffsets(e);return t||{start:0,end:0}},/**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
setSelection:function(e,t){var n=t.start,o=t.end;if(o===undefined&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var r=e.createTextRange();r.collapse(!0),r.moveStart("character",n),r.moveEnd("character",o-n),r.select()}else GE.setOffsets(e,t)}},ZE=JE,ew=Ha,tw=Sp,nw=Dl,ow=ny,rw=ZE,aw=Cd,iw=Nd,sw=f_,uw={/**
	   * @return {Selection} Selection information.
	   */
initialize:rw.getSelectionInformation,/**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
close:rw.restoreSelection},cw={/**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
initialize:function(){var e=ow.isEnabled();return ow.setEnabled(!1),e},/**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
	   *   restores the previous value.
	   */
close:function(e){ow.setEnabled(e)}},lw={/**
	   * Initializes the internal `onDOMReady` queue.
	   */
initialize:function(){this.reactMountReady.reset()},/**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
close:function(){this.reactMountReady.notifyAll()}},pw=[uw,cw,lw];pw.push({initialize:aw.debugTool.onBeginFlush,close:aw.debugTool.onEndFlush});var dw={/**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap procedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
getTransactionWrappers:function(){return pw},/**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
getReactMountReady:function(){return this.reactMountReady},/**
	   * @return {object} The queue to collect React async events.
	   */
getUpdateQueue:function(){return sw},/**
	   * Save current transaction state -- if the return value from this method is
	   * passed to `rollback`, the transaction will be reset to that state.
	   */
checkpoint:function(){
// reactMountReady is the our only stateful wrapper
return this.reactMountReady.checkpoint()},rollback:function(e){this.reactMountReady.rollback(e)},/**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
destructor:function(){tw.release(this.reactMountReady),this.reactMountReady=null}};ew(dr.prototype,iw,dw),nw.addPoolingTo(dr);var fw=dr,hw={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},mw={accentHeight:"accent-height",accumulate:0,additive:0,alignmentBaseline:"alignment-baseline",allowReorder:"allowReorder",alphabetic:0,amplitude:0,arabicForm:"arabic-form",ascent:0,attributeName:"attributeName",attributeType:"attributeType",autoReverse:"autoReverse",azimuth:0,baseFrequency:"baseFrequency",baseProfile:"baseProfile",baselineShift:"baseline-shift",bbox:0,begin:0,bias:0,by:0,calcMode:"calcMode",capHeight:"cap-height",clip:0,clipPath:"clip-path",clipRule:"clip-rule",clipPathUnits:"clipPathUnits",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",contentScriptType:"contentScriptType",contentStyleType:"contentStyleType",cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:"diffuseConstant",direction:0,display:0,divisor:0,dominantBaseline:"dominant-baseline",dur:0,dx:0,dy:0,edgeMode:"edgeMode",elevation:0,enableBackground:"enable-background",end:0,exponent:0,externalResourcesRequired:"externalResourcesRequired",fill:0,fillOpacity:"fill-opacity",fillRule:"fill-rule",filter:0,filterRes:"filterRes",filterUnits:"filterUnits",floodColor:"flood-color",floodOpacity:"flood-opacity",focusable:0,fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",glyphRef:"glyphRef",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",hanging:0,horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",ideographic:0,imageRendering:"image-rendering",in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:"kernelMatrix",kernelUnitLength:"kernelUnitLength",kerning:0,keyPoints:"keyPoints",keySplines:"keySplines",keyTimes:"keyTimes",lengthAdjust:"lengthAdjust",letterSpacing:"letter-spacing",lightingColor:"lighting-color",limitingConeAngle:"limitingConeAngle",local:0,markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",markerHeight:"markerHeight",markerUnits:"markerUnits",markerWidth:"markerWidth",mask:0,maskContentUnits:"maskContentUnits",maskUnits:"maskUnits",mathematical:0,mode:0,numOctaves:"numOctaves",offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pathLength:"pathLength",patternContentUnits:"patternContentUnits",patternTransform:"patternTransform",patternUnits:"patternUnits",pointerEvents:"pointer-events",points:0,pointsAtX:"pointsAtX",pointsAtY:"pointsAtY",pointsAtZ:"pointsAtZ",preserveAlpha:"preserveAlpha",preserveAspectRatio:"preserveAspectRatio",primitiveUnits:"primitiveUnits",r:0,radius:0,refX:"refX",refY:"refY",renderingIntent:"rendering-intent",repeatCount:"repeatCount",repeatDur:"repeatDur",requiredExtensions:"requiredExtensions",requiredFeatures:"requiredFeatures",restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:"shape-rendering",slope:0,spacing:0,specularConstant:"specularConstant",specularExponent:"specularExponent",speed:0,spreadMethod:"spreadMethod",startOffset:"startOffset",stdDeviation:"stdDeviation",stemh:0,stemv:0,stitchTiles:"stitchTiles",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",string:0,stroke:0,strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",surfaceScale:"surfaceScale",systemLanguage:"systemLanguage",tableValues:"tableValues",targetX:"targetX",targetY:"targetY",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",textLength:"textLength",to:0,transform:0,u1:0,u2:0,underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicode:0,unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",values:0,vectorEffect:"vector-effect",version:0,vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",viewBox:"viewBox",viewTarget:"viewTarget",visibility:0,widths:0,wordSpacing:"word-spacing",writingMode:"writing-mode",x:0,xHeight:"x-height",x1:0,x2:0,xChannelSelector:"xChannelSelector",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlns:0,xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space",y:0,y1:0,y2:0,yChannelSelector:"yChannelSelector",z:0,zoomAndPan:"zoomAndPan"},gw={Properties:{},DOMAttributeNamespaces:{xlinkActuate:hw.xlink,xlinkArcrole:hw.xlink,xlinkHref:hw.xlink,xlinkRole:hw.xlink,xlinkShow:hw.xlink,xlinkTitle:hw.xlink,xlinkType:hw.xlink,xmlBase:hw.xml,xmlLang:hw.xml,xmlSpace:hw.xml},DOMAttributeNames:{}};Object.keys(mw).forEach(function(e){gw.Properties[e]=0,mw[e]&&(gw.DOMAttributeNames[e]=mw[e])});var yw=gw,vw=_l,bw=Al,_w=Pc,Cw=ZE,Ew=Jl,ww=zE,Tw=af,kw=wv,Iw=bw.canUseDOM&&"documentMode"in document&&document.documentMode<=11,Sw={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:["topBlur","topContextMenu","topFocus","topKeyDown","topKeyUp","topMouseDown","topMouseUp","topSelectionChange"]}},Ow=null,Pw=null,xw=null,Nw=!1,Mw=!1,Rw={eventTypes:Sw,extractEvents:function(e,t,n,o){if(!Mw)return null;var r=t?_w.getNodeFromInstance(t):window;switch(e){
// Track the input node that has focus.
case"topFocus":(Tw(r)||"true"===r.contentEditable)&&(Ow=r,Pw=t,xw=null);break;case"topBlur":Ow=null,Pw=null,xw=null;break;
// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case"topMouseDown":Nw=!0;break;case"topContextMenu":case"topMouseUp":return Nw=!1,hr(n,o);
// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case"topSelectionChange":if(Iw)break;
// falls through
case"topKeyDown":case"topKeyUp":return hr(n,o)}return null},didPutListener:function(e,t,n){"onSelect"===t&&(Mw=!0)}},Dw=Rw,Aw=Jl,jw={animationName:null,elapsedTime:null,pseudoElement:null};Aw.augmentClass(mr,jw);var Uw=mr,Lw=Jl,Fw={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};Lw.augmentClass(gr,Fw);var Bw=gr,Hw=/*#__PURE__*/Object.freeze({default:Bw,__moduleExports:Bw}),Ww=Af,Vw={relatedTarget:null};Ww.augmentClass(yr,Vw);var qw=yr,Yw=vr,zw=Yw,Kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xw=br,$w=/*#__PURE__*/Object.freeze({default:Xw,__moduleExports:Xw}),Qw=$w&&Xw||$w,Jw=Af,Zw=Yw,eT=Qw,tT=Df,nT={key:eT,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:tT,
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
return"keypress"===e.type?Zw(e):0},keyCode:function(e){
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
return"keypress"===e.type?Zw(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};Jw.augmentClass(_r,nT);var oT=_r,rT=Hf,aT={dataTransfer:null};rT.augmentClass(Cr,aT);var iT=Cr,sT=Af,uT=Df,cT={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:uT};sT.augmentClass(Er,cT);var lT=Er,pT=Jl,dT={propertyName:null,elapsedTime:null,pseudoElement:null};pT.augmentClass(wr,dT);var fT=wr,hT=Hf,mT={deltaX:function(e){// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,
// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null};hT.augmentClass(Tr,mT);var gT=Tr,yT=Hw&&Bw||Hw,vT=dE,bT=_l,_T=Pc,CT=Uw,ET=yT,wT=Jl,TT=qw,kT=oT,IT=Hf,ST=iT,OT=lT,PT=fT,xT=Af,NT=gT,MT=Va,RT=Yw,DT=ni,AT={},jT={};["abort","animationEnd","animationIteration","animationStart","blur","canPlay","canPlayThrough","click","contextMenu","copy","cut","doubleClick","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","focus","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","progress","rateChange","reset","scroll","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchMove","touchStart","transitionEnd","volumeChange","waiting","wheel"].forEach(function(e){var t=e[0].toUpperCase()+e.slice(1),n="on"+t,o="top"+t,r={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[o]};AT[e]=r,jT[o]=r});var UT={},LT={eventTypes:AT,extractEvents:function(e,t,n,o){var r=jT[e];if(!r)return null;var a;switch(e){case"topAbort":case"topCanPlay":case"topCanPlayThrough":case"topDurationChange":case"topEmptied":case"topEncrypted":case"topEnded":case"topError":case"topInput":case"topInvalid":case"topLoad":case"topLoadedData":case"topLoadedMetadata":case"topLoadStart":case"topPause":case"topPlay":case"topPlaying":case"topProgress":case"topRateChange":case"topReset":case"topSeeked":case"topSeeking":case"topStalled":case"topSubmit":case"topSuspend":case"topTimeUpdate":case"topVolumeChange":case"topWaiting":
// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
a=wT;break;case"topKeyPress":
// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===RT(n))return null;/* falls through */
case"topKeyDown":case"topKeyUp":a=kT;break;case"topBlur":case"topFocus":a=TT;break;case"topClick":
// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===n.button)return null;/* falls through */
case"topDoubleClick":case"topMouseDown":case"topMouseMove":case"topMouseUp":
// TODO: Disabled elements should not respond to mouse events
/* falls through */
case"topMouseOut":case"topMouseOver":case"topContextMenu":a=IT;break;case"topDrag":case"topDragEnd":case"topDragEnter":case"topDragExit":case"topDragLeave":case"topDragOver":case"topDragStart":case"topDrop":a=ST;break;case"topTouchCancel":case"topTouchEnd":case"topTouchMove":case"topTouchStart":a=OT;break;case"topAnimationEnd":case"topAnimationIteration":case"topAnimationStart":a=CT;break;case"topTransitionEnd":a=PT;break;case"topScroll":a=xT;break;case"topWheel":a=NT;break;case"topCopy":case"topCut":case"topPaste":a=ET}a||DT(!1,"SimpleEventPlugin: Unhandled event type, `%s`.",e);var i=a.getPooled(r,t,n,o);return bT.accumulateTwoPhaseDispatches(i),i},didPutListener:function(e,t,n){
// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
if("onClick"===t&&!Ir(e._tag)){var o=kr(e),r=_T.getNodeFromInstance(e);UT[o]||(UT[o]=vT.listen(r,"click",MT))}},willDeleteListener:function(e,t){if("onClick"===t&&!Ir(e._tag)){var n=kr(e);UT[n].remove(),delete UT[n]}}},FT=LT,BT=nh&&th||nh,HT=Nc,WT=wp,VT=wf,qT=kf,YT=Kf,zT=BT,KT=Cm,GT=DC,XT=Pc,$T=FC,QT=HC,JT=$C,ZT=iE,ek=EE,tk=ME,nk=fw,ok=yw,rk=Dw,ak=FT,ik=!1,sk={inject:Sr},uk=H_,ck=9,lk=Or,pk={useCreateElement:!0,useFiber:!1},dk=pk,fk=65521,hk=Pr,mk=/*#__PURE__*/Object.freeze({default:hk,__moduleExports:hk}),gk=mk&&hk||mk,yk=gk,vk=/\/?>/,bk=/^<\!\-\-/,_k={CHECKSUM_ATTR_NAME:"data-react-checksum",/**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
addChecksumToMarkup:function(e){var t=yk(e);
// Add checksum (handle both parent tags, comments and self-closing tags)
// Add checksum (handle both parent tags, comments and self-closing tags)
return bk.test(e)?e:e.replace(vk," "+_k.CHECKSUM_ATTR_NAME+'="'+t+'"$&')},/**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
canReuseMarkup:function(e,t){var n=t.getAttribute(_k.CHECKSUM_ATTR_NAME);return n=n&&parseInt(n,10),yk(e)===n}},Ck=_k,Ek=Oh,wk=bc,Tk=lc,kk=ny,Ik=Pi,Sk=Pc,Ok=lk,Pk=dk,xk=Pp,Nk=sv,Mk=Cd,Rk=Ck,Dk=Sd,Ak=f_,jk=Qd,Uk=ei,Lk=gb,Fk=ni,Bk=hh,Hk=Sv,Wk=Ka,Vk=wk.ID_ATTRIBUTE_NAME,qk=wk.ROOT_ATTRIBUTE_NAME,Yk=1,zk=9,Kk=11,Gk={},Xk=1,$k=function(){this.rootID=Xk++};$k.prototype.isReactComponent={},$k.displayName="TopLevelWrapper",$k.prototype.render=function(){return this.props.child},$k.isReactTopLevelWrapper=!0;/**
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
var Qk={TopLevelWrapper:$k,/**
	   * Used by devtools. The keys are not important.
	   */
_instancesByReactRootID:Gk,/**
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
_updateRootComponent:function(e,t,n,o,r){return Qk.scrollMonitor(o,function(){Ak.enqueueElementInternal(e,t,n),r&&Ak.enqueueCallbackInternal(e,r)}),e},/**
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
Wk(null==Ik.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",Ik.current&&Ik.current.getName()||"ReactCompositeComponent"),Lr(t)||Fk(!1,"_registerComponent(...): Target container is not a DOM element."),kk.ensureScrollValueMonitoring();var r=Lk(e,!1);
// The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
jk.batchedUpdates(Dr,r,t,n,o);var a=r._instance.rootID;return Gk[a]=r,r},/**
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
renderSubtreeIntoContainer:function(e,t,n,o){return null!=e&&Nk.has(e)||Fk(!1,"parentComponent must be a valid React Component"),Qk._renderSubtreeIntoContainer(e,t,n,o)},_renderSubtreeIntoContainer:function(e,t,n,o){Ak.validateCallback(o,"ReactDOM.render"),Tk.isValidElement(t)||Fk(!1,"ReactDOM.render(): Invalid component element.%s","string"==typeof t?" Instead of passing a string like 'div', pass React.createElement('div') or <div />.":"function"==typeof t?" Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.":// Check if it quacks like an element
null!=t&&t.props!==undefined?" This may be caused by unintentionally loading two independent copies of React.":""),Wk(!n||!n.tagName||"BODY"!==n.tagName.toUpperCase(),"render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");var r,a=Tk.createElement($k,{child:t});if(e){var i=Nk.get(e);r=i._processChildContext(i._context)}else r=Uk;var s=Hr(n);if(s){var u=s._currentElement,c=u.props.child;if(Hk(c,t)){var l=s._renderedComponent.getPublicInstance(),p=o&&function(){o.call(l)};return Qk._updateRootComponent(s,a,r,n,p),l}Qk.unmountComponentAtNode(n)}var d=Nr(n),f=d&&!!Mr(d),h=jr(n);if(Wk(!h,"render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),!f||d.nextSibling)for(var m=d;m;){if(Mr(m)){Wk(!1,"render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.");break}m=m.nextSibling}var g=f&&!s&&!h,y=Qk._renderNewRootComponent(a,n,g,r)._renderedComponent.getPublicInstance();return o&&o.call(y),y},/**
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
render:function(e,t,n){return Qk._renderSubtreeIntoContainer(null,e,t,n)},/**
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
Wk(null==Ik.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",Ik.current&&Ik.current.getName()||"ReactCompositeComponent"),Lr(e)||Fk(!1,"unmountComponentAtNode(...): Target container is not a DOM element."),Wk(!Ur(e),"unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");var t=Hr(e);if(!t){
// Check if the node being unmounted was rendered by React, but isn't a
// root node.
var n=jr(e),o=1===e.nodeType&&e.hasAttribute(qk);return Wk(!n,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",o?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1}return delete Gk[t._instance.rootID],jk.batchedUpdates(Ar,t,e,!1),!0},_mountImageIntoNode:function(e,t,n,o,r){if(Lr(t)||Fk(!1,"mountComponentIntoNode(...): Target container is not valid."),o){var a=Nr(t);if(Rk.canReuseMarkup(e,a))return void Sk.precacheNode(n,a);var i=a.getAttribute(Rk.CHECKSUM_ATTR_NAME);a.removeAttribute(Rk.CHECKSUM_ATTR_NAME);var s=a.outerHTML;a.setAttribute(Rk.CHECKSUM_ATTR_NAME,i);var u,c=e;t.nodeType===Yk?(u=document.createElement("div"),u.innerHTML=e,c=u.innerHTML):(u=document.createElement("iframe"),document.body.appendChild(u),u.contentDocument.write(e),c=u.contentDocument.documentElement.outerHTML,document.body.removeChild(u));var l=xr(c,s),p=" (client) "+c.substring(l-20,l+20)+"\n (server) "+s.substring(l-20,l+20);t.nodeType===zk&&Fk(!1,"You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",p),Wk(!1,"React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:\n%s",p)}if(t.nodeType===zk&&Fk(!1,"You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering."),r.useCreateElement){for(;t.lastChild;)t.removeChild(t.lastChild);Ek.insertTreeBefore(t,e,null)}else Bk(t,e),Sk.precacheNode(n,t.firstChild);var d=Sk.getInstanceFromNode(t.firstChild);0!==d._debugID&&Mk.debugTool.onHostOperation({instanceID:d._debugID,type:"mount",payload:e.toString()})}},Jk=Qk,Zk=Iv,eI=Wr,tI=Pi,nI=Pc,oI=sv,rI=eI,aI=ni,iI=Ka,sI=Vr,uI=Jk,cI=uI.renderSubtreeIntoContainer,lI=bc,pI=jc,dI=Rs,fI=Ka,hI={children:!0,dangerouslySetInnerHTML:!0,key:!0,ref:!0,autoFocus:!0,defaultValue:!0,valueLink:!0,defaultChecked:!0,checkedLink:!0,innerHTML:!0,suppressContentEditableWarning:!0,onFocusIn:!0,onFocusOut:!0},mI={},gI=function(e,t,n){if(lI.properties.hasOwnProperty(t)||lI.isCustomAttribute(t))return!0;if(hI.hasOwnProperty(t)&&hI[t]||mI.hasOwnProperty(t)&&mI[t])return!0;if(pI.registrationNameModules.hasOwnProperty(t))return!0;mI[t]=!0;var o=t.toLowerCase(),r=lI.isCustomAttribute(o)?o:lI.getPossibleStandardName.hasOwnProperty(o)?lI.getPossibleStandardName[o]:null,a=pI.possibleRegistrationNames.hasOwnProperty(o)?pI.possibleRegistrationNames[o]:null;return null!=r?(fI(!1,"Unknown DOM property %s. Did you mean %s?%s",t,r,dI.getStackAddendumByID(n)),!0):null!=a&&(fI(!1,"Unknown event handler property %s. Did you mean `%s`?%s",t,a,dI.getStackAddendumByID(n)),!0)},yI=function(e,t){var n=[];for(var o in t.props){gI(t.type,o,e)||n.push(o)}var r=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?fI(!1,"Unknown prop %s on <%s> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop%s",r,t.type,dI.getStackAddendumByID(e)):n.length>1&&fI(!1,"Unknown props %s on <%s> tag. Remove these props from the element. For details, see https://fb.me/react-unknown-prop%s",r,t.type,dI.getStackAddendumByID(e))},vI={onBeforeMountComponent:function(e,t){qr(e,t)},onBeforeUpdateComponent:function(e,t){qr(e,t)}},bI=vI,_I=Rs,CI=Ka,EI=!1,wI={onBeforeMountComponent:function(e,t){Yr(e,t)},onBeforeUpdateComponent:function(e,t){Yr(e,t)}},TI=wI,kI=bc,II=Rs,SI=Ka,OI={},PI=new RegExp("^(aria)-["+kI.ATTRIBUTE_NAME_CHAR+"]*$"),xI={onBeforeMountComponent:function(e,t){Gr(e,t)},onBeforeUpdateComponent:function(e,t){Gr(e,t)}},NI=xI,MI=Pc,RI=sk,DI=Jk,AI=Sd,jI=Qd,UI=sI,LI=eI,FI=cI,BI=Ka;RI.inject();var HI={findDOMNode:UI,render:DI.render,unmountComponentAtNode:DI.unmountComponentAtNode,version:"15.6.2",/* eslint-disable camelcase */
unstable_batchedUpdates:jI.batchedUpdates,unstable_renderSubtreeIntoContainer:FI};if(
// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ComponentTree:{getClosestInstanceFromNode:MI.getClosestInstanceFromNode,getNodeFromInstance:function(e){
// inst is an internal instance (but could be a composite)
return e._renderedComponent&&(e=LI(e)),e?MI.getNodeFromInstance(e):null}},Mount:DI,Reconciler:AI}),Al.canUseDOM&&window.top===window.self){
// First check if devtools is not installed
if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){
// Firefox does not have the issue with devtools loaded over file://
var WI=-1===window.location.protocol.indexOf("http")&&-1===navigator.userAgent.indexOf("Firefox");console.debug("Download the React DevTools "+(WI?"and use an HTTP server (instead of a file: URL) ":"")+"for a better development experience: https://fb.me/react-devtools")}var VI=function(){};BI(-1!==(VI.name||VI.toString()).indexOf("testFn"),"It looks like you're using a minified copy of the development build of React. When deploying React apps to production, make sure to use the production build which skips development warnings and is faster. See https://fb.me/react-minification for more details."),BI(!(document.documentMode&&document.documentMode<8),'Internet Explorer is running in compatibility mode; please add the following tag to your HTML to prevent this from happening: <meta http-equiv="X-UA-Compatible" content="IE=edge" />');for(var qI=[
// shims
Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.trim],YI=0;YI<qI.length;YI++)if(!qI[YI]){BI(!1,"One or more ES5 shims expected by React are not available: https://fb.me/react-warning-polyfills");break}}var zI=Cd,KI=bI,GI=TI,XI=NI;zI.debugTool.addHook(KI),zI.debugTool.addHook(GI),zI.debugTool.addHook(XI);var $I,QI=HI,JI=QI,ZI="object"==typeof global&&global&&global.Object===Object&&global,eS="object"==typeof self&&self&&self.Object===Object&&self,tS=ZI||eS||Function("return this")(),nS=tS.Symbol,oS=Object.prototype,rS=oS.hasOwnProperty,aS=oS.toString,iS=nS?nS.toStringTag:undefined,sS=Object.prototype,uS=sS.toString,cS="[object Null]",lS="[object Undefined]",pS=nS?nS.toStringTag:undefined,dS=/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
function(e,t){return function(n){return e(t(n))}}(Object.getPrototypeOf,Object),fS="[object Object]",hS=Function.prototype,mS=Object.prototype,gS=hS.toString,yS=mS.hasOwnProperty,vS=gS.call(Object);$I="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")();var bS=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}($I),_S={INIT:"@@redux/INIT"};"string"==typeof oa.name&&"isCrushed"!==oa.name&&/**
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
throw new Error(e)}catch(e){}}("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");var CS=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,n=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t};e.exports=mu(n,!0)}),ES=CS.shape({trySubscribe:CS.func.isRequired,tryUnsubscribe:CS.func.isRequired,notifyNestedSubs:CS.func.isRequired,isSubscribed:CS.func.isRequired}),wS=CS.shape({subscribe:CS.func.isRequired,dispatch:CS.func.isRequired,getState:CS.func.isRequired}),TS=!1;!function(){var e,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"store",n=arguments[1],o=n||t+"Subscription",r=function(e){function n(o,r){aa(this,n);var a=ia(this,e.call(this,o,r));return a[t]=o.store,a}return sa(n,e),n.prototype.getChildContext=function(){var e;return e={},e[t]=this[t],e[o]=null,e},n.prototype.render=function(){return fc.only(this.props.children)},n}(hc);r.prototype.componentWillReceiveProps=function(e){this[t]!==e.store&&ua()},r.propTypes={store:wS.isRequired,children:CS.element.isRequired},r.childContextTypes=(e={},e[t]=wS.isRequired,e[o]=ES,e)}();/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
var kS={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},SS=Object.defineProperty,OS=Object.getOwnPropertyNames,PS=Object.getOwnPropertySymbols,xS=Object.getOwnPropertyDescriptor,NS=Object.getPrototypeOf,MS=NS&&NS(Object),RS=ca,DS=function(e,t,n,o,r,a,i,s){if(t===undefined)throw new Error("invariant requires an error message argument");if(!e){var u;if(t===undefined)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,a,i,s],l=0;u=new Error(t.replace(/%s/g,function(){return c[l++]})),u.name="Invariant Violation"}// we don't care about invariant's own frame
throw u.framesToPop=1,u}},AS=DS,jS=null,US={notify:function(){}},LS=function(){function e(t,n,o){la(this,e),this.store=t,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=US}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=pa())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=US)},e}(),FS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},BS=0,HS={},WS=(Object.prototype.hasOwnProperty,[wa,Ta,ka]),VS=[Ia,Sa],qS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},YS=[xa,Na];Object.assign;!
// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},t=e.connectHOC,n=t===undefined?va:t,o=e.mapStateToPropsFactories,r=o===undefined?VS:o,a=e.mapDispatchToPropsFactories,i=a===undefined?WS:a,s=e.mergePropsFactories,u=s===undefined?YS:s,c=e.selectorFactory,l=c===undefined?Ua:c}();var zS=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},KS=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),GS=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},XS=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$S={init:function(e){return uO(e)},setClickGetIdScene:function(e){JS=e},setClickGetIdHideModel:function(e){ZS=e},setClickGetIdShowModel:function(e){eO=e},setClickGetIdTranspModel:function(e){tO=e},setClickGetIdRedModel:function(e){nO=e}},QS=void 0,JS=void 0,ZS=void 0,eO=void 0,tO=void 0,nO=void 0,oO=function(e){return JS(e)},rO=function(e){return ZS(e)},aO=function(e){return eO(e)},iO=function(e){return tO(e)},sO=function(e){return nO(e)},uO=function(e){cO(e);var t=lO();QS=ea(t,e),QS.subscribe(hO),hO()},cO=function(e){e.forEach(function(e,t){e.isOpen=!1,e.isCurrent=!1,e.uiIndexProject=t,e.scenes.forEach(function(e,t){e.isOpen=!1,e.isCurrent=!1,e.uiIndexScene=t,e.models.forEach(function(e,t){e.isCurrent=!1,e.view="normal"})})})},lO=function(){return function(e,t){switch(t.type){case"CLOSE_PROJECT":return e.forEach(function(e,n){e.uiIndexProject==t.uiIndexProject&&(e.isOpen=!1)}),e;case"OPEN_PROJECT":return e.forEach(function(e,n){e.uiIndexProject==t.uiIndexProject&&(e.isOpen=!0)}),e;case"OPEN_SCENE_CLOSE_ANOTHER":return e.forEach(function(e,n){e.uiIndexProject==t.uiIndexProject?e.scenes.forEach(function(e,n){e.uiIndexScene!=t.uiIndexScene?e.isOpen=!1:e.isOpen=!0}):e.scenes.forEach(function(e,t){e.isOpen=!1})}),e;default:return e}}},pO=function(e){return{type:"OPEN_PROJECT",uiIndexProject:e}},dO=function(e){return{type:"CLOSE_PROJECT",uiIndexProject:e}},fO=function(e,t){return{type:"OPEN_SCENE_CLOSE_ANOTHER",uiIndexScene:e,uiIndexProject:t}},hO=function(){JI.render(pc.createElement(mO,{store:QS}),document.getElementById("ui"))},mO=function(e){function t(e){return zS(this,t),XS(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return GS(t,e),KS(t,[{key:"getContextChild",value:function(){return{store:this.props.store}}},{key:"componentWillMount",value:function(){var e=this;this.unsubscribe=QS.subscribe(function(){return e.forceUpdate()})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=QS.getState().map(function(e,t){return pc.createElement(yO,{key:t,name:e.name,uiIndexProject:e.uiIndexProject,isOpen:e.isOpen,isCurrent:e.isCurrent})});return pc.createElement("div",null,pc.createElement(gO,null),pc.createElement("div",{className:"uiTree"},e),pc.createElement("hr",null))}}]),t}(pc.Component);mO.propTypes={store:CS.object.isRequired},mO.childContextTypes={store:CS.object.isRequired};var gO=function(e){function t(){return zS(this,t),XS(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return GS(t,e),KS(t,[{key:"render",value:function(){return pc.createElement("div",{className:"logo"}," 3D Viewer ")}}]),t}(pc.Component);gO.contextTypes={store:CS.object};var yO=function(e){function t(){return zS(this,t),XS(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return GS(t,e),KS(t,[{key:"clickClose",value:function(){1==QS.getState()[this.props.uiIndexProject].isOpen?QS.dispatch(dO(this.props.uiIndexProject)):QS.dispatch(pO(this.props.uiIndexProject))}},{key:"render",value:function(){var e,t,n=this;return t=1==QS.getState()[this.props.uiIndexProject].isOpen?"animOpen":"animClose",e=QS.getState()[this.props.uiIndexProject].scenes.map(function(e,t){return pc.createElement(vO,{key:t,name:e.name,uiIndexProject:n.props.uiIndexProject,uiIndexScene:e.uiIndexScene,isOpen:e.isOpen,isCurrent:e.isCurrent,path:e.path,idScene:e.idScene})}),pc.createElement("div",{className:"project"},pc.createElement("hr",null),pc.createElement("div",{className:"projName",onClick:this.clickClose.bind(this)},this.props.name),pc.createElement("div",{className:t},e))}}]),t}(pc.Component);yO.contextTypes={store:CS.object};var vO=function(e){function t(){return zS(this,t),XS(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return GS(t,e),KS(t,[{key:"clickFunction",value:function(){1!=this.props.isOpen&&(QS.dispatch(fO(this.props.uiIndexScene,this.props.uiIndexProject)),oO(this.props.idScene))}},{key:"render",value:function(){var e=this,t="assets/"+this.props.path+"/preview.png",n=pc.createElement("img",{src:t,className:"previewScene"}),o=QS.getState()[this.props.uiIndexProject].scenes[this.props.uiIndexScene].models.map(function(t,n){return pc.createElement(bO,{name:t.name,idModel:t.idModel,idScene:e.props.idScene})}),r=void 0,a=void 0;return this.props.isOpen?(r="animOpen",a="currentSceneName"):(r="animClose",a="sceneName"),pc.createElement("div",{className:"scene",onClick:this.clickFunction.bind(this)},pc.createElement("div",{className:"sceneHeader"},n,pc.createElement("div",{className:a},this.props.name)),pc.createElement("div",{className:r},o))}}]),t}(pc.Component);vO.contextTypes={store:CS.object};var bO=function(e){function t(){return zS(this,t),XS(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return GS(t,e),KS(t,[{key:"render",value:function(){return pc.createElement("div",{className:"model"},pc.createElement("div",{className:"modelName"},this.props.name," "),pc.createElement("div",{className:"modelButtons"},pc.createElement(_O,{idModel:this.props.idModel}),pc.createElement(CO,{idModel:this.props.idModel}),pc.createElement(EO,{idModel:this.props.idModel})))}}]),t}(pc.Component);bO.contextTypes={store:CS.object};var _O=function(e){function t(){zS(this,t);var e=XS(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={btnOn:!1},e}return GS(t,e),KS(t,[{key:"clickFunction",value:function(){console.log("props.idModel: ",this.props.idModel),this.state.btnOn?(this.setState({btnOn:!1}),aO(this.props.idModel)):(this.setState({btnOn:!0}),rO(this.props.idModel))}},{key:"render",value:function(){var e;return e=this.state.btnOn?"showModelButton":"hideModelButton",pc.createElement("div",{className:e,onClick:this.clickFunction.bind(this)},"скрыть")}}]),t}(pc.Component),CO=function(e){function t(){zS(this,t);var e=XS(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={btnOn:!1},e}return GS(t,e),KS(t,[{key:"clickFunction",value:function(){this.state.btnOn?(this.setState({btnOn:!1}),this.props.idModel):(this.setState({btnOn:!0}),iO(this.props.idModel))}},{key:"render",value:function(){var e;return e=this.state.btnOn?"showModelButton":"hideModelButton",pc.createElement("div",{className:e,onClick:this.clickFunction.bind(this)},"прозр")}}]),t}(pc.Component),EO=function(e){function t(){zS(this,t);var e=XS(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={btnOn:!1},e}return GS(t,e),KS(t,[{key:"clickFunction",value:function(){this.state.btnOn?(this.setState({btnOn:!1}),this.props.idModel):(this.setState({btnOn:!0}),sO(this.props.idModel))}},{key:"render",value:function(){var e;return e=this.state.btnOn?"showModelButton":"hideModelButton",pc.createElement("div",{className:e,onClick:this.clickFunction.bind(this)},"красный")}}]),t}(pc.Component),wO={init:function(e){TO=e,NO()},loadScene:function(e){return RO(e)},hideModel:function(e){return FO(e)},showModel:function(e){return BO(e)},transpModel:function(e){return HO(e)},redModel:function(e){return WO(e)},normalModel:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return normalModel(e)})},TO=void 0,kO=void 0,IO=void 0,SO=void 0,OO=void 0,PO=[],xO=[],NO=function(){IO=new THREE.Scene,SO=new THREE.PerspectiveCamera(10,window.innerWidth/window.innerHeight,3.5,15e3),SO.position.set(-150,200,300),SO.lookAt(IO.position),kO=new THREE.OrbitControls(SO);var e=new THREE.PointLight(16777215,2);e.position.set(-400,300,1600),IO.add(e);var t=new THREE.AmbientLight(11392747,.3);IO.add(t),OO=new THREE.WebGLRenderer({alpha:!0}),OO.setPixelRatio(window.devicePixelRatio),OO.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(OO.domElement),MO()},MO=function e(){OO.render(IO,SO),kO.update(),requestAnimationFrame(e)},RO=function(e){DO(),xO=AO(e,TO),jO()},DO=function(){PO.forEach(function(e,t,n){IO.remove(e.geom),e.geom=null,e.idModel=null,e.mtl=null}),PO=[],xO=[]},AO=function(e,t){for(var n=[],o=0;o<t.length;o++)if(t[o].idScene==e){var r=Object.assign({},{mtl:"assets/"+t[o].path+"/"+t[o].mtl,obj:"assets/"+t[o].path+"/"+t[o].obj,textures:"assets/"+t[o].path+"/",idModel:t[o].idModel});n.push(r)}return n},jO=function(){UO(0)},UO=function e(t){t>=xO.length||(LO(xO[t]),t++,e(t))},LO=function(e){(new THREE.MTLLoader).setTexturePath(e.textures).load(e.mtl,function(t){var n={};n.mtl=t,n.mtl.preload(),(new THREE.OBJLoader).setMaterials(n.mtl).load(e.obj,function(t){n.geom=t,IO.add(n.geom),n.idModel=e.idModel,PO.push(n)},function(){},function(){})})},FO=function(e){VO(e).geom.position.y=1e4},BO=function(e){VO(e).geom.position.y=0},HO=function(e){for(var t=VO(e),n=new THREE.MeshPhongMaterial({color:10066329,transparent:!0,opacity:.3}),o=0;o<t.geom.children.length;o++)t.geom.children[o].material=n},WO=function(e){console.log("redModelScene:",e);for(var t=VO(e),n=new THREE.MeshPhongMaterial({color:16711680,transparent:!0,opacity:1}),o=0;o<t.geom.children.length;o++)t.geom.children[o].material=n},VO=function(e){console.log(PO);for(var t=0;t<PO.length;t++)if(PO[t].idModel==e)return PO[t]};/*******************************************************************/
window.onload=function(){if(qO()){var e=YO(SCENES);$S.init(zO(e)),wO.init($O(e)),QO(),JO(),ZO(),eP(),tP(),/*
	  setClickNormalModel()  
	  */
setTimeout(function(){wO.loadScene(0)},400)}};var qO=function(){return"undefined"!=typeof SCENES||(alert("no data scenes"),!1)},YO=function(e){var t=0;return e.map(function(e,n){e.idScene=n;for(var o in e.models)e.models[o].idModel=t,t++;return e})},zO=function(e){var t=KO(e);return t.forEach(function(t){GO(t,e),t.scenes.forEach(function(t){XO(t,e)})}),t},KO=function(e){var t=[];return e.forEach(function(n,o){var r=!1;t.forEach(function(e,t){n.project==e.name&&(r=!0)}),0==r&&t.push(Object.assign({},{name:e[o].project}))}),t},GO=function(e,t){e.scenes=[],t.forEach(function(n,o){n.project==e.name&&e.scenes.push(Object.assign({},{name:t[o].name},{path:t[o].path},{idScene:t[o].idScene}))})},XO=function(e,t){t.forEach(function(t,n){if(t.name==e.name){e.models=[];for(var o in t.models)e.models.push(Object.assign({},{name:o,idModel:t.models[o].idModel}))}})},$O=function(e){var t=[];return e.forEach(function(e,n){for(var o in e.models)t.push(Object.assign({},{idScene:e.idScene,path:e.path,idModel:e.models[o].idModel,obj:e.models[o].obj,mtl:e.models[o].mtl}))}),t},QO=function(){return $S.setClickGetIdScene(function(e){setTimeout(function(){wO.loadScene(e)},500)})},JO=function(){return $S.setClickGetIdHideModel(function(e){return wO.hideModel(e)})},ZO=function(){return $S.setClickGetIdShowModel(function(e){return wO.showModel(e)})},eP=function(){return $S.setClickGetIdTranspModel(function(e){return wO.transpModel(e)})},tP=function(){return $S.setClickGetIdRedModel(function(e){return wO.redModel(e)})}}();
