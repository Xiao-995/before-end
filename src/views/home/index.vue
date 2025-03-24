<template>
  <div class="home-wrapped">
    <div class="swiper-wrapped">
      <SlideShow />
    </div>
    <div class="layout-wrapped">
      <Crud />
    </div>
    <div class="two-table-wrapped">
      <Table />
    </div>
  </div>
</template>

<script setup lang="ts">
import SlideShow from "./slideshow/index.vue";
import Crud from "./crud/index.vue";
import Table from "./table/index.vue";
</script>

<style lang="scss" scoped>
.home-wrapped {
  padding: 8px;
  height: calc(100vh - 70px);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  // 轮播图
  .swiper-wrapped {
    padding: 10px;
    background: #fff;
    margin-bottom: 8px;
  }
  // 栅格布局
  .layout-wrapped {
    padding: 8px;
    margin-bottom: 8px;
    background: #fff;
  }
  // 表格
  .two-table-wrapped {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
  }
}
</style>
