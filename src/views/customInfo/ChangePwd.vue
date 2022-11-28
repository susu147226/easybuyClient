<template>
    <el-card header="修改密码">
        <el-form :model="changePwdFormData" label-width="80px" ref="changePwdFormEl" :rules="changePwdFormRules">
            <el-form-item label="用户">
                <el-input readonly placeholder="用户" v-model="loginClientInfo.custom_realName"></el-input>
            </el-form-item>
            <el-form-item label="原密码" prop="oldPassword">
                <el-input v-model="changePwdFormData.oldPassword" placeholder="原密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input v-model="changePwdFormData.newPassword" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input v-model="changePwdFormData.confirmPassword" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="isLoading" @click="submitChangePwdFormEl">提交</el-button>
                <el-button @click="resetFormData">重置</el-button>
            </el-form-item>
        </el-form>

    </el-card>


</template>


<script setup>
import { ref, reactive } from "vue";
import { mainStore } from "../../store";
import { storeToRefs } from "pinia";
import API from "../../Utils/API";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router"

const router = useRouter();
const store = mainStore();
const { loginClientInfo } = storeToRefs(store);

const changePwdFormEl = ref(null);

const changePwdFormData = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
})

// 表单的验证
const changePwdFormRules = {
    oldPassword: [
        { required: true, message: "请输入原密码", trigger: 'blur' }
    ],
    newPassword: [
        { required: true, message: '请输入新密码', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, message: '请确认新密码', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== changePwdFormData.newPassword) {
                    callback(new Error('两次输入的密码不一致'));
                } else {
                    callback();
                }
            }, trigger: 'blur'
        }
    ]
}


const submitChangePwdFormEl = () => {
    changePwdFormEl.value.validate(valid => {
        if (valid) {
            savePwdData();
        }
        else {
            return false;
        }
    })
}

const isLoading = ref(false);
const savePwdData = () => {
    isLoading.value = true;
    API.customInfo.uploadMyPassword(changePwdFormData)
        .then(result => {
            ElMessageBox.alert("修改密码成功", "提示", {
                type: "success"
            })
        }).finally(() => {
            changePwdFormData.oldPassword = '';
            changePwdFormData.newPassword = '';
            changePwdFormData.confirmPassword = '';
            isLoading.value = false;
        })

}


// 重置表单内容
const resetFormData = () => {
    changePwdFormEl.value.resetFields();
}
</script>



<style scoped lang="scss">

</style>