"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[2345],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(6540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=s,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(8168),s=(a(6540),a(5680));const r={slug:"about-the-sweet-and-powerful-use-case-code-pattern",date:"2024-04-22T10:00",hide_table_of_contents:!0,title:"About the sweet and powerful 'use case' code pattern",authors:["goldbergyoni"],tags:["node.js","use-case","clean-architecture","javascript","tdd","workflow","domain","tdd"]},i=void 0,o={permalink:"/blog/about-the-sweet-and-powerful-use-case-code-pattern",editUrl:"https://github.com/practicajs/practica/tree/main/docs/blog/use-case/index.md",source:"@site/blog/use-case/index.md",title:"About the sweet and powerful 'use case' code pattern",description:"Intro: A sweet pattern that got lost in time",date:"2024-04-22T10:00:00.000Z",formattedDate:"April 22, 2024",tags:[{label:"node.js",permalink:"/blog/tags/node-js"},{label:"use-case",permalink:"/blog/tags/use-case"},{label:"clean-architecture",permalink:"/blog/tags/clean-architecture"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"tdd",permalink:"/blog/tags/tdd"},{label:"workflow",permalink:"/blog/tags/workflow"},{label:"domain",permalink:"/blog/tags/domain"}],readingTime:17.735,hasTruncateMarker:!1,authors:[{name:"Yoni Goldberg",title:"Practica.js core maintainer",url:"https://github.com/goldbergyoni",imageURL:"https://github.com/goldbergyoni.png",key:"goldbergyoni"}],frontMatter:{slug:"about-the-sweet-and-powerful-use-case-code-pattern",date:"2024-04-22T10:00",hide_table_of_contents:!0,title:"About the sweet and powerful 'use case' code pattern",authors:["goldbergyoni"],tags:["node.js","use-case","clean-architecture","javascript","tdd","workflow","domain","tdd"]},nextItem:{title:"A compilation of outstanding testing articles (with JavaScript)",permalink:"/blog/a-compilation-of-outstanding-testing-articles-with-javaScript"}},l={authorsImageUrls:[void 0]},c=[{value:"Intro: A sweet pattern that got lost in time",id:"intro-a-sweet-pattern-that-got-lost-in-time",level:2},{value:"The problem: too many details, too soon",id:"the-problem-too-many-details-too-soon",level:2},{value:"The use-case pattern",id:"the-use-case-pattern",level:2},{value:"The merits",id:"the-merits",level:2},{value:"1. A navigation index",id:"1-a-navigation-index",level:3},{value:"2. Deferred and spread complexity",id:"2-deferred-and-spread-complexity",level:3},{value:"3. A practical workflow that promotes efficiency",id:"3-a-practical-workflow-that-promotes-efficiency",level:3},{value:"4. The optimal design viewpoint",id:"4-the-optimal-design-viewpoint",level:3},{value:"5. Better coverage reports",id:"5-better-coverage-reports",level:3},{value:"6. Practical domain-driven code",id:"6-practical-domain-driven-code",level:3},{value:"7. Consistent observability",id:"7-consistent-observability",level:3},{value:"Implementation best practices",id:"implementation-best-practices",level:2},{value:"1. Dead-simple &#39;no code&#39;",id:"1-dead-simple-no-code",level:3},{value:"2. Find the right level of specificity",id:"2-find-the-right-level-of-specificity",level:3},{value:"3. When have no choice, control the DB transaction from the use-case",id:"3-when-have-no-choice-control-the-db-transaction-from-the-use-case",level:3},{value:"4. Aggregate small use-cases in a single file",id:"4-aggregate-small-use-cases-in-a-single-file",level:3},{value:"Closing: Easy to start, use everywhere",id:"closing-easy-to-start-use-everywhere",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...r}=e;return(0,s.yg)(h,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"intro-a-sweet-pattern-that-got-lost-in-time"},"Intro: A sweet pattern that got lost in time"),(0,s.yg)("p",null,"When was the last time you introduced a new pattern to your code? The use-case pattern is a great candidate: it's powerful, sweet, easy to implement, and can strategically elevate your backend code quality in a short time. "),(0,s.yg)("p",null,"The term 'use case' means many different things in our industry. It's being used by product folks to describe a user journey, mentioned by various famous architecture books to describe vague high-level concepts. this article focuses on its practical application at the ",(0,s.yg)("em",{parentName:"p"},"code level")," by emphasizing its surprising merits how to implement it correctly."),(0,s.yg)("p",null,"Technically, the use-case pattern code belongs between the controller (e.g., API routes) and the business logic services (like those calculating or saving data). The use-case code is called by the controller and tells in high-level words the flow that is about to happen in a simple manner. Doing so increases the code readability, navigability, pushes complexity toward the edges, improves observability and 3 other merits that are shown below with examples."),(0,s.yg)("p",null,"But before we delve into its mechanics, let's first touch on a common problem it aims to address and see some code that calls for trouble."),(0,s.yg)("h2",{id:"the-problem-too-many-details-too-soon"},"The problem: too many details, too soon"),(0,s.yg)("p",null,"Imagine a developer, returning to a codebase she hasn't touched in months, tasked with fixing a bug in the 'new orders flow'\u2014specifically, an issue with price calculation in an electronic shop app."),(0,s.yg)("p",null,"Her journey begins promisingly smooth:"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"- \ud83e\udd17 Testing -")," She starts her journey off the automated tests to learn about the flow from an outside-in approach. The testing code is short and standard, as should be:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'test("When adding an order with 100$ product, then the price charge should be 100$ ", async () => {\n  // ....\n})\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"- \ud83e\udd17 Controller -")," She moves to skim through the implementation and starts from the API routes. Unsurprisingly, the Controller code is straightforward:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'app.post("/api/order", async (req: Request, res: Response) => {\n  const newOrder = req.body;\n  await orderService.addOrder(newOrder); // \ud83d\udc48 This is where the real-work is done\n  res.status(200).json({ message: "Order created successfully" });\n});\n')),(0,s.yg)("p",null,"Smooth sailing thus far, almost zero complexity. Typically, the controller would now hand off to a Service where the real implementation begins, she navigates into the order service to find where and how to fix that pricing bug."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"- \ud83d\ude32 The service -")," Suddenly! She is thrown into hundred lins of code (at best) with tons of details. She encounters classes with intricate states, inheritance hierarchies, a dependency injection framework that wire all the dependent services, and other boilerplate code. Here is a sneak peak from a real-world service, already simplified for brevity. Read it, feel it:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'let DBRepository;\n\nexport class OrderService : ServiceBase<OrderDto> {\n  async addOrder(orderRequest: OrderRequest): Promise<Order> {\n  try {\n    ensureDBRepositoryInitialized();\n    const { openTelemetry, monitoring, secretManager, priceService, userService } =\n      dependencyInjection.getVariousServices();\n    logger.info("Add order flow starts now", orderRequest);\n    openTelemetry.sendEvent("new order", orderRequest);\n\n    const validationRules = await getFromConfigSystem("order-validation-rules");\n    const validatedOrder = validateOrder(orderRequest, validationRules);\n    if (!validatedOrder) {\n      throw new Error("Invalid order");\n    }\n    this.base.startTransaction();\n    const user = await userService.getUserInfo(validatedOrder.customerId);\n    if (!user) {\n      const savedOrder = await tryAddUserWithLegacySystem(validatedOrder);\n      return savedOrder;\n    }\n    // And it goes on and on until the pricing module is mentioned\n}\n')),(0,s.yg)("p",null,"So many details and things to learn upfront, which of them is crucial for her to learn now before dealing with her task? How can she find where is that pricing module?"),(0,s.yg)("p",null,"She is not happy. Right off the bat, she must make herself acquaintance with a handful of product and technical narratives. She just fell off the complexity cliff: from a zero-complexity controller straight into a 1000-piece puzzle. Many of them are unrelated to her task."),(0,s.yg)("h2",{id:"the-use-case-pattern"},"The use-case pattern"),(0,s.yg)("p",null,"In a perfect world, she would love first to get a high-level brief of the involved steps so she can understand the whole flow, and from this comfort standpoint choose where to deepen her journey. This is what this pattern is all about."),(0,s.yg)("p",null,"The use-case is a file with a single function that is being called by the API controller to orchestrate the various implementation services. It's merely a simple function that enumerates and calls the code that does the actual job:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"A use-case code example",src:a(132).A,width:"1321",height:"444"})),(0,s.yg)("p",null,"Each interaction with the system\u2014whether it's posting a new comment, requesting user deletion, or any other action\u2014is managed by a dedicated use-case function. Each use-case constitutes multiple 'steps' - function calls that fulfill the desired flow."),(0,s.yg)("p",null,"By design, it's short, flat, no If/else, no try-catch, no algorithms, just plain calls to functions. This way, it tells the story in the simplest manner. Note how it doesn't share too much details, but tells enough for one to understand 'WHAT' is happening here and 'WHO' is doing that, but not 'HOW'."),(0,s.yg)("p",null,"But why is this minimalistic approach so crucial?"),(0,s.yg)("h2",{id:"the-merits"},"The merits"),(0,s.yg)("h3",{id:"1-a-navigation-index"},"1. A navigation index"),(0,s.yg)("p",null,"When seeking a specific book in the local library, the visitor doesn't have to skim through all the shelves to find a specific topic of interest. A Library, like any other information system, uses a navigational system, wayfinding signage, to highlight the path to a specific information area."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Library catalog",src:a(4186).A,width:"1792",height:"1024"}),"\n",(0,s.yg)("em",{parentName:"p"},"The library catalog redirects the reader to the area of interest")),(0,s.yg)("p",null,"Similarly, in software development, when a developer needs to address a particular issue\u2014such as fixing a bug in pricing calculations\u2014the 'use case' acts like a navigational tool within the application. It serves as a hitchhiker's guide, or the yellow pages, pinpointing exactly where to find the necessary piece of code. While other organizational strategies like modularization and folder structures offer ways to manage code, the 'use case' approach provides a more focused and precise index. it shows only the relevant areas (and not 50 unrelated modules), it tells ",(0,s.yg)("em",{parentName:"p"},"when precisely"),"  this module is used, what is the ",(0,s.yg)("em",{parentName:"p"},"specific")," entry point and which ",(0,s.yg)("em",{parentName:"p"},"exact")," parameters are passed."),(0,s.yg)("h3",{id:"2-deferred-and-spread-complexity"},"2. Deferred and spread complexity"),(0,s.yg)("p",null,"When a developer begins inspecting a codebase at the level of implementation services, she is immediately bombarded with intricate details. This immersion thrusts her into the depths of both product and technical complexities. Typically, she must navigate through a dependency injection system to instantiate classes, manage null states, and retrieve settings from a distributed configuration system"),(0,s.yg)("p",null,"When the code reader's journey starts at the level of implementation-services, she is immediately bombarded with intricate details. This immersion exposes her to both product and technical complexities right from the start. Typically, like in our example case, the code first use a dependency injection system to factor some classes, check for nulls in the state and get some values from the distributed config system - all before even starting on the primary task. This is called ",(0,s.yg)("em",{parentName:"p"},"accidental complexity"),". Tackling complexity is one of the finest art of app design, as the code planner you can't just eliminate complexity, but you may at least reduce the chances of someone meeting it."),(0,s.yg)("p",null,"Imagine your application as a tree where branches represent functions and the fruits are pockets of embedded complexity, some of which are poisoned (i.e., unnecessary complexities). Your objective is to structure this tree so that navigating through it exposes the visitor to as few poisoned fruits as possible:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"The blocking-complexity tree",src:a(7951).A,width:"792",height:"760"}),"\n",(0,s.yg)("em",{parentName:"p"},"The accidental-complexity tree: A visitor aiming to reach a specific leaf must navigate through all the intervening poisoned fruits.")),(0,s.yg)("p",null,"This is where the 'Use Case' approach shines: by prioritizing high-level product steps and minimal technical details at the outset\u2014a navigation system that simplifies access to various parts of the application. With this navigation tool, she can easily ignore steps that are unrelated with her work, and avoid poisoned fruits. A true strategic design win."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"The spread-complexity tree",src:a(9635).A,width:"792",height:"760"}),"\n",(0,s.yg)("em",{parentName:"p"},"The spread-complexity tree: Complexity is pushed to the periphery, allowing the reader to navigate directly to the essential fruits only.")),(0,s.yg)("h3",{id:"3-a-practical-workflow-that-promotes-efficiency"},"3. A practical workflow that promotes efficiency"),(0,s.yg)("p",null,"When embarking on a new coding flow, where do you start? After digesting the requirements and setting up some initial API routes and high-level component tests, the next logical step might be less obvious. Here\u2019s a strategy: begin with a use-case. This approach promotes an outside-in workflow that not only streamlines development but also exposes potential risks early on."),(0,s.yg)("p",null,"While drafting a new use-case, you essentially map out the various steps of the process. Each step is a call to some service or repository functions, sometimes before they even exist. Effortlessly and spontaneously, these steps become your TODO list, a live document that tells not only what should be implemented rather also where risky gotchas hide. Take, for instance, this straightforward use-case for adding an order:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"export async function addOrderUseCase(orderRequest: OrderRequest) {\n  const orderWithPricing = calculateOrderPricing(validatedOrder);\n  const purchasingCustomer = await assertCustomerExists(orderWithPricing.customerId);\n  const savedOrder = await insertOrder(orderWithPricing);\n  await sendSuccessEmailToCustomer(savedOrder, purchasingCustomer.email);\n}\n")),(0,s.yg)("p",null,"This structured approach allows you to preemptively tackle potential implementation hurdles:"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"- sendSuccessEmailToCustomer -")," What if you lack a necessary email service token from the Ops team? Sometimes, this demands approval and might last more than a week (believe me, I know). Acting ",(0,s.yg)("em",{parentName:"p"},"now"),", before spending 3 days on coding, can make a big difference."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"- calculateOrderPricing -")," Reminds you to confirm pricing details with the product team\u2014ideally before they're out of office, avoiding delays that could impact your delivery timeline."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"- assertCustomerExists -")," This call goes to an external Microservice which belongs to the User Management team. Did they already provide an OpenAPI specification of their routes? Check your Slack now, if they didn't yet, asking too late can prevent it from becoming a roadblock later."),(0,s.yg)("p",null,"Not only does this high-level thinking highlight your tasks and risks, it's also an optimal spot to start the design from:"),(0,s.yg)("h3",{id:"4-the-optimal-design-viewpoint"},"4. The optimal design viewpoint"),(0,s.yg)("p",null,"Early on when initiating a use-case, the developers define the various types, functions signature, and their initial skeleton return data. This process naturally evolves into an effective design drill where the overall flow is decomposed into small units that actually fit. This sketch-out results in discovering early when puzzle pieces don't fit while considering the underlying technologies. Here is an example, once I sketched a use-case and initially came up with these steps:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"await sendSuccessEmailToCustomer(savedOrder, purchasingCustomer.email, orderId);\nconst savedOrder = await insertOrder(orderWithPricing);\n")),(0,s.yg)("p",null,"Going with my initial use-case above, an email is sent before the the order is saved. Soon enough the compiler yelled at me: The email function signature is not satisfied, an 'Order Id' parameter is needed but to obtain one the order must be saved to DB first. I tried to change the order, unfortunately it turned out that my ORM is not returning the ID of saved entities. I'm stuck, my design struggles, at least this is realized before spending days on details. Unlike designing with papers and UML, designing with use-case brings no overhead. Moreover, unlike high-level diagrams detached from implementation realities, use-case design is grounded in the actual constraints of the technology being used."),(0,s.yg)("h3",{id:"5-better-coverage-reports"},"5. Better coverage reports"),(0,s.yg)("p",null,"Say you have 82.35% testing code coverage, are you happy and feeling confident to deploy? I'd suggest that anyone having below 100% must clarify first which code ",(0,s.yg)("em",{parentName:"p"},"exactly")," is not covered with testing. Is this some nitty-gritty niche code or actually critical business operations that are not fully tested? Typically, answering this requires scrutinizing all the app file coverage, a daunting task."),(0,s.yg)("p",null,"Use-cases simplifies the coverage coverage digest: when looking directly into the use-cases folder, one gets ",(0,s.yg)("em",{parentName:"p"},"'features coverage'"),", a unique look into which user features and steps lack testing:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Use case coverage",src:a(2899).A,width:"1327",height:"713"}),"\n",(0,s.yg)("em",{parentName:"p"},"The use-cases folder test coverage report, some use-cases are only partially tested")),(0,s.yg)("p",null,"See how the code above has an excellent overall coverage, 82.35%. But what about the remaining 17.65% code? Looking at the report triggers a red flag: the unusual 'payment-use-case' is not tested. This flow is where revenues are generated, a critical financial process which as turns out has a very low test coverage. This significant observation calls for immediate actions. Use-case coverage thus not only helps in understanding what parts of your application are tested but also prioritizes testing efforts based on business criticality rather than mere technical functionality."),(0,s.yg)("h3",{id:"6-practical-domain-driven-code"},"6. Practical domain-driven code"),(0,s.yg)("p",null,'The influential book "Domain-Driven Design" advocates for "committing the team to relentlessly exercise the domain language in all communications within the team and in the code." This principle asserts that aligning code closely with product narratives fosters a common language among diverse stakeholders (e.g., product, team-leads, frontend, backend). While this sounds sensible, this advice is also a little vague - how and where should this happen?'),(0,s.yg)("p",null,"Use-cases bring this idea down to earth: the use-case files are named after user journeys in the system (e.g., purchase-new-goods), the use-case code itself naturally describes the flow in a product language. For instance, if employees commonly use the term 'cut' at the water cooler to refer to a price reduction, the corresponding use-case should employ a function named 'calculatePriceCut'. This naming convention not only reinforces the domain language but also enhances mutual understanding across the team."),(0,s.yg)("h3",{id:"7-consistent-observability"},"7. Consistent observability"),(0,s.yg)("p",null,"I bet you encountered the situation when you turn the log level to 'Debug' (or any other verbose mode) and gets gazillion, overwhelming, and unbearable amount of log statements. Great chances that you also met the opposite when setting the logger level to 'Info' but there are also almost zero logging for that specific route that you're looking into. It's hard to formalize among team members when exactly each type of logging should be invoked, the result is a typical inconsistent and lacking observability."),(0,s.yg)("p",null,"Use-cases can drive trustworthy and consistent monitoring by taking advantage of the produced use-case steps. Since the precious work of breaking-down the flow into meaningful steps was already done (e.g., send-email, charge-credit-card), each step can produce the desired level of logging. For example, one team's approach might be to emit logger.info on a use-case start and use-case end, and then each step will emit logger.debug. Whatever the chosen specific level is, use-case steps bring consistency and automation. Put aside logging, the same can be applied with any other observability technique like OpenTelemetry to produce custom spans for every flow step."),(0,s.yg)("p",null,"The implementation though demands some thinking, cluttering every step with a log statement is both verbose and depends on human manual work:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'// \u2757\ufe0fVerbose use case\nexport async function addOrderUseCase(orderRequest: OrderRequest): Promise<Order> {\n  logger.info("Add order use case - Adding order starts now", orderRequest);\n  const validatedOrder = validateAndCoerceOrder(orderRequest);\n  logger.debug("Add order use case - The order was validated", validatedOrder);\n  const orderWithPricing = calculateOrderPricing(validatedOrder);\n  logger.debug("Add order use case - The order pricing was decided", validatedOrder);\n  const purchasingCustomer = await assertCustomerHasEnoughBalance(orderWithPricing);\n  logger.debug("Add order use case - Verified the user balance already", purchasingCustomer);\n  const returnOrder = mapFromRepositoryToDto(purchasingCustomer as unknown as OrderRecord);\n  logger.info("Add order use case - About to return result", returnOrder);\n  return returnOrder;\n}\n')),(0,s.yg)("p",null,"One way around this is creating a step wrapper function that makes it observable. This wrapper function will get called for each step:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'import { openTelemetry } from "@opentelemetry";\nasync function runUseCaseStep(stepName, stepFunction) {\n  logger.debug(`Use case step ${stepName} starts now`);\n  // Create Open Telemetry custom span\n  openTelemetry.startSpan(stepName);\n  return await stepFunction();\n}\n')),(0,s.yg)("p",null,"Now the use-case gets automated and consistent transparency:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'export async function addOrderUseCase(orderRequest: OrderRequest) {\n  // \ud83d\uddbc This is a use case - the story of the flow. Only simple, flat and high-level code is allowed\n  const validatedOrder = await runUseCaseStep("Validation", validateAndCoerceOrder.bind(null, orderRequest));\n  const orderWithPricing = await runUseCaseStep("Calculate price", calculateOrderPricing.bind(null, validatedOrder));\n  await runUseCaseStep("Send email", sendSuccessEmailToCustomer.bind(null, orderWithPricing));\n}\n')),(0,s.yg)("p",null,"The code is a little simplified, in real-world wrapper you'll have to put try-catch and cover other corner cases, but it makes the point: each step is a meaningful milestone in the user's journey that gets ",(0,s.yg)("em",{parentName:"p"},"automated and consistent")," observability."),(0,s.yg)("h2",{id:"implementation-best-practices"},"Implementation best practices"),(0,s.yg)("h3",{id:"1-dead-simple-no-code"},"1. Dead-simple 'no code'"),(0,s.yg)("p",null,"Since use-cases are mostly about zero complexity, use no code constructs but flat calls to functions. No If/Else, no switch, no try/catch, nothing, only a simple list of steps. While ago I decided to put ",(0,s.yg)("em",{parentName:"p"},"only one")," If/Else in a use-case: "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"export async function addOrderUseCase(orderRequest: OrderRequest) {\n  const validatedOrder = validateAndCoerceOrder(orderRequest);\n  const purchasingCustomer = await assertCustomerHasEnoughBalance(validatedOrder);\n  if (purchasingCustomer.isPremium) {//\u2757\ufe0f\n    sendEmailToPremiumCustomer(purchasingCustomer);\n    // This easily will grow with time to multiple if/else\n  }\n}\n")),(0,s.yg)("p",null,"A month later when I visited the code above there were already three nested If/elses. Year from now the function above will host a typical imperative code with many nested branches. Avoid this slippery road by putting a very strict border, put the conditions within the step functions:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"export async function addOrderUseCase(orderRequest: OrderRequest) {\n  const validatedOrder = validateAndCoerceOrder(orderRequest);\n  const purchasingCustomer = await assertCustomerHasEnoughBalance(validatedOrder);\n  await sendEmailIfPremiumCustomer(purchasingCustomer); //\ud83d\ude42\n}\n")),(0,s.yg)("h3",{id:"2-find-the-right-level-of-specificity"},"2. Find the right level of specificity"),(0,s.yg)("p",null,"The finest art of a great use case is finding the right level of details. At this early stage, the reader is like a traveler who uses the map to get some sense of the area, or find a specific road. Definitely not learn about every road in the country. On the other hand, a good map doesn't show only the main highway and nothing else. For example, the following use-case is too short and vague:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"export async function addOrderUseCase(orderRequest: OrderRequest) {\n  const validatedOrder = validateAndCoerceOrder(orderRequest);\n  const finalOrderToSave = await applyAllBusinessLogic(validatedOrder);//\ud83e\udd14\n  await insertOrder(finalOrderToSave);\n}\n")),(0,s.yg)("p",null,"The code above doesn't tell a story, neither eliminate some paths from the journey. Conversely, the following code is doing better in telling the story brief:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"export async function addOrderUseCase(orderRequest: OrderRequest) {\n  const validatedOrder = validateAndCoerceOrder(orderRequest);\n  const pricedOrder = await calculatePrice(validatedOrder);\n  const purchasingCustomer = await assertCustomerHasEnoughBalance(orderWithPricing);\n  const orderWithShippingInstructions = await addShippingInfo(pricedOrder, purchasingCustomer);\n  await insertOrder(orderWithShippingInstructions);\n}\n")),(0,s.yg)("p",null,"Things get a little more challenging when dealing with long flows. What if there a handful of important steps, say 20? what if multiple use-case have a lot of repetition and shared step? Consider the case where 'admin approval' is a multi-step process which is invoked by a handful of different use-cases? When facing this, consider breaking-down into multiple use-cases where one is allowed to call the other."),(0,s.yg)("h3",{id:"3-when-have-no-choice-control-the-db-transaction-from-the-use-case"},"3. When have no choice, control the DB transaction from the use-case"),(0,s.yg)("p",null,"What if step 2 and step 5 both deal with data and must be atomic (fail or succeed together)? Typically you'll handle this with DB transactions, but since each step is discrete, how can a transaction be shared among the coupled steps?"),(0,s.yg)("p",null,"If the steps take place one after the other, it makes sense to let the downstream service/repository handle them together and abstract the transaction from the use-case. What if the atomic steps are not consecutive? In this case, though not ideal, there is no escape from making the use-case acquaintance with a transaction object:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"export async function addOrderUseCase(orderRequest: OrderRequest) {\n  // \ud83d\uddbc This is a use case - the story of the flow. Only simple, flat and high-level code is allowed\n  const transaction = Repository.startTransaction();\n  const purchasingCustomer = await assertCustomerHasEnoughBalance(orderRequest, transaction);\n  const orderWithPricing = calculateOrderPricing(purchasingCustomer);\n  const savedOrder = await insertOrder(orderWithPricing, transaction);\n  const returnOrder = mapFromRepositoryToDto(savedOrder);\n  Repository.commitTransaction(transaction);\n  return returnOrder;\n}\n")),(0,s.yg)("h3",{id:"4-aggregate-small-use-cases-in-a-single-file"},"4. Aggregate small use-cases in a single file"),(0,s.yg)("p",null,"A use-case file is created per user-flow that is triggered from an API route. This model make sense for significant flows, how about small operations like getting an order by id? A 'get-order-by-id' use case is likely to have 1 line of code, seems like an unnecessary overhead to create a use-case file for every small request. In this case, consider aggregating multiple operations under a single conceptual use-case file. Here below for example, all the order queries co-live under the query-orders use-case file:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"// query-orders-use-cases.ts\nexport async function getOrder(id) {\n  // \ud83d\uddbc This is a use case - the story of the flow. Only simple, flat and high-level code is allowed\n  const result = await orderRepository.getOrderByID(id);\n  return result;\n}\n\nexport async function getAllOrders(criteria) {\n  // \ud83d\uddbc This is a use case - the story of the flow. Only simple, flat and high-level code is allowed\n  const result = await orderRepository.queryOrders(criteria);\n  return result;\n}\n")),(0,s.yg)("h2",{id:"closing-easy-to-start-use-everywhere"},"Closing: Easy to start, use everywhere"),(0,s.yg)("p",null,"If you find it valuable, you'll also get great return for your modest investment: No fancy tooling is needed, the learning time is close to zero (in fact, you just read one of the longest article on this matter...). There is also no need to refactor a whole system rather gradually implement per-feature."),(0,s.yg)("p",null,"Once you become accustomed to using it, you\u2019ll find that this technique extends well beyond API routes. It\u2019s equally beneficial for managing message queues subscriptions and scheduled jobs. Backend-aside, use it as the facade of every module or library - the code that is being called by the entry file and orchestrates the internals. The same idea can be applied in Frontend as well: declare the core actors at the component top level. Without implementation details, just put the reference to the component's event handlers and hooks - now the reader knows about the key events that will drive this component."),(0,s.yg)("p",null,"You might think this all sounds remarkably straightforward\u2014and it is. My apologies, this article wasn't about cutting-edge technologies. Neither did it cover shiny new dev toolings or AI-based rocket-science. In a land where complexity is the key enemy, simple ideas can be more impactful than sophisticated tooling and the Use-case is a powerful and sweet pattern that meant to live in every piece of software."))}u.isMDXComponent=!0},7951:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/blocking-complexity-tree-dd1cde956e00160fe4fadf67d6dd3649.jpg"},9635:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/deferred-complexity-tree-3407b9e6f355d2e32aacfc0bd7216de4.jpg"},4186:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/library-catalog-37d0f18aa61b71ed77ae72a945f3c1de.webp"},2899:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/use-case-coverage-3f223674f7783dfc904109647ad99304.png"},132:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/use-code-example-6d6c34330ad8a86f7c511123d4d5f654.png"}}]);