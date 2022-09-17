<template>
    <div id="permissionsAlter">
        <label for="oldPermissions">原权限：</label><input type="text" id="oldPermissions"  disabled="disabled" v-model="oldPermissions">
        <br>
        <span></span> 
        <br>
        <label for="newPermissions">申请权限：</label>
        <select id="newPermissions">
            <option value="">管理员</option>
            <option value="">超级管理员</option>
        </select>
        <br>
        <span></span>
        <br>
        <button v-on:click="alterPermissions()">确认申请</button>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    name: 'permissionsAlter',
    data(){
        return {
            delayTime: 3000,
            oldPermissions: "普通用户",
            newPermissions: "",
            // newUserNameErrorIndex: 0,
            // newUserNameError: ["","输入不能为空或者只包含空格","用户名长度不能超过15位","用户名存在违禁词"],
        }
    },
    methods: {

        // 点击确认修改按钮
        alterPermissions(){

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
            

            // 发送请求
            axios.get('http://localhost:3000/?id=1')
            .then(function (response) {
                console.log(this);
                console.log(response.data);
            })
                .catch(function (error) {
                console.log(error);
            }); 


            alert("申请成功，等待管理员审核");
            this.newUserName = "";
        },
    }
}
</script>

<style>
    #permissionsAlter{
        width: 100%;
    }
    #permissionsAlter label{
        display: inline-block;
        height: 40px;
        width: 70px;
        font-size: 14px;
        line-height: 43px;
        /* background-color: green; */
        text-align: right;
    }
    #permissionsAlter input,
    #permissionsAlter select{
        width: 85%;
        height: 40px;
        margin-left: 2%;
        border: 2px solid rgb(221, 221, 221);
        padding: 0 15px;
        margin-top: 10px;
    }

    #permissionsAlter select {
        position: relative;
        padding-right: 1.8rem;
        /* color: #afbac0; */
        font-size: 14px;
        /* 去掉选中框线加粗 */
        outline: none;
        /*去掉默认的下拉三角*/
        appearance:none;  
        -moz-appearance:none;  
        -webkit-appearance:none;
        background: url("../assets/image/arow.png") no-repeat 98% 50% transparent;
        background-size: 25px;
    }

    #permissionsAlter select:hover {
        border: 2px solid #4ABF8A;
        cursor: pointer;
    }

    #permissionsAlter select:focus {
        border: 2px solid #4ABF8A;
    }
 
    #permissionsAlter input:focus {
        border: 1px solid #4ABF8A;
    }
    #permissionsAlter span{
        margin-left: 90px;
        line-height: 35px;
        color: red;
    }
    #permissionsAlter button{
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
    #permissionsAlter button:hover{
        background-color: rgb(216, 250, 241);
    }
</style>