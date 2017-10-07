/**
 * @package   Nexus Template - RocketTheme
* @version   $Id: rokutils.js 26089 2015-01-27 13:23:51Z james $
* @author    RocketTheme, LLC http://www.rockettheme.com
* @copyright Copyright (C) 2007 - 2015 RocketTheme, LLC
* @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 * Rockettheme Nexus Template uses the Joomla Framework (http://www.joomla.org), a GNU/GPLv2 content management system
 *
 */

window.addEvent('domready', function() {
	new Fx.SmoothScroll();
});

window.addEvent("domready", function() {
    var b = document.id("top-scroll");
    if (b) {
        var a = new Fx.Scroll(window);
        b.setStyle("outline", "none").addEvent("click", function(c) {
            c.stop();
            a.toTop();
        });
    }
});


// IE6 bad looking hack :)
if (Browser.ie6) {
	window.addEvents({
		'domready': function() {
			document.id(document.body).addClass('ie-please-wait').setStyle('visibility', 'hidden');
		},
	
		'load': function() {
			(function() {document.id(document.body).removeClass('ie-please-wait').setStyle('visibility', 'visible');}).delay(10);
			var arrow = $$('.feature-arrow-r')[0], li = $$('ul.menutop').getFirst()[0];
			if (arrow) arrow.fireEvent('mouseleave', false, 500);
			if (li) li.addEvents({
				'mouseenter': function() {
					li.setStyle('padding-right', 1);
				},
				'mouseleave': function() {
					li.setStyle('padding-right', 0);
				}
			});
			
		},
		
		'unload': function() {
			document.id(document.body).addClass('ie-please-wait').setStyle('visibility', 'hidden');
		}
	});
}

// IE7 RokStories Hack
if (Browser.ie) {
	window.addEvent('domready', function() {
		
		var rokstories = $$('.rokstories-layout2 .desc-container'), list = [];
		rokstories.each(function(rokstory, i) {
			if (!rokstory.getElements('.description span').length) list.push(i);
		});
		if (list.length) list.each(function(value) {
			rokstories[value].setStyle('display', 'none');
		});

	});
}