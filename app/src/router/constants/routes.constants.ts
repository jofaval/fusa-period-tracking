// Constants
import { pathConstants } from '@/constants';
// Views
import Home from '@/views/home/home.view.vue';
import Profile from '@/views/profile/profile.view.vue';

export default {
  ROUTES: [
    {
      path: pathConstants.HOME,
      name: 'home',
      component: Home,
    },
    {
      path: pathConstants.PROFILE.ROOT,
      name: 'profile-root',
      component: Profile,
    },
    {
      path: pathConstants.FALLBACK,
      name: 'fallback',
      component: Home,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: 'home',
    },
    {
      path: '/:pathMatch(.*)',
      redirect: 'home',
    },
  ],
  TITLES: {
    [pathConstants.HOME]: 'pages.home.title',
    [pathConstants.FALLBACK]: 'pages.fallback.title',
    [pathConstants.PROFILE.ROOT]: 'pages.profile.root.title',
  },
};
