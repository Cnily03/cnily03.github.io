var HOST = window.document.location.href.substring(0, window.document.location.href.indexOf(window.document.location.pathname));

function deviceJump(how, goWhereUrl=HOST) {
	var system = {
		win: false,
		mac: false,
		xll: false
	};
	//检测平台
	var plat = navigator.platform;
	system.win = plat.indexOf("Win") == 0;
	system.mac = plat.indexOf("Mac") == 0;
	system.x11 = (plat == "X11") || (plat.indexOf("Linux") == 0);
	//跳转
	if (how == "Wap->PC") {
		if (system.win || system.mac || system.xll) {
			window.location.href = goWhereUrl; //PC
		}
	} else if (how == "PC->Wap") {
		if (!(system.win || system.mac || system.xll)) {
			window.location.href = goWhereUrl; //Wap
		}
	}
}