import {createRouter,createWebHashHistory} from 'vue-router'
const routes=[
  {
    path:"/",
    component:()=>import('../components/ZerothPage.vue'),
  },
  {
    path:"/FirstPage",
    component:()=>import('../components/FirstPage.vue'),
  },
  {
    path:"/FirstPage/junren",
    component:()=>import('../components/Register.vue'),
  },
  {
    path:"/FirstPage/shetuan",
    component:()=>import('../components/Register.vue'),
  },
  {
    path:"/FirstPage/putongren",
    component:()=>import('../components/Register.vue'),
  },
  {
    path:"/Login",
    component:()=>import('../components/Login.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router