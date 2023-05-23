import React from 'react';
import Tab, { Item } from './ui/tab'
import Router from 'next/router'
import { usePathname } from 'next/navigation'

type Props = {};

const HEADER_ITEMS: Item[] = [
  { label: '首页', value: 'home', link: '/' },
  { label: '博客', value: 'blog', link: '/blog' },
  { label: '项目', value: 'project', link: '/project' },
  { label: '关于', value: 'about', link: '/about' }
]

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const Header: React.FC<Props> = () => {
  const pathname = usePathname()
  const defaultValue = HEADER_ITEMS.find(i => {
    if (i.link !== '/') {
      return pathname?.startsWith(i.link)
    }
    return i.link === pathname
  })?.value

  return (
    <header className="flex items-center justify-center h-14 relative layout-container rounded-b-sm">
      <div className="layout-background absolute" />
      <Tab
        defaultValue={defaultValue}
        items={HEADER_ITEMS}
        onChange={e => {
          Router.push(HEADER_ITEMS.find(i => i.value === e)?.link)
        }}
      />
    </header>
  );
}

export default Header;
