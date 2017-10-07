var isiOs = navigator.userAgent.match(/iPad/i) != null || navigator.userAgent.match(/iPhone/i) != null || navigator.userAgent.match(/iPod/i) != null;
var isAndroid = navigator.userAgent.toLowerCase().match(/android/i) != null;
var isMobile = isiOs || isAndroid;

$(function(){
	clearInputs();
	
	$('.customSelect2').customSelect({
		selectStructure: '<div class="selectArea2"><a href="#" class="selectButton2"><span class="center2"></span><span class="right2">&nbsp;</span></a><div class="disabled2"></div></div>',
		optStructure: '<div class="selectOptions2"><ul></ul></div>',
		selectText: '.center2',
		selectBtn: '.selectButton2',
		selectDisabled: '.disabled2'
	});
	
	var currentUri = window.location.pathname;
	if (currentUri !== '/promotion/' &&
	    currentUri !== '/context/' &&
	    currentUri !== '/reputation/' &&
	    currentUri !== '/smm/'
	   ) {	
		jQuery('div.gallery').gallery({
			duration: 700,
			autoRotation: 4000,
			listOfSlides: 'ul.gallery-holder > li',
			switcher: 'ul.gallery-list > li',
			effect: true,
			event: 'mouseover'
		});
    } else {
    	$('a[href="'+currentUri+'"]').closest('li').addClass("active");
    	jQuery('div.gallery').gallery({
			duration: 700,
			autoRotation: 0,
			listOfSlides: 'ul.gallery-holder > li',
			switcher: 'ul.gallery-list > li',
			effect: true,
			event: 'mouseover'
		});
    }
	
	initSlide();
	
	if(!isMobile) $('.customSelect').customSelect();
	
	//jQuery('ul.tabset').tabs();
	jQuery('div.tabs-area').gallery({
		duration: 700,
		listOfSlides: '.tab-wrap > .tab-content',
		switcher: 'ul.tabset > li > a',
		effect: true,
		autoHeight: true
	});
	
	jQuery('.simplebox').simplebox();
	
		
	if (typeof $.fn.slider == 'function') {
		if(!isMobile){
			$( "#slider-range" ).slider({
				range: true,
				min: 0,
				max: 5000,
				values: [ 1600, 2400 ],
				slide: function( event, ui ) {
					$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
					$( "#from" ).text(ui.values[ 0 ] + ' $');
					$( "#to" ).text(ui.values[ 1 ] + ' $');
				},
                change: function(event, ui) {
                    $('#budget').val(ui.values[0] + '$ - ' + ui.values[1] + '$');
                }
			});
			$( "#from" ).text($( "#slider-range" ).slider( "values", 0 ) + ' $');
			$( "#to" ).text($( "#slider-range" ).slider( "values", 1 ) + ' $');
		}
		else{
			$( "#slider-range" ).parent().remove();
		}
	}
	$('.holder-up a.up').click(function(){
		$(window).scrollTo(0, 1000);
		return false;
	});
	initCustomers();
	initAjaxLoad();
	$('.cost, .scroll-to').click(function(){
		$(window).scrollTo($($(this).attr('href')), 500);
		return false;
	});
	initFormValidation();
	//initTextFail();
	initMove();
});

function initMove(){
	$('#header .slider').each(function(){
		var hold = $(this);
		var wrapper = $('#wrapper');
		var footer = $('#footer');
		var dif = 10;
		var top = hold.offset().top-dif;
		var bottom = footer.offset().top - hold.outerHeight(true);
		
		$(window).scroll(function(){
			animate();
		});
		$(window).resize(function(){
			bottom = footer.offset().top - hold.outerHeight(true);
			animate();
		});
		
		function animate(){
			if($(window).scrollTop() > top && $(window).scrollTop() < bottom){
				hold.animate({top: $(window).scrollTop() - top}, {queue:false, duration: 300});
			}
			else{
				if($(window).scrollTop() < top) hold.animate({top: 0}, {queue:false, duration: 300});
				if($(window).scrollTop() > bottom && bottom - top > 0) hold.animate({top: bottom-top}, {queue:false, duration: 300});
			}
			if(hold.outerHeight(true) + top > bottom+hold.outerHeight(true)) hold.animate({top: 0}, {queue:false, duration: 300});
			console.log(top);
		}
		animate();
	});
}

