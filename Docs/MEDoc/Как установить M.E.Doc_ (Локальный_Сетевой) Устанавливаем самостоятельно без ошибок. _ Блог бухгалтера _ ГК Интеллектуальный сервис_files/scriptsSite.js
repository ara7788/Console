setInterval(rotateCallButton2,2800);setInterval(rotateCallButton1,3600);function rotateCallButton1(){$("#rotateImageCall").rotate({animateTo:45,duration:800});}function rotateCallButton2(){$("#rotateImageCall").rotate({animateTo:-45,duration:800});}function chatsIntelserv(p1,p2){$("#rollChats").on('click',function(){$("#chatHelpFromIntellServ").animate({'width':'100px','height':'100px','border-radius':'50%'},700);$("#wrapChats").animate({'opacity':'0'},700);$("#goIntoChats").animate({'opacity':'1'},700);$("#wrapChats").css('display','none');$("#goIntoChats").css('display','block');});$("#goIntoChats").on('click',function(){$("#chatHelpFromIntellServ").animate({'width':'25%','height':'400px','border-radius':'5px'},700);$("#wrapChats").css('display','block');$("#wrapChats").animate({'opacity':'1'},700);$("#goIntoChats").animate({'opacity':'0'},700);$("#goIntoChats").css('display','none');});var showWrap=p1;var showChats=p2;if(showWrap==1){$("#clickButtonChats").on('click',function(){var edrpou=$("#edrpou").val();var phone=$("#phone").val();var fio=$("#fio").val();var qustion=$("#qustion").val();if(null==edrpou||edrpou.length<8||edrpou.length>10){alert('Код ЕГРПОУ может сожержать 8 цифр(Юр лицо) или 10 цифр(ФОП)');return;}if(null==phone||phone.length<=9){alert('Неправильный номер телефона');return;}if(null==qustion){alert('Напишите Ваш вопрос');return;}loadsFormsChats(edrpou,phone,fio,qustion);$("#showWrap").slideToggle();$("#showChats").slideToggle();loadHistoritext();setInterval(loadHistoritext,1000);showChats=2
$('#messageForm').on('click',function(){var textMessage=$("#message").val();if(null==textMessage){alert('Напишите сообщение для отправки');return;}$.ajax({type:"POST",url:"/actionForHelpCats",data:{textMessage:textMessage,show1:3},success:function(html){$('#message').val('');loadHistoritext();}});});});}else{$('#showWrap').css('display','none');}if(showChats==2){$('#showChats').css('display','block');loadHistoritext();setInterval(loadHistoritext,1000);$('#messageForm').on('click',function(){var textMessage=$("#message").val();if(null==textMessage){alert('Напишите сообщение для отправки');return;}$.ajax({type:"POST",url:"/actionForHelpCats",data:{textMessage:textMessage,show1:3},success:function(html){$('#message').val('');loadHistoritext();}});$('#textKonsult').scrollTop(10000*2);});showWrap=1;}$("#closeChats").on('click',function(){var show1=9;$.ajax({url:"/actionForHelpCats",type:"POST",data:{show1:show1},success:function(html){$("#textKonsult").empty();location.reload();}});});function loadHistoritext(){var show1=2;$.ajax({url:"/actionForHelpCats",type:"POST",data:{show1:show1},success:function(html){$("#textKonsult").empty();$("#textKonsult").append(html);}});}function loadsFormsChats(p1,p2,p3,p4){var show1=1;$.ajax({url:"/actionForHelpCats",type:"POST",data:{edrpou:p1,phone:p2,fio:p3,qustion:p4,show1:show1},success:function(data){$("#showWrap").empty();$("#showWrap").append(data);}});}}function menuMouserShow(){$("#selectworksCallCenter").mouseover(function(){$('.worksCallCenter').css('display','block');$('.selectPhones').css('background-color','rgba(0,0,0,0.6)');$('.selectPhones').css('text-decoration','underline');});$("#selectworksCallCenter").mouseout(function(){$('.worksCallCenter').css('display','none');$('.selectPhones').css('background-color','#f0ad4e');$('.selectPhones').css('text-decoration','none');});$("#selectPhonesCity").mouseover(function(){$('.cityPhones').css('display','block');$('.selectPhones2').css('background-color','rgba(0,0,0,0.6)');$('.selectPhones2').css('text-decoration','underline');});$("#selectPhonesCity").mouseout(function(){$('.cityPhones').css('display','none');$('.selectPhones2').css('background-color','#428bca');$('.selectPhones2').css('text-decoration','none');});$("#selectPhonesMobile").mouseover(function(){$('.mobilePhones').css('display','block');$('.selectPhones1').css('background-color','rgba(0,0,0,0.6)');$('.selectPhones1').css('text-decoration','underline');});$("#selectPhonesMobile").mouseout(function(){$('.mobilePhones').css('display','none');$('.selectPhones1').css('background-color','#428bca');$('.selectPhones1').css('text-decoration','none');});}function selectBuyMedoc(){var cert_show=0;var predpr;var lic_type;var cert;$('[name="predpr"]').on('click',(function(){predpr=$(this).val();if(predpr=='105'||predpr=='110'||predpr=='130'||predpr=='135'||(predpr>89&&predpr<96)){lic_type=7;licence(predpr,lic_type,cert);}else{licence(predpr,lic_type,cert);}}));$('[name="lic_type"]').on('click',(function(){lic_type=$(this).val()
licence(predpr,lic_type,cert);}));$('#cert').on('click','',function(){if(cert_show==0){cert=$(this).val();cert_show=1;}else if(cert_show==1){cert='';cert_show=0;}licence(predpr,lic_type,cert);});$('#ur_lic').on('click',function(){$("#result_select_sert").slideDown();$("#result_select_sert2").slideUp();});$('#fop').on('click',function(){$("#result_select_sert").slideUp();$("#result_select_sert2").slideDown();});function licence(predpr,lic_type,cert){$.ajax({type:'POST',url:'/buy_action_nomen',data:{UR:predpr,LIC:lic_type,CERT:cert},success:function(data){$("#result").empty();$("#result").append(data);}});}}function selectBuySota(){var cert_show=0;var predpr;var lic_type;var cert;$('[name="predpr"]').on('click',(function(){predpr=$(this).val();if(predpr=='105'||predpr=='110'||predpr=='130'||predpr=='135'||(predpr>89&&predpr<96)){lic_type=7;licence(predpr,lic_type,cert);}else{licence(predpr,lic_type,cert);}}));$('[name="lic_type"]').on('click',(function(){lic_type=$(this).val()
licence(predpr,lic_type,cert);}));$('#cert').on('click','',function(){if(cert_show==0){cert=$(this).val();cert_show=1;}else if(cert_show==1){cert='';cert_show=0;}licence(predpr,lic_type,cert);});function licence(predpr,lic_type,cert){$.ajax({type:'POST',url:'/buy_action_nomen',data:{UR:predpr,LIC:lic_type,CERT:cert},success:function(data){$("#result2").empty();$("#result2").append(data);}});}}function toolipCRM(){$('[data-toggle="tooltip"]').tooltip();}


