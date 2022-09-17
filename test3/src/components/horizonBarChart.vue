<template>
  <div class='horizonBarChart'></div>
</template>

<script>
import echarts from '../assets/echarts.min.js';
export default {
  name: 'horizonBarChart',
  mounted(){
    let mychart = echarts.init(document.querySelector('.horizonBarChart'));
    const labelRight = {
  position: 'right'
};
let option = {
    color: ['#2f89cf'],
  // title: {
  //   text: '下载量变化',
  //   x: 'center',
  //   y: 'top',
  //   textStyle: {
  //       fontSize: 30
  //   }
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    }
  },
  grid: {
            left: '1%',
            top: "20px",
            right: '1%',
            bottom: '4%',
            containLabel: true
        },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013',
      '2012'
    ]
  },
  series: [
    {
      name: '下载量',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
        { value: -70, label: labelRight },
        { value: -90, label: labelRight },
        200,
        440,
        { value: -20, label: labelRight },
        800,
        { value: -10, label: labelRight },
        100,
        { value: -20, label: labelRight },
        500
      ]
    }
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
 .horizonBarChart {
  width: 96%;
  margin-left: 2%;
  height: 600px;
 }
</style>
