$(document)
		.ready(function() { // инициализация highslide
					hs.graphicsDir = '/js/highslide/graphics/';
					hs.align = 'center';
					hs.transitions = ['expand', 'crossfade'];
					hs.outlineType = 'glossy-dark';
					hs.wrapperClassName = 'dark';
					hs.fadeInOut = true;
					hs.creditsHref = 'http://efsol.ru';
					hs.lang = {
							cssDirection:'ltr', loadingText : '��������...', loadingTitle : '��������', focusTitle : '', fullExpandTitle : '', creditsText : 'Efsol.Ru', creditsTitle : '����������� �������', previousText : '<<', nextText : '>>'
					};
		});
