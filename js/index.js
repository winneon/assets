$(function(){
	$("a[href*=#]:not([href=#])").click(function(){
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length){
				$("html, body").animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	$("a[href=#top]").click(function(){
		$('html, body').animate({
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

$("a[href='#projects']").animateScroll(".projects");