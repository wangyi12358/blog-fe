import type {FC} from 'react';
import React, {memo } from 'react';
import {BaseFormProps} from "@/utils/baseProps";

export interface TabItemProps {
}

const TabItem: FC<TabItemProps> = memo(() => {
  return (
    <div>Item</div>
  );
})

TabItem.displayName = 'TabItem'


export interface Item {
  value: React.Key;
  label: React.ReactNode;
}

export interface TabProps extends BaseFormProps<React.Key> {
  items: Item[]
}

const Tab: FC<TabProps> = memo((props) => {
  const {} = props
  return (
    <div>Tab</div>
  );
})

Tab.displayName = 'Tab'

export default Tab;
