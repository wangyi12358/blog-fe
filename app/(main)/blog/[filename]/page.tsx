import React from 'react';
import Markdown from '@/components/markdown'
import { notFound } from 'next/navigation'
import { ALL_POSTS } from '@/common/posts';
import fs from 'fs';
import { formatDate } from '@/utils/date';

interface Params {
  filename: string
}

function BlogPost({ params }: {
  params: Params
}) {
  const post = ALL_POSTS.find(i => i.filename === params.filename)
  if (post && !post.body) {
    const filepath = `${process.cwd()}/public/_posts/${params.filename}.md`
    post.body = fs.readFileSync(filepath, 'utf8')
  }

  if (!post) {
    notFound()
  }


  return (
    <>
      <div className="container-card flex-col">
        <h3 className="text-white subtitle">{post?.title}</h3>
        <div className="w-80 text-center mt-4">{post?.desc}</div>
        <div className="mt-6 text-center text-sm">{formatDate(post?.date)}</div>
      </div>
      <div className="container-card">
        <div className="w-full prose dark:prose-invert">
          <Markdown>
            {post.body ?? ''}
          </Markdown>
        </div>
      </div>
    </>
  )
}

export default BlogPost
