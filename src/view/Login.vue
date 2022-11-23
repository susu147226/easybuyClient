<template>
    <page-login>
        <page-view>
            <div class="flex flex-1 justify-center items-center mt-[8%]">
                <div class="w-[500px] h-[450px] border border-solid ">
                    <div class="m-[20px]">
                        <div class="flex justify-between items-center mt-[50px]">
                            <h2 class="h2">欢迎登录</h2>
                            <el-link type="primary">去注册</el-link>
                        </div>
                        <el-form class="mt-[40px]">
                            <el-form-item>
                                <el-input placeholder="邮箱/手机号"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-checkbox-group>
                                    <el-checkbox label="已同意并阅读小米账号 用户协议 和 隐私政策" name="type" />
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="w-full" type='warning'>登录系统</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </page-view>
    </page-login>

</template>
<script setup>

</script>
<style scoped lang="scss">
.h2 {
    font-size: 28px;
    font-weight: normal;
}
</style>    