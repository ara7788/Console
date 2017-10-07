(function () {
    var toQueryString = function (object, base) {
            var queryString = [];

            Object.keys(object).forEach(function (key) {

                var result,
                    value;

                value =  object[key];

                if (base) {
                    key = base + '[' + key + ']';
                }
                switch (typeof value) {
                    case 'object':
                        result = Object.encodeToQueryString(value, key);
                        break;
                    case 'array':
                        var qs = {};
                        value.forEach(function (val, i) {
                            qs[i] = val;
                        });
                        result = Object.encodeToQueryString(qs, key);
                        break;
                    default:
                        result = key + '=' + encodeURIComponent(value);
                }

                if (value != null) {
                    queryString.push(result);
                }
            });
            return queryString.join('&');
        },
        getData = function () {
            if (!window.apmInfo) {
                return;
            }
            var info = window.apmInfo,
                data = {};

            data.p1 = info['appID'];
            data.p2 = info['appTime'];
            data.p3 = "" + location;

            if (window.performance && typeof (window.performance.timing) !== 'undefined') {
                var timing = {},
                    wpt = window.performance.timing,
                    setParam = function (resultKey, sourceKey) {
                        var value = wpt[sourceKey];
                        timing[resultKey] = typeof (value) === 'number' && (value > 0) ? Math.round(value - tstamp) : 0;
                        if (timing[resultKey] < 0) {
                            timing[resultKey] = 0;
                        }
                    },
                    tstamp = wpt['navigationStart'];
                setParam('p5', 'unloadEventStart');
                setParam('p6', 'redirectStart');
                setParam('p7', 'unloadEventEnd');
                setParam('p8', 'redirectEnd');
                setParam('p9', 'fetchStart');
                setParam('p10', 'domainLookupStart');
                setParam('p11', 'domainLookupEnd');
                setParam('p12', 'connectStart');
                setParam('p13', 'secureConnectionStart');
                setParam('p14', 'connectEnd');
                setParam('p15', 'requestStart');
                setParam('p16', 'responseStart');
                setParam('p17', 'responseEnd');
                setParam('p18', 'domLoading');
                setParam('p19', 'domInteractive');
                setParam('p20', 'domContentLoadedEventStart');
                setParam('p21', 'domContentLoadedEventEnd');
                setParam('p22', 'domComplete');
                setParam('p23', 'loadEventStart');
                setParam('p24', 'loadEventEnd');
                timing.p25 = tstamp;
                timing.p26 = 0;
                data.p4 = JSON.stringify(timing);
            }
            return data;
        };
    setTimeout(function () {
        var data = getData();

        window.apmCallback = function () {
        };
        data.jsonp = 'apmCallback';
        var script = document.createElement('script');
        script.src = '//apm.24mon.com/api/browser2?' + toQueryString(data);
        document.getElementsByTagName('head')[0].appendChild(script);
    }, 0);
}());
