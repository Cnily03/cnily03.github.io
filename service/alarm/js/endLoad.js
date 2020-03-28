window.onload = function() {
	addJS("settings/special.js");
	setInterval("schedule(TIME)",500);
	setInterval("getTime();",500);
}