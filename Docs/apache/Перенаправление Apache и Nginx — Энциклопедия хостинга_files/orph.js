jQuery(function($){
    var dialog = $('#orph-dialog');
    var text = $('#orph-text', dialog);
    var problem = $('#orph-problem', dialog);
    var textShow = $('#orph-text-show', dialog)
    
    dialog.dialog({
        "autoOpen": false,
        "width": 700,
        "modal": true,
        "buttons": [{
            text: "Отправить",
            click: function() {
                $.post('/skins/monobook/orph/orph.php', {"text": text.val(), "problem": problem.val(), "url": document.location.href}, function(){
                    dialog.addClass('done');
                    setTimeout(function(){
                        dialog.dialog('close');
                    }, 5000);
                });
            }
        }, {
            text: "Закрыть",
            click: function() {
                dialog.dialog("close");
            }
        }]
    });
    
    $(document).keydown(function(event) {
        if(!(event.ctrlKey && event.keyCode == 13)) return;
        var selected = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;
        if(!selected) return;
        
        text.val(selected);
        textShow.text(selected);
        dialog.removeClass('done').dialog('open');
    });
});