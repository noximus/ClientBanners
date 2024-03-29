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
	function init()
	{
		frame1();
	}
	window.onload = function() {
	  if (Manifest.isInitialized()) {
	    manifestInitHandler();
	  } else {
	     Manifest.addEventListener(studio.events.StudioEvent.INIT,
		manifestInitHandler);
	  }
	}

	function enablerInitHandler() {
	  home_animation();
	}
		// vars
		var enterFor = document.getElementById("enterFor");
		var prize = document.getElementById("prize");
		var tweet = document.getElementById("tweet");
		var tweetp = document.getElementById("tweet").getElementsByTagName('p');
		var enter = document.getElementById("enter");
		var heros = document.getElementById("heros");
		var herosImg = document.getElementById("heros").getElementsByTagName('img');
		var noPurch = document.getElementById("noPurch");
		var heroFrame = document.getElementById("heroFrame");
		var finalFrame = document.getElementById("finalFrame");
		var finaltxt= document.getElementsByClassName("finaltxt");
		var lrnBtn = document.getElementById("lrnBtn");
		var ps4logo = document.getElementById("ps4logo");

	function frame1()
	{

		TweenLite.to(enterFor, .8, {delay: .3, opacity: 1, ease: Linear.eastOut});
		TweenLite.to(prize, .8, {delay:1.3, opacity: 1, ease: Linear.eastOut});

		TweenLite.delayedCall(4, frame2);
	}

	function frame2()
	{

		TweenLite.to(prize, 0.4, {opacity: 0, ease: Linear.eastOut});
		TweenLite.to(enter, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(tweet, 0.5, {delay:.5,display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.to(tweetp, 0.5, {delay:.3,display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.delayedCall(5, frame3);

	}

	function frame3()
	{
		TweenLite.to(tweet, 0.5, {opacity: .5, display: 'none', ease: Linear.easeOut});
		TweenLite.to(heros, 0.5, {delay:0, display: 'block', ease: Linear.easeIn});
		TweenLite.to(herosImg, 0.5, {delay:1, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.to(hashtag, 0.5, {delay:1.5, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.to(noPurch, 0.5, {delay:2.5, display: 'block', ease: Linear.easeOut});
		TweenLite.delayedCall(4, frame4);
	}

	function frame4()
	{
		// TweenLite.to(heroFrame, 1, {display: 'none', ease: Linear.easeOut})
		TweenLite.to(finalFrame, .5, {delay: .5, opacity: 1, display: 'block', ease: Linear.easeIn});
		TweenLite.to(finaltxt, 0.5, {delay: 1.5, opacity: 1, display:'block', ease: Linear.easeIn});
		// TweenLite.to(ps4logo, 0.5, {delay: .5, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(lrnBtn, 0.5, {delay: 2.5, opacity: 1, display:'block', ease: Linear.easeIn});
	}





	init();
});

// If true, start function. If false, listen for INIT.
window.onload = function() {
	home_animation();
}

// function enablerInitHandler() {
//  home_animation();
// }
