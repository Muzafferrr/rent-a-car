import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from "@/components/MainContent";
import Cars from "@/views/Cars";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/rent',
    name: 'Rent',
    component: Cars,
    props:true
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
