cackle_widget=window.cackle_widget||[];
if(!(cackle_widget instanceof Array)){cackle_widget=[]
}(function(){function a(){cackle_widget.push({widget:"Comment",id:window.mcSite,channel:window.mcChannel,url:window.mcUrl,lang:window.mcLocale,providers:window.mcProviders,ssoProvider:window.mcSSOProvider,ssoAuth:window.mcSSOAuth,html:{widget:window.mcWidgetHtml,comments:window.mcCommentsHtml,reply:window.mcReplyHtml}});
(function(){var d=document.createElement("script");
d.type="text/javascript";
d.async=true;
d.src=("https:"==document.location.protocol?"https":"http")+"://cackle.me/widget.js";
var c=document.getElementsByTagName("script")[0];
c.parentNode.insertBefore(d,c.nextSibling)
})()
}function b(){var c={};
c.run=function(){var d=document.getElementById("mc-container");
if(d!=null&&typeof mcSite!="undefined"){a()
}else{setTimeout(c.run,50)
}};
c.run()
}b()
})();