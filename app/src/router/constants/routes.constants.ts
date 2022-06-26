// Constants
import { pathConstants } from '../../constants';
// Views
import Home from '../../views/home/home.view.vue';
import Profile from '../../views/profile/profile.view.vue';

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
  ],
  TITLES: {
    [pathConstants.HOME]: 'Home',
    [pathConstants.FALLBACK]: 'Home',
    [pathConstants.PROFILE.ROOT]: 'Profile',
  },
};
