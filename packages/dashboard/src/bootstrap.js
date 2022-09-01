import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

export const dashboardMount = el => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_dashboard-dev-root');
  if (devRoot) dashboardMount(devRoot);
}
