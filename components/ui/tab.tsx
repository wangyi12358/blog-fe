import type { FC } from 'react';
import React, { memo } from 'react';
import { BaseFormProps } from '@/utils/baseProps'
import usePropsValue from '@/hooks/usePropsValue'
import { mergeProps } from '@/utils/mergeProps'

interface TabItemProps {
  label: React.ReactNode
  selected: boolean
  onClick: () => void
}

const TabItem: FC<TabItemProps> = memo((props) => {
  const { selected , label } = props
  return (
    <a className={`tab ${selected && 'tab-active'}`}>{label}</a>
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

const defaultProps = {
  defaultValue: []
}

const Tab: FC<TabProps> = memo((p) => {
  const props = mergeProps(p, defaultProps)
  const { items } = props
  const [ value, onChange ] = usePropsValue(props)
  return (
    <div className="tabs tabs-boxed">
      {
        items.map((item, index) => {
          return (
            <TabItem
              label={item.label}
              selected={value === item.value}
              key={value}
              onClick={() => {
                if (value === item.value) return
                onChange(item.value)
              }}
            />
          )
        })
      }
    </div>
  );
})

Tab.displayName = 'Tab'

export default Tab;
