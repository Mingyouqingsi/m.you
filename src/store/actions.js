/**
 * Created by 王翔 on 2019-1-2.
 */

import {reqNavData } from '../api'
import {RECEIVE_NAVLIST,RECEIVE_NAVINDEX ,RECEIVE_NAVDETAIL} from './mutation-types'
export default {
 async getNavdata ({commit}) {
    const result = await reqNavData()
    if(result.code === 0){
      const navlist = result.data
      commit(RECEIVE_NAVLIST,{navlist})
    }
  },
  getNavIndex({commit},index){
   commit(RECEIVE_NAVINDEX,{index})
  },
  getNavDetail({commit}){
   commit(RECEIVE_NAVDETAIL)
  }




}
