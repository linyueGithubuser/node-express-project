<template>
  <div class="box">
    <div class="title pad">
      <router-link to="/pay">
        <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
      </router-link>

      <h5> 收货地址</h5>
    </div>
    <div class="addressText pad" v-for="(item,index) in address">

      <input type="radio" :value="index" v-model="picked" checked="checked"/>

      <router-link :to="{path:'/pay',query:{userName:item.userName,Phone:item.useIphone,Address:item.userAds}}">
        <div class="userMessage">
          <p>{{item.userName}} <span>{{item.useIphone}}</span></p>

          <p>{{item.userAds}}</p>

          <p>收货时间不限</p>
        </div>
      </router-link>


      <router-link
        :to="{path:'/Edit',query:{editId:picked,userName:userName,useIphone:useIphone,userAds:userAds}}">
        <p @click="edit">编辑</p>
      </router-link>

    </div>
    <!--<span>{{picked}}</span>-->

    <router-link to="/Edit">
      <div class="btn pad">
        <p>+ 新增地址</p>
      </div>
    </router-link>


  </div>
</template>
<script>
  export default{
    name: 'address',
    data: function () {
      return {
        editId: '',
        userName: '',
        useIphone: '',
        userAds: '',
        picked: 0,
        address: [
          {id: '1', userName: '张三', useIphone: '13666666666', userAds: '四川省成都市高新区云华路333号'},
          {id: '2', userName: '李四', useIphone: '13688888888', userAds: '四川省成都市武侯区富贵路666号'},
          {id: '3', userName: '王五', useIphone: '13699999999', userAds: '四川省成都市华阳南华路11333号'}
        ]
      }
    },
    mounted: function () {
      console.log(this.$route);
      for (var i = 0; i < this.address.length; i++) {
//        console.log(this.address);
//        this.editId = this.$route.query.editidNmae;

        this.address[this.$route.query.editidNmae].userName = this.$route.query.editName;
        this.address[this.$route.query.editidNmae].useIphone = this.$route.query.editIpone;
        this.address[this.$route.query.editidNmae].userAds = this.$route.query.editAdd;

      }

    },
    methods: {
      edit: function () {
        for (var i = 0; i < this.address.length; i++) {
          this.userName = this.address[this.picked].userName;
          this.useIphone = this.address[this.picked].useIphone;
          this.userAds = this.address[this.picked].userAds;
        }
      }
    }
  }
</script>

<style scoped>
  .box {
    font-size: 62.5%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .pad {
    padding: 1em 0;
  }

  .title h5 {
    flex-basis: 70%;
  }

  .addressText {
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: left;

  }

  .userMessage {
    flex-basis: 60%;
  }

  h5 {
    font-size: 1.6em;
  }

  p {
    font-size: 1.4em;
  }

  input {
    width: 1.6em;
    height: 1.6em;
  }

  .btn {
    width: 40%;
    border: 0.1em solid rgba(0, 0, 0, .3);
    box-shadow: 0.1em 0.2em 0.3em #ccc;
    border-radius: 0.3em;
    margin-left: 30%;
    margin-top: 5em;

  }
</style>
