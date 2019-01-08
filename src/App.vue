<template>
  <div >
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuide v-show="!this.$route.meta.Isshow"/>

  </div>

</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components : {
    FooterGuide,
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
