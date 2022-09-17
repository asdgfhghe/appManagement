<template>
    <div id="concernedParticipleSetting">
        <label>已关注分词：</label>
        <div id="concernedParticipleList">
            <ul>
                <li v-for="(item, i) in concernedParticipleList" :key=i>
                    <span>{{item}}</span><i @click="deleteParticiple(i)">&times;</i>
                </li>
            </ul>
        </div>
        <br>
        <br>
        <br>
        <label>添加分词：</label>
        <div id="addParticipleList">
            <input type="text" placeholder="请输入需要添加的分词" v-model="inputParticiple" @input="inputChange()"><button @click="addParticipleList()" :class="{buttonDisable: isButtonDisable,}" :disabled='isButtonDisable'>添加</button>
        </div>
        <br>
        <br>
        <label>推荐分词：</label>
        <div id="recommendParticiple">
            <ul>
                <li v-for="(item, i) in recommendParticipleList" :key=i @click="recommendParticiple(i)">
                    + <span>{{item}}</span>
                </li>
            </ul>
        </div>
        <br>
        <br>
        <button @click="alertSure()">确认修改</button>
    </div>
</template>
<script>
export default {
    name: 'concernedParticipleSetting',
    data(){
        return {
            concernedParticipleList: ['分词一','分词二','分词三','分词一','分词二','分词三','分词一','分词二','分词三','分词一','分词二','分词三'],
            recommendParticipleList: ['分词1','分词2','分词3'],
            inputParticiple: '',
            isButtonDisable: true,
        }
    },
    methods: {
        deleteParticiple(index){
            this.concernedParticipleList.splice(index,1);
        },
        recommendParticiple(index){
            let temp = this.recommendParticipleList[index];
            this.concernedParticipleList.push(temp);
        },
        addParticipleList(){
            let temp = this.inputParticiple;
            this.concernedParticipleList.push(temp); 
            this.inputParticiple = '';
            this.isButtonDisable = true;
        },
        inputChange(){
            console.log(this.inputParticiple);
            if(this.inputParticiple.trim() === ""){
                this.isButtonDisable = true;

            }else{
                this.isButtonDisable = false;
            }
        },
        alertSure(){
            alert("修改成功");
        }
    },
    

}
</script>

<style>
    #concernedParticipleSetting {
        width: 80%;
        margin-left: 2%;
        padding: 25px;
        /* height: 350px; */
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #eee;
        text-align: left;
    }
    #concernedParticipleSetting label {
        display: inline-block;
        height: 40px;
        width: 90px;
        font-size: 14px;
        line-height: 43px;
        /* background-color: green; */
        text-align: right;
    }

    #concernedParticipleSetting>button {
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

    #concernedParticipleSetting>button:hover {
        background-color: rgb(216, 250, 241);
    }

    #concernedParticipleList {
        display: inline-block;
        width: calc(98% - 90px);
        /* height: 160px; */
        border-radius: 10px;
        /* border: 2px solid rgb(62, 176, 147); */
        vertical-align: top;
        padding-top: 10px;
        padding-bottom: 0;
        /* background-color: rgb(243, 243, 243); */
    }

    #concernedParticipleList li {
        position: relative;
        float: left;
        margin-right: 30px;
        margin-bottom: 10px;
        /* width: 80px; */
        height: 30px;
        line-height: 30px;
        text-align: left;
        padding-left: 8px;
        vertical-align: middle;
        background-color: #e5f9f4;
        color: #4ABF8A;
    }

    #concernedParticipleList li:last-child {
        margin-right: 0;
    }

    #concernedParticipleList li::after {
        content: "";
        position: absolute;
        right: -30px;
        top: 0;
        width: 0px;
        height: 0px;
        border: 15px solid red;
        border-color: transparent transparent transparent #e5f9f4;
    }

    #concernedParticipleList li i {
        display: inline-block;
        width: 18px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 20px;
        margin: 5px 8px;
        /* background-color: red; */
    }

    #concernedParticipleList li i:hover {
        cursor: pointer;
    }

    #concernedParticipleList li span {
        position: relative;
        top: -3px;
    }

    #addParticipleList {
        position: relative;
        display: inline-block;
        height: 40px;
        width: calc(98% - 90px);
        line-height: 40px;
    }

    #addParticipleList input {
        width: calc(100% - 90px);
        height: 40px;
        border: 1px solid #aaa;
        border-radius: 10px 0 0 10px;
        border-right: none;
        padding: 0 20px;
    }

    #addParticipleList input:focus {
        border-color: #4abf8a;
    }

    #addParticipleList button {
        position: absolute;
        top: 0;
        right: 0;
        width: 90px;
        height: 40px;
        line-height: 38px;
        text-align: center;
        background-color: #e5f9f4;
        color: #4ABF8A;
        font-weight: bold;
        border: 1px solid #4ABF8A; 
    }

    .buttonDisable {
        background-color: #eee !important;
        color: rgb(157, 157, 157) !important;
        border: 1px solid #ccc !important;
    }

    /* #addParticipleList button:hover {
        background-color: rgb(216, 250, 241);
    } */

    #recommendParticiple {
        display: inline-block;
        width: calc(98% - 90px);
        border-radius: 10px;
        /* border: 2px solid rgb(62, 176, 147); */
        vertical-align: top;
        padding-top: 10px;
        padding-bottom: 0;
    }

    #recommendParticiple li {
        position: relative;
        float: left;
        /* width: 80px; */
        height: 24px;
        text-align: left;
        padding-left: 5px;
        line-height: 24px;
        background-color: rgb(226, 226, 226);
        margin-right: 25px;
    }

    #recommendParticiple li:hover {
        cursor: pointer;
    }

    #recommendParticiple li::after {
        content: "";
        position: absolute;
        top: 0;
        right: -24px;
        width: 0;
        height: 0;
        border: 12px solid pink;
        border-color: transparent transparent transparent rgb(226, 226, 226);
    }

    #recommendParticiple li:last-child {
        margin-right: 0;
    }

    #recommendParticiple li span {
        margin-right: 10px;
    }
</style>