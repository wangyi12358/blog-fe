import React from 'react';
import Avatar from '@/components/ui/avatar';
import Github from '@/components/icons/github'
import Twitter from '@/components/icons/twitter'
import Telegram from '@/components/icons/telegram'
import Email from '@/components/icons/email'
import Posts from '@/components/blog/posts'
import { FEATURED_POSTS } from '@/common/posts'
import Bio from './bio'

const contacts = [
  {
    icon: <Github />,
    link: 'https://github.com/wangyi12358',
  },
  {
    icon: <Twitter />,
    link: 'https://twitter.com/Mika00276121'
  },
  {
    icon: <Telegram />,
    link: 'https://t.me/mika_wang'
  },
  {
    icon: <Email />,
    link: 'mailto:wangmikayi@gmail.com'
  }
]

function PersonalInfo() {
  function renderContacts() {
    return (
      <div className="animation-enter-from-bottom flex gap-6">
        {contacts.map((item, index) => {
          return (
            <a
              className="hover:primary-color text-xl duration-300"
              target="_blank"
              key={`${index}`}
              href={item.link}
            >
              {item.icon}
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container-card">
      <div className="layout-background absolute" />
      <div className="flex flex-col items-center">
        <Avatar src="https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/avatar.jpg"/>
        <div className="animation-enter-from-bottom text-center mt-2">@Mika_wang</div>
        <h2 className="animation-enter-from-bottom text-center text-white font-bold title">Mika wang</h2>
        {renderContacts()}
        <div className="mt-4 w-80 text-center">
          <Bio />
        </div>
      </div>
    </div>
  )
}

function Blogs() {

  return (
    <div className="container-card">
      <div className="layout-background absolute" />
      <div className="w-full">
        <h3 className="primary-color subtitle">博客</h3>
        <Posts posts={FEATURED_POSTS} />
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="flex items-center justify-center mt-6 relative layout-container rounded-sm p-8">
      <div className="layout-background absolute" />
      <div>
        This is my projects
      </div>
    </div>
  )
}

function HomePage() {

  return (
    <>
      <PersonalInfo />
      <Blogs />
    </>
  );
}

export default HomePage;
