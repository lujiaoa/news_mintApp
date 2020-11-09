<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header class="small_header" title="学前端，到学问">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/reg" slot="right" class="shortcut"> 注册 </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        :attr="{ maxlength: 6 }"
        v-model="username"
        @blur.native.capture="checkUsername"
      ></mt-field>
      <mt-field
        type="password"
        label="密码"
        palceholder="请输入密码"
        :attr="{ maxlength: 8, autocomplete: 'off' }"
        v-model="password"
        @blur.native.capture="checkpassword"
      ></mt-field>

      <mt-button type="primary" size="large" @click="handle"
        >快速登录</mt-button
      >
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    checkUsername() {
      let usernameReg = /^\w{1,6}$/;
      if (usernameReg.test(this.username)) {
        //  console.log("用户名ok")
        return true;
      } else {
        //  console.log("用户名非法")
        this.$toast({
          message: "用户名为必填项",
          position: "top",
          duration: "1000",
        });
        return false;
      }
    },
    checkpassword() {
      let passward = /^\w{6,8}$/;
      if (passward.test(this.password)) {
        // console.log("密码格式正确")
        return true;
      } else {
        this.$toast({
          message: "密码不符合格式，必须为字母与数字的组合体",
          position: "top",
          duration: "1000",
        });
        return false;
      }
    },
    handle() {
      //  console.log("handle")
      if (this.checkUsername() && this.checkpassword()) {
        let obj = {
          username:this.username,
          password:this.password
        }

        // 用vuex来分发
        this.$store.dispatch("login",obj)
        
        // this.axios.post('/login',this.qs.stringify(obj) ).then(res=>{
        //   if(res.data.code===1){
        //     // 调用vuex中的搬运工
        //     localStorage.setItem("logined",1)
        //     this.$store.commit("logined")
        //     this.$router.push({ path:'/'})
        //   }else{
        //     this.$messagebox("登录提示","该用户未注册额")
        //   }
        // })
      }
    },
  },
};
</script>

<style>
.shortcut {
  text-decoration: none;
}
.small_header {
  background-image: linear-gradient(135deg, #5efce8 10%, #736efe 100%);
}
</style>