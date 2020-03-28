function copyText() {
	var text = document.getElementById("output");
	text.select();
	if (text.value) {
		try {
			document.execCommand("copy");
			var tmp = text.value;
			text.value = "";
			text.value = tmp; //清空再放置可以取消选中文本
			text.blur();
			alert("复制成功！");
		} catch (err) {
			alert("您的浏览器似乎并不支持自动复制！请手动复制。");
		}
	} else alert("貌似并没有什么可以复制的东西。");
}