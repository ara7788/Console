
var loader_hidden = false;

function hideLoader() {
   if (loader_hidden) return;

   loader_hidden = true;

   $(".loader").fadeOut('slow');
   jQuery('body').delay(350).css({'overflow':'visible'});
}

jQuery(window).load(function(){
   hideLoader();
});

setTimeout('hideLoader();', 4000);

jQuery(function($) {'use strict',
	"use strict";

// ============= Initiat WOW JS ================
	new WOW().init();
// ============= Parallax JS ===================
	$('#recent_project').parallax("50%", 0.1);
	$('.finance_bg_text').parallax("50%", 0.1);
	$('#background_para').parallax("50%", 0.2);
	$('#bg_text').parallax("50%", 0.1);
	$('#finance_bg_text_2').parallax("50%", 0.1);
	$('#logistic_bg_text_3').parallax("50%", 0.1);
	$('#bg_text').parallax("50%", 0.1);
	$('.callback_bg').parallax("50%", 0.1);
// ============= Revolution Slider =============
var revapi;
		revapi = jQuery("#rev_slider").revolution({
			sliderType:"standard",
			sliderLayout:"fullwidth",
			delay:5000,
			navigation: {
				arrows:{enable:true}				
			},
			touch:{
			 touchenabled:"on",
			 swipe_threshold: 75,
			 swipe_min_touches: 1,
			 swipe_direction: "horizontal",
			 drag_block_vertical: false
		 },			
			gridwidth:1170,
			gridheight:788		
});	
var revapi;
		revapi = jQuery("#rev_slider_3").revolution({
			sliderType:"standard",
			sliderLayout:"fullwidth",
			hide_under:778,
			delay:5000,
			navigation: {
				arrows:{enable:true}				
			},
			touch:{
			 touchenabled:"on",
			 swipe_threshold: 75,
			 swipe_min_touches: 1,
			 swipe_direction: "horizontal",
			 drag_block_vertical: false
		 },			
			gridwidth:1170,
			gridheight:920		
});	
// For Services Slider    
$("#services_slider").owlCarousel({
     
          autoPlay: 3000, //Set AutoPlay to 3 seconds
     
          items : 3,
		  pagination : false,
		  navigation : true,
		  navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"],
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
});
// For Our Partners					
$("#our-partner-slider").owlCarousel({
     
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 5,
		  navigation : true,
		  pagination : false,
		  navigationText: [
			"<img src='images/errow_left.png'>",
			"<img src='images/errow_right.png'>"],
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
 });
// For About Us
$("#about_slider").owlCarousel({
		  autoPlay: true, //Set AutoPlay to 3 seconds
		  items : 1,
		  navigation : false,
		  pagination : true
});
// Map Banner 
  var owl = $("#map_banner");

  owl.owlCarousel({
    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : false,
    pagination: true,
    singleItem : true,
    transitionStyle : "goDown"
  });
// Recent Projects
$(".recent_project-slider").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          items : 3,
		  navigation : true,
		  pagination : false,
		  navigationText: [
			"<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
			"<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
 });
 // Recent Projects _3
$(".recent_project_3_slider").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          items : 3,
		  navigation : true,
		  pagination : false,
		  navigationText: [
			"<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
			"<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
 });
// For Testinomials
$("#testimonial-slider").owlCarousel({
		autoPlay: 3000, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		pagination:true,
		paginationNumbers:false,
 
 });
 // For Testinomials
/*$("#testimonial-slider_2").owlCarousel({
		autoPlay: 3000, 
		items : 2,
		slideSpeed : 300,
		paginationSpeed : 400,
		pagination:true,
		paginationNumbers:false,
 
 });*/
// For Latest News
$("#latest_news-slider").owlCarousel({
		autoPlay: 3000, 
		items : 2,
		slideSpeed : 300,
		paginationSpeed : 400,
		pagination:true,
		paginationNumbers:false,
 
 });
 // For Latest News
$("#latest_news-slider_1").owlCarousel({
		autoPlay: 3000, 
		items : 3,
		slideSpeed : 300,
		paginationSpeed : 400,
		paginationNumbers:false,
		dots:true,
 
 });
// For Team
$("#our_team_slider").owlCarousel({
		autoPlay: 2000,
		items : 4,
                paginationSpeed : 400,
		pagination : true
});

// For Team
$("#our_team_slider1").owlCarousel({
		autoPlay: 2000,
		items : 4,
                paginationSpeed : 400,
		pagination : true
});

$("#pub_confer_photo").owlCarousel({
		autoPlay: 4000,
		items : 3,
                paginationSpeed : 700,
		pagination : true
});

