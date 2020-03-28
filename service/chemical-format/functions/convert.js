var origin_char = ["-1-", "-2-", "-3-", "***", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-"];
var end_char = ["－", "＝", "≡", "⋯", "～", "₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₊", "₋"];
var chemical_text, name_text, end_chemical_text;
var keepHistory, scrollText;

function scrollDown(ele) {
	ele.scrollTop = ele.scrollHeight;
}

function removeBlank(ele) {
	ele = ele.replace(/ /g,"");
	ele = ele.replace(/\t/g,"");
	return ele;
}

function getVar() {
	scrollText = document.getElementById('output');

	var tmp_chemical_text = document.getElementById('unconvert_chemical');
	chemical_text = tmp_chemical_text.value = removeBlank(tmp_chemical_text.value);
	var tmp_name_text = document.getElementById('unconvert_name');
	name_text = tmp_name_text.value = removeBlank(tmp_name_text.value);
	end_chemical_text = chemical_text;

	keepHistory = document.getElementById('keepHistory');
	output = document.getElementById('output');
}

function convert() { //end_chemical_text spawn
	if (!chemical_text)
		end_chemical_text = "C55H70MgN4O";
	for (var i = 0; i < origin_char.length; i++) {
		while ((end_chemical_text.indexOf(origin_char[i])) + 1 > 0)
			end_chemical_text = end_chemical_text.replace(origin_char[i], end_char[i]);
	}
}

function convertChemical() {
	getVar();
	if (name_text && !chemical_text) //学名填了，化学式为空
		alert("请输入 " + name_text + " 的化学式！");
	else {
		convert();
		if (keepHistory.checked) {
			output.value += (output.value ? "\n" : "") + end_chemical_text;
			scrollDown(scrollText);
		} else
			output.value = end_chemical_text;
	}
}

function convertAll() {
	getVar();
	convert();
	flag = false;
	if (chemical_text && name_text) //都填了
		flag = true;
	else if (!chemical_text && !name_text) //都为空
		name_text = "叶绿素", flag = true;
	else if (chemical_text && !name_text) //化学式填了，学名为空
		alert("请输入 " + end_chemical_text + " 的学名！");
	else if (name_text && !chemical_text) //学名填了，化学式为空
		alert("请输入 " + name_text + " 的化学式！");
	if (flag) {
		if (keepHistory.checked) {
			output.value += (output.value ? "\n" : "") + end_chemical_text + "[" + name_text + "]";
			scrollDown(scrollText);
		} else
			output.value = end_chemical_text + "[" + name_text + "]";
	}
}