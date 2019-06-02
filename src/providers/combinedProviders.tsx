import React from 'react';

interface ICombinedContextProvider {
  arrOfProviders?: any;
  children?: JSX.Element;
}

// export const CombinedContextProvider = ({ children }: ICombinedContextProvider) => (
//   <AppProvider>{children}</AppProvider>
// );

export const CombinedContextProvider = ({ arrOfProviders, children }: ICombinedContextProvider) => {
  const arrOfProvidersLength = arrOfProviders.length;

  const replies = arrOfProviders.map((Element: any, index: any) => {
    if (index < arrOfProvidersLength) {
      //   return React.cloneElement(Element, Element.props, [arrOfProviders[index + 1]]);
      //   return <CombinedContextProvider arrOfProviders={[arrOfProviders.slice(index + 1)]} />;
      //   return React.cloneElement(Element, Element.props, [arrOfProviders[index + 1]]);
      return React.cloneElement(Element, { ...Element.props, key: index }, children);
    } else {
      //   return <CombinedContextProvider children={children} />;
      return children;
    }
  });
  return replies;
};
