<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="item in 4">
      <div class="company-message-area">
        <span>公司介绍</span>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.company-message-area {
  background-color: #f5f5f5;
  height: 160px;
  padding: 8px;
  cursor: pointer;

  span {
    border-bottom: 3px solid #409eff;
    padding-bottom: 5px;
    font-size: 14px;
  }
}
.company-message-area:hover {
  cursor: pointer;
  background-color: #eef5f5;
}
</style>
