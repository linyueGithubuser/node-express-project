<template>
  <div class="box">
    <div class="title">
      <router-link to="/pay">
        <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
      </router-link>
      <h1>订单状态</h1>

    </div>

    <div>
      <div class="payDoshop" v-for="item in productList">
        <div class="dingdan-state">
          <p>订单编号：{{date}}</p>

          <p>订单状态：订单已审核 正在出货</p>
        </div>

        <div class="payproduct">

          <img :src="item.imgSrc" alt=""/>

          <div class="payText">
            <h3>{{item.productName}}</h3>
            <h5>{{item.productNames}}</h5>

            <p>{{item.pongs}}</p>

          </div>
          <div class="payprice">
            <p>单价：￥{{item.price}}</p>
          </div>
        </div>
      </div>
      <div>
        <p>共 {{this.productList.length}} 件商品 <span class="endMoney">实付{{endMoney}}.00元</span></p>
        <div class="kk">
          <p>物流详情</p>
          <p>评价</p>
        </div>
      </div>

    </div>
    <recommend></recommend>

  </div>

</template>
<script>
  import recommend from './recommend.vue'
  export default{
    name: 'Orderdetails',
    data: function () {
      return {
        productList: '',
        date: new Date(),
        endMoney:''
      }
    },
    created: function () {
      this.$http.get("http://n1r8399389.51mypc.cn:14270/shopCart").then(function (res) {
//        console.log(res);
        this.productList = res.body;

      })
    },
    filters: {
//      setData: function (value) {
//        console.log(value);
//        return "￥" + value.toFixed(2) + "元"
//      }
    },
    mounted:function(){
      console.log(this.$route);
      this.endMoney=this.$route.query.endMoney
    },
    components: {
      recommend: recommend
    }

  }
</script>

<style scoped>
  .box {
    background-color: rgba(0, 0, 0, .1);
    font-size: 62.5%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
    background-color: white;
  }

  .title i {
    margin-left: 0.5em;
  }

  .title h1 {
    margin-right: 38%;
  }

  h3, h5 {
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
  }

  .payprice p:nth-of-type(2) {
    font-size: 1.2em;
    color: red;
  }

  .dingdan-state {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    border: 1px solid #ccc;
  }

  .dingdan-state p:first-of-type {
    margin-left: 1em;
  }

  .dingdan-state p:nth-of-type(2) {
    margin-right: 1em;
  }

  .payDoshop {
    background-color: white;
    margin-top: 1em;
  }
  .payprice{
    font-size: 1.4em;
    color: #BB9772;
  }

  .payproduct {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .payproduct img {
    width: 25%;
    margin-left: 2em;
  }

  .payproduct div {
    width: 25%;
  }
  .endMoney{
    font-size: 1.6em;
    margin-left: 1em;
    color: #BB9772;
  }
  .kk{
   display: flex;
    justify-content:  flex-end;
  }
  .kk p{
    border: 1px solid #CCC;
    margin-right: 1em;
    padding: 0.5em;
  }
</style>
