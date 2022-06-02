<template>
	<view class="message">
		<text style="font-weight: 700;font-size: 30px;">测试文字识别api</text>
		<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="10"></u-upload>
		<u-button @click="uploadFilePromise()" text="点击识别" color="linear-gradient(to right, rgb(170, 255, 255), rgb(213, 132, 207))"></u-button>
		<view style="height: 300px;background-color: aquamarine;margin-top: 40px;">
			<view>
				<text style="font-weight: 700;font-size: 30px;">{{ words }}</text>
			</view>
		</view>

		<image src="" mode=""></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			fileList1: [],
			words: '请点击文字识别'
		};
	},
	methods: {
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1);
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file);
			let fileListLen = this[`fileList${event.name}`].length;
			lists.map(item => {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				});
			});
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url);
				let item = this[`fileList${event.name}`][fileListLen];
				this[`fileList${event.name}`].splice(
					fileListLen,
					1,
					Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					})
				);
				fileListLen++;
			}
		},
		uploadFilePromise(url) {
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: 'http://192.168.31.174:8081/test-ai',
					filePath: url,
					name: 'file',
					formData: {
						file: 'test'
					},
					success: res => {
						console.log(res);
						this.words = res.data;
					}
				});
			});
		}
	}
};
</script>

<style></style>
