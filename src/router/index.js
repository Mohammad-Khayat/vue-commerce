import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductsList from '../views/ProductsList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import ProductDetails from '../views/ProductDetails.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path:'/products',
      name:'Products',
      component:ProductsList
    },
    {
      path:'/cart',
      name:'Cart',
      component:ShoppingCart,
    },
    
    {
      path:'/details/:id',
      name:'Details',
      component:ProductDetails,
      props:true
    },

  ],
});

export default router;
