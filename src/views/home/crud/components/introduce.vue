<template>
  <el-dialog
    v-model="state.dialogFormVisible"
    :title="`${title}详情`"
    width="600px"
    destroy-on-close
  >
    <el-container>
      <el-main>
        <div class="content" v-html="valueHtml"></div>
      </el-main>
    </el-container>
  </el-dialog>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, reactive } from "vue";
import { bus } from "@/utils/mitt.js";
import { getCompanyIntroduceAPI } from "../../../../api/stting";
const title = ref();
const valueHtml = ref();
bus.on("introduce", (id: number) => {
  if (id == 1) {
    title.value = "公司介绍";
    getCompanyIntroduceAPI("公司介绍").then((res) => {
      valueHtml.value = res.data;
    });
  }
  if (id == 2) {
    title.value = "公司战略";
    getCompanyIntroduceAPI("公司战略").then((res) => {
      valueHtml.value = res.data;
    });
  }
  if (id == 3) {
    title.value = "公司高层";
    getCompanyIntroduceAPI("公司高层").then((res) => {
      valueHtml.value = res.data;
    });
  }
  if (id == 4) {
    title.value = "公司架构";
    getCompanyIntroduceAPI("公司架构").then((res) => {
      valueHtml.value = res.data;
    });
  }
});

// 弹窗开关
const state = reactive({
  dialogFormVisible: false,
});
// 暴露open方法
const open = () => {
  state.dialogFormVisible = true;
};
// 取消订阅/监听
onBeforeUnmount(() => {
  bus.all.clear();
});
defineExpose({
  open,
});
</script>

<style lang="scss" scoped>
:deep(.el-main) {
  min-height: 400px;
}
</style>
