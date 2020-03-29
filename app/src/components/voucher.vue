<template>
  <div id="vourcher">
    <navv one="我的优惠券"></navv>
    <div class="addVoucher" v-on:click="show">
      <i class="fa fa-plus"></i>添加优惠券/尊享卡
    </div>
    <div class="content">
      <p class="name">新客权益冰淇淋兑换券</p>
      <span>有效期:2017.05.19-2018.05.18</span>
      <p>
        此券可兑换:一个价值45元的原味牛乳冰淇淋。（订单满100元可兑换）
      </p>
    </div>
    <p class="more">没有更多了| <router-link to="/voucher"><span>查看过期券></span></router-link></p>
    <div class="model" v-show="modelShow">
      <p class="title">添加一张优惠券/尊享卡</p>
      <input type="text" class="inp" autofocus>
      <input type="button" value="添加" class="add"v-on:click="show">
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
  #vourcher {
    background: #F0F0F0;
  }

  .addVoucher {
    width: 60%;
    height: 80px;
    background: white;
    margin-left:40%;
    color: #AB8868;
    line-height: 80px;
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
  }

  .addVoucher i {
    color: #A88463;
  }
  .content{
    width: 85%;
    margin: 20px auto;
    font-size: 18px;
    background: white;
    color: #6F6F6F;
    padding:5px 20px;
  }
  .name{
    color: #A88361;
    font-size: 24px;
  }
  .more{
    text-align: center;
    padding: 40px 0;
  }
  .more span{
    color: #0D0D0D;
  }
  .model{
    width: 80%;
    height: 200px;
    position: fixed;
    top:50%;
    margin-top: -200px;
    left:50%;
    margin-left: -40%;
    background: white;
  }
  .title{
    text-indent: 2em;
    font-size: 18px;
    color: #0D0D0D;
  }
  .inp{
    width: 80%;
    margin: 0 auto;
    display: block;
    height: 40px;
    border: none;
    line-height: 40px;
    font-size: 18px;
    border-bottom: 5px solid #0D0D0D;
  }
  .inp:focus{
   outline: none;
  }
  .add{
    border: none;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    margin-top:30px;
    color: white;
  }
  .content p:last-child{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
