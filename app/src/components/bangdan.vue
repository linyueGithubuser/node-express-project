<template>
    <div>
      <div class="partOne">
        <p>小幸运·榜单</p>
        <div class="partTwo two">
          <img src="../../static/images/top-list1.png" alt="">
          <img src="../../static/images/scene.png" alt="">
        </div>
      </div>
      <div class="partOne">
        <p>小幸运·新品</p>
        <div class="partTwo one">
          <img src="../../static/images/theme-top.png" alt="">
          <img src="../../static/images/theme-list.png" alt="">
          <img src="../../static/images/theme-list1.png" alt="">
          <img src="../../static/images/home-cake.png" alt="">
        </div>
      </div>
      <div class="partOne">
        <p>小幸运·中秋节</p>
        <div class="partTwo one">
          <img src="../../static/images/theme-top.png" alt="">
          <img src="../../static/images/cake5.jpg" alt="">
          <img src="../../static/images/cake6.jpg" alt="">
          <img src="../../static/images/cake7.jpg" alt="">
        </div>
      </div>
      <div class="partOne">
        <p>小幸运·活动</p>
        <div class="partTwo">
          <img id="play" src="../../static/images/banner1.png" alt="">
        </div>
        </div>
      <div class="partOne">
        <div class="partTwo">
          <img id="play1" src="../../static/images/activity.png" alt="">
        </div>
      </div>
      <div class="partOne">
        <div class="partTwo">
          <img id="play2" src="../../static/images/banner2.png" alt="">
        </div>
      </div>
    </div>
</template>
<script>
    export default{
      name:'bangdan'
//      data(){
//
//      }
    }
</script>
<style scoped>
  .partOne{
    margin-top: 10px;
    padding-bottom: 3%;
  }
  .partOne>p{
    display: inline-block;
    margin: 10px 0;
    font-size: 1.5em;
  }
  .partTwo{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 2%;
  }
  .two>img{
    height: 100px
  }
  img{
    height: 120px;
    width: 48%;
    border-radius: 3px;
  }
  .one>img:nth-child(1){
    width: 100%;
  }
  .one>img:not(:nth-child(1)){
   width: 32%;
    border-radius: 0;
    margin-top: 5px;
  }
  img#play{
    width: 85%;
    height: 150px;
  }
  img#play1,img#play2{
    width: 100%;
  }
</style>
