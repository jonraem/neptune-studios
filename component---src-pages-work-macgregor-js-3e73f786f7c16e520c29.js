/*! For license information please see component---src-pages-work-macgregor-js-3e73f786f7c16e520c29.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/rpp":function(e,t,a){e.exports={imageAndText:"imageAndText-module--imageAndText--32Dj3",textSide:"imageAndText-module--textSide--2gZ_o",imageSide:"imageAndText-module--imageSide--2lTAl",title:"imageAndText-module--title--3YTj8",description:"imageAndText-module--description--34tt2"}},"0lzk":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return q}));var n=a("zLVn"),r=a("mwIZ"),i=a.n(r),o=a("9eSz"),l=a.n(o),s=a("q1tI"),c=a.n(s),m=a("qhky"),u=a("Qg6O"),d=a("B1WW"),g=a("D4TM"),h=a("c9Zo"),f=a("cafg"),p=a("X7r7"),v=a("Y97W"),E=a("VOMB"),w=a("BL+a"),N=a("wCPA"),x=a("L6NH"),k=a("n3/e"),b=a.n(k),T=a("aUsD"),y=a.n(T),A=["work:macgregor:imageAndText2","work:macgregor:imageAndText3","work:macgregor:imageAndText4","work:macgregor:imageAndText6"],S=["work:macgregor:imageAndText3"];t.default=function(e){var t,a,r,o,k=e.data,T=Object(n.a)(e,["data"]),q=Object(s.useState)(0),H=q[0],B=q[1],I=k.showcase.edges.find((function(e){return e.node.contentfulid==="work:macgregor:showcase"+(H+1)})),j=[i()(I,"node.images[0]"),i()(I,"node.images[1]")].filter((function(e){return!!e})),C=function(e){return e&&e.node&&e.node.contentfulid&&e.node.title&&e.node.description&&e.node.image?c.a.createElement(p.a,{key:e.node.contentfulid,title:e.node.title,description:e.node.description.childContentfulRichText.html,imagePath:e.node.image&&e.node.image.fluid,maxHeight:500,isReversed:A.includes(e.node.contentfulid),hasGreyBackground:S.includes(e.node.contentfulid)}):null};return c.a.createElement("div",{className:b.a.page},c.a.createElement(m.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"Neptune Studios | Case MacGregor"),c.a.createElement("link",{rel:"canonical",href:"https://neptunestudios.com/work/macgregor"})),c.a.createElement(h.a,{currentPath:T.path}),c.a.createElement(f.a,{className:y.a.macgregorHero,title:k.hero.title,subtitle:k.hero.subtitle,description:null===(t=k.hero.description)||void 0===t||null===(a=t.childContentfulRichText)||void 0===a?void 0:a.html,heroClassName:y.a.macgregorHeroImage,heroAlt:"Phone with MacGregor application",heroImage:null===(r=k.hero)||void 0===r||null===(o=r.image)||void 0===o?void 0:o.fluid}),c.a.createElement("div",{className:b.a.content},c.a.createElement("div",{className:y.a.macgregorFeatures},k.tripleFeature.feature.map((function(e,t){return c.a.createElement(u.a,{key:e.title+":"+t,svgPath:e.svgImage.file.url,title:e.title,subtitle:e.subtitle,paragraph:e.description.description})}))),c.a.createElement(N.a,{title:k.timeline.title,timelineItems:k.timeline.timelineItems}),C(k.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText1"===e.node.contentfulid}))),C(k.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText2"===e.node.contentfulid}))),c.a.createElement(v.a,{quote:Object(x.a)(k,"work:macgregor:quotation1")}),C(k.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText3"===e.node.contentfulid}))),C(k.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText4"===e.node.contentfulid}))),c.a.createElement(g.a,{imagePath:k.fullWidthBackground.image&&k.fullWidthBackground.image.fluid,height:"54rem"}),C(k.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText5"===e.node.contentfulid}))),C(k.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText6"===e.node.contentfulid}))),c.a.createElement(w.a,{title:I.node.title,featureDescriptions:I.node.featureDescriptions,bgColor:"#3D68B0",height:!!j.length&&j[0].file.details.image.height/2,handlePreviousShowcase:function(){B(0===H?k.showcase.edges.length-1:H-1)},handleNextShowcase:function(){H===k.showcase.edges.length-1?B(0):B(H+1)}},!!j.length&&c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{fluid:j[0].fluid,style:{width:"40%"},imgStyle:{width:"75%",height:"45rem",left:0,right:0,margin:"0 auto",objectFit:"contain"}}),c.a.createElement(l.a,{fluid:j[1].fluid,style:{width:"40%"},imgStyle:{width:"75%",height:"45rem",left:0,right:0,margin:"0 auto",objectFit:"contain"}}))),c.a.createElement(v.a,{quote:Object(x.a)(k,"work:macgregor:quotation2")}),c.a.createElement(E.b,{results:k.results})),c.a.createElement(d.a,null))};var q="1294880221"},"0poj":function(e,t,a){e.exports={timeline:"timeline-module--timeline--20MtR global-module--fullWidthGrey--2E0Wg",item:"timeline-module--item--A7Dws",title:"timeline-module--title--1JxYm",description:"timeline-module--description--2U6HK",point:"timeline-module--point--2Tx9w",line:"timeline-module--line--3uv7B"}},"3jbs":function(e,t,a){e.exports={centerTitle:"centerTitle-module--centerTitle--2zrwW",divider:"centerTitle-module--divider--2sn2H"}},Ahmk:function(e,t,a){"use strict";var n=a("TSYQ"),r=a.n(n),i=a("q1tI"),o=a.n(i),l=a("3jbs"),s=a.n(l);t.a=function(e){return o.a.createElement("div",{className:r()(s.a.centerTitle,e.className)},o.a.createElement("h3",null,e.children),o.a.createElement("div",{className:s.a.divider}))}},"BL+a":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),o=a.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=n.createElement("path",{d:"M3.45 9.195h38.76V7.948H3.45l7.282-6.392-.837-.93L.839 8.57l9.056 7.946.837-.932-7.283-6.39z",fill:"#fff"});function c(e){return n.createElement("svg",l({width:43,height:17,fill:"none"},e),s)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=n.createElement("path",{d:"M39.55 7.805H.79v1.247h38.76l-7.281 6.392.837.93L42.16 8.43 33.105.483l-.836.932 7.282 6.39z",fill:"#fff"});function d(e){return n.createElement("svg",m({width:43,height:17,fill:"none"},e),u)}var g=a("kxRB"),h=a.n(g),f=function(e){return r.a.createElement("button",{className:o()(h.a.progressionButton,"previous"===e.type&&h.a.previous,"next"===e.type&&h.a.next),onClick:e.onClick},"previous"===e.type&&r.a.createElement(c,null),"next"===e.type&&r.a.createElement(d,null),r.a.createElement("div",{className:h.a.content},e.children))},p=a("r2Ca"),v=a.n(p);t.a=function(e){var t=!!e.featureDescriptions&&!!e.featureDescriptions.length,a=e.handleAnimate;return Object(n.useEffect)((function(){a&&t&&"undefined"!=typeof window&&a()}),[a,t]),e.children?r.a.createElement("div",{className:v.a.showCase,style:{background:e.bgColor?e.bgColor:"#fff",height:!!e.height&&e.height,maxHeight:"180rem"}},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:v.a.buttons},r.a.createElement(f,{type:"previous",onClick:e.handlePreviousShowcase},"Previous screen"),r.a.createElement(f,{type:"next",onClick:e.handleNextShowcase},"Next screen")),r.a.createElement("div",{className:v.a.content},e.children),t&&r.a.createElement("div",{className:v.a.descriptionBoxes},e.featureDescriptions)):null}},D4TM:function(e,t,a){"use strict";var n=a("9eSz"),r=a.n(n),i=a("q1tI"),o=a.n(i),l=a("F8e1"),s=a.n(l);t.a=function(e){return o.a.createElement("div",{className:s.a.fullWidthBackground},o.a.createElement(r.a,{fluid:e.imagePath,style:{position:"relative",height:e.height||"40rem",width:"100%",overflow:"visible"},imgStyle:{position:"absolute",height:"100%",width:"100vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",objectFit:"cover"}}))}},F8e1:function(e,t,a){e.exports={fullWidthBackground:"fullWidthBackground-module--fullWidthBackground--18lUq global-module--fullWidthGrey--2E0Wg"}},GLB2:function(e,t,a){e.exports={results:"results-module--results--2EBtw",title:"results-module--title--1fZ-1",description:"results-module--description--3F8L9",sections:"results-module--sections--38Kha",section1:"results-module--section1--1qUbW",section2:"results-module--section2--2-8Gb",content:"results-module--content--P6Ceg",section3:"results-module--section3--1CBQI",vareResults:"results-module--vareResults--1cFuX",ratingTitle:"results-module--ratingTitle--3AlSI",ratingSubtitle:"results-module--ratingSubtitle--3-7lO"}},GfmN:function(e,t,a){e.exports={quote:"quote-module--quote--e9e8k",quotationMarks:"quote-module--quotationMarks--1D53Y",quotationMark:"quote-module--quotationMark--3VJAf",apostrophe:"quote-module--apostrophe--31Ey3"}},LJqT:function(e,t,a){e.exports={feature:"feature-module--feature--3I5aT",header:"feature-module--header--3q4jP",icon:"feature-module--icon--3RWuj",titles:"feature-module--titles--WCVrU",title:"feature-module--title--1KKVg",description:"feature-module--description--3y_dn",subtitle:"feature-module--subtitle--LrkHt"}},Qg6O:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("LJqT"),o=a.n(i);t.a=function(e){return r.a.createElement("div",{className:o.a.feature},r.a.createElement("div",{className:o.a.header},!!e.svgPath&&r.a.createElement("img",{alt:"Feature icon",className:o.a.icon,src:e.svgPath}),r.a.createElement("div",{className:o.a.titles},r.a.createElement("div",{className:o.a.title},e.title),r.a.createElement("div",{className:o.a.subtitle},e.subtitle))),r.a.createElement("p",{className:o.a.description},e.paragraph))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},VOMB:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("TSYQ"),r=a.n(n),i=a("q1tI"),o=a.n(i),l=a("Ahmk"),s=a("GLB2"),c=a.n(s),m=function(e){return o.a.createElement("div",{className:r()(c.a.results,c.a.vareResults)},o.a.createElement(l.a,{className:c.a.title},e.results.title),o.a.createElement("div",{className:c.a.sections},o.a.createElement("div",{className:c.a.section1},o.a.createElement("div",{className:c.a.content},o.a.createElement("div",{className:c.a.description,dangerouslySetInnerHTML:{__html:e.results.description.childContentfulRichText.html}}))),o.a.createElement("div",{className:c.a.section2},o.a.createElement("div",{className:c.a.content},o.a.createElement("h3",{className:c.a.title},e.results.title2),o.a.createElement("div",{className:c.a.description},e.results.description2))),o.a.createElement("div",{className:c.a.section3},o.a.createElement("div",{className:c.a.content},o.a.createElement("div",null,o.a.createElement("h3",{className:c.a.ratingTitle},e.results.title3),o.a.createElement("div",{className:c.a.ratingSubtitle},e.results.description3)),o.a.createElement("div",null,o.a.createElement("h3",{className:c.a.ratingTitle},e.results.title4),o.a.createElement("div",{className:c.a.ratingSubtitle},e.results.description4))))))};t.b=function(e){return o.a.createElement("div",{className:c.a.results},o.a.createElement(l.a,{className:c.a.title},e.results.title),o.a.createElement("div",{className:c.a.sections},o.a.createElement("div",{className:c.a.section1},o.a.createElement("div",{className:c.a.content},o.a.createElement("div",{className:c.a.description,dangerouslySetInnerHTML:{__html:e.results.description.childContentfulRichText.html}}))),o.a.createElement("div",{className:c.a.section2},o.a.createElement("div",{className:c.a.content},o.a.createElement("h3",{className:c.a.title},e.results.title2),o.a.createElement("div",{className:c.a.description},e.results.description2)))))}},X7r7:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("9eSz"),i=a.n(r),o=a("q1tI"),l=a.n(o),s=a("8E2/"),c=a.n(s),m=a("/rpp"),u=a.n(m);t.a=function(e){return l.a.createElement("div",{className:u.a.imageAndText,style:e.isReversed?{flexDirection:"row-reverse"}:{}},e.hasGreyBackground&&l.a.createElement("div",{className:c.a.fullWidthGrey}),l.a.createElement("div",{className:u.a.textSide,style:e.textSideStyle},l.a.createElement("h2",{className:u.a.title},e.title),l.a.createElement("div",{className:u.a.description,dangerouslySetInnerHTML:{__html:e.description}}),!!e.linkTo&&l.a.createElement(n.a,{className:c.a.button,to:e.linkTo},"Go to "+e.title)),l.a.createElement("div",{className:u.a.imageSide,style:e.imageSideStyle},!!e.imagePath&&l.a.createElement(i.a,{fluid:e.imagePath,style:{maxHeight:e.maxHeight||800},imgStyle:{maxHeight:e.maxHeight||800,objectFit:"contain"}})))}},Y97W:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("GfmN"),o=a.n(i),l=function(){return r.a.createElement("div",{className:o.a.quotationMarks},r.a.createElement("div",{className:o.a.quotationMark},r.a.createElement("div",{className:o.a.apostrophe}),r.a.createElement("div",{className:o.a.apostrophe})),r.a.createElement("div",{className:o.a.quotationMark},r.a.createElement("div",{className:o.a.apostrophe}),r.a.createElement("div",{className:o.a.apostrophe})))};t.a=function(e){return e.quote?r.a.createElement("div",{className:o.a.quote},r.a.createElement(l,null),r.a.createElement("h3",{className:o.a.text},e.quote.quote)):null}},aUsD:function(e,t,a){e.exports={workHero:"work-module--workHero--ejtJn hero-module--hero--2hjsV",workHeroImage:"work-module--workHeroImage--2_x2r hero-module--image--2EAX4",workCases:"work-module--workCases--2Iu4-",vareHero:"work-module--vareHero--1BdEE hero-module--hero--2hjsV",vareHeroImage:"work-module--vareHeroImage--1EfrF hero-module--image--2EAX4",vareFeatures:"work-module--vareFeatures--1Ulz6",abbHero:"work-module--abbHero--9515A hero-module--hero--2hjsV",abbHeroImage:"work-module--abbHeroImage--24bul hero-module--image--2EAX4",abbFeatures:"work-module--abbFeatures--9kNAn",macgregorHero:"work-module--macgregorHero--2Q8im hero-module--hero--2hjsV",macgregorHeroImage:"work-module--macgregorHeroImage--1IC3K hero-module--image--2EAX4",macgregorFeatures:"work-module--macgregorFeatures--1SXtu",variousHero:"work-module--variousHero--27USO hero-module--hero--2hjsV",variousHeroImage:"work-module--variousHeroImage--20SPa hero-module--image--2EAX4"}},kxRB:function(e,t,a){e.exports={unstyledButton:"buttons-module--unstyledButton--jjb76",progressionButton:"buttons-module--progressionButton--3p268",content:"buttons-module--content--3sf8f",previous:"buttons-module--previous--WyX2G",next:"buttons-module--next--2ZQrr"}},r2Ca:function(e,t,a){e.exports={showCase:"showcase-module--showCase--3UkYd",buttons:"showcase-module--buttons--3-0bT",descriptionBoxes:"showcase-module--descriptionBoxes--AyGU7",descriptionBox:"showcase-module--descriptionBox--3QmA7",descriptionBoxLeft:"showcase-module--descriptionBoxLeft--2T45R",descriptionBoxRight:"showcase-module--descriptionBoxRight--2eS2W",content:"showcase-module--content--1Xaz8"}},wCPA:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Ahmk"),o=a("0poj"),l=a.n(o);t.a=function(e){return r.a.createElement("div",{className:l.a.timeline},r.a.createElement(i.a,null,e.title),e.timelineItems.map((function(e){return r.a.createElement("div",{key:e.title,className:l.a.item},r.a.createElement("div",{className:l.a.title},e.title),r.a.createElement("div",{className:l.a.point}),r.a.createElement("div",{className:l.a.line}),r.a.createElement("div",{className:l.a.description},e.description))})))}}}]);
//# sourceMappingURL=component---src-pages-work-macgregor-js-3e73f786f7c16e520c29.js.map