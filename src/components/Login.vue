<template>
  <div class="kbody">
    <div @click="returnBack()"><span>返回</span></div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <h2 style="text-align: center">欢迎登录</h2>
    <br />
    <el-row style="margin: 0 20%">
      <el-input placeholder="账号" :prefix-icon="User" v-model="schNo" />
    </el-row>
    <el-row style="margin: 5% 20%">
      <el-input
        placeholder="密码"
        :prefix-icon="Lock"
        v-model="pswd"
        type="password"
        show-password
      />
    </el-row>
    <el-row style="padding: 0 40%">
      <el-button type="primary" @click="login(schNo, pswd)">登录</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      schNo: "",
      pswd: "",
    };
  },
  methods: {
    //登录函数
    async login(schNo, pswd) {//后端的url
      res=await axious.get("url",{schNo,pswd})
      setTimeout(() => {
        if(res.data.pass==true){
          window.localStorage.setItem("user",JSON.stringify(res.data))
          this.$message.success("登录成功")
          setTimeout(() => {
            //改为跳转到Home
          this.$router.push("/")
          }, 1000);
        }else{
          this.$message.error("登录失败,账号或密码错误")
        }
      },200);
    },
    //返回上一页
    returnBack() {
      this.$router.push("/");
    },
  },
};
</script>
<script setup>
//仅做引入icon用
import { User, Lock } from "@element-plus/icons-vue";
</script>
<style>
.kbody {
  margin: auto;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/textfreebgp.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}
</style>
