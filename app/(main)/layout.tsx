import React from 'react'
import Layout from '@/components/layout';

function PageLayout({ children }: {children: React.ReactNode}) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}

export default PageLayout
