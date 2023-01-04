<script>
import axios from 'axios';
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regContent: {
        name: '',
        nick: '',
        profile: '',
        schNo: '',
        gender: '',
        insit: '',
        selfIntro: '',
        phoneNo: '',
        qqNo: '',
        wechatNo: '',
        pswd: '',
      },
      ruleForm: {
        username: "",
        nickname: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [{ required: true, validator: validatePass2, trigger: "blur" }],
      },
      options: [
        {
          value: 1,
          label: '男',
        },
        {
          value: 0,
          label: '女',
        },
      ],
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {//注册函数    
          this.regContent.schNo = this.ruleForm.username
          this.regContent.nick = this.ruleForm.nickname
          this.regContent.pswd = this.ruleForm.pass
          this.regContent.gender = this.options.value == 1 ? '男' : '女'
          const reg = await axios.post('http://localhost:3000/api/users/reg', this.regContent)
          if (reg.data.pass == true) {
            this.$message.success('注册成功')
            setTimeout(() => {
              this.$router.push('/Login')
            }, 2000);

          }
          else this.$message.error('注册失败')
        } else {
          this.$message.error('注册失败')
          return false;
        }
      });
    },
    returnBack() {
      this.$router.push('/FirstPage')
    }
  },
};
</script>
<template>
  <div class="kbody" style="padding-right:20px">
  <div @click="returnBack()"><span>返回</span></div>
  <div class="register-container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="register-ruleForm"
    >
      <h2 class="register-title" style="text-align:center">注册</h2>
      <br>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="regContent.name"></el-input>
      </el-form-item>
      <el-form-item label="profile">
        <el-input v-model="regContent.profile"></el-input>
      </el-form-item>
      <el-form-item label="insit">
        <el-input v-model="regContent.insit"></el-input>
      </el-form-item>
      <el-form-item label="自我介绍">
        <el-input v-model="regContent.selfIntro"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="regContent.phoneNo"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="regContent.qqNo"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="regContent.wechatNo"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="options.value"  placeholder="请选择性别">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item style="padding-left: 15%">
        <el-button class="submit" type="primary" @click="submitForm('ruleForm')">
        注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<style>
.kbody{
  margin: auto;
  padding-top: 0;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/textfreebgp.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}
</style>
