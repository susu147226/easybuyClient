import axiosInstance from "../axiosInstance";

const orderInfo = {
    /**
     * 获取登录用户订单信息
     * @param {*} param0 
     * @returns 
     */
    getListByPage({ pageIndex, order_status }) {
        return axiosInstance.get(`/orderInfo/getListByPage`, {
            params: {
                pageIndex, order_status
            }
        })
    }
}

export default orderInfo;