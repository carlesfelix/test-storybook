import{jsxs as n,jsx as e}from"react/jsx-runtime";
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
***************************************************************************** */var t,o=function(){return o=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},o.apply(this,arguments)},i={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
t=i,function(){var n={}.hasOwnProperty;function e(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=typeof i;if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)){if(i.length){var a=e.apply(null,i);a&&t.push(a)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var l in i)n.call(i,l)&&i[l]&&t.push(l);else t.push(i.toString())}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e}();var r=i.exports;function a(t){var i,a=t.className,l=void 0===a?"":a,d=t.name,u=t.label,s=t.labelPosition,p=void 0===s?"left":s,c=t.onBlur,b=t.onChange,h=t.value,m=r("RadioButton",((i={"RadioButton--reverse":"right"===p})[l]=!!l,i));return n("label",o({className:m,onBlur:function(){c&&c()}},{children:[!!u&&e("span",o({className:"radio-button-label radio-button-element"},{children:u}),void 0),e("input",{type:"radio",className:"radio-button-input-native radio-button-element",name:d,checked:h,onChange:function(n){b(n.currentTarget.checked)}},void 0),e("span",o({className:"radio-button-input radio-button-element"},{children:e("span",{className:"radio-button-input__checked"},void 0)}),void 0)]}),void 0)}!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}("label.RadioButton {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  box-sizing: border-box;\n}\nlabel.RadioButton span.radio-button-label {\n  flex-grow: 1;\n}\nlabel.RadioButton:not(.RadioButton--reverse) .radio-button-element:not(:first-child) {\n  margin-left: 0.5rem;\n}\nlabel.RadioButton.RadioButton--reverse {\n  flex-direction: row-reverse;\n}\nlabel.RadioButton.RadioButton--reverse .radio-button-element:not(:last-child) {\n  margin-left: 0.25rem;\n}\nlabel.RadioButton input.radio-button-input-native {\n  display: none;\n}\nlabel.RadioButton span.radio-button-input {\n  border-radius: 50%;\n  display: inline-flex;\n  border: 0.125rem solid gray;\n}\nlabel.RadioButton span.radio-button-input span.radio-button-input__checked {\n  visibility: hidden;\n  border-radius: 50%;\n  background-color: blue;\n  margin: 0.1875rem;\n  width: 0.6rem;\n  height: 0.6rem;\n}\nlabel.RadioButton input.radio-button-input-native[type=radio]:checked + span.radio-button-input {\n  border-color: blue;\n}\nlabel.RadioButton input.radio-button-input-native[type=radio]:checked + span.radio-button-input span.radio-button-input__checked {\n  visibility: visible;\n}");export{a as RadioButton};
//# sourceMappingURL=index.esm.js.map
