riot.tag2('main', '<topbar></topbar><controlbar></controlbar><epgnow></epgnow><settingswrapper id="settingsWidget"></settingswrapper><shareform></shareform><likeform></likeform><channelspanel></channelspanel><programspanel></programspanel>', '', '', function(opts) {
        var _this = this;
        var AUTOHIDE_TIME = 3000;
        var elapsedTime = 0;
        var hideTimeoutID = null;
        var visible = true;
        var hideTween, showTween = null;
        var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);
        var blockSkinHiding = false;
        var isHidden = false;

        this.isMobile = false;

        _this.mggPlayer.registerProperty(skinConsts.SKIN_IS_VISIBLE, void 0, true);
        _this.mggPlayer.registerProperty(skinConsts.SKIN_VISIBILITY_IS_CHANGING, void 0, true);

        _this.mggPlayer.set(skinConsts.SKIN_IS_VISIBLE, true);
        _this.mggPlayer.set(skinConsts.SKIN_VISIBILITY_IS_CHANGING, {active: false, visible: true});

        mainContainer.addEventListener('mousemove', restartHideTimeout);
        mainContainer.addEventListener('mouseenter', showSkin);
        mainContainer.addEventListener('mouseleave', hideSkin);

        this.on('mount', function (event) {
            hideTimeoutID = setTimeout(onHideTimeout, AUTOHIDE_TIME);
        });

        _this.mggPlayer.on('ad:external:adWillStartIn', function (event) {
            blockSkinVisible();
        });

        _this.mggPlayer.on('ad:external:memberStartedPlaying', onResetAdCountDownTimer);
        _this.mggPlayer.on('ad:external:adComplete', onResetAdCountDownTimer);

        _this.mggPlayer.on('property:chromecastState', function (event) {
            if (event.data == 'connecting' || event.data == 'connected') {
                blockSkinVisible();
            } else {
                unblockSkinVisible();
            }

        });

        _this.mggPlayer.on(skinConsts.RESTART_SKIN_HIDING_TIMER, function (event) {
            restartHideTimeout();
        });

        _this.mggPlayer.on('property:' + skinConsts.IS_MOBILE_DEVICE, function (event) {
            if (event.data === true) {
                restartHideTimeout();
                mainContainer.removeEventListener('mousemove', restartHideTimeout);
                mainContainer.removeEventListener('mouseenter', showSkin);
                mainContainer.removeEventListener('mouseleave', hideSkin);

                mainContainer.addEventListener('click', restartHideTimeout);
            }
        });

        function onResetAdCountDownTimer(event) {
            if (_this.mggPlayer.get('chromecastState') !== 'connecting' && _this.mggPlayer.get('chromecastState') !== 'connected') {
                unblockSkinVisible();
            }
        }

        function blockSkinVisible() {
            blockSkinHiding = true;
            showSkin();
        }

        function unblockSkinVisible() {
            blockSkinHiding = false;
            restartHideTimeout();
        }

        function restartHideTimeout() {
            if (hideTimeoutID) {
                clearTimeout(hideTimeoutID);
            }
            if (isHidden) {
                showSkin();
            }
            hideTimeoutID = setTimeout(onHideTimeout, AUTOHIDE_TIME);
        }

        function showSkin() {
            _this.parent.root.classList.remove('hidden_cursor');
            isHidden = false;
            if (hideTween && hideTween.isActive()) {
                hideTween.kill();
                hideTween.eventCallback('onComplete', null);
            }
            if (showTween && !showTween.isActive()) {
                showTween = TweenLite.to(_this.root, .5, {opacity: 1, ease: Power2.easeInOut});
                showTween.eventCallback('onComplete', onTweenComplete, [true]);
                showTween.eventCallback('onStart', onTweenStart, [true]);
            } else if (!showTween) {
                showTween = TweenLite.to(_this.root, .5, {opacity: 1, ease: Power2.easeInOut});
                showTween.eventCallback('onComplete', onTweenComplete, [true]);
                showTween.eventCallback('onStart', onTweenStart, [true]);
            }

            _this.mggPlayer.emit(skinConsts.SKIN_VISIBILITY_BEGIN_CHANGE, true);

            _this.mggPlayer.set(skinConsts.SKIN_VISIBILITY_IS_CHANGING, {active: true, visible: true});
        }

        function hideSkin() {
            if (blockSkinHiding) {
                return;
            }
            isHidden = true;
            if (showTween && showTween.isActive()) {
                showTween.kill();
                showTween.eventCallback('onComplete', null);
                showTween.eventCallback('onStart', null);
            }

            if (hideTween && !hideTween.isActive()) {
                hideTween = TweenLite.to(_this.root, .5, {opacity: 0, ease: Power2.easeInOut});
                hideTween.eventCallback('onComplete', onTweenComplete, [false]);
            } else if (!hideTween) {
                hideTween = TweenLite.to(_this.root, .5, {opacity: 0, ease: Power2.easeInOut});
                hideTween.eventCallback('onComplete', onTweenComplete, [false]);
            }
            _this.mggPlayer.emit(skinConsts.SKIN_VISIBILITY_BEGIN_CHANGE, false);

            _this.mggPlayer.set(skinConsts.SKIN_VISIBILITY_IS_CHANGING, {active: true, visible: false});

        }

        function onHideTimeout() {
            hideSkin();
            hideTimeoutID = null;
        }

        function onTweenComplete(isVisible) {
            if (!isVisible) {
                _this.parent.root.classList.add('hidden_cursor');
                _this.root.style.visibility = 'hidden';
            }
            _this.mggPlayer.set(skinConsts.SKIN_IS_VISIBLE, isVisible);
            _this.mggPlayer.set(skinConsts.SKIN_VISIBILITY_IS_CHANGING, {active: false, visible: isVisible});
        }

        function onTweenStart(isVisible) {
            if (isVisible) {
                _this.root.style.visibility = 'visible';
            }
        }

});

riot.tag2('skin', '<div id="main_click_area" class="mggskin-unselectable"></div><buffering></buffering><subtitlescontainer></subtitlesContainer><main></main><bigplaybutton></bigplaybutton>', '', 'class="{mggskin-hidden: !visible}" if="{!isMobile}"', function(opts) {
        var _this = this;
        var singleClickTimeoutID = null;
        var mouseDown = false;
        var lastClickTimestamp = 0;
        var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);
        var megogoIdToSwitch;
        mainContainer.tabIndex = -1;
        mainContainer.style.outline = 'none';

        this.visible = true;
        this.isMobile = false;
        this.mggPlayer = window.mggPlayersPool[opts.id.replace('_skin', '_player')];

        insertPlayer(_this);

        _this.mggPlayer.registerProperty(skinConsts.BRAND_COLOR_INDEX, void 0, true);
        _this.mggPlayer.set(skinConsts.BRAND_COLOR_INDEX, 2);

        _this.mggPlayer.registerProperty(skinConsts.INITIAL_PLAYERS_DIMENSIONS, void 0, true);
        _this.mggPlayer.set(skinConsts.INITIAL_PLAYERS_DIMENSIONS, [mainContainer.clientWidth, mainContainer.clientHeight]);

        _this.mggPlayer.registerProperty(skinConsts.CURRENT_OPENED_WIDGET, void 0, true);
        _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);

        _this.mggPlayer.registerProperty(skinConsts.IS_MOBILE_DEVICE, void 0, true);

        _this.mggPlayer.on('property:isMobile', onIsMobileChange);
        _this.mggPlayer.on('property:autoplay', onIsMobileChange);
        if(_this.mggPlayer.get('isMobile') != null) onIsMobileChange();

        _this.mggPlayer.on('property:videoInstances', function(event) {
            var videos = event.data || [];
            videos.forEach(function(video){
                if(video.className == 'player:video') video.controls = _this.isMobile;
            });
        });

        document.addEventListener('mouseup', function (event) {
            mouseDown = false;
        });

        _this.mggPlayer.on('changeVideo', function(event) {
            if (_this.mggPlayer.get('epg:currentChannel')) {
                if (typeof window.channelSwitch === 'function') {
                    var megogoId = event.data.match(/i=\d+/);
                    if (megogoId.length > 0) {
                        megogoId = megogoId[0].match(/\d+/);
                        if (megogoId.length > 0) {
                            try {
                                megogoId = parseInt(megogoId[0]);
                            } catch  (error) {}
                        }
                    }
                    if (megogoId) {
                        if (skinUtils.isFullScreen()) {
                            megogoIdToSwitch = megogoId;
                            _this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, onFullscreenStateChanged)
                        } else {
                            window.channelSwitch(megogoId);
                        }
                    }
                }
            }
        });

        _this.mggPlayer.on('mediaError', function(event) {
        	if (event.data.fatal && skinUtils.isFullScreen()) {
        		skinUtils.cancelFullScreen();
            }
        });

        this.main_click_area.addEventListener('mousedown', function(event) {
            if (event.button === 0) {
                mouseDown = true;
                lastClickTimestamp = new Date().getTime();
            }
        });

        this.main_click_area.addEventListener('mouseup', function(event) {
            if (mouseDown) {
                if (_this.mggPlayer.get(skinConsts.IS_MOBILE_DEVICE)) {
                    if (_this.mggPlayer.get(skinConsts.SKIN_IS_VISIBLE)) {
                        processSingleClick();
                    }
                } else {
                    var nowTimestamp = new Date().getTime();
                    if (nowTimestamp - lastClickTimestamp <= 200) {
                        if (!singleClickTimeoutID) {
                            if ( _this.mggPlayer.get(skinConsts.CURRENT_OPENED_WIDGET)) {
                                _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
                            } else {
                                singleClickTimeoutID = setTimeout(onSingleClickTimeout, 250);
                            }
                        } else {
                            clearTimeout(singleClickTimeoutID);
                            singleClickTimeoutID = null;
                            processDoubleClick();
                        }
                    }
                }
            }
        });

        function onFullscreenStateChanged(event) {
            if (!event.data) {
                _this.mggPlayer.off(skinConsts.FULLSCREEN_STATE_CHANGED, onFullscreenStateChanged);
                window.channelSwitch(megogoIdToSwitch);
            }
        }

        function processSingleClick() {
            _this.mggPlayer.togglePlayPause();
        }

        function processDoubleClick() {
            if (skinUtils.isFullScreen()) {
                skinUtils.cancelFullScreen();
            } else {
                var container = document.getElementById(skinConsts.PLAYERS_CONTAINER);
                skinUtils.requestFullScreen(container);
            }
        }

        function onSingleClickTimeout() {
            if (!mouseDown) {
                processSingleClick();
            }
            singleClickTimeoutID = null;
        }

        mainContainer.addEventListener('keydown', function(event) {
            var volume, state;
            switch (event.keyCode) {
                case 40:
                        volume = _this.mggPlayer.get('volume') - 5;
                        if (volume < 0) {
                            volume = 0;
                        }
                    _this.mggPlayer.setVolume(volume);
                    break;
                case 38:
                    volume = _this.mggPlayer.get('volume') + 5;
                    if (volume > 100) {
                        volume = 100;
                    }
                    _this.mggPlayer.setVolume(volume);
                    break;
                case 39:
	            case 37:
                    var position = _this.mggPlayer.get('position');
                    var deltaTime = event.keyCode == 39 ? 10 : event.keyCode == 37 ? -10 : 0;
                    var currentChannel = _this.mggPlayer.get('epg:currentChannel');
                    var channelState;
                    if (currentChannel) {
                    	if (currentChannel.type === 'dvrChannel') {
                    		channelState = _this.mggPlayer.get('dvrchannel:channelState');
                    		if (channelState === 'catchup') {
			                    _this.mggPlayer.seekTo(position + deltaTime);
                            } else {
			                    _this.mggPlayer.emit('dvrchannel:dvrSeek', _this.mggPlayer.get('dvrchannel:currentPosition') + deltaTime);
                            }
                        } else if (currentChannel.type === 'vodChannel') {
                    		channelState = _this.mggPlayer.get('vodchannel:channelState');
		                    if (channelState === 'watchnow') {
			                    _this.mggPlayer.seekTo(position + deltaTime);
		                    }
                        }
                    } else {
                    	var videoInfo = _this.mggPlayer.get('videoInfo');
                    	if (!videoInfo || !videoInfo.is_live) {
                    		_this.mggPlayer.seekTo(position + deltaTime);
	                    }
                    }
                    break;
                case 32:
                    state = _this.mggPlayer.get('state');
                    if (state == 1) {
                        _this.mggPlayer.pause();
                    } else {
                        _this.mggPlayer.play();
                    }
                    break;
            }
            event.preventDefault();
        });

        _this.mggPlayer.on(skinConsts.NEED_TO_CHANGE_MAIN_SKIN_VISIBILITY, function (event) {
            _this.visible = event.data;
            _this.update();
        });

        _this.mggPlayer.on('property:videoInfo', function (event) {
            if (_this.mggPlayer.config && _this.mggPlayer.config.skin =='kinomts') {
                _this.mggPlayer.set(skinConsts.BRAND_COLOR_INDEX, 8);
            } else if (_this.mggPlayer.config && _this.mggPlayer.config.skin =='moldcelltv') {
                _this.mggPlayer.set(skinConsts.BRAND_COLOR_INDEX, 10);
            } else if (event.data && event.data.is_live) {
                _this.mggPlayer.set(skinConsts.BRAND_COLOR_INDEX, 3);
            }

            if (_this.mggPlayer.config && (_this.mggPlayer.config.device.device.type == 'mobile' || _this.mggPlayer.config.device.device.type == 'tablet')) {
                _this.mggPlayer.set(skinConsts.IS_MOBILE_DEVICE, true);
            } else {
                _this.mggPlayer.set(skinConsts.IS_MOBILE_DEVICE, false);
            }
        });

        function insertPlayer(tag) {
            for (var item in tag.tags) {
                var child = tag.tags[item];
                child.mggPlayer = _this.mggPlayer;
                insertPlayer(child);
            }
        }

        function onIsMobileChange() {
            if(_this.mggPlayer.get('autoplay') == false) {
                _this.isMobile = false;
            } else {
                _this.isMobile = _this.mggPlayer.get('isMobile');
            }

            var videos = _this.mggPlayer.get('videoInstances') || [];
            videos.forEach(function(video){
                if(video.className == 'player:video') video.controls = _this.isMobile;
            });
            _this.update();
        }

});

riot.tag2('bigplaybutton', '<div id="big_play_button"></div>', '', 'class="mggskin-bigplaybutton" show="{visible}" onclick="{click}"', function(opts) {
		var _this = this;
		this.visible = false;

		var waitInitedVideos = [];

		_this.mggPlayer.on('property:autoplay', function (pEvent) {
			var currentChannel = _this.mggPlayer.get('epg:currentChannel');
			if (currentChannel && (currentChannel.type == 'vodChannel' || currentChannel.type === 'dvrChannel')) {
				return;
			}
			if (pEvent.data === false) {
				_this.visible = true;
				_this.update();
			}

		});

		_this.mggPlayer.on('property:state', function (event) {
			if (_this.visible && event.data == 1) {
				_this.visible = false;
				_this.update();
			}
		});

		_this.mggPlayer.on('player:ready', function (event) {
			if(_this.mggPlayer.get('videoInstances')) {
				_this.mggPlayer.get('videoInstances').forEach(function(video){
					waitInitedVideos.push(video);
				})
			}
		});

		this.click = function () {
			if(waitInitedVideos.length){
				var video = waitInitedVideos.shift();
				video.play();

				if(waitInitedVideos.length) {
					_this.root.dispatchEvent(new Event('click'));
					return;
				}

			}

			setTimeout(function(){
				_this.mggPlayer.set('autoplay', true);
				_this.visible = false;
				_this.update();
			}, 100);

		};

});

riot.tag2('buffering', '<div id="buffering_container"><svg class="mggskin-svg" version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 125 4" enable-background="new 0 0 0 0" xml:space="preserve"><rect x="0" y="0" width="20" height="4" fill="{color}"><animate attributename="opacity" dur="1s" values="0.1;1;0.1" repeatcount="indefinite" begin="0.1"></animate></rect><rect x="25" y="0" width="20" height="4" fill="{color}"><animate attributename="opacity" dur="1s" values="0.1;1;0.1" repeatcount="indefinite" begin="0.2"></animate></rect><rect x="50" y="0" width="20" height="4" fill="{color}"><animate attributename="opacity" dur="1s" values="0.1;1;0.1" repeatcount="indefinite" begin="0.3"></animate></rect><rect x="75" y="0" width="20" height="4" fill="{color}"><animate attributename="opacity" dur="1s" values="0.1;1;0.1" repeatcount="indefinite" begin="0.4"></animate></rect><rect x="100" y="0" width="20" height="4" fill="{color}"><animate attributename="opacity" dur="1s" values="0.1;1;0.1" repeatcount="indefinite" begin="0.5"></animate></rect></svg></div>', '', 'class="mggskin-buffering" if="{visible}"', function(opts) {
        var _this = this;
        this.visible = false;
        this.color = window.brandColor[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
        _this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
            _this.color = window.brandColor[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
            _this.update();
        });

        var onPlayerStateChange = function(pEvent){
            _this.visible = pEvent.data == 3;
            _this.update();
        };

        _this.mggPlayer.on('property:state', onPlayerStateChange);
});

riot.tag2('channelspanel', '<div id="channelsPanel_container"><channelscategory each="{title, data in categories}"></channelscategory></div>', '', 'class="{mggskin-hidden: !visible} mggskin-unselectable"', function(opts) {
		this.visible = false;
		this.categories = {};

		var _this = this;
		var allChannels = null;
		var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);
		var opacityTween = null;
		var scrollBar = null;
		var cookieObject = {};
		var cookieName = 'channelsCategoryState';
		var cookie = skinUtils.getCookieProcessor();
		var cookieString = '';
		var containerTopTween = null;

		this.root.style.opacity = 0;
		_this.mggPlayer.registerProperty(skinConsts.CURRENT_CHANNEL_ITEM, void 0, true);

		cookieString = cookie.getCookie(cookieName);
		if (cookieString) {
			try {
				cookieObject = JSON.parse(cookieString) || {};
			} catch (error) {
				cookieObject = {};
			}
		}

		_this.root.style.height = (mainContainer.offsetHeight - _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT)) + 'px';
		_this.mggPlayer.on('property:' + skinConsts.CONTROL_BAR_HEIGHT, function (event) {
			_this.root.style.height = (mainContainer.offsetHeight - event.data) + 'px';
		});

		_this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function(event) {
			_this.root.style.height = (mainContainer.offsetHeight - _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT)) + 'px';
		});

		_this.mggPlayer.on('property:' + skinConsts.CURRENT_CHANNEL_ITEM, function(event) {
			moveCurrentChannel(event.data);
		});

		_this.mggPlayer.on('property:' + skinConsts.CURRENT_OPENED_WIDGET, function (event) {
			setVisible(event.data == skinConsts.ID_CHANNELS_PANEL);
		});

		allChannels = _this.mggPlayer.get('epg:channelsByCategories');
		processChannels(allChannels);
		_this.mggPlayer.on('property:epg:channelsByCategories', function (event) {
			allChannels = event.data;
			processChannels(allChannels);
		});

		_this.mggPlayer.on(skinConsts.CHANNELS_CATEGORY_STATE_CHANGED, function(event) {
			if (cookieObject[event.data.title] !== event.data.isOpen) {
				cookieObject[event.data.title] = event.data.isOpen;
				try {
					cookieString = JSON.stringify(cookieObject);
					cookie.setCookie(cookieName, cookieString);
				} catch (error) {}
			}

			updateCategoriesPosition();
		});

		_this.on('mount', function(event) {
			var sliderOpts = {
				className: 'channelPanel_scrollbar',
				margin: 10,
				useAnim: true
			};
			scrollBar = skinScrollBar.createCustomHTMLScroll(_this.root, _this.channelsPanel_container, sliderOpts, _this.mggPlayer);
		});

		function setVisible(value) {
			if (opacityTween) {
				opacityTween.kill();
				if (opacityTween.isActive()) {
					opacityTween.eventCallback('onComplete', null);
					opacityTween.eventCallback('onStart', null);
				}
			}

			opacityTween = TweenLite.to(_this.root, .2, {opacity: value ? 1 : 0, ease: Power2.easeInOut});
			if (value) {
				opacityTween.eventCallback('onStart', onDisplayValue, [true]);
			} else {
				opacityTween.eventCallback('onComplete', onDisplayValue, [false]);
			}
		}

		function onDisplayValue(value) {
			if (value) {
				_this.root.style.height = (mainContainer.offsetHeight - _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT)) + 'px';
			}

			_this.visible = value;
			_this.update();

			updateCategoriesPosition();

			if (_this.visible) {
				setPositionByCurrentChannel(_this.mggPlayer.get(skinConsts.CURRENT_CHANNEL_ITEM));
			}
		}

		function updateCategoriesPosition() {
			var needToShowScrollBar = _this.channelsPanel_container.offsetHeight > _this.root.offsetHeight;

			var freeBottomSpace = _this.root.offsetHeight - _this.channelsPanel_container.offsetHeight - _this.channelsPanel_container.offsetTop;
			if (freeBottomSpace > 0) {
				var newTop = _this.channelsPanel_container.offsetTop + freeBottomSpace;
				if (newTop > 0) {
					newTop = 0;
				}
				if (containerTopTween && containerTopTween.isActive()) {
					containerTopTween.kill();
					containerTopTween.eventCallback('onComplete', null);
				}
				containerTopTween = TweenLite.to(_this.channelsPanel_container, .3, {top: newTop + 'px', ease: Power2.easeOut});
				containerTopTween.eventCallback('onComplete', onContainerTopTweenComplete, [needToShowScrollBar]);

			}

			scrollBar.update(needToShowScrollBar);
		}

		function onContainerTopTweenComplete(needToShowScrollBar) {
			scrollBar.update(needToShowScrollBar);
		}

		function processChannels(channels) {
			if (channels) {
				var favoriteCategoryName = _this.mggPlayer.config.i18n('favoriteChannels') || 'ИЗБРАННЫЕ КАНАЛЫ';
				for (var categoryTitle in channels) {
					for (var i = 0, l = channels[categoryTitle].channels.length; i < l; ++i) {
						if (channels[categoryTitle].channels[i].isFavorite) {
							if (!_this.categories[favoriteCategoryName]) {
								_this.categories[favoriteCategoryName] = {
									opened: true,
									channels: []
								};
								if (favoriteCategoryName in cookieObject) {
									_this.categories[favoriteCategoryName]['opened'] = cookieObject[favoriteCategoryName];
								}
							}
							_this.categories[favoriteCategoryName]['channels'].push(channels[categoryTitle].channels[i]);
							if (channels[categoryTitle].channels[i].isActive) {
								_this.categories[favoriteCategoryName]['opened'] = true;
							}
							continue;
						}

						if (!_this.categories[categoryTitle]) {
							_this.categories[categoryTitle] = {
								opened: true,
								channels: []
							};
							if (categoryTitle in cookieObject) {
								_this.categories[categoryTitle]['opened'] = cookieObject[categoryTitle];
							}
						}
						_this.categories[categoryTitle]['channels'].push(channels[categoryTitle].channels[i]);
						if (channels[categoryTitle].channels[i].isActive) {
							_this.categories[categoryTitle]['opened'] = true;
						}
					}
				}
				_this.update();
			}
		}

		function setPositionByCurrentChannel(item) {
			if (item) {
				var needToShowScrollBar = _this.channelsPanel_container.offsetHeight > _this.root.offsetHeight;
				var newTop = 0 - item.root.offsetTop - item.root.offsetHeight / 2 + _this.root.offsetHeight / 2;
				if (newTop > 0) {
					newTop = 0;
				}
				if (_this.channelsPanel_container.offsetHeight - newTop * -1 < _this.root.offsetHeight) {
					newTop = -1 * (_this.channelsPanel_container.offsetHeight - _this.root.offsetHeight);
				}
				_this.channelsPanel_container.style.top = newTop + 'px';

				scrollBar.update(needToShowScrollBar);
			}
		}

		function moveCurrentChannel(item) {

			var itemTop = item.root.offsetTop + _this.channelsPanel_container.offsetTop;
			if (itemTop < 0 || itemTop + item.root.offsetHeight >= _this.root.offsetHeight) {
				setPositionByCurrentChannel(item);
			}
		}

});
riot.tag2('controlbar', '<seekbar class="{mggskin-hidden: !seekBarIsVisible}"></seekBar><bottomcontainer></bottomContainer>', '', 'class="mggskin-unselectable mggskin-controlbar"', function(opts) {
        this.seekBarIsVisible = true;

        var _this = this;

        this.on('mount', function(event) {
            setControlBarHeight(false);
        });
        _this.mggPlayer.registerProperty(skinConsts.CONTROL_BAR_HEIGHT,  void 0, true);
        _this.mggPlayer.set(skinConsts.CONTROL_BAR_HEIGHT, _this.root.offsetHeight);

        _this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function(event) {
           setControlBarHeight(event.data);
           setResizableButtonsWidth(event.data);
        });

        processVideoInfo(_this.mggPlayer.get('videoInfo'));
        _this.mggPlayer.on('property:videoInfo', function(event) {
            processVideoInfo(event.data);
        });

        processCurrentDVRChannel(_this.mggPlayer.get('epg:currentChannel'));
        _this.mggPlayer.on('property:epg:currentChannel', function (event) {
        	processCurrentDVRChannel(event.data);
        });

        function setControlBarHeight(isFullscreen) {
            var height;
            if (isFullscreen) {
                if (_this.seekBarIsVisible) {
                    height = 70;
                } else {
                    height = 60;
                }
            } else {
                if (_this.seekBarIsVisible) {
                    height = 50;
                } else {
                    height = 40;
                }
            }
            _this.root.style.height = height + 'px';
            _this.mggPlayer.set(skinConsts.CONTROL_BAR_HEIGHT, height);
        }

        function setResizableButtonsWidth(isFullscreen) {
            var buttons = _this.root.getElementsByClassName(skinConsts.CLASS_RESIZABLE_BUTTON);
            if (buttons && buttons.length) {
                for (var i = 0, l = buttons.length; i < l; ++i) {
                    buttons[i].style.width = isFullscreen ? '79px' : '59px';
                }
            }
        }

        function processVideoInfo(info) {
            if (info) {
            	if (info.is_tv) {
            		_this.seekBarIsVisible = !info['is_tv'] || info['is_dvr_channel'] || info['is_vod_channel'];
	            } else if (info.is_tv == false && info.is_live == true) {
            		_this.seekBarIsVisible = false;
	            } else {
            		_this.seekBarIsVisible = true;
	            }
                setControlBarHeight(skinUtils.isFullScreen());
                _this.update();
            }
        }

        function processCurrentDVRChannel(channel) {
        	if (channel && channel.type === 'dvrChannel') {
		        _this.mggPlayer.on('epg:activeChannelCurrentProgramChanged', onCurrentProgramChange);
		        _this.seekBarIsVisible = Boolean(channel.currentProgram);
		        setControlBarHeight(skinUtils.isFullScreen());
		        _this.update();
	        } else {
		        _this.mggPlayer.off('epg:activeChannelCurrentProgramChanged', onCurrentProgramChange);
            }
        }

        function onCurrentProgramChange(event) {
        	processCurrentDVRChannel(_this.mggPlayer.get('epg:currentChannel'));
        }

});

