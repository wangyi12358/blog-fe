import React from 'react';
import Layout from '@/components/layout'
import 'tailwindcss/tailwind.css'
import '../app/globals.css'
import { Metadata } from 'next';

// dayjs plugins
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(LocalizedFormat)

type Props = {
  Component: () => JSX.Element;
  pageProps: any
};

const title = 'Mika | 全栈开发者'

export const metadata: Metadata = {
  description: '我是 Mika，全栈开发者，这是我的个人 Blog，我会不定时分享技术文章，帮助大家一起快速成长。',
  icons: [
    'https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/apu26-qpocc-001.ico'
  ],
  title: {
    template: '%s | Mika Wang',
    default: title,
  },
  keywords: '开发,前端,后端,Blog,技术,Mika',
}

function App({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

}

export default App;
