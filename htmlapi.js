(function(h){function C(a,b,c){function g(a){h.FT.$(document).off(f,g);
a=/error$/i.test(a.type)?c:b;
"function"===typeof a&&a()}for(var e,f="fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange",d=a.requestFullscreen,k=["ms","moz","webkit"];
!d&&(e=k.pop());
)d=a[e+"RequestFullscreen"]||a[e+"RequestFullScreen"]||a[e+"EnterFullscreen"];
d?(h.FT.$(document).on(f,g),d.call(a)):"function"===typeof c&&c()}
function A(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function I(a){function b(){A()||(h.FT.$(document).off(c,b),a.contract())}var c="fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange";
h.FT.$(document).on(c,b)}function D(a,b){function c(a){var c=b.video,k=r.querySelector(".ft-video-progress-bar"),d=Date.now();
a=Math.max(0,Math.min(k.offsetWidth,(a.touches?a.touches[0]:a).pageX-k.getBoundingClientRect().left));

300>d-m||(m=d,c.duration?c.currentTime=a/k.offsetWidth*c.duration:c.seekToPoint&&c.seekToPoint(a/k.offsetWidth))}function d(a){var k="IFRAME"!==a.target.tagName?a.target.ownerDocument:a.target.contentWindow.document;
n=!1;
document.body.removeEventListener("mousemove",c);
document.body.removeEventListener("touchmove",c);
["mouseleave","mouseup","touchend","touchcancel"].forEach(function(a){k.removeEventListener(a,d,!0)});
u&&b.video.play()}function e(a){var c=a.target,k=b.video,m=k.currentTime;
switch(a.type){case "progress":if(!a.detail&&
!k.buffered.length)break;
a=a.detail&&a.detail.cvLoadRatio||k.buffered.end(0)/k.duration;
w.children[0].style.width=100*a+"%";
break;
case "timeupdate":case "durationchange":w.children[1].style.width=100*(a.detail&&a.detail.hasOwnProperty("cvPlayRatio")?a.detail.cvPlayRatio:m/c.duration)+"%";
v.textContent=~~(m/60)+":"+("0"+~~(m%60)).slice(-2);
break;
case "playing":f();
case "volumechange":x.textContent=k.muted?"G":"F";
case "pause":n||(t.textContent=k.paused?"D":"E");
break;
case "ended":f()}}function f(a){var c=
r.getBoundingClientRect(),m=b.video;
a=!m.paused&&(!a||"touchstart"!==a.type&&(a.pageX<=c.left||a.pageX>=c.right||a.pageY<=c.top||a.pageY>=c.bottom));
t.textContent=m.paused?"D":"E";
x.textContent=m.muted?"G":"F";
r.className=r.className.replace(/\s*hidden\s*/,"");
clearTimeout(k);
a&&(k=setTimeout(function(){r.className+=" hidden"},4E3))}var l,k,m,p=b.videoElement,q=b.settings.parent,n=!1,u;
l=b.video.autoplay;
/iP(ad|od|hone)/.test(navigator.userAgent)&&!l&&(E.childNodes[3].style.display="none");
var r=
a.appendChild(E.cloneNode(!0)),h="timeupdate durationchange volumechange pause playing ended progress".split(" "),s=["mousemove","mouseout","touchstart","touchend"],t=r.children[0],w=r.children[1].children[0],v=r.children[2],x=r.children[3],F=r.children[4];
t.textContent=b.video.paused?"D":"E";
x.textContent=b.settings.muted?"G":"F";
r.onselectstart=function(){return!1};
for(l=h.length;
l--;
)q.addEventListener(h[l],e,!0);
for(l=s.length;
l--;
)a.addEventListener(s[l],f),q.addEventListener(s[l],f);
p.buffered&&
p.buffered.length&&(w.children[0].style.width=p.buffered.end(0)/p.duration*100+"%");
q.addEventListener("emptied",function(){var a=b.video;
w.children[0].style.width=w.children[1].style.width=0;
v.textContent="0:00";
x.textContent=a.muted?"G":"F";
t.textContent=a.paused?"D":"E"},!0);
r.onclick=function(a){var c=b.video,k=a.target;
a.stopPropagation();
switch(k.className){case "ft-icon-play":c[c.paused?"play":"pause"]();
break;
case "ft-icon-volume":c.muted^=1;
break;
case "ft-icon-fullscreen":a=b.isFullscreen(),
b[a?"leaveFullscreen":"goFullscreen"](),F.textContent=F?"B":"C"}};
r.onmousedown=r.ontouchstart=function(a){var k=a.target,m=["mouseleave","mouseup","touchend","touchcancel"];
a.stopPropagation();
if(!n)switch(k.className){case "ft-video-buffer":case "ft-video-progress":k=k.parentNode;
case "ft-video-progress-bar":a.preventDefault(),n=!0,u=!b.video.paused,b.video.pause(),document.body.addEventListener("mousemove",c),document.body.addEventListener("touchmove",c),m.forEach(function(a){k.ownerDocument.addEventListener(a,
d,!0)}),c(a)}};
f()}function K(a){var b,c=document.body.appendChild(document.createElement("span"));
c.textContent="ABCDEFG";
c.style.cssText="position: absolute;
 z-index: 10000;
 left:-999px;
 ";
b=c.offsetWidth;
c.style.fontFamily="ftglyphs";
setTimeout(function e(){if(c.offsetWidth!==b)return c.parentNode.removeChild(c),a(!0);
setTimeout(e,100)},200)}function B(a){function b(a){for(var b=a.length;
b--;
)if(a[b].name===f)return a[b].ref}function c(){B(a)}var g=a.myFT,e=a.settings,f=e.video,l=/^(https?:|\/\/).*?\byoutu\.?be\b/;

if(g.getManifest("filename")&&!a.filepath){var k=g.getManifest("instantAds"),m=g.getManifest("videos"),p=k?k.length:null,q=function(){var b=e.controlsParent||a.container,c=b&&b.querySelector(".ft-video-controls");
c?c.style.display=a.ytVideo?"none":"":a.ytVideo||!e.controls||!e.forceAutoplay&&/^iPhone|iPod$/.test(navigator.platform)||(L?D(b,a):K(function(){D(b,a)}))};
if(k){if(!g.instantAdsLoaded){g.addEventListener("instantads",c);
return}for(var n=function(a,b){for(var c=a.length;
c--;
)if(a[c].name===
b)return a[c]}(m,f);
p--;
)if(n&&k[p].name===f&&"video"===k[p].type.toLowerCase()||"text"===k[p].type.toLowerCase()&&l.test(n.ref)){if(n.name===f&&!l.test(n.ref)){g.get("adPreview")&&(a.e=g.instantAds[f]);
a.filepath=g.instantAds[f]||n.ref;
a.loadVid();
q();
return}if(n.name===f&&l.test(n.ref)){a.filepath=l.test(g.instantAds[f])?g.instantAds[f]:n.ref;
a.loadYouTubeVid(f,e,!0);
return}}else g.error("applyVideo","Instant video name '"+f+"' has no matching item in the Video component of the manifest")}if(!k||
g.instantAdsLoaded&&!a.filepath)a.filepath=b(m),l.test(a.filepath)?a.loadYouTubeVid(f,e,!1):a.loadVid(),q()}else d.addEventListener("manifest",c),a.filepath||g.addEventListener("instantads",c)}function z(a,b){var c=a.settings.actionQueue||[];
c.push(b);
a.settings.actionQueue||(a.settings.actionQueue=c)}function M(a){function b(){d.$(document).off(G,b);
a.play()}a.video.paused||a.ytVideo&&2===a.video.getPlayerState()||(a.pause(),d.$(document).on(G,b))}var H=d,N=1,d=h.FT=function(){var a=this,b;
d.makeDispatcher(this);

a.version=2.8;
a.placementProperties={};
a.manifestProperties={};
a.firedStandardEvents={};
a.hasLoaded=!1;
a.testMode=!1;
a.notTop=h!==h.top;
a.politeloadFired=!1;
a.adsLinked=!1;
h!==h.top&&-1===location.search.indexOf("test")||d.preventFTTestMode?d.addListener(h,"message",function(b){a.receiveMessages(b)}):a.testMode=!0;
a.addEventListener("politeload",function(){a.politeloadFired=!0});
try{if(a.testMode){if(a.placementProperties=d.testing.call(a,{clickTagCount:20}),h.matchMedia){var c=matchMedia("(orientation: portrait)"),
g=function(){var b=this.matches?0:90;
setTimeout(function(){a.dispatchEvent("orientationchange",{orientation:b,width:h.innerWidth,height:h.innerHeight,scale:h.innerWidth/document.documentElement.clientWidth})})}.bind(c);
c.addListener?c.addListener(g):d.addListener(h,"resize",g);
g(c)}}else a.placementProperties=JSON.parse(h.name);
h.name=""}catch(e){}try{a.placementProperties.guid=h.localStorage.ftGUID||a.placementProperties.guid}catch(f){a.placementProperties.guid=a.placementProperties.guid}a.addEventListener("orientationchange",
function(b){a.placementProperties.orientation=b.orientation;
a.placementProperties.maxWidth=b.width;
a.placementProperties.maxHeight=b.height;
a.placementProperties.scale=b.scale});
a.addEventListener("statechange",function(b){a.placementProperties.state=b});
a.addEventListener("viewablechange",function(b){a.placementProperties.isViewable=b});
a.addEventListener("maxsizechange",function(b){a.placementProperties.maxWidth=b.width||a.placementProperties.maxWidth;
a.placementProperties.maxHeight=b.height||a.placementProperties.maxHeight});

a.addEventListener("sizechange",function(b){a.placementProperties.currentWidth=b.width;
a.placementProperties.currentHeight=b.height});
a.placementProperties.currentWidth=a.placementProperties.currentWidth||h.innerWidth||document.documentElement.clientWidth;
a.placementProperties.currentHeight=a.placementProperties.currentHeight||h.innerHeight||document.documentElement.clientHeight;
if(!0===a.get("testInAdserverMode")||/^https?:\/\/www\.flashtalking\.net\/uploads\//.test(location.href))a.tia=!0;
d.addListener(h,
"click",function(b){a.clickManager.call(a,b)},!1);
d.$(h).on("pointerdown MSPointerDown touchstart",function(){a.send("interaction")});
d.listen(h,"resize",function(){a.dispatchEvent("sizechange",{width:h.innerWidth||document.documentElement.clientWidth,height:h.innerHeight||document.documentElement.clientHeight})});
"loading"!==document.readyState?(a.dispatchEvent("DOMLoaded"),"complete"===document.readyState||"loaded"===document.readyState?a.dispatchEvent("load"):d.addListener(h,"load",function(b){a.dispatchEvent("load",
b)})):d.addListener(document,"readystatechange",function(){"interactive"===document.readyState?a.dispatchEvent("DOMLoaded"):a.dispatchEvent("load")});
for(b in d.initialisation)d.initialisation[b].call(this);
d.addEventListener("manifest",function(b){var c={version:a.version,location:location.href,guid:a.get("guid")||!1};
a.manifestProperties=b;
a.testMode?(b={method:"init",msg:d.testing.call(a,b)},a.receiveMessages({data:JSON.stringify(b)})):a.send("ready",c)});
this.defaultCSS='body{margin: 0;
 padding: 0;
 }ft-richload, richload{display:block;
position:relative;
margin:0;
padding:0;
border:0;
}.ft-video, .ft-video *{-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
}.ft-video{display:inline-block;
}.ft-video img,.ft-video video,.ft-video iframe,.ft-video canvas{width:inherit;
height:inherit;
max-width:inherit;
max-height:inherit;
min-width:100%;
min-height:100%;
}@font-face{font-family:"ftglyphs";
src:url("${baseURL}/fonts/ftglyphs.eot");
src:url("${baseURL}/fonts/ftglyphs.eot?") format("eot"), url("${baseURL}/fonts/ftglyphs.woff") format("woff"), url("${baseURL}/fonts/ftglyphs.svg") format("svg");
}[class^="ft-icon-"]{font-style:normal;
font-weight:normal;
font-variant:normal;
text-transform:none;
padding:0 3px;
height:20px;
min-width:24px;
line-height:20px;
cursor:default;
-ms-user-select:none;
-webkit-user-select:none;
-moz-user-select:none;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
}.ft-video{position:relative;
display:inline-block;
}.ft-video iframe{border:none;
}.ft-video-controls{-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
color:#fff;
speak:none;
font-family:ftglyphs;
box-sizing:border-box;
background-color:rgba(0, 0, 0, 0.7);
font-size:18px;
display:table;
position:absolute;
bottom:10px;
left:2%;
width:96%;
height:26px;
margin:0 auto;
padding:0 2px;
border-radius:4px;
transition:all 200ms;
text-align:center;
-webkit-transition:all 200ms;
-moz-transition:all 200ms;
}.ft-video-controls *{font-family:ftglyphs;
}.ft-video-controls.hidden{opacity:0;
bottom:0;
}[class^="ft-icon-"], .ft-video-progress-container, .ft-time-display{display:table-cell;
vertical-align:middle;
width:24px;
padding:5px 2px;
}.ft-video-progress-container{width:100%;
}.ft-video-progress-bar{overflow:hidden;
display:block;
position:relative;
box-sizing:border-box;
border:2px solid white;
border-radius:8px;
width:100%;
height:12px;
}.ft-video-progress-bar::after{position: absolute;
top:0;
left:0;
right:0;
bottom:0;
box-shadow:inset 0 0 4px black;
border-radius:8px;
content:"";
}.ft-video-progress,.ft-video-buffer{position:absolute;
top:0px;
bottom:0px;
left:0px;
background-color:#fff;
}.ft-video-buffer{background-color:rgba(255, 255, 255, 0.4);
}.ft-time-display{line-height:1.7em;
font-size:0.7em;
width:50px;
padding:5px 5px;
}[class^="ft-share-"]{font-family:ftglyphs;
size:20px;
}[class^="ft-share-twitter"]{color:#55acee;
}[class^="ft-share-facebook"]{color:#3b579d;
}.ft-share-twitter:before{content: "Z";
}.ft-share-twitter-square:before{content: "Y";
}.ft-share-facebook:before{content: "X";
}.ft-share-facebook-square:before{content: "W";
}';

d.insertCSS(document,this.defaultCSS);
d.include("manifest.js")};
H&&(d.__proto__=H);
(function(a){function b(a,b){for(var c=0,k=a.length;
c<k&&!1!==b(a[c],c,a);
c++);
}function c(a){setTimeout(function(){var b=m(a),c=b?a[0]:a,b=b?a[1]:a,k,d;
if(l.hasOwnProperty(c)||f.hasOwnProperty(c))return g();
p.hasOwnProperty(c)&&(b=q+[c,p[c],c+".js"].join("/"),/https?:/.test(location.protocol)||(b="http:"+b));
/\.js/.test(b)||/^(http|\/\/)/.test(b)||(b=b.replace(".","/")+".js");
/.+!(.*?$)/.test(b)&&(d="__asyncs__"+Date.now(),
k=b.match(/.+!(.*?$)/)[1]);
e(c,b,k,d)})}function g(){function a(b,c){c=m(b)?b[0]:b;
f.hasOwnProperty(c)&&q.push(f[c])}for(var c,d,e,p,q,g=k.length;
g--;
)c=k[g],d=c[0],e=c[1],p=c[2],q=[],b(e,a),e.length&&e.length!==q.length||(k.splice(g,1),g=k.length,p="function"===typeof p?p.apply(this,q):p,c.push(!0),null!==d&&(f[d]=p))}function e(a,b,c,k){if(!a||!document.querySelector('script[data-module="'+a.replace(/"/g,'\\"')+'"]')){var m=document.createElement("script"),e=function(){if(!this.readyState||/^(?:loaded|complete)$/.test(this.readyState))m.onload=
m.onreadystatechange=null,m.parentNode&&m.parentNode.removeChild(m),l.hasOwnProperty(a)||(f[a]=void 0,g())};
k?(d[k]=e,b=b.replace("!"+c,(0>b.indexOf("?")?"?":"&")+c+"=FT."+k)):m.onload=m.onreadystatechange=e;
m.async=!0;
m.src=b;
m.setAttribute("data-module",a.replace("!"+String(c),""));
n.appendChild(m)}}var f={},l={},k=[],m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},p={canvasvideo:"1/3",carousel:"1/1",photoinput:"1/0",storelocator:"2/0",subloader:"1/1",touch:"1/1",transform:"1/1",
maps:"2/0"},q="//cdn.flashtalking.com/frameworks/js/",n=document.head||document.querySelector("head");
d.require=d.define=function(a,b,d){"string"!==typeof a&&(d=b,b=a,a=null);
m(b)||(d=b,b=[]);
p.hasOwnProperty(String(a).toLowerCase())&&(a=String(a).toLowerCase());
a&&(l[a]=!0);
k.unshift([a,b,d]);
g();
if(b.length)for(d=0;
d<b.length;
d++)a=String(m(b[d])?b[d][0]:b[d]).toLowerCase(),p.hasOwnProperty(a)&&(b[d]=a),c(b[d])};
a.define||a.require||(a.require=a.define=d.require=d.define)})(this);
d.query=function(a){var b=
null;
return b=a.match(/#[a-z0-9_\-]+$/i)?document.querySelector(a):document.querySelectorAll(a)};
d.include=function(a,b){d.require([a],b)};
d.addListener=function(a,b,c){a.on||(a=d.$(a));
a.on(b,c)};
d.listen=d.addListener;
d.removeListener=function(a,b,c){a.on||(a=d.$(a));
a.off(b,c)};
d.manifest=function(a){d.dispatchEvent("manifest",a)};
d.initialisation={};
d.ajaxDefaults={async:!0,method:"GET",context:h,complete:function(){},params:null,test:function(){}};
d.ajax=function(a,b){function c(a){var c=d.query("head")[0],
e=document.createElement("script"),g="FT_jsonpCallback_1_"+N++;
a=a.replace(k,"$1="+g);
e.setAttribute("src",a);
e.onerror=function(){b.complete.call(this,{status:400,responseText:""})};
h[g]=function(a){b.complete.call(this,{status:200,responseText:JSON.stringify(a)});
delete h[g]};
c.appendChild(e)}var g,e,f=new XMLHttpRequest,l=h.FT.ajaxDefaults;
e=document.createElement("a");
var k=/([\w%]+)=\[%CALLBACK%]/;
e.href=a;
e.href=e.href;
e=e.protocol!==location.protocol||e.hostname!==location.hostname||e.port!==
location.port&&"80"!==e.port+location.port;
for(g in l)b[g]=b[g]||l[g];
if(e&&!(b&&b.withCredentials||"withCredentials"in f)&&h.hasOwnProperty("XDomainRequest"))f=new h.XDomainRequest,f.onprogress=function(){},f.ontimeout=f.onerror=function(){f.status=400;
f.readyState=4;
f.onreadystatechange()},f.onload=f.ontimeout=f.onerror=function(){f.status=200;
f.readyState=4;
f.onreadystatechange()};
else if(b&&b.withCredentials)if("withCredentials"in f)f.withCredentials=!0;
else if(k.test(a)){c(a);
return}a=a.replace(k,
"");
f.onreadystatechange=function(a){4===f.readyState&&b.complete.call(b.context,f,a,b.params)};
if(!0!==b.context.testMode){f.open(b.method,a,b.async);
for(g in b.headers)f.setRequestHeader(g,b.headers[g]);
f.send()}else b.test.call(b.context,b.params)};
d.getAbsLeft=function(a){for(var b=a.offsetLeft;
a.offsetParent;
)a=a.offsetParent,b+=a.offsetLeft;
return b};
d.getAbsTop=function(a){for(var b=a.offsetTop;
a.offsetParent;
)a=a.offsetParent,b+=a.offsetTop;
return b};
"undefined"===typeof console&&(h.console=
{log:function(){}});
d.insertCSS=function(a,b){var c=a.createElement("style"),g=("https:"===location.protocol?"https:":"http:")+"//cdn.flashtalking.com/frameworks/js",e=a.head||a.getElementsByTagName("head")[0]||a.createElement("head");
b=b.replace(/\${baseURL}/g,g);
"textContent"in c&&(c.textContent=b);
e.insertBefore(c,e.children[0]||null);
e.parentNode||a.documentElement.insertBefore(e,document.body);
a===document&&(d.styleSheet=c.sheet||c.styleSheet);
"textContent"in c||(c.styleSheet.cssText=b.replace(/\${baseURL}/g,
g))};
(function(a){function b(a,b){var c;
try{return c=RegExp("(^| )"+a+"($| )"),c.test(b)}catch(d){return!1}}function c(a,b){if(!(this instanceof c))return new c(a,b);
var d,e;
this.length=0;
if("string"===typeof a){if(/<[^>]+>/.test(a)){d=document.createElement("div");
e=document.createDocumentFragment();
for(d.innerHTML=a;
d.childNodes.length;
)e.appendChild(d.childNodes[0]);
d=e.childNodes}else d=(b||h).document.querySelectorAll(a);
e=d}if(e&&e.length)for(d=e.length;
d--;
)1===e[d].nodeType&&Array.prototype.unshift.call(this,
e[d]);
else a&&(this[0]=a,this.length=1);
return this}function d(a,b,c,e){var g=(e?"remove":"add")+"EventListener",f="",l=b.split(" "),h=a.length;
b=b.length;
!a[0]||g in a[0]||(g=e?"detachEvent":"attachEvent",f="on");
for(;
h--;
)for(e=0;
e<b;
e++)if(g in a[h])a[h][g](f+l[e],c)}function e(a,b,d){var e,g="last"===d?"appendChild":"insertBefore";
b instanceof c||(b=new c(b));
a instanceof c||(a=new c(a));
e=b.length;
if(0<e){var f=a;
a=document.createDocumentFragment();
for(var h=0,l=f.length;
h<l;
h++)a.appendChild(f[h]);

for(;
e--;
)b[e]&&"object"===typeof b[e]&&(f="last"===d||"first"===d?b[e]:b[e].parentNode,h="after"===d?b[e].nextSibling:"first"===d?b[e].childNodes[0]:b[e],what=0===e?a:a.cloneNode(!0),f[g](what,h))}}function f(a,b){for(;
a&&(a=a[b+"Sibling"]);
)if(1===a.nodeType)return a}var l="undefined"!==typeof document.body.classList;
h.FT.$=c;
c.prototype.splice=function(a,b){var c=[],d=a,e,g;
e=void 0===b?this.length-a:b;
if("number"===typeof e){for(;
e--;
)c.push(this[d++]);
for(d=a;
this[d];
)this[d+b]?this[d]=this[d+
b]:delete this[d],d++;
this.length-=b;
return c}if(b.length&&"object"===typeof b){g=b.length;
for(e=0;
e<g;
e++)c.push(this[d]),this[d++]=b[e];
for(e=0;
e++<c.length;
)this[d]&&c.push(this[d]),this[d]=c[e-1],d++;
this.length+=g;
return this}};
c.prototype.next=function(){return h.FT.$(this[0].nextElementSibling||f(this[0],"next"))};
c.prototype.previous=function(){return h.FT.$(this[0].nextElementSibling||f(this[0],"previous"))};
c.prototype.parent=function(){return h.FT.$(this[0].parentNode)};
c.prototype.first=
function(){return new c(this[0])};
c.prototype.last=function(){return new c(this[this.length-1])};
c.prototype.eq=function(a){return new c(this[a])};
c.prototype.each=function(a){for(var b=0,c=this.length;
b<c;
b++)a.call(this[b],b,this[b]);
return this};
c.prototype.filter=function(a){for(var b=new c,d=0,e=this.length;
d<e;
d++)a.call(this[d],d,this[d])&&Array.prototype.push.call(b,this[d]);
return b};
c.prototype.alignTo=function(b){b=b instanceof c?b:a.d(b);
if(!b.length)return this;
for(var d=0;
d<this.length;
d++)1<
b.length&&b.length?(this[d].style.left=b.x(b[d])+"px",this[d].style.top=b.y(b[d])+"px"):1===b.length&&(this[d].style.left=b.x(b[d])+"px",this[d].style.top=b.y(b[d])+"px");
return this};
c.prototype.getAbsLeft=h.FT.getAbsLeft;
c.prototype.getAbsTop=h.FT.getAbsTop;
c.prototype.x=function(a){a?"number"===typeof a&&this[a]&&(a=this[a]):a=this[0];
return this.getAbsLeft(a)};
c.prototype.y=function(a){a?"number"===typeof a&&this[a]&&(a=this[a]):a=this[0];
return this.getAbsTop(a)};
c.prototype.width=function(){return this[0]&&
"object"===typeof this[0]&&this[0].offsetWidth||0};
c.prototype.height=function(){return this[0]&&"object"===typeof this[0]&&this[0].offsetHeight||0};
c.prototype.children=function(){var b=[],c,d,e;
for(c=0;
c<this.length;
c++)if(1===this.length)b=this[0].children;
else for(theseChildren=this[c].children,e=theseChildren.length,d=0;
d<e;
d++)b.push(theseChildren[d]);
return a.d(b)};
c.prototype.addClass=function(a){var c=[],d="",e=0,g;
a=a.split(" ");
for(e=0;
e<this.length;
e++){g=a.length;
for(d=this[e].className;
g--;
)l?
this[e].classList.add(a[g]):b(a[g],d)||c.push(a[g]);
!l&&c&&(this[e].className=d+(""!==d?" ":"")+c.join(" "))}return this};
c.prototype.removeClass=function(a){var c=this.length,d;
for(a="string"===typeof a?a.split(" "):a;
c--;
)for(d=a.length;
d--;
)if(l)this[c].classList.remove(a[d]);
else if(b(a[d],this[c].className)){var e=this[c],g;
g=this[c].className.replace(a[d],"").replace(/(^ | $)/g).replace(/  /g," ");
e.className=g}return this};
c.prototype.hasClass=function(a){var c=this.length,d;
for(a=a.split(" ");
c--;
)for(d=
a.length;
d--;
)if(l&&!this[c].classList.contains(a[d])||!b(a[d],this[c].className))return!1;
return!0};
c.prototype.clone=function(){for(var a=new c,b=this.length;
b--;
)a[b]=this[b]&&"object"===typeof this[b]&&this[b].cloneNode?this[b].cloneNode(!0):this[b];
return a};
c.prototype.data=function(a,b){var c="data-"+a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),d=this[0]&&"object"===typeof this[0]&&this[0].getAttribute;
if(b)for(var e=this.length;
e--;
)d&&this[e].setAttribute(c,b);
else return d&&this[0].getAttribute(c)||
"";
return this};
c.prototype.on=function(a,b){d(this,a,b);
return this};
c.prototype.off=function(a,b){d(this,a,b,!0);
return this};
c.prototype.prepend=function(a){e(a,this,"first");
return this};
c.prototype.prependTo=function(a){e(this,a,"first");
return this};
c.prototype.append=function(a){e(a,this,"last");
return this};
c.prototype.appendTo=function(a){e(this,a,"last");
return this};
c.prototype.before=function(a){e(a,this,"before");
return this};
c.prototype.after=function(a){e(a,this,"after");
return this};

c.prototype.remove=function(){for(var a=this.length;
a--;
)this[a]&&this[a].parentNode&&this[a].parentNode.removeChild(this[a]);
return this};
c.prototype.empty=function(){for(var a=this.length;
a--;
)this[a]&&"object"===typeof this[a]&&this[a].childNodes&&(this[a].innerHTML="");
return this};
c.prototype.css=function(a,b){if(this[0])if("string"!==typeof a||b){var c=this.length,d=b?{}:a;
for(b&&(d[a]=b);
c--;
)for(var e in d)this[c]&&(this[c].style[e]=d[e])}else return a=a.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()}),
h.getComputedStyle?getComputedStyle(this[0])[a]:this[0].currentStyle[a];
else return"";
return this}})(d);
d.prototype.receiveMessages=function(a){var b={method:"",msg:""},c=[];
try{b=JSON.parse(a.data)}catch(d){}if("init"!==b.method||this.hasLoaded)this[b.method]&&this.hasLoaded&&(c=b.msg?"Array"===b.msg.constructor.name?b.msg:[b.msg]:null,this[b.method].apply(this,c));
else{this.hasLoaded=!0;
for(var e in b.msg)this.placementProperties[e]=b.msg[e];
b.msg.newGUID&&!this.get("adPreview")&&this.newGUID();

this.dispatchEvent("ready",b)}};
d.prototype.dispatch=function(a){this.dispatchEvent(a.ev||a,a.msg)};
d.prototype.send=function(a,b){var c={method:a,msg:b};
if(this.get("safeFrame"))try{h.parent["ft"+this.get("pID")].receive({data:JSON.stringify(c),origin:"http://cdn.flashtalking.com",source:h,currentTarget:h.parent,srcElement:h.parent,target:h.parent,timeStamp:(new Date).getTime(),type:"message"})}catch(d){this.error("send trying to access parent window but not on same domain, port and protocol")}else this.notTop&&
h.parent.postMessage(JSON.stringify(c),"*")};
d.prototype.get=function(a){var b="";
"undefined"!==typeof this.placementProperties[a]&&(b=this.placementProperties[a]);
return b};
d.prototype.getManifest=function(a){var b="";
"undefined"!==typeof this.manifestProperties[a]&&(b=this.manifestProperties[a]);
return b};
d.prototype.checkLoaded=function(){return this.hasLoaded};
d.prototype.tracker=function(a,b,c){for(var d=this.manifestProperties.trackingEvents||[],e=d.length,f=null;
e--;
)if(a===d[e].name){f=101+
e;
if("standard"===d[e].type){if(this.firedStandardEvents[f])return;
this.firedStandardEvents[f]=!0}else"string"===d[e].type&&2===arguments.length&&(c=b,b=0);
break}f&&this.send("tracker",{type:"custom",num:f,value:b,string:c})};
d.prototype.clickManager=function(a){this.send("tracker",{type:"clickmap",x:a.pageX,y:a.pageY})};
d.prototype.getClickTag=function(a,b){function c(a){var b=a.escapeIterations;
if(a.clickSuf)switch(a.urlCustom.charAt(a.urlCustom.length-1)){case "?":case "&":break;
default:a.clickSuf=
-1!=a.urlCustom.indexOf("?")?"&"+a.clickSuf:"?"+a.clickSuf}for(;
b--;
)a.urlCustom=encodeURIComponent(a.urlCustom),a.clickSuf=encodeURIComponent(a.clickSuf);
return a}var d="clickTag"+(a||""),e=document.createElement("a"),f=this.get("clicks"),l="",l=/^(http|https|sms|tel|mailto|smsto)(:|%3A|%253A|%25253A)/,k={urlCustom:b||"",clickSuf:this.get("ftClickSuf"),escapeIterations:parseInt(this.get("ftEscapeMod"),10)||0,clickTag:d};
if(this.hasLoaded){if(b){e.href=b;
if("http"!==e.protocol.slice(0,4)&&(this.tia||
this.testMode)||this.get("adPreview"))return b;
if("function"==typeof h.customSAClick){var e=h.customSAClick(k),m;
for(m in e)k[m]=e[m]}if(l.test(k.urlCustom))if(k=c(k),b=k.urlCustom+k.clickSuf,this.tia||this.testMode||this.get("adPreview"))l=f[d]+"&APPEND=false&DYNCTTEST="+b;
else if(d=f[k.clickTag].split("?"),f=/(&|%26|%2526)url(=|%3D|%253D)\d+/,l=d[0],d[1]=d.slice(1).join("?"),f.test(d[1]))l+="?"+d[1].replace(f,"$1url$2"+b);
else{var p;
d[1].replace(/(http|https|sms|tel|mailto|smsto)(:|%3A|%253A|%25253A)/g,
function(a,b,c,d){p=d});
l+="?"+d[1].slice(0,p)+b}else l=this.tia||this.testMode||this.get("adPreview")?f[d]+"&APPEND=true&DYNCTTEST="+b:f[d]+b}else l=f[d];
return l}this.error("getClickTag","get ClickTag was called before the myFT.hasLoaded == true")};
d.prototype.clickTag=function(a,b){if(!this.hasLoaded)return this.error("clickTag","clickTag method called before hasLoaded === true");
var c=this.getClickTag(a,b);
this.send("interactionComplete");
this.send("clickthrough",{clickTag:a||1,url:c});
"ext"===
this.get("api")?this.send("open",c):h.open(c,/((sms|tel|mailto|spotify|facetime):|https?:\/\/maps\.)/i.test(c)&&/ip(ad|hone|od)/i.test(navigator.userAgent)?"_top":"_blank")};
d.prototype.applyClickTag=function(a,b,c){function g(a){e.clickTag(b,c);
e.clickManager(a);
a.stopPropagation?a.stopPropagation():"undefined"!==typeof a.cancelBubble&&(a.cancelBubble=!0)}a instanceof d.$||(a=d.$(a));
var e=this;
e.hasLoaded?(a.css("cursor","pointer"),a.on("click",g)):e.addEventListener("ready",function(){e.applyClickTag(a,
b,c)})};
d.prototype.applyButton=function(a,b){function c(a){g.clickManager(a);
a.stopPropagation?a.stopPropagation():"undefined"!==typeof a.cancelBubble&&(a.cancelBubble=!0);
b.call(g,a)}a instanceof d.$||(a=d.$(a));
var g=this;
g.hasLoaded?(a.on("click",c),a.css("cursor","pointer")):g.addEventListener("ready",function(){g.applyButton(a,b)})};
d.prototype.absorbSwipes=function(a){function b(a){a.preventDefault&&a.preventDefault()}var c=document.body.style,g="touchAction"in c?"touchAction":"msTouchAction";

this.send("preventSwipes",!!a);
!this.absorbSwipesSet&&a?(d.addListener(h,"touchmove",b),g in c&&(c[g]="none")):a||(d.removeListener(h,"touchmove",b),g in c&&(c[g]=""))};
d.prototype.newGUID=function(){var a,b="//servedby.flashtalking.com/imp/"+this.get("campaignID")+";
"+this.get("pID")+";
207;
guid;
"+this.get("siteName")+";
"+this.get("placementDescription")+"/?ft_guid="+this.get("guid")+"&cachebuster="+1E9*~~Math.random();
this.testMode||this.tia||(a=document.createElement("iframe"),a.src=b,a.style.cssText=
"display:none",document.body.appendChild(a));
try{h.localStorage.ftGUID=this.get("guid")}catch(c){}};
d.prototype.error=function(a,b){var c="ftError in method "+a+": "+b;
if(!h.mocha&&!h.sinon&&!h.chai)return this.get("api"),this.send("error",c),!1};
d.prototype.getMaxSize=function(){return{width:this.get("maxWidth")||0,height:this.get("maxHeight")||0}};
d.prototype.getState=function(){return this.get("state")};
d.prototype.replaceMacros=function(a,b){var c={a:/\[\%ftPostal\%\]/g,value:this.get("ftPostal")},
d={a:/\[\%ftDMA\%\]/g,value:this.get("ftDMA")},e={a:/\[\%ftLat\%\]/g,value:this.get("ftLat")},f={a:/\[\%ftLong\%\]/g,value:this.get("ftLng")||this.get("ftLong")},h={a:/\[\%SERVE_DOM\%\]/g,value:this.get("serveDom")||this.get("ftServeDom")||this.get("serveDOM")||this.get("tiaServeDom")||this.testMode&&"http://cdn.flashtalking.com"},k={a:/\[\%PROTOCOL\%\]/g,value:"http"+("https:"===location.protocol?"s":"")+"://"},m={a:/\[\%GUID\%\]/g,value:this.get("guid")},p={a:/\[\%FT_GUID\%\]/g,value:this.get("guid")},
q={a:/\[\%CACHEBUSTER\%\]/g,value:Math.round(1E9*Math.random())},n={a:/\[\%FT_RANDOM\%\]/g,value:Math.round(1E9*Math.random())},u={a:/\[\%FT_CONFID\%\]/g,value:this.get("ftConfID")},r={a:/\[\%FT_TIMESTAMP\%\]/g,value:this.get("ftTimestamp")},y={a:/\[\%PRODUCT_ID_SEGMENT\%\]/g,value:b||""},s;
if(""===b)s="default";
else{s=this.get("ftSegmentList");
for(var t=s.length,w=RegExp("("+b+"+([0-9_A-z]+))"),v="";
t--;
)if(v=w.exec(s[t].s),null!==v){v=v[v.length-1];
break}s=v||"default"}c=[c,d,e,f,h,k,m,p,q,n,u,
r,y,{a:/\[\%PRODUCT_ID\%\]/g,value:s}];
d=c.length;
for(a=a||"";
d--;
)c[d].value&&(a=a.replace(c[d].a,c[d].value));
return a};
d.prototype.isViewable=function(){return this.get("isViewable")};
d.prototype.getSize=function(){return{width:this.get("currentWidth"),height:this.get("currentHeight")}};
d.prototype.getOrientation=function(){return this.get("orientation")};
d.prototype.destroy=function(){this.send("nuke")};
d.initialisation.communicate=function(){function a(a){b.linkedAds[a.name]=!0;
for(var d in b.linkedAds)if(!b.linkedAds[d])return;

b.adsLinked=!0;
b.dispatchEvent("linkready")}var b=this;
d.addEventListener("manifest",function(c){if(c.communication){var d=c.communication.linked,e=d.length;
for(b.linkedAds={};
e--;
)b.linkedAds[d[e]]=!1;
b.send("communicate",{type:"register",name:c.communication.name});
b.addEventListener("linkedad",a)}})};
d.prototype.talk=function(a,b){var c=this;
if(c.adsLinked)c.send("communicate",{type:"talk",name:a,msg:b});
else c.once("linkready",function(){c.talk(a,b)})};
d.prototype.communicate=function(a){var b=
a.type?{type:a.type}:null;
"talk"===a.type?(b.from=a.name,b.msg=a.msg):(b.type="linkedad",b.name=a.name);
this.dispatchEvent(b.type,b)};
d.prototype.broadcast=function(a){for(var b=this.getManifest("communication")?this.getManifest("communication").linked:[],c=b.length||0;
c--;
)this.talk(b[c],a)};
(function(){function a(a,b,c){e||(this.addEventListener("viewableChange",function(a){a=!1===a||"no"===a;
for(var b=l.length;
b--;
)k[a?"off":"on"](l[b][0],l[b][1])}),e=!0);
if(!c&&m[a]){if(this.isViewable())k.on(a,
b);
l.push([a,b])}else if(c)for(c=l.length;
c--;
)b===l[c][1]&&(l.splice(c,1),k.off(a,b));
else this.error("deviceorientation is not supported in this browser")}function b(a){var b=Date.now()-a.interval,c,d,e;
return function(f){var g=0,k=0,m=0;
f=f.accelerationIncludingGravity;
g=Math.abs(c-f.x);
k=Math.abs(d-f.y);
m=Math.abs(e-f.z);
if(g>a.threshold&&k>a.threshold||g>a.threshold&&m>a.threshold||k>a.threshold&&m>a.threshold)g=Date.now(),g-b>a.interval&&(b=g,h.dispatchEvent(q));
c=f.x;
d=f.y;
e=f.z}}function c(a){void 0===
g&&(g=a.alpha);
return{alpha:f?a.alpha:a.alpha-g,beta:a.beta,gamma:a.gamma,type:a.type,originalEvent:a,heading:f?a.webkitCompassHeading:a.alpha}}var g,e=!1,f=/iP(ad|od|hone)/.test(navigator.userAgent),l=[],k=d.$(h),m={deviceorientation:"DeviceOrientationEvent"in h,devicemotion:"DeviceMotionEvent"in h,shake:"DeviceMotionEvent"in h},p={threshold:15,interval:0},q=function(){var a;
"function"===typeof document.CustomEvent?a=new document.CustomEvent("shake",{bubbles:!0,cancelable:!0}):"function"===typeof document.createEvent&&
(a=document.createEvent("Event"),a.initEvent("shake",!0,!0));
return a}();
d.prototype.deviceorientation=function(b,d){var e=this;
this.orientationNormaliser=this.orientationNormaliser||function(a){e.dispatchEvent("deviceorientation",c(a))};
a.call(this,"deviceorientation",this.orientationNormaliser,!!d)};
d.prototype.devicemotion=function(b,c){a.call(this,"devicemotion",b,!!c)};
d.prototype.shake=function(c,d,e){e=e||{};
for(var f in p)e[f]=e[f]||p[f];
a.call(this,"devicemotion",b(e));
a.call(this,"shake",
c,!!d)}})();
d.define("_ft-elements",function(){function a(a){if(Array.isArray)return Array.prototype.slice.call(a);
for(var b=[];
b.length!==a.length;
)b.push(a[b.length]);
return b}function b(a,b){var c=a===r,d=null,e=this.tagName.toLowerCase();
if(this.hasAttribute(b[0])){if(d=this.getAttribute(b[0]),!c&&2===b.length&&String(b[1])===d)return}else if(c)return;
a.apply(this,b);
m.hasOwnProperty(e)&&this.attributeChangedCallback&&this.attributeChangedCallback(b[0],d,c?null:String(b[1]),null)}function c(a,
b){var c=[b.target],d=y(m),f;
if(b.target.tagName&&d.length){f=b.target.querySelectorAll(d.join(","));
for(var d=0,g=f.length;
d<g;
d++)c.push(f[d]);
d=0;
for(g=c.length;
d<g;
d++)if(f=m[(c[d].tagName||"").toLowerCase()])if(!c[d][a]&&f[a])e(c[d]);
else if(c[d][a])c[d][a]()}}function g(b,c){function d(){return f(b)}var g=s(q.prototype);
b=b.toLowerCase();
for(var k in c)g[k]=c[k];
if(t)return t.call(document,b,{prototype:g});
if(m[b])throw Error("Tried to register an element, "+b+", but it's already registered");

if(-1===b.indexOf("-"))throw Error("Custom elements must have a hyphen in the tag");
d.prototype=g;
m[b]=g;
g=(p[b]||[]).concat(a(document.getElementsByTagName(b)));
k=0;
for(var h=g.length;
k<h;
k++)e(g[k]);
delete p[b];
n.call(document,b);
return d}function e(a){var b=m[a.tagName.toLowerCase()];
if(Object.__proto__)a.__proto__=b;
else for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);
"function"===typeof a.createdCallback&&a.createdCallback();
"function"===typeof a.attachedCallback&&document.documentElement.contains(a)&&
a.attachedCallback()}function f(a){var b=n.call(document,a);
a=a.toLowerCase();
"ft-"===a.slice(0,3)&&(m[a]?e(b):(p[a]||(p[a]=[]),p[a].push(b)));
return b}function l(a){return function x(){"function"===typeof this[a]&&this[a]!==x&&this[a].apply(this,arguments)}}function k(a,b,c){h[b]=g(a,{createdCallback:function(){var a=this;
d.require([c],function J(){try{"function"===typeof a.createdCallback&&a.createdCallback!==J&&a.createdCallback()}finally{a.ownerDocument.contains(a)&&a.attachedCallback()}})},attachedCallback:l("attachedCallback"),
detachedCallback:l("detachedCallback"),attributeChangedCallback:l("attributeChangedCallback")})}var m={},p={},q=h.HTMLElement||h.Element,n=document.createElement,u=q.prototype.setAttribute,r=q.prototype.removeAttribute,y=Object.keys||function(a){var b,c=[];
for(b in a)c.push(b);
return c},s=Object.create||function(a){function b(){}b.prototype=a;
return new b},t=document.register||document.registerElement;
t||((h.HTMLDocument||h.Document).prototype.createElement=f,"addEventListener"in h&&(document.body.addEventListener("DOMNodeInserted",
function(a){c("attachedCallback",a)}),document.body.addEventListener("DOMNodeRemoved",function(a){c("detachedCallback",a)})),q.prototype.setAttribute=function(){b.call(this,u,arguments)},q.prototype.removeAttribute=function(){b.call(this,r,arguments)});
k("ft-photoinput","FTPhotoInputElement","photoinput");
k("ft-map","FTMapElement","maps");
return g});
d.prototype.expand=function(a){var b=a&&"undefined"===typeof a.type?a:this.getManifest("expand");
!a||a.type||a.customClosePosition?(this.expandProperties||
a&&!a.type||this.setExpandProperties(this.getManifest("expand")),b=this.expandProperties):this.setExpandProperties(a)&&(b=this.expandProperties);
if(b){if(this.getManifest("expand")||this.getManifest("video")){var c=this;
b.fullscreen&&!0!==b.nonNative&&C(document.documentElement,function(){var a=b.forceOrientation;
if(a&&"none"!==a){var d=screen.orientation&&screen.orientation.lock||screen.mozLockOrientation||screen.msLockOrientation;
if(d&&(a=d.call(screen.orientation||screen,a),a["catch"]))a["catch"](function(){})}I(c)});

this.send("expand",b)}else this.error("expand","No expand component detailed in the manifest");
this.testMode&&this.dispatchEvent("expand")}};
d.prototype.resize=function(a){var b;
a&&!a.type?this.setResizeProperties(a)&&(b=this.resizeProperties):(this.resizeProperties||a||this.setResizeProperties(this.getManifest("expand")),b=this.resizeProperties);
b?this.expand(b):this.error("resize","resize method not successfully executed - invalid argument or setResizeProperties not previously called")};
d.prototype.contract=
function(){this.absorbSwipes(!1);
this.send("contract");
document.body.style.margin=0;
A()===document.documentElement&&["exitFullscreen","webkitExitFullscreen","msExitFullscreen","mozCancelFullScreen"].some(function(a){return document[a]&&(document[a](),!0)});
this.testMode&&this.dispatchEvent("contract")};
d.prototype.setExpandProperties=function(a){var b,c=/(width|height|offsetX|offsetY|indentDown|indentAcross)/,d=[];
if(a&&"object"===typeof a){for(b in a)if(c.test(b))d.push(b);
else if("fullscreen"===
b&&a[b]){d.length=4;
break}if(4<=d.length)return void 0===a.useCustomClose&&(a.useCustomClose=void 0===this.customClose?this.expandProperties&&void 0!==this.expandProperties.useCustomClose?this.expandProperties.useCustomClose:!0:this.customClose),void 0!==a.offsetX&&(a.indentAcross=a.offsetX,a.indentDown=a.offsetY),this.expandProperties=a,!0;
this.error("setExpandProperties","the properties object lacked the minimum requirements to set the expandProperties object {width: number, height: number, offsetX: number, offsetY: number}");

return!1}this.error("setExpandProperties","the properties object was not present or not a valid object")};
d.prototype.setResizeProperties=function(a){var b,c=/(width|height|offsetX|offsetY|indentDown|indentAcross)/,d=[];
if(a&&"object"===typeof a){for(b in a)c.test(b)&&d.push(b);
if(4<=d.length)return a.customClosePosition||(a.customClosePosition="top-right"),"undefined"!==typeof a.offsetX&&(a.indentAcross=a.offsetX,a.indentDown=a.offsetY),this.resizeProperties=a,!0;
this.error("setResizeProperties",
"the argument passed in lacked the minimum requirements to set the resizeProperties object {width: number, height: number, offsetX: number, offsetY: number}")}};
d.initialisation.feeds=function(){function a(a){var b=this.feeds,d,f;
for(d in b)if(b[d].isDynamic)for(f in a)d==f&&(b[d].url=a[f]);
this.dynamicFeedsPrepared=!0;
this.dispatchEvent("dynamicFeedsPrepared")}var b=this;
d.addEventListener("manifest",function(c){if(c.feeds){var d=c.feeds,e=c.instantAds||[],f=!1;
c=d.length;
var h=function(a){for(var c in a)this[c]=
a[c];
this.isDynamic=!1;
this.getUrl=function(){return b.replaceMacros(this.url,this.segment)};
for(c=e.length;
c--;
)if(e[c].name===this.name&&"text"===e[c].type){this.isDynamic=f=!0;
break}};
for(b.feeds={};
c--;
)b.feeds[d[c].name]=new h(d[c]);
!0===f&&b.addEventListener("instantads",a)}})};
d.prototype.callFeed=function(a,b){function c(a,c){f.data=a;
c&&(f.error=!0);
"function"===typeof b&&b(f);
e.dispatchEvent("feedloaded",f)}function g(a){function b(){c("",!0)}var e=d.query("head")[0],g=document.createElement("script");

g.setAttribute("src",a);
h[f.method]=c;
/MSIE 8/.test(navigator.userAgent)?g.onreadystatechange=function(){if(/loaded|complete/.test(g.readyState)){var a=g.readyState;
"complete"==g.readyState?e.appendChild(g):"loaded"==a&&"loading"==g.readyState&&_error()}}:(g.onerror=b,e.appendChild(g))}var e=this,f=e.feeds&&e.feeds[a];
!1===e.hasLoaded?e.addEventListener("ready",function(){e.callFeed(a,b)}):f&&(f.isDynamic&&!0!==e.dynamicFeedsPrepared?e.addEventListener("dynamicFeedsPrepared",function(){e.callFeed(a,
b)}):void 0===f.method?d.ajax(f.getUrl(),{context:e,complete:function(a){var b;
try{b=JSON.parse(a.responseText)}catch(d){b=a.responseText}c(b,400<=a.status||!a.status)}}):g(f.getUrl()))};
d.initialisation.instant=function(){function a(){var a=b.get("testConf"),g=b.get("confID"),e="../"+b.get("creativeID")+".json",f=b.get("ftServeDom")||b.get("tiaServeDom"),h=b.get("mvt");
a?e=a+g:h&&(e="../mv"+g+".json");
e+=(0>e.indexOf("?")?"?":e.indexOf("?")===e.length-1?"":"&")+"cb="+~~(1E9*Math.random());
d.ajax(e,
{context:b,complete:function(a){var c={},d;
if(200===a.status){try{c=JSON.parse(a.responseText)}catch(e){}for(d in c)b.instantAds[d]=c[d].value||"",b.get("adPreview")||"string"!==typeof c[d].type||"image"!==c[d].type.toLowerCase()||(b.instantAds[d]=b.tia||b.testMode?"../../instantAssets/"+c[d].value:f+"/"+b.get("cID")+"/instantAssets/"+c[d].value)}b.instantAdsLoaded=!0;
b.dispatchEvent("instantads",b.instantAds)},test:function(){b.instantAdsLoaded=!0;
b.dispatchEvent("instantads",b.instantAds)}})}var b=
this;
b.instantAdsLoaded=!1;
d.addEventListener("manifest",function(c){if(c.instantAds){var d=c.instantAds,e=c.videos;
c=c.instantAds.length;
var f=0;
for(b.instantAds={};
c--;
)if(b.instantAds[d[c].name]=d[c]["default"],"video"===d[c].type.toLowerCase())for(f=e.length;
f--;
)b.instantAds[d[c].name]=d[c].name===e[f].name?e[f].ref:b.instantAds[d[c].name];
b.addEventListener("ready",a)}})};
d.makeDispatcher=function(a){a.callbacks={};
a.addEventListener=a.on=d.makeDispatcher.addEventListener;
a.removeEventListener=
a.off=d.makeDispatcher.removeEventListener;
a.dispatchEvent=d.makeDispatcher.dispatchEvent;
a.clearEvent=d.makeDispatcher.clearEvent;
a.once=d.makeDispatcher.once};
d.makeDispatcher.addEventListener=d.makeDispatcher.on=function(a,b){this.callbacks[a]=this.callbacks[a]||[];
this.callbacks[a].unshift(b);
if(this instanceof d)switch(a){case "instantads":this.instantAdsLoaded&&b(this.instantAds);
break;
case "richload":this.richloadsLoaded&&b(this.richloads);
break;
case "load":"complete"!==document.readyState&&
"loaded"!==document.readyState||b();
break;
case "DOMLoaded":"loading"!==document.readyState&&b();
break;
case "politeload":this.politeloadFired&&b();
break;
case "deviceorientation":case "devicemotion":case "shake":this[a](b,!1)}};
d.makeDispatcher.once=function(a,b){function c(){b.apply(this,arguments);
this.removeEventListener(a,c)}this.addEventListener(a,c)};
d.makeDispatcher.off=d.makeDispatcher.removeEventListener=function(a,b){for(var c=this.callbacks[a]||[],g=c.length;
g--;
)if(c[g]===b){c.splice(g,
1);
break}if(this instanceof d&&/device(?:motion|orientation)|shake/.test(a))this[a](b,!0)};
d.makeDispatcher.dispatchEvent=function(){var a;
a=arguments;
for(var b=a.length,c=[];
b--;
)c[b]=a[b];
a=c;
b=a.shift();
b=this.callbacks[b]||[];
for(c=b.length;
c--;
)b[c].apply(this,a)};
d.makeDispatcher.clearEvent=function(a){delete this.callbacks[a]};
d.require(["_ft-elements"],function(a){h.FTRichloadElement=h.FTRichLoadElement=a("ft-richload",{createdCallback:function(){}})});
d.initialisation.richLoad=d.initialisation.richload=
function(){function a(a){return function(b){return d.$(b,a)}}function b(a){return function(b){var c=null;
return c=b.match(/#[a-z0-9_\-]+$/i)?a.document.querySelector(b):a.document.querySelectorAll(b)}}function c(a){d.addListener(f.richloads[a].frame.contentWindow,"click",function(b){var c;
c=f.richloads[a].frame;
for(var d=c.offsetLeft,e=c.offsetTop;
null!==c.offsetParent;
)c=c.offsetParent,d+=c.offsetLeft,e+=c.offsetTop;
c={x:d,y:e};
f.clickManager({pageX:c.x+b.pageX,pageY:c.y+b.pageY})})}function g(a,
b){var c={},e=f.richloads;
d.addListener(b,"load",function(){f.richloads[a].loaded=!0;
var g,h=0,l=0;
for(g in e)h++,e[g].loaded?(c[g]=e[g].loaded,l++):c[g]=!1;
l===h&&(f.richloadsLoaded=f.richloadsLoaded=!0);
d.insertCSS(b.document,f.defaultCSS);
f.richloads[a].frame.style.visibility="";
f.dispatchEvent("richload",c)})}function e(){var e,m,l=f.richloads;
m=null;
var q=f.get("serveDOM"),n;
for(n in l)if(!0!==l[n].used){if(m=document.querySelector("#"+n),"dynamic"===l[n].type&&(l[n].src=this.instantAds&&this.instantAds[n]?
this.instantAds[n]:l[n].src),m&&/richload/i.test(m.tagName)){e=f.tia||!1!==f.testMode?"../../richLoads/"+l[n].src:q+"/"+f.get("cID")+"/"+l[n].src;
/\.html$/i.test(e)||(e+=("/"===e[e.length-1]?"":"/")+"index.html");
l[n].used=!0;
var u=void 0;
h.attachEvent&&!h.addEventListener&&(u=document.createElement("div"),u.id=m.id,u.className=m.className,u.style.cssText=m.style.cssText,m.replaceNode(u),m=document.querySelector("#"+m.id));
l[n].frame.src=e;
l[n].frame.name=n;
l[n].loaded=!1;
m.appendChild(l[n].frame);

g(n,l[n].frame.contentWindow);
l[n].frame.contentWindow.myFT=this;
l[n].frame.contentWindow.FT=new d.Instance;
l[n].frame.contentWindow.FT.$=a(l[n].frame.contentWindow);
l[n].frame.contentWindow.FT.query=b(l[n].frame.contentWindow);
c(n)}}else f.error("initialisation.richload","Richload "+n+" already used")}var f=this,l=[];
f.richloadsLoaded=f.richLoadsLoaded=!1;
d.Instance=function(){};
d.Instance.prototype=d;
d.addEventListener("manifest",function(a){if(a.richloads||a.richLoads||a.instantAds){var b=a.richloads||
a.richLoads,c=a.instantAds,d=b&&b.length||0;
a=!1;
var g;
for(f.richLoads=f.richloads={};
d--;
)if(b&&b[d]){var h=f.richloads,r=b[d].name,y=b[d].src,s;
a:{for(var t=(s=c)&&s.length||0;
t--;
)if(s[t].name===b[d].name&&"richload"===s[t].type.toLowerCase()){a=!0;
s="dynamic";
break a}s="basic"}h[r]={src:y,type:s,used:!1}}for(g in f.richloads)b=document.createElement("iframe"),b.style.width="100%",b.style.height="100%",b.style.visibility="hidden",b.frameBorder=0,b.scrolling="no",b.setAttribute("margin","0"),b.setAttribute("allowTransparency",
"true"),b.setAttribute("allowfullscreen",""),b.setAttribute("webkitallowfullscreen",""),b.name=g,f.richloads[g].frame=b;
a?f.addEventListener("instantads",e):f.addEventListener("ready",e);
for(g in l)f.insertRichload(l[g]);
l=[]}});
d.prototype.insertRichload=d.prototype.insertRichLoad=function(e){var h,p=e&&e.richLoad||e.richload;
if("undefined"===typeof this.richloads)l.push(e);
else{if(!this.richloads[p])throw Error("No richload exists in the manifest with the name "+p);
var q=this.richloads[p];
if(!0===
q.used)throw Error("Richload "+p+" already used");
h=f.tia||!1!==f.testMode?"../../richLoads/"+q.src:f.get("serveDOM")+"/"+f.get("cID")+"/"+q.src;
/\.html$/i.test(h)||(h+=("/"===h[h.length-1]?"":"/")+"index.html");
q.used=!0;
q.frame.src=h;
q.frame.name=p;
q.loaded=!1;
e.parent.appendChild(q.frame);
q.frame.contentWindow.myFT=this;
q.frame.contentWindow.FT=new d.Instance;
q.frame.contentWindow.FT.$=a(q.frame.contentWindow);
q.frame.contentWindow.FT.query=b(q.frame.contentWindow);
c(p);
g(p,q.frame.contentWindow);

"dynamic"===q.type&&(q.src=this.instantAds&&this.instantAds[p]?this.instantAds[p]:q.src)}}};
d.prototype.applyShare=function(a,b,c,g){"string"===typeof a&&(a=d.query("#"+a));
a instanceof d.$||(a=d.$(a));
var e;
/ft-share-twitter/.test(a[0].className)&&(e="http://twitter.com/share?text="+encodeURIComponent(g)+"&url="+encodeURIComponent(c));
myFT.applyClickTag(a,b,e)};
d.testing=function(a){a=a.clickTagCount;
for(var b=1,b=/mobile/i.test(navigator.userAgent),c={clicks:{clickTag:"http://www.flashtalking.net/helpSystem/TiA/?n=0"},
confID:"0",creativeID:"0",cID:"0",serveDOM:"",api:"ft",mvt:!1,guid:"0",newGUID:!1,newImp:"",maxWidth:b?document.documentElement.clientWidth:h.innerWidth,maxHeight:b?document.documentElement.clientHeight:h.innerHeight,isViewable:!0,state:"default"},b=1;
20>=b;
b++)c.clicks["clickTag"+b]="http://www.flashtalking.net/helpSystem/TiA/?n="+(b<=a?b:"error");
this.dispatchEvent("politeload");
return c};
var G="fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange",L=!1,E=function(){var a=
document.createElement("div");
a.className="ft-video-controls";
a.innerHTML='<span class="ft-icon-play">D</span><span class="ft-video-progress-container">  <span class="ft-video-progress-bar">    <span class="ft-video-buffer"></span>    <span class="ft-video-progress"></span>  </span></span><span class="ft-time-display">0:00</span><span class="ft-icon-volume">G</span><span class="ft-icon-fullscreen">B</span>';
return a}(),O={video:"video1",preload:"metadata",poster:"",controls:!1,autoplay:!1,clickTag:!1,
muted:!1,forceAutoplay:function(){var a=navigator.userAgent,b=/iP(?:hone|ad|od)/.test(a),c=b&&!h.indexedDB&&-1===a.indexOf("Version"),d=document.createElement("canvas"),d=d.getContext&&d.getContext("webgl"),e=parseFloat(a.slice(a.indexOf("Android")+8));
return 0<a.indexOf("Android")&&(0<a.indexOf("Chrome")||0<a.indexOf("AppleWebKit"))&&4<=e||b&&(!c||d)}()};
d.Video=function(a,b){var c=this;
this.video=null;
this.settings=b;
this.container=this.filepath=null;
this.hasPlayedThrough=this.hasPlayed=!1;
this.cachedStyles=
{};
this.ytVideo=!1;
this.myFT=a;
h.FT.$(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange",function(){c.video&&c.fullscreenChange(c.isFullscreen())});
h.FT.makeDispatcher(this)};
d.Video.prototype.play=function(a){this.ytVideo?this.video.playVideo?this.video.playVideo():z(this,"play"):this.video.play(a)};
d.Video.prototype.pause=function(a){this.ytVideo?this.video.pauseVideo?this.video.pauseVideo():z(this,"pause"):this.video.pause(a)};
d.Video.prototype.stop=function(a){var b=
this.video;
this.ytVideo?b.stopVideo?(b.stopVideo(),0<b.getCurrentTime()&&b.seekTo(0)):z(this,"stop"):(0<b.currentTime&&(b.currentTime=0),"function"===typeof b.stop?b.stop():(this.pause(a),this.videoElement.removeAttribute("autoplay"),this.videoElement.load()))};
d.Video.prototype.restart=function(a){this.ytVideo&&!this.video.playVideo?z(this,"restart"):(this.stop(a),this.play(a))};
d.Video.prototype.goFullscreen=function(){var a=this;
a.isFullscreen()||C(a.video,null,function(){a.fallbackFullscreen()})};

d.Video.prototype.fallbackFullscreen=function(){var a=this;
h.FT.$(this.video);
a.previousState=a.myFT.getState();
d.listen(h,"resize",a.fullscreenChange);
a.myFT.once("contract",function(){d.removeListener(h,"resize",a.fullscreenChange)});
a.displayingFallbackFullscreen=!0;
a.fullscreenChange(a.isFullscreen);
return"expanded"!==a.previousState&&a.myFT.getManifest("expand")?(a.myFT.expand({fullscreen:!0}),!0):!1};
d.Video.prototype.isFullscreen=function(){return A()===this.video||this.video.webkitDisplayingFullscreen||
!!this.displayingFallbackFullscreen};
d.Video.prototype.fullscreenChange=function(a){var b=this.myFT?this.myFT.videos:{},c=d.$(this.video),g;
this.dispatchEvent("fullscreenchange",a);
if(a){for(var e in b)b[e]!==this&&M(b[e]);
this.displayingFallbackFullscreen?(this.cachedStyles={marginLeft:c[0].style.marginLeft,marginTop:c[0].style.marginTop,left:c[0].style.left,top:c[0].style.top,position:c[0].style.position,width:c[0].style.width,height:c[0].style.height},c[0].style.marginLeft=0,c[0].style.marginTop=
0,c[0].style.position=c[0].style.position||"relative",c[0].style.left=0-c.x()+"px",c[0].style.top=0-c.y()+"px",c[0].style.height=this.myFT.getMaxSize().height+"px",c[0].style.width=this.myFT.getMaxSize().width+"px"):(this.cachedStyles={backgroundColor:"black"!==this.video.style.backgroundColor?this.video.style.backgroundColor:this.cachedStyles.backgroundColor||""},this.video.style.backgroundColor="black")}else for(g in this.cachedStyles)this.video.style[g]=this.cachedStyles[g]||""};
d.Video.prototype.leaveFullscreen=
function(){this.isFullscreen()&&!this.displayingFallbackFullscreen?this.video.exitFullScreen?this.video.exitFullscreen():this.video.msExitFullscreen?this.video.msExitFullscreen():this.video.mozExitFullScreen?this.video.mozExitFullScreen():this.video.webkitExitFullscreen?this.video.webkitExitFullscreen():document.cancelFullscreen?document.cancelFullscreen():document.msCancelFullscreen?document.msCancelFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullscreen?
document.webkitCancelFullscreen():document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozExitFullScreen?document.mozExitFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():this.displayingFallbackFullscreen&&("default"===this.previousState?this.myFT.contract():"resized"===this.previousState&&this.myFT.expand(),this.displayingFallbackFullscreen=!1)};
d.Video.prototype.mute=function(){this.savedVolume=0<this.video.volume?
this.video.volume:this.savedVolume||1;
this.video.volume=0;
this.video.muted=!0;
this.ytVideo&&this.video.mute()};
d.Video.prototype.unmute=function(){this.video.muted=!1;
this.video.volume=this.savedVolume||1;
this.ytVideo&&this.video.unMute()};
d.Video.userInitiatesPlayback=-1;
(function(){function a(a){!e.parentNode||a&&!e.currentTime||(d.Video.userInitiatesPlayback=!e.currentTime,document.body.removeChild(e),clearTimeout(g))}var b=navigator.userAgent,c=/iP(?:hone|ad|od)/.test(b),b=c&&0<b.indexOf("Version");

if(!/PhantomJS/.test(navigator.userAgent)&&document.addEventListener){if(c&&!b)return d.Video.userInitiatesPlayback=!0;
var g,e=document.createElement("video"),c=document.createElement("source"),b=document.createElement("source");
/msie 9/i.test(navigator.userAgent)||(e.autoplay=!0);
c.src="data:video/webm;
base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4ECQoWBAhhTgGcBAAAAAAACNxFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsggIa7AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjQ4LjEwMFdBjUxhdmY1NS40OC4xMDBzpJAvovgexxqSyucVQwYw4Wu/RImIQI9AAAAAAAAWVK5rAQAAAAAAADuuAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEC+vCAOABAAAAAAAABrCBELqBEB9DtnUBAAAAAAAAl+eBAKO2gQAAgHACAJ0BKhAAEAAARwiFhYiFhIgCAgAMDN2sx+Ng/VP//u0p//8rQ5Hz//3WA//+aDAAo5WBAMgAsQEAARAQABgAGFgv9AAIAACjlYEBkACxAQABEBAAGAAYWC/0AAgAAKOVgQJYALEBAAEQEAAYABhYL/QACAAAo5WBAyAAsQEAARAQABgAGFgv9AAIAAAcU7trAQAAAAAAABG7j7OBALeK94EB8YIBd/CBAw==";

b.src="data:video/mp4;
base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU";

e.style.cssText="position: absolute;
 width: 0;
 height: 0;
 ";
g=setTimeout(a,400);
e.addEventListener("timeupdate",a);
document.body.appendChild(e);
e.appendChild(c);
e.appendChild(b)}})();
d.Video.prototype.loadVid=function(){function a(){e.appendChild(f);
e.appendChild(l);
e.load()}function b(){var e=d.Video.userInitiatesPlayback;
if(-1===e&&1E3>+new Date-c)return setTimeout(b,100);
if(!0!==e)return a();
d.require(["canvasvideo"],function(){g.canvasVideo=new d.CanvasVideo(g)})}var c=+new Date,g=this,e=g.video,
f=document.createElement("source"),l=document.createElement("source"),k=g.myFT.get("ftServeDom")||g.myFT.get("tiaServeDom")||"",k=g.e||k+"/"+(g.filepath||"").replace(/^http:(?:\/\/video\.flashtalking\.com\/)?/i,"");
/^(?:https?:)?\/\//i.test(k)||(k=("https:"===location.protocol?"https:":"http:")+"//cdn.flashtalking.com"+k);
f.src=k+".mp4";
f.type="video/mp4";
l.src=k+".webm";
l.type="video/webm";
g.settings.forceAutoplay&&e.autoplay&&h.ArrayBuffer&&Function.prototype.bind?b():a()};
d.Video.prototype.switchVideo=
function(a){var b,c=this.video;
b=this.myFT.getManifest("videos");
for(var d=b.length,e=!1;
d--;
)if(b[d].name===a){e=!0;
break}if(e){this.settings.muted=c.isMuted?c.isMuted():c.muted;
this.pause();
if(b=this.container.querySelector("iframe, canvas"))c.destroy?c.destroy():this.container.removeChild(b),this.container.insertBefore(this.videoElement,this.container.firstChild);
this.video=c=this.videoElement;
this.video.style.left="";
this.video.style.position="";
delete this.filepath;
delete this.ytVideo;
delete this.canvasVideo;

c&&(c.innerHTML="",c.autoplay=this.settings.autoplay,c.muted=this.settings.muted);
this.settings.video=a;
B(this)}else this.myFT.error("switchVideo","Invalid video "+a)};
d.Video.prototype.loadYouTubeVid=function(a,b){function c(a){0===l||0===k?setTimeout(function(){n.width=f.settings.parent.offsetWidth;
n.height=f.settings.parent.offsetHeight;
f.video=new h.YT.Player(a,n);
f.video.muted=f.settings.muted},200):(f.video=new h.YT.Player(a,n),f.muted=f.settings.muted)}function g(a){function b(){}"function"===
typeof h.onYouTubeIframeAPIReady&&(b=h.onYouTubeIframeAPIReady);
h.onYouTubeIframeAPIReady=function(){b();
c(a)};
d.include(("https:"===location.protocol?"https":"http")+"://www.youtube.com/iframe_api")}function e(a){"undefined"!==typeof h.YT&&"undefined"!==typeof h.YT.Player?c(a):g(a)}var f=this,l="",k="",m=this.container,p=this.filepath,q=function(){var a=/(?:v=|\.be\/)(.*)/.exec(p);
""===a||null===a?(myFT.error("insertVideo","No youtube ID detected"),a=""):a=a[1];
return a}(),l=b.width?b.width:f.settings.parent.offsetWidth,
k=b.height?b.height:f.settings.parent.offsetHeight;
this.ytVideo=!0;
var l=b.width?b.width:f.settings.parent.offsetWidth,k=b.height?b.height:f.settings.parent.offsetHeight,n={height:k,width:l,videoId:q,playerVars:{rel:"0",enablejsapi:"1",controls:!0===f.settings.controls?"1":"0",autoplay:!0===f.settings.autoplay?"1":"0",origin:null===h.location.origin?"":h.location.origin,showinfo:"0",wmode:"transparent"},events:{onReady:function(){f.muted?f.mute():f.unmute();
for(var a=f,b,c=a.settings.actionQueue||
[];
b=c.shift();
)a[b]()},onStateChange:function(a){function b(a){var c=document.createEvent("CustomEvent");
c.initCustomEvent(a,!1,!1,null);
m.dispatchEvent(c)}var c=a.target;
a=["ended","play","pause"][a.data];
"ended"===a?(b("timeupdate"),f.settings.loop&&f.restart()):"play"===a&&c.getIframe&&setTimeout(function t(){b("timeupdate");
1===c.getPlayerState()&&setTimeout(t,300)},500);
a&&b(a)}}};
""!==q&&e(this.video)};
d.prototype.videos={};
d.prototype.insertVideo=function(a){var b,c=this,g="",e=document.createElement("video"),
f=document.createElement("div"),h;
if(a)if(a.video)if(a.parent)if("object"!==typeof a.parent)c.error("insertVideo","The parent, defined in the settings argument, should be an HTML Div Element");
else{if(e.canPlayType||/phantomjs/i.test(navigator.userAgent)){e.addEventListener("timeupdate",function(){},!0);
b=function(){};
b.prototype=O;
b=new b;
a.parent=0<a.parent.length?a.parent[0]:a.parent;
a.controlsParent=a.controlsParent&&0<a.controlsParent.length?a.controlsParent[0]:a.controlsParent;
for(h in a)b[h]=
a[h];
f.className="ft-video";
f.setAttribute("data-ft-video",a.video);
b.parent.appendChild(f);
f.appendChild(e);
b.width&&(g+="width:"+b.width+"px;
");
b.height&&(g+="height:"+b.height+"px;
");
g&&d.styleSheet.insertRule('[data-ft-video="'+a.video+'"] {'+g+"}",d.styleSheet.cssRules.length);
a.clickTag?e.addEventListener("click",function(b){b.stopPropagation&&b.stopPropagation();
c.clickManager(b);
c.clickTag("true"===a.clickTag.toString()?0:a.clickTag)}):e.addEventListener("click",function(a){a.stopPropagation&&
a.stopPropagation();
c.clickManager(a)});
for(h in b)try{b[h]&&!/^(?:video|clicktag|parent|controlsParent|forceAutoplay)$/i.test(h)&&(e.setAttribute(h,b[h]),"muted"===h&&b[h]&&(e.muted=!0))}catch(k){}e.controls=!1;
return c.applyVideo(e,b)}c.dispatchEvent("videofail")}else c.error("insertVideo","There was no parent element defined in the settings argument");
else c.error("insertVideo","The settings argument did not contain a video name for referencing against the manifest or it was falsey");
else c.error("insertVideo",
"No settings object was passed to the insertVideo method")};
d.prototype.applyVideo=function(a,b){var c=this,g=b.video,e=new d.Video(c,b);
e.video=e.videoElement=a;
e.container=e.video.parentNode;
B(e);
(a.parentNode||a).addEventListener("canplay",function(){e.dispatchEvent("playbackready")},!0);
c.getManifest("filename")?c.registerVideo(e):d.addEventListener("manifest",function(){c.registerVideo(e)});
return c.videos[g]=e};
d.prototype.registerVideo=function(a){function b(b){var c=e();
f.send("tracker",{type:"video",
id:c,event:b,duration:p});
f.dispatchEvent("video",{i:k.video,id:c,event:b});
a.dispatchEvent("tracker",{duration:p,event:b})}function c(c){var d,e=a.video,f=h[k.video];
f||(h[k.video]=f={c:0});
"undefined"===typeof f.b&&(f.b=0);
c&&c.detail&&c.detail.cvPlayRatio?c=100*c.detail.cvPlayRatio:"function"===typeof e.getCurrentTime?(ytVideo=!0,d=e.getDuration(),c=Math.round(e.getCurrentTime())/Math.floor(d)*100):(d=e.duration,c=Math.round(e.currentTime)/Math.floor(d)*100);
p=Math.floor(10*d);
if(0!==c){switch(f.b){case 0:b("starts");

a.hasPlayed=!0;
f.b++;
break;
case 1:25<=c&&(b("25%"),f.b++);
break;
case 2:50<=c&&(b("50%"),f.b++);
break;
case 3:75<=c&&(b("75%"),f.b++);
break;
case 4:100<=c&&(b("100%"),a.hasPlayedThrough=!0,f.g=!0,f.b++)}100>f.c&&100<=c&&a.dispatchEvent("ended");
f.c=c}}function d(){var a=h[k.video];
a||(p=void 0,h[k.video]=a={c:0});
a.f||(b("init"),a.f=!0);
a.g&&!a.h&&(b("replay"),a.h=!0)}function e(){var a=k.video,b=f.getManifest("videos"),c=b.length;
if(c){for(;
c--;
)if(a===b[c].name)return c+1;
return"No matching video name in the manifest's Video array"}return"No videos included in the manifest's Video array"}
var f=this,h={},k=a.settings,m=a.container,p;
"number"===typeof e()?a.video&&(m.addEventListener("play",d,!0),m.addEventListener("timeupdate",c,!0)):f.error("registerVideo",e())};
d.makeDispatcher(d);
h.FT=d})(window);
