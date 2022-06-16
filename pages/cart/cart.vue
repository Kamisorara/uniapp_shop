<template>
	<!-- https://blog.csdn.net/pumpkin_truck/article/details/120140769 -->
	<view>
		<u-empty v-if="goods.length === 0" mode="car" icon="http://cdn.uviewui.com/uview/empty/car.png"></u-empty>
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
						<image :src="item.shopImg" style="width: 150rpx;height: 140rpx;"></image>
					</view>
					<view class="size">
						<text style="font-size: 25rpx;">已选择：{{ item.shopName }}</text>
						<view class="num">
							<text class="subtract" @click="reduce(item)">-</text>
							<text class="num">{{ item.num }}</text>
							<text @click="add(item)" class="add">+</text>
						</view>
						<text class="goods-price">￥{{ item.shopPrice }}/件</text>
					</view>
				</view>
				<view class="detail-right">
					<image class="image" :src="require('../../static/ashbin.png')" @click="deleteImg(item)"></image>
					<image class="image2" :src="require('../../static/favorite.png')" @click="collectionImg(item)"></image>
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
		<!-- toast弹窗 -->
		<view><u-toast ref="uToast"></u-toast></view>
	</view>
</template>

<script>
import { virifyLogin } from '@/common/api/login.js';
import { getUserCart } from '@/common/api/detail/commoditydetail.js';
export default {
	data() {
		return {
			//用户详情
			userInfo: {
				id: '',
				userName: ''
			},
			//用户登录状态
			isLogin: false,
			show: false,
			allchecked: false,
			checked: false,
			//购物车列表
			goods: []
		};
	},
	methods: {
		//获取用户id
		getUserInfo() {
			virifyLogin().then(res => {
				console.log(res);
				if (res.data.code === 200) {
					this.isLogin = true;
					this.userInfo.id = res.data.data[0];
					this.userInfo.userName = res.data.data[1];
					this.getUserCarts();
				} else {
					this.ifUserNotLoginToast();
					setTimeout(() => {
						uni.navigateTo({
							url: '../login/login'
						});
					}, 1000);
				}
			});
		},
		//获取用户购物车列表
		getUserCarts() {
			getUserCart(this.userInfo.id).then(res => {
				console.log(res);
				this.goods = res.data.data;
			});
		},
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
		},
		//用户未登录弹窗
		ifUserNotLoginToast() {
			this.$refs.uToast.show({
				title: '用户未登录，请前去登录！',
				type: 'error',
				message: '用户未登录，请前去登录！'
			});
		}
	},
	onReady() {
		this.getUserInfo();
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
				item.flag ? (totalPrice += item.num * item.shopPrice) : (totalPrice += 0);
			});
			return totalPrice;
		}
	},
	onShow() {
		this.getUserInfo();
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
