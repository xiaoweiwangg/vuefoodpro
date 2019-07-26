<template>
  <div id="app">
    <div class="header">
      <home-header :shangjia="shangjia"></home-header>
    </div>
    <div class="tab">
      <home-tab></home-tab>
    </div>
    <div class="content">
      <transition name="goods">
      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import HomeHeader from "./components/header.vue"
  import HomeTab from "./components/tab"
  export default {
    data(){
      return {
        shangjia:{}
      }
    },
    components: {
      HomeHeader,
      HomeTab,
    },
    methods: {
      
    },
    mounted() {
      
      this.axios.get("/api/shangjia")
      .then((dt)=>{
        this.shangjia=dt;
      })
    },
  }
</script>
<style lang="scss" scoped>
  @import "./public/px2rem.scss";
.goods-enter-active,.goods-leave-active{
  transition: .5;
}
.goods-enter,.goods-leave-to{
  transform: translateX(pm(-750))
}
  #app {
    width: pm(750);
    margin: 0 auto;
    /* border: 1px solid rebeccapurple; */
  }
</style>