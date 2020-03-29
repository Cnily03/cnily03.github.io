var doCustom = document.getElementById("audio-custom");
var playing = false;

function play(audio_1 = "", audio_2 = "") {
	if(playing == false) {
		//考虑是否存在audio_1
		if(audio_1) {
			playing = true;

			//检测是否是网络播放
			if((audio_1.indexOf("://") + 1) > 0)
				doCustom.src = audio_1;
			else
				doCustom.src = "media/" + audio_1;

			doCustom.currentTime = 0;
			doCustom.pause();
			doCustom.play();
			//playing调0
			document.getElementById("audio-custom").addEventListener('ended', function () {
				playing = false;
				play(audio_1=audio_2,audio_2="");
			})
		}
	} else otherSoundPlaying();
}

function stop() {
	playing = false;
	doCustom.currentTime = 0;
	doCustom.pause();
	stopSoundSuccessfully()
}

function msgTop(string="", color_or_size_1="black", color_or_size_2="black") {
	if(typeof string == 'string') {
		//如果没有输入或者输入的是""
		if(!string) {
			document.getElementById("message-top").innerHTML = string;
			clearMsgSuccessfully();
		}
		else {
			document.getElementById("message-top").innerHTML = string;
			if((color_or_size_1.indexOf("px") +1) > 0)
				document.getElementById("message-top").style.fontSize = color_or_size_1;
			else
				document.getElementById("message-top").style.color = color_or_size_1;
			if((color_or_size_2.indexOf("px") +1) > 0)
				document.getElementById("message-top").style.fontSize = color_or_size_2;
			else
				document.getElementById("message-top").style.color = color_or_size_2;
			setMsgSuccessfully(string);
		}
	} else warnInputString();
}

function msgDown(string="" ,color_or_size_1="black", color_or_size_2="black") {
	if(typeof string == 'string') {
		//如果没有输入或者输入的是""
		if(!string) {
			document.getElementById("message-down").innerHTML = string;
			clearMsgSuccessfully();
		}
		else {
			document.getElementById("message-down").innerHTML = string;
			if((color_or_size_1.indexOf("px") +1) > 0)
				document.getElementById("message-down").style.fontSize = color_or_size_1;
			else
				document.getElementById("message-down").style.color = color_or_size_1;
			if((color_or_size_2.indexOf("px") +1) > 0)
				document.getElementById("message-down").style.fontSize = color_or_size_2;
			else
				document.getElementById("message-down").style.color = color_or_size_2;
			setMsgSuccessfully(string);
		}
	} else warnInputString();
}

function msg(choose, string="", color_or_size_1="black", color_or_size_2="black") {
	while((choose != "top") && (choose != "down") && (choose != "clear-all") && (choose != "clear-top") && (choose != "clear-down")) {
		choose = inputChoose();
		if(choose == null)
			return;
	}
	if(choose == "top") msgTop(string, color_or_size_1, color_or_size_2);
	else if(choose == "down") msgDown(string, color_or_size_1, color_or_size_2);
	else if(choose == "clear-all") msgTop(),msgDown();
	else if(choose == "clear-top") msgTop();
	else if(choose == "clear-down") msgDown();
}

function help(string="") {
	if(typeof string == 'string') {
		//如果没有输入或者输入的是""
		if(!string) {
			//addJS("settings/help/USAGE.js");
			helpUsage();
		}
		//property
		else if(string == "property") {
			addJS("settings/help/property.js");
		}
		//cmd
		else if(string == "cmd") {
			addJS("settings/help/cmd.js");
		} else helpStringNotFound();
	} else warnInputString();
}