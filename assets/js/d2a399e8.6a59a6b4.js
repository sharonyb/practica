"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[366],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},h={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return t?n.createElement(m,i(i({ref:o},p),{},{components:t})):n.createElement(m,i({ref:o},p))}));function d(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4355:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const a={slug:"monorepo-backend",title:"Which Monorepo is right for a Node.js BACKEND\xa0now?",authors:["goldbergyoni","michaelsalomon"],tags:["monorepo","decisions"]},i="Which Monorepo is right for a Node.js BACKEND\xa0now?",s={permalink:"/blog/monorepo-backend",editUrl:"https://github.com/practicajs/practica/tree/main/docs/blog/which-monorepo/index.md",source:"@site/blog/which-monorepo/index.md",title:"Which Monorepo is right for a Node.js BACKEND\xa0now?",description:"Making our decisions transparent and collaborative is at the heart of Practica. In this post, we'd like to share our considerations in choosing our monorepo tooling",date:"2022-08-16T09:59:15.000Z",formattedDate:"August 16, 2022",tags:[{label:"monorepo",permalink:"/blog/tags/monorepo"},{label:"decisions",permalink:"/blog/tags/decisions"}],readingTime:1.355,truncated:!1,authors:[{name:"Yoni Goldberg",title:"Practica.js core maintainer",url:"https://github.com/goldbergyoni",imageURL:"https://github.com/goldbergyoni.png",key:"goldbergyoni"},{name:"Michael Salomon",title:"Practica.js core maintainer",url:"https://github.com/mikicho",imageURL:"https://avatars.githubusercontent.com/u/11459632?v=4",key:"michaelsalomon"}],frontMatter:{slug:"monorepo-backend",title:"Which Monorepo is right for a Node.js BACKEND\xa0now?",authors:["goldbergyoni","michaelsalomon"],tags:["monorepo","decisions"]},nextItem:{title:"Popular Node.js patterns and tools to re-consider",permalink:"/blog/popular-nodejs-pattern-and-tools-to-reconsider"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"What are we looking\xa0at",id:"what-are-we-lookingat",level:2}],p={toc:c};function h(e){let{components:o,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Making our decisions transparent and collaborative is at the heart of Practica. In this post, we'd like to share our considerations in choosing our monorepo tooling"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Monorepos",src:t(4).Z,width:"1200",height:"682"})),(0,r.kt)("h2",{id:"what-are-we-lookingat"},"What are we looking\xa0at"),(0,r.kt)("p",null,"The Monorepo market is hot like fire. Weirdly, now when the demand for Monoreps is exploding, one of the leading libraries\u200a-\u200aLerna- has just retired. When looking closely, it might not be just a coincidence\u200a-\u200aWith so many disruptive and shiny features brought on by new vendors, Lerna failed to keep up with the pace and stay relevant. This bloom of new tooling gets many confused\u200a-\u200aWhat is the right choice for my next project? What should I look at when choosing a Monorepo tool? This post is all about curating this information overload, covering the new tooling, emphasizing what is important, and finally share some recommendations. If you are here for tools and features, you're in the right place, although you might find yourself on a soul-searching journey to what is your desired development workflow."),(0,r.kt)("p",null,"This post is concerned with backend-only and Node.js. It also scoped to typical business solutions. If you're Google/FB developer who is faced with 8,000 packages\u200a-\u200asorry, you need special gear. Consequently, monster Monorepo tooling like Bazel is left-out. We will cover here some of the most popular Monorepo tools including Turborepo, Nx, PNPM, Yarn/npm workspace, and Lerna (although it's not actually maintained anymore\u200a-\u200ait's a good baseline for comparison)."),(0,r.kt)("p",null,"Let's start? When human beings use the term Monorepo, they typically refer to one or more of the following 4 layers below. Each one of them can bring value to your project, each has different consequences, tooling, and features:"))}h.isMDXComponent=!0},4:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/monorepo-theme-1-3eb3a873dcee4ec971a403a153b75aaa.png"}}]);