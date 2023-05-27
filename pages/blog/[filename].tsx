import React from 'react';
import { useRouter } from 'next/router'

type Props = {};

/**
 * @Author: wangyi
 * @Date: 2023-05-27
 */
const Post: React.FC<Props> = () => {
  const router = useRouter();
  const { filename } = router.query
  console.log('filename==', filename)
  return (
    <div>Post</div>
  );
}

export default Post;
