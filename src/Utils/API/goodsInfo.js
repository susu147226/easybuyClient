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
    },
    /**
     * 根据对应的参数 页码 获取商品页
     * @param {{pageIndex,goods_name,goods_status,products_id,goods_price_low,goods_price_high}} param0 
     * @returns {Promise<Object>}
     */
    getListByPage({ goods_name, goods_status, products_id, goods_price_low, goods_price_high, pageIndex }) {
        return axiosInstance.get(`/goodsInfo/getListByPage`, {
            params: {
                goods_name, goods_status, products_id, goods_price_low, goods_price_high, pageIndex
            }
        })
    },
    /**
     * 根据id查询商品详情
     * @param {id} id 
     * @returns {Promise<Object>}
     */
    findById(id){
        return axiosInstance.get(`/goodsInfo/findById/${id}`);
    }
}

export default goodsInfo;