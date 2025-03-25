<template>
  <div class="account-info-wrapped">
    <span>公司名称：</span>
    <div class="account-info-content">
      <el-input v-model="company"></el-input>
    </div>
    <div class="account-save-button">
      <el-button type="primary">保存</el-button>
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司介绍：</span>
    <div class="account-info-content">
      <el-button type="success"> 编辑公司介绍</el-button>
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司架构：</span>
    <div class="account-info-content">
      <el-button type="success"> 编辑公司架构</el-button>
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司战略：</span>
    <div class="account-info-content">
      <el-button type="success"> 编辑公司战略</el-button>
    </div>
  </div>
  <div class="account-info-wrapped">
    <span>公司高层：</span>
    <div class="account-info-content">
      <el-button type="success"> 编辑公司高层</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const company = ref();
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
