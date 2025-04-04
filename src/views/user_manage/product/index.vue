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
          <el-table-column label="序号" type="index" width="100px" />
          <el-table-column prop="account" label="账号" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="department" label="部门" />
          <el-table-column prop="email" label="邮箱" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button type="primary" @click="edit(row)">编辑</el-button>
              <el-button type="danger" @click="deleteAdmin(row)"
                >删除</el-button
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
  <create-admin
    ref="CreateAdminRef"
    @getAdminList="getAdminList"
  ></create-admin>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import CreateAdmin from "../components/create_admin.vue";
import { getAdminListAPI, deleteUserAPI } from "../../../api/userinfo";
import { ref, onMounted, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
const search = ref();
const CreateAdminRef = ref();
const tableData = ref([]);
interface formData {
  account: string;
  password: string;
  name: string;
  sex: string;
  email: string;
  department: string;
}
// 添加管理员
const addProduct = () => {
  const row: formData = reactive({
    account: "",
    password: "",
    name: "",
    sex: "",
    email: "",
    department: "",
    identity: "产品管理员",
  });
  CreateAdminRef.value.openDialog("新增产品管理员", false, row, "新增");
};
// 编辑用户信息
const edit = (row: any) => {
  CreateAdminRef.value.openDialog("编辑产品管理员", true, row, "编辑");
};
// 获取管理员列表
const getAdminList = () => {
  const identity = "产品管理员";
  getAdminListAPI(identity).then((res) => {
    tableData.value = res.data;
  });
};
// 删除用户
const deleteAdmin = (row: any) => {
  ElMessageBox.confirm("是否确认删除？", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    deleteUserAPI(row.id, row.account).then((res) => {
      console.log(res);
      ElMessage({
        type: "success",
        message: "删除成功",
      });
      getAdminList();
    });
  });
};
onMounted(() => {
  getAdminList();
});
</script>

<style lang="scss" scoped>
@use "@/styles/user_manage/common.scss";
</style>
