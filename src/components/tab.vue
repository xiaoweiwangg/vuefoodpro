<template>
  <div class="tab">
    <div class="item">
      <router-link :to="{name:'shangpin'}" exact>商品</router-link>
    </div>
    <div class="item">
      <router-link to="pinglun" exact>评论</router-link>
    </div>
    <div class="item">
      <router-link to="shangjia" exact>商家</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:"HomeTab",
  components:{
    
  },
  data(){
    return {
      
    }
  }
}
</script>
<style lang="scss" scoped>
 @import "../public/px2rem.scss";
  .tab{
    height: pm(80);
    display: flex;
    .item{
      flex: 1;
      text-align:center;
      line-height:pm(80);
      font-size:pm(28);
      border-bottom:1px solid rgba(7,17,27,0.1);
      & .router-link-exact-active{
        color:rgb(240, 20, 20);
      }
      a{
        display: block;
        color: rgb(77, 85, 93 );
      }
    }
  }
</style>