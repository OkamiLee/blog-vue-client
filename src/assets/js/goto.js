function goTo(render,obj,type){
	obj.$router.push(render)
	
	/*if(window.plus){
		//obj.$store.mutations.newAuthor('author','asd');
		if(type===1){
			var vw = plus.webview.create('http://'+window.location.host+render.path,render.path,{},{item:render.query});
		}else{
			var vw = plus.webview.create('http://'+window.location.host+render,render);
		}
		var showWaiting = plus.nativeUI.showWaiting();
    	vw.addEventListener('loaded',function(){
			showWaiting.close();
			if(type===1){
				vw.show(render.path,'pop-in',plus.os.ios?300:700);
			}
			else{
				vw.show(render,'pop-in',plus.os.ios?300:700);
			}
		},false);
	}else{
		obj.$router.push(render)
	}*/
}
export {goTo}
