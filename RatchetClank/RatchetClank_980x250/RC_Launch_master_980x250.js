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
	var PS4_branding 					= document.getElementById('PS4_branding');
	
	var rating_logo	 					= document.getElementById('rating_logo');
	
	var container						= document.getElementById('container');
	var resolve							= document.getElementById('resolve');
	
	var intro							= document.getElementById('intro');
	var intro_hashtag					= document.getElementById('intro_hashtag');
	
	var intro_flare						= document.getElementById('intro_flare');
	var intro_flare_clank				= document.getElementById('intro_flare_clank');
	var intro_flare_tag					= document.getElementById('intro_flare_tag');
	
	var intro_ratchet_char				= document.getElementById('intro_ratchet_char');
	var intro_ratchet_name				= document.getElementById('intro_ratchet_name');
	var intro_clank_char					= document.getElementById('intro_clank_char');
	var intro_clank_name					= document.getElementById('intro_clank_name');
	
	var intro_tagline_are				= document.getElementById('intro_tagline_are');
	var intro_tagline_back				= document.getElementById('intro_tagline_back');
	var intro_tagline_April20			= document.getElementById('intro_tagline_April20');
	
	var intro_bg							= document.getElementById('intro_bg');
	//exits
	var btn_resolve_exit					= document.getElementById('btn_resolve_exit');
	var btn_intro_exit					= document.getElementById('btn_intro_exit');
	var resolve_date						= document.getElementById('resolve_date');
	
	var resolve_legals					= document.getElementById('resolve_legals');
			
	var btn_resolve_cta_HIT				= document.getElementById('btn_resolve_cta_HIT');
    var btn_resolve_cta					= document.getElementById('btn_resolve_cta');
	var btn_resolve_cta_hover			= document.getElementById('btn_resolve_cta_hover');
	
	var resolve_april20					= document.getElementById('resolve_april20');
	
	var resolve_bg						= document.getElementById('resolve_bg');
	
    
	// Date Coding - Change date of release here (dd-mm-yyyy)
	getDateCode('25-03-2016');
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
	btn_intro_exit.addEventListener("click", 	function(e){ onExitHandler("main");e.stopPropagation();}, false);
	btn_resolve_exit.addEventListener("click", 	function(e){ onExitHandler("main");e.stopPropagation();}, false);
	btn_resolve_cta_HIT.addEventListener("click", 	function(e){ onExitHandler("main");e.stopPropagation();}, false);
	
	btn_resolve_cta_HIT.addEventListener("mouseover", btnRollOver, false);
	btn_resolve_cta_HIT.addEventListener("mouseout", btnRollOut, false);	
}


// ================= //
// === Date Code === //
// ================= //

function getDateCode(datevar) {
	var numberOfDaysBeforeRelease = 5;	// how many days before release date to display the week before message
	// Set Release Date options
	var releaseDate1 = 1; // the  number to return before the release date
	var releaseDate2 = 2; // the number to return in the week before the release date
	var releaseDate3 = 3; // the number to return the day before release date
	var releaseDate4 = 4; // the number to return the day of release 
	var releaseDate5 = 5; // the number to return after the day of release
	
	var MS_TO_DAYS = 24 * 60 * 60 * 1000;
	
	var dateParts = datevar.split('-');
	var currentDate = new Date();
	var day = parseInt(dateParts[0])+1;
	var releaseDate = new Date(dateParts[2], dateParts[1]-1, day);
	
	numberOfDaysBeforeRelease = (!numberOfDaysBeforeRelease) ? 0 : numberOfDaysBeforeRelease;
		
	var diff = Math.floor((releaseDate.getTime() - currentDate.getTime()) / MS_TO_DAYS);
	
	var dateCode = releaseDate1;
	
	// DAY OF RELEASE
	if(diff == 0) { dateCode = releaseDate4; }
	
	// DAY BEFORE RELEASE
	else if (diff == 1) { dateCode = releaseDate3; }
	
	// BEFORE RELEASE DATE
	else if (diff > 0) { 
	
		dateCode = releaseDate1;
		
		// WEEK BEFORE RELEASE DATE
		if(diff <= numberOfDaysBeforeRelease) {
			dateCode = releaseDate2;
		}
		
	}
	
	// AFTER RELEASE DATE
	else if (diff < 0) { dateCode = releaseDate5; }
	
	currentDate = null;
	releaseDate = null;
	
	if(dateCode == "1"){
		// change URL to match relevant dates
		console.log("UNTIL OCTOBER 11");
		resolve_date.style.backgroundImage = "url(img_resolve_date.png)";
		btn_resolve_cta.style.backgroundImage = "url(btn_resolve_cta.png)";
	} else if(dateCode == "2"){
		console.log("DATE IS: FRIDAY");	
		resolve_date.style.backgroundImage = "url(img_resolve_date.png)";
		btn_resolve_cta.style.backgroundImage = "url(btn_resolve_cta.png)";
	} else if(dateCode == "3"){
		console.log("DATE IS: TOMORROW");
		resolve_date.style.backgroundImage = "url(img_resolve_date.png)";
		btn_resolve_cta.style.backgroundImage = "url(btn_resolve_cta.png)";
	} else if(dateCode == "4"){
		console.log("DATE IS: TODAY");	
		resolve_date.style.backgroundImage = "url(img_resolve_date.png)";
		btn_resolve_cta.style.backgroundImage = "url(btn_resolve_cta.png)";
	} else if(dateCode == "5"){
		console.log("DATE IS: NOW");	
		resolve_date.style.backgroundImage = "url(img_resolve_date.png)";
		btn_resolve_cta.style.backgroundImage = "url(btn_resolve_cta.png)";
		
	}
}

