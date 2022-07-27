const ENVIRONTMENTS = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'dev',
};

const PUBLIC_PATHS = {
  [ENVIRONTMENTS.PRODUCTION]: '/fusa-period-tracking',
  [ENVIRONTMENTS.DEVELOPMENT]: '/',
};

export default {
  APP_NAME: 'FUSA',
  ENVIRONTMENTS,
  PUBLIC_PATHS,
};
