require.config({
    waitSeconds: 10,
    urlArgs: '' +  (new Date()).getTime(),
    paths: {

        // RequireJS plugins
        'domReady':         'lib/requirejs/domReady',
        'async':            'lib/requirejs/async',
        'propertyParser':   'lib/requirejs/propertyParser',
        'goog':             'lib/requirejs/goog', // requires async, propertyParser
        'normalize':        'lib/requirejs/normalize',
        'css':              'library/require-css/css.min',  // requires normalize

        // Lib
        '$':                'library/jquery/dist/jquery.min',
        'jqueryUi':         'lib/jquery-ui/js/jquery-ui-1.10.3.custom',
        'gapi':             '//apis.google.com/js/plusone',
        'gads':             '//pagead2.googlesyndication.com/pagead/js/adsbygoogle',
        'jquery.toc':       'lib/jquery.toc/jquery.toc.min',
        'slick':            '//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min',

        // Common Scripts
        'config':           'js/config',
        'fastNavigation':   'js/fast-navigation',

        'hljs': 'lib/highlight.js/highlight.pack',

        // Styles
        'adsStyles': 'css/ads'
    },
    shim: {
        '$': {
            deps: [ ],
            exports: '$',
            init: function () {
                return $;
            }
        },
        'jqueryUi': {
            deps: [ '$', 'css!lib/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom' ],
            exports: '$',
            init: function () {
                return $;
            }
        },
        'hljs': { deps: [], exports: 'hljs' },
        'gapi': { exports: 'gapi' },
        //'gads': { exports: 'adsbygoogle' },
        'jquery.toc': { deps: ['$'], exports: '$' },
        'slick': {
            deps: [
                '$',
                'css!//cdn.jsdelivr.net/jquery.slick/1.5.9/slick',
                'css!//cdn.jsdelivr.net/jquery.slick/1.5.9/slick-theme'
            ],
            exports: '$'
        }
    },
    map: {
        '*': {
            'css': 'library/require-css/css.min'
        }
    }
});