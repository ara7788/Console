$(document).ready(function(){
    hideArticleBlock();
	// подчеркивание в главном меню в шапке
	$('header .bottom-part ul li a, header .main-upper-menu ul li a').hover(
		function(event){
			var me = $(this);
			me.find('.underline').css('width', me.width() + 'px');
		},
		function(event){
			var me = $(this);
			me.find('.underline:not(.active)').css('width', '0px');
		}
	);
    //Выделение подчеркиванием неактивных пунктов меню
    $('.inactive-item .underline').each(function(){
        var me = $(this);
        var itemWrapper = me.closest('.inactive-item');
        var css = {
            transition: 'none',
            width: itemWrapper.width() + 'px',
            left: itemWrapper.css('padding-left'),
        };
        $(this).css(css);
    })


	//=====================================
	$('.search-icon').click(showSearchForm);
	$('.search-form').click(function(event){
		event.stopPropagation();
	});
	$('.search-form input').keyup(function(event){
		if(event.keyCode == 27)
			$(this).val('').closest('.search-form').fadeOut(function(){
				$(this).removeClass('visible');
			});
	});
	//==========================================
	$('.additional-menu-icon').click(showAdditionalMenu);
	//==========================================
	$('.user-icon').hover(
		function(event){
			var infoBlock = $(this).find('.user-info');
			infoBlock.fadeIn();
		},
		function(event){
			var infoBlock = $(this).find('.user-info');
			infoBlock.fadeOut();
		}
	);

	// ===============================================
	$('.login-icon').click(showLoginForm);
	//================================================
	$('.login-form').click(function(event){event.stopPropagation();})

    //$('.login-form').mouseleave(function(event){
	// 	$(this).fadeOut(function(){
	// 		$(this).removeClass('visible');
	// 	});
	//});

    $('body')
    .click(function(event) {
        var loginForm = $('.login-form');
        if(loginForm.hasClass('visible'))
            loginForm.fadeOut(function(){$(this).removeClass('visible')});
    })
    .keyup(function(event){
        if(typeof event == 'undefined')
            event = window.event;
		if(event.keyCode == 27){
      		var loginForm = $('.login-form');
			if(loginForm.hasClass('visible'))
				loginForm.fadeOut(function(){$(this).removeClass('visible')});
			}
    });

    $('.login-form ').keyup(function(event){
		if(event.keyCode == 27)
			$(event.target).closest('form').fadeOut(function(){
				$(this).removeClass('visible');
			})
	});
	//==================================================

	setTimeout(function(){
		$('.errors-block').fadeOut();
	},3000);

    //Блок переходов
    $('.crossing-block .link-with-image').hover(
    		//hover in
    		function(event){
    			var me = $(this);
    			var defaultImage = me.find('.default-image');
    			var hoverImage = me.find('.hover-image');
    			defaultImage.hide();
    			hoverImage.show();
    		},
    		//hover out
    		function(event){
    			var me = $(this);
    			var defaultImage = me.find('.default-image');
    			var hoverImage = me.find('.hover-image');
    			defaultImage.show();
    			hoverImage.hide();
    		}
	)
    //end блок переходов

    //голосовалка
    $('#send_poll').click(function(event){
    	var me = $(event.target);
    	var form = me.closest('.poll-body').find('form');
    	var wrapper = me.closest('.poll-wrapper');
    	var selected = form.find('input[type="checkbox"]:checked, input[type="radio"]:checked');
    	if(selected.length > 0){
    		var data = form.serialize();
    		$.ajax({
    			url : '/ajax/poll',
    			dataType : 'html',
    			type : 'post',
    			data : data,
    		})
    		.done(function(response, textStatus, jqXHR){
    			if(jqXHR.status == 200){
    				var newContent = $(response);
    				wrapper.html(newContent.html());
    			}
    			console.log(response);
    			console.log(textStatus);
    			console.log(jqXHR);
    		})
    		.fail(function(jqXHR, textStatus, errorThrown){
    			console.log(textStatus);
    			console.log(errorThrown);
    			console.log(jqXHR);
    		});
    	}else{
    		data = 'nothing selected!!';
    	}
    	// console.log('Send poll button pressed!!');
    	// console.log(data);
    	// console.log(selected);
    	event.preventDefault();
    	return false;
    });
    //end голосовалка

    // Подписка на рассылку =============================
    $('#addToMaillist').click(function(event){
    	var me = $(event.target);
		addToMailList(me);
    	event.preventDefault();
    });
    // end голосовалка ===================================

    //архив ===============================================
    $('#toggle-archive-links').click(function(event){
    	var linksBlock = $('#prev-year-archive');
    	var me = $(this);
    	if(linksBlock.css('display') == 'none'){
    		linksBlock.slideDown();
    		me.addClass('up').removeClass('down');
    	}else{
    		linksBlock.slideUp();
    		me.addClass('down').removeClass('up');
    	}
    });

	//архив2 ===============================================
	$('#toggle-archive').click(function(event){
		$("#prev-year-archive2").toggle();
	});
    //=======================================================


    //дозагрузка некоторых блоков страницы
    postLoad();
    //========================================================

    // Кнопка "Вверх"
    $(document).scroll(function(event){
        var scrollVal = $(event.target).scrollTop();
        // var h = $(window).height() - 100;
        var h = 300;
        var upButton = $('#button-go-up');
        var upperMenu = $('header .fixed-wrapper .upper-part');

        if (scrollVal >= h && !upperMenu.hasClass('mini-sized')) {
            upperMenu.addClass('mini-sized');
            $('body').addClass('mini-sized-upper-menu');
        }
        if (scrollVal < h && upperMenu.hasClass('mini-sized')) {
            upperMenu.removeClass('mini-sized');
            $('body').removeClass('mini-sized-upper-menu');
        }

        if ( scrollVal >= h && upButton.css('display') == 'none') {
            $('#button-go-up').show();
        }
        if (scrollVal < h && upButton.css('display') != 'none') {
            $('#button-go-up').hide();
        }

    });

    $('#button-go-up').css({'margin-left' : ($('body > div.wrapper').width() / 2 + 60) * -1 + 'px'});
    $('#button-go-up a').click(function(event){
        $('html, body').animate({scrollTop:0}, 1000, 'swing');
    });
    // ===============

    // Слайдшоу в статьях (только на десктопах)

    if ($(window).width() >= 1020) {
        $('.article-body a.aecms-slideshow-photo').parent().each(function(i)
        {
                $('a.aecms-slideshow-photo',this).wrapAll('<div id="imageflowPics' + i + '" class="imageflow" />');
                $('a.aecms-slideshow-photo img',this).each(function(index){ $(this).attr('index', i + '' + index); $(this).parent().attr('index', i + '' + index); });
                $('a.aecms-slideshow-photo img',this).clone().appendTo('#imageflowPics' + i + '');

                var instanceOne = new ImageFlow();
                instanceOne.init({
                    ImageFlowID: 'imageflowPics' + i + '',
                    reflections: false,
                    //reflectionP: 0.5,
                    circular: false,
                    slideshow: false,
                    slideshowAutoplay: false,
                    //slideshowSpeed: 4000,
                    //animationSpeed: 50,
                    //imageScaling: false,
                    imageCursor: 'pointer',
                    slider: false,
                    //imageFocusM: 1.5,
                    //aspectRatio: 2.333,
                    //imagesHeight: 0.7,
                    //imagesM: 1.1,
                    //xStep: 120,
                    //percentLandscape: 118,
                    //percentOther: 100,
                    startID: 2,
                    opacity: true,
                    buttons: false,
                    onClick: function() { $('a.aecms-slideshow-photo[index=' + $(this).attr('index') + ']').click(); }
                });
        });

        $(' a.aecms-slideshow-photo').parent().each(function(i)
        {
            var length = 0;
            $('a.aecms-slideshow-photo',this).attr('rel','prettyPhoto[ppgroup2' + i + ']');
            if($(this).hasClass('imageflow')) length = 2;
            $('a.aecms-slideshow-photo:gt('+length+')',this).hide();
        });

        // $('a.aecms-highslide').attr('rel','prettyPhoto[ppgroup]');
        $('a.aecms-highslide').each(function(index){
            var me = $(this);
            me.attr('rel','prettyPhoto[ppgroup]').attr('data-index', index);
        })

        // $("a[rel^='prettyPhoto']").prettyPhoto({
        //     social_tools: '',
        //     theme: 'facebook',
        //     deeplinking: false,
        //     overlay_gallery: false,
        //     markup: '<div class="pp_pic_holder"> \
        //                     <div class="ppt">&nbsp;</div> \
        //                     <div class="pp_top"> \
        //                         <div class="pp_left"></div> \
        //                         <div class="pp_middle"></div> \
        //                         <div class="pp_right"></div> \
        //                     </div> \
        //                     <div class="pp_content_container"> \
        //                         <div class="pp_left"> \
        //                         <div class="pp_right"> \
        //                             <div class="pp_content"> \
        //                                 <div class="pp_loaderIcon"></div> \
        //                                 <div class="pp_fade"> \
        //                                     <a class="pp_close" href="#">Close</a> \
        //                                     <div class="pp_hoverContainer"> \
        //                                         <a class="pp_next" href="#">next</a> \
        //                                         <a class="pp_previous" href="#">previous</a> \
        //                                     </div> \
        //                                     <div id="pp_full_res"></div> \
        //                                     <div class="pp_details"> \
        //                                         <div class="pp_nav"> \
        //                                             <a href="#" class="pp_arrow_previous">Previous</a> \
        //                                             <p class="currentTextHolder">0/0</p> \
        //                                             <a href="#" class="pp_arrow_next">Next</a> \
        //                                         </div> \
        //                                         <p class="pp_description"></p> \
        //                                     </div> \
        //                                 </div> \
        //                             </div> \
        //                         </div> \
        //                         </div> \
        //                     </div> \
        //                     <div class="pp_bottom"> \
        //                         <div class="pp_left"></div> \
        //                         <div class="pp_middle"></div> \
        //                         <div class="pp_right"></div> \
        //                     </div> \
        //                 </div> \
        //                 <div class="pp_overlay"></div>'
        // });
        // $('a.aecms-highslide').append('<b></b>');


    }

    //===End Слайдшоу==========================================

    // на странице /cw изображения вписать в зависимости от ориентации (пропорций) исходного изображения
    $('.main-articles-wrapper.cw .article-item .image-wrapper img').each(function(){
        if (this.naturalWidth < this.naturalHeight) {
            $(this).attr('style', 'width:auto!important;height:100%!important');
        }
    });
    //=====================

    $('.moveable-img').each(function(){
        var me = $(this);
        var wrapLink = me.closest('a');
        var w = me.width();
        var h = me.height();
        if (w == 0 || h == 0) {
            return;
        }
        var ml = (w/2 - wrapLink.width() / 2) * -1;
        var mt = (h/2 - wrapLink.height() / 2) * -1;
        me.css('margin-left', ml + 'px');
        me.css('margin-top', mt + 'px');
    });

    $('body').on('click', '#wp-modal #wp-nonauth-user-data #send-wp-nonauth-user-data', wpSendNonAuthData);


    /*$('.table_row').each(function(){

      var item1 = $(this).children('.event-item:eq(0)');
      var item2 = $(this).children('.event-item:eq(1)');

      var height1 = parseInt(item1.height());
      var height2 = parseInt(item2.height());

      var getHeight = (height1 > height2) ? height1 : height2;

      if (!isNaN(getHeight)) {

          if (getHeight > 250) {
            $(this).children('.event-item').css('height', getHeight+'px');
          } else {
            $(this).children('.event-item').css('height', '250px');
          }
      }

    });*/



})//End document ready


