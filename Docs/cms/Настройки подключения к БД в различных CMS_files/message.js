
/**
 * Простой блок
 */
function delta_block(content, block_id, param_top, param_left, param_width, no_draggable) {
	if (typeof(block_id) == 'undefined') block_id = "0"; 
	if (typeof(param_top) == 'undefined') param_top = "15%"; 
	
	if (typeof(no_draggable) == 'undefined') no_draggable = false; 
	var width = (typeof(param_width) != 'undefined') ? "width:"+param_width : ""; 
   
   	if ($("#delta_popup_block_"+block_id).length == 0) { 
		$("<div id='delta_popup_block_"+block_id+"' class='delta-message-border' />").appendTo("body"); 
	}
	    
	var close_button = '<div style="position:absolute; right:20px; top:20px;"><a title="Закрыть" onclick="delta_block_close();" href="javascript:void(0);" class="close">Закрыть</a></div>';
	$("#delta_popup_block_"+block_id).html('<div class="delta-message-container process-info" style="'+width+'"><div class="delta-selectable">'+close_button+content+'</div></div>');
	 
	$.blockUI.defaults.css = {top: param_top};
    $.blockUI({ message: $('#delta_popup_block_'+block_id) });    
     
    if (typeof(param_left) == 'undefined' || param_left == "") {
    	$('.blockMsg').css('left', Math.floor(($(window).width() / 2) - ($('.blockMsg').width() / 2))+'px');
    } else {
    	$('.blockMsg').css('left', param_left);
    }	
    
    if (!no_draggable && typeof $('.blockMsg').draggable === 'function') {
    	$('.blockMsg').draggable({cursor: "move", cancel: ".delta-selectable", containment: "window"});
    }	
} 

 
/**
 * Закрыть все дельта-блоки
 */ 
function delta_block_close(block_id) {
	var block = "";
	
	if (typeof(block_id) != 'undefined') block = "_"+block_id; 
	$.unblockUI({ onUnblock: function() {  
		$("div[id^='delta_popup_block"+block+"']").remove();  
		$("div[id^='delta_simple_block"+block+"']").remove();    
	}}); 
}


/**
 * Конструктор дельта-сообщений
 */
function delta_message(stack, param_top, param_left, param_width){
	if (stack.length == 0) return false;
	
	if (typeof(param_top) == 'undefined') param_top = "30%"; 
	 
	var custom_style = "";
	if (typeof(param_width) != 'undefined') {
		custom_style = "width:"+param_width;
	}
	
	var message_total = 0;
	jQuery.each(stack, function(display_type, messages){
		jQuery.each(messages, function(i, message){
			message_total++;	
		});
	});
	
	var message_counter = 0;
	jQuery.each(stack, function(display_type, messages){
		jQuery.each(messages, function(i, message){
			$("<div id='delta-message-"+message_counter+"' class='delta-message-border' />").appendTo("body"); 
			
	        var current_number = message_counter+1;
	        
	        if (message_total == 1){
	        	var messages_counter_block = '';
	        } else {
	       		var messages_counter_block = '<div style="float:right; font-weight:bold;">Сообщение '+current_number+' из '+message_total+'</div><div style="clear:both;">&nbsp;</div>'; 	
	        }
	        
	        var button_color = "green";
	        if (display_type == "error") {
	        	button_color = "red";
	        } else if (display_type == "warning") {
	        	button_color = "yellow";
	        }
	        
	        if (message_total == 1 || current_number == message_total){
	       		var button = '<button class="hosting-button-'+button_color+'" onclick="message_close();">Закрыть</button>';
	        } else {
	       		var button = '<button class="hosting-button-'+button_color+'" onclick="message_next('+current_number+')">Далее</button>';
	        }
	          
	        $("#delta-message-"+message_counter).html('<div class="delta-message-container process-'+display_type+'" style="'+custom_style+'"><div class="delta-message-container-content">'+messages_counter_block+' '+message+'</div><div class="delta-message-container-button">'+button+'</div></div>');
	        message_counter++;
		});  
	});  
	 
	$.blockUI.defaults.css = {top: param_top};
    $.blockUI({ message: $('#delta-message-0') });  
    
    if (typeof(param_left) == 'undefined' || param_left == "") {
    	$('.blockMsg').css('left', Math.floor(($(window).width() / 2) - ($('.blockMsg').width() / 2))+'px');
    } else {
    	$('.blockMsg').css('left', param_left);
    }	
    
    if (typeof $('.blockMsg').draggable === 'function') {
    	$('.blockMsg').draggable({cursor: "move", cancel: ".delta-message-container-content", containment: "window"});
    } 
}
     

/**
 * Перелистывание дельта-сообщений
 */
function message_next(message_id){
	$.blockUI({ message: $('#delta-message-'+message_id) });  
    if (typeof $('.blockMsg').draggable === 'function') {
    	$('.blockMsg').draggable({cursor: "move", cancel: ".selectable", containment: "window"});
    }	 
}


/**
 * Закрыть все дельта-сообщения
 */
function message_close(){ 
	$.unblockUI({ onUnblock: function(){ $("div[id^='delta-message']").remove(); } }); 
}


/**
 * Набор функций для вывода дельта-сообщений в соответствии со степенью их важности
 */
