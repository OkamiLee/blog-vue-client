<template>
<div class="demo-infinite-container" id="loadMore_box">
  	<mu-list>
	    <template v-for="item in list">
			<div class="news_list clearfix" @click="toList(item)">
				<img :src=item.userimg class="news_user_img fl" />
				<div class="news_content fl" :style="{width:newsContent}" >
					<div class="news_name_time clearfix">
						<h1 class="fl">{{item.auther}}</h1>
						<span class="fr">{{item.time}}</span>
					</div>
					<div class="news_text">
						{{item.content}}
					</div>
					<div class="news_img_box" v-for="i in item.imgSrc">
						<img @click="previerImg(item.imgSrc)" :style="{width:newsImg,height:newsImg}" :src="i"  />					
					</div>
				</div>
			</div>
	    </template>
  	</mu-list>
  	<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>

<script>
	import $ from 'jquery'
	import {goTo} from '../../assets/js/goto.js'
export default {
  	data () {
	    const list = [];
	    for (let i = 0; i < 5; i++) {
	      	list.push({userimg:require("../../assets/img/userimg2.jpg"),imgSrc:[require('../../assets/img/userimg1.jpeg'),require('../../assets/img/userimg1.jpeg'),require('../../assets/img/userimg1.jpeg'),require('../../assets/img/userimg1.jpeg')],auther:"Lee",title:"python入门指南",content:"Python 是一门非常容易上手的语言，通过查阅资料和教程，也许一晚上就能写出一个简单的爬虫。",time:"35分钟前",parent:"news"})
	    }
	    return {
	      	list,
	      	num: 10,
	      	loading: false,
	      	scroller: null
	    }
  	},
  	mounted () {
  		function plusReady(){
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener("plusready",plusReady,false);
		}
	    this.scroller = this.$el;
	    $('#loadMore_box').css('min-height',document.documentElement.clientHeight-300)
  	},
  	methods: {
	    loadMore () {
	      	this.loading = true;
	      	setTimeout(() => {
		        for (let i = this.num; i < this.num + 5; i++) {
		          	this.list.push({userimg:require("../../assets/img/userimg2.jpg"),imgSrc:[require('../../assets/img/userimg1.jpeg'),require('../../assets/img/userimg1.jpeg'),require('../../assets/img/userimg1.jpeg'),require('../../assets/img/userimg1.jpeg')],auther:"Lee",title:"python入门指南",content:"Python 是一门非常容易上手的语言，通过查阅资料和教程，也许一晚上就能写出一个简单的爬虫。",time:"35分钟前"})
		        }
	        	this.num += 5
	        	this.loading = false
	      	}, 5000)
	    },
	    previerImg(obj){
	    	if(window.plus){
	    		plus.nativeUI.previewImage([
					"http://img3.duitang.com/uploads/item/201604/01/20160401215443_tYJne.jpeg",
					"http://img3.duitang.com/uploads/item/201604/01/20160401215443_tYJne.jpeg",
					"http://img3.duitang.com/uploads/item/201604/01/20160401215443_tYJne.jpeg",
					"http://img3.duitang.com/uploads/item/201604/01/20160401215443_tYJne.jpeg"
				]);
	    	}
	    },
    	toList(item){
    		goTo({path:'/homeDetail',query:item},this,1);
    	}
  	},
  	computed:{
  		newsContent(){//右侧详情宽度计算
  			return document.documentElement.clientWidth-60+'px';
  		},
  		newsImg(){//右侧图片列表宽度计算
  			return (document.documentElement.clientWidth-85)/3+'px';
  		}
  	}
}
</script>

<style lang="css">

</style>