'use client'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react';
import { AlignJustify, X, Home, Newspaper, GanttChartSquare, SearchSlash } from 'lucide-react'
import Item from './item'
import cls from 'classnames'
import './index.css'

const HEADER_ITEMS = [
  { label: '首页', key: 'home', link: '/', icon: <Home /> },
  { label: '博客', key: 'blog', link: '/blog', icon: <Newspaper /> },
  { label: '项目', key: 'project', link: '/project', icon: <GanttChartSquare /> },
  { label: '关于', key: 'about', link: '/about', icon: <SearchSlash /> }
]

const ITEM_BASE_WIDTH = 64

const expandWdith = ITEM_BASE_WIDTH * (HEADER_ITEMS.length + 1)

const Menu = () => {
  const pathname = usePathname()
  const [selected, setSelected] = useState('home')
  const [expand, setExpand] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const v = HEADER_ITEMS.find(i => {
      if (i.link !== '/') {
        return pathname?.startsWith(i.link)
      }
      return i.link === pathname
    })?.key
    if (v !== selected) setSelected(v as string)
  }, [selected, pathname])

  function renderExpand() {
    if (!expand) return null
    return HEADER_ITEMS.map(item => (
      <motion.div
        initial={{
          opacity: 0,
          translateX: -20
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            delay: 0.3
          }
        }}
        exit={{
          opacity: 0,
          translateX: -40,
        }}
        key={item.key}
      >
        <Item
          selected={selected === item.key}
          onClick={() => {
            console.log('click')
            router.push(item.link)
            // setSelected(item.key)
          }}
          icon={item.icon}
          title={item.label}
        />
      </motion.div>
    ))
  }

  return (
    <motion.div
      initial={{
        width: expandWdith
      }}
      animate={{
        width: expand ? expandWdith : ITEM_BASE_WIDTH,
        transition: {
          duration: 0.2
        }
      }}
      className={cls('menu', { ['menu-expand']: expand })}>
      <Item onClick={() => setExpand(prev => !prev)} icon={expand ? <X /> : <AlignJustify />} />
      <AnimatePresence>
        {renderExpand()}
      </AnimatePresence>
    </motion.div>
  )
}

export default Menu
