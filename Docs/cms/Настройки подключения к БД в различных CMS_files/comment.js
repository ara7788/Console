(Comment = {
	
	publish: function(id, active) {
		AjaxRequest.action('/action/admin/comment/publish/', 'Подождите...', {'id': id, 'active':active});
		return false;
	},
	edit:function(id, _return_path) {
		if (typeof(_return_path) === "undefined") _return_path = "";
		AjaxRequest.action('/action/comment/edit_open/', 'Загрузка...', {'id': id, '_return_path':_return_path});
		return false;
	},
	
	hideTask:function() {
		$('#bg_layer').css("display","none");
		$('#task').css("display","none");
		$("#edit_commnet").text();
		$("body").css("overflow", "visible");
	}
});

function getScrollHeight(){
   var h = window.pageYOffset ||
           document.body.scrollTop ||
           document.documentElement.scrollTop;
           
   return h ? h : 0;
}