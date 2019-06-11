import React, { useState } from 'react';
import { ICreateContext } from '../utils/types/generics';

export interface IAppProviderState {
  isNightMode: boolean;
}

const defaults = { isNightMode: false };
const AppContext = React.createContext<ICreateContext<IAppProviderState>>([defaults, () => null]);

const AppProvider = (props: { children?: JSX.Element }) => {
  const [state, setState] = useState<IAppProviderState>({
    isNightMode: defaults.isNightMode
  });
  return <AppContext.Provider value={[state, setState]}>{props.children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
