import React from 'react';
import Menu from './menu'

type Props = {};

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const Header: React.FC<Props> = () => {

  return (
    <header className="flex items-center justify-center h-14 relative layout-container rounded-b">
      <div className="layout-background absolute" />
      <Menu />
    </header>
  );
}

export default Header;
