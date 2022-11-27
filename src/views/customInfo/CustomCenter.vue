<template>
    <main-container>
        <div class="w-full bg-gray-100">
            <custom-menu class="flex flex-row  w-[1226px] m-auto border border-solid border-black">
                <div class="right-page flex flex-row mt-20">
                    <div class="img-box ml-20">
                        <img :src="baseURL+loginClientInfo.custom_photo" alt="">
                    </div>
                    <div class="flex flex-row justify-center items-center ml-20">
                        <ul class="h-[120px] flex flex-col justify-around">
                            <li class="text-[30px]">{{ loginClientInfo.custom_realName }}</li>
                            <li>早上好~</li>
                            <li class="text-[#ff6a00]">修改个人信息</li>
                        </ul>
                    </div>
                    <div class="w-[50%] h-full right-box flex flex-col justify-center">
                        <ul class="flex w-[full] h-[120px] flex-col justify-between">
                            <li>账号安全: <span class="text-[#16a34a]">较高</span> </li>
                            <li>绑定手机: <span>{{ loginClientInfo.custom_tel }}</span> </li>
                            <li>绑定邮箱: <span>{{ loginClientInfo.custom_email }}</span> </li>
                        </ul>
                    </div>
                </div>
            </custom-menu>
        </div>
    </main-container>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import { mainStore } from "../../store/index";
const baseURL = inject("baseURL");

const store = mainStore();
const loginClientInfo = store.loginClientInfo;


console.log(loginClientInfo);


</script>


<style lang="scss" scoped>
.right-page {
    // @apply border border-solid border-black;
    position: relative;
}

.img-box {
    height: 150px;
    border-radius: 50%;
    overflow: hidden;

    img {
        height: 150px;
    }
}

.right-box {
    position: absolute;
    right: 0;
}
</style>