(function($){
	$.fn.changeElementType = function(newType){
		var attrs = { };

		$.each(this[0].attributes, function(idx, attr){
			attrs[attr.nodeName] = attr.nodeValue;
		});

		this.replaceWith(function(){
			return $("<" + newType + "/>", attrs).append($(this).contents());
		});
	};
})(jQuery);

function isValidImage(url){
	$("img", {
		src: url,
		error: function(){
			alert("whoops!");
		},
		load: function(){
			alert("yay!");
		}
	});
}

var css = document.createElement("link");

css.type = "text/css";
css.rel = "stylesheet";
css.href = "http://winneonsword.net/css/cytube_style.css";
$("head").append(css);

var title = $(".navbar-brand");

title.html("WC // Publix Cytube");
title.attr("href", "http://www.ohsototes.com/");
title.attr("target", "_blank");

var navbar = $(".navbar-nav");

navbar.html("");
navbar.append("<li><a href='ts3server://t4i.teamspeak.cc/?port=9071'>Connect to TS</a></li>");
navbar.append("<li><a id='showchansettings' href='#' onclick=\"javascript:$('#channeloptions').modal()\" style>Settings</a></li>");

setVisible("#showchansettings", CLIENT.rank >= 2)

if (CLIENT.rank >= 255){
	USEROPTS.adminhat = true;
} else if (CLIENT.rank >= 2){
	USEROPTS.modhat = true;
}

$(".server-msg-reconnect").html("Connected to the Worlds Collide Publix Cytube!");
$("#mediarefresh").prepend("<span id='button-text'>Refresh Player</span>");

$("#currenttitle").changeElementType("div");
$(".credit").html("Copyright &copy; 2012-2014 <a href='http://ohsototes.com'>Worlds Collide Network</a> &#8226; Hosted on <a href='http://cytu.be'>CyTu.be</a>");

isValidImage("http://google.com");