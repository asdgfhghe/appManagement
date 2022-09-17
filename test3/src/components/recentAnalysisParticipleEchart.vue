<template>
  <div id="recentAnalysisParticipleEchart"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';

export default {
  name: 'recentAnalysisParticipleEchart',
  data(){
    return {
        worddata: [
            {
              name: "真的",
              value: 1400
            },
            {
                name: '确实',
                value: 1200
            },
            {
                name: '不过',
                value: 2000
            },
            {
                name: '棒棒哒',
                value: 200
            },
            {
              name: "也是",
              value: 100
            },
            {
                name: '对对对',
                value: 6000
            },
            {
                name: '可能吗',
                value: 2000
            },
            {
                name: '下次一定',
                value: 1200
            },
            {
              name: "好吧",
              value: 2400
            },
            {
                name: '的确',
                value: 1000
            },
            {
                name: '不太行',
                value: 2900
            },
            {
                name: '网络延迟',
                value: 200
            }
        ]

    }
  },
  mounted(){
    // 这里和echarts的使用一样，先拿到容器元素
const mychart = echarts.init(document.getElementById('recentAnalysisParticipleEchart'))
// 这里是官方给出的一些基本的配置项，我做一些说明
mychart.setOption({
    series: [{
        type: 'wordCloud',
		// shape这个属性虽然可配置，但是在词的数量不太多的时候，效果不明显，它会趋向于画一个椭圆
        shape: 'circle',
        // 这个功能还没用过
        keepAspect: false,
        // 这个是可以自定义背景图片的，词云会按照图片的形状排布，所以有形状限制的时候，最好用背景图来实现，而且，这个背景图一定要放base64的，不然词云画不出来
        // maskImage: maskImage,
        // 下面就是位置的配置
        left: 'center',
        top: 'center',
        width: '90%',
        height: '80%',
        right: null,
        bottom: null,
        // 词的大小，最小12px，最大60px，可以在这个范围调整词的大小
        sizeRange: [12, 60],
        // 每个词旋转的角度范围
        rotationRange: [0, 0],
        rotationStep: 45,
        // 词间距，数值越小，间距越小，这里间距太小的话，会出现大词把小词套住的情况，比如一个大的口字，中间会有比较大的空隙，这时候他会把一些很小的字放在口字里面，这样的话，鼠标就无法选中里面的那个小字
        gridSize: 8,
		// 允许词太大的时候，超出画布的范围
        drawOutOfBound: false,
		// 布局的时候是否有动画
        layoutAnimation: true,
        // 这是全局的文字样式，相对应的还可以对每个词设置字体样式
        textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // 颜色可以用一个函数来返回字符串
            color: function () {
                // Random color
                return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')';
            }
        },
        emphasis: {
            focus: 'self',
            textStyle: {
                textShadowBlur: 10,
                textShadowColor: '#333'
            }
        },

        // 数据必须是一个数组，数组是对象，对象必须有name和value属性
        data: this.worddata,
    }]
});
    //图表随屏幕适应
    window.addEventListener('resize', function () {
        mychart.resize();
    })
  }
}
</script>
<style>
    #recentAnalysisParticipleEchart {
        width: 100%;
        height: 100%;
    }
</style>