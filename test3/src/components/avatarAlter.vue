<template>
    <div id="avatarAlter">
        <label>头像预览：</label> <img id="avatarPreview">
        <br>
        <br>
        <label for="avatarAddress">网图上传：</label><input type="text" id="avatarAddress" placeholder="请输入图片地址"><li>上传</li>
        <br>
        <span></span>
        <br>
        <label>本地上传：</label><div id="avatarUploadArea">点击或拖拽上传图片</div>
        <span></span>
        <br>
        <button>确认修改</button>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    name: 'avatarAlter',
    data(){
        return {

        }
    },
    methods: {

    }
}
</script>
<style>
    #avatarAlter{
        width: 100%;
    }

    #avatarAlter label{
        display: inline-block;
        height: 40px;
        width: 70px;
        font-size: 14px;
        line-height: 43px;
        /* background-color: green; */
        text-align: right;
    }

    #avatarAlter input{
        width: calc(85% - 60px);
        height: 40px;
        margin-left: 2%;
        border: 2px solid rgb(221, 221, 221);
        border-right: none;
        padding: 0 15px;
        margin-top: 10px;
    }

    #avatarAlter li{
        display: inline-block;
        width: 60px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        background-color: rgb(229, 249, 244);
        border: 1px solid #4ABF8A;
        color: #4ABF8A;
        font-weight: bold;
    }

    #avatarAlter li:hover {
        background-color: rgb(216, 250, 241);
    }

    #avatarAlter input:focus {
        border: 1px solid #4ABF8A;
        border-right: none;
    }

    #avatarAlter img{
        width: 70px;
        height: 70px;
        background-color: #ccc;
        margin-left: 30px;
        border-radius: 100%;
    }
    
    #avatarAlter span{
        margin-left: 90px;
        line-height: 35px;
        color: red;
    }

    #avatarUploadArea {
        display: inline-block;
        width: 85%;
        height: 100px;
        margin-left: 2%;
        background-color: rgb(245, 245, 245);
        border-radius: 10px;
        border: 3px dashed rgb(221, 221, 221);
        line-height: 100px;
        font-size: 16px;
        color: #ccc;
        text-align: center;
    }

    #avatarUploadArea:hover{
        cursor: pointer;
    }
    #avatarAlter button{
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
    #avatarAlter button:hover{
        background-color: rgb(216, 250, 241);
    }
</style>
