<template>
  <div id="loginSign">
    <div id="login" @click.stop>
        <h2>登录</h2>
        <input type="text" placeholder="用户名/邮箱" v-model="account">
        <br>
        <span>{{accountErrorList[accountErrorIndex]}}</span>
        <br>
        <input type="password" placeholder="密码" v-model="password">
        <br>
        <span>{{passwordErrorList[passwordErrorIndex]}}</span>
        <br>
        <button @click="logined()">登录</button>
        <div class="clearfix loginSignOther">
            <i></i><i>已有账号？<i @click="gotoSign()">去注册</i></i>
        </div>
    </div>
    <div id="sign" @click.stop>
        <h2>注册</h2>
        <input type="text" placeholder="用户名" v-model="userName">
        <br>
        <span>{{userNameErrorList[userNameErrorIndex]}}</span>
        <br>
        <input type="text" placeholder="邮箱" v-model="mailBox">
        <br>
        <span>{{mailBoxErrorList[mailBoxErrorIndex]}}</span>
        <br>
        <input type="password" placeholder="密码" v-model="password">
        <br>
        <span>{{passwordErrorList[passwordErrorIndex]}}</span>
        <br>
        <button @click="signed()">注册</button>
        <div class="clearfix loginSignOther">
            <i>忘记密码？</i><i>没有账号？<i @click="gotoLogin()">去登录</i></i>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginSign",
  props: {
    isCover: Boolean,
  },
  data() {
    return {
        delayTime: 3000,
        account: "",
        password: "",
        userName: "",
        mailBox: "",
        accountErrorIndex: 0,
        passwordErrorIndex: 0,
        userNameErrorIndex: 0,
        mailBoxErrorIndex: 0,
        accountErrorList: ["","输入不能为空","用户名中存在非法语句"],
        passwordErrorList: ["","输入不能为空","密码中存在非法语句","密码长度为6到15位","密码必须包含字符数字特殊字符"],
        userNameErrorList: ["","输入不能为空","用户名中存在非法语句"],
        mailBoxErrorList: ["","输入不能为空","邮箱格式不正确"],
    }
  },
  methods: {
    gotoLogin(){
        let login = document.querySelector('#login');
        let sign = document.querySelector('#sign');
        login.style.transform="rotateY(0deg)";
        sign.style.transform="rotateY(-180deg)";

        // 切换清除输入数据
        this.userName = "";
        this.mailBox = "";
        this.password = "";
    },
    gotoSign(){
        let login = document.querySelector('#login');
        let sign = document.querySelector('#sign');
        login.style.transform="rotateY(180deg)";
        sign.style.transform="rotateY(0deg)";

        // 切换清除输入数据
        this.account = "";
        this.password = "";
    },
    logined(){
        // 判断是否输入账号
        if(!this.account){
            this.accountErrorIndex = 1;
            let timer = setTimeout(()=>{this.accountErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 判断是否输入密码
        if(!this.password){
            this.passwordErrorIndex = 1;
            let timer = setTimeout(()=>{this.passwordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 正则查找sql注入语句
        let reg_sql = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;

        // 判断账号是否有sql注入
        if(reg_sql.test(this.account)){
            this.accountErrorIndex = 2;
            let timer = setTimeout(()=>{this.accountErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }
        // 判断密码是否有sql注入
        if(reg_sql.test(this.password)){
            this.passwordErrorIndex = 2;
            let timer = setTimeout(()=>{this.passwordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 判断账号是否能找到
        
        // 判断账号密码是否匹配

        // 成功登录
        alert('登录成功');
    },
    signed(){
        // 判断是否输入用户名
        if(!this.userName){
            this.userNameErrorIndex = 1;
            let timer = setTimeout(()=>{this.userNameErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }
        // 判断是否输入邮箱
        if(!this.mailBox){
            this.mailBoxErrorIndex = 1;
            let timer = setTimeout(()=>{this.mailBoxErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }
        // 判断是否输入密码
        if(!this.password){
            this.passwordErrorIndex = 1;
            let timer = setTimeout(()=>{this.passwordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        let reg_sql = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;

        // 判断用户名是否有sql注入
        if(reg_sql.test(this.userName)){
            this.userNameErrorIndex = 2;
            let timer = setTimeout(()=>{this.userNameErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 判断邮箱是否符合格式要求
        let reg_mail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!reg_mail.test(this.mailBox)){
            this.mailBoxErrorIndex = 2;
            let timer = setTimeout(()=>{this.mailBoxErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 判断密码长度
        if(this.password.length < 6 || this.password.length > 15){
            this.passwordErrorIndex = 3;
            let timer = setTimeout(()=>{this.passwordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 判断密码是否包含字符数字特殊字符
        let reg_password = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/;
        if(!reg_password.test(this.password)){
            this.passwordErrorIndex = 4;
            let timer = setTimeout(()=>{this.passwordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 判断密码是否存在sql注入
        if(reg_sql.test(this.password)){
            this.passwordErrorIndex = 1;
            let timer = setTimeout(()=>{this.passwordErrorIndex  = 0; clearTimeout(timer);}, this.delayTime);
            return;
        }

        // 注册成功
        alert('注册成功');
    },
  },
};
</script>
<style>
#loginSign {
    position: relative;
    width: 300px;
    margin: 100px auto;
    background-color: #fff;
    perspective: 1500px;
    -webkit-perspective: 1500px;
    -moz-perspective: 1500px;
    text-align: left;
}

#loginSign h2 {
    color: #4abf8a;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
}

#loginSign span {
    color: red;
    margin-left: 16px;
    line-height: 25px;
}

/* 忘记密码 */
#loginSign .loginSignOther i:first-child{
    float: left;
}

#loginSign .loginSignOther i:first-child:hover {
    color: #4abf8a;
    cursor: pointer;
}

/* 右侧去注册，注意float 属性不继承，需要子元素也加float属性     */
#loginSign .loginSignOther i:nth-child(2){
    float: right;
}

#loginSign .loginSignOther i:nth-child(2) i{
    float: right;
    color: #4abf8a;
    text-decoration: underline;
}

#loginSign .loginSignOther i:nth-child(2) i:hover {
    cursor: pointer;
}

#loginSign button {
    display: block;
    width: 100%;
    margin: 10px auto;
    margin-bottom: 20px;
    height: 35px;
    line-height: 35px;
    border-radius: 10px;
    color: #fff;
    background-color: #4abf8a;
    border: 1px solid #4abf8a;
    font-size: 16px;
}

#loginSign button:hover {
    background-color: #52d89c;
}

#loginSign input {
    width: 100%;
    height: 40px;
    border: 2px solid #b1e3cc;
    border-radius: 10px;
    padding: 0 15px;
}

#loginSign input:focus {
    border-color: #4abf8a;
    box-shadow: 3px 3px solid 
}

#login, #sign {
    position: absolute;
    width: 100%;
    padding: 20px;
    padding-bottom: 25px;
    /* height: 400px; */
    background-color: #fff;
    border-radius: 10px;
    backface-visibility:hidden;
    transition:all 1.5s;
}

#sign {
    transform: rotateY(-180deg);
}
</style>
