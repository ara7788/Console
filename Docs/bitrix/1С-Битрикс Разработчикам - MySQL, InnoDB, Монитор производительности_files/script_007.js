SocialService = {
	fb: function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	},
	tw: function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0];
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;js.src="//platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}
	},

	vk: function(apiId){
		VK.init({apiId: apiId, onlyWidgets: true});
		VK.Widgets.Like("vk_like", {type: "mini"});
	},
	init: function(){
		SocialService.fb(document, 'script', 'facebook-jssdk');
		SocialService.tw(document,"script","twitter-wjs");
		/*SocialService.vk(2234924);*/
	}
}	

function ShowSwf(sSwfPath, width1, height1)
{
	var scroll = 'no';
	var top=0, left=0;

	if(width1 > screen.width-10 || height1 > screen.height-28)
		scroll = 'yes';

	if(height1 < screen.height-28)
		top = Math.floor((screen.height - height1)/2-14);

	if(width1 < screen.width-10)
		left = Math.floor((screen.width - width1)/2);

	width = Math.min(width1, screen.width-10);  
	height = Math.min(height1, screen.height-28); 

	window.open('/bitrix/tools/swfpg.php?width='+width1+'&height='+height1+'&img='+sSwfPath,'','scrollbars='+scroll+',resizable=yes, width='+width+',height='+height+',left='+left+',top='+top);
}

function ShowVideo(url, w, h)
{
	changesize = false;
	if(w && h)
		changesize = true;
	var w = w||670;
	var h = h||(505 + (BX.browser.IsIE()?5:0));
	
	if(changesize)
	{
		url = url + '&w=' + w + "&h=" + h;
	}

		DVideoWindow = new BX.CDialog({
			content_url: url,
			height: h,
			width: w,
			draggable: true,
			resizable: false
		});
		DVideoWindow.Show();
}

function ShowVideoWide(url)
{
		DVideoWindow = new BX.CDialog({
			content_url: url,
			height: 505 + (BX.browser.IsIE()?5:0),
			width: 881,
			draggable: true,
			resizable: false
		});
		
		DVideoWindow.Show();
}

function ShowImg(sImgPath, width, height)
{
	var scroll = 'no';
	var top=0, left=0;

	if(width > screen.width-10 || height > screen.height-28)
		scroll = 'yes';

	if(height < screen.height-28)
		top = Math.floor((screen.height - height)/2-14);

	if(width < screen.width-10)
		left = Math.floor((screen.width - width)/2);

	width = Math.min(width, screen.width-10); 
	height = Math.min(height, screen.height-28);  
	window.open('/bitrix/tools/imagepg.php?img='+sImgPath,'','scrollbars='+scroll+',resizable=yes,width='+width+',height='+height+',left='+left+',top='+top);
}

function SetPrintCSS(isPrint)
{
	var link;

	if (document.getElementsByTagName)
		link = document.getElementsByTagName('link');
	else if (document.all)
		link = document.all.tags('link');
	else
		return;

	for (var index=0; index < link.length; index++)
	{
		if (link[index].title != 'print')
			continue;

		if (isPrint)
		{
			link[index].disabled = false;
			link[index].rel = "stylesheet";
		}
		else
		{
			link[index].disabled = true;
			link[index].rel = "alternate stylesheet";
		}
	}
}

var jsPublicForms =
{
	SetFieldValue: function(id, value)
	{
		var field = document.getElementById(id);
		if(field)
		{
			field.value = value;
		}
	},
	CheckLicenseKey: function()
	{
		var key = BX('license_key');
		if(!key || key.value.length==0) return;

		var url = '/support/key_info.php?AJAX=Y&license_key='+key.value;
		LicenseKeyWindow = new BX.CDialog({
			content_url: url,
			height: 600,
			width: 800,
			draggable: true,
			resizable: false
		});
		
		LicenseKeyWindow .Show();
	}
}

