var js = document.createElement("script");

js.type = "text/javascript";
js.src = "http://cytu.be/js/util.js";

document.head.appendChild(js);

//makeAlert("Welcome to WA", "", false);

var children = $("#userlist .userlist_item");
if(children.length != 0){
	var keys = Object.keys(children);
	for(var k in keys) {
		var i = keys[k];
		if(isNaN(parseInt(i))) {
			continue;
		}
		var child = children[i];
		var div = $(child);
		
		if (div.data("afk")){
			for (var kk in Object.keys(div)){
				var j = Object.keys(div)[kk];
				var span = $(div[j]);
				if (span.hasClass("userlist_owner")){
					span.attr("style", "font-style: italic; color: rgba(4, 163, 4, 0.5) !important;");
				}
alert("g");
			}
		}
	}
}
