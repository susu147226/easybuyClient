<template>
    <div class="orderInfoDrawer-page">
        <el-skeleton animated :loading="isLoading" :rows="10">
            <h2 class=" font-bold mb-2">客户信息</h2>
            <el-descriptions :column="2" border>
                <el-descriptions-item label="用户昵称" label-class-name="w-[120px]" class-name="w-[200px]"
                    label-align="center">
                    {{ orderInfo.customInfo.custom_realName }}
                </el-descriptions-item>
                <el-descriptions-item label="手机号码" label-class-name="w-[120px]" label-align="center">
                    {{ orderInfo.customInfo.custom_tel }}
                </el-descriptions-item>
                <el-descriptions-item label="邮箱" label-align="center">{{ orderInfo.customInfo.custom_email }}
                </el-descriptions-item>
                <el-descriptions-item label="用户性别" label-align="center">
                    <el-tag>男</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="用户地址" label-align="center">{{ orderInfo.customInfo.custom_addr }}
                </el-descriptions-item>
            </el-descriptions>
            <h2 class=" font-bold my-2">订单信息</h2>
            <div class="relative">
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="订单编号" label-class-name="w-[120px]" class-name="w-[200px]"
                        label-align="center">
                        {{ orderInfo.id }}
                    </el-descriptions-item>
                    <el-descriptions-item label="订单状态" label-class-name="w-[120px]" label-align="center">
                        <el-tag v-if="orderInfo.order_status === 0" type="info">未付款</el-tag>
                        <el-tag v-else-if="orderInfo.order_status === 1" type="danger">已付款</el-tag>
                        <el-tag v-else-if="orderInfo.order_status === 2" type="warning">已发货</el-tag>
                        <el-tag v-else-if="orderInfo.order_status === 3" type="warning">已收货</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="订单提交时间" label-align="center">
                        {{ formatDateTime(orderInfo.order_submission_time, "YYYY-MM-DD HH:mm:ss") }}
                    </el-descriptions-item>
                    <el-descriptions-item label="订单付款时间" label-align="center">
                        {{ formatDateTime(orderInfo.order_pay_time, "YYYY-MM-DD HH:mm:ss") }}
                    </el-descriptions-item>
                    <el-descriptions-item label="付款方式" label-align="center">
                        <span v-if="orderInfo.order_pay_type === 1" type="danger">支付宝</span>
                        <span v-else-if="orderInfo.order_pay_type === 2" type="warning">微信</span>
                        <span v-else-if="orderInfo.order_pay_type === 3" type="warning">银行卡</span>
                        <span v-else-if="orderInfo.order_pay_type === 4" type="success">货到付款</span>
                    </el-descriptions-item>
                    <el-descriptions-item label="收货人" label-align="center">
                        {{ orderInfo.addressInfo.address_name }}
                    </el-descriptions-item>
                    <el-descriptions-item label="收货人电话" label-align="center" :span="2">
                        {{ orderInfo.addressInfo.address_tel }}
                    </el-descriptions-item>
                    <el-descriptions-item label="收货地址" label-align="center" :span="2">
                        {{
                                `${orderInfo.addressInfo.province} ${orderInfo.addressInfo.city} ${orderInfo.addressInfo.city}
                                                ${orderInfo.addressInfo.address_detail}`
                        }}
                    </el-descriptions-item>
                </el-descriptions>
                <span class="iconfont icon-weizhifu order-status-icon1" v-if="orderInfo.order_status === 0"></span>
                <span class="iconfont icon-yizhifu order-status-icon" v-else-if="orderInfo.order_status === 1"></span>
                <span class="iconfont icon-yifahuo order-status-icon " v-else-if="orderInfo.order_status === 2"></span>
                <span class="iconfont icon-yisongda order-status-icon" v-else-if="orderInfo.order_status === 3"></span>
            </div>
            <h2 class=" font-bold my-2">订单商品列表</h2>
            <el-table max-height="500" border stripe :data="orderInfo.orderDetailInfoList">
                <el-table-column width="70" label="序号" align="center">
                    <template #default="{ row, $index }">
                        {{ $index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column label="商品名称" prop="goodsInfo.goods_name" header-align="center"></el-table-column>
                <el-table-column label="商品价格" prop="goodsInfo.goods_price" align="center" width="120"></el-table-column>
                <el-table-column label="销售价格" prop="goodsInfo.goods_sale_price" align="center" width="120">
                </el-table-column>
                <el-table-column label="商品数量" prop="goods_num" align="center" width="100"></el-table-column>
            </el-table>
        </el-skeleton>
    </div>
</template>
  
<script setup>
import { ref, reactive, defineProps, onMounted } from "vue";
import API from "../../Utils/API";
import { formatDateTime } from "../../utils/DataTimeUtils";

const props = defineProps({
    orderId: {
        type: Number,
        required: true,
        default: 115
    },
});

//订单信息
const orderInfo = ref({
    orderDetailInfoList: [],
    customInfo: {},
    addressInfo: {}
});
const isLoading = ref(false);
const findById = (id) => {
    isLoading.value = true;
    API.orderInfo.findById(id).then(result => {
        orderInfo.value = result;
    }).finally(() => {
        isLoading.value = false;
    });
}
onMounted(() => {
    findById(props.orderId);
});

</script>
  
<style scoped lang="scss">
.order-status-icon {
    font-size: 52px !important;
    @apply absolute right-0 bottom-0 text-red-600  mr-20;
}
.order-status-icon1{
    font-size: 52px !important;
    @apply absolute right-0 bottom-0 text-gray-600  mr-20;
}
</style>