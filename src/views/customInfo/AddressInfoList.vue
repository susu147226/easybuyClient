<template>
    <div class="w-full bg-gray-100">
        <div class="right-page flex flex-row">
            <el-card class="box-card w-[1006px] h-full min-h-[500px]">
                <template #header>
                    <div class="card-header flex flex-row justify-between">
                        <span>我的收货地址</span>
                        <el-button class="button" text><span style="color: #ff6700;">新增地址</span></el-button>
                    </div>
                </template>
                <!-- <div v-for="o in 3" :key="o" class="text item">{{ 'List item ' + o }}</div> -->

                <template #default>


                    <el-table border :data="resultData.listData" stripe style="width: 100%">
                        <el-table-column label="收件人姓名" prop="address_name" width="180" />
                        <el-table-column label="收件人电话" prop="address_tel" width="180" />
                        <el-table-column label="收货地址">
                            <template #default="{ row }">

                                <ul class="flex flex-row justify-start items-center">
                                    <li>{{ row.province }}</li>
                                    <li class="ml-10">{{ row.city }}</li>
                                    <li class="ml-10">{{ row.area }}</li>
                                    <li class="ml-10">{{ row.address_detail }}</li>
                                </ul>
                                <!-- {{row.province+row.city+row.area+row.address_detail}} -->

                            </template>

                        </el-table-column>

                        <el-table-column label="地址标签" align="center" width="130px">
                            <template #default="{ row }">
                                <el-tag>
                                    {{ row.address_tag }}
                                </el-tag>
                            </template>
                        </el-table-column>

                        <el-table-column label="操作" width="130px">
                            <template #default="{ row }">
                                <el-popconfirm @confirm="deleteCurrentAddress(row.id)" confirm-button-text="确定"
                                    cancel-button-text="取消" :icon="InfoFilled" icon-color="#626AEF" title="确定删除吗?">
                                    <template #reference>
                                        <el-button type="danger" size="small">删除
                                        </el-button>
                                    </template>
                                </el-popconfirm>
                            </template>
                        </el-table-column>

                    </el-table>

                    <!--页码-->

                    <div class="flex flex-row justify-between items-center mt-[10px]">
                        <div class="text-[14px]">当前第{{ queryFormData.pageIndex }}页，共{{
                                resultData.pageCount
                        }}页，共{{ resultData.totalCount }}条
                        </div>
                        <el-pagination background layout="prev, pager, next" :total="resultData.totalCount"
                            @current-change="currentChange" />
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { mainStore } from "../../store/index";
import { InfoFilled } from "@element-plus/icons-vue";
import API from "../../Utils/API";
import { onMounted, inject } from "vue";
import { ElMessage } from 'element-plus'


// const baseURL = inject("baseURL");

const queryFormData = reactive({
    pageIndex: 1,
    address_name: "",
    address_tel: "",
    address_info: "",
    address_tag: "",
})

const resultData = reactive({
    listData: [],
    pageCount: 0,
    totalCount: 0
})
//查询操作，拉数据
const queryData = async () => {
    let result = await API.addressInfo.getMyAddressInfoList({ pageIndex: queryFormData.pageIndex });
    // console.log(result);

    resultData.listData = result.listData;
    resultData.pageCount = result.pageCount;
    resultData.totalCount = result.totalCount;

}

onMounted(() => {
    queryData();
})

//页码发生变化

const currentChange = (index) => {
    queryFormData.pageIndex = index;
    queryData();
}


const deleteCurrentAddress = async (id) => {
    console.log(id);
    let result = await API.addressInfo.deleteById({ id: id });
    queryData();
    ElMessage({
        message: '删除成功',
        type: 'success',
    })
}

</script>


<style lang="scss" scoped>

</style>