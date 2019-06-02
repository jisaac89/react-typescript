import React from 'react';

interface ICombinedContextProvider {
  arrOfProviders: JSX.Element[];
  children: JSX.Element;
}

export const CombinedContextProvider = ({ arrOfProviders, children }: ICombinedContextProvider) => {
  function loop(arr: JSX.Element[]) {
    return arr.map((child: JSX.Element, index: number) => {
      const nextChild = arr.filter((item: JSX.Element) => item !== child);
      if (nextChild.length) {
        return React.cloneElement(
          child,
          {
            key: index
          },
          <CombinedContextProvider children={children} arrOfProviders={nextChild} />
        );
      }
      return React.cloneElement(
        child,
        {
          key: index
        },
        children
      );
    })[arrOfProviders.length - 1];
  }

  return loop(arrOfProviders);
};
