(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8683:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},8317:function(e,t,n){Promise.resolve().then(n.bind(n,3126))},3126:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u},metadata:function(){return c}});var r=n(9268),i=n(5846),s=n.n(i),a=n(5630),l=n(7755),o=n(1630);let c={title:"HPV Visuals"};function u(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"bg-primary-dark",children:(0,r.jsx)("div",{className:"cover-image",children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(o.Z,{md:6,children:(0,r.jsx)("div",{className:"d-flex h-100 align-items-center py-5",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"font-title text-light mb-3",children:"HPV Visuals"}),(0,r.jsx)("hr",{className:"border-white"}),(0,r.jsx)("p",{className:"lead text-light",children:"Explore clinical examples of HPV-associated cancers and precancers."}),(0,r.jsx)(s(),{href:"/explore",className:"btn btn-lg btn-outline-light text-decoration-none",children:"Explore"})]})})})})})})}),(0,r.jsx)("div",{className:"bg-light py-5",children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)("p",{children:"The Human Papillomavirus Visuals (HPV Visuals) website provides visual examples of the natural history/carcinogenic process of HPV infection and progression to precancer, accompanied by relevant clinical data. This platform addresses a significant gap in clinical comprehension of the carcinogenic process and provides exposure to images that are true representations of meaningful changes in the appearance of the cervix that require clinical action."})})})})})]})}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},1630:function(e,t,n){"use strict";var r=n(8683),i=n.n(r),s=n(6006),a=n(5710),l=n(9268);let o=s.forwardRef((e,t)=>{let[{className:n,...r},{as:s="div",bsPrefix:o,spans:c}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,a.vE)(t,"col");let s=(0,a.pi)(),l=(0,a.zG)(),o=[],c=[];return s.forEach(e=>{let n,i,s;let a=r[e];delete r[e],"object"==typeof a&&null!=a?{span:n,offset:i,order:s}=a:n=a;let u=e!==l?`-${e}`:"";n&&o.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=s&&c.push(`order${u}-${s}`),null!=i&&c.push(`offset${u}-${i}`)}),[{...r,className:i()(n,...o,...c)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,l.jsx)(s,{...r,ref:t,className:i()(n,!c.length&&o)})});o.displayName="Col",t.Z=o},5630:function(e,t,n){"use strict";var r=n(8683),i=n.n(r),s=n(6006),a=n(5710),l=n(9268);let o=s.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...s},o)=>{let c=(0,a.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(n,{ref:o,...s,className:i()(r,t?`${c}${u}`:c)})});o.displayName="Container",t.Z=o},7755:function(e,t,n){"use strict";var r=n(8683),i=n.n(r),s=n(6006),a=n(5710),l=n(9268);let o=s.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},s)=>{let o=(0,a.vE)(e,"row"),c=(0,a.pi)(),u=(0,a.zG)(),f=`${o}-cols`,p=[];return c.forEach(e=>{let t;let n=r[e];delete r[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n;let i=e!==u?`-${e}`:"";null!=t&&p.push(`${f}${i}-${t}`)}),(0,l.jsx)(n,{ref:s,...r,className:i()(t,o,...p)})});o.displayName="Row",t.Z=o},5710:function(e,t,n){"use strict";n.d(t,{SC:function(){return u},pi:function(){return o},vE:function(){return l},zG:function(){return c}});var r=n(6006);n(9268);let i=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:a}=i;function l(e,t){let{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function o(){let{breakpoints:e}=(0,r.useContext)(i);return e}function c(){let{minBreakpoint:e}=(0,r.useContext)(i);return e}function u(){let{dir:e}=(0,r.useContext)(i);return"rtl"===e}}},function(e){e.O(0,[846,667,488,744],function(){return e(e.s=8317)}),_N_E=e.O()}]);