(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"splash_atlas_1", frames: [[0,1454,2043,217],[0,1673,1682,217],[689,1237,1332,181],[689,1054,1347,181],[0,765,687,687],[728,0,772,561],[0,0,726,763],[728,563,652,489]]},
		{name:"splash_atlas_2", frames: [[0,512,966,173],[795,0,966,173],[0,0,793,254],[0,256,793,254],[1282,175,393,93],[795,175,154,75],[968,175,312,371],[968,548,336,236]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_13 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.image110 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.image112 = function() {
	this.initialize(ss["splash_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.image115 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.image117 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.image119 = function() {
	this.initialize(ss["splash_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.sprite108 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* time_1 = int(getTimer() / 1000);
		*/
	}
	this.frame_1 = function() {
		/* bytes_loaded = _root._root.getBytesLoaded();
		bytes_total = _root._root.getBytesTotal();
		time = getTimer() / 1000 - teit_1;
		bps = bytes_loaded / time;
		bytes_left = bytes_total - bytes_loaded;
		leftsek = Math.ceil(bytes_left / bps);
		min = Math.floor(leftsek / 60);
		if (min >= 1)
		{
		    leftsek = leftsek - Math.floor(min * 60);
		    if (leftsek < 10)
		    {
		        leftsek = "0" add leftsek;
		    } // end if
		}
		else
		{
		    min = "0";
		    if (leftsek < 10)
		    {
		        leftsek = "0" add leftsek;
		    } // end if
		} // end else if
		percent = int(bytes_loaded / bytes_total * 100) add "%";
		leftTime = min add ":" add leftsek;
		bits = bps / 1024;
		Kbps = Math.round(bits * 10) / 10;
		*/
	}
	this.frame_2 = function() {
		/* gotoAndPlay(2);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_4
	this.text = new cjs.Text("", "bold 12px 'Arial'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(-198.95,-142.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// Layer_3
	this.text_1 = new cjs.Text("", "bold 12px 'Arial'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 109;
	this.text_1.parent = this;
	this.text_1.setTransform(-198.95,-158.2);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(3));

	// Layer_2
	this.text_2 = new cjs.Text("", "bold 12px 'Arial'");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 109;
	this.text_2.parent = this;
	this.text_2.setTransform(-198.95,-173.65);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(3));

	// Layer_1
	this.text_3 = new cjs.Text("Time Left:\nKbits/s:\nPercent Loaded:", "bold 12px 'Arial'");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 118;
	this.text_3.parent = this;
	this.text_3.setTransform(-319.15,-173.75);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321.1,-175.7,233.50000000000003,55.19999999999999);


(lib.text129 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-3.95,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-4,680,72.2);


(lib.text128 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-3.95,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-4,559.8,72.2);


(lib.text127 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(127.4,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.4,-4,321.6,57.6);


(lib.text126 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(127.4,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.4,-4,321.6,57.6);


(lib.text125 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(153.55,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(153.6,-4,263.9,84.5);


(lib.text124 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(153.55,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(153.6,-4,263.9,84.5);


(lib.text123 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(45.5,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.5,-4,443.4,60.2);


(lib.text122 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(45.5,-4.05,0.3329,0.3329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.5,-4,448.4,60.2);


(lib.text114 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-3.95,-4.2,0.4755,0.4755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-4.2,186.9,44.2);


(lib.shape120 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("EgjYAadMBG3AAAMAAAg05MhG9AAA");
	this.shape.setTransform(227.775,170.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["splash_atlas_1"],7);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.7,0,0,0.7,-227.8,-171.1)).s().p("EgjmAavMAAAg1eMBHMAAAMAAAA1eg")
	}.bind(this);
	this.shape_1.setTransform(227.85,171.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0,457.2,342.3);


(lib.shape118 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(3,1,1).p("AQ5AAMghxAAA");
	this.shape.setTransform(108.6,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333399").ss(3,1,1).p("AQ5xuMAAAAjdMghxAAAMAAAgjd");
	this.shape_1.setTransform(108.6,113.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	var sprImg_shape_2 = cjs.SpriteSheetUtils.extractFrame(ss["splash_atlas_1"],6);
	sprImg_shape_2.onload = function(){
		this.shape_2.graphics.bf(sprImg_shape_2, null, new cjs.Matrix2D(0.3,0,0,0.3,-108.7,-114.4)).s().p("Aw/R4MAAAgjwMAh/AAAMAAAAjwg")
	}.bind(this);
	this.shape_2.setTransform(108.75,114.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.3,219.1,230.20000000000002);


(lib.shape116 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#008000").ss(3,1,1).p("AX7xWMgv1AAAMAAAAitMAv1AAAg");
	this.shape.setTransform(154.025,112.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["splash_atlas_1"],5);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.4,0,0,0.4,-154.4,-112.2)).s().p("A4HRiMAAAgjDMAwPAAAMAAAAjDg")
	}.bind(this);
	this.shape_1.setTransform(154.4,112.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,309.3,225.20000000000002);


(lib.shape113 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["splash_atlas_2"],7);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1,0,0,1,-168,-118)).s().p("A6PScMAAAgk3MA0fAAAMAAAAk3g")
	}.bind(this);
	this.shape.setTransform(168,118);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,236);


(lib.shape111 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABcigIgMC9IirCEg");
	this.shape.setTransform(235.425,94.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjPidIGfC0IhWCHg");
	this.shape_1.setTransform(220.775,85.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACwBQIlfAAIAAifIFfAAg");
	this.shape_2.setTransform(165.975,73.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	var sprImg_shape_3 = cjs.SpriteSheetUtils.extractFrame(ss["splash_atlas_2"],6);
	sprImg_shape_3.onload = function(){
		this.shape_3.graphics.bf(sprImg_shape_3, null, new cjs.Matrix2D(1,0,0,1,-155.5,-185.5)).s().p("A4Sc/MAAAg59MAwlAAAMAAAA59g")
	}.bind(this);
	this.shape_3.setTransform(155.5,185.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,371);


(lib.shape3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-21.15,-21.15,0.0616,0.0616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-21.1,42.3,42.3);


(lib.shape1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgoEAFUIAAqnMBQJAAAIAAKng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.5,-34,513,68);


(lib.button132 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(25.95,1.95,0.4999,0.4999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnzjHIPnAAQBkAAAABkIAADHQAABkhkAAIvnAAQhkAAAAhkIAAjHQAAhkBkAAg");
	this.shape.setTransform(60,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AnzDIQhkAAAAhkIAAjHQAAhkBkAAIPnAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_1.setTransform(60,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AnzDIQhkAAAAhkIAAjHQAAhkBkAAIPnAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_2.setTransform(60,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,122,42);


(lib.sprite130 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_22
	this.instance = new lib.text129("synched",0);
	this.instance.setTransform(-291.55,-218.05,1,0.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_21
	this.instance_1 = new lib.text128("synched",0);
	this.instance_1.setTransform(-269.9,113,1,0.9993);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_20
	this.instance_2 = new lib.shape1("synched",0);
	this.instance_2.setTransform(7.6,145,1,0.9993);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_19
	this.instance_3 = new lib.text127("synched",0);
	this.instance_3.setTransform(-129.35,22.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_18
	this.instance_4 = new lib.text126("synched",0);
	this.instance_4.setTransform(-128.35,22.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_17
	this.instance_5 = new lib.text125("synched",0);
	this.instance_5.setTransform(-445.65,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_16
	this.instance_6 = new lib.text124("synched",0);
	this.instance_6.setTransform(-443.65,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer_15
	this.instance_7 = new lib.text123("synched",0);
	this.instance_7.setTransform(-271.4,-137.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer_14
	this.instance_8 = new lib.text122("synched",0);
	this.instance_8.setTransform(-271.4,-137.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Layer_13
	this.instance_9 = new lib.shape120("synched",0);
	this.instance_9.setTransform(-16.4,-10.45,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer_11
	this.instance_10 = new lib.shape118("synched",0);
	this.instance_10.setTransform(-272.05,-11.2,1.0243,1.0243);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer_8
	this.instance_11 = new lib.shape116("synched",0);
	this.instance_11.setTransform(72.2,-179.7,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Layer_6
	this.instance_12 = new lib.text114("synched",0);
	this.instance_12.setTransform(-119.4,-163.55,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer_5
	this.instance_13 = new lib.shape113("synched",0);
	this.instance_13.setTransform(-129.7,-171.9,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Layer_4
	this.instance_14 = new lib.shape111("synched",0);
	this.instance_14.setTransform(-292.5,-219.15,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite130, new cjs.Rectangle(-295.5,-222,680,445.3), null);


(lib.sprite102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(101));

	// Mask_Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgFAFIgCgFIACgDIAFgDIAFADIADADIgDAFIgFACg");
	var mask_graphics_1 = new cjs.Graphics().p("AgHiDIAPAAIgPEIg");
	var mask_graphics_2 = new cjs.Graphics().p("AgPiDIAPAAIAQABIgfEHg");
	var mask_graphics_3 = new cjs.Graphics().p("AgXiEIAQAAIAfAEIgvEFg");
	var mask_graphics_4 = new cjs.Graphics().p("AggiEIAQAAIAxAIIhBEBg");
	var mask_graphics_5 = new cjs.Graphics().p("AgniEIAPAAQAiACAfAKIhQD9g");
	var mask_graphics_6 = new cjs.Graphics().p("AgwiEIAQAAQArACAmAQIhhD3g");
	var mask_graphics_7 = new cjs.Graphics().p("Ag3iEIAPAAQA0ADAsAWIhvDwg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag+iEIAPAAQA9ADAyAdIh+Dpg");
	var mask_graphics_9 = new cjs.Graphics().p("Ag+iEIAPAAQA9ADAyAdIh+Dpg");
	var mask_graphics_10 = new cjs.Graphics().p("AhFiEIAQAAQBEAEA3AlIiLDgg");
	var mask_graphics_11 = new cjs.Graphics().p("AhFiEIAQAAQBEAEA3AlIiLDgg");
	var mask_graphics_12 = new cjs.Graphics().p("AhMiEIAPAAQBOAEA9AvIiaDWg");
	var mask_graphics_13 = new cjs.Graphics().p("AhTiEIAQAAQBXAFBAA5IinDLg");
	var mask_graphics_14 = new cjs.Graphics().p("AhZiEIAQAAQBfAFBEBEIizDAg");
	var mask_graphics_15 = new cjs.Graphics().p("AhjiEIAPAAQBjAGBFBHIARASIjICqg");
	var mask_graphics_16 = new cjs.Graphics().p("AhpiEIAQAAQBiAGBFBHIAcAfIjTCdg");
	var mask_graphics_17 = new cjs.Graphics().p("AhtiEIAPAAQBjAGBFBHQAVAVAPAXIjbCQg");
	var mask_graphics_18 = new cjs.Graphics().p("AhyiEIAQAAQBiAGBGBHQAbAbASAfIjlCCg");
	var mask_graphics_19 = new cjs.Graphics().p("Ah2iEIAQAAQBjAGBFBHQAhAiAUAmIjtB0g");
	var mask_graphics_20 = new cjs.Graphics().p("Ah5iEIAQAAQBjAGBEBHQApAoATAvIjzBlg");
	var mask_graphics_21 = new cjs.Graphics().p("Ah8iEIAQAAQBjAGBEBHQAvAuATA4Ij5BWg");
	var mask_graphics_22 = new cjs.Graphics().p("Ah+iEIAPAAQBkAGBEBHQA1A1ARBCIj9BFg");
	var mask_graphics_23 = new cjs.Graphics().p("AiAiEIAQAAQBjAGBEBHQA7A5APBOIkBA1g");
	var mask_graphics_24 = new cjs.Graphics().p("AiCiEIAQAAQBjAGBFBHQBCBBALBYIkFAjg");
	var mask_graphics_25 = new cjs.Graphics().p("AiCiEIAPAAQBkAGBEBHQBIBGAHBiIkGAUg");
	var mask_graphics_26 = new cjs.Graphics().p("AiDiEIAQAAQBjAGBFBHQBOBMABBtIkHADg");
	var mask_graphics_27 = new cjs.Graphics().p("AiDB+IAAkJIAQABQBjAFBFBHQBPBNAABuIAAABIgBAOg");
	var mask_graphics_28 = new cjs.Graphics().p("AiDB1IAAkIIAQAAQBjAGBFBGQBPBNAABvIAAAAIgCAgg");
	var mask_graphics_29 = new cjs.Graphics().p("AiDBtIAAkIIAQAAQBjAGBFBGQBPBOAABuIAAAAIgEAvg");
	var mask_graphics_30 = new cjs.Graphics().p("AiDBlIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBAhgHAfg");
	var mask_graphics_31 = new cjs.Graphics().p("AiDBdIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBAqgMAmg");
	var mask_graphics_32 = new cjs.Graphics().p("AiDBVIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBA0gRAsg");
	var mask_graphics_33 = new cjs.Graphics().p("AiDBNIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBA9gYAzg");
	var mask_graphics_34 = new cjs.Graphics().p("AiDBFIAAkIIAQAAQBjAGBFBGQBPBOAABuIAAAAQgBBGggA5g");
	var mask_graphics_35 = new cjs.Graphics().p("AiDA+IAAkIIAQAAQBjAGBFBGQBPBOAABuIAAAAQgBBPgpA/g");
	var mask_graphics_36 = new cjs.Graphics().p("AiDA3IAAkIIAQAAQBjAGBFBGQBPBOAABuIAAAAQgBBZgzBCg");
	var mask_graphics_37 = new cjs.Graphics().p("AiDAxIAAkJIAQABQBjAFBFBHQBPBOAABtIAAABQgBBgg9BIg");
	var mask_graphics_38 = new cjs.Graphics().p("AiDArIAAkJIAQAAQBjAGBFBHQBPBOAABtIAAABQgBBphIBLg");
	var mask_graphics_39 = new cjs.Graphics().p("AiDAlIAAkJIAQABQBjAFBFBHQBPBOAABtIAAABQgBBuhOBNIgGAFg");
	var mask_graphics_40 = new cjs.Graphics().p("AiDAfIAAkJIAQABQBjAFBFBHQBPBOAABtIAAABQgBBuhOBNIgSARg");
	var mask_graphics_41 = new cjs.Graphics().p("AiDAaIAAkJIAQAAQBjAGBFBHQBPBOAABtIAAABQgBBuhOBMIgfAcg");
	var mask_graphics_42 = new cjs.Graphics().p("AiDAVIAAkIIAQAAQBjAGBFBGQBPBOAABuIAAAAQgBBuhOBNQgVAVgXAQg");
	var mask_graphics_43 = new cjs.Graphics().p("AiDARIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBBthOBNQgcAcgeASg");
	var mask_graphics_44 = new cjs.Graphics().p("AiDANIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBBthOBNQgiAjgoATg");
	var mask_graphics_45 = new cjs.Graphics().p("AiDAJIAAkIIAQAAQBjAGBFBGQBPBOAABtIAAABQgBBuhOBNQgpApgxAUg");
	var mask_graphics_46 = new cjs.Graphics().p("AiDAHIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBBthOBNQgvAwg7ASg");
	var mask_graphics_47 = new cjs.Graphics().p("AiDAEIAAkIIAQAAQBjAGBFBGQBPBOAABtIAAABQgBBuhOBNQg1A2hFARg");
	var mask_graphics_48 = new cjs.Graphics().p("AiDADIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBBthOBNQg7A9hRANg");
	var mask_graphics_49 = new cjs.Graphics().p("AiDACIAAkJIAQAAQBjAGBFBHQBPBNAABuIAAABQgBBthOBNQhABDhcAJg");
	var mask_graphics_50 = new cjs.Graphics().p("AiDABIAAkJIAQABQBjAFBFBHQBPBOAABtIAAABQgBBuhOBNQhGBIhmAFg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGEJIAHkIIAAkJIAPAAQBkAGBEBHQBPBOAABtIAAABQgBBuhOBMQhLBNhuABg");
	var mask_graphics_52 = new cjs.Graphics().p("AiOEIIAWkHIAAkJIAQAAQBjAGBFBHQBPBOAABtIAAABQgBBuhOBMQhLBNhuABg");
	var mask_graphics_53 = new cjs.Graphics().p("AiWEHIAnkGIAAkJIAQAAQBiAGBGBHQBPBOgBBtIAAABQAABuhOBMQhLBNhvABg");
	var mask_graphics_54 = new cjs.Graphics().p("AifEEIA4kDIAAkJIAQAAQBiAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABg");
	var mask_graphics_55 = new cjs.Graphics().p("AimEAIBHj/IAAkJIAQAAQBiAGBFBHQBPBOAABtIAAABQAABuhPBMQhLBNhuABg");
	var mask_graphics_56 = new cjs.Graphics().p("AivD7IBYj6IAAkJIAQAAQBiAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQgvgBgogNg");
	var mask_graphics_57 = new cjs.Graphics().p("Ai3D2IBoj1IAAkJIAQAAQBiAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQg4gBgvgSg");
	var mask_graphics_58 = new cjs.Graphics().p("Ai/DvIB4juIAAkJIAQAAQBiAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhBgBg2gZg");
	var mask_graphics_59 = new cjs.Graphics().p("AjHDmICIjlIAAkJIAQAAQBiAGBGBHQBPBOgBBtIAAABQAABuhOBMQhMBNhuABQhJAAg9gjg");
	var mask_graphics_60 = new cjs.Graphics().p("AjNDeICUjdIAAkJIAQAAQBiAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhSgBhBgqg");
	var mask_graphics_61 = new cjs.Graphics().p("AjUDUICjjTIAAkJIAQAAQBiAGBFBHQBPBOAABtIAAABQAABuhPBMQhLBNhuABQhcgBhFg0g");
	var mask_graphics_62 = new cjs.Graphics().p("AjbDJICxjIIAAkJIAPAAQBjAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhkgBhLg/g");
	var mask_graphics_63 = new cjs.Graphics().p("AjhC/IC8i+IAAkJIAQAAQBiAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhtAAhOhKg");
	var mask_graphics_64 = new cjs.Graphics().p("AjeC7IgJgKIDJiwIAAkJIAQAAQBiAGBFBHQBPBOAABtIAAABQAABuhPBMQhLBNhuABQhvgBhPhNg");
	var mask_graphics_65 = new cjs.Graphics().p("AjZC7IgTgVIDTilIAAkJIAPAAQBjAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhvgBhPhNg");
	var mask_graphics_66 = new cjs.Graphics().p("AjUC7IgdgiIDciYIAAkJIAQAAQBiAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhvgBhPhNg");
	var mask_graphics_67 = new cjs.Graphics().p("AjPC7QgXgXgPgZIDliKIAAkJIAQAAQBiAGBGBHQBPBOgBBtIAAABQAABuhOBMQhMBNhtABQhvgBhPhNg");
	var mask_graphics_68 = new cjs.Graphics().p("AjLC7QgdgdgSgjIDuh6IAAkJIAPAAQBjAGBGBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhvgBhPhNg");
	var mask_graphics_69 = new cjs.Graphics().p("AjIC7QgjgjgSgrID1hsIAAkJIAPAAQBjAGBFBHQBPBOAABtIAAABQAABuhPBMQhLBNhuABQhvgBhPhNg");
	var mask_graphics_70 = new cjs.Graphics().p("AjEC7QgqgqgTg1ID8hbIAAkJIAPAAQBjAGBGBHQBPBOgBBtIAAABQAABuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_71 = new cjs.Graphics().p("AjCC7QgwgxgRg+IEBhLIAAkJIAOAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhtABQhvgBhPhNg");
	var mask_graphics_72 = new cjs.Graphics().p("AjAC7Qg2g4gPhJIEFg5IAAkJIAPAAQBjAGBFBHQBPBOAABtIAAABQAABuhPBMQhLBNhuABQhvgBhPhNg");
	var mask_graphics_73 = new cjs.Graphics().p("Ai+C7Qg9g+gLhTIEGgpIAAkJIAQAAQBjAGBGBHQBPBOgBBtIAAABQAABuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_74 = new cjs.Graphics().p("Ai9C7QhDhEgHheIEIgYIAAkJIAQAAQBjAGBGBHQBPBOgBBtIAAABQAABuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_75 = new cjs.Graphics().p("Ai9C7QhIhKgDhpIEKgHIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_76 = new cjs.Graphics().p("Ai9C7QhLhNAAhuIAAgJIEKAKIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_77 = new cjs.Graphics().p("Ai9C7QhLhNAAhuIABgZIEJAaIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_78 = new cjs.Graphics().p("Ai9C7QhLhNAAhuIADgpIEHAqIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_79 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAgfAGgcIEEA8IAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_80 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAgnAKglIEABNIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_81 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAgvAPgrID7BbIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_82 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAg6AVgxID1BsIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_83 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhEAcg3IDuB8IAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_84 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhMAkg+IDmCLIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_85 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhWAvhDIDbCaIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_86 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhfA5hIIDRCoIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_87 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhoBEhMIDGC1IAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_88 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOIAEgEIC7DAIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_89 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOIARgPICuDLIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_90 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOIAfgaICgDWIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_91 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQAVgVAYgPICSDgIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_92 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQAcgbAfgRICEDoIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_93 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQAighAogTIB1DwIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_94 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQAognAwgUIBnD3IAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_95 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQAvguA6gTIBWD9IAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_96 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQA2g1BFgQIBEEBIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_97 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQA8g6BOgOIA1EEIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_98 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQBChBBagKIAjEHIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_99 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQBIhGBigHIAVEJIAAkJIAPAAQBkAGBFBHQBPBOAABtIAAABQgBBuhOBMQhMBNhuABQhugBhPhNg");
	var mask_graphics_100 = new cjs.Graphics().p("Ai9C7QhLhNAAhuQAAhtBLhOQBPhNBuAAIACAAIAPABQBkAFBFBHQBPBOAABtIAAABQgBBuhOBMQhMBOhuAAQhuAAhPhOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.35,y:0.15}).wait(1).to({graphics:mask_graphics_1,x:0.95,y:-13.25}).wait(1).to({graphics:mask_graphics_2,x:1.725,y:-13.25}).wait(1).to({graphics:mask_graphics_3,x:2.575,y:-13.2}).wait(1).to({graphics:mask_graphics_4,x:3.425,y:-13.2}).wait(1).to({graphics:mask_graphics_5,x:4.2,y:-13.2}).wait(1).to({graphics:mask_graphics_6,x:5.025,y:-13.2}).wait(1).to({graphics:mask_graphics_7,x:5.8,y:-13.2}).wait(1).to({graphics:mask_graphics_8,x:6.5,y:-13.2}).wait(1).to({graphics:mask_graphics_9,x:6.5,y:-13.2}).wait(1).to({graphics:mask_graphics_10,x:7.175,y:-13.2}).wait(1).to({graphics:mask_graphics_11,x:7.175,y:-13.2}).wait(1).to({graphics:mask_graphics_12,x:7.9,y:-13.2}).wait(1).to({graphics:mask_graphics_13,x:8.575,y:-13.2}).wait(1).to({graphics:mask_graphics_14,x:9.175,y:-13.2}).wait(1).to({graphics:mask_graphics_15,x:10.2,y:-13.2}).wait(1).to({graphics:mask_graphics_16,x:10.775,y:-13.2}).wait(1).to({graphics:mask_graphics_17,x:11.2,y:-13.2}).wait(1).to({graphics:mask_graphics_18,x:11.65,y:-13.2}).wait(1).to({graphics:mask_graphics_19,x:12.025,y:-13.2}).wait(1).to({graphics:mask_graphics_20,x:12.375,y:-13.2}).wait(1).to({graphics:mask_graphics_21,x:12.675,y:-13.2}).wait(1).to({graphics:mask_graphics_22,x:12.9,y:-13.2}).wait(1).to({graphics:mask_graphics_23,x:13.075,y:-13.2}).wait(1).to({graphics:mask_graphics_24,x:13.225,y:-13.2}).wait(1).to({graphics:mask_graphics_25,x:13.3,y:-13.2}).wait(1).to({graphics:mask_graphics_26,x:13.325,y:-13.2}).wait(1).to({graphics:mask_graphics_27,x:13.325,y:-12.525}).wait(1).to({graphics:mask_graphics_28,x:13.325,y:-11.65}).wait(1).to({graphics:mask_graphics_29,x:13.325,y:-10.85}).wait(1).to({graphics:mask_graphics_30,x:13.325,y:-9.975}).wait(1).to({graphics:mask_graphics_31,x:13.325,y:-9.175}).wait(1).to({graphics:mask_graphics_32,x:13.325,y:-8.375}).wait(1).to({graphics:mask_graphics_33,x:13.325,y:-7.575}).wait(1).to({graphics:mask_graphics_34,x:13.325,y:-6.85}).wait(1).to({graphics:mask_graphics_35,x:13.325,y:-6.15}).wait(1).to({graphics:mask_graphics_36,x:13.325,y:-5.45}).wait(1).to({graphics:mask_graphics_37,x:13.325,y:-4.825}).wait(1).to({graphics:mask_graphics_38,x:13.325,y:-4.2}).wait(1).to({graphics:mask_graphics_39,x:13.325,y:-3.625}).wait(1).to({graphics:mask_graphics_40,x:13.325,y:-3.025}).wait(1).to({graphics:mask_graphics_41,x:13.325,y:-2.5}).wait(1).to({graphics:mask_graphics_42,x:13.325,y:-2.05}).wait(1).to({graphics:mask_graphics_43,x:13.325,y:-1.575}).wait(1).to({graphics:mask_graphics_44,x:13.325,y:-1.175}).wait(1).to({graphics:mask_graphics_45,x:13.325,y:-0.85}).wait(1).to({graphics:mask_graphics_46,x:13.325,y:-0.575}).wait(1).to({graphics:mask_graphics_47,x:13.325,y:-0.35}).wait(1).to({graphics:mask_graphics_48,x:13.325,y:-0.175}).wait(1).to({graphics:mask_graphics_49,x:13.325,y:-0.075}).wait(1).to({graphics:mask_graphics_50,x:13.325,y:-0.025}).wait(1).to({graphics:mask_graphics_51,x:13,y:0}).wait(1).to({graphics:mask_graphics_52,x:12.225,y:0}).wait(1).to({graphics:mask_graphics_53,x:11.35,y:0}).wait(1).to({graphics:mask_graphics_54,x:10.525,y:0}).wait(1).to({graphics:mask_graphics_55,x:9.775,y:0}).wait(1).to({graphics:mask_graphics_56,x:8.925,y:0}).wait(1).to({graphics:mask_graphics_57,x:8.125,y:0}).wait(1).to({graphics:mask_graphics_58,x:7.325,y:0}).wait(1).to({graphics:mask_graphics_59,x:6.55,y:0}).wait(1).to({graphics:mask_graphics_60,x:5.925,y:0}).wait(1).to({graphics:mask_graphics_61,x:5.175,y:0}).wait(1).to({graphics:mask_graphics_62,x:4.5,y:0}).wait(1).to({graphics:mask_graphics_63,x:3.925,y:0}).wait(1).to({graphics:mask_graphics_64,x:3.275,y:0}).wait(1).to({graphics:mask_graphics_65,x:2.8,y:0}).wait(1).to({graphics:mask_graphics_66,x:2.325,y:0}).wait(1).to({graphics:mask_graphics_67,x:1.85,y:0}).wait(1).to({graphics:mask_graphics_68,x:1.425,y:0}).wait(1).to({graphics:mask_graphics_69,x:1.075,y:0}).wait(1).to({graphics:mask_graphics_70,x:0.75,y:0}).wait(1).to({graphics:mask_graphics_71,x:0.5,y:0}).wait(1).to({graphics:mask_graphics_72,x:0.275,y:0}).wait(1).to({graphics:mask_graphics_73,x:0.15,y:0}).wait(1).to({graphics:mask_graphics_74,x:0.05,y:0}).wait(1).to({graphics:mask_graphics_75,x:0,y:0}).wait(1).to({graphics:mask_graphics_76,x:0,y:0}).wait(1).to({graphics:mask_graphics_77,x:0,y:0}).wait(1).to({graphics:mask_graphics_78,x:0,y:0}).wait(1).to({graphics:mask_graphics_79,x:0,y:0}).wait(1).to({graphics:mask_graphics_80,x:0,y:0}).wait(1).to({graphics:mask_graphics_81,x:0,y:0}).wait(1).to({graphics:mask_graphics_82,x:0,y:0}).wait(1).to({graphics:mask_graphics_83,x:0,y:0}).wait(1).to({graphics:mask_graphics_84,x:0,y:0}).wait(1).to({graphics:mask_graphics_85,x:0,y:0}).wait(1).to({graphics:mask_graphics_86,x:0,y:0}).wait(1).to({graphics:mask_graphics_87,x:0,y:0}).wait(1).to({graphics:mask_graphics_88,x:0,y:0}).wait(1).to({graphics:mask_graphics_89,x:0,y:0}).wait(1).to({graphics:mask_graphics_90,x:0,y:0}).wait(1).to({graphics:mask_graphics_91,x:0,y:0}).wait(1).to({graphics:mask_graphics_92,x:0,y:0}).wait(1).to({graphics:mask_graphics_93,x:0,y:0}).wait(1).to({graphics:mask_graphics_94,x:0,y:0}).wait(1).to({graphics:mask_graphics_95,x:0,y:0}).wait(1).to({graphics:mask_graphics_96,x:0,y:0}).wait(1).to({graphics:mask_graphics_97,x:0,y:0}).wait(1).to({graphics:mask_graphics_98,x:0,y:0}).wait(1).to({graphics:mask_graphics_99,x:0,y:0}).wait(1).to({graphics:mask_graphics_100,x:0,y:-0.0002}).wait(1));

	// Masked_Layer_2___1
	this.instance = new lib.shape3("synched",0);
	this.instance.setTransform(0,0,1.2,1.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-25.3,50.8,50.8);


(lib.sprite109 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* total = int(_root.getBytesTotal() / 1000);
		download = int(_root.getBytesLoaded() / 1000);
		if (total == download)
		{
		    _parent._root.play();
		}
		else
		{
		    play ();
		} // end else if
		*/
	}
	this.frame_1 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_5
	this.vars = new lib.sprite108();
	this.vars.name = "vars";
	this.vars.setTransform(288.3,231.65);

	this.timeline.addTween(cjs.Tween.get(this.vars).wait(2));

	// Layer_1
	this.bar = new lib.sprite102();
	this.bar.name = "bar";
	this.bar.setTransform(82.6,81.85,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-32.3,233.5,228.7);


// stage content:
(lib.splash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {preloader:0,intro:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.btn135.addEventListener("click", function(){
			GetUrlMain("mainscreen");
		});
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_22_btn135
	this.btn135 = new lib.button132();
	this.btn135.name = "btn135";
	this.btn135.setTransform(1090.1,634,0.9999,1.0001);
	this.btn135._off = true;
	new cjs.ButtonHelper(this.btn135, 0, 1, 2, false, new lib.button132(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn135).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.instance = new lib.sprite109();
	this.instance.setTransform(499.6,225.5,1.5021,1.5021);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.shape1("synched",0);
	this.instance_1.setTransform(627.1,350.1,2.445,10.294);

	this.instance_2 = new lib.sprite130();
	this.instance_2.setTransform(772.95,343.75,1.5021,1.5021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(800,350.1,550.5,350);
// library properties:
lib.properties = {
	id: '786DCE5F8407AE4380EFB6EA9159D292',
	width: 1600,
	height: 700,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/splash_atlas_1.png", id:"splash_atlas_1"},
		{src:"images/splash_atlas_2.png", id:"splash_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['786DCE5F8407AE4380EFB6EA9159D292'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;