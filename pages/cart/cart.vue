<template>
	<!-- https://blog.csdn.net/pumpkin_truck/article/details/120140769 -->
	<view>
		<view class="empty" v-if="show">
			<image
				src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F82%2F40%2F596fa6dc00bb4_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633499781&t=d37222e32213957ddbdd01d62e071309"
				mode="widthFix"
				style="width: 400rpx;"
			></image>
			<view class="empty-text">空空如也的购物</view>
			<view class="empty-button" @click="goshopping">去选购</view>
		</view>
		<view v-if="!show">
			<view
				class="goods-detail"
				v-for="(item, index) in goods"
				:key="index"
				style="border-radius: 15px;margin-top: 10px;margin-left: 8px;margin-right: 8px;box-shadow: 00 5rpx #e2e2e2;"
			>
				<view class="detail-left">
					<view class="goods-left">
						<checkbox-group @change="selected(item)">
							<label>
								<checkbox class="selected" color="#555555" :checked="checked" />
								<text></text>
							</label>
						</checkbox-group>
						<image :src="item.goodsImage" style="width: 150rpx;height: 140rpx;"></image>
					</view>
					<view class="size">
						<text style="font-size: 25rpx;">已选择：{{ item.size }}</text>
						<view class="num">
							<text class="subtract" @click="reduce(item)">-</text>
							<text class="num">{{ item.num }}</text>
							<text @click="add(item)" class="add">+</text>
						</view>
						<text class="goods-price">￥{{ item.price }}/件</text>
					</view>
				</view>
				<view class="detail-right">
					<image class="image" :src="item.deleteImage" @click="deleteImg(item)"></image>
					<image class="image2" :src="item.collection" @click="collectionImg(item)"></image>
				</view>
			</view>
		</view>
		<view class="end">
			<view class="end-left">
				<checkbox-group @change="selectgoods()">
					<label>
						<checkbox :checked="allchecked" />
						全选
					</label>
				</checkbox-group>
				<view>
					总计：
					<text style="color: #f00;font-weight: bold;">￥ {{ totalPrice }}</text>
				</view>
			</view>
			<view class="end-right">结算({{ totalNum }})</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			show: false,
			allchecked: true,
			checked: true,
			goods: [
				{
					size: '特大包',
					num: 1,
					flag: true,
					price: 149,
					goodsImage: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/3015107655/O1CN01nMBnQd26Q2dAB0bf4_!!0-item_pic.jpg_580x580Q90.jpg_.webp',
					deleteImage: require('../../static/ashbin.png'),
					collection: require('../../static/favorite.png')
				},
				{
					size: '48包',
					num: 1,
					flag: true,
					price: 80,
					goodsImage: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3160935493/O1CN01ffFCI51qRqLRl9Mwd_!!0-item_pic.jpg_580x580Q90.jpg_.webp',
					deleteImage: require('../../static/ashbin.png'),
					collection: require('../../static/favorite.png')
				}
			]
		};
	},
	methods: {

		goshopping() {
			uni.navigateTo({
				url: '../../static/logo.png'
			});
		},
		change(e) {
			console.log(e);
		},
		selected(item) {
			item.flag = !item.flag;
			if (!item.flag) {
				this.allchecked = false;
			} else {
				const a = this.goods.forEach(item => {
					return item.flag === true;
				});
				if (a) {
					this.allchecked = true;
				} else {
					this.allchecked = false;
				}
			}
		},
		selectgoods() {
			this.allchecked = !this.allchecked;
			if (this.allchecked) {
				this.goods.map(item => {
					this.checked = true;
					item.flag = true;
				});
			} else {
				this.checked = false;
				this.goods.map(item => {
					item.flag = false;
				});
			}
		},
		reduce(item) {
			let num = item.num;
			if (num > 1) {
				num -= 1;
			} else if ((num = 1)) {
				uni.showToast({
					title: '该宝贝不能减少了哟~'
				});
			}
			item.num = num;
		},
		add(item) {
			let num = item.num;
			item.num = num + 1;
		},
		// 更改图片样式
		deleteImg(item) {
			item.deleteImage = require('../../static/selected/ashbin.png');
		},
		// 更改图片样式
		collectionImg(item) {
			item.collection = require('../../static/selected/favorite.png');
		}
	},
	computed: {
		totalNum() {
			let totalNum = 0;
			this.goods.map(item => {
				item.flag ? (totalNum += item.num) : (totalNum += 0);
			});
			return totalNum;
		},

		totalPrice() {
			let totalPrice = 0;
			this.goods.map(item => {
				item.flag ? (totalPrice += item.num * item.price) : (totalPrice += 0);
			});
			return totalPrice;
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f4f4f4;
}
.goods {
	line-height: 80rpx;
	background-color: #ffffff;

	&-detail {
		display: flex;
		padding: 30rpx 15rpx 30rpx 30rpx;
		background-color: #fff;
		justify-content: space-between;
		border-bottom: 5rpx solid #f1f1f1;
		align-items: center;

		.detail-left {
			display: flex;

			.goods-left {
				display: flex;
				align-items: center;
			}
		}

		.size {
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			margin-left: 30rpx;

			.num {
				margin-top: -30rpx;

				text {
					width: 50rpx;
					line-height: 50rpx;
					text-align: center;
					display: inline-block;
					background-color: #f7f7f7;
					margin-top: 40rpx;
					margin-right: 10rpx;
				}

				.add {
					color: #fa4305;
					border-radius: 10rpx 30rpx 30rpx 10rpx;
					margin-right: 20rpx;
				}

				.subtract {
					border-radius: 30rpx 10rpx 10rpx 30rpx;
				}
			}

			.goods-price {
				margin-top: 10rpx;
				font-size: 25rpx;
				color: #f44545;
			}
		}

		.detail-right {
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			margin-right: 10rpx;
			.image {
				margin-top: 10rpx;
				width: 50rpx;
				height: 50rpx;
			}

			.image2 {
				margin-top: 20rpx;
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
}

.empty {
	position: relative;
	top: 220rpx;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;

	&-text {
		color: #808080;
		margin-bottom: 50rpx;
	}

	&-button {
		width: 300rpx;
		height: 90rpx;
		color: orange;
		border: 1rpx solid orange;
		text-align: center;
		line-height: 90rpx;
		border-radius: 48rpx;
	}
}

.end {
	width: 100%;
	height: 90rpx;
	background-color: #fff;
	position: fixed;
	/* #ifndef H5 */
	bottom: 0rpx;
	/* #endif */
	/* #ifdef H5 */
	bottom: 100rpx;
	/* #endif */
	left: 0;
	display: flex;
	align-items: center;

	&-left {
		width: 70%;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;

		.end-flex {
			display: flex;
			align-items: center;
		}
	}

	&-right {
		width: 30%;
		line-height: 90rpx;
		background-color: #f44545;
		text-align: center;
		color: #fff;
	}
}
</style>
