import { useEffect, useState } from 'react';
import { navigate, history } from '../utils/helpers/routerHistory';

const defaultPageState = {
  isSlideIndex: 0
};

// listen to back button,  check to see if you can use multiple use effect

const useContextRouter = () => {
  const [state, setState] = useState(defaultPageState);

  //on mount
  useEffect(() => {
    const urlRoute = Number(window.location.pathname.substr(window.location.pathname.length - 1));
    if (isNaN(urlRoute)) {
      navigate(`/0`);
    } else {
      const routeURLPath = urlRoute;
      setState({ isSlideIndex: routeURLPath });
    }
  }, []);

  // listen for slideindex change
  useEffect(() => {
    history.listen(listener => {
      const urlRoute = Number(listener.location.pathname.replace(/\\|\//g, ''));
      if (state.isSlideIndex !== urlRoute) {
        if (listener.action === 'POP') {
          setState({ isSlideIndex: urlRoute });
        } else if (listener.action === 'PUSH') {
          setState({ isSlideIndex: state.isSlideIndex + 1 });
        }
      }
    });
  }, [state.isSlideIndex]);

  // on unmount
  useEffect(() => {
    return history.listen(location => {});
  }, []);

  function setSlideIndex(n: number) {
    navigate(`${n}`);
  }

  return {
    setSlideIndex,
    isSlideIndex: state.isSlideIndex
  };
};

export { useContextRouter };
