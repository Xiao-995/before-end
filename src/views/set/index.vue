<template>
  <div class="common-wrapped">
    <div class="common-content">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="账号详情" name="first">
          <Adetails />
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <Cinfo />
        </el-tab-pane>
        <el-tab-pane label="首页管理" name="third">
          <Hintendant />
        </el-tab-pane>
        <el-tab-pane label="其他设置" name="fourth">
          <otherSet />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Adetails from "./Adetails/index.vue";
import Cinfo from "./Cinfo/index.vue";
import Hintendant from "./Hintendant/index.vue";
import otherSet from "./otherSet/index.vue";
const activeName = ref("third");
</script>

<style lang="scss" scoped>
.common-wrapped {
  margin: 10px 15px;
  padding: 8px;
  background: #fff;
  border-radius: 20px;
  height: calc(100vh - 90px);

  // 内容
  .common-content {
    padding: 0 10px;
    height: 100%;
    background: #fff;
    // 账号信息外壳
  }
}
// tabs样式
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
