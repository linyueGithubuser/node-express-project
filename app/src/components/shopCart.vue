<template>
  <div class="box">
    <adress1 one="购物车"></adress1>
    <div v-if="productList.length">
      <div class="title">
        <!--<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>-->

        <!--<h1>购物车</h1>-->
      </div>
      <div class="tip line">
        <img src="../../static/images/tip.png" alt=""/>

        <div class="tip-text">
          <p>小幸运未注册下单用户，首次购买2磅（正价298）及以上规格磅数蛋糕，随时赠送：小切块蛋糕2块。（2磅芒果奶油蛋糕不参与此优惠）</p>
        </div>
      </div>
      <div class="line shopd" v-for="(item,index) in productList">

        <div class="shop-detail">
          <img :src="item.imgSrc" alt=""/>

          <div class="shop-text">
            <h3>{{item.productName}}</h3>
            <h5>{{item.productNames}}</h5>

            <p>{{item.pongs}}</p>

            <p>￥ {{item.price}}</p>
          </div>
          <div class="btnshop">
            <p @click="deleteShopCart(index)">删除</p>
            <button type="button" @click="puls(index)" :class="btnclass">-</button>
            <transition name="fade">
              <input type="text" v-model="item.Quantity" class="math"/>
              <!--<span class="math">{{count}}</span>-->
            </transition>
            <button type="button" @click="add(index)">+</button>
          </div>
          <p class="Idtotal">总价：{{item.price*item.Quantity|setData}}</p>
        </div>
        <div class="canpan" v-for="part in item.parts">
          <img :src="part.partsImg" alt=""/>

          <p>{{part.partsName}}</p>
        </div>
        <div class="birthday">
          <div class="birthdayCard">
            <p>生日牌 </p>
          </div>
          <router-link :to="{path:'/bithdayCard/'+index}" v-if="birthdayId==index">
            <p class="birthday-tip">+添加生日牌祝福语：{{birthdayMesg}}</p>
          </router-link>
          <router-link :to="{path:'/bithdayCard/'+index}" v-else>
            <p class="birthday-tip">+添加生日牌祝福语：</p>
          </router-link>
        </div>

      </div>


      <router-link to="/Coupon">
        <div class="youhuij line">
          <p>选择优惠券:已优惠￥{{zhekou}}.00元</p>
          <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>
        </div>
      </router-link>

      <recommend></recommend>
      <div class="jg"></div>

      <div class="shopDo">
        <div class="shopDoprice">
          <p class="totalSHOP">{{totalPrice-zhekou|setData}}</p>

          <!--<p>商品</p>-->
        </div>
        <div class="shopDoprice">
          <p v-if="totalPrice >= 288">免邮：已享受全场满￥288元免邮</p>

          <p v-else="totalPrice < 288">提示：订单未满￥288元，加收邮费10元</p>
        </div>
        <div class="makingDo">
          <router-link :to="{path:'/pay',query:{money:totalPrice,zhekou:zhekou}}">
            <h2>下单</h2>
          </router-link>
        </div>
      </div>


    </div>
    <div v-else class="empty-cart">
      <img src="../../static/images/cartempty.png" alt=""/>

      <p class="shop-empty">您的购物车为空</p>

      <p><i class="fa fa-angle-left fa-1x" aria-hidden="true"> 立即购物</i></p>
      <recommend></recommend>

    </div>

  </div>

</template>
<script>
  import recommend from './recommend.vue'
  import indexBar from "./indexBar.vue"
  import adress1 from "./adress1.vue"
  export default{
    name: 'shopCart',
    data: function () {
      return {
        btnclass: 'gray',
        productList: '',
        totalPrice: 456,
        totalNum: 0,
        birthdayMesg: '',
        birthdayId: '',
        zhekou: 0
      }
    },
    filters: {
      setData: function (value) {
        console.log(value);
        return "￥" + value.toFixed(2) + "元"
      }
    },

    methods: {
      add: function (index) {
        this.productList[index].Quantity += 1;
        this.btnclass = 'red';
        this.getToatl();
      },
      puls: function (index) {
        if (this.productList[index].Quantity == 1) {
          this.productList[index].Quantity = 1;
        } else {
          this.productList[index].Quantity -= 1;
          this.getToatl();
          if (this.productList[index].Quantity == 1) {
            this.btnclass = 'gray'
          }

        }
      },
      deleteShopCart: function (index) {
        this.productList.splice(index, 1);
        this.getToatl();
      },
      getToatl: function () {
//        console.log("get total");
        var that = this;
        that.totalPrice = 0;
        this.productList.forEach(function (item) {
          that.totalPrice += item.price * item.Quantity

        })

      }
    },
    created: function () {
      this.$http.get("http://n1r8399389.51mypc.cn:25274/shopCart").then(function (res) {
//        console.log(res);
        this.productList = res.body;
      })
    },
    mounted: function () {
//      console.log(this.$route);
      this.birthdayMesg = '';
      this.birthdayMesg = this.$route.query.birthdayMeg;
      this.birthdayId = this.$route.query.birthdayIndex;
      if (this.$route.query.money) {
        this.zhekou = Number(this.$route.query.money);
      }

    },

    components: {
      recommend: recommend,
      indexBar:indexBar,
      adress1:adress1
    }


  }
