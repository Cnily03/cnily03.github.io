function sleep(ms) {
	var end = new Date().getTime() + ms;
	setInterval("now = new Date(); if(now.getTime()>end) return;", 1);
}