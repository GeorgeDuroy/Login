<script>
//选择注册的页面
export default {
  methods: {
    regi_junren() {
      this.$router.push("/FirstPage/junren");
    },
    regi_shetuan() {
      this.$router.push("/FirstPage/shetuan");
    },
    regi_putongren() {
      this.$router.push("/FirstPage/putongren");
    },
    returnBack() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="mbody">
    <div @click="returnBack()" style="margin-bottom: 10%"><span>返回</span></div>
    <div class="logobox">
      <img src="../assets/logo.jpg" alt="小蛋壳" class="logo" />
    </div>
    <div class="buttons">
      <div id="junren" @click="regi_junren()">
        <img src="../assets/icon1.png" alt="" class="icon1" />
        退役大学生
      </div>
      <div id="shetuan" @click="regi_shetuan()">
        <img src="../assets/icon2.png" alt="" class="icon2" />
        军事社团
      </div>
      <div id="putongren" @click="regi_putongren()">
        <img src="../assets/icon3.png" alt="" class="icon3" />
        普通大学生
      </div>
      <div id="occu"></div>
    </div>
  </div>
</template>
<style scoped>
.mbody{
  margin: auto;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/bgp.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}
.buttons {
  display: flex;
  margin-top: 90%;
  height: 10%;
}

#junren {
  text-align: center;
  color: white;
  background-image: url("../assets/buttonbgp.png");
  background-repeat: no-repeat;
  width: 60%;
  border-radius: 20%;
  margin-left: 3%;
}

.icon1 {
  display: block;
  margin: auto;
}

#shetuan {
  text-align: center;
  color: white;
  background-image: url("../assets/buttonbgp.png");
  background-repeat: no-repeat;
  width: 60%;
  border-radius: 20%;
  margin-left: 5%;
}

.icon2 {
  display: block;
  margin: auto;
}

#putongren {
  text-align: center;
  color: white;
  background-image: url("../assets/buttonbgp.png");
  background-repeat: no-repeat;
  width: 60%;
  border-radius: 20%;
  margin-left: 5%;
}

.icon3 {
  display: block;
  margin: auto;
}

.logobox {
  display: flex;
  padding:0 30%;
}
.logo{
  border-radius: 10%;
  width:93%;
}
#occu{
  width: 1%;
  margin: 0 1%;
}
</style>