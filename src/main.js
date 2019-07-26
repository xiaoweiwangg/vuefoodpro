//router
import Vue from 'vue'
import router from './router'
//vuex
import store from './store'
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//abaot css
import "./public/hotcss"
import "./public/reset.css"
//fastclick
import fast from "fastclick"
Vue.config.productionTip = false
import App from './App.vue'
fast.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
