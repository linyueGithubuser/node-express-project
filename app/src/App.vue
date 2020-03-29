<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

  @import "../static/icon/css/font-awesome.css";

  template{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    text-align: center;
    color: #2c3e50;
    /*text-align: center;*/
    color: #000;
    font-size: 14px;
  }
  a:-webkit-any-link {
    text-decoration: none;
    color: #000;
  }
  .router-link-active {
    text-decoration: none;
  }
  /*最大号字体*/
  .maxfont{
    font-size: 2em;
  }
  /*一级标题*/
  .Primaryfont{
    font-size:1.5em;
  }

  /*深棕色*/
  .deepcolor{
    color:#724228;
  }
  /*浅棕色*/
  .Lightbrown{
    color: #726c6b;
  }
  /*浅灰色*/
  .Lightgrey{
    color: #d2d2d2;
  }
</style>