riot.tag2('epgnow', '<div style="font-weight: bold">{programTitle}</div><div>{programTime}</div>', '', 'class="{mggskin-hidden: !visible} mggskin-unselectable"', function(opts) {
		this.visible = false;
		this.programTitle = '';
		this.programTime = '';

		var _this = this;
		var opacityTween = null;
		var hideTimeoutId = null;

		_this.root.style.opacity = 0;

		processCurrentProgram(_this.mggPlayer.get('epg:currentChannel'));
		_this.mggPlayer.on('property:epg:currentChannel', function(event) {
			processCurrentProgram(event.data);
		});
		_this.mggPlayer.on('epg:activeChannelCurrentProgramChanged', function(event) {
			processCurrentProgram(_this.mggPlayer.get('epg:currentChannel'));
		});
		_this.mggPlayer.on('property:vodchannel:currentVodProgram', function(event) {
			processCurrentProgram(_this.mggPlayer.get('epg:currentChannel'));
		});
		_this.mggPlayer.on('property:dvrchannel:currentDvrProgram', function(event) {
			processCurrentProgram(_this.mggPlayer.get('epg:currentChannel'));
		});

		_this.mggPlayer.on(skinConsts.SKIN_VISIBILITY_BEGIN_CHANGE, function(event) {
			if (event.data) {
				setVisible(true);
			} else {
				if (_this.visible) {
					setVisible(false);
				}
			}
		});

		_this.root.style.bottom = _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT) - 20 + 'px';
		_this.mggPlayer.on('property:' + skinConsts.CONTROL_BAR_HEIGHT, function (event) {
			_this.root.style.bottom = event.data - 20 + 'px';
		});

		function processCurrentProgram(channel) {
			if (channel) {
				var startDate, endDate;
				if (channel.type === 'regularChannel') {
					if (channel.currentProgram) {
						_this.programTitle = channel.currentProgram.title;
						startDate = new Date(channel.currentProgram.startTimestamp * 1000);
						endDate = new Date(channel.currentProgram.endTimestamp * 1000);
						_this.programTime = skinUtils.getFormatCurrentTime(startDate.getHours(), startDate.getMinutes()) + ' - ' + skinUtils.getFormatCurrentTime(endDate.getHours(), endDate.getMinutes());
					}
				} else if (channel.type === 'vodChannel') {
					var currentVodProgram = _this.mggPlayer.get('vodchannel:currentVodProgram');
					if (currentVodProgram) {
						_this.programTitle = currentVodProgram.title;
						startDate = new Date(currentVodProgram.startTimestamp * 1000);
						endDate = new Date(currentVodProgram.endTimestamp * 1000);
						_this.programTime = skinUtils.getFormatCurrentTime(startDate.getHours(), startDate.getMinutes()) + ' - ' + skinUtils.getFormatCurrentTime(endDate.getHours(), endDate.getMinutes());
					}
				} else if (channel.type === 'dvrChannel') {
					var currentDvrProgram = _this.mggPlayer.get('dvrchannel:currentDvrProgram');
					if (currentDvrProgram) {
						_this.programTitle = currentDvrProgram.title;
						startDate = new Date(currentDvrProgram.startTimestamp * 1000);
						endDate = new Date(currentDvrProgram.endTimestamp * 1000);
						_this.programTime = skinUtils.getFormatCurrentTime(startDate.getHours(), startDate.getMinutes()) + ' - ' + skinUtils.getFormatCurrentTime(endDate.getHours(), endDate.getMinutes());
					}
				}
				if (!_this.visible) {
					setVisible(true);
				}
			} else {
				_this.programTitle = '';
				_this.programTime = '';
				if (_this.visible) {
					setVisible(false);
				}
			}
			_this.update();
		}

		function setVisible(value) {
			if (opacityTween) {
				opacityTween.kill();
				if (opacityTween.isActive()) {
					opacityTween.eventCallback('onComplete', null);
					opacityTween.eventCallback('onStart', null);
				}
			}

			opacityTween = TweenLite.to(_this.root, .3, {opacity: value ? 1 : 0, ease: Power2.easeInOut});
			if (value) {
				opacityTween.eventCallback('onStart', onDisplayValue, [true]);
				opacityTween.eventCallback('onComplete', onDisplayValue, [true, true]);
			} else {
				opacityTween.eventCallback('onComplete', onDisplayValue, [false]);
			}
		}

		function onDisplayValue(visible, restartTimer) {
			_this.visible = visible;
			_this.update();

			if (restartTimer) {
				hideTimeoutId = setTimeout(onHideTimeout, 3000);
			} else {
				if (hideTimeoutId) {
					clearTimeout(hideTimeoutId);
					hideTimeoutId = null;
				}
			}
		}

		function onHideTimeout() {
			setVisible(false);
		}

});
riot.tag2('likeform', '<div id="main_like_form_container"><div class="like-form_header"><button id="like_form_close_button" class="form_close"><i class="icon icon_close" id="like_form_close_button_icon"></i></button><h3>{titlePhrase}</h3></div><div class="like-form_body"><div class="like-form_row"><button id="button_like"><i class="icon icon_like"></i>{likePhrase}</button><button id="button_dislike"><i class="icon icon_dislike"></i>{dislikePhrase}</button></div><div class="like-form_row"><p class="share_social-text">{sharePhrase}:</p><div class="share_social-icons-group"><a href="{vkURL}" target="_blank" class="social_link vk"><i class="icon"></i></a><a href="{fbURL}" target="_blank" class="social_link fb"><i class="icon"></i></a><a href="{twitterURL}" target="_blank" class="social_link twitter"><i class="icon"></i></a><a href="{gplusURL}" target="_blank" class="social_link gplus"><i class="icon"></i></a><a href="{okURL}" target="_blank" class="social_link odnoklassniki"><i class="icon"></i></a><a href="{ljURL}" target="_blank" class="social_link livejournal"><i class="icon"></i></a></div></div></div></div>', '', 'if="{visible}"', function(opts) {
		var _this = this;
		this.visible = false;
		this.likePhrase = 'Понравился';
		this.dislikePhrase = 'Не понравился';
		this.sharePhrase = 'Поделиться в социальных сетях';
		this.titlePhrase = 'Понравился фильм?';

		var showed = false;

		var position = _this.mggPlayer.get('position');
		var duration = _this.mggPlayer.get('duration');

		function checkPlayedFraction() {
			if (duration <= 0 || showed) {
				return;
			}
			var fraction = position / duration;
			if (fraction >= .95 && !showed) {
				showed = true;
				_this.visible = true;
				_this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, skinConsts.ID_LIKE_WIDGET);
				_this.update();
			}
		}

		var videoInfo = _this.mggPlayer.get('videoInfo');
		_this.mggPlayer.on('property:videoInfo', function (event) {
			videoInfo = event.data;
			processVideoInfo(videoInfo);
		});
		if (videoInfo) {
			processVideoInfo(videoInfo);
		}
		function processVideoInfo(info) {
			if ('share_link' in info) {
				shareLink = info['share_link'];
				if (_this.mggPlayer.config) {
					processShareLink();
				}
			}
			if (_this.mggPlayer.config) {
				_this.likePhrase = _this.mggPlayer.config.i18n('like') || 'Понравился';
				_this.dislikePhrase = _this.mggPlayer.config.i18n('dislike') || 'Не понравился';
				_this.sharePhrase = _this.mggPlayer.config.i18n('share_in_social_network') || 'Поделиться в социальных сетях';
				_this.titlePhrase = _this.mggPlayer.config.i18n('movie_review_question') || 'Понравился фильм?';
				_this.update();
			}
		}

		var hoverClassName = window.closeFormIcon[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			hoverClassName = window.closeFormIcon[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		});

		this.like_form_close_button.addEventListener('mouseenter', function (event) {
			_this.hovered = true;
			_this.like_form_close_button_icon.classList.add(hoverClassName);
		});
		this.like_form_close_button.addEventListener('mouseleave', function (event) {
			_this.hovered = false;
			_this.like_form_close_button_icon.classList.remove(hoverClassName);
		});
		this.like_form_close_button.addEventListener('click', function (event) {
			_this.visible = false;
			_this.update();
		});

		function processShareLink() {
			var refererHost = _this.mggPlayer.config.host;
			var shareText = "Смотрю онлайн " + '"' + videoInfo.title + '"' + " на " + refererHost;

			_this.vkURL = 'http://vkontakte.ru/share.php?url=' + shareLink;
			_this.fbURL = 'http://facebook.com/sharer.php?u=' + shareLink;
			_this.twitterURL = 'https://twitter.com/intent/tweet?' + shareText.replace(refererHost, '@' + refererHost)
					+ '&' + shareLink + '&utm_source=twitter&utm_medium=Share&utm_campaign=twitter';
			_this.gplusURL = 'https://plus.google.com/share?url=' + shareLink + '&h1=ru';
			var encodedShareText = encodeURI(shareText);
			_this.okURL = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=' + encodedShareText
					+ '&st._surl=' + shareLink;
			encodedShareText = encodeURI(shareText);
			_this.ljURL = 'http://www.livejournal.com/update.bml?subject=' + encodedShareText + '&event=' + shareLink;

			_this.update();
		}

});

riot.tag2('programspanel', '<div class="programsPanel_background"></div><div id="programItems_container" class="mggskin-unselectable {mggskin-hidden: !displayingProgramsList || displayingProgramsList.length <= 1}"><programscontainer each="{date, data in displayingDays}"></programscontainer></div><div class="programsPanel_topCap"></div><div class="programsPanel_noprogram_container {mggskin-hidden: displayingProgramsList && displayingProgramsList.length > 1}"><div class="programsPanel_noprogram_icon"></div><div class="programsPanel_noprogram_text">{noProgramText}</div></div>', '', 'class="{mggskin-hidden: !visible} mggskin-unselectable"', function(opts) {
		this.visible = false;
		this.displayingDays = null;
		this.noProgramText = '';
		this.displayingProgramsList = null;

		var ITEMS_SIDE_LIMIT = 100;

		var _this = this;
		var currentChannel = null;
		var opacityTween = null;
		var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);
		var scrollBar = null;
		var originalDays = null;
		var channelChanged = false;

		this.root.style.opacity = 0;

		_this.root.style.height = (mainContainer.offsetHeight - _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT)) + 'px';
		_this.mggPlayer.on('property:' + skinConsts.CONTROL_BAR_HEIGHT, function (event) {
			_this.root.style.height = (mainContainer.offsetHeight - event.data) + 'px';
			checkContainersPosition();
		});

		_this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function(event) {
			_this.root.style.height = (mainContainer.offsetHeight - _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT)) + 'px';
			checkContainersPosition();
		});

		_this.mggPlayer.on('property:' + skinConsts.CURRENT_OPENED_WIDGET, function (event) {
			setVisible(event.data == skinConsts.ID_PROGRAMS_PANEL);
		});

		currentChannel = _this.mggPlayer.get('epg:currentChannel');
		processChannel(currentChannel);
		_this.mggPlayer.on('property:epg:currentChannel', function (event) {
			if (currentChannel) {
				channelChanged = true;
			}
			currentChannel = event.data;
			processChannel(currentChannel);
		});

		_this.mggPlayer.on('epg:programsUpdated', function (event) {
			if (currentChannel && currentChannel.epgId === event.data.epgId) {
				processChannel(currentChannel);
			}
		});

		_this.mggPlayer.on('property:' + skinConsts.CURRENT_PROGRAM_ITEM, function (event) {
			if (channelChanged) {
				channelChanged = false;
				setPositionToCurrentProgram(event.data);
			}
		});

		_this.on('mount', function (event) {
			var sliderOpts = {
				className: 'programsPanel_scrollbar',
				margin: 10,
				useAnim: true,
				callback: onScroll
			};
			scrollBar = skinScrollBar.createCustomHTMLScroll(_this.root, _this.programItems_container, sliderOpts, _this.mggPlayer);
			updateScrollBar();
		});

		_this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function (event) {
			_this.root.style.height = (mainContainer.offsetHeight - event.data) + 'px';
			checkContainersPosition();
		});

		function setVisible(value) {
			if (opacityTween) {
				opacityTween.kill();
				if (opacityTween.isActive()) {
					opacityTween.eventCallback('onComplete', null);
					opacityTween.eventCallback('onStart', null);
				}
			}

			opacityTween = TweenLite.to(_this.root, .2, {opacity: value ? 1 : 0, ease: Power2.easeInOut});
			if (value) {
				opacityTween.eventCallback('onStart', onDisplayValue, [true]);
			} else {
				opacityTween.eventCallback('onComplete', onDisplayValue, [false]);
			}
		}

		function onDisplayValue(value) {
			if (value) {
				_this.root.style.height = (mainContainer.offsetHeight - _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT)) + 'px';
			}

			_this.visible = value;
			_this.update();
			if (_this.visible) {
				updateScrollBar();
			}
			if (_this.visible) {
				setPositionToCurrentProgram(_this.mggPlayer.get(skinConsts.CURRENT_PROGRAM_ITEM));
			}
		}

		function onScroll(top) {
			_this.update();
		}

		function processChannel(channel) {
			if (channel) {
				var programs = channel.programs;
				var index = getCurrentProgramIndexFromList(programs);
				if (index != -1) {
					programs = channel.programs;

					if (index > ITEMS_SIDE_LIMIT) {
						programs = programs.slice(index - ITEMS_SIDE_LIMIT);
						index = getCurrentProgramIndexFromList(programs);
					}

					if (index + ITEMS_SIDE_LIMIT < programs.length) {
						programs = programs.slice(0, index + ITEMS_SIDE_LIMIT +  1);
					}
				}
				_this.displayingProgramsList = programs;

				if (programs && programs.length > 1) {
					processPrograms(programs);
				} else {
					_this.noProgramText = _this.mggPlayer.config.i18n('noTvProgram') || 'Для данного канала телепрограмма отсутствует';
				}
				_this.update();
			}
		}

		function processPrograms(programs) {
			if (!programs || programs.length < 2) {
				return;
			}
			var monthsObj = _this.mggPlayer.config.i18n('months') || {};
			var months = [];
			for (var prop in monthsObj) {
				months.push(monthsObj[prop]);
			}

			var days = {}, dayName, programDate, nowTimestamp, fullDayDiff, secondsPerDay = 86400;

			nowTimestamp = Math.round(new Date().getTime() / 1000);
			for (var i = 0, l = programs.length; i < l; ++i) {
				programDate = new Date(programs[i].startTimestamp * 1000);
				fullDayDiff = (programs[i].startTimestamp - nowTimestamp) / secondsPerDay;
				if (fullDayDiff < 0) {
					fullDayDiff = Math.ceil(fullDayDiff);
				} else {
					fullDayDiff = Math.ceil(fullDayDiff);
				}
				if (!days[programDate.getDate() + 'day']) {
					switch (fullDayDiff) {
						case -1:
							dayName = _this.mggPlayer.config.i18n('yesterday') + ', ' + programDate.getDate()
									+ ' ' + months[programDate.getMonth()];
							break;
						case 0:
							dayName = _this.mggPlayer.config.i18n('today') + ', ' + programDate.getDate()
									+ ' ' + months[programDate.getMonth()];
							break;
						case 1:
							dayName = _this.mggPlayer.config.i18n('tomorrow') + ', ' + programDate.getDate()
									+ ' ' + months[programDate.getMonth()];
							break;
						default:
							dayName = programDate.getDate() + ' ' + months[programDate.getMonth()];
							break;
					}
					days[programDate.getDate() + 'day'] = {
						name: dayName,
						items: []
					};
				}
				days[programDate.getDate() + 'day'].items.push(programs[i]);
			}

			originalDays = days;
			_this.displayingDays = days;
			_this.update();
			updateScrollBar();
		}

		function updateScrollBar() {
			if (scrollBar) {
				var needToShowScrollBar = _this.programItems_container.offsetHeight > _this.root.offsetHeight;
				scrollBar.update(needToShowScrollBar);
			}
		}

		function checkContainersPosition() {
			var freeSpace = _this.root.offsetHeight - _this.programItems_container.offsetHeight
					+ (-1 * _this.programItems_container.offsetTop);
			if (freeSpace > 0) {
				var top = _this.root.offsetHeight - _this.programItems_container.offsetHeight;
				if (top > 0) {
					top = 0;
				}
				_this.programItems_container.style.top = top + 'px';
				updateScrollBar();
			}
		}

		function setPositionToCurrentProgram(item) {
			if (item) {
				var top = _this.root.offsetHeight / 2 - item.root.offsetTop;
				if (top > 0) {
					top = 0;
				}
				_this.programItems_container.style.top = top + 'px';
				updateScrollBar();

				checkContainersPosition();
			}
		}

		function getProgramsCount(days) {
			var result = 0;
			if (days) {
				for (var prop in days) {
					result += days[prop].items.length;
				}
			}
			return result;
		}

		function getCurrentProgramIndexFromList(programsList) {
			var result = -1;
			if (programsList && programsList.length > 0) {
				var now = Math.floor(new Date().getTime() / 1000);
				for (var i = 0, l = programsList.length; i < l; ++i) {
					if (programsList[i].startTimestamp <= now && programsList[i].endTimestamp > now) {
						result = i;
						break;
					}
				}
			}
			return result;
		}

		function findProgramsIndexInList(programsList, program) {
			var result = -1;
			if (programsList && programsList.length > 0 && program) {
				for (var i = 0, l = programsList.length; i < l; ++i) {
					if (programsList[i].startTimestamp === program.startTimestamp && programsList[i].endTimestamp === program.endTimestamp) {
						result = i;
						break;
					}
				}
			}
			return result;
		}

});
riot.tag2('shareform', '<div id="main_share_form_container" style="visibility: hidden"><div class="share-form_header"><button class="form_close" id="share_form_close_button"><i class="icon icon_close" id="share_form_close_button_icon"></i></button><h3>{sharePhrase}</h3></div><div class="share-form_body"><div class="share-form_row"><div class="share_social-icons-group"><a if="{available[\'vk\']}" href="{vkURL}" target="_blank" class="social_link vk"><i class="icon"></i></a><a if="{available[\'fb\']}" href="{fbURL}" target="_blank" class="social_link fb"><i class="icon"></i></a><a if="{available[\'twitter\']}" href="{twitterURL}" target="_blank" class="social_link twitter"><i class="icon"></i></a><a if="{available[\'gplus\']}" href="{gplusURL}" target="_blank" class="social_link gplus"><i class="icon"></i></a><a if="{available[\'ok\']}" href="{okURL}" target="_blank" class="social_link odnoklassniki"><i class="icon"></i></a><a if="{available[\'livejournal\']}" href="{ljURL}" target="_blank" class="social_link livejournal"><i class="icon"></i></a></div></div><div class="share-form_row"><div class="share-form_link_container"><span class="share-form_embed_url_title">{linkPhrase}</span><input id="shared_link_input" type="text" name="embed_url_generator" class="share-form_embed_url_generator" value="{sharedLinkValue}"></div><div class="share-form_link_container {mggskin-hidden: !sharedHTMLVisible}"><span class="share-form_embed_url_title">{htmlCodePhrase}</span><input type="text" name="embed_url_generator" class="share-form_embed_url_generator" value="{sharedHTMLValue}"></div></div></div></div>', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
          var _this = this;
          var shareLink;
          var opacityTween = null;

          this.visible = false;
          this.sharedHTMLVisible = false;
          this.sharePhrase = 'Поделиться';
          this.sharedHTMLValue = '';
          this.sharedLinkValue = '';
          this.linkPhrase = 'Ссылка на видео:';
          this.htmlCodePhrase = 'HTML код:';
          this.available = {};

          this.on('mount', function(event) {
            var mainContainer = document.getElementById('main_share_form_container');
            if (mainContainer) {
              mainContainer.style.visibility = 'visible';
            }
          });

          var videoInfo = _this.mggPlayer.get('videoInfo');
          _this.mggPlayer.on('property:videoInfo', function(event) {
            videoInfo = event.data;
            processVideoInfo(videoInfo);
          });
          if (videoInfo) {
            processVideoInfo(videoInfo);
          }

          function processVideoInfo(info) {
            if('share_link' in info) {
              shareLink = info['share_link'];
              _this.sharedLinkValue = shareLink;
              if (_this.mggPlayer.config) {
                processShareLink();
              }
            }

            var socials = _this.mggPlayer.config.socials || ["vk", "fb", "twitter", "gplus", "ok", "livejournal"];
            socials.forEach(function (name) {
              _this.available[name] = true;
            });

            if (_this.mggPlayer.config) {
              _this.sharePhrase = _this.mggPlayer.config.i18n('shareButtonName');
              if (!_this.sharePhrase) {
                _this.sharePhrase = _this.mggPlayer.config.i18n('sharebuttonname');
              }
              if (!_this.sharePhrase) {
                _this.sharePhrase = 'Поделиться';
              }

              _this.linkPhrase = _this.mggPlayer.config.i18n('linkfromvideotext');
              if (!_this.linkPhrase) {
                _this.linkPhrase = _this.mggPlayer.config.i18n('linkFromVideoText');
              }
              if (!_this.linkPhrase) {
                _this.linkPhrase = 'Ссылка на видео:';
              }

              _this.htmlCodePhrase = _this.mggPlayer.config.i18n('htmlcodetext');
              if (!_this.linkPhrase) {
                _this.linkPhrase = _this.mggPlayer.config.i18n('htmlCodeText');
              }
              if (!_this.linkPhrase) {
                _this.linkPhrase = 'HTML код плеера:';
              }
            }
            _this.update();
          }
          var hoverClassName = window.closeFormIcon[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
          _this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
            hoverClassName = window.closeFormIcon[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
          });

          this.share_form_close_button.addEventListener('mouseenter', function (event) {
            _this.hovered = true;
            _this.share_form_close_button_icon.classList.add(hoverClassName);
          });
          this.share_form_close_button.addEventListener('mouseleave', function (event) {
            _this.hovered = false;
            _this.share_form_close_button_icon.classList.remove(hoverClassName);
          });
          this.share_form_close_button.addEventListener('click', function (event) {
            _this.hovered = false;
            _this.share_form_close_button_icon.classList.remove(hoverClassName);
            _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
          });

          this.shared_link_input.addEventListener('click', function(event) {
            _this.shared_link_input.select();
          });

          _this.mggPlayer.on('property:' + skinConsts.CURRENT_OPENED_WIDGET, function (event) {
            if (event.data == skinConsts.ID_SHARE_WIDGET) {
              setVisible(true);
            } else {
              setVisible(false);
            }
          });

          function processShareLink() {
            var refererHost = _this.mggPlayer.config.host;
            var shareText = "Смотрю онлайн " + '"' + videoInfo.title + '"' + " на " + refererHost;

            _this.vkURL = 'http://vkontakte.ru/share.php?url=' + shareLink;
            _this.fbURL = 'http://facebook.com/sharer.php?u=' + shareLink;
            _this.twitterURL = 'https://twitter.com/intent/tweet?' + shareText.replace(refererHost, '@' + refererHost)
              + '&' + shareLink + '&utm_source=twitter&utm_medium=Share&utm_campaign=twitter';
            _this.gplusURL = 'https://plus.google.com/share?url=' + shareLink + '&h1=ru';
            var encodedShareText = encodeURI(shareText);
            _this.okURL = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=' + encodedShareText
              + '&st._surl=' + shareLink;
            encodedShareText = encodeURI(shareText);
            _this.ljURL = 'http://www.livejournal.com/update.bml?subject=' + encodedShareText + '&event=' + shareLink;
          }

          function setVisible(value) {
            if (opacityTween) {
              opacityTween.kill();
              if (opacityTween.isActive()) {
                opacityTween.eventCallback('onComplete', null);
                opacityTween.eventCallback('onStart', null);
              }
            }

            opacityTween = TweenLite.to(_this.root, .2, {opacity: value ? 1 : 0, ease: Power2.easeInOut});
            if (value) {
              opacityTween.eventCallback('onStart', onDisplayValue, [true]);
            } else {
              opacityTween.eventCallback('onComplete', onDisplayValue, [false]);
            }
          }

          function onDisplayValue(value) {
            _this.visible = value;
            _this.update();

            if (value) {
              _this.shared_link_input.select();
            }
          }

});

