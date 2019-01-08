/**
 * Created by 王翔 on 2019-1-2.
 */
import {RECEIVE_NAVLIST,RECEIVE_TABINDEX,RECEICE_TABLIST,RECEICE_INTELLLIST} from  './mutation-types'

export default {
  [RECEIVE_NAVLIST] (state, {navlist}) {
      state.navlist = navlist
},
  [RECEIVE_TABINDEX] (state, {tabIndex}) {
      state.tabIndex = tabIndex
},
  [RECEICE_TABLIST] (state, {tabList}) {
      state.tabList = tabList
},
  [RECEICE_INTELLLIST] (state, {intellList}) {
      intellList.forEach(item=>state.intellList.push(item));
},



}
