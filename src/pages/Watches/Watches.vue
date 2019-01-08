<template>
<div>
  <div class="watchesheader">
    <i class="iconfont icon-tubiaozhizuomoban watchhouse"></i>
    <a  class="watchitem " :class="{active:$route.path==='/watches'}">发现</a>
    <a  class="watchitem"  :class="{active:$route.path==='/watching'}" @click="goInTo('/watching')">甄选家</a>
    <i class="iconfont icon-sousuo1 watchhouse" ></i>
    <i class="iconfont icon-gouwuche watchhouse"></i>
  </div>
  <ul class="tablist">
      <li v-for="(item, index) in tabIndex" :key="index" class="onetab" :class="{change:index===cateindex}" @click="updatechange(index)">
        {{item.tabName}}
      </li>
  </ul>
  <Intelligent v-if="cateindex === 1"/>
  <div v-for="(item , index) in tabList" :key="index" v-if="cateindex === 0">
    <div v-for="(arr , index) in item.topics" :key="index">
      <div v-if="arr.style===1">
       <div class="rightT">
         <img :src="arr.avatar" alt="" class="u-name">
         <span class="xuanmei">{{arr.nickname}}</span>
       </div>
       <div class="titles">{{arr.title}}</div>
       <img :src="arr.picUrl" alt="" class="imgsuper">
     </div>
      <div v-if="arr.style===2">
        <div class="rightT">
          <img :src="arr.avatar" alt="" class="u-name">
          <span class="xuanmei">{{arr.nickname}}</span>
        </div>
        <div class="titlesss">{{arr.title}}</div>
        <div class="titlessss">{{arr.subTitle}}</div>
        <img :src="arr.picUrl" alt="" class="imgsupers">
      </div>
    </div>
  </div>

</div>
</template>

<script>
  import Intelligent from '../../components/Intelligent/Intelligent.vue'
  import {mapState} from 'vuex'
  export default{
    data() {
      return {
        cateindex: 0
      }
    },
    mounted () {
      this.$store.dispatch('getTab')
      this.$store.dispatch('getTabList')
    },
    methods: {
      goInTo (path){
        this.$router.push(path)
      },
      updatechange (index) {
        this.cateindex = index
      }
    },
    computed: {
      ...mapState(['tabIndex', 'tabList'])
    },
    components:{
      Intelligent
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
  position fixed
  background #ffffff
  z-index 10
  margin-top -20px
  .watchhouse
    font-size 65px
    margin-left 30px
  .watchitem
    font-size 40px
    margin-left 100px
  .active
    color #b4282d
    font-size 50px
    font-weight 700
.tablist
  width 100%
  height 100px
  display flex
  border-bottom 1px solid #7F7F7F
  position fixed
  padding-top 100px
  background #ffffff
  z-index 5
  .onetab
    display inline-block
    width 62px
    height 50px
    line-height 50px
    text-align center
    font-size 32px
    color #7F7F7F
    margin 25px  40px
    white-space nowrap
    &.change
      color red



.rightT
  position relative
  width 100%
  height 150px
  line-height 150px
  padding-top: 200px

  .u-name
    width 100px
    height 100px
    border-radius 50%
    margin-left 30px
    margin-top 15px
  .xuanmei
    position absolute
    top 66px
    left 150px
    line-height 25px
    font-size 35px
    display flex
    padding-top: 200px
.titles
    width 100%
    height 200px
    color #000000
    font-size 50px
.titless
  width 700px
  height 100px
  color #000000
  font-size 50px
.titlesss
    width 500px
    height 70px
    font-size 36px
    margin-left 20px
.titlessss
    width 400px
    height 70px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    font-size 32px
    color #7f7f7f
    margin-left 20px
.imgsuper
    width 100%
.imgsupers
    width 270px
    height 270px
    margin-left 20px



</style>

