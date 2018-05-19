<template>
	<section >
		<headertop></headertop>
		<!--<banner></banner>-->
		<list></list>
	</section>
</template>

<script>
	import list from '@/components/funUnit/list.vue'
	import headertop from '@/components/funUnit/header.vue'
	export default {
		components: {
		    list,
		    headertop
		}
		,mounted(){
			/*document.addEventListener('plusready',function(){
				var cid = plus.push.getClientInfo().clientid;
				plus.push.addEventListener( "receive", function ( msg ) {
					plus.push.createMessage( msg.content ,"LocalMSG",{sound:"none"}); 
				}, false ); 
				$.ajax({
					url:'/api/cid',
					data:{cid:cid},
					type:"post",
					success:function(data){
						alert(data.status);
					}
				})
			},false)*/
			
		}
	}
</script>

<style >
</style>