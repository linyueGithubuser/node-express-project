<template>
  <div class="commonText">
    <div class="title">
      <h3>发票信息</h3>
    </div>
    <div class="Text mleft">
      <div class="inputvoice">
        <input type="radio" id="1" value="1" v-model="packed" checked="checked"/>
        <label for="1">个人</label>
      </div>
      <div class="inputvoice">
        <input type="radio" id="2" value="2" v-model="packed"/>
        <label for="2">公司</label>
      </div>

    </div>
    <div class="Text mleft">
      <div class="voiceTitle">
        <h3>发票抬头</h3>
      </div>
      <div class="inputKK">
        <input type="text" v-model="inputText" placeholder="个人（不可修改）"/>
      </div>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'InvoiceCommon',
    data: function () {
      return {
        packed: 1,
        inputText: ''
      }
    }
  }
</script>

<style scoped>
  .commonText {
    background-color: white;
  }

  .title {
    padding: 1em 0;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  .title h3 {
    margin-left: 10%;
    font-size: 1.2em;
    flex-basis: 30%;
    width: 100%;
  }

  .Text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 2em;
    padding: 1em 0;
    border-bottom: 1px solid #ccc;
  }

  .voiceTitle, .inputvoice {
    margin-left: 10%;
  }

  .voiceTitle h3 {
    font-size: 0.8em;
  }

  .inputvoice input {
    width: 1.2em;
    height: 1.2em;
  }

  .inputKK {
    flex-basis: 60%;
  }

  .inputKK input {
    width: 100%;
    height: 1.6em;
    margin-left: 20%;
    border: none;
  }


</style>
