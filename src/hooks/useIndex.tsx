import { useState, useEffect } from 'react';

function useIndex(idx: number) {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(idx);
  }, [idx]);

  function goto(n: number) {
    setState(n);
  }

  return {
    state,
    goto
  };
}

export { useIndex };