// ======================= //
// === Intro Section === //
// ======================= //

startIntro = function() {

	// FADE IN THE INTRO CONTAINER
	TweenMax.to(intro, 0.5, {opacity:1})
	
	// SCALE BG
	TweenMax.to(intro_bg, 0, {scale:1.3});
	
	// RATCHET
	TweenMax.to(intro_ratchet_char, 1, { opacity: 1, ease: Elastic.easeOut.config(1, 0.75), delay:0.3, right:"500px"});
	
	// RATCHET NAME - FLARE
	TweenMax.to(intro_flare, 1, { opacity: 1});
	TweenMax.to(intro_flare, 1, { ease:Power3.easeOut, delay:0.0, left:"600px"});
	TweenMax.to(intro_flare, 0.8, { opacity: 0, delay: 0.5});
	
	TweenMax.to(intro_ratchet_name, 1, { opacity: 1, ease:Power3.easeOut, delay:0.4});
	
	// (RATCHET MOVES OUT OF WAY)
	TweenMax.to(intro_ratchet_char, 1, { opacity: 1, ease: Elastic.easeOut.config(1, 0.75), delay:1.8, right:"450px"});
	TweenMax.to(intro_ratchet_name, 1, { opacity: 1, ease:Power3.easeOut, delay:1.8, left:"510px"});
	
	// CLANK
	TweenMax.to(intro_clank_char, 1, { opacity: 1, ease: Elastic.easeOut.config(1, 0.75), delay:1.8, left:"200px"});	
	
	// CLANK NAME - FLARE
	TweenMax.to(intro_flare_clank, 1, { scale:2, opacity: 1});
	TweenMax.to(intro_flare_clank, 1, { ease:Power3.easeOut, delay:1.5, left:"680px"});
	TweenMax.to(intro_flare_clank, 1, { opacity: 0, delay: 2.0});		
	
	TweenMax.to(intro_clank_name, 1, { opacity: 1, ease:Power3.easeOut, delay:1.9});
	
	// (CLANK MOVES OUT OF WAY)
	TweenMax.to(intro_clank_char, 1, { opacity: 1, ease:Power3.easeOut, delay:3.0, top:"700px"});
	TweenMax.to(intro_ratchet_char, 1, { opacity: 1, ease:Power3.easeOut, delay:3.0, top:"700px"});
	TweenMax.to(intro_clank_name, 1, { opacity: 1, ease:Power3.easeOut, delay:2.8, left:"1100px"});
	TweenMax.to(intro_ratchet_name, 1, { opacity: 1, ease:Power3.easeOut, delay:2.9, left:"1050px"});
			
	// SET ARE BACK TO BIG
	TweenMax.to(intro_tagline_are, 0.5, {scale:5});	
	
	TweenMax.to(intro_tagline_are, 0.5, { scale:1, opacity: 1, ease:Power3.easeOut, delay:3.0});
	
	// ARE BACK - FLARE
	TweenMax.to(intro_flare_tag, 1, { scale:2, opacity: 1});
	TweenMax.to(intro_flare_tag, 1, { ease:Power3.easeOut, delay:4.4, left:"980px"});
	TweenMax.to(intro_flare_tag, 0.8, { opacity: 0, delay: 4.7});
	
	// ARE BACK LEAVES
	TweenMax.to(intro_tagline_are, 1, { opacity: 1, ease:Power3.easeOut, left:"1200px", delay:4.6});
	
	// SCALE BG
	
	TweenMax.to(intro_bg, 4.6, {scale:1, delay:0.2});
	
	// NOW START THE RESOLVE
	TweenMax.to(intro, 4.1, {scale:1, delay:0.0, onComplete:function () {
		
		startResolve();
		
	}});
}


// ======================= //
// === Resolve Section === //
// ======================= //

startResolve = function() {
	TweenMax.to(resolve_TT, 0, { scale:0, opacity: 0, ease: Elastic.easeOut.config(1, 0.60), delay:0});
	TweenMax.to(resolve_TT, 1, { scale:1, opacity: 1, ease: Elastic.easeOut.config(1, 0.60), delay:0.2});	
	
	TweenMax.to(pack, 0.5, { opacity: 1, ease:Power3.easeOut, delay:1, bottom:"60px"});
	
	TweenMax.to(resolve_bg, 3, {opacity:1, ease:Power3.easeOut, delay:0.5});

	TweenMax.to(resolve_legals, 3, {opacity:1, ease:Power3.easeOut, delay:0.5});
	
	// DATE
	TweenMax.to(resolve_date, 0.5, { opacity:0, ease: Elastic.easeOut.config(1, 0.75),  delay:0.6});
	
	// CTA
	TweenMax.to(btn_resolve_cta_hover, 0.5, {  ease: Elastic.easeOut.config(1, 0.75), delay:0.8, bottom:"15px"});
	TweenMax.to(btn_resolve_cta, 0.5, { opacity: 1, ease:Power3.easeOut, delay:0.9, bottom:"15px"});
		
	// FADE IN ENTIRE RESOLVE
	resolve.style.opacity = "0";
	TweenMax.to(resolve, 0.5, { opacity: 1});
    resolve.style.display = "block";
	
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
	TweenMax.to(btn_resolve_cta_hover, 1, { opacity: 1, ease:Power3.easeOut});
}

btnRollOut = function(){
	TweenMax.to(btn_resolve_cta_hover, 1, { opacity: 0, ease:Power3.easeOut});
}

window.addEventListener("load", startAd);