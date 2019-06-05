import React from 'react';
import { createContext, FunctionComponent, useState } from 'react';
import { ICreateContext } from '../utils/types/generics';

export interface IDefaultObject {}

const defaultObjectState: IDefaultObject = {};

const ObjectContext = createContext<ICreateContext<IDefaultObject>>([defaultObjectState, () => {}]);

const ObjectProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultObjectState);
  return <ObjectContext.Provider value={[state, setState]}>{children}</ObjectContext.Provider>;
};

export { ObjectContext, ObjectProvider };
