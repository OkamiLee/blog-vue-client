<template>
	<div class="demo-infinite-container" id="loadMore_box">
		<mu-list>
		    <template v-for="item in list">
				<div class="card_box" @click="toList(item)">
					<div class="card_header clearfix">
						<img :src=item.userimg />
						<div class="card_user_name">
							<span>{{item.auther }}</span>
							<span class="crad_time">{{item.time}}</span>
						</div>
					</div>
					<div class="card_content">
						<h1 class="card_title" v-html="item.title"></h1>
						<div class="card_text" v-html="item.content"></div>
						<img :src= item.topimg />
					</div>
					<ul class="card_bottom_fun">
						<li class="clearfix">
							<em :style="dianzan" class="dz_icon" @click="dzHander"></em>
							<span>12</span>
						</li>
						<li class="clearfix">
							<em class="fx_icon" @click="share(item)"></em>
							<span>12</span>
						</li>
						<li class="clearfix">
							<em class="ll_icon"></em>
							<span>12</span>
						</li>
						<li class="clearfix">
							<em class="pl_icon"></em>
							<span>12</span>
						</li>
					</ul>
				</div>
		    </template>
		</mu-list>
	  	<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
	</div>
</template>

<script>
	import {shareHref} from '../../assets/js/share'
	import {goTo} from '../../assets/js/goto'
	export default {
	  	data () {
		    return {
		      	list:[],
		      	num: 10,
		      	pageNum:0,//加载的页数
		      	loading: false,//控制底部加载动画是否显示
		      	scroller: null,
		      	pull:true,//是否加载到底部
		      	dianzan:{backgroundImage:"url(" + require("../../assets/img/dz.png") + ")"}
		    }
	  	},
	  	mounted () {
		  	document.addEventListener('plusready',function(){},false);
		    this.scroller = this.$el;
		    var self = this;
		    $('#loadMore_box').css('min-height',document.documentElement.clientHeight-300);
		    $.ajax({
		    	type:"post",
		    	url:"/api/news",
		    	data:{size:10,num:self.pageNum},
		    	success:function(data){
		    		if(data.code==200){
		    			self.list = data.data;
		    			self.pageNum ++; 
		    		}
		    	}
		    });
	  	},
	  	methods: {
		    loadMore () {
		    	var self = this;
		    	if(self.pull){
			      	this.loading = true;
			      	$.ajax({
				    	type:"post",
				    	url:"/api/news",
				    	data:{size:10,num:self.pageNum},
				    	success:function(data){
				    		if(data.code==200){
				    			setTimeout(function(){
				    				for(var i in data.data){
				    					self.list.push(data.data[i]);
				    				}
				    				self.loading = false;
				    			},1500)
				    			
				    			if(!data.status){
				    				self.pull = false;
				    			}
				    			self.pageNum ++; 
				    			
				    		}
				    	}
				    });
		    	}else{
		    		self.loading = false;
		    	}
	    	},
	    	share(obj){
	    		if(window.plus){
	    			shareHref({title:obj.title,content:obj.content,imgsrc:obj.imgSrc})
	    		}else{
	    			return;
	    		}
	    	},
	    	dzHander(){
	    		this.dianzan = {backgroundImage:"url(" + require("../../assets/img/dz1.png") + ")"}
	    	},
	    	toList(item){
	    		item.parent = 'home';//公用详情页 添加父级路由名称 
	    		goTo({path:'/homeDetail',query:item},this,1);
	    	}
	    	
	  	}
	}
</script>

<style lang="css">
.demo-infinite-container{
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin-top:5px;
  margin-bottom: 50px;
}
.card_box{width: 95%;margin: 0 auto 10px; border: 2px solid #2f363c; border-radius: 5px; box-shadow:  0 1px 1px rgba(0,0,0,0.4); background: #283036;}
.card_img{width:80%; margin: 0 auto;}
.card_header{width:100%;padding: 10px; box-sizing: border-box; background: #282a2c;}
.card_header img{width: 40px;height: 40px; float: left; border-radius: 8px;}
.card_user_name{ color: #9491ac; margin-left: 15px; float: left;}
.card_user_name span{line-height: 20px;display: block; text-align: left;}
.card_content img{width:160px;height: 120px; margin-top: 10px; border-radius: 2px;}
.card_content{padding: 10px;font-size:14px; text-align: left; box-sizing: border-box; color: #7d7e80;overflow:hidden; text-overflow:ellipsis; -webkit-box-orient:vertical;-webkit-line-clamp:3; }
.card_title{ font-size:15px;margin: 5px 0; line-height: 25px; color: #ebfbfa; text-align: left;overflow:hidden; text-overflow:ellipsis; -webkit-box-orient:vertical;-webkit-line-clamp:2; }
.card_text{color: #aebac3;overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:4; text-indent: 2em; }
.card_text p{line-height: 22px;}
.crad_time{color: #68686e;}
.card_bottom_fun{height: 30px;background: #282a2c;display: flex;display: -webkit-flex;}
.card_bottom_fun li{flex: 1;-webkit-flex: 1; text-align: center;}
.card_bottom_fun em,.card_bottom_fun span{display: inline-block;vertical-align: middle;}
.card_bottom_fun span{line-height: 30px; color: #aebac3;}
.fx_icon{ background: url(../../assets/img/fx.png);}
.pl_icon{ background: url(../../assets/img/pl.png);}
.ll_icon{ background: url(../../assets/img/yd.png);}
.card_bottom_fun em{background-size:100% 100%;width: 16px;height: 16px;}
</style>