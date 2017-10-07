$(function() {

	var thisHost =  location.protocol + "//" + location.host;  //+ "/sitear.ru"; // getting host name

	// unfold article on category page
	$('#read_text').on('click', function () {
		$('#section_article').css("height", "100%");
		$('#overlay').hide();
	});

	$('#categories').on('click', menuButtonClickHandler);
	$('.menu_button').on('mouseover mouseout', menuButtonHoverHandler);

	function menuButtonClickHandler() {
		$(this).addClass('menu_button_active').siblings().removeClass('menu_button_active');
		
		var idButton = $(this).attr('id');
		$("#ajaxmenu").hide(200).load(thisHost+"/ajax/get_"+idButton, {}, function(){
			$('#ajaxmenu').show(400);
		});

		//var list = $('.menu_'+idButton+'_list_child');
		//setEqualHeight(list);
	}

	function menuButtonHoverHandler() { $(this).toggleClass('menu_button_hover gray_gradient_hover'); }

	// make comment links clickable
	$('div.coment').each(function(index, item){
		d = $(item).html();
		d = d.replace(/([a-zA-Z]+:\/\/[a-z0-9\_\.\-]+\.[a-z]{2,6}([a-zA-Z0-9\/\*\-\_\?\&\%\=\,\+\.]+)?)/g, '<noindex><a color="red" href="$1" target="_blank" rel="nofollow">$1</a></noindex>');
		d = d.replace(/\n/g,'<br/>');
		$(item).html(d);
	});

	//highlight codes
	var keywords = 'abstract boolean break byte case catch char const continue debugger delete do else enum export extends false final finally for function goto if implements in instanceof int interface long native new null package private protected public return short static super switch synchronized throw throws transient true try typeof var void volatile while with and or xor __FILE__ __LINE__ array as break case cfunction const continue declare die do else elseif empty enddeclare endfor endforeach endif endswitch endwhile extends for foreach function include include_once global if new old_function return static switch use require require_once var while __FUNCTION__ __CLASS__ __METHOD__ abstract interface public implements extends private protected throw define';
	$('pre.code').each(function(index, item){
		d = $(item).html();
		d = d.replace(/(".*?"|'.*?')/g, '<font class="string">$1</font>'); // замена всех строк, обернутых в одинарные и двойные кавычки
		d = d.replace(/(&lt;[a-z]+)(.*?)(\s*\/?&gt;)/gi, '<font class="tagname">$1</font>$2<font class="tagname">$3</font>'); // обработка HTML-тегов
		d = d.replace(/(&lt;\/?[a-z]+&gt;)/gi, '<font class="tagname">$1</font>'); // обработка HTML-тегов (закрывающих)
		d = d.replace(/(&lt;\?php|\?&gt;)/g, '<font class="tagname">$1</font>'); // обработка HTML-тега при подключении PHP-кода
		d = d.replace(/(&lt;!--.*--&gt;|\/\*.*\*\/|\/\/.*)/g, '<font class="comment">$1</font>'); // обработка комментариев
		d = d.replace(/(\/\*(.|\s)*?\*\/)/g, '<font class="comment">$1</font>'); // обработка комментариев
		d = d.replace(new RegExp('\\\x62('+ keywords.replace(/ /g,'|') +')\\\x62', 'g'), '<font class="keyword">$1</font>'); // обработка ключевых слов
		d = d.replace(/(\$[a-z0-9_]+)/gi, '<font class="phpvar">$1</font>'); // подсветка PHP-переменных ($varname)
		// пробельные символы
		d = d.replace(/ /g, '&nbsp;').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;').replace(/^(.*?)\r?(\n|$)/gm,'<div>$1</div>');
		d = d.replace(/<font&nbsp;/gi, '<font ');
        $(item).html(d);
	});

});

// set equal heights of list: columns - list obj
function setEqualHeight(columns) {
	var tallestItem = 0;
	columns.each(function(index, item) {
		var itemHeight = $(this).height();
		alert(itemHeight);
		if(itemHeight > tallestItem){
			tallestItem = itemHeight;
		}
	});

	columns.height(tallestItem);
}


