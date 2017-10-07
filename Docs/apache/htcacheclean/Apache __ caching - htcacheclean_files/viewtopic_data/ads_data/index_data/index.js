(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
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
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.l3 = function() {
	this.initialize(img.l3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,51);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ19m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.078)","rgba(255,255,211,0.247)","rgba(255,255,204,0)"],[0,0.875,1],0,0,0,0,0,68.1).s().p("AlwIwQg3glgygyQjEjDAAkWQAAkUDEjFQAygyA3glQCihtDOAAQEVAADFDEQDEDFAAEUQAAEWjEDDQjFDFkVAAQjOAAiihug");
	this.shape.setTransform(102.6,122.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19m, new cjs.Rectangle(35.6,55.6,134,134), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,164.1).s().p("Ax8R9QncncAAqhQAAqgHcncQHcncKgAAQKhAAHcHcQHcHcAAKgQAAKhncHcQncHcqhAAQqgAAncncg");
	this.shape.setTransform(162.5,162.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325,325);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_1 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_2 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_3 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_4 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_5 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_6 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_7 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_8 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_9 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_10 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_11 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_12 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_13 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_14 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_15 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_16 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_17 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_18 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");
	var mask_graphics_19 = new cjs.Graphics().p("EhEAAMjIAA5FMCIBAAAIlrIbIz5AAIjwF+I5qAAIirDuMgkYAAAIksG+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-381,y:67.9}).wait(1).to({graphics:mask_graphics_1,x:-362.2,y:67.9}).wait(1).to({graphics:mask_graphics_2,x:-343.5,y:67.9}).wait(1).to({graphics:mask_graphics_3,x:-324.7,y:67.9}).wait(1).to({graphics:mask_graphics_4,x:-306,y:67.9}).wait(1).to({graphics:mask_graphics_5,x:-287.2,y:67.9}).wait(1).to({graphics:mask_graphics_6,x:-268.5,y:67.9}).wait(1).to({graphics:mask_graphics_7,x:-249.7,y:67.9}).wait(1).to({graphics:mask_graphics_8,x:-231,y:67.9}).wait(1).to({graphics:mask_graphics_9,x:-212.2,y:67.9}).wait(1).to({graphics:mask_graphics_10,x:-193.5,y:67.9}).wait(1).to({graphics:mask_graphics_11,x:-174.7,y:67.9}).wait(1).to({graphics:mask_graphics_12,x:-156,y:67.9}).wait(1).to({graphics:mask_graphics_13,x:-137.2,y:67.9}).wait(1).to({graphics:mask_graphics_14,x:-118.5,y:67.9}).wait(1).to({graphics:mask_graphics_15,x:-99.7,y:67.9}).wait(1).to({graphics:mask_graphics_16,x:-81,y:67.9}).wait(1).to({graphics:mask_graphics_17,x:-62.2,y:67.9}).wait(1).to({graphics:mask_graphics_18,x:-43.5,y:67.9}).wait(1).to({graphics:mask_graphics_19,x:-24.7,y:67.9}).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfCJIAAg/IA/AAIAAA/gAgPAsIgTisIAAgHIBFAAIAAAHIgTCsg");
	this.shape.setTransform(212.3,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdCJIAAkQIA7AAIAAEQg");
	this.shape_1.setTransform(199.9,65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdCJIAAjZIhTAAIAAg3IDhAAIAAA3IhTAAIAADZg");
	this.shape_2.setTransform(181.3,65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA6C0IAAi0Ih2C0Ig4AAIAAkQIA6AAIAACxIB4ixIA4AAIAAEQgAgXh1QgKgEgJgIQgJgIgGgLQgEgKgCgOIAigHQAIAbAWAAQALgBAIgGQAHgHAEgNIAjAHQgCAOgFAKQgFALgJAIQgSAQgaAAQgNAAgLgEg");
	this.shape_3.setTransform(154.1,60.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABSCKIgZg+IhzAAIgZA+Ig9AAIB1kTIA2AAIB2ETgAAjAXIgjhYIgkBYIBHAAg");
	this.shape_4.setTransform(124.2,64.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVBkQgUgUgKgZQgKgZAAgeQAAg7AogoQAUgVAagKQAZgKAeAAQASAAAPACQAPADAMAGQAYAMAWAVIgkApQgSgQgPgHQgPgHgWAAQghAAgXAZQgLAMgGAPQgFAQAAARQAAASAFAPQAGAPALANQAXAZAhAAQAWAAAQgIQAQgIASgQIAmApQgWAXgaAMQgaALgmAAQg7AAgogpg");
	this.shape_5.setTransform(95.2,65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABSCKIgZg+IhzAAIgZA+Ig9AAIB1kTIA2AAIB2ETgAAjAXIgjhYIgkBYIBHAAg");
	this.shape_6.setTransform(54.4,64.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA3CJIAAhuIhuAAIAABuIg7AAIAAkQIA7AAIAABsIBuAAIAAhsIA8AAIAAEQg");
	this.shape_7.setTransform(24.7,65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhnCJIAAkRIDNAAIAAA2IiRAAIAAA3IB/AAIAAA0Ih/AAIAAA6ICTAAIAAA2g");
	this.shape_8.setTransform(184.1,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai6CJIAAkRIA7AAIAADaIBiAAIAAjaIA7AAIAADaIBhAAIAAjaIA8AAIAAERg");
	this.shape_9.setTransform(148.9,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhsCJIAAkRIA8AAIAABeIA5AAQAXAAASAFQATAGAOAMQAaAYAAAoQAAAVgHARQgHAQgOANQgOAMgTAGQgTAHgYAAgAgwBSIA1AAQAWAAALgJQALgKAAgTQAAgkgtAAIg0AAg");
	this.shape_10.setTransform(115.2,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiACHIADgyIAKABQANAAAJgGQAIgFAHgSQAHgRAEgiQADghAAg2IAAg4IDCAAIAAEQIg8AAIAAjaIhPAAIAAAVQAABOgJAtQgKAsgSAQQgJAJgMAEQgNAEgRAAQgSAAgNgDg");
	this.shape_11.setTransform(85.3,24.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdCJIAAkRIA7AAIAAERg");
	this.shape_12.setTransform(65.8,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhxCJIAAkRIDQAAIAAA2IiVAAIAAAxIBIAAQAtAAAaAWQANALAFAPQAHAPAAAUQAAApgbAXQgbAWgwABgAg2BSIBCAAQAVAAAKgIQALgJAAgRQAAghgqAAIhCAAg");
	this.shape_13.setTransform(46.7,24.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.9,7.5,46.4,79.4);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhYYAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImCI8g");
	var mask_graphics_1 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_2 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_3 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_4 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_5 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_6 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImCI8g");
	var mask_graphics_7 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_8 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_9 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_10 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_11 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_12 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_13 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_14 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_15 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_16 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_17 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_18 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_19 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_20 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_21 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_22 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_23 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_24 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_25 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_26 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");
	var mask_graphics_27 = new cjs.Graphics().p("EhXUAQHMAAAggNMCupAAAInSK0I5jAAIkzHrMgg9AAAIjcEyMgutAAAImBI8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-565.7,y:76}).wait(1).to({graphics:mask_graphics_1,x:-535.5,y:76}).wait(1).to({graphics:mask_graphics_2,x:-498.5,y:76}).wait(1).to({graphics:mask_graphics_3,x:-461.4,y:76}).wait(1).to({graphics:mask_graphics_4,x:-424.4,y:76}).wait(1).to({graphics:mask_graphics_5,x:-387.4,y:76}).wait(1).to({graphics:mask_graphics_6,x:-350.3,y:76}).wait(1).to({graphics:mask_graphics_7,x:-313.3,y:76}).wait(1).to({graphics:mask_graphics_8,x:-276.3,y:76}).wait(1).to({graphics:mask_graphics_9,x:-239.2,y:76}).wait(1).to({graphics:mask_graphics_10,x:-202.2,y:76}).wait(1).to({graphics:mask_graphics_11,x:-165.1,y:76}).wait(1).to({graphics:mask_graphics_12,x:-128.1,y:76}).wait(1).to({graphics:mask_graphics_13,x:-91.1,y:76}).wait(1).to({graphics:mask_graphics_14,x:-54,y:76}).wait(1).to({graphics:mask_graphics_15,x:-17,y:76}).wait(1).to({graphics:mask_graphics_16,x:20,y:76}).wait(1).to({graphics:mask_graphics_17,x:57.1,y:76}).wait(1).to({graphics:mask_graphics_18,x:94.1,y:76}).wait(1).to({graphics:mask_graphics_19,x:131.1,y:76}).wait(1).to({graphics:mask_graphics_20,x:168.2,y:76}).wait(1).to({graphics:mask_graphics_21,x:205.2,y:76}).wait(1).to({graphics:mask_graphics_22,x:242.3,y:76}).wait(1).to({graphics:mask_graphics_23,x:279.3,y:76}).wait(1).to({graphics:mask_graphics_24,x:316.3,y:76}).wait(1).to({graphics:mask_graphics_25,x:353.4,y:76}).wait(1).to({graphics:mask_graphics_26,x:390.4,y:76}).wait(1).to({graphics:mask_graphics_27,x:427.4,y:76}).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABCCyIAAjHIiJDHIhcAAIAAlkIBiAAIAADJICJjJIBcAAIAAFkg");
	this.shape.setTransform(171,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA1CyIhYiEIglAoIAABcIhjAAIAAlkIBjAAIAACSIB6iSIB1AAIiHCaICMDKg");
	this.shape_1.setTransform(135.1,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AClCyIhSiGIghAoIAABeIhiAAIAAheIgjgoIhRCGIh1AAICDjNIh/iXIB0AAIBxCSIAAiSIBiAAIAACSIBwiSIB0AAIh/CXICDDNg");
	this.shape_2.setTransform(87.4,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABCCyIAAjHIiJDHIhcAAIAAlkIBiAAIAADJICJjJIBcAAIAAFkg");
	this.shape_3.setTransform(40.4,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AA/CyIAAiHIh+AAIAACHIhjAAIAAlkIBjAAIAACHIB+AAIAAiHIBjAAIAAFkg");
	this.shape_4.setTransform(2,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag6CyQgfgIgUgMQgUgMgXgUIA0hCQAqArA6AAQAaAAAOgKQAOgJAAgRQAAgfg4AAIgmAAIAAhKIAkAAQAZAAANgJQAMgIAAgPQAAgNgMgJQgMgIgVAAQgWAAgaAKQgaAJgRAPIgwg6QA9g8BXAAQA7AAAlAbQAlAbAAAqQAAA4g1AYQAdAJARAVQARAVAAAgQAAAwgnAgQgmAehBAAQgmAAgfgHg");
	this.shape_5.setTransform(-33.7,14.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-17.5,37.9,61.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_1 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_2 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_3 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_4 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_5 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_6 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_7 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_8 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_9 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_10 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_11 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_12 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_13 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_14 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_15 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_16 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_17 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");
	var mask_graphics_19 = new cjs.Graphics().p("Eh0OAVcMAAAgq3MDodAAAIptOZMgh/AAAImZKNMgr3AAAIklGYMg+KAAAIoCL5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-726.1,y:68.7}).wait(1).to({graphics:mask_graphics_1,x:-700.8,y:68.7}).wait(1).to({graphics:mask_graphics_2,x:-675.5,y:68.7}).wait(1).to({graphics:mask_graphics_3,x:-650.3,y:68.7}).wait(1).to({graphics:mask_graphics_4,x:-625,y:68.7}).wait(1).to({graphics:mask_graphics_5,x:-599.7,y:68.7}).wait(1).to({graphics:mask_graphics_6,x:-574.5,y:68.7}).wait(1).to({graphics:mask_graphics_7,x:-549.2,y:68.7}).wait(1).to({graphics:mask_graphics_8,x:-523.9,y:68.7}).wait(1).to({graphics:mask_graphics_9,x:-498.7,y:68.7}).wait(1).to({graphics:mask_graphics_10,x:-473.4,y:68.7}).wait(1).to({graphics:mask_graphics_11,x:-448.2,y:68.7}).wait(1).to({graphics:mask_graphics_12,x:-422.9,y:68.7}).wait(1).to({graphics:mask_graphics_13,x:-397.6,y:68.7}).wait(1).to({graphics:mask_graphics_14,x:-372.4,y:68.7}).wait(1).to({graphics:mask_graphics_15,x:-347.1,y:68.7}).wait(1).to({graphics:mask_graphics_16,x:-321.8,y:68.7}).wait(1).to({graphics:mask_graphics_17,x:-296.6,y:68.7}).wait(1).to({graphics:mask_graphics_18,x:-271.3,y:68.7}).wait(1).to({graphics:mask_graphics_19,x:-246.1,y:68.7}).wait(9));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0136AB").s().p("Ag3BcQgZgPgOgXQgOgZAAgdQAAgUAIgUQAJgUAOgOQAPgOAUgIQAUgIAWAAQAXAAAVAIQAUAIAOAOQAPAOAIAUQAIATAAAVQAAAVgIAUQgJATgOAPQgOAOgVAJQgUAHgXAAQgeAAgZgNgAgkgmQgPAQAAAWQAAAWAPARQAPAQAVAAQAXAAAPgQQAOgQAAgXQAAgVgPgRQgOgQgXAAQgWAAgOAQg");
	this.shape.setTransform(-13.2,71.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0136AB").s().p("AA2B6IAAgpIhrAAIgEApIgyAAIAAhaIASAAQALgeAEgfQAGggAAg3IAAgFICZAAIAACZIAXAAIgGBagAgOhFQAAAfgFAYQgEAWgIAYIA8AAIAAhnIgrAAg");
	this.shape_1.setTransform(-35.4,73.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABPDoQgmgpAAg9QAAg8AmgqQAmgoA9AAQA+AAAlAoQAmApAAA+QAAA7gnAqQgmAqg9AAQg8AAgmgqgACSBXQgNARAAAbQAAAZAOARQANARASAAQAUAAANgRQAMgRgBgaQAAgagMgQQgMgRgVAAQgTAAgMAQgAkAEKIGaoTIBmAAImZITgAkTgcQgngpAAg8QAAg9AngpQAmgpA9AAQA8AAAnApQAmAqgBA8QAAA8gmApQgmApg9AAQg8AAgmgpgAjRisQgMARAAAaQAAAZANARQAMASAUgBQATABAMgSQANgQAAgaQAAgagNgRQgNgRgTAAQgUAAgMARg");
	this.shape_2.setTransform(142.2,54.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiCDvQg4gmgeg+Qgdg/AAhMQAAg4ASgyQASgyAfgmQAfgmAvgWQAvgWA2AAQA3AAAvAWQAuAWAfAlQAfAmASAyQARAzAAA4QAAA4gSAzQgRAygfAmQgfAlgwAXQguAWg3AAQhKAAg4gmgAhHhpQgaAoAABBQAABBAbApQAcApArAAQAsAAAbgpQAagpAAhBQAAg/gbgqQgcgpgrAAQgsAAgbApg");
	this.shape_3.setTransform(81.3,54.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AjSEOIAAhvIDIiXQAlgcAPgVQAQgWAAgYQAAgYgQgPQgQgOgaAAQgaAAgYAPQgXAQghAlIhjhSQAtg9AxgbQAwgbBJgBQBXABA2AvQA2AwAABMQAAAggHAYQgIAagQAVQgRAVgVATIg2ApIhaBAIDbAAIAAB4g");
	this.shape_4.setTransform(30.7,53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0136AB").s().p("AAeBGIAAhbIg8BbIgdAAIAAiLIAeAAIAABbIA9hbIAcAAIAACLg");
	this.shape_5.setTransform(168.1,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0136AB").s().p("Ag2BGIAAiLIA4AAQAMAAAKAEQAKACAHAIQAOANAAAWQAAAWgQANQgIAHgKADQgKADgLAAIgYAAIAAAqgAgYAAIAYAAQALABAHgGQADgDABgDQACgEAAgFQAAgFgCgEQgBgEgDgCQgHgGgLAAIgYAAg");
	this.shape_6.setTransform(155.2,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0136AB").s().p("AAeBGIAAhbIg8BbIgdAAIAAiLIAeAAIAABbIA9hbIAcAAIAACLg");
	this.shape_7.setTransform(141.2,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0136AB").s().p("AgOBGIAAhvIgrAAIAAgcIBzAAIAAAcIgrAAIAABvg");
	this.shape_8.setTransform(127.9,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0136AB").s().p("Ag2BGIAAiLIA4AAQAMAAAKAEQAKACAHAIQAOANAAAWQAAAWgQANQgIAHgKADQgKADgLAAIgYAAIAAAqgAgYAAIAYAAQALABAHgGQADgDABgDQACgEAAgFQAAgFgCgEQgBgEgDgCQgHgGgLAAIgYAAg");
	this.shape_9.setTransform(116.2,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0136AB").s().p("AAqBGIgNgfIg6AAIgNAfIgfAAIA8iLIAbAAIA8CLgAASAMIgSgsIgSAsIAkAAg");
	this.shape_10.setTransform(102,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0136AB").s().p("Ag6BGIAAiLIA/AAQAZAAAMANQAEAEADAGQADAHgBAGQABAKgFAIQgFAHgJAGQANAEAGAIQAIAIgBANQAAAKgDAHQgEAHgGAFQgOAKgZAAgAgdArIAkAAQALAAAFgEQAGgEAAgIQAAgHgGgEQgFgEgMAAIgjAAgAgdgNIAcAAQAWAAAAgOQAAgIgGgDQgFgEgJAAIgeAAg");
	this.shape_11.setTransform(88.2,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0136AB").s().p("AAbBGIgqg8IgRARIAAArIgeAAIAAiLIAeAAIAAA9IA4g9IAlAAIg5A8IA8BPg");
	this.shape_12.setTransform(74.9,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0136AB").s().p("AgOBGIAAiLIAdAAIAACLg");
	this.shape_13.setTransform(59.3,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0136AB").s().p("AAnBGIAAhaIgnA6IAAAAIgng6IAABaIgeAAIAAiLIAhAAIAkA7IAkg7IAiAAIAACLg");
	this.shape_14.setTransform(48.2,12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0136AB").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_15.setTransform(34,12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0136AB").s().p("Ag2BGIAAiLIA4AAQAMAAAKAEQAKACAHAIQAOANAAAWQAAAWgQANQgIAHgKADQgKADgLAAIgYAAIAAAqgAgYAAIAYAAQALABAHgGQADgDABgDQACgEAAgFQAAgFgCgEQgBgEgDgCQgHgGgLAAIgYAAg");
	this.shape_16.setTransform(21.8,12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0136AB").s().p("AAaBGIgpg8IgRARIAAArIgfAAIAAiLIAfAAIAAA9IA4g9IAlAAIg5A8IA7BPg");
	this.shape_17.setTransform(8.9,12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0136AB").s().p("Ag0A0QgLgLgFgNQgFgNgBgPQABgdAVgWQAVgUAfAAQAgAAAVAUQAWAWAAAdQgBAegVAWQgLAKgNAFQgNAFgQABQgfgBgVgUgAgegfQgFAHgEAIQgCAIAAAIQAAATAMAMQAGAGAIAEQAHADAIAAQAJAAAIgDQAHgDAHgHQALgMAAgTQAAgRgMgNQgGgGgIgEQgHgDgJAAQgRAAgNAMg");
	this.shape_18.setTransform(-6.7,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0136AB").s().p("AAqBGIgNgfIg6AAIgNAfIgfAAIA8iLIAbAAIA8CLgAASAMIgSgsIgSAsIAkAAg");
	this.shape_19.setTransform(-27.3,12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0136AB").s().p("AAdBGIAAg4Ig5AAIAAA4IgeAAIAAiLIAeAAIAAA3IA5AAIAAg3IAeAAIAACLg");
	this.shape_20.setTransform(-41.9,12.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,2.5,69.4,94.9);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdFkIAAkLIkDm8IDXAAICLEEICMkEIDTAAIkCG6IAAENg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-33.7,66.9,67.5);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlB4IAAiwIAmAAQgHgLAAgNQAAgQALgMQAMgLAQAAQATAAAMAPQALgPATAAQARAAALALQAMAMAAAQQAAANgHALIAnAAIAACwgAAIBoIBNAAIAAhBIhNAAgAhVBoIBNAAIAAhBIhNAAgAAIAXIBNAAIAAg/Ig7AAIASAfIgOAIIgWgngAhVAXIBNAAIAAg/IgXAnIgNgIIASgfIg7AAgAAOhgQgGAHAAAJQAAAKAGAHQAHAHAJAAQAKAAAHgHQAGgHABgKQgBgJgGgHQgHgHgKAAQgJAAgHAHgAgwhgQgGAHAAAJQAAAKAGAHQAIAHAJAAQAJAAAHgHQAHgHAAgKQAAgJgHgHQgHgHgJAAQgJAAgIAHg");
	this.shape.setTransform(-1.3,0.3,2.955,2.955);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-36,60.3,72.1);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkvFkIAArHIFcAAQB8AAA+A/QArAvAABFIAAACQAABwhpAvQBCAVAhAnQAkArAABFIAAACQAABdhEAzQhEA1h5AAgAh3DGICQAAQAsAAAXgRQAYgRAAggIAAgCQAAgegXgRQgXgRguAAIiPAAgAh3hHIB2AAQArAAAXgQQAYgPAAgfIAAgCQAAgegWgPQgWgRgqABIh6AAg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-33.7,57.6,67.4);


(lib.Анимация20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l3();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.5,49,51);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbACIAAgCIA3AAIAAACg");
	this.shape.setTransform(2.4,-12.2,0.591,0.591);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5ABIAAgBIBzAAIAAABg");
	this.shape_1.setTransform(2.4,-10.6,0.591,0.591);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjzACIAAgDIHnAAIAAADg");
	this.shape_2.setTransform(2.4,-8.6,0.591,0.591);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAgIAAg/IABAAIAAA/g");
	this.shape_3.setTransform(2.4,-17.9,0.591,0.591);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAKIAAgTIADAAIAAATg");
	this.shape_4.setTransform(2.4,-15.3,0.591,0.591);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPABIAAgBIAfAAIAAABg");
	this.shape_5.setTransform(2.4,-14.6,0.591,0.591);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAQIAAgfIAVAAIAAAfg");
	this.shape_6.setTransform(2.4,-13.3,0.591,0.591);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAJIAAgRIAvAAIAAARg");
	this.shape_7.setTransform(2.4,-11.3,0.591,0.591);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1AJIAAgQIBrAAIAAAQg");
	this.shape_8.setTransform(2.4,-9.8,0.591,0.591);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Aj2ABIAAgBIHtAAIAAABg");
	this.shape_9.setTransform(2.4,-9.1,0.591,0.591);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Aj3APIAAgdIHvAAIAAAdg");
	this.shape_10.setTransform(2.4,-3.5,0.591,0.591);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_11.setTransform(16.4,-6.4,0.591,0.591);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_12.setTransform(14.3,-6.4,0.591,0.591);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAgIAAg/IAFAAIAAA/g");
	this.shape_13.setTransform(12.2,-6.4,0.591,0.591);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_14.setTransform(10.1,-6.4,0.591,0.591);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_15.setTransform(8,-6.4,0.591,0.591);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAgIAAg/IAFAAIAAA/g");
	this.shape_16.setTransform(5.8,-6.4,0.591,0.591);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_17.setTransform(3.7,-6.4,0.591,0.591);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgCAgIAAg/IAFAAIAAA/g");
	this.shape_18.setTransform(0.9,-6.4,0.591,0.591);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_19.setTransform(-1.2,-6.4,0.591,0.591);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_20.setTransform(-3.3,-6.4,0.591,0.591);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAgIAAg/IAFAAIAAA/g");
	this.shape_21.setTransform(-5.4,-6.4,0.591,0.591);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_22.setTransform(-7.5,-6.4,0.591,0.591);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBAgIAAg/IADAAIAAA/g");
	this.shape_23.setTransform(-9.6,-6.4,0.591,0.591);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAgIAAg/IAFAAIAAA/g");
	this.shape_24.setTransform(-11.7,-6.4,0.591,0.591);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAhIAAg6IgVAAIAAgHIAxAAIAAAHIgVAAIAAA6g");
	this.shape_25.setTransform(33.1,17.3,0.591,0.591);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AARAhIgggyIAAAyIgJAAIAAhBIAJAAIAgAyIAAgyIAIAAIAABBg");
	this.shape_26.setTransform(26.9,17.3,0.591,0.591);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAhIAAhBIAoAAIAAAHIgfAAIAAAVIAbAAIAAAGIgbAAIAAAYIAgAAIAAAHg");
	this.shape_27.setTransform(20.9,17.3,0.591,0.591);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAYAhIAAg0IgVA0IgGAAIgVg0IABA0IgJAAIAAhBIALAAIAVA1IAVg1IALAAIAABBg");
	this.shape_28.setTransform(14.1,17.3,0.591,0.591);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXAhIAAhBIAYAAQAKAAAGAGQAHAFgBAJQAAAKgFAEQgHAFgKAAIgPAAIAAAagAgOAAIAPAAQAGAAAEgCQAEgDgBgHQABgGgEgDQgEgEgGAAIgPAAg");
	this.shape_29.setTransform(7.5,17.3,0.591,0.591);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgNAeQgGgEgDgHQgDgHAAgJIAAgEQAAgJADgIQACgGAHgEQAHgEAGgBQAHABAHAEQAGAEADAGQADAHAAAKIAAADQAAAKgDAHQgDAHgGAEQgGADgIABQgHgBgGgDgAgMgTQgFAHAAALIAAADQAAALAFAHQAEAGAIAAQAIABAFgHQAEgFABgMIAAgEQAAgKgFgIQgFgGgIAAQgHAAgFAGg");
	this.shape_30.setTransform(1.1,17.3,0.591,0.591);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTAhIAAhBIAJAAIAAA6IAeAAIAAAHg");
	this.shape_31.setTransform(-4.8,17.3,0.591,0.591);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAhIAAhBIAoAAIAAAHIgfAAIAAAVIAbAAIAAAGIgbAAIAAAYIAgAAIAAAHg");
	this.shape_32.setTransform(-10.5,17.3,0.591,0.591);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgDAhIgYhBIAKAAIARA1IASg1IAKAAIgZBBg");
	this.shape_33.setTransform(-16.6,17.3,0.591,0.591);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAhIAAhBIAoAAIAAAHIgfAAIAAAVIAbAAIAAAGIgbAAIAAAYIAgAAIAAAHg");
	this.shape_34.setTransform(-22.4,17.3,0.591,0.591);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgXAhIAAhBIATAAQAIAAAGAEQAHAEADAHQAEAIAAAIIAAADQAAAIgEAIQgDAHgHAEQgHAEgIAAgAgOAaIAJAAQAIAAAHgHQAFgGAAgLIAAgDQAAgLgFgGQgFgHgJAAIgKAAg");
	this.shape_35.setTransform(-28.5,17.3,0.591,0.591);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhIBlIAAgGIAVgCIAAi5IgVgBIAAgHICKAAIABA5IgFAAIgEgQQgBgFgFgIQgCgGgGgFQgDgEgJgDQgGgCgLAAIgdABIAABUIAOAAQAPABAGgIQAHgHAAgTIAHAAIAABLIgHAAQAAgUgHgHQgGgHgPgBIgOABIAABaQARACASAAIAOgBQAHgBAEgDIAIgHIAGgKIAHgcIAGAAIgBA6g");
	this.shape_36.setTransform(39.7,6.4,0.591,0.591);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhXBlIAAgGIAWgCIAAi5IgWgBIAAgHIBIAAQAaAAAWAHQAVAIALANQAMAPAGARQAFAQAAAZQAAASgDAOQgFAQgGALQgJANgLAJQgLAIgRAGQgTAFgSAAgAgdhbIAAC2IAOACQAPAAAKgEQAKgEAJgKQAHgIAFgMQAFgLADgPQABgSAAgLQABgQgCgNQgCgNgEgMQgFgNgHgIQgHgIgLgFQgMgEgOAAIgQABg");
	this.shape_37.setTransform(29.5,6.4,0.591,0.591);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgnBlIAAgGIAWgCIAAi5IgWgBIAAgHIBPAAIAAAHIgWABIAAC5IAWACIAAAGg");
	this.shape_38.setTransform(20.7,6.4,0.591,0.591);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfBmQgMgDgIgGQgHgGgEgGQgEgJAAgFIACgJQABgEADgDIAHgFIAJgCQAFABAEABQAEACACADQADADABADIABAIQAAALgFAEQgGAGgJAAIAAAAIAEADIAIAEIANAEQAHABALAAQAIAAAHgCQAHgCAIgFQAIgEADgGQAEgGAAgIQAAgHgCgFQgCgGgIgFQgEgFgOgIIgegPQgOgHgJgHQgIgFgFgJQgGgIgCgIIgCgSQAAgMAEgKQAFgLAIgHQAHgIANgEQAMgFAOAAQAPAAAKAEQALACAHAHQAHAFAEAHQADAIAAAIQAAAFgCADIgDAHQgCACgFACQgFACgEAAQgFAAgEgCQgEgBgCgCQgDgDgBgEQgCgDAAgFIACgJIAEgHIAHgDIAIgBIAAgBIgCgEIgIgDQgFgDgGgCQgGgBgJAAQgLAAgGACQgJADgFAEQgEAEgDAGQgDAHAAAHQAAAGABAFQACAFAEAFQAEAEAKAHIAXAMQAQAHANAIQALAFAJAJQAHAHAEAKQACAKAAANQAAALgDAKQgEAKgJAIQgJAIgMAFQgOAFgPAAQgQAAgPgEg");
	this.shape_39.setTransform(13.1,6.4,0.591,0.591);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABBBlQgKAAgHgCQgGgBgHgFQgFgGgFgIQgFgJgMgcIgJgWIgGgHIgGgFIgHgCIgJAAIAABXIAVACIAAAGIhQAAIAAgGIAWgCIAAi5IgWgBIAAgHIBMAAQANAAAOACQALADAMAGQAKAGAFAKQAFAKABANQAAAZgQANQgQAMgbAFQAKAAAJAEQAJADAFAGQAFAEAFALQADAFAGAOIALAWQAGAJADAEQAGAFADAAIAIABIAAAIgAgdhbIAABaIAFAAQAZAAAJgMQALgMAAgZQAAgLgDgKQgDgJgFgDQgHgFgEgCQgGgCgJAAg");
	this.shape_40.setTransform(3.4,6.4,0.591,0.591);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhIBlIAAgGIAVgCIAAi5IgVgBIAAgHICKAAIABA5IgGAAQgBgLgCgFIgGgNQgEgIgEgDQgFgEgHgDQgGgCgLAAIgdABIAABUIAOAAQAOABAHgIQAHgIAAgSIAHAAIAABLIgHAAQAAgTgHgIQgGgHgPgBIgOABIAABaIAiACIAPgBQAHgBAEgDIAIgHIAGgKQACgEACgJIADgPIAGAAIgBA6g");
	this.shape_41.setTransform(-7.6,6.4,0.591,0.591);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAFBmIhOjDIgWgCIAAgGIBPAAIAAAGIgTACIA3COIAAAAIAyiOIgTgCIAAgGIAtAAIAAAGIgRACIhEDDg");
	this.shape_42.setTransform(-18.2,6.4,0.591,0.591);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgnBlIAAgGIAWgCIAAi5IgWgBIAAgHIBPAAIAAAHIgWABIAAC5IAWACIAAAGg");
	this.shape_43.setTransform(-26.9,6.4,0.591,0.591);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ABBBlQgLAAgGgCQgHgCgFgEQgHgFgEgJIgag7IgGgHQgEgEgDgBQgCgCgFAAIgJAAIAABXIAWACIAAAGIhQAAIAAgGIAWgCIAAi5IgWgBIAAgHIBLAAQAOAAAOACQAMADAKAGQALAGAFAKQAGAKgBANQAAAZgPANQgQAMgbAFQAJAAAKAEQAJAEAEAFQAGAFAFAKIAJATIALAWQAGAJAEAEQAEAEAEABIAIABIAAAIgAgehbIAABaIAGAAQAYAAAKgMQALgMgBgZQABgNgDgIQgDgIgFgEQgHgFgEgCQgGgCgJAAg");
	this.shape_44.setTransform(-34.8,6.4,0.591,0.591);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-19.7,84,39.1);


(lib.Анимация12копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01259C").s().p("AskQGMAAAggLIZJAAMAAAAgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-103,161,206);


(lib.Анимация12копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AskQGMAAAggLIZJAAMAAAAgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-103,161,206);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0136AB").s().p("AskQGMAAAggLIZJAAMAAAAgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-103,161,206);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7B3IAAhTIgxAAIg8BTIgyAAIBChYQgbgIgPgRQgQgSAAgcQAAgmAagUQAYgUAsAAIBjAAIAADtgAgkhFQgNAKgBATIAAAAQAAATAOALQANAKAXAAIA7AAIAAhQIg7AAQgXAAgNALg");
	this.shape.setTransform(73.9,-0.9,0.383,0.383);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUB3IAAjGIhLAAIAAgnIC/AAIAAAnIhLAAIAADGg");
	this.shape_1.setTransform(64.8,-0.9,0.383,0.383);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUB3IAAjGIhLAAIAAgnIC/AAIAAAnIhLAAIAADGg");
	this.shape_2.setTransform(55.8,-0.9,0.383,0.383);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA+B3IAAirIiACrIglAAIAAjtIAqAAIAACnIB9inIAnAAIAADtg");
	this.shape_3.setTransform(45.9,-0.9,0.383,0.383);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACBB3IhYhnIgVAAIAABnIgoAAIABhnIgXAAIhXBnIgxAAIBqh5Ihkh0IAyAAIBTBkIAUAAIgBhkIAoAAIAABkIATAAIBUhkIAyAAIhkB0IBqB5g");
	this.shape_4.setTransform(33.2,-0.9,0.383,0.383);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA7B3IAAhTIgxAAIg8BTIgyAAIBChYQgagIgPgRQgRgSAAgcQAAgmAagUQAZgUArAAIBjAAIAADtgAglhFQgNAKAAATIAAAAQAAATAOALQANAKAXAAIA7AAIAAhQIg7AAQgYAAgNALg");
	this.shape_5.setTransform(16.1,-0.9,0.383,0.383);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABKB3IhKi0IhLC0IgtAAIBmjtIAkAAIBnDtg");
	this.shape_6.setTransform(6.2,-0.9,0.383,0.383);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABcCQIAAgxIi4AAIAAAxIgnAAIAAhXIAXAAIBXjIIArAAIBWDIIAYAAIAABXgAhBA7ICBAAIhAicg");
	this.shape_7.setTransform(-4.7,0.1,0.383,0.383);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhbB3IAAjtIBcAAQAqAAAZAWQAYAWAAAkIAAAAQAAAmgcAWQgaAVgoAAIgvAAIAABMgAgxAFIAwAAQAWAAAPgLQAOgMAAgSIAAgBQAAgVgPgLQgNgLgXAAIgwAAg");
	this.shape_8.setTransform(-19.2,-0.9,0.383,0.383);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUB3IAAjtIApAAIAADtg");
	this.shape_9.setTransform(-26.5,-0.9,0.383,0.383);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUB3IAAjGIhLAAIAAgnIC/AAIAAAnIhLAAIAADGg");
	this.shape_10.setTransform(-33.3,-0.9,0.383,0.383);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhKBXQghgjAAgzIAAgBQAAgyAhgkQAkgkAzAAQAfAAAYALQAUAIASASIgaAfQgggdgjAAQggAAgWAZQgXAYAAAiIAAAAQAAAkAWAYQAXAYAgAAQAVAAAQgIQAOgHASgPIAbAbQgUAVgWAKQgXALggAAQgyAAgkgkg");
	this.shape_11.setTransform(-42.8,-0.9,0.383,0.383);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhZBXQgigjAAgzIAAgBQAAgyAjgjQAjglA1AAQA2AAAkAkQAiAjAAAzIAAAAQAAAzgjAjQgkAlg1AAQg1AAgkgkgAg5g6QgWAXAAAjIAAAAQAAAjAWAZQAYAYAhAAQAjAAAXgYQAWgYAAgjIAAgBQAAgigWgYQgXgZgjAAQgiAAgXAZg");
	this.shape_12.setTransform(-53.8,-0.9,0.383,0.383);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhbB3IAAjtIBdAAQApAAAZAWQAYAWAAAkIAAAAQAAAmgcAWQgaAVgoAAIgvAAIAABMgAgxAFIAwAAQAXAAAOgLQAOgMAAgSIAAgBQAAgVgOgLQgOgLgXAAIgwAAg");
	this.shape_13.setTransform(-63.9,-0.9,0.383,0.383);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA4B3IAAjHIhvAAIAADHIgqAAIAAjtIDDAAIAADtg");
	this.shape_14.setTransform(-74,-0.9,0.383,0.383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-5.5,155.5,11.1);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACxFkIgwh/IkFAAIgwB/IjFAAIEfrHIC0AAIEgLHgAhNBMICXAAIhLjHg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-33.7,71.6,67.5);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCFkIAArHIC9AAIAAIaIFIAAIAACtg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-33.7,49.1,67.4);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXFTQhUgfhAg6IBriDQBpBVB0AAQAnAAAUgNQAVgMgBgXIAAgCQAAgYgWgOQgZgOhEgSQiCgeg2gnQhLg1AAhjIAAgCQAAhlBHg/QBJhAB5AAQCpAABxBeIhfCMQgvgjgygSQgwgRguAAQghAAgTANQgRAMAAAUIAAACQAAAZAYAOQAYAOBHARQCAAdA6AtQBFA0AABeIAAACQAABshNA/QhKA9h/AAQhcAAhRgdg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-34.8,56.8,69.8);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB4FkIjTkRIhKAAIABERIi9AAIAArHIC9AAIgBENIBKAAIDNkNIDiAAIkbFZIEpFug");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-33.7,67,67.4);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdFkIAAkKIkDm9IDWAAICLEDICNkDIDTAAIkCG5IAAEOg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-33.7,66.9,67.4);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABoFkIiIjYIhjAAIAADYIi9AAIAArHIFRAAQCUAABKBMQA8BAAABmIAAACQAABQgnA4QgjA2hCAdICiD4gAiDgNICMAAQAvAAAbgXQAbgWAAgoIAAgCQAAgpgbgXQgbgVgwAAIiLAAg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-33.7,60.8,67.5);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131413").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape.setTransform(186.5,146.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131413").s().p("AgGA8IAAhpIgzAAIAAgOIBzAAIAAANIgyAAIAABqg");
	this.shape_1.setTransform(250.8,146.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#131413").s().p("AgeA9IAXgoIg2hRIAUAAIArBDIAqhDIASAAIhLB5g");
	this.shape_2.setTransform(165,146.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131413").s().p("AAkA8IAAg6IhHAAIAAA6IgPAAIAAh3IAPAAIAAAvIBHAAIAAgvIAPAAIAAB3g");
	this.shape_3.setTransform(210.9,146.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#131413").s().p("AAqBKIAAgbIhgAAIAAh4IAPAAIAABqIA+AAIAAhqIAPAAIAABqIARABIAAAog");
	this.shape_4.setTransform(239.7,147.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#131413").s().p("AA4BKIAAgZIhvAAIAAAZIgNAAIAAgoIAQAAIAuhrIALAAIAvBrIARAAIAAAogAglAiIBKAAIgmhWg");
	this.shape_5.setTransform(177.1,147.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#131413").s().p("Ag5A9IAAh5IBNABQAVABAGAPQAIAWgQAOQARAJACARQACASgKALQgKAMgSABgAgqACIAAAtIBAAAQAVgBgBgXQAAgVgWgBIg4AAgAgqgMIA/gBQAHAAADgFQAEgFgBgHQgBgPgNAAIg+AAg");
	this.shape_6.setTransform(263.3,146.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#131413").s().p("Ag5g7IBUAAQAQABAFAQQAGAVgOANQATAMgBAVQAAAPgJAJQgJAKgPABIhSAAgAgqAuIBCAAQADAAAEgCQAOgHgCgSQgCgIgFgFQgFgFgHAAIhCAAgAgqgNIA+AAQAIgBAEgFQAEgEgBgIQgBgPgQAAIg8AAg");
	this.shape_7.setTransform(196.7,146.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#131413").s().p("Ag3A9IAAh5IBiABIAAAOIhSAAIAAAiIA7ABQAkABAAAhQAAARgKAKQgLAKgQAAgAgoAwIA2AAQAHAAAFgCQAOgEAAgQQABgRgOgFIgGgCIg9AAg");
	this.shape_8.setTransform(151.8,146.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#131413").s().p("AgGA9IAAh5IAOAAIAAB5g");
	this.shape_9.setTransform(69.5,146.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#131413").s().p("AgtA9IAAh5IBbAAIAAANIhMAAIAABsg");
	this.shape_10.setTransform(86.4,146.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#131413").s().p("AAkA9IAAg7IhIAAIAAA7IgOAAIAAh5IAOAAIAAAwIBIAAIAAgwIAPAAIAAB5g");
	this.shape_11.setTransform(124.8,146.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#131413").s().p("Ag2A9IAAh5IBPAAQAOABAIAKQAIAJgBAOQAAAPgJAJQgJAIgOABIg8AAIAAA2gAgmgGIA6gBQASAAAAgTQAAgTgRgBIg7AAg");
	this.shape_12.setTransform(98.3,146.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#131413").s().p("Ag6A+IAAh7IBPABQAWABAFARQAHAVgPANIAAABQAWAMgDAYQgCAOgKAJQgJAJgQABgAgrAvIBCAAQAJAAAGgGQAFgGAAgKQAAgKgFgHQgGgGgJgBIhCAAgAgrgMIA9AAQASgBgBgQQgBgQgRgBIg8AAg");
	this.shape_13.setTransform(45.5,146.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#131413").s().p("AgGA+IAAh7IANAAIAAB7g");
	this.shape_14.setTransform(134.5,146.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#131413").s().p("AgjA0QgRgNgFgYQgHgcAQgXQAPgXAcgEIACgBIANAAIARAFQATAHALARIgMAJQgSgUgVgDQgUgCgQAQQgOAPABAWQABAXAPAOQASAPATgFQAVgEARgWIAMAIQgTAhgkAAIgCABQgWAAgQgNg");
	this.shape_15.setTransform(59.8,146.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#131413").s().p("AA1A9IgRghIhHAAIgRAhIgRAAIA/h5IAMAAIBAB5gAgcAOIA4AAIgcg1g");
	this.shape_16.setTransform(277.4,146.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#131413").s().p("AAkAcIhHAAIgRAgIgRAAIA/h4IAMAAIBBB4IgSAAIAAABIgRghgAgbANIA4AAIgdg0g");
	this.shape_17.setTransform(110.5,146.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#131413").s().p("AAnA8IAAhaIgDgBIhOBbIgLAAIAAh3IAPAAIAABcIBQhcIALAAIAAB3g");
	this.shape_18.setTransform(224.9,146.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006242").s().p("AiGDKIAAgPQANAAAGgGQAGgEADgIQACgJABgMIADk3IglABIAAgVIAcgBIARgEIALgEIAGgGIAPAAIACAcQAJgGAJgGQAKgHAKgDQAKgEALgCQAMgDAKAAQAWAAAVAJQAVAJAQARQAPAPAKAaQAKAXAAAfQAAAXgFAUQgGAUgIAPQgKARgMAMQgMANgPAJQgQAKgPAEQgRAFgSAAQgiAAgbgRIgDB6IAhgCIAAAWgAgNitIgRAHQgGADgIAGIgNALIAAC1QANAKAQAGQAOAFARAAQATAAAPgJQAOgIALgQQAKgQAGgWQAGgWAAgaQAAgUgFgVQgEgVgKgPQgKgQgOgJQgPgKgWAAQgJAAgIACg");
	this.shape_19.setTransform(310.3,117.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006242").s().p("Ag7CEQgPgFgMgOQgKgOgFgVQgGgXAAggIACh+IgkACIAAgWIAQAAIATgBIAOgDIAKgEIAGgGIAPAAIAACfQAAAYAEAQQADASAGAJQAHALALAGQALAFAPAAQAHAAAMgDQAJgDAJgGQAIgFAIgIQAIgIAFgHIAAicIACgSIglACIAAgWIAQAAIATgBIAOgDIAJgEIAHgGIAPAAIgBDqIgBAMIAlgCIAAAWIhLAAIgEgfIgSAPQgKAHgLAGQgLAFgMADQgKAEgMAAQgVAAgRgGg");
	this.shape_20.setTransform(282.2,111.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006242").s().p("AgzCBQgYgKgRgRQgSgRgLgZQgJgXgBgfQABgfAJgZQAKgaASgUQATgVAXgKQAYgMAbAAQAcAAAYALQAXAKASARQASATAKAYQALAYAAAcQAAAfgLAZQgJAbgTAUQgRAUgYALQgaALgaAAQgbABgYgLgAgjhtQgPAJgJAPQgJAQgFAUQgEARAAAYQAAAXAFAXQAFAYAKASQALARAOALQARALATAAQAVAAANgJQAQgLAIgPQAJgPADgUQAEgRAAgXQAAgZgEgUQgFgYgJgRQgJgSgPgMQgQgMgUAAQgVAAgOAKg");
	this.shape_21.setTransform(253.3,111.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006242").s().p("AhhCHIAAgPQANAAAFgFQAGgFADgIQADgIABgMIAAihIACgSIglACIAAgWIAQAAIATgBIAMgDIAIgEIAHgGIAPAAIACA0QAGgKAJgKQALgLAJgGQAMgIANgFQAPgFAMAAIAOACQAHACAFAEQAGAFACAFQADAGAAAJIgBAIQgBADgEAFQgCAEgGACQgEADgIAAQgGAAgFgDQgEgCgDgEQgEgEgBgFQgCgFABgGQgJgBgLAEQgJAEgLAIQgJAHgJALQgJANgGALIgCCjIAggBIAAAVg");
	this.shape_22.setTransform(230.7,110.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006242").s().p("AhLCzQghgNgXgXQgYgZgMghQgNghAAgsQAAgZAFgXQAEgYALgXQAKgWAPgTQAOgTAVgOQAUgOAagIQAYgIAfAAQAPAAAOACIAcAGQAPAEAMAFIAYAMIgCgZIAdAAIAAB4IgTAAQgCgagJgSQgKgUgOgMQgRgOgSgGQgVgHgWAAQgcAAgXAMQgZANgSAWQgSAWgLAeQgJAegBAmQAAAnAKAcQALAgASAWQASAXAaANQAaAMAeAAIAWgBQAMgCALgDIAXgIQANgGAJgGIAAhyIglACIAAgXIB2AAIAAARQgJAAgHAEQgGADgFAGQgDAFgDAIIgEAbIAABZIgOAAQgJAAgPADQgOADgTAIIgSAFIgUAFIgUADIgSABQgmAAgigNg");
	this.shape_23.setTransform(200.4,106.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006242").s().p("AgWAyQgSgNgHgXQgGgXAJgUQAJgVAUgGQATgFASANQATAMAHAYQAGAWgJAVQgJAUgUAGQgGABgGAAQgNAAgNgIg");
	this.shape_24.setTransform(134.8,52.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006242").s().p("AgPA5QgUgGgJgUQgJgVAHgWQAGgYATgMQASgNATAFQAUAGAJAVQAJAUgHAXQgGAXgTANQgNAIgMAAQgGAAgGgBg");
	this.shape_25.setTransform(189.3,52.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006242").s().p("AgnAvQgSgUABgbQgBgaASgUQARgTAWAAQAYAAARATQAQAUAAAaQAAAcgQATQgRATgYABQgWgBgRgTg");
	this.shape_26.setTransform(162.1,48.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006242").s().p("AgBF4QiTAAh/gQQiHgSgUgYQgEgGgBgFIgWhpQgShWgKgOQgLgOiAhsQh8hrAAgCQAAgFACgEIACgDQADgEAmAGQArAFAJgCQAHgCAOgNQAMgJAIgBQAPAAAKAIQAJAKAAAOIgBAGQAKAaAjASQAjATAcgFQAlgFASgcQALgQALgnQACgIgMgIQgOgIgDgNQgFghAogMQgKgCgHgIQgGgIAAgJQAAglAagGQAPgDAPARQANAPAAAOQAAAPgOAJQAgABARAJQAUAKgCATIgEANQgDAHACAEQADAJAmAaQArAeAcAAQAhAAArggQAngeAFgTQgHgEgIgHQgQgNgBgMQgDgXASgTQARgSAcgIQgGgJAAgLQAAgRAKgUQAMgXAOAAIAAABIACgBQANAAAMAXQALAUAAARQAAANgGAHQAcAIAQASQATATgDAXQgCAMgQANIgOALQAFATAnAeQArAgAgAAQAdAAArgeQAlgaADgJQACgEgDgHIgEgNQgCgTAUgKQARgJAggBQgOgJAAgPQAAgOANgPQAPgRAPADQAaAGAAAlQAAAJgGAIQgHAIgKACQAoAMgFAhQgCANgPAIQgMAIACAIQALAnALAQQASAcAlAFQAcAFAjgTQAjgSAKgaIgBgGQAAgOAKgKQAJgIAPAAQAIABAMAJQAOANAHACQAJACArgFQAmgGADAEIACADQACAEAAAFQAAACh8BrQiABsgLAOQgKAOgSBWQgUBjgCAGQgBAFgEAGQgTAYiIASQh/AQiSAAgAkUEKQhtATgTATQAdAQBpANQB8AQCRAAIAEAAQCRAAB7gQQBpgNAdgQQgTgThsgTQiBgXiSgBIgEAAQiTABiAAXgAABDSQCSAACLAZQB2AWAZAUQAGgOAIhCQAJhEACgHQACgFgCgGIgCgGQgYghh+gbQiHgdikAAIgFAAQijAAiIAdQh9AbgYAhIgDAFQgCAGACAGQADAIAIBDQAJBCAGAOQAYgUB2gWQCMgZCRAAgAC5AAQBgAJBEASQBUAWAwAUIBehjQgZAEghAAQhAACgggNQghgNgZg1IgTgyQgcAWglAWQhKArgqgCQgqgEhBhAIg4hBQgWAgggAhQhBBAgqAEQgqAChKgrIhCgsQgGAXgNAbQgZA1ggANQghANhAgCIg6gEIBfBjIAkgPQAtgQAygLQBJgQBcgKQBggIBXgBQBgAABZAIg");
	this.shape_27.setTransform(162,37.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006242").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_28.setTransform(162.1,29.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006242").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_29.setTransform(131.2,33.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006242").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_30.setTransform(192.8,33.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#131413").s().p("AAACqQgHAAgJgFQgHgDgIgHQgHgHgFgLQgGgJgDgRQgDgPAAgVIABiWIgoAAIAAgXQAOAAALgHQAKgGAKgMQAKgNAFgLIAJgYIASAAIgBBJIBYAAIAAAVIhYABIAACRQAAATACAMQABAPAFAIQAEAKAHAEQAJAFAKAAQANAAAOgIQAOgJAKgOIAOALQgNASgKAJQgLAJgLAGQgNAGgGAAIgPACg");
	this.shape_31.setTransform(155.3,108);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#131413").s().p("AgnCCQgXgIgTgSQgSgSgJgYQgLgZAAghQAAgQAFgSQAEgQAJgSQAIgQAMgOQANgNAOgKQASgLAQgEQASgHATAAQAVABASAFQASAFANAJQANAKAHALQAHALAAANQAAAMgHAIQgGAIgMAAQgHAAgEgCIgHgGIgFgIIgBgHIACgLQABgGAFgEQgDgKgHgFQgIgGgHgDQgJgEgHAAIgOgBQgRAAgPAHQgPAIgMAOQgLANgHAWQgGAUAAAcQAAAaAGAVQAHAWAMAQQAKAPASAKQAPAJAVAAQANAAALgDQALgDAMgHQALgGAJgJQAJgIAGgJIAOAKQgLASgNAKQgMALgQAJQgQAHgOAEQgSAEgKgBQgaABgXgKg");
	this.shape_32.setTransform(132.2,111.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#131413").s().p("AgqCBQgXgIgSgTQgRgRgKgbQgKgZAAggQAAgcAKgYQAJgZARgUQARgSAagNQAYgMAdAAQAVABATAHQATAHAPAOQAOAPAJAVQAJAVAAAfIi4ACQAAAeAFAYQAEAaALAQQALASAQAJQARAKAWAAQAJAAAQgDQAJgDAPgGQAMgGALgJQAKgIAGgJIANAKQgLARgOAMQgNAJgQAJQgRAIgOACQgOADgPAAQgZABgYgLgAgmhkQgUATgGAoICEAAQAAgPgDgNQgDgOgGgKQgHgLgLgHQgLgHgPAAQgeAAgUASg");
	this.shape_33.setTransform(106.2,111.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#131413").s().p("AhTDHIAAgQQAMAAAHgEQAGgFADgJQACgHAAgNIAAi4IgrABIAAgYIArAAIAAgLQAAgaAFgaQAFgXALgQQAMgRASgIQARgJAaAAQAHAAALACQALADAHAEQAIAFAGAHQAFAIABAJQAAALgHAHQgFAGgKABQgHAAgEgCQgEgDgDgDQgCgDgCgFIAAgGIAAgGIACgHQgEgGgGgBQgGgCgGAAQgNAAgIAGQgHAFgFAIQgEALgCAKQgCAKAAAMIAAA3IBGAAIAAAUIhGACIAADKQAAAJgBAIIAggBIAAAVg");
	this.shape_34.setTransform(86.5,104.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#131413").s().p("AhhCHIAAgPQANAAAFgFQAGgFADgIQADgIAAgMIABihIACgSIglACIAAgWIAQAAIATgBIAMgDIAIgEIAHgGIAPAAIACA0QAGgKAJgKQALgLAJgGQAMgIANgFQAPgFAMAAIAOACQAHACAFAEQAFAFADAFQADAGAAAJIgBAIQgCAFgDADQgEAEgEACQgFADgHAAQgFAAgGgDQgEgCgDgEQgEgEgBgFQgCgFABgGQgJgBgLAEQgJADgLAJQgKAIgIAKQgLAPgEAJIgCCjIAggBIAAAVg");
	this.shape_35.setTransform(63.9,110.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#131413").s().p("AgrCBQgWgIgSgTQgQgRgLgbQgJgZAAggQAAgcAJgYQAJgZASgUQASgTAXgMQAZgMAcAAQAWABAUAHQASAHAPAOQAOAPAJAVQAIAVAAAfIi2ACQgBAeAFAYQAEAYAMASQAJARARAKQASAKAUAAQALAAAPgDQAIgDARgGQALgGAKgJQALgIAGgJIAMAKQgKASgOALQgNAJgRAJQgPAHgPADQgPADgOAAQgZABgZgLgAgmhkQgUATgGAoICFAAQAAgPgEgNQgDgOgHgKQgGgLgLgHQgLgHgPAAQgdAAgVASg");
	this.shape_36.setTransform(39.7,111.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#131413").s().p("AiJC4IAAgRQAPgBAIgFQAHgEADgJQADgIAAgMIABkPIABgSIgmACIAAgXIB1gBQBMAAAnAaQArAcAAA1QAAAKgDAPQgDAOgHANQgIAPgMALQgNANgUAKQgSAJgcAGQgZAGglAAIgTAAIAABkQAAALgCAGIAxgDIAAAYgAgqieQgGAEgEAJQgDAJAAALIAACVIAiACQAWAAATgHQAUgGAPgNQAOgLAJgTQAJgTAAgWQAAgYgIgSQgJgTgOgJQgNgLgVgFQgUgFgXAAQgOAAgHAEg");
	this.shape_37.setTransform(13.8,106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,324.1,155.2), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(24.5,25.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,51);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41,19);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-0.7,84,39.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(162.5,162.5,1,1,0,0,0,162.5,162.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325,325);


(lib.Символ1копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация12копия3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.5,103,0.006,1,0,0,0,8.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,0,1,206);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация12копия("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.5,103,0.006,1,0,0,0,8.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,0,1,206);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.5,103,0.006,1,0,0,0,8.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,0,1,206);


(lib.Символ8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19m();
	this.instance.parent = this;
	this.instance.setTransform(32.9,-140.5,0.554,0.554,0,0,0,67,67);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:-16.1,y:-180.5,alpha:1},15).to({scaleX:0.41,scaleY:0.41,x:-86.1,y:-233.5,alpha:0},14).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19m();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,-151,1,1,0,0,0,67,67);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-14.6,y:-181.5,alpha:0.641},15).to({x:-48,y:-206,alpha:0.301},12).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-162.4,134,134);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_1 = new cjs.Graphics().p("A1gDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_2 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_3 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_4 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_5 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_6 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_7 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_8 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_9 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_10 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_11 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_12 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_13 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_14 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");
	var mask_graphics_15 = new cjs.Graphics().p("A1HDyIAAnkMAqPAAAIAAHkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-152.9,y:-2.4}).wait(1).to({graphics:mask_graphics_1,x:-137.7,y:-2.4}).wait(1).to({graphics:mask_graphics_2,x:-127.6,y:-2.4}).wait(1).to({graphics:mask_graphics_3,x:-114.9,y:-2.4}).wait(1).to({graphics:mask_graphics_4,x:-102.3,y:-2.4}).wait(1).to({graphics:mask_graphics_5,x:-89.6,y:-2.4}).wait(1).to({graphics:mask_graphics_6,x:-76.9,y:-2.4}).wait(1).to({graphics:mask_graphics_7,x:-64.3,y:-2.4}).wait(1).to({graphics:mask_graphics_8,x:-51.6,y:-2.4}).wait(1).to({graphics:mask_graphics_9,x:-38.9,y:-2.4}).wait(1).to({graphics:mask_graphics_10,x:-26.3,y:-2.4}).wait(1).to({graphics:mask_graphics_11,x:-13.6,y:-2.4}).wait(1).to({graphics:mask_graphics_12,x:-0.9,y:-2.4}).wait(1).to({graphics:mask_graphics_13,x:11.7,y:-2.4}).wait(1).to({graphics:mask_graphics_14,x:24.4,y:-2.4}).wait(1).to({graphics:mask_graphics_15,x:37.1,y:-2.4}).wait(25));

	// Слой 1
	this.instance = new lib.Анимация11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.8,5.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.2,6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({y:46,alpha:1},7).to({y:36},4).wait(27));

	// Слой 6
	this.instance_2 = new lib.Анимация5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(160.1,208);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({alpha:1},9).wait(35));

	// Слой 7
	this.instance_3 = new lib.Анимация6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.2,208);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},9).wait(37));

	// Слой 8
	this.instance_4 = new lib.Анимация7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(28.4,207.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({alpha:1},9).wait(39));

	// Слой 2
	this.instance_5 = new lib.Анимация8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(165,122.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},9).wait(41));

	// Слой 3
	this.instance_6 = new lib.Анимация9("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(98.7,122.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({alpha:1},9).wait(43));

	// Слой 4
	this.instance_7 = new lib.Анимация1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(33.7,122.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({alpha:1},9).wait(45));

	// Слой 9
	this.instance_8 = new lib.Анимация3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(98.6,37);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({alpha:1},9).wait(49));

	// Слой 10
	this.instance_9 = new lib.Анимация4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(35.3,37);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},9).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,3.3,60.8,67.5);


(lib.Анимация18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-0.2,0.256,0.256,0,0,0,162.1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-20,83,39.7);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41,19.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,83,39.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ18("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(299,26.7,1,1,0,0,0,24.5,25.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(27));

	// Слой 2
	this.instance_1 = new lib.Символ17("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(195.8,27.8,1.289,1.288,0,0,0,41,19.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(34));

	// Слой 1
	this.instance_2 = new lib.Символ12("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.4,28.6,1.25,1.25,0,0,0,40.9,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.5,3.8,105,48.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-96.7,128.6,0.64,0.64,0,0,0,101,18.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).wait(87));

	// Слой 2
	this.instance_1 = new lib.Символ1копия3("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.1,146.4,1.975,0.34,0,0,0,80.9,104);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({_off:false},0).wait(93));

	// Слой 3
	this.instance_2 = new lib.Символ11("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-144.7,90.4,0.461,0.461,0,0,0,41,19.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(174).to({_off:false},0).wait(77));

	// Слой 4
	this.instance_3 = new lib.Символ1копия("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-87.8,93.6,0.993,0.171,0,0,0,80.7,103.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(170).to({_off:false},0).wait(81));

	// Слой 15
	this.instance_4 = new lib.Символ3("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-86.1,54,0.778,0.773,0,0,0,77.9,5.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(243));

	// Слой 14
	this.instance_5 = new lib.Символ1_1("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-86.8,-41.4,0.647,0.647,0,0,0,97.5,122.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(243));

	// Слой 13
	this.instance_6 = new lib.Символ1("synched",12,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-83.9,-32.3,1.043,1.043,0,0,0,80.6,103.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(251));

	// Слой 17
	this.instance_7 = new lib.Символ5("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-63.1,123.2,0.63,0.63,0,0,0,102.2,15);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).wait(162));

	// Слой 8
	this.instance_8 = new lib.Символ5копия("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-68.8,98,0.593,0.593,0,0,0,102.1,15);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(78).to({_off:false},0).wait(173));

	// Слой 7
	this.instance_9 = new lib.Символ8копия("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(8.2,534.1,1,1,0,0,0,89,75);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(77).to({_off:false},0).wait(174));

	// Слой 10
	this.instance_10 = new lib.Символ10("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-103.5,68.4,1,1,0,0,0,162.5,162.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(76).to({_off:false},0).wait(175));

	// Слой 5
	this.instance_11 = new lib.Анимация20("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-407},250).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,400,600);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_714 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(714).call(this.frame_714).wait(1));

	// Слой 12
	this.instance = new lib.Символ7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,194,1,1,0,0,0,42,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(715));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,400,600);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"l3.png", id:"l3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;