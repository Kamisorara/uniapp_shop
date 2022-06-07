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


//分页获取商品列表
export function getCommodities(pageNum, pageSize) {
	return request.get('/uni-shop/index/getPageCommodities?pageNum=' + pageNum + '&pageSize=' + pageSize);
}

//获取轮播图图片
export function getAllSwiperPicture() {
	return request.get('/uni-shop/index/getSwiperPicture');
}

//获取商品分类
export function getCategory(id) {
	return request.get('/uni-shop/index/getClassificationDetail' + '?id=' + id);
}


