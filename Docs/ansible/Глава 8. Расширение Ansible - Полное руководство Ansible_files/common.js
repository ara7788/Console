//var ftpConst='ftp://kostia:@195.210.128.11/doc/';
var ftpConst='http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=';
function PrepareSearch() {
	var ob = document.getElementById("GglSrch");
	ob.action="javascript:stat('http://www.google.com/search?q="+ ob.q.value +"&domains=mdl.ru&sitesearch=mdl.ru')"
	return true;
}
function stat(URL){
 statWindow=open(URL,"statWindow","toolbar=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=400")
if (statWindow.opener == null){
 statWindow.opener = self} 
if (URL != null){
 statWindow.location.href=URL};
 statWindow.focus();  
}
function dollar(){document.write('��� ����<br/>' + usd +' ���/$');}
var mdl='modul';mail=('mai'+'lto:'+mdl+'%40'+'col'+'%2E%72%75');
var oper1Nme='solga';oper1=('mai'+'lto:'+oper1Nme+'%40'+'mdl'+'%2E%72%75');
var cloudcomputingURL = 'http://cloudcomputing.mdl.ru/'
var cloudcomputingURLText = 'CloudComputing:mdl.ru'
var book_open = "<image src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABF1JREFUeNrMV01oHVUU/u7MnXl/5uUleQkxocGfopiKlUpAumiXLly6cqNuBBeupCAKbgWhCoro0qIbRQy4KIhdWNNasCgSkya2aqxtYpO+/DXJ+5ufezxzZ15m0rymeTF9OHCYO3fmnu+73zn33DuCiPB/vezJc6PkLF6uXZse++7it6de5D6jnQS6Js59RVSZJaovEbkbtDo/Qz+fOfXlx++c6GwHgb7JgED5OpNYIPLKFF6K5qZ/oLOjH7y0H4rs7ECI8M55QkpxQ+nHgUeP4PDI8U/OfPHefw6LvBP0G6+9cnBrV5SsxCQ8D4X+Axh+4si7o599NFTsKbyetmVG8TfVmgPl+eOu6552fe88c19K2VI889zLF2MnCaDobk1///mcA6vX45lSNOO0beHxp0aCfARZWQgrxyLwe68CQQ7gVvHL+a9R7MnDznRBZgpI5Qqo1gnr5SrKG+vwXTckTYF+ClIQbKqUHjv2/CA7dgMF5CMnTp8tdqO3ePAwyHEZw9ODLk1M3Fm7YPlKC1mzCkV5+IogfJ/F8ZDv6kdxsAAhM4kBTESxCR+LUxd6A8wrJ589HhDICmkf9b0qO8yiVppm7JCELhGU0KkZj4hLzIvg1iucGZJVkRCmySGraSNVhch2QTFRYVpHA+wggVKbrpQftcTOqLu8KEFqkyiHUCnV+CRlNJCUjhNFT+LeLvAAKwIytsQU7SjLBErgGDEp7iS/DbOnhNLJItJ40Q4FqJkCevbqHoOLsKqSfzsBEbJqkwJopoDuVH57QqCahQC7qDr7mYTbFVDNQxDsiELsIzEuRAkcmSyhYYFIYjOowRyFyRUjqllC7EMOxMt9x0KUsoC/L0/g5uwMPKceEUiQ2XMOblNAJApRXMfz91lw6mtYmlvA3MyvMO0sBh56Ej39Q+Emo/ZSuKgJAYEwLkSb7oLHbMpmFQzkMhZ8z4HDKpT+uIDZKz/i4UNPo6On2BK8jt5tSidCsL0Q0ZakFZA8646ciULawczkGDaWShwOU+dKw+IcETsooJocySJSQXyFElucGkZQwYzQmARTQSfVsDz/Owx+NrUZMKWEZDNNyf1GOI6/1jnTGC8ae4GICYQg3OBBtiXhCwXPICi+G3yvbFSwuLiMlZU11Gp1XTP4mIe+Pn7Pqs38OYe6d439sDrdvSj0DWLggWFYme5wVmaaTe/5DOaxT2NTKE3A4Ker/6xi4uo38Cmu2yIKXKxGmmcTHrMcVnH9hj5OakW0QwaYL63hxsIKpsbHdWLHW28YHpNVydsB5lBMQPLsf7uVQl2Zdz0RiEZucGs4t6r7psqFYB1tvrvb+FTN15gxATjrb/3U3dHqkn5/ZBnXnU6cHM+3XA4O3O+uNwgV2B4MfsVaWNTy0KufvnmzJo/pX6i0N3bpwxfe5qbXwnFxhe0voYMI5PThf/dXcJDtYWv8I95iW2Krt+CDfyxQ3mthD3I6G5+oNTCfxdHyfv6vAAMAY9sGXiBC2hIAAAAASUVORK5CYII=\" height=\"16\" width=\"16\"/>";
var ext_link =  "<image src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlkPSJzdmdfMSIgZD0ibTQzLDM1bC0zOCwwbDAsNjBsNjAsMGwwLC0zOG0tMjAsLTUybDAsMTBsMTAsMTBsLTMwLDMwbDIwLDIwbDMwLC0zMGwxMCwxMGwxMCwwbDAsLTUwbC01MCwweiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlPSIjMDZEIiBmaWxsPSIjRkZGIi8+CiA8L2c+Cjwvc3ZnPg==\" height=\"12\" width=\"12\"/>";
var promo1AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=ITpromoHuawei2016"><img src="http://www.mdl.ru/Solutions/ITpromoHuawei2016/Fig01.jpg" "width=615" heigh="304"></a>'
var promo2AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=ITpromoHuawei2016"><img src="http://www.mdl.ru/Solutions/ITpromoHuawei2016/Fig02.jpg" "width=616" heigh="294"></a>'
var promo3AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=CanonOffer"><img src="http://www.mdl.ru/Solutions/MFU/MFUoffer170420-610x315.jpg" "width=610" heigh="315"></a>'
//var promo3AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=ITpromoHuawei2016"><img src="http://www.mdl.ru/Solutions/ITpromoHuawei2016/Fig03.jpg" "width=616" heigh="300"></a>'
var promo4AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=ITpromoHuawei2016"><img src="http://www.mdl.ru/Solutions/ITpromoHuawei2016/Fig04.jpg" "width=619" heigh="309"></a>'
var promo5AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=ITpromoHuawei2016"><img src="http://www.mdl.ru/Solutions/ITpromoHuawei2016/Fig05.jpg" "width=621" heigh="302"></a>'
var promo6AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=ITpromoHuawei2016"><img src="http://www.mdl.ru/Solutions/ITpromoHuawei2016/Fig06.jpg" "width=617" heigh="301"></a>'
var promo7AHref = '<a href="http://www.mdl.ru/Solutions/Put.htm?Nme=ITpromoHuawei2016"><img src="http://www.mdl.ru/Solutions/ITpromoHuawei2016/Fig07.jpg" "width=615" heigh="288"></a>'
//var runningString = '<div class="string"><div id="marquee"><a href="http://www.mdl.ru/Solutions/Put.htm?Nme=MdlAccelerator">&#x041B;&#x0435;&#x0442;&#x043E; 2017: &#x041F;&#x0440;&#x043E;&#x0444;&#x0435;&#x0441;&#x0441;&#x0438;&#x043E;&#x043D;&#x0430;&#x043B;&#x044C;&#x043D;&#x044B;&#x0435; GPU &#x0432;&#x044B;&#x0447;&#x0438;&#x0441;&#x043B;&#x0435;&#x043D;&#x0438;&#x044F; 8x GTX1080/256GB/2x2630v4/2U &#x043E;&#x0442; 1&#x043C;&#x043B;&#x043D;.&#x0440;&#x0443;&#x0431;.</a></div></div>'
//var runningString = '<div class="string"><div id="marquee"><a href="http://www.mdl.ru/Solutions/Put.htm?Nme=MiddleServer#SomeAMD-EPYCprices-201708">AMD Epyc&#x2122;</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="http://www.mdl.ru/Solutions/Put.htm?Nme=EveryPlacePC">23&quot; &#x0442;&#x0435;&#x0440;&#x043C;&#x0438;&#x043D;&#x0430;&#x043B; &#x0441; 4core &#x0426;&#x041F;&#x0423;/4&#x0413;&#x0411;/1&#x0422;&#x0411; &#x043E;&#x0442; 15&#x0442;&#x044B;&#x0441;.&#x0440;&#x0443;&#x0431;.</a></div></div>'
var runningString = '<div class="string"><div id="marquee"><a href="http://www.mdl.ru/Solutions/Put.htm?Nme=MdlAccelerator#RX461i">&#x043E;&#x0442;100k USD &#x0440;&#x0435;&#x0448;&#x0435;&#x043D;&#x0438;&#x0435; &#x0441; 8&#x044E; Tesla Volta V100</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="http://www.mdl.ru/Solutions/Put.htm?Nme=EveryPlacePC">23&quot; &#x0442;&#x0435;&#x0440;&#x043C;&#x0438;&#x043D;&#x0430;&#x043B; &#x0441; 4core &#x0426;&#x041F;&#x0423;/4&#x0413;&#x0411;/1&#x0422;&#x0411; &#x043E;&#x0442; 15&#x0442;&#x044B;&#x0441;.&#x0440;&#x0443;&#x0431;.</a></div></div>'
$(function() {

	var marquee = $("#marquee"); 
	marquee.css({"overflow": "hidden", "width": "100%"});

	// �������� ��� ������ ����� span (IE �� ����� ���� � inline-block)
	marquee.wrapInner("<span>");
	marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
	marquee.append(marquee.find("span").clone()); // ��� � ��� ��� span � �������

	marquee.wrapInner("<div>");
	marquee.find("div").css("width", "200%");

	var reset = function() {
		$(this).css("margin-left", "0%");
		$(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
	};

	reset.call(marquee.find("div"));

});
function tocall(){
}
function a () {
var ua = navigator.userAgent;
var bv = navigator.appVersion.substring(0,1);
 msgWindow=open("attention.htm","NesWindow","toolbar=no,directories=no,menubar=yes,scrollbars=auto,resizable=yes,width=250,height=250")
}
function DL(URL){
 statWindow=open(URL,"statWindow","toolbar=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=400")
if (statWindow.opener == null){
 statWindow.opener = self} 
if (URL != null){
 statWindow.location.href=ftpConst+URL};
 statWindow.focus();  
}
var whitespace = " \t\n\r";
function isEmpty(s) {
 if((s == null) || (s.length == 0)) {
	return true;
 }
 for (var i = 0; i < s.length; i++) {   
  var c = s.charAt(i);
  if (whitespace.indexOf(c) == -1) {
	return false;
  }
 }
 return true;
}

function isEmail (field) {
 var str = field.value;
 if (isEmpty(str)) {     
	alert("Email �� ����� ���� ������!");
	field.focus();
	field.select();
	return false;
 }
 if (/[^@]+@(\w+[-\.])+\w+/.test(str))
	return true;
 alert("��������\� ���� ������ �� \���\����� Email-�������!");
 field.focus();
 field.select();
 return false;
}

var CapsRegExp = /[A-Z0-9�-�]/;
function SpanFirstCapital(InStr) {
 var FirstPos	= InStr.search(CapsRegExp);
 var PfxStr		= InStr.substr(0,FirstPos);
 var Str2Span	= InStr.charAt(FirstPos);
 var i=FirstPos+1;
 while (0==InStr.substr(i).search(CapsRegExp)) {
	Str2Span += InStr.charAt(i);
	i++;
 }
 return PfxStr+'<span class="big_16">'+Str2Span+'</span>'+InStr.substr(PfxStr.length+Str2Span.length)
}

//var DLtip = '<p align="left"><b>�����</b>: ������ �� ������� ����� ������ ����� ������� ������������������. �� ���������� ���� ��� ��� ������� ������ ������ ����������� ������������ IE � Mozilla, ������ ftp- ������� � Opera �������� � ���. ���������� �������� ������ � �������������� ���������� � ������ �������. �������� � ��������� ����� ��������� ��� ��������. �������� �� ������ Mozill`�, � ������ ������������� ���.</p>';
var DLtip = '';
var NBoptions = '<p align="center">iCelM-1.6G -&gt; iP M 1.6G = +150$<br />+256M = +50$<br />20G ST 5.4k -&gt; 30G HT 4.2k = +10$<br />20G ST 5.4k -&gt; 40G ST 2M, 5.4k +30$<br />20G ST 5.4k -&gt; 40G ST 8M, 5.4k = +50$<br />20G ST 5.4k -&gt; 30G HT 4.2k = +70$<br />DVD ROM  -&gt; DVG-CDRW = +35$</p>';
