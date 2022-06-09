import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/HomeView.vue'
const Activities = () => import('../views/ActivitiesView.vue')
const Bookmark = () => import('../views/BookmarkView.vue')
const Profile = () => import('../views/ProfileView.vue')
const Security = () => import('../views/SecurityView.vue')
const Settings = () => import('../views/SettingsView.vue')


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    component: Bookmark
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },

  {
    path: '/security',
    name: 'security',
    component: Security
  },

  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
