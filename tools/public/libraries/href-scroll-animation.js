//Please put this js at the end of the html, or onloaded.
function putJQ() {
	try {
		$().css;
	} catch (err) {
		addJS("/lib/third_parties/javascripts/jquery-3.4.1.min.js");
		document.getElementsByTagName('head')[0].appendChild('<script type="text/javascript" src="/lib/third_parties/javascripts/jquery-3.4.1.min.js"></script>');
	}
}
putJQ();
$("a").bind("click touch",function(){
	//根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
	$('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)},500);
});