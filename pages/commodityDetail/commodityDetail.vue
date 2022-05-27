<template>
	<view class="commodityDetail">
		<view class="swiper" style="margin-top: 60rpx;">
			<u-swiper height="500" :list="list6" @change="e => (currentNum = e.current)" :autoplay="false" indicatorStyle="right: 20px">
				<view slot="indicator" class="indicator-num">
					<text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
				</view>
			</u-swiper>
		</view>
		<view class="shop-price" style="background-color: #ffffff;height: 60px;display: flex;">
			<view class="prive" style="margin-top: 10px;width: 250px;margin-left: 15px;">
				<text style="color: red;font-size: 20px;">￥</text>
				<text style="color: red;font-weight: 600;font-size: 25px;">39999999.00</text>
			</view>
			<view class="img1" style="margin-left: 40rpx;">
				<image src="/static/unselected/Foreigncurrency.png" style="height: 35px;width: 35px;margin-left: 7px;"></image>
				<view><text style="font-size: 10px;color:darkgray;">降价提醒</text></view>
			</view>
			<view class="img2" style="margin-left: 30rpx;">
				<image src="/static/unselected/goumaipianhao.png" style="height: 35px;width: 35px;"></image>
				<view><text style="font-size: 10px;margin-left: 8px;color:darkgray;">收藏</text></view>
			</view>
		</view>
		<!-- 商品名称 -->
		<view class="commodities-name" style="background-color: #ffffff;height: 60px;border-bottom-left-radius: 12px;border-bottom-right-radius: 12px;">
			<text style="font-size: 18px;font-weight: 700;">日本柴犬幼犬纯种豆柴活体宠物狗家养犬黑白赤柴秋田血统CKU犬舍</text>
		</view>
		<!-- 活动 -->
		<view class="avtivity" style="background-color: #ffffff;height: 50px;margin-top: 20px;display: flex;border-top-left-radius: 12px;border-top-right-radius: 12px;">
			<view class="activity-title" style="margin-top: 15px;"><text style="font-size: 15px;font-weight: 700;">活动</text></view>
			<view class="activity-detail" style="display: flex;margin-left: 15px;margin-top: 13px;width: 300px;">
				<view style="width: 60px;"><u-tag text="首单专享" type="error" plain plainFill size="mini"></u-tag></view>
				<text style="margin-left: 15px;font-size: 13px;margin-top: 3px;">新人专属优惠,一单就回本</text>
			</view>
		</view>
		<!-- 底部栏 -->
		<view class="bottom-tabbar">
			<u-tabbar :value="value6" @change="name => (value6 = name)" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
				<u-tabbar-item text="店铺" icon="home"></u-tabbar-item>
				<u-tabbar-item text="客服" icon="server-man"></u-tabbar-item>
				<u-tabbar-item text="购物车" icon="shopping-cart"></u-tabbar-item>
				<u-button type="primary" shape="circle" text="加入购物车" color="#f0e21e"></u-button>
				<u-button type="primary" shape="circle" text="按钮形状" color="#ec3f0a"></u-button>
			</u-tabbar>
		</view>
	</view>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			value6: 0,
			currentNum: 0,
			list6: [
				'https://gd3.alicdn.com/imgextra/i3/2911145777/O1CN015VJWDP1sXuod9bPQD_!!2911145777.jpg',
				'https://gd1.alicdn.com/imgextra/i1/2911145777/O1CN01UBLYwu1sXuohYK10S_!!2911145777.png',
				'https://gd4.alicdn.com/imgextra/i2/2911145777/O1CN01oChFKR1sXupWqi0qj_!!2911145777-0-picasso.jpg'
			]
		};
	},
	methods: {
		click1(e) {
			console.log('click1', e);
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f4f4f4;
}
.indicator {
	@include flex(row);
	justify-content: center;

	&__dot {
		height: 6px;
		width: 6px;
		border-radius: 100px;
		background-color: rgba(255, 255, 255, 0.35);
		margin: 0 5px;
		transition: background-color 0.3s;

		&--active {
			background-color: #ffffff;
		}
	}
}

.indicator-num {
	padding: 2px 0;
	background-color: rgba(0, 0, 0, 0.35);
	border-radius: 100px;
	width: 35px;
	@include flex;
	justify-content: center;

	&__text {
		color: #ffffff;
		font-size: 12px;
	}
}
</style>
