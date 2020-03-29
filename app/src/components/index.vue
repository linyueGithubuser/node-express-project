<template>
  <div class="content">
    <indexHeader></indexHeader>
    <div class="header">
        <div class="banner" >
            <img :src="bannerImg.image" alt="" @click="toggle(bannerImg.id)">
            <div class="dot">
              <span :class="dot1"></span>
              <span :class="dot2"></span>
            </div>
        </div>
      <div class="titleLIst">
        <div v-for="item in titleList">
          <router-link :to="{ path:'/hlist/hcake/'+item.id}">
            <img :src="item.src" alt="">
            <p>{{item.name}}</p>
          </router-link>

        </div>
      </div>
    </div>
    <!--榜单-->
    <bangdan></bangdan>
    <div class="kong"></div>
    <!--导航-->
    <indexBar></indexBar>
  </div>
</template>

<script>
   import bangdan from "./bangdan.vue"
   import indexBar from "./indexBar.vue"
   import indexHeader from "./indexHeader.vue"
    export default {
      name: 'hole',
      components:{
        bangdan:bangdan,
        indexBar:indexBar,
        indexHeader:indexHeader
      },
      data:function(){
        return {
          bannerImg:[],
          titleList:[],
          dot1:"dotSe",
          dot2:"dotActive",
          allBannerImg:[]

        }
      },
      methods:{
        toggle:function(index){
          if(index==1){
            this.bannerImg = this.allBannerImg[index];
            this.dot1 = "dotActive";
            this.dot2 = "dotSe"
          }else{
            this.bannerImg = this.allBannerImg[0];
            this.dot1 = "dotSe";
            this.dot2 = "dotActive"
          }
        },
//        linkTo:function(index){
//          window.location.href="/#/hlist/hcake/"+index;
//        },
        test:function(){
          console.log("jjjd")
          if(index==1){
            this.bannerImg = this.allBannerImg[index];
            this.dot1 = "dotActive";
            this.dot2 = "dotSe"
          }else{
            this.bannerImg = this.allBannerImg[0];
            this.dot1 = "dotSe";
            this.dot2 = "dotActive"
          }
          setInterval(test,4000)
        }

      },
      created: function () {
        this.$http.get("http://n1r8399389.51mypc.cn:25274/index").then(function (res) {
          this.titleList = res.body.titleList;
          this.allBannerImg = res.body.swiper;
          this.bannerImg = res.body.swiper[0];
//          console.log(this.bannerImg)

        })
      }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  /*轮播图*/
  .banner{
    position: relative;
    border-bottom: 10px solid #ececec
  }
  .banner img{
    width: 100%;
    height: auto;
  }
  .banner span{
    width: 10px;
    height: 10px;
  }
  .dot{
    position: absolute;
    width: 100%;
    bottom:5%
  }
  .dot span{
    display: inline-block;
    margin: 0 1%;
  }
  .dotSe{
    background-color: #000000;
    width: 5px;
    height: 5px;
    transform: rotate(45deg);
  }
  .dotActive{
    width: 10px;
    height: 10px;
    border-radius:9px ;
    background: #ececec;
  }
  /*下方分类列表*/
  .titleLIst{
    display: flex;
  }
  .titleLIst>div{
    margin: 0;
    padding: 5%;
    flex-basis: 20%;

  }
  .titleLIst>div p{
   font-size: 12px;

  }
  .titleLIst>div img{
    width: 100%;
  }
  .kong{
    height: 100px;
  }
</style>
