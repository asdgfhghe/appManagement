<template>
    <div class="lineComparisionChart"></div>
  </template>
  
  <script>
  import echarts from '../assets/echarts.min.js';
  export default {
    name: 'lineComparisionChart',
    data(){
        return {
            data_x: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            data_y1: [30, 70, 140, 100, 80, 40, 30],
            data_y2: [130, 10, 20, 40, 30, 40, 80,],
        }
    },
    mounted(){
      let mychart = echarts.init(document.querySelector('.lineComparisionChart'));
      let option = {
          tooltip: {
              trigger: 'axis',
          },
          legend: {
              bottom: "0%",
              textStyle: {
                  // color: "rgba(255,255,255,0.5)",
                  fontSize: "12",
              }
          },
  
          grid: {
              left: '1%',
              top: "20px",
              right: '1%',
              bottom: '4%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  data: this.data_x,
                  // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                  axisLabel: {
                      textStyle: {
                          // color: "rgba(255,255,255,.6)",
                          color: 'black',
                          fontSize: 12
                      }
                  },
                  // x轴线的颜色为   rgba(255,255,255,.2)
                  axisLine: {
                      lineStyle: {
                          // color: "rgba(255,255,255,.2)"
                      }
                  },
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  axisTick: { show: false },
                  axisLine: {
                      lineStyle: {
                          // color: "rgba(255,255,255,.1)"
                      }
                  },
                  axisLabel: {
                      textStyle: {
                          // color: "rgba(255,255,255,.6)",
                          color: 'black',
                          fontSize: 12
                      }
                  },
                  // 修改分割线的颜色
                  splitLine: {
                      lineStyle: {
                          color: "rgba(255,255,255,.1)"
                      }
                  }
  
              }
          ],
          series: [
              {
                  name: '版本1',
                  type: 'line',
                  smooth: true,
                  lineStyle: {
                      color: "#0184d5",
                      width: 2
                  },
                  areaStyle: {
                      // 渐变色，只需要复制即可
                      color: new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                              {
                                  offset: 0,
                                  color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                              },
                              {
                                  offset: 0.8,
                                  color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                              }
                          ],
                          false
                      ),
                      shadowColor: "rgba(0, 0, 0, 0.1)"
                  },
                  // 设置拐点 小圆点
                  symbol: "circle",
                  // 拐点大小
                  symbolSize: 8,
                  // 设置拐点颜色以及边框
                  itemStyle: {
                      color: "#0184d5",
                      borderColor: "rgba(221, 220, 107, .1)",
                      borderWidth: 12
                  },
                  // 开始不显示拐点， 鼠标经过显示
                  showSymbol: false,
                  emphasis: {
                      focus: 'series'
                  },
                  data: this.data_y1,
              },
              {
                  name: '版本2',
                  type: 'line',
                  smooth: true,
                  lineStyle: {
                      color: "#00d887",
                      width: 2
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                  {
                                      offset: 0,
                                      color: "rgba(0, 216, 135, 0.4)"
                                  },
                                  {
                                      offset: 0.8,
                                      color: "rgba(0, 216, 135, 0.1)"
                                  }
                              ],
                              false
                          ),
                          shadowColor: "rgba(0, 0, 0, 0.1)"
                      }
                  },
                  // 设置拐点 小圆点
                  symbol: "circle",
                  // 拐点大小
                  symbolSize: 8,
                  // 设置拐点颜色以及边框
                  itemStyle: {
                      color: "#00d887",
                      borderColor: "rgba(221, 220, 107, .1)",
                      borderWidth: 12
                  },
                  // 开始不显示拐点， 鼠标经过显示
                  showSymbol: false,
                  emphasis: {
                      focus: 'series'
                  },
                  data: this.data_y2,
  
              },
          ]
      };
      mychart.setOption(option);
      window.addEventListener('resize', function () {
          mychart.resize();
      });
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
   .lineComparisionChart {
      width: 96%;
      margin-left: 2%;
    height: 600px;
   }
  </style>
  