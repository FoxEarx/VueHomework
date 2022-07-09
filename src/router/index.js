import main from '@/views/main'
import news from '@/views/news'
import tiyu from '@/views/tiyu'
import tiyumain from '@/views/son/tiyumain'
import guonei from '@/views/son/guonei'
import guowai from '@/views/son/guowai'
const routes = [
  {
    path: '/main',
    component: main,
  },
  {
    path: '/news',
    component: news,
  },
  {
    path: '/tiyu',
    component: tiyu,
    children: [
      {
        path: 'tiyumain',
        component: tiyumain,
      },
      {
        path: 'guonei',
        component: guonei,
      },
      {
        path: 'guowai',
        component: guowai,
      },
    ],
  },
]
export default routes
