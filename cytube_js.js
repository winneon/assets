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

$("nav").removeClass("navbar-fixed-top");
$(".server-msg-reconnect").html("Connected to the Worlds Collide Publix Cytube!");
