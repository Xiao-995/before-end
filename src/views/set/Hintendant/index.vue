<template>
  <div class="home-wrapped">
    <div class="tips">
      <span>提示:点击图片框进行切换首页轮播图</span>
    </div>
    <div style="display: flex">
      <div
        class="swiper-wrapped"
        v-for="item in swiperData.slice(0, 3)"
        :key="item.id"
      >
        <div class="swiper-name">轮播图 {{ item.id + 1 }}</div>
        <el-upload
          class="avatar-uploader"
          action="http://127.0.0.1:3007/api/user/uploadSwiper"
          :show-file-list="false"
          :on-success="handleSwiperSuccess"
          :before-upload="beforeSwiperUpload"
          :data="item"
        >
          <template #trigger>
            <img v-if="imageUrl" :src="imageUrl[item.id]" class="swiper" />
          </template>
        </el-upload>
      </div>
    </div>
    <div style="display: flex">
      <div
        class="swiper-wrapped"
        v-for="item in swiperData.slice(3, 6)"
        :key="item.id"
      >
        <div class="swiper-name">轮播图 {{ item.id + 1 }}</div>
        <el-upload
          class="avatar-uploader"
          action="http://127.0.0.1:3007/api/user/uploadSwiper"
          :show-file-list="false"
          :on-success="handleSwiperSuccess"
          :before-upload="beforeSwiperUpload"
          :data="item"
        >
          <template #trigger>
            <img v-if="imageUrl" :src="imageUrl[item.id]" class="swiper" />
          </template>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, type UploadProps } from "element-plus";
import { getAllSwiperAPI } from "../../../api/stting";
import { ref } from "vue";
let swiperData = [
  { id: 0, set_name: "swiper1" },
  { id: 1, set_name: "swiper2" },
  { id: 2, set_name: "swiper3" },
  { id: 3, set_name: "swiper4" },
  { id: 4, set_name: "swiper5" },
  { id: 5, set_name: "swiper6" },
];
const imageUrl = ref();
// 上传轮播图成功
const handleSwiperSuccess: UploadProps["onSuccess"] = (response) => {
  getAllswiper();
  ElMessage({
    type: "success",
    message: response.message,
  });
};
// 上传前的回调
const beforeSwiperUpload = () => {};
// 获取所有轮播图
const getAllswiper = () => {
  getAllSwiperAPI().then((res) => {
    let arr: any[] = [];
    res.data.result.forEach((item: any) => {
      arr.push(item.set_value);
    });
    imageUrl.value = arr;
  });
};
getAllswiper();
</script>

<style lang="scss" scoped>
.home-wrapped {
  padding-left: 50px;
  display: flex;
  flex-direction: column;

  // 提示
  .tips {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    span {
      font-size: 14px;
      color: silver;
    }
  }

  // 轮播图
  .swiper-wrapped {
    margin: 16px;
    .swiper-name {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .swiper {
      width: 360px;
      height: 220px;
      background: palegoldenrod;
    }
  }
}
</style>
