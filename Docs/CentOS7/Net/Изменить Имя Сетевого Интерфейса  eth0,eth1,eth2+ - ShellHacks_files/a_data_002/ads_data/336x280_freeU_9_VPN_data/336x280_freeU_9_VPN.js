(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"336x280_freeU_9_VPN_atlas_.png", id:"336x280_freeU_9_VPN_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"336x280_freeU_9_VPN_atlas_", frames: [[0,0,300,500],[302,0,110,169]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.phone = function() {
	this.spriteSheet = ss["336x280_freeU_9_VPN_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.socials = function() {
	this.spriteSheet = ss["336x280_freeU_9_VPN_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phone();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.4,472.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoVVgQiWAAAAiWMAAAgmTQAAiWCWAAIQrAAQCWAAAACWMAAAAmTQAACWiWAAg");
	this.shape.setTransform(68.4,137.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.9,275.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1001E").s().p("AgXAsQgMgGgHgMQgHgLAAgPQAAgNAHgLQAGgLAMgHQALgHANAAQAPAAALAGQALAHAGAMQAHAMAAAPIAAAGIhDAAQABAHAHAFQAGAFAIAAIAIgBIAJgCIAHgFIANATQgHAHgLADQgLADgLAAQgNAAgMgGgAAUgJQAAgDgCgEQgCgEgEgDQgEgCgIAAQgEAAgEACQgFADgCAEIgCAHIAlAAIAAAAg");
	this.shape.setTransform(180.4,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1001E").s().p("AgxBEIAAiEIAeAAIAAALQAHgHAHgDQAFgDAIAAQANgBAJAHQAKAGAFAKQAGAMgBAQQABAQgGAKQgFALgKAGQgJAGgNAAQgIAAgFgDQgHgEgHgHIAAAxgAgLglQgEADgEAEIAAAdQAEABAEADQAGADAFgBQAHABAGgGQAGgFAAgLQAAgLgGgGQgGgGgHAAQgFAAgGACg");
	this.shape_1.setTransform(168.8,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1001E").s().p("AgXAsQgMgGgHgMQgHgLAAgPQAAgNAHgLQAGgLAMgHQALgHANAAQAPAAALAGQALAHAGAMQAHAMAAAPIAAAGIhDAAQABAHAHAFQAGAFAIAAIAIgBIAJgCIAHgFIANATQgHAHgLADQgLADgLAAQgNAAgMgGgAAUgJQAAgDgCgEQgCgEgEgDQgEgCgIAAQgEAAgEACQgFADgCAEIgCAHIAlAAIAAAAg");
	this.shape_2.setTransform(156.7,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1001E").s().p("AgbAuQgLgFgHgHIANgSQAHAGAJACQAJACAHAAQAHAAADgCQAEgCAAgDQAAgFgEgCQgFgBgGAAIgTAAIAAgWIATAAQAHABADgDQAEgCgBgEQAAgDgEgCQgEgCgFAAQgJAAgHADQgHADgFAFIgPgSQAHgHALgFQAKgEAOAAQAWAAAMAHQAMAHAAANQAAAFgDAFQgEAFgFADQgGADgHABQAGAAAHABQAGADAEAFQAEAEAAAIQAAAJgGAGQgFAHgLADQgLADgNABQgPAAgMgEg");
	this.shape_3.setTransform(145.5,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1001E").s().p("AghBDIgEAAIgFgBIAFgcIADACIAFAAQAFAAADgBQADgBABgDIACgFIgmhgIAhAAIAUA9IAVg9IAhAAIgsBsQgDAKgHAGQgDAFgIACQgJACgIAAIgFAAg");
	this.shape_4.setTransform(135,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1001E").s().p("AgcAvQgHgEgFgHQgGgHAAgLQAAgLAGgHQAFgFAHgDQAIgDAHAAQALAAAFADQAJADAEAFIAAgLQgBgGgEgEQgGgEgHAAQgHAAgHADQgHACgGAFIgLgTQAJgIALgEQAMgDAKAAQAMAAAJADQAKAEAHAIQAGAIABAPIAAA7IgfAAIAAgKQgFAGgIADQgGADgKAAQgHAAgIgDgAgLAKQgEADAAAGQAAAFAEADQAFADAGAAIAJgCQAEgCADgDIAAgJQgDgDgEgCIgJgBQgGAAgFACg");
	this.shape_5.setTransform(123.5,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1001E").s().p("AgyBEIAAiEIAgAAIAAALQAFgHAHgDQAGgDAIAAQAMgBAKAHQAJAGAGAKQAFAMABAQQgBAQgFAKQgGALgJAGQgKAGgMAAQgIAAgFgDQgIgEgFgHIAAAxgAgKglQgGADgCAEIAAAdQACABAGADQAFADAFgBQAHABAGgGQAGgFAAgLQAAgLgGgGQgGgGgHAAQgFAAgFACg");
	this.shape_6.setTransform(112.2,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1001E").s().p("AgbA8QgLgHgHgMQgGgNAAgPQAAgWAGgQQAGgPALgIQALgJARgCQAHgBAEgDQAEgBABgCIAgAAQAAAHgDAFQgEAEgGADIgNAFIgNADQgJABgHADQgGAEgEAEQgEAEgCAFQAHgHAIgDQAHgEAIAAQANAAALAHQAKAHAGALQAFAKAAAOQAAANgGAMQgGALgMAHQgMAHgQABQgPgBgMgHgAgKgBQgFABgCAFQgDAFAAAHQAAAGADAFQACAGAFADQAEADAGAAQAGAAAFgDQAEgDADgGQADgFgBgGQABgHgDgFQgDgFgEgBQgFgDgGgBQgGABgEADg");
	this.shape_7.setTransform(99.7,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1001E").s().p("AAdAwIAAg4IgWA4IgNAAIgWg4IAAA4IggAAIAAhfIAqAAIASAyIAUgyIApAAIAABfg");
	this.shape_8.setTransform(80.7,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1001E").s().p("AgbArQgMgHgGgLQgGgMAAgNQAAgMAGgMQAGgLAMgHQAMgHAPAAQAQAAAMAHQAMAHAGALQAGAMAAAMQAAANgGAMQgGALgMAHQgMAHgQAAQgPAAgMgHgAgKgTQgEADgDAGQgDAFAAAFQAAAGADAFQADAGAEADQAEADAGAAQAGAAAFgDQAFgDACgGQACgFAAgGQAAgFgCgFQgCgGgFgDQgFgDgGAAQgGAAgEADg");
	this.shape_9.setTransform(67.2,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1001E").s().p("AgbA8QgMgHgGgMQgGgNAAgPQAAgWAGgQQAFgPAMgIQALgJARgCQAHgBAFgDQADgBAAgCIAiAAQAAAHgFAFQgDAEgGADIgNAFIgNADQgJABgHADQgGAEgFAEQgDAEgBAFQAGgHAHgDQAIgEAIAAQAOAAAKAHQAKAHAGALQAFAKAAAOQAAANgGAMQgGALgMAHQgMAHgQABQgPgBgMgHgAgKgBQgFABgCAFQgCAFgBAHQABAGACAFQACAGAFADQAFADAFAAQAHAAAEgDQAEgDADgGQADgFAAgGQAAgHgDgFQgDgFgEgBQgEgDgHgBQgFABgFADg");
	this.shape_10.setTransform(55.2,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1001E").s().p("AgBAtQgLgFgGgJQgHgJgDgLIgPAAIAAAlIgfAAIAAhfIAfAAIAAAhIAQAAQADgKAHgIQAHgIAKgEQAIgFAOAAQARAAALAHQAMAHAGALQAHAMAAAMQAAANgHAMQgGALgMAHQgLAHgRAAQgOAAgJgFgAAKgTQgEADgDAGQgCAFAAAFQAAAGACAFQADAGAEADQAFADAHAAQAHAAAEgDQAFgDADgGQACgFAAgGQAAgFgCgFQgDgGgFgDQgEgDgHAAQgHAAgFADg");
	this.shape_11.setTransform(41,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1001E").s().p("AgzAXQAEAAADgCQADgDACgGIAEgOIAGguIBRAAIAABfIggAAIAAhFIgXAAIgDAXQgDAXgJANQgLAMgWAAg");
	this.shape_12.setTransform(25.6,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1001E").s().p("AgwAwIAAhfIBAAAQAKAAAHAEQAHADADAGQADAGAAAGQAAAJgEAFQgFAGgHACQAIAAAFAGQAFAGABAJQAAAIgEAFQgDAGgHAEQgHAEgKAAgAgRAYIAbAAQADAAADgCQACgCAAgDQAAgDgCgCQgCgBgEAAIgbAAgAgRgLIAaAAQADAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgCgCgDAAIgaAAg");
	this.shape_13.setTransform(7.9,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.2,27.9);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAmBdIAAhyIhMByIgvAAIAAi5IAwAAIAABsIBJhsIAyAAIAAC5g");
	this.shape.setTransform(192.6,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBdIgvhGIgNAPIAAA3IgwAAIAAi5IAwAAIAABNIA4hNIA7AAIhJBXIBNBig");
	this.shape_1.setTransform(173.5,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhQBdIAAi5IBnAAQASAAANAHQAMAHAGALQAGALAAAMQgBALgEAJQgEAJgHAGQgIAFgIACQAKACAIAEQAIAHAEAJQAFAKAAAMQABAOgHALQgGAMgMAHQgMAHgSAAgAghA0IAvAAQAJAAAEgEQAFgFABgIQgBgHgFgFQgEgEgJAAIgvAAgAghgUIAtAAQAHAAAFgFQAEgEAAgHQAAgHgEgEQgFgEgHAAIgtAAg");
	this.shape_2.setTransform(153.8,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyBTQgWgMgNgWQgNgVAAgcQAAgbANgWQANgVAWgNQAXgMAbAAQAcAAAXAMQAXANAMAVQANAWAAAbQAAAcgNAVQgMAWgXAMQgXANgcAAQgbAAgXgNgAgZguQgMAIgGAMQgGAMgBAOQABAOAGANQAGAMAMAHQALAHAOABQAPgBAMgHQALgHAGgMQAGgNABgOQgBgOgGgMQgGgMgLgIQgMgGgPAAQgOAAgLAGg");
	this.shape_3.setTransform(132.7,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhOBdIAAi5IBcAAQAVAAAPAJQAOAIAHAOQAHAOABARQgBARgHANQgHANgOAIQgPAJgVAAIgrAAIAAA/gAgdgKIAkAAQAKAAAHgFQAFgFABgKQgBgKgFgFQgHgFgKAAIgkAAg");
	this.shape_4.setTransform(113.1,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAmBdIAAhyIhNByIguAAIAAi5IAwAAIAABsIBJhsIAyAAIAAC5g");
	this.shape_5.setTransform(92.6,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZBdIgvhGIgNAPIAAA3IgwAAIAAi5IAwAAIAABNIA4hNIA7AAIhJBXIBNBig");
	this.shape_6.setTransform(73.6,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyBTQgWgMgNgWQgNgVAAgcQAAgbANgWQANgVAWgNQAXgMAbAAQAdAAAWAMQAXANAMAVQANAWAAAbQAAAcgNAVQgMAWgXAMQgWANgdAAQgbAAgXgNgAgaguQgLAIgGAMQgGAMgBAOQABAOAGANQAGAMALAHQAMAHAOABQAPgBALgHQAMgHAGgMQAGgNABgOQgBgOgGgMQgGgMgMgIQgLgGgPAAQgOAAgMAGg");
	this.shape_7.setTransform(52.2,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhaA0QAIAAAHgEQAGgFAFgLQAFgMADgUIALhdICIAAIAAC4IgvAAIAAiPIguAAIgGA3QgEAcgHASQgIASgKAKQgLAJgNAEQgOAFgPAAg");
	this.shape_8.setTransform(30.2,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhNBdIAAi5ICPAAIAAAqIhgAAIAAAYIAtAAQAVAAAOAIQAOAIAIAMQAGAOAAAQQAAARgGAOQgIANgOAIQgOAIgVABgAgeAzIAoAAQAIAAAGgFQAGgFAAgJQAAgIgGgFQgGgFgIAAIgoAAg");
	this.shape_9.setTransform(11.4,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.3,37.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAzBuIAAgjIhmAAIAAAjIgwAAIAAhJQAJgCAHgEQAGgFAEgLQAFgKADgTIALhfICJAAIAACOIARAAIAABNgAgSgLQgBAOgGALQgFAMgIAHIBJAAIAAhkIgtAAg");
	this.shape.setTransform(94.4,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxBTQgXgMgNgWQgNgVgBgcQABgbANgWQANgVAXgNQAWgMAbAAQAdAAAWAMQAWANANAVQANAWABAbQgBAcgNAVQgNAWgWAMQgWANgdAAQgbAAgWgNgAgaguQgLAIgGAMQgGAMAAAOQAAAOAGANQAGAMALAHQAMAHAOABQAPgBALgHQAMgHAGgMQAGgNAAgOQAAgOgGgMQgGgMgMgIQgLgGgPAAQgOAAgMAGg");
	this.shape_1.setTransform(72.4,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAoBdIgog/IgnA/Ig5AAIBBheIg9hbIA5AAIAjA7IAkg7IA5AAIg9BbIBBBeg");
	this.shape_2.setTransform(51.8,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhOBdIAAi5ICQAAIAAAqIhfAAIAAAYIAtAAQAUAAAOAIQAOAIAHAMQAIAOAAAQQAAARgIAOQgHANgOAIQgOAIgUABgAgdAzIAmAAQAKAAAFgFQAGgFAAgJQAAgIgGgFQgFgFgKAAIgmAAg");
	this.shape_3.setTransform(33.4,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyBTQgWgMgNgWQgNgVAAgcQAAgbANgWQANgVAWgNQAXgMAbAAQAdAAAWAMQAXANAMAVQANAWAAAbQAAAcgNAVQgMAWgXAMQgWANgdAAQgbAAgXgNgAgaguQgLAIgGAMQgGAMgBAOQABAOAGANQAGAMALAHQAMAHAOABQAPgBAMgHQALgHAGgMQAGgNABgOQgBgOgGgMQgGgMgLgIQgMgGgPAAQgOAAgMAGg");
	this.shape_4.setTransform(12.6,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.2,37.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAdIAAgaIgYAAIAAgGIAYAAIAAgYIAHAAIAAAYIAYAAIAAAGIgYAAIAAAag");
	this.shape.setTransform(12.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAhQgHgMAAgVQAAgVAHgKQAHgMANAAQANAAAIAMQAHALAAAUQAAAWgHALQgHALgOgBQgMABgIgLgAgNgaQgEAJAAARQAAASAEAJQAFAIAIAAQAJABAFgKQAEgIAAgSQAAgRgEgJQgFgIgJAAQgIAAgFAIg");
	this.shape_1.setTransform(5.5,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,20.4);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E8ECF6","#FFFFFF","#E8ECF6"],[0,0.494,1],-120,0,120,0).s().p("AyKfPQglABAAgwMAAAg9AQAAguAlgBMAkUAAAQAmABAAAuMAAAA9AQAAAwgmgBg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAgIgagvIAAAAIABARIAAAeIgNAAIAAg+IARAAIAaAtIAAAAIAAgQIAAgdIAMAAIAAA+g");
	this.shape.setTransform(20.3,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAgIAAg+IAVAAQAKAAAGAEQAGAGAAAJQAAALgHADQgGAGgKgBIgGAAIAAAYgAgHgBIAEAAQAFABADgDQADgDAAgEQAAgFgDgDQgCgCgEAAIgGAAg");
	this.shape_1.setTransform(14.1,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAgIgWg+IAOAAIAMAjIACAJIAAAGIADgPIAMgjIAOAAIgWA+g");
	this.shape_2.setTransform(8.2,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1001E").s().p("Ah7BHQgUgBAAgTIAAhlQAAgTAUgBID3AAQAUABAAATIAABlQAAATgUABg");
	this.shape_3.setTransform(14.5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.9,16.3);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAJYQD4AACwiwQCwiwAAj4QAAj3iwiwQiwiwj4AAQj3AAiwCwQiwCwAAD3QAAD4CwCwQCwCwD3AAg");
	this.shape.setTransform(60.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,122,122);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAK8QEiAADNjNQDNjNAAkiQAAkhjNjNQhhhhh+g1QiCg3iOAAQiNAAiCA3Qh+A1hhBhQjNDNAAEhQAAEiDNDNQDNDNEhAAg");
	this.shape.setTransform(70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,142,142);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnxSbQjmhhiwixQiyixhhjmQhljuAAkEQAAkCBljuQBijmCxixQCwixDmhiQDuhlEDAAQEDAADvBlQDlBiCyCxQCxCxBhDmQBkDtAAEDQAAEEhkDuQhhDmixCxQiyCxjlBhQjuBkkEAAQkDAAjuhkg");
	mask.setTransform(128,128);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E5E5E5"],[0,1],0,-125.9,0,116.1).s().p("Az+T/MAAAgn9MAn9AAAMAAAAn9g");
	this.shape.setTransform(128,128);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,256,256);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKFKVQAAiugjieQgming+hFQhGhNhTBMQiaCOhiBDQh1BUh5AkQh/AnirACQikABkEgfQFxgSDth1QB2g8Atg3QgyAYhpANQjRAYkQg9QF0gqDbiVQCuh5AdiVQARhWhNhWQhDhLiFhAQh7g7iQghQiPghhwAGQGXiuF1BpQCxAyClB4QAGgQAMgZQAXgvAbgpQBXiDBdgKIAZgKQAdgSAPgrQAAARADAUQAGApATAUQBWBFgzDhQgSBQggBTQgcBGgSAbQD8GuiSHDQgtCNhQB+QgnBAgfAiQAmhrAAi1g");
	mask.setTransform(85.6,98.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#53A3FD","#3041B8"],[0,1],0,-100.2,0,84.9).s().p("AvQPHIAA+OIehAAIAAeOg");
	this.shape.setTransform(97.8,96.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.6,171.3,190);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmkCkQi0hFhRhiQBcBRCyA7QCyA7ChAAQDnAADJh2QDChxBxjEIAIAbIAHAcQh8C6jEBtQjLBxjnAAQirAAixhEg");
	mask.setTransform(68.2,23.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#53A3FD","#3041B8"],[0,1],0,-166.6,0,18.5).s().p("AqpDoIAAnPIVTAAIAAHPg");
	this.shape.setTransform(68.2,23.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.4,46.4);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglfBCuMAAAiFbMBK+AAAMAAACFbg");
	mask.setTransform(240,427);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al1FyIAAriILsAAIAALig");
	this.shape.setTransform(240.5,331);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203,294,75,74);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#447AE0").s().p("AybD/QhlAAhIhIQhIhIAAhmIAAgSQAAhlBIhIQBIhHBlgBMAk2AAAQBmABBIBHQBIBIAABlIAAASQAABmhIBIQhIBIhmAAg");
	this.shape_1.setTransform(142.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,51);


(lib.Symbol13copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.ClipGroupcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglfBCuMAAAiFbMBK+AAAMAAACFbg");
	mask.setTransform(240,427);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak6FyIAAriIJ0AAIAALig");
	this.shape.setTransform(240.5,331);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(209,294,63,74);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(-46.4,18.8,1,1,0,0,0,53.6,18.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.6,alpha:1},5,cjs.Ease.get(0.94)).to({x:53.6},13,cjs.Ease.get(0.94)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,0,107.2,37.6);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(202.6,18.8,1,1,0,0,0,102.6,18.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:112.6,alpha:1},5,cjs.Ease.get(1)).to({x:102.6},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,0,205.3,37.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(94,64,1,1,0,0,0,94,14);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24,alpha:1},4,cjs.Ease.get(1)).to({y:14},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,50,188.2,27.9);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol21("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(205.3,45.7,1,1,0,0,0,94,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105));

	// Layer 2
	this.instance_1 = new lib.Symbol22("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.3,18.8,1,1,0,0,0,102.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105));

	// Layer 1
	this.instance_2 = new lib.Symbol23("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.7,18.8,1,1,0,0,0,53.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,0,516.9,109.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(197,228,3.705,3.705,0,0,0,14.5,8.2);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.4,186.6,1,1,0,0,0,68.2,23.2);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144.5,128.2,1,1,0,0,0,97.8,96.8);

	this.instance_3 = new lib.ClipGroup_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(128,128,1,1,0,0,0,128,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,257.8);


(lib.phone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.socials();
	this.instance.parent = this;
	this.instance.setTransform(23,59,0.836,0.836);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4E4E4").s().p("ApiRDMAAAgiFITFAAMAAAAiFg");
	this.shape.setTransform(68.4,141.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EE778").s().p("ApiRDMAAAgiFITFAAMAAAAiFg");
	this.shape_1.setTransform(68.4,141.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.7,138.1,1,1,0,0,0,68.4,137.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.7,137.2,1,1,0,0,0,141.7,236.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-99,283.4,472.4);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EglfBCuMAAAiFbMBK+AAAMAAACFbg");
	mask_1.setTransform(240,427);

	// Layer 3
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(240,333,1,1,0,0,0,70.5,70.5);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(240,333,1,1,0,0,0,60.5,60.5);
	this.instance_1.alpha = 0.602;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AAAH0QDOAACTiTQCTiSAAjPQAAjNiTiTQiTiTjOAAQjOAAiSCTQiTCTAADNQAADPCTCSQCSCTDOAAg");
	this.shape_1.setTransform(240,333);

	this.instance.mask = this.instance_1.mask = this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(169.5,262.5,141,141);


(lib.Symbol19copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13copy2();
	this.instance.parent = this;
	this.instance.setTransform(28.6,84.5,0.023,0.282,0,0,0,150.1,300);

	this.instance_1 = new lib.Symbol13copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,84.5,0.07,0.282,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.1,169);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAAE/QhlABhrgUIgYgFQgOgCgJgLQgJgLABgOIAAkJQgBgOAJgLQAJgLAOgCIAEgBQDkgsDmAsIADABQAOACAJALQAJALAAAOIAAEJQAAAOgJALQgJALgOACIgYAFQhpAUhkAAIgEgBgAhEBTQgHABgEAFIgTATQgFAGAAAHQgBAHAFAFIBDBQQAEAGAIAAQAJAAAEgGIBrh8QAFgFgBgHQAAgHgFgFIAAgBIgTgTQgFgFgGgBQgHAAgFAFIhNBJIglgeQgEgEgGAAIgBAAgAijheIAAgyQAAhIAygzQAygzBFgBIAHAAQAiAAAfAOQAgANAYAZQAYAYAOAgQANAhAAAiIAAAPQAAARgNALQgMALgQgCIgBAAQgOgBgJgLQgJgKAAgPIAAgPQAAgpgdgdQgdgdgoAAIgHAAQgmAAgdAdQgdAdAAApIAAA3QgpgEgggBg");
	mask_1.setTransform(240.5,331);

	// Layer 3
	this.instance = new lib.ClipGroupcopy();
	this.instance.parent = this;
	this.instance.setTransform(240,427,1,1,0,0,0,240,427);

	this.instance.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214,299,53,64);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhEE/QhkABhmgTIgXgFQgNgCgJgKQgJgLABgNIAAj9QgBgLAJgLQAJgKANgCIADgBQDegpDbApIADABQANACAJALQAJAKAAALIAAD9QAAANgJALQgJAKgNACIgXAFQhhAThdAAIgJgBgAgrDSQAHAHALAAQAKAAAHgHQAHgHAAgKQAAgLgHgHIgjgkIAjgjQAHgHAAgKQAAgLgHgHQgHgHgKAAQgLAAgHAHIgjAjIgkgjQgHgHgKAAQgLAAgHAHQgHAHAAALQAAAKAHAHIAjAjIgjAkQgHAHAAALQAAAKAHAHQAHAHALAAQAKAAAHgHIAkgjgAgNhoIAAgwQAAhFAvgxQAwgwBFgBIAGAAQAhAAAfANQAfANAYAXQAXAYANAfQANAeAAAhIAAAPQAAAQgMAKQgMALgQgCIgBAAQgNgBgJgKQgJgKAAgOIAAgPQAAgngcgcQgcgcgnAAIgHAAQgnAAgcAcQgcAcAAAnIAAA1IhFgFg");
	mask_1.setTransform(240.5,331);

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(240,427,1,1,0,0,0,240,427);

	this.instance.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(208,299,65,64);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(69.8,183,0.525,0.525,0,0,0,242.1,421.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVE9IgBgBIgBAAIABgBIABgBIAVABIAPgBIABABIABABIgBAAIgBABIgPAAIgVAAgAA3E5IAAgBIAAgBIABgBQAUgDATgGIABAAIABABIAAABIgBAAQgTAGgVAEIAAAAIgBAAgAg9E4QgUgEgTgGIAAAAIgBgBIABgBIABAAQATAGATADIABABIAAABIAAABIgBAAIAAAAgACEEhIgBgBIAAgBIABgBQASgIARgLIABAAIABAAIAAABIgBABQgRALgSAJIAAAAIgBAAgAiJEfQgSgJgRgLIAAgBIAAgBIABAAIABAAQAQALASAIIABABIAAABIgBABIAAAAIgBAAgADID2IgBgBIAAAAIAAgBIAXgWIAGgGIABAAIABAAIAAABIAAABIgGAGIgYAWIAAAAIAAAAgAjLDzIgVgTIgKgLIgBgBIABgBIABAAIABAAIAKALIAVATIAAABIAAABIgBAAIAAAAIgBAAgAD/C8IgBgBIAAgBQAMgQAKgRIAAgBIABABIABAAIAAABQgKARgMAQIgBABIAAAAIAAAAgAkCC3IgBgBQgMgQgJgRIAAgBIABAAIABgBIAAABQAJARAMAQIAAABIAAABIgBAAIAAAAgAEmB3IgBgBIAAgBQAHgSAFgUIABAAIABgBIAAABIABABQgFATgHATIgBABIgBAAIAAAAgAkoBzIAAgBQgIgTgEgTIAAgBIABgBIABABIABAAQAEAUAHASIAAABIgBABIAAAAIgBAAgAE6ApIgBgBIgBgBQADgTAAgUIAAAAIABAAIABAAIAAAAQABAUgDAUIAAABIgBAAIAAAAgAk6AlIAAgBQgDgSAAgSIAAgEIABgBIABAAIABAAIAAABIAAAEQAAASACASIAAABIgBAAIAAAAIgBAAgAE6gdIAAgBQgCgVgEgTIAAgBIAAgBIABABIABAAQAFAUABAVIAAABIgBAAIAAAAIgBAAgAk4gqIgBAAIAAgBQACgUAFgTIABgBIABAAIAAAAIABABQgFATgDAUIAAABIgBAAIAAAAgAEphrIAAgBQgHgSgKgSIAAgBIABgBIAAAAIABABQAKASAHASIAAABIgBABIAAAAIgBAAgAklh2IAAgBIAAgBQAHgTAKgRIABAAIABAAIAAABIAAABQgKARgHASIgBABIAAAAIgBAAgAEEiyIgBAAQgLgQgOgPIAAgBIABgBIAAAAIABAAQAOAPALAQIABABIgBABIgBAAIAAAAgAj+i7IAAgBIAAgBQAMgPANgOIABgBIABABIAAABIAAAAQgNAOgMAQIgBAAIAAAAIgBAAgADPjsQgQgOgRgLIAAgBIAAgBIABgBIABABQARALAQAOIAAABIAAABIgBAAIAAAAIgBAAgAjDj2IgBgBIAAgBIAAAAQAQgNARgKIABgBIABABIAAABIAAABQgSAKgPANIgBAAIAAAAgACMkZQgSgJgTgHIAAAAIgBgBIABgBIABAAQATAGASAKIABAAIAAABIgBABIAAAAIgBAAgAiAkgIgBAAIAAgBIABgBQASgIAUgGIABABIABAAIgBABIAAABQgUAFgSAIIAAAAIgBAAgABBkzQgTgEgVgCIgBAAIAAgBIAAgBIABAAQAVABATAEIABABIAAABIAAABIgBAAIAAAAgAgyk2IgBgBIAAgBIABAAQAUgDAVgBIABAAIABABIgBABIgBAAQgVABgUADIAAAAIAAAAg");
	this.shape.setTransform(68.8,136.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F84347").s().p("ApiRDMAAAgiFITFAAMAAAAiFg");
	this.shape_1.setTransform(68.4,141.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.4,137.6,1,1,0,0,0,68.4,137.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.6,135.2,1,1,0,0,0,141.7,236.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-101,283.4,511.2);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAhQgLgMAAgVQAAgUALgLQAKgMATAAQAUAAAKAMQALALAAAUQAAAVgLAMQgLAKgTABQgTgBgKgKgAgPgUQgGAHAAANQAAAOAGAHQAGAHAJAAQAVAAAAgcQAAgbgVAAQgJgBgGAIg");
	this.shape.setTransform(178.5,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAqIAAglIghAAIAAAlIgSAAIAAhTIASAAIAAAhIAhAAIAAghIASAAIAABTg");
	this.shape_1.setTransform(168.9,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgYAAIAAgPIBBAAIAAAPIgZAAIAABEg");
	this.shape_2.setTransform(160.8,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWArIgHgVIgeAAIgGAVIgUAAIAfhVIAVAAIAfBVgAgKAHIAVAAIgKgeIgBgFIgKAjg");
	this.shape_3.setTransform(153.9,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdArIgJgBIAAgPIAHABQACAAADgDQABgDACgHIAEgYIAFghIA1AAIAABUIgTAAIAAhFIgUAAIAAAIQgDAcgDAMQgDAMgFAFQgGAFgHAAIgCAAg");
	this.shape_4.setTransform(144.6,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgTAAIAAhTIBDAAIAABTg");
	this.shape_5.setTransform(136,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAhQgKgMAAgVQAAgMAFgKQAFgJAKgGQAJgFAKgBQANAAANAHIgGAOIgKgDQgFgCgFAAQgIAAgGAIQgGAHAAAMQAAAdAUgBQAJAAANgEIAAAPQgKAFgNAAQgRgBgLgKg");
	this.shape_6.setTransform(127.7,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAqIAAhTIAvAAIAAAPIgdAAIAAASIAcAAIAAANIgcAAIAAAWIAdAAIAAAPg");
	this.shape_7.setTransform(120.5,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIA1AAIAAAPIgjAAIAAARIAHAAQAQAAAJAHQAJAFAAAMQAAAbgiAAgAgLAbIAGAAQAIAAAEgDQAEgDAAgGQAAgFgEgDQgEgDgJAAIgFAAg");
	this.shape_8.setTransform(113.3,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAAAgIAHAAQAQAAAJAHQAJAFAAAMQAAAbgiAAgAgLAbIAGAAQAIAAAEgDQAEgDAAgGQAAgFgEgDQgEgDgJAAIgFAAg");
	this.shape_9.setTransform(102.4,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgXAAIAAgPIBAAAIAAAPIgZAAIAABEg");
	this.shape_10.setTransform(94.7,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWAqIAAgpIABgWIAAAAIgnA/IgWAAIAAhTIARAAIAAApIAAAJIgBANIAng/IAWAAIAABTg");
	this.shape_11.setTransform(86.1,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAbAAQARAAAIAFQAJAFAAALQAAAIgEAFQgEAFgGABIAAAAQAJABADAEQAEAFAAAIQAAAMgJAHQgIAGgPAAgAgMAbIAMAAQAFAAAEgDQAEgCAAgGQAAgLgOAAIgLAAgAgMgHIAKAAQAGAAADgDQAEgCAAgFQAAgFgEgCQgEgCgGAAIgJAAg");
	this.shape_12.setTransform(77.2,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAhQgLgMAAgVQAAgUALgLQAKgMATAAQAUAAAKAMQALALAAAUQAAAVgLAMQgLAKgTABQgTgBgKgKgAgPgUQgFAHgBANQABAOAFAHQAGAHAJAAQAVAAAAgcQAAgbgVAAQgJgBgGAIg");
	this.shape_13.setTransform(68,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARAqIAAglIghAAIAAAlIgSAAIAAhTIASAAIAAAhIAhAAIAAghIASAAIAABTg");
	this.shape_14.setTransform(58.5,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWArIgHgVIgeAAIgGAVIgUAAIAfhVIAVAAIAfBVgAgKAHIAVAAIgKgeIgBgFIgKAjg");
	this.shape_15.setTransform(49.6,18.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgYAAIAAgPIBBAAIAAAPIgZAAIAABEg");
	this.shape_16.setTransform(42.8,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAhQgKgMAAgVQAAgMAFgKQAFgJAKgGQAJgFAKgBQANAAANAHIgGAOIgKgDQgFgCgFAAQgIAAgGAIQgGAHAAAMQAAAdAUgBQAJAAANgEIAAAPQgKAFgNAAQgRgBgLgKg");
	this.shape_17.setTransform(35.5,18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiApIAAgPQAFACAIAAQAFAAADgDQADgCACgFIgeg8IATAAIAUAuIAAAAIABgDIASgrIATAAIgaA7QgGALgEAFQgDAFgGADQgGACgIAAQgIAAgGgCg");
	this.shape_18.setTransform(27.6,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(66));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AtYC5QhJAAg1g0Qg0g1AAhJIAAgNQAAhJA0g0QA1g1BJAAIaxAAQBJAAA0A1QA1A0AABJIAAANQAABJg1A1Qg0A0hJAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:103.5,y:18.5}).wait(52));

	// Layer 3
	this.instance = new lib.Symbol19copy2();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,18.5,1,1.074,0,21.3,0,16,84.5);
	this.instance.alpha = 0.238;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:235.5,alpha:0.5},15,cjs.Ease.get(1)).wait(37));

	// Layer 1
	this.instance_1 = new lib.ClipGroup_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.5,18.5,0.726,0.726,0,0,0,142.5,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,37.1);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222222").s().p("AgqA/QgPgQAAgaIAAhiIASAAIAABjQAAATAKALQAKAKATAAQATAAALgKQALgLAAgTIAAhjIASAAIAABiQgBAbgQAPQgPAPgbAAQgbAAgPgPg");
	this.shape.setTransform(126.7,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#222222").s().p("AggAsQgQgPABgcQgBgaAOgRQAOgRAWAAQAVABAMAOQANAOABAYIAAAIIhOAAQAAAVAKAKQAKAMAPAAQATgBASgHIAAAPIgRAGQgJABgLAAQgXAAgPgPgAgTgiQgIAIgCAQIA7AAQAAgQgIgJQgHgJgOAAQgMAAgIAKg");
	this.shape_1.setTransform(112.8,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#222222").s().p("AghAsQgPgPAAgcQAAgaAOgRQAOgRAVAAQAWABANAOQAMAOAAAYIAAAIIhNAAQAAAVAKAKQAKAMAQAAQASgBATgHIAAAPIgSAGQgIABgMAAQgYAAgPgPgAgTgiQgJAIgBAQIA6AAQAAgQgHgJQgHgJgOAAQgMAAgIAKg");
	this.shape_2.setTransform(100.7,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#222222").s().p("AggA6IAAhyIAPAAIACAWIABAAQAGgMAIgFQAIgHALABIAOAAIgDARIgMgBQgOAAgIALQgKALAAARIAAA8g");
	this.shape_3.setTransform(91.4,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#222222").s().p("AgpBNIAAiZIBTAAIAAAQIhBAAIAAA5IA+AAIAAAOIg+AAIAABCg");
	this.shape_4.setTransform(81.5,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbAiIAAg3IgBADIgEAKIgSAqIgHAAIgSgqIgFgNIAAA3IgJAAIAAhDIANAAIASAqIAEAPIABgGIADgHIATgsIANAAIAABDg");
	this.shape_5.setTransform(174.5,57.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAeQgHgFAAgKQAAgTAhgBIALgBIAAgEQAAgIgDgEQgEgEgHAAQgIAAgLAFIgDgIIALgEIALgCQAMAAAHAGQAFAFAAANIAAAtIgHAAIgDgKIAAAAQgFAHgGACQgFADgFAAQgLAAgFgGgAAGAAQgLABgFADQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAHgGQAFgFAAgKIAAgGg");
	this.shape_6.setTransform(165.9,57.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAiIAAg6IgWAAIAAgJIA2AAIAAAJIgYAAIAAA6g");
	this.shape_7.setTransform(159.5,57.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUAxIAAgrIAAgGIAAgJIgjA6IgOAAIAAhEIAKAAIAAAqIAAAMIAAADIAkg5IANAAIAABEgAgQghQgFgEgBgLIAKAAQABAHADADQACACAGAAQAGAAADgDQAEgCAAgHIAKAAQgBAKgFAFQgGAFgLAAQgKAAgGgFg");
	this.shape_8.setTransform(152.2,55.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAeQgFgFAAgKQAAgTAfgBIAMgBIAAgEQAAgIgEgEQgDgEgIAAQgHAAgKAFIgDgIIALgEIAKgCQANAAAFAGQAHAFAAANIAAAtIgIAAIgCgKIgBAAQgFAHgFACQgGADgGAAQgKAAgGgGgAAHAAQgMABgFADQgFAEAAAHQAAAGADADQADADAHAAQAIAAAFgGQAGgFAAgKIAAgGg");
	this.shape_9.setTransform(144.3,57.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAaQgIgJAAgRQAAgQAJgJQAIgKAOAAIAKABIAIADIgEAJIgHgCIgIgBQgTAAAAAZQAAANAFAGQAFAHAJAAQAIAAAKgDIAAAJQgHAEgLAAQgNAAgJgKg");
	this.shape_10.setTransform(137.9,57.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbAiIAAg3IgBADIgEAKIgSAqIgHAAIgSgqIgFgNIAAA3IgJAAIAAhDIANAAIASAqIAEAPIABgGIADgHIATgsIANAAIAABDg");
	this.shape_11.setTransform(126.4,57.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAcAiIAAhDIALAAIAABDgAgmAiIAAhDIALAAIAAAcIATAAQALAAAHAFQAGADAAAKQAAALgHAFQgGAFgMAAgAgbAZIASAAQAPAAAAgLQAAgGgEgDQgCgDgJAAIgSAAg");
	this.shape_12.setTransform(116.6,57.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAnQgIgLAAgVQAAgVAHgNQAHgNAOgDIAfgGIABAJQgWAEgIACQgJACgEAIQgFAIAAANIABAAQAEgFAGgDQAGgDAFAAQAMAAAIAIQAHAHAAAOQAAARgIAJQgJAJgOAAQgNAAgJgLgAgFgDQgFACgEABIgFAHQAAARAFAIQAGAJAJAAQATAAAAgZQAAgVgRAAQgDAAgFACg");
	this.shape_13.setTransform(107.7,55.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAbQgJgIAAgQIgSAAIAAAfIgMAAIAAhDIAMAAIAAAdIASAAQABgPAIgIQAGgIANAAQAOAAAJAKQAHAKAAAPQAAAQgHAKQgIAKgPAAQgOAAgFgJgAAAgTQgDAHAAAMQAAANADAHQAEAHAKAAQAKAAAFgHQAFgHgBgNQABgMgFgHQgFgHgKAAQgKAAgEAHg");
	this.shape_14.setTransform(98.5,57.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAiIAAgIIADAAQAIAAAEgPQAEgNADggIAnAAIAABEIgLAAIAAg7IgUAAQgBAXgDALQgDANgFAGQgFAHgHAAIgGgBg");
	this.shape_15.setTransform(88.7,57.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPAiIgegiIAAAiIgLAAIAAhDIALAAIAAAhIAcghIAMAAIgdAhIAfAig");
	this.shape_16.setTransform(79.1,57.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAiIAAg6IgjAAIAAA6IgLAAIAAhDIA5AAIAABDg");
	this.shape_17.setTransform(194.7,39.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAwIAAgHIAIAAQALAAAEgMIAEgKIgchEIALAAIAQAoQAEALAAAGIAAAAIAEgJIARgwIALAAIgeBNQgCAMgGAFQgGAFgJAAQgFAAgEgCg");
	this.shape_18.setTransform(187.3,41);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAiIAAg6IgXAAIAAgJIA2AAIAAAJIgWAAIAAA6g");
	this.shape_19.setTransform(181,39.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAaQgIgJAAgRQAAgQAJgJQAIgKAOAAIAKABIAIADIgEAJIgHgCIgIgBQgTAAAAAZQAAANAFAGQAFAHAJAAQAIAAAKgDIAAAJQgHAEgLAAQgNAAgJgKg");
	this.shape_20.setTransform(175,39.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgPAfQgIgEgEgIQgDgJAAgKQAAgQAIgJQAIgKAOAAQAPAAAIAKQAIAKAAAPQAAAQgIAKQgJAKgOAAQgIAAgHgFgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAFgHQAFgHABgNQgBgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_21.setTransform(167.8,39.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAYAuIAAgYIgvAAIAAAYIgKAAIAAghIAFAAQAJgLAFgOQAFgQAAgRIAhAAIAAA6IAKAAIAAAhgAgFgJQgFANgHAJIAfAAIAAgyIgOAAQgBAOgEAOg");
	this.shape_22.setTransform(160.1,40.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAUAxIAAgrIAAgGIAAgJIgjA6IgOAAIAAhEIAKAAIAAAqIAAAMIAAADIAkg5IANAAIAABEgAgQghQgFgEgBgLIAKAAQABAHADADQACACAGAAQAGAAADgDQAEgCAAgHIAKAAQgBAKgFAFQgGAFgLAAQgKAAgGgFg");
	this.shape_23.setTransform(148.8,37.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAcAiIAAhDIALAAIAABDgAgmAiIAAhDIALAAIAAAcIATAAQALAAAHAFQAGADAAAKQAAALgHAFQgGAFgMAAgAgbAZIASAAQAPAAAAgLQAAgGgEgDQgCgDgJAAIgSAAg");
	this.shape_24.setTransform(139.7,39.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATAiIAAgfIglAAIAAAfIgLAAIAAhDIALAAIAAAdIAlAAIAAgdIALAAIAABDg");
	this.shape_25.setTransform(130.5,39.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAaQgIgJAAgRQAAgQAJgJQAIgKAOAAIAKABIAIADIgEAJIgHgCIgIgBQgTAAAAAZQAAANAFAGQAFAHAJAAQAIAAAKgDIAAAJQgHAEgLAAQgNAAgJgKg");
	this.shape_26.setTransform(123.4,39.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAeQgFgFAAgKQAAgTAfgBIAMgBIAAgEQAAgIgEgEQgDgEgIAAQgHAAgKAFIgEgIIAMgEIAKgCQAMAAAGAGQAHAFAAANIAAAtIgIAAIgCgKIgBAAQgFAHgGACQgEADgGAAQgKAAgHgGgAAGAAQgLABgFADQgGAEABAHQgBAGAEADQADADAHAAQAHAAAGgGQAGgFAAgKIAAgGg");
	this.shape_27.setTransform(116.3,39.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAiIAAg6IgjAAIAAA6IgLAAIAAhDIA5AAIAABDg");
	this.shape_28.setTransform(108.9,39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPAfQgIgEgEgIQgEgJABgKQAAgQAIgJQAIgKAOAAQAPAAAIAKQAIAKAAAPQAAAQgIAKQgJAKgOAAQgIAAgHgFgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAFgHQAFgHABgNQgBgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_29.setTransform(100.9,39.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAfIAAgKQAMAGAMAAQAHAAAFgDQAEgDAAgGQAAgNgSAAIgJAAIAAgHIAHAAQASAAAAgKQAAgLgOAAIgJABIgKAEIgEgJQALgFANAAQAKAAAGAFQAHAFAAAJQAAALgNAEIAAAAQAIABAEAEQAEAFAAAGQAAAKgIAFQgIAGgMAAQgPAAgIgFg");
	this.shape_30.setTransform(93.7,39.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTAaQgJgJAAgRQAAgPAIgKQAJgKALAAQANAAAJAJQAHAJAAAOIAAAEIguAAQAAANAGAGQAGAGAJAAQALAAALgEIAAAJIgKAEIgNABQgNAAgJgKgAgLgUQgFAFgBAKIAiAAQAAgKgEgGQgEgFgJAAQgGAAgFAGg");
	this.shape_31.setTransform(87,39.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAuIAAhbIA1AAIAAAJIgqAAIAAAfIAOAAQALAAAHACQAIADAEAEQAEAFAAAKQAAAOgJAHQgIAGgPAAgAgSAlIAPAAQAKgBAGgEQAFgDAAgKQAAgJgFgEQgGgEgMAAIgNAAg");
	this.shape_32.setTransform(79.6,38.2);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(32,33.7,0.25,0.25,0,0,0,128,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.5,67);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(103.5,18.6,0.159,0.159,0,0,0,103.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.4,scaleX:1.21,scaleY:1.21,x:103.6,y:18.4},6,cjs.Ease.get(-1)).to({regY:18.5,scaleX:1,scaleY:1,x:103.5,y:18.5},5,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,15.6,33,5.9);


(lib.phone3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(68.7,185.9,1,1,0,0,0,68.7,185.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-101,283.4,511.2);


(lib.phone2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(67.1,181,0.497,0.497,0,0,0,237.3,424.6);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.1,181,0.497,0.497,0,0,0,237.3,424.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5EE778").s().p("ApiRDMAAAgiFITFAAMAAAAiFg");
	this.shape.setTransform(68.4,141.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EE778").s().p("ApiRDMAAAgiFITFAAMAAAAiFg");
	this.shape_1.setTransform(68.4,141.5);

	this.instance_2 = new lib.Symbol28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68.4,137.6,1,1,0,0,0,68.4,137.6);

	this.instance_3 = new lib.Symbol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.1,133.4,0.99,0.99,0,0,0,141.7,236.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.2,-100.3,280.6,494.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.phone_1();
	this.instance.parent = this;
	this.instance.setTransform(101.1,141.2,0.673,0.673,0,0,0,68.5,137.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:102.8,alpha:1},5,cjs.Ease.get(1)).to({y:90},14,cjs.Ease.get(1)).wait(73));

	// Layer 4
	this.instance_1 = new lib.phone2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.3,89.1,0.509,0.509,0,0,0,68.4,137.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:156.1},5,cjs.Ease.get(1)).to({x:162.5},11,cjs.Ease.get(1)).wait(61));

	// Layer 3
	this.instance_2 = new lib.phone3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.1,89.1,0.509,0.509,0,0,0,68.5,137.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:47.3},5,cjs.Ease.get(1)).to({x:40.9},11,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,-18.1,190.9,318.1);


// stage content:



(lib._336x280_freeU_9_VPN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_154 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(154).call(this.frame_154).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(155));

	// FreeU
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(166.9,35.9,0.91,0.91,0,0,0,100.8,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// 0+
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(321.2,266.4,1,1,0,0,0,9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155));

	// установить бесплатно
	this.instance_2 = new lib.Symbol2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,253,1,1,0,0,0,103.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(121));

	// обход блокировки в любом браузере
	this.instance_3 = new lib.Symbol20("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(75.9,110.6,0.898,0.898,0,0,0,102.6,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(155));

	// Layer 1
	this.instance_4 = new lib.Symbol16("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(169.9,172.5,0.825,0.825,0,0,0,103.9,68.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(143));

	// Layer 10
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(168,140,1.4,0.7,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.1,139,464,282);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;