/*! For license information please see e127e2c1e6af37aa45d88caa59d8fdaeb810ac3c-c1b1eb14b5d5205db780.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/rpp":function(e,t,r){e.exports={imageAndText:"imageAndText-module--imageAndText--32Dj3",textSide:"imageAndText-module--textSide--2gZ_o",imageSide:"imageAndText-module--imageSide--2lTAl",spacing:"imageAndText-module--spacing--fGfcI",title:"imageAndText-module--title--3YTj8",description:"imageAndText-module--description--34tt2"}},"2xqg":function(e,t,r){var a=r("UNi/"),o=r("EwQA"),n=r("Sxd8"),i=Math.min;e.exports=function(e,t){if((e=n(e))<1||e>9007199254740991)return[];var r=4294967295,c=i(e,4294967295);t=o(t),e-=4294967295;for(var s=a(c,t);++r<e;)t(r);return s}},"9Qe6":function(e,t,r){"use strict";var a=r("q1tI"),o=r.n(a),n=r("k3g1"),i=r.n(n);t.a=function(){return o.a.createElement("div",{className:i.a.fullWidthGrey})}},"BL+a":function(e,t,r){"use strict";var a,o=r("z/o8"),n=r("q1tI"),i=r.n(n),c=r("L6NH"),s=r("TSYQ"),u=r.n(s),l=r("UDrt");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function d(e){return n.createElement("svg",m({width:43,height:17,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=n.createElement("path",{d:"M39.55 7.805H.79v1.247h38.76l-7.281 6.392.837.93L42.16 8.43 33.105.483l-.836.932 7.282 6.39z",fill:"#fff"})))}var f=r("kxRB"),h=r.n(f),p=function(e){return i.a.createElement("button",{className:u()(h.a.progressionButton,"previous"===e.type&&h.a.previous,"next"===e.type&&h.a.next),onClick:e.onClick},"previous"===e.type&&i.a.createElement(l.a,null),"next"===e.type&&i.a.createElement(d,null),i.a.createElement("div",{className:h.a.content},e.children))},g=r("r2Ca"),v=r.n(g),b=function(e){return i.a.createElement("div",{className:u()(v.a.descriptionBox,e.className),style:e.style,ref:e.boxRef},i.a.createElement("div",{className:v.a.dottedLine,ref:e.lineRef}),e.children)};t.a=function(e){var t,r,a=!!e.currentShowcase.node.featureDescriptions&&!!e.currentShowcase.node.featureDescriptions.length,s=Object(n.useRef)((e.currentShowcase.node.featureDescriptions||[]).map((function(){return i.a.createRef()}))),u=Object(n.useRef)((e.currentShowcase.node.featureDescriptions||[]).map((function(){return i.a.createRef()}))),l=Object(c.f)(null===(t=e.currentShowcase)||void 0===t||null===(r=t.node)||void 0===r?void 0:r.contentfulid),m=function(){return window.innerWidth/2},d=Object(n.useCallback)((function(e,t){o.a.from(e,{x:-m(),scrollTrigger:{id:"box-"+(t+1),trigger:e,start:"top center"}})}),[]),f=Object(n.useCallback)((function(e,t){o.a.from(e,{x:m(),scrollTrigger:{id:"box-"+(t+1),trigger:e,start:"top center"}})}),[]),h=Object(n.useCallback)((function(e,t){o.a.from(e,{opacity:0,scrollTrigger:{id:"line-"+(t+1),trigger:e,start:"bottom+=200 center"}})}),[]),g=Object(n.useCallback)((function(){s.current.forEach((function(e,t){t%2?f(e.current,t):d(e.current,t)}))}),[d,f]),w=Object(n.useCallback)((function(){u.current.forEach((function(e,t){h(e.current,t)}))}),[h]);Object(n.useEffect)((function(){a&&"undefined"!=typeof window&&(Object(c.g)(),g(),w())}),[a,g,w]);return e.children?i.a.createElement("div",{className:v.a.showcase,style:{background:e.bgColor?e.bgColor:"#fff",height:e.height,maxHeight:"180rem"}},i.a.createElement("h3",null,e.currentShowcase.node.title),i.a.createElement("div",{className:v.a.buttons},i.a.createElement(p,{type:"previous",onClick:e.handlePreviousShowcase},"Previous screen"),i.a.createElement(p,{type:"next",onClick:e.handleNextShowcase},"Next screen")),i.a.createElement("div",{className:v.a.content},e.children),a&&i.a.createElement("div",{className:v.a.descriptionBoxes},i.a.createElement("div",{style:{position:"relative"}},(e.currentShowcase.node.featureDescriptions||[]).map((function(e,t){return i.a.createElement(b,{key:e.id,className:t%2?v.a.descriptionBoxRight:v.a.descriptionBoxLeft,style:{top:l[t]},boxRef:s.current[t],lineRef:u.current[t]},e.description)}))))):null}},ChFX:function(e,t,r){"use strict";var a,o=r("2xqg"),n=r.n(o),i=r("q1tI"),c=r.n(i),s=new Uint8Array(16);function u(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(s)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"==typeof e&&l.test(e)},d=[],f=0;f<256;++f)d.push((f+256).toString(16).substr(1));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase();if(!m(r))throw TypeError("Stringified UUID is invalid");return r};var p=function(e,t,r){var a=(e=e||{}).random||(e.rng||u)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=a[o];return t}return h(a)},g=r("r2Ca"),v=r.n(g);t.a=function(e){return e.children?c.a.createElement("div",{className:v.a.showcase,style:{background:e.bgColor?e.bgColor:"#fff",height:e.height,maxHeight:"180rem"}},c.a.createElement("h3",null,e.currentShowcase.node.title),c.a.createElement("div",{className:v.a.breadcrumbs},n()(e.showcaseImagesLength,(function(t){return c.a.createElement("div",{key:p(),className:t===e.showcaseIndex?v.a.activeBreadcrumb:v.a.breadcrumb,onClick:function(){return e.handleChangeShowcaseIndex(t)}})}))),c.a.createElement("div",{className:v.a.content},e.children)):null}},EwQA:function(e,t,r){var a=r("zZ0H");e.exports=function(e){return"function"==typeof e?e:a}},GfmN:function(e,t,r){e.exports={quote:"quote-module--quote--e9e8k",quotationMarks:"quote-module--quotationMarks--1D53Y",quotationMark:"quote-module--quotationMark--3VJAf",apostrophe:"quote-module--apostrophe--31Ey3"}},Sxd8:function(e,t,r){var a=r("ZCgT");e.exports=function(e){var t=a(e),r=t%1;return t==t?r?t-r:t:0}},TO8r:function(e,t){var r=/\s/;e.exports=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},TSYQ:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var i=o.apply(null,a);i&&e.push(i)}}else if("object"===n)if(a.toString===Object.prototype.toString)for(var c in a)r.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},X7r7:function(e,t,r){"use strict";var a=r("Wbzz"),o=r("9eSz"),n=r.n(o),i=r("q1tI"),c=r.n(i),s=r("8E2/"),u=r.n(s),l=r("Qu+8"),m=r("9Qe6"),d=r("Rmet"),f=r("/rpp"),h=r.n(f);t.a=function(e){var t=Object(l.a)("(max-width: 480px)"),r=e.isReversed?t?{flexDirection:"column-reverse"}:{flexDirection:"row-reverse"}:{};return c.a.createElement("div",{className:h.a.imageAndText,style:r},e.hasGreyBackground&&c.a.createElement(m.a,null),c.a.createElement("div",{className:h.a.textSide,style:e.textSideStyle},c.a.createElement("h2",{className:h.a.title},e.title),c.a.createElement(d.a,{className:h.a.description,rawText:e.description}),!!e.linkTo&&c.a.createElement(a.Link,{className:u.a.button,to:e.linkTo},"Go to "+e.title)),c.a.createElement("div",{className:h.a.spacing}),c.a.createElement("div",{className:h.a.imageSide,style:e.imageSideStyle},!!e.imagePath&&c.a.createElement(n.a,{fluid:e.imagePath,style:{maxHeight:e.maxHeight||800},imgStyle:{maxHeight:e.maxHeight||800,objectFit:"contain"}})))}},Y97W:function(e,t,r){"use strict";var a=r("q1tI"),o=r.n(a),n=r("GfmN"),i=r.n(n),c=function(){return o.a.createElement("div",{className:i.a.quotationMarks},o.a.createElement("div",{className:i.a.quotationMark},o.a.createElement("div",{className:i.a.apostrophe}),o.a.createElement("div",{className:i.a.apostrophe})),o.a.createElement("div",{className:i.a.quotationMark},o.a.createElement("div",{className:i.a.apostrophe}),o.a.createElement("div",{className:i.a.apostrophe})))};t.a=function(e){return e.quote?o.a.createElement("div",{className:i.a.quote},o.a.createElement(c,null),o.a.createElement("h3",{className:i.a.text},e.quote.quote)):null}},ZCgT:function(e,t,r){var a=r("tLB3");e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},aUsD:function(e,t,r){e.exports={workHero:"work-module--workHero--ejtJn hero-module--hero--2hjsV",workHeroImage:"work-module--workHeroImage--2_x2r hero-module--image--2EAX4",workCases:"work-module--workCases--2Iu4-",vareHero:"work-module--vareHero--1BdEE hero-module--hero--2hjsV",vareHeroImage:"work-module--vareHeroImage--1EfrF hero-module--image--2EAX4",vareFeatures:"work-module--vareFeatures--1Ulz6",abbHero:"work-module--abbHero--9515A hero-module--hero--2hjsV",abbHeroImage:"work-module--abbHeroImage--24bul hero-module--image--2EAX4",abbFeatures:"work-module--abbFeatures--9kNAn",macgregorHero:"work-module--macgregorHero--2Q8im hero-module--hero--2hjsV",macgregorHeroImage:"work-module--macgregorHeroImage--1IC3K hero-module--image--2EAX4",macgregorFeatures:"work-module--macgregorFeatures--1SXtu",variousHero:"work-module--variousHero--27USO hero-module--hero--2hjsV",variousHeroImage:"work-module--variousHeroImage--20SPa hero-module--image--2EAX4"}},jXQH:function(e,t,r){var a=r("TO8r"),o=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(o,""):e}},k3g1:function(e,t,r){e.exports={fullWidthBackground:"fullWidth-module--fullWidthBackground--2IumJ",fullWidthGrey:"fullWidth-module--fullWidthGrey--GX5XO"}},r2Ca:function(e,t,r){e.exports={showcase:"showcase-module--showcase--3oViy",buttons:"showcase-module--buttons--3-0bT",content:"showcase-module--content--1Xaz8",descriptionBoxes:"showcase-module--descriptionBoxes--AyGU7",descriptionBox:"showcase-module--descriptionBox--3QmA7",descriptionBoxLeft:"showcase-module--descriptionBoxLeft--2T45R",descriptionBoxRight:"showcase-module--descriptionBoxRight--2eS2W",dottedLine:"showcase-module--dottedLine--aGMmg",breadcrumbs:"showcase-module--breadcrumbs--ZgDY8",breadcrumb:"showcase-module--breadcrumb--_PFbL",activeBreadcrumb:"showcase-module--activeBreadcrumb--2sxYH showcase-module--breadcrumb--_PFbL"}},tLB3:function(e,t,r){var a=r("jXQH"),o=r("GoyQ"),n=r("/9aa"),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var r=c.test(e);return r||s.test(e)?u(e.slice(2),r?2:8):i.test(e)?NaN:+e}}}]);
//# sourceMappingURL=e127e2c1e6af37aa45d88caa59d8fdaeb810ac3c-c1b1eb14b5d5205db780.js.map