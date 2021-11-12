"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react/jsx-runtime"),r=function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},n={exports:{}};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
e=n,function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var s in o)t.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}();var o=n.exports;exports.RadioButton=function(e){var n,a=e.className,i=void 0===a?"":a,s=e.name,l=e.label,u=e.labelPosition,c=void 0===u?"left":u,p=e.onBlur,d=e.onChange,v=e.value,f=o("__zurich RadioButton",((n={"RadioButton--reverse":"right"===c})[i]=!!i,n));return t.jsxs("label",r({className:f,onBlur:function(){p&&p()}},{children:[!!l&&t.jsx("span",r({className:"radio-button-label radio-button-element"},{children:l}),void 0),t.jsx("input",{type:"radio",className:"radio-button-input-native radio-button-element",name:s,checked:v,onChange:function(e){d(e.currentTarget.checked)}},void 0),t.jsx("span",r({className:"radio-button-input radio-button-element"},{children:t.jsx("span",{className:"radio-button-input__checked"},void 0)}),void 0)]}),void 0)};
//# sourceMappingURL=index.js.map
