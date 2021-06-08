import { useEffect } from 'react';

export const useMount = (fn: Function) => {
  useEffect(() => {
    const cleanup = fn();
    return () => {
      cleanup && cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
