<template>
  <div class="box">
    <div class="title">
      <router-link to="/shopCart">
        <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
      </router-link>
      <h5>{{title}}</h5>
      <router-link :to="{path:'/shopCart',query:{birthdayMeg:inputText,birthdayIndex:id}}">
        <p>完成</p>
      </router-link>
    </div>
    <div class="input-text">
      <p>自定义</p>
      <input type="text" maxlength="16" placeholder="最多输入16字符或8个字符" v-model="inputText" style='font-size:1.2em'/>
    </div>
    <ul class="cardList" v-for="(card,index) in cartName">
      <!--<img :src="card.imgSrc" alt="" v-show="{'flag':ind==index}"/>-->
      <li :class="{'active':ind==index}" @click="dothis(index)">{{card.name}}</li>
    </ul>

  </div>
</template>
<script>
  export default{
    name: 'birthdayCard',
    data: function () {

      return {
        title: '生日牌',
        flag: false,
        ind: '',
        inputText: '',
        id: '',
        cartName: [
          {name: "生日快乐", imgSrc: '../../static/images/select.png'},
          {name: "Happy Birthday", imgSrc: '../../static/images/select.png'},
          {name: "节日快乐", imgSrc: '../../static/images/select.png'},
          {name: "（无）", imgSrc: '../../static/images/select.png'}
        ]
      }
    },
    methods: {
      dothis: function (index) {
//        console.log(index);
        this.ind = index;
        this.flag = true;
        console.log(this.cartName[index].name);
        this.inputText = this.cartName[index].name

      }
    },
    mounted: function () {
      console.log(this.$route);
      this.id = this.$route.params.index

    }

  }
</script>

<style scoped>
  .box {
    background-color: rgba(0, 0, 0, .1);
    font-size: 62.5%;
  }

  .active {
    color: red;
  }

  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1em;
  }

  .title i {
    flex-basis: 10%;
  }

  .title h5 {
    flex-basis: 60%;
    font-size: 1.6em;
  }

  .title p {
    height: 3em;
    width: 6em;
    background-color: #000000;
    color: white;
    line-height: 3em;
  }

  .cardList {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.1em solid #ccc;
  }

  .cardList img {
    width: 5%;
    margin-left: 2em;
  }

  .cardList li {
    height: 6em;
    line-height: 6em;
    flex-basis: 45%;
    text-align: left;
    font-size: 1.4em;

  }

  .input-text {
    display: flex;
    justify-content: space-around;
    background-color: white;
    margin: 1em 0;
    align-items: center;
  }

  .input-text input {
    flex-basis: 70%;
    height: 4em;
    border: none;
  }


</style>
