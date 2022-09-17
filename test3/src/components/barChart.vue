<!-- 纵向条形图 -->
<template>
  <div class="barChart"></div>
</template>

<script>
import echarts from '../assets/echarts.min.js';
export default {
  name: 'barChart',
  data(){
    return {
        name: '评论数',
        data_x: ["2010", "2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021", ],
        data_y: [7000, 9000, 11000, 14000, 30000, 50000, 70000, 100000, 120000, 130000,160000, 180000],
    }
  },
  mounted(){
    let mychart = echarts.init(document.querySelector('.barChart'));
    let option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: "20px",
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: this.data_x,
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签 相关样式
                axisLabel: {
                    // color: "rgba(255,255,255,0.6)",
                    color: "black",
                    fontSize: '10',
                    interval: 0,//使x轴文字显示全
                },
                //不显示x轴坐标轴样式
                axisLine: {
                    show: false
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                //修改刻度标签 相关样式
                axisLabel: {
                    // color: "rgba(255,255,255,0.6)",
                    fontSize: '12',
                },
                //不显示x轴坐标轴样式
                axisLine: {
                    show: true,
                    lineStyle: {
                        // color: "rgba(255,255,255,0.1)",
                        width: 1
                    }
                },
                //y轴分割线颜色
                splitLine: {
                    lineStyle: {
                        // color: "rgba(255,255,255,0.1)",
                    }
                }
            },

        ],
        series: [
            {
                name: this.name,
                type: 'bar',
                barWidth: '35%',
                data: this.data_y,
                itemStyle: {
                    //修改矩形圆角
                    barBorderRadius: 5,
                }
            }
        ]
    };
    mychart.setOption(option);
    //图表随屏幕适应
    window.addEventListener('resize', function () {
        mychart.resize();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.barChart {
    width: 96%;
    margin-left: 2%;
    height: 600px;
 }
</style>
