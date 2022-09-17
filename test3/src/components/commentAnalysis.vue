<template>
    <div id="commentAnalysis">

        <textarea @input="textareaChange($event)" 
                  placeholder="请输入评论内容，回车显示结果" 
                  style="resize:none;overflow:hidden;outline:none;border:none" 
                  @keydown="handleKeyCode($event)"
        ></textarea>

        <div id="commentAnalysisResult">
            <h2>分析结果</h2>
            <p>分词结果</p>
            <ul id="participleResult" class="clearfix">
                <li v-for="(item, i) in participleResult" :key=i>{{item}}</li>
            </ul>
            <p>语义情感</p>
            <ul id="semantic">
                <li v-for="(item, i) in semanticList" :key=i>{{item}}</li>
            </ul>
        </div>
        <div id="recentCommentAnalysis">
            <h2>近期分析</h2>
            <button :class="{recentEchartchecked: recentEchartIndex === i}" 
                    v-for="(item, i) in recentEchartTitleList" :key=i
                    @click="recentEchartIndex = i"
            >{{item}}</button>
            <component :is="recentEchart[recentEchartIndex]"></component>
            <!-- <recentAnalysisSemanticEchart></recentAnalysisSemanticEchart> -->
            <!-- <recentAnalysisParticipleEchart></recentAnalysisParticipleEchart> -->
        </div>
    </div>
</template>
<script>

import recentAnalysisSemanticEchart from './recentAnalysisSemanticEchart.vue';
import recentAnalysisParticipleEchart from './recentAnalysisParticipleEchart.vue';

export default {
    name: 'commentAnalysis',
    data(){
        return {
            participleResult: ['分词一','分词二','分词三','分词四','分词一','分词二','分词三','分词四'],
            semanticList: ['好的','非常好','好极了'],
            recentEchartTitleList: ['近期分词结果','近期语义结果'],
            textareaContent: '',
            recentEchartIndex: 0,
            recentEchart: ['recentAnalysisParticipleEchart','recentAnalysisSemanticEchart',]
        }
    },
    methods: {
        textareaChange(e){
            e.target.style.height = '100px';
            e.target.style.height = e.target.scrollHeight + 'px';
        },

        handleKeyCode(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                alert("分析成功");
            }
        },

    },
    components: {
        recentAnalysisSemanticEchart,
        recentAnalysisParticipleEchart,
    }
}
</script>
<style>

    #commentAnalysis {
        width: 96%;
        margin-left: 2%;
        margin-right: 2%;
        text-align: left;
    }
    #commentAnalysis textarea{
        display: block;
        width: 100%;
        padding: 25px;
        height: 100px;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #eee;
        text-align: left;
        margin-bottom: 65px;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 30px;
        font-size: 16px;
    }

    #commentAnalysisResult {
        position: relative;
        float: left;
        width: 400px;
        /* height: 400px; */
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #eee;
        padding: 25px 20px;
        font-size: 16px;
    }

    #recentCommentAnalysis {
        position: relative;
        float: left;
        width: calc(98% - 400px);
        height: 500px;
        margin-left: 2%;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #eee;
        padding: 20px;
        font-size: 16px;
        text-align: right;
    }

    #commentAnalysisResult h2,
    #recentCommentAnalysis h2 {
        position: absolute;
        top: -40px;
        left: calc(50% - 50px);
        width: 100px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #4ABF8A;
        font-size: 24px;
        font-weight: bold;
    }

    #participleResult,
    #semantic {
        width: 90%;
        margin: 10px 0;
        margin-left: 10%;
        /* height: 30px; */
        /* background-color: pink; */
        
    }

    #participleResult li,
    #semantic li {
        float: left;
        height: 30px;
        line-height: 30px;
        color: #4ABF8A;
        background-color: #e5f9f4;
        border-radius: 10px;
        padding: 0 8px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    #participleResult li:last-child,
    #semantic li:last-child {
        margin-right: 0;
    }

    #recentCommentAnalysis button {
        width: 110px;
        height: 30px;
        margin-right: 20px;
        text-align: center;
        line-height: 30px;
        color: #aaa;
        background-color: #eee;
        border-radius: 6px;
    }

    .recentEchartchecked {
        color: #4ABF8A !important;
        background-color: #e5f9f4 !important;
    }
</style>