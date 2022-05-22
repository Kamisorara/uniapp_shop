// http.js
// 通常可以吧 baseUrl 单独放在一个 js 文件了
const baseUrl = 'http://192.168.31.174:8080'

const request = (options = {}) => {
	let token = uni.getStorageInfoSync("token");
	options.header = {
		"Content-Type": "application/x-www-form-urlencoded",
		'token': '',
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url || '',
			method: options.type || 'GET',
			data: options.data || {},
			header: options.header || {}
		}).then(data => {
			let [err, res] = data;
			resolve(res);
		}).catch(error => {
			reject(error)
		})
	});
}

const get = (url, data, options = {}) => {

	options.type = 'GET';
	options.data = data;
	options.url = url;
	return request(options)
}

const post = (url, data, options = {}) => {
	options.type = 'POST';
	options.data = data;
	options.url = url;
	return request(options)
}


export default {
	request,
	get,
	post
}
