<template>
	<section class="main_box" >
		<div class="main_top">
			<img :src=url class="main_img" />
			<div class="main_info_box">
				<div class="clearfix">
					<img :style="{width:imgHeight,height:imgHeight}" :src=url class="main_info_img fl" />
					<div class="main_info_share fr" :style="{width:infoHeight,lineHeight:imgHeight,height:imgHeight}">
						<span>分享主页</span>
						<span><em class="mui-icon mui-icon-personadd"></em></span>
						<!--<span><em class="mui-icon mui-icon-more"></em></span>-->
					</div>
				</div>
				<h1 class="main_name">玖零</h1>
				<p class="main_num"><span>极客号：</span>17045685649</p>
				<div class="main_lable">
					<div class="clearfix person_info">
						<p class="clearfix" :style="{background:colorArr[0]}"><em class="sex_icon"></em><span>18岁</span></p>
						<p class="clearfix" :style="{background:colorArr[1]}"><span>黑龙江.哈尔滨</span></p>
						<p class="clearfix" :style="{background:colorArr[2]}"><span>天蝎座</span></p>
					</div>
				</div>
				<ul class="person_honor">
					<li>关注 25</li>
					<li>粉丝 14W</li>
					<li>浏览量 26W</li>
				</ul>
			</div>
		</div>
		<ul class="dynamic_listy">
<!--			<li  class="clearfix"><em class="gz_icon"></em><span>我的关注</span><i></i></li>
-->			<li class="clearfix"><em class="rj_icon"></em><span>我的日记</span><i></i></li>
			<li class="clearfix"><em class="bk_icon"></em><span>我的博客</span><i></i></li>
			<li class="clearfix" @click="goMsg"><em class="xx_icon"></em><span>我的消息</span><i></i></li>
			<li class="clearfix"><em class="sz_icon"></em><span>设置</span><i></i></li>
		</ul>
	</section>
</template>

<script>
	import {goTo} from '../assets/js/goto.js'
	export default{
		data(){
			return{
				url:require('../assets/img/personImg.jpg'),
				colorArr:['#02aeff','#ea2f86','#4c3fc3']
			}
		},
		components: {
		},
		mounted(){
			document.addEventListener('plusready',function(){},false);
		},
		computed:{
			mainHeight(){
				return  document.documentElement.clientHeight-50+'px';
			},
			infoHeight(){
				if(document.documentElement.clientWidth*0.25<100){
					return document.documentElement.clientWidth-125+'px';
				}else{
					return document.documentElement.clientWidth*0.75-25+'px';
				}
			},
			imgHeight(){
				return document.documentElement.clientWidth*0.25+'px';
			}
		},
		methods:{
			goMsg(){
				goTo({path:"/msgList"},this);
			}
		}
	}
</script>

<style scoped>
	.main_top{position: relative;padding-bottom: 20px;}
	.main_img{width: 100%;height:265px;-webkit-filter: blur(50px);filter: blur(50px);}
	.main_info_box{position: absolute; top: 30px; left: 0;width: 100%; height: 100%;}
	.main_info_img{margin-left: 25px;min-width: 90px; min-height: 90px; border-radius: 50%; border:2px solid #4a5159;}
	.main_info_share span{padding: 10px;margin-right: 5px; border-radius: 5px; background: #2f363c; color: #b9b9bb;}
	.main_name,.main_num{ color: #fff; text-align: left;padding: 0 25px;}
	.main_name{margin: 15px 0 5px; font-size: 16px;}
	.main_lable{padding: 0 25px;  box-sizing: border-box;margin-top:15px ;}
	.main_signature{ border-top:1px solid #4d4d4d;padding: 15px 0; color: #b4b3b3; text-align: left;}
	.person_info p{ padding: 0 12px; border-radius: 15px; color: #fff;float: left;margin-right: 10px;}
	.sex_icon{width: 14px;height: 14px;margin-right: 5px;display: inline-block;vertical-align: middle; background: url(../assets/img/man.png); background-size:100% 100%;}
	.person_info span{ font-size: 14px;line-height: 30px;vertical-align: middle;}
	.person_honor{width:100%;padding-left: 25px;margin-top: 15px; text-align: left;}
	.person_honor li{display: inline-block; vertical-align: middle;padding: 3px 10px; color: #fff;}
	.dynamic_listy li{ box-sizing: border-box;padding-left: 15px; border-radius: 5px;line-height: 36px; box-shadow: 1px 2px 2px rgab(0,0,0,.8); text-align: left; font-size: 15px;margin-bottom: 10px; color: #fff;background: #282a2c;}
	.dynamic_listy{padding: 0 10px;margin-top: 15px;}
	.dynamic_listy em{ background-size: 100% 100%;margin-top: 6px;}
	@media only screen and (min-width: 100px) and (max-width: 375px) {
		.person_info span{font-size: 13px;}
		.person_info p{ padding: 0 8px;border-radius: 12px;line-height: 24px;}
	}
</style>