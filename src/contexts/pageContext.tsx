import React, { createContext, FunctionComponent, useState } from 'react';
import { ICreateContext, IDictionary } from '../utils/types/generics';

export interface IPageState {
  isSlideIndex: number;
  isLoading: boolean;
}

export interface IPageRoute {
  default: boolean;
  routes: IDictionary<IPageState>;
  path: string;
  children: React.ReactNode;
}

export type IPageRouteView = Partial<IPageRoute>;
export type IPageContextState = Pick<IPageRoute, 'routes'>;

const defaultsRoute = {
  routes: {}
};

const PageContext = createContext<ICreateContext<IPageContextState>>([defaultsRoute, () => null]);

const PageProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultsRoute);
  return <PageContext.Provider value={[state, setState]}>{children}</PageContext.Provider>;
};

export { PageContext, PageProvider };