riot.tag2('subtitlescontainer', '<div id="subtitles_text"></div>', '', '', function(opts) {
        var _this = this;
        this.visible = _this.mggPlayer.get('subtitles') != 'off';

        var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);
        var bottomTween = null;

        this.root.style.fontSize = getSubtitlesFontSize(mainContainer.offsetHeight) + 'px';

        _this.mggPlayer.on('property:subtitles', onSubtitlesChange);
        _this.mggPlayer.on('property:subtitlesTextChange', onSubtitlesTextChange);

        _this.mggPlayer.on('property:' + skinConsts.SKIN_VISIBILITY_IS_CHANGING, function (event) {
	        if (event.data.active) {
		        positionSubtitles(event.data.visible);
	        }
        });
        _this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function(event) {
            _this.root.style.fontSize = getSubtitlesFontSize(mainContainer.offsetHeight) + 'px';
            var translateString = 'translate(-50%, ';
            translateString += event.data ? '0%)' : '-100%)';
            _this.root.style.transform = translateString;
        });

        function onSubtitlesChange(pEvent) {
            _this.visible = pEvent.data != 'off';
            _this.update();
        }

        function onSubtitlesTextChange(pEvent) {

            _this.subtitles_text.innerHTML = pEvent.data;

        }

        function positionSubtitles(skinIsVisible) {
            var destBottom;
	        if (bottomTween) {
		        bottomTween.kill();
	        }

            if (skinIsVisible) {
                destBottom = '10%';
            } else {
                destBottom = '3%';
            }
            bottomTween = TweenLite.to(_this.root, .1, {bottom: destBottom, ease: Power2.easeInOut, delay: skinIsVisible ? 0 : .3});
        }

        function getSubtitlesFontSize(mainHeight) {
            var size = Math.round(mainHeight * 4 / 100);
            if (size < 9) {
                size = 9;
            }
            return size;
        }

});

riot.tag2('tooltip', '<div class="tooltip_triangle_top" id="tooltip_triangle_top" style="display: none"></div><div class="tooltip_bg" id="tooltip_bg"><div class="tooltip_text" id="tooltip_text">{text}</div></div><div class="tooltip_triangle_bottom" id="tooltip_triangle_bottom"></div>', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
		this.visible = true;
		this.text = '';

		var _this = this;
		var opacityTween = null;
		var parent;
		var target;
		var heightCorrection, widthCorrection;
		var mggPlayer;

		_this.root.style.opacity = 0;

		this.setData = function(data) {
			_this.text = data.text;
			parent = data.parent;
			target = data.target;
			heightCorrection = data.heightCorrection || 0;
			widthCorrection = data.widthCorrection || 0;

			if (data.mggPlayer) {
				mggPlayer = data.mggPlayer;
				mggPlayer.on(skinConsts.SKIN_VISIBILITY_BEGIN_CHANGE, onVisibilityChanged);
			}

			if (data.subscribeOnLive === true && target && typeof target.addEventListener === 'function') {
				target.addEventListener('mouseleave', onMouseLeave);
			}

			if (data.padding !== undefined) {
				_this.tooltip_text.style.padding = data.padding + 'px';
			}

			if (data.fontSize) {
				_this.tooltip_text.style.fontSize = data.fontSize + 'pt';
			}

			if (data.maxWidth !== undefined) {
				if (data.maxWidth === -1) {
					_this.tooltip_text.style.maxWidth = 'initial';
					_this.tooltip_text.style.whiteSpace = 'nowrap';
				} else {
					_this.tooltip_text.style.maxWidth = data.maxWidth + 'px';
				}
			}

			var r = parseInt(data.fill.substr(0, 2), 16);
			var g = parseInt(data.fill.substr(2, 2), 16);
			var b = parseInt(data.fill.substr(4, 2), 16);

			_this.tooltip_bg.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',' + data.alpha + ')' ;
			_this.tooltip_triangle_top.style.borderBottomColor = 'rgba(' + r + ',' + g + ',' + b + ',' + data.alpha + ')' ;
			_this.tooltip_triangle_bottom.style.borderTopColor = 'rgba(' + r + ',' + g + ',' + b + ',' + data.alpha + ')' ;

			_this.update();
		};

		this.on('updated', function(event) {
			if (target) {
				var targetPosition = skinUtils.getRelativePosition(target, parent);
				var targetDimensions = {width: target.offsetWidth, height: target.offsetHeight};

				if (heightCorrection) {
					targetPosition.top += heightCorrection;
				}
				if (widthCorrection) {
					targetPosition.left += widthCorrection;
				}

				var top = targetPosition.top - _this.root.offsetHeight;
				var left = targetPosition.left + (targetDimensions.width - _this.root.offsetWidth) / 2;

				if (left + _this.root.offsetWidth > parent.offsetWidth) {
					var offset = left + _this.root.offsetWidth - parent.offsetWidth;
					left -= offset;
					_this.tooltip_triangle_bottom.style.marginLeft = offset + 'px';
					_this.tooltip_triangle_top.style.marginLeft = offset + 'px';
				} else if (left < 0) {
					left = 0;
					_this.tooltip_triangle_bottom.style.marginLeft = left + 'px';
					_this.tooltip_triangle_top.style.marginLeft = left + 'px';
				}

				if (top < 0) {
					_this.tooltip_triangle_bottom.style.display = 'none';
					_this.tooltip_triangle_top.style.display = 'block';

					top = targetPosition.top + targetDimensions.height;
				}

				_this.root.style.top = top + 'px';
				_this.root.style.left = left + 'px';

				show();
			}
		});

		function show() {
			if (!_this.text) {
				return;
			}

			if (opacityTween) {
				opacityTween.kill();
				opacityTween.eventCallback('onComplete', null);
			}

			opacityTween = TweenLite.to(_this.root, .3, {opacity: 1, ease: Power2.easeInOut});
		}

		_this.hide = function () {
			if (opacityTween) {
				opacityTween.kill();
				opacityTween.eventCallback('onComplete', null);
			}

			opacityTween = TweenLite.to(_this.root, .3, {opacity: 0, ease: Power2.easeInOut});
			opacityTween.eventCallback('onComplete', onComplete);
		};

		function onComplete() {
			_this.unmount();
		}

		function onVisibilityChanged(event) {
			if (!event.data) {
				_this.hide();
			}
		}
		function onMouseLeave(event) {
			_this.hide();
		}

});
riot.tag2('topbar', '<div class="top_left_container_class"><div id="video_title" class="{mggskin-hidden: !titleVisible}"><span>{title}</span><div class="mggskin-interactive-channel-icon-title {mggskin-hidden: !interactiveIconIsVisible}"></div></div><div id="video_extra_info">{extraInfoText}</div></div><div id="top_right_container" class="top_right_container_class"><sharebutton></sharebutton><closebutton></closebutton><onairbutton></onairbutton></div>', '', 'class="mggskin-unselectable mggskin-topbar"', function(opts) {
		this.titleVisible = false;
		this.visible = true;
		this.extraInfoText = '';
		this.title = '';
		this.interactiveIconIsVisible = false;

		var _this = this;
		var defaultExtraInfoText;
		var adCountDownTextUsed = false;
		var defaultTitleText = '';
		var isTrailer = false;
		var titleSpan = getSpan();

		_this.mggPlayer.on('property:videoInfo', onVideoInfoChange);
		function onVideoInfoChange(pEvent) {
			defaultTitleText = pEvent.data.title;

			titleSpan.innerText = defaultTitleText;
			_this.visible = true;
			isTrailer = pEvent.data.type == 'TRAILER';

			if (isTrailer) {
				defaultExtraInfoText = _this.mggPlayer.config.i18n('trailer') || 'Трейлер';

				titleSpan.innerText = defaultExtraInfoText;
				_this.titleVisible = true;
			}

			setTitleVisibilityByChannelType();

			_this.update();
		}

		_this.mggPlayer.on('ad:external:adWillStartIn', function(event) {
			if (_this.mggPlayer.config) {
				if (typeof defaultExtraInfoText !== 'string' && typeof _this.extraInfoText === 'string') {
					defaultExtraInfoText = _this.extraInfoText;
				}
				var message = _this.mggPlayer.config.i18n('beforeAdtTimerText') || 'Реклама начнется через ';
				message += event.data + ' ' + (_this.mggPlayer.config.i18n('second') || 'сек');
				_this.extraInfoText = message;
				adCountDownTextUsed = true;
				_this.update();
			}
		});

		_this.mggPlayer.on('ad:external:memberStartedPlaying', resetAdCountDown);

		_this.mggPlayer.on('ad:external:adComplete', resetAdCountDown);

		_this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function (event) {
			var span = getSpan();
			if (event.data) {
				_this.titleVisible = true;
				span.textContent = defaultTitleText;
				if (isTrailer) {
					_this.extraInfoText = defaultExtraInfoText;
				}
			} else {
				if (isTrailer) {
					span.textContent = defaultExtraInfoText;
					_this.titleVisible = true;
					_this.extraInfoText = '';
				} else {
					_this.titleVisible = false;
				}

				setTitleVisibilityByChannelType();
			}

			_this.update();
		});

		_this.mggPlayer.on('property:epg:currentChannel', function (event) {
			setTitleVisibilityByChannelType();
			_this.update();
		});

		_this.on('updated', function(event) {

			if (titleSpan) {
				var offset = 25;
				var spanWidth = titleSpan.offsetWidth + titleSpan.offsetLeft;
				var rightContainerLeft = _this.top_right_container.offsetLeft - offset;
				if (rightContainerLeft < 0) {
					rightContainerLeft = 0;
				}
				if (spanWidth > rightContainerLeft) {
					spanWidth = (rightContainerLeft - titleSpan.offsetLeft);
					skinUtils.cropStringToWidth(titleSpan, spanWidth);
				}

			}
		});

		function resetAdCountDown() {
			if (adCountDownTextUsed) {
				adCountDownTextUsed = false;
				_this.extraInfoText = defaultExtraInfoText;
				_this.update();
			}
		}

		function getSpan() {
			var result = null;
			var spans = _this.video_title.getElementsByTagName('span');
			if (spans && spans.length > 0) {
				result = spans[0];
			}
			return result;
		}

		function setTitleVisibilityByChannelType() {
			var currentChannel = _this.mggPlayer.get('epg:currentChannel');
			if (currentChannel) {
				_this.interactiveIconIsVisible = currentChannel.type === 'vodChannel' || currentChannel.type === 'dvrChannel';
				if (skinUtils.isFullScreen()) {
					_this.titleVisible = true;
				} else {
					var state;
					if (currentChannel.type === 'vodChannel') {
						state = _this.mggPlayer.get('vodchannel:channelState');
						if (state === 'watchnow') {
							_this.titleVisible = true;
						} else if (state === 'onAir') {
							_this.titleVisible = false;
						}
					} else if (currentChannel.type === 'dvrChannel') {
						_this.titleVisible = _this.mggPlayer.get('dvrchannel:channelState') === 'catchup';
					}
				}
			}
			_this.update();
		}

});

riot.tag2('channelitem', '<img riot-src="{imgSrc}"><div class="{mggskin-hidden: !mouseOver} channelItem_img_over" id="channelItem_img_over"><div class="{mggskin-hidden: isCurrentChannel}"></div></div><span id="channelItem_container" class="channelItem_container"><div class="{channelItem_title_green: mouseOver || isCurrentChannel} channelItem_title"><span id="channelItem_title">{title}</span><span id="channelItem_interactive_icon" class="channelItem_interactive_icon {mggskin-hidden: !isInteractive}"></span></div><div class="channelItem_description" id="channelItem_description">{description}</div></span>', '', 'class="{mggskin-hidden: !visible} unselectable"', function(opts) {
		this.visible = true;
		this.imgSrc = this.pictureUrlsArray && this.pictureUrlsArray['88x88'] ? this.pictureUrlsArray['88x88'] : '';
		this.description = this.currentProgram ? this.currentProgram.title : this.originalCategoryTitle;
		this.mggPlayer = this.parent.mggPlayer;
		this.mouseOver = false;
		this.isCurrentChannel = false;

		var titleCropped = false;

		var _this = this;
		var lineHeight = 15;
		var tooltip = null;
		var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);

		_this.mggPlayer.on('epg:currentProgramChanged', function (event) {
			if (event.data.megogoId == _this.megogoId) {
				_this.currentProgram = event.data.currentProgram;
				_this.description = _this.currentProgram ? _this.currentProgram.title : _this.originalCategoryTitle;
				_this.update();
			}
		});

		processCurrentChannel(_this.mggPlayer.get('epg:currentChannel'));
		_this.mggPlayer.on('property:epg:currentChannel', function(event) {
			processCurrentChannel(event.data);
		});

		_this.on('updated', function(event) {
			if (_this.channelItem_description && _this.channelItem_description.offsetHeight > 0) {
				if (getLinesCount() > 2) {
					cropDescription();
				}
			}

			if (!titleCropped && _this.channelItem_title.offsetWidth) {
				skinUtils.cropStringToWidth(_this.channelItem_title, 200);
				titleCropped = true;
			}
		});

		_this.root.addEventListener('mouseenter', onMouseEvent);
		_this.root.addEventListener('mouseleave', onMouseEvent);
		_this.root.addEventListener('mouseover', onMouseEvent);
		_this.root.addEventListener('wheel', onMouseEvent);
		_this.root.addEventListener('click', onMouseEvent);
		if (mainContainer) {
			mainContainer.addEventListener('mouseleave', onMouseEvent);
		}

		function onMouseEvent(event) {
			switch (event.type) {
				case 'mouseenter':
					_this.mouseOver = true;
					break;
				case 'mouseleave':
					_this.mouseOver = false;
					break;
				case 'click':
					if (!_this.isCurrentChannel) {
						_this.mggPlayer.emit('changeVideo', '/b/info?i=' + _this.megogoId);
					}
					break;
				case 'mouseover':
					if (event.target == _this.channelItem_interactive_icon) {
						if (!tooltip || !tooltip.isMounted) {
							tooltip = document.createElement('tooltip');
							var skinContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER + '_skin');
							skinContainer.appendChild(tooltip);
							var tagArray = riot.mount('tooltip');
							tooltip = tagArray[tagArray.length - 1];
							if (tagArray.length > 1) {
								for (var i = 0, l = tagArray.length - 1; i < l; ++i) {
									tagArray[i].unmount();
								}
							}
							var tooltipData =
							{
								target: _this.channelItem_interactive_icon,
								parent: skinContainer,
								fill: '000000',
								alpha: .8,
								text: _this.mggPlayer.config.i18n('interactivemessage') || skinConsts.INTERACTIVE_MESSAGE,
								mggPlayer: _this.mggPlayer,
								subscribeOnLive: true
							};
							tooltipData.heightCorrection = getLinesCount() > 1 ? -20 : -14;
							tooltip.setData(tooltipData);
						}
					}
					break;
				case 'wheel':
					if (event.target == _this.channelItem_interactive_icon) {
						hideTooltip();
					}
					break;
			}
			_this.update();
		}

		function cropDescription() {
			for (var i = 0, l = _this.description.length; i < l; ++i) {
				_this.description = _this.description.substr(0, _this.description.length - 5) + '...';
				_this.channelItem_description.innerHTML = _this.description;
				if (getLinesCount() <= 2) {
					break;
				}
			}
		}

		function getLinesCount() {
			return _this.channelItem_description.offsetHeight / lineHeight;
		}

		function positionLabels() {
			_this.channelItem_container.style.top = (-1 * _this.channelItem_container.offsetHeight) + 'px';
		}

		function processCurrentChannel(channel) {
			var newValue = channel && channel.megogoId === _this.megogoId;
			if (newValue != _this.isCurrentChannel) {
				_this.isCurrentChannel = newValue;
				_this.update();
				if (_this.isCurrentChannel) {
					_this.mggPlayer.set(skinConsts.CURRENT_CHANNEL_ITEM, _this);
				}
			}
		}

		function hideTooltip() {
			if (tooltip && tooltip.isMounted) {
				tooltip.hide();
			}
		}

});
riot.tag2('channelscategory', '<div id="channelsCategory_title_container" class="channelsCategory_title_container"><svg width="10" height="7" class="channelsCategory_arrow" id="channelsCategory_arrow"><path id="Down" style="fill-rule: evenodd;" d="M8.368,3.625L4.5,7.493,0.632,3.625,1.693,2.564,4.5,5.371,7.307,2.564Z"></path></svg><div class="channelsCategory_title" id="channelsCategory_title">{title} {channels.length}</div></div><div id="channelsCategory_items_container" class="channelsCategory_items_container"><channelitem each="{channels}"></channelItem></div>', '', 'class="{mggskin-hidden: !visible || !channels || channels.length == 0}"', function(opts) {
		this.visible = true;
		this.mggPlayer = this.parent.mggPlayer;
		this.isOpen = this.data.opened;
		this.channels = this.data.channels;

		var _this = this;
		var openTween = null;
		var rotateTween = null;
		var openedHeight = 0;

		var CHANNEL_ITEM_HEIGHT = 80;

		this.on('mount', function() {
			if (_this.tags && _this.tags.channelitem && _this.tags.channelitem.length > 0) {
				openedHeight = CHANNEL_ITEM_HEIGHT * _this.tags.channelitem.length;
			}

			if (!_this.isOpen) {
				_this.channelsCategory_items_container.style.height = '0px';
				_this.channelsCategory_arrow.style.transform = 'matrix(0, -1, 1, 0, 0, 0)';
				_this.channelsCategory_arrow.style.transformOrigin = '5px 4px 0px';
			}
		});

		_this.channelsCategory_title_container.addEventListener('click', onClick);

		function onClick(event) {
			if (_this.channelsCategory_items_container.offsetHeight > 0) {
				openCloseContainer(false);
			} else {
				openCloseContainer(true);
			}
		}

		function openCloseContainer(open) {
			killTween(openTween);
			killTween(rotateTween);
			_this.isOpen = open;
			openTween = TweenLite.to(_this.channelsCategory_items_container, .4, {height: open ? openedHeight + 'px' : '0px', ease: open? Power2.easeIn : Power2.easeOut});
			openTween.eventCallback('onComplete', onOpenTweenComplete);
			rotateTween = TweenLite.to(_this.channelsCategory_arrow, .4, {rotation: open ? 0 : -90, transformOrigin: '5px 4px'});
		}

		function killTween(tween) {
			if (tween && typeof tween.kill === 'function') {
				tween.kill();
				tween.eventCallback('onComplete', null);
				tween.eventCallback('onUpdate', null);
			}
		}

		function onOpenTweenComplete() {
			_this.mggPlayer.emit(skinConsts.CHANNELS_CATEGORY_STATE_CHANGED, _this);
		}

});
riot.tag2('bottomcontainer', '<leftcontainer></leftContainer><rightcontainer></rightContainer>', '', 'class="mggskin-bottomcontainer"', function(opts) {
        var _this = this;

        _this.mggPlayer.on('property:' + skinConsts.CONTROL_BAR_HEIGHT, function(event) {
            setBottomContainerHeight(event.data);
        });

        this.on('mount', function(event) {
            setBottomContainerHeight(_this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT));
        });

        function setBottomContainerHeight(height) {
            if (_this.parent.seekBarIsVisible) {
                height -= 10;
            }
            _this.root.style.height = height + 'px';
        }

});

