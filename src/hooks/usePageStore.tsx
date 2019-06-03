import { useContext, useEffect } from 'react';
import { PageContext } from '../contexts/pageContext';

const defaultPageState = {
  isLoading: true,
  isSlideIndex: 0
};

const usePageStore = (route: string) => {
  const [state, setState] = useContext(PageContext);
  const routeAlreadyExists = state.routes[route];

  useEffect(() => {
    if (!routeAlreadyExists) {
      const nextState = {
        routes: {
          [route]: defaultPageState
        }
      };
      setState(nextState);
    }
  }, [route, routeAlreadyExists, setState]);

  function setSlideIndex(n: number) {
    const nextState = {
      routes: {
        [route]: {
          isSlideIndex: n,
          isLoading: state.routes[route].isLoading
        }
      }
    };
    setState(nextState);
  }

  function setLoading(isLoading: boolean) {
    const nextState = {
      routes: {
        [route]: {
          isLoading: isLoading,
          isSlideIndex: state.routes[route].isSlideIndex
        }
      }
    };
    setState(nextState);
  }

  return {
    setSlideIndex,
    setLoading,
    isSlideIndex: routeAlreadyExists ? state.routes[route].isSlideIndex : 0,
    isLoading: routeAlreadyExists ? state.routes[route].isLoading : true
  };
};

export { usePageStore };
