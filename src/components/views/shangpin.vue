<template>
  <div class="goods">
    <div class="flist" ref="fls">
      <ul>
        <li v-for="(item,index) in goods" @click="move(index,$event)" :key="index" class="ls" :class="{'cur':cur===index}">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods" ref="bsd">
      <ul>
        <li ref="fs" class="food-list" v-for="(i,index) in goods" :key="index" >
          <h1>{{i.name}}</h1>
          <ul class="fls">
            <li v-for="(t ,ix) in i.foods" :key="ix" class="fitem">
              <div class="item">
              <div class="fimg">
                <img :src="t.icon" alt="t.name">
              </div>
              <div class="fdet">
                <h2>{{t.name}}</h2>
                <div class="miaoshu">
                  {{t.description}}
                </div>
                <div class="sell">
                  <span>月售{{t.sellCount}}份</span> <span> 好评率{{t.rating}}%</span> 
                </div>
                <div class="price">
                 <span class="fuhao">￥</span> {{t.price}} <span class="oldp" v-if="t.oldPrice">{{t.oldPrice}}</span>
                </div>
              </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cat></shop-cat>
  </div>
</template>
<script>
import bs from "better-scroll";
import vc from "velocity-animate";
import { log } from "util";
import ShopCat from "../shop/shopcat"
export default {
  name: "ShangPin",
  components: {
    ShopCat
  },
  methods: {
    move(x,e){
      if(e._constructed){
        return 
      }
      this.scroll.scrollToElement(this.$refs.fs[x],200)
    },
    trans() {
      let dist = 0;
      this.ylist.push(
        ...this.$refs.fs.map(x => {
          dist += x.clientHeight;
          return dist;
        })
      );
    }
  },
  mounted() {
    this.axios.get("/api/shangpin").then(dt => {
      this.goods = dt.data;
      this.$nextTick(() => {
        this.trans();
        this.scroll = new bs(this.$refs.bsd, {
          probeType: 3,
          // click:true,
          //向外暴露滚动位置
        });
        this.scroll.on("scroll", x => {
          this.sy = Math.abs(Math.round(x.y));
        });
        this.scroll2 = new bs(this.$refs.fls, {});
      });
    });
  },
  data() {
    return {
      current: 0,
      ylist: [0],
      goods: {},
      sy: 0,
      cmap: ["decrease_3", "invoice_1@3x", "special_1@3x", "discount_2@3x"]
    };
  },
  computed: {
    cur() {
      let h1 = 0;
      let h2 = 0;
      for (let i = 0; i < this.ylist.length; i++) {
        h1 = this.ylist[i]-1;
        h2 = this.ylist[i + 1]-1;
        if (!h2 || (this.sy >= h1 && this.sy <= h2)) {
          return i;
        }
      }
      return 0;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../public/px2rem.scss";
.goods.enter-active,
.goods-leave-active {
  transition: 0.5;
}
.goods-enter,
.goods-leave-to {
  transform: translateX(pm(-750));
}
.goods {
  width: 100%;
  position: absolute;
  top: pm(350);
  bottom: pm(92);
  display: flex;
  overflow: hidden;
  .flist {
    background-color: #f3f5f7;
    width: pm(160);
    ul {
      .cur{
        background-color: #fff;
      }
      .ls {
        display: table;
        font-size: pm(24);
        color: #394149;
        font-weight: 200;
        line-height: pm(28);
        padding: 0 pm(24);
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        height: pm(108);
        span {
          width: pm(112);
          display: table-cell;
          vertical-align: middle;
        }
      }
    }
  }
  .foods {
    flex: 1;
    background-color: #fff;
    .food-list {
      ul {
        padding: 0 pm(36);
      }
      h1 {
        height: pm(52);
        line-height: pm(52);
        font-size: pm(24);
        color: rgba(147, 153, 159, 1);
        border-left: 2px solid #d9dde1;
        background-color: #f3f5f7;
        padding-left: pm(28);
      }
      .item {
        display: flex;
        margin: pm(36) 0 0 0;
        padding-bottom: pm(36);
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .fimg {
          img {
            height: pm(115);
            width: pm(115);
          }
        }
        .fdet {
          margin-left: pm(20);
          h2 {
            font-size: pm(28);
            line-height: pm(28);
            color: rgb(7, 17, 27);
            margin-top: pm(4);
          }
          .miaoshu,
          .sell {
            font-size: pm(20);
            color: rgba(147, 153, 159, 1);
            // line-height: pm(20);
            margin: pm(16) 0;
            & span:nth-child(2) {
              margin-left: pm(24);
            }
          }
          .sell {
            margin: 0 0;
          }
          .price {
            font-size: pm(28);
            line-height: pm(48);
            font-weight: normal;
            color: red;
            .fuhao {
              font-size: pm(20);
            }
            .oldp {
              font-size: pm(20);
              color: rgb(147, 153, 159);
              text-decoration: line-through;
              margin-left: pm(16);
              font-weight: 800;
            }
          }
        }
      }
    }
  }
}
</style>