riot.tag2('seekbar', '<div id="seek_bar" class="brand-color_background"></div><div id="seek_bar_click_area"></div><seekbartooltip></seekbartooltip>', '', 'class="{mggskin-hidden:!this.visible} mggskin-unselectable"', function(opts) {
		var MODE_REGULAR = 'regular';
		var MODE_INTERACTIVE = 'interactive';

		var _this = this;
		var duration = Math.floor(_this.mggPlayer.get('duration'));
		var position = 0;
		var clickAreaMouseDown = false;
		var bufferingStrip;
		var bufferingTween;
		var adTimeLabelsContainer;
		var workingMode = MODE_REGULAR;
		var dvrToolTipX = -1;
		var thumbOpacityTween = null;
		var sliderFillColorTween = null;
		var thumb;
		var thumbIsHidden = false;
		var currentChannel = null;
		var propertyPrefix = '';

		this.visible = true;

		window.noUiSlider.create(this.seek_bar, {
			start: 0,
			animate: true,
			connect: 'lower',
			range: {
				'min': 0,
				'max': 1
			}
		});
		var slider = this.seek_bar.noUiSlider;
		var sliderStarted = false;

		this.seek_bar.style.backgroundColor = '#ccc';
		addBufferingStrip();
		processAdTimeLabels(_this.mggPlayer.get('ad:timeLabels'));

		thumb = this.seek_bar.getElementsByClassName('noUi-handle');
		if (thumb && thumb.length > 0) {
			thumb = thumb[0];
			thumb.style.opacity = 0;
			thumbIsHidden = true;
			if (bufferingStrip) {
				bufferingStrip.style.opacity = .25;
			}
		}

		if (duration > 0) {
			updateSliderRange(duration);
		}
		_this.mggPlayer.on('property:duration', function (event) {
			if (workingMode === MODE_REGULAR) {
				updateSliderDuration(event.data);
			}
		});
		_this.mggPlayer.on('property:dvrchannel:currentProgramDuration', onCurrentProgramDurationChanged);
		_this.mggPlayer.on('property:vodchannel:currentProgramDuration', onCurrentProgramDurationChanged);

		function onCurrentProgramDurationChanged(event) {
			if (workingMode === MODE_INTERACTIVE) {
				updateSliderDuration(event.data);
			}
		}

		_this.mggPlayer.on('property:videoInfo', function(event) {
			if (thumbOpacityTween) {
				thumbOpacityTween.kill();
			}
			if (sliderFillColorTween) {
				sliderFillColorTween.kill();
			}

			var useAnimation = false;
			if (workingMode === MODE_REGULAR) {
				slider.set(0);
				useAnimation = true;
			} else if (workingMode === MODE_INTERACTIVE) {
				if (_this.mggPlayer.get('dvrchannel:channelState') === 'onAir') {
					useAnimation = true;
				}
			}

			if (useAnimation) {
				thumbOpacityTween = TweenLite.to(thumb, .2, {opacity: 0, ease: Power2.easeInOut});
				sliderFillColorTween = TweenLite.to(_this.seek_bar, .05, {backgroundColor: '#ccc', ease: Power2.easeInOut});
				if (bufferingStrip) {
					bufferingStrip.style.opacity = 0;
				}
				thumbIsHidden = true;
			}

		});

		_this.mggPlayer.on('player:timeUpdate', function (event) {
			if (bufferingStrip) {
				setBufferingStripWidth(_this.root.offsetWidth, true);
			}
		});

		_this.mggPlayer.on('property:position', function (event) {
			if (!sliderStarted) {
				if (workingMode === MODE_REGULAR || (workingMode === MODE_INTERACTIVE && currentChannel && currentChannel.type === 'vodChannel')) {
					position = event.data;
					if (position !== 0) {
						slider.set(position);
					}
				}

				if (thumbIsHidden) {
					if (thumbOpacityTween) {
						thumbOpacityTween.kill();
					}
					if (sliderFillColorTween) {
						sliderFillColorTween.kill();
					}
					thumbOpacityTween = TweenLite.to(thumb, .2, {opacity: 1, ease: Power2.easeInOut});
					sliderFillColorTween = TweenLite.to(_this.seek_bar, .1, {
						backgroundColor: window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)],
						ease: Power2.easeInOut
					});
					if (bufferingStrip) {
						bufferingStrip.style.opacity = .25;
					}
					thumbIsHidden = false;
				}
			}
		});

		_this.mggPlayer.on('property:dvrchannel:currentPosition', function(event) {
			if (workingMode === MODE_INTERACTIVE) {
				position = event.data;
				if (position !== 0) {
					slider.set(position);
				}

				if (thumbIsHidden) {
					if (thumbOpacityTween) {
						thumbOpacityTween.kill();
					}
					if (sliderFillColorTween) {
						sliderFillColorTween.kill();
					}
					thumbOpacityTween = TweenLite.to(thumb, .2, {opacity: 1, ease: Power2.easeInOut});
					sliderFillColorTween = TweenLite.to(_this.seek_bar, .1, {backgroundColor: window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)], ease: Power2.easeInOut});
					if (bufferingStrip) {
						bufferingStrip.style.opacity = .25;
					}
					thumbIsHidden = false;
				}
			}
		});

		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			if (bufferingStrip) {
				bufferingStrip.style.backgroundColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
				_this.seek_bar.style.backgroundColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
				_this.update();
			}
		});

		_this.mggPlayer.on('player:stop', onPlayerStop);
		_this.mggPlayer.on('property:state', function(event) {
			if (event.data === 0) {
				onPlayerStop();
			}
		});

		_this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function(event) {
			if (bufferingStrip) {
				setBufferingStripWidth(_this.root.offsetWidth, false);
			}
		});

		_this.mggPlayer.on('property:epg:currentChannel', function (event) {
			currentChannel = event.data;
			if (currentChannel && currentChannel.type === 'dvrChannel') {
				propertyPrefix = 'dvrchannel:';
				workingMode = MODE_INTERACTIVE;
				updateSliderDuration(_this.mggPlayer.get('dvrchannel:currentProgramDuration'));
				_this.mggPlayer.on('property:dvrchannel:channelState', onInteractiveChannelStateChanged);
				_this.mggPlayer.off('property:vodchannel:channelState', onInteractiveChannelStateChanged);
			} else if (currentChannel && currentChannel.type === 'vodChannel') {
				propertyPrefix = 'vodchannel:';
				workingMode = MODE_INTERACTIVE;
				updateSliderDuration(_this.mggPlayer.get('vodchannel:currentProgramDuration'));
				_this.mggPlayer.off('property:dvrchannel:channelState', onInteractiveChannelStateChanged);
				_this.mggPlayer.on('property:vodchannel:channelState', onInteractiveChannelStateChanged);
			} else {
				propertyPrefix = '';
				workingMode = MODE_REGULAR;
				updateSliderDuration(_this.mggPlayer.get('duration'));
				_this.mggPlayer.off('property:dvrchannel:channelState', onInteractiveChannelStateChanged);
				_this.mggPlayer.off('property:vodchannel:channelState', onInteractiveChannelStateChanged);
			}
		});

		_this.mggPlayer.on('property:ad:timeLabels', function(event) {
			processAdTimeLabels(event.data);
		});
		slider.on('start', function (event) {
			sliderStarted = true;
		});

		slider.on('end', function (event) {
			sliderStarted = false;
		});
		this.seek_bar_click_area.addEventListener('mousedown', function(event) {
			if (event.button == 0) {
				var time = getTime(event.offsetX);
				if (workingMode === MODE_REGULAR) {
					setTime(time);
				} else if (workingMode === MODE_INTERACTIVE) {
					if (currentChannel.type === 'dvrChannel') {
						_this.mggPlayer.emit('dvrchannel:dvrSeek', time);
					} else if (currentChannel.type === 'vodChannel') {
						_this.mggPlayer.emit('vodchannel:seek', time);
					}
				}
				clickAreaMouseDown = true;

				document.addEventListener('mouseup', onMouseUp);
			}
		});

		this.seek_bar_click_area.addEventListener('mousemove', function (event) {
			var time = getTime(event.offsetX);
			if (workingMode === MODE_INTERACTIVE) {
				var programTime = _this.mggPlayer.get(propertyPrefix + 'currentProgramTime');
				if (time > programTime) {
					time = programTime;
					if (dvrToolTipX === -1) {
						_this.mggPlayer.on('property:' + propertyPrefix + 'currentProgramTime', onCurrentDVRProgramTimeChanged)
					}
					dvrToolTipX = event.offsetX;
				} else {
					dvrToolTipX = -1;
					_this.mggPlayer.off('property:' + propertyPrefix + 'currentProgramTime', onCurrentDVRProgramTimeChanged);
				}
			}
			var data = {
				x: event.offsetX,
				useHours: duration >= 3600,
				action: 'show',
				time: time
			};
			_this.mggPlayer.emit(skinConsts.SEEK_BAR_TOOLTIP_STATE_CHANGED, data);

			if (clickAreaMouseDown) {
				if (workingMode === MODE_REGULAR) {
					setTime(time);
				} else if (workingMode === MODE_INTERACTIVE) {
					var currentProgramTime = _this.mggPlayer.get(propertyPrefix + 'currentProgramTime');
					if (currentChannel.type === 'dvrChannel') {
						_this.mggPlayer.emit('dvrchannel:dvrSeek', time > currentProgramTime ? currentProgramTime : time);
					} else if (currentChannel.type === 'vodChannel') {
						_this.mggPlayer.emit('vodchannel:seek', time > currentProgramTime ? currentProgramTime : time);
					}
				}
			}
		});

		this.seek_bar_click_area.addEventListener('mouseleave', function (event) {
			_this.mggPlayer.emit(skinConsts.SEEK_BAR_TOOLTIP_STATE_CHANGED, {action: 'hide'});
			if (workingMode === MODE_INTERACTIVE) {
				dvrToolTipX = -1;
				_this.mggPlayer.off('property:' + propertyPrefix + 'currentProgramTime', onCurrentDVRProgramTimeChanged);
			}
		});

		function onCurrentDVRProgramTimeChanged(event) {
			var data = {
				x: dvrToolTipX,
				useHours: duration >= 3600,
				action: 'show',
				time: event.data
			};
			_this.mggPlayer.emit(skinConsts.SEEK_BAR_TOOLTIP_STATE_CHANGED, data);
		}

		function onInteractiveChannelStateChanged(event) {
			if (event.data === 'timeshift' || event.data === 'onAir') {
				workingMode = MODE_INTERACTIVE;
				updateSliderDuration(_this.mggPlayer.get(propertyPrefix + 'currentProgramDuration') || .1);
			} else {
				var duration = _this.mggPlayer.get('duration');
				if (duration > 0) {
					updateSliderDuration();
				}
				workingMode = MODE_REGULAR;
			}
		}

 		function onPlayerStop() {
			if (workingMode === MODE_REGULAR) {
				slider.set(0);
			}
		}

		function updateSliderRange(value) {
			slider.updateOptions({
				range: {min: 0, max: value}
			}, false);
			if (thumbIsHidden) {
				if (thumbOpacityTween) {
					thumbOpacityTween.kill();
				}
				if (sliderFillColorTween) {
					sliderFillColorTween.kill();
				}
				thumbOpacityTween = TweenLite.to(thumb, .2, {opacity: 1, ease: Power2.easeInOut});
				sliderFillColorTween = TweenLite.to(_this.seek_bar, .1, {backgroundColor: window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)], ease: Power2.easeInOut});
				if (bufferingStrip) {
					bufferingStrip.style.opacity = .25;
				}
				thumbIsHidden = false;
			}
		}

		function onMouseUp(event) {
			clickAreaMouseDown = false;
			document.removeEventListener('mouseup', onMouseUp);
		}

		function setTime(time) {
			slider.set(time);
			_this.mggPlayer.seekTo(time);
		}

		function getTime(x) {
			var time = x / (_this.seek_bar_click_area.offsetWidth) * duration;
			if (time < 0) {
				time = 0;
			} else if (time > duration - 10) {
				time = duration - 10;
			}
			return time;
		}

		function addBufferingStrip() {
			var sliderOrigin = _this.seek_bar.getElementsByClassName('noUi-base');
			if (sliderOrigin && sliderOrigin.length > 0) {
				sliderOrigin = sliderOrigin[0];
			}
			if (sliderOrigin) {
				bufferingStrip = document.createElement('div');
				bufferingStrip.id = 'buffering';
				bufferingStrip.classList.add('buffering_strip');
				bufferingStrip.classList.add('brand-color_background');
				bufferingStrip.style.backgroundColor = window.brandColor[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
				sliderOrigin.appendChild(bufferingStrip);
			}
		}

		function setBufferingStripWidth(mainWidth, useAnimation) {
			var calculatedWidth = 0;

			if (workingMode === MODE_REGULAR) {
				if (Math.abs(position - duration) <= 1) {
					bufferingStrip.style.width = '0px';
					return;
				}

				calculatedWidth = mainWidth * _this.mggPlayer.get('loadedFraction') + 12 + 17;

			} else if (workingMode === MODE_INTERACTIVE) {
				calculatedWidth = mainWidth * _this.mggPlayer.get(propertyPrefix + 'currentProgramTime') / _this.mggPlayer.get(propertyPrefix + 'currentProgramDuration');
			}

			if (calculatedWidth > mainWidth) {
				calculatedWidth = mainWidth;
			}
			if (bufferingTween) {
				bufferingTween.kill();
			}
			if (useAnimation) {
				bufferingTween = TweenLite.to(bufferingStrip, .5, {
					width: calculatedWidth + 'px',
					ease: Power2.easeInOut
				});
			} else {
				bufferingStrip.style.width = calculatedWidth + 'px';
			}
		}

		function updateSliderDuration(newDuration) {
			duration = newDuration;
			if (duration == Infinity || duration < 0 || isNaN(duration) || !duration) {
				duration = .1;
			}
			updateSliderRange(duration);
		}

		function processAdTimeLabels(timeLabels) {
			if (timeLabels) {
				if (!adTimeLabelsContainer) {
					var sliderOrigin = _this.seek_bar.getElementsByClassName('noUi-base');
					if (sliderOrigin && sliderOrigin.length > 0) {
						sliderOrigin = sliderOrigin[0];
					}
					if (sliderOrigin) {
						adTimeLabelsContainer = document.createElement('div');
						adTimeLabelsContainer.id = 'ad_time_labels';
						adTimeLabelsContainer.className = 'ad_time_labels_container';
						sliderOrigin.appendChild(adTimeLabelsContainer);
					}
				}
				if (adTimeLabelsContainer.childNodes.length > 0) {
					while (adTimeLabelsContainer.firstChild) {
						adTimeLabelsContainer.removeChild(adTimeLabelsContainer.firstChild);
					}
				}
				var timeLabel;
				for (var i = 0, l = timeLabels.length; i < l; ++i) {
					timeLabel = document.createElement('div');
					timeLabel.className = 'ad_time_label';
					adTimeLabelsContainer.appendChild(timeLabel);
					timeLabel.style.left = (timeLabels[i].time / duration) * 100 + '%';
				}

			}
		}

});

riot.tag2('programitem', '<div id="programitem_mouseevent_container" class="{programitem_cursor_pointer: canPlay || dvrAirProgram}"><div class="programitem_air_dot {mggskin-hidden: !interactiveChannel || programState !== \'current\'}"></div><div id="programitem_text_container" class="programitem_text_container {programitem_over: mouseOver} {programitem_current: (programState === \'current\' && onAir) || programState === \'currentPlaying\'}"><div class="programitem_time {programitem_time_past: programState === \'past\'}" id="programitem_time">{programTime} </div><div class="programitem_title {programitem_title_past: programState === \'past\'}" id="programitem_title">{programTitle} </div></div><div id="programitem_watchnow_icon" class="programitem_watchnow_icon {mggskin-hidden: !canPlay || dvrAirProgram}"></div></div>', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
		var FURTHER = 'further';
		var CURRENT = 'current';
		var PAST = 'past';
		var CURRENT_PLAYING = 'currentPlaying';

		this.visible = true;
		this.mggPlayer = this.parent.mggPlayer;
		this.mouseOver = false;
		this.programState = FURTHER;
		this.canPlay = false;
		this.dvrAirProgram = false;
		this.interactiveChannel = false;
		this.onAir = true;

		var _this = this;
		var currentChannel = _this.mggPlayer.get('epg:currentChannel');
		var startDate = new Date(_this.startTimestamp * 1000);
		var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);
		var tooltip = null;

		processOriginProgram();

		_this.programTime = skinUtils.getFormatCurrentTime(startDate.getHours(), startDate.getMinutes());
		_this.programTitle = cropString(_this.title, 200);

		_this.mggPlayer.registerProperty(skinConsts.CURRENT_PROGRAM_ITEM, null, true);

		if (_this.mggPlayer.config.device.browser.name === 'Safari') {
			_this.programitem_time.style.top = '4px';
		}

		_this.on('unmount', function (event) {
			dispose();
		});

		setProgramState();
		_this.programitem_mouseevent_container.addEventListener('click', onTextContainerMouseEvent);
		_this.programitem_mouseevent_container.addEventListener('mouseenter', onTextContainerMouseEvent);
		_this.programitem_mouseevent_container.addEventListener('mouseleave', onTextContainerMouseEvent);

		_this.programitem_watchnow_icon.addEventListener('wheel', onWatchnowIconMouseEvent);
		_this.programitem_watchnow_icon.addEventListener('mouseover', onWatchnowIconMouseEvent);
		_this.programitem_watchnow_icon.addEventListener('mouseout', onWatchnowIconMouseEvent);

		if (mainContainer) {
			mainContainer.addEventListener('mouseleave', onWatchnowIconMouseEvent);
		}

		_this.mggPlayer.on('epg:activeChannelCurrentProgramChanged', onProgramChanged);
		_this.mggPlayer.on('epg:programsUpdated', onProgramChanged);
		_this.mggPlayer.on('property:vodchannel:currentVodProgram', onVodDvrProgramChanged);
		_this.mggPlayer.on('property:dvrchannel:currentDvrProgram', onVodDvrProgramChanged);

		function dispose() {
			_this.programitem_mouseevent_container.removeEventListener('click', onTextContainerMouseEvent);
			_this.programitem_mouseevent_container.removeEventListener('mouseenter', onTextContainerMouseEvent);
			_this.programitem_mouseevent_container.removeEventListener('mouseleave', onTextContainerMouseEvent);
			_this.programitem_watchnow_icon.removeEventListener('mouseover', onWatchnowIconMouseEvent);
			_this.programitem_watchnow_icon.removeEventListener('wheel', onWatchnowIconMouseEvent);
			_this.mggPlayer.off('epg:activeChannelCurrentProgramChanged', onProgramChanged);
			_this.mggPlayer.off('epg:programsUpdated', onProgramChanged);
			_this.mggPlayer.off('property:vodchannel:currentVodProgram', onVodDvrProgramChanged);
			_this.mggPlayer.off('property:dvrchannel:currentDvrProgram', onVodDvrProgramChanged);
			if (mainContainer) {
				mainContainer.removeEventListener('mouseleave', onWatchnowIconMouseEvent);
			}
		}

		function onProgramChanged(event) {
			setProgramState();
		}

		function onVodDvrProgramChanged(event) {
			setProgramState();
		}

		function setProgramState() {
			var currentProgram = currentChannel.currentProgram;
			if (!currentProgram) {
				return;
			}
			if (currentChannel.type === 'regularChannel') {
				if (_this.startTimestamp === currentProgram.startTimestamp) {
					_this.programState = CURRENT;
					_this.mggPlayer.set(skinConsts.CURRENT_PROGRAM_ITEM, _this);
				} else if (_this.endTimestamp <= currentProgram.startTimestamp) {
					_this.programState = PAST;
				} else if (_this.startTimestamp >= currentProgram.endTimestamp) {
					_this.programState = FURTHER;
				}
			} else if (currentChannel.type === 'vodChannel') {
				var currentVodProgram = _this.mggPlayer.get('vodchannel:currentVodProgram');
				_this.onAir = currentVodProgram && currentProgram.startTimestamp === currentVodProgram.startTimestamp;

				if (_this.endTimestamp <= currentProgram.startTimestamp) {
					_this.programState = PAST;
				} else if (_this.startTimestamp >= currentProgram.endTimestamp) {
					_this.programState = FURTHER;
				}
				if (_this.onAir) {
					if (_this.startTimestamp === currentProgram.startTimestamp) {
						_this.programState = CURRENT;
						_this.mggPlayer.set(skinConsts.CURRENT_PROGRAM_ITEM, _this);
					}
				} else {
					if (_this.startTimestamp === currentVodProgram.startTimestamp) {
						_this.programState = CURRENT_PLAYING;
						_this.mggPlayer.set(skinConsts.CURRENT_PROGRAM_ITEM, _this);
					} else if (_this.startTimestamp === currentProgram.startTimestamp) {
						_this.programState = CURRENT;
					}
				}
			} else if (currentChannel.type === 'dvrChannel') {
				var currentDvrProgram = _this.mggPlayer.get('dvrchannel:currentDvrProgram');

				_this.dvrAirProgram = false;
				_this.canPlay = false;

				_this.onAir = currentDvrProgram && currentProgram.startTimestamp === currentDvrProgram.startTimestamp;

				if (_this.endTimestamp <= currentProgram.startTimestamp) {
					_this.programState = PAST;
					_this.canPlay = !!_this.virtualObjectId;
				} else if (_this.startTimestamp >= currentProgram.endTimestamp) {
					_this.programState = FURTHER;
				}
				if (_this.onAir) {
					if (_this.startTimestamp === currentProgram.startTimestamp) {
						_this.programState = CURRENT;
						_this.mggPlayer.set(skinConsts.CURRENT_PROGRAM_ITEM, _this);
					}
				} else {
					if (_this.startTimestamp === currentDvrProgram.startTimestamp) {
						_this.programState = CURRENT_PLAYING;
						_this.mggPlayer.set(skinConsts.CURRENT_PROGRAM_ITEM, _this);
					} else if (_this.startTimestamp === currentProgram.startTimestamp) {
						_this.programState = CURRENT;
						_this.dvrAirProgram = true;
						_this.canPlay = true;
					}
				}

			}
			_this.update();
		}

		function onTextContainerMouseEvent(event) {
			switch (event.type) {
				case 'mouseenter':
					if (_this.canPlay) {
						_this.mouseOver = true;
						_this.update();
					}
					break;
				case 'mouseleave':
					_this.mouseOver = false;
					_this.update();
					break;
				case 'click':
					if (_this.canPlay) {
						if (currentChannel) {
							if (currentChannel.type === 'vodChannel') {
								_this.mggPlayer.emit('vodchannel:playProgram',
										{
											objectId: _this.objectId,
											title: _this.title,
											startTimestamp: _this.startTimestamp,
											endTimestamp: _this.endTimestamp
										}
								);
							} else if (currentChannel.type === 'dvrChannel') {
								if (_this.dvrAirProgram) {
									_this.mggPlayer.emit('dvrchannel:backOnAir');
								} else {
									_this.mggPlayer.emit('dvrchannel:playProgram',
											{
												virtualObjectId: _this.virtualObjectId,
												title: _this.title,
												startTimestamp: _this.startTimestamp,
												endTimestamp: _this.endTimestamp,
												clickedFromProgramsPanel: true
											}
									);
								}
							}
						}
					}
					break;
			}
		}

		function onWatchnowIconMouseEvent(event) {
			switch (event.type) {
				case 'mouseover':
					if (!tooltip || !tooltip.isMounted) {
						tooltip = document.createElement('tooltip');
						var skinContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER + '_skin');
						skinContainer.appendChild(tooltip);
						var tagArray = riot.mount('tooltip');
						tooltip = tagArray[tagArray.length - 1];
						if (tagArray.length > 1) {
							for (var i = 0, l = tagArray.length - 1; i < l; ++i) {
								tagArray[i].unmount();
							}
						}
						tooltip.setData(
								{
									target: _this.programitem_watchnow_icon,
									parent: skinContainer,
									fill: '000000',
									alpha: .8,
									text: _this.mggPlayer.config.i18n('interactivemessage') || skinConsts.INTERACTIVE_MESSAGE,
									mggPlayer: _this.mggPlayer,
									subscribeOnLive: true
								}
						);
					}
					break;
				case 'wheel':
					hideTooltip();
					break;
			}
		}

		function processOriginProgram() {
			if (currentChannel) {
				if (currentChannel.type === 'vodChannel') {
					_this.canPlay = Boolean(_this.objectId && _this.objectId > 0);
					_this.interactiveChannel = true;
				} else if (currentChannel.type === 'dvrChannel') {

					_this.canPlay = false;
					_this.interactiveChannel = true;
				} else if (currentChannel.type === 'regularChannel') {
					_this.canPlay = false;
					_this.interactiveChannel = true;
				}
			}
		}

		function hideTooltip() {
			if (tooltip && tooltip.isMounted) {
				tooltip.hide();
			}
		}

		function cropString(string, width) {
			var pixelsPerSymbol = 6.65;
			var maxSymbols = Math.floor(width / pixelsPerSymbol);
			if (string && string.length > maxSymbols) {
				string = string.substr(0, maxSymbols - 3) + '...'
			}
			return string
		}

});
riot.tag2('programscontainer', '<div id="programsContainer_header"><div id="programsContainer_headerText">{data.name}</div></div><div id="programsContainer_items"><programitem each="{data.items}"></programitem></div>', '', 'class="{mggskin-hidden: !visible} mggskin-unselectable"', function(opts) {
		this.visible = true;

		var _this = this;

		_this.on('updated', function(event) {
			if (_this.root.offsetParent) {
				var newHeaderTop;
				var top = _this.root.offsetTop + _this.root.offsetParent.offsetTop;
				var height = _this.programsContainer_header.offsetHeight + _this.programsContainer_items.offsetHeight;
				if (top < 0) {
					newHeaderTop = top * -1;
				} else {
					newHeaderTop = 0
				}
				if (newHeaderTop + _this.programsContainer_header.offsetHeight > height) {
					newHeaderTop = height - _this.programsContainer_header.offsetHeight;
				}
				_this.programsContainer_header.style.top = newHeaderTop + 'px';
			}
		});

});
riot.tag2('ageicon', '<span>{age}</span>', '', 'class="{mggskin-hidden: !visible} mggskin-ageicon"', function(opts) {
		this.visible = true;
		this.age = '18+';

		var _this = this;

});
riot.tag2('closebutton', '<div id="mggskin_close_button"></div>', '', 'if="{visible}" class="topbar_button"', function(opts) {
		var _this = this;
		this.visible = false;
		var hoverClassName = window.closeButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];

		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			hoverClassName = window.closeButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		});

		this.root.addEventListener('mouseenter', function(event) {
			_this.mggskin_close_button.classList.add(hoverClassName);
		});
		this.root.addEventListener('mouseleave', function(event) {
			_this.mggskin_close_button.classList.remove(hoverClassName);
		});
		this.root.addEventListener('click', function (event) {
			if (skinUtils.isFullScreen()) {
				_this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, onFullscreenStateChange);
				skinUtils.cancelFullScreen();
			} else {
				_this.mggPlayer.emit('skin:closeButtonClick');
			}

		});

		var videoInfo = _this.mggPlayer.get('videoInfo');
		_this.mggPlayer.on('property:videoInfo', function(event) {
			videoInfo = event.data;
			processVideoInfo(event.data);
		});
		if (videoInfo) {
			processVideoInfo(videoInfo);
		}

		function processVideoInfo(info) {
			_this.visible = info['showCloseButton'];
			_this.update();
		}

		function onFullscreenStateChange(event) {
			if (!event.data) {
				_this.mggPlayer.off(skinConsts.FULLSCREEN_STATE_CHANGED, onFullscreenStateChange);
				_this.mggPlayer.emit('skin:closeButtonClick');
			}
		}

});
riot.tag2('onairbutton', '<div id="onAirButtonLeft"></div><div id="onAirButtonCenter"><span id="onAirButtonText">{buttonText}</span></div><div id="onAirButtonRight"></div>', '', 'class="topbar_button {mggskin-hidden: !visible}"', function(opts) {
		this.visible = false;
		this.buttonText = 'Назад в ТВ';

		var _this = this;
		var hoverClassName = window.onAirButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		var channelType = '';

		setButtonText();

		_this.mggPlayer.on('property:epg:currentChannel', function (event) {
			if (event.data && (event.data.type === 'dvrChannel' || event.data.type === 'vodChannel')) {
				channelType = event.data.type;
				if (channelType === 'dvrChannel') {
					_this.mggPlayer.on('property:dvrchannel:channelState', onChannelStateChanged);
					_this.mggPlayer.off('property:vodchannel:channelState', onChannelStateChanged);
				} else if (channelType === 'vodChannel') {
					_this.mggPlayer.on('property:vodchannel:channelState', onChannelStateChanged);
					_this.mggPlayer.off('property:dvrchannel:channelState', onChannelStateChanged);
				}
			} else {
				_this.mggPlayer.off('property:vodchannel:channelState', onChannelStateChanged);
				_this.mggPlayer.off('property:dvrchannel:channelState', onChannelStateChanged);
				channelType = '';
				_this.visible = false;
				_this.update();
			}
		});

		_this.mggPlayer.on('property:videoInfo', function(event) {
			setButtonText();
		});

		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			hoverClassName = window.onAirButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		});

		_this.root.addEventListener('mouseenter', function(event) {
			_this.onAirButtonLeft.classList.add(hoverClassName);
			_this.onAirButtonCenter.classList.add(hoverClassName);
			_this.onAirButtonRight.classList.add(hoverClassName);
		});
		_this.root.addEventListener('mouseleave', function(event) {
			_this.onAirButtonLeft.classList.remove(hoverClassName);
			_this.onAirButtonCenter.classList.remove(hoverClassName);
			_this.onAirButtonRight.classList.remove(hoverClassName);
		});
		_this.root.addEventListener('click', function(event) {
			if (channelType === 'vodChannel') {
				_this.mggPlayer.emit('vodchannel:backOnAir');
			} else if (channelType === 'dvrChannel') {
				_this.mggPlayer.emit('dvrchannel:backOnAir');
			}
		});

		function setButtonText() {
			if (_this.mggPlayer.config) {

				_this.buttonText = _this.mggPlayer.config.i18n('onair') || 'Назад в ТВ';
				_this.update();
			}
		}

		function onChannelStateChanged(event) {
			if (channelType === 'dvrChannel') {
				_this.visible = event.data === 'catchup';
			} else if (channelType === 'vodChannel') {
				_this.visible = event.data === 'watchnow';
			}
			_this.update();
		}

});
riot.tag2('sharebutton', '<div id="mggskin_share_button"></div>', '', 'if="{visible}" class="topbar_button"', function(opts) {
		var _this = this;
		this.visible = false;
		var hoverClassName = window.shareButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];

		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			hoverClassName = window.shareButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		});

		var videoInfo = _this.mggPlayer.get('videoInfo');
		_this.mggPlayer.on('property:videoInfo', function(event) {
			videoInfo = event.data;
			processVideoInfo(event.data);
		});
		if (videoInfo) {
			processVideoInfo(videoInfo);
		}

		function processVideoInfo(info) {
			_this.visible = info['share_link'];
			_this.update();
		}

		this.root.addEventListener('mouseenter', function(event) {
			_this.mggskin_share_button.classList.add(hoverClassName);
		});
		this.root.addEventListener('mouseleave', function(event) {
			_this.mggskin_share_button.classList.remove(hoverClassName);
		});
		this.root.addEventListener('click', function(event) {
			_this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, skinConsts.ID_SHARE_WIDGET);
		});

});
riot.tag2('leftcontainer', '<playbutton></playButton><pausebutton></pauseButton><restartbutton></restartbutton><volumebutton></volumeButton><positiontime></positionTime>', '', 'class="mggskin-leftcontainer"', function(opts) {
});

riot.tag2('rightcontainer', '<fullscreenbutton></fullscreenButton><settingsbutton></settingsButton><programsbutton></programsbutton><nextbutton></nextButton><channelsbutton></channelsButton><prevbutton></prevButton><chromecastbutton></chromecastbutton><airplaybutton></airplaybutton>', '', 'class="mggskin-rightcontainer"', function(opts) {
});

