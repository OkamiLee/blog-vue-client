<template>
	<header class="back_header">
		<span class="back_icon" @click="back"></span>
		<div class="back_info">
			<img :src="detailData.userimg"  class="back_user_img" />
			<span>{{detailData.auther}}</span>
		</div>
		<em class="back_share" v-show="detailData.share" @click="share"></em>
	</header>
</template>

<script>
	import {shareHref} from '../../assets/js/share.js'
	export default{
		props:['detailData'],
		data(){
			return{
				data:{}
			}
		},
		methods:{
			share(){
				shareHref(this.detailData);
			},
			back(){
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped>
	.back_header{height: 44px; border-bottom: 1px solid #7b8d98;position: relative;}
	.back_icon{width: 30px;height: 30px;position: absolute; left: 15px; top: 7px; background: url(../../assets/img/left.png); background-size:100% 100% ;}
	.back_share{width: 24px;height: 24px;position: absolute; right: 15px; top: 10px; background: url(../../assets/img/fx.png); background-size:100% 100% ;}
	.back_info{margin-left: 60px;padding: 7px 0; text-align: left;}
	.back_user_img{display: inline-block; vertical-align: middle; width: 24px;height: 24px; border-radius: 50%;margin:0 15px;}
	.back_info span{display: inline-block; vertical-align: middle; color: #9491ac;line-height: 30px;}
</style>