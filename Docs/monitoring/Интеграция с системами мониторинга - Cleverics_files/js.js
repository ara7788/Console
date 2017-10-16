jQuery(document).ready(function ($) {
    jQuery(document).trigger('addAjaxOnForm');
});

// зададим обработчик с двумя дополнительными параметрами
jQuery(document).on('addAjaxOnForm', function (event) {
    var $forms = jQuery('.ajaxformcont form, #chronoform_Contact');

    jQuery.each($forms, function (i, val) {
        var formurl = $forms.eq(i).attr('action');
        $forms.eq(i).attr('action', formurl + '&format=raw');

        var _id = $forms.eq(i).attr('id');
        var name = $forms.eq(i).attr('name');
        var _name = $forms.eq(i).attr('name');
        if (!$forms.eq(i).hasClass('ajaxadded')) {
            _id += '_' + i;
            _name += '_' + i;
            $forms.eq(i).attr('id', _id);
            $forms.eq(i).addClass('ajaxadded');
            window['formCheck_' + name] = null;
            window['formCheck_' + _name] = null;
            document.id(_id).addClass('hasValidation');
            window['formCheck_' + _name] = new FormCheckMax(_id, {
                onValidateSuccess: function () {
                },
                submitByAjax: true,
                ajaxResponseDiv: true,
                onAjaxSuccess: function (responseTex) {
                    jQuery(this.form).parent().html(responseTex);
                    jQuery(document).trigger('addAjaxOnForm');
                    jQuery(document).trigger('reloadGrecaptcha');
                },
                display: {
                    showErrors: 0,
                    errorsLocation: 3
                }
            });
        }
    });
});

// зададим обработчик с двумя дополнительными параметрами
jQuery(document).on('reloadGrecaptcha', function (event) {
    var $els = jQuery('.g-recaptcha');

    jQuery.each($els, function (i, val) {
        var $el = $els.eq(i);
        if ($el.find('iframe').length < 1) {
            // console.log('$el.child().length', $el.find('iframe').length);
            var sitekey = $el.data('sitekey');
            var id = $el.prop('id');
            // console.log('id', id);
            grecaptcha.render(id, {
                'sitekey': sitekey,
                // 'theme' : 'dark'
            });
        }
    });


});

jQuery(document).ready(function ($) {
    // jQuery(document).trigger('reloadGrecaptcha');

(function () {
    if (window.addtocalendar)if (typeof window.addtocalendar.start == "function")return;
    if (window.ifaddtocalendar == undefined) {
        window.ifaddtocalendar = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript';
        s.charset = 'UTF-8';
        s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://addtocalendar.com/atc/1.5/atc.min.js';
        var h = d[g]('body')[0];
        h.appendChild(s);
    }
})();

});

