import About from '@/views/About'
import Contasts from '@/views/Contacts'
import UI_Router from '@/views/UI_Router'
import Alice from '@/views/son/Alice'
import Allcontacts from '@/views/son/Allcontacts'
import Bob from '@/views/son/Bob'
import blog from '@/views/son/son1/blog'
import fax from '@/views/son/son1/fax'
const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contasts',
    component: Contasts,
    children: [
      {
        path: 'alice',
        component: Alice,
      },
      {
        path: 'allcontacts',
        component: Allcontacts,
      },
      {
        path: 'bob',
        component: Bob,
        children: [
          {
            path: 'blog',
            component: blog,
          },
          {
            path: 'fax',
            component: fax,
          },
        ],
      },
    ],
  },
  {
    path: '/ui_Router',
    component: UI_Router,
  },
]
export default routes
