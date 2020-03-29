<template>
  <div id="login">
    <navv one="验证码登录"></navv>
    <input type="text" placeholder="手机号码">
    <input type="text" placeholder="密码">
    <router-link to="/userCenter"><button>登录</button></router-link>
    <p>没有账号？ <a><router-link to="/phoneLogin">验证码登录 ></router-link></a></p>
    <!--<div class="line">-->
      <!--<hr>-->
      <!--<div class="text">其他登录方式</div>-->
    <!--</div>-->
    <!--<i class="fa fa-3x fa-weixin" aria-hidden="true"></i>-->
  </div>
</template>
<script>
  import adress1 from './adress1'
    export default{
      name: "login",
      components: {
        navv: adress1
      }
    }
</script>
<style scoped>
  /*@import "../../static/icon/css/font-awesome.css";*/
  *{
    margin: 0;
    padding: 0;
  }
  input{
    font-size: 1.2em;
    width: 89%;
    height: 60px;
    border: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid #A9A9A9;
  }
  button,input{
   outline: none;
  }
  button{
    width: 90%;
    height: 60px;
    margin: 20px 0;
    border: none;
    color: white;
    font-size: 1.2em;
    background-color: #D5D5D5;
  }
  p{
    display: inline-block;
    width: 90%;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 1.2em;
  }
  .line{
    position: relative;
    height: 30px;
  }
  .text{
    background-color: white;
    position: absolute;
    width: 30%;
    height: 30px;
    left: 50%;
    margin-left: -15%;
    line-height: 30px;
    margin-top: -15px;
    font-size: 1.2em;
  }
 .line{
    width: 90%;
    margin: 0 auto;
  }
  a{
   text-decoration: none;
  }
 i{
   color: green;
   margin-top: 40px;
   padding: 30px;
   border-radius: 100px;
   border: 1px solid gray;
 }
</style>
