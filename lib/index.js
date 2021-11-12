"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,n=require("react/jsx-runtime"),t=function(){return t=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},t.apply(this,arguments)},o={exports:{}};
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
e=o,function(){var n={}.hasOwnProperty;function t(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&e.push(a)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var l in i)n.call(i,l)&&i[l]&&e.push(l);else e.push(i.toString())}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}();var i=o.exports;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("label.RadioButton {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  box-sizing: border-box;\n}\nlabel.RadioButton span.radio-button-label {\n  flex-grow: 1;\n}\nlabel.RadioButton:not(.RadioButton--reverse) .radio-button-element:not(:first-child) {\n  margin-left: 0.5rem;\n}\nlabel.RadioButton.RadioButton--reverse {\n  flex-direction: row-reverse;\n}\nlabel.RadioButton.RadioButton--reverse .radio-button-element:not(:last-child) {\n  margin-left: 0.25rem;\n}\nlabel.RadioButton input.radio-button-input-native {\n  display: none;\n}\nlabel.RadioButton span.radio-button-input {\n  border-radius: 50%;\n  display: inline-flex;\n  border: 0.125rem solid gray;\n}\nlabel.RadioButton span.radio-button-input span.radio-button-input__checked {\n  visibility: hidden;\n  border-radius: 50%;\n  background-color: blue;\n  margin: 0.1875rem;\n  width: 0.6rem;\n  height: 0.6rem;\n}\nlabel.RadioButton input.radio-button-input-native[type=radio]:checked + span.radio-button-input {\n  border-color: blue;\n}\nlabel.RadioButton input.radio-button-input-native[type=radio]:checked + span.radio-button-input span.radio-button-input__checked {\n  visibility: visible;\n}"),exports.RadioButton=function(e){var o,r=e.className,a=void 0===r?"":r,l=e.name,d=e.label,u=e.labelPosition,s=void 0===u?"left":u,p=e.onBlur,c=e.onChange,b=e.value,h=i("RadioButton",((o={"RadioButton--reverse":"right"===s})[a]=!!a,o));return n.jsxs("label",t({className:h,onBlur:function(){p&&p()}},{children:[!!d&&n.jsx("span",t({className:"radio-button-label radio-button-element"},{children:d}),void 0),n.jsx("input",{type:"radio",className:"radio-button-input-native radio-button-element",name:l,checked:b,onChange:function(e){c(e.currentTarget.checked)}},void 0),n.jsx("span",t({className:"radio-button-input radio-button-element"},{children:n.jsx("span",{className:"radio-button-input__checked"},void 0)}),void 0)]}),void 0)};
//# sourceMappingURL=index.js.map
