import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Myheader from "./components/header.vue"
import Myfooter from "./components/footer.vue"

Vue.config.productionTip = false

Vue.component("my-header",Myheader);
Vue.component("my-footer",Myfooter);
// 全局js配置文件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
