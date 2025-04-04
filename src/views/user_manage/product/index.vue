<template>
  <div class="table-wrapped">
    <div class="table-top">
      <div class="table-header">
        <div class="search">
          <el-input
            v-model="search"
            style="width: 240px"
            placeholder="输入账号进行搜索"
            :suffix-icon="Search"
          />
        </div>
        <div class="button">
          <el-button type="primary" @click="addProduct"
            >添加产品管理员</el-button
          >
        </div>
      </div>
      <div class="table-content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" type="index" />
          <el-table-column prop="account" label="账号" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="department" label="部门" />
          <el-table-column prop="email" label="邮箱" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button type="primary">编辑</el-button>
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="table-footer">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
  <create-admin ref="CreateAdminRef" title="产品管理员"></create-admin>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import CreateAdmin from "../components/create_admin.vue";
import { ref } from "vue";
const search = ref();
const CreateAdminRef = ref();
const tableData = ref([
  {
    id: 1,
  },
]);
const addProduct = () => {
  CreateAdminRef.value.openDialog();
};
</script>

<style lang="scss" scoped>
@use "@/styles/user_manage/common.scss";
</style>
