import { useContext, useEffect } from 'react';
import { CollectionContext, defaultCollectionState } from '../contexts/collectionContext';

// export type TUseCollectionStore<T, O> = (collection: T[], item: O) => {};

function useCollectionStore<T>(collection: T[], item: T) {
  const [state, setState] = useContext(CollectionContext);

  useEffect(() => {
    if (item) {
      setState({
        collection,
        item
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChange<K extends keyof T>(key: K, value: T[K]): void {
    setState({
      collection: state.collection,
      item: {
        [key]: value
      }
    });
  }

  function reset() {
    setState(defaultCollectionState);
  }

  return {
    onChange,
    reset,
    collection: state.collection,
    item: state.item as T
  };
}

export { useCollectionStore };
