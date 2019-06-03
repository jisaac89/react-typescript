import { useEffect, useState } from 'react';
import { navigate } from '../utils/helpers/routerHistory';
import { config } from '../config';

const defaultPageState = {
  isSlideIndex: 0
};

const useContextRouter = (route: string) => {
  const [state, setState] = useState(defaultPageState);
  const routeURL = `${config.baseURL}/${route}`;

  useEffect(() => {
    if (state.isSlideIndex) {
      const nextState =
        state.isSlideIndex !== defaultPageState.isSlideIndex
          ? {
              isSlideIndex: state.isSlideIndex
            }
          : defaultPageState;
      navigate(
        `${routeURL}${
          state.isSlideIndex !== defaultPageState.isSlideIndex ? state.isSlideIndex : defaultPageState.isSlideIndex
        }`
      );
      setState(nextState);
      console.log('aaaa');
    }
  }, [routeURL, state.isSlideIndex]);

  function setSlideIndex(n: number) {
    const nextState = {
      isSlideIndex: n
    };
    navigate(`${routeURL}/${n}`);
    setState(nextState);
  }
  return {
    setSlideIndex,
    isSlideIndex: state.isSlideIndex
  };
};

export { useContextRouter };
