import axiosInstance from "../axiosInstance";

const shopCarInfo = {
    /**
     * 根据商品id添加到购物车
     * @param {{goods_id,custom_id}} param0 
     * @returns {Promise<Object>}
     */
    addToShopCar({ goods_id, custom_id }) {
        return axiosInstance.patch(`/shopCarInfo/addToShopCar`, {
            goods_id, custom_id
        })
    },
    /**
     * 获取登录后的购物车列表
     * @returns {Promise<Object>}
     */
    getMyShopCarList() {
        return axiosInstance.get(`/shopCarInfo/getMyShopCarList`);
    },
    /**
     * @param Ids 这里的Ids是一个字符串，如果有多个，用逗号隔开
     */
    getMyCheckoutShopCarList(Ids) {
        return axiosInstance.get(`/shopCarInfo/getMyCheckoutShopCarList/${Ids}`);
    },

    /**
     * 根据id删除
     * @param {Number} id 
     * @returns {Promise<Object>}
     */
     deleteById(id) {
        return axiosInstance.delete(`/shopCarInfo/deleteById/${id}`);
    },

    /**
     * 减少商品数量
     * @param {Object} param0 
     * @returns {Promise<AxiosResponse<any>>}
     */
    subToShopCar({ goods_id, custom_id }) {
        return axiosInstance.patch(`/shopCarInfo/subToShopCar`, {
            goods_id, custom_id
        })
    },
}

export default shopCarInfo;