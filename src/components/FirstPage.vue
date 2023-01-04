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
