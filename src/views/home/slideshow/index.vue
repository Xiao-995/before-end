<template>
  <el-carousel :interval="4000" type="card" height="260px" motion-blur>
    <el-carousel-item v-for="item in imageUrl" :key="item">
      <img :src="item.set_value" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAllSwiperAPI } from "../../../api/stting";
const imageUrl = ref();
onMounted(() => {
  getAllSwiperAPI().then((res) => {
    imageUrl.value = res.data.result;
  });
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
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
