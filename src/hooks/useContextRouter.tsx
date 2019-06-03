import { useEffect, useState } from 'react';
import { gotoRoute } from '../utils/helpers';

const defaultPageState = {
  isSlideIndex: 0
};

const useContextRouter = (route: string) => {
  const [state, setState] = useState(defaultPageState);

  useEffect(() => {
    const nextState = defaultPageState;
    gotoRoute(`${route}/${defaultPageState.isSlideIndex.toString()}`);
    setState(nextState);
  }, [route]);

  function setSlideIndex(n: number) {
    const nextState = {
      isSlideIndex: n
    };
    gotoRoute(`${route}/${n}`);
    setState(nextState);
  }
  return {
    setSlideIndex,
    isSlideIndex: state.isSlideIndex
  };
};

export { useContextRouter };
