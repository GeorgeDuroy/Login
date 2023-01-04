<script>
//打开应用的首页
import { ElButton } from 'element-plus'
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
  mounted() {
    //如果本地已有token则直接跳转到home页，把store的token设置上
      if(window.localStorage.getItem("token")){
        const token=window.localStorage.getItem("token")
        this.$store.commit('setToken',token)
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