<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <el-menu class="el-menu-vertical-demo">
          <div class="title">通用后台管理系统</div>
          <!-- 首页 -->
          <el-menu-item index="home">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <!-- 系统概论 -->
          <el-menu-item index="2">
            <el-icon><Document /></el-icon>
            <span>系统概论</span>
          </el-menu-item>
          <!-- 用户管理 -->
          <el-sub-menu index="3">
            <template #title>
              <el-icon><User /></el-icon>
              <span>用户管理员</span>
            </template>
            <el-menu-item-group title="管理员管理">
              <el-menu-item index="3-1">产品管理员</el-menu-item>
              <el-menu-item index="3-2">消息管理员</el-menu-item>
              <el-menu-item index="3-3">用户管理员</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="员工管理">
              <el-menu-item index="3-4">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <!-- 产品管理 -->
          <el-sub-menu index="4">
            <template #title>
              <el-icon><location /></el-icon>
              <span>产品管理</span>
            </template>
            <el-menu-item-group title="入库管理">
              <el-menu-item index="4-1">产品列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="出库管理">
              <el-menu-item index="4-2">出库列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <!-- 消息管理 -->
          <el-sub-menu index="5">
            <template #title>
              <el-icon><Bell /></el-icon>
              <span>消息管理</span>
            </template>
            <el-menu-item-group title="消息管理">
              <el-menu-item index="5-1">消息列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="回收站">
              <el-menu-item index="5-2">回收站</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <!-- 合同管理 -->
          <el-menu-item index="6">
            <el-icon><Files /></el-icon>
            <span>合同管理</span>
          </el-menu-item>
          <!-- 操作日志 -->
          <el-menu-item index="7">
            <el-icon><Collection /></el-icon>
            <span>操作日志</span>
          </el-menu-item>
          <!-- 登录日志 -->
          <el-menu-item index="8">
            <el-icon><Memo /></el-icon>
            <span>登录日志</span>
          </el-menu-item>
          <!-- 系统设置 -->
          <el-menu-item index="9">
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="header-left-content"> 尊敬的李青 欢迎您登录本系统 </span>
          <div class="header-right-content">
            <el-icon>
              <Message />
            </el-icon>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
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
      </el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goLogin = () => {
  router.push("/login");
};
</script>

<style lang="scss" scoped>
// 菜单栏
.el-aside {
  width: 210px;
  height: 100vh;
  background: #2b303b;
  overflow-x: hidden;
  .el-menu {
    background: #2b303b;
    width: 210px;
    height: 100vh;
    border-right: 0px;
  }
  .title {
    padding: 20px;
    display: flex;
    justify-content: center;
    color: #fff;
    background: #2b303b;
  }
  .el-menu-item {
    color: #fff;
  }

  .el-menu-item:hover {
    background: #006eff;
  }
  :deep(.el-sub-menu__title) {
    color: #fff;
  }
  :deep(.el-sub-menu__title:hover) {
    background: #006eff;
  }
  :deep(.el-menu--inline) {
    background: #2b303b;
  }
}
// 头部
.el-header {
  display: flex;
  width: calc(100vw - 210px);
  height: 60px;
  align-items: center;
  justify-content: space-between;
  background: #2b303b;
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
