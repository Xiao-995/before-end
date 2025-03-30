<template>
  <div class="overview-wrapped">
    <!-- 顶部 -->
    <div class="top-content-wrapped">
      <top />
    </div>
    <!-- 中间 -->
    <div class="mid-content-wrapped">
      <mid />
    </div>
    <!-- 底部 -->
    <div class="footer-content-wrapped">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import top from "./top/index.vue";
import mid from "./mid/index.vue";
import Footer from "./footer/index.vue";
</script>

<style lang="scss" scoped>
// 总览内容
.overview-wrapped {
  padding: 8px;
  height: calc(100vh - 70px);
  background: #f8f8f8;

  // 上部分内容 个人资料 + 饼状图
  .top-content-wrapped {
    height: 30%;
    display: flex;
  }

  // 中间部分内容 消息阅读量图 产品类别图
  .mid-content-wrapped {
    margin-top: 8px;
    height: calc(32% - 8px);
    display: flex;
  }

  // 底部内容
  .footer-content-wrapped {
    margin-top: 8px;
    height: calc(38% - 8px);
    display: flex;
  }
}
</style>
