<template>
  <div class="footer-content-left" ref="leftEcharts"></div>
  <div class="footer-content-right" ref="rightEcharts"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const leftEcharts = ref();
const rightEcharts = ref();
// 公告等级分布图
const massageLevel = () => {
  let myChart = echarts.init(leftEcharts.value);
  myChart.setOption({
    title: {
      text: "公告等级分布图",
      top: "3%",
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        // name: 'Access From',
        type: "pie",
        radius: ["35%", "65%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
};
// 消息每日总量图
const massageAllDay = () => {
  // 底部日期的实现
  let myChart = echarts.init(rightEcharts.value);

  myChart.setOption({
    title: {
      text: "每日登录人数图",
      top: "3%",
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: "line" }],
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
};

onMounted(() => {
  massageLevel();
  massageAllDay();
});
</script>

<style lang="scss" scoped>
// 底部左部分
.footer-content-left {
  margin-right: 8px;
  height: 100%;
  width: calc(30% - 8px);
  background: #fff;
}

// 底部右部分
.footer-content-right {
  height: 100%;
  width: calc(70%);
  background: #fff;
}
</style>
