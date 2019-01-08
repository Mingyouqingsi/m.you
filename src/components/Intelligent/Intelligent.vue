<template>
<div >
  <div class="box">
    <div>
      <div v-for="(item,index) in intellList" :key="index" style="margin-left: 30px">
        <div v-if="item.style===2">
          <div class="topname">
            <img :src="item.avatar" alt="" class="topimg" >
            <span>{{item.nickname}}</span>
          </div>
          <div class="middlename">{{item.title}}</div>
          <div class="bottomname">{{item.subTitle}}</div>
          <img :src="item.picUrl" alt="" class="bottomimg" >
        </div>
        <div v-if="item.style===1">
          <div class="topname">
            <img :src="item.avatar" alt="" class="topimg" >
            <span>{{item.nickname}}</span>
          </div>
          <div class="bottomnames">{{item.title}}</div>
          <img :src="item.picUrl" alt="" class="bottomimgs" >
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data() {
      return {
        cateindex: 0,
        page:1
      }
    },
    mounted (){

      this.$store.dispatch('getintellList',{page:this.page,size:5,tabId:4});
      this.intail();
    },
    computed : {
      ...mapState(['intellList'])
    },
    methods:{
      intail(){
        if(!this.bscroll){
          this.bscroll = new BScroll('.box',{
            click:true,
            pullUpLoad:{
              threshold:1000
            }
          })
        }else {
          this.bscroll.on('pullingUp',()=>{

            this.$store.dispatch('getintellList',{page:this.page++,size:5,tabId:4})
            this.bscroll.finishPullUp()
          }) ;

          this.bscroll.refresh()
        }
      },
    },
    watch:{

      intellList(){
        this.$nextTick(()=>{
          this.intail()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.box
  padding-top 400px
  position absolute
  left 0
  top 260px
  height 100px
  .topname
    width 700px
    height 100px
    display flex
    margin-top 20px
    margin-left 20px
    .topimg
      width 100px
      height 100px
      border-radius 50%

    span
      font-size 28px
      color #000000
      margin-top 35px
      margin-left 20px


  .middlename
    width 500px
    height 120px
    color #000000
    font-size 52px
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-line-clamp 2
    -webkit-box-orient vertical
  .bottomname
    width 600px
    height 80px
    line-height 80px
    font-size 40px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    color #7f7f7f
  .bottomimg
    width 300px
    height 300px
    border-radius 40px
  .bottomnames
    width 700px
    height 100px
    font-size 40px
    color #333
    margin 5px 5px
  .bottomimgs
    width 700px
    height 400px
</style>

