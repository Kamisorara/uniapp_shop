import request from "@/utils/http.js"


//获取分类详情
export function getClassification() {
	return request.get('/uni-shop/index/get-index-classify');
}


//获取推荐详情
export function getRecommended() {
	return request.get('/uni-shop/index/get-index-recommended');
}

//获取首页商品列表
export function getAllCommodities() {
	return request.get('/uni-shop/index/get-index-commodities');
}
