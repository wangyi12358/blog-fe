import type {FC} from 'react';
import React, {memo } from 'react';

export interface Item {
  key: React.Key;
  label: React.ReactNode;
}

export interface TabProps {

}

const Tab: FC<TabProps> = memo(() => {
  return (
    <div>Tab</div>
  );
})

export default Tab;
