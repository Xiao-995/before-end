<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="(item, index) in getCompanyAll" :key="index">
      <div class="company-message-area" @click="openIntroduce(index + 1)">
        <span>{{ item.set_name }}</span>
        <div v-html="item.set_text" class="company-introduce"></div>
      </div>
    </el-col>
  </el-row>
  <introduce ref="introduceRef" />
</template>

<script setup lang="ts">
import { getCompanyAllAPI } from "../../../api/stting";
import { onMounted, ref } from "vue";
import { bus } from "@/utils/mitt.js";
import introduce from "./components/introduce.vue";
const getCompanyAll = ref();
const introduceRef = ref();
// 弹窗
const openIntroduce = (id: number) => {
  bus.emit("introduce", id);
  console.log(id);

  introduceRef.value.open();
};
onMounted(() => {
  getCompanyAllAPI().then((res) => {
    getCompanyAll.value = res.data.slice(1, 5);
  });
});
</script>

<style lang="scss" scoped>
.company-message-area {
  background-color: #f5f5f5;
  height: 160px;
  padding: 8px;
  cursor: pointer;

  span {
    border-bottom: 3px solid #409eff;
    padding-bottom: 5px;
    font-size: 14px;
  }

  .company-introduce {
    // 缩进
    text-indent: 24px;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box; // 必须配合 -webkit-box 使用
    -webkit-box-orient: vertical; // 设置为垂直方向
    overflow: hidden; // 隐藏超出部分
    text-overflow: ellipsis; // 添加省略号效果
    // WebKit 特定的 line-clamp
    -webkit-line-clamp: 3;
    // 标准化的 line-clamp（目前可能不被所有浏览器支持）
    line-clamp: 3;
  }
}
.company-message-area:hover {
  cursor: pointer;
  background-color: #eef5f5;
}
</style>
