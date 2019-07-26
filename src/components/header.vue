<template>
  <div
    v-if="shangjia.data"
    class="content-wrap"
  >
    <div
      class="bg"
      :style="{backgroundImage:'url('+shangjia.data.avatar+')'}"
    >

      </div>
      <div class="cont">
        <div class="img-avater">
          <img
            :src="shangjia.data.avatar"
            :alt="shangjia.data.name"
          >
        </div>
        <div class="detail">
          <div class="title">
            <span class="bund"></span>
            <span class="tit">{{shangjia.data.name}}</span>
          </div>
          <div class="miaoshu">
            {{shangjia.data.description}}
            <span>/&nbsp;</span>{{shangjia.data.deliveryTime}}分到达
          </div>
          <div
            class="supput"
            v-if="shangjia.data"
          >
            <span class="type"></span>
            {{shangjia.data.supports[0].description}}
            <div class="supputc"  @click.self="dcshow">
              {{shangjia.data.supports.length}} 个 &nbsp;
              <span class="sr">></span>
            </div>
        </div>
      </div>
      </div>
      <div class="bullun"  @click="dcshow">
        <span class="gg"></span>
        <span class="ggdet">
          {{shangjia.data.bulletin}}
        </span>
        <span class="gr">></span>
      </div>
      <transition name="fade">
      <div class="detceng" v-show="detcengshow">
        <div class="dtwrap">
          <h1>
            {{shangjia.data.name}}
          </h1>
        <star :size="'21px'" :scope="shangjia.data.score"></star>
        <div class="xian">
          <div class="l"></div>
          <div class="t">优惠信息</div>
          <div class="r"></div>
        </div>
        <div class="md">
          <ul>
            <li v-for="(i,index) in shangjia.data.supports" :key="index">
              {{i.description}}
            </li>
          </ul>
        </div>
        <div class="xian">
          <div class="l"></div>
          <div class="t">商家公告</div>
          <div class="r"></div>
        </div>
        <p class="gt">
          {{shangjia.data.bulletin}}
        </p>
        </div>
        <div class="dclose">
          <img src="../c.png" alt="" @click="dcfalse">
        </div>
      </div>
      </transition>
    </div>
</template>
<script>
import star from "./star/star";
export default {
  props: ["shangjia"],
  name: "HomeHeader",
  data() {
    return {
      detcengshow: false
    };
  },
  components: {
    star
  },
  methods: {
    dcshow() {
      this.detcengshow = true;
    },
    dcfalse() {
      this.detcengshow = false;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../public/px2rem.scss";
.fade-enter-active,.fade-leave-active{
  transition: .5s;
}
.fade-enter,.fade-leave-to{
  transform: translateY(pm(-1450));
  // opacity: 0;
}
.content-wrap {
  .detceng {
    z-index: 999999;
    display: flex;
    flex-flow: column;
    position: fixed;
    min-height: 100%;
    width: 100%;
    background-color: rgba(7, 17, 27, 0.8);
    left: 0;
    top: 0;
    overflow: auto;
    .dtwrap {
      flex: 1;
      padding: 0 pm(72);
      padding-top: pm(128);
      h1 {
        font-size: pm(32);
        font-weight: 700;
        line-height: pm(32);
        text-align: center;
      }
      .star {
        margin-top: pm(32);
        text-align: center;
      }
      .xian {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: pm(56);
        padding-bottom: pm(48);
        .l,
        .r {
          border: 2px solid rgba($color: #fff, $alpha: 0.2);
          width: pm(190);
          height: 0;
        }
        .t {
          font-size: pm(30);
        }
      }
      .md {
        ul {
          margin-top: pm(24);
        }
        li {
          img {
            height: 32px;
            width: 32px;
          }
          margin: pm(24) auto;
          font-size: pm(24);
          font-weight: 200;
          line-height: pm(24);
        }
      }
      .gt {
        font-size: pm(24);
        line-height: pm(48);
        font-weight: 200;
        padding: 0 pm(24);
      }
    }
    .dclose {
      img {
        padding-bottom: pm(64);
        padding-top: pm(64);
        height: 64px;
        width: 64px;
        display: block;
        margin: 0 auto;
      }
    }
  }
  color: #fff;
  font-size: 0px;
  position: relative;
  .bg {
    filter: blur(10px);
    background-size: 100%;
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    z-index: -99999;
  }
  .cont {
    display: flex;
    padding: pm(48) pm(0) pm(36) pm(48);
    background-color: rgba(7, 17, 27, 0.3);
    .img-avater {
      margin-right: pm(32);
      img {
        height: pm(128);
        width: pm(128);
        border-radius: 4px;
      }
    }

    .detail {
      flex: 1;
      font-size: 17px;
      .title {
        margin-top: pm(4);
        .bund {
          display: inline-block;
          width: pm(60);
          height: pm(36);
          @include bg-img("../assets/img/brand");
          vertical-align: top;
        }
        .tit {
          margin-left: pm(12);
          font-size: pm(32);
          padding-top: pm(4);
          font-weight: bold;
          line-height: pm(36);
        }
      }
      .miaoshu {
        padding-top: pm(16);
        font-size: pm(24);
        font-weight: 200;
        line-height: pm(24);
      }
      .supput {
        padding-top: pm(20);
        font-size: pm(20);
        line-height: pm(24);
        font-weight: 200;
        position: relative;
        .type {
          display: inline-block;
          @include bg-img("../assets/img/decrease_1");
          vertical-align: top;
          height: pm(25);
          width: pm(25);
        }
        .supputc {
          position: absolute;
          font-size: pm(24);
          font-weight: 200;
          background-color: rgba(0, 0, 0, 0.2);
          padding: pm(14) pm(16);
          border-radius: pm(24);
          right: pm(24);
          bottom: pm(-10);
          cursor: pointer;
          .sr {
            font-size: pm(16);
          }
        }
      }
    }
  }
  .bullun {
    background-color: rgba(7, 17, 27, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: pm(20);
    .gg {
      @include bg-img("../assets/img/bulletin");
      height: pm(25);
      width: pm(158);
      margin-left: pm(24);
    }
    .ggdet {
      margin-left: pm(8);
      display: inline-block;
      height: pm(56);
      font-weight: 200;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: pm(56);
    }
    .gr {
      margin: 0 pm(24) 0 pm(8);
      font-size: 30px;
    }
  }
}
</style>