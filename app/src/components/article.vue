<template>
<!--外层的div-->
<div class = "contant">
  <navigation one="小幸运small" isShow="hidden"></navigation>
  <div v-for="item in articles">
    <router-link :to="{path:'/articleContent/'+ item.articleId}"  >
      <p class = "radius">{{item.articleDate}}</p>
      <div class = "session radius">
        <p class = "bigFont">【幸运志】{{item.articleTitle}}</p>
        <p class="grey ">{{item.articleDate}}</p>
        <img :src="item.articleImg" alt="内容图">
        <p class="grey ">小幸运会员杂志</p>
        <div class = "read">
          <p class = "font18">阅读全文</p>
          <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
        </div>

      </div>
    </router-link>

  </div>
  <indexBar></indexBar>

</div>

</template>

<script>
  import navigation from "./adress1.vue"
  import indexBar from "./indexBar.vue"
export default {
  name: 'article',
  data: function () {
    return {
      articles:[]
    }
  },
  components: {
    navigation: navigation,
    indexBar:indexBar
  },
  created: function () {

    this.$http.get("http://n1r8399389.51mypc.cn:25274/ryy").then(function (res) {

      this.articles = res.body.article;

    })

  }
}
</script>
<style scoped>
p{
    margin:0;
}
.contant{
  width: 100%;
  font-weight: normal;
}
.contant>div>a>p{
    display: inline-block;
    background-color: #C6C6C6;
    padding:1% 2%;
    margin-top:5%;
}
.session{
    text-align: left;
     border: 1px solid #C6C6C6;
     margin:20px;
     padding:20px;
}
.bigFont{
    font-size: 22px;
}
.font18{
    font-size: 18px;
}
.grey{
    color: gray;
    font-size: 16px;
    padding: 10px 0;
}

.read{
    display: flex;
    padding:10px 0;
    line-height: 1.5em;
    justify-content: space-between;
    border-top: 1px solid #C6C6C6;
}
.read i{
  color: gray;
  font-size: 1.5em;
}
.radius{
    border-radius: 5px;
}
.session>img{
  width: 100%;
}


</style>
