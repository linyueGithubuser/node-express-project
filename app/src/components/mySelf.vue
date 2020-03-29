<template>
    <div>
      <adress1 one="我的账户" ></adress1>
      <ul class="liatAll">
        <li>
          <span class="pic">头像</span>
          <i class="fa fa-3x fa-user-circle" aria-hidden="true"></i>
          <i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>
        </li>
        <li>
          <span>我的信息</span><i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>
        </li>
      </ul>
      <ul class="listTwo">
        <li>
          <span>我的二维码</span>
          <i class="fa fa-2x fa-qrcode" aria-hidden="true"></i>
          <i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>
        </li>
        <li>
          <span>创建密码</span>
          <i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>
        </li>
      </ul>
      <router-link to="/register"><button>退出登录</button></router-link>
    </div>
</template>
<script>
  import adress1 from './adress1'
    export default{
      name:'mySelf',
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
    border: 1px solid grey;
    border-left: none;
    border-right: none;
  }

  ul>li{
    font-size: 1.2em;
    height: 60px;
    text-align: left;
    overflow: hidden;
    border-top: 1px solid grey;
    position: relative;
  }
  .liatAll>li:first-child,li:first-child>span{
    height: 80px;
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
  /*i{*/
    /*margin-left: 20%;*/
  /*}*/
  .listTwo{
    padding-left: 3%;
    border: 1px solid grey;
    border-left: none;
    border-right: none;
    margin-top: 25px;
  }
  button{
    width: 100%;
    border: none;
    outline: none;
    height: 60px;
    margin-top: 30px;
    color: white;
    font-size: 1.2em;
    background-color: #D5D5D5;
  }
  .pic{
    height: 80px;
    line-height: 80px;
  }
  .fa-user-circle,.fa-qrcode{
    position: absolute;
    top: 25%;
    right: 12%;
  }
  .fa-qrcode{
    position: absolute;
    top: 30%;
  }
  i{
    position: absolute;
    top:25%;
    right: 5%;
  }
</style>
