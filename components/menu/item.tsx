import React from 'react';
import cls from 'classnames'

interface MenuItemProps {
  selected?: boolean
  title?: string
  onClick?: () => void
  icon: React.ReactNode
}


const MenuItem: React.FC<MenuItemProps> = ({ icon, onClick, title, selected }) => {
  return (
    <div
      data-tip={title}
      onClick={onClick}
      className={cls('menu-item tooltip', {
        ['menu-item-selected']: selected
      })}
    >
      {icon}
    </div>
  )
}

export default MenuItem
