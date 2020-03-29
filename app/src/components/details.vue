<template>
  <div class="box">
    <adress1 one="芒果奶油蛋糕"></adress1>

    <div class="img">
      <img :src="cake.banner" alt="">
    </div>

    <div class="conten">
      <div class="ms">
        <p><b>{{cake.yw}}</b></p>
        <p><b>{{cake.mz}}</b></p>
      </div>

      <div class="an">
        <span>{{cake.s1}}</span>
        <span class="an1">{{cake.s2}}</span>
        <span class="an1">{{cake.s3}}</span>
      </div>

      <div class="jg">
        <p>{{cake.ms1}}</p>
      </div>
      <hr>

      <div class="test" @click="toggle()">
        <p><b>规格数量选择</b></p>
        <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
      </div>

    </div>
    <div class="kb"></div>

    <div>
      <div class="td">
        <div>
          <img src="../../static/images/zr8.png" alt="">
        </div>
        <p>参考甜度</p>
        <div>
          <img src="../../static/images/zr8.png" alt="">
          <img src="../../static/images/zr8.png" alt="">
          <img src="../../static/images/zr8.png" alt="">
          <img src="../../static/images/zr7.png" alt="">
          <img src="../../static/images/zr7.png" alt="">
        </div>
      </div>
    </div>

    <div>
      <div class="td">
        <div>
          <img src="../../static/images/zr9.png" alt="">
        </div>
        <p>配送时间</p>
        <p>现在订购最早明天10：00配送,每日最晚配送时间19：00</p>
      </div>

    </div>

    <div>
      <div class="td">
        <div>
          <img src="../../static/images/zr10.png" alt="">
        </div>
        <p>保鲜时间</p>
        <p>0-4℃保藏12小时,5℃食用为佳</p>
      </div>

    </div>
    <div class="kb"></div>

    <div class="js">
      <p>/不使用罐头水果和植混奶油/</p>
      <p>/坚持应季大台农鲜切芒果/</p>
      <p>/新西兰纯乳脂奶油/</p>
      <p>/21cake配方芒果百香慕斯夹心/</p>
    </div>

    <div class="kb"></div>

    <div class="tp">
      <img :src="cake.xqt1" alt="">
      <p>{{cake.p}}</p>
      <img :src="cake.xqt2" alt="">
      <img :src="cake.xqt3" alt="">
      <img :src="cake.xqt4" alt="">
      <img :src="cake.xqt5" alt="">
      <img :src="cake.xqt6" alt="">
      <img :src="cake.xqt7" alt="">
      <img :src="cake.xqt8" alt="">
      <img :src="cake.xqt9" alt="">
    </div>
    <!--底部固定加入购物车-->
    <div class="jr">
      <div></div>
      <div @click="toggle()">加入购物车</div>
      <div>
        <b><p>￥0.00</p></b>
      </div>
    </div>

    <!--侧边购物车圆图标-->
    <div class="cb">
      <router-link to="/shopCart">
        <img src="../../static/images/gwc.png" alt="">
      </router-link>
  </div>

    <tankuang class="tk" v-show="isShow"></tankuang>

  </div>

</template>

<script>
  import tankuang from './tankuang.vue'
  import adress1 from './adress1.vue'

  export default {
    name: 'details',
    components: {
      tankuang: tankuang,
      adress1: adress1

    },
    data: function () {
      return {
        isShow: false,
        cake: [],
        productID:''
      }
    },
    methods: {
      toggle: function () {
        this.isShow = !this.isShow;
      }
    },
    created: function () {
      this.$http.get('http://n1r8399389.51mypc.cn:25274/zr').then(function (res) {


        this.cake = res.body[this.productID+4];

      })
    },
    mounted:function () {
      console.log(this.$route);

      this.productID = this.$route.query.goodid;

    }
  }

</script>
<style scoped>
  .box {
    width: 100%;
  }

  .conten {
    margin-left: 30px;
  }

  .img {
    /*display: flex;*/
    width: 100%;
    justify-content: center;
  }

  .img img {
    width: 100%;
  }

  .ms p:nth-child(1) {
    font-size: 15px;
    text-align: left;
  }

  .ms p:nth-child(2) {
    font-size: 15px;
    /*margin-top: -35px;*/
    text-align: left;
  }

  .an {
    display: flex;
  }

  .an span:nth-child(1) {
    width: 60px;
    height: 20px;
    border: 1px solid #D5BFA7;
    color: #D5BFA7;
    border-radius: 50px;
    text-align: center;
    line-height: 20px;
    font-size: 9px;
  }

  .an1 {
    width: 40px;
    height: 20px;
    border: 1px solid #D5BFA7;
    color: #D5BFA7;
    border-radius: 50px;
    text-align: center;
    margin-left: 15px;
    line-height: 20px;
    font-size: 9px;
  }

  .jg p {
    margin-top: 40px;
    font-size: 12px;
    color: #959595;
    text-align: left;
  }

  .test {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    align-items: center;
  }

  .kb {
    height: 20px;
    background-color: #f8f8f8;
  }

  .td {
    display: flex;
    margin-left: 20px;
    /*border: 1px solid red;*/
    align-items: center;
    text-align: left;
  }

  .td p {
    margin-left: 20px;
    font-size: 12px;
  }

  .td p:nth-child(2) {
    width: 80px;
  }

  .td img {
    margin-left: 20px;
    width: 15px;
  }

  .js {
    margin-left: 30px;
  }

  .js p {
    font-size: 13px;
    text-align: left;
  }

  .tp {
    /*display: flex;*/
    flex-wrap: wrap;
  }

  .tp p {
    width: 70%;
    font-size: 15px;
    color: #ccc;
    text-align: left;
  }

  .tp img {
    width: 100%;
  }

  .jr {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
  }

  .jr div:nth-child(1) {
    flex-basis: 33.3%;
    background-color: white;
  }

  .jr div:nth-child(2) {
    flex-basis: 33.3%;
    background-color: black;
    color: white;
    font-size: 15px;
    text-align: center;
    padding-top: 4%;
  }

  .jr div:nth-child(3) {
    flex-basis: 33%;
    font-size: 15px;
    text-align: right;
    background-color: white;

  }

  .jr div:nth-child(3) p {
    margin-right: 5%;
  }

  .cb {
    position: fixed;
    bottom: 10%;
    padding: 2%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #000;
    filter: alpha(Opacity=60);
    -moz-opacity: 0.6;
    opacity: 0.6;
  }

  .cb img {
    width: 30px;
  }

  .tk {
    position: fixed;
    bottom: 8%;
    width: 100%;
  }

</style>
