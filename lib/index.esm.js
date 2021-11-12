import{jsxs as t,jsx as e}from"react/jsx-runtime";
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
***************************************************************************** */var n,r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
n=o,function(){var t={}.hasOwnProperty;function e(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)n.push(o);else if(Array.isArray(o)){if(o.length){var i=e.apply(null,o);i&&n.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var l in o)t.call(o,l)&&o[l]&&n.push(l);else n.push(o.toString())}}return n.join(" ")}n.exports?(e.default=e,n.exports=e):window.classNames=e}();var a=o.exports;function i(n){var o,i=n.className,l=void 0===i?"":i,s=n.name,u=n.label,c=n.labelPosition,p=void 0===c?"left":c,d=n.onBlur,f=n.onChange,v=n.value,h=a("__zurich RadioButton",((o={"RadioButton--reverse":"right"===p})[l]=!!l,o));return t("label",r({className:h,onBlur:function(){d&&d()}},{children:[!!u&&e("span",r({className:"radio-button-label radio-button-element"},{children:u}),void 0),e("input",{type:"radio",className:"radio-button-input-native radio-button-element",name:s,checked:v,onChange:function(t){f(t.currentTarget.checked)}},void 0),e("span",r({className:"radio-button-input radio-button-element"},{children:e("span",{className:"radio-button-input__checked"},void 0)}),void 0)]}),void 0)}export{i as RadioButton};
//# sourceMappingURL=index.esm.js.map
