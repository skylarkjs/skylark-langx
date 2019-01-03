/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./types"],function(r){var e,t,n=Object.prototype.hasOwnProperty,o=Array.prototype.slice,i=r.isBoolean,u=r.isFunction,f=r.isObject,a=r.isPlainObject,l=r.isArray;var c,s,v="undefined"!=typeof Symbol?Symbol.prototype:null;function h(r){if(!f(r))return[];var e=[];for(var t in r)e.push(t);return e}function p(r,e){if(!l(e))return null!=r&&n.call(r,e);for(var t=e.length,o=0;o<t;o++){var i=e[o];if(null==r||!n.call(r,i))return!1;r=r[i]}return!!t}function y(r,e,t,n){for(var o in e)n&&void 0!==r[o]||(t&&(a(e[o])||l(e[o]))?(a(e[o])&&!a(r[o])&&(r[o]={}),l(e[o])&&!l(r[o])&&(r[o]=[]),y(r[o],e[o],t,n)):void 0!==e[o]&&(r[o]=e[o]));return r}function b(r){var e=o.call(arguments,0),t=e.shift(),n=!1;return i(e[e.length-1])&&(n=e.pop()),{target:t,sources:e,deep:n}}function g(){var r=b.apply(this,arguments);return r.sources.forEach(function(e){y(r.target,e,r.deep,!1)}),r.target}return e=function(r,e,n,o){if(r===e)return 0!==r||1/r==1/e;if(null==r||null==e)return!1;if(r!=r)return e!=e;var i=typeof r;return("function"===i||"object"===i||"object"==typeof e)&&t(r,e,n,o)},t=function(r,t,n,o){var i=toString.call(r);if(i!==toString.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return v.valueOf.call(r)===v.valueOf.call(t)}var f="[object Array]"===i;if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var a=r.constructor,l=t.constructor;if(a!==l&&!(u(a)&&a instanceof a&&u(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}n=n||[],o=o||[];for(var c=n.length;c--;)if(n[c]===r)return o[c]===t;if(n.push(r),o.push(t),f){if((c=r.length)!==t.length)return!1;for(;c--;)if(!e(r[c],t[c],n,o))return!1}else{var s,h=Object.keys(r);if(c=h.length,Object.keys(t).length!==c)return!1;for(;c--;)if(void 0===t[s=h[c]]||!e(r[s],t[s],n,o))return!1}return n.pop(),o.pop(),!0},{allKeys:h,clone:function r(e,t){var n;if(void 0===e||null===e)n=e;else if(t&&e.clone)n=e.clone();else if(l(e)){n=[];for(var o=0;o<e.length;o++)n.push(r(e[o]))}else if(a(e))for(var i in n={},e)n[i]=r(e[i]);else n=e;return n},defaults:(c=h,s=!0,function(r){var e=arguments.length;if(s&&(r=Object(r)),e<2||null==r)return r;for(var t=1;t<e;t++)for(var n=arguments[t],o=c(n),i=o.length,u=0;u<i;u++){var f=o[u];s&&void 0!==r[f]||(r[f]=n[f])}return r}),each:function(r,e){var t,n,o,i;if(r)if(void 0===(t=r.length)){for(n in r)if(r.hasOwnProperty(n)&&(i=r[n],!1===e.call(i,n,i)))break}else for(o=0;o<t&&(i=r[o],!1!==e.call(i,o,i));o++);return this},extend:function(r){var e,t=o.call(arguments,1);return"boolean"==typeof r&&(e=r,r=t.shift()),0==t.length&&(t=[r],r=this),t.forEach(function(t){g(r,t,e)}),r},has:p,isEqual:function(r,t){return e(r,t)},isMatch:function(r,e){var t=t(e),n=t.length;if(null==r)return!n;for(var o=Object(r),i=0;i<n;i++){var u=t[i];if(e[u]!==o[u]||!(u in o))return!1}return!0},keys:function(r){if(f(r))return[];var e=[];for(var t in r)p(r,t)&&e.push(t);return e},mixin:g,removeItem:function(r,e){if(l(r)){var t=r.indexOf(e);-1!=t&&r.splice(t,1)}else if(a(r))for(var n in r)if(r[n]==e){delete r[n];break}return this},result:function(r,e,t){l(e)||(e=[e]);var n=e.length;if(!n)return u(t)?t.call(r):t;for(var o=0;o<n;o++){var i=null==r?void 0:r[e[o]];void 0===i&&(i=t,o=n),r=u(i)?i.call(r):i}return r},safeMixin:function(){var r=b.apply(this,arguments);return r.sources.forEach(function(e){y(r.target,e,r.deep,!0)}),r.target},values:function(r){for(var e=_.keys(r),t=e.length,n=Array(t),o=0;o<t;o++)n[o]=r[e[o]];return n}}});
//# sourceMappingURL=sourcemaps/objects.js.map
