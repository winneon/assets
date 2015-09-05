//////////////////////////////////////////////////////////////////
//   ____ _____ _   _ _____ ____      _    _           _ ____   //
//  / ___| ____| \ | | ____|  _ \    / \  | |         | / ___|  //
// | |  _|  _| |  \| |  _| | |_) |  / _ \ | |      _  | \___ \  //
// | |_| | |___| |\  | |___|  _ <  / ___ \| |___  | |_| |___) | //
//  \____|_____|_| \_|_____|_| \_\/_/   \_\_____|  \___/|____/  //
//                                                              //
//////////////////////////////////////////////////////////////////

$(document).ready(function(){
	var title = $("title").html();

	$(".title").html(title);
	$("a").attr("target", "_blank");

	$(window).scroll(function(){
		var $nav   = $("nav"),
		    $go    = $("div.scroll_btns"),
		    $top   = $("div.top"),
		    marker = $(window).scrollTop(),
		    height = $("header").height() / 1.25,
		    pos    = marker / height;
		
		if (marker <= height){
			$nav.css("opacity", pos);
			$go.css("opacity", pos);
			$top.css("opacity", 1 - pos);
		} else if ($nav.css("opacity") != 1 || $top.css("opacity") != 0 || $go.css("opacity") != 0){
			$nav.css("opacity", 1);
			$go.css("opacity", 1)
			$top.css("opacity", 0);
		}
	});

	$("nav li.title").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 1500);
	});

	$("div.scroll > div, div.scroll_btns").click(function(){
		$("html, body").animate({
			scrollTop: $("header").height() - $("nav").height()
		}, 1500);
	});
});