import axiosInstance from "../axiosInstance";

const goodsInfo = {
    /**
     * 获取推荐商品
     * @returns {Promise<Object>}
     */
    getRecommendGoodsList() {
        return axiosInstance.get("/goodsInfo/getRecommendGoodsList");
    },
    /**
     * 根据父级id获取商品分类
     * @param {parent_id} parent_id 父级id
     * @returns {Promise<Object>}
     */
    getListByParentId(parent_id) {
        return axiosInstance.get(`/goodsInfo/getListByParentId/${parent_id}`);
    }
}

export default goodsInfo;