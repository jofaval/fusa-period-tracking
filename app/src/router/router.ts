// Vendors
import { createRouter, createWebHashHistory, RouteLocationNormalized } from 'vue-router';
// Constants
import constants from './constants/routes.constants';
import { configConstants } from '../constants';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constants.ROUTES,
});

export const onRouteChange = (to: RouteLocationNormalized): void => {
  document.title = constants.TITLES?.[to.name?.toString() ?? ''] ?? configConstants.APP_NAME;
};

router.afterEach(onRouteChange);

export default router;
