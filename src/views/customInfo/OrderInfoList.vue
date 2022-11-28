<template>
    <div class="w-full bg-gray-100">
        <div class="right-page flex flex-row">
            <div class="mt-20 ml-20 mr-20 w-full h-full">
                <div class="flex flex-row items-baseline my-5 text-gray-500">
                    <span class="text-[22px]">我的订单</span>
                    <span class="text-[12px] ml-4">请谨防钓鱼链接或诈骗电话</span>
                </div>
                <el-skeleton :animated="true" :loading="isLoading">
                    <ul class="order-type-list mt-20">
                        <li @click="queryFormData.order_status = ''"
                            :class="{ active: queryFormData.order_status === '' }">
                            全部</li>
                        <li @click="queryFormData.order_status = '0'"
                            :class="{ active: queryFormData.order_status === '0' }">未付款</li>
                        <li @click="queryFormData.order_status = '1'"
                            :class="{ active: queryFormData.order_status === '1' }">已付款</li>
                        <li @click="queryFormData.order_status = '2'"
                            :class="{ active: queryFormData.order_status === '2' }">已发货</li>
                        <li @click="queryFormData.order_status = '3'"
                            :class="{ active: queryFormData.order_status === '3' }">已签收</li>
                    </ul>

                    <div v-for="(item, index) in myOrderInfoList.listData">
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <span>{{ orderStatus[item.order_status] }}</span>
                                    <span v-if="item.order_status === 0" class="text-gray-500 text-[12px] cursor-pointer ml-4
                                         text-red-500 hover:underline" @click="toAliPay(item.id)">去付款</span>
                                    <div class="flex flex-row text-gray-500 text-[14px] items-center justify-between">
                                        <p>{{ formatDateTime(item.order_submission_time, "YYYY年MM月DD日 HH:mm:ss") }}
                                            |
                                            {{ item.addressInfo.address_name }} | 订单号：{{ item.id }} |
                                            在线支付【{{ orderPayType[item.order_pay_type] }}】</p>
                                        <div>{{ item.order_status === 0 ? '订单' : '实付' }}金额：<span
                                                class="text-black text-[22px]">{{ item.totalMoney.toFixed(2)
                                                }}</span>元
                                        </div>
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
                                    <el-button @click="showDrawer(item.id)">订单详细</el-button>
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
                </el-skeleton>
            </div>
        </div>
    </div>
    <el-drawer v-model="isShowDrawer" :size="700" :destroy-on-close="true" :with-header="false">
        <order-info-drawer :order-id="currentEditRowId" />
    </el-drawer>
</template>

<script setup>
import { reactive, ref, watch, onMounted, inject } from "vue";
import API from "../../Utils/API";
import OrderInfoDrawer from "../customInfo/OrderInfoDrawer.vue"
import { useRouter } from "vue-router";
import { formatDateTime } from "../../utils/DataTimeUtils"
import { ElMessageBox } from "element-plus";
const baseURL = inject("baseURL");

const router = useRouter();

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
// 订单状态
const orderStatus = {
    0: "未付款",
    1: "已付款",
    2: "已发货",
    3: "已签收"
}
// 支付方式
const orderPayType = {
    1: "支付宝",
    2: "微信",
    3: "银行卡",
    4: "货到付款"
}

/**
 * 去付款
 */
const toAliPay = (id) => {
    if (id) {
        API.orderInfo.aliPay(id)
            .then(result => {
                // console.log(result);
                location.href = result;
            })
            .finally(() => {
                isLoading.value = false;
            });
    } else {
        ElMessageBox.alert("订单号不存在，请重新下单", "提示", {
            type: "error"
        })
            .then(() => {
                router.replace({ name: "HomePage" });
            })
    }
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
            // console.log(result);

        })
        .finally(() => {
            isLoading.value = false;
        })
}


/**
 * 抽屉，展示订单详细信息
 */
const isShowDrawer = ref(false);
const currentEditRowId = ref(null);
const showDrawer = id => {
    isShowDrawer.value = true;
    currentEditRowId.value = id;
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

.order-type-list {
    @apply flex flex-row;

    >li {
        @apply p-[5px] text-gray-500 border-red-500 border-solid cursor-pointer mr-4;

        &.active {
            @apply border-b-2;
        }
    }
}
</style>