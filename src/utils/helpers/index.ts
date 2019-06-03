import { navigate } from '@reach/router';

// import { navigate } from './routerHistory';

export const gotoRoute = (route: string) => () => {
  navigate(route);
};
