<template>
    <div class="page-login flex flel-row">
        <img class="bg-img " src="../assets/img/登录注册背景.jpg"
            alt="">
        <div class="left-form flex-1 flex flex-col">
            <div class="top-bar h-[55px] flex flex-row justify-between items-center">
                <img src="../assets/img/Logo.png" @click="$router.push({ name: 'HomePage' })" alt="" class=" cursor-pointer w-[40px] h-[40px] ml-20">
                <div class="flex flex-row justify-evenly items-center w-[320px]">
                    <el-link :underline="false">用户协议</el-link>
                    <el-link :underline="false">隐私政策</el-link>
                    <el-link :underline="false">帮助中心</el-link>
                    <el-link :underline="false">中文简体</el-link>
                </div>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
  
<script setup>

</script>
  
<style scoped lang="scss">
.page-login {
    width: 100%;
    height: 100%;
    overflow: auto;

    .bg-img {
        width: 400px;
    }
}
</style>