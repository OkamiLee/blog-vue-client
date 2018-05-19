<template>
	<section class="login_box" :style="{height:logHeight}" >
		<img src="../assets/img/logo1.png" class="login_logo"  />
		<h1 class="login_title">欢迎来到极客</h1>
		<form class="login_form">
			<label class="login_label">Email address:</label>
			<input v-model="userName" placeholder="必填" :style="emialObj" type="text" class="login_input" @blur="backBlur" @focus="backFocus"/>
			<label class="login_label">New password:</label>
			<input v-model="newPass" placeholder="必填" :style="passObj" type="text" class="login_input" @blur="passBlur" @focus="passFocus"/>
			<label class="login_label">Confirm the password:</label>
			<input v-model="conPass" placeholder="必填" :style="confirmObj" type="text" class="login_input" @blur="confirmBlur" @focus="confirmFocus"/>
			<input type="button" class="login_btn" value="登录" @click="reg" />
		</form>
	</section>
</template>

<script>
	import {goTo} from '../assets/js/goto.js'
	export default{
		data(){
			return {
				userName:"",
				newPass:"",
				conPass:"",
				emialObj:{
					background:" #2c353c !important"
				},
				passObj:{
					background:" #2c353c !important"
				},
				confirmObj:{
					background:" #2c353c !important"
				},
				nextPath:""
			}
		},
		mounted(){
			this.nextPath = this.$route.query.redirect;//登录成功后跳转的路由
		},
		computed:{
			logHeight(){
				return  document.documentElement.clientHeight*0.9+'px';
			}
		},
		methods:{
			backFocus(){
				this.emialObj.background = '#454b4f !important'
			},
			backBlur(){
				this.emialObj.background = '#2c353c !important'
			},
			passFocus(){
				this.passObj.background = '#454b4f !important'
			},
			passBlur(){
				this.passObj.background = '#2c353c !important'
			},
			confirmFocus(){
				this.confirmObj.background = '#454b4f !important'
			},
			confirmBlur(){
				if(this.conPass===this.newPass){
					this.confirmObj.background = '#2c353c !important'
				}else{
					plus.nativeUI.toast('两次密码必须一致');
				}
			},
			reg(){
				var self = this;
				var cid = plus.push.getClientInfo().clientid;
				if(self.userName!=""&&self.userName!=""&&self.userName!=""){
					$.ajax({
						type:"post",
						url:"/api/register",
						data:{name:self.userName,newpass:self.newPass,cid:cid},
						success:function(data){
							if(data.code==200){
								plus.nativeUI.toast('注册成功');
								self.$store.state.userId = data.userid;
								this.$router.back(-1)
							}
						},error(err){
							console.log(err)
						}
					});
				}
				else{
					plus.nativeUI.toast('完成表单在提交');
				}
			}
		}
	}
</script>

<style>
	.login_box{width: 90%;position: relative; background: #2c353c; margin: 5% auto; border: 2px solid #4a5159; border-radius: 10px;}
	.login_logo{margin: 30px auto;}
	.login_title{ color: #d4d0ea; text-align: center; font-size: 18px; letter-spacing: 2px;}
	.login_label{display: block; text-align: left; color: #85a1b7; font-size: 15px;}
	.login_form{margin-top: 30px;padding: 0 15px; box-sizing: border-box;}
	.login_input{height: 32px !important;width: 100%; border-radius:0 !important;font-size: 14px;padding: 0 !important;padding-left: 5px !important; color: #fff; border: none !important;  border-bottom: 2px solid #647888 !important;margin:10px 0;}
	.login_btn{position: absolute !important; bottom: 100px;left: 50%;margin-left: -45%; color: #d4d0ea !important; font-size: 16px !important;letter-spacing: 2px; border: 2px solid #4f47ae !important; background-color:#2c353c !important ;width: 90%; line-height:50px;text-align:center;height: 50px; }
	.login_btn:active{background-color:#4f47ae !important ;}
	.login_reg{position: absolute; bottom: 65px;width: 84%;left:50%;margin-left:-42%;}
	.login_reg span{  list-style: amharic; color: #d4d0ea;text-decoration:underline}
</style>