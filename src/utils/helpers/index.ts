// import { navigate } from '@reach/router';

import { navigate } from './routerHistory';

export const gotoRoute = (route: string) => () => {
  navigate(route);
};

export const createArrayFromNumber = (numberOfIndexs: number, val: any, currentindex = 0): any[] => {
  let arr: any[] = [];
  if (currentindex < numberOfIndexs) {
    arr.push(val);
    return createArrayFromNumber(numberOfIndexs, val, currentindex + 1);
  }

  return arr;
};
