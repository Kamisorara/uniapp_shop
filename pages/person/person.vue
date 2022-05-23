<template>
	<view class="person">
		<u--input placeholder="请输入账号" border="surround" v-model="userInfo.username"></u--input>
		<u--input placeholder="请输入密码" border="surround" v-model="userInfo.password"></u--input>
		<u-button type="primary"  text="登录" @click="login()"></u-button>
	</view>
</template>

<script>
import { login } from '@/common/api/login.js';
import { setToken, removeToken } from '@/utils/token.js';
export default {
	data() {
		return {
			userInfo: {
				username: '',
				password: ''
			}
		};
	},
	methods: {
		login() {
			removeToken('token');
			login(this.userInfo).then(res => {
				console.log(res);
				setToken('token', res.data.data.token);
			});
		}
	}
};
</script>

<style></style>
