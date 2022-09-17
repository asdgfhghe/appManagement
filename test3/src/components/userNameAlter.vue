<template>
    <div id="passwordAlter">
        <label for="oldUserName">原用户名：</label><input type="text" id="oldUserName"  disabled="disabled" v-model="oldUserName">
        <br>
        <span></span> 
        <br>
        <label for="newUserName">新用户名：</label><input  id="newUserName" placeholder="请输入新用户名" v-model="newUserName">
        <br>
        <span>{{newUserNameError[newUserNameErrorIndex]}}</span>
        <br>
        <button v-on:click="alterUserName()">确认修改</button>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    name: 'userNameAlter',
    data(){
        return {
            delayTime: 3000,
            oldUserName: this.$store.state.UserName,
            newUserName: "",
            newUserNameErrorIndex: 0,
            newUserNameError: ["","输入不能为空或者只包含空格","用户名长度不能超过15位","用户名存在违禁词"],
        }
    },
    methods: {

        // 点击确认修改按钮
        alterUserName(){

            // axios.post('http://localhost:3000/id',{
            //     "id": 5,
            //     "name": "chao",
            // })
            // .then(function (response) {
            //     console.log(response);
            // })
            //     .catch(function (error) {
            //     console.log(error);
            // });

            // 新用户名是否为空
            if(!this.newUserName || !this.newUserName.trim()){
                this.newUserNameErrorIndex = 1;
                let timer = setTimeout(()=>{this.newUserNameErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }
            

            // 新用户名是否长度超过15位
            if(this.newUserName.length > 15){
                this.newUserNameErrorIndex = 2;
                let timer = setTimeout(()=>{this.newUserNameErrorIndex = 0;clearTimeout(timer);}, this.delayTime);
            }

            // 新用户名是否存在违禁词(暂时不做)
            // 考虑频繁点击拦截处理(暂时不做)

            // 发送请求
            axios.get('http://localhost:3000/?id=1')
            .then(function (response) {
                console.log(this);
                console.log(response.data);
            })
                .catch(function (error) {
                console.log(error);
            }); 


            alert("修改成功");
            this.newUserName = "";
        },
    }
}
</script>

<style>
    #userNameAlter{
        width: 100%;
    }
    #userNameAlter label{
        display: inline-block;
        height: 40px;
        width: 70px;
        font-size: 14px;
        line-height: 43px;
        /* background-color: green; */
        text-align: right;
    }
    #userNameAlter input{
        width: 85%;
        height: 40px;
        margin-left: 2%;
        border: 2px solid rgb(221, 221, 221);
        padding: 0 15px;
        margin-top: 10px;
    }
    #userNameAlter input:focus {
        border: 1px solid #4ABF8A;
    }
    #userNameAlter span{
        margin-left: 90px;
        line-height: 35px;
        color: red;
    }
    #userNameAlter button{
        display: block;
        width: 200px;
        height: 40px;
        margin: 0 auto;
        background-color: rgb(229, 249, 244);
        color: #4ABF8A;
        font-weight: bold;
        border: 1px solid #4ABF8A;
        margin-top: 10px;
    }
    #userNameAlter button:hover{
        background-color: rgb(216, 250, 241);
    }
</style>