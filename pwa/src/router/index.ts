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
    path: '/u',
    name: 'home',
    component: Home
  },
  {
    path: '/u/activities',
    name: 'activities',
    component: Activities
  },
  {
    path: '/u/bookmark',
    name: 'bookmark',
    component: Bookmark
  },
  {
    path: '/u/profile',
    name: 'profile',
    component: Profile
  },

  {
    path: '/u/security',
    name: 'security',
    component: Security
  },

  {
    path: '/u/settings',
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