function delta_error(content, param_top, param_left, param_width){	
	if (typeof(param_top) == 'undefined') param_top = "30%"; 
	if (typeof(param_width) == 'undefined') param_width = ""; 
	
	delta_message({'error':{0:content}}, param_top, param_left, param_width); 
	return false;
}

function delta_success(content, param_top, param_left, param_width){	
	if (typeof(param_top) == 'undefined') param_top = "30%"; 
	if (typeof(param_width) == 'undefined') param_width = ""; 
	
	delta_message({'success':{0:content}}, param_top, param_left, param_width);  
	return false;
}
 
function delta_warning(content, param_top, param_left, param_width){	
	if (typeof(param_top) == 'undefined') param_top = "30%"; 
	if (typeof(param_width) == 'undefined') param_width = ""; 
	
	delta_message({'warning':{0:content}}, param_top, param_left, param_width);  
	return false;
}

function delta_info(content, param_top, param_left, param_width) {
	if (typeof(param_top) == 'undefined') param_top = "30%"; 
	if (typeof(param_width) == 'undefined') param_width = ""; 
	     
	delta_message({'info':{0:content}}, param_top, param_left, param_width);  
	return false;
}


/**
 * Конструктор дельта-форм
 *
 * @param string form_id - id формы, что необходимо вывести в дельта-сообщении 
 * @param string action_js - название javascript функции, что отправляет форму на сервер
 */
function delta_action(action_js, content, cancel_js, button_title){
	delta_loader_clear();
	 
	if (typeof(cancel_js) == "undefined") cancel_js = "message_close();";
	if (typeof(button_title) == "undefined") button_title = "Далее";
	var uniq_id = Math.floor(Math.random() * 9999) + 1;
	  
	$("#delta-message-action").remove();     
	$("<div id='delta-message-action' class='delta-message-border' />").appendTo("body"); 
	
   	var buttons = '' +
   		 '<button class="hosting-button-green" onclick="delta_loader_start(\''+uniq_id+'\'); '+action_js+';" style="float:left;">'+button_title+'</button>'+
	   	 '<div id="delta-message-action-loader-'+uniq_id+'" style="display:none; float:right; margin:-1px -5px 0px 0px;"><img src="/img/cms/loader-form.gif" border="0" align="absmiddle">&nbsp;</div>'+
	   	 '<div style="clear:both;"></div>'+
   	'';
       
    $("#delta-message-action").html(
    	'<div class="delta-message-container process-info" style="width:450px;">' +   
    		'<div style="position:absolute; right:20px; top:20px;"><a title="Отменить" onclick="'+cancel_js+';" href="javascript:void(0);" class="close"><img height="12" border="0" align="absmiddle" style="margin:3px 5px 0px 0px;" alt="Отменить" src="/img/cms/message/close.png">Отменить</a></div>' +
    		'<div class="delta-message-container-content">'+content+'</div>' + 
    		'<div class="delta-message-container-button" style="margin:20px 0px 10px 0px;">'+buttons+'</div>' +
    	'</div>'
    );   
	             
	$.blockUI.defaults.css = {top: '20%', left:	'35%'};
    $.blockUI({ message: $("#delta-message-action") });  
    if (typeof $('.blockMsg').draggable === 'function') {
    	$('.blockMsg').draggable({cursor: "move", cancel: ".delta-message-container-content", containment: "window"});
    }	 
    
    $('.blockMsg').css('left', Math.floor(($(window).width() / 2) - ($('.blockMsg').width() / 2))+'px');
    return false;
}

function delta_loader_start(uniq_id){
	if (typeof(uniq_id) == "undefined") {
		$("div[id^='delta-message-action-loader']").show();
	} else {   
		$("#delta-message-action-loader-"+uniq_id).show();
	}
	return false;
}

function delta_loader_clear(){
	$("div[id^='delta-message-action-loader']").hide();
	return false;
}

 
function delta_open(box_id, p_top, p_left) {
	if (typeof(p_top) == 'undefined') p_top = "15%";  
	  
	$.blockUI.defaults.css = {top: p_top};  
    $.blockUI({ message: $("#"+box_id) });   
    
    if (typeof(p_left) == 'undefined' || p_left == "") {
    	$('.blockMsg').css('left', Math.floor(($(window).width() / 2) - ($('.blockMsg').width() / 2))+'px');
    } else {
    	$('.blockMsg').css('left', p_left);
    }	
    
    if (typeof $('.blockMsg').draggable === 'function') {
    	$('.blockMsg').draggable({cursor: "move", cancel: ".delta-message-container-content", containment: "window"});
    }	  

    return false;
}

function delta_simple(content, block_id, param_top, param_width) {
	if (typeof(block_id) == 'undefined') block_id = "0"; 
	if (typeof(param_top) == 'undefined') param_top = "15%"; 
	
	var width = (typeof(param_width) != 'undefined') ? "width:"+param_width : ""; 
   
   	if ($("#delta_simple_block_"+block_id).length == 0) { 
		$("<div id='delta_simple_block_"+block_id+"' />").appendTo("body"); 
	}
	   
	$("#delta_simple_block_"+block_id).css("width", width);
	$("#delta_simple_block_"+block_id).html(content);
	 
	$.blockUI.defaults.css = {top: param_top};
    $.blockUI({ message: $('#delta_simple_block_'+block_id) });    
    $('.blockMsg').css('left', Math.floor($(window).width() / 2 - parseInt(param_width) / 2)+'px');
  
} 
