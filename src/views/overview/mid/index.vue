<template>
  <div class="mid-content-left" ref="leftEcharts"></div>
  <div class="mid-content-right" ref="rightEcharts">
    <div class="title">常用管理</div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="button-area">
          <SvgIcon
            icon-name="phone"
            style="width: 30px; height: 30px"
          ></SvgIcon>
          <span class="button">用户管理</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="button-area">
          <SvgIcon
            icon-name="phone"
            style="width: 30px; height: 30px"
          ></SvgIcon>
          <span class="button">产品管理</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="button-area">
          <SvgIcon
            icon-name="phone"
            style="width: 30px; height: 30px"
          ></SvgIcon>
          <span class="button">系统信息</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="button-area">
          <SvgIcon
            icon-name="phone"
            style="width: 30px; height: 30px"
          ></SvgIcon>
          <span class="button">个人消息</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="button-area">
          <SvgIcon
            icon-name="phone"
            style="width: 30px; height: 30px"
          ></SvgIcon>
          <span class="button">部门消息</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="button-area">
          <SvgIcon
            icon-name="phone"
            style="width: 30px; height: 30px"
          ></SvgIcon>
          <span class="button">系统设置</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "../../../components/SvgIcon.vue";
import { onMounted, reactive, ref } from "vue";
import * as echarts from "echarts";
const leftEcharts = ref();
const rightEcharts = ref();

// 产品类别图
const productCategoryBar = async () => {
  let myChart = echarts.init(leftEcharts.value);
  myChart.setOption({
    title: {
      text: "产品类别库存总价图",
      top: "3%",
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      // 食品类，服装类，鞋帽类，日用品类，家具类，家用电器类，纺织品类，五金类
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        barWidth: 40,
        colorBy: "data",
      },
    ],
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
};

onMounted(() => {
  productCategoryBar();
});
</script>

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
    padding: 13px;
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
