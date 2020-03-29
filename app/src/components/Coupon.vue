<template>
  <div class="box">
    <div v-for="(img,index) in couponList">
      <div class="selectInput">
        <input type="checkbox" id="checkbox" value="img.money" v-model="checkedCoupon[index]">
        <!--<label for="checkbox">{{ checked }}</label>-->
        <img :src="img.imgSrc" alt=""/>
        <!--<span>{{checkedCoupon}}</span>-->
      </div>
    </div>
    <div class="btn-ok">
      <router-link :to="{path:'/shopCart',query:{money:couponMoney}}">
      <button @click="selectDo">确定</button>
      </router-link>
    </div>

  </div>
</template>
<script>
  export default{
    name: "Coupon",
    data: function () {
      return {
        checkedCoupon:[],
        couponMoney:'',
        couponList: [
          {id: '1', money: '10', imgSrc: 'static/images/yhj1.png'},
          {id: '2', money: '20', imgSrc: 'static/images/yhj2.png'}
        ]
      }
    },


    methods: {

      selectDo: function () {

        for (var i = 0; i < this.couponList.length; i++) {
          if (this.checkedCoupon[i]) {
//            console.log(1);
//            console.log(this.couponList[i].money);
            this.couponMoney=this.couponList[i].money;
            this.checkedCoupon[i]=false;
          }

    }

  }

    }
  }
</script>

<style scoped>

  img {
    margin-top: 10%;
    width: 80%
  }

  .selectInput {
    display: flex;
    align-items: center;
  }

  .selectInput input {
    width: 2em;
    height: 2em;
    flex-basis: 15%;
  }

  .btn-ok {
    position: fixed;
    bottom: 0;
    /*background-color: #ccc;*/
    width: 100%;
    height: 3em;
  }

  .btn-ok button {
    background-color: #000000;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1.4em;
    /*letter-spacing: 2em;*/
  }
</style>
