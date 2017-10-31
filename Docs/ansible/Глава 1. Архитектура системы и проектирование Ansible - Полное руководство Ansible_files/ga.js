
_gaq.push(['_trackPageview']);

var disqus_config = function ()
 {
     var config = this;
     config.callbacks.onNewComment.push (function () 
     {
         _gaq.push (['_trackEvent', 'Disqus', 'Comment', 'null', 1]);
     });
 }; 

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var CephAddBooks = '   <hr/><div class="itemizedlist">'+
'	<ul class="itemizedlist" type="disc"><p>Дополнительные ссылки:</p>'+
'	 <li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/KVMVirtualizationCookbook/content/Ch08.html" target="_top">Книга рецептов виртуализации KVM</a> Константин Иванов, Packt Publishing, июнь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringCeph/content/index.html" target="_top">Полное руководство Ceph</a> Ник Фиск, Packt Publishing, май 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ContainerizationWithLXC/content/index.html" target="_top"> Контейнеризация при помощи LXC</a> Константин Иванов, Packt Publishing, март 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/CephCookbook/content/index.html" target="_top">Книга рецептов Ceph</a> Каран Сингх, Packt Publishing, февраль 2016</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/LearningCeph2ed/content/index.html" target="_top">Изучаем Ceph</a>, 2е изд., Энтони Д`Атри, Вайбхав Бхембре, Каран Сингх, Packt Publishing, октябрь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/LearningCeph/content/index.html" target="_top">Изучаем Ceph</a> Каран Сингх, Packt Publishing, январь 2015</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringProxmox.2ed/content/index.html" target="_top">Proxmox. Полное руководство</a>. 2е изд., Васим Ахмед, Packt Publishing, май 2016</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ProxmoxCookbook/content/index.html" target="_top">Книга рецептов Proxmox. Главы 1-6, Дополнения: Преобразование OpenVZ в LXC, Организация ограждения</a> Васим Ахмед, Packt Publishing, август 2015</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/VirtualizationComplete/content/index.html" target="_top">Полная виртуализация. Базовая коммерческая редакция</a>: Proxmox-freeNAS-Zentyal-pfSense. Ли Р. Сюрбер, февраль 2016</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringAnsible2nd/content/index.html" target="_top">Полное руководство Ansible</a>. 2е изд., Джесс Китинг, май 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringZabbix.2ed/content/Ch04.html" target="_top">Zabbix. Полное руководство</a>. 2е изд., Андреа Далле Ваккье, сентябрь 2015</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringPythonNetworking/content/index.html" target="_top">Полное руководство работы с сетями на Python</a>. Эрик Чоу, Июнь 2017</p>'+
'	 </li>'+
'    </ul>'+
'   </div>';


