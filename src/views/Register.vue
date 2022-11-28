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
                        <el-form :model="customInfoData" :rules="customInfoDataRules" class="mt-[15px]"
                            label-width="80px" ref="formEl">
                            <el-form-item label="用户昵称" prop="custom_realName">
                                <el-input placeholder="请输入用户昵称" v-model="customInfoData.custom_realName"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="custom_pwd">
                                <el-input type="password" v-model="customInfoData.custom_pwd" placeholder="请输入密码">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="confirm_pwd">
                                <el-input type="password" v-model="customInfoData.confirm_pwd" placeholder="请确认密码">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="手机号码" prop="custom_tel">
                                <el-input placeholder="请输入手机号码" v-model="customInfoData.custom_tel"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱" prop="custom_email">
                                <el-input placeholder="请输入邮箱" v-model="customInfoData.custom_email"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" prop="custom_sex">
                                <el-select placeholder="请选择性别" v-model="customInfoData.custom_sex" class="w-full">
                                    <el-option label="男" value="男"></el-option>
                                    <el-option label="女" value="女"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="生日" prop="custom_birthday">
                                <el-date-picker v-model="customInfoData.custom_birthday" type="date"
                                    placeholder="生日当天会有意外小惊喜哦~" value-format="YYYY/MM/DD" />
                            </el-form-item>
                            <el-form-item label="用户地址" prop="custom_addr">
                                <el-cascader :props="areaInfoProps" style="width: 100%" separator=" "
                                    placeholder="点击选择地址，您后期购物会就近仓库发送货物哦" v-model="customInfoData.custom_addr">
                                </el-cascader>
                            </el-form-item>
                            <el-form-item label="用户头像" prop="custom_photo">
                                <el-upload v-loading="isUploadingImg" element-loading-text="正在上传图片" name="custom_photo"
                                    :headers="{ easybuy_clietn_token: store.token }"
                                    class="w-full h-[100px] border border-dashed border-gray-200 flex flex-row justify-center items-center"
                                    :before-upload="beforeUpload" :show-file-list="false" :on-success="uploadSuccess">
                                    <img v-if="customInfoData.custom_photo" :src="baseURL + customInfoData.custom_photo"
                                        class="object-contain w-full h-full object-center" alt="">
                                    <template v-else>
                                        <el-icon class="el-icon--upload">
                                            <upload />
                                        </el-icon>
                                        <div class="el-upload__text">
                                            拖入图片 或 <em>点击选择图片上传</em>,不超过10M
                                        </div>
                                    </template>
                                </el-upload>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="w-full" color="#409eff" @click="submitForm" :loading="isSubmiting">
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
import { Upload } from "@element-plus/icons-vue"
import { ref, reactive, inject } from "vue";
import { ElMessage } from "element-plus";
import API from "../Utils/API";
import { mainStore } from "../store";
import { useRouter } from "vue-router"

const isagree = ref(false);

const sex = ref(true);

const value1 = ref("");

const store = mainStore();
const baseURL = inject("baseURL");
const router = useRouter();

const customInfoData = reactive({
    custom_realName: "",
    custom_pwd: "",
    custom_tel: "",
    confirm_pwd: "",
    custom_email: "",
    custom_sex: "",
    custom_birthday: "",
    custom_addr: "",
    custom_photo: "",
});

