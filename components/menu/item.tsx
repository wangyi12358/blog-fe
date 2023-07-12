import React from 'react';

interface MenuItemProps {
  title?: string
  onClick?: () => void
  icon: React.ReactNode
}


const MenuItem: React.FC<MenuItemProps> = ({ icon, onClick, title }) => {
  return (
    <div data-tip={title} onClick={onClick} className="menu-item tooltip">
      {icon}
    </div>
  )
}

export default MenuItem
