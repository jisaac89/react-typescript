import React, { createContext, FunctionComponent, useState } from 'react';
import { ICreateContext, IDictionary } from '../utils/types/generics';

export interface IPageState {
  isSlideIndex: number;
  isLoading: boolean;
}

export interface IPageRoute {
  routes: IDictionary<IPageState>;
}

const defaultsRoute: IPageRoute = {
  routes: {}
};

const PageContext = createContext<ICreateContext<IPageRoute>>([defaultsRoute, () => {}]);

const PageProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultsRoute);
  return <PageContext.Provider value={[state, setState]}>{children}</PageContext.Provider>;
};

export { PageContext, PageProvider };
