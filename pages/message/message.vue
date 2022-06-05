<template>
	<view>
		<view
			v-for="(item, index) in goodsList"
			:key="index"
			@click="navToDetailPage(item)"
			style="margin-top: 20rpx;background-color: #FFFFFF;border-radius: 15px;box-shadow: 00 5rpx #e2e2e2;margin-left: 8px;margin-right: 8px;"
		>
			<!-- 消息组件 -->
			<view style="margin-left: 25rpx;"><image :src="item.image" style="width: 125rpx;height: 140rpx;border-radius: 50%;" mode="aspectFill"></image></view>
			<view style="margin-top: -130rpx;margin-left: 170rpx;">
				<text>{{ item.title }}</text>
			</view>
			<view style="margin-top: -45rpx;margin-left: 560rpx;">
				<text style="color: #515151;">{{ item.time }}</text>
			</view>
			<view style="margin-top: 30rpx;margin-left: 170rpx;">
				<text style="color: #515151;">{{ item.news }}</text>
			</view>
			<view style="margin-top: -40rpx;margin-left: 630rpx;">
				<u-badge numberType="overflow" shape="circle" max="99" :value="item.noread" type="error" :absolute="true" :showZero="false"></u-badge>
			</view>
			<!-- 分割线 -->
			<view style="margin-top: 60rpx;"><u-divider lineColor="#7A9BFD"></u-divider></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			goodsList: [
				{
					image:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F24%2F20160824122502_cUTnE.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656342760&t=9f5863d974fee908ba697a0e622dea97',
					title: 'Kamisora的犬舍',
					time: '2022-6-3',
					news: '这是一条消息',
					noread: 100
				},
				{
					image:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F24%2F20160824122502_cUTnE.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656342760&t=9f5863d974fee908ba697a0e622dea97',
					title: '老八小hang堡',
					time: '2022-6-2',
					news: '这是一条消息',
					noread: 0
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss">
page {
	background-color: #f4f4f4;
}
</style>
