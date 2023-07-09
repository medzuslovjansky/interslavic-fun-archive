"use strict";(self.webpackChunkinterslavic_fun=self.webpackChunkinterslavic_fun||[]).push([[7918],{7694:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});n(7294);var s=n(5463),a=n(1871),i=n(5893);function l(){const{metadata:e,frontMatter:t,assets:n}=(0,a.k)();return(0,i.jsx)(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var o=n(6010),r=n(3488),c=n(7325),d=n(3672);function u(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(d.Z,{...t,subLabel:(0,i.jsx)(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(d.Z,{...n,subLabel:(0,i.jsx)(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function m(){const{metadata:e}=(0,a.k)();return(0,i.jsx)(u,{previous:e.previous,next:e.next})}var h=n(9962),g=n(3699),x=n(868),p=n(3702),j=n(6409),v=n(8801);const b={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function f(e){const t=b[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function N(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(g.Z,{to:n,onClick:s,children:(0,i.jsx)(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function M(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,h.Z)(),{pluginId:a}=(0,x.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,j.J)(a),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,x.Jo)(a),d=r??(u=c).docs.find((e=>e.id===u.mainDocId));var u;return(0,i.jsxs)("div",{className:(0,o.Z)(t,p.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(f,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(N,{versionLabel:c.label,to:d.path,onClick:()=>l(c.name)})})]})}function L(e){let{className:t}=e;const n=(0,v.E)();return n.banner?(0,i.jsx)(M,{className:t,versionMetadata:n}):null}function Z(e){let{className:t}=e;const n=(0,v.E)();return n.badge?(0,i.jsx)("span",{className:(0,o.Z)(t,p.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(c.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function C(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,i.jsx)(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function T(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,i.jsxs)("span",{className:p.k.common.lastUpdated,children:[(0,i.jsx)(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,i.jsx)(C,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,i.jsx)(T,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var k=n(4850),I=n(4597);const _={lastUpdated:"lastUpdated_vwxv"};function A(e){return(0,i.jsx)("div",{className:(0,o.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(I.Z,{...e})})})}function D(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,i.jsxs)("div",{className:(0,o.Z)(p.k.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(k.Z,{editUrl:t})}),(0,i.jsx)("div",{className:(0,o.Z)("col",_.lastUpdated),children:(n||s)&&(0,i.jsx)(y,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function E(){const{metadata:e}=(0,a.k)(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:l,tags:r}=e,c=r.length>0,d=!!(t||n||l);return c||d?(0,i.jsxs)("footer",{className:(0,o.Z)(p.k.docs.docFooter,"docusaurus-mt-lg"),children:[c&&(0,i.jsx)(A,{tags:r}),d&&(0,i.jsx)(D,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:s})]}):null}var U=n(4639),w=n(2728);const O={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function z(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,o.Z)("clean-btn",O.tocCollapsibleButton,!t&&O.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const H={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function S(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:l,toggleCollapsed:r}=(0,U.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,o.Z)(H.tocCollapsible,!l&&H.tocCollapsibleExpanded,n),children:[(0,i.jsx)(z,{collapsed:l,onClick:r}),(0,i.jsx)(U.z,{lazy:!0,className:H.tocCollapsibleContent,collapsed:l,children:(0,i.jsx)(w.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const B={tocMobile:"tocMobile_ITEo"};function P(){const{toc:e,frontMatter:t}=(0,a.k)();return(0,i.jsx)(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.Z)(p.k.docs.docTocMobile,B.tocMobile)})}var Q=n(7086);function V(){const{toc:e,frontMatter:t}=(0,a.k)();return(0,i.jsx)(Q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var F=n(3899),G=n(2381);function R(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,a.k)();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,o.Z)(p.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(F.Z,{as:"h1",children:n})}),(0,i.jsx)(G.Z,{children:t})]})}var Y=n(8259),W=n(9003),q=n(9524);function $(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const K={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function X(){const e=(0,q.Z)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(g.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)($,{className:K.breadcrumbHomeIcon})})})}const J={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ee(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(g.Z,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function te(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ne(){const e=(0,Y.s1)(),t=(0,W.Ns)();return e?(0,i.jsx)("nav",{className:(0,o.Z)(p.k.docs.docBreadcrumbs,J.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(X,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(te,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(ee,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var se=n(9501);const ae={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ie(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,a.k)(),n=(0,r.i)(),s=e.hide_table_of_contents,l=!s&&t.length>0;return{hidden:s,mobile:l?(0,i.jsx)(P,{}):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(V,{})}}(),{metadata:{unlisted:s}}=(0,a.k)();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,o.Z)("col",!n.hidden&&ae.docItemCol),children:[s&&(0,i.jsx)(se.Z,{}),(0,i.jsx)(L,{}),(0,i.jsxs)("div",{className:ae.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(ne,{}),(0,i.jsx)(Z,{}),n.mobile,(0,i.jsx)(R,{children:t}),(0,i.jsx)(E,{})]}),(0,i.jsx)(m,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function le(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return(0,i.jsx)(a.b,{content:e.content,children:(0,i.jsxs)(s.FG,{className:t,children:[(0,i.jsx)(l,{}),(0,i.jsx)(ie,{children:(0,i.jsx)(n,{})})]})})}},7086:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(6010),a=n(2728);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(5893);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.Z,{...n,linkClassName:o,linkActiveClassName:r})})}},2728:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(7294),a=n(107);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(3699),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const g=s.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,a.L)(),p=c??x.tableOfContents.minHeadingLevel,j=u??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:j});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:j}}),[o,r,p,j])),(0,m.jsx)(g,{toc:v,className:n,linkClassName:o,...h})}},9501:(e,t,n)=>{n.d(t,{Z:()=>h});n(7294);var s=n(6010),a=n(7325),i=n(1514),l=n(5893);function o(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(3702),u=n(8201);function m(e){let{className:t}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}},1293:(e,t,n)=>{n.d(t,{jL:()=>N,lr:()=>A,pz:()=>q,o8:()=>ee,AN:()=>Q,n$:()=>te});var s=n(7294),a=n(6010);const i={root:"root_birv"};var l;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},o.apply(this,arguments)}const r=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",o({width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,l||(l=s.createElement("path",{d:"M14.993 11.064c-1.45 1.864-4.099 4.66-5.9 6.406-1.8-1.746-4.83-4.172-6.242-6.066-.338-.453 4.823-6.367 6.409-8.372 1.585 2.005 6.59 6.931 5.733 8.032ZM10.278.656c-.794-.679-1.469-.793-2.368 0C5.93 2.398-.436 9.96.042 11.342c1.19 3.44 5.837 6.894 8.206 9.339.287.296.58.366.846.291.266.075 7.861-6.19 9.052-9.63.478-1.382-5.865-8.974-7.868-10.686",fill:"#D5DEEB"})))};var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",d({width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,c||(c=s.createElement("path",{d:"M7.26 5.915a24.55 24.55 0 0 0-2.749 2.813c-.85-1.692-1.436-3.497-1.676-5.299 1.413.628 2.935 1.477 4.426 2.486Zm2.224 1.66c1.31 1.073 2.531 2.26 3.547 3.527a17.01 17.01 0 0 1-3.547 3.704 16.974 16.974 0 0 1-3.548-3.704c1.016-1.267 2.239-2.454 3.548-3.528Zm6.647-4.146c-.239 1.802-.825 3.607-1.675 5.299a24.546 24.546 0 0 0-2.749-2.813c1.49-1.01 3.011-1.858 4.424-2.486Zm-4.216 12.878c.986-.85 1.883-1.81 2.696-2.835.703 1.295 1.166 2.635 1.264 3.99-1.384-.142-2.71-.553-3.96-1.155Zm-8.823 1.155c.098-1.355.56-2.695 1.264-3.99a20.884 20.884 0 0 0 2.696 2.835c-1.248.602-2.575 1.013-3.96 1.155ZM.099 20.104c1.686 1.358 7.43-.844 9.137-1.857.085-.05.164-.11.248-.163.084.053.163.113.247.163 1.706 1.013 7.45 3.215 9.137 1.857.237-.19.275-4.235-2.652-8.94.493-.82.942-1.663 1.32-2.53.963-2.208 1.44-4.672 1.431-7.085 0-.202-.04-.38-.105-.534-.17-.666-.777-1.242-1.602-.926-3.115 1.195-5.669 2.594-7.776 4.085C7.377 2.683 4.822 1.284 1.708.089.882-.227.275.35.105 1.015A1.385 1.385 0 0 0 0 1.549C-.009 3.962.47 6.426 1.43 8.634c.38.867.828 1.71 1.32 2.53C-.174 15.87-.137 19.914.1 20.104",fill:"#D5DEEB"})))};var m=n(5893);function h(e){return e%2==0?(0,m.jsx)(r,{},e):(0,m.jsx)(u,{},e)}function g(){return(0,m.jsx)("div",{className:i.root,children:[1,2,3,4,5,6,7,8,9].map(h)})}const x="root_KRXN",p="image_Fs90",j="content_oIQC",v="title_Ut4b",b="description_aGav",f="cta_l4ik";const N=function(e){let{image:t,title:n,description:i,cta:l}=e;return(0,m.jsxs)("section",{className:(0,a.Z)(x),children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:(0,a.Z)("container","col","col--6",j),children:[(0,m.jsx)("h2",{className:(0,a.Z)("hero__heading",v),children:n}),(0,m.jsx)("p",{className:(0,a.Z)("hero__subtitle",b),children:i}),s.cloneElement(l,{className:(0,a.Z)(f,l.props.className)})]}),(0,m.jsx)("img",{className:(0,a.Z)("col","col--6",p),src:t,alt:""})]}),(0,m.jsx)(g,{})]})},M="root_Vlmr",L=e=>{let{children:t,interval:n=1e4}=e;s.Children.count(t);const[i,l]=(0,s.useState)(0);return(0,m.jsx)("div",{className:(0,a.Z)(M),children:s.Children.toArray(t)[i]})},Z="root_P3PE",C="content_YXIA",T="image_jwsx",y="title_vMKl",k="subtitle_UdXd",I="cta_H9t5";const _=function(e){let{title:t,subtitle:n,cta:i,image:l}=e;return(0,m.jsxs)("div",{className:(0,a.Z)("hero",Z),children:[(0,m.jsx)("img",{src:l,alt:"",className:(0,a.Z)(T)}),(0,m.jsxs)("div",{className:(0,a.Z)(C),children:[(0,m.jsx)("h1",{className:(0,a.Z)("hero__heading",y),children:t}),(0,m.jsx)("p",{className:(0,a.Z)("hero__subtitle",k),children:n}),s.cloneElement(i,{className:(0,a.Z)("button","button--lg","button--primary",I,i.props.className)})]})]})};L.Slide=_;const A=L,D={root:"root_S0Pk",title:"title_lCT1",image:"image_B1Xl"};function E(e){let{className:t,image:n,title:s,description:i}=e;return(0,m.jsxs)("div",{className:(0,a.Z)(t,D.root),children:[(0,m.jsx)("div",{className:"text--center",children:(0,m.jsx)("img",{src:n,alt:"",className:(0,a.Z)(D.image)})}),(0,m.jsxs)("div",{className:"padding-horiz--md",children:[(0,m.jsx)("h2",{className:(0,a.Z)(D.title),children:s}),(0,m.jsx)("p",{className:(0,a.Z)(D.description),children:i})]})]})}E.displayName="Features.Card";const U="root_agY0",w="actions_WULL",O="primaryAction_LMlh",z="secondaryAction_wVbS",H={root:"root_zuIk"};function S(e,t){const n=[];for(let s=0;s<e;s++)n.push(t(s));return n}function B(){return(0,m.jsx)("div",{className:H.root,children:S(3,(e=>(0,m.jsx)("img",{alt:"",src:n(9238).Z},e)))})}const P=function(e){let{className:t,children:n,primaryAction:i,secondaryAction:l}=e;return(0,m.jsxs)("section",{className:(0,a.Z)(U,t),children:[(0,m.jsx)("div",{className:"row",children:s.Children.map(n,(e=>s.cloneElement(e,{className:(0,a.Z)("col","col--4",e.props.className)})))}),(0,m.jsx)("div",{className:(0,a.Z)("row"),children:(0,m.jsxs)("div",{className:(0,a.Z)("col",w),children:[s.cloneElement(i,{className:(0,a.Z)("button","button--primary","button--lg",O,i.props.className)}),s.cloneElement(l,{className:(0,a.Z)(z,l.props.className)})]})}),(0,m.jsx)(B,{})]})};P.Card=E;const Q=P;var V=n(3699),F=n(7325),G=n(8201);function R(e){let{origin:t,author:n}=e;return(0,m.jsx)(G.Z,{type:"info",title:(0,F.I)({id:"com.admonitions.license.title",message:"Legal information"}),children:(0,m.jsx)(F.Z,{id:"com.admonitions.license.republish.message",values:{author:(0,m.jsx)("b",{children:n}),republished:(0,m.jsx)(V.Z,{to:t,children:(0,F.I)({id:"com.admonitions.license.republish.link",message:"republished"})})},children:"This article has been {republished} with the permission of its original author, {author}."})})}var Y=n(1871);function W(){const{license:e,origin:t,author:n}=function(){const{frontMatter:e}=(0,Y.k)(),{license:t,origin:n,author:s}=e;return{license:t,origin:n,author:s}}();return"republish"===e?(0,m.jsx)(R,{origin:t,author:n}):null}const q=()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(W,{})});var $=n(9962);function K(e){let{editUrl:t}=e;return(0,m.jsx)(G.Z,{type:"caution",title:(0,F.I)({id:"com.admonitions.autotranslation.title",message:"Automatic translation"}),children:(0,m.jsx)(F.Z,{id:"com.admonitions.autotranslation.message",values:{Discord:(0,m.jsx)(V.Z,{to:"https://discord.com/invite/n3saqm27QW",children:"Discord"}),GitHub:(0,m.jsx)(V.Z,{to:t,children:"GitHub"})},children:"This article has been automatically translated and may contain any kind of errors.\nIt is a challenging task to provide more than a dozen translation targets, and we are looking for your help with translations.\nPlease contact us on {Discord} if you want to help us improve the quality of our translations.\nAlso, you can suggest corrections directly via {GitHub}."})})}function X(){return(0,m.jsx)(G.Z,{type:"danger",title:(0,F.I)({id:"com.admonitions.missingTranslation.title",message:"Missing translation"}),children:(0,m.jsx)(F.Z,{id:"com.admonitions.missingTranslation.message",values:{Discord:(0,m.jsx)(V.Z,{to:"https://discord.com/invite/n3saqm27QW",children:"Discord"})},children:"This article has not yet been translated.\nProviding translation in over ten languages is a challenging task and we look forward to your help.\nPlease contact us on {Discord} if you would like to help us improve the quality of our translations."})})}function J(){const{i18n:e}=(0,$.Z)();if(!(e.currentLocale!==e.defaultLocale))return null;const{frontMatter:t,metadata:n}=(0,Y.k)();return n.source.startsWith("@site/i18n/")?t.verified?null:(0,m.jsx)(K,{editUrl:n.editUrl}):(0,m.jsx)(X,{})}const ee=()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(J,{})}),te=e=>{let{script:t="art",children:n}=e;return(0,m.jsx)("span",{lang:`${t}-fonipa`,className:"notranslate",translate:"no",children:n})}},4308:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(8241),a=n(1293);const i={...s.Z,CustomAfterSection:a.pz,CustomBeforeSection:a.o8,IPA:a.n$}},9238:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAzMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNjc5MTEgMTEuMzcyNUM4LjY0MzExIDEzLjY3NzkgMTMuMzk5MSA0LjU1MjUyIDEyLjAyNTggMi4xNzkxOEMxMS4zNjU4IDEuMDM5MTggMC44NDMxMDggLTIuNDYzNDggMC4yNDA0NDIgMi44OTkxOEMwLjAxNjQ0MTYgNC44NTkxOCAxLjkxNjQ0IDYuMjM5MTggMy44OTUxMSA2LjI4MTg1QzMuMDE5MTEgOC4yMTExOCAyLjk5Nzc3IDEwLjM5NjUgNC42NzkxMSAxMS4zNzI1WiIgZmlsbD0iIzRDNTg3QiIvPgo8cGF0aCBkPSJNMjcuMzI3NSAxMS40ODY5QzI4Ljg3NjggMTAuMjY4MyAyOC41Mjc1IDcuOTQ4MjYgMjcuMTcxNSA2LjUxMzZDMjkuMTU5NSA1Ljc3ODkzIDMwLjczMDEgNC4yNjAyNiAzMC4yNDQ4IDIuMzc4OTNDMjkuMTAyMSAtMi4wNTk3NCAxOS4yNTk1IDAuOTUzNTk2IDE4LjU0MDggMy41OTg5M0MxOC4xOTE1IDQuODcyMjYgMjMuMDg2MSAxNC44MjAzIDI3LjMyNzUgMTEuNDg2OVoiIGZpbGw9IiM0QzU4N0IiLz4KPHBhdGggZD0iTTE0Ljg4MzUgMTYuNjg3NUMxNi4xNzQyIDE4LjM2NzUgMTguMDg3NSAxOS40MTgxIDE5Ljc0MzUgMTguNDAwOEMyMy42NDQ5IDE1Ljk5NDEgMTcuODUwMiA3LjQ5MDE0IDE1LjExNTUgNy41ODM0N0MxMy43ODg5IDcuNjI0OCA1LjczOTU1IDE1LjI0NDggMTAuMTgyMiAxOC4zMTI4QzExLjc5OTUgMTkuNDMyOCAxMy45MTI5IDE4LjQxMTUgMTQuODgzNSAxNi42ODc1WiIgZmlsbD0iIzRDNTg3QiIvPgo8L3N2Zz4K"}}]);