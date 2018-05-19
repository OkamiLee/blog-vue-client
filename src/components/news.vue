<template>
	<section >
		<headertop></headertop>
		<newsList></newsList>
	</section>
</template>

<script>
	import newsList from '@/components/funUnit/newsList.vue'
	import headertop from '@/components/funUnit/header.vue'
	export default{
		data(){
			return {
				txt:this.$store.state.author
			}
		},
		components: {
		    newsList,
		    headertop
		}
	}
</script>

<style>
</style>