(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),chakra_ui_react_esm=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js")),colors=__webpack_require__("./src/styles/colors.tsx"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},chakra:{theme:Object(chakra_ui_react_esm.extendTheme)({colors:{brand:Object.assign({},colors.b)},components:{Button:{variants:{backToHome:{color:colors.b.white,fontWeight:400,bg:colors.b.primaryGray,_hover:{bg:colors.b.secondaryGray}}}}}}),resetCSS:!0}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/ArticleCard/ArticleCard.stories.tsx":"./src/components/ArticleCard/ArticleCard.stories.tsx","./components/Footer/Footer.stories.tsx":"./src/components/Footer/Footer.stories.tsx","./components/Header/Header.stories.tsx":"./src/components/Header/Header.stories.tsx","./components/Layout/Layout.stories.tsx":"./src/components/Layout/Layout.stories.tsx","./components/Tag/Tag.stories.tsx":"./src/components/Tag/Tag.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/ArticleCard/ArticleCard.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _ArticleCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ArticleCard/ArticleCard.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Blog/ArticleCard",component:_ArticleCard__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ArticleCard__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={title:"Article title",tags:["nextjs","react","typescript"],dateString:"2021-01-02"},Primary.parameters=Object.assign({storySource:{source:"args => <ArticleCard {...args} />"}},Primary.parameters)},"./src/components/ArticleCard/ArticleCard.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ArticleCard}));__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),date_fns__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),_src_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/index.ts"),_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/styles/colors.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ArticleCard=function ArticleCard(props){var date=Object(date_fns__WEBPACK_IMPORTED_MODULE_2__.a)(props.dateString);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.d,{bg:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.secondaryGray,padding:4,borderRadius:5,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.C,{fontSize:20,color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.white,fontWeight:800,children:props.title}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_4__.d,{size:8}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.m,{spacing:2,children:props.tags.map((function(tagName,i){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_4__.e,{name:tagName},i)}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_4__.d,{size:16}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.C,{color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.lightGray,fontSize:12,children:Object(date_fns__WEBPACK_IMPORTED_MODULE_3__.a)(date,"yyyy/MM/dd")})]})};ArticleCard.displayName="ArticleCard";try{ArticleCard.displayName="ArticleCard",ArticleCard.__docgenInfo={description:"",displayName:"ArticleCard",props:{tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"TagName[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},dateString:{defaultValue:null,description:"",name:"dateString",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ArticleCard/ArticleCard.tsx#ArticleCard"]={docgenInfo:ArticleCard.__docgenInfo,name:"ArticleCard",path:"src/components/ArticleCard/ArticleCard.tsx#ArticleCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Footer/Footer.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Footer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Footer/Footer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Blog/Footer",component:_Footer__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={title:"Kent.dev"},Primary.parameters=Object.assign({storySource:{source:"args => <Footer {...args} />"}},Primary.parameters)},"./src/components/Footer/Footer.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Footer}));var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_src_styles_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/colors.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Footer=function Footer(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.d,{bg:_src_styles_colors__WEBPACK_IMPORTED_MODULE_2__.a.secondaryGray,as:"footer",paddingBottom:2,paddingTop:12,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.e,{flexDirection:"column",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.m,{spacing:"20px",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_1__.b,{width:5,height:5,color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_2__.a.lightGray}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_1__.f,{width:5,height:5,color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_2__.a.lightGray})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_1__.d,{size:20}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.C,{color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_2__.a.lightGray,fontSize:"sm",children:"2022 Kent.dev - All rights reserved"})]})})};Footer.displayName="Footer";try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Footer/Footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/Footer/Footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Header/Header.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Header/Header.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Blog/Header",component:_Header__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={title:"Kent.dev"},Primary.parameters=Object.assign({storySource:{source:"args => <Header {...args} />"}},Primary.parameters)},"./src/components/Header/Header.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chakra-ui-icon.esm.js"),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),react_icons_hi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),_src_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/index.ts"),_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/styles/colors.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Header=function Header(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.d,{bg:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.primaryGray,as:"header",borderBottomColor:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.secondaryGray,borderBottomWidth:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.h,{maxW:"container.lg",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.j,{alignItems:"center",height:"40px",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default.a,{href:"/",passHref:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.m,{spacing:"12px",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{as:react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.a,w:6,h:6,display:"block",color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.white}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.n,{as:"h1",color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.white,fontSize:"2xl",fontWeight:900,children:props.title})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.x,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.m,{spacing:"20px",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_4__.b,{width:5,height:5}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_4__.f,{width:5,height:5})]})]})})})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/Layout.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Home",(function(){return Home})),__webpack_require__.d(__webpack_exports__,"NotHome",(function(){return NotHome}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),_Layout__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Layout/Layout.tsx")),_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/styles/colors.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Blog/Layout",component:_Layout__WEBPACK_IMPORTED_MODULE_4__.a,argTypes:{backgroundColor:{control:"color"}}};var Children=function Children(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.d,{borderColor:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.white,borderWidth:1,textAlign:"center",paddingY:12,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.C,{fontSize:32,fontWeight:700,color:_src_styles_colors__WEBPACK_IMPORTED_MODULE_5__.a.white,children:"content"})})};Children.displayName="Children";var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Layout__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},args,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Children,{})}))};Template.displayName="Template";var Home=Template.bind({});Home.args={home:!0};var NotHome=Template.bind({});NotHome.args={home:!1},Home.parameters=Object.assign({storySource:{source:"args => (\n  <Layout {...args}>\n    <Children />\n  </Layout>\n)"}},Home.parameters),NotHome.parameters=Object.assign({storySource:{source:"args => (\n  <Layout {...args}>\n    <Children />\n  </Layout>\n)"}},NotHome.parameters)},"./src/components/Layout/Layout.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Layout}));var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js"),next_head__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/head.js"),next_head__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__),next_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__),react_icons_fi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),_src_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/index.ts"),_src_styles_colors__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/styles/colors.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Layout=function Layout(_ref){var children=_ref.children,_ref$home=_ref.home,home=void 0!==_ref$home&&_ref$home;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_2___default.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/"+encodeURI("Kent.dev")+".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta",{name:"og:title",content:"Kent.dev"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.j,{flexDirection:"column",height:"100vh",bg:_src_styles_colors__WEBPACK_IMPORTED_MODULE_6__.a.primaryGray,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.c,{title:"Kent.dev"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.h,{maxW:"container.lg",padding:5,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("main",{children:children}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.d,{size:16}),!home&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{leftIcon:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.a,{}),variant:"backToHome",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3___default.a,{href:"/",children:"Back to home"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.x,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.a,{})]})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{home:{defaultValue:{value:"false"},description:"",name:"home",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tag/Tag.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"React",(function(){return React})),__webpack_require__.d(__webpack_exports__,"NextJs",(function(){return NextJs})),__webpack_require__.d(__webpack_exports__,"Apollo",(function(){return Apollo})),__webpack_require__.d(__webpack_exports__,"GraphQL",(function(){return GraphQL})),__webpack_require__.d(__webpack_exports__,"TypeScript",(function(){return TypeScript}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tag/Tag.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Blog/Tag",component:_Tag__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},args))};Template.displayName="Template";var React=Template.bind({});React.args={name:"react"};var NextJs=Template.bind({});NextJs.args={name:"nextjs"};var Apollo=Template.bind({});Apollo.args={name:"apollo"};var GraphQL=Template.bind({});GraphQL.args={name:"graphql"};var TypeScript=Template.bind({});TypeScript.args={name:"typescript"},React.parameters=Object.assign({storySource:{source:"args => <Tag {...args} />"}},React.parameters),NextJs.parameters=Object.assign({storySource:{source:"args => <Tag {...args} />"}},NextJs.parameters),Apollo.parameters=Object.assign({storySource:{source:"args => <Tag {...args} />"}},Apollo.parameters),GraphQL.parameters=Object.assign({storySource:{source:"args => <Tag {...args} />"}},GraphQL.parameters),TypeScript.parameters=Object.assign({storySource:{source:"args => <Tag {...args} />"}},TypeScript.parameters)},"./src/components/Tag/Tag.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Tag}));__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/tag/dist/chakra-ui-tag.esm.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chakra-ui-icon.esm.js"),react_icons_si__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/si/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),label={apollo:"Apollo",graphql:"GraphQL",react:"React",typescript:"TypeScript",nextjs:"Next.js"},Tag=function Tag(_ref){var name=_ref.name;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{size:"md",colorScheme:"teal",borderRadius:"full",variant:"outline",children:["apollo"===name?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{as:react_icons_si__WEBPACK_IMPORTED_MODULE_3__.a,w:4,h:4,display:"block",mr:2}):"graphql"===name?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{as:react_icons_si__WEBPACK_IMPORTED_MODULE_3__.b,w:4,h:4,display:"block",mr:2}):"nextjs"===name?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{as:react_icons_si__WEBPACK_IMPORTED_MODULE_3__.c,w:4,h:4,display:"block",mr:2}):"react"===name?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{as:react_icons_si__WEBPACK_IMPORTED_MODULE_3__.d,w:4,h:4,display:"block",mr:2}):"typescript"===name?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{as:react_icons_si__WEBPACK_IMPORTED_MODULE_3__.e,w:4,h:4,display:"block",mr:2}):null,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.c,{fontSize:14,fontWeight:700,children:label[name]})]})};Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"react"'},{value:'"apollo"'},{value:'"graphql"'},{value:'"typescript"'},{value:'"nextjs"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return Header.a})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Footer.a})),__webpack_require__.d(__webpack_exports__,"b",(function(){return GitHub_GitHubIcon})),__webpack_require__.d(__webpack_exports__,"f",(function(){return Twitter_TwitterIcon})),__webpack_require__.d(__webpack_exports__,"d",(function(){return Spacer_Spacer})),__webpack_require__.d(__webpack_exports__,"e",(function(){return Tag.a}));var Header=__webpack_require__("./src/components/Header/Header.tsx"),Footer=__webpack_require__("./src/components/Footer/Footer.tsx"),chakra_ui_layout_esm=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),chakra_ui_icon_esm=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chakra-ui-icon.esm.js"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),colors=__webpack_require__("./src/styles/colors.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),GitHub_GitHubIcon=function GitHubIcon(_ref){var width=_ref.width,height=_ref.height,_ref$display=_ref.display,display=void 0===_ref$display?"block":_ref$display,_ref$color=_ref.color,color=void 0===_ref$color?colors.a.white:_ref$color;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.p,{href:"https://github.com/kento-sasaki",isExternal:!0,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:index_esm.b,w:width,h:height,color:color,display:display})})};GitHub_GitHubIcon.displayName="GitHubIcon";try{GitHub_GitHubIcon.displayName="GitHubIcon",GitHub_GitHubIcon.__docgenInfo={description:"",displayName:"GitHubIcon",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},display:{defaultValue:{value:"block"},description:"",name:"display",required:!1,type:{name:"ResponsiveValue<Display>"}},color:{defaultValue:{value:"colors.white"},description:"",name:"color",required:!1,type:{name:'ResponsiveValue<Union<Color | "current" | "whiteAlpha.50" | "whiteAlpha.100" | "whiteAlpha.200" | "whiteAlpha.300" | "whiteAlpha.400" | "whiteAlpha.500" | "whiteAlpha.600" | "whiteAlpha.700" | ... 171 more ... | "telegram.900">>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/GitHub.tsx#GitHubIcon"]={docgenInfo:GitHub_GitHubIcon.__docgenInfo,name:"GitHubIcon",path:"src/components/Icons/GitHub.tsx#GitHubIcon"})}catch(__react_docgen_typescript_loader_error){}var Twitter_TwitterIcon=function TwitterIcon(_ref){var width=_ref.width,height=_ref.height,_ref$display=_ref.display,display=void 0===_ref$display?"block":_ref$display,_ref$color=_ref.color,color=void 0===_ref$color?colors.a.white:_ref$color;return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.p,{href:"https://twitter.com/kozukata1993",isExternal:!0,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:index_esm.c,w:width,h:height,color:color,display:display})})};Twitter_TwitterIcon.displayName="TwitterIcon";try{Twitter_TwitterIcon.displayName="TwitterIcon",Twitter_TwitterIcon.__docgenInfo={description:"",displayName:"TwitterIcon",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},display:{defaultValue:{value:"block"},description:"",name:"display",required:!1,type:{name:"ResponsiveValue<Display>"}},color:{defaultValue:{value:"colors.white"},description:"",name:"color",required:!1,type:{name:'ResponsiveValue<Union<Color | "current" | "whiteAlpha.50" | "whiteAlpha.100" | "whiteAlpha.200" | "whiteAlpha.300" | "whiteAlpha.400" | "whiteAlpha.500" | "whiteAlpha.600" | "whiteAlpha.700" | ... 171 more ... | "telegram.900">>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/Twitter.tsx#TwitterIcon"]={docgenInfo:Twitter_TwitterIcon.__docgenInfo,name:"TwitterIcon",path:"src/components/Icons/Twitter.tsx#TwitterIcon"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/react/index.js");var Spacer_Spacer=function Spacer(_ref){var size=_ref.size,horizontal=_ref.horizontal,px=size;return Object(jsx_runtime.jsx)("div",{style:horizontal?{width:px,height:"auto",display:"inline-block",flexShrink:0}:{width:"auto",height:px,display:"block",flexShrink:0}})};Spacer_Spacer.displayName="Spacer";try{Spacer_Spacer.displayName="Spacer",Spacer_Spacer.__docgenInfo={description:"",displayName:"Spacer",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spacer/Spacer.tsx#Spacer"]={docgenInfo:Spacer_Spacer.__docgenInfo,name:"Spacer",path:"src/components/Spacer/Spacer.tsx#Spacer"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/Layout/Layout.tsx");var Tag=__webpack_require__("./src/components/Tag/Tag.tsx");__webpack_require__("./src/components/ArticleCard/ArticleCard.tsx")},"./src/styles/colors.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return themeColors})),__webpack_require__.d(__webpack_exports__,"a",(function(){return colors}));__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.object.from-entries.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js");var themeColors={mosGreen:"#009394",white:"#FFFFFF",lightGray:"#E0DAD5",secondaryGray:"#3F3F3F",primaryGray:"#2F2F2F",black:"#000000"},entries=Object.keys(themeColors).map((function(color){return[color,"brand."+color]})),colors=Object.fromEntries(entries)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./node_modules/@chakra-ui/storybook-addon/preset/decorators/dist/chakra-ui-storybook-addon-preset-decorators.cjs.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);