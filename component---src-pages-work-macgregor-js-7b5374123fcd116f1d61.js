(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0lzk":function(e,t,s){"use strict";s.r(t),s.d(t,"query",(function(){return k}));var a=s("zLVn"),r=s("nKUr"),i=s("mwIZ"),n=s.n(i),c=(s("q1tI"),s("qhky")),l=s("3QBw"),o=s.n(l),d=s("FsJT"),u=s("W/9C"),m=s("W7ON"),j=s("LbRr"),g=s("So3+"),h=s("FFNK"),b=s("pA5z"),x=s("TQig"),O=s("Pnty"),v=s("n3/e"),f=s.n(v),p=s("aUsD"),N=s.n(p),w=["work:macgregor:imageAndText1","work:macgregor:imageAndText5"];t.default=function(e){var t=e.data,s=Object(a.a)(e,["data"]),i=function(e){return e&&e.node&&e.node.contentfulid&&e.node.title&&e.node.description&&e.node.image?Object(r.jsx)(h.a,{title:e.node.title,description:e.node.description.childContentfulRichText.html,imagePath:e.node.image&&e.node.image.fluid,isReversed:w.includes(e.node.contentfulid)},e.node.contentfulid):null},l=function(e,t){return n()(e.quotation.edges.find((function(e){return e.node.contentfulid===t})),"node")};return Object(r.jsxs)("div",{className:f.a.page,children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:"Neptune Studios | Case MacGregor"}),Object(r.jsx)("link",{rel:"canonical",href:"https://neptunestudios.com/work/macgregor"})]}),Object(r.jsx)(j.a,{currentPath:s.path}),Object(r.jsx)(g.a,{for:"work:macgregor",heroStyles:N.a.macgregorHero,heroImage:Object(r.jsx)("img",{className:N.a.macgregorHeroImage,src:o.a,alt:"Phone with MacGregor application"})}),Object(r.jsxs)("div",{className:f.a.content,children:[Object(r.jsx)("div",{className:N.a.macgregorFeatures,children:t.tripleFeature.feature.map((function(e,t){return Object(r.jsx)(d.a,{svgPath:e.svgImage.file.url,title:e.title,subtitle:e.subtitle,paragraph:e.description.description},e.title+":"+t)}))}),Object(r.jsx)(O.a,{title:t.timeline.title,timelineItems:t.timeline.timelineItems}),i(t.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText1"===e.node.contentfulid}))),i(t.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText2"===e.node.contentfulid}))),Object(r.jsx)(b.a,{quote:l(t,"work:macgregor:quotation1")}),i(t.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText3"===e.node.contentfulid}))),i(t.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText4"===e.node.contentfulid}))),Object(r.jsx)(m.a,{imagePath:t.fullWidthBackground.image&&t.fullWidthBackground.image.fluid,height:"50rem"}),i(t.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText5"===e.node.contentfulid}))),i(t.imageAndText.edges.find((function(e){return"work:macgregor:imageAndText6"===e.node.contentfulid}))),Object(r.jsx)(b.a,{quote:l(t,"work:macgregor:quotation2")}),Object(r.jsx)(x.b,{results:t.results})]}),Object(r.jsx)(u.a,{})]})};var k="2089844139"},"3QBw":function(e,t,s){e.exports=s.p+"static/macgregor-hero-44b401ee334dc8429162ec4d45bc14d7.png"},FFNK:function(e,t,s){"use strict";var a=s("nKUr"),r=s("TSYQ"),i=s.n(r),n=s("Wbzz"),c=s("9eSz"),l=s.n(c),o=(s("q1tI"),s("8E2/")),d=s.n(o),u=s("Gp+c"),m=s.n(u);t.a=function(e){return Object(a.jsxs)("div",{className:i()(m.a.imageAndText,e.hasGreyBackground?d.a.fullWidthGrey:""),style:e.isReversed?{flexDirection:"row-reverse"}:{},children:[Object(a.jsxs)("div",{className:m.a.textSide,children:[Object(a.jsx)("h2",{className:m.a.title,children:e.title}),Object(a.jsx)("div",{className:m.a.description,dangerouslySetInnerHTML:{__html:e.description}}),!!e.linkTo&&Object(a.jsx)(n.a,{className:d.a.button,to:e.linkTo,children:"Go to "+e.title})]}),Object(a.jsx)("div",{className:m.a.imageSide,children:!!e.imagePath&&Object(a.jsx)(l.a,{fluid:e.imagePath,style:{maxHeight:800},imgStyle:{maxHeight:800,objectFit:"contain"}})})]})}},FsJT:function(e,t,s){"use strict";var a=s("nKUr"),r=(s("q1tI"),s("Gp+c")),i=s.n(r);t.a=function(e){return Object(a.jsxs)("div",{className:i.a.feature,children:[Object(a.jsxs)("div",{className:i.a.featureHeader,children:[!!e.svgPath&&Object(a.jsx)("img",{className:i.a.featureIcon,src:e.svgPath}),Object(a.jsxs)("div",{className:i.a.featureTitles,children:[Object(a.jsx)("div",{className:i.a.featureTitle,children:e.title}),Object(a.jsx)("div",{className:i.a.featureSubtitle,children:e.subtitle})]})]}),Object(a.jsx)("p",{className:i.a.featureDescription,children:e.paragraph})]})}},Pnty:function(e,t,s){"use strict";var a=s("nKUr"),r=(s("q1tI"),s("QGDp")),i=s("Gp+c"),n=s.n(i);t.a=function(e){return Object(a.jsxs)("div",{className:n.a.timeline,children:[Object(a.jsx)(r.a,{children:e.title}),e.timelineItems.map((function(e){return Object(a.jsxs)("div",{className:n.a.timelineItem,children:[Object(a.jsx)("div",{className:n.a.timelineTitle,children:e.title}),Object(a.jsx)("div",{className:n.a.timelinePoint}),Object(a.jsx)("div",{className:n.a.timelineLine}),Object(a.jsx)("div",{className:n.a.timelineDescription,children:e.description})]},e.title)}))]})}},QGDp:function(e,t,s){"use strict";var a=s("nKUr"),r=(s("q1tI"),s("TSYQ")),i=s.n(r),n=s("Gp+c"),c=s.n(n);t.a=function(e){return Object(a.jsxs)("div",{className:i()(c.a.centerTitle,e.className),children:[Object(a.jsx)("h3",{children:e.children}),Object(a.jsx)("div",{className:c.a.centerTitleDivider})]})}},TQig:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s("nKUr"),r=s("TSYQ"),i=s.n(r),n=(s("q1tI"),s("QGDp")),c=s("Gp+c"),l=s.n(c),o=function(e){return Object(a.jsxs)("div",{className:i()(l.a.results,l.a.vareResults),children:[Object(a.jsx)(n.a,{className:l.a.resultsTitle,children:e.results.title}),Object(a.jsxs)("div",{className:l.a.resultsSections,children:[Object(a.jsx)("div",{className:l.a.resultsSection1,children:Object(a.jsx)("div",{className:l.a.resultsContent,children:Object(a.jsx)("div",{className:l.a.resultsDescription,dangerouslySetInnerHTML:{__html:e.results.description.childContentfulRichText.html}})})}),Object(a.jsx)("div",{className:l.a.resultsSection2,children:Object(a.jsxs)("div",{className:l.a.resultsContent,children:[Object(a.jsx)("h3",{className:l.a.resultsTitle2,children:e.results.title2}),Object(a.jsx)("div",{className:l.a.resultsDescription,children:e.results.description2})]})}),Object(a.jsx)("div",{className:l.a.resultsSection3,children:Object(a.jsxs)("div",{className:l.a.resultsContent,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:l.a.resultsRatingTitle,children:e.results.title3}),Object(a.jsx)("div",{className:l.a.resultsRatingSubtitle,children:e.results.description3})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:l.a.resultsRatingTitle,children:e.results.title4}),Object(a.jsx)("div",{className:l.a.resultsRatingSubtitle,children:e.results.description4})]})]})})]})]})};t.b=function(e){return Object(a.jsxs)("div",{className:l.a.results,children:[Object(a.jsx)(n.a,{className:l.a.resultsTitle,children:e.results.title}),Object(a.jsxs)("div",{className:l.a.resultsSections,children:[Object(a.jsx)("div",{className:l.a.resultsSection1,children:Object(a.jsx)("div",{className:l.a.resultsContent,children:Object(a.jsx)("div",{className:l.a.resultsDescription,dangerouslySetInnerHTML:{__html:e.results.description.childContentfulRichText.html}})})}),Object(a.jsx)("div",{className:l.a.resultsSection2,children:Object(a.jsxs)("div",{className:l.a.resultsContent,children:[Object(a.jsx)("h3",{className:l.a.resultsTitle2,children:e.results.title2}),Object(a.jsx)("div",{className:l.a.resultsDescription2,children:e.results.description2})]})})]})]})}},W7ON:function(e,t,s){"use strict";var a=s("nKUr"),r=s("9eSz"),i=s.n(r),n=(s("q1tI"),s("Gp+c")),c=s.n(n);t.a=function(e){return Object(a.jsx)("div",{className:c.a.fullWidthBackground,children:Object(a.jsx)(i.a,{fluid:e.imagePath,style:{position:"relative",height:e.height||"40rem",width:"100%",overflow:"visible"},imgStyle:{position:"absolute",height:"100%",width:"100vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",objectFit:"cover"}})})}},aUsD:function(e,t,s){e.exports={workHero:"work-module--workHero--ejtJn pages-module--hero--jzr91",workHeroImage:"work-module--workHeroImage--2_x2r pages-module--heroImage--3VNzO",workCases:"work-module--workCases--2Iu4-",vareHero:"work-module--vareHero--1BdEE pages-module--hero--jzr91",vareHeroImage:"work-module--vareHeroImage--1EfrF pages-module--heroImage--3VNzO",vareFeatures:"work-module--vareFeatures--1Ulz6",abbHero:"work-module--abbHero--9515A pages-module--hero--jzr91",abbHeroImage:"work-module--abbHeroImage--24bul pages-module--heroImage--3VNzO",abbFeatures:"work-module--abbFeatures--9kNAn",macgregorHero:"work-module--macgregorHero--2Q8im pages-module--hero--jzr91",macgregorHeroImage:"work-module--macgregorHeroImage--1IC3K pages-module--heroImage--3VNzO",macgregorFeatures:"work-module--macgregorFeatures--1SXtu"}},pA5z:function(e,t,s){"use strict";var a=s("nKUr"),r=(s("q1tI"),s("Gp+c")),i=s.n(r),n=function(){return Object(a.jsxs)("div",{className:i.a.quotationMarks,children:[Object(a.jsxs)("div",{className:i.a.quotationMark,children:[Object(a.jsx)("div",{className:i.a.apostrophe}),Object(a.jsx)("div",{className:i.a.apostrophe})]}),Object(a.jsxs)("div",{className:i.a.quotationMark,children:[Object(a.jsx)("div",{className:i.a.apostrophe}),Object(a.jsx)("div",{className:i.a.apostrophe})]})]})};t.a=function(e){return console.log(e),e.quote?Object(a.jsxs)("div",{className:i.a.quote,children:[Object(a.jsx)(n,{}),Object(a.jsx)("h3",{className:i.a.quoteText,children:e.quote.quote})]}):null}}}]);
//# sourceMappingURL=component---src-pages-work-macgregor-js-7b5374123fcd116f1d61.js.map