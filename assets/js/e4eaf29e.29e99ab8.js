"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[8112],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>d});var n=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,d=u["".concat(l,".").concat(f)]||u[f]||b[f]||o;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2433:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(8168),i=(t(6540),t(5680));const o={sidebar_position:8,sidebar_label:"Release checklist"},a="A checklist for releasing a new Practica version",c={unversionedId:"contribution/release-checklist",id:"contribution/release-checklist",title:"A checklist for releasing a new Practica version",description:"\u2705 Bump package.json of both root and example Microservice",source:"@site/docs/contribution/release-checklist.md",sourceDirName:"contribution",slug:"/contribution/release-checklist",permalink:"/contribution/release-checklist",draft:!1,editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/contribution/release-checklist.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Release checklist"},sidebar:"tutorialSidebar",previous:{title:"Library picking guidelines",permalink:"/contribution/vendor-pick-guidelines"}},l={},s=[],p={toc:s},u="wrapper";function b(e){let{components:r,...t}=e;return(0,i.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"a-checklist-for-releasing-a-new-practica-version"},"A checklist for releasing a new Practica version"),(0,i.yg)("p",null,"\u2705 Bump package.json of both root and example Microservice"),(0,i.yg)("p",null,"\u2705 Ensure you're on the master branch"),(0,i.yg)("p",null,"\u2705 Publish from the root"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"npm run publish:build")),(0,i.yg)("p",null,"\u2705 Test manually by cleaning local .bin and running the get started guide"))}b.isMDXComponent=!0}}]);