</script>

<style scoped>

  .jg {
    height: 12em;
  }

  .box {
    font-size: 62.5%;
    background-color: rgba(0, 0, 0, .1);
  }

  .red {
    color: red;
  }

  .gray {
    color: #ccc;
  }

  .line {
    margin-top: 0.5em;
  }

  .tip {
    background-color: white;
    padding: 1em 0;
    display: flex;
    justify-content: center;
  }

  .tip img {
    width: 8%;
    height: 8%;
    margin-top: -1em;
  }

  .tip-text {
    text-align: center;
    color: #BB9772;
  }

  p {
    font-size: 1.4em;
  }

  .shop-text {
    margin-top: 10%;
    text-align: left;
  }

  h3 {
    font-size: 1.6em;
  }

  h5 {
    font-size: 1.4em;
  }

  h6 {
    font-size: 1.4em;
  }

  .title {
    display: flex;
    background-color: white;
    padding: 1em 0;
  }

  .title h1 {
    margin-left: 38%;
  }

  .title i {
    margin-left: 3%;
  }

  .shopd {
    background-color: white;
  }

  .shop-detail {
    display: flex;
    justify-content: space-around;
    align-items: center;

  }

  .shop-detail img {
    width: 30%;
    height: 30%;
  }

  .shop-detail div {
    flex-basis: 24%;
  }

  .Idtotal {
    margin-top: -4em;
    color: #BB9772;
  }

  .btnshop {
    margin-top: 2em;
  }

  .btnshop p {
    margin-bottom: 18%;
  }

  .btnshop input {
    width: 1em;
    height: 1em;
    text-align: center;
    border: none;
    font-size: 1.6em;
  }

  .btnshop button {
    /*width: 1.2em;*/
    /*height: 1.2em;*/

  }


  /*.math {*/
    /*margin: 0 1em;*/
  /*}*/

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .shopDo {
    display: flex;
    align-items: center;
    position: fixed;
    height: 10%;
    width: 100%;
    background-color: #CCC;
    bottom: 0;
  }

  .shopDo .shopDoprice {
    flex-basis: 30%;
  }

  .shopDo .makingDo {
    flex-basis: 30%;
    height: 100%;
    background-color: black;
  }

  .shopDo .makingDo h2 {
    font-size: 1.6em;
    padding-top: 10%;
    color: white;
  }

  .shop-empty {
    margin: 1em 0;
  }

  .totalSHOP {
    font-size: 1.6em;
    color: red;
    font-weight: 800;
  }

  .recommendShop {
    margin: 1em 0;
    display: flex;
    text-align: left;
    justify-content: center;
  }

  .recommendShop div {
    flex-basis: 50%;
    margin-left: 1em;
    background-color: white;
    text-align: center;
  }

  .recommendShop img {
    width: 100%;
  }

  .canpan {
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
  }

  .canpan img {
    width: 10%;
    height: 10%;
    margin-left: 20%;
  }

  .canpan p {
    margin-left: 5%;
  }

  .birthdayCard {
    width: 15%;
    /*height: 3em;*/
    background-color: #ccc;
    margin-left: 20%;
  }

  .birthday {
    display: flex;
    align-items: center;
  }

  .birthday .birthday-tip {
    margin-left: 1em;
  }

  .birthdayCard p {
    width: 4em;
    margin-left: 1em;;
    height: 1.2em;
    line-height: 1.2em;
    background-color: #000000;
    color: white;

  }

  .youhuij {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4em;
    background-color: white;
  }

  .youhuij i {
    flex-basis: 50%;
    text-align: right;
  }

  @import "../../static/icon/css/font-awesome.css";
</style>
