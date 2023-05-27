import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { ALL_POSTS } from '@/common/posts'
import Empty from '@/components/ui/empty'
import dayjs from 'dayjs'
import { marked } from 'marked'

type Props = {};

/**
 * @Author: wangyi
 * @Date: 2023-05-27
 */
const Post: React.FC<Props> = () => {
  const router = useRouter();
  const { filename } = router.query
  const post = ALL_POSTS.find(i => i.filename === filename)
  const [body, setBody] = useState('')

  useEffect(() => {
    if (post) {
      fetch(`/_posts/${post.filename}.md`)
        .then(res => res.text())
        .then(data => {
          marked.parse(data, (error, parseResult) => {
            if (!error) setBody(parseResult)
          })
        })
    }
  }, [post])

  if (!post) return <Empty content="您访问的文章不存在哦！" />;

  function renderHeader() {
    return (
      <div className="container-card flex-col">
        <h3 className="text-white subtitle">{post?.title}</h3>
        <div className="w-80 text-center mt-4">{post?.desc}</div>
        <div className="mt-6 text-center text-sm">{dayjs(post?.date).format('L')}</div>
      </div>
    )
  }

  return (
    <>
      {renderHeader()}
      <div className="container-card">
        <div className="w-full" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </>
  );
}

export default Post;
