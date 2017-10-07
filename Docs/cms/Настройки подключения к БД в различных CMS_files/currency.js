
(UserCurrency = {
	 
	rates : new Array(),
	current_id : 0,
	default_id : 980,
	 
	point_after : 2,
	point_separator_dec : ".",
	point_separator_thousend : "", 
	
	handlers : ".currency_item, .currency-item, .currency-digit",
	
	init : function (rates, current_id, default_id) {
		this.rates = rates;
		this.current_id = current_id;
		
		if (typeof(default_id) != "undefined") {
			this.default_id = default_id;
		}
		this.update(); 
		return false;
	},
	
	getCurrentCode : function () {
		return this.rates[this.current_id].code;
	},
	getCurrentSymbol : function () {
		return this.rates[this.current_id].symbol;
	},
	
	setNumberFormat : function (point_after, point_separator_dec, point_separator_thousend) {
		this.point_after = point_after;
		this.point_separator_dec = point_separator_dec;
		this.point_separator_thousend = point_separator_thousend;
	},
	
	bindProperties : function () {
		var regexp_available = "";
		var c = 0;
		 
		jQuery.each(this.rates, function(id, item){
			if (c > 0) regexp_available = regexp_available + "|";
			var symbol = item.symbol;
			if (symbol == "$") symbol = "\\"+symbol;
			regexp_available = regexp_available + item.code + "|" + symbol;
			c++;
		});
		
		$(this.handlers).each(function(i) {
			var value_html = ($(this).get(0).tagName == "INPUT") ? $(this).val() : $(this).html();  
			var value = parseFloat(jQuery.trim(value_html.replace(new RegExp("("+regexp_available+")", "g"), "").replace(",", ".")));
			 
			var exists = $(this).data("currency-variable");
			if (typeof(exists) == "undefined") {
				$(this).data("currency-constant", value);
			} else { 
				exists = parseFloat(exists.replace(",", "."));
				if (exists != value) $(this).data("currency-constant", value);
			}
		});
		return false;   
	},
	 
	update : function () {
		this.bindProperties();
		return this.refresh();
	},
	
	change : function(currency_id, callback) {
		if (typeof(callback) == "undefined") callback = "";
		this.current_id = currency_id;  
		AjaxRequest.action("/action/currency/change/", "Загрузка...", {'currency_id':currency_id, 'callback':callback});
		return false;
	}, 
	
	refresh : function () {
		var symbol = this.rates[this.current_id].symbol;
		var self = this;
			
		$(this.handlers).each(function(i) {
			var tag = $(this).get(0).tagName.toUpperCase();
			var value = parseFloat($(this).data("currency-constant"));

			var dec = self.point_after;
			if ($(this).attr('data-round-dec')) {
				dec = parseInt($(this).attr('data-round-dec'));
			}

			if (!isNaN(value)) {
				value = (self.current_id == self.default_id) ? value : round_number(value * self.rates[self.current_id][self.default_id], dec);
				value = number_format(value, dec, self.point_separator_dec, self.point_separator_thousend);
				
				$(this).data("currency-variable", value);
				
				if (tag == "INPUT") {
					$(this).val(value);
				} else {
					if ($(this).attr("class").indexOf("currency-digit") >= 0) {
						$(this).html(value); 
					} else {
						$(this).html(value + " " + symbol); 
					}
				}
				
			} else if (tag != "INPUT" && $(this).html() != "") {
				$(this).html(symbol); 
			}
		});

		$(document).trigger('currencyRefreshed');
		return true;
	}
});
	
