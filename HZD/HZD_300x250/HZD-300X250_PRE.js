(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HZD_300X250_PRE_atlas_.png?1485989724350", id:"HZD_300X250_PRE_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"HZD_300X250_PRE_atlas_", frames: [[312,381,200,200],[906,122,100,100],[0,484,170,60],[0,0,300,250],[918,394,70,50],[714,252,310,140],[312,252,400,127],[302,0,300,250],[604,0,300,250],[514,394,200,70],[906,0,90,120],[990,394,29,34],[172,484,63,43],[514,528,140,60],[918,446,100,30],[0,252,310,230],[716,518,300,29],[716,456,200,60],[514,466,200,60],[716,394,200,60],[0,546,150,40]]}
];


// symbols:



(lib.Aloy = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circ100_black = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cta_psstore = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.endshot_bg = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.exclu = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Foreground = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Grass = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.keyart_bg = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.loader_background = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo_HZD = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.pack = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.pegi16 = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.PSenh = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ps4_label = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ps4_logo = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Raptor = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.raptor_light = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.txt1 = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.txt2 = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.txt3 = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.txt_dates = function() {
	this.spriteSheet = ss["HZD_300X250_PRE_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.txt3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-30,200,60);


(lib.txt1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-30,200,60);


(lib.txt_dates_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_dates();
	this.instance.parent = this;
	this.instance.setTransform(-75,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-20,150,40);


(lib.raptor_light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.raptor_light();
	this.instance.parent = this;
	this.instance.setTransform(-150,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-15,300,29);


(lib.raptor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Raptor();
	this.instance.parent = this;
	this.instance.setTransform(-155,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-115,310,230);


(lib.ps4_logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ps4_logo();
	this.instance.parent = this;
	this.instance.setTransform(-50,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-15,100,30);


(lib.ps4_label_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ps4_label();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,60);


(lib.pegi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pegi16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,34);


(lib.logo_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_HZD();
	this.instance.parent = this;
	this.instance.setTransform(-100,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-35,200,70);


(lib.loader_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loader_background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Grass();
	this.instance.parent = this;
	this.instance.setTransform(-200,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-127,400,127);


(lib.foreground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhUC7IADglQgoAVgLAuIgGAUIgHAFIgGAPIgKACIgHgEIgGgkIgHAKIgRAAQgJhGA5gpQAkgaAsgOIAAgXQgugLgtAMIgSAUIgNgBIgFgJQAJgRAOgOIAagZIgzgFIgCgLIADgFIBhAEIATgLIgQglQgpgghFg5IBIAgIAZALIgJgaIgdg+QgKACgYAaQgCgoAWgPIgJg0QAAgGASAUQARATAGASQAbADASAVQANAPABATQABATgLAOIAKATQAtgoAzgiQAchBA8ghQApgWApATIgEAHIgDAFIgEAEIgGAFQhUAigdBWQgLAfgHCtQAnhMBQgdIASgFIAEAJQg4AzgmBEQBKAXAlBDQAOAZgTATIgCAFIgBAEIgCACIgDAEIgEACIgEACIghgLIAgAnIgHAKQgigJgbgTQgSgMgOgRIAZAkIgDAJIgEACIgqgUIgIAKIgFAAQgGgFgEgGQgJgMgBgOIgBgUQgfAAgUAXQgaAegIAqIgLACQgQg0AEg1gAA7CFIB3BHIADgLIgGgOIgIgBIhng4gAghCXIAtAGIgDgHIgJgFIgfgHgAgUABIAMAhIAKgMIAFgEIAAgTgAhAhSIAXArIAygHIALhWQgkASgwAggAhjiaIAAgXIgUgKg");
	mask.setTransform(321.3,94.7);

	// Layer 2
	this.instance = new lib.Foreground();
	this.instance.parent = this;
	this.instance.setTransform(577,-18,1,1,0,0,180);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Foreground();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342.4,140);


(lib.exclu_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.exclu();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,50);


(lib.enha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PSenh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,43);


(lib.cta_psstore_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta_psstore();
	this.instance.parent = this;
	this.instance.setTransform(-85,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-30,170,60);


(lib.circ100_black_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circ100_black();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.big_flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#CCEDFF","#6792FF"],[0,1],0,0,0,0,0,195.3).s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg_endshot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.endshot_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keyart_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.aloy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Aloy();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.clickEXIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7C128").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.txt2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2.png
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.circ100_black_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2.5,0.7);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-35,250,70);


(lib.pack_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pack.png
	this.instance = new lib.pack();
	this.instance.parent = this;
	this.instance.setTransform(16,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// circ100_black
	this.instance_1 = new lib.circ100_black_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.1,110,2.081,0.4,0,0,0,0.1,0);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-2,208.1,132);


(lib.logo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.logo_white();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow large
	this.instance_1 = new lib.logo_white();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-46,226,96);


(lib.cta_psstore_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta_psstore_1();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#00CCFF",0,0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-70,254,144);


(lib.circ100_bokeh_redish = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.circ100_black_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.circ100_black_1();
	this.instance_1.parent = this;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 204, 0)];
	this.instance_1.cache(-52,-52,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.circ100_bokeh_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.circ100_black_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.circ100_black_1();
	this.instance_1.parent = this;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 51, 255, 153, 0)];
	this.instance_1.cache(-52,-52,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


// stage content:
(lib.HZD300X250_PRE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.button_1 = new lib.clickEXIT();
	this.button_1.parent = this;
	this.button_1.setTransform(150,125);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.clickEXIT(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(340));

	// loader_bg
	this.instance = new lib.loader_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(330));

	// big_flash
	this.instance_1 = new lib.big_flash();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(191).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(-1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(135));

	// ps4_logo
	this.instance_2 = new lib.ps4_logo_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47,16);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9).wait(331));

	// ps4_label
	this.instance_3 = new lib.ps4_label_1();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9).to({_off:true},190).wait(141));

	// logo
	this.instance_4 = new lib.logo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(203.9,31.5,1.1,1.1,0,0,0,0.2,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.logo_white();
	this.instance_5.parent = this;
	this.instance_5.setTransform(200.2,27.2,1.1,1.1,0,0,0,0.2,0.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regX:0.3,scaleX:0.9,scaleY:0.9,x:204,alpha:0.789},7,cjs.Ease.get(0.5)).to({regX:0.2,scaleX:0.85,scaleY:0.85,x:203.9,alpha:1},7,cjs.Ease.get(1)).to({_off:true},176).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(202).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,y:31.2,alpha:1},9,cjs.Ease.get(1)).wait(129));

	// txt1
	this.instance_6 = new lib.txt1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(267,141);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({x:229.7,alpha:0.93},10,cjs.Ease.get(0.9)).to({x:227,alpha:1},19,cjs.Ease.get(1)).wait(5).to({x:207,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(274));

	// txt2
	this.instance_7 = new lib.txt2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(139,113);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).to({x:106.8,alpha:0.801},7,cjs.Ease.get(0.8)).to({x:99,alpha:1},23,cjs.Ease.get(1)).wait(10).to({scaleX:0.8,scaleY:0.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(210));

	// txt3
	this.instance_8 = new lib.txt3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149,232,1.5,1.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(143).to({_off:false},0).to({scaleX:1,scaleY:1,y:222,alpha:1},7,cjs.Ease.get(1)).to({_off:true},49).wait(141));

	// circ100_bokeh_green
	this.instance_9 = new lib.circ100_bokeh_green();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-46,152.9,0.5,0.5,0,0,0,0,0.1);
	this.instance_9.alpha = 0.602;
	this.instance_9.compositeOperation = "lighter";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68).to({_off:false},0).to({x:63.6,y:103.3},18,cjs.Ease.get(0.9)).to({x:75,y:98.1},23,cjs.Ease.get(1)).wait(10).to({y:123.3},12,cjs.Ease.get(-1)).to({y:148.8},13,cjs.Ease.get(0.9)).to({y:150.1},36,cjs.Ease.get(1)).wait(5).to({x:49.8,y:164.1},10,cjs.Ease.get(-1)).to({x:42,y:170.1},3).to({_off:true},1).wait(141));

	// circ100_bokeh_red
	this.instance_10 = new lib.circ100_bokeh_redish();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1.5,145.5,0.25,0.25,0,0,0,0,0.2);
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(68).to({_off:false},0).to({regX:0.2,x:79.5,y:109},18,cjs.Ease.get(0.9)).to({regX:0.4,regY:0.4,x:87.6,y:105.2},23,cjs.Ease.get(1)).wait(10).to({y:125.6},12,cjs.Ease.get(-1)).to({y:146.1},13,cjs.Ease.get(0.9)).to({y:147.2},36,cjs.Ease.get(1)).wait(5).to({x:74.4,y:152.8},10,cjs.Ease.get(-1)).to({x:67.6,y:161.2},3).to({_off:true},1).wait(141));

	// raptor_BIGlight
	this.instance_11 = new lib.raptor_light_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-148.4,83.3,1.5,2.5,0,0,0,0.1,0.2);
	this.instance_11.compositeOperation = "lighter";
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({_off:false},0).to({regX:0,x:-13.3,y:68.8,alpha:0.641},7,cjs.Ease.get(0.8)).to({regX:0.1,x:40.7,y:63.1,alpha:0.5},23,cjs.Ease.get(1)).wait(10).to({x:40.6,y:117.5},12,cjs.Ease.get(-1)).to({y:172.1},13,cjs.Ease.get(0.9)).to({x:40.7,y:175.1},36,cjs.Ease.get(1)).wait(5).to({x:36.6,y:179.1},10,cjs.Ease.get(-1)).to({x:30.7,y:185.1},3).to({_off:true},1).wait(141));

	// raptor_light
	this.instance_12 = new lib.raptor_light_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(325.5,98.2,1.25,1.25);
	this.instance_12.alpha = 0.801;
	this.instance_12.compositeOperation = "lighter";
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(68).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:230,y:138.3,alpha:0.621},18,cjs.Ease.get(0.9)).to({scaleX:1,scaleY:1,x:220,y:142.5,alpha:0.602},23,cjs.Ease.get(1)).wait(10).to({y:126.5},12,cjs.Ease.get(-1)).to({y:110.4},13,cjs.Ease.get(0.9)).to({y:109.5},36,cjs.Ease.get(1)).wait(5).to({scaleX:1.06,scaleY:1.06,x:223.6,y:106.7},10,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:228.9,y:102.5},3).to({_off:true},1).wait(141));

	// txt_dates
	this.instance_13 = new lib.txt_dates_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(200,85);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(215).to({_off:false},0).to({y:105,alpha:1},10,cjs.Ease.get(1)).wait(115));

	// cta_psstore_glow
	this.instance_14 = new lib.cta_psstore_glow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(200,159);
	this.instance_14.alpha = 0;
	this.instance_14.compositeOperation = "lighter";
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(234).to({_off:false},0).to({alpha:0.602},8,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(18).to({_off:false},0).to({alpha:0.602},8,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(20).to({_off:false},0).to({alpha:0.602},8,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// cta_psstore
	this.instance_15 = new lib.cta_psstore_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(200,158,0.8,0.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(224).to({_off:false},0).to({scaleX:1,scaleY:1,y:159,alpha:1},10,cjs.Ease.get(1)).wait(106));

	// pegi
	this.instance_16 = new lib.pegi();
	this.instance_16.parent = this;
	this.instance_16.setTransform(7,216);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(202).to({_off:false},0).to({x:6,y:211,alpha:1},7,cjs.Ease.get(1)).wait(131));

	// exclu
	this.instance_17 = new lib.enha();
	this.instance_17.parent = this;
	this.instance_17.setTransform(159,209);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(203).to({_off:false},0).to({y:204,alpha:1},7,cjs.Ease.get(1)).wait(130));

	// exclu
	this.instance_18 = new lib.exclu_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(229,206);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(204).to({_off:false},0).to({y:201,alpha:1},7,cjs.Ease.get(1)).wait(129));

	// pack
	this.instance_19 = new lib.pack_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-39.5,144,1,1,0,0,0,67.5,64);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(207).to({_off:false},0).to({x:72.5},18,cjs.Ease.get(1)).wait(115));

	// bg_endshot
	this.instance_20 = new lib.bg_endshot();
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(199).to({_off:false},0).wait(141));

	// aloy
	this.instance_21 = new lib.aloy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(143,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({x:123.5},14,cjs.Ease.get(-1)).to({x:104.4},10,cjs.Ease.get(0.9)).to({x:103},19,cjs.Ease.get(1)).wait(5).to({x:-85.9,y:227},11,cjs.Ease.get(-1)).to({x:-257,y:304.9},18,cjs.Ease.get(0.9)).to({_off:true},1).wait(32).to({_off:false,scaleX:1.2,scaleY:1.2,x:31.1,y:361},0).to({regY:0.1,scaleX:0.95,scaleY:0.95,x:61.2,y:265.8},12,cjs.Ease.get(-1)).to({regX:0.1,scaleX:0.69,scaleY:0.69,x:91.5,y:171},13,cjs.Ease.get(0.9)).to({regY:0.4,scaleX:0.68,scaleY:0.68,x:93,y:166.1},36,cjs.Ease.get(1)).wait(5).to({scaleX:0.78,scaleY:0.78,x:86.1,y:165},10,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.92,x:75.7,y:163.3},3).to({_off:true},1).wait(141));

	// foreground
	this.instance_22 = new lib.foreground();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-5.9,57.9,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(9).to({x:-25.4},14,cjs.Ease.get(-1)).to({regX:-0.1,regY:0.1,x:-44.6,y:58},10,cjs.Ease.get(0.9)).to({regX:0,regY:0,x:-45.9,y:57.9},19,cjs.Ease.get(1)).wait(5).to({x:-237.8,y:143.9},11,cjs.Ease.get(-1)).to({x:-411.7,y:221.9},18,cjs.Ease.get(0.9)).to({_off:true},1).wait(32).to({_off:false,x:-109.9,y:270},0).to({scaleX:1.26,scaleY:1.26,x:-56.5,y:191.8},12,cjs.Ease.get(-1)).to({scaleX:1.01,scaleY:1.01,x:-2.8,y:114.1},13,cjs.Ease.get(0.9)).to({scaleX:1,scaleY:1,x:0,y:110},36,cjs.Ease.get(1)).wait(5).to({regX:-0.1,regY:0.1,scaleX:1.14,scaleY:1.14,x:-20,y:101.1},10,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1.35,scaleY:1.35,x:-49.9,y:87.6},3).to({_off:true},1).wait(141));

	// raptor
	this.instance_23 = new lib.raptor();
	this.instance_23.parent = this;
	this.instance_23.setTransform(383,24);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(57).to({_off:false},0).to({x:282.5,y:68},11,cjs.Ease.get(-1)).to({x:191.5,y:107.9},18,cjs.Ease.get(0.9)).to({x:182,y:112},23,cjs.Ease.get(1)).wait(10).to({scaleX:0.89,scaleY:0.89,x:181.1,y:99},12,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:0.79,scaleY:0.79,x:180.2,y:85.9},13,cjs.Ease.get(0.9)).to({scaleX:0.78,scaleY:0.78,x:180.1,y:85.1},36,cjs.Ease.get(1)).wait(5).to({regX:0.2,regY:0.2,scaleX:0.83,scaleY:0.83,x:181.3,y:80.9},10,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:0.9,scaleY:0.9,x:183,y:74.4},3).to({_off:true},1).wait(141));

	// grass1
	this.instance_24 = new lib.grass();
	this.instance_24.parent = this;
	this.instance_24.setTransform(52.2,203.7,1.5,1.5,6,0,0,0.4,-63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9).to({regX:0.5,scaleX:1.5,scaleY:1.5,rotation:5.8,x:42.7,y:203.8},14,cjs.Ease.get(-1)).to({x:33},10,cjs.Ease.get(0.9)).to({regX:0.4,scaleX:1.5,scaleY:1.5,rotation:6,x:32.2,y:203.7},19,cjs.Ease.get(1)).wait(5).to({scaleX:1.5,scaleY:1.5,rotation:5.8,x:-67.3,y:242.5},11,cjs.Ease.get(-1)).to({regX:0.3,x:-157.6,y:277.3},18,cjs.Ease.get(0.9)).to({regX:0.4,scaleX:1.5,scaleY:1.5,x:-166.8,y:280.9},23,cjs.Ease.get(1)).wait(10).to({regX:0.3,scaleX:1.35,scaleY:1.35,x:-135.7,y:250},12,cjs.Ease.get(-1)).to({regX:0.2,scaleX:1.21,scaleY:1.21,x:-104.4,y:219},13,cjs.Ease.get(0.9)).to({regX:0.3,scaleX:1.2,scaleY:1.2,x:-102.6,y:217.4},36,cjs.Ease.get(1)).wait(5).to({scaleX:1.27,scaleY:1.27,x:-118.3,y:221.2},10,cjs.Ease.get(-1)).to({regX:0.2,scaleX:1.38,scaleY:1.38,x:-142.1,y:226.6},3).to({_off:true},1).wait(141));

	// grass2
	this.instance_25 = new lib.grass();
	this.instance_25.parent = this;
	this.instance_25.setTransform(388,247,1.28,1.28);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(23).to({_off:false},0).to({x:378.6,y:247.1},10,cjs.Ease.get(0.9)).to({x:378,y:247},19,cjs.Ease.get(1)).wait(5).to({x:294.5,y:287},11,cjs.Ease.get(-1)).to({x:218.9,y:323.2},18,cjs.Ease.get(0.9)).to({x:211,y:327},23,cjs.Ease.get(1)).wait(10).to({scaleX:1.14,scaleY:1.14,x:207.2,y:289.7},12,cjs.Ease.get(-1)).to({scaleX:1.01,scaleY:1.01,x:203.3,y:252},13,cjs.Ease.get(0.9)).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:203.1,y:250.1},36,cjs.Ease.get(1)).wait(5).to({scaleX:1.06,scaleY:1.06,x:205.7,y:255.7},10,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:209.5,y:264.2},3).to({_off:true},1).wait(141));

	// bg
	this.instance_26 = new lib.bg();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-6.9,-115,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(9).to({x:-11.7},14,cjs.Ease.get(-1)).to({x:-16.5,y:-114.9},10,cjs.Ease.get(0.9)).to({x:-16.9,y:-115},19,cjs.Ease.get(1)).wait(5).to({scaleX:1.4,scaleY:1.4,x:-36.9,y:-76},11,cjs.Ease.get(-1)).to({regY:-0.1,scaleX:1.31,scaleY:1.31,x:-55,y:-40.8},18,cjs.Ease.get(0.9)).to({regY:0,scaleX:1.3,scaleY:1.3,x:-56.9,y:-37},23,cjs.Ease.get(1)).wait(10).to({scaleX:1.15,scaleY:1.15,x:-29.3,y:-19.1},12,cjs.Ease.get(-1)).to({scaleX:1.01,scaleY:1.01,x:-1.4,y:-0.9},13,cjs.Ease.get(0.9)).to({scaleX:1,scaleY:1,x:0,y:0},36,cjs.Ease.get(1)).wait(5).to({scaleX:1.02,scaleY:1.02,x:-3,y:-2.5},10,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:-7.5,y:-6.2},3).to({_off:true},1).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.6,10,1116.3,444.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;