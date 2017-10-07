function moveGenPhoto() {
	var bg1 = document.getElementsByClassName('bg1')[0];
	if (bg1) { bg1.className += ' bg1-move'; }
}

function setCursorMarker(el) {
	clearCursorMarker();
	var selection = document.createRange(),
		ranged = window.getSelection(),
		posSearchAdd = 0,
		p = el.getElementsByTagName('p');
	el.setAttribute('data-markered',true);
	if (p.length < 2) {
		selection.selectNode(p[0]);
		if (p[0].innerHTML.indexOf('#') == 0) { posSearchAdd = 2; }
		if (p[0].innerHTML.indexOf('$') == 0) { posSearchAdd = 2; }
		if (p[0].innerHTML.indexOf('&gt;') == 0) { posSearchAdd = 2; }
		if (p[0].innerHTML.indexOf('mysql&gt;') == 0) { posSearchAdd = 7; }
		if (p[0].innerHTML.indexOf('(parted)') == 0) { posSearchAdd = 9; }
		if (p[0].innerHTML.indexOf('MariaDB [(none)]&gt;') == 0) { posSearchAdd = 18; }
		if (p[0].innerHTML.indexOf('=# ') == 0) { posSearchAdd = 3; }
		if (p[0].innerHTML.indexOf('=#&nbsp;') == 0) { posSearchAdd = 3; }
		if (p[0].innerHTML.indexOf('database1=# ') == 0) { posSearchAdd = 12; }
		if (p[0].innerHTML.indexOf('database1=#&nbsp;') == 0) { posSearchAdd = 12; }
		
		selection.setStart(p[0].firstChild, (0+posSearchAdd));
		ranged.removeAllRanges();   
		ranged.addRange(selection);
	}
}

function setMarkerOnly(el, e, posX) {
	posXDiff = Math.abs((e.clientX - posX));
	if (posXDiff > 9) {
		clearCursorMarker();
		el.setAttribute('data-markered',true);
	}
}

function clearCursorMarker() {
	var consoleEls = document.getElementsByClassName('console');
	for (var i=0; i < consoleEls.length; i++) {
		consoleEls[i].removeAttribute('data-markered');
	}
}

function swithCecutientMode() {
	var textCecutient = document.getElementsByClassName('text-cecutient')[0],
		url = 'ajax/set_session_cecutient.php?' + new Date().getTime(),
		req = createRequest();
	if (!textCecutient) {
		document.body.className += !document.body.className ? 'text-cecutient' : ' text-cecutient';
	} else {
		document.body.className = document.body.className.replace('text-cecutient', '').trim();
	}
	req.open("GET", url, true); req.send(null);
}

function setFilterSearch(el, db) {
	var searchTag = document.getElementsByClassName('search-tag')[0].getElementsByTagName('a'),
		searchResultBlock = document.getElementsByClassName('filter-search');
	for (var i=0; i < searchTag.length; i++) {
		searchTag[i].className = '';
	}
	for (var i=0; i < searchResultBlock.length; i++) {
		searchResultBlock[i].style.display = db ? 'none' : '';
		searchResultBlock[i].className = searchResultBlock[i].className.replace(' search-result-block-filtered','');
	}
	if (db) {
		var visibleBlock = document.getElementById(db);
		visibleBlock.parentNode.style.display = '';
		visibleBlock.parentNode.className += ' search-result-block-filtered';
		visibleBlock.style.display = '';
	}
	el.className = 'search-tag-active';
}

function showHideDiv(name) {
	if (document.getElementById(name).style.display == 'block') {
		document.getElementById(name).style.display='none';
	} else  {
		document.getElementById(name).style.display='block';
	}
}

function openSearchForm() {
	var searchTag = document.getElementsByTagName('nav')[0].getElementsByClassName('form-search')[0],
		navTag = document.getElementsByTagName('nav')[0],
		menuMiniActive = document.getElementsByClassName('menu-mini-active')[0],
		menuSearch = document.getElementsByClassName('menu-search')[0],
		lupa = '';
	if (!searchTag) {
		test(navigator.userAgent);
		if (navigator.userAgent.indexOf ('Windows NT 10')!= -1) {
			lupa = '&#128269; ';
		}
		searchDiv = document.createElement('div');
		searchDiv.className = 'form-search form-search-start';
		searchDiv.innerHTML = '<form method="GET" action="/search.php"><input type="text" name="word" placeholder="'+lupa+'Поиск по сайту" required></form>';
		navTag.appendChild(searchDiv);
		if (menuMiniActive) {
			menuMiniActive.click();
		}
		setTimeout( function() {
			searchDiv.className = 'form-search';
			searchDiv.getElementsByTagName('input')[0].focus();
			menuSearch.className = 'menu menu-search menu-search-active';
		}, 10);
	} else {
		searchTag.className = 'form-search form-search-start';
		setTimeout( function() {
			navTag.removeChild(searchTag);
			menuSearch.className = 'menu menu-search';
		}, 100);
	}
}

function showHideWithPlus(name) {
	var marker = document.getElementById("marker_"+name);
	if (document.getElementById(name).style.display == 'block') {
		marker.innerHTML = "<img src='img/public/marker_right.jpg'>";
		document.getElementById(name).style.display='none';
	} else  {
		marker.innerHTML = "<img src='img/public/marker_bottom.jpg'>";
		document.getElementById(name).style.display='block';
	}
}

