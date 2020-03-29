<template>
  <div class="box">
    <div class="cen">
      <p class="jg">{{cake.jg}}</p>
      <div class="td">
        <div>
          <div>
            <img src="../../static/images/icon1.png" alt="">
          </div>
          <p>{{cake.gg}}</p>
        </div>
        <div>
          <div>
            <img src="../../static/images/icon2.png" alt="">
          </div>
          <p>{{cake.rs}}</p>
        </div>
        <div>
          <div>
            <img src="../../static/images/icon3.png" alt="">
          </div>
          <p>{{cake.cj}}</p>
        </div>
        <div>
          <div>
            <img src="../../static/images/icon4.png" alt="">
          </div>
          <p>{{cake.yd}}</p>
        </div>
      </div>
      <div class="ps">
        <img :src="cake.tp" alt="">
      </div>
      <div class="sp">
        <p>商品规格</p>
      </div>

      <div class="bs">
        <!--<div @click="toggle"></div>-->
        <!--<div>2.0磅</div>-->
        <!--<div>3.0磅</div>-->
        <!--<div>5.0磅</div>-->
        <div v-for="(item,index) in oo" :class="{'active':ind == index}" @click="toggle(index)">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tankuang',
    data: function () {
      return {
        cake: [],
        oo: ['1.0磅','2.0磅','3.0磅','5.0磅'],
        ind: 0,
        AllCake:[]
      };
    },
    methods: {
      toggle(index){
        this.ind = index;
        this.cake = this.AllCake[index]
      }
    },
    created: function () {
      this.$http.get('http://n1r8399389.51mypc.cn:25274/zr').then(function (res) {
        this.AllCake = res.body;
        this.cake = res.body[0];
      })
    }
  }
</script>
<style scoped>
  .box {
    /*font-size: 62.5%;*/
    background-color: white;
    box-shadow: 0 -10px 20px #ccc;
  }
  .jg {
    font-size: 15px;
    color: #FF714D;
    font-weight: bold;
    margin-left: 20px;
    text-align: left;
  }
  .td {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .td > div {
    display: flex;
    flex-basis: 45%;
    /*margin: 10px;*/
    align-items: center;
    /*border: 1px solid red;*/
  }
  .td > div > p {
    margin-left: 10px;
    font-size: 13px;
  }
  .td img{
    width: 20px;
  }
  .ps {
    /*display: flex;*/
    flex-basis: 90%;
    justify-content: center;
  }
  .ps img {
    width: 90%;
  }
  .sp {
    font-size: 14px;
    margin-left: 20px;
    text-align: left;
  }
  .bs {
    display: flex;
    /*margin-left: 5%;*/
    font-size: 13px;
    flex-wrap: wrap;
  }
  .bs > div {
    flex-basis: 18%;
    background-color: #F7F7F7;
    margin-left: 20px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-top: 2px;
  }
  .active {
    border: 1px solid black;
  }

</style>
