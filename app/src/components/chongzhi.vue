<template>
    <div>
      <adress1 one="余额充值"></adress1>
      <div class="money">
        <span>当前余额 <span class="money1">0</span> 元</span>
      </div>
      <div class="money3">
        <span>使用充值卡充值</span>
      </div>
      <ul>
        <li>
          <span>卡号</span><input type="text" placeholder="充值卡卡号">
        </li>
        <li>
          <span>密码</span><input type="text" placeholder="充值卡密码">
        </li>
      </ul>
      <button>充值</button>
    </div>
</template>
<script>
  import adress1 from './adress1'
    export default{
      name:'chongzhi',
      components:{
        adress1: adress1
      }
    }
</script>
<style scoped>
  *,ul{
    margin: 0;
    padding: 0;
  }
  .money{
    font-size: 1.2em;
    height: 100px;
    /*background-color: #00A000;*/
    position: relative;
  }
  .money>span{
    position: absolute;
    right: 5%;
    bottom: 10%;
  }
  .money1{
    font-size:2em;
  }
  .money3{
    height: 80px;
    background-color: #D5D5D5;
    position: relative;
    font-size: 1.2em;
    color: white;
  }
  .money3>span{
    position: absolute;
    left: 5%;
    bottom: 15%;
  }
 li{
    list-style: none;
    height: 60px;
    font-size: 1.2em;
   text-align: left;
  }
  input{
    height: 60px;
    font-size: 1em;
    width: 70%;
    border: none;
    outline: none;
  }
  li>span{
    display: inline-block;
    width: 15%;
  }
  ul{
    padding-left: 5%;
  }
  button{
    width: 95%;
    border: none;
    outline: none;
    height: 60px;
    margin-top: 30px;
    color: white;
    font-size: 1.2em;
    background-color: rgba(154, 154, 154, 0.45);
  }
</style>
