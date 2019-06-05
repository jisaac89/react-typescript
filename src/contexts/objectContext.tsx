import React from 'react';
import { createContext, FunctionComponent, useState } from 'react';
import { ICreateContext } from '../utils/types/generics';

export type IDefaultObject = object;

const defaultObjectState: IDefaultObject = {};

const ObjectContext = createContext<ICreateContext<IDefaultObject>>([defaultObjectState, () => null]);

const ObjectProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultObjectState);
  return <ObjectContext.Provider value={[state, setState]}>{children}</ObjectContext.Provider>;
};

export { ObjectContext, ObjectProvider };
