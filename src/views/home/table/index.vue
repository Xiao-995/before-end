<template>
  <div class="comany-notice">
    <span class="title">公司公告</span>
    <el-table :data="tableData" style="width: 100%" :show-header="false">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
  <div class="system-message">
    <span class="title">系统消息</span>
    <el-table :data="tableData" style="width: 100%" :show-header="false">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style lang="scss" scoped>
// scss混合语法
@mixin table-class {
  height: 240px;
  width: 48%;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 14px;
    margin-bottom: 5px;
    border-bottom: 2px solid #ea0709;
  }
}
.comany-notice {
  @include table-class();
}
.system-message {
  @include table-class();
}
</style>
