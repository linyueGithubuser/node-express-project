<template>
  <div>
    <navv one="我的订单"></navv>
      <ul class="nav">
        <li>
          <router-link to="/order/allOrder" activeClass="liBorder">
              <span>
                全部
              </span>
          </router-link>
        </li>
        <li>
          <router-link to="/order/unDoneOrder" activeClass="liBorder">
            <span>
              未完成
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/order/doneOrder" activeClass="liBorder" >
            <span>
              已完成
            </span>
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
  </div>
</template>
<script>
  import adress1 from './adress1'
  export default{
    name: "order",
    components:{
      navv: adress1
    },
    data:function(){
      return{
        liBorder: 'liBorder',
        itemList:[]
      }
    },
    methods:{

    }
  }


</script>
<style scoped>

  *{
    list-style: none;
    text-decoration: none;
  }
  ul.nav{
    display: flex;
  }
  .nav>li{
    font-size: 18px;
    flex-basis: 33.333%;
    height: 50px;
    line-height: 50px;
    background: #FEFEFE;
  }
  .nav span{
    color: #838383;
    display: inline-block;
    width:100%;
    height: 50px;
  }
  .liBorder{
    border-bottom: 5px solid #0D0D0D;
  }
</style>