function initTextFail(){
	$('.text-fail').each(function(){
		var hold = $(this);
		var input = hold.find('input:text');
		var btn = hold.find('.btn-right');
		var box = hold.find('.customSelect2');
		var link = hold.find('.customSelect2 a');
		
		box.css({display: 'none'});
		
		btn.click(function(){
			if(!hold.hasClass('open')){
				box.slideDown(300, function(){
					hold.addClass('open');
				});
			}
			else{
				box.slideUp(300, function(){
					hold.removeClass('open');
				});
			}
			return false;
		});
		
		input.focus(function(){
			box.slideDown(300, function(){
				hold.addClass('open');
			});
		});
		
		link.click(function(){
			var temp = input.val();
			if(temp.length > 3){
				input.val(temp+', '+$(this).text());
			}
			else{
				input.val(temp+' '+$(this).text());
			}
			return false;
		});
		
		hold.hover(function(){
			box.addClass('hovering');
		}, function(){
			box.removeClass('hovering');
		});
		$('body').click(function(){
			if(!box.hasClass('hovering')){
				box.slideUp(300, function(){
					hold.removeClass('open');
				});
			}
		});
	});
}

// form validation
function initFormValidation() {
	var _errorClass = 'error';
	var _regEmail = /^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4}$/;
	var _regNum = /^[0-9]+$/;
	
	$('form.validate-form').each(function(){
		var _form = $(this);
		var clear = _form.find('.cliar');
		
		function checkFields() {
			
			var _flag = false;
			_form.find('.'+_errorClass).removeClass(_errorClass);

			// fields validation
			_form.find('input.required-email').each(function(){
				if(!_regEmail.test($(this).val()) || $(this).val() == $(this).attr('temp')) addError($(this));
			});
			_form.find('input.required-num').each(function(){
				if(!_regNum.test($(this).val()) || $(this).val() == $(this).attr('temp')) addError($(this));
			});
			_form.find('input.required, textarea.required').each(function(){
				if(!$(this).val().length || $(this).val() == $(this).attr('temp')) addError($(this));
			});
            _form.find("input.check_javascript").val("0");

			// error class adding
			function addError(_obj) {
				_obj.parent().addClass(_errorClass);
				_flag=true;
			}
			return _flag;
		}
		_form.find('input, textarea').each(function(){
			$(this).attr('temp', $(this).val());
		});

		// catch form submit event
		_form.submit(function(){
			if(checkFields()) {
				$(window).scrollTo(_form.find('.error').offset().top, 300);
				return false;
			}
            else
            {
            	
                var page = window.location.href;
                $.ajax({
                    type: 'POST',
                    url: '/order_form/post.php',
                    data: _form.serialize() + '&page=' + page,
                    dataType: 'json',
                    success: function(data)
                    {
                        if(data['error_code'] == 1)
                        {
                            _form.find('.captcha').parent().addClass(_errorClass);
                        }
                        else
                        {
                            if(data['type'] == 'order')
							{
								ga('send', 'event', 'zayavka', 'send_form');
								$.ajax({
									url:'/order/success.php',
									type:'POST',
									success: function(data){
											$('#order .modal_form').css('display','none');
											$('#order').css({'top':'50%','padding':'40px'});
											$('#order div.order_success').fadeIn(500).html(data);
                                            //_gaq.push(['_trackEvent', 'Incoming2', 'Submit', 'ORDER2']);
                                            $('body').append('<iframe src="http://seooki.ua/order_form/order_conversion.html" class="conv_farme" style="width: 1px;height: 1px;display: none;"></iframe>');
                                           
											setTimeout(function(){
												$("#order").fadeOut(100);
												$(".fader").fadeOut(200);
												$("#order div.order_success h2").remove();
											},2000);
										if($('#order .modal_form').css('display') == 'none')
											setTimeout(function(){$('#order .modal_form').css('display','block') }, 2500 )
									}
								});
									
								
							}
                            else
							{
								ga('send', 'event', 'kontakty', 'send_email');
								$('body').append('<iframe src="http://seooki.ua/order_form/contact_conversion.html" class="conv_farme" style="width: 1px;height: 1px;display: none;"></iframe>');
								
                                _form.html('<h2 style="margin-top: 150px; margin-left: 49px;">Ваше сообщение отправлено!</h2>');
							}
                        }
                    }

                });
                return false;
            }
		});
		clear.click(function(){
			_form.find('.'+_errorClass).removeClass(_errorClass);
			_form.find('input:text, textarea').val('');
			return false;
		});
	});
}

