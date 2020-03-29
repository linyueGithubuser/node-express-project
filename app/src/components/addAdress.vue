<template>
    <div>
      <adress1 one="添加配送地址" save="保存" ></adress1>
      <ul class="liatAll">
        <li>
          <span>姓名:</span><input type="text" placeholder="收货人姓名">
        </li>
        <li>
          <span>手机:</span><input type="text" placeholder="收货人手机号">
        </li>
        <li>
          <span>城市:</span><input type="text" placeholder="请选择城市">
          <i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>
        </li>
        <li>
          <span>地址:</span><input type="text" placeholder="路名/写字楼/小区">
          <i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>
        </li>
        <li>
          <input type="text" placeholder="楼号/门牌号，如A座101室">
        </li>
      </ul>
    </div>
</template>
<script>
  import adress1 from './adress1'
    export default{
      name:'addAdress',
      components:{
        adress1: adress1
      }
    }
</script>
<style scoped>
  body{
    background-color: whitesmoke;
  }
  *{
    list-style: none;
    text-decoration: none;
    color: #0D0D0D;
  }
  ul,li{
    margin: 0;
    padding: 0;
    /*background-color: rgba(0,0,0,.2);*/
  }
  .liatAll{
    padding-left: 3%;
    border: 1px solid #F6F6F6;
    border-left: none;
    border-right: none;
  }

  ul>li{
    font-size: 1.2em;
    height: 60px;
    text-align: left;
    overflow: hidden;
    border-top: 1px solid #F6F6F6;
  }
  span{
    display: inline-block;
    height: 60px;
    line-height: 60px;
  }
  input{
    border: none;
    font-size: 1em;
    margin-left: 5%;
    width: 50%;
  }
  li:nth-child(5)>input{
  margin-left: 14.8%;
    margin-top: 25px;
  }
  li:nth-child(1){
    border-top: none;
  }
  i{
    margin-left: 20%;
  }
  .alone{
    margin-top: 10%;
    padding-left: 3%;
    border-top: 1px solid #F6F6F6;
    border-bottom: 1px solid #F6F6F6;
  }
  .fa-angle-right{
    color: #6F6F6F;
  }
</style>
