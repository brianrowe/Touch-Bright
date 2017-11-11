/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);


/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});


!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function a(n){return n.length}function o(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function s(n){return(n+="")===xa||n[0]===ba?ba+n:n}function f(n){return(n+="")[0]===ba?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=_a.length;r>e;++e){var u=_a[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,u){var i,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,i=e.indexOf(a)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){oa.event.preventDefault()}function k(){for(var n,t=oa.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=oa.event;u.target=n,oa.event=u,t[u.type].apply(e,r)}finally{oa.event=i}}},t}function E(n){return Sa(n,Aa),n}function A(n){return"function"==typeof n?n:function(){return ka(n,this)}}function C(n){return"function"==typeof n?n:function(){return Na(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=oa.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?i:u}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+oa.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",L(u+" "+n))):e.setAttribute("class",L(u.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function j(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function U(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=oa.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ea(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],a=0,o=i.length;o>a;a++)(u=i[a])&&t(u,a,e);return n}function Z(n){return Sa(n,za),n}function V(n){var t,e;return function(r,u,i){var a,o=n[i].update,l=o.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(a=o[t])&&++t<l;);return a}}function X(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function u(){var u=l(t,ca(arguments));r.call(this),this.addEventListener(n,this[a]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+oa.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),l=$;o>0&&(n=n.slice(0,o));var c=La.get(n);return c&&(n=c,l=B),o?t?u:r:t?b:i}function $(n,t){return function(e){var r=oa.event;oa.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{oa.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Ta,u="click"+r,i=oa.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==qa&&(qa="onselectstart"in e?!1:x(e.style,"userSelect")),qa){var a=n(e).style,o=a[qa];a[qa]="none"}return function(n){if(i.on(r,null),qa&&(a[qa]=o),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Ra){var i=t(n);if(i.scrollX||i.scrollY){r=oa.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=r[0][0].getScreenCTM();Ra=!(a.f||a.e),r.remove()}}return Ra?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var o=n.getBoundingClientRect();return[e.clientX-o.left-n.clientLeft,e.clientY-o.top-n.clientTop]}function G(){return oa.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?ja:Math.acos(n)}function tn(n){return n>1?Ha:-1>n?-Ha:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function an(n){return(n=Math.sin(n/2))*n}function on(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(a-i)*n/60:180>n?a:240>n?i+(a-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,i=2*e-a,new yn(u(n+120),u(n),u(n-120))}function sn(n,t,e){return this instanceof sn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof sn?new sn(n.h,n.c,n.l):n instanceof hn?pn(n.l,n.a,n.b):pn((n=Sn((n=oa.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new sn(n,t,e)}function fn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Oa)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof sn?fn(n.h,n.c,n.l):Sn((n=yn(n)).r,n.g,n.b):new hn(n,t,e)}function gn(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=vn(u)*Ka,r=vn(r)*Qa,i=vn(i)*no,new yn(mn(3.2404542*u-1.5371385*r-.4985314*i),mn(-.969266*u+1.8760108*r+.041556*i),mn(.0556434*u-.2040259*r+1.0572252*i))}function pn(n,t,e){return n>0?new sn(Math.atan2(e,t)*Ia,Math.sqrt(t*t+e*e),n):new sn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function mn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function yn(n,t,e){return this instanceof yn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof yn?new yn(n.r,n.g,n.b):_n(""+n,yn,cn):new yn(n,t,e)}function Mn(n){return new yn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,u,i,a=0,o=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Nn(u[0]),Nn(u[1]),Nn(u[2]))}return(i=ro.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(a=(3840&i)>>4,a=a>>4|a,o=240&i,o=o>>4|o,l=15&i,l=l<<4|l):7===n.length&&(a=(16711680&i)>>16,o=(65280&i)>>8,l=255&i)),t(a,o,l))}function wn(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-i,l=(a+i)/2;return o?(u=.5>l?o/(a+i):o/(2-a-i),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=NaN,u=l>0&&1>l?0:r),new ln(r,u,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/Ka),u=dn((.2126729*n+.7151522*t+.072175*e)/Qa),i=dn((.0193339*n+.119192*t+.9503041*e)/no);return hn(116*u-16,500*(r-u),200*(u-i))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function u(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(i,l)}catch(r){return void a.error.call(i,r)}a.load.call(i,n)}else a.error.call(i,l)}var i={},a=oa.dispatch("beforesend","progress","load","error"),o={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=u:l.onreadystatechange=function(){l.readyState>3&&u()},l.onprogress=function(n){var t=oa.event;oa.event=n;try{a.progress.call(i,l)}finally{oa.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(c=n,i):c},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ca(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),l.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),l.setRequestHeader)for(var s in o)l.setRequestHeader(s,o[s]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),a.beforesend.call(i,l),l.send(null==r?null:r),i},i.abort=function(){return l.abort(),i},oa.rebind(i,a,"on"),null==r?i:i.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,n:null};return io?io.n=i:uo=i,io=i,ao||(oo=clearTimeout(oo),ao=1,lo(Tn)),i}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(oo),oo=setTimeout(Tn,t)),ao=0):(ao=1,lo(Tn))}function Rn(){for(var n=Date.now(),t=uo;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=uo,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:uo=t.n;return io=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function jn(n,t){var e=Math.pow(10,3*Ma(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Un(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],a=0,o=r[0],l=0;u>0&&o>0&&(l+o+1>t&&(o=Math.max(1,t-l)),i.push(n.substring(u-=o,u+o)),!((l+=o+1)>t));)o=r[a=(a+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=so.exec(n),r=e[1]||" ",a=e[2]||">",o=e[3]||"-",l=e[4]||"",c=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===a)&&(c=r="0",a="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===l&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=fo.get(g)||Fn;var M=c&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===o?"":o;if(0>p){var l=oa.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===a?u+n+k:">"===a?k+u+n:"^"===a?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new go(e-1)),1),e}function i(n,e){return t(n=new go(+n),e),n}function a(n,r,i){var a=u(n),o=[];if(i>1)for(;r>a;)e(a)%i||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{go=Hn;var r=new Hn;return r._=n,a(r,t,e)}finally{go=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=a;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(u),l.offset=In(i),l.range=o,n}function In(n){return function(t,e){try{go=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{go=Date}}}function Yn(n){function t(n){function t(t){for(var e,u,i,a=[],o=-1,l=0;++o<r;)37===n.charCodeAt(o)&&(a.push(n.slice(l,o)),null!=(u=vo[e=n.charAt(++o)])&&(e=n.charAt(++o)),(i=A[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),a.push(e),l=o+1);return a.push(n.slice(l,o)),a.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&go!==Hn,a=new(i?Hn:go);return"j"in r?a.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),a.setFullYear(r.y,0,1),a.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(a.getDay()+5)%7:r.w+7*r.U-(a.getDay()+6)%7)):a.setFullYear(r.y,r.m,r.d),a.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?a._:a},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,a,o=0,l=t.length,c=e.length;l>o;){if(r>=c)return-1;if(u=t.charCodeAt(o++),37===u){if(a=t.charAt(o++),i=C[a in vo?t.charAt(o++):a],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{go=Hn;var t=new go;return t._=n,r(t)}finally{go=Date}}var r=t(n);return e.parse=function(n){try{go=Hn;var t=r.parse(n);return t&&t._}finally{go=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=oa.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(m),k=Xn(m),N=Vn(y),E=Xn(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ho.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ho.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ho.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:ot,"%":function(){return"%"}},C={a:r,A:u,b:i,B:a,c:o,d:tt,e:tt,H:rt,I:rt,j:et,L:at,m:nt,M:ut,p:s,S:it,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Vn(n){return new RegExp("^(?:"+n.map(oa.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ut(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function it(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function at(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ot(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=Ma(t)/60|0,u=Ma(t)%60;return e+Zn(r,"0",2)+Zn(u,"0",2)}function lt(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function st(){}function ft(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ht(n,t){n&&_o.hasOwnProperty(n.type)&&_o[n.type](n,t)}function gt(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function pt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)gt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Oa,t=t*Oa/2+ja/4;var e=n-r,a=e>=0?1:-1,o=a*e,l=Math.cos(t),c=Math.sin(t),s=i*c,f=u*l+s*Math.cos(o),h=s*a*Math.sin(o);So.add(Math.atan2(h,f)),r=n,u=l,i=c}var t,e,r,u,i;ko.point=function(a,o){ko.point=n,r=(t=a)*Oa,u=Math.cos(o=(e=o)*Oa/2+ja/4),i=Math.sin(o)},ko.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function mt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function yt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return Ma(n[0]-t[0])<Da&&Ma(n[1]-t[1])<Da}function St(n,t){n*=Oa;var e=Math.cos(t*=Oa);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++No,Ao+=(n-Ao)/No,Co+=(t-Co)/No,zo+=(e-zo)/No}function Nt(){function n(n,u){n*=Oa;var i=Math.cos(u*=Oa),a=i*Math.cos(n),o=i*Math.sin(n),l=Math.sin(u),c=Math.atan2(Math.sqrt((c=e*l-r*o)*c+(c=r*a-t*l)*c+(c=t*o-e*a)*c),t*a+e*o+r*l);Eo+=c,Lo+=c*(t+(t=a)),qo+=c*(e+(e=o)),To+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;jo.point=function(u,i){u*=Oa;var a=Math.cos(i*=Oa);t=a*Math.cos(u),e=a*Math.sin(u),r=Math.sin(i),jo.point=n,kt(t,e,r)}}function Et(){jo.point=St}function At(){function n(n,t){n*=Oa;var e=Math.cos(t*=Oa),a=e*Math.cos(n),o=e*Math.sin(n),l=Math.sin(t),c=u*l-i*o,s=i*a-r*l,f=r*o-u*a,h=Math.sqrt(c*c+s*s+f*f),g=r*a+u*o+i*l,p=h&&-nn(g)/h,v=Math.atan2(h,g);Ro+=p*c,Do+=p*s,Po+=p*f,Eo+=v,Lo+=v*(r+(r=a)),qo+=v*(u+(u=o)),To+=v*(i+(i=l)),kt(r,u,i)}var t,e,r,u,i;jo.point=function(a,o){t=a,e=o,jo.point=n,a*=Oa;var l=Math.cos(o*=Oa);r=l*Math.cos(a),u=l*Math.sin(a),i=Math.sin(o),kt(r,u,i)},jo.lineEnd=function(){n(t,e),jo.lineEnd=Et,jo.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,u){var i=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){u.lineStart();for(var o=0;t>o;++o)u.point((e=n[o])[0],e[1]);return void u.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,i.push(l),a.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,i.push(l),a.push(c)}}),a.sort(t),qt(i),qt(a),i.length){for(var o=0,l=e,c=a.length;c>o;++o)a[o].e=l=!l;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var o=0,c=s.length;c>o;++o)u.point((f=s[o])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var o=s.length-1;o>=0;--o)u.point((f=s[o])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(u,i){function a(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function o(n,t){var e=u(n,t);d.point(e[0],e[1])}function l(){y.point=o,d.lineStart()}function c(){y.point=a,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,a=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Dt))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:a,lineStart:l,lineEnd:c,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=a,y.lineStart=l,y.lineEnd=c,g=oa.merge(g);var n=Ot(m,p);g.length?(b||(i.polygonStart(),b=!0),Lt(g,jt,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Pt(),x=t(M),b=!1;return y}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function jt(n,t){return((n=n.x)[0]<0?n[1]-Ha-Da:Ha-n[1])-((t=t.x)[0]<0?t[1]-Ha-Da:Ha-t[1])}function Ut(n){var t,e=NaN,r=NaN,u=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(i,a){var o=i>0?ja:-ja,l=Ma(i-e);Ma(l-ja)<Da?(n.point(e,r=(r+a)/2>0?Ha:-Ha),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(i,r),t=0):u!==o&&l>=ja&&(Ma(e-u)<Da&&(e-=u*Da),Ma(i-o)<Da&&(i-=o*Da),r=Ft(e,r,i,a),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=i,r=a),u=o},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var u,i,a=Math.sin(n-e);return Ma(a)>Da?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*a)):(t+r)/2}function Ht(n,t,e,r){var u;if(null==n)u=e*Ha,r.point(-ja,u),r.point(0,u),r.point(ja,u),r.point(ja,0),r.point(ja,-u),r.point(0,-u),r.point(-ja,-u),r.point(-ja,0),r.point(-ja,u);else if(Ma(n[0]-t[0])>Da){var i=n[0]<t[0]?ja:-ja;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,a=0;So.reset();for(var o=0,l=t.length;l>o;++o){var c=t[o],s=c.length;if(s)for(var f=c[0],h=f[0],g=f[1]/2+ja/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=c[d];var m=n[0],y=n[1]/2+ja/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>ja,k=p*M;if(So.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Ua:b,S^h>=e^m>=e){var N=yt(dt(f),dt(n));bt(N);var E=yt(u,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(a+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Da>i||Da>i&&0>So)^1&a}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,l,c,s;return{lineStart:function(){c=l=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=a?v?0:u(f,h):v?u(f+(0>f?ja:-ja),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(g=r(e,p),(wt(e,g)||wt(p,g))&&(p[0]+=Da,p[1]+=Da,v=t(p[0],p[1]))),v!==l)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^v){var m;d&i||!(m=r(p,e,!0))||(s=0,a?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&wt(e,p)||n.point(p[0],p[1]),e=p,l=v,i=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return s|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),u=dt(t),a=[1,0,0],o=yt(r,u),l=mt(o,o),c=o[0],s=l-c*c;if(!s)return!e&&n;var f=i*l/s,h=-i*c/s,g=yt(a,o),p=xt(a,f),v=xt(o,h);Mt(p,v);var d=g,m=mt(p,d),y=mt(d,d),M=m*m-y*(mt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-m-x)/y);if(Mt(b,p),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=Ma(E-ja)<Da,C=A||Da>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(Ma(b[0]-w)<Da?k:N):k<=b[1]&&b[1]<=N:E>ja^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-m+x)/y);return Mt(z,p),[b,_t(z)]}}}function u(t,e){var r=a?n:ja-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),a=i>0,o=Ma(i)>Da,l=ve(n,6*Oa);return Rt(t,e,l,a?[0,-n]:[-ja,n-ja])}function Yt(n,t,e,r){return function(u){var i,a=u.a,o=u.b,l=a.x,c=a.y,s=o.x,f=o.y,h=0,g=1,p=s-l,v=f-c;if(i=n-l,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-l,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-c,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-c,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:l+h*p,y:c+h*v}),1>g&&(u.b={x:l+g*p,y:c+g*v}),u}}}}}}function Zt(n,t,e,r){function u(r,u){return Ma(r[0]-n)<Da?u>0?0:3:Ma(r[0]-e)<Da?u>0?2:1:Ma(r[1]-t)<Da?u>0?1:0:u>0?3:2}function i(n,t){return a(n.x,t.x)}function a(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(o){function l(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,a=1,o=d[u],l=o.length,c=o[0];l>a;++a)i=o[a],c[1]<=r?i[1]>r&&Q(c,i,n)>0&&++t:i[1]<=r&&Q(c,i,n)<0&&--t,c=i;return 0!==t}function c(i,o,l,c){var s=0,f=0;if(null==i||(s=u(i,l))!==(f=u(o,l))||a(i,o)<0^l>0){do c.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+l+4)%4)!==f)}else c.point(o[0],o[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&o.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=NaN}function g(){v&&(p(y,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=f,w&&o.lineEnd()}function p(n,t){n=Math.max(-Fo,Math.min(Fo,n)),t=Math.max(-Fo,Math.min(Fo,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(o.lineStart(),o.point(n,t));else if(e&&w)o.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(o.lineStart(),o.point(r.a.x,r.a.y)),o.point(r.b.x,r.b.y),e||o.lineEnd(),k=!1):e&&(o.lineStart(),o.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,N=o,E=Pt(),A=Yt(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){o=E,v=[],d=[],k=!0},polygonEnd:function(){o=N,v=oa.merge(v);var t=l([n,r]),e=k&&t,u=v.length;(e||u)&&(o.polygonStart(),e&&(o.lineStart(),c(null,null,1,o),o.lineEnd()),u&&Lt(v,i,t,c,o),o.polygonEnd()),v=d=m=null}};return C}}function Vt(n){var t=0,e=ja/3,r=oe(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ja/180,e=n[1]*ja/180):[t/ja*180,e/ja*180]},u}function Xt(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),a-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),a=Math.sqrt(i)/u;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/u,tn((i-(n*n+e*e)*u*u)/(2*u))]},e}function $t(){function n(n,t){Oo+=u*n-r*t,r=n,u=t}var t,e,r,u;Xo.point=function(i,a){Xo.point=n,t=r=i,e=u=a},Xo.lineEnd=function(){n(t,e)}}function Bt(n,t){Io>n&&(Io=n),n>Zo&&(Zo=n),Yo>t&&(Yo=t),t>Vo&&(Vo=t)}function Wt(){function n(n,t){a.push("M",n,",",t,i)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function u(){a.push("Z")}var i=Jt(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return i=Jt(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ao+=n,Co+=t,++zo}function Kt(){function n(n,r){var u=n-t,i=r-e,a=Math.sqrt(u*u+i*i);Lo+=a*(t+n)/2,qo+=a*(e+r)/2,To+=a,Gt(t=n,e=r)}var t,e;Bo.point=function(r,u){Bo.point=n,Gt(t=r,e=u)}}function Qt(){Bo.point=Gt}function ne(){function n(n,t){var e=n-r,i=t-u,a=Math.sqrt(e*e+i*i);Lo+=a*(r+n)/2,qo+=a*(u+t)/2,To+=a,a=u*n-r*t,Ro+=a*(r+n),Do+=a*(u+t),Po+=3*a,Gt(r=n,u=t)}var t,e,r,u;Bo.point=function(i,a){Bo.point=n,Gt(t=r=i,e=u=a)},Bo.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+a,e),n.arc(t,e,a,0,Ua)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function u(){o.point=t}function i(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:u,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=u,o.point=t},pointRadius:function(n){return a=n,o},result:b};return o}function ee(n){function t(n){return(o?r:e)(n)}function e(t){return ie(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=i,t.lineStart()}function i(e,r){var i=dt([e,r]),a=n(e,r);u(M,x,y,b,_,w,M=a[0],x=a[1],y=e,b=i[0],_=i[1],w=i[2],o,t),t.point(M,x)}function a(){S.point=e,t.lineEnd()}function l(){r(),S.point=c,S.lineEnd=s}function c(n,t){
i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,o,t),S.lineEnd=a,a()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:a,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,o,l,c,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=o+g,_=l+p,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=Ma(Ma(w)-1)<Da||Ma(r-h)<Da?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-y*L;(q*q/x>i||Ma((y*z+M*L)/x-.5)>.3||a>o*g+l*p+c*v)&&(u(t,e,r,o,l,c,A,C,N,b/=S,_/=S,w,d,m),m.point(A,C),u(A,C,N,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,a=Math.cos(30*Oa),o=16;return t.precision=function(n){return arguments.length?(o=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function re(n){var t=ee(function(t,e){return n([t*Ia,e*Ia])});return function(n){return le(t(n))}}function ue(n){this.stream=n}function ie(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ae(n){return oe(function(){return n})()}function oe(n){function t(n){return n=o(n[0]*Oa,n[1]*Oa),[n[0]*h+l,c-n[1]*h]}function e(n){return n=o.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Ia,n[1]*Ia]}function r(){o=Ct(a=fe(m,M,x),i);var n=i(v,d);return l=g-n[0]*h,c=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,a,o,l,c,s,f=ee(function(n,t){return n=i(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=Uo,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=le(b(a,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Uo):It((w=+n)*Oa),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Oa,d=n[1]%360*Oa,r()):[v*Ia,d*Ia]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Oa,M=n[1]%360*Oa,x=n.length>2?n[2]%360*Oa:0,r()):[m*Ia,M*Ia,x*Ia]},oa.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function le(n){return ie(n,function(t,e){n.point(t*Oa,e*Oa)})}function ce(n,t){return[n,t]}function se(n,t){return[n>ja?n-Ua:-ja>n?n+Ua:n,t]}function fe(n,t,e){return n?t||e?Ct(ge(n),pe(t,e)):ge(n):t||e?pe(t,e):se}function he(n){return function(t,e){return t+=n,[t>ja?t-Ua:-ja>t?t+Ua:t,e]}}function ge(n){var t=he(n);return t.invert=he(-n),t}function pe(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*r+o*u;return[Math.atan2(l*i-s*a,o*r-c*u),tn(s*i+l*a)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*i-l*a;return[Math.atan2(l*i+c*a,o*r+s*u),tn(s*r-o*u)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,a,o){var l=a*t;null!=u?(u=de(e,u),i=de(e,i),(a>0?i>u:u>i)&&(u+=a*Ua)):(u=n+a*Ua,i=n-.5*l);for(var c,s=u;a>0?s>i:i>s;s-=l)o.point((c=_t([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Da)%(2*Math.PI)}function me(n,t,e){var r=oa.range(n,t-Da,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function ye(n,t,e){var r=oa.range(n,t-Da,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),a=Math.cos(r),o=Math.sin(r),l=u*Math.cos(n),c=u*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(an(r-t)+u*a*an(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*l+t*s,u=e*c+t*f,a=e*i+t*o;return[Math.atan2(u,r)*Ia,Math.atan2(a,Math.sqrt(r*r+u*u))*Ia]}:function(){return[n*Ia,t*Ia]};return p.distance=h,p}function _e(){function n(n,u){var i=Math.sin(u*=Oa),a=Math.cos(u),o=Ma((n*=Oa)-t),l=Math.cos(o);Wo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*i-e*a*l)*o),e*i+r*a*l),t=n,e=i,r=a}var t,e,r;Jo.point=function(u,i){t=u*Oa,e=Math.sin(i*=Oa),r=Math.cos(i),Jo.point=n},Jo.lineEnd=function(){Jo.point=Jo.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),a=Math.cos(u);return[Math.atan2(n*i,r*a),Math.asin(r&&e*i/r)]},e}function Se(n,t){function e(n,t){a>0?-Ha+Da>t&&(t=-Ha+Da):t>Ha-Da&&(t=Ha-Da);var e=a/Math.pow(u(t),i);return[e*Math.sin(i*n),a-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ja/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),a=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=a-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(a/r,1/i))-Ha]},e):Ne}function ke(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return Ma(u)<Da?ce:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(ja/4+t/2))]}function Ee(n){var t,e=ae(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=i.apply(e,arguments);if(a===e){if(t=null==n){var o=ja*r(),l=u();i([[l[0]-o,l[1]-o],[l[0]+o,l[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(ja/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var u=n[0],i=e[0],a=t[0]-u,o=r[0]-i,l=n[1],c=e[1],s=t[1]-l,f=r[1]-c,h=(o*(l-c)-f*(u-i))/(f*a-o*s);return[u+h*a,l+h*s]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function je(n){var t=ll.pop()||new Pe;return t.site=n,t}function Ue(n){Be(n),il.remove(n),ll.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,a=n.N,o=[n];Ue(n);for(var l=i;l.circle&&Ma(e-l.circle.x)<Da&&Ma(r-l.circle.cy)<Da;)i=l.P,o.unshift(l),Ue(l),l=i;o.unshift(l),Be(l);for(var c=a;c.circle&&Ma(e-c.circle.x)<Da&&Ma(r-c.circle.cy)<Da;)a=c.N,o.push(c),Ue(c),c=a;o.push(c),Be(c);var s,f=o.length;for(s=1;f>s;++s)c=o[s],l=o[s-1],nr(c.edge,l.site,c.site,u);l=o[0],c=o[f-1],c.edge=Ke(l.site,c.site,null,u),$e(l),$e(c)}function He(n){for(var t,e,r,u,i=n.x,a=n.y,o=il._;o;)if(r=Oe(o,a)-i,r>Da)o=o.L;else{if(u=i-Ie(o,a),!(u>Da)){r>-Da?(t=o.P,e=o):u>-Da?(t=o,e=o.N):t=e=o;break}if(!o.R){t=o;break}o=o.R}var l=je(n);if(il.insert(t,l),t||e){if(t===e)return Be(t),e=je(t.site),il.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,s=c.x,f=c.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};nr(e.edge,c,p,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,p,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var a=n.P;if(!a)return-(1/0);e=a.site;var o=e.x,l=e.y,c=l-t;if(!c)return o;var s=o-r,f=1/i-1/c,h=s/c;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*c)-l+c/2+u-i/2)))/f+r:(r+o)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,u,i,a,o,l,c,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=ul,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(o=i.edges,l=o.length,a=0;l>a;)s=o[a].end(),r=s.x,u=s.y,c=o[++a%l].start(),t=c.x,e=c.y,(Ma(r-t)>Da||Ma(u-e)>Da)&&(o.splice(a,0,new tr(Qe(i.site,s,Ma(r-f)<Da&&p-u>Da?{x:f,y:Ma(t-f)<Da?e:p}:Ma(u-p)<Da&&h-r>Da?{x:Ma(e-p)<Da?t:h,y:p}:Ma(r-h)<Da&&u-g>Da?{x:h,y:Ma(t-h)<Da?e:g}:Ma(u-g)<Da&&r-f>Da?{x:Ma(e-g)<Da?t:f,y:g}:null),i.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var a=u.x,o=u.y,l=r.x-a,c=r.y-o,s=i.x-a,f=i.y-o,h=2*(l*f-c*s);if(!(h>=-Pa)){var g=l*l+c*c,p=s*s+f*f,v=(f*g-c*p)/h,d=(l*p-s*g)/h,f=d+o,m=cl.pop()||new Xe;m.arc=n,m.site=u,m.x=v+a,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=ol._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}ol.insert(y,m),y||(al=m)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ol.remove(t),cl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=rl,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Je(t,n)||!r(t)||Ma(t.a.x-t.b.x)<Da&&Ma(t.a.y-t.b.y)<Da)&&(t.a=t.b=null,e.splice(u,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,a=t[0][0],o=t[1][0],l=t[0][1],c=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(a>d||d>=o)return;if(h>p){if(i){if(i.y>=c)return}else i={x:d,y:l};e={x:d,y:c}}else{if(i){if(i.y<l)return}else i={x:d,y:c};e={x:d,y:l}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else{if(i){if(i.y<l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else if(v>g){if(i){if(i.x>=o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}else{if(i){if(i.x<a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}return n.a=i,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var u=new Ge(n,t);return rl.push(u),e&&nr(u,n,t,e),r&&nr(u,t,n,r),ul[n.i].edges.push(new tr(u,n,t)),ul[t.i].edges.push(new tr(u,t,n)),u}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,rl.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ur(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ir(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ar(n){for(;n.L;)n=n.L;return n}function or(n,t){var e,r,u,i=n.sort(lr).pop();for(rl=[],ul=new Array(n.length),il=new er,ol=new er;;)if(u=al,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(ul[i.i]=new Ye(i),He(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Fe(u.arc)}t&&(We(t),Ze(t));var a={cells:ul,edges:rl};return il=ol=rl=ul=null,a}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function sr(n){return n.x}function fr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function gr(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var a=.5*(e+u),o=.5*(r+i),l=t.nodes;l[0]&&gr(n,l[0],e,r,a,o),l[1]&&gr(n,l[1],a,r,u,o),l[2]&&gr(n,l[2],e,o,a,i),l[3]&&gr(n,l[3],a,o,u,i)}}function pr(n,t,e,r,u,i,a){var o,l=1/0;return function c(n,s,f,h,g){if(!(s>i||f>a||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(l>m){var y=Math.sqrt(l=m);r=t-y,u=e-y,i=t+y,a=e+y,o=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,s,f,x,b);break;case 1:c(n,x,f,h,b);break;case 2:c(n,s,b,x,g);break;case 3:c(n,x,b,h,g)}}}(n,r,u,i,a),o}function vr(n,t){n=oa.rgb(n),t=oa.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,a=t.g-r,o=t.b-u;return function(n){return"#"+bn(Math.round(e+i*n))+bn(Math.round(r+a*n))+bn(Math.round(u+o*n))}}function dr(n,t){var e,r={},u={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function mr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function yr(n,t){var e,r,u,i=fl.lastIndex=hl.lastIndex=0,a=-1,o=[],l=[];for(n+="",t+="";(e=fl.exec(n))&&(r=hl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),o[a]?o[a]+=u:o[++a]=u),(e=e[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:mr(e,r)})),i=hl.lastIndex;return i<t.length&&(u=t.slice(i),o[a]?o[a]+=u:o[++a]=u),o.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)o[(e=l[r]).i]=e.x(n);return o.join("")})}function Mr(n,t){for(var e,r=oa.interpolators.length;--r>=0&&!(e=oa.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],u=[],i=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(Mr(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;a>e;++e)u[e]=t[e];return function(n){for(e=0;o>e;++e)u[e]=r[e](n);return u}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Ha)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ua*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ua/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=oa.hcl(n),t=oa.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,a=t.c-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return fn(e+i*n,r+a*n,u+o*n)+""}}function Dr(n,t){n=oa.hsl(n),t=oa.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,a=t.s-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return cn(e+i*n,r+a*n,u+o*n)+""}}function Pr(n,t){n=oa.lab(n),t=oa.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,a=t.a-r,o=t.b-u;return function(n){return gn(e+i*n,r+a*n,u+o*n)+""}}function jr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Ur(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),u=Fr(t,e),i=Hr(Or(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ia,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ia:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push("translate(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:mr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:mr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(1!==t[0]||1!==t[1])&&e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=oa.transform(n),t=oa.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,u=-1,i=r.length;++u<i;)e[(t=r[u]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),u=e.pop(),i=r.pop(),a=null;u===i;)a=u,u=e.pop(),i=r.pop();return a}function Qr(n){n.fixed|=2}function nu(n){n.fixed&=-7}function tu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function eu(n){n.fixed&=-5}function ru(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,a=n.nodes,o=a.length,l=-1;++l<o;)i=a[l],null!=i&&(ru(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,u+=c*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function uu(n,t){return oa.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=su,n}function iu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function au(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,a=-1;++a<u;)e.push(i[a]);for(;null!=(n=r.pop());)t(n)}function ou(n){return n.children}function lu(n){return n.value}function cu(n,t){return t.value-n.value}function su(n){return oa.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function fu(n){return n.x}function hu(n){return n.y}function gu(n,t,e){n.y0=t,n.y=e}function pu(n){return oa.range(n.length)}function vu(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function du(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function mu(n){return n.reduce(yu,0)}function yu(n,t){return n+t[1]}function Mu(n,t){return xu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function bu(n){return[oa.min(n),oa.max(n)]}function _u(n,t){return n.value-t.value}function wu(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Su(n,t){n._pack_next=t,t._pack_prev=n}function ku(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Nu(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(c=e.length)){var e,r,u,i,a,o,l,c,s=1/0,f=-(1/0),h=1/0,g=-(1/0);if(e.forEach(Eu),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(u=e[1],u.x=u.r,u.y=0,t(u),c>2))for(i=e[2],zu(r,u,i),t(i),wu(r,i),r._pack_prev=i,wu(i,u),u=r._pack_next,a=3;c>a;a++){zu(r,u,i=e[a]);var p=0,v=1,d=1;for(o=u._pack_next;o!==u;o=o._pack_next,v++)if(ku(o,i)){p=1;break}if(1==p)for(l=r._pack_prev;l!==o._pack_prev&&!ku(l,i);l=l._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Su(r,u=o):Su(r=l,u),a--):(wu(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(a=0;c>a;a++)i=e[a],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(Au)}}function Eu(n){n._pack_next=n._pack_prev=n}function Au(n){delete n._pack_next,delete n._pack_prev}function Cu(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,a=u.length;++i<a;)Cu(u[i],t,e,r)}function zu(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var a=t.r+e.r,o=u*u+i*i;a*=a,r*=r;var l=.5+(r-a)/(2*o),c=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+l*u+c*i,e.y=n.y+l*i-c*u}else e.x=n.x+r,e.y=n.y}function Lu(n,t){return n.parent==t.parent?1:2}function qu(n){var t=n.children;return t.length?t[0]:n.t}function Tu(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ru(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Du(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pu(n,t,e){return n.a.parent===t.parent?n.a:e}function ju(n){return 1+oa.max(n,function(n){return n.y})}function Uu(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fu(n){var t=n.children;return t&&t.length?Fu(t[0]):n}function Hu(n){var t,e=n.children;return e&&(t=e.length)?Hu(e[t-1]):n}function Ou(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Iu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Yu(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zu(n){return n.rangeExtent?n.rangeExtent():Yu(n.range())}function Vu(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Xu(n,t){var e,r=0,u=n.length-1,i=n[r],a=n[u];return i>a&&(e=r,r=u,u=e,e=i,i=a,a=e),n[r]=t.floor(i),n[u]=t.ceil(a),n}function $u(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:wl}function Bu(n,t,e,r){var u=[],i=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)u.push(e(n[a-1],n[a])),i.push(r(t[a-1],t[a]));return function(t){var e=oa.bisect(n,t,1,o)-1;return i[e](u[e](t))}}function Wu(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Bu:Vu,l=r?Wr:Br;return a=u(n,t,l,e),o=u(t,n,l,Mr),i}function i(n){return a(n)}var a,o;return i.invert=function(n){return o(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(jr)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Qu(n,t)},i.tickFormat=function(t,e){return ni(n,t,e)},i.nice=function(t){return Gu(n,t),u()},i.copy=function(){return Wu(n,t,e,r)},u()}function Ju(n,t){return oa.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gu(n,t){return Xu(n,$u(Ku(n,t)[2]))}function Ku(n,t){null==t&&(t=10);var e=Yu(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Qu(n,t){return oa.range.apply(oa,Ku(n,t))}function ni(n,t,e){var r=Ku(n,t);if(e){var u=so.exec(e);if(u.shift(),"s"===u[8]){var i=oa.formatPrefix(Math.max(Ma(r[0]),Ma(r[1])));return u[7]||(u[7]="."+ti(i.scale(r[2]))),u[8]="f",e=oa.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+ei(u[8],r)),e=u.join("")}else e=",."+ti(r[2])+"f";return oa.format(e)}function ti(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function ei(n,t){var e=ti(t[2]);return n in Sl?Math.abs(e-ti(Math.max(Ma(t[0]),Ma(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ri(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(u(t))}return a.invert=function(t){return i(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),a):t},a.nice=function(){var t=Xu(r.map(u),e?Math:Nl);return n.domain(t),r=t.map(i),a},a.ticks=function(){var n=Yu(r),a=[],o=n[0],l=n[1],c=Math.floor(u(o)),s=Math.ceil(u(l)),f=t%1?2:t;if(isFinite(s-c)){if(e){for(;s>c;c++)for(var h=1;f>h;h++)a.push(i(c)*h);a.push(i(c))}else for(a.push(i(c));c++<s;)for(var h=f-1;h>0;h--)a.push(i(c)*h);for(c=0;a[c]<o;c++);for(s=a.length;a[s-1]>l;s--);a=a.slice(c,s)}return a},a.tickFormat=function(n,t){if(!arguments.length)return kl;arguments.length<2?t=kl:"function"!=typeof t&&(t=oa.format(t));var r,o=Math.max(.1,n/a.ticks().length),l=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(l(u(n)+r))<=o?t(n):""}},a.copy=function(){return ri(n.copy(),t,e,r)},Ju(a,n)}function ui(n,t,e){function r(t){return n(u(t))}var u=ii(t),i=ii(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Qu(e,n)},r.tickFormat=function(n,t){return ni(e,n,t)},r.nice=function(n){return r.domain(Gu(e,n))},r.exponent=function(a){return arguments.length?(u=ii(t=a),i=ii(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return ui(n.copy(),t,e)},Ju(r,n)}function ii(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ai(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):NaN))-1)%i.length]}function r(t,e){return oa.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new c;for(var i,a=-1,o=r.length;++a<o;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+o);return i=r(l+s*o/2,s),a=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+o)|0;return i=r(l+Math.round(s*o/2+(c-l-(n.length-1+o)*s)/2),s),a=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=(f-s)/(n.length-o+2*l);return i=r(s+h*l,h),c&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=Math.floor((f-s)/(n.length-o+2*l));return i=r(s+Math.round((f-s-(n.length-o)*h)/2),h),c&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Yu(t.a[0])},e.copy=function(){return ai(n,t)},e.domain(n)}function oi(n,t){function i(){var e=0,r=t.length;for(o=[];++e<r;)o[e-1]=oa.quantile(n,e/r);return a}function a(n){return isNaN(n=+n)?void 0:t[oa.bisect(o,n)]}var o;return a.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},a.range=function(n){return arguments.length?(t=n,i()):t},a.quantiles=function(){return o},a.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?o[e-1]:n[0],e<o.length?o[e]:n[n.length-1]]},a.copy=function(){return oi(n,t)},i()}function li(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),a=e.length-1,r}var i,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/i+n,[t,t+1/i]},r.copy=function(){return li(n,t,e)},u()}function ci(n,t){function e(e){return e>=e?t[oa.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ci(n,t)},e}function si(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qu(n,t)},t.tickFormat=function(t,e){return ni(n,t,e)},t.copy=function(){return si(n)},t}function fi(){return 0}function hi(n){return n.innerRadius}function gi(n){return n.outerRadius}function pi(n){return n.startAngle}function vi(n){return n.endAngle}function di(n){return n&&n.padAngle}function mi(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function yi(n,t,e,r,u){var i=n[0]-t[0],a=n[1]-t[1],o=(u?r:-r)/Math.sqrt(i*i+a*a),l=o*a,c=-o*i,s=n[0]+l,f=n[1]+c,h=t[0]+l,g=t[1]+c,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(Math.max(0,M*M*y-x*x)),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,N=_-p,E=w-v,A=S-p,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mi(n){function t(t){function a(){c.push("M",i(n(s),o))}for(var l,c=[],s=[],f=-1,h=t.length,g=En(e),p=En(r);++f<h;)u.call(this,l=t[f],f)?s.push([+g.call(this,l,f),+p.call(this,l,f)]):s.length&&(a(),s=[]);return s.length&&a(),c.length?c.join(""):null}var e=Ce,r=ze,u=zt,i=xi,a=i.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?i=n:(i=ql.get(n)||xi).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function xi(n){return n.length>1?n.join("L"):n+"Z"}function bi(n){return n.join("L")+"Z"}function _i(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function wi(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Si(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function ki(n,t){return n.length<4?xi(n):n[1]+Ai(n.slice(1,-1),Ci(n,t))}function Ni(n,t){return n.length<3?bi(n):n[0]+Ai((n.push(n[0]),n),Ci([n[n.length-2]].concat(n,[n[1]]),t))}function Ei(n,t){return n.length<3?xi(n):n[0]+Ai(n,Ci(n,t))}function Ai(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xi(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],a=t[0],o=a,l=1;if(e&&(r+="Q"+(i[0]-2*a[0]/3)+","+(i[1]-2*a[1]/3)+","+i[0]+","+i[1],u=n[1],l=2),t.length>1){o=t[1],i=n[l],l++,r+="C"+(u[0]+a[0])+","+(u[1]+a[1])+","+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1];for(var c=2;c<t.length;c++,l++)i=n[l],o=t[c],r+="S"+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1]}if(e){var s=n[l];r+="Q"+(i[0]+2*o[0]/3)+","+(i[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function Ci(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],a=n[1],o=1,l=n.length;++o<l;)e=i,i=a,a=n[o],r.push([u*(a[0]-e[0]),u*(a[1]-e[1])]);return r}function zi(n){if(n.length<3)return xi(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],a=[u,u,u,(r=n[1])[0]],o=[i,i,i,r[1]],l=[u,",",i,"L",Ri(Dl,a),",",Ri(Dl,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Di(l,a,o);return n.pop(),l.push("L",r),l.join("")}function Li(n){if(n.length<4)return xi(n);for(var t,e=[],r=-1,u=n.length,i=[0],a=[0];++r<3;)t=n[r],i.push(t[0]),a.push(t[1]);for(e.push(Ri(Dl,i)+","+Ri(Dl,a)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),a.shift(),a.push(t[1]),Di(e,i,a);return e.join("")}function qi(n){for(var t,e,r=-1,u=n.length,i=u+4,a=[],o=[];++r<4;)e=n[r%u],a.push(e[0]),o.push(e[1]);for(t=[Ri(Dl,a),",",Ri(Dl,o)],--r;++r<i;)e=n[r%u],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Di(t,a,o);return t.join("")}function Ti(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],a=n[0][1],o=n[e][0]-i,l=n[e][1]-a,c=-1;++c<=e;)r=n[c],u=c/e,r[0]=t*r[0]+(1-t)*(i+u*o),r[1]=t*r[1]+(1-t)*(a+u*l);return zi(n)}function Ri(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Di(n,t,e){n.push("C",Ri(Tl,t),",",Ri(Tl,e),",",Ri(Rl,t),",",Ri(Rl,e),",",Ri(Dl,t),",",Ri(Dl,e))}function Pi(n,t){return(t[1]-n[1])/(t[0]-n[0])}function ji(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],a=r[0]=Pi(u,i);++t<e;)r[t]=(a+(a=Pi(u=i,i=n[t+1])))/2;return r[t]=a,r}function Ui(n){for(var t,e,r,u,i=[],a=ji(n),o=-1,l=n.length-1;++o<l;)t=Pi(n[o],n[o+1]),Ma(t)<Da?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),a[o]=u*e,a[o+1]=u*r));for(o=-1;++o<=l;)u=(n[Math.min(l,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),i.push([u||0,a[o]*u||0]);return i}function Fi(n){return n.length<3?xi(n):n[0]+Ai(n,Ui(n))}function Hi(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Ha,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Oi(n){function t(t){function l(){v.push("M",o(n(m),f),s,c(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=En(e),b=En(u),_=e===r?function(){return g;
}:En(r),w=u===i?function(){return p}:En(i);++y<M;)a.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(l(),d=[],m=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,u=0,i=ze,a=zt,o=xi,l=o.key,c=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?o=n:(o=ql.get(n)||xi).key,c=o.reverse||o,s=o.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ii(n){return n.radius}function Yi(n){return[n.x,n.y]}function Zi(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ha;return[e*Math.cos(r),e*Math.sin(r)]}}function Vi(){return 64}function Xi(){return"circle"}function $i(n){var t=Math.sqrt(n/ja);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bi(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wi(n,t,e){return Sa(n,Il),n.namespace=t,n.id=e,n}function Ji(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,"function"==typeof e?function(n,a,o){n[i][u].tween.set(t,r(e.call(n,n.__data__,a,o)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Gi(n){return null==n&&(n=""),function(){this.textContent=n}}function Ki(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qi(n,t,e,r,u){function i(n){var t=v.delay;return s.t=t+l,n>=t?a(n-t):void(s.c=a)}function a(e){var u=p.active,i=p[u];i&&(i.timer.c=null,i.timer.t=NaN,--p.count,delete p[u],i.event&&i.event.interrupt.call(n,n.__data__,i.index));for(var a in p)if(r>+a){var c=p[a];c.timer.c=null,c.timer.t=NaN,--p.count,delete p[a]}s.c=o,qn(function(){return s.c&&o(e||1)&&(s.c=null,s.t=NaN),1},0,l),p.active=r,v.event&&v.event.start.call(n,n.__data__,t),g=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&g.push(r)}),h=v.ease,f=v.duration}function o(u){for(var i=u/f,a=h(i),o=g.length;o>0;)g[--o].call(n,a);return i>=1?(v.event&&v.event.end.call(n,n.__data__,t),--p.count?delete p[r]:delete n[e],1):void 0}var l,s,f,h,g,p=n[e]||(n[e]={active:0,count:0}),v=p[r];v||(l=u.time,s=qn(i,0,l),v=p[r]={tween:new c,time:l,timer:s,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++p.count)}function na(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function ta(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function ea(n){return n.toISOString()}function ra(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=oa.bisect(Gl,u);return i==Gl.length?[t.year,Ku(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Gl[i-1]<Gl[i]/u?i-1:i]:[nc,Ku(n,e)[2]]}return r.invert=function(t){return ua(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(ua)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,ua(+e+1),t).length}var i=r.domain(),a=Yu(i),o=null==n?u(a,10):"number"==typeof n&&u(a,n);return o&&(n=o[0],t=o[1]),r.domain(Xu(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=ua(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=ua(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yu(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],ua(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ra(n.copy(),t,e)},Ju(r,n)}function ua(n){return new Date(n)}function ia(n){return JSON.parse(n.responseText)}function aa(n){var t=sa.createRange();return t.selectNode(sa.body),t.createContextualFragment(n.responseText)}var oa={version:"3.5.9"},la=[].slice,ca=function(n){return la.call(n)},sa=this.document;if(sa)try{ca(sa.documentElement.childNodes)[0].nodeType}catch(fa){ca=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),sa)try{sa.createElement("DIV").style.setProperty("opacity",0,"")}catch(ha){var ga=this.Element.prototype,pa=ga.setAttribute,va=ga.setAttributeNS,da=this.CSSStyleDeclaration.prototype,ma=da.setProperty;ga.setAttribute=function(n,t){pa.call(this,n,t+"")},ga.setAttributeNS=function(n,t,e){va.call(this,n,t,e+"")},da.setProperty=function(n,t,e){ma.call(this,n,t+"",e)}}oa.ascending=e,oa.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},oa.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},oa.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},oa.extent=function(n,t){var e,r,u,i=-1,a=n.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<a;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},oa.sum=function(n,t){var e,r=0,i=n.length,a=-1;if(1===arguments.length)for(;++a<i;)u(e=+n[a])&&(r+=e);else for(;++a<i;)u(e=+t.call(n,n[a],a))&&(r+=e);return r},oa.mean=function(n,t){var e,i=0,a=n.length,o=-1,l=a;if(1===arguments.length)for(;++o<a;)u(e=r(n[o]))?i+=e:--l;else for(;++o<a;)u(e=r(t.call(n,n[o],o)))?i+=e:--l;return l?i/l:void 0},oa.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},oa.median=function(n,t){var i,a=[],o=n.length,l=-1;if(1===arguments.length)for(;++l<o;)u(i=r(n[l]))&&a.push(i);else for(;++l<o;)u(i=r(t.call(n,n[l],l)))&&a.push(i);return a.length?oa.quantile(a.sort(e),.5):void 0},oa.variance=function(n,t){var e,i,a=n.length,o=0,l=0,c=-1,s=0;if(1===arguments.length)for(;++c<a;)u(e=r(n[c]))&&(i=e-o,o+=i/++s,l+=i*(e-o));else for(;++c<a;)u(e=r(t.call(n,n[c],c)))&&(i=e-o,o+=i/++s,l+=i*(e-o));return s>1?l/(s-1):void 0},oa.deviation=function(){var n=oa.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ya=i(e);oa.bisectLeft=ya.left,oa.bisect=oa.bisectRight=ya.right,oa.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},oa.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},oa.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},oa.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},oa.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=oa.min(arguments,a),e=new Array(t);++n<t;)for(var r,u=-1,i=e[n]=new Array(r);++u<r;)i[u]=arguments[u][n];return e},oa.transpose=function(n){return oa.zip.apply(oa,n)},oa.keys=function(n){var t=[];for(var e in n)t.push(e);return t},oa.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},oa.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},oa.merge=function(n){for(var t,e,r,u=n.length,i=-1,a=0;++i<u;)a+=n[i].length;for(e=new Array(a);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--a]=r[t];return e};var Ma=Math.abs;oa.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,u=[],i=o(Ma(e)),a=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++a)>t;)u.push(r/i);else for(;(r=n+e*++a)<t;)u.push(r/i);return u},oa.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var a in n)e.set(a,n[a]);return e};var xa="__proto__",ba="\x00";l(c,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),oa.nest=function(){function n(t,a,o){if(o>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var l,s,f,h,g=-1,p=a.length,v=i[o++],d=new c;++g<p;)(h=d.get(l=v(s=a[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,o))}):(s={},f=function(e,r){s[e]=n(t,r,o)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(oa.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},oa.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(m,{has:h,add:function(n){return this._[s(n+="")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),oa.behavior={},oa.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var _a=["webkit","ms","moz","Moz","o","O"];oa.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},oa.event=null,oa.requote=function(n){return n.replace(wa,"\\$&")};var wa=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,Sa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ka=function(n,t){return t.querySelector(n)},Na=function(n,t){return t.querySelectorAll(n)},Ea=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ea=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(ka=function(n,t){return Sizzle(n,t)[0]||null},Na=Sizzle,Ea=Sizzle.matchesSelector),oa.selection=function(){return oa.select(sa.documentElement)};var Aa=oa.selection.prototype=[];Aa.select=function(n){var t,e,r,u,i=[];n=A(n);for(var a=-1,o=this.length;++a<o;){i.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var l=-1,c=r.length;++l<c;)(u=r[l])?(t.push(e=n.call(u,u.__data__,l,a)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return E(i)},Aa.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var a=this[u],o=-1,l=a.length;++o<l;)(e=a[o])&&(r.push(t=ca(n.call(e,e.__data__,o,u))),t.parentNode=e);return E(r)};var Ca={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};oa.ns={prefix:Ca,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Ca.hasOwnProperty(e)?{space:Ca[e],local:n}:n}},Aa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=oa.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Aa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!q(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Aa.style=function(n,e,r){var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Aa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(j(t,n[t]));return this}return this.each(j(n,t))},Aa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Aa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Aa.append=function(n){return n=U(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Aa.insert=function(n,t){return n=U(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Aa.remove=function(){return this.each(F)},Aa.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new c,y=new Array(a);for(r=-1;++r<a;)(u=n[r])&&(m.has(d=t.call(u,u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d);for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<a;)r in y&&m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,o.push(p),l.push(g),s.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var o=Z([]),l=E([]),s=E([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return l.enter=function(){return o},l.exit=function(){return s},l},Aa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Aa.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return E(u)},Aa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},Aa.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Aa.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Aa.call=function(n){var t=ca(arguments);return n.apply(t[0]=this,t),this},Aa.empty=function(){return!this.node()},Aa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},Aa.size=function(){var n=0;return Y(this,function(){++n}),n};var za=[];oa.selection.enter=Z,oa.selection.enter.prototype=za,za.append=Aa.append,za.empty=Aa.empty,za.node=Aa.node,za.call=Aa.call,za.size=Aa.size,za.select=function(n){for(var t,e,r,u,i,a=[],o=-1,l=this.length;++o<l;){r=(u=this[o]).update,a.push(t=[]),t.parentNode=u.parentNode;for(var c=-1,s=u.length;++c<s;)(i=u[c])?(t.push(r[c]=e=n.call(u.parentNode,i.__data__,c,o)),e.__data__=i.__data__):t.push(null)}return E(a)},za.insert=function(n,t){return arguments.length<2&&(t=V(this)),Aa.insert.call(this,n,t)},oa.select=function(t){var e;return"string"==typeof t?(e=[ka(t,sa)],e.parentNode=sa.documentElement):(e=[t],e.parentNode=n(t)),E([e])},oa.selectAll=function(n){var t;return"string"==typeof n?(t=ca(Na(n,sa)),t.parentNode=sa.documentElement):(t=ca(n),t.parentNode=null),E([t])},Aa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var La=oa.map({mouseenter:"mouseover",mouseleave:"mouseout"});sa&&La.forEach(function(n){"on"+n in sa&&La.remove(n)});var qa,Ta=0;oa.mouse=function(n){return J(n,k())};var Ra=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;oa.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},oa.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",a)}function e(n,t,e,i,a){return function(){function o(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(m.on(i+d,null).on(a+d,null),y(p),g({type:"dragend"}))}var c,s=this,f=oa.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=oa.select(e(f)).on(i+d,o).on(a+d,l),y=W(f),M=t(h,v);u?(c=u.apply(s,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],g({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),u=null,i=e(b,oa.mouse,t,"mousemove","mouseup"),a=e(G,oa.touch,y,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},oa.rebind(n,r,"on")},oa.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ca(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Da=1e-6,Pa=Da*Da,ja=Math.PI,Ua=2*ja,Fa=Ua-Da,Ha=ja/2,Oa=ja/180,Ia=180/ja,Ya=Math.SQRT2,Za=2,Va=4;oa.interpolateZoom=function(n,t){var e,r,u=n[0],i=n[1],a=n[2],o=t[0],l=t[1],c=t[2],s=o-u,f=l-i,h=s*s+f*f;if(Pa>h)r=Math.log(c/a)/Ya,e=function(n){return[u+n*s,i+n*f,a*Math.exp(Ya*n*r)]};else{var g=Math.sqrt(h),p=(c*c-a*a+Va*h)/(2*a*Za*g),v=(c*c-a*a-Va*h)/(2*c*Za*g),d=Math.log(Math.sqrt(p*p+1)-p),m=Math.log(Math.sqrt(v*v+1)-v);r=(m-d)/Ya,e=function(n){var t=n*r,e=rn(d),o=a/(Za*g)*(e*un(Ya*t+d)-en(d));return[u+o*s,i+o*f,a*e/rn(Ya*t+d)]}}return e.duration=1e3*r,e},oa.behavior.zoom=function(){function n(n){n.on(L,f).on($a+".zoom",g).on("dblclick.zoom",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(A[0],Math.min(A[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function a(t,e,r,a){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,a)),i(d=e,r),t=oa.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function o(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||(n({type:"zoomend"}),d=null)}function f(){function n(){o=1,i(oa.mouse(u),h),c(a)}function r(){f.on(q,null).on(T,null),g(o),s(a)}var u=this,a=D.of(u,arguments),o=0,f=oa.select(t(u)).on(q,n).on(T,r),h=e(oa.mouse(u)),g=W(u);Ol.call(u),l(a)}function h(){function n(){var n=oa.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=oa.event.target;oa.select(t).on(x,r).on(b,o),_.push(t);for(var e=oa.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var s=l[0];a(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var s=l[0],f=l[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,a=oa.touches(p);Ol.call(p);for(var o=0,l=a.length;l>o;++o,r=null)if(e=a[o],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),c(v)}function o(){if(oa.event.touches.length){for(var t=oa.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}oa.selectAll(_).on(y,null),w.on(L,f).on(R,h),N(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=".zoom-"+oa.event.changedTouches[0].identifier,x="touchmove"+y,b="touchend"+y,_=[],w=oa.select(p),N=W(p);t(),l(v),w.on(L,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(Ol.call(this),v=e(d=m||oa.mouse(this)),l(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*Xa())*k.k),i(d,v),c(n)}function p(){var n=oa.mouse(this),t=Math.log(k.k)/Math.LN2;a(this,n,e(n),oa.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Ba,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return $a||($a="onwheel"in sa?(Xa=function(){return-oa.event.deltaY*(oa.event.deltaMode?120:1)},"wheel"):"onmousewheel"in sa?(Xa=function(){return oa.event.wheelDelta},"mousewheel"):(Xa=function(){return-oa.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Fl?oa.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=d?d[0]:e/2,i=d?d[1]:r/2,a=oa.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=a(t),o=e/r[2];this.__chart__=k={x:u-r[0]*o,y:i-r[1]*o,k:o},c(n)}}).each("interrupt.zoom",function(){s(n)}).each("end.zoom",function(){s(n)}):(this.__chart__=k,l(n),c(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},u(+t),o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Ba:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},oa.rebind(n,D,"on")};var Xa,$a,Ba=[0,1/0];oa.color=on,on.prototype.toString=function(){return this.rgb()+""},oa.hsl=ln;var Wa=ln.prototype=new on;Wa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Wa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Wa.rgb=function(){return cn(this.h,this.s,this.l)},oa.hcl=sn;var Ja=sn.prototype=new on;Ja.brighter=function(n){return new sn(this.h,this.c,Math.min(100,this.l+Ga*(arguments.length?n:1)))},Ja.darker=function(n){return new sn(this.h,this.c,Math.max(0,this.l-Ga*(arguments.length?n:1)))},Ja.rgb=function(){return fn(this.h,this.c,this.l).rgb()},oa.lab=hn;var Ga=18,Ka=.95047,Qa=1,no=1.08883,to=hn.prototype=new on;to.brighter=function(n){return new hn(Math.min(100,this.l+Ga*(arguments.length?n:1)),this.a,this.b)},to.darker=function(n){return new hn(Math.max(0,this.l-Ga*(arguments.length?n:1)),this.a,this.b)},to.rgb=function(){return gn(this.l,this.a,this.b)},oa.rgb=yn;var eo=yn.prototype=new on;eo.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new yn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new yn(u,u,u)},eo.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new yn(n*this.r,n*this.g,n*this.b)},eo.hsl=function(){return wn(this.r,this.g,this.b)},eo.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ro=oa.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ro.forEach(function(n,t){ro.set(n,Mn(t))}),oa.functor=En,oa.xhr=An(y),oa.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var a=Cn(n,t,null==e?r:u(e),i);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:u(n)):e},a}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(a).join(n)}function a(n){return o.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var o=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=c)return a;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),o=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==l)continue;return n.slice(t,s-o)}return n.slice(t)}for(var r,u,i={},a={},o=[],c=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==i&&r!==a;)h.push(r),r=e();t&&null==(h=t(h,f++))||o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},oa.csv=oa.dsv(",","text/csv"),oa.tsv=oa.dsv("	","text/tab-separated-values");var uo,io,ao,oo,lo=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};oa.timer=function(){qn.apply(this,arguments)},oa.timer.flush=function(){Rn(),Dn()},oa.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var co=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(jn);oa.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=oa.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),co[8+e/3]};var so=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,fo=oa.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=oa.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ho=oa.time={},go=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){po.setUTCDate.apply(this._,arguments)},setDay:function(){po.setUTCDay.apply(this._,arguments)},setFullYear:function(){po.setUTCFullYear.apply(this._,arguments)},setHours:function(){po.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){po.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){po.setUTCMinutes.apply(this._,arguments)},setMonth:function(){po.setUTCMonth.apply(this._,arguments)},setSeconds:function(){po.setUTCSeconds.apply(this._,arguments)},setTime:function(){po.setTime.apply(this._,arguments)}};var po=Date.prototype;ho.year=On(function(n){return n=ho.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ho.years=ho.year.range,ho.years.utc=ho.year.utc.range,ho.day=On(function(n){var t=new go(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ho.days=ho.day.range,ho.days.utc=ho.day.utc.range,ho.dayOfYear=function(n){var t=ho.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ho[n]=On(function(n){return(n=ho.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ho.year(n).getDay();return Math.floor((ho.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ho[n+"s"]=e.range,ho[n+"s"].utc=e.utc.range,ho[n+"OfYear"]=function(n){var e=ho.year(n).getDay();return Math.floor((ho.dayOfYear(n)+(e+t)%7)/7)}}),ho.week=ho.sunday,ho.weeks=ho.sunday.range,ho.weeks.utc=ho.sunday.utc.range,ho.weekOfYear=ho.sundayOfYear;var vo={"-":"",_:" ",0:"0"},mo=/^\s*\d+/,yo=/^%/;oa.locale=function(n){return{numberFormat:Un(n),timeFormat:Yn(n)}};var Mo=oa.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});oa.format=Mo.numberFormat,oa.geo={},st.prototype={s:0,t:0,add:function(n){ft(n,this.t,xo),ft(xo.s,this.s,this),this.s?this.t+=xo.t:this.s=xo.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var xo=new st;oa.geo.stream=function(n,t){n&&bo.hasOwnProperty(n.type)?bo[n.type](n,t):ht(n,t)};var bo={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ht(e[r].geometry,t)}},_o={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){gt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)gt(e[r],t,0)},Polygon:function(n,t){pt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)pt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ht(e[r],t)}};oa.geo.area=function(n){return wo=0,oa.geo.stream(n,ko),wo};var wo,So=new st,ko={sphere:function(){wo+=4*ja},point:b,lineStart:b,lineEnd:b,polygonStart:function(){So.reset(),ko.lineStart=vt},polygonEnd:function(){var n=2*So;wo+=0>n?4*ja+n:n,ko.lineStart=ko.lineEnd=ko.point=b}};oa.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=dt([t*Oa,e*Oa]);if(m){var u=yt(m,r),i=[u[1],-u[0],0],a=yt(i,u);bt(a),a=_t(a);var l=t-p,c=l>0?1:-1,v=a[0]*Ia*c,d=Ma(l)>180;if(d^(v>c*p&&c*t>v)){var y=a[1]*Ia;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>c*p&&c*t>v)){var y=-a[1]*Ia;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=Ma(r)>180?r+(r>0?360:-360):r}else v=n,d=e;ko.point(n,e),t(n,e)}function i(){ko.lineStart()}function a(){u(v,d),ko.lineEnd(),Ma(y)>Da&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function o(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=a,y=0,ko.polygonStart()},polygonEnd:function(){ko.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>So?(s=-(h=180),f=-(g=90)):y>Da?g=90:-Da>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],oa.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],c(e[0],u)||c(e[1],u)?(o(u[0],e[1])>o(u[0],u[1])&&(u[1]=e[1]),o(e[0],u[1])>o(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var a,e,p=-(1/0),t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(a=o(u[1],e[0]))>p&&(p=a,s=e[0],h=u[1])}return M=x=null,s===1/0||f===1/0?[[NaN,NaN],[NaN,NaN]]:[[s,f],[h,g]]}}(),oa.geo.centroid=function(n){No=Eo=Ao=Co=zo=Lo=qo=To=Ro=Do=Po=0,oa.geo.stream(n,jo);var t=Ro,e=Do,r=Po,u=t*t+e*e+r*r;return Pa>u&&(t=Lo,e=qo,r=To,Da>Eo&&(t=Ao,e=Co,r=zo),u=t*t+e*e+r*r,Pa>u)?[NaN,NaN]:[Math.atan2(e,t)*Ia,tn(r/Math.sqrt(u))*Ia]};var No,Eo,Ao,Co,zo,Lo,qo,To,Ro,Do,Po,jo={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){jo.lineStart=At},polygonEnd:function(){jo.lineStart=Nt}},Uo=Rt(zt,Ut,Ht,[-ja,-ja/2]),Fo=1e9;oa.geo.clipExtent=function(){var n,t,e,r,u,i,a={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(o){return arguments.length?(i=Zt(n=+o[0][0],t=+o[0][1],e=+o[1][0],r=+o[1][1]),u&&(u.valid=!1,u=null),a):[[n,t],[e,r]]}};return a.extent([[0,0],[960,500]])},(oa.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,oa.geo.albers=function(){return oa.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},oa.geo.albersUsa=function(){function n(n){var i=n[0],a=n[1];return t=null,e(i,a),t||(r(i,a),t)||u(i,a),t}var t,e,r,u,i=oa.geo.albers(),a=oa.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=oa.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?a:u>=.166&&.234>u&&r>=-.214&&-.115>r?o:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),a.precision(t),o.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),a.scale(.35*t),o.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var c=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*c,f-.238*c],[s+.455*c,f+.238*c]]).stream(l).point,r=a.translate([s-.307*c,f+.201*c]).clipExtent([[s-.425*c+Da,f+.12*c+Da],[s-.214*c-Da,f+.234*c-Da]]).stream(l).point,u=o.translate([s-.205*c,f+.212*c]).clipExtent([[s-.214*c+Da,f+.166*c+Da],[s-.115*c-Da,f+.234*c-Da]]).stream(l).point,n},n.scale(1070)};var Ho,Oo,Io,Yo,Zo,Vo,Xo={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Oo=0,Xo.lineStart=$t},polygonEnd:function(){Xo.lineStart=Xo.lineEnd=Xo.point=b,Ho+=Ma(Oo/2)}},$o={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Bo={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Bo.lineStart=ne},polygonEnd:function(){Bo.point=Gt,Bo.lineStart=Kt,Bo.lineEnd=Qt}};oa.geo.path=function(){function n(n){return n&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=u(i)),oa.geo.stream(n,a)),i.result()}function t(){return a=null,n}var e,r,u,i,a,o=4.5;return n.area=function(n){return Ho=0,oa.geo.stream(n,u(Xo)),Ho},n.centroid=function(n){return Ao=Co=zo=Lo=qo=To=Ro=Do=Po=0,oa.geo.stream(n,u(Bo)),Po?[Ro/Po,Do/Po]:To?[Lo/To,qo/To]:zo?[Ao/zo,Co/zo]:[NaN,NaN]},n.bounds=function(n){return Zo=Vo=-(Io=Yo=1/0),oa.geo.stream(n,u($o)),[[Io,Yo],[Zo,Vo]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||re(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Wt:new te(n),"function"!=typeof o&&i.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),n):o},n.projection(oa.geo.albersUsa()).context(null)},oa.geo.transform=function(n){return{stream:function(t){var e=new ue(t);for(var r in n)e[r]=n[r];return e}}},ue.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},oa.geo.projection=ae,oa.geo.projectionMutator=oe,(oa.geo.equirectangular=function(){return ae(ce)}).raw=ce.invert=ce,oa.geo.rotation=function(n){function t(t){return t=n(t[0]*Oa,t[1]*Oa),t[0]*=Ia,t[1]*=Ia,t}return n=fe(n[0]%360*Oa,n[1]*Oa,n.length>2?n[2]*Oa:0),t.invert=function(t){return t=n.invert(t[0]*Oa,t[1]*Oa),t[0]*=Ia,t[1]*=Ia,t},t},se.invert=ce,oa.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=fe(-n[0]*Oa,-n[1]*Oa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ia,n[1]*=Ia}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Oa,u*Oa),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Oa,(u=+r)*Oa),n):u},n.angle(90)},oa.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Oa,u=n[1]*Oa,i=t[1]*Oa,a=Math.sin(r),o=Math.cos(r),l=Math.sin(u),c=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*a)*e+(e=c*s-l*f*o)*e),l*s+c*f*o)},oa.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return oa.range(Math.ceil(i/d)*d,u,d).map(h).concat(oa.range(Math.ceil(c/m)*m,l,m).map(g)).concat(oa.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Ma(n%d)>Da}).map(s)).concat(oa.range(Math.ceil(o/v)*v,a,v).filter(function(n){return Ma(n%m)>Da}).map(f))}var e,r,u,i,a,o,l,c,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(l).slice(1),h(u).reverse().slice(1),g(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],c=+t[0][1],l=+t[1][1],i>u&&(t=i,i=u,u=t),c>l&&(t=c,c=l,l=t),n.precision(y)):[[i,c],[u,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=me(o,a,90),f=ye(r,e,y),h=me(c,l,90),g=ye(i,u,y),n):y},n.majorExtent([[-180,-90+Da],[180,90-Da]]).minorExtent([[-180,-80-Da],[180,80+Da]])},oa.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=Me,u=xe;return n.distance=function(){return oa.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},oa.geo.interpolate=function(n,t){return be(n[0]*Oa,n[1]*Oa,t[0]*Oa,t[1]*Oa)},oa.geo.length=function(n){return Wo=0,oa.geo.stream(n,Jo),Wo};var Wo,Jo={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Go=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(oa.geo.azimuthalEqualArea=function(){return ae(Go)}).raw=Go;var Ko=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(oa.geo.azimuthalEquidistant=function(){return ae(Ko)}).raw=Ko,(oa.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(oa.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var Qo=we(function(n){return 1/n},Math.atan);(oa.geo.gnomonic=function(){return ae(Qo)}).raw=Qo,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ha]},(oa.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var nl=we(function(){return 1},Math.asin);(oa.geo.orthographic=function(){return ae(nl)}).raw=nl;var tl=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(oa.geo.stereographic=function(){return ae(tl)}).raw=tl,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ha]},(oa.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,oa.geom={},oa.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=En(e),i=En(r),a=n.length,o=[],l=[];for(t=0;a>t;t++)o.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(o.sort(qe),t=0;a>t;t++)l.push([o[t][0],-o[t][1]]);var c=Le(o),s=Le(l),f=s[0]===c[0],h=s[s.length-1]===c[c.length-1],g=[];for(t=c.length-1;t>=0;--t)g.push(n[o[c[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[o[s[t]][2]]);return g}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},oa.geom.polygon=function(n){return Sa(n,el),n};var el=oa.geom.polygon.prototype=[];el.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},el.centroid=function(n){var t,e,r=-1,u=this.length,i=0,a=0,o=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],i+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[i*n,a*n]},el.clip=function(n){for(var t,e,r,u,i,a,o=De(n),l=-1,c=this.length-De(this),s=this[c-1];++l<c;){for(t=n.slice(),n.length=0,u=this[l],i=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],Te(a,s,u)?(Te(i,s,u)||n.push(Re(i,a,s,u)),n.push(a)):Te(i,s,u)&&n.push(Re(i,a,s,u)),i=a;o&&n.push(n[0]),s=u}return n};var rl,ul,il,al,ol,ll=[],cl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=ar(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,a=n.R;if(e=i?a?ar(a):i:a,u?u.L===n?u.L=e:u.R=e:this._=e,i&&a?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==a?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=a,a.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ur(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ir(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ur(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ir(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ur(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ir(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},oa.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=o[0][0],u=o[0][1],i=o[1][0],a=o[1][1];return or(e(n),o).cells.forEach(function(e,o){var l=e.edges,c=e.site,s=t[o]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=i&&c.y>=u&&c.y<=a?[[r,a],[i,a],[i,u],[r,u]]:[];s.point=n[o]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Da)*Da,y:Math.round(a(n,t)/Da)*Da,i:t}})}var r=Ce,u=ze,i=r,a=u,o=sl;return n?t(n):(t.links=function(n){return or(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return or(e(n)).cells.forEach(function(e,r){for(var u,i,a=e.site,o=e.edges.sort(Ve),l=-1,c=o.length,s=o[c-1].edge,f=s.l===a?s.r:s.l;++l<c;)u=s,i=f,s=o[l].edge,f=s.l===a?s.r:s.l,r<i.i&&r<f.i&&cr(a,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=En(r=n),t):r},t.y=function(n){return arguments.length?(a=En(u=n),t):u},t.clipExtent=function(n){return arguments.length?(o=null==n?sl:n,t):o===sl?null:o},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):o===sl?null:o&&o[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];oa.geom.delaunay=function(n){return oa.geom.voronoi().triangles(n)},oa.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,s=n.y;if(null!=l)if(Ma(l-e)+Ma(s-r)<.01)c(n,t,e,r,u,i,a,o);else{var f=n.point;n.x=n.y=n.point=null,c(n,f,l,s,u,i,a,o),c(n,t,e,r,u,i,a,o)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,u,i,a,o)}function c(n,t,e,r,u,a,o,l){var c=.5*(u+o),s=.5*(a+l),f=e>=c,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=hr()),f?u=c:o=c,h?a=s:l=s,i(n,t,e,r,u,a,o,l)}var s,f,h,g,p,v,d,m,y,M=En(o),x=En(l);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=hr();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){gr(n,k,v,d,m,y)},k.find=function(n){return pr(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var a,o=Ce,l=ze;return(a=arguments.length)?(o=sr,l=fr,3===a&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(o=n,i):o},i.y=function(n){return arguments.length?(l=n,i):l},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},oa.interpolateRgb=vr,oa.interpolateObject=dr,oa.interpolateNumber=mr,oa.interpolateString=yr;var fl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,hl=new RegExp(fl.source,"g");oa.interpolate=Mr,oa.interpolators=[function(n,t){var e=typeof t;return("string"===e?ro.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:yr:t instanceof on?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:mr)(n,t)}],oa.interpolateArray=xr;var gl=function(){return y},pl=oa.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),vl=oa.map({"in":y,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});oa.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=pl.get(e)||gl,r=vl.get(r)||y,br(r(e.apply(null,la.call(arguments,1))))},oa.interpolateHcl=Rr,oa.interpolateHsl=Dr,oa.interpolateLab=Pr,oa.interpolateRound=jr,oa.transform=function(n){var t=sa.createElementNS(oa.ns.prefix.svg,"g");return(oa.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Ur(e?e.matrix:dl)})(n)},Ur.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var dl={a:1,b:0,c:0,d:1,e:0,f:0};oa.interpolateTransform=$r,oa.layout={},oa.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},oa.layout.chord=function(){function n(){var n,c,f,h,g,p={},v=[],d=oa.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(c=0,g=-1;++g<i;)c+=u[h][g];v.push(c),m.push(oa.range(i)),n+=c}for(a&&d.sort(function(n,t){return a(v[n],v[t])}),o&&m.forEach(function(n,t){n.sort(function(n,e){return o(u[t][n],u[t][e])})}),n=(Ua-s*i)/n,c=0,h=-1;++h<i;){for(f=c,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=c,_=c+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:c,value:(c-f)/n},c+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,a,o,l,c={},s=0;return c.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,c):u},c.padding=function(n){return arguments.length?(s=n,e=r=null,c):s},c.sortGroups=function(n){return arguments.length?(a=n,e=r=null,c):a},c.sortSubgroups=function(n){return arguments.length?(o=n,e=null,c):o},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},oa.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,a=t.cy-n.y,o=u-e,l=i*i+a*a;if(l>o*o/m){if(v>l){var c=t.charge/l;n.px-=i*c,n.py-=a*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=i*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=oa.event.x,n.py=oa.event.y,l.resume()}var e,r,u,i,a,o,l={},c=oa.dispatch("start","tick","end"),s=[1,1],f=.9,h=ml,g=yl,p=-30,v=Ml,d=.1,m=.64,M=[],x=[];return l.tick=function(){if((u*=.99)<.005)return e=null,c.end({type:"end",alpha:u=0}),!0;var t,r,l,h,g,v,m,y,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,g=l.target,y=g.x-h.x,b=g.y-h.y,(v=y*y+b*b)&&(v=u*a[r]*((v=Math.sqrt(v))-i[r])/v,y*=v,b*=v,g.x-=y*(m=h.weight+g.weight?h.weight/(h.weight+g.weight):.5),g.y-=b*m,h.x+=y*(m=1-m),h.y+=b*m);if((m=u*d)&&(y=s[0]/2,b=s[1]/2,r=-1,m))for(;++r<_;)l=M[r],l.x+=(y-l.x)*m,l.y+=(b-l.y)*m;if(p)for(ru(t=oa.geom.quadtree(M),u,o),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*f,l.y-=(l.py-(l.py=l.y))*f);c.tick({type:"tick",alpha:u})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(s=n,l):s},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.friction=function(n){return arguments.length?(f=+n,l):f},l.charge=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(m=n*n,l):Math.sqrt(m)},l.alpha=function(n){return arguments.length?(n=+n,u?n>0?u=n:(e.c=null,e.t=NaN,e=null,c.start({type:"end",alpha:u=0})):n>0&&(c.start({type:"start",alpha:u=n}),e=qn(l.tick)),l):u},l.start=function(){function n(n,r){if(!e){for(e=new Array(u),l=0;u>l;++l)e[l]=[];for(l=0;c>l;++l){var i=x[l];e[i.source.index].push(i.target),e[i.target.index].push(i.source)}}for(var a,o=e[t],l=-1,s=o.length;++l<s;)if(!isNaN(a=o[l][n]))return a;return Math.random()*r}var t,e,r,u=M.length,c=x.length,f=s[0],v=s[1];for(t=0;u>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;u>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",f)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(i=[],"function"==typeof h)for(t=0;c>t;++t)i[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)i[t]=h;if(a=[],"function"==typeof g)for(t=0;c>t;++t)a[t]=+g.call(this,x[t],t);else for(t=0;c>t;++t)a[t]=g;if(o=[],"function"==typeof p)for(t=0;u>t;++t)o[t]=+p.call(this,M[t],t);else for(t=0;u>t;++t)o[t]=p;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=oa.behavior.drag().origin(y).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",nu)),arguments.length?void this.on("mouseover.force",tu).on("mouseout.force",eu).call(r):r},oa.rebind(l,c,"on")};var ml=20,yl=1,Ml=1/0;oa.layout.hierarchy=function(){function n(u){var i,a=[u],o=[];for(u.depth=0;null!=(i=a.pop());)if(o.push(i),(c=e.call(n,i,i.depth))&&(l=c.length)){for(var l,c,s;--l>=0;)a.push(s=c[l]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=c}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return au(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),o}var t=cu,e=ou,r=lu;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(iu(t,function(n){n.children&&(n.value=0)}),au(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},oa.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(a=i.length)){var a,o,l,c=-1;for(r=t.value?r/t.value:0;++c<a;)n(o=i[c],e,l=o.value*r,u),e+=l}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var a=r.call(this,e,i);return n(a[0],0,u[0],u[1]/t(a[0])),a}var r=oa.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},uu(e,r)},oa.layout.pie=function(){function n(a){var o,l=a.length,c=a.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/l,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=oa.sum(c),v=p?(f-l*g)/p:0,d=oa.range(l),m=[];return null!=e&&d.sort(e===xl?function(n,t){return c[t]-c[n]}:function(n,t){return e(a[n],a[t])}),d.forEach(function(n){m[n]={data:a[n],value:o=c[n],startAngle:s,endAngle:s+=o*v+g,padAngle:h}}),m}var t=Number,e=xl,r=0,u=Ua,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var xl={};oa.layout.stack=function(){function n(o,l){if(!(h=o.length))return o;var c=o.map(function(e,r){return t.call(n,e,r)}),s=c.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,l);c=oa.permute(c,f),s=oa.permute(s,f);var h,g,p,v,d=r.call(n,s,l),m=c[0].length;for(p=0;m>p;++p)for(u.call(n,c[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,c[g][p],v+=s[g-1][p][1],s[g][p][1]);return o}var t=y,e=pu,r=vu,u=gu,i=fu,a=hu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:bl.get(t)||pu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:_l.get(t)||vu,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(u=t,n):u},n};var bl=oa.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(du),i=n.map(mu),a=oa.range(r).sort(function(n,t){return u[n]-u[t]}),o=0,l=0,c=[],s=[];for(t=0;r>t;++t)e=a[t],l>o?(o+=i[e],c.push(e)):(l+=i[e],s.push(e));return s.reverse().concat(c)},reverse:function(n){return oa.range(n.length).reverse()},"default":pu}),_l=oa.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,a=[],o=0,l=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;i>e;++e)l[e]=(o-a[e])/2;return l},wiggle:function(n){var t,e,r,u,i,a,o,l,c,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=l=c=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;i+=a*n[t][e][1]}g[e]=l-=u?i/u*o:0,c>l&&(c=l)}for(e=0;h>e;++e)g[e]-=c;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,a=1/u,o=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=a}for(e=0;i>e;++e)o[e]=0;return o},zero:vu});oa.layout.histogram=function(){function n(n,i){for(var a,o,l=[],c=n.map(e,this),s=r.call(this,c,i),f=u.call(this,s,c,i),i=-1,h=c.length,g=f.length-1,p=t?1:1/h;++i<g;)a=l[i]=[],a.dx=f[i+1]-(a.x=f[i]),a.y=0;if(g>0)for(i=-1;++i<h;)o=c[i],o>=s[0]&&o<=s[1]&&(a=l[oa.bisect(f,o,1,g)-1],a.y+=p,a.push(n[i]));return l}var t=!0,e=Number,r=bu,u=Mu;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return xu(n,t)}:En(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},oa.layout.pack=function(){function n(n,i){var a=e.call(this,n,i),o=a[0],l=u[0],c=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,au(o,function(n){n.r=+s(n.value)}),au(o,Nu),r){var f=r*(t?1:Math.max(2*o.r/l,2*o.r/c))/2;au(o,function(n){n.r+=f}),au(o,Nu),au(o,function(n){n.r-=f})}return Cu(o,l/2,c/2,t?1:1/Math.max(2*o.r/l,2*o.r/c)),a}var t,e=oa.layout.hierarchy().sort(_u),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},uu(n,e)},oa.layout.tree=function(){function n(n,u){var s=a.call(this,n,u),f=s[0],h=t(f);if(au(h,e),h.parent.m=-h.z,iu(h,r),c)iu(f,i);else{var g=f,p=f,v=f;iu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=o(g,p)/2-g.x,m=l[0]/(p.x+o(p,g)/2+d),y=l[1]/(v.depth||1);iu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,a=0,o=i.length;o>a;++a)r.push((i[a]=u={_:i[a],parent:t,children:(u=i[a].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:a}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Du(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+o(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+o(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,a=t,l=u.parent.children[0],c=u.m,s=i.m,f=a.m,h=l.m;a=Tu(a),u=qu(u),a&&u;)l=qu(l),i=Tu(i),i.a=n,r=a.z+f-u.z-c+o(a._,u._),r>0&&(Ru(Pu(a,n,e),n,r),c+=r,s+=r),f+=a.m,c+=u.m,h+=l.m,s+=i.m;a&&!Tu(i)&&(i.t=a,i.m+=f-s),u&&!qu(l)&&(l.t=u,l.m+=c-h,e=n)}return e}function i(n){n.x*=l[0],n.y=n.depth*l[1]}var a=oa.layout.hierarchy().sort(null).value(null),o=Lu,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(o=t,n):o},n.size=function(t){return arguments.length?(c=null==(l=t)?i:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:i,n):c?l:null},uu(n,a)},oa.layout.cluster=function(){function n(n,i){var a,o=t.call(this,n,i),l=o[0],c=0;au(l,function(n){var t=n.children;t&&t.length?(n.x=Uu(t),n.y=ju(t)):(n.x=a?c+=e(n,a):0,n.y=0,a=n)});var s=Fu(l),f=Hu(l),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return au(l,u?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),o}var t=oa.layout.hierarchy().sort(null).value(null),e=Lu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},uu(n,t)},oa.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var a,o,l,c=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?c.dx:"dice"===g?c.dy:"slice-dice"===g?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),s.area=0;(l=h.length)>0;)s.push(a=h[l-1]),s.area+=a.area,"squarify"!==g||(o=r(s,v))<=p?(h.pop(),p=o):(s.area-=s.pop().area,u(s,v,c,!1),v=Math.min(c.dx,c.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,c,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,a=f(t),o=r.slice(),l=[];for(n(o,a.dx*a.dy/t.value),l.area=0;i=o.pop();)l.push(i),l.area+=i.area,null!=i.z&&(u(l,i.z?a.dx:a.dy,a,!o.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,a=n.length,o=e.x,c=e.y,s=t?l(n.area/t):0;
if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<a;)u=n[i],u.x=o,u.y=c,u.dy=s,o+=u.dx=Math.min(e.x+e.dx-o,s?l(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<a;)u=n[i],u.x=o,u.y=c,u.dx=s,c+=u.dy=Math.min(e.y+e.dy-c,s?l(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-c,e.x+=s,e.dx-=s}}function i(r){var u=a||o(r),i=u[0];return i.x=i.y=0,i.value?(i.dx=c[0],i.dy=c[1]):i.dx=i.dy=0,a&&o.revalue(i),n([i],i.dx*i.dy/i.value),(a?e:t)(i),h&&(a=u),u}var a,o=oa.layout.hierarchy(),l=Math.round,c=[1,1],s=null,f=Ou,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(c=n,i):c},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ou(t):Iu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Iu(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ou:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(l=n?Math.round:Number,i):l!=Number},i.sticky=function(n){return arguments.length?(h=n,a=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},uu(i,o)},oa.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=oa.random.normal.apply(oa,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=oa.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},oa.scale={};var wl={floor:y,ceil:y};oa.scale.linear=function(){return Wu([0,1],[0,1],Mr,!1)};var Sl={s:1,g:1,p:1,r:1,e:1};oa.scale.log=function(){return ri(oa.scale.linear().domain([0,1]),10,!0,[1,10])};var kl=oa.format(".0e"),Nl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};oa.scale.pow=function(){return ui(oa.scale.linear(),1,[0,1])},oa.scale.sqrt=function(){return oa.scale.pow().exponent(.5)},oa.scale.ordinal=function(){return ai([],{t:"range",a:[[]]})},oa.scale.category10=function(){return oa.scale.ordinal().range(El)},oa.scale.category20=function(){return oa.scale.ordinal().range(Al)},oa.scale.category20b=function(){return oa.scale.ordinal().range(Cl)},oa.scale.category20c=function(){return oa.scale.ordinal().range(zl)};var El=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Al=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),Cl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),zl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);oa.scale.quantile=function(){return oi([],[])},oa.scale.quantize=function(){return li(0,1,[0,1])},oa.scale.threshold=function(){return ci([.5],[0,1])},oa.scale.identity=function(){return si([0,1])},oa.svg={},oa.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),s=a.apply(this,arguments)-Ha,f=o.apply(this,arguments)-Ha,h=Math.abs(f-s),g=s>f?0:1;if(n>c&&(p=c,c=n,n=p),h>=Fa)return t(c,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,N=0,E=0,A=[];if((m=(+l.apply(this,arguments)||0)/2)&&(d=i===Ll?Math.sqrt(n*n+c*c):+i.apply(this,arguments),g||(E*=-1),c&&(E=tn(d/c*Math.sin(m))),n&&(N=tn(d/n*Math.sin(m)))),c){y=c*Math.cos(s+E),M=c*Math.sin(s+E),x=c*Math.cos(f-E),b=c*Math.sin(f-E);var C=Math.abs(f-s-2*E)<=ja?0:1;if(E&&mi(y,M,x,b)===g^C){var z=(s+f)/2;y=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-N),w=n*Math.sin(f-N),S=n*Math.cos(s+N),k=n*Math.sin(s+N);var L=Math.abs(s-f+2*N)<=ja?0:1;if(N&&mi(_,w,S,k)===1-g^L){var q=(s+f)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Da&&(p=Math.min(Math.abs(c-n)/2,+u.apply(this,arguments)))>.001){v=c>n^g?0:1;var T=p,R=p;if(ja>h){var D=null==S?[_,w]:null==x?[y,M]:Re([y,M],[S,k],[x,b],[_,w]),P=y-D[0],j=M-D[1],U=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*U+j*F)/(Math.sqrt(P*P+j*j)*Math.sqrt(U*U+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(p,(n-O)/(H-1)),T=Math.min(p,(c-O)/(H+1))}if(null!=x){var I=yi(null==S?[_,w]:[S,k],[y,M],c,T,g),Y=yi([x,b],[_,w],c,T,g);p===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-g^mi(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",y,",",M);if(null!=S){var Z=yi([y,M],[S,k],n,-R,g),V=yi([_,w],null==x?[y,M]:[x,b],n,-R,g);p===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^mi(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",y,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",g," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-g," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hi,r=gi,u=fi,i=Ll,a=pi,o=vi,l=di;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=En(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Ll?Ll:En(t),n):i},n.startAngle=function(t){return arguments.length?(a=En(t),n):a},n.endAngle=function(t){return arguments.length?(o=En(t),n):o},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+a.apply(this,arguments)+ +o.apply(this,arguments))/2-Ha;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Ll="auto";oa.svg.line=function(){return Mi(y)};var ql=oa.map({linear:xi,"linear-closed":bi,step:_i,"step-before":wi,"step-after":Si,basis:zi,"basis-open":Li,"basis-closed":qi,bundle:Ti,cardinal:Ei,"cardinal-open":ki,"cardinal-closed":Ni,monotone:Fi});ql.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Tl=[0,2/3,1/3,0],Rl=[0,1/3,2/3,0],Dl=[0,1/6,2/3,1/6];oa.svg.line.radial=function(){var n=Mi(Hi);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wi.reverse=Si,Si.reverse=wi,oa.svg.area=function(){return Oi(y)},oa.svg.area.radial=function(){var n=Oi(Hi);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},oa.svg.chord=function(){function n(n,o){var l=t(this,i,n,o),c=t(this,a,n,o);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?u(l.r,l.p1,l.r,l.p0):u(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+u(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=o.call(n,u,r),a=l.call(n,u,r)-Ha,s=c.call(n,u,r)-Ha;return{r:i,a0:a,a1:s,p0:[i*Math.cos(a),i*Math.sin(a)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ja)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=Me,a=xe,o=Ii,l=pi,c=vi;return n.radius=function(t){return arguments.length?(o=En(t),n):o},n.source=function(t){return arguments.length?(i=En(t),n):i},n.target=function(t){return arguments.length?(a=En(t),n):a},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},oa.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),a=e.call(this,n,u),o=(i.y+a.y)/2,l=[i,{x:i.x,y:o},{x:a.x,y:o},a];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yi;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},oa.svg.diagonal.radial=function(){var n=oa.svg.diagonal(),t=Yi,e=n.projection;return n.projection=function(n){return arguments.length?e(Zi(t=n)):t},n},oa.svg.symbol=function(){function n(n,r){return(Pl.get(t.call(this,n,r))||$i)(e.call(this,n,r))}var t=Xi,e=Vi;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Pl=oa.map({circle:$i,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ul)),e=t*Ul;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});oa.svg.symbolTypes=Pl.keys();var jl=Math.sqrt(3),Ul=Math.tan(30*Oa);Aa.transition=function(n){for(var t,e,r=Fl||++Yl,u=Ki(n),i=[],a=Hl||{time:Date.now(),ease:Nr,delay:0,duration:250},o=-1,l=this.length;++o<l;){i.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(e=c[s])&&Qi(e,s,u,r,a),t.push(e)}return Wi(i,u,r)},Aa.interrupt=function(n){return this.each(null==n?Ol:Bi(Ki(n)))};var Fl,Hl,Ol=Bi(Ki()),Il=[],Yl=0;Il.call=Aa.call,Il.empty=Aa.empty,Il.node=Aa.node,Il.size=Aa.size,oa.transition=function(n,t){return n&&n.transition?Fl?n.transition(t):n:oa.selection().transition(n)},oa.transition.prototype=Il,Il.select=function(n){var t,e,r,u=this.id,i=this.namespace,a=[];n=A(n);for(var o=-1,l=this.length;++o<l;){a.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Qi(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Wi(a,i,u)},Il.selectAll=function(n){var t,e,r,u,i,a=this.id,o=this.namespace,l=[];n=C(n);for(var c=-1,s=this.length;++c<s;)for(var f=this[c],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[o][a],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&Qi(u,p,o,a,i),t.push(u)}return Wi(l,o,a)},Il.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]);for(var e=this[i],o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return Wi(u,this.namespace,this.id)},Il.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Il.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?$r:Mr,o=oa.ns.qualify(n);return Ji(this,"attr."+n,t,o.local?i:u)},Il.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=oa.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Il.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+="",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=Mr(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var a=arguments.length;if(3>a){if("string"!=typeof n){2>a&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ji(this,"style."+n,e,i)},Il.styleTween=function(n,e,r){function u(u,i){var a=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return a&&function(t){this.style.setProperty(n,a(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,u)},Il.text=function(n){return Ji(this,"text",n,Gi)},Il.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Il.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=oa.ease.apply(oa,arguments)),Y(this,function(r){r[e][t].ease=n}))},Il.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Il.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Il.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Hl,i=Fl;try{Fl=e,Y(this,function(t,u,i){Hl=t[r][e],n.call(t,t.__data__,u,i)})}finally{Hl=u,Fl=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=oa.dispatch("start","end","interrupt"))).on(n,t)});return this},Il.transition=function(){for(var n,t,e,r,u=this.id,i=++Yl,a=this.namespace,o=[],l=0,c=this.length;c>l;l++){o.push(n=[]);for(var t=this[l],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[a][u],Qi(e,s,a,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wi(o,a,i)},oa.svg.axis=function(){function n(n){n.each(function(){var n,c=oa.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==l?f.ticks?f.ticks.apply(f,o):f.domain():l,g=null==t?f.tickFormat?f.tickFormat.apply(f,o):y:t,p=c.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Da),d=oa.transition(p.exit()).style("opacity",Da).remove(),m=oa.transition(p.order()).style("opacity",1),M=Math.max(u,0)+a,x=Zu(f),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),oa.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),z=v.select("text"),L=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=na,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*i+"V0H"+x[1]+"V"+q*i)):(n=ta,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*i+","+x[0]+"H0V"+x[1]+"H"+q*i)),E.attr(N,q*u),z.attr(k,q*M),A.attr(S,0).attr(N,q*u),L.attr(w,0).attr(k,q*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=oa.scale.linear(),r=Zl,u=6,i=6,a=3,o=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Vl?t+"":Zl,n):r},n.ticks=function(){return arguments.length?(o=ca(arguments),n):o},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(a=+t,n):a},n.tickSubdivide=function(){return arguments.length&&n},n};var Zl="bottom",Vl={top:1,right:1,bottom:1,left:1};oa.svg.brush=function(){function n(t){t.each(function(){var t=oa.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),a=t.selectAll(".background").data([0]);a.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var o=t.selectAll(".resize").data(v,y);o.exit().remove(),o.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Xl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),o.style("display",n.empty()?"none":null);var l,f=oa.transition(t),h=oa.transition(a);c&&(l=Zu(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(f)),s&&(l=Zu(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),u(f)),e(f)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function u(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==oa.event.keyCode&&(C||(M=null,L[0]-=f[1],L[1]-=h[1],C=2),S())}function v(){32==oa.event.keyCode&&2==C&&(L[0]+=f[1],L[1]+=h[1],C=0,S())}function d(){var n=oa.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(oa.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),L[0]=f[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&m(n,c,0)&&(r(k),t=!0),A&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,i=Zu(t),l=i[0],c=i[1],s=L[e],v=e?h:f,d=v[1]-v[0];return C&&(l-=s,c-=d+s),r=(e?p:g)?Math.max(l,Math.min(c,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(l,Math.min(c,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?o=null:a=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),oa.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=oa.select(oa.event.target),w=l.of(b,arguments),k=oa.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&s,C=_.classed("extent"),z=W(b),L=oa.mouse(b),q=oa.select(t(b)).on("keydown.brush",i).on("keyup.brush",v);if(oa.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",y):q.on("mousemove.brush",d).on("mouseup.brush",y),k.interrupt().selectAll("*").interrupt(),C)L[0]=f[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[f[1-T]-L[0],h[1-R]-L[1]],L[0]=f[T],L[1]=h[R]}else oa.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),oa.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var a,o,l=N(n,"brushstart","brush","brushend"),c=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=$l[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:f,y:h,i:a,j:o},e=this.__chart__||t;this.__chart__=t,Fl?oa.select(this).transition().each("start.brush",function(){a=e.i,o=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(f,t.x),r=xr(h,t.y);return a=o=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){a=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=$l[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,v=$l[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(g=!!t[0],p=!!t[1]):c?g=!!t:s&&(p=!!t),n):c&&s?[g,p]:c?g:s?p:null},n.extent=function(t){var e,r,u,i,l;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),a=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],c&&(u=u[1],i=i[1]),o=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(l=u,u=i,i=l),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(c&&(a?(e=a[0],r=a[1]):(e=f[0],r=f[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),s&&(o?(u=o[0],i=o[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(l=u,u=i,i=l))),c&&s?[[e,u],[r,i]]:c?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],a=o=null),n},n.empty=function(){return!!c&&f[0]==f[1]||!!s&&h[0]==h[1]},oa.rebind(n,l,"on")};var Xl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},$l=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Bl=ho.format=Mo.timeFormat,Wl=Bl.utc,Jl=Wl("%Y-%m-%dT%H:%M:%S.%LZ");Bl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ea:Jl,ea.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},ea.toString=Jl.toString,ho.second=On(function(n){return new go(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ho.seconds=ho.second.range,ho.seconds.utc=ho.second.utc.range,ho.minute=On(function(n){return new go(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ho.minutes=ho.minute.range,ho.minutes.utc=ho.minute.utc.range,ho.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new go(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ho.hours=ho.hour.range,ho.hours.utc=ho.hour.utc.range,ho.month=On(function(n){return n=ho.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ho.months=ho.month.range,ho.months.utc=ho.month.utc.range;var Gl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Kl=[[ho.second,1],[ho.second,5],[ho.second,15],[ho.second,30],[ho.minute,1],[ho.minute,5],[ho.minute,15],[ho.minute,30],[ho.hour,1],[ho.hour,3],[ho.hour,6],[ho.hour,12],[ho.day,1],[ho.day,2],[ho.week,1],[ho.month,1],[ho.month,3],[ho.year,1]],Ql=Bl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),nc={range:function(n,t,e){return oa.range(Math.ceil(n/e)*e,+t,e).map(ua)},floor:y,ceil:y};Kl.year=ho.year,ho.scale=function(){return ra(oa.scale.linear(),Kl,Ql)};var tc=Kl.map(function(n){return[n[0].utc,n[1]]}),ec=Wl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);tc.year=ho.year.utc,ho.scale.utc=function(){return ra(oa.scale.linear(),tc,ec)},oa.text=An(function(n){return n.responseText}),oa.json=function(n,t){return Cn(n,"application/json",ia,t)},oa.html=function(n,t){return Cn(n,"text/html",aa,t)},oa.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=oa,define(oa)):"object"==typeof module&&module.exports?module.exports=oa:this.d3=oa}();

// Foundation 6
!function(t){"use strict";function e(t){if(void 0===Function.prototype.name){var e=/function\s([^(]{1,})\(/,i=e.exec(t.toString());return i&&i.length>1?i[1].trim():""}return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name}function i(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var n="6.0.1",s={version:n,_plugins:{},_uuids:[],_activePlugins:{},rtl:function(){return"rtl"===t("html").attr("dir")},plugin:function(t,n){var s=n||e(t),o=i(s);this._plugins[o]=this[s]=t},registerPlugin:function(t){var i=e(t.constructor).toLowerCase();t.uuid=this.GetYoDigits(6,i),t.$element.attr("data-"+i,t.uuid).trigger("init.zf."+i),this._activePlugins[t.uuid]=t},unregisterPlugin:function(t){var i=e(t.constructor).toLowerCase();delete this._activePlugins[t.uuid],t.$element.removeAttr("data-"+i).trigger("destroyed.zf."+i)},_reflow:function(t){var e=Object.keys(this._activePlugins),i=this;if(t){if("string"==typeof t){var n=t.split("-")[1];n?this._activePlugins[t]._init():(n=new RegExp(t,"i"),e.filter(function(t){return n.test(t)}).forEach(function(t){i._activePlugins[t]._init()}))}}else e.forEach(function(t){i._activePlugins[t]._init()})},GetYoDigits:function(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-"+e:"")},reflow:function(e,i){"undefined"==typeof i?i=Object.keys(this._plugins):"string"==typeof i&&(i=[i]);var n=this;t.each(i,function(i,s){var o=n._plugins[s],a=t(e).find("[data-"+s+"]").addBack("*");a.each(function(){return t(this).attr("zf-plugin")?void console.warn("Tried to initialize "+s+" on an element that already has a Foundation plugin."):void t(this).data("zf-plugin",new o(t(this)))})})},getFnName:e,transitionend:function(t){var e,i={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div");for(var s in i)"undefined"!=typeof n.style[s]&&(e=i[s]);return e?e:(e=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}};s.util={throttle:function(t,e){var i=null;return function(){var n=this,s=arguments;null===i&&(i=setTimeout(function(){t.apply(n,s),i=null},e))}}};var o=function(i){var n=typeof i,o=t("meta.foundation-mq"),a=t(".no-js");if(o.length||t('<meta class="foundation-mq">').appendTo(document.head),a.length&&a.removeClass("no-js"),"undefined"===n)s.MediaQuery._init(),s.reflow(this);else{if("string"!==n)throw new TypeError("We're sorry, '"+n+"' is not a valid parameter. You must use a string representing the method you wish to invoke.");var r=Array.prototype.slice.call(arguments,1),l=this.data("zfPlugin");if(void 0===l||void 0===l[i])throw new ReferenceError("We're sorry, '"+i+"' is not an available method for "+(l?e(l):"this element")+".");1===this.length?l[i].apply(l,r):this.each(function(e,n){l[i].apply(t(n).data("zfPlugin"),r)})}return this};window.Foundation=s,t.fn.foundation=o,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(n+16,e);return setTimeout(function(){t(n=i)},i-e)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},s=function(){return i.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),s.prototype=new n,s})}(jQuery),!function(t,e){var i=function(t,e,i,s){var o,a,r,l,d=n(t);if(e){var h=n(e);a=d.offset.top+d.height<=h.height+h.offset.top,o=d.offset.top>=h.offset.top,r=d.offset.left>=h.offset.left,l=d.offset.left+d.width<=h.width}else a=d.offset.top+d.height<=d.windowDims.height+d.windowDims.offset.top,o=d.offset.top>=d.windowDims.offset.top,r=d.offset.left>=d.windowDims.offset.left,l=d.offset.left+d.width<=d.windowDims.width;var u=[a,o,r,l];return i?r===l==!0:s?o===a==!0:-1===u.indexOf(!1)},n=function(t,i){if(t=t.length?t[0]:t,t===e||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var n=t.getBoundingClientRect(),s=t.parentNode.getBoundingClientRect(),o=document.body.getBoundingClientRect(),a=e.pageYOffset,r=e.pageXOffset;return{width:n.width,height:n.height,offset:{top:n.top+a,left:n.left+r},parentDims:{width:s.width,height:s.height,offset:{top:s.top+a,left:s.left+r}},windowDims:{width:o.width,height:o.height,offset:{top:a,left:r}}}},s=function(t,e,i,s,o,a){var r=n(t),l=e?n(e):null;switch(i){case"top":return{left:l.offset.left,top:l.offset.top-(r.height+s)};case"left":return{left:l.offset.left-(r.width+o),top:l.offset.top};case"right":return{left:l.offset.left+l.width+o,top:l.offset.top};case"center top":return{left:l.offset.left+l.width/2-r.width/2,top:l.offset.top-(r.height+s)};case"center bottom":return{left:a?o:l.offset.left+l.width/2-r.width/2,top:l.offset.top+l.height+s};case"center left":return{left:l.offset.left-(r.width+o),top:l.offset.top+l.height/2-r.height/2};case"center right":return{left:l.offset.left+l.width+o+1,top:l.offset.top+l.height/2-r.height/2};case"center":return{left:r.windowDims.offset.left+r.windowDims.width/2-r.width/2,top:r.windowDims.offset.top+r.windowDims.height/2-r.height/2};case"reveal":return{left:(r.windowDims.width-r.width)/2,top:r.windowDims.offset.top+s};case"reveal full":return{left:r.windowDims.offset.left,top:r.windowDims.offset.top};default:return{left:l.offset.left,top:l.offset.top+l.height+s}}};t.Box={ImNotTouchingYou:i,GetDimensions:n,GetOffsets:s}}(window.Foundation,window),!function(t,e){"use strict";e.Keyboard={};var i={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},n=function(t){var e={};for(var i in t)e[t[i]]=t[i];return e}(i);e.Keyboard.keys=n;var s=function(t){var e=i[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();return t.shiftKey&&(e="SHIFT_"+e),t.ctrlKey&&(e="CTRL_"+e),t.altKey&&(e="ALT_"+e),e};e.Keyboard.parseKey=s;var o={},a=function(i,n,a){var r,l,d,h=o[e.getFnName(n)],u=s(i);return h?(r="undefined"==typeof h.ltr?h:e.rtl()?t.extend({},h.ltr,h.rtl):t.extend({},h.rtl,h.ltr),l=r[u],d=a[l],void(d&&"function"==typeof d?(d.apply(n),(a.handled||"function"==typeof a.handled)&&a.handled.apply(n)):(a.unhandled||"function"==typeof a.unhandled)&&a.unhandled.apply(n))):console.warn("Component not defined!")};e.Keyboard.handleKey=a;var r=function(e){return e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!t(this).is(":visible")||t(this).attr("tabindex")<0?!1:!0})};e.Keyboard.findFocusable=r;var l=function(t,e){o[t]=e};e.Keyboard.register=l}(jQuery,window.Foundation),!function(t,e){function i(t){var e={};return"string"!=typeof t?e:(t=t.trim().slice(1,-1))?e=t.split("&").reduce(function(t,e){var i=e.replace(/\+/g," ").split("="),n=i[0],s=i[1];return n=decodeURIComponent(n),s=void 0===s?null:decodeURIComponent(s),t.hasOwnProperty(n)?Array.isArray(t[n])?t[n].push(s):t[n]=[t[n],s]:t[n]=s,t},{}):e}var n={queries:[],current:"",atLeast:function(t){var e=this.get(t);return e?window.matchMedia(e).matches:!1},get:function(t){for(var e in this.queries){var i=this.queries[e];if(t===i.name)return i.value}return null},_init:function(){var e,n=this,s=t(".foundation-mq").css("font-family");e=i(s);for(var o in e)n.queries.push({name:o,value:"only screen and (min-width: "+e[o]+")"});this.current=this._getCurrentSize(),this._watcher()},_getCurrentSize:function(){var t;for(var e in this.queries){var i=this.queries[e];window.matchMedia(i.value).matches&&(t=i)}return"object"==typeof t?t.name:t},_watcher:function(){var e=this;t(window).on("resize.zf.mediaquery",function(){var i=e._getCurrentSize();i!==e.current&&(t(window).trigger("changed.zf.mediaquery",[i,e.current]),e.current=i)})}};e.MediaQuery=n,window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;e.type="text/css",e.id="matchmediajs-test",i.parentNode.insertBefore(e,i),n="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var i="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=i:e.textContent=i,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}())}(jQuery,Foundation),!function(t,e){function i(i,o,a,r){function l(){i||o.hide(),d(),r&&r.apply(o)}function d(){o[0].style.transitionDuration=0,o.removeClass(h+" "+u+" "+a)}if(o=t(o).eq(0),o.length){var h=i?n[0]:n[1],u=i?s[0]:s[1];d(),o.addClass(a).css("transition","none"),requestAnimationFrame(function(){o.addClass(h),i&&o.show()}),requestAnimationFrame(function(){o[0].offsetWidth,o.css("transition",""),o.addClass(u)}),o.one(e.transitionend(o),l)}}var n=["mui-enter","mui-leave"],s=["mui-enter-active","mui-leave-active"],o={animateIn:function(t,e,n){i(!0,t,e,n)},animateOut:function(t,e,n){i(!1,t,e,n)}},a=function(t,e,i){function n(r){a||(a=window.performance.now()),o=r-a,i.apply(e),t>o?s=window.requestAnimationFrame(n,e):(window.cancelAnimationFrame(s),e.trigger("finished.zf.animate",[e]).triggerHandler("finished.zf.animate",[e]))}var s,o,a=null;s=window.requestAnimationFrame(n)};e.Move=a,e.Motion=o}(jQuery,Foundation),!function(t,e){"use strict";e.Nest={Feather:function(e,i){e.attr("role","menubar"),i=i||"zf";var n=e.find("li").attr({role:"menuitem"}),s="is-"+i+"-submenu",o=s+"-item",a="is-"+i+"-submenu-parent";n.each(function(){var e=t(this),i=e.children("ul");i.length&&(e.addClass("has-submenu "+a),i.addClass("submenu "+s).attr("data-submenu","")),e.parent("[data-submenu]").length&&e.addClass("is-submenu-item "+o)})},Burn:function(t,e){var i=(t.find("li").removeAttr("tabindex"),"is-"+e+"-submenu"),n=i+"-item",s="is-"+e+"-submenu-parent";t.find("*").removeClass(i+" "+n+" "+s+" has-submenu is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}}}(jQuery,window.Foundation),!function(t,e){"use strict";var i=function(t,e,i){var n,s,o=this,a=e.duration,r=Object.keys(t.data())[0]||"timer",l=-1;this.restart=function(){l=-1,clearTimeout(s),this.start()},this.start=function(){clearTimeout(s),l=0>=l?a:l,t.data("paused",!1),n=Date.now(),s=setTimeout(function(){e.infinite&&o.restart(),i()},l),t.trigger("timerstart.zf."+r)},this.pause=function(){clearTimeout(s),t.data("paused",!0);var e=Date.now();l-=e-n,t.trigger("timerpaused.zf."+r)}},n=function(e,i){var n=e.length;0===n&&i();var s=function(){n--,0===n&&i()};e.each(function(){this.complete?s():"undefined"!=typeof this.naturalWidth&&this.naturalWidth>0?s():t(this).one("load",function(){s()})})};e.Timer=i,e.onImagesLoaded=n}(jQuery,window.Foundation),function(t){function e(){this.removeEventListener("touchmove",i),this.removeEventListener("touchend",e),d=!1}function i(i){if(t.spotSwipe.preventDefault&&i.preventDefault(),d){var n,s=i.touches[0].pageX,h=i.touches[0].pageY,u=o-s,c=a-h;l=(new Date).getTime()-r,Math.abs(u)>=t.spotSwipe.moveThreshold&&l<=t.spotSwipe.timeThreshold?n=u>0?"left":"right":Math.abs(c)>=t.spotSwipe.moveThreshold&&l<=t.spotSwipe.timeThreshold&&(n=c>0?"down":"up"),n&&(e.call(this),t(this).trigger("swipe",n).trigger("swipe"+n))}}function n(t){1==t.touches.length&&(o=t.touches[0].pageX,a=t.touches[0].pageY,d=!0,r=(new Date).getTime(),this.addEventListener("touchmove",i,!1),this.addEventListener("touchend",e,!1))}function s(){this.addEventListener&&this.addEventListener("touchstart",n,!1)}t.spotSwipe={version:"1.0.0",enabled:"ontouchstart"in document.documentElement,preventDefault:!0,moveThreshold:75,timeThreshold:200};var o,a,r,l,d=!1;t.event.special.swipe={setup:s},t.each(["left","up","down","right"],function(){t.event.special["swipe"+this]={setup:function(){t(this).on("swipe",t.noop)}}})}(jQuery),!function(t){t.fn.addTouch=function(){this.each(function(i,n){t(n).bind("touchstart touchmove touchend touchcancel",function(){e(event)})});var e=function(t){var e=t.changedTouches,i=e[0],n={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},s=n[t.type],o=document.createEvent("MouseEvent");o.initMouseEvent(s,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(o)}}}(jQuery),!function(t,e){"use strict";e(document).on("click.zf.trigger","[data-open]",function(){var t=e(this).data("open");e("#"+t).triggerHandler("open.zf.trigger",[e(this)])}),e(document).on("click.zf.trigger","[data-close]",function(){var t=e(this).data("close");t?e("#"+t).triggerHandler("close.zf.trigger",[e(this)]):e(this).trigger("close.zf.trigger")}),e(document).on("click.zf.trigger","[data-toggle]",function(){var t=e(this).data("toggle");e("#"+t).triggerHandler("toggle.zf.trigger",[e(this)])}),e(document).on("close.zf.trigger","[data-closable]",function(){var i=e(this).data("closable")||"fade-out";t.Motion?t.Motion.animateOut(e(this),i,function(){e(this).trigger("closed.zf")}):e(this).fadeOut().trigger("closed.zf")});var i=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if(t[e]+"MutationObserver"in window)return window[t[e]+"MutationObserver"];return!1}(),n=function(){r(),o(),a(),s()};e(window).load(function(){n()});var s=function(t){var i=e("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(t&&("string"==typeof t?n.push(t):"object"==typeof t&&"string"==typeof t[0]?n.concat(t):console.error("Plugin names must be strings")),i.length){var s=n.map(function(t){return"closeme.zf."+t}).join(" ");e(window).off(s).on(s,function(t,i){var n=t.namespace.split(".")[0],s=e("[data-"+n+"]").not('[data-yeti-box="'+i+'"]');s.each(function(){var t=e(this);t.triggerHandler("close.zf.trigger",[t])})})}},o=function(t){var n,s=e("[data-resize]");s.length&&e(window).off("resize.zf.trigger").on("resize.zf.trigger",function(o){n&&clearTimeout(n),n=setTimeout(function(){i||s.each(function(){e(this).triggerHandler("resizeme.zf.trigger")}),s.attr("data-events","resize")},t||10)})},a=function(t){var n,s=e("[data-scroll]");s.length&&e(window).off("scroll.zf.trigger").on("scroll.zf.trigger",function(o){n&&clearTimeout(n),n=setTimeout(function(){i||s.each(function(){e(this).triggerHandler("scrollme.zf.trigger")}),s.attr("data-events","scroll")},t||10)})},r=function(){if(!i)return!1;var t=document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),n=function(t){var i=e(t[0].target);switch(i.attr("data-events")){case"resize":i.triggerHandler("resizeme.zf.trigger",[i]);break;case"scroll":i.triggerHandler("scrollme.zf.trigger",[i,window.pageYOffset]);break;default:return!1}};if(t.length)for(var s=0;s<=t.length-1;s++){var o=new i(n);o.observe(t[s],{attributes:!0,childList:!1,characterData:!1,subtree:!1,attributeFilter:["data-events"]})}};t.IHearYou=n}(window.Foundation,window.jQuery),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=e.extend({},i.defaults,this.$element.data(),s),this.$window=e(window),this.name="Abide",this.attr="data-abide",this._init(),this._events(),t.registerPlugin(this)}i.defaults={validateOn:"fieldChange",labelErrorClass:"is-invalid-label",inputErrorClass:"is-invalid-input",formErrorSelector:".form-error",formErrorClass:"is-visible",patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(t,e,i){var n=document.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,s=t.value,o=n===s;return o}}},i.prototype._init=function(){},i.prototype._events=function(){var t=this;this.$element.off(".abide").on("reset.fndtn.abide",function(i){t.resetForm(e(this))}).on("submit.fndtn.abide",function(e){e.preventDefault(),t.validateForm(t.$element)}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(i){"fieldChange"===t.options.validateOn&&t.validateInput(e(i.target),t.$element)}).on("keydown.fndtn.abide",function(t){})},i.prototype._reflow=function(){},i.prototype.requiredCheck=function(t){switch(t[0].type){case"text":return t.attr("required")&&!t.val()?!1:!0;case"checkbox":return t.attr("required")&&!t.is(":checked")?!1:!0;case"radio":return t.attr("required")&&!t.is(":checked")?!1:!0;default:return!t.attr("required")||t.val()&&t.val().length&&!t.is(":empty")?!0:!1}},i.prototype.findLabel=function(t){return t.next("label").length?t.next("label"):t.closest("label")},i.prototype.addErrorClasses=function(t){var e=this,i=e.findLabel(t),n=t.next(e.options.formErrorSelector)||t.find(e.options.formErrorSelector);i&&i.addClass(e.options.labelErrorClass),n&&n.addClass(e.options.formErrorClass),t.addClass(e.options.inputErrorClass)},i.prototype.removeErrorClasses=function(t){var e=this,i=e.findLabel(t),n=t.next(e.options.formErrorSelector)||t.find(e.options.formErrorSelector);i&&i.hasClass(e.options.labelErrorClass)&&i.removeClass(e.options.labelErrorClass),n&&n.hasClass(e.options.formErrorClass)&&n.removeClass(e.options.formErrorClass),t.hasClass(e.options.inputErrorClass)&&t.removeClass(e.options.inputErrorClass)},i.prototype.validateInput=function(t,i){var n,s,o=this;i.find('input[type="text"]'),i.find('input[type="checkbox"]');"text"===t[0].type?o.requiredCheck(t)&&o.validateText(t)?(o.removeErrorClasses(t),t.trigger("valid.fndtn.abide",t[0])):(o.addErrorClasses(t),t.trigger("invalid.fndtn.abide",t[0])):"radio"===t[0].type?(s=t.attr("name"),n=t.siblings("label"),o.validateRadio(s)?(e(n).each(function(){e(this).hasClass(o.options.labelErrorClass)&&e(this).removeClass(o.options.labelErrorClass)}),t.trigger("valid.fndtn.abide",t[0])):(e(n).each(function(){e(this).addClass(o.options.labelErrorClass)}),t.trigger("invalid.fndtn.abide",t[0]))):"checkbox"===t[0].type?o.requiredCheck(t)?(o.removeErrorClasses(t),t.trigger("valid.fndtn.abide",t[0])):(o.addErrorClasses(t),t.trigger("invalid.fndtn.abide",t[0])):o.requiredCheck(t)&&o.validateText(t)?(o.removeErrorClasses(t),t.trigger("valid.fndtn.abide",t[0])):(o.addErrorClasses(t),t.trigger("invalid.fndtn.abide",t[0]))},i.prototype.validateForm=function(t){for(var i=this,n=t.find("input"),s=t.find("input").length,o=0;s>o;)i.validateInput(e(n[o]),t),o++;t.find(".form-error.is-visible").length||t.find(".is-invalid-label").length?t.find("[data-abide-error]").css("display","block"):t.find("[data-abide-error]").css("display","none")},i.prototype.validateText=function(t){var i=this.options.patterns,n=e(t).val(),s=e(t).attr("pattern");return 0===n.length?!0:n.match(i[s])?!0:!1},i.prototype.validateRadio=function(t){var i=this,n=(e(':radio[name="'+t+'"]').siblings("label"),0);return e(':radio[name="'+t+'"]').each(function(){i.requiredCheck(e(this))||n++,e(this).is(":checked")&&(n=0)}),n>0?!1:!0},i.prototype.matchValidation=function(t,e){},i.prototype.resetForm=function(t){var i=this,n="data-invalid";e("["+i.invalidAttr+"]",t).removeAttr(n),e("."+i.options.labelErrorClass,t).not("small").removeClass(i.options.labelErrorClass),e("."+i.options.inputErrorClass,t).not("small").removeClass(i.options.inputErrorClass),e(".form-error.is-visible").removeClass("is-visible"),t.find("[data-abide-error]").css("display","none"),e(":input",t).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(n)},i.prototype.destroy=function(){},t.plugin(i,"Abide"),"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=i),"function"==typeof define&&define(["foundation"],function(){return i})}(Foundation,jQuery),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),e.registerPlugin(this),e.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}i.defaults={slideSpeed:250,multiExpand:!1,allowAllClosed:!1},i.prototype._init=function(){this.$element.attr("role","tablist"),this.$tabs=this.$element.children("li"),this.$tabs.each(function(i,n){var s=t(n),o=s.find("[data-tab-content]"),a=o[0].id||e.GetYoDigits(6,"accordion"),r=n.id||a+"-label";s.find("a:first").attr({"aria-controls":a,role:"tab",id:r,"aria-expanded":!1,"aria-selected":!1}),o.attr({role:"tabpanel","aria-labelledby":r,"aria-hidden":!0,id:a})});var i=this.$element.find(".is-active").children("[data-tab-content]");i.length&&this.down(i,!0),this._events()},i.prototype._events=function(){var i=this;this.$tabs.each(function(){var n=t(this),s=n.children("[data-tab-content]");s.length&&n.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(t){t.preventDefault(),n.hasClass("is-active")?(i.options.allowAllClosed||n.siblings().hasClass("is-active"))&&i.up(s):i.down(s)}).on("keydown.zf.accordion",function(t){e.Keyboard.handleKey(t,i,{toggle:function(){i.toggle(s)},next:function(){n.next().find("a").focus().trigger("click.zf.accordion")},previous:function(){n.prev().find("a").focus().trigger("click.zf.accordion")},handled:function(){t.preventDefault(),t.stopPropagation()}})})})},i.prototype.toggle=function(t){if(t.parent().hasClass("is-active")){if(!this.options.allowAllClosed&&!t.parent().siblings().hasClass("is-active"))return;this.up(t)}else this.down(t)},i.prototype.down=function(i,n){var s=this;if(!this.options.multiExpand&&!n){var o=this.$element.find(".is-active").children("[data-tab-content]");o.length&&this.up(o)}i.attr("aria-hidden",!1).parent("[data-tab-content]").addBack().parent().addClass("is-active"),e.Move(s.options.slideSpeed,i,function(){i.slideDown(s.options.slideSpeed)}),n||e._reflow(this.$element.attr("data-accordion")),t("#"+i.attr("aria-labelledby")).attr({"aria-expanded":!0,"aria-selected":!0}),this.$element.trigger("down.zf.accordion",[i])},i.prototype.up=function(i){var n=i.parent().siblings(),s=this,o=this.options.multiExpand?n.hasClass("is-active"):i.parent().hasClass("is-active");(this.options.allowAllClosed||o)&&(e.Move(this.options.slideSpeed,i,function(){i.slideUp(s.options.slideSpeed)}),i.attr("aria-hidden",!0).parent().removeClass("is-active"),t("#"+i.attr("aria-labelledby")).attr({"aria-expanded":!1,"aria-selected":!1}),this.$element.trigger("up.zf.accordion",[i]))},i.prototype.destroy=function(){this.$element.find("[data-tab-content]").slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),e.unregisterPlugin(this)},e.plugin(i,"Accordion")}(jQuery,window.Foundation),!function(t){"use strict";function e(i,n){this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"accordion"),this._init(),Foundation.registerPlugin(this),Foundation.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll",TAB:"down",SHIFT_TAB:"up"})}e.defaults={slideSpeed:250,multiOpen:!0},e.prototype._init=function(){this.$element.find("[data-submenu]").not(".is-active").slideUp(0),this.$element.attr({role:"tablist","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".has-submenu"),this.$menuLinks.each(function(){var e=this.id||Foundation.GetYoDigits(6,"acc-menu-link"),i=t(this),n=i.children("[data-submenu]"),s=n[0].id||Foundation.GetYoDigits(6,"acc-menu"),o=n.hasClass("is-active");i.attr({"aria-controls":s,"aria-expanded":o,"aria-selected":!1,role:"tab",id:e}),n.attr({"aria-labelledby":e,"aria-hidden":!o,role:"tabpanel",id:s})});var e=this.$element.find(".is-active");if(e.length){var i=this;e.each(function(){i.down(t(this))})}this._events()},e.prototype._events=function(){var e=this;this.$element.find("li").each(function(){var i=t(this).children("[data-submenu]");i.length&&t(this).children("a").off("click.zf.accordionmenu").on("click.zf.accordionmenu",function(t){t.preventDefault(),e.toggle(i)})}).on("keydown.zf.accordionmenu",function(i){var n,s,o=t(this),a=o.parent("ul").children("li"),r=o.children("[data-submenu]");a.each(function(e){return t(this).is(o)?(n=a.eq(Math.max(0,e-1)),s=a.eq(Math.min(e+1,a.length-1)),t(this).children("[data-submenu]:visible").length&&(s=o.find("li:first-child")),t(this).is(":first-child")?n=o.parents("li").first():n.children("[data-submenu]:visible").length&&(n=n.find("li:last-child")),void(t(this).is(":last-child")&&(s=o.parents("li").first().next("li")))):void 0}),Foundation.Keyboard.handleKey(i,e,{open:function(){r.is(":hidden")&&(e.down(r),r.find("li").first().focus())},close:function(){r.length&&!r.is(":hidden")?e.up(r):o.parent("[data-submenu]").length&&(e.up(o.parent("[data-submenu]")),o.parents("li").first().focus())},up:function(){n.focus()},down:function(){s.focus()},toggle:function(){o.children("[data-submenu]").length&&e.toggle(o.children("[data-submenu]"))},closeAll:function(){e.hideAll()},handled:function(){i.preventDefault(),i.stopImmediatePropagation()}})})},e.prototype.hideAll=function(){this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)},e.prototype.toggle=function(t){t.is(":hidden")?this.down(t):this.up(t)},e.prototype.down=function(t){var e=this;console.log(t),this.options.multiOpen||this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element))),t.addClass("is-active").attr({"aria-hidden":!1}).parent(".has-submenu").attr({"aria-expanded":!0,"aria-selected":!0}),Foundation.Move(this.options.slideSpeed,t,function(){t.slideDown(e.options.slideSpeed)}),this.$element.trigger("down.zf.accordionMenu",[t])},e.prototype.up=function(t){var e=this;Foundation.Move(this.options.slideSpeed,t,function(){t.slideUp(e.options.slideSpeed)}),t.attr("aria-hidden",!0).find("[data-submenu]").slideUp(0).attr("aria-hidden",!0).end().parent(".has-submenu").attr({"aria-expanded":!1,"aria-selected":!1}),this.$element.trigger("up.zf.accordionMenu",[t])},e.prototype.destroy=function(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),Foundation.Nest.Burn(this.$element,"accordion"),Foundation.unregisterPlugin(this)},Foundation.plugin(e,"AccordionMenu")}(jQuery,window.Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),e.Nest.Feather(this.$element,"drilldown"),this._init(),e.registerPlugin(this),e.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}i.defaults={backButton:'<li class="js-drilldown-back" tabindex="0"><a>Back</a></li>',wrapper:"<div></div>",closeOnClick:!1},i.prototype._init=function(){this.$submenuAnchors=this.$element.find("li.has-submenu"),this.$submenus=this.$submenuAnchors.children("[data-submenu]").addClass("is-drilldown-sub"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","menuitem"),this._prepareMenu(),this._keyboardEvents()},i.prototype._prepareMenu=function(){var e=this;this.$submenuAnchors.each(function(){var i=t(this);i.find("a")[0].removeAttribute("href"),i.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"menu"}),e._events(i)}),this.$submenus.each(function(){var i=t(this),n=i.find(".js-drilldown-back");n.length||(i.prepend(e.options.backButton),e._back(i))}),this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=t(this.options.wrapper).addClass("is-drilldown").css(this._getMaxDims()),this.$element.wrap(this.$wrapper))},i.prototype._events=function(e){var i=this;e.off("click.zf.drilldown").on("click.zf.drilldown",function(n){if(n.stopImmediatePropagation(),n.preventDefault(),n.target!==n.currentTarget.firstElementChild)return!1;if(i._show(e),i.options.closeOnClick){var s=t("body").not(i.$wrapper);s.off(".zf.drilldown").on("click.zf.drilldown",function(t){t.preventDefault(),i._hideAll(),s.off(".zf.drilldown")})}})},i.prototype._keyboardEvents=function(){var i=this;this.$menuItems.add(this.$element.find(".js-drilldown-back")).on("keydown.zf.drilldown",function(n){var s,o,a=t(this),r=a.parent("ul").children("li");r.each(function(e){return t(this).is(a)?(s=r.eq(Math.max(0,e-1)),void(o=r.eq(Math.min(e+1,r.length-1)))):void 0}),e.Keyboard.handleKey(n,i,{next:function(){a.is(i.$submenuAnchors)&&(i._show(a),a.on(e.transitionend(a),function(){a.find("ul li").filter(i.$menuItems).first().focus()}))},previous:function(){i._hide(a.parent("ul")),a.parent("ul").on(e.transitionend(a),function(){setTimeout(function(){a.parent("ul").parent("li").focus()},1)})},up:function(){s.focus()},down:function(){o.focus()},close:function(){i._back()},open:function(){a.is(i.$menuItems)?a.is(i.$submenuAnchors)&&(i._show(a),setTimeout(function(){a.find("ul li").filter(i.$menuItems).first().focus()},1)):(i._hide(a.parent("ul")),setTimeout(function(){a.parent("ul").parent("li").focus()},1))},handled:function(){n.preventDefault(),n.stopImmediatePropagation()}})})},i.prototype._hideAll=function(){var t=this.$element.find(".is-drilldown-sub.is-active").addClass("is-closing");t.one(e.transitionend(t),function(e){t.removeClass("is-active is-closing")}),this.$element.trigger("closed.zf.drilldown")},i.prototype._back=function(t){
var e=this;t.off("click.zf.drilldown"),t.children(".js-drilldown-back").on("click.zf.drilldown",function(i){i.stopImmediatePropagation(),e._hide(t)})},i.prototype._menuLinkEvents=function(){var t=this;this.$menuItems.not(".has-submenu").off("click.zf.drilldown").on("click.zf.drilldown",function(e){setTimeout(function(){t._hideAll()},0)})},i.prototype._show=function(t){t.children("[data-submenu]").addClass("is-active"),this.$element.trigger("open.zf.drilldown",[t])},i.prototype._hide=function(t){t.addClass("is-closing").one(e.transitionend(t),function(){t.removeClass("is-active is-closing")}),t.trigger("hide.zf.drilldown",[t])},i.prototype._getMaxDims=function(){var e=0,i={};return this.$submenus.add(this.$element).each(function(){var i=t(this).children("li").length;e=i>e?i:e}),i.height=e*this.$menuItems[0].getBoundingClientRect().height+"px",i.width=this.$element[0].getBoundingClientRect().width+"px",i},i.prototype.destroy=function(){this._hideAll(),e.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back").remove().end().find(".is-active, .is-closing, .is-drilldown-sub").removeClass("is-active is-closing is-drilldown-sub").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role").off(".zf.drilldown").end().off("zf.drilldown"),e.unregisterPlugin(this)},e.plugin(i,"Drilldown")}(jQuery,window.Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),e.registerPlugin(this),e.Keyboard.register("Dropdown",{ENTER:"open",SPACE:"open",ESCAPE:"close",TAB:"tab_forward",SHIFT_TAB:"tab_backward"})}i.defaults={hoverDelay:250,hover:!1,vOffset:1,hOffset:1,positionClass:"",trapFocus:!1},i.prototype._init=function(){var i=this.$element.attr("id");this.$anchor=t('[data-toggle="'+i+'"]')||t('[data-open="'+i+'"]'),this.$anchor.attr({"aria-controls":i,"data-is-focus":!1,"data-yeti-box":i,"aria-haspopup":!0,"aria-expanded":!1}),this.options.positionClass=this.getPositionClass(),this.counter=4,this.usedPositions=[],this.$element.attr({"aria-hidden":"true","data-yeti-box":i,"data-resize":i,"aria-labelledby":this.$anchor[0].id||e.GetYoDigits(6,"dd-anchor")}),this._events()},i.prototype.getPositionClass=function(){var t=this.$element[0].className.match(/(top|left|right)/g);return t=t?t[0]:""},i.prototype._reposition=function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.$element.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.$element.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.$element.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):this.$element.removeClass(t),this.classChanged=!0,this.counter--},i.prototype._setPosition=function(){if("false"===this.$anchor.attr("aria-expanded"))return!1;var t=this.getPositionClass(),i=e.Box.GetDimensions(this.$element),n=(e.Box.GetDimensions(this.$anchor),"left"===t?"left":"right"===t?"left":"top"),s="top"===n?"height":"width";"height"===s?this.options.vOffset:this.options.hOffset;if(i.width>=i.windowDims.width||!this.counter&&!e.Box.ImNotTouchingYou(this.$element))return this.$element.offset(e.Box.GetOffsets(this.$element,this.$anchor,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:i.windowDims.width-2*this.options.hOffset,height:"auto"}),this.classChanged=!0,!1;for(this.$element.offset(e.Box.GetOffsets(this.$element,this.$anchor,t,this.options.vOffset,this.options.hOffset));!e.Box.ImNotTouchingYou(this.$element)&&this.counter;)this._reposition(t),this._setPosition()},i.prototype._events=function(){var t=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.options.hover&&(clearTimeout(t.timeout),this.$anchor.on("mouseenter.zf.dropdown mouseleave.zf.dropdown",function(){t.timeOut=setTimeout(function(){t.toggle()},t.options.hoverDelay)})),this.$anchor.add(this.$element).on("keydown.zf.dropdown",function(i){var n=e.Keyboard.findFocusable(t.$element);e.Keyboard.handleKey(i,t,{tab_forward:function(){this.$element.find(":focus").is(n.eq(-1))&&(this.options.trapFocus?(n.eq(0).focus(),i.preventDefault()):this.close())},tab_backward:function(){(this.$element.find(":focus").is(n.eq(0))||this.$element.is(":focus"))&&(this.options.trapFocus?(n.eq(-1).focus(),i.preventDefault()):this.close())},open:function(){t.open(),t.$element.attr("tabindex",-1).focus()},close:function(){t.close(),t.$anchor.focus()}})})},i.prototype.open=function(){this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchor.addClass("hover").attr({"aria-expanded":!0}),this._setPosition(),this.$element.addClass("is-open").attr({"aria-hidden":!1}),this.$element.trigger("show.zf.dropdown",[this.$element])},i.prototype.close=function(){if(!this.$element.hasClass("is-open"))return!1;if(this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchor.removeClass("hover").attr("aria-expanded",!1),this.classChanged){var t=this.getPositionClass();t&&this.$element.removeClass(t),this.$element.addClass(this.options.positionClass).css({height:"",width:""}),this.classChanged=!1,this.counter=4,this.usedPositions.length=0}this.$element.trigger("hide.zf.dropdown",[this.$element])},i.prototype.toggle=function(){this.$element.hasClass("is-open")?this.close():this.open()},i.prototype.destroy=function(){this.$element.off(".zf.trigger").hide(),this.$anchor.off(".zf.dropdown"),e.unregisterPlugin(this)},e.plugin(i,"Dropdown")}(jQuery,window.Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=e.extend({},i.defaults,this.$element.data(),s),t.Nest.Feather(this.$element,"dropdown"),this._init(),t.registerPlugin(this),t.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}i.defaults={clickOpen:!0,closeOnClick:!1,disableHover:!1,autoclose:!0,hoverDelay:150,closingTime:500,alignment:"left",verticalClass:"vertical",rightClass:"align-right"},i.prototype._init=function(){this.$element.hasClass(this.options.verticalClass)&&(this.vertical=!0),this._prepareMenu()},i.prototype._prepareMenu=function(){var t=this;this.$tabs=this.$element.children("li.has-submenu"),this.$tabs.children("[data-submenu]").addClass("first-sub"),this.$submenus=this.$element.find("li.has-submenu"),this.$menuItems=this.$element.find("li").attr({role:"menuitem",tabindex:0}),this.$menuItems.children("a").attr("tabindex",-1),this.$element.hasClass(this.options.rightClass)?(this.options.alignment="right",this.$submenus.addClass("is-left-arrow opens-left")):this.$submenus.addClass("is-right-arrow opens-right"),this.vertical||this.$tabs.removeClass("is-right-arrow is-left-arrow opens-left opens-right").addClass("is-down-arrow"),this.$tabs.each(function(){var t=e(this);t.attr({role:"menuitem",tabindex:0,"aria-label":t.children("a:first-child").text()}).children("a").attr("tabindex",-1),t.children("[data-submenu]")&&t.attr("aria-haspopup",!0)}),this.$submenus.each(function(){var i=e(this);i.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:-1,role:"menu"}).addClass("vertical"),t._events(i)})},i.prototype._events=function(i){var n=this,s=void 0!==window.ontouchstart;(this.options.clickOpen||s)&&i.off("click.zf.dropdownmenu").on("click.zf.dropdownmenu",function(t){if(e(this).hasClass("is-dropdown-submenu-parent")){var o=i.data("isClick");s&&o||(t.preventDefault(),t.stopPropagation(),i.data("isClick")?n._hide(i):(n._hideOthers(i),n._show(i),i.data("isClick",!0).parentsUntil("[data-dropdown-menu]",".is-dropdown-submenu-parent").data("isClick",!0),n.options.closeOnClick&&n._addBodyHandler()))}}),this.options.disableHover||(this.$menuItems.on("mouseenter.zf.dropdownmenu",function(t){var i=e(this);i.hasClass("is-active")||n._hideOthers(i)}),i.on("mouseenter.zf.dropdownmenu",function(t){clearTimeout(i.closeTimer),i.hasClass("is-active")||(i.openTimer=setTimeout(function(){n._show(i)},n.options.hoverDelay))}).on("mouseleave.zf.dropdownmenu",function(t){!i.data("isClick")&&n.options.autoclose&&(clearTimeout(i.openTimer),i.closeTimer=setTimeout(function(){n._hide(i)},n.options.closingTime))})),this.$menuItems.on("keydown.zf.dropdownmenu",function(i){var s,o,a=e(this),r=n.$element.children("li"),l=a.is(r),d=l?r:a.parents("li").first().add(a.parent("ul").children("li"));d.each(function(t){return e(this).is(a)?(s=d.eq(t-1),void(o=d.eq(t+1))):void 0});var h=function(){a.is(":last-child")||o.focus()},u=function(){s.focus()},c=function(){a.has("ul").length&&(n._show(a),a.find("li").first().focus())},f=function(){a.parents("li").first().focus(),n._hide(a.parents("li").first())},p={open:c,close:function(){n._hideAll(),n.$menuItems.first().focus()},handled:function(){i.preventDefault(),i.stopImmediatePropagation()}};l?n.vertical?"left"===n.options.alignment?e.extend(p,{down:h,up:u,next:c,previous:f}):e.extend(p,{down:h,up:u,next:f,previous:c}):e.extend(p,{next:h,previous:u,down:c,up:f}):"left"===n.options.alignment?e.extend(p,{next:c,previous:f,down:h,up:u}):e.extend(p,{next:f,previous:c,down:h,up:u}),t.Keyboard.handleKey(i,n,p)})},i.prototype._toggle=function(t){t.hasClass("is-active")?this._hide(t):this._show(t)},i.prototype._addBodyHandler=function(){var t=e("body"),i=this;t.not(i.$element).on("click.zf.dropdownmenu tap.zf.dropdownmenu touchend.zf.dropdownmenu",function(e){i._hideAll(),t.off("click.zf.dropdownmenu tap.zf.dropdownmenu touchend.zf.dropdownmenu")})},i.prototype._show=function(e){this._hideOthers(e),e.focus();var i=e.children("[data-submenu]:first-of-type");e.addClass("is-active"),i.css("visibility","hidden").addClass("js-dropdown-active").attr("aria-hidden",!1);var n=t.Box.ImNotTouchingYou(i,null,!0);n||("left"===this.options.alignment?e.removeClass("opens-left").addClass("opens-right"):e.removeClass("opens-right").addClass("opens-left"),this.changed=!0,n=t.Box.ImNotTouchingYou(i,null,!0),n||(e.removeClass("opens-left opens-right").addClass("opens-inner"),this.changed=!0)),i.css("visibility",""),this.$element.trigger("show.zf.dropdownmenu",[e])},i.prototype._hide=function(t){this._hideSome(t)},i.prototype._hideSome=function(t){t.length&&(t.removeClass("is-active opens-inner").data("isClick",!1).find(".is-active").removeClass("is-active").data("isClick",!1).end().find(".js-dropdown-active").removeClass("js-dropdown-active").attr("aria-hidden",!0),t.parent(".has-submenu").removeClass("is-active"),this.changed&&("left"===this.options.alignment?t.find(".opens-left").removeClass("opens-left").addClass("opens-right"):t.find(".opens-right").removeClass("opens-right").addClass("opens-left")),this.$element.trigger("hide.zf.dropdownmenu"))},i.prototype._hideOthers=function(t){this._hideSome(t.siblings(".has-submenu.is-active"))},i.prototype._hideAll=function(){this._hideSome(this.$element)},i.prototype.destroy=function(){this._hideAll(),this.$element.removeData("zf-plugin").find("li").removeClass("js-dropdown-nohover is-right-arrow is-left-arrow opens-left opens-inner opens-right").add("a").off(".zf.dropdownmenu").end().find("ul").removeClass("first-sub"),t.Nest.Burn(this.$element,"dropdown"),t.unregisterPlugin(this)},t.plugin(i,"DropdownMenu")}(Foundation,jQuery),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=e.extend({},i.defaults,this.$element.data(),s),this.$window=e(window),this.name="equalizer",this.attr="data-equalizer",this._init(),this._events(),t.registerPlugin(this)}i.defaults={equalizeOnStack:!0,throttleInterval:50},i.prototype._init=function(){this._reflow()},i.prototype._events=function(){var e=this;this.$window.off(".equalizer").on("resize.fndtn.equalizer",t.util.throttle(function(){e._reflow()},e.options.throttleInterval))},i.prototype._killswitch=function(){},i.prototype._reflow=function(){var i=this;e("["+this.attr+"]").each(function(){var n=e(this),s=[],o=n.find("img");o.length?t.onImagesLoaded(o,function(){s=i.getHeights(n),i.applyHeight(n,s)}):(s=i.getHeights(n),i.applyHeight(n,s))})},i.prototype.getHeights=function(t){var i,n=t.data("equalizer"),s=n?t.find("["+this.attr+'-watch="'+n+'"]:visible'):t.find("["+this.attr+"-watch]:visible");return s.height("inherit"),i=s.map(function(){return e(this).outerHeight(!1)}).get(),console.log(i),i},i.prototype.applyHeight=function(t,i){var n=t.data("equalizer"),s=n?t.find("["+this.attr+'-watch="'+n+'"]:visible'):t.find("["+this.attr+"-watch]:visible"),o=Math.max.apply(null,i);t.trigger("preEqualized.zf.Equalizer");for(var a=0;a<s.length;a++)e(s[a]).css("height",o);t.trigger("postEqualized.zf.Equalizer")},i.prototype.destroy=function(){},t.plugin(i,"Equalizer"),"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=i),"function"==typeof define&&define(["foundation"],function(){return i})}(Foundation,jQuery),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=e.extend({},i.defaults,s),this.rules=[],this.currentPath="",this._init(),this._events(),t.registerPlugin(this)}i.defaults={rules:null},i.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"},i.prototype._init=function(){this._addBreakpoints(),this._generateRules(),this._reflow()},i.prototype._events=function(){e(window).on("resize.fndtn.interchange",t.util.throttle(this._reflow.bind(this),50))},i.prototype._reflow=function(){var t;for(var e in this.rules){var i=this.rules[e];window.matchMedia(i.query).matches&&(t=i)}t&&this.replace(t.path)},i.prototype._addBreakpoints=function(){for(var e in t.MediaQuery.queries){var n=t.MediaQuery.queries[e];i.SPECIAL_QUERIES[n.name]=n.value}},i.prototype._generateRules=function(){var t,e=[];t=this.options.rules?this.options.rules:this.$element.data("interchange").match(/\[.*?\]/g);for(var n in t){var s=t[n].slice(1,-1).split(", "),o=s.slice(0,-1).join(""),a=s[s.length-1];i.SPECIAL_QUERIES[a]&&(a=i.SPECIAL_QUERIES[a]),e.push({path:o,query:a})}this.rules=e},i.prototype.replace=function(t){if(this.currentPath!==t){var i=this;"IMG"===this.$element[0].nodeName?this.$element.attr("src",t).load(function(){i.$element.trigger("replaced.zf.interchange"),i.currentPath=t}):t.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i)?this.$element.css({"background-image":"url("+t+")"}):e.get(t,function(e){i.$element.html(e),i.$element.trigger("replaced.zf.interchange"),i.currentPath=t})}},i.prototype.destroy=function(){},t.plugin(i,"Interchange"),"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=i),"function"==typeof define&&define(["foundation"],function(){return i})}(Foundation,jQuery),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=e.extend({},i.defaults,s),this._init(),t.registerPlugin(this)}i.defaults={animationDuration:500,animationEasing:"linear",threshold:50,activeClass:"active",deepLinking:!1},i.prototype._init=function(){var i=this.$element[0].id||t.GetYoDigits(6,"magellan");this.$targets=e("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":i,"data-scroll":i,id:i}),this.$active=e(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()},i.prototype.calcPoints=function(){var t=this,i=document.body,n=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,document.body.clientHeight)),this.docHeight=Math.round(Math.max(i.scrollHeight,i.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)),this.$targets.each(function(){var i=e(this),n=Math.round(i.offset().top-t.options.threshold);i.targetPoint=n,t.points.push(n)})},i.prototype._events=function(){var t=this,i=e("html, body"),n={duration:t.options.animationDuration,easing:t.options.animationEasing};e(window).one("load",function(){t.calcPoints(),t._updateActive()}),this.$element.on({"resizeme.zf.trigger":this.reflow.bind(this),"scrollme.zf.trigger":this._updateActive.bind(this)}).on("click.zf.magellan",'a[href^="#"]',function(s){s.preventDefault();var o=this.getAttribute("href"),a=e(o).offset().top-t.options.threshold/2;i.stop(!0).animate({scrollTop:a},n)})},i.prototype.reflow=function(){this.calcPoints(),this._updateActive()},i.prototype._updateActive=function(){var t,e=parseInt(window.pageYOffset,10);if(e+this.winHeight===this.docHeight)t=this.points.length-1;else if(e<this.points[0])t=0;else{var i=this.scrollPos<e,n=this,s=this.points.filter(function(t,s){return i?e>=t:t-n.options.threshold<=e});t=s.length?s.length-1:0}if(this.$active.removeClass(this.options.activeClass),this.$active=this.$links.eq(t).addClass(this.options.activeClass),this.options.deepLinking){var o=this.$active[0].getAttribute("href");window.history.pushState?window.history.pushState(null,null,o):window.location.hash=o}this.scrollPos=e,this.$element.trigger("update.zf.magellan",[this.$active])},i.prototype.destroy=function(){this.$element.off(".zf.trigger .zf.magellan").find("."+this.options.activeClass).removeClass(this.options.activeClass);var e=this.$active[0].getAttribute("href");window.location.hash.replace(e,""),t.unregisterPlugin(this)},t.plugin(i,"Magellan"),"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=i),"function"==typeof define&&define(["foundation"],function(){return i})}(Foundation,jQuery),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),this.$lastTrigger=t(),this._init(),this._events(),e.registerPlugin(this)}i.defaults={closeOnClick:!0,transitionTime:0,position:"left",forceTop:!0,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-"},i.prototype._init=function(){var e=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),t(document).find('[data-open="'+e+'"], [data-close="'+e+'"], [data-toggle="'+e+'"]').attr("aria-expanded","false").attr("aria-controls",e),this.options.closeOnClick)if(t(".js-off-canvas-exit").length)this.$exiter=t(".js-off-canvas-exit");else{var i=document.createElement("div");i.setAttribute("class","js-off-canvas-exit"),t("[data-off-canvas-content]").append(i),this.$exiter=t(i)}this.options.isRevealed=this.options.isRevealed||new RegExp(this.options.revealClass,"g").test(this.$element[0].className),this.options.isRevealed&&(this.options.revealOn=this.options.revealOn||this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],this._setMQChecker()),this.options.transitionTime||(this.options.transitionTime=1e3*parseFloat(window.getComputedStyle(t("[data-off-canvas-wrapper]")[0]).transitionDuration))},i.prototype._events=function(){if(this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),this.$exiter.length){this.$exiter.on({"click.zf.offcanvas":this.close.bind(this)})}},i.prototype._setMQChecker=function(){var i=this;t(window).on("changed.zf.mediaquery",function(){e.MediaQuery.atLeast(i.options.revealOn)?i.reveal(!0):i.reveal(!1)}).one("load.zf.offcanvas",function(){e.MediaQuery.atLeast(i.options.revealOn)&&i.reveal(!0)})},i.prototype.reveal=function(t){var e=this.$element.find("[data-close]");t?e.length&&e.hide():e.length&&e.show()},i.prototype.open=function(i,n){if(!this.$element.hasClass("is-open")){var s=this;t(document.body);t("body").scrollTop(0),e.Move(this.options.transitionTime,this.$element,function(){t("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-"+s.options.position),s.$element.addClass("is-open").attr("aria-hidden","false").trigger("opened.zf.offcanvas")}),n&&(this.$lastTrigger=n.attr("aria-expanded","true")),this.options.autoFocus&&this.$element.one("finished.zf.animate",function(){s.$element.find("a, button").eq(0).focus()})}},i.prototype.close=function(){if(this.$element.hasClass("is-open")){var i=this;e.Move(this.options.transitionTime,this.$element,function(){t("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-"+i.options.position),i.$element.removeClass("is-open")}),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.$lastTrigger.attr("aria-expanded","false")}},i.prototype.toggle=function(t,e){this.$element.hasClass("is-open")?this.close(t,e):this.open(t,e)},i.prototype._handleKeyboard=function(t){27===t.which&&(t.stopPropagation(),t.preventDefault(),this.close(),this.$lastTrigger.focus())},i.prototype.destroy=function(){},e.plugin(i,"OffCanvas")}(jQuery,Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),e.registerPlugin(this),e.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}i.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous"},i.prototype._init=function(){this.$wrapper=this.$element.find("."+this.options.containerClass),this.$slides=this.$element.find("."+this.options.slideClass);var t=this.$element.find("img"),i=this.$slides.filter(".is-active");i.length||this.$slides.eq(0).addClass("is-active"),t.length?e.onImagesLoaded(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)},i.prototype._loadBullets=function(){this.$bullets=this.$element.find("."+this.options.boxOfBullets).find("button")},i.prototype.geoSync=function(){var t=this;this.timer=new e.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()},i.prototype._prepareForOrbit=function(){var t=this;this._setWrapperHeight(function(e){t._setSlideHeight(e)})},i.prototype._setWrapperHeight=function(e){var i,n=0,s=0;this.$slides.each(function(){i=this.getBoundingClientRect().height,t(this).attr("data-slide",s),s&&t(this).css({position:"relative",display:"none"}),n=i>n?i:n,s++}),s===this.$slides.length&&(this.$wrapper.css({height:n}),e(n))},i.prototype._setSlideHeight=function(e){this.$slides.each(function(){t(this).css("max-height",e)})},i.prototype._events=function(){var i=this;if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",i.$element.data("clickedOn")?!1:!0),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons){var n=this.$element.find("."+this.options.nextClass+", ."+this.options.prevClass);n.attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(){i.changeSlide(t(this).hasClass(i.options.nextClass))})}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var e=t(this).data("slide"),n=e>i.$slides.filter(".is-active").data("slide"),s=i.$slides.eq(e);i.changeSlide(n,s,e)}),this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(n){e.Keyboard.handleKey(n,i,{next:function(){i.changeSlide(!0)},previous:function(){i.changeSlide(!1)},handled:function(){t(n.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})},i.prototype.changeSlide=function(t,i,n){var s=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(s[0].className))return!1;var o,a=this.$slides.first(),r=this.$slides.last(),l=t?"Right":"Left",d=t?"Left":"Right",h=this;o=i?i:t?this.options.infiniteWrap?s.next("."+this.options.slideClass).length?s.next("."+this.options.slideClass):a:s.next("."+this.options.slideClass):this.options.infiniteWrap?s.prev("."+this.options.slideClass).length?s.prev("."+this.options.slideClass):r:s.prev("."+this.options.slideClass),o.length&&(this.options.bullets&&(n=n||this.$slides.index(o),this._updateBullets(n)),e.Motion.animateIn(o.addClass("is-active").css({position:"absolute",top:0}),this.options["animInFrom"+l],function(){o.css({position:"relative",display:"block"}).attr("aria-live","polite")}),e.Motion.animateOut(s.removeClass("is-active"),this.options["animOutTo"+d],function(){s.removeAttr("aria-live"),h.options.autoPlay&&h.timer.restart(),h.$element.trigger("slidechange.zf.orbit",[o])}))},i.prototype._updateBullets=function(t){var e=this.$element.find("."+this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),i=e.find("span:last").detach();this.$bullets.eq(t).addClass("is-active").append(i)},i.prototype.destroy=function(){delete this.timer,this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),e.unregisterPlugin(this)},e.plugin(i,"Orbit")}(jQuery,window.Foundation),!function(t,e){"use strict";function i(i){this.$element=e(i),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this._init(),this._events(),t.registerPlugin(this)}var n={dropdown:{cssClass:"dropdown",plugin:t._plugins["dropdown-menu"]||null},drilldown:{cssClass:"drilldown",plugin:t._plugins.drilldown||null},accordion:{cssClass:"accordion-menu",plugin:t._plugins["accordion-menu"]||null}};i.defaults={},i.prototype._init=function(){for(var t={},i=this.rules.split(" "),s=0;s<i.length;s++){var o=i[s].split("-"),a=o.length>1?o[0]:"small",r=o.length>1?o[1]:o[0];null!==n[r]&&(t[a]=n[r])}this.rules=t,e.isEmptyObject(t)||this._checkMediaQueries()},i.prototype._events=function(){var t=this;e(window).on("changed.zf.mediaquery",function(){t._checkMediaQueries()})},i.prototype._checkMediaQueries=function(){var i,s=this;e.each(this.rules,function(e){t.MediaQuery.atLeast(e)&&(i=e)}),i&&(this.currentPlugin instanceof this.rules[i].plugin||(e.each(n,function(t,e){s.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[i].cssClass),this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[i].plugin(this.$element,{})))},i.prototype.destroy=function(){this.currentPlugin.destroy(),e(window).off(".zf.ResponsiveMenu"),t.unregisterPlugin(this)},t.plugin(i,"ResponsiveMenu")}(Foundation,jQuery),!function(t,e){"use strict";function i(n,s){this.$element=t(n),this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),this._events(),e.registerPlugin(this)}i.defaults={hideFor:"medium"},i.prototype._init=function(){var e=this.$element.data("responsive-toggle");e||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=t("#"+e),this.$toggler=this.$element.find("[data-toggle]"),this._update()},i.prototype._events=function(){t(window).on("changed.zf.mediaquery",this._update.bind(this)),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))},i.prototype._update=function(){e.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())},i.prototype.toggleMenu=function(){e.MediaQuery.atLeast(this.options.hideFor)||(this.$targetMenu.toggle(0),this.$element.trigger("toggled.zf.responsiveToggle"))},i.prototype.destroy=function(){},e.plugin(i,"ResponsiveToggle")}(jQuery,Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=e.extend({},i.defaults,this.$element.data(),s),this._init(),t.registerPlugin(this),t.Keyboard.register("Reveal",{ENTER:"open",SPACE:"open",ESCAPE:"close",TAB:"tab_forward",SHIFT_TAB:"tab_backward"})}i.defaults={animationIn:"",animationOut:"",showDelay:0,hideDelay:0,closeOnClick:!0,closeOnEsc:!0,multipleOpened:!1,vOffset:100,hOffset:0,fullScreen:!1,btmOffsetPct:10,overlay:!0,resetOnClose:!1},i.prototype._init=function(){if(this.id=this.$element.attr("id"),this.isActive=!1,this.$anchor=e(e('[data-open="'+this.id+'"]').length?'[data-open="'+this.id+'"]':'[data-toggle="'+this.id+'"]'),this.$anchor.length){var i=this.$anchor[0].id||t.GetYoDigits(6,"reveal");this.$anchor.attr({"aria-controls":this.id,id:i,"aria-haspopup":!0,tabindex:0}),this.$element.attr({"aria-labelledby":i})}(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this._events()},i.prototype._makeOverlay=function(t){var i=e("<div></div>").addClass("reveal-overlay").attr({tabindex:-1,"aria-hidden":!0}).appendTo("body");return this.options.closeOnClick&&i.attr({"data-close":t}),i},i.prototype._events=function(){var t=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function(){t.$element.is(":visible")&&t._setPosition(function(){})}}),this.$anchor.length&&this.$anchor.on("keydown.zf.reveal",function(e){(13===e.which||32===e.which)&&(e.stopPropagation(),e.preventDefault(),t.open())}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",this.close.bind(this))},i.prototype._setPosition=function(e){var i=t.Box.GetDimensions(this.$element),n=this.options.fullScreen?"reveal full":i.height>=.5*i.windowDims.height?"reveal":"center";"reveal full"===n?(console.log("full"),this.$element.offset(t.Box.GetOffsets(this.$element,null,n,this.options.vOffset)).css({height:i.windowDims.height,width:i.windowDims.width})):t.MediaQuery.atLeast("medium")&&t.Box.ImNotTouchingYou(this.$element,null,!0,!1)?this.$element.css({"max-height":i.windowDims.height-this.options.vOffset*(this.options.btmOffsetPct/100+1),width:""}).offset(t.Box.GetOffsets(this.$element,null,n,this.options.vOffset)):(this.$element.css({width:i.windowDims.width-2*this.options.hOffset}).offset(t.Box.GetOffsets(this.$element,null,"center",this.options.vOffset,this.options.hOffset)),this.changedSize=!0),e()},i.prototype.open=function(){var i=this;this.isActive=!0,this.$element.css({visibility:"hidden"}).show().scrollTop(0),this._setPosition(function(){i.$element.hide().css({visibility:""}),i.options.multipleOpened||i.$element.trigger("closeme.zf.reveal",i.id),i.options.animationIn?i.options.overlay?t.Motion.animateIn(i.$overlay,"fade-in",function(){t.Motion.animateIn(i.$element,i.options.animationIn,function(){})}):t.Motion.animateIn(i.$element,i.options.animationIn,function(){}):i.options.overlay?i.$overlay.show(0,function(){i.$element.show(i.options.showDelay,function(){})}):i.$element.show(i.options.showDelay,function(){})}),this.$element.attr({"aria-hidden":!1}).attr("tabindex",-1).focus().trigger("open.zf.reveal"),
e("body").addClass("is-reveal-open").attr({"aria-hidden":this.options.overlay||this.options.fullScreen?!0:!1}),setTimeout(function(){i._extraHandlers()},0)},i.prototype._extraHandlers=function(){var i=this,n=this.$element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!e(this).is(":visible")||e(this).attr("tabindex")<0?!1:!0});this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||e("body").on("click.zf.reveal",function(t){i.close()}),this.options.closeOnEsc&&e(window).on("keydown.zf.reveal",function(e){0===n.length&&e.preventDefault(),t.Keyboard.handleKey(e,i,{close:function(){this.options.closeOnEsc&&this.close()}})}),this.$element.on("keydown.zf.reveal",function(s){var o=e(this);t.Keyboard.handleKey(s,i,{tab_forward:function(){this.$element.find(":focus").is(n.eq(-1))&&(n.eq(0).focus(),s.preventDefault())},tab_backward:function(){(this.$element.find(":focus").is(n.eq(0))||this.$element.is(":focus"))&&(n.eq(-1).focus(),s.preventDefault())},open:function(){o.is(n)&&this.open()},close:function(){this.options.closeOnEsc&&this.close()}}),0===n.length&&s.preventDefault()})},i.prototype.close=function(){if(!this.isActive||!this.$element.is(":visible"))return!1;var i=this;this.options.animationOut?t.Motion.animateOut(this.$element,this.options.animationOut,function(){i.options.overlay&&t.Motion.animateOut(i.$overlay,"fade-out",function(){})}):this.$element.hide(i.options.hideDelay,function(){i.options.overlay&&i.$overlay.hide(0,function(){})}),this.options.closeOnEsc&&e(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&e("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.changedSize&&this.$element.css({height:"",width:""}),e("body").removeClass("is-reveal-open").attr({"aria-hidden":!1,tabindex:""}),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,this.$element.attr({"aria-hidden":!0}).trigger("closed.zf.reveal")},i.prototype.toggle=function(){this.isActive?this.close():this.open()},i.prototype.destroy=function(){this.options.overlay&&this.$overlay.hide().off().remove(),this.$element.hide(),this.$anchor.off(),t.unregisterPlugin(this)},t.plugin(i,"Reveal"),"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=i),"function"==typeof define&&define(["foundation"],function(){return i})}(Foundation,jQuery),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),e.registerPlugin(this),e.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}function n(t,e){return t/e}function s(t,e,i,n){return Math.abs(t.position()[e]+t[n]()/2-i)}i.defaults={start:0,end:100,step:1,initialStart:0,initialEnd:100,binding:!1,clickSelect:!0,vertical:!1,draggable:!0,disabled:!1,doubleSided:!1,decimal:2,moveTime:200,disabledClass:"disabled"},i.prototype._init=function(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):t("#"+this.$handle.attr("aria-controls")),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var e=!1,i=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=t().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this._events(this.$handle),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=this.inputs.length?this.inputs.eq(1):t("#"+this.$handle2.attr("aria-controls")),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),e=!0,this._setHandlePos(this.$handle,this.options.initialStart,!0,function(){i._setHandlePos(i.$handle2,i.options.initialEnd)}),this._setInitAttr(1),this._events(this.$handle2)),e||this._setHandlePos(this.$handle,this.options.initialStart,!0)},i.prototype._setHandlePos=function(t,i,s,o){i=parseFloat(i),i<this.options.start?i=this.options.start:i>this.options.end&&(i=this.options.end);var a=this.options.doubleSided;if(a)if(0===this.handles.index(t)){var r=parseFloat(this.$handle2.attr("aria-valuenow"));i=i>=r?r-this.options.step:i}else{var l=parseFloat(this.$handle.attr("aria-valuenow"));i=l>=i?l+this.options.step:i}this.options.vertical&&!s&&(i=this.options.end-i);var d=this,h=this.options.vertical,u=h?"height":"width",c=h?"top":"left",f=t[0].getBoundingClientRect()[u]/2,p=this.$element[0].getBoundingClientRect()[u],m=n(i,this.options.end).toFixed(this.options.decimal),g=(p-f)*m,v=(100*n(g,p)).toFixed(this.options.decimal),i=i>0?parseFloat(i.toFixed(this.options.decimal)):0,w={};if(this._setValues(t,i),this.options.doubleSided){var y,b=0===this.handles.index(t);this.handles.index(t);b?(w[c]=(m>0?100*m:0)+"%",y=(100*(n(this.$handle2.position()[c]+f,p)-parseFloat(m))).toFixed(this.options.decimal)+"%",w["min-"+u]=y,o&&"function"==typeof o&&o()):(i=(100>i?i:100)-(parseFloat(this.$handle[0].style.left)||this.options.end-i),w["min-"+u]=i+"%")}this.$element.one("finished.zf.animate",function(){d.animComplete=!0,d.$element.trigger("moved.zf.slider",[t])});var $=d.$element.data("dragging")?1e3/60:d.options.moveTime;e.Move($,t,function(){t.css(c,v+"%"),d.options.doubleSided?d.$fill.css(w):d.$fill.css(u,100*m+"%")})},i.prototype._setInitAttr=function(t){var i=this.inputs.eq(t).attr("id")||e.GetYoDigits(6,"slider");this.inputs.eq(t).attr({id:i,max:this.options.end,min:this.options.start}),this.handles.eq(t).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":0===t?this.options.initialStart:this.options.initialEnd,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})},i.prototype._setValues=function(t,e){var i=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(i).val(e),t.attr("aria-valuenow",e)},i.prototype._handleEvent=function(t,e,i){var o,a;if(i)o=i,a=!0;else{t.preventDefault();var r=this.options.vertical,l=r?"height":"width",d=r?"top":"left",h=r?t.pageY:t.pageX,u=this.$handle[0].getBoundingClientRect()[l]/2,c=this.$element[0].getBoundingClientRect()[l],f=this.$element.offset()[d]-h,p=f>0?-u:-c>f-u?c:Math.abs(f),m=n(p,c);if(o=(this.options.end-this.options.start)*m,a=!1,!e){var g=s(this.$handle,d,p,l),v=s(this.$handle2,d,p,l);e=v>=g?this.$handle:this.$handle2}}this._setHandlePos(e,o,a)},i.prototype._events=function(i){if(this.options.disabled)return!1;var n,s=this;if(this.inputs.off("change.zf.slider").on("change.zf.slider",function(e){var i=s.inputs.index(t(this));s._handleEvent(e,s.handles.eq(i),t(this).val())}),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(t){return s.$element.data("dragging")?!1:(s.animComplete=!1,void(s.options.doubleSided?s._handleEvent(t):s._handleEvent(t,s.$handle)))}),this.options.draggable){this.handles.addTouch();var o=t("body");i.off("mousedown.zf.slider").on("mousedown.zf.slider",function(e){i.addClass("is-dragging"),s.$fill.addClass("is-dragging"),s.$element.data("dragging",!0),s.animComplete=!1,n=t(e.currentTarget),o.on("mousemove.zf.slider",function(t){t.preventDefault(),s._handleEvent(t,n)}).on("mouseup.zf.slider",function(t){s.animComplete=!0,s._handleEvent(t,n),i.removeClass("is-dragging"),s.$fill.removeClass("is-dragging"),s.$element.data("dragging",!1),o.off("mousemove.zf.slider mouseup.zf.slider")})})}i.off("keydown.zf.slider").on("keydown.zf.slider",function(i){var n,o=s.options.doubleSided?s.handles.index(t(this)):0,a=parseFloat(s.inputs.eq(o).val()),r=t(this);e.Keyboard.handleKey(i,s,{decrease:function(){n=a-s.options.step},increase:function(){n=a+s.options.step},decrease_fast:function(){n=a-10*s.options.step},increase_fast:function(){n=a+10*s.options.step},handled:function(){i.preventDefault(),s._setHandlePos(r,n,!0)}})})},i.prototype.destroy=function(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),e.unregisterPlugin(this)},e.plugin(i,"Slider")}(jQuery,window.Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),e.registerPlugin(this)}function n(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}i.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},i.prototype._init=function(){var i=this.$element.parent("[data-sticky-container]"),n=this.$element[0].id||e.GetYoDigits(6,"sticky"),s=this;i.length||(this.wasWrapped=!0),this.$container=i.length?i:t(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":n}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,""!==this.options.topAnchor?this._parsePoints():this.$anchor=t(this.options.anchor?"#"+this.options.anchor:document.body),this._setSizes(function(){s._calc(!1)}),this._events(n.split("-").reverse().join("-"))},i.prototype._parsePoints=function(){for(var e=this.options.topAnchor,i=this.options.btmAnchor,n=[e,i],s={},o=0,a=n.length;a>o&&n[o];o++){var r;if("number"==typeof n[o])r=n[o];else{var l=n[o].split(":"),d=t("#"+l[0]);r=d.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(r+=d[0].getBoundingClientRect().height)}s[o]=r}this.points=s},i.prototype._events=function(e){var i=this,n="scroll.zf."+e;this.isOn||(this.canStick&&(this.isOn=!0,t(window).off(n).on(n,function(t){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,s){i._setSizes(function(){i._calc(!1),i.canStick?i.isOn||i._events(e):i.isOn&&i._pauseListeners(n)})}))},i.prototype._pauseListeners=function(e){this.isOn=!1,t(window).off(e),this.$element.trigger("pause.zf.sticky")},i.prototype._calc=function(t,e){return t&&this._setSizes(),this.canStick?(e||(e=window.pageYOffset),void(e>=this.topPoint?e<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0))):(this.isStuck&&this._removeSticky(!0),!1)},i.prototype._setSticky=function(){var t=this.options.stickTo,e="top"===t?"marginTop":"marginBottom",i="top"===t?"bottom":"top",n={};n[e]=this.options[e]+"em",n[t]=0,n[i]="auto",n.left=this.$container.offset().left+parseInt(window.getComputedStyle(this.$container[0])["padding-left"],10),this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+i).addClass("is-stuck is-at-"+t).css(n).trigger("sticky.zf.stuckto:"+t)},i.prototype._removeSticky=function(t){var e,i,n=this.options.stickTo,s="top"===n,o={},a=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight;e=s?"marginTop":"marginBottom",i=s?"bottom":"top",o[e]=0,t&&!s||s&&!t?(o[n]=a,o[i]=0):(o[n]=0,o[i]=a),o.left="",this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+n).addClass("is-anchored is-at-"+(t?"top":"bottom")).css(o).trigger("top")},i.prototype._setSizes=function(t){this.canStick=e.MediaQuery.atLeast(this.options.stickyOn),this.canStick||t();var i=this.$container[0].getBoundingClientRect().width,n=window.getComputedStyle(this.$container[0]),s=parseInt(n["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":i-s+"px"});var o=this.$element[0].getBoundingClientRect().height||this.containerHeight;this.containerHeight=o,this.$container.css({height:o}),this.elemHeight=o,this.isStuck&&this.$element.css({left:this.$container.offset().left+parseInt(n["padding-left"],10)}),this._setBreakPoints(o,function(){t&&t()})},i.prototype._setBreakPoints=function(t,e){if(!this.canStick){if(!e)return!1;e()}var i=n(this.options.marginTop),s=n(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,a=this.points?this.points[1]:o+this.anchorHeight,r=window.innerHeight;"top"===this.options.stickTo?(o-=i,a-=t+i):"bottom"===this.options.stickTo&&(o-=r-(t+s),a-=r-s),this.topPoint=o,this.bottomPoint=a,e&&e()},i.prototype.destroy=function(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor.off("change.zf.sticky"),t(window).off("scroll.zf.sticky"),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),e.unregisterPlugin(this)},e.plugin(i,"Sticky")}(jQuery,window.Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=t.extend({},i.defaults,this.$element.data(),s),this._init(),e.registerPlugin(this),e.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}i.defaults={autoFocus:!1,wrapOnKeys:!0,matchHeight:!1,linkClass:"tabs-title",panelClass:"tabs-panel"},i.prototype._init=function(){var i=this;if(this.$tabTitles=this.$element.find("."+this.options.linkClass),this.$tabContent=t('[data-tabs-content="'+this.$element[0].id+'"]'),this.$tabTitles.each(function(){var e=t(this),n=e.find("a"),s=e.hasClass("is-active"),o=n.attr("href").slice(1),a=o+"-label",r=t(o);e.attr({role:"presentation"}),n.attr({role:"tab","aria-controls":o,"aria-selected":s,id:a}),r.attr({role:"tabpanel","aria-hidden":!s,"aria-labelledby":a}),s&&i.options.autoFocus&&n.focus()}),this.options.matchHeight){var n=this.$tabContent.find("img");n.length?e.onImagesLoaded(n,this._setHeight.bind(this)):this._setHeight()}this._events()},i.prototype._events=function(){this._addKeyHandler(),this._addClickHandler(),this.options.matchHeight&&t(window).on("changed.zf.mediaquery",this._setHeight.bind(this))},i.prototype._addClickHandler=function(){var e=this;this.$tabTitles.off("click.zf.tabs").on("click.zf.tabs",function(i){i.preventDefault(),i.stopPropagation(),t(this).hasClass("is-active")||e._handleTabChange(t(this))})},i.prototype._addKeyHandler=function(){var i=this;i.$element.find("li:first-of-type"),i.$element.find("li:last-of-type");this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(n){n.stopPropagation(),n.preventDefault();var s,o,a=t(this),r=a.parent("ul").children("li");r.each(function(e){return t(this).is(a)?void(i.options.wrapOnKeys?(s=0===e?r.last():r.eq(e-1),o=e===r.length-1?r.first():r.eq(e+1)):(s=r.eq(Math.max(0,e-1)),o=r.eq(Math.min(e+1,r.length-1)))):void 0}),e.Keyboard.handleKey(n,i,{open:function(){a.find('[role="tab"]').focus(),i._handleTabChange(a)},previous:function(){s.find('[role="tab"]').focus(),i._handleTabChange(s)},next:function(){o.find('[role="tab"]').focus(),i._handleTabChange(o)}})})},i.prototype._handleTabChange=function(e){var i=e.find('[role="tab"]'),n=i.attr("href"),s=t(n),o=this.$element.find("."+this.options.linkClass+".is-active").removeClass("is-active").find('[role="tab"]').attr({"aria-selected":"false"}).attr("href");t(o).removeClass("is-active").attr({"aria-hidden":"true"}),e.addClass("is-active"),i.attr({"aria-selected":"true"}),s.addClass("is-active").attr({"aria-hidden":"false"}),this.$element.trigger("change.zf.tabs",[e])},i.prototype.selectTab=function(t){var e;e="object"==typeof t?t[0].id:t,e.indexOf("#")<0&&(e="#"+e);var i=this.$tabTitles.find('[href="'+e+'"]').parent("."+this.options.linkClass);this._handleTabChange(i)},i.prototype._setHeight=function(){var e=0;this.$tabContent.find("."+this.options.panelClass).css("height","").each(function(){var i=t(this),n=i.hasClass("is-active");n||i.css({visibility:"hidden",display:"block"});var s=this.getBoundingClientRect().height;n||i.css({visibility:"",display:""}),e=s>e?s:e}).css("height",e+"px")},i.prototype.destroy=function(){this.$element.find("."+this.options.linkClass).off(".zf.tabs").hide().end().find("."+this.options.panelClass).hide(),this.options.matchHeight&&t(window).off("changed.zf.mediaquery"),e.unregisterPlugin(this)},e.plugin(i,"Tabs")}(jQuery,window.Foundation),!function(t,e){"use strict";function i(n,s){this.$element=n,this.options=e.extend({},i.defaults,n.data(),s),this.className="",this._init(),this._events(),t.registerPlugin(this)}i.defaults={animate:!1},i.prototype._init=function(){var t;this.options.animate?(t=this.options.animate.split(" "),this.animationIn=t[0],this.animationOut=t[1]||null):(t=this.$element.data("toggler"),"."===t[0]?this.className=t.slice(1):this.className=t);var i=this.$element[0].id;e('[data-open="'+i+'"], [data-close="'+i+'"], [data-toggle="'+i+'"]').attr("aria-controls",i),this.$element.is(":hidden")&&this.$element.attr("aria-expanded","false")},i.prototype._events=function(){var t=this;this.$element.on("toggle.zf.trigger",function(){return t.toggle(),!1})},i.prototype.toggle=function(){this.options.animate?this._toggleAnimate():this._toggleClass()},i.prototype._toggleClass=function(){var t=this;this.$element.toggleClass(this.className),this.$element.hasClass(this.className)?this.$element.trigger("on.zf.toggler"):this.$element.trigger("off.zf.toggler"),t._updateARIA()},i.prototype._toggleAnimate=function(){var e=this;this.$element.is(":hidden")?t.Motion.animateIn(this.$element,this.animationIn,function(){this.trigger("on.zf.toggler"),e._updateARIA()}):t.Motion.animateOut(this.$element,this.animationOut,function(){this.trigger("off.zf.toggler"),e._updateARIA()})},i.prototype._updateARIA=function(){this.$element.is(":hidden")?this.$element.attr("aria-expanded","false"):this.$element.attr("aria-expanded","true")},i.prototype.destroy=function(){this.$element.off(".zf.toggler"),t.unregisterPlugin(this)},t.plugin(i,"Toggler"),"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=i),"function"==typeof define&&define(["foundation"],function(){return i})}(Foundation,jQuery),!function(t,e,i){"use strict";function n(e,s){this.$element=e,this.options=t.extend({},n.defaults,this.$element.data(),s),this.isActive=!1,this.isClick=!1,this._init(),i.registerPlugin(this)}n.defaults={disableForTouch:!1,hoverDelay:200,fadeInDuration:150,fadeOutDuration:150,disableHover:!1,templateClasses:"",tooltipClass:"tooltip",triggerClass:"has-tip",showOn:"small",template:"",tipText:"",touchCloseText:"Tap to close.",clickOpen:!0,positionClass:"",vOffset:10,hOffset:12},n.prototype._init=function(){var n=this.$element.attr("aria-describedby")||i.GetYoDigits(6,"tooltip");this.options.positionClass=this._getPositionClass(this.$element),this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?t(this.options.template):this._buildTemplate(n),this.template.appendTo(e.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":n,"data-yeti-box":n,"data-toggle":n,"data-resize":n}).addClass(this.triggerClass),this.usedPositions=[],this.counter=4,this.classChanged=!1,this._events()},n.prototype._getPositionClass=function(t){if(!t)return"";var e=t[0].className.match(/(top|left|right)/g);return e=e?e[0]:""},n.prototype._buildTemplate=function(e){var i=(this.options.tooltipClass+" "+this.options.positionClass).trim(),n=t("<div></div>").addClass(i).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:e});return n},n.prototype._reposition=function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.template.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.template.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.template.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):this.template.removeClass(t),this.classChanged=!0,this.counter--},n.prototype._setPosition=function(){var t=this._getPositionClass(this.template),e=i.Box.GetDimensions(this.template),n=i.Box.GetDimensions(this.$element),s="left"===t?"left":"right"===t?"left":"top",o="top"===s?"height":"width";"height"===o?this.options.vOffset:this.options.hOffset;if(e.width>=e.windowDims.width||!this.counter&&!i.Box.ImNotTouchingYou(this.template))return this.template.offset(i.Box.GetOffsets(this.template,this.$element,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:n.windowDims.width-2*this.options.hOffset,height:"auto"}),!1;for(this.template.offset(i.Box.GetOffsets(this.template,this.$element,"center "+(t||"bottom"),this.options.vOffset,this.options.hOffset));!i.Box.ImNotTouchingYou(this.template)&&this.counter;)this._reposition(t),this._setPosition()},n.prototype.show=function(){if("all"!==this.options.showOn&&!i.MediaQuery.atLeast(this.options.showOn))return!1;var t=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),t.isActive=!0,this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){}),this.$element.trigger("show.zf.tooltip")},n.prototype.hide=function(){var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1,t.classChanged&&(t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass),t.usedPositions=[],t.counter=4,t.classChanged=!1)}),this.$element.trigger("hide.zf.tooltip")},n.prototype._events=function(){var t=this,e=(this.template,!1);this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(e){t.isActive||(t.timeout=setTimeout(function(){t.show()},t.options.hoverDelay))}).on("mouseleave.zf.tooltip",function(i){clearTimeout(t.timeout),(!e||!t.isClick&&t.options.clickOpen)&&t.hide()}),this.options.clickOpen&&this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick?t.hide():(t.isClick=!0,!t.options.disableHover&&t.$element.attr("tabindex")||t.isActive||t.show())}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(e){t.isActive?t.hide():t.show()}),this.$element.on({"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(i){return e=!0,console.log(t.isClick),t.isClick?!1:void t.show()}).on("focusout.zf.tooltip",function(i){e=!1,t.isClick=!1,t.hide()}).on("resizeme.zf.trigger",function(){t.isActive&&t._setPosition()})},n.prototype.toggle=function(){this.isActive?this.hide():this.show()},n.prototype.destroy=function(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"),this.template.remove(),i.unregisterPlugin(this)},i.plugin(n,"Tooltip")}(jQuery,window.document,window.Foundation);

