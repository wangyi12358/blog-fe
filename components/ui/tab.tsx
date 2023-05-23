import type { FC } from 'react';
import React, { memo } from 'react';
import { BaseFormProps } from '@/utils/baseProps'
import usePropsValue from '@/hooks/usePropsValue'
import { mergeProps } from '@/utils/mergeProps'
import classnames from 'classnames'

interface TabItemProps {
  label: React.ReactNode
  selected: boolean
  onClick: () => void
}

const TabItem: FC<TabItemProps> = memo((props) => {
  const { selected , label , onClick } = props
  return (
    <a
      onClick={onClick}
      className={classnames('tab hover:primary-color duration-300',
        { ['tab-active']: selected }
      )}>
      {label}
    </a>
  );
})

TabItem.displayName = 'TabItem'

export interface Item {
  value: React.Key;
  label: React.ReactNode;
  [key: string]: any
}

export interface TabProps extends BaseFormProps<React.Key> {
  items: Item[]
  className?: string
}

const defaultProps = {
  defaultValue: ''
}

const Tab: FC<TabProps> = memo((p) => {
  const props = mergeProps(defaultProps, p)
  const { items, className } = props
  const [ value, onChange ] = usePropsValue(props)
  return (
    <div className={classnames('tabs', className)}>
      {
        items.map((item, index) => {
          return (
            <TabItem
              label={item.label}
              selected={value === item.value}
              key={item.value}
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
