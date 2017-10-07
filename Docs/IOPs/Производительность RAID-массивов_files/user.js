$(document).ready(function(){
             if($('form input[name=temp_code]').length>0){

                        $('form input[name=temp_code]')
                                  .css({"width":"50px"})
                                  .next()
                                  .next()
                                  .css({"width":"248px"})

                          $('input[name=web_form_submit]')
                                 .live('click',function(){

                                       var code;
                                       var phone;
                                       code = $(this).parents('form').find('input[name=temp_code]').attr("value");
                                       phone = $(this).parents('form').find('input[name=temp_code]').next().next().attr("value");
                                       if((code.length>0)&&(phone.length>0)){
                                            $(this).parents('form').find('input[name=temp_code]').next().next().attr({"value":"("+code+")"+phone});
                                       }
                                  });

             }

		/*�������������� ����������� ���� �� �������� �����, ������� �������� div � ����������� ������������ id.
		 *��� �������� ����� � ���� div ���������� ����� �� ajax-������� ������������� ������(�������� ��������� �������� ��� ���������� id ���������� �
		 *��� �� �������� � ���� ����� ������� ���� ������ html), ��� ������� (���� �����)
		 *���������� � �������������� �� �� ����� �������� ������������� �� ��� �����.
		 *����� ������������� div ������������ � DOM �������������� �������� �������������, � ������� ��� � ������� ���������
		 *$("div.news-detail form") �� ��� �� ������. ������� ����� ������������� �� ��������� "name" �����, ������� ��������
		 *�� ID. ����� ������� ������ � �� �������� �� ����� ������� ����� dialog('open') ��� �� ��������.
		 *����� �������� ���������� ����� ������ ������������ ����� ��������� � �� ������ ���� �����, ������� ��� �������� ���� � ����������,
		 *�� ������ �� ������� �������� ���������� � ���� ����� �����, ����� ��� ��������� �������� ���� ���� ����������� ��������� �� �����
		 */
		$("div#content form").parent().dialog({
			autoOpen: false,
			modal: true,
			width: 600,
			title: "efsol.ru",
			close: function(event, ui){//���������� ������� �������� ����������� ����
				/**
				 * ���� �� ������� ��������� ����� � ������ ������ ��� ������ �����, ��� ����������� ����� ��������� �����
				 * � ���������� ���� ����� ��� ��������. ��� ����� �������� � �������� ������� formHTML, � ������������ � ���� ��� ������ �������� ���� � ���
				 * */
				if($(this).children("form").length==0)
					$(this).html($(this).dialog("option","formHTML"));
					//jsAjaxUtil.InsertDataToNode('?AJAX_CALL=Y&bxajaxid=a7550ddeed74d9230042c25a29124531',$(this).attr('id'),false)

			},
			open: function(event, ui){//���������� ������� �������� ����������� ����
				/**
				 * ���� �� ��������� ���� �������, �������� � �������� ������� ��� �����,
				 * ����� ����� �������� �������� ����� ��������� ����� � ����
				 * */
				if(typeof($(this).dialog("option","formHTML") == "undefined")){
					var formHTML = $(this).html();

					$(this).dialog("option","formHTML",formHTML);
				}
			}
		});

		arAjaxContainers = {};

		$("a.showform").click(function(){
			//ID ������, ������� ���������� �� ����� � ������.
			//formID = $(this).attr("id");
			//������ ID ����� � ��������� href ������, ����� ����� ����������� ������ �������� ��� ����� ���.��������
			formID = $(this).attr("href");
                        
			//���� �� ��� ��������� ���� ����� - �� � �������, � ����� ������ id ������, ���������  id ��������, � ������� ����������� ����� ����� ��������, � ������� �� ������ popup �����
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//���� �� ���� ����������� ������� - ������� id �������� �����
			}else{
				//id ��������
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//�������� id �������� � ������� � ����� ������ id ����� �����
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//������� popup ����, �������� � ���� �������� �����
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//�������� � ������� ��������, �������� id ����� ����������� � ��
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		});
                $(".header-button li.menu").click(function(){
			//ID ������, ������� ���������� �� ����� � ������.
			formID = $(this).attr("id");

			//���� �� ��� ��������� ���� ����� - �� � �������, � ����� ������ id ������, ���������  id ��������, � ������� ����������� ����� ����� ��������, � ������� �� ������ popup �����
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//���� �� ���� ����������� ������� - ������� id �������� �����
			}else{
				//id ��������
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//�������� id �������� � ������� � ����� ������ id ����� �����
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//������� popup ����, �������� � ���� �������� �����
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//�������� � ������� ��������, �������� id ����� ����������� � ��
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		})
                .css({"cursor":"pointer"});
/*
        $("a.demo").click(function(e){
            e.preventDefault();
			//ID ������, ������� ���������� �� ����� � ������.
			//formID = $(this).attr("id");
			//������ ID ����� � ��������� href ������, ����� ����� ����������� ������ �������� ��� ����� ���.��������
			formID = $(this).attr("href");
            product_name = $(this).attr("id");
            $("form[name=SIMPLE_FORM_"+formID+"]").append("<input type='hidden' name='product' value='" + product_name + "' />");
            $("form[name=SIMPLE_FORM_"+formID+"] .whereque-callback input[type=hidden]").attr({"value":product_name})
            //$("form[name=SIMPLE_FORM_"+formID+"] h3").html(product_name); // ������ ��������� � ������� ����� ���������� ���������, ������� �� ���������
			//���� �� ��� ��������� ���� ����� - �� � �������, � ����� ������ id ������, ���������  id ��������, � ������� ����������� ����� ����� ��������, � ������� �� ������ popup �����
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//���� �� ���� ����������� ������� - ������� id �������� �����
			}else{
				//id ��������
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//�������� id �������� � ������� � ����� ������ id ����� �����
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//������� popup ����, �������� � ���� �������� �����
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//�������� � ������� ��������, �������� id ����� ����������� � ��
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		});
*/
                $(".header-button li.menu").click(function(){
			//ID ������, ������� ���������� �� ����� � ������.
			formID = $(this).attr("id");

			//���� �� ��� ��������� ���� ����� - �� � �������, � ����� ������ id ������, ���������  id ��������, � ������� ����������� ����� ����� ��������, � ������� �� ������ popup �����
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//���� �� ���� ����������� ������� - ������� id �������� �����
			}else{
				//id ��������
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//�������� id �������� � ������� � ����� ������ id ����� �����
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//������� popup ����, �������� � ���� �������� �����
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//�������� � ������� ��������, �������� id ����� ����������� � ��
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		})
                .css({"cursor":"pointer"});
    });
   