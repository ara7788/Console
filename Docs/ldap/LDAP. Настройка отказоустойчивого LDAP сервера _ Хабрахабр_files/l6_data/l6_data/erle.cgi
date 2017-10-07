
function httplize(s){return ((/^\/\//).test(s) ? ((location.protocol == 'https:')?'https:':'http:') : '') + s} 
var ar_q = '';
if(ar_q.indexOf("ad_google")!=-1){
	var ar_e = ar_q.indexOf("100=");ar_q = ar_q.slice(ar_e+4); ar_q=ar_q.split(';');
	var CgiHref =unescape(ar_q[0])+httplize('//ad.adriver.ru/cgi-bin/click.cgi?sid=1&ad=638184&bid=5219859&bt=43&bn=638184&pz=0&nid=0&ref=https:%2f%2fcontent.adriver.ru%2fbanners%2f0002186%2f0002186173%2f0%2fl6.html%3f549917%260%260%260%266179684%260%2655480343184%26100%26185.126.112.2%26merle%261&custom=&xpid=DLmZEKemnsl9oGm59DHx2AKlEVKgKS3XBFOLLvq0Uc1JNzWbIc5PXqVvT0BCRaso4rhrbGkXyWg');
}else{
	var CgiHref = httplize('//ad.adriver.ru/cgi-bin/click.cgi?sid=1&ad=638184&bid=5219859&bt=43&bn=638184&pz=0&nid=0&ref=https:%2f%2fcontent.adriver.ru%2fbanners%2f0002186%2f0002186173%2f0%2fl6.html%3f549917%260%260%260%266179684%260%2655480343184%26100%26185.126.112.2%26merle%261&custom=&xpid=DLmZEKemnsl9oGm59DHx2AKlEVKgKS3XBFOLLvq0Uc1JNzWbIc5PXqVvT0BCRaso4rhrbGkXyWg');
}
var ar_bt=43;
var ar_siteid = 1;
var Mirror = httplize('//servers1.adriver.ru');
var bid = 5219859;
var sliceid = 0;
var ar_adid = 638184;
var ar_pz=0;
var ar_sz='%2fbanners%2f0002186%2f0002186173%2f0%2fl6.html%3f549917%260%260%260%266179684%260%2655480343184%26100%26185.126.112.2%26merle%261';
var ar_nid=0;
var ar_pass='';
var ar_bn=638184;
var ar_geozoneid=100;
var Path = '/images/0005219/0005219859/';
var Comp0 = '0/script.js';
var Width = 0;
var Height = 0;
var date = 'Fri, 01 Sep 2017 13:33:19 GMT';
var Uid = 55480343184;
var Target = '_blank';
var Alt = 'AdRiver';
var CompPath = Mirror + Path + '0/';
var RndNum4NoCash = 843946197;
var ar_ntype = 0;
var ar_tns = 0;
var ar_rhost='ad.adriver.ru';
var ar_exposure_price = 0;
var ar_xpid = 'DLmZEKemnsl9oGm59DHx2AKlEVKgKS3XBFOLLvq0Uc1JNzWbIc5PXqVvT0BCRaso4rhrbGkXyWg';
if (typeof(ar_tansw) != 'undefined') clearInterval(ar_tansw);
var ar_script = '<script src="' + Mirror + Path + Comp0 + '?843946197" type="text/javascript" charset="windows-1251"><\/script>';
function loadScript(req){try {var head = parent.document.getElementsByTagName('head')[0],s = parent.document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('charset', 'windows-1251');s.setAttribute('src', req.split('843946197').join(Math.round(Math.random()*9999999)));s.onreadystatechange = function(){if(/loaded|complete/.test(this.readyState)){head.removeChild(s);s.onload = null;}};s.onload = function(){head.removeChild(s);};head.insertBefore(s, head.firstChild);}catch(e){}}
if (typeof(ar_bnum)=='undefined') {var ar_bnum = 1;}
var ad_id = 'ad_ph_' + ar_bnum;
if (typeof(window.parent.AdriverViewability)=="undefined"){window.parent.AdriverViewability = true;loadScript("//content.adriver.ru/banners/0002186/0002186173/0/AV.js")}
window.parent.adriverviewability = window.parent.adriverviewability || {};
window.parent.adriverviewability.v = window.parent.adriverviewability.v || [];
window.parent.adriverviewability.v.push (function (){window.parent.adriverviewability[ad_id] = new window.parent.AdriverViewability('//ad.adriver.ru/cgi-bin/event.cgi?xpid=DLmZEKemnsl9oGm59DHx2AKlEVKgKS3XBFOLLvq0Uc1JNzWbIc5PXqVvT0BCRaso4rhrbGkXyWg&bid=5219859&type=',0,ad_id);});
document.write(ar_script);




