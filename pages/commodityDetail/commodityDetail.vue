<template>
	<view class="commodityDetail">
		<view class="swiper" style="margin-top: 60rpx;">
			<u-swiper height="500" :list="pictureList" @change="e => (currentNum = e.current)" :autoplay="false" indicatorStyle="right: 20px">
				<view slot="indicator" class="indicator-num">
					<text class="indicator-num__text">{{ currentNum + 1 }}/{{ pictureList.length }}</text>
				</view>
			</u-swiper>
		</view>
		<!-- 价格 -->
		<view class="shop-price" style="background-color: #ffffff;height: 60px;display: flex;">
			<view class="prive" style="margin-top: 10px;width: 250px;margin-left: 15px;">
				<text style="color: red;font-size: 20px;">￥</text>
				<text style="color: red;font-weight: 600;font-size: 25px;">{{ shopChooseList[0].shopPrice }}</text>
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
			<text style="font-size: 18px;font-weight: 700;">{{ commodityCommonDetail.shopName }}</text>
		</view>
		<!-- 活动 -->
		<view class="avtivity" style="background-color: #ffffff;height: 60px;margin-top: 15px;display: flex;border-top-left-radius: 12px;border-top-right-radius: 12px;">
			<view class="activity-title" style="margin-top: 15px;"><text style="font-size: 15px;font-weight: 700;">活动</text></view>
			<view class="activity-detail" style="display: flex;margin-left: 15px;margin-top: 13px;width: 300px;">
				<view style="width: 70px;"><u-tag text="首单专享" type="error" plain plainFill size="mini"></u-tag></view>
				<view style="width: 430rpx;">
					<text style="margin-left: 15px;font-size: 13px;margin-top: 3px;">{{ commodityCommonDetail.discountNotice }}</text>
				</view>
			</view>
			<view class="diliver-img" @click="shopShow = true" style="margin-top: 10px;margin-left: 20px;">
				<image src="../../static/elipsis.png" style="width: 25px;height: 30px;"></image>
			</view>
		</view>
		<!-- 商品选择 -->
		<view
			class="shops"
			style="border-bottom:1px solid #d0d7da;display: flex;height: 60px;background-color: #ffffff;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"
		>
			<view class="shop_title" @click="shopShow = true" style="margin-top: 15px;"><text style="font-size: 15px;font-weight: 700;">已选</text></view>
			<view class="shop_message" @click="shopShow = true" style="width: 335px;margin-top: 15px;">
				<text style="font-size: 10px;margin-left: 15px;">{{ currentChoose.shopTitle }}</text>
			</view>
			<view class="shop-img" @click="shopShow = true" style="margin-top: 10px;"><image src="../../static/elipsis.png" style="width: 25px;height: 30px;"></image></view>
			<!-- 隐藏栏 -->
			<view>
				<u-popup :show="shopShow" @close="shopClose" @open="shopOpen">
					<view style="height: 1300rpx;background-color: #ffffff;">
						<view class="shop-choose-head" style="display: flex;border-bottom:1px solid #d0d7da;">
							<view style="margin-top: 10px;margin-right: 10px;height: 200rpx;width: 200rpx;">
								<image :src="currentChoose.shopImg" style="width: 150rpx;height: 150rpx;padding-left: 10px;padding-top: 10px;"></image>
							</view>
							<view style="margin-top: 20px;width: 470rpx;">
								<text style="font-size: 18px;color: red;font-weight: 600;">￥</text>
								<text style="font-size: 25px;font-weight: 700;color: red;">{{ currentChoose.shopPrice }}</text>
							</view>
							<view style="margin-top: 10px;"><u-icon @click="shopClose()" name="close-circle" color="#000000" size="21"></u-icon></view>
						</view>
						<!-- 商品分类选择 -->
						<view class="shop-choose" style="height: 800rpx;border-bottom:1px solid #d0d7da;">
							<view class="shop-choose-main">
								<view style="margin-top: 20rpx;padding-left: 20rpx;">
									<text style="font-size: 16px;font-weight: 600;">商品选择({{ shopChooseList.length }})</text>
								</view>
							</view>
							<view style="display: flex;">
								<!-- 单个商品详情 -->
								<view
									@click="changeCurrentShop(index)"
									v-for="(item, index) in shopChooseList"
									:key="index"
									class="shop-main"
									style="border-radius: 10px;height: 300rpx;width: 230rpx;margin-left: 15rpx;margin-top: 20rpx;border:1px solid #999999"
								>
									<image :src="item.shopImg" style="height: 200rpx;width: 230rpx;"></image>
									<view style="background-color: #f1f8f9;height: 90rpx;margin-top:5rpx;border-radius: 7px;display: flex;flex-flow: column;">
										<text style="font-size: 13px;margin-top: 5px;margin-left: 5px;color: darkgray;">{{ item.shopName }}</text>
										<text style="font-size: 10px;margin-left: 5px;color: darkgray;">￥ {{ item.shopPrice }}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="buy-num" style="display: flex;">
							<view style="margin-top: 10px;width: 520rpx;">
								<text style="margin-left: 10px;">购买数量</text>
								<text style="font-size: 10px;margin-left: 8px;  color: darkgray;">有货</text>
							</view>
							<view style="margin-top:  8px;"><u-number-box v-model="buyNum"></u-number-box></view>
						</view>
						<view class="add-to-cart" style="margin-top: 30px;">
							<u-button @click="putCommodityToCart()" type="warning " shape="circle" text="添加至购物车"></u-button>
						</view>
					</view>
				</u-popup>
			</view>
		</view>
		<!-- 配送 -->
		<view class="diliver" style="display: flex;height: 60px;background-color: #ffffff;">
			<view class="diliver_title" @click="deliverShow = true" style="margin-top: 15px;"><text style="font-size: 15px;font-weight: 700;">送至</text></view>
			<view class="diliver_message" @click="deliverShow = true" style="width: 335px;margin-top: 15px;">
				<text style="font-size: 10px;margin-left: 15px;">{{ commodityCommonDetail.addr }}</text>
			</view>
			<view class="diliver-img" @click="deliverShow = true" style="margin-top: 10px;"><image src="../../static/elipsis.png" style="width: 25px;height: 30px;"></image></view>
			<!-- 隐藏栏 -->
			<view>
				<u-popup :show="deliverShow" @close="deliverClose" @open="shopOpen">
					<view style="height: 780rpx;background-color: #ffffff;"><text>请选择配送地址</text></view>
				</u-popup>
			</view>
		</view>
		<!-- 评价模块 -->
		<!-- 有人评论 -->
		<view class="comment-part-have" v-show="haveComment">
			<view class="comment-head" style="display: flex;background-color: #ffffff;margin-top: 15px;height: 50px;border-top-left-radius: 15px;border-top-right-radius: 15px;">
				<view class="comment-title" style="margin-left: 10px;margin-top: 10px;width: 550rpx;">
					<text style="font-size: 16px;font-weight: 600;">宝贝评价 {{ commodityCommonDetail.mark }}+ 条</text>
				</view>
				<view style="margin-top: 10px;"><text style="color: coral;">查看全部 ></text></view>
			</view>
			<view class="comment-main" style="display: flex;height: 65px;background-color: #ffffff;">
				<view class="User-headimg" style="margin-top: 10px;margin-left: 15px;"><u-avatar :src="userCommentFirst.userHead"></u-avatar></view>
				<view class="Username" style="margin-top: 5px;margin-left: 15px;">
					<text>{{ userCommentFirst.userName }}</text>
				</view>
			</view>
			<view class="comment-detail-text" style="background-color: #ffffff;height: 40px;">
				<text style="font-size: 15px;margin-left: 15px;">{{ userCommentFirst.userComment }}</text>
			</view>
			<view class="comment-detail-img" style="border-bottom:1px solid #d0d7da;display: flex;background-color: #ffffff;height: 100px;">
				<view v-for="(item, index) in userCommentImg" :key="index">
					<image :src="item.imgAddr" style="width: 80px;height: 80px;margin-left: 5px;border-radius: 10px;"></image>
				</view>
			</view>
		</view>
		<!-- 无人评论 -->
		<view class="comment-part-none" style="border-bottom:1px solid #d0d7da;" v-show="!haveComment">
			<view class="comment-head" style="display: flex;background-color: #ffffff;margin-top: 15px;height: 50px;border-top-left-radius: 15px;border-top-right-radius: 15px;">
				<view class="comment-title" style="margin-left: 10px;margin-top: 10px;width: 550rpx;"><text style="font-size: 16px;font-weight: 600;">宝贝评价 (0)</text></view>
				<view style="margin-top: 10px;"><text style="color: coral;">查看全部 ></text></view>
			</view>
		</view>
		<!-- 问问大家  -->
		<view v-if="hasAsk">
			<view class="askOthers" style="display: flex;background: #ffffff;height: 50px;">
				<view class="askOthers-title" style="margin-left: 10px;margin-top: 10px;width: 550rpx;"><text style="font-size: 17px;font-weight: 600;">问大家</text></view>
				<view style="margin-top: 10px;"><text style="color: coral;">查看全部 ></text></view>
			</view>
			<view style="display: flex;background-color: #ffffff;height: 40px;border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;">
				<view style="margin-left: 8px;"><u-tag text="问" size="mini" type="error"></u-tag></view>
				<view style="margin-left: 10px;width: 500rpx;">
					<text style="font-size: 15px;">{{ userAskList.userAsk }}</text>
				</view>
				<view><text style="font-size: 15px;color: #d0d7da;">1个回答</text></view>
			</view>
		</view>
		<!-- 问问大家 (无人回答) -->
		<view v-if="!hasAsk">
			<view class="askOthers" style="display: flex;background: #ffffff;height: 50px;">
				<view class="askOthers-title" style="margin-left: 10px;margin-top: 10px;"><text style="font-size: 17px;font-weight: 600;">问大家</text></view>
				<view class="askOthers-main"></view>
			</view>
			<view style="display: flex;background-color: #ffffff;height: 40px;border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;">
				<u-tag text="问大家" size="mini" type="error"></u-tag>
				<text style="font-size: 10px;margin-top: 5px;color: #d0d7da;width: 260px;margin-left: 10px;">宝贝好不好，问问大家就知道！</text>
				<u-tag text="去提问" type="error" shape="circle" plain></u-tag>
			</view>
		</view>
		<!-- 卖家详情 -->
		<view class="sellerDetail" style="height: 100px;display: flex;margin-top: 20px;background-color: #ffffff;border-top-left-radius: 15px;border-top-right-radius: 15px;">
			<view class="sellerDetail-part1" style="margin-top: 20px;margin-left: 15px;">
				<view class="u-avatar-item"><u-avatar :src="userCommentFirst.userHead" shape="square" size="60"></u-avatar></view>
			</view>
			<view class="seller-name" style="margin-top: 20px;width: 350rpx;">
				<text>Kamisroa的犬舍</text>
				<view class="range" style="margin-top: 15px;display: flex;">
					<u-icon name="level" size="20px" color="#ffab73"></u-icon>
					<text style="font-size: 12px; color:chocolate;">初来乍到的卖家</text>
				</view>
			</view>
			<view class="seller-level" style="margin-top: 15px;">
				<view>
					<text style="font-size: 10px;">宝贝描述 5.0</text>
					<text style="font-size: 10px; color: coral;margin-left: 5px;">高</text>
				</view>
				<view>
					<text style="font-size: 10px;">卖家服务 5.0</text>
					<text style="font-size: 10px; color: coral;margin-left: 5px;">高</text>
				</view>
				<view>
					<text style="font-size: 10px;">物流服务 5.0</text>
					<text style="font-size: 10px; color: coral;margin-left: 5px;">高</text>
				</view>
			</view>
		</view>
		<view class="seller-detail-foot" style="background-color: #ffffff;height: 40px;display: flex;">
			<view style="margin-left: 110px;"><u-tag text="进店逛逛" type="error" shape="circle" plain></u-tag></view>
			<view style="margin-left: 20px;"><u-tag text="全部宝贝" type="error" shape="circle" plain></u-tag></view>
		</view>
		<!-- 分隔符 -->
		<u-divider text="宝贝详情"></u-divider>
		<!-- toast弹窗 -->
		<view><u-toast ref="uToast"></u-toast></view>
		<!-- 底部栏 -->
		<view class="bottom-tabbar">
			<u-tabbar :value="value6" :round="10" @change="name => (value6 = name)" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
				<u-tabbar-item text="店铺" icon="home"></u-tabbar-item>
				<u-tabbar-item text="客服" icon="server-man"></u-tabbar-item>
				<u-tabbar-item text="购物车" icon="shopping-cart"></u-tabbar-item>
				<u-button type="primary" shape="circle" text="加入购物车" color="#f0e21e"></u-button>
				<u-button type="primary" shape="circle" text="立即购买" color="#ec3f0a"></u-button>
			</u-tabbar>
		</view>
		<!-- 回到顶部 -->
		<view class="wrap"><u-back-top :scroll-top="scrollTop"></u-back-top></view>
	</view>
