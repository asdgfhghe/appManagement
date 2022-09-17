<!-- 顶部菜单栏  -->
<template>
    <div id="topBar">
      <ul class="clearfix">
        <li><i></i>{{currentName}}</li>
        <li><i>&#xe697;</i>反馈</li>
        <li v-show="$store.state.UserName===''" @click="loginSign()">登录&注册</li>
        <li v-show="$store.state.UserName!==''" @click="loginOut()"><i>&#xe613;</i>退出登录</li>
        <li v-show="$store.state.UserName!==''">{{$store.state.UserName}}</li>
      </ul>
    </div>
</template>
<script>
export default{
    name: 'topBar',
    data(){
        return {
          // 下面这个是错误的，数据虽然赋值了，但是只是第一次赋值，store的值更改后userName不会更新，vuex能保证store里面的数据更新
          // userName: this.$store.state.UserName = "",
        }
    },
    // props: ['currentName']
    props: {
      currentName: String,
    },
    methods: {
        loginOut(){
          this.$store.commit('setUserName','');
        },
        loginSign(){
          this.$emit('showLoginSign');
        },
    }
}
</script>
<style>
#topBar {
  padding: 0 2%;
  width: 100%;
  height: 35px;
  background-color: #e5f9f4;
  box-shadow: 3px 3px 10px #eee;
  margin-bottom: 25px;
}

#topBar i {
    margin-right: 5px;
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#topBar li {
  float: right;
  line-height: 35px;
  font-size: 14px;
  margin-right: 30px;
  color: #777;
}

#topBar li:nth-child(n+2):hover {
  cursor: pointer;
  color: #4abf99;
}

#topBar li:first-child {
  float: left;
}

</style>