function addJS(jsURL) {
	var newScript = document.createElement('script');
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('src', jsURL);
	document.getElementsByTagName('head')[0].appendChild(newScript);
}

//--------------------------------------------------------------------
/*addJS("/tools/public/libraries/sleep.js");

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