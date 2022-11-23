<template>
    <page-login>
        <page-view>
            <div class="flex flex-1 justify-center items-center mt-[10%]">
                <div class="w-[500px] border border-solid ">
                    <div class="m-[20px]">
                        <div class="flex justify-between items-center mt-[50px]">
                            <h2 class="h2">欢迎登录</h2>
                            <el-link type="primary">去注册</el-link>
                        </div>
                        <el-form class="mt-[40px] mb-[20px]">
                            <el-form-item>
                                <el-input size="large" placeholder="邮箱/手机号"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input size="large" placeholder="密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-checkbox :v-model="!isagree" label="已同意并阅读小米账号 用户协议 和 隐私政策" name="type" />
                            </el-form-item>
                            <el-form-item>
                                <el-button class="w-full" size="large" color="#ff8a00">
                                    <span class="text-white font-bold">登录系统</span>
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </page-view>
    </page-login>

</template>
<script setup>
import { ref } from "vue";

const isagree = ref(false);
</script>
<style scoped lang="scss">
.h2 {
    font-size: 28px;
    font-weight: normal;
}
</style>    