banner_rozetka728x90v4 = {
	qnt: 5,
	timer: undefined,
	delayAnim: 260,
	delay: 2000,
	autostop: false,
	autostop_delay: 28050,
	getElementsByClass: function(searchClass, node, tag) {
	var classElements = new Array();
		if (node==null)
			node = document;
		if (tag==null)
			tag = '*';
		var els = node.getElementsByTagName(tag);
		var elsLen = els.length;
		var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
		for (var i = 0, j = 0; i<elsLen; i++) {
			if (pattern.test(els[i].className)) {
				classElements[j] = els[i];
				j++;
			}
		}
		return classElements;
	},
	parent: function(node) {
		return node.parentNode;
	},
	prev: function(node) {
		node = node.previousSibling;
		return (node && node.nodeType!=1) ? this.prev(node) : node;
	},
	next: function(node) {
		node = node.nextSibling;
		return (node && node.nodeType!=1) ? this.next(node) : node;
	},
	firstChild: function(node) {
		node = node.firstChild;
		return (node && node.nodeType!=1) ? this.next(node) : node;
	},
	countChilds: function(node) {
		var r = 0, c = node.childNodes;
		for (var i = 0; i<c.length; i++)
			if (c[i].nodeType==1) r++;
			return r;
	},
	childrens: function(node) {
		var r = [], c = node.childNodes;
		for (var i = 0; i<c.length; i++)
			if (c[i].nodeType==1) r.push(c[i]);
			return r;
	},
	mytimepause: function(){
		setTimeout(function() {
		}, 500);
	},
	animate: function(obj, type, newVal, time, callback) {
		newVal = parseInt(newVal);
		var curVal;
		switch (type) {
			case 'left':
				curVal = obj.offsetLeft;
				break;
			case 'opacity':
				curVal = (obj.style.opacity) ? parseFloat(obj.style.opacity)*100 : parseInt(obj.style.filter.replace(/\D/g, ''));
				break;
		}
		var step = 0;

		function doAnimation() {
			if (step==time) {
				switch (type) {
					case 'left':
						obj.style.left = newVal + 'px';
						break;
					case 'opacity':
						if (!document.all){
							obj.style.opacity = newVal/100;
							break; 
						}
				}
				if (callback!==undefined){
					callback();
				}
			}
			if (step<=time) {
				var v = Math.round(curVal + ((newVal - curVal)/time)*step);
				switch (type) {
					case 'left':
						obj.style.left = v + 'px';
						break;
					case 'opacity':
						if (document.all) {
							obj.style.display = newVal>0 ? 'block' : 'none';
						} else {
							obj.style.opacity = v/100;
						}
						break;
				}
				step += 5;
				setTimeout(doAnimation, 10);
			}
		}
		doAnimation();
	},
	nextBlock: function() {
		var $this = banner_rozetka728x90v4;

		if($this.animating){
			return false;
		}
		$this.animating = true;

		var current = $this.cur + 1;
		$this.cur++;

		if (current>=$this.items.length){
			current = 0;
			$this.cur = 0;
		}

		var oldItem = $this.items[current];
		var newItem = $this.items[(current + $this.qnt)>=$this.items.length ? (current + $this.qnt)%$this.qnt : (current + $this.qnt)];

		$this.animate(oldItem, 'opacity', 0, $this.delayAnim, function() {

			oldItem.style.display = 'none';
			newItem.style.display = 'block';

			$this.animate(newItem, 'opacity', 100, $this.delayAnim, function(){
				$this.animating = false;
				if(!$this.active || $this.pause){
					return false;
				}
				$this.timer = setTimeout($this.nextBlock, $this.delay);
			});
		});
	},
	init: function() {
		var $this = banner_rozetka728x90v4;
		var block = $this.getElementsByClass('rozetka728x90v4_block', null, 'div');
		var item = $this.getElementsByClass('rozetka728x90v4_item', null, 'div');
		for (var i = 0; i<item.length; i++) {
			var price = $this.getElementsByClass('tm_price', item[i], 'div')[0];
			var oldprice = $this.getElementsByClass('tm_oldprice', item[i], 'div')[0];
			var discount = $this.getElementsByClass('tm_discount', item[i], 'div')[0];
			if (i<$this.qnt) {
				if (!document.all)
					item[i].style.opacity = 1;
					item[i].style.display = 'block';
			} else {
				if (!document.all)
					item[i].style.opacity = 0;
					item[i].style.display = 'none';
			}
            if(price.innerHTML==''){
                price.style.display='none';
            }
            else{
                var str = price.innerHTML;                
				str=str.replace("\u0433\u0440\u043D.", "<span class='sm'>\u0433\u0440\u043D</span>");
				price.innerHTML=str.replace("\u043E\u0442", "<span class='sm'>\u043E\u0442</span>");
            }
			if(oldprice.innerHTML==''){
				oldprice.style.display='none';
			}
			else{
				var str = oldprice.innerHTML;
				str=str.replace("\u0433\u0440\u043D.", "<span class='sm'>\u0433\u0440\u043D</span>");
				str=str.replace("\u0433\u0440\u043D", "<span class='sm'>\u0433\u0440\u043D</span>");
				oldprice.innerHTML=str.replace("\u043E\u0442", "<span class='sm'>\u043E\u0442</span>");
			}
			if(discount.innerHTML == '-0%'){
				discount.style.display='none';
			}
		}
		$this.items = item;
		$this.cur = -1;
		$this.active = true;
		$this.pause = false;
		$this.animating = false;
		$this.timer = setTimeout($this.nextBlock, $this.delay);
		var cont = $this.getElementsByClass('rozetka728x90v4_container', null, 'div');
		cont[0].onmouseover = function() {
			clearTimeout($this.timer);
			$this.pause = true;
		};
		cont[0].onmouseout = function() {
			if ($this.active) {
				clearTimeout($this.timer);
				$this.pause = false;
				$this.timer = setTimeout($this.nextBlock, $this.delay);
			}
		};

		window.onblur = function() {
			clearTimeout($this.timer);
			$this.pause = true;
		};
		window.onfocus = function() {
			if ($this.active) {
				clearTimeout($this.timer);
				$this.pause = false;
				$this.timer = setTimeout($this.nextBlock, $this.delay);
			}
		};
		if($this.autostop) {
			setTimeout(function() {
				clearTimeout($this.timer);
				$this.active = false;

				for(var i in $this.items){
					$this.mytimepause;
					$this.items[i].style.opacity = 0;
					$this.items[i].style.display = 'none';
				}

				for(var i = 0; i<$this.qnt; i++) {
					$this.mytimepause;
					var newItem = $this.items[i];
					$this.animate(newItem, 'opacity', 100, $this.delayAnim);
					$this.items[i].style.opacity = 100;
					$this.items[i].style.filter = "alpha(opacity=100)";
					$this.items[i].style.display = 'block';
				}
			}, $this.autostop_delay);

		}
	}
};
banner_rozetka728x90v4.init();