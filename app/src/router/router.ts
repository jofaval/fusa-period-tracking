// Vendors
import { createRouter, createWebHashHistory, RouteLocationNormalized } from 'vue-router';
// Constants
import constants from './constants/routes.constants';
import { configConstants } from '@/constants';
// Locales
import i18n from '@/langs';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constants.ROUTES,
});

export const onRouteChange = (to: RouteLocationNormalized): void => {
  const titleId = constants.TITLES?.[to.name?.toString() ?? ''] ?? configConstants.APP_NAME;
  document.title = i18n.global.t(titleId);
};

router.afterEach(onRouteChange);

export default router;
