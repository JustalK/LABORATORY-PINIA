import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Experience0001 from '../views/Experience0001.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'experience1',
    component: Experience0001,
  },
  {
    path: '/experience2',
    name: 'experience2',
    component: () => import('../views/Experience0002.vue'),
  },
  {
    path: '/experience3',
    name: 'experience3',
    component: () => import('../views/Experience0003.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
