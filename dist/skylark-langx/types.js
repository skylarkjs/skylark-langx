/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var n,t={}.toString,o=(n={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t){n["[object "+t+"]"]=t.toLowerCase()}),function(o){return null==o?String(o):n[t.call(o)]||"object"});function r(n){var t;for(t in n)if(null!==n[t])return!1;return!0}function i(n){return"function"==o(n)}function e(n){return n&&n.nodeType}function u(n){return"number"==typeof n}function c(n){return"object"==o(n)}function f(n){return"string"==typeof n}function l(n){return n&&n==n.window}return{isArray:function(n){return n&&n.constructor===Array},isArrayLike:function(n){return!f(n)&&!e(n)&&"number"==typeof n.length&&!i(n)},isBoolean:function(n){return"boolean"==typeof n},isDefined:function(n){return void 0!==n},isDocument:function(n){return null!=n&&n.nodeType==n.DOCUMENT_NODE},isEmpty:r,isEmptyObject:r,isFunction:i,isHtmlNode:e,isNull:function(n){return"null"===o(n)},isNumber:u,isNumeric:u,isObject:c,isPlainObject:function(n){return c(n)&&!l(n)&&Object.getPrototypeOf(n)==Object.prototype},isString:f,isSameOrigin:function(n){if(n){var t=location.protocol+"//"+location.hostname;return location.port&&(t+=":"+location.port),n.startsWith(t)}},isSymbol:function(n){return"symbol"==typeof n||isObjectLike(n)&&objectToString.call(n)==symbolTag},isUndefined:function(n){return void 0===n},isWindow:l,type:o}});
//# sourceMappingURL=sourcemaps/types.js.map
