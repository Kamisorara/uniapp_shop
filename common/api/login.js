import request from "@/utils/http.js"

//登录接口
export function login(data) {
	return request.post('/user/login', data);
}

//token验证登录接口
export function virifyLogin() {
	return request.get('/user/user-info');
}