riot.tag2('seekbartooltip', '<div class="seekbar_tooltip_bg"></div><span class="{timeClass}">{time}</span>', '', 'class="{mggskin-invisible: !visible}"', function(opts) {
        this.visible = false;
        this.time = '00:00';
        this.timeClass = 'seekbar_tooltip_text_normal';

        var _this = this;
        var imgElements = {};
        var currentSrc, currentOffset, currentWidth, currentHeight, currentX;
        currentSrc = currentOffset = currentWidth = currentHeight = currentX = void 0;

        var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);

        _this.mggPlayer.on(skinConsts.SEEK_BAR_TOOLTIP_STATE_CHANGED, function(event) {
            var data = event.data;
            if (data.action == 'show') {
                _this.visible = true;
                _this.time = skinUtils.formatTime(data.time, data.useHours);

                var time = data.time;
                var currentChannel = _this.mggPlayer.get('epg:currentChannel');
                if (currentChannel && currentChannel.type === 'dvrChannel') {
                    var program = _this.mggPlayer.get('dvrchannel:currentDvrProgram');
                    if (program) {
                        time = program.startTimestamp + time;
                    }
                }

                _this.mggPlayer.set('thumbnailsTime', time);

	            if (!currentSrc) {
		            _this.timeClass = 'seekbar_tooltip_text_normal';
                    _this.root.style.width = 'initial';
                    _this.root.style.height = 'initial';
	            } else {
		            _this.timeClass = 'seekbar_tooltip_text_with_thumbs';
	            }

                currentX = data.x;
                setPosition(data.x);
            } else if (data.action == 'hide') {
                _this.visible = false;
            }
            _this.update();
        });

        _this.mggPlayer.on('property:videoInfo', function (event) {
            for (var prop in imgElements) {
                if (imgElements[prop].parentNode) {
                    imgElements[prop].parentNode.removeChild(imgElements[prop])
                }
            }
            imgElements = {};
            currentSrc = currentOffset = currentWidth = currentHeight = void 0;

			var thumbs;
	        if (event.data && event.data.preview_images && event.data.preview_images.thumbsline_list) {
		        thumbs = event.data.preview_images.thumbsline_list;
	        }
	        if (thumbs && thumbs.length > 0) {
		        for (var i = 0, l = thumbs.length; i < l; ++i) {
			        createImg(thumbs[i].url);
		        }
	        }
        });

        _this.mggPlayer.on('property:thumbnails', function (event) {
            currentSrc = event.data.src;
            currentOffset = event.data.offset;
            currentWidth = event.data.width;
            currentHeight = event.data.height;

            if (!currentSrc) {
                removeImagesFromDOM();
            } else if (imgElements[event.data.src]) {
                if (_this.visible) {
                    showThumbnail(currentSrc, currentOffset, currentWidth, currentHeight);
                    setPosition(currentX);
                }
            } else {
	            if (event.data.src) {
		            createImg(event.data.src);
	            } else {
		            _this.timeClass = 'seekbar_tooltip_text_normal';
		            _this.update();
	            }
            }
        });

        function setPosition(x) {
            var halfWidth = _this.root.offsetWidth / 2;
            if (x - halfWidth < 0) {
                x = halfWidth;
            } else if (x + halfWidth > mainContainer.offsetWidth) {
                x = mainContainer.offsetWidth - halfWidth;
            }
            _this.root.style.left = (x - halfWidth) + 'px';
        }

        function showThumbnail(src, offset, width, height) {
            if (src != undefined && offset != undefined &&
                width != undefined && height != undefined &&
                imgElements[src]) {

                if (!imgElements[src].parentElement) {
                   removeImagesFromDOM();
                    _this.root.insertBefore(imgElements[src], _this.root.firstChild);
                }

                _this.root.style.width = width + 'px';
                _this.root.style.height = height + 'px';
                imgElements[src].style.left = offset + 'px';
            }
        }

        function createImg(src) {
            imgElements[src] = document.createElement('img');
            imgElements[src].style.position = 'absolute';
            imgElements[src].style.maxWidth = 'initial';
            imgElements[src].addEventListener('load', onImgEvent);
            imgElements[src].src = src;
        }

        function onImgEvent(event) {
            event.currentTarget.removeEventListener('load', onImgEvent);
            if (_this.visible) {
                showThumbnail(currentSrc, currentOffset, currentWidth, currentHeight);
                setPosition(currentX);
            }
        }

        function removeImagesFromDOM() {
            var imgs = _this.root.getElementsByTagName('img');
            for (var i = 0, l = imgs.length; i < l; ++i) {
                if (imgs[i].parentNode) {
                    imgs[i].parentNode.removeChild(imgs[i]);
                }
            }
        }

});

riot.tag2('pausebutton', '<div id="pause_button"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !isMobile} resizable_button"', function(opts) {
        var _this = this;
        var prevState = _this.mggPlayer.get('state');
        this.visible = false;
        this.isMobile = false;

        _this.mggPlayer.on('property:state', onPlayerStateChange);
        this.root.addEventListener('click', onClick);

        _this.mggPlayer.on('property:' + skinConsts.IS_MOBILE_DEVICE, function(event) {
            _this.isMobile = Boolean(event.data);
            _this.update();
        });

        function onClick(event) {
            var state = _this.mggPlayer.get('state');
            if (state == 1) {
                _this.mggPlayer.pause();
            }
        }

        function onPlayerStateChange(pEvent) {
            if (pEvent.data == 3 || pEvent.data == 4) {
                return;
            }
            _this.visible = pEvent.data == 1;
            _this.update();
        }

});

riot.tag2('playbutton', '<div id="play_button"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !isMobile} resizable_button"', function(opts) {
        var _this = this;
        var prevState = _this.mggPlayer.get('state');
        this.visible = true;
        _this.mggPlayer.on('property:state', onPlayerStateChange);
        this.root.addEventListener('click', onClick);
        this.isMobile = false;

        _this.mggPlayer.on('property:' + skinConsts.IS_MOBILE_DEVICE, function(event) {
            _this.isMobile = Boolean(event.data);
            _this.update();
        });

        function onClick(event) {
            var state = _this.mggPlayer.get('state');
            if (state != 1) {
                _this.mggPlayer.play();
            }
        }

        function onPlayerStateChange(event) {
            if (event.data == 3 || event.data == 4) {
                return;
            }
            _this.visible = event.data != 1;
            prevState = event.data;
            _this.update();
        }
});

riot.tag2('positiontime', '<div id="position_time" class="{dvr_position_timeshift: interactiveChannelState === \'timeshift\'}"><div class="{mggskin-hidden: interactiveChannelState !== \'timeshift\' && interactiveChannelState !== \'onAir\'} dvr_position_air_dot"></div><span class="position_time__current">{positionStr}</span><span class="{mggskin-hidden: isLive} position_time__total"> / {durationStr}</span></div>', '', '', function(opts) {
        var MODE_REGULAR = 'modeRegular';
        var MODE_INTERACTIVE = 'modeInteractive';
        var DVR_LIVE_PHRASE = 'Live';

        var _this = this;
        var mouseOver = false;
        var propertyPrefix = '';
        var currentChannel = null;
        var vodChannelIntervalId = null;

        this.workingMode = MODE_REGULAR;
        this.isLive = false;
        this.visible = true;
        this.interactiveChannelState = '';
        this.positionStr = skinUtils.formatTime(_this.mggPlayer.get('position'), duration >= 3600);
        var duration = _this.mggPlayer.get('duration');
        this.durationStr = skinUtils.formatTime(duration, duration >= 3600);

        _this.mggPlayer.on('property:position', function(event) {
            if (_this.workingMode === MODE_REGULAR) {
                if (_this.isLive) {
                    var nowDate = new Date();
                    _this.positionStr = skinUtils.getFormatCurrentTime(nowDate.getHours(), nowDate.getMinutes());
                } else {
                    if (duration > 0) {
                        _this.positionStr = skinUtils.formatTime(event.data, duration >= 3600);
                    }
                }
                _this.update();
            } else if (_this.workingMode === MODE_INTERACTIVE) {
            	if (!mouseOver) {
		            if (currentChannel.type === 'dvrChannel') {
			            setDvrText(false);
		            } else if (currentChannel.type === 'vodChannel') {
			            setVodChannelAirText(false)
		            }
	            }
            }
        });
        _this.mggPlayer.on('property:duration', function(event) {
            duration = event.data;
            _this.durationStr = skinUtils.formatTime(duration, duration >= 3600);
            _this.update();
        });
        _this.mggPlayer.on('player:stop', onPlayerStop);
        _this.mggPlayer.on('property:state', function(event) {
            if (event.data === 0) {
                onPlayerStop();
            } else if (event.data == 1 && duration === 0) {
                duration = _this.mggPlayer.get('duration');
                _this.durationStr = skinUtils.formatTime(duration, duration >= 3600);
                _this.update();
            }
        });

        _this.mggPlayer.on('property:epg:currentChannel', function (event) {
        	currentChannel = event.data;
            if (event.data && (event.data.type === 'dvrChannel' || event.data.type === 'vodChannel')) {
            	propertyPrefix = event.data.type.toLowerCase() + ':';
                _this.mggPlayer.on('property:dvrchannel:channelState', onInteractiveChannelStateChanged);
                _this.mggPlayer.on('property:vodchannel:channelState', onInteractiveChannelStateChanged);
                _this.interactiveChannelState = _this.mggPlayer.get(propertyPrefix + 'channelState');
                _this.positionStr = DVR_LIVE_PHRASE;
                setWorkingMode(MODE_INTERACTIVE);
            } else {
            	propertyPrefix = '';
                _this.mggPlayer.off('property:dvrchannel:channelState', onInteractiveChannelStateChanged);
                _this.mggPlayer.off('property:vodchannel:channelState', onInteractiveChannelStateChanged);
                _this.interactiveChannelState = '';
                _this.positionStr = skinUtils.formatTime(0);
                setWorkingMode(MODE_REGULAR);
            }
        });

        processVideoInfo(_this.mggPlayer.get('videoInfo'));
        _this.mggPlayer.on('property:videoInfo', function(event) {
            processVideoInfo(event.data);
        });

        function onPlayerStop() {
            if (_this.workingMode == MODE_REGULAR) {
                duration = 0;
                _this.positionStr = skinUtils.formatTime(0, false);
                _this.durationStr = skinUtils.formatTime(0, false);
                _this.update();
            }
        }

        function onInteractiveChannelStateChanged(event) {
            if (event.data === 'timeshift' || event.data === 'onAir') {
                setWorkingMode(MODE_INTERACTIVE);
            } else {
                setWorkingMode(MODE_REGULAR);
            }

            _this.interactiveChannelState = event.data;
            _this.update();
        }

        function onDVRCurrentPositionChanged(event) {
            var duration = _this.mggPlayer.get('dvrchannel:currentProgramDuration');
            _this.positionStr = DVR_LIVE_PHRASE + '  ' + skinUtils.formatTime(event.data, duration >= 3600)
                + ' / ' + skinUtils.formatTime(duration, duration >= 3600);
            _this.update();
        }

        function processVideoInfo(videoInfo) {
            if (videoInfo) {
                _this.isLive = videoInfo.is_live;
            } else {
                _this.isLive = false;
            }
            _this.update();
        }

        function setWorkingMode(mode) {
            _this.workingMode = mode;
            toggleMouseEvent(mode === MODE_INTERACTIVE);
            _this.update();
        }

        function getFormatTime(hours, minutes) {
            var result = '';
            if (hours < 10) {
                result += '0' + hours;
            } else {
                result += hours;
            }
            result += ':';
            if (minutes < 10) {
                result += '0' + minutes;
            } else {
                result += minutes;
            }
            return result;
        }

        function toggleMouseEvent(on) {
            if (on) {
                _this.position_time.addEventListener('mouseenter', onMouseEvent);
                _this.position_time.addEventListener('mouseleave', onMouseEvent);
                _this.position_time.addEventListener('click', onMouseEvent);
            } else {
                _this.position_time.removeEventListener('mouseenter', onMouseEvent);
                _this.position_time.removeEventListener('mouseleave', onMouseEvent);
                _this.position_time.removeEventListener('click', onMouseEvent);
            }
        }

        function onMouseEvent(event) {
            switch (event.type) {
                case 'mouseenter':
                    mouseOver = true;
                    if (_this.interactiveChannelState === 'timeshift') {
                        _this.position_time.style.cursor = 'pointer';
                    }
	                if (currentChannel.type === 'dvrChannel') {
		                setDvrText(true);
	                } else if (currentChannel.type === 'vodChannel') {
		                setVodChannelAirText(true)
	                }
                    break;
                case 'mouseleave':
                    mouseOver = false;
                    _this.position_time.style.cursor = 'default';
	                if (currentChannel.type === 'dvrChannel') {
	                	setDvrText(false);
	                } else if (currentChannel.type === 'vodChannel') {
	                	setVodChannelAirText(false)
	                }
                    break;
                case 'click':
                    if (_this.interactiveChannelState === 'timeshift') {
                    	if (currentChannel) {
		                    if (currentChannel.type === 'dvrChannel') {
			                    _this.mggPlayer.emit('dvrchannel:dvrSeek', _this.mggPlayer.get('dvrchannel:currentProgramDuration'));
		                    } else if (currentChannel.type === 'vodChannel') {
			                    _this.mggPlayer.emit('vodchannel:seek', _this.mggPlayer.get('vodchannel:currentProgramDuration'));
		                    }
	                    }
                    }
                    break;
            }
            _this.update();
        }

        function setDvrText(mouseOver) {
            if (mouseOver) {
                _this.mggPlayer.on('property:dvrchannel:currentPosition', onDVRCurrentPositionChanged);
                onDVRCurrentPositionChanged({data: _this.mggPlayer.get('dvrchannel:currentPosition')});
            } else {
                if (_this.positionStr != DVR_LIVE_PHRASE) {
                    _this.mggPlayer.off('property:dvrchannel:currentPosition', onDVRCurrentPositionChanged);
                    _this.positionStr = DVR_LIVE_PHRASE;
                    _this.update();
                }
            }
        }

        function setVodChannelAirText(mouseOver) {
	        if (mouseOver) {
		        _this.positionStr = DVR_LIVE_PHRASE + '  ' + skinUtils.formatTime(_this.mggPlayer.get('position'), duration >= 3600)
			        + ' / ' + skinUtils.formatTime(duration, duration >= 3600);
		        _this.update();
		        if (!vodChannelIntervalId) {
		        	vodChannelIntervalId = setInterval(onVodChannelInterval, 500);
                }
	        } else {
		        if (_this.positionStr != DVR_LIVE_PHRASE) {
			        _this.mggPlayer.off('property:dvrchannel:currentProgramTime', onDVRCurrentPositionChanged);
			        _this.positionStr = DVR_LIVE_PHRASE;
			        _this.update();
		        }
		        if (vodChannelIntervalId) {
		        	clearInterval(vodChannelIntervalId);
		        	vodChannelIntervalId = null;
                }
	        }
        }

        function onVodChannelInterval() {
        	setVodChannelAirText(true);
        }

});

riot.tag2('restartbutton', '<div id="restart_button"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !isMobile} resizable_button"', function(opts) {
		this.visible = false;

		var _this = this;
		var channelType;
		var tooltip = null;
		var tooltipTimeoutId = null;

		processCurrentChannel(_this.mggPlayer.get('epg:currentChannel'));
		_this.mggPlayer.on('property:epg:currentChannel', function(event) {
			processCurrentChannel(event.data);
		});

		_this.root.addEventListener('mouseenter', onMouseEvent);
		_this.root.addEventListener('mouseleave', onMouseEvent);
		_this.root.addEventListener('click', onMouseEvent);

		function processCurrentChannel(channel) {
			if (channel) {
				channelType = channel.type;
				_this.visible = channelType === 'vodChannel' || channelType === 'dvrChannel';
				_this.update();
			}
		}

		function onMouseEvent(event) {
			switch (event.type) {
				case 'mouseenter':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
					}
					tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
					break;
				case 'mouseleave':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
						tooltipTimeoutId = null;
					}
					break;
				case 'click':
					hideTooltip();
					var state;
					if (channelType === 'vodChannel') {
						state = _this.mggPlayer.get('vodchannel:channelState');
						if (state === 'watchnow') {
							_this.mggPlayer.seekTo(.1);
						} else if (state === 'onAir' || state === 'timeshift') {
							_this.mggPlayer.emit('vodchannel:seek', .1);
						}
					} else if (channelType === 'dvrChannel') {
						state = _this.mggPlayer.get('dvrchannel:channelState');
						if (state === 'onAir' || state === 'timeshift') {
							_this.mggPlayer.emit('dvrchannel:dvrSeek', .1);
						} else if (state === 'catchup') {
							_this.mggPlayer.seekTo(.1);
						}
					}
					break;
			}
		}

		function onTooltipTimeout() {
			tooltipTimeoutId = null;
			if (!tooltip || !tooltip.isMounted) {
				var text = _this.mggPlayer.config.i18n('watchfromthestart') || 'Смотреть с начала';
				tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
			}
		}

		function hideTooltip() {
			if (tooltip && tooltip.isMounted) {
				tooltip.hide();
			}
		}

});
riot.tag2('volumebutton', '<div id="volume_button" class="{volume-high: volume > 50,              volume-middle: volume <= 50 && volume > 0,              volume-off: volume == 0 || muted}"></div><div id="volume_slider" class="brand-color_background"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !isMobile} resizable_button mggskin-unselectable"', function(opts) {

        var OPENED_WIDTH = 159;
        var NORMAL_WIDTH = 59;
        var SLIDER_WIDTH = 80;
        var SLIDER_HANDLER_WIDTH = 12;
        var SLIDER_HANDLER_TOP = -4;

        var _this = this;
        var sliderStarted = false;
        var tweenMain, tweenSlider, tweenSliderHandler = null;
        var sliderHandler = null;
        var sliderClickArea = null;
        var startedVolume = void 0;

        this.visible = true;
        this.isMobile = false;

        window.noUiSlider.create(this.volume_slider, {
            start: _this.mggPlayer.get('volume'),
            animate: true,
            connect: 'lower',
            range: {
                'min': 0,
                'max': 100
            }
        });

        this.volume_slider.style.backgroundColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
        _this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
            _this.volume_slider.style.backgroundColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
            _this.update();
        });

        sliderHandler = this.volume_slider.getElementsByClassName('noUi-handle');
        if (sliderHandler.length > 0) {
            sliderHandler = sliderHandler[0]
        } else {
            sliderHandler = null;
        }

        setClickAreaHeight();

        if (sliderClickArea) {
            sliderClickArea.addEventListener('mousedown', function(event) {
                sliderStarted = true;

                startedVolume = normalizeValue(_this.volume_slider.noUiSlider.get());

                sliderClickArea.addEventListener('mousemove', onClickAreaMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            });
        }

        function onClickAreaMouseMove(event) {
	        var rect = sliderClickArea.getBoundingClientRect();
	        var value = (event.clientX - rect.left) / sliderClickArea.offsetWidth * 100;
	        value = normalizeValue(value);
	        _this.volume_slider.noUiSlider.set(value);
	        _this.mggPlayer.setVolume(value);
	        updateButtonClass(value);
        }

        function onMouseUp(event) {
            sliderStarted = false;

            var value = normalizeValue(_this.volume_slider.noUiSlider.get());
            if (value === 0) {
                _this.mggPlayer.setVolume(startedVolume);
                _this.mggPlayer.mute();
            }
            startedVolume = void 0;

            sliderClickArea.removeEventListener('mousemove', onClickAreaMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        this.volume_slider.noUiSlider.on('start', function() {
            sliderStarted = true;
            startedVolume = normalizeValue(_this.volume_slider.noUiSlider.get());
        });
        this.volume_slider.noUiSlider.on('end', function() {
            sliderStarted = false;
            var value = normalizeValue(_this.volume_slider.noUiSlider.get());
            if (value === 0) {
                _this.mggPlayer.setVolume(startedVolume);
                _this.mggPlayer.mute();
            }
            startedVolume = void 0;
        });
        this.volume_slider.noUiSlider.on('slide', function() {
            var value = normalizeValue(_this.volume_slider.noUiSlider.get());
            _this.mggPlayer.setVolume(value);
            updateButtonClass(value);
        });
        _this.mggPlayer.on('property:volume', function(event) {
            if (!sliderStarted) {
                var value = normalizeValue(event.data);
                _this.volume_slider.noUiSlider.set(value);
                updateButtonClass(value);
            }
        });
        _this.mggPlayer.on('property:muted', function(event) {
            _this.muted = event.data;
            if (event.data) {
                _this.volume_slider.noUiSlider.set(0);
            } else {
                _this.volume_slider.noUiSlider.set(_this.mggPlayer.get('volume'));
            }
            _this.update();
        });
        _this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function(event) {
            var style = getComputedStyle(_this.root);
            NORMAL_WIDTH = parseInt(style.width);
            OPENED_WIDTH = NORMAL_WIDTH + 100;
            _this.volume_button.style.backgroundPositionX = event.data ? '30px' : '20px';
            _this.volume_button.style.width = event.data ? '75px' : '60px';
        });
        _this.mggPlayer.on('property:' + skinConsts.IS_MOBILE_DEVICE, function(event) {
            _this.isMobile = Boolean(event.data);
            _this.update();
        });

        updateButtonClass(normalizeValue(_this.mggPlayer.get('volume')));

        this.volume_button.addEventListener('click', function(event) {
           if (_this.mggPlayer.get('muted')) {
               _this.mggPlayer.unMute();
               _this.muted = false;
           } else {
               _this.mggPlayer.mute();
               _this.muted = true;
           }
        });

        this.root.addEventListener('mouseenter', function(event) {
            if (_this.mggPlayer.get(skinConsts.IS_MOBILE_DEVICE)) {
                return;
            }

            disposeCurrentTweens();
            tweenMain = TweenLite.to(_this.root, .4, {width: OPENED_WIDTH + 'px', ease: Power2.easeInOut});
            tweenSlider = TweenLite.to(_this.volume_slider, .4, {width: SLIDER_WIDTH + 'px', ease: Power2.easeInOut, delay: .05});
            tweenSlider.eventCallback('onStart', onSliderTweenEvent, [true]);
            if (sliderHandler) {
                tweenSliderHandler = TweenLite.to(sliderHandler, .4, {
                    width: SLIDER_HANDLER_WIDTH + 'px', height: SLIDER_HANDLER_WIDTH + 'px', top: SLIDER_HANDLER_TOP, left: '-6px',
                    ease: Power2.easeInOut, delay: .2});
                tweenSliderHandler.eventCallback('onStart', onSliderHandlerTweenEvent, [true]);
            }
        });
        this.root.addEventListener('mouseleave', function(event) {
            if (_this.mggPlayer.get(skinConsts.IS_MOBILE_DEVICE)) {
                return;
            }

            disposeCurrentTweens();
            tweenMain = TweenLite.to(_this.root, .4, {width: NORMAL_WIDTH + 'px', ease: Power2.easeInOut});
            tweenSlider = TweenLite.to(_this.volume_slider, .35, {width: 0 + 'px', ease: Power2.easeInOut});
            tweenSlider.eventCallback('onComplete', onSliderTweenEvent, [false]);
            if (sliderHandler) {
                tweenSliderHandler = TweenLite.to(sliderHandler, .2, {
                    width: 0 + 'px', height: 0 + 'px', top: '1px', left: '0px',
                    ease: Power2.easeInOut});
                tweenSliderHandler.eventCallback('onComplete', onSliderHandlerTweenEvent, [false]);
            }
        });

        function onSliderTweenEvent(isStarted) {
            if (isStarted) {
                _this.volume_slider.style.display = 'inline-block';
            } else {
                _this.volume_slider.style.display = 'none';
            }
        }

        function onSliderHandlerTweenEvent(isStarted) {
            if (isStarted) {
                sliderHandler.style.width = 0;
                sliderHandler.style.height = 0;
                sliderHandler.style.top = '1px';
               sliderHandler.style.visibility = 'visible';
            } else {
               sliderHandler.style.visibility = 'hidden';
            }
        }

        function disposeCurrentTweens() {
            if (tweenMain) {
                tweenMain.kill();
            }
            if (tweenSlider) {
                tweenSlider.kill();
                tweenSlider.eventCallback('onStart', null);
                tweenSlider.eventCallback('onComplete', null);
            }
            if (tweenSliderHandler) {
                tweenSliderHandler.kill();
            }
        }

        function updateButtonClass(volume) {
            _this.volume = volume;
            _this.update();
        }

        function normalizeValue(value) {
            try {
                if (typeof value === 'string') {
                    value = parseInt(value);
                }
            } catch (error) {

            }
            if (value < 0) {
                value = 0
            } else if (value > 100) {
                value = 100;
            }
            return value;
        }

        function setClickAreaHeight() {
            var base = _this.volume_slider.getElementsByClassName('noUi-base');
            if (base && base.length > 0) {
                base = base[0];
                if (base) {
                    base.style.height = '16px';
                    base.style.top = '-6px';
                    base.style.zIndex = 2;
                    sliderClickArea = base;
                }
            }
            var origin = _this.volume_slider.getElementsByClassName('noUi-origin');
            if (origin && origin.length > 0) {
                origin = origin[0];
                if (origin) {
                    origin.style.height = '4px';
                    origin.style.top = '6px';
                }
            }
        }

});

