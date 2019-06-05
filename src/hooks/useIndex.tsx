import { useState, useEffect } from 'react';

interface IUseIndex {
  index: number;
  goto: (n: number) => void;
  reset: () => void;
}

function useIndex(idx: number): IUseIndex {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(idx);
  }, [idx]);

  function goto(n: number) {
    setState(n);
  }

  function reset() {
    setState(idx);
  }

  return {
    index: state,
    goto,
    reset
  };
}

export { useIndex };
