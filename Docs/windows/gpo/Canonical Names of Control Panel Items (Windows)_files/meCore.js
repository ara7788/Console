!function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return r(n||e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){!function(e){var t=window;t.MSA=t.MSA||{};var n=t.MSA.MeControl=t.MSA.MeControl||{},o=n.Strings,r=(n.IDP,n.AuthState),i='<div id="{0}" class="msame_Drop_AI switch" tabIndex="0"><div class="msame_Drop_AI_pic"><div class="msame_Drop_AI_piccont"><div class="msame_Drop_AI_picframe"><img role="presentation" src="{1}"></div></div></div><div class="msame_Drop_AI_right"><div class="msame_TxtTrunc msame_Drop_AI_name">{2}</div><div class="msame_TxtTrunc msame_Drop_AI_email">{3}</div><div class="msame_TxtTrunc msame_Drop_AI_status">{4}</div></div><div class="msame_Drop_AI_remove" tabIndex="0"><img alt="{5}" src="{6}" /></div><div class="msame_Drop_AI_prog" style="display:none;"></div></div>',a=0;n.AccountItemControl=function(t){function s(){var e;return e=p.enabled?w?"statussignedin":"statussignedout":"statusunavailable",o.getString(e)}function l(e){e.preventDefault(),e.stopPropagation(),p.enabled&&t.onSwitchUser&&t.onSwitchUser()}function c(t){t.preventDefault(),t.stopPropagation(),S.hide(),h.show(),D.text(o.getString(w?"statussigningout":"statusremoving")),p.onSignOutUser&&p.onSignOutUser(function(){e(m).trigger("remove")},function(){S.show(),h.hide(),D.text(o.getString(w?"statussignoutfailed":"statusremovingfailed"))})}function u(e,t){t&&e&&13===e.which&&t(e)}var m=this,d=!1,f=!1,p=t,g="msame_ai"+a++,v=null,_=null,I=null,h=null,S=null,D=null,w=null;m.render=function(){var e=n.PictureLoaderCache.isCached(p.tileUrl)?p.tileUrl:"";return o.format(i,g,e,o.encodeHtml(p.displayName),o.encodeHtml(p.memberName),o.encodeHtml(s()),o.getString(p.authenticatedState==r.SignedInIdp?"signoutremovetip":"removetip",!0),p.removeImgUrl)},m.activate=function(){d||f||(d=!0,_=e("#"+g),S=e(".msame_Drop_AI_remove",_),h=e(".msame_Drop_AI_prog",_),I=e(".msame_Drop_AI_piccont img",_),D=e(".msame_Drop_AI_status",_),_.toggleClass("disabled",!p.enabled),_.toggleClass("switch",p.enabled),v=new n.PictureLoader(I,p.tileUrl,p.errorImgUrl),setTimeout(v.activate,0),_.on("click",l),_.on("keydown",function(e){u(e,l)}),S.on("click",c),S.on("keydown",function(e){u(e,c)}))},m.deactivate=function(){d&&!f&&(d=!1,v&&v.deactivate(),S.off())},m.dispose=function(){f||(m.deactivate(),v&&v.dispose(),_.remove(),p=t=v=null,_=S=I=h=D=null,f=!0)},function(){var e=p.authenticatedState;w=e==r.SignedIn||e==r.SignedInIdp}()}}(window.MejQuery)},{}],2:[function(e,t,n){!function(e){var t=window;t.MSA=t.MSA||{};var n=t.MSA.MeControl=t.MSA.MeControl||{},o=n.Strings,r='<div class="msame_Drop_AL"><div class="msame_Drop_ALItems">{0}</div></div>';n.AccountsListControl=function(t,i){function a(t){var n=d.indexOf(t);t.dispose(),d.splice(n,1),e(t).off("remove"),0===d.length&&e(s).trigger("empty")}var s=this,l=!1,c=!1,u=t||{},m=u.userList,d=[],f=null;s.render=function(){for(var e="",t=0;t<d.length;t++)e+=d[t].render();return o.format(r,e)},s.activate=function(){if(!l&&!c){l=!0,f=e(".msame_Drop_AL");for(var t=0;t<d.length;t++)d[t].activate(),e(d[t]).on("remove",function(e){return function(){a(e)}}(d[t]))}},s.deactivate=function(){if(l&&!c){l=!1;for(var t=0;t<d.length;t++)d[t].deactivate(),e(d[t]).off("remove")}},s.dispose=function(){if(!c){s.deactivate();for(var e=0;e<d.length;e++)d[e].dispose();f.remove(),u=t=d=null,f=null,c=!0}},function(){if(m)for(var e=0;e<m.length;e++)d.push(new n.AccountItemControl(i.getAccountItemData(m[e])))}()}}(window.MejQuery)},{}],3:[function(e,t,n){!function(e){var t=window;t.MSA=t.MSA||{};var n=t.MSA.MeControl=t.MSA.MeControl||{},o=n.Strings,r='<div class="msame_Drop_active_pic"><div class="msame_Drop_active_piccont"><div class="msame_Drop_active_picframe">{0}</div></div></div><div class="msame_Drop_active_right">{1}</div>',i='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div><div class="msame_TxtTrunc msame_Drop_active_email">{2}</div><div class="msame_TxtTrunc msame_Drop_active_email">{3}</div>',a='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div><div class="msame_TxtTrunc msame_Drop_active_email">{2}</div>',s='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div>',l='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div>',c='<a href="{1}">{0}</a>',u='<img role="presentation" src="{0}">',m='<div class="msame_Drop_active_picborder">{0}</div>',d='<a href="#" title="{1}">{0}</a>';n.ActiveAccountControl=function(f){function p(e){e.preventDefault(),e.stopPropagation(),t.location.href=S.getEditPictureUrl()}function g(e,t){document.querySelector(".msame_Drop_active_picframe img").getAttribute("src")===e&&v(t)}function v(e){var t=document.querySelector(".msame_Drop_active_picframe a");t&&t.setAttribute("title",e)}var _=this,I=!1,h=!1,S=f,D=null,w=null,A=null,U=null;_.setUserPicture=function(e){D&&D.reset(e)},_.render=function(){var e=n.PictureLoaderCache.isCached(S.tileUrl)?S.tileUrl:"",t="",p=m;f.idp!==n.IDP.MSA||S.nickName?t=S.roleName&&(S.orgName||S.nickName)?o.format(i,o.encodeHtml(S.displayName),o.encodeHtml(S.roleName),o.encodeHtml(S.orgName||S.nickName),o.encodeHtml(S.memberName)):o.format(a,o.encodeHtml(S.displayName),o.encodeHtml(S.roleName||S.orgName||S.nickName),o.encodeHtml(S.memberName)):(t=S.displayName?o.format(s,o.encodeHtml(S.displayName),o.encodeHtml(S.memberName)):o.format(l,o.encodeHtml(S.memberName),o.format(c,o.getString("addyourname"),o.encodeHtml(S.getEditNameUrl()))),p=f.isCustomTileUrl?m:d);var g=o.format(p,o.format(u,o.encodeHtml(e)),o.encodeHtml(o.getString("updatephoto")));return o.format(r,g,t)},_.activate=function(){I||h||(I=!0,w=e(".msame_Drop_active"),A=e(".msame_Drop_active_piccont img",w),(U=e(".msame_Drop_active_piccont a",w)).on("click",p),D=new n.PictureLoader(A,S.tileUrl,S.errorImgUrl,function(e){return g(S.errorImgUrl,o.getString("addphoto"))}),setTimeout(D.activate,0))},_.deactivate=function(){I&&!h&&(I=!1,D&&D.deactivate(),U.off())},_.dispose=function(){h||(_.deactivate(),D&&(D.dispose(),D=null),S=f=null,A=w=null,h=!0)}}}(window.MejQuery)},{}],4:[function(e,t,n){!function(e){var t=window,n=t.MSA.MeControl,o=n.IFrameControl,r=n.Log,i=n.IDP,a=n.Util,s=n.Strings,l="prompt",c="proxy",u="https://login.microsoftonline.com",m="https://login.live.com",d="{0}/logout.srf?aadsession={1}&idpflag=proxy&ru={2}",f="{0}/uxlogout?appid={1}&sessionId={2}&wreply={3}&shouldForgetUser=true&isIframe=true&slice=TestSlice",p="{0}/savedusers?appid={1}&wreply={2}",g="{0}/common/oauth2/authorize?response_type=id_token&client_id={1}&scope=openid&nonce={2}&response_mode=form_post&redirect_uri={3}",v="wreply",_="redirect_uri",I=["ru","lru"],h="wreply";n.AuthStateModel=function(S,D,w,A){function U(){if(X&&W){for(var e=[],t=0;t<X.length;t++){var n=!0;M(W,X[t])&&(n=!1,W.idp!==i.AAD&&W.idp!==i.MSA_FED||(W.sessionId=X[t].sessionId)),X[t].idp===i.ORG_ID&&(n=!1),n&&e.push(X[t])}X=e}}function M(e,t){return!(!e||!t||e.idp!==t.idp)&&(e.idp===i.MSA?e.cid===t.cid:e.memberName&&t.memberName&&e.memberName.toLowerCase()===t.memberName.toLowerCase())}function y(t){if(V){var n=B.msaInfo.meTrustedOrigin&&t.origin===B.msaInfo.meTrustedOrigin,o=B.aadInfo.meTrustedOrigin&&t.origin===B.aadInfo.meTrustedOrigin;if((n||o)&&"string"==typeof t.data){G--;var a={currentIdp:n?i.MSA:i.AAD,messagesMissing:G},s=e.parseJSON(t.data);if(s&&s.userList&&s.userList.length>0)z.push.apply(z,s.userList);else{var l="InvalidIdpData";s&&s.error&&(a.IDPError=s.error,l="IDPError"),r.logQos("UserStatePartial",!1,Date.now()-j,l,a)}if(0===G)return z&&z.length>0?C(!0):C(!1,"NoIdpData",a),!0}}return!1}function C(e,t,n){X=z||[],U(),(n=n||{}).userCount=X.length,r.logQos("UserState",e,Date.now()-j,t,n);for(var o=0;o<Y.length;o++){var i=Y[o];e?i.success(X):i.failure&&i.failure()}T()}function b(){V&&0==(G-=1)&&(z&&z.length>0?C(!0,"",{timeout:!0,messagesMissing:G}):C(!1,"Timeout"))}function T(){G=0,V=!1,j=0,z=[],Y=[]}function O(){for(var e=q.currentState(),t=0;t<e.length;t++)if(e[t].idp===i.MSA)return!0;return!1}function N(){var e=B.msaInfo;return q.isIdpEnabled(i.MSA)&&e.signInUrl.indexOf("login.srf")>=0}function P(){var e=B.msaInfo;return q.isIdpEnabled(i.MSA)&&(!Q()&&!O()||a.hasQueryParam(e.signOutUrl,"ru")&&a.hasQueryParam(e.signInUrl,"wreply"))}function R(){var e=B.aadInfo;return q.isIdpEnabled(i.AAD)&&(e.allowNonAadUrls||a.hasQueryParam(e.signInUrl,"client_id")&&a.hasQueryParam(e.signInUrl,"redirect_uri"))}function x(){return B.aadInfo.nonce||r.id}function Q(){return W&&W.authenticatedState==n.AuthState.SignedIn}function E(e,t){var n=e.signInUrl;if(e.generateSignInReturnUrl){var o=e.generateSignInReturnUrl();n=a.setQueryParam(n,v,encodeURIComponent(o))}return n=a.setQueryParam(n,"pcexp",t?"false":"true"),Q()&&P()&&(n=H(e.signOutUrl,encodeURIComponent(n),I)),n}function k(e){var t=e.signInUrl;if(e.generateSignInReturnUrl){var n=e.generateSignInReturnUrl();t=a.setQueryParam(t,_,encodeURIComponent(n))}return!e.allowNonAadUrls&&e.state&&(t=a.setQueryParam(t,"state",encodeURIComponent(e.state))),Q()&&R()&&(t=a.setQueryParam(t,"prompt","select_account")),t}function L(e){var t=e.signOutUrl;if(e.generateSignOutReturnUrl){var n=e.generateSignOutReturnUrl();t=H(t,encodeURIComponent(n),I)}return t}function F(e){var t=e.signOutUrl;if(e.generateSignOutReturnUrl){var n=e.generateSignOutReturnUrl();t=a.setQueryParam(t,h,encodeURIComponent(n))}return t}function H(e,t,n){for(var o=0;o<n.length;o++)a.hasQueryParam(e,n[o])&&(e=a.setQueryParam(e,n[o],t));return e}var j,q=this,J=!1,B=S,W=null,z=[],X=null,Y=[],G=0,V=!1;q.setActiveUser=function(e){W=e,U()},q.currentState=function(){return X||[]},q.getUserState=function(e,a){if(X)e(X);else if(Y.push({success:e,failure:a}),!V){if(X=null,j=Date.now(),n.TestData)return z=n.TestData,void C(!0);if(!t.postMessage)return void C(!1,"PostMessageNotSupported");if("https:"!==location.protocol)return void C(!1,"HttpNotSupported");V=!0,G=D?2:1;var s={uaid:r.id,partnerId:n.Config.ptn};B&&B.msaInfo&&B.aadInfo?q.isIdpEnabled(i.MSA)?(B.msaInfo.meTrustedOrigin=o.getDomainFromUrl(B.msaInfo.meUrl),q.isIdpEnabled(i.AAD)?(B.aadInfo.meTrustedOrigin=o.getDomainFromUrl(B.aadInfo.meUrl),o.openIFrame(B.msaInfo.meUrl,y,b,s),D&&(s.appId=B.aadInfo.appId,o.openIFrame(B.aadInfo.meUrl,y,b,s))):(w&&(s.idpflag=c),o.openIFrame(B.msaInfo.meUrl,y,b,s))):q.isIdpEnabled(i.AAD)&&D&&(B.aadInfo.meTrustedOrigin=o.getDomainFromUrl(B.aadInfo.meUrl),w&&(s.idpflag=c),s.appId=B.aadInfo.appId,o.openIFrame(B.aadInfo.meUrl,y,b,s)):C(!1,"InvalidRpData")}},q.getIdpInfo=function(e){var t;switch(e=e||W&&W.idp){case i.MSA:t=B.msaInfo;break;case i.AAD:case i.MSA_FED:t=B.aadInfo}return t||{}},q.isIdpEnabled=function(e){if(!e)return!1;var t=q.getIdpInfo(e);return!(!t||!(t.meUrl||e==i.AAD&&t.appId))},q.dispose=function(){J||(J=!0)},q.getSignInUrl=function(e,t){var n=(e=e||Q()&&W.idp||B.preferredIdp||i.MSA)===i.AAD||e===i.MSA_FED,o=n?B.aadInfo:B.msaInfo;return o.signInUrl,n?k(o):E(o,t)},q.canSignInOtherAccount=function(){return R()||P()},q.getSignOutUrl=function(e){var t=e?e.idp:B.preferredIdp||i.MSA,n=t===i.AAD||t===i.MSA_FED,o=n?B.aadInfo:B.msaInfo,r=o.signOutUrl;return r=n?F(o):L(o),a.appendContextParam(r)},q.signOutUser=function(n,a,l){if(n.idp===i.AAD||n.idp===i.MSA_FED){var c,p=n,g=B.aadInfo;c=q.isIdpEnabled(i.AAD)?s.format(f,u,encodeURIComponent(g.appId),encodeURIComponent(p.sessionId),encodeURIComponent(g.siteUrl)):s.format(d,m,encodeURIComponent(p.sessionId),encodeURIComponent(o.getDomainFromUrl(t.location.href)));var v=Date.now();o.openIFrame(c,function(t){var n=o.getDomainFromUrl(c);if(t.origin!==n)return!1;var i=e.parseJSON(t.data);return i&&i.signoutStatus&&"true"===i.signoutStatus.toString()?(r.logQos("SignOutUser",!0,Date.now()-v),a()):(r.logQos("SignOutUser",!1,Date.now()-v,i.error||""),l()),!0},function(){l(),r.logQos("SignOutUser",!1,Date.now()-v,"Timeout")})}else n.idp===i.MSA&&q.isIdpEnabled(i.MSA)?t.location.href=q.getSignOutUrl(n):l&&l()},q.getSwitchToUrl=function(e){if(e.idp===i.MSA){var t=q.getSignInUrl(e.idp);return N()?a.appendQueryParams(t,{username:e.memberName}):t}if(e.idp===i.AAD||e.idp===i.MSA_FED){var n=q.getSignInUrl(e.idp);return a.hasQueryParam(n,l)&&(n=a.setQueryParam(n,l,"")),B.aadInfo.allowNonAadUrls||(n=a.setQueryParam(n,"nonce",encodeURIComponent(x()))),a.setQueryParam(n,"login_hint",encodeURIComponent(e.memberName))}return""},function(){if(q.isIdpEnabled(i.AAD)){var e=B.aadInfo;e.meUrl||(e.meUrl=s.format(p,u,encodeURIComponent(e.appId),encodeURIComponent(e.siteUrl))),e.signInUrl||(e.signInUrl=s.format(g,u,encodeURIComponent(e.appId),encodeURIComponent(x()),encodeURIComponent(e.siteUrl))),e.blockMsaFed&&(e.signInUrl=a.appendQueryParams(e.signInUrl,{msafed:"0"}))}}()}}(window.MejQuery)},{}],5:[function(e,t,n){!function(e){var t=window,n=t.MSA.MeControl,o=n.Log;n.IFrameControl=new function(){function r(t,n,o){if(!m&&t){var r=Date.now(),i="mecontrol_iframe_index_"+s++,d=e('<iframe style="display:none"></iframe>').attr("id",i).attr("src",t);if(d.appendTo("body"),n){var f=u.getDomainFromUrl(t);l[f]||(l[f]={});var p=setTimeout(function(){a(f,i)},c);l[f][i]={callback:n,iframe:d[0],start:r,timeoutId:p,timeoutCallback:o}}}}function i(t){var n=t.originalEvent;n&&l[n.origin]&&e.each(l[n.origin],function(t,r){n.source==r.iframe.contentWindow&&(o.logQos("IFrameCtrl",!0,Date.now()-r.start,"",{src:r.iframe.src}),r.callback(n)?(clearTimeout(r.timeoutId),e(r.iframe).remove(),delete l[n.origin][t]):(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){a(n.origin,t)},c)))})}function a(t,n){if(!m&&l&&l[t]){var o=l[t][n];o&&(o.timeoutCallback&&o.timeoutCallback(),e(o.iframe).remove(),delete l[t][n])}}var s,l,c=3e4,u=this,m=!0;u.init=function(){m&&(l={},s=0,m=!1,e(t).on("message",i))},u.getDomainFromUrl=function(e){var t=document.createElement("a");t.href=e;var n=t.protocol+"//"+t.hostname;return null!==t.port&&""!==t.port&&"443"!==t.port&&"80"!==t.port&&"0"!==t.port&&(n+=":"+t.port),n},u.openIFrame=function(e,t,o,i){i&&(e=n.Util.appendQueryParams(e,i)),r(e,t,o)},u.dispose=function(){if(!m){e(t).off("message",i);for(var n in l)for(var o in l[n]){var r=l[n][o];clearTimeout(r.timeoutId),e(r.iframe).remove()}l=null,m=!0}},u.init(),e(t).on("unload.msame",u.dispose)}}(window.MejQuery)},{}],6:[function(e,t,n){!function(e){var t=window;t.MSA=t.MSA||{};var n=t.MSA.MeControl=t.MSA.MeControl||{},o=n.Strings,r=n.Log,i=document.documentElement,a="visible",s=".msame",l="undefined",c='<div id="meControlDropdown" class="msame_Drop_root" style="display: none;" aria-expanded="false"><div class="msame_Drop_topb"></div><div class="msame_Drop_content"><div class="msame_Drop_active">{0}</div><div class="msame_Drop_rewards" style="display: none;"></div><div class="msame_Drop_account">{1}</div><div class="msame_Drop_links" style="display: none;"><div class="msame_Drop_links_list"></div></div><div class="msame_Drop_signIn">{2}</div><div class="msame_Drop_signOut">{3}</div><div class="msame_Drop_accts" style="display: none;"><div class="msame_Drop_sep"></div><div class="msame_Drop_accts_list"></div></div></div></div>',u=2,m=60,d=833,f=100;e.extend(e.easing,{easeOutQuintPartial:function(e){return e+=.2*(1-e),Math.pow(e-1,5)+1}}),n.MeDropdownControl=function(p,g){function v(e){var n=e[0],o=typeof t.pageXOffset===l?i.scrollLeft:t.pageXOffset,r=typeof t.pageYOffset===l?i.scrollTop:t.pageYOffset,a=n.getBoundingClientRect();return{top:r+a.top,left:o+a.left,right:o+a.right,bottom:r+a.bottom,width:e.width(),height:e.height()}}function _(){b&&!T&&J.toggleClass("msame_Mobile",R)}function I(e){J.toggleClass("msame_ClickStart",!e)}function h(){if(j){for(var e=0;e<j.length;e++)j[e].dispose();j=null}}function S(e){if(!T){var t=J.height();J.css({top:"-="+m,height:t/2,opacity:"0",display:""}),J.animate({top:"+="+m,height:t+"px"},{duration:d,easing:"easeOutQuintPartial",queue:!1,complete:function(){T||(J.css("height",""),e&&e())}}),J.animate({opacity:"1"},{duration:f,queue:!1,easing:"linear"})}}function D(){if(!P&&(P=!0,!q&&p.isReady()&&(q=p.authStateModel()),q)){var t=Date.now();q.getUserState(function(o){T||(o&&o.length>0&&(E=new n.AccountsListControl({userList:o},p),e(E).on("empty",w),x.push(E),e(".msame_Drop_accts_list",J).html(E.render()),E.activate(),e(".msame_Drop_accts",J).show(),q.canSignInOtherAccount()||e(".msame_Drop_signIn").hide()),r.logEvent("AccountListReady",{duration:Date.now()-t,count:o&&o.length}))},function(){})}}function w(){if(E){e(".msame_Drop_accts",J).slideUp("fast"),E.dispose();var t=x.indexOf(E);x.splice(t,1),e(E).off("empty"),E=null}}function A(e,t){try{for(var n=t;n&&n!==e&&n!==G[0];)n=n.parentNode;return n===e}catch(e){return!1}}function U(e){T||!O||!Y||"mousewheel"===e.type||e.target===Y[0]||A(Y[0],e.target)||A(J[0],e.target)||(e.preventDefault(),e.stopPropagation(),C.hide())}function M(e){O&&27===e.which&&C.hide(!0)}var y,C=this,b=!1,T=!1,O=!1,N=p.hasActiveUser(),P=!1,R=p.mobileState()===n.MobileState.Mobile,x=[],Q=null,E=null,k=null,L=null,F=null,H=null,j=null,q=p.authStateModel(),J=null,B=null,W=null,z=null,X=null,Y=g&&g.anchor,G=e(document);e(document.body);C.setMobileState=function(e){R=e===n.MobileState.Mobile,_()},C.setUserPicture=function(e){Q&&Q.setUserPicture(e)},C.updateExtensibleLinks=function(){W.hide(),z.html("");var e=p.extensibleLinks();if(e&&e.length>0){h(),j=[],W.show();for(var t=0;t<e.length;t++){var o=new n.SectionItemControl(e[t]);z.append(o.render()),o.activate(),j.push(o)}}},C.render=function(){return o.format(c,Q?Q.render():"",k?k.render():"",F?F.render():"",L?L.render():"")},C.activate=function(){if(!b&&!T){var o=e("#meControlDropdown");if(o.length>0){b=!0,W=e(".msame_Drop_links",J=o),z=e(".msame_Drop_links_list",J),X=e(".msame_Drop_topb",J),B=e(".msame_Drop_rewards",J),n.Browser.ie8&&J.addClass("msaie8"),G.on("click"+s,U),G.on("mousedown"+s,U),G.on("touchend"+s,U),G.on("mousewheel"+s,U),G.on("keyup"+s,M),e(t).on("resize"+s,U),H&&(B.html(H.render()),B.show());for(var r=0;r<x.length;r++)x[r].activate();D()}_(),C.updateExtensibleLinks()}},C.deactivate=function(){if(b&&!T){b=!1,G.off(s),e(t).off(s),E&&e(E).off("empty");for(var n=0;n<x.length;n++)x[n].deactivate()}},C.toggle=function(e){b&&(I(e),O?C.hide():C.show(),J.attr("aria-expanded",O.toString()))},C.show=function(){if(b&&!O){if(O=!0,r.logEvent("DropdownOpen"),Y){var t=v(Y);J.css({top:t.top+t.height,left:n.Loc.rtl?t.left:t.right-J.width()-u}),X.css("width",J.width()-Y.outerWidth()+u+"px")}S(function(){var t=R?(J[0].clientWidth-64-8-36).toString():"";e(".msame_Drop_AI_right",J).css("width",t),H?H.focus():k?k.focus():F?F.focus():L&&L.focus()}),e(C).trigger(a,{visible:O})}},C.hide=function(t){b&&O&&(O=!1,J.fadeOut(f,function(){t&&Y&&Y.focus(),e(C).trigger(a,{visible:O})}))},C.dispose=function(){if(!T){C.deactivate(),h();for(var e=0;e<x.length;e++)x[e].dispose();J.remove(),p=y=q=x=null,J=Y=G=B=null,T=!0}},function(){if(N){Q=new n.ActiveAccountControl(p.activeAccountData()),x.push(Q);var e=p.authStateModel().getIdpInfo().accountSettingsUrl;if(e){var t=n.Config.msTxt?"microsoftaccount":"viewaccount";k=new n.SectionItemControl({label:o.getString(t),onClick:function(){return r.logEvent("ViewAccount",{idp:p.userData().idp}),!1},url:e,openInNewTab:p.options.openLinksInNewTab}),x.push(k)}L=new n.SectionItemControl({label:o.getString("signout"),onClick:function(){return p.signOut(),!0}}),x.push(L)}!p.isReady()||!p.authStateModel().canSignInOtherAccount()||p.options.events&&p.options.events.onSignIn||(F=new n.SectionItemControl({label:o.getString("signinotheraccount"),onClick:function(){return p.signIn(),!0}}),x.push(F)),p.rewardsStateModel().getRewardsItemData(function(e){!T&&e&&e.enabled&&(e.onClick=function(){return r.logEvent("Rewards",{url:e.url}),!1},e.openInNewTab=p.options.openLinksInNewTab,H=new n.SectionItemControl(e),x.push(H),b&&(B.html(H.render()),B.show(),H.activate()))})}()}}(window.MejQuery)},{}],7:[function(e,t,n){!function(e){var t=window.MSA.MeControl,n=t.IFrameControl,o=t.Log,r=t.Strings,i="Upsell",a="None",s="https://www.bing.com",l="https://account.microsoft.com",c="{0}/msrewards/api/v1/getuserinfo?pid=mecontrol&channel=membercenter&client=web&sso=true",u="Join Microsoft Rewards";t.RewardsStateModel=function(t,m,d){function f(){var e=I||{MessageType:a};return e.MessageType===a?{enabled:!1,label:"",url:""}:{enabled:!0,label:e.MessageType===i?u:r.format(r.getString("rewardsbalance"),e.Balance+""),url:l+e.Url}}function p(){h=!0;for(var e=0;e<w.length;e++)setTimeout(w[e](f()),0)}function g(t){if(!_&&!h){if(t&&"string"==typeof t.data)try{var n=e.parseJSON(t.data);n&&n.MessageType?(I=n,o.logQos("RewardsApi",!I.Error,Date.now()-S,I.ErrorDetail?I.ErrorDetail.ErrorCode+":"+I.ErrorDetail.Message:I.Error)):o.logQos("RewardsApi",!1,Date.now()-S,"InvalidJson")}catch(t){o.logQos("RewardsApi",!1,Date.now()-S,"JsonParsingError: "+(t&&t.toString()))}else o.logQos("RewardsApi",!1,Date.now()-S,"BadResponse");p()}return!0}function v(){_||h||(p(),o.logQos("RewardsApi",!1,Date.now()-S,"Timeout"))}var _,I,h,S,D=this,w=[];D.getRewardsItemData=function(e){h?e(f()):w.push(e)},D.dispose=function(){_||(_=!0)},D.setState=function(e){I=e,p()},function(){if(S=Date.now(),h=!d,d){var e=r.format(c,s);n.openIFrame(e,g,v,{partnerId:t,language:m})}}()}}(window.MejQuery)},{}],8:[function(e,t,n){!function(e){var t=window;t.MSA=t.MSA||{};var n=t.MSA.MeControl=t.MSA.MeControl||{},o=n.Strings,r=n.Log,i='<div id="{0}" class="msame_Drop_SI"><a href="{2}" target="{3}" class="msame_TxtTrunc">{1}</a></div>',a=0;n.SectionItemControl=function(t){function n(e){u.id&&r.logEvent(u.id+"Clicked"),u.onClick&&u.onClick()&&(e.preventDefault(),e.stopPropagation())}var s=this,l=!1,c=!1,u=t,m="msame_si"+a++,d=null,f=null;u.label=u.label||u.string,s.focus=function(){f&&f.focus()},s.render=function(){return o.format(i,m,o.encodeHtml(u.label),o.encodeHtml(u.url||"#"),u.openInNewTab?"_blank":"")},s.activate=function(){l||c||(l=!0,d=e("#"+m),(f=e("a",d)).on("click",n))},s.deactivate=function(){l&&!c&&(l=!1,f.off())},s.dispose=function(){c||(s.deactivate(),u=t=null,d=f=null,c=!0)}}}(window.MejQuery)},{}],9:[function(e,t,n){},{}],10:[function(e,t,n){arguments[4][9][0].apply(n,arguments)},{dup:9}],11:[function(e,t,n){arguments[4][9][0].apply(n,arguments)},{dup:9}],12:[function(e,t,n){arguments[4][9][0].apply(n,arguments)},{dup:9}],13:[function(e,t,n){arguments[4][9][0].apply(n,arguments)},{dup:9}]},{},[13,9,10,11,12,1,2,8,3,6,5,4,7]);;(function(){var ME=window.MSA.MeControl;ME.Loc={rtl:false,lf:false};ME.Strings.addStrings({
"editdone":"Done",
"rewardsbalance":"Rewards \u0028\u007b0\u007d\u0029",
"statussigningout":"Signing out",
"addphoto":"Add a picture",
"microsoftaccount":"Microsoft account",
"viewaccount":"View Microsoft account",
"addyournamelabel":"Add your name to your account",
"signinotheraccount":"Sign in with another account",
"statusremoving":"Removing from list",
"statussignoutfailed":"Sign-out failed",
"removetip":"Remove from list",
"updatephoto":"Change picture",
"statussignedin":"Signed in",
"signoutremovetip":"Sign out and remove from list",
"addyourname":"Add your name",
"statusunavailable":"Not available",
"editlist":"Edit list",
"account":"Account",
"statusremovingfailed":"Removal failed",
"statussignedout":"Signed out"});ME.CssmeCore='.msame_open .msame_Header\x7bborder-color\x3a\x23e6e6e6\x3bbackground-color\x3a\x23fff\x7d.msame_open .msame_Header.msame_Mobile\x7bborder-color\x3atransparent\x3bbackground-color\x3atransparent\x7d.msame_ClickStart.msame_Drop_root .msame_Drop_AI\x3afocus,.msame_ClickStart.msame_Drop_root .msame_Drop_AI_remove\x3afocus,.msame_ClickStart.msame_Drop_root a\x3afocus\x7boutline-style\x3anone\x7d.msame_Drop_root a,.msame_Drop_root a\x3aactive,.msame_Drop_root a\x3afocus,.msame_Drop_root a\x3ahover,.msame_Drop_root a\x3avisited\x7btext-decoration\x3anone\x7d.msame_Drop_topb\x7bborder-top-color\x3a\x23e6e6e6\x3bborder-top-style\x3asolid\x3bborder-top-width\x3a1px\x7d.msame_Mobile .msame_Drop_topb\x7bwidth\x3a100\x25\x21important\x7d.msame_Drop_active\x7bpadding-bottom\x3a8px\x7d.msame_Drop_AI_picframe\x7bwidth\x3a44px\x3bheight\x3a44px\x3bborder-radius\x3a50\x25\x3boverflow\x3ahidden\x7d.msame_Drop_AI_piccont img\x7bwidth\x3a44px\x3bheight\x3a44px\x7d.msame_Drop_root\x7bborder-width\x3a1px\x3bborder-color\x3a\x23e6e6e6\x3bborder-style\x3asolid\x3bborder-top-style\x3anone\x3bposition\x3aabsolute\x3bwidth\x3a360px\x3bz-index\x3a3000000\x3bbackground-color\x3a\x23fff\x3bfont-size\x3a14px\x7d.msame_Drop_sep\x7bborder-top-width\x3a1px\x3bborder-top-color\x3a\x23e6e6e6\x3bborder-top-style\x3asolid\x3bwidth\x3a100\x25\x3bheight\x3a0\x3bdisplay\x3ablock\x7d.msame_Mobile.msame_Drop_root\x7bleft\x3a0\x21important\x3bright\x3a0\x3bbottom\x3a0\x3bwidth\x3a100\x25\x3bborder-right-width\x3a0\x3bborder-left-width\x3a0\x7d.msame_Mobile .msame_Drop_content\x7boverflow-y\x3aauto\x3bposition\x3aabsolute\x3bleft\x3a0\x3bright\x3a0\x3bbottom\x3a0\x3btop\x3a0\x7d.msame_Drop_root a\x7btext-decoration\x3anone\x7d.msame_Drop_content\x7boverflow\x3ahidden\x7d.msame_Mobile .msame_Drop_active\x7bdisplay\x3anone\x7d.msame_Drop_AI\x7bcursor\x3apointer\x7d.disabled .msame_Drop_AI_pic,.disabled .msame_Drop_AI_right\x7bopacity\x3a.4\x3bcursor\x3adefault\x7d.disabled .msame_Drop_AI_email,.disabled .msame_Drop_AI_name,.disabled .msame_Drop_AI_status\x7bcolor\x3a\x23000\x7d.msame_Drop_active_piccont\x7bpadding\x3a5px\x7d.msame_Drop_AI_piccont\x7bpadding\x3a10px\x7d.msame_Drop_active_picframe\x7bwidth\x3a74px\x3bheight\x3a74px\x3bborder-radius\x3a50\x25\x3boverflow\x3ahidden\x7d.msame_Drop_active_picborder,.msame_Drop_active_piccont a\x7bdisplay\x3ablock\x3bpadding\x3a4px\x3bborder\x3a1px dotted transparent\x3bborder-radius\x3a50\x25\x7d.msame_Drop_active_piccont a\x3afocus\x7bborder\x3a1px dotted \x23000\x7d.msame_Drop_active_piccont img\x7bwidth\x3a64px\x3bheight\x3a64px\x3bborder-radius\x3a50\x25\x7d.msame_Drop_active_name\x7bdisplay\x3ablock\x3bline-height\x3a1.3\x3bfont-size\x3a150\x25\x3bcolor\x3a\x23000\x3bfont-family\x3a\x22Segoe UI Light\x22,\x22Segoe UI Web Light\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI\x22,\x22Segoe UI Symbol\x22,HelveticaNeue-Light,\x22Helvetica Neue\x22,Arial,sans-serif\x7d.msame_Drop_active_email\x7bdisplay\x3ablock\x3bline-height\x3a1.42857\x3bfont-size\x3a100\x25\x3bcolor\x3argba\x280,0,0,.54\x29\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x7d.msame_Drop_active_right\x7bdisplay\x3ainline-block\x3bwidth\x3a216px\x3bvertical-align\x3atop\x3bpadding-top\x3a12px\x3bpadding-right\x3a12px\x3bpadding-left\x3a12px\x7d.msame_Drop_active_right a\x7bcolor\x3argba\x280,0,0,.54\x29\x7d.msame_Drop_SI a\x7bline-height\x3a2\x3bfont-size\x3a114\x25\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bpadding-left\x3a12px\x3bpadding-right\x3a12px\x3bdisplay\x3ablock\x3bcolor\x3a\x23000\x7d.msame_Mobile .msame_Drop_SI a\x7bline-height\x3a2.75\x7d.msame_Drop_AI.switch\x3ahover,.msame_Drop_AI_remove\x3ahover,.msame_Drop_SI a\x3ahover\x7bcolor\x3a\x23000\x3bbackground-color\x3argba\x280,0,0,.12\x29\x7d.msame_Drop_AI.switch\x3aactive,.msame_Drop_AI.switch\x3aactive div,.msame_Drop_AI_remove\x3aactive,.msame_Drop_SI a\x3aactive\x7bcolor\x3a\x23fff\x21important\x3bbackground-color\x3a\x23000\x7d.msame_Drop_SI a\x3alink,.msame_Drop_SI a\x3avisited\x7bcolor\x3a\x23000\x7d.msame_Drop_active_link a,.msame_Drop_active_link a\x3aactive,.msame_Drop_active_link a\x3ahover,.msame_Drop_active_link a\x3alink,.msame_Drop_active_link a\x3avisited\x7bline-height\x3a1.333333\x3bfont-size\x3a86\x25\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bcolor\x3a\x230078d7\x7d.msame_Drop_AL\x7bpadding-bottom\x3a24px\x7d.msame_Drop_AI_right\x7bdisplay\x3ainline-block\x3bwidth\x3a252px\x3bvertical-align\x3atop\x3bpadding-left\x3a8px\x3bpadding-top\x3a5px\x7d.msame_Mobile .msame_Drop_AI_right\x7bwidth\x3a100px\x7d.msame_Drop_AI_name\x7bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bfont-size\x3a114\x25\x3bcolor\x3a\x23000\x3bline-height\x3a1.25\x7d.msame_Drop_AI_remove\x7bfloat\x3aright\x3bmargin-top\x3a6px\x3bpadding-top\x3a12px\x3bpadding-bottom\x3a12px\x3bpadding-left\x3a12px\x3bpadding-right\x3a12px\x3btext-align\x3acenter\x3bcursor\x3apointer\x7d.msame_Drop_AI_remove img\x7bdisplay\x3ablock\x7d.msame_auto_frame\x7bdisplay\x3anone\x3bposition\x3aabsolute\x3btop\x3a0\x3bleft\x3a-4000px\x3bwidth\x3a0\x7d';ME.Loader.scriptLoaded('meCore');})();