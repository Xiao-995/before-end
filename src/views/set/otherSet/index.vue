<template>
  <div class="other-set">
    <div class="department-set">
      <span>部门设置：</span>
      <el-tag
        v-for="tag in dynamicTags"
        :key="tag"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        class="w-20"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag" size="small" @click="showInput">
        + New Tag
      </el-button>
    </div>
    <div class="product-set">
      <span>产品设置：</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, toRaw } from "vue";
import { ElMessage, type InputInstance } from "element-plus";
import { setDepartmentAPI, getDepartmentAPI } from "../../../api/stting";

const inputValue = ref("");
const dynamicTags = ref();
const inputVisible = ref(false);
const InputRef = ref<InputInstance>();
// 获取部门
const getDepartment = () => {
  getDepartmentAPI().then((res) => {
    dynamicTags.value = res.data;
  });
};
// 关闭执行的回调函数
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
  const res = JSON.stringify(toRaw(dynamicTags.value));
  setDepartmentAPI(res).then((res) => {
    if (res.data.status == 0) {
      ElMessage({
        type: "success",
        message: "删除部门成功",
      });
    } else {
      ElMessage({
        type: "error",
        message: "删除部门失败",
      });
    }
  });
};
// 添加部门
const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

// 输入数据函数
const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
    const res = JSON.stringify(toRaw(dynamicTags.value));
    setDepartmentAPI(res).then((res) => {
      if (res.data.status == 0) {
        ElMessage({
          type: "success",
          message: "添加部门成功",
        });
      } else {
        ElMessage({
          type: "error",
          message: "添加部门失败",
        });
      }
    });
  }
  inputVisible.value = false;
  inputValue.value = "";
};
onMounted(() => {
  getDepartment();
});
</script>

<style lang="scss" scoped>
.other-set {
  padding-left: 50px;
  font-size: 14px;

  .department-set {
    margin-bottom: 24px;
    span {
      margin-left: 12px;
    }
  }
  .product-set {
  }
}
</style>
