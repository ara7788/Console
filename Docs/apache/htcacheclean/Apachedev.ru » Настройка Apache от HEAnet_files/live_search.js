var ls = {
	url:'',
	search_form:'searchform',
	
	init:function() {
		var s = $('s');
		s.autocomplete = 'off';
		new Form.Element.Observer(s, 1.0, ls.show_results);
		new Insertion.Bottom(ls.search_form, '<div id="live_search_results" style="display:none"></div>');
	},

	show_results:function(element, value) {
        if (value != ''){
            ls.show_page(value, 1);
		} else {
            closeSearch();
        }
	},

	show_page:function(s, page) {
        var progress = $('loading');
        progress.style.display = 'inline';
		var pars = 's=' + escape(s) + '&paged=' + page;
		new Ajax.Updater('live_search_results', ls.url, {
			method: 'get',
			parameters: pars,
			onComplete:function() {
                $('live_search_results').style.display = 'block';
                progress.style.display = 'none';
				var p = $$('#previous_results a');
				var n = $$('#next_results a');

				// attach handlers for next and previous pages
			}
		});
	}
}

Event.observe(window, 'load', ls.init, false);

function closeSearch(){
  var res = $('live_search_results');
  res.style.display = 'none';
  res.innerHTML = '';
}