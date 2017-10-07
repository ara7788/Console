(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



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



(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYAfIAAgzIgBAEIgDAJIgRAmIgGAAIgQgnIgFgMIAAAzIgIAAIAAg9IALAAIARAmIAEAOIABgGIACgGIASgoIAMAAIAAA9g");
	this.shape.setTransform(190.3,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAcQgFgFAAgJQAAgRAdgBIALgBIAAgEQAAgHgDgEQgEgDgHAAQgGAAgKAEIgDgHIAKgEIAKgCQALAAAGAGQAFAFAAALIAAAqIgHAAIgCgJIAAAAQgFAGgFACQgFACgFAAQgJAAgGgFgAAGABQgKAAgFADQgFADAAAHQAAAFADADQADADAGAAQAHAAAFgFQAGgFAAgJIAAgGg");
	this.shape_1.setTransform(182.4,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAfIAAg1IgUAAIAAgIIAxAAIAAAIIgVAAIAAA1g");
	this.shape_2.setTransform(176.5,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAtIAAgoIAAgFIAAgIIggA1IgMAAIAAg+IAJAAIAAAmIgBALIAAADIAhg0IAMAAIAAA+gAgPgeQgFgEAAgKIAJAAQAAAGADADQADACAFAAQAGAAACgDQADgCABgGIAJAAQgBAJgFAFQgFAEgKAAQgJAAgGgEg");
	this.shape_3.setTransform(169.9,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAcQgFgFAAgJQAAgRAdgBIALgBIAAgEQAAgHgDgEQgEgDgHAAQgGAAgKAEIgDgHIAKgEIAKgCQALAAAGAGQAFAFAAALIAAAqIgHAAIgCgJIAAAAQgFAGgFACQgFACgFAAQgJAAgGgFgAAGABQgKAAgFADQgFADAAAHQAAAFADADQADADAGAAQAHAAAFgFQAGgFAAgJIAAgGg");
	this.shape_4.setTransform(162.5,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAYQgIgIAAgQQAAgOAIgJQAIgJAMAAIAKABIAHADIgDAIIgHgCIgHgBQgRAAAAAXQAAAMAEAGQAFAGAHAAQAJAAAIgDIAAAJQgGADgKAAQgMAAgIgJg");
	this.shape_5.setTransform(156.7,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYAfIAAgzIgBAEIgDAJIgRAmIgGAAIgQgnIgFgMIAAAzIgIAAIAAg9IALAAIARAmIAEAOIABgGIACgGIASgoIAMAAIAAA9g");
	this.shape_6.setTransform(146.2,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaAfIAAg9IAJAAIAAA9gAgiAfIAAg9IAJAAIAAAaIASAAQAKAAAGAEQAGADAAAJQAAAKgGAEQgHAGgKgBgAgZAXIARAAQANABAAgLQAAgGgDgDQgCgCgJAAIgQAAg");
	this.shape_7.setTransform(137.2,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAkQgHgKgBgUQAAgTAHgLQAGgMANgDIAcgGIABAIIgbAGQgIACgEAHQgFAIAAAMIABAAQADgFAGgDQAGgDAFAAQALAAAHAIQAHAGAAANQgBAPgHAJQgIAIgNAAQgMAAgIgKgAgEgDQgFACgDABIgGAGQAAAQAGAIQAEAIAIAAQASAAAAgXQAAgUgQABQgCAAgEABg");
	this.shape_8.setTransform(129,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAZQgIgIAAgOIgRAAIAAAdIgKAAIAAg+IAKAAIAAAaIARAAQABgNAHgHQAGgIAMAAQANAAAHAJQAIAJAAAOQAAAPgIAJQgHAJgNAAQgNAAgFgIgAAAgRQgDAGAAALQAAAMADAGQADAHAKAAQAJAAAEgGQAFgHAAgMQAAgLgFgGQgEgGgJAAQgKAAgDAGg");
	this.shape_9.setTransform(120.6,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAfIAAgHIADABQAGAAAFgPQADgMACgdIAkAAIAAA+IgJAAIAAg2IgTAAQAAAVgDAKQgDAMgFAGQgEAGgHAAIgFgBg");
	this.shape_10.setTransform(111.6,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAfIgbgfIAAAfIgKAAIAAg9IAKAAIAAAeIAageIAKAAIgaAeIAdAfg");
	this.shape_11.setTransform(102.9,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAfIAAg1IghAAIAAA1IgJAAIAAg9IAzAAIAAA9g");
	this.shape_12.setTransform(92.5,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcAtIAAgIIAHABQAKgBAFgKIADgJIgag/IALAAIAOAkIAEAQIAAAAIADgIIAQgsIALAAIgcBHQgCALgGAEQgFAFgIAAIgJgBg");
	this.shape_13.setTransform(85.7,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAfIAAg1IgUAAIAAgIIAxAAIAAAIIgVAAIAAA1g");
	this.shape_14.setTransform(79.9,11.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOAYQgIgIAAgQQAAgOAIgJQAIgJAMAAIAKABIAHADIgDAIIgHgCIgHgBQgRAAAAAXQAAAMAEAGQAFAGAHAAQAJAAAIgDIAAAJQgGADgKAAQgMAAgIgJg");
	this.shape_15.setTransform(74.4,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAdQgGgEgEgIQgEgHAAgKQAAgOAIgJQAIgJAMAAQAOAAAHAJQAIAJAAAOQAAAPgIAJQgHAJgOAAQgHAAgHgEgAgNgRQgFAGABALQgBAMAFAGQAFAHAIAAQAKAAAEgHQAFgGAAgMQAAgLgFgGQgEgGgKAAQgIAAgFAGg");
	this.shape_16.setTransform(67.8,11.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAqIAAgWIgrAAIAAAWIgJAAIAAgeIAFAAQAIgKAEgNQAEgOABgQIAeAAIAAA1IAJAAIAAAegAgFgHQgEALgGAIIAcAAIAAguIgNAAQAAANgFAOg");
	this.shape_17.setTransform(60.7,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAtIAAgoIAAgFIAAgIIggA1IgMAAIAAg+IAJAAIAAAmIAAALIAAADIAgg0IAMAAIAAA+gAgPgeQgEgEgBgKIAJAAQABAGADADQACACAFAAQAFAAADgDQADgCABgGIAJAAQgBAJgEAFQgGAEgKAAQgJAAgGgEg");
	this.shape_18.setTransform(50.4,10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAaAfIAAg9IAJAAIAAA9gAgiAfIAAg9IAJAAIAAAaIASAAQAKAAAGAEQAGADAAAJQAAAKgGAEQgHAGgKgBgAgZAXIARAAQANABAAgLQAAgGgDgDQgCgCgJAAIgQAAg");
	this.shape_19.setTransform(42,11.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbAvIAAhbIAIAAIABAIIABAAQAEgFAFgCQAFgDAEAAQANAAAHAJQAHAJAAAQQAAANgHAJQgIAJgMAAQgEAAgFgCQgGgDgDgFIgBAAIABALIAAAbgAgNggQgEAGAAALIAAADQAAAMAEAFQAFAGAIAAQAIAAAFgHQAFgFAAgMQAAgMgFgGQgFgGgIAAQgIAAgFAFg");
	this.shape_20.setTransform(33.9,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDAfIAAg1IgVAAIAAgIIAxAAIAAAIIgUAAIAAA1g");
	this.shape_21.setTransform(27.2,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgOAYQgIgIAAgQQAAgOAIgJQAIgJAMAAIAKABIAHADIgDAIIgHgCIgHgBQgRAAAAAXQAAAMAEAGQAFAGAHAAQAJAAAIgDIAAAJQgGADgKAAQgMAAgIgJg");
	this.shape_22.setTransform(21.7,11.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAaAfIAAg9IAJAAIAAA9gAgiAfIAAg9IAJAAIAAAaIASAAQAKAAAGAEQAGADAAAJQAAAKgGAEQgHAGgKgBgAgZAXIARAAQANABAAgLQAAgGgDgDQgCgCgJAAIgQAAg");
	this.shape_23.setTransform(14.1,11.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAqIAAhTIAwAAIAAAIIgnAAIAAAcIAOAAQAJAAAHADQAHACAEADQADAGAAAIQAAANgHAGQgIAGgNAAgAgRAiIAOAAQAKAAAFgEQAFgEAAgJQAAgIgFgEQgGgDgKAAIgNAAg");
	this.shape_24.setTransform(6.1,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.8,20.4);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAiIAAgoIAAgJIAAgIIgjA5IgOAAIAAhDIAKAAIAAAqIAAALIAAAEIAkg5IANAAIAABDg");
	this.shape.setTransform(74.9,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAiIgegiIAAAiIgLAAIAAhDIALAAIAAAhIAcghIAMAAIgdAhIAfAig");
	this.shape_1.setTransform(67.9,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAiIAAhDIAdAAQAaAAAAARQAAAHgEADQgEAEgHABIAAABQAJAAAEADQAEAEAAAHQAAAKgHAFQgHAFgOAAgAgRAZIARAAQATAAgBgMQABgFgEgDQgFgDgKAAIgRAAgAgRgFIARAAQAJAAADgCQAFgCAAgGQAAgFgFgCQgEgCgHAAIgSAAg");
	this.shape_2.setTransform(60.7,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAfQgHgEgDgIQgEgJgBgKQAAgQAJgJQAJgKANAAQAOAAAJAKQAJAKAAAPQAAAQgJAKQgIAKgPAAQgIAAgIgFgAgPgTQgEAHAAAMQAAANAEAHQAGAHAJAAQAKAAAFgHQAGgHgBgNQABgMgGgHQgFgHgKAAQgJAAgGAHg");
	this.shape_3.setTransform(52.7,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAzIAAhjIAJAAIABAJIABAAQAEgGAFgCQAFgDAFAAQAOAAAIAKQAHAJAAARQAAAQgHAJQgIAKgOAAQgEAAgGgDQgGgDgDgFIgBAAIABAMIAAAdgAgOgjQgEAGAAANIAAACQAAAOAEAFQAFAHAJAAQAJAAAFgIQAGgFAAgNQAAgNgGgHQgFgHgJAAQgJAAgFAGg");
	this.shape_4.setTransform(44.8,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUAiIAAgoIAAgJIAAgIIgjA5IgOAAIAAhDIAKAAIAAAqIAAALIAAAEIAkg5IANAAIAABDg");
	this.shape_5.setTransform(36.5,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAiIgdgiIAAAiIgLAAIAAhDIALAAIAAAhIAcghIAMAAIgdAhIAfAig");
	this.shape_6.setTransform(29.5,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAfQgHgEgEgIQgDgJAAgKQgBgQAJgJQAJgKANAAQAPAAAIAKQAJAKAAAPQAAAQgJAKQgIAKgPAAQgIAAgIgFgAgPgTQgEAHAAAMQAAANAEAHQAGAHAJAAQAKAAAFgHQAGgHgBgNQABgMgGgHQgFgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(21.7,30.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAiIAAgIIADAAQAIAAAEgPQAEgNADggIAnAAIAABEIgLAAIAAg7IgUAAQgBAXgDALQgDANgFAGQgFAHgHAAIgGgBg");
	this.shape_8.setTransform(13.5,30.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAnQgJgLAAgVQAAgVAHgNQAGgNAQgDIAdgGIADAJQgXAEgIACQgJACgEAIQgFAIAAANIAAAAQAEgFAHgDQAGgDAFAAQANAAAHAIQAHAHAAAOQAAARgIAJQgIAJgPAAQgNAAgIgLgAgFgDQgEACgFABIgFAHQAAARAFAIQAFAJAJAAQAUAAAAgZQAAgVgSAAQgDAAgEACg");
	this.shape_9.setTransform(6.4,29.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAbAiIAAg3IgBADIgEAKIgSAqIgHAAIgSgqIgFgNIAAA3IgJAAIAAhDIANAAIASAqIAEAPIABgGIADgHIATgsIANAAIAABDg");
	this.shape_10.setTransform(117.4,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAfQgHgEgEgIQgDgJAAgKQgBgQAJgJQAJgKANAAQAPAAAIAKQAJAKAAAPQAAAQgJAKQgIAKgPAAQgIAAgIgFgAgPgTQgEAHAAAMQAAANAEAHQAGAHAJAAQAKAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgGAHg");
	this.shape_11.setTransform(108.7,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYAuIAAgYIgvAAIAAAYIgKAAIAAghIAFAAQAJgLAFgOQAFgQAAgRIAhAAIAAA6IAKAAIAAAhgAgFgJQgFANgHAJIAfAAIAAgyIgOAAQgBAOgEAOg");
	this.shape_12.setTransform(101,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPAfQgIgEgDgIQgFgJAAgKQAAgQAJgJQAIgKAOAAQAOAAAJAKQAIAKAAAPQAAAQgIAKQgJAKgOAAQgIAAgHgFgAgOgTQgFAHgBAMQABANAFAHQAFAHAJAAQAKAAAFgHQAFgHABgNQgBgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_13.setTransform(93.3,12.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AATAiIgTgcIgSAcIgMAAIAZgiIgYghIAMAAIARAaIASgaIAMAAIgZAhIAaAig");
	this.shape_14.setTransform(86.2,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgWAnQgIgLAAgVQAAgVAHgNQAHgNAOgDIAfgGIABAJQgWAEgIACQgJACgEAIQgFAIAAANIABAAQAEgFAGgDQAGgDAFAAQAMAAAIAIQAHAHAAAOQAAARgIAJQgJAJgOAAQgNAAgJgLgAgFgDQgFACgDABIgGAHQAAARAFAIQAGAJAJAAQATAAAAgZQAAgVgSAAQgCAAgFACg");
	this.shape_15.setTransform(78.9,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPAfQgIgEgEgIQgDgJAAgKQAAgQAIgJQAIgKAOAAQAPAAAIAKQAIAKABAPQgBAQgIAKQgJAKgOAAQgIAAgHgFgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAFgHQAFgHABgNQgBgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_16.setTransform(71.1,12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAaQgIgJAAgRQAAgQAJgJQAIgKAOAAIAKABIAIADIgEAJIgHgCIgIgBQgTAAAAAZQAAANAFAGQAFAHAJAAQAIAAAKgDIAAAJQgHAEgLAAQgNAAgJgKg");
	this.shape_17.setTransform(60.7,12.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAzIAAhjIAJAAIABAJIABAAQAEgGAFgCQAFgDAFAAQAOAAAIAKQAHAJAAARQAAAQgHAJQgIAKgOAAQgEAAgGgDQgGgDgDgFIgBAAIABAMIAAAdgAgOgjQgEAGAAANIAAACQAAAOAEAFQAFAHAJAAQAJAAAFgIQAGgFAAgNQAAgNgGgHQgFgHgJAAQgJAAgFAGg");
	this.shape_18.setTransform(50.2,14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAaQgJgJAAgRQAAgPAIgKQAJgKALAAQANAAAJAJQAHAJAAAOIAAAEIguAAQAAANAGAGQAGAGAJAAQALAAALgEIAAAJIgKAEIgNABQgNAAgJgKgAgLgUQgFAFgBAKIAiAAQAAgKgEgGQgEgFgJAAQgGAAgFAGg");
	this.shape_19.setTransform(42.4,12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAfIAAgKQAMAGAMAAQAHAAAFgDQAEgDAAgGQAAgNgSAAIgJAAIAAgHIAHAAQASAAAAgKQAAgLgOAAIgJABIgKAEIgEgJQALgFANAAQAKAAAGAFQAHAFAAAJQAAALgNAEIAAAAQAIABAEAEQAEAFAAAGQAAAKgIAFQgIAGgMAAQgPAAgIgFg");
	this.shape_20.setTransform(35.5,12.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAxIAAgJIAIABQALAAAEgMIAEgKIgchEIALAAIAQAnQAEAMAAAGIAAAAIAEgJIARgwIALAAIgeBNQgCAMgGAFQgGAFgJAAQgFAAgEgBg");
	this.shape_21.setTransform(29.1,14.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAeQgFgFAAgKQgBgTAhgBIALgBIAAgEQAAgIgEgEQgDgEgIAAQgGAAgLAFIgDgIIALgEIAKgCQANAAAFAGQAHAFAAANIAAAtIgJAAIgBgKIgBAAQgFAHgFACQgGADgGAAQgKAAgGgGgAAHAAQgLABgGADQgFAEAAAHQAAAGADADQAEADAGAAQAIAAAFgGQAGgFAAgKIAAgGg");
	this.shape_22.setTransform(22,12.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAzIAAhjIAJAAIABAJIABAAQAEgGAFgCQAFgDAFAAQAOAAAIAKQAHAJAAARQAAAQgHAJQgIAKgOAAQgEAAgGgDQgGgDgDgFIgBAAIABAMIAAAdgAgOgjQgEAGAAANIAAACQAAAOAEAFQAFAHAJAAQAJAAAFgIQAGgFAAgNQAAgNgGgHQgFgHgJAAQgJAAgFAGg");
	this.shape_23.setTransform(14.7,14.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAuIAAhbIA1AAIAAAKIgqAAIAAAdIAOAAQALAAAHAEQAIACAEAEQAEAFAAAKQAAAOgJAGQgIAHgPAAgAgSAkIAPAAQAKAAAGgDQAFgFAAgJQAAgJgFgEQgGgEgMAAIgNAAg");
	this.shape_24.setTransform(6.8,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.9,40.5);


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


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A82D9").s().p("AisElQgOgFgHgNIiNkvQgGgNAFgOQAFgOANgHIHPjXQAOgHAOAGQAOAFAGANICNEvQAHAOgGAOQgFAOgNAGInPDXQgHAEgIAAQgGAAgGgDgAkVgeQgHAIAEAJQADAJAKACIC2AiIheCsIASAmIBvjLIBLAPIABABIABgBIAAAAIABgBIAjg+IDeArIgRgkIi8gmIBcilQAEgHgEgIQgEgKgKAAQgKgBgFAJIiADkQgGALgJgDIkGgyIgEAAQgHAAgEAGg");
	this.shape.setTransform(33.9,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.9,59.3);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzCrIgzgzIgxAzQgIAIgMAAQgLAAgJgIQgHgIgBgLQABgLAHgJIA1gzQgfgHgYgPQgJgGgCgLQgDgLAGgKQAGgJALgDQALgCAJAGQAeARAgAAQAiAAAcgRQAKgGALACQALADAGAJQAGAKgCALQgDALgKAGQgXAPgfAHIA0AzQAJAIAAAMQAAALgJAIQgHAIgMAAQgLAAgIgIgAhAgUQgcgbAAgmQAAgmAcgcQAbgbAlAAQAmAAAcAbQAbAcAAAmQAAAmgbAbQgcAZgmAAQglAAgbgZgAgahwQgLALAAAQQAAAQALALQAMALAOAAQAPAAAMgLQAMgLAAgQQAAgQgMgLQgMgLgPAAQgOAAgMALg");
	this.shape.setTransform(36.7,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99B1C6").s().p("AgJAPQgHgEgBgIQgCgGAFgGQAEgHAIgBQAGgCAGAFQAHAEABAIQABAGgEAGQgEAHgIABIgDABQgEAAgFgEg");
	this.shape_1.setTransform(15.9,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99B1C6").s().p("AgJAPQgHgEgBgIQgCgGAFgGQAEgHAIgBQAGgCAGAFQAGAEACAIQACAGgFAGQgEAHgIABIgDABQgEAAgFgEg");
	this.shape_2.setTransform(10.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99B1C6").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgGAGAAQAIAAAFAGQAGAFgBAHQABAHgGAGQgFAGgIAAQgGAAgGgGg");
	this.shape_3.setTransform(5.7,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE8208").s().p("AltEeIAAo7ILbAAIAAI7g");
	this.shape_4.setTransform(36.7,38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDEEF0").s().p("AkbBRQgiAAgYgXQgYgYAAgiQAAghAYgXQAYgZAiAAII3AAQAiAAAYAZQAYAXAAAhQAAAigYAYQgYAXgiAAg");
	this.shape_5.setTransform(36.7,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.3,67.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99B1C6").s().p("AgKAQQgHgFgBgIQgCgGAFgHQAFgHAIgBQAGgCAHAFQAHAFABAIQACAGgFAHQgFAHgIABIgDABQgFAAgFgEg");
	this.shape.setTransform(16.8,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99B1C6").s().p("AgKAQQgHgFgBgIQgCgGAFgHQAFgHAIgBQAGgCAHAFQAHAFABAIQACAGgFAHQgFAHgIABIgDABQgFAAgFgEg");
	this.shape_1.setTransform(11.3,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99B1C6").s().p("AgNANQgGgFAAgIQAAgHAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAHQAAAIgGAFQgGAHgIgBQgHABgGgHg");
	this.shape_2.setTransform(6,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABzB3QgHgFgagcQgSgUgKADQgKADgEATQgCAKAAAJIgBAFQgBAEgCADQgEAFgIABIgZAAQgPABgWgGQgrgMghgjQgjglgohIIghhDQgDgIAEgDQACgDAGgBIAFgBIBBAAIAKAEQAEADACAEIAHARQAIATAJAPQATAhAMAMQALAJAHgCQAIgFACgfIgBgeQAAgWgHgJQgGgJgOgBQgCgBADgEQAEgFAFgDQAMgGAtAAQAPAAAPADQAOAEABASQABAMgCArIAAAaQACAOAHAFQANAHAig6QAPgYALgdIABgCIAFgFQADgCAFAAIBPAAQALABACAGQAGAPgpA2QglAvgBAGQgCAKAbAaQAjAgAKAUQAJAPgMAIIgOAEIg8AAIgFABQgLAAgOgKg");
	this.shape_3.setTransform(38.8,39.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C5C7C").s().p("AmCEvIAApdIMFAAIAAJdg");
	this.shape_4.setTransform(38.8,41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDEEF0").s().p("AksBWQgjAAgagZQgZgZAAgkQAAgiAZgaQAagZAjAAIJZAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAg");
	this.shape_5.setTransform(38.8,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.6,71.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#447AE0").s().p("AhYCmQgCgDAAgEQAAgEACgDQAEgDAEAAQADAAAEADQACADAAAEQAAAEgCADQgEADgDAAQgEAAgEgDgAhFCDQgCgDAAgEQAAgEACgDQADgDAFAAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAQgFAAgDgDgAgzBfQgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQACADAAAEQAAAEgCADQgDADgFAAQgEAAgDgDgAghA8QgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQACADAAAEQAAAEgCADQgDADgFAAQgEAAgDgDgAgOAZQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQABADAAAEQAAAEgBADQgDADgEAAQgDAAgEgDgAACgIQgCgDAAgEQAAgEACgDQAEgDADAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgDAAgEgDgAAUgrQgDgDABgEQgBgEADgDQAEgDADAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgDAAgEgDgAAmhPQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgDAAgEgDgAA4hzQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgDAAgEgDgABKiXQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgDAAgEgDg");
	this.shape.setTransform(9,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-1,18.4,33.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#447AE0").s().p("Ag2BFIA2iMIA2CPg");
	this.shape.setTransform(3.6,4.7,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.2,9.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#447AE0").ss(2,1,1).p("AAyAAQAAAUgPAPQgPAPgUAAQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATg");
	this.shape.setTransform(5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAiQgPgOAAgUQAAgTAPgPQAPgPATAAQAUAAAOAPQAQAPgBATQABAUgQAOQgOAQgUgBQgTABgPgQg");
	this.shape_1.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12,12);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AixAQIAAgfIFjAAIAAAfg");
	this.shape.setTransform(17.9,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPB+IAAj7IAfAAIAAD7g");
	this.shape_1.setTransform(14.3,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D51612").s().p("AixB+IAAj7IFjAAIAAD7g");
	this.shape_2.setTransform(17.9,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.8,25.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().dr(-17.9,-15.55,35.8,31.1);
	this.shape.setTransform(17.9,20.4,1,0.267);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E30102").s().dr(-17.9,-15.55,35.8,31.1);
	this.shape_1.setTransform(17.9,12.4,1,0.267);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().dr(-17.9,-15.55,35.8,31.1);
	this.shape_2.setTransform(17.9,4.2,1,0.267);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.8,24.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0038A8").s().dr(-17.9,-12.65,35.8,25.3);
	this.shape.setTransform(17.9,6.4,1.001,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEB09").s().dr(-17.9,-12.65,35.8,25.3);
	this.shape_1.setTransform(17.9,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.8,25.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E8ECF6","#FFFFFF","#E8ECF6"],[0,0.494,1],-120,0,120,0).s().p("AyKfPQglABAAgwMAAAg9AQAAguAlgBMAkUAAAQAmABAAAuMAAAA9AQAAAwgmgBg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


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


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(98.4,10.2,1,1,0,0,0,98.4,10.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.8,20.4);


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


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol22("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(102.6,48.8,1,1,0,0,0,102.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105));

	// Layer 1
	this.instance_1 = new lib.Symbol23("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.7,18.8,1,1,0,0,0,53.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,0,356.2,139.9);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(14.9,43.9,0.792,0.792,0,0,0,3.6,4.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:3.8},11,cjs.Ease.get(1)).to({_off:true},28).wait(28));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("AAJGxIAAmLIBaAAIAAGLg");
	var mask_graphics_11 = new cjs.Graphics().p("AAJGPIAAmLIBaAAIAAGLg");
	var mask_graphics_12 = new cjs.Graphics().p("AAJFwIAAmJIBaAAIAAGJg");
	var mask_graphics_13 = new cjs.Graphics().p("AAJFUIAAmJIBaAAIAAGJg");
	var mask_graphics_14 = new cjs.Graphics().p("AAJE8IAAmJIBaAAIAAGJg");
	var mask_graphics_15 = new cjs.Graphics().p("AAJEnIAAmJIBaAAIAAGJg");
	var mask_graphics_16 = new cjs.Graphics().p("AAJEVIAAmJIBaAAIAAGJg");
	var mask_graphics_17 = new cjs.Graphics().p("AAJEGIAAmJIBaAAIAAGJg");
	var mask_graphics_18 = new cjs.Graphics().p("AAJD7IAAmJIBaAAIAAGJg");
	var mask_graphics_19 = new cjs.Graphics().p("AAJDzIAAmJIBaAAIAAGJg");
	var mask_graphics_20 = new cjs.Graphics().p("AAJDuIAAmJIBaAAIAAGJg");
	var mask_graphics_21 = new cjs.Graphics().p("AAJDtIAAmJIBaAAIAAGJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:10,y:43.3}).wait(1).to({graphics:mask_graphics_11,x:10,y:39.9}).wait(1).to({graphics:mask_graphics_12,x:10,y:36.8}).wait(1).to({graphics:mask_graphics_13,x:10,y:34.1}).wait(1).to({graphics:mask_graphics_14,x:10,y:31.6}).wait(1).to({graphics:mask_graphics_15,x:10,y:29.5}).wait(1).to({graphics:mask_graphics_16,x:10,y:27.8}).wait(1).to({graphics:mask_graphics_17,x:10,y:26.3}).wait(1).to({graphics:mask_graphics_18,x:10,y:25.2}).wait(1).to({graphics:mask_graphics_19,x:10,y:24.3}).wait(1).to({graphics:mask_graphics_20,x:10,y:23.9}).wait(1).to({graphics:mask_graphics_21,x:10,y:23.7}).wait(28).to({graphics:null,x:0,y:0}).wait(28));

	// Layer 2
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.1,34.1,0.997,0.997,-27,0,0,3.4,21.1);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({_off:true},39).wait(28));

	// Layer 1 copy
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.3,-5.7,0.238,0.238,0,0,0,5,5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({regY:5.1,scaleX:1.31,scaleY:1.31,y:-5.6},5,cjs.Ease.get(-1)).to({regY:5,scaleX:0.75,scaleY:0.75,y:-5.7},5,cjs.Ease.get(1)).to({_off:true},18).wait(28));

	// Layer 1
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.7,52.5,0.238,0.238,0,0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:5.1,scaleX:1.31,scaleY:1.31,y:52.6},5,cjs.Ease.get(-1)).to({regY:5,scaleX:0.75,scaleY:0.75,y:52.5},5,cjs.Ease.get(1)).to({_off:true},39).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,51.1,2.9,2.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(14.9,43.9,0.792,0.792,0,0,0,3.6,4.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:3.8},11,cjs.Ease.get(1)).wait(56));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("AAJGxIAAmLIBaAAIAAGLg");
	var mask_graphics_11 = new cjs.Graphics().p("AAJGPIAAmLIBaAAIAAGLg");
	var mask_graphics_12 = new cjs.Graphics().p("AAJFwIAAmJIBaAAIAAGJg");
	var mask_graphics_13 = new cjs.Graphics().p("AAJFUIAAmJIBaAAIAAGJg");
	var mask_graphics_14 = new cjs.Graphics().p("AAJE8IAAmJIBaAAIAAGJg");
	var mask_graphics_15 = new cjs.Graphics().p("AAJEnIAAmJIBaAAIAAGJg");
	var mask_graphics_16 = new cjs.Graphics().p("AAJEVIAAmJIBaAAIAAGJg");
	var mask_graphics_17 = new cjs.Graphics().p("AAJEGIAAmJIBaAAIAAGJg");
	var mask_graphics_18 = new cjs.Graphics().p("AAJD7IAAmJIBaAAIAAGJg");
	var mask_graphics_19 = new cjs.Graphics().p("AAJDzIAAmJIBaAAIAAGJg");
	var mask_graphics_20 = new cjs.Graphics().p("AAJDuIAAmJIBaAAIAAGJg");
	var mask_graphics_21 = new cjs.Graphics().p("AAJDtIAAmJIBaAAIAAGJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:10,y:43.3}).wait(1).to({graphics:mask_graphics_11,x:10,y:39.9}).wait(1).to({graphics:mask_graphics_12,x:10,y:36.8}).wait(1).to({graphics:mask_graphics_13,x:10,y:34.1}).wait(1).to({graphics:mask_graphics_14,x:10,y:31.6}).wait(1).to({graphics:mask_graphics_15,x:10,y:29.5}).wait(1).to({graphics:mask_graphics_16,x:10,y:27.8}).wait(1).to({graphics:mask_graphics_17,x:10,y:26.3}).wait(1).to({graphics:mask_graphics_18,x:10,y:25.2}).wait(1).to({graphics:mask_graphics_19,x:10,y:24.3}).wait(1).to({graphics:mask_graphics_20,x:10,y:23.9}).wait(1).to({graphics:mask_graphics_21,x:10,y:23.7}).wait(56));

	// Layer 2
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.1,34.1,0.997,0.997,-27,0,0,3.4,21.1);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(67));

	// Layer 1
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.7,52.5,0.238,0.238,0,0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:5.1,scaleX:1.31,scaleY:1.31,y:52.6},5,cjs.Ease.get(-1)).to({regY:5,scaleX:0.75,scaleY:0.75,y:52.5},5,cjs.Ease.get(1)).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,51.1,2.9,2.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(102.4,186.6,1,1,0,0,0,68.2,23.2);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.5,128.2,1,1,0,0,0,97.8,96.8);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128,128,1,1,0,0,0,128,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,257.8);


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
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(135.3,46.7,1,1,0,0,0,62.5,20.2);

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

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32,33.7,0.25,0.25,0,0,0,128,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.7,67);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 11 copy
	this.instance = new lib.Symbol11copy("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(91,87.6,1,1,61.8,0,0,14.7,52.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(49));

	// Symbol 15
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.1,60.8,0.12,0.12,22.4,0,0,34.2,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({regX:33.9,regY:29.7,scaleX:0.69,scaleY:0.69,rotation:0,x:172.5,y:79.5},14,cjs.Ease.get(1)).wait(9));

	// Symbol 14
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144,59.1,0.083,0.083,48.9,0,0,36.9,33.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({regX:36.5,regY:33.8,scaleX:0.69,scaleY:0.69,rotation:14.7,x:176.7,y:38.4},14,cjs.Ease.get(1)).wait(9));

	// Symbol 13
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(142.9,60.2,0.056,0.056,-19.7,0,0,39.1,35.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({regX:38.6,regY:35.8,scaleX:0.66,scaleY:0.66,rotation:-13.7,x:129.8,y:29.2},14,cjs.Ease.get(1)).wait(9));

	// Symbol 7
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(93.5,106.5,0.151,0.151,0,0,0,17.9,12.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({regY:12.7,scaleX:1.43,scaleY:1.43,y:106.6},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(37));

	// Symbol 6
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(47.4,30.1,0.184,0.184,0,0,0,17.9,12.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({regY:12.3,scaleX:1.36,scaleY:1.36,x:47.5,y:30.2},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:47.4},4,cjs.Ease.get(1)).wait(57));

	// Symbol 11
	this.instance_6 = new lib.Symbol11("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(46.8,50.2,1,1,130,0,0,14.7,52.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(69));

	// Symbol 5
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(18,123.4,0.187,0.187,0,0,0,17.9,12.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({regY:12.7,scaleX:1.43,scaleY:1.43,x:17.9,y:123.5},4,cjs.Ease.get(-1)).to({regY:12.6,scaleX:1,scaleY:1,y:123.4},4,cjs.Ease.get(1)).wait(80));

	// Symbol 11
	this.instance_8 = new lib.Symbol11("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(18.9,102.5,1,1,28,0,0,14.6,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,100.2,4.4,4.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol28("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(103.3,-13.5,1,1,0,0,0,98.4,10.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(14));

	// Layer 1
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.5,18.6,0.159,0.159,0,0,0,103.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:18.4,scaleX:1.21,scaleY:1.21,x:103.6,y:18.4},6,cjs.Ease.get(-1)).to({regY:18.5,scaleX:1,scaleY:1,x:103.5,y:18.5},5,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,15.6,33,5.9);


// stage content:



(lib._300x600_freeU_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_154 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(154).call(this.frame_154).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(155));

	// FreeU
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(151,54.8,1.25,1.25,0,0,0,100.7,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// 0+
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(282.8,581.2,1.25,1.25,0,0,0,9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155));

	// установить бесплатно
	this.instance_2 = new lib.Symbol2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(148.8,536.7,1.25,1.25,0,0,0,103.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(76));

	// обход блокировки в любом браузере
	this.instance_3 = new lib.Symbol20("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.2,221.8,1.328,1.328,0,0,0,102.7,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(155));

	// Layer 1
	this.instance_4 = new lib.Symbol16("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.3,366.8,1.25,1.25,0,0,0,103.6,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(155));

	// Layer 10
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,300,1.25,1.5,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.2,299,473,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;