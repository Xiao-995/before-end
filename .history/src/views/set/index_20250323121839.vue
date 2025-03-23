<template>
  <Breadcrumb ref="breadcrumb" :item="item" />
  <div class="common-wrapped">
    <div class="common-content">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="账号详情" name="first">
          <!-- 用户头像 -->
          <div class="account-info-wrapped">
            <span>用户头像：</span>
            <div class="account-info-content">
              <el-upload
                class="avatar-uploader"
                action="http://127.0.0.1:3007/api/user/uploadAvatar"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="UserInfoStore.imageUrl"
                  :src="imageUrl"
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
              <el-input v-model="AccountDetail.account" disabled></el-input>
            </div>
          </div>
          <!-- 用户密码 -->
          <div class="account-info-wrapped">
            <span>用户密码：</span>
            <div class="account-info-content">
              <el-button v-model="AccountDetail.password" type="primary"
                >修改密码</el-button
              >
            </div>
          </div>
          <!-- 用户姓名 -->
          <div class="account-info-wrapped">
            <span>用户姓名：</span>
            <div class="account-info-content">
              <el-input v-model="AccountDetail.name"></el-input>
              <el-button class="button" type="primary">保存</el-button>
            </div>
          </div>
          <!-- 用户性别 -->
          <div class="account-info-wrapped">
            <span>用户性别：</span>
            <div class="account-info-content">
              <el-select v-model="AccountDetail.sex" placeholder="请选择性别">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
              </el-select>
              <el-button class="button" type="primary">保存</el-button>
            </div>
          </div>
          <!-- 用户身份 -->
          <div class="account-info-wrapped">
            <span>用户身份：</span>
            <div class="account-info-content">
              <el-input v-model="AccountDetail.identity" disabled></el-input>
            </div>
          </div>
          <!-- 用户部门 -->
          <div class="account-info-wrapped">
            <span>用户部门：</span>
            <div class="account-info-content">
              <el-input v-model="AccountDetail.department" disabled></el-input>
            </div>
          </div>
          <!-- 用户邮箱 -->
          <div class="account-info-wrapped">
            <span>用户邮箱：</span>
            <div class="account-info-content">
              <el-input v-model="AccountDetail.email"></el-input>
              <el-button class="button" type="primary">保存</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">Config</el-tab-pane>
        <el-tab-pane label="首页管理" name="third">Role</el-tab-pane>
        <el-tab-pane label="其他设置" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Breadcrumb from "../../components/Breadcrumb.vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps } from "element-plus";
import { useUserInfo } from "../../store/userinfo";
import { bindAccountAPI } from "../../api/userinfo";
const UserInfoStore = useUserInfo();
// 面包屑
const breadcrumb = ref();
const item = ref({
  first: "系统设置",
});
const activeName = ref("first");
// 账号详情
const AccountDetail = reactive({
  account: "", // 账号
  password: "", // 密码
  name: "", // 姓名
  sex: "", // 性别
  identity: "", // 身份
  department: "", // 部门
  email: "", // 邮箱
});

// 头像上传成功
const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
  if (response.status == 0) {
    UserInfoStore.$patch({
      imageUrl: response.url,
    });
    ElMessage({
      message: "上传成功",
      type: "success",
    });
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
.common-wrapped {
  margin: 0 15px;
  padding: 8px;
  background: #fff;
  border-radius: 20px;
  height: calc(100vh - 120px);

  // 内容
  .common-content {
    padding: 0 10px;
    height: 100%;
    background: #fff;
    // 账号信息外壳
    .account-info-wrapped {
      display: flex;
      align-items: center;
      padding-left: 40px;
      margin-bottom: 24px;
      // 内容
      .account-info-content {
        display: flex;
        margin-left: 12px;
        margin-right: 16px;
        .button {
          margin-left: 16px;
        }
      }
    }
  }
}
// tabs样式
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
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
