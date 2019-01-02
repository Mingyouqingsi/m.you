<template>
<div class="father">
  <div class="swiper-container ">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/3.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/4.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/5.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/6.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/7.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/8.jpg" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="selfsell">
    <span>
      <i class="iconfont icon-ziyuan"></i>
    </span>
    <span class="text">网易自营品牌</span>
    <span>
      <i class="iconfont icon-ziyuan"></i>
    </span>
    <span class="text">30天无忧退货</span>
    <span>
      <i class="iconfont icon-ziyuan"></i>
    </span>
    <span class="text">48小时快速退款</span>
  </div>
  <div class="mainmiddlelists">
    <div class="middlelists">
      <img src="./image/1.png" alt="">
      <span class="listname">居家</span>
    </div>
    <div class="middlelists">
      <img src="./image/2.png" alt="">
      <span class="listname">鞋包配饰</span>
    </div>
    <div class="middlelists">
      <img src="./image/3.png" alt="">
      <span class="listname">服装</span>
    </div>
    <div class="middlelists">
      <img src="./image/4.png" alt="">
      <span class="listname">电器</span>
    </div>
    <div class="middlelists">
      <img src="./image/5.png" alt="">
      <span class="listname">童婴</span>
    </div>
  </div>
  <div class="mainmiddlelist">
    <div class="middlelist">
      <img src="./image/6.png" alt="">
      <span class="listname  ">饮食</span>
    </div>
    <div class="middlelist">
      <img src="./image/7cc.png" alt="">
      <span class="listname ">洗护</span>
    </div>
    <div  class="middlelist">
      <img src="./image/8.png" alt="">
      <span class="listname  ">餐厨</span>
    </div>
    <div class="middlelist">
      <img src="./image/9.png" alt="">
      <span class="listname">文体</span>
    </div>
    <div class="middlelist">
      <img src="./image/10.png" alt="">
      <span class="listname">特色区</span>
    </div>
  </div>
  <div class="USCEO">
    <img src="./image/11.png" alt="">
  </div>
  <div class="middleshopmodule">
    <div class="middleshopleft">
      <div class="shopmoduletittle">日用家清盘点</div>
      <div class="bottomtittle">年度大扫除攻略</div>
      <img src="./image/12.png" alt="">
      <img src="./image/13.png" alt="">
    </div>
    <div class="middleshopright">
      <div class="shopmoduletittle">新品热销榜</div>
      <div class="bottomtittle">好物抢先体验</div>
      <img src="./image/14.png" alt="">
      <img src="./image/15.png" alt="">
    </div>
    <div class="middleshopbottomleft">
      <div class="shopmoduletittle">实时好评榜</div>
      <div class="bottomtittle">精选优质好物</div>
      <img src="./image/16.png" alt="">
      <img src="./image/17.png" alt="">
    </div>
    <div class="middleshopbottomright">
      <div class="shopmoduletittle">出行住宿必备神器</div>
      <div class="bottomtittle">海外好物买赠</div>
      <img src="./image/18.png" alt="">
      <img src="./image/19.png" alt="">
    </div>
  </div>
  <div class="cutrule"></div>
  <div class="personaltailor">
    <span class="Personaltailor">私人订制</span>
  </div>
  <div class="twoswiper">
    <div class="swiper-container ">
      <div class="swiper-wrapper">
        <div class="swiper-slide personlist">
          <img src="./image/19.png" alt="">
          <span class="Personlist">纤维吸汗毛巾...</span>
          <img src="./image/20.png" alt="">

          <img src="./image/21.png" alt="">
        </div>
        <div class="swiper-slide personlist">
          <img src="./image/22.png" alt="">
          <img src="./image/23.png" alt="">
          <img src="./image/24.png" alt="">
        </div>
        <div class="swiper-slide personlist">
          <img src="./image/22.png" alt="">
          <img src="./image/23.png" alt="">
          <img src="./image/25.png" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>
</template>

<script >
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default{
    mounted(){
      new Swiper('.swiper-container ',{
        loop: true, // 循环模式选项
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
      new Swiper('.swiper-container ',{
        loop: true, // 循环模式选项
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.father
  margin-bottom 100px
.swiper-container
  width 100%
  height 400px
  position relative
  margin-top 148px
  .swiper-slide
    width 100%
    height 400px
    img
      width 100%
.selfsell
  width 100%
  height 72px
  display flex
  text-align center
  .iconfont
    color #B4282D
    font-size 30px
    margin-left 20px
    margin-top 5px
  .text
    color #B4282D
    font-size 26px
    margin-left 15px


.mainmiddlelists
  width 100%
  height 170px
  position relative
  display flex
  .middlelists
    width 110px
    height 110px
    margin-left 30px
    .listname
      font-size 24px
      margin-left 28px
      white-space nowrap
    img
      width 100%
      margin-left 10px
.mainmiddlelist
  width 100%
  height 170px
  position relative
  display flex
  .middlelist
    width 110px
    height 110px
    margin-left 30px
    .listname
      font-size 24px
      margin-left 28px
    img
      width 100%
.USCEO
  width 100%
  height 210px
  img
    width 100%

.middleshopmodule
  width 100%
  height 600px
  .middleshopleft
    width 343px
    height 270px
    float left
    background-color #F5F5F5
    padding 5px 10px
    .shopmoduletittle
      color #333
      font-size 32px
      padding-left 10px
    .bottomtittle
      color #7f7f7f
      font-size 24px
      padding-left 10px
  .middleshopright
    width 343px
    height 270px
    float right
    background-color #F5F5F5
    padding 5px 10px
    .bottomtittle
      color #7f7f7f
      font-size 24px
      padding-left 10px
    .shopmoduletittle
      color #333
      font-size 32px
      padding-left 10px
  .middleshopbottomleft
    width 343px
    height 270px
    float left
    background-color #F5F5F5
    padding 5px 10px
    .bottomtittle
      color #7f7f7f
      font-size 24px
      padding-left 10px
    .shopmoduletittle
      color #333
      font-size 32px
      padding-left 10px

  .middleshopbottomright
    width 343px
    height 270px
    float right
    background-color #F5F5F5
    padding 5px 10px
    .bottomtittle
      color #7f7f7f
      font-size 24px
      padding-left 10px
    .shopmoduletittle
      color #333
      font-size 32px
      padding-left 10px


.cutrule
  width 100%
  height 20px
  background-color #7f7f7f
.personaltailor
  width 100%
  height 100px
  padding 0 20px
  background #fff
  .Personaltailor
    font-size 32px
    color  #000000

.twoswiper
  width 100%
  height 310px
  margin-top -130px
  .personlist
    width 216px
    height 216px
    display flex
    position relative
    img
      display block
      width 216px
      height 216px
    .Personlist
      position absolute
      left 28px
      top 180px
      font-size 22px

</style>

