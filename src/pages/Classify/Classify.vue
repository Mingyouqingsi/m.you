<template>
<div>
  <div class="listheader">
    <div class="topsearch">
      <i class="iconfont icon-sousuo"></i>
      <span class="searchborder">搜索商品, 共20239款好物</span>
    </div>
  </div>
  <ul class="leftlisttab">
    <li v-for="(item,index) in navlist" :key="index" class="listtab" :class="{active:index===cateindex}" @click="updatecateindex(index)">
      {{item.name}}
    </li>
  </ul>
  <div class="right"></div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        cateindex:0
      }
    },
    mounted () {
      this.$store.dispatch('getNavdata')
    },
    methods : {
      updatecateindex(index){
        this.cateindex = index
      }
    },
    computed : {
      ...mapState(['navlist'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.listheader
  width 100%
  height 88px
  background-color #fff
  display flex
  align-items center
  position fixed
  margin-top -88px

  .topsearch
    width 690px
    height 56px
    background #ededed
    display flex
    justify-content center
    margin-left 25px
    line-height 56px

    .iconfont
      display inline-block
      vertical-align: middle
      font-size 32px
      color #666
      margin-right 5px
    .searchborder
      color #666
      font-size 28px

.leftlisttab
  width 162px
  height 1400px
  margin-top 88px
  border-right 1px solid #000
  margin-left -46px
  .listtab
    width 162px
    height 50px
    text-overflow ellipsis
    white-space nowrap
    display block
    color #000000
    overflow hidden
    font-size 32px
    margin-top 30px
    line-height 50px
    text-align center
    &.active
      color red
      border-left 5px solid red

</style>

