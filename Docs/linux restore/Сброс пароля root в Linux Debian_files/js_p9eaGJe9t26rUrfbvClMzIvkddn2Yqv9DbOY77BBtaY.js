 //$ = jQuery; add for Drupal JQ
$ = jQuery;
$( document ).ready(function() {

	// Detect Bootstrap response
	$('body').after('<div class="device-xs visible-xs"></div><div class="device-sm visible-sm"></div><div class="device-md visible-md"></div><div class="device-lg visible-lg"></div>');
	prepareResponse();
	$(window).resize(function () {
		prepareResponse();
	});
	
	$('#p-menu').append('<span id="xs-menu-close" class="visible-xs" style="position: absolute; height: 50px; font-size: 26px; width: 50px; right: 0; top: 0; text-align: center; cursor: pointer; color: #fff;">x</span>');
	$('#xs-menu-close').click(function () {
		$('#p-menu').hide();
	});
	$('#xs-menu').click(function () {
		$('#p-menu').slideToggle(200);
	});
	
	
	/* load colobox*/
	if($('a.colorbox').length) {
		$.getScript( "//cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.6.3/jquery.colorbox-min.js" )
			  .done(function( script, textStatus ) {
				$('a.colorbox').colorbox();
				$.extend($.colorbox.settings, {
					current: "{current}/{total}",
					previous: "назад",
					next: "вперёд",
					close: "закрыть",
					xhrError: "Не удалось загрузить содержимое.",
					imgError: "Не удалось загрузить изображение.",
					slideshowStart: "начать слайд-шоу",
					slideshowStop: "остановить слайд-шоу"
				});
			  });
		$('head').append('<link rel="stylesheet" type="text/css" href="/sites/all/themes/it2/css/colorbox.css" media="all" />');
	}
	
	// Plans and costs
	$('.plan').attr('data-base-cost', function (e) {
		return $(this).find('.header span.cost').text().replace(/[^0-9\.]/gi,'');
	});
	price_cost();
	$('.plan select').change(function (e) {
		price_cost();
	});
	
	
	//Scroll
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
            if($target.selector == '#like') {
                for(i=0;i<2;i++) {
                    $('#like').fadeTo(300, 0.5).fadeTo(100, 1);
                }
            }
	    });
	});
    
    // Affix
    $('.region-sidebar-second .likes').affix({
      offset: {
        top: $(".region-sidebar-second .likes").offset().top,
        bottom: $('#footer').outerHeight(true)+100,
      }
    })
	
});

// Cost the price
function price_cost() {
	$('.plan').each(function() {
		var factor = 1;
		var name = $(this).find('.name').text();
		if($(this).find('select[name="time"]').val()) {
			factor = factor*$(this).find('select[name="time"]').val();
		};
		if($(this).find('select[name="hour"]').val()) {
			factor = factor*$(this).find('select[name="hour"]').val();
		};
		if($(this).find('select[name="response"]').val()) {
			factor = factor*$(this).find('select[name="response"]').val();
		};
		$(this).find('span.cost').html(prepare_cost($(this).attr('data-base-cost') * factor,  $(this).find('span.stock').text()));
		
		// All options
		var summary = '';
		$(this).find('option:selected').each(function () {
			summary += $(this).closest('li').find('label').text() + ' ' +$(this).text()+ '\n';
		});
		$(this).find('input[name="info"]').val('Тариф: ' + name + '\n' + summary);
	});
}


function prepare_cost(cost, stock) {
	cost = parseInt(cost);
	stock = parseInt(stock);
	var price = cost;
	if(!stock) {
		price = format_price(cost);
		cost = '';
	} else {
		stock = 1 - stock/100;
		price = format_price(cost*stock);
		cost = '<strike>'+format_price(cost)+'</strike> ';
	}
	
	return cost+price;
}

function format_price(price) {
	return price.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
}

// Detect adaptive response
function prepareResponse() {
	if( isBreakpoint('md') || isBreakpoint('lg') ) {
		prepareDesktop();
    } else if(isBreakpoint('sm')) {
		prepareTablet();
	}
	else {
		prepareMobile();
	}
}

//Only Mobile function 
function prepareMobile() {
	$('#p-menu').css('height', '100%').addClass('w-100');
	$('#p-menu a').addClass('text-white size-4');
	
	$('#p-menu .root.expanded > ul').hide();
	$('#p-menu .root.expanded').unbind('mouseenter mouseleave');
	
	$('#p-menu').hide();
    
    // affix
    //$('.region-sidebar-second .likes').width('auto');
}
//Only Tablet function 
function prepareTablet() {
	$('#p-menu').show();
	$('#p-menu .root.expanded').unbind('mouseenter mouseleave');
	$('#p-menu').css('height', 'auto').removeClass('w-100');
	$('#p-menu a').removeClass('text-white size-4');
    
     // affix
    //$('.region-sidebar-second .likes').width('auto');
}
//Only Desktop function 
function prepareDesktop() {
	$("#p-menu .root.expanded").hover(function() {
		$(this).css('background', '#1e1e1e').css('background', 'rgba(30, 30, 30, 0.95)')
		$(this).find('> a').addClass('text-white');
		$(this).find("> ul").slideDown('fast'); 
	} , function() {
		$(this).css('background', 'inherit');	
		$(this).find('> a').removeClass('text-white');
		$(this).find("> ul").hide(); 
	});
	
	$('#p-menu').show();
	
	$('#p-menu').css('height', 'auto').removeClass('w100');
	$('#p-menu a').removeClass('text-white size-4');
    
    // affix
    //$('.region-sidebar-second .likes').width($('.region-sidebar-second').width());
}

//Detect Bootstrap response
function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}

// Affix
+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
;
