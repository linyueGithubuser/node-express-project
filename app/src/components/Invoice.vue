<template>
  <div class="box">
    <div class="title line">
      <router-link to="/pay">
        <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
      </router-link>
      <h1>发票信息</h1>
    </div>
    <div>
      <h3 class="line payTitle">发票类型</h3>
      <ul class="fp-title bg line">

        <li>
          <router-link to="/Invoice/Invoice1" activeClass="active">电子发票</router-link>
        </li>
        <li>
          <router-link to="/Invoice/Invoice2" activeClass="active">纸质发票</router-link>
        </li>
        <li>
          <router-link to="/Invoice/Invoice3" activeClass="active">不开发票</router-link>
        </li>
      </ul>
    </div>


    <router-view></router-view>
  </div>

</template>
<script>
  export default{
    name: 'Invoice',
    data: function () {
      return {}
    },
    mounted: function () {
      console.log(this.$route)
    }
  }
</script>

<style scoped>
  .active {
    color: #8B4513;
    padding: 0.5em;
    border-radius: 0.2em;
    border: 1px solid #8B4513;
  }

  .box {
    background-color: rgba(0, 0, 0, .1);
    font-size: 62.5%;
  }

  .bg {
    background-color: white;
    margin: 1em 0;
  }

  .line {
    padding: 1em 0;
  }

  li {
    /*border: 2px solid rgba(0, 0, 0, .2);*/
    font-size: 1.4em;
    padding: 0.5em;
    border-radius: 0.2em;
  }

  li:first-of-type {
    margin-left: 2em;
  }

  li:nth-of-type(3) {
    margin-right: 2em;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;

  }

  .title i {
    margin-left: 1em;
    font-size: 2em;
  }

  .title h1 {
    margin-right: 40%;
    font-size: 1.8em;
  }

  .payTitle{
    text-align: left;
    margin-left: 2.8em;
    font-size: 1.4em;
  }

  .fp-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }
</style>
