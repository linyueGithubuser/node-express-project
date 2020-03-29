<template>
  <div class="content">
    <navigation one="树洞专区" isShow="hidden" ></navigation>
    <div class="test">
      <div class="header">
        <img src="../assets/contentBg.jpg" alt="">
        <p>Who is No.1&No.21</p>
        <p>成为该区的MVP，推你上首页</p>
      </div>
      <div class="session">
        <div class="edit " v-on:click="showPen">
          <p class="headerImg">
            <img src="../../static/images/logo.png" alt="">
            <span>匿名</span>
          </p>
          <p class="Primaryfont">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <span>说点吧!!</span>
          </p>
        </div>
        <div class="commentaries" v-for="item in commentaries">
          <p class="headerImg">
            <img :src="item.talkHeaderImg" alt="">
            <span>{{item.talkName}}</span>
          </p>
          <p class="Primaryfont">{{item.talkContent}}</p>
          <p class="subtitle" v-on:click="thumbup(item.talkId)" >
            <i class="fa fa-thumbs-up" aria-hidden="true" v-bind:class="{active: item.isActive}"></i>
            <span>{{item.count}}</span>
          </p>
        </div>
      </div>
      <!--文本域-->
      <div class="moTalk" v-if="show">
        <div class="talk">
          <textarea  placeholder="有话说。。" maxlength="50" @input="descInput" v-model="desc"></textarea>
          <!--<textarea name="" id=""  ></textarea>-->
          <div>
            <span class="Lightgrey">{{num}}</span>
            <button  @click="publish">发表</button>
          </div>
        </div>
        <div class="close" v-on:click.stop="showTalk"></div>
      </div>
      <!--右侧笔-->
      <div class="rightPen" v-if="penShow" v-on:click="showPen">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
      <!--当没有输入内容时-->
      <div class="m-modal" v-show="visible">
        <p >请填写发表内容！</p>
      </div>
    </div>
  </div>


</template>

<script>


  import navigation from "./adress1.vue"


export default {
  name: 'hole',
  components: {
    navigation: navigation,
  },
  data: function () {
    return {
      show:false,
      penShow:true,
      commentaries:[],
      num:50,
      desc:"",
      visible:false,
      text:{}
    }
  },
  methods: {
//    隐藏笔显示外层
    showPen: function () {
      this.show = true;
      this.penShow = false;

    },
//    隐藏外层显示笔
    showTalk: function () {
      this.penShow = true;
      this.show = false;

    },
//    点赞功能
    thumbup: function (index) {
      this.commentaries[index-1].count+=1;
      this.commentaries[index-1].isActive = true;

    },
//    剩余字数
    descInput(){
      var txtVal = this.desc.length;
      this.num = 50 - txtVal;

    },
//    提交按钮
    publish(){
      var txtVal = this.desc.length;
      if(txtVal == 0){
        var _this=this;
        var testw = this.visible = true;
        setTimeout( function test(){
            testw = false;
           _this.visible=testw;
        },1000);
      }else{
        this.text.talkConten = this.desc;
        this.desc='';
        this.show = false;
      }
    }
  },
  created: function () {
    this.$http.get("http://n1r8399389.51mypc.cn:25274/ryy").then(function (res) {
      var com = res.body.commentaries;
      var comment=[];
      for(var i=0;i<com.length;i++){
        comment[i]=com[com.length-1-i];
        this.$set(this.commentaries,i,comment[i]);
      }

    })

  }
}

</script>

<style scoped>
  .content{
    width: 100%;
  }
  .header img{
    width: 100%;
  }
  .header{
    text-align: left;
    border-bottom: 10px solid #ececec;
    color: #AD814B;
  }
  .header p{
    width: 90%;
    margin: 1% auto 2%;
  }
  .header>p:nth-of-type(2){
    font-size: 14px;
  }
  .session{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5% 0;
    flex-wrap: wrap;
    color: white;
    text-align: left;
    position:relative;
  }

  .edit{
    width: 41.5%;
    text-align: center;
    color: #AD814B;
    border:1px dashed #c9c9c9;
  }
  .edit p:nth-of-type(2){
    margin-top: 20%;
    line-height: 100%;
  }
  .commentaries{
    width: 40%;
    background-color: #a8c0c7;
    border: 5px solid white;
    height: 100%;
  }
  .edit,.commentaries{
    margin: 1.5%;
    padding:0 2% ;
    box-shadow: 1px 1px 10px #888888;
  }
  .headerImg img{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 2%;
    border: 1px solid darkgray;
  }
  .headerImg{
    display: flex;
    line-height:30px ;
  }
  .active{
    color: #000066;
  }
  /*文本域样式*/
  .moTalk{
    margin-top: 6%;
    position: fixed;
    width: 100%;
    top:0;
    bottom:0 ;
    height: 100%;
    background-color: rgba(29, 29, 29, 0.14);
  }
  .talk{
    width: 100%;
    display: inline-block;
    background-color: white;
  }
  textarea{
    width: 90%;
    margin: 2% auto;
    border:none;
    height:100px;
  }
  textarea:focus {
    outline: none;
  }
  textarea::-webkit-input-placeholder{
    color:#724228 ;
  }
  .talk div{
    display: flex;
    width: 90%;
    margin: 5% auto;
    justify-content: space-between;
  }
  .talk div>button{
    color: white;
    padding:1% 2.5%;
    border: none;
    border-radius: 20px;
    background-color: #724228;
  }
  .close{
    height: 100%;
  }
  /*右侧笔*/
  .rightPen{
    color: white;
    background:#000;
    filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
    font-size: 3em;
    display: inline-block;
    padding: 1% 2%;
    border-radius: 50%;
    position: fixed;
    right: 0;
    bottom: 10%;
  }
  /*模态框*/
  .m-modal{
    position: fixed;
    height: 100%;
    width: 100%;
    border: 1px solid darkcyan;
    background: rgba(0, 0, 0, 0.74);
    top:0;
  }
  .m-modal p{
    width: 50%;
    padding: 3% 0;
    background: white;
    margin-top: 60%;
    display: inline-block;
  }
  .test{
    position: relative;
  }
</style>
