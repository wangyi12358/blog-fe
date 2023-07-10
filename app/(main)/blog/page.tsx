import React from 'react';
import { ALL_POSTS } from '@/common/posts'
import Posts from '@/components/blog/posts'

const BlogHeader = () => {
  return (
    <div className="container-card flex-col animation-enter-from-bottom">
      <h2 className="text-white title">Blog</h2>
      <div className="text-center w-80">
        欢迎来到我的博客，我会在下面分享技术文章，也可能是看到某篇文章之后的想法或者见解，供大家一起学习成长。
      </div>
    </div>
  )
}

function Blog() {
  return (
    <>
      <BlogHeader />
      <Posts className="p-8 mt-6" posts={ALL_POSTS} />
    </>
  );
}

export default Blog;
