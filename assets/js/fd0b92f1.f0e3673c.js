"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[7598],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,b=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5940:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={sidebar_position:6,sidebar_label:"Library picking guidelines"},u="Choosing npm package dependency thoughtfully",p={unversionedId:"contribution/vendor-pick-guidelines",id:"contribution/vendor-pick-guidelines",title:"Choosing npm package dependency thoughtfully",description:"\u2705 The decision must follow a comparison table of options using this template",source:"@site/docs/contribution/vendor-pick-guidelines.md",sourceDirName:"contribution",slug:"/contribution/vendor-pick-guidelines",permalink:"/contribution/vendor-pick-guidelines",editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/contribution/vendor-pick-guidelines.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Library picking guidelines"},sidebar:"tutorialSidebar",previous:{title:"Long guide",permalink:"/contribution/contribution-long-guide"}},s={},l=[],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"choosing-npm-package-dependency-thoughtfully"},"Choosing npm package dependency thoughtfully"),(0,i.kt)("p",null,"\u2705 The decision must follow a comparison table of options using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/practicajs/practica/blob/main/docs/docs/decisions/configurationLibrary.md"},"this template")),(0,i.kt)("p",null,"\u2705 Usage state must be captured including weekly downloads, GitHub stars and dependents. Only top 5 most popular vendors can be evaluated"),(0,i.kt)("p",null,"\u2705 The evaluated libs must have been updated at least once in the last 6 months"))}f.isMDXComponent=!0}}]);