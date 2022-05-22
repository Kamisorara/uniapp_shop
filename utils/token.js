const tokenKey = 'token';

export function setToken(token) {
	return uni.setStorageSync(tokenKey, token);
};

export function getToken() {
	return uni.getStorageSync(tokenKey);
};
export function removeToken() {
	return uni.removeStorageSync(tokenKey);
}
