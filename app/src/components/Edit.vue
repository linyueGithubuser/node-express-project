<template>
  <div class="box">
    <div class="title">
      <router-link to="/address">
        <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
      </router-link>

      <h5> 收货地址</h5>
      <router-link :to="{path:'/address',query:{editidNmae:id,editName:userName,editIpone:useIphone,editAdd:userAds}}">
        <h5 class="addresscolor"> 保存</h5>
      </router-link>

    </div>
    <div class="editText line">
      <div class="editMessage">
        <p>收货人</p>
        <input type="text" v-model="userName" style="font-size: 1.4em;margin-left:1em"/>
        <img src="../../static/images/delete.png" alt=""/>
      </div>
      <div class="editMessage">
        <p>手机号</p>
        <input type="text" v-model="useIphone" style="font-size:1.4em;margin-left: 1em"/>
        <img src="../../static/images/delete.png" alt=""/>
      </div>
      <div class="editMessage">
        <p>收货时间</p>

        <p>收货时间不限</p>
        <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>
      </div>
    </div>
    <div class="editText line">
      <div class="editMessage">
        <p>地址类型</p>

        <p>其它 </p>
        <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>
      </div>
      <div class="editMessage">
        <p>省份&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <p>四川省 </p>
      </div>
      <div class="editMessage">
        <p>城市&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <p>成都市</p>
      </div>
      <div class="editMessage">
        <p>县/区 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <p>高新区</p>
      </div>
      <div class="editMessage">
        <p>街道 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <p>天府二街</p>
      </div>
      <div class="editMessage">
        <p>详细地址</p>
        <input type="text" v-model="userAds" style="font-size: 1.4em;margin-left:1em"/>


        <img src="../../static/images/delete.png" alt=""/>
      </div>
    </div>
    <router-link :to="{path:'/address'}">
      <div class="btn">
        <button>删除</button>
      </div>
    </router-link>


  </div>

</template>
<script>
  export default{
    name: 'Edit',
    data: function () {
      return {
        userName: '',
        useIphone: '',
        userAds: '',
        id: ''

      }
    },
    mounted: function () {
      console.log(this.$route);
      this.id = this.$route.query.editId;
      this.userName = this.$route.query.userName;
      this.useIphone = this.$route.query.useIphone;
      this.userAds = this.$route.query.userAds;
    },
    methods: {}

  }
</script>

<style scoped>
  .box {
    background-color: rgba(0, 0, 0, .1);
    font-size: 62.5%;
  }

  .line {
    margin: 1em 0;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 1em 0;
  }

  .title i {
    margin-left: 0.6em;
  }

  h5 {
    font-size: 1.6em;
  }

  .addresscolor {
    margin-right: 1em;

  }

  p {
    font-size: 1.4em;
  }

  .editText {
    background-color: white;
  }

  .editMessage {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 1em 0;
  }

  .editMessage img {
    width: 10%;
    text-align: right;
  }

  .editMessage i {

    flex-basis: 22%;
    text-align: right;
  }

  .editMessage p:first-of-type {
    margin-left: 1.2em;
  }

  .editMessage p:nth-of-type(2) {
    flex-basis: 50%;
  }

  .editMessage input {
    flex-basis:66%;
    height: 4em;
    border: none;
  }

  .btn button {
    padding: 1em 0;
    border: none;
    width: 100%;
    font-size: 1.6em;
    background-color: white;
    letter-spacing: 1em;

  }


</style>
