$.fn.animateScroll = function(id){
	$(this).click(function(){
		$("html, body").animate({
			scrollTop: $(id).offset().top
		}, 2000);
	});
};

var title = $("div#title");

title.html(title.attr("out"));
title.hover(function(){
	title.html(title.attr("in"));
}, function(){
	title.html(title.attr("out"));
});

$("a[href='#projects']").animateScroll(".projects");