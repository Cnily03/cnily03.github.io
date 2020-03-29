function addJS(jsURL) {
	var newScript = document.createElement('script');
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('src', jsURL);
	document.getElementsByTagName('head')[0].appendChild(newScript);
}