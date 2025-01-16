import { createRouter, createWebHistory } from 'vue-router';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory('dcs/all.UDI'),
  routes
});

export default router;
