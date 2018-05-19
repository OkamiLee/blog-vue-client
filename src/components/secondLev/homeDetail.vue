<template>
	<section :style="{minHeight:boxHeight}"  >
		<detail-header :detailData = "detailData"></detail-header>
		<div class="detail_box">
			<h1 class="detail_title">{{detailData.title}}</h1>
			<p class="detail_label_box clearfix">
				<span class="detail_label fl">原创</span>
				<span class=" fl">{{detailData.auther}}</span>
				<span class="fr jgz_btn" :style="guanzhu" @click="gzHander">{{gzText}}</span>
				<span class="fr">
					<em class="dz_icon":style="dianzan" @click="dzHander" ></em>
					<em class="dz_num">12</em>
				</span>
			</p>
			<p class="detail_content">{{detailData.content}}</p>
			<img v-if="detailData.parent==='home'" v-for="key in detailData.imgs" :src="key" class="detail_img" />
			<div v-if="detailData.parent==='news'" class="detail_img_box clearfix" >
				<img @click="previerImg(key)" v-for="key in detailData.imgSrc" :src="key" :style="{width:imgWidth}" />
			</div>
		</div>
		<div class="eval_box" style="margin-bottom:60px">
			<h1 class="eval_title clearfix"><span>全部评价</span><p :style="{width:borderHeight}"></p></h1>
			<ul class="eval_list" >
				<li v-for="key in evalList" >
					<div class="clearfix">
						<img :src="key.userImg" class="eval_img fl" />
						<div class="fl">
							<h5 class="eval_name">{{key.userName}}</h5>
							<span class="eval_time">{{key.time}}</span>
						</div>
					</div>
					<p class="eval_content">{{key.content}}</p>
					<div class="eval_dz">
						<span><em class="eval_up"></em><i>0</i></span>
						<span><em class="eval_down"></em><i>0</i></span>
						<span><em class="eval_pl"></em><i>0</i></span>
					</div>
				</li>
			</ul>
		</div>
		<div class="detail_bottom">
			<input type="text" class="detail_inp" placeholder="写评论" />
			<input type="button" value="发送" class="detailBtn" />
		</div>
	</section>
</template>

<script>
	import detailHeader from '@/components/funUnit/detailHeader.vue'
	export default{
		data(){
			return{
				detailData:{},
				dianzan:{backgroundImage:"url(" + require("../../assets/img/dz.png") + ")"},
				guanzhu:{background:" #9491ac", color:'#ebfbfa'},
				gzText:"加关注",
				evalList:[
					{userName:"Corey_Max",userImg:require("../../assets/img/mricon.png"),time:"2018-04-20 15:21:19",content:"讲的很具体，很好"},
					{userName:"Corey_Max",userImg:require("../../assets/img/mricon.png"),time:"2018-04-20 15:21:19",content:"讲的很具体，很好"}
				]
			}
		},
		components:{
			detailHeader
		}
		,mounted(){
			this.detailData = this.$route.query;
			
		},
		computed:{
			boxHeight(){
				return  document.documentElement.clientHeight+'px';
			},
			borderHeight(){
				return document.documentElement.clientWidth*0.92-70+'px';
			},
			imgWidth(){
				return (document.documentElement.clientWidth*0.92-40)/3+'px';
			}
		},
		methods:{
			dzHander(){
	    		this.dianzan = {backgroundImage:"url(" + require("../../assets/img/dz1.png") + ")"}
	    	},
	    	gzHander(){
	    		this.guanzhu = {background:" #ebfbfa", color:'#9491ac',border: "2px solid #9491ac"}
	    		this.gzText = "已关注";
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
		    }
		}
	}
</script>

<style scoped>
	.detail_box{width: 92%;border-radius: 10px;background: #283036; box-shadow: 1px 2px 2px rgba(0,0,0,0.5); margin: 10px auto 0;padding: 10px; box-sizing: border-box; border: 2px solid #2f363c;}
	.detail_title{color: #ebfbfa;line-height: 36px; font-size: 18px;}
	.detail_label_box span{margin-top: 4px; display: inline-block; vertical-align: middle; color: #9491ac;}
	.detail_label{ border: 1px solid #9491ac;padding:0 10px;margin-right: 10px;}
	.detail_label_box{margin:10px 0 20px;}
	.detail_content{ color: #aebac3;}
	.detail_img{margin: 15px auto 10px; width: 100%; }
	.detail_bottom{border-top: 1px solid #7b8d98;padding: 0 15px; position: fixed; bottom: 0px;height: 50px;width: 100%; background: #282a2c;}
	.detail_bottom em,.detail_bottom span,.detail_bottom input{display: inline-block; vertical-align: middle; border: none;}
	.detail_label_box em{display: inline-block; vertical-align: middle;}
	.detail_inp{padding-left:10px ;width:75%;height: 32px; margin: 9px 0; border-radius: 15px;}
	.jgz_btn{padding: 0 10px;border-radius:5px;box-sizing: border-box; border: 2px solid #9491ac;}
	.dz_icon{width: 20px;height: 20px;background: url(../../assets/img/dz.png); background-size: 100% 100%;margin-left: 5px;}
	.dz_num{ color: #7b8d98;margin-right: 10px;}
	.eval_box{width: 92%; margin: 20px auto;}
	.eval_title span{color:#ebfbfa;padding: 0 5px; border-bottom: 1px solid #5940b5;float: left;line-height: 30px;width: 70px;}
	.eval_title p{border-bottom: 1px solid #7b8d98;float: left;height: 31px;}
	.eval_list{margin-top: 20px;padding-left: 5px;}
	.eval_img{width: 30px;height: 30px;margin-right:15px;}
	.eval_name{ color: #9491ac;}
	.eval_time{ color: #68686e;}
	.eval_content{margin-left: 45px; color: #aebac3;margin-top:10px;padding-bottom: 5px; }
	.eval_list li{margin-bottom: 15px;}
	.eval_up{ background: url(../../assets/img/eval_dz.png);}
	.eval_down{ background: url(../../assets/img/eval_cai.png);}
	.eval_pl{ background: url(../../assets/img/eval_pl.png);}
	.eval_dz em{display: inline-block;margin-right: 5px; vertical-align: middle;width: 16px;height: 16px;background-size:100% 100%;}
	.eval_dz span{ color: #aebac3;display: inline-block;vertical-align: middle;margin-right: 5px;}
	.eval_dz{ text-align: right;padding-right: 20px;}
	.eval_dz i{display: inline-block;vertical-align: middle;}
	.detailBtn{margin-left: 15px; background: #5940b5; border: none; color: #ebfbfa;}
	.detail_img_box img{float: left;margin-right: 5px;margin-bottom: 5px;}
	.detail_img_box{margin-top: 10px;}
</style>