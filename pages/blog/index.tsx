import React from 'react';
import { ALL_POSTS } from '@/common/posts'
import Posts from '@/components/blog/posts'

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

const Blog: React.FC<Props> = () => {
  return (
    <>
      <BlogHeader />
      <Posts posts={ALL_POSTS} padding />
    </>
  );
}

export default Blog;
