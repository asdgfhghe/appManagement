<template>
  <div class="lineChart"></div>
</template>
<script>
import echarts from '../assets/echarts.min.js';
export default {
    name: 'lineChart',
    data(){
        return {
            data_x: ["版本1.0","版本1.1","版本1.2","版本2.0","版本3.0","版本4.0","版本5.0",],
            data_y: [2,2.2,2.9,3,7,6,9],
        }
    },
    mounted(){
        let mychart = echarts.init(document.querySelector('.lineChart'));
        let option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#fff",
          borderRadius: 4,
          extraCssText: "box-shadow:0px 0px 10px 6px #eee; ",
          textStyle: {
            fontSize: 16,
            color: "#333",
          },
          formatter: function (params) {
            let value = params[0].name;
            return (
              "<div style='padding:10px 20px'>" +
              "<span style='color:#333333;font-weight: 700'>" +
              value +
              "</span>" +
              "<br/>" +
              "<span style='color:#999999'>" +
              params[0].seriesName +
              "</span>" +
              ":" +
              "<span style='color:#4abf8a;padding-left:6px'>" +
              params[0].value +
              "</span>" +
              "</div>"
            );
          },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
            color: "rgba(229, 239, 244,.4)",
            },
          },
        },
        color: ["#4abf8a"],
        grid: {
          left: '2%',
          bottom: '20px',
          right: '2%',
          top: '20px',
        },
        xAxis: {
          type: "category",
          data: this.data_x,
          axisLabel: {
            color: "black",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: "#aaa",
            },
          },
        },
        yAxis: {
          type: "value",
          min: 0,
          axisLabel: {
            color: "black",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: "#aaa",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc",
              type: "line",
            },
          },
        },
        series: [
          {
            name: "喜好程度",
            data: this.data_y,
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              borderWidth: 2,
              borderColor: "white",
            },
            smooth: 0.1,
            lineStyle: {
              shadowColor: "rgba(229, 239, 244,.4)",
              shadowBlur: 20,
              shadowOffsetY: 5,
            },
          },
        ],
      };

mychart.setOption(option);
    window.addEventListener('resize', function () {
        mychart.resize();
    });

    }
}
</script>
<style>
    .lineChart {
        width: 96%;
    margin-left: 2%;
  height: 600px;
    }
</style>