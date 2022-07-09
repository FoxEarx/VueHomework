import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '@/router/index'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
})
let routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err)
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
