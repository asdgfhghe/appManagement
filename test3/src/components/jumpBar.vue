<template>
    <div class="jumpBar">
        <ul class="clearfix">
          <li>
            <a title="上五页">&#xe7dc;</a>
          </li>
          <li>
            <a title="上一页">&#xe7e1;</a>
          </li>
          <li>
            <a>1</a>
          </li>
          <li>
            <a title="下一页">&#xe7df;</a>
          </li>
          <li>
            <a title="下五页">&#xe7db;</a>
          </li>
        </ul>
      </div>
</template>
<script>
export default {
    name: 'jumpBar',
    data(){
        return {

        }
    },
}
</script>
<style>
  .jumpBar {
  position: relative;
  height: 35px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px;
}

.jumpBar ul {
  height: 35px;
  display: inline-block;
}

.jumpBar ul li {
  float: left;
}

.jumpBar a {
  display: inline-block;
  color: black;
  width: 35px;
  height: 35px;
  text-align: center;
  background-color: #fff;
  line-height: 35px;
  margin-left: 20px;
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 10px;
  font-size: 20px;
  box-shadow: 4px 3px 4px 1px #e9e7e7;
}

.jumpBar a:hover {
  cursor: pointer;
  border: 1px solid #4abf8a;
  color: #4abf8a;
}

.jumpBar li:nth-child(1) a {
    margin-left: 0;
}

.jumpBar li:nth-child(3) a{
    font-size: 16px;
}
</style>