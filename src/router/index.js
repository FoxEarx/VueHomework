import Layout from '@/views/Layout/index'
import Home from '@/views/Home/index'
import Search from '@/views/Search/index'
const routes = [
  {
    path: '/',
    redirect: '/layout',
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
]
export default routes
