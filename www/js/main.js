!function(n){function r(r){for(var i,t,a=r[0],d=r[1],c=r[2],l=0,p=[];l<a.length;l++)t=a[l],o[t]&&p.push(o[t][0]),o[t]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(u&&u(r);p.length;)p.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var n,r=0;r<s.length;r++){for(var e=s[r],i=!0,a=1;a<e.length;a++){var d=e[a];0!==o[d]&&(i=!1)}i&&(s.splice(r--,1),n=t(t.s=e[0]))}return n}var i={},o={0:0},s=[];function t(r){if(i[r])return i[r].exports;var e=i[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=n,t.c=i,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)t.d(e,i,function(r){return n[r]}.bind(null,i));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="";var a=window.webpackJsonp=window.webpackJsonp||[],d=a.push.bind(a);a.push=r,a=a.slice();for(var c=0;c<a.length;c++)r(a[c]);var u=d;s.push([2,1]),e()}({2:function(n,r,e){"use strict";e.r(r),function(n){e(3);var r=e(1);n(document).ready(function(){Array.from(document.querySelectorAll('[data-carousel="swiper"]')).forEach(function(n){return new r.a(n,{loop:!0,slidesPerView:"auto",centeredSlides:!1,initialSlide:1,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}})}),function(n,r,e){n.browserInfo={userAgent:navigator.userAgent,browser:function(){var n,r,e,i=navigator.userAgent,o=navigator.appName,s=""+parseFloat(navigator.appVersion),t=parseInt(navigator.appVersion,10);return-1!==(r=i.indexOf("Opera"))?(o="Opera",s=i.substring(r+6),-1!==(r=i.indexOf("Version"))&&(s=i.substring(r+8))):-1!==(r=i.indexOf("MSIE"))?(o="Microsoft Internet Explorer",s=i.substring(r+5)):"Netscape"===o&&-1!==i.indexOf("Trident/")?(o="Microsoft Internet Explorer",s=i.substring(r+5),-1!==(r=i.indexOf("rv:"))&&(s=i.substring(r+3))):-1!==(r=i.indexOf("Chrome"))?(o="Chrome",s=i.substring(r+7)):-1!==(r=i.indexOf("CriOS"))?(o="Chrome",s=i.substring(r+6)):-1!==(r=i.indexOf("Safari"))?(o="Safari",s=i.substring(r+7),-1!==(r=i.indexOf("Version"))&&(s=i.substring(r+8))):-1!==(r=i.indexOf("Firefox"))?(o="Firefox",s=i.substring(r+8)):(n=i.lastIndexOf(" ")+1)<(r=i.lastIndexOf("/"))&&(o=i.substring(n,r),s=i.substring(r+1),o.toLowerCase()===o.toUpperCase()&&(o=navigator.appName)),-1!==(e=s.indexOf(";"))&&(s=s.substring(0,e)),-1!==(e=s.indexOf(" "))&&(s=s.substring(0,e)),-1!==(e=s.indexOf(")"))&&(s=s.substring(0,e)),t=parseInt(""+s,10),isNaN(t)&&(s=""+parseFloat(navigator.appVersion),t=parseInt(navigator.appVersion,10)),{name:o,version:t,versionString:s}}(),browserFeatures:function(){var e=!1;try{r.cookie="cookietest=1";var i=-1!=r.cookie.indexOf("cookietest=");r.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e=i}catch(n){}return{window:{width:n.innerWidth,height:n.innerHeight},allowsCookies:e}}(),device:function(){var n,r=navigator.appVersion,e=navigator.userAgent,i=[{s:"iPad",r:/iPad/},{s:"Samsung Galaxy",r:/SCH-I800/},{s:"Motorola",r:/xoom/},{s:"Kindle",r:/kindle/}],o=[{s:"iPhone",r:/iPhone/},{s:"iPod",r:/iPod/},{s:"blackberry",r:/blackberry/},{s:"android 0.5",r:/android 0.5/},{s:"htc",r:/htc/},{s:"lg",r:/lg/},{s:"midp",r:/midp/},{s:"mmp",r:/mmp/},{s:"mobile",r:/mobile/},{s:"nokia",r:/nokia/},{s:"opera mini",r:/opera mini/},{s:"palm",r:/palm|PalmSource/},{s:"pocket",r:/pocket/},{s:"psp",r:/psp|Playstation Portable/},{s:"sgh",r:/sgh/},{s:"smartphone",r:/smartphone/},{s:"symbian",r:/symbian/},{s:"treo mini",r:/treo mini/},{s:"SonyEricsson",r:/SonyEricsson/},{s:"Samsung",r:/Samsung/},{s:"MobileExplorer",r:/MobileExplorer/},{s:"Benq",r:/Benq/},{s:"Windows Phone",r:/Windows Phone/},{s:"Windows Mobile",r:/Windows Mobile/},{s:"IEMobile",r:/IEMobile/},{s:"Windows CE",r:/Windows CE/},{s:"Nintendo Wii",r:/Nintendo Wii/}],s=!1,t=!1,a="";for(n in i)if(i[n].r.test(e)){a=i[n].s,s=!0;break}if(""===a)for(n in o)if(o[n].r.test(e)){a=o[n].s,t=!0;break}var d=s||t;return d||(d=/Mobile|mini|Fennec|Android/.test(r)),{screen:{width:screen.width,height:screen.height},device:a,isTable:s,isMobile:d,isPhone:t}}(),os:function(){var n=navigator.appVersion,r=navigator.userAgent,e="unknown",i="unknown",o=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var s in o){var t=o[s];if(t.r.test(r)){i=t.s;break}}switch(/Windows/.test(i)&&(e=/Windows (.*)/.exec(i)[1],i="Windows"),i){case"Mac OS X":e=/Mac OS X (10[\.\_\d]+)/.exec(r)[1];break;case"Android":e=/Android ([\.\_\d]+)/.exec(r)[1];break;case"iOS":e=(e=/OS (\d+)_(\d+)_?(\d+)?/.exec(n))[1]+"."+e[2]+"."+(0|e[3])}return{name:i,versionString:e}}()}}(window,document);var e="data-install-fallback",i="data-install-version",o={INSTALL:"[".concat("data-install","]"),FALLBACK:"[".concat(e,"]"),VERSION:"[".concat(i,"]")},s={"Mac OS X":{name:"macOS",ref:"#"},Windows:{name:"Windows",ref:"#"},Linux:{name:"Linux",ref:"#"}}[window.browserInfo.os.name];s&&(n(o.INSTALL).attr("href",s.ref),n(o.VERSION).text("Version: ".concat(s.name)).show(),n(o.FALLBACK).show())})}.call(this,e(0))}});
//# sourceMappingURL=main.js.map