import { useState, useEffect } from 'react';

interface IUseIndex {
  index: number;
  goto: (n: number) => void;
  reset: () => void;
}

function useIndex(idx: number): IUseIndex {
  const [state, setState] = useState(0);

  useEffect(() => {
    if (state !== idx) {
      setState(() => state);
    }
    return () => setState(0);
  }, [idx, state]);

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
