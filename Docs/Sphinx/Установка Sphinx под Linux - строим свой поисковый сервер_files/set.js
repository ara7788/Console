// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	previewParserPath:	'', // path to your BBCode parser
	markupSet: [
		{name:'Bold', className:"mkituBold", key:'B', openWith:'[b]', closeWith:'[/b]'},
		{name:'Italic', className:"mkituItalic", key:'I', openWith:'[i]', closeWith:'[/i]'},
		{name:'Underline', className:"mkituUnderline", key:'U', openWith:'[u]', closeWith:'[/u]'},
		{separator:'---------------' },
		{name:'Picture', className:"mkituPicture", key:'P', replaceWith:'[img][![Url]!][/img]'},
		{name:'Link', className:"mkituLink", key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...'},
		{	name:'Date of the Day', 
			className:"dateoftheday", 
			replaceWith:function(h) { 
				date = new Date()
				weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
				monthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];
				D = weekday[date.getDay()];
				d = date.getDate();
				m = monthname[date.getMonth()];
				y = date.getFullYear();
				h = date.getHours();
				i = date.getMinutes();
				s = date.getSeconds();
				return (D +" "+ d + " " + m + " " + y + " " + h + ":" + i + ":" + s);
			}
		},
		{separator:'---------------' },
		{name:'Size', className:"mkituFonts", key:'S', openWith:'[size=[![Text size %]!]]', closeWith:'[/size]',
		dropMenu :[
			{name:'Big', openWith:'[size=200]', closeWith:'[/size]' },
			{name:'Normal', openWith:'[size=100]', closeWith:'[/size]' },
			{name:'Small', openWith:'[size=50]', closeWith:'[/size]' }
		]},
		{	name:'Colors',
			className:'colors',
			openWith:'[color=[![Color]!]]',
			closeWith:'[/color]',
				dropMenu: [
					{name:'Yellow',	openWith:'[color=yellow]', 	closeWith:'[/color]', className:"col1-1" },
					{name:'Orange',	openWith:'[color=orange]', 	closeWith:'[/color]', className:"col1-2" },
					{name:'Red', 	openWith:'[color=red]', 	closeWith:'[/color]', className:"col1-3" },

					{name:'Blue', 	openWith:'[color=blue]', 	closeWith:'[/color]', className:"col2-1" },
					{name:'Purple', openWith:'[color=purple]', 	closeWith:'[/color]', className:"col2-2" },
					{name:'Green', 	openWith:'[color=green]', 	closeWith:'[/color]', className:"col2-3" },

					{name:'White', 	openWith:'[color=white]', 	closeWith:'[/color]', className:"col3-1" },
					{name:'Gray', 	openWith:'[color=gray]', 	closeWith:'[/color]', className:"col3-2" },
					{name:'Black',	openWith:'[color=black]', 	closeWith:'[/color]', className:"col3-3" }
				]
		},
		{separator:'---------------' },
		{name:'Bulleted list', className:"mkituListB", openWith:'[list]\n', closeWith:'\n[/list]'},
		{name:'Numeric list', className:"mkituListN", openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]'}, 
		{name:'List item', className:"mkituListI", openWith:'[*] '},
		{separator:'---------------' },
		{name:'Quotes', className:"mkituQuotes", openWith:'[quote]', closeWith:'[/quote]'},
		{name:'Code', className:"mkituCode", openWith:'[code]', closeWith:'[/code]'}, 
		{separator:'---------------' },
		{name:'Clean', className:"clean", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } }
		
	]
}