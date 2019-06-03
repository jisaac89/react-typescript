import { useEffect, useState } from 'react';
import { navigate } from '../utils/helpers/routerHistory';
import { config } from '../config';

const defaultPageState = {
  isSlideIndex: 0
};

// listen to back button,  check to see if you can use multiple use effect

const routeURLPath = Number(window.location.pathname.substr(window.location.pathname.length - 1));

const useContextRouter = (route: string) => {
  const [state, setState] = useState(defaultPageState);
  const routeURL = `${config.baseURL}/${route}`;

  useEffect(() => {
    if (routeURLPath > state.isSlideIndex) {
      setSlideIndex(routeURLPath);
    }
  }, [routeURL, state.isSlideIndex]);

  useEffect(() => {
    if (window.history && window.history.pushState) {
      window.addEventListener('backbutton', () => setSlideIndex(routeURLPath - 1));
    }
  }, []);

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
