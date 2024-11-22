import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import PixelArt from './views/PixelArt.vue';
import FurryArt from "@/views/FurryArt.vue";
import SiteMap from "@/views/SiteMap.vue";
import Commission from "@/views/Commission.vue";

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
  {
    path: '/furryart',
    name: 'FurryArt',
    component: FurryArt
  },
  {
    path: '/sitemap',
    name: 'SiteMap',
    component: SiteMap
  },
  {
    path: '/commission',
    name: 'Commission',
    component: Commission
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
});