<template>
    <div id="test">
        <loading v-if="isload"><h2>test</h2></loading> 
    </div>
</template>
<script>
import {get, post} from '../assets/js/http.js';
import loading from './loading.vue';

export default {
  name: 'test',
  data(){
    return {
      isload: true,
    }
  },
  methods: {
    
  },
  mounted(){
    // get请求
    get('http://localhost:3000/',{id: 1, name: 'Tom'})
    .then(res => {this.isload=false;console.log(res)})
    .catch(err => {this.isload=false;console.log(err);alert('获取失败，请重试')});

    // post请求
    post('http://localhost:3000/id',{id: 1, name: 'Tom', year: 19, sex: 'male', level: 99})
    .then(res => {this.isload=false;console.log(res)})
    .catch(err => {this.isload=false;console.log(err);alert('更新数据成功')});

    // async和await使用
    // async function firstGet(){
    //   let res = await get('http://localhost:3000/',{id: 1, name: 'Tom'});
    //   return res;
    // }
    // try {
    //   firstGet().then(res => console.log(res));
      
    // }catch(err) {
    //   console.log(err);
    // }


  },
  components: {
    loading,
  }
}
</script>
<style>
  #test {
        overflow: hidden;
        width: 96%;
        height: 500px;
        margin-left: 2%;
        text-align: center;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #eee;
        padding-top: 30px;
        padding-bottom: 40px;
        font-size: 14px;
  }
</style>
