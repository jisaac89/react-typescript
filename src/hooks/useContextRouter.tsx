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
    const urlIndex = {
      isSlideIndex: Number(window.location.pathname.substr(window.location.pathname.length - 1))
    };

    const nextState =
      state.isSlideIndex !== defaultPageState.isSlideIndex
        ? {
            isSlideIndex: state.isSlideIndex
          }
        : urlIndex;
    navigate(
      `${state.isSlideIndex !== defaultPageState.isSlideIndex ? state.isSlideIndex : defaultPageState.isSlideIndex}`
    );
    setState(nextState);
  }, [routeURL, state.isSlideIndex]);

  function setSlideIndex(n: number) {
    const nextState = {
      isSlideIndex: n
    };
    navigate(`${n}`);
    setState(nextState);
  }
  return {
    setSlideIndex,
    isSlideIndex: state.isSlideIndex
  };
};

export { useContextRouter };
