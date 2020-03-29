<template>
  <div class="box">

    <div class="title">
      <router-link to="/shopCart">
        <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
      </router-link>


      <h1>确认订单</h1>
    </div>
    <router-link to="/address">
      <div class="address">

        <div>
          <p>{{userName}} {{Phone}}</p>

          <p>{{Address}}</p>

          <p>收货时间不限</p>
        </div>
        <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>
      </div>
    </router-link>

    <div class="pay-money line">
      <h1>应付金额{{totalMoney-couponMy+yunfei|setData}} </h1>

      <div class="pay-detail">
        <p>商品金额</p>

        <p>{{totalMoney|setData}}</p>
      </div>
      <div class="pay-detail">
        <p>运费</p>

        <p>{{yunfei|setData}}</p>

      </div>
      <div class="pay-detail">
        <p>优惠券</p>

        <p>{{couponMy|setData}}</p>
      </div>
      <div class="pay-detail">
        <input type="checkbox" id="checkbox" :value="guoshiBi|changData" v-model="checkGsb"/>
        <!--<p>{{checkGsb}}</p>-->
        <p>可用{{guoshiBi}}个果实币抵扣</p>

        <p>￥{{guoshiBi|changData}}元</p>
      </div>

    </div>


    <div class="line">
      <div class="pay-detail">
        <p class="one">还需支付</p>

        <p class="two" v-if="totalMoney!='' ">{{totalMoney-couponMy+yunfei-checkGsb|setData}}</p>

        <p class="two" v-else>{{totalMoney}}</p>
      </div>
      <div class="pay-way">
        <input type="radio" value="1" v-model="picked" checked="checked"/>
        <span>在线支付</span>
        <!--<span>{{picked}}</span>-->
      </div>
      <div class="pay-way">
        <input type="radio" value="2" v-model="picked"/>
        <span>货到付款</span>
        <!--<span>{{picked}}</span>-->
      </div>
      <!--<span>{{picked}}</span>-->
    </div>
    <router-link :to="{path:'/Invoice/Invoice3'}">
      <div class="pay-detail line">

        <p class="one">开具发票</p>

        <p class="two">{{fpStyle}} 》</p>
      </div>
    </router-link>
    <div class="address-ok">
      <p>送至：高新区云华路333号7幢</p>
    </div>
    <div class="jg"></div>
    <div class="btnShop">
      <router-link :to="{path:'/Orderdetails',query:{endMoney:(totalMoney-couponMy-yunfei-checkGsb|setData)}}"
                   v-if="picked==2">
        <button>提交订单</button>
      </router-link>

      <button @click="Doactive" v-model="isShow">提交订单</button>

    </div>


    <!-- 支付方式显示 -->
    <transition name="slide-fade">
      <div class="payModel" v-show="isShow">
        <div class="close" @click="closeModel">
          <img src="../../static/images/close.png" alt=""/>
        </div>
        <div class="payfashi" v-for="(item,index) in payWay">
          <input type="radio" v-model="pay" :value="index" checked="checked"/>
          <img :src="item.paySrc" alt=""/>

          <p class="payColor">{{item.payName}}</p>
          <!--<span>{{pay}}</span>-->
        </div>
        <div class="payBtn">
          <p>共计：{{totalMoney-couponMy+yunfei-checkGsb|setData}}</p>
          <router-link :to="{path:'/Orderdetails',query:{endMoney:(totalMoney-couponMy-yunfei-checkGsb)}}">
            <button>确认支付</button>
          </router-link>
        </div>


      </div>
    </transition>


  </div>

