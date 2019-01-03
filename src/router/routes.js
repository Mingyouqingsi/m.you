/**
 * Created by 王翔 on 2018-12-28.
 */
import Main from '../pages/Main/Main.vue'
import Classify from '../pages/Classify/Classify.vue'
import Watches from '../pages/Watches/Watches.vue'
import Shopcar from '../pages/Shopcar/Shopcar.vue'
import Profile from '../pages/Profile/Profile.vue'
import Recommend from '../pages/Main/page/Recommend.vue'
import Family from '../pages/Main/page/Family.vue'
import Jujia from  '../pages/Classify/Classes/Jujia.vue'
import Xiebao from '../pages/Classify/Classes/Xiebao.vue'
export default [
  {
    path : '/main',
    component : Main,
    children : [
      {
        path : '/main/recommend',
        component : Recommend
      },
      {
        path : '/main/family',
        component : Family
      },
    ]
  },
  {
    path : '/classify',
    component : Classify,
    children: [
      {
        path :'/classify/jujia',
        component : Jujia
      },
      {
        path :'/classify/xiebao',
        component : Xiebao
      },
    ]
  },
  {
    path : '/watches',
    component : Watches
  },
  {
    path : '/shopcar',
    component : Shopcar
  },
  {
    path : '/profile',
    component : Profile
  },
  {
    path : '/',
    redirect : '/main/recommend'
  },
]
