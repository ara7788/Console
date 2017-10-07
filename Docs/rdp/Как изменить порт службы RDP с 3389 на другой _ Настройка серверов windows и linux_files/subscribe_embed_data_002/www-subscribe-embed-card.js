(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,e,d){a=b(a,e);d&&Reflect.setPrototypeOf(a,d.prototype);return a}}return function(a,b,d){void 0===d&&(d=a);
d=aa(d.prototype||Object.prototype);return Function.prototype.apply.call(a,d,b)||d}})();
var k=this;function l(a){return"string"==typeof a}
function ba(a){a=a.split(".");for(var b=k,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
var ca=Date.now||function(){return+new Date};var da=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function p(a,b){return a<b?-1:a>b?1:0}
;var ea=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var e=a.length,d=[],f=0,g=l(a)?a.split(""):a,h=0;h<e;h++)if(h in g){var m=g[h];
b.call(c,m,h,a)&&(d[f++]=m)}return d};
function ha(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c],d=n(e);if("array"==d||"object"==d&&"number"==typeof e.length){d=a.length||0;var f=e.length||0;a.length=d+f;for(var g=0;g<f;g++)a[d+g]=e[g]}else a.push(e)}}
;var q;a:{var ia=k.navigator;if(ia){var ka=ia.userAgent;if(ka){q=ka;break a}}q=""};var la="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ma(a,b){for(var c,e,d=1;d<arguments.length;d++){e=arguments[d];for(c in e)a[c]=e[c];for(var f=0;f<la.length;f++)c=la[f],Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])}}
;function na(a,b){var c=oa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var pa=-1!=q.indexOf("Opera"),t=-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"),qa=-1!=q.indexOf("Edge"),u=-1!=q.indexOf("Gecko")&&!(-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge"))&&!(-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"))&&-1==q.indexOf("Edge"),ra=-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge");function sa(){var a=k.document;return a?a.documentMode:void 0}
var ta;a:{var ua="",va=function(){var a=q;if(u)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(t)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ra)return/WebKit\/(\S+)/.exec(a);if(pa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
va&&(ua=va?va[1]:"");if(t){var wa=sa();if(null!=wa&&wa>parseFloat(ua)){ta=String(wa);break a}}ta=ua}var xa=ta,oa={};
function ya(a){na(a,function(){for(var b=0,c=da(String(xa)).split("."),e=da(String(a)).split("."),d=Math.max(c.length,e.length),f=0;0==b&&f<d;f++){var g=c[f]||"",h=e[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=p(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||p(0==g[2].length,0==h[2].length)||p(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var za;var Aa=k.document;za=Aa&&t?sa()||("CSS1Compat"==Aa.compatMode?parseInt(xa,10):5):void 0;var Ba;if(!(Ba=!u&&!t)){var Ca;if(Ca=t)Ca=9<=Number(za);Ba=Ca}Ba||u&&ya("1.9.1");t&&ya("9");function x(a,b){this.width=a;this.height=b}
x.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Da(){var a=document;return l("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var y=window,z=document,Ea=y.location;function Fa(){}
var Ga=/\[native code\]/;function A(a,b,c){return a[b]=a[b]||c}
function Ha(a){a=a.sort();for(var b=[],c=void 0,e=0;e<a.length;e++){var d=a[e];d!=c&&b.push(d);c=d}return b}
function B(){var a;if((a=Object.create)&&Ga.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var F=A(y,"gapi",{});var G;G=A(y,"___jsl",B());A(G,"I",0);A(G,"hel",10);function Ia(){var a=Ea.href;if(G.dpo)var b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b}
function Ja(a){var b=A(G,"PQ",[]);G.PQ=[];var c=b.length;if(0===c)a();else for(var e=0,d=function(){++e===c&&a()},f=0;f<c;f++)b[f](d)}
function Ka(a){return A(A(G,"H",B()),a,B())}
;var H=A(G,"perf",B());A(H,"g",B());var La=A(H,"i",B());A(H,"r",[]);B();B();function I(a,b,c){b&&0<b.length&&(b=Ma(b),c&&0<c.length&&(b+="___"+Ma(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=A(La,"_p",B()),A(b,c,B())[a]=(new Date).getTime(),b=H.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Ma(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Na=B(),J=[];function K(a){throw Error("Bad hint"+(a?": "+a:""));}
J.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=A(G,b,[]).concat(c):A(G,b,c)}if(b=a.u)a=A(G,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Oa=/^(\/[a-zA-Z0-9_\-]+)+$/,Pa=[/\/amp\//,/\/amp$/,/^\/amp$/],Qa=/^[a-zA-Z0-9\-_\.,!]+$/,Ra=/^gapi\.loaded_[0-9]+$/,Sa=/^[a-zA-Z0-9,._-]+$/;function Ta(a,b,c,e){var d=a.split(";"),f=d.shift(),g=Na[f],h=null;g?h=g(d,b,c,e):K("no hint processor for: "+f);h||K("failed to generate load url");b=h;c=b.match(Ua);(e=b.match(Va))&&1===e.length&&Wa.test(b)&&c&&1===c.length||K("failed sanity: "+a);return h}
function Xa(a,b,c,e){function d(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Ya(a);Ra.test(c)||K("invalid_callback");b=Za(b);e=e&&e.length?Za(e):null;return[encodeURIComponent(a.g).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",d(a.version),"/m=",d(b),e?"/exm="+d(e):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+d(a.a):"",a.c?"/rs="+d(a.c):"",a.f?"/t="+d(a.f):"","/cb=",d(c)].join("")}
function Ya(a){"/"!==a.charAt(0)&&K("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))K("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var e=0,d=b.length;e<d;++e){var f=b[e].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Oa.test(b)||K("invalid_prefix");c=0;for(e=Pa.length;c<e;++c)Pa[c].test(b)&&K("invalid_prefix");c=M(a,"k",
!0);e=M(a,"am");d=M(a,"rs");a=M(a,"t");return{g:b,version:c,a:e,c:d,f:a}}
function Za(a){for(var b=[],c=0,e=a.length;c<e;++c){var d=a[c].replace(/\./g,"_").replace(/-/g,"_");Sa.test(d)&&b.push(d)}return b.join(",")}
function M(a,b,c){a=a[b];!a&&c&&K("missing: "+b);if(a){if(Qa.test(a))return a;K("invalid: "+b)}return null}
var Wa=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Va=/\/cb=/g,Ua=/\/\//g;function $a(){var a=Ia();if(!a)throw Error("Bad hint");return a}
Na.m=function(a,b,c,e){(a=a[0])||K("missing_hint");return"https://apis.google.com"+Xa(a,b,c,e)};
var N=decodeURI("%73cript"),ab=/^[-+_0-9\/A-Za-z]+={0,2}$/;function bb(a,b){for(var c=[],e=0;e<a.length;++e){var d=a[e],f;if(f=d){a:{for(f=0;f<b.length;f++)if(b[f]===d)break a;f=-1}f=0>f}f&&c.push(d)}return c}
function cb(){var a=G.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(ab)?a:G.nonce=null;var b=A(G,"us",[]);if(!b||!b.length)return G.nonce=null;for(var c=z.getElementsByTagName(N),e=0,d=c.length;e<d;++e){var f=c[e];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(ab))return G.nonce=a}}return null}
function db(a){if("loading"!=z.readyState)eb(a);else{var b=cb(),c="";null!==b&&(c=' nonce="'+b+'"');z.write("<"+N+' src="'+encodeURI(a)+'"'+c+"></"+N+">")}}
function eb(a){var b=z.createElement(N);b.setAttribute("src",a);a=cb();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=z.getElementsByTagName(N)[0])?a.parentNode.insertBefore(b,a):(z.head||z.body||z.documentElement).appendChild(b)}
function fb(a,b){var c=b&&b._c;if(c)for(var e=0;e<J.length;e++){var d=J[e][0],f=J[e][1];f&&Object.prototype.hasOwnProperty.call(c,d)&&f(c[d],a,b)}}
function gb(a,b,c){hb(function(){var c=b===Ia()?A(F,"_",B()):B();c=A(Ka(b),"_",c);a(c)},c)}
function ib(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);fb(a,c);var e=a?a.split(":"):[],d=c.h||$a(),f=A(G,"ah",B());if(f["::"]&&e.length){for(var g=[],h=null;h=e.shift();){var m=h.split(".");m=f[h]||f[m[1]&&"ns:"+m[0]||""]||d;var C=g.length&&g[g.length-1]||null,D=C;C&&C.hint==m||(D={hint:m,b:[]},g.push(D));D.b.push(h)}var L=g.length;if(1<L){var E=c.callback;E&&(c.callback=function(){0==--L&&E()})}for(;e=g.shift();)jb(e.b,c,e.hint)}else jb(e||[],c,d)}
function jb(a,b,c){function e(a,b){if(L)return 0;y.clearTimeout(D);E.push.apply(E,r);var d=((F||{}).config||{}).update;d?d(f):f&&A(G,"cu",[]).push(f);if(b){I("me0",a,T);try{gb(b,c,C)}finally{I("me1",a,T)}}return 1}
a=Ha(a)||[];var d=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,C=void 0;"function"==typeof m&&(C=m);var D=null,L=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";m=A(Ka(c),"r",[]).sort();var E=A(Ka(c),"L",[]).sort(),T=[].concat(m);0<g&&(D=y.setTimeout(function(){L=!0;h()},g));
var r=bb(a,E);if(r.length){r=bb(a,m);var v=A(G,"CP",[]),w=v.length;v[w]=function(a){function b(){var a=v[w+1];a&&a()}
function c(b){v[w]=null;e(r,a)&&Ja(function(){d&&d();b()})}
if(!a)return 0;I("ml1",r,T);0<w&&v[w-1]?v[w]=function(){c(b)}:c(b)};
if(r.length){var ja="loaded_"+G.I++;F[ja]=function(a){v[w](a);F[ja]=null};
a=Ta(c,r,"gapi."+ja,m);m.push.apply(m,r);I("ml0",r,T);b.sync||y.___gapisync?db(a):eb(a)}else v[w](Fa)}else e(r)&&d&&d()}
function hb(a,b){if(G.hee&&0<G.hel)try{return a()}catch(c){b&&b(c),G.hel--,ib("debug_error",function(){try{window.___jsl.hefn(c)}catch(e){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
F.load=function(a,b){return hb(function(){return ib(a,b)})};function kb(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]}
function lb(a,b){if(a.classList)var c=a.classList.contains(b);else c=kb(a),c=0<=ea(c,b);return c}
function mb(a,b){a.classList?a.classList.add(b):lb(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function nb(a,b){a.classList?a.classList.remove(b):lb(a,b)&&(a.className=fa(kb(a),function(a){return a!=b}).join(" "))}
;function ob(a){var b=a.offsetWidth,c=a.offsetHeight,e=ra&&!b&&!c;if((void 0===b||e)&&a.getBoundingClientRect){a:{try{var d=a.getBoundingClientRect()}catch(f){d={left:0,top:0,right:0,bottom:0};break a}t&&a.ownerDocument.body&&(a=a.ownerDocument,d.left-=a.documentElement.clientLeft+a.body.clientLeft,d.top-=a.documentElement.clientTop+a.body.clientTop)}return new x(d.right-d.left,d.bottom-d.top)}return new x(b,c)}
;var O=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{},P=["yt","config_"],Q=k;P[0]in Q||!Q.execScript||Q.execScript("var "+P[0]);for(var R;P.length&&(R=P.shift());)P.length||void 0===O?Q[R]&&Q[R]!==Object.prototype[R]?Q=Q[R]:Q=Q[R]={}:Q[R]=O;function pb(){return ba("gapi.iframes.getContext")()}
function qb(){return ba("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;ca();function rb(a){try{a.register("msg-hovercard-subscription",sb,qb())}catch(b){}}
function sb(a){if(a){a=!!a.isSubscribed;var b=Da();a?nb(b,"subscribe"):mb(b,"subscribe");a?mb(b,"subscribed"):nb(b,"subscribed")}}
;function S(){var a=Da();b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=ob(a);else{b=a.style;var c=b.display,e=b.visibility,d=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=ob(a);b.display=c;b.position=d;b.visibility=e}a={width:a.width,
height:a.height};pb().ready(a,null,void 0);a=qb();pb().addOnOpenerHandler(rb,null,a)}
var U=S;U=void 0===U?{}:U;"function"==n(U)&&(U={callback:U});S=U;var tb;(tb=S.gapiHintOverride)||(tb="GAPI_HINT_OVERRIDE"in O?O.GAPI_HINT_OVERRIDE:void 0);
if(tb){var ub;var V=document.location.href;if(-1!=V.indexOf("?")){V=(V||"").split("#")[0];var vb=V.split("?",2),W=1<vb.length?vb[1]:vb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var wb=W.split("&"),X={},xb=0,yb=wb.length;xb<yb;xb++){var Y=wb[xb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),zb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==n(X[Z])?ha(X[Z],zb):X[Z]=[X[Z],zb]:X[Z]=zb}}ub=X}else ub={};var Ab=ub.gapi_jsh;Ab&&ma(S,
{_c:{jsl:{h:Ab}}})}ib("gapi.iframes:gapi.iframes.style.common",S);}).call(this);