// Spectrum Colorpicker v1.7.1
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

(function (factory) {
    "use strict";

    if (typeof define === 'function' && define.amd) { // AMD
        define(['jquery'], factory);
    }
    else if (typeof exports == "object" && typeof module == "object") { // CommonJS
        module.exports = factory;
    }
    else { // Browser
        factory(jQuery);
    }
})(function($, undefined) {
    "use strict";

    var defaultOpts = {

        // Callbacks
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false,
        showInput: false,
        allowEmpty: false,
        showButtons: true,
        clickoutFiresChange: true,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        hideAfterPaletteSelect: false,
        togglePaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        togglePaletteMoreText: "more",
        togglePaletteLessText: "less",
        clearText: "Clear Color Selection",
        noColorSelectedText: "No Color Selected",
        preferredFormat: false,
        className: "", // Deprecated - use containerClassName and replacerClassName instead.
        containerClassName: "",
        replacerClassName: "",
        showAlpha: false,
        theme: "sp-light",
        palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
        selectionPalette: [],
        disabled: false,
        offset: null
    },
    spectrums = [],
    IE = !!/msie/i.exec( window.navigator.userAgent ),
    rgbaSupport = (function() {
        function contains( str, substr ) {
            return !!~('' + str).indexOf(substr);
        }

        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    })(),
    replaceInput = [
        "<div class='sp-replacer'>",
            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
            "<div class='sp-dd'>&#9660;</div>",
        "</div>"
    ].join(''),
    markup = (function () {

        // IE does not support gradients with multiple stops, so we need to simulate
        //  that for the rainbow slider with 8 divs that each have a single gradient
        var gradientFix = "";
        if (IE) {
            for (var i = 1; i <= 6; i++) {
                gradientFix += "<div class='sp-" + i + "'></div>";
            }
        }

        return [
            "<div class='sp-container sp-hidden'>",
                "<div class='sp-palette-container'>",
                    "<div class='sp-palette sp-thumb sp-cf'></div>",
                    "<div class='sp-palette-button-container sp-cf'>",
                        "<button type='button' class='sp-palette-toggle'></button>",
                    "</div>",
                "</div>",
                "<div class='sp-picker-container'>",
                    "<div class='sp-top sp-cf'>",
                        "<div class='sp-fill'></div>",
                        "<div class='sp-top-inner'>",
                            "<div class='sp-color'>",
                                "<div class='sp-sat'>",
                                    "<div class='sp-val'>",
                                        "<div class='sp-dragger'></div>",
                                    "</div>",
                                "</div>",
                            "</div>",
                            "<div class='sp-clear sp-clear-display'>",
                            "</div>",
                            "<div class='sp-hue'>",
                                "<div class='sp-slider'></div>",
                                gradientFix,
                            "</div>",
                        "</div>",
                        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                    "</div>",
                    "<div class='sp-input-container sp-cf'>",
                        "<input class='sp-input' type='text' spellcheck='false'  />",
                    "</div>",
                    "<div class='sp-initial sp-thumb sp-cf'></div>",
                    "<div class='sp-button-container sp-cf'>",
                        "<a class='sp-cancel' href='#'></a>",
                        "<button type='button' class='sp-choose'></button>",
                    "</div>",
                "</div>",
            "</div>"
        ].join("");
    })();

    function paletteTemplate (p, color, className, opts) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var current = p[i];
            if(current) {
                var tiny = tinycolor(current);
                var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                c += (tinycolor.equals(color, current)) ? " sp-thumb-active" : "";
                var formattedString = tiny.toString(opts.preferredFormat || "rgb");
                var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
                html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
            } else {
                var cls = 'sp-clear-display';
                html.push($('<div />')
                    .append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>')
                        .attr('title', opts.noColorSelectedText)
                    )
                    .html()
                );
            }
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        var opts = $.extend({}, defaultOpts, o);
        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            flat = opts.flat,
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            isDragging = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = [],
            paletteArray = [],
            paletteLookup = {},
            selectionPalette = opts.selectionPalette.slice(0),
            maxSelectionSize = opts.maxSelectionSize,
            draggingClass = "sp-dragging",
            shiftMovementDirection = null;

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            pickerContainer = container.find(".sp-picker-container"),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            clearButton = container.find(".sp-clear"),
            chooseButton = container.find(".sp-choose"),
            toggleButton = container.find(".sp-palette-toggle"),
            isInput = boundElement.is("input"),
            isInputTypeColor = isInput && boundElement.attr("type") === "color" && inputTypeColorSupport(),
            shouldReplace = isInput && !flat,
            replacer = (shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
            offsetElement = (shouldReplace) ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || (isInput && boundElement.val()),
            colorOnShow = false,
            preferredFormat = opts.preferredFormat,
            currentPreferredFormat = preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
            isEmpty = !initialColor,
            allowEmpty = opts.allowEmpty && !isInputTypeColor;

        function applyOptions() {

            if (opts.showPaletteOnly) {
                opts.showPalette = true;
            }

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);

            if (opts.palette) {
                palette = opts.palette.slice(0);
                paletteArray = $.isArray(palette[0]) ? palette : [palette];
                paletteLookup = {};
                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        var rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }
            }

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-clear-enabled", allowEmpty);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons);
            container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className).addClass(opts.containerClassName);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            if (shouldReplace) {
                boundElement.after(replacer).hide();
            }

            if (!allowEmpty) {
                clearButton.hide();
            }

            if (flat) {
                boundElement.after(container).hide();
            }
            else {

                var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
                if (appendTo.length !== 1) {
                    appendTo = $("body");
                }

                appendTo.append(container);
            }

            updateSelectionPaletteFromStorage();

            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if(boundElement.is(":disabled") || (opts.disabled === true)) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            textInput.change(setFromTextInput);
            textInput.bind("paste", function () {
                setTimeout(setFromTextInput, 1);
            });
            textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

            cancelButton.text(opts.cancelText);
            cancelButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                revert();
                hide();
            });

            clearButton.attr("title", opts.clearText);
            clearButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                isEmpty = true;
                move();

                if(flat) {
                    //for the flat style, this is a change event
                    updateOriginalInput(true);
                }
            });

            chooseButton.text(opts.chooseText);
            chooseButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (IE && textInput.is(":focus")) {
                    textInput.trigger('change');
                }

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
            toggleButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                opts.showPaletteOnly = !opts.showPaletteOnly;

                // To make sure the Picker area is drawn on the right, next to the
                // Palette area (and not below the palette), first move the Palette
                // to the left to make space for the picker, plus 5px extra.
                // The 'applyOptions' function puts the whole container back into place
                // and takes care of the button-text and the sp-palette-only CSS class.
                if (!opts.showPaletteOnly && !flat) {
                    container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
                }
                applyOptions();
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = (dragX / alphaWidth);
                isEmpty = false;
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            }, dragStart, dragStop);

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY, e) {

                // shift+drag should snap the movement to either the x or y axis.
                if (!e.shiftKey) {
                    shiftMovementDirection = null;
                }
                else if (!shiftMovementDirection) {
                    var oldDragX = currentSaturation * dragWidth;
                    var oldDragY = dragHeight - (currentValue * dragHeight);
                    var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

                    shiftMovementDirection = furtherFromX ? "x" : "y";
                }

                var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
                var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

                if (setSaturation) {
                    currentSaturation = parseFloat(dragX / dragWidth);
                }
                if (setValue) {
                    currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                }

                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }

                move();

            }, dragStart, dragStop);

            if (!!initialColor) {
                set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = preferredFormat || tinycolor(initialColor).format;

                addColorToSelectionPalette(initialColor);
            }
            else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function paletteElementClick(e) {
                if (e.data && e.data.ignore) {
                    set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();
                }
                else {
                    set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();
                    updateOriginalInput(true);
                    if (opts.hideAfterPaletteSelect) {
                      hide();
                    }
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.delegate(".sp-thumb-el", paletteEvent, paletteElementClick);
            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, paletteElementClick);
        }

        function updateSelectionPaletteFromStorage() {

            if (localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[localStorageKey];
                        $.each(oldPalette, function(i, c) {
                             addColorToSelectionPalette(c);
                        });
                    }
                }
                catch(e) { }

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                }
                catch (e) { }
            }
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var rgb = tinycolor(color).toRgbString();
                if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
                    selectionPalette.push(rgb);
                    while(selectionPalette.length > maxSelectionSize) {
                        selectionPalette.shift();
                    }
                }

                if (localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    }
                    catch(e) { }
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            if (opts.showPalette) {
                for (var i = 0; i < selectionPalette.length; i++) {
                    var rgb = tinycolor(selectionPalette[i]).toRgbString();

                    if (!paletteLookup[rgb]) {
                        unique.push(selectionPalette[i]);
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
            });

            updateSelectionPaletteFromStorage();

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
            }
        }

        function dragStart() {
            if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
                reflow();
            }
            isDragging = true;
            container.addClass(draggingClass);
            shiftMovementDirection = null;
            boundElement.trigger('dragstart.spectrum', [ get() ]);
        }

        function dragStop() {
            isDragging = false;
            container.removeClass(draggingClass);
            boundElement.trigger('dragstop.spectrum', [ get() ]);
        }

        function setFromTextInput() {

            var value = textInput.val();

            if ((value === null || value === "") && allowEmpty) {
                set(null);
                updateOriginalInput(true);
            }
            else {
                var tiny = tinycolor(value);
                if (tiny.isValid()) {
                    set(tiny);
                    updateOriginalInput(true);
                }
                else {
                    textInput.addClass("sp-validation-error");
                }
            }
        }

        function toggle() {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }

        function show() {
            var event = $.Event('beforeShow.spectrum');

            if (visible) {
                reflow();
                return;
            }

            boundElement.trigger(event, [ get() ]);

            if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
                return;
            }

            hideAll();
            visible = true;

            $(doc).bind("keydown.spectrum", onkeydown);
            $(doc).bind("click.spectrum", clickout);
            $(window).bind("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.removeClass("sp-hidden");

            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
            boundElement.trigger('show.spectrum', [ colorOnShow ]);
        }

        function onkeydown(e) {
            // Close on ESC
            if (e.keyCode === 27) {
                hide();
            }
        }

        function clickout(e) {
            // Return on right click.
            if (e.button == 2) { return; }

            // If a drag event was happening during the mouseup, don't hide
            // on click.
            if (isDragging) { return; }

            if (clickoutFiresChange) {
                updateOriginalInput(true);
            }
            else {
                revert();
            }
            hide();
        }

        function hide() {
            // Return if hiding is unnecessary
            if (!visible || flat) { return; }
            visible = false;

            $(doc).unbind("keydown.spectrum", onkeydown);
            $(doc).unbind("click.spectrum", clickout);
            $(window).unbind("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.addClass("sp-hidden");

            callbacks.hide(get());
            boundElement.trigger('hide.spectrum', [ get() ]);
        }

        function revert() {
            set(colorOnShow, true);
        }

        function set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                // Update UI just in case a validation error needs
                // to be cleared.
                updateUI();
                return;
            }

            var newColor, newHsv;
            if (!color && allowEmpty) {
                isEmpty = true;
            } else {
                isEmpty = false;
                newColor = tinycolor(color);
                newHsv = newColor.toHsv();

                currentHue = (newHsv.h % 360) / 360;
                currentSaturation = newHsv.s;
                currentValue = newHsv.v;
                currentAlpha = newHsv.a;
            }
            updateUI();

            if (newColor && newColor.isValid() && !ignoreFormatChange) {
                currentPreferredFormat = preferredFormat || newColor.getFormat();
            }
        }

        function get(opts) {
            opts = opts || { };

            if (allowEmpty && isEmpty) {
                return null;
            }

            return tinycolor.fromRatio({
                h: currentHue,
                s: currentSaturation,
                v: currentValue,
                a: Math.round(currentAlpha * 100) / 100
            }, { format: opts.format || currentPreferredFormat });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
            boundElement.trigger('move.spectrum', [ get() ]);
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
            dragger.css("background-color", flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
                if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get({ format: format }),
                displayColor = '';

             //reset background info for preview element
            previewElement.removeClass("sp-clear-display");
            previewElement.css('background-color', 'transparent');

            if (!realColor && allowEmpty) {
                // Update the replaced elements background with icon indicating no color selection
                previewElement.addClass("sp-clear-display");
            }
            else {
                var realHex = realColor.toHexString(),
                    realRgb = realColor.toRgbString();

                // Update the replaced elements background color (with actual selected color)
                if (rgbaSupport || realColor.alpha === 1) {
                    previewElement.css("background-color", realRgb);
                }
                else {
                    previewElement.css("background-color", "transparent");
                    previewElement.css("filter", realColor.toFilter());
                }

                if (opts.showAlpha) {
                    var rgb = realColor.toRgb();
                    rgb.a = 0;
                    var realAlpha = tinycolor(rgb).toRgbString();
                    var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                    if (IE) {
                        alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                    }
                    else {
                        alphaSliderInner.css("background", "-webkit-" + gradient);
                        alphaSliderInner.css("background", "-moz-" + gradient);
                        alphaSliderInner.css("background", "-ms-" + gradient);
                        // Use current syntax gradient on unprefixed property.
                        alphaSliderInner.css("background",
                            "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
                    }
                }

                displayColor = realColor.toString(format);
            }

            // Update the text entry input as it changes happen
            if (opts.showInput) {
                textInput.val(displayColor);
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            if(allowEmpty && isEmpty) {
                //if selected color is empty, hide the helpers
                alphaSlideHelper.hide();
                slideHelper.hide();
                dragHelper.hide();
            }
            else {
                //make sure helpers are visible
                alphaSlideHelper.show();
                slideHelper.show();
                dragHelper.show();

                // Where to show the little circle in that displays your current selected color
                var dragX = s * dragWidth;
                var dragY = dragHeight - (v * dragHeight);
                dragX = Math.max(
                    -dragHelperHeight,
                    Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
                );
                dragY = Math.max(
                    -dragHelperHeight,
                    Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
                );
                dragHelper.css({
                    "top": dragY + "px",
                    "left": dragX + "px"
                });

                var alphaX = currentAlpha * alphaWidth;
                alphaSlideHelper.css({
                    "left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
                });

                // Where to show the bar that displays your current selected hue
                var slideY = (currentHue) * slideHeight;
                slideHelper.css({
                    "top": (slideY - slideHelperHeight) + "px"
                });
            }
        }

        function updateOriginalInput(fireCallback) {
            var color = get(),
                displayColor = '',
                hasChanged = !tinycolor.equals(color, colorOnShow);

            if (color) {
                displayColor = color.toString(currentPreferredFormat);
                // Update the selection palette with the current color
                addColorToSelectionPalette(color);
            }

            if (isInput) {
                boundElement.val(displayColor);
            }

            if (fireCallback && hasChanged) {
                callbacks.change(color);
                boundElement.trigger('change', [ color ]);
            }
        }

        function reflow() {
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.css("position", "absolute");
                if (opts.offset) {
                    container.offset(opts.offset);
                } else {
                    container.offset(getOffset(container, offsetElement));
                }
            }

            updateHelperLocations();

            if (opts.showPalette) {
                drawPalette();
            }

            boundElement.trigger('reflow.spectrum');
        }

        function destroy() {
            boundElement.show();
            offsetElement.unbind("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        function setOffset(coord) {
            opts.offset = coord;
            reflow();
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            offset: setOffset,
            set: function (c) {
                set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        offset.top += inputHeight;

        offset.left -=
            Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offset.left + dpWidth - viewWidth) : 0);

        offset.top -=
            Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return offset;
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents["touchmove mousemove"] = move;
        duringDragEvents["touchend mouseup"] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && doc.documentMode < 9 && !e.button) {
                    return stop();
                }

                var t0 = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0];
                var pageX = t0 && t0.pageX || e.pageX;
                var pageY = t0 && t0.pageY || e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }

        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    move(e);

                    prevent(e);
                }
            }
        }

        function stop() {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");

                // Wait a tick before notifying observers to allow the click event
                // to fire in Chrome.
                setTimeout(function() {
                    onstop.apply(element, arguments);
                }, 0);
            }
            dragging = false;
        }

        $(element).bind("touchstart mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }

    function inputTypeColorSupport() {
        return $.fn.spectrum.inputTypeColorSupport();
    }

    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {
                    var method = spect[opts];
                    if (!method) {
                        throw new Error( "Spectrum: no such method: '" + opts + "'" );
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    }
                    else if (opts == "container") {
                        returnValue = spect.container;
                    }
                    else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    }
                    else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    }
                    else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var options = $.extend({}, opts, $(this).data());
            var spect = spectrum(this, options);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;
    $.fn.spectrum.inputTypeColorSupport = function inputTypeColorSupport() {
        if (typeof inputTypeColorSupport._cachedResult === "undefined") {
            var colorInput = $("<input type='color'/>")[0]; // if color element is supported, value will default to not null
            inputTypeColorSupport._cachedResult = colorInput.type === "color" && colorInput.value !== "";
        }
        return inputTypeColorSupport._cachedResult;
    };

    $.spectrum = { };
    $.spectrum.localization = { };
    $.spectrum.palettes = { };

    $.fn.spectrum.processNativeColorInputs = function () {
        var colorInputs = $("input[type=color]");
        if (colorInputs.length && !inputTypeColorSupport()) {
            colorInputs.spectrum({
                preferredFormat: "hex6"
            });
        }
    };

    // TinyColor v1.1.2
    // https://github.com/bgrins/TinyColor
    // Brian Grinstead, MIT License

    (function() {

    var trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random;

    var tinycolor = function(color, opts) {

        color = (color) ? color : '';
        opts = opts || { };

        // If input is already a tinycolor, return itself
        if (color instanceof tinycolor) {
           return color;
        }
        // If we are called as a function, call using new instead
        if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
        }

        var rgb = inputToRGB(color);
        this._originalInput = color,
        this._r = rgb.r,
        this._g = rgb.g,
        this._b = rgb.b,
        this._a = rgb.a,
        this._roundA = mathRound(100*this._a) / 100,
        this._format = opts.format || rgb.format;
        this._gradientType = opts.gradientType;

        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this._r < 1) { this._r = mathRound(this._r); }
        if (this._g < 1) { this._g = mathRound(this._g); }
        if (this._b < 1) { this._b = mathRound(this._b); }

        this._ok = rgb.ok;
        this._tc_id = tinyCounter++;
    };

    tinycolor.prototype = {
        isDark: function() {
            return this.getBrightness() < 128;
        },
        isLight: function() {
            return !this.isDark();
        },
        isValid: function() {
            return this._ok;
        },
        getOriginalInput: function() {
          return this._originalInput;
        },
        getFormat: function() {
            return this._format;
        },
        getAlpha: function() {
            return this._a;
        },
        getBrightness: function() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },
        setAlpha: function(value) {
            this._a = boundAlpha(value);
            this._roundA = mathRound(100*this._a) / 100;
            return this;
        },
        toHsv: function() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
        },
        toHsvString: function() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
            return (this._a == 1) ?
              "hsv("  + h + ", " + s + "%, " + v + "%)" :
              "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
        },
        toHsl: function() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
        },
        toHslString: function() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
            return (this._a == 1) ?
              "hsl("  + h + ", " + s + "%, " + l + "%)" :
              "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
        },
        toHex: function(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function(allow3Char) {
            return '#' + this.toHex(allow3Char);
        },
        toHex8: function() {
            return rgbaToHex(this._r, this._g, this._b, this._a);
        },
        toHex8String: function() {
            return '#' + this.toHex8();
        },
        toRgb: function() {
            return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
        },
        toRgbString: function() {
            return (this._a == 1) ?
              "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
              "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
            return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
        },
        toPercentageRgbString: function() {
            return (this._a == 1) ?
              "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
              "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
            if (this._a === 0) {
                return "transparent";
            }

            if (this._a < 1) {
                return false;
            }

            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(secondColor) {
            var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";

            if (secondColor) {
                var s = tinycolor(secondColor);
                secondHex8String = s.toHex8String();
            }

            return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
        },
        toString: function(format) {
            var formatSet = !!format;
            format = format || this._format;

            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

            if (needsAlphaFormat) {
                // Special case for "transparent", all other non-alpha formats
                // will return rgba when there is transparency.
                if (format === "name" && this._a === 0) {
                    return this.toName();
                }
                return this.toRgbString();
            }
            if (format === "rgb") {
                formattedString = this.toRgbString();
            }
            if (format === "prgb") {
                formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
                formattedString = this.toHexString();
            }
            if (format === "hex3") {
                formattedString = this.toHexString(true);
            }
            if (format === "hex8") {
                formattedString = this.toHex8String();
            }
            if (format === "name") {
                formattedString = this.toName();
            }
            if (format === "hsl") {
                formattedString = this.toHslString();
            }
            if (format === "hsv") {
                formattedString = this.toHsvString();
            }

            return formattedString || this.toHexString();
        },

        _applyModification: function(fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
        },
        lighten: function() {
            return this._applyModification(lighten, arguments);
        },
        brighten: function() {
            return this._applyModification(brighten, arguments);
        },
        darken: function() {
            return this._applyModification(darken, arguments);
        },
        desaturate: function() {
            return this._applyModification(desaturate, arguments);
        },
        saturate: function() {
            return this._applyModification(saturate, arguments);
        },
        greyscale: function() {
            return this._applyModification(greyscale, arguments);
        },
        spin: function() {
            return this._applyModification(spin, arguments);
        },

        _applyCombination: function(fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
        },
        analogous: function() {
            return this._applyCombination(analogous, arguments);
        },
        complement: function() {
            return this._applyCombination(complement, arguments);
        },
        monochromatic: function() {
            return this._applyCombination(monochromatic, arguments);
        },
        splitcomplement: function() {
            return this._applyCombination(splitcomplement, arguments);
        },
        triad: function() {
            return this._applyCombination(triad, arguments);
        },
        tetrad: function() {
            return this._applyCombination(tetrad, arguments);
        }
    };

    // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1
    tinycolor.fromRatio = function(color, opts) {
        if (typeof color == "object") {
            var newColor = {};
            for (var i in color) {
                if (color.hasOwnProperty(i)) {
                    if (i === "a") {
                        newColor[i] = color[i];
                    }
                    else {
                        newColor[i] = convertToPercentage(color[i]);
                    }
                }
            }
            color = newColor;
        }

        return tinycolor(color, opts);
    };

    // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //
    function inputToRGB(color) {

        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var ok = false;
        var format = false;

        if (typeof color == "string") {
            color = stringInputToObject(color);
        }

        if (typeof color == "object") {
            if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                rgb = rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                color.s = convertToPercentage(color.s);
                color.v = convertToPercentage(color.v);
                rgb = hsvToRgb(color.h, color.s, color.v);
                ok = true;
                format = "hsv";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                color.s = convertToPercentage(color.s);
                color.l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, color.s, color.l);
                ok = true;
                format = "hsl";
            }

            if (color.hasOwnProperty("a")) {
                a = color.a;
            }
        }

        a = boundAlpha(a);

        return {
            ok: ok,
            format: color.format || format,
            r: mathMin(255, mathMax(rgb.r, 0)),
            g: mathMin(255, mathMax(rgb.g, 0)),
            b: mathMin(255, mathMax(rgb.b, 0)),
            a: a
        };
    }


    // Conversion Functions
    // --------------------

    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

    // `rgbToRgb`
    // Handle bounds / percentage checking to conform to CSS color spec
    // <http://www.w3.org/TR/css3-color/>
    // *Assumes:* r, g, b in [0, 255] or [0, 1]
    // *Returns:* { r, g, b } in [0, 255]
    function rgbToRgb(r, g, b){
        return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
        };
    }

    // `rgbToHsl`
    // Converts an RGB color value to HSL.
    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
    // *Returns:* { h, s, l } in [0,1]
    function rgbToHsl(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return { h: h, s: s, l: l };
    }

    // `hslToRgb`
    // Converts an HSL color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hslToRgb(h, s, l) {
        var r, g, b;

        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);

        function hue2rgb(p, q, t) {
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        if(s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHsv`
    // Converts an RGB color value to HSV
    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
    // *Returns:* { h, s, v } in [0,1]
    function rgbToHsv(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if(max == min) {
            h = 0; // achromatic
        }
        else {
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: h, s: s, v: v };
    }

    // `hsvToRgb`
    // Converts an HSV color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
     function hsvToRgb(h, s, v) {

        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);

        var i = math.floor(h),
            f = h - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            mod = i % 6,
            r = [v, q, p, p, t, v][mod],
            g = [t, v, v, q, p, p][mod],
            b = [p, p, t, v, v, q][mod];

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHex`
    // Converts an RGB color to hex
    // Assumes r, g, and b are contained in the set [0, 255]
    // Returns a 3 or 6 character hex
    function rgbToHex(r, g, b, allow3Char) {

        var hex = [
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
        ];

        // Return a 3 character hex if possible
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }

        return hex.join("");
    }
        // `rgbaToHex`
        // Converts an RGBA color plus alpha transparency to hex
        // Assumes r, g, b and a are contained in the set [0, 255]
        // Returns an 8 character hex
        function rgbaToHex(r, g, b, a) {

            var hex = [
                pad2(convertDecimalToHex(a)),
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            return hex.join("");
        }

    // `equals`
    // Can be called with any tinycolor input
    tinycolor.equals = function (color1, color2) {
        if (!color1 || !color2) { return false; }
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
        return tinycolor.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
        });
    };


    // Modification Functions
    // ----------------------
    // Thanks to less.js for some of the basics here
    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

    function desaturate(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }

    function saturate(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }

    function greyscale(color) {
        return tinycolor(color).desaturate(100);
    }

    function lighten (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }

    function brighten(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var rgb = tinycolor(color).toRgb();
        rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
        rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
        rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
        return tinycolor(rgb);
    }

    function darken (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }

    // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
    // Values outside of this range will be wrapped into this range.
    function spin(color, amount) {
        var hsl = tinycolor(color).toHsl();
        var hue = (mathRound(hsl.h) + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor(hsl);
    }

    // Combination Functions
    // ---------------------
    // Thanks to jQuery xColor for some of the ideas behind these
    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

    function complement(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
    }

    function triad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
        ];
    }

    function tetrad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
        ];
    }

    function splitcomplement(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
            tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
        ];
    }

    function analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;

        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];

        for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
        }
        return ret;
    }

    function monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h, s = hsv.s, v = hsv.v;
        var ret = [];
        var modification = 1 / results;

        while (results--) {
            ret.push(tinycolor({ h: h, s: s, v: v}));
            v = (v + modification) % 1;
        }

        return ret;
    }

    // Utility Functions
    // ---------------------

    tinycolor.mix = function(color1, color2, amount) {
        amount = (amount === 0) ? 0 : (amount || 50);

        var rgb1 = tinycolor(color1).toRgb();
        var rgb2 = tinycolor(color2).toRgb();

        var p = amount / 100;
        var w = p * 2 - 1;
        var a = rgb2.a - rgb1.a;

        var w1;

        if (w * a == -1) {
            w1 = w;
        } else {
            w1 = (w + a) / (1 + w * a);
        }

        w1 = (w1 + 1) / 2;

        var w2 = 1 - w1;

        var rgba = {
            r: rgb2.r * w1 + rgb1.r * w2,
            g: rgb2.g * w1 + rgb1.g * w2,
            b: rgb2.b * w1 + rgb1.b * w2,
            a: rgb2.a * p  + rgb1.a * (1 - p)
        };

        return tinycolor(rgba);
    };


    // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/AERT#color-contrast>

    // `readability`
    // Analyze the 2 colors and returns an object with the following properties:
    //    `brightness`: difference in brightness between the two colors
    //    `color`: difference in color/hue between the two colors
    tinycolor.readability = function(color1, color2) {
        var c1 = tinycolor(color1);
        var c2 = tinycolor(color2);
        var rgb1 = c1.toRgb();
        var rgb2 = c2.toRgb();
        var brightnessA = c1.getBrightness();
        var brightnessB = c2.getBrightness();
        var colorDiff = (
            Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +
            Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +
            Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)
        );

        return {
            brightness: Math.abs(brightnessA - brightnessB),
            color: colorDiff
        };
    };

    // `readable`
    // http://www.w3.org/TR/AERT#color-contrast
    // Ensure that foreground and background color combinations provide sufficient contrast.
    // *Example*
    //    tinycolor.isReadable("#000", "#111") => false
    tinycolor.isReadable = function(color1, color2) {
        var readability = tinycolor.readability(color1, color2);
        return readability.brightness > 125 && readability.color > 500;
    };

    // `mostReadable`
    // Given a base color and a list of possible foreground or background
    // colors for that base, returns the most readable color.
    // *Example*
    //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
    tinycolor.mostReadable = function(baseColor, colorList) {
        var bestColor = null;
        var bestScore = 0;
        var bestIsReadable = false;
        for (var i=0; i < colorList.length; i++) {

            // We normalize both around the "acceptable" breaking point,
            // but rank brightness constrast higher than hue.

            var readability = tinycolor.readability(baseColor, colorList[i]);
            var readable = readability.brightness > 125 && readability.color > 500;
            var score = 3 * (readability.brightness / 125) + (readability.color / 500);

            if ((readable && ! bestIsReadable) ||
                (readable && bestIsReadable && score > bestScore) ||
                ((! readable) && (! bestIsReadable) && score > bestScore)) {
                bestIsReadable = readable;
                bestScore = score;
                bestColor = tinycolor(colorList[i]);
            }
        }
        return bestColor;
    };


    // Big List of Colors
    // ------------------
    // <http://www.w3.org/TR/css3-color/#svg-color>
    var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    };

    // Make it easy to access colors via `hexNames[hex]`
    var hexNames = tinycolor.hexNames = flip(names);


    // Utilities
    // ---------

    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
    function flip(o) {
        var flipped = { };
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                flipped[o[i]] = i;
            }
        }
        return flipped;
    }

    // Return a valid alpha value [0,1] with all invalid values being set to 1
    function boundAlpha(a) {
        a = parseFloat(a);

        if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
        }

        return a;
    }

    // Take input from [0, n] and return it as [0, 1]
    function bound01(n, max) {
        if (isOnePointZero(n)) { n = "100%"; }

        var processPercent = isPercentage(n);
        n = mathMin(max, mathMax(0, parseFloat(n)));

        // Automatically convert percentage into number
        if (processPercent) {
            n = parseInt(n * max, 10) / 100;
        }

        // Handle floating point rounding errors
        if ((math.abs(n - max) < 0.000001)) {
            return 1;
        }

        // Convert into [0, 1] range if it isn't already
        return (n % max) / parseFloat(max);
    }

    // Force a number between 0 and 1
    function clamp01(val) {
        return mathMin(1, mathMax(0, val));
    }

    // Parse a base-16 hex value into a base-10 integer
    function parseIntFromHex(val) {
        return parseInt(val, 16);
    }

    // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
    function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
    }

    // Check to see if string passed in is a percentage
    function isPercentage(n) {
        return typeof n === "string" && n.indexOf('%') != -1;
    }

    // Force a hex value to have 2 characters
    function pad2(c) {
        return c.length == 1 ? '0' + c : '' + c;
    }

    // Replace a decimal with it's percentage value
    function convertToPercentage(n) {
        if (n <= 1) {
            n = (n * 100) + "%";
        }

        return n;
    }

    // Converts a decimal to a hex value
    function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
    }
    // Converts a hex value to a decimal
    function convertHexToDecimal(h) {
        return (parseIntFromHex(h) / 255);
    }

    var matchers = (function() {

        // <http://www.w3.org/TR/css3-values/#integers>
        var CSS_INTEGER = "[-\\+]?\\d+%?";

        // <http://www.w3.org/TR/css3-values/#number-value>
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

        // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

        // Actual matching.
        // Parentheses and commas are optional, but not required.
        // Whitespace can take the place of commas or opening paren
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

        return {
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    })();

    // `stringInputToObject`
    // Permissive string parsing.  Take in a number of formats, and output an object
    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
    function stringInputToObject(color) {

        color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
        var named = false;
        if (names[color]) {
            color = names[color];
            named = true;
        }
        else if (color == 'transparent') {
            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }

        // Try to match string input using regular expressions.
        // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
        // Just return an object and let the conversion functions handle that.
        // This way the result will be the same whether the tinycolor is initialized with string or object.
        var match;
        if ((match = matchers.rgb.exec(color))) {
            return { r: match[1], g: match[2], b: match[3] };
        }
        if ((match = matchers.rgba.exec(color))) {
            return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        if ((match = matchers.hsl.exec(color))) {
            return { h: match[1], s: match[2], l: match[3] };
        }
        if ((match = matchers.hsla.exec(color))) {
            return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        if ((match = matchers.hsv.exec(color))) {
            return { h: match[1], s: match[2], v: match[3] };
        }
        if ((match = matchers.hsva.exec(color))) {
            return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        if ((match = matchers.hex8.exec(color))) {
            return {
                a: convertHexToDecimal(match[1]),
                r: parseIntFromHex(match[2]),
                g: parseIntFromHex(match[3]),
                b: parseIntFromHex(match[4]),
                format: named ? "name" : "hex8"
            };
        }
        if ((match = matchers.hex6.exec(color))) {
            return {
                r: parseIntFromHex(match[1]),
                g: parseIntFromHex(match[2]),
                b: parseIntFromHex(match[3]),
                format: named ? "name" : "hex"
            };
        }
        if ((match = matchers.hex3.exec(color))) {
            return {
                r: parseIntFromHex(match[1] + '' + match[1]),
                g: parseIntFromHex(match[2] + '' + match[2]),
                b: parseIntFromHex(match[3] + '' + match[3]),
                format: named ? "name" : "hex"
            };
        }

        return false;
    }

    window.tinycolor = tinycolor;
    })();

    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });

});
