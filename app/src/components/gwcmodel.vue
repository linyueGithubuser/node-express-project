<template>
  <div class="">
    <div class="zhezao" @click.self="modeclose">
      <div class="modelbox">
        <div class="modelcontent">
          <div class="contentop">
            <span>190.0</span>
            <ul class="modelul">
              <li>
                <img src="../../static/images/chicun.png"/>
                <span>18x18cm</span>
              </li>
              <li>
                <img src="../../static/images/fenxiang.png"/>
                <span>适合7-8人分享</span>
              </li>
              <li>
                <img src="../../static/images/canju.png"/>
                <span>含10套餐具</span>
              </li>
              <li>
                <img src="../../static/images/yuyue.png"/>
                <span>需提前6小时预订</span>
              </li>
            </ul>
          </div>
          <div class="contentmid">
            <img src="../../static/images/1.5.jpg">
          </div>
          <div class="contentbotm">
            <span>商品规格</span>
            <ul class="bongsul">
              <li class="slecactive" >2.0磅</li>
              <li>3.0磅</li>
              <li>5.0磅</li>
            </ul>
          </div>
        </div>
        <div class="modelfoot">
          <span>加入购物车</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      name:'gwcmodel',
      data(){
        return{
//          nowid:1
        }
      },
      props:[
        'nowgood'

      ],
      methods: {
        modeclose(){
          this.$emit('close');

        },
        created:function(){
          console.log(55555555)

          this.$http.get('http://n1r8399389.51mypc.cn:25274/hcakelist').then(function(res){

            console.log(res)
            console.log(this)
//            console.log(this.qurey)
//            this.goods = res.body;
          })
        }
    }



    }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .zhezao{
    position: fixed;
    background-color:rgba(0,0,0,.3);
    left: 0;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
  }
  .modelbox{
    position: fixed;
    left:7%;
    top:22%;
    z-index: 51;
    background-color: white;
    width:80%;
    padding:30px;
    border-radius: 6px;
  }
  .modelcontent{
    /*background-color:rosybrown;*/
  }
  .modelfoot{
    /*background-color: #5cb85c;*/
  }

  .modelul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 6px;
  }
  .modelul>li{
    color: #7A7A7A;
    font-size: 2.5em;
    /*height:30px;*/
    /*line-height:30px;*/
    list-style: none;
    width: 48%;
    margin-top: 12px;
  }
  .modelul>li>img{
    width: 36px;
    vertical-align: bottom;
    margin-right: 10px;
  }
  .contentmid{
    background-color:white;
    display: flex;
    justify-content: space-around;
    padding:50px 0 50px 0;
  }
  .contentmid>img{
    width: 100%;

  }
  .contentbotm>span{
    font-size: 3em;
    color: #7A7A7A;
  }
  .bongsul{
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }
  .bongsul li{
    background-color: #F7F7F7;
    list-style: none;
    width: 30%;
    text-align: center;
    padding: 22px 0;
    border: 2px solid #F7F7F7;
    font-size: 2.4em;
    color: #939393;
  }
  .slecactive{
    background:none;
    border: 2px solid #000;
    color: black;
  }
  .contentop{
    text-align: left;
  }
  .contentop>span{
    font-size: 3.3em;
    color: #FF714E;

  }
  .modelfoot{
    text-align: center;
    margin-top: 34px;
  }
  .modelfoot>span{
    display: inline-block;
    width:200px;
    height:70px;
    line-height: 70px;
    background-color:black;
    color: white;
    margin: 10px 0;
    font-size: 2.2em;
    border-radius: 2px;

  }

</style>
