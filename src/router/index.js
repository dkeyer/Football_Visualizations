import Vue from 'vue'
import { Router, createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.Vue'
import About from '../components/About.Vue'
import Home from '../components/Home.Vue'
import Contact from '../components/Contact.Vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
