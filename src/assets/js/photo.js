function test(){
	var a = [{
        title: "拍照"
    }, {
        title: "从手机相册选择"
    }];
    plus.nativeUI.actionSheet({
        title: "修改用户头像",
        cancel: "取消",
        buttons: a
    }, function(b) { /*actionSheet 按钮点击事件*/
        switch (b.index) {
            case 0:
                break;
            case 1:
                getImage(); /*拍照*/
                break;
            case 2:
                galleryImg();/*打开相册*/
                break;
            default:
                break;
        }
    })
}
function getImage() {
    var c = plus.camera.getCamera();
    c.captureImage(function(e) {
    	console.log(e)
        plus.io.resolveLocalFileSystemURL(e, function(entry) {
           // var s = entry.toLocalURL() + "?version=" + new Date().getTime();
           // uploadHead(s); /*上传图片*/
        }, function(e) {
            console.log("读取拍照文件错误：" + e.message);
        });
    }, function(s) {
        console.log("error" + s);
    }, {
        filename: "_doc/img"
    })
}
function uploadHead(imgPath) {
    alert(imgPath)
    var image = new Image();
    image.src = imgPath;
    var imgData = getBase64Image(image);
    $.ajax({
    	url:"/api/fileUploadAjax.do",
    	data:{data:imgData},
    	success:function(data){
    		alert("上传成功")
    	}
    })
}
        //将图片压缩转成base64
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    var width = img.width;
    var height = img.height;
    // calculate the width and height, constraining the proportions
    if (width > height) {
        if (width > 100) {
            height = Math.round(height *= 100 / width);
            width = 100;
        }
    } else {
        if (height > 100) {
            width = Math.round(width *= 100 / height);
            height = 100;
        }
    }
    canvas.width = width;   /*设置新的图片的宽度*/
    canvas.height = height; /*设置新的图片的长度*/
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height); /*绘图*/
    var dataURL = canvas.toDataURL("image/png", 0.8);
    return dataURL.replace("data:image/png;base64,", "");
} 
export {test}
