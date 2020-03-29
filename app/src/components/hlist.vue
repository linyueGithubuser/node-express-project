<template>
  <div>
    <indexHeader isShow="false"></indexHeader>
    <ul>
        <li  v-for="item in titlelist">
          <router-link :to="{ path:'/hlist/hcake/'+item.titleid}" activeClass="myactive">{{item.titlename}}</router-link>
        </li>

    </ul>

    <router-view></router-view>


  </div>
</template>
<script>
  import indexHeader from "./indexHeader.vue"
  export default{
    name:'hlist',
    components:{
      indexHeader:indexHeader
    },
    data:function(){
      return {
        titlelist:[
          {
          titleid:1,
          titlename:"蛋糕"
        },{
          titleid:2,
          titlename:"冰淇淋"
        },{
          titleid:3,
          titlename:"下午茶"
        },{
          titleid:4,
          titlename:"企业定制"
        }
        ],

        myactive:'myactive'

      }
    }
  }



</script>
<style scoped>

  ul{
    margin: 0;
    font-size:14px;
    display: flex;
    padding: 10px 0 0px 10px;
    justify-content: space-around;
    border-bottom: 1px solid #D5D5D5;
  }
  li{
    list-style: none;
  }
  a{
    color:#828282;
    display: inline-block;
    text-decoration: none;
    padding:0 6px 10px 6px;

  }
  .myactive{
    color:#202020;
    border-bottom:2px solid #202020;
  }

</style>
