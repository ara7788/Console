window._oiqq = window._oiqq || [];
_oiqq.push(['oiq_addPageCat','Consumer Electronics']);
_oiqq.push(['oiq_addPageBrand', 'Ubuntu']);
_oiqq.push(['oiq_doTag']);
_oiqq.push(['oiq_addPageLifecycle', 'inte']);

(function() {
    var oiq = document.createElement('script'); oiq.type = 'text/javascript'; oiq.async = true;
    oiq.src = document.location.protocol + '//px.owneriq.net/stas/s/sholic.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(oiq, s);
})();

(function() {
    var locc_human = document.createElement('script');
    locc_human.type = 'text/javascript';
    locc_human.async = true;
    locc_human.src = document.location.protocol + '//n-cdn.areyouahuman.com/play/YNMJrK4lsMAJlxSsJDb17LW8YmmHRLakZxkWagp6?AYAH_F2=www.linuxbabe.com&AYAH_P2=1a559f35-4b5c-446b-aa7e-f93ba622138a&AYAH_F1=Lotame';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(locc_human, s);
})();

var _comscore = _comscore || [];
_comscore.push({ c1: "7", c2: "19376307" ,c3: "1" });
(function() {
  var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
  s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
  el.parentNode.insertBefore(s, el);
})();

(function() {
  var shrOrcProfLoader = setInterval(function() {
    if (document.body) {
     var orc_prof_frame = document.createElement("iframe");
      orc_prof_frame.setAttribute("src", "about:blank");
      orc_prof_frame.style.display = "none";
      orc_prof_frame.style.position = "absolute";
      orc_prof_frame.style.clip = "rect(0px 0px 0px 0px)";
      orc_prof_frame.setAttribute("width", "0");
      orc_prof_frame.setAttribute("height", "0");
      orc_prof_frame.setAttribute("frameborder", "0");
      orc_prof_frame.setAttribute("name", "__bkframe");
      document.body.appendChild(orc_prof_frame);

      var p_orc_sc_1 = document.createElement("script"), el = document.getElementsByTagName("script")[0];
      p_orc_sc_1.type = "text/javascript";
      p_orc_sc_1.src = "//tags.bkrtx.com/js/bk-coretag.js";
      el.parentNode.insertBefore(p_orc_sc_1, el);

      var p_orc_sc_2 = document.createElement("script"), el = document.getElementsByTagName("script")[0];
      p_orc_sc_2.type = "text/javascript";
      p_orc_sc_2.onload = p_orc_sc_2.onreadystatechange = function() {
          var rs = this.readyState;
          if (rs && rs != 'complete' && rs != 'loaded') return;
          try {
                            bk_addPageCtx("6322281", "6");
                            bk_addPageCtx("11621944", "6");
                            bk_addPageCtx("11621945", "6");
                            bk_doJSTag(41110, 1);
          } catch (e) {}
      };
      el.parentNode.insertBefore(p_orc_sc_2, el);
      clearInterval(shrOrcProfLoader);
    }
  }, 20);
}());
