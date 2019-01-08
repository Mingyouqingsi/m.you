<template>
<div>
  <div class="carheader">
    <span class="carshop">购物车</span>
    <span class="getmoney">领券</span>
  </div>
  <div class="carmiddle">
    <span>30天无忧退货</span>
    <span>48小时快速退款</span>
    <span>满88元免邮费</span>
  </div>
  <div class="carbottom">
    <img src="../Shopcar/Map/28.png" alt="" class="carimg">
    <mt-button type="danger" class="carbtn" @click="goA('/profile')">登录</mt-button>
  </div>

</div>
</template>

<script>
  export default{
    methods: {
      goA(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .carheader
    width 100%
    height 100px
    line-height 100px
    text-align center
    background-color #fff
    .carshop
      display inline-block
      font-size 42px
      color #000000
      margin-left 50px
    .getmoney
      float right
      font-size 32px
      color #B4282D
      margin-right 50px

  .carmiddle
    width 100%
    height 60px
    display flex
    align-items center
    background #f4f4f4
    span
      margin-left 100px
      color #666


  .carbottom
    width 100%
    height 1000px
    position relative
  .carimg
    position absolute
    top 0
    right 0
    left 0
    bottom 0
    margin auto
  .carbtn
    width 600px
    height 80px
    font-size 32px
    position absolute
    left 80px
    bottom 260px

</style>

