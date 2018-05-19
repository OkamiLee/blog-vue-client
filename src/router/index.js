import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import news from '@/components/news'
import main from '@/components/main'
import friend from '@/components/friend'
import login from '@/components/login'
import homeDetail from '@/components/secondLev/homeDetail'
import writeblog from '@/components/writeblog'
import msgList from '@/components/msgList'
import register from '@/components/register'
import store from '../vuex/store.js'
import {setCookie,getCookie,delCookie} from '../assets/js/cookie.js'
Vue.use(Router)

const router =  new Router({
  	routes: [
	    {
	      	path: '/',
	      	name: 'home',
	      	component: home,
	      	meta: { navShow: true}
	    },
	    {
	      	path: '/main',
	      	name: 'main',
	      	component: main,
	      	meta: { navShow: true,requireAuth: true}
	    },
	    {
	     	path: '/news',
	      /*meta: {
	        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	      },*/
	      	name: 'news',
	      	component: news,
	      	meta: { navShow: true}
	    },
	    {
	    	path: '/friend',
	      	name: 'friend',
	      	component: friend,
	      	meta: { navShow: true}
	    },
	    {
	    	path: '/login',
	      	name: 'login',
	      	component: login,
	      	meta: { navShow: false}
	    },
	    {
	      	path: '/homeDetail',
	      	name: 'homeDetail',
	      	component: homeDetail,
	      	meta: { navShow: false}
	    },
	    {
	      	path: '/writeblog',
	      	name: 'writeblog',
	      	component: writeblog,
	      	meta: { navShow: false}
	    },
	    {
	      	path: '/msgList',
	      	name: 'msgList',
	      	component: msgList,
	      	meta: { navShow: false}
	    },
	    {
	      	path: '/register',
	      	name: 'register',
	      	component: register,
	      	meta: { navShow: false}
	    }
  	]
  
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.loginStatus||getCookie('user')) {//用户是否登录状态
            next();
        }
        else {
        	next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router