function systemAuthFormComponent_openBlock()
{
	var loginForm = BX('hd_loginform_container');
	if (loginForm.style.display == 'block')
		BX.hide(loginForm);
	else
	{
		BX.show(loginForm);

		BX.focus(BX('USER_LOGIN_INPUT'));

		BX.bind(document, 'keyup', function(e){
			if (loginForm.style.display == 'block')
			{
				e=e||window.event;
				switch(e.keyCode)
				{
					case 27: systemAuthFormComponent_closeBlock();
						break;
				}
			}
		})
	}

	return false;
}

function systemAuthFormComponent_closeBlock()
{
	BX.hide(BX('hd_loginform_container'));
}

function systemAuthFormComponent_logout()
{
	BX('auth-logout-form').submit();
	return false;
}

/*
BX.ready(function(){
	BX.bind(BX('authlogin'), 'mouseover', function () {BX.show(BX('authlogin'))});
	BX.bind(BX('authlogin'), 'mouseout', function () {BX.hide(BX('authlogin'))});
});*/