$(window).load(function(){

  var href=window.location.href;

  var homePage = window.location.protocol+'//'+document.domain+'/';

   var path = document.domain+'/subscribe/discount';
   var path2 = document.domain+'/store/cw/2017/10/';

   if (href.indexOf(path) != '-1' || href.indexOf(path2) != '-1'){

      var me = $('.main-upper-menu ul li:eq(3) a');
      me.find('.underline').css('width', me.width() + 'px').css('left', '12px');
      me.find('.underline').addClass('active');

   }

});

$( window ).load(function() {
    //калькуляция высот блоков с аннотацией событий =========
    $('.event-item').each(function(){
    	var me = $(this);
    	if(!me.hasClass('ads')){
    		var children = me.children();
    		var totalHeight = 0;
    		for(var index = 0; index < children.length; index ++){
    			var elem = $(children[index]);
    			if(!elem.hasClass('event-annotation'))
    				totalHeight += elem.outerHeight() + parseInt(elem.css('margin-bottom'));
    		}
    		var target = me.find('.event-annotation');
    		var step = parseInt(target.css('line-height'));
    		var rows = Math.floor((me.height() - totalHeight) / step);

    		//target.css('height', rows * step + 'px');
    	}
    })
    //========================================================

    //Карусель новостей на главной
    $('.news-carousel').jcarousel(
        {
            transition  : true,
            wrap        : 'both',
            // center       : true,
            list        : '.news-list',
            items       : '.news-item',
        }
    ).jcarouselAutoscroll({
            interval: 7000,
            target: '+=2',
            autostart: false,
    });
    $('.news-carousel .prev-news').jcarouselControl({
        target : '-=2',
    });
    $('.news-carousel .next-news').jcarouselControl({
        target : '+=2',
    });
    // end Карусель новостей на главной

})
function postLoad() {
    var places = $('.post-load.wait');
    var blockNames = {};
    places.each(function(index, place){
        blockNames[index] =  $(place).data('blockname');
    })
    $.ajax({
        url         : '/postload',
        type        : 'post',
        dataType    : 'json',
        data        : {blockNames : blockNames},
    })
    .done(function(response){
        for(var blockName in response){
            var blockTarget = $('.post-load[data-blockname="' + blockName + '"]');
            var data = $(response[blockName]);
            data.css('display','none');
            data.appendTo(blockTarget);
            blockTarget.removeClass('wait');
            data.fadeIn(500);
        }
    })
    .fail(function(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
    });
}