function initAjaxLoad(){
	$('.holder-blog').each(function(){
		var hold = $(this);
		var link = hold.find('.ajax-load');
		var box = hold.find('.hold-blog');
		var flag = true;
		
		link.click(function(){
			if(flag){
				var _this = $(this);
				flag = false;
				$.ajax({
					type: 'GET',
					dataType: 'html',
					url: _this.attr('href'),
					success: function(msg){
						if(msg != 'false'){
							box.append($(msg));
							if(!_this.hasClass('more')) link.parents('.holder-more').css({display: 'none'});
						}
						else{
							link.parents('.holder-more').css({display: 'none'});
						}
						$(window).trigger('resize');
						flag = true;
					},
					error: function(){alert('Server is unavailable. Refresh the page within 15 seconds.!');}
				});
			}
			return false;
		});
	});
}

function initCustomers(){
	$('.holder-customers .customers .hold-active').each(function(){
		var hold = $(this);
		var close = hold.find('span.close');
		var box = hold.find('span.hint');
		var fig = hold.find('a.figcaption');
		
		function start(){
			box.css({display: 'block'});
			var flag = close.is(':visible');
			if(flag) box.css({display: 'none'});
			else box.removeAttr('style');
			hold.find('.figure').unbind('click').click(function(){
				if(flag){
					$(window).trigger('closeAllBox');
					hold.addClass('active');
					if($(window).width() > 770){
						box.stop().css({
							left: -(hold.offset().left - $('#main').offset().left)
						});
					}
					else{
						box.stop().css({
							top: fig.position().top + fig.outerHeight(true)-10,
							left: -(hold.offset().left - $('#main').offset().left)
						});
					}
					box.stop().css({display: 'none'}).fadeIn(300, function(){
						box.css({display: 'block'});
					});
					return false;
				}
			});
			close.unbind('click').click(function(){
				
					box.stop().fadeOut(300, function(){
						box.css({
							display: 'none'
						});
						hold.removeClass('active');
					});
				
				return false;
			});
			
			box.unbind('hover').hover(function(){
				box.addClass('hovering');
			}, function(){
				box.removeClass('hovering');
			});
			$(window).unbind('click').click(function(){
				if(!box.hasClass('hovering')){
					$(window).trigger('closeAllBox');
				}
			});
			$(window).bind('closeAllBox', function(){
				if (!box.hasClass('hovering') && flag) {
					box.stop().fadeOut(300, function(){
						box.css({
							display: 'none'
						});
						hold.removeClass('active');
					});
				}
			});
		}
		start();
		$(window).resize(function(){
			hold.parent().removeClass('active');
			box.removeAttr('style');
			start();
		})
	});
}

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

function clearInputs(){
	$('input:text, input:password, textarea').each(function(){
		var _el = $(this);
		var _val = _el.val();
		_el.attr('alt', _val);
		_el.bind('focus', function(){
			if (this.value == _val) {
				this.value = '';
				$(this).parent().addClass('ready');
			}
			$(this).parent().addClass('input-focus');
		}).bind('blur', function(){
			if(this.value == '') {
				this.value = _val;
				$(this).parent().removeClass('ready');
			}
			$(this).parent().removeClass('input-focus');
		});
	});
}

