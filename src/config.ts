export const config = {
  assets: {
    images: [require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png')],
    fonts: {
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
    }
  },
  routes: {
    home: '',
    dashboard: '/dashboard',
    dashboardActive: '/dashboard/active',
    dashboardArchived: '/dashboard/archived'
  },
  baseURL: 'http://localhost:3000'
};
