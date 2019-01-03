<template>
  <div >
   <!-- <ul>
      <li v-for="(item,index) in navlist" :key="index">{{item.name}}</li>
    </ul>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuide/>

  </div>

</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components : {
    FooterGuide
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
