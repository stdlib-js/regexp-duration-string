// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,i=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,d=n.__lookupSetter__;function c(){return/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?o:function(e,t,r){var o,c,f,_;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||d.call(e,t)?(o=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=o):e[t]=r.value),f="get"in r,_="set"in r,c&&(f||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,t,r.get),_&&l&&l.call(e,t,r.set),e};var f=/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i;t(c,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:f}),e.REGEXP=f,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).reDurationString={});
//# sourceMappingURL=index.js.map