function newPostOnSIte (){
	$.ajax({
		url:"/indexActionFile",
		type:"POST",
		data:{step:1},
		success:function (data){
			if(data>0){
				$("#newNews").append(data);
				$("#newNews").css("background-color","#d43f3a");
				$("#newNews").css("color","#FFF");


			}
		}
	});
	$.ajax({
		url:"/indexActionFile",
		type:"POST",
		data:{step:2},
		success:function (data){
			if(data>0){
				$("#newBlog").append(data);
				$("#newBlog").css("background-color","#d43f3a");
				$("#newBlog").css("color","#FFF");
			}	
		}
	});
}


function shadowTextFromIndexPage(){
	$("#med").mouseenter(function(){
		$("#shadowMedIspro").fadeTo(50, 0.95);
	});
	$("#med").mouseleave(function(){
		$("#shadowMedIspro").fadeTo(50, 0);
	})

	$("#learn").mouseenter(function(){
		$("#shadowLearnIspro").fadeTo(50, 0.95);
	});
	$("#learn").mouseleave(function(){
		$("#shadowLearnIspro").fadeTo(50, 0);
	})

	$("#upr").mouseenter(function(){
		$("#shadowUprIspro").fadeTo(50, 0.95);
	});
	$("#upr").mouseleave(function(){
		$("#shadowUprIspro").fadeTo(50, 0);
	})

	$("#ecp").mouseenter(function(){
		$("#shadowECPIspro").fadeTo(50, 0.95);
	});
	$("#ecp").mouseleave(function(){
		$("#shadowECPIspro").fadeTo(50, 0);
	})

	$("#medoc").mouseenter(function(){
		$("#shadowMedocIspro").fadeTo(50, 0.95);
	});
	$("#medoc").mouseleave(function(){
		$("#shadowMedocIspro").fadeTo(50, 0);
	})

	$("#sota").mouseenter(function(){
		$("#shadowSotaIspro").fadeTo(50, 0.95);
	});
	$("#sota").mouseleave(function(){
		$("#shadowSotaIspro").fadeTo(50, 0);
	})	

	$("#anti").mouseenter(function(){
		$("#shadowAnti").fadeTo(50, 0.95);
	});
	$("#anti").mouseleave(function(){
		$("#shadowAnti").fadeTo(50, 0);
	})
	
}



