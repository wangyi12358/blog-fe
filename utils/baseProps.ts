import type React from 'react';

export interface BaseProps {
  /**
   * @description     样式类名
   */
  className?: string;
  /**
   * @description     样式
   */
  style?: React.CSSProperties;
}

export interface BaseFormProps<V = any> extends BaseProps {
  onChange?: (value: V) => void;
  value?: V;
  defaultValue?: V;
}
