//Sound Settings
function otherSoundPlaying() {
	console.warn("其它铃声正在播放，你可以尝试输入stop()以终止所有铃声的播放。");
}

function stopSoundSuccessfully() {
	console.log("成功暂停所有声音!");
}

//Msg Setting
function inputChoose() {
	return prompt("请输入以下值中的一个作为你的选择：\n"
		+ "     - clear-all    清除所有位置的文字\n"
		+ "     - clear-top    清除界面上方的文字\n"
		+ "     - clear-down   清除界面下方的文字\n"
		+ "     - top          在界面上方显示括号内的文字\n"
		+ "     - down         在界面下方显示括号内的文字\n"
		+ "按取消来取消运行本次命令。"
	);
}

function clearMsgSuccessfully() {
	console.log("已清除文字。");
}
function setMsgSuccessfully(string) {
	console.log("已经成功将消息文字设置为：\n%c" + string, "color: #848484");
}

//Help
function helpStringNotFound() {
	console.error("无效的参数!请输入help()查看可用的参数。");
}

//Functions
function warnInputString() {
	console.error("括号内的值必须为字符串！");
}