import React from 'react';
import Tab, { Item } from './ui/tab'

type Props = {};

const HEADER_ITEMS: Item[] = [
  { label: '首页', value: 'home', link: '/' },
  { label: '博客', value: 'blog', link: '/blog' },
  { label: '关于', value: 'about', link: '/about' }
]

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const Header: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-center h-14 relative layout-container rounded-b-sm">
      <div className="layout-background absolute" />
      <Tab
        className=""
        defaultValue="home"
        items={HEADER_ITEMS}
      />
    </div>
  );
}

export default Header;
