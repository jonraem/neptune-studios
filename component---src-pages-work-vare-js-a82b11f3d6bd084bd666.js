/*! For license information please see component---src-pages-work-vare-js-a82b11f3d6bd084bd666.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1GcP":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return b}));var n=a("zLVn"),r=a("q1tI"),i=a.n(r),l=a("qhky"),o=a("oa44"),c=a.n(o),s=a("FsJT"),m=a("W/9C"),d=a("9eSz"),u=a.n(d),f=a("Gp+c"),g=a.n(f),v=function(e){return i.a.createElement("div",{className:g.a.fullWidthBackground},i.a.createElement(u.a,{fluid:e.imagePath,style:{position:"relative",height:e.height||"40rem",width:"100%",overflow:"visible"},imgStyle:{position:"absolute",height:"100%",width:"100vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",objectFit:"cover"}}))},p=a("LbRr"),h=a("So3+"),E=a("FFNK"),w=a("QGDp"),k=function(e){return i.a.createElement("div",{className:g.a.timeline},i.a.createElement(w.a,null,e.title),e.timelineItems.map((function(e){return i.a.createElement("div",{key:e.title,className:g.a.timelineItem},i.a.createElement("div",{className:g.a.timelineTitle},e.title),i.a.createElement("div",{className:g.a.timelinePoint}),i.a.createElement("div",{className:g.a.timelineLine}),i.a.createElement("div",{className:g.a.timelineDescription},e.description))})))},N=a("n3/e"),T=a.n(N),x=a("aUsD"),y=a.n(x),I=["work:vare:imageAndText1","work:vare:imageAndText3"],b=(t.default=function(e){var t=e.data,a=Object(n.a)(e,["data"]),r=function(e){return e&&e.node&&e.node.contentfulid&&e.node.title&&e.node.description&&e.node.image?i.a.createElement(E.a,{key:e.node.contentfulid,title:e.node.title,description:e.node.description,imagePath:e.node.image&&e.node.image.fluid,isReversed:I.includes(e.node.contentfulid)}):null};return i.a.createElement("div",{className:T.a.page},i.a.createElement(l.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Neptune Studios | Case Väre"),i.a.createElement("link",{rel:"canonical",href:"https://neptunestudios.com/work/vare"})),i.a.createElement(p.a,{currentPath:a.path}),i.a.createElement(h.a,{for:"work:vare",heroStyles:y.a.vareHero,heroImage:i.a.createElement("img",{className:y.a.vareHeroImage,src:c.a,alt:"Phone with Väppi application"})}),i.a.createElement("div",{className:T.a.content},i.a.createElement("div",{className:y.a.vareFeatures},t.tripleFeature.feature.map((function(e,t){return i.a.createElement(s.a,{key:e.title+":"+t,svgPath:e.svgImage.file.url,title:e.title,subtitle:e.subtitle,paragraph:e.description.description})}))),i.a.createElement(k,{title:t.timeline.title,timelineItems:t.timeline.timelineItems}),r(t.imageAndText.edges.find((function(e){return"work:vare:imageAndText1"===e.node.contentfulid}))),r(t.imageAndText.edges.find((function(e){return"work:vare:imageAndText2"===e.node.contentfulid}))),i.a.createElement(v,{imagePath:t.fullWidthBackground.image&&t.fullWidthBackground.image.fluid,height:"50rem"}),r(t.imageAndText.edges.find((function(e){return"work:vare:imageAndText3"===e.node.contentfulid}))),r(t.imageAndText.edges.find((function(e){return"work:vare:imageAndText4"===e.node.contentfulid})))),i.a.createElement(m.a,null))},"578060340")},FFNK:function(e,t,a){"use strict";var n=a("TSYQ"),r=a.n(n),i=a("Wbzz"),l=a("9eSz"),o=a.n(l),c=a("q1tI"),s=a.n(c),m=a("8E2/"),d=a.n(m),u=a("Gp+c"),f=a.n(u);t.a=function(e){return s.a.createElement("div",{className:r()(f.a.imageAndText,e.hasGreyBackground?d.a.fullWidthGrey:""),style:e.isReversed?{flexDirection:"row-reverse"}:{}},s.a.createElement("div",{className:f.a.textSide},s.a.createElement("h2",{className:f.a.title},e.title),s.a.createElement("p",{className:f.a.description},e.description),!!e.linkTo&&s.a.createElement(i.a,{className:d.a.button,to:e.linkTo},"Go to "+e.title)),s.a.createElement("div",{className:f.a.imageSide},!!e.imagePath&&s.a.createElement(o.a,{fluid:e.imagePath,style:{maxHeight:800},imgStyle:{maxHeight:800,objectFit:"contain"}})))}},FsJT:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Gp+c"),l=a.n(i);t.a=function(e){return r.a.createElement("div",{className:l.a.feature},r.a.createElement("div",{className:l.a.featureHeader},!!e.svgPath&&r.a.createElement("img",{className:l.a.featureIcon,src:e.svgPath}),r.a.createElement("div",{className:l.a.featureTitles},r.a.createElement("div",{className:l.a.featureTitle},e.title),r.a.createElement("div",{className:l.a.featureSubtitle},e.subtitle))),r.a.createElement("p",{className:l.a.featureDescription},e.paragraph))}},QGDp:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Gp+c"),l=a.n(i);t.a=function(e){return r.a.createElement("div",{className:l.a.centerTitle},r.a.createElement("h3",null,e.children),r.a.createElement("div",{className:l.a.centerTitleDivider}))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},aUsD:function(e,t,a){e.exports={workHero:"work-module--workHero--ejtJn pages-module--hero--jzr91",workHeroImage:"work-module--workHeroImage--2_x2r pages-module--heroImage--3VNzO",workCases:"work-module--workCases--2Iu4-",vareHero:"work-module--vareHero--1BdEE pages-module--hero--jzr91",vareHeroImage:"work-module--vareHeroImage--1EfrF pages-module--heroImage--3VNzO",vareFeatures:"work-module--vareFeatures--1Ulz6"}},oa44:function(e,t,a){e.exports=a.p+"static/vare-hero-2876a366e698b96d85971d30b0dd3cd1.png"}}]);
//# sourceMappingURL=component---src-pages-work-vare-js-a82b11f3d6bd084bd666.js.map