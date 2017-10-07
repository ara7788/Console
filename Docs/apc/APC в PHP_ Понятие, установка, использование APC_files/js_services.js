$(function() {

	var thisHost =  location.protocol + "//" + location.host; //+ "/sitear.ru"; // getting host name

	$('#scroll-to-bottom').on('click', function(){
		$("html,body").animate({scrollTop:$(document).height()},"slow");
	});

	$('#bytype').on('click', function(){ // sort by type
		$(this).addClass('sort_active');
		$('#byspec').removeClass('sort_active');
		$('.previews').slideUp(200, function(){
			$('.group_1').stop().slideDown(500);
		});
	});

	$('#byspec').on('click', function(){ // sort by specification
		$(this).addClass('sort_active');
		$('#bytype').removeClass('sort_active');
		$('.previews').slideUp(200, function(){
			$('.group_2').stop().slideDown(500);
		});
	});

	$('#partnerreg, .content .big').on('click', function(){ // external click on the partner link

		var serviceId = $('.content .big').attr('id');

		$.ajax({
			type: 'POST',
			url: thisHost+'/ajax/partner_link_click_register',
			data: {
				id : serviceId
			}
		});
	});

	$('#add_service_comment').on('click', function(){

		var nameVal = $('#rp-name').val();
		var mailVal = $('#rp-mail').val();
		var textVal = $('#rp-text').val();
		var idVal = $('#rp-id').val();

		$.ajax({
			type: 'POST',
			url: thisHost+'/ajax/get_service_comment',
			data: {
				name : nameVal,
				mail : mailVal,
				text : textVal,
				id_service : idVal
			},
			beforeSend: function(){
				$('#message').html('<font size="6" color="white">...</font>').fadeIn();
			},
			success: function(data){
				
				var obj = jQuery.parseJSON(data);

				if(obj.result){
					$('#rp-text').val('');
					$('#draft').fadeOut().html(obj.draftComment).fadeIn();
				}
				
				$('#message').fadeOut().html(obj.message).fadeIn();
			}
		});
	});

	$('.yes, .no').on('click', function(){

		var yesOrNo = $(this).attr('class');

		var idVal = $(this).closest('.text_block').attr('id');

		$.getJSON(thisHost+'/ajax/get_ip', function(data){
		  
		  var userIp = data.ip;
		  var cookieIp = getCookie(idVal); 

		  if(userIp != cookieIp){

			$.ajax({
				type: 'POST',
				url: thisHost+'/ajax/yes_or_no_service_comment',
				data: {
					id : idVal,
					param: yesOrNo
				},
				success: function(data){

					var obj = jQuery.parseJSON(data);

					if(obj.result){
						var resObj = $('#'+idVal+' span.good_or_no span.'+yesOrNo).next();
						var resObjVal = resObj.html();
						var newVal = Number(resObjVal)+1;

						resObj.fadeOut(400).html(newVal).fadeIn(400);
					}
					else{
						alert('problems on the server side, request is not completed');
					}
				}
			});
		  }
		  else {
		  	if(!$("#"+idVal+"value").length) {
		  		$('#'+idVal+' span.good_or_no').prepend('<font class="small" id="'+idVal+'value">нельзя оценивать дважды. </font>');
		  	}
		  }

		});
	});


});

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
