// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Vuex from 'vuex'
import store from './vuex/store'
import VueBus from 'vue-bus'
import axios from 'axios'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
Vue.use(Vuex)
Vue.use(MuseUI)
Vue.use(VueBus)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
Vue.use(vueg, router, {//转场动画
    forwardAnim: 'fadeInRight',
    backAnim: 'fadeOutRight', 
    tabs: [{
        name:'/'
    },{
        name:'/main'
    },{
        name:'/news'
    },{
        name:'/friend'
    }]
})

Vue.config.productionTip = false
require('./assets/css/mui.css')
require('./assets/css/public.css')
require('./assets/js/jquery-1.8.3.min.js')
require('./assets/js/share.js')
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  
})
