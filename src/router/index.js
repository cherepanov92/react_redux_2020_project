import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

export const pages = {
  DESKS: 'desks',
  COLUMNS: 'columns',
}

const routes = [
  { name: pages.DESKS, path: '/' },
  { name: pages.COLUMNS, path: '/desk' }
];

export const initialize = () => {
  const router = createRouter(routes);
  router.usePlugin(browserPlugin());
  router.start();

  return router;
};
