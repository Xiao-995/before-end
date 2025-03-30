<template>
  <div class="mid-content-left" ref="leftEcharts"></div>
  <div class="mid-content-right" ref="rightEcharts"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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
