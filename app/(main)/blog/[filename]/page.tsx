import dayjs from 'dayjs';
import React from 'react';
import Markdown from 'marked-react'
// @ts-ignore
import Lowlight from 'react-lowlight';
import 'highlight.js';
import go from 'highlight.js/lib/languages/go'
import bash from 'highlight.js/lib/languages/bash'

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

function BlogPost({ params }: {
  params: Params
}) {
  const post: any = {}
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
  )
}

export default BlogPost
