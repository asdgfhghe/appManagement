<template>
  <div id="commentDetail">
    <div id="commentDetail-search">
      <ul class="clearfix">
        <li>
          <label for="commentDetail-search-area">请选择地区：</label>
          <br />
          <select id="commentDetail-search-area">
            <option value="">浙江</option>
            <option value="">上海</option>
          </select>
        </li>
        <li>
          <label for="commentDetail-search-app">请选择app：</label>
          <br />
          <select id="commentDetail-search-app">
            <option value="">app1</option>
            <option value="">app2</option>
          </select>
        </li>
        <li>
          <label for="commentDetail-search-language">请选择语言：</label>
          <br />
          <select id="commentDetail-search-language">
            <option value="">中文</option>
            <option value="">英语</option>
          </select>
        </li>
        <li>
          <label for="commentDetail-search-time">请选择时间：</label>
          <br />
          <input
            id="commentDetail-search-time"
            required
            min="2020-01-01"
            max="2022-09-23"
            type="date"
          />
        </li>
        <li>
          <label for="commentDetail-search-fuzzyQuery">模糊查询：</label>
          <br />
          <input
            type="text"
            id="commentDetail-search-fuzzyQuery"
            placeholder="请输入关键词"
          />
        </li>
        <li>
          <button @click="searchComment()">查询</button>
        </li>
      </ul>
    </div>
    <table id="commentDetail-table">
      <tr>
        <th width="25%">评论详情</th>
        <th width="15%">评论时间</th>
        <th width="10%">评论人数</th>
        <th width="10%">评论地区</th>
        <th width="10%">评论语言</th>
        <th width="20%">关键分词</th>
        <th width="10%">分析语义</th>
      </tr>
      <tr v-for="(item, i) in commentList" :key="i">
        <td>{{ item.content }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.num }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.language }}</td>
        <td>{{ item.participle }}</td>
        <td>{{ item.semantic }}</td>
      </tr>
    </table>
    <div id="commentDetail-option">
      <jumpBar></jumpBar>
      <span>共 {{totalPage}} 页，共 {{totalRecord}} 条记录，当前为第 {{currentPage}} 页</span>
    </div>
  </div>
</template>
<script>
import jumpBar from './jumpBar.vue';
export default {
  name: "commentDetail",
  components: {
    jumpBar,
  },
  data() {
    return {
        totalPage: 1,
        totalRecord: 10,
        currentPage: 1,
      commentList: [
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
        {
          content:
            "虽然这个app有很多的缺陷，但是相比与其他同类型的产品已经好多了",
          time: "2022-12-9 19:32",
          num: "932",
          address: "浙江",
          language: "韩语",
          participle: "虽然 缺陷 但是 好多了",
          semantic: "不错",
        },
      ],
    };
  },
  methods: {
    searchComment() {
      alert("查询成功");
    },
  },
};
</script>
<style>
#commentDetail {
  position: relative;
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
  /* height: 700px; */
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 3px 3px 10px #eee;
  padding: 30px;
  font-size: 14px;
  text-align: left;
}

#commentDetail-search {
  width: 100%;
  /* padding-bottom: 20px; */
  border-bottom: 1px solid #ccc;
  /* height: 40px; */
}

#commentDetail-search label {
  position: relative;
  right: -10px;
}

#commentDetail-search li {
  float: left;
  margin-right: 40px;
  margin-bottom: 20px;
  /* background-color: pink; */
}

#commentDetail-search ul li:last-child {
  margin-right: 0;
}

#commentDetail-search select,
#commentDetail-search input {
  width: 100px;
  height: 30px;
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 0 10px;
  outline: none;
}

#commentDetail-search select:focus,
#commentDetail-search input:focus {
  border-color: #1b965f;
}

#commentDetail-search input {
  width: 265px;
}

#commentDetail-search button {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
  color: #4abf8a;
  background-color: #e5f9f4;
  border: 1px solid #4abf8a;
}
#commentDetail-search button:hover {
  background-color: rgb(216, 250, 241);
}
#commentDetail-table {
  margin-top: 20px;
  width: 100%;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
}

#commentDetail-table th {
  overflow: hidden;
  line-height: 40px;
  border: 1px solid #aaa;
  background-color: rgb(250, 250, 250);
}

#commentDetail-table td {
  overflow: hidden;
  line-height: 40px;
  border: 1px solid #ccc;
}

#commentDetail-table tr:nth-child(odd) {
  background-color: #eee;
}

#commentDetail-table tr td:first-child {
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#commentDetail-table tr td:nth-child(7) {
  font-weight: bold;
  color: #1b965f;
}

#commentDetail-option {
  position: absolute;
  bottom: -80px;
  left: calc(50% - 200px);
  text-align: center;
}
</style>
