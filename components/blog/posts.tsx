import React from 'react';
import { Post } from '@/common/posts'
import Router from 'next/router';
import dayjs from 'dayjs';
import ChevronRight from '@/components/icons/chevron-right';
import classnames from 'classnames';
import isMobile from 'is-mobile'

type Props = {
  posts: Post[]
  padding?: boolean
};

/**
 * @Author: wangyi
 * @Date: 2023-05-27
 */
const Posts: React.FC<Props> = ({ posts, padding }) => {
  console.log('isMobile=', isMobile())

  return (
    <div
      className={classnames('flex flex-col items-center relative layout-container rounded mt-6',
        { ['p-8']: padding }
      )}>
      {posts.map((post, index) => {

        const onClick = () => {
          Router.push(`/blog/${post.filename}`)
        }

        return (
          <div
            style={{
              backgroundColor: 'rgb(38, 42, 51)'
            }}
            className="p-4 w-full rounded-md flex justify-between items-center"
            key={`post_${index}`}
          >
            <div className="h-full basis-full">
              <h4 onClick={onClick} className="text-lg text-white clickable">{post.title}</h4>
              <div className="mt-2 text-sm">{post.desc}</div>
              <div className="mt-2 flex justify-between text-sm">
                <span>{dayjs(post.date).format('L')}</span>
                <span>{post.readTime}分钟阅读</span>
              </div>
            </div>
            <div
              onClick={onClick}
              style={{ backgroundColor: 'rgb(30, 34, 43)' }}
              className="clickable text-white text-lg w-8 h-8 blog-post-right ml-12 hidden md:block"
            >
              <ChevronRight className="chevron-right h-full m-auto" />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Posts;
