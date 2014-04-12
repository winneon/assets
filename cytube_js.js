var js = document.createElement("script");

js.type = "text/javascript";
js.src = "http://cytu.be/js/util.js";
document.head.appendChild(js);

var title = $(".navbar-brand");

title.html("WC // Publix Cytube");
title.attr("href", "http://www.ohsototes.com/");
title.attr("target", "_blank");

var navbar = $(".navbar-nav");

navbar.html("");
navbar.append("<li><a href='ts3server://t4i.teamspeak.cc/?port=9071'>Connect to TS</a></li>");
navbar.append("<li><a id='showchannelsettings' href='#' onclick=\"javascript:$('#channeloptions').modal()\" style>Settings</a></li>");

setVisible("#showchansettings", CLIENT.rank >= 2);
