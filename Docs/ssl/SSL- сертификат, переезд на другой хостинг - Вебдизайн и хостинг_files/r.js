if (window.location.protocol != "https:") {
	var path 		= 'http://h.germany.ru/abogat/r/';
} else {
	var path 		= 'https://h.germany.ru/abogat/r/';
}
var selector 	= ed;
function pf(filename, filetype) {
	if(filetype == "js") {
		var fileref = document.createElement('script')
		fileref.setAttribute("type", "text/javascript")
		fileref.setAttribute("src", filename)
	} else if(filetype == "css") {
		var fileref = document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if(typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref)
	}
}
pf(path + 'lib.js', 'js');
pf(path + 'redactor.css', 'css');
pf(path + 'redactor.js', 'js');
