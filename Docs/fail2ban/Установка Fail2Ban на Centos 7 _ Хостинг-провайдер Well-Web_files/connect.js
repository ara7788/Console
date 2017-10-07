if (typeof window.PozvonimcomLoader == "undefined") {
	var PozvonimcomWidgetRootConfig = {"apiPath":"\/\/api.pozvonim.com\/widget\/callback\/v3\/54738","cdnPath":"\/\/cdn.pozvonim.com","apiHiloadPath":"\/\/api.pozvonim.com\/widget","rootPath":"\/\/pozvonim.com\/","sendEvents":true,"id":54738,"user_id":59795,"site_key":"c484be09dfaca7a3425e4d4430b8e850","site_id":54738,"referal_url":"http:\/\/pozvonim.com\/?from=widget","callback":{"is_enable":false},"chat":{"is_enable":false,"sounds":[]},"email":{"is_enable":true,"webTracking":{"message_sent":{"name":"email:message_sent","title":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b email \u0447\u0435\u0440\u0435\u0437 \u0443\u043c\u043d\u044b\u0439 \u0432\u0438\u0434\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438"}},"webTrackingServices":{"yandex_metrika":[],"google_analytics":{"category":"pozvonim"},"google_tag_manager":[],"mail_counter":[],"yagla":[],"roistat":[]},"blacklist":{"url":[],"referer":[]}},"feedback":{"is_enable":false},"mobileButton":{"is_enable":false},"fingerprint":false,"userInfo":true,"userInfoProto":"https:","language":{"days":{"sunday":"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","monday":"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","tuesday":"\u0412\u0442\u043e\u0440\u043d\u0438\u043a","wednesday":"\u0421\u0440\u0435\u0434\u0430","thursday":"\u0427\u0435\u0442\u0432\u0435\u0440\u0433","friday":"\u041f\u044f\u0442\u043d\u0438\u0446\u0430","saturday":"\u0421\u0443\u0431\u0431\u043e\u0442\u0430"}},"geo":{"default_country_code":"RU"},"herdInstinct":{"is_enable":true,"show_mode":2,"show_mode_delay":50000,"show_mode_scroll":50,"show_duration":30000,"show_delay_mode":3,"show_delay_mode_time":417000,"show_delay_mode_time_range_from":180000,"show_delay_mode_time_range_to":260000,"limit_show_count_enable":1,"limit_show_count_times":5,"limit_show_count_offset":7200,"blacklist":{"url":[],"referer":[]}}};
	PozvonimcomWidgetRootConfig.ip="176.107.128.11";
PozvonimcomWidgetRootConfig.widget_id=777945914;
PozvonimcomWidgetRootConfig.time=1500033396;
PozvonimcomWidgetRootConfig.is_mobile=false;
PozvonimcomWidgetRootConfig.build=1499248486;
PozvonimcomWidgetRootConfig.geo.country_id=690791;
PozvonimcomWidgetRootConfig.geo.country_code="UA";
PozvonimcomWidgetRootConfig.geo.country_name="\u0423\u043a\u0440\u0430\u0438\u043d\u0430";
PozvonimcomWidgetRootConfig.geo.city_id=null;
PozvonimcomWidgetRootConfig.geo.city_name=null;
PozvonimcomWidgetRootConfig.geo.state_id=null;
PozvonimcomWidgetRootConfig.geo.state_name=null;
PozvonimcomWidgetRootConfig.geo.ids=[690791,6255148];
PozvonimcomWidgetRootConfig.data={"date":"2017-07-14T11:56:36+0000","hour":"11","days":["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],"offset":"0","day_of_week":"5","day_name":"friday","utc":"2017-07-14T11:56:36+0000"};
PozvonimcomWidgetRootConfig.geo.cases={"nominative":"\u0423\u043a\u0440\u0430\u0438\u043d\u0430","genitive":"\u0423\u043a\u0440\u0430\u0438\u043d\u044b","prepositional":"\u0423\u043a\u0440\u0430\u0438\u043d\u0435"};
	if (PozvonimcomWidgetRootConfig.callback) {
		PozvonimcomWidgetRootConfig.callback.data = PozvonimcomWidgetRootConfig.data;
			}
    if (PozvonimcomWidgetRootConfig.chat) {
			}
		var PozvonimcomLoader = function (d, s, u, p) {
		"use strict";
		var o = d.createElement(s);
		p = d.getElementsByTagName(s)[0];
		o.async = 1;
		//o.crossOrigin='use-credentials';
		o.src = u;
		o.charset="UTF-8";
		p.parentNode.insertBefore(o, p);
	};
		if(location.hash && location.hash == '#ioioo'){
		PozvonimcomWidgetRootConfig.apiHiloadPath = PozvonimcomWidgetRootConfig.apiHiloadPath.replace('api.pozvonim.com','api.ioioo.ru');
		PozvonimcomWidgetRootConfig.apiPath = PozvonimcomWidgetRootConfig.apiPath.replace('api.pozvonim.com','api.ioioo.ru');
		PozvonimcomLoader(document, 'script', '//cdn.ioioo.ru/widget/pozvonim.min.js?build=1500033396');	
	} else if(location.hash && location.hash == '#pvz'){
		PozvonimcomWidgetRootConfig.apiHiloadPath = PozvonimcomWidgetRootConfig.apiHiloadPath.replace('api.pozvonim.com','api.hohope.ru');
		PozvonimcomWidgetRootConfig.apiPath = PozvonimcomWidgetRootConfig.apiPath.replace('api.pozvonim.com','api.hohope.ru');
		PozvonimcomLoader(document, 'script', '//cdn.hohope.ru/widget/pozvonim.min.js?build=1500033396');	
	} else {	
		PozvonimcomLoader(document, 'script', '//cdn.pozvonim.com/widget/pozvonim.min.js?build=1499248486');	
	}
}