//---------------------------- СТАРЫЙ КОД, ПРОВЕРИТЬ И УДАЛИТЬ ----------------------

// создаем объект для аякс
function obj() {
var rt;
var b = navigator.appName;
if(b == "Microsoft Internet Explorer"){
rt = new ActiveXObject("Microsoft.XMLHTTP");
}else{
rt = new XMLHttpRequest();
}
return rt;
}
// функция отправки данных через аякс
function ajax(p)
{
	var r = obj();
	m=(!p.method ? "POST" : p.method.toUpperCase());
	
	if(m=="GET")
	{
		send=null;
		p.url=p.url+"&ajax=true";
	}
	else
	{
		send="";
		for (var i in p.data) send+= i+"="+p.data[i]+"&";
		send=send+"ajax=true";
	}
	
	r.open(m, p.url, true);
	if(p.statbox)document.getElementById(p.statbox).innerHTML = p.whait;
	r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	r.send(send);
	r.onreadystatechange = function()
	{
		if (r.readyState == 4 && r.status == 200)
		{
			if(p.success)p.success(r.responseText);
		}
	}
}
// выводим остальные комментарии
function else_comments(data)
{
	gbi("else").innerHTML=data;
	gbi("elcomments").innerHTML="Выполнено";
}

// после выполения отправки комментария
function after_comment(data)
{
	if(data == '<font color="green">Комментарий добавлен и ожидает проверки!</font>')
	{
		gbi("text").value="";
		gbi("text").innerHTML="";
		setTimeout(function(){toggle('addcoment');}, 1000);
	}
	gbi("statusbox").innerHTML=data;
	
}
// Показать кнопку ответа на комментарий
function show_reply(id)
{
	var com_obj = gbi(id);
	var e = gbcn(com_obj, 'bottom');
	setTimeout(function(){
		var rep=document.createElement("div");
		rep.id="rep-"+id;
		rep.className="reply";
		rep.style.display="none";
		rep.innerHTML='<a onClick="click_reply(\''+id+'\'); location.href=\'#coments\';">Ответить</a>';
		var reps = gbcn(e, 'reply');

		if(reps.length >= 0)
		{
			e.appendChild(rep);
			var rep_id = "rep-"+id;
			toggle(rep_id);
		}
	}, 500);
}
// вспомогательная функция получения элемента по имени класса
function gbcn(obj, cname) // объект, класс элемента
{
	var e = obj.getElementsByTagName('*');
	for(i=0; i < e.length; i++)
	{
		if(e[i].className == cname)
		{
			e = e[i];
		}
	}
	return e;
}
// при нажатии на ответить
function click_reply(id)
{
	var pid = gbi("pid");
	if(pid.value==0)
	{
		var com_obj = gbi(id);
		var rep_id = "rep-"+id;
		var rep_obj = gbi(rep_id);
		var bott_obj = gbcn(com_obj, 'bottom');
		bott_obj.removeChild(gbi(rep_id));
		var content = bott_obj.innerHTML + '<div class="reply"><a onClick="click_unreply(\''+id+'\');">Не отвечать</a></div>';
		content.replace(/([a-zA-Z]+:\/\/[a-z0-9\_\.\-]+\.[a-z]{2,6}([a-zA-Z0-9\/\*\-\_\?\&\%\=\,\+\.]+)?)/g, '<noindex><a href="$1" target="_blank" rel="nofollow">$1</a></noindex>');
		content.replace(/\n/g,'<br/>');
		bott_obj.innerHTML = bott_obj.innerHTML + '<div id="'+rep_id+'" class="reply"><a onClick="click_unreply(\''+id+'\');">Не отвечать</a></div>';
		var a = gbi("repbox");
		var sb = gbi("statusbox");
		// действия
		pid.value = id;
		sb.innerHTML = "Ответ должен быть по сути и составлен корректно!";
		a.innerHTML = '<div class="repcom">' + content + '</div>' + a.innerHTML;
		var add_obj = gbi("addcoment");
		var newheight = 340 + gh(id);
		add_obj.style.height = newheight+"px";
		toggle('addcoment');
	}
	else
	{
		alert('Вы уже пытаетесь ответить на один из комментариев! Если передумали отвечать, выберите "не отвечать"');
	}
}
// не отвечать на комментарий
function click_unreply(id)
{
	var pid = gbi("pid");
	var rep_id = "rep-"+id;
	var rep_obj = gbi(rep_id);
	rep_obj.innerHTML = '<a onClick="click_reply(\''+id+'\'); location.href=\'#coments\';">Ответить</a>';
	var a = gbi("repbox");
	var sb = gbi("statusbox");
	// действия
	pid.value = 0;
	sb.innerHTML = "Комментарий должен быть по теме и составлен корректно!";
	a.innerHTML = '';
	var add_obj = gbi("addcoment");
	add_obj.style.height = "390px";
	toggle('addcoment');
	setTimeout(function(){location.href='#'+id;}, 1000);
}
// сворачивание и разворачивание блока
function toggle(id)
{
	var e = document.getElementById(id);
	var dh = gh(id);
	var elems = e.getElementsByTagName('*');
	var flag;
	
	if (e.style.display == "none")
	{
		if (flag != 0)
		{
			flag = 0;
			for(var i=0; i<elems.length; i++){vhe(elems[i], "hidden");}
		
			e.style.height="1px";
			e.style.display = "block";
			for(var i=0;i<=100;i+=5)
			{
				(function()
					{
						var pos=i;
						setTimeout(function(){e.style.height = (pos/100)*dh+1+"px";},pos*5);
					}
				)();
			}
			setTimeout(function(){for(var i=0; i<elems.length; i++){elems[i].style.visibility="visible";}},500);
			return true;
			flag = 1;
		}
	}
	else
	{
		if (flag != 0)
		{
			flag = 0;
			var lh=dh-1+"px";
			
			for(var i=0; i<elems.length; i++){vhe(elems[i], "hidden");}
			
			for (var i=100;i>=0;i-=5)
			{
				(function()
					{
						var pos=i;
						setTimeout(function()
						{
							e.style.height = (pos/100)*dh+"px";
							if (pos<=0)
							{
								e.style.display = "none";
								e.style.height=lh;
							}
						},1000-(pos*5));
					}
				)();
			}
			return true;
			flag = 1;
		}
	}
	return false;
}

