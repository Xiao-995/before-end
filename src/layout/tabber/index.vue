<template>
  <div>
    <el-header>
      <Breadcrumb ref="breadcrumb" />
      <!-- <span class="header-left-content">
        尊敬的 <span style="color: #bc00ff">{{ UserInfoStore.name }}</span>
        欢迎您登录本系统
      </span> -->
      <div class="header-right-content">
        <el-icon>
          <Message />
        </el-icon>
        <el-avatar :src="UserInfoStore.imageUrl" />
        <el-dropdown>
          <span class="el-dropdown-link"> 设置 </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>设置账号</el-dropdown-item>
              <el-dropdown-item>更改头像</el-dropdown-item>
              <el-dropdown-item @click="goLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>

<script setup lang="ts">
import { useUserInfo } from "../../store/userinfo";
import { useRouter } from "vue-router";
import Breadcrumb from "../../components/Breadcrumb.vue";

const UserInfoStore = useUserInfo();
const router = useRouter();
// 退出登录
const goLogin = () => {
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  background: #001529;
  color: #fff;
  .header-right-content {
    display: flex;
    width: 150px;
    justify-content: space-around;
    align-items: center;
    margin: 0 30px;
  }
}
</style>
