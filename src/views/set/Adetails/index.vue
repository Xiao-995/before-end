<template>
  <!-- 用户头像 -->
  <div class="account-info-wrapped">
    <span>用户头像：</span>
    <div class="account-info-content">
      <el-upload
        class="avatar-uploader"
        action="http://127.0.0.1:3007/api/user/uploadAvatar"
        :show-file-list="false"
        :data="testdata"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img
          v-if="UserInfoStore.imageUrl"
          :src="UserInfoStore.imageUrl"
          class="avatar"
        />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </div>
  </div>
  <!-- 用户账号 -->
  <div class="account-info-wrapped">
    <span>用户账号：</span>
    <div class="account-info-content">
      <el-input v-model="UserInfoStore.account" disabled></el-input>
    </div>
  </div>
  <!-- 用户密码 -->
  <div class="account-info-wrapped">
    <span>用户密码：</span>
    <div class="account-info-content">
      <el-button type="primary" @click="openChangePassword">修改密码</el-button>
    </div>
  </div>
  <!-- 用户姓名 -->
  <div class="account-info-wrapped">
    <span>用户姓名：</span>
    <div class="account-info-content">
      <el-input v-model="UserInfoStore.name"></el-input>
      <el-button class="button" type="primary" @click="saveName"
        >保存</el-button
      >
    </div>
  </div>
  <!-- 用户性别 -->
  <div class="account-info-wrapped">
    <span>用户性别：</span>
    <div class="account-info-content">
      <el-select v-model="UserInfoStore.sex" placeholder="请选择性别">
        <el-option label="男" value="男" />
        <el-option label="女" value="女" />
      </el-select>
      <el-button class="button" type="primary" @click="saveSex">保存</el-button>
    </div>
  </div>
  <!-- 用户身份 -->
  <div class="account-info-wrapped">
    <span>用户身份：</span>
    <div class="account-info-content">
      <el-input v-model="UserInfoStore.identity" disabled></el-input>
    </div>
  </div>
  <!-- 用户部门 -->
  <div class="account-info-wrapped">
    <span>用户部门：</span>
    <div class="account-info-content">
      <el-input v-model="UserInfoStore.department" disabled></el-input>
    </div>
  </div>
  <!-- 用户邮箱 -->
  <div class="account-info-wrapped">
    <span>用户邮箱：</span>
    <div class="account-info-content">
      <el-input v-model="UserInfoStore.email"></el-input>
      <el-button class="button" type="primary" @click="saveEmail"
        >保存</el-button
      >
    </div>
  </div>
  <chang-password ref="ChangPasswordRef" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps } from "element-plus";
import { useUserInfo } from "../../../store/userinfo";
import {
  bindAccountAPI,
  changeNameAPI,
  changeEmailAPI,
  changeSexAPI,
} from "../../../api/userinfo";
import ChangPassword from "../components/chang_password.vue";
const UserInfoStore = useUserInfo();
const ChangPasswordRef = ref();
const id = localStorage.getItem("id");
const testdata = ref("swiper1");
// 修改密码弹窗
const openChangePassword = () => {
  ChangPasswordRef.value.open();
};
// 修改姓名
const saveName = async () => {
  const res = await changeNameAPI(id, UserInfoStore.name);
  if (res.data.status == 0) {
    ElMessage({
      message: "修改成功",
      type: "success",
    });
  } else {
    ElMessage({
      message: "修改失败！",
      type: "error",
    });
  }
};
// 修改性别
const saveSex = async () => {
  const res = await changeSexAPI(id, UserInfoStore.sex);
  if (res.data.status == 0) {
    ElMessage({
      message: "修改成功",
      type: "success",
    });
  } else {
    ElMessage({
      message: "修改失败！",
      type: "error",
    });
  }
};
// 修改邮箱
const saveEmail = async () => {
  const res = await changeEmailAPI(id, UserInfoStore.email);
  if (res.data.status == 0) {
    ElMessage({
      message: "修改成功",
      type: "success",
    });
  } else {
    ElMessage({
      message: "修改失败！",
      type: "error",
    });
  }
};
// 图片地址绑定账号
const bindAccount = async (onlyid: any, account: any, url: any) => {
  await bindAccountAPI(onlyid, account, url);
};
// 头像上传成功
const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
  if (response.status == 0) {
    UserInfoStore.$patch({
      imageUrl: response.url,
    });
    ElMessage({
      message: "上传成功",
      type: "success",
    }),
      bindAccount(response.onlyId, UserInfoStore.account, response.url);
  } else {
    ElMessage({
      message: "更新头像失败，请重新上传",
      type: "warning",
    });
  }
};

// 头像上传格式
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("头像必须是jpg格式！");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("头像必须小于2MB！");
    return false;
  }
  return true;
};
</script>

<style lang="scss" scoped>
.account-info-wrapped {
  display: flex;
  align-items: center;
  padding-left: 40px;
  margin-bottom: 20px;
  // 内容
  .account-info-content {
    display: flex;
    margin-left: 12px;
    margin-right: 16px;
    // 文件上传样式
    .avatar-uploader .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    :deep(.el-select__selection) {
      width: 195px;
    }
    :deep(.el-input) {
      width: 240px;
    }
    .button {
      margin-left: 16px;
    }
  }
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  text-align: center;
}
</style>
