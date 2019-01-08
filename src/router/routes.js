/**
 * Created by 王翔 on 2018-12-28.
 */
import Main from '../pages/Main/Main.vue'
import Classify from '../pages/Classify/Classify.vue'
import Watches from '../pages/Watches/Watches.vue'
import Shopcar from '../pages/Shopcar/Shopcar.vue'
import Profile from '../pages/Profile/Profile.vue'
import Recommend from '../pages/Main/page/Recommend.vue'
import Watching from '../pages/Watching/Watching.vue'
export default [
  {
    path : '/main',
    component : Main,
    meta : {
      isShow:true
    },
    children : [
      {
        path : '/main/recommend',
        component : Recommend,
        meta : {
          isShow:true
        }
      },
    ]
  },
  {
    path : '/classify',
    component : Classify,
    meta : {
      isShow:true
    }

  },
  {
    path : '/watches',
    component : Watches,
  meta : {
  isShow:true
}
  },
  {
    path : '/shopcar',
    component : Shopcar,
    meta : {
      isShow:true
    }
  },
  {
    path : '/profile',
    component : Profile,
    meta : {
      isShow:false
    }
  },
  {
    path : '/watching',
    component : Watching,
    meta : {
      isShow:true
    }
  },

  {
    path : '/',
    redirect : '/main/recommend',
    meta : {
      isShow:true
    }
  },
]
