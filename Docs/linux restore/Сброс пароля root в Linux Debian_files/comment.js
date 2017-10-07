var Cackle=Cackle||{};
Cackle.Fastjs=Cackle.Fastjs||{get:function(b,a){return document.querySelector(b+" "+a)
},extend:function(c,a){var b={},d;
for(d in c){if(Object.prototype.hasOwnProperty.call(c,d)){b[d]=c[d]
}}for(d in a){if(Object.prototype.hasOwnProperty.call(a,d)){b[d]=a[d]
}}return b
},create:function(b,a,c,d){var e=document.createElement(b);
if(a){this.addcl(e,a)
}if(c){e.setAttribute("title",c)
}if(d){e.setAttribute("style",d)
}return e
},addcls:function(d,a){for(var b=0;
b<a.length;
b++){var e=a[b];
if(d.className.indexOf(e)<0){d.className+=" "+e
}}},addcl:function(b,a){if(b&&b.className.indexOf(a)<0){b.className+=" "+a;
b.className=b.className.trim()
}},remcl:function(b,a){b&&(b.className=b.className.replace(a," "))
},hascl:function(b,a){return b&&b.className.indexOf(a)>-1
},on:function(c,d,a){if(!c){return
}var b=this;
if(c.addEventListener){c.addEventListener(d,function(f){if(a.call(c,f)==false){b.stop(f)
}},false)
}else{c.attachEvent("on"+d,function(f){f.stopPropagation=f.stopPropagation||function(){this.cancelBubble=true
};
f.preventDefault=f.preventDefault||function(){this.returnValue=false
};
if(a.call(c,f)==false){b.stop(f)
}})
}},on2:function(c,b,e,a){if(!c){return
}var d=c.querySelector(b);
if(d){this.on(d,e,a)
}},onall:function(c,d,a){for(var b=0;
b<c.length;
b++){this.on(c[b],d,a)
}},onall2:function(c,b,d,a){this.onall(c.querySelectorAll(b),d,a)
},stop:function(a){a.preventDefault();
a.stopPropagation()
},parents:function(c,a){var d=c.parentNode,b=!1;
this.each(d.className.split(" "),function(e){!b&&(b=(e==a))
});
return b?d:this.parents(d,a)
},parentsel:function(b,a){var c=b.parentNode;
if(c.tagName.toLowerCase().indexOf(a)<0){return this.parentsel(c,a)
}return c
},show:function(a,b){var c=b.querySelector(a);
this.show2(c)
},show2:function(a){if(a){a.style.display=""
}},hide:function(a,b){var c=b.querySelector(a);
this.hide2(c)
},hide2:function(a){if(a){a.style.display="none"
}},html:function(a,b){if(a){a.innerHTML="";
if(this.isString(b)){a.innerHTML=b
}else{a.appendChild(b)
}}},prepend:function(a,b){a.insertBefore(b,a.firstChild)
},rm:function(a){if(a){if(a.parentNode){a.parentNode.removeChild(a)
}}},rm2:function(b,a){var c=b.querySelector(a);
this.rm(c)
},each:function forEach(c,b){if(typeof c.length=="undefined"){b(c,0)
}else{for(var a=0;
a<c.length;
a++){b(c[a],a)
}}},css:function(b,a,c){if(this.isInteger(c)){c=c+"px"
}b.style[a]=c
},child:function(b,c){for(var a=b.children.length;
a--;
){var d=b.children[a];
if(d.nodeType!=8){if(d.className.indexOf(c)>-1){return d
}}}},children:function(c){var b=[];
for(var a=c.children.length;
a--;
){if(c.children[a].nodeType!=8){b.unshift(c.children[a])
}}return b
},icss:function(b,a){return b+":"+a+"px!important;"
},transCss:function(b,d){var c=" .5s ease-in-out!important;",a="overflow-y:hidden!important;-webkit-transition:"+d+c+"-moz-transition:"+d+c+"-o-transition:"+d+c+"transition:"+d+c;
b.setAttribute("style",a);
return a
},prependSlide:function(e,b){var a=this,d=this.transCss(e,"max-height");
b.insertBefore(e,b.firstChild);
var c=e.offsetHeight;
e.setAttribute("style",this.icss("max-height",0)+d);
setTimeout(function(){e.setAttribute("style",a.icss("max-height",c)+d);
setTimeout(function(){e.setAttribute("style","")
},1000)
},1)
},slidedwn:function(b){b.style.display="";
var a=b.offsetHeight;
b.setAttribute("style",this.transCss(b,"height"));
b.style.height="0";
setTimeout(function(){b.style.height=a+"px";
setTimeout(function(){b.setAttribute("style","")
},500)
},5)
},slideup:function(b,a){b.setAttribute("style",this.transCss(b,"height"));
b.style.height=b.offsetHeight+"px";
setTimeout(function(){b.style.height="0";
setTimeout(function(){b.setAttribute("style","display:none");
a&&a()
},500)
},5)
},title:function(){var a=document.getElementsByTagName("title")[0];
return a&&a.textContent||""
},nextES:function(a){do{a=a.nextSibling
}while(a&&a.nodeType!==1);
return a
},next:function(a){return a.nextElementSibling||this.nextES(a)
},prevES:function(a){do{a=a.previousSibling
}while(a&&a.nodeType!==1);
return a
},prev:function(a){return a.previousElementSibling||this.prevES(a)
},after:function(a,b){a.parentNode.insertBefore(b,a.nextSibling)
},isVisible:function(a){return a.offsetWidth>0&&a.offsetHeight>0
},isInteger:function(a){return a%1===0
},isString:function(a){return typeof a=="string"
},afun:function(a){var b="cackle_"+Math.floor(Math.random()*1000001);
window[b]=function(c){window[b]=undefined;
try{delete window[b]
}catch(d){}a(c)
};
return b
},params:function(c,b,a){var d=[];
if(b){for(p in b){d.push(encodeURIComponent(p)+"="+encodeURIComponent(b[p]))
}}if(a){d.push("callback="+this.afun(a))
}if(d.length>0){var e=(c.indexOf("?")<0)?"?":"&";
return c+=e+d.join("&")
}return c
},jsonp:function(c,b,a){var d=document.createElement("script");
d.src=this.params(c,b,a);
d.type="text/javascript";
(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(d)
},popup:function(c,d,a,b,f,e){f=f||(screen.height/2)-(a/2);
e=e||(screen.width/2)-(d/2);
return window.open(this.params(c,b),"","location=1,status=1,resizable=yes,width="+d+",height="+a+",top="+f+",left="+e)
},inArray:function(c,b){for(var a=0;
a<c.length;
a++){if(c[a]===b){return a
}}return -1
},txt:function(b,a){"textContent" in b?b.textContent=a:b.innerText=a
},cbs:function(d,b,a){if(!d.callback){return
}var c=d.callback[b];
if(c&&c.length>0){for(var e=0;
e<c.length;
e++){c[e](a)
}}},extendcbs:function(b,a){b.callback=b.callback||{};
for(cb in a){if(Object.prototype.hasOwnProperty.call(a,cb)){if(!Object.prototype.hasOwnProperty.call(b.callback,cb)){b.callback[cb]=[]
}b.callback[cb].push(a[cb])
}}return b.callback
}};
String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")
};Cackle.Base=Cackle.Base||{emailRegex:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,error:function(a,b){var c=b[a.code],d=a.banInfo;
if(d){if(d.expired){c+=" "+b.banUntil+" "+new Date(d.expired).toLocaleString()
}if(d.reason){c+="<br>"+b.banReason+" "+b["ban"+d.reason]
}else{if(d.reasonTxt){c+="<br>"+b.banReason+" "+d.reasonTxt
}}}return c
},validEmail:function(a){return this.emailRegex.test(a)
},gotoId:function(b){var a=window.location.href;
if(a.indexOf("#"+b)>0){document.location.replace(a)
}},ssl:function(a){if(Cackle.protocol=="https:"&&a){if(a.indexOf("http://media.cackle.me")>-1||a.indexOf("http://cackle.me")>-1){return a.replace("http:","https:")
}else{if(a.indexOf("https://media.cackle.me")>-1||a.indexOf("https")==0){return a
}else{return"https://i2.wp.com/"+a.replace("http://","")
}}}else{return a
}},urlsToHyperlinks:function(d){var c=/(\b(https?|ftp|file):\/\/[-A-Z0-9А-Я+&@#\/%?=~_|!:,.;]*[-A-Z0-9А-Я+&@#\/%=~_|])/ig,b=/(^|[^\/])(www\.[\S]+(\b|$))/ig,a=d.replace(c,'<a href="$1" target="_blank">$1</a>');
return a.replace(b,'$1<a href="http://$2" target="_blank" rel="nofollow">$2</a>')
},escapeHtml:function(a){return a?document.createElement("div").appendChild(document.createTextNode(a)).parentNode.innerHTML:""
},escapeHtmlWithLinks:function(a){return this.urlsToHyperlinks(this.escapeHtml(a))
},getAvatar:function(b,d,c,a){if(b){b=this.ssl(b);
return b.match("^http://cackle.me/")?b.replace("http://","http://i1.wp.com/"):b
}else{if((a.gravatarEnable||a.anonymGravatarEnable)&&d){return this.getGravatar(d,c,a)
}else{return this.getDefaultAvatar(a)
}}},getGravatar:function(c,b,a){return"//gravatar.com/avatar/"+c+"?d="+this.getDefaultAvatar(a)+"&r=PG&s="+b
},getDefaultAvatar:function(a){return a.anonymAvatar?(a.anonymAvatar.match("^https?:")?a.anonymAvatar:"//"+a.anonymAvatar):this.getCackleAvatar()
},getCackleAvatar:function(){return Cackle.origin+"/widget/img/anonym2.png"
}};if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}
}var cx,escapable,gap,indent,meta,rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());var Cackle = Cackle || {};

