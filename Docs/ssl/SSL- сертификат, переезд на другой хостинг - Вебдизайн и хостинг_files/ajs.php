(function(){
var isIE = window.navigator.userAgent.indexOf("MSIE ") > 0;

var ifr = document.createElement('iframe');
ifr.setAttribute('id', 'cto_iframe_b13baef7b3');
ifr.setAttribute('frameBorder', 0);
ifr.setAttribute('allowtransparency', true);
ifr.setAttribute('hspace', 0);
ifr.setAttribute('marginwidth', 0);
ifr.setAttribute('marginheight', 0);
ifr.setAttribute('scrolling', 'no');
ifr.setAttribute('vspace', 0);
ifr.setAttribute('width', '970px');
ifr.setAttribute('height', '250px');

var container = document.getElementById('crt-214794');
if (container) { container.appendChild(ifr); }
var ifc = "\n";
ifc += "<"+"!DOCTYPE html>\n";
ifc += "<"+"html>\n";
ifc += "  <"+"head>\n";
ifc += "    <"+"meta name=\"format-detection\" content=\"telephone=no\"><"+"meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n";
ifc += "  <"+"/head>\n";
ifc += "  <"+"body><"+"div id=\'beacon_b13baef7b3\' style=\'position: absolute; left: 0px; top: 0px; visibility: hidden;\'>\n";
ifc += "<"+"img width=\"0\" height=\"0\" src=\"http://ib.adnxs.com/getuid?http%3a%2f%2fdis.criteo.com%2frex%2fmatch.aspx%3fc%3d11%26uid%3d%24UID\"/>\n";
ifc += "<"+"img width=\"0\" height=\"0\" src=\"http://cat.nl.eu.criteo.com/delivery/lg.php?cppv=2&cpp=q3Tdl3x3RStDNXJRWlVzZnRnVkhab1dSeldaN1VUckZKSktUOUN5V0RLdVJoV3VHc0NvUzNsd1VhLzRWbkR2R1Q4TEEvNHN6TVVXTXYrN21EZ3pvYUEyMEVhV1BYdUREWGQwOHQ0b0RadXcrQjAwSlJoUnFKaHFVaHdyTmJzNGRyMkpqRFJaZEJtelU5bW9xNzNacGU2WmR4bWpQdXVsYzVmaldoUlIySzZCNFFpcGVOTDNSRE55L0hIb3pueU5ycHdoRU9YaEtvcVFiV2FNS013UmhZZjMzSGVtV0RSZ2JiaVlFY3p3Nlo5a3kzdmpEYlNDV01QemNMK3poLzBMUGpJZzlYfA\"/>\n";
ifc += "<"+"/div>\n";
ifc += "<"+"div id=\"538118584\" style=\"width:970px;height:250px;margin:0;padding:0\">\n";
ifc += "  <"+"noscript><"+"iframe id=\"fe8f275d3e\" name=\"fe8f275d3e\" src=\"//uk-ads.openx.net/w/1.0/afr?auid=538118584&cb=333333\" frameborder=\"0\" scrolling=\"no\" width=\"970\" height=\"250\"><"+"a href=\"//uk-ads.openx.net/w/1.0/rc?cs=fe8f275d3e&cb=333333E\" ><"+"img src=\"//uk-ads.openx.net/w/1.0/ai?auid=538118584&cs=fe8f275d3e&cb=333333\" border=\"0\" alt=\"\"><"+"/a><"+"/iframe><"+"/noscript>\n";
ifc += "<"+"/div>\n";
ifc += "<"+"script type=\"text/javascript\">\n";
ifc += "  var OX_ads = OX_ads || [];\n";
ifc += "  OX_ads.push({\n";
ifc += "     slot_id: \"538118584\",\n";
ifc += "     auid: \"538118584\"\n";
ifc += "  });\n";
ifc += "<"+"/script>\n";
ifc += "\n";
ifc += "<"+"script type=\"text/javascript\" src=\"//uk-ads.openx.net/w/1.0/jstag\"><"+"/script>\n";
ifc += "<"+"/body>\n";
ifc += "<"+"/html>\n";

var fillIframe = function(ifrd) {
    var getDocument = function(iframe) {
        var result_document = iframe.contentWindow || iframe.contentDocument;
        if (result_document && result_document.document)
            result_document = result_document.document;
        return result_document;
    };
    var c = getDocument(ifrd);
    if (c) {
        c.open();
        c.write(ifc);
        c.close();
    }
};


var maxRetryAttempts = 100;
var loaded = false;
var pollIframe = function() {
    var ifrd = document.getElementById('cto_iframe_b13baef7b3');
    if (ifrd && isIE) {
         ifrd.onload = function() {
            if(!loaded) {
                loaded = true;
                fillIframe(ifrd);
            }
        };
    } else if (ifrd) {
        loaded = true;
        fillIframe(ifrd);
    } else if (maxRetryAttempts-- > 0) {
        setTimeout(pollIframe, 10);
    }
};pollIframe();
})();
