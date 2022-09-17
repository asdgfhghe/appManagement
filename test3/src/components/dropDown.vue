<!-- 下拉菜单
     只考虑每级菜单不超过9个子项 -->
<template>
    <div id="dropDown">
        <h2>虹软app评论分析系统</h2>
        <img :src=srcPath>
        <span>{{$store.state.UserName}}</span>
      <ul>
        <li v-for="(items, i) in funcList" :key=i>
            <!-- 一个a为一个选项，这里第一个和最后一个一级菜单为首页和本地，不添加下拉图标 -->
            <!-- i为名称图标，span为下拉图标 -->
            <!-- i通过addClass这个computed计算属性动态添加funcList中每一项一级菜单的icon类 -->
            <!-- span直接绑定class属性，通过逻辑判断是下拉图标还是上拉图标 -->
            <a :class="{'dropDownChecked': i===checkNum}" @click="toggle(i)">
                <i :class="addClass(i)"></i>
                {{items.name}}
                <span :class="{'iconfont':true,'icon-xiangxia': !items.visible && i!==checkNum && i!==0 && i!==(funcList.length-1),'icon-xiangshang': items.visible && i!==0 && i!==(funcList.length-1)}"></span>
            </a>
            <!-- 子级是否可见 -->
            <ul v-show="items.visible">
                <li v-for="(item, j) in items.child" :key=j>
                    <!-- i*10+j 作为选择的数字使用，这样若每级不超过9项，就可通过每一级的下标组合在一起使当前选择的数字唯一 -->
                    <a :class="{'dropDownChecked': (i*10+j)===checkNum}" @click="toggle2(i, j)">{{item.name}}</a>
                </li>
            </ul>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
    name: 'dropDown',
    data(){
        return{
            // 当前选择的组件下标
            checkNum: 0,
            funcList: [
                {
                    icon: 'icon-ai-home',
                    name:'首页',
                    comp: 'loginSign'
                },{
                    icon: 'icon-fenxi',
                    name: '数据分析',
                    visible: false,
                    child: [
                        {
                            name: "版本变化",
                            comp: 'lineChart'
                        },{
                            name: "下载量变化",
                            comp: 'horizonBarChart'
                        },{
                            name: "评论数变化",
                            comp: 'barChart'
                        }
                    ]
                },{
                    icon: 'icon-shujudaoru',
                    name: '数据导入',
                    visible: false,
                    child: [
                        {
                            name: "Excel导入",
                            comp: 'excelDataImport'
                        },{
                            name: "自动导入",
                            comp: 'excelDataImport'
                        }
                    ]
                },{
                    icon: 'icon-fenxi1',
                    name: '对比分析',
                    visible: false,
                    child: [
                        {
                            name: "下载量对比",
                            comp: 'lineComparisionChart'
                        },{
                            name: "评论数对比",
                            comp: 'lineComparisionChart'
                        }
                    ]
                },{
                    icon: 'icon-menu_plgl',
                    name: '评论管理',
                    visible: false,
                    child: [
                        {
                            name: "查看评论",
                            comp: 'commentDetail'
                        },{
                            name: "评论分析",
                            comp: 'commentAnalysis'
                        }
                    ]
                },{
                    icon: 'icon-denglu1',
                    name:'用户本地',
                    comp: 'personInfoSetting'
                },
            ],
            srcPath: require("../assets/image/shortcut.jpg"),
        }
    },
    computed: {
        // 计算属性不带参数，使用匿名函数
        addClass(){
            return function(i){
                return "iconfont "+ this.funcList[i].icon;
            }
        },
    },
    methods: {
        toggle(i){
            // 一级对象的有一个visible属性控制二级是否显示
            this.funcList[i].visible = !this.funcList[i].visible;
            // 第一个是首页，最后一个是本地，这两个一级菜单可以选中，其他一级菜单不可选中
            if(i===0 || i===this.funcList.length-1){
                this.checkNum = i;
                console.log(this.funcList[i].name,this.funcList[i].comp);
                this.$emit('changeCompIndex',this.funcList[i].name,this.funcList[i].comp);
            }
        },
        toggle2(i, j){
            this.checkNum = i*10+j;
            console.log(this.funcList[i].child[j].name,this.funcList[i].child[j].comp);
            this.$emit('changeCompIndex',this.funcList[i].child[j].name,this.funcList[i].child[j].comp);
        }
    }
}
</script>
<style src="../assets/font/iconfont.css"  scoped></style>
<style>
/* 菜单栏 */
#dropDown {
  float: left;
  width: 230px;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 3px 3px 10px #eee;
  border-radius: 0 0 15px 0;
}

#dropDown h2 {                                     
  color: #4abf8a;
}

#dropDown i {
    font-weight: bold;
    margin-right: 5px;
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#dropDown ul span {
    margin-left: 10px;
    font-size: 12px;
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#dropDown img {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  /* background-color: #ccc; */
}

#dropDown>span {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
  font-weight: bold;
}

#dropDown>ul {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

#dropDown li a{
  display: block;
  width: 100%;
  height: 40px;
  text-align: left;
  padding-left: 90px;
  font-size: 16px;
  line-height: 40px;
}

#dropDown>ul>li>a{
    padding-left: 70px;
}

#dropDown li a:hover{
  cursor: pointer;
  /* background-color: #E5F9F4; */
  background-color: #f7f9fc;
  color: #666;
}

.dropDownChecked {
  background-color: #E5F9F4 !important;
  color: #4ABF8A !important;
}
</style>