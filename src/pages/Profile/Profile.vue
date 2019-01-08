<template>
<div>
  <div class="watchesheader">
    <i class="iconfont icon-tubiaozhizuomoban watchhouse" @click="goB('/main/recommend')"></i>
    <img src="../Profile/Maps/29.png" alt="" class="Pimg">
    <i class="iconfont icon-sousuo1 watchhouse" ></i>
    <i class="iconfont icon-gouwuche watchhouse" @click="goC('/shopcar')"></i>
  </div>
  <div class="alog">
    <img src="../Profile/Maps/30.png" alt="">
  </div>
  <div class="btnwrap">
    <mt-button type="danger" class="carbtn">登录</mt-button>
    <mt-button type="default" class="Carbtn">邮箱账号登录</mt-button>
    <span>手机号快捷注册></span>
  </div>
</div>
</template>

<script>
  export default{
    methods: {
      goB (path){
        this.$router.replace(path)
      },
      goC (path){
        this.$router.replace(path)
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .watchesheader
    width 100%
    height 120px
    display flex
    line-height 120px
    border-bottom 1px solid gray
    background #ffffff
    z-index 10
    .watchhouse
      font-size 65px
      margin-left 30px
    .Pimg
      width 200px
      height 60px
      margin-top 30px
      margin-left 200px

  .alog
    width 100%
    height 400px
    position relative
    img
      width 300px
      height 100px
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
  .btnwrap
    width 100%
    height 400px
    position relative
  .carbtn
    width 600px
    height 80px
    font-size 32px
    margin-left 70px
  .Carbtn
    width 600px
    height 80px
    font-size 32px
    margin-top 40px
    margin-left 70px
    border 1px solid #b4282d
  span
    position absolute
    bottom 160px
    left 260px
    font-size 28px
</style>

