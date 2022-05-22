<template>
	<view class="mall-index">
		<view class="photo"><u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper></view>
		<u-sticky><u-search placeholder="请输入要查找的商品" v-model="keyword" :showAction="false" height="40"></u-search></u-sticky>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
		<u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			photos: ['https://cdn.uviewui.com/uview/swiper/swiper3.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper1.png'],
			token: '',
			keyword: '请输入要查找的商品',
			title: 'Hello',
			id: 1,
			//测试登录数据
			userInfo: {
				username: '',
				password: ''
			}
		};
	},
	onLoad() {},
	methods: {
		//输入控制
		inputChange1(e) {
			this.userInfo.username = e.detail.value;
		},
		inputChange2(e) {
			this.userInfo.password = e.detail.value;
		},
		//测试
		test() {
			uni.request({
				url: 'http://192.168.31.174:8080/user/login',
				method: 'POST',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				data: this.userInfo,
				success: res => {
					console.log(res);
				}
			});
		},
		test2() {
			this.$request
				.post('/user/login', {
					username: this.userInfo.username,
					password: this.userInfo.password
				})
				.then(res => {
					console.log(res);
					uni.setStorageSync('token', res.data.data.token);
				});
		},
		clear() {
			uni.removeStorageSync('token');
		},
		toDetail() {
			uni.navigateTo({
				url: '/pages/detail/commodityDetail?id=' + this.id
			});
		},
		getToken() {
			this.token = uni.getStorageSync('token');
		}
	},
	onPullDownRefresh() {
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 500);
	}
};
</script>

<style></style>
