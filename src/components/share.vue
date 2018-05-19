<template>
	<header class="mui-bar mui-bar-nav mui-bar-transparent">
		<span class="back_icon">
			<em class="mui-icon mui-icon-back"></em>
		</span>
		<h1 class="mui-title">分享</h1>
		<span class="share_icon" @click="shareAll"></span>
	</header>
</template>
<script>
	export default {
		methods:{
		  	shareAll(){
		  		shareHref()
		  	}
	  	}
	}
</script>
<style>
</style>