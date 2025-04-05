<template>
  <el-dialog v-model="dialogFormVisible" :title="title" width="450px">
    <div class="dialog-content">
      <el-form :model="FormData" :rules="rules" label-position="top">
        <el-form-item label="账号" prop="account">
          <el-input v-model="FormData.account" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="!disabled">
          <el-input v-model="FormData.password"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="FormData.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="FormData.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="FormData.email"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-select v-model="FormData.department" placeholder="请选择部门">
            <el-option
              v-for="(item, index) in departmentData"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <el-button type="primary" @click="saveAdmin">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { createAdminAPI, editAdminAPI } from "../../../api/userinfo";
import { getDepartmentAPI } from "../../../api/stting";

import { ElMessage } from "element-plus";
const $emit = defineEmits(["getFirstPageList"]);
const dialogFormVisible = ref(false);
// 状态
const state = ref();

let FormData = reactive({
  account: "",
  password: "",
  name: "",
  sex: "",
  email: "",
  department: "",
  identity: "产品管理员",
});
const disabled = ref(false);
const title = ref();
const rules = reactive({
  account: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
  department: [{ required: true, message: "请选择部门", trigger: "blur" }],
});
// 弹窗开关
const openDialog = (
  titles: string,
  disableds: any,
  row: any,
  states: string
) => {
  dialogFormVisible.value = true; // 弹窗
  disabled.value = disableds; // 账号密码判定
  title.value = titles; // 标题
  FormData = row; // 表单数据
  state.value = states; // 状态
};
// 保存
const saveAdmin = () => {
  if (state.value == "新增") {
    createAdminAPI(FormData).then((res) => {
      if (res.data.status == 1) {
        ElMessage({
          type: "error",
          message: res.data.message,
        });
      } else {
        ElMessage({
          type: "success",
          message: "添加成功！",
        });
        dialogFormVisible.value = false;
      }
    });
  }
  if (state.value == "编辑") {
    editAdminAPI(FormData).then((res) => {
      ElMessage({
        type: "success",
        message: res.data.message,
      });
    });
    dialogFormVisible.value = false;
  }
  $emit("getFirstPageList");
};
// 获取部门
const departmentData = ref([]);
const getDepartment = () => {
  getDepartmentAPI().then((res) => {
    departmentData.value = res.data;
  });
};
// 取消
const cancel = () => {
  dialogFormVisible.value = false; // 弹窗
};
defineExpose({
  openDialog,
});
onMounted(() => {
  getDepartment();
});
</script>

<style lang="scss" scoped>
.dialog-content {
  padding: 0 20px;
}
:deep(.el-form-item) {
  margin: 10px;
}
</style>
