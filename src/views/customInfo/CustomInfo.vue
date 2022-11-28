<template>
    <div class="box-border p-[20px]">
        <div class="flex flex-row items-center border-b border-solid border-gray-200 py-[20px]">
            <div class="flex-1 flex flex-row items-center pl-10">
                <img :src="baseURL + loginClientInfo.custom_photo"
                    class="w-[140px] h-[140px] rounded-full border border-solid border-gray-200 p-1" alt="">
                <div class="text-[12px] leading-8 ml-20">
                    <div class="text-[22px]">{{ loginClientInfo.custom_realName }}</div>
                    <div class="text-gray-500">您好~</div>
                    <div class="text-primaryColor">修改个人信息</div>
                </div>
            </div>
            <ul class="flex-1 right-info">
                <li>
                    <div>账号安全：</div>
                    <span class="text-green-600">较高</span>
                </li>
                <li>
                    <div>绑定手机：</div>
                    {{ maskTel(loginClientInfo.custom_tel) }}
                </li>
                <li>
                    <div>绑定邮箱：</div>
                    {{ maskEmail(loginClientInfo.custom_email) }}
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>
import { mainStore } from "../../store"
import { storeToRefs } from "pinia"
import { ref, reactive, inject } from "vue"
import { maskEmail, maskTel } from "../../utils/StringUtils"
const baseURL = inject("baseURL");


const store = mainStore();
const { loginClientInfo } = storeToRefs(store);

</script>


<style lang="scss" scoped>
.right-info {
    @apply text-gray-600;

    >li {
        @apply flex flex-row text-[14px] leading-8;

        >div {
            width: 80px;
        }
    }
}
</style>