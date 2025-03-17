<template>
  <div>
    <Breadcrumb ref="breadcrumb" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../../components/Breadcrumb.vue";
const breadcrumb = ref();
const item = ref({
  first: "系统设置",
});
</script>

<style lang="scss" scoped></style>
