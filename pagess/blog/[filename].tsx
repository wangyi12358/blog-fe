import React from 'react';
import { ALL_POSTS, type Post } from '@/common/posts'
import Empty from '@/components/ui/empty'
import dayjs from 'dayjs'
import 'highlight.js';
import go from 'highlight.js/lib/languages/go'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/androidstudio.css'
import Markdown from 'marked-react'
// @ts-ignore
import Lowlight from 'react-lowlight';
import fs from 'fs'

Lowlight.registerLanguage('go', go);
Lowlight.registerLanguage('bash', bash);
const renderer = {
  code(snippet: any, lang: any) {
    return <Lowlight language={lang} value={snippet} />;
  },
};

interface Params {
  filename: string
}

function Post({ post }: {post: Post}) {

  if (!post) return <Empty content="您访问的文章不存在哦！" />;

  return (
    <>
      <div className="container-card flex-col">
        <h3 className="text-white subtitle">{post?.title}</h3>
        <div className="w-80 text-center mt-4">{post?.desc}</div>
        <div className="mt-6 text-center text-sm">{dayjs(post?.date).format('L')}</div>
      </div>
      <div className="container-card">
        <div className="w-full prose dark:prose-invert">
          <Markdown renderer={renderer}>
            {post.body}
          </Markdown>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(props: {params: Params}) {
  const { params } = props

  const post = ALL_POSTS.find(i => i.filename === params.filename)
  if (post && !post.body) {
    const filepath = `${process.cwd()}/public/_posts/${params.filename}.md`
    post.body = fs.readFileSync(filepath, 'utf8')
  }
  return { props: { post } }
}

export default Post
