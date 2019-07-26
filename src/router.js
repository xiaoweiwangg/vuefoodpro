import Vue from 'vue'
import Router from 'vue-router'
import ShangPin from "./components/views/shangpin.vue"
import PingLun from "./components/views/pinglun.vue"
import ShangJia from "./components/views/shangjia.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:ShangPin,name:"shangpin"},
    {path:"/pinglun",component:PingLun},
    {path:"/shangjia",component:ShangJia}
  ]
})
