function spoiler_toggle(spoiler) { 

    var sp_head_img = spoiler.parentNode.getElementsByTagName('div')[0].getElementsByTagName('img')[0];  
    var sp_body = spoiler.parentNode.getElementsByTagName('div')[1];  
  
    if (sp_body.style.display == 'none') {  
        sp_body.style.display = 'block';  
        sp_head_img.src = '/images/icon_minus.jpg';  
    } else {  
        sp_body.style.display = 'none';  
        sp_head_img.src = '/images/icon_plus.jpg';  
    }  
}

function spoiler_toggle2(spoiler) { 
    var sp_head_img = spoiler.getElementsByTagName('img')[0];  
    var sp_body = spoiler.getElementsByTagName('div')[0];  
  
    if (sp_body.style.display == 'none') {  
        sp_body.style.display = 'block';  
        sp_head_img.src = '/images/icon_minus.jpg';  
    } else {  
        sp_body.style.display = 'none';  
        sp_head_img.src = '/images/icon_plus.jpg';  
    }  
}