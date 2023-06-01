'use client'
import { usePathname } from 'next/navigation';
import Tab, { Item } from '@/components/ui/tab';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';

const HEADER_ITEMS: Item[] = [
  { label: '首页', value: 'home', link: '/' },
  { label: '博客', value: 'blog', link: '/blog' },
  { label: '项目', value: 'project', link: '/project' },
  { label: '关于', value: 'about', link: '/about' }
]

const Menu = () => {
  const pathname = usePathname()
  const [selected, setSelected] = useState('home')

  useEffect(() => {
    const v = HEADER_ITEMS.find(i => {
      if (i.link !== '/') {
        return pathname?.startsWith(i.link)
      }
      return i.link === pathname
    })?.value
    if (v !== selected) setSelected(v as string)
  }, [selected, pathname])

  return (
    <Tab
      defaultValue={HEADER_ITEMS[0].value}
      value={selected}
      items={HEADER_ITEMS}
      onChange={e => {
        setSelected(e as string)
        Router.push(HEADER_ITEMS.find(i => i.value === e)?.link)
      }}
    />
  )
}

export default Menu
