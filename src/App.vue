<template>
  <div id="app" style="margin-top: 20px;">
  	<transition  name="component-fade" mode="out-in">
      	<router-view ></router-view>
    </transition>
  	<bottom-nav  v-show="$route.meta.navShow"></bottom-nav>
  </div>
</template>

<script>
import bottomNav from '@/components/funUnit/bottomNav.vue'
import {setCookie,getCookie,delCookie} from './assets/js/cookie.js'
export default {
	data(){
		return{
			status:true,
		}
	},
  	name: 'App',
  	components: {
  		bottomNav
	},
	mounted(){
		document.addEventListener('plusready',function(){},false);
	}
}
</script>

<style scoped>
#app {
  	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-align: center;
  	color: #2c3e50;
}
.component-fade-enter-active, .component-fade-leave-active {
  	transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active 在低于 2.1.8 版本中 */ {
  	opacity: 0;
}
</style>
