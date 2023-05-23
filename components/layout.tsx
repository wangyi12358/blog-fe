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
    <div className="max-w-3xl mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
