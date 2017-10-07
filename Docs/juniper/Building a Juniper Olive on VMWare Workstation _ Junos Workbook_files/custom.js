// Navigational Menu ddsmoothmenu
jQuery(document).ready(function($) {

ddsmoothmenu.init({
	mainmenuid: "menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'navigation', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})
					   


$("input:checkbox, input:radio, input:file").uniform();


// add js class to html tag
$('html').addClass('js');

// Responsive Navigation Menu by SelectNav
  selectnav('nav', {
  label: '- Navigation Menu - ',
  nested: true,
  indent: '-'
});

// Carousel Slider

// Sliding Text and Icon Menu Style
	$('#sti-menu').iconmenu();

// Accordion
    $("#accordion").accordion({
	   autoHeight: false,
       active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
    $("#accordion2").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion3").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion4").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion5").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion6").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion7").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion8").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion9").accordion({
	   autoHeight: false,
	   active: '.selected', 
       selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});
	$("#accordion10").accordion({
	   autoHeight: false,
	   //active: '.selected', 
       //selectedClass: 'active', 
	   icons: { "header": "plus", "headerSelected": "minus" }
	});


// Progress Bar
$(".meter > span").each(function() {
$(this)
	.data("origWidth", $(this).width())
	.width(0)
	.animate({
		width: $(this).data("origWidth")
	}, 1200);
});

// Alert Boxes
// Closing notifications 
// this is the class that we will target
$(".hideit").click(function() {
//fades the notification out	
  $(this).fadeOut(600);});	

// Tooltips

	/* Adding a colortip to any tag with a title attribute: */

	$('[data]').colorTip({color:'yellow'});


// Tabs
$("#horizontal-tabs").tytabs({
  tabinit:"1",
  fadespeed:"fast"
  });
$("#horizontal-tabs.a").tytabs({
  tabinit:"1",
  prefixtabs:"taba",
  prefixcontent:"contenta",
  fadespeed:"fast"
  });
$("#horizontal-tabs.b").tytabs({
  tabinit:"1",
  prefixtabs:"tabb",
  prefixcontent:"contentb",
  fadespeed:"fast"
  });
$("#horizontal-tabs.c").tytabs({
  tabinit:"1",
  prefixtabs:"tabc",
  prefixcontent:"contentc",
  fadespeed:"fast"
  });

$("#vertical-tabs").tytabs({
  prefixtabs:"tabz",
  prefixcontent:"contentz"
  });
$("#vertical-tabs.a").tytabs({
  prefixtabs:"taba",
  prefixcontent:"contenta"
  });
$("#vertical-tabs.b").tytabs({
  prefixtabs:"tabb",
  prefixcontent:"contentb"
  });
$("#vertical-tabs.c").tytabs({
  prefixtabs:"tabc",
  prefixcontent:"contentc"
  });


// Toggle
	
$('#toggle-view li h3').live('click', function() {

var text = $(this).siblings('div.panel');

if (text.is(':hidden')) {
	text.slideDown('200');
	$(this).siblings('span').html('-');		
} else {
	text.slideUp('200');
	$(this).siblings('span').html('+');		
}

});


// Carousel slider
$('.slidewrap').carousel({
	slider: '.slider',
	slide: '.slide',
	slideHed: '.slidehed',
	nextSlide : '.next-slide',
	prevSlide : '.prev-slide',
	addPagination: false,
	addNav : false,
	speed: 500 // ms.
});

$('.slidewrap1').carousel({ 
namespace: "carousel1" // Defaults to “carousel”.
})

$('.slidewrap2').carousel({ 
namespace: "carousel2" // Defaults to “carousel”.
})

$('.slidewrap3').carousel({ 
namespace: "carousel3" // Defaults to “carousel”.
})

$('.slidewrap4').carousel({ 
namespace: "carousel4" // Defaults to “carousel”.
})


// jQuery Prettyphoto Lightbox
	$("area[rel^='prettyPhoto']").prettyPhoto();
	
	$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'pp_default',slideshow:4000, opacity: 0.50, deeplinking: false, allow_resize: true, overlay_gallery: false, autoplay_slideshow: false});
	

// Isotope Filtering
      
var $container = $('#contain');

// initialize Isotope
  $container.isotope({
	// options...
	resizable: false, // disable normal resizing
	// set columnWidth to a percentage of container width
	masonry: { columnWidth: $container.width() / 12 }
  });

  // update columnWidth on window resize
  $(window).smartresize(function(){
	$container.isotope({
	  // update columnWidth to a percentage of container width
	  masonry: { columnWidth: $container.width() / 12 }
	});
  });
  

$container.isotope({
  itemSelector : '.item',
   animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: true
   }
});


var $optionSets = $('#options .option-set'),
	$optionLinks = $optionSets.find('a');

$optionLinks.click(function(){
  var $this = $(this);
  // don't proceed if already selected
  if ( $this.hasClass('selected') ) {
	return false;
  }
  var $optionSet = $this.parents('.option-set');
  $optionSet.find('.selected').removeClass('selected');
  $this.addClass('selected');

  // make option object dynamically, i.e. { filter: '.my-filter-class' }
  var options = {},
	  key = $optionSet.attr('data-option-key'),
	  value = $this.attr('data-option-value');
  // parse 'false' as false boolean
  value = value === 'false' ? false : value;
  options[ key ] = value;
  if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	// changes in layout modes need extra logic
	changeLayoutMode( $this, options )
  } else {
	// otherwise, apply new options
	$container.isotope( options );
  }
  
  return false;
});



});

