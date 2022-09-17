import Vue from 'vue'
import App from './App.vue'
import "../src/assets/css/base.css"
import store from '../src/assets/js/store'
//把vuex定义成全局组件 
Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载store
  store
}).$mount('#app')
