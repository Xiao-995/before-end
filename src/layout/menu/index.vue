<template>
  <el-scrollbar class="scrollbar">
    <el-menu
      background-color="#001529"
      text-color="#fff"
      :default-active="$route.path"
    >
      <div class="title">通用后台管理系统</div>
      <!-- 首页 -->
      <el-menu-item index="/home" @click="goRoute">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <!-- 系统概论 -->
      <el-menu-item index="/over" @click="goRoute">
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
          <el-menu-item index="/product" @click="goRoute"
            >产品管理员</el-menu-item
          >
          <el-menu-item index="/message" @click="goRoute"
            >消息管理员</el-menu-item
          >
          <el-menu-item index="/user" @click="goRoute">用户管理员</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="员工管理">
          <el-menu-item index="/userlist" @click="goRoute"
            >用户列表</el-menu-item
          >
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
      <el-menu-item index="/set" @click="goRoute">
        <el-icon><Setting /></el-icon>
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goRoute = (vc: any) => {
  router.push(vc.index);
};
</script>

<style lang="scss" scoped>
// 菜单栏
.scrollbar {
  width: 100%;
  height: 100vh;
  background: #001529;

  //   标题
  .title {
    padding: 20px;
    display: flex;
    justify-content: center;
    color: #fff;
    background: #001529;
  }
  .el-menu {
    border-right: 0;
  }
}
</style>