function showSearchForm(event){
	var me = $(this);
	var searchForm = me.find('.search-form');
	if(searchForm.hasClass('visible')){
		searchForm.hide('slide',{
				direction:'right',
				complete: function(){
					$(this).removeClass('visible');
				}
		})
	}else{
		searchForm.show('slide', {
				direction : 'right',
				complete : function(){
					$(this).addClass('visible').find('input').focus();
				}
		})
	}
}
function showLoginForm(event){
	if (typeof(event) == 'undefined')
        event = window.event;

    var me = $(event.target);
	var wrapper = me.closest('.login-icon');
	var loginForm = wrapper.find('.login-form');
	if(loginForm.hasClass('visible')){
		loginForm.fadeOut(function(){
			$(this).removeClass('visible');
		});
	}else{
		var modalWindow = $('#wp-modal');
        if (typeof(modalWindow) != 'undefined' && modalWindow.length > 0)
            modalWindow.modal('hide');

        loginForm.fadeIn(function(){
			$(this).addClass('visible');
		});
	}
}
function showAdditionalMenu(event){
	var upperMenu = $('.main-upper-menu');
    if (upperMenu.hasClass('hide-on-mobile')) {
        upperMenu.css('display', 'none').removeClass('hide-on-mobile').slideDown();
    } else {
        upperMenu.slideUp(500, function(){$(this).addClass('hide-on-mobile')});
    }
}

