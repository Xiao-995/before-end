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
        <el-button type="primary" @click="verifyAccount"> 下一步 </el-button>
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
          type="password"
          show-password
          v-model="forgetData.password"
        />
      </el-form-item>
      <el-form-item label="再次输入您的新密码" prop="repassword">
        <el-input
          placeholder="再次输入您的新密码"
          type="password"
          show-password
          v-model="forgetData.repassword"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="state.changedialog = false"> 取消 </el-button>
        <el-button type="primary" @click="resetPassword"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { forgetForm } from "../type";
import { verifyAPI, resetAPI } from "../../../api/login";
import { ElMessage } from "element-plus";

// 表单对象
const forgetData: forgetForm = reactive({
  account: "14237470",
  email: "1423747022@qq.com",
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
// 重置密码
const resetPassword = () => {
  const id = localStorage.getItem("id");
  if (forgetData.password === forgetData.repassword) {
    resetAPI(id, forgetData.password)
      .then(() => {
        ElMessage({
          message: "修改成功！",
          type: "success",
        });
      })
      .catch((err) => {
        ElMessage({
          message: err.message,
          type: "error",
        });
      });
  } else {
    ElMessage({
      message: "两次密码不一致！",
      type: "error",
    });
  }
};
// 修改密码弹窗--验证账号邮箱
const verifyAccount = async () => {
  const res = await verifyAPI(forgetData);
  const data = res.data;
  if (data.status == 0) {
    ElMessage({
      message: "查询成功",
      type: "success",
    });
    // 将id存到本地
    localStorage.setItem("id", data.id);
    state.forgetdialog = false;
    state.changedialog = true;
  } else {
    ElMessage({
      message: "查询失败！请确认账号或邮箱是否正确。",
      type: "error",
    });
  }
};

// 对外暴露open函数
defineExpose({
  open,
});
</script>

<style lang="scss" scoped></style>
