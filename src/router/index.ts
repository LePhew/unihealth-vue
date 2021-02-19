import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/components/home/home.vue';
import BloodRequestForm from '../views/components/blood-request-form/blood-request-form.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/blood-request',
    name: "BloodRequest",
    component: BloodRequestForm
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
