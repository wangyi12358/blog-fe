import React from 'react';
import { Post } from '@/common/posts'
import Link from 'next/link';
import ChevronRight from '@/components/icons/chevron-right';
import classnames from 'classnames';
import { formatDate } from '@/utils/date';

type Props = {
  posts: Post[]
  className?: string
};

/**
 * @Author: wangyi
 * @Date: 2023-05-27
 */
const Posts: React.FC<Props> = ({ posts, className }) => {

  return (
    <div
      className={classnames(
        'flex flex-col gap-4 items-center relative layout-container rounded',
        className,
      )}>
      {posts.map((post, index) => {
        const href = `/blog/${post.filename}`

        return (
          <div
            style={{
              backgroundColor: 'rgb(38, 42, 51)'
            }}
            className="p-4 w-full rounded-md flex justify-between items-center"
            key={`post_${index}`}
          >
            <div className="h-full basis-full">
              <Link href={href}>
                <h4 className="text-lg text-white clickable">{post.title}</h4>
              </Link>
              <div className="text-sm">{post.desc}</div>
              <div className="mt-2 flex justify-between text-sm">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}分钟阅读</span>
              </div>
            </div>
            <Link href={href}>
              <div
                style={{ backgroundColor: 'rgb(30, 34, 43)' }}
                className="clickable text-white text-lg w-8 h-8 blog-post-right ml-12 hidden md:block"
              >
                  <ChevronRight className="chevron-right h-full m-auto" />
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default Posts;
