<template>
    <el-form :model="addressFormData" :rules="addressFormDataRules" ref="addressFormEl">
        <el-form-item prop="address_name">
            <el-input v-model="addressFormData.address_name" placeholder="请输入收货人姓名" />
        </el-form-item>
        <el-form-item prop="address_tel">
            <el-input v-model="addressFormData.address_tel" placeholder="请输入联系电话" />
        </el-form-item>
        <el-form-item prop="selectedAddress">
            <el-cascader :props="area_info_props" style="width: 100%" separator=" " placeholder="请点击选择地址"
                v-model="addressFormData.selectedAddress">
            </el-cascader>
        </el-form-item>
        <el-form-item prop="address_detail">
            <el-input type="textarea" placeholder="请输入详细地址" v-model="addressFormData.address_detail"></el-input>
        </el-form-item>
        <el-form-item prop="address_tag">
            <el-input placeholder="请输入地址标签" v-model="addressFormData.address_tag" />
        </el-form-item>
        <el-form-item>
            <el-button class="btn-save" @click="submitForm" :loading="isSubmitLoading">保存</el-button>
            <el-button type="info" @click="closeDialog">关闭</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script setup>
import { reactive, ref, watch, defineEmits } from "vue";
import API from "../../Utils/API";
import { ElMessage } from "element-plus";

const emit = defineEmits(["closeDialog"])
const addressFormData = reactive({
    address_name: "",
    address_tel: "",
    area: "",
    city: "",
    province: "",
    address_detail: "",
    address_tag: "",
    selectedAddress: []
})
const addressFormEl = ref({});
const addressFormDataRules = {
    address_name: [{ required: true, message: "收件人姓名不能为空", trigger: "blur" }],
    address_tel: [{ required: true, message: "联系电话不能为空", trigger: "blur" }],
    selectedAddress: [{ required: true, message: "请选择地址", trigger: "change" }],
    address_detail: [{ required: true, message: "详细地址不能为空", trigger: "change" }],
    address_tag: [{ required: true, message: "地址标签不能为空", trigger: "change" }],
}

watch(() => addressFormData.selectedAddress, (val) => {
    addressFormData.province = val[0];
    addressFormData.city = val[1];
    addressFormData.area = val[2];
    // console.log(addressFormData)
}, {
    deep: true
})

/**
 *  省市区级联
 */
const area_info_props = {
    lazy: true,
    async lazyLoad(node, resolve) {
        let { level, data } = node;
        let parentId = data.id ? data.id : -1;
        let results = await API.areaInfo.getListByParentId(parentId);
        // console.log(results);
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

// 提交表单
const submitForm = () => {
    addressFormEl.value.validate((valid) => {
        if (valid) {
            saveData();
        } else {
            // console.log('error submit!!')
            return false
        }
    })
}

/**
 * 保存数据
 */
const isSubmitLoading = ref(false);
const saveData = () => {
    isSubmitLoading.value = true;
    API.addressInfo.addMyAddressInfo({
        ...addressFormData,
        selectedAddress: null
    }).then(() => {
        ElMessage.success("保存成功");
        emit("closeDialog");
    })
        .finally(() => {
            isSubmitLoading.value = false;
        })
}


const closeDialog = () => {
    emit("closeDialog");
}
</script>
  
<style scoped lang="scss">
:deep(.el-input__inner) {
    border-radius: 0;
    padding: 15px;
    height: 50px;
}

:deep(.el-textarea__inner) {
    border-radius: 0;
    height: 100px;
}

:deep(.el-button) {
    border-radius: 0;
    height: 40px;
    min-width: 120px;
}

.btn-save {
    background-color: #ff6700;
    color: white;
    outline: none;
    border: none;
}
</style>