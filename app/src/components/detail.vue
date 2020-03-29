<template>
  <div class="section">
    <navv one="订单详情"></navv>
    <div v-for="item in orderList" v-if="id==item.id">
      <div class="order">
        <div>
          {{item.time}}
        </div>
        <div>
          {{item.state}}
        </div>
        <div class="name">
          <img :src="item.imgSrc" alt=""/>
          <span>{{item.name}}{{item.price}}</span>
        </div>
        <div class="price" v-if="item.state=='交易取消'">
          未支付:{{item.price}}
        </div>
        <div class="price" v-if="item.state=='交易完成'">
          支付:{{item.price}}
        </div>
        <div>
          <input type="submit" value="再次购买"/>
        </div>
      </div>
      <div class="order">
        <ul class="message">
          <li>
            订单号：{{item.coding}}
          </li>
          <li class="bor">
            送货时间：{{item.deliverTime}}
          </li>
          <li>
            收货人：{{item.username}}
          </li>
          <li>
            联系电话：{{item.tel}}
          </li>
          <li>
            收货地址：{{item.address}}
          </li>
          <li class="bor">
            纳税人：
          </li>
          <li>
            发票种类：暂无发票信息
          </li>
          <li>
            发票抬头：暂无发票信息
          </li>
          <li>
            查看发票：暂无发票信息
          </li>
          <li>
            订单留言：暂无发票信息
          </li>
        </ul>
      </div>
      <div class="order">
        <ul class="pay">
          <li>
            支付方式：支付宝
          </li>
          <li v-if="item.state=='交易取消'">
            支付状态：未支付
          </li>
          <li v-if="item.state=='交易完成'">
            支付状态：支付完成
          </li>
          <li class="bor">
           商品总额
          </li>
          <li class="bor">
           {{item.price}}
          </li>
          <li>
            配送费
          </li>
          <li>
            ￥0.00
          </li>
          <li>
            余额折扣
          </li>
          <li>
            ￥0.00
          </li>
          <li>
            优惠折扣
          </li>
          <li>
            ￥0.00
          </li>
          <li>
            代金卡
          </li>
          <li>
            ￥0.00
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import adress1 from './adress1'
  export default {
    name: 'detail',
    components:{
      navv: adress1
    },
    data: function () {
      return {
        orderList: [],
        id:''
      }
    },
    created: function () {
      this.$http.get('http://n1r8399389.51mypc.cn:25274/order').then(function (res) {
        this.orderList = res.body;
      })
    },
    mounted () {
      this.id=this.$route.params.id;
    }
  }
</script>

<style scoped>
  *{
    list-style: none;
    text-decoration: none;
    font-family: "微软雅黑";
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
  .section{
    background: #f3f3f3;
  }
  .order {
    margin: 0 auto 10px;
    width: 100%;
    position: relative;
    font-size: 18px;
    text-align: left;
    background: white;
    padding: 10px 0;
  }


  .order div，.order li{
    color: #0D0D0D;
  }
  .order div:nth-child(2) {
    text-align: right;
    margin: 0 auto;
    width: 90%;
    box-sizing: border-box;
  }

  .order div:nth-child(1){
    width: 60%;
  }
  .order div:nth-child(2){
    width: 40%;
  }
  .order div:nth-child(1), .order div:nth-child(2) {
    float: left;
    display: inline-block;
  }

  .order div:nth-child(3) {
    width: 90%;
    margin: 0 auto;
  }

  .order div:last-child {
    text-align: center;
  }

  .order div > img {
    height: 80px;
  }

  .order .price {
    text-align: right;
    width: 90%;
    border-top: 1px solid #b2b2b2;
    margin: 10px auto 0;
    padding-top: 10px;
  }

  .order .price span {
    color: #ff4332;
  }

  input {
    border: none;
    background: none;
    cursor: pointer;
    margin: 10px 0;
  }

  input:focus {
    outline: none;
  }
  .name {
    margin-bottom: 10px;
    overflow: hidden;
  }
  .name img,.name span{
    vertical-align: middle;
  }
  .bor{
    border-top: 1px solid #b2b2b2;
    margin-top: 10px;
    padding-top: 10px;
  }
  .pay{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .pay li{
    flex-basis: 50%;
    height: 30px;
    line-height: 30px;
  }
  .message li{
    height: 30px;
    line-height: 30px;
  }
  .pay li:nth-child(odd){
    text-align: left;
  }
  .pay li:nth-child(even){
    text-align: right;
    box-sizing: border-box;
    padding-right: 18px;
  }
  ul{
    width: 90%;
    margin: 0 auto;
  }
</style>
