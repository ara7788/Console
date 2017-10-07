
(UserGuard = {
	
	widget : "login",
	
	loaderOn : function () {
		$("#auguard_error").hide().html("");
		$("#auguard_loader").show();
	},
	
	loaderOff : function () {
		$("#auguard_loader").hide(); 
	},
	
	send : function() {
		this.loaderOn();
		AjaxRequest.form("auguard_form");
		return false;
	},
	
	otpCodeStatus : function (code_id, loader) {
		if (typeof(loader) == "undefined") {
			this.loaderOn(); 
		} else {
			$("#"+loader).show();
		}
		
		AjaxRequest.action("/action/user/guard/status/", "", {'code_id':code_id, 'loader':loader});
		return false;
	},
	
	otpCodeResend : function () {
		this.loaderOn();
		AjaxRequest.action("/action/user/guard/"+this.widget+"/resend/");
		return false;
	},
	 
	otpAlternative : function (method, switcher) {
		this.loaderOn();
		AjaxRequest.action("/action/user/guard/"+this.widget+"/alternative/", "", {'method':method, 'switcher':switcher});
		return false;
	},
	
	otpClear : function (redirect) {
		this.loaderOn();
		if (typeof(redirect) == "undefined") redirect = "";
		AjaxRequest.action("/action/user/guard/clear/", "", {'_r':redirect});
		return false;
	}
});

(UserBackcall = {	
	
	intervals : new Object(),
	
	intervalPush : function (interval_id) {
		this.intervals[interval_id] = interval_id;
	},
	
	intervalClear : function() {
		for (var interval_id in this.intervals) {
        	if (!this.intervals.hasOwnProperty(interval_id)) continue;
        	window.clearInterval(interval_id);    
        }   
	},
	
	timeFormat : function (seconds) {
	    var sec_num = parseInt(seconds, 10);
	    var hours   = Math.floor(sec_num / 3600);
	    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	    var seconds = sec_num - (hours * 3600) - (minutes * 60);
	
	    if (hours   < 10) {hours   = "0"+hours;}
	    if (minutes < 10) {minutes = "0"+minutes;}
	    if (seconds < 10) {seconds = "0"+seconds;}
	    var time = hours+':'+minutes+':'+seconds;
	    return time;
	}, 
	
	timesUp : function() {
		var limit = parseInt($(".auguard .backcall .waiting .timer-limit").val());
		var current = parseInt($(".auguard .backcall .waiting .timer-value").val());
		if (current >= limit) return true;
		return false; 
	},
	
	timeGo : function() {
		var limit = parseInt($(".auguard .backcall .waiting .timer-limit").val());
		var current = parseInt($(".auguard .backcall .waiting .timer-value").val());
		 
		current++;
		
		$(".auguard .backcall .waiting .timer-value").val(current);
		$(".auguard .backcall .waiting .timer-display").html(this.timeFormat(parseInt(limit - current)));
	},
	
	call : function () {
		this.intervalClear();
		
		$(".auguard .backcall .status.waiting").hide();
		$(".auguard .backcall .status.calling").show();
		$(".auguard .backcall .status.waiting").remove();
		
		AjaxRequest.action("/action/user/guard/backcall/call/");
		return false;
	},
	  
	callStatusInterval : function () {
		this.intervalClear();
		
		var interval_id = window.setInterval(function() { 
			AjaxRequest.action("/action/user/guard/backcall/status/");
			return false;
		}, 5000); 
		
		this.intervalPush(interval_id);
		return false;
	},
	
	recall : function () {
		this.intervalClear();
		UserGuard.loaderOn();
		
		AjaxRequest.action("/action/user/guard/"+UserGuard.widget+"/backcall/redial/");
		return false;
	}
});
		
