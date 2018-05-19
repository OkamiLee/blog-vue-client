<template>
	<swiper :options="swiperOption"  ref="mySwiper" id="swiper-container">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide v-for="item in items" :key="item.id"> 
            <img  :src="item.url" class="index_img">
        </swiper-slide>  
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper> 
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        name:'index',
        components: {  
            swiper,  
            swiperSlide  
        },  
        data() {  
            return {
                items:[
                	{url:require('../assets/img/banner3.jpg'),id:1},
                	{url:require('../assets/img/banner2.jpg'),id:2},
                	{url:require('../assets/img/banner1.jpg'),id:3}
                ],
                swiperOption: {  
                	notNextTick:true,
                    pagination:{
                    	el:'.swiper-pagination',
                    	clickable:true
                    },
                    slidesPerView: 'auto', 
                   /* autoplay: {
		                disableOnInteraction: false,
		                time:4000
		            },*/
		            loop:true,
                    centeredSlides: true,  
                    paginationClickable: true,
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    },  
                }, 
            }  
        },  
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //alert($('.index_img').height())
        }  
    }
</script>

<style >
    .index_img{width:100%;}
    #swiper-container,.swiper-container{margin-top: 44px;}
</style>