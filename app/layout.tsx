import './globals.css'
import { Inter } from 'next/font/google'
import { type Metadata } from 'next'

const inter = Inter({ subsets: [ 'latin' ] })
const title = 'Mika | 全栈开发者'

export const metadata: Metadata = {
  description: '我是 Mika，全栈开发者，这是我的个人 Blog，我会不定时分享技术文章，帮助大家一起快速成长。',
  icons: [
    'https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/apu26-qpocc-001.ico'
  ],
  title: {
    template: '%s | Cali Castle',
    default: title,
  },
  keywords: '开发,前端,后端,Blog,技术,Mika',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