var jsPublicFilters =
{
	SetCookie: function(Name, Value, ArrName)
	{
		if(ArrName)
			document.cookie = ArrName + "[" + Name + "]=" + Value + "; path=/;";
		else
			document.cookie = Name + "=" + Value + "; path=/;";
	},
	
	ShowHide: function(id, action)
	{
		var filter = document.getElementById(id);
		if(filter)
		{
			if(filter.style.display == "none" || "show" == action)
			{
				filter.style.display = "block";
				jsPublicFilters.SetCookie(id,"on","PublicFilters");
			}
			else
			{
				filter.style.display = "none";
				jsPublicFilters.SetCookie(id,"off","PublicFilters");
			}
		}
	},
	
	GetCookie: function (Name, ArrName) 
	{
		if(ArrName)
			var prefix = ArrName + "[" + Name + "]=";
		else
			var prefix = Name + "=";
		var cookieStartIndex = document.cookie.indexOf(prefix);
		if (cookieStartIndex == -1) 
			return null;
		var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
		if (cookieEndIndex == -1) 
			cookieEndIndex = document.cookie.length;
		return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
	}
}

var jsPublicTabController =
{
	SetTabCookieId: function(TabSec, TabId)
	{
		document.cookie = "BxTabs[" + TabSec + "]=" + TabId + "; path=/;";
	},
	
	SetTabCookieIdUnload: function()
	{
		//no more then 2 tablists
		for(i=0;i<2;i++)
		{
			var tab_ul = document.getElementById('tab-list-id'+i);
			if(tab_ul)
			{
				tab_li = tab_ul.getElementsByTagName('LI');
				for(j=0;j<tab_li.length;j++)
				{
					if(tab_li[j].className == 'active')
					{
						tab_a = tab_li[j].getElementsByTagName('A');
						tab_a[0].onclick();
					}
				}
			}
			else
				break;
		}
	},

	TabToTabAnchor: function(TabId)
	{
		tab = BX(TabId);
		if(tab)
		{
			tab_a = tab.getElementsByTagName('A');
			tab_a[0].onclick();
			SetActiveTab(tab_a[0], true);
		}
	}
}

// window.onbeforeunload = jsPublicTabController.SetTabCookieIdUnload;

//change load window
if (window.jsAjaxUtil)
{
	// show ajax visuality
	jsAjaxUtil.ShowLocalWaitWindow = function (TID, cont, bShadow)
	{
		if (typeof cont == 'string' || typeof cont == 'object' && cont.constructor == String)
			var obContainerNode = document.getElementById(cont);
		else
			var obContainerNode = cont;
		
		if (obContainerNode.getBoundingClientRect)
		{
			var obRect = obContainerNode.getBoundingClientRect();
			var obWndSize = jsAjaxUtil.GetWindowSize();

			var arContainerPos = {
				left: obRect.left + obWndSize.scrollLeft, 
				top: obRect.top + obWndSize.scrollTop, 
				right: obRect.right + obWndSize.scrollLeft, 
				bottom: obRect.bottom + obWndSize.scrollTop
			};
		}
		else
			var arContainerPos = jsAjaxUtil.GetRealPos(obContainerNode);
		
		var container_id = obContainerNode.id;
		
		if (!arContainerPos) return;
		
		if (null == bShadow) bShadow = true;
		
		if (bShadow)
		{
			var obWaitShadow = document.body.appendChild(document.createElement('DIV'));
			obWaitShadow.id = 'waitshadow_' + container_id + '_' + TID;
			obWaitShadow.className = 'waitwindowlocalshadow';
			obWaitShadow.style.top = (arContainerPos.top - 5) + 'px';
			obWaitShadow.style.left = (arContainerPos.left - 5) + 'px';
			obWaitShadow.style.height = (arContainerPos.bottom - arContainerPos.top + 10) + 'px';
			obWaitShadow.style.width = (arContainerPos.right - arContainerPos.left + 10) + 'px';
		}
		
		var obWaitMessage = document.body.appendChild(document.createElement('DIV'));
		obWaitMessage.id = 'wait_' + container_id + '_' + TID;
		obWaitMessage.className = 'waitwindow';
		
		var div_top = arContainerPos.top + 5;
		if (div_top < document.body.scrollTop) div_top = document.body.scrollTop + 5;
		
		obWaitMessage.style.top = div_top + 'px';
		obWaitMessage.style.left = (arContainerPos.left + 5) + 'px';
		obWaitMessage.innerHTML = 'Çàãðóçêà...';
		
		if(jsAjaxUtil.IsIE())
		{
			var frame = document.createElement("IFRAME");
			frame.src = "javascript:''";
			frame.id = 'waitframe_' + container_id + '_' + TID;
			frame.className = "waitwindow";
			frame.style.width = obWaitMessage.offsetWidth + "px";
			frame.style.height = obWaitMessage.offsetHeight + "px";
			frame.style.left = obWaitMessage.style.left;
			frame.style.top = obWaitMessage.style.top;
			document.body.appendChild(frame);
		}
		
		function __Close(e)
		{
			if (!e) e = window.event
			if (!e) return;
			if (e.keyCode == 27)
			{
				jsAjaxUtil.CloseLocalWaitWindow(TID, cont);
				jsEvent.removeEvent(document, 'keypress', __Close);
			}
		}
		
		jsEvent.addEvent(document, 'keypress', __Close);
	}
}



