window.onload = function() { // on page load
	var scrollUp = document.getElementById('scrollup'); // find button element by id
	scrollUp.onmouseover = function() { // add opacity on mouse over
		scrollUp.style.opacity=0.3;
		scrollUp.style.filter  = 'alpha(opacity=30)';
	};

	scrollUp.onmouseout = function() { // remove opacity on mouse out
		scrollUp.style.opacity = 0.5;
		scrollUp.style.filter  = 'alpha(opacity=50)';
	};

	scrollUp.onclick = function() { // back to top
		window.scrollTo(0,0);
	};

// show button
	window.onscroll = function () { // show and hide button on page scroll
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};