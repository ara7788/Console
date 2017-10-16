window.onload=function()
{if(!(window.location.host=='localhost'||window.location.host.indexOf('pro-ldap')!=-1))return;var ie=navigator.userAgent.indexOf("MSIE")!==-1?navigator.userAgent.replace(/^.+?MSIE\s+(\d+).*$/,"$1"):null;var b=document.body;var sm=(document.compatMode=='CSS1Compat'&&!window.opera?document.documentElement.clientWidth:document.body.clientWidth)<1100?1:null;var docTitle=document.title;document.title="Pro-LDAP.ru - "+docTitle;e=document.createElement('a');e.name='__top';b.insertBefore(e,b.firstChild);var i=0,h,t,mItems=new Array();var tags=document.all?document.all:document.getElementsByTagName('*');for(t in tags)
{var tn=tags[t].tagName;if(tn=='HEAD')h=tags[t];if(tn=='H1')docTitle=tags[t].innerHTML.replace(/<[^>]+?>/g,"");if(tn=='H2')mItems.push(tags[t]);}
b.style.marginTop='30px';var e=document.createElement('link');e.rel='stylesheet';e.type='text/css';e.href='/pro-ldap-menu2'+((ie&&ie<7)?'-ie6':'')+'.css';h.appendChild(e);var tpm='';if(!(ie&&ie<7))
{tpm='<dl class="m-gr-drop1">';tpm+='<dd><p>Содержание</p>';for(i=0;i<mItems.length;i++)
{e=document.createElement('a');e.name='__h'+i;mItems[i].parentNode.insertBefore(e,mItems[i]);tpm+='<a href="#__h'+i+'">'+mItems[i].innerHTML.replace(/<[^>]+?>/g,"")+'</a>';}
tpm+='<dt>'+docTitle+'</dt></dl>';}
e=document.createElement('div');e.id='top-panel';e.innerHTML='<a href="/index.html" id="top-logo">Pro-LDAP.ru</a>'+'<div id="top-search"><div class="ya-site-form ya-site-form_inited_no" onclick=\'return {"bg": "transparent", "target": "_self", "language": "ru", "suggest": false, "tld": "ru", "site_suggest": false, "action": "http://pro-ldap.ru/searchresults.html", "webopt": false, "fontsize": 12, "arrow": false, "fg": "#000000", "searchid": "1950031", "logo": "rb", "websearch": false, "type": 3}\'><form action="http://yandex.ru/sitesearch" method="get" target="_self"><input type="hidden" name="searchid" value="1950031" /><input type="hidden" name="l10n" value="ru" /><input type="hidden" name="reqenc" value="" /><input type="text" name="text" value="" /><input type="submit" value="Найти" /></form></div></div>'+
((ie&&ie<7)?'<div id="top-menu"><table><tr><td><a href="#__top">Эта страница</a></td><td class="m-sp"><div/></td><td><a href="/tr/admin24/">'+(sm?'OLAG':'OpenLDAP 2.4 Руководство')+'</a></td><td class="m-sp"><div/></td><td><a href="/tr/zytrax/">'+(sm?'LFRS':'LDAP для учёных-ракетчиков')+'</a></td><td class="m-sp"><div/></td><td><a href="/sources/">Ресурсы</a></td><td class="m-sp"><div/></td><td class="m-gr"><a href="/sources/">Форум</a></td><td class="m-sp"><div/></td><td><a href="/">Главная</a></td></tr></table></div>':'<div id="top-menu"><table><tr><td class="m-gr"><a href="#__top" class="m-gr-top">Эта страница</a>'+tpm+'</td><td class="m-sp"><div/></td><td class="m-gr"><a href="/tr/admin24/" class="m-gr-top">'+(sm?'OLAG':'OpenLDAP 2.4 Руководство')+'</a><dl class="m-gr-drop3"><dd><p>Содержание</p><a href="/tr/admin24/intro.html">Введение в службы каталогов OpenLDAP</a><a href="/tr/admin24/quickstart.html">Быстрое развёртывание и начало работы</a><a href="/tr/admin24/config.html">Общая картина - варианты конфигурации</a><a href="/tr/admin24/install.html">Сборка и установка OpenLDAP</a><a href="/tr/admin24/slapdconf2.html">Настройка slapd</a></dd><dd><p>&nbsp;</p><a href="/tr/admin24/slapdconfig.html">Конфигурационный файл slapd</a><a href="/tr/admin24/runningslapd.html">Запуск slapd</a><a href="/tr/admin24/access-control.html">Контроль доступа</a><a href="/tr/admin24/limits.html">Ограничения</a><a href="/tr/admin24/dbtools.html">Инструменты</a><a href="/tr/admin24/backends.html">Механизмы манипуляции данными</a><a href="/tr/admin24/overlays.html">Наложения</a><a href="/tr/admin24/schema.html">Спецификация схемы</a></dd><dd><p>&nbsp;</p><a href="/tr/admin24/security.html">Безопасность</a><a href="/tr/admin24/sasl.html">SASL</a><a href="/tr/admin24/tls.html">TLS</a><a href="/tr/admin24/referrals.html">Распределённая служба каталогов</a><a href="/tr/admin24/replication.html">Репликация</a><a href="/tr/admin24/maintenance.html">Обслуживание</a><a href="/tr/admin24/monitoringslapd.html">Мониторинг</a><a href="/tr/admin24/tuning.html">Производительность</a><a href="/tr/admin24/troubleshooting.html">Устранение неполадок</a></dd><dt>Перевод официального руководства OpenLDAP 2.4 Admin Guide<br/>Полное содержание <a href="/tr/admin24/">здесь</a></dt></dl></td><td class="m-sp"><div/></td><td class="m-gr"><a href="/tr/zytrax/" class="m-gr-top">'+(sm?'LFRS':'LDAP для учёных-ракетчиков')+'</a><dl class="m-gr-drop2"><dd><p>Содержание</p><a href="/tr/zytrax/ch1/">О книге</a><a href="/tr/zytrax/ch2">Концепции LDAP</a><a href="/tr/zytrax/ch3">Объекты LDAP</a><a href="/tr/zytrax/ch4">Установка LDAP</a><a href="/tr/zytrax/ch5">Примеры</a><a href="/tr/zytrax/ch6">Настройка</a><a href="/tr/zytrax/ch7">Репликация и отсылки</a><a href="/tr/zytrax/ch8">LDIF и DSML</a><a href="/tr/zytrax/ch9">Протокол</a><a href="/tr/zytrax/ch10">LDAP API</a></dd><dd><p>&nbsp;</p><a href="/tr/zytrax/ch11">HOWTO</a><a href="/tr/zytrax/ch12">Неполадки</a><a href="/tr/zytrax/ch13">Производительность</a><a href="/tr/zytrax/ch14">Инструменты LDAP</a><a href="/tr/zytrax/ch15">Безопасность</a><a href="/tr/zytrax/apa">Заметки</a><a href="/tr/zytrax/apb">Ресурсы LDAP</a><a href="/tr/zytrax/apc">RFC и X.500</a><a href="/tr/zytrax/apd">Глоссарий</a><a href="/tr/zytrax/ape">Объекты</a></dd><dt>Перевод "LDAP for Rocket Scientists"<br/>Полное содержание <a href="/tr/zytrax/">здесь</a></dt></dl></td><td class="m-sp"><div/></td><td class="m-gr"><a href="/sources/" class="m-gr-top">Ресурсы</a><dl class="m-gr-drop1"><dd><p>Книги</p><a href="/tr/admin24/">Руководство OpenLDAP 2.4</a><a href="/tr/zytrax/">LDAP для учёных-ракетчиков</a><p>Другие</p><a href="/art/">Статьи</a><a href="/sources/index.html#terms">Термины LDAP</a><a href="/tr/man/">man-страницы OpenLDAP 2.4</a><a href="/tr/rfc/">Список RFC</a><a href="/sources/index.html#clients">Клиенты LDAP</a><a href="/sources/index.html#schema">Файлы наборов схемы</a></dd><dt>Полезные ресурсы</dt></dl></td><td class="m-sp"><div/></td><td class="m-gr"><a href="/forum/" class="m-gr-top">Форум</a><dl class="m-gr-drop1"><dd><p>&nbsp;</p><a href="/forum/">Разделы форума</a><a href="/forum/index.php?action=unread">Непрочитанные сообщения</a><a href="/forum/index.php?action=recent">Последние сообщения</a></dd><dt>Форум проекта</dt></dl></td><td class="m-sp"><div/></td><td class="m-gr"><a href="/" class="m-gr-top">Главная</a><dl class="m-gr-drop1"><dd><p>Pro-LDAP.ru</p><a href="/index.html#about_project">О проекте</a><a href="/news/">Новости проекта</a><a href="/index.html#members">Участники</a><a href="/index.html#become_member">Станьте участником!</a><a href="/index.html#catch_bugs">Сообщите об ошибке!</a><a href="/index.html#copyrights">Об авторских правах</a><a href="/agreements.html">Соглашения проекта</a></dd><dt>Присоединяйсь!</dt></dl></td></tr></table></div>');b.appendChild(e);if((!/html4\/strict.dtd$/.test(document.doctype.systemId))||(ie&&ie==7))document.getElementById('top-search').style.margin=0;if(ie&&ie<6)return;
(function(w,d,c){var s=d.createElement('script'),h=d.getElementsByTagName('script')[0],e=d.documentElement;(' '+e.className+' ').indexOf(' ya-page_js_yes ')===-1&&(e.className+=' ya-page_js_yes');s.type='text/javascript';s.async=true;s.charset='utf-8';s.src=(d.location.protocol==='https:'?'https:':'http:')+'//site.yandex.net/v2.0/js/all.js';h.parentNode.insertBefore(s,h);(w[c]||(w[c]=[])).push(function(){Ya.Site.Form.init()})})(window,document,'yandex_site_callbacks');}
