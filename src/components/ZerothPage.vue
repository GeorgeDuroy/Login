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
<style scoped>
.nbody{
  padding-top: 15.5%;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/purebgp.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}

.logobox {
  display: flex;
  padding:0 30%;
}
.logo{
  border-radius: 10%;
  width: 150px;
}
#denglu{
  margin-top: 60%;
  margin-left: 40%;
}
#zhuce{
  margin-top: 20%;
  margin-left: 40%;
}
</style>