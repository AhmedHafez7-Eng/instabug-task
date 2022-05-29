// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router



import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/LoginView.vue"
import WelcomeComponent from "../views/WelcomeView.vue"
import NotFoundComponent from "../views/notfoundPage.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomeComponent
    },
    {
      path: "/404",
      name: "notfound",
      component: NotFoundComponent
    },
    // and finally the default route, when none of the above matches:
    {
      path: '/:pathMatch(.*)',
      redirect: {
        name: "notfound"
      }
    }
  ]
})