riot.tag2('channelsbutton', '<div id="channels_button" class="{disabled_button: disabled}"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !disabled} resizable_button"', function(opts) {
		this.visible = false;
		this.disabled = true;
		var _this = this;
		var tooltip = null;
		var tooltipTimeoutId = null;

		_this.root.addEventListener('mouseenter', onMouseEvent);
		_this.root.addEventListener('mouseleave', onMouseEvent);
		_this.root.addEventListener('click', onMouseEvent);

		var channels = _this.mggPlayer.get('epg:channels');
		_this.disabled = !channels || !channels.length > 0;
		_this.mggPlayer.on('property:epg:channels', function (event) {
			_this.disabled = !event.data || !event.data.length > 0;
			_this.update();
		});

		processVideoInfo(_this.mggPlayer.get('videoInfo'));
		_this.mggPlayer.on('property:videoInfo', function (event) {
			processVideoInfo(event.data);
		});

		function processVideoInfo(videoInfo) {
			var currentChannel = _this.mggPlayer.get('epg:currentChannel');
			_this.visible = videoInfo && videoInfo.channels && videoInfo.channels.length > 0
				|| currentChannel && (currentChannel.type === 'vodChannel' || currentChannel.type === 'dvrChannel');
			_this.update();
		}

		function onMouseEvent(event) {
			switch (event.type) {
				case 'mouseenter':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
					}
					tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
					break;
				case 'mouseleave':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
						tooltipTimeoutId = null;
					}
					break;
				case 'click':
					if (_this.disabled) {
						return;
					}
					hideTooltip();
					if (_this.mggPlayer.get(skinConsts.CURRENT_OPENED_WIDGET) === skinConsts.ID_CHANNELS_PANEL) {
						_this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
					} else {
						_this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, skinConsts.ID_CHANNELS_PANEL);
					}
					break;
			}
		}

		function onTooltipTimeout() {
			tooltipTimeoutId = null;
			if (!tooltip || !tooltip.isMounted) {
				var text = _this.mggPlayer.config.i18n('allchannels') || 'Все каналы';
				tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
			}
		}

		function hideTooltip() {
			if (tooltip && tooltip.isMounted) {
				tooltip.hide();
			}
		}

});
riot.tag2('airplaybutton', '<div id="airplay_button" class="{disabled_button: disabled}"></div>', '', 'class="{mggskin-hidden: !visible} gray-hover resizable_button"', function(opts) {
		this.visible = false;

		var _this = this;
		var tooltip = null;
		var tooltipTimeoutId = null;

		this.root.addEventListener('click', onMouseEvent);
		this.root.addEventListener('mouseenter', onMouseEvent);
		this.root.addEventListener('mouseleave', onMouseEvent);

		_this.mggPlayer.on('property:airplay:state', onAirplayStateChanged);
		onAirplayStateChanged({data: _this.mggPlayer.get('airplay:state')});

		function onMouseEvent(event) {
			switch (event.type) {
				case 'click':
					hideTooltip();
					_this.mggPlayer.emit('airplay:event:buttonClick');
					break;
				case 'mouseenter':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
					}
					tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
					break;
				case 'mouseleave':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
						tooltipTimeoutId = null;
					}
					break;
			}
		}
		function onAirplayStateChanged(event) {
			switch (event.data) {
				case 'available':
					_this.root.classList.remove('gray_button_permanent');
					_this.visible = true;
					_this.update();
					break;
				case 'notAvailable':
					_this.root.classList.remove('gray_button_permanent');
					_this.visible = false;
					_this.update();
					break;
				case 'connected':
					_this.root.classList.add('gray_button_permanent');
					break;
			}
		}

		function onTooltipTimeout() {
			tooltipTimeoutId = null;
			if (!tooltip || !tooltip.isMounted) {
				tooltip = skinUtils.showButtonTooltip(_this.root, 'Airplay', _this.mggPlayer, true);
			}
		}

		function hideTooltip() {
			if (tooltip && tooltip.isMounted) {
				tooltip.hide();
			}
		}
});
riot.tag2('chromecastbutton', '<div id="chromecast_button" class="{iconClass}"></div>', '', 'class="{mggskin-hidden: !visible} gray-hover resizable_button"', function(opts) {
		this.visible = false;
		this.iconClass = 'chromecast_button_disconnected';

		var _this = this;
		var animIntervalID = null;
		var prevTimestamp = null;
		var animIconIndex = 0;
		var tooltip = null;
		var tooltipTimeoutId = null;

		_this.root.addEventListener('mouseenter', onMouseEvent);
		_this.root.addEventListener('mouseleave', onMouseEvent);
		_this.root.addEventListener('click', onMouseEvent);

		function onMouseEvent(event) {
			switch (event.type) {
				case 'mouseenter':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
					}
					tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
					break;
				case 'mouseleave':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
						tooltipTimeoutId = null;
					}
					break;
				case 'click':
					hideTooltip();
					if (skinUtils.isFullScreen()) {
						skinUtils.cancelFullScreen();
					}
					if (_this.iconClass === 'chromecast_button_disconnected') {
						_this.mggPlayer.emit('chromecast', 'needToConnect');
					} else {
						_this.mggPlayer.emit('chromecast', 'needToDisconnect');
					}
					break;
			}
		}

		function onTooltipTimeout() {
			tooltipTimeoutId = null;
			if (!tooltip || !tooltip.isMounted) {
				var text = 'Chromecast';
				tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
			}
		}

		function hideTooltip() {
			if (tooltip && tooltip.isMounted) {
				tooltip.hide();
			}
		}

		_this.mggPlayer.on('property:chromecastState', function(event) {
			processChromecastAvailable(event.data);
		});
		processChromecastAvailable(_this.mggPlayer.get('chromecastState'));

		function processChromecastAvailable(state) {
			switch (state) {
				case 'notAvailable':
					stopConnctingAnim();
					_this.visible = false;
					break;
				case 'available':
					stopConnctingAnim();
					_this.iconClass = 'chromecast_button_disconnected';
					_this.visible = true;
					break;
				case 'connecting':
					startConnectingAnim();
					break;
				case 'connected':
					stopConnctingAnim();
					_this.iconClass = 'chromecast_button_connected';
					break;
			}
			_this.update();
		}

		function startConnectingAnim() {
			if (animIntervalID) {
				clearInterval(animIntervalID);
			}
			prevTimestamp = new Date().getTime();
			animIntervalID = setInterval(onAnimInterval, 10);
			onAnimInterval();
		}

		function stopConnctingAnim() {
			if (animIntervalID) {
				clearInterval(animIntervalID);
				animIntervalID = null;
			}
		}

		function onAnimInterval() {
			var currentTimestamp = new Date().getTime();
			if (currentTimestamp - prevTimestamp >= 200) {
				prevTimestamp = currentTimestamp;
				switch (animIconIndex) {
					case 0:
						_this.iconClass = 'chromecast_button_anim_0';
						break;
					case 1:
						_this.iconClass = 'chromecast_button_anim_1';
						break;
					case 2:
						_this.iconClass = 'chromecast_button_anim_2';
						break;
				}
				if (++animIconIndex > 2) {
					animIconIndex = 0;
				}
				_this.update();
			}
		}

});
riot.tag2('fullscreenbutton', '<div id="fullscreen_button" class="{to_small_screen: fullscreenEnabled}"></div>', '', 'class="{gray-hover: !isMobile} resizable_button"', function(opts) {
        var _this = this;
        var container = document.getElementById(skinConsts.PLAYERS_CONTAINER);
        var isMobileFullscreen = false;
        var tooltip = null;
        var tooltipTimeoutId = null;

        this.visible = false;
        this.fullscreenEnabled = false;
        this.isMobile = false;

        _this.root.addEventListener('mouseenter', onMouseEvent);
        _this.root.addEventListener('mouseleave', onMouseEvent);
        _this.root.addEventListener('click', onMouseEvent);

        _this.mggPlayer.on('property:' + skinConsts.IS_MOBILE_DEVICE, function(event) {
            _this.isMobile = Boolean(event.data);
            _this.update();
        });

        document.addEventListener("fullscreenchange", onFullscreenChange);
        document.addEventListener("mozfullscreenchange", onFullscreenChange);
        document.addEventListener("webkitfullscreenchange", onFullscreenChange);
        document.addEventListener("msfullscreenchange", onFullscreenChange);

        function onFullscreenChange(event) {
            var currentWidget = _this.mggPlayer.get(skinConsts.CURRENT_OPENED_WIDGET);
            if (currentWidget !== skinConsts.ID_LIKE_WIDGET) {
                _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
            }

            if (_this.mggPlayer.get(skinConsts.IS_MOBILE_DEVICE)) {
                _this.fullscreenEnabled = isMobileFullscreen;
            } else {
                _this.fullscreenEnabled = Boolean(skinUtils.isFullScreen());
            }
            _this.mggPlayer.emit(skinConsts.FULLSCREEN_STATE_CHANGED, _this.fullscreenEnabled);
            _this.update();
        }

        function onMouseEvent(event) {
            switch (event.type) {
                case 'mouseenter':
                    if (tooltipTimeoutId) {
	                    clearTimeout(tooltipTimeoutId);
                    }
	                tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
                    break;
                case 'mouseleave':
                    if (tooltipTimeoutId) {
                        clearTimeout(tooltipTimeoutId);
                        tooltipTimeoutId = null;
                    }
                    break;
                case 'click':
                	hideTooltip();
	                if (skinUtils.isFullScreen()) {
		                skinUtils.cancelFullScreen();
	                } else {
		                skinUtils.requestFullScreen(container);
	                }
	                break;
            }
        }

        function onTooltipTimeout() {
            tooltipTimeoutId = null;
            if (!tooltip || !tooltip.isMounted) {
                var text;
                if (skinUtils.isFullScreen()) {
                    text = _this.mggPlayer.config.i18n('minimize') || 'Свернуть';
                } else {
                    text = _this.mggPlayer.config.i18n('fullscreen') || 'Полноэкранный режим';
                }
                tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
            }
        }

        function hideTooltip() {
	        if (tooltip && tooltip.isMounted) {
		        tooltip.hide();
	        }
        }

});

riot.tag2('nextbutton', '<div id="next_button" class="{disabled_button: disabled}"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !disabled} resizable_button"', function(opts) {
        this.visible = false;
        this.disabled = true;

        var _this = this;
        var isTvMode = false;
        var tooltip = null;
        var tooltipTimeoutId = null;

        var videoInfo = _this.mggPlayer.get('videoInfo');
        if (videoInfo) {
            processVideoInfo(videoInfo);
        }

        _this.mggPlayer.on('property:videoInfo', function(event) {
            videoInfo = event.data;
            if (videoInfo) {
                processVideoInfo(videoInfo);
            }
        });

        _this.mggPlayer.on('property:epg:nextChannel', function (event) {
            if (tooltip) {
                tooltip.hide();
                tooltip = null;
                onTooltipTimeout();
            }
        });

        var channels = _this.mggPlayer.get('epg:channels');
        _this.disabled = !channels || !channels.length > 0;
        _this.mggPlayer.on('property:epg:channels', function (event) {
            _this.disabled = !event.data || !event.data.length > 0;
            _this.update();
        });

        _this.root.addEventListener('mouseenter', onMouseEvent);
        _this.root.addEventListener('mouseleave', onMouseEvent);
        _this.root.addEventListener('click', onMouseEvent);

        function processVideoInfo(pVideoInfo) {
            if (!pVideoInfo) {
                _this.visible = false;
            } else {
                if (pVideoInfo.channels && pVideoInfo.channels.length > 0) {
                    isTvMode = true;
                    _this.visible = true;
                    _this.disabled = !Boolean(_this.mggPlayer.get('epg:channels'));
                } else if (pVideoInfo['prev'] || pVideoInfo['next']) {
                    isTvMode = false;
                    _this.visible = true;
                    _this.disabled = !(typeof pVideoInfo['next'] == 'string' && pVideoInfo['next'].indexOf('i=0') == -1);
                    _this.root.classList.toggle('gray-hover', !_this.disabled);
                }
            }

            _this.update();
        }

        function onMouseEvent(event) {
            switch (event.type) {
                case 'mouseenter':
                    if (isTvMode) {
	                    if (tooltipTimeoutId) {
		                    clearTimeout(tooltipTimeoutId);
	                    }
	                    tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
                    }
                    break;
                case 'mouseleave':
                    if (isTvMode) {
                        if (tooltipTimeoutId) {
                            clearTimeout(tooltipTimeoutId);
                            tooltipTimeoutId = null;
                        }
                    }
                    break;
                case 'click':
	                if (!_this.disabled) {
		                if (isTvMode) {
		                	hideTooltip();
			                var nextChannel = _this.mggPlayer.get('epg:nextChannel');
			                if (nextChannel && nextChannel.megogoId) {
				                _this.mggPlayer.emit('changeVideo', '/b/info?i=' + nextChannel.megogoId);
			                }
		                } else {
			                _this.mggPlayer.emit('changeVideo', videoInfo['next']);
		                }
	                }
	                break;
            }
        }

        function onTooltipTimeout() {
            tooltipTimeoutId = null;
            if (!tooltip || !tooltip.isMounted) {
                var text;
                var nextChannel = _this.mggPlayer.get('epg:nextChannel');
                if (nextChannel) {
                    text = nextChannel.title;
                } else {
                    text = _this.mggPlayer.config.i18n('nextchannel') || 'Следующий канал';
                }
                tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
            }
        }

        function hideTooltip() {
	        if (tooltip && tooltip.isMounted) {
		        tooltip.hide();
	        }
        }

});

riot.tag2('prevbutton', '<div id="prev_button" class="{disabled_button: disabled}"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !disabled} resizable_button"', function(opts) {
        this.visible = false;
        this.disabled = true;

        var _this = this;
        var isTvMode = false;
        var tooltip = null;
        var tooltipTimeoutId = null;

        var videoInfo = _this.mggPlayer.get('videoInfo');
        if (videoInfo) {
            processVideoInfo(videoInfo);
        }

        _this.root.addEventListener('mouseenter', onMouseEvent);
        _this.root.addEventListener('mouseleave', onMouseEvent);
        _this.root.addEventListener('click', onMouseEvent);

        _this.mggPlayer.on('property:videoInfo', function(event) {
            videoInfo = event.data;
            processVideoInfo(videoInfo);
        });

        _this.mggPlayer.on('property:epg:prevChannel', function (event) {
            if (tooltip) {
                tooltip.hide();
                tooltip = null;
                onTooltipTimeout();
            }
        });

        var channels = _this.mggPlayer.get('epg:channels');
        _this.disabled = !channels || !channels.length > 0;
        _this.mggPlayer.on('property:epg:channels', function (event) {
            _this.disabled = !event.data || !event.data.length > 0;
            _this.update();
        });

        function processVideoInfo(pVideoInfo) {
            if (!pVideoInfo) {
                _this.visible = false;
            } else {
                if (pVideoInfo.channels && pVideoInfo.channels.length > 0) {
                    isTvMode = true;
                    _this.visible = true;
                    _this.disabled = !Boolean(_this.mggPlayer.get('epg:channels'));
                } else if (pVideoInfo['prev'] || pVideoInfo['next']) {
                    isTvMode = false;
                    _this.visible = true;
                    _this.disabled = !(typeof pVideoInfo['prev'] == 'string' && pVideoInfo['prev'].indexOf('i=0') == -1);
                    _this.root.classList.toggle('gray-hover', !_this.disabled);
                }
            }
            _this.update();
        }

        function onMouseEvent(event) {
            switch (event.type) {
                case 'mouseenter':
                    if (isTvMode) {
	                    if (tooltipTimeoutId) {
		                    clearTimeout(tooltipTimeoutId);
	                    }
	                    tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
                    }
                    break;
                case 'mouseleave':
                    if (isTvMode) {
                        if (tooltipTimeoutId) {
                            clearTimeout(tooltipTimeoutId);
                            tooltipTimeoutId = null;
                        }
                    }
                    break;
                case 'click':
	                if (!_this.disabled) {
		                if (isTvMode) {
		                	hideTooltip();
			                var prevChannel = _this.mggPlayer.get('epg:prevChannel');
			                if (prevChannel && prevChannel.megogoId) {
				                _this.mggPlayer.emit('changeVideo', '/b/info?i=' + prevChannel.megogoId);
			                }
		                } else {
			                _this.mggPlayer.emit('changeVideo', videoInfo['prev']);
		                }
	                }
	                break;
            }
        }

        function onTooltipTimeout() {
            tooltipTimeoutId = null;
            if (!tooltip || !tooltip.isMounted) {
                var text;
                var prevChannel = _this.mggPlayer.get('epg:prevChannel');
                if (prevChannel) {
                    text = prevChannel.title;
                } else {
                    text = _this.mggPlayer.config.i18n('previouschannel') || 'Предыдущий канал';
                }
                tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
            }
        }

        function hideTooltip() {
	        if (tooltip && tooltip.isMounted) {
		        tooltip.hide();
	        }
        }

});

riot.tag2('programsbutton', '<div id="programs_button" class="{disabled_button: disabled}"></div>', '', 'class="{mggskin-hidden:!this.visible} {gray-hover: !disabled} resizable_button"', function(opts) {
		this.visible = true;
		this.disabled = true;

		var _this = this;
		var tooltip = null;
		var tooltipTimeoutId = null;

		_this.root.addEventListener('mouseenter', onMouseEvent);
		_this.root.addEventListener('mouseleave', onMouseEvent);
		_this.root.addEventListener('click', onMouseEvent);

		var channels = _this.mggPlayer.get('epg:channels');
		_this.disabled = !channels || !channels.length > 0;
		_this.mggPlayer.on('property:epg:channels', function (event) {
			_this.disabled = !event.data || !event.data.length > 0;
			_this.update();
		});

		processVideoInfo(_this.mggPlayer.get('videoInfo'));
		_this.mggPlayer.on('property:videoInfo', function (event) {
			processVideoInfo(event.data);
		});

		function processVideoInfo(videoInfo) {
			var currentChannel = _this.mggPlayer.get('epg:currentChannel');
			_this.visible = videoInfo && videoInfo.channels && videoInfo.channels.length > 0
					|| currentChannel && (currentChannel.type === 'vodChannel' || currentChannel.type === 'dvrChannel');
			_this.update();
		}

		function onMouseEvent(event) {
			switch (event.type) {
				case 'mouseenter':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
					}
					tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
					break;
				case 'mouseleave':
					if (tooltipTimeoutId) {
						clearTimeout(tooltipTimeoutId);
						tooltipTimeoutId = null;
					}
					break;
				case 'click':
					if (_this.disabled) {
						return;
					}
					hideTooltip();
					if (_this.mggPlayer.get(skinConsts.CURRENT_OPENED_WIDGET) === skinConsts.ID_PROGRAMS_PANEL) {
						_this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
					} else {
						_this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, skinConsts.ID_PROGRAMS_PANEL);
					}
					break;
			}
		}

		function onTooltipTimeout() {
			tooltipTimeoutId = null;
			if (!tooltip || !tooltip.isMounted) {
				var text = _this.mggPlayer.config.i18n('programm') || 'Программа';
				tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
			}
		}

		function hideTooltip() {
			if (tooltip && tooltip.isMounted) {
				tooltip.hide();
			}
		}

});
riot.tag2('settingsbutton', '<div id="settings_button"></div>', '', 'class="{mggskin-hidden:!this.visible} gray-hover resizable_button"', function(opts) {
        var _this = this;
        var tooltip = null;
        var tooltipTimeoutId = null;

        this.visible = false;

        _this.root.addEventListener('mouseenter', onMouseEvent);
        _this.root.addEventListener('mouseleave', onMouseEvent);
        _this.root.addEventListener('click', onMouseEvent);

        this.mggPlayer.on('player:ready', function(){
            _this.visible = !_this.mggPlayer.config.lite;
            _this.update();
        });

        _this.mggPlayer.on('property:' + skinConsts.CURRENT_OPENED_WIDGET, function(event) {
            if (event.data == skinConsts.ID_SETTINGS_WIDGET) {
                _this.root.classList.add('gray_button_permanent');
            } else {
                _this.root.classList.remove('gray_button_permanent');
            }
        });

        function onMouseEvent(event) {
            switch (event.type) {
                case 'mouseenter':
	                if (tooltipTimeoutId) {
		                clearTimeout(tooltipTimeoutId);
	                }
	                tooltipTimeoutId = setTimeout(onTooltipTimeout, skinConsts.TOOLTIP_APPEARING_DELAY);
                    break;
                case 'mouseleave':
                    if (tooltipTimeoutId) {
                        clearTimeout(tooltipTimeoutId);
                        tooltipTimeoutId = null;
                    }
                    break;
                case 'click':
                	hideTooltip();
	                var currentWidget = _this.mggPlayer.get(skinConsts.CURRENT_OPENED_WIDGET);
	                if (currentWidget == skinConsts.ID_SETTINGS_WIDGET) {
		                _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
	                } else {
		                _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, skinConsts.ID_SETTINGS_WIDGET);
	                }
	                break;
            }
        }

        _this.mggPlayer.on('property:qualityList', processVisibleByLists);
        _this.mggPlayer.on('property:audioTrackList', processVisibleByLists);
        _this.mggPlayer.on('property:subtitlesList', processVisibleByLists);
        processVisibleByLists();
        function processVisibleByLists() {
	        var qualities = _this.mggPlayer.get('qualityList');
	        var audios = _this.mggPlayer.get('audioTrackList');
	        var subs = _this.mggPlayer.get('subtitlesList');
	        if (!qualities && !audios && !subs) {
		        _this.visible = false;
	        } else if (qualities.length <= 1 && audios.length <= 1 && subs.length <= 1) {
		        _this.visible = false;
	        } else {
		        _this.visible = true;
	        }
	        _this.update();
        }

        function onTooltipTimeout() {
            tooltipTimeoutId = null;
            if (!tooltip || !tooltip.isMounted) {
                var text = _this.mggPlayer.config.i18n('settings') || 'Настройки';
                tooltip = skinUtils.showButtonTooltip(_this.root, text, _this.mggPlayer, true);
            }
        }

        function hideTooltip() {
	        if (tooltip && tooltip.isMounted) {
		        tooltip.hide();
	        }
        }

});