//скрыть показать статьи
function hideArticleBlock() {
	$('.hideArticleBlock').hide();
	$('.show_button').click(function() {
		var rubric = $(this).attr('name').split('_')[1];
		if($('.hideArticleBlock.rubric_' + rubric).is(':visible')) {
			$('.hideArticleBlock.rubric_' + rubric).hide();
			$(this).text('Показать');
		} else {
			$('.hideArticleBlock.rubric_' + rubric).show();
			$(this).text('Скрыть');
		}
		return false;
	});
}


function toggleAdstring()
{
	curAdstring = (curAdstring+1)%lengthAdstring;
	$('.adstring').hide();
	var current = $('.adstring').eq(curAdstring).show();//fadeIn('fast');
    var wrapper = current.find('.adstring__text');
    var adstring = current.find('.moveable');

    if (!adstring.hasClass('running-string') && adstring.width() > wrapper.width()) {
        adstring.addClass('running-string');
    }

	// console.log(curAdstring);
}
var curAdstring    = 0;
var lengthAdstring = 0;
var bannerDelay = 5000;
bannerInterval     = setInterval ('toggleAdstring();',bannerDelay);
setInterval(function(){
    $('.running-string').each(function(){
        var me = $(this);
        var wrapper = me.closest('.adstring__text');
        var ml = wrapper.width() - me.width();
        var setTransitionCss = {
            '-webkit-transition': 'margin-left 5s linear',
            '-moz-transition': 'margin-left 5s linear',
            '-o-transition': 'margin-left 5s linear',
            'transition': 'margin-left 5s linear',
            'margin-left' : ml + 'px',
        }
        var noTransitionCss = {
            '-webkit-transition': 'none',
            '-moz-transition': 'none',
            '-o-transition': 'none',
            'transition': 'none',
            'margin-left' : '0px',
        }
        me.css(noTransitionCss).css(setTransitionCss);
    });
},bannerDelay);


