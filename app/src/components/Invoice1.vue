<template>
  <div>
    <InvoiceCommon></InvoiceCommon>
    <div class="Text mleft">
      <div class="voiceTitle">
        <h3>手机号</h3>
      </div>
      <div class="inputKK">
        <input type="text" v-model="inputText" placeholder="请输入常用手机号"/>
      </div>
    </div>
    <router-link :to="{path:'/pay',query:{fpStyle:invoce1}}">
      <div class="btn">
        <button :class="{active:isActive,'text-danger':hasError}">确定</button>
      </div>
    </router-link>

    <div class="tip">
      <p>1、电子发票与纸质发票具备同等法律效应，可作为用户维权、保修的有效凭据</p>

      <p>2、请确保开票抬头的准确性，开票成功后无法修改</p>
    </div>
  </div>
</template>
<script>
  import InvoiceCommon from './InvoiceCommon.vue'
  export default{
    name: 'Invoice1',
    data: function () {
      return {
        inputText: '',
        invoce1: '电子发票',
        isActive: false,
        hasError: true
      }
    },
    components: {
      InvoiceCommon: InvoiceCommon
    },
    methods: {}
  }
</script>

<style scoped>


  .mleft {
    margin: 0.5em 0;
  }

  .Text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.6em;
    padding: 1em 0;
    border-bottom: 1px solid #ccc;
    background-color: white;
  }

  .Text h3 {
    flex-basis: 30%;
    width: 100%;
  }

  .voiceTitle {
    margin-left: 10%;
  }

  .voiceTitle h3 {
    font-size: 1em;
  }

  .inputKK {
    flex-basis: 60%;
  }

  .inputKK input {
    width: 100%;
    height: 3em;
    margin-left: 20%;
    border: none;
  }

  .btn {
    width: 90%;
    height: 4em;
    margin-left: 5%;

  }

  .btn button {
    width: 100%;
    height: 100%;
    font-size: 1.6em;
    color: white;
    border-radius: 0.2em;
  }

  .active {
    background-color: black;
  }

  .text-danger {
    background-color: #ccc;
  }

  p {
    font-size: 1.2em;
    margin-top: 1em;
  }

</style>
