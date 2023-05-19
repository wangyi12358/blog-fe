import { useEffect, useRef } from 'react';

const useDidUpdateEffect = <T>(fn: () => void, inputs: T[]) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);
};

export default useDidUpdateEffect;
