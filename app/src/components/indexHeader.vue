<template>
    <div>
      <img src="../../static/images/logo.png" alt="">
      <div class="map" v-show="isShow">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <span>成都</span>
      </div>
    </div>
</template>
<script>
    export default{
      name:'indexHeader',
      pops:["isShow"],
      data:function(){
        return{
          isShow:''
        }
      }
    }
</script>
<style scoped>
  div{
    border: none;
    padding: 2%;
    position: relative;
  }
  div>img{
    width: 20%;
  }
  .map{
    position: absolute;
    right: 3%;
    top: 10%;
  }
</style>