function shadowTextFromBasket(){
	$("#med").mouseenter(function(){
		$("#shadowMedIspro").fadeTo(50, 0.95);
	});
	$("#med").mouseleave(function(){
		$("#shadowMedIspro").fadeTo(50, 0);
	})

	$("#medEdo").mouseenter(function(){
		$("#shadowMedEdo").fadeTo(50, 0.95);
	});
	$("#medEdo").mouseleave(function(){
		$("#shadowMedEdo").fadeTo(50, 0);
	})

	$("#medZp").mouseenter(function(){
		$("#shadowMedZp").fadeTo(50, 0.95);
	});
	$("#medZp").mouseleave(function(){
		$("#shadowMedZp").fadeTo(50, 0);
	})

	$("#medEdoR").mouseenter(function(){
		$("#shadowMedEdoR").fadeTo(50, 0.95);
	});
	$("#medEdoR").mouseleave(function(){
		$("#shadowMedEdoR").fadeTo(50, 0);
	})

	$("#ecp").mouseenter(function(){
		$("#shadowEcp").fadeTo(50, 0.95);
	});
	$("#ecp").mouseleave(function(){
		$("#shadowEcp").fadeTo(50, 0);
	})

	$("#sota").mouseenter(function(){
		$("#shadowSota").fadeTo(50, 0.95);
	});
	$("#sota").mouseleave(function(){
		$("#shadowSota").fadeTo(50, 0);
	})	

	$("#pkp").mouseenter(function(){
		$("#shadowpkp").fadeTo(50, 0.95);
	});
	$("#pkp").mouseleave(function(){
		$("#shadowpkp").fadeTo(50, 0);
	})	

	$("#uslUd").mouseenter(function(){
		$("#shadowuslUd").fadeTo(50, 0.95);
	});
	$("#uslUd").mouseleave(function(){
		$("#shadowuslUd").fadeTo(50, 0);
	})

	$("#usl").mouseenter(function(){
		$("#shadowusl").fadeTo(50, 0.95);
	});
	$("#usl").mouseleave(function(){
		$("#shadowusl").fadeTo(50, 0);
	})
	$("#anti").mouseenter(function(){
		$("#shadowAnti").fadeTo(50, 0.95);
	});
	$("#anti").mouseleave(function(){
		$("#shadowAnti").fadeTo(50, 0);
	})
}






function scrollWindows(){
	 $(window).scroll(function () {
              if ($(this).scrollTop() > 0) {
                  $("#scroller").fadeIn();
              } else {
                  $("#scroller").fadeOut();
              }
          });
          $("#scroller").click(function () {
              $("body,html").animate({
                  scrollTop: 0
              }, 400);
              return false;
          });

}