<template>
  <div>

    <router-link to="/myself">
      <div class="login">
        <div class="portrait">
          <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"> </i>
          <span>123</span>
          <i class="fa fa-angle-right fa-2x right"></i>
        </div>
        <img src="static/images/useCenterBg.jpg" alt=""/>
      </div>
    </router-link>
    <ul class="voucher">
      <li>
        <router-link to="/voucher">
          <p>1张</p>
          <span>优惠券</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chongzhi">
          <p>￥0.00</p>
          <span>余额</span>
        </router-link>
      </li>
    </ul>
    <ul class="my">
      <li>
        <router-link to="/order/allOrder">
          <i class="fa fa-check-square"></i>我的订单
        </router-link>
      </li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>
        <router-link to="/addAdress"><i class="fa fa-map-marker"></i>地址管理</router-link>
      </li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>
        <router-link to="/voucher"><i class="fa fa-ticket"></i>我的优惠券</router-link>
      </li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>
        <router-link to="/chongzhi"><i class="fa fa-money"></i>现金余额充值</router-link>
      </li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>
        <router-link to="/lucky"><i class="fa fa-user-o"></i>我的小幸运会</router-link>
      </li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
    </ul>
    <ul class="user">
      <li><router-link to="/xieyi">服务条款</router-link></li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>关于我们</li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>版本更新</li>
      <li>2.5.32</li>
    </ul>
    <div class="tel">客服电话 4008208820
      <i class="fa fa-phone fa-2x"></i>
    </div>
    <indexBar></indexBar>
  </div>
</template>
<script>
  import indexBar from "./indexBar.vue"
  export default{
    name: "register",
    components:{
      indexBar:indexBar
  },
      methods: {
//        Phone:function(){
//          window.location.href = 'tel://4008208820'
//        }
    }
  }

</script>
<style scoped>
  @import "../../static/icon/css/font-awesome.css";

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #0D0D0D;
  }

  .login {
    height: 200px;
    position: relative;
    width: 100%;
    /*background-image: url("../assets/useCenterBg.jpg");*/
    /*background-size: 100% 100%;*/
  }
  .login img{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
  }

  .portrait {
    height: 50px;
    width: 70%;
    background: #FEFEFE;
    border: 1px solid #E1E0DD;
    line-height: 50px;
    text-align: center;
    position: relative;
    margin: -25px auto 0;
    top: 50%;
  }

  .portrait span {
    color: #282828;
  }

  .portrait i:first-child {
    position: absolute;
    bottom: 0;
    left: 10px;
    color: #6F6F6F;
  }

  .right {
    float: right;
    margin-right: 20px;
    line-height: 50px;
    color: #D5D5D5;
  }

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .voucher > li {
    box-sizing: border-box;
    flex-basis: 49%;
    height: 80px;
    background: #FEFEFE;
    text-align: center;
    margin-top: 10px;
  }

  .voucher > li:not(:last-child) {
    border-right: 1px solid #E1E0DD;
  }

  .voucher > li p {
    font-weight: 900;
    font-size: 20px
  }

  .voucher > li span {
    color: #6F6F6F;
  }

  .my {
    margin-bottom: 30px;
  }

  .my > li {
    flex-basis: 50%;
    height: 50px;
    line-height: 50px;
    background: #FEFEFE;
    border-bottom: 1px solid #E1E0DD;
    font-size: 18px;
  }

  .my > li:nth-child(9), .my > li:nth-child(10) {
    border: none;
  }

  .my > li:nth-child(odd) {
    text-align: left;
  }

  .my > li:nth-child(even) {
    text-align: right;
  }

  .my > li:nth-child(odd) i {
    color: #979797;
    display: inline-block;
    width: 30px;
  }

  .user > li {
    flex-basis: 50%;
    height: 50px;
    line-height: 50px;
    background: #FEFEFE;
    border-bottom: 1px solid #E1E0DD;
    font-size: 18px;
  }

  .user > li:nth-child(6) {
    box-sizing: border-box;
    padding-right: 20px;
  }

  .user > li:nth-child(7), .user > li:nth-child(8) {
    border: none;
  }

  .user > li:nth-child(odd) {
    text-align: left;
  }

  .user > li:nth-child(even) {
    text-align: right;
  }

  .tel {
    height: 50px;
    line-height: 80px;
    background: #FEFEFE;
    margin-top: 30px;
    color: #838383;
  }

  .tel i ,.tel {
    line-height: 50px;
    vertical-align: middle;
  }

  .fa-phone {
    float: right;
    margin-right: 40px;
    color: #000;
  }

  .my, .user, .tel {
    box-sizing: border-box;
    padding-left: 20px;
  }
</style>
