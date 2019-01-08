/**
 * Created by 王翔 on 2019-1-1.
 */
import ajax from  './ajax'

//### 实物tab数据接口
export const reqTab = () => ajax('/api/topic/v1/find/getTabs.json')

//### 实物列表数据
export const reqList = () => ajax('/api/topic/v1/find/recManual.json',)

//### 搜索接口
export const reqSearch = (keywordPrefix) =>ajax('/api/xhr/search/searchAutoComplete.json?csrf_token=b3562f9291acf772228f8aa617e',{keywordPrefix},'POST')

//##识物达人数据
export const reqintellList = ({page,size,tabId})=>ajax('/api/topic/v1/find/getTabData.json',{page,size,tabId})

//mock数据 :分类列表
export const reqNavData = () => ajax('/navdata')