//验证规则
const customInfoDataRules = {
    custom_realName: [{
        required: true,
        message: "请输入昵称",
        trigger: "blur",
    }],
    custom_pwd: [{
        required: true,
        message: "请输入密码",
        trigger: "blur",
    }],
    confirm_pwd: [{
        required: true,
        message: "密码不能为空",
        trigger: "blur"
    },
    {
        validator: (rule, value, callback) => {
            if (value === customInfoData.custom_pwd) {
                callback();
            } else {
                callback(new Error("两次密码不一致"));
            }
        }, trigger: "blur"
    }],
    custom_tel: [{
        required: true,
        message: "手机号不能为空",
        trigger: "blur"
    },
    {
        validator: async (rule, value, callback) => {
            if (value.length === 11 && /^1[3-9]\d{9}$/.test(value)) {
                let { data } = await API.customInfo.validateCustomTelExists(value);
                if (data === true) {
                    callback(new Error("手机号已存在"));
                } else {
                    callback()
                }
            } else {
                callback(new Error("手机号格式不正确"));
            }
        }, trigger: "blur"
    }],
    custom_email: [{
        required: true,
        message: "邮箱不能为空",
        trigger: "blur"
    },
    {
        validator: async (rule, value, callback) => {
            const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (reg.test(value)) {
                let { data } = await API.customInfo.validateCustomEmailExists(value);
                if (data === true) {
                    callback(new Error("邮箱已存在"));
                } else {
                    callback()
                }
            } else {
                callback(new Error("邮箱格式不正确"));
            }
        }, trigger: "blur"
    }],
    custom_sex: [{
        required: true,
        message: "请选择性别",
        trigger: "blur",
    }],
    custom_birthday: [{
        required: true,
        message: "请选择生日",
        trigger: "blur",
    }],
    custom_addr: [{
        required: true,
        message: "请选择地址",
        trigger: "blur",
    }],
    custom_photo: [{
        required: true,
        message: "请上传头像",
        trigger: "blur",
    }],
};

/**
 *  省市区级联
 */
const areaInfoProps = {
    lazy: true,
    async lazyLoad(node, resolve) {
        let { level, data } = node;
        let parentId = data.id ? data.id : -1;
        let results = await API.areaInfo.getListByParentId(parentId);
        console.log(results);
        const nodes = results.map((item) => {
            return {
                value: item.areaName,
                label: item.areaName,
                id: item.id,
                leaf: level >= 2,
            };
        });
        resolve(nodes);
    }
};

//用户注册方法
const isSubmiting = ref(false);
const registerCustom = () => {
    isSubmiting.value = true;
    API.customInfo.register(customInfoData).then(res => {
        ElMessage({
            showClose: true,
            message: "登录注册成功",
            type: "success",
        });
        router.replace({ name: "Login" });
    }).catch(err => {
        ElMessage({
            showClose: true,
            message: "注册失败，请检查网络情况或联系客服",
            type: "warning",
        });
        console.log(err);
    }).finally(() => {
        isSubmiting.value = false;
    });
};

//上传图片之前的操作
const isUploadingImg = ref(false);
const beforeUpload = (rawFile) => {
    let reg = /^image\/(jpe?g|png|webp|gif|bmp)$/;
    if (reg.test(rawFile.type)) {
        if (rawFile.size / 1024 / 1024 > 10) {
            //图片大于10M
            ElMessage({
                showClose: true,
                message: "图片大小不能大于10M",
                type: "error",
            });
            return false;
        } else {
            isUploadingImg.value = true;
        }
    } else {
        ElMessage({
            showClose: true,
            message: "请重新选择图片，格式必须是jpg，jpeg，png，webp，gif，bmp格式",
            type: "error",
        });
        return false;
    }
};

//图片上传成功后
const uploadSuccess = (res) => {
    console.log(res);
    customInfoData.custom_photo = res.data;
    isUploadingImg.value = false;
};

//提交注册表单
const formEl = ref(null);
const submitForm = () => {
    formEl.value.validate(valid => {
        if (valid) {
            registerCustom();
        } else {
            ElMessage({
                showClose: true,
                message: "请正确填写表单内容。",
                type: "error",
            });
        }
    });
};

</script>
<style scoped lang="scss">
.h2 {
    font-size: 22px;
    font-weight: normal;
}

:deep(.el-date-editor) {
    width: 100%;
}

.user-upload-box {
    width: 200px;
    height: 200px;
}
</style>    