<template>
  <div>
    <!--<router-link to="/pay">-->
      <router-link :to="{path:'/pay',query:{fpStyle:invoce1}}">
      <div class="btn">
        <button>确定</button>
      </div>
    </router-link>
  </div>

</template>
<script>
  export default{
    name: 'Invoice3',
    data:function(){
      return{
        invoce1: '不开发票'
      }

    }
  }
</script>

<style scoped>

  .btn {
    width: 90%;
    height: 4em;
    margin-left: 5%;
  }

  .btn button {
    width: 100%;
    height: 100%;
    background-color: black;
    font-size: 1.6em;
    color: white;
    border-radius: 0.2em;
    border: none;
  }


</style>
