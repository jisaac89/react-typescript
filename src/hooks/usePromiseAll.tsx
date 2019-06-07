import { useState, useEffect } from 'react';
import { useAsyncEffect } from './useAsyncEffect';

const defaultState: any[] = [];

function usePromiseAll(arrOfPromises: Array<Promise<any>>) {
  const [state, setState] = useState(defaultState);

  useAsyncEffect(async () => {
    if (arrOfPromises) {
      const b: Promise<any[]>[] = await Promise.all([...arrOfPromises]);
      console.log(b);
      setState(b);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return [...state];
}

export { usePromiseAll };
