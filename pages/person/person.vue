<template>
	<view class="person">
		<view><text>当前未登录,请去登录 （以下仅做测试，主要是做个人主页太麻烦了。。。）</text></view>
		<view style=" width: 100px;"><u-button @click="toLogin()" color="linear-gradient(to right, rgb(101, 197, 216), rgb(210, 111, 213))" text="前去登录"></u-button></view>
		<view v-if="isLogin"><text>登录成功</text></view>
	</view>
</template>

<script>
import { login, virifyLogin } from '@/common/api/login.js';
import { setToken, removeToken } from '@/utils/token.js';
export default {
	data() {
		return {
			isLogin: false,
			userInfo: {
				username: '',
				password: ''
			}
		};
	},
	methods: {
		//登录api调用
		login() {
			removeToken('token');
			login(this.userInfo).then(res => {
				console.log(res);
				setToken('token', res.data.data.token);
			});
		},
		//登录界面
		toLogin() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		//验证登录状态
		virifyLoginStatus() {
			virifyLogin()
				.then(res => {
					console.log(res);
					if (res.data.code === 200) {
						this.isLogin = true;
					}
				})
				.catch(err => {
					Error(err);
				});
		}
	},
	onReady() {
		this.virifyLoginStatus();
	}
};
</script>

<style></style>
