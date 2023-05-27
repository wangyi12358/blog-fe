import React from 'react';
import { POSTS } from '@/_posts'
import ChevronRight from '@/components/icons/chevron-right'
import dayjs from 'dayjs'

type Props = {};

const BlogHeader = () => {
  return (
    <div className="flex flex-col items-center mt-6 relative layout-container rounded-sm p-8">
      <h2 className="text-white">Blog</h2>
      <div className="mt-2 text-center w-80">
        欢迎来到我的博客，我会在下面分享技术文章，也可能是看到某篇文章之后的想法或者见解，供大家一起学习成长。
      </div>
    </div>
  )
}

const BlogPosts = () => {

  return (
    <div className="flex flex-col items-center mt-6 relative layout-container rounded-sm p-8">
      {POSTS.map((post, index) => {
        return (
          <div
            style={{
              backgroundColor: 'rgb(38, 42, 51)'
            }}
            className="hover:primary-color-chevron-right cursor-pointer p-4 w-full rounded-md flex justify-between items-center"
            key={`post_${index}`}
          >
            <div className="h-full basis-full">
              <h4 className="text-white">{post.title}</h4>
              <div className="mt-2">{post.desc}</div>
              <div className="mt-2 flex justify-between text-sm">
                <span>{dayjs(post.date).format('L')}</span>
                <span>{post.readTime}分钟阅读</span>
              </div>
            </div>
            <div
              style={{ backgroundColor: 'rgb(30, 34, 43)' }}
              className="text-white text-lg w-8 h-8 blog-post-right ml-12"
            >
              <ChevronRight className="duration-300	chevron-right h-full m-auto" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Blog: React.FC<Props> = () => {
  return (
    <>
      <BlogHeader />
      <BlogPosts />
    </>
  );
}

export default Blog;
