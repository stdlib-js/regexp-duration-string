// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,a=o.__lookupGetter__,u=o.__lookupSetter__;function d(){return/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var d,c,f,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||u.call(e,t)?(d=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=d):e[t]=r.value),f="get"in r,_="set"in r,c&&(f||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&i&&i.call(e,t,r.get),_&&l&&l.call(e,t,r.set),e},e(d,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reDurationString=t();
//# sourceMappingURL=browser.js.map
