export interface Post {
  title: string
  desc: string
  filename: string
  date: string
  readTime: number // minute
  body?: string
}

// all post
export const ALL_POSTS: Post[] = [
  {
    title: 'Go 逃逸分析',
    desc: '什么是逃逸分析？什么是指针逃逸？堆栈是什么？，接下来带大家一起探索。',
    filename: 'go-escape',
    date: '2023-5-27',
    readTime: 5
  },
  {
    title: '如何使用Stable diffusion',
    desc: '如何安装Sd？安装Sd需要注意什么？如何安装中文版？以及如何使用Sd一些常用插件',
    filename: 'stable-diffusion',
    date: '2023-5-27',
    readTime: 7
  },
  {
    title: 'Web3.0（编写中）',
    desc: '什么是web3？什么是区块链？什么是DApp？什么是智能合约？web3需要了解什么知识？接下来我会带大家一起探索web3。',
    filename: 'web3',
    date: '2023-6-04',
    readTime: 5
  },
  {
    title: '代码规范',
    desc: '接下来如何带大家写出维护性、可读性、复用性高的代码，让大家的代码跟你人一样漂亮。',
    filename: 'code-standard',
    date: '2023-6-09',
    readTime: 5
  }
]

// featured posts
export const FEATURED_POSTS: Post[] = [
  ALL_POSTS[0],
  ALL_POSTS[1],
  ALL_POSTS[3],
]
