<template>
	<view class="mall-index">
		<u-tabs
			:list="tab"
			lineWidth="20"
			lineHeight="7"
			:activeStyle="{
				color: '#303133',
				fontWeight: 'bold'
			}"
			:inactiveStyle="{
				color: '#606266'
			}"
			itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
		></u-tabs>
		<view class="photo"><u-swiper :list="photos" indicator indicatorMode="line" circular></u-swiper></view>
		<u-sticky><u-search placeholder="请输入要查找的商品" v-model="keyword" :showAction="false" height="40"></u-search></u-sticky>
		<u-notice-bar :text="noticeBarText"></u-notice-bar>
		<u-scroll-list>
			<view class="scroll-list" style="flex-direction: row;">
				<view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index" :class="[index === 9 && 'scroll-list__goods-item--no-margin-right']">
					<image class="scroll-list__goods-item__image" :src="item.thumb"></image>
					<text class="scroll-list__goods-item__text" style="margin-left: 10px;">{{ item.name }}</text>
				</view>
			</view>
		</u-scroll-list>
		<view class="recommend" style="height: 440rpx;background-color: #f7f8f7;border-radius: 20px;">
			<view>
				<u-grid :border="false" col="4">
					<u-grid-item v-for="(listItem, listIndex) in recommendedList" :key="listIndex">
						<text class="grid-text">{{ listItem.title }}</text>
						<image :src="listItem.img" style="width: 150rpx;height: 150rpx;"></image>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<view class="commodities-main" style="display: flex;flex-wrap: wrap;">
			<!-- 商品列表 -->
			<view
				v-for="(item, index) in 20"
				:key="index"
				class="commodities"
				style="background-color: #e6e4d8;margin-top: 15px;padding-left: 15rpx;padding-right: 15rpx;border-top-left-radius: 10px;
			border-top-right-radius: 10px;width: 330rpx;margin-left: 6px;"
			>
				<image
					src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1732799885/O1CN01mnHB0Q2MtNrT59OwI_!!1732799885.jpg_580x580Q90.jpg_.webp"
					style="height: 360rpx;width: 330rpx;margin-top: 10px;border-top-left-radius: 10px;
			border-top-right-radius: 10px;"
				></image>
				<view class="u-line-1" style="font-weight: 600;"><text>Sony/索尼 A6400L16-50镜头 a6000微单反高清Vlog数码照相机A6100</text></view>
				<view class="" style="display: flex;">
					<view class="" style="display: flex;">
						<view class="" style="color: #ff0000;font-weight: 600;font-size: 20px;">
							<text>￥</text>
							<text>999</text>
						</view>
						<view class="" style="text-decoration: line-through;color: #8c8f8d;margin-left: 10px;margin-top: 3px;"><text>9999</text></view>
					</view>
					<view style="margin-left: 40px;"><u-icon name="shopping-cart" color="#ff5500" size="30"></u-icon></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { login } from '@/common/api/login.js';
import { setToken, removeToken } from '@/utils/token.js';
export default {
	data() {
		return {
			recommendedList: [
				{
					id: 1,
					img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2213026174672/O1CN01xHisdS1kNpB3NZsXc_!!2213026174672-0-scmitem1000.jpg_580x580Q90.jpg_.webp',
					title: '电子推荐'
				},
				{
					id: 2,
					img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1773095659/O1CN01zF2tqf1rfs5hvciUJ_!!0-item_pic.jpg_580x580Q90.jpg_.webp',
					title: '排行榜'
				},
				{
					id: 3,
					img: 'https://gw.alicdn.com/bao/uploaded/i1/2023486475/O1CN01nr6qrl1xhb6QULbMO_!!0-item_pic.jpg_300x300q90.jpg_.webp',
					title: '每日特价'
				},
				{
					id: 4,
					img: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/92688455/O1CN019LQfcg2CKRUWFNnsw_!!92688455.jpg_580x580Q90.jpg_.webp',
					title: '新品首发'
				},
				{
					id: 5,
					img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1714128138/O1CN011UNEOH29zFwLV8gzs_!!0-item_pic.jpg_580x580Q90.jpg_.webp',
					title: '史低特惠'
				},
				{
					id: 6,
					img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/6000000005938/O1CN012becmd1tjeaxmCtfY_!!6000000005938-0-picassoopen.jpg_580x580Q90.jpg_.webp',
					title: '进口特惠'
				}
			],

			tab: [
				{
					name: '推荐',
					badge: {
						isDot: true
					}
				},
				{
					name: '宠物'
				},
				{
					name: '二手拍拍'
				},
				{
					name: '音乐'
				},
				{
					name: '图书'
				},
				{
					name: '奢侈品'
				},
				{
					name: '手机'
				},
				{
					name: '运动'
				}
			],
			indicator: true,
			list: [
				{
					name: '充值中心',
					thumb: 'https://cdn.uviewui.com/uview/menu/8.png'
				},
				{
					name: '天猫购物',
					thumb: 'https://cdn.uviewui.com/uview/menu/11.png'
				},
				{
					name: '海鲜市场',
					thumb: 'https://cdn.uviewui.com/uview/menu/4.png'
				},
				{
					name: '大众点评',
					thumb: 'https://cdn.uviewui.com/uview/menu/7.png'
				},
				{
					name: '会员中心',
					thumb: 'https://cdn.uviewui.com/uview/menu/6.png'
				},
				{
					name: '天猫国际',
					thumb: 'https://cdn.uviewui.com/uview/menu/17.png'
				}
			],
			noticeBarText: '此商城仅为学习开发使用，如有bug请提交至Kamisola2020@163.com,感谢使用！！！',
			photos: [
				'https://img.alicdn.com/imgextra/i3/6000000001767/O1CN01bhatde1OvKbVoG4yV_!!6000000001767-0-octopus.jpg',
				'https://img.alicdn.com/imgextra/i3/6000000005682/O1CN01JcsUaP1rqPCe6tkKn_!!6000000005682-2-octopus.png',
				'https://img.alicdn.com/imgextra/i3/6000000006472/O1CN01azCL9h1xgE5uwaVRZ_!!6000000006472-2-octopus.png',
				'https://img.alicdn.com/imgextra/i3/6000000002280/O1CN01RR4L1s1SiHmcYknGP_!!6000000002280-0-octopus.jpg'
			],
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
			removeToken('token');
			login(this.userInfo).then(res => {
				console.log(res);
				setToken('token', res.data.data.token);
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

<style lang="scss">
.scroll-list {
	@include flex(column);

	&__goods-item {
		margin-right: 20px;

		&__image {
			width: 70px;
			height: 60px;
			border-radius: 4px;
		}

		&__text {
			color: #7f7b87;
			text-align: center;
			font-size: 12px;
			margin-top: 5px;
		}
	}
}
.grid-text {
	font-size: 14px;
	color: #d66b64;
	padding: 20rpx 0 10rpx 0rpx;
	/* #ifndef APP-PLUS */
	box-sizing: border-box;
	/* #endif */
}
</style>
