import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SearchView from '../views/SearchView.vue'
import buySellHistoryView from '../views/buySellHistoryView.vue'
import userWalletHistoryView from '../views/userWalletHistoryView.vue'
import rewardHistoryView from '../views/rewardHistoryView.vue'
import announcementManageView from '../views/announcementManageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/buySellHistory',
    name: 'buySellHistory',
    component: buySellHistoryView
  },
  {
    path: '/userWalletHistory',
    name: 'userWalletHistory',
    component: userWalletHistoryView
  },
  {
    path: '/rewardHistory',
    name: 'rewardHistory',
    component: rewardHistoryView
  },
  {
    path: '/announcementManage',
    name: 'announcementManage',
    component: announcementManageView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/buySellHistoryView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
