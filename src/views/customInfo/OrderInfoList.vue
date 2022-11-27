<template>
    <div class="w-full bg-gray-100">
        <div class="right-page flex flex-row">
            <div class="mt-20 ml-20 mr-20 w-full h-full">
                <div class="flex flex-row items-baseline my-5 text-gray-500">
                    <span class="text-[22px]">我的订单</span>
                    <span class="text-[12px] ml-2">请谨防钓鱼链接或诈骗电话</span>
                </div>

                <ul class="order-type-list flex flex-row mt-20">
                    <li @click="queryFormData.order_status = ''" class="mr-16">全部</li>
                    <li @click="queryFormData.order_status = '0'" class="mr-16">未付款</li>
                    <li @click="queryFormData.order_status = '1'" class="mr-16">已付款</li>
                    <li @click="queryFormData.order_status = '2'" class="mr-16">已发货</li>
                    <li @click="queryFormData.order_status = '3'" class="mr-16">已签收</li>
                </ul>

                <div v-for="(item, index) in myOrderInfoList.listData">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span v-if="item.order_status === 0">未付款</span>
                                <span v-if="item.order_status === 1">已付款</span>
                                <span v-if="item.order_status === 2">已发货</span>
                                <span v-if="item.order_status === 3">已签收</span>

                                <span v-if="item.order_status === 0"
                                    class="text-gray-500 text-[12px] cursor-pointer text-red-500 hover:underline">去付款</span>
                                <div class="flex flex-row justify-between items-center">
                                    <p><span>{{ item.order_submission_time }}</span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>{{ item.customInfo.custom_realName }}</span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>订单号: <span>{{ item.id }}</span>
                                            <span>&nbsp;|&nbsp;</span>
                                            <span>在线支付</span>
                                            <span v-if="item.order_pay_type === 0">支付宝</span>
                                            <span v-if="item.order_pay_type === 1">微信</span>
                                            <span v-if="item.order_pay_type === 2">银行卡</span>
                                            <span v-if="item.order_pay_type === 3">货到付款</span>
                                        </span>
                                    </p>
                                    <span>订单金额: <span class="text-[22px]">{{
                                            item.totalMoney.toFixed(2)
                                    }}</span><span>元</span></span>
                                </div>
                            </div>
                        </template>

                        <ul class="flex flex-row justify-between">
                            <li class="h-[120px] w-[120px]">
                                <img :src="baseURL + item.orderDetailInfoList[0].goodsInfo.goods_photo[0]" alt="">
                            </li>
                            <li class="flex flex-1 flex-col justify-center ml-20">
                                <span>{{ item.orderDetailInfoList[0].goodsInfo.goods_name }}</span>
                                <span>{{ item.orderDetailInfoList[0].goodsInfo.goods_sale_price }}元 x {{
                                        item.orderDetailInfoList[0].goods_num
                                }}</span>
                            </li>
                            <li class="flex flex-col justify-around">
                                <el-button>订单详细</el-button>
                                <el-button>申请售后</el-button>
                                <el-button>联系客服</el-button>
                            </li>
                        </ul>
                    </el-card>
                </div>

                <!--页码-->
                <div class="mt-2 flex flex-row justify-between" v-if="myOrderInfoList.listData.length > 0">
                    <p class="text-gray-500 text-[14px]">当前共第{{ queryFormData.pageIndex }}页，共{{
                            myOrderInfoList.pageCount
                    }}页，共{{ myOrderInfoList.totalCount }}条</p>
                    <el-pagination background layout="prev, pager, next" :current-page="queryFormData.pageIndex"
                        @current-change="currentChange" :total="myOrderInfoList.totalCount">
                    </el-pagination>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { mainStore } from "../../store/index";
import { InfoFilled } from "@element-plus/icons-vue";
import API from "../../Utils/API";
import { onMounted, inject } from "vue";
const baseURL = inject("baseURL");

const queryFormData = reactive({
    pageIndex: 1,
    // pageSize: 5,
    order_status: "",
})

const myOrderInfoList = reactive({
    listData: [],
    pageStart: 1,
    pageEnd: 1,
    totalCount: 0,
    pageCount: 0,
})

const isLoading = ref(false);

onMounted(() => {
    queryData();
})

// 页码发生变化
const currentChange = (index) => {
    queryFormData.pageIndex = index;
    queryData();
}

//监听
watch(() => queryFormData.order_status, (newValue, oldValue) => {
    queryFormData.pageIndex = 1;
    queryData();
});

const queryData = () => {
    isLoading.value = true;
    API.orderInfo.getListByPage(queryFormData)
        .then(result => {
            result.listData.forEach(item => {
                item.totalMoney = 0;
                item.orderDetailInfoList.forEach(item2 => {
                    item2.goodsInfo.goods_photo = JSON.parse(item2.goodsInfo.goods_photo);
                    item.totalMoney += item2.goodsInfo.goods_sale_price * item2.goods_num;
                })

            })
            myOrderInfoList.listData = result.listData;
            myOrderInfoList.pageStart = result.pageStart;
            myOrderInfoList.pageEnd = result.pageEnd;
            myOrderInfoList.totalCount = result.totalCount;
            myOrderInfoList.pageCount = result.pageCount;
            console.log(result);

        })
        .finally(() => {
            isLoading.value = false;
        })
}
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    box-shadow: none;
    margin-top: 10px;
    width: 100%;
    height: 100%;
}

:deep(.el-button) {
    margin-left: 0;
}
</style>