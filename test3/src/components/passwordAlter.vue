<template>
    <div id="passwordAlter">
        <label for="oldPassword">原密码：</label><input type="text" id="oldPassword" placeholder="请输入原密码" v-model="oldPassword">
        <br>
        <span>{{oldPasswordError[oldPasswordErrorIndex]}}</span> 
        <br>
        <label for="newPassword">新密码：</label><input type="password" id="newPassword" placeholder="请输入新密码" v-model="newPassword">
        <br>
        <span>{{newPasswordError[newPasswordErrorIndex]}}</span>
        <br>
        <label for="newPasswordConfirm">确认密码：</label><input type="password" id="newPasswordConfirm" placeholder="请再次输入新密码" v-model="newPasswordConfirm">
        <br>
        <span>{{newPasswordConfirmError[newPasswordConfirmErrorIndex]}}</span>
        <br>
        <button v-on:click="alterPassword()">确认修改</button>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    name: 'passwordAlter',
    data(){
        return {
            delayTime: 3000,
            oldPassword: "",
            newPassword: "",
            newPasswordConfirm: "",
            oldPasswordErrorIndex: 0,
            newPasswordErrorIndex: 0,
            newPasswordConfirmErrorIndex: 0,
            oldPasswordError: ["","输入不能为空","原密码输入错误"],
            newPasswordError: ["","输入不能为空","密码长度必须为6位到30位","密码必须包含大小写字母，数字和特殊字符","密码中含有非法语句"],
            newPasswordConfirmError: ["","输入不能为空","两次密码输入不一致"],
        }
    },
    methods: {

        // 点击确认修改按钮
        alterPassword(){

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

            // 是否存在任一空值
            if(!this.oldPassword){
                this.oldPasswordErrorIndex = 1;
                let timer = setTimeout(()=>{this.oldPasswordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }
            if(!this.newPassword){
                this.newPasswordErrorIndex = 1;
                let timer = setTimeout(()=>{this.newPasswordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }
            if(!this.newPasswordConfirm){
                this.newPasswordConfirmErrorIndex = 1;
                let timer = setTimeout(()=>{this.newPasswordConfirmErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }

            // 原始密码是否正确
            axios.get('http://localhost:3000/?id=1')
            .then(function (response) {
                console.log(this);
                console.log(response.data);
            })
                .catch(function (error) {
                console.log(error);
            }); 

            // 新密码长度是否为6到30位
            if(this.newPassword.length < 6 || this.newPassword.length > 30){
                this.newPasswordErrorIndex = 2;
                let timer = setTimeout(()=>{this.newPasswordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }

            // 新密码是否包含字符，数字和特殊字符
            let reg_newPassword =  /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/;
            if(!reg_newPassword.test(this.newPassword)){
                this.newPasswordErrorIndex = 3;
                let timer = setTimeout(()=>{this.newPasswordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }

            // 新密码是否存在sql注入
            reg_newPassword = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
            if(reg_newPassword.test(this.newPassword)){ //如果存在sql注入即匹配到了这些语句
                this.newPasswordErrorIndex = 4;
                let timer = setTimeout(()=>{this.newPasswordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }

            // 确认密码是否一致
            if(this.newPassword !== this.newPasswordConfirm){
                this.newPasswordConfirmErrorIndex = 2;
                let timer = setTimeout(()=>{this.newPasswordConfirmErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
                return;
            }
            alert("修改成功");
            this.oldPassword = "";
            this.newPassword = "";
            this.newPasswordConfirm = "";

        },
    }
}
</script>

<style>
    #passwordAlter{
        width: 100%;
    }
    #passwordAlter label{
        display: inline-block;
        height: 40px;
        width: 70px;
        font-size: 14px;
        line-height: 43px;
        /* background-color: green; */
        text-align: right;
    }
    #passwordAlter input{
        width: 85%;
        height: 40px;
        margin-left: 2%;
        border: 2px solid rgb(221, 221, 221);
        padding: 0 15px;
        margin-top: 10px;
    }
    #passwordAlter input:focus {
        border: 1px solid #4ABF8A;
    }
    #passwordAlter span{
        margin-left: 90px;
        line-height: 35px;
        color: red;
    }
    #passwordAlter button{
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
    #passwordAlter button:hover{
        background-color: rgb(216, 250, 241);
    }
</style>