if (document.location.hash == '#print')
	SetPrintCSS(true); 

if (document.location.hash.indexOf("#tab-") != -1)
{
		var selectedTabRaw = document.location.hash.substr(5,document.location.hash.length);
		var SubAnchor = false;
		var selectedTabID = false;
		if(selectedTabRaw.indexOf("!") != -1) //Extra Anchor
		{
			SubAnchor = selectedTabRaw.substr(selectedTabRaw.indexOf("!")+1);
			selectedTabID = selectedTabRaw.substr(0, selectedTabRaw.indexOf("!")-5);
		}
		else
			selectedTabID = selectedTabRaw.substr(0, selectedTabRaw.length-5);
			
	//var selectedTabID = document.location.hash.substr(5,document.location.hash.length-10);
	window.onload = function() 
	{
		var tab = document.getElementById("tab-" + selectedTabID);

		if (tab && tab.childNodes[0])
			SetActiveTab(tab.childNodes[0], true);
					
		if(SubAnchor)
			window.location = String(window.location).replace(/\#.*$/, "") + "#" + SubAnchor;
		else
			window.location = String(window.location).replace(/\#.*$/, "") + "#tab-" + selectedTabRaw;
	};
}



/* banner - KP tmp */
function CPublicRotateBanner(items, params)
{
	this.Inited = false;
	this.ItemList = items;	

	this.AutoRotation = params.autorotate ? true : false;
	this.CurrentBunner = (params.current && this.ItemList.length >= params.current) ? params.current : 1;

	this.ActiveObj = params.aObj ? document.getElementById(params.aObj) : null;
	this.ListObj = params.lObj ? document.getElementById(params.lObj) : null;
	this.RotateTime = params.rTime ? params.rTime : 1000;
	
	if(this.ItemList.length>0 && this.ActiveObj && this.ListObj)
		this.Inited = true;

	this.ChangeBanner(this.CurrentBunner);
}

CPublicRotateBanner.prototype.ChangeBanner = function(id, handle)
{	
	if(!id || id<=0 || id>this.ItemList.length || !this.Inited)
		return;
		
	if(handle===true)
		this.AutoRotation = false;

	ExCurrent = this.CurrentBunner;
	this.CurrentBunner = id;
	
	Citem = this.ItemList[id-1];
	if(Citem)
	{
		imgs = this.ActiveObj.getElementsByTagName('IMG');
		btns = this.ListObj.getElementsByTagName('LI');

		if(imgs && btns[id-1])
		{
			imgs[0].src = Citem.image;
			this.ActiveObj.href = Citem.link;
			
			btns[ExCurrent-1].className = "";
			btns[this.CurrentBunner-1].className = "item-selected";
			
			if(Citem.functions)
			{
				for(i = 0; i<Citem.functions.length; i++)
				{
					if(Citem.functions[i].func && Citem.functions[i].arg && typeof(Citem.functions[i].func) == 'function')
						Citem.functions[i].func.apply(null, Citem.functions[i].arg);
				}
			}
		}
	}
}

CPublicRotateBanner.prototype.Rotation = function(start)
{
	if(!this.Inited || !this.AutoRotation)
		return;
	
	if(!start)
		this.ChangeBanner((this.CurrentBunner + 1) > this.ItemList.length ? 1 : (this.CurrentBunner + 1));
	
	_this = this;
	setTimeout(function(){_this.Rotation()}, this.RotateTime);
}

CPublicRotateBanner.prototype.PreLoad = function(skip)
{
	for (var imageIndex = 0; imageIndex < this.ItemList.length; imageIndex++)
	{
		if(skip!=imageIndex)
		{
			var imageObj = new Image();
			imageObj.src = this.ItemList[imageIndex].image;
		}
	}	
}


/* redesign 1/03/2011 */
function ShowHide(obj)
{
	obj.style.display = obj.style.display=='block'?'none':'block';
}

/* animation for social buttons */
BX.ready(function(){
	var SocialPrefix = 'bx-social-';
	var arSocial = ['facebook','twitter','habrahabr','vkontakte','developers','google'];
	for(i=0,n=arSocial.length;i<n;i++)
	{
		var Item = BX(SocialPrefix + arSocial[i]);
	if(Item)
	{
		var Image = Item.src;
		var ImagePath = Image.substr(0, Image.length-4);
		if(Item)
		{
			BX.bind(Item, "mouseover", function(Item, ImagePath){
				return function()
				{
					Item.src = ImagePath + '-jump.png';
				}
			}(Item, ImagePath));
			BX.bind(Item, "mouseout", function(Item, ImagePath){
				return function()
				{
					Item.src = ImagePath + '.png';
				}
			}(Item, ImagePath));
		}
	}
	}
});

function systemAuthFormComponent_openBlock()
{
	var loginForm = BX('hd_loginform_container');
	if (loginForm.style.display == 'block')
		BX.hide(loginForm);
	else
	{
		BX.show(loginForm);

		BX.focus(BX('USER_LOGIN_INPUT'));

		BX.bind(document, 'keyup', function(e){
			if (loginForm.style.display == 'block')
			{
				e=e||window.event;
				switch(e.keyCode)
				{
					case 27: systemAuthFormComponent_closeBlock();
						break;
				}
			}
		})
	}

	return false;
}

function systemAuthFormComponent_closeBlock()
{
	BX.hide(BX('hd_loginform_container'));
}

function systemAuthFormComponent_logout()
{
	BX('auth-logout-form').submit();
	return false;
}

BX.foreach = function(nodes,callback)
{
	if(BX.type.isElementNode(nodes))
		callback(nodes);
	if(BX.type.isArray(nodes))
		for(key in nodes)
			callback(nodes[key]);
}

BX.getElementsByClass = function(searchClass, node, tag)
{
	var classElements = new Array();
	if (node == null) node = document;
	if (tag == null) tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
 
	for (i = 0,  j = 0;  i < elsLen;  i++)
	{
		if (pattern.test(els[i].className))
		{
			classElements[j] = els[i];
			j++;
		}
	}
 
	return classElements;
}

TopMenuComponent = {
	init: function(){
		/*
		BX.foreach( BX.findChildren(BX('gn_general_nav'),{tag:'ul'}), function(ul){
			lis = BX.findChild(ul,{tag:'li'},false,true);
			var LastSumm = 0; 
			for(key in lis)
			{
				LastSumm = LastSumm + lis[key].offsetWidth;
				if(key > 0)
					LastSumm -= 20;
			}

			FreeSpace = BX('gn_general_nav').offsetWidth - LastSumm; 
			kp=(FreeSpace/(lis.length-1))/2;
			for(var i = 1; i < lis.length; i++) 
			{
				BX.foreach(BX.findChildren(lis[i],{tagName:'a'},false),function(el){
					//el.style.padding = '19px '+kp+'px'; 
					TopMenuComponent.ready(el,0,kp);
				});
			}
		});
		*/
		BX.foreach(BX.findChild(BX('tn_top_nav_cn'),{tagName:'li',className:'more'},false),function(el){
			TopMenuComponent.click(el);
		});

		BX.foreach(BX.findChild(BX('tn_top_lg'),{tagName:'li',className:'more'},false),function(el){
			TopMenuComponent.click(el);
		});

		BX.bind(document,'click',function(e){ TopMenuComponent.closeul(null); });
	},

	click : function(el){
		BX.foreach(BX.findChild(el,{tagName:'a'},false),function(ela){
			BX.bind(ela,'click',function(e){ TopMenuComponent.openul(el); BX.PreventDefault(e); });
		});
	},

	ready : function(el,start,finish,callback){
		(new BX.easing({
			duration : 250,
			start : { padding : start},
			finish : { padding: finish*1000},
			step : function(state){
				el.style.padding = '19px '+state.padding/1000 +'px';
			},
			complete : function(){
				if(BX.type.isFunction(callback))
					callback(el);
			}
		})).animate();
	},

	opacity : function(el,start,finish,callback){
		(new BX.easing({
			duration : 200,
			start : { opacity : start},
			finish : { opacity: finish},
			step : function(state){
				el.style.opacity = state.opacity / 100;
			},
			complete : function(){
				if(BX.type.isFunction(callback))
					callback(el);
			}
		})).animate();
	},

	openul : function(el){
		BX.foreach(BX.findChild(el,{tag:'ul'},false),function(elt){
			if(elt.style.display != 'block')
			{
				elt.style.opacity = 0;
				elt.style.display = 'block';
				TopMenuComponent.opacity(elt,0,100);
				BX.addClass(elt,'OpenUL');
			}
			else
			{
				TopMenuComponent.closeul(el);			
			}
		});
	},

	closeul : function(el){
		setTimeout(function() {
			BX.foreach(BX.getElementsByClass('OpenUL',el),function(el){
				TopMenuComponent.opacity(el,100,0,function(el){
					el.style.display = 'none';
				});
				BX.removeClass(el,'OpenUL');
			});
		}, 10);

	}
}
//TopMenuComponent.init();
BX.ready(TopMenuComponent.init);
 
GeneralMenuComponent = {
	t: false,

	handler: function(el)
	{
		if(!!el.bxover)
			GeneralMenuComponent.mouseover(el);
		else
			GeneralMenuComponent.mouseout(el);
	},

	init : function(){
		setTimeout(function(){
			BX.foreach(BX.findChildren(BX('ul_gn_general_nav'),{tagName:'li'},false),function(el){
				BX.bind(el,'mouseover', function(e){ 
					el.bxover = true;
					if(!!GeneralMenuComponent.t)
						clearTimeout(GeneralMenuComponent.t);
					t = setTimeout(function(){GeneralMenuComponent.handler(el)}, 50);
				});

				BX.bind(el,'mouseout', function(e){ 
					el.bxover = false;
					if(!!GeneralMenuComponent.t)
						clearTimeout(GeneralMenuComponent.t);
					t = setTimeout(function(){GeneralMenuComponent.handler(el)}, 50);
				});
			});
		},500);
	},

	mouseover:function(li){
		BX.foreach(BX.findChild(li,{tagName:'ul'},false),function(ul){
			if(ul.act != 'over')
			{
				ul.act = 'over';
				ul.style.overflow = 'hidden';
				ul.style.height = 0;
				ul.style.display = 'block';
				   (new BX.easing({
					duration : 150,
					start : { opacity : 0, height : 0},
					finish : { opacity: 100, height : ul.scrollHeight},
					transition : BX.easing.makeEaseOut(BX.easing.transitions.quart),
					step : function(state){
						if(ul.act == 'over')
						{
							ul.style.height = state.height + "px";
							ul.style.opacity = state.opacity / 100;
						}
					},
					complete : function()
					{
						if(ul.act == 'over')
						{
							ul.style.overflow = 'visible';
						}	
					}
				})).animate();
			}
		});
	},

	mouseout: function(li){
		BX.foreach(BX.findChild(li,{tagName:'ul'},false),function(ul){
			if(ul.act != 'out')
			{
				ul.act = 'out';
				ul.style.height = ul.scrollHeight;
				ul.style.overflow = 'hidden';
				(new BX.easing({
					duration : 150,
					start : { opacity: 100, height : ul.scrollHeight},
					finish : { opacity : 0, height : 0},
					transition : BX.easing.makeEaseOut(BX.easing.transitions.quart),
					step : function(state){
						if(ul.act == 'out')
						{
							ul.style.height = state.height + "px";
							ul.style.opacity = state.opacity / 100;
						}
					},
					complete : function()
					{
						if(ul.act == 'out')
						{
							ul.style.display = 'none';
							ul.style.overflow = 'visible';
						}	
					}
				})).animate();
			}
		});
	}
}
BX.ready(GeneralMenuComponent.init);

function showLeftMenuSubItems(el)
{
	var menu = el.parentNode.parentNode;
	var subMenu = BX.findChild(el.parentNode.parentNode, {tagName: 'ul'}, false);

	if(menu)
	{
		if(BX.hasClass(menu, 'close'))
		{
			BX.addClass(menu, 'open');
			BX.removeClass(menu, 'close');

			subMenu.style.height = 0;

			subMenu.style.display = 'block';
			(new BX.easing({
				duration : 200,
				start : { opacity : 0, height : 0},
				finish : { opacity: 100, height : subMenu.scrollHeight},
				transition : BX.easing.makeEaseOut(BX.easing.transitions.quart),
				step : function(state){
					subMenu.style.height = state.height + "px";
					subMenu.style.opacity = state.opacity / 100;
				},
				complete : function()
				{
					subMenu.style.height = 'auto';
				}
			})).animate();
		}
		else
		{
			BX.removeClass(menu, 'open');
			BX.addClass(menu, 'close');

			subMenu.style.display = 'block';
			   (new BX.easing({
				duration : 200,
				start : { opacity : 100, height : subMenu.scrollHeight},
				finish : { opacity: 0, height : 0},
				transition : BX.easing.makeEaseOut(BX.easing.transitions.quart),
				step : function(state){
					subMenu.style.height = state.height + "px";
					subMenu.style.opacity = state.opacity / 100;
				}
			})).animate();

		}
	}
}

window.BXSite = function(node, bCache)
{
	return null;
}

BXSite.Fix = function(el, params)
{
	if (!el.BXFIXER)
		el.BXFIXER = new BXSite.CFixer(el, params);

	el.BXFIXER.Start()
}

BXSite.UnFix = function(el)
{
	if (!!el && !!el.BXFIXER)
		el.BXFIXER.Stop()
}

BXSite.CFixer = function(node, params)
{
	this.node = node;
	this.params = params || {type: 'top'};

	this.pos = {};
	this.limit = -1;

	this.position_top = null;
	this.position_bottom = null;
	this.position_right = null;

	this.bStarted = false;
	this.bFixed = false;

	this.gutter = null;
}

BXSite.CFixer.prototype.Start = function()
{
	if (this.bStarted)
		return;

	this.pos = BX.pos(this.node);

	BX.bind(window, 'scroll', BX.proxy(this._scroll_listener, this));
	BX.bind(window, 'resize', BX.proxy(this._scroll_listener, this));
	BX.bind(window, 'resize', BX.proxy(this._recalc_pos, this));

	this._scroll_listener();

	this.bStarted = true;
}

BXSite.CFixer.prototype.Stop = function()
{
	if (!this.bStarted)
		return;

	this._UnFix();

	BX.unbind(window, 'scroll', BX.proxy(this._scroll_listener, this));
	BX.unbind(window, 'resize', BX.proxy(this._scroll_listener, this));
	BX.unbind(window, 'resize', BX.proxy(this._recalc_pos, this));

	this.bStarted = false;
}

BXSite.CFixer.prototype._recalc_pos = function()
{
	this.pos = BX.pos(this.gutter || this.node);
	var node_pos = BX.pos(this.node);

	if (this.bFixed)
	{
		if (this.params.type == 'top' || this.params.type == 'bottom')
		{
			if(this.params.paddingWidth > 0)
				this.pos.width -= this.params.paddingWidth;

			this.node.style.width = this.pos.width + 'px';
		}
	}

	this._scroll_listener();
}

BXSite.CFixer.prototype._Fix = function()
{
	if (!this.bFixed)
	{
		this.pos = BX.pos(this.gutter || this.node);

		if (!this.gutter)
			this.gutter = this.node.parentNode.insertBefore(BX.create(
				this.node.tagName, {
					//style: {height: this.pos.height + 'px', width: this.pos.width + 'px'},
					style: {display: 'block', height: this.pos.height + 'px'},
					props: {className: this.node.className}
				}), this.node);

		if(this.params.paddingWidth > 0)
			this.pos.width -= this.params.paddingWidth;

		this._w = this.node.style.width;
		this.node.style.width = this.pos.width + 'px';

		BX.addClass(this.node, 'bxsite-fixed-' + this.params.type);

		if (this['position_' + this.params.type] !== null)
			this.node.style[this.params.type] = this['position_' + this.params.type] + 'px';

		this.bFixed = true;
	}
}

BXSite.CFixer.prototype._UnFix = function(bRefix)
{
	if (this.bFixed)
	{
		this.node.style.width = this._w
		BX.removeClass(this.node, 'bxsite-fixed-' + this.params.type);

		this.node.style[this.params.type] = null;

		this.bFixed = false;

		if (!bRefix)
		{
			if (this.gutter && this.gutter.parentNode)
				this.gutter.parentNode.removeChild(this.gutter);

			this.gutter = null;

			this._check_scroll(this.pos.left, this.pos.top);
		}
	}
}

BXSite.CFixer.prototype._ReFix = function()
{
	if (this.bFixed)
	{
		this._UnFix(true); BX.defer(this._Fix, this)();
	}
}

BXSite.CFixer.prototype._scroll_listener = function()
{
	var wndScroll = BX.GetWindowScrollPos(), bFixed = this.bFixed;

	if (!BX.isNodeInDom(this.node))
		return this.Stop();

	var pos = bFixed ? this.pos : BX.pos(this.node);

	if (this.params.limit_node)
	{
		var pos1 = BX.pos(this.params.limit_node);

		switch(this.params.type)
		{
			case 'top':
				this.limit = pos1.bottom - this.pos.height;
			break;
			case 'bottom':
				this.limit = pos1.top + this.pos.height;
			break;
			case 'right':
				this.limit = pos1.right + this.node.offsetWidth;
			break;
		}
	}

	if (!BX.isNodeHidden(this.node))
	{
		switch(this.params.type)
		{
			case 'top':
				this.position_top = 0;

				if (this.limit > 0 && wndScroll.scrollTop + this.position_top > this.limit)
					this._UnFix();
				else if (!this.bFixed && wndScroll.scrollTop + this.position_top >= pos.top)
					this._Fix();
				else if (this.bFixed && wndScroll.scrollTop + this.position_top < pos.top)
					this._UnFix();

			break;
			case 'bottom':
				var wndSize = BX.GetWindowInnerSize();

				wndScroll.scrollBottom = wndScroll.scrollTop + wndSize.innerHeight;

				if (this.limit > 0 && wndScroll.scrollBottom < this.limit)
					this._UnFix();
				else if (!this.bFixed && wndScroll.scrollBottom < pos.bottom)
					this._Fix();
				else if (this.bFixed && wndScroll.scrollBottom >= pos.bottom)
					this._UnFix();
			break;
			case 'right':
				var wndSize = BX.GetWindowInnerSize();

				// 15 is a browser scrollbar fix
				wndScroll.scrollRight = wndScroll.scrollLeft + wndSize.innerWidth - 15;

				if (this.limit > 0 && wndScroll.scrollRight < this.limit)
					this._UnFix();
				else if (!this.bFixed && wndScroll.scrollRight < pos.right)
					this._Fix();
				else if (this.bFixed && wndScroll.scrollRight >= pos.right)
					this._UnFix();

			break;
		}
	}
	else if (this.bFixed)
	{
		this._UnFix();
	}

	if (this.bFixed)
	{
		this._check_scroll(wndScroll.scrollLeft, wndScroll.scrollTop);
	}
	else
	{
		this._check_scroll(this.pos.left, this.pos.top);
	}

	if (bFixed != this.bFixed)
	{
		BX.onCustomEvent(this.node, 'onFixedNodeChangeState', [this.bFixed]);
	}
}

BXSite.CFixer.prototype._check_scroll = function(scrollLeft, scrollTop)
{
	if (this.params.type == 'top' || this.params.type == 'bottom')
		this.node.style.left = (this.pos.left - scrollLeft) + 'px';
	else
		this.node.style.top = (this.pos.top - scrollTop) + 'px'

	if (this.bFixed && this['position_' + this.params.type] !== null)
	{
		this.node.style[this.params.type] = this['position_' + this.params.type] + 'px';
	}
}

BX.ready(function(){
	var tabs = BX('tab-list-id0');
	if(tabs)
		BXSite.Fix(tabs, {paddingWidth : '25', type: 'top', limit_node: BX.nextSibling(tabs)});
});

function SetActiveTab(tab, bNoanimate)
{
	var listElement = tab.parentNode.parentNode;

	BX.foreach(BX.findChildren(listElement,{tag:'li'}), function(arTab){
		//Hide
		arTab.className = "";
		var tabBody = BX(arTab.id + "-body");
		if (tabBody)
			BX.hide(tabBody);
	});

	//Show
	var tabBody = BX(tab.parentNode.id + "-body");
	if (tabBody)
	{
		tab.parentNode.className = "active";
		tab.blur();
		BX.show(tabBody);

		if(!bNoanimate)
		{
			tabsBlock = BX('tab-list-id0');
			if (BX.hasClass(tabsBlock, 'bxsite-fixed-top'))
			{
				var pos = BX.pos(tab.parentNode.parentNode.parentNode), wndScroll = BX.GetWindowScrollPos();
				
				window.scrollTo(wndScroll.scrollLeft, pos.top - tabsBlock.offsetHeight - parseInt(tabsBlock.style.top));
			}
			// setTimeout(function(){}, 10);
resizeWorkArea(true);
			var easing = new BX.easing({
				duration : 500,
				start : { opacity : 0 },
				finish : { opacity : 100 },
				transition : BX.easing.makeEaseOut(BX.easing.transitions.quart),
				step : function(state){
					tabBody.style.opacity = state.opacity / 100;
				},
				complete : function(){
					tabBody.style.height = "auto";
					tabBody.style.overflowY = "visible";
					
						
				}
			});
			easing.animate();

		}
	}
}

function resizeWorkArea(bafterTab)
{
	var page = BX('bx-all-page-content');
	var sidebar = BX.findChild(page, {'className':'sidebar'}, true, false);
	var workarea = BX.findChild(page, {'className':'workarea'}, true, false);

	if(workarea && sidebar && sidebar.clientHeight >= workarea.clientHeight)
	{
		var breadcrumbs = 0;
		var banners = 0;

		var el = BX.findChild(page, {'className':'breadcrumbs'}, true, false);
		if(el)
			breadcrumbs = el.clientHeight+15;	

		var el = BX.findChild(page, {'className':'wa_banners'}, true, false);
		if(el)
			banners = el.clientHeight+60;

		var el = BX.findChild(page, {'className':'wa_page'}, true, false);
		if(el)
			el.style.minHeight = (sidebar.clientHeight - banners - breadcrumbs - 66 - 25) + 'px';
	}
	else
	{
		if(bafterTab)
		{
			var el = BX.findChild(page, {'className':'wa_page'}, true, false);

			if(!isNaN(parseInt(el.style.minHeight)) && workarea.clientHeight > parseInt(el.style.minHeight))
				el.style.minHeight = '';
		}
	}
}

BX.ready(function(){
	resizeWorkArea();
	/*BX.viewImageBind(
		'page-post',
		false,
		{tag:'IMG', attr: 'data-bx-image'}
	);
	*/
});

var aditCSS = '';
if(BX.browser.IsIOS())
{
	aditCSS = 'ios';
}
else if(BX.browser.IsAndroid())
{
	aditCSS = 'andr';
}
else if(/MSIE 6/.test(navigator.userAgent) || /MSIE 6/.test(navigator.userAgent) || /MSIE 8/.test(navigator.userAgent))
{
	aditCSS = 'ie7';
}
else if(/MSIE 9/.test(navigator.userAgent))
{
	aditCSS = 'ie9';
}
else if(/Opera/.test(navigator.userAgent))
{
	aditCSS = 'op';
}

if(aditCSS.length > 0)
{
	BX.loadCSS('/bitrix/templates/1c-bitrix-new/css/styles_'+aditCSS+'.css');
}