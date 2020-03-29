function addJS(jsURL) {
	var newScript = document.createElement('script');
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('src', jsURL);
	document.getElementsByTagName('head')[0].appendChild(newScript);
}

//--------------------------------------------------------------------
/*addJS("/service/.public/libraries/sleep.js");

function putJQ() {
	try {
		$().css;
	} catch (err) {
		addJS("/service/.public/jquery-3.4.1.min.js");
	}
}*/

function dialog(ID) {
	this.obj = document.getElementById(ID);

	this.close = function() {
		this.obj.close();
	}

	this.show = function(chat = false) {
		if (chat)
			this.obj.show();
		else this.obj.showModal();
	};
}