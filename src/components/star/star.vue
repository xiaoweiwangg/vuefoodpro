<template>
  <div class="star">
    {{add}}
    <span
      class="s"
      v-for="( i , index ) in cm"
      :key="index"
      :class="i"
      :style="{margin:'0 '+size}"
    >
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars:0,
      harfs:0,
      nos:0,
      cm:[],
    };
  },
  props: ["size", "scope"],
  computed:{
    add(){
      this.stars=Math.floor(this.scope%5);
      this.harfs=Math.round((this.scope%5)-this.stars)
      let k=0
      for (let i = 0; i < 5; i++) {
          this.cm.push("no")
        if(i<this.stars){
          k++;
          this.cm[i]="man"
        }
      }
      if(this.harfs==1){
      this.cm[k]="man"
      }else{
      this.cm[k]="harf"
      }
      console.log(this.cm.length);
      
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/px2rem.scss";
span{
  display:inline-block;
  height:pm(48);
  width:pm(48);
}
.harf{
  @include bg-img("./star48_half")
}
.man{
  @include bg-img("./star48_on")
}
.no{
  @include bg-img("./star48_off")
}
</style>