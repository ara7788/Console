function simple_tooltip(target_items, name){
	$(target_items).each(function(i){
		$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
		var my_tooltip = $("#"+name+i);
		my_tooltip.hide()
		
		$(this).removeAttr("title").mouseover(function(){
			my_tooltip.css({opacity:0.9, display:"none"}).show();
		}).mousemove(function(kmouse){
			my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
		}).mouseout(function(){
			my_tooltip.hide();
		});
	});
}

function customCheckBox(id) {
	var chk = byId('zone_chk_'+id);
	var img = byId('zone_img_chk_'+id);
	if (chk.checked) {
		chk.checked = "";
		img.src = '/design/ukraine/img/checkbox.jpg';
	} else {
		chk.checked = "checked";
		img.src = '/design/ukraine/img/checkok.gif';
	}
}

$(document).ready(function(){
 simple_tooltip("a.economy","tooltip");
});


function updateDomainCheckStatus(index, domain, zone, domain_status, action, comment, period) {
	$("#domain_status_"+domain+"_"+index).val(action);
	if (action != 'register' && action != 'cart') {
		$('#get_domain_info_div_'+domain+'_'+index).show();
	}
	
	if (typeof(period) == 'undefined') period = 1;
	  
	var d_status = $("#dc_"+domain+"_"+index);
	var domain_action = $("#domain_action_"+domain+"_"+index);
	var domain_name = $("#domain_name_"+domain+"_"+index);
	var d_comment = $("#dzc_"+domain+"_"+index);
	var d_period = $("#domain_period_"+domain+"_"+index);
		
	d_status.html(domain_status);
	if (comment.length>0) {
		d_comment.html(comment);
	} 
    
    domain_name.children('label.domain-check-waiting-result').removeClass('domain-check-waiting-result');
	   
	if (action == 'cart') {
		if (d_period.is('select')) {
			d_period.val(parseInt(period));
			 
			var period_price = parseFloat( $("#price_input_"+domain+"_"+index).val() * parseInt(period) );
			$("#price_output_"+domain+"_"+index).html( period_price + " грн");
			UserCurrency.update(); 
		}
		
		
		  
	} else if (action != 'register'){   
		d_period.parent().html("&mdash;");
	}
	
	if (action == 'cart') {    
		d_status.html('<span style="color:green">добавлен в корзину</span>'); 
		domain_action.html("<img class='in_cart' src='/design/ukraine/img/domain_ok.png'><input type='checkbox' name='reg["+domain+"]["+index+"]' id='reg_"+domain+"_"+index+"' value='true' checked='checked' style='display:none;'>"); 
	} else if(action == 'register') {
		var reg_checked = ($("td[id^='domain_name']").length == 1) ? 'checked' : '';  
		domain_action.html("<input type='checkbox' name='reg["+domain+"]["+index+"]' id='reg_"+domain+"_"+index+"' value='true' "+reg_checked+" onclick='domain_price_total();'>");
	} else if (action == 'whois_link') {
		domain_action.html("<img src='/design/ukraine/img/domain_error.png' align='absmiddle' border='0' style='margin-top:4px'>");
		domain_name.html("<a target=_blank href='http://"+domain+"."+zone+"/'>"+domain+'.'+zone+"</a> ["+"<a href='#' onclick=\"CenterWindow('/Domains/Whois/?domain="+domain+'.'+zone+"', 'whois', 400, 500, 'yes', 'no'); return false;\"><span class='bad'>whois</span></a>"+"]");
		
	} else if (action == 'transfer') {
		domain_action.html("<img src='/design/ukraine/img/domain_error.png' align='absmiddle' border='0' style='margin-top:4px'>");
		domain_name.html("<a target=_blank href='http://"+domain+"."+zone+"/'>"+domain+'.'+zone+"</a> ["+"<a href='#' onclick=\"CenterWindow('/Domains/Whois/?domain="+domain+'.'+zone+"', 'whois', 400, 500, 'yes', 'no'); return false;\"><span class='bad'>whois</span></a>"+"]");
		d_comment.html("<a target='_blank' href='/Domains/Transfer/?domain="+domain+'.'+zone+"'>Это мой домен и я хочу перенести его к вам</a>");
	} else if (action == 'ordered') {
		domain_action.html("<img src='/design/ukraine/img/domain_error.png' align='absmiddle' border='0' style='margin-top:4px'>");
	} else if (action == 'error') {
		domain_action.html("<img src='/design/ukraine/img/domain_error.png' align='absmiddle' border='0' style='margin-top:4px'>");
	}
	 
	domain_price_total();
}

function isDomainsSelected() {
	var input_obj = document.getElementsByTagName('INPUT');
	var name = 'reg';
	var selected = false;
	for(var i=0;i<input_obj.length;i++) {
		if (input_obj[i].type!='checkbox') continue;
		if ((input_obj[i].name.substr(0, name.length) == name) && input_obj[i].checked) {
			selected = true;
			break;
		}
	}
	return selected;
}

function goRegister() {
	if (!isDomainsSelected() && $('table.domain_check .in_cart').length == 0) {
		alert('Отметьте галочками домены, которые вы хотите зарегистрировать');
		return false;
	}
	
	byId('Form').action = '/action/hosting/order/domains/';
	byId('Form').submit();
}

function addDomainsToCart() {
	if (!isDomainsSelected()) {
		alert('Отметьте галочками домены, которые вы хотите зарегистрировать');
		return false;
	}
	
	AjaxRequest.send('Form', '/action/hosting/order/domains/', '', true, {});
	$('table.domain_check input:checked').parent().html("<img class='in_cart' src='/design/ukraine/img/domain_ok.png'>");
} 
 
function domainChangeCheckType(type) {
	if (type == 'single') var antitype = 'mass';
	else var antitype = 'single';
	
	$('#check_type').val(type); 
	$('#domain-'+antitype+'-check').hide(); 
	$('#domain-'+type+'-check').show();
	
	if (type == 'mass' && $('#domain').val()!='') {
		$('#domain_mass_check').val(byId('domain').value);
	}
	
}

function onDomainCheckSubmit() {
	
	var type = $('#check_type').val();
	
	if (type == 'single') {
		if (byId('domain').value=='') {
			alert('Укажите имя домена для проверки'); 
			byId('domain').focus(); 
			return false;
		}
	} else {
		if ($('#domain_mass_check').val()=='') {
			alert('Укажите имена доменов для проверки'); 
			byId('domain_mass_check').focus(); 
			return false;
		}
	}
}

function promocodeActivate(promo_code_field_id) {
	var promocode = $('#'+promo_code_field_id).val();
	AjaxRequest.action("/action/hosting/order/promocode/activate/", "Загрузка...", {'promocode':promocode});
	return false;
}
