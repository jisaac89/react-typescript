import React, { createContext, useState, Dispatch, SetStateAction, FunctionComponent } from 'react';

const appStore: IMenuProviderState = {
  isOpen: true,
  toggleMenu: () => null
};

export interface IMenuProviderState {
  isOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

export const MenuProvider: FunctionComponent<{ children?: JSX.Element }> = ({
  children
}: {
  children?: JSX.Element;
}) => {
  const [isOpen, toggleMenu] = useState(appStore.isOpen);
  const defaultContext: IMenuProviderState = {
    isOpen,
    toggleMenu
  };
  return <MenuStoreContext.Provider value={defaultContext}>{children}</MenuStoreContext.Provider>;
};

export const MenuStoreContext = createContext(appStore);
export const MenuStoreConsumer = MenuStoreContext.Consumer;
