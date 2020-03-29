<template>
    <div class="contant">
      <navigation one="小幸运官网" isShow="hidden"></navigation>
      <div v-for="item in imgSrc">
        <img :src="item" alt="">
      </div>
    </div>
</template>

<script>
  import navigation from "./adress1.vue"
    export default {
        name: 'articleContent',
        data: function () {
          return {
            imgSrc: []
          }
        },
      components: {
        navigation: navigation
      },
      mounted () {
//        console.log(this.$route)  // 路由相关信息

        // this.$route.path 路径
//      this.title = this.$route.query.title
//      this.imgsrc = this.$route.query.imgsrc
        // this.$route.params.id
//        this.$http.jsonp('https://api.douban.com/v2/movie/subject/' + this.$route.params.id).then(function (res) {
//          console.log(res)
//          this.title = res.body.title
//          this.summary = res.body.summary
//          this.imgsrc = res.body.images.large
//        })
      },
      created: function () {
        var index=this.$route.params.articleId;
        this.$http.get("http://n1r8399389.51mypc.cn:25274/ryy").then(function (res) {

          this.imgSrc = res.body.article[index-1].child.imgSrc;
        })

      }

    }
</script>

<style scoped>
  .contant{
    width: 100%;
    font-weight: normal;
  }
img{
  width: 100%;
}
</style>
