<template>
  <div class="shop">
   <div class="scont">
     <div class="left">
      <div class="log">
        <img src="../../shop.png" alt="">
        <span class="sn"></span>
      </div>
     <div class="price">

     </div>
     <div class="beizhu">

     </div>
     </div>
     <div class="right">
     <div class="sbtn">

     </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "ShopCat"
};
</script>

<style lang="scss" scoped>
@import "../../public/px2rem.scss";
.scont {
  background-color: #141d27;
  position: fixed;
  left: 0;
  bottom: 0;
  height: pm(95);
  width: 100%;
  z-index: 99999;
  display: flex;
  .left{
    flex: 1;
    .log{
      height: pm(95);
      border: pm(12) solid #141d27;
      border-radius: 50%;
      width: pm(95);
      background-color: #00a0dc;
      top:pm(-20);
      position: absolute;
      margin-left: pm(20);
      img{
      display: block;
      margin: pm(12) auto;
      height: pm(60);
      }
    }
  }
  .right{
    width: pm(209);
    height: pm(95);
    background-color: #2b333b;
  }
}
</style>