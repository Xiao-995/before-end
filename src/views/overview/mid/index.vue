<template>
  <div class="product-category-bar mid-content-left"></div>
  <div class="mid-content-right"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
// 中间左部分
.mid-content-left {
  margin-right: 8px;
  width: calc(60% - 8px);
  background: #fff;
}

// 中间右部分
.mid-content-right {
  width: calc(40%);
  background: #fff;
  padding: 8px;

  // 标题
  .title {
    font-size: 14px;
    margin-bottom: 8px;
  }

  // 按钮区域
  .button-area {
    margin-bottom: 8px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #f5f5f5;

    // 按钮名字
    .buttom-name {
      margin-top: 10px;
    }
  }

  // 按钮变色
  .button-area:hover {
    background: #e4efff;
  }
}
</style>