// For Team
$("#our_team_slider_3").owlCarousel({
		autoPlay: 3000,
		items : 3,
        paginationSpeed : 400,
		pagination : false,
		navigation : true,
		pagination : false,
		navigationText: [
		"<i class='fa fa-angle-left' aria-hidden='true'></i>",
		"<i class='fa fa-angle-right' aria-hidden='true'></i>"],
});
// For Project SLider
$("#project_slider").owlCarousel({
		  autoPlay: true, //Set AutoPlay to 3 seconds
		  items : 1,
		  navigation : false,
		  pagination : true
});
// Shope Slider
$("#shop-slider").owlCarousel({
     
          autoPlay: false, //Set AutoPlay to 3 seconds
          items : 1,
		  navigation : true,
		  pagination : false,
		  navigationText: [
			"<img src='images/errow_left.png'>",
			"<img src='images/errow_right.png'>"],
 });
$("#shop_2_slider").owlCarousel({
		autoPlay: 3000,
		items : 3,
        paginationSpeed : 400,
		pagination : true
});
                    
  $('#testimonial-slider_2').owlCarousel({
		center: true,
		items: 3,
		loop: true,
		margin: 0,
        dots: true,
        dotData: true,
   

	});
// ============= For Search Icon Effect =============
	 $('a[href="#search"]').on('click', function(event) {
		 event.preventDefault();
		 $('#search').addClass('open');
		 $('#search > form > input[type="search"]').focus();
	 });
	 $('#search, #search button.close').on('click keyup', function(event) {
	  if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
		  $(this).removeClass('open');
	  }
	 })
// ============= For Team Icon Effect =============
 	 $('a[href=".team"]').on('click', function(event) {
		 event.preventDefault();
		 $('#team').addClass('open');
		 $('#team > form > input[type="search"]').focus();
	 });
	 $('#team, #team button.close').on('click keyup', function(event) {
	  if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
		  $(this).removeClass('open');
	  }
	 });
// ============= Accordions ======================
 $(".items > li > a").on('click', function(e) {
	  e.preventDefault();
	  var $this = $(this);
	  if ($this.hasClass("expanded")) {
		 $this.removeClass("expanded");
	  } 
	  else {
	  $(".items a.expanded").removeClass("expanded");
	  $this.addClass("expanded");
	  $(".sub-items").filter(":visible").slideUp("normal");
	}
	  $this.parent().children("ul").stop(true, true).slideToggle("normal");
});
	   
// ============= TOGGLES ICON =============
		jQuery('.toggle-heading').on('click', function(){
			jQuery(this).find('i').toggleClass('fa-minus fa-plus');
		});

// ============= Rang Slider  Box =============
$(".selectbox").selectbox();
	$('.nstSlider').nstSlider({
		"left_grip_selector": ".leftGrip",
		"right_grip_selector": ".rightGrip",
		"value_bar_selector": ".bar",
		"value_changed_callback": function(cause, leftValue, rightValue) {
			$(this).parent().find('.leftLabel').text(leftValue);
			$(this).parent().find('.rightLabel').text(rightValue);
		}
});	
	
// ============= Cart =============
$("[name='checkbox2']").change(function() {
	if(!confirm('Do you wanna cancel me!')) {
		this.checked = true;
	}
});

$('#after').bootstrapNumber();
$('#colorful').bootstrapNumber({
	upClass: 'success',
	downClass: 'danger'
});
/**************** Progress *******************/		
	$('.progressbar1').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barcolor : "#f71735",
	});
	$('.progressbar2').progressBar({
		shadow : true,
		percentage : true,
		animation : true,
		barColor : "#f71735",
	});
	$('.progressbarPhp').progressBar({
		shadow : true,
		percentage : true,
		animation : true,
		animateTarget : true,
		barColor : "#f71735",
	});

	
/**************** Selected *******************/	
 $(setup)
    function setup() {
      $('.intro select').zelect({})
    }
});
jQuery(document).ready(function(){
	jQuery('.office_menu').find('ul').hide();
	jQuery('.office_menu').on('click', '.selected', function(){
		// jQuery(this).parent('.office_menu').find('ul').slideToggle();
		var checkClass = jQuery(this).hasClass('active');
		if(!checkClass){
			jQuery(this).addClass('active');
			jQuery(this).parent('.office_menu').find('ul').slideDown();
		}else{
			jQuery(this).removeClass('active');
			jQuery(this).parent('.office_menu').find('ul').slideUp();
		}
	});
	jQuery('.office_menu').on('click', 'ul a', function(e){
		e.preventDefault();
		jQuery('.addressbox').fadeOut();
		var clickDataVal = jQuery(this).data('office');

		var txt = jQuery(this).html();
		jQuery(this).parents('.office_menu').find('.selected').html(txt);
		jQuery(this).parents('.office_menu').find('.selected').removeClass('active');
		jQuery(this).parents('ul').slideUp();

		jQuery('.addressbox').each( function(){
			var elemDataVal = jQuery(this).data('office');
			if(clickDataVal == elemDataVal){
				jQuery(this).delay(300).fadeIn();
			}
		});
	});
	
});