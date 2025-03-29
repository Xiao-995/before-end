<template>
  <div class="account-info-wrapped">
    <span>公司名称：</span>
    <div class="account-info-content">
      <el-input v-model="companyName"></el-input>
    </div>
    <div class="account-save-button">
      <el-button type="primary" @click="resetCompanyName"
        >修改公司名称</el-button
      >
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司介绍：</span>
    <div class="account-info-content">
      <el-button type="success" @click="openEdiotr(1)"> 编辑公司介绍</el-button>
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司架构：</span>
    <div class="account-info-content">
      <el-button type="success" @click="openEdiotr(2)"> 编辑公司架构</el-button>
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司战略：</span>
    <div class="account-info-content">
      <el-button type="success" @click="openEdiotr(3)"> 编辑公司战略</el-button>
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司高层：</span>
    <div class="account-info-content">
      <el-button type="success" @click="openEdiotr(4)"> 编辑公司高层</el-button>
    </div>
  </div>
  <editor ref="editorRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import editor from "./components/editor.vue";
import { getCompanyNameAPI, changeCompanyNameAPI } from "../../../api/stting";
import { bus } from "@/utils/mitt.js";
import { ElMessage } from "element-plus";
// 公司名称输入框
const companyName = ref();
const editorRef = ref();
const openEdiotr = (id: number) => {
  bus.emit("editorTitle", id);
  editorRef.value.open();
};
// 修改公司名称
const resetCompanyName = () => {
  changeCompanyNameAPI(companyName.value).then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
  });
};
// 获取公司名称
onMounted(() => {
  getCompanyNameAPI().then((res) => {
    companyName.value = res.data;
  });
});
</script>

<style lang="scss" scoped>
.account-info-wrapped {
  display: flex;
  align-items: center;
  padding-left: 40px;
  margin-bottom: 20px;
  // 内容
  .account-info-content {
    display: flex;
    margin-left: 12px;
    margin-right: 16px;
  }
}
</style>
