import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import qs from "qs";
import router from "../router";
Vue.use(Vuex);
Vue.use(router);

export default new Vuex.Store({
  state: {
    islogin: localStorage.getItem("logined") || 0,
    userName:localStorage.getItem('userName') || ""
  },
  mutations: {
    logined(state,payload) {
      state.islogin = 1;
      // 将用户名放入到localstorage中
      localStorage.setItem("userName",payload.username)
      state.userName=payload.username;
    },
    loginout(state) {
      state.islogin = 0;
      // Q清除用户名
      state.userName=""
      localStorage.removeItem("userName")
    },
  },
  actions: {
    login(context, payload) {
      // console.log(payload)
      axios.post("/login", qs.stringify(payload)).then((res) => {
        // console.log(res)
        if (res.data.code === 1) {
          // 调用vuex中的搬运工
          localStorage.setItem("logined", 1);
          context.commit("logined",res.data.info);
          router.push({ path: "/" });
        } else {
          // this.$messagebox("登录提示","该用户未注册额")
          alert("用户名或者密码错误");
        }
      });
    },
  },
  modules: {},
});
