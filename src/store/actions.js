/**
 * Created by 王翔 on 2019-1-2.
 */

import {reqNavData,reqTab,reqList ,reqintellList} from '../api'
import {RECEIVE_NAVLIST,RECEIVE_TABINDEX,RECEICE_TABLIST,RECEICE_INTELLLIST} from './mutation-types'
export default {
 async getNavdata ({commit}) {
    const result = await reqNavData()
    if(result.code === 0){
      const navlist = result.data
      commit(RECEIVE_NAVLIST,{navlist})
    }
  },
 async getTab ({commit}) {
    const result = await reqTab();
      const tabIndex = result.data;
      commit(RECEIVE_TABINDEX,{tabIndex})
  },
 async getTabList ({commit}) {
    const result = await reqList();
    console.log(result)
      const tabList = result.data;
      commit(RECEICE_TABLIST,{tabList})
  },
 async getintellList ({commit},{page,size,tabId}) {
    const result = await reqintellList({page,size,tabId});
      const intellList = result.data.result;
      commit(RECEICE_INTELLLIST,{intellList})
  },

}
