<template>
  <div>
    <div class="order" v-for="item in orderList" v-if="item.state=='交易完成'">
      <router-link :to="{path:'/detail/'+ item.id}">
        <div class="time">
          {{item.time}}
        </div>
        <div>
          {{item.state}}
        </div>
        <div>
          <img  :src="item.imgSrc" alt="">
        </div>
        <div class="price">
          {{item.num}}
            <span>
              {{item.price}}
            </span>
        </div>
        <div>
          <input type="submit" value="再次购买"/>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'unDoneOrder',
    data: function () {
      return {
        orderList: []
      }
    },
    created: function () {
      this.$http.get('http://n1r8399389.51mypc.cn:25274/order').then(function (res) {
        this.orderList = res.body;
      })
    }
  }
</script>

<style scoped>
  *{
    list-style: none;
    text-decoration: none;
    font-size: 14px;
  }
  .order {
    margin: 0 auto 30px;
    width: 90%;
    border: 1px solid #838383;
    border-top: 5px solid #0D0D0D;
    position: relative;
    font-size: 18px;
    text-align: left;
  }

  .order div{
    color: #0D0D0D;
  }
  .order div:nth-child(2) {
    text-align: right;
    margin: 0 auto;
    width: 90%;
    box-sizing: border-box;
    padding-right: 1em;
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
    margin-top: 10px;
  }

  .order div:nth-child(3) {
    width: 90%;
    margin: 0 auto;
  }

  .order div:last-child {
    text-align: center;
  }

  .order .price {
    text-align: right;
    width: 90%;
    border-top: 1px solid #838383;
    margin: 0 auto;
  }

  .order .price span {
    color: #ff4332;
  }

  input {
    border: none;
    font-size: 1em;
    background: none;
    cursor: pointer;
    margin: 10px 0;
  }

  input:focus {
    outline: none;
  }
  img{
    height: 60px;
  }
  .time{
    text-indent: 1em;
  }
</style>
