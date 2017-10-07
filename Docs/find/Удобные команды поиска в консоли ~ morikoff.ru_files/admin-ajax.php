
                if (window.addthis_product === undefined) {
                    window.addthis_product = "wpwt";
                }

                if (window.wp_product_version === undefined) {
                    window.wp_product_version = "wpwt-3.0.0";
                }

                if (window.wp_blog_version === undefined) {
                    window.wp_blog_version = "4.8";
                }

                if (window.addthis_share === undefined) {
                    window.addthis_share = {"passthrough":{"twitter":{"via":"morikoff"}}};
                }

                if (window.addthis_config === undefined) {
                    window.addthis_config = {"data_track_clickback":true,"data_ga_property":"UA-2930632-10","data_ga_social":true,"ui_atversion":"300"};
                }

                if (window.addthis_layers === undefined) {
                    window.addthis_layers = {};
                }

                if (window.addthis_layers_tools === undefined) {
                    window.addthis_layers_tools = [];
                } else {
                    
                }


                if (window.addthis_plugin_info === undefined) {
                    window.addthis_plugin_info = {"info_status":"enabled","cms_name":"WordPress","plugin_name":"Website Tools by AddThis","plugin_version":"3.0.0","plugin_mode":"AddThis","anonymous_profile_id":"wp-82490fdc3cef1fb2e6cefdc07f627c82","page_info":{"template":false}};
                }

                
                    (function() {
                      var first_load_interval_id = setInterval(function () {
                        if (typeof window.addthis !== 'undefined') {
                          window.clearInterval(first_load_interval_id);
                          if (Object.getOwnPropertyNames(window.addthis_layers).length > 0) {
                            window.addthis.layers(window.addthis_layers);
                          }
                          for (i = 0; i < window.addthis_layers_tools.length; i++) {
                            window.addthis.layers(window.addthis_layers_tools[i]);
                          }
                        }
                     },1000)
                    }());
                
            