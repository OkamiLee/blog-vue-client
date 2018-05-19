<template>
	<section>
		<header class="back_header">
			<span class="back_icon" @click="back"></span>
			<h1 class="title">我的博客</h1>
		</header>
		<div class="list_box">
			<div class="list_item clearfix" v-for="item in list">
				<img :src="item.imgSrc" class="list_img fl"/>
				<div class="list_info fl" :style="{width:infoWidth}">
					<h2>{{item.title}}</h2>
					<p>{{item.content}}</p>
				</div>
				<mu-icon-menu slot="right" icon="more_vert" tooltip="操作" class="fr list_rgt_btn" >
			        <mu-menu-item title="回复" />
			        <mu-menu-item title="删除" />
		      	</mu-icon-menu>
			</div>
		</div>
	  	
	</section>
</template>

<script>
	export default {
		data(){
			return{
				list:[
					{
						title:"这个周末一起吃饭么?"
						,content:"周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈"
						,name:"Myron Liu -"
						,imgSrc:require("../assets/img/userimg1.jpeg")
					}
					,{
						title:"这个周末一起吃饭么?"
						,content:"周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈"
						,name:"Myron Liu -"
						,imgSrc:require("../assets/img/userimg1.jpeg")
					},{
						title:"这个周末一起吃饭么?"
						,content:"周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈"
						,name:"Myron Liu -"
						,imgSrc:require("../assets/img/userimg1.jpeg")
					}
				]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		computed:{
			infoWidth(){
				return document.documentElement.clientWidth-120+'px';
			}
		}
	}
	
</script>

<style scoped>
	.back_header{height: 44px; border-bottom: 1px solid #7b8d98;position: relative;}
	.back_icon{width: 30px;height: 30px;position: absolute; left: 15px; top: 7px; background: url(../assets/img/left.png); background-size:100% 100% ;}
	.title{ width: 100%; font-size: 15px; line-height: 44px; text-align: center; color: #ebfbfa;}
	.listTetx{background: #283036;border-radius: 5px; color: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.5);}
	.list_box{width: 100%; padding:10px; box-sizing: border-box;}
	.list_img{width: 60px;height: 60px; border-radius: 50%;margin-right: 10px;}
	.list_info h2{ color: #ebfbfa; font-size: 15px;}
	.list_info p{color:#aebac3;font-size: 14px;margin-top: 5px;overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:2; }
	.list_rgt_btn {width: 20px;height: 20px; padding: 0 !important;position: absolute;top: -10px;right: 15px;}
	.list_item{position: relative; box-shadow: 1px 1px 2px rgba(0,0,0,0.4);padding: 10px 5px;margin-bottom: 10px;}
	
	
	
	
</style>