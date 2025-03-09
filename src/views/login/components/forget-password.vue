<template>
  <!-- 忘记密码 -->
  <el-dialog v-model="state.forgetdialog" title="忘记密码" width="500">
    <el-form
      :model="forgetData"
      class="login-form"
      label-position="top"
      :rules="rules"
    >
      <el-form-item label="请输入您的注册账号" prop="account">
        <el-input
          placeholder="请输入您的注册账号"
          v-model="forgetData.account"
        />
      </el-form-item>
      <el-form-item label="请输入您的邮箱账号" prop="email">
        <el-input placeholder="请输入您的邮箱账号" v-model="forgetData.email" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="state.forgetdialog = false"> 取消 </el-button>
        <el-button type="primary" @click="changPassword"> 下一步 </el-button>
      </div>
    </template>
  </el-dialog>
  <!-- 修改密码 -->
  <el-dialog v-model="state.changedialog" title="修改密码" width="500">
    <el-form
      :model="forgetData"
      class="login-form"
      label-position="top"
      :rules="rules"
    >
      <el-form-item label="请输入您的新密码" prop="password">
        <el-input
          placeholder="请输入您的新密码"
          v-model="forgetData.password"
        />
      </el-form-item>
      <el-form-item label="再次输入您的新密码" prop="repassword">
        <el-input
          placeholder="再次输入您的新密码"
          v-model="forgetData.repassword"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="state.changedialog = false"> 取消 </el-button>
        <el-button type="primary" @click="changPassword"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { forgetForm } from "../type";

// 表单对象
const forgetData: forgetForm = reactive({
  account: "",
  email: "",
  password: "",
  repassword: "",
});

// 表单校验规则
const rules = reactive({
  account: [{ required: true, message: "请输入您的注册账号", trigger: "blur" }],
  email: [{ required: true, message: "请输入您的邮箱账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入您的新密码", trigger: "blur" }],
  repassword: [
    { required: true, message: "请确认您的新密码", trigger: "blur" },
  ],
});
// 弹窗默认关闭
const state = reactive({
  forgetdialog: false,
  changedialog: false,
});

// 打开弹窗
const open = () => {
  state.forgetdialog = true;
};

// 修改密码弹窗
const changPassword = () => {
  state.forgetdialog = false;
  state.changedialog = true;
};

// 对外暴露open函数
defineExpose({
  open,
});
</script>

<style lang="scss" scoped></style>
