/*! For license information please see component---src-pages-work-macgregor-js-0b9041b5e1fbe9b449cb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/rpp":function(e,t,a){e.exports={imageAndText:"imageAndText-module--imageAndText--32Dj3",textSide:"imageAndText-module--textSide--2gZ_o",imageSide:"imageAndText-module--imageSide--2lTAl",title:"imageAndText-module--title--3YTj8",description:"imageAndText-module--description--34tt2"}},"0lzk":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return j}));var r=a("8o2o"),n=a("mwIZ"),i=a.n(n),o=a("9eSz"),l=a.n(o),s=a("q1tI"),c=a.n(s),u=a("qhky"),m=a("Qg6O"),d=a("B1WW"),g=a("sjT/"),f=a("c9Zo"),h=a("cafg"),p=a("X7r7"),v=a("Y97W"),E=a("VOMB"),w=a("BL+a"),k=a("wCPA"),x=a("L6NH"),N=a("n3/e"),b=a.n(N),T=a("aUsD"),y=a.n(T),A=["work:macgregor:imageAndText2","work:macgregor:imageAndText3","work:macgregor:imageAndText4","work:macgregor:imageAndText6"],S=["work:macgregor:imageAndText2","work:macgregor:imageAndText3"];t.default=function(e){var t,a,n=e.data,o=Object(r.a)(e,["data"]),N=Object(s.useState)(0),T=N[0],j=N[1],q=n.showcase.edges.find((function(e){return e.node.contentfulid==="work:macgregor:showcase"+(T+1)})),B=[i()(q,"node.images[0]"),i()(q,"node.images[1]")].filter((function(e){return!!e})),H=function(e){return e&&e.node&&e.node.contentfulid&&e.node.title&&e.node.description&&e.node.image?c.a.createElement(p.a,{key:e.node.contentfulid,title:e.node.title,description:e.node.description,imagePath:e.node.image&&e.node.image.fluid,maxHeight:500,isReversed:A.includes(e.node.contentfulid),hasGreyBackground:S.includes(e.node.contentfulid)}):null};return c.a.createElement("div",{className:b.a.page},c.a.createElement(u.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"Neptune Studios | Case MacGregor"),c.a.createElement("link",{rel:"canonical",href:"https://neptunestudios.com/work/macgregor"})),c.a.createElement(f.a,{currentPath:o.path}),c.a.createElement(h.a,{className:y.a.macgregorHero,title:n.hero.title,subtitle:n.hero.subtitle,description:n.hero.description,heroClassName:y.a.macgregorHeroImage,heroAlt:"Phone with MacGregor application",heroImage:null===(t=n.hero)||void 0===t||null===(a=t.image)||void 0===a?void 0:a.fluid,linkBackTo:"/work"}),c.a.createElement("div",{className:b.a.content},c.a.createElement("div",{className:y.a.macgregorFeatures},n.tripleFeature.feature.map((function(e,t){return c.a.createElement(m.a,{key:e.title+":"+t,svgPath:e.svgImage.file.url,title:e.title,subtitle:e.subtitle,paragraph:e.description.description})}))),c.a.createElement(k.a,{title:n.timeline.title,timelineItems:n.timeline.timelineItems}),H(n.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText1"===e.node.contentfulid}))),H(n.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText2"===e.node.contentfulid}))),c.a.createElement(v.a,{quote:Object(x.a)(n,"work:macgregor:quotation1")}),H(n.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText3"===e.node.contentfulid}))),H(n.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText4"===e.node.contentfulid}))),c.a.createElement(g.a,{imagePath:n.fullWidthBackground.image&&n.fullWidthBackground.image.fluid,height:"54rem"}),H(n.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText5"===e.node.contentfulid}))),H(n.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText6"===e.node.contentfulid}))),c.a.createElement(w.a,{bgColor:"#3D68B0",height:B[0].file.details.image.height/2,currentShowcase:q,handlePreviousShowcase:function(){j(0===T?n.showcase.edges.length-1:T-1)},handleNextShowcase:function(){T===n.showcase.edges.length-1?j(0):j(T+1)}},!!B.length&&c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{fluid:B[0].fluid,style:{width:"40%"},imgStyle:{width:"75%",height:"45rem",left:0,right:0,margin:"0 auto",objectFit:"contain"}}),c.a.createElement(l.a,{fluid:B[1].fluid,style:{width:"40%"},imgStyle:{width:"75%",height:"45rem",left:0,right:0,margin:"0 auto",objectFit:"contain"}}))),c.a.createElement(v.a,{quote:Object(x.a)(n,"work:macgregor:quotation2")}),c.a.createElement(E.b,{results:n.results})),c.a.createElement(d.a,null))};var j="2708999675"},"0poj":function(e,t,a){e.exports={timeline:"timeline-module--timeline--20MtR",item:"timeline-module--item--A7Dws",title:"timeline-module--title--1JxYm",description:"timeline-module--description--2U6HK",point:"timeline-module--point--2Tx9w",line:"timeline-module--line--3uv7B"}},"3jbs":function(e,t,a){e.exports={centerTitle:"centerTitle-module--centerTitle--2zrwW",divider:"centerTitle-module--divider--2sn2H"}},"9Qe6":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("k3g1"),o=a.n(i);t.a=function(){return n.a.createElement("div",{className:o.a.fullWidthGrey})}},Ahmk:function(e,t,a){"use strict";var r=a("TSYQ"),n=a.n(r),i=a("q1tI"),o=a.n(i),l=a("3jbs"),s=a.n(l);t.a=function(e){return o.a.createElement("div",{className:n()(s.a.centerTitle,e.className)},o.a.createElement("h3",null,e.children),o.a.createElement("div",{className:s.a.divider}))}},"BL+a":function(e,t,a){"use strict";var r=a("z/o8"),n=a("q1tI"),i=a.n(n),o=a("L6NH"),l=a("TSYQ"),s=a.n(l),c=a("UDrt");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var m=n.createElement("path",{d:"M39.55 7.805H.79v1.247h38.76l-7.281 6.392.837.93L42.16 8.43 33.105.483l-.836.932 7.282 6.39z",fill:"#fff"});function d(e){return n.createElement("svg",u({width:43,height:17,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),m)}var g=a("kxRB"),f=a.n(g),h=function(e){return i.a.createElement("button",{className:s()(f.a.progressionButton,"previous"===e.type&&f.a.previous,"next"===e.type&&f.a.next),onClick:e.onClick},"previous"===e.type&&i.a.createElement(c.a,null),"next"===e.type&&i.a.createElement(d,null),i.a.createElement("div",{className:f.a.content},e.children))},p=a("r2Ca"),v=a.n(p),E=function(e){return i.a.createElement("div",{className:s()(v.a.descriptionBox,e.className),style:e.style,ref:e.boxRef},i.a.createElement("div",{className:v.a.dottedLine,ref:e.lineRef}),e.children)};t.a=function(e){var t,a,l=!!e.currentShowcase.node.featureDescriptions&&!!e.currentShowcase.node.featureDescriptions.length,s=Object(n.useRef)((e.currentShowcase.node.featureDescriptions||[]).map((function(){return i.a.createRef()}))),c=Object(n.useRef)((e.currentShowcase.node.featureDescriptions||[]).map((function(){return i.a.createRef()}))),u=Object(o.f)(null===(t=e.currentShowcase)||void 0===t||null===(a=t.node)||void 0===a?void 0:a.contentfulid),m=function(){return window.innerWidth/2},d=Object(n.useCallback)((function(e,t){r.a.from(e,{x:-m(),scrollTrigger:{id:"box-"+(t+1),trigger:e,start:"top center"}})}),[]),g=Object(n.useCallback)((function(e,t){r.a.from(e,{x:m(),scrollTrigger:{id:"box-"+(t+1),trigger:e,start:"top center"}})}),[]),f=Object(n.useCallback)((function(e,t){r.a.from(e,{opacity:0,scrollTrigger:{id:"line-"+(t+1),trigger:e,start:"bottom+=200 center"}})}),[]),p=Object(n.useCallback)((function(){s.current.forEach((function(e,t){t%2?g(e.current,t):d(e.current,t)}))}),[d,g]),w=Object(n.useCallback)((function(){c.current.forEach((function(e,t){f(e.current,t)}))}),[f]);Object(n.useEffect)((function(){l&&"undefined"!=typeof window&&(Object(o.g)(),p(),w())}),[l,p,w]);return e.children?i.a.createElement("div",{className:v.a.showCase,style:{background:e.bgColor?e.bgColor:"#fff",height:e.height,maxHeight:"180rem"}},i.a.createElement("h3",null,e.currentShowcase.node.title),i.a.createElement("div",{className:v.a.buttons},i.a.createElement(h,{type:"previous",onClick:e.handlePreviousShowcase},"Previous screen"),i.a.createElement(h,{type:"next",onClick:e.handleNextShowcase},"Next screen")),i.a.createElement("div",{className:v.a.content},e.children),l&&i.a.createElement("div",{className:v.a.descriptionBoxes},i.a.createElement("div",{style:{position:"relative"}},(e.currentShowcase.node.featureDescriptions||[]).map((function(e,t){return i.a.createElement(E,{key:e.id,className:t%2?v.a.descriptionBoxRight:v.a.descriptionBoxLeft,style:{top:u[t]},boxRef:s.current[t],lineRef:c.current[t]},e.description)}))))):null}},GLB2:function(e,t,a){e.exports={results:"results-module--results--2EBtw",title:"results-module--title--1fZ-1",description:"results-module--description--3F8L9",sections:"results-module--sections--38Kha",section1:"results-module--section1--1qUbW",section2:"results-module--section2--2-8Gb",content:"results-module--content--P6Ceg",section3:"results-module--section3--1CBQI",vareResults:"results-module--vareResults--1cFuX",ratingTitle:"results-module--ratingTitle--3AlSI",ratingSubtitle:"results-module--ratingSubtitle--3-7lO"}},GfmN:function(e,t,a){e.exports={quote:"quote-module--quote--e9e8k",quotationMarks:"quote-module--quotationMarks--1D53Y",quotationMark:"quote-module--quotationMark--3VJAf",apostrophe:"quote-module--apostrophe--31Ey3"}},LJqT:function(e,t,a){e.exports={feature:"feature-module--feature--3I5aT",header:"feature-module--header--3q4jP",icon:"feature-module--icon--3RWuj",titles:"feature-module--titles--WCVrU",title:"feature-module--title--1KKVg",description:"feature-module--description--3y_dn",subtitle:"feature-module--subtitle--LrkHt"}},Qg6O:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("LJqT"),o=a.n(i);t.a=function(e){return n.a.createElement("div",{className:o.a.feature},n.a.createElement("div",{className:o.a.header},!!e.svgPath&&n.a.createElement("img",{alt:"Feature icon",className:o.a.icon,src:e.svgPath}),n.a.createElement("div",{className:o.a.titles},n.a.createElement("div",{className:o.a.title},e.title),n.a.createElement("div",{className:o.a.subtitle},e.subtitle))),n.a.createElement("p",{className:o.a.description},e.paragraph))}},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},VOMB:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("TSYQ"),n=a.n(r),i=a("q1tI"),o=a.n(i),l=a("Ahmk"),s=a("Rmet"),c=a("GLB2"),u=a.n(c),m=function(e){return o.a.createElement("div",{className:n()(u.a.results,u.a.vareResults)},o.a.createElement(l.a,{className:u.a.title},e.results.title),o.a.createElement("div",{className:u.a.sections},o.a.createElement("div",{className:u.a.section1},o.a.createElement("div",{className:u.a.content},o.a.createElement(s.a,{className:u.a.description,rawText:e.results.description}))),o.a.createElement("div",{className:u.a.section2},o.a.createElement("div",{className:u.a.content},o.a.createElement("h3",{className:u.a.title},e.results.title2),o.a.createElement("div",{className:u.a.description},e.results.description2))),o.a.createElement("div",{className:u.a.section3},o.a.createElement("div",{className:u.a.content},o.a.createElement("div",null,o.a.createElement("h3",{className:u.a.ratingTitle},e.results.title3),o.a.createElement("div",{className:u.a.ratingSubtitle},e.results.description3)),o.a.createElement("div",null,o.a.createElement("h3",{className:u.a.ratingTitle},e.results.title4),o.a.createElement("div",{className:u.a.ratingSubtitle},e.results.description4))))))};t.b=function(e){return o.a.createElement("div",{className:u.a.results},o.a.createElement(l.a,{className:u.a.title},e.results.title),o.a.createElement("div",{className:u.a.sections},o.a.createElement("div",{className:u.a.section1},o.a.createElement("div",{className:u.a.content},o.a.createElement(s.a,{className:u.a.description,rawText:e.results.description}))),o.a.createElement("div",{className:u.a.section2},o.a.createElement("div",{className:u.a.content},o.a.createElement("h3",{className:u.a.title},e.results.title2),o.a.createElement("div",{className:u.a.description},e.results.description2)))))}},X7r7:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("9eSz"),i=a.n(n),o=a("q1tI"),l=a.n(o),s=a("8E2/"),c=a.n(s),u=a("9Qe6"),m=a("Rmet"),d=a("/rpp"),g=a.n(d);t.a=function(e){return l.a.createElement("div",{className:g.a.imageAndText,style:e.isReversed?{flexDirection:"row-reverse"}:{}},e.hasGreyBackground&&l.a.createElement(u.a,null),l.a.createElement("div",{className:g.a.textSide,style:e.textSideStyle},l.a.createElement("h2",{className:g.a.title},e.title),l.a.createElement(m.a,{className:g.a.description,rawText:e.description}),!!e.linkTo&&l.a.createElement(r.a,{className:c.a.button,to:e.linkTo},"Go to "+e.title)),l.a.createElement("div",{className:g.a.imageSide,style:e.imageSideStyle},!!e.imagePath&&l.a.createElement(i.a,{fluid:e.imagePath,style:{maxHeight:e.maxHeight||800},imgStyle:{maxHeight:e.maxHeight||800,objectFit:"contain"}})))}},Y97W:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("GfmN"),o=a.n(i),l=function(){return n.a.createElement("div",{className:o.a.quotationMarks},n.a.createElement("div",{className:o.a.quotationMark},n.a.createElement("div",{className:o.a.apostrophe}),n.a.createElement("div",{className:o.a.apostrophe})),n.a.createElement("div",{className:o.a.quotationMark},n.a.createElement("div",{className:o.a.apostrophe}),n.a.createElement("div",{className:o.a.apostrophe})))};t.a=function(e){return e.quote?n.a.createElement("div",{className:o.a.quote},n.a.createElement(l,null),n.a.createElement("h3",{className:o.a.text},e.quote.quote)):null}},aUsD:function(e,t,a){e.exports={workHero:"work-module--workHero--ejtJn hero-module--hero--2hjsV",workHeroImage:"work-module--workHeroImage--2_x2r hero-module--image--2EAX4",workCases:"work-module--workCases--2Iu4-",vareHero:"work-module--vareHero--1BdEE hero-module--hero--2hjsV",vareHeroImage:"work-module--vareHeroImage--1EfrF hero-module--image--2EAX4",vareFeatures:"work-module--vareFeatures--1Ulz6",abbHero:"work-module--abbHero--9515A hero-module--hero--2hjsV",abbHeroImage:"work-module--abbHeroImage--24bul hero-module--image--2EAX4",abbFeatures:"work-module--abbFeatures--9kNAn",macgregorHero:"work-module--macgregorHero--2Q8im hero-module--hero--2hjsV",macgregorHeroImage:"work-module--macgregorHeroImage--1IC3K hero-module--image--2EAX4",macgregorFeatures:"work-module--macgregorFeatures--1SXtu",variousHero:"work-module--variousHero--27USO hero-module--hero--2hjsV",variousHeroImage:"work-module--variousHeroImage--20SPa hero-module--image--2EAX4"}},k3g1:function(e,t,a){e.exports={fullWidthBackground:"fullWidth-module--fullWidthBackground--2IumJ",fullWidthGrey:"fullWidth-module--fullWidthGrey--GX5XO"}},r2Ca:function(e,t,a){e.exports={showCase:"showcase-module--showCase--3UkYd",buttons:"showcase-module--buttons--3-0bT",content:"showcase-module--content--1Xaz8",descriptionBoxes:"showcase-module--descriptionBoxes--AyGU7",descriptionBox:"showcase-module--descriptionBox--3QmA7",descriptionBoxLeft:"showcase-module--descriptionBoxLeft--2T45R",descriptionBoxRight:"showcase-module--descriptionBoxRight--2eS2W",dottedLine:"showcase-module--dottedLine--aGMmg"}},"sjT/":function(e,t,a){"use strict";var r=a("9eSz"),n=a.n(r),i=a("q1tI"),o=a.n(i),l=a("k3g1"),s=a.n(l),c=a("9Qe6");t.a=function(e){return o.a.createElement("div",{className:s.a.fullWidthBackground},o.a.createElement(c.a,null),o.a.createElement(n.a,{fluid:e.imagePath,style:{position:"relative",height:e.height||"40rem",width:"100%",overflow:"visible"},imgStyle:{position:"absolute",height:"100%",width:"100vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",objectFit:"cover"}}))}},wCPA:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Ahmk"),o=a("9Qe6"),l=a("0poj"),s=a.n(l);t.a=function(e){return n.a.createElement("div",{className:s.a.timeline},n.a.createElement(o.a,null),n.a.createElement(i.a,null,e.title),e.timelineItems.map((function(e){return n.a.createElement("div",{key:e.title,className:s.a.item},n.a.createElement("div",{className:s.a.title},e.title),n.a.createElement("div",{className:s.a.point}),n.a.createElement("div",{className:s.a.line}),n.a.createElement("div",{className:s.a.description},e.description))})))}}}]);
//# sourceMappingURL=component---src-pages-work-macgregor-js-0b9041b5e1fbe9b449cb.js.map