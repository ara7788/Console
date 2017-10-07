var html = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
    structure = $(html);
    structure.appendTo('body');

$(window).load(function(){
    pswpElement = document.querySelectorAll('.pswp')[0];
    options = {};

    photoSwipeSlides = Array();
    
    $('.aecms-highslide').each(function(){
        var me = $(this);
        var img = me.find('img');
        
        image = new Image();

        image.onload = function() {
            var host = location.host;
            var href = this.src;
            item = {
                w: this.width, 
                h: this.height, 
                src: this.src,
                dataIndex: this.dataIndex,
            };
            if (href.indexOf(host) != -1) {
                href = href.split(host)[1];
                var selector = '.aecms-highslide[href="' + href + '"]';
                var a = $(selector);
                item.msrc = a.find('img').attr('src');
                item.title = a.find('img').attr('title');
            }
            photoSwipeSlides.push(item);
        }           

        image.src = me.attr('href');
        image.dataIndex = me.data('index');
    })

    setTimeout(function(){
        $('.aecms-highslide').click(function(event){
            if (typeof event == 'undefined') {
                event = window.event;
            }
            var me = $(event.target);
            if (!me.hasClass('aecms-highslide'))
                me = me.parent();

            var all = $('.aecms-highslide');
            options.index = 0;
            for (var n in photoSwipeSlides) {
                if (photoSwipeSlides[n].dataIndex == me.data('index')) {
                    options.index = parseInt(n);
                    break;   
                }
            }
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, photoSwipeSlides, options);
            gallery.init();
            event.preventDefault();
            return false;
        })
        // gallery.init();
    },400);

}); 