Cackle.PostMessage = Cackle.PostMessage || {

    xdm: {},

    channel: {},

    xhr: function(host) {
        if (this.xdm[host] && this.iframe(host)) {
            return this.xdm[host];
        } else {
            return (this.xdm[host] = this.create(host));
        }
    },

    iframe: function(host) {
        return document.getElementById('easyXDM_' + this.channel[host] + '_provider');
    },

    create: function(host) {
        var handler = this;
        this.loadEasyXDM();
        return new easyXDM.Rpc({
            remote: host + '/xdm/index.html',
            onReady: function() {
                var iframe = document.getElementById('easyXDM_' + this.channel + '_provider');
                iframe.setAttribute('style', 'position:absolute!important;top:-2000px!important;left:0!important;');
                handler.channel[host] = this.channel;
            }
        },{
            remote: {
                request: {}
            },
            serializer: {
                stringify: function(obj) {
                    var clone = {
                        id: obj.id,
                        jsonrpc: obj.jsonrpc,
                        method: obj.method,
                        params: obj.params[0]
                    };
                    return handler.stringify(clone);
                },
                parse: function(string) {
                    return JSON.parse(string);
                }
            }
        });
    },

    //TODO: coz if loaded many times occurs error: undefined is not a function
    //TODO: check this behavior on production with loaded widget from 'a' and 'b'
    loadEasyXDM: function() {
        (function(N,d,p,K,k,H){var b=this;var n=Math.floor(Math.random()*10000);var q=Function.prototype;var Q=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;var R=/[\-\w]+\/\.\.\//;var F=/([^:])\/\//g;var I="";var o={};var M=N.easyXDM;var U="easyXDM_";var E;var y=false;var i;var h;function C(X,Z){var Y=typeof X[Z];return Y=="function"||(!!(Y=="object"&&X[Z]))||Y=="unknown"}function u(X,Y){return !!(typeof(X[Y])=="object"&&X[Y])}function r(X){return Object.prototype.toString.call(X)==="[object Array]"}function c(){var Z="Shockwave Flash",ad="application/x-shockwave-flash";if(!t(navigator.plugins)&&typeof navigator.plugins[Z]=="object"){var ab=navigator.plugins[Z].description;if(ab&&!t(navigator.mimeTypes)&&navigator.mimeTypes[ad]&&navigator.mimeTypes[ad].enabledPlugin){i=ab.match(/\d+/g)}}if(!i){var Y;try{Y=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");i=Array.prototype.slice.call(Y.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);Y=null}catch(ac){}}if(!i){return false}var X=parseInt(i[0],10),aa=parseInt(i[1],10);h=X>9&&aa>0;return true}var v,x;if(C(N,"addEventListener")){v=function(Z,X,Y){Z.addEventListener(X,Y,false)};x=function(Z,X,Y){Z.removeEventListener(X,Y,false)}}else{if(C(N,"attachEvent")){v=function(X,Z,Y){X.attachEvent("on"+Z,Y)};x=function(X,Z,Y){X.detachEvent("on"+Z,Y)}}else{throw new Error("Browser not supported")}}var W=false,J=[],L;if("readyState" in d){L=d.readyState;W=L=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(L=="loaded"||L=="interactive"))}else{W=!!d.body}function s(){if(W){return}W=true;for(var X=0;X<J.length;X++){J[X]()}J.length=0}if(!W){if(C(N,"addEventListener")){v(d,"DOMContentLoaded",s)}else{v(d,"readystatechange",function(){if(d.readyState=="complete"){s()}});if(d.documentElement.doScroll&&N===top){var g=function(){if(W){return}try{d.documentElement.doScroll("left")}catch(X){K(g,1);return}s()};g()}}v(N,"load",s)}function G(Y,X){if(W){Y.call(X);return}J.push(function(){Y.call(X)})}function m(){var Z=parent;if(I!==""){for(var X=0,Y=I.split(".");X<Y.length;X++){Z=Z[Y[X]]}}return Z.easyXDM}function e(X){N.easyXDM=M;I=X;if(I){U="easyXDM_"+I.replace(".","_")+"_"}return o}function z(X){return X.match(Q)[3]}function f(X){return X.match(Q)[4]||""}function j(Z){var X=Z.toLowerCase().match(Q);var aa=X[2],ab=X[3],Y=X[4]||"";if((aa=="http:"&&Y==":80")||(aa=="https:"&&Y==":443")){Y=""}return aa+"//"+ab+Y}function B(X){X=X.replace(F,"$1/");if(!X.match(/^(http||https):\/\//)){var Y=(X.substring(0,1)==="/")?"":p.pathname;if(Y.substring(Y.length-1)!=="/"){Y=Y.substring(0,Y.lastIndexOf("/")+1)}X=p.protocol+"//"+p.host+Y+X}while(R.test(X)){X=X.replace(R,"")}return X}function P(X,aa){var ac="",Z=X.indexOf("#");if(Z!==-1){ac=X.substring(Z);X=X.substring(0,Z)}var ab=[];for(var Y in aa){if(aa.hasOwnProperty(Y)){ab.push(Y+"="+H(aa[Y]))}}return X+(y?"#":(X.indexOf("?")==-1?"?":"&"))+ab.join("&")+ac}var S=(function(X){X=X.substring(1).split("&");var Z={},aa,Y=X.length;while(Y--){aa=X[Y].split("=");Z[aa[0]]=k(aa[1])}return Z}(/xdm_e=/.test(p.search)?p.search:p.hash));function t(X){return typeof X==="undefined"}var O=function(){var Y={};var Z={a:[1,2,3]},X='{"a":[1,2,3]}';if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(Z).replace((/\s/g),"")===X){return JSON}if(Object.toJSON){if(Object.toJSON(Z).replace((/\s/g),"")===X){Y.stringify=Object.toJSON}}if(typeof String.prototype.evalJSON==="function"){Z=X.evalJSON();if(Z.a&&Z.a.length===3&&Z.a[2]===3){Y.parse=function(aa){return aa.evalJSON()}}}if(Y.stringify&&Y.parse){O=function(){return Y};return Y}return null};function T(X,Y,Z){var ab;for(var aa in Y){if(Y.hasOwnProperty(aa)){if(aa in X){ab=Y[aa];if(typeof ab==="object"){T(X[aa],ab,Z)}else{if(!Z){X[aa]=Y[aa]}}}else{X[aa]=Y[aa]}}}return X}function a(){var Y=d.body.appendChild(d.createElement("form")),X=Y.appendChild(d.createElement("input"));X.name=U+"TEST"+n;E=X!==Y.elements[X.name];d.body.removeChild(Y)}function A(Y){if(t(E)){a()}var ac;if(E){ac=d.createElement('<iframe name="'+Y.props.name+'"/>')}else{ac=d.createElement("IFRAME");ac.name=Y.props.name}ac.id=ac.name=Y.props.name;delete Y.props.name;if(typeof Y.container=="string"){Y.container=d.getElementById(Y.container)}if(!Y.container){T(ac.style,{position:"absolute",top:"-2000px",left:"0px"});Y.container=d.body}var ab=Y.props.src;Y.props.src="javascript:false";T(ac,Y.props);ac.border=ac.frameBorder=0;ac.allowTransparency=true;Y.container.appendChild(ac);if(Y.onLoad){v(ac,"load",Y.onLoad)}if(Y.usePost){var aa=Y.container.appendChild(d.createElement("form")),X;aa.target=ac.name;aa.action=ab;aa.method="POST";if(typeof(Y.usePost)==="object"){for(var Z in Y.usePost){if(Y.usePost.hasOwnProperty(Z)){if(E){X=d.createElement('<input name="'+Z+'"/>')}else{X=d.createElement("INPUT");X.name=Z}X.value=Y.usePost[Z];aa.appendChild(X)}}}aa.submit();aa.parentNode.removeChild(aa)}else{ac.src=ab}Y.props.src=ab;return ac}function V(aa,Z){if(typeof aa=="string"){aa=[aa]}var Y,X=aa.length;while(X--){Y=aa[X];Y=new RegExp(Y.substr(0,1)=="^"?Y:("^"+Y.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));if(Y.test(Z)){return true}}return false}function l(Z){var ae=Z.protocol,Y;Z.isHost=Z.isHost||t(S.xdm_p);y=Z.hash||false;if(!Z.props){Z.props={}}if(!Z.isHost){Z.channel=S.xdm_c.replace(/["'<>\\]/g,"");Z.secret=S.xdm_s;Z.remote=S.xdm_e.replace(/["'<>\\]/g,"");ae=S.xdm_p;if(Z.acl&&!V(Z.acl,Z.remote)){throw new Error("Access denied for "+Z.remote)}}else{Z.remote=B(Z.remote);Z.channel=Z.channel||"default"+n++;Z.secret=Math.random().toString(16).substring(2);if(t(ae)){if(j(p.href)==j(Z.remote)){ae="4"}else{if(C(N,"postMessage")||C(d,"postMessage")){ae="1"}else{if(Z.swf&&C(N,"ActiveXObject")&&c()){ae="6"}else{if(navigator.product==="Gecko"&&"frameElement" in N&&navigator.userAgent.indexOf("WebKit")==-1){ae="5"}else{if(Z.remoteHelper){ae="2"}else{ae="0"}}}}}}}Z.protocol=ae;switch(ae){case"0":T(Z,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);if(Z.isHost){if(!Z.local){var ac=p.protocol+"//"+p.host,X=d.body.getElementsByTagName("img"),ad;var aa=X.length;while(aa--){ad=X[aa];if(ad.src.substring(0,ac.length)===ac){Z.local=ad.src;break}}if(!Z.local){Z.local=N}}var ab={xdm_c:Z.channel,xdm_p:0};if(Z.local===N){Z.usePolling=true;Z.useParent=true;Z.local=p.protocol+"//"+p.host+p.pathname+p.search;ab.xdm_e=Z.local;ab.xdm_pa=1}else{ab.xdm_e=B(Z.local)}if(Z.container){Z.useResize=false;ab.xdm_po=1}Z.remote=P(Z.remote,ab)}else{T(Z,{channel:S.xdm_c,remote:S.xdm_e,useParent:!t(S.xdm_pa),usePolling:!t(S.xdm_po),useResize:Z.useParent?false:Z.useResize})}Y=[new o.stack.HashTransport(Z),new o.stack.ReliableBehavior({}),new o.stack.QueueBehavior({encode:true,maxLength:4000-Z.remote.length}),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"1":Y=[new o.stack.PostMessageTransport(Z)];break;case"2":if(Z.isHost){Z.remoteHelper=B(Z.remoteHelper)}Y=[new o.stack.NameTransport(Z),new o.stack.QueueBehavior(),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"3":Y=[new o.stack.NixTransport(Z)];break;case"4":Y=[new o.stack.SameOriginTransport(Z)];break;case"5":Y=[new o.stack.FrameElementTransport(Z)];break;case"6":if(!i){c()}Y=[new o.stack.FlashTransport(Z)];break}Y.push(new o.stack.QueueBehavior({lazy:Z.lazy,remove:true}));return Y}function D(aa){var ab,Z={incoming:function(ad,ac){this.up.incoming(ad,ac)},outgoing:function(ac,ad){this.down.outgoing(ac,ad)},callback:function(ac){this.up.callback(ac)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}};for(var Y=0,X=aa.length;Y<X;Y++){ab=aa[Y];T(ab,Z,true);if(Y!==0){ab.down=aa[Y-1]}if(Y!==X-1){ab.up=aa[Y+1]}}return ab}function w(X){X.up.down=X.down;X.down.up=X.up;X.up=X.down=null}T(o,{version:"2.4.19.3",query:S,stack:{},apply:T,getJSONObject:O,whenReady:G,noConflict:e});o.DomHelper={on:v,un:x,requiresJSON:function(X){if(!u(N,"JSON")){d.write('<script type="text/javascript" src="'+X+'"><\/script>')}}};(function(){var X={};o.Fn={set:function(Y,Z){X[Y]=Z},get:function(Z,Y){if(!X.hasOwnProperty(Z)){return}var aa=X[Z];if(Y){delete X[Z]}return aa}}}());o.Socket=function(Y){var X=D(l(Y).concat([{incoming:function(ab,aa){Y.onMessage(ab,aa)},callback:function(aa){if(Y.onReady){Y.onReady(aa)}}}])),Z=j(Y.remote);this.origin=j(Y.remote);this.destroy=function(){X.destroy()};this.postMessage=function(aa){X.outgoing(aa,Z)};X.init()};o.Rpc=function(Z,Y){if(Y.local){for(var ab in Y.local){if(Y.local.hasOwnProperty(ab)){var aa=Y.local[ab];if(typeof aa==="function"){Y.local[ab]={method:aa}}}}}var X=D(l(Z).concat([new o.stack.RpcBehavior(this,Y),{callback:function(ac){if(Z.onReady){Z.onReady(ac)}}}]));this.origin=j(Z.remote);this.destroy=function(){X.destroy()};X.init()};o.stack.SameOriginTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa(ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:p.protocol+"//"+p.host+p.pathname,xdm_c:Y.channel,xdm_p:4}),name:U+Y.channel+"_provider"});ab=A(Y);o.Fn.set(Y.channel,function(ac){aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}})}else{aa=m().Fn.get(Y.channel,true)(function(ac){Z.up.incoming(ac,X)});K(function(){Z.up.callback(true)},0)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.FlashTransport=function(aa){var ac,X,ab,ad,Y,ae;function af(ah,ag){K(function(){ac.up.incoming(ah,ad)},0)}function Z(ah){var ag=aa.swf+"?host="+aa.isHost;var aj="easyXDM_swf_"+Math.floor(Math.random()*10000);o.Fn.set("flash_loaded"+ah.replace(/[\-.]/g,"_"),function(){o.stack.FlashTransport[ah].swf=Y=ae.firstChild;var ak=o.stack.FlashTransport[ah].queue;for(var al=0;al<ak.length;al++){ak[al]()}ak.length=0});if(aa.swfContainer){ae=(typeof aa.swfContainer=="string")?d.getElementById(aa.swfContainer):aa.swfContainer}else{ae=d.createElement("div");T(ae.style,h&&aa.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});d.body.appendChild(ae)}var ai="callback=flash_loaded"+H(ah.replace(/[\-.]/g,"_"))+"&proto="+b.location.protocol+"&domain="+H(z(b.location.href))+"&port="+H(f(b.location.href))+"&ns="+H(I);ae.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+aj+"' data='"+ag+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+ag+"'></param><param name='flashvars' value='"+ai+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+ai+"' allowScriptAccess='always' wmode='transparent' src='"+ag+"' height='1' width='1'></embed></object>"}return(ac={outgoing:function(ah,ai,ag){Y.postMessage(aa.channel,ah.toString());if(ag){ag()}},destroy:function(){try{Y.destroyChannel(aa.channel)}catch(ag){}Y=null;if(X){X.parentNode.removeChild(X);X=null}},onDOMReady:function(){ad=aa.remote;o.Fn.set("flash_"+aa.channel+"_init",function(){K(function(){ac.up.callback(true)})});o.Fn.set("flash_"+aa.channel+"_onMessage",af);aa.swf=B(aa.swf);var ah=z(aa.swf);var ag=function(){o.stack.FlashTransport[ah].init=true;Y=o.stack.FlashTransport[ah].swf;Y.createChannel(aa.channel,aa.secret,j(aa.remote),aa.isHost);if(aa.isHost){if(h&&aa.swfNoThrottle){T(aa.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})}T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:6,xdm_s:aa.secret}),name:U+aa.channel+"_provider"});X=A(aa)}};if(o.stack.FlashTransport[ah]&&o.stack.FlashTransport[ah].init){ag()}else{if(!o.stack.FlashTransport[ah]){o.stack.FlashTransport[ah]={queue:[ag]};Z(ah)}else{o.stack.FlashTransport[ah].queue.push(ag)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.PostMessageTransport=function(aa){var ac,ad,Y,Z;function X(ae){if(ae.origin){return j(ae.origin)}if(ae.uri){return j(ae.uri)}if(ae.domain){return p.protocol+"//"+ae.domain}throw"Unable to retrieve the origin of the event"}function ab(af){var ae=X(af);if(ae==Z&&af.data.substring(0,aa.channel.length+1)==aa.channel+" "){ac.up.incoming(af.data.substring(aa.channel.length+1),ae)}}return(ac={outgoing:function(af,ag,ae){Y.postMessage(aa.channel+" "+af,ag||Z);if(ae){ae()}},destroy:function(){x(N,"message",ab);if(ad){Y=null;ad.parentNode.removeChild(ad);ad=null}},onDOMReady:function(){Z=j(aa.remote);if(aa.isHost){var ae=function(af){if(af.data==aa.channel+"-ready"){Y=("postMessage" in ad.contentWindow)?ad.contentWindow:ad.contentWindow.document;x(N,"message",ae);v(N,"message",ab);K(function(){ac.up.callback(true)},0)}};v(N,"message",ae);T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:1}),name:U+aa.channel+"_provider"});ad=A(aa)}else{v(N,"message",ab);Y=("postMessage" in N.parent)?N.parent:N.parent.document;Y.postMessage(aa.channel+"-ready",Z);K(function(){ac.up.callback(true)},0)}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.FrameElementTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa.call(this,ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:j(p.href),xdm_c:Y.channel,xdm_p:5}),name:U+Y.channel+"_provider"});ab=A(Y);ab.fn=function(ac){delete ab.fn;aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}}}else{if(d.referrer&&j(d.referrer)!=S.xdm_e){N.top.location=S.xdm_e}aa=N.frameElement.fn(function(ac){Z.up.incoming(ac,X)});Z.up.callback(true)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.NameTransport=function(ab){var ac;var ae,ai,aa,ag,ah,Y,X;function af(al){var ak=ab.remoteHelper+(ae?"#_3":"#_2")+ab.channel;ai.contentWindow.sendMessage(al,ak)}function ad(){if(ae){if(++ag===2||!ae){ac.up.callback(true)}}else{af("ready");ac.up.callback(true)}}function aj(ak){ac.up.incoming(ak,Y)}function Z(){if(ah){K(function(){ah(true)},0)}}return(ac={outgoing:function(al,am,ak){ah=ak;af(al)},destroy:function(){ai.parentNode.removeChild(ai);ai=null;if(ae){aa.parentNode.removeChild(aa);aa=null}},onDOMReady:function(){ae=ab.isHost;ag=0;Y=j(ab.remote);ab.local=B(ab.local);if(ae){o.Fn.set(ab.channel,function(al){if(ae&&al==="ready"){o.Fn.set(ab.channel,aj);ad()}});X=P(ab.remote,{xdm_e:ab.local,xdm_c:ab.channel,xdm_p:2});T(ab.props,{src:X+"#"+ab.channel,name:U+ab.channel+"_provider"});aa=A(ab)}else{ab.remoteHelper=ab.remote;o.Fn.set(ab.channel,aj)}var ak=function(){var al=ai||this;x(al,"load",ak);o.Fn.set(ab.channel+"_load",Z);(function am(){if(typeof al.contentWindow.sendMessage=="function"){ad()}else{K(am,50)}}())};ai=A({props:{src:ab.local+"#_4"+ab.channel},onLoad:ak})},init:function(){G(ac.onDOMReady,ac)}})};o.stack.HashTransport=function(Z){var ac;var ah=this,af,aa,X,ad,am,ab,al;var ag,Y;function ak(ao){if(!al){return}var an=Z.remote+"#"+(am++)+"_"+ao;((af||!ag)?al.contentWindow:al).location=an}function ae(an){ad=an;ac.up.incoming(ad.substring(ad.indexOf("_")+1),Y)}function aj(){if(!ab){return}var an=ab.location.href,ap="",ao=an.indexOf("#");if(ao!=-1){ap=an.substring(ao)}if(ap&&ap!=ad){ae(ap)}}function ai(){aa=setInterval(aj,X)}return(ac={outgoing:function(an,ao){ak(an)},destroy:function(){N.clearInterval(aa);if(af||!ag){al.parentNode.removeChild(al)}al=null},onDOMReady:function(){af=Z.isHost;X=Z.interval;ad="#"+Z.channel;am=0;ag=Z.useParent;Y=j(Z.remote);if(af){T(Z.props,{src:Z.remote,name:U+Z.channel+"_provider"});if(ag){Z.onLoad=function(){ab=N;ai();ac.up.callback(true)}}else{var ap=0,an=Z.delay/50;(function ao(){if(++ap>an){throw new Error("Unable to reference listenerwindow")}try{ab=al.contentWindow.frames[U+Z.channel+"_consumer"]}catch(aq){}if(ab){ai();ac.up.callback(true)}else{K(ao,50)}}())}al=A(Z)}else{ab=N;ai();if(ag){al=parent;ac.up.callback(true)}else{T(Z,{props:{src:Z.remote+"#"+Z.channel+new Date(),name:U+Z.channel+"_consumer"},onLoad:function(){ac.up.callback(true)}});al=A(Z)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.ReliableBehavior=function(Y){var aa,ac;var ab=0,X=0,Z="";return(aa={incoming:function(af,ad){var ae=af.indexOf("_"),ag=af.substring(0,ae).split(",");af=af.substring(ae+1);if(ag[0]==ab){Z="";if(ac){ac(true)}}if(af.length>0){aa.down.outgoing(ag[1]+","+ab+"_"+Z,ad);if(X!=ag[1]){X=ag[1];aa.up.incoming(af,ad)}}},outgoing:function(af,ad,ae){Z=af;ac=ae;aa.down.outgoing(X+","+(++ab)+"_"+af,ad)}})};o.stack.QueueBehavior=function(Z){var ac,ad=[],ag=true,aa="",af,X=0,Y=false,ab=false;function ae(){if(Z.remove&&ad.length===0){w(ac);return}if(ag||ad.length===0||af){return}ag=true;var ah=ad.shift();ac.down.outgoing(ah.data,ah.origin,function(ai){ag=false;if(ah.callback){K(function(){ah.callback(ai)},0)}ae()})}return(ac={init:function(){if(t(Z)){Z={}}if(Z.maxLength){X=Z.maxLength;ab=true}if(Z.lazy){Y=true}else{ac.down.init()}},callback:function(ai){ag=false;var ah=ac.up;ae();ah.callback(ai)},incoming:function(ak,ai){if(ab){var aj=ak.indexOf("_"),ah=parseInt(ak.substring(0,aj),10);aa+=ak.substring(aj+1);if(ah===0){if(Z.encode){aa=k(aa)}ac.up.incoming(aa,ai);aa=""}}else{ac.up.incoming(ak,ai)}},outgoing:function(al,ai,ak){if(Z.encode){al=H(al)}var ah=[],aj;if(ab){while(al.length!==0){aj=al.substring(0,X);al=al.substring(aj.length);ah.push(aj)}while((aj=ah.shift())){ad.push({data:ah.length+"_"+aj,origin:ai,callback:ah.length===0?ak:null})}}else{ad.push({data:al,origin:ai,callback:ak})}if(Y){ac.down.init()}else{ae()}},destroy:function(){af=true;ac.down.destroy()}})};o.stack.VerifyBehavior=function(ab){var ac,aa,Y,Z=false;function X(){aa=Math.random().toString(16).substring(2);ac.down.outgoing(aa)}return(ac={incoming:function(af,ad){var ae=af.indexOf("_");if(ae===-1){if(af===aa){ac.up.callback(true)}else{if(!Y){Y=af;if(!ab.initiate){X()}ac.down.outgoing(af)}}}else{if(af.substring(0,ae)===Y){ac.up.incoming(af.substring(ae+1),ad)}}},outgoing:function(af,ad,ae){ac.down.outgoing(aa+"_"+af,ad,ae)},callback:function(ad){if(ab.initiate){X()}}})};o.stack.RpcBehavior=function(ad,Y){var aa,af=Y.serializer||O();var ae=0,ac={};function X(ag){ag.jsonrpc="2.0";aa.down.outgoing(af.stringify(ag))}function ab(ag,ai){var ah=Array.prototype.slice;return function(){var aj=arguments.length,al,ak={method:ai};if(aj>0&&typeof arguments[aj-1]==="function"){if(aj>1&&typeof arguments[aj-2]==="function"){al={success:arguments[aj-2],error:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-2)}else{al={success:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-1)}ac[""+(++ae)]=al;ak.id=ae}else{ak.params=ah.call(arguments,0)}if(ag.namedParams&&ak.params.length===1){ak.params=ak.params[0]}X(ak)}}function Z(an,am,ai,al){if(!ai){if(am){X({id:am,error:{code:-32601,message:"Procedure not found."}})}return}var ak,ah;if(am){ak=function(ao){ak=q;X({id:am,result:ao})};ah=function(ao,ap){ah=q;var aq={id:am,error:{code:-32099,message:ao}};if(ap){aq.error.data=ap}X(aq)}}else{ak=ah=q}if(!r(al)){al=[al]}try{var ag=ai.method.apply(ai.scope,al.concat([ak,ah]));if(!t(ag)){ak(ag)}}catch(aj){ah(aj.message)}}return(aa={incoming:function(ah,ag){var ai=af.parse(ah);if(ai.method){if(Y.handle){Y.handle(ai,X)}else{Z(ai.method,ai.id,Y.local[ai.method],ai.params)}}else{var aj=ac[ai.id];if(ai.error){if(aj.error){aj.error(ai.error)}}else{if(aj.success){aj.success(ai.result)}}delete ac[ai.id]}},init:function(){if(Y.remote){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)){ad[ag]=ab(Y.remote[ag],ag)}}}aa.down.init()},destroy:function(){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)&&ad.hasOwnProperty(ag)){delete ad[ag]}}aa.down.destroy()}})};b.easyXDM=o})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
    },

    get: function(xhrhost, url, data, success, complete) {
        this.send(xhrhost, url, 'GET', data, success, complete);
    },

    post: function(xhrhost, url, data, success, complete) {
        if (Cackle.auth && Cackle.auth.provider == 'sso' && /Safari/.test(navigator.userAgent) && /Apple/.test(navigator.vendor)) {
            var p3pCookie = Cackle.getCookie('mc-sso-p3p');
            if (p3pCookie) {
                this.postP3P(p3pCookie, url, data, success, complete);
                return;
            }
        }
        this.doPost(url, data, success, complete);
    },

    //In iOS (Safari) SSO auth don't set cookie according P3P policy
    //This is workaround for set cookie into window.popup
    postP3P: function(p3pCookie, url, data, success, complete) {
        var handler = this,
            p3pJson = JSON.parse(p3pCookie),
            win = Cackle.Fastjs.popup(p3pJson.url, 1, 1, p3pJson.params, 1000000, 1000000);

        function check() {
            if (!win || win.closed != false) {
                Cackle.Cookie.erase('mc-sso-p3p');
                handler.doPost(url, data, success, complete);
            } else {
                setTimeout(check, 10);
            }
        }
        setTimeout(check, 10);
    },

    doPost: function(url, data, success, complete) {
        url = url.replace(/https?.*cackle.me/, Cackle.origin);
        this.send(Cackle.origin, url, 'POST', data, success, complete);
    },

    send: function(xhrhost, url, type, data, success, complete) {
        if (data) {
            for (d in data) {
                if (data.hasOwnProperty(d)) {
                    var val = data[d];
                    if (typeof val == 'string') {
                        data[d] = this.escape(val);
                    }
                }
            }
        }
        this.xhr(xhrhost).request({url: url, method: type, headers: {'Accept': 'application/json;'}, data: data},
            function(res) {
                if (success) {
                    if (res.data) {
                        var json;
                        try { json = JSON.parse(res.data); } catch (e) {}
                        success(json || res.data);
                    } else {
                        success();
                    }
                }
                if (complete) complete();
            }, function(res) {
                if (complete) complete();
            }
        );
    },

    escape: function(str) {
        var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            meta = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"' : '\\"', '\\': '\\\\'};

        escapable.lastIndex = 0;
        return escapable.test(str) ?
            str.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) : str;
    },

    stringify: function (obj) {
        var t = typeof (obj);
        if (t != "object" || obj === null) {
            if (t == "string"){obj = '"'+obj+'"';}
            return String(obj);
        }
        else {
            var n, v, json = [], arr = (obj && obj.constructor == Array);
            for (n in obj) {
                if (obj.hasOwnProperty(n)) {
                    v = obj[n]; t = typeof(v);
                    if (t == "string"){v = '"'+v+'"';}else if (t == "object" && v !== null){v = this.stringify(v);}
                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }
            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    }
};var Cackle=Cackle||{};
Cackle.Cookie=Cackle.Cookie||{create:function(b,d,e){var c=b+"="+encodeURIComponent(d);
if(e){var a=new Date();
a.setTime(a.getTime()+(e*24*60*60*1000));
c+=";expires="+a.toGMTString()
}if(window.mcXDCookie){c+=";domain="+this.getXDomain()
}c+=";path=/";
document.cookie=c
},getXDomain:function(){var b=window.location.hostname.split("."),a=b.length;
if(a>1){return"."+b[a-2]+"."+b[a-1]
}else{return""
}},read:function(b){var e=b+"=",a=document.cookie.split(";");
for(var d=0;
d<a.length;
d+=1){var f=a[d];
while(f.charAt(0)===" "){f=f.substring(1,f.length)
}if(f.indexOf(e)===0){return decodeURIComponent(f.substring(e.length,f.length))
}}return null
},erase:function(a){this.create(a,"",-1)
}};var Cackle=Cackle||{};
Cackle.Storage=Cackle.Storage||{storage:null,init:function(){var a=false;
if("localStorage" in window){try{window.localStorage.setItem("_tmptest","tmpval");
a=true;
window.localStorage.removeItem("_tmptest")
}catch(d){}}if(a){try{if(window.localStorage){this.storage=window.localStorage
}}catch(c){}}else{if("globalStorage" in window){try{if(window.globalStorage){if(window.location.hostname=="localhost"){this.storage=window.globalStorage["localhost.localdomain"]
}else{this.storage=window.globalStorage[window.location.hostname]
}}}catch(b){}}else{if(Cackle.Cookie){this.storage={setItem:function(e,f){Cackle.Cookie.create(e,f,365)
},getItem:function(e){return Cackle.Cookie.read(e)
},removeItem:function(e){Cackle.Cookie.erase(e)
}}
}}}},set:function(a,b){var c=JSON.stringify(b);
this.storage.setItem(a,c)
},get:function(a){var c=this.storage.getItem(a);
try{return JSON.parse(c)
}catch(b){return c
}},remove:function(a){this.storage.removeItem(a)
}};
Cackle.Storage.init();Cackle.Login=Cackle.Login||{providers:{googleplus:{name:"Google+",url:"/signin/proxy?provider=googleplus&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email"},yahoo:{name:"Yahoo",url:"/signin/proxy?openid_identifier=http://me.yahoo.com/"},yandex:{name:"Яндекс",url:"/signin/proxy?provider=yandex"},vkontakte:{name:"Вконтакте",url:"/signin/proxy?provider=vkontakte&scope=wall,offline,notify,email"},facebook:{name:"Facebook",url:"/signin/proxy?provider=facebook&scope=email,status_update,offline_access"},twitter:{name:"Twitter",url:"/signin/proxy?provider=twitter"},linkedin:{name:"Linkedin",url:"/signin/proxy?provider=linkedin&scope=r_basicprofile,r_emailaddress"},mymailru:{name:"Мой Мир",url:"/signin/proxy?provider=mymailru&scope=stream"},odnoklassniki:{name:"OK",url:"/signin/proxy?provider=odnoklassniki&scope=VALUABLE%20ACCESS"},"500px":{name:"500px",url:"/signin/proxy?provider=500px"},dropbox:{name:"Dropbox",url:"/signin/proxy?provider=dropbox"},foursquare:{name:"Foursquare",url:"/signin/proxy?provider=foursquare"},instagram:{name:"Instagram",url:"/signin/proxy?provider=instagram&scope=basic"},live:{name:"Live",url:"/signin/proxy?provider=live&scope=wl.basic,wl.emails"},stackoverflow:{name:"Stackoverflow",url:"/signin/proxy?provider=stackoverflow"},yammer:{name:"Yammer",url:"/signin/proxy?provider=yammer"},tumblr:{name:"Tumblr",url:"/signin/proxy?provider=tumblr"},soundcloud:{name:"Soundcloud",url:"/signin/proxy?provider=soundcloud"},cackle:{name:"Cackle",url:"/account/signin?returnUrl=/login/success"},livejournal:{name:"Живой Журнал",url:"/signin/livejournal"},wordpress:{name:"WordPress",url:"/signin/wordpress"},anonym:{name:"Anonymously",popup:true},other:{name:"Other",popup:true}},timeout:100,popupSize:{social:{width:670,height:520},auth:{width:500,height:350}},customRender:function(c,b,d,f){var j=this,g=b.getElementsByTagName("*");
if(c.ssoProvider){Cackle.Fastjs.prepend(b,this.renderSSO(c))
}for(var e=0;
e<g.length;
e++){var a=g[e],h=a.getAttribute("data-provider");
if(h&&!c.demo){Cackle.Fastjs.on(a,"click",function(i){j.login(c,this,d,f);
return false
})
}}},defaultRender:function(a){var c=Cackle.Fastjs.create("ul","mc-auth-providers"),e=this.getProviders(a);
if(a.ssoProvider){c.appendChild(this.renderSSO(a))
}for(var b=0;
b<e.length;
b++){if(e[b]&&this.providers[e[b]]){c.appendChild(this.renderSocial(a,e[b]));
if(e[b]=="other"){break
}else{if(b==a.data.providersCount){c.appendChild(this.renderSocial(a,"other"));
break
}}}}var d=Cackle.Fastjs.create("div","cl");
d.appendChild(c);
return d
},getProviders:function(a){var b=a.providers||(a.data&&a.data.providers);
if(b){return b.split(";")
}return[]
},defaultProviders:function(){var a=[];
for(var b in this.providers){a.push(b)
}return a
},renderSSO:function(c){var f=this,d=c.ssoProvider,b=Cackle.Fastjs.create(c.ssoEl||"li","mc-sso-provider",d.name),a=Cackle.Fastjs.create("img"),e="";
a.src=d.logo;
b.appendChild(a);
if(d.width){e+="width:"+d.width+"px!important;"
}if(d.height){e+="height:"+d.height+"px!important;"
}if(e){b.setAttribute("style",e);
a.setAttribute("style",e)
}Cackle.Fastjs.on(b,"click",function(g){if(c.ssoPreCallback){c.ssoPreCallback()
}f.loginPopup(c,d.url,{},f.popupSize.social,null,c.ssoCallback,true);
return false
});
return b
},renderSocial:function(c,d){var e=this,b=this.providers[d].name,a=Cackle.Fastjs.create("li","mc-auth-provider mc-auth-"+d,b);
a.setAttribute("data-provider",d);
if(!c.demo){Cackle.Fastjs.on(a,"click",function(f){e.login(c,this,e.getCallback(c,"login"));
return false
})
}return a
},login:function(c,g,d,f){var a=g.getAttribute("data-provider"),h=Cackle.Login.providers[a],b,e,i;
if(h&&!h.popup){b=Cackle.origin+h.url;
this.setVerifyParam(c,e={});
i=this.popupSize.social
}else{b=this.getAuthUrl(c);
e=this.getAuthParams(c);
if(h){e.provider=a
}i=this.popupSize.auth
}this.loginPopup(c,b,e,i,d,f)
},loginPopup:function(b,a,g,c,h,e,d){var f=Cackle.Fastjs.popup(a,c.width,c.height,g);
this.checkConnection(b,f,h,e,d)
},getAuthUrl:function(a){return Cackle.origin+"/login/"+a.id+"/popup"
},getAuthParams:function(a){var b={};
if(a.lang){b.locale=a.lang
}this.setVerifyParam(a,b);
if(a.ssoProvider){var c=a.ssoProvider;
b.ssoName=c.name;
b.ssoUrl=c.url;
b.ssoLogo=c.logo;
if(c.width&&c.height){b.ssoWidth=c.width;
b.ssoHeight=c.height
}}if(a.guest){if(a.guest.first){b.guestFirst=true
}if(a.guest.hideEmail){b.guestHideEmail=true
}}return b
},setVerifyParam:function(a,c){var b=a.verifyEmail||(a.data&&a.data.verifyEmail);
if(b){c.verifyUrl="/widget/"+a.id+"/verify"
}},checkConnection:function(b,f,g,e,d){var c=this;
function a(){if(!f||f.closed!=false){var h=Cackle.Cookie.read("mc-sso-auth");
if(h){Cackle.Cookie.create("mc-sso-auth","");
if("success"==h){Cackle.Storage.set("mc-event",e);
window.location.reload()
}}else{if(d){window.location.reload()
}else{c.authorize(b,true,g)
}}}else{setTimeout(a,c.timeout)
}}this.callback(b,"before");
setTimeout(a,c.timeout)
},authorize:function(c,d,g,a){var e=this,b=c.host+"/login/"+c.id+"/authorize.json",f={};
if(c.chanId>0){f.chanId=c.chanId
}Cackle.PostMessage.get(c.host,b,f,function(h){e.authorizeResp(c,d,h.authorizeResponse,g,a)
})
},authorizeAnonym:function(d,a,f,g,h,c){var i=this,b=d.host+"/login/"+d.id+"/anonym.json",e={name:a};
if(f){e.email=f
}if(g){e.captcha=g
}Cackle.PostMessage.post(d.host,b,e,function(j){i.authorizeResp(d,true,j.authorizeResponse,h,c)
})
},authorizeResp:function(c,d,e,f,a){Cackle.auth=Cackle.Login.auth=e.auth;
Cackle.Fastjs.cbs(c,"loggedin",e.auth);
if(d){var g=c.redirect||(c.data&&c.data.redirectUri);
if(g){this.post(g,{name:"token",value:e.token})
}var b=c.callbackjs||(c.data&&c.data.callback);
if(b){this.execfun(b,[e.token,e.auth])
}}this.callback(c,"after",e.auth);
if(f&&this.isAuthorized()){f(e.auth)
}if(a){a()
}},post:function(b,d){var c=document.createElement("form");
c.action=decodeURIComponent(b.match("^https?://")?b:"http://"+b);
c.method="post";
c.target="_top";
c.style.display="none";
var a=document.createElement("input");
a.type="hidden";
a.name=d.name;
a.value=d.value;
c.appendChild(a);
document.body.appendChild(c);
c.submit()
},execfun:function(a,c){try{window[a](c[0],c[1],c[2],c[3],c[4])
}catch(b){try{a(c[0],c[1],c[2],c[3],c[4])
}catch(b){}}},logout:function(b,d){var c=b?b.host:Cackle.origin,a=c+"/login/logout.json";
Cackle.PostMessage.get(c,a,null,function(){Cackle.auth=Cackle.Login.auth={};
if(d){d({})
}if(b){Cackle.Fastjs.cbs(b,"logout")
}})
},isAuthorized:function(){return Cackle.Login.auth&&Cackle.Login.auth.id
},overrideAuthPopup:function(a,d,c){var b=this;
if(c){Cackle.Storage.set("mc-event",c)
}a.authPopup(function(e){if(e){a.ssoAuth=e;
Cackle.Login.SSO.auth(a,function(f){b.callback(a,"after",f);
if(d){d();
Cackle.Storage.remove("mc-event")
}})
}else{b.authorize(a,false,d)
}})
},getCallback:function(b,a){return b.callback?b.callback[a]:null
},callback:function(d,c,b){var a=this.getCallback(d,c);
if(a){a(b)
}},SSO:{flag:"e30= ",cookie:"mc-sso-user",provider:"sso",init:function(a,b){if(a.ssoAuth){if(a.ssoAuth.indexOf(this.flag)<0){if(this.isAuthNeed(a)){this.auth(a,b)
}}else{if(a.ssoAuth.indexOf(this.flag)==0&&this.isAuthorized()){Cackle.Login.logout(a,Cackle.Login.getCallback(a,"after"))
}}}},isAuthNeed:function(a){return !Cackle.Login.isAuthorized()||(Cackle.Login.auth.provider!=this.provider&&a.ssoPrimary)||(Cackle.Login.auth.provider==this.provider&&this.getUser(a)!=Cackle.Cookie.read(this.cookie))
},getUser:function(a){return a.ssoAuth.split(" ")[0]
},auth:function(b,d){var c=this,a=b.host+"/login/"+b.id+"/sso.json";
Cackle.PostMessage.post(b.host,a,{token:b.ssoAuth,widget:b.widget},function(e){var f=e.widgetUser;
Cackle.auth=Cackle.Login.auth=f;
if(Cackle.Login.isAuthorized()){Cackle.Cookie.create(c.cookie,c.getUser(b),365);
Cackle.Login.callback(b,"after",f);
if(d){d(f)
}}})
},isAuthorized:function(){return Cackle.Login.isAuthorized()&&Cackle.Login.auth.provider==this.provider
}}};
Cackle.Login.main=function(a){if(!a.demo){Cackle.Login.authorize(a,false,null,function(){var c=Cackle.Login.getCallback(a,"sso");
Cackle.Login.SSO.init(a,c)
})
}var b=document.getElementById(a.container||"mc-login");
if(b){if(b.hasChildNodes()){Cackle.Login.customRender(a,b)
}else{b.appendChild(Cackle.Login.defaultRender(a))
}}return{init:function(f,d,c){var e=document.getElementById(f);
if(e){if(e.hasChildNodes()){Cackle.Login.customRender(a,e,d,c)
}else{e.appendChild(Cackle.Login.defaultRender(a))
}}},loginPopup:function(g,e){if(a.authPopup){Cackle.Login.overrideAuthPopup(a,g,e);
return
}var c=Cackle.Login.getAuthUrl(a),f=Cackle.Login.getAuthParams(a),d=Cackle.Login.popupSize.auth;
Cackle.Login.loginPopup(a,c,f,d,g,e)
},anonymAuth:function(e,d,c,f){Cackle.Login.authorizeAnonym(a,e,d,c,f)
},correctAuth:function(){var c=a.data.providers;
if(c&&Cackle.Login.isAuthorized()){var e=c.split(";"),d=Cackle.Login.auth.provider;
return d=="guest"||d=="sso"||Cackle.Fastjs.inArray(e,d)>-1
}return false
}}
};var Cackle=Cackle||{};
Cackle.Media=Cackle.Media||{srv:"https://media.cackle.me/",xhr:null,html:'<a href="#" class="mc-attachimg"><i class="mcicon-picture"></i></a><input type="file" tabindex="-1" accept="image/*" style="display:none!important">',pthumb:Cackle.origin+"/widget/img/presen_thumbl.png",uploadImage:function(b){var a=Cackle.Fastjs.next(this);
a.click();
return false
},uploadFiles:function(b,c,d,g){if(!window.FormData){return
}var j=Cackle.Fastjs.prev(c);
Cackle.Fastjs.addcl(j,"mc-spin");
var e=new FormData();
for(var h=0,f;
f=b[h];
++h){e.append("file",f)
}var k=this;
if(!this.xhr){this.xhr=new XMLHttpRequest()
}this.xhr.open("POST",this.srv+"upload2",true);
this.xhr.onload=function(i){if(4===k.xhr.readyState){if(200===k.xhr.status&&k.xhr.responseText.length>0){var a=k.srv+k.xhr.responseText;
if(d){k.attachImage(a,d)
}if(g){g(a)
}Cackle.Fastjs.remcl(j,"mc-spin")
}}};
this.xhr.send(e)
},attachImage:function(b,d){if(b){var c=this.makePreview(b.split(" "),true),e=Cackle.Fastjs.next(d);
if(e&&Cackle.Fastjs.hascl(e,"mc-media-preview")){var a=e.querySelector("ul");
Cackle.Fastjs.each(c.querySelectorAll("li"),function(g){a.appendChild(g)
})
}else{var f=Cackle.Fastjs.create("div","mc-media-preview");
f.appendChild(c);
Cackle.Fastjs.after(d,f)
}}},makeContent:function(e,d,a){var b=this.findLinks(e);
if(b&&b.length>0){var c=this.makePreview(b,d,a);
var f=Cackle.Fastjs.create("div","mc-comment-media");
f.appendChild(c);
return f
}return""
},makeContentHtml:function(c,b){var a=this.makeContent(c,b);
if(a){return a.outerHTML
}return""
},findLinks:function(a){return a.match(/(((\bhttps?:)?(\/\/)?(((www\.)?youtube\.com\/watch\?[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|((www\.)?youtu\.be\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(vimeo\.com\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*\/?(\d)*)|([-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.(png|jpg|jpeg|gif))|(docs\.google\.com\/present\/view?[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(www\.slideshare\.net\/slideshow\/embed_code\/(\d)+))))/ig)
},makePreview:function(b,f,a){var d=this,c=Cackle.Fastjs.create("ul"),e=0;
Cackle.Fastjs.each(b,function(o){var l=o.toString().trim();
if(!l){return
}var m=Cackle.Fastjs.create("li"),i=false,k="img",j;
if(l.indexOf("youtube.com")>-1){j=d.youtubeThumbl(l);
k="youtube";
i=true
}else{if(l.indexOf("youtu.be")>-1){j=d.youtubeShortThumbl(l);
k="youtube";
i=true
}else{if(l.indexOf("vimeo.com")>-1){j=d.vimeoThumbl(l);
k="vimeo";
i=true
}else{if(l.indexOf("docs.google.com")>-1){j=d.imgThumbl(d.pthumb)
}else{if(l.indexOf("slideshare.net")>-1){j=d.imgThumbl(d.pthumb)
}else{j=d.imgThumbl(l)
}}}}}if(!j){return
}var g;
if(f){g=Cackle.Fastjs.create("div","mc-media-surface");
g.setAttribute("data-media",l);
var n=Cackle.Fastjs.create("span");
n.innerHTML="×";
m.appendChild(n);
Cackle.Fastjs.on(n,"click",function(p){m.parentNode.removeChild(m);
return false
})
}else{g=Cackle.Fastjs.create("a");
g.href=l;
g.target="_blank";
g.setAttribute("data-type",k);
Cackle.Fastjs.on(g,"click",d.mediaClick);
if(i){var h=Cackle.Fastjs.create("img","mc-media-play");
h.src=Cackle.origin+"/widget/img/ytplay.png";
g.appendChild(h)
}}j.onload=function(){a&&a()
};
g.appendChild(j);
m.appendChild(g);
c.appendChild(m);
e+=1
});
return c
},mediaClick:function(c){var a=this.getAttribute("href"),b=this.getAttribute("data-type");
if(b!="img"){Cackle.Fastjs.addcl(this.parentNode,"mc-block");
this.outerHTML=Cackle.Media[b+"Video"](a)
}else{if(Cackle.Modal2){Cackle.Media.lightbox(a,this)
}else{return
}}return false
},lightbox:function(e,d){var b='<img src="'+e+'"><div class="mc-media-nav"><span class="mc-media-prev" data-dir="prev"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDI3IDMwMWwtNTMxIDUzMSA1MzEgNTMxcTE5IDE5IDE5IDQ1dC0xOSA0NWwtMTY2IDE2NnEtMTkgMTktNDUgMTl0LTQ1LTE5bC03NDItNzQycS0xOS0xOS0xOS00NXQxOS00NWw3NDItNzQycTE5LTE5IDQ1LTE5dDQ1IDE5bDE2NiAxNjZxMTkgMTkgMTkgNDV0LTE5IDQ1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="></span><span class="mc-media-next" data-dir="next"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMzYzIDg3N2wtNzQyIDc0MnEtMTkgMTktNDUgMTl0LTQ1LTE5bC0xNjYtMTY2cS0xOS0xOS0xOS00NXQxOS00NWw1MzEtNTMxLTUzMS01MzFxLTE5LTE5LTE5LTQ1dDE5LTQ1bDE2Ni0xNjZxMTktMTkgNDUtMTl0NDUgMTlsNzQyIDc0MnExOSAxOSAxOSA0NXQtMTkgNDV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"></span></div>',c=Cackle.Modal2.show("mc-modal-lightbox","",null,b,true),a=c.querySelector("img");
Cackle.Fastjs.on(window,"resize",function(f){Cackle.Media.imgResize(a)
},false);
Cackle.Fastjs.onall2(c,".mc-modal2, .mc-modal-backdrop2","click",function(f){Cackle.Fastjs.rm(c)
},false);
Cackle.Fastjs.onall2(c,".mc-media-prev, .mc-media-prev img, .mc-media-next, .mc-media-next img","click",function(){Cackle.Fastjs.rm(c);
var g=this.getAttribute("data-dir")||this.parentNode.getAttribute("data-dir");
var f=function(j){var i=Cackle.Fastjs[g]((j||d).parentNode);
if(i){var k=Cackle.Fastjs.children(i)[0];
if(k&&k.getAttribute("data-type")=="img"){Cackle.Media.mediaClick.call(k);
return
}else{f(k)
}}else{var h=Cackle.Fastjs.parents(d,"mc-comment-media");
Cackle.Media.mediaClick.call(h.querySelector((g=="prev"?"li:last-child ":"")+'a[data-type="img"]'))
}};
f()
});
Cackle.Media.ratio=false;
Cackle.Media.imgOriginWidth=0;
Cackle.Media.imgOriginHeight=0;
Cackle.Media.imgResize(a)
},youtubeVideo:function(b){if(b.indexOf("youtu.be")>-1){var a=this.youtubeShortRegex(b);
if(a&&a.length>1){return this.youtubeEmbed(b,a[2])
}}else{var a=this.youtubeRegex(b);
if(a&&a.length>0){return this.youtubeEmbed(b,a[1])
}}},youtubeEmbed:function(a,b){return'<object><param name="movie" value="'+a+'"/><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="never"/><embed src="//www.youtube.com/v/'+b+'?f=videos&amp;app=youtube_gdata&amp;autoplay=1&amp;fs=1" type="application/x-shockwave-flash" allowscriptaccess="never" allowfullscreen="true"/></object>'
},vimeoVideo:function(b){var a=/vimeo\.com\/?.*\/(\d+)/.exec(b);
if(a&&a.length>0){return this.vimeoEmbed(a[1])
}},vimeoEmbed:function(a){return'<object><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="//vimeo.com/moogaloop.swf?clip_id='+a+'&amp;server=vimeo.com&amp;color=00adef&amp;fullscreen=1&amp;autoplay=1" /><embed src="//vimeo.com/moogaloop.swf?clip_id='+a+'&amp;server=vimeo.com&amp;color=00adef&amp;fullscreen=1&amp;autoplay=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always"></embed></object>'
},youtubeThumbl:function(b){var a=this.youtubeRegex(b);
if(a&&a.length>0){return this.imgThumbl(this.youtubeThumbSrc(a[1]))
}},youtubeShortThumbl:function(b){var a=this.youtubeShortRegex(b);
if(a&&a.length>1){return this.imgThumbl(this.youtubeThumbSrc(a[2]))
}},youtubeThumbSrc:function(a){return"//i.ytimg.com/vi/"+a+"/0.jpg"
},youtubeRegex:function(a){return/v=([^\?\&]+)/.exec(a)
},youtubeShortRegex:function(a){return/([^\/]+)\/([^\/]+)/.exec(a)
},vimeoThumbl:function(c){var a=/vimeo\.com\/?.*\/(\d+)/.exec(c);
if(a&&a.length>0){var b=Cackle.Fastjs.create("img");
Cackle.Fastjs.jsonp("//vimeo.com/api/v2/video/"+a[1]+".json",null,function(d){b.src=d[0].thumbnail_large
});
return b
}},imgThumbl:function(a){var b=Cackle.Fastjs.create("img");
b.src=a;
return b
},imgResize:function(c){var f,b;
var e=window.innerWidth||document.documentElement.offsetWidth;
var a=window.innerHeight||document.documentElement.offsetHeight;
if(!this.ratio&&c&&c.offsetWidth&&c.offsetHeight){this.ratio=c.offsetWidth/c.offsetHeight
}if(Math.floor(e/this.ratio)>a){f=a*this.ratio;
b=a
}else{f=e;
b=e/this.ratio
}f=Math.floor(f*0.8);
b=Math.floor(b*0.8);
this.imgOriginWidth=this.imgOriginWidth||c.naturalWidth||c.width;
this.imgOriginHeight=this.imgOriginHeight||c.naturalHeight||c.height;
if(f>this.imgOriginWidth||b>this.imgOriginHeight){f=this.imgOriginWidth;
b=this.imgOriginHeight
}var d="width:"+f+"px!important;height:"+b+"px!important;margin-top:"+(((window.innerHeight||document.documentElement.offsetHeight)-b)/2)+"px!important";
c.parentNode.setAttribute("style",d)
}};
Cackle.Media.attach=function(b,c){if(c){var a=c.trim().split(/\s+/);
Cackle.Fastjs.each(a,function(d){Cackle.Media.attachImage(d,b)
})
}};
Cackle.Media.main=function(a,c){if(!a){return
}var b=Cackle.Fastjs.create("div","mc-attachimg-cnt");
b.innerHTML=Cackle.Media.html;
a.appendChild(b);
Cackle.Fastjs.on2(a,".mc-attachimg","click",Cackle.Media.uploadImage);
Cackle.Fastjs.on2(a,'input[type="file"]',"change",function(){Cackle.Media.uploadFiles(this.files,this,a);
this.value=""
});
Cackle.Media.attach(a,c)
};
Cackle.Media.event=function(b,a){Cackle.Fastjs.on2(b,".mc-attachimg","click",Cackle.Media.uploadImage);
Cackle.Fastjs.on2(b,'input[type="file"]',"change",function(){Cackle.Media.uploadFiles(this.files,this,a);
this.value=""
})
};var Cackle=Cackle||{};
Cackle.Time=Cackle.Time||{getTime:function(b,c,a){if(a=="chat"){return this.getChatTime(b,c||"ru")
}else{if(a){return this.getFormatTime(b,a,c||"ru")
}else{return this.getDefaultTime(b,c||"ru")
}}},getChatTime:function(g,j){var c=new Date().getTime(),b=c-g,f=b/1000,a=f/60,e=a/60,i=e/24;
if(e<24){return this.getFormatTime(g,"HH:mm",j)
}else{if(i<365){return this.getFormatTime(g,"dd.MM HH:mm",j)
}else{return this.getFormatTime(g,"yyyy.MM.dd HH:mm",j)
}}},getDefaultTime:function(g,j){var c=new Date(),b=c.getTime()-g,f=b/1000,a=f/60,e=a/60,i=e/24;
if(e<24){return this.getTimeAgo(g,j)
}else{if(i<30){return this.getTimeAgo(g,j)+" "+this.getFormatTime(g,"HH:mm",j)
}else{if(new Date(g).getFullYear()==c.getFullYear()){return this.getFormatTime(g,"dd.MM HH:mm",j)
}else{return this.getFormatTime(g,"yyyy.MM.dd HH:mm",j)
}}}},getTimeAgo:function(c,b){var a=new Date().getTime(),i=a-c,k=i/1000,e=k/60,f=e/60,g=f/24,j=g/365;
b=Cackle.Time.Messages[b]?b:"en";
if(k<45){return Cackle.Time.Messages[b].second
}else{if(k<90){return Cackle.Time.Messages[b].minute
}else{if(e<45){return Cackle.Time.Messages[b].minutes(e)
}else{if(e<90){return Cackle.Time.Messages[b].hour
}else{if(f<24){return Cackle.Time.Messages[b].hours(f)
}else{if(f<48){return Cackle.Time.Messages[b].day
}else{if(g<30){return Cackle.Time.Messages[b].days(g)
}else{if(g<60){return Cackle.Time.Messages[b].month
}else{if(g<365){return Cackle.Time.Messages[b].months(g)
}else{if(j<2){return Cackle.Time.Messages[b].year
}else{return Cackle.Time.Messages[b].years(j)
}}}}}}}}}}},getFormatTime:function(d,c,e){var b=new Date(d),a={SS:b.getMilliseconds(),ss:b.getSeconds(),mm:b.getMinutes(),HH:b.getHours(),hh:((b.getHours()%12)?b.getHours()%12:12)+(b.getHours()>=12?"PM":"AM"),dd:b.getDate(),MM:b.getMonth()+1,yyyy:b.getFullYear(),yy:String(b.getFullYear()).toString().substr(2,2),ago:this.getTimeAgo(d,e)};
return c.replace(/(SS|ss|mm|HH|hh|DD|dd|MM|yyyy|yy|ago)/g,function(f,g){var h=a[g];
return h<10?"0"+h:h
})
},declineNum:function(d,c,b,a){return d+" "+this.declineMsg(d,c,b,a)
},declineMsg:function(e,c,b,a){var d=e%10;
if((d==1)&&((e==1)||(e>20))){return c
}else{if((d>1)&&(d<5)&&((e>20)||(e<10))){return b
}else{return a
}}}};
Cackle.Time.Messages={ru:{second:"только что",minute:"минуту назад",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"минута назад","минуты назад","минут назад")
},hour:"час назад",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"час назад","часа назад","часов назад")
},day:"день назад",days:function(a){return Cackle.Time.declineNum(Math.round(a),"день назад","дня назад","дней назад")
},month:"месяц назад",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"месяц назад","месяца назад","месяцев назад")
},year:"год назад",years:function(a){return Cackle.Time.declineNum(Math.round(a),"год назад","года назад","лет назад")
}},en:{second:"just now",minute:"minute ago",minutes:function(a){return Math.round(a)+" minutes ago"
},hour:"an hour ago",hours:function(a){return"about "+Math.round(a)+" hours ago"
},day:"day ago",days:function(a){return Math.round(a)+" days ago"
},month:"a month ago",months:function(a){return Math.round(a/30)+" months ago"
},year:"a year ago",years:function(a){return Math.round(a)+" years ago"
}},uk:{second:"тільки що",minute:"хвилину тому",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"хвилину тому","хвилини тому","хвилин тому")
},hour:"годину тому",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"годину тому","години тому","годин тому")
},day:"день тому",days:function(a){return Cackle.Time.declineNum(Math.round(a),"день тому","дні тому","днів тому")
},month:"місяць тому",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"місяць тому","місяці тому","місяців тому")
},year:"рік тому",years:function(a){return Cackle.Time.declineNum(Math.round(a),"рік тому","роки тому","років тому")
}},ro:{second:"chiar acum",minute:"în urmă minut",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"o minuta in urma","minute in urma","de minute in urma")
},hour:"acum o ora",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"acum o ora","ore in urma","de ore in urma")
},day:"o zi in urma",days:function(a){return Cackle.Time.declineNum(Math.round(a),"o zi in urma","zile in urma","de zile in urma")
},month:"o luna in urma",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"o luna in urma","luni in urma","de luni in urma")
},year:"un an in urma",years:function(a){return Cackle.Time.declineNum(Math.round(a),"un an in urma","ani in urma","de ani in urma")
}},lv:{second:"Mazāk par minūti",minute:"Pirms minūtes",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"pirms minūtes","pirms minūtēm","pirms minūtēm")
},hour:"pirms stundas",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"pirms stundas","pirms stundām","pirms stundām")
},day:"pirms dienas",days:function(a){return Cackle.Time.declineNum(Math.round(a),"pirms dienas","pirms dienām","pirms dienām")
},month:"pirms mēneša",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"pirms mēneša","pirms mēnešiem","pirms mēnešiem")
},year:"pirms gada",years:function(a){return Cackle.Time.declineNum(Math.round(a),"pirms gada","pirms gadiem","pirms gadiem")
}},lt:{second:"ką tik",minute:"prieš minutę",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"minutė prieš","minutės prieš","minučių prieš")
},hour:"prieš valandą",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"valanda prieš","valandos prieš","valandų prieš")
},day:"prieš dieną",days:function(a){return Cackle.Time.declineNum(Math.round(a),"diena prieš","dienos prieš","dienų prieš")
},month:"prieš mėnesį",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"mėnesį prieš","mėnesiai prieš","mėnesių prieš")
},year:"prieš metus",years:function(a){return Cackle.Time.declineNum(Math.round(a),"metai prieš","metai prieš","metų prieš")
}},kk:{second:"бір минуттан аз уақыт бұрын",minute:"бір минут бұрын",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"минут бұрын","минут бұрын","минут бұрын")
},hour:"бір сағат бұрын",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"сағат бұрын","сағат бұрын","сағат бұрын")
},day:"бір күн бұрын",days:function(a){return Cackle.Time.declineNum(Math.round(a),"күн бұрын","күн бұрын","күн бұрын")
},month:"бір ай бұрын",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"ай бұрын","ай бұрын","ай бұрын")
},year:"бір жыл бұрын",years:function(a){return Cackle.Time.declineNum(Math.round(a),"жыл бұрын","жыл бұрын","жыл бұрын")
}},ka:{second:"წამის წინ",minute:"წუთის წინ",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"წუთის წინ","წუთის წინ","წუთის წინ")
},hour:"საათის წინ",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"საათის წინ","საათის წინ","საათის წინ")
},day:"დღის წინ",days:function(a){return Cackle.Time.declineNum(Math.round(a),"დღის წინ","დღის წინ","დღის წინ")
},month:"თვის წინ",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"თვის წინ","თვის წინ","თვის წინ")
},year:"წლის წინ",years:function(a){return Cackle.Time.declineNum(Math.round(a),"წლის წინ","წლის წინ","წლის წინ")
}},hy:{second:"մի քնի վայրկյան առաջ",minute:"մեկ րոպե առաջ",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"րոպե առաջ","րոպե առաջ","րոպե առաջ")
},hour:"մեկ ժամ առաջ",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"ժամ առաջ","ժամ առաջ","ժամ առաջ")
},day:"մեկ օր առաջ",days:function(a){return Cackle.Time.declineNum(Math.round(a),"օր առաջ","օր առաջ","օր առաջ")
},month:"մեկ ամիս առաջ",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"ամիս առաջ","ամիս առաջ","ամիս առաջ")
},year:"մեկ տարի առաջ",years:function(a){return Cackle.Time.declineNum(Math.round(a),"տարի առաջ","տարի առաջ","տարի առաջ")
}},fr:{second:"tout à l'heure",minute:"environ une minute",minutes:function(a){return Math.round(a)+" minutes"
},hour:"environ une heure",hours:function(a){return"environ "+Math.round(a)+" heures"
},day:"un jour",days:function(a){return Math.round(a)+" jours"
},month:"environ un mois",months:function(a){return Math.round(a/30)+" mois"
},year:"environ un an",years:function(a){return Math.round(a)+" ans"
}},es:{second:"en este momento",minute:"hace un minuto",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"hace un minuto","minutos atrás","minutos atrás")
},hour:"una hora atrás",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"una hora atrás","horas atrás","horas atrás")
},day:"hace un día",days:function(a){return Cackle.Time.declineNum(Math.round(a),"un día atrás","días atrás","días atrás")
},month:"Hace un mes",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"un mes atrás","meses atrás","meses atrás")
},year:"Hace un año",years:function(a){return Cackle.Time.declineNum(Math.round(a),"hace un año","años atrás","años atrás")
}},el:{second:"λιγότερο από ένα λεπτό",minute:"γύρω στο ένα λεπτό",minutes:function(a){return Math.round(a)+" minutes"
},hour:"γύρω στην μια ώρα",hours:function(a){return"about "+Math.round(a)+" hours"
},day:"μια μέρα",days:function(a){return Math.round(a)+" days"
},month:"γύρω στον ένα μήνα",months:function(a){return Math.round(a/30)+" months"
},year:"γύρω στον ένα χρόνο",years:function(a){return Math.round(a)+" years"
}},de:{second:"soeben",minute:"vor einer Minute",minutes:function(a){return"vor "+Math.round(a)+" Minuten"
},hour:"vor einer Stunde",hours:function(a){return"vor "+Math.round(a)+" Stunden"
},day:"vor einem Tag",days:function(a){return"vor "+Math.round(a)+" Tagen"
},month:"vor einem Monat",months:function(a){return"vor "+Math.round(a/30)+" Monaten"
},year:"vor einem Jahr",years:function(a){return"vor "+Math.round(a)+" Jahren"
}},be:{second:"менш за хвіліну таму",minute:"хвіліну таму",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"хвіліна таму","хвіліны таму","хвілін таму")
},hour:"гадзіну таму",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"гадзіну таму","гадзіны таму","гадзін таму")
},day:"дзень таму",days:function(a){return Cackle.Time.declineNum(Math.round(a),"дзень таму","дні таму","дзён таму")
},month:"месяц таму",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"месяц таму","месяца таму","месяцаў таму")
},year:"год таму",years:function(a){return Cackle.Time.declineNum(Math.round(a),"год таму","гады таму","год таму")
}},it:{second:"proprio ora",minute:"un minuto fa",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"un minuto fa","minuti fa","minuti fa")
},hour:"un'ora fa",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"un'ora fa","ore fa","ore fa")
},day:"un giorno fa",days:function(a){return Cackle.Time.declineNum(Math.round(a),"un giorno fa","giorni fa","giorni fa")
},month:"un mese fa",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"un mese fa","mesi fa","mesi fa")
},year:"un anno fa",years:function(a){return Cackle.Time.declineNum(Math.round(a),"un anno fa","anni fa","anni fa")
}},bg:{second:"току що",minute:"преди минута",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"преди минута","преди минути","преди минути")
},hour:"преди час",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"преди час","преди часове","преди часове")
},day:"преди ден",days:function(a){return Cackle.Time.declineNum(Math.round(a),"преди ден","преди дни","преди дни")
},month:"преди месец",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"преди месец","преди месеци","преди месеци")
},year:"преди година",years:function(a){return Cackle.Time.declineNum(Math.round(a),"преди година","преди години","преди години")
}},pt:{second:"Agora",minute:"1 minuto atrás",minutes:function(a){return Cackle.Time.declineNum(Math.round(a),"1 minuto atrás","1 minuto atrás","alguns minutos")
},hour:"1 hora atrás",hours:function(a){return Cackle.Time.declineNum(Math.round(a),"1 hora atrás","1 hora atrás","algumas horas atrás")
},day:"dia anterior",days:function(a){return Cackle.Time.declineNum(Math.round(a),"dia anterior","dia anterior","dia anterior")
},month:"1 mês atrás",months:function(a){return Cackle.Time.declineNum(Math.round(a/30),"1 mês atrás","1 mês atrás","alguns meses atrás")
},year:"1 ano atrás",years:function(a){return Cackle.Time.declineNum(Math.round(a),"1 ano atrás","1 ano atrás","alguns anos atrás")
}},id:{second:"baru saja",minute:"semenit yang lalu",minutes:function(a){return Math.round(a)+" semenit yang lalu"
},hour:"sejam yang lalu",hours:function(a){return Math.round(a)+" sejam yang lalu"
},day:"hari yang lalu",days:function(a){return Math.round(a)+" hari yang lalu"
},month:"sebulan yang lalu",months:function(a){return Math.round(a/30)+" sebulan yang lalu"
},year:"setahun yang lalu",years:function(a){return Math.round(a)+" setahun yang lalu"
}},hi:{second:"बस अभी",minute:"एक मिनट पहले",minutes:function(a){return Math.round(a)+" एक मिनट पहले"
},hour:"घंटा पहले",hours:function(a){return Math.round(a)+" घंटा पहले"
},day:"दिन पहले",days:function(a){return Math.round(a)+" दिन पहले"
},month:"महीना पहले",months:function(a){return Math.round(a/30)+" महीना पहले"
},year:"एक साल पहले",years:function(a){return Math.round(a)+" साल पहले"
}}};var Cackle=Cackle||{};
Cackle.Social=Cackle.Social||{Share:{vkontakte:function(b){var a="http://vk.com/share.php?noparse=true&url="+encodeURIComponent(b.url);
if(b.title){a+="&title="+encodeURIComponent(b.title)
}if(b.text){a+="&description="+encodeURIComponent(this.trim(b.text))
}if(b.img){a+="&image="+encodeURIComponent(b.img)
}this.popup(a)
},odnoklassniki:function(b){var a="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl="+encodeURIComponent(b.url);
if(b.text){a+="&st.comments="+encodeURIComponent(this.trim(b.text))
}this.popup(a)
},mymailru:function(b){var a="http://connect.mail.ru/share?url="+encodeURIComponent(b.url);
if(b.title){a+="&title="+encodeURIComponent(b.title)
}if(b.text){a+="&description="+encodeURIComponent(this.trim(b.text))
}if(b.img){a+="&imageurl="+encodeURIComponent(b.img)
}this.popup(a)
},googleplus:function(b){var a="https://plus.google.com/share?url="+encodeURIComponent(b.url);
this.popup(a)
},facebook:function(b){var a;
if(!b.title&&!b.text&&b.url){a="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(b.url)
}else{a="https://www.facebook.com/dialog/feed?app_id=230560550330921&display=popup";
a+="&redirect_uri="+encodeURIComponent("http://cackle.me/login/success");
a+="&caption="+encodeURIComponent(b.title);
a+="&description="+encodeURIComponent(b.text);
a+="&link="+encodeURIComponent(b.url);
if(b.img&&b.img.indexOf("facebook.com")<0){a+="&picture="+encodeURIComponent(b.img)
}}this.popup(a)
},twitter:function(c){var b="http://twitter.com/share?";
if(c.title){var a=c.title.length+c.url.length+10,d;
if(c.text.length+a>140){d=c.text.substring(0,140-a)+"..."
}else{d=c.text
}b+="text="+encodeURIComponent('"'+d+'" - '+c.title);
b+="&url="+encodeURIComponent(c.url);
b+="&counturl="+encodeURIComponent(c.url)
}else{if(c.text.length>140){d=c.text.substring(0,140)+"..."
}else{d=c.text
}b+="text="+encodeURIComponent(d);
b+="&url="+encodeURIComponent(c.url)
}this.popup(b)
},trim:function(b){var a=300;
if(b&&b.length>a){return b.substring(0,a)+"..."
}return b
},popup:function(a){Cackle.Fastjs.popup(a,626,436)
}}};(function(H,f,o){if(H.PushStream){return
}var F={};
var g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var u=function(O){return((O<10)?"0":"")+O
};
F.dateToUTCString=function(O){var P=u(O.getUTCHours())+":"+u(O.getUTCMinutes())+":"+u(O.getUTCSeconds());
return g[O.getUTCDay()]+", "+u(O.getUTCDate())+" "+v[O.getUTCMonth()]+" "+O.getUTCFullYear()+" "+P+" GMT"
};
var m=function(){var P=arguments[0]||{};
for(var Q=0;
Q<arguments.length;
Q++){var R=arguments[Q];
for(var O in R){if(!R.hasOwnProperty||R.hasOwnProperty(O)){P[O]=R[O]
}}}return P
};
var K=/^[\],:{}\s]*$/,d=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,n=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,j=/(?:^|:|,)(?:\s*\[)+/g;
var a=function(O){return O.replace(/^\s*/,"").replace(/\s*$/,"")
};
F.parseJSON=function(O){if(!O||!k(O)){return null
}O=a(O);
if(H.JSON&&H.JSON.parse){try{return H.JSON.parse(O)
}catch(P){throw"Invalid JSON: "+O
}}if(K.test(O.replace(d,"@").replace(n,"]").replace(j,""))){return(new Function("return "+O))()
}throw"Invalid JSON: "+O
};
var q=function(P){var O={};
O[P.tagArgument]="";
O[P.timeArgument]="";
O[P.eventIdArgument]="";
if(P.messagesControlByArgument){O[P.tagArgument]=Number(P._etag);
if(P._lastModified){O[P.timeArgument]=P._lastModified
}else{if(P._lastEventId){O[P.eventIdArgument]=P._lastEventId
}}}return O
};
var r=function(){return(new Date()).getTime()
};
var b=function(){return{_:r()}
};
var E=function(P){var Q=P;
if(typeof(P)==="object"){Q="";
for(var O in P){if(!P.hasOwnProperty||P.hasOwnProperty(O)){Q+="&"+O+"="+H.escape(P[O])
}}Q=Q.substring(1)
}return Q||""
};
var N=function(O,P){return O+((O.indexOf("?")<0)?"?":"&")+E(P)
};
var x=Array.isArray||function(O){return Object.prototype.toString.call(O)==="[object Array]"
};
var k=function(O){return Object.prototype.toString.call(O)==="[object String]"
};
var w=function(O){return Object.prototype.toString.call(O)==="[object Date]"
};
var s={logger:null,debug:function(){if(e.LOG_LEVEL==="debug"){s._log.apply(s._log,arguments)
}},info:function(){if((e.LOG_LEVEL==="info")||(e.LOG_LEVEL==="debug")){s._log.apply(s._log,arguments)
}},error:function(){s._log.apply(s._log,arguments)
},_initLogger:function(){var O=H.console;
if(O&&O.log){if(O.log.apply){s.logger=O.log
}else{if((typeof O.log==="object")&&Function.prototype.bind){s.logger=Function.prototype.bind.call(O.log,O)
}else{if((typeof O.log==="object")&&Function.prototype.call){s.logger=function(){Function.prototype.call.call(O.log,O,Array.prototype.slice.call(arguments))
}
}}}}},_log:function(){if(!s.logger){s._initLogger()
}if(s.logger){try{s.logger.apply(H.console,arguments)
}catch(R){s._initLogger();
if(s.logger){s.logger.apply(H.console,arguments)
}}}var Q=f.getElementById(e.LOG_OUTPUT_ELEMENT_ID);
if(Q){var S="";
for(var P=0;
P<arguments.length;
P++){S+=arguments[P]+" "
}Q.innerHTML+=S+"\n";
var O=Q.innerHTML.split("\n");
if(O.length>100){Q.innerHTML=O.slice(-100).join("\n")
}}}};
var y={_getXHRObject:function(){var S=false;
try{S=new H.XMLHttpRequest()
}catch(R){try{S=new H.XDomainRequest()
}catch(Q){try{S=new H.ActiveXObject("Msxml2.XMLHTTP")
}catch(P){try{S=new H.ActiveXObject("Microsoft.XMLHTTP")
}catch(O){S=false
}}}}return S
},_send:function(R,Q){R=R||{};
R.timeout=R.timeout||30000;
var T=y._getXHRObject();
if(!T||!R.url){return
}y.clear(R);
T.onreadystatechange=function(){if(T.readyState===4){y.clear(R);
if(R.afterReceive){R.afterReceive(T)
}if(T.status===200){if(R.success){R.success(T.responseText)
}}else{if(R.error){R.error(T.status)
}}}};
if(R.beforeOpen){R.beforeOpen(T)
}var S={};
var P=null;
var U="GET";
if(Q){P=E(R.data);
U="POST"
}else{S=R.data||{}
}T.open(U,N(R.url,m({},S,b())),true);
if(R.beforeSend){R.beforeSend(T)
}var O=function(){try{T.abort()
}catch(V){}y.clear(R);
R.error(304)
};
if(Q){T.setRequestHeader("Accept","application/json");
T.setRequestHeader("Content-type","application/x-www-form-urlencoded")
}else{R.timeoutId=H.setTimeout(O,R.timeout+2000)
}T.send(P);
return T
},_clear_script:function(O){if(O){O.onerror=O.onload=O.onreadystatechange=null;
if(O.parentNode){O.parentNode.removeChild(O)
}}},_clear_timeout:function(O){O.timeoutId=L(O.timeoutId)
},clear:function(O){y._clear_timeout(O);
y._clear_script(f.getElementById(O.scriptId))
},jsonp:function(S){S.timeout=S.timeout||30000;
y.clear(S);
var Q=f.head||f.getElementsByTagName("head")[0];
var P=f.createElement("script");
var R=r();
var O=function(){y.clear(S);
var W=S.data.callback;
if(W){H[W]=function(){H[W]=null
}
}var V=r();
S.error(((V-R)>S.timeout/2)?304:0)
};
var T=function(){y.clear(S);
S.load()
};
P.onerror=O;
P.onload=P.onreadystatechange=function(V){if(!P.readyState||/loaded|complete/.test(P.readyState)){T()
}};
if(S.beforeOpen){S.beforeOpen({})
}if(S.beforeSend){S.beforeSend({})
}S.timeoutId=H.setTimeout(O,S.timeout+2000);
S.scriptId=S.scriptId||r();
var U=S.data.callback;
if(U){H[U]=function(){H[U]=null
}
}S.data.callback=S.scriptId+"_onmessage_"+r();
H[S.data.callback]=S.success;
P.setAttribute("src",N(S.url,m({},S.data,b())));
P.setAttribute("async","async");
P.setAttribute("id",S.scriptId);
Q.insertBefore(P,Q.firstChild);
return S
},load:function(O){return y._send(O,false)
},post:function(O){return y._send(O,true)
}};
var z=function(O){return(O)?H.escape(O):""
};
var A=function(O){return(O)?H.unescape(O):""
};
F.parseMessage=function(Q,P){var R=Q;
if(k(Q)){R=F.parseJSON(Q)
}var O={id:R[P.jsonIdKey],channel:R[P.jsonChannelKey],text:k(R[P.jsonTextKey])?A(R[P.jsonTextKey]):R[P.jsonTextKey],tag:R[P.jsonTagKey],time:R[P.jsonTimeKey],eventid:R[P.jsonEventIdKey]||""};
return O
};
var l=function(O){return(O.backtrack)?".b"+Number(O.backtrack):""
};
var p=function(O,Q){var R="";
for(var P in O){if(!O.hasOwnProperty||O.hasOwnProperty(P)){R+="/"+P+(Q?l(O[P]):"")
}}return R
};
var i=function(R,T,U,W){var P=R.wrapper.type===G.TYPE;
var Q=R.useSSL;
var O=(P)?((Q)?"wss://":"ws://"):((Q)?"https://":"http://");
O+=R.host;
O+=((!Q&&R.port===80)||(Q&&R.port===443))?"":(":"+R.port);
O+=T;
var S=p(R.channels,W);
if(R.channelsByArgument){var V={};
V[R.channelsArgument]=S.substring(1);
U=m({},U,V)
}else{O+=S
}return N(O,U)
};
var D=function(R){var Q="";
var P=(R.useSSL)?"https://":"http://";
P+=R.host;
P+=((R.port!==80)&&(R.port!==443))?(":"+R.port):"";
P+=R.urlPrefixPublisher;
for(var O in R.channels){if(!R.channels.hasOwnProperty||R.channels.hasOwnProperty(O)){Q=O;
break
}}P+="?id="+Q;
return P
};
F.extract_xss_domain=function(P){if(P.match(/^(\d{1,3}\.){3}\d{1,3}$/)){return P
}var Q=P.split(".");
var O=Math.max(Q.length-1,(P.match(/(\w{4,}\.\w{2}|\.\w{3,})$/)?2:3));
return Q.slice(-1*O).join(".")
};
var B=function(P,O){return function(){return P.apply(O,arguments)
}
};
var L=function(O){if(O){H.clearTimeout(O)
}return null
};
var h=function(P){s.info("["+this.type+"] message received",arguments);
var O=F.parseMessage(P.data,this.pushstream);
if(O.tag){this.pushstream._etag=O.tag
}if(O.time){this.pushstream._lastModified=O.time
}if(O.eventid){this.pushstream._lastEventId=O.eventid
}this.pushstream._onmessage(O.text,O.id,O.channel,O.eventid,true)
};
var I=function(){this.pushstream._onopen();
s.info("["+this.type+"] connection opened")
};
var M=function(O){s.info("["+this.type+"] error (disconnected by server):",O);
if((this.pushstream.readyState===e.OPEN)&&(this.type===t.TYPE)&&(O.type==="error")&&(this.connection.readyState===H.EventSource.CONNECTING)){return
}this._closeCurrentConnection();
this.pushstream._onerror({type:((O&&((O.type==="load")||(O.type==="close")))||(this.pushstream.readyState===e.CONNECTING))?"load":"timeout"})
};
var G=function(O){if(!H.WebSocket&&!H.MozWebSocket){throw"WebSocket not supported"
}this.type=G.TYPE;
this.pushstream=O;
this.connection=null
};
G.TYPE="WebSocket";
G.prototype={connect:function(){this._closeCurrentConnection();
var P=m({},this.pushstream.extraParams(),b(),q(this.pushstream));
var O=i(this.pushstream,this.pushstream.urlPrefixWebsocket,P,!this.pushstream._useControlArguments());
this.connection=(H.WebSocket)?new H.WebSocket(O):new H.MozWebSocket(O);
this.connection.onerror=B(M,this);
this.connection.onclose=B(M,this);
this.connection.onopen=B(I,this);
this.connection.onmessage=B(h,this);
s.info("[WebSocket] connecting to:",O)
},disconnect:function(){if(this.connection){s.debug("[WebSocket] closing connection to:",this.connection.URL);
this.connection.onclose=null;
this._closeCurrentConnection();
this.pushstream._onclose()
}},_closeCurrentConnection:function(){if(this.connection){try{this.connection.close()
}catch(O){}this.connection=null
}},sendMessage:function(O){if(this.connection){this.connection.send(O)
}}};
var t=function(O){if(!H.EventSource){throw"EventSource not supported"
}this.type=t.TYPE;
this.pushstream=O;
this.connection=null
};
t.TYPE="EventSource";
t.prototype={connect:function(){this._closeCurrentConnection();
var P=m({},this.pushstream.extraParams(),b(),q(this.pushstream));
var O=i(this.pushstream,this.pushstream.urlPrefixEventsource,P,!this.pushstream._useControlArguments());
this.connection=new H.EventSource(O);
this.connection.onerror=B(M,this);
this.connection.onopen=B(I,this);
this.connection.onmessage=B(h,this);
s.info("[EventSource] connecting to:",O)
},disconnect:function(){if(this.connection){s.debug("[EventSource] closing connection to:",this.connection.URL);
this.connection.onclose=null;
this._closeCurrentConnection();
this.pushstream._onclose()
}},_closeCurrentConnection:function(){if(this.connection){try{this.connection.close()
}catch(O){}this.connection=null
}}};
var C=function(O){this.type=C.TYPE;
this.pushstream=O;
this.connection=null;
this.url=null;
this.frameloadtimer=null;
this.pingtimer=null;
this.iframeId="PushStreamManager_"+O.id
};
C.TYPE="Stream";
C.prototype={connect:function(){this._closeCurrentConnection();
var O=F.extract_xss_domain(this.pushstream.host);
try{f.domain=O
}catch(P){s.error("[Stream] (warning) problem setting document.domain = "+O+" (OBS: IE8 does not support set IP numbers as domain)")
}var Q=m({},this.pushstream.extraParams(),b(),{streamid:this.pushstream.id},q(this.pushstream));
this.url=i(this.pushstream,this.pushstream.urlPrefixStream,Q,!this.pushstream._useControlArguments());
s.debug("[Stream] connecting to:",this.url);
this.loadFrame(this.url)
},disconnect:function(){if(this.connection){s.debug("[Stream] closing connection to:",this.url);
this._closeCurrentConnection();
this.pushstream._onclose()
}},_clear_iframe:function(){var O=f.getElementById(this.iframeId);
if(O){O.onload=null;
O.src="about:blank";
if(O.parentNode){O.parentNode.removeChild(O)
}}},_closeCurrentConnection:function(){this._clear_iframe();
if(this.connection){this.pingtimer=L(this.pingtimer);
this.frameloadtimer=L(this.frameloadtimer);
this.connection=null;
this.transferDoc=null;
if(typeof H.CollectGarbage==="function"){H.CollectGarbage()
}}},loadFrame:function(O){this._clear_iframe();
try{var P=new H.ActiveXObject("htmlfile");
P.open();
P.write('<html><script>document.domain="'+(f.domain)+'";<\/script></html>');
P.parentWindow.PushStream=e;
P.close();
var R=P.createElement("div");
P.appendChild(R);
R.innerHTML='<iframe src="'+O+'"></iframe>';
this.connection=R.getElementsByTagName("IFRAME")[0];
this.connection.onload=B(M,this);
this.transferDoc=P
}catch(Q){var S=f.createElement("IFRAME");
S.style.width="1px";
S.style.height="1px";
S.style.border="none";
S.style.position="absolute";
S.style.top="-10px";
S.style.marginTop="-10px";
S.style.zIndex="-20";
S.PushStream=e;
f.body.appendChild(S);
S.setAttribute("src",O);
S.onload=B(M,this);
this.connection=S
}this.connection.setAttribute("id",this.iframeId);
this.frameloadtimer=H.setTimeout(B(M,this),this.pushstream.timeout)
},register:function(O){this.frameloadtimer=L(this.frameloadtimer);
O.p=B(this.process,this);
this.connection.onload=B(this._onframeloaded,this);
this.pushstream._onopen();
this.setPingTimer();
s.info("[Stream] frame registered")
},process:function(T,Q,S,P,R,O){this.pingtimer=L(this.pingtimer);
s.info("[Stream] message received",arguments);
if(T!==-1){if(O){this.pushstream._etag=O
}if(R){this.pushstream._lastModified=R
}if(P){this.pushstream._lastEventId=P
}}this.pushstream._onmessage(A(S),T,Q,P||"",true);
this.setPingTimer()
},_onframeloaded:function(){s.info("[Stream] frame loaded (disconnected by server)");
this.connection.onload=null;
this.disconnect()
},setPingTimer:function(){if(this.pingtimer){L(this.pingtimer)
}this.pingtimer=H.setTimeout(B(M,this),this.pushstream.pingtimeout)
}};
var c=function(O){this.type=c.TYPE;
this.pushstream=O;
this.connection=null;
this.opentimer=null;
this.messagesQueue=[];
this._linkedInternalListen=B(this._internalListen,this);
this.xhrSettings={timeout:this.pushstream.timeout,data:{},url:null,success:B(this.onmessage,this),error:B(this.onerror,this),load:B(this.onload,this),beforeSend:B(this.beforeSend,this),afterReceive:B(this.afterReceive,this)}
};
c.TYPE="LongPolling";
c.prototype={connect:function(){this.messagesQueue=[];
this._closeCurrentConnection();
this.urlWithBacktrack=i(this.pushstream,this.pushstream.urlPrefixLongpolling,{},true);
this.urlWithoutBacktrack=i(this.pushstream,this.pushstream.urlPrefixLongpolling,{},false);
this.xhrSettings.url=this.urlWithBacktrack;
var R=F.extract_xss_domain(this.pushstream.host);
var Q=F.extract_xss_domain(H.location.hostname);
var P=this.pushstream.port;
var O=H.location.port?Number(H.location.port):(this.pushstream.useSSL?443:80);
this.useJSONP=this.pushstream.useJSONP;
this.xhrSettings.scriptId="PushStreamManager_"+this.pushstream.id;
if(this.useJSONP){this.pushstream.messagesControlByArgument=true
}this._internalListen();
this.opentimer=H.setTimeout(B(I,this),100);
s.info("[LongPolling] connecting to:",this.xhrSettings.url)
},_listen:function(){if(this._internalListenTimeout){L(this._internalListenTimeout)
}this._internalListenTimeout=H.setTimeout(this._linkedInternalListen,100)
},_internalListen:function(){if(this.pushstream._keepConnected){this.xhrSettings.url=this.pushstream._useControlArguments()?this.urlWithoutBacktrack:this.urlWithBacktrack;
this.xhrSettings.data=m({},this.pushstream.extraParams(),this.xhrSettings.data,q(this.pushstream));
if(this.useJSONP){this.connection=y.jsonp(this.xhrSettings)
}else{if(!this.connection){this.connection=y.load(this.xhrSettings)
}}}},disconnect:function(){if(this.connection){s.debug("[LongPolling] closing connection to:",this.xhrSettings.url);
this._closeCurrentConnection();
this.pushstream._onclose()
}},_closeCurrentConnection:function(){this.opentimer=L(this.opentimer);
if(this.connection){try{this.connection.abort()
}catch(O){try{y.clear(this.connection)
}catch(P){}}this.connection=null;
this.xhrSettings.url=null
}},beforeSend:function(O){if(!this.pushstream.messagesControlByArgument){O.setRequestHeader("If-None-Match",this.pushstream._etag);
O.setRequestHeader("If-Modified-Since",this.pushstream._lastModified)
}},afterReceive:function(O){if(!this.pushstream.messagesControlByArgument){this.pushstream._etag=O.getResponseHeader("Etag");
this.pushstream._lastModified=O.getResponseHeader("Last-Modified")
}this.connection=null
},onerror:function(O){if(this.pushstream._keepConnected){if(O===304){this._listen()
}else{s.info("[LongPolling] error (disconnected by server):",O);
this._closeCurrentConnection();
this.pushstream._onerror({type:((O===403)||(this.pushstream.readyState===e.CONNECTING))?"load":"timeout"})
}}},onload:function(){this._listen()
},onmessage:function(S){if(this._internalListenTimeout){L(this._internalListenTimeout)
}s.info("[LongPolling] message received",S);
var O=null;
var R=x(S)?S:S.replace(/\}\{/g,"}\r\n{").split("\r\n");
for(var P=0;
P<R.length;
P++){if(R[P]){O=F.parseMessage(R[P],this.pushstream);
this.messagesQueue.push(O);
if(this.pushstream.messagesControlByArgument&&O.time){this.pushstream._etag=O.tag;
this.pushstream._lastModified=O.time
}}}this._listen();
while(this.messagesQueue.length>0){var Q=this.messagesQueue.shift();
this.pushstream._onmessage(Q.text,Q.id,Q.channel,Q.eventid,(this.messagesQueue.length===0))
}}};
var J=[];
var e=function(P){P=P||{};
this.id=J.push(this)-1;
this.useSSL=P.useSSL||false;
this.host=P.host||H.location.hostname;
this.port=Number(P.port||(this.useSSL?443:80));
this.timeout=P.timeout||30000;
this.pingtimeout=P.pingtimeout||30000;
this.reconnectOnTimeoutInterval=P.reconnectOnTimeoutInterval||3000;
this.reconnectOnChannelUnavailableInterval=P.reconnectOnChannelUnavailableInterval||60000;
this.lastEventId=P.lastEventId||null;
this.messagesPublishedAfter=P.messagesPublishedAfter;
this.messagesControlByArgument=P.messagesControlByArgument||false;
this.tagArgument=P.tagArgument||"tag";
this.timeArgument=P.timeArgument||"time";
this.eventIdArgument=P.eventIdArgument||"eventid";
this.useJSONP=P.useJSONP||false;
this._reconnecttimer=null;
this._etag=0;
this._lastModified=null;
this._lastEventId=null;
this.urlPrefixPublisher=P.urlPrefixPublisher||"/pub";
this.urlPrefixStream=P.urlPrefixStream||"/sub";
this.urlPrefixEventsource=P.urlPrefixEventsource||"/ev";
this.urlPrefixLongpolling=P.urlPrefixLongpolling||"/lp";
this.urlPrefixWebsocket=P.urlPrefixWebsocket||"/ws";
this.jsonIdKey=P.jsonIdKey||"id";
this.jsonChannelKey=P.jsonChannelKey||"channel";
this.jsonTextKey=P.jsonTextKey||"text";
this.jsonTagKey=P.jsonTagKey||"tag";
this.jsonTimeKey=P.jsonTimeKey||"time";
this.jsonEventIdKey=P.jsonEventIdKey||"eventid";
this.modes=(P.modes||"eventsource|websocket|stream|longpolling").split("|");
this.wrappers=[];
this.wrapper=null;
this.onchanneldeleted=P.onchanneldeleted||null;
this.onmessage=P.onmessage||null;
this.onerror=P.onerror||null;
this.onstatuschange=P.onstatuschange||null;
this.extraParams=P.extraParams||function(){return{}
};
this.channels={};
this.channelsCount=0;
this.channelsByArgument=P.channelsByArgument||false;
this.channelsArgument=P.channelsArgument||"channels";
for(var O=0;
O<this.modes.length;
O++){try{var R=null;
switch(this.modes[O]){case"websocket":R=new G(this);
break;
case"eventsource":R=new t(this);
break;
case"longpolling":R=new c(this);
break;
case"stream":R=new C(this);
break
}this.wrappers[this.wrappers.length]=R
}catch(Q){s.info(Q)
}}this.readyState=0
};
e.LOG_LEVEL="error";
e.LOG_OUTPUT_ELEMENT_ID="Log4jsLogOutput";
e.CLOSED=0;
e.CONNECTING=1;
e.OPEN=2;
e.prototype={addChannel:function(P,O){if(z(P)!==P){throw"Invalid channel name! Channel has to be a set of [a-zA-Z0-9]"
}s.debug("entering addChannel");
if(typeof(this.channels[P])!=="undefined"){throw"Cannot add channel "+P+": already subscribed"
}O=O||{};
s.info("adding channel",P,O);
this.channels[P]=O;
this.channelsCount++;
if(this.readyState!==e.CLOSED){this.connect()
}s.debug("leaving addChannel")
},removeChannel:function(O){if(this.channels[O]){s.info("removing channel",O);
delete this.channels[O];
this.channelsCount--
}},removeAllChannels:function(){s.info("removing all channels");
this.channels={};
this.channelsCount=0
},_setState:function(O){if(this.readyState!==O){s.info("status changed",O);
this.readyState=O;
if(this.onstatuschange){this.onstatuschange(this.readyState)
}}},connect:function(){s.debug("entering connect");
if(!this.host){throw"PushStream host not specified"
}if(isNaN(this.port)){throw"PushStream port not specified"
}if(!this.channelsCount){throw"No channels specified"
}if(this.wrappers.length===0){throw"No available support for this browser"
}this._keepConnected=true;
this._lastUsedMode=0;
this._connect();
s.debug("leaving connect")
},disconnect:function(){s.debug("entering disconnect");
this._keepConnected=false;
this._disconnect();
this._setState(e.CLOSED);
s.info("disconnected");
s.debug("leaving disconnect")
},_useControlArguments:function(){return this.messagesControlByArgument&&((this._lastModified!==null)||(this._lastEventId!==null))
},_connect:function(){if(this._lastEventId===null){this._lastEventId=this.lastEventId
}if(this._lastModified===null){var P=this.messagesPublishedAfter;
if(!w(P)){var O=Number(this.messagesPublishedAfter);
if(O>0){P=new Date();
P.setTime(P.getTime()-(O*1000))
}else{if(O<0){P=new Date(0)
}}}if(w(P)){this._lastModified=F.dateToUTCString(P)
}}this._disconnect();
this._setState(e.CONNECTING);
this.wrapper=this.wrappers[this._lastUsedMode++%this.wrappers.length];
try{this.wrapper.connect()
}catch(Q){if(this.wrapper){this.wrapper.disconnect()
}}},_disconnect:function(){this._reconnecttimer=L(this._reconnecttimer);
if(this.wrapper){this.wrapper.disconnect()
}},_onopen:function(){this._reconnecttimer=L(this._reconnecttimer);
this._setState(e.OPEN);
if(this._lastUsedMode>0){this._lastUsedMode--
}},_onclose:function(){this._reconnecttimer=L(this._reconnecttimer);
this._setState(e.CLOSED);
this._reconnect(this.reconnectOnTimeoutInterval)
},_onmessage:function(R,S,P,O,Q){s.debug("message",R,S,P,O,Q);
if(S===-2){if(this.onchanneldeleted){this.onchanneldeleted(P)
}}else{if(S>0){if(this.onmessage){this.onmessage(R,S,P,O,Q)
}}}},_onerror:function(O){this._setState(e.CLOSED);
this._reconnect((O.type==="timeout")?this.reconnectOnTimeoutInterval:this.reconnectOnChannelUnavailableInterval);
if(this.onerror){this.onerror(O)
}},_reconnect:function(O){if(this._keepConnected&&!this._reconnecttimer&&(this.readyState!==e.CONNECTING)){s.info("trying to reconnect in",O);
this._reconnecttimer=H.setTimeout(B(this._connect,this),O)
}},sendMessage:function(Q,O,P){Q=z(Q);
if(this.wrapper.type===G.TYPE){this.wrapper.sendMessage(Q);
if(O){O()
}}else{y.post({url:D(this),data:Q,success:O,error:P})
}}};
e.sendMessage=function(Q,R,O,P){y.post({url:Q,data:z(R),success:O,error:P})
};
e.register=function(O){var P=O.window.location.href.match(/streamid=([0-9]*)&?/);
if(P[1]&&J[P[1]]){J[P[1]].wrapper.register(O)
}};
e.unload=function(){for(var O=0;
O<J.length;
O++){try{J[O].disconnect()
}catch(P){}}};
H.PushStream=e;
H.PushStreamManager=J;
if(H.attachEvent){H.attachEvent("onunload",e.unload)
}if(H.addEventListener){H.addEventListener.call(H,"unload",e.unload,false)
}})(window,document);var Cackle=Cackle||{};
Cackle.Stream=Cackle.Stream||{servers:["rt4","rt5"],pushstreams:{},start:function(e,g,f){var c=e+"";
var b=function a(i,h){return Math.floor(Math.random()*(h-i+1))+i
};
var d=new PushStream({host:(f||this.servers[b(0,1)])+".cackle.me",modes:"websocket|eventsource|longpolling",messagesControlByArgument:true,useSSL:true,reconnectOnChannelUnavailableInterval:5000});
d.onmessage=g;
d.addChannel(c);
d.connect();
this.pushstreams[c]=d
},stop:function(d,a){var b=d+"";
var c=this.pushstreams[b];
if(c){c.disconnect();
if(a){c.removeChannel(b)
}}}};Cackle.AutoSize=Cackle.AutoSize||{css:"position:absolute!important;top:-999px!important;left:0!important;right:auto!important;bottom:auto!important;border:0!important;padding: 0!important;-moz-box-sizing:content-box!important;-webkit-box-sizing:content-box!important;box-sizing:content-box!important;word-wrap:break-word!important;height:0!important;min-height:0!important;overflow:hidden!important;transition:none!important;-webkit-transition:none!important;-moz-transition:none!important;"};
Cackle.AutoSize.mainall=function(a){Cackle.Fastjs.each(a,function(b){Cackle.AutoSize.main(b)
})
};
Cackle.AutoSize.main=function(e){if(!e||!window.getComputedStyle){return
}e.setAttribute("style","overflow:hidden!important;overflow-y:hidden!important;word-wrap:break-word!important;");
var p=e.value;
e.value="";
e.value=p;
var i=Cackle.Fastjs.create("textarea",!1,!1,this.css),h=getComputedStyle(e,null),b=h.getPropertyValue("resize"),a=h.getPropertyValue("box-sizing")==="border-box"||h.getPropertyValue("-moz-box-sizing")==="border-box"||h.getPropertyValue("-webkit-box-sizing")==="border-box",d=!a?{width:0,height:0}:{width:parseInt(h.getPropertyValue("border-right-width"),10)+parseInt(h.getPropertyValue("padding-right"),10)+parseInt(h.getPropertyValue("padding-left"),10)+parseInt(h.getPropertyValue("border-left-width"),10),height:parseInt(h.getPropertyValue("border-top-width"),10)+parseInt(h.getPropertyValue("padding-top"),10)+parseInt(h.getPropertyValue("padding-bottom"),10)+parseInt(h.getPropertyValue("border-bottom-width"),10)},f=parseInt(h.getPropertyValue("min-height"),10),l=parseInt(h.getPropertyValue("height"),10),o=Math.max(f,l)-d.height,n=parseInt(h.getPropertyValue("max-height"),10),k,c,g=["font-family","font-size","font-weight","font-style","letter-spacing","line-height","text-transform","word-spacing","text-indent"];
n=n&&n>0?n:90000;
if(i.parentNode!==document.body){document.body.appendChild(i)
}function m(){var q=Cackle.AutoSize.css;
k=e;
h=getComputedStyle(e,null);
Cackle.Fastjs.each(g,function(r){q+=r+":"+h.getPropertyValue(r)+";"
});
i.setAttribute("style",q)
}function j(){var t,q,r,s,u;
if(k!==e){m()
}if(!c){c=true;
i.value=e.value+"";
i.style.overflowY=e.style.overflowY;
t=e.style.height===""?"auto":parseInt(e.style.height,10);
q=getComputedStyle(e,null).getPropertyValue("width");
if(q.substr(q.length-2,2)==="px"){s=parseInt(q,10)-d.width;
i.style.width=s+"px"
}r=i.scrollHeight;
if(r>n){r=n;
u="scroll"
}else{if(r<o){r=o
}}r+=d.height;
e.style.overflowY=u||"hidden";
if(t!==r){e.style.height=r+"px"
}setTimeout(function(){c=false
},1)
}}if("onpropertychange" in e&&"oninput" in e){e.oninput=e.onkeyup=j
}else{if("oninput" in e){e.oninput=j
}else{Cackle.Fastjs.on(e,"keyup",j)
}}j()
};Cackle.Modal=Cackle.Modal||{temp:'<div class="mc-modal" style="display:none"><div class="mc-modal-dialog"><div class="mc-modal-content"><div class="mc-modal-header"><button type="button" class="mc-close">×</button>{{?it.img}}<img src="{{=it.img}}"/>{{?}}<div class="mc-modal-title">{{=it.title}}</div></div><div class="mc-modal-body">{{=it.body}}</div></div></div></div>',create:function(b,f,c,a){var e=this,d=document.querySelector("."+b.split(" ").join(".")+".mc-modal-cnt");
if(!d){d=Cackle.Fastjs.create("div",b+" mc-modal-cnt mc-c");
d.innerHTML=(doT.template(this.temp))({img:c,title:f,body:a});
document.body.appendChild(d);
Cackle.Fastjs.on2(d,".mc-close","click",function(){e.hide(d)
})
}return d
},show:function(b,e,c,a){var d=this.create(b,e,c,a);
this.show2(d);
return d
},show2:function(c){var a=c.querySelector(".mc-modal-backdrop"),b=c.querySelector(".mc-modal");
if(!a){c.appendChild(Cackle.Fastjs.create("div","mc-modal-backdrop"))
}Cackle.Fastjs.show2(b)
},hide:function(c){var b=c.querySelector(".mc-modal"),a=c.querySelector(".mc-modal-backdrop");
Cackle.Fastjs.rm(a);
Cackle.Fastjs.hide2(b)
}};/* Laura Doktorova https://github.com/olado/doT */
(function(){function o(){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},b=/&(?!#?\w+;)|<|>|"|'|\//g;return function(){return this?this.replace(b,function(c){return a[c]||c}):this}}function p(a,b,c){return(typeof b==="string"?b:b.toString()).replace(a.define||i,function(l,e,f,g){if(e.indexOf("def.")===0)e=e.substring(4);if(!(e in c))if(f===":"){a.defineParams&&g.replace(a.defineParams,function(n,h,d){c[e]={arg:h,text:d}});e in c||(c[e]=g)}else(new Function("def","def['"+
e+"']="+g))(c);return""}).replace(a.use||i,function(l,e){if(a.useParams)e=e.replace(a.useParams,function(g,n,h,d){if(c[h]&&c[h].arg&&d){g=(h+":"+d).replace(/'|\\/g,"_");c.__exp=c.__exp||{};c.__exp[g]=c[h].text.replace(RegExp("(^|[^\\w$])"+c[h].arg+"([^\\w$])","g"),"$1"+d+"$2");return n+"def.__exp['"+g+"']"}});var f=(new Function("def","return "+e))(c);return f?p(a,f,c):f})}function m(a){return a.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var j={version:"1.0.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,
interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:true,append:true,selfcontained:false},template:undefined,
compile:undefined},q;q=function(){return this||(0,eval)("this")}();q.doT=j;String.prototype.encodeHTML=o();var r={append:{start:"'+(",end:")+'",endencode:"||'').toString().encodeHTML()+'"},split:{start:"';out+=(",end:");out+='",endencode:"||'').toString().encodeHTML();out+='"}},i=/$^/;j.template=function(a,b,c){b=b||j.templateSettings;var l=b.append?r.append:
r.split,e,f=0,g;a=b.use||b.define?p(b,a,c||{}):a;a=("var out='"+(b.strip?a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):a).replace(/'|\\/g,"\\$&").replace(b.interpolate||i,function(h,d){return l.start+m(d)+l.end}).replace(b.encode||i,function(h,d){e=true;return l.start+m(d)+l.endencode}).replace(b.conditional||i,function(h,d,k){return d?k?"';}else if("+m(k)+"){out+='":"';}else{out+='":k?"';if("+m(k)+"){out+='":"';}out+='"}).replace(b.iterate||i,function(h,
d,k,s){if(!d)return"';} } out+='";f+=1;g=s||"i"+f;d=m(d);return"';var arr"+f+"="+d+";if(arr"+f+"){var "+k+","+g+"=-1,l"+f+"=arr"+f+".length-1;while("+g+"<l"+f+"){"+k+"=arr"+f+"["+g+"+=1];out+='"}).replace(b.evaluate||i,function(h,d){return"';"+m(d)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|\}|^|\{)out\+=''\+/g,"$1out+=");if(e&&b.selfcontained)a="String.prototype.encodeHTML=("+
o.toString()+"());"+a;try{return new Function(b.varname,a)}catch(n){typeof console!=="undefined"&&console.log("Could not create a template function: "+a);throw n;}};j.compile=function(a,b){return j.template(a,null,b)}})();
Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.en={header:"Comments",commentCount:function(a){return a+" comments"
},from:"sign in",logout:"Logout",placeholder:"Leave your comment...",media:"Upload images",submit:"Post comment",socialSubmit:"share on",rating:"comment rating",ratingUp:"I like the comment",ratingDown:"I do not like the comment",answer:"Reply",nextComments:"Next comments",moderate:"Moderate",commentDeleted:"Comment deleted",guest:"Guest",share:"Share",edit:"Edit",remove:"Remove",save:"Save",cancel:"Cancel",send:"Send",removeConfirm:"Do you really want to delete your comment?",orderbest:"Best",orderdesc:"Newest",orderasc:"Oldest",subscribe:"Subscribe",rss:"RSS",close:"Comments for this thread are now closed",noneComments:"Be the first to comment.",expired:"Comments are disabled",floodError:"Your message looks like flood",banError:"You are banned",banUntil:"until",banReason:"Reason:",bannorule:"Failure to comply with rules of site",baninsult:"Insults, obscene language",banspam:"Spam, unauthorized advertising",bangov:"Inconsistency government requirements",messageBlankError:"Comments can not be blank",messageSmallError:"Comments must have at least 2 characters",messageLimitError:"Your comment is too big",mediaLengthError:"Too much media links",ipBanError:"Your IP address is banned",badWordsError:"Your message has been blocked for foul language",anonymError:"Anonymous comments are disabled",loginError:"Comments from your social provider is disabled, logout and login again",accept:"I accept",agreement:"the user agreement",agreementError:"Please accept the user comment agreement.",commentPreModer:"Your comment will appear here after approval by moderator",notice:"Notice",noticeRead:"Notice read",pay:"Pay",seemore:"see more",prof:"My profile",editProf:"Edit profile",userCount:"Published comments",mycomment:"My comments",upload:"Upload image",notify:"Allow to send notifications about replies",status:"Status",pending:"On moderation",approved:"Approved",deleted:"Deleted",spam:"Marked as SPAM",r0:"Rate post",r1:"Rating of the post",r2:function(a){return Cackle.Time.declineMsg(a,"vote","votes","votes")
},make:"Create your widget",about:"About",rtnew:"New comments",medianet:"Upload from internet",mediapl:"Link to image, video (Youtube, Vimeo)",social:"Sign in with social network",anonym:"or anonymously",anonym2:"Login as guest",social2:"or leave a social comment",grava:"So your avatar will be displayed in the comments. Click if you want to change it.",name:"Name",alogin:"Login as guest",profile:"Account",avatar:"Avatar",comp:"Upload from computer",sett:"Settings",pub:"Show comments in the profile",sub:"Subscriptions to comments",link:"Link to post",itspam:"Mark as spam",complaint:"Complaint",sent:"Complaint sent",url:"Comment link",replies:"Replies"};Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.ru=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Комментарии",commentCount:function(a){return Cackle.Time.declineNum(a,"комментарий","комментария","комментариев")
},from:"войдите",logout:"Выход",placeholder:"Оставьте свой комментарий...",media:"Добавить изображение",submit:"Комментировать",socialSubmit:"разрешить публиковать в",rating:"Рейтинг комментария",ratingUp:"Нравится комментарий",ratingDown:"Не нравится комментарий",answer:"Ответить",nextComments:"Следующие комментарии",moderate:"Модерировать",commentDeleted:"Комментарий удален",guest:"Гость",share:"Поделиться",edit:"Редактировать",remove:"Удалить",save:"Сохранить",cancel:"Отмена",send:"Отправить",removeConfirm:"Вы действительно хотите удалить свой комментарий?",orderbest:"Лучшие",orderdesc:"Новые",orderasc:"Ранее",subscribe:"Подписаться",close:"Комментарии к этой теме были закрыты",noneComments:"Никто ещё не оставил комментариев, станьте первым.",expired:"Комментарии отключены",floodError:"Ваше сообщение похоже на флуд",banError:"Вы забанены на этом ресурсе",banUntil:"до",banReason:"Причина:",bannorule:"Несоблюдение правил сайта",baninsult:"Мат, оскорбления, нецензурная лексика",banspam:"Спам, несанкционированная реклама",bangov:"Несоответствие требований Роскомнадзора",messageBlankError:"Комментарий не может быть пустым",messageSmallError:"Комментарий должен быть хотя бы 2 символа",messageLimitError:"Ваш комментарий слишком большой",mediaLengthError:"Слишком много медиа ссылок",ipBanError:"Ваш IP адрес забанен",badWordsError:"Ваше сообщение заблокировано за нецензурную лексику",anonymError:"Анонимные комментарии отключены",loginError:"Комментарии от вашего социального провайдера запрещены, выйдите и войдите снова",accept:"Я принимаю",agreement:"условия комментирования",agreementError:"Пожалуйста, примите условия комментирования",commentPreModer:"Ваш комментарий появится сразу после одобрения модератором",notice:"Предупреждение",noticeRead:"Предупреждение прочитано",pay:"Оплатить",seemore:"показать больше",prof:"Мой профиль",editProf:"Редактировать профиль",userCount:"Опубликовано комментариев",mycomment:"Мои комментарии",upload:"Загрузить изображение",notify:"Разрешить присылать уведомления об ответах",status:"Статус",pending:"На модерации",approved:"Одобрен",deleted:"Удален",spam:"Отмечен как СПАМ",r0:"Оцените пост",r1:"Рейтинг поста",r2:function(a){return Cackle.Time.declineMsg(a,"голос","голоса","голосов")
},make:"Создать свой виджет",about:"О сервисе",rtnew:"Новые комментарии",medianet:"Загрузить из интернета",mediapl:"Ссылка на изображение, видео (YouTube, Vimeo)",social:"Войдите через социальную сеть",anonym:"или анонимно",anonym2:"Представьтесь пожалуйста",social2:"или войдите через социальную сеть",grava:"Так будет отображаться ваш аватар в комментариях. Кликните, если хотите его изменить.",name:"Ваше имя",alogin:"Войти как гость",profile:"Аккаунт",avatar:"Аватар",comp:"Загрузить с компьютера",sett:"Настройки",pub:"Показывать комментарии в профиле",sub:"Подписки на новые комментарии",link:"Ссылка на пост",itspam:"Это спам",complaint:"Пожаловаться",sent:"Жалоба отправлена",url:"Ссылка на комментарий",replies:"Ответов"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.be=Cackle.Fastjs.extend(Cackle.Comment.lang.ru,{header:"Каментары",commentCount:function(a){return Cackle.Time.declineNum(a,"каментар","каментара","каментарыяў")
},from:"уваход",logout:"Выхад",placeholder:"Пакіньце свой каментар...",media:"Медыя",submit:"Каментаваць",socialSubmit:"дазволіць публікаваць на",rating:"Рэйтынг каментарыя",ratingUp:"Падабаецца каментар",ratingDown:"Не падабаецца каментар",answer:"Адказаць",nextComments:"Наступныя каментары",moderate:"Мадэраваць",commentDeleted:"Каментар выдален",guest:"Госць",share:"Падзяліцца",edit:"Рэдагаваць",remove:"Выдаленне",save:"Захаваць",cancel:"Адмяніць",removeConfirm:"Вы сапраўды хочаце выдаліць ваш каментар?",orderdesc:"Новыя",orderasc:"Раней",subscribe:"Падпісацца",close:"Каментары да гэтай тэмы былі зачыненыя",noneComments:"Ніхто яшчэ не пакінуў каментароў, станьце першым.",expired:"Комментарии отключены",floodError:"Ваша паведамленне падобна на флуд",banError:"Вы забанены на гэтым рэсурсе",banUntil:"до",banReason:"Причина:",messageBlankError:"Каментар не можа быць пустым",messageSmallError:"Каментар павінен быць хоць бы 2 сімвала",messageLimitError:"Ваш каментар занадта вялікі",mediaLengthError:"Занадта шмат медыя спасылак",ipBanError:"Ваш IP адрас забанены",badWordsError:"Вашае паведамленне заблакавана за ненарматыўную лексіку",commentPreModer:"Ваш каментар з'явіцца адразу пасля прыняцця мадэратарам"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.de=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Kommentare",commentCount:function(a){return a+(a===1?" Kommentar":" Kommentare")
},from:"anmelden",logout:"Abmelden",placeholder:"Hinterlassen Sie Ihren Kommentar...",media:"Bild hinzufügen",submit:"Kommentar senden",socialSubmit:"veröffentlichen in",rating:"Bewertung der Kommentare",ratingUp:"Mir gefällt dieser Kommentar",ratingDown:"Dieser Kommentar gefällt mir nicht",answer:"Antworten",nextComments:"Weitere Kommentare",moderate:"Moderieren",commentDeleted:"Kommentar entfernt",guest:"Gast",share:"Teilen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern",cancel:"Abbrechen",removeConfirm:"Wollen Sie wirklich, um Ihren Kommentar löschen?",orderbest:"Beste",orderdesc:"Neueste",orderasc:"Älteste",subscribe:"Abonnieren",close:"Kommentare zu diesem Thread jetzt geschlossen",noneComments:"Schreiben Sie den ersten Kommentar.",expired:"Comments are disabled",floodError:"Ihre Nachricht sieht aus wie Hochwasser",banError:"Zugriff nicht erlaub. Ihr Konto ist blockiert.",banUntil:"bis",banReason:"Grund:",messageBlankError:"Kommentare können nicht leer sein",messageSmallError:"Kommentare müssen mindestens 2 Zeichen",messageLimitError:"Dein Kommentar ist zu groß",mediaLengthError:"Zu viel Medien Links",ipBanError:"Ihre IP-Adresse ist blockiert",badWordsError:"Ihr Kommentar wurde wegen schimpfwörter blockiert.",commentPreModer:"Dein Kommentar wird Überprüft und nach Freigabe durch den Administrator sichtbar",seemore:"mehr sehen"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.el=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Σχόλια",commentCount:function(a){return a+" σχόλια"
},from:"σύνδεση",logout:"Αποσύνδεση",placeholder:"Αφήστε το σχόλιό σας...",media:"μέσα ενημέρωσης",submit:"Δημοσιεύστε Σχόλιο",socialSubmit:"μοιραστείτε σε",rating:"αξιολόγηση σχολίων",ratingUp:"Μου αρέσει το σχόλιο",ratingDown:"Δεν μου αρέσει το σχόλιο",answer:"απάντηση",nextComments:"Επόμενα σχόλια",moderate:"συντόνισε",commentDeleted:"Το σχόλιο διεγράφη",guest:"Επισκέπτης",share:"μετοχή",edit:"εκδίδω",remove:"αφαιρώ",save:"εκτός",cancel:"ακυρώνω",removeConfirm:"Είστε σίγουροι ότι θέλετε να διαγράψετε το σχόλιό σας;",orderdesc:"Νέος",orderasc:"Παλιότερες",subscribe:"εγγραφείτε",close:"Σχόλια για αυτό το νήμα είναι τώρα κλειστό",noneComments:"Γίνε ο πρώτος που θα σχολιάσει.",expired:"Comments are disabled",banError:"Έχετε αποκλειστεί",messageBlankError:"Τα σχόλια δεν μπορεί να είναι κενό",messageSmallError:"Σχόλια πρέπει να έχει τουλάχιστον 2 χαρακτήρες",messageLimitError:"Το σχόλιό σας είναι πολύ μεγάλο",mediaLengthError:"Πάρα πολύ συνδέσεις των μέσων ενημέρωσης",ipBanError:"Η διεύθυνση IP σας έχει αποκλειστεί",badWordsError:"Το μήνυμά σας έχει μπλοκαριστεί λόγω κακής γλώσσας",commentPreModer:"Το σχόλιό σας θα εμφανιστεί αφού εγκριθεί πρώτα από τον συντονιστή",seemore:"δείτε περισσότερα"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.es=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Comentarios",commentCount:function(a){return a+(a===1?"  comentario":" comentarios")
},from:"Iniciar sesión",logout:"Salir",placeholder:"Añada un comentario...",media:"Añadir un archivo",submit:"Comentar",socialSubmit:"Autorizar esta publicación en",rating:"Ranking de comentarios",ratingUp:"Me gusta",ratingDown:"No me gusta",answer:"Responder",nextComments:"Siguiente comentario",moderate:"Moderar",commentDeleted:"Comentario eliminado",guest:"Visitante",share:"Compartir",edit:"Editar",remove:"Eliminar",save:"Guardar",cancel:"Cancelar",removeConfirm:"¿Estás seguro de que quieres eliminar tu comentario?",orderbest:"Mejor",orderdesc:"Nuevos",orderasc:"Antiguos",subscribe:"Suscribirse",close:"Comentarios sobre este tema están cerradas",noneComments:"Inicie el debate",expired:"Comments are disabled",floodError:"Su mensaje se parece a las inundaciones",banError:"Tu acceso ha sido bloqueado",banUntil:"hasta el",banReason:"Motivo:",messageBlankError:"Los comentarios no pueden dejarse en blanco",messageSmallError:"Los comentarios deben tener al menos 2 caracteres",messageLimitError:"Tu comentario es demasiado extenso",mediaLengthError:"El enlace es demasiado largo",ipBanError:"Tu IP se encuentra bloqueada",badWordsError:"Tu mensaje ha sido bloqueado por contenido inapropiado",commentPreModer:"Tu comentario aparecerá inmediatamente después de ser pre moderado",seemore:"Ver más",social:"Entra con tus redes sociales",anonym:"o anonimamente",anonym2:"Entrar como invitado",name:"Nombre"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.fr=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Commentaires",commentCount:function(a){return a+" commentaires"
},from:"connexion",logout:"Sortie",placeholder:"Laissez votre commentaire...",media:"Média",submit:"Poster le commentaire",socialSubmit:"Partager sur",rating:"Evaluation du commentaire",ratingUp:"J'aime ce commentaire",ratingDown:"Je n'aime pas ce commentaire",answer:"Répondre",nextComments:"Plus de commentaires",moderate:"Modérer",commentDeleted:"Commentaire effacé",guest:"Invité",share:"Partager",edit:"Éditer",remove:"Supprimer",save:"Sauver",cancel:"Annuler",removeConfirm:"Voulez-vous vraiment supprimer votre commentaire?",orderdesc:"Nouveau",orderasc:"Ancien",subscribe:"Souscrire",close:"Les commentaires pour cet article sont maintenant fermés",noneComments:"Soyez le premier à commenter.",expired:"Comments are disabled",floodError:"Votre message ressemble à flot",banError:"Vous êtes banni",banUntil:"jusqu'à",banReason:"Raison:",messageBlankError:"Les commentaires ne peuvent pas être vides",messageSmallError:"Les commentaires doivent avoir au moins 2 caractères",messageLimitError:"Votre commentaire est trop gros",mediaLengthError:"Liens vers des contenus trop",ipBanError:"Votre adresse IP est banni",badWordsError:"Votre message est bloqué pour vulgarité",commentPreModer:"Votre commentaire apparaitra après son approbation par un modérateur",seemore:"voir plus"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.hy=Cackle.Fastjs.extend(Cackle.Comment.lang.ru,{header:"Մեկնաբանություններ",commentCount:function(a){return a+" մեկնաբանություն"
},from:"մուտք",logout:"Դուրս գալ",placeholder:"Թողեք Ձեր մեկնաբանությունը",media:"Կցել",submit:"Մեկնաբանել",socialSubmit:"թույլատրել հրապարակումը",rating:"Մեկանաբանության վարկանիշը",ratingUp:"Հավանում եմ",ratingDown:"Չեմ հավանում",answer:"պատասխանել",nextComments:"Դիտել ավելին",moderate:"մոդերավորել",commentDeleted:"Մեկնաբանությունը հեռացվել է",guest:"Հյուր",share:"կիսվել",edit:"խմբագրել",remove:"հեռացնել",save:"փրկել",cancel:"վերացնել",removeConfirm:"Դուք իրոք ցանկանում եք ջնջել Ձեր մեկնաբանությունը?",orderbest:"Լավագույն",orderdesc:"Նորագույն",orderasc:"ամենահին",subscribe:"բաժանորդագրվել",close:"Մեկնաբանություն Այս խմբին այժմ փակ են",noneComments:"Ոչ ոք դեռ չի մեկնաբանել, եղեք առաջինը",banError:"Դուք արգելափակված եք այս կայքում",messageBlankError:"Comments չի կարող դատարկ",messageSmallError:"Comments պետք է ունենա առնվազն 2 նիշ",messageLimitError:"Ձեր մեկնաբանությունը շատ մեծ է",mediaLengthError:"Շատ լրատվամիջոցներ հղումներ",ipBanError:"Ձեր IP հասցեն արգելափակված է",badWordsError:"Ձեր մեկնաբանությունը արգելափակվել է ոչ կոռեկտ բառապաշարի պատճառով",commentPreModer:"Ձեր մեկնաբանությունը կհայտնվի անմիջապես մոդերատորի հաստատելուց հետո"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.it=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Commenti",commentCount:function(a){return a+" commenti"
},from:"accedi",logout:"Esci",placeholder:"Lascia un commento...",media:"Carica immagini",submit:"Commenta",socialSubmit:"condividi su",rating:"voto commento",ratingUp:"Mi piace il commento",ratingDown:"Non mi piace il commento",answer:"Rispondi",nextComments:"Altri commenti",moderate:"Modera",commentDeleted:"Commento eliminato",guest:"Ospite",share:"Condividi",edit:"Modifica",remove:"Rimuovi",save:"Salva",cancel:"Annulla",removeConfirm:"Vuoi rimuovere il commento?",orderdesc:"Nuovi",orderasc:"Vecchi",subscribe:"Iscriviti",close:"I commenti per questa discussione sono chiusi",noneComments:"Non ci sono commenti, commenta per primo.",expired:"I commenti sono disabilitati",floodError:"Il tuo messaggio non è valido",banError:"Sei stato bannato",banUntil:"fino a",banReason:"Ragione:",bannorule:"Fallito per soddisfare le condizioni del sito",baninsult:"Insulti, linguaggio non adatto",banspam:"Spam, pubblicità non autorizzata",bangov:"Requisiti di governo inconsistenti",messageBlankError:"I commenti non possono essere vuoti",messageSmallError:"Inserisci almeno due caratteri",messageLimitError:"Il tuo commento è troppo grande",mediaLengthError:"Troppi link multimediali",ipBanError:"Il tuo indirizzo IP è stato bloccato",badWordsError:"Il tuo messaggio è stato bloccato per linguaggio non adatto",commentPreModer:"Il  tuo commento verrà visualizzato qui dopo essere stato approvato",notice:"Avviso",noticeRead:"Avviso leggere",expiredHead:"Il tuo account è scaduto!",expiredBody:"La pubblicazione di nuovi commenti e l'accesso al pannello di amministrazione sono stati sospesi. I widget e i commenti saranno convervati e disponibili per 3 mesi. Per proseguire, effettua il pagamento. Se necessiti di un consulto, contattaci via email: sales@cackle.me.",pay:"Paga",seemore:"scopri di più"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.ka=Cackle.Fastjs.extend(Cackle.Comment.lang.ru,{header:"კომენტარები",commentCount:function(a){return Cackle.Time.declineNum(a,"კომენტარი","კომენტარი","კომენტარი")
},from:"შესვლა",logout:"გამოსვლა",placeholder:"დაწერეთ თქვენი კომენტარი",media:"სურათის დამატება",submit:"გაგზავნა",socialSubmit:"გამოქვეყნება",rating:"კომენტარის რეიტინგი",ratingUp:"მომწონს",ratingDown:"არ მომწონს",answer:"პასუხი",nextComments:"შემდეგი კომენტარები",moderate:"მოდერაცია",commentDeleted:"კომენტარი წაშლილია",guest:"სტუმარი",share:"გაზიარება",edit:"რედაქტირება",remove:"წაშლა",save:"გაგზავნა",cancel:"გაუქმება",send:"გაგზავნა",removeConfirm:"ნამდვილად გსურთ თქვენი კომენტარის წაშლა?",orderbest:"საუკეთესო",orderdesc:"ახალი",orderasc:"ძველი",subscribe:"გამოწერა",close:"კომენტარები ამ გვერდისთვის დახურულია",noneComments:"პირველმა დატოვე კომენტარი",expired:"კომენტარები გამორთულია",floodError:"თქვენი კომენტარი შეიცავს გამაღიზიანებელ ტექსტს",banError:"თქვენ გადევთ ბანი",banUntil:"მდე",banReason:"მიზეზი:",bannorule:"საიტის წესების დარღვევა",baninsult:"გინება, შეურაწყოფა, უცენზურო ლექსიკა",banspam:"სპამი, არასანქცირებული რეკლამა",bangov:"ექვემდებარება ბანს",messageBlankError:"კომენტარი ვერ იქნება ცარიელი",messageSmallError:"კომენტარი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან",messageLimitError:"ძალიან დიდი კომენტარია",mediaLengthError:"ძალიან ბევრი ბმულებია",ipBanError:"თქვენი IP დაბლოკილია",badWordsError:"თქვენი კომენტარი დაიბლოკა უცენზურობის გამო",anonymError:"ანონიმური კომენტარები გამორთულია",loginError:"გთხოვთ თავიდან გაიაროთ ავტორიზაცია",accept:"მე ვეთანხმები",agreement:"კომენტირების წესები და პირობები",agreementError:"გთხოვთ დაეთანხმოთ კომენტირების წესებს და პირობებს",commentPreModer:"თქვენი კომენტარი გამოჩნდება მოდერაციის შემდეგ",notice:"გაფრთხილება",noticeRead:"წაკითხულია",pay:"გადახდა",seemore:"მეტის ნახვა",prof:"ჩემი პროფილი",editProf:"პროფილის რედაქტირება",userCount:"გამოქვეყნებულია",mycomment:"ჩემი კომენტარები",upload:"ატვირთვა",notify:"პასუხის გამოწერა",status:"სტატუსი",pending:"მოდერაციაზეა",approved:"გამოქვეყნებულია",deleted:"წაშლილია",spam:"მონიშნულია როგორც სპამი",r0:"შეფასება",r1:"კომენტარის რეიტინგი",r2:function(a){return Cackle.Time.declineMsg(a,"ხმა","ხმა","ხმა")
},make:"თქვენი პლაგინის აწყობა",about:"სერვისის შესახებ",rtnew:"ახალი კომენტარი",medianet:"ატვირთვა ბმულით",mediapl:"ბმული სურათზე, ვიდეოზე (YouTube, Vimeo)",social:"შესვლა სოლიალური ქსელით",anonym:"ან ანონიმურად",anonym2:"შესვლა",social2:"ან რეგისტრაცია სოციალური ქსელით",grava:"ასე გამოჩნდება თქვენი სურათი კომენტარებში. დააკლიკეთ თუ გსურთ შეცვლა.",name:"თქვენი სახელი",alogin:"შესვლა როგორც სტუმარი",profile:"პროფილი",avatar:"სურათი",comp:"ატვირთვა კომპიუტერიდან",sett:"პარამეტრები",pub:"კომენტარის ნახვა პროფილში",sub:"გამოწერა ახალ კომენტარებზე",link:"ლინკი ამ კომენტარებზე",itspam:"სპამი",complaint:"რეპორტი",sent:"რეპორტი გაგზავნილია",url:"ბმული კომენტარზე",replies:"პასუხი"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.kk=Cackle.Fastjs.extend(Cackle.Comment.lang.ru,{header:"Пікірлер",commentCount:function(a){return Cackle.Time.declineNum(a,"пікір")
},from:"кіріңіз",logout:"Шығу",placeholder:"Өз пікіріңізді қалдырыңыз...",submit:"Пікір қалдыру",socialSubmit:"жариялауға рұқсат ету",rating:"Пікірдің рейтингісі",ratingUp:"Пікір ұнайды",ratingDown:"Пікір ұнамайды",answer:"Жауап беру",nextComments:"Келесі пікірлер",moderate:"Модерирлеу",commentDeleted:"Пікір жойылды",guest:"Қонақ",share:"бөлісу",edit:"түзету",remove:"Жою",save:"Сақтау",cancel:"Болдырмау",removeConfirm:"Сіз шынымен де өз пікіріңізді жойғыңыз келе ме?",orderdesc:"Жаңа",orderasc:"Бұрынғы",subscribe:"Жазылу",banError:"Сізге бұл ресурста тыйым салынған",messageBlankError:"Пікір бос бола алмайды",messageSmallError:"Пікір кем дегенде екі таңбалы болуы тиіс",messageLimitError:"Сіздің пікіріңіз тым үлкен",mediaLengthError:"Медиа сілтемелер тым көп",ipBanError:"Сіздің IP адресіңізге тыйым салынған",badWordsError:"Сіздің хабарламаңыз былапыт лексика үшін шектелді",commentPreModer:"Сіздің пікіріңіз модератор мақұлдауынан кейін бірден пайда болады"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.lv=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Komentāri",commentCount:function(a){return a+" komentāri"
},from:"Ieiet",logout:"Iziet",placeholder:"Pievienojiet savu komentāru...",media:"Mediji",submit:"Pievienot komentāru",socialSubmit:"Atļaut publicēt",rating:"Komentāra reitings",ratingUp:"Patīk komentārs",ratingDown:"Nepatīk komentārs",answer:"Atbildēt",nextComments:"Nākamie komentāri",moderate:"Vidēji",commentDeleted:"Komentārs izdzēsts",guest:"Viesis",share:"Daļa",edit:"Rediģēt",remove:"Noņemt",save:"Glābt",cancel:"Atcelt",removeConfirm:"Vai jūs tiešām vēlaties dzēst savu komentāru?",orderdesc:"Jaunākais",orderasc:"Vecākais",subscribe:"Abonēt",close:"Komentāri par šo pavedienu ir beigusies",noneComments:"Neviens nav ievietojis komentāru vēl, būt pirmais.",expired:"Comments are disabled",banError:"Jūs esat aizliegti šajā resursā",banUntil:"līdz",banReason:"Iemesls:",messageBlankError:"Komentāri nevar būt tukšs",messageSmallError:"Komentāri ir jābūt vismaz 2 rakstzīmes",messageLimitError:"Jūsu komentārs ir pārāk liels",mediaLengthError:"Pārāk daudz mediju saites",ipBanError:"Jūsu IP adrese ir aizliegts",badWordsError:" Jūsu komentārs ir nobloķēts par necenzētu leksiku",commentPreModer:" Jūsu komentārs parādīsies pēc administratora apstiprinājuma"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.nl=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Commentaar",commentCount:function(a){return a+" commentaar"
},from:"log hier in",logout:"Uitloggen",placeholder:"Geef hier uw commentaar...",media:"Upload afbeeldingen",submit:"Plaats uw commentaar",socialSubmit:"delen met",rating:"beoordeling commentaar",ratingUp:"Ik vind deze reactie leuk",ratingDown:"Ik vind deze reactie niet leuk",answer:"Beantwoorden",nextComments:"Volgende commentaar",moderate:"Beoordelen",commentDeleted:"Commentaar verwijderd.",guest:"Gast",share:"Delen",edit:"Wijzigen",remove:"Verwijderen",save:"Opslaan",cancel:"Annuleren",removeConfirm:"Wilt u uw commentaar echt verwijderen?",orderdesc:"Nieuwste",orderasc:"Oudste",subscribe:"Inschrijven",close:"Comments for this thread are now closed",noneComments:"Be the first to comment.",expired:"Comments are disabled",floodError:"Uw bericht lijkt op overstroming",banError:"U toegang is  geblokkeerd.",banUntil:"until",banReason:"Reason:",messageBlankError:"Commentaar kan niet leeg zijn",messageSmallError:"Commentaar moet uit tenminste 2 tekens bestaan",messageLimitError:"Uw commentaar is te lang. Kort het wat in",mediaLengthError:"Te veel links naar media",ipBanError:"Uw IP-adres wordt geweigerd",badWordsError:"Uw bericht wordt geweigerd vanwege grof taalgebruik",commentPreModer:"Uw commentaar zal getoond worden na goedkeuring van de beheerder",expiredHead:"Uw account is verlopen!",expiredBody:"Publicatie van nieuw commentaar en toegang tot het administratie-paneel is niet meer mogelijk, maar al het commentaar zal bewaard worden en blijft 3 maanden toegankelijk om te herstellen. Om verder te gaan, dient u te betalen. Als u snelle ondersteuning nodig heeft, neem dan via email contact met ons op: sales@cackle.me.",pay:"Betalen",seemore:"kijk hier voor meer"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.pl=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Komentarze",commentCount:function(a){return a+" komentarzy"
},from:"zaloguj się",logout:"Wyloguj się",placeholder:"Zostaw swój komentarz ...",media:"Załaduj zdjęcie",submit:"Dodaj komentarz",socialSubmit:"opublikuj na",rating:"ocena komentarza",ratingUp:"Lubię ten komentarz",ratingDown:"Nie lubię tego komentarza",answer:"Odpowiedz",nextComments:"Następne komentarze",moderate:"Moderuj",commentDeleted:"Komentarz usunięty",guest:"Gość",share:"Opublikuj",edit:"Edytuj",remove:"Usuń",save:"Zapisz",cancel:"Anuluj",removeConfirm:"Czy napewno chcesz usunąć swój komentarz?",orderdesc:"Najnowsze",orderasc:"Najstarsze",subscribe:"Subskrybuj",close:"Komentarze do tego wątku są teraz zamknięte",noneComments:"Nikt nie pisał jeszcze komentarza, bądź pierwszy.",expired:"Comments are disabled",banError:"Twoje konto jest zablokowane",banUntil:"do dnia",banReason:"Powód:",messageBlankError:"Komentarz nie może być pusty",messageSmallError:"Komentarz musi mieć przynajmniej 2 znaki",messageLimitError:"Twój komentarz jest za długi",mediaLengthError:"Zbyt dużo linków w komentarzu",ipBanError:"Twój adres IP jest zablokowny",badWordsError:"Twoja wiadomość została zablokowana za niepoprawny język",commentPreModer:"Twój komentarz pojawi się tu po akceptacji przez moderatora",expiredHead:"Twoje konto wygasło!",expiredBody:"Publikowanie komentarzy i dostęp do panelu administracyjnego zablokowane, Wszystkie widgety i komentarze są przechowywane przez 3 miesiące. Aby kontynuować, dokonaj płatności. Jeśli potrzebujesz się skontaktować, napisz na: sales@cackle.me.",pay:"Płać",seemore:"zobacz więcej"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.ro=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Comentarii",commentCount:function(a){return Cackle.Time.declineNum(a,"Comentarii","Comentariu","Comentariile")
},from:"Intrare",logout:"Ieșire",placeholder:"Lasă un comentariu...",media:"Adaugă imagine",submit:"Comentează",socialSubmit:"permite publicarea în",rating:"Rating-ul comentariului",ratingUp:"Îmi place comentariul",ratingDown:"Nu-mi place comentariul",answer:"Răspunde",nextComments:"Următoarele comentarii",moderate:"Moderează",commentDeleted:"Comentariul a fost șters",guest:"Vizitator",share:"Distribuie",edit:"Redactează",remove:"Șterge",save:"Salvează",cancel:"Anulează",send:"Trimite",removeConfirm:"Precis doriți să ștergeți comentariul D-ră?",orderbest:"Cele mai bune",orderdesc:"Cele mai noi",orderasc:"Cele mai vechi",subscribe:"Abonează-te",close:"Comentariile la aceasta temă au fost închise",noneComments:"Nimeni nu a scris un comentariu. Fii Primul!",expired:"Comentariile au fost stinse",floodError:"Mesajul seamănă cu spam",banError:"Accesul vă este interzis",banUntil:"pîna la",banReason:"Motivul:",bannorule:"Nerespectarea condițiilor site-lui",baninsult:"Cenzură, înjosiri, exprimări urîte",banspam:"Spam și Reclamă",bangov:"Nerespectare de termeni și condiții",messageBlankError:"Comentariul nu poate fi gol",messageSmallError:"Comentariul minimal este din 2 caractere",messageLimitError:"Comentariul D-ră este prea mare",mediaLengthError:"Prea multe link-uri",ipBanError:"Adresa D-ra IP a fost blocată",badWordsError:"Mesajul D-ră a fost blocat pentru cenzură!",anonymError:"Mesajele anonime au fost stinse",loginError:"Comentariile de la operatorul D-ră de internet sunt interzise. Folosiți alt calculator.",accept:"Eu Accept",agreement:"Regulile comentariilor",agreementError:"Vă rugăm, acceptați condițiile",commentPreModer:"Comentariul v-a apărea după moderare",notice:"Preîntîmpinare",noticeRead:"Am înteles preîntîmpinarea",pay:"Platește",seemore:"arată mai mult",prof:"Profilul meu",editProf:"Redactează profilul",userCount:"Comentarii publicate:",mycomment:"Comentariile mele",upload:"Încarcă poză",notify:"Trimite-mi informări despre mesajele mele",status:"Statut",pending:"La moderare",approved:"Permis",deleted:"Șters",spam:"Găsit ca spam",r0:"Apreciați postarea",r1:"Rating postare",r2:function(a){return Cackle.Time.declineMsg(a,"vot","voturi","total voturi")
},make:"Crează aplicația ta",about:"Despre",rtnew:"Comentarii noi",medianet:"Încarcă din internet",mediapl:"Link la poză sau video (Youtube, Vimeo)",social:"Logare prin rețele sociale",anonym:"sau ANONIM",grava:"Acesta este poza d-ră. Click pentru a o schimba",name:"Numele D-ra",alogin:"Intră ca vizitator",profile:"Contul meu",avatar:"Avatar",comp:"Încarcă din calculator",sett:"Setări",pub:"Arată-mi comentariile în profil",sub:"Abonări la comentarii noi",link:"Link la comentariu",itspam:"Este SPAM",complaint:"Depune PLÎNGERE",sent:"Plîngerea a fost trimisă",url:"Link la comentariu",replies:"Răspunsuri"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.uk=Cackle.Fastjs.extend(Cackle.Comment.lang.ru,{header:"Коментарі",commentCount:function(a){return Cackle.Time.declineNum(a,"коментар","коментаря","коментарів")
},from:"увійдіть",logout:"Вихід",placeholder:"Залиште свій коментар...",media:"Додати зображення",submit:"Коментувати",socialSubmit:"дозволити публікувати в",rating:"Рейтинг коментаря",ratingUp:"Подобається коментар",ratingDown:"Не подобається коментар",answer:"Відповісти",nextComments:"Наступний коментар",moderate:"Модерувати",commentDeleted:"Коментар видалено",guest:"Гість",share:"Поділитись",edit:"Редагувати",remove:"Видалити",save:"Зберегти",cancel:"Відміна",send:"Відправити",removeConfirm:"Ви дійсно хочете видалити свій коментар?",orderbest:"Кращі",orderdesc:"Нові",orderasc:"Раніше",subscribe:"Підписатись",close:"Коментарі для цієї теми були заблоковані",noneComments:"Ніхто ще не залишив коментарів, станьте першим.",expired:"Коментарі відключені",floodError:"Ваше повідомлення схоже на флуд",banError:"Ви забанені на цьому ресурсі",banUntil:"до",banReason:"Причина:",bannorule:"Недотримання правил сайту",baninsult:"Мат, образи, нецензурна лексика",banspam:"Спам, несанкціонована реклама",bangov:"Невідповідність вимогам Роскомпозору",messageBlankError:"Коментар не може бути пустим",messageSmallError:"Коментар має бути хоча б 2 символа",messageLimitError:"Ваш коментар занадто великий",mediaLengthError:"Занадто багато медіа-посилань",ipBanError:"Ваша IP адреса заблокована",badWordsError:"Ваше повідомлення заблоковано за нецензурну лексику",anonymError:"Анонімні коментарі відключені",loginError:"Коментарі від вашого соціального провайдера заборонені, вийдіть і увійдіть знову",accept:"Я приймаю",agreement:"умови коментування",agreementError:"Будь ласка, прийміть умови коментування",commentPreModer:"Ваш коментар з`явиться одразу після схвалення модератором",notice:"Попередження",noticeRead:"Попередження прочитано",pay:"Оплатити",seemore:"показати більше",prof:"Мій профіль",editProf:"Редагувати профіль",userCount:"Опубліковано коментарів",mycomment:"Мої коментарі",upload:"Завантажити зображення",notify:"Дозволити надсилати повідомлення про відповіді",status:"Статус",pending:"На модерації",approved:"Схвалений",deleted:"Видалений",spam:"Помічений як СПАМ",r0:"Оцініть пост",r1:"Рейтинг поста",r2:function(a){return Cackle.Time.declineMsg(a,"оцінка","оцінки","оцінок")
},make:"Створити свій віджет",about:"Про сервіс",rtnew:"Нові коментарі",medianet:"Завантажити з інтернету",mediapl:"Посилання на зображення, відео (YouTube, Vimeo)",social:"Увійдіть через соціальну мережу",anonym:"чи анонімно",anonym2:"Представтесь, будь ласка",social2:"чи увійдіть через соціальну мережу",grava:"Так буде відображатись ваш аватар в коментарях. Клікніть, якщо хочете його змінити.",name:"Ваше ім`я",alogin:"Увійти як гість",profile:"Акаунт",avatar:"Аватар",comp:"Завантажити з комп`ютера",sett:"Налаштування",pub:"Показувати коментарі в профілі",sub:"Підписки на нові коментарі",link:"Посилання на пост",itspam:"Це спам",complaint:"Поскаржитись",sent:"Скарга відправлена",url:"Посилання на коментар",replies:"Відповідей"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.lang=Cackle.Comment.lang||{};
Cackle.Comment.lang.lt=Cackle.Fastjs.extend(Cackle.Comment.lang.en,{header:"Komentarai",commentCount:function(a){return Cackle.Time.declineNum(a,"komentaras","komentarai","komentarų")
},from:"įėikite",logout:"Įšėjimas",placeholder:"Palikite savo komentarą...",media:"Pridėti paveikslą",submit:"Komentuoti",socialSubmit:"leisti publikuoti",rating:"Komentaro reitingas",ratingUp:"Patinka komentaras",ratingDown:"Nepatinka komentaras",answer:"Atsakyti",nextComments:"Kiti komentarai",moderate:"Moderuoti",commentDeleted:"Komentaras pašalintas",guest:"Svečias",share:"Pasidalinti",edit:"Redaguoti",remove:"Pašalinti",save:"Išsaugoti",cancel:"Atšaukti",removeConfirm:"Jūs tikrai norite pašalinti savo komentarą?",orderdesc:"Nauji",orderasc:"Anksčiau",subscribe:"Prisinumeruoti",close:"Šios temos komentarai buvo uždaryti",noneComments:"Dar niekas nekomentavo, būkite pirmas.",expired:"Komentarai atjungti",floodError:"Jūsų pranešimas panašus į fludą",banError:"Jūsų priėjimas prie šio resurso yra blokuojamas.",banUntil:"iki",banReason:"Priežastis:",bannorule:"Puslapio taisyklių nesilaikymas",baninsult:"Keiksmažodžiai, įžeidimai, nepadori kalba",banspam:"Spamas, nesuderinta reklama",bangov:"Įstatyminių reikalavimų nesilaikymas",messageBlankError:"Komentaras negali būti tuščias",messageSmallError:"Komentaras turi būti sudarytas bent iš dviejų simbolių",messageLimitError:"Jūsų komentaras yra per didelis",mediaLengthError:"Per daug media nuorodų",ipBanError:"Jūsų IP blokuojamas",badWordsError:"Jūsų pranešimas blokuojamas dėl nepadorios kalbos",commentPreModer:"Jūsų komentaras pasirodys iš karto po moderatoriaus patvirtinimo",notice:"Perspėjimas",noticeRead:"Perspėjimas perskaitytas",pay:"Apmokėti",seemore:"rodyti daugiau"});Cackle.Comment=Cackle.Comment||{};
Cackle.Comment.getBootstrapUrl=function(c){var b=c.host+"/widget/"+c.id+"/bootstrap?callback=?&chan="+encodeURIComponent(Cackle.getChan(c))+"&url="+encodeURIComponent(Cackle.getUrl(c));
var a=Cackle.Cookie.read("mc-comment-order")||c.sort;
if(a){b+="&order="+a
}if(c.lang){b+="&locale="+c.lang
}return b
};
Cackle.Comment.getEL=function(a){return document.getElementById(a.container||"mc-container")
};
Cackle.Comment.expired=function(a){var b=this.getEL(a);
b.innerHTML=Cackle.Comment.lang[a.lang].expired
};
Cackle.Comment.main=function(F){var H=F.data,g=H.setting,C=g.setting;
var D={};
var E=C.urlRecogn;
var m=C.crossposting;
var v=g.gravatarEnable;
var A=g.anonymGravatarEnable;
var i=g.anonymAvatar;
var o=F.host+"/widget/img/anonym.png";
var z=i?(i.match("^https?:")?i:"//"+i):o;
var t=g.style;
var y=F.theme||g.theme;
var r=F.color||g.color;
var n=g.editComment;
var u=g.removeComment;
var G=g.pagination;
var B=g.level;
var c=g.maxCommentLen;
var h=g.denyWww;
var b=g.media;
var q=g.modified;
var k=H.sitePageId;
F.lang=F.lang||g.lang;
var f=Cackle.Comment.lang[F.lang];
var a=F.msg&&Cackle.Fastjs.extend(f,F.msg)||f;
a.header=C.mcHeader||a.header;
if(C.commentsLabel){a.commentCount=function(I){return C.commentsLabel.replace("{num}",I)
}
}else{a.commentCount=a.commentCount
}a.from=C.fromLabel||a.from;
a.placeholder=C.placeholder||a.placeholder;
a.submit=C.submitLabel||a.submit;
a.answer=C.replyLabel||a.answer;
a.nextComments=C.nextLabel||a.nextComments;
var s={widget:'<div class="mc-head-container"><ul><li class="active"><a href="#" class="mc-comment-count" data-count="0">{{=it.msg.header}}</a></li><li class="mc-user" style="display:none"><a href="#"><span class="mc-user-name"></span> <i class="mcicon-caret-down"></i></a><ul class="mc-controls" style="display:none"><li><a href="#" class="mc-user-prof">{{=it.msg.prof}}</a></li><li><a href="#" class="mc-user-edit">{{=it.msg.editProf}}</a></li><li><a href="#" class="mc-logout">{{=it.msg.logout}}</a></li></ul></li>{{?!it.wl}}<li class="mc-logo" style="display:inline-block"><a href="{{=it.host}}" title="Powered by CACKLE" style="display:inline-block!important"><img src="{{=it.host}}/widget/img/cackle.png" style="display:inline-block!important"></a></li>{{?}}</ul></div>{{?!it.close}}<div class="mc-auth-container"><span class="mc-auth-label">{{=it.msg.from}}</span><div id="cc-login{{=it.id}}" class="mc-logincnt"></div></div>{{?}}<div class="mc-widget-container{{?it.expand}} mc-expanded{{?}}">{{?it.close}}<div class="mc-alert mc-alert-close"><div class="mc-alert-text">{{=it.msg.close}}</div></div>{{??}}<div class="mc-avatar-container"><img class="mc-user-avatar" src="{{=it.mcAnonymAvatar}}" height="36" width="36" onerror="{{=it.imgerror}}"></div><div class="mc-postbox-container"><div class="mc-editor"><div class="mc-editor-wrapper"><div class="mc-editor-message"><textarea placeholder="{{=it.msg.placeholder}}"></textarea></div></div></div><div class="mc-submit"><div class="mc-submit-left"><span class="mc-social-xpost"><table><tbody><tr><td><input class="mc-social-xpost-checkbox" type="checkbox"/></td><td><label>{{=it.msg.socialSubmit}}</label></td><td><span class="mc-social-xpost-icon"></span></td></tr></tbody></table></span></div><button class="mc-btn mc-comment-submit">{{=it.msg.submit}}</button></div></div>{{?}}<div class="mc-comment-container"><div class="mc-nav-content"><ul><li class="mc-comment-sort"><a href="#" class="mc-sort-menu">{{=it.msg["order" + it.order]}} <i class="mcicon-caret-down"></i></a><ul class="mc-controls" style="display:none"><li><a href="#" class="mc-sort-action" data-sort="best">{{=it.msg.orderbest}} </a></li><li><a href="#" class="mc-sort-action" data-sort="desc">{{=it.msg.orderdesc}} </a></li><li><a href="#" class="mc-sort-action" data-sort="asc">{{=it.msg.orderasc}} </a></li></ul></li><li><a href="{{=it.host}}/widget/{{=it.id}}/{{=it.sitePage}}/comments.rss" class="mc-rss" target="_blank"><i class="mcicon-rss"></i> {{=it.msg.rss}}</a></li><li class="mc-subscription-email" style="display:none"><input type="text" placeholder="example@mail.com"/><a href="#"><i class="mcicon-ok"></i></a></li><li><a href="#" class="mc-subscription-menu"><i class="mcicon-envelope"></i> {{=it.msg.subscribe}}</a></li><li class="mc-share-post"><a href="#" class="mc-share"><i class="mcicon-share"></i> {{=it.msg.share}}</a><ul class="mc-controls" style="display:none"><li><ul class="mc-share-menu"><li><span class="mc-twitter"></span></li><li><span class="mc-facebook"></span></li><li><span class="mc-googleplus"></span></li><li><span class="mc-vkontakte"></span></li><li><span class="mc-odnoklassniki"></span></li><li><span class="mc-mymailru"></span></li></ul></li></ul></li></ul></div><div class="mc-theme-{{=it.mcTheme}}"><ul class="mc-comment-list"><li class="mc-none-comments">{{=it.msg.noneComments}}</li></ul></div></div><div class="mc-pagination" style="display:none"><button class="mc-btn mc-comment-next" data-page="0">{{=it.msg.nextComments}}</button></div></div>',profile:'<div class="mc-usercnt"><div class="mc-user-profile"><div class="mc-user-img"><img src="{{=it.avasrc}}" onerror="{{=it.imgerror}}"></div><div class="mc-user-info"><div class="mc-user-name">{{?it.user.www}}<a href="{{!it.user.www}}" target="_blank">{{?}}{{!it.user.name}}{{?it.user.www}}</a>{{?}}</div><div class="mc-user-count">{{=it.msg.userCount}}: <span></span></div></div></div><div><div class="mc-user-recent">{{=it.msg.mycomment}}</div><div class="mc-user-ccnt"><div class="mc-user-comments"></div><div class="mc-pagination" style="display:none"><button class="mc-btn">{{=it.msg.nextComments}}</button></div></div></div></div>',userComment:'<div class="mc-title"><a href="{{!it.c.chan.url}}#cc-{{!it.c.id}}" target="_blank">{{!it.c.chan.title || it.c.chan.url}}</a><span class="mc-sm">{{=it.created}}</span></div><div class="mc-comment-body">{{!it.c.message}}</div><div class="mc-sm">{{=it.msg.rating}}: {{=it.c.rating}}</div><div class="mc-sm">{{=it.msg.status}}: {{=it.msg[it.c.status]}}</div>',userEdit:'<div class="mc-usercnt"><div class="mc-user-profile"><div class="mc-user-img"><img src="{{=it.avasrc}}" onerror="{{=it.imgerror}}"><a href="#" class="mc-user-imgload mc-sm">{{=it.msg.upload}}</a><input type="file" tabindex="-1" accept="image/*" style="display:none"></div><div class="mc-user-info"><input data-param="name" type="text" placeholder="name"/><input data-param="www" type="text" placeholder="website"/><input data-param="avatar" type="text" placeholder="photo"/><input data-param="notify" type="checkbox"/> {{=it.msg.notify}}</div><div style="text-align:center!important;"><button class="mc-btn">{{=it.msg.save}}</button></div></div></div>',notice:'{{!it.notice}}<p class="mc-modal-ok"><button type="button" class="mc-btn mc-notice-agree">{{=it.msg.noticeRead}}</button></p>',ratingcl:"mc-comment-rating-{{?it.rate > 0}}plus{{??it.rate < 0}}neg{{??}}zero{{?}}",rating:"{{?it.rate > 0}}+{{?}}{{=it.rate}}",standard:'<div class="mc-comment-wrapper mc-comment-{{=it.comment.status}}"><div class="mc-comment-head"><table><tbody><tr><td class="mc-comment-avatar-td"><a href="javascript:void(0)" class="mc-comment-author"><img class="mc-comment-avatar" src="{{!it.user.avatar}}" alt="Avatar" onerror="{{=it.imgerror}}">{{?it.user.provider}}<span class="mc-comment-provider mc-{{=it.user.provider}}"></span>{{?}}</a></td><td class="mc-comment-user-td">{{?it.user.www}}<a href="{{!it.user.www}}" class="mc-comment-username" data-author="{{=it.user.id}}" target="_blank">{{!it.user.name}}</a>{{??}}<span class="mc-comment-username" data-author="{{=it.user.id}}">{{!it.user.name}}</span>{{?}}</td><td class="mc-comment-vote-td"><div class="mc-comment-vote"><table><tbody><tr><td class="mc-comment-rating {{=it.ratingcl}}" title="{{=it.msg.rating}}">{{=it.rating}}</td><td class="mc-comment-like"><a class="mc-comment-thumbsup" href="#" title="{{=it.msg.ratingUp}}" data-vote="1"><span></span></a></td><td class="mc-comment-unlike"><a class="mc-comment-thumbsdown" href="#" title="{{=it.msg.ratingDown}}" data-vote="-1"><span></span></a></td></tr></tbody></table></div></td></tr></tbody></table></div><div class="mc-comment-body-inner"><div class="mc-comment-body-container"><div class="mc-comment-body">{{=it.message}}</div></div><a class="mc-comment-seemore" style="display:none">{{=it.msg.seemore}}</a></div><div class="mc-comment-footer"><a class="mc-comment-created" href="{{=it.url}}" timestamp="{{=it.comment.created}}">{{=it.created}}</a>{{?!it.close}}<a class="mc-comment-edit" href="#">{{=it.msg.edit}}</a><a class="mc-comment-remove" href="#">{{=it.msg.remove}}</a><a class="mc-comment-reply" href="#">{{=it.msg.answer}}</a>{{?}}</div><div class="mc-comment-moderate"><a href="#">{{=it.msg.moderate}} <i class="mcicon-caret-down"></i></a></div></div>',simple:'<div class="mc-comment-user"><a href="javascript:void(0)" class="mc-comment-author"><img class="mc-comment-avatar" src="{{!it.user.avatar}}" alt="Avatar" onerror="{{=it.imgerror}}"></a></div><div class="mc-comment-wrapper mc-comment-{{=it.comment.status}}"><div class="mc-comment-head">{{?it.user.www}}<a href="{{!it.user.www}}" class="mc-comment-username" data-author="{{=it.user.id}}" target="_blank">{{!it.user.name}}</a>{{??}}<span class="mc-comment-username" data-author="{{=it.user.id}}">{{!it.user.name}}</span>{{?}}<span class="mc-comment-bullet">•</span><a class="mc-comment-created" href="{{=it.url}}" timestamp="{{=it.comment.created}}">{{=it.created}}</a></div><div class="mc-comment-body-inner"><div class="mc-comment-body-container"><div class="mc-comment-body">{{=it.message}}</div></div><a class="mc-comment-seemore" style="display:none">{{=it.msg.seemore}}</a></div><div class="mc-comment-footer"><span class="mc-comment-rating {{=it.ratingcl}}" title="{{=it.msg.rating}}">{{=it.rating}}</span><a class="mc-comment-thumbsup" href="#" title="{{=it.msg.ratingUp}}" data-vote="1"><i class="mcicon-thumbs-up"></i></a> <a class="mc-comment-thumbsdown" href="#" title="{{=it.msg.ratingDown}}" data-vote="-1"><i class="mcicon-thumbs-down"></i></a><span class="mc-comment-bullet">•</span>{{?!it.close}}<a class="mc-comment-reply" href="#">{{=it.msg.answer}}<span class="mc-comment-bullet">•</span></a><a class="mc-comment-edit" href="#">{{=it.msg.edit}}<span class="mc-comment-bullet">•</span></a><a class="mc-comment-remove" href="#">{{=it.msg.remove}}<span class="mc-comment-bullet">•</span></a>{{?}}<a class="mc-comment-share" href="{{=it.url}}">{{=it.msg.share}}</a><span class="mc-share-icons"><span class="mc-twitter"></span><span class="mc-facebook"></span><span class="mc-googleplus"></span><span class="mc-vkontakte"></span><span class="mc-odnoklassniki"></span><span class="mc-mymailru"></span></span></div><div class="mc-comment-moderate"><a href="#">{{=it.msg.moderate}} <i class="mcicon-caret-down"></i></a></div></div>',imgerror:"if(this.src!='{{=it.ava}}')this.src='{{=it.ava}}';",reply:'<div class="mc-editor"><div class="mc-editor-wrapper"><div class="mc-editor-message"><textarea class="mc-answer-textarea" placeholder="{{=it.msg.placeholder}}"></textarea></div></div></div><button class="mc-btn mc-comment-submit">{{=it.msg.submit}}</button>',edit:'<div class="mc-comment-edit-box"><div class="mc-editor"><div class="mc-editor-wrapper"><div class="mc-editor-message"><textarea class="mc-answer-textarea" placeholder="{{=it.msg.placeholder}}">{{!it.oldmsg}}</textarea></div></div></div><button class="mc-btn mc-comment-save">{{=it.msg.save}}</button><button class="mc-btn mc-save-cancel">{{=it.msg.cancel}}</button></div>',agreement:'<input type="checkbox"/> {{=it.msg.accept}} <a href="{{=it.url}}" target="_blank" style="text-decoration:underline!important;">{{=it.msg.agreement}}</a>',renderWidget:function(){var I=(F.html&&F.html.widget)?F.html.widget:this.widget;
return this.render(I,{id:F.id,host:Cackle.origin,wl:H.wl,close:H.close,expand:F.expand,sitePage:k,mcAnonymAvatar:z,order:x.getCommentOrder(),mcTheme:y,imgerror:this.renderImgError(),msg:a})
},renderComment:function(J){var I=(F.html&&F.html.comments)?F.html.comments:this[y];
return this.render(I,J)
},renderImgError:function(){return(doT.template(this.imgerror))({ava:o})
},render:function(I,J){J.msg=a;
return(doT.template(I))(J)
},render2:function(I,J){J.msg=a;
return(doT.template(this[I]))(J)
}};
var l={xPostProviders:{vkontakte:true,mymailru:true,twitter:true},content:"",init:function(){this.content=Cackle.Fastjs.create("div");
Cackle.Fastjs.addcl(this.content,"cc mc-c");
if(r){Cackle.Fastjs.addcl(this.content,"mc-"+r)
}this.loadHtml();
this.textarea=this.content.querySelector(".mc-postbox-container textarea");
Cackle.AutoSize.main(this.textarea);
Cackle.Fastjs.on(this.textarea,"mousedown",this.expandWidget)
},loadHtml:function(){this.content.innerHTML=s.renderWidget();
if(t){Cackle.Lib.loadCss(Cackle.origin+"/uploads/comment/"+F.id+"/style.css?v="+q)
}var I=Cackle.Comment.getEL(F);
Cackle.Fastjs.html(I,this.content);
this.buildSubscription(D.subscribed);
this.buildLoggedUser(D);
this.initSocialXPost()
},buildSubscription:function(L){var K=this.content.querySelector(".mc-subscription-menu");
if(!K){return
}var J=K.parentNode,I="mc-subscribed";
if(L){Cackle.Fastjs.addcl(J,I);
K.appendChild(Cackle.Fastjs.create("i","mcicon-ok"))
}else{Cackle.Fastjs.remcl(J,I);
Cackle.Fastjs.rm2(this.content,".mc-subscription-menu .mcicon-ok")
}},expandWidget:function(){var I=l.textarea,J=Cackle.Fastjs.parents(I,"mc-widget-container");
Cackle.Fastjs.addcl(J,"mc-expanded");
I.focus()
},buildLoggedUser:function(J){if(J.id){if(this.xPostProviders[J.provider]){this.showSocialXPost(J.provider)
}else{this.hideSocialXPost()
}Cackle.Fastjs.addcl(this.content,"mc-loggedin");
if(J.moderator){Cackle.Fastjs.addcl(this.content,"mc-admin")
}if(J.notice){this.buildNotice(J.notice)
}}else{J={avatar:z,id:0,name:""};
Cackle.Fastjs.remcl(this.content,"mc-loggedin");
Cackle.Fastjs.remcl(this.content,"mc-admin");
Cackle.Fastjs.hide(".mc-social-xpost",this.content)
}var L=this.content.querySelector(".mc-avatar-container img");
if(L){var I=L.getAttribute("height");
L.setAttribute("src",this.buildAvatarSrc(J,I))
}var K=this.content.querySelector(".mc-user .mc-user-name");
if(K){Cackle.Fastjs.txt(K,J.name)
}},buildNotice:function(J){var I=Cackle.Modal.show("cc mc-modal-notice",a.notice,"",s.render2("notice",{notice:J}));
Cackle.Fastjs.on2(I,".mc-notice-agree","click",function(){var K=F.host+"/widget/"+F.id+"/notice/read";
Cackle.PostMessage.post(F.host,K,null);
Cackle.Modal.hide(I)
})
},buildAvatarSrc:function(I,K){if(I.avatar){var J=Cackle.Base.ssl(I.avatar);
return J.match("^http://cackle.me/")?J.replace("http://","http://i1.wp.com/"):J
}else{if(v&&I.hash){return this.buildGravatarUrl(I.hash,K||42)
}else{return z
}}},buildAnonymAvatarSrc:function(I,J){if(A&&I.hash){return this.buildGravatarUrl(I.hash,J||42)
}else{return z
}},buildGravatarUrl:function(J,I){return Cackle.protocol+"//gravatar.com/avatar/"+J+"?d="+z+"&r=PG&s="+I
},buildWaitAvatar:function(){var I=this.content.querySelector(".mc-avatar-container img");
I.setAttribute("src",F.host+"/widget/img/load-avatar.gif")
},initSocialXPost:function(){var I=this,J=this.content.querySelector(".mc-social-xpost-checkbox");
if(!J){return
}Cackle.Fastjs.on(J,"click",function(){var L=I.content.querySelector(".mc-social-xpost-icon"),K=I.getSocialXPostProvider(L.getAttribute("class"));
if(this.checked){Cackle.Cookie.create(K,"on",365)
}else{Cackle.Cookie.create(K,"off",365)
}})
},getSocialXPostProvider:function(I){var J="";
Cackle.Fastjs.each(I.split(" "),function(K){if(K!="mc-social-xpost-icon"){J=K;
return
}});
return J
},showSocialXPost:function(M){var I=Cackle.Cookie.read("mc-xpost-"+M),L=this.content.querySelector(".mc-social-xpost-checkbox"),J=this.content.querySelector(".mc-social-xpost-icon"),K=this.content.querySelector(".mc-social-xpost");
if(!L){return
}if((m==false&&I!="on")||I=="off"){L.checked=false
}else{L.checked=true
}J.setAttribute("class","mc-social-xpost-icon mc-xpost-"+M);
J.setAttribute("title",M);
K.style.display="inline-block"
},hideSocialXPost:function(){Cackle.Fastjs.hide(".mc-social-xpost",this.content)
},initAgreement:function(I){if(F.agreement){if(Cackle.Login.isAuthorized()){if(this.isAgreement()){return
}var J=Cackle.Fastjs.create("div","mc-agreement");
J.innerHTML=s.render2("agreement",{url:F.agreement});
Cackle.Fastjs.on2(J,"input","change",function(){var K="mc-agreement"+Cackle.Login.auth.id;
Cackle.Cookie.create(K,this.checked,1000)
});
I=I||this.content.querySelector(".mc-postbox-container .mc-submit-left");
I.appendChild(J)
}else{Cackle.Fastjs.rm2(this.content,".mc-agreement")
}}},isAgreement:function(){if(F.agreement){var J="mc-agreement"+Cackle.Login.auth.id,I=Cackle.Cookie.read(J);
if(I=="true"){return true
}else{return false
}}return true
},setCommentCount:function(K){var I=parseInt(K);
if(I>0){var L=this.content.querySelector(".mc-comment-count");
if(!L){return
}L.innerHTML=a.commentCount(I);
L.setAttribute("data-count",I);
if(F.countContainer){var J=document.getElementById(F.countContainer);
if(J){J.innerHTML=I
}}}},addCommentCount:function(K){var J=this.content.querySelector(".mc-comment-count"),I=parseInt(J.getAttribute("data-count"))+K;
if(!J){return
}J.setAttribute("data-count",I);
this.setCommentCount(I)
}};
var j={getId:function(I){return Cackle.Fastjs.parentsel(I,"li").getAttribute("id").replace("cc-","")
},getParentContainer:function(N){var J=document.getElementById("cc-"+N.parentId);
if(J){return this.getChildContainer(J)
}if(!N.path){return null
}var K=l.content.querySelector(".mc-comment-list");
for(var L=0;
L<N.path.length;
L++){var M=N.path[L],J=document.getElementById("cc-"+M);
if(J){K=this.getChildContainer(J)
}else{var I=this.deletedComment(M);
K.appendChild(I);
K=this.getChildContainer(I)
}}return K
},getChildContainer:function(I){var K=Cackle.Fastjs.child(I,"mc-comment-child");
if(K){return K
}else{var J=Cackle.Fastjs.create("ul","mc-comment-child");
I.appendChild(J);
return J
}},deletedComment:function(J){var I=Cackle.Fastjs.create("li");
I.setAttribute("id","cc-"+J);
I.innerHTML=this.deletedWrap();
return I
},deletedWrap:function(){return'<div class="mc-comment-wrapper mc-comment-deleted">'+a.commentDeleted+"</div>"
},appendComment:function(N,S){var P=document.getElementById("cc-"+N.id),Q=null;
if(P){Q=Cackle.Fastjs.child(P,"mc-comment-wrapper");
if(!Cackle.Fastjs.hascl(Q,"mc-comment-deleted")){Q.setAttribute("class","mc-comment-wrapper mc-comment-"+N.status);
return
}}Cackle.Fastjs.rm2(l.content,".mc-none-comments");
var I=l.content.querySelector(".mc-comment-list");
if(N.parentId>0){I=this.getParentContainer(N);
if(!I){return
}if(B<N.path.length+1){Cackle.Fastjs.addcl(I,"mc-lastlvl")
}}var R=Cackle.Fastjs.create("li"),M=this.getUser(N),K=Cackle.Base[E?"escapeHtmlWithLinks":"escapeHtml"](N.message);
R.setAttribute("id","cc-"+N.id);
R.setAttribute("data-author-id",M.id);
R.innerHTML=s.renderComment({close:H.close,user:M,comment:N,imgerror:s.renderImgError(),ratingcl:s.render2("ratingcl",{rate:N.rating}),rating:s.render2("rating",{rate:N.rating}),created:Cackle.Time.getTime(N.created,F.lang,F.timeFormat),url:x.url+"#cc-"+N.id,message:K});
if(!F.demo){Cackle.Fastjs.on(R.querySelector(".mc-comment-thumbsup"),"click",x.vote);
Cackle.Fastjs.on(R.querySelector(".mc-comment-thumbsdown"),"click",x.vote);
Cackle.Fastjs.on(R.querySelector(".mc-comment-reply"),"click",x.replyShow);
Cackle.Fastjs.on(R.querySelector(".mc-comment-edit"),"click",x.editComment);
Cackle.Fastjs.on(R.querySelector(".mc-comment-remove"),"click",x.removeComment);
Cackle.Fastjs.onall(R.querySelectorAll(".mc-share-icons span"),"click",x.shareComment);
Cackle.Fastjs.on(R.querySelector(".mc-comment-moderate a"),"click",d.click)
}var L=R.querySelector(".mc-comment-body-container");
var O=null;
if(b&&(N.message||N.media)){O=Cackle.Media.makeContent(N.message+" "+N.media);
if(O){L.appendChild(O)
}}this.updateUserBtnsState(M.id,N.created,R);
if(P){var J=R.querySelector(".mc-comment-wrapper"),M=R.querySelector(".mc-comment-user");
Cackle.Fastjs.rm(Q);
Cackle.Fastjs.prependSlide(J,P);
if(M){Cackle.Fastjs.prependSlide(M,P)
}}else{if(S){Cackle.Fastjs.prependSlide(R,I)
}else{I.appendChild(R)
}}this.setTextHigh(L,O)
},getUser:function(P){var J=P.author,I=P.anonym,O=0,L="",K=z,M="",N="";
if(J){O=J.id;
L=J.name;
K=l.buildAvatarSrc(J);
N=J.provider!="sso"?J.provider:"";
if(J.www&&!h){M=J.www.match("^https?://")?J.www:"http://"+J.www
}}else{if(I){O=I.id;
L=I.name;
K=l.buildAnonymAvatarSrc(I);
if(I.www&&!h){M=I.www.match("^https?://")?I.www:"http://"+I.www
}}}return{id:O,name:L||a.guest,avatar:K,www:M,provider:N}
},setTextHigh:function(I,J){if(F.textHigh==0){return
}var K=F.textHigh||374;
if(I.offsetHeight>1.5*K||J&&J.querySelectorAll("li").length>1){Cackle.Fastjs.css(I,"height",K);
var L=Cackle.Fastjs.next(I);
Cackle.Fastjs.on(L,"click",function(){I.style.height="";
var M=I.offsetHeight;
Cackle.Fastjs.css(I,"height",K);
setTimeout(function(){Cackle.Fastjs.transCss(I,"height",M);
Cackle.Fastjs.css(I,"height",M)
},1);
setTimeout(function(){L.style.display="none";
I.setAttribute("style","")
},500)
});
L.style.display=""
}},updateAppearance:function(){var P=l.content.querySelectorAll(".mc-comment-list .mc-comment-wrapper.mc-comment-approved");
for(var M=0;
M<P.length;
M++){var K=P[M],J=K.querySelector(".mc-comment-created"),N=parseInt(J.getAttribute("timestamp"));
if(N){var I=J.innerHTML,Q=Cackle.Time.getTime(N,F.lang,F.timeFormat);
if(I!=Q){J.innerHTML=Q
}}var L=K.querySelector(".mc-comment-username"),O=parseInt(L.getAttribute("data-author"));
this.updateUserBtnsState(O,N,K)
}},updateUserBtnsState:function(J,K,I){this.updateUserBtnState(n,".mc-comment-edit",J,K,I);
this.updateUserBtnState(u,".mc-comment-remove",J,K,I)
},updateUserBtnState:function(L,M,K,N,I){if(L==null&&D.id===K){Cackle.Fastjs.show(M,I)
}else{if(L==0||D.id!=K){Cackle.Fastjs.hide(M,I)
}else{if(L>0&&D.id===K){var J=new Date().getTime();
if(N+(L*60*1000)<J){Cackle.Fastjs.hide(M,I)
}else{Cackle.Fastjs.show(M,I)
}}else{Cackle.Fastjs.hide(M,I)
}}}},changeMessage:function(J,L){var I=l.content.querySelector("#cc-"+J+" .mc-comment-body");
if(!I){return
}I.innerHTML=Cackle.Base[E?"escapeHtmlWithLinks":"escapeHtml"](L);
if(L){var K=Cackle.Media.makeContent(L);
if(K){Cackle.Fastjs.after(I,K)
}}},changeRating:function(K,L){var J=l.content.querySelector("#cc-"+K+" .mc-comment-rating"),I="mc-comment-rating-zero";
if(!J){return
}if(L>0){I="mc-comment-rating-plus";
L="+"+L
}else{if(L<0){I="mc-comment-rating-neg"
}}J.setAttribute("class","mc-comment-rating");
Cackle.Fastjs.addcl(J,I);
J.innerHTML=L
},changeStatus:function(J,I){var L=document.getElementById("cc-"+J);
if(!L){return
}if(D.moderator&&I!="deleted"){var K=Cackle.Fastjs.child(L,"mc-comment-wrapper");
K.setAttribute("class","mc-comment-wrapper mc-comment-"+I)
}else{this.removeComment(L)
}l.addCommentCount(-1)
},removeComment:function(J){var I=J.querySelector(".mc-comment-child");
if(I){this.markAsDeleted(J)
}else{Cackle.Fastjs.rm(J)
}},markAsDeleted:function(K){var I=K.querySelector(".mc-comment-wrapper"),J=K.querySelector(".mc-comment-user");
if(J){K.removeChild(J)
}I.outerHTML=this.deletedWrap()
}};
var x={channel:"",url:"",title:"",demoCommentId:100,init:function(){this.initElements();
if(F.demo){return
}var I=this;
this.initUserMenu();
Cackle.Fastjs.on2(l.content,".mc-head-container .active a","click",function(J){return false
});
Cackle.Fastjs.on2(l.content,".mc-comment-submit","click",function(K){var J=l.content.querySelector(".mc-postbox-container");
I.commentSubmit(J);
return false
});
Cackle.Fastjs.on2(l.content,".mc-sort-menu","click",this.sortMenu);
Cackle.Fastjs.onall2(l.content,".mc-sort-action","click",this.sortAction);
Cackle.Fastjs.on2(l.content,".mc-subscription-menu","click",this.subscribed);
Cackle.Fastjs.on2(l.content,".mc-subscription-email a","click",this.subscribedEmail);
Cackle.Fastjs.on2(l.content,".mc-subscription-email input","keyup",this.subscribedEmail);
Cackle.Fastjs.on2(l.content,".mc-rss","click",this.rss);
Cackle.Fastjs.on2(l.content,".mc-share","click",this.sharePostMenu);
Cackle.Fastjs.onall2(l.content,".mc-share-menu span","click",this.sharePost)
},initElements:function(){this.url=Cackle.getUrl(F);
this.channel=Cackle.getChan(F);
this.title=Cackle.Fastjs.title()
},initUserMenu:function(){var J=this,I=l.content.querySelector(".mc-head-container .mc-user");
if(!I){return
}var K=I.querySelector(".mc-controls");
Cackle.Fastjs.on(I,"click",function(L){if(Cackle.Fastjs.isVisible(K)){Cackle.Fastjs.hide2(K)
}else{Cackle.Fastjs.show2(K)
}return false
});
Cackle.Fastjs.on2(I,".mc-user-prof","click",function(M){Cackle.Fastjs.hide2(K);
var L=document.querySelector(".cc.mc-modal-user");
if(L){Cackle.Modal.show2(L);
return false
}J.initUserProf();
return false
});
Cackle.Fastjs.on2(I,".mc-user-edit","click",function(M){Cackle.Fastjs.hide2(K);
var L=document.querySelector(".cc.mc-modal-edit");
if(L){Cackle.Modal.show2(L);
return false
}J.initUserEdit();
return false
});
Cackle.Fastjs.on2(I,".mc-logout","click",function(M){var L=document.querySelectorAll(".cc.mc-modal-cnt");
Cackle.Fastjs.each(L,function(N){Cackle.Fastjs.rm(N)
});
Cackle.Login.logout(F,w.afterLogin)
})
},initUserProf:function(){var I=s.render2("profile",{user:D,imgerror:s.renderImgError(),avasrc:l.buildAvatarSrc(D,92)}),L=Cackle.Modal.show("cc mc-modal-user",a.prof,"",I),K=L.querySelector(".mc-user-count span"),O=L.querySelector(".mc-user-comments"),N=L.querySelector(".mc-pagination"),M=function(Q){var P=Q.commentUserModel,R=0;
Cackle.Fastjs.txt(K,P.count);
Cackle.Fastjs.each(P.comments,function(T){var S=Cackle.Fastjs.create("div","mc-user-comment mc-"+T.status);
S.innerHTML=s.render2("userComment",{c:T,created:Cackle.Time.getTime(T.created,F.lang)});
O.appendChild(S);
R+=1
});
if(R>9){Cackle.Fastjs.show2(N)
}else{Cackle.Fastjs.hide2(N)
}};
var J=F.host+"/comment/"+F.id+"/user";
Cackle.PostMessage.get(F.host,J,null,function(P){M(P)
});
Cackle.Fastjs.on(N,"click",function(Q){var P=parseInt(N.getAttribute("data-page"))||1;
Cackle.PostMessage.get(F.host,J+"?page="+P,null,function(R){M(R);
N.setAttribute("data-page",P+1)
});
return false
})
},initUserEdit:function(){var J=l.buildAvatarSrc(D,92),Q=s.render2("userEdit",{avasrc:J,imgerror:s.renderImgError()}),P=Cackle.Modal.show("cc mc-modal-edit",a.editProf,"",Q),K=P.querySelector("img"),I=P.querySelector(".mc-user-imgload"),O=P.querySelector('input[type="file"]'),L=P.querySelectorAll(".mc-user-info input"),M=P.querySelector('input[data-param="avatar"]'),N=P.querySelector(".mc-btn");
Cackle.Fastjs.each(L,function(S){var R=S.getAttribute("data-param");
if(typeof D[R]==="boolean"){S.checked=D[R]
}else{S.value=D[R]||""
}});
M.value=J;
Cackle.Fastjs.on(M,"input",function(){K.src=M.value
});
Cackle.Fastjs.on(I,"click",function(){var R=Cackle.Fastjs.next(this);
R.click();
return false
});
Cackle.Fastjs.on(O,"change",function(){Cackle.Media.uploadFiles(this.files,this,null,function(R){M.value=R;
K.src=R
});
this.value=""
});
Cackle.Fastjs.on(N,"click",function(){var R=F.host+"/comment/"+F.id+"/user",S={};
Cackle.Fastjs.each(L,function(U){var T=U.getAttribute("data-param");
S[T]=U[U.getAttribute("type")=="checkbox"?"checked":"value"]
});
Cackle.PostMessage.post(F.host,R,S,function(){window.location.reload()
});
return false
})
},getCommentOrder:function(){return Cackle.Cookie.read("mc-comment-order")||F.sort||"desc"
},commentSubmit:function(J){var I=this;
if(!D.id){w.widget.loginPopup(function(){I.submit(J)
},{event:"submit",msg:I.getMsgTextarea(J).value,parent:I.getParentId(J)})
}else{I.submit(J)
}return false
},recive:function(L){var J=this;
if(k==0){return
}var I=F.host+"/widget/"+F.id+(D.moderator?"/fullComments":"/comments"),K={sitePage:k,order:this.getCommentOrder(),page:e.getPage(),size:G};
Cackle.Fastjs.jsonp(I,K,function(M){J.showComments(M.page,L)
})
},showComments:function(J,K){if(!J){return
}Cackle.Fastjs.each(J.content,function(L){j.appendComment(L)
});
l.setCommentCount(J.totalElements);
Cackle.Base.gotoId("cc");
var I=(J.number+1)*J.size<J.totalElements;
if(I){e.show()
}else{e.hide()
}if(K){K(this)
}},reRecive:function(){l.content.querySelector(".mc-comment-list").innerHTML="";
e.setPage(0);
this.recive()
},getMsgTextarea:function(I){return I.querySelector(".mc-editor-message textarea")
},getParentId:function(I){if(Cackle.Fastjs.hascl(I,"mc-comment-reply-box")){return j.getId(I)
}return 0
},submit:function(P){var Q=this,L=P.querySelector(".mc-comment-submit"),N=this.getParentId(P),O=this.getMsgTextarea(P),R=O.value.trim(),K=this.getMedia(P.querySelectorAll(".mc-media-surface img")),J=this.submitUrl(R,K,N);
if(!D.id){return
}var M=this.validateCommentMsg(R,K);
if(M){this.validateAlert(P,M);
return false
}if(!l.isAgreement()){this.validateAlert(P,a.agreementError);
return false
}if(L){var I=Cackle.Fastjs.create("span","mc-spin");
Cackle.Fastjs.prepend(L,I);
L.disabled=true
}Cackle.PostMessage.post(F.host,J.url,J.data,function(U){var S=U.commentResponse;
if(!S){return
}var V=S.comment,T=S.error;
if(V){O.value="";
Cackle.Fastjs.rm2(P,".mc-media-preview");
if(N>0){Cackle.Fastjs.hide2(P)
}Cackle.Fastjs.cbs(F,"submit",S);
if(V.status==="pending"){Q.validateAlert(P,a.commentPreModer)
}else{j.appendComment(V,true)
}}else{if(T){Q.validateAlert(P,Cackle.Base.error(T,a))
}}},function(){O.focus();
if(L){Cackle.Fastjs.rm(I);
L.disabled=false
}})
},justSubmit:function(L,K){var J=this,I=this.submitUrl(L,"",K);
Cackle.PostMessage.post(F.host,I.url,I.data,function(O){var P=l.content.querySelector(".mc-postbox-container"),M=O.commentResponse,Q=M.comment,N=M.error;
if(Q){if(Q.status==="pending"){J.validateAlert(P,a.commentPreModer)
}else{j.appendComment(Q,true)
}}else{if(N){J.validateAlert(P,Cackle.Base.error(N,a))
}}})
},validateCommentMsg:function(J,I){if(!J){return a.messageBlankError
}else{if(J.length<2){return a.messageSmallError
}else{if((c&&J.length>c)||(!c&&J.length>2000)){return a.messageLimitError
}else{if(I&&I.length>1000){return a.mediaLengthError
}}}}return
},validateAlert:function(J,I){var K=Cackle.Fastjs.next(J);
if(K&&Cackle.Fastjs.hascl(K,"mc-alert-error")){K.querySelector(".mc-alert-text").innerHTML=I
}else{K=Cackle.Fastjs.create("div","mc-alert mc-alert-error");
K.innerHTML='<div class="mc-alert-text">'+I+"</div>";
Cackle.Fastjs.after(J,K);
setTimeout(function(){Cackle.Fastjs.rm(K)
},10000)
}},getMedia:function(J){var I="";
if(J){Cackle.Fastjs.each(J,function(K){I+=" "+K.getAttribute("src")
});
if(I){I=I.trim()
}}return I
},submitUrl:function(K,M,J){var I=F.host+"/widget/"+F.id+"/createComment",N={chan:this.channel,url:this.url,title:this.title,msg:K,media:M,social:""};
if(J>0){N.parentId=J
}var L=l.content.querySelector(".mc-social-xpost .mc-social-xpost-checkbox");
if(L&&L.checked){N.social="on"
}return{url:I,data:N}
},vote:function(M,N){var K=N||this,O="data-actv",Q=K.getAttribute(O);
if(Q=="false"){return false
}var P=K.getAttribute("data-vote"),J=F.host+"/comment/"+F.id+"/vote/"+j.getId(K)+"/"+P;
if(!D.id&&!N){w.widget.loginPopup(function(){x.vote(M,K)
},{event:"vote",href:J,});
return false
}var I=Cackle.Fastjs.parentsel(K,"div"),L=I.querySelector(".mc-comment-rating");
Cackle.Fastjs.addcl(L,"mc-spin");
K.setAttribute(O,"false");
x.justVote(J,function(){K.removeAttribute(O,"true");
Cackle.Fastjs.remcl(L,"mc-spin")
});
return false
},justVote:function(J,I){Cackle.PostMessage.post(F.host,J,null,function(K){if(I){I()
}var L=K.commentSmallDto;
if(L){j.changeRating(L.id,L.rating)
}})
},replyShow:function(M){var I=Cackle.Fastjs.parentsel(this,"li"),K=I.querySelector(".mc-comment-wrapper"),L=K.querySelector(".mc-comment-reply-box");
if(L&&Cackle.Fastjs.isVisible(L)){Cackle.Fastjs.hide2(L)
}else{if(!L){var J=(F.html&&F.html.reply)?F.html.reply:s.reply;
L=Cackle.Fastjs.create("div","mc-comment-reply-box");
L.innerHTML=s.render(J,{});
l.initAgreement(L);
Cackle.Fastjs.on2(L,".mc-comment-submit","click",function(O){x.commentSubmit(L);
return false
});
Cackle.Media.main(L.querySelector(".mc-editor-message"));
Cackle.AutoSize.main(L.querySelector("textarea"));
var N=K.querySelector(".mc-comment-footer");
Cackle.Fastjs.after(N,L)
}L.style.display="";
L.querySelector("textarea").focus()
}return false
},editComment:function(O){var N=j.getId(this),M=document.getElementById("cc-"+N),I=M.querySelector(".mc-comment-body"),L=I.textContent,K=O.data&&O.data.url?O.data.url:"/edit";
if(I.querySelector("textarea.mc-answer-textarea")){return false
}I.innerHTML=s.render2("edit",{oldmsg:L});
Cackle.Media.main(I.querySelector(".mc-editor-message"));
Cackle.AutoSize.main(I.querySelector("textarea"));
var J=I.querySelector("textarea.mc-answer-textarea");
J.style.height=J.scrollHeight+"px";
J.focus();
Cackle.Fastjs.on2(I,".mc-comment-save","click",function(S){var T=J.value;
var Q=x.validateCommentMsg(T);
if(Q){x.validateAlert(I,Q);
return false
}var R=this,U=Cackle.Fastjs.create("span","mc-spin");
this.appendChild(U);
this.disabled=true;
var P=F.host+"/comment/"+F.id+K;
Cackle.PostMessage.post(F.host,P,{id:N,msg:T},function(V){if(V&&V.error){x.validateAlert(I,a[V.error])
}j.changeMessage(N,T)
},function(){Cackle.Fastjs.rm(U);
R.disabled=false
});
return false
});
Cackle.Fastjs.on2(I,".mc-save-cancel","click",function(P){j.changeMessage(N,L);
return false
});
return false
},removeComment:function(L){if(confirm(a.removeConfirm)){var K=this,J=j.getId(this),I=F.host+"/comment/"+J+"/remove";
Cackle.PostMessage.post(F.host,I,{},function(){var M=Cackle.Fastjs.parentsel(K,"li");
if(M.querySelector("li")){j.removeComment(M)
}else{Cackle.Fastjs.rm(M)
}})
}return false
},removeAll:function(K,L,I,N){var J=F.host+"/site/"+F.id+"/ban",M={all:true,status:2,commentId:K};
if(N){M[I?"anonymId":"userId"]=L
}Cackle.PostMessage.post(F.host,J,M,function(){var O=0;
Cackle.Fastjs.each(l.content.querySelectorAll('li[data-author-id="'+L+'"]'),function(P){j.removeComment(P);
O-=1
});
l.addCommentCount(O)
});
return false
},sortMenu:function(L){var K=this.parentNode,M=K.querySelector(".mc-controls"),I=x.getCommentOrder();
Cackle.Fastjs.rm2(M,"a i");
var J=M.querySelector('a[data-sort="'+I+'"]');
J.appendChild(Cackle.Fastjs.create("i","mcicon-ok"));
if(Cackle.Fastjs.isVisible(M)){M.style.display="none"
}else{M.style.display=""
}return false
},sortAction:function(K){var I=this.getAttribute("data-sort"),J=Cackle.Fastjs.parents(this,"mc-comment-sort"),M=J.querySelector(".mc-controls"),L=J.querySelector(".mc-sort-menu");
Cackle.Cookie.create("mc-comment-order",I,365);
L.innerHTML=this.textContent+'<i class="mcicon-caret-down"></i>';
x.reRecive();
M.style.display="none";
return false
},sharePostMenu:function(J){var I=this.parentNode,K=I.querySelector(".mc-controls");
if(Cackle.Fastjs.isVisible(K)){K.style.display="none"
}else{K.style.display=""
}return false
},sharePost:function(K){var J=Cackle.Fastjs.parents(this,"mc-share-post"),M=J.querySelector(".mc-controls"),L=this.className.replace("mc-",""),I={};
M.style.display="none";
I.url=x.url;
if(L=="twitter"){I.text=x.title
}Cackle.Social.Share[L](I);
return false
},subscribed:function(L){var J=this.parentNode;
if(Cackle.Fastjs.hascl(J,"mc-subscribed")){if(D&&D.email){x.subscriptionRequest("unsubscription",D.email);
l.buildSubscription(false)
}else{var I=l.content.querySelector(".mc-subscription-email input").value;
x.subscriptionRequest("unsubscription",I);
l.buildSubscription(false)
}}else{if(D&&D.email){x.subscriptionRequest("subscription",D.email);
l.buildSubscription(true)
}else{var K=l.content.querySelector(".mc-subscription-email");
K.style.display="";
K.querySelector("input").focus();
J.style.display="none"
}}return false
},subscribedEmail:function(K){if(K.type=="keyup"&&K.keyCode!=13){return
}var J=this.parentNode,I=J.querySelector("input").value;
x.subscriptionRequest("subscription",I);
Cackle.Fastjs.hide(".mc-subscription-email",l.content);
var L=l.content.querySelector(".mc-subscription-menu");
L.parentNode.style.display="";
l.buildSubscription(true);
return false
},subscriptionParams:function(I){return{email:I,siteId:F.id,chan:this.channel,url:this.url,title:this.title}
},unsubscriptionParams:function(I){return{email:I}
},subscriptionRequest:function(K,J){var I=F.host+"/widget/"+k+"/"+K;
params=this[K+"Params"](J);
Cackle.PostMessage.post(F.host,I,params,function(){var L=(K=="subscription")?"subscribe":"unsubscribe";
Cackle.Fastjs.cbs(F,L,params)
})
},rss:function(J){var I=this.getAttribute("href");
if(I.indexOf("/widget/"+F.id+"/0/comments.rss")>-1){window.location.href=I+"?chan="+encodeURIComponent(x.channel);
return false
}},shareComment:function(L){var O=this.className.replace("mc-",""),P=Cackle.Fastjs.parents(this,"mc-comment-wrapper"),J=P.querySelector(".mc-comment-created").getAttribute("href"),N=P.querySelector(".mc-comment-username").textContent,M=P.querySelector(".mc-comment-body").textContent;
var I,K=P.querySelector(".mc-comment-media a");
if(K){I=K.getAttribute("href")
}else{li=Cackle.Fastjs.parentsel(this,"li"),I=li.querySelector(".mc-comment-author img").getAttribute("src")
}Cackle.Social.Share[O]({url:J,title:N,text:M,img:I});
return false
}};
var p={streamId:null,init:function(){var I=this;
if(this.streamId){Cackle.Stream.stop(this.streamId)
}if(k>0){this.streamId="cc"+k;
if(D&&D.id){this.streamId+="/user"+D.id
}Cackle.Stream.start(this.streamId,function(J){I.dispatcher(J);
Cackle.Fastjs.cbs(F,J.event,J)
})
}},dispatcher:function(I){if(I.event==="status"){if(I.status==="approved"){l.addCommentCount(1);
j.appendComment(I,true)
}else{j.changeStatus(I.id,I.status)
}}else{if(I.event==="vote"){j.changeRating(I.id,I.rating)
}else{if(I.event==="edit"){j.changeMessage(I.id,I.msg)
}else{if(I.event==="notice"){l.buildNotice(I.msg)
}else{if(I.status==="approved"||D.moderator){l.addCommentCount(1);
j.appendComment(I,true)
}}}}}}};
var w={widget:null,init:function(){var I=F.data.login;
I.providers=F.providers||C.providers;
var J=Cackle.Fastjs.extend(F,{chanId:k,container:"cc-login"+F.id,data:I,callback:{login:l.expandWidget,before:this.beforeLogin,after:this.afterLogin,sso:this.ssoLogin,}});
this.widget=Cackle.Login.main(J)
},beforeLogin:function(){l.buildWaitAvatar()
},afterLogin:function(I){D=I;
p.init();
l.buildLoggedUser(D);
l.buildSubscription(D.subscribed);
l.initAgreement();
j.updateAppearance()
},ssoLogin:function(I){var J=Cackle.Storage.get("mc-event");
if(J){Cackle.Storage.remove("mc-event");
if("submit"==J.event&&J.msg){x.justSubmit(J.msg,J.parent)
}else{if("vote"==J.event){x.justVote(J.href)
}}}}};
var e={container:"",init:function(){this.container=l.content.querySelector(".mc-pagination");
if(!this.container){return
}var I=this;
Cackle.Fastjs.on2(this.container,".mc-comment-next","click",function(J){I.next();
return false
})
},setPage:function(J){var I=this.container.querySelector(".mc-comment-next");
if(I){I.setAttribute("data-page",J)
}},getPage:function(){var I=this.container.querySelector(".mc-comment-next");
return I?parseInt(I.getAttribute("data-page")):0
},next:function(){var I=this;
this.showWait();
this.setPage(this.getPage()+1);
x.recive(function(){I.removeWait()
})
},show:function(){Cackle.Fastjs.show(".mc-pagination",l.content)
},hide:function(){Cackle.Fastjs.hide(".mc-pagination",l.content)
},showWait:function(){var I=this.container.querySelector(".mc-comment-next");
if(I){I.appendChild(this.waitImg())
}},removeWait:function(){Cackle.Fastjs.rm2(this.container,".mc-pagination-wait")
},waitImg:function(){var I=Cackle.Fastjs.create("img","mc-pagination-wait");
I.src=F.host+"/widget/img/comment-wait.gif";
return I
}};
var d={messages:{ru:{guest:"Гость",moderate:"Модерировать",approve:"Одобрить",spam:"Это спам",removeByAdmin:"Удалить",removeAll:"Удалить все",removeAllBan:"Удалить все и забанить",editByAdmin:"Редактировать",banUser:"Забанить пользователя",unbanUser:"Разбанить пользователя",banIp:"Забанить IP",unbanIp:"Разбанить IP",confirm:"Вы уверены, что хотите удалить?"},en:{guest:"Guest",moderate:"Moderate",approve:"Approve",spam:"Spam",removeByAdmin:"Delete",removeAll:"Delete all",removeAllBan:"Delete all and ban",editByAdmin:"Edit",banUser:"Ban user",unbanUser:"Unban user",banIp:"Ban IP",unbanIp:"Unban IP",confirm:"Are you sure you want to delete?"},msg:function(I){lang=F.lang=="ru"?"ru":"en";
return this[lang][I]
}},click:function(L){var K=this.parentNode,I="mc-comment-moderate-press";
if(Cackle.Fastjs.hascl(K,I)){Cackle.Fastjs.remcl(K,I);
var J=Cackle.Fastjs.next(this);
if(J){K.removeChild(J)
}}else{Cackle.Fastjs.addcl(K,I);
d.show(this)
}return false
},show:function(N){var K=j.getId(N),M=Cackle.Fastjs.parentsel(N,"li"),L=M.getAttribute("data-author-id"),J=Cackle.Fastjs.create("ul","mc-controls"),I=Cackle.origin+"/comment/"+F.id+"/info.json",O={id:K};
Cackle.Fastjs.jsonp(I,O,function(P){var Q=P.moderateInfo;
d.commentControls(J,K,L,Q,N);
if(!Q.comment.anonym){J.appendChild(d.userControl(K,L,Q,N))
}J.appendChild(d.ipControl(K,Q,N));
Cackle.Fastjs.after(N,J)
})
},userControl:function(J,K,N,M){var I=Cackle.Fastjs.create("li"),L;
if(N.ban){L=this.banControl(J,"unban",this.messages.msg("unbanUser"),M,K,N.comment.anonym)
}else{L=this.banControl(J,"ban",this.messages.msg("banUser"),M,K,N.comment.anonym)
}I.appendChild(L);
return I
},ipControl:function(J,M,L){var I=Cackle.Fastjs.create("li"),K;
if(M.ipban){K=this.banControl(J,"unban",this.messages.msg("unbanIp"),L)
}else{K=this.banControl(J,"ban",this.messages.msg("banIp"),L)
}I.appendChild(K);
return I
},commentControls:function(N,L,O,J,M){var R=this,I=[];
if(J.comment.status==="pending"){I.push("approve");
I.push("removeByAdmin");
I.push("spam")
}else{if(J.comment.status==="approved"){I.push("spam");
I.push("removeByAdmin")
}else{if(J.comment.status==="spam"){I.push("approve");
I.push("removeByAdmin")
}else{I.push("approve");
I.push("spam")
}}}Cackle.Fastjs.each(I,function(T){var S=Cackle.Fastjs.create("li");
S.appendChild(R.control(L,T,R.messages.msg(T),M));
N.appendChild(S)
});
var K=Cackle.Fastjs.create("li");
K.appendChild(R.control(L,"removeAll",R.messages.msg("removeAll"),M,function(S){R.endClick(M);
R.deleteAll(M,L,O);
return false
}));
N.appendChild(K);
var Q=Cackle.Fastjs.create("li");
Q.appendChild(R.control(L,"removeAllBan",R.messages.msg("removeAllBan"),M,function(S){R.endClick(M);
R.deleteAll(M,L,O,J.comment.anonym,true);
return false
}));
N.appendChild(Q);
var P=Cackle.Fastjs.create("li");
P.appendChild(R.control(L,"editByAdmin",R.messages.msg("editByAdmin"),M,function(S){R.endClick(M);
S.data=S.data||{};
S.data.url="/editByAdmin";
return x.editComment.call(M,S)
}));
N.appendChild(P)
},deleteAll:function(L,J,K,I,M){if(!confirm(this.messages.msg("confirm"))){return false
}x.removeAll(J,K,I,M)
},refresh:function(I,L,K){if(I.indexOf("remove")>-1&&!confirm(this.messages.msg("confirm"))){return
}var J=this;
Cackle.PostMessage.post(F.host,I,L,function(){J.endClick(K)
})
},endClick:function(K){var J=K.parentNode;
Cackle.Fastjs.remcl(J,"mc-comment-moderate-press");
var I=Cackle.Fastjs.next(K);
if(I){J.removeChild(I)
}},control:function(M,L,O,N,P){var Q=this,I=F.host+"/comment/"+F.id+"/"+L,J={id:M},K=this.anchor(I,O);
if(P){Cackle.Fastjs.on(K,"click",P)
}else{Cackle.Fastjs.on(K,"click",function(R){Q.refresh(I,J,N);
return false
})
}return K
},banControl:function(N,M,Q,O,P,K){var R=this,I=F.host+"/site/"+F.id+"/"+M,J={commentId:N},L=this.anchor(I,Q);
if(P){J[K?"anonymId":"userId"]=P
}else{J.banIp=true
}Cackle.Fastjs.on(L,"click",function(S){R.refresh(I,J,O);
return false
});
return L
},anchor:function(J,I){var K=Cackle.Fastjs.create("a");
K.href=J;
K.innerHTML=I;
K.setAttribute("style","color:#333!important");
return K
}};
l.init();
x.init();
x.showComments(H.comments);
p.init();
w.init();
e.init();
Cackle.Media.main(l.content.querySelector(".mc-editor-message"));
Cackle.CommentBuilder=j;
Cackle.Fastjs.cbs(F,"ready");
Cackle.reinit=function(){if(Cackle.mcXHR){Cackle.mcXHR.abort()
}Cackle.bootstrap(true)
}
};