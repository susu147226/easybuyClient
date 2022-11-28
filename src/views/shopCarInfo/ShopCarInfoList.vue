<template>
    <page-view>
        <shop-car>
            <div>
                <el-table>
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column label=" 商品图片"></el-table-column>
                    <el-table-column label=" 商品名称"></el-table-column>
                    <el-table-column label=" 单价"></el-table-column>
                    <el-table-column label=" 数量"></el-table-column>
                    <el-table-column label=" 小计"></el-table-column>
                    <el-table-column label=" 操作"></el-table-column>
                </el-table>
            </div>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row">
                    <span>继续购物</span>
                    <span>|</span>
                    <div>已选择 <span>0</span> 件商品</div>
                </div>
                <div class="flex flex-row">
                    <div>合计：<span>0.00 元</span></div>
                    <el-button>去结算</el-button>
                </div>
            </div>
        </shop-car>
    </page-view>
</template>
<script setup>
import { Close } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import API from "../../Utils/API";
import { useRoute, useRouter } from "vue-router";

</script>
<style scoped lang="scss">

</style>