import React, { createContext, useState, Dispatch, SetStateAction, FunctionComponent, useContext } from 'react';

const appStore: IAppProviderState = {
  isNightMode: true,
  toggleNightmode: () => null
};

export interface IAppProviderState {
  isNightMode: boolean;
  toggleNightmode: Dispatch<SetStateAction<boolean>>;
}

export const AppProvider: FunctionComponent<{ children?: JSX.Element }> = ({
  children
}: {
  children?: JSX.Element;
}) => {
  const [isNightMode, toggleNightmode] = useState(appStore.isNightMode);
  const defaultContext: IAppProviderState = {
    isNightMode,
    toggleNightmode
  };
  return <AppStoreContext.Provider value={defaultContext}>{children}</AppStoreContext.Provider>;
};

export const AppStoreContext = createContext(appStore);
export const AppStoreConsumer = AppStoreContext.Consumer;
export const AppStoreValue = () => useContext(AppStoreContext);
