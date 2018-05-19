<template>
	<section >
		<header-top></header-top>
		<div style="padding-top: 20px;padding-bottom: 50px;">
			<h1 class="dynam_title">我关注的</h1>
			<ul class="dynam_list">
				<li>
					<span class="dynam_icon mui-icon mui-icon-closeempty"></span>
					<img src="../assets/img/userimg1.jpeg" class="dynam_img"/>
					<h1></h1>
					<div class="dynam_info">
						<div class="clearfix dynam_person_info">
							<p class="clearfix" :style="{background:colorArr[0]}"><em class="sex_icon"></em><span>18岁</span></p>
							<p class="clearfix" :style="{background:colorArr[1]}"><span>黑龙江.哈尔滨</span></p>
							<p class="clearfix" :style="{background:colorArr[2]}"><span>天蝎座</span></p>
						</div>
					</div>
					<div class="dynam_label">
						<span>HTML5</span>
						<span>Node</span>
						<span>Vue</span>
						<span>JavaScript</span>
						<span>weex</span>
						<span>jQuery</span>
					</div>
					<p class="clearfix dynam_sixin"><em class="sixin_icon"></em><span>发送私信</span></p>
				</li>
				<li>
					<span class="dynam_icon mui-icon mui-icon-closeempty"></span>
					<img src="../assets/img/userimg1.jpeg" class="dynam_img"/>
					<h1></h1>
					<div class="dynam_info">
						<div class="clearfix dynam_person_info">
							<p class="clearfix" :style="{background:colorArr[0]}"><em class="sex_icon"></em><span>18岁</span></p>
							<p class="clearfix" :style="{background:colorArr[1]}"><span>黑龙江.哈尔滨</span></p>
							<p class="clearfix" :style="{background:colorArr[2]}"><span>天蝎座</span></p>
						</div>
					</div>
					<div class="dynam_label">
						<span>HTML5</span>
						<span>Node</span>
						<span>Vue</span>
						<span>JavaScript</span>
						<span>weex</span>
						<span>jQuery</span>
					</div>
					<p class="clearfix dynam_sixin"><em class="sixin_icon"></em><span>发送私信</span></p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	import headerTop from '@/components/funUnit/header.vue'
	export default{
		data(){
			return{
				url:require('../assets/img/personImg.jpg'),
				colorArr:['#02aeff','#ea2f86','#4c3fc3']
			}
		},
		components: {
		    headerTop
		}
	}
</script>

<style>
	.dynam_title{width:90%;margin:0 auto;padding: 10px; box-sizing: border-box; border-left:2px solid #5940b5; font-size: 16px; color: #fff; text-align: left;}
	.dynam_list{ width:90%; margin: 20px auto 0;}
	.dynam_list li{ border:2px solid #333a40;position: relative;margin-bottom: 15px; border-top: 5px solid #5940b5; border-radius: 5px; background: #262d33;}
	.dynam_img{width: 120px;height: 120px; margin: 25px auto 0; border: 2px solid #4a5159; border-radius: 50%;}
	.dynam_person_info p{ padding: 0 12px; border-radius: 15px; color: #fff;margin-right: 10px;display: inline-block; vertical-align: middle;}
	.dynam_person_info span{ font-size: 14px;line-height: 30px;vertical-align: middle;}
	.dynam_person_info{margin-top: 15px; text-align: center;}
	.sex_icon{width: 14px;height: 14px;margin-right: 5px;display: inline-block;vertical-align: middle; background: url(../assets/img/man.png); background-size:100% 100%;}
	.dynam_label span{display: inline-block;margin-bottom: 5px; color: #fff; vertical-align: middle;padding: 5px 10px; border-radius: 3px; background:#393e42 ;}
	.dynam_label{text-align: left;padding: 15px;} 
	.dynam_icon{color: #758384;position: absolute; right: 10px;top: 8px;}
	.dynam_sixin{ border-top: 2px solid #333a40; text-align: center;}
	.sixin_icon{display: inline-block;vertical-align: middle; width: 18px;height: 18px;margin-right: 10px; background: url(../assets/img/email.png); background-size:100% 100%;}
	.dynam_sixin span{display: inline-block;vertical-align: middle; line-height: 36px; color:#a6afb6;}
	@media only screen and (min-width: 100px) and (max-width: 375px) {
		.dynam_person_info span{font-size: 13px;}
		.dynam_person_info p{ padding: 0 8px;border-radius: 12px;line-height: 24px;}
	}
</style>