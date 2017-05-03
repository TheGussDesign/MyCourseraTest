// ======================== //
// === Standard Init === //
// ======================== //
// ======================== //
// ===       Init       === //
// ======================== //
function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}


startAd = function(){
	
	// Main elements
	var container	= document.getElementById('container');
	var resolve		= document.getElementById('resolve');
	
	var intro		= document.getElementById('intro');
	
	var bg 			= document.getElementById('bg');
	var TT			= document.getElementById('TT');
	var txt_Prep		= document.getElementById('txt_Prep');
	
	var txt_own		= document.getElementById('txt_own');
	var partner		= document.getElementById('partner');
	var bar			= document.getElementById('bar');
	
	var LL			= document.getElementById('LL');
	
	var bgInit_01	= document.getElementById('bgInit_01');
	var bgInit_02	= document.getElementById('bgInit_02');
	var bgInit_03	= document.getElementById('bgInit_03');
	
	var bgFinal_01	= document.getElementById('bgFinal_01');
	var bgFinal_02	= document.getElementById('bgFinal_02');
	var bgFinal_03	= document.getElementById('bgFinal_03');
	
	var HorLine_01	= document.getElementById('HorLine_01');
	var HorLine_02	= document.getElementById('HorLine_02');
	var HorLine_03	= document.getElementById('HorLine_03');
	//exits
	var btn_resolve_exit					= document.getElementById('btn_resolve_exit');
	var btn_intro_exit					= document.getElementById('btn_intro_exit');
				
	var btn_resolve_cta_HIT				= document.getElementById('btn_resolve_cta_HIT');
		
    // Add Listeners
	addListeners();
	//Start Intro
	startIntro();
	
		
}

// ===================== //
// === Add Listeners === //
// ===================== //

addListeners = function() {
	
	// Exits
	
	btn_resolve_cta_HIT.addEventListener("click", 	function(e){ onExitHandler("main");e.stopPropagation();}, false);
	
	btn_resolve_cta_HIT.addEventListener("mouseover", btnRollOver, false);
	btn_resolve_cta_HIT.addEventListener("mouseout", btnRollOut, false);	
}


// ================= //
// === Date Code === //
// ================= //


// ======================= //
// === Intro Section === //
// ======================= //

startIntro = function() {

	// FADE IN THE INTRO CONTAINER
	TweenMax.to(container, 0, {opacity:1});
	TweenMax.to(intro, 1, {opacity:1});
	
	TweenMax.from(bg, 3, {delay:0.3, opacity:0, scale:1.5, ease:Power3.easeOut});
	TweenMax.from(bar, 1, {delay:1, opacity:0, ease:Power3.easeOut, top:"-100"});
	TweenMax.from(txt_Prep, 1, {delay:1, opacity:0, ease:Power3.easeOut, top:"-100"});
	TweenMax.from(TT, 1, {delay:1.2, opacity:0, scale:2, ease:Power3.easeOut});
	
	TweenMax.from(txt_own, 1, {delay:1, opacity:0, ease:Elastic.easeOut.config(1, 0.75), left:"-300"});
	TweenMax.from(partner, 1, {delay:1.1, opacity:0, ease:Elastic.easeOut.config(1, 0.75), left:"300"});
	TweenMax.from(LL, 1, {delay:9, opacity:0, ease:Elastic.easeOut.config(1, 0.75)});	
	
	// SCALE BG
	TweenMax.from(bgInit_01, 1, {delay:1.5, opacity:0});
	TweenMax.from(bgInit_01, 3, {delay:1.2, scale:1.3, transformOrigin:"60% 45%"});
	TweenMax.from(bgInit_02, 1, {delay:4, opacity:0});
	TweenMax.from(bgInit_02, 3, {delay:3.8, scale:1.3, transformOrigin:"30% 45%"});
	TweenMax.from(bgInit_03, 1, {delay:6, opacity:0});
	TweenMax.from(bgInit_03, 3, {delay:5.8, scale:1.3, transformOrigin:"60% 45%"});
	
	// NOW START THE RESOLVE
	
	TweenMax.to(bgInit_03, 1, {delay:9.0, opacity:0,});
	TweenMax.to(intro, 7.5, {scale:1, delay:0.0, onComplete:function () {
		
		startResolve();
		
	}});
}


// ======================= //
// === Resolve Section === //
// ======================= //

startResolve = function() {	
		
	TweenMax.from(HorLine_01, 0.5, {delay:0.4, left:-300, ease:Power4.easeOut,});
	TweenMax.from(bgFinal_01, 0.6, {delay:0.7, opacity:0});
	TweenMax.from(bgFinal_01, 0.8, {delay:0.5, scaleX:1.3, transformOrigin:"0% 50%"});
	
	TweenMax.from(HorLine_02, 0.5, {delay:0.5, left:300});
	TweenMax.from(bgFinal_02, 0.6, {delay:0.8, opacity:0});
	TweenMax.from(bgFinal_02, 0.8, {delay:0.6, scaleX:1.3, transformOrigin:"100% 50%"});
	
	TweenMax.from(HorLine_03, 0.5, {delay:0.6, left:-300});
	TweenMax.from(bgFinal_03, 0.6, {delay:0.9, opacity:0});
	TweenMax.from(bgFinal_03, 0.8, {delay:0.7, scaleX:1.3, transformOrigin:"0% 50%"});
		
	//TweenMax.to(btn_resolve_cta, 0.5, { opacity: 1, ease:Power3.easeOut, delay:1, bottom:"34px"});	
	// FADE IN ENTIRE RESOLVE
	resolve.style.opacity = "0";
	TweenMax.to(resolve, 0.5, { opacity: 1});
    resolve.style.display = "block";
	
	//timer
	TweenMax.to(resolve, 1, {delay:7, opacity: 1, onComplete: runRefresh});
}

function runRefresh(){
	setTimeout(doRefresh, 10);
}
function doRefresh(){
		location.reload();
}
// ============= //
// === Exits === //
// ============= //

onExitHandler = function(exit){
	EB.clickthrough();			
}

// ================== //
// === Roll Overs === //
// ================== //

btnRollOver = function(){
	TweenMax.to(bgFinal_01, 5, {delay:0.0, scale:1.1, transformOrigin:"0% 50%"});
	TweenMax.to(bgFinal_02, 5, {delay:0.0, scale:1.1, transformOrigin:"100% 50%"});
	TweenMax.to(bgFinal_03, 5, {delay:0.0, scale:1.1, transformOrigin:"0% 50%"});
	TweenMax.to(partner, 0.3, { scale:1.08, ease:Power3.easeOut});
	TweenMax.to(txt_own, 0.2, { y:-2, ease:Power3.easeOut});
}

btnRollOut = function(){
	
	TweenMax.to(bgFinal_01, 0.5, {delay:0.1, scale:1.0, transformOrigin:"0% 50%"});
	TweenMax.to(bgFinal_02, 0.5, {delay:0.2, scale:1.0, transformOrigin:"100% 50%"});
	TweenMax.to(bgFinal_03, 0.5, {delay:0.3, scale:1.0, transformOrigin:"0% 50%"});
	TweenMax.to(partner, 0.2, { scale:1.0, ease:Power3.easeOut});
	TweenMax.to(txt_own, 0.2, { y:0, ease:Power3.easeOut});
}

window.addEventListener("load", startAd);