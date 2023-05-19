import React from 'react';
import Layout from '@/components/layout'

type Props = {
  Component: () => JSX.Element;
  pageProps: any
};

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const App: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
