(function($) {
	'use strict';
	
	// Dropdown Menu
	$('#access ul.top-menu').superfish({ 
        delay:       300,
        animation:   {opacity:'show',height:'show'},
        speed:       'fast',
        dropShadows: false
	});
	
	// Add Element
	$('#access ul.top-menu ul').append('<span class="arrow" />'); 
	$('.articles .hentry:nth-child(3n)').addClass('third');
	$('.articles .hentry:nth-child(2n)').addClass('half');
	$('#respond h3').addClass('title');
	$('#leftcol, .bg-area .bg-left').prepend('<div class="before" />').append('<div class="after" />');

	// home widget title
	$('#rightcol .widget .title').each(function(){
		$('span',this).width( $('label',this).width() + 20 );
	});

	// Livesearch
	$('.search-widget input').focus(function() {
		$(this).parents('.search-widget').find('.livesearch').fadeIn();
	});

	$('.search-widget input').blur(function() {
	$(this).parents('.search-widget').find('.livesearch').fadeOut();
	});

	//icon close livesearch
	$('#warrior-advanced-search #s').focus(function() {
	$('#warrior-advanced-search i.live-search-reset').fadeIn();
	});

	$('#warrior-advanced-search #s').blur(function() {
	$('#warrior-advanced-search i.live-search-reset').fadeOut();
	});

	$('#warrior-advanced-search i.live-search-reset').click(function() {
	$('#warrior-advanced-search #s').val('');
	});

	// Responsive Menu
	$('#main-menu').mobileMenu({
		defaultText: 'Select Menu',
		className: 'main-menu',
		subMenuDash: '&ndash;'
	});

	$('#top select, #access select').each(function(){
		$(this).css('opacity',0).wrap('<div id="select-'+$(this).attr('class')+'" class="menu-select" />');
		$(this).parent().prepend('<span>'+$(this).find('option:first-child').text()+' <em class="fa fa-chevron-down"></em></span>');
	});

	$('#featured-posts .slide').each(function(){
	     window.location=$(this).find('a').attr('href'); 
	     return false;
	});

    $(window).load(function() {
    	// Equal height grid
        $('.warrior_latest_posts .articles .hentry, .warrior_sticky_posts .articles .hentry').responsiveEqualHeightGrid();
    });
})(jQuery);