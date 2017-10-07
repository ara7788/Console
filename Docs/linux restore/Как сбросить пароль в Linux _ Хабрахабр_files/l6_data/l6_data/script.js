// ****** Editable block ******
var ar_width = '1';
var ar_height = '1';
var ar_gif_pixel	= '';
/* for poster or extension */

var doc = parent.document;
function ar_sendPix(s,b,i){if(!s)return;s=ar_rnd_rep(s.replace(/!\[ref\]/,escape(doc.referrer||'unknown')));if(b=doc.body){i=doc.createElement('IMG');i.style.position='absolute';i.style.width=i.style.height='0px';i.onload=i.onerror=function(){b.removeChild(i);i=b=null};i.src=s;b.insertBefore(i,b.firstChild);}else new Image().src=s;return true}
function ar_rnd_rep(s){return s.replace(/!\[rnd\]/g,RndNum4NoCash)}

ar_sendPix(ar_gif_pixel);

if (typeof ar_bnum=='undefined') var ar_bnum = 1;
var ad_fr = parent.document.getElementById('ad_ph_' + ar_bnum);
if(ad_fr){
	function ar_p(p,v){return typeof(v) == 'undefined' ? '' : p + '=' + v}
	ad_fr.innerHTML = '<iframe id="_poster_iframe_'+ar_bnum+'" width="'+ar_width+'" height="'+ar_height+'" marginwidth=0 marginheight=0 scrolling=no frameborder=0 src="'+CompPath+'index.html?html_params='
		+escape(
			ar_p('rhost', ar_rhost) +
			ar_p('&bid', bid) +
			ar_p('&sid', ar_siteid) +
			ar_p('&width', ar_width) +
			ar_p('&height', ar_height) +
			ar_p('&rnd', RndNum4NoCash) +
			ar_p('&pz', ar_pz) +
			ar_p('&ad', ar_adid) +
			ar_p('&bt', ar_bt) +
			ar_p('&bn', window['ar_bn']) +
			ar_p('&ar_sliceid', sliceid) +
			ar_p('&ntype', ar_ntype) +
			ar_p('&nid', ar_nid) +
			ar_p('&url', escape(CgiHref + '&rleurl=')) +
			ar_p('&CompPath', escape(CompPath))
		)
		+'"><\/iframe>';
	ad_fr.style.width = ar_width + (/^\d+$/.test(ar_width)?'px':'');
	ad_fr.style.height = ar_height + (/^\d+$/.test(ar_height)?'px':'');
	ad_fr.style.display = "block";
	
	(function(){
		if (!window.netscape) return;
		var f = parent.document.getElementById('_poster_iframe_'+ar_bnum);
		if (f) f.contentWindow.location.href = f.src;
		else setTimeout(arguments.callee, 1);
	})();
	
	setTimeout("document.close();",1000);
}