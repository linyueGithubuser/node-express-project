<template>
    <div class="indexBar">
        <ul>
          <li>
            <router-link to="/"  activeClass="active">
              <i class="fa fa-home" aria-hidden="true"></i>
              <p>首页</p>
            </router-link>
          </li>
          <li>
            <router-link  to="/hlist/hcake/1"  activeClass="active">
              <i class="fa fa-th-large" aria-hidden="true"></i>
              <p>分类列表</p>
            </router-link>
          </li>
          <li>
            <router-link to="/article"  activeClass="active">
              <i class="fa fa-commenting-o fa-2x" aria-hidden="true"></i>
              <p>社区</p>
            </router-link>
          </li>
          <li>
            <router-link to="/userCenter"  activeClass="active">
              <i class="fa fa-user-o" aria-hidden="true"></i>
              <p>我</p>
            </router-link>
          </li>
        </ul>
      <router-view></router-view>

    </div>
</template>
<script>
    export default{
      name: 'indexBar'
    }

</script>
<style scoped>
  .active {
    color: #8B4513;
  }

  .indexBar{
    position: fixed;
    bottom:0;
    width:100%;
    padding: 1% 0;
    background-color: white;

  }
  .indexBar p{
    font-size: 12px;
  }
  ul{
    padding: 0;
    margin: 0;
    font-size: 1.1em;
    list-style: none;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  ul>li{
    font-size: 1.5em;
    float: left;
  }
  a{
    text-decoration: none;
    color: #7f7f7f;
  }
  i{
    /*position: absolute;*/
    top: 10%;
    font-size: 1em;
    margin: 3% 0;
  }
  p{
    margin:0;
  }
</style>