var globalTopped = 0;
function moveUp() {
	var top = (document && document.scrollTop  || document.body && document.body.scrollTop  || document.body && document.documentElement.scrollTop || 0),
		menuUp = document.getElementsByClassName('menu-up')[0],
		menuUpA = menuUp.getElementsByTagName('a')[0];
	if (!globalTopped) {
		menuUp.className += ' menu-up-back';
		menuUpA.innerHTML = 'Обратно';
		getScrollTop(top);
	} else {
		getScrollBack(globalTopped);
	}
}

function clearUpMenu() {
	var menuUp = document.getElementsByClassName('menu-up')[0],
		menuUpA = menuUp.getElementsByTagName('a')[0];
	menuUp.className = menuUp.className.replace(' menu-up-back','');
	menuUpA.innerHTML = 'Наверх';
	globalTopped = 0;
	setTimeout( function() {
		window.removeEventListener('scroll',clearUpMenu);
	},50 );
}

function getScrollTop(top) {
	window.scrollTo(0, 0);
	globalTopped = top;
	setTimeout( function() {
		window.addEventListener('scroll',clearUpMenu);
	},50 );
}

function getScrollBack(back) {
	window.scrollTo(0, back);
	clearUpMenu();
}

function fixedNav() {
	var top = (document && document.scrollTop  || document.body && document.body.scrollTop  || document.body && document.documentElement.scrollTop || 0),
		nav = document.getElementsByTagName('nav')[0];
	if (top > 500) {
		if (nav.className != 'nav-fixed' && nav.className != 'nav-fixed nav-fixed-top') {
			nav.className = 'nav-fixed';
			document.body.className += ' nav-fixed-body'; document.body.className = document.body.className.trim();
			setTimeout(function() { nav.className = 'nav-fixed nav-fixed-top'; }, 100);
		}
	} else {
		if (nav.className != '') {
			nav.className = 'nav-fixed';
			setTimeout(function() {
				nav.className = '';
				document.body.className = document.body.className.replace('nav-fixed-body','').trim();
			}, 100);
		}
	}	
}

function commentsOffOn(el) {
	var articleTextChildNodes = document.getElementsByClassName('article-text')[0].childNodes,
		swichBut = el.parentNode,
		styleDisplay = el.checked ? 'none' : '';
	swichBut.className = swichBut.className == 'checkbox-switch' ? 'checkbox-switch checkbox-switch-switched' : 'checkbox-switch';
	for (var i=0; i < articleTextChildNodes.length; i++) {
		if (articleTextChildNodes[i].tagName) {
			artClassName = articleTextChildNodes[i].className;
			artTagName = articleTextChildNodes[i].tagName;
			if (artTagName != 'H1' && artTagName != 'H2' && artTagName != 'H3' && artTagName != 'H4' && artTagName != 'LABEL' && artClassName != 'console' && artClassName != 'editor' && artClassName != 'article-post article-post-inst' && artClassName != 'checkbox-switch-after') {
				articleTextChildNodes[i].style.display = styleDisplay;
			}
		}
	}
}

function progressInEl(el) {
	el.innerHTML = '<img src="/img/other/progress.gif">';
}
function progressInId(id) {
	document.getElementById(id).innerHTML = '<img src="/img/other/progress.gif">';
}
function progressInIdStop(id) {
	document.getElementById(id).innerHTML = '';
}

function test(ms) {
	message = ms ? ms : 'test ok';
	console.log(message);
}

var request = null;
function createRequest() {
	try {
		request = new XMLHttpRequest();
	} catch (trymicrosoft) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (othermicrosoft) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (failed) {
				request = null;
			}
		}
	}
	if (request == null) {
		alert("Error creating request object!");
	} else {
		return request;
	}
}

var commentsOff = document.getElementsByClassName('checkbox-switch')[0];
if (commentsOff) {
	var commentsOffCheckbox = commentsOff.getElementsByTagName('input')[0];
	commentsOffCheckbox.onclick = function() { commentsOffOn(this); }
}

function showHidePosition(el, positionId, val) {
	var position = document.getElementsByClassName(positionId)[0],
		menuSearch = document.getElementsByClassName('menu-search')[0],
		menuSearchActive = document.getElementsByClassName('menu-search-active')[0];
	if (position.style.display == 'none' || !position.style.display) {
		position.style.display = val;
		if (menuSearchActive) { menuSearch.click(); }
		el.className = 'menu-mini menu-mini-active';
	} else {
		position.style.display = "";
		el.className = 'menu-mini';
	}
}

var menuMini = document.getElementsByClassName('menu-mini')[0];
menuMini.onclick = function() { showHidePosition(this, 'main-menu', 'block'); }

var menuSearch = document.getElementsByClassName('menu-search')[0];
if (menuSearch) { menuSearch.onclick = function() { openSearchForm(); return false; } }

var menuCecutient = document.getElementsByClassName('menu-cecutient')[0];
if (menuCecutient) { menuCecutient.onclick = function() { swithCecutientMode(); return false; } }

document.onscroll = function() { fixedNav(); }
fixedNav();

var consoleEls = document.getElementsByClassName('console');
if (consoleEls) {
	for (var i=0; i < consoleEls.length; i++) {
		consoleEls[i].onclick = function() {
			if (!this.getAttribute('data-markered')) { setCursorMarker(this); }
		}
		consoleEls[i].onmousedown = function(event) {
			posX = event.clientX;
			this.onmousemove = function(event) { setMarkerOnly(this, event, posX); }
		}
		consoleEls[i].onmouseup = function() {
			this.onmousemove = function() { return false; }
		}
	}
}

window.addEventListener("load", moveGenPhoto, false);