import { useContext, useEffect } from 'react';
import { ObjectContext } from '../contexts/objectContext';

function useObject<T, X>(obj: T, obj2?: X) {
  const [state, setState] = useContext(ObjectContext);

  // only on mount
  useEffect(() => {
    if (obj2) {
      setState({ ...obj, ...obj2 });
    } else {
      setState(obj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChange<K extends keyof T & X>(key: K, value: Partial<T & X>[K]): void {
    setState(prevState => {
      return {
        item: {
          [key]: value
        }
      };
    });
  }

  return {
    onChange,
    object: state as T & X
  };
}

export { useObject };
