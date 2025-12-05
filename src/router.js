import { createRouter, createWebHistory } from 'vue-router';
import ContributionLeaderboard from './views/ContributionLeaderboard.vue';

const routes = [
  { 
    path: '/', 
    name: 'ContributionLeaderboard',
    component: ContributionLeaderboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;