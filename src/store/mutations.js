/**
 * Created by 王翔 on 2019-1-2.
 */
import {RECEIVE_NAVLIST,RECEIVE_NAVINDEX ,RECEIVE_NAVDETAIL} from  './mutation-types'

export default {
  [RECEIVE_NAVLIST] (state, {navlist}) {
      state.navlist = navlist
},
  [RECEIVE_NAVINDEX](state,{index}){
    state.navindex = index
  },
  [RECEIVE_NAVDETAIL](state){
    state.navdetail = state.navlist[state.navindex]
  },
}
