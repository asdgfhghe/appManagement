import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    // 组件中的data，存储公共的变量
    state: {
        UserName: "chao",
    },
    // 相当于methods，存储方法
    mutations: {
        setUserName(state, name){
            state.UserName = name;
        }
    },

    actions: {}
})
export default store