import axiosInstance from "../axiosInstance";

const orderInfo = {
    /**
     * 获取登录用户订单信息
     * @param {{pageIndex, order_status}} param0 
     * @returns {Promise<Object>}
     */
    getListByPage({ pageIndex, order_status }) {
        return axiosInstance.get(`/orderInfo/getListByPage`, {
            params: {
                pageIndex, order_status
            }
        })
    },
    /**
     * 根据id查询订单详情
     * @param {id} id 
     * @returns {Promise<Object>} 
     */
    findById(id) {
        return axiosInstance.get(`/orderInfo/findById/${id}`);
    },
    /**
     * 根据id去支付
     * @returns {Promise<Object>} 
     */
    aliPay(id) {
        return axiosInstance.post("/orderInfo/aliPay", { id });
    },
    /**
     * 提交订单
     * @param {{address_id, order_pay_type, goodsList}} param0 
     * @returns {Promise<Object>} 
     */
    submitOrder({ address_id, order_pay_type, goodsList }) {
        return axiosInstance.post("/orderInfo/submitOrder", {
            address_id, order_pay_type, goodsList
        })
    }
}

export default orderInfo;