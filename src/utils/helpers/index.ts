export const gotoRoute = (route: string) => () => {
  //
};

export const createArrayFromNumber = (numberOfIndexs: number, val: any, currentindex = 0, arr: any[] = []): any[] => {
  if (currentindex < numberOfIndexs) {
    arr.push(val);
    return createArrayFromNumber(numberOfIndexs, val, currentindex + 1, arr);
  }

  return arr;
};
