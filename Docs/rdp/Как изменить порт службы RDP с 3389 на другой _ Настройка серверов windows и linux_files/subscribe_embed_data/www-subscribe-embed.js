(function(){for(var l,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ea=ba,fa=["Reflect",
"construct"],ha=0;ha<fa.length-1;ha++){var ia=fa[ha];ia in ea||(ea[ia]={});ea=ea[ia]}var ja=fa[fa.length-1];da!=ea[ja]&&null!=da&&aa(ea,ja,{configurable:!0,writable:!0,value:da});var m=this;function ka(a){return void 0!==a}
function p(a){return"string"==typeof a}
function la(a){return"number"==typeof a}
function q(a){a=a.split(".");for(var b=m,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function na(){}
function oa(a){a.da=void 0;a.A=function(){return a.da?a.da:a.da=new a}}
function pa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function qa(a){var b=pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ra(a){return"function"==pa(a)}
function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ta(a){return a[ua]||(a[ua]=++va)}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=wa:r=xa;return r.apply(null,arguments)}
function ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var za=Date.now||function(){return+new Date};
function t(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&ka(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function u(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Tb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Aa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Aa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
u(Aa,Error);Aa.prototype.name="CustomError";var Ba;var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Da=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Ea(a){a=ka(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Da("0",Math.max(0,2-b))+a}
function Fa(a,b){for(var c=0,d=Ca(String(a)).split("."),e=Ca(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=Ga(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Ga(0==h[2].length,0==k[2].length)||Ga(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function Ga(a,b){return a<b?-1:a>b?1:0}
function Ha(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Ia(a){var b=p(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Ja=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},La=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Ma=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Na(a,b){a:{var c=a.length;for(var d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:p(a)?a.charAt(c):a[c]}
function Oa(a,b){return 0<=Ja(a,b)}
function Pa(a){return Array.prototype.concat.apply([],arguments)}
function Qa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Sa(a,b,c,d){return Array.prototype.splice.apply(a,Ta(arguments,1))}
function Ta(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ua(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==pa(d))for(var e=0;e<d.length;e+=8192)for(var f=Ua.apply(null,Ta(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var Va;a:{var Wa=m.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Va=Xa;break a}}Va=""}function y(a){return-1!=Va.indexOf(a)}
;function Ya(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Za(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function $a(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function ab(a){var b=bb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function cb(a){for(var b in a)return!1;return!0}
var db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<db.length;f++)c=db[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function fb(){return y("Safari")&&!(gb()||y("Coast")||y("Opera")||y("Edge")||y("Silk")||y("Android"))}
function gb(){return(y("Chrome")||y("CriOS"))&&!y("Edge")}
;function hb(){return y("iPhone")&&!y("iPod")&&!y("iPad")}
function ib(){return hb()||y("iPad")||y("iPod")}
;function jb(a){jb[" "](a);return a}
jb[" "]=na;function kb(a,b){var c=lb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var mb=y("Opera"),z=y("Trident")||y("MSIE"),nb=y("Edge"),ob=nb||z,pb=y("Gecko")&&!(-1!=Va.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),qb=-1!=Va.toLowerCase().indexOf("webkit")&&!y("Edge"),rb=y("Macintosh"),sb=y("Windows"),tb=y("Android"),ub=hb(),vb=y("iPad"),wb=y("iPod"),xb=ib();function yb(){var a=m.document;return a?a.documentMode:void 0}
var zb;a:{var Ab="",Bb=function(){var a=Va;if(pb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(nb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qb)return/WebKit\/(\S+)/.exec(a);if(mb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Bb&&(Ab=Bb?Bb[1]:"");if(z){var Cb=yb();if(null!=Cb&&Cb>parseFloat(Ab)){zb=String(Cb);break a}}zb=Ab}var Db=zb,lb={};function Eb(a){return kb(a,function(){return 0<=Fa(Db,a)})}
var Fb;var Gb=m.document;Fb=Gb&&z?yb()||("CSS1Compat"==Gb.compatMode?parseInt(Db,10):5):void 0;var Hb=!pb&&!z||z&&9<=Number(Fb)||pb&&Eb("1.9.1"),Ib=z&&!Eb("9");function Jb(){this.b="";this.f=Kb}
Jb.prototype.ca=!0;Jb.prototype.ba=function(){return this.b};
var Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Kb={};function Mb(a){var b=new Jb;b.b=a;return b}
Mb("about:blank");function Nb(){this.b="";this.f=Ob}
Nb.prototype.ca=!0;Nb.prototype.ba=function(){return this.b};
function Pb(a){if(a instanceof Nb&&a.constructor===Nb&&a.f===Ob)return a.b;pa(a);return"type_error:SafeHtml"}
var Ob={};function Qb(a){var b=new Nb;b.b=a;return b}
Qb("<!DOCTYPE html>");Qb("");Qb("<br>");function B(a,b){this.j=ka(a)?a:0;this.l=ka(b)?b:0}
B.prototype.equals=function(a){return a instanceof B&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function Rb(a,b){return new B(a.j-b.j,a.l-b.l)}
B.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
B.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
B.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};function Sb(a,b){this.width=a;this.height=b}
l=Sb.prototype;l.hb=function(){return this.width*this.height};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!this.hb()};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Tb(a){return a?new Ub(Vb(a)):Ba||(Ba=new Ub)}
function C(a){return p(a)?document.getElementById(a):a}
function Wb(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Xb(document,"*",a,b)}
function D(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):Xb(c,"*",a,b)[0]||null}return c||null}
function Xb(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Oa(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Yb(a,b){Ya(b,function(b,d){b&&b.ca&&(b=b.ba());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Zb.hasOwnProperty(d)?a.setAttribute(Zb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Zb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function $b(a){a=a.document;a=ac(a)?a.documentElement:a.body;return new Sb(a.clientWidth,a.clientHeight)}
function bc(a){var b=cc(a);a=dc(a);return z&&Eb("10")&&a.pageYOffset!=b.scrollTop?new B(b.scrollLeft,b.scrollTop):new B(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function cc(a){return a.scrollingElement?a.scrollingElement:!qb&&ac(a)?a.documentElement:a.body||a.documentElement}
function dc(a){return a.parentWindow||a.defaultView}
function ac(a){return"CSS1Compat"==a.compatMode}
function ec(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function fc(a){return Hb&&void 0!=a.children?a.children:Ka(a.childNodes,function(a){return 1==a.nodeType})}
function gc(a){return sa(a)&&1==a.nodeType}
function hc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Vb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ic(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Vb(a).createTextNode(String(b)))}}
function jc(a,b){var c=[];return kc(a,b,c,!0)?c[0]:void 0}
function kc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||kc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var lc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},mc={IMG:" ",BR:"\n"};function nc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!oc(a)||pc(a)):oc(a)&&pc(a))&&z){var c;!ra(a.getBoundingClientRect)||z&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function oc(a){return z&&!Eb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function pc(a){a=a.tabIndex;return la(a)&&0<=a&&32768>a}
function qc(a){if(Ib&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];rc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Ib||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function rc(a,b,c){if(!(a.nodeName in lc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in mc)b.push(mc[a.nodeName]);else for(a=a.firstChild;a;)rc(a,b,c),a=a.nextSibling}
function sc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return tc(a,function(a){return(!e||a.nodeName==e)&&(!c||p(a.className)&&Oa(a.className.split(/\s+/),c))},!0,d)}
function F(a,b){return sc(a,null,b,void 0)}
function tc(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Ub(a){this.b=a||m.document||document}
Ub.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Ub.prototype.createElement=function(a){return this.b.createElement(String(a))};
Ub.prototype.appendChild=function(a,b){a.appendChild(b)};
Ub.prototype.isElement=gc;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var uc=window,wc=document,xc=uc.location;function yc(){}
var zc=/\[native code\]/;function G(a,b,c){return a[b]=a[b]||c}
function Ac(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Bc(){var a;if((a=Object.create)&&zc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Cc=G(uc,"gapi",{});var H;H=G(uc,"___jsl",Bc());G(H,"I",0);G(H,"hel",10);function Dc(){var a=xc.href;if(H.dpo)var b=H.h;else{b=H.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ec(a){var b=G(H,"PQ",[]);H.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Fc(a){return G(G(H,"H",Bc()),a,Bc())}
;var Gc=G(H,"perf",Bc());G(Gc,"g",Bc());var Hc=G(Gc,"i",Bc());G(Gc,"r",[]);Bc();Bc();function Ic(a,b,c){b&&0<b.length&&(b=Jc(b),c&&0<c.length&&(b+="___"+Jc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=G(Hc,"_p",Bc()),G(b,c,Bc())[a]=(new Date).getTime(),b=Gc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Jc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Kc=Bc(),Lc=[];function Mc(a){throw Error("Bad hint"+(a?": "+a:""));}
Lc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?H[b]=G(H,b,[]).concat(c):G(H,b,c)}if(b=a.u)a=G(H,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Nc=/^(\/[a-zA-Z0-9_\-]+)+$/,Oc=[/\/amp\//,/\/amp$/,/^\/amp$/],Pc=/^[a-zA-Z0-9\-_\.,!]+$/,Qc=/^gapi\.loaded_[0-9]+$/,Rc=/^[a-zA-Z0-9,._-]+$/;function Sc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Kc[f],h=null;g?h=g(e,b,c,d):Mc("no hint processor for: "+f);h||Mc("failed to generate load url");b=h;c=b.match(Tc);(d=b.match(Uc))&&1===d.length&&Vc.test(b)&&c&&1===c.length||Mc("failed sanity: "+a);return h}
function Wc(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Xc(a);Qc.test(c)||Mc("invalid_callback");b=Yc(b);d=d&&d.length?Yc(d):null;return[encodeURIComponent(a.Bb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ma?"/am="+e(a.ma):"",a.Ga?"/rs="+e(a.Ga):"",a.Qa?"/t="+e(a.Qa):"","/cb=",e(c)].join("")}
function Xc(a){"/"!==a.charAt(0)&&Mc("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Mc("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Nc.test(b)||Mc("invalid_prefix");c=0;for(d=Oc.length;c<d;++c)Oc[c].test(b)&&Mc("invalid_prefix");c=Zc(a,
"k",!0);d=Zc(a,"am");e=Zc(a,"rs");a=Zc(a,"t");return{Bb:b,version:c,ma:d,Ga:e,Qa:a}}
function Yc(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Rc.test(e)&&b.push(e)}return b.join(",")}
function Zc(a,b,c){a=a[b];!a&&c&&Mc("missing: "+b);if(a){if(Pc.test(a))return a;Mc("invalid: "+b)}return null}
var Vc=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Uc=/\/cb=/g,Tc=/\/\//g;function $c(){var a=Dc();if(!a)throw Error("Bad hint");return a}
Kc.m=function(a,b,c,d){(a=a[0])||Mc("missing_hint");return"https://apis.google.com"+Wc(a,b,c,d)};
var ad=decodeURI("%73cript"),bd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function cd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function dd(){var a=H.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(bd)?a:H.nonce=null;var b=G(H,"us",[]);if(!b||!b.length)return H.nonce=null;for(var c=wc.getElementsByTagName(ad),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(bd))return H.nonce=a}}return null}
function ed(a){if("loading"!=wc.readyState)fd(a);else{var b=dd(),c="";null!==b&&(c=' nonce="'+b+'"');wc.write("<"+ad+' src="'+encodeURI(a)+'"'+c+"></"+ad+">")}}
function fd(a){var b=wc.createElement(ad);b.setAttribute("src",a);a=dd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=wc.getElementsByTagName(ad)[0])?a.parentNode.insertBefore(b,a):(wc.head||wc.body||wc.documentElement).appendChild(b)}
function gd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Lc.length;d++){var e=Lc[d][0],f=Lc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function hd(a,b,c){id(function(){var c=b===Dc()?G(Cc,"_",Bc()):Bc();c=G(Fc(b),"_",c);a(c)},c)}
function jd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);gd(a,c);var d=a?a.split(":"):[],e=c.h||$c(),f=G(H,"ah",Bc());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var n=g.length&&g[g.length-1]||null,w=n;n&&n.hint==k||(w={hint:k,features:[]},g.push(w));w.features.push(h)}var E=g.length;if(1<E){var A=c.callback;A&&(c.callback=function(){0==--E&&A()})}for(;d=g.shift();)kd(d.features,c,d.hint)}else kd(d||[],c,e)}
function kd(a,b,c){function d(a,b){if(E)return 0;uc.clearTimeout(w);A.push.apply(A,v);var d=((Cc||{}).config||{}).update;d?d(f):f&&G(H,"cu",[]).push(f);if(b){Ic("me0",a,I);try{hd(b,c,n)}finally{Ic("me1",a,I)}}return 1}
a=Ac(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,n=void 0;"function"==typeof k&&(n=k);var w=null,E=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=G(Fc(c),"r",[]).sort();var A=G(Fc(c),"L",[]).sort(),I=[].concat(k);0<g&&(w=uc.setTimeout(function(){E=!0;h()},g));
var v=cd(a,A);if(v.length){v=cd(a,k);var ma=G(H,"CP",[]),S=ma.length;ma[S]=function(a){function b(){var a=ma[S+1];a&&a()}
function c(b){ma[S]=null;d(v,a)&&Ec(function(){e&&e();b()})}
if(!a)return 0;Ic("ml1",v,I);0<S&&ma[S-1]?ma[S]=function(){c(b)}:c(b)};
if(v.length){var vc="loaded_"+H.I++;Cc[vc]=function(a){ma[S](a);Cc[vc]=null};
a=Sc(c,v,"gapi."+vc,k);k.push.apply(k,v);Ic("ml0",v,I);b.sync||uc.___gapisync?ed(a):fd(a)}else ma[S](yc)}else d(v)&&e&&e()}
function id(a,b){if(H.hee&&0<H.hel)try{return a()}catch(c){b&&b(c),H.hel--,jd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Cc.load=function(a,b){return id(function(){return jd(a,b)})};function ld(a,b,c){this.o=c;this.i=a;this.v=b;this.f=0;this.b=null}
ld.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.i();return a};
function md(a,b){a.v(b);a.f<a.o&&(a.f++,b.next=a.b,a.b=b)}
;function nd(a){m.setTimeout(function(){throw a;},0)}
var od;
function pd(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ka(c.next)){c=c.next;var a=c.oa;c.oa=null;a()}};
return function(a){d.next={oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function qd(){this.f=this.b=null}
var sd=new ld(function(){return new rd},function(a){a.reset()},100);
qd.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function rd(){this.next=this.scope=this.b=null}
rd.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
rd.prototype.reset=function(){this.next=this.scope=this.b=null};function td(a,b){ud||vd();wd||(ud(),wd=!0);var c=xd,d=sd.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var ud;function vd(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);ud=function(){a.then(yd)}}else ud=function(){var a=yd;
!ra(m.setImmediate)||m.Window&&m.Window.prototype&&!y("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(od||(od=pd()),od(a)):m.setImmediate(a)}}
var wd=!1,xd=new qd;function yd(){for(var a;a=xd.remove();){try{a.b.call(a.scope)}catch(b){nd(b)}md(sd,a)}wd=!1}
;var zd=y("Firefox"),Ad=hb()||y("iPod"),Bd=y("iPad"),Cd=y("Android")&&!(gb()||y("Firefox")||y("Opera")||y("Silk")),Dd=gb(),Ed=fb()&&!ib();function Fd(a,b,c){la(a)?(this.date=Gd(a,b||0,c||1),Hd(this,c||1)):sa(a)?(this.date=Gd(a.getFullYear(),a.getMonth(),a.getDate()),Hd(this,a.getDate())):(this.date=new Date(za()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Hd(this,a))}
function Gd(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
l=Fd.prototype;l.getFullYear=function(){return this.date.getFullYear()};
l.getMonth=function(){return this.date.getMonth()};
l.getDate=function(){return this.date.getDate()};
l.getTime=function(){return this.date.getTime()};
function Id(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b);b=60*(b-c);a=(0<a?"-":"+")+Ea(c)+":"+Ea(b)}return a}
l.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
l.X=function(a,b){return[this.getFullYear(),Ea(this.getMonth()+1),Ea(this.getDate())].join(a?"-":"")+(b?Id(this):"")};
l.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
l.toString=function(){return this.X()};
function Hd(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
l.valueOf=function(){return this.date.valueOf()};
function Jd(a,b,c,d,e,f,g){this.date=la(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():za())}
u(Jd,Fd);Jd.prototype.X=function(a,b){var c=Fd.prototype.X.call(this,a);return a?c+" "+Ea(this.date.getHours())+":"+Ea(this.date.getMinutes())+":"+Ea(this.date.getSeconds())+(b?Id(this):""):c+"T"+Ea(this.date.getHours())+Ea(this.date.getMinutes())+Ea(this.date.getSeconds())+(b?Id(this):"")};
Jd.prototype.equals=function(a){return this.getTime()==a.getTime()};
Jd.prototype.toString=function(){return this.X()};function Kd(){this.i=this.i;this.o=this.o}
Kd.prototype.i=!1;Kd.prototype.V=function(){return this.i};
Kd.prototype.dispose=function(){this.i||(this.i=!0,this.aa())};
Kd.prototype.aa=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function Ld(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Md(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}
function J(a,b){return a.classList?a.classList.contains(b):Oa(Md(a),b)}
function K(a,b){a.classList?a.classList.add(b):J(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Nd(a,b){if(a.classList)x(b,function(b){K(a,b)});
else{var c={};x(Md(a),function(a){c[a]=!0});
x(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function L(a,b){a.classList?a.classList.remove(b):J(a,b)&&(a.className=Ka(Md(a),function(a){return a!=b}).join(" "))}
function Od(a,b){a.classList?x(b,function(b){L(a,b)}):a.className=Ka(Md(a),function(a){return!Oa(b,a)}).join(" ")}
function Pd(a,b,c){c?K(a,b):L(a,b)}
function Qd(a,b,c){J(a,b)&&(L(a,b),K(a,c))}
function Rd(a,b){var c=!J(a,b);Pd(a,b,c)}
;var Sd=!z&&!fb();function Td(a,b){return Sd&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Ud="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Vd(){}
Vd.prototype.next=function(){throw Ud;};
Vd.prototype.S=function(){return this};
function Wd(a){if(a instanceof Vd)return a;if("function"==typeof a.S)return a.S(!1);if(qa(a)){var b=0,c=new Vd;c.next=function(){for(;;){if(b>=a.length)throw Ud;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Xd(a,b){if(qa(a))try{x(a,b,void 0)}catch(c){if(c!==Ud)throw c;}else{a=Wd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ud)throw c;}}}
function Yd(a){if(qa(a))return Qa(a);a=Wd(a);var b=[];Xd(a,function(a){b.push(a)});
return b}
;function Zd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Zd.prototype.getHeight=function(){return this.bottom-this.top};
Zd.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Zd.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Zd.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function $d(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
$d.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
$d.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
$d.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ae(a,b,c){if(p(b))(b=be(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=be(c,d);f&&(c.style[f]=e)}}
var ce={};function be(a,b){var c=ce[b];if(!c){var d=Ha(b);c=d;void 0===a.style[d]&&(d=(qb?"Webkit":pb?"Moz":z?"ms":mb?"O":null)+Ia(d),void 0!==a.style[d]&&(c=d));ce[b]=c}return c}
function de(a,b){var c=Vb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function ee(a,b){return de(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function fe(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ge(a){if(z&&!(8<=Number(Fb)))return a.offsetParent;var b=Vb(a),c=ee(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=ee(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function he(a){for(var b=new Zd(0,Infinity,Infinity,0),c=Tb(a),d=c.b.body,e=c.b.documentElement,f=cc(c.b);a=ge(a);)if(!(z&&0==a.clientWidth||qb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=ee(a,"overflow")){var g=ie(a),h=new B(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
$b(dc(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function ie(a){var b=Vb(a),c=new B(0,0);var d=b?Vb(b):document;d=!z||9<=Number(Fb)||ac(Tb(d).b)?d.documentElement:d.body;if(a==d)return c;a=fe(a);b=bc(Tb(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function je(a){a=fe(a);return new B(a.left,a.top)}
function ke(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function le(a){var b=me;if("none"!=ee(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function me(a){var b=a.offsetWidth,c=a.offsetHeight,d=qb&&!b&&!c;return ka(b)&&!d||!a.getBoundingClientRect?new Sb(b,c):(a=fe(a),new Sb(a.right-a.left,a.bottom-a.top))}
function ne(a){var b=ie(a);a=le(a);return new $d(b.j,b.l,a.width,a.height)}
function oe(a){return"rtl"==ee(a,"direction")}
function pe(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function qe(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?pe(a,c):0}
var re={thin:2,medium:4,thick:6};function se(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in re?re[c]:pe(a,c)}
;var te=function(){if(sb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Va))?a[1]:"0"}return rb?(a=/10[_.][0-9_.]+/,(a=a.exec(Va))?a[0].replace(/_/g,"."):"10"):tb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Va))?a[1]:""):ub||vb||wb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Va))?a[1].replace(/_/g,"."):""):""}();function ue(a){return(a=a.exec(Va))?a[1]:""}
var ve=function(){if(zd)return ue(/Firefox\/([0-9.]+)/);if(z||nb||mb)return Db;if(Dd)return ib()?ue(/CriOS\/([0-9.]+)/):ue(/Chrome\/([0-9.]+)/);if(Ed&&!ib())return ue(/Version\/([0-9.]+)/);if(Ad||Bd){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Va);if(a)return a[1]+"."+a[2]}else if(Cd)return(a=ue(/Android\s+([0-9.]+)/))?a:ue(/Version\/([0-9.]+)/);return""}();function we(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=ee(h,"position")){var n=ie(h);if(!k){k=oe(h);var w=Ed&&0<=Fa(ve,10),E=xb&&0<=Fa(te,10);k=k&&(pb||w||E)?-h.scrollLeft:!k||ob&&Eb("8")||"visible"==ee(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;n=Rb(n,new B(k,h.scrollTop))}}}h=n||new B;n=ne(a);if(k=he(a)){var A=new $d(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(n.left,A.left);w=Math.min(n.left+n.width,
A.left+A.width);k<=w&&(E=Math.max(n.top,A.top),A=Math.min(n.top+n.height,A.top+A.height),E<=A&&(n.left=k,n.top=E,n.width=w-k,n.height=A-E))}k=Tb(a);E=Tb(c);if(k.b!=E.b){w=k.b.body;E=dc(E.b);A=new B(0,0);var I=(I=Vb(w))?dc(I):window;b:{try{jb(I.parent);var v=!0;break b}catch(vc){}v=!1}if(v){v=w;do{var ma=I==E?ie(v):je(v);A.j+=ma.j;A.l+=ma.l}while(I&&I!=E&&I!=I.parent&&(v=I.frameElement)&&(I=I.parent))}v=Rb(A,ie(w));!z||9<=Number(Fb)||ac(k.b)||(v=Rb(v,bc(k.b)));n.left+=v.j;n.top+=v.l}a=xe(a,b);b=n.left;
a&4?b+=n.width:a&2&&(b+=n.width/2);b=new B(b,n.top+(a&1?n.height:0));b=Rb(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var S;g&&(S=he(c))&&(S.top-=h.l,S.right-=h.j,S.bottom-=h.l,S.left-=h.j);return ye(b,c,d,f,S,g,void 0)}
function ye(a,b,c,d,e,f,g){a=new B(a.j,a.l);var h=xe(b,c);c=le(b);g=g?new Sb(g.width,g.height):new Sb(c.width,c.height);a=new B(a.j,a.l);g=new Sb(g.width,g.height);var k=0;if(d||0!=h)h&4?a.j-=g.width+(d?d.right:0):h&2?a.j-=g.width/2:d&&(a.j+=d.left),h&1?a.l-=g.height+(d?d.bottom:0):d&&(a.l+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.j<e.left||d.j>=e.right)&&(f&=-2);132==(f&132)&&(d.l<e.top||d.l>=e.bottom)&&(f&=-5);d.j<e.left&&f&1&&(d.j=e.left,k|=1);if(f&16){var n=d.j;d.j<e.left&&(d.j=e.left,k|=
4);d.j+h.width>e.right&&(h.width=Math.min(e.right-d.j,n+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.j+h.width>e.right&&f&1&&(d.j=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.j<e.left?16:0)|(d.j+h.width>e.right?32:0));d.l<e.top&&f&4&&(d.l=e.top,k|=2);f&32&&(n=d.l,d.l<e.top&&(d.l=e.top,k|=8),d.l+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.l,n+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.l+h.height>e.bottom&&f&4&&(d.l=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.l<
e.top?64:0)|(d.l+h.height>e.bottom?128:0));e=k}else e=256;k=e}f=new $d(0,0,0,0);f.left=a.j;f.top=a.l;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;g=new B(f.left,f.top);g instanceof B?(a=g.j,g=g.l):(a=g,g=void 0);b.style.left=ke(a,!1);b.style.top=ke(g,!1);g=new Sb(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=ac(Tb(Vb(b)).b),!z||Eb("10")||g&&Eb("8")?(b=b.style,pb?b.MozBoxSizing="border-box":qb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(z?(g=qe(b,"paddingLeft"),f=qe(b,"paddingRight"),d=qe(b,"paddingTop"),h=qe(b,"paddingBottom"),g=new Zd(d,f,h,g)):(g=de(b,"paddingLeft"),f=de(b,"paddingRight"),d=de(b,"paddingTop"),h=de(b,"paddingBottom"),g=new Zd(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(g))),!z||9<=Number(Fb)?(f=de(b,"borderLeftWidth"),d=de(b,"borderRightWidth"),h=de(b,"borderTopWidth"),b=de(b,"borderBottomWidth"),b=new Zd(parseFloat(h),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=se(b,"borderLeft"),d=se(b,"borderRight"),h=se(b,"borderTop"),b=se(b,"borderBottom"),b=new Zd(h,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function xe(a,b){return(b&8&&oe(a)?b^4:b)&-9}
;function ze(a,b){this.b=0;this.B=void 0;this.o=this.f=this.i=null;this.v=this.w=!1;if(a!=na)try{var c=this;a.call(b,function(a){Ae(c,2,a)},function(a){Ae(c,3,a)})}catch(d){Ae(this,3,d)}}
function Be(){this.next=this.context=this.f=this.i=this.b=null;this.o=!1}
Be.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.o=!1};
var Ce=new ld(function(){return new Be},function(a){a.reset()},100);
function De(a,b,c){var d=Ce.get();d.i=a;d.f=b;d.context=c;return d}
ze.prototype.then=function(a,b,c){return Ee(this,ra(a)?a:null,ra(b)?b:null,c)};
ze.prototype.then=ze.prototype.then;ze.prototype.$goog_Thenable=!0;ze.prototype.cancel=function(a){0==this.b&&td(function(){var b=new Fe(a);Ge(this,b)},this)};
function Ge(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.o||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ge(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):He(c),Ie(c,e,3,b)))}a.i=null}else Ae(a,3,b)}
function Je(a,b){a.f||2!=a.b&&3!=a.b||Ke(a);a.o?a.o.next=b:a.f=b;a.o=b}
function Ee(a,b,c,d){var e=De(null,null,null);e.b=new ze(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!ka(e)&&b instanceof Fe?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;Je(a,e);return e.b}
ze.prototype.J=function(a){this.b=0;Ae(this,2,a)};
ze.prototype.R=function(a){this.b=0;Ae(this,3,a)};
function Ae(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.J,f=a.R;if(d instanceof ze){Je(d,De(e||na,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(sa(d))try{var k=d.then;if(ra(k)){Le(d,k,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.B=c,a.b=b,a.i=null,Ke(a),3!=b||c instanceof Fe||Me(a,c))}}
function Le(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ke(a){a.w||(a.w=!0,td(a.F,a))}
function He(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
ze.prototype.F=function(){for(var a;a=He(this);)Ie(this,a,this.b,this.B);this.w=!1};
function Ie(a,b,c,d){if(3==c&&b.f&&!b.o)for(;a&&a.v;a=a.i)a.v=!1;if(b.b)b.b.i=null,Ne(b,c,d);else try{b.o?b.i.call(b.context):Ne(b,c,d)}catch(e){Oe.call(null,e)}md(Ce,b)}
function Ne(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Me(a,b){a.v=!0;td(function(){a.v&&Oe.call(null,b)})}
var Oe=nd;function Fe(a){Aa.call(this,a)}
u(Fe,Aa);Fe.prototype.name="cancel";function M(a){Kd.call(this);this.B=1;this.v=[];this.w=0;this.b=[];this.f={};this.F=!!a}
u(M,Kd);l=M.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
function Pe(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.P(d),b.apply(void 0,arguments))},a)}
function Qe(a,b,c){if(b=a.f[b]){var d=a.b;(b=Na(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.P(b)}}
l.P=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.w)this.v.push(a),this.b[a+1]=na;else{if(c){var d=Ja(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
l.H=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];Re(this.b[g+1],this.b[g+2],d)}else{this.w++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.w--,0<this.v.length&&0==this.w)for(;c=this.v.pop();)this.P(c)}}return 0!=e}return!1};
function Re(a,b,c){td(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(x(b,this.P,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Se(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=Se(a,d);return c}
l.aa=function(){M.D.aa.call(this);this.clear();this.v.length=0};function Te(){}
;function Ue(){}
u(Ue,Te);Ue.prototype.clear=function(){var a=Yd(this.S(!0)),b=this;x(a,function(a){b.remove(a)})};function Ve(a){this.b=a}
u(Ve,Ue);l=Ve.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!p(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.S=function(a){var b=0,c=this.b,d=new Vd;d.next=function(){if(b>=c.length)throw Ud;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!p(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function We(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
u(We,Ve);function Xe(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
u(Xe,Ve);var Ye=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ze(a){return a?decodeURI(a):a}
function $e(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function af(a,b,c){if("array"==pa(b))for(var d=0;d<b.length;d++)af(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bf(a,b){for(var c=[],d=b||0;d<a.length;d+=2)af(a[d],a[d+1],c);return c.join("&")}
function cf(a){var b=[],c;for(c in a)af(c,a[c],b);return b.join("&")}
function df(a,b){var c=2==arguments.length?bf(arguments[1],0):bf(arguments,1);return $e(a,c)}
function ef(a,b){var c=cf(b);return $e(a,c)}
;var ff=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",ff);function gf(a){var b=arguments;if(1<b.length)ff[b[0]]=b[1];else{b=b[0];for(var c in b)ff[c]=b[c]}}
function N(a,b){return a in ff?ff[a]:b}
;function hf(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),gf("ERRORS",b))}
function jf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hf(b)}}:a}
;function O(a,b){ra(a)&&(a=jf(a));return window.setTimeout(a,b)}
;var kf=q("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.P;M.prototype.publish=M.prototype.H;M.prototype.clear=M.prototype.clear;t("ytPubsubPubsubInstance",kf);var lf=q("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",lf);var mf=q("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",mf);var nf=q("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",nf);
function of(a,b,c){var d=pf();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){lf[e]&&b.apply(c||window,d)};
try{nf[a]?g():O(g,0)}catch(h){hf(h)}},c);
lf[e]=!0;mf[a]||(mf[a]=[]);mf[a].push(e);return e}return 0}
function pf(){return q("ytPubsubPubsubInstance")}
function P(a,b){var c=pf();return c?c.publish.apply(c,arguments):!1}
function qf(a,b){nf[a]=!0;var c=pf();c&&c.publish.apply(c,arguments);nf[a]=!1}
function rf(a){var b=pf();b&&(la(a)?a=[a]:p(a)&&(a=[parseInt(a,10)]),x(a,function(a){b.unsubscribeByKey(a);delete lf[a]}))}
;function sf(a,b){return a?a.dataset?a.dataset[tf(b)]:a.getAttribute("data-"+b):null}
var uf={};function tf(a){return uf[a]||(uf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function vf(a,b){a&&(a.dataset?delete a.dataset[tf(b)]:a.removeAttribute("data-"+b))}
function wf(a,b,c){a&&(a.dataset?a.dataset[tf(b)]=String(c):a.setAttribute("data-"+b,c))}
;function Q(a,b){this.version=a;this.args=b}
function xf(a,b){if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!a.La){var c=new a;a.La=c.version}var d=a.La}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{return Reflect.construct(a,Qa(b.args))}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
Q.prototype.Db=function(){return{version:this.version,args:this.args}};function R(a,b){this.topic=a;this.T=b}
R.prototype.toString=function(){return this.topic};function yf(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():O(a,b||0)}
;var zf=q("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.P;M.prototype.publish=M.prototype.H;M.prototype.clear=M.prototype.clear;t("ytPubsub2Pubsub2Instance",zf);var Af=q("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",Af);var Bf=q("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",Bf);var Cf=q("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",Cf);
t("ytPubsub2Pubsub2SkipSubKey",null);function T(a,b){var c=Df();return c?c.publish.call(c,a.toString(),a,b):!1}
function U(a,b,c){var d=Df();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=q("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(Af[e])try{if(g&&a instanceof R&&a!=d)try{g=xf(a.T,g)}catch(k){throw k.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){hf(k)}},Cf[a.toString()]?q("yt.scheduler.instance")?yf(f):O(f,0):f())});
Af[e]=!0;Bf[a.toString()]||(Bf[a.toString()]=[]);Bf[a.toString()].push(e);return e}
function Df(){return q("ytPubsub2Pubsub2Instance")}
function Ef(a,b,c){window.ytPubsub2Pubsub2SkipSubKey=a;T.call(null,b,c);window.ytPubsub2Pubsub2SkipSubKey=null}
function Ff(a){var b=Df();b&&(la(a)&&(a=[a]),x(a,function(a){b.unsubscribeByKey(a);delete Af[a]}))}
;var Gf=0;function Hf(a,b){var c=Xb(document,a,null,b);return c.length?c[0]:null}
var If=q("ytDomDomGetNextId")||function(){return++Gf};
t("ytDomDomGetNextId",If);function Jf(){var a=document,b;Ma(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Kf(a){var b=a.__yt_uid_key;b||(b=If(),a.__yt_uid_key=b);return b}
function Lf(a,b){a=C(a);b=C(b);return!!tc(a,function(a){return a===b},!0,void 0)}
function Mf(){Pd(document.body,"hide-players",!1);x(Wb("preserve-players"),function(a){L(a,"preserve-players")})}
;var Nf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Of(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Nf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Of.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Of.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Of.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var bb=q("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",bb);var Pf=q("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Pf);function Qf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ab(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Qf(a,b,c,d);if(e)return e;e=++Pf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Of(d);if(!tc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Of(b);
b.currentTarget=a;return c.call(a,b)};
g=jf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);bb[e]=[a,b,c,g,d];return e}
function Rf(a,b,c){var d=a||document;return V(d,"click",function(a){var e=tc(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Sf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Tf(a,b,c){return Rf(a,b,function(a){return J(a,c)})}
function Uf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),x(a,function(a){if(a in bb){var b=bb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete bb[a]}}))}
;var Vf={},Wf="ontouchstart"in document;function Xf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return tc(c,function(a){return J(a,b)},!0,d)}
function Yf(a){var b="mouseover"==a.type&&"mouseenter"in Vf||"mouseout"==a.type&&"mouseleave"in Vf,c=a.type in Vf||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Vf[b];for(var d in c.f){var e=Xf(b,d,a.target);e&&!tc(a.relatedTarget,function(a){return a==e},!0)&&c.H(d,e,b,a)}}if(b=Vf[a.type])for(d in b.f)(e=Xf(a.type,d,a.target))&&b.H(d,e,a.type,a)}}
V(document,"blur",Yf,!0);V(document,"change",Yf,!0);V(document,"click",Yf);V(document,"focus",Yf,!0);V(document,"mouseover",Yf);V(document,"mouseout",Yf);V(document,"mousedown",Yf);V(document,"keydown",Yf);V(document,"keyup",Yf);V(document,"keypress",Yf);V(document,"cut",Yf);V(document,"paste",Yf);Wf&&(V(document,"touchstart",Yf),V(document,"touchend",Yf),V(document,"touchcancel",Yf));function Zf(a){this.v=a;this.B={};this.J=[];this.F=[]}
l=Zf.prototype;l.C=function(a){return F(a,X(this))};
function X(a,b){return"yt-uix"+(a.v?"-"+a.v:"")+(b?"-"+b:"")}
l.unregister=function(){rf(this.J);this.J.length=0;Ff(this.F);this.F.length=0};
l.init=na;l.dispose=na;function $f(a,b,c){a.J.push(of(b,c,a))}
function ag(a,b,c){a.F.push(U(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=r(c,a);b in Vf||(Vf[b]=new M);Vf[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in Vf){var e=Vf[b];Qe(e,X(a,d),a.B[c]);0>=Se(e)&&(e.dispose(),delete Vf[b])}delete a.B[c]}
l.N=function(a,b,c){var d=this.g(a,b);if(d&&(d=q(d))){var e=Ta(arguments,2);Sa(e,0,0,a);d.apply(null,e)}};
l.g=function(a,b){return sf(a,b)};
function bg(a,b){wf(a,"tooltip-text",b)}
;var cg=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};t("yt.uix.widgets_",cg);function dg(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==pa(b[f])?Ra(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function eg(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=dg(d[1]||"");for(var e in b)d[e]=b[e];return ef(a,d)+c}
;function fg(a){a=void 0===a?{}:a;ra(a)&&(a={callback:a});if(a.gapiHintOverride||N("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=dg(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&eb(a,{_c:{jsl:{h:b}}})}jd("gapi.iframes:gapi.iframes.style.common",a)}
;function gg(){return q("gapi.iframes.getContext")()}
function hg(){return gg().getParentIframe()}
function ig(a,b){var c=c||gg();c.addOnConnectHandler("yt",a,void 0,b)}
function jg(a){var b=gg();b=b||gg();b.connectIframes(a)}
;za();var kg=ka(XMLHttpRequest)?function(){return new XMLHttpRequest}:ka(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function lg(){if(!kg)return null;var a=kg();return"open"in a?a:null}
;var mg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ng=!1;
function og(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(Ye)[1]||null,e=Ze(a.match(Ye)[3]||null);d&&e?(d=c,c=a.match(Ye),d=d.match(Ye),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ze(c.match(Ye)[3]||null)==e&&(Number(c.match(Ye)[4]||null)||null)==(Number(a.match(Ye)[4]||null)||null):!0;for(var f in mg){if((e=d=N(mg[f]))&&!(e=c)){var g=a;e=f;var h=N("CORS_HEADER_WHITELIST")||{};e=(g=Ze(g.match(Ye)[3]||null))?(h=h[g])?Oa(h,e):!1:!0}e&&(b[f]=d)}return b}
function pg(a,b){var c=N("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Vb&&(!Ze(a.match(Ye)[3]||null)||b.withCredentials||Ze(a.match(Ye)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.L&&b.L[c])}
function qg(a,b){var c=b.format||"JSON";b.Wb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=N("XSRF_FIELD_NAME",void 0),e=N("XSRF_TOKEN",void 0),f=b.Ka;f&&(f[d]&&delete f[d],a=eg(a,f||{}));f=b.postBody||"";var g=b.L;pg(a,b)&&(g||(g={}),g[d]=e);g&&p(f)&&(d=dg(f),eb(d,g),f=b.Cb&&"JSON"==b.Cb?JSON.stringify(d):cf(d));d=f||g&&!cb(g);!ng&&d&&"POST"!=b.method&&(ng=!0,hf(Error("AJAX request with postData should use POST")));
var h=!1,k,n=rg(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=sg(c,a,b.Ub);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||m;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.ea&&b.ea.call(f,a,e)}},
b.method,f,b.headers,b.responseType,b.withCredentials);
b.zb&&0<b.timeout&&(k=O(function(){h||(h=!0,n.abort(),window.clearTimeout(k),b.zb.call(b.context||m,n))},b.timeout))}
function sg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?tg(b):null)d={},x(b.getElementsByTagName("*"),function(a){d[a.tagName]=ug(a)})}c&&vg(d);
return d}
function vg(a){if(sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b]);a[c]=d}else vg(a[b])}}
function tg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ug(a){var b="";x(a.childNodes,function(a){b+=a.nodeValue});
return b}
function rg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&jf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=lg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=og(a,e))for(var n in e)k.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var wg={},xg=0;function yg(a){var b=new Image,c=""+xg++;wg[c]=b;b.onload=b.onerror=function(){delete wg[c]};
b.src=a}
;function zg(a){Q.call(this,1,arguments);this.b=a}
u(zg,Q);function Ag(a){Q.call(this,1,arguments);this.b=a}
u(Ag,Q);function Bg(a,b,c){Q.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
u(Bg,Q);function Cg(a,b,c,d,e){Q.call(this,2,arguments);this.f=a;this.b=b;this.o=c||null;this.i=d||null;this.source=e||null}
u(Cg,Q);function Dg(a,b,c){Q.call(this,1,arguments);this.b=a;this.f=b}
u(Dg,Q);function Eg(a,b,c,d,e,f,g){Q.call(this,1,arguments);this.f=a;this.v=b;this.b=c;this.w=d||null;this.o=e||null;this.i=f||null;this.source=g||null}
u(Eg,Q);
var Fg=new R("subscription-batch-subscribe",zg),Gg=new R("subscription-batch-unsubscribe",zg),Hg=new R("subscription-subscribe",Cg),Ig=new R("subscription-subscribe-loading",Ag),Jg=new R("subscription-subscribe-loaded",Ag),Kg=new R("subscription-subscribe-success",Dg),Lg=new R("subscription-subscribe-external",Cg),Mg=new R("subscription-unsubscribe",Eg),Ng=new R("subscription-unsubscirbe-loading",Ag),Og=new R("subscription-unsubscribe-loaded",Ag),Pg=new R("subscription-unsubscribe-success",Ag),Qg=
new R("subscription-external-unsubscribe",Eg),Rg=new R("subscription-enable-ypc",Ag),Sg=new R("subscription-disable-ypc",Ag),Tg=new R("subscription-prefs",Bg),Ug=new R("subscription-prefs-success",Bg),Vg=new R("subscription-prefs-failure",Bg);var Wg="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),Xg=[Ig,Jg,Kg,Ng,Og,Pg,Lg,Qg],Yg=[Ig,Jg,Kg,Ng,Og,Pg,Rg,Sg];function Zg(){var a=Jf();return a?a:null}
;function $g(a,b){(a=C(a))&&a.style&&(a.style.display=b?"":"none",Pd(a,"hid",!b))}
function ah(a){return(a=C(a))?"none"!=a.style.display&&!J(a,"hid"):!1}
function bh(a){x(arguments,function(a){!qa(a)||a instanceof Element?$g(a,!0):x(a,function(a){bh(a)})})}
function ch(a){x(arguments,function(a){!qa(a)||a instanceof Element?$g(a,!1):x(a,function(a){ch(a)})})}
;function dh(){Zf.call(this,"tooltip");this.b=0;this.f={}}
u(dh,Zf);oa(dh);l=dh.prototype;l.register=function(){Y(this,"mouseover",this.W);Y(this,"mouseout",this.K);Y(this,"focus",this.sa);Y(this,"blur",this.na);Y(this,"click",this.K);Y(this,"touchstart",this.Ja);Y(this,"touchend",this.Y);Y(this,"touchcancel",this.Y)};
l.unregister=function(){Z(this,"mouseover",this.W);Z(this,"mouseout",this.K);Z(this,"focus",this.sa);Z(this,"blur",this.na);Z(this,"click",this.K);Z(this,"touchstart",this.Ja);Z(this,"touchend",this.Y);Z(this,"touchcancel",this.Y);this.dispose();dh.D.unregister.call(this)};
l.dispose=function(){for(var a in this.f)this.K(this.f[a]);this.f={}};
l.W=function(a){if(!(this.b&&1E3>za()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(vf(a,"tooltip-hide-timer"),window.clearTimeout(b));b=r(function(){eh(this,a);vf(a,"tooltip-show-timer")},this);
var c=parseInt(this.g(a,"tooltip-show-delay"),10)||0;b=O(b,c);wf(a,"tooltip-show-timer",b.toString());a.title&&(bg(a,fh(this,a)),a.title="");b=ta(a).toString();this.f[b]=a}};
l.K=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),vf(a,"tooltip-show-timer"));b=r(function(){if(a){var b=C(gh(this,a));b&&(hh(b),ec(b),vf(a,"content-id"));b=C(gh(this,a,"arialabel"));ec(b)}vf(a,"tooltip-hide-timer")},this);
b=O(b,50);wf(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=ta(a).toString();delete this.f[b]};
l.sa=function(a){this.b=0;this.W(a)};
l.na=function(a){this.b=0;this.K(a)};
l.Ja=function(a,b,c){c.changedTouches&&(this.b=0,(a=Xf(b,X(this),c.changedTouches[0].target))&&this.W(a))};
l.Y=function(a,b,c){c.changedTouches&&(this.b=za(),(a=Xf(b,X(this),c.changedTouches[0].target))&&this.K(a))};
function ih(a,b,c){bg(b,c);a=a.g(b,"content-id");(a=C(a))&&ic(a,c)}
function fh(a,b){return a.g(b,"tooltip-text")||b.title}
function eh(a,b){if(b){var c=fh(a,b);if(c){var d=C(gh(a,b));if(!d){d=document.createElement("div");d.id=gh(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=jh(a,b),k=gh(a,b,"content");g.id=k;wf(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=qc(b);k=gh(a,b,"arialabel");f=document.createElement("div");K(f,X(a,"arialabel"));f.id=k;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;ic(f,n);b.setAttribute("aria-labelledby",k);k=Zg()||document.body;k.appendChild(f);k.appendChild(d);ih(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",K(g,X(a,"normal-wrap")));g=J(b,X(a,"reverse"));kh(a,b,d,e,h,g)||kh(a,b,d,e,h,!g);var w=X(a,"tip-visible");
O(function(){K(d,w)},0)}}}}
function kh(a,b,c,d,e,f){Pd(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=le(b);f=new B((h.width-10)/2,f?h.height:0);var k=ie(b);ye(new B(k.j+f.j,k.l+f.l),c,g);f=$b(window);if(1==c.nodeType)var n=je(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new B(c.clientX,c.clientY);c=le(d);var w=Math.floor(c.width/2);g=!!(f.height<n.l+h.height);h=!!(n.l<h.height);k=!!(n.j<w);f=!!(f.width<n.j+w);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||k)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function gh(a,b,c){a=X(a)+Kf(b);c&&(a+="-"+c);return a}
function jh(a,b){var c=null;sb&&J(b,X(a,"masked"))&&((c=C("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),bh(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function hh(a){var b=C("yt-uix-tooltip-shared-mask"),c=b&&tc(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),ch(b),document.body.appendChild(b))}
;function lh(a){var b=document.location.protocol+"//"+document.domain+"/post_login";b=df(b,"mode","subscribe");b=df("/signin?context=popup","next",b);b=df(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=of("LOGGED_IN",function(b){rf(N("LOGGED_IN_PUBSUB_KEY",void 0));gf("LOGGED_IN",!0);a(b)});
gf("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
t("yt.pubsub.publish",P);var mh=Object.create(null);mh.log_event="GENERIC_EVENT_LOGGING";mh.log_event2="GENERIC_EVENT_LOGGING";mh.log_interaction="INTERACTION_LOGGING";t("ytLoggingTransportLogPayloadsQueue_",q("ytLoggingTransportLogPayloadsQueue_")||{});t("ytLoggingTransportTokensToCttTargetIds_",q("ytLoggingTransportTokensToCttTargetIds_")||{});t("ytLoggingTransportDispatchedStats_",q("ytLoggingTransportDispatchedStats_")||{});t("ytytLoggingTransportCapturedTime_",q("ytLoggingTransportCapturedTime_")||{});(new We).isAvailable();(new Xe).isAvailable();function nh(){Zf.call(this,"button");this.b=null;this.i=[];this.f={}}
u(nh,Zf);oa(nh);l=nh.prototype;l.register=function(){Y(this,"click",this.Ma);Y(this,"keydown",this.wa);Y(this,"keypress",this.xa);$f(this,"page-scroll",this.nb)};
l.unregister=function(){Z(this,"click",this.Ma);Z(this,"keydown",this.wa);Z(this,"keypress",this.xa);oh(this);this.f={};nh.D.unregister.call(this)};
l.Ma=function(a){a&&!a.disabled&&(ph(this,a),this.click(a))};
l.wa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=qh(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=jc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ub;else"table"==e&&(f=this.tb);f&&rh(this,a,b,c,r(f,this))}}};
l.nb=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=F(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;sh(this,d,b,!0)}};
function rh(a,b,c,d,e){var f=ah(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=th(a,c)){if(ka(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var n=void 0===n?window:n;n=n.location;h=ef(b.href,h)+k;h instanceof Jb||h instanceof Jb||(h=h.ca?h.ba():String(h),Lb.test(h)||(h="about:invalid#zClosurez"),h=Mb(h));h instanceof Jb&&h.constructor===Jb&&h.f===Kb?h=h.b:
(pa(h),h="type_error:SafeUrl");n.href=h}else Uf(b)}else g&&uh(a,b);else f?27==d.keyCode?(th(a,c),uh(a,b)):e(b,c,d):(h=J(b,X(a,"reverse"))?38:40,d.keyCode==h&&(Uf(b),d.preventDefault()))}
l.xa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=qh(this,a),ah(a)&&c.preventDefault())};
function th(a,b){var c=X(a,"menu-item-highlight"),d=D(c,b);d&&L(d,c);return d}
function vh(a,b,c){K(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+ta(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
l.tb=function(a,b,c){var d=th(this,b);if(d){var e=Hf("table",b);b=Xb(document,"td",null,e);d=wh(d,b,Xb(document,"td",null,Hf("tr",e)).length,c);-1!=d&&(vh(this,a,b[d]),c.preventDefault())}};
l.ub=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=th(this,b);d&&(b=Ka(Xb(document,"li",null,b),ah),vh(this,a,b[wh(d,b,1,c)]),c.preventDefault())}};
function wh(a,b,c,d){var e=b.length;a=Ja(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function xh(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),ch(c),b.iframeMask=c);return c}
function sh(a,b,c,d){var e=F(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=ne(b);if(J(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(w){}}J(b,"flip")&&(J(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.g(b,"button-has-sibling-menu")?k=ge(e):a.g(b,"button-menu-root-container")&&(k=yh(a,b));z&&!Eb("8")&&(k=null);if(k){var n=ne(k);n=new Zd(-n.top,n.left,n.top,-n.left)}k=new B(0,1);J(b,X(a,"center-menu"))&&(k.j-=Math.round((le(c).width-le(b).width)/
2));d&&(k.l+=bc(document).l);if(a=xh(a,b))b=le(c),a.style.width=b.width+"px",a.style.height=b.height+"px",we(e,f,a,g,k,n,197),d&&ae(a,"position","fixed");we(e,f,c,g,k,n,197)}
function yh(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return F(b,c)}return document.body}
l.Oa=function(a){if(a){var b=qh(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=yh(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=xh(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[Kf(a).toString()]=b);sh(this,a,b,c);qf("yt-uix-button-menu-before-show",a,b);bh(b);d&&bh(d);
this.N(a,"button-menu-action",!0);K(a,X(this,"active"));b=r(this.Na,this,a,!1);d=r(this.Na,this,a,!0);c=r(this.Fb,this,a,void 0);this.b&&qh(this,this.b)==qh(this,a)||oh(this);P("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function uh(a,b){if(b){var c=qh(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");ch(c);a.N(b,"button-menu-action",!1);var d=xh(a,b),e=Kf(c).toString();delete a.f[e];O(function(){d&&d.parentNode&&(ch(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=F(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));Od(b,f);P("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
l.Fb=function(a,b){var c=qh(this,a);if(c){b&&(b instanceof Nb?c.innerHTML=Pb(b):ic(c,b));var d=!!this.g(a,"button-menu-fixed");sh(this,a,c,d)}};
l.Na=function(a,b,c){c=Sf(c);var d=F(c,X(this));if(d){d=qh(this,d);var e=qh(this,a);if(d==e)return}d=F(c,X(this,"menu"));e=d==qh(this,a);var f=J(c,X(this,"menu-item")),g=J(c,X(this,"menu-close"));if(!d||e&&(f||g))uh(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=D(X(this,"content"),a))&&ic(a,qc(c)),zh(this,d,c))};
function zh(a,b,c){var d=X(a,"menu-item-selected");x(Wb(d,b),function(a){L(a,d)});
K(c.parentNode,d)}
function qh(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id");c=c&&C(c);var d=X(a,"menu");c?Nd(c,[d,X(a,"menu-external")]):c=D(d,b);b.widgetMenu=c}return b.widgetMenu}
l.isToggled=function(a){return J(a,X(this,"toggled"))};
function ph(a,b){if(a.g(b,"button-toggle")){var c=F(b,X(a,"group")),d=X(a,"toggled"),e=J(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");x(Wb(X(a),c),function(a){a!=b||"optional"==f&&e?(L(a,d),a.removeAttribute("aria-pressed")):(K(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Rd(b,d)}}
l.click=function(a){if(qh(this,a)){var b=qh(this,a);if(b){var c=F(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(uh(this,c),O(r(this.Oa,this,a),1)):ah(b)?uh(this,a):this.Oa(a)}a.focus()}this.N(a,"button-action")};
function oh(a){a.b&&uh(a,a.b)}
;function Ah(a){Zf.call(this,a);this.i=null}
u(Ah,Zf);l=Ah.prototype;l.C=function(a){var b=Zf.prototype.C.call(this,a);return b?b:a};
l.register=function(){$f(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
l.dispose=function(){Bh(this);Ah.D.dispose.call(this)};
l.g=function(a,b){var c=Ah.D.g.call(this,a,b);return c?c:(c=Ah.D.g.call(this,a,"card-config"))&&(c=q(c))&&c[b]?c[b]:null};
l.show=function(a){var b=this.C(a);if(b){K(b,X(this,"active"));var c=Ch(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Dh(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.N(b,"card-action",a);this.i=a;ch(c);O(r(function(){e||(bh(c),P("yt-uix-card-show",b,a,c));Eh(c);K(c,d);P("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Ch(a,b,c){var d=c||b,e=X(a,"card");c=Fh(a,d);var f=C(X(a,"card")+Kf(d));if(f)return a=D(X(a,"card-body"),f),hc(a,c)||(ec(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Kf(d);f.className=e;(d=a.g(d,"card-class"))&&Nd(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;ec(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Dh(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=D(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&k){var w=13;var E=8}else n&&!k?(w=12,E=9):!n&&k?(w=9,E=12):(w=8,E=13);var A=oe(document.body);f=oe(b);A!=f&&(w^=4);if(d){f=b.offsetHeight/2-12;var I=new B(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,I=new B(b.offsetWidth+6,-12);var v=le(c);f=
Math.min(f,(d?v.height:v.width)-24-6);6>f&&(f=6,d?I.l+=12-b.offsetHeight/2:I.j+=12-b.offsetWidth/2);v=null;g||(v=10);b=X(a,"card-flip");a=X(a,"card-reverse");Pd(c,b,n);Pd(c,a,k);v=we(e,w,c,E,I,null,v);!g&&v&&(v&48&&(n=!n,w^=4,E^=4),v&192&&(k=!k,w^=1,E^=1),Pd(c,b,n),Pd(c,a,k),we(e,w,c,E,I));h&&(e=parseInt(c.style.top,10),g=bc(document).l,ae(c,"position","fixed"),ae(c,"top",e-g+"px"));A&&(c.style.right="",e=ne(c),e.left=e.left||parseInt(c.style.left,10),g=$b(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=D("yt-uix-card-body-arrow",c);g=D("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!A&&n||A&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=D("yt-uix-card-arrow",c);n=D("yt-uix-card-arrow-background",c);k&&n&&(c="right"==d?le(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
l.hide=function(a){if(a=this.C(a)){var b=C(X(this,"card")+Kf(a));b&&(L(a,X(this,"active")),L(b,X(this,"card-visible")),ch(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(ec(b.cardMask),b.cardMask=null))}};
function Bh(a){a.i&&a.hide(a.i)}
l.Eb=function(a,b){var c=this.C(a);if(c){if(b){var d=Fh(this,c);if(!d)return;b instanceof Nb?d.innerHTML=Pb(b):ic(d,b)}J(c,X(this,"active"))&&(c=Ch(this,a,c),Dh(this,a,c),bh(c),Eh(c))}};
l.isActive=function(a){return(a=this.C(a))?J(a,X(this,"active")):!1};
function Fh(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?C(c):D(d,b))||(c=document.createElement("div"));var f=c;L(f,d);K(f,e);b.cardContentNode=c}return c}
function Eh(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Nd(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Gh(){Zf.call(this,"kbd-nav")}
var Hh;u(Gh,Zf);oa(Gh);l=Gh.prototype;l.register=function(){Y(this,"keydown",this.ua);$f(this,"yt-uix-kbd-nav-move-in",this.Ca);$f(this,"yt-uix-kbd-nav-move-in-to",this.vb);$f(this,"yt-uix-kbd-move-next",this.Da);$f(this,"yt-uix-kbd-nav-move-to",this.U)};
l.unregister=function(){Z(this,"keydown",this.ua);W(Hh)};
l.ua=function(a,b,c){var d=c.keyCode;if(a=F(a,X(this)))switch(d){case 13:case 32:this.Ca(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Td(a,"kbdNavMoveOut");!c;){c=F(a.parentElement,X(this));if(!c)break a;c=Td(c,"kbdNavMoveOut")}c=C(c);this.U(c);P("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&J(a,X(this,"list")))switch(d){case 40:this.Da(b,a);break;case 38:d=document.activeElement==a,a=Ih(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Jh(this,a[b]))}c.preventDefault()}};
l.Ca=function(a){var b=Td(a,"kbdNavMoveIn");b=C(b);Kh(this,a,b);this.U(b)};
l.vb=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}Kh(this,c,a);this.U(a)};
l.U=function(a){if(a)if(nc(a))a.focus();else{var b=jc(a,function(a){return gc(a)?nc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Kh(a,b,c){b&&c&&(K(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Sd&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
l.Da=function(a,b){var c=document.activeElement==b,d=Ih(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Jh(this,d[c]))};
function Jh(a,b){if(b){var c=sc(b,"LI");c&&(K(c,X(a,"highlight")),Hh=V(b,"blur",r(function(a){L(a,X(this,"highlight"));W(Hh)},a,c)))}}
function Ih(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ka(fc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Ka(La(a,function(a){return ah(a)?jc(a,function(a){return gc(a)?nc(a):!1}):!1}),function(a){return!!a})}
;function Lh(){Zf.call(this,"menu");this.f=this.b=null;this.i={};this.w={};this.o=null}
u(Lh,Zf);oa(Lh);function Mh(a){var b=Lh.A();if(J(a,X(b)))return a;var c=b.C(a);return c?c:F(a,X(b,"content"))==b.b?b.f:null}
l=Lh.prototype;l.register=function(){Y(this,"click",this.ta);Y(this,"mouseenter",this.lb);$f(this,"page-scroll",this.ob);$f(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);Nh(this,a)});
this.o=new M};
l.unregister=function(){Z(this,"click",this.ta);this.f=this.b=null;W(Ua($a(this.i)));this.i={};Ya(this.w,function(a){ec(a)},this);
this.w={};Ld(this.o);this.o=null;Lh.D.unregister.call(this)};
l.ta=function(a,b,c){a&&(b=Oh(this,a),!b.disabled&&Lf(c.target,b)&&Ph(this,a))};
l.lb=function(a,b,c){a&&J(a,X(this,"hover"))&&Lf(c.target,Oh(this,a))&&Ph(this,a,!0)};
l.ob=function(){this.b&&this.f&&Qh(this,this.f,this.b)};
function Qh(a,b,c){var d=Rh(a,b);if(d){var e=le(c);if(e instanceof Sb){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=ke(e,!0);d.style.height=ke(f,!0)}c==a.b&&(e=9,f=8,J(b,X(a,"reversed"))&&(e^=1,f^=1),J(b,X(a,"flipped"))&&(e^=4,f^=4),a=new B(0,1),d&&we(b,e,d,f,a,null,197),we(b,e,c,f,a,null,197))}
function Ph(a,b,c){Sh(a,b)&&!c?Nh(a,b):(Th(a,b),!a.b||Lf(b,a.b)?a.Pa(b):Pe(a.o,r(a.Pa,a,b)))}
l.Pa=function(a){if(a){var b=Uh(this,a);if(b){qf("yt-uix-menu-before-show",a,b);this.b?Lf(a,this.b)||Nh(this,this.f):(this.f=a,this.b=b,J(a,X(this,"sibling-content"))||(ec(b),document.body.appendChild(b)),b.style.minWidth=Oh(this,a).offsetWidth-2+"px");var c=Rh(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);L(b,X(this,"content-hidden"));Qh(this,a,b);Nd(Oh(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);P("yt-uix-menu-show",a);Vh(b);Wh(this,a);P("yt-uix-kbd-nav-move-in-to",
b);var d=r(this.Gb,this,a),e=r(this.rb,this,a);c=ta(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];J(a,X(this,"indicate-selected"))&&(d=r(this.sb,this,a),this.i[c].push(V(b,"click",d)));J(a,X(this,"hover"))&&(a=r(this.mb,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
l.mb=function(a,b){var c=Sf(b);c&&(Lf(c,Oh(this,a))||Xh(this,c)||Yh(this,a))};
l.Gb=function(a,b){var c=Sf(b);if(c){if(Xh(this,c)){var d=F(c,X(this,"content")),e=sc(c,"LI");e&&d&&hc(d,e)&&qf("yt-uix-menu-item-clicked",c);c=F(c,X(this,"close-on-select"));if(!c)return;d=Mh(c)}Nh(this,d||a)}};
function Th(a,b){if(b){var c=F(b,X(a,"content"));c&&x(Wb(X(a),c),function(a){!Lf(a,b)&&Sh(this,a)&&Yh(this,a)},a)}}
function Nh(a,b){if(b){var c=[];c.push(b);var d=Uh(a,b);d&&(d=Wb(X(a),d),d=Qa(d),c=c.concat(d),x(c,function(a){Sh(this,a)&&Yh(this,a)},a))}}
function Yh(a,b){if(b){var c=Uh(a,b);Od(Oh(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);K(c,X(a,"content-hidden"));var d=Uh(a,b);d&&Yb(d,{"aria-expanded":"false"});(d=Rh(a,b))&&d.parentNode&&ec(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.o&&a.o.H("ROOT_MENU_REMOVED"));P("yt-uix-menu-hide",b);c=ta(b).toString();W(a.i[c]);delete a.i[c]}}
l.rb=function(a,b){var c=Sf(b);c&&Zh(this,a,c)};
l.sb=function(a,b){var c=Sf(b);if(c){var d=Oh(this,a);if(d&&(c=sc(c,"LI")))if(c=qc(c).trim(),d.hasChildNodes()){var e=nh.A();(d=D(X(e,"content"),d))&&ic(d,c)}else ic(d,c)}};
function Wh(a,b){var c=Uh(a,b);if(c){x(c.children,function(a){"LI"==a.tagName&&Yb(a,{role:"menuitem"})});
Yb(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ta(c),c.id=d);(c=Oh(a,b))&&Yb(c,{"aria-controls":d})}}
function Zh(a,b,c){var d=Uh(a,b);d&&J(b,X(a,"checked"))&&(a=sc(c,"LI"))&&(a=D("yt-ui-menu-item-checked-hid",a))&&(x(Wb("yt-ui-menu-item-checked",d),function(a){Qd(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Qd(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Sh(a,b){var c=Uh(a,b);return c?!J(c,X(a,"content-hidden")):!1}
function Vh(a){x(Xb(document,"UL",null,a),function(a){a.tabIndex=0;var b=Gh.A();Nd(a,[X(b),X(b,"list")])})}
function Uh(a,b){var c=sf(b,"menu-content-id");return c&&(c=C(c))?(Nd(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:D(X(a,"content"),b)}
function Rh(a,b){var c=ta(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];x(Md(b),function(a){e.push(a+"-mask")});
Nd(d,e);a.w[c]=d}return d||null}
function Oh(a,b){return D(X(a,"trigger"),b)}
function Xh(a,b){return Lf(b,a.b)||Lf(b,a.f)}
;function $h(){Ah.call(this,"clickcard");this.b={};this.f={}}
u($h,Ah);oa($h);l=$h.prototype;l.register=function(){$h.D.register.call(this);Y(this,"click",this.qa,"target");Y(this,"click",this.pa,"close")};
l.unregister=function(){$h.D.unregister.call(this);Z(this,"click",this.qa,"target");Z(this,"click",this.pa,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
l.qa=function(a,b,c){c.preventDefault();b=sc(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=p(b)?a.getElementById(b):b;b=this.C(a);this.g(b,"disabled")||(J(b,X(this,"active"))?(this.hide(a),L(b,X(this,"active"))):(this.show(a),K(b,X(this,"active"))))}};
l.show=function(a){$h.D.show.call(this,a);var b=this.C(a),c=ta(a).toString();if(!sf(b,"click-outside-persists")){if(this.b[c])return;b=V(document,"click",r(this.ra,this,a));var d=V(window,"blur",r(this.ra,this,a));this.b[c]=[b,d]}a=V(window,"resize",r(this.Eb,this,a,void 0));this.f[c]=a};
l.hide=function(a){$h.D.hide.call(this,a);a=ta(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
l.ra=function(a,b){var c="yt-uix"+(this.v?"-"+this.v:"")+"-card",d=null;b.target&&(d=F(b.target,c)||F(Mh(b.target),c));(d=d||F(document.activeElement,c)||F(Mh(document.activeElement),c))||this.hide(a)};
l.pa=function(a){(a=F(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function ai(){Ah.call(this,"hovercard")}
u(ai,Ah);oa(ai);l=ai.prototype;l.register=function(){Y(this,"mouseenter",this.ya,"target");Y(this,"mouseleave",this.Aa,"target");Y(this,"mouseenter",this.za,"card");Y(this,"mouseleave",this.Ba,"card")};
l.unregister=function(){Z(this,"mouseenter",this.ya,"target");Z(this,"mouseleave",this.Aa,"target");Z(this,"mouseenter",this.za,"card");Z(this,"mouseleave",this.Ba,"card")};
l.ya=function(a){if(bi!=a){bi&&(this.hide(bi),bi=null);var b=r(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10);b=O(b,-1<c?c:200);wf(a,"card-timer",b.toString());bi=a;a.alt&&(wf(a,"card-alt",a.alt),a.alt="");a.title&&(wf(a,"card-title",a.title),a.title="")}};
l.Aa=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.C(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;O(r(this.pb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
l.pb=function(a){this.C(a).isCardHidable&&(this.hide(a),bi=null)};
l.za=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
l.Ba=function(a){a&&this.hide(a.cardTargetNode)};
var bi=null;function ci(a,b,c,d,e,f){this.b=a;this.B=null;this.i=D("yt-dialog-fg",this.b)||this.b;if(a=D("yt-dialog-title",this.i)){var g="yt-dialog-title-"+ta(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.R=D("yt-dialog-focus-trap",this.b);this.ha=!1;this.o=new M;this.F=[];this.F.push(Tf(this.b,r(this.wb,this),"yt-dialog-dismiss"));this.F.push(V(this.R,"focus",r(this.kb,this),!0));di(this);this.Ta=b;this.ab=c;this.Za=d;this.J=e;this.bb=f;this.w=
this.v=null}
var ei={LOADING:"loading",Lb:"content",Sb:"working"};function fi(a,b){a.V()||a.o.subscribe("post-all",b)}
function di(a){a=D("yt-dialog-fg-content",a.b);var b=[];Ya(ei,function(a){b.push("yt-dialog-show-"+a)});
Od(a,b);K(a,"yt-dialog-show-content")}
l=ci.prototype;
l.show=function(){if(!this.V()){this.B=document.activeElement;if(!this.Za){this.f||(this.f=C("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=$b(a).height,ac(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";bh(this.f)}this.va();c=gi(this);hi(c);this.v=V(document,"keydown",r(this.qb,this));c=this.b;d=of("player-added",this.va,this);wf(c,"player-ready-pubsub-key",d);this.ab&&(this.w=V(document,"click",r(this.Ab,this)));bh(this.b);this.i.setAttribute("tabindex","0");ii(this);this.J||K(document.body,"yt-dialog-active");oh(nh.A());Bh($h.A());Bh(ai.A());P("yt-ui-dialog-show-complete",this)}};
function ji(){return Ma(Wb("yt-dialog"),function(a){return ah(a)})}
l.va=function(){if(!this.bb){var a=this.b;Pd(document.body,"hide-players",!0);a&&Pd(a,"preserve-players",!0)}};
function gi(a){var b=Xb(document,"iframe",null,a.b);x(b,function(a){var b=sf(a,"onload");b&&(b=q(b))&&V(a,"load",b);if(b=sf(a,"src"))a.src=b},a);
return Qa(b)}
function hi(a){x(document.getElementsByTagName("iframe"),function(b){-1==Ja(a,b)&&K(b,"iframe-hid")})}
function ki(){x(Wb("iframe-hid"),function(a){L(a,"iframe-hid")})}
l.wb=function(a){a=a.currentTarget;a.disabled||(a=sf(a,"action")||"",this.dismiss(a))};
l.dismiss=function(a){if(!this.V()){this.o.H("pre-all");this.o.H("pre-"+a);ch(this.b);Bh($h.A());Bh(ai.A());this.i.setAttribute("tabindex","-1");ji()||(ch(this.f),this.J||L(document.body,"yt-dialog-active"),Mf(),ki());this.v&&(W(this.v),this.v=null);this.w&&(W(this.w),this.w=null);var b=this.b;if(b){var c=sf(b,"player-ready-pubsub-key");c&&(rf(c),vf(b,"player-ready-pubsub-key"))}this.o.H("post-all");P("yt-ui-dialog-hide-complete",this);"cancel"==a&&P("yt-ui-dialog-cancelled",this);this.o&&this.o.H("post-"+
a);this.B&&this.B.focus()}};
l.setTitle=function(a){ic(D("yt-dialog-title",this.b),a)};
l.qb=function(a){O(r(function(){this.Ta||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&J(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
l.Ab=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
l.V=function(){return this.ha};
l.dispose=function(){ah(this.b)&&this.dismiss("dispose");W(this.F);this.F.length=0;O(r(function(){this.B=null},this),0);
this.R=this.i=null;this.o.dispose();this.o=null;this.ha=!0};
l.kb=function(a){a.stopPropagation();ii(this)};
function ii(a){O(r(function(){this.i&&this.i.focus()},a),0)}
t("yt.ui.Dialog",ci);function li(){Zf.call(this,"overlay");this.o=this.f=this.i=this.b=null}
u(li,Zf);oa(li);l=li.prototype;l.register=function(){Y(this,"click",this.fa,"target");Y(this,"click",this.hide,"close");mi(this)};
l.unregister=function(){li.D.unregister.call(this);Z(this,"click",this.fa,"target");Z(this,"click",this.hide,"close");this.o&&(rf(this.o),this.o=null);this.f&&(W(this.f),this.f=null)};
l.fa=function(a){if(!this.b||!ah(this.b.b)){var b=this.C(a);a=ni(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new ci(a,c);this.i=b;var e=D("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Nd(e,f)}this.b.show();P("yt-uix-kbd-nav-move-to",e||a);mi(this);c||
d||(c=r(function(a){J(a.target,"yt-dialog-base")&&oi(this)},this),this.f=V(D("yt-dialog-base",a),"click",c));
this.N(b,"overlay-shown");P("yt-uix-overlay-shown",b)}}};
function mi(a){a.o||(a.o=of("yt-uix-overlay-hide",pi));a.b&&fi(a.b,function(){var a=li.A();a.i=null;a.b.dispose();a.b=null})}
function oi(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.N(b,"overlay-hidden");a.i=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function ni(a,b){var c;if(a)if(c=D("yt-dialog",a)){var d=C("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=F(b,"yt-dialog"));return c}
function qi(){var a=li.A();if(a.i)a=D("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Wb("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=F(a[b],"yt-dialog");if(ah(c)){a=a[b];break a}}a=null}return a}
l.hide=function(a){a&&a.disabled||P("yt-uix-overlay-hide")};
function pi(){oi(li.A())}
l.show=function(a){this.fa(a)};var ri={},si=[];function ti(a){a=F(a,"yt-uix-button-subscription-container");return D("yt-dialog",D("unsubscribe-confirmation-overlay-container",a))}
function ui(a,b){W(si);si.length=0;ri[b]||(ri[b]=ti(a));li.A().show(ri[b]);var c=qi();return new ze(function(a){si.push(Tf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function vi(){var a=N("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!N("SESSION_INDEX")&&!N("LOGGED_IN"))}
;function wi(){Zf.call(this,"subscription-button");this.b=this.f=!1}
u(wi,Zf);oa(wi);wi.prototype.register=function(){Y(this,"click",this.ga);ag(this,Ig,this.Fa);ag(this,Jg,this.Ea);ag(this,Kg,this.Hb);ag(this,Ng,this.Fa);ag(this,Og,this.Ea);ag(this,Pg,this.Ib);ag(this,Rg,this.yb);ag(this,Sg,this.xb)};
wi.prototype.unregister=function(){Z(this,"click",this.ga);wi.D.unregister.call(this)};
wi.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var xi={ia:"hover-enabled",Ra:"yt-uix-button-subscribe",Sa:"yt-uix-button-subscribed",Jb:"ypc-enabled",Ua:"yt-uix-button-subscription-container",Va:"yt-subscription-button-disabled-mask-container"},yi={Kb:"channel-external-id",Wa:"subscriber-count-show-when-subscribed",Xa:"subscriber-count-tooltip",Ya:"subscriber-count-title",Mb:"href",Nb:"insecure",ja:"is-subscribed",Ob:"parent-url",Pb:"clicktracking",cb:"show-unsub-confirm-dialog",Qb:"show-unsub-confirm-time-frame",eb:"style-type",ka:"subscribed-timestamp",
la:"subscription-id",Rb:"target",fb:"ypc-enabled"};l=wi.prototype;
l.ga=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=vi(),e=!(this.f&&d);c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=zi(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new Eg(b,f,e,a,d,c);Ai(this,a)?ui(a,b).then(function(){T(Mg,g)}):T(Mg,g)}else T(Hg,new Cg(b,e,d,c));
else Bi(this,a)};
l.Fa=function(a){this.M(a.b,this.Ha,!0)};
l.Ea=function(a){this.M(a.b,this.Ha,!1)};
l.Hb=function(a){this.M(a.b,this.Ia,!0,a.f)};
l.Ib=function(a){this.M(a.b,this.Ia,!1)};
l.yb=function(a){this.M(a.b,this.jb)};
l.xb=function(a){this.M(a.b,this.ib)};
l.Ia=function(a,b,c){b?(wf(a,yi.ja,"true"),c&&wf(a,yi.la,c),this.g(a,yi.cb)&&(b=new Jd,wf(a,yi.ka,(b.getTime()/1E3).toString()))):(vf(a,yi.ja),vf(a,yi.ka),vf(a,yi.la));Ci(this,a)};
function zi(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
l.Ha=function(a,b){var c=F(a,xi.Ua);Pd(c,xi.Va,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Ci(a,b){var c=a.g(b,yi.eb),d=!!a.g(b,"is-subscribed");c="-"+c;var e=xi.Sa+c;Pd(b,xi.Ra+c,!d);Pd(b,e,d);a.g(b,yi.Xa)&&!a.g(b,yi.Wa)&&(c=X(dh.A()),Pd(b,c,!d),b.title=d?"":a.g(b,yi.Ya));d?O(function(){K(b,xi.ia)},1E3):L(b,xi.ia)}
l.jb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(K(a,"ypc-enabled"),wf(a,yi.fb,"true"))};
l.ib=function(a){this.g(a,"ypc-enabled")&&(L(a,"ypc-enabled"),vf(a,"ypc-enabled"))};
function Di(a,b){return Ka(Wb(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
l.gb=function(a,b,c){var d=Ta(arguments,2);x(a,function(a){b.apply(this,Pa(a,d))},this)};
l.M=function(a,b,c){var d=Di(this,a);this.gb.apply(this,Pa([d],Ta(arguments,1)))};
function Bi(a,b){var c=r(function(a){a.discoverable_subscriptions&&gf("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ga(b)},a);
lh(c)}
function Ai(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new Jd).getTime()<1E3*(c+600))?!0:!1}
;function Ei(a){this.b=a;this.G=null;N("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Fi(this),V(this.b,"mouseover",r(this.o,this)),V(this.b,"mouseout",r(this.Z,this)),V(this.b,"click",r(this.Z,this)),U(Kg,ya(this.f,!0),this),U(Pg,ya(this.f,!1),this),Gi(this))}
function Fi(a){var b={url:N("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=r(a.i,a);gg().open(b,a)}
function Gi(a){vi()||of("LOGGED_IN",function(){this.G&&(this.Z(),this.G.close(),this.G=null,Fi(this))},a)}
Ei.prototype.i=function(a){this.G=a;a=wi.A().i(this.b);this.f(a)};
Ei.prototype.o=function(){this.G&&this.G.restyle({show:!0})};
Ei.prototype.Z=function(){this.G&&this.G.restyle({show:!1})};
Ei.prototype.f=function(a){if(this.G){a={isSubscribed:a};try{this.G.send("msg-hovercard-subscription",a,void 0,q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Hi(a){if(qa(a))return Ii(a);if(sa(a)&&!ra(a)&&!(sa(a)&&0<a.nodeType))return Ji(a);try{return m.JSON.stringify(a),a}catch(b){}}
function Ji(a){return Za(a,function(a){return Hi(a)})}
function Ii(a){return La(a,function(a){return Hi(a)})}
;function Ki(a){this.f=null;this.b=a;a=hg();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^za()).toString(36);a&&(jg({role:"ytsubscribe",iframe:a,data:{id:b}}),ig(r(function(a){this.f=a},this),this.b))}
Ki.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=r(this.register,this,a,b,this.b);ig(c,this.b)}};
Ki.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=r(this.send,this,a,b);ig(c,this.b)}};function Li(){this.b=this.f=null}
function Mi(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||Ni(a),e=hg();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Li.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function Ni(a){a.f||(a.f=q("gapi.iframes.makeWhiteListIframesFilter")(Wg));return a.f}
;function Oi(){this.b=new Li;this.i=!1;this.f={}}
function Pi(a){x(Xg,function(a){if(!this.f[a.toString()]){var b=U(a,function(b){var c=b?b.Db():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:Hi(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
Oi.prototype.o=function(a,b){var c=Na(Yg,function(b){return b.toString()==a});
if(c&&(!c.T||b)){if(c.T)try{var d=xf(c.T,b)}catch(f){return}var e=this.f[c.toString()];e?Ef(e,c,d):T(c,d)}};
Oi.prototype.v=function(a){Qi(this)&&Mi(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Oi.prototype.w=function(a){Qi(this)&&Mi(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Qi(a){return a.i||!!N("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function Ri(){fg(function(){var a=le(C("yt-subscribe"));a={width:a.width,height:a.height};var b=Si;gg().ready(a,null,b)})}
function Si(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;b=b.notificationsPipeSupported;var c=C("yt-subscribe"),d=wi.A();c=D(X(d),c);a&&c&&(wi.A(),wf(c,"parent-url",a));Ti()?(wi.A().b=!0,b&&(wi.A().f=!0)):c&&new Ei(c);a=new Oi;U(Kg,a.v,a);U(Pg,a.w,a);if(Ti()){b=a.b;b.b=new Ki(Ni(b));Pi(a);b=a.b;c=r(a.o,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",ya(b.i,c))}catch(e){}a.i=!0}}}
function Ti(){var a=hg().getOrigin();return Oa(Wg,a)}
;function Ui(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?rg(c,void 0,"GET","",void 0):yg(c))}}
;function Vi(a){Q.call(this,1,arguments);this.b=a}
u(Vi,Q);function Wi(a,b){Q.call(this,2,arguments);this.f=a;this.b=b}
u(Wi,Q);function Xi(a,b,c,d){Q.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
u(Xi,Q);function Yi(a,b){Q.call(this,1,arguments);this.f=a;this.b=b||null}
u(Yi,Q);function Zi(a){Q.call(this,1,arguments)}
u(Zi,Q);var $i=new R("ypc-core-load",Vi),aj=new R("ypc-guide-sync-success",Wi),bj=new R("ypc-purchase-success",Xi),cj=new R("ypc-subscription-cancel",Zi),dj=new R("ypc-subscription-cancel-success",Yi),ej=new R("ypc-init-subscription",Zi);var fj=!1,gj=[];function hj(a){a.b?fj?T(Lg,a):T($i,new Vi(function(){T(ej,new Zi(a.b))})):ij(a.f,a.o,a.i,a.source)}
function jj(a){a.b?fj?T(Qg,a):T($i,new Vi(function(){T(cj,new Zi(a.b))})):kj(a.f,a.v,a.o,a.i,a.source)}
function lj(a){mj(Qa(a.b))}
function nj(a){oj(Qa(a.b))}
function pj(a){qj(a.i,a.f,a.b)}
function rj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Kg,new Dg(b,c,a.b.channelInfo))}
function sj(a){var b=a.b;Ya(a.f,function(a,d){T(Kg,new Dg(d,a,b[d]))})}
function tj(a){T(Pg,new Ag(a.f.itemId));a.b&&a.b.length&&(uj(a.b,Pg),uj(a.b,Rg))}
function ij(a,b,c,d){var e=new Ag(a);T(Ig,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=N("PLAYBACK_ID"))&&(c.plid=d);(d=N("EVENT_ID"))&&(c.ei=d);b&&vj(b,c);qg("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ka:f,L:c,O:function(b,c){var d=c.response;T(Kg,new Dg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&P("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Ui(d.actions)},
ea:function(){T(Jg,e)}})}
function kj(a,b,c,d,e){var f=new Ag(a);T(Ng,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=N("PLAYBACK_ID"))&&(d.plid=a);(a=N("EVENT_ID"))&&(d.ei=a);c&&vj(c,d);qg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ka:g,L:d,O:function(a,b){var c=b.response;T(Pg,f);c.actions&&Ui(c.actions)},
ea:function(){T(Og,f)}})}
function qj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Bg(a,b,c);qg("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",L:d,onError:function(){T(Vg,e)},
O:function(){T(Ug,e)}})}}
function mj(a){if(a.length){var b=Sa(a,0,40);T("subscription-batch-subscribe-loading");uj(b,Ig);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");uj(b,Jg)};
qg("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",L:c,O:function(c,f){d();var e=f.response,h=e.id;if("array"==pa(h)&&h.length==b.length){var k=e.channel_info_map;x(h,function(a,c){var d=b[c];T(Kg,new Dg(d,a,k[d]))});
a.length?mj(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function oj(a){if(a.length){var b=Sa(a,0,40);T("subscription-batch-unsubscribe-loading");uj(b,Ng);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");uj(b,Og)};
qg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",L:c,O:function(){d();uj(b,Pg);a.length&&oj(a)},
onError:function(){d()}})}}
function uj(a,b){x(a,function(a){T(b,new Ag(a))})}
function vj(a,b){var c=dg(a),d;for(d in c)b[d]=c[d]}
;t("yt.setConfig",gf);t("yt.config.set",gf);t("ytbin.www.subscribeembed.init",function(){fj=!0;gj.push(U(Hg,hj),U(Mg,jj));fj||gj.push(U(Lg,hj),U(Qg,jj),U(Fg,lj),U(Gg,nj),U(Tg,pj),U(bj,rj),U(dj,tj),U(aj,sj));var a=wi.A(),b=X(a);b in cg||(a.register(),$f(a,"yt-uix-init-"+b,a.init),$f(a,"yt-uix-dispose-"+b,a.dispose),cg[b]=a);Ri()});}).call(this);
