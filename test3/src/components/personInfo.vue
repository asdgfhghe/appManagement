<template>
  <div id="personInfo" class="clearfix">
    <div id="personInfo-left">
        <img>
        <p>{{$store.state.UserName}}</p>
    </div>
    <div id="personInfo-right">
        <ul>
            <li>
                权限：<i>普通用户</i>
            </li>
            <li>
                手机号：<i>18368128756</i>
            </li>
            <li>
                邮箱：<i>2020329@zstu.edu.cn</i>
            </li>
            
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'personInfo',
    data(){
        return{
        }
    },
    methods: {

    },
}
</script>
<style>
#personInfo{
    width: 80%;
    margin-left: 2%;
    padding: 15px;
    /* height: 150px; */
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 3px 3px 10px #eee;
}

#personInfo-left{
    float: left;
    width: 50%;
    padding-top: 25px;
    padding-left: 25px;
    /* height: 100px; */
    /* background-color: red; */
    text-align: left;
}

#personInfo-left img{
    width: 70px;
    height: 70px;
    background-color: #ccc;
    border-radius: 100%;
}

#personInfo-left p{
    display: inline-block;
    width: calc(90% - 70px);
    /* height: 80px; */
    font-size: 18px;
    color: #4ABF8A;
    vertical-align: center;
    margin-left: 10px;
    font-weight: bold;
    /* background-color: red; */
    vertical-align: middle;
}

#personInfo-right{
    float: left;
    width: 50%;
    /* height: 100px; */
    /* background-color: skyblue; */
    text-align: left;
    border-left: 1px solid #ccc;
}

#personInfo-right ul{
    width: 100%;
}

#personInfo-right ul li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-left: 20px;
}
</style>