import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/1',
    name: 'step1',
    alias: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "step1" */ '../views/Step1.vue')
  },
  {
    path: '/2',
    name: 'step2',
    beforeEnter(to, from, next) {
      if (store.getters["step1Valid"]) {
        next();
      } else {
        next({
          name: "step1"
        });
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "step2" */ '../views/Step2.vue')
  },
  {
    path: '/3',
    name: 'step3',
    beforeEnter(to, from, next) {
      if (store.getters["step2Valid"]) {
        next();
      } else {
        next({
          name: "step2"
        });
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "step3" */ '../views/Step3.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
