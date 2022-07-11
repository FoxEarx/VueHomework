import Layout from '@/views/Layout/index'
import Home from '@/views/Home/index'
import Search from '@/views/Search/index'
import Playsong from '@/views/playSong/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/layout/home',
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: 'search',
        component: Search,
        meta: {
          title: '搜索',
        },
      },
    ],
  },
  {
    path: '/play',
    component: Playsong,
  },
]
export default routes
