<template>
  <div >
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqList} from './api'
export default {
  async mounted () {
    const result = await reqList()
    console.log(result)
  },
  components : {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
