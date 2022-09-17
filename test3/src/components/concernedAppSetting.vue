<template>
    <div id="concernedAppSetting">
        <label>已关注app：</label>
        <div id="concernedAppList">
            <ul>
                <li class="clearfix" v-for="(item, i) in concernedAppList" :key=i @click="item.selected = !item.selected" :class="{appChecked: item.selected}">
                    <img v-bind:src="item.link"><span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <br>
        <br>
        <label>推荐app：</label>
        <div id="recommendAppList">
            <ul>
                <li v-for="(item, i) in recommendAppList" :key=i @click="addRecommendApp(item)">{{item}}</li>
            </ul>
        </div>
        <br>
        <div id="concernedAppOption" class="clearfix">
            <button @click="deleteApp()">删除</button>
            <button>增加</button>
            <button @click="alertSure()">确认修改</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'concernedAppSetting',
    data(){
        return {
            concernedAppList: [{
                selected: false,
                name: "淘宝",
                link: "https://ts1.cn.mm.bing.net/th/id/R-C.efd8af947b68e5d9d791f657d59dda2c?rik=Tf%2fqQd%2fQvHAShA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44703%2fgoods_water_44703_698_620.44_.png&ehk=0M6rIJc9HcNvmaagiHQz2JotDQrsnf8jYLqb%2bu1YHpk%3d&risl=&pid=ImgRaw&r=0",
            },
            {
                selected: false,
                name: "qq",
                link: "https://ts1.cn.mm.bing.net/th/id/R-C.efd8af947b68e5d9d791f657d59dda2c?rik=Tf%2fqQd%2fQvHAShA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44703%2fgoods_water_44703_698_620.44_.png&ehk=0M6rIJc9HcNvmaagiHQz2JotDQrsnf8jYLqb%2bu1YHpk%3d&risl=&pid=ImgRaw&r=0",
            },
            {
                selected: false,
                name: "测试",
                link: "https://ts1.cn.mm.bing.net/th/id/R-C.efd8af947b68e5d9d791f657d59dda2c?rik=Tf%2fqQd%2fQvHAShA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44703%2fgoods_water_44703_698_620.44_.png&ehk=0M6rIJc9HcNvmaagiHQz2JotDQrsnf8jYLqb%2bu1YHpk%3d&risl=&pid=ImgRaw&r=0",
            },
            {
                selected: false,
                name: "测试",
                link: "https://ts1.cn.mm.bing.net/th/id/R-C.efd8af947b68e5d9d791f657d59dda2c?rik=Tf%2fqQd%2fQvHAShA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44703%2fgoods_water_44703_698_620.44_.png&ehk=0M6rIJc9HcNvmaagiHQz2JotDQrsnf8jYLqb%2bu1YHpk%3d&risl=&pid=ImgRaw&r=0",
            },
            {
                selected: false,
                name: "测试",
                link: "https://ts1.cn.mm.bing.net/th/id/R-C.efd8af947b68e5d9d791f657d59dda2c?rik=Tf%2fqQd%2fQvHAShA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44703%2fgoods_water_44703_698_620.44_.png&ehk=0M6rIJc9HcNvmaagiHQz2JotDQrsnf8jYLqb%2bu1YHpk%3d&risl=&pid=ImgRaw&r=0",
            },
            {
                selected: false,
                name: "测试",
                link: "https://ts1.cn.mm.bing.net/th/id/R-C.efd8af947b68e5d9d791f657d59dda2c?rik=Tf%2fqQd%2fQvHAShA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44703%2fgoods_water_44703_698_620.44_.png&ehk=0M6rIJc9HcNvmaagiHQz2JotDQrsnf8jYLqb%2bu1YHpk%3d&risl=&pid=ImgRaw&r=0",
            },
            ],
            recommendAppList: ["app1","app2","app3","app4","app5","app1","app2","app3","app4","app5","app1","app2","app3","app4","app5"],
            deleteNum: [],
        }
    },
    methods: {
        deleteApp(i){
            for(let i=0;i<this.concernedAppList.length;i++){
                if(this.concernedAppList[i].selected === true){
                    this.concernedAppList.splice(i,1);
                    i--;
                }
            }
        },
        addRecommendApp(item){
            let obj={
                selected: false,
                name: item,
                link: "https://ts1.cn.mm.bing.net/th/id/R-C.efd8af947b68e5d9d791f657d59dda2c?rik=Tf%2fqQd%2fQvHAShA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f44703%2fgoods_water_44703_698_620.44_.png&ehk=0M6rIJc9HcNvmaagiHQz2JotDQrsnf8jYLqb%2bu1YHpk%3d&risl=&pid=ImgRaw&r=0",
            }
            this.concernedAppList.push(obj);
        },
        alertSure(){
            alert('修改成功');
        }
    }

}
</script>
<style>
    #concernedAppSetting {
        width: 80%;
        margin-left: 2%;
        padding: 25px;
        /* height: 150px; */
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #eee;
        text-align: left;
    }
    #concernedAppSetting label {
        display: inline-block;
        height: 40px;
        width: 90px;
        font-size: 14px;
        line-height: 43px;
        /* background-color: green; */
        text-align: right;
    }

    #concernedAppSetting button {
        float: left;
        /* display: block; */
        width: 100px;
        height: 40px;
        background-color: rgb(229, 249, 244);
        color: #4ABF8A;
        font-weight: bold;
        border: 1px solid #4ABF8A;
        margin-left: 25px;
    } 

    #concernedAppSetting button:first-child {
        margin-left: 0;
    }
    #concernedAppSetting button:hover {
        background-color: rgb(216, 250, 241);
    }
    #concernedAppList {
        display: inline-block;
        width: calc(98% - 90px);
        /* height: 160px; */
        border-radius: 10px;
        /* border: 2px solid rgb(62, 176, 147); */
        vertical-align: top;
        padding: 20px;
        padding-bottom: 0;
        background-color: rgb(243, 243, 243);
    }
    
    #concernedAppList li {
        display: inline-block;
        /* width: 120px; */
        height: 60px;
        border: 2px solid #fff;
        line-height: 56px;
        padding: 0;
        margin-right: 20px;
        margin-bottom: 10px;
        border-radius: 10px;
        overflow: hidden;
        background-color: #fff;
    }

    #concernedAppList li:hover{
        cursor: pointer;
        /* border: 2px solid #4ABF8A; */
    }

    #concernedAppList li:last-child{
        margin-right: 0;
    }

    #concernedAppList li img {
        float: left;
        width: 54px;
        height: 54px;
        background-color: orange;
        margin-top: 1px;
        margin-left: 1px;
        border-radius: 8px;
    }

    #concernedAppList li span {
        float: left;
        font-weight: bold;
        font-size: 14px;
        margin: 0 20px;
    }

    #recommendAppList{
        display: inline-block;
        width: calc(98% - 90px);
        /* height: 40px; */
        /* background: red; */
        vertical-align: top;
        padding-bottom: 5px;
    }

    #recommendAppList li {
        float: left;
        width: 60px;
        height: 30px;
        border-radius: 8px;
        font-size: 14px;
        line-height: 30px;
        background-color: rgb(229, 249, 244);
        color: #4ABF8A;
        text-align: center;
        margin-right: 10px;
        margin-top: 5px;
    }
    #recommendAppList li:last-child {
        margin-right: 0;
    }

    #recommendAppList li:hover{
        cursor: pointer;
        background-color: rgb(216, 250, 241);
    }

    #concernedAppOption {
        height: 40px;
        margin-top: 40px;
        margin-left: calc(50% - 175px);
    }

    .appChecked {
        border: 2px solid #4ABF8A !important;
    }
</style>
