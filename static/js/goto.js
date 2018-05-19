function goTo(render,obj){
	if(window.plus){
		if(render=='/'){
			render = '';
		}
		var cur = plus.webview.currentWebview();
		var reg = /[^/]*$/;
		var vw = plus.webview.create('http:'+cur.getURL().replace(reg,render),render);
		var showWaiting = plus.nativeUI.showWaiting();
    	vw.addEventListener('loaded',function(){
			showWaiting.close();
			vw.show(render,'pop-in',plus.os.ios?300:700);
		},false);
	}else{
		obj.$router.push(render);
	}
}
export {goTo}
