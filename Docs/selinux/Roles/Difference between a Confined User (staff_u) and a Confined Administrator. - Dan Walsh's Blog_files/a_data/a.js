/* >>> file start: js/storage.js */
!function(){function n(n){return/null/.test(n.origin)||/https?:\/\/[^\/]*local\.bulyon\.com/.test(n.origin)||/https?:\/\/[^\/]*livejournal\.com/.test(n.origin)?(t(n.data),void e({newValue:n.data})):null}function e(n){window.parent.postMessage(n.newValue,"*")}function t(){var n=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return localStorage.setItem(i,n),n}function o(n){n=n.replace(/[\[\]]/g,"\\$&");var e=window.location.href,t=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)"),o=t.exec(e);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}function r(){try{return window.self!==window.top}catch(n){return!0}}var i=o("key");return i&&r()?(window.addEventListener("storage",e),void window.addEventListener("message",n)):null}();
/* <<< file end: js/storage.js */

//# map link was there [storage.js.map]
