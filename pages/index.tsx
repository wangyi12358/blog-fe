import React from 'react';
import Avatar from '@/components/ui/avatar';
import Github from '@/components/icons/github'
import Twitter from '@/components/icons/twitter'
import Telegram from '@/components/icons/telegram'
import Email from '@/components/icons/email'
import Posts from '@/components/blog/posts'
import { FEATURED_POSTS } from '@/common/posts'

type Props = {};

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

const PersonalInfo = () => {

  function renderContacts() {
    return (
      <div className="flex gap-6">
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
        <div className="text-center mt-2">@Mika_wang</div>
        <h2 className="text-center text-white font-bold title">Mika wang</h2>
        {renderContacts()}
        <div className="mt-4 w-80 text-center">
          我是 Mika，一名全栈工程师，主要技术栈 React、Typescript、Nodejs、Golang，我热爱Coding、创新、生活、以及探索和学习未知的领域。
        </div>
      </div>
    </div>
  )
}

const Blogs = () => {
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

const Projects = () => {
  return (
    <div className="flex items-center justify-center mt-6 relative layout-container rounded-sm p-8">
      <div className="layout-background absolute" />
      <div>
        This is my projects
      </div>
    </div>
  )
}

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const Index: React.FC<Props> = () => {

  return (
    <>
      <PersonalInfo />
      <Blogs />
      {/*<Projects />*/}
    </>
  );
}

export default Index;