riot.tag2('settingswrapper', '<div id="settings_items_container"><div id="subs_button" class="settings_player_item {mggskin-hidden: !subsIsVisible}" type="{SUBS}"><div class="{mggskin-hidden: currentPopup != SUBS}settings_traingle"></div><span class="settings_player_item_title" id="subs_label">{subsTitle}: </span><span class="settings_player_item__option brand-color_text bold-font" id="subs_value">{subsValue}</span></div><div id="audio_button" class="settings_player_item {mggskin-hidden: !audioIsVisible}" type="{AUDIO}"><div class="{mggskin-hidden: currentPopup != AUDIO}settings_traingle"></div><span class="settings_player_item_title" id="audio_label">{audioTitle}: </span><span class="settings_player_item__option brand-color_text bold-font" id="audio_value">{audioValue}</span></div><div id="quality_button" class="settings_player_item {mggskin-hidden: !qualityIsVisible}" type="{QUALITY}"><div class="{mggskin-hidden: currentPopup != QUALITY}settings_traingle"></div><span class="settings_player_item_title" id="quality_label">{qualityTitle}: </span><span class="settings_player_item__option brand-color_text bold-font" id="quality_value">{qualityValue}</span></div><div id="format_button" class="settings_player_item {mggskin-hidden: !formatVisible}" type="{FORMAT}"><div class="{mggskin-hidden: currentPopup != FORMAT}settings_traingle"></div><span class="settings_player_item_title">{formatTitle}: </span><span class="settings_player_item__option brand-color_text bold-font">{formatValue}</span></div><div id="speed_button" class="settings_player_item {mggskin-hidden: !speedVisible}" type="{SPEED}"><div class="{mggskin-hidden: currentPopup != SPEED}settings_traingle"></div><span class="settings_player_item_title">{speedTitle}: </span><span class="settings_player_item__option brand-color_text bold-font">{speedValue}</span></div></div><settingsoptions id="popup" data="{this.data}" clickcallback="{this.clickCallback}" clicked_element="{this.clickedElement}" name="popup"></settingsoptions>', '', 'class="{mggskin-hidden:!this.visible} mggskin-unselectable"', function(opts) {

        this.FORMAT = 'format';
        this.SPEED = 'speed';
        this.QUALITY = 'quality';
        this.AUDIO = 'audio';
        this.SUBS = 'subs';

        var SPEED_LIST = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];

        var _this = this;
        var opacityTween = null;
        var autoQualityIndex = -1;
        var videoElement = null;
        var LEFT_OFFSET = 40;

        this.currentPopup = null;
        this.visible = false;
        this.qualityValue = '';
        this.subsValue = '';
        this.audioValue = '';
        this.formatValue = '';
        this.speedValue = '';
        this.qualityTitle = 'Качество';
        this.subsTitle = 'Субтитры';
        this.audioTitle = 'Аудиодорожка';
        this.formatTitle = 'Формат';
        this.speedTitle = 'Скорость';
        this.audioIsVisible = true;
        this.qualityIsVisible = true;
        this.subsIsVisible = true;
        this.speedVisible = false;
        this.formatVisible = false;

        var items = this.settings_items_container.childNodes;
        for (var i = 0, l = items.length; i < l; ++i) {
            items[i].addEventListener('click', onItemClick);
            items[i].addEventListener('mouseenter', onItemMouseMoveEvent);
            items[i].addEventListener('mouseleave', onItemMouseMoveEvent);
        }

        this.on('mount', function (event) {
            setBrandColor();
            setBottomPosition(_this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT));
        });

        function setBrandColor() {
            var valueElements = _this.settings_items_container.getElementsByClassName('brand-color_text');
            for (var i = 0, l = valueElements.length; i < l; ++i) {
                valueElements[i].style.color = window.brandColor[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
            }
        }

        _this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function (event) {
            setBrandColor();
        });

        _this.mggPlayer.on('property:' + skinConsts.CURRENT_OPENED_WIDGET, function (event) {
            if ((!event.data || event.data != skinConsts.ID_SETTINGS_WIDGET) && _this.visible) {
                hidePopup(true);
                _this.currentPopup = null;
                setVisible(false);
            } else if (event.data && event.data == skinConsts.ID_SETTINGS_WIDGET) {
                onQualityChange();
                onSubtitlesChange();
                onAudioChange();
                setVisible(true);
            }
        });

        _this.mggPlayer.on('property:' + skinConsts.CONTROL_BAR_HEIGHT, function (event) {
            setBottomPosition(event.data);
        });

        _this.mggPlayer.on('property:audioTrackList', function (event) {
            _this.audioIsVisible = event.data.length > 1;
            _this.update();
        });

        _this.mggPlayer.on('property:subtitlesList', function (event) {
            _this.subsIsVisible = event.data.length > 1;
            _this.update();
        });

        _this.mggPlayer.on('property:qualityList', function (event) {
            _this.qualityIsVisible = event.data.length > 1;
            _this.update();
        });

        _this.mggPlayer.on('property:quality', onQualityChange);
        _this.mggPlayer.on('property:subtitles', onSubtitlesChange);
        _this.mggPlayer.on('property:audioTrack', onAudioChange);
        _this.mggPlayer.on('player:autoQualitySwitch', onAutoQualitySwitch);

        var videoInfo = _this.mggPlayer.get('videoInfo');
        _this.mggPlayer.on('property:videoInfo', function (event) {
            videoInfo = event.data;
            processVideoInfo(videoInfo);
        });
        if (videoInfo) {
            processVideoInfo(videoInfo);
        }

        function onPlayerStateChange(pEvent) {
            if (pEvent.data == 1) {
                _this.mggPlayer.off('property:state', onPlayerStateChange);
                var playableElement = _this.mggPlayer.getPlayableElement();
                if (playableElement instanceof HTMLVideoElement) {
                    videoElement = playableElement;

                    videoElement.style['object-fit'] = 'contain';

                    if (!_this.mggPlayer.config.host == 'hotfix.megogo.net' ||
                            !_this.mggPlayer.config.host == 'qa.megogo.net' ||
                            !_this.mggPlayer.config.host == 'localhost') return;

                    if (!_this.mggPlayer.get('videoInfo').is_tv) {
                        _this.speedVisible = true;
                        _this.speedValue = videoElement.playbackRate == 1 ? _this.mggPlayer.config.i18n('normal_speed') || 'Обычная' : videoElement.playbackRate + 'x';
                    }

                    if (videoElement.videoWidth / videoElement.videoHeight >= 1.4) {
                        _this.formatVisible = false;
                    } else {
                        _this.formatValue = "4:3";
                        _this.formatVisible = true;
                    }

                    _this.update();
                }
            }
        }

        function processVideoInfo() {
            if (_this.mggPlayer.config) {
                _this.qualityTitle = _this.mggPlayer.config.i18n('quality') || 'Качество';
                _this.subsTitle = _this.mggPlayer.config.i18n('subtitles') || 'Субтитры';
                _this.audioTitle = _this.mggPlayer.config.i18n('audiotrack') || 'Аудиодорожка';
                _this.formatTitle = _this.mggPlayer.config.i18n('format') || 'Формат';
                _this.speedTitle = _this.mggPlayer.config.i18n('speed') || 'Скорость';

                _this.speedVisible = false;
                _this.formatVisible = false;

                _this.update();
            }
        }

        function setBottomPosition(bottom) {
            _this.root.style.bottom = bottom + 'px';
        }

        function onItemClick(event) {
            var type = event.currentTarget.getAttribute('type');
            if (type == _this.currentPopup) {
                hidePopup();
                _this.currentPopup = null;
                _this.update();
                return;
            }
            _this.currentPopup = type;
            _this.update();
            switch (type) {
                case _this.FORMAT:
                    updateFormatInfo();
                    break;
                case _this.SPEED:
                    updateSpeedInfo();
                    break;
                case _this.AUDIO:
                    updateAudioTrackInfo();
                    break;
                case _this.QUALITY:
                    updateQualityInfo();
                    break;
                case _this.SUBS:
                    updateSubtitleInfo();
                    break;
            }
            positioningPopup();

        }

        function onItemMouseMoveEvent(event) {
            var el = event.currentTarget.getElementsByClassName('brand-color_text');
            if (el && el.length > 0) {
                el = el[0];
            } else {
                el = null;
            }
            if (el) {
                if (event.type == 'mouseenter') {
                    el.style.color = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
                } else if (event.type == 'mouseleave') {
                    el.style.color = window.brandColor[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
                }
            }
        }

        function positioningPopup() {
            _this.popup.style.left = (-1 * parseInt(getComputedStyle(_this.popup).width)) + 'px';
        }

        function updateFormatInfo() {
            var data = [];
            data.push({
                name: "4:3",
                id: 0,
                isActive: _this.formatValue == "4:3",
                callback: onFormatPopupClick
            });

            data.push({
                name: "16:9",
                id: 1,
                isActive: _this.formatValue == "16:9",
                callback: onFormatPopupClick
            });

            if (_this.currentPopup) {
                _this.data = data;
                _this.clickedElement = _this.format_button;
                _this.tags.popup.update();
            }
        }

        function onFormatPopupClick(data) {
            if (data.id == 1) {
                videoElement.style['object-fit'] = 'fill';
            } else {
                videoElement.style['object-fit'] = 'contain';
            }

            _this.formatValue = data.name;

            _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
        }

        function updateSpeedInfo() {
            var currentName;
            var data = [];

            for (var i = 0, l = SPEED_LIST.length; i < l; ++i) {
                data.push({
                    name: SPEED_LIST[i] == 1 ? 'Обычная' : SPEED_LIST[i] + 'x',
                    id: i,
                    isActive: SPEED_LIST[i] == videoElement.playbackRate,
                    callback: onSpeedPopupClick
                });
            }

            if (_this.currentPopup) {
                _this.data = data;
                _this.clickedElement = _this.speed_button;
                _this.tags.popup.update();
            }
        }

        function onSpeedPopupClick(data) {
            videoElement.playbackRate = SPEED_LIST[data.id];

            _this.speedValue = videoElement.playbackRate == 1 ? _this.mggPlayer.config.i18n('normal_speed') || 'Обычная' : videoElement.playbackRate + 'x';

            _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
        }

        function updateAudioTrackInfo() {
            var audioTracksList = _this.mggPlayer.get('audioTrackList');
            var currentAudio = _this.mggPlayer.get('audioTrack');
            var currentName, data;
            _this.audioIsVisible = audioTracksList.length > 1;
            if (Array.isArray(audioTracksList)) {
                data = [];
                for (var i = 0, l = audioTracksList.length; i < l; ++i) {
                    data.push({
                        name: audioTracksList[i].display_name,
                        id: audioTracksList[i].id,
                        isActive: currentAudio == audioTracksList[i].id,
                        callback: onAudioTrackPopupClick
                    });
                    if (currentAudio == audioTracksList[i].id) {
                        currentName = audioTracksList[i].display_name;
                    }
                }
            }
            if (_this.currentPopup) {
                _this.data = data;
                _this.clickedElement = _this.audio_button;
                _this.tags.popup.update();
            }
            return currentName;
        }

        function onAudioTrackPopupClick(data) {
            _this.mggPlayer.setAudioTrack(data.id);
            _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
        }

        function updateSubtitleInfo() {
            var subsList = _this.mggPlayer.get('subtitlesList');
            var currentSubs = _this.mggPlayer.get('subtitles');
            var currentName, data;
            _this.subsIsVisible = subsList.length > 1;
            if (Array.isArray(subsList)) {
                data = [];
                for (var i = 0, l = subsList.length; i < l; ++i) {
                    data.push({
                        name: subsList[i].lang_original,
                        lang: subsList[i].lang,
                        id: subsList[i].index,
                        isActive: currentSubs == subsList[i].lang,
                        callback: onSubtitlePopupClick
                    });
                    if (data[i].lang == 'off') {
                        data[i].name = _this.mggPlayer.config.i18n('off') || 'Выкл';
                    }
                    if (currentSubs == subsList[i].lang) {
                        currentName = data[i].name;
                    }
                }
            }
            if (_this.currentPopup) {
                _this.data = data;
                _this.clickedElement = _this.subs_button;
                _this.tags.popup.update();
            }
            return currentName;
        }
        function onSubtitlePopupClick(data) {
            _this.mggPlayer.setSubtitles(data.lang);
            _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
        }

        function updateQualityInfo() {
            var qualityList = _this.mggPlayer.get('qualityList');
            var currentQuality = _this.mggPlayer.get('quality');

            var currentName, data, i, l, autoQualityName;
            _this.qualityIsVisible = qualityList.length > 1;
            if (Array.isArray(qualityList)) {
                data = [];

                if (currentQuality === -1 && autoQualityIndex >= 0) {
                    for (i = 0, l = qualityList.length; i < l; ++i) {
                        if (qualityList[i].index === autoQualityIndex) {
                            autoQualityName = qualityList[i].bitrate + 'p';
                            break;
                        }
                    }
                }

                for (i = 0, l = qualityList.length; i < l; ++i) {
                    if (qualityList[i].index === -1 && autoQualityName) {
                        autoQualityName = qualityList[i].name + ' (' + autoQualityName + ')';
                    }
                    data.push({
                        name: qualityList[i].index === -1 && autoQualityName ? autoQualityName : qualityList[i].name,
                        id: qualityList[i].bitrate,
                        isActive: currentQuality == qualityList[i].bitrate,
                        callback: onQualityPopupClick
                    });
                    if (currentQuality == qualityList[i].bitrate) {
                        currentName = autoQualityName ? autoQualityName : qualityList[i].name;
                    }
                }
            }
            if (_this.currentPopup) {
                _this.data = data;
                _this.clickedElement = _this.quality_button;
                _this.tags.popup.update();
            }
            return currentName;
        }
        function onQualityPopupClick(data) {
            _this.mggPlayer.setQuality(data.id);
            _this.mggPlayer.set(skinConsts.CURRENT_OPENED_WIDGET, null);
        }

        function hidePopup(dontUpdate) {
            _this.data = [];
            _this.clickedElement = null;
            if (!dontUpdate) {
                _this.tags.popup.update();
            }
        }

        function onQualityChange(event) {
            if (event && event.data !== -1) {
                autoQualityIndex = -1;
            }

            _this.qualityValue = updateQualityInfo();
            _this.update();

            cropSettingsValues();
        }

        function onSubtitlesChange() {
            _this.subsValue = updateSubtitleInfo();
            _this.update();

            cropSettingsValues();
        }

        function onAudioChange() {
            _this.audioValue = updateAudioTrackInfo();
            _this.update();

            cropSettingsValues();
        }

        function onAutoQualitySwitch(event) {
            autoQualityIndex = event.data;
            onQualityChange();
        }

        function setVisible(value) {
            if (opacityTween) {
                opacityTween.kill();
                if (opacityTween.isActive()) {
                    opacityTween.eventCallback('onComplete', null);
                    opacityTween.eventCallback('onStart', null);
                }
            }

            opacityTween = TweenLite.to(_this.root, .2, {opacity: value ? 1 : 0, ease: Power2.easeInOut});
            if (value) {
                opacityTween.eventCallback('onStart', onDisplayValue, [true]);
            } else {
                opacityTween.eventCallback('onComplete', onDisplayValue, [false]);
            }
        }

        function onDisplayValue(value) {
            _this.visible = value;
            _this.update();

            if (value) {
            	cropSettingsValues();
            }
        }

        function cropSettingsValues() {
        	var width;
        	if (_this.quality_value.offsetParent) {
		        width = _this.quality_value.offsetParent.offsetWidth - LEFT_OFFSET - _this.quality_label.offsetWidth;

		        _this.qualityValue = cropString(_this.qualityValue, width);
	        }

	        if (_this.audio_value.offsetParent) {
		        width = _this.audio_value.offsetParent.offsetWidth - LEFT_OFFSET - _this.audio_label.offsetWidth;

		        _this.audioValue = cropString(_this.audioValue, width);
	        }

	        if (_this.subs_value.offsetParent) {
		        width = _this.subs_value.offsetParent.offsetWidth - LEFT_OFFSET - _this.subs_label.offsetWidth;

		        _this.subsValue = cropString(_this.subsValue, width);
	        }
	        _this.update();
        }

        function cropString(string, width) {
        	var pixelsPerSymbol = 8.5;
        	var maxSymbols = Math.floor(width / pixelsPerSymbol);
        	if (string && string.length > maxSymbols) {
        		string = string.substr(0, maxSymbols - 3) + '...'
	        }
	        return string
        }

});

riot.tag2('optionsvalue', '<span id="opt_value_text" class="{brand-color_text: item.isActive} settings_options_text">{item.name}</span><span id="opt_check_icon" class="{options_popup_icon: item.isActive} {window.optionCheckIcon[colorIndex]} {mggskin-hidden: !item.isActive}"></span>', '', 'onclick="{onClick}"', function(opts) {
        var initColor = '#333';
        var _this = this;
        var callback;
        var mggPlayer = _this.parent.mggPlayer;

        this.item = null;
        this.colorIndex = mggPlayer.get(skinConsts.BRAND_COLOR_INDEX);

        mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
            _this.colorIndex = mggPlayer.get(skinConsts.BRAND_COLOR_INDEX);
            _this.update();
        });

        this.on('update', function (event) {
            _this.item = event;
            if (event.isActive) {
                var colorIndex = mggPlayer.get(skinConsts.BRAND_COLOR_INDEX);
                _this.opt_value_text.style.color = window.brandColor[colorIndex];
            }
        });

        this.onClick = function (event) {
            if (_this.item.callback) {
                _this.item.callback(_this.item);
            }
        };

        this.opt_value_text.addEventListener('mouseenter', function (event) {
            var el = event.currentTarget;
            el.style.color = window.brandColorOver[mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
        });
        this.opt_value_text.addEventListener('mouseleave', function (event) {
            var el = event.currentTarget;
            if (el.classList.contains('brand-color_text')) {
                el.style.color = window.brandColor[mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
            } else {
                el.style.color = initColor;
            }
        });
});

riot.tag2('settingsoptions', '<ul id="settings_opts" class="settings_options__list"><li each="{items}" class="settings_options_item"><optionsvalue item="{item}" clickcallback="{opts.clickcallback}"></optionsvalue></li></ul>', '', 'class="{mggskin-hidden:!this.visible}"', function(opts) {
        var _this = this;
        this.visible = true;
        this.items = null;
        var clickedElement = null;
        var scrollBar;
        var itemsPosByCount = {};

        if (opts.data) {
            this.items = opts.data;
        }

        this.on('update', function(event) {
            if (_this.items && _this.items.length > 0) {
                itemsPosByCount[String(_this.items.length)] = _this.settings_opts.offsetTop;
            }
            _this.items = opts.data;
            clickedElement = opts.clicked_element;
            _this.root.style.height = 'initial';
            if (scrollBar) {
                scrollBar.update(false);
            }
        });

        this.on('updated', function(event) {
            if (clickedElement) {
                var newTop = clickedElement.offsetTop + (clickedElement.offsetHeight - _this.root.offsetHeight) / 2 - 3;
                if (newTop + _this.root.offsetHeight > _this.parent.root.offsetHeight) {
                    newTop = _this.parent.root.offsetHeight - _this.root.offsetHeight;

                    var controlBarHeight = _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT);
                    var mainContainer = document.getElementById(skinConsts.PLAYERS_CONTAINER);
                    var height = mainContainer.offsetHeight - controlBarHeight;
                    if (_this.root.offsetHeight >= height) {
                        _this.root.style.height = height + 'px';
                        newTop = _this.parent.root.offsetHeight - height;
                        _this.settings_opts.style.top = (itemsPosByCount[String(_this.items.length)] || 0) + 'px';
                        scrollBar.update(true);
                    } else {
                        _this.root.style.height = 'initial';
                        _this.settings_opts.style.top = '0px';
                    }
                } else {
                    _this.root.style.height = 'initial';
                    _this.settings_opts.style.top = '0px';
                }
                _this.root.style.top = newTop + 'px';
            }
        });

        this.on('mount', function(event) {
            scrollBar = skinScrollBar.createCustomHTMLScroll(_this.root, _this.settings_opts, {className: 'option_scroll_bar', margin: 10}, _this.mggPlayer);
        });

});

riot.tag2('adskin', '<div class="mggskin-ad-video-container" id="mggskin_ad_video_container"></div><div id="ad_click_area" class="{mggskin-hidden: !isClickable || !showControls}"></div><div class="{mggskin-hidden: skinIsHidden || !showControls}"><adtopbar></adtopbar><adbottombar class="{mggskin-hidden: hideBottomBar}"></adbottombar></div><adplaybutton class="{mggskin-hidden: !skinIsHidden}"></adplaybutton>', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
		var _this = this;
		var adContainer = this.mggskin_ad_video_container;
		var link = null;
		var vastData;
		var overlayContainerTag = null;
		var imaContainerTag = null;
		this.mggPlayer = window.mggPlayersPool[opts.id.replace('_adskin', '_player')];
		insertPlayer(_this);

		this.visible = false;
		this.showControls = true;
		this.skinIsHidden = false;
		this.isClickable = false;
		this.hideBottomBar = false;

		_this.mggPlayer.registerProperty(skinConsts.AD_VAST_DATA, void 0, true);
		_this.mggPlayer.set(skinConsts.AD_VAST_DATA, null);

		_this.mggPlayer.on('property:videoInstances', function (event) {
			if (event.data && event.data.length > 0) {
				var videos = event.data;
				for (var i = 0, l = videos.length; i < l; ++i) {
					if (videos[i].className.indexOf('ad:vendor:video') !== -1) {
						videos[i].style.backgroundColor = 'initial';
						if (videos[i].parentNode != _this.mggskin_ad_video_container) {
							_this.mggskin_ad_video_container.appendChild(videos[i]);
						}
						break;
					}
				}
			}
		});

		_this.mggPlayer.on('property:videoInstances', function (event) {
			if (event.data && event.data.length > 0) {
				var videos = event.data;
				for (var i = 0, l = videos.length; i < l; ++i) {
					if (videos[i].className.indexOf('ad:vendor:video') !== -1) {
						if (videos[i].parentNode != _this.mggskin_ad_video_container) {
							_this.mggskin_ad_video_container.appendChild(videos[i]);
						}
						break;
					}
				}
			}
		});

		_this.mggPlayer.on('player:stop', function(event) {

			if (overlayContainerTag) {
				overlayContainerTag.unmount();
				overlayContainerTag = null;
			}
			if (imaContainerTag) {
				imaContainerTag.unmount();
				imaContainerTag.dispose();
				imaContainerTag = null;
			}
		});

		_this.mggPlayer.on('ad:external:vastData', function(event) {
			_this.mggPlayer.set(skinConsts.AD_VAST_DATA, event.data.vastData);
			processVastData(event.data.vastData);
		});

		_this.mggPlayer.on('ad:external:mediaBeginsLoading', function(event) {
			if (event.data.elementURL.indexOf('.doubleclick') != -1) {
				if (imaContainerTag) {
					imaContainerTag.unmount();
					imaContainerTag.dispose();
				}
				var imaContainer = document.createElement('imacontainer');
				document.getElementById(skinConsts.PLAYERS_CONTAINER).appendChild(imaContainer);
				imaContainerTag = riot.mount('imacontainer')[0];
				imaContainerTag.mggPlayer = _this.mggPlayer;
				imaContainerTag.setIMA(document.getElementById('ad:imaContainer'));
			}
			if (event.data.linear && _this.mggPlayer.get('isMobile')) {
                _this.visible = true;
                _this.update();
			}

		});

		_this.mggPlayer.on('ad:external:memberStartedPlaying', function (event) {
			if (event.data.linear) {
				adContainer.style.backgroundColor = 'black';

				var vastData = _this.mggPlayer.get(skinConsts.AD_VAST_DATA);
				if (vastData && vastData.mediaFile[0].apiFramework) {

					_this.hideBottomBar = vastData.mediaFile[0].apiFramework.toUpperCase() === 'VPAID' && _this.showControls && !_this.isClickable;
				}
				_this.visible = true;

				_this.update();

				adContainer.classList.add('ad_media_container');
				_this.mggPlayer.emit(skinConsts.NEED_TO_CHANGE_MAIN_SKIN_VISIBILITY, false);
			} else {
				if (event.data.elementURL.indexOf('.doubleclick') == -1) {
					var overlay = getOverlayDiv();
					if (overlay) {
						if (overlayContainerTag) {
							overlayContainerTag.unmount();
						}

						var overlayContainer = document.createElement('overlaycontainer');
						overlayContainer.mggPlayer = _this.mggPlayer;
						overlayContainer.id = skinConsts.OVERLAY_TAG_CONTAINER;
						document.getElementById(skinConsts.PLAYERS_CONTAINER).appendChild(overlayContainer);
						overlayContainerTag = riot.mount('overlaycontainer')[0];
						overlayContainerTag.setOverlay(overlay);
					}
				}
			}

			if (_this.root.style.visibility === 'hidden') {
				_this.root.style.visibility = 'visible'
			}
		});
		_this.mggPlayer.on('ad:external:adComplete', function(event) {
			if (event.data.linear || imaContainerTag) {
				adContainer.style.backgroundColor = '';
				_this.mggPlayer.emit(skinConsts.NEED_TO_CHANGE_MAIN_SKIN_VISIBILITY, true);
				_this.visible = false;
				_this.update();
				adContainer.classList.remove('ad_media_container');
			} else {
				if (overlayContainerTag) {
					overlayContainerTag.unmount();
					overlayContainerTag = null;
				}
			}

			if (imaContainerTag) {
				imaContainerTag.unmount();
				imaContainerTag.dispose();
				imaContainerTag = null;
			}

			var skinContainer = document.getElementById('playerContainer_skin');
			if (skinContainer && skinContainer.style.visibility === 'hidden') {
				skinContainer.style.visibility = 'visible';
			}
		});

		_this.mggPlayer.on('ad:skin:clickOnMessage', onClickThroughEvent);
		_this.mggPlayer.on('ad:skin:clickOnBg', onClickThroughEvent);
		_this.mggPlayer.on('ad:skin:resume', function(event) {
			_this.skinIsHidden = false;
			_this.update();
		});

		this.ad_click_area.addEventListener('click', function(event) {
			if (_this.isClickable && link) {
				window.open(link, '_blank');
				_this.mggPlayer.emit('ad:skin:clickOnBg');
			}
		});

		function onClickThroughEvent(event) {
			if (!event.data || !event.data.isOverlay) {
				_this.skinIsHidden = true;
				_this.update();
			}
		}

		function processVastData(vastData) {
			_this.isClickable = false;
			if (vastData) {
				if (vastData.isClickable && vastData.isClickable.length > 0) {
					_this.isClickable = Boolean(vastData.isClickable[0]);
				}
				if (vastData.clickthrough && vastData.clickthrough.length > 0) {
					link = vastData.clickthrough[0];
				}

				var visibility = true;
				if (vastData.controls && vastData.controls.length > 0) {
					try {
						visibility = Boolean(parseInt(vastData.controls[0]));
					} catch (error) {
						visibility = true;
					}
				}
				_this.showControls = visibility;
			}
			_this.update();
		}

		function insertPlayer(tag) {
			for (var item in tag.tags) {
				var child = tag.tags[item];
				child.mggPlayer = _this.mggPlayer;
				insertPlayer(child);
			}
		}

		function getOverlayDiv() {
			var overlayContainer = adContainer.getElementsByTagName('div');
			if (overlayContainer.length > 0) {
				for (var i = 0, l = overlayContainer.length;  i < l; ++i) {
					if (overlayContainer[i].id == 'ad:overlay') {
						overlayContainer = overlayContainer[i];
						break;
					}
				}
			}
			return overlayContainer;
		}

});

riot.tag2('adbottombar', '<advolumebutton></advolumebutton><div class="ad_bottom_middle_container"><adgotobutton></adgotobutton><adskiptext></adskiptext></div><adprogressbar></adprogressbar>', '', 'class="mggskin-unselectable"', function(opts) {
});

riot.tag2('adplaybutton', '', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
		this.visible = false;

		var _this = this;

		this.root.addEventListener('click', function(event) {
			_this.mggPlayer.emit('ad:skin:resume');
		});

});
riot.tag2('adtopbar', '<div class="ad_top_left_container"><h3 class="{mggskin-hidden: hideCaption}" id="adCaptionElement">{adCaption}</h3><span>{adCounter}</span></div><div class="ad_top_right_container"><adclosebutton></adclosebutton></div>', '', 'class="mggskin-unselectable {mggskin-hidden: !visible}"', function(opts) {
      var _this = this;
      var counterTemplate = '';

      this.visible = true;
      this.adCaption = '';
      this.adCounter = '';
      this.hideCaption = false;
      this.playerHeight = _this.mggPlayer.config.container.clientHeight;

      _this.mggPlayer.on('ad:external:memberStartedPlaying', function(event) {
        if (event.data.count > 1) {
          _this.adCounter = counterTemplate.replace('%num%', event.data.number).replace('%total%', event.data.count);
        } else {
          _this.adCounter = '';
        }
        _this.update();
      });

      _this.mggPlayer.on('ad:external:adComplete', function(event) {
        _this.adCounter = '';
        _this.update();
      });

      window.addEventListener('resize', function() {
        _this.playerHeight = _this.mggPlayer.config.container.clientHeight;
        processLocalization()
        _this.update();
      });

      _this.mggPlayer.on('ad:external:vastData', function(event) {
        var vastData = event.data.vastData;
        if (vastData.titleVisible && vastData.titleVisible.length > 0) {
          var titleVisibleValue;
          for (var i = 0, l = vastData.titleVisible.length; i < l; ++i) {
            try {
              titleVisibleValue = parseInt(vastData.titleVisible[i]);
            } catch (error) {
              titleVisibleValue = 1;
            }
            _this.visible = _this.visible && (titleVisibleValue !== 0);
          }
        } else {
          _this.visible = true;
        }

        if (vastData.titleTxt && vastData.titleTxt.length > 0) {
          _this.adCaptionElement.innerHTML = vastData.titleTxt[0];
        }

        _this.update();
      });

      _this.mggPlayer.on('property:videoInfo', function(event) {
        if (_this.mggPlayer.config) {
          processLocalization();
        }
        if ('is_subscription' in event.data) {
          _this.hideCaption = event.data['is_subscription'];
        }
        _this.update();
      });

      if (_this.mggPlayer.config) {
        processLocalization();
      }

      function processLocalization() {
        counterTemplate = _this.mggPlayer.config.i18n('advertisement_additional_part') || 'Ролик %num% из %total%';
        if(_this.playerHeight > 200){
          _this.adCaption = _this.mggPlayer.config.i18n('advertisement_title') || 'Благодаря рекламе это видео для Вас бесплатно';
        } else {
          _this.adCaption = _this.mggPlayer.config.i18n('advertisement_title_geo_ww') || 'Реклама';
        }

      }

});

