import request from "@/utils/http.js"


//根据商品id获取商品基本详情
export function getCommodityCommonDetail(id) {
	return request.get('/uniapp-detail/get-commodities-detail' + '?id=' + id);
}


//根据商品id 获取商品用户评论信息 (后期会采用分页获取)
export function getCommoditiesComment(id) {
	return request.get('/uniapp-detail/get-commodities-comment' + '?id=' + id);
}


//根据商品id获取对应图片
export function getCommoditypicture(id) {
	return request.get('/uniapp-detail/get-commodity-picture' + '?id=' + id);
}

//根据商品id 获取用户询问信息
export function getUserAsk(id) {
	return request.get('/uniapp-detail/get-commodity-userAsk' + '?id=' + id);
}