function vhe(obj, vh){obj.style.visibility=vh;}

function gh(id)
{
	var e = document.getElementById(id);
	if(e.style.display == "none")
	{
		e.style.visibility = "hidden";
		e.style.display = "block";
		dh = e.clientHeight||e.offsetHeight+5; // Высота
		e.style.display = "none";
		e.style.visibility = "visible";
	}
	else
	{
		dh = e.clientHeight||e.offsetHeight+5; // Высота
	}
	return dh;
}
// выбор элемента по иду
function gbi(id){var e = document.getElementById(id); return e;}

// для таб. меню
function show(getid, precss)
{
	var csname = new RegExp(precss+"\\w") // регулярка стиля родительских ли елементов
	var o=document.getElementsByTagName('li'); // массив родительских елементов
	var i,oset,num
	for (i=0; i<o.length; i++)
	{
		if (csname.exec(o[i].className))
		{
			var uls = o[i].getElementsByTagName('ul');
			if(o[i].id==getid)
			{
				o[i].className=precss+'show';
				oset = 'block';
			}
			else
			{
				o[i].className=precss+'hide';
				oset = 'none';
			}
			
			for(j=0; j<uls.length; j++){uls[j].style.display=oset;}
		}
	}
}
// очистка значения формы онклик
function clearText(f)
{
	if(f.defaultValue == f.value)f.value = '';else if(f.value == '')f.value = f.defaultValue;
}