</template>
<script>

  export default{
    name: 'pay',

    data: function () {
      return {
        guoshiBi: 600,
        totalMoney: 0,
        checkGsb: [],
        couponMy: 0,
        yunfei: 0,
        picked: 1,
        pay: 0,
        isShow: false,
        fpStyle:"不开发票",
        userName:'张三',
        Phone:"13666666666",
        Address:'四川省成都市高新区云华路333号7幢',


        payWay: [
          {payId: '1', paySrc: 'static/images/zfb.png', payName: '支付宝支付'},
          {payId: '2', paySrc: 'static/images/weixin.png', payName: '微信支付'},
          {payId: '3', paySrc: 'static/images/bank.png', payName: '银行卡支付'}
        ]
      }

    },
    filters: {
      setData: function (value) {
        return "￥" + value.toFixed(2) + "元"
      },
      changData: function (value) {

        return (value / 100).toFixed(2);
      }
    },
    mounted: function () {
      console.log(this.$route);
      if(this.$route.query.money){
        this.totalMoney =Number(this.$route.query.money) ;
      }
      if(this.$route.query.zhekou){
        this.couponMy =Number(this.$route.query.zhekou) ;
      }

      if(this.$route.query.fpStyle){
        this.fpStyle=this.$route.query.fpStyle;
      }

//      console.log( this.fpStyle);
      if (this.totalMoney) {
        if (this.totalMoney >= 288) {
          this.yunfei = 0
        } else {
          this.yunfei = 10
        }
      }
      if(this.$route.query.userName&&this.$route.query.Phone&&this.$route.query.Address){
        this.userName=this.$route.query.userName;
//      console.log( this.userName);
        this.Phone=this.$route.query.Phone;
        this.Address=this.$route.query.Address;
      }





    },
    methods: {
      Doactive: function () {
        console.log(11);
        this.isShow = true
      },
      closeModel: function () {
        this.isShow = false
      }


    }
  }
</script>

<style scoped>
  .jg {
    height: 10em;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }

  .box {
    background-color: rgba(0, 0, 0, .1);
    font-size: 62.5%;
  }

  .line {
    margin: 0.5em 0;
    background-color: white;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    background-color: white;
  }

  .title i {
    margin-left: 1em;
  }

  .title h1 {
    margin-right: 43%;
  }

  .address {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em 0;
    background-color: #D5BFA7;
    text-align: left;
  }

  .address i {
    color: #CCCCCC;
    flex-basis: 80%;
    text-align: right;
    margin-right: 1em;
  }

  .address div {
    margin-left: 2em;
  }

  .pay-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    border-bottom: 1px solid #ccc;

  }

  .pay-detail P:first-of-type {
    margin-left: 2em;
  }

  .pay-detail P:nth-of-type(2) {
    margin-right: 1em;
    color: #BB9772;
  }

  .pay-detail input {
    margin-left: 2em;
  }

  p {
    font-size: 1.6em;

  }

  input {
    width: 1.4em;
    height: 1.4em;
  }

  span {
    font-size: 1.2em;
  }

  .pay-money {
    padding: 2em 0;

  }

  .pay-money h1 {
    color: #684029;
    font-size: 1.6em;
  }

  .pay-way {
    padding: 1em 0;
    text-align: left;
    margin-left: 2em;
  }

  .pay-way span {
    margin-left: 2em;
  }

  .address-ok {
    background-color: #D5BFA7;
    padding: 1em 0;
  }

  .btnShop {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 6em;
    background-color: #ccc;

  }
  button{
    border: none;
  }

  .btnShop button {
    background-color: #000000;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1.6em;
  }

  .payModel {
    position: fixed;
    bottom: 3%;
    width: 100%;
    background-color: white;
  }

  .payfashi {
    display: flex;
    justify-content: flex-start;
    margin: 4em 0;
    align-items: center;
  }

  .payColor {
    color: #A0522D;
  }

  .payfashi input, .payfashi p {
    margin-left: 3em;
  }

  .payfashi img {
    width: 10%;
    height: 10%;
    margin-left: 2em;

  }

  .payBtn {
    width: 100%;
    height: 6em;

  }

  .payBtn p {
    color: #684029;
    font-size: 1.8em;
  }

  .payBtn button {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1.6em;
    background-color: #000000;
  }

  .close img {
    width: 6%;
    margin-left: 70%;
    margin-top: 15%;
  }


</style>
