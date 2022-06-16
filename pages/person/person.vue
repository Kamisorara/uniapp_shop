<template>
	<view class="person">
		<!-- 最顶层（登录状态） -->
		<view
			v-if="isLogin"
			class="person-head"
			style="margin-top: 10px;height: 160px;background-color: #FFFFFF;border-radius: 15px;margin-left: 8px;margin-right: 8px;box-shadow: 00 5rpx #e2e2e2;"
		>
			<view class="person-head-part1" style="display: flex;">
				<view class="person-head" style="margin-top: 20rpx;margin-left: 20rpx;"><u-avatar :src="src" size="80"></u-avatar></view>
				<view style="margin-top: 50rpx;margin-left: 20rpx;width: 440rpx;">
					<text style="font-size: 15px;">账号名:</text>
					<text style="margin-left: 5px;">Kamisora</text>
					<view style="margin-top: 10px;font-size: 15px;">
						<text>关注</text>
						<text style="margin-left: 3px;">0</text>
						<text style="margin-left: 10px;margin-right: 10px;">|</text>
						<text>粉丝</text>
						<text style="margin-left: 3px;">0</text>
					</view>
				</view>
				<view style="margin-top: 10px;"><u-icon name="setting-fill" color="#bbc0bc" size="28"></u-icon></view>
			</view>
			<u-grid :border="false">
				<u-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
					<u-icon :customStyle="{ paddingTop: 20 + 'rpx' }" :name="baseListItem.name" :size="22"></u-icon>
					<text class="grid-text">{{ baseListItem.title }}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 最顶层（未登录状态） -->
		<view
			@click="toLogin()"
			v-if="!isLogin"
			class="person-head"
			style="margin-top: 10px;;height: 100px;background-color: #FFFFFF;border-radius: 15px;margin-left: 8px;margin-right: 8px;box-shadow: 00 5rpx #e2e2e2;"
		>
			<view class="person-head-part1" style="display: flex;">
				<view class="person-head" style="margin-top: 20rpx;margin-left: 20rpx;"><u-avatar src="#" size="80"></u-avatar></view>
				<view style="margin-top: 70rpx;margin-left: 100rpx;"><text style="font-size: 18px;color:darkgray">未登录,请点击登录</text></view>
			</view>
		</view>
		<!-- 收发货状态栏 -->
		<view v-show="isLogin" style="height: 105px;background-color: #FFFFFF;margin-top: 15px;border-radius: 15px;margin-left: 8px;margin-right: 8px;box-shadow: 00 5rpx #e2e2e2;">
			<view class="person-basic" style="display: flex;">
				<view style="margin-top: 10px;width: 600rpx;margin-left: 10px;"><text style="font-weight: 700;">我的订单</text></view>
				<view style="margin-top: 10px;"><text style="color: darkgray;font-size: 15px;">全部 ></text></view>
			</view>
			<view style="margin-top: 6px;">
				<u-grid :border="false" col="5">
					<u-grid-item v-for="(order, index) in orderForm" :key="index">
						<u-badge type="error" max="99" :value="100"></u-badge>
						<u-icon :name="order.name" :size="22"></u-icon>
						<text class="grid-text">{{ order.title }}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<!-- 收发货状态栏 (未登录)-->
		<view
			v-show="!isLogin"
			style="height: 105px;background-color: #FFFFFF;margin-top: 15px;border-radius: 15px;margin-left: 8px;margin-right: 8px;box-shadow: 00 5rpx #e2e2e2;"
		>
			<view class="person-basic" style="display: flex;">
				<view style="margin-top: 10px;width: 600rpx;margin-left: 10px;"><text style="font-weight: 700;">我的订单</text></view>
				<view style="margin-top: 10px;"><text style="color: darkgray;font-size: 15px;">全部 ></text></view>
			</view>
			<view style="margin-top: 18px;">
				<u-grid :border="false" col="5">
					<u-grid-item v-for="(order, index) in orderForm" :key="index">
						<u-icon :name="order.name" :size="22"></u-icon>
						<text class="grid-text">{{ order.title }}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
	</view>
</template>

<script>
import { virifyLogin } from '@/common/api/login.js';
import { setToken, removeToken } from '@/utils/token.js';
export default {
	data() {
		return {
			//是否登录
			isLogin: false,
			//用户头像
			src: 'https://img1.baidu.com/it/u=1597559309,913966834&fm=253&fmt=auto&app=138&f=JPEG?w=748&h=500',
			//顶部内容
			baseList: [
				{
					name: 'star',
					title: '收藏'
				},
				{
					name: 'bookmark-fill',
					title: '店铺关注'
				},
				{
					name: 'clock',
					title: '历史浏览'
				}
			],
			//我的订单
			orderForm: [
				{
					name: 'hourglass-half-fill',
					title: '待付款'
				},
				{
					name: 'calendar-fill',
					title: '待发货'
				},
				{
					name: 'car-fill',
					title: '待收货'
				},
				{
					name: 'chat',
					title: '待评价'
				},
				{
					name: 'red-packet',
					title: '退货/售后'
				}
			]
		};
	},
	methods: {
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
	},
	onShow() {
		this.virifyLoginStatus();
	}
};
</script>

<style lang="scss">
page {
	background-color: #f4f4f4;
}
.grid-text {
	font-size: 14px;
	color: #909399;
	padding: 10rpx 0 20rpx 0rpx;
	/* #ifndef APP-PLUS */
	box-sizing: border-box;
	/* #endif */
}
</style>
