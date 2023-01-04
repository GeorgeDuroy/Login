<script>
//打开应用的首页
import { ElButton } from 'element-plus'
import axios from 'axios'
export default{
  components: { ElButton },
  methods:{
    login:function(){
      this.$router.push('/login')
    },
    register:function(){
      this.$router.push('/FirstPage')
    },
  },
  async mounted() {
    //后端校验token，通过则直接跳转Home
      if(await axios.get("url",window.localStorage.getItem("user").token).data.pass==true){
        //改为Home
        this.$router.push('/FirstPage')
    }
  },
}
</script>
<template>
  <div class="nbody">
    <div class="logobox">
      <img src="../assets/logo.jpg" alt="小蛋壳" class="logo">
    </div>
    <div id="denglu" @click="login()"><el-button type="primary" round>登录</el-button></div>
    <div id="zhuce" @click="register()"><el-button round>注册</el-button></div>
  </div>
</template>