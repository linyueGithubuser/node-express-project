<template>
    <div>
      <adress1 one="添加地址" save="添加" saveShow="hidden"></adress1>
    </div>
</template>
<script>
  import adress1 from './adress1'
    export default{
      name:'adress',
      components:{
        adress1:adress1
      },
      methods:{
        back: function () {
           history.back()
        }
      }
    }
</script>
<style scoped>

</style>
