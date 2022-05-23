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
				<view class="scroll-list__goods-item" v-for="(item, index) in classification" :key="index" :class="[index === 9 && 'scroll-list__goods-item--no-margin-right']">
					<image class="scroll-list__goods-item__image" :src="item.picture"></image>
					<text class="scroll-list__goods-item__text" style="margin-left: 10px;">{{ item.title }}</text>
				</view>
			</view>
		</u-scroll-list>
		<view class="recommend" style="height: 440rpx;background-color: #f7f8f7;border-radius: 20px;">
			<view>
				<u-grid :border="false" col="4">
					<u-grid-item v-for="(listItem, listIndex) in recommendedList" :key="listIndex">
						<text class="grid-text">{{ listItem.title }}</text>
						<image :src="listItem.picture" style="width: 150rpx;height: 150rpx;"></image>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<view class="commodities-main" style="display: flex;flex-wrap: wrap;">
			<!-- 商品列表 -->
			<view
				v-for="(commodity, index) in commoditiesList"
				:key="index"
				class="commodities"
				style="background-color: #e6e4d8;margin-top: 15px;padding-left: 15rpx;padding-right: 15rpx;border-top-left-radius: 10px;
			border-top-right-radius: 10px;width: 330rpx;margin-left: 6px;"
			>
				<image
					:src="commodity.mainPhoto"
					style="height: 360rpx;width: 330rpx;margin-top: 10px;border-top-left-radius: 10px;
			border-top-right-radius: 10px;"
				></image>
				<view class="u-line-1" style="font-weight: 600;">
					<text>{{ commodity.shopName }}</text>
				</view>
				<view class="" style="display: flex;">
					<view class="" style="display: flex;">
						<view class="" style="color: #ff0000;font-weight: 600;font-size: 20px;">
							<text>￥</text>
							<text>{{ commodity.price }}</text>
						</view>
						<view class="" style="text-decoration: line-through;color: #8c8f8d;margin-left: 10px;margin-top: 3px;">
							<text>{{ commodity.originalPrice }}</text>
						</view>
					</view>
					<view><u-icon name="shopping-cart" color="#ff5500" size="30"></u-icon></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { setToken, removeToken } from '@/utils/token.js';
import { getClassification, getRecommended, getAllCommodities } from '@/common/api/index/shopIndex.js';
export default {
	data() {
		return {
			recommendedList: [
				{
					id: 1,
					picture: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2213026174672/O1CN01xHisdS1kNpB3NZsXc_!!2213026174672-0-scmitem1000.jpg_580x580Q90.jpg_.webp',
					title: '电子推荐'
				}
			],
			commoditiesList: [
				{
					id: 1,
					mainPhoto: '',
					originalPrice: 199,
					price: 99,
					shopName: '测试'
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
			classification: [
				{
					title: '充值中心',
					picture: 'https://cdn.uviewui.com/uview/menu/8.png'
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
			id: 1
		};
	},
	onLoad() {},
	onReady() {
		this.getClassifications();
		this.getCommodities();
		this.getRecommendeds();
	},
	methods: {
		//获取分类详情
		getClassifications() {
			getClassification().then(res => {
				console.log(res);
				this.classification = res.data.data;
			});
		},

		//获取推荐详情
		getRecommendeds() {
			getRecommended().then(res => {
				console.log(res);
				this.recommendedList = res.data.data;
			});
		},

		//获取首页商品列表
		getCommodities() {
			getAllCommodities().then(res => {
				console.log(res);
				this.commoditiesList = res.data.data;
			});
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
