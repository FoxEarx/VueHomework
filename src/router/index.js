import My from '@/views/My'
import Class from '@/views/Class'
import Homepage from '@/views/Homepage'
import Order from '@/views/Order'

const routes = [
  {
    path: '/main',
    component: My,
  },
  {
    path: '/class',
    component: Class,
  },
  {
    path: '/homepage',
    component: Homepage,
  },
  {
    path: '/order',
    component: Order,
  },
]

export default routes
