import { useState, useEffect } from 'react';
import { createArrayFromNumber } from '../utils/helpers';
import { ITupleOfLength } from '../utils/types/generics';
import { useIndex } from './useIndex';

interface IState {
  index: number;
}

const defaultState = [{ index: 0 }];

function useSlideIndex<T extends number>(numberOfIndexs: T) {
  type IResult = ITupleOfLength<IState, T>;
  const [state, setState] = useState(defaultState);

  const a = useIndex(0);

  useEffect(() => {
    setState(createArrayFromNumber(numberOfIndexs, a));
  }, [a, numberOfIndexs]);

  return state as IResult;
}

export { useSlideIndex };
