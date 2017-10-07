/* >>> file start: js/ads/criteo.js */
function crtg_getCookie(e){var t,r,a,c=document.cookie.split(";");for(t=0;t<c.length;t++)if(r=c[t].substr(0,c[t].indexOf("=")),a=c[t].substr(c[t].indexOf("=")+1),r=r.replace(/^\s+|\s+$/g,""),r==e)return unescape(a);return""}var crtg_nid="4024",crtg_cookiename="crtg_rta",crtg_varname="crtg_content",crtg_content=crtg_getCookie(crtg_cookiename),crtg_rnd=Math.floor(99999999999*Math.random());!function(){var e=location.protocol+"//rtax.criteo.com/delivery/rta/rta.js?netId="+escape(crtg_nid);e+="&cookieName="+escape(crtg_cookiename),e+="&rnd="+crtg_rnd,e+="&varName="+escape(crtg_varname);var t=document.createElement("script");t.type="text/javascript",t.src=e,t.async=!0,document.getElementsByTagName("head").length>0?document.getElementsByTagName("head")[0].appendChild(t):document.getElementsByTagName("body").length>0&&document.getElementsByTagName("body")[0].appendChild(t)}();
/* <<< file end: js/ads/criteo.js */

//# map link was there [criteo.js.map]
/* >>> file start: js/ads/ssp.js */
!function(){var t=LJ.get("v");LJ.injectScript("https://ssp.rambler.ru/lpdid.js?v="+t).then(function(){return LJ.injectScript("https://ssp.rambler.ru/capirs_async.js?v="+t)})}();
/* <<< file end: js/ads/ssp.js */

//# map link was there [ssp.js.map]
