// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shCore.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
var XRegExp;if(XRegExp=XRegExp||function(e){"use strict";function t(e,t,n){var r;for(r in c.prototype)c.prototype.hasOwnProperty(r)&&(e[r]=c.prototype[r]);return e.xregexp={captureNames:t,isNative:!!n},e}function n(e){return(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":"")}function r(e,r,i){if(!c.isRegExp(e))throw new TypeError("type RegExp expected");var a=p.replace.call(n(e)+(r||""),E,"");return i&&(a=p.replace.call(a,RegExp("["+i+"]+","g"),"")),e=e.xregexp&&!e.xregexp.isNative?t(c(e.source,a),e.xregexp.captureNames?e.xregexp.captureNames.slice(0):null):t(RegExp(e.source,a),null,!0)}function i(e,t){var n=e.length;if(Array.prototype.lastIndexOf)return e.lastIndexOf(t);for(;n--;)if(e[n]===t)return n;return-1}function a(e,t){return Object.prototype.toString.call(e).toLowerCase()==="[object "+t+"]"}function l(e){return e=e||{},"all"===e||e.all?e={natives:!0,extensibility:!0}:a(e,"string")&&(e=c.forEach(e,/[^\s,]+/,function(e){this[e]=!0},{})),e}function s(e,t,n,r){var i,a,l=m.length,s=null;R=!0;try{for(;l--;)if(a=m[l],!("all"!==a.scope&&a.scope!==n||a.trigger&&!a.trigger.call(r))&&(a.pattern.lastIndex=t,i=d.exec.call(a.pattern,e),i&&i.index===t)){s={output:a.handler.call(r,i,n),match:i};break}}catch(o){throw o}finally{R=!1}return s}function o(e){c.addToken=g[e?"on":"off"],f.extensibility=e}function u(e){RegExp.prototype.exec=(e?d:p).exec,RegExp.prototype.test=(e?d:p).test,String.prototype.match=(e?d:p).match,String.prototype.replace=(e?d:p).replace,String.prototype.split=(e?d:p).split,f.natives=e}var c,g,h,f={natives:!1,extensibility:!1},p={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},d={},x={},m=[],v="default",b="class",y={"default":/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,"class":/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/},w=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,E=/([\s\S])(?=[\s\S]*\1)/g,N=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,S=p.exec.call(/()??/,"")[1]===e,H=RegExp.prototype.sticky!==e,R=!1,T="gim"+(H?"y":"");return c=function(n,i){if(c.isRegExp(n)){if(i!==e)throw new TypeError("can't supply flags when constructing one RegExp from another");return r(n)}if(R)throw Error("can't call the XRegExp constructor within token definition functions");var a,l,o,u=[],g=v,h={hasNamedCapture:!1,captureNames:[],hasFlag:function(e){return i.indexOf(e)>-1}},f=0;if(n=n===e?"":n+"",i=i===e?"":i+"",p.match.call(i,E))throw new SyntaxError("invalid duplicate regular expression flag");for(n=p.replace.call(n,/^\(\?([\w$]+)\)/,function(e,t){if(p.test.call(/[gy]/,t))throw new SyntaxError("can't use flag g or y in mode modifier");return i=p.replace.call(i+t,E,""),""}),c.forEach(i,/[\s\S]/,function(e){if(0>T.indexOf(e[0]))throw new SyntaxError("invalid regular expression flag "+e[0])});n.length>f;)a=s(n,f,g,h),a?(u.push(a.output),f+=a.match[0].length||1):(l=p.exec.call(y[g],n.slice(f)),l?(u.push(l[0]),f+=l[0].length):(o=n.charAt(f),"["===o?g=b:"]"===o&&(g=v),u.push(o),++f));return t(RegExp(u.join(""),p.replace.call(i,/[^gimy]+/g,"")),h.hasNamedCapture?h.captureNames:null)},g={on:function(e,t,n){n=n||{},e&&m.push({pattern:r(e,"g"+(H?"y":"")),handler:t,scope:n.scope||v,trigger:n.trigger||null}),n.customFlags&&(T=p.replace.call(T+n.customFlags,E,""))},off:function(){throw Error("extensibility must be installed before using addToken")}},c.addToken=g.off,c.cache=function(e,t){var n=e+"/"+(t||"");return x[n]||(x[n]=c(e,t))},c.escape=function(e){return p.replace.call(e,/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},c.exec=function(e,t,n,i){var a,l=r(t,"g"+(i&&H?"y":""),i===!1?"y":"");return l.lastIndex=n=n||0,a=d.exec.call(l,e),i&&a&&a.index!==n&&(a=null),t.global&&(t.lastIndex=a?l.lastIndex:0),a},c.forEach=function(e,t,n,r){for(var i,a=0,l=-1;i=c.exec(e,t,a);)n.call(r,i,++l,e,t),a=i.index+(i[0].length||1);return r},c.globalize=function(e){return r(e,"g")},c.install=function(e){e=l(e),!f.natives&&e.natives&&u(!0),!f.extensibility&&e.extensibility&&o(!0)},c.isInstalled=function(e){return!!f[e]},c.isRegExp=function(e){return a(e,"regexp")},c.matchChain=function(e,t){return function n(e,r){var i,a=t[r].regex?t[r]:{regex:t[r]},l=[],s=function(e){l.push(a.backref?e[a.backref]||"":e[0])};for(i=0;e.length>i;++i)c.forEach(e[i],a.regex,s);return r!==t.length-1&&l.length?n(l,r+1):l}([e],0)},c.replace=function(t,n,i,a){var l,s=c.isRegExp(n),o=n;return s?(a===e&&n.global&&(a="all"),o=r(n,"all"===a?"g":"","all"===a?"":"g")):"all"===a&&(o=RegExp(c.escape(n+""),"g")),l=d.replace.call(t+"",o,i),s&&n.global&&(n.lastIndex=0),l},c.split=function(e,t,n){return d.split.call(e,t,n)},c.test=function(e,t,n,r){return!!c.exec(e,t,n,r)},c.uninstall=function(e){e=l(e),f.natives&&e.natives&&u(!1),f.extensibility&&e.extensibility&&o(!1)},c.union=function(e,t){var n,r,i,l,s=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,o=0,u=function(e,t,i){var a=r[o-n];if(t){if(++o,a)return"(?<"+a+">"}else if(i)return"\\"+(+i+n);return e},g=[];if(!a(e,"array")||!e.length)throw new TypeError("patterns must be a nonempty array");for(l=0;e.length>l;++l)i=e[l],c.isRegExp(i)?(n=o,r=i.xregexp&&i.xregexp.captureNames||[],g.push(c(i.source).source.replace(s,u))):g.push(c.escape(i));return c(g.join("|"),t)},c.version="2.0.0",d.exec=function(t){var r,a,l,s,o;if(this.global||(s=this.lastIndex),r=p.exec.apply(this,arguments)){if(!S&&r.length>1&&i(r,"")>-1&&(l=RegExp(this.source,p.replace.call(n(this),"g","")),p.replace.call((t+"").slice(r.index),l,function(){var t;for(t=1;arguments.length-2>t;++t)arguments[t]===e&&(r[t]=e)})),this.xregexp&&this.xregexp.captureNames)for(o=1;r.length>o;++o)a=this.xregexp.captureNames[o-1],a&&(r[a]=r[o]);this.global&&!r[0].length&&this.lastIndex>r.index&&(this.lastIndex=r.index)}return this.global||(this.lastIndex=s),r},d.test=function(e){return!!d.exec.call(this,e)},d.match=function(e){if(c.isRegExp(e)){if(e.global){var t=p.match.apply(this,arguments);return e.lastIndex=0,t}}else e=RegExp(e);return d.exec.call(e,this)},d.replace=function(e,t){var n,r,l,s,o=c.isRegExp(e);return o?(e.xregexp&&(n=e.xregexp.captureNames),e.global||(s=e.lastIndex)):e+="",a(t,"function")?r=p.replace.call(this+"",e,function(){var r,i=arguments;if(n)for(i[0]=new String(i[0]),r=0;n.length>r;++r)n[r]&&(i[0][n[r]]=i[r+1]);return o&&e.global&&(e.lastIndex=i[i.length-2]+i[0].length),t.apply(null,i)}):(l=this+"",r=p.replace.call(l,e,function(){var e=arguments;return p.replace.call(t+"",w,function(t,r,a){var l;if(r){if(l=+r,e.length-3>=l)return e[l]||"";if(l=n?i(n,r):-1,0>l)throw new SyntaxError("backreference to undefined group "+t);return e[l+1]||""}if("$"===a)return"$";if("&"===a||0===+a)return e[0];if("`"===a)return e[e.length-1].slice(0,e[e.length-2]);if("'"===a)return e[e.length-1].slice(e[e.length-2]+e[0].length);if(a=+a,!isNaN(a)){if(a>e.length-3)throw new SyntaxError("backreference to undefined group "+t);return e[a]||""}throw new SyntaxError("invalid token "+t)})})),o&&(e.lastIndex=e.global?0:s),r},d.split=function(t,n){if(!c.isRegExp(t))return p.split.apply(this,arguments);var r,i=this+"",a=t.lastIndex,l=[],s=0;return n=(n===e?-1:n)>>>0,c.forEach(i,t,function(e){e.index+e[0].length>s&&(l.push(i.slice(s,e.index)),e.length>1&&e.index<i.length&&Array.prototype.push.apply(l,e.slice(1)),r=e[0].length,s=e.index+r)}),s===i.length?(!p.test.call(t,"")||r)&&l.push(""):l.push(i.slice(s)),t.lastIndex=a,l.length>n?l.slice(0,n):l},h=g.on,h(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/,function(e,t){if("B"===e[1]&&t===v)return e[0];throw new SyntaxError("invalid escape "+e[0])},{scope:"all"}),h(/\[(\^?)]/,function(e){return e[1]?"[\\s\\S]":"\\b\\B"}),h(/(?:\(\?#[^)]*\))+/,function(e){return p.test.call(N,e.input.slice(e.index+e[0].length))?"":"(?:)"}),h(/\\k<([\w$]+)>/,function(e){var t=isNaN(e[1])?i(this.captureNames,e[1])+1:+e[1],n=e.index+e[0].length;if(!t||t>this.captureNames.length)throw new SyntaxError("backreference to undefined group "+e[0]);return"\\"+t+(n===e.input.length||isNaN(e.input.charAt(n))?"":"(?:)")}),h(/(?:\s+|#.*)+/,function(e){return p.test.call(N,e.input.slice(e.index+e[0].length))?"":"(?:)"},{trigger:function(){return this.hasFlag("x")},customFlags:"x"}),h(/\./,function(){return"[\\s\\S]"},{trigger:function(){return this.hasFlag("s")},customFlags:"s"}),h(/\(\?P?<([\w$]+)>/,function(e){if(!isNaN(e[1]))throw new SyntaxError("can't use integer as capture name "+e[0]);return this.captureNames.push(e[1]),this.hasNamedCapture=!0,"("}),h(/\\(\d+)/,function(e,t){if(!(t===v&&/^[1-9]/.test(e[1])&&+e[1]<=this.captureNames.length)&&"0"!==e[1])throw new SyntaxError("can't use octal escape or backreference to undefined group "+e[0]);return e[0]},{scope:"all"}),h(/\((?!\?)/,function(){return this.hasFlag("n")?"(?:":(this.captureNames.push(null),"(")},{customFlags:"n"}),"undefined"!=typeof exports&&(exports.XRegExp=c),c}(),SyntaxHighlighter===void 0)var SyntaxHighlighter=function(){function e(e){return document.createElement("div").appendChild(document.createTextNode(e)).parentNode.innerHTML.replace(/"/g,"&quot;")}function t(e,t){return-1!=e.className.indexOf(t)}function n(e,n){t(e,n)||(e.className+=" "+n)}function r(e,t){e.className=e.className.replace(t,"")}function i(e){for(var t=[],n=0,r=e.length;r>n;n++)t.push(e[n]);return t}function a(e){return e.split(/\r?\n/)}function l(e){var t="highlighter_";return 0==e.indexOf(t)?e:t+e}function s(e){return B.vars.highlighters[l(e)]}function o(e){return document.getElementById(l(e))}function u(e){B.vars.highlighters[l(e.id)]=e}function c(e,t,n){if(null==e)return null;var r,i,a=1!=n?e.childNodes:[e.parentNode],l={"#":"id",".":"className"}[t.substr(0,1)]||"nodeName";if(r="nodeName"!=l?t.substr(1):t.toUpperCase(),-1!=(e[l]||"").indexOf(r))return e;for(var s=0,o=a.length;a&&o>s&&null==i;s++)i=c(a[s],t,n);return i}function g(e,t){return c(e,t,!0)}function h(e,t,n){n=Math.max(n||0,0);for(var r=n,i=e.length;i>r;r++)if(e[r]==t)return r;return-1}function f(e){return(e||"")+(""+Math.round(1e6*Math.random()))}function p(e,t){var n,r={};for(n in e)r[n]=e[n];for(n in t)r[n]=t[n];return r}function d(e){var t={"true":!0,"false":!1}[e];return null==t?e:t}function x(e,t,n,r,i){var a=(screen.width-n)/2,l=(screen.height-r)/2;i+=", left="+a+", top="+l+", width="+n+", height="+r,i=i.replace(/^,/,"");var s=window.open(e,t,i);return s.focus(),s}function m(e,t,n,r){function i(e){e=e||window.event,e.target||(e.target=e.srcElement,e.preventDefault=function(){this.returnValue=!1}),n.call(r||window,e)}e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i,!1)}function v(e){window.alert(B.config.strings.alert+e)}function b(e,t){var n=B.vars.discoveredBrushes,r=null;if(null==n){n={};for(var i in B.brushes){var a=B.brushes[i],l=a.aliases;if(null!=l){a.brushName=i.toLowerCase();for(var s=0,o=l.length;o>s;s++)n[l[s]]=i}}B.vars.discoveredBrushes=n}return r=B.brushes[n[e]],null==r&&t&&v(B.config.strings.noBrush+e),r}function y(e,t){for(var n=a(e),r=0,i=n.length;i>r;r++)n[r]=t(n[r],r);return n.join("\r\n")}function w(e){return e.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"")}function E(e){for(var t,n={},r=XRegExp("^\\[(?<values>(.*?))\\]$"),i=0,a=XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w%#-]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?","g");null!=(t=XRegExp.exec(e,a,i));){var l=t.value.replace(/^['"]|['"]$/g,"");if(null!=l&&r.test(l)){var s=XRegExp.exec(l,r);l=s.values.length>0?s.values.split(/\s*,\s*/):[]}n[t.name]=l,i=t.index+t[0].length}return n}function N(e,t){return null==e||0==e.length||"\n"==e?e:(e=e.replace(/</g,"&lt;"),e=e.replace(/ {2,}/g,function(e){for(var t="",n=0,r=e.length;r-1>n;n++)t+=B.config.space;return t+" "}),null!=t&&(e=y(e,function(e){if(0==e.length)return"";var n="";return e=e.replace(/^(&nbsp;| )+/,function(e){return n=e,""}),0==e.length?n:n+'<code class="'+t+'">'+e+"</code>"})),e)}function S(e,t){for(var n=""+e;t>n.length;)n="0"+n;return n}function H(e,t){for(var n="",r=0;t>r;r++)n+=" ";return e.replace(/\t/g,n)}function R(e,t){function n(e,t,n){return e.substr(0,t)+i.substr(0,n)+e.substr(t+1,e.length)}for(var r=(a(e),"	"),i="",l=0;50>l;l++)i+="                    ";return e=y(e,function(e){if(-1==e.indexOf(r))return e;for(var i=0;-1!=(i=e.indexOf(r));){var a=t-i%t;e=n(e,i,a)}return e})}function T(e){var t=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi;return 1==B.config.bloggerMode&&(e=e.replace(t,"\n")),1==B.config.stripBrs&&(e=e.replace(t,"")),e}function C(e){return e.replace(/^\s+|\s+$/g,"")}function P(e){for(var t=a(T(e)),n=/^\s*/,r=1e3,i=0,l=t.length;l>i&&r>0;i++){var s=t[i];if(0!=C(s).length){var o=n.exec(s);if(null==o)return e;r=Math.min(o[0].length,r)}}if(r>0)for(var i=0,l=t.length;l>i;i++)t[i]=t[i].substr(r);return t.join("\n")}function k(e,t){return e.index<t.index?-1:e.index>t.index?1:e.length<t.length?-1:e.length>t.length?1:0}function L(e,t){function n(e){return e[0]}var r=null,i=[],a=t.func?t.func:n;for(pos=0;null!=(r=XRegExp.exec(e,t.regex,pos));){var l=a(r,t);"string"==typeof l&&(l=[new B.Match(l,r.index,t.css)]),i=i.concat(l),pos=r.index+r[0].length}return i}function I(e){var t=/(.*)((&gt;|&lt;).*)/;return e.replace(B.regexLib.url,function(e){var n="",r=null;return(r=t.exec(e))&&(e=r[1],n=r[2]),'<a href="'+e+'">'+e+"</a>"+n})}function A(){for(var e=document.getElementsByTagName("script"),t=[],n=0,r=e.length;r>n;n++)"syntaxhighlighter"==e[n].type&&t.push(e[n]);return t}function M(e){var t="<![CDATA[",n="]]>",r=C(e),i=!1,a=t.length,l=n.length;0==r.indexOf(t)&&(r=r.substring(a),i=!0);var s=r.length;return r.indexOf(n)==s-l&&(r=r.substring(0,s-l),i=!0),i?r:e}function X(e){var t,i=e.target,a=g(i,".syntaxhighlighter"),l=g(i,".container"),o=document.createElement("textarea");if(l&&a&&!c(l,"textarea")){t=s(a.id),n(a,"source");for(var u=l.childNodes,h=[],f=0,p=u.length;p>f;f++)h.push(u[f].innerText||u[f].textContent);h=h.join("\r"),h=h.replace(/\u00a0/g," "),o.appendChild(document.createTextNode(h)),l.appendChild(o),o.focus(),o.select(),m(o,"blur",function(){o.parentNode.removeChild(o),r(a,"source")})}}"undefined"!=typeof require&&XRegExp===void 0&&(XRegExp=require("xregexp").XRegExp);var B={defaults:{"class-name":"","first-line":1,"pad-line-numbers":!1,highlight:null,title:null,"smart-tabs":!0,"tab-size":4,gutter:!0,toolbar:!0,"quick-code":!0,collapse:!1,"auto-links":!0,light:!1,unindent:!0,"html-script":!1},config:{space:"&nbsp;",useScriptTags:!0,bloggerMode:!1,stripBrs:!1,tagName:"pre",strings:{expandSource:"expand source",help:"?",alert:"SyntaxHighlighter\n\n",noBrush:"Can't find brush for: ",brushNotHtmlScript:"Brush wasn't configured for html-script option: ",aboutDialog:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:1.5em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:3em;"><div>version 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)</div><div><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" style="color:#005896">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2013 Alex Gorbatchev.</div></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#005896">donate</a> to <br/>keep development active!</div></div></body></html>'}},vars:{discoveredBrushes:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:XRegExp("/\\*.*?\\*/","gs"),singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"([^\\"\n]|\\.)*"/g,singleQuotedString:/'([^\\'\n]|\\.)*'/g,multiLineDoubleQuotedString:XRegExp('"([^\\\\"]|\\\\.)*"',"gs"),multiLineSingleQuotedString:XRegExp("'([^\\\\']|\\\\.)*'","gs"),xmlComments:XRegExp("(&lt;|<)!--.*?--(&gt;|>)","gs"),url:/\w+:\/\/[\w-.\/?%&=:@;#]*/g,phpScriptTags:{left:/(&lt;|<)\?(?:=|php)?/g,right:/\?(&gt;|>)/g,eof:!0},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{getHtml:function(e){function t(e,t){return B.toolbar.getButtonHtml(e,t,B.config.strings[t])}for(var n='<div class="toolbar">',r=B.toolbar.items,i=r.list,a=0,l=i.length;l>a;a++)n+=(r[i[a]].getHtml||t)(e,i[a]);return n+="</div>"},getButtonHtml:function(t,n,r){return n=e(n),'<span><a href="#" class="toolbar_item command_'+n+" "+n+'">'+e(r)+"</a></span>"},handler:function(e){function t(e){var t=RegExp(e+"_(\\w+)"),n=t.exec(r);return n?n[1]:null}var n=e.target,r=n.className||"",i=s(g(n,".syntaxhighlighter").id),a=t("command");i&&a&&B.toolbar.items[a].execute(i),e.preventDefault()},items:{list:["expandSource","help"],expandSource:{getHtml:function(e){if(1!=e.getParam("collapse"))return"";var t=e.getParam("title");return B.toolbar.getButtonHtml(e,"expandSource",t?t:B.config.strings.expandSource)},execute:function(e){var t=o(e.id);r(t,"collapsed")}},help:{execute:function(){var e=x("","_blank",500,250,"scrollbars=0"),t=e.document;t.write(B.config.strings.aboutDialog),t.close(),e.focus()}}}},findElements:function(e,t){var n=t?[t]:i(document.getElementsByTagName(B.config.tagName)),r=B.config,a=[];if(r.useScriptTags&&(n=n.concat(A())),0===n.length)return a;for(var l=0,s=n.length;s>l;l++){var o={target:n[l],params:p(e,E(n[l].className))};null!=o.params.brush&&a.push(o)}return a},highlight:function(e,t){var n=this.findElements(e,t),r="innerHTML",i=null,a=B.config;if(0!==n.length)for(var l=0,s=n.length;s>l;l++){var o,t=n[l],u=t.target,c=t.params,g=c.brush;if(null!=g){if("true"==c["html-script"]||1==B.defaults["html-script"])i=new B.HtmlScript(g),g="htmlscript";else{var h=b(g);if(!h)continue;i=new h}o=u[r],a.useScriptTags&&(o=M(o)),""!=(u.title||"")&&(c.title=u.title),c.brush=g,i.init(c),t=i.getDiv(o),""!=(u.id||"")&&(t.id=u.id),u.parentNode.replaceChild(t,u)}}},all:function(e){m(window,"load",function(){B.highlight(e)})}};return B.Match=function(e,t,n){this.value=e,this.index=t,this.length=e.length,this.css=n,this.brushName=null},B.Match.prototype.toString=function(){return this.value},B.HtmlScript=function(e){function t(e,t){for(var n=0,r=e.length;r>n;n++)e[n].index+=t}function n(e){for(var n,a=e.code,l=[],s=r.regexList,o=e.index+e.left.length,u=r.htmlScript,c=0,g=s.length;g>c;c++)n=L(a,s[c]),t(n,o),l=l.concat(n);null!=u.left&&null!=e.left&&(n=L(e.left,u.left),t(n,e.index),l=l.concat(n)),null!=u.right&&null!=e.right&&(n=L(e.right,u.right),t(n,e.index+e[0].lastIndexOf(e.right)),l=l.concat(n));for(var h=0,g=l.length;g>h;h++)l[h].brushName=i.brushName;return l}var r,i=b(e),a=new B.brushes.Xml,l=this,s="getDiv getHtml init".split(" ");if(null!=i){r=new i;for(var o=0,u=s.length;u>o;o++)(function(){var e=s[o];l[e]=function(){return a[e].apply(a,arguments)}})();return null==r.htmlScript?(v(B.config.strings.brushNotHtmlScript+e),void 0):(a.regexList.push({regex:r.htmlScript.code,func:n}),void 0)}},B.Highlighter=function(){},B.Highlighter.prototype={getParam:function(e,t){var n=this.params[e];return d(null==n?t:n)},create:function(e){return document.createElement(e)},findMatches:function(e,t){var n=[];if(null!=e)for(var r=0,i=e.length;i>r;r++)"object"==typeof e[r]&&(n=n.concat(L(t,e[r])));return this.removeNestedMatches(n.sort(k))},removeNestedMatches:function(e){for(var t=0,n=e.length;n>t;t++)if(null!==e[t])for(var r=e[t],i=r.index+r.length,a=t+1,n=e.length;n>a&&null!==e[t];a++){var l=e[a];if(null!==l){if(l.index>i)break;l.index==r.index&&l.length>r.length?e[t]=null:l.index>=r.index&&i>l.index&&(e[a]=null)}}return e},figureOutLineNumbers:function(e){var t=[],n=parseInt(this.getParam("first-line"));return y(e,function(e,r){t.push(r+n)}),t},isLineHighlighted:function(e){var t=this.getParam("highlight",[]);return"object"!=typeof t&&null==t.push&&(t=[t]),-1!=h(t,""+e)},getLineHtml:function(e,t,n){var r=["line","number"+t,"index"+e,"alt"+(""+(0==t%2?1:2))];return this.isLineHighlighted(t)&&r.push("highlighted"),0==t&&r.push("break"),'<div class="'+r.join(" ")+'">'+n+"</div>"},getLineNumbersHtml:function(e,t){var n="",r=a(e).length,i=parseInt(this.getParam("first-line")),l=this.getParam("pad-line-numbers");1==l?l=(""+(i+r-1)).length:1==isNaN(l)&&(l=0);for(var s=0;r>s;s++){var o=t?t[s]:i+s,e=0==o?B.config.space:S(o,l);n+=this.getLineHtml(s,o,e)}return n},getCodeLinesHtml:function(e,t){e=C(e);for(var n=a(e),r=(this.getParam("pad-line-numbers"),parseInt(this.getParam("first-line"))),e="",i=this.getParam("brush"),l=0,s=n.length;s>l;l++){var o=n[l],u=/^(&nbsp;|\s)+/.exec(o),c=null,g=t?t[l]:r+l;null!=u&&(c=""+u[0],o=o.substr(c.length),c=c.replace(" ",B.config.space)),o=C(o),0==o.length&&(o=B.config.space),e+=this.getLineHtml(l,g,(null!=c?'<code class="'+i+' spaces">'+c+"</code>":"")+o)}return e},getTitleHtml:function(t){return t?"<caption>"+e(t)+"</caption>":""},getMatchesHtml:function(e,t){function n(e){var t=e?e.brushName||a:a;return t?t+" ":""}for(var r=0,i="",a=this.getParam("brush",""),l=0,s=t.length;s>l;l++){var o,u=t[l];null!==u&&0!==u.length&&(o=n(u),i+=N(e.substr(r,u.index-r),o+"plain")+N(u.value,o+u.css),r=u.index+u.length+(u.offset||0))}return i+=N(e.substr(r),n()+"plain")},getHtml:function(t){var n,r,i,a="",s=["syntaxhighlighter"];return 1==this.getParam("light")&&(this.params.toolbar=this.params.gutter=!1),className="syntaxhighlighter",1==this.getParam("collapse")&&s.push("collapsed"),0==(gutter=this.getParam("gutter"))&&s.push("nogutter"),s.push(this.getParam("class-name")),s.push(this.getParam("brush")),t=w(t).replace(/\r/g," "),n=this.getParam("tab-size"),t=1==this.getParam("smart-tabs")?R(t,n):H(t,n),this.getParam("unindent")&&(t=P(t)),gutter&&(i=this.figureOutLineNumbers(t)),r=this.findMatches(this.regexList,t),a=this.getMatchesHtml(t,r),a=this.getCodeLinesHtml(a,i),this.getParam("auto-links")&&(a=I(a)),"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.match(/MSIE/)&&s.push("ie"),a='<div id="'+l(this.id)+'" class="'+e(s.join(" "))+'">'+(this.getParam("toolbar")?B.toolbar.getHtml(this):"")+'<table border="0" cellpadding="0" cellspacing="0">'+this.getTitleHtml(this.getParam("title"))+"<tbody>"+"<tr>"+(gutter?'<td class="gutter">'+this.getLineNumbersHtml(t)+"</td>":"")+'<td class="code">'+'<div class="container">'+a+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>"},getDiv:function(e){null===e&&(e=""),this.code=e;var t=this.create("div");return t.innerHTML=this.getHtml(e),this.getParam("toolbar")&&m(c(t,".toolbar"),"click",B.toolbar.handler),this.getParam("quick-code")&&m(c(t,".code"),"dblclick",X),t},init:function(e){this.id=f(),u(this),this.params=p(B.defaults,e||{}),1==this.getParam("light")&&(this.params.toolbar=this.params.gutter=!1)},getKeywords:function(e){return e=e.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|"),"\\b(?:"+e+")\\b"},forHtmlScript:function(e){var t={end:e.right.source};e.eof&&(t.end="(?:(?:"+t.end+")|$)"),this.htmlScript={left:{regex:e.left,css:"script"},right:{regex:e.right,css:"script"},code:XRegExp("(?<left>"+e.left.source+")"+"(?<code>.*?)"+"(?<right>"+t.end+")","sgi")}}},B}();"undefined"!=typeof exports?exports.SyntaxHighlighter=SyntaxHighlighter:null;
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushAS3.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Created by Peter Atoria @ http://iAtoria.com
	
		var inits 	 =  'class interface function package';
	
		var keywords =	'-Infinity ...rest Array as AS3 Boolean break case catch const continue Date decodeURI ' + 
						'decodeURIComponent default delete do dynamic each else encodeURI encodeURIComponent escape ' + 
						'extends false final finally flash_proxy for get if implements import in include Infinity ' + 
						'instanceof int internal is isFinite isNaN isXMLName label namespace NaN native new null ' + 
						'Null Number Object object_proxy override parseFloat parseInt private protected public ' + 
						'return set static String super switch this throw true try typeof uint undefined unescape ' + 
						'use void while with'
						;
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },		// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: new RegExp(this.getKeywords(inits), 'gm'),			css: 'color3' },		// initializations
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp('var', 'gm'),							css: 'variable' },		// variable
			{ regex: new RegExp('trace', 'gm'),							css: 'color1' }			// trace
			];
	
		this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['actionscript3', 'as3'];

	SyntaxHighlighter.brushes.AS3 = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushBash.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function hereDocProcess(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				result = []
				;
			if (match.here_doc != null)
				result.push(new constructor(match.here_doc, match.index + match[0].indexOf(match.here_doc), 'string'));

			if (match.full_tag != null)
				result.push(new constructor(match.full_tag, match.index, 'preprocessor'));

			if (match.end_tag != null)
				result.push(new constructor(match.end_tag, match.index + match[0].lastIndexOf(match.end_tag), 'preprocessor'));
			return result;
		}
		var keywords =	'if fi then elif else for do done until while break continue case esac function return in eq ne ge le';
		var commands =  'alias apropos awk basename base64 bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot' +
						'cksum clear cmp comm command cp cron crontab crypt csplit cut date dc dd ddrescue declare df ' +
						'diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval ' +
						'exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format ' +
						'free fsck ftp gawk gcc gdb getconf getopts grep groups gzip hash head history hostname id ifconfig ' +
						'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
						'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
						'mv nasm nc ndisasm netstat nice nl nohup nslookup objdump od open op passwd paste pathchk ping popd pr printcap ' +
						'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
						'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
						'sleep sort source split ssh strace strings su sudo sum symlink sync tail tar tee test time ' +
						'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
						'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
						'vi watch wc whereis which who whoami Wget xargs xxd yes chsh'
						;

		this.regexList = [
			{ regex: /^#!.*$/gm,											css: 'preprocessor bold' },
			{ regex: /\/[\w-\/]+/gm,										css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' },		// commands
			{ regex: new XRegExp("(?<full_tag>(&lt;|<){2}(?<tag>\\w+)) .*$(?<here_doc>[\\s\\S]*)(?<end_tag>^\\k<tag>$)",'gm'),	func: hereDocProcess }
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['bash', 'shell', 'sh'];

	SyntaxHighlighter.brushes.Bash = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushColdFusion.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Jen
		// http://www.jensbits.com/2009/05/14/coldfusion-brush-for-syntaxhighlighter-plus
	
		var funcs	=	'Abs ACos AddSOAPRequestHeader AddSOAPResponseHeader AjaxLink AjaxOnLoad ArrayAppend ArrayAvg ArrayClear ArrayDeleteAt ' + 
						'ArrayInsertAt ArrayIsDefined ArrayIsEmpty ArrayLen ArrayMax ArrayMin ArraySet ArraySort ArraySum ArraySwap ArrayToList ' + 
						'Asc ASin Atn BinaryDecode BinaryEncode BitAnd BitMaskClear BitMaskRead BitMaskSet BitNot BitOr BitSHLN BitSHRN BitXor ' + 
						'Ceiling CharsetDecode CharsetEncode Chr CJustify Compare CompareNoCase Cos CreateDate CreateDateTime CreateObject ' + 
						'CreateODBCDate CreateODBCDateTime CreateODBCTime CreateTime CreateTimeSpan CreateUUID DateAdd DateCompare DateConvert ' + 
						'DateDiff DateFormat DatePart Day DayOfWeek DayOfWeekAsString DayOfYear DaysInMonth DaysInYear DE DecimalFormat DecrementValue ' + 
						'Decrypt DecryptBinary DeleteClientVariable DeserializeJSON DirectoryExists DollarFormat DotNetToCFType Duplicate Encrypt ' + 
						'EncryptBinary Evaluate Exp ExpandPath FileClose FileCopy FileDelete FileExists FileIsEOF FileMove FileOpen FileRead ' + 
						'FileReadBinary FileReadLine FileSetAccessMode FileSetAttribute FileSetLastModified FileWrite Find FindNoCase FindOneOf ' + 
						'FirstDayOfMonth Fix FormatBaseN GenerateSecretKey GetAuthUser GetBaseTagData GetBaseTagList GetBaseTemplatePath ' + 
						'GetClientVariablesList GetComponentMetaData GetContextRoot GetCurrentTemplatePath GetDirectoryFromPath GetEncoding ' + 
						'GetException GetFileFromPath GetFileInfo GetFunctionList GetGatewayHelper GetHttpRequestData GetHttpTimeString ' + 
						'GetK2ServerDocCount GetK2ServerDocCountLimit GetLocale GetLocaleDisplayName GetLocalHostIP GetMetaData GetMetricData ' + 
						'GetPageContext GetPrinterInfo GetProfileSections GetProfileString GetReadableImageFormats GetSOAPRequest GetSOAPRequestHeader ' + 
						'GetSOAPResponse GetSOAPResponseHeader GetTempDirectory GetTempFile GetTemplatePath GetTickCount GetTimeZoneInfo GetToken ' + 
						'GetUserRoles GetWriteableImageFormats Hash Hour HTMLCodeFormat HTMLEditFormat IIf ImageAddBorder ImageBlur ImageClearRect ' + 
						'ImageCopy ImageCrop ImageDrawArc ImageDrawBeveledRect ImageDrawCubicCurve ImageDrawLine ImageDrawLines ImageDrawOval ' + 
						'ImageDrawPoint ImageDrawQuadraticCurve ImageDrawRect ImageDrawRoundRect ImageDrawText ImageFlip ImageGetBlob ImageGetBufferedImage ' + 
						'ImageGetEXIFTag ImageGetHeight ImageGetIPTCTag ImageGetWidth ImageGrayscale ImageInfo ImageNegative ImageNew ImageOverlay ImagePaste ' + 
						'ImageRead ImageReadBase64 ImageResize ImageRotate ImageRotateDrawingAxis ImageScaleToFit ImageSetAntialiasing ImageSetBackgroundColor ' + 
						'ImageSetDrawingColor ImageSetDrawingStroke ImageSetDrawingTransparency ImageSharpen ImageShear ImageShearDrawingAxis ImageTranslate ' + 
						'ImageTranslateDrawingAxis ImageWrite ImageWriteBase64 ImageXORDrawingMode IncrementValue InputBaseN Insert Int IsArray IsBinary ' + 
						'IsBoolean IsCustomFunction IsDate IsDDX IsDebugMode IsDefined IsImage IsImageFile IsInstanceOf IsJSON IsLeapYear IsLocalHost ' + 
						'IsNumeric IsNumericDate IsObject IsPDFFile IsPDFObject IsQuery IsSimpleValue IsSOAPRequest IsStruct IsUserInAnyRole IsUserInRole ' + 
						'IsUserLoggedIn IsValid IsWDDX IsXML IsXmlAttribute IsXmlDoc IsXmlElem IsXmlNode IsXmlRoot JavaCast JSStringFormat LCase Left Len ' + 
						'ListAppend ListChangeDelims ListContains ListContainsNoCase ListDeleteAt ListFind ListFindNoCase ListFirst ListGetAt ListInsertAt ' + 
						'ListLast ListLen ListPrepend ListQualify ListRest ListSetAt ListSort ListToArray ListValueCount ListValueCountNoCase LJustify Log ' + 
						'Log10 LSCurrencyFormat LSDateFormat LSEuroCurrencyFormat LSIsCurrency LSIsDate LSIsNumeric LSNumberFormat LSParseCurrency LSParseDateTime ' + 
						'LSParseEuroCurrency LSParseNumber LSTimeFormat LTrim Max Mid Min Minute Month MonthAsString Now NumberFormat ParagraphFormat ParseDateTime ' + 
						'Pi PrecisionEvaluate PreserveSingleQuotes Quarter QueryAddColumn QueryAddRow QueryConvertForGrid QueryNew QuerySetCell QuotedValueList Rand ' + 
						'Randomize RandRange REFind REFindNoCase ReleaseComObject REMatch REMatchNoCase RemoveChars RepeatString Replace ReplaceList ReplaceNoCase ' + 
						'REReplace REReplaceNoCase Reverse Right RJustify Round RTrim Second SendGatewayMessage SerializeJSON SetEncoding SetLocale SetProfileString ' + 
						'SetVariable Sgn Sin Sleep SpanExcluding SpanIncluding Sqr StripCR StructAppend StructClear StructCopy StructCount StructDelete StructFind ' + 
						'StructFindKey StructFindValue StructGet StructInsert StructIsEmpty StructKeyArray StructKeyExists StructKeyList StructKeyList StructNew ' + 
						'StructSort StructUpdate Tan TimeFormat ToBase64 ToBinary ToScript ToString Trim UCase URLDecode URLEncodedFormat URLSessionFormat Val ' + 
						'ValueList VerifyClient Week Wrap Wrap WriteOutput XmlChildPos XmlElemNew XmlFormat XmlGetNodeType XmlNew XmlParse XmlSearch XmlTransform ' + 
						'XmlValidate Year YesNoFormat';

		var keywords =	'cfabort cfajaximport cfajaxproxy cfapplet cfapplication cfargument cfassociate cfbreak cfcache cfcalendar ' + 
						'cfcase cfcatch cfchart cfchartdata cfchartseries cfcol cfcollection cfcomponent cfcontent cfcookie cfdbinfo ' + 
						'cfdefaultcase cfdirectory cfdiv cfdocument cfdocumentitem cfdocumentsection cfdump cfelse cfelseif cferror ' + 
						'cfexchangecalendar cfexchangeconnection cfexchangecontact cfexchangefilter cfexchangemail cfexchangetask ' + 
						'cfexecute cfexit cffeed cffile cfflush cfform cfformgroup cfformitem cfftp cffunction cfgrid cfgridcolumn ' + 
						'cfgridrow cfgridupdate cfheader cfhtmlhead cfhttp cfhttpparam cfif cfimage cfimport cfinclude cfindex ' + 
						'cfinput cfinsert cfinterface cfinvoke cfinvokeargument cflayout cflayoutarea cfldap cflocation cflock cflog ' + 
						'cflogin cfloginuser cflogout cfloop cfmail cfmailparam cfmailpart cfmenu cfmenuitem cfmodule cfNTauthenticate ' + 
						'cfobject cfobjectcache cfoutput cfparam cfpdf cfpdfform cfpdfformparam cfpdfparam cfpdfsubform cfpod cfpop ' + 
						'cfpresentation cfpresentationslide cfpresenter cfprint cfprocessingdirective cfprocparam cfprocresult ' + 
						'cfproperty cfquery cfqueryparam cfregistry cfreport cfreportparam cfrethrow cfreturn cfsavecontent cfschedule ' + 
						'cfscript cfsearch cfselect cfset cfsetting cfsilent cfslider cfsprydataset cfstoredproc cfswitch cftable ' + 
						'cftextarea cfthread cfthrow cftimer cftooltip cftrace cftransaction cftree cftreeitem cftry cfupdate cfwddx ' + 
						'cfwindow cfxml cfzip cfzipparam';

		var operators =	'all and any between cross in join like not null or outer some';

		this.regexList = [
			{ regex: new RegExp('--(.*)$', 'gm'),						css: 'comments' },  // one line and multiline comments
			{ regex: SyntaxHighlighter.regexLib.xmlComments,			css: 'comments' },    // single quoted strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },    // double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },    // single quoted strings
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' }, // functions
			{ regex: new RegExp(this.getKeywords(operators), 'gmi'),	css: 'color1' },    // operators and such
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' }    // keyword
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['coldfusion','cf'];
	
	SyntaxHighlighter.brushes.ColdFusion = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/third-party-brushes/shBrushClojure.js?ver=20090602 
// Contributed by Travis Whitton
// http://travis-whitton.blogspot.com/2009/06/syntaxhighlighter-for-clojure.html

SyntaxHighlighter.brushes.Clojure = function()
{
	var funcs = ':arglists :doc :file :line :macro :name :ns :private :tag :test new alias alter ' +
				'and apply assert class cond conj count def defmacro defn defstruct deref do '     +
				'doall dorun doseq dosync eval filter finally find first fn gen-class gensym if '  +
				'import inc keys let list loop map ns or print println quote rand recur reduce '   +
				'ref repeat require rest send seq set sort str struct sync take test throw '       +
				'trampoline try type use var vec when while';

	this.regexList = [
			{ regex: new RegExp(';[^\]]+$', 'gm'),                           css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
			{ regex: /\[|\]/g,                                               css: 'keyword' },
			{ regex: /'[a-z][A-Za-z0-9_]*/g,                                 css: 'color1' }, // symbols
			{ regex: /:[a-z][A-Za-z0-9_\-]*/g,                               css: 'color2' }, // keywords
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),             css: 'functions' }
	];

	this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
}

SyntaxHighlighter.brushes.Clojure.prototype     = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Clojure.aliases       = ['clojure', 'Clojure', 'clj'];
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushCpp.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Copyright 2006 Shin, YoungJin
	
		var datatypes =	'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' +
						'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' +
						'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' +
						'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' +
						'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' +
						'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' +
						'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' +
						'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' +
						'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' +
						'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' +
						'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' +
						'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' +
						'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' +
						'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' +
						'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' +
						'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' +
						'char char16_t char32_t bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' +
						'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' +
						'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' +
						'__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' +
						'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' +
						'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' +
						'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' +
						'va_list wchar_t wctrans_t wctype_t wint_t signed';

		var keywords =	'alignas alignof auto break case catch class const constexpr decltype __finally __exception __try ' +
						'const_cast continue private public protected __declspec ' +
						'default delete deprecated dllexport dllimport do dynamic_cast ' +
						'else enum explicit extern if for friend goto inline ' +
						'mutable naked namespace new noinline noreturn nothrow noexcept nullptr ' +
						'ref register reinterpret_cast return selectany ' +
						'sizeof static static_cast static_assert struct switch template this ' +
						'thread thread_local throw true false try typedef typeid typename union ' +
						'using uuid virtual void volatile whcar_t while';
					
		var functions =	'assert isalnum isalpha iscntrl isdigit isgraph islower isprint' +
						'ispunct isspace isupper isxdigit tolower toupper errno localeconv ' +
						'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod ' +
						'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf ' +
						'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start ' +
						'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen ' +
						'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell ' +
						'fwrite getc getchar gets perror printf putc putchar puts remove ' +
						'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ' +
						'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol ' +
						'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' +
						'mbtowc qsort rand realloc srand strtod strtol strtoul system ' +
						'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr ' +
						'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp ' +
						'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime ' +
						'clock ctime difftime gmtime localtime mktime strftime time';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^ *#.*/gm,										css: 'preprocessor' },
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' },
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['cpp', 'cc', 'c++', 'c', 'h', 'hpp', 'h++'];

	SyntaxHighlighter.brushes.Cpp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushCSharp.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'abstract as async await base bool break byte case catch char checked class const ' +
						'continue decimal default delegate do double else enum event explicit volatile ' +
						'extern false finally fixed float for foreach get goto if implicit in int ' +
						'interface internal is lock long namespace new null object operator out ' +
						'override params private protected public readonly ref return sbyte sealed set ' +
						'short sizeof stackalloc static string struct switch this throw true try ' +
						'typeof uint ulong unchecked unsafe ushort using virtual void while var ' +
						'from group by into select let where orderby join on equals ascending descending';

		function fixComments(match, regexInfo)
		{
			var css = (match[0].indexOf("///") == 0)
				? 'color1'
				: 'comments'
				;
			
			return [new SyntaxHighlighter.Match(match[0], match.index, css)];
		}

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	func : fixComments },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: /@"(?:[^"]|"")*"/g,								css: 'string' },			// @-quoted strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^\s*#.*/gm,										css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },			// c# keyword
			{ regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,	css: 'keyword' },			// contextual keyword: 'partial'
			{ regex: /\byield(?=\s+(?:return|break)\b)/g,				css: 'keyword' }			// contextual keyword: 'yield'
			];
		
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['c#', 'c-sharp', 'csharp'];

	SyntaxHighlighter.brushes.CSharp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushCss.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function getKeywordsCSS(str)
		{
			return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
		};
	
		function getValuesCSS(str)
		{
			return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
		};

		var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
						'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
						'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
						'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
						'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
						'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
						'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
						'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
						'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
						'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
						'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
						'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
						'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
						'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index';

		var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
						'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
						'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double '+
						'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
						'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
						'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
						'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
						'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
						'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
						'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
						'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
						'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
						'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
						'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';

		var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },	// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },	// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },	// single quoted strings
			{ regex: /\#[a-fA-F0-9]{3,6}/g,								css: 'value' },		// html colors
			{ regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,				css: 'value' },		// sizes
			{ regex: /!important/g,										css: 'color3' },	// !important
			{ regex: new RegExp(getKeywordsCSS(keywords), 'gm'),		css: 'keyword' },	// keywords
			{ regex: new RegExp(getValuesCSS(values), 'g'),				css: 'value' },		// values
			{ regex: new RegExp(this.getKeywords(fonts), 'g'),			css: 'color1' }		// fonts
			];

		this.forHtmlScript({ 
			left: /(&lt;|<)\s*style.*?(&gt;|>)/gi, 
			right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi 
			});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['css'];

	SyntaxHighlighter.brushes.CSS = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushDelphi.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'abs addr and ansichar ansistring array as asm begin boolean byte cardinal ' +
						'case char class comp const constructor currency destructor div do double ' +
						'downto else end except exports extended false file finalization finally ' +
						'for function goto if implementation in inherited int64 initialization ' +
						'integer interface is label library longint longword mod nil not object ' +
						'of on or packed pansichar pansistring pchar pcurrency pdatetime pextended ' +
						'pint64 pointer private procedure program property pshortstring pstring ' +
						'pvariant pwidechar pwidestring protected public published raise real real48 ' +
						'record repeat set shl shortint shortstring shr single smallint string then ' +
						'threadvar to true try type unit until uses val var varirnt while widechar ' +
						'widestring with word write writeln xor';

		this.regexList = [
			{ regex: /\(\*[\s\S]*?\*\)/gm,								css: 'comments' },  	// multiline comments (* *)
			{ regex: /{(?!\$)[\s\S]*?}/gm,								css: 'comments' },  	// multiline comments { }
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },  	// one line
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\{\$[a-zA-Z]+ .+\}/g,								css: 'color1' },		// compiler Directives and Region tags
			{ regex: /\b[\d\.]+\b/g,									css: 'value' },			// numbers 12345
			{ regex: /\$[a-zA-Z0-9]+\b/g,								css: 'value' },			// numbers $F5D3
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' }		// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['delphi', 'pascal', 'pas'];

	SyntaxHighlighter.brushes.Delphi = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushDiff.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		this.regexList = [
			{ regex: /^\+\+\+ .*$/gm,	css: 'color2' },	// new file
			{ regex: /^\-\-\- .*$/gm,	css: 'color2' },	// old file
			{ regex: /^\s.*$/gm,		css: 'color1' },	// unchanged
			{ regex: /^@@.*@@.*$/gm,	css: 'variable' },	// location
			{ regex: /^\+.*$/gm,		css: 'string' },	// additions
			{ regex: /^\-.*$/gm,		css: 'color3' }		// deletions
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['diff', 'patch'];

	SyntaxHighlighter.brushes.Diff = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushErlang.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Jean-Lou Dupont
		// http://jldupont.blogspot.com/2009/06/erlang-syntax-highlighter.html  

		// According to: http://erlang.org/doc/reference_manual/introduction.html#1.5
		var keywords = 'after and andalso band begin bnot bor bsl bsr bxor '+
			'case catch cond div end fun if let not of or orelse '+
			'query receive rem try when xor'+
			// additional
			' module export import define';

		this.regexList = [
			{ regex: new RegExp("[A-Z][A-Za-z0-9_]+", 'g'), 			css: 'constants' },
			{ regex: new RegExp("\\%.+", 'gm'), 						css: 'comments' },
			{ regex: new RegExp("\\?[A-Za-z0-9_]+", 'g'), 				css: 'preprocessor' },
			{ regex: new RegExp("[a-z0-9_]+:[a-z0-9_]+", 'g'), 			css: 'functions' },
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
			{ regex: new RegExp(this.getKeywords(keywords),	'gm'),		css: 'keyword' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['erl', 'erlang'];

	SyntaxHighlighter.brushes.Erlang = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/third-party-brushes/shBrushFSharp.js?ver=20091003 
// WTFPL licensed
// scratching the surface of research microsoft com/fsharp/manual/spec2.aspx#_Toc207785562
// omits reserved-ident-formats, reserved-symbolic-sequence, quote-op-*, symbolic-op, ...
SyntaxHighlighter.brushes.FSharp = function()
{
 var keywords = 'abstract and as assert base begin class default delegate do done ' +
  'downcast downto elif else end exception extern false finally for '+
  'fun function if in inherit inline interface internal lazy let ' +
  'match member module mutable namespace new null of open or '+
  'override private public rec return static struct then to '+
  'true try type upcast use val void when while with yield';
  var ocaml = 'asr land lor lsl lsr lxor mod sig';
  var reserved ='atomic break checked component const constraint constructor '+
  'continue eager event external fixed functor global include '+
  'method mixin object parallel process protected pure '+
  'sealed tailcall trait virtual volatile';
  var symbolic = 'let! use! do! yield! return! \\| -> <- \\. : \\( \\) \\[ \\] \\[< >\\] \\[\\| \\|\\] '+
  '\\{ \\} \' # :\\?> :\\? ; ;; :> := _ \\.\\. ::';

 this.regexList = [
  { regex: SyntaxHighlighter.regexLib.singleLineCComments,    css: 'comments' },   // one line comments
    { regex: new RegExp('\\(\\*[\\s\\S]*?\\*\\)', 'gm'),   css: 'comments' },   // multiline comments
  { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },   // strings
    { regex: new RegExp('^\\s*#.*', 'gm'),      css: 'preprocessor' },  // preprocessor tags like #light
  { regex: new RegExp(this.getKeywords(keywords), 'gm'),  css: 'keyword' },  // f# keyword
  //{ regex: new RegExp(this.getKeywords(ocaml), 'gm'),  css: 'color1' },   // caml keyword
  //{ regex: new RegExp(this.getKeywords(reserved), 'gm'),  css: 'color2' },   // reserved keyword
  //{ regex: new RegExp(this.getKeywords(symbolic), 'gm'),  css: 'color3' }   // symbolic keyword
  ];
}

SyntaxHighlighter.brushes.FSharp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.FSharp.aliases = ['f#', 'f-sharp', 'fsharp'];
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushGroovy.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Andres Almiray
		// http://jroller.com/aalmiray/entry/nice_source_code_syntax_highlighter

		var keywords =	'as assert break case catch class continue def default do else extends finally ' +
						'if in implements import instanceof interface new package property return switch ' +
						'throw throws try while public protected private static';
		var types    =  'void boolean byte char short int long float double';
		var constants = 'null';
		var methods   = 'allProperties count get size '+
						'collect each eachProperty eachPropertyName eachWithIndex find findAll ' +
						'findIndexOf grep inject max min reverseEach sort ' +
						'asImmutable asSynchronized flatten intersect join pop reverse subMap toList ' +
						'padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize ' +
						'eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText ' +
						'splitEachLine withReader append encodeBase64 decodeBase64 filterLine ' +
						'transformChar transformLine withOutputStream withPrintWriter withStream ' +
						'withStreams withWriter withWriterAppend write writeLine '+
						'dump inspect invokeMethod print println step times upto use waitForOrKill '+
						'getText';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,				css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,					css: 'comments' },		// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,					css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,					css: 'string' },		// strings
			{ regex: /""".*"""/g,													css: 'string' },		// GStrings
			{ regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),	css: 'value' },			// numbers
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),					css: 'keyword' },		// goovy keyword
			{ regex: new RegExp(this.getKeywords(types), 'gm'),						css: 'color1' },		// goovy/java type
			{ regex: new RegExp(this.getKeywords(constants), 'gm'),					css: 'constants' },		// constants
			{ regex: new RegExp(this.getKeywords(methods), 'gm'),					css: 'functions' }		// methods
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['groovy'];

	SyntaxHighlighter.brushes.Groovy = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushJava.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'abstract assert boolean break byte case catch char class const ' +
						'continue default do double else enum extends ' +
						'false final finally float for goto if implements import ' +
						'instanceof int interface long native new null ' +
						'package private protected public return ' +
						'short static strictfp super switch synchronized this throw throws true ' +
						'transient try void volatile while';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: /\/\*([^\*][\s\S]*?)?\*\//gm,						css: 'comments' },	 	// multiline comments
			{ regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,					css: 'preprocessor' },	// documentation comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: /(?!\@interface\b)\@[\$\w]+\b/g,					css: 'color1' },		// annotation @anno
			{ regex: /\@interface\b/g,									css: 'color2' },		// @interface keyword
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }		// java keyword
			];

		this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['java'];

	SyntaxHighlighter.brushes.Java = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushJavaFX.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Patrick Webster
		// http://patrickwebster.blogspot.com/2009/04/javafx-brush-for-syntaxhighlighter.html
		var datatypes =	'Boolean Byte Character Double Duration '
						+ 'Float Integer Long Number Short String Void'
						;

		var keywords = 'abstract after and as assert at before bind bound break catch class '
						+ 'continue def delete else exclusive extends false finally first for from '
						+ 'function if import in indexof init insert instanceof into inverse last '
						+ 'lazy mixin mod nativearray new not null on or override package postinit '
						+ 'protected public public-init public-read replace return reverse sizeof '
						+ 'step super then this throw true try tween typeof var where while with '
						+ 'attribute let private readonly static trigger'
						;

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
			{ regex: /(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi, css: 'color2' },	// numbers
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'variable' },	// datatypes
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }
		];
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['jfx', 'javafx'];

	SyntaxHighlighter.brushes.JavaFX = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushJScript.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'break case catch class continue ' +
				'default delete do else enum export extends false  ' +
				'for function if implements import in instanceof ' +
				'interface let new null package private protected ' +
				'static return super switch ' +
				'this throw true try typeof var while with yield';

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments
			{ regex: /\s*#.*/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// keywords
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['js', 'jscript', 'javascript', 'json'];

	SyntaxHighlighter.brushes.JScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/third-party-brushes/shBrushLatex.js?ver=20090613 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.0.296 (March 01 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * 
 * Very simple Latex brush
 * http://www.jorgemarsal.com/blog/
 */



SyntaxHighlighter.brushes.Latex = function()
{
	var keywords =	'if fi then elif else for do done until while break continue case function return in eq ne gt lt ge le';
	//var commands =  'include usepackage begin end ref label includegraphics';
    
	this.regexList = [
		{ regex: new RegExp('%.*','gm'),		css: 'comments' },		// one line comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
		{ regex: new RegExp('\\\\\\w*','gm'),			css: 'keyword' },		// commands
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'function' },		// keywords
		];
}

SyntaxHighlighter.brushes.Latex.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Latex.aliases		= ['latex', 'tex'];
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/third-party-brushes/shBrushMatlabKey.js?ver=20091209 
/**
 *	Author: Will Schleter
 *	based on: http://www.jamesrohal.com
 */
SyntaxHighlighter.brushes.MatlabKey = function()
{
	var keywords = 'break case catch classdef continue else elseif end for function global if otherwise parfor persistent return spmd switch try while';
	var functions = ' ';

	this.regexList = [
		{ regex: /%.*$/gm,	css: 'comments' }, // one line comments
		{ regex: /\%\{[\s\S]*?\%\}/gm, css: 'comments'}, // multiline comments
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string'},
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
	];
}

SyntaxHighlighter.brushes.MatlabKey.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.MatlabKey.aliases		= ['matlabkey', 'matlab'];
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/third-party-brushes/shBrushObjC.js?ver=20091207 
/**
 * Wordpress SyntaxHighlighter brush for Objective-C
 * By Matej Bukovinski, www.bukovinski.com
 *
 * Copyright (C) 2009 Matej Bukovinski
 * 
 * Adapted from:
 * SyntaxHighlighter - Objective-C Brush, version 1.0.0
 * http://codepirate.seaandco.com/
 * Copyright (C) 2009 Geoffrey Byers.
 * 
 * Licensed under a GNU Lesser General Public License.
 * http://creativecommons.org/licenses/LGPL/2.1/
 * 
 */

SyntaxHighlighter.brushes.ObjC = function() {
	
	var datatypes =	'char bool BOOL double float int long short id void';
	
	var keywords = 'IBAction IBOutlet SEL YES NO readwrite readonly nonatomic nil NULL ';
	keywords += 'super self copy ';
	keywords += 'break case catch class const copy __finally __exception __try ';
	keywords += 'const_cast continue private public protected __declspec ';
	keywords += 'default delete deprecated dllexport dllimport do dynamic_cast ';
	keywords += 'else enum explicit extern if for friend goto inline ';
	keywords += 'mutable naked namespace new noinline noreturn nothrow ';
	keywords += 'register reinterpret_cast return selectany ';
	keywords += 'sizeof static static_cast struct switch template this ';
	keywords += 'thread throw true false try typedef typeid typename union ';
	keywords += 'using uuid virtual volatile whcar_t while';
	
	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comment' },		// one line comments
		{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comment' },		// multiline comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
		{ regex: new RegExp('^ *#.*', 'gm'),						css: 'preprocessor' },	// preprocessor
		{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'datatypes' },		// datatypes
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keyword
		{ regex: new RegExp('\\bNS\\w+\\b', 'g'),					css: 'keyword' },		// keyword
		{ regex: new RegExp('@\\w+\\b', 'g'),						css: 'keyword' },		// keyword
		{ regex: new RegExp('@"(?:\\.|(\\\\\\")|[^\\""\\n])*"', 'g'),	css: 'string' }	// objc string		
		];
	
}

SyntaxHighlighter.brushes.ObjC.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.ObjC.aliases = ['objc', 'obj-c'];
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushPerl.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by David Simmons-Duffin and Marty Kube
	
		var funcs = 
			'abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr ' + 
			'chroot close closedir connect cos crypt defined delete each endgrent ' + 
			'endhostent endnetent endprotoent endpwent endservent eof exec exists ' + 
			'exp fcntl fileno flock fork format formline getc getgrent getgrgid ' + 
			'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr ' + 
			'getnetbyname getnetent getpeername getpgrp getppid getpriority ' + 
			'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid ' + 
			'getservbyname getservbyport getservent getsockname getsockopt glob ' + 
			'gmtime grep hex index int ioctl join keys kill lc lcfirst length link ' + 
			'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd ' + 
			'oct open opendir ord pack pipe pop pos print printf prototype push ' + 
			'quotemeta rand read readdir readline readlink readpipe recv rename ' + 
			'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl ' + 
			'semget semop send setgrent sethostent setnetent setpgrp setpriority ' + 
			'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread ' + 
			'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf ' + 
			'sqrt srand stat study substr symlink syscall sysopen sysread sysseek ' + 
			'system syswrite tell telldir time times tr truncate uc ucfirst umask ' + 
			'undef unlink unpack unshift utime values vec wait waitpid warn write ' +
			// feature
			'say';
    
		var keywords =  
			'bless caller continue dbmclose dbmopen die do dump else elsif eval exit ' +
			'for foreach goto if import last local my next no our package redo ref ' + 
			'require return sub tie tied unless untie until use wantarray while ' +
			// feature
			'given when default ' +
			// Try::Tiny
			'try catch finally ' +
			// Moose
			'has extends with before after around override augment';
    
		this.regexList = [
			{ regex: /(<<|&lt;&lt;)((\w+)|(['"])(.+?)\4)[\s\S]+?\n\3\5\n/g,	css: 'string' },	// here doc (maybe html encoded)
			{ regex: /#.*$/gm,										css: 'comments' },
			{ regex: /^#!.*\n/g,									css: 'preprocessor' },	// shebang
			{ regex: /-?\w+(?=\s*=(>|&gt;))/g,	css: 'string' }, // fat comma

			// is this too much?
			{ regex: /\bq[qwxr]?\([\s\S]*?\)/g,	css: 'string' }, // quote-like operators ()
			{ regex: /\bq[qwxr]?\{[\s\S]*?\}/g,	css: 'string' }, // quote-like operators {}
			{ regex: /\bq[qwxr]?\[[\s\S]*?\]/g,	css: 'string' }, // quote-like operators []
			{ regex: /\bq[qwxr]?(<|&lt;)[\s\S]*?(>|&gt;)/g,	css: 'string' }, // quote-like operators <>
			{ regex: /\bq[qwxr]?([^\w({<[])[\s\S]*?\1/g,	css: 'string' }, // quote-like operators non-paired

			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },
			// currently ignoring single quote package separator and utf8 names
			{ regex: /(?:&amp;|[$@%*]|\$#)\$?[a-zA-Z_](\w+|::)*/g,   		css: 'variable' },
			{ regex: /\b__(?:END|DATA)__\b[\s\S]*$/g,				css: 'comments' },

			// don't capture the newline after =cut so that =cut\n\n=head1 will start a new pod section
			{ regex: /(^|\n)=\w[\s\S]*?(\n=cut\s*(?=\n)|$)/g,		css: 'comments' },		// pod

			{ regex: new RegExp(this.getKeywords(funcs), 'gm'),		css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }
		];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases		= ['perl', 'Perl', 'pl'];

	SyntaxHighlighter.brushes.Perl = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushPhp.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var funcs	=	'abs acos acosh addcslashes addslashes ' +
						'array_change_key_case array_chunk array_combine array_count_values array_diff '+
						'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
						'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
						'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
						'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
						'array_push array_rand array_reduce array_reverse array_search array_shift '+
						'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
						'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
						'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
						'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
						'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
						'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
						'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
						'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
						'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
						'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
						'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
						'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
						'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
						'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
						'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
						'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
						'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
						'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
						'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
						'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
						'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
						'parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir '+
						'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
						'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
						'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
						'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
						'strtoupper strtr strval substr substr_compare';

		var keywords =	'abstract and array as break case catch cfunction class clone const continue declare default die do ' +
						'else elseif enddeclare endfor endforeach endif endswitch endwhile extends final finally for foreach ' +
						'function global goto if implements include include_once interface instanceof insteadof namespace new ' +
						'old_function or private protected public return require require_once static switch ' +
						'trait throw try use var while xor yield ';
		
		var constants	= '__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
			{ regex: /\$\w+/g,											css: 'variable' },			// variables
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },			// common functions
			{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' },			// constants
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['php'];

	SyntaxHighlighter.brushes.Php = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushPlain.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['text', 'plain'];

	SyntaxHighlighter.brushes.Plain = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushPowerShell.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Joel 'Jaykul' Bennett, http://PoshCode.org | http://HuddledMasses.org
		var keywords =	'while validateset validaterange validatepattern validatelength validatecount ' +
						'until trap switch return ref process param parameter in if global: '+
						'function foreach for finally filter end elseif else dynamicparam do default ' +
						'continue cmdletbinding break begin alias \\? % #script #private #local #global '+
						'mandatory parametersetname position valuefrompipeline ' +
						'valuefrompipelinebypropertyname valuefromremainingarguments helpmessage ';

		var operators =	' and as band bnot bor bxor casesensitive ccontains ceq cge cgt cle ' +
						'clike clt cmatch cne cnotcontains cnotlike cnotmatch contains ' +
						'creplace eq exact f file ge gt icontains ieq ige igt ile ilike ilt ' +
						'imatch ine inotcontains inotlike inotmatch ireplace is isnot le like ' +
						'lt match ne not notcontains notlike notmatch or regex replace wildcard';
						
		var verbs =		'write where wait use update unregister undo trace test tee take suspend ' +
						'stop start split sort skip show set send select scroll resume restore ' +
						'restart resolve resize reset rename remove register receive read push ' +
						'pop ping out new move measure limit join invoke import group get format ' +
						'foreach export expand exit enter enable disconnect disable debug cxnew ' +
						'copy convertto convertfrom convert connect complete compare clear ' +
						'checkpoint aggregate add';

		// I can't find a way to match the comment based help in multi-line comments, because SH won't highlight in highlights, and javascript doesn't support lookbehind
		var commenthelp = ' component description example externalhelp forwardhelpcategory forwardhelptargetname forwardhelptargetname functionality inputs link notes outputs parameter remotehelprunspace role synopsis';

		this.regexList = [
			{ regex: new RegExp('^\\s*#[#\\s]*\\.('+this.getKeywords(commenthelp)+').*$', 'gim'),			css: 'preprocessor help bold' },		// comment-based help
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,										css: 'comments' },						// one line comments
			{ regex: /(&lt;|<)#[\s\S]*?#(&gt;|>)/gm,														css: 'comments here' },					// multi-line comments
			
			{ regex: new RegExp('@"\\n[\\s\\S]*?\\n"@', 'gm'),												css: 'script string here' },			// double quoted here-strings
			{ regex: new RegExp("@'\\n[\\s\\S]*?\\n'@", 'gm'),												css: 'script string single here' },		// single quoted here-strings
			{ regex: new RegExp('"(?:\\$\\([^\\)]*\\)|[^"]|`"|"")*[^`]"','g'),								css: 'string' },						// double quoted strings
			{ regex: new RegExp("'(?:[^']|'')*'", 'g'),														css: 'string single' },					// single quoted strings
			
			{ regex: new RegExp('[\\$|@|@@](?:(?:global|script|private|env):)?[A-Z0-9_]+', 'gi'),			css: 'variable' },						// $variables
			{ regex: new RegExp('(?:\\b'+verbs.replace(/ /g, '\\b|\\b')+')-[a-zA-Z_][a-zA-Z0-9_]*', 'gmi'),	css: 'functions' },						// functions and cmdlets
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),											css: 'keyword' },						// keywords
			{ regex: new RegExp('-'+this.getKeywords(operators), 'gmi'),									css: 'operator value' },				// operators
			{ regex: new RegExp('\\[[A-Z_\\[][A-Z0-9_. `,\\[\\]]*\\]', 'gi'),								css: 'constants' },						// .Net [Type]s
			{ regex: new RegExp('\\s+-(?!'+this.getKeywords(operators)+')[a-zA-Z_][a-zA-Z0-9_]*', 'gmi'),	css: 'color1' },						// parameters	  
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['powershell', 'ps', 'posh'];

	SyntaxHighlighter.brushes.PowerShell = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushPython.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Gheorghe Milas and Ahmad Sherif
	
		var keywords =  'and assert break class continue def del elif else ' +
						'except exec finally for from global if import in is ' +
						'lambda not or pass raise return try yield while';

		var funcs = '__import__ abs all any apply basestring bin bool buffer callable ' +
					'chr classmethod cmp coerce compile complex delattr dict dir ' +
					'divmod enumerate eval execfile file filter float format frozenset ' +
					'getattr globals hasattr hash help hex id input int intern ' +
					'isinstance issubclass iter len list locals long map max min next ' +
					'object oct open ord pow print property range raw_input reduce ' +
					'reload repr reversed round set setattr slice sorted staticmethod ' +
					'str sum super tuple type type unichr unicode vars xrange zip';

		var special =  'None True False self cls class_';

		this.regexList = [
				{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
				{ regex: /^\s*@\w+/gm, 										css: 'decorator' },
				{ regex: /(['\"]{3})([^\1])*?\1/gm, 						css: 'comments' },
				{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, 					css: 'string' },
				{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, 				css: 'string' },
				{ regex: /\+|\-|\*|\/|\%|=|==/gm, 							css: 'keyword' },
				{ regex: /\b\d+\.?\w*/g, 									css: 'value' },
				{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },
				{ regex: new RegExp(this.getKeywords(keywords), 'gm'), 		css: 'keyword' },
				{ regex: new RegExp(this.getKeywords(special), 'gm'), 		css: 'color1' }
				];
			
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['py', 'python'];

	SyntaxHighlighter.brushes.Python = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/third-party-brushes/shBrushR.js?ver=20100919 
/**
 *  Author: Yihui Xie <xie@yihui.name>
 *  URL: http://yihui.name/en/2010/09/syntaxhighlighter-brush-for-the-r-language
 *  License: GPL-2 | GPL-3
 */
SyntaxHighlighter.brushes.R = function()
{
    var keywords = 'if else repeat while function for in next break TRUE FALSE NULL Inf NaN NA NA_integer_ NA_real_ NA_complex_ NA_character_';
    var constants = 'LETTERS letters month.abb month.name pi';
    this.regexList = [
	{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },
	{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
	{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
	{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },
	{ regex: new RegExp(this.getKeywords(constants), 'gm'),		css: 'constants' },
	{ regex: /[\w._]+[ \t]*(?=\()/gm,				css: 'functions' },
    ];
};
SyntaxHighlighter.brushes.R.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.R.aliases	= ['r', 's', 'splus'];
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushRuby.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Erik Peterson.
	
		var keywords =	'alias and BEGIN begin break case class def define_method defined do each else elsif ' +
						'END end ensure false for if in module new next nil not or raise redo rescue retry return ' +
						'self super then throw true undef unless until when while yield';

		var builtins =	'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' +
						'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' +
						'ThreadGroup Thread Time TrueClass';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /\b[A-Z0-9_]+\b/g,									css: 'constants' },		// constants
			{ regex: /:[a-z][A-Za-z0-9_]*/g,							css: 'color2' },		// symbols
			{ regex: /(\$|@@|@)\w+/g,									css: 'variable bold' },	// $global, @instance, and @@class variables
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(builtins), 'gm'),		css: 'color1' }			// builtins
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['ruby', 'rails', 'ror', 'rb'];

	SyntaxHighlighter.brushes.Ruby = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushScala.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Yegor Jbanov and David Bernard.
	
		var keywords =	'val sealed case def true trait implicit forSome import match object null finally super ' +
						'override try lazy for var catch throw type extends class while with new final yield abstract ' +
						'else do if return protected private this package false';

		var keyops =	'[_:=><%#@]+';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,			css: 'comments' },	// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,				css: 'comments' },	// multiline comments
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },	// multi-line strings
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,    css: 'string' },	// double-quoted string
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,				css: 'string' },	// strings
			{ regex: /0x[a-f0-9]+|\d+(\.\d+)?/gi,								css: 'value' },		// numbers
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),				css: 'keyword' },	// keywords
			{ regex: new RegExp(keyops, 'gm'),									css: 'keyword' }	// scala keyword
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['scala'];

	SyntaxHighlighter.brushes.Scala = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushSql.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var funcs	=	'abs avg case cast coalesce convert count current_timestamp ' +
						'current_user day isnull left lower month nullif replace right ' +
						'session_user space substring sum system_user upper user year';

		var keywords =	'absolute action add after alter as asc at authorization begin bigint ' +
						'binary bit by cascade char character check checkpoint close collate ' +
						'column commit committed connect connection constraint contains continue ' +
						'create cube current current_date current_time cursor database date ' +
						'deallocate dec decimal declare default delete desc distinct double drop ' +
						'dynamic else end end-exec escape except exec execute false fetch first ' +
						'float for force foreign forward free from full function global goto grant ' +
						'group grouping having hour ignore index inner insensitive insert instead ' +
						'int integer intersect into is isolation key last level load local max min ' +
						'minute modify move name national nchar next no numeric of off on only ' +
						'open option order out output partial password precision prepare primary ' +
						'prior privileges procedure public read real references relative repeatable ' +
						'restrict return returns revoke rollback rollup rows rule schema scroll ' +
						'second section select sequence serializable set size smallint static ' +
						'statistics table temp temporary then time timestamp to top transaction ' +
						'translation trigger true truncate uncommitted union unique update values ' +
						'varchar varying view when where with work';

		var operators =	'all and any between cross in join like not null or outer some';

		this.regexList = [
			{ regex: /--(.*)$/gm,                                               css: 'comments' },   // one line comments
			{ regex: /\/\*([^\*][\s\S]*?)?\*\//gm,                              css: 'comments' },   // multi line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,    css: 'string' },     // double quoted strings
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,    css: 'string' },     // single quoted strings
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),                css: 'color2' },     // functions
			{ regex: new RegExp(this.getKeywords(operators), 'gmi'),            css: 'color1' },     // operators and such
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),             css: 'keyword' }     // keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sql'];

	SyntaxHighlighter.brushes.Sql = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushVb.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto ' +
						'Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate ' +
						'CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType ' +
						'Date Decimal Declare Default Delegate Dim DirectCast Do Double Each ' +
						'Else ElseIf End Enum Erase Error Event Exit False Finally For Friend ' +
						'Function Get GetType GoSub GoTo Handles If Implements Imports In ' +
						'Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module ' +
						'MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing ' +
						'NotInheritable NotOverridable Object On Option Optional Or OrElse ' +
						'Overloads Overridable Overrides ParamArray Preserve Private Property ' +
						'Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume ' +
						'Return Select Set Shadows Shared Short Single Static Step Stop String ' +
						'Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until ' +
						'Variant When While With WithEvents WriteOnly Xor';

		this.regexList = [
			{ regex: /'.*$/gm,										css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },			// strings
			{ regex: /^\s*#.*$/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// vb keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['vb', 'vbnet'];

	SyntaxHighlighter.brushes.Vb = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
// source --> http://www.oldnix.org/wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/scripts/shBrushXml.js?ver=3.0.9b 
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = XRegExp.exec(code, XRegExp('(&lt;|<)[\\s\\/\\?!]*(?<name>[:\\w-\\.]+)', 'xg')),
				result = []
				;

			if (match.attributes != null)
			{
				var attributes,
					pos = 0,
					regex = XRegExp('(?<name> [\\w:.-]+)' +
									'\\s*=\\s*' +
									'(?<value> ".*?"|\'.*?\'|\\w+)',
									'xg');

				while ((attributes = XRegExp.exec(code, regex, pos)) != null)
				{
					result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
					result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
					pos = attributes.index + attributes[0].length;
				}
			}

			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
				);

			return result;
		}

		this.regexList = [
			{ regex: XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'),			css: 'color2' },	// <![ ... [ ... ]]>
			{ regex: SyntaxHighlighter.regexLib.xmlComments,												css: 'comments' },	// <!-- ... -->
			{ regex: XRegExp('(&lt;|<)[\\s\\/\\?!]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['xml', 'xhtml', 'xslt', 'html', 'plist'];

	SyntaxHighlighter.brushes.Xml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();