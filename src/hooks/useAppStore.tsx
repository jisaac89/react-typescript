import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

const useAppStore = () => {
  const [state, setState] = useContext(AppContext);

  function toggleNightmode() {
    setState(() => ({ isNightMode: !state.isNightMode }));
  }

  return {
    toggleNightmode,
    isNightMode: state.isNightMode
  };
};

export { useAppStore };
