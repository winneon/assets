$(document).ready(function(){
	$("a:not(.contact)").attr("target", "_blank");
	setTimeout(function(){
		var secs = 1.5 * 1000;
		$("div.center").animate({
			opacity: 1
		}, secs);
		$("div.title").animate({
			top: "0px"
		}, secs);
		$("div.subtitle").animate({
			top: "0px",
			opacity: 1
		}, secs);
		$("div.social").animate({
			top: "0px",
			opacity: 1
		}, secs);
		$("a.contact").animate({
			top: "0px",
			opacity: 1
		}, secs);
	}, 1250);
});