import React from 'react';
import Header from './header'
import Footer from './footer'

type Props = {
  children: React.ReactNode
};

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
