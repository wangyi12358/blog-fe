import { useUpdate, useMemoizedFn } from 'ahooks';
import { useRef } from 'react';

type Props<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (value: T, ...args: unknown[]) => void;
};

const usePropsValue = <T>(props: Props<T>) => {
  const { value, defaultValue, onChange } = props;

  const update = useUpdate();

  const stateRef = useRef<T | undefined>(value !== undefined ? value : defaultValue);

  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState = useMemoizedFn((v: T, ...args: unknown[]) => {
    stateRef.current = v;
    update();
    onChange?.(v, ...args);
  });
  return [stateRef.current, setState] as const;
};

export default usePropsValue;
