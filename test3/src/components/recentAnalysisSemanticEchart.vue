<template>
  <div id="recentAnalysisSemanticEchart"></div>
</template>

<script>
import echarts from '../assets/echarts.min.js';
export default {
  name: 'recentAnalysisSemanticEchart',
  mounted(){
    let mychart = echarts.init(document.getElementById('recentAnalysisSemanticEchart'));
    let option = {
        color: ["#2f89cf"],

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            top: "3%",
            right: '3%',
            bottom: '7%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["糟糕透了",'真糟糕','有点糟糕','还行','不错','优秀','太棒了' ],
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
                name: '个数',
                type: 'bar',
                barWidth: '35%',
                data: [1, 3, 4, 11, 7, 6, 2],
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
 #recentAnalysisSemanticEchart {
    width: 100%;
    height: 100%;
 }
</style>
