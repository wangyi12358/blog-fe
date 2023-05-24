import React from 'react';

type Props = {};

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const Footer: React.FC<Props> = () => {
  return (
    <footer className="flex items-center mt-6 justify-center p-12 relative layout-container rounded-t-sm">
      <div className="layout-background absolute" />
      <div className="flex flex-col items-center w-full">
        <h3 className="primary-color">Mika</h3>
        <div className="mt-3 mb-3 border-t border-solid border-gray-100 opacity-10 w-full" />
        <div>© 2001 - 2023 Mika Wang.</div>
      </div>
    </footer>
  );
}

export default Footer;
