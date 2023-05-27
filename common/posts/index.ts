export interface Post {
  title: string
  desc: string
  filename: string
  date: string
  readTime: number // minute
}

// all post
export const ALL_POSTS: Post[] = [
  {
    title: 'Web3',
    desc: '什么是web3？什么是区块链？什么是DApp？什么是智能合约？web3需要了解什么知识？接下来我会带大家一起探索web3。',
    filename: 'web3',
    date: '2023-5-27',
    readTime: 3
  }
]

// featured posts
export const FEATURED_POSTS: Post[] = [
  ALL_POSTS[0]
]
