import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Lee',
    bottomStatus:true,//底部导航是否展示  一级路由全部显示，二级路由部分显示
    loginStatus:false,//用户登录状态  方便登陆拦截
    userId:""//用户唯一id
  },
  mutations:{
  	newAuthor(state,msg){
  		state.author = msg;
  	},
  	newDetail(state,msg){
  		state.bottomStatus = msg;
  	},
  	newuserId(state,msg){
  		state.userId = msg;
  	}
  }
})

export default store