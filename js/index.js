new WOW().init();

$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: '#myMenu',
        sectionsColor: ['#f2f2f2', '#505050', '#f2f2f2', '#505050'],
        anchors: ['Welcome','About','Work','Contact'],

	});
});

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#303030',
    lineColor: '#303030'
  });
  var intro = document.getElementById('intro');
  var navbar = document.getElementById('navbar');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  navbar.style.marginTop = - navbar.offsetHeight / 2 + 'px';
}, false);


$(function(){
	$(".typed").typed({
		strings: ["I am Ishan Vyas."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

