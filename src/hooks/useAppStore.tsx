import { useContext } from 'react';
import { AppContext, IAppProviderState } from '../contexts/appContext';

const useAppStore = () => {
  const [state, setState] = useContext(AppContext);

  function toggleNightmode() {
    if (!state.isNightMode) {
      setState({ ...state, isNightMode: true });
    } else {
      setState({ ...state, isNightMode: false });
    }
  }

  return {
    toggleNightmode,
    isNightMode: state.isNightMode
  };
};

export { useAppStore };
