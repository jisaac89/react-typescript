import { useEffect } from 'react';

export function useAsyncEffect(effect: () => Promise<any>) {
  useEffect(() => {
    effect().catch(e => {
      throw Error(e);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
