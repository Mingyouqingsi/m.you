<template>
  <div>
  <div class="mainhead">
  <a href="javascript:;" class="alogo">
    <img src="../../common/images/download.png" alt="">
  </a>
  <div class="topsearch">
    <i class="iconfont icon-sousuo"></i>
    <span class="placeholder">搜索商品，共19966件好物</span>
  </div>
  <div class="loginbtn">登录</div>
</div>
  <div class="wrapper">
    <div class="maintoplist">
      <div class="tab active">
        <span class="txt">推荐</span>
      </div>
      <div class="tab">
        <span class="txt">居家</span>
      </div>
      <div class="tab">
        <span class="txt">鞋包配饰</span>
      </div>
      <div class="tab">
        <span class="txt">服饰</span>
      </div>
      <div class="tab">
        <span class="txt">电器</span>
      </div>
      <div class="tab ">
        <span class="txt">洗护</span>
      </div>
      <div class="tab ">
        <span class="txt">饮食</span>
      </div>
      <div class="tab">
        <span class="txt">餐厨</span>
      </div>
      <div class="tab ">
        <span class="txt">婴童</span>
      </div>
      <div class="tab">
        <span class="txt">文体</span>
      </div>
      <div class="tab">
        <span class="txt">特色区</span>
      </div>

    </div>
  </div>

    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    mounted (){
      new BScroll('.wrapper',{
        scrollX: true,
        click: false
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .mainhead
    width 100%
    height 88px
    display flex
    position fixed
    z-index 12
    background #ffffff
    margin-top -148px
    .alogo
      width 138px
      height 40px
      display inline-block
      margin-top 24px
      margin-left 36px
    .topsearch
      width 442px
      height 56px
      display flex
      background #ededed
      justify-content center
      font-size 30px
      border-radius 10px
      margin-top 15px
      line-height 56px
      margin-left 10px
    .placeholder
      color #666
    .iconfont
      font-size 30px
      color #666
    .loginbtn
      width 74px
      height 40px
      line-height 40px
      text-align center
      color #b4282d
      border 1px solid #b4282d
      border-radius 10px
      margin-top 22px
      margin-left 22px



  .maintoplist
    width 100%
    height 60px
    display flex
    background #fff
    flex-flow row nowrap
    margin-top -60px
    position fixed
    z-index 10
    .tab
      .txt
        display inline-block
        width 120px
        height 55px
        line-height 55px
        text-align center
        color #000
        font-size 28px
      &.active
        .txt
          color #b4282d
          border-bottom 5px solid #b4282d



</style>