</template>

<script>
import { getCommodityCommonDetail, getCommoditiesComment, getCommoditypicture, getUserAsk, getInventory, postCommodityToCart } from '@/common/api/detail/commoditydetail.js';
import { virifyLogin } from '@/common/api/login.js';
export default {
	name: '',
	data() {
		return {
			//商品id
			id: null,
			//用户是否登录
			isLogin: false,
			//用户详情
			userInfo: {
				id: '',
				userName: ''
			},
			//是否有用户评论
			haveComment: false,
			//回到顶部
			scrollTop: 0,
			//是否有人提问回答
			hasAsk: false,
			//商品选择（显示控制）
			shopShow: false,
			//配送地址选择
			deliverShow: false,
			value6: 0,
			//当前页数
			currentNum: 0,
			//商品基本信息
			commodityCommonDetail: {
				id: null,
				price: 99,
				mark: 999,
				discountNotice: '3元无门槛优惠券',
				addr: '室女座超星系团 银河系 太阳系 地球',
				shopName: '正宗螺霸王螺蛳粉广西柳州螺狮粉罗霸王速食食品官方螺丝粉旗舰店',
				type: null,
				mainPhoto: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/3015107655/O1CN01nMBnQd26Q2dAB0bf4_!!0-item_pic.jpg_580x580Q90.jpg_.webp'
			},
			//选择商品购买数量
			buyNum: 0,
			//当前选择的商品
			currentChoose: {
				id: '',
				shopImg: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3015107655/O1CN01nMBnQd26Q2dAB0bf4_!!0-item_pic.jpg_580x580Q90.jpg_.webp',
				shopPrice: 10.0,
				shopTitle: null
			},
			//商品选择列表
			shopChooseList: [
				{
					id: 1,
					shopName: '',
					shopPrice: null,
					shopImg: 'https://img.alicdn.com/imgextra/i1/6000000007687/O1CN01Wiamsi26eh7UI5Hdz_!!6000000007687-0-at.jpg_430x430q90.jpg'
				}
			],
			//用户询问信息
			userAskList: {
				userAsk: null
			},
			//最顶上商品轮播图
			pictureList: [
				'https://gd3.alicdn.com/imgextra/i3/2911145777/O1CN015VJWDP1sXuod9bPQD_!!2911145777.jpg',
				'https://gd1.alicdn.com/imgextra/i1/2911145777/O1CN01UBLYwu1sXuohYK10S_!!2911145777.png',
				'https://gd4.alicdn.com/imgextra/i2/2911145777/O1CN01oChFKR1sXupWqi0qj_!!2911145777-0-picasso.jpg'
			],
			//用户评论图片
			userCommentImg: [
				{
					id: 1,
					imgAddr: null
				}
			],
			//用户评论信息
			userCommentFirst: {
				id: null,
				userComment: null,
				userHead: null,
				userName: null
			}
		};
	},
	//回到顶部
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	methods: {
		click1(e) {
			console.log('click1', e);
		},
		shopOpen() {
			console.log('商品选择打开了组件');
		},
		//关闭商品选择栏
		shopClose() {
			this.shopShow = false;
		},
		//关闭配送选择栏
		deliverClose() {
			this.deliverShow = false;
		},
		//获取商品基本详情
		getCommodityCommonDetails() {
			getCommodityCommonDetail(this.id).then(res => {
				console.log(res);
				this.commodityCommonDetail = res.data.data;
			});
		},
		//根据商品id 获取商品用户评论信息
		getCommoditiesComments() {
			getCommoditiesComment(this.id).then(res => {
				console.log(res);
				if (res.data.data.length > 0) {
					this.haveComment = true;
					let data = res.data.data[0];
					this.userCommentImg = [{ imgAddr: data.picutre1 }, { imgAddr: data.picutre2 }, { imgAddr: data.picutre3 }];
					this.userCommentFirst = data;
				}
			});
		},
		//根据商品id获取对应商品图片
		getCommoditypictures() {
			getCommoditypicture(this.id).then(res => {
				console.log(res);
				this.pictureList = res.data.data;
			});
		},
		//根据商品id 获取用户询问信息
		getUserAsks() {
			getUserAsk(this.id).then(res => {
				console.log(res);
				if (res.data.data.length > 0) {
					this.hasAsk = true;
					let data = res.data.data[0];
					this.userAskList = data;
				}
			});
		},
		//商品选择界面，切换当前选择商品
		changeCurrentShop(index) {
			let tempData = this.shopChooseList[index];
			this.currentChoose.id = tempData.id;
			this.currentChoose.shopImg = tempData.shopImg;
			this.currentChoose.shopPrice = tempData.shopPrice;
			this.currentChoose.shopTitle = tempData.shopName;
		},
		//获取获取商品库存信息
		getCommodityInventory() {
			getInventory(this.id).then(res => {
				console.log(res);
				this.shopChooseList = res.data.data;
			});
		},
		//获取用户id
		getUserInfo() {
			virifyLogin().then(res => {
				console.log(res);
				this.userInfo.id = res.data.data[0];
				this.userInfo.userName = res.data.data[1];
			});
		},
		//添加商品至购物车
		putCommodityToCart() {
			this.shopClose();
			postCommodityToCart(this.userInfo.id, this.currentChoose.id)
				.then(res => {
					console.log(res);
					if (res.data.code === 200) {
						this.showSuccessToast();
					} else if (res.data.code === 400) {
						this.showFileToast();
					}
				})
				.catch(err => {
					this.showFileToast();
				});
		},
		//登录成功提示
		showSuccessToast() {
			this.$refs.uToast.show({
				title: '添加购物车成功',
				type: 'success',
				message: '添加购物车成功!'
			});
		},
		//登录失败提示
		showFileToast() {
			this.$refs.uToast.show({
				title: '添加购物车失败',
				type: 'error',
				message: '添加购物车失败!'
			});
		}
	},
	//接收url参数
	onLoad(data) {
		this.id = data.id;
	},
	onReady() {
		this.getCommodityCommonDetails();
		this.getCommoditiesComments();
		this.getCommoditypictures();
		this.getUserAsks();
		this.getCommodityInventory();
		this.getUserInfo();
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
.u-avatar-item {
	margin-right: 30px;
}
// 回到顶部装饰
.wrap {
	height: 200vh;
}
</style>
