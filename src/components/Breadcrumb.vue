<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        :to="item.path"
        v-show="item.meta.title"
      >
        <div class="breadcrumb">
          <el-icon style="margin-right: 5px; color: #fff; margin-top: 1px">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span style="color: aliceblue">{{ item.meta.title }}</span>
        </div>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>

<style lang="scss" scoped>
.bread-crumb {
  height: 30px;
  padding: 0 20px;
  display: flex;
  align-items: center;

  .breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
:deep(.el-breadcrumb__item) {
  height: 30px;
  font-size: 16px;
  line-height: 30px;
}
:deep(.el-breadcrumb__inner) {
  font-weight: 700;
}
</style>
