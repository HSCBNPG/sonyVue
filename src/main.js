import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Myheader from "./components/header.vue"
import Myfooter from "./components/footer.vue"
// 配置axios
import axios from "axios" //引入
Vue.prototype.axios = axios; //添加到原型对象
// 引入公共组件
Vue.component("my-header",Myheader);
Vue.component("my-footer",Myfooter);
// 配置vuex
import vuex from "vuex"   //引入
Vue.use(vuex)   //注册
var store = new vuex.Store({  //创建存储对象
  state:{       //集中管理数据属性
    logStatus:false,   //登录状态
    userimg:""         //用户头像地址
  },
  mutations:{   //集中管理修改数据函数属性
    setLogStatus(state,bool){
      state.logStatus = bool;
    },
    setUserimg(state,url){
      state.userimg = url; 
    }
  },
  getters:{     //集中管理获取数据函数属性
    getLogStatus(state){
      return state.logStatus
    },
    getUserimg(state){
      return state.userimg
    }
  }
})
Vue.config.productionTip = false

// 全局js配置文件
new Vue({
  router,
  store,  //vuex 将存储对象添加到vue实例作为属性
  // store,
  render: h => h(App)
}).$mount('#app')