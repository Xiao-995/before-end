<template>
  <div class="massage-level footer-content-left"></div>
  <div class="footer-content-right"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
// 底部左部分
.footer-content-left {
  margin-right: 8px;
  height: 100%;
  width: calc(30% - 8px);
  background: #fff;
}

// 底部右部分
.footer-content-right {
  height: 100%;
  width: calc(70%);
  background: #fff;
}
</style>
