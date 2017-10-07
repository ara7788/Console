/**
 * Основано на идее Orphus
 * http://forum.dklab.ru/other/orphus/
 */

var orfo_no_confirm = true;

$(document).bind("keyup.orfo", function(e) {
	var status = 0;
    var ev=(window&&window.event)||(parent&&parent.event);
    if (ev) { status = ev.keyCode==10 || (ev.keyCode==13 && ev.ctrlKey);
    } else{ if(e){ status = (e.which==10 && e.modifiers==2)||(e.keyCode==0 && e.charCode==106 && e.ctrlKey)||(e.keyCode==13 && e.ctrlKey); }}
    if (status) { sendReport(); }		 
});

function sendReport() {
	var beforeOffset = 40;
	var afterOffset = 40;
	var range = null;
	var report = '', pre = '', suf = '', err = '';
	
	if(window.getSelection){ 
		range=window.getSelection();
	} else { 
		if (window.document.getSelection) { 
			range=window.document.getSelection();
		} else { 
			range=window.document.selection;
		}
	}
	
	if (range == null) {
		alert('Ваш браузер не поддерживает функцию отправки сообщений об ошибках');
		return;
	}
	
	var reg = new RegExp("\s+", "i");
	
	if (range.getRangeAt) {
		// FF
		var r = range.getRangeAt(0);
		
		var rb=window.document.createRange();
		rb.setStartBefore(r.startContainer,r.endOffset);
		rb.setEnd(r.startContainer,r.startOffset);
		pre=rb.toString();
		
		var ra=r.cloneRange();
		ra.setStart(r.endContainer, r.endOffset);
		ra.setEndAfter(r.endContainer, r.startOffset);
		suf=ra.toString();
		
		report = pre+'<ОШИБКА>'+r.toString()+'</ОШИБКА>'+suf;
		err = r.toString();
		
	} else if (range.createRange) {
		// IE
		var oSelTxt = document.selection.createRange();
		var oBeforeSelTxt = document.selection.createRange();
		var oAfterSelTxt = document.selection.createRange();
		
		oBeforeSelTxt.moveStart("character", -beforeOffset-oSelTxt.text.length);
		oBeforeSelTxt.moveEnd("character", -oSelTxt.text.length);
		oAfterSelTxt.moveStart("character", oSelTxt.text.length);
		oAfterSelTxt.moveEnd("character", afterOffset);
		report = oBeforeSelTxt.text.replace(/[\s\t\n\r]+/g, ' ')+'\n\n<ОШИБКА>'+oSelTxt.text+'</ОШИБКА>\n\n'+oAfterSelTxt.text.replace(/[\s\t\n\r]+/g, ' ');
		err = oSelTxt.text;
	}
	
	if (err.length > 255) {
		alert('Выделен слишком большой фрагмент текста');
		return;  
	} else if (err.length < 1) {
		alert('Для отправки отчета об ошибке выделите текст с ошибкой и нажмите Ctrl+Enter');
		return;
	}

	if ((undefined !== window.orfo_no_confirm && window.orfo_no_confirm !== false) || confirm("Вы выделили текст с ошибкой:\n\n"+report+"\n\nОтправить отчет об ошибке?")) {
		AjaxRequest.action("/action/orfo/orfo/", "Отправляем...", {err: report, page : location.href});
	}
}
