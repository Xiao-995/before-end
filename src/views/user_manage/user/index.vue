<template>
  <div class="table-wrapped">
    <div class="table-top">
      <div class="table-header">
        <div class="search">
          <el-input
            v-model="searchAccount"
            style="width: 240px"
            placeholder="输入账号进行搜索"
            :suffix-icon="Search"
            @change="searchAdmin"
          />
        </div>
        <div class="button">
          <el-button type="primary" @click="showAllUser">显示全部用户</el-button
          ><el-button type="warning" @click="showBanUser"
            >显示冻结用户</el-button
          >
        </div>
      </div>
      <div class="table-content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" type="index" width="70px" />
          <el-table-column prop="account" label="账号" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="sex" label="性别" width="70px" />
          <el-table-column prop="identity" label="身份" />
          <el-table-column prop="department" label="部门" />
          <el-table-column prop="email" label="邮箱" />
          <el-table-column prop="status" label="状态" width="70px">
            <template #default="{ row }">
              <div>
                <el-tag type="error" v-if="row.status == 1">冻结</el-tag>
                <el-tag type="success" v-else>正常</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="创建时间" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button type="success" @click="hot(row)">解冻</el-button>

              <el-button type="warning" @click="ban(row)">冻结</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="table-footer">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
  <create-admin
    ref="CreateAdminRef"
    @getAdminList="getAdminList"
  ></create-admin>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import CreateAdmin from "../components/create_admin.vue";
import {
  getAdminListAPI,
  deleteUserAPI,
  searchUserAPI,
} from "../../../api/userinfo";
import { ref, onMounted, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
const searchAccount = ref();
const CreateAdminRef = ref();
const tableData = ref([]);

// 获取管理员列表
const getAdminList = () => {
  const identity = "产品管理员";
  getAdminListAPI(identity).then((res) => {
    tableData.value = res.data;
  });
};

// 搜索用户
const searchAdmin = () => {
  if (searchAccount.value == "") {
    getAdminList();
  } else {
    searchUserAPI(searchAccount.value).then((res) => {
      tableData.value = res.data;
    });
  }
};
onMounted(() => {
  getAdminList();
});
</script>

<style lang="scss" scoped>
@use "@/styles/user_manage/common.scss";
</style>
