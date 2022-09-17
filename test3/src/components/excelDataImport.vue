<template>
    <div id="excelDataImport" class="clearfix">
        <div id="excelConfig">
            <h2>上传文件</h2>
            <div id="excelImportArea" @dragover="fileDragover($event)" @drop="fileDrop($event)">
                请拖拽excel文件到此处上传
            </div>
            <button @click="getFile()">点击上传</button><input type="file" @change="getFileData()" ref="file" style="display:none" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'>
        </div>
        <i></i>
        <div id="excelPreview">
            <h2>文件预览</h2>
            <div id="excelPreviewArea">
                
            </div>
            <button @click="upload()">确认上传</button>
        </div>
    </div>
</template>
<script>

import XLSX from "xlsx";
export default {
    name: 'excelDataImport',
    data(){
        return{
            fileName: '',
            batchFile: '',
            MAX_FILE_SIZE: 10 * 1000 * 1000,
            data:[],
        }
    },
    methods: {
        // 重定向到点击了input，来触发input的onchange上传文件事件
        getFile(){
            this.$refs.file.dispatchEvent(new MouseEvent("click"));
        },

        // 点击上传
        getFileData () {
            const file = this.$refs.file.files[0];

            if (!file) return
            if (file.size > this.MAX_FILE_SIZE) {
                return alert('文件大小不能超过10M')
            }
            // console.log(file);

            this.batchFile = file;

            // 清空，防止上传后再上传没有反应
            this.$refs.file.value = '';

            // 解析文件信息
            this.readExcel();
        },
        // 拖拽上传
        fileDragover (e) {
            // 阻止浏览器默认拖拽事件
            e.preventDefault()
        },
        fileDrop (e) {
            // 阻止浏览器默认拖拽后事件
            e.preventDefault()
            const file = e.dataTransfer.files[0] // 获取到第一个上传的文件对象

            console.log(file);

            let d1=/\.[^\.]+$/.exec(file.name);  
			if(!d1 || (d1[0].toLowerCase() != ".xls" && d1[0].toLowerCase() != ".xlsx")){
				alert('请选择excel文件');
				return false;
			}

            if (!file) return
            if (file.size > this.MAX_FILE_SIZE) {
                return alert('文件大小不能超过10M')
            }

            // 保存获取的未解析文件信息
            this.batchFile = file;

            // 解析文件信息
            this.readExcel();
        },

        // 解析文件
        readExcel() {
            // 实例化文件读取函数
            const fileReader = new FileReader();
            // 防止在onload函数中this获取不到全局对象
            let that = this;
            fileReader.onload = ev => {
                try {
                    const data = ev.target.result;
                    const workbook = XLSX.read(data, {
                    type: "binary"
                });
                const wsname = workbook.SheetNames[0]; //取第一张表
                const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
                //   console.log('ws',ws);
                // 将解析后的数据保存到data变量中
                that.data = ws;

                // 预览显示
                that.previewExcel();

                } catch (e) {
                    return false;
                }
            };
            // 读取excel文件
            fileReader.readAsBinaryString(this.batchFile);
        },

        // 预览文件
        previewExcel(){
            // <table>
            //         <tr>
            //             <th width="24%">评论时间</th>
            //             <th width="16%">评论地区</th>
            //             <th width="16%">评论语言</th>
            //             <th width="16%">评论人数</th>
            //             <th width="28%">评论详情</th>
            //         </tr>
            //         <tr>
            //             <td>2022-12-9 19:32</td>
            //             <td>浙江</td>
            //             <td>韩语</td>
            //             <td>932</td>
            //             <td>虽然这个app有很多的缺陷，但是相比与其他同类型的</td>
            //         </tr>
            //     </table>
            let tabel = document.createElement("table");
            let tr = document.createElement("tr");
            // 加入th
            for(let i in this.data[0]){
                tr.innerHTML = tr.innerHTML + "<th>"+i+"</th>";
            }
            tabel.appendChild(tr);

            for(let i=0;i<this.data.length;i++){
                // 注意这里不能直接 tr.innerHTML = "", 因为这样是引用的上面let出的tr，最后只会更改上面的tr，导致最后tabel中原先的th被覆盖为td
                let tr = document.createElement("tr");
                for(let j in this.data[i]){
                    // console.log(this.data[i][j]);
                    tr.innerHTML = tr.innerHTML + "<td>"+this.data[i][j]+"</td>";
                }
                tabel.appendChild(tr);
            }

            // console.log(tabel);

            let area = document.getElementById('excelPreviewArea');
            area.innerHTML = "";
            area.appendChild(tabel);

        },

        // 确认修改保存数据库
        upload () {
            console.log(this.data[0]);
            alert('上传成功');
        //     if (this.batchFile === '') {
        //         return alert('请选择要上传的文件')
        //     }

        //     let data = new FormData()
        //     data.append('upfile', this.batchFile)

        //     console.log(data);
        },        
    }
}

</script>
<style>
    #excelDataImport {
        width: 96%;
        /* height: 500px; */
        margin-left: 2%;
        margin-right: 2%;
        text-align: center;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #eee;
        padding-top: 30px;
        padding-bottom: 40px;
        font-size: 14px;
    }

    #excelDataImport i {
        float: left;
        width: 1px;
        height: 440px;
        border-left: 1px solid #ccc;
    }

    #excelConfig {
        float: left;
        width: 300px;
        margin-left: 8%;
        margin-right: 8%;
    }

    #excelConfig h2 {
        color: #4ABF8A;
    }

    #excelImportArea{
        width: 300px;
        height: 336px;
        border: 4px dashed #ccc;
        color: #a1a1a1;
        font-size: 18px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background-color: #f9f9f9;
        line-height: 328px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    #excelConfig button{
        width: 300px;
        height: 43px;
        line-height: 43px;
        text-align: center;
        background-color: #4ABF8A;
        color: #fff;
        font-size: 16px;
    }

    #excelConfig button:hover {
        background-color: #62dda6;
    }

    #excelPreview {
        float: left;
        width: calc(68% - 301px);
        height: 440px;
        margin-left: 8%;
        margin-right: 8%;
        /* background-color: pink; */
    }

    #excelPreview h2 {
        color: #4ABF8A;
    }

    #excelPreviewArea {
        overflow: auto;
        width: 100%;
        height: 336px;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    #excelPreviewArea table {
        width: 1500px;
        height: 200px;
        border-collapse:collapse;  
        border-spacing:0;
        table-layout: fixed;
    }

    #excelPreviewArea table th {
        width: 100px;
        line-height: 40px;
        border: 1px solid #4ABF8A; 
        background-color: #e5f9f4;
        color: #4ABF8A;
        word-break:keep-all;
         white-space:nowrap; 
         overflow:hidden; 
         text-overflow:ellipsis;
    }

    #excelPreviewArea table td {
        line-height: 40px;
        border: 1px solid #4ABF8A;
        word-break:keep-all;
        white-space:nowrap; 
        overflow:hidden;
        text-overflow:ellipsis;
    }

    #excelPreviewArea table tr:nth-child(odd) {
        background-color: #e5f9f4;
    }

    #excelPreview button{
        width: 300px;
        height: 43px;
        line-height: 43px;
        text-align: center;
        background-color: #4ABF8A;
        color: #fff;
        font-size: 16px;
    }

    #excelPreview button:hover {
        background-color: #62dda6;
    }

</style>