riot.tag2('imacontainer', '', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
		this.visible = true;

		var _this = this;

		this.setIMA = function(ima) {
			_this.mggPlayer.on('ad:external:memberStartedPlaying', onMemberStartedPlaying);
			_this.root.appendChild(ima);
		};

		this.dispose = function() {
			_this.mggPlayer.off('ad:external:memberStartedPlaying', onMemberStartedPlaying);
		};

		function onMemberStartedPlaying(event) {
			_this.mggPlayer.off('ad:external:memberStartedPlaying', onMemberStartedPlaying);
			if (!event.data.linear) {
				var height = _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT) + 10;
				_this.root.style.height = 'calc(100% - ' + height + 'px)';
				var iframe = _this.root.getElementsByTagName('iframe');
				if (iframe && iframe.length > 0) {
					iframe = iframe[0];
					height = parseInt(getComputedStyle(_this.root).height);
					iframe.style.height = height + 'px';
					iframe.style.backgroundColor = 'initial';
					iframe.height = height;
				}
			}
		}
});
riot.tag2('overlaycontainer', '<div id="overlay_click_area" class="{mggskin-hidden: hideClickArea}" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"></div><div id="overlay_close_button" class="{mggskin-hidden: !closeButtonVisible}"></div>', '', 'if="{visible}"', function(opts) {
		this.visible = true;
		this.closeButtonVisible = false;
		this.hideClickArea = false;

		this.mggPlayer = this.root.mggPlayer;

		var _this = this;
		var offset = 10;
		var hoverClassName = window.closeButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		var vastData;
		var tween;
		var skipTime = 0;
		var currentTime = 0;
		var skipTimerID = null;
		var scalable = false;
		var link = null;
		var isClickable = true;
		var initDims = _this.mggPlayer.get(skinConsts.INITIAL_PLAYERS_DIMENSIONS).slice();
		var currentDims = getMainWidthAndHeight();

		_this.overlay_close_button.classList.add(hoverClassName);

		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			_this.overlay_close_button.classList.remove(hoverClassName);
			hoverClassName = window.closeButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
			_this.overlay_close_button.classList.add(hoverClassName);
		});

		_this.mggPlayer.on('ad:block:startingNewElement', function(event) {
			if (event.data.currentMember.element.linear) {

			}
		});

		_this.one('unmount', function(evnet) {
			window.removeEventListener('message', onWindowMessage);
		});

		this.setOverlay = function(overlay) {
			_this.root.insertBefore(overlay, _this.overlay_click_area);
			overlay.classList.add('ad_media_container');
			overlay.style.width = '100%';
			overlay.style.height = '100%';

			var bigNodimsOverlay = null;

			for (var i = 0, l = overlay.childNodes.length; i < l; ++i) {
				if (overlay.childNodes[i] instanceof HTMLImageElement && overlay.childNodes[i].className.indexOf('ad:vendor:img') != -1) {
					var dims = getRealImageSize(overlay.childNodes[i]);

					overlay.childNodes[i].style.left = 'initial';
					overlay.childNodes[i].style.transform = 'initial';

					if (dims[0] > initDims[0]) {
						overlay.childNodes[i].style.width = initDims[0] * .7 + 'px';
						bigNodimsOverlay = overlay.childNodes[i];
						break;
					} else {
						overlay.childNodes[i].style.width = '100%';
					}
				} else if (overlay.childNodes[i] instanceof HTMLIFrameElement) {
					_this.hideClickArea = true;
					window.addEventListener('message', onWindowMessage);
					_this.update();
					break;
				}
			}

			vastData = _this.mggPlayer.get(skinConsts.AD_VAST_DATA);
			if (!vastData) {
				return;
			}

			var hideCloseButton = false;
			if (vastData.controls && vastData.controls.length > 0) {
				hideCloseButton = vastData.controls[0] == 0;
			}

			if (!hideCloseButton) {
				if (vastData.skipTime2 && vastData.skipTime2.length > 0) {
					if (vastData.skipTime2[0] > 0) {
						skipTime = vastData.skipTime2[0];
						skipTimerID = setInterval(onSkipTime, 1000);
					} else {
						_this.closeButtonVisible = true;
						_this.update();
					}
				}
			}

			if (vastData.isClickable && vastData.isClickable.length > 0) {
				isClickable = Boolean(vastData.isClickable[0]);
			}
			if (vastData.nonlinearclickthrough && vastData.nonlinearclickthrough.length > 0) {
				link = vastData.nonlinearclickthrough[0];
			}

			scalable = vastData.mediaFile[0].scalable == 'true';
			var width = 0,
				height = 0;
			try {
				width = parseInt(vastData.mediaFile[0].width);
				height = parseInt(vastData.mediaFile[0].height);
			} catch (error) {
				console.warn('Bad overlay\'s dimensions parsing in mggp-skin::overlaycontainer.setOverlay');
			}
			if (width <= 0) {
				width = parseInt(getComputedStyle(overlay).width);
			}
			if (height <= 0) {
				height = parseInt(getComputedStyle(overlay).height);
			}
			if (initDims[0] != currentDims[0] && scalable) {
				width *= currentDims[0] / initDims[0];
			}
			if (initDims[1] != currentDims[1] && scalable) {
				height *= currentDims[1] / initDims[1];
			}

			if (bigNodimsOverlay) {
				bigNodimsOverlay.style.width = '100%';
			}

			_this.root.style.width = width + 'px';
			_this.root.style.height = height + 'px';

			if (vastData['horizontalAlign'] && vastData['horizontalAlign'].length > 0 && vastData['horizontalAlign'][0] === 'left') {
				_this.root.style.left = 0;
			} else if (vastData['horizontalAlign'] && vastData['horizontalAlign'].length > 0 && vastData['horizontalAlign'][0] === 'right') {
				_this.root.style.right = 0;
			} else {
				_this.root.style.transform = 'translateX(-50%)';
				_this.root.style.left = '50%';
			}

			_this.visible = true;

			var isHiding = !_this.mggPlayer.get(skinConsts.SKIN_VISIBILITY_IS_CHANGING).visible;
			processOverlayPosition(isHiding, false);

			_this.mggPlayer.on('ad:blockMember:complete', onMemberComplete);
		};

		_this.mggPlayer.on(skinConsts.SKIN_VISIBILITY_BEGIN_CHANGE, function(event) {
			processOverlayPosition(!event.data, true);
		});

		_this.mggPlayer.on(skinConsts.FULLSCREEN_STATE_CHANGED, function(event) {
			processOverlayDimensions();
			processOverlayPosition(false, false);
		});
		this.root.addEventListener('click', function(event) {
			if (event.target.id == _this.overlay_close_button.id) {
				_this.closeButtonVisible = false;
				_this.update();
				_this.mggPlayer.emit('ad:skin:skipButton');
			} else {
				processClickThrough();
			}
		});

		function getRealImageSize(image) {
			var width = image.style.width;
			var height = image.style.height;

			image.style.width = 'auto';
			image.style.height = 'auto';

			var style = getComputedStyle(image);

			var realWidth = parseInt(style.width);
			var realHeight = parseInt(style.height);

			image.style.width = width;
			image.style.height = height;

			return [realWidth, realHeight];
		}

		function onPlayerStateChange(event) {
			if (event.data == 1) {
				_this.mggPlayer.off('property:state', onPlayerStateChange);
				_this.mggPlayer.emit('ad:skin:resume');
			}
		}

		function processOverlayDimensions() {
			if (scalable) {
				var newDims = getMainWidthAndHeight();
				_this.root.style.width = (newDims[0] /  currentDims[0]) * _this.root.clientWidth + 'px';
				_this.root.style.height = (newDims[1] /  currentDims[1]) * _this.root.clientHeight + 'px';
				currentDims = newDims;
			}
		}

		function processOverlayPosition(isHiding, useAnim) {
			var bottom;
			if (!isHiding) {
				bottom = _this.mggPlayer.get(skinConsts.CONTROL_BAR_HEIGHT) + offset;
			} else {
				bottom = offset;
			}
			if (useAnim) {
				if (tween) {
					tween.kill();
				}
				if (tween && !tween.isActive()) {
					tween = TweenLite.to(_this.root, 0.2, {'bottom': bottom + 'px', ease: Power2.easeInOut, delay: bottom != offset ? 0 : .3});
				} else if (!tween) {
					tween = TweenLite.to(_this.root, 0.2, {'bottom': bottom + 'px', ease: Power2.easeInOut, delay: bottom != offset ? 0 : .3});
				}
			} else {
				_this.root.style.bottom = bottom + 'px';
			}
			_this.update();
		}

		function processClickThrough() {
			if (isClickable && link) {
				window.open(link, '_blank');
				_this.mggPlayer.pause();
				_this.mggPlayer.on('property:state', onPlayerStateChange);
				_this.mggPlayer.emit('ad:skin:clickOnBg', {isOverlay: true});
			}
		}

		function onSkipTime() {
			if (++currentTime >= skipTime) {
				clearInterval(skipTimerID);
				_this.closeButtonVisible = true;
				_this.update();
			}
		}

		function onMemberComplete(event) {
			_this.mggPlayer.off('ad:blockMember:complete', onMemberComplete);
			_this.closeButtonVisible = false;
			_this.update();
		}

		function getMainWidthAndHeight() {
			var result;
			var main = document.getElementById(skinConsts.PLAYERS_CONTAINER);
			if (main) {
				result = [main.clientWidth, main.clientHeight];
			} else {
				result = [0, 0];
			}
			return result;
		}

		function onWindowMessage(event) {
			if (event && event.data === 'click') {
				processClickThrough();
			}
		}

});
riot.tag2('adgotobutton', '<span id="goto_text"></span>', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
		this.visible = true;

		var _this = this;
		var link = null;

		var hoverColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];

		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			hoverColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		});

		this.root.addEventListener('mouseenter', function(event) {
			_this.root.style.color = hoverColor;
		});
		this.root.addEventListener('mouseleave', function(event) {
			_this.root.style.color = 'white';
		});
		this.root.addEventListener('click', function (event) {
			if (link) {
				window.open(link, '_blank');
				_this.root.style.color = 'white';
				_this.mggPlayer.emit('ad:skin:clickOnMessage');
			}
		});

		_this.mggPlayer.on('property:' + skinConsts.AD_VAST_DATA, function (event) {
			processVastData(event.data);
		});
		processVastData(_this.mggPlayer.get(skinConsts.AD_VAST_DATA));

		function processVastData(vastData) {
			if (vastData) {
				if (vastData.clickthrough && vastData.clickthrough.length > 0) {
					link = vastData.clickthrough[0];
				}
				if (vastData.linkTxt && vastData.linkTxt.length > 0) {
					var text = vastData.linkTxt[0];
					if (text === 'Перейти на сайт рекламодателя' && _this.mggPlayer.config) {
						text = _this.mggPlayer.config.i18n('go_to_the_advertiser_website') || 'Перейти на сайт рекламодателя';
					}
					_this.goto_text.innerHTML = text;
				} else if (_this.mggPlayer.config) {
					_this.goto_text.innerHTML = _this.mggPlayer.config.i18n('go_to_the_advertiser_website') || 'Перейти на сайт рекламодателя';
				} else {
					_this.goto_text.innerHTML = 'Перейти на сайт рекламодателя';
				}

				if (vastData.isClickable && vastData.isClickable.length > 0) {
					_this.visible = Boolean(parseInt(vastData.isClickable[0]));
				}

				_this.update();
			}
		}

});
riot.tag2('adprogressbar', '<canvas id="ad_bg_circle" width="25" height="25"></canvas><canvas id="ad_progress_circle" width="25" height="25"></canvas>', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
		this.visible = true;

		var _this = this;
		var position = 0;
		var duration = 0;
		var bgContext, progressContext;
		var startAngle = 1.5 * Math.PI;

		initialize();

		_this.mggPlayer.on('ad:external:memberStartedPlaying', function(event) {
			_this.mggPlayer.on('property:ad:vendor:position', onPositionUpdated);
			_this.mggPlayer.on('property:ad:vendor:duration', onDurationUpdated);
			_this.mggPlayer.on('property:ad:vendor:state', onVendorStateChanged);
			position = _this.mggPlayer.get('ad:vendor:position');
			duration = _this.mggPlayer.get('ad:vendor:duration');
		});

		_this.mggPlayer.on('ad:external:adComplete', function(event) {
			_this.mggPlayer.off('property:ad:vendor:position', onPositionUpdated);
			_this.mggPlayer.off('property:ad:vendor:duration', onDurationUpdated);
			_this.mggPlayer.off('property:ad:vendor:state', onVendorStateChanged);
			position = 0;
			duration = 0;
		});

		_this.mggPlayer.on('ad:external:vastData', function(event) {
			var vastData = event.data.vastData;
			if (vastData.progressVisible && vastData.progressVisible.length > 0) {
				for (var i = 0, l = vastData.progressVisible.length; i < l; ++i) {
					_this.visible = _this.visible && (vastData.progressVisible[i] != 0);
				}
			} else {
				_this.visible = true;
			}
			_this.update();
		});

		function onPositionUpdated(event) {
			position = event.data;
			if (duration > 0) {
				drawProgressCircle(position / duration)
			}
		}

		function onDurationUpdated(event) {
			duration = event.data;
		}

		function onVendorStateChanged(event) {
			if (event.data === 0 || event.data === -1) {
				duration = 0;
				position = 0;
				drawProgressCircle(0);
			}
		}

		function initialize() {
			bgContext = _this.ad_bg_circle.getContext('2d');
			bgContext.beginPath();
			bgContext.arc(_this.ad_bg_circle.width / 2, _this.ad_bg_circle.height / 2, 9, 0, 2 * Math.PI);
			bgContext.strokeStyle = '#a0a6b0';
			bgContext.lineWidth = 1.5;
			bgContext.shadowBlur = 1;
			bgContext.shadowColor = '#777';
			bgContext.stroke();

			progressContext = _this.ad_progress_circle.getContext('2d');
		}

		function drawProgressCircle(percent) {
			progressContext.clearRect(0, 0, _this.ad_progress_circle.width, _this.ad_progress_circle.height);
			progressContext.beginPath();
			progressContext.arc(_this.ad_progress_circle.width / 2, _this.ad_progress_circle.height / 2, 9, startAngle, percent * 2 * Math.PI + startAngle);
			progressContext.strokeStyle = '#fff';
			progressContext.lineWidth = 2;
			progressContext.stroke();
		}

});
riot.tag2('adskiptext', '<div>{messageText}</div>', '', 'class="{mggskin-hidden: !visible} mggskin-unselectable"', function(opts) {
		this.visible = false;
		this.messageText = '';

		var _this = this;
		var skipTime = 0;
		var currentTime = 0;

		var canSkip = false;
		var vastData = null;
		var mouseEnter = false;
		var vendorPosition = 0;

		var hoverColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];

		_this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
			hoverColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
		});

		this.root.addEventListener('mouseenter', function(event) {
			mouseEnter = true;
			if (canSkip) {
				_this.root.style.color = hoverColor;
			}
		});
		this.root.addEventListener('mouseleave', function(event) {
			mouseEnter = false;
			_this.root.style.color = 'white';
		});
		this.root.addEventListener('click', function(event) {
			if (canSkip) {
				_this.mggPlayer.emit('ad:skin:skipMessage');
			}
		});

		_this.mggPlayer.on('property:ad:vendor:duration', function(event) {
			updateByDuration(event.data);
		});

		_this.mggPlayer.on('ad:skin:skipButton', onAdSkip);
		_this.mggPlayer.on('ad:skin:skipMessage', onAdSkip);

		_this.mggPlayer.on('property:' + skinConsts.AD_VAST_DATA, function(event) {
			processVastData(event.data);
		});
		_this.mggPlayer.on('ad:internal:memberStarted', function (event) {
			if (vastData) {
				_this.root.classList.remove('ad_skip_button');
				_this.root.style.color = 'white';
				canSkip = false;
				_this.visible = false;
				var duration;
				if (vastData.mediaFile[0].duration) {
					duration = vastData.mediaFile[0].duration;
				} else {
					duration = _this.mggPlayer.get('ad:vendor:duration');
				}
				if (duration) {
					updateByDuration(duration)
				}

			}
		});
		processVastData(_this.mggPlayer.get(skinConsts.AD_VAST_DATA));

		function processVastData(pVastData) {
			vastData = pVastData
		}

		function updateByDuration(duration) {
			if (duration && vastData && vastData.skipTime && duration > vastData.skipTime[0]) {
				if (vastData.skipTime[0] > 0) {
					currentTime = -1;
					skipTime = vastData.skipTime[0];
					_this.mggPlayer.on('property:ad:vendor:position', onPositionUpdated);
					_this.visible = true;
				} else {
					_this.messageText = _this.mggPlayer.config.i18n('skip_ads') || 'Пропустить рекламу';
					canSkip = true;
					_this.root.classList.add('ad_skip_button');
					if (mouseEnter) {
						_this.root.style.color = hoverColor;
					}
					_this.visible = true;
				}
			} else {
				_this.visible = false;
			}
			_this.update();
		}

		function onPositionUpdated(event) {
			vendorPosition = Math.round(event.data);
			if (_this.mggPlayer.config) {
				_this.messageText = _this.mggPlayer.config.i18n('skip_ads') || 'Пропустить рекламу';
				if (vendorPosition >= skipTime) {
					_this.mggPlayer.off('property:ad:vendor:position', onPositionUpdated);
					canSkip = true;
					_this.root.classList.add('ad_skip_button');
					if (mouseEnter) {
						_this.root.style.color = hoverColor;
					}
				} else {
					_this.messageText += ' ';
					_this.messageText += _this.mggPlayer.config.i18n('through') || 'через';
					_this.messageText += ' ';
					_this.messageText += skipTime - vendorPosition;
					_this.messageText += ' ';
					_this.messageText += _this.mggPlayer.config.i18n('second') || 'сек';
				}
				_this.update();
			}
		}

		function onAdSkip(event) {
			vendorPosition = 0;
			_this.mggPlayer.off('property:ad:vendor:position', onPositionUpdated);
			if (_this.mggPlayer.config) {
				_this.messageText = _this.mggPlayer.config.i18n('skipAds') || 'Пропустить рекламу';
			} else {
				_this.messageText = '';
			}
			_this.update();
		}

});
riot.tag2('advolumebutton', '<div id="ad_volume_button" class="{ad_volume-high: volume > 50,         ad_volume-middle: volume <= 50 && volume > 0,         ad_volume-off: volume == 0 || muted}"></div><div id="ad_volume_slider" class="brand-color_background"></div>', '', 'class="{mggskin-hidden:!this.visible}"', function(opts) {

        var OPENED_WIDTH = 159;
        var NORMAL_WIDTH = 59;
        var SLIDER_WIDTH = 80;
        var SLIDER_HANDLER_WIDTH = 12;
        var SLIDER_HANDLER_TOP = -4;

        var _this = this;
        var sliderStarted = false;
        var tweenMain, tweenSlider, tweenSliderHandler = null;
        var sliderHandler = null;
        var startedVolume = void 0;

        this.visible = true;

        window.noUiSlider.create(this.ad_volume_slider, {
            start: _this.mggPlayer.get('volume'),
            animate: true,
            connect: 'lower',
            range: {
                'min': 0,
                'max': 100
            }
        });

        this.ad_volume_slider.style.backgroundColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
        _this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
            _this.ad_volume_slider.style.backgroundColor = window.brandColorOver[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
            _this.update();
        });

        sliderHandler = this.ad_volume_slider.getElementsByClassName('noUi-handle');
        if (sliderHandler.length > 0) {
            sliderHandler = sliderHandler[0]
        } else {
            sliderHandler = null;
        }

        this.ad_volume_slider.noUiSlider.on('start', function() {
            sliderStarted = true;
            startedVolume = normalizeValue(_this.ad_volume_slider.noUiSlider.get());
        });
        this.ad_volume_slider.noUiSlider.on('end', function() {
            sliderStarted = false;
            var value = normalizeValue(_this.ad_volume_slider.noUiSlider.get());
            if (value === 0) {
                _this.mggPlayer.emit('ad:skin:volumeChanged', startedVolume);
                _this.mggPlayer.emit('ad:skin:muteChanged', true);
            }
            startedVolume = void 0;
        });
        this.ad_volume_slider.noUiSlider.on('slide', function() {
            var value = normalizeValue(_this.ad_volume_slider.noUiSlider.get());
            _this.mggPlayer.emit('ad:skin:volumeChanged', value);
            updateButtonClass(value);
        });
        _this.mggPlayer.on('property:ad:vendor:volume', function(event) {
            if (!sliderStarted) {
                var value = normalizeValue(event.data);
                _this.ad_volume_slider.noUiSlider.set(value);
                updateButtonClass(value);
            }
        });
        _this.mggPlayer.on('property:ad:vendor:muted', function(event) {
            _this.muted = event.data;
            _this.update();
        });

        _this.mggPlayer.on('ad:external:vastData', function (event) {
            if (event.data.vastData.mediaFile && event.data.vastData.mediaFile.length > 0
                    && event.data.vastData.mediaFile[0]) {
                var type = event.data.vastData.mediaFile[0].type;
                if (type && type.indexOf('jpg') == -1 && type.indexOf('jpeg') == -1 && type.indexOf('gif') == -1 && type.indexOf('png') == -1 && type.indexOf('image') == -1) {
                    _this.visible = true;
                } else {
                    _this.visible = false;
                }
                _this.update();
            }
        });
        _this.mggPlayer.on('ad:external:memberStartedPlaying', function(event) {
            _this.muted = _this.mggPlayer.get('ad:vendor:muted');
            var value = normalizeValue(_this.mggPlayer.get('ad:vendor:volume'));
            _this.ad_volume_slider.noUiSlider.set(value);
            updateButtonClass(value);
        });

        updateButtonClass(normalizeValue(_this.mggPlayer.get('volume')));

        this.ad_volume_button.addEventListener('click', function(event) {
            if (_this.mggPlayer.get('ad:vendor:muted')) {
                _this.mggPlayer.emit('ad:skin:muteChanged', false);
            } else {
                _this.mggPlayer.emit('ad:skin:muteChanged', true);
            }
        });

        this.root.addEventListener('mouseenter', function(event) {
            disposeCurrentTweens();
            tweenMain = TweenLite.to(_this.root, .4, {width: OPENED_WIDTH + 'px', ease: Power2.easeInOut});
            tweenSlider = TweenLite.to(_this.ad_volume_slider, .4, {width: SLIDER_WIDTH + 'px', ease: Power2.easeInOut, delay: .05});
            tweenSlider.eventCallback('onStart', onSliderTweenEvent, [true]);
            if (sliderHandler) {
                tweenSliderHandler = TweenLite.to(sliderHandler, .4, {
                    width: SLIDER_HANDLER_WIDTH + 'px', height: SLIDER_HANDLER_WIDTH + 'px', top: SLIDER_HANDLER_TOP, left: '-6px',
                    ease: Power2.easeInOut, delay: .2});
                tweenSliderHandler.eventCallback('onStart', onSliderHandlerTweenEvent, [true]);
            }
        });
        this.root.addEventListener('mouseleave', function(event) {
            disposeCurrentTweens();
            tweenMain = TweenLite.to(_this.root, .4, {width: NORMAL_WIDTH + 'px', ease: Power2.easeInOut});
            tweenSlider = TweenLite.to(_this.ad_volume_slider, .35, {width: 0 + 'px', ease: Power2.easeInOut});
            tweenSlider.eventCallback('onComplete', onSliderTweenEvent, [false]);
            if (sliderHandler) {
                tweenSliderHandler = TweenLite.to(sliderHandler, .2, {
                    width: 0 + 'px', height: 0 + 'px', top: '1px', left: '0px',
                    ease: Power2.easeInOut});
                tweenSliderHandler.eventCallback('onComplete', onSliderHandlerTweenEvent, [false]);
            }
        });

        function onSliderTweenEvent(isStarted) {
            if (isStarted) {
                _this.ad_volume_slider.style.display = 'block';
            } else {
                _this.ad_volume_slider.style.display = 'none';
            }
        }

        function onSliderHandlerTweenEvent(isStarted) {
            if (isStarted) {
                sliderHandler.style.width = 0;
                sliderHandler.style.height = 0;
                sliderHandler.style.top = '1px';
                sliderHandler.style.visibility = 'visible';
            } else {
                sliderHandler.style.visibility = 'hidden';
            }
        }

        function disposeCurrentTweens() {
            if (tweenMain) {
                tweenMain.kill();
            }
            if (tweenSlider) {
                tweenSlider.kill();
                tweenSlider.eventCallback('onStart', null);
                tweenSlider.eventCallback('onComplete', null);
            }
            if (tweenSliderHandler) {
                tweenSliderHandler.kill();
            }
        }

        function updateButtonClass(volume) {
            _this.volume = volume;
            _this.update();
        }

        function normalizeValue(value) {
            try {
                if (typeof value === 'string') {
                    value = parseInt(value);
                }
            } catch (error) {

            }
            if (value < 0) {
                value = 0
            } else if (value > 100) {
                value = 100;
            }
            return value;
        }

});

riot.tag2('adclosebutton', '<div id="ad_close_button"></div>', '', 'class="{mggskin-hidden: !visible}"', function(opts) {
        var _this = this;
        var skipTime = 0;
        var currentTime = 0;

        this.visible = false;

        var hoverClassName = window.closeButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
        _this.mggPlayer.on('property:' + skinConsts.BRAND_COLOR_INDEX, function(event) {
            hoverClassName = window.closeButton[_this.mggPlayer.get(skinConsts.BRAND_COLOR_INDEX)];
        });

        this.root.addEventListener('mouseenter', function(event) {
            _this.ad_close_button.classList.add(hoverClassName);
        });
        this.root.addEventListener('mouseleave', function(event) {
            _this.ad_close_button.classList.remove(hoverClassName);
        });
        this.root.addEventListener('click', function(event) {
            _this.ad_close_button.classList.remove(hoverClassName);
            _this.mggPlayer.emit('ad:skin:skipButton');
        });

        _this.mggPlayer.on('property:' + skinConsts.AD_VAST_DATA, function(event) {
            processVastData(event.data);
        });
        processVastData(_this.mggPlayer.get(skinConsts.AD_VAST_DATA));

        function processVastData(vastData) {
            if (vastData) {
                _this.visible = false;
                if (vastData.skipTime2 && vastData.skipTime2.length > 0 && vastData.skipTime2[0] > 0) {
                    skipTime = vastData.skipTime2[0];

                    _this.mggPlayer.on('property:ad:vendor:position', onPositionUpdated);
                } else {
                    _this.visible = true;
                }
                _this.update();
            }
        }

        function onPositionUpdated() {
            var position = _this.mggPlayer.get('ad:vendor:position');
            if (position >= skipTime) {
                _this.mggPlayer.off('property:ad:vendor:position', onPositionUpdated);
                _this.visible = true;
                _this.update();
            }
        }

});