/**
 * jQuery gallery min v1.1.0
 * Copyright (c) 2011 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/

jQuery.fn.gallery=function(options){return new Gallery(this.get(0),options);};function Gallery(context,options){this.init(context,options);};Gallery.prototype={options:{},init:function(context,options){this.options=jQuery.extend({infinite:false,duration:700,slideElement:1,autoRotation:false,effect:false,listOfSlides:'ul > li',switcher:false,disableBtn:false,nextBtn:'a.link-next, a.btn-next, .next',prevBtn:'a.link-prev, a.btn-prev, .prev',circle:true,direction:false,event:'click',IE:false,autoHeight:false,easing:'swing'},options||{});var _el=jQuery(context).find(this.options.listOfSlides);if(this.options.effect)this.list=_el;else this.list=_el.parent();this.switcher=jQuery(context).find(this.options.switcher);this.nextBtn=jQuery(context).find(this.options.nextBtn);this.prevBtn=jQuery(context).find(this.options.prevBtn);this.count=_el.index(_el.filter(':last'));if(this.options.switcher)this.active=this.switcher.index(this.switcher.filter('.active:eq(0)'));else this.active=_el.index(_el.filter('.active:eq(0)'));if(this.active<0)this.active=0;this.last=this.active;this.woh=_el.outerWidth(true);if(!this.options.direction)this.installDirections(this.list.parent().width());else{this.woh=_el.outerHeight(true);this.installDirections(this.list.parent().height());}if(!this.options.effect){this.rew=this.count-this.wrapHolderW+1;this.list.css({position:'relative'}).css(this.dirAnimate());this.switcher.removeClass('active').eq(this.active).addClass('active');}else{this.rew=this.count;this.list.css({opacity:0}).removeClass('active').eq(this.active).addClass('active').css({opacity:1}).css('opacity','auto');this.switcher.removeClass('active').eq(this.active).addClass('active');if(this.options.autoHeight)this.list.parent().css({height:this.list.eq(this.active).outerHeight()});}this.flag=true;if(this.options.infinite){this.count++;this.active+=this.count;this.list.append(_el.clone());this.list.append(_el.clone());this.list.css(this.dirAnimate());}this.initEvent(this,this.nextBtn,true);this.initEvent(this,this.prevBtn,false);if(this.options.disableBtn)this.initDisableBtn();if(this.options.autoRotation)this.runTimer(this);if(this.options.switcher)this.initEventSwitcher(this,this.switcher);},dirAnimate:function(){if(!this.options.direction)return{left:-(this.woh*this.active)};else return{top:-(this.woh*this.active)};},initDisableBtn:function(){this.prevBtn.removeClass('prev-'+this.options.disableBtn);this.nextBtn.removeClass('next-'+this.options.disableBtn);if(this.active==0||this.count+1==this.wrapHolderW)this.prevBtn.addClass('prev-'+this.options.disableBtn);if(this.active==0&&this.count+1==1||this.count+1<=this.wrapHolderW)this.nextBtn.addClass('next-'+this.options.disableBtn);if(this.active==this.rew)this.nextBtn.addClass('next-'+this.options.disableBtn);},installDirections:function(temp){this.wrapHolderW=Math.ceil(temp/this.woh);if(((this.wrapHolderW-1)*this.woh+this.woh/2)>temp)this.wrapHolderW--;if(this.wrapHolderW==0)this.wrapHolderW=1;},fadeElement:function(){if(jQuery.browser.msie&&this.options.IE){this.list.eq(this.last).css({opacity:0});this.list.removeClass('active').eq(this.active).addClass('active').css({opacity:'auto'});}else{this.list.eq(this.last).animate({opacity:0},{queue:false,easing:this.options.easing,duration:this.options.duration});this.list.removeClass('active').eq(this.active).addClass('active').animate({opacity:1},{queue:false,duration:this.options.duration,complete:function(){jQuery(this).css('opacity','auto');}});}if(this.options.autoHeight)this.list.parent().animate({height:this.list.eq(this.active).outerHeight()},{queue:false,duration:this.options.duration});if(this.options.switcher)this.switcher.removeClass('active').eq(this.active).addClass('active');this.last=this.active;},scrollElement:function($this){if(!$this.options.infinite)$this.list.animate($this.dirAnimate(),{queue:false,easing:$this.options.easing,duration:$this.options.duration});else $this.list.animate($this.dirAnimate(),$this.options.duration,$this.options.easing,function(){$this.flag=true});if($this.options.switcher)$this.switcher.removeClass('active').eq($this.active/$this.options.slideElement).addClass('active');},runTimer:function($this){if($this._t)clearTimeout($this._t);$this._t=setInterval(function(){if($this.options.infinite)$this.flag=false;$this.toPrepare($this,true);},this.options.autoRotation);},initEventSwitcher:function($this,el){el.bind($this.options.event,function(){$this.active=$this.switcher.index(jQuery(this))*$this.options.slideElement;if($this._t)clearTimeout($this._t);if($this.options.disableBtn)$this.initDisableBtn();if(!$this.options.effect)$this.scrollElement($this);else $this.fadeElement();if($this.options.autoRotation)$this.runTimer($this);return false;});},initEvent:function($this,addEventEl,dir){addEventEl.bind($this.options.event,function(){if($this.flag){if($this.options.infinite)$this.flag=false;if($this._t)clearTimeout($this._t);$this.toPrepare($this,dir);if($this.options.autoRotation)$this.runTimer($this);}return false;});},toPrepare:function($this,side){if(!$this.options.infinite){if(($this.active==$this.rew)&&$this.options.circle&&side)$this.active=-$this.options.slideElement;if(($this.active==0)&&$this.options.circle&&!side)$this.active=$this.rew+$this.options.slideElement;for(var i=0;i<$this.options.slideElement;i++){if(side){if($this.active+1<=$this.rew)$this.active++;}else{if($this.active-1>=0)$this.active--;}};}else{if($this.active>=$this.count+$this.count&&side)$this.active-=$this.count;if($this.active<=$this.count-1&&!side)$this.active+=$this.count;$this.list.css($this.dirAnimate());if(side)$this.active+=$this.options.slideElement;else $this.active-=$this.options.slideElement;}if(this.options.disableBtn)this.initDisableBtn();if(!$this.options.effect)$this.scrollElement($this);else $this.fadeElement();},stop:function(){if(this._t)clearTimeout(this._t);},play:function(){if(this._t)clearTimeout(this._t);if(this.options.autoRotation)this.runTimer(this);}}

function initSlide(){
	$('.none-box').not('.detected').each(function(){
		var hold = $(this);
		var link = hold.find('h3 > a');
		var box = hold.find('.gallery-list');
		hold.addClass('detected');
		
		link.click(function(){
			if(!hold.hasClass('open-box')){
				hold.addClass('open-box');
				box.stop().css({left: '-9999'}).slideDown(300);
			}
			else{
				hold.removeClass('open-box');
				box.stop().css({left: '0px'}).slideUp(300);
			}
			return false;
		});
	});
}

/**
 * jQuery Custom Select min v1.0.0
 * Copyright (c) 2012 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/

jQuery.fn.customSelect = function(_options) {
	var _options = jQuery.extend({
		selectStructure: '<div class="selectArea"><a href="#" class="selectButton"><span class="center"></span><span class="drop">drop</span> <span class="left-bg">left-bg</span></a><div class="disabled"></div></div>',
		selectText: '.center',
		selectBtn: '.selectButton',
		selectDisabled: '.disabled',
		optStructure: '<div class="selectOptions"><ul></ul></div>',
		maxHeight: false,
		optList: 'ul'
	}, _options);
	return this.each(function() {
		var select = jQuery(this);
		if(!select.hasClass('outtaHere')) {
			if(select.is(':visible')) {
				var replaced = jQuery(_options.selectStructure);
				var selectText = replaced.find(_options.selectText);
				var selectBtn = replaced.find(_options.selectBtn);
				var selectDisabled = replaced.find(_options.selectDisabled).hide();
				var optHolder = jQuery(_options.optStructure);
				var optList = optHolder.find(_options.optList);
				if(select.attr('disabled')) selectDisabled.show();
				select.find('option').each(function() {
					var selOpt = $(this);
					var _opt = jQuery('<li><a href="#">' + selOpt.html() + '</a></li>');
					if(selOpt.attr('selected')) {
						selectText.html(selOpt.html());
						_opt.addClass('selected');
					}
					_opt.children('a').click(function() {
						optList.find('li').removeClass('selected');
						select.find('option').removeAttr('selected');
						$(this).parent().addClass('selected');
						selOpt.attr('selected', 'selected');
						selectText.html(selOpt.html());
						select.change();
						optHolder.hide();
						return false;
					});
					optList.append(_opt);
				});
				replaced.width(select.outerWidth());
				replaced.insertBefore(select);
				replaced.addClass(select.attr('class'));
					optHolder.css({
						width: select.outerWidth(),
						display: 'none',
						position: 'absolute'
					});
				optHolder.addClass(select.attr('class'));
				jQuery(document.body).append(optHolder);
				
				var optTimer;
				replaced.hover(function() {
					if(optTimer) clearTimeout(optTimer);
				}, function() {
					optTimer = setTimeout(function() {
						optHolder.hide();
					}, 200);
				});
				optHolder.hover(function(){
					if(optTimer) clearTimeout(optTimer);
				}, function() {
					optTimer = setTimeout(function() {
						optHolder.hide();
					}, 200);
				});
				selectBtn.click(function() {
					if(optHolder.is(':visible')) {
						optHolder.hide();
					}
					else{
						optHolder.children('ul').css({height:'auto', overflow:'hidden'});
						optHolder.css({
							top: replaced.offset().top + replaced.outerHeight(),
							left: replaced.offset().left,
							display: 'block'
						});
						if(_options.maxHeight && optHolder.children('ul').height() > _options.maxHeight) optHolder.children('ul').css({height:_options.maxHeight, overflow:'auto'});
					}
					return false;
				});
				select.addClass('outtaHere');
			}
		}
	});
}

function initSlide(){
	$('.vacancy .box-vacancy').not('.detected').each(function(){
		var hold = $(this);
		var link = hold.find('h2 > a');
		var box = hold.find('.box-none');
		hold.addClass('detected');
		
		link.click(function(){
			if(!hold.hasClass('box-open')){
				hold.addClass('box-open');
				box.stop().css({display: 'none'}).slideDown(300, function(){
					$(window).trigger('resize');
				});
			}
			else{
				hold.removeClass('box-open');
				box.stop().css({display: 'block'}).slideUp(300, function(){
					$(window).trigger('resize');
				});
			}
			return false;
		});
	});
}

/**
 * jQuery tabs min v1.0.0
 * Copyright (c) 2011 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/

jQuery.fn.tabs=function(options){return new Tabs(this.get(0),options);};function Tabs(context,options){this.init(context,options);}Tabs.prototype={options:{},init:function(context,options){this.options=jQuery.extend({listOfTabs:'a.tab',active:'active',event:'click'},options||{});this.btn=jQuery(context).find(this.options.listOfTabs);this.last=this.btn.index(this.btn.filter('.'+this.options.active));if(this.last==-1)this.last=0;this.btn.removeClass(this.options.active).eq(this.last).addClass(this.options.active);var _this=this;this.btn.each(function(i){if(_this.last==i)jQuery($(this).attr('href')).show();else jQuery($(this).attr('href')).hide();});this.initEvent(this,this.btn);},initEvent:function($this,el){el.bind(this.options.event,function(){if($this.last!=el.index(jQuery(this)))$this.changeTab(el.index(jQuery(this)));return false;});},changeTab:function(ind){jQuery(this.btn.eq(this.last).attr('href')).hide();jQuery(this.btn.eq(ind).attr('href')).show();this.btn.eq(this.last).removeClass(this.options.active);this.btn.eq(ind).addClass(this.options.active);this.last=ind;}}

/**
 * jQuery simplebox v1.0.0
 * Copyright (c) 2012 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/

jQuery.fn.simplebox = function(options) { return new Simplebox(this, options); };

function Simplebox(context, options) { this.init(context, options); };

Simplebox.prototype = {
	options:{},
	init: function (context, options){
		this.options = jQuery.extend({
			duration: 300,
			linkClose: '.close, a.btn-close',
			divFader: 'fader',
			faderColor: 'black',
			overlayClick: true,
			opacity: 0.3,
			onOpen: function(){},
			afterOpen: function(){},
			onClose: function(){},
			afterClose: function(){}
		}, options || {});
		this.btn = jQuery(context);
		this.select = jQuery('body').find('select');
		this.flag = true;
		this.initFader();
		if(typeof options=='string')this.condition(options);
		else this.btnEvent(this,this.btn);
	},
	btnEvent: function($this, el){
		el.each(function(){
			if (!jQuery(this).attr('href')) jQuery(this).attr('link', jQuery(this).attr('title')).attr('title','')
		});
		el.unbind('click').click(function(){
			if (jQuery(this).attr('href')) $this.condition(jQuery(this).attr('href'));
			else $this.condition(jQuery(this).attr('link'));
			return false;
		});
	},
	calcWinWidth: function(){
		this.winWidth = jQuery('body').width();
		if (jQuery(document).width() > this.winWidth) this.winWidth = jQuery(document).width();
	},
	condition: function(obj){
		if(this.popup){
			var _this = this;
			_this.options.onClose();
			this.popup.fadeOut(this.options.duration, function(){
				_this.popup.css({left: '-9999px',top: '-9999px'}).show();
				_this.fader.unbind('click');
				_this.btnClose.unbind('click');
				_this.toPrepare(obj);
			});
		}
		else this.toPrepare(obj);
	},
	toPrepare: function(obj){
		this.popup = jQuery(obj);
		this.btnClose = this.popup.find(this.options.linkClose);
		
		if (jQuery.browser.msie) this.select.css({visibility: 'hidden'});
		this.calcWinWidth();
		this.winHeight = jQuery(window).height();
		this.winScroll = jQuery(window).scrollTop();
		
		this.popupTop = this.winScroll + (this.winHeight/2) - this.popup.outerHeight(true)/2;
		if (this.popupTop < 0) this.popupTop = 0;
		if (this.popupTop + this.popup.outerHeight(true) > jQuery(document).height()) this.popupTop = jQuery(document).height() - this.popup.outerHeight(true);
		
		this.popup.css({
			top: this.winScroll > 0 ? this.winScroll : 0,
			left: this.winWidth/2 - this.popup.outerWidth(true)/2
		}).hide();
		this.initAnimate(this);
		this.initCloseEvent(this, this.btnClose);
		if(this.options.overlayClick) this.initCloseEvent(this, this.fader);
	},
	initCloseEvent: function($this, el){
		el.click(function(){
			if($this.flag) {
				$this.flag = false;
				$this.options.onClose();
				$this.popup.fadeOut($this.options.duration, function(){
					$this.popup.css({left: '-9999px',top: '-9999px'}).show();
					if (jQuery.browser.msie) $this.select.css({visibility: 'visible'});
					$this.fader.unbind('click');
					$this.btnClose.unbind('click');
					$this.popup = false;
					$this.fader.fadeOut($this.options.duration, function(){$this.flag = true;$this.options.afterClose();});
				});
			}
			return false;
		});
	},
	initAnimate:function ($this){
		$this.flag = false;
		$this.options.onOpen();
		$this.fader.fadeIn($this.options.duration, function(){
			$this.popup.fadeIn($this.options.duration, function(){$this.flag = true;$this.options.afterOpen();});
		});
		jQuery(window).resize(function(){
			if ($this.popup.is(':visible')) {
				$this.calcWinWidth();
				$this.popup.animate({
					left: $this.winWidth/2 - $this.popup.outerWidth(true)/2
				}, {queue:false, duration: $this.options.duration});
			}
		});
	},
	initFader: function(){
		if (jQuery('div.'+this.options.divFader).length > 0) this.fader = jQuery('div.'+this.options.divFader);
		else{
			this.fader = jQuery('<div class="'+this.options.divFader+'"></div>');
			jQuery('body').append(this.fader);
			this.fader.css({
				position: 'fixed',
				zIndex: 999,
				left:0,
				top:0,
				width: '100%',
				height: '100%',
				background: this.options.faderColor,
				opacity: this.options.opacity
			}).hide();
		}
	}
}


/** Jump menu  **/
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}