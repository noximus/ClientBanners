home_animation = (function() {
	
	var boundEvents = {};

	function bind (elem, eventName, callback) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, callback, false);
		}

		else if (elem.attachEvent) {
			var eID = elem.attachEvent('on'+ eventName, callback);
			boundEvents[eID] = { name: eventName, callback: callback };
		}
	}

	function unbind (elem, eventName, callback) {
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, callback, false);
		}

		else if (elem.detachEvent) {
			for (var eID in boundEvents) {
				if ((boundEvents[eID].name === eventName) &&
						(boundEvents[eID].callback === callback)) {
					elem.detachEvent(eID);
					delete boundEvents[eID];
				}
			}
		}
	}
	

		

	function Reset()
	{
		//TweenLite.killDelayedCallsTo([bg, frame1, frame2, frame3, frame4]);
		/*TweenMax.killAll(false, false, true);
		TweenMax.killAllTweens();*/
		
	}
	
	function init()
	{
	
		// TweenLite.to(end_frame_heart, 0, {scaleX:0, scaleY:0});
		frame1();
		
	
	}
	
		// vars	
		var enterFor = document.getElementById("enterFor");
		var prize = document.getElementById("prize");
		var tweet = document.getElementById("tweet");
		var enter = document.getElementById("enter");
		var heroFrame = document.getElementById("heroFrame");		
		var heros = document.getElementById("heros");	
		var hashtag = document.getElementById("hashtag");	
		var greatness = document.getElementById("greatness");
		var finalFrame = document.getElementById("finalFrame");
		var lrnBtn = document.getElementById("lrnBtn");
		var wave = document.getElementById("wave");
		var logo = document.getElementById("logo");
		var learnMore = document.getElementById("learnMore");
		var ps4logo = document.getElementById("ps4logo");
		var bundlesweeps = document.getElementById("bundlesweeps");

	function frame1()
	{
		
		TweenLite.to(enterFor, .8, {delay: .3, opacity: 1, ease: Linear.eastOut});
		TweenLite.to(prize, .4, {delay:1.5, opacity: 1, ease: Linear.eastOut});
		TweenLite.delayedCall(4.2, frame2);
	}
	
	function frame2()
	{

		TweenLite.to(enter, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(tweet, 0.3, {delay:.5, display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.delayedCall(5, frame3);
		
	}
	
	function frame3()
	{
		TweenLite.to(tweet, 0.5, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(heroFrame, 0.3, {delay:.5, display: 'block', ease: Linear.easeIn});
		TweenLite.to(herosbg, 0.6, {delay:1, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.to(hashtag, 1, {delay:1.5, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.delayedCall(6, frame4);
	}
	
	function frame4()
	{
		TweenLite.to(heroFrame, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		TweenLite.to(wave, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		TweenLite.to(logo, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		TweenLite.to(learnMore, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		TweenLite.to(finalFrame, .5, {delay: 1, opacity: 1, display: 'block', ease: Linear.easeIn});
		TweenLite.to(ps4logo, .5, {delay: 1.5, opacity:1, display: 'block', ease:Linear.easeIn});
		TweenLite.to(greatness, 0.5, {delay: 2, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(bundlesweeps, .5, {delay:2.5, opacity:1, display: 'block', ease:Linear.easeIn});
		TweenLite.to(lrnBtn, 0.5, {delay: 3, opacity: 1, display:'block', ease: Linear.easeIn});
	}
		
	
	
	init();
});





// If true, start function. If false, listen for INIT.
// window.onload = function() {
//   if (Enabler.isInitialized()) {
//       enablerInitHandler();
//   } else {
//       Enabler.addEventListener(studio.events.StudioEvent.INIT,
// enablerInitHandler);
//   }
// }

// function enablerInitHandler() {
//   home_animation();
// }
home_animation();
