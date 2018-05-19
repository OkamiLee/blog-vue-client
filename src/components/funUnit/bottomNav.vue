<template>
  	<mu-paper class="footer_box">
    	<mu-bottom-nav :value="bottomNav" shift @change="handleChange">
	      	<mu-bottom-nav-item to="/" value="首页" title="首页" icon="home"/>
	      	<mu-bottom-nav-item to="/news" value="动态" title="动态" icon="widgets"/>
	      	<mu-bottom-nav-item to="/friend" value="关注" title="关注" icon="add"/>
	      	<mu-bottom-nav-item to="/main" value="我的" title="我的" icon="person"/>
    	</mu-bottom-nav>
  	</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: '首页',
      bottomNavColor: '首页'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>