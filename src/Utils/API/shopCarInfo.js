import axiosInstance from "../axiosInstance";

const shopCarInfo = {
    /**
     * 根据商品id添加到购物车
     * @param {{goods_id,custom_id}} param0 
     * @returns {Promise<Object>}
     */
    addToShopCar({ goods_id,custom_id }) {
        return axiosInstance.patch(`/shopCarInfo/addToShopCar`, {
            goods_id,custom_id
        })
    }
}


export default shopCarInfo;