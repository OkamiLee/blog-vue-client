<template>
	<section>
		<detail-header :detailData = 'detailData'></detail-header>
		<form class="writeFrom">
			<div class="writeItem">
				<label class="writeLabel" >文章标题</label>
				<input type="text" placeholder="必填" v-model="title" :style={width:textWidth} />
			</div>
			<div class="writeItem">
				<label class="writeLabel">文章内容</label>
				<textarea v-model="content" placeholder="必填" :style={width:textWidth} id="text"></textarea>
			</div>
			<div class="writeItem clearfix" style="text-align: justify;">
				<mu-raised-button class="demo-raised-button fl" label="上传图片" icon="publish" primary @click="photo" />
				<mu-checkbox v-if="check" label="是否原创" class="demo-checkbox fr" uncheckIcon="favorite_border" checkedIcon="favorite"/>
			</div>
			<div class="writeItem upload_box clearfix">
				<img v-for="key in imgsrc" :src=key  class="fl" />
			</div>
			<mu-raised-button @click="upload" label="提交" class="write_btn demo-raised-button" primary/>
		</form>
	</section>
</template>

<script>
	import detailHeader from '@/components/funUnit/detailHeader.vue'
	export default {
		data(){
			return{
				title:"",
				content:"",
				check:true,//原创复选框是否显示   日记默认不显示，博客显示
				imgsrc:[],//选中图片路径数组  “本地路径”
				uploadImgArr:[],//需要上传图片的base64码数组，可单张，可多张
				detailData:{userimg:require("../assets/img/userimg1.jpeg"),auther:'Lee',share:false}
			}
		},
		components:{
			detailHeader
		},
		methods:{
			photo(){
				var self= this;
				if(this.imgsrc.length>=9){
					plus.nativeUI.toast('超出图片上限');
				}else{
					plus.nativeUI.actionSheet({cancel:"取消",buttons:[  
	                    {title:"拍照"},  
	                    {title:"从相册中选择"}  
	                ]}, function(e){//1 是拍照  2 从相册中选择  
	                    switch(e.index){  
	                        case 1:self.camera();break;  
	                        case 2:self.gallery();break;  
	                    }  
	                });
				}
			},
			camera(){
				var self = this;
				var cmr = plus.camera.getCamera();
				cmr.captureImage(function(p){
					plus.io.resolveLocalFileSystemURL(p, function(entry){
      				self.imgsrc.push(entry.toLocalURL())//生成图片并预览
					self.getBase(entry.toLocalURL())
					});
				},function(e){
					console.log(e.message)
				},{filename:'_doc/camera/',index:1});
			},
			gallery(){
				var self = this;
				plus.gallery.pick( function(e){
			    	for(var i in e.files){
			    		self.imgsrc.push(e.files[i]);
			    		self.getBase(e.files[i])
			    	}
			    }, function ( e ) {
			    	console.log( "取消选择图片" );
			    },{filter:"image",maximum:9,multiple:true,system:false,onmaxed:function(){
			    	plus.nativeUI.alert('最多只能选择5张图片');
		       	}});
			},
			getBase(path){
				var self = this;
				var base64 = null;
				var img = new Image();
	            img.src = path;// 传过来的图片路径在这里用。  
	            img.onload = function(){
	                var w = img.width,  
	                    h = img.height,  
	                    scale = w / h;  
	                w = 480 || w; //480  你想压缩到多大，改这里  
	                h = w / scale;  
	                var canvas = document.createElement('canvas');  
	                var ctx = canvas.getContext('2d');  
	                $(canvas).attr({  
	                    width: w,  
	                    height: h  
	                });  
	                ctx.drawImage(img, 0, 0, w, h);  
	                base64 = canvas.toDataURL('image/jpeg', 1 || 1); //1最清晰，越低越模糊。
                	self.uploadImgArr.push(base64)
	            }
			},
			upload(base){
				var self = this;
				if(this.title==""){
					plus.nativeUI.toast('文章标题不能为空');
					return false;
				} 
				if(this.content==""){
					plus.nativeUI.toast('文章内容不能为空');
					return false;
				}
				var wat = plus.nativeUI.showWaiting( "上传中..." );
				$.ajax({
					url:'http://192.168.0.102:7000/upload'
					,type:'POST'
					,data:{base:self.uploadImgArr,title:self.title,content:self.content,check:true}
					,success:function(data){
						wat.close();
						console.log(JSON.stringify(data));
					}
					,error:function(err){
						console.log(JSON.stringify(err));
					}
				})
				
			}
		},
		monuted(){
			this.check = this.$route.query.blog;
			document.addEventListener('plusready',function(){},false);
		},
		computed:{
			textWidth(){
				return document.documentElement.clientWidth*0.9-130+'px';
			}
		}
	} 
</script>

<style scoped>
	.writeFrom{width: 90%;border-radius: 10px; background: #2c353c; margin:20px auto; border: 2px solid #4a5159;padding: 10px; box-sizing: border-box;}
	.writeLabel,.writeItem input{display: inline-block;font-size: 14px; color: #85a1b7;line-height: 30px; vertical-align: middle;}
	.writeLabel{width: 80px; }
	.writeItem input{ border:none;  border-bottom: 2px solid #647888; background: transparent;}
	.writeItem{margin-bottom: 15px;}
	.writeItem textarea{display: inline-block;font-size: 14px;color: #85a1b7;vertical-align: middle;border:none;  border-bottom: 2px solid #647888; background: transparent; resize:none; min-height: 100px;}
	.upload_box{min-height:60px;} 
	.upload_box img{width: 60px;height: 60px;margin-right: 5px; margin-bottom: 5px;}
	.writeRadio{display: inline-block; vertical-align: middle;}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>