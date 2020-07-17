import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menus',
    name: 'Menus',
    component: () => import('../views/Menus.vue')
  },
  {
    path: '/our-story',
    name: 'Story',
    component: () => import('../views/Story.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import('../views/Locations.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('../views/Careers.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/catering',
    name: 'Catering',
    component: () => import('../views/Catering.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
