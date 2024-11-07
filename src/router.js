import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import PixelArt from './views/PixelArt.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/pixelart',
    name: 'PixelArt',
    component: PixelArt
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
});