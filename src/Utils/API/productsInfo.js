import axiosInstance from "../axiosInstance";

const productsInfo = {
    /**
     * 获取一级产品信息列表
     * @returns {Promise<Object>}
     */
     getTopProductsInfoListAndGoods(){
        return axiosInstance.get("/productsInfo/getTopProductsInfoListAndGoods");
    }
}


export default productsInfo;
