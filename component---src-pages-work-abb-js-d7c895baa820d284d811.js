/*! For license information please see component---src-pages-work-abb-js-d7c895baa820d284d811.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/rpp":function(e,t,a){e.exports={imageAndText:"imageAndText-module--imageAndText--32Dj3",textSide:"imageAndText-module--textSide--2gZ_o",imageSide:"imageAndText-module--imageSide--2lTAl",title:"imageAndText-module--title--3YTj8",description:"imageAndText-module--description--34tt2"}},"3jbs":function(e,t,a){e.exports={centerTitle:"centerTitle-module--centerTitle--2zrwW",divider:"centerTitle-module--divider--2sn2H"}},"9Qe6":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("k3g1"),i=a.n(o);t.a=function(){return n.a.createElement("div",{className:i.a.fullWidthGrey})}},Ahmk:function(e,t,a){"use strict";var r=a("TSYQ"),n=a.n(r),o=a("q1tI"),i=a.n(o),s=a("3jbs"),l=a.n(s);t.a=function(e){return i.a.createElement("div",{className:n()(l.a.centerTitle,e.className)},i.a.createElement("h3",null,e.children),i.a.createElement("div",{className:l.a.divider}))}},"BL+a":function(e,t,a){"use strict";var r=a("z/o8"),n=a("q1tI"),o=a.n(n),i=a("L6NH"),s=a("TSYQ"),l=a.n(s),c=a("UDrt");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var m=n.createElement("path",{d:"M39.55 7.805H.79v1.247h38.76l-7.281 6.392.837.93L42.16 8.43 33.105.483l-.836.932 7.282 6.39z",fill:"#fff"});function d(e){return n.createElement("svg",u({width:43,height:17,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),m)}var f=a("kxRB"),h=a.n(f),g=function(e){return o.a.createElement("button",{className:l()(h.a.progressionButton,"previous"===e.type&&h.a.previous,"next"===e.type&&h.a.next),onClick:e.onClick},"previous"===e.type&&o.a.createElement(c.a,null),"next"===e.type&&o.a.createElement(d,null),o.a.createElement("div",{className:h.a.content},e.children))},p=a("r2Ca"),v=a.n(p),b=function(e){return o.a.createElement("div",{className:l()(v.a.descriptionBox,e.className),style:e.style,ref:e.boxRef},o.a.createElement("div",{className:v.a.dottedLine,ref:e.lineRef}),e.children)};t.a=function(e){var t,a,s=!!e.currentShowcase.node.featureDescriptions&&!!e.currentShowcase.node.featureDescriptions.length,l=Object(n.useRef)((e.currentShowcase.node.featureDescriptions||[]).map((function(){return o.a.createRef()}))),c=Object(n.useRef)((e.currentShowcase.node.featureDescriptions||[]).map((function(){return o.a.createRef()}))),u=Object(i.f)(null===(t=e.currentShowcase)||void 0===t||null===(a=t.node)||void 0===a?void 0:a.contentfulid),m=function(){return window.innerWidth/2},d=Object(n.useCallback)((function(e,t){r.a.from(e,{x:-m(),scrollTrigger:{id:"box-"+(t+1),trigger:e,start:"top center"}})}),[]),f=Object(n.useCallback)((function(e,t){r.a.from(e,{x:m(),scrollTrigger:{id:"box-"+(t+1),trigger:e,start:"top center"}})}),[]),h=Object(n.useCallback)((function(e,t){r.a.from(e,{opacity:0,scrollTrigger:{id:"line-"+(t+1),trigger:e,start:"bottom+=200 center"}})}),[]),p=Object(n.useCallback)((function(){l.current.forEach((function(e,t){t%2?f(e.current,t):d(e.current,t)}))}),[d,f]),E=Object(n.useCallback)((function(){c.current.forEach((function(e,t){h(e.current,t)}))}),[h]);Object(n.useEffect)((function(){s&&"undefined"!=typeof window&&(Object(i.g)(),p(),E())}),[s,p,E]);return e.children?o.a.createElement("div",{className:v.a.showCase,style:{background:e.bgColor?e.bgColor:"#fff",height:e.height,maxHeight:"180rem"}},o.a.createElement("h3",null,e.currentShowcase.node.title),o.a.createElement("div",{className:v.a.buttons},o.a.createElement(g,{type:"previous",onClick:e.handlePreviousShowcase},"Previous screen"),o.a.createElement(g,{type:"next",onClick:e.handleNextShowcase},"Next screen")),o.a.createElement("div",{className:v.a.content},e.children),s&&o.a.createElement("div",{className:v.a.descriptionBoxes},o.a.createElement("div",{style:{position:"relative"}},(e.currentShowcase.node.featureDescriptions||[]).map((function(e,t){return o.a.createElement(b,{key:e.id,className:t%2?v.a.descriptionBoxRight:v.a.descriptionBoxLeft,style:{top:u[t]},boxRef:l.current[t],lineRef:c.current[t]},e.description)}))))):null}},GLB2:function(e,t,a){e.exports={results:"results-module--results--2EBtw",title:"results-module--title--1fZ-1",description:"results-module--description--3F8L9",sections:"results-module--sections--38Kha",section1:"results-module--section1--1qUbW",section2:"results-module--section2--2-8Gb",content:"results-module--content--P6Ceg",section3:"results-module--section3--1CBQI",vareResults:"results-module--vareResults--1cFuX",ratingTitle:"results-module--ratingTitle--3AlSI",ratingSubtitle:"results-module--ratingSubtitle--3-7lO"}},GfmN:function(e,t,a){e.exports={quote:"quote-module--quote--e9e8k",quotationMarks:"quote-module--quotationMarks--1D53Y",quotationMark:"quote-module--quotationMark--3VJAf",apostrophe:"quote-module--apostrophe--31Ey3"}},LJqT:function(e,t,a){e.exports={feature:"feature-module--feature--3I5aT",header:"feature-module--header--3q4jP",icon:"feature-module--icon--3RWuj",titles:"feature-module--titles--WCVrU",title:"feature-module--title--1KKVg",description:"feature-module--description--3y_dn",subtitle:"feature-module--subtitle--LrkHt"}},Qg6O:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("LJqT"),i=a.n(o);t.a=function(e){return n.a.createElement("div",{className:i.a.feature},n.a.createElement("div",{className:i.a.header},!!e.svgPath&&n.a.createElement("img",{alt:"Feature icon",className:i.a.icon,src:e.svgPath}),n.a.createElement("div",{className:i.a.titles},n.a.createElement("div",{className:i.a.title},e.title),n.a.createElement("div",{className:i.a.subtitle},e.subtitle))),n.a.createElement("p",{className:i.a.description},e.paragraph))}},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},Ud9Q:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return y}));var r=a("8o2o"),n=a("mwIZ"),o=a.n(n),i=a("9eSz"),s=a.n(i),l=a("q1tI"),c=a.n(l),u=a("qhky"),m=a("Qg6O"),d=a("B1WW"),f=a("c9Zo"),h=a("cafg"),g=a("X7r7"),p=a("Y97W"),v=a("VOMB"),b=a("BL+a"),E=a("n3/e"),w=a.n(E),N=a("aUsD"),x=a.n(N),k=["work:abb:imageAndText2","work:abb:imageAndText4"],T=["work:abb:imageAndText1","work:abb:imageAndText3"];t.default=function(e){var t,a,n=e.data,i=Object(r.a)(e,["data"]),E=Object(l.useState)(0),N=E[0],y=E[1],S=n.showcase.edges.find((function(e){return e.node.contentfulid==="work:abb:showcase"+(N+1)})),A=o()(S,"node.images[0]"),B=function(e){return e&&e.node&&e.node.contentfulid&&e.node.title&&e.node.description&&e.node.image?c.a.createElement(g.a,{key:e.node.contentfulid,title:e.node.title,description:e.node.description,imagePath:e.node.image&&e.node.image.fluid,isReversed:k.includes(e.node.contentfulid),hasGreyBackground:T.includes(e.node.contentfulid)}):null};return c.a.createElement("div",{className:w.a.page},c.a.createElement(u.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"Neptune Studios | Case ABB"),c.a.createElement("link",{rel:"canonical",href:"https://neptunestudios.com/work/abb"})),c.a.createElement(f.a,{currentPath:i.path}),c.a.createElement(h.a,{className:x.a.abbHero,title:n.hero.title,subtitle:n.hero.subtitle,description:n.hero.description,heroClassName:x.a.abbHeroImage,heroAlt:"Tablets with ABB application",heroImage:null===(t=n.hero)||void 0===t||null===(a=t.image)||void 0===a?void 0:a.fluid,linkBackTo:"/work"}),c.a.createElement("div",{className:w.a.content},c.a.createElement("div",{className:x.a.abbFeatures},n.tripleFeature.feature.map((function(e,t){return c.a.createElement(m.a,{key:e.title+":"+t,svgPath:e.svgImage.file.url,title:e.title,subtitle:e.subtitle,paragraph:e.description.description})}))),B(n.imageAndText.edges.find((function(e){return"work:abb:imageAndText1"===e.node.contentfulid}))),B(n.imageAndText.edges.find((function(e){return"work:abb:imageAndText2"===e.node.contentfulid}))),B(n.imageAndText.edges.find((function(e){return"work:abb:imageAndText3"===e.node.contentfulid}))),B(n.imageAndText.edges.find((function(e){return"work:abb:imageAndText4"===e.node.contentfulid}))),c.a.createElement(b.a,{bgColor:"#21B8BF",height:A.file.details.image.height+240,currentShowcase:S,handlePreviousShowcase:function(){y(0===N?n.showcase.edges.length-1:N-1)},handleNextShowcase:function(){N===n.showcase.edges.length-1?y(0):y(N+1)}},!!A&&c.a.createElement(s.a,{fluid:A.fluid,style:{width:"100%"},imgStyle:{width:"75%",height:"unset",left:0,right:0,margin:"0 auto",objectFit:"contain"}})),c.a.createElement(p.a,{quote:n.quotation}),c.a.createElement(v.b,{results:n.results})),c.a.createElement(d.a,null))};var y="93913382"},VOMB:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("TSYQ"),n=a.n(r),o=a("q1tI"),i=a.n(o),s=a("Ahmk"),l=a("Rmet"),c=a("GLB2"),u=a.n(c),m=function(e){return i.a.createElement("div",{className:n()(u.a.results,u.a.vareResults)},i.a.createElement(s.a,{className:u.a.title},e.results.title),i.a.createElement("div",{className:u.a.sections},i.a.createElement("div",{className:u.a.section1},i.a.createElement("div",{className:u.a.content},i.a.createElement(l.a,{className:u.a.description,rawText:e.results.description}))),i.a.createElement("div",{className:u.a.section2},i.a.createElement("div",{className:u.a.content},i.a.createElement("h3",{className:u.a.title},e.results.title2),i.a.createElement("div",{className:u.a.description},e.results.description2))),i.a.createElement("div",{className:u.a.section3},i.a.createElement("div",{className:u.a.content},i.a.createElement("div",null,i.a.createElement("h3",{className:u.a.ratingTitle},e.results.title3),i.a.createElement("div",{className:u.a.ratingSubtitle},e.results.description3)),i.a.createElement("div",null,i.a.createElement("h3",{className:u.a.ratingTitle},e.results.title4),i.a.createElement("div",{className:u.a.ratingSubtitle},e.results.description4))))))};t.b=function(e){return i.a.createElement("div",{className:u.a.results},i.a.createElement(s.a,{className:u.a.title},e.results.title),i.a.createElement("div",{className:u.a.sections},i.a.createElement("div",{className:u.a.section1},i.a.createElement("div",{className:u.a.content},i.a.createElement(l.a,{className:u.a.description,rawText:e.results.description}))),i.a.createElement("div",{className:u.a.section2},i.a.createElement("div",{className:u.a.content},i.a.createElement("h3",{className:u.a.title},e.results.title2),i.a.createElement("div",{className:u.a.description},e.results.description2)))))}},X7r7:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("9eSz"),o=a.n(n),i=a("q1tI"),s=a.n(i),l=a("8E2/"),c=a.n(l),u=a("9Qe6"),m=a("Rmet"),d=a("/rpp"),f=a.n(d);t.a=function(e){return s.a.createElement("div",{className:f.a.imageAndText,style:e.isReversed?{flexDirection:"row-reverse"}:{}},e.hasGreyBackground&&s.a.createElement(u.a,null),s.a.createElement("div",{className:f.a.textSide,style:e.textSideStyle},s.a.createElement("h2",{className:f.a.title},e.title),s.a.createElement(m.a,{className:f.a.description,rawText:e.description}),!!e.linkTo&&s.a.createElement(r.a,{className:c.a.button,to:e.linkTo},"Go to "+e.title)),s.a.createElement("div",{className:f.a.imageSide,style:e.imageSideStyle},!!e.imagePath&&s.a.createElement(o.a,{fluid:e.imagePath,style:{maxHeight:e.maxHeight||800},imgStyle:{maxHeight:e.maxHeight||800,objectFit:"contain"}})))}},Y97W:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("GfmN"),i=a.n(o),s=function(){return n.a.createElement("div",{className:i.a.quotationMarks},n.a.createElement("div",{className:i.a.quotationMark},n.a.createElement("div",{className:i.a.apostrophe}),n.a.createElement("div",{className:i.a.apostrophe})),n.a.createElement("div",{className:i.a.quotationMark},n.a.createElement("div",{className:i.a.apostrophe}),n.a.createElement("div",{className:i.a.apostrophe})))};t.a=function(e){return e.quote?n.a.createElement("div",{className:i.a.quote},n.a.createElement(s,null),n.a.createElement("h3",{className:i.a.text},e.quote.quote)):null}},aUsD:function(e,t,a){e.exports={workHero:"work-module--workHero--ejtJn hero-module--hero--2hjsV",workHeroImage:"work-module--workHeroImage--2_x2r hero-module--image--2EAX4",workCases:"work-module--workCases--2Iu4-",vareHero:"work-module--vareHero--1BdEE hero-module--hero--2hjsV",vareHeroImage:"work-module--vareHeroImage--1EfrF hero-module--image--2EAX4",vareFeatures:"work-module--vareFeatures--1Ulz6",abbHero:"work-module--abbHero--9515A hero-module--hero--2hjsV",abbHeroImage:"work-module--abbHeroImage--24bul hero-module--image--2EAX4",abbFeatures:"work-module--abbFeatures--9kNAn",macgregorHero:"work-module--macgregorHero--2Q8im hero-module--hero--2hjsV",macgregorHeroImage:"work-module--macgregorHeroImage--1IC3K hero-module--image--2EAX4",macgregorFeatures:"work-module--macgregorFeatures--1SXtu",variousHero:"work-module--variousHero--27USO hero-module--hero--2hjsV",variousHeroImage:"work-module--variousHeroImage--20SPa hero-module--image--2EAX4"}},k3g1:function(e,t,a){e.exports={fullWidthBackground:"fullWidth-module--fullWidthBackground--2IumJ",fullWidthGrey:"fullWidth-module--fullWidthGrey--GX5XO"}},r2Ca:function(e,t,a){e.exports={showCase:"showcase-module--showCase--3UkYd",buttons:"showcase-module--buttons--3-0bT",content:"showcase-module--content--1Xaz8",descriptionBoxes:"showcase-module--descriptionBoxes--AyGU7",descriptionBox:"showcase-module--descriptionBox--3QmA7",descriptionBoxLeft:"showcase-module--descriptionBoxLeft--2T45R",descriptionBoxRight:"showcase-module--descriptionBoxRight--2eS2W",dottedLine:"showcase-module--dottedLine--aGMmg",breadcrumbs:"showcase-module--breadcrumbs--ZgDY8",breadcrumb:"showcase-module--breadcrumb--_PFbL",activeBreadcrumb:"showcase-module--activeBreadcrumb--2sxYH showcase-module--breadcrumb--_PFbL"}}}]);
//# sourceMappingURL=component---src-pages-work-abb-js-d7c895baa820d284d811.js.map