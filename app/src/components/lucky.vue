<template>
  <div>
    <navv one="我的小幸运会"></navv>
    <div class="grade">
      <span>当前等级</span>
      <p>注册会员</p>
    </div>
    <div class="grade">
      我的果实
      <div class="fruit">
          <p>开始累积您的第一颗果实吧</p>
        每消费100元累积一颗果实
        <input type="button" value="开始选购" class="buy">
      </div>
    </div>
    <div class="grade">
      <span>下一等级</span>
      <p>初阶会员
        <span>(1-5颗)</span>
      </p>
      <ul>
        <li>
          <i class="fa fa-gift"></i>
          <span>
            设计师礼品券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
          <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
      </ul>
    </div>
    <div class="grade">
      <p>中阶会员
        <span>(6-12颗)</span>
      </p>
      <ul>
        <li>
          <i class="fa fa-gift"></i>
          <span>
            设计师礼品券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
          <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
      </ul>
    </div>
    <div class="grade">
      <p>高阶会员
        <span>(13-25颗)</span>
      </p>
      <ul>
        <li>
          <i class="fa fa-gift"></i>
          <span>
            设计师礼品券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
          <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
      </ul>
    </div>
    <div class="grade">
      <p>尊客会员
        <span>(26颗以上)</span>
      </p>
      <ul>
        <li>
          <i class="fa fa-gift"></i>
          <span>
            设计师礼品券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
          <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
        <li>
          <i class="fa fa-credit-card-alt"></i>
           <span>
            会员免邮券
           </span>
        </li>
      </ul>
    </div>
    <div class="grade">
      <p>
        果实规则
      </p>
      <div>
        <p>1、订单实际支付金额每满10元，则将自动获得1颗果实，以此类推。累积果实可升级，并享受各级会员权益。 订单中使用优惠券、订单促销等优惠抵扣的金额不参与消费金额的累积，还可以产生积分兑换（一颗果币相当于一个积分）。</p>

        <p>2、每90天内未产生购买，果实减一颗，若果实减少为下一等级数量时，等级相应降低，上一级别的固定权益失效。</p>

        <p>3、所获得的权益自获得日起，一年内有效。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import adress1 from './adress1'
  export default{
    name: "voucher",
    components: {
      navv: adress1
    },
    data: function () {
      return {
        modelShow:false
      }
    },
    methods: {
      show:function(){
        if(this.modelShow==true){
          this.modelShow=false;
        }else {
          this.modelShow=true;
        }
      }
    }
  }


</script>
<style scoped>

  *{
    text-align: left;
    list-style: none;
    text-decoration: none;
    font-size: 14px;
  }
  .grade{
    text-indent: 18px;
    color: #A2A2A2;
  }
  .grade>div{
    width: 90%;
    margin:  0 auto;
  }
  .grade >p{
    color: #0D0D0D;
    font-size: 20px;
  }
  .grade >p>span{
    font-size: .5em;
  }
  .fruit,.fruit p{
    text-align: center;
    color: #757575;
  }
  .fruit p{
    font-size: 1.5em;
  }
  .buy{
    color: white;
    background: #5F514E;
    border: none;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    margin: 20px auto ;
  }
  .grade ul li{
    margin: 10px 0;
  }
  .grade ul li i,.grade ul li span{
    vertical-align: middle;
    margin-right: 10px;
  }
</style>
