var TIME, min_dot = ":", second_dot = ":",
	hour, min, second,
	dotFlashing = true;

function flashing() {
	if(dotFlashing) {
		var currentTime = new Date();
		if(currentTime.getMinutes() != min)
			min_dot = " ";
		else min_dot = ":";
		if(currentTime.getSeconds() != second)
			second_dot = " ";
		else second_dot = ":";
	} else min_dot = second_dot = ":";
}

function getTime() {
	flashing();
	var currentTime = new Date();
	//flashing(currentTime);
	hour = currentTime.getHours()<10 ? '0'+currentTime.getHours() : currentTime.getHours();
	min = currentTime.getMinutes()<10 ? '0'+currentTime.getMinutes() : currentTime.getMinutes();
	second = currentTime.getSeconds()<10 ? '0'+currentTime.getSeconds() : currentTime.getSeconds();
	TIME = hour + min_dot + min + second_dot + second;
	document.getElementById("outputTime").innerHTML = TIME;
}