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

	function enablerInitHandler() {
	  home_animation();
	}
		// vars
		var enterFor = document.getElementById("enterFor");
		// var blood = document.getElementById("blood");
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
		var lrnBtn2 = document.getElementById("learnMore2");
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
		// TweenLite.to(blood, 1, {display: 'none', ease: Linear.easeOut})
		TweenLite.to(finalFrame, .5, {delay: .5, opacity: 1, display: 'block', ease: Linear.easeIn});
		TweenLite.to(finaltxt, 0.5, {delay: 1.5, opacity: 1, display:'block', ease: Linear.easeIn});
		//TweenLite.to(lrnBtn2, 0.5, {delay: .5, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(lrnBtn, 0.5, {delay: 2.5, opacity: 1, display:'block', ease: Linear.easeIn});
	}



function frame1Ex()
	{

		TweenLite.to(containerEx, .5, {opacity:1, display: 'block', ease:Linear.easeInOut});
		TweenLite.to(enterForEx, 1, {delay: .3, opacity: 1, ease: Linear.eastOut});
		TweenLite.to(prizeEx, 1, {delay:.7, opacity: 1, ease: Linear.eastOut});
		
		TweenLite.delayedCall(3.9, frame2Ex);
	}
	
	function frame2Ex()
	{
		TweenLite.to(prizeEx, 0.4, {opacity: 0, ease: Linear.eastOut});
		TweenLite.to(enterEx, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(tweetEx, 0.3, {delay:.5, display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.delayedCall(3.9, frame3Ex);
	}
	
	function frame3Ex()
	{
		TweenLite.to(tweetEx, 0.5, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(heroFrameEx, 0.3, {delay:.5, display: 'block', ease: Linear.easeIn});
		TweenLite.to(herosbgEx, 0.6, {delay:1, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.to(hashtagEx, 1, {delay:1.5, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.delayedCall(3.9, frame4Ex);
	}
	
	function frame4Ex()
	{
		TweenLite.to(heroFrameEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		//TweenLite.to(bloodEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		TweenLite.to(logoEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		
		// TweenLite.to(learnMoreEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
		
		TweenLite.to(finalFrameEx, .5, {delay: 1, opacity: 1, display: 'block', ease: Linear.easeIn});
		// TweenLite.to(ps4logo, .5, {delay: 1.5, opacity:1, display: 'block', ease:Linear.easeIn});
		TweenLite.to(greatnessEx, 0.5, {delay: 2.5, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(bundlesweepsEx, .5, {delay:2, opacity:1, display: 'block', ease:Linear.easeIn});
		//TweenLite.to(lrnBtnEx, 0.5, {delay: 3, opacity: 1, display:'block', ease: Linear.easeIn});
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
