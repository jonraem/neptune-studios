(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/rpp":function(e,a,t){e.exports={imageAndText:"imageAndText-module--imageAndText--32Dj3",textSide:"imageAndText-module--textSide--2gZ_o",imageSide:"imageAndText-module--imageSide--2lTAl",spacing:"imageAndText-module--spacing--fGfcI",title:"imageAndText-module--title--3YTj8",description:"imageAndText-module--description--34tt2"}},"9Qe6":function(e,a,t){"use strict";var r=t("q1tI"),o=t.n(r),i=t("k3g1"),l=t.n(i);a.a=function(){return o.a.createElement("div",{className:l.a.fullWidthGrey})}},X7r7:function(e,a,t){"use strict";var r=t("Wbzz"),o=t("9eSz"),i=t.n(o),l=t("q1tI"),n=t.n(l),m=t("8E2/"),d=t.n(m),u=t("Qu+8"),s=t("9Qe6"),c=t("Rmet"),g=t("/rpp"),h=t.n(g);a.a=function(e){var a=Object(u.a)("(max-width: 480px)"),t=e.isReversed?a?{flexDirection:"column-reverse"}:{flexDirection:"row-reverse"}:{};return n.a.createElement("div",{className:h.a.imageAndText,style:t},e.hasGreyBackground&&n.a.createElement(s.a,null),n.a.createElement("div",{className:h.a.textSide,style:e.textSideStyle},n.a.createElement("h2",{className:h.a.title},e.title),n.a.createElement(c.a,{className:h.a.description,rawText:e.description}),!!e.linkTo&&n.a.createElement(r.Link,{className:d.a.button,to:e.linkTo},"Go to "+e.title)),n.a.createElement("div",{className:h.a.spacing}),n.a.createElement("div",{className:h.a.imageSide,style:e.imageSideStyle},!!e.imagePath&&n.a.createElement(i.a,{fluid:e.imagePath,style:{maxHeight:e.maxHeight||800},imgStyle:{maxHeight:e.maxHeight||800,objectFit:"contain"}})))}},aUsD:function(e,a,t){e.exports={workHero:"work-module--workHero--ejtJn hero-module--hero--2hjsV",workHeroImage:"work-module--workHeroImage--2_x2r hero-module--image--2EAX4",workCases:"work-module--workCases--2Iu4-",vareHero:"work-module--vareHero--1BdEE hero-module--hero--2hjsV",vareHeroImage:"work-module--vareHeroImage--1EfrF hero-module--image--2EAX4",vareFeatures:"work-module--vareFeatures--1Ulz6",abbHero:"work-module--abbHero--9515A hero-module--hero--2hjsV",abbHeroImage:"work-module--abbHeroImage--24bul hero-module--image--2EAX4",abbFeatures:"work-module--abbFeatures--9kNAn",macgregorHero:"work-module--macgregorHero--2Q8im hero-module--hero--2hjsV",macgregorHeroImage:"work-module--macgregorHeroImage--1IC3K hero-module--image--2EAX4",macgregorFeatures:"work-module--macgregorFeatures--1SXtu",variousHero:"work-module--variousHero--27USO hero-module--hero--2hjsV",variousHeroImage:"work-module--variousHeroImage--20SPa hero-module--image--2EAX4"}},k3g1:function(e,a,t){e.exports={fullWidthBackground:"fullWidth-module--fullWidthBackground--2IumJ",fullWidthGrey:"fullWidth-module--fullWidthGrey--GX5XO"}},lPxD:function(e,a,t){"use strict";t.r(a);var r=t("zLVn"),o=t("q1tI"),i=t.n(o),l=t("qhky"),n=t("B1WW"),m=t("c9Zo"),d=t("cafg"),u=t("X7r7"),s=t("Qu+8"),c=t("L6NH"),g=t("n3/e"),h=t.n(g),k=t("aUsD"),p=t.n(k),f=["case:vare","case:macgregor"],w=["case:vare","case:abb","case:macgregor","case:various"];a.default=function(e){var a,t,o=e.data,g=Object(r.a)(e,["data"]),k=Object(s.a)("(max-width: 480px)");return i.a.createElement("div",{className:h.a.page},i.a.createElement(l.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Neptune Studios | Work"),i.a.createElement("link",{rel:"canonical",href:"https://neptunestudios.com/work/"})),i.a.createElement(m.a,{currentPath:g.path}),i.a.createElement(d.a,{className:p.a.workHero,title:o.hero.title,subtitle:o.hero.subtitle,description:o.hero.description,heroClassName:p.a.workHeroImage,heroAlt:"Phone with Väppi application",heroImage:null===(a=o.hero)||void 0===a||null===(t=a.image)||void 0===t?void 0:t.fluid}),i.a.createElement("div",{className:h.a.content},i.a.createElement("div",{className:p.a.workCases},Object(c.e)(o.allContentfulCase.edges,w).map((function(e){return i.a.createElement(u.a,{key:e.node.contentfulid,title:e.node.title,description:e.node.description.description,linkTo:e.node.URL,imagePath:e.node.image&&e.node.image.fluid,imageSideStyle:"case:various"===e.node.contentfulid?{justifyContent:"flex-end",padding:"0",paddingTop:"1rem",marginRight:"-8rem",width:"90%"}:void 0,isReversed:k||f.includes(e.node.contentfulid),hasGreyBackground:!f.includes(e.node.contentfulid)})})))),i.a.createElement(n.a,null))}}}]);
//# sourceMappingURL=component---src-pages-work-index-js-93cb2c3323194d39dd2e.js.map