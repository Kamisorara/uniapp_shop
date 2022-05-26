<template>
	<view class="commodityDetail">
		<view class="swiper" style="margin-top: 100rpx;">
			<u-swiper height="500" :list="list6" @change="e => (currentNum = e.current)" :autoplay="false" indicatorStyle="right: 20px">
				<view slot="indicator" class="indicator-num">
					<text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
				</view>
			</u-swiper>
		</view>
		<view class="bottom-tabbar">
			<u-tabbar :value="value6" @change="name => (value6 = name)" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
				<u-tabbar-item text="店铺" icon="home"></u-tabbar-item>
				<u-tabbar-item text="客服" icon="server-man"></u-tabbar-item>
				<u-tabbar-item text="购物车" icon="shopping-cart"></u-tabbar-item>
				<u-button type="primary" shape="circle" text="加入购物车" iconColor="#feff9c"></u-button>
				<u-button type="primary" shape="circle" text="按钮形状" iconColor="#feff9c"></u-button>
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
