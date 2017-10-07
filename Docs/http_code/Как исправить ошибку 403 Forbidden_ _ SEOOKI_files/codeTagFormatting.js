
    $(document).ready(function() {
		if (document.URL.indexOf("http://seooki.ua/blog") == 0) {
			formatCodeTags();
			formatOlTags();
		}
    });
	
	function formatCodeTags() {
		$('code').each(function(i) {
			$(this).find('code').remove();
			if ($(this).parent().next().html() == "\n") {
				$(this).append("\n" + $(this).parent().next().next().find("code").html());
				$(this).parent().next().remove();
				$(this).parent().next().remove();
			}
			
			$(this).html(handleTag($(this)));

		});
	}
	
	function handleTag(tagCode) {
		var data = tagCode.html();
		var arr = data.split('\n');
		var result = "<ul class=\"code-list\">";
		var i = 1;
		for (var rowNum in arr) {
			if (arr[rowNum].trim()) {
				arr[rowNum] = arr[rowNum].replace("/</g", "&lt;");
				arr[rowNum] = arr[rowNum].replace("/>/g", "&gt;");
				arr[rowNum] = arr[rowNum].replace("/\"/g", "&quot;");
				arr[rowNum] = arr[rowNum].replace("/<br>/g", "&quot;");
				result += "<li class=\"code-line-" + rowNum % 2 + "\"><span style=\"color: #9E9E9E!important;\">" + i + ". </span>" + arr[rowNum] + "</li>";
				i++;
			}
		}
		result += "</ul>";
		return result;
	}

	function formatOlTags() {
		var num = 1;
		$('ol li').each(function(i) {
			$(this).html('<span class="ol-li-numb">' + num + ") " + "</span>" + $(this).html());
			num++;
	    });
	}
		