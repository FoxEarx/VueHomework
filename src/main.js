import Vue from 'vue'
import App from './App.vue'
import './assets/mobile/flexible'
import './assets/style/reset.css'
import VueRouter from 'vue-router'
import routes from '@/router/index'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vant)
const router = new VueRouter({
  routes,
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
