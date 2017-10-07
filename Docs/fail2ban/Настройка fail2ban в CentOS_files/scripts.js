$(document).ready(function(){ 
    $('.spoiler-title').click(function(){ 
        $(this).parent().children('div.spoiler-content').slideToggle('medium');
        return false;
    });
});
