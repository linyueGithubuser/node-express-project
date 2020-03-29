<template>
    <div>
      <hlist class="hlist"></hlist>
    </div>
</template>
<script>
  import hlist from "./hlist.vue"
    export default{
      name:'list',
      components:{
        hlist:hlist
      }
    }
</script>
<style scoped>
  .hlist{
    /*position: absolute;*/
    /*top: -100px;*/
  }
</style>
