// Vendors
import { createRouter, createWebHashHistory } from 'vue-router';
// Constants
import constants from './constants/routes.constants';
import { configConstants } from '../constants';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constants.ROUTES,
});

router.afterEach((to, from, failure) => {
  const toAsString = to.toString();
  document.title =
    toAsString in constants.TITLES ? constants.TITLES[toAsString] : configConstants.APP_NAME;
});

export default router;
