import request from "@/utils/http.js"

export function login(data) {
	return request.post('/user/login', data);
}
