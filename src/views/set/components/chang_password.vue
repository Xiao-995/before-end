<template>
  <!-- 修改密码 -->
  <el-dialog v-model="changedialog" title="修改密码" width="500">
    <el-form
      :model="changeP"
      class="login-form"
      label-position="top"
      ref="passwordRef"
      :rules="rules"
    >
      <el-form-item label="请输入您的旧密码" prop="oldpassword">
        <el-input
          placeholder="请输入您的旧密码"
          type="password"
          show-password
          v-model="changeP.oldpassword"
        />
      </el-form-item>
      <el-form-item label="请输入您的新密码" prop="newpassword">
        <el-input
          placeholder="请输入您的新密码"
          type="password"
          show-password
          v-model="changeP.newpassword"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="changedialog = false"> 取消 </el-button>
        <el-button type="primary" @click="resetPassword"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { changePasswordAPI } from "../../../api/userinfo";
import { ElMessage } from "element-plus";
const passwordRef = ref();
// 表单对象
const changeP = reactive({
  oldpassword: "",
  newpassword: "",
});
// 表单校验规则
const rules = reactive({
  oldpassword: [
    {
      required: true,
      message: "请输入您的旧密码",
      trigger: "blur",
    },
  ],
  newpassword: [
    {
      required: true,
      message: "请确认您的新密码",
      trigger: "blur",
    },
  ],
});
// 修改密码按钮
const resetPassword = async () => {
  const id = localStorage.getItem("id");
  passwordRef.value.validate((valid: any) => {
    if (valid) {
      changePasswordAPI(id, changeP.oldpassword, changeP.newpassword).then(
        (res) => {
          if (res.data.status == 0) {
            ElMessage({
              type: "success",
              message: "修改密码成功",
            });
            changedialog.value = false;
          } else {
            ElMessage({
              type: "error",
              message: res.data.message,
            });
          }
        }
      );
    }
  });
};

const changedialog = ref(false);
const open = () => {
  changedialog.value = true;
};
defineExpose({
  open,
});
</script>

<style lang="scss" scoped></style>
