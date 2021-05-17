import Vue from 'vue'
import Router from 'vue-router'

const home = ()=>import("views/home/Home");
const category = ()=>import ("views/category/Category");
const shopcart = ()=>import("views/shopcart/ShopCart");
const profile = ()=>import("views/profile/Profile");

Vue.use(Router)

export default new Router({
  routes:[
      {
          path:"/",
          redirect:"/home"
      },
      {
          path:"/home",
          component:home
      },
      {
          path:"/category",
          component:category
      },
      {
          path:"/shopcart",
          component:shopcart
      },
      {
          path:"/profile",
          component:profile
      }
  ],
  mode:"history"
})
