<template>
    <page-view>
        <div class="py-20 border-b-2 border-solid my-shop-car-header w-[1226px] m-auto">
            <div class=" m-auto flex flex-row items-end">
                <img src="../assets/img/Logo.png" class="w-[56px] h-[56px] cursor-pointer"
                    @click="$router.replace({ name: 'HomePage' })" alt="">
                <div class="flex-1 ml-10 flex flex-row items-baseline">
                    <div class="text-[22px]">我的购物车</div>
                    <p class="text-[12px] ml-2 text-gray-400">温馨提示：产品是否购买成功，是以最终下单为准哦，请尽快结算</p>
                </div>
                <div class="flex flex-row items-center">
                    <el-dropdown @command="dropdownCommand">
                        <span class="el-dropdown-link text-gray-500 font-bold">
                            {{ loginClientInfo.custom_realName }}
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="CustomCenter">人个中心</el-dropdown-item>
                                <el-dropdown-item divided command="logOut">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <div class="mx-2 text-gray-400">|</div>
                    <div class="ml-5 hover:text-primaryColor text-gray-600 text-sm cursor-pointer" @click="$router.replace({name:'OrderInfoList'})">我的订单</div>
                </div>
            </div>
        </div>
        <div class="container">
            <slot></slot>
        </div>
    </page-view>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router"
import { ArrowDown } from "@element-plus/icons-vue";
import { mainStore } from "../store"
import { storeToRefs } from "pinia"
import { ElMessageBox } from "element-plus"
const store = mainStore();

const { loginClientInfo } = storeToRefs(store);

const router = useRouter();
/**
 * 右上角的下拉菜单点击以后的事件
 */
const dropdownCommand = (command) => {
    if (command === "CustomCenter") {
        router.push({ name: "CustomInfo" })
    } else if (command === "logOut") {
        clientLogOut();
    }

}
/**
 * 退出登录
 */
const clientLogOut = () => {
    ElMessageBox.confirm("确定要退出登录吗？", "询问", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
    })
        .then(() => {
            store.logOut();
            router.replace({
                name: "HomePage"
            })
        })
        .catch(() => {
            console.log("取消退出登录");
        })
}

</script>
<style scoped lang="scss">
.my-shop-car-header {
    border-color: #ff6a00;
}

.container {
    width: 1226px;
    margin: auto;
}
</style>