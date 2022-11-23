<template>
    <page-login>
        <page-view>
            <div class="flex flex-1 justify-center items-center mt-[10%]">
                <div class="w-[500px] bg-white shadow-2xl">
                    <div class="m-[20px]">
                        <div class="flex justify-between items-center mt-[50px]">
                            <h2 class="h2">欢迎登录</h2>
                            <el-link type="primary" @click="$router.push(name = 'Register')">去注册</el-link>
                        </div>
                        <el-form :model="customInfo" :rules="customInfoRules" class="mt-[40px] mb-[20px]"
                            ref="loginFormEl">
                            <el-form-item prop="zh">
                                <el-input v-model="customInfo.zh" size="large" placeholder="邮箱/手机号"></el-input>
                            </el-form-item>
                            <el-form-item prop="custom_pwd">
                                <el-input v-model="customInfo.custom_pwd" size="large" placeholder="密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-checkbox v-model="isagree" label="已同意并阅读小米账号 用户协议 和 隐私政策" name="type" />
                            </el-form-item>
                            <el-form-item>
                                <el-button :disabled="!isagree" :loading-icon="Loading" :loading="isLoading"
                                    class="w-full" size="large" color="#ff8a00" @click="submitLoginForm">
                                    <span class="text-white font-bold">{{ isLoading ? '正在登录...' : '登 录' }}</span>
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
import { ref, reactive } from "vue";
import { ElementPlus, Loading } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

import API from "../Utils/API";
import { mainStore } from "../store";
import { useRouter } from "vue-router";

const isagree = ref(false);

//路由管理对象
const router = useRouter();

const isLoading = ref(false);

const store = mainStore();

const customInfo = reactive({
    zh: "13811111111",
    custom_pwd: "123456",
});

const customInfoRules = {
    zh: [
        { required: true, message: "请输入账号", trigger: "blur" }
    ],
    custom_pwd: [
        { required: true, message: "请输入密码", trigger: "blur" }
    ]
};

const loginFormEl = ref(null);

const submitLoginForm = () => {
    loginFormEl.value.validate(valid => {
        if (valid) {
            console.log("验证成功");
            checkLogin();
        } else {
            console.log("验证失败");
        }
    });
};

const checkLogin = () => {
    API.customInfo.checkLogin(customInfo).then(res => {
        console.log(res);
        store.setToken(res.token);
        store.setLoginClientInfo(res.loginClientInfo);

        ElMessage({
            showClose: true,
            message: "登录成功",
            type: "success",
        });

        router.replace({
            name: "HomePage"
        });
    }).catch(err => {
        console.log(err);
    }).finally(() => {

    })
}

</script>
<style scoped lang="scss">
.h2 {
    font-size: 28px;
    font-weight: normal;
}
</style>    