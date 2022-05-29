<template>
	<view class="commodityDetail">
		<view class="swiper" style="margin-top: 60rpx;">
			<u-swiper height="500" :list="list6" @change="e => (currentNum = e.current)" :autoplay="false" indicatorStyle="right: 20px">
				<view slot="indicator" class="indicator-num">
					<text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
				</view>
			</u-swiper>
		</view>
		<!-- 价格 -->
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
		<view class="avtivity" style="background-color: #ffffff;height: 60px;margin-top: 15px;display: flex;border-top-left-radius: 12px;border-top-right-radius: 12px;">
			<view class="activity-title" style="margin-top: 15px;"><text style="font-size: 15px;font-weight: 700;">活动</text></view>
			<view class="activity-detail" style="display: flex;margin-left: 15px;margin-top: 13px;width: 300px;">
				<view style="width: 70px;"><u-tag text="首单专享" type="error" plain plainFill size="mini"></u-tag></view>
				<view style="width: 430rpx;"><text style="margin-left: 15px;font-size: 13px;margin-top: 3px;">新人专属优惠,一单就回本</text></view>
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
				<text style="font-size: 10px;margin-left: 15px;">独一无二天下无敌你怎么样也买不起的 柴犬</text>
			</view>
			<view class="shop-img" @click="shopShow = true" style="margin-top: 10px;"><image src="../../static/elipsis.png" style="width: 25px;height: 30px;"></image></view>
			<view>
				<u-popup :show="shopShow" @close="shopClose" @open="shopOpen">
					<view style="height: 780rpx;background-color: #ffffff;"><text>独一无二天下无敌你怎么样也买不起的 柴犬</text></view>
				</u-popup>
			</view>
		</view>
		<!-- 配送 -->
		<view class="diliver" style="display: flex;height: 60px;background-color: #ffffff;">
			<view class="diliver_title" @click="shopShow = true" style="margin-top: 15px;"><text style="font-size: 15px;font-weight: 700;">送至</text></view>
			<view class="diliver_message" @click="shopShow = true" style="width: 335px;margin-top: 15px;">
				<text style="font-size: 10px;margin-left: 15px;">室女座超星系团 银河系 太阳系 地球</text>
			</view>
			<view class="diliver-img" @click="shopShow = true" style="margin-top: 10px;"><image src="../../static/elipsis.png" style="width: 25px;height: 30px;"></image></view>
			<view>
				<u-popup :show="shopShow" @close="shopClose" @open="shopOpen">
					<view style="height: 780rpx;background-color: #ffffff;"><text>请选择配送地址</text></view>
				</u-popup>
			</view>
		</view>
		<!-- 评价模块 -->
		<view class="comment-head" style="display: flex;background-color: #ffffff;margin-top: 15px;height: 50px;border-top-left-radius: 15px;border-top-right-radius: 15px;">
			<view class="comment-title" style="margin-left: 10px;margin-top: 10px;width: 550rpx;"><text style="font-size: 16px;font-weight: 600;">宝贝评价 999+ 条</text></view>
			<view style="margin-top: 10px;"><text style="color: coral;">查看全部 ></text></view>
		</view>
		<view class="comment-main" style="display: flex;height: 65px;background-color: #ffffff;">
			<view class="User-headimg" style="margin-top: 10px;margin-left: 15px;"><u-avatar :src="src"></u-avatar></view>
			<view class="Username" style="margin-top: 5px;margin-left: 15px;"><text>Ka***ra</text></view>
		</view>
		<view class="comment-detail-text" style="background-color: #ffffff;height: 40px;"><text style="font-size: 15px;margin-left: 15px;">终于买到了哈哈哈哈哈</text></view>
		<view class="comment-detail-img" style="border-bottom:1px solid #d0d7da;display: flex;background-color: #ffffff;height: 100px;">
			<view v-for="(item, index) in userCommentImg" :key="index">
				<image :src="item.imgAddr" style="width: 80px;height: 80px;margin-left: 5px;border-radius: 10px;"></image>
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
				<view style="margin-left: 10px;width: 500rpx;"><text style="font-size: 15px;">这个狗会做饭吗？</text></view>
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
				<view class="u-avatar-item"><u-avatar :src="src" shape="square" size="60"></u-avatar></view>
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
export default {
	name: '',
	data() {
		return {
			isLogin: false,
			//回到顶部
			scrollTop: 0,
			//是否有人提问回答
			hasAsk: true,
			//用户头像
			src:
				'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F24%2F20160824122502_cUTnE.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656342760&t=9f5863d974fee908ba697a0e622dea97',
			//商品选择（显示控制）
			shopShow: false,
			value6: 0,
			//当前页数
			currentNum: 0,
			list6: [
				'https://gd3.alicdn.com/imgextra/i3/2911145777/O1CN015VJWDP1sXuod9bPQD_!!2911145777.jpg',
				'https://gd1.alicdn.com/imgextra/i1/2911145777/O1CN01UBLYwu1sXuohYK10S_!!2911145777.png',
				'https://gd4.alicdn.com/imgextra/i2/2911145777/O1CN01oChFKR1sXupWqi0qj_!!2911145777-0-picasso.jpg'
			],
			userCommentImg: [
				{
					id: 1,
					imgAddr: 'https://img0.baidu.com/it/u=2279399525,1346771052&fm=253&fmt=auto&app=138&f=PNG?w=472&h=474'
				},
				{
					id: 2,
					imgAddr: 'https://img1.baidu.com/it/u=529831172,1180613810&fm=253&fmt=auto&app=120&f=JPEG?w=421&h=240'
				}
			]
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
		shopClose() {
			this.shopShow = false;
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
.u-avatar-item {
	margin-right: 30px;
}
// 回到顶部装饰
.wrap {
	height: 200vh;
}
</style>
