import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import AddJobView from '@/views/AddJobView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/jobs', name: 'jobs', component: JobsView },
  { path: '/jobs/add', name: 'add-job', component: AddJobView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
