<template>
	<view class="category">
		<view class="nav">
			<scroll-view class="bg" scroll-y="true" :scroll-top="scrollTop" :scroll-with-animation="true">
				<block v-for="(item, index) in shoplist" :key="index">
					<view class="nav-item" :class="{ ac: active == index }" @click="changeNav(index)">{{ item.name }}</view>
				</block>
			</scroll-view>
		</view>
		<view class="goodsBox">
			<u-empty v-if="isNone" mode="car" icon="http://cdn.uviewui.com/uview/empty/car.png"></u-empty>
			<scroll-view scroll-y="true">
				<view class="goods">
					<view class="goods-item" v-for="(item, index) in shoplistDe" :key="index">
						<image :src="item.img" mode=""></image>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
import { getCategory } from '@/common/api/index/shopIndex.js';
export default {
	data() {
		return {
			//是否有数据
			isNone: false,
			active: 0,
			scrollTop: 0,
			height: 0,
			// shoplist是后台返回的数据，一般情况是这种格式，在这里我自定义了一组数据
			shoplist: [
				{
					id: 1,
					name: '零食',
					child: [
						{
							name: '电脑配件',
							img: 'https://gw.alicdn.com/bao/uploaded/i4/774963415/O1CN01Q5Ns4t1b67JoikARi_!!774963415.jpg_300x300q90.jpg_.webp'
						}
					]
				},
				{
					id: 2,
					name: '电子产品',
					child: [
						{
							name: '子香蕉1',
							img: '../../static/person.png'
						}
					]
				},
				{
					id: 3,
					name: '养生用品',
					child: [
						{
							name: '子香蕉1',
							img: '../../static/person.png'
						}
					]
				},
				{
					id: 4,
					name: '服装',
					child: [
						{
							name: '子香蕉1',
							img: '../../static/person.png'
						}
					]
				},
				{
					id: 5,
					name: '家电',
					child: [
						{
							name: '子香蕉1',
							img: '../../static/person.png'
						}
					]
				},
				{
					id: 6,
					name: '医药',
					child: []
				}
			],
			// 分类列表子集
			shoplistDe: []
		};
	},

	onShow() {
		// 获取导航'.nav-item'的高度，在点击导航触发changeNav时，使其向下滚动
		this.$nextTick(() => {
			let height = uni.createSelectorQuery().select('.nav-item');
			height
				.boundingClientRect(data => {
					this.height = data.height;
				})
				.exec();
		});
	},
	methods: {
		//获取分类商品列表
		getCommodityCategory(num) {
			getCategory(num + 1).then(res => {
				console.log(res);
				this.shoplist[num].child = res.data.data;
				if (res.data.data.length > 0) {
					this.isNone = false;
				} else {
					this.isNone = true;
				}
			});
		},
		//变更列表
		changeNav(index) {
			this.getCommodityCategory(index);
			this.active = index;
			this.scrollTop = this.height * (index - 2);
			// 在这里请求接口 展示右侧商品数据
			this.shoplistDe = this.shoplist[index].child;
		},
		//批量变更
		updateAllList() {
			for (let i = 0; i < 6; i++) {
				this.changeNav(i);
			}
		}
	},
	onReady() {
		this.updateAllList();
	}
};
</script>
<style scoped lang="scss">
.category {
	display: flex;
	position: absolute;
	width: 100%;
	height: calc(100% - var(--status-bar-height));

	/* 隐藏滚动条样式 */
	::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	uni-scroll-view {
		height: 100%;
	}

	.bg {
		background: #f7f8f9;
	}

	.nav {
		width: 200rpx;

		.nav-item {
			width: 200rpx;
			height: 104rpx;
			line-height: 104rpx;
			background: #f7f8f9;
			font-size: 28rpx;
			color: #505660;
			text-align: center;
			position: relative;
		}

		.ac {
			color: #1ca678;
			font-size: 30rpx;
			background: #fff;
		}

		.ac:before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 6rpx;
			height: 104rpx;
			background: linear-gradient(180deg, #26a69a 0%, #4db6ac 100%);
			border-radius: 2rpx;
		}
	}

	.goodsBox {
		width: 550rpx;
		padding-left: 50rpx;
		background: #ffffff;

		.goods {
			display: flex;
			flex-wrap: wrap;
			padding: 30rpx 0;

			.goods-item {
				text-align: center;
				margin-bottom: 56rpx;
				margin-right: 65rpx;

				image {
					display: block;
					width: 100rpx;
					height: 100rpx;
					margin: 0 auto 32rpx;
					border-radius: 4rpx;
				}

				uni-text {
					font-size: 24rpx;
					color: #505660;
				}
			}
		}
	}
}
</style>
