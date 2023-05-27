interface Post {
  title: string
  desc: string
  filename: string
  date: string
  readTime: number // minute
}

export const POSTS: Post[] = [
  {
    title: '什么是web3.0',
    desc: '在web3.0时代我们需要学习什么知识，掌握什么技能，我会通过我的理解给大家介绍。',
    filename: 'web3.0.md',
    date: '2023-5-27',
    readTime: 3
  }
]
