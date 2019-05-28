import { navigate } from '@reach/router';

export const gotoRoute = (route: string) => () => {
  navigate(route);
};