$(function(){
	lengthAdstring = $('.adstring').length;
});
$('.tooltip-invoke').tooltip();

// White papers
function isWpAvalable(wpId){
    if(wpId == undefined)
        return false;
    $.ajax({
        url : '/ajax/wpIsAvalable',
        type : 'post',
        dataType : 'json',
        data : {wpId : wpId},
    })
    .done(function(response){
        if(response.status == true){
            //запросим файл
            window.location = '/resources/download_wp?id='  + response.wpId + '&token=' + response.token;
        }else{
            var showModal = response.errCode == 2 || response.errCode == 4 || response.errCode == 5;
            if(showModal){
                //модальное окно
                $('#wp-modal').remove();
                $(response.modalForm).insertAfter($('footer'));
                $('#wp-modal').modal({keyboard : true});
            }else{
                alert('Ошибка. ' + response.message);
            }
        }
    })
    .fail(function(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
        alert('Произошла ошибка. См. консоль');
    });
}
function tryAgain(clickedButton){
    var modalWrapper = $(clickedButton).closest('.modal');
    // var closeButton = $(modalWrapper.find('[data-dismiss="modal"]')[0]);
    var wpId = modalWrapper.data('wpid');
    modalWrapper.modal('hide').on('hidden.bs.modal',function(event){
        isWpAvalable(wpId);
    });
    // closeButton.click();
}
function wpSendNonAuthData(event) {
    var form = $(event.target).closest('form[id="wp-nonauth-user-data"]');
    var data = form.serialize();
    $.ajax({
        data : data,
        dataType : 'json',
        url : '/ajax/non_auth_userdata',
        type: 'post',
    })
    .done(function(response){
        if (response.status == 'OK') {
            $('#wp-modal').modal('hide');
            window.location = '/resources/download_wp?id='  + response.wpId + '&token=' + response.token;
        } else if(response.status == 'err') {
            var errPlace = $('#wp-modal .wp-error-place');
            var html = '<div class="alert alert-danger"><ul style="list-style-type: disc;padding-left: 20px;">';
            for(var k in response.errors) {
                html += '<li style="text-align: left;margin-bottom: 5px;">' + response.errors[k] + '</li>';
            }
            html += '</ul></div>';
            errPlace.html(html);
        }
        console.log(response);
    })
    .fail(function(a,b,c){
        alert('Что-то пошло не так. См. консоль');
        console.log(a);
        console.log(b);
        console.log(c);
    });

    return false;
}
