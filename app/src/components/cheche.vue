<template>
  <router-link to="/shopCart" @click="hideche">
    <div class="chebox">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <span v-if="totallnums>0">{{totallnums}}</span>
    </div>
  </router-link>

</template>
<script>
    export default{
      name:'mygwc',
      data(){
        return{

        }
      },
      props: {
        totallnums: {
          type: Number
        }
      },
      methods:{
        hideche(){
          this.$emit('hideche')
        }
      }

    }
</script>
<style>
  .chebox{
    position: fixed;
    bottom: 8%;
    left: 10px;
    background-color: rgba(0,0,0,.5);
    z-index: 48;
    height:48px;
    width: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 63px;
    color: white;

  }
  .chebox i{
    font-size: 2.9em;
  }
  .chebox span{
    display: block;
    text-align: center;
    width:18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
    background-color:#D3321B;
    position: absolute;
    right:0;
    top: 0;
    z-index: 49;
    color:white;
    font-size: 1.2em;
  }
</style>
