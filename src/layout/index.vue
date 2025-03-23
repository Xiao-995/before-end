<template>
  <div class="layout-containner">
    <!-- 左侧菜单 -->
    <div class="layout-slider">
      <Menu />
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabber">
      <Tabber />
    </div>
    <!-- 内容展示区域 -->
    <div class="layout-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./menu/index.vue";
import Tabber from "./tabber/index.vue";
</script>

<style lang="scss" scoped>
.layout-containner {
  width: 100%;
  height: 100vh;

  /* 左侧菜单 */
  .layout-slider {
    width: 210px;
    height: 100vh;
    background: #001529;
    transition: all 0.1s;
  }

  /* 顶部导航 */
  .layout-tabber {
    position: fixed;
    width: calc(100% - 210px);
    height: 50px;
    top: 0px;
    left: 210px;
    transition: all 0.1s;
  }

  /* 内容展示区域 */
  .layout-main {
    position: absolute;
    background-color: aliceblue;
    width: calc(100% - 210px);
    height: calc(100vh - 50px);
    left: 210px;
    top: 50px;
    overflow: auto;
    transition: all 0.1s;
  }
}
</style>
