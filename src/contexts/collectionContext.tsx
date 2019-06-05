import React, { createContext, FunctionComponent, useState } from 'react';
import { ICreateContext } from '../utils/types/generics';

interface IState<O> {
  collection: O[];
  item: O;
}

export const defaultCollectionState: IState<any> = {
  collection: [],
  item: {}
};

const CollectionContext = createContext<ICreateContext<IState<any>>>([defaultCollectionState, () => null]);

const CollectionProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultCollectionState);
  return <CollectionContext.Provider value={[state, setState]}>{children}</CollectionContext.Provider>;
};

export { CollectionContext, CollectionProvider };
