import React from 'react';
import { ALL_POSTS } from '@/common/posts'
import Posts from '@/components/blog/posts'

type Props = {};

const BlogHeader = () => {
  return (
    <div className="container-card flex-col">
      <h2 className="text-white title">Blog</h2>
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
