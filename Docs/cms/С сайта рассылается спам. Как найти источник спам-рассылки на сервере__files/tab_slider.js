
//Tab slider
		 var tpj=jQuery;					
					var revapi34;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_35_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_35_1");
						}else{
							revapi34 = tpj("#rev_slider_35_1").show().revolution({
								sliderType:"standard",
								jsFileLocation:"../../revolution/js/",
								sliderLayout:"fullwidth",
								delay:9000,
								gridwidth:1170,
                        					gridheight:620,
								navigation: {
									keyboardNavigation:"on",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									onHoverStop:"on",
									touch:{
										touchenabled:"on",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
									,
									arrows: {
										//style:"gyges",
										enable:true,
										hide_onmobile:false,
										hide_over:640,
										hide_onleave:false,
										tmp:'',
										left: {
											h_align:"left",
											v_align:"bottom",
											h_offset:70,
											v_offset:40
										},
										right: {
											h_align:"right",
											v_align:"bottom",
											h_offset:70,
											v_offset:40
										}
									}
									,
									tabs: {
										style:"hesperiden",
										enable:true,
										width:285,
										height:150,
										min_width:850,
										wrapper_padding:0,
										wrapper_color:"transparent",
										wrapper_opacity:"0",
										tmp:'<div class="tp-tab-title">{{title}}</div><div class="tp-tab-desc">{{description}}</div>',
										visibleAmount: 3,
										hide_onmobile: true,
										hide_under:850,
										hide_onleave:false,
										hide_delay:200,
										direction:"horizontal",
										span:false,
										position:"inner",
										space:30,
										h_align:"bottom",
										v_align:"bottom",
										h_offset:0,
										v_offset:0
									}
								},
								viewPort: {
									enable:true,
									outof:"pause",
									visible_area:"80%"
								},
								
								
								shadow:0,
								spinner:"off",
								stopLoop:"off",
								stopAfterLoops:-1,
								stopAtSlide:-1,
								shuffle:"off",
								autoHeight:"off",
								hideThumbsOnMobile:"on",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
						}
                    });