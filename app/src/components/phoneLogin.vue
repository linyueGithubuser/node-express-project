<template>
  <div id="phoneLogin">
    <navv one="账号密码登录"></navv>
    <input type="text" placeholder="手机号码">
    <!--<input type="text" placeholder="图形验证码">-->
    <div class="bigOne">
      <input type="text" placeholder="短信验证码">
      <button class="sendMsg">发送验证码</button>
    </div>
    <router-link to="/userCenter"><button class="login">验证并登录</button></router-link>
    <p class="lau">使用未注册的手机号码登陆时，将自动注册小幸运账号，且认为您已同意《小幸运用户协议》</p>
    <p><a><router-link to="/login">使用账号密码登录 ></router-link></a></p>
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
    name: "phoneLogin",
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
  #phoneLogin{
    position: relative;
  }
  input{
    width: 89%;
    height: 60px;
    border: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid #A9A9A9;
  }
  .login,input{
    outline: none;
    font-size: 1.2em;
  }
  .login{
    width: 90%;
    height: 60px;
    margin: 20px 0 0 0;
    border: none;
    color: white;
    background-color: darkgray;
  }
  p:first-child{
    margin: 20px 0;
  }
  p{
    display: inline-block;
    width: 90%;
    text-align: left;
    margin: 20px 0 0 0;
    font-size: 1.2em;
  }
  p:nth-child(5){
    margin-bottom: 20px;
  }
  .line{
    position: relative;
    height: 30px;
    /*margin-top: 20px;*/
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
    margin-top: 10px;
  }
  a{
    text-decoration: none;
  }
  i{
    color: green;
    margin-top: 20px;
    padding: 30px;
    border-radius: 100px;
    border: 1px solid gray;
  }
  .bigOne{
    position: relative;
  }
  .sendMsg{
    position: absolute;
    padding: 10px;
    right: 5.5%;
    font-size: 1.2em;
    top: 20%;
    border: none;
    outline: none;
    color: white;
    background-color: dimgray;
  }
</style>

