<template>
  <div class="person-infor">
    <!-- 用户头像 -->
    <div class="person-avatar-wrapped">
      <el-avatar :size="100" :src="userInfo.imageUrl" />
      <span class="department">所属部门：总经办</span>
      <div class="company">所属公司：沛顿科技有限公司</div>
    </div>
    <!-- 竖线 -->
    <div class="line-wrapped">
      <div class="line"></div>
    </div>
    <!-- 详情 -->
    <div class="detail-infor-wrapped">
      <p>姓名：沥青</p>
      <p>性别：沥青</p>
      <p>身份：沥青</p>
      <p>分管领域：沥青</p>
      <p>权限：沥青</p>
    </div>
  </div>
  <div class="pie" ref="Users"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import { useUserInfo } from "../../../store/userinfo";
const userInfo = useUserInfo();
const Users = ref();
// 管理员与用户比值图
const manageUser = () => {
  // 通过类名 初始化
  let myChart = echarts.init(Users.value);
  // 设置基本的参数
  myChart.setOption({
    title: {
      text: "管理与用户对比图",
      // subtext: 'Fake Data',
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      padding: [20, 20, 20, 20],
    },
    series: [
      {
        // name: 'Access From',
        type: "pie",
        radius: "65%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });
  // 用于echarts响应式
  window.addEventListener("resize", function () {
    myChart.resize();
  });
};

onMounted(() => {
  manageUser();
});
</script>

<style lang="scss" scoped>
// 个人信息
.person-infor {
  height: 100%;
  margin-right: 8px;
  width: calc(50% - 8px);
  display: flex;
  background: #fff;

  // 头像区域
  .person-avatar-wrapped {
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // 公司
    .company {
      margin: 10px 0px;
      font-size: 12px;
    }

    // 职务
    .level {
      margin-top: 8px;
      font-size: 12px;
    }
  }
  // 分割线
  .line-wrapped {
    height: 100%;
    display: flex;
    align-items: center;

    .line {
      height: 170px;
      border: 1px solid #d3d3d3;
    }
  }

  // 详细信息区域
  .detail-infor-wrapped {
    height: 100%;
    width: calc(50% - 1px);
    margin-left: 50px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
// 饼状图
.pie {
  width: calc(50%);
  height: 100%;
  background: #fff;
}
</style>
