/**
 * Created by 王翔 on 2019-1-2.
 */
import Mock from 'mockjs'
import cateList from './cateList.json'
import feilei_list from './feilei_list.json'
import fenlei_zhuanqu from './fenlei_zhuanqu.json'
import shouye_data from './shouye_data.json'

Mock.mock('./cateList',{code: 0,data:cateList })
Mock.mock('./feilei_list',{code: 0,data:feilei_list})
Mock.mock('./fenlei_zhuanqu',{code: 0,data:fenlei_zhuanqu })
Mock.mock('./shouye_data',{code: 0,data:shouye_data })
