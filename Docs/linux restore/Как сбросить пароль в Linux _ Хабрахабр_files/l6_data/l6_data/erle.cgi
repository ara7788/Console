
function httplize(s){return ((/^\/\//).test(s) ? ((location.protocol == 'https:')?'https:':'http:') : '') + s} 
var ar_q = '';
if(ar_q.indexOf("ad_google")!=-1){
	var ar_e = ar_q.indexOf("100=");ar_q = ar_q.slice(ar_e+4); ar_q=ar_q.split(';');
	var CgiHref =unescape(ar_q[0])+httplize('//ad.adriver.ru/cgi-bin/click.cgi?sid=1&ad=633842&bid=5149568&bt=43&bn=633842&pz=0&nid=0&ref=https:%2f%2fcontent.adriver.ru%2fbanners%2f0002186%2f0002186173%2f0%2fl6.html%3f549917%260%260%260%263397963%260%2655480343184%26100%26185.126.112.2%26merle%261&custom=&xpid=Df4h_CHM6TijjmNfl63UVvro4LW9Vo_1ENKygoXml0qc6SzlXr5kig85kQXvPyut-IU5n61hs3g');
}else{
	var CgiHref = httplize('//ad.adriver.ru/cgi-bin/click.cgi?sid=1&ad=633842&bid=5149568&bt=43&bn=633842&pz=0&nid=0&ref=https:%2f%2fcontent.adriver.ru%2fbanners%2f0002186%2f0002186173%2f0%2fl6.html%3f549917%260%260%260%263397963%260%2655480343184%26100%26185.126.112.2%26merle%261&custom=&xpid=Df4h_CHM6TijjmNfl63UVvro4LW9Vo_1ENKygoXml0qc6SzlXr5kig85kQXvPyut-IU5n61hs3g');
}
var ar_bt=43;
var ar_siteid = 1;
var Mirror = httplize('//servers1.adriver.ru');
var bid = 5149568;
var sliceid = 0;
var ar_adid = 633842;
var ar_pz=0;
var ar_sz='%2fbanners%2f0002186%2f0002186173%2f0%2fl6.html%3f549917%260%260%260%263397963%260%2655480343184%26100%26185.126.112.2%26merle%261';
var ar_nid=0;
var ar_pass='';
var ar_bn=633842;
var ar_geozoneid=100;
var Path = '/images/0005149/0005149568/';
var Comp0 = '0/script.js';
var Width = 0;
var Height = 0;
var date = 'Fri, 11 Aug 2017 12:10:23 GMT';
var Uid = 55480343184;
var Target = '_blank';
var Alt = 'AdRiver';
var CompPath = Mirror + Path + '0/';
var RndNum4NoCash = 443574688;
var ar_ntype = 0;
var ar_tns = 0;
var ar_rhost='ad.adriver.ru';
var ar_exposure_price = 0;
var ar_xpid = 'Df4h_CHM6TijjmNfl63UVvro4LW9Vo_1ENKygoXml0qc6SzlXr5kig85kQXvPyut-IU5n61hs3g';
if (typeof(ar_tansw) != 'undefined') clearInterval(ar_tansw);
var ar_script = '<script src="' + Mirror + Path + Comp0 + '?443574688" type="text/javascript" charset="windows-1251"><\/script>';
document.write(ar_script);




