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

		/*Инициализируем всплывающее окно на родителе формы, которым является div с динамически генерируемым id.
		 *При отправке формы в этот div помещается ответ от ajax-запроса отправленного формой(аяксовый компонент Битрикса сам генерирует id контейнера и
		 *сам же помещает в него ответ отрезая весь лишний html), его контент (сама форма)
		 *заменяется и соответственно мы не можем провести инициализацию на ней самой.
		 *После инициализации div перемещается в DOM соответственно процессу инициализации, и выбрать его с помощью селектора
		 *$("div.news-detail form") мы уже не сможем. Выборка будет производиться по аттрибуту "name" формы, который содержит
		 *ее ID. После выборки фоормы и ее родителя мы можем вызвать метод dialog('open') для ее открытия.
		 *После удачного заполнения формы сервер отдаеттолько текст сообщения и не отдает саму форму, поэтому при закрытии окна с сообщением,
		 *мы должны на событии закрытия подгрузить в него форму снова, чтобы при повторном открытии окна дать возможность заполнить ее снова
		 */
		$("div#content form").parent().dialog({
			autoOpen: false,
			modal: true,
			width: 600,
			title: "efsol.ru",
			close: function(event, ui){//Обработчик события закрытия диалогового окна
				/**
				 * Если мы успешно отправили форму и сервер вернул нам только текст, нам потребуется снова загрузить форму
				 * в диалоговое окно после его закрытия. Код формы хранится в свойстве объекта formHTML, и записывается в него при первом открытии окна с ней
				 * */
				if($(this).children("form").length==0)
					$(this).html($(this).dialog("option","formHTML"));
					//jsAjaxUtil.InsertDataToNode('?AJAX_CALL=Y&bxajaxid=a7550ddeed74d9230042c25a29124531',$(this).attr('id'),false)

			},
			open: function(event, ui){//Обработчик события открытия диалогового окна
				/**
				 * Если мы закрываем окно впервые, сохраним в свойстве объекта код формы,
				 * чтобы после успешной отправки снова загрузить форму в окно
				 * */
				if(typeof($(this).dialog("option","formHTML") == "undefined")){
					var formHTML = $(this).html();

					$(this).dialog("option","formHTML",formHTML);
				}
			}
		});

		arAjaxContainers = {};

		$("a.showform").click(function(){
			//ID ссылки, который определяет ее связь с формой.
			//formID = $(this).attr("id");
			//храним ID формы в аттрибуте href ссылки, чтобы иметь возможность удобно изменять его через виз.редактор
			formID = $(this).attr("href");
                        
			//Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//Если же окно открывается впервые - получим id родителя формы
			}else{
				//id родителя
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//Сохраним id родителя в массиве в ключе равном id самой формы
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//откроем popup окно, поместив в него родителя формы
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//Создадим у плагина свойство, хранящее id формы находящейся в нём
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		});
                $(".header-button li.menu").click(function(){
			//ID ссылки, который определяет ее связь с формой.
			formID = $(this).attr("id");

			//Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//Если же окно открывается впервые - получим id родителя формы
			}else{
				//id родителя
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//Сохраним id родителя в массиве в ключе равном id самой формы
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//откроем popup окно, поместив в него родителя формы
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//Создадим у плагина свойство, хранящее id формы находящейся в нём
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		})
                .css({"cursor":"pointer"});
/*
        $("a.demo").click(function(e){
            e.preventDefault();
			//ID ссылки, который определяет ее связь с формой.
			//formID = $(this).attr("id");
			//храним ID формы в аттрибуте href ссылки, чтобы иметь возможность удобно изменять его через виз.редактор
			formID = $(this).attr("href");
            product_name = $(this).attr("id");
            $("form[name=SIMPLE_FORM_"+formID+"]").append("<input type='hidden' name='product' value='" + product_name + "' />");
            $("form[name=SIMPLE_FORM_"+formID+"] .whereque-callback input[type=hidden]").attr({"value":product_name})
            //$("form[name=SIMPLE_FORM_"+formID+"] h3").html(product_name); // теперь выводится в шаблоне формы правильный заголовок, подмена не требуется
			//Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//Если же окно открывается впервые - получим id родителя формы
			}else{
				//id родителя
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//Сохраним id родителя в массиве в ключе равном id самой формы
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//откроем popup окно, поместив в него родителя формы
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//Создадим у плагина свойство, хранящее id формы находящейся в нём
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		});
*/
                $(".header-button li.menu").click(function(){
			//ID ссылки, который определяет ее связь с формой.
			formID = $(this).attr("id");

			//Если мы уже открывали окно формы - то в массиве, в ключе равном id ссылки, храниться  id родителя, в который загружается форма после отправки, и который мы делаем popup окном
			if(typeof(arAjaxContainers[formID])!=="undefined"){
				$("div#"+arAjaxContainers[formID]+"").dialog("open");
			//Если же окно открывается впервые - получим id родителя формы
			}else{
				//id родителя
				$ajaxDiv = $("form[name=SIMPLE_FORM_"+formID+"]").parent();
				//$ajaxDiv.addClass("dialog-init-"+formID);
				//Сохраним id родителя в массиве в ключе равном id самой формы
				arAjaxContainers[formID] = $ajaxDiv.attr("id");
				//откроем popup окно, поместив в него родителя формы
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("open");
				//Создадим у плагина свойство, хранящее id формы находящейся в нём
				$("form[name=SIMPLE_FORM_"+formID+"]").parent().dialog("option","formID",formID);
			}
			return false;
		})
                .css({"cursor":"pointer"});
    });
   