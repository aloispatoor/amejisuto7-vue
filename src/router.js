import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import PixelArt from './views/PixelArt.vue';
import LegalMentions from "@/views/LegalMentions.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/legal-mentions',
    name: 'LegalMentions',
    component: LegalMentions
  },
  {
    path: '/pixelart',
    name: 'PixelArt',
    component: PixelArt
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
});