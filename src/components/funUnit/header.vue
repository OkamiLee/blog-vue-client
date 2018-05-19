<template>
	<header class="header mui-bar  mui-bar-transparent" data-top='0' data-offset='100' data-duration='16' data-scrollby=".mui-scroll-wrapper">
		<img @click="offshow = !offshow" src="../../assets/img/logo1.png" class="logo"  />
		<em class="search_icon mui-icon mui-icon-search" @click="searchTop"></em>
		<form class="top_search_box">
			<span class="search_top_icon mui-icon mui-icon-search" @click="searchGo"></span>
			<input type="search" placeholder="search" id="search" />
			<span class="search_close_icon mui-icon mui-icon-closeempty" @click="close"></span>
		</form>
		<transition name="fade">
			<ul class="offcanvas" v-if="offshow">
				<li class="offList" @click="writeblog">写博客</li>
				<li class="offList" @click="writeblog(false)">写日记</li>
			</ul>
		</transition>
	</header>
	
</template>

<script>
	import {goTo} from '../../assets/js/goto'
	export default{
		data(){
			return{
				offshow:false
			}
		},
		create(){
			document.addEventListener('plusready',function(){
			},false)
		},
		mounted(){
			var self = this;
		},
		methods:{
			searchTop(){
				$('.top_search_box').animate({top:0},800);
			},
			close(){
				$('.top_search_box').animate({top:-100},800);
			},
			searchGo(){
				$('.top_search_box').animate({top:-100},800);
			},
			writeblog(bool){
				goTo({path:'/writeblog',query:{blog:bool}},this)
			}
		}
	}
</script>

<style>
	.offcanvas{width: 35%;height: 100px;background:#7e57c2;position: absolute;top:46px}
	.offList{ border-bottom: 2px solid #9491ac;line-height: 40px; text-align:center; color: #fff;}
	
	
	
	.fade-enter-active, .fade-leave-active {
	  	transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  	opacity: 0;
	}
</style>