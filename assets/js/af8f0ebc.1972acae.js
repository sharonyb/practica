"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[1337],{3905:function(t,l,n){n.d(l,{Zo:function(){return c},kt:function(){return p}});var e=n(7294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function a(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function o(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=e.createContext({}),s=function(t){var l=e.useContext(i),n=l;return t&&(n="function"==typeof t?t(l):u(u({},l),t)),n},c=function(t){var l=s(t.components);return e.createElement(i.Provider,{value:l},t.children)},k={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},d=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||k[p]||a;return n?e.createElement(b,u(u({ref:l},c),{},{components:n})):e.createElement(b,u({ref:l},c))}));function p(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=d;var o={};for(var i in l)hasOwnProperty.call(l,i)&&(o[i]=l[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var s=2;s<a;s++)u[s]=n[s];return e.createElement.apply(null,u)}return e.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1079:function(t,l,n){n.r(l),n.d(l,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return k}});var e=n(7462),r=n(3366),a=(n(7294),n(3905)),u=["components"],o={sidebar_position:2,sidebar_label:"Monorepo"},i="Decision: Choosing **Monorepo** approach and tooling",s={unversionedId:"decisions/monorepo",id:"decisions/monorepo",title:"Decision: Choosing **Monorepo** approach and tooling",description:"\ud83d\udcd4 What is it - Choosing the right Monorepo tool and features for the boilerplate",source:"@site/docs/decisions/monorepo.md",sourceDirName:"decisions",slug:"/decisions/monorepo",permalink:"/decisions/monorepo",editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/decisions/monorepo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Monorepo"},sidebar:"tutorialSidebar",previous:{title:"Configuration Library",permalink:"/decisions/configuration-library"},next:{title:"OpenAPI",permalink:"/decisions/openapi"}},c={},k=[],d={toc:k};function p(t){var l=t.components,n=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,e.Z)({},d,n,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decision-choosing-monorepo-approach-and-tooling"},"Decision: Choosing ",(0,a.kt)("strong",{parentName:"h1"},"Monorepo")," approach and tooling"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udcd4 What is it")," - Choosing the right Monorepo tool and features for the boilerplate"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u23f0 Status")," - Open for discussions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udcc1 Corresponding discussion")," - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/practicajs/practica/issues/80"},"Here")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83c\udfafBottom-line: our recommendation")," - TBD"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udcca Detailed comparison table")),(0,a.kt)("small",null,"*For some lacking features there is a community package that bridges the gap; For workspace, we evaluated whether most of them support a specific feature"),(0,a.kt)("table",{valign:"top"},(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,(0,a.kt)("h1",null,"nx")),(0,a.kt)("td",null,(0,a.kt)("h1",null,"Turborepo")),(0,a.kt)("td",null,(0,a.kt)("h1",null,"Lerna")),(0,a.kt)("td",null,(0,a.kt)("h1",null,"workspace (npm, yarn, pnpm)"))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"5",align:"center"},(0,a.kt)("h2",null,"Executive Summary"))),(0,a.kt)("tr",{valign:"top"},(0,a.kt)("td",null,(0,a.kt)("b",null,"Community and maintenance")),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Huge eco-system and commercial-grade maintenance"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Trending, commercial-grade maintenance"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/partial.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Not maintained anymore"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/almost-full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Solid")),(0,a.kt)("tr",{valign:"top"},(0,a.kt)("td",null,(0,a.kt)("b",null,"\u2757Encourage component autonomy")),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/partial.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Packages are highly coupled"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/almost-full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Workflow is coupled"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/almost-full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"npm link bypasses the SemVer"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Minor concern: shared NODE_MODULES on the root")),(0,a.kt)("tr",{valign:"top"},(0,a.kt)("td",null,(0,a.kt)("b",null,"Build speed")),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Smart inference and execution plan, shared dependencies, cache"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Smart inference and execution plan, shared dependencies, cache"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/partial.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Parallel tasks execution, copied dependencies"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/partial.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Shared dependencies")),(0,a.kt)("tr",{valign:"top"},(0,a.kt)("td",null,(0,a.kt)("b",null,"Standardization")),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/partial.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"Non standard Node.js stuff: One single root package.json by default, TS-paths for linking"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"An external build layer"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"An external build layer"),(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://raw.githubusercontent.com/practicajs/practica/main/docs/static/img/docs/decisions/full.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"An external package centralizer")),(0,a.kt)("tr",null,(0,a.kt)("td",{class:"tg-ho3n",colspan:"5",align:"center"},(0,a.kt)("h2",null,"Tasks and build pipeline"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Run recursive commands (affect a group of packages)")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"\u2757\ufe0fParallel task execution")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes* (Yarn & Pnpm)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"\u2757\ufe0fRealize which packages changed")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"\u2757\ufe0fRealize packages that are affected by a change")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes",(0,a.kt)("br",null),"both through package.json and code"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes",(0,a.kt)("br",null),"through package.json"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Ignore missing commands/scripts")),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"\u2757\ufe0fIn-project cache - Skip tasks if local result exists")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Remote cache - Skip tasks if remote result exists")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Visual dependency graph")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Partially, via plugin"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"\u2757\ufe0fSmart waterfall pipeline - Schedule unrelated tasks in parallel, not topologically")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Distributed task execution - Spread tasks across machines")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No")),(0,a.kt)("tr",null,(0,a.kt)("td",{class:"tg-ho3n",colspan:"5",align:"center"},(0,a.kt)("h2",null,"Locally linking packages"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u2757\ufe0fIs supported"),(0,a.kt)("td",null,"Partially",(0,a.kt)("br",null),"Achieved through TS paths"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No",(0,a.kt)("br",null),"Relies on workspaces"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"How")),(0,a.kt)("td",null,(0,a.kt)("br",null),"\u2757\ufe0fVia TypeScript paths and webpack"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Relies on workspaces"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Symlink"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Symlink")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"\u2757\ufe0fCan opt-out?")),(0,a.kt)("td",null,"Yes",(0,a.kt)("br",null),"By default local packages are linked"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null,"Partially",(0,a.kt)("br",null),"Pnpm allows preferring remote packages, Yarn has a [focused package](https://classic.yarnpkg.com/blog/2018/05/18/focused-workspaces/) option which only works per a single package")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Link a range - only specific versions will be symlinked")),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null,"Some",(0,a.kt)("br",null),"Yarn and Pnpm allows workspace versioning")),(0,a.kt)("tr",null,(0,a.kt)("td",{class:"tg-ho3n",colspan:"5",align:"center"},(0,a.kt)("h2",null,"Optimizing dependencies installation speed"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Supported")),(0,a.kt)("td",null,"Yes",(0,a.kt)("br",null),"Via a single Root package.json and NODE_MODULES"),(0,a.kt)("td",null,"Yes",(0,a.kt)("br",null),"Via caching"),(0,a.kt)("td",null,"No",(0,a.kt)("br",null),"Can be used on top of yarn workspace"),(0,a.kt)("td",null,"Yes",(0,a.kt)("br",null),"Via single node_modules folder")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Retain origin file path (some module refers to relative paths)")),"****",(0,a.kt)("td",null,"Partially",(0,a.kt)("br",null),"NODE_MODULES is on the root, not per package"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Not relevant"),(0,a.kt)("td",null,"Partially",(0,a.kt)("br",null),"Pnpm uses hard link instead of symlinks")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Keep single NODE_MODULES per machine (faster, less disc space)")),(0,a.kt)("td",null,"No",(0,a.kt)("br",null)),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null,"No"),(0,a.kt)("td",null,"Partially",(0,a.kt)("br",null),"Pnpm supports this")),(0,a.kt)("tr",null,(0,a.kt)("td",{class:"tg-ho3n",colspan:"5",align:"center"},(0,a.kt)("h2",null,"Other features and considerations"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Community plugins")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"No"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Scaffold new component from a gallery")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Yes"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,"Create a new package to the repo"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Built it code genreation with useful templates"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None, 3rd party code generator can be used"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None, 3rd party code generator can be used"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None, 3rd party code generator can be used")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Adapt changes in the monorepo tool")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Supported via nx migrate"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Supported via codemod"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Incremental builds")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Supported"),(0,a.kt)("td",null,(0,a.kt)("br",null),"Supported"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Cross-package modifications")),(0,a.kt)("td",null,(0,a.kt)("br",null),"Supported via nx generate"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"),(0,a.kt)("td",null,(0,a.kt)("br",null),"None"))),(0,a.kt)("p",null,"__"),(0,a.kt)("p",null,"Ideas for next iteration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Separate command execution and pipeline section"),(0,a.kt)("li",{parentName:"ul"},"Stars and popularity"),(0,a.kt)("li",{parentName:"ul"},"Features summary"),(0,a.kt)("li",{parentName:"ul"},"Polyrepo support")))}p.isMDXComponent=!0}}]);