<template>
  <el-carousel
    :interval="4000"
    height="240px"
    motion-blur
    indicator-position="outside"
  >
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
