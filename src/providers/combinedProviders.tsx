import React from 'react';

interface ICombinedContextProvider {
  arrOfProviders: any;
  children: JSX.Element;
}

// export const CombinedContextProvider = ({ children }: ICombinedContextProvider) => (
//   <AppProvider>{children}</AppProvider>
// );

export const CombinedContextProvider = ({ arrOfProviders, children }: ICombinedContextProvider) => {
  function loop(arr: any) {
    return arr.map((child: any, index: number) => {
      const nextChild = arr.filter((item: any) => item !== child);
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
    });
  }

  return loop(arrOfProviders);
};

// arrprov > ctx > menuprov > ctx

// return React.cloneElement(
//   arrOfProviders[0],
//   { ...arrOfProviders[0].props },
//   React.cloneElement(<CombinedContextProvider arrOfProviders={arrOfProviders.splice()} />, {}, children)
// );
