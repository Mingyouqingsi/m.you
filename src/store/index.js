/**
 * Created by 王翔 on 2019-1-2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
})
