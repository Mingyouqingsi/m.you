/**
 * Created by 王翔 on 2019-1-2.
 */
import Mock from 'mockjs'
import feilei_list from './feilei_list.json'


Mock.mock('/navdata', {
  code: 0,
  data: feilei_list
})


