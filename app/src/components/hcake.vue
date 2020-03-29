<template>
  <div>

    <div class="bigbox">
      <div class="hlistbox">
        <ul v-for="item in goods" v-if="item.leino==goodsno">
          <router-link :to="{path:'/details',query:{goodid:item.goodsid}}">
            <li>
              <img :src='prevsrc+item.goodsimg'  alt="">
            </li>
            <li>
              <h3>{{item.goodsname1}}</h3>
              <h3>{{item.goodsname2}}</h3>
            </li>
            <li>
              <p>{{item.goodsdes}}</p>
            </li>
          </router-link>

          <li>
            <span>￥{{item.price1}} 元</span>
            <!--外部引入@click="gobuy(item.goodsid)"-->
            <i @click="gobuy(item.goodsid)" class="fa fa-cart-plus" aria-hidden="true"></i>
          </li>
        </ul>
      </div>

      <!--<gwcmodel v-show="modelbtn" @close="modelclose"></gwcmodel>-->

      <div class="zhezao" @click.self="modelclose" v-show="modelbtn">
        <div class="modelbox">
          <div class="modelcontent">
            <div class="contentop">
              <span>￥{{nowgood['price'+hguige]}} 元</span>
              <p class="goodsname">{{nowgood.goodsname2}}</p>
              <ul class="modelul">
                <li>
                  <img src="../../static/images/chicun.png"/>
                  <span>{{nowgood['guige'+hguige]}}</span>
                </li>
                <li>
                  <img src="../../static/images/fenxiang.png"/>
                  <span>适合{{nowgood['person'+hguige]}}人分享</span>
                </li>
                <li>
                  <img src="../../static/images/canju.png"/>
                  <span>含{{nowgood['canju'+hguige]}}套餐具</span>
                </li>
                <li>
                  <img src="../../static/images/yuyue.png"/>
                  <span>需提前{{nowgood['pretime'+hguige]}}小时预订</span>
                </li>
              </ul>
            </div>
            <div class="contentmid">

              <!--<img :src='prevbimg+nowbimg'>-->

              <img :src='prevbimg+nowimg'>
            </div>
            <div class="contentbotm">
              <span>商品规格</span>
              <ul class="bongsul">
                <!--clicked? 'blue-class':'red-class/ slecactive {{nowgood.bongs1}} -->
                <li :id="hguige==1?'slecactive':''" @click="xzbangs(1)" >{{nowgood.bongs1}}</li>
                <li :id="hguige==2?'slecactive':''" @click="xzbangs(2)">{{nowgood.bongs2}}</li>
                <li :id="hguige==3?'slecactive':''" @click="xzbangs(3)">{{nowgood.bongs3}}</li>
              </ul>
            </div>
          </div>
          <div class="modelfoot">
            <span @click="suradd">加入购物车</span>
          </div>
        </div>
      </div>
      <mygwc v-if='chebtn' :totallnums="totallnums" @cheche="cheche"></mygwc>

    </div>
    <indexBar></indexBar>
  </div>



</template>
<script>
  import mygwc from './cheche'
  import indexBar from "./indexBar.vue"

  export default{
      name:'hcake',
    components:{
      mygwc:mygwc,
      indexBar:indexBar,

    },

      data:function(){
        return{
          goods:[],//请求的数据
          prevsrc:"static/images/",
          prevbimg:"../../static/images/",
          goodsno:"",
          modelbtn: false,
          chebtn:true,
          nowid:1,
          nowgood:{},
          hprice:"price",
          hguige:'1',
          nowimg:"",
          totallarr:[],
          totallnums:0
        }
      },

      beforeUpdate:function(){
        this.goodsno=this.$route.params.id
      },
      created:function(){
        this.$http.get('http://n1r8399389.51mypc.cn:25274/hcakelist').then(function(res){
          this.goods = res.body;
        })
      },
      methods: {
        gobuy(goodsid){
          this.modelbtn=true;
          this.nowid=goodsid;
          this.hguige=1;

          let allgood=this.goods;
          for(var i=0;i<allgood.length;i++) {

            if (allgood[i].goodsid == goodsid) {
              this.nowgood = allgood[i]
            }

          }
          this.nowimg=this.nowgood.bimg1;
//          console.log(goodsid);
//          console.log(this.nowgood.bimg1);
//          console.log(this.prevbimg+this.hprice+this.hguige);

        },
        modelclose(){
          this.modelbtn=false
        },
        xzbangs(nowbond){
          this.hguige=nowbond;
          this.nowimg=this.nowgood['bimg'+nowbond]

//          this.nowbimg=this.nowgood['bimg'+nowbond];

//          console.log(this.nowbimg);

        },
        suradd(){
          let addgood={};
          this.modelbtn=false;
          addgood.goodsid=this.nowid;
          addgood.guige=this.hguige;
          this.totallarr.push(addgood);
          this.totallnums= this.totallarr.length

        },
        cheche(){
          this.chebtn=false
          console.log(999999999)
        }
      }
    }

</script>
<style scoped>

  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: #151515;
  }
  .bigbox{
    font-size: 62.5%;
  }
.hlistbox{
    display: flex;
    padding: 3%;
    flex-wrap: wrap;
    justify-content:space-between;
  }
.hlistbox ul{
  width:40%;
  padding: 0 12px;
}
  .hlistbox ul li{
    list-style: none;
    text-align: left;
    margin-bottom: 5px;
  }
  .hlistbox ul li h3{
    padding-bottom:3px;
  }
  .goodsname{
    margin-top: 5px;
    color: #5b5b5b;
    font-size: 1.3em;
    margin-left: 2px;
  }
  .hlistbox img{
    width:100%;
    height: 158px;
  }
  .hlistbox p{
    color:#A5A5A5 ;
    font-size:1.2em;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .hlistbox span{
    color: #A3A3A3;
    font-size:1.4em;
  }
  .hlistbox i{
    color: #151515;
    font-size:2.5em;
  }
  .hlistbox ul>li:last-child{
    display: flex;
    justify-content: space-between;
    line-height:2.5em;
  }

  /*模态框的样式*/

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
    left:9.5%;
    top:8%;
    z-index: 51;
    background-color: white;
    width:70%;
    padding:20px;
    border-radius: 4px;
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
    font-size:1.2em;
    /*height:30px;*/
    /*line-height:30px;*/
    list-style: none;
    width: 50%;
    margin-top: 5px;
  }
  .modelul>li>img{
    width: 20px;
    vertical-align: bottom;
    margin-right:4px;
  }
  .contentmid{
    background-color:white;
    display: flex;
    justify-content: space-around;
    padding:20px 0 20px 0;
    height: 120px;
  }
  .contentmid>img{
    width: 100%;

  }
  .contentbotm>span{
    font-size: 1.4em;
    color: #7A7A7A;
  }
  .bongsul{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .bongsul li{
    background-color: #F7F7F7;
    list-style: none;
    width: 30%;
    text-align: center;
    padding: 6px 0;
    border: 2px solid #F7F7F7;
    font-size: 1.3em;
    color: #939393;
  }
  #slecactive{
    background:none;
    border: 2px solid #000;
    color: black;
  }
  .contentop{
    text-align: left;
  }
  .contentop>span{
    font-size: 1.6em;
    color: #FF714E;

  }
  .modelfoot{
    text-align: center;
    margin-top:12px;
  }
  .modelfoot>span{
    display: inline-block;
    width:100px;
    height:34px;
    line-height: 36px;
    background-color:black;
    color: white;
    margin: 10px 0;
    font-size: 1.2em;
    border-radius: 2px;

  }

</style>

