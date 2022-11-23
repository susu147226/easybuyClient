<template>
    <page-login>
        <page-view>
            <div class="flex flex-1 justify-center items-center">
                <div class="w-[500px] bg-white shadow-2xl">
                    <div class="m-[20px]">
                        <div class="flex justify-between items-center">
                            <h2 class="h2">欢迎注册</h2>
                            <el-link type="primary" @click="$router.push(name = 'Login')">去登录</el-link>
                        </div>
                        <el-form class="mt-[15px]" label-width="80px">
                            <el-form-item label="用户昵称">
                                <el-input placeholder="请输入用户昵称"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input type="password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码">
                                <el-input type="password" placeholder="请确认密码"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码">
                                <el-input placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱">
                                <el-input placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-select placeholder="请选择性别" class="w-full">
                                    <el-option label="男" value="男"></el-option>
                                    <el-option label="女" value="女"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="生日">
                                <el-date-picker class="w-full" v-model="value1" type="datetime"
                                    placeholder="生日当天会有意外小惊喜哦~" format="YYYY/MM/DD HH:mm:ss" />
                            </el-form-item>
                            <el-form-item label="用户地址">
                                <el-select v-model="value" class="w-full" placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="用户头像" prop="admin_photo">
                                <el-upload v-loading="isUploadingImg" element-loading-text="正在上传图片" name="admin_photo"
                                    class="w-full h-[100px] border border-dashed border-gray-400 flex flex-row justify-center items-center"
                                    :before-upload="beforeUpload" :show-file-list="false" :on-success="uploadSuccess">
                                    <el-image fit="contain" class="w-full h-full" lazy>
                                        <template #placeholder>
                                            <div
                                                class="text-primaryColor text-[14px] w-full h-full flex flex-row justify-center items-center">
                                                正在加载图片...
                                            </div>
                                        </template>
                                    </el-image>
                                    <el-icon size="65px" color="lightgray">
                                        <Picture />
                                    </el-icon>
                                </el-upload>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="w-full" color="#409eff">
                                    <span class="text-white font-bold">注册</span>
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
import { UploadFilled, Picture } from "@element-plus/icons-vue"
import { ref } from "vue";
import API from "../Utils/API";

const isagree = ref(false);

const sex = ref(true);
const value1 = ref("");


</script>
<style scoped lang="scss">
.h2 {
    font-size: 22px;
    font-weight: normal;
}

:deep(.el-date-editor--datetime) {
    width: 100%;
}
</style>    