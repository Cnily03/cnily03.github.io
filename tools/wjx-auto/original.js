var a = 'A',A = 'A',b = 'B',B = 'B',c = 'C',C = 'C',d = 'D',D = 'D',e = 'E',E = 'E',f = 'F',F = 'F',g = 'G',G = 'G';

function name(name) {
	document.getElementsByClassName("inputtext")[0].value = name;
}

function text(num, text) {
	document.getElementsByName("q" + String(num + 1))[0].value = text;
}

function check(num, option) {
	var f_num = num + 1,
		f_option = String.fromCharCode(option.toUpperCase().charCodeAt() - 16);
	var questions = document.getElementsByClassName("jqRadio");
	var f_mark = "q" + f_num + "_" + f_option;
	document.getElementById(f_mark).checked = true;
	for (var i = 0; i < questions.length; i++) {
		if (questions[i]["rel"] == f_mark)
			questions[i].className = "jqRadio jqChecked";
	}
}

function _go(display) {
	if (display == 0) {
		document.getElementById("submit_button").click();
		return;
	}
	var original_date = new Date();
	var date = new Date(original_date.getTime() - 1000 * (display-0.58));
	var y = date.getYear() + 1900;
	var mon = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var min = date.getMinutes();
	min = min < 10 ? "0" + String(min) : min;
	var s = date.getSeconds();
	s = s < 10 ? "0" + String(s) : s;
	starttime = y + '/' + mon + "/" + d + " " + h + ":" + min + ":" + s;
	document.getElementById("submit_button").click();
}
name("王锦文");
check(1, A);
check(2, B);
check(3, D);
text(4, 'To stay');
text(5, 'especially');
text(6, 'but');
text(7, 'what');
text(8, 'eating');
text(9, 'will become');
text(10, 'knows');
text(11, 'at');
text(12, 'importance');
text(13, 'energetic');
check(14, D);
check(15, B);
check(16, B);
check(17, A);
check(18, D);
check(19, B);
check(20, C);
check(21, A);
check(22, D);
check(23, B);
check(24, A);
check(25, C);
check(26, B);
check(27, D);
check(28, B);
check(29, C);
check(30, D);
check(31, C);
check(32, A);
check(33, B);
text(34, 'confident');
text(35, 'on');
text(36, 'disappointed');
text(37, 'Actually');
text(38, 'it');
text(39, 'which');
text(40, 'appearance');
text(41, 'have gained');
text(42, 'Facing');
text(43, 'that');
_go(520);