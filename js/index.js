$(function(){
	var page = $("html, body");
	
	$("a[href*=#]:not([href=#])").click(function(){
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length){
				page.animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	$("a[href=#top]").click(function(){
		page.animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	
});

var title = $("div#title");
title.html(title.attr("out"));

title.hover(function(){
	title.html(title.attr("in"));
}, function(){
	title.html(title.attr("out"));
});

$(".project-title").attr("target", "_blank");
$(".project-title").after("<br />");

$("html").niceScroll({
	styler: "fb",
	cursorcolor: "#2D2D2D",
	cursorborder: "0px solid black",
	scrollspeed: "40",
	cursoropacitymin: "1",
	cursoropacitymax: "1"
});

