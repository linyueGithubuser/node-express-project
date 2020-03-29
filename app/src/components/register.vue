<template>
  <div>
    <div class="login">
      <div class="portrait">
        <router-link to="/login">
          <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>
          <span>注册/登录</span>
          <i class="fa fa-angle-right fa-2x right"></i>
      </router-link>
      </div>
  </div>
  <ul>
      <li><router-link to="/xieyi">服务条款</router-link></li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>关于我们</li>
      <li><i class="fa fa-angle-right fa-2x right"></i></li>
      <li>版本更新</li>
      <li>2.5.32</li>
    </ul>
    <div class="tel" >客服电话 4008208820
      <i class="fa fa-phone fa-2x"></i>
    </div>
  </div>
</template>
<script>
  export default{
    name: "register",
    methods: {
//      Phone:function(){
//        window.location.href = 'tel://4008208820'
//      }
    }
  }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style:none;
    text-decoration: none;
    color: #0D0D0D;
  }
  .login{
    height:200px;
    background-image: url("../../static/images/useCenterBg.jpg");
    background-size: 100% 100%;
  }
  .portrait{
    height: 50px;
    width: 70%;
    background: #FEFEFE;
    border: 1px solid #E1E0DD;
    line-height: 50px;
    text-align: center;
    position: relative;
    margin:  -25px auto 0;
    top:50%;
  }
  .portrait span{
    color: #282828;
  }
  .portrait i:first-child{
    position: absolute;
    bottom: 0;
    left: 10px;
    color: #6F6F6F;
  }
  .right{
    float: right;
    margin-right: 20px;
    line-height: 50px;
    color: #D5D5D5;
  }
  ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  li{
    flex-basis: 50%;
    height: 50px;
    line-height: 50px;
    text-indent: 1em;
    background: #FEFEFE;
    border-bottom: 1px solid #E1E0DD;
    font-size: 18px;
  }
  li:nth-child(6){
     padding-right: 1em;
     box-sizing: border-box;
   }
  li:nth-child(7),li:nth-child(8){
    border: none;
  }
  li:nth-child(odd){
    text-align: left;
  }
  li:nth-child(even){
    text-align: right;
  }
  .tel{
    height: 50px;
    line-height: 50px;
    background: #FEFEFE;
    margin-top: 10px;
    color: #838383;
    vertical-align: middle;
  }
  .tel i{
    vertical-align: middle;
  }
  .fa-phone{
    float: right;
    margin-right: 40px;
    color: #000;
    line-height: 50px;
  }
</style>
