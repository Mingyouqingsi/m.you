<template>
<div class="footer-guide">
  <span class="guide-item" :class="{on:$route.path==='/main/recommend'}" @click="goTo('/main/recommend')">
    <span class="item-icon">
      <i class="iconfont icon-tubiaozhizuomoban"></i>
    </span>
    <span>首页</span>
  </span>
  <span  class="guide-item" :class="{on:$route.path==='/classify'}" @click="goTo('/classify')">
    <span class="item-icon">
      <i class="iconfont icon-webicon03"></i>
    </span>
    <span>分类</span>
  </span>
  <span  class="guide-item " :class="{on:$route.path==='/watches'}" @click="goTo('/watches')">
    <span class="item-icon">
      <i class="iconfont icon-ego-box"></i>
    </span>
    <span>识物</span>
  </span>
  <span  class="guide-item " :class="{on:$route.path==='/shopcar'}" @click="goTo('/shopcar')">
    <span class="item-icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
    <span>购物车</span>
  </span>
  <span  class="guide-item " :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
    <span class="item-icon">
      <i class="iconfont icon-wode"></i>
    </span>
    <span>个人</span>
  </span>
</div>
</template>

<script>
  export default{
  methods: {
    goTo (path){
      this.$router.replace(path)
    }
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer-guide
    position fixed
    left 0
    right 0
    bottom 0
    background #fff
    width 100%
    height 98.05px
    display flex
    .guide-item
      display flex
      flex-direction column
      align-items center
      text-align center
      margin-top 5px
      margin-left 80px
      &.on
        color red
    .item-icon
      margin-top 10px
      margin-left 5px
      .iconfont
        font-size 50px


</style>

