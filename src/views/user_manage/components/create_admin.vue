<template>
  <el-dialog v-model="dialogFormVisible" :title="`添加${title}`" width="450px">
    <div class="dialog-content">
      <el-form :model="FormData" :rules="rules" label-position="top">
        <el-form-item label="账号" prop="account">
          <el-input v-model="FormData.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="FormData.password"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="FormData.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="FormData.sex" placeholder="请选择性别">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="FormData.email"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-select v-model="FormData.department" placeholder="请选择部门">
            <el-option label="总裁办" value="总裁办"></el-option>
            <el-option label="项目部" value="项目部"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <el-button type="primary">保存</el-button>
      <el-button>取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const dialogFormVisible = ref(false);
interface formData {
  account: string;
  password: string;
  name: string;
  sex: string;
  email: string;
  department: string;
}
const FormData: formData = reactive({
  account: "",
  password: "",
  name: "",
  sex: "",
  email: "",
  department: "",
});

const rules = reactive({
  account: [
    {
      required: true,
      message: "请输入账号",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur",
    },
  ],
  sex: [
    {
      required: true,
      message: "请选择性别",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "请输入邮箱",
      trigger: "blur",
    },
  ],
  department: [
    {
      required: true,
      message: "请选择部门",
      trigger: "blur",
    },
  ],
});
// 弹窗开关
const openDialog = () => {
  dialogFormVisible.value = true;
  console.log("111");
};
defineProps({
  title: {
    type: String,
    default: "",
  },
});
defineExpose({
  openDialog,
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
