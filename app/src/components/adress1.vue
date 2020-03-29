<template>
  <div class="nav">
    <i class="fa fa-chevron-left" aria-hidden="true" @click="backPage"></i>
    <span>{{one}}</span>
    <span :class="isShow">{{save}}</span>
  </div>
</template>
<script>
  export default{
    name:'adress1',
    methods:{
      backPage:function(){
        history.back()
      }
    },
    props:['one',"isShow","save"]
  }
</script>
<style scoped>
  *{
    font-size: 1.125em;
  }
  .nav{
    align-items: baseline;
    background-color: white;
    display: flex;
    padding: 3% 2%;
    position: relative;
    text-align: center;
  }
  .nav span:nth-of-type(2){
    position: absolute;
    right: 3%;
  }
  span{
    flex-basis: 90%;
  }
  .hidden{
    display: none;
  }
  span:nth-child(3){
    color: #6F6F6F;
    height: 30px;
    width: 80px;
  }
</style>
