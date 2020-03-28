var WIDTH, change;
var inputWidth, textareaWidth, buttonWidth, coverWidth, coverHeight;

function getScreenWidth() {
	if (window.innerWidth)
		WIDTH = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		WIDTH = document.body.clientWidth;
}

function sizeEdit() {
	getScreenWidth();
	inputWidth = WIDTH - 24;
	textareaWidth = WIDTH - 36;
	buttonWidth = WIDTH - 26;
	coverWidth = WIDTH - 22;
	coverHeight = coverWidth * 593 / 521 + 30;

	//input
	change = document.getElementsByTagName('input')[0];
	change.style.width = inputWidth + "px";
	change = document.getElementsByTagName('input')[1];
	change.style.width = inputWidth + "px";
	//textarea
	change = document.getElementsByTagName('textarea')[0];
	change.style.width = textareaWidth + "px";
	//button
	change = document.getElementById('buttonWidth_1');
	change.style.width = buttonWidth / 2 + "px";
	change = document.getElementById('buttonWidth_2');
	change.style.width = buttonWidth / 2 + "px";
	//div cover
	change = document.getElementById('cover');
	change.style.width = coverWidth + "px";
	change.style.height = coverHeight + "px";
}