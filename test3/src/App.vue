<!-- 
  1.请求拦截器
  2.同步异步async await
  3.urlencoded 转 json
  4.qs.stringify()
  5.Promise
  6.Promise.all
  7.组件的数据缓存
  8.本地登录数据缓存
  9.路由拦截,http拦截
  10.vuex管理全局变量
 -->
<template>
  <div id="app" class="clearfix">
      <!-- 通过子组件dropDown传递过来的组件下标去设置显示的组件 -->
      <dropDown @changeCompIndex="setComp"></dropDown>
      <div id="mainContent">
          <topBar :currentName="currentName" @showLoginSign="showLoginSign"></topBar>
          <!-- 这里绑定了属性id传给子组件，但是如果子组件不在prop里面接收的话，可能会对id选择器造成影响，切记 -->
          <component :is="currentComp"></component>
    </div>
    <transition name="Fade">
    <div class="cover" v-if="isCover" @touchmove.prevent @mousewheel.prevent  @click="cancelCover">
      <loginSign></loginSign>
    </div>
    </transition>
  </div>
</template>

<script>
import test from './components/test.vue';
import loginSign from './components/loginSign.vue';
import lineComparisionChart from './components/lineComparisonChart.vue';
import lineChart from './components/lineChart.vue';
import horizonBarChart from './components/horizonBarChart.vue';
import barChart from './components/barChart.vue';
import topBar from './components/topBar.vue';
import dropDown from './components/dropDown.vue';
import excelDataImport from './components/excelDataImport.vue';
import commentDetail from './components/commentDetail.vue';
import commentAnalysis from './components/commentAnalysis.vue';
import concernedParticipleSetting from './components/concernedParticipleSetting.vue';
import concernedAppSetting from './components/concernedAppSetting.vue';
import personInfoSetting from "./components/personInfoSetting.vue";
import dropDownVue from './components/dropDown.vue';

export default {
  name: "App",
  components: {
    barChart,
    horizonBarChart,
    lineChart,
    lineComparisionChart,
    personInfoSetting,
    concernedAppSetting,
    concernedParticipleSetting,
    commentAnalysis,
    concernedParticipleSetting,
    commentDetail,
    excelDataImport,
    dropDown,
    topBar,
    loginSign,
    test,
  },
  data() {
    return {
      // 当前显示组件
      currentComp: "personInfoSetting",
      currentName: '首页',
      isCover: false,
    };
  },
  methods: {
    setComp(name, comp){
      this.currentComp = comp;
      this.currentName = name;
    },
    showLoginSign(){
      this.isCover = true;
    },

    // 点击空白处退出登录注册 
    cancelCover(){
      this.isCover = false;
    },
  },
};
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 主体区域 */
#mainContent {
  float: left;
  width: calc(100% - 230px);
}

/* 遮罩 */
.cover {
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.2);
}

/* 淡入淡出效果 */
.Fade-enter,
.Fade-leave-to {
	opacity: 0;
}
.Fade-enter-to,
.Fade-leave {
	opacity: 1;
}

.Fade-enter-active,
.Fade-leave-active {
	transition: all .5s;
}	
</style>
