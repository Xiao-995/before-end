<template>
  <div class="table-wrapped">
    <div class="table-top">
      <div class="table-header">
        <div class="search">
          <div class="search-account">
            <el-input
              v-model="searchAccount"
              style="width: 240px"
              placeholder="输入账号进行搜索"
              :suffix-icon="Search"
              @change="searchAdmin"
            />
          </div>
          <div class="search-department">
            <el-select
              v-model="Sdepartment"
              placeholder="请选择部门"
              clearable
              @change="searchDepartment"
            >
              <el-option
                v-for="(item, index) in departmentData"
                :key="index"
                :label="item"
                :value="item"
                clearable
              ></el-option>
            </el-select>
          </div>
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
          <el-table-column prop="name" label="姓名" width="120px" />
          <el-table-column prop="sex" label="性别" width="70px" />
          <el-table-column prop="identity" label="身份" />
          <el-table-column prop="department" label="部门" width="120px" />
          <el-table-column prop="email" label="邮箱" />
          <el-table-column prop="status" label="状态" width="70px">
            <template #default="{ row }">
              <div>
                <el-tag type="danger" v-if="row.status == 1">冻结</el-tag>
                <el-tag type="success" v-else>正常</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="创建时间">
            <template #default="{ row }">
              {{ row.create_time.slice(0, 10) }}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button type="success" @click="hotUser(row.id)"
                >解冻</el-button
              >

              <el-button type="warning" @click="banUser(row.id)"
                >冻结</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="table-footer">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import {
  searchUserAPI,
  getUserListAPI,
  getDepartmentListAPI,
  getBanUsersAPI,
  banUserAPI,
  hotUserAPI,
} from "../../../api/userinfo";
import { getDepartmentAPI } from "../../../api/stting";
import { ref, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
const tableData = ref([]); // 表单数据
const searchAccount = ref();
const Sdepartment = ref();

// 获取用户列表
const getAdminList = () => {
  getUserListAPI().then((res) => {
    tableData.value = res.data;
  });
};

// 账号搜索用户
const searchAdmin = () => {
  if (searchAccount.value == "") {
    getAdminList();
  } else {
    searchUserAPI(searchAccount.value).then((res) => {
      tableData.value = res.data;
    });
  }
};

// 获取部门
const departmentData = ref([]);
const getDepartment = () => {
  getDepartmentAPI().then((res) => {
    departmentData.value = res.data;
  });
};

// 部门搜索用户
const searchDepartment = (value: any) => {
  if (value === undefined) {
    getAdminList();
  } else {
    getDepartmentListAPI(value).then((res) => {
      tableData.value = res.data;
    });
  }
};

// 显示所有用户
const showAllUser = () => {
  getAdminList();
};

// 显示冻结用户
const showBanUser = () => {
  getBanUsersAPI().then((res) => {
    tableData.value = res.data;
  });
};

// 解冻用户
const hotUser = (id: number) => {
  ElMessageBox.confirm("是否解冻用户", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    hotUserAPI(id).then(() => {
      ElMessage({
        type: "success",
        message: "冻结成功",
      });
      getAdminList();
    });
  });
};

// 冻结用户
const banUser = (id: number) => {
  ElMessageBox.confirm("是否冻结用户", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    banUserAPI(id).then(() => {
      ElMessage({
        type: "success",
        message: "冻结成功",
      });
      getAdminList();
    });
  });
};
onMounted(() => {
  getAdminList();
  getDepartment();
});
</script>

<style lang="scss" scoped>
@use "@/styles/user_manage/common.scss";
.search {
  display: flex;
  .search-department {
    width: 240px;
    padding: 0 20px;
  }
}
</style>
