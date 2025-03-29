<template>
  <el-dialog
    v-model="state.dialogFormVisible"
    :title="`编辑${title}`"
    width="600px"
    destroy-on-close
  >
    <div style="border: 1px solid #ccc">
      <!-- wangEditor结构 -->
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="yes"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, ref, shallowRef, reactive } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { bus } from "@/utils/mitt.js";
import { ElMessage } from "element-plus";
// changecompanyintro
import {
  changeCompanyIntroduceAPI,
  getCompanyIntroduceAPI,
} from "../../../../api/stting";
const title = ref();
// 编辑公司详情

bus.on("editorTitle", (id: number) => {
  if (id == 1) {
    title.value = "公司介绍";
    getCompanyIntroduceAPI("公司介绍").then((res) => {
      valueHtml.value = res.data;
    });
  }
  if (id == 2) {
    title.value = "公司架构";
    getCompanyIntroduceAPI("公司架构").then((res) => {
      valueHtml.value = res.data;
    });
  }
  if (id == 3) {
    title.value = "公司战略";
    getCompanyIntroduceAPI("公司战略").then((res) => {
      valueHtml.value = res.data;
    });
  }
  if (id == 4) {
    title.value = "公司高层";
    getCompanyIntroduceAPI("公司高层").then((res) => {
      valueHtml.value = res.data;
    });
  }
});
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// mode
const mode = ref("default");
// 内容 HTML
const valueHtml = ref();
const toolbarConfig = {
  excludeKeys: [],
};
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    uploadImage: {
      //上传图片配置
      server: "http://127.0.0.1:3007/set/uploadCompanyPicture", //上传接口地址
      fieldName: "file", //上传文件名
      methods: "post",
      metaWithUrl: true, // 参数拼接到 url 上
      // 单个文件上传成功之后
      // onSuccess(file, res) {
      // },
      // 自定义插入图片
      customInsert(res, insertFn) {
        insertFn(res.url);
      },
    },
  },
};
// 上传图片，修改 uploadImage 菜单配置

// 点击确认 修改文案
const yes = () => {
  changeCompanyIntroduceAPI(valueHtml.value, title.value).then((res) => {
    if (res.data.status == 0) {
      ElMessage({
        message: `修改${title.value}成功！`,
        type: "success",
      });
      state.dialogFormVisible = false;
    } else {
      state.dialogFormVisible = false;
      ElMessage.error("修改公司介绍失败，请检查网络是否通畅！");
    }
  });
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const state = reactive({
  dialogFormVisible: false,
});

// 取消删除
const cancel = () => {
  ElMessage.error("取消赋权！");
  state.dialogFormVisible = false;
};

// 暴露open方法
const open = () => {
  state.dialogFormVisible = true;
};
defineExpose({
  open,
});

// 取消订阅/监听
onBeforeUnmount(() => {
  bus.all.clear();
});
</script>

<style lang="scss" scoped></style>
