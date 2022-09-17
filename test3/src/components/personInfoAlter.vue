<template>
  <div id="personInfoAlter">
    <div id="personInfoAlter-top">
      <ul class="clearfix">
        <li
          v-for="(item, i) in personInfoAlterList"
          :key="i"
          @click="alterNum = i;templateName = templateList[i]"
          :class="{ personInfoAlterHover: alterNum === i }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div id="personInfoAlter-bottom">
      <!-- <passwordAlter></passwordAlter> -->
      <component :is='templateName'></component>
    </div>
  </div>
</template>

<script>
import passwordAlter from "./passwordAlter.vue";
import userNameAlter from "./userNameAlter.vue";
import avatarAlter from "./avatarAlter.vue"
import permissionsAlter from './permissionsAlter.vue';
export default {
  name: "personInfoAlter",
  data() {
    return {
      personInfoAlterList: ["密码修改", "用户名修改", "头像修改", "权限申请"],
      alterNum: 0,
      templateList: ['passwordAlter','userNameAlter', 'avatarAlter', 'permissionsAlter'], //子组件列表
      templateName: 'passwordAlter', //当前显示的子组件名


    };
  },
  methods: {},
  components: {
    passwordAlter,
    userNameAlter,
    permissionsAlter,
    avatarAlter,
  }
};
</script>
<style>
#personInfoAlter {
  width: 80%;
  margin-left: 2%;
  margin-top: 30px;
  /* background-color: pink; */
}
#personInfoAlter-top ul{
  margin-left: 25px;
}

#personInfoAlter-top li {
  float: left;
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  border-radius: 10px 10px 0 0;
}

#personInfoAlter-top li:hover {
  cursor: pointer;
  color: #4ABF8A;
  background-color: #E5F9F4;
  font-weight: bold;
}

.personInfoAlterHover {
  background-color: #E5F9F4;
  color: #4ABF8A;
  font-weight: bold;
  border: 1px solid #eee;
  border-bottom: none;
}

#personInfoAlter-bottom {
  width: 100%;
  /* height: 400px; */
  padding: 20px 45px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 3px 3px 10px #eee;
  text-align: left;
}
</style>