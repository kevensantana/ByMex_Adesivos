import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'


const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/sobre', name: 'About', component: About},
    {path: '/carrinho', name: 'Cart', component: Cart}
 ]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router