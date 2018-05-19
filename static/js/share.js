function updateSerivces() {
	plus.share.getServices(function(s) {
		shares = {};
		for (var i in s) {
			var t = s[i];
			shares[t.id] = t;
		}
	 	console.log("获取分享服务列表成功");
	}, function(e) {
		console.log("获取分享服务列表失败：" + e.message);
		});
	}
	/**
	 * 分享操作
	 */
function shareAction(id, ex) {
	console.log('id = ' + id);
	console.log('ex = ' + ex);
	console.log('shares[id]' + shares[id]);
	var s = null;
	if (!id || !(s = shares[id])) {
		mui.toast("无效的分享服务！");
		return;
	}
	if (s.authenticated) {
		console.log("---已授权---");
		shareMessage(s, ex);
	} else {
		console.log("---未授权---");
		s.authorize(function() {
			shareMessage(s, ex);
		}, function(e) {
			mui.toast("认证授权失败");
		});
	}
}
function shareMessage(s, ex) {
	var msg = {
			content: '问题详情',
			href: plus.webview.currentWebview().getURL(),
			title: '问题详情' ,				
			thumbs: ["http://img3.3lian.com/2013/v10/4/87.jpg"],
			pictures: ["http://img3.3lian.com/2013/v10/4/87.jpg"],
			extra: {
				scene: ex
			}
		};
	s.send(msg, function() {
		plus.nativeUI.toast( "分享成功");
	}, function(e) {
		plus.nativeUI.toast( "分享失败");
	});
	
}
function shareHref() {
	var ids = [{
			id: "weixin", 
			ex: "WXSceneSession"  /*微信好友*/
		}, {
			id: "weixin",
			ex: "WXSceneTimeline" /*微信朋友圈*/
		},{ 
            id: "qq"   /*QQ好友*/ 
        }],
		bts = [{
			title: "发送给微信好友"
		}, {
			title: "分享到微信朋友圈"
		}, {
			title: "分享到QQ"
		}];
	plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: bts
		},
		function(e) {
			var i = e.index;
			console.log('i = ' + i);
			if (i > 0) {
				shareAction(ids[i - 1].id, ids[i - 1].ex);
			}
		}
	);
}		
var Intent = null,
File = null,
Uri = null,
main = null;
var shares = null;
var shareImageUrl = '';
document.addEventListener('plusready',function(){
	updateSerivces();
	if (plus.os.name == "Android") {
		Intent = plus.android.importClass("android.content.Intent");
		File = plus.android.importClass("java.io.File");
		Uri = plus.android.importClass("android.net.Uri");
		main = plus.android.runtimeMainActivity();
	}
},false)


