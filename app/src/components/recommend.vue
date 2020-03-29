<template>
  <div class="box">
    <h5 class="line">-- 推荐商品 --</h5>

    <div class="recommendShop">
      <div>
        <img src="../../static/images/ice1.jpg" alt=""/>
        <h6>原味牛乳冰淇淋</h6>
        <span>￥：45.00</span>
      </div>
      <div>
        <img src="../../static/images/ice2.jpg" alt=""/>
        <h6>拿铁冰淇淋</h6>
        <span>￥：45.00</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'recommend'
  }
</script>

<style scoped>
  .box{
    font-size: 62.5%;
  }
  .line {
    margin-top: 1em;
  }

  .recommendShop {
    margin: 1em 0;
    display: flex;
    text-align: left;
    justify-content: center;
  }

  h5 {
    font-size: 1.8em;
    padding-top: 1em;
  }

  h6, span {
    font-size: 1.6em;
  }

  .recommendShop div {
    flex-basis: 50%;
    /*margin-left: 1em;*/
    background-color: white;
    text-align: center;
  }
  .recommendShop div:nth-of-type(2){
    margin-left: 1em;
  }

  .recommendShop img {
    width: 80%;
  }

</style>
